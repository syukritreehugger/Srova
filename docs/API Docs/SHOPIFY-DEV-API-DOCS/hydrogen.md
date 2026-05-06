# Shopify Hydrogen Reference (Indonesian / English)

> Referensi lengkap **Hydrogen** Shopify API yang disusun ulang dari https://shopify.dev/docs/api/hydrogen.
> Dokumen ini dirancang untuk pengembang berbahasa Indonesia, namun seluruh konten teknis (skema, tipe, nama field, contoh kode) dipertahankan dalam bahasa Inggris asli untuk memastikan akurasi.

| Item | Nilai |
|------|-------|
| Sumber | `https://shopify.dev/docs/api/hydrogen` |
| Total halaman | **90** |
| Tanggal kompilasi | 2026-05-01 |
| Bahasa | Indonesia (intro/ToC) + English (konten teknis) |



## Daftar Isi (Table of Contents)

- [Landing](#landing)
- [latest](#latest)
- [latest / components / analytics / analytics-cartview](#latest-components-analytics-analytics-cartview)
- [latest / components / analytics / analytics-collectionview](#latest-components-analytics-analytics-collectionview)
- [latest / components / analytics / analytics-customview](#latest-components-analytics-analytics-customview)
- [latest / components / analytics / analytics-productview](#latest-components-analytics-analytics-productview)
- [latest / components / analytics / analytics-provider](#latest-components-analytics-analytics-provider)
- [latest / components / analytics / analytics-searchview](#latest-components-analytics-analytics-searchview)
- [latest / components / cartform](#latest-components-cartform)
- [latest / components / media / externalvideo](#latest-components-media-externalvideo)
- [latest / components / media / image](#latest-components-media-image)
- [latest / components / media / mediafile](#latest-components-media-mediafile)
- [latest / components / media / modelviewer](#latest-components-media-modelviewer)
- [latest / components / media / video](#latest-components-media-video)
- [latest / components / money](#latest-components-money)
- [latest / components / optimisticinput](#latest-components-optimisticinput)
- [latest / components / pagination](#latest-components-pagination)
- [latest / components / richtext](#latest-components-richtext)
- [latest / components / script](#latest-components-script)
- [latest / components / seo](#latest-components-seo)
- [latest / components / shoppaybutton](#latest-components-shoppaybutton)
- [latest / components / variantselector](#latest-components-variantselector)
- [latest / hooks / useanalytics](#latest-hooks-useanalytics)
- [latest / hooks / usecustomerprivacy](#latest-hooks-usecustomerprivacy)
- [latest / hooks / useloadscript](#latest-hooks-useloadscript)
- [latest / hooks / usemoney](#latest-hooks-usemoney)
- [latest / hooks / usenonce](#latest-hooks-usenonce)
- [latest / hooks / useoptimisticcart](#latest-hooks-useoptimisticcart)
- [latest / hooks / useoptimisticdata](#latest-hooks-useoptimisticdata)
- [latest / hooks / useoptimisticvariant](#latest-hooks-useoptimisticvariant)
- [latest / hooks / useshopifycookies](#latest-hooks-useshopifycookies)
- [latest / utilities / caching / cachecustom](#latest-utilities-caching-cachecustom)
- [latest / utilities / caching / cachelong](#latest-utilities-caching-cachelong)
- [latest / utilities / caching / cachenone](#latest-utilities-caching-cachenone)
- [latest / utilities / caching / cacheshort](#latest-utilities-caching-cacheshort)
- [latest / utilities / caching / createwithcache](#latest-utilities-caching-createwithcache)
- [latest / utilities / caching / generatecachecontrolheader](#latest-utilities-caching-generatecachecontrolheader)
- [latest / utilities / caching / inmemorycache](#latest-utilities-caching-inmemorycache)
- [latest / utilities / cart / cartattributesupdatedefault](#latest-utilities-cart-cartattributesupdatedefault)
- [latest / utilities / cart / cartbuyeridentityupdatedefault](#latest-utilities-cart-cartbuyeridentityupdatedefault)
- [latest / utilities / cart / cartcreatedefault](#latest-utilities-cart-cartcreatedefault)
- [latest / utilities / cart / cartdeliveryaddressesadd](#latest-utilities-cart-cartdeliveryaddressesadd)
- [latest / utilities / cart / cartdeliveryaddressesremove](#latest-utilities-cart-cartdeliveryaddressesremove)
- [latest / utilities / cart / cartdeliveryaddressesreplace](#latest-utilities-cart-cartdeliveryaddressesreplace)
- [latest / utilities / cart / cartdeliveryaddressesupdate](#latest-utilities-cart-cartdeliveryaddressesupdate)
- [latest / utilities / cart / cartdiscountcodesupdatedefault](#latest-utilities-cart-cartdiscountcodesupdatedefault)
- [latest / utilities / cart / cartgetdefault](#latest-utilities-cart-cartgetdefault)
- [latest / utilities / cart / cartgetiddefault](#latest-utilities-cart-cartgetiddefault)
- [latest / utilities / cart / cartgiftcardcodesadddefault](#latest-utilities-cart-cartgiftcardcodesadddefault)
- [latest / utilities / cart / cartgiftcardcodesremovedefault](#latest-utilities-cart-cartgiftcardcodesremovedefault)
- [latest / utilities / cart / cartgiftcardcodesupdatedefault](#latest-utilities-cart-cartgiftcardcodesupdatedefault)
- [latest / utilities / cart / cartlinesadddefault](#latest-utilities-cart-cartlinesadddefault)
- [latest / utilities / cart / cartlinesremovedefault](#latest-utilities-cart-cartlinesremovedefault)
- [latest / utilities / cart / cartlinesupdatedefault](#latest-utilities-cart-cartlinesupdatedefault)
- [latest / utilities / cart / cartmetafielddeletedefault](#latest-utilities-cart-cartmetafielddeletedefault)
- [latest / utilities / cart / cartmetafieldssetdefault](#latest-utilities-cart-cartmetafieldssetdefault)
- [latest / utilities / cart / cartnoteupdatedefault](#latest-utilities-cart-cartnoteupdatedefault)
- [latest / utilities / cart / cartselecteddeliveryoptionsupdatedefault](#latest-utilities-cart-cartselecteddeliveryoptionsupdatedefault)
- [latest / utilities / cart / cartsetiddefault](#latest-utilities-cart-cartsetiddefault)
- [latest / utilities / cart / createcarthandler](#latest-utilities-cart-createcarthandler)
- [latest / utilities / createcontentsecuritypolicy](#latest-utilities-createcontentsecuritypolicy)
- [latest / utilities / createcustomeraccountclient](#latest-utilities-createcustomeraccountclient)
- [latest / utilities / createhydrogencontext](#latest-utilities-createhydrogencontext)
- [latest / utilities / createrequesthandler](#latest-utilities-createrequesthandler)
- [latest / utilities / createstorefrontclient](#latest-utilities-createstorefrontclient)
- [latest / utilities / decodeencodedvariant](#latest-utilities-decodeencodedvariant)
- [latest / utilities / flattenconnection](#latest-utilities-flattenconnection)
- [latest / utilities / getadjacentandfirstavailablevariants](#latest-utilities-getadjacentandfirstavailablevariants)
- [latest / utilities / getclientbrowserparameters](#latest-utilities-getclientbrowserparameters)
- [latest / utilities / getpaginationvariables](#latest-utilities-getpaginationvariables)
- [latest / utilities / getproductoptions](#latest-utilities-getproductoptions)
- [latest / utilities / getselectedproductoptions](#latest-utilities-getselectedproductoptions)
- [latest / utilities / getseometa](#latest-utilities-getseometa)
- [latest / utilities / getshopanalytics](#latest-utilities-getshopanalytics)
- [latest / utilities / getshopifycookies](#latest-utilities-getshopifycookies)
- [latest / utilities / getsitemap](#latest-utilities-getsitemap)
- [latest / utilities / getsitemapindex](#latest-utilities-getsitemapindex)
- [latest / utilities / gettrackingvalues](#latest-utilities-gettrackingvalues)
- [latest / utilities / graphiqlloader](#latest-utilities-graphiqlloader)
- [latest / utilities / hydrogencontext](#latest-utilities-hydrogencontext)
- [latest / utilities / isoptionvaluecombinationinencodedvariant](#latest-utilities-isoptionvaluecombinationinencodedvariant)
- [latest / utilities / mapselectedproductoptiontoobject](#latest-utilities-mapselectedproductoptiontoobject)
- [latest / utilities / parsegid](#latest-utilities-parsegid)
- [latest / utilities / parsemetafield](#latest-utilities-parsemetafield)
- [latest / utilities / sendshopifyanalytics](#latest-utilities-sendshopifyanalytics)
- [latest / utilities / storefront-api-types](#latest-utilities-storefront-api-types)
- [latest / utilities / storefront-schema](#latest-utilities-storefront-schema)
- [latest / utilities / storefrontapicustomscalars](#latest-utilities-storefrontapicustomscalars)
- [latest / utilities / storefrontredirect](#latest-utilities-storefrontredirect)
- [latest / utilities / useselectedoptioninurlparam](#latest-utilities-useselectedoptioninurlparam)


---



<a id="landing"></a>


## Hydrogen

Hydrogen is Shopify’s opinionated stack for headless commerce, built on [React Router](https://reactrouter.com/home). It provides a set of tools, utilities, and best-in-class examples for building dynamic and performant commerce applications.

### Setup

1. Create a new Hydrogen project with your preferred package manager.
2. Import components, hooks, or utilities that you want to use in your app. For more, see the [getting started guide](https://shopify.dev/docs/custom-storefronts/hydrogen/getting-started).

[API Reference - Getting started with Hydrogen and Oxygen](https://shopify.dev/docs/custom-storefronts/hydrogen/getting-started)

### Create a new Hydrogen project

###### npm

```txt
npm create @shopify/hydrogen@latest
```

###### yarn

```txt
yarn create @shopify/hydrogen
```

***

### Authentication

To make full use of Hydrogen, you need to authenticate with and make requests to the [Storefront API](https://shopify.dev/docs/api/storefront) and the [Customer Account API](https://shopify.dev/docs/api/customer). Hydrogen includes full-featured API clients to securely handle API queries and mutations.

You can create access tokens for your own Shopify store by [installing the Hydrogen sales channel](https://apps.shopify.com/hydrogen), which includes built-in support for Oxygen, Shopify’s global edge hosting platform. Or install the [Headless sales channel](https://apps.shopify.com/headless) to host your Hydrogen app anywhere.

Both the Storefront API and Customer Account API offer public credentials for client-side applications.

[API Reference - Hydrogen sales channel](https://apps.shopify.com/hydrogen)

[API Reference - Headless sales channel](https://apps.shopify.com/headless)

### Authenticate a Hydrogen app

###### server.js

```js
/**
 * server.js
 * ---------
 * Create a storefront client.
 * Check the server.js file in the root of your new Hydrogen project to see
 * an example implementation of this function. If you start from an official
 * Hydrogen template (Hello World or Demo Store), then the client is already
 * set up for you. Update the Shopify store domain and API token to start
 * querying your own store inventory.
 */
const {storefront} = createStorefrontClient({
  cache,
  waitUntil,
  i18n: {language: 'EN', country: 'US'},
  // `env` provides access to runtime data, including environment variables
  publicStorefrontToken: env.PUBLIC_STOREFRONT_API_TOKEN,
  privateStorefrontToken: env.PRIVATE_STOREFRONT_API_TOKEN,
  storeDomain: env.PUBLIC_STORE_DOMAIN,
  storefrontId: env.PUBLIC_STOREFRONT_ID,
  storefrontHeaders: getStorefrontHeaders(request),
});
```

###### .env

```txt
# These API credentials fetch example inventory from the Hydrogen Demo Store
# https://hydrogen.shop
#
# Replace with your own store domain and Storefront API token

SESSION_SECRET="foobar"
PUBLIC_STOREFRONT_API_TOKEN="3b580e70970c4528da70c98e097c2fa0"
PUBLIC_STORE_DOMAIN="hydrogen-preview.myshopify.com"
```

***

### Versioning

Hydrogen is tied to specific versions of the [Storefront API](https://shopify.dev/api/storefront), which is versioned quarterly. For example, if you're using Storefront API version `2023-10`, then Hydrogen versions `2023.10.x` are fully compatible.

**Caution:**

If a Storefront API version includes breaking changes, then the corresponding Hydrogen version will include the same breaking changes.

[API Reference - Shopify API versioning](https://shopify.dev/docs/api/usage/versioning)

[API Reference - API release notes](https://shopify.dev/docs/api/release-notes)

***

### How Hydrogen works with Hydrogen React

Hydrogen is [built on React Router](https://shopify.dev/docs/custom-storefronts/hydrogen/project-structure). But many of the components, hooks and utilities built into Hydrogen come from [Hydrogen React](https://shopify.dev/docs/api/hydrogen-react), an underlying package that’s framework-agnostic. For convenience, the Hydrogen package re-exports those resources. This means that if you’re building a Hydrogen app, then you should import modules from the `@shopify/hydrogen` package.

### Importing Hydrogen components

### example-page.jsx

```jsx
import {ShopPayButton} from '@shopify/hydrogen';


export function renderShopPayButton({variantId, storeDomain}) {
  return <ShopPayButton variantIds={[variantId]} storeDomain={storeDomain} />;
}
```

***

### Resources

[Custom storefronts on Shopify\
\
](https://shopify.dev/custom-storefronts)

[Learn more about how to design, build, and manage custom storefronts on Shopify.](https://shopify.dev/custom-storefronts)

[Hydrogen on GitHub\
\
](https://github.com/Shopify/hydrogen)

[Follow the Hydrogen project, file bugs and feature requests, preview upcoming features, and more](https://github.com/Shopify/hydrogen)

***

---



<a id="latest"></a>


## Hydrogen

Hydrogen is Shopify’s opinionated stack for headless commerce, built on [React Router](https://reactrouter.com/home). It provides a set of tools, utilities, and best-in-class examples for building dynamic and performant commerce applications.

### Setup

1. Create a new Hydrogen project with your preferred package manager.
2. Import components, hooks, or utilities that you want to use in your app. For more, see the [getting started guide](https://shopify.dev/docs/custom-storefronts/hydrogen/getting-started).

[API Reference - Getting started with Hydrogen and Oxygen](https://shopify.dev/docs/custom-storefronts/hydrogen/getting-started)

### Create a new Hydrogen project

###### npm

```txt
npm create @shopify/hydrogen@latest
```

###### yarn

```txt
yarn create @shopify/hydrogen
```

***

### Authentication

To make full use of Hydrogen, you need to authenticate with and make requests to the [Storefront API](https://shopify.dev/docs/api/storefront) and the [Customer Account API](https://shopify.dev/docs/api/customer). Hydrogen includes full-featured API clients to securely handle API queries and mutations.

You can create access tokens for your own Shopify store by [installing the Hydrogen sales channel](https://apps.shopify.com/hydrogen), which includes built-in support for Oxygen, Shopify’s global edge hosting platform. Or install the [Headless sales channel](https://apps.shopify.com/headless) to host your Hydrogen app anywhere.

Both the Storefront API and Customer Account API offer public credentials for client-side applications.

[API Reference - Hydrogen sales channel](https://apps.shopify.com/hydrogen)

[API Reference - Headless sales channel](https://apps.shopify.com/headless)

### Authenticate a Hydrogen app

###### server.js

```js
/**
 * server.js
 * ---------
 * Create a storefront client.
 * Check the server.js file in the root of your new Hydrogen project to see
 * an example implementation of this function. If you start from an official
 * Hydrogen template (Hello World or Demo Store), then the client is already
 * set up for you. Update the Shopify store domain and API token to start
 * querying your own store inventory.
 */
const {storefront} = createStorefrontClient({
  cache,
  waitUntil,
  i18n: {language: 'EN', country: 'US'},
  // `env` provides access to runtime data, including environment variables
  publicStorefrontToken: env.PUBLIC_STOREFRONT_API_TOKEN,
  privateStorefrontToken: env.PRIVATE_STOREFRONT_API_TOKEN,
  storeDomain: env.PUBLIC_STORE_DOMAIN,
  storefrontId: env.PUBLIC_STOREFRONT_ID,
  storefrontHeaders: getStorefrontHeaders(request),
});
```

###### .env

```txt
# These API credentials fetch example inventory from the Hydrogen Demo Store
# https://hydrogen.shop
#
# Replace with your own store domain and Storefront API token

SESSION_SECRET="foobar"
PUBLIC_STOREFRONT_API_TOKEN="3b580e70970c4528da70c98e097c2fa0"
PUBLIC_STORE_DOMAIN="hydrogen-preview.myshopify.com"
```

***

### Versioning

Hydrogen is tied to specific versions of the [Storefront API](https://shopify.dev/api/storefront), which is versioned quarterly. For example, if you're using Storefront API version `2023-10`, then Hydrogen versions `2023.10.x` are fully compatible.

**Caution:**

If a Storefront API version includes breaking changes, then the corresponding Hydrogen version will include the same breaking changes.

[API Reference - Shopify API versioning](https://shopify.dev/docs/api/usage/versioning)

[API Reference - API release notes](https://shopify.dev/docs/api/release-notes)

***

### How Hydrogen works with Hydrogen React

Hydrogen is [built on React Router](https://shopify.dev/docs/custom-storefronts/hydrogen/project-structure). But many of the components, hooks and utilities built into Hydrogen come from [Hydrogen React](https://shopify.dev/docs/api/hydrogen-react), an underlying package that’s framework-agnostic. For convenience, the Hydrogen package re-exports those resources. This means that if you’re building a Hydrogen app, then you should import modules from the `@shopify/hydrogen` package.

### Importing Hydrogen components

### example-page.jsx

```jsx
import {ShopPayButton} from '@shopify/hydrogen';


export function renderShopPayButton({variantId, storeDomain}) {
  return <ShopPayButton variantIds={[variantId]} storeDomain={storeDomain} />;
}
```

***

### Resources

[Custom storefronts on Shopify\
\
](https://shopify.dev/custom-storefronts)

[Learn more about how to design, build, and manage custom storefronts on Shopify.](https://shopify.dev/custom-storefronts)

[Hydrogen on GitHub\
\
](https://github.com/Shopify/hydrogen)

[Follow the Hydrogen project, file bugs and feature requests, preview upcoming features, and more](https://github.com/Shopify/hydrogen)

***

---



<a id="latest-components-analytics-analytics-cartview"></a>


## Analytics.CartView

Publishes a `cart_viewed` event to the `Analytics.Provider` component.

### analytics​Cart​View(**[props](#props-propertydetail-props)**​)

#### Parameters

* **props**

  **BasicViewProps**

  **required**

#### BasicViewProps

* customData

  ```ts
  OtherData
  ```

* data

  ```ts
  OtherData
  ```

#### OtherData



Examples

#### Examples

* #### Example

  ##### JavaScript

  ```js
  import {Analytics} from '@shopify/hydrogen';

  export default function CartView() {
    return (
      <div className="cart">
        <h1>Cart</h1>
        <Analytics.CartView />
      </div>
    );
  }
  ```

  ##### TypeScript

  ```ts
  import {Analytics} from '@shopify/hydrogen';

  export default function CartView() {
    return (
      <div className="cart">
        <h1>Cart</h1>
        <Analytics.CartView />
      </div>
    );
  }
  ```

***

---



<a id="latest-components-analytics-analytics-collectionview"></a>


## Analytics.CollectionView

Publishes a `collection_viewed` event to the `Analytics.Provider` component.

### analytics​Collection​View(**[props](#props-propertydetail-props)**​)

#### Parameters

* **props**

  **CollectionViewProps**

  **required**

#### CollectionViewProps

* customData

  ```ts
  OtherData
  ```

* data

  ```ts
  CollectionPayload
  ```

#### OtherData



#### CollectionPayload

* collection

  ```ts
  CollectionPayloadDetails
  ```

#### CollectionPayloadDetails

* handle

  The collection handle.

  ```ts
  string
  ```

* id

  The collection id.

  ```ts
  string
  ```

Examples

#### Examples

* #### Example

  ##### JavaScript

  ```js
  import {useLoaderData} from 'react-router';
  import {Analytics} from '@shopify/hydrogen';

  export async function loader() {
    return {
      collection: {
        id: '123',
        title: 'ABC',
        handle: 'abc',
      },
    };
  }

  export default function Collection() {
    const {collection} = useLoaderData();
    return (
      <div className="collection">
        <h1>{collection.title}</h1>
        <Analytics.CollectionView
          data={{
            collection: {
              id: collection.id,
              handle: collection.handle,
            },
          }}
        />
      </div>
    );
  }
  ```

  ##### TypeScript

  ```ts
  import {useLoaderData} from 'react-router';
  import {Analytics} from '@shopify/hydrogen';

  export async function loader() {
    return {
      collection: {
        id: '123',
        title: 'ABC',
        handle: 'abc',
      },
    };
  }

  export default function Collection() {
    const {collection} = useLoaderData<typeof loader>();
    return (
      <div className="collection">
        <h1>{collection.title}</h1>
        <Analytics.CollectionView
          data={{
            collection: {
              id: collection.id,
              handle: collection.handle,
            },
          }}
        />
      </div>
    );
  }
  ```

***

---



<a id="latest-components-analytics-analytics-customview"></a>


## Analytics.CustomView

Publishes a custom page view event to the `Analytics.Provider` component. The `type` prop must be preceded by `custom_`.

### analytics​Custom​View(**[props](#props-propertydetail-props)**​)

#### Parameters

* **props**

  **CustomViewProps**

  **required**

#### CustomViewProps

* customData

  ```ts
  OtherData
  ```

* data

  ```ts
  OtherData
  ```

* type

  ```ts
  `custom_${string}`
  ```

#### OtherData



Examples

#### Examples

* #### Example

  ##### JavaScript

  ```js
  import {Analytics} from '@shopify/hydrogen';

  export default function Promotion() {
    return (
      <div className="promotion">
        <h1>Promotion page</h1>
        <Analytics.CustomView
          type="custom_promotion_viewed"
          data={{
            promotion: {
              id: '123',
            },
          }}
        />
      </div>
    );
  }
  ```

  ##### TypeScript

  ```ts
  import {Analytics} from '@shopify/hydrogen';

  export default function Promotion() {
    return (
      <div className="promotion">
        <h1>Promotion page</h1>
        <Analytics.CustomView
          type="custom_promotion_viewed"
          data={{
            promotion: {
              id: '123',
            },
          }}
        />
      </div>
    );
  }
  ```

***

---



<a id="latest-components-analytics-analytics-productview"></a>


## Analytics.ProductView

Publishes a `product_viewed` event to the `Analytics.Provider` component.

### analytics​Product​View(**[props](#props-propertydetail-props)**​)

#### Parameters

* **props**

  **ProductViewProps**

  **required**

#### ProductViewProps

* customData

  ```ts
  OtherData
  ```

* data

  ```ts
  ProductsPayload
  ```

#### OtherData



#### ProductsPayload

* products

  The products associated with this event.

  ```ts
  Array<ProductPayload & OtherData>
  ```

#### ProductPayload

* id

  The product id.

  ```ts
  string
  ```

* price

  The displaying variant price.

  ```ts
  string
  ```

* productType

  The product type.

  ```ts
  string
  ```

* quantity

  The quantity of product.

  ```ts
  number
  ```

* sku

  The product sku.

  ```ts
  string
  ```

* title

  The product title.

  ```ts
  string
  ```

* variantId

  The displaying variant id.

  ```ts
  string
  ```

* variantTitle

  The displaying variant title.

  ```ts
  string
  ```

* vendor

  The product vendor.

  ```ts
  string
  ```

Examples

#### Examples

* #### Example

  ##### JavaScript

  ```js
  import {useLoaderData} from 'react-router';
  import {Analytics} from '@shopify/hydrogen';

  export async function loader() {
    return {
      product: {
        id: '123',
        title: 'ABC',
        vendor: 'abc',
        selectedVariant: {
          id: '456',
          title: 'DEF',
          price: {
            amount: '100',
          },
        },
      },
    };
  }

  export default function Product() {
    const {product} = useLoaderData();
    const {selectedVariant} = product;

    return (
      <div className="product">
        <h1>{product.title}</h1>
        <Analytics.ProductView
          data={{
            products: [
              {
                id: product.id,
                title: product.title,
                price: selectedVariant?.price.amount || '0',
                vendor: product.vendor,
                variantId: selectedVariant?.id || '',
                variantTitle: selectedVariant?.title || '',
                quantity: 1,
              },
            ],
          }}
        />
      </div>
    );
  }
  ```

  ##### TypeScript

  ```ts
  import {useLoaderData} from 'react-router';
  import {Analytics} from '@shopify/hydrogen';

  export async function loader() {
    return {
      product: {
        id: '123',
        title: 'ABC',
        vendor: 'abc',
        selectedVariant: {
          id: '456',
          title: 'DEF',
          price: {
            amount: '100',
          },
        },
      },
    };
  }

  export default function Product() {
    const {product} = useLoaderData<typeof loader>();
    const {selectedVariant} = product;

    return (
      <div className="product">
        <h1>{product.title}</h1>
        <Analytics.ProductView
          data={{
            products: [
              {
                id: product.id,
                title: product.title,
                price: selectedVariant?.price.amount || '0',
                vendor: product.vendor,
                variantId: selectedVariant?.id || '',
                variantTitle: selectedVariant?.title || '',
                quantity: 1,
              },
            ],
          }}
        />
      </div>
    );
  }
  ```

***

---



<a id="latest-components-analytics-analytics-provider"></a>


## Analytics.Provider

Provides a context for tracking page views and cart events to send as analytics data to Shopify. This component is integrated with the Customer Privacy API for consent management. The provider can also be used to connect third-party analytics services through its subscribe and publish system. The [`useAnalytics`](https://shopify.dev/docs/api/hydrogen/2026-04/hooks/useanalytics) hook provides access to the analytics provider context.

You can also listen to a `document` event for `shopifyCustomerPrivacyApiLoaded`. It will be emitted when the Customer Privacy API is loaded.

##### Props

* **cart**

  **Promise\<CartReturn | null> | CartReturn | null**

  **required**

  The cart or cart promise to track for cart analytics. When there is a difference between the state of the cart, `AnalyticsProvider` will trigger a `cart_updated` event. It will also produce `product_added_to_cart` and `product_removed_from_cart` based on cart line quantity and cart line id changes.

* **consent**

  **Consent**

  **required**

  The customer privacy consent configuration and options.

* **shop**

  **Promise\<ShopAnalytics | null> | ShopAnalytics | null**

  **required**

  The shop configuration required to publish analytics events to Shopify. Use [`getShopAnalytics`](https://shopify.dev/docs/api/hydrogen/utilities/getshopanalytics).

* **canTrack**

  **() => boolean**

  An optional function to set wether the user can be tracked. Defaults to Customer Privacy API's `window.Shopify.customerPrivacy.analyticsProcessingAllowed()`.

* **children**

  **ReactNode**

  React children to render.

* **cookieDomain**

  **string**

  The domain scope of the cookie set with `useShopifyCookies`. \*

* **customData**

  **Record\<string, unknown>**

  An optional custom payload to pass to all events. e.g language/locale/currency.

* **disableThrowOnError**

  **boolean**

  **deprecated**

  **Deprecated:**

  Disable throwing errors when required props are missing.

#### CartReturn

```ts
Cart & {
  errors?: StorefrontApiErrors;
}
```

#### Cart

* attributes

  The cart's attributes.

  ```ts
  { __typename?: "Attribute"; key?: string; value?: string; }[]
  ```

* buyerIdentity

  The cart's buyer identity.

  ```ts
  CartType['buyerIdentity']
  ```

* checkoutUrl

  The checkout URL for the cart, if the cart has been created in the Storefront API.

  ```ts
  string
  ```

* cost

  The cost for the cart, including the subtotal, total, taxes, and duties.

  ```ts
  CartType['cost']
  ```

* discountCodes

  The discount codes applied to the cart.

  ```ts
  { __typename?: "CartDiscountCode"; applicable?: boolean; code?: string; }[]
  ```

* id

  The cart's ID if it has been created through the Storefront API.

  ```ts
  string
  ```

* lines

  The cart lines.

  ```ts
  Array<CartLine | ComponentizableCartLine>
  ```

* note

  The cart's note.

  ```ts
  string
  ```

* totalQuantity

  The total number of items in the cart, across all lines. If there are no lines, then the value is 0.

  ```ts
  number
  ```

#### StorefrontApiErrors

```ts
JsonGraphQLError[] | undefined
```

#### JsonGraphQLError

* extensions

  Reserved for implementors to extend the protocol however they see fit, and hence there are no additional restrictions on its contents.

  ```ts
  { [key: string]: unknown; }
  ```

* locations

  If an error can be associated to a particular point in the requested GraphQL document, it should contain a list of locations.

  ```ts
  { line: number; column: number; }[]
  ```

* message

  ```ts
  string
  ```

* name

  ```ts
  string
  ```

* path

  If an error can be associated to a particular field in the GraphQL result, it \_must\_ contain an entry with the key \`path\` that details the path of the response field which experienced the error. This allows clients to identify whether a null result is intentional or caused by a runtime error.

  ```ts
  (string | number)[]
  ```

* stack

  ```ts
  string
  ```

#### Consent

```ts
Partial<
  Pick<
    CustomerPrivacyApiProps,
    | 'checkoutDomain'
    | 'sameDomainForStorefrontApi'
    | 'storefrontAccessToken'
    | 'withPrivacyBanner'
    | 'country'
  >
> & {language?: LanguageCode}
```

#### CustomerPrivacyApiProps

* checkoutDomain

  The production shop checkout domain url.

  ```ts
  string
  ```

* country

  Country code for the shop.

  ```ts
  CountryCode
  ```

* locale

  Language code for the shop.

  ```ts
  LanguageCode
  ```

* onReady

  Callback to be call when customer privacy api is ready.

  ```ts
  () => void
  ```

* onVisitorConsentCollected

  Callback to be called when visitor consent is collected.

  ```ts
  (consent: VisitorConsentCollected) => void
  ```

* sameDomainForStorefrontApi

  Whether consent libraries can use same-domain requests to the Storefront API. Defaults to true if the standard route proxy is enabled in Hydrogen server.

  ```ts
  boolean
  ```

* storefrontAccessToken

  The storefront access token for the shop.

  ```ts
  string
  ```

* withPrivacyBanner

  Whether to load the Shopify privacy banner as configured in Shopify admin. Defaults to true.

  ```ts
  boolean
  ```

#### VisitorConsentCollected

* analyticsAllowed

  ```ts
  boolean
  ```

* firstPartyMarketingAllowed

  ```ts
  boolean
  ```

* marketingAllowed

  ```ts
  boolean
  ```

* preferencesAllowed

  ```ts
  boolean
  ```

* saleOfDataAllowed

  ```ts
  boolean
  ```

* thirdPartyMarketingAllowed

  ```ts
  boolean
  ```

#### ShopAnalytics

* acceptedLanguage

  The language code that is being displayed to user.

  ```ts
  LanguageCode
  ```

* currency

  The currency code that is being displayed to user.

  ```ts
  CurrencyCode
  ```

* hydrogenSubchannelId

  The Hydrogen subchannel ID generated by Oxygen in the environment variable.

  ```ts
  string | '0'
  ```

* shopId

  The shop ID.

  ```ts
  string
  ```

#### CurrencyCode

Supports CurrencyCode from both Storefront API and Customer Account API. The APIs may have different CurrencyCode enums (e.g., Customer Account API added USDC in 2025-10, but Storefront API doesn't support USDC in 2025-10). This union type ensures useMoney works with data from either API.

```ts
StorefrontApiCurrencyCode | CustomerAccountApiCurrencyCode
```

Examples

#### Examples

* #### Example

  ##### JavaScript

  ```js
  import {Analytics, getShopAnalytics} from '@shopify/hydrogen';
  import {Outlet, useLoaderData} from 'react-router';

  export async function loader({context}) {
    const {cart, env} = context;
    const cartPromise = cart.get();

    return {
      cart: cartPromise,
      shop: getShopAnalytics(context),
      consent: {
        checkoutDomain: env.PUBLIC_CHECKOUT_DOMAIN,
        storefrontAccessToken: env.PUBLIC_STOREFRONT_API_TOKEN,
        withPrivacyBanner: true, // false stops the privacy banner from being displayed
        // localize the privacy banner
        country: context.storefront.i18n.country,
        language: context.storefront.i18n.language,
      },
    };
  }

  export default function App() {
    const data = useLoaderData();

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
        </head>
        <body>
          <Analytics.Provider
            cart={data.cart}
            shop={data.shop}
            consent={data.consent}
          >
            <Outlet />
          </Analytics.Provider>
        </body>
      </html>
    );
  }
  ```

  ##### TypeScript

  ```ts
  import {Analytics, getShopAnalytics} from '@shopify/hydrogen';
  import {type LoaderFunctionArgs} from 'react-router';
  import {Outlet, useLoaderData} from 'react-router';

  export async function loader({context}: LoaderFunctionArgs) {
    const {cart, env} = context;
    const cartPromise = cart.get();

    return {
      cart: cartPromise,
      shop: getShopAnalytics({
        storefront: context.storefront,
        publicStorefrontId: env.PUBLIC_STOREFRONT_ID,
      }),
      consent: {
        checkoutDomain: env.PUBLIC_CHECKOUT_DOMAIN,
        storefrontAccessToken: env.PUBLIC_STOREFRONT_API_TOKEN,
        withPrivacyBanner: true, // false stops the privacy banner from being displayed
        // localize the privacy banner
        country: context.storefront.i18n.country,
        language: context.storefront.i18n.language,
      },
    };
  }

  export default function App() {
    const data = useLoaderData<typeof loader>();

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
        </head>
        <body>
          <Analytics.Provider
            cart={data.cart}
            shop={data.shop}
            consent={data.consent}
          >
            <Outlet />
          </Analytics.Provider>
        </body>
      </html>
    );
  }
  ```

***

---



<a id="latest-components-analytics-analytics-searchview"></a>


## Analytics.SearchView

Publishes a `search_viewed` event to the `Analytics.Provider` component.

### analytics​Search​View(**[props](#props-propertydetail-props)**​)

#### Parameters

* **props**

  **SearchViewProps**

  **required**

#### SearchViewProps

* customData

  ```ts
  OtherData
  ```

* data

  ```ts
  SearchPayload
  ```

#### OtherData



#### SearchPayload

* searchResults

  The search results

  ```ts
  any
  ```

* searchTerm

  The search term used for the search results page

  ```ts
  string
  ```

Examples

#### Examples

* #### Example

  ##### JavaScript

  ```js
  import {Analytics} from '@shopify/hydrogen';
  import {useLoaderData} from 'react-router';

  export async function loader({request}) {
    const url = new URL(request.url);
    const searchParams = new URLSearchParams(url.search);
    const searchTerm = String(searchParams.get('q') || '');

    return {searchTerm};
  }

  export default function SearchPage() {
    const {searchTerm} = useLoaderData();
    return (
      <div className="search">
        <h1>Search</h1>
        <Analytics.SearchView data={{searchTerm}} />
      </div>
    );
  }
  ```

  ##### TypeScript

  ```ts
  import {Analytics} from '@shopify/hydrogen';
  import {type LoaderFunctionArgs} from 'react-router';
  import {useLoaderData} from 'react-router';

  export async function loader({request}: LoaderFunctionArgs) {
    const url = new URL(request.url);
    const searchParams = new URLSearchParams(url.search);
    const searchTerm = String(searchParams.get('q') || '');

    return {searchTerm};
  }

  export default function SearchPage() {
    const {searchTerm} = useLoaderData<typeof loader>();
    return (
      <div className="search">
        <h1>Search</h1>
        <Analytics.SearchView data={{searchTerm}} />
      </div>
    );
  }
  ```

***

---



<a id="latest-components-cartform"></a>


## CartForm

Creates a form for managing cart operations. Use `CartActionInput` to accept form inputs of known type.

##### Props

**`CartActionInputProps & CartFormCommonProps`**

#### CartActionInputProps

* **CartAttributesUpdateProps | CartBuyerIdentityUpdateProps | CartCreateProps | CartDiscountCodesUpdateProps | CartGiftCardCodesUpdateProps | CartGiftCardCodesAddProps | CartGiftCardCodesRemoveProps | CartLinesAddProps | CartLinesUpdateProps | CartLinesRemoveProps | CartNoteUpdateProps | CartSelectedDeliveryOptionsUpdateProps | CartMetafieldsSetProps | CartMetafieldDeleteProps | CartDeliveryAddressesAddProps | CartDeliveryAddressesRemoveProps | CartDeliveryAddressesUpdateProps | CartDeliveryAddressesReplaceProps | CartCustomProps**

#### CartFormCommonProps

* **children**

  **ReactNode | ((fetcher: FetcherWithComponents\<any>) => ReactNode)**

  **required**

  Children nodes of CartForm. Children can be a render prop that receives the fetcher.

* **fetcherKey**

  **string**

  Optional key to use for the fetcher.

* **route**

  **string**

  The route to submit the form to. Defaults to the current route.

#### CartActionInputProps

```ts
CartAttributesUpdateProps | CartBuyerIdentityUpdateProps | CartCreateProps | CartDiscountCodesUpdateProps | CartGiftCardCodesUpdateProps | CartGiftCardCodesAddProps | CartGiftCardCodesRemoveProps | CartLinesAddProps | CartLinesUpdateProps | CartLinesRemoveProps | CartNoteUpdateProps | CartSelectedDeliveryOptionsUpdateProps | CartMetafieldsSetProps | CartMetafieldDeleteProps | CartDeliveryAddressesAddProps | CartDeliveryAddressesRemoveProps | CartDeliveryAddressesUpdateProps | CartDeliveryAddressesReplaceProps | CartCustomProps
```

#### CartAttributesUpdateProps

* action

  ```ts
  'AttributesUpdateInput'
  ```

* inputs

  ```ts
  { attributes: AttributeInput[]; } & OtherFormData
  ```

#### AttributeInput



#### OtherFormData



#### CartBuyerIdentityUpdateProps

* action

  ```ts
  'BuyerIdentityUpdate'
  ```

* inputs

  ```ts
  { buyerIdentity: CartBuyerIdentityInput; } & OtherFormData
  ```

#### CartBuyerIdentityInput



#### CartCreateProps

* action

  ```ts
  'Create'
  ```

* inputs

  ```ts
  { input: CartInput; } & OtherFormData
  ```

#### CartInput



#### CartDiscountCodesUpdateProps

* action

  ```ts
  'DiscountCodesUpdate'
  ```

* inputs

  ```ts
  { discountCodes: string[]; } & OtherFormData
  ```

#### CartGiftCardCodesUpdateProps

* action

  ```ts
  'GiftCardCodesUpdate'
  ```

* inputs

  ```ts
  { giftCardCodes: string[]; } & OtherFormData
  ```

#### CartGiftCardCodesAddProps

* action

  ```ts
  'GiftCardCodesAdd'
  ```

* inputs

  ```ts
  { giftCardCodes: string[]; } & OtherFormData
  ```

#### CartGiftCardCodesRemoveProps

* action

  ```ts
  'GiftCardCodesRemove'
  ```

* inputs

  ```ts
  { giftCardCodes: string[]; } & OtherFormData
  ```

#### CartLinesAddProps

* action

  ```ts
  'LinesAdd'
  ```

* inputs

  ```ts
  { lines: OptimisticCartLineInput[]; } & OtherFormData
  ```

#### OptimisticCartLineInput

```ts
CartLineInput & {
  selectedVariant?: unknown;
}
```

#### CartLineInput



#### CartLinesUpdateProps

* action

  ```ts
  'LinesUpdate'
  ```

* inputs

  ```ts
  { lines: CartLineUpdateInput[]; } & OtherFormData
  ```

#### CartLineUpdateInput



#### CartLinesRemoveProps

* action

  ```ts
  'LinesRemove'
  ```

* inputs

  ```ts
  { lineIds: string[]; } & OtherFormData
  ```

#### CartNoteUpdateProps

* action

  ```ts
  'NoteUpdate'
  ```

* inputs

  ```ts
  { note: string; } & OtherFormData
  ```

#### CartSelectedDeliveryOptionsUpdateProps

* action

  ```ts
  'SelectedDeliveryOptionsUpdate'
  ```

* inputs

  ```ts
  { selectedDeliveryOptions: CartSelectedDeliveryOptionInput[]; } & OtherFormData
  ```

#### CartSelectedDeliveryOptionInput



#### CartMetafieldsSetProps

* action

  ```ts
  'MetafieldsSet'
  ```

* inputs

  ```ts
  { metafields: MetafieldWithoutOwnerId[]; } & OtherFormData
  ```

#### MetafieldWithoutOwnerId



#### CartMetafieldDeleteProps

* action

  ```ts
  'MetafieldsDelete'
  ```

* inputs

  ```ts
  { key: string; } & OtherFormData
  ```

#### CartDeliveryAddressesAddProps

* action

  ```ts
  'DeliveryAddressesAdd'
  ```

* inputs

  ```ts
  { addresses: CartSelectableAddressInput[]; } & OtherFormData
  ```

#### CartDeliveryAddressesRemoveProps

* action

  ```ts
  'DeliveryAddressesRemove'
  ```

* inputs

  ```ts
  { addressIds: string[]; } & OtherFormData
  ```

#### CartDeliveryAddressesUpdateProps

* action

  ```ts
  'DeliveryAddressesUpdate'
  ```

* inputs

  ```ts
  { addresses: CartSelectableAddressUpdateInput[]; } & OtherFormData
  ```

#### CartDeliveryAddressesReplaceProps

* action

  ```ts
  'DeliveryAddressesReplace'
  ```

* inputs

  ```ts
  { addresses: CartSelectableAddressInput[]; } & OtherFormData
  ```

#### CartCustomProps

* action

  ```ts
  `Custom${string}`
  ```

* inputs

  ```ts
  Record<string, unknown>
  ```

#### CartFormCommonProps

* children

  Children nodes of CartForm. Children can be a render prop that receives the fetcher.

  ```ts
  ReactNode | ((fetcher: FetcherWithComponents<any>) => ReactNode)
  ```

* fetcherKey

  Optional key to use for the fetcher.

  ```ts
  string
  ```

* route

  The route to submit the form to. Defaults to the current route.

  ```ts
  string
  ```

Examples

#### Examples

* #### Example

  ##### JavaScript

  ```js
  import {data} from 'react-router';
  import {CartForm} from '@shopify/hydrogen';
  import invariant from 'tiny-invariant';

  export default function Cart() {
    return (
      <CartForm
        action={CartForm.ACTIONS.LinesUpdate}
        inputs={{
          lines: [
            {
              id: 'gid://shopify/CartLine/123456789',
              quantity: 3,
            },
          ],
          other: 'data',
        }}
      >
        <button>Quantity up</button>
      </CartForm>
    );
  }

  export async function action({request, context}) {
    const {cart} = context;

    const formData = await request.formData();
    const {action, inputs} = CartForm.getFormInput(formData);

    let status = 200;
    let result;

    if (action === CartForm.ACTIONS.LinesUpdate) {
      result = await cart.updateLines(inputs.lines);
    } else {
      invariant(false, `${action} cart action is not defined`);
    }

    const headers = cart.setCartId(result.cart.id);

    return data(result, {status, headers});
  }
  ```

  ##### TypeScript

  ```ts
  import {type ActionFunctionArgs, data} from 'react-router';
  import {
    type CartQueryDataReturn,
    type HydrogenCart,
    CartForm,
  } from '@shopify/hydrogen';
  import invariant from 'tiny-invariant';

  export default function Cart() {
    return (
      <CartForm
        action={CartForm.ACTIONS.LinesUpdate}
        inputs={{
          lines: [
            {
              id: 'gid://shopify/CartLine/123456789',
              quantity: 3,
            },
          ],
          other: 'data',
        }}
      >
        <button>Quantity up</button>
      </CartForm>
    );
  }

  export async function action({request, context}: ActionFunctionArgs) {
    const cart = context.cart as HydrogenCart;
    // cart is type HydrogenCart or HydrogenCartCustom
    // Declare cart type in remix.env.d.ts for interface AppLoadContext to avoid type casting
    // const {cart} = context;

    const formData = await request.formData();
    const {action, inputs} = CartForm.getFormInput(formData);

    let status = 200;
    let result: CartQueryDataReturn;

    if (action === CartForm.ACTIONS.LinesUpdate) {
      result = await cart.updateLines(inputs.lines);
    } else {
      invariant(false, `${action} cart action is not defined`);
    }

    const headers = cart.setCartId(result.cart.id);

    return data(result, {status, headers});
  }
  ```

***

---



<a id="latest-components-media-externalvideo"></a>


## ExternalVideo

The `ExternalVideo` component renders an embedded video for the Storefront API's [ExternalVideo object](https://shopify.dev/api/storefront/reference/products/externalvideo).

##### Props

Takes in the same props as a native `<iframe>` element, except for `src`.

* **data**

  **PartialDeep\<ExternalVideoType, {recurseIntoArrays: true}>**

  **required**

  An object with fields that correspond to the Storefront API's [ExternalVideo object](https://shopify.dev/api/storefront/reference/products/externalvideo).

* **options**

  **YouTube | Vimeo**

  An object containing the options available for either [YouTube](https://developers.google.com/youtube/player_parameters#Parameters) or [Vimeo](https://vimeo.zendesk.com/hc/en-us/articles/360001494447-Using-Player-Parameters).

#### YouTube

* autoplay

  ```ts
  0 | 1
  ```

* cc\_lang\_pref

  ```ts
  string
  ```

* cc\_load\_policy

  ```ts
  1
  ```

* color

  ```ts
  'red' | 'white'
  ```

* controls

  ```ts
  0 | 1
  ```

* disablekb

  ```ts
  0 | 1
  ```

* enablejsapi

  ```ts
  0 | 1
  ```

* end

  ```ts
  number
  ```

* fs

  ```ts
  0 | 1
  ```

* hl

  ```ts
  string
  ```

* iv\_load\_policy

  ```ts
  1 | 3
  ```

* list

  ```ts
  string
  ```

* list\_type

  ```ts
  'playlist' | 'user_uploads'
  ```

* loop

  ```ts
  0 | 1
  ```

* modest\_branding

  ```ts
  1
  ```

* origin

  ```ts
  string
  ```

* playlist

  ```ts
  string
  ```

* plays\_inline

  ```ts
  0 | 1
  ```

* rel

  ```ts
  0 | 1
  ```

* start

  ```ts
  number
  ```

* widget\_referrer

  ```ts
  string
  ```

#### Vimeo

* \#t

  ```ts
  string
  ```

* autopause

  ```ts
  VimeoBoolean
  ```

* autoplay

  ```ts
  VimeoBoolean
  ```

* background

  ```ts
  VimeoBoolean
  ```

* byline

  ```ts
  VimeoBoolean
  ```

* color

  ```ts
  string
  ```

* controls

  ```ts
  VimeoBoolean
  ```

* dnt

  ```ts
  VimeoBoolean
  ```

* loop

  ```ts
  VimeoBoolean
  ```

* muted

  ```ts
  VimeoBoolean
  ```

* pip

  ```ts
  VimeoBoolean
  ```

* playsinline

  ```ts
  VimeoBoolean
  ```

* portrait

  ```ts
  VimeoBoolean
  ```

* quality

  ```ts
  '240p' | '360p' | '540p' | '720p' | '1080p' | '2k' | '4k'
  ```

* speed

  ```ts
  VimeoBoolean
  ```

* texttrack

  ```ts
  string
  ```

* title

  ```ts
  VimeoBoolean
  ```

* transparent

  ```ts
  VimeoBoolean
  ```

#### VimeoBoolean

```ts
0 | 1 | boolean
```

Examples

#### Examples

* #### ExternalVideo example

  ##### JavaScript

  ```jsx
  import {ExternalVideo} from '@shopify/hydrogen';

  export default function MyProductVideo({products}) {
    const firstMediaElement = products.nodes[0].media.nodes[0];

    if (firstMediaElement.__typename === 'ExternalVideo') {
      return <ExternalVideo data={firstMediaElement} />;
    }
  }
  ```

  ##### TypeScript

  ```tsx
  import {ExternalVideo} from '@shopify/hydrogen';
  import type {ProductConnection} from '@shopify/hydrogen/storefront-api-types';

  export default function MyProductVideo({
    products,
  }: {
    products: ProductConnection;
  }) {
    const firstMediaElement = products.nodes[0].media.nodes[0];
    if (firstMediaElement.__typename === 'ExternalVideo') {
      return <ExternalVideo data={firstMediaElement} />;
    }
  }
  ```

***

### Related

[- MediaFile](https://shopify.dev/docs/api/hydrogen/2026-04/components/media/mediafile)

***

---



<a id="latest-components-media-image"></a>


## Image

The `Image` component renders an image for the Storefront API's [Image object](https://shopify.dev/api/storefront/reference/common-objects/image) by using the `data` prop. You can [customize this component](https://shopify.dev/api/hydrogen/components#customizing-hydrogen-components) using passthrough props.

Images default to being responsive automatically (`width: 100%, height: auto`), and expect an `aspectRatio` prop, which ensures your image doesn't create any layout shift. For fixed-size images, you can set `width` to an exact value, and a `srcSet` with 1x, 2x, and 3x DPI variants will automatically be generated for you.

##### Props

* **aspectRatio**

  **string**

  The aspect ratio of the image, in the format of `width/height`.

* **crop**

  **Crop**

  **Default: \`center\`**

  The crop position of the image.

* **data**

  **PartialDeep\<ImageType, {recurseIntoArrays: true}>**

  Data mapping to the [Storefront API `Image`](https://shopify.dev/docs/api/storefront/2026-04/objects/Image) object. Must be an Image object.

* **loader**

  **Loader**

  A function that returns a URL string for an image.

* **srcSetOptions**

  **SrcSetOptions**

  An optional prop you can use to change the default srcSet generation behaviour

#### Crop

```ts
'center' | 'top' | 'bottom' | 'left' | 'right'
```

#### Loader

* params

  ```ts
  LoaderParams
  ```

returns

```ts
string
```

#### LoaderParams

* crop

  The URL param that controls the cropping region

  ```ts
  Crop
  ```

* height

  The URL param that controls height

  ```ts
  number
  ```

* src

  The base URL of the image

  ```ts
  string
  ```

* width

  The URL param that controls width

  ```ts
  number
  ```

#### SrcSetOptions

* incrementSize

  The increment by which to increase for each size, in pixels

  ```ts
  number
  ```

* intervals

  The number of sizes to generate

  ```ts
  number
  ```

* placeholderWidth

  The size used for placeholder fallback images

  ```ts
  number
  ```

* startingWidth

  The smallest image size

  ```ts
  number
  ```

Examples

#### Examples

* #### Example code

  ##### JavaScript

  ```jsx
  import {Image} from '@shopify/hydrogen';

  // An example query
  const IMAGE_QUERY = `#graphql
    query {
      product {
        featuredImage {
          altText
          url
          height
          width
        }
      }
    }
  `;

  export default function ProductImage({product}) {
    if (!product.featuredImage) {
      return null;
    }

    return (
      <Image
        data={product.featuredImage}
        sizes="(min-width: 45em) 50vw, 100vw"
        aspectRatio="4/5"
      />
    );
  }
  ```

  ##### TypeScript

  ```tsx
  import React from 'react';
  import {Image} from '@shopify/hydrogen';
  import type {Product} from '@shopify/hydrogen/storefront-api-types';

  // An example query
  const IMAGE_QUERY = `#graphql
    query {
      product {
        featuredImage {
          altText
          url
          height
          width
        }
      }
    }
  `;

  export default function ProductImage({product}: {product: Product}) {
    if (!product.featuredImage) {
      return null;
    }

    return (
      <Image
        data={product.featuredImage}
        sizes="(min-width: 45em) 50vw, 100vw"
        aspectRatio="4/5"
      />
    );
  }
  ```

***

### Related

[- MediaFile](https://shopify.dev/docs/api/hydrogen/2026-04/components/media/mediafile)

***

---



<a id="latest-components-media-mediafile"></a>


## MediaFile

The `MediaFile` component renders the media for the Storefront API's [Media object](https://shopify.dev/api/storefront/reference/products/media). It renders an `Image`, `Video`, an `ExternalVideo`, or a `ModelViewer` depending on the `__typename` of the `data` prop.

##### Props

MediaFile renders an `Image`, `Video`, `ExternalVideo`, or `ModelViewer` component. Use the `mediaOptions` prop to customize the props sent to each of these components.

* **data**

  **PartialDeep\<MediaEdgeType\['node'], {recurseIntoArrays: true}>**

  **required**

  An object with fields that correspond to the Storefront API's [Media object](https://shopify.dev/api/storefront/reference/products/media).

* **about**

  **string | undefined**

* **accessKey**

  **string | undefined**

* **aria-activedescendant**

  **string | undefined**

  Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.

* **aria-atomic**

  **Booleanish | undefined**

  Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.

* **aria-autocomplete**

  **"none" | "inline" | "list" | "both" | undefined**

  Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be presented if they are made.

* **aria-braillelabel**

  **string | undefined**

  Defines a string value that labels the current element, which is intended to be converted into Braille.

* **aria-brailleroledescription**

  **string | undefined**

  Defines a human-readable, author-localized abbreviated description for the role of an element, which is intended to be converted into Braille.

* **aria-busy**

  **Booleanish | undefined**

* **aria-checked**

  **boolean | "false" | "mixed" | "true" | undefined**

  Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.

* **aria-colcount**

  **number | undefined**

  Defines the total number of columns in a table, grid, or treegrid.

* **aria-colindex**

  **number | undefined**

  Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.

* **aria-colindextext**

  **string | undefined**

  Defines a human readable text alternative of aria-colindex.

* **aria-colspan**

  **number | undefined**

  Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.

* **aria-controls**

  **string | undefined**

  Identifies the element (or elements) whose contents or presence are controlled by the current element.

* **aria-current**

  **boolean | "false" | "true" | "page" | "step" | "location" | "date" | "time" | undefined**

  Indicates the element that represents the current item within a container or set of related elements.

* **aria-describedby**

  **string | undefined**

  Identifies the element (or elements) that describes the object.

* **aria-description**

  **string | undefined**

  Defines a string value that describes or annotates the current element.

* **aria-details**

  **string | undefined**

  Identifies the element that provides a detailed, extended description for the object.

* **aria-disabled**

  **Booleanish | undefined**

  Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.

* **aria-errormessage**

  **string | undefined**

  Identifies the element that provides an error message for the object.

* **aria-expanded**

  **Booleanish | undefined**

  Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.

* **aria-flowto**

  **string | undefined**

  Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion, allows assistive technology to override the general default of reading in document source order.

* **aria-haspopup**

  **boolean | "false" | "true" | "menu" | "listbox" | "tree" | "grid" | "dialog" | undefined**

  Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.

* **aria-hidden**

  **Booleanish | undefined**

  Indicates whether the element is exposed to an accessibility API.

* **aria-invalid**

  **boolean | "false" | "true" | "grammar" | "spelling" | undefined**

  Indicates the entered value does not conform to the format expected by the application.

* **aria-keyshortcuts**

  **string | undefined**

  Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.

* **aria-label**

  **string | undefined**

  Defines a string value that labels the current element.

* **aria-labelledby**

  **string | undefined**

  Identifies the element (or elements) that labels the current element.

* **aria-level**

  **number | undefined**

  Defines the hierarchical level of an element within a structure.

* **aria-live**

  **"off" | "assertive" | "polite" | undefined**

  Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.

* **aria-modal**

  **Booleanish | undefined**

  Indicates whether an element is modal when displayed.

* **aria-multiline**

  **Booleanish | undefined**

  Indicates whether a text box accepts multiple lines of input or only a single line.

* **aria-multiselectable**

  **Booleanish | undefined**

  Indicates that the user may select more than one item from the current selectable descendants.

* **aria-orientation**

  **"horizontal" | "vertical" | undefined**

  Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.

* **aria-owns**

  **string | undefined**

  Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship between DOM elements where the DOM hierarchy cannot be used to represent the relationship.

* **aria-placeholder**

  **string | undefined**

  Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value. A hint could be a sample value or a brief description of the expected format.

* **aria-posinset**

  **number | undefined**

  Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.

* **aria-pressed**

  **boolean | "false" | "mixed" | "true" | undefined**

  Indicates the current "pressed" state of toggle buttons.

* **aria-readonly**

  **Booleanish | undefined**

  Indicates that the element is not editable, but is otherwise operable.

* **aria-relevant**

  **| "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text" | "text additions" | "text removals" | undefined**

  Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.

* **aria-required**

  **Booleanish | undefined**

  Indicates that user input is required on the element before a form may be submitted.

* **aria-roledescription**

  **string | undefined**

  Defines a human-readable, author-localized description for the role of an element.

* **aria-rowcount**

  **number | undefined**

  Defines the total number of rows in a table, grid, or treegrid.

* **aria-rowindex**

  **number | undefined**

  Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.

* **aria-rowindextext**

  **string | undefined**

  Defines a human readable text alternative of aria-rowindex.

* **aria-rowspan**

  **number | undefined**

  Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.

* **aria-selected**

  **Booleanish | undefined**

  Indicates the current "selected" state of various widgets.

* **aria-setsize**

  **number | undefined**

  Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.

* **aria-sort**

  **"none" | "ascending" | "descending" | "other" | undefined**

  Indicates if items in a table or grid are sorted in ascending or descending order.

* **aria-valuemax**

  **number | undefined**

  Defines the maximum allowed value for a range widget.

* **aria-valuemin**

  **number | undefined**

  Defines the minimum allowed value for a range widget.

* **aria-valuenow**

  **number | undefined**

  Defines the current value for a range widget.

* **aria-valuetext**

  **string | undefined**

  Defines the human readable text alternative of aria-valuenow for a range widget.

* **autoCapitalize**

  **"off" | "none" | "on" | "sentences" | "words" | "characters" | undefined | (string & {})**

* **autoCorrect**

  **string | undefined**

* **autoFocus**

  **boolean | undefined**

* **autoSave**

  **string | undefined**

* **children**

  **ReactNode | undefined**

* **className**

  **string | undefined**

* **color**

  **string | undefined**

* **content**

  **string | undefined**

* **contentEditable**

  **Booleanish | "inherit" | "plaintext-only" | undefined**

* **contextMenu**

  **string | undefined**

* **dangerouslySetInnerHTML**

  **{ // Should be InnerHTML\['innerHTML']. // But unfortunately we're mixing renderer-specific type declarations. \_\_html: string | TrustedHTML; } | undefined**

* **datatype**

  **string | undefined**

* **defaultChecked**

  **boolean | undefined**

* **defaultValue**

  **string | number | readonly string\[] | undefined**

* **dir**

  **string | undefined**

* **draggable**

  **Booleanish | undefined**

* **enterKeyHint**

  **"enter" | "done" | "go" | "next" | "previous" | "search" | "send" | undefined**

* **exportparts**

  **string | undefined**

* **hidden**

  **boolean | undefined**

* **id**

  **string | undefined**

* **inlist**

  **any**

* **inputMode**

  **"none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search" | undefined**

  Hints at the type of data that might be entered by the user while editing the element or its contents

* **is**

  **string | undefined**

  Specify that a standard HTML element should behave like a defined custom built-in element

* **itemID**

  **string | undefined**

* **itemProp**

  **string | undefined**

* **itemRef**

  **string | undefined**

* **itemScope**

  **boolean | undefined**

* **itemType**

  **string | undefined**

* **lang**

  **string | undefined**

* **mediaOptions**

  **MediaOptions**

  The options for the `Image`, `Video`, `ExternalVideo`, or `ModelViewer` components.

* **nonce**

  **string | undefined**

* **onAbort**

  **ReactEventHandler\<T> | undefined**

* **onAbortCapture**

  **ReactEventHandler\<T> | undefined**

* **onAnimationEnd**

  **AnimationEventHandler\<T> | undefined**

* **onAnimationEndCapture**

  **AnimationEventHandler\<T> | undefined**

* **onAnimationIteration**

  **AnimationEventHandler\<T> | undefined**

* **onAnimationIterationCapture**

  **AnimationEventHandler\<T> | undefined**

* **onAnimationStart**

  **AnimationEventHandler\<T> | undefined**

* **onAnimationStartCapture**

  **AnimationEventHandler\<T> | undefined**

* **onAuxClick**

  **MouseEventHandler\<T> | undefined**

* **onAuxClickCapture**

  **MouseEventHandler\<T> | undefined**

* **onBeforeInput**

  **InputEventHandler\<T> | undefined**

* **onBeforeInputCapture**

  **FormEventHandler\<T> | undefined**

* **onBlur**

  **FocusEventHandler\<T> | undefined**

* **onBlurCapture**

  **FocusEventHandler\<T> | undefined**

* **onCanPlay**

  **ReactEventHandler\<T> | undefined**

* **onCanPlayCapture**

  **ReactEventHandler\<T> | undefined**

* **onCanPlayThrough**

  **ReactEventHandler\<T> | undefined**

* **onCanPlayThroughCapture**

  **ReactEventHandler\<T> | undefined**

* **onChange**

  **FormEventHandler\<T> | undefined**

* **onChangeCapture**

  **FormEventHandler\<T> | undefined**

* **onClick**

  **MouseEventHandler\<T> | undefined**

* **onClickCapture**

  **MouseEventHandler\<T> | undefined**

* **onCompositionEnd**

  **CompositionEventHandler\<T> | undefined**

* **onCompositionEndCapture**

  **CompositionEventHandler\<T> | undefined**

* **onCompositionStart**

  **CompositionEventHandler\<T> | undefined**

* **onCompositionStartCapture**

  **CompositionEventHandler\<T> | undefined**

* **onCompositionUpdate**

  **CompositionEventHandler\<T> | undefined**

* **onCompositionUpdateCapture**

  **CompositionEventHandler\<T> | undefined**

* **onContextMenu**

  **MouseEventHandler\<T> | undefined**

* **onContextMenuCapture**

  **MouseEventHandler\<T> | undefined**

* **onCopy**

  **ClipboardEventHandler\<T> | undefined**

* **onCopyCapture**

  **ClipboardEventHandler\<T> | undefined**

* **onCut**

  **ClipboardEventHandler\<T> | undefined**

* **onCutCapture**

  **ClipboardEventHandler\<T> | undefined**

* **onDoubleClick**

  **MouseEventHandler\<T> | undefined**

* **onDoubleClickCapture**

  **MouseEventHandler\<T> | undefined**

* **onDrag**

  **DragEventHandler\<T> | undefined**

* **onDragCapture**

  **DragEventHandler\<T> | undefined**

* **onDragEnd**

  **DragEventHandler\<T> | undefined**

* **onDragEndCapture**

  **DragEventHandler\<T> | undefined**

* **onDragEnter**

  **DragEventHandler\<T> | undefined**

* **onDragEnterCapture**

  **DragEventHandler\<T> | undefined**

* **onDragExit**

  **DragEventHandler\<T> | undefined**

* **onDragExitCapture**

  **DragEventHandler\<T> | undefined**

* **onDragLeave**

  **DragEventHandler\<T> | undefined**

* **onDragLeaveCapture**

  **DragEventHandler\<T> | undefined**

* **onDragOver**

  **DragEventHandler\<T> | undefined**

* **onDragOverCapture**

  **DragEventHandler\<T> | undefined**

* **onDragStart**

  **DragEventHandler\<T> | undefined**

* **onDragStartCapture**

  **DragEventHandler\<T> | undefined**

* **onDrop**

  **DragEventHandler\<T> | undefined**

* **onDropCapture**

  **DragEventHandler\<T> | undefined**

* **onDurationChange**

  **ReactEventHandler\<T> | undefined**

* **onDurationChangeCapture**

  **ReactEventHandler\<T> | undefined**

* **onEmptied**

  **ReactEventHandler\<T> | undefined**

* **onEmptiedCapture**

  **ReactEventHandler\<T> | undefined**

* **onEncrypted**

  **ReactEventHandler\<T> | undefined**

* **onEncryptedCapture**

  **ReactEventHandler\<T> | undefined**

* **onEnded**

  **ReactEventHandler\<T> | undefined**

* **onEndedCapture**

  **ReactEventHandler\<T> | undefined**

* **onError**

  **ReactEventHandler\<T> | undefined**

* **onErrorCapture**

  **ReactEventHandler\<T> | undefined**

* **onFocus**

  **FocusEventHandler\<T> | undefined**

* **onFocusCapture**

  **FocusEventHandler\<T> | undefined**

* **onGotPointerCapture**

  **PointerEventHandler\<T> | undefined**

* **onGotPointerCaptureCapture**

  **PointerEventHandler\<T> | undefined**

* **onInput**

  **FormEventHandler\<T> | undefined**

* **onInputCapture**

  **FormEventHandler\<T> | undefined**

* **onInvalid**

  **FormEventHandler\<T> | undefined**

* **onInvalidCapture**

  **FormEventHandler\<T> | undefined**

* **onKeyDown**

  **KeyboardEventHandler\<T> | undefined**

* **onKeyDownCapture**

  **KeyboardEventHandler\<T> | undefined**

* **onKeyUp**

  **KeyboardEventHandler\<T> | undefined**

* **onKeyUpCapture**

  **KeyboardEventHandler\<T> | undefined**

* **onLoad**

  **ReactEventHandler\<T> | undefined**

* **onLoadCapture**

  **ReactEventHandler\<T> | undefined**

* **onLoadedData**

  **ReactEventHandler\<T> | undefined**

* **onLoadedDataCapture**

  **ReactEventHandler\<T> | undefined**

* **onLoadedMetadata**

  **ReactEventHandler\<T> | undefined**

* **onLoadedMetadataCapture**

  **ReactEventHandler\<T> | undefined**

* **onLoadStart**

  **ReactEventHandler\<T> | undefined**

* **onLoadStartCapture**

  **ReactEventHandler\<T> | undefined**

* **onLostPointerCapture**

  **PointerEventHandler\<T> | undefined**

* **onLostPointerCaptureCapture**

  **PointerEventHandler\<T> | undefined**

* **onMouseDown**

  **MouseEventHandler\<T> | undefined**

* **onMouseDownCapture**

  **MouseEventHandler\<T> | undefined**

* **onMouseEnter**

  **MouseEventHandler\<T> | undefined**

* **onMouseLeave**

  **MouseEventHandler\<T> | undefined**

* **onMouseMove**

  **MouseEventHandler\<T> | undefined**

* **onMouseMoveCapture**

  **MouseEventHandler\<T> | undefined**

* **onMouseOut**

  **MouseEventHandler\<T> | undefined**

* **onMouseOutCapture**

  **MouseEventHandler\<T> | undefined**

* **onMouseOver**

  **MouseEventHandler\<T> | undefined**

* **onMouseOverCapture**

  **MouseEventHandler\<T> | undefined**

* **onMouseUp**

  **MouseEventHandler\<T> | undefined**

* **onMouseUpCapture**

  **MouseEventHandler\<T> | undefined**

* **onPaste**

  **ClipboardEventHandler\<T> | undefined**

* **onPasteCapture**

  **ClipboardEventHandler\<T> | undefined**

* **onPause**

  **ReactEventHandler\<T> | undefined**

* **onPauseCapture**

  **ReactEventHandler\<T> | undefined**

* **onPlay**

  **ReactEventHandler\<T> | undefined**

* **onPlayCapture**

  **ReactEventHandler\<T> | undefined**

* **onPlaying**

  **ReactEventHandler\<T> | undefined**

* **onPlayingCapture**

  **ReactEventHandler\<T> | undefined**

* **onPointerCancel**

  **PointerEventHandler\<T> | undefined**

* **onPointerCancelCapture**

  **PointerEventHandler\<T> | undefined**

* **onPointerDown**

  **PointerEventHandler\<T> | undefined**

* **onPointerDownCapture**

  **PointerEventHandler\<T> | undefined**

* **onPointerEnter**

  **PointerEventHandler\<T> | undefined**

* **onPointerLeave**

  **PointerEventHandler\<T> | undefined**

* **onPointerMove**

  **PointerEventHandler\<T> | undefined**

* **onPointerMoveCapture**

  **PointerEventHandler\<T> | undefined**

* **onPointerOut**

  **PointerEventHandler\<T> | undefined**

* **onPointerOutCapture**

  **PointerEventHandler\<T> | undefined**

* **onPointerOver**

  **PointerEventHandler\<T> | undefined**

* **onPointerOverCapture**

  **PointerEventHandler\<T> | undefined**

* **onPointerUp**

  **PointerEventHandler\<T> | undefined**

* **onPointerUpCapture**

  **PointerEventHandler\<T> | undefined**

* **onProgress**

  **ReactEventHandler\<T> | undefined**

* **onProgressCapture**

  **ReactEventHandler\<T> | undefined**

* **onRateChange**

  **ReactEventHandler\<T> | undefined**

* **onRateChangeCapture**

  **ReactEventHandler\<T> | undefined**

* **onReset**

  **FormEventHandler\<T> | undefined**

* **onResetCapture**

  **FormEventHandler\<T> | undefined**

* **onScroll**

  **UIEventHandler\<T> | undefined**

* **onScrollCapture**

  **UIEventHandler\<T> | undefined**

* **onSeeked**

  **ReactEventHandler\<T> | undefined**

* **onSeekedCapture**

  **ReactEventHandler\<T> | undefined**

* **onSeeking**

  **ReactEventHandler\<T> | undefined**

* **onSeekingCapture**

  **ReactEventHandler\<T> | undefined**

* **onSelect**

  **ReactEventHandler\<T> | undefined**

* **onSelectCapture**

  **ReactEventHandler\<T> | undefined**

* **onStalled**

  **ReactEventHandler\<T> | undefined**

* **onStalledCapture**

  **ReactEventHandler\<T> | undefined**

* **onSubmit**

  **FormEventHandler\<T> | undefined**

* **onSubmitCapture**

  **FormEventHandler\<T> | undefined**

* **onSuspend**

  **ReactEventHandler\<T> | undefined**

* **onSuspendCapture**

  **ReactEventHandler\<T> | undefined**

* **onTimeUpdate**

  **ReactEventHandler\<T> | undefined**

* **onTimeUpdateCapture**

  **ReactEventHandler\<T> | undefined**

* **onTouchCancel**

  **TouchEventHandler\<T> | undefined**

* **onTouchCancelCapture**

  **TouchEventHandler\<T> | undefined**

* **onTouchEnd**

  **TouchEventHandler\<T> | undefined**

* **onTouchEndCapture**

  **TouchEventHandler\<T> | undefined**

* **onTouchMove**

  **TouchEventHandler\<T> | undefined**

* **onTouchMoveCapture**

  **TouchEventHandler\<T> | undefined**

* **onTouchStart**

  **TouchEventHandler\<T> | undefined**

* **onTouchStartCapture**

  **TouchEventHandler\<T> | undefined**

* **onTransitionEnd**

  **TransitionEventHandler\<T> | undefined**

* **onTransitionEndCapture**

  **TransitionEventHandler\<T> | undefined**

* **onVolumeChange**

  **ReactEventHandler\<T> | undefined**

* **onVolumeChangeCapture**

  **ReactEventHandler\<T> | undefined**

* **onWaiting**

  **ReactEventHandler\<T> | undefined**

* **onWaitingCapture**

  **ReactEventHandler\<T> | undefined**

* **onWheel**

  **WheelEventHandler\<T> | undefined**

* **onWheelCapture**

  **WheelEventHandler\<T> | undefined**

* **part**

  **string | undefined**

* **prefix**

  **string | undefined**

* **property**

  **string | undefined**

* **radioGroup**

  **string | undefined**

* **rel**

  **string | undefined**

* **resource**

  **string | undefined**

* **results**

  **number | undefined**

* **rev**

  **string | undefined**

* **role**

  **AriaRole | undefined**

* **security**

  **string | undefined**

* **slot**

  **string | undefined**

* **spellCheck**

  **Booleanish | undefined**

* **style**

  **CSSProperties | undefined**

* **suppressContentEditableWarning**

  **boolean | undefined**

* **suppressHydrationWarning**

  **boolean | undefined**

* **tabIndex**

  **number | undefined**

* **title**

  **string | undefined**

* **translate**

  **"yes" | "no" | undefined**

* **typeof**

  **string | undefined**

* **unselectable**

  **"on" | "off" | undefined**

* **vocab**

  **string | undefined**

* **aria-dropeffect**

  **"none" | "copy" | "execute" | "link" | "move" | "popup" | undefined**

  **deprecated**

  Indicates what functions can be performed when a dragged object is released on the drop target.

  **Deprecated:**

  in ARIA 1.1

* **aria-grabbed**

  **Booleanish | undefined**

  **deprecated**

  Indicates an element's "grabbed" state in a drag-and-drop operation.

  **Deprecated:**

  in ARIA 1.1

* **onKeyPress**

  **KeyboardEventHandler\<T> | undefined**

  **deprecated**

  **Deprecated:**

  Use `onKeyUp` or `onKeyDown` instead

* **onKeyPressCapture**

  **KeyboardEventHandler\<T> | undefined**

  **deprecated**

  **Deprecated:**

  Use `onKeyUpCapture` or `onKeyDownCapture` instead

#### MediaOptions

* externalVideo

  Props that will only apply when an \`\<ExternalVideo />\` is rendered

  ```ts
  Omit<
      React.ComponentProps<typeof ExternalVideo>['options'],
      'data'
    >
  ```

* image

  Props that will only apply when an \`\<Image />\` is rendered

  ```ts
  Omit<HydrogenImageProps, 'data'>
  ```

* modelViewer

  Props that will only apply when a \`\<ModelViewer />\` is rendered

  ```ts
  Omit<typeof ModelViewer, 'data'>
  ```

* video

  Props that will only apply when a \`\<Video />\` is rendered

  ```ts
  Omit<React.ComponentProps<typeof Video>, 'data'>
  ```

#### HydrogenImageProps

```ts
React.ComponentPropsWithRef<'img'> & HydrogenImageBaseProps
```

#### HydrogenImageBaseProps

* aspectRatio

  The aspect ratio of the image, in the format of \`width/height\`.

  ```ts
  string
  ```

* crop

  The crop position of the image.

  ```ts
  Crop
  ```

* data

  Data mapping to the \[Storefront API \`Image\`]\(https://shopify.dev/docs/api/storefront/2026-04/objects/Image) object. Must be an Image object.

  ```ts
  PartialDeep<ImageType, {recurseIntoArrays: true}>
  ```

* loader

  A function that returns a URL string for an image.

  ```ts
  Loader
  ```

* srcSetOptions

  An optional prop you can use to change the default srcSet generation behaviour

  ```ts
  SrcSetOptions
  ```

#### Crop

```ts
'center' | 'top' | 'bottom' | 'left' | 'right'
```

#### Loader

* params

  ```ts
  LoaderParams
  ```

returns

```ts
string
```

#### LoaderParams

* crop

  The URL param that controls the cropping region

  ```ts
  Crop
  ```

* height

  The URL param that controls height

  ```ts
  number
  ```

* src

  The base URL of the image

  ```ts
  string
  ```

* width

  The URL param that controls width

  ```ts
  number
  ```

#### SrcSetOptions

* incrementSize

  The increment by which to increase for each size, in pixels

  ```ts
  number
  ```

* intervals

  The number of sizes to generate

  ```ts
  number
  ```

* placeholderWidth

  The size used for placeholder fallback images

  ```ts
  number
  ```

* startingWidth

  The smallest image size

  ```ts
  number
  ```

Examples

#### Examples

* #### Example code

  ##### JavaScript

  ```jsx
  import {MediaFile} from '@shopify/hydrogen';

  export function ProductsMediaFiles({products}) {
    return (
      <ul>
        {products.nodes.map((product) => {
          return <MediaFile data={product.media.nodes[0]} key={product.id} />;
        })}
      </ul>
    );
  }
  ```

  ##### TypeScript

  ```tsx
  import {MediaFile} from '@shopify/hydrogen';
  import type {ProductConnection} from '@shopify/hydrogen/storefront-api-types';

  export function ProductsMediaFiles({products}: {products: ProductConnection}) {
    return (
      <ul>
        {products.nodes.map((product) => {
          return <MediaFile data={product.media.nodes[0]} key={product.id} />;
        })}
      </ul>
    );
  }
  ```

***

### Related

[- Image](https://shopify.dev/docs/api/hydrogen/2026-04/components/media/image)

[- Video](https://shopify.dev/docs/api/hydrogen/2026-04/components/media/video)

[- ExternalVideo](https://shopify.dev/docs/api/hydrogen/2026-04/components/media/externalvideo)

[- ModelViewer](https://shopify.dev/docs/api/hydrogen/2026-04/components/media/modelviewer)

***

---



<a id="latest-components-media-modelviewer"></a>


## ModelViewer

The `ModelViewer` component renders a 3D model (with the `model-viewer` custom element) for the Storefront API's [Model3d object](https://shopify.dev/api/storefront/reference/products/model3d). The `model-viewer` custom element is lazily downloaded through a dynamically-injected `<script type='module'>` tag when the `<ModelViewer />` component is rendered. ModelViewer is using version `1.21.1` of the `@google/model-viewer` library.

##### Props

* **data**

  **PartialDeep\<Model3d, {recurseIntoArrays: true}>**

  **required**

  An object with fields that correspond to the Storefront API's [Model3D object](https://shopify.dev/api/storefront/2026-04/objects/model3d).

* **onArStatus**

  **(event: Event) => void**

  The callback to invoke when the 'ar-status' event is triggered. Refer to [ar-status in the ](https://modelviewer.dev/docs/index.html#entrydocs-augmentedreality-events-arStatus).

* **onArTracking**

  **(event: Event) => void**

  The callback to invoke when the 'ar-tracking' event is triggered. Refer to [ar-tracking in the ](https://modelviewer.dev/docs/index.html#entrydocs-augmentedreality-events-arTracking).

* **onCameraChange**

  **(event: Event) => void**

  The callback to invoke when the 'camera-change' event is triggered. Refer to [camera-change in the ](https://modelviewer.dev/docs/index.html#entrydocs-stagingandcameras-events-cameraChange).

* **onEnvironmentChange**

  **(event: Event) => void**

  The callback to invoke when the 'environment-change' event is triggered. Refer to [environment-change in the ](https://modelviewer.dev/docs/index.html#entrydocs-lightingandenv-events-environmentChange).

* **onError**

  **(event: Event) => void**

  The callback to invoke when the 'error' event is triggered. Refer to [error in the ](https://modelviewer.dev/docs/index.html#entrydocs-loading-events-error).

* **onLoad**

  **(event: Event) => void**

  The callback to invoke when the `load` event is triggered. Refer to [load in the ](https://modelviewer.dev/docs/index.html#entrydocs-loading-events-load).

* **onModelVisibility**

  **(event: Event) => void**

  The callback to invoke when the 'model-visibility' event is triggered. Refer to [model-visibility in the ](https://modelviewer.dev/docs/index.html#entrydocs-loading-events-modelVisibility).

* **onPause**

  **(event: Event) => void**

  The callback to invoke when the 'pause' event is triggered. Refer to [pause in the ](https://modelviewer.dev/docs/index.html#entrydocs-animation-events-pause).

* **onPlay**

  **(event: Event) => void**

  The callback to invoke when the 'play' event is triggered. Refer to [play in the ](https://modelviewer.dev/docs/index.html#entrydocs-animation-events-play).

* **onPreload**

  **(event: Event) => void**

  The callback to invoke when the 'preload' event is triggered. Refer to [preload in the ](https://modelviewer.dev/docs/index.html#entrydocs-loading-events-preload).

* **onProgress**

  **(event: Event) => void**

  The callback to invoke when the 'progress' event is triggered. Refer to [progress in the ](https://modelviewer.dev/docs/index.html#entrydocs-loading-events-progress).

* **onQuickLookButtonTapped**

  **(event: Event) => void**

  The callback to invoke when the 'quick-look-button-tapped' event is triggered. Refer to [quick-look-button-tapped in the ](https://modelviewer.dev/docs/index.html#entrydocs-augmentedreality-events-quickLookButtonTapped).

* **onSceneGraphReady**

  **(event: Event) => void**

  The callback to invoke when the 'scene-graph-ready' event is triggered. Refer to [scene-graph-ready in the ](https://modelviewer.dev/docs/index.html#entrydocs-scenegraph-events-sceneGraphReady).

Examples

#### Examples

* #### Example code

  ##### JavaScript

  ```jsx
  import {ModelViewer} from '@shopify/hydrogen';

  export default function MyProductModel({products}) {
    const firstMediaElement = products.nodes[0].media.nodes[0];

    if (firstMediaElement.__typename === 'Model3d') {
      return <ModelViewer data={firstMediaElement} />;
    }
  }
  ```

  ##### TypeScript

  ```tsx
  import {ModelViewer} from '@shopify/hydrogen';
  import type {ProductConnection} from '@shopify/hydrogen/storefront-api-types';

  export default function MyProductModel({
    products,
  }: {
    products: ProductConnection;
  }) {
    const firstMediaElement = products.nodes[0].media.nodes[0];
    if (firstMediaElement.__typename === 'Model3d') {
      return <ModelViewer data={firstMediaElement} />;
    }
  }
  ```

***

### Related

[- MediaFile](https://shopify.dev/docs/api/hydrogen/2026-04/components/media/mediafile)

***

---



<a id="latest-components-media-video"></a>


## Video

The `Video` component renders a video for the Storefront API's [Video object](https://shopify.dev/api/storefront/reference/products/video). The component outputs a `video` element. You can [customize this component](https://shopify.dev/api/hydrogen/components#customizing-hydrogen-components) using passthrough props.

##### Props

* **data**

  **PartialDeep\<VideoType, {recurseIntoArrays: true}>**

  **required**

  An object with fields that correspond to the Storefront API's [Video object](https://shopify.dev/api/storefront/2026-04/objects/video).

* **previewImageOptions**

  **LoaderParams**

  An object of image size options for the video's `previewImage`. Uses `shopifyImageLoader` to generate the `poster` URL.

* **sourceProps**

  **HTMLAttributes\<HTMLSourceElement> & { 'data-testid'?: string; }**

  Props that will be passed to the `video` element's `source` children elements.

#### LoaderParams

* crop

  The URL param that controls the cropping region

  ```ts
  Crop
  ```

* height

  The URL param that controls height

  ```ts
  number
  ```

* src

  The base URL of the image

  ```ts
  string
  ```

* width

  The URL param that controls width

  ```ts
  number
  ```

#### Crop

```ts
'center' | 'top' | 'bottom' | 'left' | 'right'
```

Examples

#### Examples

* #### Example code

  ##### JavaScript

  ```jsx
  import {Video} from '@shopify/hydrogen';

  export default function MyProductVideo({products}) {
    const firstMediaElement = products.edges[0].node.media.edges[0].node;

    if (firstMediaElement.__typename === 'Video') {
      return <Video data={firstMediaElement} />;
    }
  }
  ```

  ##### TypeScript

  ```tsx
  import {Video} from '@shopify/hydrogen';
  import type {ProductConnection} from '@shopify/hydrogen/storefront-api-types';

  export default function MyProductVideo({
    products,
  }: {
    products: ProductConnection;
  }) {
    const firstMediaElement = products.edges[0].node.media.edges[0].node;

    if (firstMediaElement.__typename === 'Video') {
      return <Video data={firstMediaElement} />;
    }
  }
  ```

***

### Related

[- MediaFile](https://shopify.dev/docs/api/hydrogen/2026-04/components/media/mediafile)

[- Image](https://shopify.dev/docs/api/hydrogen/2026-04/components/media/image)

***

---



<a id="latest-components-money"></a>


## Money

The `Money` component renders a string of the Storefront API's [MoneyV2 object](https://shopify.dev/api/storefront/reference/common-objects/moneyv2) according to the `locale` in the [`ShopifyProvider` component](https://shopify.dev/api/hydrogen/components/global/shopifyprovider). The component outputs a `<div>`. You can [customize this component](https://api/hydrogen/components#customizing-hydrogen-components) using passthrough props.

##### Props

* **data**

  **PartialDeep\<MoneyV2, {recurseIntoArrays: true}>**

  **required**

  An object with fields that correspond to the [Storefront API's MoneyV2 object](https://shopify.dev/docs/api/storefront/2026-04/objects/MoneyV2) or [Customer Account API's MoneyV2 object](https://shopify.dev/docs/api/customer/2026-04/objects/moneyv2).

* **as**

  **ComponentGeneric**

  An HTML tag or React Component to be rendered as the base element wrapper. The default is `div`.

* **measurement**

  **PartialDeep\<UnitPriceMeasurement, {recurseIntoArrays: true}>**

  A [UnitPriceMeasurement object](https://shopify.dev/api/storefront/2026-04/objects/unitpricemeasurement).

* **measurementSeparator**

  **ReactNode**

  Customizes the separator between the money output and the measurement output. Used with the `measurement` prop. Defaults to `'/'`.

* **withoutCurrency**

  **boolean**

  Whether to remove the currency symbol from the output.

* **withoutTrailingZeros**

  **boolean**

  Whether to remove trailing zeros (fractional money) from the output.

#### MoneyV2

Supports MoneyV2 from both Storefront API and Customer Account API. The APIs may have different CurrencyCode enums (e.g., Customer Account API added USDC in 2025-10, but Storefront API doesn't support USDC in 2025-10). This union type ensures Money component works with data from either API.

```ts
StorefrontApiMoneyV2 | CustomerAccountApiMoneyV2
```

Examples

#### Examples

* #### Example code

  ##### JavaScript

  ```jsx
  import {Money} from '@shopify/hydrogen';

  export default function ProductMoney({product}) {
    const price = product.variants.nodes[0].price;

    return <Money data={price} />;
  }
  ```

  ##### TypeScript

  ```tsx
  import {Money} from '@shopify/hydrogen';
  import type {Product} from '@shopify/hydrogen/storefront-api-types';

  export default function ProductMoney({product}: {product: Product}) {
    const price = product.variants.nodes[0].price;

    return <Money data={price} />;
  }
  ```

***

### Related

[- useMoney](https://shopify.dev/docs/api/hydrogen/2026-04/hooks/usemoney)

***

---



<a id="latest-components-optimisticinput"></a>


## OptimisticInput

Creates a form input for optimistic UI updates. Use `useOptimisticData` to update the UI with the latest optimistic data.

##### Props

* **data**

  **Record\<string, unknown>**

  **required**

  The data to be stored in the optimistic input. Use for creating an optimistic successful state of this form action.

* **id**

  **string**

  **required**

  A unique identifier for the optimistic input. Use the same identifier in `useOptimisticData` to retrieve the optimistic data from actions.

Examples

#### Examples

* #### Example

  ##### JavaScript

  ```js
  import {CartForm, OptimisticInput, useOptimisticData} from '@shopify/hydrogen';

  export default function Cart({line}) {
    const optimisticId = line.id;
    const optimisticData = useOptimisticData(optimisticId);

    return (
      <div
        style={{
          // Hide the line item if the optimistic data action is remove
          // Do not remove the form from the DOM
          display: optimisticData?.action === 'remove' ? 'none' : 'block',
        }}
      >
        <CartForm
          route="/cart"
          action={CartForm.ACTIONS.LinesRemove}
          inputs={{
            lineIds: [line.id],
          }}
        >
          <button type="submit">Remove</button>
          <OptimisticInput id={optimisticId} data={{action: 'remove'}} />
        </CartForm>
      </div>
    );
  }
  ```

  ##### TypeScript

  ```ts
  import {CartForm, OptimisticInput, useOptimisticData} from '@shopify/hydrogen';
  import {CartLine} from '@shopify/hydrogen-react/storefront-api-types';

  type OptimisticData = {
    action: string;
  };

  export default function Cart({line}: {line: CartLine}) {
    const optimisticId = line.id;
    const optimisticData = useOptimisticData<OptimisticData>(optimisticId);

    return (
      <div
        style={{
          // Hide the line item if the optimistic data action is remove
          // Do not remove the form from the DOM
          display: optimisticData?.action === 'remove' ? 'none' : 'block',
        }}
      >
        <CartForm
          route="/cart"
          action={CartForm.ACTIONS.LinesRemove}
          inputs={{
            lineIds: [line.id],
          }}
        >
          <button type="submit">Remove</button>
          <OptimisticInput id={optimisticId} data={{action: 'remove'}} />
        </CartForm>
      </div>
    );
  }
  ```

***

---



<a id="latest-components-pagination"></a>


## Pagination

The [Storefront API uses cursors](https://shopify.dev/docs/api/usage/pagination-graphql) to paginate through lists of data and the `<Pagination />` component makes it easy to paginate data from the Storefront API. It is important for pagination state to be maintained in the URL, so that the user can navigate to a product and return back to the same scrolled position in a list. It is also important that the list state is shareable via URL. The `<Pagination>` component provides a render prop with properties to load more elements into your list.

##### Props

* **children**

  **PaginationRenderProp\<NodesType>**

  **required**

  A render prop that includes pagination data and helpers.

* **connection**

  **Connection\<NodesType>**

  **required**

  The response from `storefront.query` for a paginated request. Make sure the query is passed pagination variables and that the query has `pageInfo` with `hasPreviousPage`, `hasNextpage`, `startCursor`, and `endCursor` defined.

* **namespace**

  **string**

  A namespace for the pagination component to avoid URL param conflicts when using multiple `Pagination` components on a single page.

#### PaginationRenderProp

* contextTypes

  ```ts
  ValidationMap<any> | undefined
  ```

* defaultProps

  Used to define default values for the props accepted by the component.

  ```ts
  Partial<P> | undefined
  ```

* displayName

  Used in debugging messages. You might want to set it explicitly if you want to display a different name for debugging purposes.

  ```ts
  string | undefined
  ```

* propTypes

  Used to declare the types of the props accepted by the component. These types will be checked during rendering and in development only. We recommend using TypeScript instead of checking prop types at runtime.

  ```ts
  WeakValidationMap<P> | undefined
  ```

#### Connection

```ts
{
      nodes: Array<NodesType>;
      pageInfo: PageInfo;
    } | {
      edges: Array<{
        node: NodesType;
      }>;
      pageInfo: PageInfo;
    }
```

Examples

#### Examples

* #### Example code

  ##### JavaScript

  ```jsx
  import {Pagination, getPaginationVariables} from '@shopify/hydrogen';
  import {useLoaderData, Link} from 'react-router';

  export async function loader({request, context: {storefront}}) {
    const variables = getPaginationVariables(request, {pageBy: 8});

    const data = await storefront.query(ALL_PRODUCTS_QUERY, {
      variables,
    });

    return {products: data.products};
  }

  export default function List() {
    const {products} = useLoaderData();

    return (
      <Pagination connection={products}>
        {({nodes, PreviousLink, NextLink}) => (
          <>
            <PreviousLink>Previous</PreviousLink>
            <div>
              {nodes.map((product) => (
                <Link key={product.id} to={`/products/${product.handle}`}>
                  {product.title}
                </Link>
              ))}
            </div>
            <NextLink>Next</NextLink>
          </>
        )}
      </Pagination>
    );
  }

  const ALL_PRODUCTS_QUERY = `#graphql
    query AllProducts(
      $country: CountryCode
      $language: LanguageCode
      $first: Int
      $last: Int
      $startCursor: String
      $endCursor: String
    ) @inContext(country: $country, language: $language) {
      products(first: $first, last: $last, before: $startCursor, after: $endCursor) {
        nodes { id
          title
          handle
        }
        pageInfo {
          hasPreviousPage
          hasNextPage
          startCursor
          endCursor
        }
      }
    }
  `;
  ```

  ##### TypeScript

  ```tsx
  import {type LoaderFunctionArgs} from 'react-router';
  import {Pagination, getPaginationVariables} from '@shopify/hydrogen';
  import {useLoaderData, Link} from 'react-router';
  import {ProductConnection} from '@shopify/hydrogen/storefront-api-types';

  export async function loader({
    request,
    context: {storefront},
  }: LoaderFunctionArgs) {
    const variables = getPaginationVariables(request, {pageBy: 8});

    const data = await storefront.query<{products: ProductConnection}>(
      ALL_PRODUCTS_QUERY,
      {
        variables,
      },
    );

    return {products: data.products};
  }

  export default function List() {
    const {products} = useLoaderData<typeof loader>();

    return (
      <Pagination connection={products}>
        {({nodes, NextLink, PreviousLink}) => (
          <>
            <PreviousLink>Previous</PreviousLink>
            <div>
              {nodes.map((product) => (
                <Link key={product.id} to={`/products/${product.handle}`}>
                  {product.title}
                </Link>
              ))}
            </div>
            <NextLink>Next</NextLink>
          </>
        )}
      </Pagination>
    );
  }

  const ALL_PRODUCTS_QUERY = `#graphql
    query AllProducts(
      $country: CountryCode
      $language: LanguageCode
      $first: Int
      $last: Int
      $startCursor: String
      $endCursor: String
    ) @inContext(country: $country, language: $language) {
      products(first: $first, last: $last, before: $startCursor, after: $endCursor) {
        nodes { id
          title
          handle
        }
        pageInfo {
          hasPreviousPage
          hasNextPage
          startCursor
          endCursor
        }
      }
    }
  `;
  ```

***

### Related

[- getPaginationVariables](https://shopify.dev/docs/api/hydrogen/2026-04/utilities/getpaginationvariables)

***

---



<a id="latest-components-richtext"></a>


## RichText

The `RichText` component renders a metafield of type `rich_text_field`. By default the rendered output uses semantic HTML tags. Customize how nodes are rendered with the `components` prop.

##### Props

* **data**

  **string**

  **required**

  The JSON string that correspond to the Storefront API's [RichText format](https://shopify.dev/docs/apps/custom-data/metafields/types#rich-text-formatting).

* **as**

  **ComponentGeneric**

  An HTML tag or React Component to be rendered as the base element wrapper. The default is `div`.

* **components**

  **CustomComponents**

  Customize how rich text components are rendered

* **plain**

  **boolean**

  Remove rich text formatting and render plain text

#### CustomComponents

* heading

  Customize the headings. Each heading has a \`level\` property from 1-6. Defaults to \`\<h1>\` to \`\<h6>\`

  ```ts
  ({ node, }: { node: { type: "heading"; level: number; children?: ReactNode[]; }; }) => ReactNode
  ```

* link

  Customize links. Defaults to a React Router \`\<Link>\` component in Hydrogen and a \`\<a>\` in Hydrogen React.

  ```ts
  ({ node, }: { node: { type: "link"; url: string; title?: string; target?: string; children?: ReactNode[]; }; }) => ReactNode
  ```

* list

  Customize lists. They can be either ordered or unordered. Defaults to \`\<ol>\` or \`\<ul>\`

  ```ts
  ({ node, }: { node: { type: "list"; listType: "unordered" | "ordered"; children?: ReactNode[]; }; }) => ReactNode
  ```

* listItem

  Customize list items. Defaults to \`\<li>\`.

  ```ts
  ({ node, }: { node: { type: "list-item"; children?: ReactNode[]; }; }) => ReactNode
  ```

* paragraph

  Customize paragraphs. Defaults to \`\<p>\`

  ```ts
  ({ node, }: { node: { type: "paragraph"; children?: ReactNode[]; }; }) => ReactNode
  ```

* root

  The root node of the rich text. Defaults to \`\<div>\`

  ```ts
  ({ node, }: { node: { type: "root"; children?: ReactNode[]; }; }) => ReactNode
  ```

* text

  Customize how text nodes. They can either be bold or italic. Defaults to \`\<em>\`, \`\<strong>\` or text.

  ```ts
  ({ node, }: { node: { type: "text"; italic?: boolean; bold?: boolean; value?: string; }; }) => ReactNode
  ```

Examples

#### Examples

* #### Example code

  ##### JavaScript

  ```jsx
  import {RichText} from '@shopify/hydrogen';

  export function MainRichText({metaFieldData}) {
    return (
      <RichText
        data={metaFieldData}
        components={{
          paragraph({node}) {
            return <p className="customClass">{node.children}</p>;
          },
        }}
      />
    );
  }
  ```

  ##### TypeScript

  ```tsx
  import {RichText} from '@shopify/hydrogen';

  export function MainRichText({metaFieldData}: {metaFieldData: string}) {
    return (
      <RichText
        data={metaFieldData}
        components={{
          paragraph({node}) {
            return <p className="customClass">{node.children}</p>;
          },
        }}
      />
    );
  }
  ```

***

---



<a id="latest-components-script"></a>


## Script

Use the `Script` component to add third-party scripts to your app. It automatically adds a nonce attribute from your [content security policy](https://shopify.dev/docs/custom-storefronts/hydrogen/content-security-policy). If you load a script that directly modifies the DOM, you are likely to have hydration errors. Use the `waitForHydration` prop to load the script after the page hydrates.

##### Props

**`HydrogenScriptProps & ScriptAttributes`**

#### HydrogenScriptProps

* **waitForHydration**

  **boolean**

  Wait to load the script until after the page hydrates. This prevents hydration errors for scripts that modify the DOM. Note: For security, `nonce` is not supported when using `waitForHydration`. Instead you need to add the domain of the script directly to your [Content Securitiy Policy directives](https://shopify.dev/docs/storefronts/headless/hydrogen/content-security-policy#step-3-customize-the-content-security-policy).

#### ScriptAttributes

* **about**

  **string | undefined**

* **accessKey**

  **string | undefined**

* **aria-activedescendant**

  **string | undefined**

  Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.

* **aria-atomic**

  **Booleanish | undefined**

  Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.

* **aria-autocomplete**

  **"none" | "inline" | "list" | "both" | undefined**

  Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be presented if they are made.

* **aria-braillelabel**

  **string | undefined**

  Defines a string value that labels the current element, which is intended to be converted into Braille.

* **aria-brailleroledescription**

  **string | undefined**

  Defines a human-readable, author-localized abbreviated description for the role of an element, which is intended to be converted into Braille.

* **aria-busy**

  **Booleanish | undefined**

* **aria-checked**

  **boolean | "false" | "mixed" | "true" | undefined**

  Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.

* **aria-colcount**

  **number | undefined**

  Defines the total number of columns in a table, grid, or treegrid.

* **aria-colindex**

  **number | undefined**

  Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.

* **aria-colindextext**

  **string | undefined**

  Defines a human readable text alternative of aria-colindex.

* **aria-colspan**

  **number | undefined**

  Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.

* **aria-controls**

  **string | undefined**

  Identifies the element (or elements) whose contents or presence are controlled by the current element.

* **aria-current**

  **boolean | "false" | "true" | "page" | "step" | "location" | "date" | "time" | undefined**

  Indicates the element that represents the current item within a container or set of related elements.

* **aria-describedby**

  **string | undefined**

  Identifies the element (or elements) that describes the object.

* **aria-description**

  **string | undefined**

  Defines a string value that describes or annotates the current element.

* **aria-details**

  **string | undefined**

  Identifies the element that provides a detailed, extended description for the object.

* **aria-disabled**

  **Booleanish | undefined**

  Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.

* **aria-errormessage**

  **string | undefined**

  Identifies the element that provides an error message for the object.

* **aria-expanded**

  **Booleanish | undefined**

  Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.

* **aria-flowto**

  **string | undefined**

  Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion, allows assistive technology to override the general default of reading in document source order.

* **aria-haspopup**

  **boolean | "false" | "true" | "menu" | "listbox" | "tree" | "grid" | "dialog" | undefined**

  Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.

* **aria-hidden**

  **Booleanish | undefined**

  Indicates whether the element is exposed to an accessibility API.

* **aria-invalid**

  **boolean | "false" | "true" | "grammar" | "spelling" | undefined**

  Indicates the entered value does not conform to the format expected by the application.

* **aria-keyshortcuts**

  **string | undefined**

  Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.

* **aria-label**

  **string | undefined**

  Defines a string value that labels the current element.

* **aria-labelledby**

  **string | undefined**

  Identifies the element (or elements) that labels the current element.

* **aria-level**

  **number | undefined**

  Defines the hierarchical level of an element within a structure.

* **aria-live**

  **"off" | "assertive" | "polite" | undefined**

  Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.

* **aria-modal**

  **Booleanish | undefined**

  Indicates whether an element is modal when displayed.

* **aria-multiline**

  **Booleanish | undefined**

  Indicates whether a text box accepts multiple lines of input or only a single line.

* **aria-multiselectable**

  **Booleanish | undefined**

  Indicates that the user may select more than one item from the current selectable descendants.

* **aria-orientation**

  **"horizontal" | "vertical" | undefined**

  Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.

* **aria-owns**

  **string | undefined**

  Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship between DOM elements where the DOM hierarchy cannot be used to represent the relationship.

* **aria-placeholder**

  **string | undefined**

  Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value. A hint could be a sample value or a brief description of the expected format.

* **aria-posinset**

  **number | undefined**

  Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.

* **aria-pressed**

  **boolean | "false" | "mixed" | "true" | undefined**

  Indicates the current "pressed" state of toggle buttons.

* **aria-readonly**

  **Booleanish | undefined**

  Indicates that the element is not editable, but is otherwise operable.

* **aria-relevant**

  **| "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text" | "text additions" | "text removals" | undefined**

  Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.

* **aria-required**

  **Booleanish | undefined**

  Indicates that user input is required on the element before a form may be submitted.

* **aria-roledescription**

  **string | undefined**

  Defines a human-readable, author-localized description for the role of an element.

* **aria-rowcount**

  **number | undefined**

  Defines the total number of rows in a table, grid, or treegrid.

* **aria-rowindex**

  **number | undefined**

  Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.

* **aria-rowindextext**

  **string | undefined**

  Defines a human readable text alternative of aria-rowindex.

* **aria-rowspan**

  **number | undefined**

  Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.

* **aria-selected**

  **Booleanish | undefined**

  Indicates the current "selected" state of various widgets.

* **aria-setsize**

  **number | undefined**

  Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.

* **aria-sort**

  **"none" | "ascending" | "descending" | "other" | undefined**

  Indicates if items in a table or grid are sorted in ascending or descending order.

* **aria-valuemax**

  **number | undefined**

  Defines the maximum allowed value for a range widget.

* **aria-valuemin**

  **number | undefined**

  Defines the minimum allowed value for a range widget.

* **aria-valuenow**

  **number | undefined**

  Defines the current value for a range widget.

* **aria-valuetext**

  **string | undefined**

  Defines the human readable text alternative of aria-valuenow for a range widget.

* **async**

  **boolean | undefined**

* **autoCapitalize**

  **"off" | "none" | "on" | "sentences" | "words" | "characters" | undefined | (string & {})**

* **autoCorrect**

  **string | undefined**

* **autoFocus**

  **boolean | undefined**

* **autoSave**

  **string | undefined**

* **blocking**

  **"render" | (string & {}) | undefined**

* **children**

  **ReactNode | undefined**

* **className**

  **string | undefined**

* **color**

  **string | undefined**

* **content**

  **string | undefined**

* **contentEditable**

  **Booleanish | "inherit" | "plaintext-only" | undefined**

* **contextMenu**

  **string | undefined**

* **crossOrigin**

  **CrossOrigin**

* **dangerouslySetInnerHTML**

  **{ // Should be InnerHTML\['innerHTML']. // But unfortunately we're mixing renderer-specific type declarations. \_\_html: string | TrustedHTML; } | undefined**

* **datatype**

  **string | undefined**

* **defaultChecked**

  **boolean | undefined**

* **defaultValue**

  **string | number | readonly string\[] | undefined**

* **defer**

  **boolean | undefined**

* **dir**

  **string | undefined**

* **draggable**

  **Booleanish | undefined**

* **enterKeyHint**

  **"enter" | "done" | "go" | "next" | "previous" | "search" | "send" | undefined**

* **exportparts**

  **string | undefined**

* **hidden**

  **boolean | undefined**

* **id**

  **string | undefined**

* **inlist**

  **any**

* **inputMode**

  **"none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search" | undefined**

  Hints at the type of data that might be entered by the user while editing the element or its contents

* **integrity**

  **string | undefined**

* **is**

  **string | undefined**

  Specify that a standard HTML element should behave like a defined custom built-in element

* **itemID**

  **string | undefined**

* **itemProp**

  **string | undefined**

* **itemRef**

  **string | undefined**

* **itemScope**

  **boolean | undefined**

* **itemType**

  **string | undefined**

* **lang**

  **string | undefined**

* **noModule**

  **boolean | undefined**

* **nonce**

  **string | undefined**

* **onAbort**

  **ReactEventHandler\<T> | undefined**

* **onAbortCapture**

  **ReactEventHandler\<T> | undefined**

* **onAnimationEnd**

  **AnimationEventHandler\<T> | undefined**

* **onAnimationEndCapture**

  **AnimationEventHandler\<T> | undefined**

* **onAnimationIteration**

  **AnimationEventHandler\<T> | undefined**

* **onAnimationIterationCapture**

  **AnimationEventHandler\<T> | undefined**

* **onAnimationStart**

  **AnimationEventHandler\<T> | undefined**

* **onAnimationStartCapture**

  **AnimationEventHandler\<T> | undefined**

* **onAuxClick**

  **MouseEventHandler\<T> | undefined**

* **onAuxClickCapture**

  **MouseEventHandler\<T> | undefined**

* **onBeforeInput**

  **InputEventHandler\<T> | undefined**

* **onBeforeInputCapture**

  **FormEventHandler\<T> | undefined**

* **onBlur**

  **FocusEventHandler\<T> | undefined**

* **onBlurCapture**

  **FocusEventHandler\<T> | undefined**

* **onCanPlay**

  **ReactEventHandler\<T> | undefined**

* **onCanPlayCapture**

  **ReactEventHandler\<T> | undefined**

* **onCanPlayThrough**

  **ReactEventHandler\<T> | undefined**

* **onCanPlayThroughCapture**

  **ReactEventHandler\<T> | undefined**

* **onChange**

  **FormEventHandler\<T> | undefined**

* **onChangeCapture**

  **FormEventHandler\<T> | undefined**

* **onClick**

  **MouseEventHandler\<T> | undefined**

* **onClickCapture**

  **MouseEventHandler\<T> | undefined**

* **onCompositionEnd**

  **CompositionEventHandler\<T> | undefined**

* **onCompositionEndCapture**

  **CompositionEventHandler\<T> | undefined**

* **onCompositionStart**

  **CompositionEventHandler\<T> | undefined**

* **onCompositionStartCapture**

  **CompositionEventHandler\<T> | undefined**

* **onCompositionUpdate**

  **CompositionEventHandler\<T> | undefined**

* **onCompositionUpdateCapture**

  **CompositionEventHandler\<T> | undefined**

* **onContextMenu**

  **MouseEventHandler\<T> | undefined**

* **onContextMenuCapture**

  **MouseEventHandler\<T> | undefined**

* **onCopy**

  **ClipboardEventHandler\<T> | undefined**

* **onCopyCapture**

  **ClipboardEventHandler\<T> | undefined**

* **onCut**

  **ClipboardEventHandler\<T> | undefined**

* **onCutCapture**

  **ClipboardEventHandler\<T> | undefined**

* **onDoubleClick**

  **MouseEventHandler\<T> | undefined**

* **onDoubleClickCapture**

  **MouseEventHandler\<T> | undefined**

* **onDrag**

  **DragEventHandler\<T> | undefined**

* **onDragCapture**

  **DragEventHandler\<T> | undefined**

* **onDragEnd**

  **DragEventHandler\<T> | undefined**

* **onDragEndCapture**

  **DragEventHandler\<T> | undefined**

* **onDragEnter**

  **DragEventHandler\<T> | undefined**

* **onDragEnterCapture**

  **DragEventHandler\<T> | undefined**

* **onDragExit**

  **DragEventHandler\<T> | undefined**

* **onDragExitCapture**

  **DragEventHandler\<T> | undefined**

* **onDragLeave**

  **DragEventHandler\<T> | undefined**

* **onDragLeaveCapture**

  **DragEventHandler\<T> | undefined**

* **onDragOver**

  **DragEventHandler\<T> | undefined**

* **onDragOverCapture**

  **DragEventHandler\<T> | undefined**

* **onDragStart**

  **DragEventHandler\<T> | undefined**

* **onDragStartCapture**

  **DragEventHandler\<T> | undefined**

* **onDrop**

  **DragEventHandler\<T> | undefined**

* **onDropCapture**

  **DragEventHandler\<T> | undefined**

* **onDurationChange**

  **ReactEventHandler\<T> | undefined**

* **onDurationChangeCapture**

  **ReactEventHandler\<T> | undefined**

* **onEmptied**

  **ReactEventHandler\<T> | undefined**

* **onEmptiedCapture**

  **ReactEventHandler\<T> | undefined**

* **onEncrypted**

  **ReactEventHandler\<T> | undefined**

* **onEncryptedCapture**

  **ReactEventHandler\<T> | undefined**

* **onEnded**

  **ReactEventHandler\<T> | undefined**

* **onEndedCapture**

  **ReactEventHandler\<T> | undefined**

* **onError**

  **ReactEventHandler\<T> | undefined**

* **onErrorCapture**

  **ReactEventHandler\<T> | undefined**

* **onFocus**

  **FocusEventHandler\<T> | undefined**

* **onFocusCapture**

  **FocusEventHandler\<T> | undefined**

* **onGotPointerCapture**

  **PointerEventHandler\<T> | undefined**

* **onGotPointerCaptureCapture**

  **PointerEventHandler\<T> | undefined**

* **onInput**

  **FormEventHandler\<T> | undefined**

* **onInputCapture**

  **FormEventHandler\<T> | undefined**

* **onInvalid**

  **FormEventHandler\<T> | undefined**

* **onInvalidCapture**

  **FormEventHandler\<T> | undefined**

* **onKeyDown**

  **KeyboardEventHandler\<T> | undefined**

* **onKeyDownCapture**

  **KeyboardEventHandler\<T> | undefined**

* **onKeyUp**

  **KeyboardEventHandler\<T> | undefined**

* **onKeyUpCapture**

  **KeyboardEventHandler\<T> | undefined**

* **onLoad**

  **ReactEventHandler\<T> | undefined**

* **onLoadCapture**

  **ReactEventHandler\<T> | undefined**

* **onLoadedData**

  **ReactEventHandler\<T> | undefined**

* **onLoadedDataCapture**

  **ReactEventHandler\<T> | undefined**

* **onLoadedMetadata**

  **ReactEventHandler\<T> | undefined**

* **onLoadedMetadataCapture**

  **ReactEventHandler\<T> | undefined**

* **onLoadStart**

  **ReactEventHandler\<T> | undefined**

* **onLoadStartCapture**

  **ReactEventHandler\<T> | undefined**

* **onLostPointerCapture**

  **PointerEventHandler\<T> | undefined**

* **onLostPointerCaptureCapture**

  **PointerEventHandler\<T> | undefined**

* **onMouseDown**

  **MouseEventHandler\<T> | undefined**

* **onMouseDownCapture**

  **MouseEventHandler\<T> | undefined**

* **onMouseEnter**

  **MouseEventHandler\<T> | undefined**

* **onMouseLeave**

  **MouseEventHandler\<T> | undefined**

* **onMouseMove**

  **MouseEventHandler\<T> | undefined**

* **onMouseMoveCapture**

  **MouseEventHandler\<T> | undefined**

* **onMouseOut**

  **MouseEventHandler\<T> | undefined**

* **onMouseOutCapture**

  **MouseEventHandler\<T> | undefined**

* **onMouseOver**

  **MouseEventHandler\<T> | undefined**

* **onMouseOverCapture**

  **MouseEventHandler\<T> | undefined**

* **onMouseUp**

  **MouseEventHandler\<T> | undefined**

* **onMouseUpCapture**

  **MouseEventHandler\<T> | undefined**

* **onPaste**

  **ClipboardEventHandler\<T> | undefined**

* **onPasteCapture**

  **ClipboardEventHandler\<T> | undefined**

* **onPause**

  **ReactEventHandler\<T> | undefined**

* **onPauseCapture**

  **ReactEventHandler\<T> | undefined**

* **onPlay**

  **ReactEventHandler\<T> | undefined**

* **onPlayCapture**

  **ReactEventHandler\<T> | undefined**

* **onPlaying**

  **ReactEventHandler\<T> | undefined**

* **onPlayingCapture**

  **ReactEventHandler\<T> | undefined**

* **onPointerCancel**

  **PointerEventHandler\<T> | undefined**

* **onPointerCancelCapture**

  **PointerEventHandler\<T> | undefined**

* **onPointerDown**

  **PointerEventHandler\<T> | undefined**

* **onPointerDownCapture**

  **PointerEventHandler\<T> | undefined**

* **onPointerEnter**

  **PointerEventHandler\<T> | undefined**

* **onPointerLeave**

  **PointerEventHandler\<T> | undefined**

* **onPointerMove**

  **PointerEventHandler\<T> | undefined**

* **onPointerMoveCapture**

  **PointerEventHandler\<T> | undefined**

* **onPointerOut**

  **PointerEventHandler\<T> | undefined**

* **onPointerOutCapture**

  **PointerEventHandler\<T> | undefined**

* **onPointerOver**

  **PointerEventHandler\<T> | undefined**

* **onPointerOverCapture**

  **PointerEventHandler\<T> | undefined**

* **onPointerUp**

  **PointerEventHandler\<T> | undefined**

* **onPointerUpCapture**

  **PointerEventHandler\<T> | undefined**

* **onProgress**

  **ReactEventHandler\<T> | undefined**

* **onProgressCapture**

  **ReactEventHandler\<T> | undefined**

* **onRateChange**

  **ReactEventHandler\<T> | undefined**

* **onRateChangeCapture**

  **ReactEventHandler\<T> | undefined**

* **onReset**

  **FormEventHandler\<T> | undefined**

* **onResetCapture**

  **FormEventHandler\<T> | undefined**

* **onScroll**

  **UIEventHandler\<T> | undefined**

* **onScrollCapture**

  **UIEventHandler\<T> | undefined**

* **onSeeked**

  **ReactEventHandler\<T> | undefined**

* **onSeekedCapture**

  **ReactEventHandler\<T> | undefined**

* **onSeeking**

  **ReactEventHandler\<T> | undefined**

* **onSeekingCapture**

  **ReactEventHandler\<T> | undefined**

* **onSelect**

  **ReactEventHandler\<T> | undefined**

* **onSelectCapture**

  **ReactEventHandler\<T> | undefined**

* **onStalled**

  **ReactEventHandler\<T> | undefined**

* **onStalledCapture**

  **ReactEventHandler\<T> | undefined**

* **onSubmit**

  **FormEventHandler\<T> | undefined**

* **onSubmitCapture**

  **FormEventHandler\<T> | undefined**

* **onSuspend**

  **ReactEventHandler\<T> | undefined**

* **onSuspendCapture**

  **ReactEventHandler\<T> | undefined**

* **onTimeUpdate**

  **ReactEventHandler\<T> | undefined**

* **onTimeUpdateCapture**

  **ReactEventHandler\<T> | undefined**

* **onTouchCancel**

  **TouchEventHandler\<T> | undefined**

* **onTouchCancelCapture**

  **TouchEventHandler\<T> | undefined**

* **onTouchEnd**

  **TouchEventHandler\<T> | undefined**

* **onTouchEndCapture**

  **TouchEventHandler\<T> | undefined**

* **onTouchMove**

  **TouchEventHandler\<T> | undefined**

* **onTouchMoveCapture**

  **TouchEventHandler\<T> | undefined**

* **onTouchStart**

  **TouchEventHandler\<T> | undefined**

* **onTouchStartCapture**

  **TouchEventHandler\<T> | undefined**

* **onTransitionEnd**

  **TransitionEventHandler\<T> | undefined**

* **onTransitionEndCapture**

  **TransitionEventHandler\<T> | undefined**

* **onVolumeChange**

  **ReactEventHandler\<T> | undefined**

* **onVolumeChangeCapture**

  **ReactEventHandler\<T> | undefined**

* **onWaiting**

  **ReactEventHandler\<T> | undefined**

* **onWaitingCapture**

  **ReactEventHandler\<T> | undefined**

* **onWheel**

  **WheelEventHandler\<T> | undefined**

* **onWheelCapture**

  **WheelEventHandler\<T> | undefined**

* **part**

  **string | undefined**

* **prefix**

  **string | undefined**

* **property**

  **string | undefined**

* **radioGroup**

  **string | undefined**

* **referrerPolicy**

  **HTMLAttributeReferrerPolicy | undefined**

* **rel**

  **string | undefined**

* **resource**

  **string | undefined**

* **results**

  **number | undefined**

* **rev**

  **string | undefined**

* **role**

  **AriaRole | undefined**

* **security**

  **string | undefined**

* **slot**

  **string | undefined**

* **spellCheck**

  **Booleanish | undefined**

* **src**

  **string | undefined**

* **style**

  **CSSProperties | undefined**

* **suppressContentEditableWarning**

  **boolean | undefined**

* **suppressHydrationWarning**

  **boolean | undefined**

* **tabIndex**

  **number | undefined**

* **title**

  **string | undefined**

* **translate**

  **"yes" | "no" | undefined**

* **type**

  **string | undefined**

* **typeof**

  **string | undefined**

* **unselectable**

  **"on" | "off" | undefined**

* **vocab**

  **string | undefined**

* **aria-dropeffect**

  **"none" | "copy" | "execute" | "link" | "move" | "popup" | undefined**

  **deprecated**

  Indicates what functions can be performed when a dragged object is released on the drop target.

  **Deprecated:**

  in ARIA 1.1

* **aria-grabbed**

  **Booleanish | undefined**

  **deprecated**

  Indicates an element's "grabbed" state in a drag-and-drop operation.

  **Deprecated:**

  in ARIA 1.1

* **charSet**

  **string | undefined**

  **deprecated**

  **Deprecated:**

  Deprecated

* **onKeyPress**

  **KeyboardEventHandler\<T> | undefined**

  **deprecated**

  **Deprecated:**

  Use `onKeyUp` or `onKeyDown` instead

* **onKeyPressCapture**

  **KeyboardEventHandler\<T> | undefined**

  **deprecated**

  **Deprecated:**

  Use `onKeyUpCapture` or `onKeyDownCapture` instead

#### HydrogenScriptProps

* waitForHydration

  Wait to load the script until after the page hydrates. This prevents hydration errors for scripts that modify the DOM. Note: For security, \`nonce\` is not supported when using \`waitForHydration\`. Instead you need to add the domain of the script directly to your \[Content Securitiy Policy directives]\(https://shopify.dev/docs/storefronts/headless/hydrogen/content-security-policy#step-3-customize-the-content-security-policy).

  ```ts
  boolean
  ```

#### ScriptAttributes

* about

  ```ts
  string | undefined
  ```

* accessKey

  ```ts
  string | undefined
  ```

* aria-activedescendant

  Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.

  ```ts
  string | undefined
  ```

* aria-atomic

  Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.

  ```ts
  Booleanish | undefined
  ```

* aria-autocomplete

  Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be presented if they are made.

  ```ts
  "none" | "inline" | "list" | "both" | undefined
  ```

* aria-braillelabel

  Defines a string value that labels the current element, which is intended to be converted into Braille.

  ```ts
  string | undefined
  ```

* aria-brailleroledescription

  Defines a human-readable, author-localized abbreviated description for the role of an element, which is intended to be converted into Braille.

  ```ts
  string | undefined
  ```

* aria-busy

  ```ts
  Booleanish | undefined
  ```

* aria-checked

  Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.

  ```ts
  boolean | "false" | "mixed" | "true" | undefined
  ```

* aria-colcount

  Defines the total number of columns in a table, grid, or treegrid.

  ```ts
  number | undefined
  ```

* aria-colindex

  Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.

  ```ts
  number | undefined
  ```

* aria-colindextext

  Defines a human readable text alternative of aria-colindex.

  ```ts
  string | undefined
  ```

* aria-colspan

  Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.

  ```ts
  number | undefined
  ```

* aria-controls

  Identifies the element (or elements) whose contents or presence are controlled by the current element.

  ```ts
  string | undefined
  ```

* aria-current

  Indicates the element that represents the current item within a container or set of related elements.

  ```ts
  boolean | "false" | "true" | "page" | "step" | "location" | "date" | "time" | undefined
  ```

* aria-describedby

  Identifies the element (or elements) that describes the object.

  ```ts
  string | undefined
  ```

* aria-description

  Defines a string value that describes or annotates the current element.

  ```ts
  string | undefined
  ```

* aria-details

  Identifies the element that provides a detailed, extended description for the object.

  ```ts
  string | undefined
  ```

* aria-disabled

  Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.

  ```ts
  Booleanish | undefined
  ```

* aria-dropeffect

  Indicates what functions can be performed when a dragged object is released on the drop target.

  ```ts
  "none" | "copy" | "execute" | "link" | "move" | "popup" | undefined
  ```

* aria-errormessage

  Identifies the element that provides an error message for the object.

  ```ts
  string | undefined
  ```

* aria-expanded

  Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.

  ```ts
  Booleanish | undefined
  ```

* aria-flowto

  Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion, allows assistive technology to override the general default of reading in document source order.

  ```ts
  string | undefined
  ```

* aria-grabbed

  Indicates an element's "grabbed" state in a drag-and-drop operation.

  ```ts
  Booleanish | undefined
  ```

* aria-haspopup

  Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.

  ```ts
  boolean | "false" | "true" | "menu" | "listbox" | "tree" | "grid" | "dialog" | undefined
  ```

* aria-hidden

  Indicates whether the element is exposed to an accessibility API.

  ```ts
  Booleanish | undefined
  ```

* aria-invalid

  Indicates the entered value does not conform to the format expected by the application.

  ```ts
  boolean | "false" | "true" | "grammar" | "spelling" | undefined
  ```

* aria-keyshortcuts

  Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.

  ```ts
  string | undefined
  ```

* aria-label

  Defines a string value that labels the current element.

  ```ts
  string | undefined
  ```

* aria-labelledby

  Identifies the element (or elements) that labels the current element.

  ```ts
  string | undefined
  ```

* aria-level

  Defines the hierarchical level of an element within a structure.

  ```ts
  number | undefined
  ```

* aria-live

  Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.

  ```ts
  "off" | "assertive" | "polite" | undefined
  ```

* aria-modal

  Indicates whether an element is modal when displayed.

  ```ts
  Booleanish | undefined
  ```

* aria-multiline

  Indicates whether a text box accepts multiple lines of input or only a single line.

  ```ts
  Booleanish | undefined
  ```

* aria-multiselectable

  Indicates that the user may select more than one item from the current selectable descendants.

  ```ts
  Booleanish | undefined
  ```

* aria-orientation

  Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.

  ```ts
  "horizontal" | "vertical" | undefined
  ```

* aria-owns

  Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship between DOM elements where the DOM hierarchy cannot be used to represent the relationship.

  ```ts
  string | undefined
  ```

* aria-placeholder

  Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value. A hint could be a sample value or a brief description of the expected format.

  ```ts
  string | undefined
  ```

* aria-posinset

  Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.

  ```ts
  number | undefined
  ```

* aria-pressed

  Indicates the current "pressed" state of toggle buttons.

  ```ts
  boolean | "false" | "mixed" | "true" | undefined
  ```

* aria-readonly

  Indicates that the element is not editable, but is otherwise operable.

  ```ts
  Booleanish | undefined
  ```

* aria-relevant

  Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.

  ```ts
  | "additions"
              | "additions removals"
              | "additions text"
              | "all"
              | "removals"
              | "removals additions"
              | "removals text"
              | "text"
              | "text additions"
              | "text removals"
              | undefined
  ```

* aria-required

  Indicates that user input is required on the element before a form may be submitted.

  ```ts
  Booleanish | undefined
  ```

* aria-roledescription

  Defines a human-readable, author-localized description for the role of an element.

  ```ts
  string | undefined
  ```

* aria-rowcount

  Defines the total number of rows in a table, grid, or treegrid.

  ```ts
  number | undefined
  ```

* aria-rowindex

  Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.

  ```ts
  number | undefined
  ```

* aria-rowindextext

  Defines a human readable text alternative of aria-rowindex.

  ```ts
  string | undefined
  ```

* aria-rowspan

  Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.

  ```ts
  number | undefined
  ```

* aria-selected

  Indicates the current "selected" state of various widgets.

  ```ts
  Booleanish | undefined
  ```

* aria-setsize

  Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.

  ```ts
  number | undefined
  ```

* aria-sort

  Indicates if items in a table or grid are sorted in ascending or descending order.

  ```ts
  "none" | "ascending" | "descending" | "other" | undefined
  ```

* aria-valuemax

  Defines the maximum allowed value for a range widget.

  ```ts
  number | undefined
  ```

* aria-valuemin

  Defines the minimum allowed value for a range widget.

  ```ts
  number | undefined
  ```

* aria-valuenow

  Defines the current value for a range widget.

  ```ts
  number | undefined
  ```

* aria-valuetext

  Defines the human readable text alternative of aria-valuenow for a range widget.

  ```ts
  string | undefined
  ```

* async

  ```ts
  boolean | undefined
  ```

* autoCapitalize

  ```ts
  "off" | "none" | "on" | "sentences" | "words" | "characters" | undefined | (string & {})
  ```

* autoCorrect

  ```ts
  string | undefined
  ```

* autoFocus

  ```ts
  boolean | undefined
  ```

* autoSave

  ```ts
  string | undefined
  ```

* blocking

  ```ts
  "render" | (string & {}) | undefined
  ```

* charSet

  ```ts
  string | undefined
  ```

* children

  ```ts
  ReactNode | undefined
  ```

* className

  ```ts
  string | undefined
  ```

* color

  ```ts
  string | undefined
  ```

* content

  ```ts
  string | undefined
  ```

* contentEditable

  ```ts
  Booleanish | "inherit" | "plaintext-only" | undefined
  ```

* contextMenu

  ```ts
  string | undefined
  ```

* crossOrigin

  ```ts
  CrossOrigin
  ```

* dangerouslySetInnerHTML

  ```ts
  {
              // Should be InnerHTML['innerHTML'].
              // But unfortunately we're mixing renderer-specific type declarations.
              __html: string | TrustedHTML;
          } | undefined
  ```

* datatype

  ```ts
  string | undefined
  ```

* defaultChecked

  ```ts
  boolean | undefined
  ```

* defaultValue

  ```ts
  string | number | readonly string[] | undefined
  ```

* defer

  ```ts
  boolean | undefined
  ```

* dir

  ```ts
  string | undefined
  ```

* draggable

  ```ts
  Booleanish | undefined
  ```

* enterKeyHint

  ```ts
  "enter" | "done" | "go" | "next" | "previous" | "search" | "send" | undefined
  ```

* exportparts

  ```ts
  string | undefined
  ```

* hidden

  ```ts
  boolean | undefined
  ```

* id

  ```ts
  string | undefined
  ```

* inlist

  ```ts
  any
  ```

* inputMode

  Hints at the type of data that might be entered by the user while editing the element or its contents

  ```ts
  "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search" | undefined
  ```

* integrity

  ```ts
  string | undefined
  ```

* is

  Specify that a standard HTML element should behave like a defined custom built-in element

  ```ts
  string | undefined
  ```

* itemID

  ```ts
  string | undefined
  ```

* itemProp

  ```ts
  string | undefined
  ```

* itemRef

  ```ts
  string | undefined
  ```

* itemScope

  ```ts
  boolean | undefined
  ```

* itemType

  ```ts
  string | undefined
  ```

* lang

  ```ts
  string | undefined
  ```

* noModule

  ```ts
  boolean | undefined
  ```

* nonce

  ```ts
  string | undefined
  ```

* onAbort

  ```ts
  ReactEventHandler<T> | undefined
  ```

* onAbortCapture

  ```ts
  ReactEventHandler<T> | undefined
  ```

* onAnimationEnd

  ```ts
  AnimationEventHandler<T> | undefined
  ```

* onAnimationEndCapture

  ```ts
  AnimationEventHandler<T> | undefined
  ```

* onAnimationIteration

  ```ts
  AnimationEventHandler<T> | undefined
  ```

* onAnimationIterationCapture

  ```ts
  AnimationEventHandler<T> | undefined
  ```

* onAnimationStart

  ```ts
  AnimationEventHandler<T> | undefined
  ```

* onAnimationStartCapture

  ```ts
  AnimationEventHandler<T> | undefined
  ```

* onAuxClick

  ```ts
  MouseEventHandler<T> | undefined
  ```

* onAuxClickCapture

  ```ts
  MouseEventHandler<T> | undefined
  ```

* onBeforeInput

  ```ts
  InputEventHandler<T> | undefined
  ```

* onBeforeInputCapture

  ```ts
  FormEventHandler<T> | undefined
  ```

* onBlur

  ```ts
  FocusEventHandler<T> | undefined
  ```

* onBlurCapture

  ```ts
  FocusEventHandler<T> | undefined
  ```

* onCanPlay

  ```ts
  ReactEventHandler<T> | undefined
  ```

* onCanPlayCapture

  ```ts
  ReactEventHandler<T> | undefined
  ```

* onCanPlayThrough

  ```ts
  ReactEventHandler<T> | undefined
  ```

* onCanPlayThroughCapture

  ```ts
  ReactEventHandler<T> | undefined
  ```

* onChange

  ```ts
  FormEventHandler<T> | undefined
  ```

* onChangeCapture

  ```ts
  FormEventHandler<T> | undefined
  ```

* onClick

  ```ts
  MouseEventHandler<T> | undefined
  ```

* onClickCapture

  ```ts
  MouseEventHandler<T> | undefined
  ```

* onCompositionEnd

  ```ts
  CompositionEventHandler<T> | undefined
  ```

* onCompositionEndCapture

  ```ts
  CompositionEventHandler<T> | undefined
  ```

* onCompositionStart

  ```ts
  CompositionEventHandler<T> | undefined
  ```

* onCompositionStartCapture

  ```ts
  CompositionEventHandler<T> | undefined
  ```

* onCompositionUpdate

  ```ts
  CompositionEventHandler<T> | undefined
  ```

* onCompositionUpdateCapture

  ```ts
  CompositionEventHandler<T> | undefined
  ```

* onContextMenu

  ```ts
  MouseEventHandler<T> | undefined
  ```

* onContextMenuCapture

  ```ts
  MouseEventHandler<T> | undefined
  ```

* onCopy

  ```ts
  ClipboardEventHandler<T> | undefined
  ```

* onCopyCapture

  ```ts
  ClipboardEventHandler<T> | undefined
  ```

* onCut

  ```ts
  ClipboardEventHandler<T> | undefined
  ```

* onCutCapture

  ```ts
  ClipboardEventHandler<T> | undefined
  ```

* onDoubleClick

  ```ts
  MouseEventHandler<T> | undefined
  ```

* onDoubleClickCapture

  ```ts
  MouseEventHandler<T> | undefined
  ```

* onDrag

  ```ts
  DragEventHandler<T> | undefined
  ```

* onDragCapture

  ```ts
  DragEventHandler<T> | undefined
  ```

* onDragEnd

  ```ts
  DragEventHandler<T> | undefined
  ```

* onDragEndCapture

  ```ts
  DragEventHandler<T> | undefined
  ```

* onDragEnter

  ```ts
  DragEventHandler<T> | undefined
  ```

* onDragEnterCapture

  ```ts
  DragEventHandler<T> | undefined
  ```

* onDragExit

  ```ts
  DragEventHandler<T> | undefined
  ```

* onDragExitCapture

  ```ts
  DragEventHandler<T> | undefined
  ```

* onDragLeave

  ```ts
  DragEventHandler<T> | undefined
  ```

* onDragLeaveCapture

  ```ts
  DragEventHandler<T> | undefined
  ```

* onDragOver

  ```ts
  DragEventHandler<T> | undefined
  ```

* onDragOverCapture

  ```ts
  DragEventHandler<T> | undefined
  ```

* onDragStart

  ```ts
  DragEventHandler<T> | undefined
  ```

* onDragStartCapture

  ```ts
  DragEventHandler<T> | undefined
  ```

* onDrop

  ```ts
  DragEventHandler<T> | undefined
  ```

* onDropCapture

  ```ts
  DragEventHandler<T> | undefined
  ```

* onDurationChange

  ```ts
  ReactEventHandler<T> | undefined
  ```

* onDurationChangeCapture

  ```ts
  ReactEventHandler<T> | undefined
  ```

* onEmptied

  ```ts
  ReactEventHandler<T> | undefined
  ```

* onEmptiedCapture

  ```ts
  ReactEventHandler<T> | undefined
  ```

* onEncrypted

  ```ts
  ReactEventHandler<T> | undefined
  ```

* onEncryptedCapture

  ```ts
  ReactEventHandler<T> | undefined
  ```

* onEnded

  ```ts
  ReactEventHandler<T> | undefined
  ```

* onEndedCapture

  ```ts
  ReactEventHandler<T> | undefined
  ```

* onError

  ```ts
  ReactEventHandler<T> | undefined
  ```

* onErrorCapture

  ```ts
  ReactEventHandler<T> | undefined
  ```

* onFocus

  ```ts
  FocusEventHandler<T> | undefined
  ```

* onFocusCapture

  ```ts
  FocusEventHandler<T> | undefined
  ```

* onGotPointerCapture

  ```ts
  PointerEventHandler<T> | undefined
  ```

* onGotPointerCaptureCapture

  ```ts
  PointerEventHandler<T> | undefined
  ```

* onInput

  ```ts
  FormEventHandler<T> | undefined
  ```

* onInputCapture

  ```ts
  FormEventHandler<T> | undefined
  ```

* onInvalid

  ```ts
  FormEventHandler<T> | undefined
  ```

* onInvalidCapture

  ```ts
  FormEventHandler<T> | undefined
  ```

* onKeyDown

  ```ts
  KeyboardEventHandler<T> | undefined
  ```

* onKeyDownCapture

  ```ts
  KeyboardEventHandler<T> | undefined
  ```

* onKeyPress

  ```ts
  KeyboardEventHandler<T> | undefined
  ```

* onKeyPressCapture

  ```ts
  KeyboardEventHandler<T> | undefined
  ```

* onKeyUp

  ```ts
  KeyboardEventHandler<T> | undefined
  ```

* onKeyUpCapture

  ```ts
  KeyboardEventHandler<T> | undefined
  ```

* onLoad

  ```ts
  ReactEventHandler<T> | undefined
  ```

* onLoadCapture

  ```ts
  ReactEventHandler<T> | undefined
  ```

* onLoadedData

  ```ts
  ReactEventHandler<T> | undefined
  ```

* onLoadedDataCapture

  ```ts
  ReactEventHandler<T> | undefined
  ```

* onLoadedMetadata

  ```ts
  ReactEventHandler<T> | undefined
  ```

* onLoadedMetadataCapture

  ```ts
  ReactEventHandler<T> | undefined
  ```

* onLoadStart

  ```ts
  ReactEventHandler<T> | undefined
  ```

* onLoadStartCapture

  ```ts
  ReactEventHandler<T> | undefined
  ```

* onLostPointerCapture

  ```ts
  PointerEventHandler<T> | undefined
  ```

* onLostPointerCaptureCapture

  ```ts
  PointerEventHandler<T> | undefined
  ```

* onMouseDown

  ```ts
  MouseEventHandler<T> | undefined
  ```

* onMouseDownCapture

  ```ts
  MouseEventHandler<T> | undefined
  ```

* onMouseEnter

  ```ts
  MouseEventHandler<T> | undefined
  ```

* onMouseLeave

  ```ts
  MouseEventHandler<T> | undefined
  ```

* onMouseMove

  ```ts
  MouseEventHandler<T> | undefined
  ```

* onMouseMoveCapture

  ```ts
  MouseEventHandler<T> | undefined
  ```

* onMouseOut

  ```ts
  MouseEventHandler<T> | undefined
  ```

* onMouseOutCapture

  ```ts
  MouseEventHandler<T> | undefined
  ```

* onMouseOver

  ```ts
  MouseEventHandler<T> | undefined
  ```

* onMouseOverCapture

  ```ts
  MouseEventHandler<T> | undefined
  ```

* onMouseUp

  ```ts
  MouseEventHandler<T> | undefined
  ```

* onMouseUpCapture

  ```ts
  MouseEventHandler<T> | undefined
  ```

* onPaste

  ```ts
  ClipboardEventHandler<T> | undefined
  ```

* onPasteCapture

  ```ts
  ClipboardEventHandler<T> | undefined
  ```

* onPause

  ```ts
  ReactEventHandler<T> | undefined
  ```

* onPauseCapture

  ```ts
  ReactEventHandler<T> | undefined
  ```

* onPlay

  ```ts
  ReactEventHandler<T> | undefined
  ```

* onPlayCapture

  ```ts
  ReactEventHandler<T> | undefined
  ```

* onPlaying

  ```ts
  ReactEventHandler<T> | undefined
  ```

* onPlayingCapture

  ```ts
  ReactEventHandler<T> | undefined
  ```

* onPointerCancel

  ```ts
  PointerEventHandler<T> | undefined
  ```

* onPointerCancelCapture

  ```ts
  PointerEventHandler<T> | undefined
  ```

* onPointerDown

  ```ts
  PointerEventHandler<T> | undefined
  ```

* onPointerDownCapture

  ```ts
  PointerEventHandler<T> | undefined
  ```

* onPointerEnter

  ```ts
  PointerEventHandler<T> | undefined
  ```

* onPointerLeave

  ```ts
  PointerEventHandler<T> | undefined
  ```

* onPointerMove

  ```ts
  PointerEventHandler<T> | undefined
  ```

* onPointerMoveCapture

  ```ts
  PointerEventHandler<T> | undefined
  ```

* onPointerOut

  ```ts
  PointerEventHandler<T> | undefined
  ```

* onPointerOutCapture

  ```ts
  PointerEventHandler<T> | undefined
  ```

* onPointerOver

  ```ts
  PointerEventHandler<T> | undefined
  ```

* onPointerOverCapture

  ```ts
  PointerEventHandler<T> | undefined
  ```

* onPointerUp

  ```ts
  PointerEventHandler<T> | undefined
  ```

* onPointerUpCapture

  ```ts
  PointerEventHandler<T> | undefined
  ```

* onProgress

  ```ts
  ReactEventHandler<T> | undefined
  ```

* onProgressCapture

  ```ts
  ReactEventHandler<T> | undefined
  ```

* onRateChange

  ```ts
  ReactEventHandler<T> | undefined
  ```

* onRateChangeCapture

  ```ts
  ReactEventHandler<T> | undefined
  ```

* onReset

  ```ts
  FormEventHandler<T> | undefined
  ```

* onResetCapture

  ```ts
  FormEventHandler<T> | undefined
  ```

* onScroll

  ```ts
  UIEventHandler<T> | undefined
  ```

* onScrollCapture

  ```ts
  UIEventHandler<T> | undefined
  ```

* onSeeked

  ```ts
  ReactEventHandler<T> | undefined
  ```

* onSeekedCapture

  ```ts
  ReactEventHandler<T> | undefined
  ```

* onSeeking

  ```ts
  ReactEventHandler<T> | undefined
  ```

* onSeekingCapture

  ```ts
  ReactEventHandler<T> | undefined
  ```

* onSelect

  ```ts
  ReactEventHandler<T> | undefined
  ```

* onSelectCapture

  ```ts
  ReactEventHandler<T> | undefined
  ```

* onStalled

  ```ts
  ReactEventHandler<T> | undefined
  ```

* onStalledCapture

  ```ts
  ReactEventHandler<T> | undefined
  ```

* onSubmit

  ```ts
  FormEventHandler<T> | undefined
  ```

* onSubmitCapture

  ```ts
  FormEventHandler<T> | undefined
  ```

* onSuspend

  ```ts
  ReactEventHandler<T> | undefined
  ```

* onSuspendCapture

  ```ts
  ReactEventHandler<T> | undefined
  ```

* onTimeUpdate

  ```ts
  ReactEventHandler<T> | undefined
  ```

* onTimeUpdateCapture

  ```ts
  ReactEventHandler<T> | undefined
  ```

* onTouchCancel

  ```ts
  TouchEventHandler<T> | undefined
  ```

* onTouchCancelCapture

  ```ts
  TouchEventHandler<T> | undefined
  ```

* onTouchEnd

  ```ts
  TouchEventHandler<T> | undefined
  ```

* onTouchEndCapture

  ```ts
  TouchEventHandler<T> | undefined
  ```

* onTouchMove

  ```ts
  TouchEventHandler<T> | undefined
  ```

* onTouchMoveCapture

  ```ts
  TouchEventHandler<T> | undefined
  ```

* onTouchStart

  ```ts
  TouchEventHandler<T> | undefined
  ```

* onTouchStartCapture

  ```ts
  TouchEventHandler<T> | undefined
  ```

* onTransitionEnd

  ```ts
  TransitionEventHandler<T> | undefined
  ```

* onTransitionEndCapture

  ```ts
  TransitionEventHandler<T> | undefined
  ```

* onVolumeChange

  ```ts
  ReactEventHandler<T> | undefined
  ```

* onVolumeChangeCapture

  ```ts
  ReactEventHandler<T> | undefined
  ```

* onWaiting

  ```ts
  ReactEventHandler<T> | undefined
  ```

* onWaitingCapture

  ```ts
  ReactEventHandler<T> | undefined
  ```

* onWheel

  ```ts
  WheelEventHandler<T> | undefined
  ```

* onWheelCapture

  ```ts
  WheelEventHandler<T> | undefined
  ```

* part

  ```ts
  string | undefined
  ```

* prefix

  ```ts
  string | undefined
  ```

* property

  ```ts
  string | undefined
  ```

* radioGroup

  ```ts
  string | undefined
  ```

* referrerPolicy

  ```ts
  HTMLAttributeReferrerPolicy | undefined
  ```

* rel

  ```ts
  string | undefined
  ```

* resource

  ```ts
  string | undefined
  ```

* results

  ```ts
  number | undefined
  ```

* rev

  ```ts
  string | undefined
  ```

* role

  ```ts
  AriaRole | undefined
  ```

* security

  ```ts
  string | undefined
  ```

* slot

  ```ts
  string | undefined
  ```

* spellCheck

  ```ts
  Booleanish | undefined
  ```

* src

  ```ts
  string | undefined
  ```

* style

  ```ts
  CSSProperties | undefined
  ```

* suppressContentEditableWarning

  ```ts
  boolean | undefined
  ```

* suppressHydrationWarning

  ```ts
  boolean | undefined
  ```

* tabIndex

  ```ts
  number | undefined
  ```

* title

  ```ts
  string | undefined
  ```

* translate

  ```ts
  "yes" | "no" | undefined
  ```

* type

  ```ts
  string | undefined
  ```

* typeof

  ```ts
  string | undefined
  ```

* unselectable

  ```ts
  "on" | "off" | undefined
  ```

* vocab

  ```ts
  string | undefined
  ```

Examples

#### Examples

* #### Example code

  ##### JavaScript

  ```jsx
  import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
  } from 'react-router';
  import {useNonce, Script} from '@shopify/hydrogen';
  export default function App() {
    const nonce = useNonce();

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <Meta />
          <Links />
        </head>
        <body>
          <Outlet />
          {/* Note you don't need to pass a nonce to the script component 
          because it's automatically added */}
          <Script src="https://some-custom-script.js" />
          {/* For security, nonce is not supported with `waitForHydration`.
          Instead you need to add the domain of the script directly to your
          Content Securitiy Policy directives. */}
          <Script
            waitForHydration
            src="https://domain.com/script-that-modifies-dom.js"
          />
          <ScrollRestoration nonce={nonce} />
          <Scripts nonce={nonce} />
          <LiveReload nonce={nonce} />
        </body>
      </html>
    );
  }
  ```

  ##### TypeScript

  ```tsx
  import {Links, Meta, Outlet, Scripts, ScrollRestoration} from 'react-router';
  import {useNonce, Script} from '@shopify/hydrogen';
  export default function App() {
    const nonce = useNonce();

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <Meta />
          <Links />
        </head>
        <body>
          <Outlet />
          {/* Note you don't need to pass a nonce to the script component 
          because it's automatically added */}
          <Script src="https://some-custom-script.js" />
          {/* For security, nonce is not supported with `waitForHydration`.
          Instead you need to add the domain of the script directly to your
          Content Securitiy Policy directives. */}
          <Script
            waitForHydration
            src="https://domain.com/script-that-modifies-dom.js"
          />
          <ScrollRestoration nonce={nonce} />
          <Scripts nonce={nonce} />
        </body>
      </html>
    );
  }
  ```

***

### Related

[- createContentSecurityPolicy](https://shopify.dev/docs/api/hydrogen/2026-04/utilities/createcontentsecuritypolicy)

[- useNonce](https://shopify.dev/docs/api/hydrogen/2026-04/hooks/usenonce)

***

---



<a id="latest-components-seo"></a>


## Seo

The `<Seo />` component renders SEO meta tags in the document `head`. Add the `<Seo />` to your `root.jsx` before the `<Meta />` and `<Link />` components. SEO metadata is set on a per-route basis using Remix [loader functions](https://remix.run/docs/en/v1/guides/data-loading). Learn more about [how SEO works in Hydrogen](https://shopify.dev/docs/custom-storefronts/hydrogen/seo).

**Note: the Seo component is deprecated** - Use [getSeoMeta](https://shopify.dev/docs/api/hydrogen/2026-04/utilities/getseometa) to migrate.

##### Props

* **debug**

  **boolean**

  Enable debug mode that prints SEO properties for route in the console

Examples

#### Examples

* #### Example code

  ##### JavaScript

  ```js
  import {Seo} from '@shopify/hydrogen';
  import {Links, Meta, Outlet, Scripts, ScrollRestoration} from 'react-router';

  export default function App() {
    /** ... */
    return (
      <html>
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          {/* Add <Seo /> before <Meta /> and <Link /> */}
          <Seo />
          <Meta />
          <Links />
        </head>
        <body>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
        </body>
      </html>
    );
  }
  ```

  ##### TypeScript

  ```ts
  import {Seo} from '@shopify/hydrogen';
  import {Links, Meta, Outlet, Scripts, ScrollRestoration} from 'react-router';

  export default function App() {
    /** ... */
    return (
      <html>
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          {/* Add <Seo /> before <Meta /> and <Link /> */}
          <Seo />
          <Meta />
          <Links />
        </head>
        <body>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
        </body>
      </html>
    );
  }
  ```

***

---



<a id="latest-components-shoppaybutton"></a>


## ShopPayButton

The `ShopPayButton` component renders a button that redirects to the Shop Pay checkout. It renders a [`<shop-pay-button>`](https://shopify.dev/custom-storefronts/tools/web-components) custom element, for which it will lazy-load the source code automatically.

##### Props

**`ShopPayButtonStyleProps & ShopPayDomainProps & ShopPayChannelAttribution & (ShopPayVariantIds | ShopPayVariantAndQuantities)`**

#### ShopPayButtonStyleProps

* **className**

  **string**

  A string of classes to apply to the `div` that wraps the Shop Pay button.

* **width**

  **string**

  A string that's applied to the [CSS custom property (variable)](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) `--shop-pay-button-width` for the [Buy with Shop Pay component](https://shopify.dev/custom-storefronts/tools/web-components#buy-with-shop-pay-component).

#### ShopPayChannelAttribution

* **channel**

  **'headless' | 'hydrogen'**

  A string that adds channel attribution to the order. Can be either `headless` or `hydrogen`

#### ShopPayDomainProps

* **storeDomain**

  **string**

  The domain of your Shopify storefront URL (eg: `your-store.myshopify.com`).

#### ShopPayVariantAndQuantities

* **variantIdsAndQuantities**

  **Array<{ id: string; quantity: number; }>**

  **required**

  An array of variant IDs and quantities to purchase with Shop Pay.

* **variantIds**

  **never**

  An array of IDs of the variants to purchase with Shop Pay. This will only ever have a quantity of 1 for each variant. If you want to use other quantities, then use `variantIdsAndQuantities`.

#### ShopPayVariantIds

* **variantIds**

  **string\[]**

  **required**

  An array of IDs of the variants to purchase with Shop Pay. This will only ever have a quantity of 1 for each variant. If you want to use other quantities, then use `variantIdsAndQuantities`.

* **variantIdsAndQuantities**

  **never**

  An array of variant IDs and quantities to purchase with Shop Pay.

#### ShopPayButtonStyleProps

* className

  A string of classes to apply to the \`div\` that wraps the Shop Pay button.

  ```ts
  string
  ```

* width

  A string that's applied to the \[CSS custom property (variable)]\(https://developer.mozilla.org/en-US/docs/Web/CSS/--\*) \`--shop-pay-button-width\` for the \[Buy with Shop Pay component]\(https://shopify.dev/custom-storefronts/tools/web-components#buy-with-shop-pay-component).

  ```ts
  string
  ```

#### ShopPayDomainProps

* storeDomain

  The domain of your Shopify storefront URL (eg: \`your-store.myshopify.com\`).

  ```ts
  string
  ```

#### ShopPayChannelAttribution

* channel

  A string that adds channel attribution to the order. Can be either \`headless\` or \`hydrogen\`

  ```ts
  'headless' | 'hydrogen'
  ```

#### ShopPayVariantIds

* variantIds

  An array of IDs of the variants to purchase with Shop Pay. This will only ever have a quantity of 1 for each variant. If you want to use other quantities, then use \`variantIdsAndQuantities\`.

  ```ts
  string[]
  ```

* variantIdsAndQuantities

  An array of variant IDs and quantities to purchase with Shop Pay.

  ```ts
  never
  ```

#### ShopPayVariantAndQuantities

* variantIds

  An array of IDs of the variants to purchase with Shop Pay. This will only ever have a quantity of 1 for each variant. If you want to use other quantities, then use \`variantIdsAndQuantities\`.

  ```ts
  never
  ```

* variantIdsAndQuantities

  An array of variant IDs and quantities to purchase with Shop Pay.

  ```ts
  Array<{
      id: string;
      quantity: number;
    }>
  ```

Examples

#### Examples

* #### \<ShopPayButton> without \<ShopifyProvider>

  ##### Description

  \\\<ShopPayButton> without \\\<ShopifyProvider>

  ##### JavaScript

  ```jsx
  import {ShopPayButton} from '@shopify/hydrogen';

  export function AddVariantQuantity1({variantId, storeDomain}) {
    return <ShopPayButton variantIds={[variantId]} storeDomain={storeDomain} />;
  }

  export function AddVariantQuantityMultiple({variantId, quantity, storeDomain}) {
    return (
      <ShopPayButton
        variantIdsAndQuantities={[{id: variantId, quantity}]}
        storeDomain={storeDomain}
      />
    );
  }

  export function ChannelAttribution({channel, variantId, storeDomain}) {
    return (
      <ShopPayButton
        channel={channel}
        variantIds={[variantId]}
        storeDomain={storeDomain}
      />
    );
  }
  ```

  ##### TypeScript

  ```tsx
  import {ShopPayButton} from '@shopify/hydrogen';

  export function AddVariantQuantity1({
    variantId,
    storeDomain,
  }: {
    variantId: string;
    storeDomain: string;
  }) {
    return <ShopPayButton variantIds={[variantId]} storeDomain={storeDomain} />;
  }

  export function AddVariantQuantityMultiple({
    variantId,
    quantity,
    storeDomain,
  }: {
    variantId: string;
    quantity: number;
    storeDomain: string;
  }) {
    return (
      <ShopPayButton
        variantIdsAndQuantities={[{id: variantId, quantity}]}
        storeDomain={storeDomain}
      />
    );
  }

  export function ChannelAttribution({
    channel,
    variantId,
    storeDomain,
  }: {
    channel: 'headless' | 'hydrogen';
    variantId: string;
    storeDomain: string;
  }) {
    return (
      <ShopPayButton
        channel={channel}
        variantIds={[variantId]}
        storeDomain={storeDomain}
      />
    );
  }
  ```

* #### \<ShopPayButton> with \<ShopifyProvider>

  ##### Description

  If \\\<ShopifyProvider> context provider is used in your app, you can use the \\\<ShopPayButton> without supplying a \`storeDomain\` prop

  ##### JavaScript

  ```jsx
  import {ShopifyProvider, ShopPayButton} from '@shopify/hydrogen';

  export default function App() {
    return (
      <ShopifyProvider
        storeDomain="my-store"
        storefrontToken="abc123"
        storefrontApiVersion="2025-10"
        countryIsoCode="CA"
        languageIsoCode="EN"
      >
        <AddVariantQuantity1 variantId="gid://shopify/ProductVariant/1" />
      </ShopifyProvider>
    );
  }

  export function AddVariantQuantity1({variantId}) {
    return <ShopPayButton variantIds={[variantId]} />;
  }
  ```

  ##### TypeScript

  ```tsx
  import {ShopifyProvider, ShopPayButton} from '@shopify/hydrogen';

  export default function App() {
    return (
      <ShopifyProvider
        storeDomain="my-store"
        storefrontToken="abc123"
        storefrontApiVersion="2026-01"
        countryIsoCode="CA"
        languageIsoCode="EN"
      >
        <AddVariantQuantity1 variantId="gid://shopify/ProductVariant/1" />
      </ShopifyProvider>
    );
  }

  export function AddVariantQuantity1({variantId}: {variantId: string}) {
    return <ShopPayButton variantIds={[variantId]} />;
  }
  ```

***

---



<a id="latest-components-variantselector"></a>


## VariantSelector

The `VariantSelector` component helps you build a form for selecting available variants of a product. It is important for variant selection state to be maintained in the URL, so that the user can navigate to a product and return back to the same variant selection. It is also important that the variant selection state is shareable via URL. The `VariantSelector` component provides a render prop that renders for each product option.

##### Props

* **children**

  **({ option }: { option: VariantOption; }) => ReactNode**

  **required**

* **handle**

  **string**

  **required**

  The product handle for all of the variants

* **options**

  **Array\<PartialProductOption> | undefined**

  **required**

  Product options from the [Storefront API](https://shopify.dev/docs/api/storefront/2026-04/objects/ProductOption). Make sure both `name` and `values` are a part of your query.

* **productPath**

  **string**

  By default all products are under /products. Use this prop to provide a custom path.

* **selectedVariant**

  **Maybe\<PartialDeep\<ProductVariant>>**

  An optional selected variant to use for the initial state if no URL parameters are set

* **variants**

  **| PartialDeep\<ProductVariantConnection> | Array\<PartialDeep\<ProductVariant>>**

  Product variants from the [Storefront API](https://shopify.dev/docs/api/storefront/2026-04/objects/ProductVariant). You only need to pass this prop if you want to show product availability. If a product option combination is not found within `variants`, it is assumed to be available. Make sure to include `availableForSale` and `selectedOptions.name` and `selectedOptions.value`.

* **waitForNavigation**

  **boolean**

  Should the VariantSelector wait to update until after the browser navigates to a variant.

#### VariantOption

* name

  ```ts
  string
  ```

* value

  ```ts
  string
  ```

* values

  ```ts
  Array<VariantOptionValue>
  ```

#### VariantOptionValue

* isActive

  ```ts
  boolean
  ```

* isAvailable

  ```ts
  boolean
  ```

* optionValue

  ```ts
  PartialProductOptionValues
  ```

* search

  ```ts
  string
  ```

* to

  ```ts
  string
  ```

* value

  ```ts
  string
  ```

* variant

  ```ts
  PartialDeep<ProductVariant, {recurseIntoArrays: true}>
  ```

#### PartialProductOptionValues

* \_\_typename

  ```ts
  'ProductOptionValue'
  ```

* firstSelectableVariant

  The product variant that combines this option value with the lowest-position option values for all other options. This field will always return a variant, provided a variant including this option value exists.

  ```ts
  Maybe<ProductVariant>
  ```

* id

  A globally-unique ID.

  ```ts
  string
  ```

* name

  The name of the product option value.

  ```ts
  string
  ```

* swatch

  The swatch of the product option value.

  ```ts
  Maybe<ProductOptionValueSwatch>
  ```

#### PartialProductOption

* \_\_typename

  ```ts
  'ProductOption'
  ```

* id

  A globally-unique ID.

  ```ts
  string
  ```

* name

  The product option’s name.

  ```ts
  string
  ```

* optionValues

  ```ts
  Array<PartialProductOptionValues>
  ```

* values

  The corresponding value to the product option name.

  ```ts
  Array<Scalars['String']['output']>
  ```

Examples

#### Examples

* #### Example code

  ##### JavaScript

  ```jsx
  import {VariantSelector} from '@shopify/hydrogen';
  import {Link} from 'react-router';

  const ProductForm = ({product}) => {
    return (
      <VariantSelector
        handle={product.handle}
        options={product.options}
        variants={product.variants}
      >
        {({option}) => (
          <>
            <div>{option.name}</div>
            <div>
              {option.values.map(
                ({value, isAvailable, to, isActive, variant}) => (
                  <Link
                    to={to}
                    prefetch="intent"
                    className={
                      isActive ? 'active' : isAvailable ? '' : 'opacity-80'
                    }
                  >
                    {value}
                    <br />
                    {variant && `SKU: ${variant.sku}`}
                  </Link>
                ),
              )}
            </div>
          </>
        )}
      </VariantSelector>
    );
  };
  ```

  ##### TypeScript

  ```tsx
  import {VariantSelector} from '@shopify/hydrogen';
  import type {Product} from '@shopify/hydrogen/storefront-api-types';
  import {Link} from 'react-router';

  const ProductForm = ({product}: {product: Product}) => {
    return (
      <VariantSelector
        handle={product.handle}
        options={product.options}
        variants={product.variants}
      >
        {({option}) => (
          <>
            <div>{option.name}</div>
            <div>
              {option.values.map(
                ({value, isAvailable, to, isActive, variant}) => (
                  <Link
                    to={to}
                    prefetch="intent"
                    className={
                      isActive ? 'active' : isAvailable ? '' : 'opacity-80'
                    }
                  >
                    {value}
                    <br />
                    {variant && `SKU: ${variant.sku}`}
                  </Link>
                ),
              )}
            </div>
          </>
        )}
      </VariantSelector>
    );
  };
  ```

***

### Related

[- getSelectedProductOptions](https://shopify.dev/docs/api/hydrogen/2026-04/utilities/getselectedproductoptions)

***

---



<a id="latest-hooks-useanalytics"></a>


## useAnalytics

A hook that provides access to the analytics provider context. Must be a descendent of [`Analytics.Provider`](https://shopify.dev/docs/api/hydrogen/2026-04/components/analytics/analytics-provider).

##### Returns

* **canTrack**

  **() => boolean**

  A function to tell you the current state of if the user can be tracked by analytics. Defaults to Customer Privacy API's `window.Shopify.customerPrivacy.analyticsProcessingAllowed()`.

* **cart**

  **UserCart | DefaultCart**

  The current cart state. You can overwrite the type by passing a generic

* **customData**

  **Record\<string, unknown>**

  The custom data passed in from the `AnalyticsProvider`.

* **prevCart**

  **UserCart | DefaultCart**

  The previous cart state. You can overwrite the type by passing a generic

* **publish**

  **AnalyticsContextPublishForDoc**

  A function to publish an analytics event.

* **register**

  **(key: string) => { ready: () => void; }**

  A function to register with the analytics provider. It holds the first browser load events until all registered key has executed the supplied `ready` function. [See example register usage](https://shopify.dev/docs/api/hydrogen/hooks/useanalytics#example-useanalytics.register).

* **shop**

  **Promise\<ShopAnalytics | null> | ShopAnalytics | null**

  The shop configuration required to publish events to Shopify.

* **subscribe**

  **AnalyticsContextSubscribeForDoc**

  A function to subscribe to analytics events.

#### DefaultCart

```ts
Promise<CartReturn | null> | CartReturn | null
```

#### CartReturn

```ts
Cart & {
  errors?: StorefrontApiErrors;
}
```

#### Cart

* attributes

  The cart's attributes.

  ```ts
  { __typename?: "Attribute"; key?: string; value?: string; }[]
  ```

* buyerIdentity

  The cart's buyer identity.

  ```ts
  CartType['buyerIdentity']
  ```

* checkoutUrl

  The checkout URL for the cart, if the cart has been created in the Storefront API.

  ```ts
  string
  ```

* cost

  The cost for the cart, including the subtotal, total, taxes, and duties.

  ```ts
  CartType['cost']
  ```

* discountCodes

  The discount codes applied to the cart.

  ```ts
  { __typename?: "CartDiscountCode"; applicable?: boolean; code?: string; }[]
  ```

* id

  The cart's ID if it has been created through the Storefront API.

  ```ts
  string
  ```

* lines

  The cart lines.

  ```ts
  Array<CartLine | ComponentizableCartLine>
  ```

* note

  The cart's note.

  ```ts
  string
  ```

* totalQuantity

  The total number of items in the cart, across all lines. If there are no lines, then the value is 0.

  ```ts
  number
  ```

#### StorefrontApiErrors

```ts
JsonGraphQLError[] | undefined
```

#### JsonGraphQLError

* extensions

  Reserved for implementors to extend the protocol however they see fit, and hence there are no additional restrictions on its contents.

  ```ts
  { [key: string]: unknown; }
  ```

* locations

  If an error can be associated to a particular point in the requested GraphQL document, it should contain a list of locations.

  ```ts
  { line: number; column: number; }[]
  ```

* message

  ```ts
  string
  ```

* name

  ```ts
  string
  ```

* path

  If an error can be associated to a particular field in the GraphQL result, it \_must\_ contain an entry with the key \`path\` that details the path of the response field which experienced the error. This allows clients to identify whether a null result is intentional or caused by a runtime error.

  ```ts
  (string | number)[]
  ```

* stack

  ```ts
  string
  ```

#### AnalyticsContextPublishForDoc

```ts
PublishPageView | PublishProductView | PublishCollectionView | PublishCartView | PublishSearchView | PublishCartUpdated | PublishProductAddedToCart | PublishProductRemovedFromCart | PublishCustomEvent
```

#### PublishPageView

* event

  ```ts
  "page_viewed"
  ```

* payload

  ```ts
  PageViewPayload
  ```

returns

```ts
void
```

#### PageViewPayload

```ts
UrlPayload & BasePayload
```

#### UrlPayload

* url

  The url location of when this event is collected.

  ```ts
  string
  ```

#### BasePayload

* customData

  The custom data passed in from the \`AnalyticsProvider\`.

  ```ts
  Record<string, unknown>
  ```

* shop

  The shop data passed in from the \`AnalyticsProvider\`.

  ```ts
  ShopAnalytics | null
  ```

#### ShopAnalytics

* acceptedLanguage

  The language code that is being displayed to user.

  ```ts
  LanguageCode
  ```

* currency

  The currency code that is being displayed to user.

  ```ts
  CurrencyCode
  ```

* hydrogenSubchannelId

  The Hydrogen subchannel ID generated by Oxygen in the environment variable.

  ```ts
  string | '0'
  ```

* shopId

  The shop ID.

  ```ts
  string
  ```

#### CurrencyCode

Supports CurrencyCode from both Storefront API and Customer Account API. The APIs may have different CurrencyCode enums (e.g., Customer Account API added USDC in 2025-10, but Storefront API doesn't support USDC in 2025-10). This union type ensures useMoney works with data from either API.

```ts
StorefrontApiCurrencyCode | CustomerAccountApiCurrencyCode
```

#### PublishProductView

* event

  ```ts
  "product_viewed"
  ```

* payload

  ```ts
  ProductViewPayload
  ```

returns

```ts
void
```

#### ProductViewPayload

```ts
ProductsPayload & UrlPayload & BasePayload
```

#### ProductsPayload

* products

  The products associated with this event.

  ```ts
  Array<ProductPayload & OtherData>
  ```

#### ProductPayload

* id

  The product id.

  ```ts
  string
  ```

* price

  The displaying variant price.

  ```ts
  string
  ```

* productType

  The product type.

  ```ts
  string
  ```

* quantity

  The quantity of product.

  ```ts
  number
  ```

* sku

  The product sku.

  ```ts
  string
  ```

* title

  The product title.

  ```ts
  string
  ```

* variantId

  The displaying variant id.

  ```ts
  string
  ```

* variantTitle

  The displaying variant title.

  ```ts
  string
  ```

* vendor

  The product vendor.

  ```ts
  string
  ```

#### OtherData



#### PublishCollectionView

* event

  ```ts
  "collection_viewed"
  ```

* payload

  ```ts
  CollectionViewPayload
  ```

returns

```ts
void
```

#### CollectionViewPayload

```ts
CollectionPayload & UrlPayload & BasePayload
```

#### CollectionPayload

* collection

  ```ts
  CollectionPayloadDetails
  ```

#### CollectionPayloadDetails

* handle

  The collection handle.

  ```ts
  string
  ```

* id

  The collection id.

  ```ts
  string
  ```

#### PublishCartView

* event

  ```ts
  "cart_viewed"
  ```

* payload

  ```ts
  CartViewPayload
  ```

returns

```ts
void
```

#### CartViewPayload

```ts
CartPayload & UrlPayload & BasePayload
```

#### CartPayload

* cart

  The current cart state.

  ```ts
  CartReturn | null
  ```

* prevCart

  The previous cart state.

  ```ts
  CartReturn | null
  ```

#### PublishSearchView

* event

  ```ts
  "search_viewed"
  ```

* payload

  ```ts
  SearchViewPayload
  ```

returns

```ts
void
```

#### SearchViewPayload

```ts
SearchPayload & UrlPayload & BasePayload
```

#### SearchPayload

* searchResults

  The search results

  ```ts
  any
  ```

* searchTerm

  The search term used for the search results page

  ```ts
  string
  ```

#### PublishCartUpdated

* event

  ```ts
  "cart_updated"
  ```

* payload

  ```ts
  CartUpdatePayload
  ```

returns

```ts
void
```

#### CartUpdatePayload

```ts
CartPayload & BasePayload & OtherData
```

#### PublishProductAddedToCart

* event

  ```ts
  "product_added_to_cart"
  ```

* payload

  ```ts
  CartLineUpdatePayload
  ```

returns

```ts
void
```

#### CartLineUpdatePayload

```ts
CartLinePayload & CartPayload & BasePayload & OtherData
```

#### CartLinePayload

* currentLine

  The current state of the cart line that got updated.

  ```ts
  CartLine | ComponentizableCartLine
  ```

* prevLine

  The previous state of the cart line that got updated.

  ```ts
  CartLine | ComponentizableCartLine
  ```

#### PublishProductRemovedFromCart

* event

  ```ts
  "product_removed_from_cart"
  ```

* payload

  ```ts
  CartLineUpdatePayload
  ```

returns

```ts
void
```

#### PublishCustomEvent

* event

  ```ts
  `custom_${string}`
  ```

* payload

  ```ts
  OtherData
  ```

returns

```ts
void
```

#### AnalyticsContextSubscribeForDoc

```ts
SubscribePageView | SubscribeProductView | SubscribeCollectionView | SubscribeCartView | SubscribeSearchView | SubscribeCartUpdated | SubscribeProductAddedToCart | SubscribeProductRemovedFromCart | SubscribeCustomEvent
```

#### SubscribePageView

* event

  ```ts
  "page_viewed"
  ```

* callback

  ```ts
  (payload: PageViewPayload) => void
  ```

returns

```ts
void
```

#### SubscribeProductView

* event

  ```ts
  "product_viewed"
  ```

* callback

  ```ts
  (payload: ProductViewPayload) => void
  ```

returns

```ts
void
```

#### SubscribeCollectionView

* event

  ```ts
  "collection_viewed"
  ```

* callback

  ```ts
  (payload: CollectionViewPayload) => void
  ```

returns

```ts
void
```

#### SubscribeCartView

* event

  ```ts
  "cart_viewed"
  ```

* callback

  ```ts
  (payload: CartViewPayload) => void
  ```

returns

```ts
void
```

#### SubscribeSearchView

* event

  ```ts
  "search_viewed"
  ```

* callback

  ```ts
  (payload: SearchViewPayload) => void
  ```

returns

```ts
void
```

#### SubscribeCartUpdated

* event

  ```ts
  "cart_updated"
  ```

* callback

  ```ts
  (payload: CartUpdatePayload) => void
  ```

returns

```ts
void
```

#### SubscribeProductAddedToCart

* event

  ```ts
  "product_added_to_cart"
  ```

* callback

  ```ts
  (payload: CartLineUpdatePayload) => void
  ```

returns

```ts
void
```

#### SubscribeProductRemovedFromCart

* event

  ```ts
  "product_removed_from_cart"
  ```

* callback

  ```ts
  (payload: CartLineUpdatePayload) => void
  ```

returns

```ts
void
```

#### SubscribeCustomEvent

* event

  ```ts
  `custom_${string}`
  ```

* callback

  ```ts
  (payload: OtherData) => void
  ```

returns

```ts
void
```

Examples

#### Examples

* #### Example

  ##### JavaScript

  ```js
  import {useAnalytics} from '@shopify/hydrogen';
  import {useEffect} from 'react';

  export function CustomAnalytics() {
    const {subscribe, register} = useAnalytics();
    const {ready} = register('CustomAnalytics'); // unique string identifier

    useEffect(() => {
      // Triggers on every page navigation
      subscribe('page_viewed', (data) => {
        console.log('CustomAnalytics - Page viewed:', data);
      });

      // Triggers on a page that uses `<Analytics.ProductView>`
      subscribe('product_viewed', (data) => {
        console.log('CustomAnalytics - Product viewed:', data);
      });

      // Triggers on a page that uses `<Analytics.CollectionView>`
      subscribe('collection_viewed', (data) => {
        console.log('CustomAnalytics - Collection viewed:', data);
      });

      // Triggers on a page that uses `<Analytics.CartView>`
      subscribe('cart_viewed', (data) => {
        console.log('CustomAnalytics - Cart viewed:', data);
      });

      // Triggers on a page that uses `<Analytics.SearchView>`
      subscribe('search_viewed', (data) => {
        console.log('CustomAnalytics - Search viewed:', data);
      });

      // Triggers on a page that uses `<Analytics.CustomView type="custom_promotion_viewed">`
      subscribe('custom_promotion_viewed', (data) => {
        console.log('CustomAnalytics - Promotion viewed:', data);
      });

      // Triggers when the cart is updated
      subscribe('cart_updated', (data) => {
        console.log('CustomAnalytics - Cart updated:', data);
      });

      // Triggers when an existing cart line increases in quantity or a new cart line is added
      subscribe('product_added_to_cart', (data) => {
        console.log('CustomAnalytics - Product added to cart:', data);
      });

      // Triggers when an existing cart line decreases in quantity or a cart line is removed
      subscribe('product_removed_from_cart', (data) => {
        console.log('CustomAnalytics - Product removed from cart:', data);
      });

      // Register the CustomAnalytics component as ready
      ready();
    }, []);

    return null;
  }
  ```

  ##### TypeScript

  ```ts
  import {
    type PageViewPayload,
    type ProductViewPayload,
    type CollectionViewPayload,
    type CartViewPayload,
    type CartUpdatePayload,
    type CartLineUpdatePayload,
    type SearchViewPayload,
    useAnalytics,
  } from '@shopify/hydrogen';
  import {useEffect} from 'react';

  export function CustomAnalytics() {
    const {subscribe, register} = useAnalytics();
    const {ready} = register('CustomAnalytics'); // unique string identifier

    useEffect(() => {
      // Triggers on every page navigation
      subscribe('page_viewed', (data: PageViewPayload) => {
        console.log('CustomAnalytics - Page viewed:', data);
      });

      // Triggers on a page that uses `<Analytics.ProductView>`
      subscribe('product_viewed', (data: ProductViewPayload) => {
        console.log('CustomAnalytics - Product viewed:', data);
      });

      // Triggers on a page that uses `<Analytics.CollectionView>`
      subscribe('collection_viewed', (data: CollectionViewPayload) => {
        console.log('CustomAnalytics - Collection viewed:', data);
      });

      // Triggers on a page that uses `<Analytics.CartView>`
      subscribe('cart_viewed', (data: CartViewPayload) => {
        console.log('CustomAnalytics - Cart viewed:', data);
      });

      // Triggers on a page that uses `<Analytics.SearchView>`
      subscribe('search_viewed', (data: SearchViewPayload) => {
        console.log('CustomAnalytics - Search viewed:', data);
      });

      // Triggers on a page that uses `<Analytics.CustomView type="custom_promotion_viewed">`
      subscribe('custom_promotion_viewed', (data: unknown) => {
        console.log('CustomAnalytics - Promotion viewed:', data);
      });

      // Triggers when the cart is updated
      subscribe('cart_updated', (data: CartUpdatePayload) => {
        console.log('CustomAnalytics - Cart updated:', data);
      });

      // Triggers when an existing cart line increases in quantity or a new cart line is added
      subscribe('product_added_to_cart', (data: CartLineUpdatePayload) => {
        console.log('CustomAnalytics - Product added to cart:', data);
      });

      // Triggers when an existing cart line decreases in quantity or a cart line is removed
      subscribe('product_removed_from_cart', (data: CartLineUpdatePayload) => {
        console.log('CustomAnalytics - Product removed from cart:', data);
      });

      // Register the CustomAnalytics component as ready
      ready();
    }, []);

    return null;
  }
  ```

***

---



<a id="latest-hooks-usecustomerprivacy"></a>


## useCustomerPrivacy

A hook that loads the [Customer Privacy API](https://shopify.dev/docs/api/customer-privacy). When using Hydrogen's request handler, the Storefront API proxy is automatically detected and used for consent requests.

You can also listen to a `document` event for `shopifyCustomerPrivacyApiLoaded`. It will be emitted when the Customer Privacy API is loaded.

### use​Customer​Privacy(**[props](#usecustomerprivacygeneratedtype-propertydetail-props)**​)

#### Parameters

* **props**

  **CustomerPrivacyApiProps**

  **required**

#### CustomerPrivacyApiProps

* checkoutDomain

  The production shop checkout domain url.

  ```ts
  string
  ```

* country

  Country code for the shop.

  ```ts
  CountryCode
  ```

* locale

  Language code for the shop.

  ```ts
  LanguageCode
  ```

* onReady

  Callback to be call when customer privacy api is ready.

  ```ts
  () => void
  ```

* onVisitorConsentCollected

  Callback to be called when visitor consent is collected.

  ```ts
  (consent: VisitorConsentCollected) => void
  ```

* sameDomainForStorefrontApi

  Whether consent libraries can use same-domain requests to the Storefront API. Defaults to true if the standard route proxy is enabled in Hydrogen server.

  ```ts
  boolean
  ```

* storefrontAccessToken

  The storefront access token for the shop.

  ```ts
  string
  ```

* withPrivacyBanner

  Whether to load the Shopify privacy banner as configured in Shopify admin. Defaults to true.

  ```ts
  boolean
  ```

#### VisitorConsentCollected

* analyticsAllowed

  ```ts
  boolean
  ```

* firstPartyMarketingAllowed

  ```ts
  boolean
  ```

* marketingAllowed

  ```ts
  boolean
  ```

* preferencesAllowed

  ```ts
  boolean
  ```

* saleOfDataAllowed

  ```ts
  boolean
  ```

* thirdPartyMarketingAllowed

  ```ts
  boolean
  ```

Examples

#### Examples

* #### Example

  ##### JavaScript

  ```js
  import {useCustomerPrivacy} from '@shopify/hydrogen';
  import {useEffect} from 'react';

  export function MyComponent() {
    const {customerPrivacy, privacyBanner = null} = useCustomerPrivacy({
      storefrontAccessToken: '12345',
      checkoutDomain: 'checkout.example.com',
      onVisitorConsentCollected: (consent) => {
        console.log('Visitor consent collected:', consent);
      },
    });

    useEffect(() => {
      if (customerPrivacy) {
        // check if user has marketing consent
        console.log(
          'User marketing consent:',
          customerPrivacy.analyticsProcessingAllowed(),
        );

        // or set tracking consent
        customerPrivacy.setTrackingConsent(
          {
            marketing: true,
            analytics: true,
            preferences: true,
            sale_of_data: true,
          },
          (data) => {
            if (data?.error) {
              console.error('Error setting tracking consent:', data.error);
              return;
            }
            console.log('Tracking consent set');
          },
        );
      }

      if (privacyBanner) {
        privacyBanner.loadBanner();

        // or show banner with specific locale and country
        // privacyBanner.loadBanner({locale: 'FR', country: 'CA'});

        // or show consent preferences banner
        // privacyBanner.showPreferences()

        // or show consent preferences banner with specific locale and country
        // privacyBanner.showPreferences({locale: 'FR', country: 'CA'});
      }
    }, [customerPrivacy, privacyBanner]);
  }
  ```

  ##### TypeScript

  ```ts
  import {
    type VisitorConsentCollected,
    useCustomerPrivacy,
  } from '@shopify/hydrogen';
  import {useEffect} from 'react';

  export function MyComponent() {
    const {customerPrivacy, privacyBanner = null} = useCustomerPrivacy({
      storefrontAccessToken: '12345',
      checkoutDomain: 'checkout.example.com',
      onVisitorConsentCollected: (consent: VisitorConsentCollected) => {
        console.log('Visitor consent collected:', consent);
      },
    });

    useEffect(() => {
      if (customerPrivacy) {
        // check if user has marketing consent
        console.log(
          'User marketing consent:',
          customerPrivacy.analyticsProcessingAllowed(),
        );

        // or set tracking consent
        customerPrivacy.setTrackingConsent(
          {
            marketing: true,
            analytics: true,
            preferences: true,
            sale_of_data: true,
          },
          (data) => {
            if (data?.error) {
              console.error('Error setting tracking consent:', data.error);
              return;
            }
            console.log('Tracking consent set');
          },
        );
      }

      if (privacyBanner) {
        privacyBanner.loadBanner();

        // or show banner with specific locale and country
        // privacyBanner.loadBanner({locale: 'FR', country: 'CA'});

        // or show consent preferences banner
        // privacyBanner.showPreferences()

        // or show consent preferences banner with specific locale and country
        // privacyBanner.showPreferences({locale: 'FR', country: 'CA'});
      }
    }, [customerPrivacy, privacyBanner]);
  }
  ```

***

---



<a id="latest-hooks-useloadscript"></a>


## useLoadScript

The `useLoadScript` hook loads an external script tag in the browser. It allows React components to lazy-load third-party dependencies.

##### Props

**`[src: string, options?: LoadScriptOptions]`**

#### LoadScriptOptions

* **attributes**

  **Record\<string, string>**

* **in**

  **'head' | 'body'**

* **module**

  **boolean**

#### LoadScriptOptions

* attributes

  ```ts
  Record<string, string>
  ```

* in

  ```ts
  'head' | 'body'
  ```

* module

  ```ts
  boolean
  ```

Examples

#### Examples

* #### Example code

  ##### JavaScript

  ```jsx
  import React, {useEffect} from 'react';
  import {useLoadScript} from '@shopify/hydrogen';

  export default function Homepage() {
    const scriptStatus = useLoadScript('https://some-cdn.com/some-script.js');

    useEffect(() => {
      if (scriptStatus === 'done') {
        // do something
      }
    }, [scriptStatus]);

    return <div>{scriptStatus === 'done' && <p>Script loaded!</p>}</div>;
  }
  ```

  ##### TypeScript

  ```tsx
  import React, {useEffect} from 'react';
  import {useLoadScript} from '@shopify/hydrogen';

  export default function Homepage() {
    const scriptStatus = useLoadScript('https://some-cdn.com/some-script.js');

    useEffect(() => {
      if (scriptStatus === 'done') {
        // do something
      }
    }, [scriptStatus]);

    return <div>{scriptStatus === 'done' && <p>Script loaded!</p>}</div>;
  }
  ```

***

---



<a id="latest-hooks-usemoney"></a>


## useMoney

The `useMoney` hook takes a [MoneyV2 object](https://shopify.dev/api/storefront/reference/common-objects/moneyv2) and returns a default-formatted string of the amount with the correct currency indicator, along with some of the parts provided by [Intl.NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat).

### use​Money(**[money](#props-propertydetail-money)**​)

The `useMoney` hook takes a [MoneyV2 object from the Storefront API](https://shopify.dev/docs/api/storefront/2026-04/objects/MoneyV2) or a [MoneyV2 object from the Customer Account API](https://shopify.dev/docs/api/customer/2026-04/objects/moneyv2) and returns a default-formatted string of the amount with the correct currency indicator, along with some of the parts provided by [Intl.NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat). Uses `locale` from `ShopifyProvider`  

#### Parameters

* **money**

  **MoneyV2**

  **required**

#### Returns

* **UseMoneyValue**

#### MoneyV2

Supports MoneyV2 from both Storefront API and Customer Account API. The APIs may have different CurrencyCode enums (e.g., Customer Account API added USDC in 2025-10, but Storefront API doesn't support USDC in 2025-10). This union type ensures Money component works with data from either API.

```ts
StorefrontApiMoneyV2 | CustomerAccountApiMoneyV2
```

#### UseMoneyValue

* amount

  The localized amount, without any currency symbols or non-number types from the \`Intl.NumberFormat.formatToParts\` parts.

  ```ts
  string
  ```

* currencyCode

  The currency code from the \`MoneyV2\` object.

  ```ts
  CurrencyCode
  ```

* currencyName

  The name for the currency code, returned by \`Intl.NumberFormat\`.

  ```ts
  string
  ```

* currencyNarrowSymbol

  The currency narrow symbol returned by \`Intl.NumberFormat\`.

  ```ts
  string
  ```

* currencySymbol

  The currency symbol returned by \`Intl.NumberFormat\`.

  ```ts
  string
  ```

* localizedString

  A string returned by \`new Intl.NumberFormat\` for the amount and currency code, using the \`locale\` value in the \[\`LocalizationProvider\` component]\(https://shopify.dev/api/hydrogen/components/localization/localizationprovider).

  ```ts
  string
  ```

* original

  The \`MoneyV2\` object provided as an argument to the hook.

  ```ts
  MoneyV2
  ```

* parts

  All parts returned by \`Intl.NumberFormat.formatToParts\`.

  ```ts
  NumberFormatPart[]
  ```

* withoutTrailingZeros

  A string with trailing zeros removed from the fractional part, if any exist. If there are no trailing zeros, then the fractional part remains. For example, \`$640.00\` turns into \`$640\`. \`$640.42\` remains \`$640.42\`.

  ```ts
  string
  ```

* withoutTrailingZerosAndCurrency

  A string without currency and without trailing zeros removed from the fractional part, if any exist. If there are no trailing zeros, then the fractional part remains. For example, \`$640.00\` turns into \`640\`. \`$640.42\` turns into \`640.42\`.

  ```ts
  string
  ```

#### CurrencyCode

Supports CurrencyCode from both Storefront API and Customer Account API. The APIs may have different CurrencyCode enums (e.g., Customer Account API added USDC in 2025-10, but Storefront API doesn't support USDC in 2025-10). This union type ensures useMoney works with data from either API.

```ts
StorefrontApiCurrencyCode | CustomerAccountApiCurrencyCode
```

Examples

#### Examples

* #### Example code

  ##### JavaScript

  ```jsx
  import {useMoney, ShopifyProvider} from '@shopify/hydrogen';

  export function App() {
    return (
      <ShopifyProvider languageIsoCode="EN" countryIsoCode="US">
        <UsingMoney />
      </ShopifyProvider>
    );
  }

  function UsingMoney() {
    const myMoney = {amount: '100', currencyCode: 'USD'};
    const money = useMoney(myMoney);
    return (
      <>
        <div>Localized money: {money.localizedString}</div>
        <div>Money without trailing zeros: {money.withoutTrailingZeros}</div>
      </>
    );
  }
  ```

  ##### TypeScript

  ```tsx
  import {useMoney, ShopifyProvider} from '@shopify/hydrogen';
  import type {MoneyV2} from '@shopify/hydrogen/storefront-api-types';

  export function App() {
    return (
      // @ts-expect-error intentionally missing the rest of the props
      <ShopifyProvider countryIsoCode="US" languageIsoCode="EN">
        <UsingMoney />
      </ShopifyProvider>
    );
  }

  function UsingMoney() {
    const myMoney = {amount: '100', currencyCode: 'USD'} satisfies MoneyV2;
    const money = useMoney(myMoney);
    return (
      <>
        <div>Localized money: {money.localizedString}</div>
        <div>Money without trailing zeros: {money.withoutTrailingZeros}</div>
      </>
    );
  }
  ```

***

### Related

[- Money](https://shopify.dev/docs/api/hydrogen/2026-04/components/money)

***

---



<a id="latest-hooks-usenonce"></a>


## useNonce

The `useNonce` hook returns the [content security policy](https://shopify.dev/docs/custom-storefronts/hydrogen/content-security-policy) nonce. Use the hook to manually add a nonce to third party scripts. The `Script` component automatically does this for you. Note, the nonce should never be available in the client, and should always return undefined in the browser.

### use​Nonce()

Examples

#### Examples

* #### Example code

  ##### JavaScript

  ```jsx
  import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
  } from 'react-router';
  import {useNonce} from '@shopify/hydrogen';

  export default function App() {
    const nonce = useNonce();

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <Meta />
          <Links />
        </head>
        <body>
          <Outlet />
          <ScrollRestoration nonce={nonce} />
          <Scripts nonce={nonce} />
          <LiveReload nonce={nonce} />
        </body>
      </html>
    );
  }
  ```

  ##### TypeScript

  ```tsx
  import {Links, Meta, Outlet, Scripts, ScrollRestoration} from 'react-router';
  import {useNonce} from '@shopify/hydrogen';

  export default function App() {
    const nonce = useNonce();

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <Meta />
          <Links />
        </head>
        <body>
          <Outlet />
          <ScrollRestoration nonce={nonce} />
          <Scripts nonce={nonce} />
        </body>
      </html>
    );
  }
  ```

***

### Related

[- createContentSecurityPolicy](https://shopify.dev/docs/api/hydrogen/2026-04/utilities/createcontentsecuritypolicy)

[- Script](https://shopify.dev/docs/api/hydrogen/2026-04/components/script)

***

---



<a id="latest-hooks-useoptimisticcart"></a>


## useOptimisticCart

The `useOptimisticCart` takes an existing cart object, processes all pending cart actions, and locally mutates the cart with optimistic state. An optimistic cart makes cart actions immediately render in the browser while actions sync to the server. This increases the perceived performance of the application.

### use​Optimistic​Cart(**[cart](#props-propertydetail-cart)**​)

#### Parameters

* **cart**

  **DefaultCart**

  The cart object from `context.cart.get()` returned by a server loader.

#### Returns

* **OptimisticCart\<DefaultCart = { lines?: { nodes: Array<{id: string; quantity: number; merchandise: {is: string}}>; }; }>**

  A new cart object augmented with optimistic state for `lines` and `totalQuantity`. Each cart line item that is optimistically added includes an `isOptimistic` property. Also if the cart has *any* optimistic state, a root property `isOptimistic` will be set to `true`.

#### DefaultCart

```ts
Promise<CartReturn | null> | CartReturn | null
```

#### CartReturn

```ts
Cart & {
  errors?: StorefrontApiErrors;
}
```

#### Cart

* attributes

  The cart's attributes.

  ```ts
  { __typename?: "Attribute"; key?: string; value?: string; }[]
  ```

* buyerIdentity

  The cart's buyer identity.

  ```ts
  CartType['buyerIdentity']
  ```

* checkoutUrl

  The checkout URL for the cart, if the cart has been created in the Storefront API.

  ```ts
  string
  ```

* cost

  The cost for the cart, including the subtotal, total, taxes, and duties.

  ```ts
  CartType['cost']
  ```

* discountCodes

  The discount codes applied to the cart.

  ```ts
  { __typename?: "CartDiscountCode"; applicable?: boolean; code?: string; }[]
  ```

* id

  The cart's ID if it has been created through the Storefront API.

  ```ts
  string
  ```

* lines

  The cart lines.

  ```ts
  Array<CartLine | ComponentizableCartLine>
  ```

* note

  The cart's note.

  ```ts
  string
  ```

* totalQuantity

  The total number of items in the cart, across all lines. If there are no lines, then the value is 0.

  ```ts
  number
  ```

#### StorefrontApiErrors

```ts
JsonGraphQLError[] | undefined
```

#### JsonGraphQLError

* extensions

  Reserved for implementors to extend the protocol however they see fit, and hence there are no additional restrictions on its contents.

  ```ts
  { [key: string]: unknown; }
  ```

* locations

  If an error can be associated to a particular point in the requested GraphQL document, it should contain a list of locations.

  ```ts
  { line: number; column: number; }[]
  ```

* message

  ```ts
  string
  ```

* name

  ```ts
  string
  ```

* path

  If an error can be associated to a particular field in the GraphQL result, it \_must\_ contain an entry with the key \`path\` that details the path of the response field which experienced the error. This allows clients to identify whether a null result is intentional or caused by a runtime error.

  ```ts
  (string | number)[]
  ```

* stack

  ```ts
  string
  ```

#### OptimisticCart

```ts
T extends undefined | null
  ? // This is the null/undefined case, where the cart has yet to be created.
    // But we still need to provide an optimistic cart object.
    {
      isOptimistic?: boolean;
      lines: {
        nodes: Array<OptimisticCartLine>;
      };
      totalQuantity?: number;
    } & Omit<PartialDeep<CartReturn>, 'lines'>
  : Omit<T, 'lines'> & {
      isOptimistic?: boolean;
      lines: {
        nodes: Array<OptimisticCartLine<T>>;
      };
      totalQuantity?: number;
    }
```

#### OptimisticCartLine

```ts
T extends LikeACart
  ? T['lines']['nodes'][number] & {isOptimistic?: boolean}
  : T & {isOptimistic?: boolean}
```

#### LikeACart

* lines

  ```ts
  { nodes: unknown[]; }
  ```

Examples

#### Examples

* #### Example code

  ##### JavaScript

  ```jsx
  import {Link} from 'react-router';
  import {CartForm, useOptimisticCart} from '@shopify/hydrogen';

  // Root loader returns the cart data
  export async function loader({context}) {
    return {
      cart: context.cart.get(),
    };
  }

  // The cart component renders each line item in the cart.
  export function Cart({cart}) {
    // `useOptimisticCart` adds optimistic line items to the cart.
    // These line items are displayed in the cart until the server responds.
    const optimisticCart = useOptimisticCart(cart);

    if (!optimisticCart?.lines?.nodes?.length) return <p>Nothing in cart</p>;

    return optimisticCart.lines.nodes.map((line) => (
      <div key={line.id}>
        <Link to={`/products${line.merchandise.product.handle}`}>
          {line.merchandise.product.title}
        </Link>
        <CartForm
          route="/cart"
          action={CartForm.ACTIONS.LinesRemove}
          inputs={{lineIds: [line.id]}}
        >
          {/* Each line item has an `isOptimistic` property. Optimistic line items
          should have actions disabled */}
          <button type="submit" disabled={!!line.isOptimistic}>
            Remove
          </button>
        </CartForm>
      </div>
    ));
  }
  ```

  ##### TypeScript

  ```tsx
  import {type LoaderFunctionArgs} from 'react-router';
  import {Link} from 'react-router';
  import {CartForm, useOptimisticCart} from '@shopify/hydrogen';
  import type {Cart} from '@shopify/hydrogen/storefront-api-types';

  // Root loader returns the cart data
  export async function loader({context}: LoaderFunctionArgs) {
    return {
      cart: context.cart.get(),
    };
  }

  // The cart component renders each line item in the cart.
  export function Cart({cart: originalCart}: {cart: Cart}) {
    // `useOptimisticCart` adds optimistic line items to the cart.
    // These line items are displayed in the cart until the server responds.
    const cart = useOptimisticCart(originalCart);
    if (!cart?.lines?.nodes?.length) return <p>Nothing in cart</p>;

    return cart.lines.nodes.map((line) => (
      <div key={line.id}>
        <Link to={`/products${line.merchandise.product.handle}`}>
          {line.merchandise.product.title}
        </Link>
        <CartForm
          route="/cart"
          action={CartForm.ACTIONS.LinesRemove}
          inputs={{lineIds: [line.id]}}
        >
          {/* Each line item has an `isOptimistic` property. Optimistic line items
          should have actions disabled */}
          <button type="submit" disabled={!!line.isOptimistic}>
            Remove
          </button>
        </CartForm>
      </div>
    ));
  }
  ```

***

### Related

[- CartForm](https://shopify.dev/docs/api/hydrogen/2026-04/components/cartform)

***

---



<a id="latest-hooks-useoptimisticdata"></a>


## useOptimisticData

Gets the latest optimistic data with matching optimistic id from actions. Use `OptimisticInput` to accept optimistic data in forms.

### use​Optimistic​Data(**[identifier](#props-propertydetail-identifier)**​)

#### Parameters

* **identifier**

  **string**

  **required**

Examples

#### Examples

* #### Example

  ##### JavaScript

  ```js
  import {CartForm, OptimisticInput, useOptimisticData} from '@shopify/hydrogen';

  export default function Cart({line}) {
    const optimisticId = line.id;
    const optimisticData = useOptimisticData(optimisticId);

    return (
      <div
        style={{
          // Hide the line item if the optimistic data action is remove
          // Do not remove the form from the DOM
          display: optimisticData?.action === 'remove' ? 'none' : 'block',
        }}
      >
        <CartForm
          route="/cart"
          action={CartForm.ACTIONS.LinesRemove}
          inputs={{
            lineIds: [line.id],
          }}
        >
          <button type="submit">Remove</button>
          <OptimisticInput id={optimisticId} data={{action: 'remove'}} />
        </CartForm>
      </div>
    );
  }
  ```

  ##### TypeScript

  ```ts
  import {CartForm, OptimisticInput, useOptimisticData} from '@shopify/hydrogen';
  import {CartLine} from '@shopify/hydrogen-react/storefront-api-types';

  type OptimisticData = {
    action: string;
  };

  export default function Cart({line}: {line: CartLine}) {
    const optimisticId = line.id;
    const optimisticData = useOptimisticData<OptimisticData>(optimisticId);

    return (
      <div
        style={{
          // Hide the line item if the optimistic data action is remove
          // Do not remove the form from the DOM
          display: optimisticData?.action === 'remove' ? 'none' : 'block',
        }}
      >
        <CartForm
          route="/cart"
          action={CartForm.ACTIONS.LinesRemove}
          inputs={{
            lineIds: [line.id],
          }}
        >
          <button type="submit">Remove</button>
          <OptimisticInput id={optimisticId} data={{action: 'remove'}} />
        </CartForm>
      </div>
    );
  }
  ```

***

---



<a id="latest-hooks-useoptimisticvariant"></a>


## useOptimisticVariant

The `useOptimisticVariant` takes an existing product variant, processes a pending navigation to another product variant, and returns the data of the destination variant. This makes switching product options immediate.

### use​Optimistic​Variant(**[selectedVariant](#props-propertydetail-selectedvariant)**​,**[variants](#props-propertydetail-variants)**​)

#### Parameters

* **selectedVariant**

  **SelectedVariant**

  **required**

  The `selectedVariant` field queried with `variantBySelectedOptions`.

* **variants**

  **Variants**

  **required**

  The available product variants for the product. This can be an array of variants, a promise that resolves to an array of variants, or an object with a `product` key that contains the variants.

#### Returns

* **OptimisticVariant\<SelectedVariant = OptimisticVariantInput>**

  A new product object where the `selectedVariant` property is set to the variant that matches the current URL search params. If no variant is found, the original product object is returned. The `isOptimistic` property is set to `true` if the `selectedVariant` has been optimistically changed.

#### OptimisticVariant

```ts
T & {
  isOptimistic?: boolean;
}
```

#### OptimisticVariantInput

* \_\_typename

  ```ts
  'ProductVariant'
  ```

* availableForSale

  Indicates if the product variant is available for sale.

  ```ts
  boolean
  ```

* barcode

  The barcode (for example, ISBN, UPC, or GTIN) associated with the variant.

  ```ts
  Maybe<Scalars['String']['output']>
  ```

* compareAtPrice

  The compare at price of the variant. This can be used to mark a variant as on sale, when \`compareAtPrice\` is higher than \`price\`.

  ```ts
  Maybe<MoneyV2>
  ```

* compareAtPriceV2

  The compare at price of the variant. This can be used to mark a variant as on sale, when \`compareAtPriceV2\` is higher than \`priceV2\`.

  ```ts
  Maybe<MoneyV2>
  ```

* components

  List of bundles components included in the variant considering only fixed bundles.

  ```ts
  ProductVariantComponentConnection
  ```

* currentlyNotInStock

  Whether a product is out of stock but still available for purchase (used for backorders).

  ```ts
  boolean
  ```

* groupedBy

  List of bundles that include this variant considering only fixed bundles.

  ```ts
  ProductVariantConnection
  ```

* id

  A globally-unique ID.

  ```ts
  string
  ```

* image

  Image associated with the product variant. This field falls back to the product image if no image is available.

  ```ts
  Maybe<Image>
  ```

* metafield

  A \[custom field]\(https://shopify.dev/docs/apps/build/custom-data), including its \`namespace\` and \`key\`, that's associated with a Shopify resource for the purposes of adding and storing additional information.

  ```ts
  Maybe<Metafield>
  ```

* metafields

  A list of \[custom fields]\(/docs/apps/build/custom-data) that a merchant associates with a Shopify resource.

  ```ts
  Array<Maybe<Metafield>>
  ```

* price

  The product variant’s price.

  ```ts
  MoneyV2
  ```

* priceV2

  The product variant’s price.

  ```ts
  MoneyV2
  ```

* product

  The product object that the product variant belongs to.

  ```ts
  Product
  ```

* quantityAvailable

  The total sellable quantity of the variant for online sales channels.

  ```ts
  Maybe<Scalars['Int']['output']>
  ```

* quantityPriceBreaks

  A list of quantity breaks for the product variant.

  ```ts
  QuantityPriceBreakConnection
  ```

* quantityRule

  The quantity rule for the product variant in a given context.

  ```ts
  QuantityRule
  ```

* requiresComponents

  Whether a product variant requires components. The default value is \`false\`. If \`true\`, then the product variant can only be purchased as a parent bundle with components.

  ```ts
  boolean
  ```

* requiresShipping

  Whether a customer needs to provide a shipping address when placing an order for the product variant.

  ```ts
  boolean
  ```

* selectedOptions

  List of product options applied to the variant.

  ```ts
  Array<SelectedOption>
  ```

* sellingPlanAllocations

  Represents an association between a variant and a selling plan. Selling plan allocations describe which selling plans are available for each variant, and what their impact is on pricing.

  ```ts
  SellingPlanAllocationConnection
  ```

* shopPayInstallmentsPricing

  The Shop Pay Installments pricing information for the product variant.

  ```ts
  Maybe<ShopPayInstallmentsProductVariantPricing>
  ```

* sku

  The SKU (stock keeping unit) associated with the variant.

  ```ts
  Maybe<Scalars['String']['output']>
  ```

* storeAvailability

  The in-store pickup availability of this variant by location.

  ```ts
  StoreAvailabilityConnection
  ```

* taxable

  Whether tax is charged when the product variant is sold.

  ```ts
  boolean
  ```

* title

  The product variant’s title.

  ```ts
  string
  ```

* unitPrice

  The unit price value for the variant based on the variant's measurement.

  ```ts
  Maybe<MoneyV2>
  ```

* unitPriceMeasurement

  The unit price measurement for the variant.

  ```ts
  Maybe<UnitPriceMeasurement>
  ```

* weight

  The weight of the product variant in the unit system specified with \`weight\_unit\`.

  ```ts
  Maybe<Scalars['Float']['output']>
  ```

* weightUnit

  Unit of measurement for weight.

  ```ts
  WeightUnit
  ```

#### MoneyV2

Supports MoneyV2 from both Storefront API and Customer Account API. The APIs may have different CurrencyCode enums (e.g., Customer Account API added USDC in 2025-10, but Storefront API doesn't support USDC in 2025-10). This union type ensures Money component works with data from either API.

```ts
StorefrontApiMoneyV2 | CustomerAccountApiMoneyV2
```

Examples

#### Examples

* #### Example code

  ##### JavaScript

  ```jsx
  import {useLoaderData} from 'react-router';
  import {useOptimisticVariant} from '@shopify/hydrogen';

  export async function loader({context}) {
    return {
      product: await context.storefront.query('/** product query **/'),
      // Note that variants does not need to be awaited to be used by `useOptimisticVariant`
      variants: context.storefront.query('/** variants query **/'),
    };
  }

  function Product() {
    const {product, variants} = useLoaderData();

    // The selectedVariant optimistically changes during page
    // transitions with one of the preloaded product variants
    const selectedVariant = useOptimisticVariant(
      product.selectedVariant,
      variants,
    );

    // @ts-ignore
    return <ProductMain selectedVariant={selectedVariant} />;
  }
  ```

  ##### TypeScript

  ```tsx
  import {useLoaderData} from 'react-router';
  import {LoaderFunctionArgs} from 'react-router';
  import {useOptimisticVariant} from '@shopify/hydrogen';

  export async function loader({context}: LoaderFunctionArgs) {
    return {
      product: await context.storefront.query('/** product query */'),
      // Note that variants does not need to be awaited to be used by `useOptimisticVariant`
      variants: context.storefront.query('/** variants query */'),
    };
  }

  function Product() {
    const {product, variants} = useLoaderData<typeof loader>();

    // The selectedVariant optimistically changes during page
    // transitions with one of the preloaded product variants
    const selectedVariant = useOptimisticVariant(
      product.selectedVariant,
      variants,
    );

    // @ts-ignore
    return <ProductMain selectedVariant={selectedVariant} />;
  }
  ```

***

### Related

[- VariantSelector](https://shopify.dev/docs/api/hydrogen/2026-04/components/variantselector)

[- useOptimisticCart](https://shopify.dev/docs/api/hydrogen/2026-04/hooks/useoptimisticcart)

***

---



<a id="latest-hooks-useshopifycookies"></a>


## useShopifyCookies

Sets Shopify user and session cookies and refreshes the expiry time. Returns `true` when cookies are ready.

### use​Shopify​Cookies(**[options](#useshopifycookies-propertydetail-options)**​)

Sets the `shopify_y` and `shopify_s` cookies in the browser based on user consent for backward compatibility support.

If `fetchTrackingValues` is true, it makes a request to Storefront API to fetch or refresh Shopiy analytics and marketing cookies and tracking values. Generally speaking, this should only be needed if you're not using Hydrogen's built-in analytics components and hooks that already handle this automatically. For example, set it to `true` if you are using `hydrogen-react` only with a different framework and still need to make a same-domain request to Storefront API to set cookies.

If `ignoreDeprecatedCookies` is true, it skips setting the deprecated cookies entirely. Useful when you only want to use the newer tracking values and not rely on the deprecated ones.

#### Parameters

* **options**

  **UseShopifyCookiesOptions**

#### Returns**boolean**

* `true` when cookies are set and ready.

#### UseShopifyCookiesOptions

```ts
CoreShopifyCookiesOptions & {
  /**
   * If set to `false`, Shopify cookies will be removed.
   * If set to `true`, Shopify unique user token cookie will have cookie expiry of 1 year.
   * Defaults to false.
   **/
  hasUserConsent?: boolean;
  /**
   * The domain scope of the cookie. Defaults to empty string.
   **/
  domain?: string;
  /**
   * The checkout domain of the shop. Defaults to empty string. If set, the cookie domain will check if it can be set with the checkout domain.
   */
  checkoutDomain?: string;
  /**
   * If set to `true`, it skips modifying the deprecated shopify_y and shopify_s cookies.
   */
  ignoreDeprecatedCookies?: boolean;
}
```

#### CoreShopifyCookiesOptions

* checkoutDomain

  ```ts
  string
  ```

* fetchTrackingValues

  ```ts
  boolean
  ```

* storefrontAccessToken

  ```ts
  string
  ```

Examples

#### Examples

* #### Example code

  ##### JavaScript

  ```jsx
  import * as React from 'react';
  import {useShopifyCookies} from '@shopify/hydrogen';

  export default function App({Component, pageProps}) {
    // Returns true when cookies are ready
    const cookiesReady = useShopifyCookies({hasUserConsent: true});

    if (!cookiesReady) {
      return null;
    }

    return <Component {...pageProps} />;
  }
  ```

  ##### TypeScript

  ```tsx
  import * as React from 'react';
  import {useShopifyCookies} from '@shopify/hydrogen';

  export default function App({
    Component,
    pageProps,
  }: {
    Component: React.ComponentType;
    pageProps: object;
  }) {
    // Returns true when cookies are ready
    const cookiesReady = useShopifyCookies({hasUserConsent: true});

    if (!cookiesReady) {
      return null;
    }

    return <Component {...pageProps} />;
  }
  ```

***

### Related

[- sendShopifyAnalytics](https://shopify.dev/docs/api/hydrogen/2026-04/utilities/sendshopifyanalytics)

[- getClientBrowserParameters](https://shopify.dev/docs/api/hydrogen/2026-04/utilities/getclientbrowserparameters)

[- getTrackingValues](https://shopify.dev/docs/api/hydrogen/2026-04/utilities/gettrackingvalues)

***

---



<a id="latest-utilities-caching-cachecustom"></a>


## CacheCustom

This allows you to create your own caching strategy, using any of the options available in a `CachingStrategy` object.

Learn more about [data fetching in Hydrogen](https://shopify.dev/docs/custom-storefronts/hydrogen/data-fetching/fetch-data).

### cache​Custom(**[overrideOptions](#arguments-propertydetail-overrideoptions)**​)

#### Parameters

* **overrideOptions**

  **AllCacheOptions**

  **required**

#### Returns

* **AllCacheOptions**

#### AllCacheOptions

Override options for a cache strategy.

* maxAge

  The maximum amount of time in seconds that a resource will be considered fresh. See \`max-age\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#:\~:text=Response%20Directives-,max%2Dage,-The%20max%2Dage).

  ```ts
  number
  ```

* mode

  The caching mode, generally \`public\`, \`private\`, or \`no-store\`.

  ```ts
  string
  ```

* sMaxAge

  Similar to \`maxAge\` but specific to shared caches. See \`s-maxage\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#s-maxage).

  ```ts
  number
  ```

* staleIfError

  Indicate that the cache should serve the stale response if an error occurs while revalidating the cache. See \`stale-if-error\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-if-error).

  ```ts
  number
  ```

* staleWhileRevalidate

  Indicate that the cache should serve the stale response in the background while revalidating the cache. See \`stale-while-revalidate\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-while-revalidate).

  ```ts
  number
  ```

Examples

#### Examples

* #### Example code

  ##### JavaScript

  ```js
  import {CacheCustom} from '@shopify/hydrogen';

  export async function loader({context}) {
    const data = await context.storefront.query(
      `#grahpql
        {
          shop {
            name
            description
          }
        }
      `,
      {
        cache: CacheCustom({
          maxAge: 60 * 60 * 24 * 365,
          staleWhileRevalidate: 60 * 60 * 24 * 7,
        }),
      },
    );

    return data;
  }
  ```

  ##### TypeScript

  ```ts
  import {type LoaderFunctionArgs} from 'react-router';
  import {CacheCustom} from '@shopify/hydrogen';

  export async function loader({context}: LoaderFunctionArgs) {
    const data = await context.storefront.query(
      `#grahpql
        {
          shop {
            name
            description
          }
        }
      `,
      {
        cache: CacheCustom({
          maxAge: 60 * 60 * 24 * 365,
          staleWhileRevalidate: 60 * 60 * 24 * 7,
        }),
      },
    );

    return data;
  }
  ```

***

### Related

[- createStorefrontClient](https://shopify.dev/docs/api/hydrogen/2026-04/utilities/createstorefrontclient)

[- CacheNone](https://shopify.dev/docs/api/hydrogen/2026-04/utilities/caching/cachenone)

[- CacheShort](https://shopify.dev/docs/api/hydrogen/2026-04/utilities/caching/cacheshort)

[- CacheLong](https://shopify.dev/docs/api/hydrogen/2026-04/utilities/caching/cachelong)

***

---



<a id="latest-utilities-caching-cachelong"></a>


## CacheLong

The `CacheLong` strategy instructs caches to store data for 1 hour, and `staleWhileRevalidate` data for an additional 23 hours. Note: these time values are subject to change.

Learn more about [data fetching in Hydrogen](https://shopify.dev/docs/custom-storefronts/hydrogen/data-fetching/fetch-data).

### cache​Long(**[overrideOptions](#arguments-propertydetail-overrideoptions)**​)

#### Parameters

* **overrideOptions**

  **AllCacheOptions**

#### Returns

* **AllCacheOptions**

#### AllCacheOptions

Override options for a cache strategy.

* maxAge

  The maximum amount of time in seconds that a resource will be considered fresh. See \`max-age\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#:\~:text=Response%20Directives-,max%2Dage,-The%20max%2Dage).

  ```ts
  number
  ```

* mode

  The caching mode, generally \`public\`, \`private\`, or \`no-store\`.

  ```ts
  string
  ```

* sMaxAge

  Similar to \`maxAge\` but specific to shared caches. See \`s-maxage\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#s-maxage).

  ```ts
  number
  ```

* staleIfError

  Indicate that the cache should serve the stale response if an error occurs while revalidating the cache. See \`stale-if-error\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-if-error).

  ```ts
  number
  ```

* staleWhileRevalidate

  Indicate that the cache should serve the stale response in the background while revalidating the cache. See \`stale-while-revalidate\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-while-revalidate).

  ```ts
  number
  ```

Examples

#### Examples

* #### Example code

  ##### JavaScript

  ```js
  import {CacheLong} from '@shopify/hydrogen';

  export async function loader({context}) {
    const data = await context.storefront.query(
      `#grahpql
        {
          shop {
            name
            description
          }
        }
      `,
      {
        cache: CacheLong(),
      },
    );

    return data;
  }
  ```

  ##### TypeScript

  ```ts
  import {type LoaderFunctionArgs} from 'react-router';
  import {CacheLong} from '@shopify/hydrogen';

  export async function loader({context}: LoaderFunctionArgs) {
    const data = await context.storefront.query(
      `#grahpql
        {
          shop {
            name
            description
          }
        }
      `,
      {
        cache: CacheLong(),
      },
    );

    return data;
  }
  ```

***

### Related

[- createStorefrontClient](https://shopify.dev/docs/api/hydrogen/2026-04/utilities/createstorefrontclient)

[- CacheNone](https://shopify.dev/docs/api/hydrogen/2026-04/utilities/caching/cachenone)

[- CacheShort](https://shopify.dev/docs/api/hydrogen/2026-04/utilities/caching/cacheshort)

[- CacheCustom](https://shopify.dev/docs/api/hydrogen/2026-04/utilities/caching/cachecustom)

***

---



<a id="latest-utilities-caching-cachenone"></a>


## CacheNone

The CacheNone() strategy instructs caches not to store any data. The function accepts no arguments.

Learn more about [data fetching in Hydrogen](https://shopify.dev/docs/custom-storefronts/hydrogen/data-fetching/fetch-data).

### cache​None()

#### Returns

* **NoStoreStrategy**

#### NoStoreStrategy

* mode

  ```ts
  string
  ```

Examples

#### Examples

* #### Example code

  ##### JavaScript

  ```js
  import {CacheNone} from '@shopify/hydrogen';

  export async function loader({context}) {
    const data = await context.storefront.query(
      `#grahpql
        {
          shop {
            name
            description
          }
        }
      `,
      {
        cache: CacheNone(),
      },
    );

    return data;
  }
  ```

  ##### TypeScript

  ```ts
  import {type LoaderFunctionArgs} from 'react-router';
  import {CacheNone} from '@shopify/hydrogen';

  export async function loader({context}: LoaderFunctionArgs) {
    const data = await context.storefront.query(
      `#grahpql
        {
          shop {
            name
            description
          }
        }
      `,
      {
        cache: CacheNone(),
      },
    );

    return data;
  }
  ```

***

### Related

[- createStorefrontClient](https://shopify.dev/docs/api/hydrogen/2026-04/utilities/createstorefrontclient)

[- CacheShort](https://shopify.dev/docs/api/hydrogen/2026-04/utilities/caching/cacheshort)

[- CacheLong](https://shopify.dev/docs/api/hydrogen/2026-04/utilities/caching/cachelong)

[- CacheCustom](https://shopify.dev/docs/api/hydrogen/2026-04/utilities/caching/cachecustom)

***

---



<a id="latest-utilities-caching-cacheshort"></a>


## CacheShort

The `CacheShort` strategy instructs caches to store data for 1 second, and `staleWhileRevalidate` data for an additional 9 seconds. Note: these time values are subject to change.

Learn more about [data fetching in Hydrogen](https://shopify.dev/docs/custom-storefronts/hydrogen/data-fetching/fetch-data).

### cache​Short(**[overrideOptions](#arguments-propertydetail-overrideoptions)**​)

#### Parameters

* **overrideOptions**

  **AllCacheOptions**

#### Returns

* **AllCacheOptions**

#### AllCacheOptions

Override options for a cache strategy.

* maxAge

  The maximum amount of time in seconds that a resource will be considered fresh. See \`max-age\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#:\~:text=Response%20Directives-,max%2Dage,-The%20max%2Dage).

  ```ts
  number
  ```

* mode

  The caching mode, generally \`public\`, \`private\`, or \`no-store\`.

  ```ts
  string
  ```

* sMaxAge

  Similar to \`maxAge\` but specific to shared caches. See \`s-maxage\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#s-maxage).

  ```ts
  number
  ```

* staleIfError

  Indicate that the cache should serve the stale response if an error occurs while revalidating the cache. See \`stale-if-error\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-if-error).

  ```ts
  number
  ```

* staleWhileRevalidate

  Indicate that the cache should serve the stale response in the background while revalidating the cache. See \`stale-while-revalidate\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-while-revalidate).

  ```ts
  number
  ```

Examples

#### Examples

* #### Example code

  ##### JavaScript

  ```js
  import {CacheShort} from '@shopify/hydrogen';

  export async function loader({context}) {
    const data = await context.storefront.query(
      `#grahpql
        {
          shop {
            name
            description
          }
        }
      `,
      {
        cache: CacheShort(),
      },
    );

    return data;
  }
  ```

  ##### TypeScript

  ```ts
  import {type LoaderFunctionArgs} from 'react-router';
  import {CacheShort} from '@shopify/hydrogen';

  export async function loader({context}: LoaderFunctionArgs) {
    const data = await context.storefront.query(
      `#grahpql
        {
          shop {
            name
            description
          }
        }
      `,
      {
        cache: CacheShort(),
      },
    );

    return data;
  }
  ```

***

### Related

[- createStorefrontClient](https://shopify.dev/docs/api/hydrogen/2026-04/utilities/createstorefrontclient)

[- CacheNone](https://shopify.dev/docs/api/hydrogen/2026-04/utilities/caching/cachenone)

[- CacheLong](https://shopify.dev/docs/api/hydrogen/2026-04/utilities/caching/cachelong)

[- CacheCustom](https://shopify.dev/docs/api/hydrogen/2026-04/utilities/caching/cachecustom)

***

---



<a id="latest-utilities-caching-createwithcache"></a>


## createWithCache

Creates utility functions to store data in cache with stale-while-revalidate support.

* Use `withCache.fetch` to simply fetch data from a third-party API. Fetches data from a URL and caches the result according to the strategy provided. When the response is not successful (e.g. status code >= 400), the caching is skipped automatically and the returned `data` is `null`. You can also prevent caching by using the `shouldCacheResponse` option and returning `false` from the function you pass in. For example, you might want to fetch data from a third-party GraphQL API but not cache the result if the GraphQL response body contains errors.
* Use the more advanced `withCache.run` to execute any asynchronous operation. Utility function that executes asynchronous operations and caches the result according to the strategy provided. Use this to do any type of asynchronous operation where `withCache.fetch` is insufficient. For example, when making multiple calls to a third-party API where the result of all of them needs to be cached under the same cache key. Whatever data is returned from the `fn` will be cached according to the strategy provided.

**Note:**

To prevent caching the result you must throw an error. Otherwise, the result will be cached. For example, if you call `fetch` but the response is not successful (e.g. status code >= 400), you should throw an error. Otherwise, the response will be cached.

### create​With​Cache(**[cacheOptions](#arguments-propertydetail-cacheoptions)**​)

#### Parameters

* **cacheOptions**

  **CreateWithCacheOptions**

  **required**

#### Returns

* **WithCache**

#### CreateWithCacheOptions

* cache

  An instance that implements the \[Cache API]\(https://developer.mozilla.org/en-US/docs/Web/API/Cache)

  ```ts
  Cache
  ```

* request

  The \`request\` object is used by the Subrequest profiler, and to access certain headers for debugging

  ```ts
  CrossRuntimeRequest
  ```

* waitUntil

  The \`waitUntil\` function is used to keep the current request/response lifecycle alive even after a response has been sent. It should be provided by your platform.

  ```ts
  WaitUntil
  ```

#### CrossRuntimeRequest

* headers

  ```ts
  {
      get?: (key: string) => string | null | undefined;
      [key: string]: any;
    }
  ```

* method

  ```ts
  string
  ```

* url

  ```ts
  string
  ```

#### WithCache

* fetch

  ```ts
  <T>(url: string, requestInit: RequestInit, options: WithCacheFetchOptions<T>) => Promise<{ data: T; response: Response; }>
  ```

* run

  ```ts
  <T>(options: WithCacheRunOptions<T>, fn: ({ addDebugData }: CacheActionFunctionParam) => T | Promise<T>) => Promise<T>
  ```

#### WithCacheFetchOptions

* cacheKey

  The cache key for this fetch

  ```ts
  CacheKey
  ```

* cacheStrategy

  Use the \`CachingStrategy\` to define a custom caching mechanism for your data. Or use one of the pre-defined caching strategies: \[\`CacheNone\`]\(/docs/api/hydrogen/utilities/cachenone), \[\`CacheShort\`]\(/docs/api/hydrogen/utilities/cacheshort), \[\`CacheLong\`]\(/docs/api/hydrogen/utilities/cachelong).

  ```ts
  CachingStrategy
  ```

* displayName

  ```ts
  string
  ```

* shouldCacheResponse

  Useful to avoid e.g. caching a successful response that contains an error in the body

  ```ts
  (body: T, response: Response) => boolean
  ```

#### CacheKey

The cache key is used to uniquely identify a value in the cache.

```ts
string | readonly unknown[]
```

#### CachingStrategy

Use the \`CachingStrategy\` to define a custom caching mechanism for your data. Or use one of the pre-defined caching strategies: CacheNone, CacheShort, CacheLong.

* maxAge

  The maximum amount of time in seconds that a resource will be considered fresh. See \`max-age\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#:\~:text=Response%20Directives-,max%2Dage,-The%20max%2Dage).

  ```ts
  number
  ```

* mode

  The caching mode, generally \`public\`, \`private\`, or \`no-store\`.

  ```ts
  string
  ```

* sMaxAge

  Similar to \`maxAge\` but specific to shared caches. See \`s-maxage\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#s-maxage).

  ```ts
  number
  ```

* staleIfError

  Indicate that the cache should serve the stale response if an error occurs while revalidating the cache. See \`stale-if-error\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-if-error).

  ```ts
  number
  ```

* staleWhileRevalidate

  Indicate that the cache should serve the stale response in the background while revalidating the cache. See \`stale-while-revalidate\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-while-revalidate).

  ```ts
  number
  ```

#### WithCacheRunOptions

* cacheKey

  The cache key for this run

  ```ts
  CacheKey
  ```

* cacheStrategy

  Use the \`CachingStrategy\` to define a custom caching mechanism for your data. Or use one of the pre-defined caching strategies: \[\`CacheNone\`]\(/docs/api/hydrogen/utilities/cachenone), \[\`CacheShort\`]\(/docs/api/hydrogen/utilities/cacheshort), \[\`CacheLong\`]\(/docs/api/hydrogen/utilities/cachelong).

  ```ts
  CachingStrategy
  ```

* shouldCacheResult

  Useful to avoid accidentally caching bad results

  ```ts
  (value: T) => boolean
  ```

#### CacheActionFunctionParam

* addDebugData

  ```ts
  (info: AddDebugDataParam) => void
  ```

#### AddDebugDataParam

* displayName

  ```ts
  string
  ```

* response

  ```ts
  Pick<Response, 'url' | 'status' | 'statusText' | 'headers'>
  ```

Examples

#### Examples

* #### Example code

  ##### JavaScript

  ```js
  // In your app's `server.ts` file:
  import * as reactRouterBuild from 'virtual:react-router/server-build';
  import {
    createWithCache,
    CacheLong,
    createRequestHandler,
  } from '@shopify/hydrogen';

  export default {
    async fetch(request, env, executionContext) {
      const cache = await caches.open('my-cms');
      const withCache = createWithCache({
        cache,
        waitUntil: executionContext.waitUntil.bind(executionContext),
        request,
      });

      // 1. Create a custom utility to query a third-party API:
      const fetchMyCMS = async (query) => {
        const {data, response} = await withCache.fetch(
          'https://my-cms.com/api',
          {
            method: 'POST',
            body: query,
            headers: {Authorization: 'Bearer 123'},
          },
          {
            // Optionally, specify a cache strategy.
            // Default is CacheShort().
            cacheStrategy: CacheLong(),
            // Cache if there are no data errors or a specific data that make this result not suited for caching
            shouldCacheResponse: (result) =>
              !(result?.errors || result?.isLoggedIn),
            // Optionally, add extra information to show
            // in the Subrequest Profiler utility.
            displayName: 'My CMS query',
          },
        );

        // Access the response properties:
        console.log(data, response.headers);

        return data;
      };

      // 2. Or Create a more advanced utility to query multiple APIs under the same cache key:
      const fetchMultipleCMS = (options) => {
        // Prefix the cache key and make it unique based on arguments.
        return withCache.run(
          {
            // Define a cache key that is unique to this query
            cacheKey: ['my-cms-composite', options.id, options.handle],
            // Optionally, specify a cache strategy.
            // Default is CacheShort().
            cacheStrategy: CacheLong(),
            // Cache if there are no data errors or a specific data that make this result not suited for caching
            shouldCacheResponse: (result) =>
              !(result?.errors || result?.isLoggedIn),
          },
          async (params) => {
            // Run multiple subrequests in parallel, or any other async operations.
            const [response1, response2] = await Promise.all([
              fetch('https://my-cms-1.com/api', {
                method: 'POST',
                body: JSON.stringify({id: options.id}),
              }),
              fetch('https://my-cms-2.com/api', {
                method: 'POST',
                body: JSON.stringify({handle: options.handle}),
              }),
            ]);

            // Throw if any response is unsuccessful.
            // This is important to prevent the results from being cached.
            if (!response1.ok || !response2.ok) {
              throw new Error('Failed to fetch data');
            }

            const [data1, data2] = await Promise.all([
              response1.json(),
              response2.json(),
            ]);

            // Validate data and throw to avoid caching errors.
            if (data1.errors || data2.errors) {
              throw new Error('API errors');
            }

            // Optionally, add extra information to show
            // in the Subrequest Profiler utility.
            params.addDebugData({displayName: 'My CMS query'});

            // Compose the result as needed.
            return {
              ...data1,
              ...data2,
              extra1: response1.headers.get('X-Extra'),
              extra2: response2.headers.get('X-Extra'),
            };
          },
        );
      };

      const handleRequest = createRequestHandler({
        build: reactRouterBuild,
        mode: process.env.NODE_ENV,
        getLoadContext: () => ({
          // Make sure to update env.d.ts to
          // include these properties in `AppLoadContext`.
          fetchMyCMS,
          fetchMultipleCMS,
        }),
      });

      return handleRequest(request);
    },
  };
  ```

  ##### TypeScript

  ```ts
  // In your app's `server.ts` file:
  import * as reactRouterBuild from 'virtual:react-router/server-build';
  import {
    createWithCache,
    CacheLong,
    createRequestHandler,
  } from '@shopify/hydrogen';

  export default {
    async fetch(
      request: Request,
      env: Record<string, string>,
      executionContext: ExecutionContext,
    ) {
      const cache = await caches.open('my-cms');
      const withCache = createWithCache({
        cache,
        waitUntil: executionContext.waitUntil.bind(executionContext),
        request,
      });

      type ExpectedResponse = {
        content: unknown;
        isLoggedIn: boolean;
        errors?: string;
      };

      type MergedResponse = {
        content: unknown;
        isLoggedIn: boolean;
        errors?: string;
        extra1: string | null;
        extra2: string | null;
      };

      // 1. Create a custom utility to query a third-party API:
      const fetchMyCMS = async (query: string) => {
        const {data, response} = await withCache.fetch<ExpectedResponse>(
          'https://my-cms.com/api',
          {
            method: 'POST',
            body: query,
            headers: {Authorization: 'Bearer 123'},
          },
          {
            // Optionally, specify a cache strategy.
            // Default is CacheShort().
            cacheStrategy: CacheLong(),
            // Cache if there are no data errors or a specific data that make this result not suited for caching
            shouldCacheResponse: (result) =>
              !(result?.errors || result?.isLoggedIn),
            // Optionally, add extra information to show
            // in the Subrequest Profiler utility.
            displayName: 'My CMS query',
          },
        );

        // Access the response properties:
        console.log(data, response.headers);

        return data;
      };

      // 2. Or Create a more advanced utility to query multiple APIs under the same cache key:
      const fetchMultipleCMS = (options: {id: string; handle: string}) => {
        // Prefix the cache key and make it unique based on arguments.
        return withCache.run(
          {
            // Define a cache key that is unique to this query
            cacheKey: ['my-cms-composite', options.id, options.handle],
            // Optionally, specify a cache strategy.
            // Default is CacheShort().
            cacheStrategy: CacheLong(),
            // Cache if there are no data errors or a specific data that make this result not suited for caching
            shouldCacheResult: (result: MergedResponse) =>
              !(result?.errors || result?.isLoggedIn),
          },
          async (params) => {
            // Run multiple subrequests in parallel, or any other async operations.
            const [response1, response2] = await Promise.all([
              fetch('https://my-cms-1.com/api', {
                method: 'POST',
                body: JSON.stringify({id: options.id}),
              }),
              fetch('https://my-cms-2.com/api', {
                method: 'POST',
                body: JSON.stringify({handle: options.handle}),
              }),
            ]);

            // Throw if any response is unsuccessful.
            // This is important to prevent the results from being cached.
            if (!response1.ok || !response2.ok) {
              throw new Error('Failed to fetch data');
            }

            const [data1, data2] = (await Promise.all([
              response1.json(),
              response2.json(),
            ])) as [ExpectedResponse, ExpectedResponse];

            // Validate data and throw to avoid caching errors.
            if (data1.errors || data2.errors) {
              throw new Error('API errors');
            }

            // Optionally, add extra information to show
            // in the Subrequest Profiler utility.
            params.addDebugData({displayName: 'My CMS query'});

            // Compose the result as needed.
            return {
              ...data1,
              ...data2,
              extra1: response1.headers.get('X-Extra'),
              extra2: response2.headers.get('X-Extra'),
            } as MergedResponse;
          },
        );
      };

      const handleRequest = createRequestHandler({
        build: reactRouterBuild,
        mode: process.env.NODE_ENV,
        getLoadContext: () => ({
          // Make sure to update env.d.ts to
          // include these properties in `AppLoadContext`.
          fetchMyCMS,
          fetchMultipleCMS,
        }),
      });

      return handleRequest(request);
    },
  };
  ```

***

---



<a id="latest-utilities-caching-generatecachecontrolheader"></a>


## generateCacheControlHeader

This utility function accepts a `CachingStrategy` object and returns a string with the corresponding `cache-control` header.

Learn more about [data fetching in Hydrogen](https://shopify.dev/docs/custom-storefronts/hydrogen/data-fetching/fetch-data).

### generate​Cache​Control​Header(**[cacheOptions](#arguments-propertydetail-cacheoptions)**​)

#### Parameters

* **cacheOptions**

  **AllCacheOptions**

  **required**

#### Returns**string**

#### AllCacheOptions

Override options for a cache strategy.

* maxAge

  The maximum amount of time in seconds that a resource will be considered fresh. See \`max-age\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#:\~:text=Response%20Directives-,max%2Dage,-The%20max%2Dage).

  ```ts
  number
  ```

* mode

  The caching mode, generally \`public\`, \`private\`, or \`no-store\`.

  ```ts
  string
  ```

* sMaxAge

  Similar to \`maxAge\` but specific to shared caches. See \`s-maxage\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#s-maxage).

  ```ts
  number
  ```

* staleIfError

  Indicate that the cache should serve the stale response if an error occurs while revalidating the cache. See \`stale-if-error\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-if-error).

  ```ts
  number
  ```

* staleWhileRevalidate

  Indicate that the cache should serve the stale response in the background while revalidating the cache. See \`stale-while-revalidate\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-while-revalidate).

  ```ts
  number
  ```

Examples

#### Examples

* #### Example code

  ##### JavaScript

  ```js
  import {data} from 'react-router';
  import {generateCacheControlHeader, CacheShort} from '@shopify/hydrogen';

  export async function loader() {
    return data(
      {some: 'data'},
      {
        headers: {
          'cache-control': generateCacheControlHeader(CacheShort()),
        },
      },
    );
  }
  ```

  ##### TypeScript

  ```ts
  import {data} from 'react-router';
  import {generateCacheControlHeader, CacheShort} from '@shopify/hydrogen';

  export async function loader() {
    return data(
      {some: 'data'},
      {
        headers: {
          'cache-control': generateCacheControlHeader(CacheShort()),
        },
      },
    );
  }
  ```

***

---



<a id="latest-utilities-caching-inmemorycache"></a>


## InMemoryCache

**Caution:**

This utility should only be used when deploying Hydrogen to a Node.js environment. It should *not* be used when deploying Hydrogen to Oxygen.

If you are deploying Hydrogen to a Node.js environment, you can use this limited implementation of an in-memory cache. It only supports the `cache-control` header. It does NOT support `age` or `expires` headers.

Learn more about [data fetching in Hydrogen](https://shopify.dev/docs/custom-storefronts/hydrogen/data-fetching/fetch-data).

Examples

#### Examples

* ####

  ##### JavaScript

  ```js
  const {createRequestHandler} = require('react-router');
  const path = require('path');
  const {installGlobals} = require('react-router');
  const express = require('express');
  const {createStorefrontClient, InMemoryCache} = require('@shopify/hydrogen');

  installGlobals();

  const app = express();

  const BUILD_DIR = path.join(process.cwd(), 'build');

  app.use(
    '/build',
    express.static('public/build', {immutable: true, maxAge: '1y'}),
  );

  app.all('*', async (req) => {
    const {storefront} = createStorefrontClient({
      cache: new InMemoryCache(),
      // `waitUntil` is only needed on worker environments. For Express/Node, it isn't applicable
      waitUntil: null,
      i18n: {language: 'EN', country: 'US'},
      publicStorefrontToken: process.env.PUBLIC_STOREFRONT_API_TOKEN,
      privateStorefrontToken: process.env.PRIVATE_STOREFRONT_API_TOKEN,
      storeDomain: process.env.PUBLIC_STORE_DOMAIN,
      storefrontId: process.env.PUBLIC_STOREFRONT_ID,
      storefrontHeaders: {
        cookie: req.get('cookie'),
      },
    });

    return createRequestHandler({
      build: require(BUILD_DIR),
      mode: process.env.NODE_ENV,
      getLoadContext: () => ({storefront}),
    });
  });

  const port = process.env.PORT || 3000;

  app.listen(port, () => {
    console.log(`Express server listening on port ${port}`);
  });
  ```

***

### Related

[- createStorefrontClient](https://shopify.dev/docs/api/hydrogen/2026-04/utilities/createstorefrontclient)

***

---



<a id="latest-utilities-cart-cartattributesupdatedefault"></a>


## cartAttributesUpdateDefault

Creates a function that accepts an array of [AttributeInput](https://shopify.dev/docs/api/storefront/2026-01/input-objects/AttributeInput) and updates attributes to a cart

### cart​Attributes​Update​Default(**[options](#cartattributesupdatedefault-propertydetail-options)**​)

#### Parameters

* **options**

  **CartQueryOptions**

  **required**

#### Returns

* **CartAttributesUpdateFunction**

#### CartQueryOptions

* cartFragment

  The cart fragment to override the one used in this query.

  ```ts
  string
  ```

* customerAccount

  The customer account instance created by \[\`createCustomerAccount\`]\(docs/api/hydrogen/latest/customer/createcustomeraccount).

  ```ts
  CustomerAccount
  ```

* getCartId

  A function that returns the cart ID.

  ```ts
  () => string
  ```

* storefront

  The storefront client instance created by \[\`createStorefrontClient\`]\(docs/api/hydrogen/latest/utilities/createstorefrontclient).

  ```ts
  Storefront
  ```

#### CustomerAccount

* authorize

  On successful login, the customer redirects back to your app. This function validates the OAuth response and exchanges the authorization code for an access token and refresh token. It also persists the tokens on your session. This function should be called and returned from the Remix loader configured as the redirect URI within the Customer Account API settings in admin.

  ```ts
  () => Promise<Response>
  ```

* getAccessToken

  Returns CustomerAccessToken if the customer is logged in. It also run a expiry check and does a token refresh if needed.

  ```ts
  () => Promise<string>
  ```

* getApiUrl

  Creates the fully-qualified URL to your store's GraphQL endpoint.

  ```ts
  () => string
  ```

* getBuyer

  Get buyer token and company location id from session.

  ```ts
  () => Promise<Partial<BuyerInput>>
  ```

* handleAuthStatus

  Check for a not logged in customer and redirect customer to login page. The redirect can be overwritten with \`customAuthStatusHandler\` option.

  ```ts
  () => Promise<void>
  ```

* i18n

  The i18n configuration for Customer Account API

  ```ts
  { language: LanguageCode; }
  ```

* isLoggedIn

  Returns if the customer is logged in. It also checks if the access token is expired and refreshes it if needed.

  ```ts
  () => Promise<boolean>
  ```

* login

  Start the OAuth login flow. This function should be called and returned from a Remix loader. It redirects the customer to a Shopify login domain. It also defined the final path the customer lands on at the end of the oAuth flow with the value of the \`return\_to\` query param. (This is automatically setup unless \`customAuthStatusHandler\` option is in use)

  ```ts
  (options?: LoginOptions) => Promise<Response>
  ```

* logout

  Logout the customer by clearing the session and redirecting to the login domain. It should be called and returned from a Remix action. The path app should redirect to after logout can be setup in Customer Account API settings in admin.

  ```ts
  (options?: LogoutOptions) => Promise<Response>
  ```

* mutate

  Execute a GraphQL mutation against the Customer Account API. This method execute \`handleAuthStatus()\` ahead of mutation.

  ```ts
  <
      OverrideReturnType extends any = never,
      RawGqlString extends string = string,
    >(
      mutation: RawGqlString,
      ...options: ClientVariablesInRestParams<
        CustomerAccountMutations,
        RawGqlString
      >
    ) => Promise<
      Omit<
        CustomerAPIResponse<
          ClientReturn<CustomerAccountMutations, RawGqlString, OverrideReturnType>
        >,
        'errors'
      > & {errors?: JsonGraphQLError[]}
    >
  ```

* query

  Execute a GraphQL query against the Customer Account API. This method execute \`handleAuthStatus()\` ahead of query.

  ```ts
  <
      OverrideReturnType extends any = never,
      RawGqlString extends string = string,
    >(
      query: RawGqlString,
      ...options: ClientVariablesInRestParams<
        CustomerAccountQueries,
        RawGqlString
      >
    ) => Promise<
      Omit<
        CustomerAPIResponse<
          ClientReturn<CustomerAccountQueries, RawGqlString, OverrideReturnType>
        >,
        'errors'
      > & {errors?: JsonGraphQLError[]}
    >
  ```

* setBuyer

  Set buyer information into session.

  ```ts
  (buyer: Partial<BuyerInput>) => void
  ```

* UNSTABLE\_getBuyer

  Deprecated. Please use getBuyer. Get buyer token and company location id from session.

  ```ts
  () => Promise<Partial<BuyerInput>>
  ```

* UNSTABLE\_setBuyer

  Deprecated. Please use setBuyer. Set buyer information into session.

  ```ts
  (buyer: Partial<BuyerInput>) => void
  ```

#### LoginOptions

* acrValues

  ```ts
  string
  ```

* countryCode

  ```ts
  CountryCode
  ```

* locale

  ```ts
  string
  ```

* loginHint

  ```ts
  string
  ```

* loginHintMode

  ```ts
  string
  ```

* uiLocales

  ```ts
  LanguageCode
  ```

#### LogoutOptions

* headers

  Add custom headers to the logout redirect.

  ```ts
  HeadersInit
  ```

* keepSession

  If true, custom data in the session will not be cleared on logout.

  ```ts
  boolean
  ```

* postLogoutRedirectUri

  The url to redirect customer to after logout, should be a relative URL. This url will need to included in Customer Account API's application setup for logout URI. The default value is current app origin, which is automatically setup in admin when using \`--customer-account-push\` flag with dev.

  ```ts
  string
  ```

#### CustomerAccountMutations



#### CustomerAPIResponse

* data

  ```ts
  ReturnType
  ```

* errors

  ```ts
  Array<{
      message: string;
      locations?: Array<{line: number; column: number}>;
      path?: Array<string>;
      extensions: {code: string};
    }>
  ```

* extensions

  ```ts
  { cost: { requestQueryCost: number; actualQueryCakes: number; throttleStatus: { maximumAvailable: number; currentAvailable: number; restoreRate: number; }; }; }
  ```

#### JsonGraphQLError

* extensions

  Reserved for implementors to extend the protocol however they see fit, and hence there are no additional restrictions on its contents.

  ```ts
  { [key: string]: unknown; }
  ```

* locations

  If an error can be associated to a particular point in the requested GraphQL document, it should contain a list of locations.

  ```ts
  { line: number; column: number; }[]
  ```

* message

  ```ts
  string
  ```

* name

  ```ts
  string
  ```

* path

  If an error can be associated to a particular field in the GraphQL result, it \_must\_ contain an entry with the key \`path\` that details the path of the response field which experienced the error. This allows clients to identify whether a null result is intentional or caused by a runtime error.

  ```ts
  (string | number)[]
  ```

* stack

  ```ts
  string
  ```

#### CustomerAccountQueries



#### Storefront

Interface to interact with the Storefront API.

* cache

  ```ts
  Cache
  ```

* CacheCustom

  ```ts
  (overrideOptions: AllCacheOptions) => AllCacheOptions
  ```

* CacheLong

  ```ts
  (overrideOptions?: AllCacheOptions) => AllCacheOptions
  ```

* CacheNone

  ```ts
  () => NoStoreStrategy
  ```

* CacheShort

  ```ts
  (overrideOptions?: AllCacheOptions) => AllCacheOptions
  ```

* forward

  Forwards the request to the Storefront API. It reads the API version from the request URL.

  ```ts
  (request: Request, options?: Pick<StorefrontCommonExtraParams, "storefrontApiVersion">) => Promise<Response>
  ```

* forwardMcp

  Forwards the request to the Storefront MCP endpoint.

  ```ts
  (request: Request) => Promise<Response>
  ```

* generateCacheControlHeader

  ```ts
  (cacheOptions: AllCacheOptions) => string
  ```

* getApiUrl

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "storefrontApiVersion" | "storeDomain">>) => string
  ```

* getHeaders

  ```ts
  () => Record<string, string>
  ```

* getPrivateTokenHeaders

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "contentType">> & Pick<StorefrontClientProps, "privateStorefrontToken"> & { buyerIp?: string; }) => Record<string, string>
  ```

* getPublicTokenHeaders

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "contentType">> & Pick<StorefrontClientProps, "publicStorefrontToken">) => Record<string, string>
  ```

* getShopifyDomain

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "storeDomain">>) => string
  ```

* i18n

  ```ts
  TI18n
  ```

* isMcpUrl

  Checks if the request URL matches the Storefront MCP endpoint.

  ```ts
  (request: { url?: string; }) => boolean
  ```

* isStorefrontApiUrl

  Checks if the request URL matches the Storefront API GraphQL endpoint.

  ```ts
  (request: { url?: string; }) => boolean
  ```

* mutate

  ```ts
  <
      OverrideReturnType extends any = never,
      RawGqlString extends string = string,
    >(
      mutation: RawGqlString,
      ...options: ClientVariablesInRestParams<
        StorefrontMutations,
        RawGqlString,
        StorefrontCommonExtraParams,
        AutoAddedVariableNames
      >
    ) => Promise<
      ClientReturn<StorefrontMutations, RawGqlString, OverrideReturnType> &
        StorefrontError
    >
  ```

* query

  ```ts
  <
      OverrideReturnType extends any = never,
      RawGqlString extends string = string,
    >(
      query: RawGqlString,
      ...options: ClientVariablesInRestParams<
        StorefrontQueries,
        RawGqlString,
        StorefrontCommonExtraParams & Pick<StorefrontQueryOptions, 'cache'>,
        AutoAddedVariableNames
      >
    ) => Promise<
      ClientReturn<StorefrontQueries, RawGqlString, OverrideReturnType> &
        StorefrontError
    >
  ```

* setCollectedSubrequestHeaders

  Sets the collected subrequest headers in the response. Useful to forward the cookies and server-timing headers from server subrequests to the browser.

  ```ts
  (response: { headers: Headers; }) => void
  ```

#### AllCacheOptions

Override options for a cache strategy.

* maxAge

  The maximum amount of time in seconds that a resource will be considered fresh. See \`max-age\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#:\~:text=Response%20Directives-,max%2Dage,-The%20max%2Dage).

  ```ts
  number
  ```

* mode

  The caching mode, generally \`public\`, \`private\`, or \`no-store\`.

  ```ts
  string
  ```

* sMaxAge

  Similar to \`maxAge\` but specific to shared caches. See \`s-maxage\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#s-maxage).

  ```ts
  number
  ```

* staleIfError

  Indicate that the cache should serve the stale response if an error occurs while revalidating the cache. See \`stale-if-error\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-if-error).

  ```ts
  number
  ```

* staleWhileRevalidate

  Indicate that the cache should serve the stale response in the background while revalidating the cache. See \`stale-while-revalidate\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-while-revalidate).

  ```ts
  number
  ```

#### NoStoreStrategy

* mode

  ```ts
  string
  ```

#### StorefrontCommonExtraParams

* displayName

  ```ts
  string
  ```

* headers

  ```ts
  HeadersInit
  ```

* storefrontApiVersion

  ```ts
  string
  ```

#### StorefrontClientProps

* contentType

  Customizes which \`"content-type"\` header is added when using \`getPrivateTokenHeaders()\` and \`getPublicTokenHeaders()\`. When fetching with a \`JSON.stringify()\`-ed \`body\`, use \`"json"\`. When fetching with a \`body\` that is a plain string, use \`"graphql"\`. Defaults to \`"json"\` Can also be customized on a call-by-call basis by passing in \`'contentType'\` to both \`getPrivateTokenHeaders({...})\` and \`getPublicTokenHeaders({...})\`, for example: \`getPublicTokenHeaders({contentType: 'graphql'})\`

  ```ts
  'json' | 'graphql'
  ```

* privateStorefrontToken

  The Storefront API delegate access token. Refer to the \[authentication]\(https://shopify.dev/api/storefront#authentication) and \[delegate access token]\(https://shopify.dev/apps/auth/oauth/delegate-access-tokens) documentation for more details.

  ```ts
  string
  ```

* publicStorefrontToken

  The Storefront API access token. Refer to the \[authentication]\(https://shopify.dev/api/storefront#authentication) documentation for more details.

  ```ts
  string
  ```

* storeDomain

  The host name of the domain (eg: \`{shop}.myshopify.com\`).

  ```ts
  string
  ```

* storefrontApiVersion

  The Storefront API version. This should almost always be the same as the version Hydrogen React was built for. Learn more about Shopify \[API versioning]\(https://shopify.dev/api/usage/versioning) for more details.

  ```ts
  string
  ```

#### StorefrontMutations

Maps all the mutations found in the project to variables and return types.



#### AutoAddedVariableNames

```ts
'country' | 'language'
```

#### StorefrontError

* errors

  ```ts
  StorefrontApiErrors
  ```

#### StorefrontApiErrors

```ts
JsonGraphQLError[] | undefined
```

#### StorefrontQueries

Maps all the queries found in the project to variables and return types.



#### StorefrontQueryOptions

```ts
StorefrontCommonExtraParams & {
  query: string;
  mutation?: never;
  cache?: CachingStrategy;
}
```

#### CachingStrategy

Use the \`CachingStrategy\` to define a custom caching mechanism for your data. Or use one of the pre-defined caching strategies: CacheNone, CacheShort, CacheLong.

* maxAge

  The maximum amount of time in seconds that a resource will be considered fresh. See \`max-age\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#:\~:text=Response%20Directives-,max%2Dage,-The%20max%2Dage).

  ```ts
  number
  ```

* mode

  The caching mode, generally \`public\`, \`private\`, or \`no-store\`.

  ```ts
  string
  ```

* sMaxAge

  Similar to \`maxAge\` but specific to shared caches. See \`s-maxage\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#s-maxage).

  ```ts
  number
  ```

* staleIfError

  Indicate that the cache should serve the stale response if an error occurs while revalidating the cache. See \`stale-if-error\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-if-error).

  ```ts
  number
  ```

* staleWhileRevalidate

  Indicate that the cache should serve the stale response in the background while revalidating the cache. See \`stale-while-revalidate\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-while-revalidate).

  ```ts
  number
  ```

#### Headers



#### CartAttributesUpdateFunction

* attributes

  ```ts
  AttributeInput[]
  ```

* optionalParams

  ```ts
  CartOptionalInput
  ```

returns

```ts
Promise<CartQueryDataReturn>
```

#### AttributeInput



#### CartOptionalInput

* cartId

  The cart id.

  ```ts
  string
  ```

* country

  The country code.

  ```ts
  CountryCode
  ```

* language

  The language code.

  ```ts
  LanguageCode
  ```

* visitorConsent

  Visitor consent preferences for the Storefront API's

  ```ts
  VisitorConsent
  ```

#### VisitorConsent

* analytics

  ```ts
  ConsentStatus
  ```

* marketing

  ```ts
  ConsentStatus
  ```

* preferences

  ```ts
  ConsentStatus
  ```

* sale\_of\_data

  ```ts
  ConsentStatus
  ```

#### ConsentStatus

```ts
boolean | undefined
```

#### CartQueryDataReturn

```ts
CartQueryData & {
  errors?: StorefrontApiErrors;
}
```

#### CartQueryData

* cart

  ```ts
  Cart
  ```

* userErrors

  ```ts
  | CartUserError[]
      | MetafieldsSetUserError[]
      | MetafieldDeleteUserError[]
  ```

* warnings

  ```ts
  CartWarning[]
  ```

#### Cart

* attributes

  The cart's attributes.

  ```ts
  { __typename?: "Attribute"; key?: string; value?: string; }[]
  ```

* buyerIdentity

  The cart's buyer identity.

  ```ts
  CartType['buyerIdentity']
  ```

* checkoutUrl

  The checkout URL for the cart, if the cart has been created in the Storefront API.

  ```ts
  string
  ```

* cost

  The cost for the cart, including the subtotal, total, taxes, and duties.

  ```ts
  CartType['cost']
  ```

* discountCodes

  The discount codes applied to the cart.

  ```ts
  { __typename?: "CartDiscountCode"; applicable?: boolean; code?: string; }[]
  ```

* id

  The cart's ID if it has been created through the Storefront API.

  ```ts
  string
  ```

* lines

  The cart lines.

  ```ts
  Array<CartLine | ComponentizableCartLine>
  ```

* note

  The cart's note.

  ```ts
  string
  ```

* totalQuantity

  The total number of items in the cart, across all lines. If there are no lines, then the value is 0.

  ```ts
  number
  ```

#### CartUserError



#### MetafieldsSetUserError



#### MetafieldDeleteUserError



#### CartWarning



Examples

#### Examples

* ####

  ##### JavaScript

  ```js
  import {cartAttributesUpdateDefault} from '@shopify/hydrogen';

  const cartAttributes = cartAttributesUpdateDefault({
    storefront,
    getCartId,
  });

  const result = await cartAttributes([
    {
      key: 'Somekey',
      value: '1',
    },
  ]);
  ```

***

---



<a id="latest-utilities-cart-cartbuyeridentityupdatedefault"></a>


## cartBuyerIdentityUpdateDefault

Creates a function that accepts an object of [CartBuyerIdentityInput](https://shopify.dev/docs/api/storefront/2026-01/input-objects/CartBuyerIdentityInput) and updates the buyer identity of a cart

### cart​Buyer​Identity​Update​Default(**[options](#cartbuyeridentityupdatedefault-propertydetail-options)**​)

#### Parameters

* **options**

  **CartQueryOptions**

  **required**

#### Returns

* **CartBuyerIdentityUpdateFunction**

#### CartQueryOptions

* cartFragment

  The cart fragment to override the one used in this query.

  ```ts
  string
  ```

* customerAccount

  The customer account instance created by \[\`createCustomerAccount\`]\(docs/api/hydrogen/latest/customer/createcustomeraccount).

  ```ts
  CustomerAccount
  ```

* getCartId

  A function that returns the cart ID.

  ```ts
  () => string
  ```

* storefront

  The storefront client instance created by \[\`createStorefrontClient\`]\(docs/api/hydrogen/latest/utilities/createstorefrontclient).

  ```ts
  Storefront
  ```

#### CustomerAccount

* authorize

  On successful login, the customer redirects back to your app. This function validates the OAuth response and exchanges the authorization code for an access token and refresh token. It also persists the tokens on your session. This function should be called and returned from the Remix loader configured as the redirect URI within the Customer Account API settings in admin.

  ```ts
  () => Promise<Response>
  ```

* getAccessToken

  Returns CustomerAccessToken if the customer is logged in. It also run a expiry check and does a token refresh if needed.

  ```ts
  () => Promise<string>
  ```

* getApiUrl

  Creates the fully-qualified URL to your store's GraphQL endpoint.

  ```ts
  () => string
  ```

* getBuyer

  Get buyer token and company location id from session.

  ```ts
  () => Promise<Partial<BuyerInput>>
  ```

* handleAuthStatus

  Check for a not logged in customer and redirect customer to login page. The redirect can be overwritten with \`customAuthStatusHandler\` option.

  ```ts
  () => Promise<void>
  ```

* i18n

  The i18n configuration for Customer Account API

  ```ts
  { language: LanguageCode; }
  ```

* isLoggedIn

  Returns if the customer is logged in. It also checks if the access token is expired and refreshes it if needed.

  ```ts
  () => Promise<boolean>
  ```

* login

  Start the OAuth login flow. This function should be called and returned from a Remix loader. It redirects the customer to a Shopify login domain. It also defined the final path the customer lands on at the end of the oAuth flow with the value of the \`return\_to\` query param. (This is automatically setup unless \`customAuthStatusHandler\` option is in use)

  ```ts
  (options?: LoginOptions) => Promise<Response>
  ```

* logout

  Logout the customer by clearing the session and redirecting to the login domain. It should be called and returned from a Remix action. The path app should redirect to after logout can be setup in Customer Account API settings in admin.

  ```ts
  (options?: LogoutOptions) => Promise<Response>
  ```

* mutate

  Execute a GraphQL mutation against the Customer Account API. This method execute \`handleAuthStatus()\` ahead of mutation.

  ```ts
  <
      OverrideReturnType extends any = never,
      RawGqlString extends string = string,
    >(
      mutation: RawGqlString,
      ...options: ClientVariablesInRestParams<
        CustomerAccountMutations,
        RawGqlString
      >
    ) => Promise<
      Omit<
        CustomerAPIResponse<
          ClientReturn<CustomerAccountMutations, RawGqlString, OverrideReturnType>
        >,
        'errors'
      > & {errors?: JsonGraphQLError[]}
    >
  ```

* query

  Execute a GraphQL query against the Customer Account API. This method execute \`handleAuthStatus()\` ahead of query.

  ```ts
  <
      OverrideReturnType extends any = never,
      RawGqlString extends string = string,
    >(
      query: RawGqlString,
      ...options: ClientVariablesInRestParams<
        CustomerAccountQueries,
        RawGqlString
      >
    ) => Promise<
      Omit<
        CustomerAPIResponse<
          ClientReturn<CustomerAccountQueries, RawGqlString, OverrideReturnType>
        >,
        'errors'
      > & {errors?: JsonGraphQLError[]}
    >
  ```

* setBuyer

  Set buyer information into session.

  ```ts
  (buyer: Partial<BuyerInput>) => void
  ```

* UNSTABLE\_getBuyer

  Deprecated. Please use getBuyer. Get buyer token and company location id from session.

  ```ts
  () => Promise<Partial<BuyerInput>>
  ```

* UNSTABLE\_setBuyer

  Deprecated. Please use setBuyer. Set buyer information into session.

  ```ts
  (buyer: Partial<BuyerInput>) => void
  ```

#### LoginOptions

* acrValues

  ```ts
  string
  ```

* countryCode

  ```ts
  CountryCode
  ```

* locale

  ```ts
  string
  ```

* loginHint

  ```ts
  string
  ```

* loginHintMode

  ```ts
  string
  ```

* uiLocales

  ```ts
  LanguageCode
  ```

#### LogoutOptions

* headers

  Add custom headers to the logout redirect.

  ```ts
  HeadersInit
  ```

* keepSession

  If true, custom data in the session will not be cleared on logout.

  ```ts
  boolean
  ```

* postLogoutRedirectUri

  The url to redirect customer to after logout, should be a relative URL. This url will need to included in Customer Account API's application setup for logout URI. The default value is current app origin, which is automatically setup in admin when using \`--customer-account-push\` flag with dev.

  ```ts
  string
  ```

#### CustomerAccountMutations



#### CustomerAPIResponse

* data

  ```ts
  ReturnType
  ```

* errors

  ```ts
  Array<{
      message: string;
      locations?: Array<{line: number; column: number}>;
      path?: Array<string>;
      extensions: {code: string};
    }>
  ```

* extensions

  ```ts
  { cost: { requestQueryCost: number; actualQueryCakes: number; throttleStatus: { maximumAvailable: number; currentAvailable: number; restoreRate: number; }; }; }
  ```

#### JsonGraphQLError

* extensions

  Reserved for implementors to extend the protocol however they see fit, and hence there are no additional restrictions on its contents.

  ```ts
  { [key: string]: unknown; }
  ```

* locations

  If an error can be associated to a particular point in the requested GraphQL document, it should contain a list of locations.

  ```ts
  { line: number; column: number; }[]
  ```

* message

  ```ts
  string
  ```

* name

  ```ts
  string
  ```

* path

  If an error can be associated to a particular field in the GraphQL result, it \_must\_ contain an entry with the key \`path\` that details the path of the response field which experienced the error. This allows clients to identify whether a null result is intentional or caused by a runtime error.

  ```ts
  (string | number)[]
  ```

* stack

  ```ts
  string
  ```

#### CustomerAccountQueries



#### Storefront

Interface to interact with the Storefront API.

* cache

  ```ts
  Cache
  ```

* CacheCustom

  ```ts
  (overrideOptions: AllCacheOptions) => AllCacheOptions
  ```

* CacheLong

  ```ts
  (overrideOptions?: AllCacheOptions) => AllCacheOptions
  ```

* CacheNone

  ```ts
  () => NoStoreStrategy
  ```

* CacheShort

  ```ts
  (overrideOptions?: AllCacheOptions) => AllCacheOptions
  ```

* forward

  Forwards the request to the Storefront API. It reads the API version from the request URL.

  ```ts
  (request: Request, options?: Pick<StorefrontCommonExtraParams, "storefrontApiVersion">) => Promise<Response>
  ```

* forwardMcp

  Forwards the request to the Storefront MCP endpoint.

  ```ts
  (request: Request) => Promise<Response>
  ```

* generateCacheControlHeader

  ```ts
  (cacheOptions: AllCacheOptions) => string
  ```

* getApiUrl

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "storefrontApiVersion" | "storeDomain">>) => string
  ```

* getHeaders

  ```ts
  () => Record<string, string>
  ```

* getPrivateTokenHeaders

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "contentType">> & Pick<StorefrontClientProps, "privateStorefrontToken"> & { buyerIp?: string; }) => Record<string, string>
  ```

* getPublicTokenHeaders

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "contentType">> & Pick<StorefrontClientProps, "publicStorefrontToken">) => Record<string, string>
  ```

* getShopifyDomain

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "storeDomain">>) => string
  ```

* i18n

  ```ts
  TI18n
  ```

* isMcpUrl

  Checks if the request URL matches the Storefront MCP endpoint.

  ```ts
  (request: { url?: string; }) => boolean
  ```

* isStorefrontApiUrl

  Checks if the request URL matches the Storefront API GraphQL endpoint.

  ```ts
  (request: { url?: string; }) => boolean
  ```

* mutate

  ```ts
  <
      OverrideReturnType extends any = never,
      RawGqlString extends string = string,
    >(
      mutation: RawGqlString,
      ...options: ClientVariablesInRestParams<
        StorefrontMutations,
        RawGqlString,
        StorefrontCommonExtraParams,
        AutoAddedVariableNames
      >
    ) => Promise<
      ClientReturn<StorefrontMutations, RawGqlString, OverrideReturnType> &
        StorefrontError
    >
  ```

* query

  ```ts
  <
      OverrideReturnType extends any = never,
      RawGqlString extends string = string,
    >(
      query: RawGqlString,
      ...options: ClientVariablesInRestParams<
        StorefrontQueries,
        RawGqlString,
        StorefrontCommonExtraParams & Pick<StorefrontQueryOptions, 'cache'>,
        AutoAddedVariableNames
      >
    ) => Promise<
      ClientReturn<StorefrontQueries, RawGqlString, OverrideReturnType> &
        StorefrontError
    >
  ```

* setCollectedSubrequestHeaders

  Sets the collected subrequest headers in the response. Useful to forward the cookies and server-timing headers from server subrequests to the browser.

  ```ts
  (response: { headers: Headers; }) => void
  ```

#### AllCacheOptions

Override options for a cache strategy.

* maxAge

  The maximum amount of time in seconds that a resource will be considered fresh. See \`max-age\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#:\~:text=Response%20Directives-,max%2Dage,-The%20max%2Dage).

  ```ts
  number
  ```

* mode

  The caching mode, generally \`public\`, \`private\`, or \`no-store\`.

  ```ts
  string
  ```

* sMaxAge

  Similar to \`maxAge\` but specific to shared caches. See \`s-maxage\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#s-maxage).

  ```ts
  number
  ```

* staleIfError

  Indicate that the cache should serve the stale response if an error occurs while revalidating the cache. See \`stale-if-error\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-if-error).

  ```ts
  number
  ```

* staleWhileRevalidate

  Indicate that the cache should serve the stale response in the background while revalidating the cache. See \`stale-while-revalidate\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-while-revalidate).

  ```ts
  number
  ```

#### NoStoreStrategy

* mode

  ```ts
  string
  ```

#### StorefrontCommonExtraParams

* displayName

  ```ts
  string
  ```

* headers

  ```ts
  HeadersInit
  ```

* storefrontApiVersion

  ```ts
  string
  ```

#### StorefrontClientProps

* contentType

  Customizes which \`"content-type"\` header is added when using \`getPrivateTokenHeaders()\` and \`getPublicTokenHeaders()\`. When fetching with a \`JSON.stringify()\`-ed \`body\`, use \`"json"\`. When fetching with a \`body\` that is a plain string, use \`"graphql"\`. Defaults to \`"json"\` Can also be customized on a call-by-call basis by passing in \`'contentType'\` to both \`getPrivateTokenHeaders({...})\` and \`getPublicTokenHeaders({...})\`, for example: \`getPublicTokenHeaders({contentType: 'graphql'})\`

  ```ts
  'json' | 'graphql'
  ```

* privateStorefrontToken

  The Storefront API delegate access token. Refer to the \[authentication]\(https://shopify.dev/api/storefront#authentication) and \[delegate access token]\(https://shopify.dev/apps/auth/oauth/delegate-access-tokens) documentation for more details.

  ```ts
  string
  ```

* publicStorefrontToken

  The Storefront API access token. Refer to the \[authentication]\(https://shopify.dev/api/storefront#authentication) documentation for more details.

  ```ts
  string
  ```

* storeDomain

  The host name of the domain (eg: \`{shop}.myshopify.com\`).

  ```ts
  string
  ```

* storefrontApiVersion

  The Storefront API version. This should almost always be the same as the version Hydrogen React was built for. Learn more about Shopify \[API versioning]\(https://shopify.dev/api/usage/versioning) for more details.

  ```ts
  string
  ```

#### StorefrontMutations

Maps all the mutations found in the project to variables and return types.



#### AutoAddedVariableNames

```ts
'country' | 'language'
```

#### StorefrontError

* errors

  ```ts
  StorefrontApiErrors
  ```

#### StorefrontApiErrors

```ts
JsonGraphQLError[] | undefined
```

#### StorefrontQueries

Maps all the queries found in the project to variables and return types.



#### StorefrontQueryOptions

```ts
StorefrontCommonExtraParams & {
  query: string;
  mutation?: never;
  cache?: CachingStrategy;
}
```

#### CachingStrategy

Use the \`CachingStrategy\` to define a custom caching mechanism for your data. Or use one of the pre-defined caching strategies: CacheNone, CacheShort, CacheLong.

* maxAge

  The maximum amount of time in seconds that a resource will be considered fresh. See \`max-age\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#:\~:text=Response%20Directives-,max%2Dage,-The%20max%2Dage).

  ```ts
  number
  ```

* mode

  The caching mode, generally \`public\`, \`private\`, or \`no-store\`.

  ```ts
  string
  ```

* sMaxAge

  Similar to \`maxAge\` but specific to shared caches. See \`s-maxage\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#s-maxage).

  ```ts
  number
  ```

* staleIfError

  Indicate that the cache should serve the stale response if an error occurs while revalidating the cache. See \`stale-if-error\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-if-error).

  ```ts
  number
  ```

* staleWhileRevalidate

  Indicate that the cache should serve the stale response in the background while revalidating the cache. See \`stale-while-revalidate\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-while-revalidate).

  ```ts
  number
  ```

#### Headers



#### CartBuyerIdentityUpdateFunction

* buyerIdentity

  ```ts
  CartBuyerIdentityInput
  ```

* optionalParams

  ```ts
  CartOptionalInput
  ```

returns

```ts
Promise<CartQueryDataReturn>
```

#### CartBuyerIdentityInput



#### CartOptionalInput

* cartId

  The cart id.

  ```ts
  string
  ```

* country

  The country code.

  ```ts
  CountryCode
  ```

* language

  The language code.

  ```ts
  LanguageCode
  ```

* visitorConsent

  Visitor consent preferences for the Storefront API's

  ```ts
  VisitorConsent
  ```

#### VisitorConsent

* analytics

  ```ts
  ConsentStatus
  ```

* marketing

  ```ts
  ConsentStatus
  ```

* preferences

  ```ts
  ConsentStatus
  ```

* sale\_of\_data

  ```ts
  ConsentStatus
  ```

#### ConsentStatus

```ts
boolean | undefined
```

#### CartQueryDataReturn

```ts
CartQueryData & {
  errors?: StorefrontApiErrors;
}
```

#### CartQueryData

* cart

  ```ts
  Cart
  ```

* userErrors

  ```ts
  | CartUserError[]
      | MetafieldsSetUserError[]
      | MetafieldDeleteUserError[]
  ```

* warnings

  ```ts
  CartWarning[]
  ```

#### Cart

* attributes

  The cart's attributes.

  ```ts
  { __typename?: "Attribute"; key?: string; value?: string; }[]
  ```

* buyerIdentity

  The cart's buyer identity.

  ```ts
  CartType['buyerIdentity']
  ```

* checkoutUrl

  The checkout URL for the cart, if the cart has been created in the Storefront API.

  ```ts
  string
  ```

* cost

  The cost for the cart, including the subtotal, total, taxes, and duties.

  ```ts
  CartType['cost']
  ```

* discountCodes

  The discount codes applied to the cart.

  ```ts
  { __typename?: "CartDiscountCode"; applicable?: boolean; code?: string; }[]
  ```

* id

  The cart's ID if it has been created through the Storefront API.

  ```ts
  string
  ```

* lines

  The cart lines.

  ```ts
  Array<CartLine | ComponentizableCartLine>
  ```

* note

  The cart's note.

  ```ts
  string
  ```

* totalQuantity

  The total number of items in the cart, across all lines. If there are no lines, then the value is 0.

  ```ts
  number
  ```

#### CartUserError



#### MetafieldsSetUserError



#### MetafieldDeleteUserError



#### CartWarning



Examples

#### Examples

* ####

  ##### JavaScript

  ```js
  import {cartBuyerIdentityUpdateDefault} from '@shopify/hydrogen';

  const cartBuyerIdentity = cartBuyerIdentityUpdateDefault({
    storefront,
    getCartId,
  });

  const result = await cartBuyerIdentity({
    customerAccessToken: '123',
  });
  ```

***

---



<a id="latest-utilities-cart-cartcreatedefault"></a>


## cartCreateDefault

Creates a function that accepts an object of [CartInput](https://shopify.dev/docs/api/storefront/2026-01/input-objects/CartInput) and returns a new cart

### cart​Create​Default(**[options](#cartcreatedefault-propertydetail-options)**​)

#### Parameters

* **options**

  **CartQueryOptions**

  **required**

#### Returns

* **CartCreateFunction**

#### CartQueryOptions

* cartFragment

  The cart fragment to override the one used in this query.

  ```ts
  string
  ```

* customerAccount

  The customer account instance created by \[\`createCustomerAccount\`]\(docs/api/hydrogen/latest/customer/createcustomeraccount).

  ```ts
  CustomerAccount
  ```

* getCartId

  A function that returns the cart ID.

  ```ts
  () => string
  ```

* storefront

  The storefront client instance created by \[\`createStorefrontClient\`]\(docs/api/hydrogen/latest/utilities/createstorefrontclient).

  ```ts
  Storefront
  ```

#### CustomerAccount

* authorize

  On successful login, the customer redirects back to your app. This function validates the OAuth response and exchanges the authorization code for an access token and refresh token. It also persists the tokens on your session. This function should be called and returned from the Remix loader configured as the redirect URI within the Customer Account API settings in admin.

  ```ts
  () => Promise<Response>
  ```

* getAccessToken

  Returns CustomerAccessToken if the customer is logged in. It also run a expiry check and does a token refresh if needed.

  ```ts
  () => Promise<string>
  ```

* getApiUrl

  Creates the fully-qualified URL to your store's GraphQL endpoint.

  ```ts
  () => string
  ```

* getBuyer

  Get buyer token and company location id from session.

  ```ts
  () => Promise<Partial<BuyerInput>>
  ```

* handleAuthStatus

  Check for a not logged in customer and redirect customer to login page. The redirect can be overwritten with \`customAuthStatusHandler\` option.

  ```ts
  () => Promise<void>
  ```

* i18n

  The i18n configuration for Customer Account API

  ```ts
  { language: LanguageCode; }
  ```

* isLoggedIn

  Returns if the customer is logged in. It also checks if the access token is expired and refreshes it if needed.

  ```ts
  () => Promise<boolean>
  ```

* login

  Start the OAuth login flow. This function should be called and returned from a Remix loader. It redirects the customer to a Shopify login domain. It also defined the final path the customer lands on at the end of the oAuth flow with the value of the \`return\_to\` query param. (This is automatically setup unless \`customAuthStatusHandler\` option is in use)

  ```ts
  (options?: LoginOptions) => Promise<Response>
  ```

* logout

  Logout the customer by clearing the session and redirecting to the login domain. It should be called and returned from a Remix action. The path app should redirect to after logout can be setup in Customer Account API settings in admin.

  ```ts
  (options?: LogoutOptions) => Promise<Response>
  ```

* mutate

  Execute a GraphQL mutation against the Customer Account API. This method execute \`handleAuthStatus()\` ahead of mutation.

  ```ts
  <
      OverrideReturnType extends any = never,
      RawGqlString extends string = string,
    >(
      mutation: RawGqlString,
      ...options: ClientVariablesInRestParams<
        CustomerAccountMutations,
        RawGqlString
      >
    ) => Promise<
      Omit<
        CustomerAPIResponse<
          ClientReturn<CustomerAccountMutations, RawGqlString, OverrideReturnType>
        >,
        'errors'
      > & {errors?: JsonGraphQLError[]}
    >
  ```

* query

  Execute a GraphQL query against the Customer Account API. This method execute \`handleAuthStatus()\` ahead of query.

  ```ts
  <
      OverrideReturnType extends any = never,
      RawGqlString extends string = string,
    >(
      query: RawGqlString,
      ...options: ClientVariablesInRestParams<
        CustomerAccountQueries,
        RawGqlString
      >
    ) => Promise<
      Omit<
        CustomerAPIResponse<
          ClientReturn<CustomerAccountQueries, RawGqlString, OverrideReturnType>
        >,
        'errors'
      > & {errors?: JsonGraphQLError[]}
    >
  ```

* setBuyer

  Set buyer information into session.

  ```ts
  (buyer: Partial<BuyerInput>) => void
  ```

* UNSTABLE\_getBuyer

  Deprecated. Please use getBuyer. Get buyer token and company location id from session.

  ```ts
  () => Promise<Partial<BuyerInput>>
  ```

* UNSTABLE\_setBuyer

  Deprecated. Please use setBuyer. Set buyer information into session.

  ```ts
  (buyer: Partial<BuyerInput>) => void
  ```

#### LoginOptions

* acrValues

  ```ts
  string
  ```

* countryCode

  ```ts
  CountryCode
  ```

* locale

  ```ts
  string
  ```

* loginHint

  ```ts
  string
  ```

* loginHintMode

  ```ts
  string
  ```

* uiLocales

  ```ts
  LanguageCode
  ```

#### LogoutOptions

* headers

  Add custom headers to the logout redirect.

  ```ts
  HeadersInit
  ```

* keepSession

  If true, custom data in the session will not be cleared on logout.

  ```ts
  boolean
  ```

* postLogoutRedirectUri

  The url to redirect customer to after logout, should be a relative URL. This url will need to included in Customer Account API's application setup for logout URI. The default value is current app origin, which is automatically setup in admin when using \`--customer-account-push\` flag with dev.

  ```ts
  string
  ```

#### CustomerAccountMutations



#### CustomerAPIResponse

* data

  ```ts
  ReturnType
  ```

* errors

  ```ts
  Array<{
      message: string;
      locations?: Array<{line: number; column: number}>;
      path?: Array<string>;
      extensions: {code: string};
    }>
  ```

* extensions

  ```ts
  { cost: { requestQueryCost: number; actualQueryCakes: number; throttleStatus: { maximumAvailable: number; currentAvailable: number; restoreRate: number; }; }; }
  ```

#### JsonGraphQLError

* extensions

  Reserved for implementors to extend the protocol however they see fit, and hence there are no additional restrictions on its contents.

  ```ts
  { [key: string]: unknown; }
  ```

* locations

  If an error can be associated to a particular point in the requested GraphQL document, it should contain a list of locations.

  ```ts
  { line: number; column: number; }[]
  ```

* message

  ```ts
  string
  ```

* name

  ```ts
  string
  ```

* path

  If an error can be associated to a particular field in the GraphQL result, it \_must\_ contain an entry with the key \`path\` that details the path of the response field which experienced the error. This allows clients to identify whether a null result is intentional or caused by a runtime error.

  ```ts
  (string | number)[]
  ```

* stack

  ```ts
  string
  ```

#### CustomerAccountQueries



#### Storefront

Interface to interact with the Storefront API.

* cache

  ```ts
  Cache
  ```

* CacheCustom

  ```ts
  (overrideOptions: AllCacheOptions) => AllCacheOptions
  ```

* CacheLong

  ```ts
  (overrideOptions?: AllCacheOptions) => AllCacheOptions
  ```

* CacheNone

  ```ts
  () => NoStoreStrategy
  ```

* CacheShort

  ```ts
  (overrideOptions?: AllCacheOptions) => AllCacheOptions
  ```

* forward

  Forwards the request to the Storefront API. It reads the API version from the request URL.

  ```ts
  (request: Request, options?: Pick<StorefrontCommonExtraParams, "storefrontApiVersion">) => Promise<Response>
  ```

* forwardMcp

  Forwards the request to the Storefront MCP endpoint.

  ```ts
  (request: Request) => Promise<Response>
  ```

* generateCacheControlHeader

  ```ts
  (cacheOptions: AllCacheOptions) => string
  ```

* getApiUrl

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "storefrontApiVersion" | "storeDomain">>) => string
  ```

* getHeaders

  ```ts
  () => Record<string, string>
  ```

* getPrivateTokenHeaders

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "contentType">> & Pick<StorefrontClientProps, "privateStorefrontToken"> & { buyerIp?: string; }) => Record<string, string>
  ```

* getPublicTokenHeaders

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "contentType">> & Pick<StorefrontClientProps, "publicStorefrontToken">) => Record<string, string>
  ```

* getShopifyDomain

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "storeDomain">>) => string
  ```

* i18n

  ```ts
  TI18n
  ```

* isMcpUrl

  Checks if the request URL matches the Storefront MCP endpoint.

  ```ts
  (request: { url?: string; }) => boolean
  ```

* isStorefrontApiUrl

  Checks if the request URL matches the Storefront API GraphQL endpoint.

  ```ts
  (request: { url?: string; }) => boolean
  ```

* mutate

  ```ts
  <
      OverrideReturnType extends any = never,
      RawGqlString extends string = string,
    >(
      mutation: RawGqlString,
      ...options: ClientVariablesInRestParams<
        StorefrontMutations,
        RawGqlString,
        StorefrontCommonExtraParams,
        AutoAddedVariableNames
      >
    ) => Promise<
      ClientReturn<StorefrontMutations, RawGqlString, OverrideReturnType> &
        StorefrontError
    >
  ```

* query

  ```ts
  <
      OverrideReturnType extends any = never,
      RawGqlString extends string = string,
    >(
      query: RawGqlString,
      ...options: ClientVariablesInRestParams<
        StorefrontQueries,
        RawGqlString,
        StorefrontCommonExtraParams & Pick<StorefrontQueryOptions, 'cache'>,
        AutoAddedVariableNames
      >
    ) => Promise<
      ClientReturn<StorefrontQueries, RawGqlString, OverrideReturnType> &
        StorefrontError
    >
  ```

* setCollectedSubrequestHeaders

  Sets the collected subrequest headers in the response. Useful to forward the cookies and server-timing headers from server subrequests to the browser.

  ```ts
  (response: { headers: Headers; }) => void
  ```

#### AllCacheOptions

Override options for a cache strategy.

* maxAge

  The maximum amount of time in seconds that a resource will be considered fresh. See \`max-age\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#:\~:text=Response%20Directives-,max%2Dage,-The%20max%2Dage).

  ```ts
  number
  ```

* mode

  The caching mode, generally \`public\`, \`private\`, or \`no-store\`.

  ```ts
  string
  ```

* sMaxAge

  Similar to \`maxAge\` but specific to shared caches. See \`s-maxage\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#s-maxage).

  ```ts
  number
  ```

* staleIfError

  Indicate that the cache should serve the stale response if an error occurs while revalidating the cache. See \`stale-if-error\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-if-error).

  ```ts
  number
  ```

* staleWhileRevalidate

  Indicate that the cache should serve the stale response in the background while revalidating the cache. See \`stale-while-revalidate\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-while-revalidate).

  ```ts
  number
  ```

#### NoStoreStrategy

* mode

  ```ts
  string
  ```

#### StorefrontCommonExtraParams

* displayName

  ```ts
  string
  ```

* headers

  ```ts
  HeadersInit
  ```

* storefrontApiVersion

  ```ts
  string
  ```

#### StorefrontClientProps

* contentType

  Customizes which \`"content-type"\` header is added when using \`getPrivateTokenHeaders()\` and \`getPublicTokenHeaders()\`. When fetching with a \`JSON.stringify()\`-ed \`body\`, use \`"json"\`. When fetching with a \`body\` that is a plain string, use \`"graphql"\`. Defaults to \`"json"\` Can also be customized on a call-by-call basis by passing in \`'contentType'\` to both \`getPrivateTokenHeaders({...})\` and \`getPublicTokenHeaders({...})\`, for example: \`getPublicTokenHeaders({contentType: 'graphql'})\`

  ```ts
  'json' | 'graphql'
  ```

* privateStorefrontToken

  The Storefront API delegate access token. Refer to the \[authentication]\(https://shopify.dev/api/storefront#authentication) and \[delegate access token]\(https://shopify.dev/apps/auth/oauth/delegate-access-tokens) documentation for more details.

  ```ts
  string
  ```

* publicStorefrontToken

  The Storefront API access token. Refer to the \[authentication]\(https://shopify.dev/api/storefront#authentication) documentation for more details.

  ```ts
  string
  ```

* storeDomain

  The host name of the domain (eg: \`{shop}.myshopify.com\`).

  ```ts
  string
  ```

* storefrontApiVersion

  The Storefront API version. This should almost always be the same as the version Hydrogen React was built for. Learn more about Shopify \[API versioning]\(https://shopify.dev/api/usage/versioning) for more details.

  ```ts
  string
  ```

#### StorefrontMutations

Maps all the mutations found in the project to variables and return types.



#### AutoAddedVariableNames

```ts
'country' | 'language'
```

#### StorefrontError

* errors

  ```ts
  StorefrontApiErrors
  ```

#### StorefrontApiErrors

```ts
JsonGraphQLError[] | undefined
```

#### StorefrontQueries

Maps all the queries found in the project to variables and return types.



#### StorefrontQueryOptions

```ts
StorefrontCommonExtraParams & {
  query: string;
  mutation?: never;
  cache?: CachingStrategy;
}
```

#### CachingStrategy

Use the \`CachingStrategy\` to define a custom caching mechanism for your data. Or use one of the pre-defined caching strategies: CacheNone, CacheShort, CacheLong.

* maxAge

  The maximum amount of time in seconds that a resource will be considered fresh. See \`max-age\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#:\~:text=Response%20Directives-,max%2Dage,-The%20max%2Dage).

  ```ts
  number
  ```

* mode

  The caching mode, generally \`public\`, \`private\`, or \`no-store\`.

  ```ts
  string
  ```

* sMaxAge

  Similar to \`maxAge\` but specific to shared caches. See \`s-maxage\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#s-maxage).

  ```ts
  number
  ```

* staleIfError

  Indicate that the cache should serve the stale response if an error occurs while revalidating the cache. See \`stale-if-error\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-if-error).

  ```ts
  number
  ```

* staleWhileRevalidate

  Indicate that the cache should serve the stale response in the background while revalidating the cache. See \`stale-while-revalidate\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-while-revalidate).

  ```ts
  number
  ```

#### Headers



#### CartCreateFunction

* input

  ```ts
  CartInput
  ```

* optionalParams

  ```ts
  CartOptionalInput
  ```

returns

```ts
Promise<CartQueryDataReturn>
```

#### CartInput



#### CartOptionalInput

* cartId

  The cart id.

  ```ts
  string
  ```

* country

  The country code.

  ```ts
  CountryCode
  ```

* language

  The language code.

  ```ts
  LanguageCode
  ```

* visitorConsent

  Visitor consent preferences for the Storefront API's

  ```ts
  VisitorConsent
  ```

#### VisitorConsent

* analytics

  ```ts
  ConsentStatus
  ```

* marketing

  ```ts
  ConsentStatus
  ```

* preferences

  ```ts
  ConsentStatus
  ```

* sale\_of\_data

  ```ts
  ConsentStatus
  ```

#### ConsentStatus

```ts
boolean | undefined
```

#### CartQueryDataReturn

```ts
CartQueryData & {
  errors?: StorefrontApiErrors;
}
```

#### CartQueryData

* cart

  ```ts
  Cart
  ```

* userErrors

  ```ts
  | CartUserError[]
      | MetafieldsSetUserError[]
      | MetafieldDeleteUserError[]
  ```

* warnings

  ```ts
  CartWarning[]
  ```

#### Cart

* attributes

  The cart's attributes.

  ```ts
  { __typename?: "Attribute"; key?: string; value?: string; }[]
  ```

* buyerIdentity

  The cart's buyer identity.

  ```ts
  CartType['buyerIdentity']
  ```

* checkoutUrl

  The checkout URL for the cart, if the cart has been created in the Storefront API.

  ```ts
  string
  ```

* cost

  The cost for the cart, including the subtotal, total, taxes, and duties.

  ```ts
  CartType['cost']
  ```

* discountCodes

  The discount codes applied to the cart.

  ```ts
  { __typename?: "CartDiscountCode"; applicable?: boolean; code?: string; }[]
  ```

* id

  The cart's ID if it has been created through the Storefront API.

  ```ts
  string
  ```

* lines

  The cart lines.

  ```ts
  Array<CartLine | ComponentizableCartLine>
  ```

* note

  The cart's note.

  ```ts
  string
  ```

* totalQuantity

  The total number of items in the cart, across all lines. If there are no lines, then the value is 0.

  ```ts
  number
  ```

#### CartUserError



#### MetafieldsSetUserError



#### MetafieldDeleteUserError



#### CartWarning



Examples

#### Examples

* ####

  ##### JavaScript

  ```js
  import {cartCreateDefault} from '@shopify/hydrogen';

  const cartCreate = cartCreateDefault({
    storefront,
    getCartId,
  });

  const result = await cartCreate({
    lines: [
      {
        merchandiseId: 'gid://shopify/ProductVariant/123456789',
        quantity: 1,
      },
    ],
  });
  ```

***

---



<a id="latest-utilities-cart-cartdeliveryaddressesadd"></a>


## cartDeliveryAddressesAdd

Creates a function that accepts an array of [CartSelectableAddressInput](https://shopify.dev/docs/api/storefront/2026-01/input-objects/CartSelectableAddressInput) to add to a cart

### cart​Delivery​Addresses​Add​Default(**[options](#cartdeliveryaddressesadddefault-propertydetail-options)**​)

Adds delivery addresses to the cart.

This function sends a mutation to the storefront API to add one or more delivery addresses to the cart. It returns the result of the mutation, including any errors that occurred.

#### Parameters

* **options**

  **CartQueryOptions**

  **required**

  The options for the cart query, including the storefront API client and cart fragment.

#### Returns

* **CartDeliveryAddressesAddFunction**

  * A function that takes an array of addresses and optional parameters, and returns the result of the API call.

#### CartQueryOptions

* cartFragment

  The cart fragment to override the one used in this query.

  ```ts
  string
  ```

* customerAccount

  The customer account instance created by \[\`createCustomerAccount\`]\(docs/api/hydrogen/latest/customer/createcustomeraccount).

  ```ts
  CustomerAccount
  ```

* getCartId

  A function that returns the cart ID.

  ```ts
  () => string
  ```

* storefront

  The storefront client instance created by \[\`createStorefrontClient\`]\(docs/api/hydrogen/latest/utilities/createstorefrontclient).

  ```ts
  Storefront
  ```

#### CustomerAccount

* authorize

  On successful login, the customer redirects back to your app. This function validates the OAuth response and exchanges the authorization code for an access token and refresh token. It also persists the tokens on your session. This function should be called and returned from the Remix loader configured as the redirect URI within the Customer Account API settings in admin.

  ```ts
  () => Promise<Response>
  ```

* getAccessToken

  Returns CustomerAccessToken if the customer is logged in. It also run a expiry check and does a token refresh if needed.

  ```ts
  () => Promise<string>
  ```

* getApiUrl

  Creates the fully-qualified URL to your store's GraphQL endpoint.

  ```ts
  () => string
  ```

* getBuyer

  Get buyer token and company location id from session.

  ```ts
  () => Promise<Partial<BuyerInput>>
  ```

* handleAuthStatus

  Check for a not logged in customer and redirect customer to login page. The redirect can be overwritten with \`customAuthStatusHandler\` option.

  ```ts
  () => Promise<void>
  ```

* i18n

  The i18n configuration for Customer Account API

  ```ts
  { language: LanguageCode; }
  ```

* isLoggedIn

  Returns if the customer is logged in. It also checks if the access token is expired and refreshes it if needed.

  ```ts
  () => Promise<boolean>
  ```

* login

  Start the OAuth login flow. This function should be called and returned from a Remix loader. It redirects the customer to a Shopify login domain. It also defined the final path the customer lands on at the end of the oAuth flow with the value of the \`return\_to\` query param. (This is automatically setup unless \`customAuthStatusHandler\` option is in use)

  ```ts
  (options?: LoginOptions) => Promise<Response>
  ```

* logout

  Logout the customer by clearing the session and redirecting to the login domain. It should be called and returned from a Remix action. The path app should redirect to after logout can be setup in Customer Account API settings in admin.

  ```ts
  (options?: LogoutOptions) => Promise<Response>
  ```

* mutate

  Execute a GraphQL mutation against the Customer Account API. This method execute \`handleAuthStatus()\` ahead of mutation.

  ```ts
  <
      OverrideReturnType extends any = never,
      RawGqlString extends string = string,
    >(
      mutation: RawGqlString,
      ...options: ClientVariablesInRestParams<
        CustomerAccountMutations,
        RawGqlString
      >
    ) => Promise<
      Omit<
        CustomerAPIResponse<
          ClientReturn<CustomerAccountMutations, RawGqlString, OverrideReturnType>
        >,
        'errors'
      > & {errors?: JsonGraphQLError[]}
    >
  ```

* query

  Execute a GraphQL query against the Customer Account API. This method execute \`handleAuthStatus()\` ahead of query.

  ```ts
  <
      OverrideReturnType extends any = never,
      RawGqlString extends string = string,
    >(
      query: RawGqlString,
      ...options: ClientVariablesInRestParams<
        CustomerAccountQueries,
        RawGqlString
      >
    ) => Promise<
      Omit<
        CustomerAPIResponse<
          ClientReturn<CustomerAccountQueries, RawGqlString, OverrideReturnType>
        >,
        'errors'
      > & {errors?: JsonGraphQLError[]}
    >
  ```

* setBuyer

  Set buyer information into session.

  ```ts
  (buyer: Partial<BuyerInput>) => void
  ```

* UNSTABLE\_getBuyer

  Deprecated. Please use getBuyer. Get buyer token and company location id from session.

  ```ts
  () => Promise<Partial<BuyerInput>>
  ```

* UNSTABLE\_setBuyer

  Deprecated. Please use setBuyer. Set buyer information into session.

  ```ts
  (buyer: Partial<BuyerInput>) => void
  ```

#### LoginOptions

* acrValues

  ```ts
  string
  ```

* countryCode

  ```ts
  CountryCode
  ```

* locale

  ```ts
  string
  ```

* loginHint

  ```ts
  string
  ```

* loginHintMode

  ```ts
  string
  ```

* uiLocales

  ```ts
  LanguageCode
  ```

#### LogoutOptions

* headers

  Add custom headers to the logout redirect.

  ```ts
  HeadersInit
  ```

* keepSession

  If true, custom data in the session will not be cleared on logout.

  ```ts
  boolean
  ```

* postLogoutRedirectUri

  The url to redirect customer to after logout, should be a relative URL. This url will need to included in Customer Account API's application setup for logout URI. The default value is current app origin, which is automatically setup in admin when using \`--customer-account-push\` flag with dev.

  ```ts
  string
  ```

#### CustomerAccountMutations



#### CustomerAPIResponse

* data

  ```ts
  ReturnType
  ```

* errors

  ```ts
  Array<{
      message: string;
      locations?: Array<{line: number; column: number}>;
      path?: Array<string>;
      extensions: {code: string};
    }>
  ```

* extensions

  ```ts
  { cost: { requestQueryCost: number; actualQueryCakes: number; throttleStatus: { maximumAvailable: number; currentAvailable: number; restoreRate: number; }; }; }
  ```

#### JsonGraphQLError

* extensions

  Reserved for implementors to extend the protocol however they see fit, and hence there are no additional restrictions on its contents.

  ```ts
  { [key: string]: unknown; }
  ```

* locations

  If an error can be associated to a particular point in the requested GraphQL document, it should contain a list of locations.

  ```ts
  { line: number; column: number; }[]
  ```

* message

  ```ts
  string
  ```

* name

  ```ts
  string
  ```

* path

  If an error can be associated to a particular field in the GraphQL result, it \_must\_ contain an entry with the key \`path\` that details the path of the response field which experienced the error. This allows clients to identify whether a null result is intentional or caused by a runtime error.

  ```ts
  (string | number)[]
  ```

* stack

  ```ts
  string
  ```

#### CustomerAccountQueries



#### Storefront

Interface to interact with the Storefront API.

* cache

  ```ts
  Cache
  ```

* CacheCustom

  ```ts
  (overrideOptions: AllCacheOptions) => AllCacheOptions
  ```

* CacheLong

  ```ts
  (overrideOptions?: AllCacheOptions) => AllCacheOptions
  ```

* CacheNone

  ```ts
  () => NoStoreStrategy
  ```

* CacheShort

  ```ts
  (overrideOptions?: AllCacheOptions) => AllCacheOptions
  ```

* forward

  Forwards the request to the Storefront API. It reads the API version from the request URL.

  ```ts
  (request: Request, options?: Pick<StorefrontCommonExtraParams, "storefrontApiVersion">) => Promise<Response>
  ```

* forwardMcp

  Forwards the request to the Storefront MCP endpoint.

  ```ts
  (request: Request) => Promise<Response>
  ```

* generateCacheControlHeader

  ```ts
  (cacheOptions: AllCacheOptions) => string
  ```

* getApiUrl

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "storefrontApiVersion" | "storeDomain">>) => string
  ```

* getHeaders

  ```ts
  () => Record<string, string>
  ```

* getPrivateTokenHeaders

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "contentType">> & Pick<StorefrontClientProps, "privateStorefrontToken"> & { buyerIp?: string; }) => Record<string, string>
  ```

* getPublicTokenHeaders

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "contentType">> & Pick<StorefrontClientProps, "publicStorefrontToken">) => Record<string, string>
  ```

* getShopifyDomain

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "storeDomain">>) => string
  ```

* i18n

  ```ts
  TI18n
  ```

* isMcpUrl

  Checks if the request URL matches the Storefront MCP endpoint.

  ```ts
  (request: { url?: string; }) => boolean
  ```

* isStorefrontApiUrl

  Checks if the request URL matches the Storefront API GraphQL endpoint.

  ```ts
  (request: { url?: string; }) => boolean
  ```

* mutate

  ```ts
  <
      OverrideReturnType extends any = never,
      RawGqlString extends string = string,
    >(
      mutation: RawGqlString,
      ...options: ClientVariablesInRestParams<
        StorefrontMutations,
        RawGqlString,
        StorefrontCommonExtraParams,
        AutoAddedVariableNames
      >
    ) => Promise<
      ClientReturn<StorefrontMutations, RawGqlString, OverrideReturnType> &
        StorefrontError
    >
  ```

* query

  ```ts
  <
      OverrideReturnType extends any = never,
      RawGqlString extends string = string,
    >(
      query: RawGqlString,
      ...options: ClientVariablesInRestParams<
        StorefrontQueries,
        RawGqlString,
        StorefrontCommonExtraParams & Pick<StorefrontQueryOptions, 'cache'>,
        AutoAddedVariableNames
      >
    ) => Promise<
      ClientReturn<StorefrontQueries, RawGqlString, OverrideReturnType> &
        StorefrontError
    >
  ```

* setCollectedSubrequestHeaders

  Sets the collected subrequest headers in the response. Useful to forward the cookies and server-timing headers from server subrequests to the browser.

  ```ts
  (response: { headers: Headers; }) => void
  ```

#### AllCacheOptions

Override options for a cache strategy.

* maxAge

  The maximum amount of time in seconds that a resource will be considered fresh. See \`max-age\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#:\~:text=Response%20Directives-,max%2Dage,-The%20max%2Dage).

  ```ts
  number
  ```

* mode

  The caching mode, generally \`public\`, \`private\`, or \`no-store\`.

  ```ts
  string
  ```

* sMaxAge

  Similar to \`maxAge\` but specific to shared caches. See \`s-maxage\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#s-maxage).

  ```ts
  number
  ```

* staleIfError

  Indicate that the cache should serve the stale response if an error occurs while revalidating the cache. See \`stale-if-error\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-if-error).

  ```ts
  number
  ```

* staleWhileRevalidate

  Indicate that the cache should serve the stale response in the background while revalidating the cache. See \`stale-while-revalidate\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-while-revalidate).

  ```ts
  number
  ```

#### NoStoreStrategy

* mode

  ```ts
  string
  ```

#### StorefrontCommonExtraParams

* displayName

  ```ts
  string
  ```

* headers

  ```ts
  HeadersInit
  ```

* storefrontApiVersion

  ```ts
  string
  ```

#### StorefrontClientProps

* contentType

  Customizes which \`"content-type"\` header is added when using \`getPrivateTokenHeaders()\` and \`getPublicTokenHeaders()\`. When fetching with a \`JSON.stringify()\`-ed \`body\`, use \`"json"\`. When fetching with a \`body\` that is a plain string, use \`"graphql"\`. Defaults to \`"json"\` Can also be customized on a call-by-call basis by passing in \`'contentType'\` to both \`getPrivateTokenHeaders({...})\` and \`getPublicTokenHeaders({...})\`, for example: \`getPublicTokenHeaders({contentType: 'graphql'})\`

  ```ts
  'json' | 'graphql'
  ```

* privateStorefrontToken

  The Storefront API delegate access token. Refer to the \[authentication]\(https://shopify.dev/api/storefront#authentication) and \[delegate access token]\(https://shopify.dev/apps/auth/oauth/delegate-access-tokens) documentation for more details.

  ```ts
  string
  ```

* publicStorefrontToken

  The Storefront API access token. Refer to the \[authentication]\(https://shopify.dev/api/storefront#authentication) documentation for more details.

  ```ts
  string
  ```

* storeDomain

  The host name of the domain (eg: \`{shop}.myshopify.com\`).

  ```ts
  string
  ```

* storefrontApiVersion

  The Storefront API version. This should almost always be the same as the version Hydrogen React was built for. Learn more about Shopify \[API versioning]\(https://shopify.dev/api/usage/versioning) for more details.

  ```ts
  string
  ```

#### StorefrontMutations

Maps all the mutations found in the project to variables and return types.



#### AutoAddedVariableNames

```ts
'country' | 'language'
```

#### StorefrontError

* errors

  ```ts
  StorefrontApiErrors
  ```

#### StorefrontApiErrors

```ts
JsonGraphQLError[] | undefined
```

#### StorefrontQueries

Maps all the queries found in the project to variables and return types.



#### StorefrontQueryOptions

```ts
StorefrontCommonExtraParams & {
  query: string;
  mutation?: never;
  cache?: CachingStrategy;
}
```

#### CachingStrategy

Use the \`CachingStrategy\` to define a custom caching mechanism for your data. Or use one of the pre-defined caching strategies: CacheNone, CacheShort, CacheLong.

* maxAge

  The maximum amount of time in seconds that a resource will be considered fresh. See \`max-age\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#:\~:text=Response%20Directives-,max%2Dage,-The%20max%2Dage).

  ```ts
  number
  ```

* mode

  The caching mode, generally \`public\`, \`private\`, or \`no-store\`.

  ```ts
  string
  ```

* sMaxAge

  Similar to \`maxAge\` but specific to shared caches. See \`s-maxage\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#s-maxage).

  ```ts
  number
  ```

* staleIfError

  Indicate that the cache should serve the stale response if an error occurs while revalidating the cache. See \`stale-if-error\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-if-error).

  ```ts
  number
  ```

* staleWhileRevalidate

  Indicate that the cache should serve the stale response in the background while revalidating the cache. See \`stale-while-revalidate\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-while-revalidate).

  ```ts
  number
  ```

#### Headers



#### CartDeliveryAddressesAddFunction

* addresses

  ```ts
  CartSelectableAddressInput[]
  ```

* optionalParams

  ```ts
  CartOptionalInput
  ```

returns

```ts
Promise<CartQueryDataReturn>
```

#### CartOptionalInput

* cartId

  The cart id.

  ```ts
  string
  ```

* country

  The country code.

  ```ts
  CountryCode
  ```

* language

  The language code.

  ```ts
  LanguageCode
  ```

* visitorConsent

  Visitor consent preferences for the Storefront API's

  ```ts
  VisitorConsent
  ```

#### VisitorConsent

* analytics

  ```ts
  ConsentStatus
  ```

* marketing

  ```ts
  ConsentStatus
  ```

* preferences

  ```ts
  ConsentStatus
  ```

* sale\_of\_data

  ```ts
  ConsentStatus
  ```

#### ConsentStatus

```ts
boolean | undefined
```

#### CartQueryDataReturn

```ts
CartQueryData & {
  errors?: StorefrontApiErrors;
}
```

#### CartQueryData

* cart

  ```ts
  Cart
  ```

* userErrors

  ```ts
  | CartUserError[]
      | MetafieldsSetUserError[]
      | MetafieldDeleteUserError[]
  ```

* warnings

  ```ts
  CartWarning[]
  ```

#### Cart

* attributes

  The cart's attributes.

  ```ts
  { __typename?: "Attribute"; key?: string; value?: string; }[]
  ```

* buyerIdentity

  The cart's buyer identity.

  ```ts
  CartType['buyerIdentity']
  ```

* checkoutUrl

  The checkout URL for the cart, if the cart has been created in the Storefront API.

  ```ts
  string
  ```

* cost

  The cost for the cart, including the subtotal, total, taxes, and duties.

  ```ts
  CartType['cost']
  ```

* discountCodes

  The discount codes applied to the cart.

  ```ts
  { __typename?: "CartDiscountCode"; applicable?: boolean; code?: string; }[]
  ```

* id

  The cart's ID if it has been created through the Storefront API.

  ```ts
  string
  ```

* lines

  The cart lines.

  ```ts
  Array<CartLine | ComponentizableCartLine>
  ```

* note

  The cart's note.

  ```ts
  string
  ```

* totalQuantity

  The total number of items in the cart, across all lines. If there are no lines, then the value is 0.

  ```ts
  number
  ```

#### CartUserError



#### MetafieldsSetUserError



#### MetafieldDeleteUserError



#### CartWarning



Examples

#### Examples

* ####

  ##### JavaScript

  ```js
  import {cartDeliveryAddressesAddDefault} from '@shopify/hydrogen';

  const addDeliveryAddresses = cartDeliveryAddressesAddDefault({
    storefront,
    getCartId,
  });

  const result = await addDeliveryAddresses(
    [
      {
        address1: '<your-address1>',
        address2: '<your-address2>',
        city: '<your-city>',
        company: '<your-company>',
        countryCode: 'AC',
        firstName: '<your-firstName>',
        lastName: '<your-lastName>',
        phone: '<your-phone>',
        provinceCode: '<your-provinceCode>',
        zip: '<your-zip>',
        // other address fields...
      },
    ],
    {someOptionalParam: 'value'},
  );
  ```

***

---



<a id="latest-utilities-cart-cartdeliveryaddressesremove"></a>


## cartDeliveryAddressesRemove

Creates a function that accepts an array of delivery address IDs [ID](https://shopify.dev/docs/api/storefront/2026-01/scalars/ID) to remove from a cart

### cart​Delivery​Addresses​Remove​Default(**[options](#cartdeliveryaddressesremovedefault-propertydetail-options)**​)

Removes delivery addresses from the cart.

This function sends a mutation to the storefront API to remove one or more delivery addresses from the cart. It returns the result of the mutation, including any errors that occurred.

#### Parameters

* **options**

  **CartQueryOptions**

  **required**

  The options for the cart query, including the storefront API client and cart fragment.

#### Returns

* **CartDeliveryAddressesRemoveFunction**

  * A function that takes an array of address IDs and optional parameters, and returns the result of the API call.

#### CartQueryOptions

* cartFragment

  The cart fragment to override the one used in this query.

  ```ts
  string
  ```

* customerAccount

  The customer account instance created by \[\`createCustomerAccount\`]\(docs/api/hydrogen/latest/customer/createcustomeraccount).

  ```ts
  CustomerAccount
  ```

* getCartId

  A function that returns the cart ID.

  ```ts
  () => string
  ```

* storefront

  The storefront client instance created by \[\`createStorefrontClient\`]\(docs/api/hydrogen/latest/utilities/createstorefrontclient).

  ```ts
  Storefront
  ```

#### CustomerAccount

* authorize

  On successful login, the customer redirects back to your app. This function validates the OAuth response and exchanges the authorization code for an access token and refresh token. It also persists the tokens on your session. This function should be called and returned from the Remix loader configured as the redirect URI within the Customer Account API settings in admin.

  ```ts
  () => Promise<Response>
  ```

* getAccessToken

  Returns CustomerAccessToken if the customer is logged in. It also run a expiry check and does a token refresh if needed.

  ```ts
  () => Promise<string>
  ```

* getApiUrl

  Creates the fully-qualified URL to your store's GraphQL endpoint.

  ```ts
  () => string
  ```

* getBuyer

  Get buyer token and company location id from session.

  ```ts
  () => Promise<Partial<BuyerInput>>
  ```

* handleAuthStatus

  Check for a not logged in customer and redirect customer to login page. The redirect can be overwritten with \`customAuthStatusHandler\` option.

  ```ts
  () => Promise<void>
  ```

* i18n

  The i18n configuration for Customer Account API

  ```ts
  { language: LanguageCode; }
  ```

* isLoggedIn

  Returns if the customer is logged in. It also checks if the access token is expired and refreshes it if needed.

  ```ts
  () => Promise<boolean>
  ```

* login

  Start the OAuth login flow. This function should be called and returned from a Remix loader. It redirects the customer to a Shopify login domain. It also defined the final path the customer lands on at the end of the oAuth flow with the value of the \`return\_to\` query param. (This is automatically setup unless \`customAuthStatusHandler\` option is in use)

  ```ts
  (options?: LoginOptions) => Promise<Response>
  ```

* logout

  Logout the customer by clearing the session and redirecting to the login domain. It should be called and returned from a Remix action. The path app should redirect to after logout can be setup in Customer Account API settings in admin.

  ```ts
  (options?: LogoutOptions) => Promise<Response>
  ```

* mutate

  Execute a GraphQL mutation against the Customer Account API. This method execute \`handleAuthStatus()\` ahead of mutation.

  ```ts
  <
      OverrideReturnType extends any = never,
      RawGqlString extends string = string,
    >(
      mutation: RawGqlString,
      ...options: ClientVariablesInRestParams<
        CustomerAccountMutations,
        RawGqlString
      >
    ) => Promise<
      Omit<
        CustomerAPIResponse<
          ClientReturn<CustomerAccountMutations, RawGqlString, OverrideReturnType>
        >,
        'errors'
      > & {errors?: JsonGraphQLError[]}
    >
  ```

* query

  Execute a GraphQL query against the Customer Account API. This method execute \`handleAuthStatus()\` ahead of query.

  ```ts
  <
      OverrideReturnType extends any = never,
      RawGqlString extends string = string,
    >(
      query: RawGqlString,
      ...options: ClientVariablesInRestParams<
        CustomerAccountQueries,
        RawGqlString
      >
    ) => Promise<
      Omit<
        CustomerAPIResponse<
          ClientReturn<CustomerAccountQueries, RawGqlString, OverrideReturnType>
        >,
        'errors'
      > & {errors?: JsonGraphQLError[]}
    >
  ```

* setBuyer

  Set buyer information into session.

  ```ts
  (buyer: Partial<BuyerInput>) => void
  ```

* UNSTABLE\_getBuyer

  Deprecated. Please use getBuyer. Get buyer token and company location id from session.

  ```ts
  () => Promise<Partial<BuyerInput>>
  ```

* UNSTABLE\_setBuyer

  Deprecated. Please use setBuyer. Set buyer information into session.

  ```ts
  (buyer: Partial<BuyerInput>) => void
  ```

#### LoginOptions

* acrValues

  ```ts
  string
  ```

* countryCode

  ```ts
  CountryCode
  ```

* locale

  ```ts
  string
  ```

* loginHint

  ```ts
  string
  ```

* loginHintMode

  ```ts
  string
  ```

* uiLocales

  ```ts
  LanguageCode
  ```

#### LogoutOptions

* headers

  Add custom headers to the logout redirect.

  ```ts
  HeadersInit
  ```

* keepSession

  If true, custom data in the session will not be cleared on logout.

  ```ts
  boolean
  ```

* postLogoutRedirectUri

  The url to redirect customer to after logout, should be a relative URL. This url will need to included in Customer Account API's application setup for logout URI. The default value is current app origin, which is automatically setup in admin when using \`--customer-account-push\` flag with dev.

  ```ts
  string
  ```

#### CustomerAccountMutations



#### CustomerAPIResponse

* data

  ```ts
  ReturnType
  ```

* errors

  ```ts
  Array<{
      message: string;
      locations?: Array<{line: number; column: number}>;
      path?: Array<string>;
      extensions: {code: string};
    }>
  ```

* extensions

  ```ts
  { cost: { requestQueryCost: number; actualQueryCakes: number; throttleStatus: { maximumAvailable: number; currentAvailable: number; restoreRate: number; }; }; }
  ```

#### JsonGraphQLError

* extensions

  Reserved for implementors to extend the protocol however they see fit, and hence there are no additional restrictions on its contents.

  ```ts
  { [key: string]: unknown; }
  ```

* locations

  If an error can be associated to a particular point in the requested GraphQL document, it should contain a list of locations.

  ```ts
  { line: number; column: number; }[]
  ```

* message

  ```ts
  string
  ```

* name

  ```ts
  string
  ```

* path

  If an error can be associated to a particular field in the GraphQL result, it \_must\_ contain an entry with the key \`path\` that details the path of the response field which experienced the error. This allows clients to identify whether a null result is intentional or caused by a runtime error.

  ```ts
  (string | number)[]
  ```

* stack

  ```ts
  string
  ```

#### CustomerAccountQueries



#### Storefront

Interface to interact with the Storefront API.

* cache

  ```ts
  Cache
  ```

* CacheCustom

  ```ts
  (overrideOptions: AllCacheOptions) => AllCacheOptions
  ```

* CacheLong

  ```ts
  (overrideOptions?: AllCacheOptions) => AllCacheOptions
  ```

* CacheNone

  ```ts
  () => NoStoreStrategy
  ```

* CacheShort

  ```ts
  (overrideOptions?: AllCacheOptions) => AllCacheOptions
  ```

* forward

  Forwards the request to the Storefront API. It reads the API version from the request URL.

  ```ts
  (request: Request, options?: Pick<StorefrontCommonExtraParams, "storefrontApiVersion">) => Promise<Response>
  ```

* forwardMcp

  Forwards the request to the Storefront MCP endpoint.

  ```ts
  (request: Request) => Promise<Response>
  ```

* generateCacheControlHeader

  ```ts
  (cacheOptions: AllCacheOptions) => string
  ```

* getApiUrl

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "storefrontApiVersion" | "storeDomain">>) => string
  ```

* getHeaders

  ```ts
  () => Record<string, string>
  ```

* getPrivateTokenHeaders

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "contentType">> & Pick<StorefrontClientProps, "privateStorefrontToken"> & { buyerIp?: string; }) => Record<string, string>
  ```

* getPublicTokenHeaders

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "contentType">> & Pick<StorefrontClientProps, "publicStorefrontToken">) => Record<string, string>
  ```

* getShopifyDomain

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "storeDomain">>) => string
  ```

* i18n

  ```ts
  TI18n
  ```

* isMcpUrl

  Checks if the request URL matches the Storefront MCP endpoint.

  ```ts
  (request: { url?: string; }) => boolean
  ```

* isStorefrontApiUrl

  Checks if the request URL matches the Storefront API GraphQL endpoint.

  ```ts
  (request: { url?: string; }) => boolean
  ```

* mutate

  ```ts
  <
      OverrideReturnType extends any = never,
      RawGqlString extends string = string,
    >(
      mutation: RawGqlString,
      ...options: ClientVariablesInRestParams<
        StorefrontMutations,
        RawGqlString,
        StorefrontCommonExtraParams,
        AutoAddedVariableNames
      >
    ) => Promise<
      ClientReturn<StorefrontMutations, RawGqlString, OverrideReturnType> &
        StorefrontError
    >
  ```

* query

  ```ts
  <
      OverrideReturnType extends any = never,
      RawGqlString extends string = string,
    >(
      query: RawGqlString,
      ...options: ClientVariablesInRestParams<
        StorefrontQueries,
        RawGqlString,
        StorefrontCommonExtraParams & Pick<StorefrontQueryOptions, 'cache'>,
        AutoAddedVariableNames
      >
    ) => Promise<
      ClientReturn<StorefrontQueries, RawGqlString, OverrideReturnType> &
        StorefrontError
    >
  ```

* setCollectedSubrequestHeaders

  Sets the collected subrequest headers in the response. Useful to forward the cookies and server-timing headers from server subrequests to the browser.

  ```ts
  (response: { headers: Headers; }) => void
  ```

#### AllCacheOptions

Override options for a cache strategy.

* maxAge

  The maximum amount of time in seconds that a resource will be considered fresh. See \`max-age\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#:\~:text=Response%20Directives-,max%2Dage,-The%20max%2Dage).

  ```ts
  number
  ```

* mode

  The caching mode, generally \`public\`, \`private\`, or \`no-store\`.

  ```ts
  string
  ```

* sMaxAge

  Similar to \`maxAge\` but specific to shared caches. See \`s-maxage\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#s-maxage).

  ```ts
  number
  ```

* staleIfError

  Indicate that the cache should serve the stale response if an error occurs while revalidating the cache. See \`stale-if-error\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-if-error).

  ```ts
  number
  ```

* staleWhileRevalidate

  Indicate that the cache should serve the stale response in the background while revalidating the cache. See \`stale-while-revalidate\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-while-revalidate).

  ```ts
  number
  ```

#### NoStoreStrategy

* mode

  ```ts
  string
  ```

#### StorefrontCommonExtraParams

* displayName

  ```ts
  string
  ```

* headers

  ```ts
  HeadersInit
  ```

* storefrontApiVersion

  ```ts
  string
  ```

#### StorefrontClientProps

* contentType

  Customizes which \`"content-type"\` header is added when using \`getPrivateTokenHeaders()\` and \`getPublicTokenHeaders()\`. When fetching with a \`JSON.stringify()\`-ed \`body\`, use \`"json"\`. When fetching with a \`body\` that is a plain string, use \`"graphql"\`. Defaults to \`"json"\` Can also be customized on a call-by-call basis by passing in \`'contentType'\` to both \`getPrivateTokenHeaders({...})\` and \`getPublicTokenHeaders({...})\`, for example: \`getPublicTokenHeaders({contentType: 'graphql'})\`

  ```ts
  'json' | 'graphql'
  ```

* privateStorefrontToken

  The Storefront API delegate access token. Refer to the \[authentication]\(https://shopify.dev/api/storefront#authentication) and \[delegate access token]\(https://shopify.dev/apps/auth/oauth/delegate-access-tokens) documentation for more details.

  ```ts
  string
  ```

* publicStorefrontToken

  The Storefront API access token. Refer to the \[authentication]\(https://shopify.dev/api/storefront#authentication) documentation for more details.

  ```ts
  string
  ```

* storeDomain

  The host name of the domain (eg: \`{shop}.myshopify.com\`).

  ```ts
  string
  ```

* storefrontApiVersion

  The Storefront API version. This should almost always be the same as the version Hydrogen React was built for. Learn more about Shopify \[API versioning]\(https://shopify.dev/api/usage/versioning) for more details.

  ```ts
  string
  ```

#### StorefrontMutations

Maps all the mutations found in the project to variables and return types.



#### AutoAddedVariableNames

```ts
'country' | 'language'
```

#### StorefrontError

* errors

  ```ts
  StorefrontApiErrors
  ```

#### StorefrontApiErrors

```ts
JsonGraphQLError[] | undefined
```

#### StorefrontQueries

Maps all the queries found in the project to variables and return types.



#### StorefrontQueryOptions

```ts
StorefrontCommonExtraParams & {
  query: string;
  mutation?: never;
  cache?: CachingStrategy;
}
```

#### CachingStrategy

Use the \`CachingStrategy\` to define a custom caching mechanism for your data. Or use one of the pre-defined caching strategies: CacheNone, CacheShort, CacheLong.

* maxAge

  The maximum amount of time in seconds that a resource will be considered fresh. See \`max-age\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#:\~:text=Response%20Directives-,max%2Dage,-The%20max%2Dage).

  ```ts
  number
  ```

* mode

  The caching mode, generally \`public\`, \`private\`, or \`no-store\`.

  ```ts
  string
  ```

* sMaxAge

  Similar to \`maxAge\` but specific to shared caches. See \`s-maxage\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#s-maxage).

  ```ts
  number
  ```

* staleIfError

  Indicate that the cache should serve the stale response if an error occurs while revalidating the cache. See \`stale-if-error\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-if-error).

  ```ts
  number
  ```

* staleWhileRevalidate

  Indicate that the cache should serve the stale response in the background while revalidating the cache. See \`stale-while-revalidate\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-while-revalidate).

  ```ts
  number
  ```

#### Headers



#### CartDeliveryAddressesRemoveFunction

* addressIds

  ```ts
  string[]
  ```

* optionalParams

  ```ts
  CartOptionalInput
  ```

returns

```ts
Promise<CartQueryDataReturn>
```

#### CartOptionalInput

* cartId

  The cart id.

  ```ts
  string
  ```

* country

  The country code.

  ```ts
  CountryCode
  ```

* language

  The language code.

  ```ts
  LanguageCode
  ```

* visitorConsent

  Visitor consent preferences for the Storefront API's

  ```ts
  VisitorConsent
  ```

#### VisitorConsent

* analytics

  ```ts
  ConsentStatus
  ```

* marketing

  ```ts
  ConsentStatus
  ```

* preferences

  ```ts
  ConsentStatus
  ```

* sale\_of\_data

  ```ts
  ConsentStatus
  ```

#### ConsentStatus

```ts
boolean | undefined
```

#### CartQueryDataReturn

```ts
CartQueryData & {
  errors?: StorefrontApiErrors;
}
```

#### CartQueryData

* cart

  ```ts
  Cart
  ```

* userErrors

  ```ts
  | CartUserError[]
      | MetafieldsSetUserError[]
      | MetafieldDeleteUserError[]
  ```

* warnings

  ```ts
  CartWarning[]
  ```

#### Cart

* attributes

  The cart's attributes.

  ```ts
  { __typename?: "Attribute"; key?: string; value?: string; }[]
  ```

* buyerIdentity

  The cart's buyer identity.

  ```ts
  CartType['buyerIdentity']
  ```

* checkoutUrl

  The checkout URL for the cart, if the cart has been created in the Storefront API.

  ```ts
  string
  ```

* cost

  The cost for the cart, including the subtotal, total, taxes, and duties.

  ```ts
  CartType['cost']
  ```

* discountCodes

  The discount codes applied to the cart.

  ```ts
  { __typename?: "CartDiscountCode"; applicable?: boolean; code?: string; }[]
  ```

* id

  The cart's ID if it has been created through the Storefront API.

  ```ts
  string
  ```

* lines

  The cart lines.

  ```ts
  Array<CartLine | ComponentizableCartLine>
  ```

* note

  The cart's note.

  ```ts
  string
  ```

* totalQuantity

  The total number of items in the cart, across all lines. If there are no lines, then the value is 0.

  ```ts
  number
  ```

#### CartUserError



#### MetafieldsSetUserError



#### MetafieldDeleteUserError



#### CartWarning



Examples

#### Examples

* ####

  ##### JavaScript

  ```js
  import {cartDeliveryAddressesRemoveDefault} from '@shopify/hydrogen';

  const removeDeliveryAddresses = cartDeliveryAddressesRemoveDefault({
    storefront,
    getCartId,
  });

  const result = await removeDeliveryAddresses(
    ['gid://shopify/<objectName>/10079785100'],
    {someOptionalParam: 'value'},
  );
  ```

***

---



<a id="latest-utilities-cart-cartdeliveryaddressesreplace"></a>


## cartDeliveryAddressesReplace

Creates a function that accepts an array of [CartSelectableAddressInput](https://shopify.dev/docs/api/storefront/2026-01/input-objects/CartSelectableAddressInput) to replace all delivery addresses on a cart

### cart​Delivery​Addresses​Replace​Default(**[options](#cartdeliveryaddressesreplacedefault-propertydetail-options)**​)

Replaces all delivery addresses on the cart.

This function sends a mutation to the storefront API to replace all delivery addresses on the cart with the provided addresses. It returns the result of the mutation, including any errors that occurred.

#### Parameters

* **options**

  **CartQueryOptions**

  **required**

  The options for the cart query, including the storefront API client and cart fragment.

#### Returns

* **CartDeliveryAddressesReplaceFunction**

  * A function that takes an array of addresses and optional parameters, and returns the result of the API call.

#### CartQueryOptions

* cartFragment

  The cart fragment to override the one used in this query.

  ```ts
  string
  ```

* customerAccount

  The customer account instance created by \[\`createCustomerAccount\`]\(docs/api/hydrogen/latest/customer/createcustomeraccount).

  ```ts
  CustomerAccount
  ```

* getCartId

  A function that returns the cart ID.

  ```ts
  () => string
  ```

* storefront

  The storefront client instance created by \[\`createStorefrontClient\`]\(docs/api/hydrogen/latest/utilities/createstorefrontclient).

  ```ts
  Storefront
  ```

#### CustomerAccount

* authorize

  On successful login, the customer redirects back to your app. This function validates the OAuth response and exchanges the authorization code for an access token and refresh token. It also persists the tokens on your session. This function should be called and returned from the Remix loader configured as the redirect URI within the Customer Account API settings in admin.

  ```ts
  () => Promise<Response>
  ```

* getAccessToken

  Returns CustomerAccessToken if the customer is logged in. It also run a expiry check and does a token refresh if needed.

  ```ts
  () => Promise<string>
  ```

* getApiUrl

  Creates the fully-qualified URL to your store's GraphQL endpoint.

  ```ts
  () => string
  ```

* getBuyer

  Get buyer token and company location id from session.

  ```ts
  () => Promise<Partial<BuyerInput>>
  ```

* handleAuthStatus

  Check for a not logged in customer and redirect customer to login page. The redirect can be overwritten with \`customAuthStatusHandler\` option.

  ```ts
  () => Promise<void>
  ```

* i18n

  The i18n configuration for Customer Account API

  ```ts
  { language: LanguageCode; }
  ```

* isLoggedIn

  Returns if the customer is logged in. It also checks if the access token is expired and refreshes it if needed.

  ```ts
  () => Promise<boolean>
  ```

* login

  Start the OAuth login flow. This function should be called and returned from a Remix loader. It redirects the customer to a Shopify login domain. It also defined the final path the customer lands on at the end of the oAuth flow with the value of the \`return\_to\` query param. (This is automatically setup unless \`customAuthStatusHandler\` option is in use)

  ```ts
  (options?: LoginOptions) => Promise<Response>
  ```

* logout

  Logout the customer by clearing the session and redirecting to the login domain. It should be called and returned from a Remix action. The path app should redirect to after logout can be setup in Customer Account API settings in admin.

  ```ts
  (options?: LogoutOptions) => Promise<Response>
  ```

* mutate

  Execute a GraphQL mutation against the Customer Account API. This method execute \`handleAuthStatus()\` ahead of mutation.

  ```ts
  <
      OverrideReturnType extends any = never,
      RawGqlString extends string = string,
    >(
      mutation: RawGqlString,
      ...options: ClientVariablesInRestParams<
        CustomerAccountMutations,
        RawGqlString
      >
    ) => Promise<
      Omit<
        CustomerAPIResponse<
          ClientReturn<CustomerAccountMutations, RawGqlString, OverrideReturnType>
        >,
        'errors'
      > & {errors?: JsonGraphQLError[]}
    >
  ```

* query

  Execute a GraphQL query against the Customer Account API. This method execute \`handleAuthStatus()\` ahead of query.

  ```ts
  <
      OverrideReturnType extends any = never,
      RawGqlString extends string = string,
    >(
      query: RawGqlString,
      ...options: ClientVariablesInRestParams<
        CustomerAccountQueries,
        RawGqlString
      >
    ) => Promise<
      Omit<
        CustomerAPIResponse<
          ClientReturn<CustomerAccountQueries, RawGqlString, OverrideReturnType>
        >,
        'errors'
      > & {errors?: JsonGraphQLError[]}
    >
  ```

* setBuyer

  Set buyer information into session.

  ```ts
  (buyer: Partial<BuyerInput>) => void
  ```

* UNSTABLE\_getBuyer

  Deprecated. Please use getBuyer. Get buyer token and company location id from session.

  ```ts
  () => Promise<Partial<BuyerInput>>
  ```

* UNSTABLE\_setBuyer

  Deprecated. Please use setBuyer. Set buyer information into session.

  ```ts
  (buyer: Partial<BuyerInput>) => void
  ```

#### LoginOptions

* acrValues

  ```ts
  string
  ```

* countryCode

  ```ts
  CountryCode
  ```

* locale

  ```ts
  string
  ```

* loginHint

  ```ts
  string
  ```

* loginHintMode

  ```ts
  string
  ```

* uiLocales

  ```ts
  LanguageCode
  ```

#### LogoutOptions

* headers

  Add custom headers to the logout redirect.

  ```ts
  HeadersInit
  ```

* keepSession

  If true, custom data in the session will not be cleared on logout.

  ```ts
  boolean
  ```

* postLogoutRedirectUri

  The url to redirect customer to after logout, should be a relative URL. This url will need to included in Customer Account API's application setup for logout URI. The default value is current app origin, which is automatically setup in admin when using \`--customer-account-push\` flag with dev.

  ```ts
  string
  ```

#### CustomerAccountMutations



#### CustomerAPIResponse

* data

  ```ts
  ReturnType
  ```

* errors

  ```ts
  Array<{
      message: string;
      locations?: Array<{line: number; column: number}>;
      path?: Array<string>;
      extensions: {code: string};
    }>
  ```

* extensions

  ```ts
  { cost: { requestQueryCost: number; actualQueryCakes: number; throttleStatus: { maximumAvailable: number; currentAvailable: number; restoreRate: number; }; }; }
  ```

#### JsonGraphQLError

* extensions

  Reserved for implementors to extend the protocol however they see fit, and hence there are no additional restrictions on its contents.

  ```ts
  { [key: string]: unknown; }
  ```

* locations

  If an error can be associated to a particular point in the requested GraphQL document, it should contain a list of locations.

  ```ts
  { line: number; column: number; }[]
  ```

* message

  ```ts
  string
  ```

* name

  ```ts
  string
  ```

* path

  If an error can be associated to a particular field in the GraphQL result, it \_must\_ contain an entry with the key \`path\` that details the path of the response field which experienced the error. This allows clients to identify whether a null result is intentional or caused by a runtime error.

  ```ts
  (string | number)[]
  ```

* stack

  ```ts
  string
  ```

#### CustomerAccountQueries



#### Storefront

Interface to interact with the Storefront API.

* cache

  ```ts
  Cache
  ```

* CacheCustom

  ```ts
  (overrideOptions: AllCacheOptions) => AllCacheOptions
  ```

* CacheLong

  ```ts
  (overrideOptions?: AllCacheOptions) => AllCacheOptions
  ```

* CacheNone

  ```ts
  () => NoStoreStrategy
  ```

* CacheShort

  ```ts
  (overrideOptions?: AllCacheOptions) => AllCacheOptions
  ```

* forward

  Forwards the request to the Storefront API. It reads the API version from the request URL.

  ```ts
  (request: Request, options?: Pick<StorefrontCommonExtraParams, "storefrontApiVersion">) => Promise<Response>
  ```

* forwardMcp

  Forwards the request to the Storefront MCP endpoint.

  ```ts
  (request: Request) => Promise<Response>
  ```

* generateCacheControlHeader

  ```ts
  (cacheOptions: AllCacheOptions) => string
  ```

* getApiUrl

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "storefrontApiVersion" | "storeDomain">>) => string
  ```

* getHeaders

  ```ts
  () => Record<string, string>
  ```

* getPrivateTokenHeaders

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "contentType">> & Pick<StorefrontClientProps, "privateStorefrontToken"> & { buyerIp?: string; }) => Record<string, string>
  ```

* getPublicTokenHeaders

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "contentType">> & Pick<StorefrontClientProps, "publicStorefrontToken">) => Record<string, string>
  ```

* getShopifyDomain

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "storeDomain">>) => string
  ```

* i18n

  ```ts
  TI18n
  ```

* isMcpUrl

  Checks if the request URL matches the Storefront MCP endpoint.

  ```ts
  (request: { url?: string; }) => boolean
  ```

* isStorefrontApiUrl

  Checks if the request URL matches the Storefront API GraphQL endpoint.

  ```ts
  (request: { url?: string; }) => boolean
  ```

* mutate

  ```ts
  <
      OverrideReturnType extends any = never,
      RawGqlString extends string = string,
    >(
      mutation: RawGqlString,
      ...options: ClientVariablesInRestParams<
        StorefrontMutations,
        RawGqlString,
        StorefrontCommonExtraParams,
        AutoAddedVariableNames
      >
    ) => Promise<
      ClientReturn<StorefrontMutations, RawGqlString, OverrideReturnType> &
        StorefrontError
    >
  ```

* query

  ```ts
  <
      OverrideReturnType extends any = never,
      RawGqlString extends string = string,
    >(
      query: RawGqlString,
      ...options: ClientVariablesInRestParams<
        StorefrontQueries,
        RawGqlString,
        StorefrontCommonExtraParams & Pick<StorefrontQueryOptions, 'cache'>,
        AutoAddedVariableNames
      >
    ) => Promise<
      ClientReturn<StorefrontQueries, RawGqlString, OverrideReturnType> &
        StorefrontError
    >
  ```

* setCollectedSubrequestHeaders

  Sets the collected subrequest headers in the response. Useful to forward the cookies and server-timing headers from server subrequests to the browser.

  ```ts
  (response: { headers: Headers; }) => void
  ```

#### AllCacheOptions

Override options for a cache strategy.

* maxAge

  The maximum amount of time in seconds that a resource will be considered fresh. See \`max-age\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#:\~:text=Response%20Directives-,max%2Dage,-The%20max%2Dage).

  ```ts
  number
  ```

* mode

  The caching mode, generally \`public\`, \`private\`, or \`no-store\`.

  ```ts
  string
  ```

* sMaxAge

  Similar to \`maxAge\` but specific to shared caches. See \`s-maxage\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#s-maxage).

  ```ts
  number
  ```

* staleIfError

  Indicate that the cache should serve the stale response if an error occurs while revalidating the cache. See \`stale-if-error\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-if-error).

  ```ts
  number
  ```

* staleWhileRevalidate

  Indicate that the cache should serve the stale response in the background while revalidating the cache. See \`stale-while-revalidate\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-while-revalidate).

  ```ts
  number
  ```

#### NoStoreStrategy

* mode

  ```ts
  string
  ```

#### StorefrontCommonExtraParams

* displayName

  ```ts
  string
  ```

* headers

  ```ts
  HeadersInit
  ```

* storefrontApiVersion

  ```ts
  string
  ```

#### StorefrontClientProps

* contentType

  Customizes which \`"content-type"\` header is added when using \`getPrivateTokenHeaders()\` and \`getPublicTokenHeaders()\`. When fetching with a \`JSON.stringify()\`-ed \`body\`, use \`"json"\`. When fetching with a \`body\` that is a plain string, use \`"graphql"\`. Defaults to \`"json"\` Can also be customized on a call-by-call basis by passing in \`'contentType'\` to both \`getPrivateTokenHeaders({...})\` and \`getPublicTokenHeaders({...})\`, for example: \`getPublicTokenHeaders({contentType: 'graphql'})\`

  ```ts
  'json' | 'graphql'
  ```

* privateStorefrontToken

  The Storefront API delegate access token. Refer to the \[authentication]\(https://shopify.dev/api/storefront#authentication) and \[delegate access token]\(https://shopify.dev/apps/auth/oauth/delegate-access-tokens) documentation for more details.

  ```ts
  string
  ```

* publicStorefrontToken

  The Storefront API access token. Refer to the \[authentication]\(https://shopify.dev/api/storefront#authentication) documentation for more details.

  ```ts
  string
  ```

* storeDomain

  The host name of the domain (eg: \`{shop}.myshopify.com\`).

  ```ts
  string
  ```

* storefrontApiVersion

  The Storefront API version. This should almost always be the same as the version Hydrogen React was built for. Learn more about Shopify \[API versioning]\(https://shopify.dev/api/usage/versioning) for more details.

  ```ts
  string
  ```

#### StorefrontMutations

Maps all the mutations found in the project to variables and return types.



#### AutoAddedVariableNames

```ts
'country' | 'language'
```

#### StorefrontError

* errors

  ```ts
  StorefrontApiErrors
  ```

#### StorefrontApiErrors

```ts
JsonGraphQLError[] | undefined
```

#### StorefrontQueries

Maps all the queries found in the project to variables and return types.



#### StorefrontQueryOptions

```ts
StorefrontCommonExtraParams & {
  query: string;
  mutation?: never;
  cache?: CachingStrategy;
}
```

#### CachingStrategy

Use the \`CachingStrategy\` to define a custom caching mechanism for your data. Or use one of the pre-defined caching strategies: CacheNone, CacheShort, CacheLong.

* maxAge

  The maximum amount of time in seconds that a resource will be considered fresh. See \`max-age\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#:\~:text=Response%20Directives-,max%2Dage,-The%20max%2Dage).

  ```ts
  number
  ```

* mode

  The caching mode, generally \`public\`, \`private\`, or \`no-store\`.

  ```ts
  string
  ```

* sMaxAge

  Similar to \`maxAge\` but specific to shared caches. See \`s-maxage\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#s-maxage).

  ```ts
  number
  ```

* staleIfError

  Indicate that the cache should serve the stale response if an error occurs while revalidating the cache. See \`stale-if-error\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-if-error).

  ```ts
  number
  ```

* staleWhileRevalidate

  Indicate that the cache should serve the stale response in the background while revalidating the cache. See \`stale-while-revalidate\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-while-revalidate).

  ```ts
  number
  ```

#### Headers



#### CartDeliveryAddressesReplaceFunction

* addresses

  ```ts
  CartSelectableAddressInput[]
  ```

* optionalParams

  ```ts
  CartOptionalInput
  ```

returns

```ts
Promise<CartQueryDataReturn>
```

#### CartOptionalInput

* cartId

  The cart id.

  ```ts
  string
  ```

* country

  The country code.

  ```ts
  CountryCode
  ```

* language

  The language code.

  ```ts
  LanguageCode
  ```

* visitorConsent

  Visitor consent preferences for the Storefront API's

  ```ts
  VisitorConsent
  ```

#### VisitorConsent

* analytics

  ```ts
  ConsentStatus
  ```

* marketing

  ```ts
  ConsentStatus
  ```

* preferences

  ```ts
  ConsentStatus
  ```

* sale\_of\_data

  ```ts
  ConsentStatus
  ```

#### ConsentStatus

```ts
boolean | undefined
```

#### CartQueryDataReturn

```ts
CartQueryData & {
  errors?: StorefrontApiErrors;
}
```

#### CartQueryData

* cart

  ```ts
  Cart
  ```

* userErrors

  ```ts
  | CartUserError[]
      | MetafieldsSetUserError[]
      | MetafieldDeleteUserError[]
  ```

* warnings

  ```ts
  CartWarning[]
  ```

#### Cart

* attributes

  The cart's attributes.

  ```ts
  { __typename?: "Attribute"; key?: string; value?: string; }[]
  ```

* buyerIdentity

  The cart's buyer identity.

  ```ts
  CartType['buyerIdentity']
  ```

* checkoutUrl

  The checkout URL for the cart, if the cart has been created in the Storefront API.

  ```ts
  string
  ```

* cost

  The cost for the cart, including the subtotal, total, taxes, and duties.

  ```ts
  CartType['cost']
  ```

* discountCodes

  The discount codes applied to the cart.

  ```ts
  { __typename?: "CartDiscountCode"; applicable?: boolean; code?: string; }[]
  ```

* id

  The cart's ID if it has been created through the Storefront API.

  ```ts
  string
  ```

* lines

  The cart lines.

  ```ts
  Array<CartLine | ComponentizableCartLine>
  ```

* note

  The cart's note.

  ```ts
  string
  ```

* totalQuantity

  The total number of items in the cart, across all lines. If there are no lines, then the value is 0.

  ```ts
  number
  ```

#### CartUserError



#### MetafieldsSetUserError



#### MetafieldDeleteUserError



#### CartWarning



Examples

#### Examples

* ####

  ##### Description

  Replace all delivery addresses on a cart with a new set of addresses

  ##### JavaScript

  ```js
  import {cartDeliveryAddressesReplaceDefault} from '@shopify/hydrogen';

  const replaceDeliveryAddresses = cartDeliveryAddressesReplaceDefault({
    storefront,
    getCartId,
  });

  const result = await replaceDeliveryAddresses(
    [
      {
        address: {
          deliveryAddress: {
            address1: '<your-address1>',
            address2: '<your-address2>',
            city: '<your-city>',
            company: '<your-company>',
            countryCode: 'AC',
            firstName: '<your-firstName>',
            lastName: '<your-lastName>',
            phone: '<your-phone>',
            provinceCode: '<your-provinceCode>',
            zip: '<your-zip>',
          },
        },
        selected: true,
      },
    ],
    {someOptionalParam: 'value'},
  );
  ```

***

---



<a id="latest-utilities-cart-cartdeliveryaddressesupdate"></a>


## cartDeliveryAddressesUpdate

Creates a function that accepts an array of selectable delivery addresses [CartSelectableAddressUpdateInput](https://shopify.dev/docs/api/storefront/2026-01/input-objects/CartSelectableAddressUpdateInput) to update in a cart

### cart​Delivery​Addresses​Update​Default(**[options](#cartdeliveryaddressesupdatedefault-propertydetail-options)**​)

Updates delivery addresses in the cart.

Pass an empty array to clear all delivery addresses from the cart.

#### Parameters

* **options**

  **CartQueryOptions**

  **required**

  The options for the cart query, including the storefront API client and cart fragment.

#### Returns

* **CartDeliveryAddressesUpdateFunction**

  * A function that takes an array of addresses and optional parameters, and returns the result of the API call.

#### CartQueryOptions

* cartFragment

  The cart fragment to override the one used in this query.

  ```ts
  string
  ```

* customerAccount

  The customer account instance created by \[\`createCustomerAccount\`]\(docs/api/hydrogen/latest/customer/createcustomeraccount).

  ```ts
  CustomerAccount
  ```

* getCartId

  A function that returns the cart ID.

  ```ts
  () => string
  ```

* storefront

  The storefront client instance created by \[\`createStorefrontClient\`]\(docs/api/hydrogen/latest/utilities/createstorefrontclient).

  ```ts
  Storefront
  ```

#### CustomerAccount

* authorize

  On successful login, the customer redirects back to your app. This function validates the OAuth response and exchanges the authorization code for an access token and refresh token. It also persists the tokens on your session. This function should be called and returned from the Remix loader configured as the redirect URI within the Customer Account API settings in admin.

  ```ts
  () => Promise<Response>
  ```

* getAccessToken

  Returns CustomerAccessToken if the customer is logged in. It also run a expiry check and does a token refresh if needed.

  ```ts
  () => Promise<string>
  ```

* getApiUrl

  Creates the fully-qualified URL to your store's GraphQL endpoint.

  ```ts
  () => string
  ```

* getBuyer

  Get buyer token and company location id from session.

  ```ts
  () => Promise<Partial<BuyerInput>>
  ```

* handleAuthStatus

  Check for a not logged in customer and redirect customer to login page. The redirect can be overwritten with \`customAuthStatusHandler\` option.

  ```ts
  () => Promise<void>
  ```

* i18n

  The i18n configuration for Customer Account API

  ```ts
  { language: LanguageCode; }
  ```

* isLoggedIn

  Returns if the customer is logged in. It also checks if the access token is expired and refreshes it if needed.

  ```ts
  () => Promise<boolean>
  ```

* login

  Start the OAuth login flow. This function should be called and returned from a Remix loader. It redirects the customer to a Shopify login domain. It also defined the final path the customer lands on at the end of the oAuth flow with the value of the \`return\_to\` query param. (This is automatically setup unless \`customAuthStatusHandler\` option is in use)

  ```ts
  (options?: LoginOptions) => Promise<Response>
  ```

* logout

  Logout the customer by clearing the session and redirecting to the login domain. It should be called and returned from a Remix action. The path app should redirect to after logout can be setup in Customer Account API settings in admin.

  ```ts
  (options?: LogoutOptions) => Promise<Response>
  ```

* mutate

  Execute a GraphQL mutation against the Customer Account API. This method execute \`handleAuthStatus()\` ahead of mutation.

  ```ts
  <
      OverrideReturnType extends any = never,
      RawGqlString extends string = string,
    >(
      mutation: RawGqlString,
      ...options: ClientVariablesInRestParams<
        CustomerAccountMutations,
        RawGqlString
      >
    ) => Promise<
      Omit<
        CustomerAPIResponse<
          ClientReturn<CustomerAccountMutations, RawGqlString, OverrideReturnType>
        >,
        'errors'
      > & {errors?: JsonGraphQLError[]}
    >
  ```

* query

  Execute a GraphQL query against the Customer Account API. This method execute \`handleAuthStatus()\` ahead of query.

  ```ts
  <
      OverrideReturnType extends any = never,
      RawGqlString extends string = string,
    >(
      query: RawGqlString,
      ...options: ClientVariablesInRestParams<
        CustomerAccountQueries,
        RawGqlString
      >
    ) => Promise<
      Omit<
        CustomerAPIResponse<
          ClientReturn<CustomerAccountQueries, RawGqlString, OverrideReturnType>
        >,
        'errors'
      > & {errors?: JsonGraphQLError[]}
    >
  ```

* setBuyer

  Set buyer information into session.

  ```ts
  (buyer: Partial<BuyerInput>) => void
  ```

* UNSTABLE\_getBuyer

  Deprecated. Please use getBuyer. Get buyer token and company location id from session.

  ```ts
  () => Promise<Partial<BuyerInput>>
  ```

* UNSTABLE\_setBuyer

  Deprecated. Please use setBuyer. Set buyer information into session.

  ```ts
  (buyer: Partial<BuyerInput>) => void
  ```

#### LoginOptions

* acrValues

  ```ts
  string
  ```

* countryCode

  ```ts
  CountryCode
  ```

* locale

  ```ts
  string
  ```

* loginHint

  ```ts
  string
  ```

* loginHintMode

  ```ts
  string
  ```

* uiLocales

  ```ts
  LanguageCode
  ```

#### LogoutOptions

* headers

  Add custom headers to the logout redirect.

  ```ts
  HeadersInit
  ```

* keepSession

  If true, custom data in the session will not be cleared on logout.

  ```ts
  boolean
  ```

* postLogoutRedirectUri

  The url to redirect customer to after logout, should be a relative URL. This url will need to included in Customer Account API's application setup for logout URI. The default value is current app origin, which is automatically setup in admin when using \`--customer-account-push\` flag with dev.

  ```ts
  string
  ```

#### CustomerAccountMutations



#### CustomerAPIResponse

* data

  ```ts
  ReturnType
  ```

* errors

  ```ts
  Array<{
      message: string;
      locations?: Array<{line: number; column: number}>;
      path?: Array<string>;
      extensions: {code: string};
    }>
  ```

* extensions

  ```ts
  { cost: { requestQueryCost: number; actualQueryCakes: number; throttleStatus: { maximumAvailable: number; currentAvailable: number; restoreRate: number; }; }; }
  ```

#### JsonGraphQLError

* extensions

  Reserved for implementors to extend the protocol however they see fit, and hence there are no additional restrictions on its contents.

  ```ts
  { [key: string]: unknown; }
  ```

* locations

  If an error can be associated to a particular point in the requested GraphQL document, it should contain a list of locations.

  ```ts
  { line: number; column: number; }[]
  ```

* message

  ```ts
  string
  ```

* name

  ```ts
  string
  ```

* path

  If an error can be associated to a particular field in the GraphQL result, it \_must\_ contain an entry with the key \`path\` that details the path of the response field which experienced the error. This allows clients to identify whether a null result is intentional or caused by a runtime error.

  ```ts
  (string | number)[]
  ```

* stack

  ```ts
  string
  ```

#### CustomerAccountQueries



#### Storefront

Interface to interact with the Storefront API.

* cache

  ```ts
  Cache
  ```

* CacheCustom

  ```ts
  (overrideOptions: AllCacheOptions) => AllCacheOptions
  ```

* CacheLong

  ```ts
  (overrideOptions?: AllCacheOptions) => AllCacheOptions
  ```

* CacheNone

  ```ts
  () => NoStoreStrategy
  ```

* CacheShort

  ```ts
  (overrideOptions?: AllCacheOptions) => AllCacheOptions
  ```

* forward

  Forwards the request to the Storefront API. It reads the API version from the request URL.

  ```ts
  (request: Request, options?: Pick<StorefrontCommonExtraParams, "storefrontApiVersion">) => Promise<Response>
  ```

* forwardMcp

  Forwards the request to the Storefront MCP endpoint.

  ```ts
  (request: Request) => Promise<Response>
  ```

* generateCacheControlHeader

  ```ts
  (cacheOptions: AllCacheOptions) => string
  ```

* getApiUrl

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "storefrontApiVersion" | "storeDomain">>) => string
  ```

* getHeaders

  ```ts
  () => Record<string, string>
  ```

* getPrivateTokenHeaders

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "contentType">> & Pick<StorefrontClientProps, "privateStorefrontToken"> & { buyerIp?: string; }) => Record<string, string>
  ```

* getPublicTokenHeaders

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "contentType">> & Pick<StorefrontClientProps, "publicStorefrontToken">) => Record<string, string>
  ```

* getShopifyDomain

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "storeDomain">>) => string
  ```

* i18n

  ```ts
  TI18n
  ```

* isMcpUrl

  Checks if the request URL matches the Storefront MCP endpoint.

  ```ts
  (request: { url?: string; }) => boolean
  ```

* isStorefrontApiUrl

  Checks if the request URL matches the Storefront API GraphQL endpoint.

  ```ts
  (request: { url?: string; }) => boolean
  ```

* mutate

  ```ts
  <
      OverrideReturnType extends any = never,
      RawGqlString extends string = string,
    >(
      mutation: RawGqlString,
      ...options: ClientVariablesInRestParams<
        StorefrontMutations,
        RawGqlString,
        StorefrontCommonExtraParams,
        AutoAddedVariableNames
      >
    ) => Promise<
      ClientReturn<StorefrontMutations, RawGqlString, OverrideReturnType> &
        StorefrontError
    >
  ```

* query

  ```ts
  <
      OverrideReturnType extends any = never,
      RawGqlString extends string = string,
    >(
      query: RawGqlString,
      ...options: ClientVariablesInRestParams<
        StorefrontQueries,
        RawGqlString,
        StorefrontCommonExtraParams & Pick<StorefrontQueryOptions, 'cache'>,
        AutoAddedVariableNames
      >
    ) => Promise<
      ClientReturn<StorefrontQueries, RawGqlString, OverrideReturnType> &
        StorefrontError
    >
  ```

* setCollectedSubrequestHeaders

  Sets the collected subrequest headers in the response. Useful to forward the cookies and server-timing headers from server subrequests to the browser.

  ```ts
  (response: { headers: Headers; }) => void
  ```

#### AllCacheOptions

Override options for a cache strategy.

* maxAge

  The maximum amount of time in seconds that a resource will be considered fresh. See \`max-age\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#:\~:text=Response%20Directives-,max%2Dage,-The%20max%2Dage).

  ```ts
  number
  ```

* mode

  The caching mode, generally \`public\`, \`private\`, or \`no-store\`.

  ```ts
  string
  ```

* sMaxAge

  Similar to \`maxAge\` but specific to shared caches. See \`s-maxage\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#s-maxage).

  ```ts
  number
  ```

* staleIfError

  Indicate that the cache should serve the stale response if an error occurs while revalidating the cache. See \`stale-if-error\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-if-error).

  ```ts
  number
  ```

* staleWhileRevalidate

  Indicate that the cache should serve the stale response in the background while revalidating the cache. See \`stale-while-revalidate\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-while-revalidate).

  ```ts
  number
  ```

#### NoStoreStrategy

* mode

  ```ts
  string
  ```

#### StorefrontCommonExtraParams

* displayName

  ```ts
  string
  ```

* headers

  ```ts
  HeadersInit
  ```

* storefrontApiVersion

  ```ts
  string
  ```

#### StorefrontClientProps

* contentType

  Customizes which \`"content-type"\` header is added when using \`getPrivateTokenHeaders()\` and \`getPublicTokenHeaders()\`. When fetching with a \`JSON.stringify()\`-ed \`body\`, use \`"json"\`. When fetching with a \`body\` that is a plain string, use \`"graphql"\`. Defaults to \`"json"\` Can also be customized on a call-by-call basis by passing in \`'contentType'\` to both \`getPrivateTokenHeaders({...})\` and \`getPublicTokenHeaders({...})\`, for example: \`getPublicTokenHeaders({contentType: 'graphql'})\`

  ```ts
  'json' | 'graphql'
  ```

* privateStorefrontToken

  The Storefront API delegate access token. Refer to the \[authentication]\(https://shopify.dev/api/storefront#authentication) and \[delegate access token]\(https://shopify.dev/apps/auth/oauth/delegate-access-tokens) documentation for more details.

  ```ts
  string
  ```

* publicStorefrontToken

  The Storefront API access token. Refer to the \[authentication]\(https://shopify.dev/api/storefront#authentication) documentation for more details.

  ```ts
  string
  ```

* storeDomain

  The host name of the domain (eg: \`{shop}.myshopify.com\`).

  ```ts
  string
  ```

* storefrontApiVersion

  The Storefront API version. This should almost always be the same as the version Hydrogen React was built for. Learn more about Shopify \[API versioning]\(https://shopify.dev/api/usage/versioning) for more details.

  ```ts
  string
  ```

#### StorefrontMutations

Maps all the mutations found in the project to variables and return types.



#### AutoAddedVariableNames

```ts
'country' | 'language'
```

#### StorefrontError

* errors

  ```ts
  StorefrontApiErrors
  ```

#### StorefrontApiErrors

```ts
JsonGraphQLError[] | undefined
```

#### StorefrontQueries

Maps all the queries found in the project to variables and return types.



#### StorefrontQueryOptions

```ts
StorefrontCommonExtraParams & {
  query: string;
  mutation?: never;
  cache?: CachingStrategy;
}
```

#### CachingStrategy

Use the \`CachingStrategy\` to define a custom caching mechanism for your data. Or use one of the pre-defined caching strategies: CacheNone, CacheShort, CacheLong.

* maxAge

  The maximum amount of time in seconds that a resource will be considered fresh. See \`max-age\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#:\~:text=Response%20Directives-,max%2Dage,-The%20max%2Dage).

  ```ts
  number
  ```

* mode

  The caching mode, generally \`public\`, \`private\`, or \`no-store\`.

  ```ts
  string
  ```

* sMaxAge

  Similar to \`maxAge\` but specific to shared caches. See \`s-maxage\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#s-maxage).

  ```ts
  number
  ```

* staleIfError

  Indicate that the cache should serve the stale response if an error occurs while revalidating the cache. See \`stale-if-error\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-if-error).

  ```ts
  number
  ```

* staleWhileRevalidate

  Indicate that the cache should serve the stale response in the background while revalidating the cache. See \`stale-while-revalidate\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-while-revalidate).

  ```ts
  number
  ```

#### Headers



#### CartDeliveryAddressesUpdateFunction

* addresses

  ```ts
  CartSelectableAddressUpdateInput[]
  ```

* optionalParams

  ```ts
  CartOptionalInput
  ```

returns

```ts
Promise<CartQueryDataReturn>
```

#### CartOptionalInput

* cartId

  The cart id.

  ```ts
  string
  ```

* country

  The country code.

  ```ts
  CountryCode
  ```

* language

  The language code.

  ```ts
  LanguageCode
  ```

* visitorConsent

  Visitor consent preferences for the Storefront API's

  ```ts
  VisitorConsent
  ```

#### VisitorConsent

* analytics

  ```ts
  ConsentStatus
  ```

* marketing

  ```ts
  ConsentStatus
  ```

* preferences

  ```ts
  ConsentStatus
  ```

* sale\_of\_data

  ```ts
  ConsentStatus
  ```

#### ConsentStatus

```ts
boolean | undefined
```

#### CartQueryDataReturn

```ts
CartQueryData & {
  errors?: StorefrontApiErrors;
}
```

#### CartQueryData

* cart

  ```ts
  Cart
  ```

* userErrors

  ```ts
  | CartUserError[]
      | MetafieldsSetUserError[]
      | MetafieldDeleteUserError[]
  ```

* warnings

  ```ts
  CartWarning[]
  ```

#### Cart

* attributes

  The cart's attributes.

  ```ts
  { __typename?: "Attribute"; key?: string; value?: string; }[]
  ```

* buyerIdentity

  The cart's buyer identity.

  ```ts
  CartType['buyerIdentity']
  ```

* checkoutUrl

  The checkout URL for the cart, if the cart has been created in the Storefront API.

  ```ts
  string
  ```

* cost

  The cost for the cart, including the subtotal, total, taxes, and duties.

  ```ts
  CartType['cost']
  ```

* discountCodes

  The discount codes applied to the cart.

  ```ts
  { __typename?: "CartDiscountCode"; applicable?: boolean; code?: string; }[]
  ```

* id

  The cart's ID if it has been created through the Storefront API.

  ```ts
  string
  ```

* lines

  The cart lines.

  ```ts
  Array<CartLine | ComponentizableCartLine>
  ```

* note

  The cart's note.

  ```ts
  string
  ```

* totalQuantity

  The total number of items in the cart, across all lines. If there are no lines, then the value is 0.

  ```ts
  number
  ```

#### CartUserError



#### MetafieldsSetUserError



#### MetafieldDeleteUserError



#### CartWarning



Examples

#### Examples

* ####

  ##### JavaScript

  ```js
  import {cartDeliveryAddressesUpdateDefault} from '@shopify/hydrogen';

  const updateDeliveryAddresses = cartDeliveryAddressesUpdateDefault({
    storefront,
    getCartId,
  });

  const result = await updateDeliveryAddresses(
    [
      {
        id: 'gid://shopify/<objectName>/10079785100',
        address: {
          // copyFromCustomerAddressId: ID
          deliveryAddress: {
            address1: '<your-address1>',
            address2: '<your-address2>',
            city: '<your-city>',
            company: '<your-company>',
            countryCode: 'AC',
            firstName: '<your-firstName>',
            lastName: '<your-lastName>',
            phone: '<your-phone>',
            provinceCode: '<your-provinceCode>',
            zip: '<your-zip>',
            // other address fields...
          },
        },
        oneTimeUse: true,
        selected: true,
      },
    ],
    {someOptionalParam: 'value'},
  );
  ```

***

---



<a id="latest-utilities-cart-cartdiscountcodesupdatedefault"></a>


## cartDiscountCodesUpdateDefault

Creates a function that accepts an array of strings and adds the discount codes to a cart

### cart​Discount​Codes​Update​Default(**[options](#cartdiscountcodesupdatedefault-propertydetail-options)**​)

#### Parameters

* **options**

  **CartQueryOptions**

  **required**

#### Returns

* **CartDiscountCodesUpdateFunction**

#### CartQueryOptions

* cartFragment

  The cart fragment to override the one used in this query.

  ```ts
  string
  ```

* customerAccount

  The customer account instance created by \[\`createCustomerAccount\`]\(docs/api/hydrogen/latest/customer/createcustomeraccount).

  ```ts
  CustomerAccount
  ```

* getCartId

  A function that returns the cart ID.

  ```ts
  () => string
  ```

* storefront

  The storefront client instance created by \[\`createStorefrontClient\`]\(docs/api/hydrogen/latest/utilities/createstorefrontclient).

  ```ts
  Storefront
  ```

#### CustomerAccount

* authorize

  On successful login, the customer redirects back to your app. This function validates the OAuth response and exchanges the authorization code for an access token and refresh token. It also persists the tokens on your session. This function should be called and returned from the Remix loader configured as the redirect URI within the Customer Account API settings in admin.

  ```ts
  () => Promise<Response>
  ```

* getAccessToken

  Returns CustomerAccessToken if the customer is logged in. It also run a expiry check and does a token refresh if needed.

  ```ts
  () => Promise<string>
  ```

* getApiUrl

  Creates the fully-qualified URL to your store's GraphQL endpoint.

  ```ts
  () => string
  ```

* getBuyer

  Get buyer token and company location id from session.

  ```ts
  () => Promise<Partial<BuyerInput>>
  ```

* handleAuthStatus

  Check for a not logged in customer and redirect customer to login page. The redirect can be overwritten with \`customAuthStatusHandler\` option.

  ```ts
  () => Promise<void>
  ```

* i18n

  The i18n configuration for Customer Account API

  ```ts
  { language: LanguageCode; }
  ```

* isLoggedIn

  Returns if the customer is logged in. It also checks if the access token is expired and refreshes it if needed.

  ```ts
  () => Promise<boolean>
  ```

* login

  Start the OAuth login flow. This function should be called and returned from a Remix loader. It redirects the customer to a Shopify login domain. It also defined the final path the customer lands on at the end of the oAuth flow with the value of the \`return\_to\` query param. (This is automatically setup unless \`customAuthStatusHandler\` option is in use)

  ```ts
  (options?: LoginOptions) => Promise<Response>
  ```

* logout

  Logout the customer by clearing the session and redirecting to the login domain. It should be called and returned from a Remix action. The path app should redirect to after logout can be setup in Customer Account API settings in admin.

  ```ts
  (options?: LogoutOptions) => Promise<Response>
  ```

* mutate

  Execute a GraphQL mutation against the Customer Account API. This method execute \`handleAuthStatus()\` ahead of mutation.

  ```ts
  <
      OverrideReturnType extends any = never,
      RawGqlString extends string = string,
    >(
      mutation: RawGqlString,
      ...options: ClientVariablesInRestParams<
        CustomerAccountMutations,
        RawGqlString
      >
    ) => Promise<
      Omit<
        CustomerAPIResponse<
          ClientReturn<CustomerAccountMutations, RawGqlString, OverrideReturnType>
        >,
        'errors'
      > & {errors?: JsonGraphQLError[]}
    >
  ```

* query

  Execute a GraphQL query against the Customer Account API. This method execute \`handleAuthStatus()\` ahead of query.

  ```ts
  <
      OverrideReturnType extends any = never,
      RawGqlString extends string = string,
    >(
      query: RawGqlString,
      ...options: ClientVariablesInRestParams<
        CustomerAccountQueries,
        RawGqlString
      >
    ) => Promise<
      Omit<
        CustomerAPIResponse<
          ClientReturn<CustomerAccountQueries, RawGqlString, OverrideReturnType>
        >,
        'errors'
      > & {errors?: JsonGraphQLError[]}
    >
  ```

* setBuyer

  Set buyer information into session.

  ```ts
  (buyer: Partial<BuyerInput>) => void
  ```

* UNSTABLE\_getBuyer

  Deprecated. Please use getBuyer. Get buyer token and company location id from session.

  ```ts
  () => Promise<Partial<BuyerInput>>
  ```

* UNSTABLE\_setBuyer

  Deprecated. Please use setBuyer. Set buyer information into session.

  ```ts
  (buyer: Partial<BuyerInput>) => void
  ```

#### LoginOptions

* acrValues

  ```ts
  string
  ```

* countryCode

  ```ts
  CountryCode
  ```

* locale

  ```ts
  string
  ```

* loginHint

  ```ts
  string
  ```

* loginHintMode

  ```ts
  string
  ```

* uiLocales

  ```ts
  LanguageCode
  ```

#### LogoutOptions

* headers

  Add custom headers to the logout redirect.

  ```ts
  HeadersInit
  ```

* keepSession

  If true, custom data in the session will not be cleared on logout.

  ```ts
  boolean
  ```

* postLogoutRedirectUri

  The url to redirect customer to after logout, should be a relative URL. This url will need to included in Customer Account API's application setup for logout URI. The default value is current app origin, which is automatically setup in admin when using \`--customer-account-push\` flag with dev.

  ```ts
  string
  ```

#### CustomerAccountMutations



#### CustomerAPIResponse

* data

  ```ts
  ReturnType
  ```

* errors

  ```ts
  Array<{
      message: string;
      locations?: Array<{line: number; column: number}>;
      path?: Array<string>;
      extensions: {code: string};
    }>
  ```

* extensions

  ```ts
  { cost: { requestQueryCost: number; actualQueryCakes: number; throttleStatus: { maximumAvailable: number; currentAvailable: number; restoreRate: number; }; }; }
  ```

#### JsonGraphQLError

* extensions

  Reserved for implementors to extend the protocol however they see fit, and hence there are no additional restrictions on its contents.

  ```ts
  { [key: string]: unknown; }
  ```

* locations

  If an error can be associated to a particular point in the requested GraphQL document, it should contain a list of locations.

  ```ts
  { line: number; column: number; }[]
  ```

* message

  ```ts
  string
  ```

* name

  ```ts
  string
  ```

* path

  If an error can be associated to a particular field in the GraphQL result, it \_must\_ contain an entry with the key \`path\` that details the path of the response field which experienced the error. This allows clients to identify whether a null result is intentional or caused by a runtime error.

  ```ts
  (string | number)[]
  ```

* stack

  ```ts
  string
  ```

#### CustomerAccountQueries



#### Storefront

Interface to interact with the Storefront API.

* cache

  ```ts
  Cache
  ```

* CacheCustom

  ```ts
  (overrideOptions: AllCacheOptions) => AllCacheOptions
  ```

* CacheLong

  ```ts
  (overrideOptions?: AllCacheOptions) => AllCacheOptions
  ```

* CacheNone

  ```ts
  () => NoStoreStrategy
  ```

* CacheShort

  ```ts
  (overrideOptions?: AllCacheOptions) => AllCacheOptions
  ```

* forward

  Forwards the request to the Storefront API. It reads the API version from the request URL.

  ```ts
  (request: Request, options?: Pick<StorefrontCommonExtraParams, "storefrontApiVersion">) => Promise<Response>
  ```

* forwardMcp

  Forwards the request to the Storefront MCP endpoint.

  ```ts
  (request: Request) => Promise<Response>
  ```

* generateCacheControlHeader

  ```ts
  (cacheOptions: AllCacheOptions) => string
  ```

* getApiUrl

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "storefrontApiVersion" | "storeDomain">>) => string
  ```

* getHeaders

  ```ts
  () => Record<string, string>
  ```

* getPrivateTokenHeaders

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "contentType">> & Pick<StorefrontClientProps, "privateStorefrontToken"> & { buyerIp?: string; }) => Record<string, string>
  ```

* getPublicTokenHeaders

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "contentType">> & Pick<StorefrontClientProps, "publicStorefrontToken">) => Record<string, string>
  ```

* getShopifyDomain

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "storeDomain">>) => string
  ```

* i18n

  ```ts
  TI18n
  ```

* isMcpUrl

  Checks if the request URL matches the Storefront MCP endpoint.

  ```ts
  (request: { url?: string; }) => boolean
  ```

* isStorefrontApiUrl

  Checks if the request URL matches the Storefront API GraphQL endpoint.

  ```ts
  (request: { url?: string; }) => boolean
  ```

* mutate

  ```ts
  <
      OverrideReturnType extends any = never,
      RawGqlString extends string = string,
    >(
      mutation: RawGqlString,
      ...options: ClientVariablesInRestParams<
        StorefrontMutations,
        RawGqlString,
        StorefrontCommonExtraParams,
        AutoAddedVariableNames
      >
    ) => Promise<
      ClientReturn<StorefrontMutations, RawGqlString, OverrideReturnType> &
        StorefrontError
    >
  ```

* query

  ```ts
  <
      OverrideReturnType extends any = never,
      RawGqlString extends string = string,
    >(
      query: RawGqlString,
      ...options: ClientVariablesInRestParams<
        StorefrontQueries,
        RawGqlString,
        StorefrontCommonExtraParams & Pick<StorefrontQueryOptions, 'cache'>,
        AutoAddedVariableNames
      >
    ) => Promise<
      ClientReturn<StorefrontQueries, RawGqlString, OverrideReturnType> &
        StorefrontError
    >
  ```

* setCollectedSubrequestHeaders

  Sets the collected subrequest headers in the response. Useful to forward the cookies and server-timing headers from server subrequests to the browser.

  ```ts
  (response: { headers: Headers; }) => void
  ```

#### AllCacheOptions

Override options for a cache strategy.

* maxAge

  The maximum amount of time in seconds that a resource will be considered fresh. See \`max-age\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#:\~:text=Response%20Directives-,max%2Dage,-The%20max%2Dage).

  ```ts
  number
  ```

* mode

  The caching mode, generally \`public\`, \`private\`, or \`no-store\`.

  ```ts
  string
  ```

* sMaxAge

  Similar to \`maxAge\` but specific to shared caches. See \`s-maxage\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#s-maxage).

  ```ts
  number
  ```

* staleIfError

  Indicate that the cache should serve the stale response if an error occurs while revalidating the cache. See \`stale-if-error\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-if-error).

  ```ts
  number
  ```

* staleWhileRevalidate

  Indicate that the cache should serve the stale response in the background while revalidating the cache. See \`stale-while-revalidate\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-while-revalidate).

  ```ts
  number
  ```

#### NoStoreStrategy

* mode

  ```ts
  string
  ```

#### StorefrontCommonExtraParams

* displayName

  ```ts
  string
  ```

* headers

  ```ts
  HeadersInit
  ```

* storefrontApiVersion

  ```ts
  string
  ```

#### StorefrontClientProps

* contentType

  Customizes which \`"content-type"\` header is added when using \`getPrivateTokenHeaders()\` and \`getPublicTokenHeaders()\`. When fetching with a \`JSON.stringify()\`-ed \`body\`, use \`"json"\`. When fetching with a \`body\` that is a plain string, use \`"graphql"\`. Defaults to \`"json"\` Can also be customized on a call-by-call basis by passing in \`'contentType'\` to both \`getPrivateTokenHeaders({...})\` and \`getPublicTokenHeaders({...})\`, for example: \`getPublicTokenHeaders({contentType: 'graphql'})\`

  ```ts
  'json' | 'graphql'
  ```

* privateStorefrontToken

  The Storefront API delegate access token. Refer to the \[authentication]\(https://shopify.dev/api/storefront#authentication) and \[delegate access token]\(https://shopify.dev/apps/auth/oauth/delegate-access-tokens) documentation for more details.

  ```ts
  string
  ```

* publicStorefrontToken

  The Storefront API access token. Refer to the \[authentication]\(https://shopify.dev/api/storefront#authentication) documentation for more details.

  ```ts
  string
  ```

* storeDomain

  The host name of the domain (eg: \`{shop}.myshopify.com\`).

  ```ts
  string
  ```

* storefrontApiVersion

  The Storefront API version. This should almost always be the same as the version Hydrogen React was built for. Learn more about Shopify \[API versioning]\(https://shopify.dev/api/usage/versioning) for more details.

  ```ts
  string
  ```

#### StorefrontMutations

Maps all the mutations found in the project to variables and return types.



#### AutoAddedVariableNames

```ts
'country' | 'language'
```

#### StorefrontError

* errors

  ```ts
  StorefrontApiErrors
  ```

#### StorefrontApiErrors

```ts
JsonGraphQLError[] | undefined
```

#### StorefrontQueries

Maps all the queries found in the project to variables and return types.



#### StorefrontQueryOptions

```ts
StorefrontCommonExtraParams & {
  query: string;
  mutation?: never;
  cache?: CachingStrategy;
}
```

#### CachingStrategy

Use the \`CachingStrategy\` to define a custom caching mechanism for your data. Or use one of the pre-defined caching strategies: CacheNone, CacheShort, CacheLong.

* maxAge

  The maximum amount of time in seconds that a resource will be considered fresh. See \`max-age\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#:\~:text=Response%20Directives-,max%2Dage,-The%20max%2Dage).

  ```ts
  number
  ```

* mode

  The caching mode, generally \`public\`, \`private\`, or \`no-store\`.

  ```ts
  string
  ```

* sMaxAge

  Similar to \`maxAge\` but specific to shared caches. See \`s-maxage\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#s-maxage).

  ```ts
  number
  ```

* staleIfError

  Indicate that the cache should serve the stale response if an error occurs while revalidating the cache. See \`stale-if-error\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-if-error).

  ```ts
  number
  ```

* staleWhileRevalidate

  Indicate that the cache should serve the stale response in the background while revalidating the cache. See \`stale-while-revalidate\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-while-revalidate).

  ```ts
  number
  ```

#### Headers



#### CartDiscountCodesUpdateFunction

* discountCodes

  ```ts
  string[]
  ```

* optionalParams

  ```ts
  CartOptionalInput
  ```

returns

```ts
Promise<CartQueryDataReturn>
```

#### CartOptionalInput

* cartId

  The cart id.

  ```ts
  string
  ```

* country

  The country code.

  ```ts
  CountryCode
  ```

* language

  The language code.

  ```ts
  LanguageCode
  ```

* visitorConsent

  Visitor consent preferences for the Storefront API's

  ```ts
  VisitorConsent
  ```

#### VisitorConsent

* analytics

  ```ts
  ConsentStatus
  ```

* marketing

  ```ts
  ConsentStatus
  ```

* preferences

  ```ts
  ConsentStatus
  ```

* sale\_of\_data

  ```ts
  ConsentStatus
  ```

#### ConsentStatus

```ts
boolean | undefined
```

#### CartQueryDataReturn

```ts
CartQueryData & {
  errors?: StorefrontApiErrors;
}
```

#### CartQueryData

* cart

  ```ts
  Cart
  ```

* userErrors

  ```ts
  | CartUserError[]
      | MetafieldsSetUserError[]
      | MetafieldDeleteUserError[]
  ```

* warnings

  ```ts
  CartWarning[]
  ```

#### Cart

* attributes

  The cart's attributes.

  ```ts
  { __typename?: "Attribute"; key?: string; value?: string; }[]
  ```

* buyerIdentity

  The cart's buyer identity.

  ```ts
  CartType['buyerIdentity']
  ```

* checkoutUrl

  The checkout URL for the cart, if the cart has been created in the Storefront API.

  ```ts
  string
  ```

* cost

  The cost for the cart, including the subtotal, total, taxes, and duties.

  ```ts
  CartType['cost']
  ```

* discountCodes

  The discount codes applied to the cart.

  ```ts
  { __typename?: "CartDiscountCode"; applicable?: boolean; code?: string; }[]
  ```

* id

  The cart's ID if it has been created through the Storefront API.

  ```ts
  string
  ```

* lines

  The cart lines.

  ```ts
  Array<CartLine | ComponentizableCartLine>
  ```

* note

  The cart's note.

  ```ts
  string
  ```

* totalQuantity

  The total number of items in the cart, across all lines. If there are no lines, then the value is 0.

  ```ts
  number
  ```

#### CartUserError



#### MetafieldsSetUserError



#### MetafieldDeleteUserError



#### CartWarning



Examples

#### Examples

* ####

  ##### JavaScript

  ```js
  import {cartDiscountCodesUpdateDefault} from '@shopify/hydrogen';

  const cartDiscount = cartDiscountCodesUpdateDefault({
    storefront,
    getCartId,
  });

  const result = await cartDiscount(['FREE_SHIPPING']);
  ```

***

---



<a id="latest-utilities-cart-cartgetdefault"></a>


## cartGetDefault

Creates a function that returns a cart

### cart​Get​Default(**[input1](#cartgetdefault-propertydetail-input1)**​)

#### Parameters

* **input1**

  **CartGetOptions**

  **required**

#### Returns

* **CartGetFunction**

#### CartGetOptions

```ts
CartQueryOptions & {
  /**
   * The customer account client instance created by [`createCustomerAccountClient`](docs/api/hydrogen/latest/utilities/createcustomeraccountclient).
   */
  customerAccount?: CustomerAccount;
}
```

#### CartQueryOptions

* cartFragment

  The cart fragment to override the one used in this query.

  ```ts
  string
  ```

* customerAccount

  The customer account instance created by \[\`createCustomerAccount\`]\(docs/api/hydrogen/latest/customer/createcustomeraccount).

  ```ts
  CustomerAccount
  ```

* getCartId

  A function that returns the cart ID.

  ```ts
  () => string
  ```

* storefront

  The storefront client instance created by \[\`createStorefrontClient\`]\(docs/api/hydrogen/latest/utilities/createstorefrontclient).

  ```ts
  Storefront
  ```

#### CustomerAccount

* authorize

  On successful login, the customer redirects back to your app. This function validates the OAuth response and exchanges the authorization code for an access token and refresh token. It also persists the tokens on your session. This function should be called and returned from the Remix loader configured as the redirect URI within the Customer Account API settings in admin.

  ```ts
  () => Promise<Response>
  ```

* getAccessToken

  Returns CustomerAccessToken if the customer is logged in. It also run a expiry check and does a token refresh if needed.

  ```ts
  () => Promise<string>
  ```

* getApiUrl

  Creates the fully-qualified URL to your store's GraphQL endpoint.

  ```ts
  () => string
  ```

* getBuyer

  Get buyer token and company location id from session.

  ```ts
  () => Promise<Partial<BuyerInput>>
  ```

* handleAuthStatus

  Check for a not logged in customer and redirect customer to login page. The redirect can be overwritten with \`customAuthStatusHandler\` option.

  ```ts
  () => Promise<void>
  ```

* i18n

  The i18n configuration for Customer Account API

  ```ts
  { language: LanguageCode; }
  ```

* isLoggedIn

  Returns if the customer is logged in. It also checks if the access token is expired and refreshes it if needed.

  ```ts
  () => Promise<boolean>
  ```

* login

  Start the OAuth login flow. This function should be called and returned from a Remix loader. It redirects the customer to a Shopify login domain. It also defined the final path the customer lands on at the end of the oAuth flow with the value of the \`return\_to\` query param. (This is automatically setup unless \`customAuthStatusHandler\` option is in use)

  ```ts
  (options?: LoginOptions) => Promise<Response>
  ```

* logout

  Logout the customer by clearing the session and redirecting to the login domain. It should be called and returned from a Remix action. The path app should redirect to after logout can be setup in Customer Account API settings in admin.

  ```ts
  (options?: LogoutOptions) => Promise<Response>
  ```

* mutate

  Execute a GraphQL mutation against the Customer Account API. This method execute \`handleAuthStatus()\` ahead of mutation.

  ```ts
  <
      OverrideReturnType extends any = never,
      RawGqlString extends string = string,
    >(
      mutation: RawGqlString,
      ...options: ClientVariablesInRestParams<
        CustomerAccountMutations,
        RawGqlString
      >
    ) => Promise<
      Omit<
        CustomerAPIResponse<
          ClientReturn<CustomerAccountMutations, RawGqlString, OverrideReturnType>
        >,
        'errors'
      > & {errors?: JsonGraphQLError[]}
    >
  ```

* query

  Execute a GraphQL query against the Customer Account API. This method execute \`handleAuthStatus()\` ahead of query.

  ```ts
  <
      OverrideReturnType extends any = never,
      RawGqlString extends string = string,
    >(
      query: RawGqlString,
      ...options: ClientVariablesInRestParams<
        CustomerAccountQueries,
        RawGqlString
      >
    ) => Promise<
      Omit<
        CustomerAPIResponse<
          ClientReturn<CustomerAccountQueries, RawGqlString, OverrideReturnType>
        >,
        'errors'
      > & {errors?: JsonGraphQLError[]}
    >
  ```

* setBuyer

  Set buyer information into session.

  ```ts
  (buyer: Partial<BuyerInput>) => void
  ```

* UNSTABLE\_getBuyer

  Deprecated. Please use getBuyer. Get buyer token and company location id from session.

  ```ts
  () => Promise<Partial<BuyerInput>>
  ```

* UNSTABLE\_setBuyer

  Deprecated. Please use setBuyer. Set buyer information into session.

  ```ts
  (buyer: Partial<BuyerInput>) => void
  ```

#### LoginOptions

* acrValues

  ```ts
  string
  ```

* countryCode

  ```ts
  CountryCode
  ```

* locale

  ```ts
  string
  ```

* loginHint

  ```ts
  string
  ```

* loginHintMode

  ```ts
  string
  ```

* uiLocales

  ```ts
  LanguageCode
  ```

#### LogoutOptions

* headers

  Add custom headers to the logout redirect.

  ```ts
  HeadersInit
  ```

* keepSession

  If true, custom data in the session will not be cleared on logout.

  ```ts
  boolean
  ```

* postLogoutRedirectUri

  The url to redirect customer to after logout, should be a relative URL. This url will need to included in Customer Account API's application setup for logout URI. The default value is current app origin, which is automatically setup in admin when using \`--customer-account-push\` flag with dev.

  ```ts
  string
  ```

#### CustomerAccountMutations



#### CustomerAPIResponse

* data

  ```ts
  ReturnType
  ```

* errors

  ```ts
  Array<{
      message: string;
      locations?: Array<{line: number; column: number}>;
      path?: Array<string>;
      extensions: {code: string};
    }>
  ```

* extensions

  ```ts
  { cost: { requestQueryCost: number; actualQueryCakes: number; throttleStatus: { maximumAvailable: number; currentAvailable: number; restoreRate: number; }; }; }
  ```

#### JsonGraphQLError

* extensions

  Reserved for implementors to extend the protocol however they see fit, and hence there are no additional restrictions on its contents.

  ```ts
  { [key: string]: unknown; }
  ```

* locations

  If an error can be associated to a particular point in the requested GraphQL document, it should contain a list of locations.

  ```ts
  { line: number; column: number; }[]
  ```

* message

  ```ts
  string
  ```

* name

  ```ts
  string
  ```

* path

  If an error can be associated to a particular field in the GraphQL result, it \_must\_ contain an entry with the key \`path\` that details the path of the response field which experienced the error. This allows clients to identify whether a null result is intentional or caused by a runtime error.

  ```ts
  (string | number)[]
  ```

* stack

  ```ts
  string
  ```

#### CustomerAccountQueries



#### Storefront

Interface to interact with the Storefront API.

* cache

  ```ts
  Cache
  ```

* CacheCustom

  ```ts
  (overrideOptions: AllCacheOptions) => AllCacheOptions
  ```

* CacheLong

  ```ts
  (overrideOptions?: AllCacheOptions) => AllCacheOptions
  ```

* CacheNone

  ```ts
  () => NoStoreStrategy
  ```

* CacheShort

  ```ts
  (overrideOptions?: AllCacheOptions) => AllCacheOptions
  ```

* forward

  Forwards the request to the Storefront API. It reads the API version from the request URL.

  ```ts
  (request: Request, options?: Pick<StorefrontCommonExtraParams, "storefrontApiVersion">) => Promise<Response>
  ```

* forwardMcp

  Forwards the request to the Storefront MCP endpoint.

  ```ts
  (request: Request) => Promise<Response>
  ```

* generateCacheControlHeader

  ```ts
  (cacheOptions: AllCacheOptions) => string
  ```

* getApiUrl

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "storefrontApiVersion" | "storeDomain">>) => string
  ```

* getHeaders

  ```ts
  () => Record<string, string>
  ```

* getPrivateTokenHeaders

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "contentType">> & Pick<StorefrontClientProps, "privateStorefrontToken"> & { buyerIp?: string; }) => Record<string, string>
  ```

* getPublicTokenHeaders

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "contentType">> & Pick<StorefrontClientProps, "publicStorefrontToken">) => Record<string, string>
  ```

* getShopifyDomain

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "storeDomain">>) => string
  ```

* i18n

  ```ts
  TI18n
  ```

* isMcpUrl

  Checks if the request URL matches the Storefront MCP endpoint.

  ```ts
  (request: { url?: string; }) => boolean
  ```

* isStorefrontApiUrl

  Checks if the request URL matches the Storefront API GraphQL endpoint.

  ```ts
  (request: { url?: string; }) => boolean
  ```

* mutate

  ```ts
  <
      OverrideReturnType extends any = never,
      RawGqlString extends string = string,
    >(
      mutation: RawGqlString,
      ...options: ClientVariablesInRestParams<
        StorefrontMutations,
        RawGqlString,
        StorefrontCommonExtraParams,
        AutoAddedVariableNames
      >
    ) => Promise<
      ClientReturn<StorefrontMutations, RawGqlString, OverrideReturnType> &
        StorefrontError
    >
  ```

* query

  ```ts
  <
      OverrideReturnType extends any = never,
      RawGqlString extends string = string,
    >(
      query: RawGqlString,
      ...options: ClientVariablesInRestParams<
        StorefrontQueries,
        RawGqlString,
        StorefrontCommonExtraParams & Pick<StorefrontQueryOptions, 'cache'>,
        AutoAddedVariableNames
      >
    ) => Promise<
      ClientReturn<StorefrontQueries, RawGqlString, OverrideReturnType> &
        StorefrontError
    >
  ```

* setCollectedSubrequestHeaders

  Sets the collected subrequest headers in the response. Useful to forward the cookies and server-timing headers from server subrequests to the browser.

  ```ts
  (response: { headers: Headers; }) => void
  ```

#### AllCacheOptions

Override options for a cache strategy.

* maxAge

  The maximum amount of time in seconds that a resource will be considered fresh. See \`max-age\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#:\~:text=Response%20Directives-,max%2Dage,-The%20max%2Dage).

  ```ts
  number
  ```

* mode

  The caching mode, generally \`public\`, \`private\`, or \`no-store\`.

  ```ts
  string
  ```

* sMaxAge

  Similar to \`maxAge\` but specific to shared caches. See \`s-maxage\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#s-maxage).

  ```ts
  number
  ```

* staleIfError

  Indicate that the cache should serve the stale response if an error occurs while revalidating the cache. See \`stale-if-error\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-if-error).

  ```ts
  number
  ```

* staleWhileRevalidate

  Indicate that the cache should serve the stale response in the background while revalidating the cache. See \`stale-while-revalidate\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-while-revalidate).

  ```ts
  number
  ```

#### NoStoreStrategy

* mode

  ```ts
  string
  ```

#### StorefrontCommonExtraParams

* displayName

  ```ts
  string
  ```

* headers

  ```ts
  HeadersInit
  ```

* storefrontApiVersion

  ```ts
  string
  ```

#### StorefrontClientProps

* contentType

  Customizes which \`"content-type"\` header is added when using \`getPrivateTokenHeaders()\` and \`getPublicTokenHeaders()\`. When fetching with a \`JSON.stringify()\`-ed \`body\`, use \`"json"\`. When fetching with a \`body\` that is a plain string, use \`"graphql"\`. Defaults to \`"json"\` Can also be customized on a call-by-call basis by passing in \`'contentType'\` to both \`getPrivateTokenHeaders({...})\` and \`getPublicTokenHeaders({...})\`, for example: \`getPublicTokenHeaders({contentType: 'graphql'})\`

  ```ts
  'json' | 'graphql'
  ```

* privateStorefrontToken

  The Storefront API delegate access token. Refer to the \[authentication]\(https://shopify.dev/api/storefront#authentication) and \[delegate access token]\(https://shopify.dev/apps/auth/oauth/delegate-access-tokens) documentation for more details.

  ```ts
  string
  ```

* publicStorefrontToken

  The Storefront API access token. Refer to the \[authentication]\(https://shopify.dev/api/storefront#authentication) documentation for more details.

  ```ts
  string
  ```

* storeDomain

  The host name of the domain (eg: \`{shop}.myshopify.com\`).

  ```ts
  string
  ```

* storefrontApiVersion

  The Storefront API version. This should almost always be the same as the version Hydrogen React was built for. Learn more about Shopify \[API versioning]\(https://shopify.dev/api/usage/versioning) for more details.

  ```ts
  string
  ```

#### StorefrontMutations

Maps all the mutations found in the project to variables and return types.



#### AutoAddedVariableNames

```ts
'country' | 'language'
```

#### StorefrontError

* errors

  ```ts
  StorefrontApiErrors
  ```

#### StorefrontApiErrors

```ts
JsonGraphQLError[] | undefined
```

#### StorefrontQueries

Maps all the queries found in the project to variables and return types.



#### StorefrontQueryOptions

```ts
StorefrontCommonExtraParams & {
  query: string;
  mutation?: never;
  cache?: CachingStrategy;
}
```

#### CachingStrategy

Use the \`CachingStrategy\` to define a custom caching mechanism for your data. Or use one of the pre-defined caching strategies: CacheNone, CacheShort, CacheLong.

* maxAge

  The maximum amount of time in seconds that a resource will be considered fresh. See \`max-age\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#:\~:text=Response%20Directives-,max%2Dage,-The%20max%2Dage).

  ```ts
  number
  ```

* mode

  The caching mode, generally \`public\`, \`private\`, or \`no-store\`.

  ```ts
  string
  ```

* sMaxAge

  Similar to \`maxAge\` but specific to shared caches. See \`s-maxage\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#s-maxage).

  ```ts
  number
  ```

* staleIfError

  Indicate that the cache should serve the stale response if an error occurs while revalidating the cache. See \`stale-if-error\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-if-error).

  ```ts
  number
  ```

* staleWhileRevalidate

  Indicate that the cache should serve the stale response in the background while revalidating the cache. See \`stale-while-revalidate\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-while-revalidate).

  ```ts
  number
  ```

#### Headers



#### CartGetFunction

* cartInput

  ```ts
  CartGetProps
  ```

returns

```ts
Promise<CartReturn | null>
```

#### CartGetProps

* cartId

  The cart ID.

  ```ts
  string
  ```

* country

  The country code.

  ```ts
  CountryCode
  ```

* language

  The language code.

  ```ts
  LanguageCode
  ```

* numCartLines

  The number of cart lines to be returned.

  ```ts
  number
  ```

* visitorConsent

  Visitor consent preferences for the Storefront API's

  ```ts
  VisitorConsent
  ```

#### VisitorConsent

* analytics

  ```ts
  ConsentStatus
  ```

* marketing

  ```ts
  ConsentStatus
  ```

* preferences

  ```ts
  ConsentStatus
  ```

* sale\_of\_data

  ```ts
  ConsentStatus
  ```

#### ConsentStatus

```ts
boolean | undefined
```

#### CartReturn

```ts
Cart & {
  errors?: StorefrontApiErrors;
}
```

#### Cart

* attributes

  The cart's attributes.

  ```ts
  { __typename?: "Attribute"; key?: string; value?: string; }[]
  ```

* buyerIdentity

  The cart's buyer identity.

  ```ts
  CartType['buyerIdentity']
  ```

* checkoutUrl

  The checkout URL for the cart, if the cart has been created in the Storefront API.

  ```ts
  string
  ```

* cost

  The cost for the cart, including the subtotal, total, taxes, and duties.

  ```ts
  CartType['cost']
  ```

* discountCodes

  The discount codes applied to the cart.

  ```ts
  { __typename?: "CartDiscountCode"; applicable?: boolean; code?: string; }[]
  ```

* id

  The cart's ID if it has been created through the Storefront API.

  ```ts
  string
  ```

* lines

  The cart lines.

  ```ts
  Array<CartLine | ComponentizableCartLine>
  ```

* note

  The cart's note.

  ```ts
  string
  ```

* totalQuantity

  The total number of items in the cart, across all lines. If there are no lines, then the value is 0.

  ```ts
  number
  ```

Examples

#### Examples

* ####

  ##### JavaScript

  ```js
  import {cartGetDefault} from '@shopify/hydrogen';

  const cartGet = cartGetDefault({
    storefront,
    getCartId,
  });

  const result = await cartGet();
  ```

***

---



<a id="latest-utilities-cart-cartgetiddefault"></a>


## cartGetIdDefault

Creates a function that returns the cart id from request header cookie.

### cart​Get​Id​Default(**[requestHeaders](#cartgetiddefault-propertydetail-requestheaders)**​)

#### Parameters

* **requestHeaders**

  **CrossRuntimeRequest\['headers']**

  **required**

#### CrossRuntimeRequest

* headers

  ```ts
  {
      get?: (key: string) => string | null | undefined;
      [key: string]: any;
    }
  ```

* method

  ```ts
  string
  ```

* url

  ```ts
  string
  ```

Examples

#### Examples

* ####

  ##### JavaScript

  ```js
  import {cartGetIdDefault, cartSetIdDefault} from '@shopify/hydrogen';

  // server.js
  export default {
    async fetch(request) {
      const cart = createCartHandler({
        storefront,
        getCartId: cartGetIdDefault(request.headers),
        setCartId: cartSetIdDefault(),
      });
    },
  };

  // Some route
  export async function loader({context}) {
    const {cart} = context;

    cart.getCartId(); // gid://shopify/Cart/1234567890
  }
  ```

***

---



<a id="latest-utilities-cart-cartgiftcardcodesadddefault"></a>


## cartGiftCardCodesAddDefault

Creates a function that adds gift card codes to a cart without replacing existing ones

### cart​Gift​Card​Codes​Add​Default(**[options](#cartgiftcardcodesadddefault-propertydetail-options)**​)

Adds gift card codes to the cart without replacing existing ones.

This function sends a mutation to the Storefront API to add one or more gift card codes to the cart. Unlike `cartGiftCardCodesUpdate` which replaces all codes, this mutation appends new codes to existing ones.

#### Parameters

* **options**

  **CartQueryOptions**

  **required**

  The options for the cart query, including the storefront API client and cart fragment.

#### Returns

* **CartGiftCardCodesAddFunction**

  * A function that takes an array of gift card codes and optional parameters, and returns the result of the API call.

#### CartQueryOptions

* cartFragment

  The cart fragment to override the one used in this query.

  ```ts
  string
  ```

* customerAccount

  The customer account instance created by \[\`createCustomerAccount\`]\(docs/api/hydrogen/latest/customer/createcustomeraccount).

  ```ts
  CustomerAccount
  ```

* getCartId

  A function that returns the cart ID.

  ```ts
  () => string
  ```

* storefront

  The storefront client instance created by \[\`createStorefrontClient\`]\(docs/api/hydrogen/latest/utilities/createstorefrontclient).

  ```ts
  Storefront
  ```

#### CustomerAccount

* authorize

  On successful login, the customer redirects back to your app. This function validates the OAuth response and exchanges the authorization code for an access token and refresh token. It also persists the tokens on your session. This function should be called and returned from the Remix loader configured as the redirect URI within the Customer Account API settings in admin.

  ```ts
  () => Promise<Response>
  ```

* getAccessToken

  Returns CustomerAccessToken if the customer is logged in. It also run a expiry check and does a token refresh if needed.

  ```ts
  () => Promise<string>
  ```

* getApiUrl

  Creates the fully-qualified URL to your store's GraphQL endpoint.

  ```ts
  () => string
  ```

* getBuyer

  Get buyer token and company location id from session.

  ```ts
  () => Promise<Partial<BuyerInput>>
  ```

* handleAuthStatus

  Check for a not logged in customer and redirect customer to login page. The redirect can be overwritten with \`customAuthStatusHandler\` option.

  ```ts
  () => Promise<void>
  ```

* i18n

  The i18n configuration for Customer Account API

  ```ts
  { language: LanguageCode; }
  ```

* isLoggedIn

  Returns if the customer is logged in. It also checks if the access token is expired and refreshes it if needed.

  ```ts
  () => Promise<boolean>
  ```

* login

  Start the OAuth login flow. This function should be called and returned from a Remix loader. It redirects the customer to a Shopify login domain. It also defined the final path the customer lands on at the end of the oAuth flow with the value of the \`return\_to\` query param. (This is automatically setup unless \`customAuthStatusHandler\` option is in use)

  ```ts
  (options?: LoginOptions) => Promise<Response>
  ```

* logout

  Logout the customer by clearing the session and redirecting to the login domain. It should be called and returned from a Remix action. The path app should redirect to after logout can be setup in Customer Account API settings in admin.

  ```ts
  (options?: LogoutOptions) => Promise<Response>
  ```

* mutate

  Execute a GraphQL mutation against the Customer Account API. This method execute \`handleAuthStatus()\` ahead of mutation.

  ```ts
  <
      OverrideReturnType extends any = never,
      RawGqlString extends string = string,
    >(
      mutation: RawGqlString,
      ...options: ClientVariablesInRestParams<
        CustomerAccountMutations,
        RawGqlString
      >
    ) => Promise<
      Omit<
        CustomerAPIResponse<
          ClientReturn<CustomerAccountMutations, RawGqlString, OverrideReturnType>
        >,
        'errors'
      > & {errors?: JsonGraphQLError[]}
    >
  ```

* query

  Execute a GraphQL query against the Customer Account API. This method execute \`handleAuthStatus()\` ahead of query.

  ```ts
  <
      OverrideReturnType extends any = never,
      RawGqlString extends string = string,
    >(
      query: RawGqlString,
      ...options: ClientVariablesInRestParams<
        CustomerAccountQueries,
        RawGqlString
      >
    ) => Promise<
      Omit<
        CustomerAPIResponse<
          ClientReturn<CustomerAccountQueries, RawGqlString, OverrideReturnType>
        >,
        'errors'
      > & {errors?: JsonGraphQLError[]}
    >
  ```

* setBuyer

  Set buyer information into session.

  ```ts
  (buyer: Partial<BuyerInput>) => void
  ```

* UNSTABLE\_getBuyer

  Deprecated. Please use getBuyer. Get buyer token and company location id from session.

  ```ts
  () => Promise<Partial<BuyerInput>>
  ```

* UNSTABLE\_setBuyer

  Deprecated. Please use setBuyer. Set buyer information into session.

  ```ts
  (buyer: Partial<BuyerInput>) => void
  ```

#### LoginOptions

* acrValues

  ```ts
  string
  ```

* countryCode

  ```ts
  CountryCode
  ```

* locale

  ```ts
  string
  ```

* loginHint

  ```ts
  string
  ```

* loginHintMode

  ```ts
  string
  ```

* uiLocales

  ```ts
  LanguageCode
  ```

#### LogoutOptions

* headers

  Add custom headers to the logout redirect.

  ```ts
  HeadersInit
  ```

* keepSession

  If true, custom data in the session will not be cleared on logout.

  ```ts
  boolean
  ```

* postLogoutRedirectUri

  The url to redirect customer to after logout, should be a relative URL. This url will need to included in Customer Account API's application setup for logout URI. The default value is current app origin, which is automatically setup in admin when using \`--customer-account-push\` flag with dev.

  ```ts
  string
  ```

#### CustomerAccountMutations



#### CustomerAPIResponse

* data

  ```ts
  ReturnType
  ```

* errors

  ```ts
  Array<{
      message: string;
      locations?: Array<{line: number; column: number}>;
      path?: Array<string>;
      extensions: {code: string};
    }>
  ```

* extensions

  ```ts
  { cost: { requestQueryCost: number; actualQueryCakes: number; throttleStatus: { maximumAvailable: number; currentAvailable: number; restoreRate: number; }; }; }
  ```

#### JsonGraphQLError

* extensions

  Reserved for implementors to extend the protocol however they see fit, and hence there are no additional restrictions on its contents.

  ```ts
  { [key: string]: unknown; }
  ```

* locations

  If an error can be associated to a particular point in the requested GraphQL document, it should contain a list of locations.

  ```ts
  { line: number; column: number; }[]
  ```

* message

  ```ts
  string
  ```

* name

  ```ts
  string
  ```

* path

  If an error can be associated to a particular field in the GraphQL result, it \_must\_ contain an entry with the key \`path\` that details the path of the response field which experienced the error. This allows clients to identify whether a null result is intentional or caused by a runtime error.

  ```ts
  (string | number)[]
  ```

* stack

  ```ts
  string
  ```

#### CustomerAccountQueries



#### Storefront

Interface to interact with the Storefront API.

* cache

  ```ts
  Cache
  ```

* CacheCustom

  ```ts
  (overrideOptions: AllCacheOptions) => AllCacheOptions
  ```

* CacheLong

  ```ts
  (overrideOptions?: AllCacheOptions) => AllCacheOptions
  ```

* CacheNone

  ```ts
  () => NoStoreStrategy
  ```

* CacheShort

  ```ts
  (overrideOptions?: AllCacheOptions) => AllCacheOptions
  ```

* forward

  Forwards the request to the Storefront API. It reads the API version from the request URL.

  ```ts
  (request: Request, options?: Pick<StorefrontCommonExtraParams, "storefrontApiVersion">) => Promise<Response>
  ```

* forwardMcp

  Forwards the request to the Storefront MCP endpoint.

  ```ts
  (request: Request) => Promise<Response>
  ```

* generateCacheControlHeader

  ```ts
  (cacheOptions: AllCacheOptions) => string
  ```

* getApiUrl

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "storefrontApiVersion" | "storeDomain">>) => string
  ```

* getHeaders

  ```ts
  () => Record<string, string>
  ```

* getPrivateTokenHeaders

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "contentType">> & Pick<StorefrontClientProps, "privateStorefrontToken"> & { buyerIp?: string; }) => Record<string, string>
  ```

* getPublicTokenHeaders

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "contentType">> & Pick<StorefrontClientProps, "publicStorefrontToken">) => Record<string, string>
  ```

* getShopifyDomain

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "storeDomain">>) => string
  ```

* i18n

  ```ts
  TI18n
  ```

* isMcpUrl

  Checks if the request URL matches the Storefront MCP endpoint.

  ```ts
  (request: { url?: string; }) => boolean
  ```

* isStorefrontApiUrl

  Checks if the request URL matches the Storefront API GraphQL endpoint.

  ```ts
  (request: { url?: string; }) => boolean
  ```

* mutate

  ```ts
  <
      OverrideReturnType extends any = never,
      RawGqlString extends string = string,
    >(
      mutation: RawGqlString,
      ...options: ClientVariablesInRestParams<
        StorefrontMutations,
        RawGqlString,
        StorefrontCommonExtraParams,
        AutoAddedVariableNames
      >
    ) => Promise<
      ClientReturn<StorefrontMutations, RawGqlString, OverrideReturnType> &
        StorefrontError
    >
  ```

* query

  ```ts
  <
      OverrideReturnType extends any = never,
      RawGqlString extends string = string,
    >(
      query: RawGqlString,
      ...options: ClientVariablesInRestParams<
        StorefrontQueries,
        RawGqlString,
        StorefrontCommonExtraParams & Pick<StorefrontQueryOptions, 'cache'>,
        AutoAddedVariableNames
      >
    ) => Promise<
      ClientReturn<StorefrontQueries, RawGqlString, OverrideReturnType> &
        StorefrontError
    >
  ```

* setCollectedSubrequestHeaders

  Sets the collected subrequest headers in the response. Useful to forward the cookies and server-timing headers from server subrequests to the browser.

  ```ts
  (response: { headers: Headers; }) => void
  ```

#### AllCacheOptions

Override options for a cache strategy.

* maxAge

  The maximum amount of time in seconds that a resource will be considered fresh. See \`max-age\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#:\~:text=Response%20Directives-,max%2Dage,-The%20max%2Dage).

  ```ts
  number
  ```

* mode

  The caching mode, generally \`public\`, \`private\`, or \`no-store\`.

  ```ts
  string
  ```

* sMaxAge

  Similar to \`maxAge\` but specific to shared caches. See \`s-maxage\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#s-maxage).

  ```ts
  number
  ```

* staleIfError

  Indicate that the cache should serve the stale response if an error occurs while revalidating the cache. See \`stale-if-error\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-if-error).

  ```ts
  number
  ```

* staleWhileRevalidate

  Indicate that the cache should serve the stale response in the background while revalidating the cache. See \`stale-while-revalidate\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-while-revalidate).

  ```ts
  number
  ```

#### NoStoreStrategy

* mode

  ```ts
  string
  ```

#### StorefrontCommonExtraParams

* displayName

  ```ts
  string
  ```

* headers

  ```ts
  HeadersInit
  ```

* storefrontApiVersion

  ```ts
  string
  ```

#### StorefrontClientProps

* contentType

  Customizes which \`"content-type"\` header is added when using \`getPrivateTokenHeaders()\` and \`getPublicTokenHeaders()\`. When fetching with a \`JSON.stringify()\`-ed \`body\`, use \`"json"\`. When fetching with a \`body\` that is a plain string, use \`"graphql"\`. Defaults to \`"json"\` Can also be customized on a call-by-call basis by passing in \`'contentType'\` to both \`getPrivateTokenHeaders({...})\` and \`getPublicTokenHeaders({...})\`, for example: \`getPublicTokenHeaders({contentType: 'graphql'})\`

  ```ts
  'json' | 'graphql'
  ```

* privateStorefrontToken

  The Storefront API delegate access token. Refer to the \[authentication]\(https://shopify.dev/api/storefront#authentication) and \[delegate access token]\(https://shopify.dev/apps/auth/oauth/delegate-access-tokens) documentation for more details.

  ```ts
  string
  ```

* publicStorefrontToken

  The Storefront API access token. Refer to the \[authentication]\(https://shopify.dev/api/storefront#authentication) documentation for more details.

  ```ts
  string
  ```

* storeDomain

  The host name of the domain (eg: \`{shop}.myshopify.com\`).

  ```ts
  string
  ```

* storefrontApiVersion

  The Storefront API version. This should almost always be the same as the version Hydrogen React was built for. Learn more about Shopify \[API versioning]\(https://shopify.dev/api/usage/versioning) for more details.

  ```ts
  string
  ```

#### StorefrontMutations

Maps all the mutations found in the project to variables and return types.



#### AutoAddedVariableNames

```ts
'country' | 'language'
```

#### StorefrontError

* errors

  ```ts
  StorefrontApiErrors
  ```

#### StorefrontApiErrors

```ts
JsonGraphQLError[] | undefined
```

#### StorefrontQueries

Maps all the queries found in the project to variables and return types.



#### StorefrontQueryOptions

```ts
StorefrontCommonExtraParams & {
  query: string;
  mutation?: never;
  cache?: CachingStrategy;
}
```

#### CachingStrategy

Use the \`CachingStrategy\` to define a custom caching mechanism for your data. Or use one of the pre-defined caching strategies: CacheNone, CacheShort, CacheLong.

* maxAge

  The maximum amount of time in seconds that a resource will be considered fresh. See \`max-age\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#:\~:text=Response%20Directives-,max%2Dage,-The%20max%2Dage).

  ```ts
  number
  ```

* mode

  The caching mode, generally \`public\`, \`private\`, or \`no-store\`.

  ```ts
  string
  ```

* sMaxAge

  Similar to \`maxAge\` but specific to shared caches. See \`s-maxage\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#s-maxage).

  ```ts
  number
  ```

* staleIfError

  Indicate that the cache should serve the stale response if an error occurs while revalidating the cache. See \`stale-if-error\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-if-error).

  ```ts
  number
  ```

* staleWhileRevalidate

  Indicate that the cache should serve the stale response in the background while revalidating the cache. See \`stale-while-revalidate\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-while-revalidate).

  ```ts
  number
  ```

#### Headers



#### CartGiftCardCodesAddFunction

* giftCardCodes

  ```ts
  string[]
  ```

* optionalParams

  ```ts
  CartOptionalInput
  ```

returns

```ts
Promise<CartQueryDataReturn>
```

#### CartOptionalInput

* cartId

  The cart id.

  ```ts
  string
  ```

* country

  The country code.

  ```ts
  CountryCode
  ```

* language

  The language code.

  ```ts
  LanguageCode
  ```

* visitorConsent

  Visitor consent preferences for the Storefront API's

  ```ts
  VisitorConsent
  ```

#### VisitorConsent

* analytics

  ```ts
  ConsentStatus
  ```

* marketing

  ```ts
  ConsentStatus
  ```

* preferences

  ```ts
  ConsentStatus
  ```

* sale\_of\_data

  ```ts
  ConsentStatus
  ```

#### ConsentStatus

```ts
boolean | undefined
```

#### CartQueryDataReturn

```ts
CartQueryData & {
  errors?: StorefrontApiErrors;
}
```

#### CartQueryData

* cart

  ```ts
  Cart
  ```

* userErrors

  ```ts
  | CartUserError[]
      | MetafieldsSetUserError[]
      | MetafieldDeleteUserError[]
  ```

* warnings

  ```ts
  CartWarning[]
  ```

#### Cart

* attributes

  The cart's attributes.

  ```ts
  { __typename?: "Attribute"; key?: string; value?: string; }[]
  ```

* buyerIdentity

  The cart's buyer identity.

  ```ts
  CartType['buyerIdentity']
  ```

* checkoutUrl

  The checkout URL for the cart, if the cart has been created in the Storefront API.

  ```ts
  string
  ```

* cost

  The cost for the cart, including the subtotal, total, taxes, and duties.

  ```ts
  CartType['cost']
  ```

* discountCodes

  The discount codes applied to the cart.

  ```ts
  { __typename?: "CartDiscountCode"; applicable?: boolean; code?: string; }[]
  ```

* id

  The cart's ID if it has been created through the Storefront API.

  ```ts
  string
  ```

* lines

  The cart lines.

  ```ts
  Array<CartLine | ComponentizableCartLine>
  ```

* note

  The cart's note.

  ```ts
  string
  ```

* totalQuantity

  The total number of items in the cart, across all lines. If there are no lines, then the value is 0.

  ```ts
  number
  ```

#### CartUserError



#### MetafieldsSetUserError



#### MetafieldDeleteUserError



#### CartWarning



Examples

#### Examples

* #### Example

  ##### Description

  Add gift card codes to a cart using the default cart fragment

  ##### JavaScript

  ```js
  import {cartGiftCardCodesAddDefault} from '@shopify/hydrogen';

  export async function action({context}) {
    const cartAddGiftCardCodes = cartGiftCardCodesAddDefault({
      storefront: context.storefront,
      getCartId: () => context.cart.getCartId(),
    });

    const result = await cartAddGiftCardCodes(['SUMMER2025', 'WELCOME10']);
    return result;
  }
  ```

  ##### TypeScript

  ```ts
  import {
    cartGiftCardCodesAddDefault,
    type HydrogenCart,
    type CartQueryOptions,
  } from '@shopify/hydrogen';

  export async function action({context}: {context: CartQueryOptions}) {
    const cartAddGiftCardCodes: HydrogenCart['addGiftCardCodes'] =
      cartGiftCardCodesAddDefault({
        storefront: context.storefront,
        getCartId: context.getCartId,
      });

    const result = await cartAddGiftCardCodes(['SUMMER2025', 'WELCOME10']);
    return result;
  }
  ```

***

### Related

[- cartGiftCardCodesUpdateDefault](https://shopify.dev/docs/api/hydrogen/2026-04/utilities/cart/cartgiftcardcodesupdatedefault)

[- cartGiftCardCodesRemoveDefault](https://shopify.dev/docs/api/hydrogen/2026-04/utilities/cart/cartgiftcardcodesremovedefault)

[- createCartHandler](https://shopify.dev/docs/api/hydrogen/2026-04/utilities/cart/createcarthandler)

***

---



<a id="latest-utilities-cart-cartgiftcardcodesremovedefault"></a>


## cartGiftCardCodesRemoveDefault

Creates a function that accepts an array of gift card codes to remove from a cart

### cart​Gift​Card​Codes​Remove​Default(**[options](#cartgiftcardcodesremovedefault-propertydetail-options)**​)

#### Parameters

* **options**

  **CartQueryOptions**

  **required**

#### Returns

* **CartGiftCardCodesRemoveFunction**

#### CartQueryOptions

* cartFragment

  The cart fragment to override the one used in this query.

  ```ts
  string
  ```

* customerAccount

  The customer account instance created by \[\`createCustomerAccount\`]\(docs/api/hydrogen/latest/customer/createcustomeraccount).

  ```ts
  CustomerAccount
  ```

* getCartId

  A function that returns the cart ID.

  ```ts
  () => string
  ```

* storefront

  The storefront client instance created by \[\`createStorefrontClient\`]\(docs/api/hydrogen/latest/utilities/createstorefrontclient).

  ```ts
  Storefront
  ```

#### CustomerAccount

* authorize

  On successful login, the customer redirects back to your app. This function validates the OAuth response and exchanges the authorization code for an access token and refresh token. It also persists the tokens on your session. This function should be called and returned from the Remix loader configured as the redirect URI within the Customer Account API settings in admin.

  ```ts
  () => Promise<Response>
  ```

* getAccessToken

  Returns CustomerAccessToken if the customer is logged in. It also run a expiry check and does a token refresh if needed.

  ```ts
  () => Promise<string>
  ```

* getApiUrl

  Creates the fully-qualified URL to your store's GraphQL endpoint.

  ```ts
  () => string
  ```

* getBuyer

  Get buyer token and company location id from session.

  ```ts
  () => Promise<Partial<BuyerInput>>
  ```

* handleAuthStatus

  Check for a not logged in customer and redirect customer to login page. The redirect can be overwritten with \`customAuthStatusHandler\` option.

  ```ts
  () => Promise<void>
  ```

* i18n

  The i18n configuration for Customer Account API

  ```ts
  { language: LanguageCode; }
  ```

* isLoggedIn

  Returns if the customer is logged in. It also checks if the access token is expired and refreshes it if needed.

  ```ts
  () => Promise<boolean>
  ```

* login

  Start the OAuth login flow. This function should be called and returned from a Remix loader. It redirects the customer to a Shopify login domain. It also defined the final path the customer lands on at the end of the oAuth flow with the value of the \`return\_to\` query param. (This is automatically setup unless \`customAuthStatusHandler\` option is in use)

  ```ts
  (options?: LoginOptions) => Promise<Response>
  ```

* logout

  Logout the customer by clearing the session and redirecting to the login domain. It should be called and returned from a Remix action. The path app should redirect to after logout can be setup in Customer Account API settings in admin.

  ```ts
  (options?: LogoutOptions) => Promise<Response>
  ```

* mutate

  Execute a GraphQL mutation against the Customer Account API. This method execute \`handleAuthStatus()\` ahead of mutation.

  ```ts
  <
      OverrideReturnType extends any = never,
      RawGqlString extends string = string,
    >(
      mutation: RawGqlString,
      ...options: ClientVariablesInRestParams<
        CustomerAccountMutations,
        RawGqlString
      >
    ) => Promise<
      Omit<
        CustomerAPIResponse<
          ClientReturn<CustomerAccountMutations, RawGqlString, OverrideReturnType>
        >,
        'errors'
      > & {errors?: JsonGraphQLError[]}
    >
  ```

* query

  Execute a GraphQL query against the Customer Account API. This method execute \`handleAuthStatus()\` ahead of query.

  ```ts
  <
      OverrideReturnType extends any = never,
      RawGqlString extends string = string,
    >(
      query: RawGqlString,
      ...options: ClientVariablesInRestParams<
        CustomerAccountQueries,
        RawGqlString
      >
    ) => Promise<
      Omit<
        CustomerAPIResponse<
          ClientReturn<CustomerAccountQueries, RawGqlString, OverrideReturnType>
        >,
        'errors'
      > & {errors?: JsonGraphQLError[]}
    >
  ```

* setBuyer

  Set buyer information into session.

  ```ts
  (buyer: Partial<BuyerInput>) => void
  ```

* UNSTABLE\_getBuyer

  Deprecated. Please use getBuyer. Get buyer token and company location id from session.

  ```ts
  () => Promise<Partial<BuyerInput>>
  ```

* UNSTABLE\_setBuyer

  Deprecated. Please use setBuyer. Set buyer information into session.

  ```ts
  (buyer: Partial<BuyerInput>) => void
  ```

#### LoginOptions

* acrValues

  ```ts
  string
  ```

* countryCode

  ```ts
  CountryCode
  ```

* locale

  ```ts
  string
  ```

* loginHint

  ```ts
  string
  ```

* loginHintMode

  ```ts
  string
  ```

* uiLocales

  ```ts
  LanguageCode
  ```

#### LogoutOptions

* headers

  Add custom headers to the logout redirect.

  ```ts
  HeadersInit
  ```

* keepSession

  If true, custom data in the session will not be cleared on logout.

  ```ts
  boolean
  ```

* postLogoutRedirectUri

  The url to redirect customer to after logout, should be a relative URL. This url will need to included in Customer Account API's application setup for logout URI. The default value is current app origin, which is automatically setup in admin when using \`--customer-account-push\` flag with dev.

  ```ts
  string
  ```

#### CustomerAccountMutations



#### CustomerAPIResponse

* data

  ```ts
  ReturnType
  ```

* errors

  ```ts
  Array<{
      message: string;
      locations?: Array<{line: number; column: number}>;
      path?: Array<string>;
      extensions: {code: string};
    }>
  ```

* extensions

  ```ts
  { cost: { requestQueryCost: number; actualQueryCakes: number; throttleStatus: { maximumAvailable: number; currentAvailable: number; restoreRate: number; }; }; }
  ```

#### JsonGraphQLError

* extensions

  Reserved for implementors to extend the protocol however they see fit, and hence there are no additional restrictions on its contents.

  ```ts
  { [key: string]: unknown; }
  ```

* locations

  If an error can be associated to a particular point in the requested GraphQL document, it should contain a list of locations.

  ```ts
  { line: number; column: number; }[]
  ```

* message

  ```ts
  string
  ```

* name

  ```ts
  string
  ```

* path

  If an error can be associated to a particular field in the GraphQL result, it \_must\_ contain an entry with the key \`path\` that details the path of the response field which experienced the error. This allows clients to identify whether a null result is intentional or caused by a runtime error.

  ```ts
  (string | number)[]
  ```

* stack

  ```ts
  string
  ```

#### CustomerAccountQueries



#### Storefront

Interface to interact with the Storefront API.

* cache

  ```ts
  Cache
  ```

* CacheCustom

  ```ts
  (overrideOptions: AllCacheOptions) => AllCacheOptions
  ```

* CacheLong

  ```ts
  (overrideOptions?: AllCacheOptions) => AllCacheOptions
  ```

* CacheNone

  ```ts
  () => NoStoreStrategy
  ```

* CacheShort

  ```ts
  (overrideOptions?: AllCacheOptions) => AllCacheOptions
  ```

* forward

  Forwards the request to the Storefront API. It reads the API version from the request URL.

  ```ts
  (request: Request, options?: Pick<StorefrontCommonExtraParams, "storefrontApiVersion">) => Promise<Response>
  ```

* forwardMcp

  Forwards the request to the Storefront MCP endpoint.

  ```ts
  (request: Request) => Promise<Response>
  ```

* generateCacheControlHeader

  ```ts
  (cacheOptions: AllCacheOptions) => string
  ```

* getApiUrl

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "storefrontApiVersion" | "storeDomain">>) => string
  ```

* getHeaders

  ```ts
  () => Record<string, string>
  ```

* getPrivateTokenHeaders

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "contentType">> & Pick<StorefrontClientProps, "privateStorefrontToken"> & { buyerIp?: string; }) => Record<string, string>
  ```

* getPublicTokenHeaders

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "contentType">> & Pick<StorefrontClientProps, "publicStorefrontToken">) => Record<string, string>
  ```

* getShopifyDomain

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "storeDomain">>) => string
  ```

* i18n

  ```ts
  TI18n
  ```

* isMcpUrl

  Checks if the request URL matches the Storefront MCP endpoint.

  ```ts
  (request: { url?: string; }) => boolean
  ```

* isStorefrontApiUrl

  Checks if the request URL matches the Storefront API GraphQL endpoint.

  ```ts
  (request: { url?: string; }) => boolean
  ```

* mutate

  ```ts
  <
      OverrideReturnType extends any = never,
      RawGqlString extends string = string,
    >(
      mutation: RawGqlString,
      ...options: ClientVariablesInRestParams<
        StorefrontMutations,
        RawGqlString,
        StorefrontCommonExtraParams,
        AutoAddedVariableNames
      >
    ) => Promise<
      ClientReturn<StorefrontMutations, RawGqlString, OverrideReturnType> &
        StorefrontError
    >
  ```

* query

  ```ts
  <
      OverrideReturnType extends any = never,
      RawGqlString extends string = string,
    >(
      query: RawGqlString,
      ...options: ClientVariablesInRestParams<
        StorefrontQueries,
        RawGqlString,
        StorefrontCommonExtraParams & Pick<StorefrontQueryOptions, 'cache'>,
        AutoAddedVariableNames
      >
    ) => Promise<
      ClientReturn<StorefrontQueries, RawGqlString, OverrideReturnType> &
        StorefrontError
    >
  ```

* setCollectedSubrequestHeaders

  Sets the collected subrequest headers in the response. Useful to forward the cookies and server-timing headers from server subrequests to the browser.

  ```ts
  (response: { headers: Headers; }) => void
  ```

#### AllCacheOptions

Override options for a cache strategy.

* maxAge

  The maximum amount of time in seconds that a resource will be considered fresh. See \`max-age\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#:\~:text=Response%20Directives-,max%2Dage,-The%20max%2Dage).

  ```ts
  number
  ```

* mode

  The caching mode, generally \`public\`, \`private\`, or \`no-store\`.

  ```ts
  string
  ```

* sMaxAge

  Similar to \`maxAge\` but specific to shared caches. See \`s-maxage\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#s-maxage).

  ```ts
  number
  ```

* staleIfError

  Indicate that the cache should serve the stale response if an error occurs while revalidating the cache. See \`stale-if-error\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-if-error).

  ```ts
  number
  ```

* staleWhileRevalidate

  Indicate that the cache should serve the stale response in the background while revalidating the cache. See \`stale-while-revalidate\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-while-revalidate).

  ```ts
  number
  ```

#### NoStoreStrategy

* mode

  ```ts
  string
  ```

#### StorefrontCommonExtraParams

* displayName

  ```ts
  string
  ```

* headers

  ```ts
  HeadersInit
  ```

* storefrontApiVersion

  ```ts
  string
  ```

#### StorefrontClientProps

* contentType

  Customizes which \`"content-type"\` header is added when using \`getPrivateTokenHeaders()\` and \`getPublicTokenHeaders()\`. When fetching with a \`JSON.stringify()\`-ed \`body\`, use \`"json"\`. When fetching with a \`body\` that is a plain string, use \`"graphql"\`. Defaults to \`"json"\` Can also be customized on a call-by-call basis by passing in \`'contentType'\` to both \`getPrivateTokenHeaders({...})\` and \`getPublicTokenHeaders({...})\`, for example: \`getPublicTokenHeaders({contentType: 'graphql'})\`

  ```ts
  'json' | 'graphql'
  ```

* privateStorefrontToken

  The Storefront API delegate access token. Refer to the \[authentication]\(https://shopify.dev/api/storefront#authentication) and \[delegate access token]\(https://shopify.dev/apps/auth/oauth/delegate-access-tokens) documentation for more details.

  ```ts
  string
  ```

* publicStorefrontToken

  The Storefront API access token. Refer to the \[authentication]\(https://shopify.dev/api/storefront#authentication) documentation for more details.

  ```ts
  string
  ```

* storeDomain

  The host name of the domain (eg: \`{shop}.myshopify.com\`).

  ```ts
  string
  ```

* storefrontApiVersion

  The Storefront API version. This should almost always be the same as the version Hydrogen React was built for. Learn more about Shopify \[API versioning]\(https://shopify.dev/api/usage/versioning) for more details.

  ```ts
  string
  ```

#### StorefrontMutations

Maps all the mutations found in the project to variables and return types.



#### AutoAddedVariableNames

```ts
'country' | 'language'
```

#### StorefrontError

* errors

  ```ts
  StorefrontApiErrors
  ```

#### StorefrontApiErrors

```ts
JsonGraphQLError[] | undefined
```

#### StorefrontQueries

Maps all the queries found in the project to variables and return types.



#### StorefrontQueryOptions

```ts
StorefrontCommonExtraParams & {
  query: string;
  mutation?: never;
  cache?: CachingStrategy;
}
```

#### CachingStrategy

Use the \`CachingStrategy\` to define a custom caching mechanism for your data. Or use one of the pre-defined caching strategies: CacheNone, CacheShort, CacheLong.

* maxAge

  The maximum amount of time in seconds that a resource will be considered fresh. See \`max-age\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#:\~:text=Response%20Directives-,max%2Dage,-The%20max%2Dage).

  ```ts
  number
  ```

* mode

  The caching mode, generally \`public\`, \`private\`, or \`no-store\`.

  ```ts
  string
  ```

* sMaxAge

  Similar to \`maxAge\` but specific to shared caches. See \`s-maxage\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#s-maxage).

  ```ts
  number
  ```

* staleIfError

  Indicate that the cache should serve the stale response if an error occurs while revalidating the cache. See \`stale-if-error\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-if-error).

  ```ts
  number
  ```

* staleWhileRevalidate

  Indicate that the cache should serve the stale response in the background while revalidating the cache. See \`stale-while-revalidate\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-while-revalidate).

  ```ts
  number
  ```

#### Headers



#### CartGiftCardCodesRemoveFunction

* appliedGiftCardIds

  ```ts
  string[]
  ```

* optionalParams

  ```ts
  CartOptionalInput
  ```

returns

```ts
Promise<CartQueryDataReturn>
```

#### CartOptionalInput

* cartId

  The cart id.

  ```ts
  string
  ```

* country

  The country code.

  ```ts
  CountryCode
  ```

* language

  The language code.

  ```ts
  LanguageCode
  ```

* visitorConsent

  Visitor consent preferences for the Storefront API's

  ```ts
  VisitorConsent
  ```

#### VisitorConsent

* analytics

  ```ts
  ConsentStatus
  ```

* marketing

  ```ts
  ConsentStatus
  ```

* preferences

  ```ts
  ConsentStatus
  ```

* sale\_of\_data

  ```ts
  ConsentStatus
  ```

#### ConsentStatus

```ts
boolean | undefined
```

#### CartQueryDataReturn

```ts
CartQueryData & {
  errors?: StorefrontApiErrors;
}
```

#### CartQueryData

* cart

  ```ts
  Cart
  ```

* userErrors

  ```ts
  | CartUserError[]
      | MetafieldsSetUserError[]
      | MetafieldDeleteUserError[]
  ```

* warnings

  ```ts
  CartWarning[]
  ```

#### Cart

* attributes

  The cart's attributes.

  ```ts
  { __typename?: "Attribute"; key?: string; value?: string; }[]
  ```

* buyerIdentity

  The cart's buyer identity.

  ```ts
  CartType['buyerIdentity']
  ```

* checkoutUrl

  The checkout URL for the cart, if the cart has been created in the Storefront API.

  ```ts
  string
  ```

* cost

  The cost for the cart, including the subtotal, total, taxes, and duties.

  ```ts
  CartType['cost']
  ```

* discountCodes

  The discount codes applied to the cart.

  ```ts
  { __typename?: "CartDiscountCode"; applicable?: boolean; code?: string; }[]
  ```

* id

  The cart's ID if it has been created through the Storefront API.

  ```ts
  string
  ```

* lines

  The cart lines.

  ```ts
  Array<CartLine | ComponentizableCartLine>
  ```

* note

  The cart's note.

  ```ts
  string
  ```

* totalQuantity

  The total number of items in the cart, across all lines. If there are no lines, then the value is 0.

  ```ts
  number
  ```

#### CartUserError



#### MetafieldsSetUserError



#### MetafieldDeleteUserError



#### CartWarning



Examples

#### Examples

* #### Example

  ##### JavaScript

  ```js
  import {cartGiftCardCodesRemoveDefault} from '@shopify/hydrogen';

  export async function action({context}) {
    const cartRemoveGiftCardCodes = cartGiftCardCodesRemoveDefault({
      storefront: context.storefront,
      getCartId: () => context.cart.getCartId(),
    });

    const result = await cartRemoveGiftCardCodes([
      'GIFT_CARD_CODE_1',
      'GIFT_CARD_CODE_2',
    ]);
    return result;
  }
  ```

  ##### TypeScript

  ```ts
  import {
    cartGiftCardCodesRemoveDefault,
    type HydrogenCart,
    type CartQueryOptions,
  } from '@shopify/hydrogen';

  export async function action({context}: {context: CartQueryOptions}) {
    const cartRemoveGiftCardCodes: HydrogenCart['removeGiftCardCodes'] =
      cartGiftCardCodesRemoveDefault({
        storefront: context.storefront,
        getCartId: context.getCartId,
      });

    const result = await cartRemoveGiftCardCodes([
      'GIFT_CARD_CODE_1',
      'GIFT_CARD_CODE_2',
    ]);
    return result;
  }
  ```

***

### Related

[- cartGiftCardCodesUpdateDefault](https://shopify.dev/docs/api/hydrogen/2026-04/utilities/cart/cartgiftcardcodesupdatedefault)

[- createCartHandler](https://shopify.dev/docs/api/hydrogen/2026-04/utilities/cart/createcarthandler)

***

---



<a id="latest-utilities-cart-cartgiftcardcodesupdatedefault"></a>


## cartGiftCardCodesUpdateDefault

Creates a function that accepts an array of strings and adds the gift card codes to a cart

### cart​Gift​Card​Codes​Update​Default(**[options](#cartgiftcardcodesupdatedefault-propertydetail-options)**​)

Updates (replaces) gift card codes in the cart.

To add codes without replacing, use `cartGiftCardCodesAdd` (API 2025-10+).

#### Parameters

* **options**

  **CartQueryOptions**

  **required**

  Cart query options including storefront client and cart fragment.

#### Returns

* **CartGiftCardCodesUpdateFunction**

  * Function accepting gift card codes array and optional parameters.

#### CartQueryOptions

* cartFragment

  The cart fragment to override the one used in this query.

  ```ts
  string
  ```

* customerAccount

  The customer account instance created by \[\`createCustomerAccount\`]\(docs/api/hydrogen/latest/customer/createcustomeraccount).

  ```ts
  CustomerAccount
  ```

* getCartId

  A function that returns the cart ID.

  ```ts
  () => string
  ```

* storefront

  The storefront client instance created by \[\`createStorefrontClient\`]\(docs/api/hydrogen/latest/utilities/createstorefrontclient).

  ```ts
  Storefront
  ```

#### CustomerAccount

* authorize

  On successful login, the customer redirects back to your app. This function validates the OAuth response and exchanges the authorization code for an access token and refresh token. It also persists the tokens on your session. This function should be called and returned from the Remix loader configured as the redirect URI within the Customer Account API settings in admin.

  ```ts
  () => Promise<Response>
  ```

* getAccessToken

  Returns CustomerAccessToken if the customer is logged in. It also run a expiry check and does a token refresh if needed.

  ```ts
  () => Promise<string>
  ```

* getApiUrl

  Creates the fully-qualified URL to your store's GraphQL endpoint.

  ```ts
  () => string
  ```

* getBuyer

  Get buyer token and company location id from session.

  ```ts
  () => Promise<Partial<BuyerInput>>
  ```

* handleAuthStatus

  Check for a not logged in customer and redirect customer to login page. The redirect can be overwritten with \`customAuthStatusHandler\` option.

  ```ts
  () => Promise<void>
  ```

* i18n

  The i18n configuration for Customer Account API

  ```ts
  { language: LanguageCode; }
  ```

* isLoggedIn

  Returns if the customer is logged in. It also checks if the access token is expired and refreshes it if needed.

  ```ts
  () => Promise<boolean>
  ```

* login

  Start the OAuth login flow. This function should be called and returned from a Remix loader. It redirects the customer to a Shopify login domain. It also defined the final path the customer lands on at the end of the oAuth flow with the value of the \`return\_to\` query param. (This is automatically setup unless \`customAuthStatusHandler\` option is in use)

  ```ts
  (options?: LoginOptions) => Promise<Response>
  ```

* logout

  Logout the customer by clearing the session and redirecting to the login domain. It should be called and returned from a Remix action. The path app should redirect to after logout can be setup in Customer Account API settings in admin.

  ```ts
  (options?: LogoutOptions) => Promise<Response>
  ```

* mutate

  Execute a GraphQL mutation against the Customer Account API. This method execute \`handleAuthStatus()\` ahead of mutation.

  ```ts
  <
      OverrideReturnType extends any = never,
      RawGqlString extends string = string,
    >(
      mutation: RawGqlString,
      ...options: ClientVariablesInRestParams<
        CustomerAccountMutations,
        RawGqlString
      >
    ) => Promise<
      Omit<
        CustomerAPIResponse<
          ClientReturn<CustomerAccountMutations, RawGqlString, OverrideReturnType>
        >,
        'errors'
      > & {errors?: JsonGraphQLError[]}
    >
  ```

* query

  Execute a GraphQL query against the Customer Account API. This method execute \`handleAuthStatus()\` ahead of query.

  ```ts
  <
      OverrideReturnType extends any = never,
      RawGqlString extends string = string,
    >(
      query: RawGqlString,
      ...options: ClientVariablesInRestParams<
        CustomerAccountQueries,
        RawGqlString
      >
    ) => Promise<
      Omit<
        CustomerAPIResponse<
          ClientReturn<CustomerAccountQueries, RawGqlString, OverrideReturnType>
        >,
        'errors'
      > & {errors?: JsonGraphQLError[]}
    >
  ```

* setBuyer

  Set buyer information into session.

  ```ts
  (buyer: Partial<BuyerInput>) => void
  ```

* UNSTABLE\_getBuyer

  Deprecated. Please use getBuyer. Get buyer token and company location id from session.

  ```ts
  () => Promise<Partial<BuyerInput>>
  ```

* UNSTABLE\_setBuyer

  Deprecated. Please use setBuyer. Set buyer information into session.

  ```ts
  (buyer: Partial<BuyerInput>) => void
  ```

#### LoginOptions

* acrValues

  ```ts
  string
  ```

* countryCode

  ```ts
  CountryCode
  ```

* locale

  ```ts
  string
  ```

* loginHint

  ```ts
  string
  ```

* loginHintMode

  ```ts
  string
  ```

* uiLocales

  ```ts
  LanguageCode
  ```

#### LogoutOptions

* headers

  Add custom headers to the logout redirect.

  ```ts
  HeadersInit
  ```

* keepSession

  If true, custom data in the session will not be cleared on logout.

  ```ts
  boolean
  ```

* postLogoutRedirectUri

  The url to redirect customer to after logout, should be a relative URL. This url will need to included in Customer Account API's application setup for logout URI. The default value is current app origin, which is automatically setup in admin when using \`--customer-account-push\` flag with dev.

  ```ts
  string
  ```

#### CustomerAccountMutations



#### CustomerAPIResponse

* data

  ```ts
  ReturnType
  ```

* errors

  ```ts
  Array<{
      message: string;
      locations?: Array<{line: number; column: number}>;
      path?: Array<string>;
      extensions: {code: string};
    }>
  ```

* extensions

  ```ts
  { cost: { requestQueryCost: number; actualQueryCakes: number; throttleStatus: { maximumAvailable: number; currentAvailable: number; restoreRate: number; }; }; }
  ```

#### JsonGraphQLError

* extensions

  Reserved for implementors to extend the protocol however they see fit, and hence there are no additional restrictions on its contents.

  ```ts
  { [key: string]: unknown; }
  ```

* locations

  If an error can be associated to a particular point in the requested GraphQL document, it should contain a list of locations.

  ```ts
  { line: number; column: number; }[]
  ```

* message

  ```ts
  string
  ```

* name

  ```ts
  string
  ```

* path

  If an error can be associated to a particular field in the GraphQL result, it \_must\_ contain an entry with the key \`path\` that details the path of the response field which experienced the error. This allows clients to identify whether a null result is intentional or caused by a runtime error.

  ```ts
  (string | number)[]
  ```

* stack

  ```ts
  string
  ```

#### CustomerAccountQueries



#### Storefront

Interface to interact with the Storefront API.

* cache

  ```ts
  Cache
  ```

* CacheCustom

  ```ts
  (overrideOptions: AllCacheOptions) => AllCacheOptions
  ```

* CacheLong

  ```ts
  (overrideOptions?: AllCacheOptions) => AllCacheOptions
  ```

* CacheNone

  ```ts
  () => NoStoreStrategy
  ```

* CacheShort

  ```ts
  (overrideOptions?: AllCacheOptions) => AllCacheOptions
  ```

* forward

  Forwards the request to the Storefront API. It reads the API version from the request URL.

  ```ts
  (request: Request, options?: Pick<StorefrontCommonExtraParams, "storefrontApiVersion">) => Promise<Response>
  ```

* forwardMcp

  Forwards the request to the Storefront MCP endpoint.

  ```ts
  (request: Request) => Promise<Response>
  ```

* generateCacheControlHeader

  ```ts
  (cacheOptions: AllCacheOptions) => string
  ```

* getApiUrl

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "storefrontApiVersion" | "storeDomain">>) => string
  ```

* getHeaders

  ```ts
  () => Record<string, string>
  ```

* getPrivateTokenHeaders

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "contentType">> & Pick<StorefrontClientProps, "privateStorefrontToken"> & { buyerIp?: string; }) => Record<string, string>
  ```

* getPublicTokenHeaders

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "contentType">> & Pick<StorefrontClientProps, "publicStorefrontToken">) => Record<string, string>
  ```

* getShopifyDomain

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "storeDomain">>) => string
  ```

* i18n

  ```ts
  TI18n
  ```

* isMcpUrl

  Checks if the request URL matches the Storefront MCP endpoint.

  ```ts
  (request: { url?: string; }) => boolean
  ```

* isStorefrontApiUrl

  Checks if the request URL matches the Storefront API GraphQL endpoint.

  ```ts
  (request: { url?: string; }) => boolean
  ```

* mutate

  ```ts
  <
      OverrideReturnType extends any = never,
      RawGqlString extends string = string,
    >(
      mutation: RawGqlString,
      ...options: ClientVariablesInRestParams<
        StorefrontMutations,
        RawGqlString,
        StorefrontCommonExtraParams,
        AutoAddedVariableNames
      >
    ) => Promise<
      ClientReturn<StorefrontMutations, RawGqlString, OverrideReturnType> &
        StorefrontError
    >
  ```

* query

  ```ts
  <
      OverrideReturnType extends any = never,
      RawGqlString extends string = string,
    >(
      query: RawGqlString,
      ...options: ClientVariablesInRestParams<
        StorefrontQueries,
        RawGqlString,
        StorefrontCommonExtraParams & Pick<StorefrontQueryOptions, 'cache'>,
        AutoAddedVariableNames
      >
    ) => Promise<
      ClientReturn<StorefrontQueries, RawGqlString, OverrideReturnType> &
        StorefrontError
    >
  ```

* setCollectedSubrequestHeaders

  Sets the collected subrequest headers in the response. Useful to forward the cookies and server-timing headers from server subrequests to the browser.

  ```ts
  (response: { headers: Headers; }) => void
  ```

#### AllCacheOptions

Override options for a cache strategy.

* maxAge

  The maximum amount of time in seconds that a resource will be considered fresh. See \`max-age\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#:\~:text=Response%20Directives-,max%2Dage,-The%20max%2Dage).

  ```ts
  number
  ```

* mode

  The caching mode, generally \`public\`, \`private\`, or \`no-store\`.

  ```ts
  string
  ```

* sMaxAge

  Similar to \`maxAge\` but specific to shared caches. See \`s-maxage\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#s-maxage).

  ```ts
  number
  ```

* staleIfError

  Indicate that the cache should serve the stale response if an error occurs while revalidating the cache. See \`stale-if-error\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-if-error).

  ```ts
  number
  ```

* staleWhileRevalidate

  Indicate that the cache should serve the stale response in the background while revalidating the cache. See \`stale-while-revalidate\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-while-revalidate).

  ```ts
  number
  ```

#### NoStoreStrategy

* mode

  ```ts
  string
  ```

#### StorefrontCommonExtraParams

* displayName

  ```ts
  string
  ```

* headers

  ```ts
  HeadersInit
  ```

* storefrontApiVersion

  ```ts
  string
  ```

#### StorefrontClientProps

* contentType

  Customizes which \`"content-type"\` header is added when using \`getPrivateTokenHeaders()\` and \`getPublicTokenHeaders()\`. When fetching with a \`JSON.stringify()\`-ed \`body\`, use \`"json"\`. When fetching with a \`body\` that is a plain string, use \`"graphql"\`. Defaults to \`"json"\` Can also be customized on a call-by-call basis by passing in \`'contentType'\` to both \`getPrivateTokenHeaders({...})\` and \`getPublicTokenHeaders({...})\`, for example: \`getPublicTokenHeaders({contentType: 'graphql'})\`

  ```ts
  'json' | 'graphql'
  ```

* privateStorefrontToken

  The Storefront API delegate access token. Refer to the \[authentication]\(https://shopify.dev/api/storefront#authentication) and \[delegate access token]\(https://shopify.dev/apps/auth/oauth/delegate-access-tokens) documentation for more details.

  ```ts
  string
  ```

* publicStorefrontToken

  The Storefront API access token. Refer to the \[authentication]\(https://shopify.dev/api/storefront#authentication) documentation for more details.

  ```ts
  string
  ```

* storeDomain

  The host name of the domain (eg: \`{shop}.myshopify.com\`).

  ```ts
  string
  ```

* storefrontApiVersion

  The Storefront API version. This should almost always be the same as the version Hydrogen React was built for. Learn more about Shopify \[API versioning]\(https://shopify.dev/api/usage/versioning) for more details.

  ```ts
  string
  ```

#### StorefrontMutations

Maps all the mutations found in the project to variables and return types.



#### AutoAddedVariableNames

```ts
'country' | 'language'
```

#### StorefrontError

* errors

  ```ts
  StorefrontApiErrors
  ```

#### StorefrontApiErrors

```ts
JsonGraphQLError[] | undefined
```

#### StorefrontQueries

Maps all the queries found in the project to variables and return types.



#### StorefrontQueryOptions

```ts
StorefrontCommonExtraParams & {
  query: string;
  mutation?: never;
  cache?: CachingStrategy;
}
```

#### CachingStrategy

Use the \`CachingStrategy\` to define a custom caching mechanism for your data. Or use one of the pre-defined caching strategies: CacheNone, CacheShort, CacheLong.

* maxAge

  The maximum amount of time in seconds that a resource will be considered fresh. See \`max-age\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#:\~:text=Response%20Directives-,max%2Dage,-The%20max%2Dage).

  ```ts
  number
  ```

* mode

  The caching mode, generally \`public\`, \`private\`, or \`no-store\`.

  ```ts
  string
  ```

* sMaxAge

  Similar to \`maxAge\` but specific to shared caches. See \`s-maxage\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#s-maxage).

  ```ts
  number
  ```

* staleIfError

  Indicate that the cache should serve the stale response if an error occurs while revalidating the cache. See \`stale-if-error\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-if-error).

  ```ts
  number
  ```

* staleWhileRevalidate

  Indicate that the cache should serve the stale response in the background while revalidating the cache. See \`stale-while-revalidate\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-while-revalidate).

  ```ts
  number
  ```

#### Headers



#### CartGiftCardCodesUpdateFunction

* giftCardCodes

  ```ts
  string[]
  ```

* optionalParams

  ```ts
  CartOptionalInput
  ```

returns

```ts
Promise<CartQueryDataReturn>
```

#### CartOptionalInput

* cartId

  The cart id.

  ```ts
  string
  ```

* country

  The country code.

  ```ts
  CountryCode
  ```

* language

  The language code.

  ```ts
  LanguageCode
  ```

* visitorConsent

  Visitor consent preferences for the Storefront API's

  ```ts
  VisitorConsent
  ```

#### VisitorConsent

* analytics

  ```ts
  ConsentStatus
  ```

* marketing

  ```ts
  ConsentStatus
  ```

* preferences

  ```ts
  ConsentStatus
  ```

* sale\_of\_data

  ```ts
  ConsentStatus
  ```

#### ConsentStatus

```ts
boolean | undefined
```

#### CartQueryDataReturn

```ts
CartQueryData & {
  errors?: StorefrontApiErrors;
}
```

#### CartQueryData

* cart

  ```ts
  Cart
  ```

* userErrors

  ```ts
  | CartUserError[]
      | MetafieldsSetUserError[]
      | MetafieldDeleteUserError[]
  ```

* warnings

  ```ts
  CartWarning[]
  ```

#### Cart

* attributes

  The cart's attributes.

  ```ts
  { __typename?: "Attribute"; key?: string; value?: string; }[]
  ```

* buyerIdentity

  The cart's buyer identity.

  ```ts
  CartType['buyerIdentity']
  ```

* checkoutUrl

  The checkout URL for the cart, if the cart has been created in the Storefront API.

  ```ts
  string
  ```

* cost

  The cost for the cart, including the subtotal, total, taxes, and duties.

  ```ts
  CartType['cost']
  ```

* discountCodes

  The discount codes applied to the cart.

  ```ts
  { __typename?: "CartDiscountCode"; applicable?: boolean; code?: string; }[]
  ```

* id

  The cart's ID if it has been created through the Storefront API.

  ```ts
  string
  ```

* lines

  The cart lines.

  ```ts
  Array<CartLine | ComponentizableCartLine>
  ```

* note

  The cart's note.

  ```ts
  string
  ```

* totalQuantity

  The total number of items in the cart, across all lines. If there are no lines, then the value is 0.

  ```ts
  number
  ```

#### CartUserError



#### MetafieldsSetUserError



#### MetafieldDeleteUserError



#### CartWarning



Examples

#### Examples

* ####

  ##### JavaScript

  ```js
  import {cartGiftCardCodesUpdateDefault} from '@shopify/hydrogen';

  const cartGiftCardCodes = cartGiftCardCodesUpdateDefault({
    storefront,
    getCartId,
  });

  const result = await cartGiftCardCodes(['GIFT_CARD_CODE_123']);
  ```

***

---



<a id="latest-utilities-cart-cartlinesadddefault"></a>


## cartLinesAddDefault

Creates a function that accepts an array of [CartLineInput](https://shopify.dev/docs/api/storefront/2026-01/input-objects/CartLineInput) and adds the line items to a cart

### cart​Lines​Add​Default(**[options](#cartlinesadddefault-propertydetail-options)**​)

#### Parameters

* **options**

  **CartQueryOptions**

  **required**

#### Returns

* **CartLinesAddFunction**

#### CartQueryOptions

* cartFragment

  The cart fragment to override the one used in this query.

  ```ts
  string
  ```

* customerAccount

  The customer account instance created by \[\`createCustomerAccount\`]\(docs/api/hydrogen/latest/customer/createcustomeraccount).

  ```ts
  CustomerAccount
  ```

* getCartId

  A function that returns the cart ID.

  ```ts
  () => string
  ```

* storefront

  The storefront client instance created by \[\`createStorefrontClient\`]\(docs/api/hydrogen/latest/utilities/createstorefrontclient).

  ```ts
  Storefront
  ```

#### CustomerAccount

* authorize

  On successful login, the customer redirects back to your app. This function validates the OAuth response and exchanges the authorization code for an access token and refresh token. It also persists the tokens on your session. This function should be called and returned from the Remix loader configured as the redirect URI within the Customer Account API settings in admin.

  ```ts
  () => Promise<Response>
  ```

* getAccessToken

  Returns CustomerAccessToken if the customer is logged in. It also run a expiry check and does a token refresh if needed.

  ```ts
  () => Promise<string>
  ```

* getApiUrl

  Creates the fully-qualified URL to your store's GraphQL endpoint.

  ```ts
  () => string
  ```

* getBuyer

  Get buyer token and company location id from session.

  ```ts
  () => Promise<Partial<BuyerInput>>
  ```

* handleAuthStatus

  Check for a not logged in customer and redirect customer to login page. The redirect can be overwritten with \`customAuthStatusHandler\` option.

  ```ts
  () => Promise<void>
  ```

* i18n

  The i18n configuration for Customer Account API

  ```ts
  { language: LanguageCode; }
  ```

* isLoggedIn

  Returns if the customer is logged in. It also checks if the access token is expired and refreshes it if needed.

  ```ts
  () => Promise<boolean>
  ```

* login

  Start the OAuth login flow. This function should be called and returned from a Remix loader. It redirects the customer to a Shopify login domain. It also defined the final path the customer lands on at the end of the oAuth flow with the value of the \`return\_to\` query param. (This is automatically setup unless \`customAuthStatusHandler\` option is in use)

  ```ts
  (options?: LoginOptions) => Promise<Response>
  ```

* logout

  Logout the customer by clearing the session and redirecting to the login domain. It should be called and returned from a Remix action. The path app should redirect to after logout can be setup in Customer Account API settings in admin.

  ```ts
  (options?: LogoutOptions) => Promise<Response>
  ```

* mutate

  Execute a GraphQL mutation against the Customer Account API. This method execute \`handleAuthStatus()\` ahead of mutation.

  ```ts
  <
      OverrideReturnType extends any = never,
      RawGqlString extends string = string,
    >(
      mutation: RawGqlString,
      ...options: ClientVariablesInRestParams<
        CustomerAccountMutations,
        RawGqlString
      >
    ) => Promise<
      Omit<
        CustomerAPIResponse<
          ClientReturn<CustomerAccountMutations, RawGqlString, OverrideReturnType>
        >,
        'errors'
      > & {errors?: JsonGraphQLError[]}
    >
  ```

* query

  Execute a GraphQL query against the Customer Account API. This method execute \`handleAuthStatus()\` ahead of query.

  ```ts
  <
      OverrideReturnType extends any = never,
      RawGqlString extends string = string,
    >(
      query: RawGqlString,
      ...options: ClientVariablesInRestParams<
        CustomerAccountQueries,
        RawGqlString
      >
    ) => Promise<
      Omit<
        CustomerAPIResponse<
          ClientReturn<CustomerAccountQueries, RawGqlString, OverrideReturnType>
        >,
        'errors'
      > & {errors?: JsonGraphQLError[]}
    >
  ```

* setBuyer

  Set buyer information into session.

  ```ts
  (buyer: Partial<BuyerInput>) => void
  ```

* UNSTABLE\_getBuyer

  Deprecated. Please use getBuyer. Get buyer token and company location id from session.

  ```ts
  () => Promise<Partial<BuyerInput>>
  ```

* UNSTABLE\_setBuyer

  Deprecated. Please use setBuyer. Set buyer information into session.

  ```ts
  (buyer: Partial<BuyerInput>) => void
  ```

#### LoginOptions

* acrValues

  ```ts
  string
  ```

* countryCode

  ```ts
  CountryCode
  ```

* locale

  ```ts
  string
  ```

* loginHint

  ```ts
  string
  ```

* loginHintMode

  ```ts
  string
  ```

* uiLocales

  ```ts
  LanguageCode
  ```

#### LogoutOptions

* headers

  Add custom headers to the logout redirect.

  ```ts
  HeadersInit
  ```

* keepSession

  If true, custom data in the session will not be cleared on logout.

  ```ts
  boolean
  ```

* postLogoutRedirectUri

  The url to redirect customer to after logout, should be a relative URL. This url will need to included in Customer Account API's application setup for logout URI. The default value is current app origin, which is automatically setup in admin when using \`--customer-account-push\` flag with dev.

  ```ts
  string
  ```

#### CustomerAccountMutations



#### CustomerAPIResponse

* data

  ```ts
  ReturnType
  ```

* errors

  ```ts
  Array<{
      message: string;
      locations?: Array<{line: number; column: number}>;
      path?: Array<string>;
      extensions: {code: string};
    }>
  ```

* extensions

  ```ts
  { cost: { requestQueryCost: number; actualQueryCakes: number; throttleStatus: { maximumAvailable: number; currentAvailable: number; restoreRate: number; }; }; }
  ```

#### JsonGraphQLError

* extensions

  Reserved for implementors to extend the protocol however they see fit, and hence there are no additional restrictions on its contents.

  ```ts
  { [key: string]: unknown; }
  ```

* locations

  If an error can be associated to a particular point in the requested GraphQL document, it should contain a list of locations.

  ```ts
  { line: number; column: number; }[]
  ```

* message

  ```ts
  string
  ```

* name

  ```ts
  string
  ```

* path

  If an error can be associated to a particular field in the GraphQL result, it \_must\_ contain an entry with the key \`path\` that details the path of the response field which experienced the error. This allows clients to identify whether a null result is intentional or caused by a runtime error.

  ```ts
  (string | number)[]
  ```

* stack

  ```ts
  string
  ```

#### CustomerAccountQueries



#### Storefront

Interface to interact with the Storefront API.

* cache

  ```ts
  Cache
  ```

* CacheCustom

  ```ts
  (overrideOptions: AllCacheOptions) => AllCacheOptions
  ```

* CacheLong

  ```ts
  (overrideOptions?: AllCacheOptions) => AllCacheOptions
  ```

* CacheNone

  ```ts
  () => NoStoreStrategy
  ```

* CacheShort

  ```ts
  (overrideOptions?: AllCacheOptions) => AllCacheOptions
  ```

* forward

  Forwards the request to the Storefront API. It reads the API version from the request URL.

  ```ts
  (request: Request, options?: Pick<StorefrontCommonExtraParams, "storefrontApiVersion">) => Promise<Response>
  ```

* forwardMcp

  Forwards the request to the Storefront MCP endpoint.

  ```ts
  (request: Request) => Promise<Response>
  ```

* generateCacheControlHeader

  ```ts
  (cacheOptions: AllCacheOptions) => string
  ```

* getApiUrl

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "storefrontApiVersion" | "storeDomain">>) => string
  ```

* getHeaders

  ```ts
  () => Record<string, string>
  ```

* getPrivateTokenHeaders

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "contentType">> & Pick<StorefrontClientProps, "privateStorefrontToken"> & { buyerIp?: string; }) => Record<string, string>
  ```

* getPublicTokenHeaders

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "contentType">> & Pick<StorefrontClientProps, "publicStorefrontToken">) => Record<string, string>
  ```

* getShopifyDomain

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "storeDomain">>) => string
  ```

* i18n

  ```ts
  TI18n
  ```

* isMcpUrl

  Checks if the request URL matches the Storefront MCP endpoint.

  ```ts
  (request: { url?: string; }) => boolean
  ```

* isStorefrontApiUrl

  Checks if the request URL matches the Storefront API GraphQL endpoint.

  ```ts
  (request: { url?: string; }) => boolean
  ```

* mutate

  ```ts
  <
      OverrideReturnType extends any = never,
      RawGqlString extends string = string,
    >(
      mutation: RawGqlString,
      ...options: ClientVariablesInRestParams<
        StorefrontMutations,
        RawGqlString,
        StorefrontCommonExtraParams,
        AutoAddedVariableNames
      >
    ) => Promise<
      ClientReturn<StorefrontMutations, RawGqlString, OverrideReturnType> &
        StorefrontError
    >
  ```

* query

  ```ts
  <
      OverrideReturnType extends any = never,
      RawGqlString extends string = string,
    >(
      query: RawGqlString,
      ...options: ClientVariablesInRestParams<
        StorefrontQueries,
        RawGqlString,
        StorefrontCommonExtraParams & Pick<StorefrontQueryOptions, 'cache'>,
        AutoAddedVariableNames
      >
    ) => Promise<
      ClientReturn<StorefrontQueries, RawGqlString, OverrideReturnType> &
        StorefrontError
    >
  ```

* setCollectedSubrequestHeaders

  Sets the collected subrequest headers in the response. Useful to forward the cookies and server-timing headers from server subrequests to the browser.

  ```ts
  (response: { headers: Headers; }) => void
  ```

#### AllCacheOptions

Override options for a cache strategy.

* maxAge

  The maximum amount of time in seconds that a resource will be considered fresh. See \`max-age\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#:\~:text=Response%20Directives-,max%2Dage,-The%20max%2Dage).

  ```ts
  number
  ```

* mode

  The caching mode, generally \`public\`, \`private\`, or \`no-store\`.

  ```ts
  string
  ```

* sMaxAge

  Similar to \`maxAge\` but specific to shared caches. See \`s-maxage\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#s-maxage).

  ```ts
  number
  ```

* staleIfError

  Indicate that the cache should serve the stale response if an error occurs while revalidating the cache. See \`stale-if-error\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-if-error).

  ```ts
  number
  ```

* staleWhileRevalidate

  Indicate that the cache should serve the stale response in the background while revalidating the cache. See \`stale-while-revalidate\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-while-revalidate).

  ```ts
  number
  ```

#### NoStoreStrategy

* mode

  ```ts
  string
  ```

#### StorefrontCommonExtraParams

* displayName

  ```ts
  string
  ```

* headers

  ```ts
  HeadersInit
  ```

* storefrontApiVersion

  ```ts
  string
  ```

#### StorefrontClientProps

* contentType

  Customizes which \`"content-type"\` header is added when using \`getPrivateTokenHeaders()\` and \`getPublicTokenHeaders()\`. When fetching with a \`JSON.stringify()\`-ed \`body\`, use \`"json"\`. When fetching with a \`body\` that is a plain string, use \`"graphql"\`. Defaults to \`"json"\` Can also be customized on a call-by-call basis by passing in \`'contentType'\` to both \`getPrivateTokenHeaders({...})\` and \`getPublicTokenHeaders({...})\`, for example: \`getPublicTokenHeaders({contentType: 'graphql'})\`

  ```ts
  'json' | 'graphql'
  ```

* privateStorefrontToken

  The Storefront API delegate access token. Refer to the \[authentication]\(https://shopify.dev/api/storefront#authentication) and \[delegate access token]\(https://shopify.dev/apps/auth/oauth/delegate-access-tokens) documentation for more details.

  ```ts
  string
  ```

* publicStorefrontToken

  The Storefront API access token. Refer to the \[authentication]\(https://shopify.dev/api/storefront#authentication) documentation for more details.

  ```ts
  string
  ```

* storeDomain

  The host name of the domain (eg: \`{shop}.myshopify.com\`).

  ```ts
  string
  ```

* storefrontApiVersion

  The Storefront API version. This should almost always be the same as the version Hydrogen React was built for. Learn more about Shopify \[API versioning]\(https://shopify.dev/api/usage/versioning) for more details.

  ```ts
  string
  ```

#### StorefrontMutations

Maps all the mutations found in the project to variables and return types.



#### AutoAddedVariableNames

```ts
'country' | 'language'
```

#### StorefrontError

* errors

  ```ts
  StorefrontApiErrors
  ```

#### StorefrontApiErrors

```ts
JsonGraphQLError[] | undefined
```

#### StorefrontQueries

Maps all the queries found in the project to variables and return types.



#### StorefrontQueryOptions

```ts
StorefrontCommonExtraParams & {
  query: string;
  mutation?: never;
  cache?: CachingStrategy;
}
```

#### CachingStrategy

Use the \`CachingStrategy\` to define a custom caching mechanism for your data. Or use one of the pre-defined caching strategies: CacheNone, CacheShort, CacheLong.

* maxAge

  The maximum amount of time in seconds that a resource will be considered fresh. See \`max-age\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#:\~:text=Response%20Directives-,max%2Dage,-The%20max%2Dage).

  ```ts
  number
  ```

* mode

  The caching mode, generally \`public\`, \`private\`, or \`no-store\`.

  ```ts
  string
  ```

* sMaxAge

  Similar to \`maxAge\` but specific to shared caches. See \`s-maxage\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#s-maxage).

  ```ts
  number
  ```

* staleIfError

  Indicate that the cache should serve the stale response if an error occurs while revalidating the cache. See \`stale-if-error\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-if-error).

  ```ts
  number
  ```

* staleWhileRevalidate

  Indicate that the cache should serve the stale response in the background while revalidating the cache. See \`stale-while-revalidate\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-while-revalidate).

  ```ts
  number
  ```

#### Headers



#### CartLinesAddFunction

* lines

  ```ts
  CartLineInput[]
  ```

* optionalParams

  ```ts
  CartOptionalInput
  ```

returns

```ts
Promise<CartQueryDataReturn>
```

#### CartLineInput



#### CartOptionalInput

* cartId

  The cart id.

  ```ts
  string
  ```

* country

  The country code.

  ```ts
  CountryCode
  ```

* language

  The language code.

  ```ts
  LanguageCode
  ```

* visitorConsent

  Visitor consent preferences for the Storefront API's

  ```ts
  VisitorConsent
  ```

#### VisitorConsent

* analytics

  ```ts
  ConsentStatus
  ```

* marketing

  ```ts
  ConsentStatus
  ```

* preferences

  ```ts
  ConsentStatus
  ```

* sale\_of\_data

  ```ts
  ConsentStatus
  ```

#### ConsentStatus

```ts
boolean | undefined
```

#### CartQueryDataReturn

```ts
CartQueryData & {
  errors?: StorefrontApiErrors;
}
```

#### CartQueryData

* cart

  ```ts
  Cart
  ```

* userErrors

  ```ts
  | CartUserError[]
      | MetafieldsSetUserError[]
      | MetafieldDeleteUserError[]
  ```

* warnings

  ```ts
  CartWarning[]
  ```

#### Cart

* attributes

  The cart's attributes.

  ```ts
  { __typename?: "Attribute"; key?: string; value?: string; }[]
  ```

* buyerIdentity

  The cart's buyer identity.

  ```ts
  CartType['buyerIdentity']
  ```

* checkoutUrl

  The checkout URL for the cart, if the cart has been created in the Storefront API.

  ```ts
  string
  ```

* cost

  The cost for the cart, including the subtotal, total, taxes, and duties.

  ```ts
  CartType['cost']
  ```

* discountCodes

  The discount codes applied to the cart.

  ```ts
  { __typename?: "CartDiscountCode"; applicable?: boolean; code?: string; }[]
  ```

* id

  The cart's ID if it has been created through the Storefront API.

  ```ts
  string
  ```

* lines

  The cart lines.

  ```ts
  Array<CartLine | ComponentizableCartLine>
  ```

* note

  The cart's note.

  ```ts
  string
  ```

* totalQuantity

  The total number of items in the cart, across all lines. If there are no lines, then the value is 0.

  ```ts
  number
  ```

#### CartUserError



#### MetafieldsSetUserError



#### MetafieldDeleteUserError



#### CartWarning



Examples

#### Examples

* ####

  ##### JavaScript

  ```js
  import {cartLinesAddDefault} from '@shopify/hydrogen';

  const cartAdd = cartLinesAddDefault({
    storefront,
    getCartId,
  });

  const result = await cartAdd([
    {
      merchandiseId: 'gid://shopify/ProductVariant/123456789',
      quantity: 1,
    },
  ]);
  ```

***

---



<a id="latest-utilities-cart-cartlinesremovedefault"></a>


## cartLinesRemoveDefault

Creates a function that accepts an array of line ids and removes the line items from a cart

### cart​Lines​Remove​Default(**[options](#cartlinesremovedefault-propertydetail-options)**​)

#### Parameters

* **options**

  **CartQueryOptions**

  **required**

#### Returns

* **CartLinesRemoveFunction**

#### CartQueryOptions

* cartFragment

  The cart fragment to override the one used in this query.

  ```ts
  string
  ```

* customerAccount

  The customer account instance created by \[\`createCustomerAccount\`]\(docs/api/hydrogen/latest/customer/createcustomeraccount).

  ```ts
  CustomerAccount
  ```

* getCartId

  A function that returns the cart ID.

  ```ts
  () => string
  ```

* storefront

  The storefront client instance created by \[\`createStorefrontClient\`]\(docs/api/hydrogen/latest/utilities/createstorefrontclient).

  ```ts
  Storefront
  ```

#### CustomerAccount

* authorize

  On successful login, the customer redirects back to your app. This function validates the OAuth response and exchanges the authorization code for an access token and refresh token. It also persists the tokens on your session. This function should be called and returned from the Remix loader configured as the redirect URI within the Customer Account API settings in admin.

  ```ts
  () => Promise<Response>
  ```

* getAccessToken

  Returns CustomerAccessToken if the customer is logged in. It also run a expiry check and does a token refresh if needed.

  ```ts
  () => Promise<string>
  ```

* getApiUrl

  Creates the fully-qualified URL to your store's GraphQL endpoint.

  ```ts
  () => string
  ```

* getBuyer

  Get buyer token and company location id from session.

  ```ts
  () => Promise<Partial<BuyerInput>>
  ```

* handleAuthStatus

  Check for a not logged in customer and redirect customer to login page. The redirect can be overwritten with \`customAuthStatusHandler\` option.

  ```ts
  () => Promise<void>
  ```

* i18n

  The i18n configuration for Customer Account API

  ```ts
  { language: LanguageCode; }
  ```

* isLoggedIn

  Returns if the customer is logged in. It also checks if the access token is expired and refreshes it if needed.

  ```ts
  () => Promise<boolean>
  ```

* login

  Start the OAuth login flow. This function should be called and returned from a Remix loader. It redirects the customer to a Shopify login domain. It also defined the final path the customer lands on at the end of the oAuth flow with the value of the \`return\_to\` query param. (This is automatically setup unless \`customAuthStatusHandler\` option is in use)

  ```ts
  (options?: LoginOptions) => Promise<Response>
  ```

* logout

  Logout the customer by clearing the session and redirecting to the login domain. It should be called and returned from a Remix action. The path app should redirect to after logout can be setup in Customer Account API settings in admin.

  ```ts
  (options?: LogoutOptions) => Promise<Response>
  ```

* mutate

  Execute a GraphQL mutation against the Customer Account API. This method execute \`handleAuthStatus()\` ahead of mutation.

  ```ts
  <
      OverrideReturnType extends any = never,
      RawGqlString extends string = string,
    >(
      mutation: RawGqlString,
      ...options: ClientVariablesInRestParams<
        CustomerAccountMutations,
        RawGqlString
      >
    ) => Promise<
      Omit<
        CustomerAPIResponse<
          ClientReturn<CustomerAccountMutations, RawGqlString, OverrideReturnType>
        >,
        'errors'
      > & {errors?: JsonGraphQLError[]}
    >
  ```

* query

  Execute a GraphQL query against the Customer Account API. This method execute \`handleAuthStatus()\` ahead of query.

  ```ts
  <
      OverrideReturnType extends any = never,
      RawGqlString extends string = string,
    >(
      query: RawGqlString,
      ...options: ClientVariablesInRestParams<
        CustomerAccountQueries,
        RawGqlString
      >
    ) => Promise<
      Omit<
        CustomerAPIResponse<
          ClientReturn<CustomerAccountQueries, RawGqlString, OverrideReturnType>
        >,
        'errors'
      > & {errors?: JsonGraphQLError[]}
    >
  ```

* setBuyer

  Set buyer information into session.

  ```ts
  (buyer: Partial<BuyerInput>) => void
  ```

* UNSTABLE\_getBuyer

  Deprecated. Please use getBuyer. Get buyer token and company location id from session.

  ```ts
  () => Promise<Partial<BuyerInput>>
  ```

* UNSTABLE\_setBuyer

  Deprecated. Please use setBuyer. Set buyer information into session.

  ```ts
  (buyer: Partial<BuyerInput>) => void
  ```

#### LoginOptions

* acrValues

  ```ts
  string
  ```

* countryCode

  ```ts
  CountryCode
  ```

* locale

  ```ts
  string
  ```

* loginHint

  ```ts
  string
  ```

* loginHintMode

  ```ts
  string
  ```

* uiLocales

  ```ts
  LanguageCode
  ```

#### LogoutOptions

* headers

  Add custom headers to the logout redirect.

  ```ts
  HeadersInit
  ```

* keepSession

  If true, custom data in the session will not be cleared on logout.

  ```ts
  boolean
  ```

* postLogoutRedirectUri

  The url to redirect customer to after logout, should be a relative URL. This url will need to included in Customer Account API's application setup for logout URI. The default value is current app origin, which is automatically setup in admin when using \`--customer-account-push\` flag with dev.

  ```ts
  string
  ```

#### CustomerAccountMutations



#### CustomerAPIResponse

* data

  ```ts
  ReturnType
  ```

* errors

  ```ts
  Array<{
      message: string;
      locations?: Array<{line: number; column: number}>;
      path?: Array<string>;
      extensions: {code: string};
    }>
  ```

* extensions

  ```ts
  { cost: { requestQueryCost: number; actualQueryCakes: number; throttleStatus: { maximumAvailable: number; currentAvailable: number; restoreRate: number; }; }; }
  ```

#### JsonGraphQLError

* extensions

  Reserved for implementors to extend the protocol however they see fit, and hence there are no additional restrictions on its contents.

  ```ts
  { [key: string]: unknown; }
  ```

* locations

  If an error can be associated to a particular point in the requested GraphQL document, it should contain a list of locations.

  ```ts
  { line: number; column: number; }[]
  ```

* message

  ```ts
  string
  ```

* name

  ```ts
  string
  ```

* path

  If an error can be associated to a particular field in the GraphQL result, it \_must\_ contain an entry with the key \`path\` that details the path of the response field which experienced the error. This allows clients to identify whether a null result is intentional or caused by a runtime error.

  ```ts
  (string | number)[]
  ```

* stack

  ```ts
  string
  ```

#### CustomerAccountQueries



#### Storefront

Interface to interact with the Storefront API.

* cache

  ```ts
  Cache
  ```

* CacheCustom

  ```ts
  (overrideOptions: AllCacheOptions) => AllCacheOptions
  ```

* CacheLong

  ```ts
  (overrideOptions?: AllCacheOptions) => AllCacheOptions
  ```

* CacheNone

  ```ts
  () => NoStoreStrategy
  ```

* CacheShort

  ```ts
  (overrideOptions?: AllCacheOptions) => AllCacheOptions
  ```

* forward

  Forwards the request to the Storefront API. It reads the API version from the request URL.

  ```ts
  (request: Request, options?: Pick<StorefrontCommonExtraParams, "storefrontApiVersion">) => Promise<Response>
  ```

* forwardMcp

  Forwards the request to the Storefront MCP endpoint.

  ```ts
  (request: Request) => Promise<Response>
  ```

* generateCacheControlHeader

  ```ts
  (cacheOptions: AllCacheOptions) => string
  ```

* getApiUrl

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "storefrontApiVersion" | "storeDomain">>) => string
  ```

* getHeaders

  ```ts
  () => Record<string, string>
  ```

* getPrivateTokenHeaders

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "contentType">> & Pick<StorefrontClientProps, "privateStorefrontToken"> & { buyerIp?: string; }) => Record<string, string>
  ```

* getPublicTokenHeaders

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "contentType">> & Pick<StorefrontClientProps, "publicStorefrontToken">) => Record<string, string>
  ```

* getShopifyDomain

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "storeDomain">>) => string
  ```

* i18n

  ```ts
  TI18n
  ```

* isMcpUrl

  Checks if the request URL matches the Storefront MCP endpoint.

  ```ts
  (request: { url?: string; }) => boolean
  ```

* isStorefrontApiUrl

  Checks if the request URL matches the Storefront API GraphQL endpoint.

  ```ts
  (request: { url?: string; }) => boolean
  ```

* mutate

  ```ts
  <
      OverrideReturnType extends any = never,
      RawGqlString extends string = string,
    >(
      mutation: RawGqlString,
      ...options: ClientVariablesInRestParams<
        StorefrontMutations,
        RawGqlString,
        StorefrontCommonExtraParams,
        AutoAddedVariableNames
      >
    ) => Promise<
      ClientReturn<StorefrontMutations, RawGqlString, OverrideReturnType> &
        StorefrontError
    >
  ```

* query

  ```ts
  <
      OverrideReturnType extends any = never,
      RawGqlString extends string = string,
    >(
      query: RawGqlString,
      ...options: ClientVariablesInRestParams<
        StorefrontQueries,
        RawGqlString,
        StorefrontCommonExtraParams & Pick<StorefrontQueryOptions, 'cache'>,
        AutoAddedVariableNames
      >
    ) => Promise<
      ClientReturn<StorefrontQueries, RawGqlString, OverrideReturnType> &
        StorefrontError
    >
  ```

* setCollectedSubrequestHeaders

  Sets the collected subrequest headers in the response. Useful to forward the cookies and server-timing headers from server subrequests to the browser.

  ```ts
  (response: { headers: Headers; }) => void
  ```

#### AllCacheOptions

Override options for a cache strategy.

* maxAge

  The maximum amount of time in seconds that a resource will be considered fresh. See \`max-age\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#:\~:text=Response%20Directives-,max%2Dage,-The%20max%2Dage).

  ```ts
  number
  ```

* mode

  The caching mode, generally \`public\`, \`private\`, or \`no-store\`.

  ```ts
  string
  ```

* sMaxAge

  Similar to \`maxAge\` but specific to shared caches. See \`s-maxage\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#s-maxage).

  ```ts
  number
  ```

* staleIfError

  Indicate that the cache should serve the stale response if an error occurs while revalidating the cache. See \`stale-if-error\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-if-error).

  ```ts
  number
  ```

* staleWhileRevalidate

  Indicate that the cache should serve the stale response in the background while revalidating the cache. See \`stale-while-revalidate\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-while-revalidate).

  ```ts
  number
  ```

#### NoStoreStrategy

* mode

  ```ts
  string
  ```

#### StorefrontCommonExtraParams

* displayName

  ```ts
  string
  ```

* headers

  ```ts
  HeadersInit
  ```

* storefrontApiVersion

  ```ts
  string
  ```

#### StorefrontClientProps

* contentType

  Customizes which \`"content-type"\` header is added when using \`getPrivateTokenHeaders()\` and \`getPublicTokenHeaders()\`. When fetching with a \`JSON.stringify()\`-ed \`body\`, use \`"json"\`. When fetching with a \`body\` that is a plain string, use \`"graphql"\`. Defaults to \`"json"\` Can also be customized on a call-by-call basis by passing in \`'contentType'\` to both \`getPrivateTokenHeaders({...})\` and \`getPublicTokenHeaders({...})\`, for example: \`getPublicTokenHeaders({contentType: 'graphql'})\`

  ```ts
  'json' | 'graphql'
  ```

* privateStorefrontToken

  The Storefront API delegate access token. Refer to the \[authentication]\(https://shopify.dev/api/storefront#authentication) and \[delegate access token]\(https://shopify.dev/apps/auth/oauth/delegate-access-tokens) documentation for more details.

  ```ts
  string
  ```

* publicStorefrontToken

  The Storefront API access token. Refer to the \[authentication]\(https://shopify.dev/api/storefront#authentication) documentation for more details.

  ```ts
  string
  ```

* storeDomain

  The host name of the domain (eg: \`{shop}.myshopify.com\`).

  ```ts
  string
  ```

* storefrontApiVersion

  The Storefront API version. This should almost always be the same as the version Hydrogen React was built for. Learn more about Shopify \[API versioning]\(https://shopify.dev/api/usage/versioning) for more details.

  ```ts
  string
  ```

#### StorefrontMutations

Maps all the mutations found in the project to variables and return types.



#### AutoAddedVariableNames

```ts
'country' | 'language'
```

#### StorefrontError

* errors

  ```ts
  StorefrontApiErrors
  ```

#### StorefrontApiErrors

```ts
JsonGraphQLError[] | undefined
```

#### StorefrontQueries

Maps all the queries found in the project to variables and return types.



#### StorefrontQueryOptions

```ts
StorefrontCommonExtraParams & {
  query: string;
  mutation?: never;
  cache?: CachingStrategy;
}
```

#### CachingStrategy

Use the \`CachingStrategy\` to define a custom caching mechanism for your data. Or use one of the pre-defined caching strategies: CacheNone, CacheShort, CacheLong.

* maxAge

  The maximum amount of time in seconds that a resource will be considered fresh. See \`max-age\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#:\~:text=Response%20Directives-,max%2Dage,-The%20max%2Dage).

  ```ts
  number
  ```

* mode

  The caching mode, generally \`public\`, \`private\`, or \`no-store\`.

  ```ts
  string
  ```

* sMaxAge

  Similar to \`maxAge\` but specific to shared caches. See \`s-maxage\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#s-maxage).

  ```ts
  number
  ```

* staleIfError

  Indicate that the cache should serve the stale response if an error occurs while revalidating the cache. See \`stale-if-error\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-if-error).

  ```ts
  number
  ```

* staleWhileRevalidate

  Indicate that the cache should serve the stale response in the background while revalidating the cache. See \`stale-while-revalidate\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-while-revalidate).

  ```ts
  number
  ```

#### Headers



#### CartLinesRemoveFunction

* lineIds

  ```ts
  string[]
  ```

* optionalParams

  ```ts
  CartOptionalInput
  ```

returns

```ts
Promise<CartQueryDataReturn>
```

#### CartOptionalInput

* cartId

  The cart id.

  ```ts
  string
  ```

* country

  The country code.

  ```ts
  CountryCode
  ```

* language

  The language code.

  ```ts
  LanguageCode
  ```

* visitorConsent

  Visitor consent preferences for the Storefront API's

  ```ts
  VisitorConsent
  ```

#### VisitorConsent

* analytics

  ```ts
  ConsentStatus
  ```

* marketing

  ```ts
  ConsentStatus
  ```

* preferences

  ```ts
  ConsentStatus
  ```

* sale\_of\_data

  ```ts
  ConsentStatus
  ```

#### ConsentStatus

```ts
boolean | undefined
```

#### CartQueryDataReturn

```ts
CartQueryData & {
  errors?: StorefrontApiErrors;
}
```

#### CartQueryData

* cart

  ```ts
  Cart
  ```

* userErrors

  ```ts
  | CartUserError[]
      | MetafieldsSetUserError[]
      | MetafieldDeleteUserError[]
  ```

* warnings

  ```ts
  CartWarning[]
  ```

#### Cart

* attributes

  The cart's attributes.

  ```ts
  { __typename?: "Attribute"; key?: string; value?: string; }[]
  ```

* buyerIdentity

  The cart's buyer identity.

  ```ts
  CartType['buyerIdentity']
  ```

* checkoutUrl

  The checkout URL for the cart, if the cart has been created in the Storefront API.

  ```ts
  string
  ```

* cost

  The cost for the cart, including the subtotal, total, taxes, and duties.

  ```ts
  CartType['cost']
  ```

* discountCodes

  The discount codes applied to the cart.

  ```ts
  { __typename?: "CartDiscountCode"; applicable?: boolean; code?: string; }[]
  ```

* id

  The cart's ID if it has been created through the Storefront API.

  ```ts
  string
  ```

* lines

  The cart lines.

  ```ts
  Array<CartLine | ComponentizableCartLine>
  ```

* note

  The cart's note.

  ```ts
  string
  ```

* totalQuantity

  The total number of items in the cart, across all lines. If there are no lines, then the value is 0.

  ```ts
  number
  ```

#### CartUserError



#### MetafieldsSetUserError



#### MetafieldDeleteUserError



#### CartWarning



Examples

#### Examples

* ####

  ##### JavaScript

  ```js
  import {cartLinesRemoveDefault} from '@shopify/hydrogen';

  const cartRemove = cartLinesRemoveDefault({
    storefront,
    getCartId,
  });

  const result = await cartRemove(['gid://shopify/CartLine/123456789']);
  ```

***

---



<a id="latest-utilities-cart-cartlinesupdatedefault"></a>


## cartLinesUpdateDefault

Creates a function that accepts an array of [CartLineUpdateInput](https://shopify.dev/docs/api/storefront/2026-01/input-objects/CartLineUpdateInput) and updates the line items in a cart

### cart​Lines​Update​Default(**[options](#cartlinesupdatedefault-propertydetail-options)**​)

#### Parameters

* **options**

  **CartQueryOptions**

  **required**

#### Returns

* **CartLinesUpdateFunction**

#### CartQueryOptions

* cartFragment

  The cart fragment to override the one used in this query.

  ```ts
  string
  ```

* customerAccount

  The customer account instance created by \[\`createCustomerAccount\`]\(docs/api/hydrogen/latest/customer/createcustomeraccount).

  ```ts
  CustomerAccount
  ```

* getCartId

  A function that returns the cart ID.

  ```ts
  () => string
  ```

* storefront

  The storefront client instance created by \[\`createStorefrontClient\`]\(docs/api/hydrogen/latest/utilities/createstorefrontclient).

  ```ts
  Storefront
  ```

#### CustomerAccount

* authorize

  On successful login, the customer redirects back to your app. This function validates the OAuth response and exchanges the authorization code for an access token and refresh token. It also persists the tokens on your session. This function should be called and returned from the Remix loader configured as the redirect URI within the Customer Account API settings in admin.

  ```ts
  () => Promise<Response>
  ```

* getAccessToken

  Returns CustomerAccessToken if the customer is logged in. It also run a expiry check and does a token refresh if needed.

  ```ts
  () => Promise<string>
  ```

* getApiUrl

  Creates the fully-qualified URL to your store's GraphQL endpoint.

  ```ts
  () => string
  ```

* getBuyer

  Get buyer token and company location id from session.

  ```ts
  () => Promise<Partial<BuyerInput>>
  ```

* handleAuthStatus

  Check for a not logged in customer and redirect customer to login page. The redirect can be overwritten with \`customAuthStatusHandler\` option.

  ```ts
  () => Promise<void>
  ```

* i18n

  The i18n configuration for Customer Account API

  ```ts
  { language: LanguageCode; }
  ```

* isLoggedIn

  Returns if the customer is logged in. It also checks if the access token is expired and refreshes it if needed.

  ```ts
  () => Promise<boolean>
  ```

* login

  Start the OAuth login flow. This function should be called and returned from a Remix loader. It redirects the customer to a Shopify login domain. It also defined the final path the customer lands on at the end of the oAuth flow with the value of the \`return\_to\` query param. (This is automatically setup unless \`customAuthStatusHandler\` option is in use)

  ```ts
  (options?: LoginOptions) => Promise<Response>
  ```

* logout

  Logout the customer by clearing the session and redirecting to the login domain. It should be called and returned from a Remix action. The path app should redirect to after logout can be setup in Customer Account API settings in admin.

  ```ts
  (options?: LogoutOptions) => Promise<Response>
  ```

* mutate

  Execute a GraphQL mutation against the Customer Account API. This method execute \`handleAuthStatus()\` ahead of mutation.

  ```ts
  <
      OverrideReturnType extends any = never,
      RawGqlString extends string = string,
    >(
      mutation: RawGqlString,
      ...options: ClientVariablesInRestParams<
        CustomerAccountMutations,
        RawGqlString
      >
    ) => Promise<
      Omit<
        CustomerAPIResponse<
          ClientReturn<CustomerAccountMutations, RawGqlString, OverrideReturnType>
        >,
        'errors'
      > & {errors?: JsonGraphQLError[]}
    >
  ```

* query

  Execute a GraphQL query against the Customer Account API. This method execute \`handleAuthStatus()\` ahead of query.

  ```ts
  <
      OverrideReturnType extends any = never,
      RawGqlString extends string = string,
    >(
      query: RawGqlString,
      ...options: ClientVariablesInRestParams<
        CustomerAccountQueries,
        RawGqlString
      >
    ) => Promise<
      Omit<
        CustomerAPIResponse<
          ClientReturn<CustomerAccountQueries, RawGqlString, OverrideReturnType>
        >,
        'errors'
      > & {errors?: JsonGraphQLError[]}
    >
  ```

* setBuyer

  Set buyer information into session.

  ```ts
  (buyer: Partial<BuyerInput>) => void
  ```

* UNSTABLE\_getBuyer

  Deprecated. Please use getBuyer. Get buyer token and company location id from session.

  ```ts
  () => Promise<Partial<BuyerInput>>
  ```

* UNSTABLE\_setBuyer

  Deprecated. Please use setBuyer. Set buyer information into session.

  ```ts
  (buyer: Partial<BuyerInput>) => void
  ```

#### LoginOptions

* acrValues

  ```ts
  string
  ```

* countryCode

  ```ts
  CountryCode
  ```

* locale

  ```ts
  string
  ```

* loginHint

  ```ts
  string
  ```

* loginHintMode

  ```ts
  string
  ```

* uiLocales

  ```ts
  LanguageCode
  ```

#### LogoutOptions

* headers

  Add custom headers to the logout redirect.

  ```ts
  HeadersInit
  ```

* keepSession

  If true, custom data in the session will not be cleared on logout.

  ```ts
  boolean
  ```

* postLogoutRedirectUri

  The url to redirect customer to after logout, should be a relative URL. This url will need to included in Customer Account API's application setup for logout URI. The default value is current app origin, which is automatically setup in admin when using \`--customer-account-push\` flag with dev.

  ```ts
  string
  ```

#### CustomerAccountMutations



#### CustomerAPIResponse

* data

  ```ts
  ReturnType
  ```

* errors

  ```ts
  Array<{
      message: string;
      locations?: Array<{line: number; column: number}>;
      path?: Array<string>;
      extensions: {code: string};
    }>
  ```

* extensions

  ```ts
  { cost: { requestQueryCost: number; actualQueryCakes: number; throttleStatus: { maximumAvailable: number; currentAvailable: number; restoreRate: number; }; }; }
  ```

#### JsonGraphQLError

* extensions

  Reserved for implementors to extend the protocol however they see fit, and hence there are no additional restrictions on its contents.

  ```ts
  { [key: string]: unknown; }
  ```

* locations

  If an error can be associated to a particular point in the requested GraphQL document, it should contain a list of locations.

  ```ts
  { line: number; column: number; }[]
  ```

* message

  ```ts
  string
  ```

* name

  ```ts
  string
  ```

* path

  If an error can be associated to a particular field in the GraphQL result, it \_must\_ contain an entry with the key \`path\` that details the path of the response field which experienced the error. This allows clients to identify whether a null result is intentional or caused by a runtime error.

  ```ts
  (string | number)[]
  ```

* stack

  ```ts
  string
  ```

#### CustomerAccountQueries



#### Storefront

Interface to interact with the Storefront API.

* cache

  ```ts
  Cache
  ```

* CacheCustom

  ```ts
  (overrideOptions: AllCacheOptions) => AllCacheOptions
  ```

* CacheLong

  ```ts
  (overrideOptions?: AllCacheOptions) => AllCacheOptions
  ```

* CacheNone

  ```ts
  () => NoStoreStrategy
  ```

* CacheShort

  ```ts
  (overrideOptions?: AllCacheOptions) => AllCacheOptions
  ```

* forward

  Forwards the request to the Storefront API. It reads the API version from the request URL.

  ```ts
  (request: Request, options?: Pick<StorefrontCommonExtraParams, "storefrontApiVersion">) => Promise<Response>
  ```

* forwardMcp

  Forwards the request to the Storefront MCP endpoint.

  ```ts
  (request: Request) => Promise<Response>
  ```

* generateCacheControlHeader

  ```ts
  (cacheOptions: AllCacheOptions) => string
  ```

* getApiUrl

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "storefrontApiVersion" | "storeDomain">>) => string
  ```

* getHeaders

  ```ts
  () => Record<string, string>
  ```

* getPrivateTokenHeaders

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "contentType">> & Pick<StorefrontClientProps, "privateStorefrontToken"> & { buyerIp?: string; }) => Record<string, string>
  ```

* getPublicTokenHeaders

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "contentType">> & Pick<StorefrontClientProps, "publicStorefrontToken">) => Record<string, string>
  ```

* getShopifyDomain

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "storeDomain">>) => string
  ```

* i18n

  ```ts
  TI18n
  ```

* isMcpUrl

  Checks if the request URL matches the Storefront MCP endpoint.

  ```ts
  (request: { url?: string; }) => boolean
  ```

* isStorefrontApiUrl

  Checks if the request URL matches the Storefront API GraphQL endpoint.

  ```ts
  (request: { url?: string; }) => boolean
  ```

* mutate

  ```ts
  <
      OverrideReturnType extends any = never,
      RawGqlString extends string = string,
    >(
      mutation: RawGqlString,
      ...options: ClientVariablesInRestParams<
        StorefrontMutations,
        RawGqlString,
        StorefrontCommonExtraParams,
        AutoAddedVariableNames
      >
    ) => Promise<
      ClientReturn<StorefrontMutations, RawGqlString, OverrideReturnType> &
        StorefrontError
    >
  ```

* query

  ```ts
  <
      OverrideReturnType extends any = never,
      RawGqlString extends string = string,
    >(
      query: RawGqlString,
      ...options: ClientVariablesInRestParams<
        StorefrontQueries,
        RawGqlString,
        StorefrontCommonExtraParams & Pick<StorefrontQueryOptions, 'cache'>,
        AutoAddedVariableNames
      >
    ) => Promise<
      ClientReturn<StorefrontQueries, RawGqlString, OverrideReturnType> &
        StorefrontError
    >
  ```

* setCollectedSubrequestHeaders

  Sets the collected subrequest headers in the response. Useful to forward the cookies and server-timing headers from server subrequests to the browser.

  ```ts
  (response: { headers: Headers; }) => void
  ```

#### AllCacheOptions

Override options for a cache strategy.

* maxAge

  The maximum amount of time in seconds that a resource will be considered fresh. See \`max-age\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#:\~:text=Response%20Directives-,max%2Dage,-The%20max%2Dage).

  ```ts
  number
  ```

* mode

  The caching mode, generally \`public\`, \`private\`, or \`no-store\`.

  ```ts
  string
  ```

* sMaxAge

  Similar to \`maxAge\` but specific to shared caches. See \`s-maxage\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#s-maxage).

  ```ts
  number
  ```

* staleIfError

  Indicate that the cache should serve the stale response if an error occurs while revalidating the cache. See \`stale-if-error\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-if-error).

  ```ts
  number
  ```

* staleWhileRevalidate

  Indicate that the cache should serve the stale response in the background while revalidating the cache. See \`stale-while-revalidate\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-while-revalidate).

  ```ts
  number
  ```

#### NoStoreStrategy

* mode

  ```ts
  string
  ```

#### StorefrontCommonExtraParams

* displayName

  ```ts
  string
  ```

* headers

  ```ts
  HeadersInit
  ```

* storefrontApiVersion

  ```ts
  string
  ```

#### StorefrontClientProps

* contentType

  Customizes which \`"content-type"\` header is added when using \`getPrivateTokenHeaders()\` and \`getPublicTokenHeaders()\`. When fetching with a \`JSON.stringify()\`-ed \`body\`, use \`"json"\`. When fetching with a \`body\` that is a plain string, use \`"graphql"\`. Defaults to \`"json"\` Can also be customized on a call-by-call basis by passing in \`'contentType'\` to both \`getPrivateTokenHeaders({...})\` and \`getPublicTokenHeaders({...})\`, for example: \`getPublicTokenHeaders({contentType: 'graphql'})\`

  ```ts
  'json' | 'graphql'
  ```

* privateStorefrontToken

  The Storefront API delegate access token. Refer to the \[authentication]\(https://shopify.dev/api/storefront#authentication) and \[delegate access token]\(https://shopify.dev/apps/auth/oauth/delegate-access-tokens) documentation for more details.

  ```ts
  string
  ```

* publicStorefrontToken

  The Storefront API access token. Refer to the \[authentication]\(https://shopify.dev/api/storefront#authentication) documentation for more details.

  ```ts
  string
  ```

* storeDomain

  The host name of the domain (eg: \`{shop}.myshopify.com\`).

  ```ts
  string
  ```

* storefrontApiVersion

  The Storefront API version. This should almost always be the same as the version Hydrogen React was built for. Learn more about Shopify \[API versioning]\(https://shopify.dev/api/usage/versioning) for more details.

  ```ts
  string
  ```

#### StorefrontMutations

Maps all the mutations found in the project to variables and return types.



#### AutoAddedVariableNames

```ts
'country' | 'language'
```

#### StorefrontError

* errors

  ```ts
  StorefrontApiErrors
  ```

#### StorefrontApiErrors

```ts
JsonGraphQLError[] | undefined
```

#### StorefrontQueries

Maps all the queries found in the project to variables and return types.



#### StorefrontQueryOptions

```ts
StorefrontCommonExtraParams & {
  query: string;
  mutation?: never;
  cache?: CachingStrategy;
}
```

#### CachingStrategy

Use the \`CachingStrategy\` to define a custom caching mechanism for your data. Or use one of the pre-defined caching strategies: CacheNone, CacheShort, CacheLong.

* maxAge

  The maximum amount of time in seconds that a resource will be considered fresh. See \`max-age\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#:\~:text=Response%20Directives-,max%2Dage,-The%20max%2Dage).

  ```ts
  number
  ```

* mode

  The caching mode, generally \`public\`, \`private\`, or \`no-store\`.

  ```ts
  string
  ```

* sMaxAge

  Similar to \`maxAge\` but specific to shared caches. See \`s-maxage\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#s-maxage).

  ```ts
  number
  ```

* staleIfError

  Indicate that the cache should serve the stale response if an error occurs while revalidating the cache. See \`stale-if-error\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-if-error).

  ```ts
  number
  ```

* staleWhileRevalidate

  Indicate that the cache should serve the stale response in the background while revalidating the cache. See \`stale-while-revalidate\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-while-revalidate).

  ```ts
  number
  ```

#### Headers



#### CartLinesUpdateFunction

* lines

  ```ts
  CartLineUpdateInput[]
  ```

* optionalParams

  ```ts
  CartOptionalInput
  ```

returns

```ts
Promise<CartQueryDataReturn>
```

#### CartLineUpdateInput



#### CartOptionalInput

* cartId

  The cart id.

  ```ts
  string
  ```

* country

  The country code.

  ```ts
  CountryCode
  ```

* language

  The language code.

  ```ts
  LanguageCode
  ```

* visitorConsent

  Visitor consent preferences for the Storefront API's

  ```ts
  VisitorConsent
  ```

#### VisitorConsent

* analytics

  ```ts
  ConsentStatus
  ```

* marketing

  ```ts
  ConsentStatus
  ```

* preferences

  ```ts
  ConsentStatus
  ```

* sale\_of\_data

  ```ts
  ConsentStatus
  ```

#### ConsentStatus

```ts
boolean | undefined
```

#### CartQueryDataReturn

```ts
CartQueryData & {
  errors?: StorefrontApiErrors;
}
```

#### CartQueryData

* cart

  ```ts
  Cart
  ```

* userErrors

  ```ts
  | CartUserError[]
      | MetafieldsSetUserError[]
      | MetafieldDeleteUserError[]
  ```

* warnings

  ```ts
  CartWarning[]
  ```

#### Cart

* attributes

  The cart's attributes.

  ```ts
  { __typename?: "Attribute"; key?: string; value?: string; }[]
  ```

* buyerIdentity

  The cart's buyer identity.

  ```ts
  CartType['buyerIdentity']
  ```

* checkoutUrl

  The checkout URL for the cart, if the cart has been created in the Storefront API.

  ```ts
  string
  ```

* cost

  The cost for the cart, including the subtotal, total, taxes, and duties.

  ```ts
  CartType['cost']
  ```

* discountCodes

  The discount codes applied to the cart.

  ```ts
  { __typename?: "CartDiscountCode"; applicable?: boolean; code?: string; }[]
  ```

* id

  The cart's ID if it has been created through the Storefront API.

  ```ts
  string
  ```

* lines

  The cart lines.

  ```ts
  Array<CartLine | ComponentizableCartLine>
  ```

* note

  The cart's note.

  ```ts
  string
  ```

* totalQuantity

  The total number of items in the cart, across all lines. If there are no lines, then the value is 0.

  ```ts
  number
  ```

#### CartUserError



#### MetafieldsSetUserError



#### MetafieldDeleteUserError



#### CartWarning



Examples

#### Examples

* ####

  ##### JavaScript

  ```js
  import {cartLinesUpdateDefault} from '@shopify/hydrogen';

  const cartUpdate = cartLinesUpdateDefault({
    storefront,
    getCartId,
  });

  const result = await cartUpdate([
    {
      id: 'gid://shopify/CartLine/123456789',
      quantity: 2,
    },
  ]);
  ```

***

---



<a id="latest-utilities-cart-cartmetafielddeletedefault"></a>


## cartMetafieldDeleteDefault

Creates a function that accepts a string key and removes the matching metafield from the cart.

### cart​Metafield​Delete​Default(**[options](#cartmetafielddeletedefault-propertydetail-options)**​)

#### Parameters

* **options**

  **CartQueryOptions**

  **required**

#### Returns

* **CartMetafieldDeleteFunction**

#### CartQueryOptions

* cartFragment

  The cart fragment to override the one used in this query.

  ```ts
  string
  ```

* customerAccount

  The customer account instance created by \[\`createCustomerAccount\`]\(docs/api/hydrogen/latest/customer/createcustomeraccount).

  ```ts
  CustomerAccount
  ```

* getCartId

  A function that returns the cart ID.

  ```ts
  () => string
  ```

* storefront

  The storefront client instance created by \[\`createStorefrontClient\`]\(docs/api/hydrogen/latest/utilities/createstorefrontclient).

  ```ts
  Storefront
  ```

#### CustomerAccount

* authorize

  On successful login, the customer redirects back to your app. This function validates the OAuth response and exchanges the authorization code for an access token and refresh token. It also persists the tokens on your session. This function should be called and returned from the Remix loader configured as the redirect URI within the Customer Account API settings in admin.

  ```ts
  () => Promise<Response>
  ```

* getAccessToken

  Returns CustomerAccessToken if the customer is logged in. It also run a expiry check and does a token refresh if needed.

  ```ts
  () => Promise<string>
  ```

* getApiUrl

  Creates the fully-qualified URL to your store's GraphQL endpoint.

  ```ts
  () => string
  ```

* getBuyer

  Get buyer token and company location id from session.

  ```ts
  () => Promise<Partial<BuyerInput>>
  ```

* handleAuthStatus

  Check for a not logged in customer and redirect customer to login page. The redirect can be overwritten with \`customAuthStatusHandler\` option.

  ```ts
  () => Promise<void>
  ```

* i18n

  The i18n configuration for Customer Account API

  ```ts
  { language: LanguageCode; }
  ```

* isLoggedIn

  Returns if the customer is logged in. It also checks if the access token is expired and refreshes it if needed.

  ```ts
  () => Promise<boolean>
  ```

* login

  Start the OAuth login flow. This function should be called and returned from a Remix loader. It redirects the customer to a Shopify login domain. It also defined the final path the customer lands on at the end of the oAuth flow with the value of the \`return\_to\` query param. (This is automatically setup unless \`customAuthStatusHandler\` option is in use)

  ```ts
  (options?: LoginOptions) => Promise<Response>
  ```

* logout

  Logout the customer by clearing the session and redirecting to the login domain. It should be called and returned from a Remix action. The path app should redirect to after logout can be setup in Customer Account API settings in admin.

  ```ts
  (options?: LogoutOptions) => Promise<Response>
  ```

* mutate

  Execute a GraphQL mutation against the Customer Account API. This method execute \`handleAuthStatus()\` ahead of mutation.

  ```ts
  <
      OverrideReturnType extends any = never,
      RawGqlString extends string = string,
    >(
      mutation: RawGqlString,
      ...options: ClientVariablesInRestParams<
        CustomerAccountMutations,
        RawGqlString
      >
    ) => Promise<
      Omit<
        CustomerAPIResponse<
          ClientReturn<CustomerAccountMutations, RawGqlString, OverrideReturnType>
        >,
        'errors'
      > & {errors?: JsonGraphQLError[]}
    >
  ```

* query

  Execute a GraphQL query against the Customer Account API. This method execute \`handleAuthStatus()\` ahead of query.

  ```ts
  <
      OverrideReturnType extends any = never,
      RawGqlString extends string = string,
    >(
      query: RawGqlString,
      ...options: ClientVariablesInRestParams<
        CustomerAccountQueries,
        RawGqlString
      >
    ) => Promise<
      Omit<
        CustomerAPIResponse<
          ClientReturn<CustomerAccountQueries, RawGqlString, OverrideReturnType>
        >,
        'errors'
      > & {errors?: JsonGraphQLError[]}
    >
  ```

* setBuyer

  Set buyer information into session.

  ```ts
  (buyer: Partial<BuyerInput>) => void
  ```

* UNSTABLE\_getBuyer

  Deprecated. Please use getBuyer. Get buyer token and company location id from session.

  ```ts
  () => Promise<Partial<BuyerInput>>
  ```

* UNSTABLE\_setBuyer

  Deprecated. Please use setBuyer. Set buyer information into session.

  ```ts
  (buyer: Partial<BuyerInput>) => void
  ```

#### LoginOptions

* acrValues

  ```ts
  string
  ```

* countryCode

  ```ts
  CountryCode
  ```

* locale

  ```ts
  string
  ```

* loginHint

  ```ts
  string
  ```

* loginHintMode

  ```ts
  string
  ```

* uiLocales

  ```ts
  LanguageCode
  ```

#### LogoutOptions

* headers

  Add custom headers to the logout redirect.

  ```ts
  HeadersInit
  ```

* keepSession

  If true, custom data in the session will not be cleared on logout.

  ```ts
  boolean
  ```

* postLogoutRedirectUri

  The url to redirect customer to after logout, should be a relative URL. This url will need to included in Customer Account API's application setup for logout URI. The default value is current app origin, which is automatically setup in admin when using \`--customer-account-push\` flag with dev.

  ```ts
  string
  ```

#### CustomerAccountMutations



#### CustomerAPIResponse

* data

  ```ts
  ReturnType
  ```

* errors

  ```ts
  Array<{
      message: string;
      locations?: Array<{line: number; column: number}>;
      path?: Array<string>;
      extensions: {code: string};
    }>
  ```

* extensions

  ```ts
  { cost: { requestQueryCost: number; actualQueryCakes: number; throttleStatus: { maximumAvailable: number; currentAvailable: number; restoreRate: number; }; }; }
  ```

#### JsonGraphQLError

* extensions

  Reserved for implementors to extend the protocol however they see fit, and hence there are no additional restrictions on its contents.

  ```ts
  { [key: string]: unknown; }
  ```

* locations

  If an error can be associated to a particular point in the requested GraphQL document, it should contain a list of locations.

  ```ts
  { line: number; column: number; }[]
  ```

* message

  ```ts
  string
  ```

* name

  ```ts
  string
  ```

* path

  If an error can be associated to a particular field in the GraphQL result, it \_must\_ contain an entry with the key \`path\` that details the path of the response field which experienced the error. This allows clients to identify whether a null result is intentional or caused by a runtime error.

  ```ts
  (string | number)[]
  ```

* stack

  ```ts
  string
  ```

#### CustomerAccountQueries



#### Storefront

Interface to interact with the Storefront API.

* cache

  ```ts
  Cache
  ```

* CacheCustom

  ```ts
  (overrideOptions: AllCacheOptions) => AllCacheOptions
  ```

* CacheLong

  ```ts
  (overrideOptions?: AllCacheOptions) => AllCacheOptions
  ```

* CacheNone

  ```ts
  () => NoStoreStrategy
  ```

* CacheShort

  ```ts
  (overrideOptions?: AllCacheOptions) => AllCacheOptions
  ```

* forward

  Forwards the request to the Storefront API. It reads the API version from the request URL.

  ```ts
  (request: Request, options?: Pick<StorefrontCommonExtraParams, "storefrontApiVersion">) => Promise<Response>
  ```

* forwardMcp

  Forwards the request to the Storefront MCP endpoint.

  ```ts
  (request: Request) => Promise<Response>
  ```

* generateCacheControlHeader

  ```ts
  (cacheOptions: AllCacheOptions) => string
  ```

* getApiUrl

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "storefrontApiVersion" | "storeDomain">>) => string
  ```

* getHeaders

  ```ts
  () => Record<string, string>
  ```

* getPrivateTokenHeaders

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "contentType">> & Pick<StorefrontClientProps, "privateStorefrontToken"> & { buyerIp?: string; }) => Record<string, string>
  ```

* getPublicTokenHeaders

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "contentType">> & Pick<StorefrontClientProps, "publicStorefrontToken">) => Record<string, string>
  ```

* getShopifyDomain

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "storeDomain">>) => string
  ```

* i18n

  ```ts
  TI18n
  ```

* isMcpUrl

  Checks if the request URL matches the Storefront MCP endpoint.

  ```ts
  (request: { url?: string; }) => boolean
  ```

* isStorefrontApiUrl

  Checks if the request URL matches the Storefront API GraphQL endpoint.

  ```ts
  (request: { url?: string; }) => boolean
  ```

* mutate

  ```ts
  <
      OverrideReturnType extends any = never,
      RawGqlString extends string = string,
    >(
      mutation: RawGqlString,
      ...options: ClientVariablesInRestParams<
        StorefrontMutations,
        RawGqlString,
        StorefrontCommonExtraParams,
        AutoAddedVariableNames
      >
    ) => Promise<
      ClientReturn<StorefrontMutations, RawGqlString, OverrideReturnType> &
        StorefrontError
    >
  ```

* query

  ```ts
  <
      OverrideReturnType extends any = never,
      RawGqlString extends string = string,
    >(
      query: RawGqlString,
      ...options: ClientVariablesInRestParams<
        StorefrontQueries,
        RawGqlString,
        StorefrontCommonExtraParams & Pick<StorefrontQueryOptions, 'cache'>,
        AutoAddedVariableNames
      >
    ) => Promise<
      ClientReturn<StorefrontQueries, RawGqlString, OverrideReturnType> &
        StorefrontError
    >
  ```

* setCollectedSubrequestHeaders

  Sets the collected subrequest headers in the response. Useful to forward the cookies and server-timing headers from server subrequests to the browser.

  ```ts
  (response: { headers: Headers; }) => void
  ```

#### AllCacheOptions

Override options for a cache strategy.

* maxAge

  The maximum amount of time in seconds that a resource will be considered fresh. See \`max-age\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#:\~:text=Response%20Directives-,max%2Dage,-The%20max%2Dage).

  ```ts
  number
  ```

* mode

  The caching mode, generally \`public\`, \`private\`, or \`no-store\`.

  ```ts
  string
  ```

* sMaxAge

  Similar to \`maxAge\` but specific to shared caches. See \`s-maxage\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#s-maxage).

  ```ts
  number
  ```

* staleIfError

  Indicate that the cache should serve the stale response if an error occurs while revalidating the cache. See \`stale-if-error\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-if-error).

  ```ts
  number
  ```

* staleWhileRevalidate

  Indicate that the cache should serve the stale response in the background while revalidating the cache. See \`stale-while-revalidate\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-while-revalidate).

  ```ts
  number
  ```

#### NoStoreStrategy

* mode

  ```ts
  string
  ```

#### StorefrontCommonExtraParams

* displayName

  ```ts
  string
  ```

* headers

  ```ts
  HeadersInit
  ```

* storefrontApiVersion

  ```ts
  string
  ```

#### StorefrontClientProps

* contentType

  Customizes which \`"content-type"\` header is added when using \`getPrivateTokenHeaders()\` and \`getPublicTokenHeaders()\`. When fetching with a \`JSON.stringify()\`-ed \`body\`, use \`"json"\`. When fetching with a \`body\` that is a plain string, use \`"graphql"\`. Defaults to \`"json"\` Can also be customized on a call-by-call basis by passing in \`'contentType'\` to both \`getPrivateTokenHeaders({...})\` and \`getPublicTokenHeaders({...})\`, for example: \`getPublicTokenHeaders({contentType: 'graphql'})\`

  ```ts
  'json' | 'graphql'
  ```

* privateStorefrontToken

  The Storefront API delegate access token. Refer to the \[authentication]\(https://shopify.dev/api/storefront#authentication) and \[delegate access token]\(https://shopify.dev/apps/auth/oauth/delegate-access-tokens) documentation for more details.

  ```ts
  string
  ```

* publicStorefrontToken

  The Storefront API access token. Refer to the \[authentication]\(https://shopify.dev/api/storefront#authentication) documentation for more details.

  ```ts
  string
  ```

* storeDomain

  The host name of the domain (eg: \`{shop}.myshopify.com\`).

  ```ts
  string
  ```

* storefrontApiVersion

  The Storefront API version. This should almost always be the same as the version Hydrogen React was built for. Learn more about Shopify \[API versioning]\(https://shopify.dev/api/usage/versioning) for more details.

  ```ts
  string
  ```

#### StorefrontMutations

Maps all the mutations found in the project to variables and return types.



#### AutoAddedVariableNames

```ts
'country' | 'language'
```

#### StorefrontError

* errors

  ```ts
  StorefrontApiErrors
  ```

#### StorefrontApiErrors

```ts
JsonGraphQLError[] | undefined
```

#### StorefrontQueries

Maps all the queries found in the project to variables and return types.



#### StorefrontQueryOptions

```ts
StorefrontCommonExtraParams & {
  query: string;
  mutation?: never;
  cache?: CachingStrategy;
}
```

#### CachingStrategy

Use the \`CachingStrategy\` to define a custom caching mechanism for your data. Or use one of the pre-defined caching strategies: CacheNone, CacheShort, CacheLong.

* maxAge

  The maximum amount of time in seconds that a resource will be considered fresh. See \`max-age\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#:\~:text=Response%20Directives-,max%2Dage,-The%20max%2Dage).

  ```ts
  number
  ```

* mode

  The caching mode, generally \`public\`, \`private\`, or \`no-store\`.

  ```ts
  string
  ```

* sMaxAge

  Similar to \`maxAge\` but specific to shared caches. See \`s-maxage\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#s-maxage).

  ```ts
  number
  ```

* staleIfError

  Indicate that the cache should serve the stale response if an error occurs while revalidating the cache. See \`stale-if-error\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-if-error).

  ```ts
  number
  ```

* staleWhileRevalidate

  Indicate that the cache should serve the stale response in the background while revalidating the cache. See \`stale-while-revalidate\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-while-revalidate).

  ```ts
  number
  ```

#### Headers



#### CartMetafieldDeleteFunction

* key

  ```ts
  string
  ```

* optionalParams

  ```ts
  CartOptionalInput
  ```

returns

```ts
Promise<CartQueryDataReturn>
```

#### CartOptionalInput

* cartId

  The cart id.

  ```ts
  string
  ```

* country

  The country code.

  ```ts
  CountryCode
  ```

* language

  The language code.

  ```ts
  LanguageCode
  ```

* visitorConsent

  Visitor consent preferences for the Storefront API's

  ```ts
  VisitorConsent
  ```

#### VisitorConsent

* analytics

  ```ts
  ConsentStatus
  ```

* marketing

  ```ts
  ConsentStatus
  ```

* preferences

  ```ts
  ConsentStatus
  ```

* sale\_of\_data

  ```ts
  ConsentStatus
  ```

#### ConsentStatus

```ts
boolean | undefined
```

#### CartQueryDataReturn

```ts
CartQueryData & {
  errors?: StorefrontApiErrors;
}
```

#### CartQueryData

* cart

  ```ts
  Cart
  ```

* userErrors

  ```ts
  | CartUserError[]
      | MetafieldsSetUserError[]
      | MetafieldDeleteUserError[]
  ```

* warnings

  ```ts
  CartWarning[]
  ```

#### Cart

* attributes

  The cart's attributes.

  ```ts
  { __typename?: "Attribute"; key?: string; value?: string; }[]
  ```

* buyerIdentity

  The cart's buyer identity.

  ```ts
  CartType['buyerIdentity']
  ```

* checkoutUrl

  The checkout URL for the cart, if the cart has been created in the Storefront API.

  ```ts
  string
  ```

* cost

  The cost for the cart, including the subtotal, total, taxes, and duties.

  ```ts
  CartType['cost']
  ```

* discountCodes

  The discount codes applied to the cart.

  ```ts
  { __typename?: "CartDiscountCode"; applicable?: boolean; code?: string; }[]
  ```

* id

  The cart's ID if it has been created through the Storefront API.

  ```ts
  string
  ```

* lines

  The cart lines.

  ```ts
  Array<CartLine | ComponentizableCartLine>
  ```

* note

  The cart's note.

  ```ts
  string
  ```

* totalQuantity

  The total number of items in the cart, across all lines. If there are no lines, then the value is 0.

  ```ts
  number
  ```

#### CartUserError



#### MetafieldsSetUserError



#### MetafieldDeleteUserError



#### CartWarning



Examples

#### Examples

* ####

  ##### JavaScript

  ```js
  import {cartMetafieldDeleteDefault} from '@shopify/hydrogen';

  const cartDeleteMetafield = cartMetafieldDeleteDefault({
    storefront,
    getCartId,
  });

  const result = await cartDeleteMetafield('namespace.key');
  ```

***

---



<a id="latest-utilities-cart-cartmetafieldssetdefault"></a>


## cartMetafieldsSetDefault

Creates a function that accepts an array of [CartMetafieldsSetInput](https://shopify.dev/docs/api/storefront/2026-01/input-objects/CartMetafieldsSetInput) without `ownerId` and set the metafields to a cart

### cart​Metafields​Set​Default(**[options](#cartmetafieldssetdefault-propertydetail-options)**​)

#### Parameters

* **options**

  **CartQueryOptions**

  **required**

#### Returns

* **CartMetafieldsSetFunction**

#### CartQueryOptions

* cartFragment

  The cart fragment to override the one used in this query.

  ```ts
  string
  ```

* customerAccount

  The customer account instance created by \[\`createCustomerAccount\`]\(docs/api/hydrogen/latest/customer/createcustomeraccount).

  ```ts
  CustomerAccount
  ```

* getCartId

  A function that returns the cart ID.

  ```ts
  () => string
  ```

* storefront

  The storefront client instance created by \[\`createStorefrontClient\`]\(docs/api/hydrogen/latest/utilities/createstorefrontclient).

  ```ts
  Storefront
  ```

#### CustomerAccount

* authorize

  On successful login, the customer redirects back to your app. This function validates the OAuth response and exchanges the authorization code for an access token and refresh token. It also persists the tokens on your session. This function should be called and returned from the Remix loader configured as the redirect URI within the Customer Account API settings in admin.

  ```ts
  () => Promise<Response>
  ```

* getAccessToken

  Returns CustomerAccessToken if the customer is logged in. It also run a expiry check and does a token refresh if needed.

  ```ts
  () => Promise<string>
  ```

* getApiUrl

  Creates the fully-qualified URL to your store's GraphQL endpoint.

  ```ts
  () => string
  ```

* getBuyer

  Get buyer token and company location id from session.

  ```ts
  () => Promise<Partial<BuyerInput>>
  ```

* handleAuthStatus

  Check for a not logged in customer and redirect customer to login page. The redirect can be overwritten with \`customAuthStatusHandler\` option.

  ```ts
  () => Promise<void>
  ```

* i18n

  The i18n configuration for Customer Account API

  ```ts
  { language: LanguageCode; }
  ```

* isLoggedIn

  Returns if the customer is logged in. It also checks if the access token is expired and refreshes it if needed.

  ```ts
  () => Promise<boolean>
  ```

* login

  Start the OAuth login flow. This function should be called and returned from a Remix loader. It redirects the customer to a Shopify login domain. It also defined the final path the customer lands on at the end of the oAuth flow with the value of the \`return\_to\` query param. (This is automatically setup unless \`customAuthStatusHandler\` option is in use)

  ```ts
  (options?: LoginOptions) => Promise<Response>
  ```

* logout

  Logout the customer by clearing the session and redirecting to the login domain. It should be called and returned from a Remix action. The path app should redirect to after logout can be setup in Customer Account API settings in admin.

  ```ts
  (options?: LogoutOptions) => Promise<Response>
  ```

* mutate

  Execute a GraphQL mutation against the Customer Account API. This method execute \`handleAuthStatus()\` ahead of mutation.

  ```ts
  <
      OverrideReturnType extends any = never,
      RawGqlString extends string = string,
    >(
      mutation: RawGqlString,
      ...options: ClientVariablesInRestParams<
        CustomerAccountMutations,
        RawGqlString
      >
    ) => Promise<
      Omit<
        CustomerAPIResponse<
          ClientReturn<CustomerAccountMutations, RawGqlString, OverrideReturnType>
        >,
        'errors'
      > & {errors?: JsonGraphQLError[]}
    >
  ```

* query

  Execute a GraphQL query against the Customer Account API. This method execute \`handleAuthStatus()\` ahead of query.

  ```ts
  <
      OverrideReturnType extends any = never,
      RawGqlString extends string = string,
    >(
      query: RawGqlString,
      ...options: ClientVariablesInRestParams<
        CustomerAccountQueries,
        RawGqlString
      >
    ) => Promise<
      Omit<
        CustomerAPIResponse<
          ClientReturn<CustomerAccountQueries, RawGqlString, OverrideReturnType>
        >,
        'errors'
      > & {errors?: JsonGraphQLError[]}
    >
  ```

* setBuyer

  Set buyer information into session.

  ```ts
  (buyer: Partial<BuyerInput>) => void
  ```

* UNSTABLE\_getBuyer

  Deprecated. Please use getBuyer. Get buyer token and company location id from session.

  ```ts
  () => Promise<Partial<BuyerInput>>
  ```

* UNSTABLE\_setBuyer

  Deprecated. Please use setBuyer. Set buyer information into session.

  ```ts
  (buyer: Partial<BuyerInput>) => void
  ```

#### LoginOptions

* acrValues

  ```ts
  string
  ```

* countryCode

  ```ts
  CountryCode
  ```

* locale

  ```ts
  string
  ```

* loginHint

  ```ts
  string
  ```

* loginHintMode

  ```ts
  string
  ```

* uiLocales

  ```ts
  LanguageCode
  ```

#### LogoutOptions

* headers

  Add custom headers to the logout redirect.

  ```ts
  HeadersInit
  ```

* keepSession

  If true, custom data in the session will not be cleared on logout.

  ```ts
  boolean
  ```

* postLogoutRedirectUri

  The url to redirect customer to after logout, should be a relative URL. This url will need to included in Customer Account API's application setup for logout URI. The default value is current app origin, which is automatically setup in admin when using \`--customer-account-push\` flag with dev.

  ```ts
  string
  ```

#### CustomerAccountMutations



#### CustomerAPIResponse

* data

  ```ts
  ReturnType
  ```

* errors

  ```ts
  Array<{
      message: string;
      locations?: Array<{line: number; column: number}>;
      path?: Array<string>;
      extensions: {code: string};
    }>
  ```

* extensions

  ```ts
  { cost: { requestQueryCost: number; actualQueryCakes: number; throttleStatus: { maximumAvailable: number; currentAvailable: number; restoreRate: number; }; }; }
  ```

#### JsonGraphQLError

* extensions

  Reserved for implementors to extend the protocol however they see fit, and hence there are no additional restrictions on its contents.

  ```ts
  { [key: string]: unknown; }
  ```

* locations

  If an error can be associated to a particular point in the requested GraphQL document, it should contain a list of locations.

  ```ts
  { line: number; column: number; }[]
  ```

* message

  ```ts
  string
  ```

* name

  ```ts
  string
  ```

* path

  If an error can be associated to a particular field in the GraphQL result, it \_must\_ contain an entry with the key \`path\` that details the path of the response field which experienced the error. This allows clients to identify whether a null result is intentional or caused by a runtime error.

  ```ts
  (string | number)[]
  ```

* stack

  ```ts
  string
  ```

#### CustomerAccountQueries



#### Storefront

Interface to interact with the Storefront API.

* cache

  ```ts
  Cache
  ```

* CacheCustom

  ```ts
  (overrideOptions: AllCacheOptions) => AllCacheOptions
  ```

* CacheLong

  ```ts
  (overrideOptions?: AllCacheOptions) => AllCacheOptions
  ```

* CacheNone

  ```ts
  () => NoStoreStrategy
  ```

* CacheShort

  ```ts
  (overrideOptions?: AllCacheOptions) => AllCacheOptions
  ```

* forward

  Forwards the request to the Storefront API. It reads the API version from the request URL.

  ```ts
  (request: Request, options?: Pick<StorefrontCommonExtraParams, "storefrontApiVersion">) => Promise<Response>
  ```

* forwardMcp

  Forwards the request to the Storefront MCP endpoint.

  ```ts
  (request: Request) => Promise<Response>
  ```

* generateCacheControlHeader

  ```ts
  (cacheOptions: AllCacheOptions) => string
  ```

* getApiUrl

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "storefrontApiVersion" | "storeDomain">>) => string
  ```

* getHeaders

  ```ts
  () => Record<string, string>
  ```

* getPrivateTokenHeaders

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "contentType">> & Pick<StorefrontClientProps, "privateStorefrontToken"> & { buyerIp?: string; }) => Record<string, string>
  ```

* getPublicTokenHeaders

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "contentType">> & Pick<StorefrontClientProps, "publicStorefrontToken">) => Record<string, string>
  ```

* getShopifyDomain

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "storeDomain">>) => string
  ```

* i18n

  ```ts
  TI18n
  ```

* isMcpUrl

  Checks if the request URL matches the Storefront MCP endpoint.

  ```ts
  (request: { url?: string; }) => boolean
  ```

* isStorefrontApiUrl

  Checks if the request URL matches the Storefront API GraphQL endpoint.

  ```ts
  (request: { url?: string; }) => boolean
  ```

* mutate

  ```ts
  <
      OverrideReturnType extends any = never,
      RawGqlString extends string = string,
    >(
      mutation: RawGqlString,
      ...options: ClientVariablesInRestParams<
        StorefrontMutations,
        RawGqlString,
        StorefrontCommonExtraParams,
        AutoAddedVariableNames
      >
    ) => Promise<
      ClientReturn<StorefrontMutations, RawGqlString, OverrideReturnType> &
        StorefrontError
    >
  ```

* query

  ```ts
  <
      OverrideReturnType extends any = never,
      RawGqlString extends string = string,
    >(
      query: RawGqlString,
      ...options: ClientVariablesInRestParams<
        StorefrontQueries,
        RawGqlString,
        StorefrontCommonExtraParams & Pick<StorefrontQueryOptions, 'cache'>,
        AutoAddedVariableNames
      >
    ) => Promise<
      ClientReturn<StorefrontQueries, RawGqlString, OverrideReturnType> &
        StorefrontError
    >
  ```

* setCollectedSubrequestHeaders

  Sets the collected subrequest headers in the response. Useful to forward the cookies and server-timing headers from server subrequests to the browser.

  ```ts
  (response: { headers: Headers; }) => void
  ```

#### AllCacheOptions

Override options for a cache strategy.

* maxAge

  The maximum amount of time in seconds that a resource will be considered fresh. See \`max-age\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#:\~:text=Response%20Directives-,max%2Dage,-The%20max%2Dage).

  ```ts
  number
  ```

* mode

  The caching mode, generally \`public\`, \`private\`, or \`no-store\`.

  ```ts
  string
  ```

* sMaxAge

  Similar to \`maxAge\` but specific to shared caches. See \`s-maxage\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#s-maxage).

  ```ts
  number
  ```

* staleIfError

  Indicate that the cache should serve the stale response if an error occurs while revalidating the cache. See \`stale-if-error\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-if-error).

  ```ts
  number
  ```

* staleWhileRevalidate

  Indicate that the cache should serve the stale response in the background while revalidating the cache. See \`stale-while-revalidate\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-while-revalidate).

  ```ts
  number
  ```

#### NoStoreStrategy

* mode

  ```ts
  string
  ```

#### StorefrontCommonExtraParams

* displayName

  ```ts
  string
  ```

* headers

  ```ts
  HeadersInit
  ```

* storefrontApiVersion

  ```ts
  string
  ```

#### StorefrontClientProps

* contentType

  Customizes which \`"content-type"\` header is added when using \`getPrivateTokenHeaders()\` and \`getPublicTokenHeaders()\`. When fetching with a \`JSON.stringify()\`-ed \`body\`, use \`"json"\`. When fetching with a \`body\` that is a plain string, use \`"graphql"\`. Defaults to \`"json"\` Can also be customized on a call-by-call basis by passing in \`'contentType'\` to both \`getPrivateTokenHeaders({...})\` and \`getPublicTokenHeaders({...})\`, for example: \`getPublicTokenHeaders({contentType: 'graphql'})\`

  ```ts
  'json' | 'graphql'
  ```

* privateStorefrontToken

  The Storefront API delegate access token. Refer to the \[authentication]\(https://shopify.dev/api/storefront#authentication) and \[delegate access token]\(https://shopify.dev/apps/auth/oauth/delegate-access-tokens) documentation for more details.

  ```ts
  string
  ```

* publicStorefrontToken

  The Storefront API access token. Refer to the \[authentication]\(https://shopify.dev/api/storefront#authentication) documentation for more details.

  ```ts
  string
  ```

* storeDomain

  The host name of the domain (eg: \`{shop}.myshopify.com\`).

  ```ts
  string
  ```

* storefrontApiVersion

  The Storefront API version. This should almost always be the same as the version Hydrogen React was built for. Learn more about Shopify \[API versioning]\(https://shopify.dev/api/usage/versioning) for more details.

  ```ts
  string
  ```

#### StorefrontMutations

Maps all the mutations found in the project to variables and return types.



#### AutoAddedVariableNames

```ts
'country' | 'language'
```

#### StorefrontError

* errors

  ```ts
  StorefrontApiErrors
  ```

#### StorefrontApiErrors

```ts
JsonGraphQLError[] | undefined
```

#### StorefrontQueries

Maps all the queries found in the project to variables and return types.



#### StorefrontQueryOptions

```ts
StorefrontCommonExtraParams & {
  query: string;
  mutation?: never;
  cache?: CachingStrategy;
}
```

#### CachingStrategy

Use the \`CachingStrategy\` to define a custom caching mechanism for your data. Or use one of the pre-defined caching strategies: CacheNone, CacheShort, CacheLong.

* maxAge

  The maximum amount of time in seconds that a resource will be considered fresh. See \`max-age\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#:\~:text=Response%20Directives-,max%2Dage,-The%20max%2Dage).

  ```ts
  number
  ```

* mode

  The caching mode, generally \`public\`, \`private\`, or \`no-store\`.

  ```ts
  string
  ```

* sMaxAge

  Similar to \`maxAge\` but specific to shared caches. See \`s-maxage\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#s-maxage).

  ```ts
  number
  ```

* staleIfError

  Indicate that the cache should serve the stale response if an error occurs while revalidating the cache. See \`stale-if-error\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-if-error).

  ```ts
  number
  ```

* staleWhileRevalidate

  Indicate that the cache should serve the stale response in the background while revalidating the cache. See \`stale-while-revalidate\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-while-revalidate).

  ```ts
  number
  ```

#### Headers



#### CartMetafieldsSetFunction

* metafields

  ```ts
  MetafieldWithoutOwnerId[]
  ```

* optionalParams

  ```ts
  CartOptionalInput
  ```

returns

```ts
Promise<CartQueryDataReturn>
```

#### MetafieldWithoutOwnerId



#### CartOptionalInput

* cartId

  The cart id.

  ```ts
  string
  ```

* country

  The country code.

  ```ts
  CountryCode
  ```

* language

  The language code.

  ```ts
  LanguageCode
  ```

* visitorConsent

  Visitor consent preferences for the Storefront API's

  ```ts
  VisitorConsent
  ```

#### VisitorConsent

* analytics

  ```ts
  ConsentStatus
  ```

* marketing

  ```ts
  ConsentStatus
  ```

* preferences

  ```ts
  ConsentStatus
  ```

* sale\_of\_data

  ```ts
  ConsentStatus
  ```

#### ConsentStatus

```ts
boolean | undefined
```

#### CartQueryDataReturn

```ts
CartQueryData & {
  errors?: StorefrontApiErrors;
}
```

#### CartQueryData

* cart

  ```ts
  Cart
  ```

* userErrors

  ```ts
  | CartUserError[]
      | MetafieldsSetUserError[]
      | MetafieldDeleteUserError[]
  ```

* warnings

  ```ts
  CartWarning[]
  ```

#### Cart

* attributes

  The cart's attributes.

  ```ts
  { __typename?: "Attribute"; key?: string; value?: string; }[]
  ```

* buyerIdentity

  The cart's buyer identity.

  ```ts
  CartType['buyerIdentity']
  ```

* checkoutUrl

  The checkout URL for the cart, if the cart has been created in the Storefront API.

  ```ts
  string
  ```

* cost

  The cost for the cart, including the subtotal, total, taxes, and duties.

  ```ts
  CartType['cost']
  ```

* discountCodes

  The discount codes applied to the cart.

  ```ts
  { __typename?: "CartDiscountCode"; applicable?: boolean; code?: string; }[]
  ```

* id

  The cart's ID if it has been created through the Storefront API.

  ```ts
  string
  ```

* lines

  The cart lines.

  ```ts
  Array<CartLine | ComponentizableCartLine>
  ```

* note

  The cart's note.

  ```ts
  string
  ```

* totalQuantity

  The total number of items in the cart, across all lines. If there are no lines, then the value is 0.

  ```ts
  number
  ```

#### CartUserError



#### MetafieldsSetUserError



#### MetafieldDeleteUserError



#### CartWarning



Examples

#### Examples

* ####

  ##### JavaScript

  ```js
  import {cartMetafieldsSetDefault} from '@shopify/hydrogen';

  const cartSetMetafields = cartMetafieldsSetDefault({
    storefront,
    getCartId,
  });

  const result = await cartSetMetafields([
    {
      key: 'custom.gift',
      type: 'boolean',
      value: 'true',
    },
  ]);
  ```

***

---



<a id="latest-utilities-cart-cartnoteupdatedefault"></a>


## cartNoteUpdateDefault

Creates a function that accepts a string and attaches it as a note to a cart.

### cart​Note​Update​Default(**[options](#cartnoteupdatedefault-propertydetail-options)**​)

#### Parameters

* **options**

  **CartQueryOptions**

  **required**

#### Returns

* **CartNoteUpdateFunction**

#### CartQueryOptions

* cartFragment

  The cart fragment to override the one used in this query.

  ```ts
  string
  ```

* customerAccount

  The customer account instance created by \[\`createCustomerAccount\`]\(docs/api/hydrogen/latest/customer/createcustomeraccount).

  ```ts
  CustomerAccount
  ```

* getCartId

  A function that returns the cart ID.

  ```ts
  () => string
  ```

* storefront

  The storefront client instance created by \[\`createStorefrontClient\`]\(docs/api/hydrogen/latest/utilities/createstorefrontclient).

  ```ts
  Storefront
  ```

#### CustomerAccount

* authorize

  On successful login, the customer redirects back to your app. This function validates the OAuth response and exchanges the authorization code for an access token and refresh token. It also persists the tokens on your session. This function should be called and returned from the Remix loader configured as the redirect URI within the Customer Account API settings in admin.

  ```ts
  () => Promise<Response>
  ```

* getAccessToken

  Returns CustomerAccessToken if the customer is logged in. It also run a expiry check and does a token refresh if needed.

  ```ts
  () => Promise<string>
  ```

* getApiUrl

  Creates the fully-qualified URL to your store's GraphQL endpoint.

  ```ts
  () => string
  ```

* getBuyer

  Get buyer token and company location id from session.

  ```ts
  () => Promise<Partial<BuyerInput>>
  ```

* handleAuthStatus

  Check for a not logged in customer and redirect customer to login page. The redirect can be overwritten with \`customAuthStatusHandler\` option.

  ```ts
  () => Promise<void>
  ```

* i18n

  The i18n configuration for Customer Account API

  ```ts
  { language: LanguageCode; }
  ```

* isLoggedIn

  Returns if the customer is logged in. It also checks if the access token is expired and refreshes it if needed.

  ```ts
  () => Promise<boolean>
  ```

* login

  Start the OAuth login flow. This function should be called and returned from a Remix loader. It redirects the customer to a Shopify login domain. It also defined the final path the customer lands on at the end of the oAuth flow with the value of the \`return\_to\` query param. (This is automatically setup unless \`customAuthStatusHandler\` option is in use)

  ```ts
  (options?: LoginOptions) => Promise<Response>
  ```

* logout

  Logout the customer by clearing the session and redirecting to the login domain. It should be called and returned from a Remix action. The path app should redirect to after logout can be setup in Customer Account API settings in admin.

  ```ts
  (options?: LogoutOptions) => Promise<Response>
  ```

* mutate

  Execute a GraphQL mutation against the Customer Account API. This method execute \`handleAuthStatus()\` ahead of mutation.

  ```ts
  <
      OverrideReturnType extends any = never,
      RawGqlString extends string = string,
    >(
      mutation: RawGqlString,
      ...options: ClientVariablesInRestParams<
        CustomerAccountMutations,
        RawGqlString
      >
    ) => Promise<
      Omit<
        CustomerAPIResponse<
          ClientReturn<CustomerAccountMutations, RawGqlString, OverrideReturnType>
        >,
        'errors'
      > & {errors?: JsonGraphQLError[]}
    >
  ```

* query

  Execute a GraphQL query against the Customer Account API. This method execute \`handleAuthStatus()\` ahead of query.

  ```ts
  <
      OverrideReturnType extends any = never,
      RawGqlString extends string = string,
    >(
      query: RawGqlString,
      ...options: ClientVariablesInRestParams<
        CustomerAccountQueries,
        RawGqlString
      >
    ) => Promise<
      Omit<
        CustomerAPIResponse<
          ClientReturn<CustomerAccountQueries, RawGqlString, OverrideReturnType>
        >,
        'errors'
      > & {errors?: JsonGraphQLError[]}
    >
  ```

* setBuyer

  Set buyer information into session.

  ```ts
  (buyer: Partial<BuyerInput>) => void
  ```

* UNSTABLE\_getBuyer

  Deprecated. Please use getBuyer. Get buyer token and company location id from session.

  ```ts
  () => Promise<Partial<BuyerInput>>
  ```

* UNSTABLE\_setBuyer

  Deprecated. Please use setBuyer. Set buyer information into session.

  ```ts
  (buyer: Partial<BuyerInput>) => void
  ```

#### LoginOptions

* acrValues

  ```ts
  string
  ```

* countryCode

  ```ts
  CountryCode
  ```

* locale

  ```ts
  string
  ```

* loginHint

  ```ts
  string
  ```

* loginHintMode

  ```ts
  string
  ```

* uiLocales

  ```ts
  LanguageCode
  ```

#### LogoutOptions

* headers

  Add custom headers to the logout redirect.

  ```ts
  HeadersInit
  ```

* keepSession

  If true, custom data in the session will not be cleared on logout.

  ```ts
  boolean
  ```

* postLogoutRedirectUri

  The url to redirect customer to after logout, should be a relative URL. This url will need to included in Customer Account API's application setup for logout URI. The default value is current app origin, which is automatically setup in admin when using \`--customer-account-push\` flag with dev.

  ```ts
  string
  ```

#### CustomerAccountMutations



#### CustomerAPIResponse

* data

  ```ts
  ReturnType
  ```

* errors

  ```ts
  Array<{
      message: string;
      locations?: Array<{line: number; column: number}>;
      path?: Array<string>;
      extensions: {code: string};
    }>
  ```

* extensions

  ```ts
  { cost: { requestQueryCost: number; actualQueryCakes: number; throttleStatus: { maximumAvailable: number; currentAvailable: number; restoreRate: number; }; }; }
  ```

#### JsonGraphQLError

* extensions

  Reserved for implementors to extend the protocol however they see fit, and hence there are no additional restrictions on its contents.

  ```ts
  { [key: string]: unknown; }
  ```

* locations

  If an error can be associated to a particular point in the requested GraphQL document, it should contain a list of locations.

  ```ts
  { line: number; column: number; }[]
  ```

* message

  ```ts
  string
  ```

* name

  ```ts
  string
  ```

* path

  If an error can be associated to a particular field in the GraphQL result, it \_must\_ contain an entry with the key \`path\` that details the path of the response field which experienced the error. This allows clients to identify whether a null result is intentional or caused by a runtime error.

  ```ts
  (string | number)[]
  ```

* stack

  ```ts
  string
  ```

#### CustomerAccountQueries



#### Storefront

Interface to interact with the Storefront API.

* cache

  ```ts
  Cache
  ```

* CacheCustom

  ```ts
  (overrideOptions: AllCacheOptions) => AllCacheOptions
  ```

* CacheLong

  ```ts
  (overrideOptions?: AllCacheOptions) => AllCacheOptions
  ```

* CacheNone

  ```ts
  () => NoStoreStrategy
  ```

* CacheShort

  ```ts
  (overrideOptions?: AllCacheOptions) => AllCacheOptions
  ```

* forward

  Forwards the request to the Storefront API. It reads the API version from the request URL.

  ```ts
  (request: Request, options?: Pick<StorefrontCommonExtraParams, "storefrontApiVersion">) => Promise<Response>
  ```

* forwardMcp

  Forwards the request to the Storefront MCP endpoint.

  ```ts
  (request: Request) => Promise<Response>
  ```

* generateCacheControlHeader

  ```ts
  (cacheOptions: AllCacheOptions) => string
  ```

* getApiUrl

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "storefrontApiVersion" | "storeDomain">>) => string
  ```

* getHeaders

  ```ts
  () => Record<string, string>
  ```

* getPrivateTokenHeaders

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "contentType">> & Pick<StorefrontClientProps, "privateStorefrontToken"> & { buyerIp?: string; }) => Record<string, string>
  ```

* getPublicTokenHeaders

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "contentType">> & Pick<StorefrontClientProps, "publicStorefrontToken">) => Record<string, string>
  ```

* getShopifyDomain

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "storeDomain">>) => string
  ```

* i18n

  ```ts
  TI18n
  ```

* isMcpUrl

  Checks if the request URL matches the Storefront MCP endpoint.

  ```ts
  (request: { url?: string; }) => boolean
  ```

* isStorefrontApiUrl

  Checks if the request URL matches the Storefront API GraphQL endpoint.

  ```ts
  (request: { url?: string; }) => boolean
  ```

* mutate

  ```ts
  <
      OverrideReturnType extends any = never,
      RawGqlString extends string = string,
    >(
      mutation: RawGqlString,
      ...options: ClientVariablesInRestParams<
        StorefrontMutations,
        RawGqlString,
        StorefrontCommonExtraParams,
        AutoAddedVariableNames
      >
    ) => Promise<
      ClientReturn<StorefrontMutations, RawGqlString, OverrideReturnType> &
        StorefrontError
    >
  ```

* query

  ```ts
  <
      OverrideReturnType extends any = never,
      RawGqlString extends string = string,
    >(
      query: RawGqlString,
      ...options: ClientVariablesInRestParams<
        StorefrontQueries,
        RawGqlString,
        StorefrontCommonExtraParams & Pick<StorefrontQueryOptions, 'cache'>,
        AutoAddedVariableNames
      >
    ) => Promise<
      ClientReturn<StorefrontQueries, RawGqlString, OverrideReturnType> &
        StorefrontError
    >
  ```

* setCollectedSubrequestHeaders

  Sets the collected subrequest headers in the response. Useful to forward the cookies and server-timing headers from server subrequests to the browser.

  ```ts
  (response: { headers: Headers; }) => void
  ```

#### AllCacheOptions

Override options for a cache strategy.

* maxAge

  The maximum amount of time in seconds that a resource will be considered fresh. See \`max-age\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#:\~:text=Response%20Directives-,max%2Dage,-The%20max%2Dage).

  ```ts
  number
  ```

* mode

  The caching mode, generally \`public\`, \`private\`, or \`no-store\`.

  ```ts
  string
  ```

* sMaxAge

  Similar to \`maxAge\` but specific to shared caches. See \`s-maxage\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#s-maxage).

  ```ts
  number
  ```

* staleIfError

  Indicate that the cache should serve the stale response if an error occurs while revalidating the cache. See \`stale-if-error\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-if-error).

  ```ts
  number
  ```

* staleWhileRevalidate

  Indicate that the cache should serve the stale response in the background while revalidating the cache. See \`stale-while-revalidate\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-while-revalidate).

  ```ts
  number
  ```

#### NoStoreStrategy

* mode

  ```ts
  string
  ```

#### StorefrontCommonExtraParams

* displayName

  ```ts
  string
  ```

* headers

  ```ts
  HeadersInit
  ```

* storefrontApiVersion

  ```ts
  string
  ```

#### StorefrontClientProps

* contentType

  Customizes which \`"content-type"\` header is added when using \`getPrivateTokenHeaders()\` and \`getPublicTokenHeaders()\`. When fetching with a \`JSON.stringify()\`-ed \`body\`, use \`"json"\`. When fetching with a \`body\` that is a plain string, use \`"graphql"\`. Defaults to \`"json"\` Can also be customized on a call-by-call basis by passing in \`'contentType'\` to both \`getPrivateTokenHeaders({...})\` and \`getPublicTokenHeaders({...})\`, for example: \`getPublicTokenHeaders({contentType: 'graphql'})\`

  ```ts
  'json' | 'graphql'
  ```

* privateStorefrontToken

  The Storefront API delegate access token. Refer to the \[authentication]\(https://shopify.dev/api/storefront#authentication) and \[delegate access token]\(https://shopify.dev/apps/auth/oauth/delegate-access-tokens) documentation for more details.

  ```ts
  string
  ```

* publicStorefrontToken

  The Storefront API access token. Refer to the \[authentication]\(https://shopify.dev/api/storefront#authentication) documentation for more details.

  ```ts
  string
  ```

* storeDomain

  The host name of the domain (eg: \`{shop}.myshopify.com\`).

  ```ts
  string
  ```

* storefrontApiVersion

  The Storefront API version. This should almost always be the same as the version Hydrogen React was built for. Learn more about Shopify \[API versioning]\(https://shopify.dev/api/usage/versioning) for more details.

  ```ts
  string
  ```

#### StorefrontMutations

Maps all the mutations found in the project to variables and return types.



#### AutoAddedVariableNames

```ts
'country' | 'language'
```

#### StorefrontError

* errors

  ```ts
  StorefrontApiErrors
  ```

#### StorefrontApiErrors

```ts
JsonGraphQLError[] | undefined
```

#### StorefrontQueries

Maps all the queries found in the project to variables and return types.



#### StorefrontQueryOptions

```ts
StorefrontCommonExtraParams & {
  query: string;
  mutation?: never;
  cache?: CachingStrategy;
}
```

#### CachingStrategy

Use the \`CachingStrategy\` to define a custom caching mechanism for your data. Or use one of the pre-defined caching strategies: CacheNone, CacheShort, CacheLong.

* maxAge

  The maximum amount of time in seconds that a resource will be considered fresh. See \`max-age\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#:\~:text=Response%20Directives-,max%2Dage,-The%20max%2Dage).

  ```ts
  number
  ```

* mode

  The caching mode, generally \`public\`, \`private\`, or \`no-store\`.

  ```ts
  string
  ```

* sMaxAge

  Similar to \`maxAge\` but specific to shared caches. See \`s-maxage\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#s-maxage).

  ```ts
  number
  ```

* staleIfError

  Indicate that the cache should serve the stale response if an error occurs while revalidating the cache. See \`stale-if-error\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-if-error).

  ```ts
  number
  ```

* staleWhileRevalidate

  Indicate that the cache should serve the stale response in the background while revalidating the cache. See \`stale-while-revalidate\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-while-revalidate).

  ```ts
  number
  ```

#### Headers



#### CartNoteUpdateFunction

* note

  ```ts
  string
  ```

* optionalParams

  ```ts
  CartOptionalInput
  ```

returns

```ts
Promise<CartQueryDataReturn>
```

#### CartOptionalInput

* cartId

  The cart id.

  ```ts
  string
  ```

* country

  The country code.

  ```ts
  CountryCode
  ```

* language

  The language code.

  ```ts
  LanguageCode
  ```

* visitorConsent

  Visitor consent preferences for the Storefront API's

  ```ts
  VisitorConsent
  ```

#### VisitorConsent

* analytics

  ```ts
  ConsentStatus
  ```

* marketing

  ```ts
  ConsentStatus
  ```

* preferences

  ```ts
  ConsentStatus
  ```

* sale\_of\_data

  ```ts
  ConsentStatus
  ```

#### ConsentStatus

```ts
boolean | undefined
```

#### CartQueryDataReturn

```ts
CartQueryData & {
  errors?: StorefrontApiErrors;
}
```

#### CartQueryData

* cart

  ```ts
  Cart
  ```

* userErrors

  ```ts
  | CartUserError[]
      | MetafieldsSetUserError[]
      | MetafieldDeleteUserError[]
  ```

* warnings

  ```ts
  CartWarning[]
  ```

#### Cart

* attributes

  The cart's attributes.

  ```ts
  { __typename?: "Attribute"; key?: string; value?: string; }[]
  ```

* buyerIdentity

  The cart's buyer identity.

  ```ts
  CartType['buyerIdentity']
  ```

* checkoutUrl

  The checkout URL for the cart, if the cart has been created in the Storefront API.

  ```ts
  string
  ```

* cost

  The cost for the cart, including the subtotal, total, taxes, and duties.

  ```ts
  CartType['cost']
  ```

* discountCodes

  The discount codes applied to the cart.

  ```ts
  { __typename?: "CartDiscountCode"; applicable?: boolean; code?: string; }[]
  ```

* id

  The cart's ID if it has been created through the Storefront API.

  ```ts
  string
  ```

* lines

  The cart lines.

  ```ts
  Array<CartLine | ComponentizableCartLine>
  ```

* note

  The cart's note.

  ```ts
  string
  ```

* totalQuantity

  The total number of items in the cart, across all lines. If there are no lines, then the value is 0.

  ```ts
  number
  ```

#### CartUserError



#### MetafieldsSetUserError



#### MetafieldDeleteUserError



#### CartWarning



Examples

#### Examples

* ####

  ##### JavaScript

  ```js
  import {cartNoteUpdateDefault} from '@shopify/hydrogen';

  const cartNote = cartNoteUpdateDefault({
    storefront,
    getCartId,
  });

  const result = await cartNote('This is a note');
  ```

***

---



<a id="latest-utilities-cart-cartselecteddeliveryoptionsupdatedefault"></a>


## cartSelectedDeliveryOptionsUpdateDefault

Creates a function that accepts an object of [CartSelectedDeliveryOptionInput](https://shopify.dev/docs/api/storefront/2026-01/input-objects/CartSelectedDeliveryOptionInput) and updates the selected delivery option of a cart

### cart​Selected​Delivery​Options​Update​Default(**[options](#cartselecteddeliveryoptionsupdatedefault-propertydetail-options)**​)

#### Parameters

* **options**

  **CartQueryOptions**

  **required**

#### Returns

* **CartSelectedDeliveryOptionsUpdateFunction**

#### CartQueryOptions

* cartFragment

  The cart fragment to override the one used in this query.

  ```ts
  string
  ```

* customerAccount

  The customer account instance created by \[\`createCustomerAccount\`]\(docs/api/hydrogen/latest/customer/createcustomeraccount).

  ```ts
  CustomerAccount
  ```

* getCartId

  A function that returns the cart ID.

  ```ts
  () => string
  ```

* storefront

  The storefront client instance created by \[\`createStorefrontClient\`]\(docs/api/hydrogen/latest/utilities/createstorefrontclient).

  ```ts
  Storefront
  ```

#### CustomerAccount

* authorize

  On successful login, the customer redirects back to your app. This function validates the OAuth response and exchanges the authorization code for an access token and refresh token. It also persists the tokens on your session. This function should be called and returned from the Remix loader configured as the redirect URI within the Customer Account API settings in admin.

  ```ts
  () => Promise<Response>
  ```

* getAccessToken

  Returns CustomerAccessToken if the customer is logged in. It also run a expiry check and does a token refresh if needed.

  ```ts
  () => Promise<string>
  ```

* getApiUrl

  Creates the fully-qualified URL to your store's GraphQL endpoint.

  ```ts
  () => string
  ```

* getBuyer

  Get buyer token and company location id from session.

  ```ts
  () => Promise<Partial<BuyerInput>>
  ```

* handleAuthStatus

  Check for a not logged in customer and redirect customer to login page. The redirect can be overwritten with \`customAuthStatusHandler\` option.

  ```ts
  () => Promise<void>
  ```

* i18n

  The i18n configuration for Customer Account API

  ```ts
  { language: LanguageCode; }
  ```

* isLoggedIn

  Returns if the customer is logged in. It also checks if the access token is expired and refreshes it if needed.

  ```ts
  () => Promise<boolean>
  ```

* login

  Start the OAuth login flow. This function should be called and returned from a Remix loader. It redirects the customer to a Shopify login domain. It also defined the final path the customer lands on at the end of the oAuth flow with the value of the \`return\_to\` query param. (This is automatically setup unless \`customAuthStatusHandler\` option is in use)

  ```ts
  (options?: LoginOptions) => Promise<Response>
  ```

* logout

  Logout the customer by clearing the session and redirecting to the login domain. It should be called and returned from a Remix action. The path app should redirect to after logout can be setup in Customer Account API settings in admin.

  ```ts
  (options?: LogoutOptions) => Promise<Response>
  ```

* mutate

  Execute a GraphQL mutation against the Customer Account API. This method execute \`handleAuthStatus()\` ahead of mutation.

  ```ts
  <
      OverrideReturnType extends any = never,
      RawGqlString extends string = string,
    >(
      mutation: RawGqlString,
      ...options: ClientVariablesInRestParams<
        CustomerAccountMutations,
        RawGqlString
      >
    ) => Promise<
      Omit<
        CustomerAPIResponse<
          ClientReturn<CustomerAccountMutations, RawGqlString, OverrideReturnType>
        >,
        'errors'
      > & {errors?: JsonGraphQLError[]}
    >
  ```

* query

  Execute a GraphQL query against the Customer Account API. This method execute \`handleAuthStatus()\` ahead of query.

  ```ts
  <
      OverrideReturnType extends any = never,
      RawGqlString extends string = string,
    >(
      query: RawGqlString,
      ...options: ClientVariablesInRestParams<
        CustomerAccountQueries,
        RawGqlString
      >
    ) => Promise<
      Omit<
        CustomerAPIResponse<
          ClientReturn<CustomerAccountQueries, RawGqlString, OverrideReturnType>
        >,
        'errors'
      > & {errors?: JsonGraphQLError[]}
    >
  ```

* setBuyer

  Set buyer information into session.

  ```ts
  (buyer: Partial<BuyerInput>) => void
  ```

* UNSTABLE\_getBuyer

  Deprecated. Please use getBuyer. Get buyer token and company location id from session.

  ```ts
  () => Promise<Partial<BuyerInput>>
  ```

* UNSTABLE\_setBuyer

  Deprecated. Please use setBuyer. Set buyer information into session.

  ```ts
  (buyer: Partial<BuyerInput>) => void
  ```

#### LoginOptions

* acrValues

  ```ts
  string
  ```

* countryCode

  ```ts
  CountryCode
  ```

* locale

  ```ts
  string
  ```

* loginHint

  ```ts
  string
  ```

* loginHintMode

  ```ts
  string
  ```

* uiLocales

  ```ts
  LanguageCode
  ```

#### LogoutOptions

* headers

  Add custom headers to the logout redirect.

  ```ts
  HeadersInit
  ```

* keepSession

  If true, custom data in the session will not be cleared on logout.

  ```ts
  boolean
  ```

* postLogoutRedirectUri

  The url to redirect customer to after logout, should be a relative URL. This url will need to included in Customer Account API's application setup for logout URI. The default value is current app origin, which is automatically setup in admin when using \`--customer-account-push\` flag with dev.

  ```ts
  string
  ```

#### CustomerAccountMutations



#### CustomerAPIResponse

* data

  ```ts
  ReturnType
  ```

* errors

  ```ts
  Array<{
      message: string;
      locations?: Array<{line: number; column: number}>;
      path?: Array<string>;
      extensions: {code: string};
    }>
  ```

* extensions

  ```ts
  { cost: { requestQueryCost: number; actualQueryCakes: number; throttleStatus: { maximumAvailable: number; currentAvailable: number; restoreRate: number; }; }; }
  ```

#### JsonGraphQLError

* extensions

  Reserved for implementors to extend the protocol however they see fit, and hence there are no additional restrictions on its contents.

  ```ts
  { [key: string]: unknown; }
  ```

* locations

  If an error can be associated to a particular point in the requested GraphQL document, it should contain a list of locations.

  ```ts
  { line: number; column: number; }[]
  ```

* message

  ```ts
  string
  ```

* name

  ```ts
  string
  ```

* path

  If an error can be associated to a particular field in the GraphQL result, it \_must\_ contain an entry with the key \`path\` that details the path of the response field which experienced the error. This allows clients to identify whether a null result is intentional or caused by a runtime error.

  ```ts
  (string | number)[]
  ```

* stack

  ```ts
  string
  ```

#### CustomerAccountQueries



#### Storefront

Interface to interact with the Storefront API.

* cache

  ```ts
  Cache
  ```

* CacheCustom

  ```ts
  (overrideOptions: AllCacheOptions) => AllCacheOptions
  ```

* CacheLong

  ```ts
  (overrideOptions?: AllCacheOptions) => AllCacheOptions
  ```

* CacheNone

  ```ts
  () => NoStoreStrategy
  ```

* CacheShort

  ```ts
  (overrideOptions?: AllCacheOptions) => AllCacheOptions
  ```

* forward

  Forwards the request to the Storefront API. It reads the API version from the request URL.

  ```ts
  (request: Request, options?: Pick<StorefrontCommonExtraParams, "storefrontApiVersion">) => Promise<Response>
  ```

* forwardMcp

  Forwards the request to the Storefront MCP endpoint.

  ```ts
  (request: Request) => Promise<Response>
  ```

* generateCacheControlHeader

  ```ts
  (cacheOptions: AllCacheOptions) => string
  ```

* getApiUrl

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "storefrontApiVersion" | "storeDomain">>) => string
  ```

* getHeaders

  ```ts
  () => Record<string, string>
  ```

* getPrivateTokenHeaders

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "contentType">> & Pick<StorefrontClientProps, "privateStorefrontToken"> & { buyerIp?: string; }) => Record<string, string>
  ```

* getPublicTokenHeaders

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "contentType">> & Pick<StorefrontClientProps, "publicStorefrontToken">) => Record<string, string>
  ```

* getShopifyDomain

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "storeDomain">>) => string
  ```

* i18n

  ```ts
  TI18n
  ```

* isMcpUrl

  Checks if the request URL matches the Storefront MCP endpoint.

  ```ts
  (request: { url?: string; }) => boolean
  ```

* isStorefrontApiUrl

  Checks if the request URL matches the Storefront API GraphQL endpoint.

  ```ts
  (request: { url?: string; }) => boolean
  ```

* mutate

  ```ts
  <
      OverrideReturnType extends any = never,
      RawGqlString extends string = string,
    >(
      mutation: RawGqlString,
      ...options: ClientVariablesInRestParams<
        StorefrontMutations,
        RawGqlString,
        StorefrontCommonExtraParams,
        AutoAddedVariableNames
      >
    ) => Promise<
      ClientReturn<StorefrontMutations, RawGqlString, OverrideReturnType> &
        StorefrontError
    >
  ```

* query

  ```ts
  <
      OverrideReturnType extends any = never,
      RawGqlString extends string = string,
    >(
      query: RawGqlString,
      ...options: ClientVariablesInRestParams<
        StorefrontQueries,
        RawGqlString,
        StorefrontCommonExtraParams & Pick<StorefrontQueryOptions, 'cache'>,
        AutoAddedVariableNames
      >
    ) => Promise<
      ClientReturn<StorefrontQueries, RawGqlString, OverrideReturnType> &
        StorefrontError
    >
  ```

* setCollectedSubrequestHeaders

  Sets the collected subrequest headers in the response. Useful to forward the cookies and server-timing headers from server subrequests to the browser.

  ```ts
  (response: { headers: Headers; }) => void
  ```

#### AllCacheOptions

Override options for a cache strategy.

* maxAge

  The maximum amount of time in seconds that a resource will be considered fresh. See \`max-age\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#:\~:text=Response%20Directives-,max%2Dage,-The%20max%2Dage).

  ```ts
  number
  ```

* mode

  The caching mode, generally \`public\`, \`private\`, or \`no-store\`.

  ```ts
  string
  ```

* sMaxAge

  Similar to \`maxAge\` but specific to shared caches. See \`s-maxage\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#s-maxage).

  ```ts
  number
  ```

* staleIfError

  Indicate that the cache should serve the stale response if an error occurs while revalidating the cache. See \`stale-if-error\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-if-error).

  ```ts
  number
  ```

* staleWhileRevalidate

  Indicate that the cache should serve the stale response in the background while revalidating the cache. See \`stale-while-revalidate\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-while-revalidate).

  ```ts
  number
  ```

#### NoStoreStrategy

* mode

  ```ts
  string
  ```

#### StorefrontCommonExtraParams

* displayName

  ```ts
  string
  ```

* headers

  ```ts
  HeadersInit
  ```

* storefrontApiVersion

  ```ts
  string
  ```

#### StorefrontClientProps

* contentType

  Customizes which \`"content-type"\` header is added when using \`getPrivateTokenHeaders()\` and \`getPublicTokenHeaders()\`. When fetching with a \`JSON.stringify()\`-ed \`body\`, use \`"json"\`. When fetching with a \`body\` that is a plain string, use \`"graphql"\`. Defaults to \`"json"\` Can also be customized on a call-by-call basis by passing in \`'contentType'\` to both \`getPrivateTokenHeaders({...})\` and \`getPublicTokenHeaders({...})\`, for example: \`getPublicTokenHeaders({contentType: 'graphql'})\`

  ```ts
  'json' | 'graphql'
  ```

* privateStorefrontToken

  The Storefront API delegate access token. Refer to the \[authentication]\(https://shopify.dev/api/storefront#authentication) and \[delegate access token]\(https://shopify.dev/apps/auth/oauth/delegate-access-tokens) documentation for more details.

  ```ts
  string
  ```

* publicStorefrontToken

  The Storefront API access token. Refer to the \[authentication]\(https://shopify.dev/api/storefront#authentication) documentation for more details.

  ```ts
  string
  ```

* storeDomain

  The host name of the domain (eg: \`{shop}.myshopify.com\`).

  ```ts
  string
  ```

* storefrontApiVersion

  The Storefront API version. This should almost always be the same as the version Hydrogen React was built for. Learn more about Shopify \[API versioning]\(https://shopify.dev/api/usage/versioning) for more details.

  ```ts
  string
  ```

#### StorefrontMutations

Maps all the mutations found in the project to variables and return types.



#### AutoAddedVariableNames

```ts
'country' | 'language'
```

#### StorefrontError

* errors

  ```ts
  StorefrontApiErrors
  ```

#### StorefrontApiErrors

```ts
JsonGraphQLError[] | undefined
```

#### StorefrontQueries

Maps all the queries found in the project to variables and return types.



#### StorefrontQueryOptions

```ts
StorefrontCommonExtraParams & {
  query: string;
  mutation?: never;
  cache?: CachingStrategy;
}
```

#### CachingStrategy

Use the \`CachingStrategy\` to define a custom caching mechanism for your data. Or use one of the pre-defined caching strategies: CacheNone, CacheShort, CacheLong.

* maxAge

  The maximum amount of time in seconds that a resource will be considered fresh. See \`max-age\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#:\~:text=Response%20Directives-,max%2Dage,-The%20max%2Dage).

  ```ts
  number
  ```

* mode

  The caching mode, generally \`public\`, \`private\`, or \`no-store\`.

  ```ts
  string
  ```

* sMaxAge

  Similar to \`maxAge\` but specific to shared caches. See \`s-maxage\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#s-maxage).

  ```ts
  number
  ```

* staleIfError

  Indicate that the cache should serve the stale response if an error occurs while revalidating the cache. See \`stale-if-error\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-if-error).

  ```ts
  number
  ```

* staleWhileRevalidate

  Indicate that the cache should serve the stale response in the background while revalidating the cache. See \`stale-while-revalidate\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-while-revalidate).

  ```ts
  number
  ```

#### Headers



#### CartSelectedDeliveryOptionsUpdateFunction

* selectedDeliveryOptions

  ```ts
  CartSelectedDeliveryOptionInput[]
  ```

* optionalParams

  ```ts
  CartOptionalInput
  ```

returns

```ts
Promise<CartQueryDataReturn>
```

#### CartSelectedDeliveryOptionInput



#### CartOptionalInput

* cartId

  The cart id.

  ```ts
  string
  ```

* country

  The country code.

  ```ts
  CountryCode
  ```

* language

  The language code.

  ```ts
  LanguageCode
  ```

* visitorConsent

  Visitor consent preferences for the Storefront API's

  ```ts
  VisitorConsent
  ```

#### VisitorConsent

* analytics

  ```ts
  ConsentStatus
  ```

* marketing

  ```ts
  ConsentStatus
  ```

* preferences

  ```ts
  ConsentStatus
  ```

* sale\_of\_data

  ```ts
  ConsentStatus
  ```

#### ConsentStatus

```ts
boolean | undefined
```

#### CartQueryDataReturn

```ts
CartQueryData & {
  errors?: StorefrontApiErrors;
}
```

#### CartQueryData

* cart

  ```ts
  Cart
  ```

* userErrors

  ```ts
  | CartUserError[]
      | MetafieldsSetUserError[]
      | MetafieldDeleteUserError[]
  ```

* warnings

  ```ts
  CartWarning[]
  ```

#### Cart

* attributes

  The cart's attributes.

  ```ts
  { __typename?: "Attribute"; key?: string; value?: string; }[]
  ```

* buyerIdentity

  The cart's buyer identity.

  ```ts
  CartType['buyerIdentity']
  ```

* checkoutUrl

  The checkout URL for the cart, if the cart has been created in the Storefront API.

  ```ts
  string
  ```

* cost

  The cost for the cart, including the subtotal, total, taxes, and duties.

  ```ts
  CartType['cost']
  ```

* discountCodes

  The discount codes applied to the cart.

  ```ts
  { __typename?: "CartDiscountCode"; applicable?: boolean; code?: string; }[]
  ```

* id

  The cart's ID if it has been created through the Storefront API.

  ```ts
  string
  ```

* lines

  The cart lines.

  ```ts
  Array<CartLine | ComponentizableCartLine>
  ```

* note

  The cart's note.

  ```ts
  string
  ```

* totalQuantity

  The total number of items in the cart, across all lines. If there are no lines, then the value is 0.

  ```ts
  number
  ```

#### CartUserError



#### MetafieldsSetUserError



#### MetafieldDeleteUserError



#### CartWarning



Examples

#### Examples

* ####

  ##### JavaScript

  ```js
  import {cartSelectedDeliveryOptionsUpdateDefault} from '@shopify/hydrogen';

  const cartDeliveryOption = cartSelectedDeliveryOptionsUpdateDefault({
    storefront,
    getCartId,
  });

  const result = await cartDeliveryOption([
    {
      deliveryGroupId: '123',
      deliveryOptionHandle: 'Canada Post',
    },
  ]);
  ```

***

---



<a id="latest-utilities-cart-cartsetiddefault"></a>


## cartSetIdDefault

Creates a function that returns a header with a Set-Cookie on the cart ID.

### cart​Set​Id​Default(**[cookieOptions](#cartsetiddefault-propertydetail-cookieoptions)**​)

#### Parameters

* **cookieOptions**

  **CookieOptions**

#### CookieOptions

* domain

  ```ts
  string
  ```

* expires

  ```ts
  Date | number | string
  ```

* httponly

  ```ts
  boolean
  ```

* maxage

  ```ts
  number
  ```

* path

  ```ts
  string
  ```

* samesite

  ```ts
  'Lax' | 'Strict' | 'None'
  ```

* secure

  ```ts
  boolean
  ```

Examples

#### Examples

* ####

  ##### JavaScript

  ```js
  import {data} from 'react-router';
  import {cartGetIdDefault, cartSetIdDefault} from '@shopify/hydrogen';

  // server.js
  export default {
    async fetch(request) {
      const cart = createCartHandler({
        storefront,
        getCartId: cartGetIdDefault(request.headers),
        setCartId: cartSetIdDefault(), // defaults to session cookie
        // setCartId: cartSetIdDefault({maxage: 60 * 60 * 24 * 365}), // 1 year expiry
      });
    },
  };

  // Some route
  export async function action({context}) {
    const {cart} = context;

    // Usage
    const result = await cart.updateNote('Some note');

    const headers = cart.setCartId(result.cart.id);

    return data(result, {headers});
  }
  ```

***

---



<a id="latest-utilities-cart-createcarthandler"></a>


## createCartHandler

Creates an API that can be used to interact with the cart.

##### createCartHandler(options)

* **getCartId**

  **() => string**

  **required**

  A function that returns the cart id in the form of `gid://shopify/Cart/c1-123`.

* **setCartId**

  **(cartId: string) => Headers**

  **required**

  A function that sets the cart ID.

* **storefront**

  **Storefront**

  **required**

  The storefront client instance created by [`createStorefrontClient`](docs/api/hydrogen/utilities/createstorefrontclient).

* **buyerIdentity**

  **CartBuyerIdentityInput**

  Buyer identity. Default buyer identity is passed to cartCreate.

* **cartMutateFragment**

  **string**

  The cart mutation fragment used in most mutation requests, except for `setMetafields` and `deleteMetafield`. See the [example usage](https://shopify.dev/docs/api/hydrogen/utilities/createcarthandler#example-cart-fragments) in the documentation.

* **cartQueryFragment**

  **string**

  The cart query fragment used by `cart.get()`. See the [example usage](https://shopify.dev/docs/api/hydrogen/utilities/createcarthandler#example-cart-fragments) in the documentation.

* **customMethods**

  **TCustomMethods**

  Define custom methods or override existing methods for your cart API instance. See the [example usage](https://shopify.dev/docs/api/hydrogen/utilities/createcarthandler#example-custom-methods) in the documentation.

#### CartBuyerIdentityInput



#### Headers



#### Storefront

Interface to interact with the Storefront API.

* cache

  ```ts
  Cache
  ```

* CacheCustom

  ```ts
  (overrideOptions: AllCacheOptions) => AllCacheOptions
  ```

* CacheLong

  ```ts
  (overrideOptions?: AllCacheOptions) => AllCacheOptions
  ```

* CacheNone

  ```ts
  () => NoStoreStrategy
  ```

* CacheShort

  ```ts
  (overrideOptions?: AllCacheOptions) => AllCacheOptions
  ```

* forward

  Forwards the request to the Storefront API. It reads the API version from the request URL.

  ```ts
  (request: Request, options?: Pick<StorefrontCommonExtraParams, "storefrontApiVersion">) => Promise<Response>
  ```

* forwardMcp

  Forwards the request to the Storefront MCP endpoint.

  ```ts
  (request: Request) => Promise<Response>
  ```

* generateCacheControlHeader

  ```ts
  (cacheOptions: AllCacheOptions) => string
  ```

* getApiUrl

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "storefrontApiVersion" | "storeDomain">>) => string
  ```

* getHeaders

  ```ts
  () => Record<string, string>
  ```

* getPrivateTokenHeaders

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "contentType">> & Pick<StorefrontClientProps, "privateStorefrontToken"> & { buyerIp?: string; }) => Record<string, string>
  ```

* getPublicTokenHeaders

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "contentType">> & Pick<StorefrontClientProps, "publicStorefrontToken">) => Record<string, string>
  ```

* getShopifyDomain

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "storeDomain">>) => string
  ```

* i18n

  ```ts
  TI18n
  ```

* isMcpUrl

  Checks if the request URL matches the Storefront MCP endpoint.

  ```ts
  (request: { url?: string; }) => boolean
  ```

* isStorefrontApiUrl

  Checks if the request URL matches the Storefront API GraphQL endpoint.

  ```ts
  (request: { url?: string; }) => boolean
  ```

* mutate

  ```ts
  <
      OverrideReturnType extends any = never,
      RawGqlString extends string = string,
    >(
      mutation: RawGqlString,
      ...options: ClientVariablesInRestParams<
        StorefrontMutations,
        RawGqlString,
        StorefrontCommonExtraParams,
        AutoAddedVariableNames
      >
    ) => Promise<
      ClientReturn<StorefrontMutations, RawGqlString, OverrideReturnType> &
        StorefrontError
    >
  ```

* query

  ```ts
  <
      OverrideReturnType extends any = never,
      RawGqlString extends string = string,
    >(
      query: RawGqlString,
      ...options: ClientVariablesInRestParams<
        StorefrontQueries,
        RawGqlString,
        StorefrontCommonExtraParams & Pick<StorefrontQueryOptions, 'cache'>,
        AutoAddedVariableNames
      >
    ) => Promise<
      ClientReturn<StorefrontQueries, RawGqlString, OverrideReturnType> &
        StorefrontError
    >
  ```

* setCollectedSubrequestHeaders

  Sets the collected subrequest headers in the response. Useful to forward the cookies and server-timing headers from server subrequests to the browser.

  ```ts
  (response: { headers: Headers; }) => void
  ```

#### AllCacheOptions

Override options for a cache strategy.

* maxAge

  The maximum amount of time in seconds that a resource will be considered fresh. See \`max-age\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#:\~:text=Response%20Directives-,max%2Dage,-The%20max%2Dage).

  ```ts
  number
  ```

* mode

  The caching mode, generally \`public\`, \`private\`, or \`no-store\`.

  ```ts
  string
  ```

* sMaxAge

  Similar to \`maxAge\` but specific to shared caches. See \`s-maxage\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#s-maxage).

  ```ts
  number
  ```

* staleIfError

  Indicate that the cache should serve the stale response if an error occurs while revalidating the cache. See \`stale-if-error\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-if-error).

  ```ts
  number
  ```

* staleWhileRevalidate

  Indicate that the cache should serve the stale response in the background while revalidating the cache. See \`stale-while-revalidate\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-while-revalidate).

  ```ts
  number
  ```

#### NoStoreStrategy

* mode

  ```ts
  string
  ```

#### StorefrontCommonExtraParams

* displayName

  ```ts
  string
  ```

* headers

  ```ts
  HeadersInit
  ```

* storefrontApiVersion

  ```ts
  string
  ```

#### StorefrontClientProps

* contentType

  Customizes which \`"content-type"\` header is added when using \`getPrivateTokenHeaders()\` and \`getPublicTokenHeaders()\`. When fetching with a \`JSON.stringify()\`-ed \`body\`, use \`"json"\`. When fetching with a \`body\` that is a plain string, use \`"graphql"\`. Defaults to \`"json"\` Can also be customized on a call-by-call basis by passing in \`'contentType'\` to both \`getPrivateTokenHeaders({...})\` and \`getPublicTokenHeaders({...})\`, for example: \`getPublicTokenHeaders({contentType: 'graphql'})\`

  ```ts
  'json' | 'graphql'
  ```

* privateStorefrontToken

  The Storefront API delegate access token. Refer to the \[authentication]\(https://shopify.dev/api/storefront#authentication) and \[delegate access token]\(https://shopify.dev/apps/auth/oauth/delegate-access-tokens) documentation for more details.

  ```ts
  string
  ```

* publicStorefrontToken

  The Storefront API access token. Refer to the \[authentication]\(https://shopify.dev/api/storefront#authentication) documentation for more details.

  ```ts
  string
  ```

* storeDomain

  The host name of the domain (eg: \`{shop}.myshopify.com\`).

  ```ts
  string
  ```

* storefrontApiVersion

  The Storefront API version. This should almost always be the same as the version Hydrogen React was built for. Learn more about Shopify \[API versioning]\(https://shopify.dev/api/usage/versioning) for more details.

  ```ts
  string
  ```

#### StorefrontMutations

Maps all the mutations found in the project to variables and return types.



#### AutoAddedVariableNames

```ts
'country' | 'language'
```

#### StorefrontError

* errors

  ```ts
  StorefrontApiErrors
  ```

#### StorefrontApiErrors

```ts
JsonGraphQLError[] | undefined
```

#### JsonGraphQLError

* extensions

  Reserved for implementors to extend the protocol however they see fit, and hence there are no additional restrictions on its contents.

  ```ts
  { [key: string]: unknown; }
  ```

* locations

  If an error can be associated to a particular point in the requested GraphQL document, it should contain a list of locations.

  ```ts
  { line: number; column: number; }[]
  ```

* message

  ```ts
  string
  ```

* name

  ```ts
  string
  ```

* path

  If an error can be associated to a particular field in the GraphQL result, it \_must\_ contain an entry with the key \`path\` that details the path of the response field which experienced the error. This allows clients to identify whether a null result is intentional or caused by a runtime error.

  ```ts
  (string | number)[]
  ```

* stack

  ```ts
  string
  ```

#### StorefrontQueries

Maps all the queries found in the project to variables and return types.



#### StorefrontQueryOptions

```ts
StorefrontCommonExtraParams & {
  query: string;
  mutation?: never;
  cache?: CachingStrategy;
}
```

#### CachingStrategy

Use the \`CachingStrategy\` to define a custom caching mechanism for your data. Or use one of the pre-defined caching strategies: CacheNone, CacheShort, CacheLong.

* maxAge

  The maximum amount of time in seconds that a resource will be considered fresh. See \`max-age\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#:\~:text=Response%20Directives-,max%2Dage,-The%20max%2Dage).

  ```ts
  number
  ```

* mode

  The caching mode, generally \`public\`, \`private\`, or \`no-store\`.

  ```ts
  string
  ```

* sMaxAge

  Similar to \`maxAge\` but specific to shared caches. See \`s-maxage\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#s-maxage).

  ```ts
  number
  ```

* staleIfError

  Indicate that the cache should serve the stale response if an error occurs while revalidating the cache. See \`stale-if-error\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-if-error).

  ```ts
  number
  ```

* staleWhileRevalidate

  Indicate that the cache should serve the stale response in the background while revalidating the cache. See \`stale-while-revalidate\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-while-revalidate).

  ```ts
  number
  ```

##### Returns

The handler returns the following default methods. Any [custom](https://shopify.dev/docs/api/hydrogen/utilities/createcarthandler#example-custom-methods) or overwritten methods will also be available in the returned cart instance.

* **addDeliveryAddresses**

  **CartDeliveryAddressesAddFunction**

  Adds a delivery address to the cart.

* **addGiftCardCodes**

  **CartGiftCardCodesAddFunction**

  Adds gift card codes to the cart without replacing existing ones.

* **addLines**

  **CartLinesAddFunction**

  Adds items to the cart. If the cart doesn't exist, a new one will be created.

* **create**

  **CartCreateFunction**

  Creates a new cart.

* **deleteMetafield**

  **CartMetafieldDeleteFunction**

  Removes a custom field (metafield) from the cart.

* **get**

  **CartGetFunction**

  Retrieves the cart information.

* **getCartId**

  **() => string**

  Retrieves the unique identifier of the cart. By default, it gets the ID from the request cookie.

* **removeDeliveryAddresses**

  **CartDeliveryAddressesRemoveFunction**

  Removes a delivery address from the cart

* **removeGiftCardCodes**

  **CartGiftCardCodesRemoveFunction**

  Removes gift card codes from the cart.

* **removeLines**

  **CartLinesRemoveFunction**

  Removes items from the cart.

* **replaceDeliveryAddresses**

  **CartDeliveryAddressesReplaceFunction**

  Replace all delivery addresses on the cart.

* **setCartId**

  **(cartId: string) => Headers**

  Sets the unique identifier of the cart. By default, it sets the ID in the header cookie.

* **setMetafields**

  **CartMetafieldsSetFunction**

  Adds extra information (metafields) to the cart. If the cart doesn't exist, a new one will be created.

* **updateAttributes**

  **CartAttributesUpdateFunction**

  Updates additional information (attributes) in the cart.

* **updateBuyerIdentity**

  **CartBuyerIdentityUpdateFunction**

  Updates the buyer's information in the cart. If the cart doesn't exist, a new one will be created.

* **updateDeliveryAddresses**

  **CartDeliveryAddressesUpdateFunction**

  Update cart delivery addresses.

* **updateDiscountCodes**

  **CartDiscountCodesUpdateFunction**

  Updates discount codes in the cart.

* **updateGiftCardCodes**

  **CartGiftCardCodesUpdateFunction**

  Updates gift card codes in the cart.

* **updateLines**

  **CartLinesUpdateFunction**

  Updates items in the cart.

* **updateNote**

  **CartNoteUpdateFunction**

  Updates the note in the cart. If the cart doesn't exist, a new one will be created.

* **updateSelectedDeliveryOption**

  **CartSelectedDeliveryOptionsUpdateFunction**

  Updates the selected delivery options in the cart. Only available for carts associated with a customer access token.

#### CartDeliveryAddressesAddFunction

* addresses

  ```ts
  CartSelectableAddressInput[]
  ```

* optionalParams

  ```ts
  CartOptionalInput
  ```

returns

```ts
Promise<CartQueryDataReturn>
```

#### CartOptionalInput

* cartId

  The cart id.

  ```ts
  string
  ```

* country

  The country code.

  ```ts
  CountryCode
  ```

* language

  The language code.

  ```ts
  LanguageCode
  ```

* visitorConsent

  Visitor consent preferences for the Storefront API's

  ```ts
  VisitorConsent
  ```

#### VisitorConsent

* analytics

  ```ts
  ConsentStatus
  ```

* marketing

  ```ts
  ConsentStatus
  ```

* preferences

  ```ts
  ConsentStatus
  ```

* sale\_of\_data

  ```ts
  ConsentStatus
  ```

#### ConsentStatus

```ts
boolean | undefined
```

#### CartQueryDataReturn

```ts
CartQueryData & {
  errors?: StorefrontApiErrors;
}
```

#### CartQueryData

* cart

  ```ts
  Cart
  ```

* userErrors

  ```ts
  | CartUserError[]
      | MetafieldsSetUserError[]
      | MetafieldDeleteUserError[]
  ```

* warnings

  ```ts
  CartWarning[]
  ```

#### Cart

* attributes

  The cart's attributes.

  ```ts
  { __typename?: "Attribute"; key?: string; value?: string; }[]
  ```

* buyerIdentity

  The cart's buyer identity.

  ```ts
  CartType['buyerIdentity']
  ```

* checkoutUrl

  The checkout URL for the cart, if the cart has been created in the Storefront API.

  ```ts
  string
  ```

* cost

  The cost for the cart, including the subtotal, total, taxes, and duties.

  ```ts
  CartType['cost']
  ```

* discountCodes

  The discount codes applied to the cart.

  ```ts
  { __typename?: "CartDiscountCode"; applicable?: boolean; code?: string; }[]
  ```

* id

  The cart's ID if it has been created through the Storefront API.

  ```ts
  string
  ```

* lines

  The cart lines.

  ```ts
  Array<CartLine | ComponentizableCartLine>
  ```

* note

  The cart's note.

  ```ts
  string
  ```

* totalQuantity

  The total number of items in the cart, across all lines. If there are no lines, then the value is 0.

  ```ts
  number
  ```

#### CartUserError



#### MetafieldsSetUserError



#### MetafieldDeleteUserError



#### CartWarning



#### CartGiftCardCodesAddFunction

* giftCardCodes

  ```ts
  string[]
  ```

* optionalParams

  ```ts
  CartOptionalInput
  ```

returns

```ts
Promise<CartQueryDataReturn>
```

#### CartLinesAddFunction

* lines

  ```ts
  CartLineInput[]
  ```

* optionalParams

  ```ts
  CartOptionalInput
  ```

returns

```ts
Promise<CartQueryDataReturn>
```

#### CartLineInput



#### CartCreateFunction

* input

  ```ts
  CartInput
  ```

* optionalParams

  ```ts
  CartOptionalInput
  ```

returns

```ts
Promise<CartQueryDataReturn>
```

#### CartInput



#### CartMetafieldDeleteFunction

* key

  ```ts
  string
  ```

* optionalParams

  ```ts
  CartOptionalInput
  ```

returns

```ts
Promise<CartQueryDataReturn>
```

#### CartGetFunction

* cartInput

  ```ts
  CartGetProps
  ```

returns

```ts
Promise<CartReturn | null>
```

#### CartGetProps

* cartId

  The cart ID.

  ```ts
  string
  ```

* country

  The country code.

  ```ts
  CountryCode
  ```

* language

  The language code.

  ```ts
  LanguageCode
  ```

* numCartLines

  The number of cart lines to be returned.

  ```ts
  number
  ```

* visitorConsent

  Visitor consent preferences for the Storefront API's

  ```ts
  VisitorConsent
  ```

#### CartReturn

```ts
Cart & {
  errors?: StorefrontApiErrors;
}
```

#### CartDeliveryAddressesRemoveFunction

* addressIds

  ```ts
  string[]
  ```

* optionalParams

  ```ts
  CartOptionalInput
  ```

returns

```ts
Promise<CartQueryDataReturn>
```

#### CartGiftCardCodesRemoveFunction

* appliedGiftCardIds

  ```ts
  string[]
  ```

* optionalParams

  ```ts
  CartOptionalInput
  ```

returns

```ts
Promise<CartQueryDataReturn>
```

#### CartLinesRemoveFunction

* lineIds

  ```ts
  string[]
  ```

* optionalParams

  ```ts
  CartOptionalInput
  ```

returns

```ts
Promise<CartQueryDataReturn>
```

#### CartDeliveryAddressesReplaceFunction

* addresses

  ```ts
  CartSelectableAddressInput[]
  ```

* optionalParams

  ```ts
  CartOptionalInput
  ```

returns

```ts
Promise<CartQueryDataReturn>
```

#### CartMetafieldsSetFunction

* metafields

  ```ts
  MetafieldWithoutOwnerId[]
  ```

* optionalParams

  ```ts
  CartOptionalInput
  ```

returns

```ts
Promise<CartQueryDataReturn>
```

#### MetafieldWithoutOwnerId



#### CartAttributesUpdateFunction

* attributes

  ```ts
  AttributeInput[]
  ```

* optionalParams

  ```ts
  CartOptionalInput
  ```

returns

```ts
Promise<CartQueryDataReturn>
```

#### AttributeInput



#### CartBuyerIdentityUpdateFunction

* buyerIdentity

  ```ts
  CartBuyerIdentityInput
  ```

* optionalParams

  ```ts
  CartOptionalInput
  ```

returns

```ts
Promise<CartQueryDataReturn>
```

#### CartDeliveryAddressesUpdateFunction

* addresses

  ```ts
  CartSelectableAddressUpdateInput[]
  ```

* optionalParams

  ```ts
  CartOptionalInput
  ```

returns

```ts
Promise<CartQueryDataReturn>
```

#### CartDiscountCodesUpdateFunction

* discountCodes

  ```ts
  string[]
  ```

* optionalParams

  ```ts
  CartOptionalInput
  ```

returns

```ts
Promise<CartQueryDataReturn>
```

#### CartGiftCardCodesUpdateFunction

* giftCardCodes

  ```ts
  string[]
  ```

* optionalParams

  ```ts
  CartOptionalInput
  ```

returns

```ts
Promise<CartQueryDataReturn>
```

#### CartLinesUpdateFunction

* lines

  ```ts
  CartLineUpdateInput[]
  ```

* optionalParams

  ```ts
  CartOptionalInput
  ```

returns

```ts
Promise<CartQueryDataReturn>
```

#### CartLineUpdateInput



#### CartNoteUpdateFunction

* note

  ```ts
  string
  ```

* optionalParams

  ```ts
  CartOptionalInput
  ```

returns

```ts
Promise<CartQueryDataReturn>
```

#### CartSelectedDeliveryOptionsUpdateFunction

* selectedDeliveryOptions

  ```ts
  CartSelectedDeliveryOptionInput[]
  ```

* optionalParams

  ```ts
  CartOptionalInput
  ```

returns

```ts
Promise<CartQueryDataReturn>
```

#### CartSelectedDeliveryOptionInput



Examples

#### Examples

* #### Server.(js|ts)

  ##### JavaScript

  ```js
  import {
    createStorefrontClient,
    createCartHandler,
    cartGetIdDefault,
    cartSetIdDefault,
    createRequestHandler,
  } from '@shopify/hydrogen';
  import * as reactRouterBuild from 'virtual:react-router/server-build';

  export default {
    async fetch(request, env, executionContext) {
      const {storefront} = createStorefrontClient({
        /* client parameters */
      });

      // Create a cart api instance.
      const cart = createCartHandler({
        storefront,
        getCartId: cartGetIdDefault(request.headers),
        setCartId: cartSetIdDefault(),
      });

      const handleRequest = createRequestHandler({
        build: reactRouterBuild,
        mode: process.env.NODE_ENV,
        getLoadContext: () => ({
          storefront,
          cart, // Pass the cart api instance to the loader context.
        }),
      });

      return await handleRequest(request);
    },
  };
  ```

  ##### TypeScript

  ```ts
  import {
    createStorefrontClient,
    createCartHandler,
    cartGetIdDefault,
    cartSetIdDefault,
    createRequestHandler,
  } from '@shopify/hydrogen';
  import * as reactRouterBuild from 'virtual:react-router/server-build';

  export default {
    async fetch(
      request: Request,
      env: Record<string, string>,
      executionContext: ExecutionContext,
    ): Promise<Response> {
      const {storefront} = createStorefrontClient({
        /* client parameters */
      });

      // Create a cart api instance.
      const cart = createCartHandler({
        storefront,
        getCartId: cartGetIdDefault(request.headers),
        setCartId: cartSetIdDefault(),
      });

      const handleRequest = createRequestHandler({
        build: reactRouterBuild,
        mode: process.env.NODE_ENV,
        getLoadContext: () => ({
          storefront,
          cart, // Pass the cart api instance to the loader context.
        }),
      });

      return await handleRequest(request);
    },
  };
  ```

***

---



<a id="latest-utilities-createcontentsecuritypolicy"></a>


## createContentSecurityPolicy

Create a [content security policy](https://shopify.dev/docs/custom-storefronts/hydrogen/content-security-policy) to secure your application. The default content security policy includes exclusions for cdn.shopify.com and a script nonce.

### create​Content​Security​Policy(**[props](#props-propertydetail-props)**​)

#### Parameters

* **props**

  **CreateContentSecurityPolicy & ShopProp**

#### Returns

* **ContentSecurityPolicy**

#### CreateContentSecurityPolicy

* baseUri

  ```ts
  DirectiveValues
  ```

* blockAllMixedContent

  ```ts
  boolean
  ```

* childSrc

  ```ts
  DirectiveValues
  ```

* connectSrc

  ```ts
  DirectiveValues
  ```

* defaultSrc

  ```ts
  DirectiveValues
  ```

* fontSrc

  ```ts
  DirectiveValues
  ```

* formAction

  ```ts
  DirectiveValues
  ```

* frameAncestors

  ```ts
  DirectiveValues
  ```

* frameSrc

  ```ts
  DirectiveValues
  ```

* imgSrc

  ```ts
  DirectiveValues
  ```

* manifestSrc

  ```ts
  DirectiveValues
  ```

* mediaSrc

  ```ts
  DirectiveValues
  ```

* navigateTo

  ```ts
  DirectiveValues
  ```

* objectSrc

  ```ts
  DirectiveValues
  ```

* pluginTypes

  ```ts
  DirectiveValues
  ```

* prefetchSrc

  ```ts
  DirectiveValues
  ```

* reportTo

  ```ts
  DirectiveValues
  ```

* reportUri

  ```ts
  DirectiveValues
  ```

* sandbox

  ```ts
  DirectiveValues
  ```

* scriptSrc

  ```ts
  DirectiveValues
  ```

* scriptSrcElem

  ```ts
  DirectiveValues
  ```

* styleSrc

  ```ts
  DirectiveValues
  ```

* upgradeInsecureRequests

  ```ts
  boolean
  ```

* workerSrc

  ```ts
  DirectiveValues
  ```

#### DirectiveValues

```ts
string[] | string | boolean
```

#### ShopProp

* shop

  Shop specific configurations

  ```ts
  ShopifyDomains
  ```

#### ShopifyDomains

* checkoutDomain

  The production shop checkout domain url.

  ```ts
  string
  ```

* storeDomain

  The production shop domain url.

  ```ts
  string
  ```

#### ContentSecurityPolicy

* header

  The content security policy header

  ```ts
  string
  ```

* nonce

  A randomly generated nonce string that should be passed to any custom \`script\` element

  ```ts
  string
  ```

* NonceProvider

  ```ts
  ComponentType<{children: ReactNode}>
  ```

Examples

#### Examples

* #### Example code

  ##### JavaScript

  ```jsx
  import {ServerRouter} from 'react-router';
  import {isbot} from 'isbot';
  import {renderToReadableStream} from 'react-dom/server';
  import {createContentSecurityPolicy} from '@shopify/hydrogen';

  export default async function handleRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext,
  ) {
    const {nonce, header, NonceProvider} = createContentSecurityPolicy({
      // pass a custom directive to load content from a third party domain
      styleSrc: [
        "'self'",
        'https://cdn.shopify.com',
        'https://some-custom-css.cdn',
      ],
    });
    const body = await renderToReadableStream(
      <NonceProvider>
        <ServerRouter context={remixContext} url={request.url} nonce={nonce} />
      </NonceProvider>,
      {
        nonce,
        signal: request.signal,
        onError(error) {
          // eslint-disable-next-line no-console
          console.error(error);
          responseStatusCode = 500;
        },
      },
    );

    if (isbot(request.headers.get('user-agent'))) {
      await body.allReady;
    }

    responseHeaders.set('Content-Type', 'text/html');
    responseHeaders.set('Content-Security-Policy', header);

    return new Response(body, {
      headers: responseHeaders,
      status: responseStatusCode,
    });
  }
  ```

  ##### TypeScript

  ```tsx
  import type {EntryContext} from 'react-router';
  import {ServerRouter} from 'react-router';
  import {isbot} from 'isbot';
  import {renderToReadableStream} from 'react-dom/server';
  import {createContentSecurityPolicy} from '@shopify/hydrogen';

  export default async function handleRequest(
    request: Request,
    responseStatusCode: number,
    responseHeaders: Headers,
    remixContext: EntryContext,
  ) {
    const {nonce, header, NonceProvider} = createContentSecurityPolicy({
      // pass a custom directive to load content from a third party domain
      styleSrc: [
        "'self'",
        'https://cdn.shopify.com',
        'https://some-custom-css.cdn',
      ],
    });
    const body = await renderToReadableStream(
      <NonceProvider>
        <ServerRouter context={remixContext} url={request.url} nonce={nonce} />
      </NonceProvider>,
      {
        nonce,
        signal: request.signal,
        onError(error) {
          // eslint-disable-next-line no-console
          console.error(error);
          responseStatusCode = 500;
        },
      },
    );

    if (isbot(request.headers.get('user-agent'))) {
      await body.allReady;
    }

    responseHeaders.set('Content-Type', 'text/html');
    responseHeaders.set('Content-Security-Policy', header);

    return new Response(body, {
      headers: responseHeaders,
      status: responseStatusCode,
    });
  }
  ```

***

### Related

[- useNonce](https://shopify.dev/docs/api/hydrogen/2026-04/hooks/usenonce)

[- Script](https://shopify.dev/docs/api/hydrogen/2026-04/components/script)

***

---



<a id="latest-utilities-createcustomeraccountclient"></a>


## createCustomerAccountClient

The `createCustomerAccountClient` function creates a GraphQL client for querying the [Customer Account API](https://shopify.dev/docs/api/customer). It also provides methods to authenticate and check if the user is logged in.

##### createCustomerAccountClient(options)

* **customerAccountId**

  **string**

  **required**

  Unique UUID prefixed with `shp_` associated with the application, this should be visible in the customer account api settings in the Hydrogen admin channel. Mock.shop doesn't automatically supply customerAccountId. Use `npx shopify hydrogen env pull` to link your store credentials.

* **request**

  **CrossRuntimeRequest**

  **required**

  The object for the current Request. It should be provided by your platform.

* **session**

  **HydrogenSession**

  **required**

  The client requires a session to persist the auth and refresh token. By default Hydrogen ships with cookie session storage, but you can use [another session storage](https://remix.run/docs/en/main/utils/sessions) implementation.

* **shopId**

  **string**

  **required**

  The shop id. Mock.shop doesn't automatically supply shopId. Use `npx shopify hydrogen env pull` to link your store credentials

* **authorizePath**

  **string**

  The oauth authorize path. Defaults to `/account/authorize`.

* **authUrl**

  **string**

  This is the route in your app that authorizes the customer after logging in. Make sure to call `customer.authorize()` within the loader on this route. It defaults to `/account/authorize`.

* **customAuthStatusHandler**

  **() => DataFunctionValue**

  Use this method to overwrite the default logged-out redirect behavior. The default handler [throws a redirect](https://remix.run/docs/en/main/utils/redirect#:~:text=!session) to `/account/login` with current path as `return_to` query param.

* **customerApiVersion**

  **string**

  Override the version of the API

* **defaultRedirectPath**

  **string**

  The path to redirect to after login. Defaults to `/account`.

* **language**

  **LanguageCode**

  Localization data.

* **logErrors**

  **boolean | ((error?: Error) => boolean)**

  Whether it should print GraphQL errors automatically. Defaults to true

* **loginPath**

  **string**

  The path to login. Defaults to `/account/login`.

* **unstableB2b**

  **boolean**

  Deprecated. `unstableB2b` is now stable. Please remove.

* **useCustomAuthDomain**

  **boolean**

  Set to true when using a custom HTTPS domain (e.g., ngrok, local proxy) instead of the default Hydrogen tunnel for local development. You must manually register your redirect\_uri in Customer Account API settings.

* **waitUntil**

  **WaitUntil**

  The waitUntil function is used to keep the current request/response lifecycle alive even after a response has been sent. It should be provided by your platform.

#### DataFunctionValue

```ts
Response | NonNullable<unknown> | null
```

#### CrossRuntimeRequest

* headers

  ```ts
  {
      get?: (key: string) => string | null | undefined;
      [key: string]: any;
    }
  ```

* method

  ```ts
  string
  ```

* url

  ```ts
  string
  ```

##### Returns

* **authorize**

  **() => Promise\<Response>**

  On successful login, the customer redirects back to your app. This function validates the OAuth response and exchanges the authorization code for an access token and refresh token. It also persists the tokens on your session. This function should be called and returned from the Remix loader configured as the redirect URI within the Customer Account API settings in admin.

* **getAccessToken**

  **() => Promise\<string>**

  Returns CustomerAccessToken if the customer is logged in. It also run a expiry check and does a token refresh if needed.

* **getApiUrl**

  **() => string**

  Creates the fully-qualified URL to your store's GraphQL endpoint.

* **handleAuthStatus**

  **() => Promise\<void>**

  Check for a not logged in customer and redirect customer to login page. The redirect can be overwritten with `customAuthStatusHandler` option.

* **isLoggedIn**

  **() => Promise\<boolean>**

  Returns if the customer is logged in. It also checks if the access token is expired and refreshes it if needed.

* **login**

  **(options?: LoginOptions) => Promise\<Response>**

  Start the OAuth login flow. This function should be called and returned from a Remix action. It redirects the customer to a Shopify login domain. It also defined the final path the customer lands on at the end of the oAuth flow with the value of the `return_to` query param. (This is automatically setup unless `customAuthStatusHandler` option is in use)

* **logout**

  **(options?: LogoutOptions) => Promise\<Response>**

  Logout the customer by clearing the session and redirecting to the login domain. It should be called and returned from a Remix action. The path app should redirect to after logout can be setup in Customer Account API settings in admin.

* **mutate**

  **\<TData = any>( mutation: string, options: CustomerAccountQueryOptionsForDocs, ) => Promise\<TData>**

  Execute a GraphQL mutation against the Customer Account API. This method execute `handleAuthStatus()` ahead of mutation.

* **query**

  **\<TData = any>( query: string, options: CustomerAccountQueryOptionsForDocs, ) => Promise\<TData>**

  Execute a GraphQL query against the Customer Account API. This method execute `handleAuthStatus()` ahead of query.

#### LoginOptions

* acrValues

  ```ts
  string
  ```

* countryCode

  ```ts
  CountryCode
  ```

* locale

  ```ts
  string
  ```

* loginHint

  ```ts
  string
  ```

* loginHintMode

  ```ts
  string
  ```

* uiLocales

  ```ts
  LanguageCode
  ```

#### LogoutOptions

* headers

  Add custom headers to the logout redirect.

  ```ts
  HeadersInit
  ```

* keepSession

  If true, custom data in the session will not be cleared on logout.

  ```ts
  boolean
  ```

* postLogoutRedirectUri

  The url to redirect customer to after logout, should be a relative URL. This url will need to included in Customer Account API's application setup for logout URI. The default value is current app origin, which is automatically setup in admin when using \`--customer-account-push\` flag with dev.

  ```ts
  string
  ```

#### CustomerAccountQueryOptionsForDocs

* variables

  The variables for the GraphQL statement.

  ```ts
  Record<string, unknown>
  ```

Examples

#### Examples

* #### Example code

  ##### JavaScript

  ```jsx
  import {
    createCustomerAccountClient,
    createRequestHandler,
  } from '@shopify/hydrogen';
  import {createCookieSessionStorage} from 'react-router';
  import * as reactRouterBuild from 'virtual:react-router/server-build';

  export default {
    async fetch(request, env, executionContext) {
      const session = await AppSession.init(request, [env.SESSION_SECRET]);

      /* Create a Customer API client with your credentials and options */
      const customerAccount = createCustomerAccountClient({
        /* Runtime utility in serverless environments */
        waitUntil: (p) => executionContext.waitUntil(p),
        /* Public Customer Account API token for your store */
        customerAccountId: env.PUBLIC_CUSTOMER_ACCOUNT_ID,
        /* Shop Id */
        shopId: env.SHOP_ID,
        request,
        session,
      });

      const handleRequest = createRequestHandler({
        build: reactRouterBuild,
        mode: process.env.NODE_ENV,
        /* Inject the customer account client in the Remix context */
        getLoadContext: () => ({customerAccount}),
      });

      const response = await handleRequest(request);

      if (session.isPending) {
        response.headers.set('Set-Cookie', await session.commit());
      }

      return response;
    },
  };

  class AppSession {
    isPending = false;

    static async init(request, secrets) {
      const storage = createCookieSessionStorage({
        cookie: {
          name: 'session',
          httpOnly: true,
          path: '/',
          sameSite: 'lax',
          secrets,
        },
      });

      const session = await storage.getSession(request.headers.get('Cookie'));

      return new this(storage, session);
    }

    get(key) {
      return this.session.get(key);
    }

    destroy() {
      return this.sessionStorage.destroySession(this.session);
    }

    flash(key, value) {
      this.session.flash(key, value);
    }

    unset(key) {
      this.isPending = true;
      this.session.unset(key);
    }

    set(key, value) {
      this.isPending = true;
      this.session.set(key, value);
    }

    commit() {
      this.isPending = false;
      return this.sessionStorage.commitSession(this.session);
    }
  }
  ```

  ##### TypeScript

  ```tsx
  import {
    createCustomerAccountClient,
    createRequestHandler,
    type HydrogenSession,
  } from '@shopify/hydrogen';
  import {
    createCookieSessionStorage,
    type SessionStorage,
    type Session,
  } from 'react-router';
  import * as reactRouterBuild from 'virtual:react-router/server-build';

  export default {
    async fetch(
      request: Request,
      env: Record<string, string>,
      executionContext: ExecutionContext,
    ) {
      const session = await AppSession.init(request, [env.SESSION_SECRET]);

      /* Create a Customer API client with your credentials and options */
      const customerAccount = createCustomerAccountClient({
        /* Runtime utility in serverless environments */
        waitUntil: (p) => executionContext.waitUntil(p),
        /* Public Customer Account API client ID for your store */
        customerAccountId: env.PUBLIC_CUSTOMER_ACCOUNT_ID,
        /* Shop Id */
        shopId: env.SHOP_ID,
        request,
        session,
      });

      const handleRequest = createRequestHandler({
        build: reactRouterBuild,
        mode: process.env.NODE_ENV,
        /* Inject the customer account client in the Remix context */
        getLoadContext: () => ({customerAccount}),
      });

      const response = await handleRequest(request);

      if (session.isPending) {
        response.headers.set('Set-Cookie', await session.commit());
      }

      return response;
    },
  };

  class AppSession implements HydrogenSession {
    public isPending = false;

    constructor(
      private sessionStorage: SessionStorage,
      private session: Session,
    ) {}

    static async init(request: Request, secrets: string[]) {
      const storage = createCookieSessionStorage({
        cookie: {
          name: 'session',
          httpOnly: true,
          path: '/',
          sameSite: 'lax',
          secrets,
        },
      });

      const session = await storage.getSession(request.headers.get('Cookie'));

      return new this(storage, session);
    }

    get(key: string) {
      return this.session.get(key);
    }

    destroy() {
      return this.sessionStorage.destroySession(this.session);
    }

    flash(key: string, value: any) {
      this.session.flash(key, value);
    }

    unset(key: string) {
      this.isPending = true;
      this.session.unset(key);
    }

    set(key: string, value: any) {
      this.isPending = true;
      this.session.set(key, value);
    }

    commit() {
      this.isPending = false;
      return this.sessionStorage.commitSession(this.session);
    }
  }
  ```

***

### Related

[- createStorefrontClient](https://shopify.dev/docs/api/hydrogen/2026-04/utilities/createstorefrontclient)

***

---



<a id="latest-utilities-createhydrogencontext"></a>


## createHydrogenContext

The `createHydrogenContext` function creates the context object required to use Hydrogen utilities throughout a Hydrogen project.

##### createHydrogenContext(options)

* **env**

  **TEnv**

  **required**

* **request**

  **CrossRuntimeRequest**

  **required**

* **session**

  **TSession**

  **required**

  Any cookie implementation. By default Hydrogen ships with cookie session storage, but you can use [another session storage](https://remix.run/docs/en/main/utils/sessions) implementation.

* **buyerIdentity**

  **CartBuyerIdentityInput**

  Buyer identity. Default buyer identity is passed to cartCreate.

* **cache**

  **Cache**

  An instance that implements the [Cache API](https://developer.mozilla.org/en-US/docs/Web/API/Cache)

* **cart**

  **{ getId?: () => string; setId?: (cartId: string) => Headers; queryFragment?: string; mutateFragment?: string; customMethods?: Record\<string, Function>; }**

  Cart handler overwrite options. See documentation for createCartHandler for more information.

* **customerAccount**

  **{ apiVersion?: string; authUrl?: string; customAuthStatusHandler?: () => {} | Response; unstableB2b?: boolean; useCustomAuthDomain?: boolean; }**

  Customer Account client overwrite options. See documentation for createCustomerAccountClient for more information.

* **i18n**

  **TI18n**

  An object containing a country code and language code

* **logErrors**

  **boolean | ((error?: Error) => boolean)**

  Whether it should print GraphQL errors automatically. Defaults to true

* **storefront**

  **{ headers?: StorefrontHeaders; apiVersion?: string; }**

  Storefront client overwrite options. See documentation for createStorefrontClient for more information.

* **waitUntil**

  **WaitUntil**

  The `waitUntil` function is used to keep the current request/response lifecycle alive even after a response has been sent. It should be provided by your platform.

#### CartBuyerIdentityInput



#### Headers



#### CrossRuntimeRequest

* headers

  ```ts
  {
      get?: (key: string) => string | null | undefined;
      [key: string]: any;
    }
  ```

* method

  ```ts
  string
  ```

* url

  ```ts
  string
  ```

Examples

#### Examples

* #### Example code

  ##### JavaScript

  ```jsx
  import {createHydrogenContext, createRequestHandler} from '@shopify/hydrogen';
  import * as reactRouterBuild from 'virtual:react-router/server-build';
  import {createCookieSessionStorage} from 'react-router';

  export default {
    async fetch(request, env, executionContext) {
      const waitUntil = executionContext.waitUntil.bind(executionContext);
      const [cache, session] = await Promise.all([
        caches.open('hydrogen'),
        AppSession.init(request, [env.SESSION_SECRET]),
      ]);

      /* Create context objects required to use Hydrogen with your credentials and options */
      const hydrogenContext = createHydrogenContext({
        /* Environment variables from the fetch function */
        env,
        /* Request object from the fetch function */
        request,
        /* Cache API instance */
        cache,
        /* Runtime utility in serverless environments */
        waitUntil,
        session,
      });

      const handleRequest = createRequestHandler({
        build: reactRouterBuild,
        mode: process.env.NODE_ENV,
        /* Inject the customer account client in the Remix context */
        getLoadContext: () => hydrogenContext,
      });

      const response = await handleRequest(request);

      if (session.isPending) {
        response.headers.set('Set-Cookie', await session.commit());
      }

      return response;
    },
  };

  class AppSession {
    isPending = false;

    static async init(request, secrets) {
      const storage = createCookieSessionStorage({
        cookie: {
          name: 'session',
          httpOnly: true,
          path: '/',
          sameSite: 'lax',
          secrets,
        },
      });

      const session = await storage.getSession(request.headers.get('Cookie'));

      return new this(storage, session);
    }

    get(key) {
      return this.session.get(key);
    }

    destroy() {
      return this.sessionStorage.destroySession(this.session);
    }

    flash(key, value) {
      this.session.flash(key, value);
    }

    unset(key) {
      this.isPending = true;
      this.session.unset(key);
    }

    set(key, value) {
      this.isPending = true;
      this.session.set(key, value);
    }

    commit() {
      this.isPending = false;
      return this.sessionStorage.commitSession(this.session);
    }
  }
  ```

  ##### TypeScript

  ```tsx
  import {
    createHydrogenContext,
    createRequestHandler,
    type HydrogenSession,
  } from '@shopify/hydrogen';
  import * as reactRouterBuild from 'virtual:react-router/server-build';
  import {
    createCookieSessionStorage,
    type SessionStorage,
    type Session,
  } from 'react-router';

  export default {
    async fetch(request: Request, env: Env, executionContext: ExecutionContext) {
      const waitUntil = executionContext.waitUntil.bind(executionContext);
      const [cache, session] = await Promise.all([
        caches.open('hydrogen'),
        AppSession.init(request, [env.SESSION_SECRET]),
      ]);

      /* Create context objects required to use Hydrogen with your credentials and options */
      const hydrogenContext = createHydrogenContext({
        /* Environment variables from the fetch function */
        env,
        /* Request object from the fetch function */
        request,
        /* Cache API instance */
        cache,
        /* Runtime utility in serverless environments */
        waitUntil,
        session,
      });

      const handleRequest = createRequestHandler({
        build: reactRouterBuild,
        mode: process.env.NODE_ENV,
        /* Inject the customer account client in the Remix context */
        getLoadContext: () => hydrogenContext,
      });

      const response = await handleRequest(request);

      if (session.isPending) {
        response.headers.set('Set-Cookie', await session.commit());
      }

      return response;
    },
  };

  class AppSession implements HydrogenSession {
    public isPending = false;

    constructor(
      private sessionStorage: SessionStorage,
      private session: Session,
    ) {}

    static async init(request: Request, secrets: string[]) {
      const storage = createCookieSessionStorage({
        cookie: {
          name: 'session',
          httpOnly: true,
          path: '/',
          sameSite: 'lax',
          secrets,
        },
      });

      const session = await storage.getSession(request.headers.get('Cookie'));

      return new this(storage, session);
    }

    get(key: string) {
      return this.session.get(key);
    }

    destroy() {
      return this.sessionStorage.destroySession(this.session);
    }

    flash(key: string, value: any) {
      this.session.flash(key, value);
    }

    unset(key: string) {
      this.isPending = true;
      this.session.unset(key);
    }

    set(key: string, value: any) {
      this.isPending = true;
      this.session.set(key, value);
    }

    commit() {
      this.isPending = false;
      return this.sessionStorage.commitSession(this.session);
    }
  }
  ```

***

### Related

[- createHydrogenContext](https://shopify.dev/docs/api/hydrogen/2026-04/utilities/createhydrogencontext)

***

---



<a id="latest-utilities-createrequesthandler"></a>


## createRequestHandler

Creates a request handler for Hydrogen apps. It wraps React Router's request handler and adds Hydrogen-specific functionality such as proxying Storefront API requests, collecting tracking information for analytics, and forwarding cookies to the browser.

##### createRequestHandler(options)

* **build**

  **ServerBuild**

  **required**

  React Router's server build

* **collectTrackingInformation**

  **boolean**

  **Default: true**

  Collect tracking information from subrequests such as cookies and forward them to the browser. Disable this if you are not using Hydrogen's built-in analytics.

* **getLoadContext**

  **(request: Request) => unknown**

  Function to provide the load context for each request. It must contain Hydrogen's storefront client instance for other Hydrogen utilities to work properly.

* **mode**

  **string**

  React Router's mode

* **poweredByHeader**

  **boolean**

  **Default: true**

  Whether to include the `powered-by` header in responses.

Examples

#### Examples

* #### Example code

  ##### JavaScript

  ```js
  import {createHydrogenContext, createRequestHandler} from '@shopify/hydrogen';
  import {createCookieSessionStorage} from 'react-router';
  import * as reactRouterBuild from 'virtual:react-router/server-build';

  export default {
    async fetch(request, env, executionContext) {
      const waitUntil = executionContext.waitUntil.bind(executionContext);
      const [cache, session] = await Promise.all([
        caches.open('hydrogen'),
        AppSession.init(request, [env.SESSION_SECRET]),
      ]);

      /* Create context objects required to use Hydrogen with your credentials and options */
      const hydrogenContext = createHydrogenContext({
        env,
        request,
        cache,
        waitUntil,
        session,
      });

      /**
       * Create a request handler with Hydrogen utilities.
       * This handler automatically proxies Storefront API requests
       * and collects tracking information for analytics.
       */
      const handleRequest = createRequestHandler({
        build: reactRouterBuild,
        mode: process.env.NODE_ENV,
        getLoadContext: () => hydrogenContext,
      });

      const response = await handleRequest(request);

      if (session.isPending) {
        response.headers.set('Set-Cookie', await session.commit());
      }

      return response;
    },
  };

  class AppSession {
    isPending = false;

    static async init(request, secrets) {
      const storage = createCookieSessionStorage({
        cookie: {
          name: 'session',
          httpOnly: true,
          path: '/',
          sameSite: 'lax',
          secrets,
        },
      });

      const session = await storage.getSession(request.headers.get('Cookie'));

      return new this(storage, session);
    }

    get(key) {
      return this.session.get(key);
    }

    destroy() {
      return this.sessionStorage.destroySession(this.session);
    }

    flash(key, value) {
      this.session.flash(key, value);
    }

    unset(key) {
      this.isPending = true;
      this.session.unset(key);
    }

    set(key, value) {
      this.isPending = true;
      this.session.set(key, value);
    }

    commit() {
      this.isPending = false;
      return this.sessionStorage.commitSession(this.session);
    }
  }
  ```

  ##### TypeScript

  ```ts
  import {
    createHydrogenContext,
    createRequestHandler,
    type HydrogenSession,
  } from '@shopify/hydrogen';
  import {
    createCookieSessionStorage,
    type SessionStorage,
    type Session,
  } from 'react-router';
  import * as reactRouterBuild from 'virtual:react-router/server-build';

  export default {
    async fetch(request: Request, env: Env, executionContext: ExecutionContext) {
      const waitUntil = executionContext.waitUntil.bind(executionContext);
      const [cache, session] = await Promise.all([
        caches.open('hydrogen'),
        AppSession.init(request, [env.SESSION_SECRET]),
      ]);

      /* Create context objects required to use Hydrogen with your credentials and options */
      const hydrogenContext = createHydrogenContext({
        env,
        request,
        cache,
        waitUntil,
        session,
      });

      /**
       * Create a request handler with Hydrogen utilities.
       * This handler automatically proxies Storefront API requests
       * and collects tracking information for analytics.
       */
      const handleRequest = createRequestHandler({
        build: reactRouterBuild,
        mode: process.env.NODE_ENV,
        getLoadContext: () => hydrogenContext,
      });

      const response = await handleRequest(request);

      if (session.isPending) {
        response.headers.set('Set-Cookie', await session.commit());
      }

      return response;
    },
  };

  class AppSession implements HydrogenSession {
    public isPending = false;

    constructor(
      private sessionStorage: SessionStorage,
      private session: Session,
    ) {}

    static async init(request: Request, secrets: string[]) {
      const storage = createCookieSessionStorage({
        cookie: {
          name: 'session',
          httpOnly: true,
          path: '/',
          sameSite: 'lax',
          secrets,
        },
      });

      const session = await storage.getSession(request.headers.get('Cookie'));

      return new this(storage, session);
    }

    get(key: string) {
      return this.session.get(key);
    }

    destroy() {
      return this.sessionStorage.destroySession(this.session);
    }

    flash(key: string, value: any) {
      this.session.flash(key, value);
    }

    unset(key: string) {
      this.isPending = true;
      this.session.unset(key);
    }

    set(key: string, value: any) {
      this.isPending = true;
      this.session.set(key, value);
    }

    commit() {
      this.isPending = false;
      return this.sessionStorage.commitSession(this.session);
    }
  }
  ```

***

### Related

[- createHydrogenContext](https://shopify.dev/docs/api/hydrogen/2026-04/utilities/createhydrogencontext)

[- createStorefrontClient](https://shopify.dev/docs/api/hydrogen/2026-04/utilities/createstorefrontclient)

***

---



<a id="latest-utilities-createstorefrontclient"></a>


## createStorefrontClient

This function extends `createStorefrontClient` from [Hydrogen React](https://shopify.dev/docs/api/hydrogen-react/utilities/createstorefrontclient). The additional arguments enable internationalization (i18n), caching, and other features particular to React Router and Oxygen.

The returned storefront client includes methods for proxying requests (`forward`, `isStorefrontApiUrl`) and collecting tracking information (`setCollectedSubrequestHeaders`).

Learn more about [data fetching in Hydrogen](https://shopify.dev/docs/custom-storefronts/hydrogen/data-fetching/fetch-data).

##### Parameters

**`HydrogenClientProps<TI18n> & StorefrontClientProps`**

#### HydrogenClientProps

* **cache**

  **Cache**

  An instance that implements the [Cache API](https://developer.mozilla.org/en-US/docs/Web/API/Cache)

* **i18n**

  **TI18n**

  An object containing a country code and language code

* **logErrors**

  **boolean | ((error?: Error) => boolean)**

  Whether it should print GraphQL errors automatically. Defaults to true

* **storefrontHeaders**

  **StorefrontHeaders**

  Storefront API headers. If on Oxygen, use `getStorefrontHeaders()`

* **storefrontId**

  **string**

  The globally unique identifier for the Shop

* **waitUntil**

  **WaitUntil**

  The `waitUntil` function is used to keep the current request/response lifecycle alive even after a response has been sent. It should be provided by your platform.

#### StorefrontClientProps

* **contentType**

  **'json' | 'graphql'**

  Customizes which `"content-type"` header is added when using `getPrivateTokenHeaders()` and `getPublicTokenHeaders()`. When fetching with a `JSON.stringify()`-ed `body`, use `"json"`. When fetching with a `body` that is a plain string, use `"graphql"`. Defaults to `"json"`

  Can also be customized on a call-by-call basis by passing in `'contentType'` to both `getPrivateTokenHeaders({...})` and `getPublicTokenHeaders({...})`, for example: `getPublicTokenHeaders({contentType: 'graphql'})`

* **privateStorefrontToken**

  **string**

  The Storefront API delegate access token. Refer to the [authentication](https://shopify.dev/api/storefront#authentication) and [delegate access token](https://shopify.dev/apps/auth/oauth/delegate-access-tokens) documentation for more details.

* **publicStorefrontToken**

  **string**

  The Storefront API access token. Refer to the [authentication](https://shopify.dev/api/storefront#authentication) documentation for more details.

* **storeDomain**

  **string**

  The host name of the domain (eg: `{shop}.myshopify.com`).

* **storefrontApiVersion**

  **string**

  The Storefront API version. This should almost always be the same as the version Hydrogen React was built for. Learn more about Shopify [API versioning](https://shopify.dev/api/usage/versioning) for more details.

#### HydrogenClientProps

* cache

  An instance that implements the \[Cache API]\(https://developer.mozilla.org/en-US/docs/Web/API/Cache)

  ```ts
  Cache
  ```

* i18n

  An object containing a country code and language code

  ```ts
  TI18n
  ```

* logErrors

  Whether it should print GraphQL errors automatically. Defaults to true

  ```ts
  boolean | ((error?: Error) => boolean)
  ```

* storefrontHeaders

  Storefront API headers. If on Oxygen, use \`getStorefrontHeaders()\`

  ```ts
  StorefrontHeaders
  ```

* storefrontId

  The globally unique identifier for the Shop

  ```ts
  string
  ```

* waitUntil

  The \`waitUntil\` function is used to keep the current request/response lifecycle alive even after a response has been sent. It should be provided by your platform.

  ```ts
  WaitUntil
  ```

#### StorefrontClientProps

* contentType

  Customizes which \`"content-type"\` header is added when using \`getPrivateTokenHeaders()\` and \`getPublicTokenHeaders()\`. When fetching with a \`JSON.stringify()\`-ed \`body\`, use \`"json"\`. When fetching with a \`body\` that is a plain string, use \`"graphql"\`. Defaults to \`"json"\` Can also be customized on a call-by-call basis by passing in \`'contentType'\` to both \`getPrivateTokenHeaders({...})\` and \`getPublicTokenHeaders({...})\`, for example: \`getPublicTokenHeaders({contentType: 'graphql'})\`

  ```ts
  'json' | 'graphql'
  ```

* privateStorefrontToken

  The Storefront API delegate access token. Refer to the \[authentication]\(https://shopify.dev/api/storefront#authentication) and \[delegate access token]\(https://shopify.dev/apps/auth/oauth/delegate-access-tokens) documentation for more details.

  ```ts
  string
  ```

* publicStorefrontToken

  The Storefront API access token. Refer to the \[authentication]\(https://shopify.dev/api/storefront#authentication) documentation for more details.

  ```ts
  string
  ```

* storeDomain

  The host name of the domain (eg: \`{shop}.myshopify.com\`).

  ```ts
  string
  ```

* storefrontApiVersion

  The Storefront API version. This should almost always be the same as the version Hydrogen React was built for. Learn more about Shopify \[API versioning]\(https://shopify.dev/api/usage/versioning) for more details.

  ```ts
  string
  ```

##### Returns

* **storefront**

  **StorefrontForDoc\<TI18n>**

#### StorefrontForDoc

* cache

  The cache instance passed in from the \`createStorefrontClient\` argument.

  ```ts
  Cache
  ```

* CacheCustom

  Re-export of \[\`CacheCustom\`]\(/docs/api/hydrogen/utilities/cachecustom).

  ```ts
  (overrideOptions: AllCacheOptions) => AllCacheOptions
  ```

* CacheLong

  Re-export of \[\`CacheLong\`]\(/docs/api/hydrogen/utilities/cachelong).

  ```ts
  (overrideOptions?: AllCacheOptions) => AllCacheOptions
  ```

* CacheNone

  Re-export of \[\`CacheNone\`]\(/docs/api/hydrogen/utilities/cachenone).

  ```ts
  () => NoStoreStrategy
  ```

* CacheShort

  Re-export of \[\`CacheShort\`]\(/docs/api/hydrogen/utilities/cacheshort).

  ```ts
  (overrideOptions?: AllCacheOptions) => AllCacheOptions
  ```

* generateCacheControlHeader

  Re-export of \[\`generateCacheControlHeader\`]\(/docs/api/hydrogen/utilities/generatecachecontrolheader).

  ```ts
  (cacheOptions: AllCacheOptions) => string
  ```

* getApiUrl

  Creates the fully-qualified URL to your store's GraphQL endpoint. See \[\`getStorefrontApiUrl\` in Hydrogen React]\(/docs/api/hydrogen-react/2026-04/utilities/createstorefrontclient#:\~:text=storeDomain-,getStorefrontApiUrl,-(props%3F%3A) for more details.

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "storefrontApiVersion" | "storeDomain">>) => string
  ```

* getPrivateTokenHeaders

  Returns an object that contains headers that are needed for each query to Storefront API GraphQL endpoint for API calls made from a server. See \[\`getPrivateTokenHeaders\` in Hydrogen React]\(/docs/api/hydrogen-react/2026-04/utilities/createstorefrontclient#:\~:text=storefrontApiVersion-,getPrivateTokenHeaders,-(props%3F%3A) for more details.

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "contentType">> & Pick<StorefrontClientProps, "privateStorefrontToken"> & { buyerIp?: string; }) => Record<string, string>
  ```

* getPublicTokenHeaders

  Returns an object that contains headers that are needed for each query to Storefront API GraphQL endpoint. See \[\`getPublicTokenHeaders\` in Hydrogen React]\(/docs/api/hydrogen-react/2026-04/utilities/createstorefrontclient#:\~:text=%27graphql%27.-,getPublicTokenHeaders,-(props%3F%3A) for more details.

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "contentType">> & Pick<StorefrontClientProps, "publicStorefrontToken">) => Record<string, string>
  ```

* getShopifyDomain

  Creates the fully-qualified URL to your myshopify.com domain. See \[\`getShopifyDomain\` in Hydrogen React]\(/docs/api/hydrogen-react/2026-04/utilities/createstorefrontclient#:\~:text=StorefrontClientReturn-,getShopifyDomain,-(props%3F%3A) for more details.

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "storeDomain">>) => string
  ```

* i18n

  The \`i18n\` object passed in from the \`createStorefrontClient\` argument.

  ```ts
  TI18n
  ```

* mutate

  The function to run a mutation on Storefront API.

  ```ts
  <TData = any>(
      mutation: string,
      options: StorefrontMutationOptionsForDocs,
    ) => Promise<TData & StorefrontError>
  ```

* query

  The function to run a query on Storefront API.

  ```ts
  <TData = any>(
      query: string,
      options: StorefrontQueryOptionsForDocs,
    ) => Promise<TData & StorefrontError>
  ```

#### AllCacheOptions

Override options for a cache strategy.

* maxAge

  The maximum amount of time in seconds that a resource will be considered fresh. See \`max-age\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#:\~:text=Response%20Directives-,max%2Dage,-The%20max%2Dage).

  ```ts
  number
  ```

* mode

  The caching mode, generally \`public\`, \`private\`, or \`no-store\`.

  ```ts
  string
  ```

* sMaxAge

  Similar to \`maxAge\` but specific to shared caches. See \`s-maxage\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#s-maxage).

  ```ts
  number
  ```

* staleIfError

  Indicate that the cache should serve the stale response if an error occurs while revalidating the cache. See \`stale-if-error\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-if-error).

  ```ts
  number
  ```

* staleWhileRevalidate

  Indicate that the cache should serve the stale response in the background while revalidating the cache. See \`stale-while-revalidate\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-while-revalidate).

  ```ts
  number
  ```

#### NoStoreStrategy

* mode

  ```ts
  string
  ```

#### StorefrontMutationOptionsForDocs

* displayName

  The name of the query for debugging in the Subrequest Profiler.

  ```ts
  string
  ```

* headers

  Additional headers for this query.

  ```ts
  HeadersInit
  ```

* storefrontApiVersion

  Override the Storefront API version for this query.

  ```ts
  string
  ```

* variables

  The variables for the GraphQL mutation statement.

  ```ts
  Record<string, unknown>
  ```

#### StorefrontError

* errors

  ```ts
  StorefrontApiErrors
  ```

#### StorefrontApiErrors

```ts
JsonGraphQLError[] | undefined
```

#### JsonGraphQLError

* extensions

  Reserved for implementors to extend the protocol however they see fit, and hence there are no additional restrictions on its contents.

  ```ts
  { [key: string]: unknown; }
  ```

* locations

  If an error can be associated to a particular point in the requested GraphQL document, it should contain a list of locations.

  ```ts
  { line: number; column: number; }[]
  ```

* message

  ```ts
  string
  ```

* name

  ```ts
  string
  ```

* path

  If an error can be associated to a particular field in the GraphQL result, it \_must\_ contain an entry with the key \`path\` that details the path of the response field which experienced the error. This allows clients to identify whether a null result is intentional or caused by a runtime error.

  ```ts
  (string | number)[]
  ```

* stack

  ```ts
  string
  ```

#### StorefrontQueryOptionsForDocs

* cache

  The cache strategy for this query. Default to max-age=1, stale-while-revalidate=86399.

  ```ts
  CachingStrategy
  ```

* displayName

  The name of the query for debugging in the Subrequest Profiler.

  ```ts
  string
  ```

* headers

  Additional headers for this query.

  ```ts
  HeadersInit
  ```

* storefrontApiVersion

  Override the Storefront API version for this query.

  ```ts
  string
  ```

* variables

  The variables for the GraphQL query statement.

  ```ts
  Record<string, unknown>
  ```

#### CachingStrategy

Use the \`CachingStrategy\` to define a custom caching mechanism for your data. Or use one of the pre-defined caching strategies: CacheNone, CacheShort, CacheLong.

* maxAge

  The maximum amount of time in seconds that a resource will be considered fresh. See \`max-age\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#:\~:text=Response%20Directives-,max%2Dage,-The%20max%2Dage).

  ```ts
  number
  ```

* mode

  The caching mode, generally \`public\`, \`private\`, or \`no-store\`.

  ```ts
  string
  ```

* sMaxAge

  Similar to \`maxAge\` but specific to shared caches. See \`s-maxage\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#s-maxage).

  ```ts
  number
  ```

* staleIfError

  Indicate that the cache should serve the stale response if an error occurs while revalidating the cache. See \`stale-if-error\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-if-error).

  ```ts
  number
  ```

* staleWhileRevalidate

  Indicate that the cache should serve the stale response in the background while revalidating the cache. See \`stale-while-revalidate\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-while-revalidate).

  ```ts
  number
  ```

Examples

#### Examples

* #### Example code

  ##### JavaScript

  ```js
  import {createStorefrontClient} from '@shopify/hydrogen';
  import {
    createRequestHandler,
    getStorefrontHeaders,
  } from '@shopify/hydrogen/oxygen';
  export default {
    async fetch(request, env, executionContext) {
      /* Create a Storefront client with your credentials and options */
      const {storefront} = createStorefrontClient({
        /* Cache API instance */
        cache: await caches.open('hydrogen'),
        /* Runtime utility in serverless environments */
        waitUntil: (p) => executionContext.waitUntil(p),
        /* Private Storefront API token for your store */
        privateStorefrontToken: env.PRIVATE_STOREFRONT_API_TOKEN,
        /* Public Storefront API token for your store */
        publicStorefrontToken: env.PUBLIC_STOREFRONT_API_TOKEN,
        /* Your store domain: "{shop}.myshopify.com" */
        storeDomain: env.PUBLIC_STORE_DOMAIN,
        /**
         * Storefront API headers containing:
         * - buyerIp: The IP address of the customer.
         * - requestGroupId: A unique ID to group all the logs for this request.
         * - cookie: The 'cookie' header from the request.
         */
        storefrontHeaders: getStorefrontHeaders(request),
      });

      const handleRequest = createRequestHandler({
        build: remixBuild,
        mode: process.env.NODE_ENV,
        /* Inject the Storefront client in the Remix context */
        getLoadContext: () => ({storefront}),
      });

      return handleRequest(request);
    },
  };
  ```

  ##### TypeScript

  ```ts
  import {createStorefrontClient} from '@shopify/hydrogen';
  import * as serverBuild from 'virtual:react-router/server-build';
  import {
    createRequestHandler,
    getStorefrontHeaders,
  } from '@shopify/hydrogen/oxygen';

  export default {
    async fetch(
      request: Request,
      env: Record<string, string>,
      executionContext: ExecutionContext,
    ) {
      /* Create a Storefront client with your credentials and options */
      const {storefront} = createStorefrontClient({
        /* Cache API instance */
        cache: await caches.open('hydrogen'),
        /* Runtime utility in serverless environments */
        waitUntil: (p: Promise<unknown>) => executionContext.waitUntil(p),
        /* Private Storefront API token for your store */
        privateStorefrontToken: env.PRIVATE_STOREFRONT_API_TOKEN,
        /* Public Storefront API token for your store */
        publicStorefrontToken: env.PUBLIC_STOREFRONT_API_TOKEN,
        /* Your store domain: "{shop}.myshopify.com" */
        storeDomain: env.PUBLIC_STORE_DOMAIN,
        /**
         * Storefront API headers containing:
         * - buyerIp: The IP address of the customer.
         * - requestGroupId: A unique ID to group all the logs for this request.
         * - cookie: The 'cookie' header from the request.
         */
        storefrontHeaders: getStorefrontHeaders(request),
      });

      const handleRequest = createRequestHandler({
        build: serverBuild,
        mode: process.env.NODE_ENV,
        /* Inject the Storefront client in the Remix context */
        getLoadContext: () => ({storefront}),
      });

      return handleRequest(request);
    },
  };
  ```

***

### Related

[- CacheNone](https://shopify.dev/docs/api/hydrogen/2026-04/utilities/caching/cachenone)

[- CacheShort](https://shopify.dev/docs/api/hydrogen/2026-04/utilities/caching/cacheshort)

[- CacheLong](https://shopify.dev/docs/api/hydrogen/2026-04/utilities/caching/cachelong)

[- CacheCustom](https://shopify.dev/docs/api/hydrogen/2026-04/utilities/caching/cachecustom)

[- InMemoryCache](https://shopify.dev/docs/api/hydrogen/2026-04/utilities/caching/inmemorycache)

***

---



<a id="latest-utilities-decodeencodedvariant"></a>


## decodeEncodedVariant

Decodes an encoded option value string into an array of option value combinations.

### decode​Encoded​Variant(**[encodedVariantField](#props-propertydetail-encodedvariantfield)**​)

For an encoded option value string, decode into option value combinations. Entries represent a valid combination formatted as an array of option value positions.

#### Parameters

* **encodedVariantField**

  **string**

  **required**

  Encoded option value string from the Storefront API, e.g. [product.encodedVariantExistence](https://shopify.dev/docs/api/storefront/2026-04/objects/Product#field-encodedvariantexistence) or [product.encodedVariantAvailability](https://shopify.dev/docs/api/storefront/2026-04/objects/Product#field-encodedvariantavailability)

#### Returns

* **DecodedOptionValues**

  Decoded option value combinations

#### DecodedOptionValues

```ts
number[][]
```

Examples

#### Examples

* ####

  ##### Description

  Decode an encoded option value string

  ##### JavaScript

  ```js
  import {decodeEncodedVariant} from '@shopify/hydrogen';

  // product.options = [
  //   {
  //     name: 'Color',
  //     optionValues: [
  //       {name: 'Red'},
  //       {name: 'Blue'},
  //       {name: 'Green'},
  //     ]
  //   },
  //   {
  //     name: 'Size',
  //     optionValues: [
  //       {name: 'S'},
  //       {name: 'M'},
  //       {name: 'L'},
  //     ]
  //   }
  // ]

  const encodedVariantAvailability = 'v1_0:0-2,1:2,';

  const decodedVariantAvailability = decodeEncodedVariant(
    encodedVariantAvailability,
  );

  // decodedVariantAvailability
  // {
  //   [0,0],    // Red, S
  //   [0,1],    // Red, M
  //   [0,2],    // Red, L
  //   [1,2]     // Blue, L
  // }
  ```

***

### Related

[- isOptionValueCombinationInEncodedVariant](https://shopify.dev/docs/api/hydrogen/2026-04/utilities/isoptionvaluecombinationinencodedvariant)

***

---



<a id="latest-utilities-flattenconnection"></a>


## flattenConnection

The `flattenConnection` utility transforms a connection object from the Storefront API (for example, [Product-related connections](https://shopify.dev/api/storefront/reference/products/product)) into a flat array of nodes. The utility works with either `nodes` or `edges.node`.

If `connection` is null or undefined, will return an empty array instead in production. In development, an error will be thrown.

##### Parameters

* **connection**

  **ConnectionEdges | ConnectionNodes**

#### ConnectionEdges

* edges

  ```ts
  Array<{node: unknown}>
  ```

#### ConnectionNodes

* nodes

  ```ts
  Array<unknown>
  ```

##### Returns

**`unknown[]`**

Examples

#### Examples

* #### Example code

  ##### JavaScript

  ```jsx
  import {flattenConnection} from '@shopify/hydrogen';

  export function ProductList({productConnection}) {
    const products = flattenConnection(productConnection);
    return (
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    );
  }
  ```

  ##### TypeScript

  ```tsx
  import {flattenConnection} from '@shopify/hydrogen';
  import type {ProductConnection} from '@shopify/hydrogen/storefront-api-types';

  export function ProductList({
    productConnection,
  }: {
    productConnection: ProductConnection;
  }) {
    const products = flattenConnection(productConnection);
    return (
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    );
  }
  ```

***

---



<a id="latest-utilities-getadjacentandfirstavailablevariants"></a>


## getAdjacentAndFirstAvailableVariants

Finds all the variants provided by `adjacentVariants`, `options.optionValues.firstAvailableVariant`, and `selectedOrFirstAvailableVariant` and return them in a single array. This function will remove any duplicated variants found.

Examples

#### Examples

* ####

  ##### getAdjacentAndFirstAvailableVariants example

  ```js
  import {getAdjacentAndFirstAvailableVariants} from '@shopify/hydrogen';

  // Make sure you are querying for the following fields:
  // - product.options.optionValues.firstSelectableVariant
  // - product.selectedOrFirstAvailableVariant
  // - product.adjacentVariants
  //
  // For any fields that are ProductVariant type, make sure to query for:
  // - variant.selectedOptions.name
  // - variant.selectedOptions.value

  const product = {
    /* Result from querying the SFAPI for a product */
  };

  // Returns a list of unique variants found in product query
  const variants = getAdjacentAndFirstAvailableVariants(product);
  ```

***

### Related

[- getProductOptions](https://shopify.dev/docs/api/hydrogen/2026-04/utilities/getproductoptions)

[- mapSelectedProductOptionToObject](https://shopify.dev/docs/api/hydrogen/2026-04/utilities/mapselectedproductoptiontoobject)

[- useSelectedOptionInUrlParam](https://shopify.dev/docs/api/hydrogen/2026-04/utilities/useselectedoptioninurlparam)

***

---



<a id="latest-utilities-getclientbrowserparameters"></a>


## getClientBrowserParameters

Gathers client browser values commonly used for analytics

### get​Client​Browser​Parameters()

If executed on server, this method will return empty string for each field.

#### Returns

* **ClientBrowserParameters**

#### ClientBrowserParameters

* navigationApi

  Navigation api: \`'PerformanceNavigationTiming' | 'performance.navigation'\`. Use \`getClientBrowserParameters()\` to collect this value.

  ```ts
  string
  ```

* navigationType

  Navigation type: \`'navigate' | 'reload' | 'back\_forward' | 'prerender' | 'unknown'\`. Use \`getClientBrowserParameters()\` to collect this value.

  ```ts
  string
  ```

* path

  Value of \`window\.location.pathname\`. Use \`getClientBrowserParameters()\` to collect this value.

  ```ts
  string
  ```

* referrer

  Value of \`window\.document.referrer\`. Use \`getClientBrowserParameters()\` to collect this value.

  ```ts
  string
  ```

* search

  Value of \`window\.location.search\`. Use \`getClientBrowserParameters()\` to collect this value.

  ```ts
  string
  ```

* title

  Value of \`document.title\`. Use \`getClientBrowserParameters()\` to collect this value.

  ```ts
  string
  ```

* uniqueToken

  Shopify unique user token: Value of \`\_shopify\_y\` cookie. Use \`getClientBrowserParameters()\` to collect this value.

  ```ts
  string
  ```

* url

  Value of \`window\.location.href\`. Use \`getClientBrowserParameters()\` to collect this value.

  ```ts
  string
  ```

* userAgent

  Value of \`navigator.userAgent\`. Use \`getClientBrowserParameters()\` to collect this value.

  ```ts
  string
  ```

* visitToken

  Shopify session token: Value of \`\_shopify\_s\` cookie. Use \`getClientBrowserParameters()\` to collect this value.

  ```ts
  string
  ```

Examples

#### Examples

* #### Example code

  ##### JavaScript

  ```jsx
  import * as React from 'react';
  import {useEffect} from 'react';
  import {getClientBrowserParameters} from '@shopify/hydrogen';

  export default function App({Component, pageProps}) {
    useEffect(() => {
      getClientBrowserParameters();
    });

    return <Component {...pageProps} />;
  }
  ```

  ##### TypeScript

  ```tsx
  import * as React from 'react';
  import {useEffect} from 'react';
  import {getClientBrowserParameters} from '@shopify/hydrogen';

  export default function App({Component, pageProps}) {
    useEffect(() => {
      getClientBrowserParameters();
    });

    return <Component {...pageProps} />;
  }
  ```

***

### Related

[- sendShopifyAnalytics](https://shopify.dev/docs/api/hydrogen/2026-04/utilities/sendshopifyanalytics)

[- useShopifyCookies](https://shopify.dev/docs/api/hydrogen/2026-04/hooks/useshopifycookies)

***

---



<a id="latest-utilities-getpaginationvariables"></a>


## getPaginationVariables

The `getPaginationVariables` function is used with the [`<Pagination>`](https://shopify.dev/docs/api/hydrogen/2026-04/components/pagination) component to generate the variables needed to fetch paginated data from the Storefront API. The returned variables should be used within your storefront GraphQL query.

### get​Pagination​Variables(**[request](#props-propertydetail-request)**​,**[options](#props-propertydetail-options)**​)

#### Parameters

* **request**

  **Request**

  **required**

  The request object passed to your Remix loader function.

* **options**

  **{ pageBy: number; namespace?: string; }**

  **Default: {pageBy: 20}**

  Options for how to configure the pagination variables. Includes the ability to change how many nodes are within each page as well as a namespace to avoid URL param conflicts when using multiple `Pagination` components on a single page.

Examples

#### Examples

* #### Example code

  ##### JavaScript

  ```jsx
  import {Pagination, getPaginationVariables} from '@shopify/hydrogen';
  import {useLoaderData, Link} from 'react-router';

  export async function loader({request, context: {storefront}}) {
    const variables = getPaginationVariables(request, {pageBy: 8});

    const data = await storefront.query(ALL_PRODUCTS_QUERY, {
      variables,
    });

    return {products: data.products};
  }

  export default function List() {
    const {products} = useLoaderData();

    return (
      <Pagination connection={products}>
        {({nodes, PreviousLink, NextLink}) => (
          <>
            <PreviousLink>Previous</PreviousLink>
            <div>
              {nodes.map((product) => (
                <Link key={product.id} to={`/products/${product.handle}`}>
                  {product.title}
                </Link>
              ))}
            </div>
            <NextLink>Next</NextLink>
          </>
        )}
      </Pagination>
    );
  }

  const ALL_PRODUCTS_QUERY = `#graphql
    query AllProducts(
      $country: CountryCode
      $language: LanguageCode
      $first: Int
      $last: Int
      $startCursor: String
      $endCursor: String
    ) @inContext(country: $country, language: $language) {
      products(first: $first, last: $last, before: $startCursor, after: $endCursor) {
        nodes { id
          title
          handle
        }
        pageInfo {
          hasPreviousPage
          hasNextPage
          startCursor
          endCursor
        }
      }
    }
  `;
  ```

  ##### TypeScript

  ```tsx
  import {type LoaderFunctionArgs} from 'react-router';
  import {Pagination, getPaginationVariables} from '@shopify/hydrogen';
  import {useLoaderData, Link} from 'react-router';
  import {ProductConnection} from '@shopify/hydrogen/storefront-api-types';

  export async function loader({
    request,
    context: {storefront},
  }: LoaderFunctionArgs) {
    const variables = getPaginationVariables(request, {pageBy: 8});

    const data = await storefront.query<{products: ProductConnection}>(
      ALL_PRODUCTS_QUERY,
      {
        variables,
      },
    );

    return {products: data.products};
  }

  export default function List() {
    const {products} = useLoaderData<typeof loader>();

    return (
      <Pagination connection={products}>
        {({nodes, NextLink, PreviousLink}) => (
          <>
            <PreviousLink>Previous</PreviousLink>
            <div>
              {nodes.map((product) => (
                <Link key={product.id} to={`/products/${product.handle}`}>
                  {product.title}
                </Link>
              ))}
            </div>
            <NextLink>Next</NextLink>
          </>
        )}
      </Pagination>
    );
  }

  const ALL_PRODUCTS_QUERY = `#graphql
    query AllProducts(
      $country: CountryCode
      $language: LanguageCode
      $first: Int
      $last: Int
      $startCursor: String
      $endCursor: String
    ) @inContext(country: $country, language: $language) {
      products(first: $first, last: $last, before: $startCursor, after: $endCursor) {
        nodes { id
          title
          handle
        }
        pageInfo {
          hasPreviousPage
          hasNextPage
          startCursor
          endCursor
        }
      }
    }
  `;
  ```

***

### Related

[- Pagination](https://shopify.dev/docs/api/hydrogen/2026-04/components/pagination)

***

---



<a id="latest-utilities-getproductoptions"></a>


## getProductOptions

Returns a product options array with its relevant information about the variant. This function supports combined listing products and products with 2000 variants limit.

Examples

#### Examples

* #### Example code

  ##### JavaScript

  ```jsx
  import React from 'react';
  import {getProductOptions} from '@shopify/hydrogen';

  // Make sure you are querying for the following fields:
  // - product.handle
  // - product.encodedVariantExistence
  // - product.encodedVariantAvailability
  // - product.options.name
  // - product.options.optionValues.name
  // - product.options.optionValues.firstSelectableVariant
  // - product.selectedOrFirstAvailableVariant
  // - product.adjacentVariants
  //
  // For any fields that are ProductVariant type, make sure to query for:
  // - variant.product.handle
  // - variant.selectedOptions.name
  // - variant.selectedOptions.value

  export default function ProductForm() {
    const product = {
      /* Result from querying the SFAPI for a product */
    };

    const productOptions = getProductOptions(product);

    return (
      <>
        {productOptions.map((option) => (
          <div key={option.name}>
            <h5>{option.name}</h5>
            <div>
              {option.optionValues.map((value) => {
                const {
                  name,
                  handle,
                  variantUriQuery,
                  selected,
                  available,
                  exists,
                  isDifferentProduct,
                  swatch,
                } = value;

                if (isDifferentProduct) {
                  // SEO - When the variant is a
                  // combined listing child product
                  // that leads to a different url,
                  // we need to render it
                  // as an anchor tag
                  return (
                    <a
                      key={option.name + name}
                      href={`/products/${handle}?${variantUriQuery}`}
                      style={{
                        border: selected
                          ? '1px solid black'
                          : '1px solid transparent',
                        opacity: available ? 1 : 0.3,
                      }}
                    >
                      <ProductOptionSwatch swatch={swatch} name={name} />
                    </a>
                  );
                } else {
                  // SEO - When the variant is an
                  // update to the search param,
                  // render it as a button with
                  // javascript navigating to
                  // the variant so that SEO bots
                  // do not index these as
                  // duplicated links
                  return (
                    <button
                      type="button"
                      key={option.name + name}
                      style={{
                        border: selected
                          ? '1px solid black'
                          : '1px solid transparent',
                        opacity: available ? 1 : 0.3,
                      }}
                      disabled={!exists}
                      onClick={() => {
                        if (!selected) {
                          // Navigate to `?${variantUriQuery}`
                        }
                      }}
                    >
                      <ProductOptionSwatch swatch={swatch} name={name} />
                    </button>
                  );
                }
              })}
            </div>
            <br />
          </div>
        ))}
      </>
    );
  }

  function ProductOptionSwatch({swatch, name}) {
    const image = swatch?.image?.previewImage?.url;
    const color = swatch?.color;

    if (!image && !color) return name;

    return (
      <div
        aria-label={name}
        className="product-option-label-swatch"
        style={{
          backgroundColor: color || 'transparent',
        }}
      >
        {!!image && <img src={image} alt={name} />}
      </div>
    );
  }
  ```

  ##### TypeScript

  ```tsx
  import React from 'react';
  import {
    getProductOptions,
    type MappedProductOptions,
  } from '@shopify/hydrogen';
  import type {
    ProductOptionValueSwatch,
    Maybe,
  } from '@shopify/hydrogen/storefront-api-types';

  // Make sure you are querying for the following fields:
  // - product.handle
  // - product.encodedVariantExistence
  // - product.encodedVariantAvailability
  // - product.options.name
  // - product.options.optionValues.name
  // - product.options.optionValues.firstSelectableVariant
  // - product.selectedOrFirstAvailableVariant
  // - product.adjacentVariants
  //
  // For any fields that are ProductVariant type, make sure to query for:
  // - variant.product.handle
  // - variant.selectedOptions.name
  // - variant.selectedOptions.value

  export default function ProductForm() {
    const product = {
      /* Result from querying the SFAPI for a product */
    };

    const productOptions: MappedProductOptions[] = getProductOptions(product);

    return (
      <>
        {productOptions.map((option) => (
          <div key={option.name}>
            <h5>{option.name}</h5>
            <div>
              {option.optionValues.map((value) => {
                const {
                  name,
                  handle,
                  variantUriQuery,
                  selected,
                  available,
                  exists,
                  isDifferentProduct,
                  swatch,
                } = value;

                if (isDifferentProduct) {
                  // SEO - When the variant is a
                  // combined listing child product
                  // that leads to a different url,
                  // we need to render it
                  // as an anchor tag
                  return (
                    <a
                      key={option.name + name}
                      href={`/products/${handle}?${variantUriQuery}`}
                      style={{
                        border: selected
                          ? '1px solid black'
                          : '1px solid transparent',
                        opacity: available ? 1 : 0.3,
                      }}
                    >
                      <ProductOptionSwatch swatch={swatch} name={name} />
                    </a>
                  );
                } else {
                  // SEO - When the variant is an
                  // update to the search param,
                  // render it as a button with
                  // javascript navigating to
                  // the variant so that SEO bots
                  // do not index these as
                  // duplicated links
                  return (
                    <button
                      type="button"
                      key={option.name + name}
                      style={{
                        border: selected
                          ? '1px solid black'
                          : '1px solid transparent',
                        opacity: available ? 1 : 0.3,
                      }}
                      disabled={!exists}
                      onClick={() => {
                        if (!selected) {
                          // Navigate to `?${variantUriQuery}`
                        }
                      }}
                    >
                      <ProductOptionSwatch swatch={swatch} name={name} />
                    </button>
                  );
                }
              })}
            </div>
            <br />
          </div>
        ))}
      </>
    );
  }

  function ProductOptionSwatch({
    swatch,
    name,
  }: {
    swatch?: Maybe<ProductOptionValueSwatch> | undefined;
    name: string;
  }) {
    const image = swatch?.image?.previewImage?.url;
    const color = swatch?.color;

    if (!image && !color) return name;

    return (
      <div
        aria-label={name}
        style={{
          backgroundColor: color || 'transparent',
        }}
      >
        {!!image && <img src={image} alt={name} />}
      </div>
    );
  }
  ```

***

### Related

[- mapSelectedProductOptionToObject](https://shopify.dev/docs/api/hydrogen/2026-04/utilities/mapselectedproductoptiontoobject)

[- getAdjacentAndFirstAvailableVariants](https://shopify.dev/docs/api/hydrogen/2026-04/utilities/getadjacentandfirstavailablevariants)

[- useSelectedOptionInUrlParam](https://shopify.dev/docs/api/hydrogen/2026-04/utilities/useselectedoptioninurlparam)

***

---



<a id="latest-utilities-getselectedproductoptions"></a>


## getSelectedProductOptions

The `getSelectedProductOptions` returns the selected options from the Request search parameters. The selected options can then be easily passed to your GraphQL query with [`variantBySelectedOptions`](https://shopify.dev/docs/api/storefront/2026-01/objects/product#field-product-variantbyselectedoptions).

### Props(**[request](#props-propertydetail-request)**​)

#### Parameters

* **request**

  **Request**

  **required**

#### Returns

* **SelectedOptionInput\[]**

Examples

#### Examples

* #### Example code

  ##### JavaScript

  ```jsx
  import {getSelectedProductOptions} from '@shopify/hydrogen';

  export async function loader({request, params, context}) {
    const selectedOptions = getSelectedProductOptions(request);

    const {product} = await context.storefront.query(PRODUCT_QUERY, {
      variables: {
        handle: params.productHandle,
        selectedOptions,
      },
    });

    return {product};
  }

  const PRODUCT_QUERY = `#graphql
    query Product($handle: String!, $selectedOptions: [SelectedOptionInput!]!) {
      product(handle: $handle) {
        title
        description
        options {
          name
          values
        }
        selectedVariant: variantBySelectedOptions(selectedOptions: $selectedOptions, ignoreUnknownOptions: true, caseInsensitiveMatch: true) {
          ...ProductVariantFragment
        }
      }
    }
  `;
  ```

  ##### TypeScript

  ```tsx
  import {getSelectedProductOptions} from '@shopify/hydrogen';
  import {type LoaderFunctionArgs} from 'react-router';

  export async function loader({request, params, context}: LoaderFunctionArgs) {
    const selectedOptions = getSelectedProductOptions(request);

    const {product} = await context.storefront.query(PRODUCT_QUERY, {
      variables: {
        handle: params.productHandle,
        selectedOptions,
      },
    });

    return {product};
  }

  const PRODUCT_QUERY = `#graphql
    query Product($handle: String!, $selectedOptions: [SelectedOptionInput!]!) {
      product(handle: $handle) {
        title
        description
        options {
          name
          values
        }
        selectedVariant: variantBySelectedOptions(selectedOptions: $selectedOptions, ignoreUnknownOptions: true, caseInsensitiveMatch: true) {
          ...ProductVariantFragment
        }
      }
    }
  `;
  ```

***

### Related

[- VariantSelector](https://shopify.dev/docs/api/hydrogen/2026-04/components/variantselector)

***

---



<a id="latest-utilities-getseometa"></a>


## getSeoMeta

Generate a [Remix meta array](https://remix.run/docs/en/main/route/meta) from one or more SEO configuration objects. Pass SEO configuration for the parent route(s) and the current route to preserve meta data for all active routes. Similar to [`Object.assign()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign), each property is overwritten based on the object order. The exception is `jsonLd`, which is preserved so that each route has it's own independent jsonLd meta data. Learn more about [how SEO works in Hydrogen](https://shopify.dev/docs/custom-storefronts/hydrogen/seo).

##### getSeoMeta

* **seoInputs**

  **SeoConfig\[]**

  **required**

  `getSeoMeta` takes an arbitrary number of configuration object parameters. Values in each object are overwritten based on the object order. \`jsonLd\` properties are preserved between each configuration object.

#### SeoConfig

* alternates

  The \`alternates\` property is used to specify the language and geographical targeting when you have multiple versions of the same page in different languages. The \`url\` property tells search engines about these variations and helps them to serve the correct version to their users.

  ```ts
  LanguageAlternate | LanguageAlternate[]
  ```

* description

  The description of the page. This is used in the \`name="description"\` meta tag as well as the \`og:description\` meta tag.

  ```ts
  Maybe<string>
  ```

* handle

  The handle is used to generate the \`twitter:site\` and \`twitter:creator\` meta tags. Include the \`@\` symbol in the handle.

  ```ts
  Maybe<string>
  ```

* jsonLd

  The \`jsonLd\` property is used to generate the \`application/ld+json\` script tag. This is used to provide structured data to search engines. The value should be an object that conforms to the schema.org spec. The \`type\` property should be the type of schema you are using. The \`type\` property is required and should be one of the following: - \`Product\` - \`ItemList\` - \`Organization\` - \`WebSite\` - \`WebPage\` - \`BlogPosting\` - \`Thing\` The value is validated via \[schema-dts]\(https://www\.npmjs.com/package/schema-dts)

  ```ts
  WithContext<Thing> | WithContext<Thing>[]
  ```

* media

  The media associated with the given page (images, videos, etc). If you pass a string, it will be used as the \`og:image\` meta tag. If you pass an object or an array of objects, that will be used to generate \`og:\<type of media>\` meta tags. The \`url\` property should be the URL of the media. The \`height\` and \`width\` properties are optional and should be the height and width of the media. The \`altText\` property is optional and should be a description of the media.

  ```ts
  | Maybe<string>
      | Partial<SeoMedia>
      | (Partial<SeoMedia> | Maybe<string>)[]
  ```

* robots

  The \`robots\` property is used to specify the robots meta tag. This is used to tell search engines which pages should be indexed and which should not.

  ```ts
  RobotsOptions
  ```

* title

  The \`title\` HTML element defines the document's title that is shown in a browser's title bar or a page's tab. It only contains text; tags within the element are ignored.

  ```ts
  Maybe<string>
  ```

* titleTemplate

  Generate the title from a template that includes a \`%s\` placeholder for the title.

  ```ts
  Maybe<string> | null
  ```

* url

  The canonical URL of the page. This is used to tell search engines which URL is the canonical version of a page. This is useful when you have multiple URLs that point to the same page. The value here will be used in the \`rel="canonical"\` link tag as well as the \`og:url\` meta tag.

  ```ts
  Maybe<string>
  ```

#### LanguageAlternate

* default

  Whether the alternate page is the default page. This will add the \`x-default\` attribution to the language code.

  ```ts
  boolean
  ```

* language

  Language code for the alternate page. This is used to generate the hreflang meta tag property.

  ```ts
  string
  ```

* url

  The url of the alternate page. This is used to generate the hreflang meta tag property.

  ```ts
  string
  ```

#### SeoMedia

* altText

  The alt text for the media. This is used to generate the og:\<type of media>:alt meta tag.

  ```ts
  Maybe<string> | undefined
  ```

* height

  The height in pixels of the media. This is used to generate the og:\<type of media>:height meta tag.

  ```ts
  Maybe<number> | undefined
  ```

* type

  Used to generate og:\<type of media> meta tag

  ```ts
  'image' | 'video' | 'audio'
  ```

* url

  The url value populates both url and secure\_url and is used to infer the og:\<type of media>:type meta tag.

  ```ts
  Maybe<string> | undefined
  ```

* width

  The width in pixels of the media. This is used to generate the og:\<type of media>:width meta tag.

  ```ts
  Maybe<number> | undefined
  ```

#### RobotsOptions

* maxImagePreview

  Set the maximum size of an image preview for this page in a search results Can be one of the following: - \`none\` - No image preview is to be shown. - \`standard\` - A default image preview may be shown. - \`large\` - A larger image preview, up to the width of the viewport, may be shown. If no value is specified a default image preview size is used.

  ```ts
  'none' | 'standard' | 'large'
  ```

* maxSnippet

  A number representing the maximum of amount characters to use as a textual snippet for a search result. This value can also be set to one of the following special values: - 0 - No snippet is to be shown. Equivalent to nosnippet. - 1 - The Search engine will choose the snippet length that it believes is most effective to help users discover your content and direct users to your site - -1 - No limit on the number of characters that can be shown in the snippet.

  ```ts
  number
  ```

* maxVideoPreview

  The maximum number of seconds for videos on this page to show in search results. This value can also be set to one of the following special values: - 0 - A static image may be used with the \`maxImagePreview\` setting. - 1 - There is no limit to the size of the video preview. This applies to all forms of search results (at Google: web search, Google Images, Google Videos, Discover, Assistant).

  ```ts
  number
  ```

* noArchive

  Do not show a cached link in search results.

  ```ts
  boolean
  ```

* noFollow

  Do not follow the links on this page.

  ```ts
  boolean
  ```

* noImageIndex

  Do not index images on this page.

  ```ts
  boolean
  ```

* noIndex

  Do not show this page, media, or resource in search results.

  ```ts
  boolean
  ```

* noSnippet

  Do not show a text snippet or video preview in the search results for this page.

  ```ts
  boolean
  ```

* noTranslate

  Do not offer translation of this page in search results.

  ```ts
  boolean
  ```

* unavailableAfter

  Do not show this page in search results after the specified date/time.

  ```ts
  string
  ```

Examples

#### Examples

* #### Example code

  ##### JavaScript

  ```js
  import {getSeoMeta} from '@shopify/hydrogen';

  export async function loader({context}) {
    const {shop} = await context.storefront.query(`
      query layout {
        shop {
          name
          description
        }
      }
    `);

    return {
      seo: {
        title: shop.title,
        description: shop.description,
      },
    };
  }

  export const meta = ({data, matches}) => {
    // Pass one or more arguments, preserving properties from parent routes
    return getSeoMeta(matches[0].data.seo, data.seo);
  };
  ```

  ##### TypeScript

  ```ts
  import {MetaFunction} from 'react-router';
  import {LoaderFunctionArgs} from 'react-router';
  import {getSeoMeta} from '@shopify/hydrogen';

  export async function loader({context}: LoaderFunctionArgs) {
    const {shop} = await context.storefront.query(`
      query layout {
        shop {
          name
          description
        }
      }
    `);

    return {
      seo: {
        title: shop.title,
        description: shop.description,
      },
    };
  }

  export const meta: MetaFunction<typeof loader> = ({data, matches}) => {
    // Pass one or more arguments, preserving properties from parent routes
    return getSeoMeta((matches as any)[0].data.seo, data!.seo);
  };
  ```

***

---



<a id="latest-utilities-getshopanalytics"></a>


## getShopAnalytics

A function that queries for shop required analytics data to be used in the [`Analytics.Provider`](https://shopify.dev/docs/api/hydrogen/2026-04/components/analytics/analytics-provider) component.

### get​Shop​Analytics(**[input1](#props-propertydetail-input1)**​)

#### Parameters

* **input1**

  **ShopAnalyticsProps**

  **required**

#### Returns

* **Promise\<ShopAnalytics | null>**

#### ShopAnalyticsProps

* publicStorefrontId

  The \`PUBLIC\_STOREFRONT\_ID\` generated by Oxygen in the environment variable.

  ```ts
  string
  ```

* storefront

  The storefront client instance created by \[\`createStorefrontClient\`]\(docs/api/hydrogen/utilities/createstorefrontclient).

  ```ts
  Storefront
  ```

#### Storefront

Interface to interact with the Storefront API.

* cache

  ```ts
  Cache
  ```

* CacheCustom

  ```ts
  (overrideOptions: AllCacheOptions) => AllCacheOptions
  ```

* CacheLong

  ```ts
  (overrideOptions?: AllCacheOptions) => AllCacheOptions
  ```

* CacheNone

  ```ts
  () => NoStoreStrategy
  ```

* CacheShort

  ```ts
  (overrideOptions?: AllCacheOptions) => AllCacheOptions
  ```

* forward

  Forwards the request to the Storefront API. It reads the API version from the request URL.

  ```ts
  (request: Request, options?: Pick<StorefrontCommonExtraParams, "storefrontApiVersion">) => Promise<Response>
  ```

* forwardMcp

  Forwards the request to the Storefront MCP endpoint.

  ```ts
  (request: Request) => Promise<Response>
  ```

* generateCacheControlHeader

  ```ts
  (cacheOptions: AllCacheOptions) => string
  ```

* getApiUrl

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "storefrontApiVersion" | "storeDomain">>) => string
  ```

* getHeaders

  ```ts
  () => Record<string, string>
  ```

* getPrivateTokenHeaders

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "contentType">> & Pick<StorefrontClientProps, "privateStorefrontToken"> & { buyerIp?: string; }) => Record<string, string>
  ```

* getPublicTokenHeaders

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "contentType">> & Pick<StorefrontClientProps, "publicStorefrontToken">) => Record<string, string>
  ```

* getShopifyDomain

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "storeDomain">>) => string
  ```

* i18n

  ```ts
  TI18n
  ```

* isMcpUrl

  Checks if the request URL matches the Storefront MCP endpoint.

  ```ts
  (request: { url?: string; }) => boolean
  ```

* isStorefrontApiUrl

  Checks if the request URL matches the Storefront API GraphQL endpoint.

  ```ts
  (request: { url?: string; }) => boolean
  ```

* mutate

  ```ts
  <
      OverrideReturnType extends any = never,
      RawGqlString extends string = string,
    >(
      mutation: RawGqlString,
      ...options: ClientVariablesInRestParams<
        StorefrontMutations,
        RawGqlString,
        StorefrontCommonExtraParams,
        AutoAddedVariableNames
      >
    ) => Promise<
      ClientReturn<StorefrontMutations, RawGqlString, OverrideReturnType> &
        StorefrontError
    >
  ```

* query

  ```ts
  <
      OverrideReturnType extends any = never,
      RawGqlString extends string = string,
    >(
      query: RawGqlString,
      ...options: ClientVariablesInRestParams<
        StorefrontQueries,
        RawGqlString,
        StorefrontCommonExtraParams & Pick<StorefrontQueryOptions, 'cache'>,
        AutoAddedVariableNames
      >
    ) => Promise<
      ClientReturn<StorefrontQueries, RawGqlString, OverrideReturnType> &
        StorefrontError
    >
  ```

* setCollectedSubrequestHeaders

  Sets the collected subrequest headers in the response. Useful to forward the cookies and server-timing headers from server subrequests to the browser.

  ```ts
  (response: { headers: Headers; }) => void
  ```

#### AllCacheOptions

Override options for a cache strategy.

* maxAge

  The maximum amount of time in seconds that a resource will be considered fresh. See \`max-age\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#:\~:text=Response%20Directives-,max%2Dage,-The%20max%2Dage).

  ```ts
  number
  ```

* mode

  The caching mode, generally \`public\`, \`private\`, or \`no-store\`.

  ```ts
  string
  ```

* sMaxAge

  Similar to \`maxAge\` but specific to shared caches. See \`s-maxage\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#s-maxage).

  ```ts
  number
  ```

* staleIfError

  Indicate that the cache should serve the stale response if an error occurs while revalidating the cache. See \`stale-if-error\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-if-error).

  ```ts
  number
  ```

* staleWhileRevalidate

  Indicate that the cache should serve the stale response in the background while revalidating the cache. See \`stale-while-revalidate\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-while-revalidate).

  ```ts
  number
  ```

#### NoStoreStrategy

* mode

  ```ts
  string
  ```

#### StorefrontCommonExtraParams

* displayName

  ```ts
  string
  ```

* headers

  ```ts
  HeadersInit
  ```

* storefrontApiVersion

  ```ts
  string
  ```

#### StorefrontClientProps

* contentType

  Customizes which \`"content-type"\` header is added when using \`getPrivateTokenHeaders()\` and \`getPublicTokenHeaders()\`. When fetching with a \`JSON.stringify()\`-ed \`body\`, use \`"json"\`. When fetching with a \`body\` that is a plain string, use \`"graphql"\`. Defaults to \`"json"\` Can also be customized on a call-by-call basis by passing in \`'contentType'\` to both \`getPrivateTokenHeaders({...})\` and \`getPublicTokenHeaders({...})\`, for example: \`getPublicTokenHeaders({contentType: 'graphql'})\`

  ```ts
  'json' | 'graphql'
  ```

* privateStorefrontToken

  The Storefront API delegate access token. Refer to the \[authentication]\(https://shopify.dev/api/storefront#authentication) and \[delegate access token]\(https://shopify.dev/apps/auth/oauth/delegate-access-tokens) documentation for more details.

  ```ts
  string
  ```

* publicStorefrontToken

  The Storefront API access token. Refer to the \[authentication]\(https://shopify.dev/api/storefront#authentication) documentation for more details.

  ```ts
  string
  ```

* storeDomain

  The host name of the domain (eg: \`{shop}.myshopify.com\`).

  ```ts
  string
  ```

* storefrontApiVersion

  The Storefront API version. This should almost always be the same as the version Hydrogen React was built for. Learn more about Shopify \[API versioning]\(https://shopify.dev/api/usage/versioning) for more details.

  ```ts
  string
  ```

#### StorefrontMutations

Maps all the mutations found in the project to variables and return types.



#### AutoAddedVariableNames

```ts
'country' | 'language'
```

#### StorefrontError

* errors

  ```ts
  StorefrontApiErrors
  ```

#### StorefrontApiErrors

```ts
JsonGraphQLError[] | undefined
```

#### JsonGraphQLError

* extensions

  Reserved for implementors to extend the protocol however they see fit, and hence there are no additional restrictions on its contents.

  ```ts
  { [key: string]: unknown; }
  ```

* locations

  If an error can be associated to a particular point in the requested GraphQL document, it should contain a list of locations.

  ```ts
  { line: number; column: number; }[]
  ```

* message

  ```ts
  string
  ```

* name

  ```ts
  string
  ```

* path

  If an error can be associated to a particular field in the GraphQL result, it \_must\_ contain an entry with the key \`path\` that details the path of the response field which experienced the error. This allows clients to identify whether a null result is intentional or caused by a runtime error.

  ```ts
  (string | number)[]
  ```

* stack

  ```ts
  string
  ```

#### StorefrontQueries

Maps all the queries found in the project to variables and return types.



#### StorefrontQueryOptions

```ts
StorefrontCommonExtraParams & {
  query: string;
  mutation?: never;
  cache?: CachingStrategy;
}
```

#### CachingStrategy

Use the \`CachingStrategy\` to define a custom caching mechanism for your data. Or use one of the pre-defined caching strategies: CacheNone, CacheShort, CacheLong.

* maxAge

  The maximum amount of time in seconds that a resource will be considered fresh. See \`max-age\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#:\~:text=Response%20Directives-,max%2Dage,-The%20max%2Dage).

  ```ts
  number
  ```

* mode

  The caching mode, generally \`public\`, \`private\`, or \`no-store\`.

  ```ts
  string
  ```

* sMaxAge

  Similar to \`maxAge\` but specific to shared caches. See \`s-maxage\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#s-maxage).

  ```ts
  number
  ```

* staleIfError

  Indicate that the cache should serve the stale response if an error occurs while revalidating the cache. See \`stale-if-error\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-if-error).

  ```ts
  number
  ```

* staleWhileRevalidate

  Indicate that the cache should serve the stale response in the background while revalidating the cache. See \`stale-while-revalidate\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-while-revalidate).

  ```ts
  number
  ```

#### Headers



#### ShopAnalytics

* acceptedLanguage

  The language code that is being displayed to user.

  ```ts
  LanguageCode
  ```

* currency

  The currency code that is being displayed to user.

  ```ts
  CurrencyCode
  ```

* hydrogenSubchannelId

  The Hydrogen subchannel ID generated by Oxygen in the environment variable.

  ```ts
  string | '0'
  ```

* shopId

  The shop ID.

  ```ts
  string
  ```

#### CurrencyCode

Supports CurrencyCode from both Storefront API and Customer Account API. The APIs may have different CurrencyCode enums (e.g., Customer Account API added USDC in 2025-10, but Storefront API doesn't support USDC in 2025-10). This union type ensures useMoney works with data from either API.

```ts
StorefrontApiCurrencyCode | CustomerAccountApiCurrencyCode
```

Examples

#### Examples

* #### Example

  ##### JavaScript

  ```js
  import {Analytics, getShopAnalytics} from '@shopify/hydrogen';
  import {Outlet, useLoaderData} from 'react-router';

  export async function loader({context}) {
    const {cart, env} = context;
    const cartPromise = cart.get();

    return {
      cart: cartPromise,
      shop: getShopAnalytics({
        storefront: context.storefront,
        publicStorefrontId: env.PUBLIC_STOREFRONT_ID,
      }),
      consent: {
        checkoutDomain: env.PUBLIC_CHECKOUT_DOMAIN,
        storefrontAccessToken: env.PUBLIC_STOREFRONT_API_TOKEN,
        withPrivacyBanner: true, // false stops the privacy banner from being displayed
        // localize the privacy banner
        country: context.storefront.i18n.country,
        language: context.storefront.i18n.language,
      },
    };
  }

  export default function App() {
    const data = useLoaderData();

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
        </head>
        <body>
          <Analytics.Provider
            cart={data.cart}
            shop={data.shop}
            consent={data.consent}
          >
            <Outlet />
          </Analytics.Provider>
        </body>
      </html>
    );
  }
  ```

  ##### TypeScript

  ```ts
  import {Analytics, getShopAnalytics} from '@shopify/hydrogen';
  import {type LoaderFunctionArgs} from 'react-router';
  import {Outlet, useLoaderData} from 'react-router';

  export async function loader({context}: LoaderFunctionArgs) {
    const {cart, env} = context;
    const cartPromise = cart.get();

    return {
      cart: cartPromise,
      shop: getShopAnalytics({
        storefront: context.storefront,
        publicStorefrontId: env.PUBLIC_STOREFRONT_ID,
      }),
      consent: {
        checkoutDomain: env.PUBLIC_CHECKOUT_DOMAIN,
        storefrontAccessToken: env.PUBLIC_STOREFRONT_API_TOKEN,
        withPrivacyBanner: true, // false stops the privacy banner from being displayed
        // localize the privacy banner
        country: context.storefront.i18n.country,
        language: context.storefront.i18n.language,
      },
    };
  }

  export default function App() {
    const data = useLoaderData<typeof loader>();

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
        </head>
        <body>
          <Analytics.Provider
            cart={data.cart}
            shop={data.shop}
            consent={data.consent}
          >
            <Outlet />
          </Analytics.Provider>
        </body>
      </html>
    );
  }
  ```

***

---



<a id="latest-utilities-getshopifycookies"></a>


## getShopifyCookies

Parses cookie string and returns Shopify cookies. For tracking values, consider using `getTrackingValues` instead, which reads from modern Shopify cookies.

### get​Shopify​Cookies(**[cookies](#getshopifycookies-propertydetail-cookies)**​)

Gets the values of \_shopify\_y and \_shopify\_s cookies from the provided cookie string. If the Shopify cookies doesn't exist, this method will return an empty string for each missing cookie.

#### Parameters

* **cookies**

  **string**

  **required**

#### Returns

* **ShopifyCookies**

#### ShopifyCookies

Shopify cookies names

* \_shopify\_s

  Shopify session token: Value of \`\_shopify\_s\` cookie.

  ```ts
  string
  ```

* \_shopify\_y

  Shopify unique user token: Value of \`\_shopify\_y\` cookie.

  ```ts
  string
  ```

##### ShopifyCookies

Shopify cookies names

* **\_shopify\_s**

  **string**

  **required**

  Shopify session token: Value of `_shopify_s` cookie.

* **\_shopify\_y**

  **string**

  **required**

  Shopify unique user token: Value of `_shopify_y` cookie.

Examples

#### Examples

* #### Example code

  ##### JavaScript

  ```jsx
  import * as React from 'react';
  import {useEffect} from 'react';
  import {getShopifyCookies} from '@shopify/hydrogen';

  export default function App({Component, pageProps}) {
    useEffect(() => {
      getShopifyCookies(document.cookie);
    });

    return <Component {...pageProps} />;
  }
  ```

  ##### TypeScript

  ```tsx
  import * as React from 'react';
  import {useEffect} from 'react';
  import {getShopifyCookies} from '@shopify/hydrogen';

  export default function App({Component, pageProps}) {
    useEffect(() => {
      getShopifyCookies(document.cookie);
    });

    return <Component {...pageProps} />;
  }
  ```

***

### Related

[- useShopifyCookies](https://shopify.dev/docs/api/hydrogen/2026-04/hooks/useshopifycookies)

[- getTrackingValues](https://shopify.dev/docs/api/hydrogen/2026-04/utilities/gettrackingvalues)

***

---



<a id="latest-utilities-getsitemap"></a>


## getSitemap

Generate a sitemap for a specific resource type. Returns a standard Response object.

### get​Sitemap(**[options](#getsitemap-propertydetail-options)**​)

Generate a sitemap for a specific resource type.

#### Parameters

* **options**

  **GetSiteMapOptions**

  **required**

#### Returns

* **Promise\<Response>**

#### GetSiteMapOptions

* getChangeFreq

  Optionally customize the changefreq property for each URL

  ```ts
  (options: { type: string; handle: string; }) => string
  ```

* getLink

  A function that produces a canonical url for a resource. It is called multiple times for each locale supported by the app.

  ```ts
  (options: { type: string; baseUrl: string; handle?: string; locale?: string; }) => string
  ```

* locales

  An array of locales to generate alternate tags

  ```ts
  string[]
  ```

* noItemsFallback

  If the sitemap has no links, fallback to rendering a link to the homepage. This prevents errors in Google's search console. Defaults to \`/\`.

  ```ts
  string
  ```

* params

  The params object from Remix

  ```ts
  Params<string>
  ```

* request

  A Remix Request object

  ```ts
  Request
  ```

* storefront

  The Storefront API Client from Hydrogen

  ```ts
  Storefront
  ```

#### Storefront

Interface to interact with the Storefront API.

* cache

  ```ts
  Cache
  ```

* CacheCustom

  ```ts
  (overrideOptions: AllCacheOptions) => AllCacheOptions
  ```

* CacheLong

  ```ts
  (overrideOptions?: AllCacheOptions) => AllCacheOptions
  ```

* CacheNone

  ```ts
  () => NoStoreStrategy
  ```

* CacheShort

  ```ts
  (overrideOptions?: AllCacheOptions) => AllCacheOptions
  ```

* forward

  Forwards the request to the Storefront API. It reads the API version from the request URL.

  ```ts
  (request: Request, options?: Pick<StorefrontCommonExtraParams, "storefrontApiVersion">) => Promise<Response>
  ```

* forwardMcp

  Forwards the request to the Storefront MCP endpoint.

  ```ts
  (request: Request) => Promise<Response>
  ```

* generateCacheControlHeader

  ```ts
  (cacheOptions: AllCacheOptions) => string
  ```

* getApiUrl

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "storefrontApiVersion" | "storeDomain">>) => string
  ```

* getHeaders

  ```ts
  () => Record<string, string>
  ```

* getPrivateTokenHeaders

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "contentType">> & Pick<StorefrontClientProps, "privateStorefrontToken"> & { buyerIp?: string; }) => Record<string, string>
  ```

* getPublicTokenHeaders

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "contentType">> & Pick<StorefrontClientProps, "publicStorefrontToken">) => Record<string, string>
  ```

* getShopifyDomain

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "storeDomain">>) => string
  ```

* i18n

  ```ts
  TI18n
  ```

* isMcpUrl

  Checks if the request URL matches the Storefront MCP endpoint.

  ```ts
  (request: { url?: string; }) => boolean
  ```

* isStorefrontApiUrl

  Checks if the request URL matches the Storefront API GraphQL endpoint.

  ```ts
  (request: { url?: string; }) => boolean
  ```

* mutate

  ```ts
  <
      OverrideReturnType extends any = never,
      RawGqlString extends string = string,
    >(
      mutation: RawGqlString,
      ...options: ClientVariablesInRestParams<
        StorefrontMutations,
        RawGqlString,
        StorefrontCommonExtraParams,
        AutoAddedVariableNames
      >
    ) => Promise<
      ClientReturn<StorefrontMutations, RawGqlString, OverrideReturnType> &
        StorefrontError
    >
  ```

* query

  ```ts
  <
      OverrideReturnType extends any = never,
      RawGqlString extends string = string,
    >(
      query: RawGqlString,
      ...options: ClientVariablesInRestParams<
        StorefrontQueries,
        RawGqlString,
        StorefrontCommonExtraParams & Pick<StorefrontQueryOptions, 'cache'>,
        AutoAddedVariableNames
      >
    ) => Promise<
      ClientReturn<StorefrontQueries, RawGqlString, OverrideReturnType> &
        StorefrontError
    >
  ```

* setCollectedSubrequestHeaders

  Sets the collected subrequest headers in the response. Useful to forward the cookies and server-timing headers from server subrequests to the browser.

  ```ts
  (response: { headers: Headers; }) => void
  ```

#### AllCacheOptions

Override options for a cache strategy.

* maxAge

  The maximum amount of time in seconds that a resource will be considered fresh. See \`max-age\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#:\~:text=Response%20Directives-,max%2Dage,-The%20max%2Dage).

  ```ts
  number
  ```

* mode

  The caching mode, generally \`public\`, \`private\`, or \`no-store\`.

  ```ts
  string
  ```

* sMaxAge

  Similar to \`maxAge\` but specific to shared caches. See \`s-maxage\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#s-maxage).

  ```ts
  number
  ```

* staleIfError

  Indicate that the cache should serve the stale response if an error occurs while revalidating the cache. See \`stale-if-error\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-if-error).

  ```ts
  number
  ```

* staleWhileRevalidate

  Indicate that the cache should serve the stale response in the background while revalidating the cache. See \`stale-while-revalidate\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-while-revalidate).

  ```ts
  number
  ```

#### NoStoreStrategy

* mode

  ```ts
  string
  ```

#### StorefrontCommonExtraParams

* displayName

  ```ts
  string
  ```

* headers

  ```ts
  HeadersInit
  ```

* storefrontApiVersion

  ```ts
  string
  ```

#### StorefrontClientProps

* contentType

  Customizes which \`"content-type"\` header is added when using \`getPrivateTokenHeaders()\` and \`getPublicTokenHeaders()\`. When fetching with a \`JSON.stringify()\`-ed \`body\`, use \`"json"\`. When fetching with a \`body\` that is a plain string, use \`"graphql"\`. Defaults to \`"json"\` Can also be customized on a call-by-call basis by passing in \`'contentType'\` to both \`getPrivateTokenHeaders({...})\` and \`getPublicTokenHeaders({...})\`, for example: \`getPublicTokenHeaders({contentType: 'graphql'})\`

  ```ts
  'json' | 'graphql'
  ```

* privateStorefrontToken

  The Storefront API delegate access token. Refer to the \[authentication]\(https://shopify.dev/api/storefront#authentication) and \[delegate access token]\(https://shopify.dev/apps/auth/oauth/delegate-access-tokens) documentation for more details.

  ```ts
  string
  ```

* publicStorefrontToken

  The Storefront API access token. Refer to the \[authentication]\(https://shopify.dev/api/storefront#authentication) documentation for more details.

  ```ts
  string
  ```

* storeDomain

  The host name of the domain (eg: \`{shop}.myshopify.com\`).

  ```ts
  string
  ```

* storefrontApiVersion

  The Storefront API version. This should almost always be the same as the version Hydrogen React was built for. Learn more about Shopify \[API versioning]\(https://shopify.dev/api/usage/versioning) for more details.

  ```ts
  string
  ```

#### StorefrontMutations

Maps all the mutations found in the project to variables and return types.



#### AutoAddedVariableNames

```ts
'country' | 'language'
```

#### StorefrontError

* errors

  ```ts
  StorefrontApiErrors
  ```

#### StorefrontApiErrors

```ts
JsonGraphQLError[] | undefined
```

#### JsonGraphQLError

* extensions

  Reserved for implementors to extend the protocol however they see fit, and hence there are no additional restrictions on its contents.

  ```ts
  { [key: string]: unknown; }
  ```

* locations

  If an error can be associated to a particular point in the requested GraphQL document, it should contain a list of locations.

  ```ts
  { line: number; column: number; }[]
  ```

* message

  ```ts
  string
  ```

* name

  ```ts
  string
  ```

* path

  If an error can be associated to a particular field in the GraphQL result, it \_must\_ contain an entry with the key \`path\` that details the path of the response field which experienced the error. This allows clients to identify whether a null result is intentional or caused by a runtime error.

  ```ts
  (string | number)[]
  ```

* stack

  ```ts
  string
  ```

#### StorefrontQueries

Maps all the queries found in the project to variables and return types.



#### StorefrontQueryOptions

```ts
StorefrontCommonExtraParams & {
  query: string;
  mutation?: never;
  cache?: CachingStrategy;
}
```

#### CachingStrategy

Use the \`CachingStrategy\` to define a custom caching mechanism for your data. Or use one of the pre-defined caching strategies: CacheNone, CacheShort, CacheLong.

* maxAge

  The maximum amount of time in seconds that a resource will be considered fresh. See \`max-age\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#:\~:text=Response%20Directives-,max%2Dage,-The%20max%2Dage).

  ```ts
  number
  ```

* mode

  The caching mode, generally \`public\`, \`private\`, or \`no-store\`.

  ```ts
  string
  ```

* sMaxAge

  Similar to \`maxAge\` but specific to shared caches. See \`s-maxage\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#s-maxage).

  ```ts
  number
  ```

* staleIfError

  Indicate that the cache should serve the stale response if an error occurs while revalidating the cache. See \`stale-if-error\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-if-error).

  ```ts
  number
  ```

* staleWhileRevalidate

  Indicate that the cache should serve the stale response in the background while revalidating the cache. See \`stale-while-revalidate\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-while-revalidate).

  ```ts
  number
  ```

#### Headers



Examples

#### Examples

* #### Example code

  ##### JavaScript

  ```js
  import {getSitemap} from '@shopify/hydrogen';

  export async function loader({request, params, context: {storefront}}) {
    const response = await getSitemap({
      storefront,
      request,
      params,
      // The locales to include in the sitemap
      locales: ['EN-US', 'EN-CA', 'FR-CA'],
      // A function to generate a link for a given resource
      getLink: ({type, baseUrl, handle, locale}) => {
        if (!locale) return `${baseUrl}/${type}/${handle}`;
        return `${baseUrl}/${locale}/${type}/${handle}`;
      },
    });

    // Set any custom headers on the sitemap response
    response.headers.set('Cache-Control', `max-age=${60 * 60 * 24}`);

    return response;
  }
  ```

  ##### TypeScript

  ```ts
  import type {LoaderFunctionArgs} from 'react-router';
  import {getSitemap} from '@shopify/hydrogen';

  export async function loader({
    request,
    params,
    context: {storefront},
  }: LoaderFunctionArgs) {
    const response = await getSitemap({
      storefront,
      request,
      params,
      // The locales to include in the sitemap
      locales: ['EN-US', 'EN-CA', 'FR-CA'],
      // A function to generate a link for a given resource
      getLink: ({type, baseUrl, handle, locale}) => {
        if (!locale) return `${baseUrl}/${type}/${handle}`;
        return `${baseUrl}/${locale}/${type}/${handle}`;
      },
    });

    // Set any custom headers on the sitemap response
    response.headers.set('Cache-Control', `max-age=${60 * 60 * 24}`);

    return response;
  }
  ```

***

### Related

[- getSitemapIndex](https://shopify.dev/docs/api/hydrogen/2026-04/utilities/getsitemapindex)

***

---



<a id="latest-utilities-getsitemapindex"></a>


## getSitemapIndex

Generate a sitemap index that links to separate child sitemaps for different resource types. Returns a standard Response object.

### get​Sitemap​Index(**[options](#getsitemapindex-propertydetail-options)**​)

Generate a sitemap index that links to separate sitemaps for each resource type. Returns a standard Response object.

#### Parameters

* **options**

  **SitemapIndexOptions**

  **required**

#### Returns

* **Promise\<Response>**

#### SitemapIndexOptions

* customChildSitemaps

  Add a URL to a custom child sitemap

  ```ts
  string[]
  ```

* request

  A Remix Request object

  ```ts
  Request
  ```

* storefront

  The Storefront API Client from Hydrogen

  ```ts
  Storefront
  ```

* types

  The types of pages to include in the sitemap index.

  ```ts
  SITEMAP_INDEX_TYPE[]
  ```

#### Storefront

Interface to interact with the Storefront API.

* cache

  ```ts
  Cache
  ```

* CacheCustom

  ```ts
  (overrideOptions: AllCacheOptions) => AllCacheOptions
  ```

* CacheLong

  ```ts
  (overrideOptions?: AllCacheOptions) => AllCacheOptions
  ```

* CacheNone

  ```ts
  () => NoStoreStrategy
  ```

* CacheShort

  ```ts
  (overrideOptions?: AllCacheOptions) => AllCacheOptions
  ```

* forward

  Forwards the request to the Storefront API. It reads the API version from the request URL.

  ```ts
  (request: Request, options?: Pick<StorefrontCommonExtraParams, "storefrontApiVersion">) => Promise<Response>
  ```

* forwardMcp

  Forwards the request to the Storefront MCP endpoint.

  ```ts
  (request: Request) => Promise<Response>
  ```

* generateCacheControlHeader

  ```ts
  (cacheOptions: AllCacheOptions) => string
  ```

* getApiUrl

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "storefrontApiVersion" | "storeDomain">>) => string
  ```

* getHeaders

  ```ts
  () => Record<string, string>
  ```

* getPrivateTokenHeaders

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "contentType">> & Pick<StorefrontClientProps, "privateStorefrontToken"> & { buyerIp?: string; }) => Record<string, string>
  ```

* getPublicTokenHeaders

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "contentType">> & Pick<StorefrontClientProps, "publicStorefrontToken">) => Record<string, string>
  ```

* getShopifyDomain

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "storeDomain">>) => string
  ```

* i18n

  ```ts
  TI18n
  ```

* isMcpUrl

  Checks if the request URL matches the Storefront MCP endpoint.

  ```ts
  (request: { url?: string; }) => boolean
  ```

* isStorefrontApiUrl

  Checks if the request URL matches the Storefront API GraphQL endpoint.

  ```ts
  (request: { url?: string; }) => boolean
  ```

* mutate

  ```ts
  <
      OverrideReturnType extends any = never,
      RawGqlString extends string = string,
    >(
      mutation: RawGqlString,
      ...options: ClientVariablesInRestParams<
        StorefrontMutations,
        RawGqlString,
        StorefrontCommonExtraParams,
        AutoAddedVariableNames
      >
    ) => Promise<
      ClientReturn<StorefrontMutations, RawGqlString, OverrideReturnType> &
        StorefrontError
    >
  ```

* query

  ```ts
  <
      OverrideReturnType extends any = never,
      RawGqlString extends string = string,
    >(
      query: RawGqlString,
      ...options: ClientVariablesInRestParams<
        StorefrontQueries,
        RawGqlString,
        StorefrontCommonExtraParams & Pick<StorefrontQueryOptions, 'cache'>,
        AutoAddedVariableNames
      >
    ) => Promise<
      ClientReturn<StorefrontQueries, RawGqlString, OverrideReturnType> &
        StorefrontError
    >
  ```

* setCollectedSubrequestHeaders

  Sets the collected subrequest headers in the response. Useful to forward the cookies and server-timing headers from server subrequests to the browser.

  ```ts
  (response: { headers: Headers; }) => void
  ```

#### AllCacheOptions

Override options for a cache strategy.

* maxAge

  The maximum amount of time in seconds that a resource will be considered fresh. See \`max-age\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#:\~:text=Response%20Directives-,max%2Dage,-The%20max%2Dage).

  ```ts
  number
  ```

* mode

  The caching mode, generally \`public\`, \`private\`, or \`no-store\`.

  ```ts
  string
  ```

* sMaxAge

  Similar to \`maxAge\` but specific to shared caches. See \`s-maxage\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#s-maxage).

  ```ts
  number
  ```

* staleIfError

  Indicate that the cache should serve the stale response if an error occurs while revalidating the cache. See \`stale-if-error\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-if-error).

  ```ts
  number
  ```

* staleWhileRevalidate

  Indicate that the cache should serve the stale response in the background while revalidating the cache. See \`stale-while-revalidate\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-while-revalidate).

  ```ts
  number
  ```

#### NoStoreStrategy

* mode

  ```ts
  string
  ```

#### StorefrontCommonExtraParams

* displayName

  ```ts
  string
  ```

* headers

  ```ts
  HeadersInit
  ```

* storefrontApiVersion

  ```ts
  string
  ```

#### StorefrontClientProps

* contentType

  Customizes which \`"content-type"\` header is added when using \`getPrivateTokenHeaders()\` and \`getPublicTokenHeaders()\`. When fetching with a \`JSON.stringify()\`-ed \`body\`, use \`"json"\`. When fetching with a \`body\` that is a plain string, use \`"graphql"\`. Defaults to \`"json"\` Can also be customized on a call-by-call basis by passing in \`'contentType'\` to both \`getPrivateTokenHeaders({...})\` and \`getPublicTokenHeaders({...})\`, for example: \`getPublicTokenHeaders({contentType: 'graphql'})\`

  ```ts
  'json' | 'graphql'
  ```

* privateStorefrontToken

  The Storefront API delegate access token. Refer to the \[authentication]\(https://shopify.dev/api/storefront#authentication) and \[delegate access token]\(https://shopify.dev/apps/auth/oauth/delegate-access-tokens) documentation for more details.

  ```ts
  string
  ```

* publicStorefrontToken

  The Storefront API access token. Refer to the \[authentication]\(https://shopify.dev/api/storefront#authentication) documentation for more details.

  ```ts
  string
  ```

* storeDomain

  The host name of the domain (eg: \`{shop}.myshopify.com\`).

  ```ts
  string
  ```

* storefrontApiVersion

  The Storefront API version. This should almost always be the same as the version Hydrogen React was built for. Learn more about Shopify \[API versioning]\(https://shopify.dev/api/usage/versioning) for more details.

  ```ts
  string
  ```

#### StorefrontMutations

Maps all the mutations found in the project to variables and return types.



#### AutoAddedVariableNames

```ts
'country' | 'language'
```

#### StorefrontError

* errors

  ```ts
  StorefrontApiErrors
  ```

#### StorefrontApiErrors

```ts
JsonGraphQLError[] | undefined
```

#### JsonGraphQLError

* extensions

  Reserved for implementors to extend the protocol however they see fit, and hence there are no additional restrictions on its contents.

  ```ts
  { [key: string]: unknown; }
  ```

* locations

  If an error can be associated to a particular point in the requested GraphQL document, it should contain a list of locations.

  ```ts
  { line: number; column: number; }[]
  ```

* message

  ```ts
  string
  ```

* name

  ```ts
  string
  ```

* path

  If an error can be associated to a particular field in the GraphQL result, it \_must\_ contain an entry with the key \`path\` that details the path of the response field which experienced the error. This allows clients to identify whether a null result is intentional or caused by a runtime error.

  ```ts
  (string | number)[]
  ```

* stack

  ```ts
  string
  ```

#### StorefrontQueries

Maps all the queries found in the project to variables and return types.



#### StorefrontQueryOptions

```ts
StorefrontCommonExtraParams & {
  query: string;
  mutation?: never;
  cache?: CachingStrategy;
}
```

#### CachingStrategy

Use the \`CachingStrategy\` to define a custom caching mechanism for your data. Or use one of the pre-defined caching strategies: CacheNone, CacheShort, CacheLong.

* maxAge

  The maximum amount of time in seconds that a resource will be considered fresh. See \`max-age\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#:\~:text=Response%20Directives-,max%2Dage,-The%20max%2Dage).

  ```ts
  number
  ```

* mode

  The caching mode, generally \`public\`, \`private\`, or \`no-store\`.

  ```ts
  string
  ```

* sMaxAge

  Similar to \`maxAge\` but specific to shared caches. See \`s-maxage\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#s-maxage).

  ```ts
  number
  ```

* staleIfError

  Indicate that the cache should serve the stale response if an error occurs while revalidating the cache. See \`stale-if-error\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-if-error).

  ```ts
  number
  ```

* staleWhileRevalidate

  Indicate that the cache should serve the stale response in the background while revalidating the cache. See \`stale-while-revalidate\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-while-revalidate).

  ```ts
  number
  ```

#### Headers



Examples

#### Examples

* #### Example code

  ##### JavaScript

  ```js
  import {getSitemapIndex} from '@shopify/hydrogen';

  export async function loader({request, context: {storefront}}) {
    const response = await getSitemapIndex({
      storefront,
      request,
      types: [
        'products',
        'pages',
        'collections',
        'metaObjects',
        'articles',
        'blogs',
      ],
    });

    // Set any custom headers on the sitemap response
    response.headers.set('Cache-Control', `max-age=${60 * 60 * 24}`);

    return response;
  }
  ```

  ##### TypeScript

  ```ts
  import type {LoaderFunctionArgs} from 'react-router';
  import {getSitemapIndex} from '@shopify/hydrogen';

  export async function loader({
    request,
    context: {storefront},
  }: LoaderFunctionArgs) {
    const response = await getSitemapIndex({
      storefront,
      request,
      types: [
        'products',
        'pages',
        'collections',
        'metaObjects',
        'articles',
        'blogs',
      ],
    });

    // Set any custom headers on the sitemap response
    response.headers.set('Cache-Control', `max-age=${60 * 60 * 24}`);

    return response;
  }
  ```

***

### Related

[- getSitemap](https://shopify.dev/docs/api/hydrogen/2026-04/utilities/getsitemap)

***

---



<a id="latest-utilities-gettrackingvalues"></a>


## getTrackingValues

Retrieves user session tracking values for analytics and marketing from the browser environment. It reads from `server-timing` headers in Storefront API responses and falls back to deprecated cookies for backward compatibility.

### get​Tracking​Values()

Retrieves user session tracking values for analytics and marketing from the browser environment.

#### Returns

* **TrackingValues**

#### TrackingValues

* consent

  Represents the consent given by the user or the default region consent configured in Admin

  ```ts
  string
  ```

* uniqueToken

  Identifier for the unique user. Equivalent to the deprecated \_shopify\_y cookie

  ```ts
  string
  ```

* visitToken

  Identifier for the current visit. Equivalent to the deprecated \_shopify\_s cookie

  ```ts
  string
  ```

Examples

#### Examples

* #### Example code

  ##### JavaScript

  ```jsx
  import {getTrackingValues} from '@shopify/hydrogen';

  export function sendCustomAnalyticsEvent(eventName) {
    const {uniqueToken, visitToken} = getTrackingValues();

    // Use tracking values in your custom analytics implementation
    fetch('/api/analytics', {
      method: 'POST',
      body: JSON.stringify({
        event: eventName,
        uniqueToken,
        visitToken,
      }),
    });
  }
  ```

  ##### TypeScript

  ```tsx
  import {getTrackingValues} from '@shopify/hydrogen';

  export function sendCustomAnalyticsEvent(eventName: string) {
    const {uniqueToken, visitToken} = getTrackingValues();

    // Use tracking values in your custom analytics implementation
    fetch('/api/analytics', {
      method: 'POST',
      body: JSON.stringify({
        event: eventName,
        uniqueToken,
        visitToken,
      }),
    });
  }
  ```

***

### Related

[- useShopifyCookies](https://shopify.dev/docs/api/hydrogen/2026-04/hooks/useshopifycookies)

[- getShopifyCookies](https://shopify.dev/docs/api/hydrogen/2026-04/utilities/getshopifycookies)

***

---



<a id="latest-utilities-graphiqlloader"></a>


## graphiqlLoader

This function creates an instance of [GraphiQL](https://graphql.org/swapi-graphql) in your Hydrogen app when running on a development server. This enables you to explore, write, and test GraphQL queries using your store's live data from the Storefront API. You can visit the GraphiQL app at your storefront route /graphiql. Learn more about [using GraphiQL in Hydrogen](https://shopify.dev/docs/custom-storefronts/hydrogen/data-fetching/graphiql).

### Arguments(**[args](#arguments-propertydetail-args)**​)

#### Parameters

* **args**

  **LoaderFunctionArgs**

  **required**

#### Returns

* **Promise\<Response>**

Examples

#### Examples

* #### Example code

  ##### JavaScript

  ```js
  import {graphiqlLoader} from '@shopify/hydrogen';
  import {redirect} from 'react-router';

  export async function loader(args) {
    if (process.env.NODE_ENV === 'development') {
      return graphiqlLoader(args);
    }

    return redirect('/');
  }
  ```

  ##### TypeScript

  ```ts
  import {graphiqlLoader} from '@shopify/hydrogen';
  import {redirect, type LoaderFunctionArgs} from 'react-router';

  export async function loader(args: LoaderFunctionArgs) {
    if (process.env.NODE_ENV === 'development') {
      return graphiqlLoader(args);
    }

    return redirect('/');
  }
  ```

***

---



<a id="latest-utilities-hydrogencontext"></a>


## hydrogenContext

A grouped export of all Hydrogen context keys for use with React Router's `context.get()` pattern. This enables type-safe access to Hydrogen services in loaders, actions, and middleware.

The proxy-based implementation in `createHydrogenContext` supports both direct property access and the `context.get()` pattern, giving you flexibility in how you access Hydrogen services.

Examples

#### Examples

* #### Using hydrogenContext

  ##### Description

  Using hydrogenContext with context.get() in a loader

  ##### JavaScript

  ```js
  import {hydrogenContext} from '@shopify/hydrogen';

  export async function loader({context}) {
    // Access services using the grouped hydrogenContext object
    const storefront = context.get(hydrogenContext.storefront);
    const cart = context.get(hydrogenContext.cart);
    const customerAccount = context.get(hydrogenContext.customerAccount);
    const env = context.get(hydrogenContext.env);
    const session = context.get(hydrogenContext.session);
    const waitUntil = context.get(hydrogenContext.waitUntil);

    // Use the services as needed
    const {product} = await storefront.query(
      `#graphql
        query Product($handle: String!) {
          product(handle: $handle) {
            title
            handle
          }
        }
      `,
      {
        variables: {handle: 'example-product'},
      },
    );

    return {product};
  }

  export async function action({context, request}) {
    // Access only the services you need
    const cart = context.get(hydrogenContext.cart);
    const session = context.get(hydrogenContext.session);

    const formData = await request.formData();
    const lines = formData.get('lines');

    // Add items to cart
    const result = await cart.addLines(lines);

    // Update session if needed
    session.set('cartId', result.cart.id);

    return {cart: result};
  }
  ```

  ##### TypeScript

  ```ts
  // Import from local files to get proper types
  import {hydrogenContext} from './context-keys';
  import type {HydrogenRouterContextProvider} from './types';

  // These examples show how to use hydrogenContext with React Router's context.get() pattern
  // In a real app, you would import from '@shopify/hydrogen' and have proper type augmentation

  // Example loader using context.get() pattern
  export async function loader({
    context,
  }: {
    context: HydrogenRouterContextProvider;
  }) {
    // Access services using the grouped hydrogenContext object
    const storefront = context.get(hydrogenContext.storefront);
    const cart = context.get(hydrogenContext.cart);
    const customerAccount = context.get(hydrogenContext.customerAccount);
    const env = context.get(hydrogenContext.env);
    const session = context.get(hydrogenContext.session);
    const waitUntil = context.get(hydrogenContext.waitUntil);

    // Use the services as needed
    const {product} = await storefront.query(
      `#graphql
        query Product($handle: String!) {
          product(handle: $handle) {
            title
            handle
          }
        }
      `,
      {
        variables: {handle: 'example-product'},
      },
    );

    return {product};
  }

  // Example action using context.get() pattern
  export async function action({
    context,
    request,
  }: {
    context: HydrogenRouterContextProvider;
    request: Request;
  }) {
    // Access only the services you need
    const cart = context.get(hydrogenContext.cart);
    const session = context.get(hydrogenContext.session);

    const formData = await request.formData();
    const lines = formData.get('lines');

    // Add items to cart
    const result = await cart.addLines(lines as any);

    // Update session if needed
    session.set('cartId', result.cart.id);

    return {cart: result};
  }

  // Example showing both patterns work
  export async function hybridExample({
    context,
  }: {
    context: HydrogenRouterContextProvider;
  }) {
    // Pattern 1: Direct property access (existing pattern)
    const directStorefront = context.storefront;
    const directCart = context.cart;

    // Pattern 2: context.get() with hydrogenContext (new pattern)
    const viaGetStorefront = context.get(hydrogenContext.storefront);
    const viaGetCart = context.get(hydrogenContext.cart);

    // Both patterns return the same instances
    console.assert(
      directStorefront === viaGetStorefront,
      'Both patterns access same storefront',
    );
    console.assert(directCart === viaGetCart, 'Both patterns access same cart');

    return {success: true};
  }
  ```

***

### Related

[- createHydrogenContext](https://shopify.dev/docs/api/hydrogen/2026-04/utilities/createhydrogencontext)

***

---



<a id="latest-utilities-isoptionvaluecombinationinencodedvariant"></a>


## isOptionValueCombinationInEncodedVariant

Determines whether an option value combination is present in an encoded option value string.

`targetOptionValueCombination` - Indices of option values to look up in the encoded option value string. A partial set of indices may be passed to determine whether a node or any children is present. For example, if a product has 3 options, passing `[0]` will return true if any option value combination for the first option's option value is present in the encoded string.

### Props(**[targetOptionValueCombination](#props-propertydetail-targetoptionvaluecombination)**​,**[encodedVariantField](#props-propertydetail-encodedvariantfield)**​)

#### Parameters

* **targetOptionValueCombination**

  **number\[]**

  **required**

* **encodedVariantField**

  **string**

  **required**

#### Returns**boolean**

Examples

#### Examples

* ####

  ##### Description

  Check if option value is in encoding

  ##### JavaScript

  ```js
  import {isOptionValueCombinationInEncodedVariant} from '@shopify/hydrogen';

  // product.options = [
  //   {
  //     name: 'Color',
  //     optionValues: [
  //       {name: 'Red'},
  //       {name: 'Blue'},
  //       {name: 'Green'},
  //     ]
  //   },
  //   {
  //     name: 'Size',
  //     optionValues: [
  //       {name: 'S'},
  //       {name: 'M'},
  //       {name: 'L'},
  //     ]
  //   }
  // ]
  const encodedVariantExistence = 'v1_0:0-1,1:2,';

  // For reference: decoded encodedVariantExistence
  // {
  //   [0,0],    // Red, S
  //   [0,1],    // Red, M
  //   [1,2]     // Blue, L
  // }

  // Returns true since there are variants exist for [Red]
  isOptionValueCombinationInEncodedVariant([0], encodedVariantExistence); // true

  isOptionValueCombinationInEncodedVariant([0, 0], encodedVariantExistence); // true
  isOptionValueCombinationInEncodedVariant([0, 1], encodedVariantExistence); // true
  isOptionValueCombinationInEncodedVariant([0, 2], encodedVariantExistence); // false - no variant exist for [Red, L]

  // Returns true since there is a variant exist for [Blue]
  isOptionValueCombinationInEncodedVariant([1], encodedVariantExistence); // true

  isOptionValueCombinationInEncodedVariant([1, 0], encodedVariantExistence); // false - no variant exist for [Blue, S]
  isOptionValueCombinationInEncodedVariant([1, 1], encodedVariantExistence); // false - no variant exist for [Blue, M]
  isOptionValueCombinationInEncodedVariant([1, 2], encodedVariantExistence); // true

  // Returns false since there is no variant exist for [Green]
  isOptionValueCombinationInEncodedVariant([2], encodedVariantExistence); // false
  ```

***

### Related

[- decodeEncodedVariant](https://shopify.dev/docs/api/hydrogen/2026-04/utilities/decodeencodedvariant)

***

---



<a id="latest-utilities-mapselectedproductoptiontoobject"></a>


## mapSelectedProductOptionToObject

Converts the product selected option into an `Object<key, value>` format for building URL query params

Examples

#### Examples

* ####

  ##### mapSelectedProductOptionToObject example

  ```js
  import {mapSelectedProductOptionToObject} from '@shopify/hydrogen';

  const selectedOption = [
    {
      name: 'Color',
      value: 'Red',
    },
    {
      name: 'Size',
      value: 'Medium',
    },
  ];

  const optionsObject = mapSelectedProductOptionToObject(selectedOption);

  // Output of optionsObject
  // {
  //   Color: 'Red',
  //   Size: 'Medium',
  // }

  const searchParams = new URLSearchParams(optionsObject);
  searchParams.toString(); // '?Color=Red&Size=Medium'
  ```

***

### Related

[- getProductOptions](https://shopify.dev/docs/api/hydrogen/2026-04/utilities/getproductoptions)

[- getAdjacentAndFirstAvailableVariants](https://shopify.dev/docs/api/hydrogen/2026-04/utilities/getadjacentandfirstavailablevariants)

[- useSelectedOptionInUrlParam](https://shopify.dev/docs/api/hydrogen/2026-04/utilities/useselectedoptioninurlparam)

***

---



<a id="latest-utilities-parsegid"></a>


## parseGid

Parses [Shopify Global ID (GID)](https://shopify.dev/api/usage/gids) and returns the resource type and ID.

### parse​Gid(**[gid](#props-propertydetail-gid)**​)

Parses global id (gid) and returns the resource type and id.

#### Parameters

* **gid**

  **string**

  **required**

  A shopify GID (string)

#### Returns

* **ShopifyGid**

#### ShopifyGid

```ts
Pick<URL, 'search' | 'searchParams' | 'hash'> & {
  id: string;
  resource: string | null;
  resourceId: string | null;
}
```

Examples

#### Examples

* ####

  ##### JavaScript

  ```js
  import {parseGid} from '@shopify/hydrogen';

  const {id, resource} = parseGid('gid://shopify/Order/123');

  console.log(id); // 123
  console.log(resource); // Order
  ```

***

---



<a id="latest-utilities-parsemetafield"></a>


## parseMetafield

A function that uses `metafield.type` to parse the Metafield's `value` or `reference` or `references` (depending on the `metafield.type`) and places the result in `metafield.parsedValue`.

### parse​Metafield(**[metafield](#props-propertydetail-metafield)**​)

Use the `ParsedMetafields` type as the returned type of `parseMetafield(metafield)`

#### Parameters

* **metafield**

  **{ id?: string; \_\_typename?: "Metafield"; createdAt?: string; description?: string; key?: string; namespace?: string; parentResource?: { metafield?: { id?: string; \_\_typename?: "Metafield"; createdAt?: string; ... 8 more ...; value?: string; }; ... 29 more ...; weightUnit?: WeightUnit; } | ... 13 more ... | { ...; };...**

  **required**

#### Returns

* **ReturnGeneric**

Examples

#### Examples

* #### Example code

  ##### JavaScript

  ```jsx
  import {parseMetafield} from '@shopify/hydrogen';

  export function DateMetafield({metafield}) {
    const parsedMetafield = parseMetafield(metafield);

    return <div>Date: {parsedMetafield.parsedValue?.toDateString()}</div>;
  }

  export function VariantReferenceMetafield({metafield}) {
    const parsedMetafield = parseMetafield(metafield);

    return <div>Variant title: {parsedMetafield.parsedValue?.title}</div>;
  }

  export function ListCollectionReferenceMetafield({metafield}) {
    const parsedMetafield = parseMetafield(metafield);

    return (
      <div>
        The first collection title: {parsedMetafield.parsedValue?.[0].title}
      </div>
    );
  }
  ```

  ##### TypeScript

  ```tsx
  import {parseMetafield, type ParsedMetafields} from '@shopify/hydrogen';
  import type {Metafield} from '@shopify/hydrogen/storefront-api-types';

  export function DateMetafield({metafield}: {metafield: Metafield}) {
    const parsedMetafield = parseMetafield<ParsedMetafields['date']>(metafield);

    return <div>Date: {parsedMetafield.parsedValue?.toDateString()}</div>;
  }

  export function VariantReferenceMetafield({metafield}: {metafield: Metafield}) {
    const parsedMetafield =
      parseMetafield<ParsedMetafields['variant_reference']>(metafield);

    return <div>Variant title: {parsedMetafield.parsedValue?.title}</div>;
  }

  export function ListCollectionReferenceMetafield({
    metafield,
  }: {
    metafield: Metafield;
  }) {
    const parsedMetafield =
      parseMetafield<ParsedMetafields['list.collection_reference']>(metafield);

    return (
      <div>
        The first collection title: {parsedMetafield.parsedValue?.[0].title}
      </div>
    );
  }
  ```

***

---



<a id="latest-utilities-sendshopifyanalytics"></a>


## sendShopifyAnalytics

Sends analytics to Shopify.

### send​Shopify​Analytics(**[event](#sendshopifyanalytics-propertydetail-event)**​,**[shopDomain](#sendshopifyanalytics-propertydetail-shopdomain)**​)

Set user and session cookies and refresh the expiry time. If `event.payload.hasUserConsent` is false, no analytics event will happen.

#### Parameters

* **event**

  **ShopifyAnalytics**

  **required**

  The analytics event.

* **shopDomain**

  **string**

  The Online Store domain to sent Shopify analytics under the same top level domain.

#### Returns

* **Promise\<void>**

#### ShopifyAnalytics

```ts
ShopifyPageView | ShopifyAddToCart
```

#### ShopifyPageView

* eventName

  Use \`AnalyticsEventName.PAGE\_VIEW\` constant.

  ```ts
  string
  ```

* payload

  ```ts
  ShopifyPageViewPayload
  ```

#### ShopifyPageViewPayload

* acceptedLanguage

  Language displayed to buyer.

  ```ts
  LanguageCode
  ```

* analyticsAllowed

  Result of \`customerPrivacyApi.analyticsProcessingAllowed()\`

  ```ts
  boolean
  ```

* assetVersionId

  NPM package version of either hydrogen or hydrogen-react. Defaults to hydrogen-react package version.

  ```ts
  string
  ```

* canonicalUrl

  Canonical url.

  ```ts
  string
  ```

* collectionHandle

  Shopify collection handle.

  ```ts
  string
  ```

* collectionId

  Shopify collection id.

  ```ts
  string
  ```

* currency

  Currency code.

  ```ts
  CurrencyCode
  ```

* customerId

  Shopify customer id in the form of \`gid://shopify/Customer/\<id>\`.

  ```ts
  string
  ```

* hasUserConsent

  If we have consent from buyer for data collection

  ```ts
  boolean
  ```

* hydrogenSubchannelId

  Alternative name for Shopify storefront id generated by Hydrogen sales channel. The value of env.PUBLIC\_STOREFRONT\_ID.

  ```ts
  string
  ```

* marketingAllowed

  Result of \`customerPrivacyApi.marketingAllowed()\`

  ```ts
  boolean
  ```

* navigationApi

  Navigation api: \`'PerformanceNavigationTiming' | 'performance.navigation'\`. Use \`getClientBrowserParameters()\` to collect this value.

  ```ts
  string
  ```

* navigationType

  Navigation type: \`'navigate' | 'reload' | 'back\_forward' | 'prerender' | 'unknown'\`. Use \`getClientBrowserParameters()\` to collect this value.

  ```ts
  string
  ```

* pageType

  Shopify page type.

  ```ts
  string
  ```

* path

  Value of \`window\.location.pathname\`. Use \`getClientBrowserParameters()\` to collect this value.

  ```ts
  string
  ```

* products

  Product list.

  ```ts
  ShopifyAnalyticsProduct[]
  ```

* referrer

  Value of \`window\.document.referrer\`. Use \`getClientBrowserParameters()\` to collect this value.

  ```ts
  string
  ```

* resourceId

  Shopify resource id in the form of \`gid://shopify/\<type>/\<id>\`.

  ```ts
  string
  ```

* saleOfDataAllowed

  Result of \`customerPrivacyApi.saleOfDataAllowed()\`

  ```ts
  boolean
  ```

* search

  Value of \`window\.location.search\`. Use \`getClientBrowserParameters()\` to collect this value.

  ```ts
  string
  ```

* searchString

  Search term used on a search results page.

  ```ts
  string
  ```

* shopId

  Shopify shop id in the form of \`gid://shopify/Shop/\<id>\`.

  ```ts
  string
  ```

* shopifySalesChannel

  Shopify sales channel.

  ```ts
  ShopifySalesChannels
  ```

* storefrontId

  Shopify storefront id generated by Hydrogen sales channel. The value of env.PUBLIC\_STOREFRONT\_ID.

  ```ts
  string
  ```

* title

  Value of \`document.title\`. Use \`getClientBrowserParameters()\` to collect this value.

  ```ts
  string
  ```

* totalValue

  Total value of products.

  ```ts
  number
  ```

* uniqueToken

  Shopify unique user token: Value of \`\_shopify\_y\` cookie. Use \`getClientBrowserParameters()\` to collect this value.

  ```ts
  string
  ```

* url

  Value of \`window\.location.href\`. Use \`getClientBrowserParameters()\` to collect this value.

  ```ts
  string
  ```

* userAgent

  Value of \`navigator.userAgent\`. Use \`getClientBrowserParameters()\` to collect this value.

  ```ts
  string
  ```

* visitToken

  Shopify session token: Value of \`\_shopify\_s\` cookie. Use \`getClientBrowserParameters()\` to collect this value.

  ```ts
  string
  ```

#### CurrencyCode

Supports CurrencyCode from both Storefront API and Customer Account API. The APIs may have different CurrencyCode enums (e.g., Customer Account API added USDC in 2025-10, but Storefront API doesn't support USDC in 2025-10). This union type ensures useMoney works with data from either API.

```ts
StorefrontApiCurrencyCode | CustomerAccountApiCurrencyCode
```

#### ShopifyAnalyticsProduct

* brand

  Product brand or vendor.

  ```ts
  string
  ```

* category

  Product category or type.

  ```ts
  string
  ```

* name

  Product name.

  ```ts
  string
  ```

* price

  Product price.

  ```ts
  string
  ```

* productGid

  Product id in the form of \`gid://shopify/Product/\<id>\`.

  ```ts
  string
  ```

* quantity

  Quantity of the product in this event.

  ```ts
  number
  ```

* sku

  Product sku.

  ```ts
  string
  ```

* variantGid

  Variant id in the form of \`gid://shopify/ProductVariant/\<id>\`.

  ```ts
  string
  ```

* variantName

  Variant name.

  ```ts
  string
  ```

#### ShopifySalesChannels

```ts
keyof typeof ShopifySalesChannel
```

#### ShopifySalesChannel

Analytics sales channel values accepted by Shopify analytics.

* headless

  Shopify Headless sales channel

  ```ts
  'headless'
  ```

* hydrogen

  Shopify Hydrogen sales channel

  ```ts
  'hydrogen'
  ```

#### ShopifyAddToCart

* eventName

  Use \`AnalyticsEventName.ADD\_TO\_CART\` constant.

  ```ts
  string
  ```

* payload

  ```ts
  ShopifyAddToCartPayload
  ```

#### ShopifyAddToCartPayload

* acceptedLanguage

  Language displayed to buyer.

  ```ts
  LanguageCode
  ```

* analyticsAllowed

  Result of \`customerPrivacyApi.analyticsProcessingAllowed()\`

  ```ts
  boolean
  ```

* assetVersionId

  NPM package version of either hydrogen or hydrogen-react. Defaults to hydrogen-react package version.

  ```ts
  string
  ```

* cartId

  Shopify cart id in the form of \`gid://shopify/Cart/\<id>\`.

  ```ts
  string
  ```

* currency

  Currency code.

  ```ts
  CurrencyCode
  ```

* customerId

  Shopify customer id in the form of \`gid://shopify/Customer/\<id>\`.

  ```ts
  string
  ```

* hasUserConsent

  If we have consent from buyer for data collection

  ```ts
  boolean
  ```

* hydrogenSubchannelId

  Alternative name for Shopify storefront id generated by Hydrogen sales channel. The value of env.PUBLIC\_STOREFRONT\_ID.

  ```ts
  string
  ```

* marketingAllowed

  Result of \`customerPrivacyApi.marketingAllowed()\`

  ```ts
  boolean
  ```

* navigationApi

  Navigation api: \`'PerformanceNavigationTiming' | 'performance.navigation'\`. Use \`getClientBrowserParameters()\` to collect this value.

  ```ts
  string
  ```

* navigationType

  Navigation type: \`'navigate' | 'reload' | 'back\_forward' | 'prerender' | 'unknown'\`. Use \`getClientBrowserParameters()\` to collect this value.

  ```ts
  string
  ```

* path

  Value of \`window\.location.pathname\`. Use \`getClientBrowserParameters()\` to collect this value.

  ```ts
  string
  ```

* products

  Product list.

  ```ts
  ShopifyAnalyticsProduct[]
  ```

* referrer

  Value of \`window\.document.referrer\`. Use \`getClientBrowserParameters()\` to collect this value.

  ```ts
  string
  ```

* saleOfDataAllowed

  Result of \`customerPrivacyApi.saleOfDataAllowed()\`

  ```ts
  boolean
  ```

* search

  Value of \`window\.location.search\`. Use \`getClientBrowserParameters()\` to collect this value.

  ```ts
  string
  ```

* shopId

  Shopify shop id in the form of \`gid://shopify/Shop/\<id>\`.

  ```ts
  string
  ```

* shopifySalesChannel

  Shopify sales channel.

  ```ts
  ShopifySalesChannels
  ```

* storefrontId

  Shopify storefront id generated by Hydrogen sales channel. The value of env.PUBLIC\_STOREFRONT\_ID.

  ```ts
  string
  ```

* title

  Value of \`document.title\`. Use \`getClientBrowserParameters()\` to collect this value.

  ```ts
  string
  ```

* totalValue

  Total value of products.

  ```ts
  number
  ```

* uniqueToken

  Shopify unique user token: Value of \`\_shopify\_y\` cookie. Use \`getClientBrowserParameters()\` to collect this value.

  ```ts
  string
  ```

* url

  Value of \`window\.location.href\`. Use \`getClientBrowserParameters()\` to collect this value.

  ```ts
  string
  ```

* userAgent

  Value of \`navigator.userAgent\`. Use \`getClientBrowserParameters()\` to collect this value.

  ```ts
  string
  ```

* visitToken

  Shopify session token: Value of \`\_shopify\_s\` cookie. Use \`getClientBrowserParameters()\` to collect this value.

  ```ts
  string
  ```

##### AnalyticsEventName

Analytics event names accepted by Shopify analytics.

* **ADD\_TO\_CART**

  **'ADD\_TO\_CART'**

  **required**

  Add to cart

* **PAGE\_VIEW**

  **'PAGE\_VIEW'**

  **required**

  Page view

##### AnalyticsPageType

Analytics page type values accepted by Shopify analytics.

* **article**

  **'article'**

  **required**

* **blog**

  **'blog'**

  **required**

* **captcha**

  **'captcha'**

  **required**

* **cart**

  **'cart'**

  **required**

* **collection**

  **'collection'**

  **required**

* **customersAccount**

  **'customers/account'**

  **required**

* **customersActivateAccount**

  **'customers/activate\_account'**

  **required**

* **customersAddresses**

  **'customers/addresses'**

  **required**

* **customersLogin**

  **'customers/login'**

  **required**

* **customersOrder**

  **'customers/order'**

  **required**

* **customersRegister**

  **'customers/register'**

  **required**

* **customersResetPassword**

  **'customers/reset\_password'**

  **required**

* **forbidden**

  **'403'**

  **required**

* **giftCard**

  **'gift\_card'**

  **required**

* **home**

  **'index'**

  **required**

* **listCollections**

  **'list-collections'**

  **required**

* **notFound**

  **'404'**

  **required**

* **page**

  **'page'**

  **required**

* **password**

  **'password'**

  **required**

* **policy**

  **'policy'**

  **required**

* **product**

  **'product'**

  **required**

* **search**

  **'search'**

  **required**

##### ShopifySalesChannel

Analytics sales channel values accepted by Shopify analytics.

* **headless**

  **'headless'**

  **required**

  Shopify Headless sales channel

* **hydrogen**

  **'hydrogen'**

  **required**

  Shopify Hydrogen sales channel

Examples

#### Examples

* #### Example code

  ##### JavaScript

  ```jsx
  import {
    sendShopifyAnalytics,
    getClientBrowserParameters,
    AnalyticsEventName,
    useShopifyCookies,
  } from '@shopify/hydrogen';
  import {useRouter} from 'next/router';
  import {useEffect} from 'react';

  function sendPageView(analyticsPageData) {
    const payload = {
      ...getClientBrowserParameters(),
      ...analyticsPageData,
    };
    sendShopifyAnalytics({
      eventName: AnalyticsEventName.PAGE_VIEW,
      payload,
    });
  }

  // Hook into your router's page change events to fire this analytics event:
  // for example, in NextJS:

  const analyticsShopData = {
    shopId: 'gid://shopify/Shop/{your-shop-id}',
    currency: 'USD',
    acceptedLanguage: 'en',
  };

  export default function App({Component, pageProps}) {
    const router = useRouter();

    // eslint-disable-next-line no-undef
    const hasUserConsent = yourFunctionToDetermineIfUserHasConsent();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const analytics = {
      hasUserConsent,
      ...analyticsShopData,
      ...pageProps.analytics,
    };
    const pagePropsWithAppAnalytics = {
      ...pageProps,
      analytics,
    };

    useEffect(() => {
      const handleRouteChange = () => {
        sendPageView(analytics);
      };

      router.events.on('routeChangeComplete', handleRouteChange);

      return () => {
        router.events.off('routeChangeComplete', handleRouteChange);
      };
    }, [analytics, router.events]);

    useShopifyCookies();

    return <Component {...pagePropsWithAppAnalytics} />;
  }
  ```

  ##### TypeScript

  ```tsx
  import * as React from 'react';
  import {useEffect} from 'react';
  import {
    sendShopifyAnalytics,
    getClientBrowserParameters,
    AnalyticsEventName,
    useShopifyCookies,
  } from '@shopify/hydrogen';
  import {useRouter} from 'next/router';

  function sendPageView(analyticsPageData) {
    const payload = {
      ...getClientBrowserParameters(),
      ...analyticsPageData,
    };
    sendShopifyAnalytics({
      eventName: AnalyticsEventName.PAGE_VIEW,
      payload,
    });
  }

  // Hook into your router's page change events to fire this analytics event:
  // for example, in NextJS:

  const analyticsShopData = {
    shopId: 'gid://shopify/Shop/{your-shop-id}',
    currency: 'USD',
    acceptedLanguage: 'en',
  };

  export default function App({Component, pageProps}) {
    const router = useRouter();

    // @ts-expect-error - this is an example, you should implement this function
    const hasUserConsent = yourFunctionToDetermineIfUserHasConsent();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const analytics = {
      hasUserConsent,
      ...analyticsShopData,
      ...pageProps.analytics,
    };
    const pagePropsWithAppAnalytics = {
      ...pageProps,
      analytics,
    };

    useEffect(() => {
      const handleRouteChange = () => {
        sendPageView(analytics);
      };

      router.events.on('routeChangeComplete', handleRouteChange);

      return () => {
        router.events.off('routeChangeComplete', handleRouteChange);
      };
    }, [analytics, router.events]);

    useShopifyCookies();

    return <Component {...pagePropsWithAppAnalytics} />;
  }
  ```

***

### Related

[- useShopifyCookies](https://shopify.dev/docs/api/hydrogen/2026-04/hooks/useshopifycookies)

[- getClientBrowserParameters](https://shopify.dev/docs/api/hydrogen/2026-04/utilities/getclientbrowserparameters)

***

---



<a id="latest-utilities-storefront-api-types"></a>


## Storefront API Types

If you are using TypeScript, pre-generated TypeScript types are available that match the Storefront API's GraphQL schema. These types can be used when you need to manually create an object that matches a Storefront API object's shape.

These types also work really well with the new [`satisfies` operator](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-9.html#the-satisfies-operator) introduced in TypeScript 4.9, though you don't need to use `satisfies` to use these types.

Examples

#### Examples

* ####

  ##### Storefront API Types in TypeScript

  ```ts
  import type {
    Product,
    Collection,
  } from '@shopify/hydrogen/storefront-api-types';

  const myProduct = {id: '123', title: 'My Product'} satisfies Partial<Product>;
  console.log(myProduct.title);

  const myCollection = {
    id: '456',
    title: 'My Collection',
  } satisfies Partial<Collection>;
  console.log(myCollection.title);

  const myNotSatisfyingProduct: Partial<Product> = {
    id: '789',
    title: 'Other Product',
  };
  console.log(myNotSatisfyingProduct.title);
  ```

***

### Related

[- storefrontApiCustomScalars](https://shopify.dev/docs/api/hydrogen/2026-04/utilities/storefrontapicustomscalars)

[- Storefront Schema](https://shopify.dev/docs/api/hydrogen/2026-04/utilities/storefront-schema)

***

---



<a id="latest-utilities-storefront-schema"></a>


## Storefront Schema

Hydrogen React ships with a pre-generated GraphQL schema for the Storefront API, which can integrate with your IDE and other GraphQL tooling (such as a [GraphQL config file](https://www.graphql-config.com/docs/user/user-usage)) to provide autocompletion and validation for your Storefront API GraphQL queries.

This schema is generated using the Storefront API's introspection query, and is available at `@shopify/hydrogen-react/storefront.schema.json`.

To get these features working in your IDE, you may need to install an extension. For example, in VSCode you can install this [GraphQL extension](https://marketplace.visualstudio.com/items?itemName=GraphQL.vscode-graphql).

Examples

#### Examples

* ####

  ##### GraphQL Config File

  ```yml
  schema: node_modules/@shopify/hydrogen/storefront.schema.json
  ```

***

### Related

[- storefrontApiCustomScalars](https://shopify.dev/docs/api/hydrogen/2026-04/utilities/storefrontapicustomscalars)

[- Storefront API Types](https://shopify.dev/docs/api/hydrogen/2026-04/utilities/storefront-api-types)

***

---



<a id="latest-utilities-storefrontapicustomscalars"></a>


## storefrontApiCustomScalars

Meant to be used with GraphQL CodeGen to type the Storefront API's custom scalars correctly when using TypeScript.By default, GraphQL CodeGen uses `any` for custom scalars; by using these definitions, GraphQL Codegen will generate the correct types for the Storefront API's custom scalars.

See more about [GraphQL CodeGen](https://graphql-code-generator.com/) and [custom scalars for TypeScript](https://the-guild.dev/graphql/codegen/plugins/typescript/typescript#scalars).

Note that `@shopify/hydrogen-react` has already generated types for the Storefront API, so you may not need to setup GraphQL Codegen on your own.

Examples

#### Examples

* ####

  ##### Codegen Config

  ```js
  import {storefrontApiCustomScalars} from '@shopify/hydrogen';

  const config = {
    overwrite: true,
    schema: require.resolve('@shopify/hydrogen/storefront.schema.json'),
    documents: 'pages/**/*.tsx',
    generates: {
      './gql/': {
        preset: 'client',
        plugins: [],
        config: {
          // defines the custom scalars used in the Storefront API
          scalars: storefrontApiCustomScalars,
        },
      },
    },
  };

  export default config;
  ```

***

### Related

[- Storefront Schema](https://shopify.dev/docs/api/hydrogen/2026-04/utilities/storefront-schema)

[- Storefront API Types](https://shopify.dev/docs/api/hydrogen/2026-04/utilities/storefront-api-types)

***

---



<a id="latest-utilities-storefrontredirect"></a>


## storefrontRedirect

Queries the Storefront API to see if there is any redirect [created for the current route](https://help.shopify.com/en/manual/online-store/menus-and-links/url-redirect) and performs it. Otherwise, it returns the response passed in the parameters. Useful for conditionally redirecting after a 404 response.

### storefront​Redirect(**[options](#arguments-propertydetail-options)**​)

#### Parameters

* **options**

  **StorefrontRedirect**

  **required**

#### Returns

* **Promise\<Response>**

#### StorefrontRedirect

* matchQueryParams

  By default, query parameters are not used to match redirects. Set this to \`true\` if you'd like redirects to be query parameter sensitive

  ```ts
  boolean
  ```

* noAdminRedirect

  By default the \`/admin\` route is redirected to the Shopify Admin page for the current storefront. Disable this redirect by passing \`true\`.

  ```ts
  boolean
  ```

* request

  The \[MDN Request]\(https://developer.mozilla.org/en-US/docs/Web/API/Request) object that was passed to the \`server.ts\` request handler.

  ```ts
  Request
  ```

* response

  The \[MDN Response]\(https://developer.mozilla.org/en-US/docs/Web/API/Response) object created by \`handleRequest\`

  ```ts
  Response
  ```

* storefront

  The \[Storefront client]\(/docs/api/hydrogen/utilities/createstorefrontclient) instance

  ```ts
  Storefront<I18nBase>
  ```

#### Storefront

Interface to interact with the Storefront API.

* cache

  ```ts
  Cache
  ```

* CacheCustom

  ```ts
  (overrideOptions: AllCacheOptions) => AllCacheOptions
  ```

* CacheLong

  ```ts
  (overrideOptions?: AllCacheOptions) => AllCacheOptions
  ```

* CacheNone

  ```ts
  () => NoStoreStrategy
  ```

* CacheShort

  ```ts
  (overrideOptions?: AllCacheOptions) => AllCacheOptions
  ```

* forward

  Forwards the request to the Storefront API. It reads the API version from the request URL.

  ```ts
  (request: Request, options?: Pick<StorefrontCommonExtraParams, "storefrontApiVersion">) => Promise<Response>
  ```

* forwardMcp

  Forwards the request to the Storefront MCP endpoint.

  ```ts
  (request: Request) => Promise<Response>
  ```

* generateCacheControlHeader

  ```ts
  (cacheOptions: AllCacheOptions) => string
  ```

* getApiUrl

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "storefrontApiVersion" | "storeDomain">>) => string
  ```

* getHeaders

  ```ts
  () => Record<string, string>
  ```

* getPrivateTokenHeaders

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "contentType">> & Pick<StorefrontClientProps, "privateStorefrontToken"> & { buyerIp?: string; }) => Record<string, string>
  ```

* getPublicTokenHeaders

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "contentType">> & Pick<StorefrontClientProps, "publicStorefrontToken">) => Record<string, string>
  ```

* getShopifyDomain

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "storeDomain">>) => string
  ```

* i18n

  ```ts
  TI18n
  ```

* isMcpUrl

  Checks if the request URL matches the Storefront MCP endpoint.

  ```ts
  (request: { url?: string; }) => boolean
  ```

* isStorefrontApiUrl

  Checks if the request URL matches the Storefront API GraphQL endpoint.

  ```ts
  (request: { url?: string; }) => boolean
  ```

* mutate

  ```ts
  <
      OverrideReturnType extends any = never,
      RawGqlString extends string = string,
    >(
      mutation: RawGqlString,
      ...options: ClientVariablesInRestParams<
        StorefrontMutations,
        RawGqlString,
        StorefrontCommonExtraParams,
        AutoAddedVariableNames
      >
    ) => Promise<
      ClientReturn<StorefrontMutations, RawGqlString, OverrideReturnType> &
        StorefrontError
    >
  ```

* query

  ```ts
  <
      OverrideReturnType extends any = never,
      RawGqlString extends string = string,
    >(
      query: RawGqlString,
      ...options: ClientVariablesInRestParams<
        StorefrontQueries,
        RawGqlString,
        StorefrontCommonExtraParams & Pick<StorefrontQueryOptions, 'cache'>,
        AutoAddedVariableNames
      >
    ) => Promise<
      ClientReturn<StorefrontQueries, RawGqlString, OverrideReturnType> &
        StorefrontError
    >
  ```

* setCollectedSubrequestHeaders

  Sets the collected subrequest headers in the response. Useful to forward the cookies and server-timing headers from server subrequests to the browser.

  ```ts
  (response: { headers: Headers; }) => void
  ```

#### AllCacheOptions

Override options for a cache strategy.

* maxAge

  The maximum amount of time in seconds that a resource will be considered fresh. See \`max-age\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#:\~:text=Response%20Directives-,max%2Dage,-The%20max%2Dage).

  ```ts
  number
  ```

* mode

  The caching mode, generally \`public\`, \`private\`, or \`no-store\`.

  ```ts
  string
  ```

* sMaxAge

  Similar to \`maxAge\` but specific to shared caches. See \`s-maxage\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#s-maxage).

  ```ts
  number
  ```

* staleIfError

  Indicate that the cache should serve the stale response if an error occurs while revalidating the cache. See \`stale-if-error\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-if-error).

  ```ts
  number
  ```

* staleWhileRevalidate

  Indicate that the cache should serve the stale response in the background while revalidating the cache. See \`stale-while-revalidate\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-while-revalidate).

  ```ts
  number
  ```

#### NoStoreStrategy

* mode

  ```ts
  string
  ```

#### StorefrontCommonExtraParams

* displayName

  ```ts
  string
  ```

* headers

  ```ts
  HeadersInit
  ```

* storefrontApiVersion

  ```ts
  string
  ```

#### StorefrontClientProps

* contentType

  Customizes which \`"content-type"\` header is added when using \`getPrivateTokenHeaders()\` and \`getPublicTokenHeaders()\`. When fetching with a \`JSON.stringify()\`-ed \`body\`, use \`"json"\`. When fetching with a \`body\` that is a plain string, use \`"graphql"\`. Defaults to \`"json"\` Can also be customized on a call-by-call basis by passing in \`'contentType'\` to both \`getPrivateTokenHeaders({...})\` and \`getPublicTokenHeaders({...})\`, for example: \`getPublicTokenHeaders({contentType: 'graphql'})\`

  ```ts
  'json' | 'graphql'
  ```

* privateStorefrontToken

  The Storefront API delegate access token. Refer to the \[authentication]\(https://shopify.dev/api/storefront#authentication) and \[delegate access token]\(https://shopify.dev/apps/auth/oauth/delegate-access-tokens) documentation for more details.

  ```ts
  string
  ```

* publicStorefrontToken

  The Storefront API access token. Refer to the \[authentication]\(https://shopify.dev/api/storefront#authentication) documentation for more details.

  ```ts
  string
  ```

* storeDomain

  The host name of the domain (eg: \`{shop}.myshopify.com\`).

  ```ts
  string
  ```

* storefrontApiVersion

  The Storefront API version. This should almost always be the same as the version Hydrogen React was built for. Learn more about Shopify \[API versioning]\(https://shopify.dev/api/usage/versioning) for more details.

  ```ts
  string
  ```

#### StorefrontMutations

Maps all the mutations found in the project to variables and return types.



#### AutoAddedVariableNames

```ts
'country' | 'language'
```

#### StorefrontError

* errors

  ```ts
  StorefrontApiErrors
  ```

#### StorefrontApiErrors

```ts
JsonGraphQLError[] | undefined
```

#### JsonGraphQLError

* extensions

  Reserved for implementors to extend the protocol however they see fit, and hence there are no additional restrictions on its contents.

  ```ts
  { [key: string]: unknown; }
  ```

* locations

  If an error can be associated to a particular point in the requested GraphQL document, it should contain a list of locations.

  ```ts
  { line: number; column: number; }[]
  ```

* message

  ```ts
  string
  ```

* name

  ```ts
  string
  ```

* path

  If an error can be associated to a particular field in the GraphQL result, it \_must\_ contain an entry with the key \`path\` that details the path of the response field which experienced the error. This allows clients to identify whether a null result is intentional or caused by a runtime error.

  ```ts
  (string | number)[]
  ```

* stack

  ```ts
  string
  ```

#### StorefrontQueries

Maps all the queries found in the project to variables and return types.



#### StorefrontQueryOptions

```ts
StorefrontCommonExtraParams & {
  query: string;
  mutation?: never;
  cache?: CachingStrategy;
}
```

#### CachingStrategy

Use the \`CachingStrategy\` to define a custom caching mechanism for your data. Or use one of the pre-defined caching strategies: CacheNone, CacheShort, CacheLong.

* maxAge

  The maximum amount of time in seconds that a resource will be considered fresh. See \`max-age\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#:\~:text=Response%20Directives-,max%2Dage,-The%20max%2Dage).

  ```ts
  number
  ```

* mode

  The caching mode, generally \`public\`, \`private\`, or \`no-store\`.

  ```ts
  string
  ```

* sMaxAge

  Similar to \`maxAge\` but specific to shared caches. See \`s-maxage\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#s-maxage).

  ```ts
  number
  ```

* staleIfError

  Indicate that the cache should serve the stale response if an error occurs while revalidating the cache. See \`stale-if-error\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-if-error).

  ```ts
  number
  ```

* staleWhileRevalidate

  Indicate that the cache should serve the stale response in the background while revalidating the cache. See \`stale-while-revalidate\` in the \[MDN docs]\(https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-while-revalidate).

  ```ts
  number
  ```

#### Headers



#### I18nBase

* country

  ```ts
  CountryCode
  ```

* language

  ```ts
  StorefrontLanguageCode | CustomerLanguageCode
  ```

Examples

#### Examples

* #### Example code

  ##### JavaScript

  ```js
  import {storefrontRedirect, createStorefrontClient} from '@shopify/hydrogen';
  import * as reactRouterBuild from 'virtual:react-router/server-build';
  import {
    createRequestHandler,
    getStorefrontHeaders,
  } from '@shopify/hydrogen/oxygen';

  export default {
    async fetch(request, env, executionContext) {
      const {storefront} = createStorefrontClient({
        cache: await caches.open('hydrogen'),
        waitUntil: (p) => executionContext.waitUntil(p),
        privateStorefrontToken: env.PRIVATE_STOREFRONT_API_TOKEN,
        publicStorefrontToken: env.PUBLIC_STOREFRONT_API_TOKEN,
        storeDomain: env.PUBLIC_STORE_DOMAIN,
        storefrontHeaders: getStorefrontHeaders(request),
      });

      const handleRequest = createRequestHandler({
        build: reactRouterBuild,
        mode: process.env.NODE_ENV,
      });

      const response = await handleRequest(request);

      if (response.status === 404) {
        /**
         * Check for redirects only when there's a 404 from
         * the app. If the redirect doesn't exist, then
         * `storefrontRedirect` will pass through the 404
         * response.
         */
        return storefrontRedirect({request, response, storefront});
      }

      return response;
    },
  };
  ```

  ##### TypeScript

  ```ts
  import {storefrontRedirect, createStorefrontClient} from '@shopify/hydrogen';
  import * as reactRouterBuild from 'virtual:react-router/server-build';
  import {
    createRequestHandler,
    getStorefrontHeaders,
  } from '@shopify/hydrogen/oxygen';

  export default {
    async fetch(request: Request, env: Env, executionContext: ExecutionContext) {
      const {storefront} = createStorefrontClient({
        cache: await caches.open('hydrogen'),
        waitUntil: (p: Promise<unknown>) => executionContext.waitUntil(p),
        privateStorefrontToken: env.PRIVATE_STOREFRONT_API_TOKEN,
        publicStorefrontToken: env.PUBLIC_STOREFRONT_API_TOKEN,
        storeDomain: env.PUBLIC_STORE_DOMAIN,
        storefrontHeaders: getStorefrontHeaders(request),
      });

      const handleRequest = createRequestHandler({
        build: reactRouterBuild,
        mode: process.env.NODE_ENV,
      });

      const response = await handleRequest(request);

      if (response.status === 404) {
        /**
         * Check for redirects only when there's a 404 from
         * the app. If the redirect doesn't exist, then
         * `storefrontRedirect` will pass through the 404
         * response.
         */
        return storefrontRedirect({request, response, storefront});
      }

      return response;
    },
  };
  ```

***

---



<a id="latest-utilities-useselectedoptioninurlparam"></a>


## useSelectedOptionInUrlParam

Sets the url params to the selected option.

Examples

#### Examples

* ####

  ##### useSelectedOptionInUrlParam example

  ```js
  import {useSelectedOptionInUrlParam} from '@shopify/hydrogen';

  const selectedOption = [
    {
      name: 'Color',
      value: 'Red',
    },
    {
      name: 'Size',
      value: 'Medium',
    },
  ];

  useSelectedOptionInUrlParam(selectedOption);

  // URL will be updated to <original product url>?Color=Red&Size=Medium
  ```

***

### Related

[- getProductOptions](https://shopify.dev/docs/api/hydrogen/2026-04/utilities/getproductoptions)

[- getAdjacentAndFirstAvailableVariants](https://shopify.dev/docs/api/hydrogen/2026-04/utilities/getadjacentandfirstavailablevariants)

***

---
