# Shopify Hydrogen React Reference (Indonesian / English)

> Referensi lengkap **Hydrogen React** Shopify API yang disusun ulang dari https://shopify.dev/docs/api/hydrogen-react.
> Dokumen ini dirancang untuk pengembang berbahasa Indonesia, namun seluruh konten teknis (skema, tipe, nama field, contoh kode) dipertahankan dalam bahasa Inggris asli untuk memastikan akurasi.

| Item | Nilai |
|------|-------|
| Sumber | `https://shopify.dev/docs/api/hydrogen-react` |
| Total halaman | **45** |
| Tanggal kompilasi | 2026-05-01 |
| Bahasa | Indonesia (intro/ToC) + English (konten teknis) |



## Daftar Isi (Table of Contents)

- [Landing](#landing)
- [latest](#latest)
- [latest / components / buynowbutton](#latest-components-buynowbutton)
- [latest / components / cart / addtocartbutton](#latest-components-cart-addtocartbutton)
- [latest / components / cart / cartcheckoutbutton](#latest-components-cart-cartcheckoutbutton)
- [latest / components / cart / cartcost](#latest-components-cart-cartcost)
- [latest / components / cart / cartlineprovider](#latest-components-cart-cartlineprovider)
- [latest / components / cart / cartlinequantity](#latest-components-cart-cartlinequantity)
- [latest / components / cart / cartlinequantityadjustbutton](#latest-components-cart-cartlinequantityadjustbutton)
- [latest / components / cart / cartprovider](#latest-components-cart-cartprovider)
- [latest / components / media / externalvideo](#latest-components-media-externalvideo)
- [latest / components / media / image](#latest-components-media-image)
- [latest / components / media / mediafile](#latest-components-media-mediafile)
- [latest / components / media / modelviewer](#latest-components-media-modelviewer)
- [latest / components / media / video](#latest-components-media-video)
- [latest / components / money](#latest-components-money)
- [latest / components / productprice](#latest-components-productprice)
- [latest / components / productprovider](#latest-components-productprovider)
- [latest / components / richtext](#latest-components-richtext)
- [latest / components / shopifyprovider](#latest-components-shopifyprovider)
- [latest / components / shoppaybutton](#latest-components-shoppaybutton)
- [latest / hooks / usecart](#latest-hooks-usecart)
- [latest / hooks / usecartline](#latest-hooks-usecartline)
- [latest / hooks / useloadscript](#latest-hooks-useloadscript)
- [latest / hooks / usemoney](#latest-hooks-usemoney)
- [latest / hooks / useproduct](#latest-hooks-useproduct)
- [latest / hooks / useshop](#latest-hooks-useshop)
- [latest / hooks / useshopifycookies](#latest-hooks-useshopifycookies)
- [latest / utilities / createstorefrontclient](#latest-utilities-createstorefrontclient)
- [latest / utilities / decodeencodedvariant](#latest-utilities-decodeencodedvariant)
- [latest / utilities / flattenconnection](#latest-utilities-flattenconnection)
- [latest / utilities / getadjacentandfirstavailablevariants](#latest-utilities-getadjacentandfirstavailablevariants)
- [latest / utilities / getclientbrowserparameters](#latest-utilities-getclientbrowserparameters)
- [latest / utilities / getproductoptions](#latest-utilities-getproductoptions)
- [latest / utilities / getshopifycookies](#latest-utilities-getshopifycookies)
- [latest / utilities / gettrackingvalues](#latest-utilities-gettrackingvalues)
- [latest / utilities / isoptionvaluecombinationinencodedvariant](#latest-utilities-isoptionvaluecombinationinencodedvariant)
- [latest / utilities / mapselectedproductoptiontoobject](#latest-utilities-mapselectedproductoptiontoobject)
- [latest / utilities / parsegid](#latest-utilities-parsegid)
- [latest / utilities / parsemetafield](#latest-utilities-parsemetafield)
- [latest / utilities / sendshopifyanalytics](#latest-utilities-sendshopifyanalytics)
- [latest / utilities / storefront-api-types](#latest-utilities-storefront-api-types)
- [latest / utilities / storefront-schema](#latest-utilities-storefront-schema)
- [latest / utilities / storefrontapicustomscalars](#latest-utilities-storefrontapicustomscalars)
- [latest / utilities / useselectedoptioninurlparam](#latest-utilities-useselectedoptioninurlparam)


---



<a id="landing"></a>


## Hydrogen React

Hydrogen React is a performant, framework-agnostic library of React components, reusable functions, and utilities for interacting with Shopify’s [Storefront API](https://shopify.dev/docs/api/storefront). It’s bundled with [Hydrogen](https://shopify.dev/docs/api/hydrogen), but can be used by any React-based web app.

### Setup

1. Install Hydrogen React in your project with your preferred package manager.
2. Import components, hooks, or utilities that you want to use in your app. For more detailed instructions, see the Getting Started guide.

### Install the Hydrogen React package

###### npm

```sh
npm i --save @shopify/hydrogen-react
```

###### yarn

```sh
yarn add @shopify/hydrogen-react
```

***

### Authentication

To use Hydrogen React, you need to authenticate with and make requests to the [Storefront API](https://shopify.dev/docs/api/storefront). Hydrogen React includes an [API client](https://shopify.dev/docs/api/hydrogen-react/2026-04/utilities/createstorefrontclient) to securely handle API queries and mutations.

You can create and manage Storefront API access tokens by installing the [Headless sales channel](https://apps.shopify.com/headless) on your store.

Apps have access to [two kinds of tokens](https://shopify.dev/docs/api/usage/authentication#access-tokens-for-the-storefront-api): a public API token, which can be used in client-side code, and a private API token, which should only be used in server-side contexts and never exposed publicly.

[Install - Headless sales channel](https://apps.shopify.com/headless)

### Authenticate a Hydrogen app

###### client.js

```js
import {createStorefrontClient} from '@shopify/hydrogen-react';

export const client = createStorefrontClient({
  // load environment variables according to your framework and runtime
  storeDomain: process.env.PUBLIC_STORE_DOMAIN,
  publicStorefrontToken: process.env.PUBLIC_STOREFRONT_API_TOKEN,
});
```

###### .env

```txt
# Replace with your own store domain and Storefront API token

PUBLIC_STOREFRONT_API_TOKEN="public_token"
PRIVATE_STOREFRONT_API_TOKEN="private_token"
PUBLIC_STORE_DOMAIN="store_id.myshopify.com"
```

###### server-side-query.js

```js
import {client} from './client.js';

export async function getServerSideProps() {
  const response = await fetch(client.getStorefrontApiUrl(), {
    body: JSON.stringify({
      query: GRAPHQL_QUERY,
    }),
    // Generate the headers using the private token.
    headers: client.getPrivateTokenHeaders(),
    method: 'POST',
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const json = await response.json();

  return {props: json};
}

const GRAPHQL_QUERY = `
  query {
    shop {
      name
    }
  }
`;
```

***

### Versioning

Hydrogen React is tied to specific versions of the [Storefront API](https://shopify.dev/docs/api/storefront), which is versioned quarterly. For example, if you're using Storefront API version `2023-10`, then Hydrogen versions `2023.10.x` are fully compatible.

**Caution:**

If a Storefront API version includes breaking changes, then the corresponding Hydrogen React version will include the same breaking changes.

[Learn more - Shopify API versioning](https://shopify.dev/docs/api/usage/versioning)

[Learn more - API release notes](https://shopify.dev/docs/api/release-notes)

***

### Components

Components include all the business logic and data parsing required to produce predictable markup for objects available through the Storefront API. Components provide defaults but can be customized. Hydrogen React components include no visual styles, other than the ones provided natively by browsers.

### Component example

### Component

```js
import {ShopPayButton} from '@shopify/hydrogen-react';


export function MyProduct({variantId}) {
  return <ShopPayButton variantIds={[variantId]} />;
}
```

***

### Hooks

Hooks are functions that provide reusable business and/or state logic. They give you additional flexibility to control the behavior and display of Hydrogen React components.

### Hook example

### Hook

```js
import {useMoney} from '@shopify/hydrogen-react';


export function MyComponent({variant}) {
  const {currencyCode, currencySymbol, amount} = useMoney(variant.pricev2);


  return (
    <div>
      <strong>{currencyCode}</strong>
      <span>{currencySymbol}</span>
      <span>{amount}</span>
    </div>
  );
}
```

***

### Utilities

Utilities are reusable functions for common manipulations performed on data returned from the Storefront API.

### Utility example

### Utility

```js
import {flattenConnection, MediaFile} from '@shopify/hydrogen-react';


export function Product({product}) {
  const media = flattenConnection(product.media);
  return (
    <>
      {media.map((mediaFile) => {
        return <MediaFile data={mediaFile} key={mediaFile.id} />;
      })}
    </>
  );
}
```

***

### How Hydrogen React works with Hydrogen

Hydrogen React is bundled as part of Hydrogen, Shopify’s opinionated headless commerce stack built on [Remix](https://remix.run). Hydrogen React is also published separately as a standalone package so that it can be used by other React-based frameworks.

Hydrogen adds features like standard routes, caching strategies, redirects, and SEO. When using Hydrogen, you can also install the Hydrogen sales channel, which includes built-in support for Oxygen, Shopify’s global edge hosting platform. Consider which approach works best for your use case and existing technology stack.

[Learn more - Hydrogen](https://shopify.dev/docs/custom-storefronts/hydrogen)

[Install - Hydrogen sales channel](https://apps.shopify.com/hydrogen)

***

### Resources

[Custom storefronts on Shopify\
\
](https://shopify.dev/custom-storefronts)

[Learn more about how to design, build, and manage custom storefronts on Shopify.](https://shopify.dev/custom-storefronts)

[Hydrogen on GitHub\
\
](https://github.com/Shopify/hydrogen)

[Follow the Hydrogen project, file bugs and feature requests, preview upcoming features, and more.](https://github.com/Shopify/hydrogen)

***

---



<a id="latest"></a>


## Hydrogen React

Hydrogen React is a performant, framework-agnostic library of React components, reusable functions, and utilities for interacting with Shopify’s [Storefront API](https://shopify.dev/docs/api/storefront). It’s bundled with [Hydrogen](https://shopify.dev/docs/api/hydrogen), but can be used by any React-based web app.

### Setup

1. Install Hydrogen React in your project with your preferred package manager.
2. Import components, hooks, or utilities that you want to use in your app. For more detailed instructions, see the Getting Started guide.

### Install the Hydrogen React package

###### npm

```sh
npm i --save @shopify/hydrogen-react
```

###### yarn

```sh
yarn add @shopify/hydrogen-react
```

***

### Authentication

To use Hydrogen React, you need to authenticate with and make requests to the [Storefront API](https://shopify.dev/docs/api/storefront). Hydrogen React includes an [API client](https://shopify.dev/docs/api/hydrogen-react/2026-04/utilities/createstorefrontclient) to securely handle API queries and mutations.

You can create and manage Storefront API access tokens by installing the [Headless sales channel](https://apps.shopify.com/headless) on your store.

Apps have access to [two kinds of tokens](https://shopify.dev/docs/api/usage/authentication#access-tokens-for-the-storefront-api): a public API token, which can be used in client-side code, and a private API token, which should only be used in server-side contexts and never exposed publicly.

[Install - Headless sales channel](https://apps.shopify.com/headless)

### Authenticate a Hydrogen app

###### client.js

```js
import {createStorefrontClient} from '@shopify/hydrogen-react';

export const client = createStorefrontClient({
  // load environment variables according to your framework and runtime
  storeDomain: process.env.PUBLIC_STORE_DOMAIN,
  publicStorefrontToken: process.env.PUBLIC_STOREFRONT_API_TOKEN,
});
```

###### .env

```txt
# Replace with your own store domain and Storefront API token

PUBLIC_STOREFRONT_API_TOKEN="public_token"
PRIVATE_STOREFRONT_API_TOKEN="private_token"
PUBLIC_STORE_DOMAIN="store_id.myshopify.com"
```

###### server-side-query.js

```js
import {client} from './client.js';

export async function getServerSideProps() {
  const response = await fetch(client.getStorefrontApiUrl(), {
    body: JSON.stringify({
      query: GRAPHQL_QUERY,
    }),
    // Generate the headers using the private token.
    headers: client.getPrivateTokenHeaders(),
    method: 'POST',
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const json = await response.json();

  return {props: json};
}

const GRAPHQL_QUERY = `
  query {
    shop {
      name
    }
  }
`;
```

***

### Versioning

Hydrogen React is tied to specific versions of the [Storefront API](https://shopify.dev/docs/api/storefront), which is versioned quarterly. For example, if you're using Storefront API version `2023-10`, then Hydrogen versions `2023.10.x` are fully compatible.

**Caution:**

If a Storefront API version includes breaking changes, then the corresponding Hydrogen React version will include the same breaking changes.

[Learn more - Shopify API versioning](https://shopify.dev/docs/api/usage/versioning)

[Learn more - API release notes](https://shopify.dev/docs/api/release-notes)

***

### Components

Components include all the business logic and data parsing required to produce predictable markup for objects available through the Storefront API. Components provide defaults but can be customized. Hydrogen React components include no visual styles, other than the ones provided natively by browsers.

### Component example

### Component

```js
import {ShopPayButton} from '@shopify/hydrogen-react';


export function MyProduct({variantId}) {
  return <ShopPayButton variantIds={[variantId]} />;
}
```

***

### Hooks

Hooks are functions that provide reusable business and/or state logic. They give you additional flexibility to control the behavior and display of Hydrogen React components.

### Hook example

### Hook

```js
import {useMoney} from '@shopify/hydrogen-react';


export function MyComponent({variant}) {
  const {currencyCode, currencySymbol, amount} = useMoney(variant.pricev2);


  return (
    <div>
      <strong>{currencyCode}</strong>
      <span>{currencySymbol}</span>
      <span>{amount}</span>
    </div>
  );
}
```

***

### Utilities

Utilities are reusable functions for common manipulations performed on data returned from the Storefront API.

### Utility example

### Utility

```js
import {flattenConnection, MediaFile} from '@shopify/hydrogen-react';


export function Product({product}) {
  const media = flattenConnection(product.media);
  return (
    <>
      {media.map((mediaFile) => {
        return <MediaFile data={mediaFile} key={mediaFile.id} />;
      })}
    </>
  );
}
```

***

### How Hydrogen React works with Hydrogen

Hydrogen React is bundled as part of Hydrogen, Shopify’s opinionated headless commerce stack built on [Remix](https://remix.run). Hydrogen React is also published separately as a standalone package so that it can be used by other React-based frameworks.

Hydrogen adds features like standard routes, caching strategies, redirects, and SEO. When using Hydrogen, you can also install the Hydrogen sales channel, which includes built-in support for Oxygen, Shopify’s global edge hosting platform. Consider which approach works best for your use case and existing technology stack.

[Learn more - Hydrogen](https://shopify.dev/docs/custom-storefronts/hydrogen)

[Install - Hydrogen sales channel](https://apps.shopify.com/hydrogen)

***

### Resources

[Custom storefronts on Shopify\
\
](https://shopify.dev/custom-storefronts)

[Learn more about how to design, build, and manage custom storefronts on Shopify.](https://shopify.dev/custom-storefronts)

[Hydrogen on GitHub\
\
](https://github.com/Shopify/hydrogen)

[Follow the Hydrogen project, file bugs and feature requests, preview upcoming features, and more.](https://github.com/Shopify/hydrogen)

***

---



<a id="latest-components-buynowbutton"></a>


## BuyNowButton

The `BuyNowButton` component renders a button that adds an item to the cart and redirects the customer to checkout.

Must be a child of a `CartProvider` component.

##### Props

* **children**

  **ReactNode**

  **required**

  Any ReactNode elements.

* **variantId**

  **string**

  **required**

  The ID of the variant.

* **as**

  **AsType**

  Provide a React element or component to render as the underlying button. Note: for accessibility compliance, almost always you should use a `button` element, or a component that renders an underlying button.

* **attributes**

  **{ key: string; value: string; }\[]**

  An array of cart line attributes that belong to the item being added to the cart.

* **buttonRef**

  **Ref\<HTMLButtonElement>**

  A `ref` to the underlying button

* **defaultOnClick**

  **(event?: MouseEvent\<HTMLButtonElement, MouseEvent>) => boolean | void**

  A default `onClick` behavior

* **onClick**

  **(event?: MouseEvent\<HTMLButtonElement, MouseEvent>) => boolean | void**

  Click event handler. Default behaviour triggers unless prevented

* **quantity**

  **number**

  The item quantity. Defaults to 1.

* **sellingPlanId**

  **string**

  The selling plan ID of the subscription variant

Examples

#### Examples

* #### Example code

  ##### Description

  I am the default example

  ##### JavaScript

  ```jsx
  import {BuyNowButton} from '@shopify/hydrogen-react';

  export default function ProductBuyNowButton({product}) {
    const variantId = product.variants[0].id;

    if (!variantId) {
      return null;
    }

    return <BuyNowButton variantId={variantId} />;
  }
  ```

  ##### TypeScript

  ```tsx
  import {BuyNowButton} from '@shopify/hydrogen-react';
  import type {Product} from '@shopify/hydrogen-react/storefront-api-types';

  export default function ProductBuyNowButton({product}: {product: Product}) {
    const variantId = product.variants[0].id;

    if (!variantId) {
      return null;
    }

    return <BuyNowButton variantId={variantId} />;
  }
  ```

***

---



<a id="latest-components-cart-addtocartbutton"></a>


## AddToCartButton

The `AddToCartButton` component renders a button that adds an item to the cart when pressed.

It must be a descendent of the `CartProvider` component.

##### Props

* **children**

  **ReactNode**

  **required**

  Any ReactNode elements.

* **accessibleAddingToCartLabel**

  **string**

  The text that is announced by the screen reader when the item is being added to the cart. Used for accessibility purposes only and not displayed on the page.

* **as**

  **AsType**

  Provide a React element or component to render as the underlying button. Note: for accessibility compliance, almost always you should use a `button` element, or a component that renders an underlying button.

* **attributes**

  **{ key: string; value: string; }\[]**

  An array of cart line attributes that belong to the item being added to the cart.

* **buttonRef**

  **Ref\<HTMLButtonElement>**

  A `ref` to the underlying button

* **defaultOnClick**

  **(event?: MouseEvent\<HTMLButtonElement, MouseEvent>) => boolean | void**

  A default `onClick` behavior

* **onClick**

  **(event?: MouseEvent\<HTMLButtonElement, MouseEvent>) => boolean | void**

  Click event handler. Default behaviour triggers unless prevented

* **parent**

  **CartLineParentInput**

  The parent line item of the item being added to the cart. Used for nested cart lines.

* **quantity**

  **number**

  The item quantity.

* **sellingPlanId**

  **string**

  The selling plan ID of the subscription variant

* **variantId**

  **string | null**

  The ID of the variant.

Examples

#### Examples

* #### Example code

  ##### Description

  I am the default example

  ##### JavaScript

  ```jsx
  import {AddToCartButton} from '@shopify/hydrogen-react';

  export default function ProductAddToCartButton({product}) {
    const variantId = product.variants[0].id;

    if (!variantId) {
      return null;
    }

    return <AddToCartButton variantId={variantId} />;
  }
  ```

  ##### TypeScript

  ```tsx
  import {AddToCartButton} from '@shopify/hydrogen-react';
  import type {Product} from '@shopify/hydrogen-react/storefront-api-types';

  export default function ProductAddToCartButton({product}: {product: Product}) {
    const variantId = product.variants[0].id;

    if (!variantId) {
      return null;
    }

    return <AddToCartButton variantId={variantId} />;
  }
  ```

***

---



<a id="latest-components-cart-cartcheckoutbutton"></a>


## CartCheckoutButton

The `CartCheckoutButton` component renders a button that redirects to the checkout URL for the cart.

Must be a descendent of a `CartProvider` component.

##### Props

* **children**

  **ReactNode**

  **required**

  Any ReactNode elements.

* **as**

  **AsType**

  Provide a React element or component to render as the underlying button. Note: for accessibility compliance, almost always you should use a `button` element, or a component that renders an underlying button.

* **buttonRef**

  **Ref\<HTMLButtonElement>**

  A `ref` to the underlying button

* **defaultOnClick**

  **(event?: MouseEvent\<HTMLButtonElement, MouseEvent>) => boolean | void**

  A default `onClick` behavior

Examples

#### Examples

* #### Example code

  ##### Description

  I am the default example

  ##### JavaScript

  ```jsx
  import {CartCheckoutButton} from '@shopify/hydrogen-react';

  export default function ProductCartCheckoutButton() {
    return <CartCheckoutButton />;
  }
  ```

  ##### TypeScript

  ```tsx
  import {CartCheckoutButton} from '@shopify/hydrogen-react';

  export default function ProductCartCheckoutButton() {
    return <CartCheckoutButton />;
  }
  ```

***

---



<a id="latest-components-cart-cartcost"></a>


## CartCost

The `CartCost` component renders a `Money` component with the cost associated with the `amountType` prop.

If no `amountType` prop is specified, then it defaults to `totalAmount`.

Depends on `useCart()` and must be a child of `<CartProvider/>`

##### Props

* **amountType**

  **'total' | 'subtotal' | 'tax' | 'duty'**

  A string type that defines the type of cost needed. Valid values: `total`, `subtotal`, `tax`, or `duty`.

* **as**

  **ComponentGeneric**

  An HTML tag or React Component to be rendered as the base element wrapper. The default is `div`.

* **children**

  **React.ReactNode**

  Any `ReactNode` elements.

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

Examples

#### Examples

* #### Example code

  ##### Description

  I am the default example

  ##### JavaScript

  ```jsx
  import {CartCost} from '@shopify/hydrogen-react';

  export default function CartTotals() {
    return (
      <>
        <div>
          Subtotal: <CartCost amountType="subtotal" />
        </div>
        <div>
          Tax: <CartCost amountType="tax" />
        </div>
        <div>
          Total: <CartCost />
        </div>
      </>
    );
  }
  ```

  ##### TypeScript

  ```tsx
  import {CartCost} from '@shopify/hydrogen-react';

  export default function CartTotals() {
    return (
      <>
        <div>
          Subtotal: <CartCost amountType="subtotal" />
        </div>
        <div>
          Tax: <CartCost amountType="tax" />
        </div>
        <div>
          Total: <CartCost />
        </div>
      </>
    );
  }
  ```

***

---



<a id="latest-components-cart-cartlineprovider"></a>


## CartLineProvider

The `CartLineProvider` component creates a context for using a cart line.

##### Props

* **children**

  **ReactNode**

  **required**

  Any `ReactNode` elements.

* **line**

  **CartLinePartialDeep**

  **required**

  A cart line object.

#### CartLinePartialDeep

```ts
PartialDeep<
  CartLine | ComponentizableCartLine,
  {recurseIntoArrays: true}
>
```

Examples

#### Examples

* #### Example code

  ##### Description

  I am the default example

  ##### JavaScript

  ```jsx
  import {CartLineProvider, useCartLine} from '@shopify/hydrogen-react';

  export function CartWrapper({cart}) {
    const firstCartLine = cart.lines.nodes[0];
    return (
      <CartLineProvider line={firstCartLine}>
        <CartLineQuantity />
      </CartLineProvider>
    );
  }

  function CartLineQuantity() {
    const cartLine = useCartLine();

    return <div>{cartLine.quantity}</div>;
  }
  ```

  ##### TypeScript

  ```tsx
  import {CartLineProvider, useCartLine} from '@shopify/hydrogen-react';
  import type {Cart} from '@shopify/hydrogen-react/storefront-api-types';

  export function CartWrapper({cart}: {cart: Cart}) {
    const firstCartLine = cart.lines.nodes[0];
    return (
      <CartLineProvider line={firstCartLine}>
        <CartLineQuantity />
      </CartLineProvider>
    );
  }

  function CartLineQuantity() {
    const cartLine = useCartLine();

    return <div>{cartLine.quantity}</div>;
  }
  ```

***

### Related

[- useCartLine](https://shopify.dev/docs/api/hydrogen-react/2026-04/hooks/usecartLine)

***

---



<a id="latest-components-cart-cartlinequantity"></a>


## CartLineQuantity

The `<CartLineQuantity/>` component renders a `span` (or another element / component that can be customized by the `as` prop) with the cart line's quantity.

It must be a descendent of a `<CartLineProvider/>` component, and uses the `useCartLine()` hook internally.

##### Props

* **as**

  **ComponentGeneric**

  An HTML tag or React Component to be rendered as the base element wrapper. The default is `span`.

Examples

#### Examples

* #### Example code

  ##### Description

  I am the default example

  ##### JavaScript

  ```jsx
  import {CartLineQuantity, CartLineProvider} from '@shopify/hydrogen-react';

  export function Example({line}) {
    return (
      <CartLineProvider line={line}>
        <CartLineQuantity />
      </CartLineProvider>
    );
  }
  ```

  ##### TypeScript

  ```tsx
  import {CartLineQuantity, CartLineProvider} from '@shopify/hydrogen-react';
  import type {CartLine} from '@shopify/hydrogen-react/storefront-api-types';

  export function Example({line}: {line: CartLine}) {
    return (
      <CartLineProvider line={line}>
        <CartLineQuantity />
      </CartLineProvider>
    );
  }
  ```

***

### Related

[- useCartLine](https://shopify.dev/docs/api/hydrogen-react/2026-04/hooks/usecartLine)

[- CartLineQuantityAdjustButton](https://shopify.dev/docs/api/hydrogen-react/2026-04/components/cart/cartlinequantityAdjustButton)

***

---



<a id="latest-components-cart-cartlinequantityadjustbutton"></a>


## CartLineQuantityAdjustButton

The `<CartLineQuantityAdjustButton/>` component renders a `span` (or another element / component that can be customized by the `as` prop) with the cart line's quantity.

It must be a descendent of a `<CartLineProvider/>` component, and uses the `useCartLine()` hook internally.

##### Props

* **adjust**

  **'increase' | 'decrease' | 'remove'**

  The adjustment for a cart line's quantity. Valid values: `increase` (default), `decrease`, or `remove`.

Examples

#### Examples

* #### Example code

  ##### Description

  I am the default example

  ##### JavaScript

  ```jsx
  import {
    CartLineQuantityAdjustButton,
    CartLineProvider,
    CartProvider,
  } from '@shopify/hydrogen-react';

  export function Example({line}) {
    return (
      <CartProvider>
        <CartLineProvider line={line}>
          <CartLineQuantityAdjustButton adjust="increase">
            Increase
          </CartLineQuantityAdjustButton>
          <CartLineQuantityAdjustButton adjust="decrease">
            Decrease
          </CartLineQuantityAdjustButton>
          <CartLineQuantityAdjustButton adjust="remove">
            Remove
          </CartLineQuantityAdjustButton>
        </CartLineProvider>
      </CartProvider>
    );
  }
  ```

  ##### TypeScript

  ```tsx
  import {
    CartLineQuantityAdjustButton,
    CartLineProvider,
    CartProvider,
  } from '@shopify/hydrogen-react';
  import type {CartLine} from '@shopify/hydrogen-react/storefront-api-types';

  export function Example({line}: {line: CartLine}) {
    return (
      <CartProvider>
        <CartLineProvider line={line}>
          <CartLineQuantityAdjustButton adjust="increase">
            Increase
          </CartLineQuantityAdjustButton>
          <CartLineQuantityAdjustButton adjust="decrease">
            Decrease
          </CartLineQuantityAdjustButton>
          <CartLineQuantityAdjustButton adjust="remove">
            Remove
          </CartLineQuantityAdjustButton>
        </CartLineProvider>
      </CartProvider>
    );
  }
  ```

***

### Related

[- useCartLine](https://shopify.dev/docs/api/hydrogen-react/2026-04/hooks/usecartLine)

[- CartLineQuantity](https://shopify.dev/docs/api/hydrogen-react/2026-04/components/cart/cartlinequantity)

***

---



<a id="latest-components-cart-cartprovider"></a>


## CartProvider

The `CartProvider` component synchronizes the state of the Storefront API Cart and a customer's cart, and allows you to more easily manipulate the cart by adding, removing, and updating it. It could be placed at the root of your app so that your whole app is able to use the `useCart()` hook anywhere.

There are props that trigger when a call to the Storefront API is made, such as `onLineAdd={}` when a line is added to the cart. There are also props that trigger when a call to the Storefront API is completed, such as `onLineAddComplete={}` when the fetch request for adding a line to the cart completes.

The `CartProvider` component must be a descendant of the `ShopifyProvider` component .

##### Props

* **children**

  **React.ReactNode**

  **required**

  Any `ReactNode` elements.

* **cartFragment**

  **string**

  A fragment used to query the Storefront API's [Cart object](https://shopify.dev/api/storefront/2026-04/objects/cart) for all queries and mutations. A default value is used if no argument is provided.

* **countryCode**

  **CountryCode**

  The ISO country code for i18n.

* **customerAccessToken**

  **string**

  A customer access token that's accessible on the server if there's a customer login.

* **data**

  **PartialDeep\<CartType, {recurseIntoArrays: true}>**

  An object with fields that correspond to the Storefront API's [Cart object](https://shopify.dev/api/storefront/2026-04/objects/cart).

* **languageCode**

  **LanguageCode**

  The ISO language code for i18n.

* **numCartLines**

  **number**

  Maximum number of cart lines to fetch. Defaults to 250 cart lines.

* **onAttributesUpdate**

  **() => void**

  A callback that is invoked when the process to update the cart attributes begins, but before the attributes are updated in the Storefront API.

* **onAttributesUpdateComplete**

  **() => void**

  A callback that is invoked when the process to update the cart attributes completes

* **onBuyerIdentityUpdate**

  **() => void**

  A callback that is invoked when the process to update the buyer identity begins, but before the buyer identity is updated in the Storefront API.

* **onBuyerIdentityUpdateComplete**

  **() => void**

  A callback that is invoked when the process to update the buyer identity completes

* **onCreate**

  **() => void**

  A callback that is invoked when the process to create a cart begins, but before the cart is created in the Storefront API.

* **onCreateComplete**

  **() => void**

  A callback that is invoked when the process to create a cart completes

* **onDiscountCodesUpdate**

  **() => void**

  A callback that is invoked when the process to update the cart discount codes begins, but before the discount codes are updated in the Storefront API.

* **onDiscountCodesUpdateComplete**

  **() => void**

  A callback that is invoked when the process to update the cart discount codes completes

* **onLineAdd**

  **() => void**

  A callback that is invoked when the process to add a line item to the cart begins, but before the line item is added to the Storefront API.

* **onLineAddComplete**

  **() => void**

  A callback that is invoked when the process to add a line item to the cart completes

* **onLineRemove**

  **() => void**

  A callback that is invoked when the process to remove a line item to the cart begins, but before the line item is removed from the Storefront API.

* **onLineRemoveComplete**

  **() => void**

  A callback that is invoked when the process to remove a line item to the cart completes

* **onLineUpdate**

  **() => void**

  A callback that is invoked when the process to update a line item in the cart begins, but before the line item is updated in the Storefront API.

* **onLineUpdateComplete**

  **() => void**

  A callback that is invoked when the process to update a line item in the cart completes

* **onNoteUpdate**

  **() => void**

  A callback that is invoked when the process to add or update a note in the cart begins, but before the note is added or updated in the Storefront API.

* **onNoteUpdateComplete**

  **() => void**

  A callback that is invoked when the process to add or update a note in the cart completes

Examples

#### Examples

* #### Example code

  ##### Description

  I am the default example

  ##### JavaScript

  ```jsx
  import {CartProvider, useCart} from '@shopify/hydrogen-react';

  export function App() {
    <CartProvider
      onLineAdd={() => {
        console.log('a line is being added');
      }}
      onLineAddComplete={() => {
        console.log('a line has been added');
      }}
    >
      <CartComponent />
    </CartProvider>;
  }

  function CartComponent() {
    const {linesAdd, status} = useCart();

    const merchandise = {merchandiseId: '{id-here}'};

    return (
      <div>
        Cart Status: {status}
        <button onClick={() => linesAdd([merchandise])}>Add Line</button>
      </div>
    );
  }
  ```

  ##### TypeScript

  ```tsx
  import {CartProvider, useCart} from '@shopify/hydrogen-react';
  import type {CartLineInput} from '@shopify/hydrogen-react/storefront-api-types';

  export function App() {
    <CartProvider
      onLineAdd={() => {
        console.log('a line is being added');
      }}
      onLineAddComplete={() => {
        console.log('a line has been added');
      }}
    >
      <CartComponent />
    </CartProvider>;
  }

  function CartComponent() {
    const {linesAdd, status} = useCart();

    const merchandise: CartLineInput = {merchandiseId: '{id-here}'};

    return (
      <div>
        Cart Status: {status}
        <button onClick={() => linesAdd([merchandise])}>Add Line</button>
      </div>
    );
  }
  ```

***

### Related

[- useCart](https://shopify.dev/docs/api/hydrogen-react/2026-04/hooks/usecart)

[- ShopifyProvider](https://shopify.dev/docs/api/hydrogen-react/2026-04/components/shopifyprovider)

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

  ##### Description

  I am the default example

  ##### JavaScript

  ```jsx
  import {ExternalVideo} from '@shopify/hydrogen-react';

  export default function MyProductVideo({products}) {
    const firstMediaElement = products.nodes[0].media.nodes[0];

    if (firstMediaElement.__typename === 'ExternalVideo') {
      return <ExternalVideo data={firstMediaElement} />;
    }
  }
  ```

  ##### TypeScript

  ```tsx
  import {ExternalVideo} from '@shopify/hydrogen-react';
  import type {ProductConnection} from '@shopify/hydrogen-react/storefront-api-types';

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

[- MediaFile](https://shopify.dev/docs/api/hydrogen-react/2026-04/components/media/mediafile)

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

  ##### Description

  I am the default example

  ##### JavaScript

  ```jsx
  import {Image} from '@shopify/hydrogen-react';

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
  import {Image} from '@shopify/hydrogen-react';
  import type {Product} from '@shopify/hydrogen-react/storefront-api-types';

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

[- MediaFile](https://shopify.dev/docs/api/hydrogen-react/2026-04/components/media/mediafile)

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

  ##### Description

  I am the default example

  ##### JavaScript

  ```jsx
  import {MediaFile} from '@shopify/hydrogen-react';

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
  import {MediaFile} from '@shopify/hydrogen-react';
  import type {ProductConnection} from '@shopify/hydrogen-react/storefront-api-types';

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

[- Image](https://shopify.dev/docs/api/hydrogen-react/2026-04/components/media/image)

[- Video](https://shopify.dev/docs/api/hydrogen-react/2026-04/components/media/video)

[- ExternalVideo](https://shopify.dev/docs/api/hydrogen-react/2026-04/components/media/externalvideo)

[- ModelViewer](https://shopify.dev/docs/api/hydrogen-react/2026-04/components/media/modelviewer)

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

  ##### Description

  I am the default example

  ##### JavaScript

  ```jsx
  import {ModelViewer} from '@shopify/hydrogen-react';

  export default function MyProductModel({products}) {
    const firstMediaElement = products.nodes[0].media.nodes[0];

    if (firstMediaElement.__typename === 'Model3d') {
      return <ModelViewer data={firstMediaElement} />;
    }
  }
  ```

  ##### TypeScript

  ```tsx
  import {ModelViewer} from '@shopify/hydrogen-react';
  import type {ProductConnection} from '@shopify/hydrogen-react/storefront-api-types';

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

[- MediaFile](https://shopify.dev/docs/api/hydrogen-react/2026-04/components/media/mediafile)

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

  ##### Description

  I am the default example

  ##### JavaScript

  ```jsx
  import {Video} from '@shopify/hydrogen-react';

  export default function MyProductVideo({products}) {
    const firstMediaElement = products.edges[0].node.media.edges[0].node;

    if (firstMediaElement.__typename === 'Video') {
      return <Video data={firstMediaElement} />;
    }
  }
  ```

  ##### TypeScript

  ```tsx
  import {Video} from '@shopify/hydrogen-react';
  import type {ProductConnection} from '@shopify/hydrogen-react/storefront-api-types';

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

[- MediaFile](https://shopify.dev/docs/api/hydrogen-react/2026-04/components/media/mediafile)

[- Image](https://shopify.dev/docs/api/hydrogen-react/2026-04/components/media/image)

***

---



<a id="latest-components-money"></a>


## Money

The `Money` component renders a string of the Storefront API's [MoneyV2 object](https://shopify.dev/api/storefront/reference/common-objects/moneyv2) according to the `locale` in the [`ShopifyProvider` component](https://shopify.dev/docs/api/hydrogen-react/2026-04/components/shopifyprovider). The component outputs a `<div>`. You can [customize this component](https://shopify.dev/docs/api/hydrogen-react/2026-04#components) using passthrough props.

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

  ##### Description

  I am the default example

  ##### JavaScript

  ```jsx
  import {Money} from '@shopify/hydrogen-react';

  export default function ProductMoney({product}) {
    const price = product.variants.nodes[0].price;

    return <Money data={price} />;
  }
  ```

  ##### TypeScript

  ```tsx
  import {Money} from '@shopify/hydrogen-react';
  import type {Product} from '@shopify/hydrogen-react/storefront-api-types';

  export default function ProductMoney({product}: {product: Product}) {
    const price = product.variants.nodes[0].price;

    return <Money data={price} />;
  }
  ```

***

### Related

[- useMoney](https://shopify.dev/docs/api/hydrogen-react/2026-04/hooks/usemoney)

***

---



<a id="latest-components-productprice"></a>


## ProductPrice

The `ProductPrice` component renders a `Money` component with the product [`priceRange`](https://shopify.dev/api/storefront/reference/products/productpricerange)'s `maxVariantPrice` or `minVariantPrice`, for either the regular price or compare at price range.

##### Props

* **data**

  **PartialDeep\<Product, {recurseIntoArrays: true}>**

  **required**

  A Storefront API [Product object](https://shopify.dev/api/storefront/reference/products/product).

* **as**

  **ComponentGeneric**

  An HTML tag or React Component to be rendered as the base element wrapper. The default is `div`.

* **measurementSeparator**

  **ReactNode**

  Customizes the separator between the money output and the measurement output. Used with the `measurement` prop. Defaults to `'/'`.

* **priceType**

  **'regular' | 'compareAt'**

  The type of price. Valid values: `regular` (default) or `compareAt`.

* **valueType**

  **'max' | 'min' | 'unit'**

  The type of value. Valid values: `min` (default), `max` or `unit`.

* **variantId**

  **string**

  The ID of the variant.

* **withoutCurrency**

  **boolean**

  Whether to remove the currency symbol from the output.

* **withoutTrailingZeros**

  **boolean**

  Whether to remove trailing zeros (fractional money) from the output.

Examples

#### Examples

* #### Example code

  ##### Description

  I am the default example

  ##### JavaScript

  ```jsx
  import {ProductPrice} from '@shopify/hydrogen-react';

  export function ProductPricing({product}) {
    return <ProductPrice data={product} priceType="compareAt" valueType="max" />;
  }
  ```

  ##### TypeScript

  ```tsx
  import {ProductPrice} from '@shopify/hydrogen-react';
  import type {Product} from '@shopify/hydrogen-react/storefront-api-types';

  export function ProductPricing({product}: {product: Product}) {
    return <ProductPrice data={product} priceType="compareAt" valueType="max" />;
  }
  ```

***

### Related

[- ProductProvider](https://shopify.dev/docs/api/hydrogen-react/2026-04/components/productprovider)

[- Money](https://shopify.dev/docs/api/hydrogen-react/2026-04/components/money)

***

---



<a id="latest-components-productprovider"></a>


## ProductProvider

`<ProductProvider />` is a context provider that enables use of the `useProduct()` hook. It helps manage selected options and variants for a product.

##### Props

* **children**

  **React.ReactNode**

  **required**

  A `ReactNode` element.

* **data**

  **PartialDeep\<Product, {recurseIntoArrays: true}>**

  **required**

  A Storefront API [Product object](https://shopify.dev/api/storefront/reference/products/product).

* **initialVariantId**

  **InitialVariantId**

  The initially selected variant. The following logic applies to `initialVariantId`: 1. If `initialVariantId` is provided, then it's used even if it's out of stock. 2. If `initialVariantId` is provided but is `null`, then no variant is used. 3. If nothing is passed to `initialVariantId` then the first available / in-stock variant is used. 4. If nothing is passed to `initialVariantId` and no variants are in stock, then the first variant is used.

#### InitialVariantId

```ts
ProductVariantType['id'] | null
```

Examples

#### Examples

* #### ProductProvider example

  ##### Description

  I am the default example

  ##### JavaScript

  ```jsx
  import {ProductProvider, useProduct} from '@shopify/hydrogen-react';

  export function Product({product}) {
    return (
      <ProductProvider data={product} initialVariantId="some-id">
        <UsingProduct />
      </ProductProvider>
    );
  }

  function UsingProduct() {
    const {product, variants, setSelectedVariant} = useProduct();
    return (
      <>
        <h1>{product?.title}</h1>
        {variants?.map((variant) => {
          <button onClick={() => setSelectedVariant(variant)} key={variant?.id}>
            {variant?.title}
          </button>;
        })}
        ;
      </>
    );
  }
  ```

  ##### TypeScript

  ```tsx
  import {ProductProvider, useProduct} from '@shopify/hydrogen-react';
  import type {Product} from '@shopify/hydrogen-react/storefront-api-types';

  export function Product({product}: {product: Product}) {
    return (
      <ProductProvider data={product} initialVariantId="some-id">
        <UsingProduct />
      </ProductProvider>
    );
  }

  function UsingProduct() {
    const {product, variants, setSelectedVariant} = useProduct();
    return (
      <>
        <h1>{product?.title}</h1>
        {variants?.map((variant) => {
          <button onClick={() => setSelectedVariant(variant)} key={variant?.id}>
            {variant?.title}
          </button>;
        })}
        ;
      </>
    );
  }
  ```

***

### Related

[- useProduct](https://shopify.dev/docs/api/hydrogen-react/2026-04/hooks/useproduct)

[- ProductPrice](https://shopify.dev/docs/api/hydrogen-react/2026-04/components/productprice)

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
  typeof Heading
  ```

* link

  Customize links. Defaults to a React Router \`\<Link>\` component in Hydrogen and a \`\<a>\` in Hydrogen React.

  ```ts
  typeof RichTextLink
  ```

* list

  Customize lists. They can be either ordered or unordered. Defaults to \`\<ol>\` or \`\<ul>\`

  ```ts
  typeof List
  ```

* listItem

  Customize list items. Defaults to \`\<li>\`.

  ```ts
  typeof ListItem
  ```

* paragraph

  Customize paragraphs. Defaults to \`\<p>\`

  ```ts
  typeof Paragraph
  ```

* root

  The root node of the rich text. Defaults to \`\<div>\`

  ```ts
  typeof Root
  ```

* text

  Customize how text nodes. They can either be bold or italic. Defaults to \`\<em>\`, \`\<strong>\` or text.

  ```ts
  typeof Text
  ```

Examples

#### Examples

* #### Example code

  ##### Description

  I am the default example

  ##### JavaScript

  ```jsx
  import {RichText} from '@shopify/hydrogen-react';

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
  import {RichText} from '@shopify/hydrogen-react';

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



<a id="latest-components-shopifyprovider"></a>


## ShopifyProvider

The `ShopifyProvider` component wraps your entire app and provides functionality for many components, hooks, and utilities. The `ShopifyProvider` component also provides localization data for the app. You should place it in your app's entry point component. When `sameDomainForStorefrontApi` is enabled, Storefront API requests use the current origin, which requires a proxy setup.

##### Props

Shopify-specific values that are used in various Hydrogen React components and hooks.

* **countryIsoCode**

  **CountryCode**

  **required**

  The code designating a country, which generally follows ISO 3166-1 alpha-2 guidelines. If a territory doesn't have a country code value in the `CountryCode` enum, it might be considered a subdivision of another country. For example, the territories associated with Spain are represented by the country code `ES`, and the territories associated with the United States of America are represented by the country code `US`.

* **languageIsoCode**

  **LanguageCode**

  **required**

  `ISO 369` language codes supported by Shopify.

* **storeDomain**

  **string**

  **required**

  The full domain of your Shopify storefront URL (eg: the complete string of `{subdomain}.myshopify.com`).

* **storefrontApiVersion**

  **string**

  **required**

  The Storefront API version. This should almost always be the same as the version Hydrogen React was built for. Learn more about Shopify [API versioning](https://shopify.dev/api/usage/versioning) for more details.

* **storefrontToken**

  **string**

  **required**

  The Storefront API public access token. Refer to the [authentication](https://shopify.dev/api/storefront#authentication) documentation for more details.

* **children**

  **ReactNode**

  React children to render.

* **sameDomainForStorefrontApi**

  **boolean**

  Uses the current window\.location.origin for Storefront API requests. This requires setting up a proxy for Storefront API requests in your domain.

* **storefrontId**

  **string**

  The globally-unique identifier for the Shop

Examples

#### Examples

* #### Example code

  ##### Description

  I am the default example

  ##### JavaScript

  ```jsx
  import {ShopifyProvider, useShop} from '@shopify/hydrogen-react';

  export default function App() {
    return (
      <ShopifyProvider
        storeDomain="my-store"
        storefrontToken="abc123"
        storefrontApiVersion="2022-10"
        countryIsoCode="CA"
        languageIsoCode="EN"
      >
        <UsingUseShop />
      </ShopifyProvider>
    );
  }

  export function UsingUseShop() {
    const shop = useShop();

    return (
      <>
        <div>{shop.storeDomain}</div>
        <div>{shop.storefrontToken}</div>
        <div>{shop.storefrontApiVersion}</div>
      </>
    );
  }
  ```

  ##### TypeScript

  ```tsx
  import {ShopifyProvider, useShop} from '@shopify/hydrogen-react';

  export default function App() {
    return (
      <ShopifyProvider
        storeDomain="my-store"
        storefrontToken="abc123"
        storefrontApiVersion="2022-10"
        countryIsoCode="CA"
        languageIsoCode="EN"
      >
        <UsingUseShop />
      </ShopifyProvider>
    );
  }

  export function UsingUseShop() {
    const shop = useShop();

    return (
      <>
        <div>{shop.storeDomain}</div>
        <div>{shop.storefrontToken}</div>
        <div>{shop.storefrontApiVersion}</div>
      </>
    );
  }
  ```

***

### Related

[- useShop](https://shopify.dev/docs/api/hydrogen-react/2026-04/hooks/useshop)

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
  import {ShopPayButton} from '@shopify/hydrogen-react';

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
  import {ShopPayButton} from '@shopify/hydrogen-react';

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
  import {ShopifyProvider, ShopPayButton} from '@shopify/hydrogen-react';

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
  import {ShopifyProvider, ShopPayButton} from '@shopify/hydrogen-react';

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



<a id="latest-hooks-usecart"></a>


## useCart

Provides access to the cart object.

### Props()

`useCart` hook must be a descendent of a `CartProvider` component.

#### Returns

* **CartWithActionsDocs**

#### CartWithActionsDocs

* attributes

  The cart's attributes.

  ```ts
  Attribute[]
  ```

* buyerIdentity

  The cart's buyer identity.

  ```ts
  CartBuyerIdentity
  ```

* buyerIdentityUpdate

  A callback that updates the buyer identity in the cart. Expects the same \`buyerIdentity\` input that you would provide to the Storefront API's \`cartBuyerIdentityUpdate\` mutation.

  ```ts
  (buyerIdenity: CartBuyerIdentityInput) => void
  ```

* cartAttributesUpdate

  A callback that updates the cart attributes. Expects the same \`attributes\` input that you would provide to the Storefront API's \`cartAttributesUpdate\` mutation.

  ```ts
  (attributes: AttributeInput[]) => void
  ```

* cartCreate

  A callback that creates a cart. Expects the same input you would provide to the Storefront API's \`cartCreate\` mutation.

  ```ts
  (cart: CartInput) => void
  ```

* cartFragment

  The fragment used to query the cart object for all queries and mutations.

  ```ts
  string
  ```

* cartReady

  A boolean indicating if the cart is ready to be interacted with.

  ```ts
  boolean
  ```

* checkoutUrl

  The checkout URL for the cart, if the cart has been created in the Storefront API.

  ```ts
  string
  ```

* cost

  The cost for the cart, including the subtotal, total, taxes, and duties.

  ```ts
  CartCost
  ```

* discountCodes

  The discount codes applied to the cart.

  ```ts
  CartDiscountCode[]
  ```

* discountCodesUpdate

  A callback that updates the cart's discount codes. Expects the same \`codes\` input that you would provide to the Storefront API's \`cartDiscountCodesUpdate\` mutation.

  ```ts
  (discountCodes: string[]) => void
  ```

* error

  If an error occurred on the previous cart action, then \`error\` will exist and \`cart\` will be put back into the last valid status it was in.

  ```ts
  unknown
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

* linesAdd

  A callback that adds lines to the cart. Expects the same \`lines\` input that you would provide to the Storefront API's \`cartLinesAdd\` mutation. If a cart doesn't already exist, then it will create the cart for you.

  ```ts
  (lines: CartLineInput[]) => void
  ```

* linesRemove

  A callback that removes lines from the cart. Expects the same \`lines\` input that you would provide to the Storefront API's \`cartLinesRemove\` mutation. Only lines that are included in the \`lines\` parameter will be in the cart afterwards.

  ```ts
  (lines: string[]) => void
  ```

* linesUpdate

  A callback that updates lines in the cart. Expects the same \`lines\` input that you would provide to the Storefront API's \`cartLinesUpdate\` mutation. If a line item is not included in the \`lines\` parameter, it will still exist in the cart and will not be changed.

  ```ts
  (lines: CartLineUpdateInput[]) => void
  ```

* note

  The cart's note.

  ```ts
  string
  ```

* noteUpdate

  A callback that updates the note in the cart. Expects the same \`note\` input that you would provide to the Storefront API's \`cartNoteUpdate\` mutation.

  ```ts
  (note: string) => void
  ```

* status

  The status of the cart. This returns \`uninitialized\` when the cart is not yet created, \`creating\` when the cart is being created, \`fetching\` when an existing cart is being fetched, \`updating\` when the cart is updating, and \`idle\` when the cart isn't being created or updated.

  ```ts
  CartStatus
  ```

* totalQuantity

  The total number of items in the cart, across all lines. If there are no lines, then the value is 0.

  ```ts
  number
  ```

#### CartStatus

```ts
'uninitialized' | 'fetching' | 'creating' | 'updating' | 'idle'
```

Examples

#### Examples

* #### Example code

  ##### Description

  I am the default example

  ##### JavaScript

  ```jsx
  import {CartProvider, useCart} from '@shopify/hydrogen-react';

  export function App() {
    <CartProvider
      onLineAdd={() => {
        console.log('a line is being added');
      }}
      onLineAddComplete={() => {
        console.log('a line has been added');
      }}
    >
      <CartComponent />
    </CartProvider>;
  }

  function CartComponent() {
    const {linesAdd, status} = useCart();

    const merchandise = {merchandiseId: '{id-here}'};

    return (
      <div>
        Cart Status: {status}
        <button onClick={() => linesAdd([merchandise])}>Add Line</button>
      </div>
    );
  }
  ```

  ##### TypeScript

  ```tsx
  import {CartProvider, useCart} from '@shopify/hydrogen-react';
  import type {CartLineInput} from '@shopify/hydrogen-react/storefront-api-types';

  export function App() {
    <CartProvider
      onLineAdd={() => {
        console.log('a line is being added');
      }}
      onLineAddComplete={() => {
        console.log('a line has been added');
      }}
    >
      <CartComponent />
    </CartProvider>;
  }

  function CartComponent() {
    const {linesAdd, status} = useCart();

    const merchandise: CartLineInput = {merchandiseId: '{id-here}'};

    return (
      <div>
        Cart Status: {status}
        <button onClick={() => linesAdd([merchandise])}>Add Line</button>
      </div>
    );
  }
  ```

***

### Related

[- CartProvider](https://shopify.dev/docs/api/hydrogen-react/2026-04/components/cart/cartprovider)

***

---



<a id="latest-hooks-usecartline"></a>


## useCartLine

The `useCartLine` hook provides access to the [CartLine object](https://shopify.dev/api/storefront/unstable/objects/cartline) from the Storefront API. It must be a descendent of a `CartProvider` component.

### use​Cart​Line()

The `useCartLine` hook provides access to the [CartLine object](https://shopify.dev/api/storefront/2026-04/objects/cartline) from the Storefront API. It must be a descendent of a `CartProvider` component.

#### Returns

* **CartLinePartialDeep**

#### CartLinePartialDeep

```ts
PartialDeep<
  CartLine | ComponentizableCartLine,
  {recurseIntoArrays: true}
>
```

Examples

#### Examples

* #### Example code

  ##### Description

  I am the default example

  ##### JavaScript

  ```jsx
  import {CartLineProvider, useCartLine} from '@shopify/hydrogen-react';

  export function CartWrapper({cart}) {
    const firstCartLine = cart.lines.nodes[0];
    return (
      <CartLineProvider line={firstCartLine}>
        <CartLineQuantity />
      </CartLineProvider>
    );
  }

  function CartLineQuantity() {
    const cartLine = useCartLine();

    return <div>{cartLine.quantity}</div>;
  }
  ```

  ##### TypeScript

  ```tsx
  import {CartLineProvider, useCartLine} from '@shopify/hydrogen-react';
  import type {Cart} from '@shopify/hydrogen-react/storefront-api-types';

  export function CartWrapper({cart}: {cart: Cart}) {
    const firstCartLine = cart.lines.nodes[0];
    return (
      <CartLineProvider line={firstCartLine}>
        <CartLineQuantity />
      </CartLineProvider>
    );
  }

  function CartLineQuantity() {
    const cartLine = useCartLine();

    return <div>{cartLine.quantity}</div>;
  }
  ```

***

### Related

[- CartLineProvider](https://shopify.dev/docs/api/hydrogen-react/2026-04/components/cart/cartlineprovider)

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

  ##### Description

  I am the default example

  ##### JavaScript

  ```jsx
  import React, {useEffect} from 'react';
  import {useLoadScript} from '@shopify/hydrogen-react';

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
  import {useLoadScript} from '@shopify/hydrogen-react';

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
  Intl.NumberFormatPart[]
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

  ##### Description

  I am the default example

  ##### JavaScript

  ```jsx
  import {useMoney, ShopifyProvider} from '@shopify/hydrogen-react';

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
  import {useMoney, ShopifyProvider} from '@shopify/hydrogen-react';
  import type {MoneyV2} from '@shopify/hydrogen-react/storefront-api-types';

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

[- Money](https://shopify.dev/docs/api/hydrogen-react/2026-04/components/money)

***

---



<a id="latest-hooks-useproduct"></a>


## useProduct

Provides access to the product value passed to `<ProductProvider />`. It also includes properties for selecting product variants, options, and selling plans.

##### Props

**`PartialDeep< UseProductObjects, {recurseIntoArrays: true} > & UseProductFunctions`**

#### UseProductFunctions

* **isOptionInStock**

  **(name: string, value: string) => boolean**

  **required**

  A callback that returns a boolean indicating if the option is in stock.

* **setSelectedOption**

  **(name: string, value: string) => void**

  **required**

  A callback to set the selected option.

* **setSelectedOptions**

  **(options: SelectedOptions) => void**

  **required**

  A callback to set multiple selected options at once.

* **setSelectedSellingPlan**

  **( sellingPlan: PartialDeep\<SellingPlanType, {recurseIntoArrays: true}>, ) => void**

  **required**

  A callback to set the selected selling plan to the one passed as an argument.

* **setSelectedVariant**

  **( variant: PartialDeep\<ProductVariantType, {recurseIntoArrays: true}> | null, ) => void**

  **required**

  A callback to set the selected variant to the variant passed as an argument.

#### UseProductObjects

* **options**

  **OptionWithValues\[]**

  **required**

  An array of the product's options and values.

* **product**

  **Product**

  **required**

  The raw product from the Storefront API

* **selectedOptions**

  **SelectedOptions**

  **required**

* **variants**

  **ProductVariant\[]**

  **required**

  An array of the variant `nodes` from the `VariantConnection`.

* **selectedSellingPlan**

  **SellingPlanType**

  The selected selling plan.

* **selectedSellingPlanAllocation**

  **SellingPlanAllocationType**

  The selected selling plan allocation.

* **selectedVariant**

  **ProductVariantType | null**

  The selected variant.

* **sellingPlanGroups**

  **(Omit\<SellingPlanGroup, "sellingPlans"> & { sellingPlans: SellingPlan\[]; })\[]**

  The selling plan groups.

* **sellingPlanGroupsConnection**

  **SellingPlanGroupConnection**

* **variantsConnection**

  **ProductVariantConnection**

#### UseProductObjects

* options

  An array of the product's options and values.

  ```ts
  OptionWithValues[]
  ```

* product

  The raw product from the Storefront API

  ```ts
  Product
  ```

* selectedOptions

  ```ts
  SelectedOptions
  ```

* selectedSellingPlan

  The selected selling plan.

  ```ts
  SellingPlanType
  ```

* selectedSellingPlanAllocation

  The selected selling plan allocation.

  ```ts
  SellingPlanAllocationType
  ```

* selectedVariant

  The selected variant.

  ```ts
  ProductVariantType | null
  ```

* sellingPlanGroups

  The selling plan groups.

  ```ts
  (Omit<SellingPlanGroup, "sellingPlans"> & { sellingPlans: SellingPlan[]; })[]
  ```

* sellingPlanGroupsConnection

  ```ts
  SellingPlanGroupConnection
  ```

* variants

  An array of the variant \`nodes\` from the \`VariantConnection\`.

  ```ts
  ProductVariant[]
  ```

* variantsConnection

  ```ts
  ProductVariantConnection
  ```

#### OptionWithValues

* name

  ```ts
  string
  ```

* values

  ```ts
  string[]
  ```

#### SelectedOptions



#### UseProductFunctions

* isOptionInStock

  A callback that returns a boolean indicating if the option is in stock.

  ```ts
  (name: string, value: string) => boolean
  ```

* setSelectedOption

  A callback to set the selected option.

  ```ts
  (name: string, value: string) => void
  ```

* setSelectedOptions

  A callback to set multiple selected options at once.

  ```ts
  (options: SelectedOptions) => void
  ```

* setSelectedSellingPlan

  A callback to set the selected selling plan to the one passed as an argument.

  ```ts
  (
      sellingPlan: PartialDeep<SellingPlanType, {recurseIntoArrays: true}>,
    ) => void
  ```

* setSelectedVariant

  A callback to set the selected variant to the variant passed as an argument.

  ```ts
  (
      variant: PartialDeep<ProductVariantType, {recurseIntoArrays: true}> | null,
    ) => void
  ```

Examples

#### Examples

* #### Example code

  ##### Description

  I am the default example

  ##### JavaScript

  ```jsx
  import {ProductProvider, useProduct} from '@shopify/hydrogen-react';

  export function Product({product}) {
    return (
      <ProductProvider data={product} initialVariantId="some-id">
        <UsingProduct />
      </ProductProvider>
    );
  }

  function UsingProduct() {
    const {product, variants, setSelectedVariant} = useProduct();
    return (
      <>
        <h1>{product?.title}</h1>
        {variants?.map((variant) => {
          <button onClick={() => setSelectedVariant(variant)} key={variant?.id}>
            {variant?.title}
          </button>;
        })}
        ;
      </>
    );
  }
  ```

  ##### TypeScript

  ```tsx
  import {ProductProvider, useProduct} from '@shopify/hydrogen-react';
  import type {Product} from '@shopify/hydrogen-react/storefront-api-types';

  export function Product({product}: {product: Product}) {
    return (
      <ProductProvider data={product} initialVariantId="some-id">
        <UsingProduct />
      </ProductProvider>
    );
  }

  function UsingProduct() {
    const {product, variants, setSelectedVariant} = useProduct();
    return (
      <>
        <h1>{product?.title}</h1>
        {variants?.map((variant) => {
          <button onClick={() => setSelectedVariant(variant)} key={variant?.id}>
            {variant?.title}
          </button>;
        })}
        ;
      </>
    );
  }
  ```

***

### Related

[- ProductProvider](https://shopify.dev/docs/api/hydrogen-react/2026-04/components/productprovider)

***

---



<a id="latest-hooks-useshop"></a>


## useShop

Provides access to the `shopifyConfig` prop of `<ShopifyProvider/>`.

### use​Shop()

Provides access to the `shopifyConfig` prop of `<ShopifyProvider/>`. Must be a descendent of `<ShopifyProvider/>`.

#### Returns

* **ShopifyContextValue**

#### ShopifyContextValue

* countryIsoCode

  The code designating a country, which generally follows ISO 3166-1 alpha-2 guidelines. If a territory doesn't have a country code value in the \`CountryCode\` enum, it might be considered a subdivision of another country. For example, the territories associated with Spain are represented by the country code \`ES\`, and the territories associated with the United States of America are represented by the country code \`US\`.

  ```ts
  CountryCode
  ```

* getPublicTokenHeaders

  Returns an object that contains headers that are needed for each query to Storefront API GraphQL endpoint. This uses the public Storefront API token. By default, it will use the config you passed in when creating \`\<ShopifyProvider/>\`. However, you can override the following settings on each invocation of \`getPublicTokenHeaders({...})\`: - \`contentType\` - \`storefrontToken\`

  ```ts
  (props: GetPublicTokenHeadersProps) => Record<string, string>
  ```

* getShopifyDomain

  Creates the fully-qualified URL to your myshopify.com domain. By default, it will use the config you passed in when calling \`\<ShopifyProvider/>\`. However, you can override the following settings on each invocation of \`getShopifyDomain({...})\`: - \`storeDomain\`

  ```ts
  (props?: GetShopifyDomainProps) => string
  ```

* getStorefrontApiUrl

  Creates the fully-qualified URL to your store's GraphQL endpoint. By default, it will use the config you passed in when creating \`\<ShopifyProvider/>\`. However, you can override the following settings on each invocation of \`getStorefrontApiUrl({...})\`: - \`storeDomain\` - \`storefrontApiVersion\`

  ```ts
  (props?: GetStorefrontApiUrlProps) => string
  ```

* languageIsoCode

  \`ISO 369\` language codes supported by Shopify.

  ```ts
  LanguageCode
  ```

* sameDomainForStorefrontApi

  Uses the current window\.location.origin for Storefront API requests. This requires setting up a proxy for Storefront API requests in your domain.

  ```ts
  boolean
  ```

* storeDomain

  The full domain of your Shopify storefront URL (eg: the complete string of \`{subdomain}.myshopify.com\`).

  ```ts
  string
  ```

* storefrontApiVersion

  The Storefront API version. This should almost always be the same as the version Hydrogen React was built for. Learn more about Shopify \[API versioning]\(https://shopify.dev/api/usage/versioning) for more details.

  ```ts
  string
  ```

* storefrontId

  The globally-unique identifier for the Shop

  ```ts
  string
  ```

* storefrontToken

  The Storefront API public access token. Refer to the \[authentication]\(https://shopify.dev/api/storefront#authentication) documentation for more details.

  ```ts
  string
  ```

#### GetPublicTokenHeadersProps

* contentType

  Customizes which \`"content-type"\` header is added when using \`getPrivateTokenHeaders()\` and \`getPublicTokenHeaders()\`. When fetching with a \`JSON.stringify()\`-ed \`body\`, use \`"json"\`. When fetching with a \`body\` that is a plain string, use \`"graphql"\`. Defaults to \`"json"\`

  ```ts
  'json' | 'graphql'
  ```

* storefrontToken

  The Storefront API access token. Refer to the \[authentication]\(https://shopify.dev/api/storefront#authentication) documentation for more details.

  ```ts
  string
  ```

#### GetShopifyDomainProps

* storeDomain

  ```ts
  string
  ```

#### GetStorefrontApiUrlProps

* storeDomain

  The host name of the domain (eg: \`{shop}.myshopify.com\`).

  ```ts
  string
  ```

* storefrontApiVersion

  The Storefront API version. This should almost always be the same as the version Hydrogen-UI was built for. Learn more about Shopify \[API versioning]\(https://shopify.dev/api/usage/versioning) for more details.

  ```ts
  string
  ```

Examples

#### Examples

* #### Example code

  ##### Description

  I am the default example

  ##### JavaScript

  ```jsx
  import {ShopifyProvider, useShop} from '@shopify/hydrogen-react';

  export default function App() {
    return (
      <ShopifyProvider
        storeDomain="my-store"
        storefrontToken="abc123"
        storefrontApiVersion="2022-10"
        countryIsoCode="CA"
        languageIsoCode="EN"
      >
        <UsingUseShop />
      </ShopifyProvider>
    );
  }

  export function UsingUseShop() {
    const shop = useShop();

    return (
      <>
        <div>{shop.storeDomain}</div>
        <div>{shop.storefrontToken}</div>
        <div>{shop.storefrontApiVersion}</div>
      </>
    );
  }
  ```

  ##### TypeScript

  ```tsx
  import {ShopifyProvider, useShop} from '@shopify/hydrogen-react';

  export default function App() {
    return (
      <ShopifyProvider
        storeDomain="my-store"
        storefrontToken="abc123"
        storefrontApiVersion="2022-10"
        countryIsoCode="CA"
        languageIsoCode="EN"
      >
        <UsingUseShop />
      </ShopifyProvider>
    );
  }

  export function UsingUseShop() {
    const shop = useShop();

    return (
      <>
        <div>{shop.storeDomain}</div>
        <div>{shop.storefrontToken}</div>
        <div>{shop.storefrontApiVersion}</div>
      </>
    );
  }
  ```

***

### Related

[- ShopifyProvider](https://shopify.dev/docs/api/hydrogen-react/2026-04/components/shopifyprovider)

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

  ##### Description

  I am the default example

  ##### JavaScript

  ```jsx
  import * as React from 'react';
  import {useShopifyCookies} from '@shopify/hydrogen-react';

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
  import {useShopifyCookies} from '@shopify/hydrogen-react';

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

[- sendShopifyAnalytics](https://shopify.dev/docs/api/hydrogen-react/2026-04/utilities/sendshopifyanalytics)

[- getClientBrowserParameters](https://shopify.dev/docs/api/hydrogen-react/2026-04/utilities/getclientbrowserparameters)

[- getTrackingValues](https://shopify.dev/docs/api/hydrogen-react/2026-04/utilities/gettrackingvalues)

***

---



<a id="latest-utilities-createstorefrontclient"></a>


## createStorefrontClient

The `createStorefrontClient()` function creates helpers that enable you to quickly query the Shopify Storefront API.

When used on the server, it is recommended to use the `privateStorefrontToken` prop. When used on the client, it is recommended to use the `publicStorefrontToken` prop or consider using `<ShopifyProvider/>` instead.

### create​Storefront​Client(**[input1](#props-propertydetail-input1)**​)

#### Parameters

* **input1**

  **StorefrontClientProps**

  **required**

#### Returns

* **StorefrontClientReturn**

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

#### StorefrontClientReturn

* getPrivateTokenHeaders

  Returns an object that contains headers that are needed for each query to Storefront API GraphQL endpoint. This method uses the private Server-to-Server token which reduces the chance of throttling but must not be exposed to clients. Server-side calls should prefer using this over \`getPublicTokenHeaders()\`. By default, it will use the config you passed in when calling \`createStorefrontClient()\`. However, you can override the following settings on each invocation of \`getPrivateTokenHeaders({...})\`: - \`contentType\` - \`privateStorefrontToken\` - \`buyerIp\` Note that \`contentType\` defaults to what you configured in \`createStorefrontClient({...})\` and defaults to \`'json'\`, but a specific call may require using \`graphql\`. When using \`JSON.stringify()\` on the \`body\`, use \`'json'\`; otherwise, use \`'graphql'\`.

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "contentType">> & Pick<StorefrontClientProps, "privateStorefrontToken"> & { buyerIp?: string; }) => Record<string, string>
  ```

* getPublicTokenHeaders

  Returns an object that contains headers that are needed for each query to Storefront API GraphQL endpoint. This method uses the public token which increases the chance of throttling but also can be exposed to clients. Server-side calls should prefer using \`getPublicTokenHeaders()\`. By default, it will use the config you passed in when calling \`createStorefrontClient()\`. However, you can override the following settings on each invocation of \`getPublicTokenHeaders({...})\`: - \`contentType\` - \`publicStorefrontToken\` Note that \`contentType\` defaults to what you configured in \`createStorefrontClient({...})\` and defaults to \`'json'\`, but a specific call may require using \`graphql\`. When using \`JSON.stringify()\` on the \`body\`, use \`'json'\`; otherwise, use \`'graphql'\`.

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "contentType">> & Pick<StorefrontClientProps, "publicStorefrontToken">) => Record<string, string>
  ```

* getShopifyDomain

  Creates the fully-qualified URL to your myshopify.com domain. By default, it will use the config you passed in when calling \`createStorefrontClient()\`. However, you can override the following settings on each invocation of \`getShopifyDomain({...})\`: - \`storeDomain\`

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "storeDomain">>) => string
  ```

* getStorefrontApiUrl

  Creates the fully-qualified URL to your store's GraphQL endpoint. By default, it will use the config you passed in when calling \`createStorefrontClient()\`. However, you can override the following settings on each invocation of \`getStorefrontApiUrl({...})\`: - \`storeDomain\` - \`storefrontApiVersion\`

  ```ts
  (props?: Partial<Pick<StorefrontClientProps, "storeDomain" | "storefrontApiVersion">>) => string
  ```

Examples

#### Examples

* ####

  ##### Description

  I am the default example

  ##### Client Example in NextJS

  ```js
  import {createStorefrontClient} from '@shopify/hydrogen-react';

  export const client = createStorefrontClient({
    storeDomain: 'https://{store-name}.myshopify.com',
    storefrontApiVersion: '2025-10',
    privateStorefrontToken: '{private token for server-side requests}',
  });

  // in another file where you need to make queries, for example in NextJS server-side:

  // a Storefront API query
  const GRAPHQL_QUERY = `
    query {
      shop {
        name
      }
    }
  `;

  // make the request
  export async function getServerSideProps() {
    // Get the Storefront API url
    const response = await fetch(client.getStorefrontApiUrl(), {
      body: JSON.stringify({
        query: GRAPHQL_QUERY,
      }),
      // Generate the headers using the private token. Additionally, you can pass in the buyer's IP address from the request object to help prevent bad actors from overloading your store.
      headers: client.getPrivateTokenHeaders({buyerIp: '...'}),
      method: 'POST',
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const json = await response.json();

    return {props: json};
  }
  ```

***

### Related

[- ShopifyProvider](https://shopify.dev/docs/api/hydrogen-react/2026-04/components/shopifyprovider)

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
  import {decodeEncodedVariant} from '@shopify/hydrogen-react';

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

[- isOptionValueCombinationInEncodedVariant](https://shopify.dev/docs/api/hydrogen-react/2026-04/utilities/isoptionvaluecombinationinencodedvariant)

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

  ##### Description

  I am the default example

  ##### JavaScript

  ```jsx
  import {flattenConnection} from '@shopify/hydrogen-react';

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
  import {flattenConnection} from '@shopify/hydrogen-react';
  import type {ProductConnection} from '@shopify/hydrogen-react/storefront-api-types';

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

  ##### Description

  I am the default example

  ##### getAdjacentAndFirstAvailableVariants example

  ```js
  import {getAdjacentAndFirstAvailableVariants} from '@shopify/hydrogen-react';

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

[- getProductOptions](https://shopify.dev/docs/api/hydrogen-react/2026-04/utilities/getproductoptions)

[- mapSelectedProductOptionToObject](https://shopify.dev/docs/api/hydrogen-react/2026-04/utilities/mapselectedproductoptiontoobject)

[- useSelectedOptionInUrlParam](https://shopify.dev/docs/api/hydrogen-react/2026-04/utilities/useselectedoptioninurlparam)

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

  ##### Description

  I am the default example

  ##### JavaScript

  ```jsx
  import * as React from 'react';
  import {useEffect} from 'react';
  import {getClientBrowserParameters} from '@shopify/hydrogen-react';

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
  import {getClientBrowserParameters} from '@shopify/hydrogen-react';

  export default function App({Component, pageProps}) {
    useEffect(() => {
      getClientBrowserParameters();
    });

    return <Component {...pageProps} />;
  }
  ```

***

### Related

[- sendShopifyAnalytics](https://shopify.dev/docs/api/hydrogen-react/2026-04/utilities/sendshopifyanalytics)

[- useShopifyCookies](https://shopify.dev/docs/api/hydrogen-react/2026-04/hooks/useshopifycookies)

***

---



<a id="latest-utilities-getproductoptions"></a>


## getProductOptions

Returns a product options array with its relevant information about the variant. This function supports combined listing products and products with 2000 variants limit.

Examples

#### Examples

* #### Example code

  ##### Description

  I am the default example

  ##### JavaScript

  ```jsx
  import React from 'react';
  import {getProductOptions} from '@shopify/hydrogen-react';

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
  } from '@shopify/hydrogen-react';
  import type {
    ProductOptionValueSwatch,
    Maybe,
  } from '@shopify/hydrogen-react/storefront-api-types';

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

[- mapSelectedProductOptionToObject](https://shopify.dev/docs/api/hydrogen-react/2026-04/utilities/mapselectedproductoptiontoobject)

[- getAdjacentAndFirstAvailableVariants](https://shopify.dev/docs/api/hydrogen-react/2026-04/utilities/getadjacentandfirstavailablevariants)

[- useSelectedOptionInUrlParam](https://shopify.dev/docs/api/hydrogen-react/2026-04/utilities/useselectedoptioninurlparam)

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

  ##### Description

  I am the default example

  ##### JavaScript

  ```jsx
  import * as React from 'react';
  import {useEffect} from 'react';
  import {getShopifyCookies} from '@shopify/hydrogen-react';

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
  import {getShopifyCookies} from '@shopify/hydrogen-react';

  export default function App({Component, pageProps}) {
    useEffect(() => {
      getShopifyCookies(document.cookie);
    });

    return <Component {...pageProps} />;
  }
  ```

***

### Related

[- useShopifyCookies](https://shopify.dev/docs/api/hydrogen-react/2026-04/hooks/useshopifycookies)

[- getTrackingValues](https://shopify.dev/docs/api/hydrogen-react/2026-04/utilities/gettrackingvalues)

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

  ##### Description

  I am the default example

  ##### JavaScript

  ```jsx
  import {getTrackingValues} from '@shopify/hydrogen-react';

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
  import {getTrackingValues} from '@shopify/hydrogen-react';

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

[- useShopifyCookies](https://shopify.dev/docs/api/hydrogen-react/2026-04/hooks/useshopifycookies)

[- getShopifyCookies](https://shopify.dev/docs/api/hydrogen-react/2026-04/utilities/getshopifycookies)

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
  import {isOptionValueCombinationInEncodedVariant} from '@shopify/hydrogen-react';

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

[- decodeEncodedVariant](https://shopify.dev/docs/api/hydrogen-react/2026-04/utilities/decodeencodedvariant)

***

---



<a id="latest-utilities-mapselectedproductoptiontoobject"></a>


## mapSelectedProductOptionToObject

Converts the product selected option into an `Object<key, value>` format for building URL query params

Examples

#### Examples

* ####

  ##### Description

  I am the default example

  ##### mapSelectedProductOptionToObject example

  ```js
  import {mapSelectedProductOptionToObject} from '@shopify/hydrogen-react';

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

[- getProductOptions](https://shopify.dev/docs/api/hydrogen-react/2026-04/utilities/getproductoptions)

[- getAdjacentAndFirstAvailableVariants](https://shopify.dev/docs/api/hydrogen-react/2026-04/utilities/getadjacentandfirstavailablevariants)

[- useSelectedOptionInUrlParam](https://shopify.dev/docs/api/hydrogen-react/2026-04/utilities/useselectedoptioninurlparam)

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

  ##### Description

  I am the default example

  ##### JavaScript

  ```js
  import {parseGid} from '@shopify/hydrogen-react';

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

#### Parameters

* **metafield**

  **PartialDeep\<MetafieldBaseType, {recurseIntoArrays: true}>**

  **required**

#### Returns

* **ReturnGeneric**

Examples

#### Examples

* #### Example code

  ##### Description

  I am the default example

  ##### JavaScript

  ```jsx
  import {parseMetafield} from '@shopify/hydrogen-react';

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
  import {parseMetafield, type ParsedMetafields} from '@shopify/hydrogen-react';
  import type {Metafield} from '@shopify/hydrogen-react/storefront-api-types';

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

  ##### Description

  I am the default example

  ##### JavaScript

  ```jsx
  import {
    sendShopifyAnalytics,
    getClientBrowserParameters,
    AnalyticsEventName,
    useShopifyCookies,
  } from '@shopify/hydrogen-react';
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
  } from '@shopify/hydrogen-react';
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

[- useShopifyCookies](https://shopify.dev/docs/api/hydrogen-react/2026-04/hooks/useshopifycookies)

[- getClientBrowserParameters](https://shopify.dev/docs/api/hydrogen-react/2026-04/utilities/getclientbrowserparameters)

***

---



<a id="latest-utilities-storefront-api-types"></a>


## Storefront API Types

If you are using TypeScript, pre-generated TypeScript types are available that match the Storefront API's GraphQL schema. These types can be used when you need to manually create an object that matches a Storefront API object's shape.

These types also work really well with the new [`satisfies` operator](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-9.html#the-satisfies-operator) introduced in TypeScript 4.9, though you don't need to use `satisfies` to use these types.

Examples

#### Examples

* ####

  ##### Description

  I am the default example

  ##### Storefront API Types in TypeScript

  ```ts
  import type {
    Product,
    Collection,
  } from '@shopify/hydrogen-react/storefront-api-types';

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

[- storefrontApiCustomScalars](https://shopify.dev/docs/api/hydrogen-react/2026-04/utilities/storefrontapicustomscalars)

[- Storefront Schema](https://shopify.dev/docs/api/hydrogen-react/2026-04/utilities/storefront-schema)

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

  ##### Description

  I am the default example

  ##### GraphQL Config File

  ```yml
  schema: node_modules/@shopify/hydrogen-react/storefront.schema.json
  ```

***

### Related

[- storefrontApiCustomScalars](https://shopify.dev/docs/api/hydrogen-react/2026-04/utilities/storefrontapicustomscalars)

[- Storefront API Types](https://shopify.dev/docs/api/hydrogen-react/2026-04/utilities/storefront-api-types)

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

  ##### Description

  I am the default example

  ##### Codegen Config

  ```js
  import {storefrontApiCustomScalars} from '@shopify/hydrogen-react';

  const config = {
    overwrite: true,
    schema: require.resolve('@shopify/hydrogen-react/storefront.schema.json'),
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

[- Storefront Schema](https://shopify.dev/docs/api/hydrogen-react/2026-04/utilities/storefront-schema)

[- Storefront API Types](https://shopify.dev/docs/api/hydrogen-react/2026-04/utilities/storefront-api-types)

***

---



<a id="latest-utilities-useselectedoptioninurlparam"></a>


## useSelectedOptionInUrlParam

Sets the url params to the selected option.

Examples

#### Examples

* ####

  ##### Description

  I am the default example

  ##### useSelectedOptionInUrlParam example

  ```js
  import {useSelectedOptionInUrlParam} from '@shopify/hydrogen-react';

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

[- getProductOptions](https://shopify.dev/docs/api/hydrogen-react/2026-04/utilities/getproductoptions)

[- getAdjacentAndFirstAvailableVariants](https://shopify.dev/docs/api/hydrogen-react/2026-04/utilities/getadjacentandfirstavailablevariants)

***

---
