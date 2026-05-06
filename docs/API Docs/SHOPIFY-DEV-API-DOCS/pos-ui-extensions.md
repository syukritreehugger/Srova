# Shopify Pos Ui Extensions Reference (Indonesian / English)

> Referensi lengkap **Pos Ui Extensions** Shopify API yang disusun ulang dari https://shopify.dev/docs/api/pos-ui-extensions.
> Dokumen ini dirancang untuk pengembang berbahasa Indonesia, namun seluruh konten teknis (skema, tipe, nama field, contoh kode) dipertahankan dalam bahasa Inggris asli untuk memastikan akurasi.

| Item | Nilai |
|------|-------|
| Sumber | `https://shopify.dev/docs/api/pos-ui-extensions` |
| Total halaman | **70** |
| Tanggal kompilasi | 2026-05-01 |
| Bahasa | Indonesia (intro/ToC) + English (konten teknis) |



## Daftar Isi (Table of Contents)

- [Landing](#landing)
- [latest](#latest)
- [latest / target-apis](#latest-target-apis)
- [latest / target-apis / contextual-apis / cart-api](#latest-target-apis-contextual-apis-cart-api)
- [latest / target-apis / contextual-apis / cart-line-item-api](#latest-target-apis-contextual-apis-cart-line-item-api)
- [latest / target-apis / contextual-apis / customer-api](#latest-target-apis-contextual-apis-customer-api)
- [latest / target-apis / contextual-apis / draft-order-api](#latest-target-apis-contextual-apis-draft-order-api)
- [latest / target-apis / contextual-apis / order-api](#latest-target-apis-contextual-apis-order-api)
- [latest / target-apis / contextual-apis / product-api](#latest-target-apis-contextual-apis-product-api)
- [latest / target-apis / platform-apis / camera-api](#latest-target-apis-platform-apis-camera-api)
- [latest / target-apis / platform-apis / cash-drawer-api](#latest-target-apis-platform-apis-cash-drawer-api)
- [latest / target-apis / platform-apis / connectivity-api](#latest-target-apis-platform-apis-connectivity-api)
- [latest / target-apis / platform-apis / device-api](#latest-target-apis-platform-apis-device-api)
- [latest / target-apis / platform-apis / navigation-api](#latest-target-apis-platform-apis-navigation-api)
- [latest / target-apis / platform-apis / pinpad-api](#latest-target-apis-platform-apis-pinpad-api)
- [latest / target-apis / platform-apis / print-api](#latest-target-apis-platform-apis-print-api)
- [latest / target-apis / platform-apis / scanner-api](#latest-target-apis-platform-apis-scanner-api)
- [latest / target-apis / platform-apis / storage-api](#latest-target-apis-platform-apis-storage-api)
- [latest / target-apis / standard-apis / action-api](#latest-target-apis-standard-apis-action-api)
- [latest / target-apis / standard-apis / locale-api](#latest-target-apis-standard-apis-locale-api)
- [latest / target-apis / standard-apis / product-search-api](#latest-target-apis-standard-apis-product-search-api)
- [latest / target-apis / standard-apis / session-api](#latest-target-apis-standard-apis-session-api)
- [latest / target-apis / standard-apis / toast-api](#latest-target-apis-standard-apis-toast-api)
- [latest / targets](#latest-targets)
- [latest / targets / cart-details](#latest-targets-cart-details)
- [latest / targets / customer-details](#latest-targets-customer-details)
- [latest / targets / draft-order-details](#latest-targets-draft-order-details)
- [latest / targets / home-screen](#latest-targets-home-screen)
- [latest / targets / order-details](#latest-targets-order-details)
- [latest / targets / post-exchange](#latest-targets-post-exchange)
- [latest / targets / post-purchase](#latest-targets-post-purchase)
- [latest / targets / post-return](#latest-targets-post-return)
- [latest / targets / product-details](#latest-targets-product-details)
- [latest / targets / receipts](#latest-targets-receipts)
- [latest / targets / register-details](#latest-targets-register-details)
- [latest / web-components](#latest-web-components)
- [latest / web-components / actions / button](#latest-web-components-actions-button)
- [latest / web-components / actions / clickable](#latest-web-components-actions-clickable)
- [latest / web-components / actions / link](#latest-web-components-actions-link)
- [latest / web-components / actions / tile](#latest-web-components-actions-tile)
- [latest / web-components / feedback-and-status-indicators / badge](#latest-web-components-feedback-and-status-indicators-badge)
- [latest / web-components / feedback-and-status-indicators / banner](#latest-web-components-feedback-and-status-indicators-banner)
- [latest / web-components / feedback-and-status-indicators / modal](#latest-web-components-feedback-and-status-indicators-modal)
- [latest / web-components / feedback-and-status-indicators / spinner](#latest-web-components-feedback-and-status-indicators-spinner)
- [latest / web-components / forms / choice-list](#latest-web-components-forms-choice-list)
- [latest / web-components / forms / date-field](#latest-web-components-forms-date-field)
- [latest / web-components / forms / date-picker](#latest-web-components-forms-date-picker)
- [latest / web-components / forms / date-spinner](#latest-web-components-forms-date-spinner)
- [latest / web-components / forms / email-field](#latest-web-components-forms-email-field)
- [latest / web-components / forms / number-field](#latest-web-components-forms-number-field)
- [latest / web-components / forms / search-field](#latest-web-components-forms-search-field)
- [latest / web-components / forms / switch](#latest-web-components-forms-switch)
- [latest / web-components / forms / text-area](#latest-web-components-forms-text-area)
- [latest / web-components / forms / text-field](#latest-web-components-forms-text-field)
- [latest / web-components / forms / time-field](#latest-web-components-forms-time-field)
- [latest / web-components / forms / time-picker](#latest-web-components-forms-time-picker)
- [latest / web-components / layout-and-structure / box](#latest-web-components-layout-and-structure-box)
- [latest / web-components / layout-and-structure / divider](#latest-web-components-layout-and-structure-divider)
- [latest / web-components / layout-and-structure / empty-state](#latest-web-components-layout-and-structure-empty-state)
- [latest / web-components / layout-and-structure / heading](#latest-web-components-layout-and-structure-heading)
- [latest / web-components / layout-and-structure / page](#latest-web-components-layout-and-structure-page)
- [latest / web-components / layout-and-structure / pos-block](#latest-web-components-layout-and-structure-pos-block)
- [latest / web-components / layout-and-structure / scroll-box](#latest-web-components-layout-and-structure-scroll-box)
- [latest / web-components / layout-and-structure / section](#latest-web-components-layout-and-structure-section)
- [latest / web-components / layout-and-structure / stack](#latest-web-components-layout-and-structure-stack)
- [latest / web-components / layout-and-structure / tabs](#latest-web-components-layout-and-structure-tabs)
- [latest / web-components / layout-and-structure / text](#latest-web-components-layout-and-structure-text)
- [latest / web-components / media-and-visuals / embed](#latest-web-components-media-and-visuals-embed)
- [latest / web-components / media-and-visuals / icon](#latest-web-components-media-and-visuals-icon)
- [latest / web-components / media-and-visuals / image](#latest-web-components-media-and-visuals-image)


---



<a id="landing"></a>


## POS UI extensions

Build extensions that integrate into [Shopify's Point of Sale](https://shopify.dev/docs/apps/build/pos) interface. For example, you can add a clickable tile to the POS home screen that launches your app's features, insert custom content sections into checkout and sales processes, or show additional product details.

Extensions run in the context of key merchant workflows, so always prioritize performance.

### Getting started

POS UI extensions require a TOML configuration file and TSX (or JSX) files containing your Preact-based extension code.

Use [Shopify CLI](https://shopify.dev/docs/api/shopify-cli) to scaffold your extension with the essential configuration and files. You can alter the default configuration later to customize the way your POS UI extension operates.

### Generate scaffold

```terminal
cd my-app
shopify app generate extension
```

[Tutorial - Getting started with POS UI extensions](https://shopify.dev/docs/apps/build/pos/getting-started)

***

### Building your extension

POS UI extensions are made up of three interconnected parts: targets that determine where your extension appears in the POS interface, target APIs that provide access to data and functionality based on your chosen target, and web components that define which interface elements you can use.

#### Targets: Choose where your extension appears

Targets define where your extensions appear within Shopify's POS interface and what capabilities they have. There are three types of targets:

| Target type | Description |
| - | - |
| Tile | Appear on the smart grid (homepage) of the POS system. Use to show status, quickly access common actions, and initiate workflows. |
| Action | Trigger workflows and display modals. This target has two varieties, commonly used together: - **Menu item:** Add buttons to action menus on native POS screens. Use to provide entry points that launch modals.
- **Modal:** Display full-screen interfaces for complete workflows, forms, or multi-step processes. Modals are launched from tiles or menu items. |
| Block | Appear as inline content within native POS screens. Use to render content such as metrics, instructions, or printed content on receipts. |

[Reference - Explore all targets](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets)

![Placeholder image](https://shopify.dev/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-07/pos-overview-targets-hb2whYxm.png)

#### Target APIs: Define what your extension does

Your extension can show customer loyalty points, add warranty card printing, or capture product details. Use target APIs to access the data and functionality for each scenario.

When your extension runs, Shopify provides a `shopify` global object that you use to access data and features. Most target APIs are properties on this object. For example, `shopify.storage` persists data between sessions, `shopify.toast` displays feedback messages, and `shopify.action.presentModal()` launches full-screen workflows.

If your app uses ESLint, update your configuration to include the global `shopify` object to prevent linting errors.

[Reference - Explore all target APIs](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis)

### Storage API: Getting a single value

```typescript
import {render} from 'preact';


export default async () => {
  render(<TileComponent />, document.body);
};


export function TileComponent() {
  return (
    <s-tile
      title="Storage app"
      subheading="Get example"
      onClick={async () => {
        const storedData = await shopify.storage.get('key');
        shopify.toast.show(String(storedData ?? ''));
      }}
      enabled
    />
  );
}
```

### ESLint configuration

```javascript
module.exports = {
  globals: {
    shopify: 'readonly',
  },
};
```

#### Web components: Design your interface

Web components are the UI building blocks that you use to display data and trigger API functions. These components are native UI elements that follow [Shopify's design system](https://shopify.dev/docs/apps/design) and are built with [remote-dom](https://github.com/Shopify/remote-dom), Shopify's library for building cross-platform user interfaces.

Use web components to build interfaces that automatically adapt across iOS and Android devices running Shopify POS.

[Reference - Explore all web components](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components)

### Tile component: Render a tile on the smart grid

```typescript
import {render} from 'preact';


export default async () => {
  render(<TileComponent />, document.body);
};


export function TileComponent() {
  return (
    <s-tile
      title="My app"
      subheading="Hello world!"
      onClick={() => {
        shopify.action.presentModal();
      }}
      enabled
    />
  );
}
```

![Placeholder image](https://shopify.dev/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2026-01/tile-default-Bh6-qbCa.png)

***

### Configuration

POS UI extensions rely on a `shopify.extension.toml` file that contains the extension's configuration. This includes the extension name, type, API version, and targeting definitions.

The `name` value is what displays in the POS interface to merchants, so consider this value carefully. We recommend that the `api_version` reflects the latest supported API version.

#### Properties

POS UI extensions use the following configuration properties:

###### `api_version` required

The version of the API that's being used for the extension. If provided in the `[[extensions]]` array, then the specified API version is used instead of the root level `api_version`.

###### `[[extensions]]` required

The name of the array that contains all extensions listed in the TOML file. Contains the following properties:

* `type`: required The extension type. For more information, refer to [Extension types](https://shopify.dev/docs/apps/build/app-extensions/configure-app-extensions#extension-types).

* `name`: required The merchant-facing name of the extension. After you [generate an extension](https://shopify.dev/docs/api/shopify-cli/app/app-generate-extension), you're prompted to provide a name for your extension. The `name` property is translatable if it starts with a `t:` and uses a key defined in your translation data. For example, you might have a `t:name` key that matches a translation key called `name`. [Learn more about localization](https://shopify.dev/docs/apps/build/checkout/localized-checkout-ui-extensions#how-it-works).

* `handle`: required The unique internal identifier for the extension. After you create a draft version of the extension, or deploy an extension, you can't change the `handle` value. If not specified, the `handle` value is automatically populated using a transformed `name` value that removes any unsupported characters. For example, if you enter `google maps` as the extension name, then Shopify populates the `handle` value as `google-maps`.

* `description`: required The merchant-facing description of the extension. The `description` property is translatable if it starts with a `t:` and uses a key defined in your translation data. For example, `t:description` and you have a matching translation key called `description`. [Learn more about localization](https://shopify.dev/docs/apps/build/checkout/localized-checkout-ui-extensions#how-it-works).

###### `[[extensions.targeting]]` required

The name of the array that contains a target and its associated module. Contains the following properties:

* `target`: required

  An identifier that specifies where you're injecting your extension into the POS interface.

* `module`: required

  The path to the JavaScript or TypeScript file that contains your extension code. This file exports the extension function that renders your UI or handles events.

###### `[extensions.supported_features]`

Declares additional features for your extension. Contains the following properties:

* `runs_offline`: When set to `true`, the extension runs even when POS loses network access. Defaults to `false`. For more information, refer to [Run extensions without network access](#run-extensions-without-network-access).

### shopify.extension.toml

```toml
api_version = "2026-04"


[[extensions]]
type = "ui_extension"
name = "My POS UI extension"
handle = "my-pos-ui-extension"
description = "My POS UI extension description"


[[extensions.targeting]]
target = "pos.home.tile.render"
module = "./src/Tile.tsx"


[[extensions.targeting]]
target = "pos.home.modal.render"
module = "./src/Modal.tsx"
```

***

### App authentication

Use authenticated requests when your extension needs to fetch data or trigger actions on your own backend service. For example, you might need to display a customer's loyalty status, process a custom discount calculation, or log POS transactions to an external analytics system.

Extensions automatically include authorization headers when making requests to your app's domain. Relative URLs resolve against your `app_url`.

**Note:**

App authentication is available as of POS version 10.6.0 for extensions targeting 2025-07 or later.

ID tokens are only returned for authenticated users with proper app permissions. Without correct permissions, the token will be `null`. POS Staff members aren't authenticated users. [Learn more about configuring app permissions](https://help.shopify.com/manual/your-account/users/roles/permissions/store-permissions#apps-and-channels-permissions).

### Make requests to your app's backend

```typescript
import {render} from 'preact';
import {useState, useEffect} from 'preact/hooks';


export default async () => {
  render(<CustomerDetailsBlock />, document.body);
};


export function CustomerDetailsBlock() {
  const [loyaltyInfo, setLoyaltyInfo] = useState('');
  useEffect(() => {
    getLoyaltyInfo();
  }, [shopify.customer.id]);


  async function getLoyaltyInfo() {
    console.log('fetching', `${URL}/api/loyalty/${shopify.customer.id}`)
    const res = await fetch(`${URL}/api/loyalty/${shopify.customer.id}`);
    const json = await res.json();
    setLoyaltyInfo(json.loyaltySummary);
  }
  return (
    <s-pos-block>
      <s-box padding="large">
        <s-text>{loyaltyInfo}</s-text>
      </s-box>
    </s-pos-block>
  );
}
```

***

### Direct API access

Use direct API access when your extension needs to query or modify Shopify data in real-time. For example, you might want to update product metafields based on POS interactions, fetch detailed customer order history, or modify inventory levels during special promotions.

Make [GraphQL Admin API](https://shopify.dev/docs/api/admin-graphql) requests directly from your extension with automatic authentication. These requests are fast because Shopify handles them directly without requiring a round trip to your backend.

**Note:**

Direct API access is available as of POS version 10.6.0 for extensions targeting 2025-07 or later.

You must declare all required [access scopes](https://shopify.dev/docs/api/usage/access-scopes) in your app's TOML file. For local development, access scopes are only registered or updated when the app is deployed and installed on your test store.

### Query Shopify data directly

```typescript
import {render} from 'preact';
import {useState, useEffect} from 'preact/hooks';


// This mutation requires the `write_products` access scope.
// /docs/api/admin-graphql/latest/mutations/metafieldsset
async function mutateMetafield(productId) {
  const requestBody = {
    query: `#graphql
        mutation MetafieldsSet($metafields: [MetafieldsSetInput!]!) {
          metafieldsSet(metafields: $metafields) {
            metafields {
              key
              namespace
              value
              createdAt
              updatedAt
            }
          }
        }
      `,
    variables: {
      metafields: [
        {
          key: 'direct_api',
          namespace: 'custom',
          ownerId: `gid://shopify/Product/${productId}`,
          value: 'Example Value',
          type: 'single_line_text_field',
        },
      ],
    },
  };


  await fetch('shopify:admin/api/graphql.json', {
    method: 'POST',
    body: JSON.stringify(requestBody),
  });
}


// This query requires the `read_products` access scope.
// /docs/api/admin-graphql/latest/queries/product
async function queryProductMetafields(productId) {
  const requestBody = {
    query: `#graphql
      query GetProduct($id: ID!) {
        product(id: $id) {
          id
          metafields(first: 10) {
            edges {
              node {
                id
                namespace
                key
                value
              }
            }
          }
        }
      }
    `,
    variables: {id: `gid://shopify/Product/${productId}`},
  };
  const res = await fetch('shopify:admin/api/graphql.json', {
    method: 'POST',
    body: JSON.stringify(requestBody),
  });
  return res.json();
}


export default async () => {
  render(<ProductDetailsBlock />, document.body);
};


export function ProductDetailsBlock() {
  const [productInfo, setProductInfo] = useState('');
  useEffect(() => {
    async function getProductInfo() {
      const result = await queryProductMetafields(shopify.product.id);
      setProductInfo(JSON.stringify(result, null, 2));
    }
    getProductInfo();
  }, [shopify.product.id]);


  return (
    <s-pos-block>
      <s-box padding="large">
        <s-text>Metafields: {productInfo}</s-text>
      </s-box>
      <s-box padding="large">
        <s-text>Set Metafields: {productInfo}</s-text>
        <s-button onClick={() => mutateMetafield(shopify.product.id)}>Set Metafields</s-button>
      </s-box>
    </s-pos-block>
  );
}
```

***

### Run extensions without network access

POS UI extensions can continue to run when the merchant's device loses internet connectivity, so merchants can use your extension during network outages.

**Note:**

Extensions can run without network access in POS versions 11.0 and later. Features that require network connectivity, such as Direct API access and app authentication, don't function without network access. Use the [Connectivity API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/connectivity-api) to detect network status and handle these scenarios gracefully.

To run extensions without network access, under `[extensions.supported_features]` in your extension's `shopify.extension.toml` configuration file, set `runs_offline` to `true`. [Shopify CLI v3.92.0](https://github.com/Shopify/cli/releases/tag/3.92.0) or later is required to recognize this configuration.

When your extension runs without network access, it continues to function using locally available data and APIs that don't require network connectivity. This ensures merchants can maintain essential workflows even without an active internet connection.

###### Supported APIs

The following APIs work when your extension runs without network access:

* [Storage API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/storage-api)
* [Locale API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/locale-api)
* [Toast API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/toast-api)
* [Connectivity API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/connectivity-api)
* [Device API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/device-api)
* [Scanner API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/scanner-api)
* [Navigation API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/navigation-api)
* [Action API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/action-api)
* [PinPad API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/pinpad-api)
* [Cash Drawer API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/cash-drawer-api)
* [Camera API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/camera-api)

###### Supported targets

The following extension targets render without network access:

* [`pos.home.tile.render`](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/home-screen)
* [`pos.home.modal.render`](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/home-screen)
* [`pos.product-details.block.render`](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details)
* [`pos.product-details.action.render`](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details)
* [`pos.product-details.action.menu-item.render`](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details)
* [`pos.cart.line-item-details.action.render`](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/cart-details)
* [`pos.cart.line-item-details.action.menu-item.render`](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/cart-details)
* [`pos.transaction-complete.event.observe`](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-purchase)
* [`pos.cash-tracking-session-start.event.observe`](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/register-details)
* [`pos.cash-tracking-session-complete.event.observe`](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/register-details)
* [`pos.cart-update.event.observe`](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/cart-details)
* [`pos.receipt-header.block.render`](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/receipts)
* [`pos.receipt-footer.block.render`](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/receipts)

### shopify.extension.toml

```toml
api_version = "2026-04"


[[extensions]]
type = "ui_extension"
name = "My extension"
handle = "my-extension"
description = "An extension that runs when POS loses network access"


[extensions.supported_features]
runs_offline = true


[[extensions.targeting]]
target = "pos.home.tile.render"
module = "./src/Tile.tsx"


[[extensions.targeting]]
target = "pos.home.modal.render"
module = "./src/Modal.tsx"
```

***

### Testing and deployment

After you've built your extension, test it thoroughly and deploy it to production.

#### Local testing

**Info:**

As of API version `2026-04`, you can write unit tests for POS UI extensions using [`@shopify/ui-extensions-tester`](https://github.com/Shopify/ui-extensions/blob/2026-04-rc/packages/ui-extensions-tester/README.md). Check out the [example test suite](https://github.com/Shopify/ui-extensions/tree/2026-04/examples/testing/point-of-sale-testing-example) to get started.

Testing POS UI extensions requires a [development store](https://shopify.dev/docs/api/development-stores) and the [Shopify POS app](https://www.shopify.com/pos/pos-app) on any mobile or tablet device—no dedicated POS hardware needed. Download the POS app from the [App Store](https://apps.apple.com/us/app/shopify-point-of-sale-pos/id686830644) or [Google Play](https://play.google.com/store/apps/details?id=com.shopify.pos\&hl=en_US), log in to your development store, and start testing.

Extensions run in preview mode during development, allowing you to test functionality and iterate quickly without affecting live merchant operations.

[Tutorial - Debugging POS UI extensions](https://shopify.dev/docs/apps/build/pos/debugging)

[Tutorial - Troubleshooting POS UI extensions](https://shopify.dev/docs/apps/build/pos/troubleshooting)

#### Deployment

Use [Shopify CLI](https://shopify.dev/docs/api/shopify-cli) to deploy your app and its extensions to production.

**Note:**

Your compiled UI extension bundle can't exceed 64 KB. Shopify enforces this limit at deployment to ensure fast loading times and optimal performance. Learn how to [analyze your bundle size](https://shopify.dev/docs/apps/build/app-extensions#analyzing-bundle-size).

### Deploy your extension

```terminal
shopify app deploy
```

#### Versioning

Polaris reference docs follow [Shopify's API versioning policy](https://shopify.dev/docs/api/usage/versioning). Each stable version is supported for a minimum of 12 months. Older versions continue to work, they just won't have dedicated docs on Shopify.dev. [Shopify CLI](https://shopify.dev/docs/api/shopify-cli) already prevents deploys targeting API versions older than 12 months, so we recommend keeping your extensions on a supported version.

***

### Tutorials and resources

Deepen your understanding of POS UI extensions with these tutorials and community resources.

#### Tutorials

[Tutorial - Getting started with POS UI extensions](https://shopify.dev/docs/apps/build/pos/getting-started)

[Tutorial - Build a discount extension](https://shopify.dev/docs/apps/build/pos/tutorials/build-discount-extension)

[Tutorial - Build a print extension](https://shopify.dev/docs/apps/build/pos/tutorials/build-print-extension)

[Tutorial - Build a subscription UI extension](https://shopify.dev/docs/apps/build/pos/tutorials/build-subscription-extension)

[Tutorial - Communicate with a server](https://shopify.dev/docs/apps/build/pos/communicate-with-server)

#### Community resources

[Reference - Developer changelog for POS UI extensions](https://shopify.dev/changelog?filter=pos-extensions)

[Community - Community forum for POS UI extensions](https://community.shopify.dev/tag/pos-extensions)

***

---



<a id="latest"></a>


## POS UI extensions

Build extensions that integrate into [Shopify's Point of Sale](https://shopify.dev/docs/apps/build/pos) interface. For example, you can add a clickable tile to the POS home screen that launches your app's features, insert custom content sections into checkout and sales processes, or show additional product details.

Extensions run in the context of key merchant workflows, so always prioritize performance.

### Getting started

POS UI extensions require a TOML configuration file and TSX (or JSX) files containing your Preact-based extension code.

Use [Shopify CLI](https://shopify.dev/docs/api/shopify-cli) to scaffold your extension with the essential configuration and files. You can alter the default configuration later to customize the way your POS UI extension operates.

### Generate scaffold

```terminal
cd my-app
shopify app generate extension
```

[Tutorial - Getting started with POS UI extensions](https://shopify.dev/docs/apps/build/pos/getting-started)

***

### Building your extension

POS UI extensions are made up of three interconnected parts: targets that determine where your extension appears in the POS interface, target APIs that provide access to data and functionality based on your chosen target, and web components that define which interface elements you can use.

#### Targets: Choose where your extension appears

Targets define where your extensions appear within Shopify's POS interface and what capabilities they have. There are three types of targets:

| Target type | Description |
| - | - |
| Tile | Appear on the smart grid (homepage) of the POS system. Use to show status, quickly access common actions, and initiate workflows. |
| Action | Trigger workflows and display modals. This target has two varieties, commonly used together: - **Menu item:** Add buttons to action menus on native POS screens. Use to provide entry points that launch modals.
- **Modal:** Display full-screen interfaces for complete workflows, forms, or multi-step processes. Modals are launched from tiles or menu items. |
| Block | Appear as inline content within native POS screens. Use to render content such as metrics, instructions, or printed content on receipts. |

[Reference - Explore all targets](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets)

![Placeholder image](https://shopify.dev/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-07/pos-overview-targets-hb2whYxm.png)

#### Target APIs: Define what your extension does

Your extension can show customer loyalty points, add warranty card printing, or capture product details. Use target APIs to access the data and functionality for each scenario.

When your extension runs, Shopify provides a `shopify` global object that you use to access data and features. Most target APIs are properties on this object. For example, `shopify.storage` persists data between sessions, `shopify.toast` displays feedback messages, and `shopify.action.presentModal()` launches full-screen workflows.

If your app uses ESLint, update your configuration to include the global `shopify` object to prevent linting errors.

[Reference - Explore all target APIs](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis)

### Storage API: Getting a single value

```typescript
import {render} from 'preact';


export default async () => {
  render(<TileComponent />, document.body);
};


export function TileComponent() {
  return (
    <s-tile
      title="Storage app"
      subheading="Get example"
      onClick={async () => {
        const storedData = await shopify.storage.get('key');
        shopify.toast.show(String(storedData ?? ''));
      }}
      enabled
    />
  );
}
```

### ESLint configuration

```javascript
module.exports = {
  globals: {
    shopify: 'readonly',
  },
};
```

#### Web components: Design your interface

Web components are the UI building blocks that you use to display data and trigger API functions. These components are native UI elements that follow [Shopify's design system](https://shopify.dev/docs/apps/design) and are built with [remote-dom](https://github.com/Shopify/remote-dom), Shopify's library for building cross-platform user interfaces.

Use web components to build interfaces that automatically adapt across iOS and Android devices running Shopify POS.

[Reference - Explore all web components](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components)

### Tile component: Render a tile on the smart grid

```typescript
import {render} from 'preact';


export default async () => {
  render(<TileComponent />, document.body);
};


export function TileComponent() {
  return (
    <s-tile
      title="My app"
      subheading="Hello world!"
      onClick={() => {
        shopify.action.presentModal();
      }}
      enabled
    />
  );
}
```

![Placeholder image](https://shopify.dev/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2026-01/tile-default-Bh6-qbCa.png)

***

### Configuration

POS UI extensions rely on a `shopify.extension.toml` file that contains the extension's configuration. This includes the extension name, type, API version, and targeting definitions.

The `name` value is what displays in the POS interface to merchants, so consider this value carefully. We recommend that the `api_version` reflects the latest supported API version.

#### Properties

POS UI extensions use the following configuration properties:

###### `api_version` required

The version of the API that's being used for the extension. If provided in the `[[extensions]]` array, then the specified API version is used instead of the root level `api_version`.

###### `[[extensions]]` required

The name of the array that contains all extensions listed in the TOML file. Contains the following properties:

* `type`: required The extension type. For more information, refer to [Extension types](https://shopify.dev/docs/apps/build/app-extensions/configure-app-extensions#extension-types).

* `name`: required The merchant-facing name of the extension. After you [generate an extension](https://shopify.dev/docs/api/shopify-cli/app/app-generate-extension), you're prompted to provide a name for your extension. The `name` property is translatable if it starts with a `t:` and uses a key defined in your translation data. For example, you might have a `t:name` key that matches a translation key called `name`. [Learn more about localization](https://shopify.dev/docs/apps/build/checkout/localized-checkout-ui-extensions#how-it-works).

* `handle`: required The unique internal identifier for the extension. After you create a draft version of the extension, or deploy an extension, you can't change the `handle` value. If not specified, the `handle` value is automatically populated using a transformed `name` value that removes any unsupported characters. For example, if you enter `google maps` as the extension name, then Shopify populates the `handle` value as `google-maps`.

* `description`: required The merchant-facing description of the extension. The `description` property is translatable if it starts with a `t:` and uses a key defined in your translation data. For example, `t:description` and you have a matching translation key called `description`. [Learn more about localization](https://shopify.dev/docs/apps/build/checkout/localized-checkout-ui-extensions#how-it-works).

###### `[[extensions.targeting]]` required

The name of the array that contains a target and its associated module. Contains the following properties:

* `target`: required

  An identifier that specifies where you're injecting your extension into the POS interface.

* `module`: required

  The path to the JavaScript or TypeScript file that contains your extension code. This file exports the extension function that renders your UI or handles events.

###### `[extensions.supported_features]`

Declares additional features for your extension. Contains the following properties:

* `runs_offline`: When set to `true`, the extension runs even when POS loses network access. Defaults to `false`. For more information, refer to [Run extensions without network access](#run-extensions-without-network-access).

### shopify.extension.toml

```toml
api_version = "2026-04"


[[extensions]]
type = "ui_extension"
name = "My POS UI extension"
handle = "my-pos-ui-extension"
description = "My POS UI extension description"


[[extensions.targeting]]
target = "pos.home.tile.render"
module = "./src/Tile.tsx"


[[extensions.targeting]]
target = "pos.home.modal.render"
module = "./src/Modal.tsx"
```

***

### App authentication

Use authenticated requests when your extension needs to fetch data or trigger actions on your own backend service. For example, you might need to display a customer's loyalty status, process a custom discount calculation, or log POS transactions to an external analytics system.

Extensions automatically include authorization headers when making requests to your app's domain. Relative URLs resolve against your `app_url`.

**Note:**

App authentication is available as of POS version 10.6.0 for extensions targeting 2025-07 or later.

ID tokens are only returned for authenticated users with proper app permissions. Without correct permissions, the token will be `null`. POS Staff members aren't authenticated users. [Learn more about configuring app permissions](https://help.shopify.com/manual/your-account/users/roles/permissions/store-permissions#apps-and-channels-permissions).

### Make requests to your app's backend

```typescript
import {render} from 'preact';
import {useState, useEffect} from 'preact/hooks';


export default async () => {
  render(<CustomerDetailsBlock />, document.body);
};


export function CustomerDetailsBlock() {
  const [loyaltyInfo, setLoyaltyInfo] = useState('');
  useEffect(() => {
    getLoyaltyInfo();
  }, [shopify.customer.id]);


  async function getLoyaltyInfo() {
    console.log('fetching', `${URL}/api/loyalty/${shopify.customer.id}`)
    const res = await fetch(`${URL}/api/loyalty/${shopify.customer.id}`);
    const json = await res.json();
    setLoyaltyInfo(json.loyaltySummary);
  }
  return (
    <s-pos-block>
      <s-box padding="large">
        <s-text>{loyaltyInfo}</s-text>
      </s-box>
    </s-pos-block>
  );
}
```

***

### Direct API access

Use direct API access when your extension needs to query or modify Shopify data in real-time. For example, you might want to update product metafields based on POS interactions, fetch detailed customer order history, or modify inventory levels during special promotions.

Make [GraphQL Admin API](https://shopify.dev/docs/api/admin-graphql) requests directly from your extension with automatic authentication. These requests are fast because Shopify handles them directly without requiring a round trip to your backend.

**Note:**

Direct API access is available as of POS version 10.6.0 for extensions targeting 2025-07 or later.

You must declare all required [access scopes](https://shopify.dev/docs/api/usage/access-scopes) in your app's TOML file. For local development, access scopes are only registered or updated when the app is deployed and installed on your test store.

### Query Shopify data directly

```typescript
import {render} from 'preact';
import {useState, useEffect} from 'preact/hooks';


// This mutation requires the `write_products` access scope.
// /docs/api/admin-graphql/latest/mutations/metafieldsset
async function mutateMetafield(productId) {
  const requestBody = {
    query: `#graphql
        mutation MetafieldsSet($metafields: [MetafieldsSetInput!]!) {
          metafieldsSet(metafields: $metafields) {
            metafields {
              key
              namespace
              value
              createdAt
              updatedAt
            }
          }
        }
      `,
    variables: {
      metafields: [
        {
          key: 'direct_api',
          namespace: 'custom',
          ownerId: `gid://shopify/Product/${productId}`,
          value: 'Example Value',
          type: 'single_line_text_field',
        },
      ],
    },
  };


  await fetch('shopify:admin/api/graphql.json', {
    method: 'POST',
    body: JSON.stringify(requestBody),
  });
}


// This query requires the `read_products` access scope.
// /docs/api/admin-graphql/latest/queries/product
async function queryProductMetafields(productId) {
  const requestBody = {
    query: `#graphql
      query GetProduct($id: ID!) {
        product(id: $id) {
          id
          metafields(first: 10) {
            edges {
              node {
                id
                namespace
                key
                value
              }
            }
          }
        }
      }
    `,
    variables: {id: `gid://shopify/Product/${productId}`},
  };
  const res = await fetch('shopify:admin/api/graphql.json', {
    method: 'POST',
    body: JSON.stringify(requestBody),
  });
  return res.json();
}


export default async () => {
  render(<ProductDetailsBlock />, document.body);
};


export function ProductDetailsBlock() {
  const [productInfo, setProductInfo] = useState('');
  useEffect(() => {
    async function getProductInfo() {
      const result = await queryProductMetafields(shopify.product.id);
      setProductInfo(JSON.stringify(result, null, 2));
    }
    getProductInfo();
  }, [shopify.product.id]);


  return (
    <s-pos-block>
      <s-box padding="large">
        <s-text>Metafields: {productInfo}</s-text>
      </s-box>
      <s-box padding="large">
        <s-text>Set Metafields: {productInfo}</s-text>
        <s-button onClick={() => mutateMetafield(shopify.product.id)}>Set Metafields</s-button>
      </s-box>
    </s-pos-block>
  );
}
```

***

### Run extensions without network access

POS UI extensions can continue to run when the merchant's device loses internet connectivity, so merchants can use your extension during network outages.

**Note:**

Extensions can run without network access in POS versions 11.0 and later. Features that require network connectivity, such as Direct API access and app authentication, don't function without network access. Use the [Connectivity API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/connectivity-api) to detect network status and handle these scenarios gracefully.

To run extensions without network access, under `[extensions.supported_features]` in your extension's `shopify.extension.toml` configuration file, set `runs_offline` to `true`. [Shopify CLI v3.92.0](https://github.com/Shopify/cli/releases/tag/3.92.0) or later is required to recognize this configuration.

When your extension runs without network access, it continues to function using locally available data and APIs that don't require network connectivity. This ensures merchants can maintain essential workflows even without an active internet connection.

###### Supported APIs

The following APIs work when your extension runs without network access:

* [Storage API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/storage-api)
* [Locale API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/locale-api)
* [Toast API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/toast-api)
* [Connectivity API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/connectivity-api)
* [Device API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/device-api)
* [Scanner API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/scanner-api)
* [Navigation API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/navigation-api)
* [Action API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/action-api)
* [PinPad API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/pinpad-api)
* [Cash Drawer API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/cash-drawer-api)
* [Camera API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/camera-api)

###### Supported targets

The following extension targets render without network access:

* [`pos.home.tile.render`](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/home-screen)
* [`pos.home.modal.render`](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/home-screen)
* [`pos.product-details.block.render`](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details)
* [`pos.product-details.action.render`](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details)
* [`pos.product-details.action.menu-item.render`](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details)
* [`pos.cart.line-item-details.action.render`](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/cart-details)
* [`pos.cart.line-item-details.action.menu-item.render`](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/cart-details)
* [`pos.transaction-complete.event.observe`](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-purchase)
* [`pos.cash-tracking-session-start.event.observe`](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/register-details)
* [`pos.cash-tracking-session-complete.event.observe`](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/register-details)
* [`pos.cart-update.event.observe`](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/cart-details)
* [`pos.receipt-header.block.render`](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/receipts)
* [`pos.receipt-footer.block.render`](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/receipts)

### shopify.extension.toml

```toml
api_version = "2026-04"


[[extensions]]
type = "ui_extension"
name = "My extension"
handle = "my-extension"
description = "An extension that runs when POS loses network access"


[extensions.supported_features]
runs_offline = true


[[extensions.targeting]]
target = "pos.home.tile.render"
module = "./src/Tile.tsx"


[[extensions.targeting]]
target = "pos.home.modal.render"
module = "./src/Modal.tsx"
```

***

### Testing and deployment

After you've built your extension, test it thoroughly and deploy it to production.

#### Local testing

**Info:**

As of API version `2026-04`, you can write unit tests for POS UI extensions using [`@shopify/ui-extensions-tester`](https://github.com/Shopify/ui-extensions/blob/2026-04-rc/packages/ui-extensions-tester/README.md). Check out the [example test suite](https://github.com/Shopify/ui-extensions/tree/2026-04/examples/testing/point-of-sale-testing-example) to get started.

Testing POS UI extensions requires a [development store](https://shopify.dev/docs/api/development-stores) and the [Shopify POS app](https://www.shopify.com/pos/pos-app) on any mobile or tablet device—no dedicated POS hardware needed. Download the POS app from the [App Store](https://apps.apple.com/us/app/shopify-point-of-sale-pos/id686830644) or [Google Play](https://play.google.com/store/apps/details?id=com.shopify.pos\&hl=en_US), log in to your development store, and start testing.

Extensions run in preview mode during development, allowing you to test functionality and iterate quickly without affecting live merchant operations.

[Tutorial - Debugging POS UI extensions](https://shopify.dev/docs/apps/build/pos/debugging)

[Tutorial - Troubleshooting POS UI extensions](https://shopify.dev/docs/apps/build/pos/troubleshooting)

#### Deployment

Use [Shopify CLI](https://shopify.dev/docs/api/shopify-cli) to deploy your app and its extensions to production.

**Note:**

Your compiled UI extension bundle can't exceed 64 KB. Shopify enforces this limit at deployment to ensure fast loading times and optimal performance. Learn how to [analyze your bundle size](https://shopify.dev/docs/apps/build/app-extensions#analyzing-bundle-size).

### Deploy your extension

```terminal
shopify app deploy
```

#### Versioning

Polaris reference docs follow [Shopify's API versioning policy](https://shopify.dev/docs/api/usage/versioning). Each stable version is supported for a minimum of 12 months. Older versions continue to work, they just won't have dedicated docs on Shopify.dev. [Shopify CLI](https://shopify.dev/docs/api/shopify-cli) already prevents deploys targeting API versions older than 12 months, so we recommend keeping your extensions on a supported version.

***

### Tutorials and resources

Deepen your understanding of POS UI extensions with these tutorials and community resources.

#### Tutorials

[Tutorial - Getting started with POS UI extensions](https://shopify.dev/docs/apps/build/pos/getting-started)

[Tutorial - Build a discount extension](https://shopify.dev/docs/apps/build/pos/tutorials/build-discount-extension)

[Tutorial - Build a print extension](https://shopify.dev/docs/apps/build/pos/tutorials/build-print-extension)

[Tutorial - Build a subscription UI extension](https://shopify.dev/docs/apps/build/pos/tutorials/build-subscription-extension)

[Tutorial - Communicate with a server](https://shopify.dev/docs/apps/build/pos/communicate-with-server)

#### Community resources

[Reference - Developer changelog for POS UI extensions](https://shopify.dev/changelog?filter=pos-extensions)

[Community - Community forum for POS UI extensions](https://community.shopify.dev/tag/pos-extensions)

***

---



<a id="latest-target-apis"></a>


## Target APIs

When you build a POS UI extension, Shopify automatically provides you with specific APIs based on where your extension runs within the POS interface. This system ensures extensions receive exactly the data and functionality they need for their particular use case, while maintaining security and performance.

Your [target](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets) determines which APIs you receive because different locations in POS require different capabilities.

### Contextual APIs

Contextual APIs provide access to data and operations specific to your extension's current location within [the POS app](https://apps.shopify.com/shopify-pos). These APIs give you the ability to read and modify context-specific information like cart contents, selected products, customer details, or order information based on where your extension is rendered.

| Name | Description |
| - | - |
| [Cart API](https://shopify.dev/docs/api/pos-ui-extensions/latest/target-apis/contextual-apis/cart-api) | Add, remove, and modify cart items, apply discounts, and manage cart properties. |
| [Cart Line Item API](https://shopify.dev/docs/api/pos-ui-extensions/latest/target-apis/contextual-apis/cart-line-item-api) | Read and interact with the currently selected cart line item in detail views. |
| [Customer API](https://shopify.dev/docs/api/pos-ui-extensions/latest/target-apis/contextual-apis/customer-api) | Read customer information and build customer-specific functionality. |
| [Draft Order API](https://shopify.dev/docs/api/pos-ui-extensions/latest/target-apis/contextual-apis/draft-order-api) | Read and manipulate draft order data in draft order detail views. |
| [Order API](https://shopify.dev/docs/api/pos-ui-extensions/latest/target-apis/contextual-apis/order-api) | Read order data and build post-purchase, return, and exchange functionality. |
| [Product API](https://shopify.dev/docs/api/pos-ui-extensions/latest/target-apis/contextual-apis/product-api) | Access the product ID and variant ID of the currently viewed or selected product. |

### Platform APIs

Platform APIs expose device-specific hardware capabilities and native POS functionality that differentiate mobile retail experiences from traditional web applications. These APIs provide access to physical device features like barcode scanners, receipt printers, camera scanning, and device connectivity status. They enable extensions to use the unique hardware and navigation patterns of POS devices to create native retail experiences.

| Name | Description |
| - | - |
| [Camera API](https://shopify.dev/docs/api/pos-ui-extensions/latest/target-apis/platform-apis/camera-api) | Capture photos using the device camera for image uploads and visual documentation. |
| [Cash Drawer API](https://shopify.dev/docs/api/pos-ui-extensions/latest/target-apis/platform-apis/cash-drawer-api) | Programmatically open connected cash drawers for cash handling and till management. |
| [Connectivity API](https://shopify.dev/docs/api/pos-ui-extensions/latest/target-apis/platform-apis/connectivity-api) | Check device connectivity status and Internet connection availability. |
| [Device API](https://shopify.dev/docs/api/pos-ui-extensions/latest/target-apis/platform-apis/device-api) | Retrieve device information including device name, ID, and hardware capabilities. |
| [Navigation API](https://shopify.dev/docs/api/pos-ui-extensions/latest/target-apis/platform-apis/navigation-api) | Navigate between different screens and views within the POS interface. |
| [PinPad API](https://shopify.dev/docs/api/pos-ui-extensions/latest/target-apis/platform-apis/pinpad-api) | Display a modal pinpad interface for secure PIN entry and validation. |
| [Print API](https://shopify.dev/docs/api/pos-ui-extensions/latest/target-apis/platform-apis/print-api) | Send documents and receipts to connected printers or trigger the device print dialog. |
| [Scanner API](https://shopify.dev/docs/api/pos-ui-extensions/latest/target-apis/platform-apis/scanner-api) | Capture barcodes and QR codes using the device camera or connected barcode scanners. |
| [Storage API](https://shopify.dev/docs/api/pos-ui-extensions/latest/target-apis/platform-apis/storage-api) | Store and retrieve extension data in POS local storage with up to 100 entries per extension. |

### Standard APIs

Standard APIs offer core functionality that most extensions need regardless of their specific use case or location within [the POS app](https://apps.shopify.com/shopify-pos). These APIs provide essential capabilities like local data storage, session and authentication management, user notifications through toasts, and internationalization support. They serve as the foundational building blocks that enable extensions to integrate with the POS environment while maintaining consistent behavior across different contexts.

| Name | Description |
| - | - |
| [Action API](https://shopify.dev/docs/api/pos-ui-extensions/latest/target-apis/standard-apis/action-api) | Launch modal dialogs for multi-step workflows and complex interactions. |
| [Locale API](https://shopify.dev/docs/api/pos-ui-extensions/latest/target-apis/standard-apis/locale-api) | Retrieve the merchant's locale and localization settings for internationalization. |
| [Product Search API](https://shopify.dev/docs/api/pos-ui-extensions/latest/target-apis/standard-apis/product-search-api) | Search the merchant's product catalog and retrieve product details, variants, and inventory data. |
| [Session API](https://shopify.dev/docs/api/pos-ui-extensions/latest/target-apis/standard-apis/session-api) | Access session information and generate fresh authentication tokens for secure backend API requests. |
| [Toast API](https://shopify.dev/docs/api/pos-ui-extensions/latest/target-apis/standard-apis/toast-api) | Display toast notifications to provide feedback and information to users. |

***

---



<a id="latest-target-apis-contextual-apis-cart-api"></a>


## Cart API

The Cart API provides comprehensive access to POS cart management functionality, enabling extensions to read cart state, modify line items, apply discounts, manage customer information, and handle cart properties. The API supports both individual and bulk operations for efficient cart manipulation, with [selling plan functionality](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/selling-plans) and error handling.

#### Use cases

* **Real-time monitoring:** Monitor cart changes to update extension UI and respond to modifications.
* **Discounts:** Apply custom discounts at cart and line item levels, including percentage-based and codes.
* **Product management:** Add products programmatically with oversell protection and error handling.
* **Selling plans:** Manage selling plans and subscription products with comprehensive operations.

#### Support Targets (16)

#### Supported targets

* [pos.​cart.​line-item-details.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/cart-details#cart-details-targets)
* [pos.​cart.​line-item-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/cart-details#cart-details-action-modal-)
* [pos.​customer-details.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/customer-details#customer-details-action-menu-item-)
* [pos.​customer-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/customer-details#customer-details-action-modal-)
* [pos.​customer-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/customer-details#customer-details-targets)
* [pos.​draft-order-details.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/draft-order-details#draft-order-details-action-menu-item-)
* [pos.​draft-order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/draft-order-details#draft-order-details-action-modal-)
* [pos.​draft-order-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/draft-order-details#draft-order-details-targets)
* [pos.​home.​modal.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/home-screen#home-screen-action-modal-)
* [pos.​home.​tile.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/home-screen#home-screen-targets)
* [pos.​order-details.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/order-details#order-details-action-menu-item-)
* [pos.​order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/order-details#order-details-action-modal-)
* [pos.​order-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/order-details#order-details-targets)
* [pos.​product-details.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details#product-details-action-menu-item-)
* [pos.​product-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details#product-details-action-modal-)
* [pos.​product-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details#product-details-targets)

#### Properties

The [`shopify` global object](https://shopify.dev/docs/api/pos-ui-extensions/2026-04#target-apis-define-what-your-extension-does) provides access to cart management functionality and real-time cart state monitoring. Access the following properties on `shopify` to read cart state, modify line items, apply discounts, manage customer information, and handle cart properties.

* **addAddress**

  **(address: Address) => Promise\<void>**

  **required**

  Add a new address to the customer associated with the cart. The customer must be present in the cart before adding addresses with enhanced address validation and formatting.

* **addCartCodeDiscount**

  **(code: string) => Promise\<void>**

  **required**

  Apply a discount code to the cart. The system will validate the code and apply the appropriate discount if the code is valid and applicable to the current cart contents with improved error messaging.

* **addCartProperties**

  **(properties: Record\<string, string>) => Promise\<void>**

  **required**

  Add custom key-value properties to the cart for storing metadata, tracking information, or integration data. Properties are merged with existing cart properties with enhanced validation and conflict resolution.

* **addCustomSale**

  **(customSale: CustomSale) => Promise\<string>**

  **required**

  Add a custom sale item to the cart with specified quantity, title, price, and taxable status. Returns the `UUID` of the created line item for future operations and property management.

* **addLineItem**

  **(variantId: number, quantity: number) => Promise\<string>**

  **required**

  Add a product variant to the cart by its numeric `ID` with the specified quantity. Returns the `UUID` of the newly added line item, or an empty string if the user dismissed an oversell guard modal. Throws an error if POS fails to add the line item due to validation or system errors.

* **addLineItemProperties**

  **(uuid: string, properties: Record\<string, string>) => Promise\<void>**

  **required**

  Add custom properties to a specific line item using its `UUID`. Properties are merged with existing line item properties for metadata storage and tracking with enhanced validation.

* **addLineItemSellingPlan**

  **(input: SetLineItemSellingPlanInput) => Promise\<void>**

  **required**

  Add a selling plan to a line item in the cart using the line item `UUID`, selling plan `ID`, and selling plan name. Optionally provide delivery interval and interval count for improved performance, otherwise POS will fetch them after syncing the cart.

* **applyCartDiscount**

  **(type: CartDiscountType, title: string, amount?: string) => Promise\<void>**

  **required**

  Apply a cart-level discount with the specified type (`'Percentage'`, `'FixedAmount'`, or `'Code'`), title, and optional amount. For discount codes, omit the `amount` parameter. Enhanced validation ensures proper discount application.

* **bulkAddLineItemProperties**

  **(lineItemProperties: SetLineItemPropertiesInput\[]) => Promise\<void>**

  **required**

  Add properties to multiple line items simultaneously using an array of inputs containing line item `UUIDs` and their respective properties for efficient bulk operations with enhanced validation and error reporting.

* **bulkCartUpdate**

  **(cartState: CartUpdateInput) => Promise\<Cart>**

  **required**

  Perform a bulk update of the entire cart state including note, discounts, customer, line items, and properties. Returns the updated cart object after the operation completes with enhanced validation and error handling.

* **bulkSetLineItemDiscounts**

  **(lineItemDiscounts: SetLineItemDiscountInput\[]) => Promise\<void>**

  **required**

  Apply discounts to multiple line items simultaneously. Each input specifies the line item `UUID` and discount details for efficient bulk discount operations with enhanced validation and allocation tracking.

* **clearCart**

  **() => Promise\<void>**

  **required**

  Remove all line items and reset the cart to an empty state. This action can't be undone and will clear all cart contents including line items, discounts, properties, and selling plans.

* **current**

  **ReadonlySignalLike\<Cart>**

  **required**

  Provides read-only access to the current cart state and allows subscribing to cart changes. The `value` property provides the current cart state, and `subscribe` allows listening to changes with improved performance and memory management.

* **deleteAddress**

  **(addressId: number) => Promise\<void>**

  **required**

  Delete an existing address from the customer using the address `ID`. The customer must be present in the cart to perform this operation with improved error handling for invalid address `IDs`.

* **removeAllDiscounts**

  **(disableAutomaticDiscounts: boolean) => Promise\<void>**

  **required**

  Remove all discounts from both the cart and individual line items. Set `disableAutomaticDiscounts` to `true` to prevent automatic discounts from being reapplied after removal with enhanced discount allocation handling.

* **removeCartDiscount**

  **() => Promise\<void>**

  **required**

  Remove the current cart-level discount. This only affects cart-level discounts and does not impact line item discounts or automatic discount eligibility.

* **removeCartProperties**

  **(keys: string\[]) => Promise\<void>**

  **required**

  Remove specific cart properties by their keys. Only the specified property keys will be removed while other properties remain intact with improved error handling for non-existent keys.

* **removeCustomer**

  **() => Promise\<void>**

  **required**

  Remove the currently associated customer from the cart, converting it back to a guest cart without customer-specific benefits or information while preserving cart contents.

* **removeLineItem**

  **(uuid: string) => Promise\<void>**

  **required**

  Remove a specific line item from the cart using its `UUID`. The line item will be completely removed from the cart along with any associated discounts, properties, or selling plans.

* **removeLineItemDiscount**

  **(uuid: string) => Promise\<void>**

  **required**

  Remove all discounts from a specific line item identified by its `UUID`. This will clear any custom discounts applied to the line item while preserving discount allocation history.

* **removeLineItemProperties**

  **(uuid: string, keys: string\[]) => Promise\<void>**

  **required**

  Remove specific properties from a line item by `UUID` and property keys. Only the specified keys will be removed while other properties remain intact with improved error handling.

* **removeLineItemSellingPlan**

  **(uuid: string) => Promise\<void>**

  **required**

  Remove the selling plan from a line item in the cart using the line item `UUID`. This will clear any subscription or recurring purchase configuration from the line item.

* **setAttributedStaff**

  **(staffId: number) => Promise\<void>**

  **required**

  Set the attributed staff member for all line items in the cart using the staff `ID`. Pass `undefined` to clear staff attribution from all line items with enhanced staff validation and tracking.

* **setAttributedStaffToLineItem**

  **(staffId: number, lineItemUuid: string) => Promise\<void>**

  **required**

  Set the attributed staff member for a specific line item using the staff `ID` and line item `UUID`. Pass `undefined` as `staffId` to clear attribution from the line item with improved validation and error handling.

* **setCustomer**

  **(customer: Customer) => Promise\<void>**

  **required**

  Associate a customer with the current cart using the customer object containing the customer `ID`. This enables customer-specific pricing, discounts, and checkout features with enhanced customer data validation.

* **setLineItemDiscount**

  **(uuid: string, type: LineItemDiscountType, title: string, amount: string) => Promise\<void>**

  **required**

  Apply a discount to a specific line item using its `UUID`. Specify the discount type (`'Percentage'` or `'FixedAmount'`), title, and amount value with improved discount allocation tracking.

* **updateDefaultAddress**

  **(addressId: number) => Promise\<void>**

  **required**

  Set a specific address as the default address for the customer using the address `ID`. The customer must be present in the cart to update the default address with enhanced validation.

#### Address

Represents physical address information for customer shipping and billing. Contains standard address fields including street, city, region, postal code, and country data.

* address1

  The primary street address line. Required for most shipping and billing operations. Should contain street number and name.

  ```ts
  string
  ```

* address2

  The secondary address line for apartment, suite, or unit information. Optional field for additional address details.

  ```ts
  string
  ```

* city

  The city name for the address. Required for shipping calculations and location-based services.

  ```ts
  string
  ```

* company

  The company name associated with the address. Optional field for business customers and B2B transactions.

  ```ts
  string
  ```

* country

  The country name for the address. Required for international shipping, tax calculations, and compliance.

  ```ts
  string
  ```

* countryCode

  The standardized country code (ISO format). Use for precise country identification and international shipping operations.

  ```ts
  CountryCode
  ```

* firstName

  The first name for the address contact. Used for personalized shipping labels and customer communication.

  ```ts
  string
  ```

* lastName

  The last name for the address contact. Required for complete customer identification and shipping labels.

  ```ts
  string
  ```

* name

  The full name for the address contact. Use when first and last names are combined or unavailable as separate fields.

  ```ts
  string
  ```

* phone

  The phone number for the address contact. Used for delivery notifications, shipping updates, and customer communication.

  ```ts
  string
  ```

* province

  The province or state name for the address. Required for regional shipping rates and tax calculations.

  ```ts
  string
  ```

* provinceCode

  The standardized province or state code. Use for precise regional identification and automated shipping calculations.

  ```ts
  string
  ```

* zip

  The postal or ZIP code for the address. Required for accurate shipping rates and location-based services.

  ```ts
  string
  ```

#### CountryCode

* AF

  ```ts
  AF
  ```

* AX

  ```ts
  AX
  ```

* AL

  ```ts
  AL
  ```

* DZ

  ```ts
  DZ
  ```

* AD

  ```ts
  AD
  ```

* AO

  ```ts
  AO
  ```

* AI

  ```ts
  AI
  ```

* AG

  ```ts
  AG
  ```

* AR

  ```ts
  AR
  ```

* AM

  ```ts
  AM
  ```

* AW

  ```ts
  AW
  ```

* AC

  ```ts
  AC
  ```

* AU

  ```ts
  AU
  ```

* AT

  ```ts
  AT
  ```

* AZ

  ```ts
  AZ
  ```

* BS

  ```ts
  BS
  ```

* BH

  ```ts
  BH
  ```

* BD

  ```ts
  BD
  ```

* BB

  ```ts
  BB
  ```

* BY

  ```ts
  BY
  ```

* BE

  ```ts
  BE
  ```

* BZ

  ```ts
  BZ
  ```

* BJ

  ```ts
  BJ
  ```

* BM

  ```ts
  BM
  ```

* BT

  ```ts
  BT
  ```

* BO

  ```ts
  BO
  ```

* BA

  ```ts
  BA
  ```

* BW

  ```ts
  BW
  ```

* BV

  ```ts
  BV
  ```

* BR

  ```ts
  BR
  ```

* IO

  ```ts
  IO
  ```

* BN

  ```ts
  BN
  ```

* BG

  ```ts
  BG
  ```

* BF

  ```ts
  BF
  ```

* BI

  ```ts
  BI
  ```

* KH

  ```ts
  KH
  ```

* CA

  ```ts
  CA
  ```

* CV

  ```ts
  CV
  ```

* BQ

  ```ts
  BQ
  ```

* KY

  ```ts
  KY
  ```

* CF

  ```ts
  CF
  ```

* TD

  ```ts
  TD
  ```

* CL

  ```ts
  CL
  ```

* CN

  ```ts
  CN
  ```

* CX

  ```ts
  CX
  ```

* CC

  ```ts
  CC
  ```

* CO

  ```ts
  CO
  ```

* KM

  ```ts
  KM
  ```

* CG

  ```ts
  CG
  ```

* CD

  ```ts
  CD
  ```

* CK

  ```ts
  CK
  ```

* CR

  ```ts
  CR
  ```

* HR

  ```ts
  HR
  ```

* CU

  ```ts
  CU
  ```

* CW

  ```ts
  CW
  ```

* CY

  ```ts
  CY
  ```

* CZ

  ```ts
  CZ
  ```

* CI

  ```ts
  CI
  ```

* DK

  ```ts
  DK
  ```

* DJ

  ```ts
  DJ
  ```

* DM

  ```ts
  DM
  ```

* DO

  ```ts
  DO
  ```

* EC

  ```ts
  EC
  ```

* EG

  ```ts
  EG
  ```

* SV

  ```ts
  SV
  ```

* GQ

  ```ts
  GQ
  ```

* ER

  ```ts
  ER
  ```

* EE

  ```ts
  EE
  ```

* SZ

  ```ts
  SZ
  ```

* ET

  ```ts
  ET
  ```

* FK

  ```ts
  FK
  ```

* FO

  ```ts
  FO
  ```

* FJ

  ```ts
  FJ
  ```

* FI

  ```ts
  FI
  ```

* FR

  ```ts
  FR
  ```

* GF

  ```ts
  GF
  ```

* PF

  ```ts
  PF
  ```

* TF

  ```ts
  TF
  ```

* GA

  ```ts
  GA
  ```

* GM

  ```ts
  GM
  ```

* GE

  ```ts
  GE
  ```

* DE

  ```ts
  DE
  ```

* GH

  ```ts
  GH
  ```

* GI

  ```ts
  GI
  ```

* GR

  ```ts
  GR
  ```

* GL

  ```ts
  GL
  ```

* GD

  ```ts
  GD
  ```

* GP

  ```ts
  GP
  ```

* GT

  ```ts
  GT
  ```

* GG

  ```ts
  GG
  ```

* GN

  ```ts
  GN
  ```

* GW

  ```ts
  GW
  ```

* GY

  ```ts
  GY
  ```

* HT

  ```ts
  HT
  ```

* HM

  ```ts
  HM
  ```

* VA

  ```ts
  VA
  ```

* HN

  ```ts
  HN
  ```

* HK

  ```ts
  HK
  ```

* HU

  ```ts
  HU
  ```

* IS

  ```ts
  IS
  ```

* IN

  ```ts
  IN
  ```

* ID

  ```ts
  ID
  ```

* IR

  ```ts
  IR
  ```

* IQ

  ```ts
  IQ
  ```

* IE

  ```ts
  IE
  ```

* IM

  ```ts
  IM
  ```

* IL

  ```ts
  IL
  ```

* IT

  ```ts
  IT
  ```

* JM

  ```ts
  JM
  ```

* JP

  ```ts
  JP
  ```

* JE

  ```ts
  JE
  ```

* JO

  ```ts
  JO
  ```

* KZ

  ```ts
  KZ
  ```

* KE

  ```ts
  KE
  ```

* KI

  ```ts
  KI
  ```

* KP

  ```ts
  KP
  ```

* XK

  ```ts
  XK
  ```

* KW

  ```ts
  KW
  ```

* KG

  ```ts
  KG
  ```

* LA

  ```ts
  LA
  ```

* LV

  ```ts
  LV
  ```

* LB

  ```ts
  LB
  ```

* LS

  ```ts
  LS
  ```

* LR

  ```ts
  LR
  ```

* LY

  ```ts
  LY
  ```

* LI

  ```ts
  LI
  ```

* LT

  ```ts
  LT
  ```

* LU

  ```ts
  LU
  ```

* MO

  ```ts
  MO
  ```

* MG

  ```ts
  MG
  ```

* MW

  ```ts
  MW
  ```

* MY

  ```ts
  MY
  ```

* MV

  ```ts
  MV
  ```

* ML

  ```ts
  ML
  ```

* MT

  ```ts
  MT
  ```

* MQ

  ```ts
  MQ
  ```

* MR

  ```ts
  MR
  ```

* MU

  ```ts
  MU
  ```

* YT

  ```ts
  YT
  ```

* MX

  ```ts
  MX
  ```

* MD

  ```ts
  MD
  ```

* MC

  ```ts
  MC
  ```

* MN

  ```ts
  MN
  ```

* ME

  ```ts
  ME
  ```

* MS

  ```ts
  MS
  ```

* MA

  ```ts
  MA
  ```

* MZ

  ```ts
  MZ
  ```

* MM

  ```ts
  MM
  ```

* NA

  ```ts
  NA
  ```

* NR

  ```ts
  NR
  ```

* NP

  ```ts
  NP
  ```

* NL

  ```ts
  NL
  ```

* AN

  ```ts
  AN
  ```

* NC

  ```ts
  NC
  ```

* NZ

  ```ts
  NZ
  ```

* NI

  ```ts
  NI
  ```

* NE

  ```ts
  NE
  ```

* NG

  ```ts
  NG
  ```

* NU

  ```ts
  NU
  ```

* NF

  ```ts
  NF
  ```

* MK

  ```ts
  MK
  ```

* NO

  ```ts
  NO
  ```

* OM

  ```ts
  OM
  ```

* PK

  ```ts
  PK
  ```

* PS

  ```ts
  PS
  ```

* PA

  ```ts
  PA
  ```

* PG

  ```ts
  PG
  ```

* PY

  ```ts
  PY
  ```

* PE

  ```ts
  PE
  ```

* PH

  ```ts
  PH
  ```

* PN

  ```ts
  PN
  ```

* PL

  ```ts
  PL
  ```

* PT

  ```ts
  PT
  ```

* QA

  ```ts
  QA
  ```

* CM

  ```ts
  CM
  ```

* RE

  ```ts
  RE
  ```

* RO

  ```ts
  RO
  ```

* RU

  ```ts
  RU
  ```

* RW

  ```ts
  RW
  ```

* BL

  ```ts
  BL
  ```

* SH

  ```ts
  SH
  ```

* KN

  ```ts
  KN
  ```

* LC

  ```ts
  LC
  ```

* MF

  ```ts
  MF
  ```

* PM

  ```ts
  PM
  ```

* WS

  ```ts
  WS
  ```

* SM

  ```ts
  SM
  ```

* ST

  ```ts
  ST
  ```

* SA

  ```ts
  SA
  ```

* SN

  ```ts
  SN
  ```

* RS

  ```ts
  RS
  ```

* SC

  ```ts
  SC
  ```

* SL

  ```ts
  SL
  ```

* SG

  ```ts
  SG
  ```

* SX

  ```ts
  SX
  ```

* SK

  ```ts
  SK
  ```

* SI

  ```ts
  SI
  ```

* SB

  ```ts
  SB
  ```

* SO

  ```ts
  SO
  ```

* ZA

  ```ts
  ZA
  ```

* GS

  ```ts
  GS
  ```

* KR

  ```ts
  KR
  ```

* SS

  ```ts
  SS
  ```

* ES

  ```ts
  ES
  ```

* LK

  ```ts
  LK
  ```

* VC

  ```ts
  VC
  ```

* SD

  ```ts
  SD
  ```

* SR

  ```ts
  SR
  ```

* SJ

  ```ts
  SJ
  ```

* SE

  ```ts
  SE
  ```

* CH

  ```ts
  CH
  ```

* SY

  ```ts
  SY
  ```

* TW

  ```ts
  TW
  ```

* TJ

  ```ts
  TJ
  ```

* TZ

  ```ts
  TZ
  ```

* TH

  ```ts
  TH
  ```

* TL

  ```ts
  TL
  ```

* TG

  ```ts
  TG
  ```

* TK

  ```ts
  TK
  ```

* TO

  ```ts
  TO
  ```

* TT

  ```ts
  TT
  ```

* TA

  ```ts
  TA
  ```

* TN

  ```ts
  TN
  ```

* TR

  ```ts
  TR
  ```

* TM

  ```ts
  TM
  ```

* TC

  ```ts
  TC
  ```

* TV

  ```ts
  TV
  ```

* UG

  ```ts
  UG
  ```

* UA

  ```ts
  UA
  ```

* AE

  ```ts
  AE
  ```

* GB

  ```ts
  GB
  ```

* US

  ```ts
  US
  ```

* UM

  ```ts
  UM
  ```

* UY

  ```ts
  UY
  ```

* UZ

  ```ts
  UZ
  ```

* VU

  ```ts
  VU
  ```

* VE

  ```ts
  VE
  ```

* VN

  ```ts
  VN
  ```

* VG

  ```ts
  VG
  ```

* WF

  ```ts
  WF
  ```

* EH

  ```ts
  EH
  ```

* YE

  ```ts
  YE
  ```

* ZM

  ```ts
  ZM
  ```

* ZW

  ```ts
  ZW
  ```

* ZZ

  ```ts
  ZZ
  ```

#### CustomSale

Represents a custom sale item that is not associated with a product in the catalog. Includes pricing, taxation, and descriptive information for manually created line items.

* price

  The price for the custom sale item as currency string. Must be a valid positive amount. Use for non-catalog items and custom pricing.

  ```ts
  string
  ```

* quantity

  The quantity of the custom sale item. Must be a positive integer. Use for quantity-based pricing and inventory management.

  ```ts
  number
  ```

* taxable

  Determines whether the custom sale item is taxable. Set to \`true\` to apply tax calculations, \`false\` to exempt from taxes.

  ```ts
  boolean
  ```

* title

  The display name for the custom sale item. Appears on receipts and in cart displays. Should be descriptive and customer-friendly.

  ```ts
  string
  ```

#### SetLineItemSellingPlanInput

Specifies the parameters for assigning selling plans to line items. Used to add subscription or purchase option configurations to products.

* lineItemUuid

  The target line item \`UUID\` for selling plan assignment. Must match an existing line item in the cart.

  ```ts
  string
  ```

* sellingPlanId

  The selling plan \`ID\` to apply to the line item. Must be a valid selling plan available for the product.

  ```ts
  number
  ```

* sellingPlanName

  The selling plan name for display purposes. Required for proper selling plan display in the cart.

  ```ts
  string
  ```

#### CartDiscountType

Defines the type of discount applied at the cart level. Specifies whether the discount is percentage-based, fixed amount, or discount code redemption.

```ts
'Percentage' | 'FixedAmount' | 'Code'
```

#### SetLineItemPropertiesInput

Specifies the parameters for adding custom properties to line items. Properties are key-value pairs used for storing metadata, tracking information, or integration data.

* lineItemUuid

  The target line item \`UUID\` for selling plan assignment. Must match an existing line item in the cart.

  ```ts
  string
  ```

* properties

  The custom key-value properties to apply to the line item. Merged with existing properties—duplicate keys overwrite existing values.

  ```ts
  Record<string, string>
  ```

#### CartUpdateInput

Specifies the parameters for updating cart information. Includes options for modifying customer data, notes, references, and other cart-level metadata.

* cartDiscount

  The cart-level discount to apply during bulk update. Replaces existing cart discount. Set to \`undefined\` to remove current discount.

  ```ts
  Discount
  ```

* cartDiscounts

  An array of cart-level discounts to apply during bulk update. Replaces all existing cart discounts with the provided array.

  ```ts
  Discount[]
  ```

* customer

  The customer to associate with the cart during bulk update. Replaces existing customer or converts guest cart to customer cart.

  ```ts
  Customer
  ```

* lineItems

  An array of line items to set during bulk update. Completely replaces existing cart contents—removes all current items and adds the provided ones.

  ```ts
  LineItem[]
  ```

* note

  The cart note to set during bulk update. Replaces existing note or sets new note if none exists. Set to \`undefined\` to remove current note.

  ```ts
  string
  ```

* properties

  The custom key-value properties to apply to the line item. Merged with existing properties—duplicate keys overwrite existing values.

  ```ts
  Record<string, string>
  ```

#### Discount

Represents a discount applied to a cart or transaction, including amount and description.

* amount

  The discount value to apply. For \`'Percentage'\` type, this represents the percentage value (For example, "10" for 10% off). For \`'FixedAmount'\` type, this represents the fixed monetary amount to deduct from the line item price. Commonly used for discount calculations and displaying the discount value to merchants.

  ```ts
  number
  ```

* currency

  The \[ISO 4217]\(https://en.wikipedia.org/wiki/ISO\_4217) currency code associated with the location currently active on POS.

  ```ts
  string
  ```

* discountDescription

  A human-readable description of the discount shown to merchants and customers. This typically includes the discount name, promotion details, or discount code (for example, "SUMMER2024", "10% off entire order", "Buy 2 Get 1 Free"). Returns \`undefined\` when no description is provided.

  ```ts
  string
  ```

* type

  The \[discount type]\(https://help.shopify.com/en/manual/discounts/discount-types) applied to this line item. Can be either \`'Percentage'\` for percentage-based discounts or \`'FixedAmount'\` for fixed monetary amount discounts. This determines how the discount amount is calculated and displayed.

  ```ts
  string
  ```

#### Customer

Represents basic customer identification information. Contains the customer ID for linking to detailed customer data and enabling customer-specific features.

* id

  The unique numeric identifier for the customer in Shopify's system. This ID is consistent across all Shopify systems and APIs. Used to link this customer reference to the full customer record with complete profile information. Commonly used for customer lookups, applying customer-specific pricing or discounts, linking orders to customer accounts, or integrating with customer management systems.

  ```ts
  number
  ```

#### LineItem

Represents an individual item in the shopping cart. Contains product information, pricing, quantity, discounts, and customization details for a single cart entry.

* attributedUserId

  The staff member 'ID' attributed to this line item. Returns 'undefined' if no staff attribution is set. Use for commission tracking and performance analytics.

  ```ts
  number
  ```

* components

  Bundle components for this line item. Only present for \[product bundles]\(/docs/apps/build/product-merchandising/bundles). Each component represents an individual item within the bundle with its own tax information.

  ```ts
  LineItemComponent[]
  ```

* discountAllocations

  An array of discount allocations applied to this line item, providing detailed breakdown of how discounts are distributed. Returns 'undefined' if no allocations exist. Use for enhanced discount tracking and reporting.

  ```ts
  DiscountAllocation[]
  ```

* discounts

  An array of discounts applied to this line item. Empty array if no discounts are active. Use for displaying line item savings and discount details.

  ```ts
  Discount[]
  ```

* hasSellingPlanGroups

  Determines whether this line item has selling plan groups (subscription options) available. Returns 'undefined' if selling plan information is unavailable. Use for displaying subscription options.

  ```ts
  boolean
  ```

* isGiftCard

  Determines whether this line item is a gift card. Gift cards have special handling requirements and business logic. Use for implementing gift card-specific workflows.

  ```ts
  boolean
  ```

* price

  The unit price of the line item. Returns 'undefined' for custom sales without set prices. Use for pricing calculations and displays.

  ```ts
  number
  ```

* productId

  The product 'ID' this line item represents. Returns 'undefined' for custom sales or non-product items. Use for product-specific operations and linking to product details.

  ```ts
  number
  ```

* properties

  The custom key-value properties attached to this line item. Empty object if no properties are set. Use for metadata, customization options, or integration data.

  ```ts
  { [key: string]: string; }
  ```

* quantity

  The quantity of this item in the cart. Always a positive integer. Use for quantity displays, calculations, and inventory management.

  ```ts
  number
  ```

* requiresSellingPlan

  Determines whether this line item requires a selling plan (subscription) to be purchased. Returns 'undefined' if selling plan information is unavailable. Use for implementing subscription-based product handling.

  ```ts
  boolean
  ```

* sellingPlan

  The currently selected selling plan for this line item. Returns 'undefined' if no selling plan is applied. Contains selling plan details including 'ID', name, and delivery intervals. Use for subscription management and recurring purchase functionality.

  ```ts
  SellingPlan
  ```

* sku

  The Stock Keeping Unit (SKU) identifier for this line item. Returns 'undefined' if no SKU is configured. Use for inventory tracking and product identification.

  ```ts
  string
  ```

* taxable

  Determines whether this line item is subject to tax calculations. Use for tax computation, compliance, and pricing displays.

  ```ts
  boolean
  ```

* taxLines

  An array of tax lines applied to this line item, containing tax amounts and rates. Use for detailed tax reporting and compliance.

  ```ts
  TaxLine[]
  ```

* title

  The display title of the line item. Returns 'undefined' for items without titles. Use for customer-facing displays and cart item identification.

  ```ts
  string
  ```

* uuid

  The unique identifier for this line item within the cart. Use for line item-specific operations like updates, removals, or property modifications.

  ```ts
  string
  ```

* variantId

  The product variant 'ID' this line item represents. Returns 'undefined' for custom sales or non-variant items. Use for variant-specific operations and product details.

  ```ts
  number
  ```

* vendor

  The vendor or brand name for this line item. Returns 'undefined' if no vendor is set. Use for vendor-specific displays and organization.

  ```ts
  string
  ```

#### LineItemComponent

Represents a component of a \[product bundle]\(/docs/apps/build/product-merchandising/bundles) line item. Bundle components contain the individual items that make up a bundle, each with their own pricing and tax information.

* price

  The price for the custom sale item as currency string. Must be a valid positive amount. Use for non-catalog items and custom pricing.

  ```ts
  number
  ```

* productId

  The unique numeric identifier for the product this component represents, if applicable.

  ```ts
  number
  ```

* quantity

  The quantity of the custom sale item. Must be a positive integer. Use for quantity-based pricing and inventory management.

  ```ts
  number
  ```

* taxable

  Determines whether the custom sale item is taxable. Set to \`true\` to apply tax calculations, \`false\` to exempt from taxes.

  ```ts
  boolean
  ```

* taxLines

  An array of tax lines applied to this component.

  ```ts
  TaxLine[]
  ```

* title

  The display name for the custom sale item. Appears on receipts and in cart displays. Should be descriptive and customer-friendly.

  ```ts
  string
  ```

* variantId

  The unique numeric identifier for the product variant this component represents, if applicable.

  ```ts
  number
  ```

#### TaxLine

Represents a tax line applied to an item or transaction.

* enabled

  Whether this tax is currently enabled.

  ```ts
  boolean
  ```

* price

  The tax amount as a Money object.

  ```ts
  Money
  ```

* rate

  The tax rate as a decimal number.

  ```ts
  number
  ```

* rateRange

  The range of tax rates if applicable.

  ```ts
  { min: number; max: number; }
  ```

* title

  The title or name of the tax.

  ```ts
  string
  ```

* uuid

  The unique identifier for this tax line.

  ```ts
  string
  ```

#### Money

Represents a monetary amount with currency information.

* amount

  The monetary amount as a number.

  ```ts
  number
  ```

* currency

  The \[ISO 4217]\(https://en.wikipedia.org/wiki/ISO\_4217) currency code associated with the location currently active on POS.

  ```ts
  string
  ```

#### DiscountAllocation

Represents the allocation of a discount to a specific line item.

* allocatedAmount

  The amount of discount allocated.

  ```ts
  MoneyV2
  ```

#### MoneyV2

Represents a monetary amount as a string with explicit currency code.

* amount

  The monetary amount as a string.

  ```ts
  string
  ```

* currencyCode

  The ISO currency code (for example, USD, CAD).

  ```ts
  string
  ```

#### SellingPlan

Represents a selling plan (subscription) associated with a line item, containing delivery schedule and plan identification details.

* deliveryInterval

  The interval of the selling plan. (DAY, WEEK, MONTH, YEAR).

  ```ts
  string
  ```

* deliveryIntervalCount

  The number of intervals between deliveries.

  ```ts
  number
  ```

* digest

  The fingerprint of the applied selling plan within this cart session. Provided by POS. Not available during refund / exchanges.

  ```ts
  string
  ```

* id

  The unique identifier of the selling plan.

  ```ts
  number
  ```

* name

  The name of the POS device.

  ```ts
  string
  ```

#### Cart

Represents the shopping cart state, including line items, pricing, customer information, and applied discounts. Provides comprehensive access to all cart data and operations.

* cartDiscount

  The cart-level discount to apply during bulk update. Replaces existing cart discount. Set to \`undefined\` to remove current discount.

  ```ts
  Discount
  ```

* cartDiscounts

  An array of cart-level discounts to apply during bulk update. Replaces all existing cart discounts with the provided array.

  ```ts
  Discount[]
  ```

* customer

  The customer to associate with the cart during bulk update. Replaces existing customer or converts guest cart to customer cart.

  ```ts
  Customer
  ```

* editable

  Indicates whether the cart is currently editable. An \`undefined\` value should be treated as \`true\` for backward compatibility. Use this to determine if cart modification operations are allowed.

  ```ts
  boolean
  ```

* grandTotal

  The final total amount including all items, taxes, and discounts, formatted as a currency string.

  ```ts
  string
  ```

* lineItems

  An array of line items to set during bulk update. Completely replaces existing cart contents—removes all current items and adds the provided ones.

  ```ts
  LineItem[]
  ```

* note

  The cart note to set during bulk update. Replaces existing note or sets new note if none exists. Set to \`undefined\` to remove current note.

  ```ts
  string
  ```

* properties

  The custom key-value properties to apply to the line item. Merged with existing properties—duplicate keys overwrite existing values.

  ```ts
  Record<string, string>
  ```

* subtotal

  The subtotal amount of the cart before taxes and discounts, formatted as a currency string.

  ```ts
  string
  ```

* taxTotal

  The total tax amount for the cart, formatted as a currency string.

  ```ts
  string
  ```

#### SetLineItemDiscountInput

Specifies the parameters for applying discounts to individual line items. Includes the discount type, value, and reason for audit and reporting purposes.

* lineItemDiscount

  The discount details to apply to the line item. Contains title, type (\`'Percentage'\` or \`'FixedAmount'\`), and amount value.

  ```ts
  LineItemDiscount
  ```

* lineItemUuid

  The target line item \`UUID\` for selling plan assignment. Must match an existing line item in the cart.

  ```ts
  string
  ```

#### LineItemDiscount

Represents a discount applied to an individual line item in the cart.

* amount

  The percentage or fixed amount for the discount.

  ```ts
  string
  ```

* title

  The display name for the custom sale item. Appears on receipts and in cart displays. Should be descriptive and customer-friendly.

  ```ts
  string
  ```

* type

  The discount type.

  ```ts
  'Percentage' | 'FixedAmount'
  ```

#### ReadonlySignalLike

Represents a reactive signal interface that provides both immediate value access and subscription-based updates. Enables real-time synchronization with changing data through the observer pattern.

* subscribe

  Subscribes to value changes and calls the provided function whenever the value updates. Returns an unsubscribe function to clean up the subscription. Use to automatically react to changes in the signal's value.

  ```ts
  (fn: (value: T) => void) => () => void
  ```

* value

  The current value of the signal. This property provides immediate access to the current value without requiring subscription setup. Use for one-time value checks or initial setup.

  ```ts
  T
  ```

#### LineItemDiscountType

Defines the type of discount applied to individual line items. Specifies whether the discount is percentage-based or a fixed amount reduction.

```ts
'Percentage' | 'FixedAmount'
```

Examples

#### Examples

* ####

  ##### Description

  Add a custom item to the cart with manual pricing and details. This example demonstrates using \`shopify.cart.addCustomSale()\` to create custom line items for services, fees, or items not in the product catalog. This provides flexibility for unique sales scenarios.

  ##### jsx

  ```tsx
  import {render} from 'preact';

  export default async () => {
    render(<Extension />, document.body);
  };

  const Extension = () => {
    return (
      <s-tile
        heading="My App"
        subheading="Call cart function"
        onClick={() => {
          shopify.cart.addCustomSale({
            taxable: true,
            quantity: 1,
            title: 'T-shirt',
            price: '10.00',
          });
        }}
      />
    );
  };
  ```

* ####

  ##### Description

  Create a new address for the customer associated with the cart. This example demonstrates using \`shopify.cart.addAddress()\` to add shipping or billing addresses to customer profiles. This simplifies future purchases and enables multiple delivery locations.

  ##### jsx

  ```tsx
  import {render} from 'preact';

  export default async () => {
    render(<Extension />, document.body);
  };

  const Extension = () => {
    return (
      <s-tile
        heading="My App"
        subheading="Call cart function"
        onClick={() => {
          shopify.cart.addAddress({
            address1: '123 Main St',
            city: 'Ottawa',
            province: 'Ontario',
            zip: 'K1S 5B6',
            firstName: 'John',
            lastName: 'Doe',
            country: 'Canada',
            phone: '555-1234',
          });
        }}
      />
    );
  };
  ```

* ####

  ##### Description

  Add a product variant to the cart with specified quantity and optional properties. This example shows how to use \`shopify.cart.addLineItem()\` to add catalog items to the cart with custom attributes. This enables standard product sales with additional customization.

  ##### jsx

  ```tsx
  import {render} from 'preact';

  export default async () => {
    render(<Extension />, document.body);
  };

  const Extension = () => {
    return (
      <s-tile
        heading="My App"
        subheading="Call cart function"
        onClick={() => {
          shopify.cart.addLineItem(12345678, 1);
        }}
      />
    );
  };
  ```

* ####

  ##### Description

  Associate a subscription or selling plan with a line item for recurring purchases. This example shows how to use \`shopify.cart.addLineItemSellingPlan()\` to add selling plans to items. This enables subscription-based sales and recurring revenue models.

  ##### jsx

  ```tsx
  import {render} from 'preact';

  export default async () => {
    render(<Extension />, document.body);
  };

  const Extension = () => {
    return (
      <s-tile
        heading="My App"
        subheading="Call cart function"
        onClick={() => {
          shopify.cart.addLineItemSellingPlan({
            lineItemUuid: 'aa-1234567',
            sellingPlanId: 123,
            sellingPlanName: 'My Exclusive Subscription',
          });
        }}
      />
    );
  };
  ```

* ####

  ##### Description

  Attach custom metadata to a specific line item for additional product information. This example shows how to use \`shopify.cart.addLineItemProperties()\` to add key-value properties to individual items. This enables customization like engraving text, gift messages, or special instructions.

  ##### jsx

  ```tsx
  import {render} from 'preact';

  export default async () => {
    render(<Extension />, document.body);
  };

  const Extension = () => {
    return (
      <s-tile
        heading="My App"
        subheading="Call cart function"
        onClick={() => {
          shopify.cart.addLineItemProperties('aa-1234567', {
            note: 'Handle with care',
            request: 'Gift wrap',
          });
        }}
      />
    );
  };
  ```

* ####

  ##### Description

  Attach custom metadata to the cart for additional order information. This example shows how to use \`shopify.cart.addCartProperties()\` to add key-value properties that persist through checkout. This is useful for tracking order sources, preferences, or workflow data.

  ##### jsx

  ```tsx
  import {render} from 'preact';

  export default async () => {
    render(<Extension />, document.body);
  };

  const Extension = () => {
    return (
      <s-tile
        heading="My App"
        subheading="Call cart function"
        onClick={() => {
          shopify.cart.addCartProperties({
            note: 'Handle with care',
            request: 'Gift wrap',
          });
        }}
      />
    );
  };
  ```

* ####

  ##### Description

  Attach custom metadata to multiple line items efficiently in a single operation. This example demonstrates using \`shopify.cart.bulkAddLineItemProperties()\` to add properties to several items simultaneously. This improves performance for batch customization operations.

  ##### jsx

  ```tsx
  import {render} from 'preact';

  export default async () => {
    render(<Extension />, document.body);
  };

  const Extension = () => {
    return (
      <s-tile
        heading="My App"
        subheading="Call cart function"
        onClick={() => {
          shopify.cart.bulkAddLineItemProperties([
            {
              lineItemUuid: 'aa-1234567',
              properties: {
                note: 'Handle with care',
                request: 'Gift wrap',
              },
            },
            {
              lineItemUuid: 'bb-7654321',
              properties: {
                color: 'Blue',
                size: 'Medium',
              },
            },
          ]);
        }}
      />
    );
  };
  ```

* ####

  ##### Description

  Apply a custom discount to the entire cart using a fixed amount or percentage. This example shows how to use \`shopify.cart.applyCartDiscount()\` to add order-level discounts with custom reasons. This is useful for promotions, loyalty rewards, or staff discounts.

  ##### jsx

  ```tsx
  import {render} from 'preact';

  export default async () => {
    render(<Extension />, document.body);
  };

  const Extension = () => {
    return (
      <s-tile
        heading="My App"
        subheading="Call cart function"
        onClick={() => {
          shopify.cart.applyCartDiscount('Percentage', 'Summer discount', '10');
        }}
      />
    );
  };
  ```

* ####

  ##### Description

  Apply a discount code to the cart for automatic discount validation and application. This example demonstrates using \`shopify.cart.applyCodeDiscount()\` to add discount codes that are validated against Shopify discount rules. This enables promotional code redemption with automatic validation.

  ##### jsx

  ```tsx
  import {render} from 'preact';

  export default async () => {
    render(<Extension />, document.body);
  };

  const Extension = () => {
    return (
      <s-tile
        heading="My App"
        subheading="Call cart function"
        onClick={() => {
          shopify.cart.addCartCodeDiscount('SUMMER10');
        }}
      />
    );
  };
  ```

* ####

  ##### Description

  Apply a custom discount to a specific line item in the cart. This example demonstrates using \`shopify.cart.setLineItemDiscount()\` to add item-level discounts with custom reasons. This is useful for selective price adjustments or item-specific promotions.

  ##### jsx

  ```tsx
  import {render} from 'preact';

  export default async () => {
    render(<Extension />, document.body);
  };

  const Extension = () => {
    return (
      <s-tile
        heading="My App"
        subheading="Call cart function"
        onClick={() => {
          shopify.cart.setLineItemDiscount(
            'aa-1234567',
            'Percentage',
            'Summer discount',
            '10',
          );
        }}
      />
    );
  };
  ```

* ####

  ##### Description

  Add a cart-level discount that applies to the total cart value. This example demonstrates applying a 10% discount titled 'Summer discount' to the cart using the \`applyCartDiscount()\` method with the \`Percentage\` discount type.

  ##### jsx

  ```tsx
  import {render} from 'preact';

  export default async () => {
    render(<Extension />, document.body);
  };

  const Extension = () => {
    return (
      <s-tile
        heading="My App"
        subheading="Call cart function"
        onClick={() => {
          shopify.cart.applyCartDiscount('Percentage', 'Summer discount', '10');
        }}
      />
    );
  };
  ```

* ####

  ##### Description

  Apply discounts to multiple line items efficiently in a single operation. This example shows how to use \`shopify.cart.bulkSetLineItemDiscounts()\` to add discounts to several items simultaneously. This improves performance for bulk pricing adjustments or category-wide promotions.

  ##### jsx

  ```tsx
  import {render} from 'preact';

  export default async () => {
    render(<Extension />, document.body);
  };

  const Extension = () => {
    return (
      <s-tile
        heading="My App"
        subheading="Call cart function"
        onClick={() => {
          shopify.cart.bulkSetLineItemDiscounts([
            {
              lineItemUuid: 'aa-1234567',
              lineItemDiscount: {
                type: 'Percentage',
                title: 'Summer discount',
                amount: '10',
              },
            },
            {
              lineItemUuid: 'bb-7654321',
              lineItemDiscount: {
                type: 'FixedAmount',
                title: 'Loyalty discount',
                amount: '5',
              },
            },
          ]);
        }}
      />
    );
  };
  ```

* ####

  ##### Description

  Assign a customer to the current cart for personalized pricing and order history. This example demonstrates using \`shopify.cart.setCustomer()\` to link a customer by ID. This enables customer-specific discounts, loyalty programs, and order tracking.

  ##### jsx

  ```tsx
  import {render} from 'preact';

  export default async () => {
    render(<Extension />, document.body);
  };

  const Extension = () => {
    return (
      <s-tile
        heading="My App"
        subheading="Call cart function"
        onClick={() => {
          shopify.cart.setCustomer({
            id: 1,
          });
        }}
      />
    );
  };
  ```

* ####

  ##### Description

  Associate a specific line item with a staff member for item-level commission tracking. This example shows how to use \`shopify.cart.setAttributedStaffToLineItem()\` to assign staff members to individual items. This enables granular sales attribution and performance analysis.

  ##### jsx

  ```tsx
  import {render} from 'preact';

  export default async () => {
    render(<Extension />, document.body);
  };

  const Extension = () => {
    return (
      <s-tile
        heading="My App"
        subheading="Call cart function"
        onClick={() => {
          shopify.cart.setAttributedStaffToLineItem(123456, 'aa-1234567');
        }}
      />
    );
  };
  ```

* ####

  ##### Description

  Attribute the cart to a staff member for commission tracking and sales attribution. This example demonstrates using \`shopify.cart.setAttributedStaff()\` to assign staff members to sales. This enables performance tracking and commission calculations.

  ##### jsx

  ```tsx
  import {render} from 'preact';

  export default async () => {
    render(<Extension />, document.body);
  };

  const Extension = () => {
    return (
      <s-tile
        heading="My App"
        subheading="Call cart function"
        onClick={() => {
          shopify.cart.setAttributedStaff(123456);
        }}
      />
    );
  };
  ```

* ####

  ##### Description

  Verify whether the cart is in an editable state before attempting modifications. This example demonstrates using \`shopify.cart.editable\` to check if the cart can accept changes. By disabling actions when the cart is locked or in an immutable state, you can prevent errors and improve the user experience.

  ##### jsx

  ```tsx
  import {render} from 'preact';
  import {useState, useEffect} from 'preact/hooks';
  // Allows the use of `shopify.cart.current.value` as a stateful subscription.
  import '@shopify/ui-extensions/preact';

  export default async () => {
    render(<Extension />, document.body);
  };

  const Extension = () => {
    const [isEditable, setIsEditable] = useState(
      shopify.cart.current.value.editable ?? true
    );

    useEffect(() => {
      const unsubscribe = shopify.cart.current.subscribe((newCart) => {
        setIsEditable(newCart.editable ?? true);
      });
      return unsubscribe;
    }, []);

    return (
      <s-tile
        heading="My App"
        disabled={!isEditable}
      />
    );
  };
  ```

* ####

  ##### Description

  Remove all line items and reset the cart to an empty state. This example shows how to use \`shopify.cart.clear()\` to completely clear the cart. This is useful for starting fresh transactions or implementing cart reset functionality.

  ##### jsx

  ```tsx
  import {render} from 'preact';

  export default async () => {
    render(<Extension />, document.body);
  };

  const Extension = () => {
    return (
      <s-tile
        heading="My App"
        subheading="Call cart function"
        onClick={() => {
          shopify.cart.clearCart();
        }}
      />
    );
  };
  ```

* ####

  ##### Description

  Remove a specific address from the customer profile using its unique identifier. This example shows how to use \`shopify.cart.deleteAddress()\` to delete outdated or incorrect addresses. This helps maintain clean customer records.

  ##### jsx

  ```tsx
  import {render} from 'preact';

  export default async () => {
    render(<Extension />, document.body);
  };

  const Extension = () => {
    return (
      <s-tile
        heading="My App"
        subheading="Call cart function"
        onClick={() => {
          shopify.cart.deleteAddress(123456);
        }}
      />
    );
  };
  ```

* ####

  ##### Description

  Remove a previously applied discount from a specific line item. This example demonstrates using \`shopify.cart.removeLineItemDiscount()\` to clear item-level discounts. This is useful for discount corrections or when promotional conditions are no longer met.

  ##### jsx

  ```tsx
  import {render} from 'preact';

  export default async () => {
    render(<Extension />, document.body);
  };

  const Extension = () => {
    return (
      <s-tile
        heading="My App"
        subheading="Call cart function"
        onClick={() => {
          shopify.cart.removeLineItemDiscount('aa-1234567');
        }}
      />
    );
  };
  ```

* ####

  ##### Description

  Clear all discounts applied to both the cart and individual line items in a single operation. This example shows how to use \`shopify.cart.removeAllDiscounts()\` to reset pricing to base values. This is useful for recalculating totals or canceling promotional offers.

  ##### jsx

  ```tsx
  import {render} from 'preact';

  export default async () => {
    render(<Extension />, document.body);
  };

  const Extension = () => {
    return (
      <s-tile
        heading="My App"
        subheading="Call cart function"
        onClick={() => {
          shopify.cart.removeAllDiscounts(true);
        }}
      />
    );
  };
  ```

* ####

  ##### Description

  Remove a specific line item from the cart using its unique identifier. This example demonstrates using \`shopify.cart.removeLineItem()\` to delete items. This is useful for implementing remove buttons, cart cleanup, or conditional item removal logic.

  ##### jsx

  ```tsx
  import {render} from 'preact';

  export default async () => {
    render(<Extension />, document.body);
  };

  const Extension = () => {
    return (
      <s-tile
        heading="My App"
        subheading="Call cart function"
        onClick={() => {
          shopify.cart.removeLineItem('aa-1234567');
        }}
      />
    );
  };
  ```

* ####

  ##### Description

  Delete specific custom properties from a line item by their keys. This example shows how to use \`shopify.cart.removeLineItemProperties()\` to clear item metadata. This is useful for removing temporary customization data or outdated property values.

  ##### jsx

  ```tsx
  import {render} from 'preact';

  export default async () => {
    render(<Extension />, document.body);
  };

  const Extension = () => {
    return (
      <s-tile
        heading="My App"
        subheading="Call cart function"
        onClick={() => {
          shopify.cart.removeLineItemProperties('aa-1234567', ['note']);
        }}
      />
    );
  };
  ```

* ####

  ##### Description

  Delete specific custom properties from the cart by their keys. This example demonstrates using \`shopify.cart.removeCartProperties()\` to clear metadata. This is useful for cleaning up temporary data or removing properties that are no longer needed.

  ##### jsx

  ```tsx
  import {render} from 'preact';

  export default async () => {
    render(<Extension />, document.body);
  };

  const Extension = () => {
    return (
      <s-tile
        heading="My App"
        subheading="Call cart function"
        onClick={() => {
          shopify.cart.removeCartProperties(['note']);
        }}
      />
    );
  };
  ```

* ####

  ##### Description

  Remove the selling plan from a line item to convert it back to a one-time purchase. This example demonstrates using \`shopify.cart.removeLineItemSellingPlan()\` to clear subscription plans. This is useful when customers change their mind about recurring orders.

  ##### jsx

  ```tsx
  import {render} from 'preact';

  export default async () => {
    render(<Extension />, document.body);
  };

  const Extension = () => {
    return (
      <s-tile
        heading="My App"
        subheading="Call cart function"
        onClick={() => {
          shopify.cart.removeLineItemSellingPlan('aa-1234567');
        }}
      />
    );
  };
  ```

* ####

  ##### Description

  Disassociate the customer from the current cart for anonymous transactions. This example shows how to use \`shopify.cart.removeCustomer()\` to clear customer information. This reverts to guest checkout pricing and removes customer-specific data from the cart.

  ##### jsx

  ```tsx
  import {render} from 'preact';

  export default async () => {
    render(<Extension />, document.body);
  };

  const Extension = () => {
    return (
      <s-tile
        heading="My App"
        subheading="Call cart function"
        onClick={() => {
          shopify.cart.removeCustomer();
        }}
      />
    );
  };
  ```

* ####

  ##### Description

  Designate a specific address as the default for the customer. This example demonstrates using \`shopify.cart.updateDefaultAddress()\` to set the primary shipping or billing address. This simplifies the checkout process for future transactions.

  ##### jsx

  ```tsx
  import {render} from 'preact';

  export default async () => {
    render(<Extension />, document.body);
  };

  const Extension = () => {
    return (
      <s-tile
        heading="My App"
        subheading="Call cart function"
        onClick={() => {
          shopify.cart.updateDefaultAddress(123456);
        }}
      />
    );
  };
  ```

* ####

  ##### Description

  Monitor cart state changes in real time using the subscribe method. This example shows how to use \`shopify.cart.subscribe()\` to receive updates whenever the cart changes. This enables reactive UI updates, validation logic, or analytics tracking based on cart modifications.

  ##### jsx

  ```tsx
  import {render} from 'preact';
  import {useState, useEffect} from 'preact/hooks';
  // Allows the use of `shopify.cart.current.value` as a stateful subscription.
  import '@shopify/ui-extensions/preact';

  export default async () => {
    render(<Extension />, document.body);
  };

  const Extension = () => {
    const [lineItemCount, setLineItemCount] = useState(
      shopify.cart.current.value.lineItems.length
    );

    useEffect(() => {
      const unsubscribe = shopify.cart.current.subscribe((newCart) => {
        setLineItemCount(newCart.lineItems.length);
      });
      return unsubscribe;
    }, []);

    return (
      <s-tile
        heading="My App"
        subheading={`${lineItemCount} line items in cart`}
      />
    );
  };
  ```

***

### Best practices

* **Handle cart state reactively:** Use the signal-based interface to automatically update your extension UI when cart changes occur.
* **Validate operations before execution:** Check cart editability and validate input data before performing cart operations to prevent errors.
* **Use bulk operations for efficiency:** When performing multiple related operations, use bulk methods like `bulkCartUpdate`, `bulkSetLineItemDiscounts`, and `bulkAddLineItemProperties` for better performance and reduced API calls.
* **Handle errors gracefully:** Implement proper error handling for all cart operations, as they may fail due to inventory constraints, validation errors, oversell protection, or business rule violations.
* **Manage selling plans appropriately:** When working with subscription products, validate selling plan compatibility and handle selling plan requirements.

***

### Limitations

Cart operations may fail due to business rules, inventory constraints, oversell protection, or validation errors—always implement appropriate error handling.

***

---



<a id="latest-target-apis-contextual-apis-cart-line-item-api"></a>


## Cart Line Item API

The Cart Line Item API provides read-only access to a specific line item in the cart. Use this API to get line item details like product information, pricing, discounts, and custom properties. This allows you to build features that respond to the specific item a customer is viewing or interacting with.

#### Use cases

* **Line item details:** Display detailed information including product details, pricing, and quantities.
* **Item-specific actions:** Implement actions based on product type, vendor, or selling plan requirements.
* **Contextual UI:** Create interfaces that adapt based on line item characteristics.
* **Discounts and properties:** Access discounts, properties, and selling plans for specialized interfaces.

#### Support Targets (2)

#### Supported targets

* [pos.​cart.​line-item-details.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/cart-details#cart-details-targets)
* [pos.​cart.​line-item-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/cart-details#cart-details-action-modal-)

#### Properties

The [`shopify` global object](https://shopify.dev/docs/api/pos-ui-extensions/2026-04#target-apis-define-what-your-extension-does) provides read-only access to the current line item in the cart. Access the following properties on `shopify` to get line item details like product information, pricing, discounts, and custom properties.

* **cartLineItem**

  **LineItem**

  **required**

  The selected line item in the merchant's current cart. Provides complete line item data including product information, pricing, discounts, properties, and metadata. Use for displaying item details and implementing item-specific functionality.

#### LineItem

Represents an individual item in the shopping cart. Contains product information, pricing, quantity, discounts, and customization details for a single cart entry.

* attributedUserId

  The staff member 'ID' attributed to this line item. Returns 'undefined' if no staff attribution is set. Use for commission tracking and performance analytics.

  ```ts
  number
  ```

* components

  Bundle components for this line item. Only present for \[product bundles]\(/docs/apps/build/product-merchandising/bundles). Each component represents an individual item within the bundle with its own tax information.

  ```ts
  LineItemComponent[]
  ```

* discountAllocations

  An array of discount allocations applied to this line item, providing detailed breakdown of how discounts are distributed. Returns 'undefined' if no allocations exist. Use for enhanced discount tracking and reporting.

  ```ts
  DiscountAllocation[]
  ```

* discounts

  An array of discounts applied to this line item. Empty array if no discounts are active. Use for displaying line item savings and discount details.

  ```ts
  Discount[]
  ```

* hasSellingPlanGroups

  Determines whether this line item has selling plan groups (subscription options) available. Returns 'undefined' if selling plan information is unavailable. Use for displaying subscription options.

  ```ts
  boolean
  ```

* isGiftCard

  Determines whether this line item is a gift card. Gift cards have special handling requirements and business logic. Use for implementing gift card-specific workflows.

  ```ts
  boolean
  ```

* price

  The unit price of the line item. Returns 'undefined' for custom sales without set prices. Use for pricing calculations and displays.

  ```ts
  number
  ```

* productId

  The product 'ID' this line item represents. Returns 'undefined' for custom sales or non-product items. Use for product-specific operations and linking to product details.

  ```ts
  number
  ```

* properties

  The custom key-value properties attached to this line item. Empty object if no properties are set. Use for metadata, customization options, or integration data.

  ```ts
  { [key: string]: string; }
  ```

* quantity

  The quantity of this item in the cart. Always a positive integer. Use for quantity displays, calculations, and inventory management.

  ```ts
  number
  ```

* requiresSellingPlan

  Determines whether this line item requires a selling plan (subscription) to be purchased. Returns 'undefined' if selling plan information is unavailable. Use for implementing subscription-based product handling.

  ```ts
  boolean
  ```

* sellingPlan

  The currently selected selling plan for this line item. Returns 'undefined' if no selling plan is applied. Contains selling plan details including 'ID', name, and delivery intervals. Use for subscription management and recurring purchase functionality.

  ```ts
  SellingPlan
  ```

* sku

  The Stock Keeping Unit (SKU) identifier for this line item. Returns 'undefined' if no SKU is configured. Use for inventory tracking and product identification.

  ```ts
  string
  ```

* taxable

  Determines whether this line item is subject to tax calculations. Use for tax computation, compliance, and pricing displays.

  ```ts
  boolean
  ```

* taxLines

  An array of tax lines applied to this line item, containing tax amounts and rates. Use for detailed tax reporting and compliance.

  ```ts
  TaxLine[]
  ```

* title

  The display title of the line item. Returns 'undefined' for items without titles. Use for customer-facing displays and cart item identification.

  ```ts
  string
  ```

* uuid

  The unique identifier for this line item within the cart. Use for line item-specific operations like updates, removals, or property modifications.

  ```ts
  string
  ```

* variantId

  The product variant 'ID' this line item represents. Returns 'undefined' for custom sales or non-variant items. Use for variant-specific operations and product details.

  ```ts
  number
  ```

* vendor

  The vendor or brand name for this line item. Returns 'undefined' if no vendor is set. Use for vendor-specific displays and organization.

  ```ts
  string
  ```

#### LineItemComponent

Represents a component of a \[product bundle]\(/docs/apps/build/product-merchandising/bundles) line item. Bundle components contain the individual items that make up a bundle, each with their own pricing and tax information.

* price

  The price for the custom sale item as currency string. Must be a valid positive amount. Use for non-catalog items and custom pricing.

  ```ts
  number
  ```

* productId

  The unique numeric identifier for the product this component represents, if applicable.

  ```ts
  number
  ```

* quantity

  The quantity of the custom sale item. Must be a positive integer. Use for quantity-based pricing and inventory management.

  ```ts
  number
  ```

* taxable

  Determines whether the custom sale item is taxable. Set to \`true\` to apply tax calculations, \`false\` to exempt from taxes.

  ```ts
  boolean
  ```

* taxLines

  An array of tax lines applied to this component.

  ```ts
  TaxLine[]
  ```

* title

  The display name for the custom sale item. Appears on receipts and in cart displays. Should be descriptive and customer-friendly.

  ```ts
  string
  ```

* variantId

  The unique numeric identifier for the product variant this component represents, if applicable.

  ```ts
  number
  ```

#### TaxLine

Represents a tax line applied to an item or transaction.

* enabled

  Whether this tax is currently enabled.

  ```ts
  boolean
  ```

* price

  The tax amount as a Money object.

  ```ts
  Money
  ```

* rate

  The tax rate as a decimal number.

  ```ts
  number
  ```

* rateRange

  The range of tax rates if applicable.

  ```ts
  { min: number; max: number; }
  ```

* title

  The title or name of the tax.

  ```ts
  string
  ```

* uuid

  The unique identifier for this tax line.

  ```ts
  string
  ```

#### Money

Represents a monetary amount with currency information.

* amount

  The monetary amount as a number.

  ```ts
  number
  ```

* currency

  The \[ISO 4217]\(https://en.wikipedia.org/wiki/ISO\_4217) currency code associated with the location currently active on POS.

  ```ts
  string
  ```

#### DiscountAllocation

Represents the allocation of a discount to a specific line item.

* allocatedAmount

  The amount of discount allocated.

  ```ts
  MoneyV2
  ```

#### MoneyV2

Represents a monetary amount as a string with explicit currency code.

* amount

  The monetary amount as a string.

  ```ts
  string
  ```

* currencyCode

  The ISO currency code (for example, USD, CAD).

  ```ts
  string
  ```

#### Discount

Represents a discount applied to a cart or transaction, including amount and description.

* amount

  The discount value to apply. For \`'Percentage'\` type, this represents the percentage value (For example, "10" for 10% off). For \`'FixedAmount'\` type, this represents the fixed monetary amount to deduct from the line item price. Commonly used for discount calculations and displaying the discount value to merchants.

  ```ts
  number
  ```

* currency

  The \[ISO 4217]\(https://en.wikipedia.org/wiki/ISO\_4217) currency code associated with the location currently active on POS.

  ```ts
  string
  ```

* discountDescription

  A human-readable description of the discount shown to merchants and customers. This typically includes the discount name, promotion details, or discount code (for example, "SUMMER2024", "10% off entire order", "Buy 2 Get 1 Free"). Returns \`undefined\` when no description is provided.

  ```ts
  string
  ```

* type

  The \[discount type]\(https://help.shopify.com/en/manual/discounts/discount-types) applied to this line item. Can be either \`'Percentage'\` for percentage-based discounts or \`'FixedAmount'\` for fixed monetary amount discounts. This determines how the discount amount is calculated and displayed.

  ```ts
  string
  ```

#### SellingPlan

Represents a selling plan (subscription) associated with a line item, containing delivery schedule and plan identification details.

* deliveryInterval

  The interval of the selling plan. (DAY, WEEK, MONTH, YEAR).

  ```ts
  string
  ```

* deliveryIntervalCount

  The number of intervals between deliveries.

  ```ts
  number
  ```

* digest

  The fingerprint of the applied selling plan within this cart session. Provided by POS. Not available during refund / exchanges.

  ```ts
  string
  ```

* id

  The unique identifier of the selling plan.

  ```ts
  number
  ```

* name

  The name of the POS device.

  ```ts
  string
  ```

Examples

#### Examples

* ####

  ##### Description

  Access the unique identifier of the current cart line item in line item detail contexts. This example shows how to use \`shopify.cartLineItem.id\` to retrieve the line item ID. This can be used for modifying the item, applying discounts, or implementing item-specific functionality.

  ##### jsx

  ```tsx
  import {render} from 'preact';

  export default async () => {
    render(<Extension />, document.body);
  };

  const Extension = () => {
    return (
      <s-page heading='Cart Line Item Details Action'>
        <s-scroll-box>
          <s-text>Cart Line Item ID: {shopify.cartLineItem.uuid}</s-text>
        </s-scroll-box>
      </s-page>
    );
  };
  ```

***

### Best practices

* **Handle optional properties:** Check for `undefined` in optional properties like `price`, `productId`, `title`, `sku`, and vendor before use.
* **Create contextual experiences:** Use line item data to show different interfaces for gift cards, subscriptions, or vendor-specific information.
* **Implement item-specific validation:** Use properties like `taxable`, `isGiftCard`, and `requiresSellingPlan` for appropriate business logic.
* **Handle selling plans:** When working with subscriptions, check `requiresSellingPlan` and `sellingPlan` to provide appropriate subscription management.
* **Access related data efficiently:** Use `productId` and `variantId` to fetch additional info when needed, but avoid unnecessary API calls.

***

### Limitations

* Line item data reflects the current state and may not include real-time inventory, pricing, or selling plan updates until the cart is refreshed.
* Selling plan information may be limited during refund or exchange operations where digest values aren't available.

***

---



<a id="latest-target-apis-contextual-apis-customer-api"></a>


## Customer API

The Customer API provides read-only access to customer data. Use this API to get customer information and build personalized experiences based on the selected customer context. The API offers the customer identifier for linking to customer data and enabling customer-specific features.

#### Use cases

* **Customer search:** Search for customers by name, email, phone, or custom attributes.
* **Profile creation:** Create new customer profiles with contact information and metadata.
* **Profile updates:** Update customer information including details, addresses, and group assignments.
* **Loyalty programs:** Implement loyalty programs by tracking purchase history and applying discounts.

#### Support Targets (3)

#### Supported targets

* [pos.​customer-details.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/customer-details#customer-details-action-menu-item-)
* [pos.​customer-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/customer-details#customer-details-action-modal-)
* [pos.​customer-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/customer-details#customer-details-targets)

#### Properties

The [`shopify` global object](https://shopify.dev/docs/api/pos-ui-extensions/2026-04#target-apis-define-what-your-extension-does) provides customer information for the active context. Access the following properties on `shopify` to get the customer identifier for building personalized experiences.

* **id**

  **number**

  **required**

  The unique identifier for the customer. Use for customer lookups, applying customer-specific pricing, enabling personalized features, and integrating with external systems.

Examples

#### Examples

* ####

  ##### Description

  Access the unique identifier of the current customer in a customer detail context. This example shows how to use \`shopify.customer.id\` to retrieve the customer ID. This can be used for fetching additional customer data, implementing loyalty features, or building personalized customer experiences.

  ##### jsx

  ```tsx
  import {render} from 'preact';

  export default async () => {
    render(<Extension />, document.body);
  };

  const Extension = () => {
    return (
      <s-page heading='Customer Api'>
        <s-scroll-box>
          <s-text>Customer ID: {shopify.customer.id}</s-text>
        </s-scroll-box>
      </s-page>
    );
  };
  ```

***

### Best practices

* **Use customer ID for lookups:** Fetch additional customer information from external systems or Shopify APIs using the customer ID.
* **Enable personalized features:** Use customer context for customer-specific pricing, loyalty programs, or product recommendations.
* **Validate customer access:** Verify the customer ID is valid before performing operations or API calls.

***

### Limitations

Customer data reflects the current POS session and may not include real-time updates from other channels until the session is refreshed.

***

---



<a id="latest-target-apis-contextual-apis-draft-order-api"></a>


## Draft Order API

The Draft Order API provides read-only access to draft order data. Use this API to get draft order information and build contextual experiences based on the selected draft order context. The API offers draft order details for implementing order-specific functionality and workflows.

#### Use cases

* **Draft order access:** Access the draft order identifier to implement specific functionality.
* **Order display:** Build extensions that display order information or management tools.
* **Contextual UI:** Create interfaces that adapt based on the draft order context.
* **External integrations:** Link draft order data with external systems or order management platforms.

#### Support Targets (3)

#### Supported targets

* [pos.​draft-order-details.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/draft-order-details#draft-order-details-action-menu-item-)
* [pos.​draft-order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/draft-order-details#draft-order-details-action-modal-)
* [pos.​draft-order-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/draft-order-details#draft-order-details-targets)

#### Properties

The [`shopify` global object](https://shopify.dev/docs/api/pos-ui-extensions/2026-04#target-apis-define-what-your-extension-does) provides draft order details for the active context. Access the following properties on `shopify` to get draft order information including the order identifier, name, and associated customer.

* **id**

  **number**

  **required**

  The unique identifier for the draft order. Use for draft order lookups, implementing order-specific functionality, and integrating with external systems.

* **name**

  **string**

  **required**

  The name of the draft order as configured by the merchant. Use for draft order identification, displays, and customer-facing interfaces.

* **customerId**

  **number**

  The unique identifier of the customer associated with the draft order. Returns `undefined` if no customer is associated. Use for customer-specific functionality and personalized experiences.

Examples

#### Examples

* ####

  ##### Description

  Access the unique identifier of the current draft order in a draft order detail context. This example shows how to use \`shopify.draftOrder.id\` to retrieve the draft order ID. This can be used for fetching additional order data, implementing custom workflows, or building draft order-specific features.

  ##### jsx

  ```tsx
  import {render} from 'preact';

  export default async () => {
    render(<Extension />, document.body);
  };

  const Extension = () => {
    return (
      <s-page heading='Draft Order Details Action'>
        <s-scroll-box>
          <s-text>Order ID: {shopify.draftOrder.id}</s-text>
        </s-scroll-box>
      </s-page>
    );
  };
  ```

* ####

  ##### Description

  Access multiple properties from the draft order object including name, ID, and customer information. This example demonstrates using \`shopify.draftOrder\` to retrieve comprehensive draft order details. This enables building contextual interfaces and implementing order-specific workflows.

  ##### jsx

  ```tsx
  import {render} from 'preact';

  export default async () => {
    render(<Extension />, document.body);
  };

  const Extension = () => {
    const {id, name, customerId} = shopify.draftOrder;

    return (
      <s-page heading="Draft Order Details">
        <s-scroll-box>
          <s-stack direction="block">
            <s-text>Draft Order ID: {id}</s-text>
            <s-text>Draft Order Name: {name}</s-text>
            {customerId ? (
              <s-text>Customer ID: {customerId}</s-text>
            ) : (
              <s-text>No customer associated with this draft order</s-text>
            )}
          </s-stack>
        </s-scroll-box>
      </s-page>
    );
  };
  ```

***

### Best practices

* **Use draft order ID for data lookups:** Use the draft order ID to fetch additional draft order information from external systems, order management platforms, or Shopify APIs when building comprehensive draft order experiences.
* **Implement draft order-specific features:** Use the draft order context to enable specialized functionality like draft order conversion, customer assignment, or order modification workflows.
* **Validate draft order access:** Verify that the draft order ID is valid before performing draft order-specific operations or external API calls.

***

### Limitations

Draft order data reflects the current POS session and may not include real-time updates from other channels until the session is refreshed.

***

---



<a id="latest-target-apis-contextual-apis-order-api"></a>


## Order API

The Order API provides read-only access to order data. Use this API to get order information and build contextual experiences based on the selected order context. The API offers order details for implementing order-specific functionality and workflows.

#### Use cases

* **Order access:** Access the order identifier to implement order-specific functionality.
* **Order display:** Build extensions showing order information or management tools.
* **Contextual UI:** Create interfaces that adapt based on the current order context.
* **External integrations:** Link order data with external systems or order management platforms.

#### Support Targets (12)

#### Supported targets

* [pos.​exchange.​post.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-exchange#post-exchange-action-menu-item-)
* [pos.​exchange.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-exchange#post-exchange-action-modal-)
* [pos.​exchange.​post.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-exchange#post-exchange-targets)
* [pos.​order-details.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/order-details#order-details-action-menu-item-)
* [pos.​order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/order-details#order-details-action-modal-)
* [pos.​order-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/order-details#order-details-targets)
* [pos.​purchase.​post.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-purchase#post-purchase-action-menu-item-)
* [pos.​purchase.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-purchase#post-purchase-action-modal-)
* [pos.​purchase.​post.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-purchase#post-purchase-targets)
* [pos.​return.​post.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-return#post-return-action-menu-item-)
* [pos.​return.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-return#post-return-action-modal-)
* [pos.​return.​post.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-return#post-return-targets)

#### Properties

The [`shopify` global object](https://shopify.dev/docs/api/pos-ui-extensions/2026-04#target-apis-define-what-your-extension-does) provides access to order data for the active context. Access the following properties on `shopify` to get order information including the order identifier, name, and associated customer.

* **id**

  **number**

  **required**

  The unique identifier for the order. Use for order lookups, implementing order-specific functionality, and integrating with external systems.

* **name**

  **string**

  **required**

  The name of the order as configured by the merchant. Use for order identification, displays, and customer-facing interfaces.

* **customerId**

  **number**

  The unique identifier of the customer associated with the order. Returns `undefined` if no customer is associated. Use for customer-specific functionality and personalized experiences.

Examples

#### Examples

* ####

  ##### Description

  Access the unique identifier of the current order in an order detail action context. This example shows how to use \`shopify.order.id\` to retrieve the order ID. This can be used for fetching additional order data, tracking, or implementing order-specific functionality and post-purchase workflows.

  ##### jsx

  ```tsx
  import {render} from 'preact';

  export default async () => {
    render(<Extension />, document.body);
  };

  const Extension = () => {
    return (
      <s-page heading="Order Api">
        <s-scroll-box>
          <s-text>Order ID: {shopify.order.id}</s-text>
        </s-scroll-box>
      </s-page>
    );
  };
  ```

* ####

  ##### Description

  Access multiple order properties including the order name and customer ID. This example demonstrates accessing \`shopify.order.id\`, \`shopify.order.name\`, and \`shopify.order.customerId\` to display comprehensive order information. Use this pattern for order management workflows and customer service features.

  ##### jsx

  ```tsx
  import {render} from 'preact';

  export default async () => {
    render(<Extension />, document.body);
  };

  const Extension = () => {
    const {id, name, customerId} = shopify.order;

    return (
      <s-page heading="Order Details">
        <s-scroll-box>
          <s-stack direction="block">
            <s-text>Order ID: {id}</s-text>
            <s-text>Order Name: {name}</s-text>
            {customerId ? (
              <s-text>Customer ID: {customerId}</s-text>
            ) : (
              <s-text>No customer associated with this order</s-text>
            )}
          </s-stack>
        </s-scroll-box>
      </s-page>
    );
  };
  ```

***

### Best practices

* **Use order ID for data lookups:** Use the order ID to fetch additional order information from external systems, order management platforms, or Shopify APIs when building comprehensive order experiences.
* **Implement order-specific features:** Use the order context to enable specialized functionality like order fulfillment, customer communication, or order modification workflows.
* **Validate order access:** Verify that the order ID is valid before performing order-specific operations or external API calls.

***

### Limitations

Order data reflects the current POS session and may not include real-time updates from other channels until the session is refreshed.

***

---



<a id="latest-target-apis-contextual-apis-product-api"></a>


## Product API

The Product API provides read-only access to product data. Use this API to get product information and build contextual experiences based on the selected product context. The API offers product details for implementing product-specific functionality and workflows.

#### Use cases

* **Product access:** Access the product identifier for product-specific functionality.
* **Product display:** Build extensions showing product information, variant details, or inventory tools.
* **Contextual UI:** Create interfaces that adapt based on product context and variant selection.
* **External integrations:** Link product data with external inventory or product management platforms.

#### Support Targets (3)

#### Supported targets

* [pos.​product-details.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details#product-details-action-menu-item-)
* [pos.​product-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details#product-details-action-modal-)
* [pos.​product-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details#product-details-targets)

#### Properties

The [`shopify` global object](https://shopify.dev/docs/api/pos-ui-extensions/2026-04#target-apis-define-what-your-extension-does) provides product and variant details for the active context. Access the following properties on `shopify` to get product and variant identifiers for building contextual experiences.

* **id**

  **number**

  **required**

  The unique identifier for the product. Use for product lookups, implementing product-specific functionality, and integrating with external systems.

* **variantId**

  **number**

  **required**

  The unique identifier for the product variant. Use for variant-specific operations, cart additions, and inventory management.

Examples

#### Examples

* ####

  ##### Description

  Access the unique identifier of the current product in a product detail action context. This example shows how to use \`shopify.product.id\` to retrieve the product ID. This can be used for fetching additional product data, analytics, or implementing product-specific features and workflows.

  ##### jsx

  ```tsx
  import {render} from 'preact';

  export default async () => {
    render(<Extension />, document.body);
  };

  const Extension = () => {
    return (
      <s-page heading="Product Api">
        <s-scroll-box>
          <s-text>Product ID: {shopify.product.id}</s-text>
        </s-scroll-box>
      </s-page>
    );
  };
  ```

* ####

  ##### Description

  Access both product and variant identifiers to implement variant-specific functionality. This example shows how to retrieve \`shopify.product.id\` and \`shopify.product.variantId\` together. Use this pattern for variant-aware features like inventory checks, variant-specific pricing, or detailed product information displays.

  ##### jsx

  ```tsx
  import {render} from 'preact';

  export default async () => {
    render(<Extension />, document.body);
  };

  const Extension = () => {
    const {id, variantId} = shopify.product;

    return (
      <s-page heading="Product & Variant">
        <s-scroll-box>
          <s-stack direction="block">
            <s-text>Product ID: {id}</s-text>
            <s-text>Variant ID: {variantId}</s-text>
          </s-stack>
        </s-scroll-box>
      </s-page>
    );
  };
  ```

***

### Best practices

* **Use product ID for data lookups:** Use the product ID to fetch additional product information from external systems, inventory management platforms, or Shopify APIs when building comprehensive product experiences.
* **Implement variant-specific features:** Use the variant ID to enable specialized functionality like variant-specific pricing, inventory checks, or cart operations.
* **Validate product access:** Verify that the product ID and variant ID are valid before performing product-specific operations or external API calls.

***

### Limitations

Product data reflects the current POS session and may not include real-time updates from other channels until the session is refreshed.

***

---



<a id="latest-target-apis-platform-apis-camera-api"></a>


## Camera API

The Camera API provides access to the device's camera, enabling photo capture directly within POS UI extensions. The API requests camera permissions if not already enabled, opens the native camera interface, and returns the image data including dimensions, file size, and base64 string for immediate display or server upload.

#### Use cases

* **Photo capture:** Capture photos for product documentation, damage verification, or visual records.
* **Proof workflows:** Create photo-based proof workflows for deliveries, returns, or customer verification.
* **Visual documentation:** Document inventory conditions or store displays.
* **Customer engagement:** Implement features requiring visual capture for custom orders or personalization.

#### Support Targets (28)

#### Supported targets

* [pos.​cart.​line-item-details.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/cart-details#cart-details-targets)
* [pos.​cart.​line-item-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/cart-details#cart-details-action-modal-)
* [pos.​customer-details.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/customer-details#customer-details-action-menu-item-)
* [pos.​customer-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/customer-details#customer-details-action-modal-)
* [pos.​customer-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/customer-details#customer-details-targets)
* [pos.​draft-order-details.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/draft-order-details#draft-order-details-action-menu-item-)
* [pos.​draft-order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/draft-order-details#draft-order-details-action-modal-)
* [pos.​draft-order-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/draft-order-details#draft-order-details-targets)
* [pos.​exchange.​post.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-exchange#post-exchange-action-menu-item-)
* [pos.​exchange.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-exchange#post-exchange-action-modal-)
* [pos.​exchange.​post.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-exchange#post-exchange-targets)
* [pos.​home.​modal.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/home-screen#home-screen-action-modal-)
* [pos.​home.​tile.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/home-screen#home-screen-targets)
* [pos.​order-details.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/order-details#order-details-action-menu-item-)
* [pos.​order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/order-details#order-details-action-modal-)
* [pos.​order-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/order-details#order-details-targets)
* [pos.​product-details.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details#product-details-action-menu-item-)
* [pos.​product-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details#product-details-action-modal-)
* [pos.​product-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details#product-details-targets)
* [pos.​purchase.​post.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-purchase#post-purchase-action-menu-item-)
* [pos.​purchase.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-purchase#post-purchase-action-modal-)
* [pos.​purchase.​post.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-purchase#post-purchase-targets)
* [pos.​register-details.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/register-details#register-details-targets)
* [pos.​register-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/register-details#register-details-action-modal-)
* [pos.​register-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/register-details#register-details-block-)
* [pos.​return.​post.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-return#post-return-action-menu-item-)
* [pos.​return.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-return#post-return-action-modal-)
* [pos.​return.​post.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-return#post-return-targets)

#### Properties

The [`shopify` global object](https://shopify.dev/docs/api/pos-ui-extensions/2026-04#target-apis-define-what-your-extension-does) provides camera capabilities for the POS device. Access the following properties on `shopify` to capture photos for documentation, verification, or customer engagement.

* **takePhoto**

  **(options?: CameraMediaOptions) => Promise\<CameraMediaResponse>**

  **required**

  Launch the device's camera to take a photo.

#### CameraMediaOptions

Specifies configuration options for capturing photos using the device camera.

* facingMode

  The camera that will be active when the camera interface first opens. - \`'user'\`: The front-facing camera - \`'environment'\`: The rear-facing camera

  ```ts
  'user' | 'environment'
  ```

* maxHeight

  The maximum height (1 to 1920) of the image in pixels. Resizes the image to this height if it is larger.

  ```ts
  number
  ```

* maxWidth

  The maximum width (1 to 1920) of the image in pixels. Resizes the image to this width if it is larger.

  ```ts
  number
  ```

* quality

  The quality of the image returned. Percentile value between 0 (lowest quality/highest compression) and 1 (highest quality/lowest compression).

  ```ts
  number
  ```

#### CameraMediaResponse

Represents the captured image and associated metadata returned by \`shopify.camera.takePhoto()\`.

* base64

  The image data as base64 string.

  ```ts
  string
  ```

* fileSize

  The file size of the image in bytes.

  ```ts
  number
  ```

* height

  The height of the image in pixels.

  ```ts
  number
  ```

* type

  The MIME type of the image.

  ```ts
  string
  ```

* width

  The width of the image in pixels.

  ```ts
  number
  ```

Examples

#### Examples

* ####

  ##### Description

  This example demonstrates capturing a photo using \`shopify.camera.takePhoto()\` and uploading it to a backend server for further processing. It shows loading states during capture and upload, handles errors appropriately, and confirms successful upload with toast notifications.

  ##### jsx

  ```tsx
  import {render} from 'preact';
  import {useState} from 'preact/hooks';

  export default async () => {
    render(<Extension />, document.body);
  };

  const Extension = () => {
    const [isProcessing, setIsProcessing] = useState(false);

    const handleCaptureAndUpload = async () => {
      setIsProcessing(true);
      try {
        const photo = await shopify.camera.takePhoto({
          quality: 0.8,
          maxWidth: 1520,
          maxHeight: 1520,
        });

        // Upload the image to your backend server
        // (Replace with your actual backend endpoint)
        await fetch('https://your-backend.com/api/upload', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            image: photo.base64,
            mimeType: photo.type,
          }),
        });

        shopify.toast.show('Photo uploaded successfully!');
      } catch (error) {
        shopify.toast.show(`Error: ${error.message}`);
      } finally {
        setIsProcessing(false);
      }
    };

    return (
      <s-tile
        heading="Upload Photo"
        onClick={handleCaptureAndUpload}
        disabled={isProcessing}
      />
    );
  };
  ```

* ####

  ##### Description

  This example demonstrates using \`shopify.camera.takePhoto()\` to capture an image with the device camera and displaying it immediately using the \`image\` component.

  ##### jsx

  ```tsx
  import {render} from 'preact';
  import {useState} from 'preact/hooks';

  export default async () => {
    render(<Extension />, document.body);
  };

  const Extension = () => {
    const [imageData, setImageData] = useState(null);
    const [isCapturing, setIsCapturing] = useState(false);

    const handleTakePhoto = async () => {
      setIsCapturing(true);
      try {
        const photo = await shopify.camera.takePhoto();
        setImageData(photo);
        shopify.toast.show('Photo captured successfully!');
      } catch (error) {
        // skip showing errors when the user cancels the photo capture.
        if (!error.message.includes('User cancelled')) {
          shopify.toast.show(`Error: ${error.message}`);
        }
      } finally {
        setIsCapturing(false);
      }
    };

    return (
      <s-page heading="Camera Capture">
        <s-scroll-box>
          <s-stack>
            <s-button onClick={handleTakePhoto} disabled={isCapturing}>
              {isCapturing ? 'Capturing...' : 'Take Photo'}
            </s-button>

            {imageData && (
              <>
                <s-image
                  src={`data:${imageData.type};base64,${imageData.base64}`}
                />
                <s-section heading="Image Details">
                  <s-text>Width: {imageData.width}px</s-text>
                  <s-text>Height: {imageData.height}px</s-text>
                  <s-text>
                    File Size: {(imageData.fileSize / 1024).toFixed(2)} KB
                  </s-text>
                  <s-text>Type: {imageData.type}</s-text>
                </s-section>
              </>
            )}
          </s-stack>
        </s-scroll-box>
      </s-page>
    );
  };
  ```

***

### Best practices

* **Optimize image quality:** Use appropriate quality and size settings to balance image quality with file size and upload performance.
* **Provide feedback:** Show loading states while processing images and clear success/error messages after capture.
* **Handle errors gracefully:** Account for scenarios where users cancel, camera is unavailable, or permissions are denied.

***

### Limitations

* Camera functionality requires the device to have a camera and appropriate permissions granted by the user.
* Only one camera operation can be in progress at a time. Attempting to call `takePhoto()` while a capture is already in progress will result in a rejected promise.
* Base64 strings can be memory-intensive for large images. Use appropriate `maxWidth`, `maxHeight`, and `quality` settings to optimize performance.
* The `facingMode` parameter may not behave consistently on all Android devices, because camera-facing behavior varies across manufacturers. If a requested mode isn't supported, the rear-facing camera is used by default, and users can still manually switch cameras from the camera interface.

***

---



<a id="latest-target-apis-platform-apis-cash-drawer-api"></a>


## Cash Drawer API

The Cash Drawer API provides programmatic control over cash drawer hardware connected to POS devices. Use this API to trigger cash drawer operations for manual cash handling, custom payment workflows, or register management tasks.

#### Use cases

* **Manual operations:** Open cash drawers for verification, deposits, or withdrawals outside transactions.
* **Dual authorization:** Implement workflows requiring manager approval before opening the drawer.
* **Cash management:** Create tools for end-of-shift counting, till balancing, or float changes.
* **Compliance:** Build features requiring cash drawer access logs or audit trails.

#### Support Targets (3)

#### Supported targets

* [pos.​register-details.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/register-details#register-details-targets)
* [pos.​register-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/register-details#register-details-action-modal-)
* [pos.​register-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/register-details#register-details-block-)

#### Properties

The [`shopify` global object](https://shopify.dev/docs/api/pos-ui-extensions/2026-04#target-apis-define-what-your-extension-does) provides methods for controlling cash drawer hardware. Access the following properties on `shopify` to trigger cash drawer operations for manual cash handling.

* **open**

  **() => Promise\<void>**

  **required**

  Opens the connected cash drawer device. The drawer will automatically open if a compatible cash drawer is connected to the POS device. Use for manual cash drawer operations, implementing custom payment workflows, or providing explicit cash drawer access in register management interfaces.

Examples

#### Examples

* ####

  ##### Description

  Open the cash drawer programmatically for manual cash handling or custom workflows. This example shows how to use \`shopify.cashDrawer.open()\` to trigger the connected cash drawer hardware. This is useful for no-sale transactions, manual cash operations, or register management tasks that require direct cash access.

  ##### jsx

  ```tsx
  import {render} from 'preact';

  export default async () => {
    render(<Extension />, document.body);
  };

  const Extension = () => {
    return (
      <s-page heading="Cash Drawer API">
        <s-scroll-box>
          <s-button
            onClick={() =>
              shopify.cashDrawer.open()
            }
          >
            Open cash drawer
          </s-button>
        </s-scroll-box>
      </s-page>
    );
  };
  ```

***

### Best practices

* **Implement error handling:** Wrap `cashDrawer.open()` calls in try-catch blocks. Show clear error messages with resolution steps.
* **Require authorization:** Implement authorization checks before opening for non-transaction operations. Consider PIN entry, manager approval, or staff permissions.
* **Provide user feedback:** Show immediate confirmations like "Cash drawer opened successfully" so staff know the operation completed.
* **Log operations for audit:** Track all openings including timestamps, staff info, and reason for loss prevention and compliance.
* **Test without hardware:** Handle scenarios where no drawer is connected with fallback workflows or clear messaging.
* **Consider timing:** Open at appropriate moments. Avoid opening multiple times in quick succession or in inappropriate workflow states.

***

### Limitations

The API only triggers the drawer opening mechanism and cannot detect whether the drawer is currently open, closed, or physically jammed—your extension is responsible for any required state tracking.

***

---



<a id="latest-target-apis-platform-apis-connectivity-api"></a>


## Connectivity API

The Connectivity API provides access to device connectivity information, allowing you to monitor Internet connection status and respond to connectivity changes in real-time. The API enables both immediate connectivity checks and dynamic updates when network conditions change.

#### Use cases

* **Network monitoring:** Monitor connectivity and handle network interruptions during transactions.
* **Status indicators:** Display connectivity status to inform users about network availability.
* **Queue operations:** Queue API calls and sync operations when connectivity is restored.
* **Retry logic:** Implement retry logic for failed network operations.

#### Support Targets (28)

#### Supported targets

* [pos.​cart.​line-item-details.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/cart-details#cart-details-targets)
* [pos.​cart.​line-item-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/cart-details#cart-details-action-modal-)
* [pos.​customer-details.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/customer-details#customer-details-action-menu-item-)
* [pos.​customer-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/customer-details#customer-details-action-modal-)
* [pos.​customer-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/customer-details#customer-details-targets)
* [pos.​draft-order-details.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/draft-order-details#draft-order-details-action-menu-item-)
* [pos.​draft-order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/draft-order-details#draft-order-details-action-modal-)
* [pos.​draft-order-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/draft-order-details#draft-order-details-targets)
* [pos.​exchange.​post.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-exchange#post-exchange-action-menu-item-)
* [pos.​exchange.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-exchange#post-exchange-action-modal-)
* [pos.​exchange.​post.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-exchange#post-exchange-targets)
* [pos.​home.​modal.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/home-screen#home-screen-action-modal-)
* [pos.​home.​tile.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/home-screen#home-screen-targets)
* [pos.​order-details.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/order-details#order-details-action-menu-item-)
* [pos.​order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/order-details#order-details-action-modal-)
* [pos.​order-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/order-details#order-details-targets)
* [pos.​product-details.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details#product-details-action-menu-item-)
* [pos.​product-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details#product-details-action-modal-)
* [pos.​product-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details#product-details-targets)
* [pos.​purchase.​post.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-purchase#post-purchase-action-menu-item-)
* [pos.​purchase.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-purchase#post-purchase-action-modal-)
* [pos.​purchase.​post.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-purchase#post-purchase-targets)
* [pos.​register-details.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/register-details#register-details-targets)
* [pos.​register-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/register-details#register-details-action-modal-)
* [pos.​register-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/register-details#register-details-block-)
* [pos.​return.​post.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-return#post-return-action-menu-item-)
* [pos.​return.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-return#post-return-action-modal-)
* [pos.​return.​post.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-return#post-return-targets)

#### Properties

The [`shopify` global object](https://shopify.dev/docs/api/pos-ui-extensions/2026-04#target-apis-define-what-your-extension-does) provides access to the current connectivity state. Access the following properties on `shopify` to monitor network connectivity and respond to connectivity changes.

* **current**

  **ReadonlySignalLike\<ConnectivityState>**

  **required**

  Provides read-only access to the current connectivity state and allows subscribing to connectivity changes. Use for implementing connectivity-aware functionality and reactive connectivity handling.

#### ReadonlySignalLike

Represents a reactive signal interface that provides both immediate value access and subscription-based updates. Enables real-time synchronization with changing data through the observer pattern.

* subscribe

  Subscribes to value changes and calls the provided function whenever the value updates. Returns an unsubscribe function to clean up the subscription. Use to automatically react to changes in the signal's value.

  ```ts
  (fn: (value: T) => void) => () => void
  ```

* value

  The current value of the signal. This property provides immediate access to the current value without requiring subscription setup. Use for one-time value checks or initial setup.

  ```ts
  T
  ```

#### ConnectivityState

Represents the current Internet connectivity status of the device. Indicates whether the device is connected or disconnected from the Internet.

* internetConnected

  The Internet connection status of the POS device.

  ```ts
  ConnectivityStateSeverity
  ```

#### ConnectivityStateSeverity

```ts
'Connected' | 'Disconnected'
```

Examples

#### Examples

* ####

  ##### Description

  Subscribe to connectivity changes to monitor network status in real time. This example demonstrates using \`shopify.connectivity.subscribe()\` and \`shopify.connectivity.connected\` to detect when the device goes online or offline. This enables adaptive behavior for offline-capable features or network-dependent operations.

  ##### jsx

  ```tsx
  import {render} from 'preact';
  import {useState, useEffect} from 'preact/hooks';
  // Allows the use of `shopify.connectivity.current.value` as a stateful subscription.
  import '@shopify/ui-extensions/preact';

  export default async () => {
    render(<Extension />, document.body);
  };

  const Extension = () => {
    const [isConnected, setIsConnected] = useState(
      shopify.connectivity.current.value.internetConnected === 'Connected'
    );

    useEffect(() => {
      const unsubscribe = shopify.connectivity.current.subscribe((newConnectivity) => {
        setIsConnected(newConnectivity.internetConnected === 'Connected');
      });
      return unsubscribe;
    }, []);

    return (
      <s-tile
        heading="My App"
        disabled={!isConnected}
      />
    );
  };
  ```

***

### Best practices

* **Handle connectivity changes gracefully:** Use the `subscribe` method to automatically adapt your extension behavior when connectivity changes.
* **Design for connectivity awareness:** Design your extension to handle network interruptions, informing users when network-dependent features are unavailable and providing clear guidance on next steps.
* **Provide clear connectivity feedback:** Display connectivity status to users when it affects functionality, helping them understand why certain features may be limited or unavailable.
* **Queue operations during outages:** Implement queuing mechanisms for non-critical operations that can be deferred until connectivity is restored.

***

### Limitations

Connectivity status reflects Internet connectivity only and may not indicate the quality or speed of the connection, which could affect API performance.

***

---



<a id="latest-target-apis-platform-apis-device-api"></a>


## Device API

The Device API provides access to device information and capabilities, allowing you to retrieve device details, check device types, and adapt your extension behavior based on the POS hardware characteristics. The API enables device-aware functionality and responsive design based on device form factors.

#### Use cases

* **Responsive design:** Adapt interface layouts based on device form factor (tablet compared to phone).
* **Device info:** Display device-specific information for troubleshooting or support.
* **Device-aware features:** Implement functionality like optimized touch targets for different screen sizes.
* **Usage analytics:** Track device usage patterns for analytics or feature optimization.

#### Support Targets (28)

#### Supported targets

* [pos.​cart.​line-item-details.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/cart-details#cart-details-targets)
* [pos.​cart.​line-item-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/cart-details#cart-details-action-modal-)
* [pos.​customer-details.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/customer-details#customer-details-action-menu-item-)
* [pos.​customer-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/customer-details#customer-details-action-modal-)
* [pos.​customer-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/customer-details#customer-details-targets)
* [pos.​draft-order-details.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/draft-order-details#draft-order-details-action-menu-item-)
* [pos.​draft-order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/draft-order-details#draft-order-details-action-modal-)
* [pos.​draft-order-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/draft-order-details#draft-order-details-targets)
* [pos.​exchange.​post.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-exchange#post-exchange-action-menu-item-)
* [pos.​exchange.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-exchange#post-exchange-action-modal-)
* [pos.​exchange.​post.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-exchange#post-exchange-targets)
* [pos.​home.​modal.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/home-screen#home-screen-action-modal-)
* [pos.​home.​tile.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/home-screen#home-screen-targets)
* [pos.​order-details.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/order-details#order-details-action-menu-item-)
* [pos.​order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/order-details#order-details-action-modal-)
* [pos.​order-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/order-details#order-details-targets)
* [pos.​product-details.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details#product-details-action-menu-item-)
* [pos.​product-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details#product-details-action-modal-)
* [pos.​product-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details#product-details-targets)
* [pos.​purchase.​post.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-purchase#post-purchase-action-menu-item-)
* [pos.​purchase.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-purchase#post-purchase-action-modal-)
* [pos.​purchase.​post.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-purchase#post-purchase-targets)
* [pos.​register-details.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/register-details#register-details-targets)
* [pos.​register-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/register-details#register-details-action-modal-)
* [pos.​register-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/register-details#register-details-block-)
* [pos.​return.​post.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-return#post-return-action-menu-item-)
* [pos.​return.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-return#post-return-action-modal-)
* [pos.​return.​post.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-return#post-return-targets)

#### Properties

The [`shopify` global object](https://shopify.dev/docs/api/pos-ui-extensions/2026-04#target-apis-define-what-your-extension-does) provides device details and capabilities. Access the following properties on `shopify` to get device information, check form factors, and manage device registration.

* **getDeviceId**

  **() => Promise\<string>**

  **required**

  Retrieves the unique string identifier for the device. Returns a promise that resolves to the device ID. Use for device-specific data storage, analytics tracking, or implementing device-based permissions and configurations. Note: While Shopify POS attempts to maintain a stable identifier, it is not guaranteed to be permanent and may change.

* **isTablet**

  **() => Promise\<boolean>**

  **required**

  Determines whether the device is a tablet form factor. Returns a promise that resolves to `true` for tablets, `false` for other device types. Use for implementing responsive design, optimizing touch targets, or providing device-appropriate user experiences.

* **name**

  **string**

  **required**

  The name of the device as configured by the merchant or system. Use for displaying device information in interfaces, logging, or support contexts where device identification is helpful.

* **registerName**

  **string**

  **required**

  A short, unique identifier for the device, assigned by Shopify.

Examples

#### Examples

* ####

  ##### Description

  Check if the POS device is running on tablet hardware to adapt your UI accordingly. This example shows how to use \`shopify.device.isTablet()\` to determine the device form factor. This enables responsive layouts and touch-optimized interfaces for tablet devices versus traditional POS terminals.

  ##### jsx

  ```tsx
  import {render} from 'preact';
  import {useState} from 'preact/hooks';

  export default async () => {
    render(<Extension />, document.body);
  };

  const Extension = () => {
    const [isTablet, setIsTablet] = useState(false);
    shopify.device.isTablet().then((isTablet) => {
      setIsTablet(isTablet);
    });
    return (
      <s-tile
        heading="My App"
        disabled={!isTablet}
      />
    );
  };
  ```

* ####

  ##### Description

  Access the unique identifier of the current POS device. This example demonstrates using \`shopify.device.id\` to retrieve the device ID. This enables device-specific configurations, analytics tracking, or multi-device coordination features.

  ##### jsx

  ```tsx
  import {render} from 'preact';
  import {useState} from 'preact/hooks';

  export default async () => {
    render(<Extension />, document.body);
  };

  const Extension = () => {
    const [deviceId, setDeviceId] = useState('');
    shopify.device.getDeviceId().then((deviceId) => {
      setDeviceId(deviceId);
    });
    return (
      <s-tile
        heading="My App"
        subheading={deviceId}
      />
    );
  };
  ```

* ####

  ##### Description

  Retrieve the name of the current POS device. This example shows how to use \`shopify.device.name\` to get the device name configured in POS settings. This is useful for device identification, multi-device workflows, or displaying location-specific information.

  ##### jsx

  ```tsx
  import {render} from 'preact';

  export default async () => {
    render(<Extension />, document.body);
  };

  const Extension = () => {
    return (
      <s-tile
        heading="My App"
        subheading={shopify.device.name}
      />
    );
  };
  ```

***

### Best practices

* **Implement responsive design:** Use device type information to adapt your interface layouts, component sizes, and interaction patterns based on the device form factor and capabilities.
* **Handle async device queries:** Handle the Promise-based device methods with async/await or `.then()` patterns, and implement appropriate error handling for device query failures.
* **Cache device information appropriately:** Consider caching device information after the initial query to avoid repeated async calls, but ensure you handle cases where device characteristics might change during the session.
* **Provide device-appropriate experiences:** Design different user experiences for tablets versus other devices, taking advantage of larger screens while ensuring functionality works across all supported device types.

***

---



<a id="latest-target-apis-platform-apis-navigation-api"></a>


## Navigation API

The Navigation API provides web-standard navigation functionality for POS UI extensions, allowing you to navigate between URLs, manage navigation history, and handle navigation events within modal interfaces. The API is available globally as the `navigation` object and follows web platform standards.

#### Use cases

* **Multi-screen workflows:** Implement workflows with URL-based navigation and browser history support.
* **Wizard interfaces:** Build wizard-style interfaces allowing forward and backward navigation.
* **Deep linking:** Create deep-linkable modal states that can be bookmarked or shared.
* **Navigation events:** Handle navigation events to save progress or trigger cleanup.

#### Properties

The `navigation` object provides navigation controls for extension modals. Access the following properties on `navigation` to navigate between screens, manage navigation history, and handle navigation events.

* **addEventListener**

  **(type: "currententrychange", cb: (event: NavigationCurrentEntryChangeEvent) => void) => void**

  **required**

  Registers an event listener for navigation events. The `currententrychange` event fires when the `currentEntry` property changes, such as when the user navigates to a different screen within the extension modal. Use to track navigation changes, update UI state based on the current location, or implement analytics for navigation patterns.

* **back**

  **() => void**

  **required**

  Navigates to the previous entry in the history list. Use for implementing back buttons, breadcrumb navigation, or allowing users to return to previous screens in multi-step workflows.

* **currentEntry**

  **NavigationHistoryEntry**

  **required**

  Returns a `NavigationHistoryEntry` object representing the location the user is currently navigated to. Use to access current URL, navigation state, or implement navigation-aware functionality based on the current location.

* **navigate**

  **(url: string, options?: NavigationNavigateOptions) => Promise\<void>**

  **required**

  Navigates to a specific URL, updating any provided state in the history entries list. Returns a promise that resolves when navigation is complete. Use for programmatic navigation between screens, implementing custom navigation controls, or deep-linking to specific modal states.

* **removeEventListener**

  **(type: "currententrychange", cb: (event: NavigationCurrentEntryChangeEvent) => void) => void**

  **required**

  Removes a previously registered event listener. The callback reference must match the one passed to `addEventListener`. Use to clean up event listeners when they are no longer needed, such as when a component unmounts or navigation tracking should be disabled.

#### NavigationCurrentEntryChangeEvent

The event object for the \`currententrychange\` event, which fires when \`Navigation.currentEntry\` has changed due to navigation within the extension modal. Use to access information about the previous navigation entry when responding to navigation changes.

* from

  The \`NavigationHistoryEntry\` that was navigated away from. Use to access the previous URL, key, or state when tracking navigation transitions or implementing breadcrumb-style navigation.

  ```ts
  NavigationHistoryEntry
  ```

#### NavigationHistoryEntry

Represents a single entry in the navigation history stack. Contains the URL and unique identifier for tracking navigation state and implementing history-based navigation.

* getState

  Returns a clone of the available state associated with this history entry. Use to retrieve navigation state data that was passed during navigation or to implement state-based navigation logic.

  ```ts
  () => unknown
  ```

* key

  A unique, UA-generated value that represents the history entry's slot in the entries list rather than the entry itself. Use for tracking navigation history or implementing navigation-based logic.

  ```ts
  string
  ```

* url

  The URL of this history entry. Returns \`null\` if no URL is associated with the entry. Use for URL-based navigation logic, deep-linking, or displaying current location information.

  ```ts
  string | null
  ```

#### NavigationNavigateOptions

Specifies configuration options for navigation operations. Allows passing state data that persists across navigation transitions.

* state

  Developer-defined information to be stored in the associated \`NavigationHistoryEntry\` once the navigation is complete, retrievable using \`getState()\`. Use to pass data between navigation states or implement stateful navigation workflows.

  ```ts
  unknown
  ```

#### Window

The global `window` object provides control over the extension modal lifecycle. Access these properties and methods directly through the global `window` object to manage the modal interface programmatically.

* **close**

  **{ (): void; (): void; }**

  **required**

  Closes the extension screen and dismisses the modal interface. Use to programmatically close the modal after completing a workflow, canceling an operation, or when user action is no longer required. This provides the same behavior as the user dismissing the modal through the UI.

Examples

#### Examples

* ####

  ##### Description

  Create multi-screen workflows within your extension using web-standard navigation. This example demonstrates using \`navigation.navigate()\` to move between different screens in your modal interface. This enables complex multi-step processes with proper navigation history management.

  ##### jsx

  ```tsx
  import { render } from "preact";

  export default async () => {
    render(<Extension />, document.body);
  };

  const Extension = () => {
    const url = navigation.currentEntry.url;

    if (url?.includes("ScreenTwo")) {
      return (
        <s-page heading="Screen Two Title">
          <s-scroll-box>
            <s-button onClick={() => navigation.navigate("ScreenOne")}>
              Navigate to Screen One
            </s-button>
            <s-button onClick={() => navigation.back()}>Go back</s-button>
          </s-scroll-box>
        </s-page>
      );
    }

    return (
      <s-page heading="Screen One Title">
        <s-scroll-box>
          <s-button onClick={() => navigation.navigate("ScreenTwo")}>
            Navigate to Screen Two
          </s-button>
          <s-button onClick={() => navigation.back()}>Go back</s-button>
        </s-scroll-box>
      </s-page>
    );
  };
  ```

* ####

  ##### Description

  Navigate to native POS screens from your extension using deep link URIs. This example shows how to use \`navigation.navigate()\` with POS screen URIs to transition to core POS functionality like cart, product details, or order screens. This enables direct transitions between your extension and native POS features.

  ##### jsx

  ```tsx
  import {render} from 'preact';

  export default async () => {
    render(<Extension />, document.body);
  };

  function Extension() {
    /**
     * Available POS native screen uris:
     * - `shopify:point-of-sale/products/123` to present product details.
     * - `shopify:point-of-sale/products/123/variants/456` to present product variant details.
     * - `shopify:point-of-sale/customers/123` to present customer details.
     * - `shopify:point-of-sale/orders/123` to present order details.
     * - `shopify:point-of-sale/draft_orders/123` to present draft order details.
     * - `shopify:point-of-sale/staff/123` to present staff details.
     */
    return (
      <s-page heading="POS native screen navigation">
        <s-scroll-box>
          <s-button
            onClick={() => {
              // Use the navigate API to open a POS native resource details screen.
              // A permissions dialog will block navigation if they do not have the staff permissions to view the screen.
              navigation.navigate('shopify:point-of-sale/orders/123');
            }}
          >
            View order
          </s-button>
        </s-scroll-box>
      </s-page>
    );
  }
  ```

* ####

  ##### Description

  Share data between screens using navigation state parameters. This example demonstrates using the \`state\` option in \`navigation.navigate()\` to pass data when navigating. This enables screens to receive context and maintain workflow continuity across navigation transitions.

  ##### jsx

  ```tsx
  import { render } from "preact";

  export default async () => {
    render(<Extension />, document.body);
  };

  const Extension = () => {
    const url = navigation.currentEntry.url;
    
    /** @type {{ firstParam?: string; secondParam?: string }} */
    const state = navigation.currentEntry.getState();

    if (url?.includes("ScreenTwo")) {
      return (
        <s-page heading="Screen Two Title">
          <s-scroll-box>
            <s-text>First Param: {state.firstParam}</s-text>
            <s-text>Second Param: {state.secondParam}</s-text>
          </s-scroll-box>
        </s-page>
      );
    }

    return (
      <s-page heading="Screen One Title">
        <s-scroll-box>
          <s-button onClick={() => navigation.navigate("ScreenTwo", { state: { firstParam: "test", secondParam: "test2" } })}>
            Navigate to Screen Two
          </s-button>
          <s-button onClick={() => navigation.back()}>Go back</s-button>
        </s-scroll-box>
      </s-page>
    );
  };
  ```

***

### Best practices

* **Use URL-based navigation:** Implement URL-based navigation patterns that allow for deep-linking, bookmarking, and intuitive browser-like navigation within your modal workflows.
* **Manage navigation state effectively:** Use the `state` parameter in navigation options to pass data between screens, maintaining workflow context and user progress across navigation changes.

***

### Limitations

* The Navigation API is only available in action (modal) targets and can't be used in action (menu item), block, or tile targets that don't support multi-screen navigation.
* Navigation state is limited to serializable data and can't contain functions, complex objects, or circular references.

***

---



<a id="latest-target-apis-platform-apis-pinpad-api"></a>


## PinPad API

The PinPad API provides secure PIN entry functionality for POS UI extensions, allowing you to display modal PIN pad interfaces for secure PIN collection, validation, and processing with customizable options and callback handling. The API enables secure authentication workflows within your extensions.

#### Use cases

* **Staff authentication:** Implement secure authentication requiring PIN verification from staff.
* **Access control:** Create access control for sensitive operations like refunds or voids.
* **Authorization:** Build security features requiring PIN-based authorization for critical actions.
* **Secure entry:** Create secure data entry workflows requiring PIN confirmation.

#### Support Targets (28)

#### Supported targets

* [pos.​cart.​line-item-details.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/cart-details#cart-details-targets)
* [pos.​cart.​line-item-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/cart-details#cart-details-action-modal-)
* [pos.​customer-details.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/customer-details#customer-details-action-menu-item-)
* [pos.​customer-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/customer-details#customer-details-action-modal-)
* [pos.​customer-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/customer-details#customer-details-targets)
* [pos.​draft-order-details.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/draft-order-details#draft-order-details-action-menu-item-)
* [pos.​draft-order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/draft-order-details#draft-order-details-action-modal-)
* [pos.​draft-order-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/draft-order-details#draft-order-details-targets)
* [pos.​exchange.​post.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-exchange#post-exchange-action-menu-item-)
* [pos.​exchange.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-exchange#post-exchange-action-modal-)
* [pos.​exchange.​post.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-exchange#post-exchange-targets)
* [pos.​home.​modal.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/home-screen#home-screen-action-modal-)
* [pos.​home.​tile.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/home-screen#home-screen-targets)
* [pos.​order-details.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/order-details#order-details-action-menu-item-)
* [pos.​order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/order-details#order-details-action-modal-)
* [pos.​order-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/order-details#order-details-targets)
* [pos.​product-details.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details#product-details-action-menu-item-)
* [pos.​product-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details#product-details-action-modal-)
* [pos.​product-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details#product-details-targets)
* [pos.​purchase.​post.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-purchase#post-purchase-action-menu-item-)
* [pos.​purchase.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-purchase#post-purchase-action-modal-)
* [pos.​purchase.​post.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-purchase#post-purchase-targets)
* [pos.​register-details.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/register-details#register-details-targets)
* [pos.​register-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/register-details#register-details-action-modal-)
* [pos.​register-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/register-details#register-details-block-)
* [pos.​return.​post.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-return#post-return-action-menu-item-)
* [pos.​return.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-return#post-return-action-modal-)
* [pos.​return.​post.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-return#post-return-targets)

#### Properties

The [`shopify` global object](https://shopify.dev/docs/api/pos-ui-extensions/2026-04#target-apis-define-what-your-extension-does) provides secure PIN entry functionality. Access the following properties on `shopify` to display PIN pad interfaces for authentication and secure input.

* **showPinPad**

  **(onSubmit: (pin: number\[]) => PinValidationResult | Promise\<PinValidationResult>, options?: PinPadOptions) => void**

  **required**

  Shows a PIN pad to the user in a modal dialog. The `onSubmit` function is called when the PIN is submitted and should validate the PIN, returning `'accept'` or `'reject'`.

  • **When accepted**: The modal dismisses and triggers the `onDismissed` callback—perform any post-validation navigation in this callback rather than in `onSubmit`.

  • **When rejected**: Displays the optional `errorMessage` and keeps the modal open.

  Use for implementing secure authentication workflows, access control, or PIN-based verification systems.

#### PinValidationResult

Represents the validation outcome for an entered PIN. Indicates whether the PIN should be accepted or rejected, with optional error messaging for rejected PINs.

```ts
{result: 'accept'} | {result: 'reject'; errorMessage?: string}
```

#### PinPadOptions

Specifies configuration options for displaying the PIN pad interface. Includes callback functions for PIN entry events, dismissal handling, and customizable labels and messaging.

* autoSubmit

  Whether the pin should be automatically submitted when the user has entered the maximum PIN length. Use for PIN entry experiences where users don't need to manually submit after entering the required digits.

  ```ts
  boolean
  ```

* label

  The content for the prompt on the pin pad. Use to provide clear instructions or context about what the PIN is being used for.

  ```ts
  string
  ```

* masked

  Whether the entered PIN should be masked for security. When \`true\`, PIN digits are hidden from view. Use for secure PIN entry where visual privacy is important.

  ```ts
  boolean
  ```

* maxPinLength

  The maximum length of the PIN (4-10 digits). Use to limit PIN length based on your security policies or authentication system constraints.

  ```ts
  PinLength
  ```

* minPinLength

  The minimum length of the PIN (4-10 digits). Use to enforce PIN length requirements based on your security policies or authentication system requirements.

  ```ts
  PinLength
  ```

* onDismissed

  The function to be called when the pin pad modal is dismissed. Receives a \`PinPadResult\` indicating whether PIN entry was completed and the entered PIN if available. Use for handling modal dismissal and processing final PIN results.

  ```ts
  (result: PinPadResult) => void
  ```

* onPinEntry

  The function to be called when a pin is entered. Use for real-time PIN validation, progress feedback, or implementing custom PIN entry handling logic.

  ```ts
  (pin: number[]) => void
  ```

* pinPadAction

  The call to action between the entry view and the keypad, consisting of a label and function that returns the pin. Use for custom PIN entry workflows or implementing specific authentication patterns.

  ```ts
  PinPadActionType
  ```

* title

  The title shown in the modal header. Use to provide context about the PIN entry purpose or identify the specific authentication requirement.

  ```ts
  string
  ```

#### PinLength

The valid PIN length values (4-10 digits). Commonly used to configure minimum and maximum PIN length requirements.

```ts
4 | 5 | 6 | 7 | 8 | 9 | 10
```

#### PinPadResult

Represents the result of a PIN pad interaction, indicating whether PIN entry was completed and providing the entered PIN if available.

* completed

  Whether the PIN entry was completed successfully. When \`true\`, the user entered a PIN and submitted it (or it was auto-submitted). When \`false\`, the user canceled the PIN pad modal without completing entry, typically by clicking a cancel button or dismissing the modal.

  ```ts
  boolean
  ```

* pin

  The entered PIN as an array of individual digits (for example, \`\[1, 2, 3, 4]\` for PIN "1234"). Each element is a number from 0-9. This array's length will be between \`minPinLength\` and \`maxPinLength\` inclusive. Only present when \`completed\` is \`true\`—when \`completed\` is \`false\`, this field is \`undefined\` since no PIN was entered.

  ```ts
  number[]
  ```

#### PinPadActionType

Defines a custom action button for the PIN pad interface with a label and click handler.

* label

  The content for the prompt on the pin pad. Use to provide clear instructions or context about what the PIN is being used for.

  ```ts
  string
  ```

* onClick

  Called when the action button is clicked. Can return the PIN digits directly as an array of numbers, or return a Promise that resolves to the PIN array. Use for implementing custom PIN retrieval logic or validation workflows.

  ```ts
  () => number[] | Promise<number[]>
  ```

Examples

#### Examples

* ####

  ##### Description

  Present a secure PIN pad interface to collect and validate user PINs for authentication or verification. This example shows how to use \`shopify.pinPad.show()\` to display a PIN entry modal with customizable options. By handling the entered PIN securely and processing the result, you can implement secure authentication workflows.

  ##### jsx

  ```tsx
  import { PinPadOptions } from '@shopify/ui-extensions/point-of-sale';
  import { render } from 'preact';

  export default async () => {
    render(<Extension />, document.body);
  };

  function Extension() {
    const VALID_PIN = '123456';

    const options: PinPadOptions = {
      label: 'Enter PIN to proceed',
      title: 'PIN Pad Demo',
      masked: true,
      minPinLength: 6,
      maxPinLength: 8,
    };

    const onShowTapped = () => {
      shopify.pinPad.showPinPad((pin) => {
        if (pin.join('') === VALID_PIN) {
          console.log('PIN is valid');
          return { result: 'accept' };
        } else {
          console.log('PIN is invalid');
          return {
            result: 'reject',
            errorMessage: 'Invalid PIN, please try again',
          };
        }
      }, options);
    };

    return (
      <s-page heading="PIN Pad API">
        <s-button onClick={onShowTapped}>Show Pin Pad</s-button>
      </s-page>
    );
  }
  ```

***

### Best practices

* **Implement secure PIN validation:** Validate PINs securely on your backend service rather than in client-side code, using the `onSubmit` callback to communicate with your secure validation endpoint.
* **Provide clear user feedback:** Use appropriate labels, titles, and error messages to guide users through the PIN entry process.
* **Handle PIN entry appropriately:** Implement proper error handling for PIN validation failures, provide retry mechanisms, and ensure sensitive PIN data is handled securely throughout the process.
* **Configure appropriate PIN constraints:** Set reasonable PIN length requirements and masking options based on your security requirements and user experience considerations.

***

### Limitations

PIN validation must be handled through the `onSubmit` callback and should be performed securely on your backend service rather than in client-side extension code.

***

---



<a id="latest-target-apis-platform-apis-print-api"></a>


## Print API

The Print API enables document printing functionality in your POS UI extension. Use this API to trigger the native print dialog for your documents.

Supported document types:

* **HTML documents** (`.html`, `.htm`) - Best printing experience with full CSS styling, embedded images, and complex layouts. Use for receipts, invoices, and formatted reports.

* **Text files** (`.txt`, `.csv`) - Plain text with basic content and tabular data support. Use for simple receipts and data exports.

* **Image files** (`.png`, `.jpg`, `.jpeg`, `.gif`, `.bmp`, `.webp`) - Common web formats with format-specific optimizations. Use for logos, charts, QR codes, and barcodes.

* **PDF files** (`.pdf`) - Behavior varies by platform: prints directly on iOS/desktop, but downloads to external viewer on Android. Use for complex documents and compliance requirements.

#### Use cases

* **Custom receipts:** Print custom receipts or invoices with branded formatting.
* **Labels:** Generate and print shipping labels, return labels, or inventory documents.
* **Reports:** Create printed reports for sales analytics, inventory counts, or summaries.
* **Customer communications:** Print loyalty program info, promotional materials, or instructions.

#### Support Targets (28)

#### Supported targets

* [pos.​cart.​line-item-details.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/cart-details#cart-details-targets)
* [pos.​cart.​line-item-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/cart-details#cart-details-action-modal-)
* [pos.​customer-details.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/customer-details#customer-details-action-menu-item-)
* [pos.​customer-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/customer-details#customer-details-action-modal-)
* [pos.​customer-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/customer-details#customer-details-targets)
* [pos.​draft-order-details.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/draft-order-details#draft-order-details-action-menu-item-)
* [pos.​draft-order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/draft-order-details#draft-order-details-action-modal-)
* [pos.​draft-order-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/draft-order-details#draft-order-details-targets)
* [pos.​exchange.​post.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-exchange#post-exchange-action-menu-item-)
* [pos.​exchange.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-exchange#post-exchange-action-modal-)
* [pos.​exchange.​post.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-exchange#post-exchange-targets)
* [pos.​home.​modal.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/home-screen#home-screen-action-modal-)
* [pos.​home.​tile.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/home-screen#home-screen-targets)
* [pos.​order-details.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/order-details#order-details-action-menu-item-)
* [pos.​order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/order-details#order-details-action-modal-)
* [pos.​order-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/order-details#order-details-targets)
* [pos.​product-details.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details#product-details-action-menu-item-)
* [pos.​product-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details#product-details-action-modal-)
* [pos.​product-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details#product-details-targets)
* [pos.​purchase.​post.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-purchase#post-purchase-action-menu-item-)
* [pos.​purchase.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-purchase#post-purchase-action-modal-)
* [pos.​purchase.​post.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-purchase#post-purchase-targets)
* [pos.​register-details.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/register-details#register-details-targets)
* [pos.​register-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/register-details#register-details-action-modal-)
* [pos.​register-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/register-details#register-details-block-)
* [pos.​return.​post.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-return#post-return-action-menu-item-)
* [pos.​return.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-return#post-return-action-modal-)
* [pos.​return.​post.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-return#post-return-targets)

#### Properties

The [`shopify` global object](https://shopify.dev/docs/api/pos-ui-extensions/2026-04#target-apis-define-what-your-extension-does) provides methods for triggering document printing. Access the following properties on `shopify` to initiate print operations with HTML, text, image, and PDF document types.

* **print**

  **(src: string) => Promise\<void>**

  **required**

  Triggers a print dialog for the specified document source. The `print()` method accepts either:

  • A relative path that will be appended to your app's [`application_url`](https://shopify.dev/docs/apps/build/cli-for-apps/app-configuration)

  • A full URL to your app's backend that will be used to return the document to print

  Returns a promise that resolves when content is ready and the native print dialog appears. Use for printing custom documents, receipts, labels, or reports.

Examples

#### Examples

* ####

  ##### Description

  Trigger the native print dialog from a smart grid tile action. This example shows how to use \`shopify.print()\` to print a document specified by a relative path. This allows quick printing of receipts, labels, or reports directly from the POS home screen.

  ##### jsx

  ```tsx
  import {render} from 'preact';

  export default async () => {
    render(<Extension />, document.body);
  };

  const Extension = () => {
    return (
      <s-tile
        heading="My app"
        subheading="Hello world!"
        onClick={() => {
          shopify.print.print('documents/test-print');
        }}
      />
    );
  };
  ```

* ####

  ##### Description

  Print documents hosted on external servers using full URLs. This example shows how to use \`shopify.print()\` with a complete URL to print remotely hosted documents. This enables dynamic content generation or printing from external services.

  ##### jsx

  ```tsx
  import {render} from 'preact';

  export default async () => {
    render(<Extension />, document.body);
  };

  const Extension = () => {
    return (
      <s-tile
        heading="My App"
        subheading="Print with full URL"
        onClick={async () => {
          // Using a full URL directly
          await shopify.print.print('https://my-print-service.com/api/print/document');
        }}
      />
    );
  };
  ```

* ####

  ##### Description

  Print documents using relative paths within your extension bundle. This example demonstrates using \`shopify.print()\` with a relative path to reference HTML, text, image, or PDF files included in your extension. This makes it easy to print pre-defined templates or documents.

  ##### jsx

  ```tsx
  import {render} from 'preact';

  export default async () => {
    render(<Extension />, document.body);
  };

  const Extension = () => {
    return (
      <s-tile
        heading="My App"
        subheading="Print with relative path"
        onClick={async () => {
          // If your application_url is "https://my-app.com"
          // This will resolve to "https://my-app.com/api/print/document"
          await shopify.print.print('/api/print/document');
        }}
      />
    );
  };
  ```

***

### Best practices

* **Use appropriate document formats:** Choose HTML for rich formatting and responsive design, text for simple content, images for graphics, and PDFs for complex documents while considering platform limitations.
* **Handle printing errors gracefully:** Implement proper error handling for print operations, including network failures, unsupported document types, or printer connectivity issues.
* **Optimize documents for printing:** Design your printable documents with appropriate sizing, margins, and formatting that work well with printers and standard paper sizes.
* **Provide user feedback:** Give users clear feedback about print operations, including loading states, success confirmations, and error messages when printing fails.

***

### Limitations

PDF printing on Android devices requires downloading the file and using an external application, which may interrupt the user workflow.

***

---



<a id="latest-target-apis-platform-apis-scanner-api"></a>


## Scanner API

The Scanner API provides barcode and QR code scanning on POS devices. Use it to show the camera scanner, subscribe to scan events, or detect available scanner hardware (camera, external, or embedded).

#### Use cases

* **Barcode scanning:** Implement barcode scanning for product lookup or inventory management.
* **QR codes:** Build QR code scanning for customer engagement or loyalty programs.
* **Custom workflows:** Create scanning workflows that process data and trigger business logic.
* **Real-time feedback:** Implement real-time scanning feedback with immediate processing.

#### Support Targets (10)

#### Supported targets

* [pos.​cart.​line-item-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/cart-details#cart-details-action-modal-)
* [pos.​customer-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/customer-details#customer-details-action-modal-)
* [pos.​draft-order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/draft-order-details#draft-order-details-action-modal-)
* [pos.​exchange.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-exchange#post-exchange-action-modal-)
* [pos.​home.​modal.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/home-screen#home-screen-action-modal-)
* [pos.​order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/order-details#order-details-action-modal-)
* [pos.​product-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details#product-details-action-modal-)
* [pos.​purchase.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-purchase#post-purchase-action-modal-)
* [pos.​register-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/register-details#register-details-action-modal-)
* [pos.​return.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-return#post-return-action-modal-)

#### Properties

The [`shopify` global object](https://shopify.dev/docs/api/pos-ui-extensions/2026-04#target-apis-define-what-your-extension-does) provides barcode and QR code scanning capabilities. Access the following properties on `shopify` to read scan data, control the camera scanner, and detect available scanner hardware.

* **hideCameraScanner**

  **() => void**

  **required**

  Hide the camera scanner.

* **scannerData**

  **ScannerData**

  **required**

  Access current scan data and subscribe to new scan events. Use to receive real-time scan results.

* **showCameraScanner**

  **() => void**

  **required**

  Show the camera scanner.

* **sources**

  **ScannerSources**

  **required**

  Access available scanner sources on the device. Use to check which scanners are available (camera, external, or embedded).

#### ScannerData

Represents the scanner interface for accessing scan events and subscription management. Provides real-time access to scanned data through a reactive signal pattern.

* current

  Current available scanner sources with subscription support. The \`value\` property provides current sources, and \`subscribe\` listens for changes. Use to monitor which scanners are available.

  ```ts
  ReadonlySignalLike<ScannerSubscriptionResult>
  ```

#### ReadonlySignalLike

Represents a reactive signal interface that provides both immediate value access and subscription-based updates. Enables real-time synchronization with changing data through the observer pattern.

* subscribe

  Subscribes to value changes and calls the provided function whenever the value updates. Returns an unsubscribe function to clean up the subscription. Use to automatically react to changes in the signal's value.

  ```ts
  (fn: (value: T) => void) => () => void
  ```

* value

  The current value of the signal. This property provides immediate access to the current value without requiring subscription setup. Use for one-time value checks or initial setup.

  ```ts
  T
  ```

#### ScannerSubscriptionResult

Represents the data from a scanner event. Contains the scanned string data and the hardware source that captured the scan.

* data

  The string data from the last scanner event received. Contains the scanned barcode, QR code, or other scannable data. Returns \`undefined\` when no scan data is available. Use to process scanned content and implement scan-based business logic.

  ```ts
  string
  ```

* source

  The scanning source from which the scan event came. Returns one of the following scanner types: • \`'camera'\` - Built-in device camera used for scanning • \`'external'\` - External scanner hardware connected to the device • \`'embedded'\` - Embedded scanner hardware built into the device

  ```ts
  ScannerSource
  ```

#### ScannerSource

The scanner source the POS device supports.

```ts
'camera' | 'external' | 'embedded'
```

#### ScannerSources

Represents the available scanner hardware sources on the device. Provides reactive access to the list of scanners that can be used for scanning operations.

* current

  Current available scanner sources with subscription support. The \`value\` property provides current sources, and \`subscribe\` listens for changes. Use to monitor which scanners are available.

  ```ts
  ReadonlySignalLike<ScannerSource[]>
  ```

Examples

#### Examples

* ####

  ##### Description

  Build a scan-and-verify workflow. Open the camera on mount, send scanned data to a backend for validation, and show loading, success, or error states. Hide the camera during verification and restore it when the user taps \*\*Scan next\*\*.

  ##### jsx

  ```tsx
  import {render} from 'preact';
  import {useState, useEffect, useRef} from 'preact/hooks';

  export default async () => {
    render(<Extension />, document.body);
  };

  const Extension = () => {
    const [state, setState] = useState('scanning'); // scanning | loading | success | error
    const [errorMessage, setErrorMessage] = useState('');
    const lastScannedRef = useRef('');

    useEffect(() => {
      shopify.scanner.showCameraScanner();

      const unsubscribe = shopify.scanner.scannerData.current.subscribe(
        async (scan) => {
          if (!scan.data || scan.data === lastScannedRef.current) {
            return;
          }

          lastScannedRef.current = scan.data;
          setState('loading');
          shopify.scanner.hideCameraScanner();

          try {
            // Replace with your actual backend verification call
            // const response = await fetch(`/api/verify?code=${scan.data}`);
            // const data = await response.json();
            // const valid = data.valid;
            const valid = true;

            if (valid) {
              setState('success');
              shopify.toast.show('Verified');
            } else {
              setErrorMessage('Code is not valid');
              setState('error');
            }
          } catch {
            setErrorMessage('Network error. Try again.');
            setState('error');
          }
        },
      );

      return () => {
        unsubscribe();
        shopify.scanner.hideCameraScanner();
      };
    }, []);

    const resetScanner = () => {
      lastScannedRef.current = '';
      setErrorMessage('');
      setState('scanning');
      shopify.scanner.showCameraScanner();
    };

    if (state === 'loading') {
      return (
        <s-page heading="Verifying...">
          <s-stack direction="block" block-alignment="center">
            <s-spinner />
          </s-stack>
        </s-page>
      );
    }

    if (state === 'success') {
      return (
        <s-page heading="Verified">
          <s-stack direction="block" gap="small">
            <s-banner heading="Code accepted" tone="success" />
            <s-button onClick={resetScanner}>Scan next</s-button>
          </s-stack>
        </s-page>
      );
    }

    if (state === 'error') {
      return (
        <s-page heading="Error">
          <s-stack direction="block" gap="small">
            <s-banner heading={errorMessage} tone="critical" />
            <s-button onClick={resetScanner}>Try again</s-button>
          </s-stack>
        </s-page>
      );
    }

    // state === 'scanning' — camera overlay is shown by showCameraScanner()
    return <s-page heading="Scan a code" />;
  };
  ```

* ####

  ##### Description

  Subscribe to \`shopify.scanner.sources.current\` to detect which scanner hardware is available (camera, external, or embedded) and to \`shopify.scanner.scannerData.current\` to receive scan results. By identifying the scanner type, you can customize handling based on the scanning method.

  ##### jsx

  ```tsx
  import {render} from 'preact';
  import {useState, useEffect} from 'preact/hooks';

  export default async () => {
    render(<Extension />, document.body);
  };

  const Extension = () => {
    const [scanData, setScanData] = useState('');
    const [scanSource, setScanSource] = useState('');
    const [hasCameraScanner, setHasCameraScanner] = useState(false);
    const [hasExternalScanner, setHasExternalScanner] = useState(false);

    useEffect(() => {
      // This example doesn't call showCameraScanner(). Scan data
      // arrives from external/embedded scanners, or from the camera
      // if opened elsewhere — scannerData is shared globally.
      const unsubscribeData = shopify.scanner.scannerData.current.subscribe((result) => {
        setScanData(result.data || '');
        setScanSource(result.source || '');
      });

      const unsubscribeSources = shopify.scanner.sources.current.subscribe((sources) => {
        setHasCameraScanner(sources.includes('camera'));
        setHasExternalScanner(sources.includes('external'));
      });

      return () => {
        unsubscribeData();
        unsubscribeSources();
      };
    }, []);

    return (
      <s-page heading="Scanner Example">
        <s-stack direction="block">
          <s-text>Scanned data: {scanData}</s-text>
          <s-text>Scanned data source: {scanSource}</s-text>
          {hasCameraScanner && (
            <s-text>Camera scanner is available</s-text>
          )}
          {hasExternalScanner && (
            <s-text>External scanner is available</s-text>
          )}
        </s-stack>
      </s-page>
    );
  };
  ```

***

### Best practices

* **Deduplicate scan events:** The subscription can fire multiple times for the same code, including stale data from a previous scan when re-subscribing after a component remount. Track the last processed value and skip duplicates.
* **Manage camera lifecycle:** Call `hideCameraScanner()` before showing results or a loading state. Call `showCameraScanner()` when the user is ready to scan again.
* **Clean up subscriptions:** Call the unsubscribe function returned by `subscribe()` in your cleanup or unmount handler to prevent memory leaks.
* **Validate scanned data:** Check the format of scanned data before processing. Show clear feedback for invalid codes, network errors, and unsupported formats.

***

### Limitations

* The Scanner API is only available in action (modal) targets.
* `showCameraScanner()` displays a full-screen system camera overlay. It doesn't return a value or promise, so there's no way to detect if the camera activated successfully.
* Calling `scannerData.current.subscribe()` may immediately emit the value from a previous scan because unsubscribing does not clear the signal.

***

---



<a id="latest-target-apis-platform-apis-storage-api"></a>


## Storage API

The Storage API provides persistent local storage for POS UI extensions, allowing you to store, retrieve, and manage extension data that persists across user sessions, device restarts, and extension target state changes. Data is stored locally on the POS device in an isolated namespace specific to your extension.

The API supports key-value storage with automatic JSON serialization, type safety through TypeScript interfaces, and built-in error handling for storage constraint violations.

#### Use cases

* **Data caching:** Cache product information and pricing data to reduce API calls.
* **Preferences:** Store user preferences like theme settings and workflow customizations.
* **Contextual data:** Pass data between tile and action (modal) targets during workflows.
* **Session data:** Maintain temporary session data that survives navigation and cart changes.

#### Support Targets (30)

#### Supported targets

* [pos.​cart.​line-item-details.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/cart-details#cart-details-targets)
* [pos.​cart.​line-item-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/cart-details#cart-details-action-modal-)
* [pos.​customer-details.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/customer-details#customer-details-action-menu-item-)
* [pos.​customer-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/customer-details#customer-details-action-modal-)
* [pos.​customer-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/customer-details#customer-details-targets)
* [pos.​draft-order-details.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/draft-order-details#draft-order-details-action-menu-item-)
* [pos.​draft-order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/draft-order-details#draft-order-details-action-modal-)
* [pos.​draft-order-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/draft-order-details#draft-order-details-targets)
* [pos.​exchange.​post.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-exchange#post-exchange-action-menu-item-)
* [pos.​exchange.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-exchange#post-exchange-action-modal-)
* [pos.​exchange.​post.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-exchange#post-exchange-targets)
* [pos.​home.​modal.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/home-screen#home-screen-action-modal-)
* [pos.​home.​tile.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/home-screen#home-screen-targets)
* [pos.​order-details.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/order-details#order-details-action-menu-item-)
* [pos.​order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/order-details#order-details-action-modal-)
* [pos.​order-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/order-details#order-details-targets)
* [pos.​product-details.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details#product-details-action-menu-item-)
* [pos.​product-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details#product-details-action-modal-)
* [pos.​product-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details#product-details-targets)
* [pos.​purchase.​post.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-purchase#post-purchase-action-menu-item-)
* [pos.​purchase.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-purchase#post-purchase-action-modal-)
* [pos.​purchase.​post.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-purchase#post-purchase-targets)
* [pos.​receipt-footer.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/receipts#receipt-block-footer-)
* [pos.​receipt-header.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/receipts#receipts-targets)
* [pos.​register-details.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/register-details#register-details-targets)
* [pos.​register-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/register-details#register-details-action-modal-)
* [pos.​register-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/register-details#register-details-block-)
* [pos.​return.​post.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-return#post-return-action-menu-item-)
* [pos.​return.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-return#post-return-action-modal-)
* [pos.​return.​post.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-return#post-return-targets)

#### Properties

The [`shopify` global object](https://shopify.dev/docs/api/pos-ui-extensions/2026-04#target-apis-define-what-your-extension-does) provides persistent local storage for extension data. Access the following properties on `shopify` to store, retrieve, and manage key-value data that persists across sessions.

* **clear**

  **() => Promise\<void>**

  **required**

  Clears all data from storage, removing all key-value pairs.

* **delete**

  **\<StorageTypes extends BaseStorageTypes = BaseStorageTypes, Keys extends keyof StorageTypes = keyof StorageTypes>(key: Keys) => Promise\<boolean>**

  **required**

  Deletes a specific key from storage and returns `true` if the key existed, `false` if it didn't exist. Returns `false` for non-existent keys rather than throwing an error. Commonly used for cleaning up temporary workflow data, removing expired cache entries, or handling user preference changes.

* **entries**

  **\<StorageTypes extends BaseStorageTypes = BaseStorageTypes, Keys extends keyof StorageTypes = keyof StorageTypes>() => Promise<\[Keys, StorageTypes\[Keys]]\[]>**

  **required**

  Retrieves all stored key-value pairs as an array of tuples, preserving original data types. Returns all data at once which may impact memory usage with large datasets. Commonly used for debugging storage contents, implementing data export features, or performing bulk operations across stored data.

* **get**

  **\<StorageTypes extends BaseStorageTypes = BaseStorageTypes, Keys extends keyof StorageTypes = keyof StorageTypes>(key: Keys) => Promise\<StorageTypes\[Keys]>**

  **required**

  Retrieves the value associated with a key, returning `undefined` if the key doesn't exist. Always handle the `undefined` case by providing fallback values or conditional logic. Commonly used for loading user preferences, retrieving cached data, or accessing contextual information passed between extension targets.

* **set**

  **\<StorageTypes extends BaseStorageTypes = BaseStorageTypes, Keys extends keyof StorageTypes = keyof StorageTypes>(key: Keys, value: StorageTypes\[Keys]) => Promise\<void>**

  **required**

  Stores a value under the specified key, overwriting any existing value. Values must be JSON-serializable and return `StorageError` when storage limits are exceeded. Commonly used for storing user preferences, caching API responses, or passing contextual data from tiles to modals.

Examples

#### Examples

* ####

  ##### Description

  Remove all stored data for your extension from persistent storage. This example demonstrates using \`shopify.storage.clear()\` to delete all key-value pairs stored by your extension. This is useful for reset functionality or clearing user preferences.

  ##### jsx

  ```tsx
  import {render} from 'preact';
  import {useState, useEffect} from 'preact/hooks';

  export default async () => {
    render(<Extension />, document.body);
  }

  function Extension() {
    const [itemCount, setItemCount] = useState(0);

    useEffect(() => {
      const initializeData = async () => {
        const count = 10;
        for (let i = 0; i < count; i++) {
          await shopify.storage.set(`key-${i}`, `value-${i}`);
        }
        setItemCount(count);
      };

      initializeData();
    }, []);

    return (
      <s-tile
        heading="POS smart grid"
        subheading="preact Extension"
        itemCount={itemCount}
        onClick={async () => {
          await shopify.storage.clear();
          shopify.toast.show('All data cleared');
          setItemCount(0);
        }}
      />
    );
  }
  ```

* ####

  ##### Description

  Delete a specific value from storage using its key. This example shows how to use \`shopify.storage.delete()\` to remove a stored item. This permanently clears the data associated with that key while leaving other stored values intact.

  ##### jsx

  ```tsx
  import {render} from 'preact';

  export default async () => {
    render(<Extension />, document.body);
  }

  function Extension() {
    return (
      <s-tile
        heading="POS smart grid"
        subheading="preact Extension"
        onClick={async () => {
          await shopify.storage.set('key', 'A temporary value');
          const storedData = await shopify.storage.get('key');
          shopify.toast.show(`Current value: ${String(storedData)}`);
          setTimeout(async () => {
            await shopify.storage.delete('key');
            const storedData = (await shopify.storage.get('key')) ?? '';
            shopify.toast.show(`Current value after deletion: ${String(storedData)}`);
          }, 2000);
        }}
      />
    );
  }
  ```

* ####

  ##### Description

  Fetch all key-value pairs stored by your extension. This example shows how to use \`shopify.storage.entries()\` to retrieve an array of all stored items. This is useful for displaying saved data, performing bulk operations, or exporting stored information.

  ##### jsx

  ```tsx
  import {render} from 'preact';

  export default async () => {
    render(<Extension />, document.body);
  }

  function Extension() {
    return (
      <s-tile
        heading="POS smart grid"
        subheading="preact Extension"
        onClick={async () => {
          await shopify.storage.set('attempts', 2);
          await shopify.storage.set('darkMode', true);
          await shopify.storage.set('trackingId', 'd6ead53c-b5f5-0b16-dabb-17081ff238c3');

          const allEntries = await shopify.storage.entries();
          const message = allEntries.length
            ? allEntries.map(([key, value]) => `${key}: ${value}`).join(', ')
            : 'Nothing stored';

          shopify.toast.show(message);
        }}
      />
    );
  }
  ```

* ####

  ##### Description

  Read a stored value using its key from persistent storage. This example shows how to use \`shopify.storage.get()\` to retrieve a previously saved value. This returns the stored data with automatic JSON deserialization or undefined if the key does not exist.

  ##### jsx

  ```tsx
  import {render} from 'preact';

  export default async () => {
    render(<Extension />, document.body);
  }

  function Extension() {
    return (
      <s-tile
        heading="POS smart grid"
        subheading="preact Extension"
        onClick={async () => {
          const storedData = await shopify.storage.get('key');
          shopify.toast.show(String(storedData ?? ''));
        }}
      />
    );
  }
  ```

* ####

  ##### Description

  Store a value in persistent storage using a key-value pair. This example demonstrates using \`shopify.storage.set()\` to save data that persists across user sessions, device restarts, and extension reloads. The value is automatically JSON serialized.

  ##### jsx

  ```tsx
  import {render} from 'preact';

  export default async () => {
    render(<Extension />, document.body);
  }

  function Extension() {
    return (
      <s-tile
        heading="POS smart grid"
        subheading="preact Extension"
        onClick={async () => {
          await Promise.all([
            shopify.storage.set('trackingId', 'd6ead53c-b5f5-0b16-dabb-17081ff238c3'),
            shopify.storage.set('someObject', {
              boolean: true,
              numeric: 2,
              string: 'Hello world!',
            }),
            shopify.storage.set('attempts', 2),
          ]);
          shopify.toast.show('Data stored');
        }}
      />
    );
  }
  ```

***

### Best practices

* **Design consistent key naming:** Use hierarchical names like `settings.user.theme` or `cache.products.${id}` to organize data.
* **Validate retrieved data:** Check structure and types after `get()` since data may be outdated. Provide defaults and handle missing properties.
* **Plan for data evolution:** Include version fields and implement migration logic to handle schema updates between versions.
* **Keep sensitive data out:** Never store passwords, API keys, or sensitive information. Use Session API for secure backend communication.

***

### Limitations

* POS UI extensions can store up to a maximum of 100 entries.
* The maximum key size is \~1 KB and the maximum value size is \~1 MB.
* Data persists even when extension targets are disabled or removed.
* Stored extension data is automatically cleared after 30 days of inactivity. The inactivity timer is reset only by write operations (`set`); read operations (`get`) do not affect the timer.

***

---



<a id="latest-target-apis-standard-apis-action-api"></a>


## Action API

The Action API provides modal presentation functionality for POS UI extensions, allowing you to launch full-screen modal interfaces from menu items, tiles, and block targets. The API enables navigation between different targets within your extension.

#### Use cases

* **Modal launch:** Launch workflows from menu item buttons or tile interfaces.
* **Multi-step processes:** Create processes requiring more screen space than basic components allow.
* **Forms:** Implement modal-based forms, configuration interfaces, or data entry workflows.
* **Wizard interfaces:** Build wizard-style interfaces that guide users through complex operations.

#### Support Targets (19)

#### Supported targets

* [pos.​cart.​line-item-details.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/cart-details#cart-details-targets)
* [pos.​cart.​line-item-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/cart-details#cart-details-action-modal-)
* [pos.​customer-details.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/customer-details#customer-details-action-menu-item-)
* [pos.​customer-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/customer-details#customer-details-targets)
* [pos.​draft-order-details.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/draft-order-details#draft-order-details-action-menu-item-)
* [pos.​draft-order-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/draft-order-details#draft-order-details-targets)
* [pos.​exchange.​post.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-exchange#post-exchange-action-menu-item-)
* [pos.​exchange.​post.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-exchange#post-exchange-targets)
* [pos.​home.​tile.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/home-screen#home-screen-targets)
* [pos.​order-details.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/order-details#order-details-action-menu-item-)
* [pos.​order-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/order-details#order-details-targets)
* [pos.​product-details.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details#product-details-action-menu-item-)
* [pos.​product-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details#product-details-targets)
* [pos.​purchase.​post.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-purchase#post-purchase-action-menu-item-)
* [pos.​purchase.​post.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-purchase#post-purchase-targets)
* [pos.​register-details.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/register-details#register-details-targets)
* [pos.​register-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/register-details#register-details-block-)
* [pos.​return.​post.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-return#post-return-action-menu-item-)
* [pos.​return.​post.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-return#post-return-targets)

#### Properties

The [`shopify` global object](https://shopify.dev/docs/api/pos-ui-extensions/2026-04#target-apis-define-what-your-extension-does) provides modal presentation functionality. Access the following properties on `shopify` to launch full-screen modal interfaces from menu items, tiles, and block targets.

* **presentModal**

  **() => void**

  **required**

  Presents the corresponding action (modal) target on top of the current view as a full-screen modal. For example, calling this method from `pos.purchase.post.action.menu-item.render` presents `pos.purchase.post.action.render`. Use to launch detailed workflows, complex forms, or multi-step processes that require more screen space than simple components provide.

Examples

#### Examples

* ####

  ##### Description

  Present a full-screen modal from menu item actions in detail screens. This example shows how to use \`shopify.action.presentModal()\` to launch a modal workflow from post-purchase, order details, or other action menu item contexts. With this pattern, you can implement complex, multi-step operations.

  ##### jsx

  ```tsx
  import {render} from 'preact';

  export default async () => {
    render(<Extension />, document.body);
  };

  const Extension = () => {
    return (
      <s-button
        onClick={() => {
          shopify.action.presentModal();
        }}
      />
    );
  };
  ```

* ####

  ##### Description

  Present a full-screen modal from smart grid tiles on the POS home screen. This example demonstrates using \`shopify.action.presentModal()\` to launch modal workflows from tile interactions. This pattern is well-suited for high-frequency tasks that require additional UI beyond the tile itself.

  ##### jsx

  ```tsx
  import {render} from 'preact';

  export default async () => {
    render(<Extension />, document.body);
  };

  const Extension = () => {
    return (
      <s-tile
        heading="My App"
        subheading="Present modal from tile"
        onClick={() => {
          shopify.action.presentModal();
        }}
      />
    );
  };
  ```

***

### Best practices

* **Use modals for complex workflows:** Reserve modals for operations that genuinely require more screen space, multiple steps, or complex interactions that can't be handled by simple button actions.
* **Provide clear entry points:** Use descriptive button labels and titles that clearly indicate what the modal will contain or what action it will perform, helping users understand what to expect.
* **Handle modal dismissal gracefully:** Ensure your modal-based workflows handle user dismissal, saving progress when possible and providing clear feedback about incomplete operations.

***

### Limitations

The `presentModal()` method must be called from a user interaction (such as a button click or tile tap) and can't be invoked programmatically during extension initialization or from background operations.

***

---



<a id="latest-target-apis-standard-apis-locale-api"></a>


## Locale API

The Locale API provides access to the merchant's current locale information in [IETF format](https://en.wikipedia.org/wiki/IETF_language_tag), allowing you to internationalize your extension content and respond to locale changes in real time. The API enables both immediate locale access and dynamic updates when merchants change their language settings.

#### Use cases

* **Internationalization:** Display text, dates, and numbers in the merchant's preferred language.
* **Regional logic:** Implement locale-specific logic like currency formatting or address validation.
* **Dynamic updates:** Update interfaces when merchants change their language settings.
* **Localized content:** Provide locale-aware product descriptions or receipt customizations.

#### Support Targets (28)

#### Supported targets

* [pos.​cart.​line-item-details.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/cart-details#cart-details-targets)
* [pos.​cart.​line-item-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/cart-details#cart-details-action-modal-)
* [pos.​customer-details.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/customer-details#customer-details-action-menu-item-)
* [pos.​customer-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/customer-details#customer-details-action-modal-)
* [pos.​customer-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/customer-details#customer-details-targets)
* [pos.​draft-order-details.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/draft-order-details#draft-order-details-action-menu-item-)
* [pos.​draft-order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/draft-order-details#draft-order-details-action-modal-)
* [pos.​draft-order-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/draft-order-details#draft-order-details-targets)
* [pos.​exchange.​post.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-exchange#post-exchange-action-menu-item-)
* [pos.​exchange.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-exchange#post-exchange-action-modal-)
* [pos.​exchange.​post.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-exchange#post-exchange-targets)
* [pos.​home.​modal.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/home-screen#home-screen-action-modal-)
* [pos.​home.​tile.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/home-screen#home-screen-targets)
* [pos.​order-details.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/order-details#order-details-action-menu-item-)
* [pos.​order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/order-details#order-details-action-modal-)
* [pos.​order-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/order-details#order-details-targets)
* [pos.​product-details.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details#product-details-action-menu-item-)
* [pos.​product-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details#product-details-action-modal-)
* [pos.​product-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details#product-details-targets)
* [pos.​purchase.​post.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-purchase#post-purchase-action-menu-item-)
* [pos.​purchase.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-purchase#post-purchase-action-modal-)
* [pos.​purchase.​post.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-purchase#post-purchase-targets)
* [pos.​register-details.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/register-details#register-details-targets)
* [pos.​register-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/register-details#register-details-action-modal-)
* [pos.​register-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/register-details#register-details-block-)
* [pos.​return.​post.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-return#post-return-action-menu-item-)
* [pos.​return.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-return#post-return-action-modal-)
* [pos.​return.​post.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-return#post-return-targets)

#### Properties

The [`shopify` global object](https://shopify.dev/docs/api/pos-ui-extensions/2026-04#target-apis-define-what-your-extension-does) provides the merchant's current locale information. Access the following properties on `shopify` to get locale data and subscribe to locale changes for content internationalization.

* **current**

  **ReadonlySignalLike\<string>**

  **required**

  Provides read-only access to the current IETF-formatted locale and allows subscribing to locale changes. The `value` property provides the current locale, and `subscribe` allows listening to changes. Use for internationalization, locale-specific formatting, and reactive updates when merchants change language settings.

#### ReadonlySignalLike

Represents a reactive signal interface that provides both immediate value access and subscription-based updates. Enables real-time synchronization with changing data through the observer pattern.

* subscribe

  Subscribes to value changes and calls the provided function whenever the value updates. Returns an unsubscribe function to clean up the subscription. Use to automatically react to changes in the signal's value.

  ```ts
  (fn: (value: T) => void) => () => void
  ```

* value

  The current value of the signal. This property provides immediate access to the current value without requiring subscription setup. Use for one-time value checks or initial setup.

  ```ts
  T
  ```

Examples

#### Examples

* ####

  ##### Description

  Subscribe to locale changes to monitor the merchant's language settings in real time. This example shows how to use \`shopify.locale.subscribe()\` and \`shopify.locale.ianaCode\` to detect when the merchant changes their language preference. This enables dynamic content localization and internationalized user experiences.

  ##### jsx

  ```tsx
  import {render} from 'preact';
  import {useState, useEffect} from 'preact/hooks';
  // Allows the use of `shopify.locale.current.value` as a stateful subscription.
  import '@shopify/ui-extensions/preact';

  export default async () => {
    render(<Extension />, document.body);
  };

  const Extension = () => {
    const [locale, setLocale] = useState(
      shopify.locale.current.value
    );

    useEffect(() => {
      const unsubscribe = shopify.locale.current.subscribe((newLocale) => {
        setLocale(newLocale);
      });
      return unsubscribe;
    }, []);

    return (
      <s-tile
        heading="My App"
        subheading={locale}
      />
    );
  };
  ```

***

### Best practices

* **Handle locale changes reactively:** Use the `subscribe` method to automatically update your extension content when merchants change their language settings.
* **Implement proper formatting:** Use the IETF locale format to implement proper date formatting, number formatting, currency display, and text direction based on the merchant's language and region preferences.
* **Cache localized content:** Consider caching translated content and locale-specific formatting to improve performance, but ensure you invalidate caches when locale changes occur through subscription updates.
* **Provide fallback locale handling:** Implement fallback behavior for unsupported locales or when localization resources are unavailable, defaulting to a supported language like English.

***

---



<a id="latest-target-apis-standard-apis-product-search-api"></a>


## Product Search API

The Product Search API provides access to POS native product search functionality, allowing you to search for products, fetch product details, and retrieve product variants with pagination support and flexible sorting options. The API enables both text-based search and direct product lookups by ID.

#### Use cases

* **Search interfaces:** Implement custom product search with advanced filtering and sorting.
* **Recommendations:** Build product recommendation systems based on search results.
* **Inventory lookup:** Create inventory tools that lookup product details and variant information.
* **Upselling:** Develop upselling and cross-selling features by searching for complementary products.

#### Support Targets (28)

#### Supported targets

* [pos.​cart.​line-item-details.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/cart-details#cart-details-targets)
* [pos.​cart.​line-item-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/cart-details#cart-details-action-modal-)
* [pos.​customer-details.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/customer-details#customer-details-action-menu-item-)
* [pos.​customer-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/customer-details#customer-details-action-modal-)
* [pos.​customer-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/customer-details#customer-details-targets)
* [pos.​draft-order-details.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/draft-order-details#draft-order-details-action-menu-item-)
* [pos.​draft-order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/draft-order-details#draft-order-details-action-modal-)
* [pos.​draft-order-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/draft-order-details#draft-order-details-targets)
* [pos.​exchange.​post.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-exchange#post-exchange-action-menu-item-)
* [pos.​exchange.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-exchange#post-exchange-action-modal-)
* [pos.​exchange.​post.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-exchange#post-exchange-targets)
* [pos.​home.​modal.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/home-screen#home-screen-action-modal-)
* [pos.​home.​tile.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/home-screen#home-screen-targets)
* [pos.​order-details.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/order-details#order-details-action-menu-item-)
* [pos.​order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/order-details#order-details-action-modal-)
* [pos.​order-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/order-details#order-details-targets)
* [pos.​product-details.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details#product-details-action-menu-item-)
* [pos.​product-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details#product-details-action-modal-)
* [pos.​product-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details#product-details-targets)
* [pos.​purchase.​post.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-purchase#post-purchase-action-menu-item-)
* [pos.​purchase.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-purchase#post-purchase-action-modal-)
* [pos.​purchase.​post.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-purchase#post-purchase-targets)
* [pos.​register-details.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/register-details#register-details-targets)
* [pos.​register-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/register-details#register-details-action-modal-)
* [pos.​register-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/register-details#register-details-block-)
* [pos.​return.​post.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-return#post-return-action-menu-item-)
* [pos.​return.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-return#post-return-action-modal-)
* [pos.​return.​post.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-return#post-return-targets)

#### Properties

The [`shopify` global object](https://shopify.dev/docs/api/pos-ui-extensions/2026-04#target-apis-define-what-your-extension-does) provides product search and lookup methods. Access the following properties on `shopify` to search for products, fetch product details, and retrieve product variants.

* **fetchPaginatedProductVariantsWithProductId**

  **(productId: number, paginationParams: PaginationParams) => Promise\<PaginatedResult\<ProductVariant>>**

  **required**

  Retrieves product variants for a specific product with pagination support. Use when a product has many variants and you need to load them incrementally for better performance. Ideal for products with extensive variant collections that would be too large to load at once.

* **fetchProductsWithIds**

  **(productIds: number\[]) => Promise\<MultipleResourceResult\<Product>>**

  **required**

  Retrieves detailed information for multiple products by their IDs. Limited to 50 products maximum—additional IDs are automatically removed. Returns results with both found and not found products clearly identified. Use for bulk product lookups, building product collections, or validating product lists.

* **fetchProductVariantsWithIds**

  **(productVariantIds: number\[]) => Promise\<MultipleResourceResult\<ProductVariant>>**

  **required**

  Retrieves detailed information for multiple product variants by their IDs. Limited to 50 variants maximum—additional IDs are automatically removed. Returns results with both found and not found variants clearly identified. Use for bulk variant lookups or building variant-specific collections.

* **fetchProductVariantsWithProductId**

  **(productId: number) => Promise\<ProductVariant\[]>**

  **required**

  Retrieves all product variants associated with a specific product ID. Returns all variants at once without pagination. Use for displaying complete variant options, building variant selectors, or analyzing all available configurations for a product.

* **fetchProductVariantWithId**

  **(productVariantId: number) => Promise\<ProductVariant>**

  **required**

  Retrieves detailed information for a single product variant by its ID. Returns `undefined` if the variant doesn't exist or isn't available. Use for displaying variant-specific details like pricing, inventory, or options when working with specific product configurations.

* **fetchProductWithId**

  **(productId: number) => Promise\<Product>**

  **required**

  Retrieves detailed information for a single product by its ID. Returns `undefined` if the product doesn't exist or isn't available on the POS device. Use for displaying product details, validating product availability, or building product-specific workflows.

* **searchProducts**

  **(searchParams: ProductSearchParams) => Promise\<PaginatedResult\<Product>>**

  **required**

  Searches for products on the POS device using text queries and sorting options. Returns paginated results with up to 50 products per page. When a query string is provided, results are sorted by relevance. Use for implementing custom search interfaces, product discovery features, or filtered product listings.

#### PaginationParams

Specifies parameters for cursor-based pagination. Includes the cursor position and the number of results to retrieve per page.

* afterCursor

  Specifies the page cursor. Items after this cursor will be returned.

  ```ts
  string
  ```

* first

  Specifies the number of results to be returned in this page. The maximum number of items that will be returned is 50.

  ```ts
  number
  ```

#### PaginatedResult

Represents the result of a paginated query. Contains the data items, pagination cursors for navigating pages, and information about whether more results exist.

* hasNextPage

  Whether or not there is another page of results that can be fetched.

  ```ts
  boolean
  ```

* items

  The items returned from the fetch.

  ```ts
  T[]
  ```

* lastCursor

  The cursor of the last item. This can be used to fetch more results. The format of this cursor may look different depending on if POS is fetching results from the remote API, or its local database. However, that should not affect its usage with the search functions.

  ```ts
  string
  ```

#### ProductVariant

Represents a specific variant of a product with its own SKU, price, and inventory. Contains variant-specific attributes including options, availability, and identification data.

* barcode

  The variant's barcode identifier, if configured. Returns \`undefined\` when no barcode is set. Use for barcode scanning functionality, inventory tracking, or integration with barcode-based systems.

  ```ts
  string
  ```

* compareAtPrice

  The variant's compare-at price (original or MSRP price) formatted as a string, if set. Returns \`undefined\` when no compare-at price is configured. Use for displaying discounts, sale pricing, or savings calculations.

  ```ts
  string
  ```

* createdAt

  The \[ISO 8601]\(https://en.wikipedia.org/wiki/ISO\_8601) timestamp when the product variant was created. Use for sorting variants by creation date, implementing "new product" features, or tracking product catalog changes over time.

  ```ts
  string
  ```

* displayName

  The variant's formatted display name for user interfaces. This may differ from the title and is optimized for display purposes. Use for customer-facing variant names in product listings, cart items, or receipt displays.

  ```ts
  string
  ```

* hasInStockVariants

  Whether this variant currently has inventory in stock. Returns \`undefined\` when inventory information is not available. Use for stock status displays, availability checks, or filtering in-stock variants.

  ```ts
  boolean
  ```

* id

  The unique identifier for the product variant. Use this ID for variant-specific operations, cart additions, or inventory lookups. This ID is consistent across all Shopify systems.

  ```ts
  number
  ```

* image

  The URL of the variant-specific image, if one is configured. Returns \`undefined\` when no variant image is set. Use for displaying variant-specific images in selection interfaces or product galleries.

  ```ts
  string
  ```

* inventoryAtAllLocations

  The total inventory quantity across all locations for this variant, if available. Returns \`undefined\` when this information is not available. Use for comprehensive inventory views, transfer planning, or multi-location inventory management.

  ```ts
  number
  ```

* inventoryAtLocation

  The inventory quantity available at the current POS location, if inventory tracking is enabled. Returns \`undefined\` when inventory tracking is disabled. Use for location-specific inventory displays, stock availability checks, or local inventory management.

  ```ts
  number
  ```

* inventoryIsTracked

  Whether inventory tracking is enabled for this specific variant. When \`false\`, inventory quantities may not be accurate. Use to determine whether to display inventory information or implement inventory-based business logic for this variant.

  ```ts
  boolean
  ```

* inventoryPolicy

  The inventory policy for this variant, either "DENY" (prevent sales when out of stock) or "CONTINUE" (allow sales when out of stock). Use to implement inventory validation logic and determine whether to allow purchases of out-of-stock items.

  ```ts
  ProductVariantInventoryPolicy
  ```

* options

  An array of option name-value pairs that define this variant's configuration. For example, \`\[{name: "Size," value: "Large"}, {name: "Color," value: "Blue"}]\`. Returns \`undefined\` for products with only default variants. Use for displaying variant options, building variant selectors, or implementing variant-based logic.

  ```ts
  ProductVariantOption[]
  ```

* position

  The variant's position order within the product's variant list. Use for maintaining consistent variant ordering in selection interfaces or implementing custom variant sorting logic.

  ```ts
  number
  ```

* price

  The variant's selling price formatted as a string. Use for price displays, cart calculations, or implementing pricing logic. This represents the current selling price for the variant.

  ```ts
  string
  ```

* product

  Reference to the parent Product object that this variant belongs to. Returns \`undefined\` in some contexts to avoid circular references. Use when you need access to product-level information from a variant context.

  ```ts
  Product
  ```

* productId

  The ID of the parent product that this variant belongs to. Use for linking variants back to their parent product, implementing product-level operations, or organizing variants by product.

  ```ts
  number
  ```

* sku

  The variant's Stock Keeping Unit (SKU) identifier, if configured. Returns \`undefined\` when no SKU is set. Use for inventory management, product identification, or integration with external systems that use SKU-based tracking.

  ```ts
  string
  ```

* taxable

  Whether this variant is subject to tax calculations. Use for tax computation logic, pricing displays, or implementing tax-exempt product handling.

  ```ts
  boolean
  ```

* title

  The variant's display title, typically showing the option combinations. For example, \`"Large / Blue"\`. Use for variant selection interfaces, cart displays, or anywhere users need to distinguish between variants.

  ```ts
  string
  ```

* updatedAt

  The \[ISO 8601]\(https://en.wikipedia.org/wiki/ISO\_8601) timestamp when the product variant was last updated. Use for cache invalidation, tracking recent changes, or implementing "recently updated" product features.

  ```ts
  string
  ```

#### ProductVariantInventoryPolicy

The inventory policy determining whether sales can continue when a variant has no inventory available: - \`'DENY'\`: Sales are prevented when inventory reaches zero. Customers can't purchase out-of-stock variants. The "Add to cart" action is disabled or shows "Out of stock". This is the default and recommended policy for most physical products to prevent overselling. - \`'CONTINUE'\`: Sales are allowed even when inventory is zero or negative. Customers can purchase out-of-stock variants, creating backorders. This enables pre-orders, made-to-order products, or drop-shipped items where inventory tracking is less critical.

```ts
'DENY' | 'CONTINUE'
```

#### ProductVariantOption

Represents a single option selection for a product variant, showing one chosen value from a product's configuration options. For example, if a product has Size and Color options, a variant might have one option for Size=Large and another for Color=Blue.

* name

  The option category name (for example, "Size", "Color", "Material", "Style", "Flavor"). This is the attribute or dimension along which the product varies. Each product can have up to 3 option names, and each option name can have multiple values. The name is visible to customers in variant selection interfaces. Commonly used for displaying option labels in variant selectors ("Select Size:", "Choose Color:"), building dynamic product configuration UI, or organizing product variations by attribute type.

  ```ts
  string
  ```

* value

  The selected value for this option that defines this specific variant (for example, "Large", "Blue", "Cotton", "V-Neck"). This is the specific choice from the available option values that characterizes this variant. For example, if \`name\` is "Size", the \`value\` might be "Large" or "Small". Values are set at the variant level—each variant has a unique combination of option values. Commonly used for displaying the variant's configuration ("Size: Large, Color: Blue"), building variant selection dropdowns, or matching user selections to variants.

  ```ts
  string
  ```

#### Product

Represents comprehensive product information including metadata, pricing, variants, and availability. Contains all data needed to display and work with products in the POS interface.

* createdAt

  The \[ISO 8601]\(https://en.wikipedia.org/wiki/ISO\_8601) timestamp when the product was created. Use for sorting products by creation date, implementing "new product" features, or tracking product catalog growth over time.

  ```ts
  string
  ```

* description

  The product's plain text description without HTML formatting. Use for displaying product information in contexts where HTML is not supported or when you need clean text content for processing.

  ```ts
  string
  ```

* descriptionHtml

  The product's description with HTML formatting preserved. Use when you need to display rich text content with formatting, links, or other HTML elements in your extension interface.

  ```ts
  string
  ```

* featuredImage

  The URL of the product's featured image, if one is set. Returns \`undefined\` if no featured image is configured. Use for displaying product images in search results, product listings, or detailed product views.

  ```ts
  string
  ```

* hasInStockVariants

  Whether the product has any variants currently in stock. Returns \`undefined\` when inventory information is not available. Use for stock status displays, availability filtering, or implementing out-of-stock product handling.

  ```ts
  boolean
  ```

* hasOnlyDefaultVariant

  Whether the product has only a default variant (no custom options). When \`true\`, the product doesn't require variant selection. Use to simplify product interfaces and skip variant selection steps for single-variant products.

  ```ts
  boolean
  ```

* hasSellingPlanGroups

  Indicates whether this product or line item has selling plan groups (subscription options) available. When \`true\`, the product offers subscription or recurring payment options that customers can select. When \`false\`, the product is only available for one-time purchase without subscription options.

  ```ts
  boolean
  ```

* id

  The unique identifier for the product. Use this ID for product-specific operations, API calls, or linking to product details. This ID is consistent across all Shopify systems and can be used for external integrations.

  ```ts
  number
  ```

* isGiftCard

  Whether this product is a gift card. Gift cards have special handling requirements and different business logic. Use to implement gift card-specific workflows, validation, or display special gift card interfaces.

  ```ts
  boolean
  ```

* maxVariantPrice

  The highest price among all product variants, formatted as a string. Use for displaying price ranges, implementing price-based filtering, or showing complete pricing information for products with multiple variants.

  ```ts
  string
  ```

* minVariantPrice

  The lowest price among all product variants, formatted as a string. Use for displaying price ranges, implementing price-based filtering, or showing starting prices in product listings.

  ```ts
  string
  ```

* numVariants

  The total number of variants available for this product. Use to determine whether to show variant selection interfaces, implement variant-specific logic, or optimize variant loading strategies.

  ```ts
  number
  ```

* onlineStoreUrl

  The URL of the product on the online store, if available. Returns \`undefined\` when the product is not published online or the store doesn't have an online presence. Use for linking to online product pages or sharing product information.

  ```ts
  string
  ```

* options

  An array of product options that define available variant configurations. For example, size and color. Each option includes available values. Use for building variant selection interfaces or understanding product configuration possibilities.

  ```ts
  ProductOption[]
  ```

* productCategory

  The standardized product category classification. Use for product categorization, implementing category-specific business logic, or organizing products by standardized categories.

  ```ts
  string
  ```

* productType

  The product type category as defined by the merchant (For example, "T-Shirt," "Electronics," "Books"). Use for product categorization, filtering, or implementing category-specific business logic.

  ```ts
  string
  ```

* requiresSellingPlan

  Indicates whether this product or line item requires a selling plan (subscription) to be purchased. When \`true\`, the customer must select a subscription or payment plan before adding to cart. When \`false\`, the item can be purchased as a one-time purchase without a selling plan.

  ```ts
  boolean
  ```

* tags

  An array of tags associated with the product for categorization and organization. Use for product filtering, search enhancement, or implementing tag-based business logic and promotions.

  ```ts
  string[]
  ```

* title

  The product's display name as configured by the merchant. Use for product listings, search results, and customer-facing displays. This is the primary product identifier that customers will recognize.

  ```ts
  string
  ```

* totalAvailableInventory

  The total available inventory across all variants and locations, if tracking is enabled. Returns \`undefined\` when inventory tracking is disabled. Use for availability checks, stock level displays, or implementing low-stock alerts.

  ```ts
  number
  ```

* totalInventory

  The total inventory count across all variants and locations for this product. Use for inventory management, stock level displays, or implementing low-stock warnings and alerts.

  ```ts
  number
  ```

* tracksInventory

  Whether inventory tracking is enabled for this product. When \`false\`, inventory quantities may not be accurate or meaningful. Use to determine whether to display inventory information or implement inventory-based business logic.

  ```ts
  boolean
  ```

* updatedAt

  The \[ISO 8601]\(https://en.wikipedia.org/wiki/ISO\_8601) timestamp when the product was last updated. Use for cache invalidation, tracking recent changes, or implementing "recently updated" product features.

  ```ts
  string
  ```

* variants

  An array of all product variants associated with this product. Each variant contains detailed information including pricing, inventory, and options. Use for building variant selectors, displaying inventory information, or implementing variant-specific functionality.

  ```ts
  ProductVariant[]
  ```

* vendor

  The product's vendor or brand name as configured by the merchant. Use for filtering products by brand, displaying vendor information, or organizing products by supplier.

  ```ts
  string
  ```

#### ProductOption

Represents a product option definition showing one of the configurable attributes for a product (like Size, Color, Material) along with all the possible values customers can choose from. Products can have up to 3 options.

* id

  The unique numeric identifier for this product option configuration. This ID identifies the option definition itself (not a specific option value or variant). Commonly used for option-specific operations, tracking option configurations, or linking options in external systems.

  ```ts
  number
  ```

* name

  The option category name (for example, "Size", "Color", "Material", "Style", "Flavor"). This is the attribute or dimension along which the product varies. Each product can have up to 3 option names, and each option name can have multiple values. The name is visible to customers in variant selection interfaces. Commonly used for displaying option labels in variant selectors ("Select Size:", "Choose Color:"), building dynamic product configuration UI, or organizing product variations by attribute type.

  ```ts
  string
  ```

* optionValues

  An array of all available values for this option that customers can choose from (for example, \`\["Small", "Medium", "Large", "X-Large"]\` for a Size option, or \`\["Red", "Blue", "Green", "Black"]\` for a Color option). The order of values in this array typically represents the display order in variant selectors. Each combination of option values across all options creates a unique variant. For example, a product with Size: \[Small, Large] and Color: \[Red, Blue] would have 4 variants (Small/Red, Small/Blue, Large/Red, Large/Blue). Commonly used for building variant selection dropdowns, radio buttons, or swatches, validating user selections, or displaying all available choices for an attribute.

  ```ts
  string[]
  ```

* productId

  The unique numeric identifier of the parent product to which this option belongs. This links the option definition back to the product it configures. Commonly used for linking options to their parent product, organizing options by product, or implementing product-level option management.

  ```ts
  number
  ```

#### MultipleResourceResult

Represents the result of a bulk resource lookup operation. Contains successfully found resources and identifiers for resources that were not found.

* fetchedResources

  The resources that were fetched using the IDs provided.

  ```ts
  T[]
  ```

* idsForResourcesNotFound

  The IDs for which a resource was not found.

  ```ts
  number[]
  ```

#### ProductSearchParams

Specifies the parameters for searching products. Includes query text, pagination options, and sorting preferences for product search operations.

* afterCursor

  Specifies the page cursor. Items after this cursor will be returned.

  ```ts
  string
  ```

* first

  Specifies the number of results to be returned in this page. The maximum number of items that will be returned is 50.

  ```ts
  number
  ```

* queryString

  The search term to be used to search for POS products.

  ```ts
  string
  ```

* sortType

  Specifies the order in which products should be sorted. When a \`queryString\` is provided, sortType will not have any effect, as the results will be returned in order by relevance to the \`queryString\`.

  ```ts
  ProductSortType
  ```

#### ProductSortType

```ts
'RECENTLY_ADDED' | 'RECENTLY_ADDED_ASCENDING' | 'ALPHABETICAL_A_TO_Z' | 'ALPHABETICAL_Z_TO_A'
```

Examples

#### Examples

* ####

  ##### Description

  Fetch a single product by ID. This example demonstrates using \`shopify.productSearch.fetchById()\` to get complete product data including variants, pricing, and inventory information for a single product.

  ##### jsx

  ```tsx
  import {render} from 'preact';
  import {useState, useEffect} from 'preact/hooks';

  export default async () => {
    render(<Extension />, document.body);
  };

  const Extension = () => {
    const [product, setProduct] = useState(null);

    useEffect(() => {
      const fetchProduct = async () => {
        const resultProduct = await shopify.productSearch.fetchProductWithId(1);
        setProduct(resultProduct);
      };

      fetchProduct();
    }, []);

    return (
      <s-page heading="Hello World!">
        <s-scroll-box>
          <s-text>
            {product ? `Product: ${product.title}` : 'Loading...'}
          </s-text>
        </s-scroll-box>
      </s-page>
    );
  };
  ```

* ####

  ##### Description

  Fetch a single variant by ID. This example demonstrates using \`shopify.productSearch.fetchVariantById()\` to get variant-specific data including pricing, inventory, and options for a particular variant.

  ##### jsx

  ```tsx
  import {render} from 'preact';
  import {useState, useEffect} from 'preact/hooks';

  export default async () => {
    render(<Extension />, document.body);
  };

  const Extension = () => {
    const [variant, setVariant] = useState(null);

    useEffect(() => {
      const fetchProductVariant = async () => {
        const resultProductVariant = await shopify.productSearch.fetchProductVariantWithId(1);
        setVariant(resultProductVariant);
      };

      fetchProductVariant();
    }, []);

    return (
      <s-page heading="Hello World!">
        <s-scroll-box>
          <s-text>
            {variant ? `Variant: ${variant.title}` : 'Loading...'}
          </s-text>
        </s-scroll-box>
      </s-page>
    );
  };
  ```

* ####

  ##### Description

  Fetch multiple products by IDs. This example shows how to use \`shopify.productSearch.fetchByIds()\` to efficiently fetch data for multiple products in a single request. This improves performance when displaying product lists or related items.

  ##### jsx

  ```tsx
  import {render} from 'preact';
  import {useState, useEffect} from 'preact/hooks';

  export default async () => {
    render(<Extension />, document.body);
  };

  const Extension = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      const fetchProducts = async () => {
        const results = await shopify.productSearch.fetchProductsWithIds([1, 2, 3]);
        setProducts(results.fetchedResources);
        console.log('IDs not found: ', results.idsForResourcesNotFound);
      };

      fetchProducts();
    }, []);

    return (
      <s-page heading="Hello World!">
        <s-scroll-box>
          <s-text>Found {products.length} products</s-text>
          {products.map((product) => (
            <s-text key={product.id}>{product.title}</s-text>
          ))}
        </s-scroll-box>
      </s-page>
    );
  };
  ```

* ####

  ##### Description

  Fetch multiple variants by IDs. This example shows how to use \`shopify.productSearch.fetchVariantsByIds()\` to efficiently fetch data for multiple variants in a single request. This is useful for displaying variant lists or comparisons.

  ##### jsx

  ```tsx
  import {render} from 'preact';
  import {useState, useEffect} from 'preact/hooks';

  export default async () => {
    render(<Extension />, document.body);
  };

  const Extension = () => {
    const [variants, setVariants] = useState([]);

    useEffect(() => {
      const fetchProductVariants = async () => {
        const results = await shopify.productSearch.fetchProductVariantsWithIds([1, 2, 3]);
        setVariants(results.fetchedResources);
        console.log('IDs not found: ', results.idsForResourcesNotFound);
      };

      fetchProductVariants();
    }, []);

    return (
      <s-page heading="Hello World!">
        <s-scroll-box>
          <s-text>Found {variants.length} variants</s-text>
          {variants.map((variant) => (
            <s-text key={variant.id}>{variant.title}</s-text>
          ))}
        </s-scroll-box>
      </s-page>
    );
  };
  ```

* ####

  ##### Description

  Fetch paginated variants for a product. This example demonstrates using \`shopify.productSearch.fetchVariantsByProductId()\` with pagination parameters to load variants page by page. This improves performance and user experience for products with large variant catalogs.

  ##### jsx

  ```tsx
  import {render} from 'preact';
  import {useState, useEffect} from 'preact/hooks';

  export default async () => {
    render(<Extension />, document.body);
  };

  const Extension = () => {
    const [variants, setVariants] = useState([]);

    useEffect(() => {
      const fetchProductVariants = async () => {
        const results = await shopify.productSearch.fetchPaginatedProductVariantsWithProductId(1, {first: 10});
        setVariants(results.items);
        console.log('Cursor for next page: ', results.lastCursor);
      };

      fetchProductVariants();
    }, []);

    return (
      <s-page heading="Hello World!">
        <s-scroll-box>
          <s-text>Found {variants.length} variants</s-text>
          {variants.map((variant) => (
            <s-text key={variant.id}>{variant.title}</s-text>
          ))}
        </s-scroll-box>
      </s-page>
    );
  };
  ```

* ####

  ##### Description

  Search for products using a search bar. This example shows how to use \`shopify.productSearch.search()\` to perform text-based product searches with pagination support. This allows users to find products by name, SKU, or other searchable attributes.

  ##### jsx

  ```tsx
  import {render} from 'preact';
  import {useState} from 'preact/hooks';

  export default async () => {
    render(<Extension />, document.body);
  };

  const Extension = () => {
    const [searchResults, setSearchResults] = useState([]);

    const search = async (event) => {
      const results = await shopify.productSearch.searchProducts({queryString: event.currentTarget.value});
      setSearchResults(results.items);
    };

    return (
      <s-page heading="Hello World!">
        <s-scroll-box>
          <s-search-field
            placeholder="Search products"
            onInput={search}
          />
          <s-text>Found {searchResults.length} products</s-text>
        </s-scroll-box>
      </s-page>
    );
  };
  ```

***

### Best practices

* **Implement efficient pagination:** Use appropriate page sizes and cursor-based pagination to balance performance with user experience, especially for large product catalogs.
* **Handle search results gracefully:** Check for undefined results and empty result sets.
* **Optimize search performance:** Consider caching frequently accessed product data and implementing debounced search to reduce API calls while users are typing search queries.
* **Provide relevant search options:** Use appropriate sorting options based on your use case - relevance for user searches, alphabetical for browsing, or recently added for highlighting new products.

***

### Limitations

* Product search results are limited to products available on the current POS device and may not include the complete shop catalog if products aren't synced locally.
* Bulk operations (`fetchProductsWithIds` and `fetchProductVariantsWithIds`) are limited to 50 items maximum, with additional IDs automatically removed from requests.

***

---



<a id="latest-target-apis-standard-apis-session-api"></a>


## Session API

The Session API provides access to current POS session information and secure authentication tokens, allowing you to retrieve shop details, user information, location data, and generate tokens for secure backend communication. The API includes both static session data and dynamic token generation for authenticated API calls.

#### Use cases

* **API authentication:** Authenticate API calls to your app's backend using secure session tokens.
* **Shop customization:** Customize extension behavior based on shop domain, location, or currency.
* **Location features:** Implement location-specific features like tax calculations or inventory checks.
* **Activity tracking:** Track user activity and staff interactions for analytics and audits.

#### Support Targets (28)

#### Supported targets

* [pos.​cart.​line-item-details.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/cart-details#cart-details-targets)
* [pos.​cart.​line-item-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/cart-details#cart-details-action-modal-)
* [pos.​customer-details.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/customer-details#customer-details-action-menu-item-)
* [pos.​customer-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/customer-details#customer-details-action-modal-)
* [pos.​customer-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/customer-details#customer-details-targets)
* [pos.​draft-order-details.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/draft-order-details#draft-order-details-action-menu-item-)
* [pos.​draft-order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/draft-order-details#draft-order-details-action-modal-)
* [pos.​draft-order-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/draft-order-details#draft-order-details-targets)
* [pos.​exchange.​post.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-exchange#post-exchange-action-menu-item-)
* [pos.​exchange.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-exchange#post-exchange-action-modal-)
* [pos.​exchange.​post.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-exchange#post-exchange-targets)
* [pos.​home.​modal.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/home-screen#home-screen-action-modal-)
* [pos.​home.​tile.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/home-screen#home-screen-targets)
* [pos.​order-details.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/order-details#order-details-action-menu-item-)
* [pos.​order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/order-details#order-details-action-modal-)
* [pos.​order-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/order-details#order-details-targets)
* [pos.​product-details.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details#product-details-action-menu-item-)
* [pos.​product-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details#product-details-action-modal-)
* [pos.​product-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details#product-details-targets)
* [pos.​purchase.​post.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-purchase#post-purchase-action-menu-item-)
* [pos.​purchase.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-purchase#post-purchase-action-modal-)
* [pos.​purchase.​post.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-purchase#post-purchase-targets)
* [pos.​register-details.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/register-details#register-details-targets)
* [pos.​register-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/register-details#register-details-action-modal-)
* [pos.​register-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/register-details#register-details-block-)
* [pos.​return.​post.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-return#post-return-action-menu-item-)
* [pos.​return.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-return#post-return-action-modal-)
* [pos.​return.​post.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-return#post-return-targets)

#### Properties

The [`shopify` global object](https://shopify.dev/docs/api/pos-ui-extensions/2026-04#target-apis-define-what-your-extension-does) provides session details and authentication methods. Access the following properties on `shopify` to get session information, device identifiers, and generate authentication tokens.

* **currentSession**

  **Session**

  **required**

  Provides comprehensive information about the current POS session including shop details, user authentication, location data, staff member information, currency settings, and POS version. This data is static for the duration of the session and updates when users switch locations or staff members change.

* **deviceId**

  **number**

  **required**

  The numeric ID of the device running this session.

  Use this to construct a [GID](https://shopify.dev/docs/api/pos-ui-extensions/latest/target-apis/platform-apis/device-api) to query device details via GraphQL Admin API.

* **getSessionToken**

  **() => Promise\<string>**

  **required**

  Generates a fresh session token for secure communication with your app's backend service. Returns `undefined` when the authenticated user lacks proper app permissions. The token is a Shopify OpenID Connect ID Token that should be used in `Authorization` headers for backend API calls. This is based on the authenticated user, not the pinned staff member.

#### Session

Defines information about the current POS session.

* currency

  The \[ISO 4217]\(https://en.wikipedia.org/wiki/ISO\_4217) currency code associated with the location currently active on POS.

  ```ts
  CurrencyCode
  ```

* locationId

  The location ID associated with the POS device's current location.

  ```ts
  number
  ```

* posVersion

  The version of \[the POS app]\(https://apps.shopify.com/shopify-pos) currently running.

  ```ts
  string
  ```

* shopDomain

  The shop domain associated with the shop currently logged into POS.

  ```ts
  string
  ```

* shopId

  The shop ID associated with the shop currently logged into POS.

  ```ts
  number
  ```

* staffMemberId

  The staff ID of the staff member currently pinned into the POS. This may differ from the user ID if the pinned staff member is different from the logged-in user.

  ```ts
  number
  ```

* userId

  The user ID associated with the Shopify account currently authenticated on POS.

  ```ts
  number
  ```

#### CurrencyCode

```ts
'AED' | 'AFN' | 'ALL' | 'AMD' | 'ANG' | 'AOA' | 'ARS' | 'AUD' | 'AWG' | 'AZN' | 'BAM' | 'BBD' | 'BDT' | 'BGN' | 'BHD' | 'BIF' | 'BMD' | 'BND' | 'BOB' | 'BOV' | 'BRL' | 'BSD' | 'BTN' | 'BWP' | 'BYN' | 'BZD' | 'CAD' | 'CDF' | 'CHE' | 'CHF' | 'CHW' | 'CLF' | 'CLP' | 'CNY' | 'COP' | 'COU' | 'CRC' | 'CUC' | 'CUP' | 'CVE' | 'CZK' | 'DJF' | 'DKK' | 'DOP' | 'DZD' | 'EGP' | 'ERN' | 'ETB' | 'EUR' | 'FJD' | 'FKP' | 'GBP' | 'GEL' | 'GHS' | 'GIP' | 'GMD' | 'GNF' | 'GTQ' | 'GYD' | 'HKD' | 'HNL' | 'HRK' | 'HTG' | 'HUF' | 'IDR' | 'ILS' | 'INR' | 'IQD' | 'IRR' | 'ISK' | 'JMD' | 'JOD' | 'JPY' | 'KES' | 'KGS' | 'KHR' | 'KMF' | 'KPW' | 'KRW' | 'KWD' | 'KYD' | 'KZT' | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'LSL' | 'LYD' | 'MAD' | 'MDL' | 'MGA' | 'MKD' | 'MMK' | 'MNT' | 'MOP' | 'MRU' | 'MUR' | 'MVR' | 'MWK' | 'MXN' | 'MXV' | 'MYR' | 'MZN' | 'NAD' | 'NGN' | 'NIO' | 'NOK' | 'NPR' | 'NZD' | 'OMR' | 'PAB' | 'PEN' | 'PGK' | 'PHP' | 'PKR' | 'PLN' | 'PYG' | 'QAR' | 'RON' | 'RSD' | 'RUB' | 'RWF' | 'SAR' | 'SBD' | 'SCR' | 'SDG' | 'SEK' | 'SGD' | 'SHP' | 'SLL' | 'SOS' | 'SRD' | 'SSP' | 'STN' | 'SVC' | 'SYP' | 'SZL' | 'THB' | 'TJS' | 'TMT' | 'TND' | 'TOP' | 'TRY' | 'TTD' | 'TWD' | 'TZS' | 'UAH' | 'UGX' | 'USD' | 'USN' | 'UYI' | 'UYU' | 'UYW' | 'UZS' | 'VES' | 'VND' | 'VUV' | 'WST' | 'XAF' | 'XAG' | 'XAU' | 'XBA' | 'XBB' | 'XBC' | 'XBD' | 'XCD' | 'XDR' | 'XOF' | 'XPD' | 'XPF' | 'XPT' | 'XSU' | 'XTS' | 'XUA' | 'XXX' | 'YER' | 'ZAR' | 'ZMW' | 'ZWL'
```

Examples

#### Examples

* ####

  ##### Description

  Access comprehensive session information including shop details, user data, and location information. This example shows how to use \`shopify.session.currentSession\` to retrieve the shop ID, domain, currency, user ID, location ID, staff member ID, and POS version. Use this data to build location-aware features and personalized experiences.

  ##### jsx

  ```tsx
  import {render} from 'preact';

  export default async () => {
    render(<Extension />, document.body);
  };

  const Extension = () => {
    const session = shopify.session.currentSession;

    return (
      <s-page heading="Current Session">
        <s-scroll-box>
          <s-stack direction="block">
            <s-section heading="Shop Information">
              <s-text>Shop ID: {session.shopId}</s-text>
              <s-text>Shop Domain: {session.shopDomain}</s-text>
              <s-text>Currency: {session.currency}</s-text>
            </s-section>
            <s-section heading="User & Staff">
              <s-text>User ID: {session.userId}</s-text>
              <s-text>Location ID: {session.locationId}</s-text>
              {session.staffMemberId && (
                <s-text>Staff Member ID: {session.staffMemberId}</s-text>
              )}
            </s-section>
            <s-section heading="System">
              <s-text>POS Version: {session.posVersion}</s-text>
            </s-section>
          </s-stack>
        </s-scroll-box>
      </s-page>
    );
  };
  ```

* ####

  ##### Description

  Access session data and generate authentication tokens. This example shows how to access shop details, user information, and location data through \`shopify.session\`, and use \`shopify.session.getSessionToken()\` to generate tokens for authenticated requests to your backend services.

  ##### jsx

  ```tsx
  import {render} from 'preact';
  import {useState, useEffect} from 'preact/hooks';

  export default async () => {
    render(<Extension />, document.body);
  };

  const Extension = () => {
    const [sessionToken, setSessionToken] = useState('');
    const {shopId, userId, locationId, staffMemberId} = shopify.session.currentSession;

    useEffect(() => {
      shopify.session.getSessionToken().then((newToken) => {
        setSessionToken(newToken);
      });
    }, []);

    return (
      <s-page heading="Screen One Title">
        <s-scroll-box>
          <s-text>
            shopId: {shopId}, userId: {userId}, locationId: {locationId}, staffId: {staffMemberId}
          </s-text>
          <s-text>sessionToken: {sessionToken}</s-text>
        </s-scroll-box>
      </s-page>
    );
  };
  ```

* ####

  ##### Description

  Access the unique identifier of the current POS device. This example demonstrates using \`shopify.deviceId\` to retrieve the device ID. Use this data to construct a GID to query device details via GraphQL Admin API.

  ##### jsx

  ```tsx
  import {render} from 'preact';

  export default async () => {
    render(<Extension />, document.body);
  };

  const Extension = () => {
    const {deviceId} = shopify.session;
    const deviceGid = `gid://shopify/PointOfSaleDevice/${deviceId}`;

    return (
      <s-page heading="Device Details">
        <s-scroll-box>
          <s-text>Device ID: {deviceId}</s-text>
          <s-text>Device GID: {deviceGid}</s-text>
        </s-scroll-box>
      </s-page>
    );
  };
  ```

***

### Best practices

* **Handle authentication properly:** Check for undefined session tokens and implement proper fallback behavior when authentication fails or permissions are insufficient.
* **Use appropriate identifiers:** Distinguish between `userId` (authenticated account) and `staffMemberId` (pinned staff member) to implement correct permissions and personalization logic.
* **Implement location-aware features:** Use `locationId` and `currency` information.
* **Secure backend communication:** Use session tokens exclusively for backend API calls and never expose them in client-side logs or storage. Validate tokens on your backend before processing requests.

***

### Limitations

* Session tokens are only available when the authenticated user has proper app permissions enabled—staff members who are pinned in but not authenticated can't generate tokens.
* Session tokens should only be used for communication with your app's configured backend service and can't be used for direct Shopify API calls from the client side.

***

---



<a id="latest-target-apis-standard-apis-toast-api"></a>


## Toast API

The Toast API provides temporary notification functionality for POS UI extensions, allowing you to display brief, non-intrusive messages to users for feedback, confirmations, and status updates that automatically disappear. Toast messages appear as overlay notifications that don't interrupt the user's workflow.

#### Use cases

* **Action feedback:** Provide immediate feedback for successful data saves or operations.
* **Error display:** Display error messages and warnings without blocking workflows.
* **Progress updates:** Show progress for long-running operations like data synchronization.
* **Status changes:** Communicate system status changes like connectivity issues.

#### Support Targets (28)

#### Supported targets

* [pos.​cart.​line-item-details.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/cart-details#cart-details-targets)
* [pos.​cart.​line-item-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/cart-details#cart-details-action-modal-)
* [pos.​customer-details.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/customer-details#customer-details-action-menu-item-)
* [pos.​customer-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/customer-details#customer-details-action-modal-)
* [pos.​customer-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/customer-details#customer-details-targets)
* [pos.​draft-order-details.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/draft-order-details#draft-order-details-action-menu-item-)
* [pos.​draft-order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/draft-order-details#draft-order-details-action-modal-)
* [pos.​draft-order-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/draft-order-details#draft-order-details-targets)
* [pos.​exchange.​post.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-exchange#post-exchange-action-menu-item-)
* [pos.​exchange.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-exchange#post-exchange-action-modal-)
* [pos.​exchange.​post.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-exchange#post-exchange-targets)
* [pos.​home.​modal.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/home-screen#home-screen-action-modal-)
* [pos.​home.​tile.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/home-screen#home-screen-targets)
* [pos.​order-details.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/order-details#order-details-action-menu-item-)
* [pos.​order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/order-details#order-details-action-modal-)
* [pos.​order-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/order-details#order-details-targets)
* [pos.​product-details.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details#product-details-action-menu-item-)
* [pos.​product-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details#product-details-action-modal-)
* [pos.​product-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details#product-details-targets)
* [pos.​purchase.​post.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-purchase#post-purchase-action-menu-item-)
* [pos.​purchase.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-purchase#post-purchase-action-modal-)
* [pos.​purchase.​post.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-purchase#post-purchase-targets)
* [pos.​register-details.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/register-details#register-details-targets)
* [pos.​register-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/register-details#register-details-action-modal-)
* [pos.​register-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/register-details#register-details-block-)
* [pos.​return.​post.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-return#post-return-action-menu-item-)
* [pos.​return.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-return#post-return-action-modal-)
* [pos.​return.​post.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-return#post-return-targets)

#### Properties

The [`shopify` global object](https://shopify.dev/docs/api/pos-ui-extensions/2026-04#target-apis-define-what-your-extension-does) provides methods for showing toast notifications. Access the following properties on `shopify` to display brief, non-intrusive messages to merchants.

* **show**

  **(content: string) => void**

  **required**

  Displays a toast notification with the specified text content. The message appears as a temporary overlay that automatically dismisses after the specified duration. Use for providing immediate user feedback, confirming actions, or communicating status updates without interrupting the user's workflow.

Examples

#### Examples

* ####

  ##### Description

  Display a toast notification from a tile. This example demonstrates using \`shopify.toast.show()\` to display a brief, non-intrusive message that automatically disappears. This is useful for confirmations, status updates, or success messages that don't require user interaction.

  ##### jsx

  ```tsx
  import {render} from 'preact';

  export default async () => {
    render(<Extension />, document.body);
  };

  const Extension = () => {
    return (
      <s-tile
        heading="My App"
        onClick={() => shopify.toast.show('Toast content', {duration: 5000})}
      />
    );
  };
  ```

***

### Best practices

* **Write clear, concise messages:** Keep content brief since toasts disappear automatically.
* **Provide meaningful feedback:** Use toasts to confirm actions, explain errors, or communicate status changes.
* **Avoid overuse:** Reserve for important feedback. Don't show multiple toasts simultaneously.
* **Handle multiple toast messages:** Multiple toast messages may overlap or interfere with each other if shown in rapid succession. Consider queuing or spacing out notifications appropriately.

***

### Limitations

Toast content is limited to plain text and can't include rich formatting, links, or interactive elements.

***

---



<a id="latest-targets"></a>


## Targets

Targets define where your POS UI extensions appear within [Shopify's Point of Sale interface](https://shopify.dev/docs/apps/build/pos) and what capabilities they receive.

Targets serve specific purposes: some render persistent UI elements within existing screens, others provide interactive menu items or buttons, and some launch full-screen modal experiences for complex workflows.

Use this reference to explore all available targets and understand where they appear in the POS interface.

![Extension targets overview](https://shopify.dev/assets/assets/images/api/pos-ui-extensions/targets-overview-images/targets-overview-hero-EQ3LjmEr.png)

***

### Cart details

The cart details screen appears when customers select items in a transaction to modify quantities, apply discounts, or access item-specific tools. This screen provides control over individual products during transaction building.

**Use cases**: Item-specific customizations, cart monitoring, or product configuration tools that improve line item management.

[View cart details targets →](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/cart-details)

###### Cart details action (menu item)

`pos.cart.line-item-details.action.menu-item.render`

An action target that displays as a menu item on the cart line item details screen.

###### Cart details action (modal)

`pos.cart.line-item-details.action.render`

An action target that displays as a modal when a cart line item action menu item is tapped.

![Cart details menu item action target](https://shopify.dev/assets/assets/images/api/pos-ui-extensions/targets-overview-images/cart-details-menu-item-render-jLl5EgM3.png)

![Cart details modal action target](https://shopify.dev/assets/assets/images/api/pos-ui-extensions/targets-overview-images/cart-details-modal-render-BFkDZDZj.png)

***

### Customer details

The customer details screen appears when merchants look up a customer during checkout or need to access customer history and profile information. This screen serves as the hub for customer management within POS, displaying customer data, purchase history, and contact details.

**Use cases**: Customer service capabilities, loyalty program integration, or tools for customer engagement and support during transactions.

[View customer details targets →](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/customer-details)

###### Customer details block

`pos.customer-details.block.render`

A block target that displays inline content within the customer details screen.

###### Customer details action (menu item)

`pos.customer-details.action.menu-item.render`

An action target that displays as a menu item on the customer details screen action menu.

###### Customer details action (modal)

`pos.customer-details.action.render`

An action target that displays as a modal when a customer details action menu item is tapped.

![Customer details block target](https://shopify.dev/assets/assets/images/api/pos-ui-extensions/targets-overview-images/customer-details-block-render-DAsZIa2K.png)

![Customer details menu item action target](https://shopify.dev/assets/assets/images/api/pos-ui-extensions/targets-overview-images/customer-details-menu-item-render-C5M6Rq_U.png)

![Customer details modal action target](https://shopify.dev/assets/assets/images/api/pos-ui-extensions/targets-overview-images/customer-details-modal-render-DRjcbJbh.png)

***

### Draft order details

The draft order details screen appears when merchants access saved orders, quotes, or incomplete transactions that need to be finalized later. This screen displays draft order information, customer details, and line items for sales that haven't been completed.

**Use cases**: Quote management, approval workflows, or integration with external systems for draft order processing and completion.

[View draft order details targets →](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/draft-order-details)

###### Draft order details block

`pos.draft-order-details.block.render`

A block target that displays inline content within the draft order details screen.

###### Draft order details action (menu item)

`pos.draft-order-details.action.menu-item.render`

An action target that displays as a menu item on the draft order details screen action menu.

###### Draft order details action (modal)

`pos.draft-order-details.action.render`

An action target that displays as a modal when a draft order details action menu item is tapped.

![Draft order details block target](https://shopify.dev/assets/assets/images/api/pos-ui-extensions/targets-overview-images/draft-order-block-render-BY_i0_jR.png)

![Draft order details menu item action target](https://shopify.dev/assets/assets/images/api/pos-ui-extensions/targets-overview-images/draft-order-menu-item-render-TUZMJLb3.png)

![Draft order details modal action target](https://shopify.dev/assets/assets/images/api/pos-ui-extensions/targets-overview-images/draft-order-modal-render-BAswaBFY.png)

***

### Home screen (smart grid)

The smart grid is the first screen merchants see when they open [the POS app](https://apps.shopify.com/shopify-pos). It provides quick access to essential functions and serves as the starting point for merchant activities.

**Use cases**: High-frequency actions, status displays, or entry points to workflows that merchants need daily.

[View home screen targets →](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/home-screen)

###### Home screen tile

`pos.home.tile.render`

A tile target that displays as a clickable tile on the POS home screen smart grid.

###### Home screen action (modal)

`pos.home.modal.render`

An action target that displays as a full-screen modal when a home screen tile is tapped.

![Home screen tile target](https://shopify.dev/assets/assets/images/api/pos-ui-extensions/targets-overview-images/home-tile-render-BLpqYBnr.png)

![Home screen modal target](https://shopify.dev/assets/assets/images/api/pos-ui-extensions/targets-overview-images/home-modal-render-CENBsTmv.png)

***

### Order details

The order details screen appears when merchants access a completed transaction for customer service, refunds, or order fulfillment tasks. This screen displays transaction information including customer details, payment data, line items, and fulfillment status for completed sales.

**Use cases**: Order management, fulfillment tools, or integration with external systems for post-sale processing and customer support.

[View order details targets →](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/order-details)

###### Order details block

`pos.order-details.block.render`

A block target that displays inline content within the order details screen.

###### Order details action (menu item)

`pos.order-details.action.menu-item.render`

An action target that displays as a menu item on the order details screen action menu.

###### Order details action (modal)

`pos.order-details.action.render`

An action target that displays as a modal when an order details action menu item is tapped.

![Order details block target](https://shopify.dev/assets/assets/images/api/pos-ui-extensions/targets-overview-images/order-details-block-render-D9oKyw0e.png)

![Order details menu item action target](https://shopify.dev/assets/assets/images/api/pos-ui-extensions/targets-overview-images/order-details-menu-item-render-BYfP_PnY.png)

![Order details modal action target](https://shopify.dev/assets/assets/images/api/pos-ui-extensions/targets-overview-images/order-details-modal-render-CQOvyY2S.png)

***

### Post-exchange

The post-exchange screen appears after merchants complete an exchange transaction. This screen displays the exchange summary including exchanged items, price adjustments, and exchange details, providing opportunities for customer service and follow-up actions.

**Use cases**: Exchange management, inventory tracking tools, or customer service features for product exchanges.

**Beta:**

Post-exchange targets are part of the POS UI extensions [feature preview](https://shopify.dev/docs/api/feature-previews). This feature preview is invite-only and requires POS UI extensions version 2025-07 or higher and POS app version 9.31.0 or later.

[View post-exchange targets →](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-exchange)

###### Post-exchange block

`pos.exchange.post.block.render`

A block target that displays inline content within the post-exchange screen.

###### Post-exchange action (menu item)

`pos.exchange.post.action.menu-item.render`

An action target that displays as a menu item on the post-exchange screen action menu.

###### Post-exchange action (modal)

`pos.exchange.post.action.render`

An action target that displays as a modal when a post-exchange action menu item is tapped.

![Post-exchange block target](https://shopify.dev/assets/assets/images/api/pos-ui-extensions/targets-overview-images/post-exchange-block-render-AhLKmMp4.png)

![Post-exchange menu item action target](https://shopify.dev/assets/assets/images/api/pos-ui-extensions/targets-overview-images/post-exchange-menu-item-render-DIuxCL-j.png)

![Post-exchange modal action target](https://shopify.dev/assets/assets/images/api/pos-ui-extensions/targets-overview-images/post-exchange-modal-render-CHyT0RzR.png)

***

### Post-purchase

The post-purchase screen appears after merchants complete a sale, return, or exchange transaction. This screen displays the transaction summary and provides opportunities for follow-up actions, customer service, and revenue generation.

**Use cases**: Capturing additional information, customer service tools, or related transactions that improve the post-sale customer experience.

[View post-purchase targets →](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-purchase)

###### Post-purchase block

`pos.purchase.post.block.render`

A block target that displays inline content within the post-purchase screen.

###### Post-purchase action (menu item)

`pos.purchase.post.action.menu-item.render`

An action target that displays as a menu item on the post-purchase screen action menu.

###### Post-purchase action (modal)

`pos.purchase.post.action.render`

An action target that displays as a modal when a post-purchase action menu item is tapped.

![Post-purchase block target](https://shopify.dev/assets/assets/images/api/pos-ui-extensions/targets-overview-images/post-purchase-block-render-D0D8LK0O.png)

![Post-purchase menu item action target](https://shopify.dev/assets/assets/images/api/pos-ui-extensions/targets-overview-images/post-purchase-menu-item-render-x40yByUf.png)

![Post-purchase modal action target](https://shopify.dev/assets/assets/images/api/pos-ui-extensions/targets-overview-images/post-purchase-modal-render-DVbNAzop.png)

***

### Post-return

The post-return screen appears after merchants complete a return transaction. This screen displays the return summary including returned items, refund amounts, and return reason, providing opportunities for customer service and follow-up actions.

**Use cases**: Return-specific tools, refund processing, or customer service features for return workflows.

**Beta:**

Post-return targets are part of the POS UI extensions [feature preview](https://shopify.dev/docs/api/feature-previews). This feature preview is invite-only and requires POS UI extensions version 2025-07 or higher and POS app version 9.31.0 or later.

[View post-return targets →](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-return)

###### Post-return block

`pos.return.post.block.render`

A block target that displays inline content within the post-return screen.

###### Post-return action (menu item)

`pos.return.post.action.menu-item.render`

An action target that displays as a menu item on the post-return screen action menu.

###### Post-return action (modal)

`pos.return.post.action.render`

An action target that displays as a modal when a post-return action menu item is tapped.

![Post-return block target](https://shopify.dev/assets/assets/images/api/pos-ui-extensions/targets-overview-images/post-return-block-render-BakoLmTj.png)

![Post-return menu item action target](https://shopify.dev/assets/assets/images/api/pos-ui-extensions/targets-overview-images/post-return-menu-item-render-ZuqUt75Z.png)

![Post-return modal action target](https://shopify.dev/assets/assets/images/api/pos-ui-extensions/targets-overview-images/post-return-modal-render-DzlpPDUg.png)

***

### Product details

The product details screen appears when merchants search for a product, scan a barcode, or browse inventory during a transaction. This screen displays product information including pricing, inventory levels, variants, and product specifications that merchants need to serve customers.

**Use cases**: Product understanding, additional product data, or product-specific tools that help merchants make informed decisions during transaction building.

[View product details targets →](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details)

###### Product details block

`pos.product-details.block.render`

A block target that displays inline content within the product details screen.

###### Product details action (menu item)

`pos.product-details.action.menu-item.render`

An action target that displays as a menu item on the product details screen action menu.

###### Product details action (modal)

`pos.product-details.action.render`

An action target that displays as a modal when a product details action menu item is tapped.

![Product details block target](https://shopify.dev/assets/assets/images/api/pos-ui-extensions/targets-overview-images/product-details-block-render-BGkLbrh5.png)

![Product details menu item action target](https://shopify.dev/assets/assets/images/api/pos-ui-extensions/targets-overview-images/product-details-menu-item-render-CtCQMWN2.png)

![Product details modal action target](https://shopify.dev/assets/assets/images/api/pos-ui-extensions/targets-overview-images/product-details-modal-render-zOdzHi1W.png)

***

### Receipts

The receipt appears as the printed or digital output that customers receive after completing a transaction. This receipt displays transaction details, payment information, and store branding, providing the last touchpoint in the customer experience.

**Use cases**: Custom content in receipt headers and footers, branding opportunities, promotional messages, or transaction details that improve the customer experience.

**Beta:**

Receipt targets are part of the POS UI extensions [feature preview](https://shopify.dev/docs/api/feature-previews). This feature preview is invite-only and requires POS UI extensions version 2025-04 or higher and POS app version 9.31.0 or later.

[View receipt targets →](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/receipts)

###### Receipt block (header)

`pos.receipt-header.block.render`

A block target that displays custom content in receipt headers for printed and digital receipts.

###### Receipt block (footer)

`pos.receipt-footer.block.render`

A block target that displays custom content in receipt footers for printed and digital receipts.

![Receipt header block target](https://shopify.dev/assets/assets/images/api/pos-ui-extensions/targets-overview-images/receipts-header-block-render-CawGpwXn.png)

![Receipt footer block target](https://shopify.dev/assets/assets/images/api/pos-ui-extensions/targets-overview-images/receipts-footer-block-render-DWy10BWH.png)

***

### Register details

The register details screen displays information about the current register and cash drawer status. This screen provides access to cash management operations and register-specific tools for retail staff.

**Use cases**: Cash drawer operations, cash management workflows, register verification tools, or compliance features for cash handling and register operations.

[View register details targets →](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/register-details)

###### Register details block

`pos.register-details.block.render`

A block target that displays inline content within the register details screen.

###### Register details action (menu item)

`pos.register-details.action.menu-item.render`

An action target that displays as a menu item on the register details screen action menu.

###### Register details action (modal)

`pos.register-details.action.render`

An action target that displays as a modal when a register details action menu item is tapped.

![Register details block target](https://shopify.dev/assets/assets/images/api/pos-ui-extensions/targets-overview-images/register-block-render-DmQRvcV-.png)

![Register details menu item action target](https://shopify.dev/assets/assets/images/api/pos-ui-extensions/targets-overview-images/register-menu-item-render-B2QI3bBx.png)

![Register details modal action target](https://shopify.dev/assets/assets/images/api/pos-ui-extensions/targets-overview-images/register-modal-render-DcWdupxp.png)

***

---



<a id="latest-targets-cart-details"></a>


## Cart details

The cart details screen appears when customers select items in a transaction to modify quantities, apply discounts, or access item-specific tools. This screen provides control over individual products during transaction building.

#### Use cases

* **Item discounts:** Apply discounts based on customer loyalty status or product attributes.
* **Line item properties:** Add custom properties for inventory tracking or special handling.
* **Product verification:** Launch verification workflows for high-value or restricted items.
* **Item modifications:** Process returns, exchanges, or adjustments without affecting the entire cart.

![Cart details targets overview](https://shopify.dev/assets/assets/images/api/pos-ui-extensions/targets-overview-images/cart-details-targets-DPch98-L.png)

***

### Cart details targets

Use these targets for item-specific customizations, cart monitoring, or product configuration tools that improve line item management.

#### Cart details action (menu item) target

`pos.cart.line-item-details.action.menu-item.render`

Renders a single interactive button component as a menu item in the cart line item action menu. Use this target for item-specific operations like applying discounts, adding custom properties, or launching verification workflows for individual cart items.

Extensions at this target can access detailed line item information including title, quantity, price, discounts, properties, and product metadata through the Cart Line Item API. Menu items typically invoke `shopify.action.presentModal()` to launch the companion [modal](#cart-details-action-modal-) for complete workflows.

#### Support Components (1) APIs (13)

#### Supported components

* [Button](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/actions/button)

#### Available APIs

* [Action API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/action-api)
* [Camera API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/camera-api)
* [Cart API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/contextual-apis/cart-api)
* [Cart Line Item API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/contextual-apis/cart-line-item-api)
* [Connectivity API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/connectivity-api)
* [Device API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/device-api)
* [Locale API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/locale-api)
* [Pin​Pad API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/pinpad-api)
* [Print API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/print-api)
* [Product Search API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/product-search-api)
* [Session API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/session-api)
* [Storage API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/storage-api)
* [Toast API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/toast-api)

Examples

#### Examples

* ####

  ##### Description

  Add an interactive menu item to the cart line item action menu for item-specific operations. This example shows how to create a menu item that accesses line item data and launches modal workflows for tasks like applying discounts, adding custom properties, or verification workflows.

  ##### jsx

  ```jsx
  import {render} from 'preact';

  export default async () => {
    render(<Extension />, document.body);
  };

  const Extension = () => {
    return (
      <s-button
        onClick={() => shopify.action.presentModal()}
      />
    );
  };
  ```

#### Cart details action (modal) target

`pos.cart.line-item-details.action.render`

Renders a full-screen modal interface launched from cart line item [menu items](#cart-details-action-menu-item-). Use this target for complex line item workflows that require forms, multi-step processes, or detailed information displays beyond what a simple button can provide.

Extensions at this target have access to detailed line item data through the Cart Line Item API and support workflows with multiple screens, navigation, and interactive components.

#### Support Components (34) APIs (14)

#### Supported components

* [Badge](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/feedback-and-status-indicators/badge)
* [Banner](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/feedback-and-status-indicators/banner)
* [Box](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/box)
* [Button](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/actions/button)
* [Choice list](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/choice-list)
* [Clickable](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/actions/clickable)
* [Date field](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/date-field)
* [Date picker](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/date-picker)
* [Date spinner](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/date-spinner)
* [Divider](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/divider)
* [Email field](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/email-field)
* [Embed](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/media-and-visuals/embed)
* [Empty state](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/empty-state)
* [Heading](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/heading)
* [Icon](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/media-and-visuals/icon)
* [Image](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/media-and-visuals/image)
* [Link](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/actions/link)
* [Modal](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/feedback-and-status-indicators/modal)
* [Number field](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/number-field)
* [Pos block](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/pos-block)
* [Page](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/page)
* [Pos block](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/pos-block)
* [Scroll box](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/scroll-box)
* [Search field](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/search-field)
* [Section](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/section)
* [Spinner](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/feedback-and-status-indicators/spinner)
* [Stack](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/stack)
* [Switch](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/switch)
* [Tabs](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/tabs)
* [Text](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/text)
* [Text area](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/text-area)
* [Text field](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/text-field)
* [Time field](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/time-field)
* [Time picker](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/time-picker)

#### Available APIs

* [Action API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/action-api)
* [Camera API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/camera-api)
* [Cart API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/contextual-apis/cart-api)
* [Cart Line Item API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/contextual-apis/cart-line-item-api)
* [Connectivity API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/connectivity-api)
* [Device API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/device-api)
* [Locale API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/locale-api)
* [Pin​Pad API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/pinpad-api)
* [Print API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/print-api)
* [Product Search API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/product-search-api)
* [Scanner API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/scanner-api)
* [Session API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/session-api)
* [Storage API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/storage-api)
* [Toast API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/toast-api)

Examples

#### Examples

* ####

  ##### Description

  Build a full-screen modal workflow launched from a cart line item action menu item. This example demonstrates creating line item-specific experiences with multi-step processes, forms, and detailed line item data access for operations like customization or verification.

  ##### jsx

  ```jsx
  import {render} from 'preact';

  export default async () => {
    render(<Extension />, document.body);
  };

  const Extension = () => {
    return (
      <s-page heading='Cart Line Item Details'>
        <s-scroll-box>
          <s-text>Cart Line item action extension</s-text>
        </s-scroll-box>
      </s-page>
    );
  };
  ```

***

### Best practices

* **Update info in real time:** Update line item information immediately when changes occur to reflect current state.
* **Show clear confirmations:** Display success or error messages specifying which item was affected and what changed.
* **Ensure cart integration:** Reflect line item changes immediately in overall cart totals and state.
* **Communicate limitations clearly:** Show item-specific constraints through disabled buttons, modal messages, or error text.
* **Use item-specific labels:** Reference the specific item in labels and confirmations, like "10% discount applied to Blue Sweater (Large)."
* **Show item identification:** Display product title, variant, and current state like applied discounts or eligibility.

***

### Limitations

* You can only render one [button](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/actions/button) component for each POS UI extension using the action (menu item) target.

* Cart line item data is read-only through the [Cart Line Item API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/contextual-apis/cart-line-item-api). To modify line items, use the [Cart API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/contextual-apis/cart-api) methods for adding properties, setting discounts, or removing items.

***

---



<a id="latest-targets-customer-details"></a>


## Customer details

The customer details screen appears when merchants look up a customer during checkout or need to access customer history and profile information. This screen serves as the hub for customer management within POS, displaying customer data, purchase history, and contact details.

#### Use cases

* **Loyalty programs:** Display loyalty status, points balance, and tier information.
* **Customer discounts:** Apply personalized discounts based on membership level or purchase history.
* **Profile management:** Launch workflows for updating customer preferences and communication settings.
* **Customer service:** Process loyalty redemptions, account adjustments, and service requests.

![Customer details targets overview](https://shopify.dev/assets/assets/images/api/pos-ui-extensions/targets-overview-images/customer-details-targets-nY8BY00b.png)

***

### Customer details targets

Use these targets for customer service capabilities, loyalty program integration, or tools for customer engagement and support during transactions.

#### Customer details block target

`pos.customer-details.block.render`

Renders a custom information section within the customer details screen. Use this target for displaying supplementary customer data like loyalty status, points balance, or personalized information alongside standard customer details.

Extensions at this target appear as persistent blocks within the customer details interface and support interactive elements that can launch modal workflows using `shopify.action.presentModal()` for more complex customer operations.

#### Support Components (15) APIs (13)

#### Supported components

* [Badge](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/feedback-and-status-indicators/badge)
* [Box](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/box)
* [Button](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/actions/button)
* [Date picker](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/date-picker)
* [Date spinner](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/date-spinner)
* [Heading](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/heading)
* [Icon](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/media-and-visuals/icon)
* [Image](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/media-and-visuals/image)
* [Modal](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/feedback-and-status-indicators/modal)
* [Pos block](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/pos-block)
* [Pos block](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/pos-block)
* [Section](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/section)
* [Stack](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/stack)
* [Text](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/text)
* [Time picker](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/time-picker)

#### Available APIs

* [Action API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/action-api)
* [Camera API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/camera-api)
* [Cart API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/contextual-apis/cart-api)
* [Connectivity API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/connectivity-api)
* [Customer API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/contextual-apis/customer-api)
* [Device API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/device-api)
* [Locale API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/locale-api)
* [Pin​Pad API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/pinpad-api)
* [Print API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/print-api)
* [Product Search API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/product-search-api)
* [Session API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/session-api)
* [Storage API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/storage-api)
* [Toast API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/toast-api)

Examples

#### Examples

* ####

  ##### Description

  Add a custom information section to the customer details screen for displaying supplementary customer data. This example shows how to create a block that shows loyalty status, points balance, or personalized information alongside standard customer details.

  ##### jsx

  ```jsx
  import {render} from 'preact';

  export default async () => {
    render(<Extension />, document.body);
  };

  const Extension = () => {
    return (
      <s-pos-block>
        <s-button
          slot="secondary-actions"
          onClick={() => shopify.action.presentModal()}
        >
          Open action
        </s-button>
        <s-text>This is a block extension</s-text>
        <s-text>Customer ID for this customer: {shopify.customer.id}</s-text>
      </s-pos-block>
    );
  };
  ```

#### Customer details action (menu item) target

`pos.customer-details.action.menu-item.render`

Renders a single interactive button component as a menu item in the customer details action menu. Use this target for customer-specific operations like applying customer discounts, processing loyalty redemptions, or launching profile update workflows.

Extensions at this target can access the customer identifier through the Customer API to perform customer-specific operations. Menu items typically invoke `shopify.action.presentModal()` to launch the companion [modal](#customer-details-action-modal-) for complete customer workflows.

#### Support Components (1) APIs (13)

#### Supported components

* [Button](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/actions/button)

#### Available APIs

* [Action API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/action-api)
* [Camera API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/camera-api)
* [Cart API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/contextual-apis/cart-api)
* [Connectivity API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/connectivity-api)
* [Customer API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/contextual-apis/customer-api)
* [Device API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/device-api)
* [Locale API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/locale-api)
* [Pin​Pad API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/pinpad-api)
* [Print API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/print-api)
* [Product Search API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/product-search-api)
* [Session API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/session-api)
* [Storage API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/storage-api)
* [Toast API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/toast-api)

Examples

#### Examples

* ####

  ##### Description

  Add an interactive menu item to the customer details action menu for customer-specific operations. This example shows how to create a menu item that accesses customer data and launches modal workflows for tasks like applying loyalty rewards, updating profiles, or managing customer preferences.

  ##### jsx

  ```jsx
  import {render} from 'preact';

  export default async () => {
    render(<Extension />, document.body);
  };

  const Extension = () => {
    return (
      <s-button
        onClick={() => shopify.action.presentModal()}
      />
    );
  };
  ```

#### Customer details action (modal) target

`pos.customer-details.action.render`

Renders a full-screen modal interface launched from customer details [menu items](#customer-details-action-menu-item-). Use this target for complex customer workflows that require forms, multi-step processes, or detailed information displays beyond what a simple button can provide.

Extensions at this target have access to customer data through the Customer API and support workflows with multiple screens, navigation, and interactive components.

#### Support Components (34) APIs (13)

#### Supported components

* [Badge](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/feedback-and-status-indicators/badge)
* [Banner](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/feedback-and-status-indicators/banner)
* [Box](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/box)
* [Button](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/actions/button)
* [Choice list](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/choice-list)
* [Clickable](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/actions/clickable)
* [Date field](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/date-field)
* [Date picker](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/date-picker)
* [Date spinner](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/date-spinner)
* [Divider](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/divider)
* [Email field](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/email-field)
* [Embed](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/media-and-visuals/embed)
* [Empty state](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/empty-state)
* [Heading](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/heading)
* [Icon](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/media-and-visuals/icon)
* [Image](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/media-and-visuals/image)
* [Link](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/actions/link)
* [Modal](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/feedback-and-status-indicators/modal)
* [Number field](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/number-field)
* [Pos block](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/pos-block)
* [Page](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/page)
* [Pos block](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/pos-block)
* [Scroll box](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/scroll-box)
* [Search field](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/search-field)
* [Section](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/section)
* [Spinner](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/feedback-and-status-indicators/spinner)
* [Stack](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/stack)
* [Switch](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/switch)
* [Tabs](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/tabs)
* [Text](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/text)
* [Text area](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/text-area)
* [Text field](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/text-field)
* [Time field](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/time-field)
* [Time picker](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/time-picker)

#### Available APIs

* [Camera API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/camera-api)
* [Cart API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/contextual-apis/cart-api)
* [Connectivity API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/connectivity-api)
* [Customer API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/contextual-apis/customer-api)
* [Device API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/device-api)
* [Locale API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/locale-api)
* [Pin​Pad API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/pinpad-api)
* [Print API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/print-api)
* [Product Search API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/product-search-api)
* [Scanner API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/scanner-api)
* [Session API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/session-api)
* [Storage API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/storage-api)
* [Toast API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/toast-api)

Examples

#### Examples

* ####

  ##### Description

  Build a full-screen modal workflow launched from a customer details action menu item. This example demonstrates creating customer-specific experiences with multi-step processes, forms, and customer data access for operations like loyalty management or profile updates.

  ##### jsx

  ```jsx
  import {render} from 'preact';

  export default async () => {
    render(<Extension />, document.body);
  };

  const Extension = () => {
    return (
      <s-page heading='Customer Details'>
        <s-scroll-box>
          <s-text>Customer ID: {shopify.customer.id}</s-text>
        </s-scroll-box>
      </s-page>
    );
  };
  ```

***

### Best practices

* **Update info in real time:** Update customer information immediately when changes occur to reflect current state.
* **Show clear confirmations:** Display messages specifying which customer was affected, like "Loyalty points updated for Jane Doe."
* **Ensure service continuity:** Integrate customer changes with the overall transaction and relationship.
* **Handle data responsibly:** Communicate limitations clearly. Display only necessary information and explain data collection or processing.
* **Write action-oriented labels:** Use specific labels like "Update loyalty tier" instead of generic terms like "Customer App."
* **Show status and metrics:** Display tier, points, VIP status, and action eligibility to support decisions.

***

### Limitations

* You can only render one [button](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/actions/button) component for each POS UI extension using the action (menu item) target.

* Customer data is read-only through the [Customer API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/contextual-apis/customer-api), which provides only the customer ID. To access additional customer information or modify customer data, use external API calls or integrate with the Customer API through your app backend.

***

---



<a id="latest-targets-draft-order-details"></a>


## Draft order details

The draft order details screen appears when merchants access saved orders, quotes, or incomplete transactions that need to be finalized later. This screen displays draft order information, customer details, and line items for sales that haven't been completed.

#### Use cases

* **Order status:** Display approval requirements, processing notes, and estimated delivery dates.
* **Pricing adjustments:** Apply special pricing, bulk discounts, or approval-based modifications.
* **Order completion:** Launch fulfillment preparation and customer communication workflows.
* **Approval workflows:** Process approvals, modifications, and manager escalations.

![Draft order details targets overview](https://shopify.dev/assets/assets/images/api/pos-ui-extensions/targets-overview-images/draft-order-targets-ONZfNSBW.png)

***

### Draft order details targets

Use these targets for quote management, approval workflows, or integration with external systems for draft order processing and completion.

#### Draft order details block target

`pos.draft-order-details.block.render`

Renders a custom information section within the draft order details screen. Use this target for displaying supplementary order information like processing status, payment status, or workflow indicators alongside standard draft order details.

Extensions at this target appear as persistent blocks within the draft order interface and support interactive elements that can launch modal workflows using `shopify.action.presentModal()` for more complex draft order operations.

#### Support Components (15) APIs (13)

#### Supported components

* [Badge](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/feedback-and-status-indicators/badge)
* [Box](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/box)
* [Button](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/actions/button)
* [Date picker](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/date-picker)
* [Date spinner](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/date-spinner)
* [Heading](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/heading)
* [Icon](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/media-and-visuals/icon)
* [Image](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/media-and-visuals/image)
* [Modal](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/feedback-and-status-indicators/modal)
* [Pos block](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/pos-block)
* [Pos block](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/pos-block)
* [Section](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/section)
* [Stack](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/stack)
* [Text](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/text)
* [Time picker](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/time-picker)

#### Available APIs

* [Action API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/action-api)
* [Camera API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/camera-api)
* [Cart API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/contextual-apis/cart-api)
* [Connectivity API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/connectivity-api)
* [Device API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/device-api)
* [Draft Order API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/contextual-apis/draft-order-api)
* [Locale API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/locale-api)
* [Pin​Pad API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/pinpad-api)
* [Print API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/print-api)
* [Product Search API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/product-search-api)
* [Session API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/session-api)
* [Storage API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/storage-api)
* [Toast API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/toast-api)

Examples

#### Examples

* ####

  ##### Description

  Add a custom information section to the draft order details screen for displaying supplementary draft order data. This example shows how to create a block that provides additional draft order information, payment status, or custom order notes alongside standard draft order details.

  ##### jsx

  ```jsx
  import {render} from 'preact';

  export default async () => {
    render(<Extension />, document.body);
  };

  const Extension = () => {
    return (
      <s-pos-block>
        <s-button
          slot="secondary-actions"
          onClick={() => shopify.action.presentModal()}
        >
          Open action
        </s-button>
        <s-text>This is a block extension</s-text>
        <s-text>Draft Order ID for this product: {shopify.draftOrder.id}</s-text>
      </s-pos-block>
    );
  };
  ```

#### Draft order details action (menu item) target

`pos.draft-order-details.action.menu-item.render`

Renders a single interactive button component as a menu item in the draft order details action menu. Use this target for draft order-specific operations like sending invoices, updating payment status, or launching custom workflow processes for pending orders.

Extensions at this target can access draft order information including order ID, name, and associated customer through the Draft Order API. Menu items typically invoke `shopify.action.presentModal()` to launch the companion [modal](#draft-order-details-action-modal-) for complete draft order workflows.

#### Support Components (1) APIs (13)

#### Supported components

* [Button](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/actions/button)

#### Available APIs

* [Action API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/action-api)
* [Camera API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/camera-api)
* [Cart API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/contextual-apis/cart-api)
* [Connectivity API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/connectivity-api)
* [Device API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/device-api)
* [Draft Order API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/contextual-apis/draft-order-api)
* [Locale API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/locale-api)
* [Pin​Pad API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/pinpad-api)
* [Print API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/print-api)
* [Product Search API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/product-search-api)
* [Session API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/session-api)
* [Storage API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/storage-api)
* [Toast API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/toast-api)

Examples

#### Examples

* ####

  ##### Description

  Add an interactive menu item to the draft order details action menu for draft order-specific operations. This example shows how to create a menu item that accesses draft order data and launches modal workflows for tasks like sending invoices, updating payment status, or custom workflow processes.

  ##### jsx

  ```jsx
  import {render} from 'preact';

  export default async () => {
    render(<Extension />, document.body);
  };

  const Extension = () => {
    return (
      <s-button
        onClick={() => shopify.action.presentModal()}
      />
    );
  };
  ```

#### Draft order details action (modal) target

`pos.draft-order-details.action.render`

Renders a full-screen modal interface launched from draft order details [menu items](#draft-order-details-action-menu-item-). Use this target for complex draft order workflows that require forms, multi-step processes, or detailed information displays beyond what a simple button can provide.

Extensions at this target have access to draft order data through the Draft Order API and support workflows with multiple screens, navigation, and interactive components.

#### Support Components (34) APIs (13)

#### Supported components

* [Badge](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/feedback-and-status-indicators/badge)
* [Banner](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/feedback-and-status-indicators/banner)
* [Box](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/box)
* [Button](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/actions/button)
* [Choice list](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/choice-list)
* [Clickable](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/actions/clickable)
* [Date field](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/date-field)
* [Date picker](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/date-picker)
* [Date spinner](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/date-spinner)
* [Divider](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/divider)
* [Email field](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/email-field)
* [Embed](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/media-and-visuals/embed)
* [Empty state](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/empty-state)
* [Heading](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/heading)
* [Icon](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/media-and-visuals/icon)
* [Image](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/media-and-visuals/image)
* [Link](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/actions/link)
* [Modal](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/feedback-and-status-indicators/modal)
* [Number field](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/number-field)
* [Pos block](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/pos-block)
* [Page](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/page)
* [Pos block](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/pos-block)
* [Scroll box](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/scroll-box)
* [Search field](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/search-field)
* [Section](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/section)
* [Spinner](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/feedback-and-status-indicators/spinner)
* [Stack](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/stack)
* [Switch](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/switch)
* [Tabs](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/tabs)
* [Text](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/text)
* [Text area](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/text-area)
* [Text field](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/text-field)
* [Time field](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/time-field)
* [Time picker](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/time-picker)

#### Available APIs

* [Camera API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/camera-api)
* [Cart API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/contextual-apis/cart-api)
* [Connectivity API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/connectivity-api)
* [Device API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/device-api)
* [Draft Order API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/contextual-apis/draft-order-api)
* [Locale API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/locale-api)
* [Pin​Pad API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/pinpad-api)
* [Print API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/print-api)
* [Product Search API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/product-search-api)
* [Scanner API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/scanner-api)
* [Session API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/session-api)
* [Storage API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/storage-api)
* [Toast API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/toast-api)

Examples

#### Examples

* ####

  ##### Description

  Build a full-screen modal workflow launched from a draft order details action menu item. This example demonstrates creating draft order-specific experiences with multi-step processes, forms, and draft order data access for operations like payment processing or order modifications.

  ##### jsx

  ```jsx
  import {render} from 'preact';

  export default async () => {
    render(<Extension />, document.body);
  };

  const Extension = () => {
    return (
      <s-page heading='Draft Order Details Action'>
        <s-scroll-box>
          <s-text>Order ID: {shopify.draftOrder.id}</s-text>
        </s-scroll-box>
      </s-page>
    );
  };
  ```

***

### Best practices

* **Update draft order information in real time:** Update displayed draft order information immediately when changes are made to reflect current state, like updated order status, refreshed approval state, and changed processing notes.
* **Show clear action confirmations:** Show clear success or error messages that specify which draft order was affected. Use messages like "Draft order #1001 completed successfully," "Approval request sent to manager," or "Unable to process - customer payment failed".
* **Ensure workflow continuity:** Ensure that draft order changes integrate properly with the overall order processing and fulfillment systems, like updated order status, triggered notifications, and recorded workflow steps.
* **Handle error states gracefully:** Communicate draft order processing requirements and limitations clearly. If your extension modifies draft orders or triggers processing workflows, ensure you handle state transitions responsibly, provide clear feedback about processing stages, and communicate any requirements or restrictions that affect order completion or customer communication.
* **Write clear and action-oriented labels:** Use action-oriented labels that specify what will happen to this particular draft order, with descriptive titles that clearly indicate the information type. Use "Complete order" or "Approval Status" instead of generic labels like "Order options" or "Order App."
* **Show status and order information:** Show current draft order status, relevant details, and action eligibility to support workflow decisions, like order completion status, "Ready for completion," and draft order ID and customer.

***

### Limitations

* You can only render one [button](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/actions/button) component for each POS UI extension using the action (menu item) target.

* Draft order data is read-only through the [Draft Order API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/contextual-apis/draft-order-api), which provides the order ID, name, and customer ID. To access additional draft order information or modify draft orders, use external API calls or integrate with the Draft Order API through your app backend.

***

---



<a id="latest-targets-home-screen"></a>


## Home screen (smart grid)

The smart grid is the first screen merchants see when they open [the POS app](https://apps.shopify.com/shopify-pos). It provides quick access to essential functions and serves as the starting point for merchant activities.

#### Use cases

* **Sales analytics:** Display summaries and launch detailed reporting dashboards.
* **Inventory management:** Access scanning tools, stock alerts, and bulk operations.
* **Customer engagement:** Launch profile management and enrollment workflows.
* **Promotions:** Configure discounts and manage campaign status.

![Home screen targets overview](https://shopify.dev/assets/assets/images/api/pos-ui-extensions/targets-overview-images/home-overview-BPxYFUox.png)

***

### Home screen targets

Use these targets for high-frequency actions, status displays, or entry points to workflows that merchants need daily.

#### Home screen tile target

`pos.home.tile.render`

Renders a single interactive tile component on the POS home screen's smart grid. The tile appears once during home screen initialization and remains persistent until navigation occurs. Use this target for high-frequency actions, status displays, or entry points to workflows that merchants need daily.

Extensions at this target can dynamically update properties like enabled state and badge values in response to cart changes or device conditions. Tiles typically invoke `shopify.action.presentModal()` to launch the companion [modal](#home-screen-action-modal-) for complete workflows.

#### Support Components (1) APIs (12)

#### Supported components

* [Tile](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/actions/tile)

#### Available APIs

* [Action API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/action-api)
* [Camera API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/camera-api)
* [Cart API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/contextual-apis/cart-api)
* [Connectivity API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/connectivity-api)
* [Device API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/device-api)
* [Locale API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/locale-api)
* [Pin​Pad API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/pinpad-api)
* [Print API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/print-api)
* [Product Search API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/product-search-api)
* [Session API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/session-api)
* [Storage API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/storage-api)
* [Toast API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/toast-api)

Examples

#### Examples

* ####

  ##### Description

  Add an interactive tile to the POS home screen smart grid for high-frequency actions. This example shows how to create a persistent tile that can dynamically update its enabled state and badge values, providing merchants with quick access to daily workflows and status displays.

  ##### jsx

  ```jsx
  import {render} from 'preact';

  export default async () => {
    render(<Extension />, document.body);
  };

  const Extension = () => {
    return (
      <s-tile
        heading="My app"
        subheading="SmartGrid react Extension"
        onClick={() => {
          shopify.action.presentModal();
        }}
      />
    );
  };
  ```

#### Home screen action (modal) target

`pos.home.modal.render`

Renders a full-screen modal interface launched from smart grid tiles. The modal appears when users tap a companion [tile](#home-screen-tile-). Use this target for complete workflow experiences that require more space and functionality than the tile interface provides, such as multi-step processes, detailed information displays, or complex user interactions.

Extensions at this target support full navigation hierarchies with multiple screens, scroll views, and interactive components to handle sophisticated workflows.

#### Support Components (34) APIs (12)

#### Supported components

* [Badge](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/feedback-and-status-indicators/badge)
* [Banner](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/feedback-and-status-indicators/banner)
* [Box](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/box)
* [Button](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/actions/button)
* [Choice list](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/choice-list)
* [Clickable](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/actions/clickable)
* [Date field](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/date-field)
* [Date picker](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/date-picker)
* [Date spinner](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/date-spinner)
* [Divider](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/divider)
* [Email field](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/email-field)
* [Embed](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/media-and-visuals/embed)
* [Empty state](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/empty-state)
* [Heading](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/heading)
* [Icon](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/media-and-visuals/icon)
* [Image](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/media-and-visuals/image)
* [Link](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/actions/link)
* [Modal](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/feedback-and-status-indicators/modal)
* [Number field](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/number-field)
* [Pos block](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/pos-block)
* [Page](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/page)
* [Pos block](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/pos-block)
* [Scroll box](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/scroll-box)
* [Search field](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/search-field)
* [Section](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/section)
* [Spinner](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/feedback-and-status-indicators/spinner)
* [Stack](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/stack)
* [Switch](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/switch)
* [Tabs](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/tabs)
* [Text](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/text)
* [Text area](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/text-area)
* [Text field](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/text-field)
* [Time field](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/time-field)
* [Time picker](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/time-picker)

#### Available APIs

* [Camera API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/camera-api)
* [Cart API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/contextual-apis/cart-api)
* [Connectivity API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/connectivity-api)
* [Device API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/device-api)
* [Locale API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/locale-api)
* [Pin​Pad API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/pinpad-api)
* [Print API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/print-api)
* [Product Search API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/product-search-api)
* [Scanner API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/scanner-api)
* [Session API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/session-api)
* [Storage API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/storage-api)
* [Toast API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/toast-api)

Examples

#### Examples

* ####

  ##### Description

  Build a complete workflow experience launched from a smart grid tile. This example demonstrates creating a full-screen modal with navigation, multiple screens, and interactive components for sophisticated workflows that require more space than the tile interface provides.

  ##### jsx

  ```jsx
  import {render} from 'preact';

  export default async () => {
    render(<Extension />, document.body);
  };

  const Extension = () => {
    return (
      <s-page heading="Hello World!">
        <s-scroll-box>
          <s-text>Welcome to the extension!</s-text>
        </s-scroll-box>
      </s-page>
    );
  };
  ```

***

### Best practices

* **Update tiles immediately:** Update tile appearance when data changes to show the system responds to actions.
* **Show clear confirmations:** Display success or error messages in modals with specific details like "Discount applied successfully."
* **Use toasts for quick feedback:** Use toast messages for successful actions or errors without disrupting workflows.
* **Communicate error states clearly:** Show unavailable functionality through disabled tiles, modal messages, or error text explaining next steps.
* **Write action-oriented titles:** Use specific titles like "Apply loyalty discount" instead of generic labels like "Loyalty app."
* **Provide contextual information:** Show eligibility requirements, status, or context through subheadings and badge values.

***

### Limitations

You can only render one [tile](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/actions/tile) component for each POS UI extension.

***

---



<a id="latest-targets-order-details"></a>


## Order details

The order details screen appears when merchants access a completed transaction for customer service, refunds, or order fulfillment tasks. This screen displays transaction information including customer details, payment data, line items, and fulfillment status for completed sales.

#### Use cases

* **Fulfillment tracking:** Display status, tracking numbers, and special handling instructions.
* **Order processing:** Launch workflows for gift wrapping, packaging, or delivery scheduling.
* **Order modifications:** Adjust line items, apply discounts, or update customer information.
* **Post-sale actions:** Process reprints, refunds, exchanges, or customer communications.

![Order details targets overview](https://shopify.dev/assets/assets/images/api/pos-ui-extensions/targets-overview-images/order-details-overview-BeIPYTGu.png)

***

### Order details targets

Use these targets for order management capabilities, fulfillment workflows, or tools for order processing and analysis during transactions.

#### Order details block target

`pos.order-details.block.render`

Renders a custom information section within the order details screen. Use this target for displaying supplementary order data like fulfillment status, tracking numbers, or custom order analytics alongside standard order details.

Extensions at this target appear as persistent blocks within the order details interface and support interactive elements that can launch modal workflows using `shopify.action.presentModal()` for more complex order operations.

#### Support Components (15) APIs (13)

#### Supported components

* [Badge](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/feedback-and-status-indicators/badge)
* [Box](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/box)
* [Button](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/actions/button)
* [Date picker](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/date-picker)
* [Date spinner](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/date-spinner)
* [Heading](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/heading)
* [Icon](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/media-and-visuals/icon)
* [Image](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/media-and-visuals/image)
* [Modal](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/feedback-and-status-indicators/modal)
* [Pos block](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/pos-block)
* [Pos block](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/pos-block)
* [Section](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/section)
* [Stack](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/stack)
* [Text](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/text)
* [Time picker](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/time-picker)

#### Available APIs

* [Action API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/action-api)
* [Camera API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/camera-api)
* [Cart API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/contextual-apis/cart-api)
* [Connectivity API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/connectivity-api)
* [Device API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/device-api)
* [Locale API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/locale-api)
* [Order API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/contextual-apis/order-api)
* [Pin​Pad API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/pinpad-api)
* [Print API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/print-api)
* [Product Search API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/product-search-api)
* [Session API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/session-api)
* [Storage API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/storage-api)
* [Toast API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/toast-api)

Examples

#### Examples

* ####

  ##### Description

  Add a custom information section to the order details screen for displaying supplementary order data. This example shows how to create a block that provides additional order information, tracking details, or order-specific status alongside standard order details.

  ##### jsx

  ```jsx
  import {render} from 'preact';

  export default async () => {
    render(<Extension />, document.body);
  };

  const Extension = () => {
    return (
      <s-pos-block>
        <s-button
          slot="secondary-actions"
          onClick={() => shopify.action.presentModal()}
        >
          Open action
        </s-button>
        <s-text>This is a block extension</s-text>
        <s-text>Order ID: {shopify.order.id}</s-text>
      </s-pos-block>
    );
  };
  ```

#### Order details action (menu item) target

`pos.order-details.action.menu-item.render`

Renders a single interactive button component as a menu item in the order details action menu. Use this target for order-specific operations like reprints, refunds, exchanges, or launching fulfillment workflows.

Extensions at this target can access the order identifier through the Order API to perform order-specific operations. Menu items typically invoke `shopify.action.presentModal()` to launch the companion [modal](#order-details-action-modal-) for complete order workflows.

#### Support Components (1) APIs (13)

#### Supported components

* [Button](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/actions/button)

#### Available APIs

* [Action API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/action-api)
* [Camera API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/camera-api)
* [Cart API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/contextual-apis/cart-api)
* [Connectivity API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/connectivity-api)
* [Device API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/device-api)
* [Locale API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/locale-api)
* [Order API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/contextual-apis/order-api)
* [Pin​Pad API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/pinpad-api)
* [Print API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/print-api)
* [Product Search API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/product-search-api)
* [Session API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/session-api)
* [Storage API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/storage-api)
* [Toast API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/toast-api)

Examples

#### Examples

* ####

  ##### Description

  Add an interactive menu item to the order details action menu for order-specific operations. This example shows how to create a menu item that accesses order data and launches modal workflows for tasks like reprints, refunds, exchanges, or fulfillment processes.

  ##### jsx

  ```jsx
  import {render} from 'preact';

  export default async () => {
    render(<Extension />, document.body);
  };

  const Extension = () => {
    return (
      <s-button
        onClick={() => shopify.action.presentModal()}
      />
    );
  };
  ```

#### Order details action (modal) target

`pos.order-details.action.render`

Renders a full-screen modal interface launched from order details [menu items](#order-details-action-menu-item-). Use this target for complex order workflows that require forms, multi-step processes, or detailed information displays beyond what a simple button can provide.

Extensions at this target have access to order data through the Order API and support workflows with multiple screens, navigation, and interactive components.

#### Support Components (34) APIs (13)

#### Supported components

* [Badge](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/feedback-and-status-indicators/badge)
* [Banner](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/feedback-and-status-indicators/banner)
* [Box](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/box)
* [Button](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/actions/button)
* [Choice list](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/choice-list)
* [Clickable](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/actions/clickable)
* [Date field](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/date-field)
* [Date picker](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/date-picker)
* [Date spinner](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/date-spinner)
* [Divider](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/divider)
* [Email field](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/email-field)
* [Embed](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/media-and-visuals/embed)
* [Empty state](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/empty-state)
* [Heading](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/heading)
* [Icon](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/media-and-visuals/icon)
* [Image](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/media-and-visuals/image)
* [Link](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/actions/link)
* [Modal](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/feedback-and-status-indicators/modal)
* [Number field](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/number-field)
* [Pos block](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/pos-block)
* [Page](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/page)
* [Pos block](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/pos-block)
* [Scroll box](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/scroll-box)
* [Search field](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/search-field)
* [Section](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/section)
* [Spinner](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/feedback-and-status-indicators/spinner)
* [Stack](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/stack)
* [Switch](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/switch)
* [Tabs](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/tabs)
* [Text](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/text)
* [Text area](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/text-area)
* [Text field](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/text-field)
* [Time field](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/time-field)
* [Time picker](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/time-picker)

#### Available APIs

* [Camera API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/camera-api)
* [Cart API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/contextual-apis/cart-api)
* [Connectivity API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/connectivity-api)
* [Device API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/device-api)
* [Locale API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/locale-api)
* [Order API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/contextual-apis/order-api)
* [Pin​Pad API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/pinpad-api)
* [Print API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/print-api)
* [Product Search API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/product-search-api)
* [Scanner API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/scanner-api)
* [Session API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/session-api)
* [Storage API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/storage-api)
* [Toast API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/toast-api)

Examples

#### Examples

* ####

  ##### Description

  Build a full-screen modal workflow launched from an order details action menu item. This example demonstrates creating order-specific experiences with multi-step processes, forms, and order data access for operations like refund processing or fulfillment management.

  ##### jsx

  ```jsx
  import {render} from 'preact';

  export default async () => {
    render(<Extension />, document.body);
  };

  const Extension = () => {
    return (
      <s-page heading="Order Details Action">
        <s-scroll-box>
          <s-text>Order ID: {shopify.order.id}</s-text>
        </s-scroll-box>
      </s-page>
    );
  };
  ```

***

### Best practices

* **Update order information in real time:** Update displayed order information immediately when changes are made to reflect the current state, like updated fulfillment status, refreshed tracking information, and changed order notes.
* **Show clear action confirmations:** Show clear success or error messages that specify which order was affected. Use messages like "Order #1001 updated successfully," "Tracking number added to order," or "Unable to process - order not found".
* **Ensure order continuity:** Ensure that order-related changes integrate properly with the overall transaction and order lifecycle, like updated order status, applied additional discounts, and recorded fulfillment actions.
* **Handle error states gracefully:** Communicate order data limitations clearly instead of generic error messages. If your extension accesses or modifies order information, ensure you handle data responsibly, display only necessary information, and provide clear messaging about any data collection, processing, or sharing that occurs through your extension functionality.
* **Write clear and action-oriented labels:** Use action-oriented labels that specify what will happen for this particular order, with descriptive titles that clearly indicate the information type. Use "Add tracking number" or "Fulfillment Status" instead of generic labels like "Order options" or "Order App."
* **Show status and contextual data:** Show current order status, relevant metrics, and action eligibility to support fulfillment decisions, like fulfillment status and tracking, "Priority order - expedited shipping," and payment and refund history.

***

### Limitations

* You can only render one [button](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/actions/button) component for each POS UI extension using the action (menu item) target.

* Order data is read-only through the [Order API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/contextual-apis/order-api), which provides only the order ID, name, and customer ID. To access additional order information or modify order data, use external API calls or integrate with the Admin API through your app backend.

***

---



<a id="latest-targets-post-exchange"></a>


## Post-exchange

**Beta:**

Post-exchange targets are part of the POS UI extensions [feature preview](https://shopify.dev/docs/api/feature-previews). This feature preview is available on an invite-only basis and requires POS UI extensions version 2025-07 or higher and POS app version 9.31.0 or later.

The post-exchange screen appears after merchants complete an exchange transaction. This screen displays the exchange summary including exchanged items, price adjustments, and exchange details, providing opportunities for customer service and follow-up actions.

#### Use cases

* **Product exchanges:** Display exchange reasons, product condition notes, and warranty transfers.
* **Customer follow-up:** Launch satisfaction surveys, loyalty adjustments, and follow-up communications.
* **Exchange analytics:** Track exchange patterns, return rates, and customer behavior insights.
* **External integrations:** Connect with inventory, accounting, and CRM (Customer Relationship Management) systems.

![Post-exchange targets overview](https://shopify.dev/assets/assets/images/api/pos-ui-extensions/targets-overview-images/post-exchange-overview-7WzDrG8t.png)

***

### Post-exchange targets

Use these targets for exchange completion workflows, post-exchange analytics, or integration with external systems for exchange processing and follow-up.

#### Post-exchange block target

`pos.exchange.post.block.render`

Renders a custom information section within the post-exchange screen. Use this target for displaying supplementary exchange data like completion status, payment adjustments, or follow-up workflows alongside standard exchange details.

Extensions at this target appear as persistent blocks within the post-exchange interface and support interactive elements that can launch modal workflows using `shopify.action.presentModal()` for more complex post-exchange operations.

#### Support Components (15) APIs (12)

#### Supported components

* [Badge](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/feedback-and-status-indicators/badge)
* [Box](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/box)
* [Button](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/actions/button)
* [Date picker](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/date-picker)
* [Date spinner](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/date-spinner)
* [Heading](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/heading)
* [Icon](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/media-and-visuals/icon)
* [Image](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/media-and-visuals/image)
* [Modal](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/feedback-and-status-indicators/modal)
* [Pos block](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/pos-block)
* [Pos block](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/pos-block)
* [Section](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/section)
* [Stack](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/stack)
* [Text](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/text)
* [Time picker](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/time-picker)

#### Available APIs

* [Action API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/action-api)
* [Camera API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/camera-api)
* [Connectivity API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/connectivity-api)
* [Device API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/device-api)
* [Locale API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/locale-api)
* [Order API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/contextual-apis/order-api)
* [Pin​Pad API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/pinpad-api)
* [Print API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/print-api)
* [Product Search API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/product-search-api)
* [Session API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/session-api)
* [Storage API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/storage-api)
* [Toast API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/toast-api)

Examples

#### Examples

* ####

  ##### Description

  Add a custom information section to the post-exchange screen for displaying exchange details or status. This example shows how to create a block that provides supplementary information after completing an exchange, with interactive elements that can launch modal workflows.

  ##### jsx

  ```jsx
  import {render} from 'preact';

  export default async () => {
    render(<Extension />, document.body);
  };

  const Extension = () => {
    return (
      <s-pos-block>
        <s-button
          slot="secondary-actions"
          onClick={() => shopify.action.presentModal()}
        >
          Open action
        </s-button>
        <s-text>This is a block extension</s-text>
        <s-text>Order ID: {shopify.order.id}</s-text>
      </s-pos-block>
    );
  };
  ```

#### Post-exchange action (menu item) target

`pos.exchange.post.action.menu-item.render`

Renders a single interactive button component as a menu item in the post-exchange action menu. Use this target for post-exchange operations like generating exchange receipts, processing restocking workflows, or collecting exchange feedback.

Extensions at this target can access the order identifier through the Order API to perform exchange-specific operations. Menu items typically invoke `shopify.action.presentModal()` to launch the companion [modal](#post-exchange-action-modal-) for complete post-exchange workflows.

#### Support Components (1) APIs (12)

#### Supported components

* [Button](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/actions/button)

#### Available APIs

* [Action API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/action-api)
* [Camera API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/camera-api)
* [Connectivity API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/connectivity-api)
* [Device API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/device-api)
* [Locale API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/locale-api)
* [Order API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/contextual-apis/order-api)
* [Pin​Pad API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/pinpad-api)
* [Print API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/print-api)
* [Product Search API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/product-search-api)
* [Session API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/session-api)
* [Storage API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/storage-api)
* [Toast API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/toast-api)

Examples

#### Examples

* ####

  ##### Description

  Add an interactive menu item to the post-exchange action menu for operations after completing an exchange. This example shows how to create a menu item that accesses order data and launches modal workflows for tasks like generating exchange receipts, processing restocking, or collecting feedback.

  ##### jsx

  ```jsx
  import {render} from 'preact';

  export default async () => {
    render(<Extension />, document.body);
  };

  const Extension = () => {
    return (
      <s-button
        onClick={() => shopify.action.presentModal()}
      />
    );
  };
  ```

#### Post-exchange action (modal) target

`pos.exchange.post.action.render`

Renders a full-screen modal interface launched from post-exchange [menu items](#post-exchange-action-menu-item-). Use this target for complex post-exchange workflows that require forms, multi-step processes, or detailed information displays beyond what a simple button can provide.

Extensions at this target have access to order data through the Order API and support workflows with multiple screens, navigation, and interactive components.

#### Support Components (34) APIs (12)

#### Supported components

* [Badge](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/feedback-and-status-indicators/badge)
* [Banner](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/feedback-and-status-indicators/banner)
* [Box](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/box)
* [Button](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/actions/button)
* [Choice list](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/choice-list)
* [Clickable](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/actions/clickable)
* [Date field](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/date-field)
* [Date picker](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/date-picker)
* [Date spinner](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/date-spinner)
* [Divider](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/divider)
* [Email field](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/email-field)
* [Embed](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/media-and-visuals/embed)
* [Empty state](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/empty-state)
* [Heading](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/heading)
* [Icon](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/media-and-visuals/icon)
* [Image](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/media-and-visuals/image)
* [Link](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/actions/link)
* [Modal](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/feedback-and-status-indicators/modal)
* [Number field](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/number-field)
* [Pos block](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/pos-block)
* [Page](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/page)
* [Pos block](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/pos-block)
* [Scroll box](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/scroll-box)
* [Search field](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/search-field)
* [Section](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/section)
* [Spinner](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/feedback-and-status-indicators/spinner)
* [Stack](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/stack)
* [Switch](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/switch)
* [Tabs](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/tabs)
* [Text](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/text)
* [Text area](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/text-area)
* [Text field](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/text-field)
* [Time field](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/time-field)
* [Time picker](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/time-picker)

#### Available APIs

* [Camera API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/camera-api)
* [Connectivity API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/connectivity-api)
* [Device API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/device-api)
* [Locale API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/locale-api)
* [Order API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/contextual-apis/order-api)
* [Pin​Pad API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/pinpad-api)
* [Print API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/print-api)
* [Product Search API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/product-search-api)
* [Scanner API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/scanner-api)
* [Session API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/session-api)
* [Storage API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/storage-api)
* [Toast API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/toast-api)

Examples

#### Examples

* ####

  ##### Description

  Build a full-screen modal workflow launched from a post-exchange action menu item. This example demonstrates creating complex post-exchange experiences with multi-step processes, forms, and order data access for operations like inventory management or exchange analytics.

  ##### jsx

  ```jsx
  import {render} from 'preact';

  export default async () => {
    render(<Extension />, document.body);
  };

  const Extension = () => {
    return (
      <s-page heading='Exchange Post Action'>
        <s-scroll-box>
          <s-text>Order ID: {shopify.order.id}</s-text>
        </s-scroll-box>
      </s-page>
    );
  };
  ```

***

### Best practices

* **Update exchange information in real time:** Update displayed exchange information immediately when changes are made to reflect current state, like updated exchange status, refreshed inventory levels, and changed customer records.
* **Show clear action confirmations:** Show clear success or error messages that specify which exchange was affected and what action was completed. Use messages like "Exchange #1001 processed successfully," "Customer survey sent," or "Unable to process - system error".
* **Ensure exchange continuity:** Ensure that post-exchange actions integrate properly with the overall transaction lifecycle and business processes, like updated inventory records, triggered follow-up workflows, and recorded exchange analytics.
* **Handle error states gracefully:** Communicate exchange processing limitations clearly instead of generic error messages. If your extension processes exchange data or triggers post-exchange workflows, ensure you handle completion states responsibly, provide clear feedback about processing stages, and communicate any requirements or restrictions that affect exchange finalization or follow-up actions.
* **Write clear and action-oriented labels:** Use action-oriented labels that specify what will happen for this particular exchange, with descriptive titles that clearly indicate the information type. Use "Send customer survey" or "Exchange Summary" instead of generic labels like "Exchange options" or "Exchange App."
* **Show status and exchange information:** Show current exchange status, relevant metrics, and action eligibility to support completion decisions, like exchange completion status, "Exchange completed successfully," and exchange ID and customer details.

***

### Limitations

* You can only render one [button](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/actions/button) component for each POS UI extension using the action (menu item) target.

* Order data is read-only through the [Order API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/contextual-apis/order-api), which provides only the order ID, name, and customer ID. To access additional exchange information or modify exchange data, use external API calls or integrate with the Admin API through your app backend.

***

---



<a id="latest-targets-post-purchase"></a>


## Post-purchase

The post-purchase screen appears after merchants complete a sale, return, or exchange transaction. This screen displays the transaction summary and provides opportunities for follow-up actions, customer service, and revenue generation.

#### Use cases

* **Purchase details:** Display warranty information, registration links, and care instructions.
* **Customer follow-up:** Launch satisfaction surveys, loyalty enrollment, and follow-up communications.
* **Upselling:** Present complementary products and service add-ons.
* **External integrations:** Connect with CRM (Customer Relationship Management), marketing automation, and inventory systems.

![Post-purchase targets overview](https://shopify.dev/assets/assets/images/api/pos-ui-extensions/targets-overview-images/post-purchase-overview-CoPAHuDO.png)

***

### Post-purchase targets

Use these targets for purchase completion workflows, post-sale analytics, or integration with external systems for customer engagement and business intelligence.

#### Post-purchase block target

`pos.purchase.post.block.render`

Renders a custom information section within the post-purchase screen. Use this target for displaying supplementary purchase data like completion status, customer feedback prompts, or next-step workflows alongside standard purchase details.

Extensions at this target appear as persistent blocks within the post-purchase interface and support interactive elements that can launch modal workflows using `shopify.action.presentModal()` for more complex post-purchase operations.

#### Support Components (15) APIs (12)

#### Supported components

* [Badge](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/feedback-and-status-indicators/badge)
* [Box](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/box)
* [Button](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/actions/button)
* [Date picker](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/date-picker)
* [Date spinner](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/date-spinner)
* [Heading](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/heading)
* [Icon](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/media-and-visuals/icon)
* [Image](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/media-and-visuals/image)
* [Modal](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/feedback-and-status-indicators/modal)
* [Pos block](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/pos-block)
* [Pos block](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/pos-block)
* [Section](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/section)
* [Stack](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/stack)
* [Text](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/text)
* [Time picker](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/time-picker)

#### Available APIs

* [Action API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/action-api)
* [Camera API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/camera-api)
* [Connectivity API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/connectivity-api)
* [Device API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/device-api)
* [Locale API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/locale-api)
* [Order API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/contextual-apis/order-api)
* [Pin​Pad API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/pinpad-api)
* [Print API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/print-api)
* [Product Search API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/product-search-api)
* [Session API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/session-api)
* [Storage API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/storage-api)
* [Toast API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/toast-api)

Examples

#### Examples

* ####

  ##### Description

  Add a custom information section to the post-purchase screen for displaying order details or status. This example shows how to create a block that provides supplementary information after completing a sale, with interactive elements that can launch modal workflows.

  ##### jsx

  ```jsx
  import {render} from 'preact';

  export default async () => {
    render(<Extension />, document.body);
  };

  const Extension = () => {
    return (
      <s-pos-block>
        <s-button
          slot="secondary-actions"
          onClick={() => shopify.action.presentModal()}
        >
          Open action
        </s-button>
        <s-text>This is a block extension</s-text>
        <s-text>Order ID: {shopify.order.id}</s-text>
      </s-pos-block>
    );
  };
  ```

#### Post-purchase action (menu item) target

`pos.purchase.post.action.menu-item.render`

Renders a single interactive button component as a menu item in the post-purchase action menu. Use this target for post-purchase operations like sending receipts, collecting customer feedback, or launching follow-up workflows after completing a sale.

Extensions at this target can access the order identifier through the Order API to perform purchase-specific operations. Menu items typically invoke `shopify.action.presentModal()` to launch the companion [modal](#post-purchase-action-modal-) for complete post-purchase workflows.

#### Support Components (1) APIs (12)

#### Supported components

* [Button](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/actions/button)

#### Available APIs

* [Action API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/action-api)
* [Camera API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/camera-api)
* [Connectivity API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/connectivity-api)
* [Device API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/device-api)
* [Locale API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/locale-api)
* [Order API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/contextual-apis/order-api)
* [Pin​Pad API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/pinpad-api)
* [Print API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/print-api)
* [Product Search API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/product-search-api)
* [Session API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/session-api)
* [Storage API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/storage-api)
* [Toast API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/toast-api)

Examples

#### Examples

* ####

  ##### Description

  Add an interactive menu item to the post-purchase action menu for operations after completing a sale. This example shows how to create a menu item that accesses order data and launches modal workflows for tasks like sending receipts, collecting feedback, or follow-up processes.

  ##### jsx

  ```jsx
  import {render} from 'preact';

  export default async () => {
    render(<Extension />, document.body);
  };

  const Extension = () => {
    return (
      <s-button
        onClick={() => shopify.action.presentModal()}
      />
    );
  };
  ```

#### Post-purchase action (modal) target

`pos.purchase.post.action.render`

Renders a full-screen modal interface launched from post-purchase [menu items](#post-purchase-action-menu-item-). Use this target for complex post-purchase workflows that require forms, multi-step processes, or detailed information displays beyond what a simple button can provide.

Extensions at this target have access to order data through the Order API and support workflows with multiple screens, navigation, and interactive components.

#### Support Components (34) APIs (12)

#### Supported components

* [Badge](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/feedback-and-status-indicators/badge)
* [Banner](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/feedback-and-status-indicators/banner)
* [Box](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/box)
* [Button](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/actions/button)
* [Choice list](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/choice-list)
* [Clickable](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/actions/clickable)
* [Date field](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/date-field)
* [Date picker](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/date-picker)
* [Date spinner](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/date-spinner)
* [Divider](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/divider)
* [Email field](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/email-field)
* [Embed](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/media-and-visuals/embed)
* [Empty state](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/empty-state)
* [Heading](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/heading)
* [Icon](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/media-and-visuals/icon)
* [Image](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/media-and-visuals/image)
* [Link](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/actions/link)
* [Modal](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/feedback-and-status-indicators/modal)
* [Number field](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/number-field)
* [Pos block](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/pos-block)
* [Page](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/page)
* [Pos block](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/pos-block)
* [Scroll box](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/scroll-box)
* [Search field](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/search-field)
* [Section](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/section)
* [Spinner](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/feedback-and-status-indicators/spinner)
* [Stack](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/stack)
* [Switch](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/switch)
* [Tabs](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/tabs)
* [Text](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/text)
* [Text area](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/text-area)
* [Text field](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/text-field)
* [Time field](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/time-field)
* [Time picker](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/time-picker)

#### Available APIs

* [Camera API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/camera-api)
* [Connectivity API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/connectivity-api)
* [Device API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/device-api)
* [Locale API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/locale-api)
* [Order API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/contextual-apis/order-api)
* [Pin​Pad API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/pinpad-api)
* [Print API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/print-api)
* [Product Search API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/product-search-api)
* [Scanner API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/scanner-api)
* [Session API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/session-api)
* [Storage API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/storage-api)
* [Toast API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/toast-api)

Examples

#### Examples

* ####

  ##### Description

  Build a full-screen modal workflow launched from a post-purchase action menu item. This example demonstrates creating complex post-purchase experiences with multi-step processes, forms, and order data access for operations like receipt customization or customer engagement.

  ##### jsx

  ```jsx
  import {render} from 'preact';

  export default async () => {
    render(<Extension />, document.body);
  };

  const Extension = () => {
    return (
      <s-page heading="Purchase Post Action">
        <s-scroll-box>
          <s-text>Order ID: {shopify.order.id}</s-text>
        </s-scroll-box>
      </s-page>
    );
  };
  ```

***

### Best practices

* **Update purchase information in real time:** Update displayed purchase information immediately when changes are made to reflect current state, like updated order status, refreshed inventory levels, and changed customer records.
* **Show clear action confirmations:** Show clear success or error messages that specify which purchase was affected and what action was completed, using messages like "Purchase #1001 processed successfully," "Customer survey sent," or "Unable to process - system error."
* **Ensure purchase continuity:** Ensure that post-purchase actions integrate properly with the overall transaction lifecycle and business processes, like updated inventory records, triggered follow-up workflows, and recorded sales analytics.
* **Handle error states gracefully:** Communicate purchase processing limitations clearly instead of generic error messages. If your extension processes purchase data or triggers post-purchase workflows, ensure you handle completion states responsibly, provide clear feedback about processing stages, and communicate any requirements or restrictions that affect purchase finalization or follow-up actions.
* **Write clear and action-oriented labels:** Use action-oriented labels that specify what will happen for this particular purchase, with descriptive titles that clearly indicate the information type. Use labels like "Send receipt by email" or "Purchase Summary" instead of generic labels like "Purchase options" or "Purchase App."
* **Show current status and purchase information:** Show current purchase status, relevant metrics, and action eligibility to support completion decisions, like purchase completion status, "Purchase completed successfully," and order ID and customer details.

***

### Limitations

* You can only render one [button](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/actions/button) component for each POS UI extension using the action (menu item) target.

* Order data is read-only through the [Order API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/contextual-apis/order-api), which provides only the order ID, name, and customer ID. To access additional purchase information or modify purchase data, use external API calls or integrate with the Admin API through your app backend.

***

---



<a id="latest-targets-post-return"></a>


## Post-return

**Beta:**

Post-return targets are part of the POS UI extensions [feature preview](https://shopify.dev/docs/api/feature-previews). This feature preview is available on an invite-only basis and requires POS UI extensions version 2025-07 or higher and POS app version 9.31.0 or later.

The post-return screen appears after merchants complete a return transaction. This screen displays the return summary including returned items, refund amounts, and return reason, providing opportunities for customer service and follow-up actions.

#### Use cases

* **Product returns:** Display return reasons, product condition assessments, and restocking instructions.
* **Customer follow-up:** Launch feedback collection, refund confirmations, and inventory adjustments.
* **Return analytics:** Track return patterns, product quality issues, and satisfaction metrics.
* **External integrations:** Connect with inventory management, quality control, and CRM (Customer Relationship Management) systems.

![Post-return targets overview](https://shopify.dev/assets/assets/images/api/pos-ui-extensions/targets-overview-images/post-return-overview-3CaoZFor.png)

***

### Post-return targets

Use these targets for return completion workflows, post-return analytics, or integration with external systems for return processing and follow-up.

#### Post-return block target

`pos.return.post.block.render`

Renders a custom information section within the post-return screen. Use this target for displaying supplementary return data like completion status, refund confirmations, or follow-up workflows alongside standard return details.

Extensions at this target appear as persistent blocks within the post-return interface and support interactive elements that can launch modal workflows using `shopify.action.presentModal()` for more complex post-return operations.

#### Support Components (15) APIs (12)

#### Supported components

* [Badge](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/feedback-and-status-indicators/badge)
* [Box](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/box)
* [Button](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/actions/button)
* [Date picker](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/date-picker)
* [Date spinner](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/date-spinner)
* [Heading](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/heading)
* [Icon](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/media-and-visuals/icon)
* [Image](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/media-and-visuals/image)
* [Modal](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/feedback-and-status-indicators/modal)
* [Pos block](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/pos-block)
* [Pos block](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/pos-block)
* [Section](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/section)
* [Stack](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/stack)
* [Text](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/text)
* [Time picker](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/time-picker)

#### Available APIs

* [Action API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/action-api)
* [Camera API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/camera-api)
* [Connectivity API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/connectivity-api)
* [Device API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/device-api)
* [Locale API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/locale-api)
* [Order API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/contextual-apis/order-api)
* [Pin​Pad API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/pinpad-api)
* [Print API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/print-api)
* [Product Search API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/product-search-api)
* [Session API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/session-api)
* [Storage API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/storage-api)
* [Toast API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/toast-api)

Examples

#### Examples

* ####

  ##### Description

  Add a custom information section to the post-return screen for displaying return details or status. This example shows how to create a block that provides supplementary information after completing a return, with interactive elements that can launch modal workflows.

  ##### jsx

  ```jsx
  import {render} from 'preact';

  export default async () => {
    render(<Extension />, document.body);
  };

  const Extension = () => {
    return (
      <s-pos-block>
        <s-button
          slot="secondary-actions"
          onClick={() => shopify.action.presentModal()}
        >
          Open action
        </s-button>
        <s-text>This is a block extension</s-text>
        <s-text>Order ID: {shopify.order.id}</s-text>
      </s-pos-block>
    );
  };
  ```

#### Post-return action (menu item) target

`pos.return.post.action.menu-item.render`

Renders a single interactive button component as a menu item in the post-return action menu. Use this target for post-return operations like generating return receipts, processing restocking workflows, or collecting return feedback.

Extensions at this target can access the order identifier through the Order API to perform return-specific operations. Menu items typically invoke `shopify.action.presentModal()` to launch the companion [modal](#post-return-action-modal-) for complete post-return workflows.

#### Support Components (1) APIs (12)

#### Supported components

* [Button](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/actions/button)

#### Available APIs

* [Action API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/action-api)
* [Camera API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/camera-api)
* [Connectivity API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/connectivity-api)
* [Device API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/device-api)
* [Locale API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/locale-api)
* [Order API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/contextual-apis/order-api)
* [Pin​Pad API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/pinpad-api)
* [Print API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/print-api)
* [Product Search API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/product-search-api)
* [Session API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/session-api)
* [Storage API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/storage-api)
* [Toast API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/toast-api)

Examples

#### Examples

* ####

  ##### Description

  Add an interactive menu item to the post-return action menu for operations after completing a return. This example shows how to create a menu item that accesses order data and launches modal workflows for tasks like generating return receipts, processing restocking, or collecting feedback.

  ##### jsx

  ```jsx
  import {render} from 'preact';

  export default async () => {
    render(<Extension />, document.body);
  };

  const Extension = () => {
    return (
      <s-button
        onClick={() => shopify.action.presentModal()}
      />
    );
  };
  ```

#### Post-return action (modal) target

`pos.return.post.action.render`

Renders a full-screen modal interface launched from post-return [menu items](#post-return-action-menu-item-). Use this target for complex post-return workflows that require forms, multi-step processes, or detailed information displays beyond what a simple button can provide.

Extensions at this target have access to order data through the Order API and support workflows with multiple screens, navigation, and interactive components.

#### Support Components (34) APIs (12)

#### Supported components

* [Badge](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/feedback-and-status-indicators/badge)
* [Banner](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/feedback-and-status-indicators/banner)
* [Box](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/box)
* [Button](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/actions/button)
* [Choice list](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/choice-list)
* [Clickable](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/actions/clickable)
* [Date field](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/date-field)
* [Date picker](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/date-picker)
* [Date spinner](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/date-spinner)
* [Divider](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/divider)
* [Email field](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/email-field)
* [Embed](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/media-and-visuals/embed)
* [Empty state](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/empty-state)
* [Heading](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/heading)
* [Icon](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/media-and-visuals/icon)
* [Image](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/media-and-visuals/image)
* [Link](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/actions/link)
* [Modal](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/feedback-and-status-indicators/modal)
* [Number field](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/number-field)
* [Pos block](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/pos-block)
* [Page](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/page)
* [Pos block](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/pos-block)
* [Scroll box](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/scroll-box)
* [Search field](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/search-field)
* [Section](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/section)
* [Spinner](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/feedback-and-status-indicators/spinner)
* [Stack](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/stack)
* [Switch](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/switch)
* [Tabs](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/tabs)
* [Text](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/text)
* [Text area](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/text-area)
* [Text field](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/text-field)
* [Time field](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/time-field)
* [Time picker](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/time-picker)

#### Available APIs

* [Camera API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/camera-api)
* [Connectivity API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/connectivity-api)
* [Device API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/device-api)
* [Locale API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/locale-api)
* [Order API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/contextual-apis/order-api)
* [Pin​Pad API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/pinpad-api)
* [Print API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/print-api)
* [Product Search API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/product-search-api)
* [Scanner API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/scanner-api)
* [Session API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/session-api)
* [Storage API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/storage-api)
* [Toast API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/toast-api)

Examples

#### Examples

* ####

  ##### Description

  Build a full-screen modal workflow launched from a post-return action menu item. This example demonstrates creating complex post-return experiences with multi-step processes, forms, and order data access for operations like restocking workflows or return analytics.

  ##### jsx

  ```jsx
  import {render} from 'preact';

  export default async () => {
    render(<Extension />, document.body);
  };

  const Extension = () => {
    return (
      <s-page heading="Return Post Action">
        <s-scroll-box>
          <s-text>Order ID: {shopify.order.id}</s-text>
        </s-scroll-box>
      </s-page>
    );
  };
  ```

***

### Best practices

* **Update return information in real time:** Update displayed return information immediately when changes are made to reflect current state, like updated return status, refreshed inventory levels, and changed refund status.
* **Show clear action confirmations:** Show clear success or error messages that specify which return was affected and what action was completed. Use messages like "Return #1001 processed successfully," "Refund initiated," or "Unable to process - system error".
* **Ensure return continuity:** Ensure that post-return actions integrate properly with the overall transaction lifecycle and business processes, like updated inventory records, triggered refund workflows, and recorded return analytics.
* **Handle error states gracefully:** Communicate return processing limitations clearly instead of generic error messages. If your extension processes return data or triggers post-return workflows, ensure you handle completion states responsibly, provide clear feedback about processing stages, and communicate any requirements or restrictions that affect return finalization or follow-up actions.
* **Write clear and action-oriented labels:** Use action-oriented labels that specify what will happen for this particular return, with descriptive titles that clearly indicate the information type. Use "Process refund" or "Return Summary" instead of generic labels like "Return options" or "Return App."
* **Show status and return information:** Show current return status, relevant metrics, and action eligibility to support completion decisions, like return completion status, "Return processed successfully," and return ID and refund details.

***

### Limitations

* You can only render one [button](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/actions/button) component for each POS UI extension using the action (menu item) target.

* Order data is read-only through the [Order API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/contextual-apis/order-api), which provides only the order ID, name, and customer ID. To access additional return information or modify return data, use external API calls or integrate with the Admin API through your app backend.

***

---



<a id="latest-targets-product-details"></a>


## Product details

The product details screen appears when merchants search for a product, scan a barcode, or browse inventory during a transaction. This screen displays product information including pricing, inventory levels, variants, and product specifications that merchants need to serve customers.

#### Use cases

* **Product information:** Display specifications, care instructions, and detailed descriptions.
* **Inventory management:** Adjust stock levels, update pricing, and configure variants.
* **Sales optimization:** Show bundling suggestions, upselling opportunities, and product recommendations.
* **External integrations:** Connect with inventory systems, PIM (Product Information Management) tools, or supplier platforms.

![Product details targets overview](https://shopify.dev/assets/assets/images/api/pos-ui-extensions/targets-overview-images/product-details-targets-WeXxrSXw.png)

***

### Product details targets

Use these targets for product management capabilities, inventory workflows, or integration with external systems for product information and analytics.

#### Product details block target

`pos.product-details.block.render`

Renders a custom information section within the product details screen. Use this target for displaying supplementary product data like detailed specifications, inventory status, or related product recommendations alongside standard product details.

Extensions at this target appear as persistent blocks within the product details interface and support interactive elements that can launch modal workflows using `shopify.action.presentModal()` for more complex product operations.

#### Support Components (15) APIs (13)

#### Supported components

* [Badge](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/feedback-and-status-indicators/badge)
* [Box](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/box)
* [Button](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/actions/button)
* [Date picker](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/date-picker)
* [Date spinner](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/date-spinner)
* [Heading](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/heading)
* [Icon](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/media-and-visuals/icon)
* [Image](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/media-and-visuals/image)
* [Modal](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/feedback-and-status-indicators/modal)
* [Pos block](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/pos-block)
* [Pos block](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/pos-block)
* [Section](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/section)
* [Stack](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/stack)
* [Text](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/text)
* [Time picker](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/time-picker)

#### Available APIs

* [Action API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/action-api)
* [Camera API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/camera-api)
* [Cart API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/contextual-apis/cart-api)
* [Connectivity API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/connectivity-api)
* [Device API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/device-api)
* [Locale API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/locale-api)
* [Pin​Pad API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/pinpad-api)
* [Print API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/print-api)
* [Product API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/contextual-apis/product-api)
* [Product Search API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/product-search-api)
* [Session API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/session-api)
* [Storage API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/storage-api)
* [Toast API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/toast-api)

Examples

#### Examples

* ####

  ##### Description

  Add a custom information section to the product details screen for displaying supplementary product data. This example shows how to create a block that provides additional product information, inventory status, or custom product attributes alongside standard product details.

  ##### jsx

  ```jsx
  import {render} from 'preact';

  export default async () => {
    render(<Extension />, document.body);
  };

  const Extension = () => {
    return (
      <s-pos-block>
        <s-button
          slot="secondary-actions"
          onClick={() => shopify.action.presentModal()}
        >
          Open action
        </s-button>
        <s-text>This is a block extension</s-text>
        <s-text>Product ID for this product: {shopify.product.id}</s-text>
      </s-pos-block>
    );
  };
  ```

#### Product details action (menu item) target

`pos.product-details.action.menu-item.render`

Renders a single interactive button component as a menu item in the product details action menu. Use this target for product-specific operations like inventory adjustments, product analytics, or integration with external product management systems.

Extensions at this target can access the product identifier through the Product API to perform product-specific operations. Menu items typically invoke `shopify.action.presentModal()` to launch the companion [modal](#product-details-action-modal-) for complete product workflows.

#### Support Components (1) APIs (13)

#### Supported components

* [Button](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/actions/button)

#### Available APIs

* [Action API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/action-api)
* [Camera API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/camera-api)
* [Cart API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/contextual-apis/cart-api)
* [Connectivity API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/connectivity-api)
* [Device API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/device-api)
* [Locale API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/locale-api)
* [Pin​Pad API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/pinpad-api)
* [Print API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/print-api)
* [Product API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/contextual-apis/product-api)
* [Product Search API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/product-search-api)
* [Session API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/session-api)
* [Storage API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/storage-api)
* [Toast API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/toast-api)

Examples

#### Examples

* ####

  ##### Description

  Add an interactive menu item to the product details action menu for product-specific operations. This example shows how to create a menu item that accesses product data and launches modal workflows for tasks like inventory adjustments, product analytics, or integration with external systems.

  ##### jsx

  ```jsx
  import {render} from 'preact';

  export default async () => {
    render(<Extension />, document.body);
  };

  const Extension = () => {
    return (
      <s-button
        onClick={() => shopify.action.presentModal()}
      />
    );
  };
  ```

#### Product details action (modal) target

`pos.product-details.action.render`

Renders a full-screen modal interface launched from product details [menu items](#product-details-action-menu-item-). Use this target for complex product workflows that require forms, multi-step processes, or detailed information displays beyond what a simple button can provide.

Extensions at this target have access to product and cart data through the Product API and support workflows with multiple screens, navigation, and interactive components.

#### Support Components (34) APIs (13)

#### Supported components

* [Badge](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/feedback-and-status-indicators/badge)
* [Banner](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/feedback-and-status-indicators/banner)
* [Box](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/box)
* [Button](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/actions/button)
* [Choice list](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/choice-list)
* [Clickable](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/actions/clickable)
* [Date field](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/date-field)
* [Date picker](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/date-picker)
* [Date spinner](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/date-spinner)
* [Divider](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/divider)
* [Email field](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/email-field)
* [Embed](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/media-and-visuals/embed)
* [Empty state](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/empty-state)
* [Heading](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/heading)
* [Icon](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/media-and-visuals/icon)
* [Image](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/media-and-visuals/image)
* [Link](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/actions/link)
* [Modal](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/feedback-and-status-indicators/modal)
* [Number field](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/number-field)
* [Pos block](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/pos-block)
* [Page](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/page)
* [Pos block](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/pos-block)
* [Scroll box](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/scroll-box)
* [Search field](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/search-field)
* [Section](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/section)
* [Spinner](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/feedback-and-status-indicators/spinner)
* [Stack](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/stack)
* [Switch](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/switch)
* [Tabs](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/tabs)
* [Text](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/text)
* [Text area](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/text-area)
* [Text field](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/text-field)
* [Time field](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/time-field)
* [Time picker](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/time-picker)

#### Available APIs

* [Camera API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/camera-api)
* [Cart API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/contextual-apis/cart-api)
* [Connectivity API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/connectivity-api)
* [Device API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/device-api)
* [Locale API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/locale-api)
* [Pin​Pad API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/pinpad-api)
* [Print API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/print-api)
* [Product API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/contextual-apis/product-api)
* [Product Search API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/product-search-api)
* [Scanner API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/scanner-api)
* [Session API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/session-api)
* [Storage API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/storage-api)
* [Toast API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/toast-api)

Examples

#### Examples

* ####

  ##### Description

  Build a full-screen modal workflow launched from a product details action menu item. This example demonstrates creating product-specific experiences with multi-step processes, forms, and product data access for operations like inventory management or product customization.

  ##### jsx

  ```jsx
  import {render} from 'preact';

  export default async () => {
    render(<Extension />, document.body);
  };

  const Extension = () => {
    return (
      <s-page heading="Product Details">
        <s-scroll-box>
          <s-text>Product ID: {shopify.product.id}</s-text>
        </s-scroll-box>
      </s-page>
    );
  };
  ```

***

### Best practices

* **Update product information in real time:** Update displayed product information immediately when changes are made to reflect the current state, like updated inventory levels, refreshed pricing information, and changed product status.
* **Show clear action confirmations:** Show clear success or error messages that specify which product was affected. Use messages like "Product #1001 updated successfully," "Inventory adjusted for Blue T-Shirt," or "Unable to update - insufficient permissions".
* **Ensure product continuity:** Ensure that product-related changes integrate properly with the overall inventory and sales systems, like updated product catalog, triggered inventory workflows, and recorded product analytics.
* **Handle error states gracefully:** Communicate product data limitations clearly instead of generic error messages. If your extension accesses or modifies product information, ensure you handle data responsibly, display only necessary information, and provide clear messaging about any data collection, processing, or sharing that occurs through your extension functionality.
* **Write clear and action-oriented labels:** Use action-oriented labels that specify what will happen for this particular product, with descriptive titles that clearly indicate the information type. Use "Update inventory count" or "Product Analytics" instead of generic labels like "Product options" or "Product App."
* **Show status and product information:** Show current product status, relevant metrics, and action eligibility to support management decisions, like inventory levels and status, "Low stock - 5 remaining," and product ID and variant details.

***

### Limitations

* You can only render one [button](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/actions/button) component for each POS UI extension using the action (menu item) target.

* Product data is read-only through the [Product API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/contextual-apis/product-api), which provides only the product ID and variant ID. To access additional product information or modify product data, use external API calls or integrate with the Admin API through your app backend.

***

---



<a id="latest-targets-receipts"></a>


## Receipts

**Beta:**

Receipt targets are part of the POS UI extensions [feature preview](https://shopify.dev/docs/api/feature-previews). This feature preview is available on an invite-only basis and requires POS UI extensions version 2025-04 or higher and POS app version 9.31.0 or later.

The receipt appears as the printed or digital output that customers receive after completing a transaction. This receipt displays transaction details, payment information, and store branding, providing the last touchpoint in the customer experience.

#### Use cases

* **Custom branding:** Add logos, promotional messages, and store-specific information.
* **Transaction details:** Display order details, loyalty program details, and return policies.
* **Compliance information:** Include terms of service, regulatory disclosures, and store policies.
* **Customer engagement:** Integrate survey links, social media, and marketing campaigns.

![Receipts targets overview](https://shopify.dev/assets/assets/images/api/pos-ui-extensions/targets-overview-images/receipts-targets-DjPidwVw.png)

***

### Receipts targets

Use these targets for receipt customization, branding, or integration with external systems for customer engagement and compliance.

#### Receipt block (header) target

`pos.receipt-header.block.render`

Renders a custom section in the header of printed receipts. Use this target for adding custom branding, logos, promotional messages, or store-specific information at the top of receipts.

Extensions at this target appear in the receipt header area and support limited components optimized for print formatting, including text content for information display.

#### Support Components (2) APIs (1)

#### Supported components

* [Pos block](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/pos-block)
* [Text](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/text)

#### Available APIs

* [Storage API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/storage-api)

Examples

#### Examples

* ####

  ##### Description

  Add a custom section to the header of printed receipts for branding or important information. This example shows how to create a header block that displays text content optimized for print formatting, useful for store branding, promotional messages, or important notices at the top of receipts.

  ##### jsx

  ```jsx
  import {render} from 'preact';

  export default async () => {
    render(<Extension />, document.body);
  };

  const Extension = () => {
    const {transaction} = shopify;
    const qrCodeValue =
      transaction.transactionType === 'Exchange'
        ? `exampleExchange=${encodeURIComponent(transaction.exchangeId ?? '')}`
        : `exampleOrder=${encodeURIComponent(transaction.orderId ?? '')}`;

    return (
      <s-pos-block>
        <s-text>Transaction type: {transaction.transactionType}</s-text>
        <s-text>Total tax ({transaction.taxTotal.currency}): {transaction.taxTotal.amount}</s-text>
        <s-qr-code content={`https://www.shopify.com?${qrCodeValue}`} />
      </s-pos-block>
    );
  };
  ```

#### Receipt block (footer) target

`pos.receipt-footer.block.render`

Renders a custom section in the footer of printed receipts. Use this target for adding contact details, return policies, social media links, or customer engagement elements like survey links or marketing campaigns at the bottom of receipts.

Extensions at this target appear in the receipt footer area and support limited components optimized for print formatting, including text content for information display.

#### Support Components (2) APIs (1)

#### Supported components

* [Pos block](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/pos-block)
* [Text](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/text)

#### Available APIs

* [Storage API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/storage-api)

Examples

#### Examples

* ####

  ##### Description

  Add a custom section to the footer of printed receipts for contact information, policies, or marketing. This example shows how to create a footer block that displays text content optimized for print formatting, useful for return policies, social media links, or customer engagement elements.

  ##### jsx

  ```jsx
  import {render} from 'preact';

  export default async () => {
    render(<Extension />, document.body);
  };

  const Extension = () => {
    const {transaction} = shopify;
    const qrCodeValue =
      transaction.transactionType === 'Exchange'
        ? `exampleExchange=${encodeURIComponent(transaction.exchangeId ?? '')}`
        : `exampleOrder=${encodeURIComponent(transaction.orderId ?? '')}`;

    return (
      <s-pos-block>
        <s-text>Transaction type: {transaction.transactionType}</s-text>
        <s-text>Total tax ({transaction.taxTotal.currency}): {transaction.taxTotal.amount}</s-text>
        <s-qr-code content={`https://www.shopify.com?${qrCodeValue}`} />
      </s-pos-block>
    );
  };
  ```

***

### Best practices

* **Include relevant content that adds value:** Include information that adds value to the customer's receipt and supports post-transaction engagement, like store contact information, return policy details, and loyalty program status.
* **Use clear and concise formatting:** Use concise, well-formatted text that prints clearly and is easy to read on receipt paper, like "Visit us: store.example.com," "Returns: 30-day policy," and "Follow us @storename."
* **Provide useful contact information:** Include useful contact and engagement information that helps customers connect with your store after their purchase, like store website and hours, customer service contact, and social media handles.
* **Optimize for print format:** Design receipt content that works well with printers and receipt paper limitations. Receipt extensions are specifically designed for print output and have different constraints than screen-based extensions. Ensure your content is concise, uses appropriate formatting, and provides value to customers who will interact with the printed receipt.
* **Keep messaging brief and focused:** Keep text brief and focused, as receipt space is limited and content should be easily scannable. Use "Returns within 30 days" or "Scan for rewards" instead of lengthy text like "Please visit our website to learn more about our comprehensive return policy" or "Download our mobile app for exclusive offers and rewards."
* **Use transaction data for context:** Use transaction data to provide relevant, personalized information when appropriate, like transaction type-specific messaging, "Exchange ID: #1001," and tax information display.

***

### Limitations

* Receipt extensions support only a limited set of components optimized for print formatting: [POS block](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/pos-block) and [text](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/text).

* Receipt extensions have access to transaction data through `TransactionCompleteWithReprintData` and the [Storage API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/storage-api), but can't access other POS UI extensions APIs or perform interactive operations.

***

---



<a id="latest-targets-register-details"></a>


## Register details

The register details screen displays information about the current register and cash drawer status. This screen provides access to cash management operations and register-specific tools for retail staff.

#### Use cases

* **Cash drawer operations:** Open drawers for manual verification outside transactions.
* **Register information:** Display cash totals, shift summaries, and till balances.
* **Cash management:** Launch workflows for deposits, withdrawals, and reconciliation.
* **Compliance features:** Implement dual-authorization, audit trails, and cash limit alerts.

![Register details targets overview](https://shopify.dev/assets/assets/images/api/pos-ui-extensions/targets-overview-images/register-targets-DexyINWh.png)

***

### Register details targets

Use these targets for register-specific customizations, cash management operations, or compliance tools that enhance cash handling workflows.

#### Register details action (menu item) target

`pos.register-details.action.menu-item.render`

Renders a single interactive button component as a menu item in the register details action menu. Use this target for register-specific operations like opening the cash drawer, launching cash management workflows, or accessing register verification tools.

Extensions at this target can access the Cash Drawer API to control cash drawer operations. Menu items typically invoke `shopify.action.presentModal()` to launch the companion [modal](#register-details-action-modal-) for complete workflows.

#### Support Components (1) APIs (12)

#### Supported components

* [Button](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/actions/button)

#### Available APIs

* [Action API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/action-api)
* [Camera API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/camera-api)
* [Cash Drawer API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/cash-drawer-api)
* [Connectivity API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/connectivity-api)
* [Device API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/device-api)
* [Locale API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/locale-api)
* [Pin​Pad API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/pinpad-api)
* [Print API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/print-api)
* [Product Search API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/product-search-api)
* [Session API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/session-api)
* [Storage API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/storage-api)
* [Toast API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/toast-api)

Examples

#### Examples

* ####

  ##### Description

  Add an interactive menu item to the register details action menu for register-specific operations. This example shows how to create a menu item that accesses register data and launches modal workflows for tasks like cash management, shift reporting, or register configuration.

  ##### jsx

  ```jsx
  import {render} from 'preact';

  export default async () => {
    render(<Extension />, document.body);
  };

  const Extension = () => {
    return <s-button onClick={() => shopify.action.presentModal()} />;
  };
  ```

#### Register details action (modal) target

`pos.register-details.action.render`

Renders a full-screen modal interface launched from register details [menu items](#register-details-action-menu-item-). Use this target for complex register workflows that require forms, multi-step processes, or detailed information displays beyond what a simple button can provide.

Extensions at this target have access to the Cash Drawer API to control cash drawer operations and support workflows with multiple screens, navigation, and interactive components.

#### Support Components (34) APIs (12)

#### Supported components

* [Badge](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/feedback-and-status-indicators/badge)
* [Banner](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/feedback-and-status-indicators/banner)
* [Box](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/box)
* [Button](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/actions/button)
* [Choice list](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/choice-list)
* [Clickable](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/actions/clickable)
* [Date field](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/date-field)
* [Date picker](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/date-picker)
* [Date spinner](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/date-spinner)
* [Divider](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/divider)
* [Email field](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/email-field)
* [Embed](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/media-and-visuals/embed)
* [Empty state](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/empty-state)
* [Heading](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/heading)
* [Icon](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/media-and-visuals/icon)
* [Image](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/media-and-visuals/image)
* [Link](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/actions/link)
* [Modal](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/feedback-and-status-indicators/modal)
* [Number field](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/number-field)
* [Pos block](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/pos-block)
* [Page](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/page)
* [Pos block](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/pos-block)
* [Scroll box](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/scroll-box)
* [Search field](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/search-field)
* [Section](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/section)
* [Spinner](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/feedback-and-status-indicators/spinner)
* [Stack](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/stack)
* [Switch](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/switch)
* [Tabs](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/tabs)
* [Text](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/text)
* [Text area](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/text-area)
* [Text field](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/text-field)
* [Time field](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/time-field)
* [Time picker](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/time-picker)

#### Available APIs

* [Camera API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/camera-api)
* [Cash Drawer API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/cash-drawer-api)
* [Connectivity API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/connectivity-api)
* [Device API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/device-api)
* [Locale API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/locale-api)
* [Pin​Pad API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/pinpad-api)
* [Print API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/print-api)
* [Product Search API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/product-search-api)
* [Scanner API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/scanner-api)
* [Session API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/session-api)
* [Storage API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/storage-api)
* [Toast API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/toast-api)

Examples

#### Examples

* ####

  ##### Description

  Build a full-screen modal workflow launched from a register details action menu item. This example demonstrates creating register-specific experiences with multi-step processes, forms, and register data access for operations like cash drawer management or shift reports.

  ##### jsx

  ```jsx
  import {render} from 'preact';

  export default async () => {
    render(<Extension />, document.body);
  };

  const Extension = () => {
    return (
      <s-page heading="Register Details Action">
        <s-scroll-box>
          <s-text>
            This is a action extension on the register details screen
          </s-text>
        </s-scroll-box>
      </s-page>
    );
  };
  ```

#### Register details block target

`pos.register-details.block.render`

Renders a custom section directly within the register details screen. Use this target to display register-specific information or provide quick access to register operations without requiring a separate modal interface.

Extensions at this target appear inline on the register details screen and can include interactive elements like buttons in secondary action slots. This target is ideal for displaying register status information, quick actions, or alerts that should be immediately visible.

#### Support Components (15) APIs (12)

#### Supported components

* [Badge](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/feedback-and-status-indicators/badge)
* [Box](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/box)
* [Button](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/actions/button)
* [Date picker](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/date-picker)
* [Date spinner](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/date-spinner)
* [Heading](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/heading)
* [Icon](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/media-and-visuals/icon)
* [Image](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/media-and-visuals/image)
* [Modal](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/feedback-and-status-indicators/modal)
* [Pos block](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/pos-block)
* [Pos block](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/pos-block)
* [Section](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/section)
* [Stack](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/stack)
* [Text](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/text)
* [Time picker](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/time-picker)

#### Available APIs

* [Action API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/action-api)
* [Camera API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/camera-api)
* [Cash Drawer API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/cash-drawer-api)
* [Connectivity API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/connectivity-api)
* [Device API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/device-api)
* [Locale API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/locale-api)
* [Pin​Pad API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/pinpad-api)
* [Print API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/print-api)
* [Product Search API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/product-search-api)
* [Session API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/session-api)
* [Storage API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/storage-api)
* [Toast API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/standard-apis/toast-api)

Examples

#### Examples

* ####

  ##### Description

  Add a custom information section to the register details screen for displaying supplementary register data. This example shows how to create a block that provides additional register information, cash status, or shift details alongside standard register details.

  ##### jsx

  ```jsx
  import {render} from 'preact';

  export default async () => {
    render(<Extension />, document.body);
  };

  const Extension = () => {
    return (
      <s-pos-block>
        <s-text>This is a block extension on the register details screen</s-text>
        <s-button
          slot="secondary-actions"
          onClick={() => shopify.cashDrawer.open()}
        >
          Open drawer
        </s-button>
      </s-pos-block>
    );
  };
  ```

***

### Best practices

* **Control cash drawer access appropriately:** Ensure cash drawer operations are protected with appropriate authorization checks and comply with your security requirements. Consider implementing PIN verification, manager approval, or audit logging for cash drawer operations initiated by your extension.
* **Show clear register status information:** When displaying register information in block extensions, ensure the data is current and clearly labeled. Show relevant details like current shift totals, last cash verification time, or pending cash management tasks that help staff understand the register state at a glance.
* **Provide immediate feedback for operations:** Show clear success or error messages when performing cash drawer operations or other register actions. Use toast notifications or banner messages to confirm actions like "Cash drawer opened successfully" or "Unable to open drawer: hardware error."
* **Handle hardware errors gracefully:** Cash drawer operations depend on connected hardware that may be unavailable or malfunctioning. Implement error handling that explains the issue clearly and suggests resolution steps, like "Cash drawer not responding. Check hardware connections and try again."
* **Use action-oriented labels:** Use clear, action-oriented labels for buttons and menu items that describe what the extension will do. Use "Open cash drawer" or "Start cash count" instead of generic labels like "Cash management app" or "Register tools."
* **Support offline scenarios:** Consider that register operations may need to work when connectivity is limited. Use the Connectivity API to detect network status and either queue operations for later sync or clearly communicate when features require network access.

***

### Limitations

* You can only render one [button](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/actions/button) component for each POS UI extension using the action (menu item) target.

* Cash drawer operations require compatible hardware connected to the POS device. The [Cash Drawer API](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/target-apis/platform-apis/cash-drawer-api) will return an error if no cash drawer is connected or if the hardware is unavailable.

* Register details screen access is controlled by Shopify POS permissions. Extensions at these targets will only appear for staff members with appropriate permissions to access register management features.

***

---



<a id="latest-web-components"></a>


## Web components

Web components are the UI building blocks that you use to display data and trigger API functions. These components are native UI elements that follow [Shopify's design system](https://shopify.dev/docs/apps/design) and render optimized interfaces for retail workflows in [the POS app](https://apps.shopify.com/shopify-pos) on iOS and Android devices (POS version 10.19 and later).

Your [target](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets) determines which components you can use because different locations in POS have different interface requirements and constraints.

### Actions

Actions trigger retail operations through quick, touch-based interactions like applying discounts, confirming payments, and initiating workflows.

[![Button](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/button-thumbnail-Jng7BLxf.png)![Button](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/button-thumbnail-Jng7BLxf.png)](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/actions/button)

[Button](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/actions/button)

[Execute actions through tappable button elements with customizable titles and styles.](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/actions/button)

[![Clickable](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/clickable-thumbnail-DFroxC2E.png)![Clickable](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/clickable-thumbnail-DFroxC2E.png)](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/actions/clickable)

[Clickable](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/actions/clickable)

[Make any content tappable and trigger actions when pressed.](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/actions/clickable)

[![Link](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2026-01/link-thumbnail-kMFbw5Hw.png)![Link](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2026-01/link-thumbnail-kMFbw5Hw.png)](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/actions/link)

[Link](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/actions/link)

[Make text interactive for lightweight actions, navigation triggers, or actions embedded within text content.](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/actions/link)

[![Tile](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/tile-thumbnail-BeEIvIUr.png)![Tile](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/tile-thumbnail-BeEIvIUr.png)](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/actions/tile)

[Tile](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/actions/tile)

[Display interactive buttons for the POS smart grid that allow merchants to complete actions quickly.](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/actions/tile)

### Feedback and status indicators

Feedback and status indicators keep staff informed about transaction status, errors, and confirmations during retail operations.

[![Badge](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/badge-thumbnail-QXbrPKEk.png)![Badge](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/badge-thumbnail-QXbrPKEk.png)](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/feedback-and-status-indicators/badge)

[Badge](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/feedback-and-status-indicators/badge)

[Use color and text to communicate the state of orders, products, customers, and other business data.](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/feedback-and-status-indicators/badge)

[![Banner](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/banner-thumbnail-uQujQLKj.png)![Banner](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/banner-thumbnail-uQujQLKj.png)](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/feedback-and-status-indicators/banner)

[Banner](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/feedback-and-status-indicators/banner)

[Highlight important information or required actions prominently within the POS interface.](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/feedback-and-status-indicators/banner)

[![Modal](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/modal-thumbnail-DcvNskAZ.png)![Modal](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/modal-thumbnail-DcvNskAZ.png)](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/feedback-and-status-indicators/modal)

[Modal](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/feedback-and-status-indicators/modal)

[Display content in an overlay that requires merchant attention before proceeding.](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/feedback-and-status-indicators/modal)

[![Spinner](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2026-01/spinner-thumbnail-D5R9doKW.png)![Spinner](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2026-01/spinner-thumbnail-D5R9doKW.png)](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/feedback-and-status-indicators/spinner)

[Spinner](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/feedback-and-status-indicators/spinner)

[Indicate ongoing processes or loading states with visual feedback.](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/feedback-and-status-indicators/spinner)

### Forms

Forms capture data during transactions with built-in validation and formatting optimized for mobile touch interfaces.

[![Choice list](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/choicelist-thumbnail-B-7-SDX3.png)![Choice list](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/choicelist-thumbnail-B-7-SDX3.png)](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/forms/choice-list)

[Choice list](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/forms/choice-list)

[Present multiple options for single or multiple selections.](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/forms/choice-list)

[![Date field](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/date-field-thumbnail-BeOrNvnN.png)![Date field](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/date-field-thumbnail-BeOrNvnN.png)](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/forms/date-field)

[Date field](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/forms/date-field)

[Capture date input with a consistent interface for date selection and proper validation.](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/forms/date-field)

[![Date picker](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/date-picker-thumbnail-Df5hnRCN.png)![Date picker](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/date-picker-thumbnail-Df5hnRCN.png)](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/forms/date-picker)

[Date picker](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/forms/date-picker)

[Allow merchants to select a specific date using a calendar-like picker interface.](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/forms/date-picker)

[![Date spinner](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/date-spinner-thumbnail-D_4rUv8K.png)![Date spinner](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/date-spinner-thumbnail-D_4rUv8K.png)](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/forms/date-spinner)

[Date spinner](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/forms/date-spinner)

[Enable merchants to select a specific date using a spinner interface with scrollable columns for month, day, and year.](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/forms/date-spinner)

[![Email field](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/email-field-thumbnail-C9D_v2QA.png)![Email field](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/email-field-thumbnail-C9D_v2QA.png)](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/forms/email-field)

[Email field](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/forms/email-field)

[Capture email address input from customers with built-in validation.](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/forms/email-field)

[![Number field](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/number-field-thumbnail-B1T9x-xs.png)![Number field](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/number-field-thumbnail-B1T9x-xs.png)](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/forms/number-field)

[Number field](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/forms/number-field)

[Capture numeric input with built-in validation.](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/forms/number-field)

[![Search field](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/search-field-thumbnail-DKt5Uftl.png)![Search field](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/search-field-thumbnail-DKt5Uftl.png)](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/forms/search-field)

[Search field](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/forms/search-field)

[Capture search terms using a single-line input field.](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/forms/search-field)

[![Switch](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2026-01/switch-thumbnail-a0H3GKge.png)![Switch](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2026-01/switch-thumbnail-a0H3GKge.png)](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/forms/switch)

[Switch](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/forms/switch)

[Toggle an option on or off for settings that take effect immediately.](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/forms/switch)

[![Text area](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/text-area-thumbnail-Ds3IAIkq.png)![Text area](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/text-area-thumbnail-Ds3IAIkq.png)](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/forms/text-area)

[Text area](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/forms/text-area)

[Capture longer text content with a multi-line, resizable text input area.](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/forms/text-area)

[![Text field](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/text-field-thumbnail-OpzYhMZ5.png)![Text field](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/text-field-thumbnail-OpzYhMZ5.png)](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/forms/text-field)

[Text field](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/forms/text-field)

[Capture single-line text input.](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/forms/text-field)

[![Time field](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/time-field-thumbnail-DMEL2zqD.png)![Time field](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/time-field-thumbnail-DMEL2zqD.png)](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/forms/time-field)

[Time field](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/forms/time-field)

[Capture time input with a consistent interface for time selection and validation.](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/forms/time-field)

[![Time picker](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/time-spinner-thumbnail-Cs2dHSve.png)![Time picker](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/time-spinner-thumbnail-Cs2dHSve.png)](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/forms/time-picker)

[Time picker](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/forms/time-picker)

[Allow merchants to select a specific time using an interactive picker interface.](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/forms/time-picker)

### Layout and structure

Layout and structure components create consistent visual hierarchy and spacing, presenting content clearly across different device sizes.

[![Box](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/box-thumbnail-BOPMWGII.png)![Box](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/box-thumbnail-BOPMWGII.png)](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/layout-and-structure/box)

[Box](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/layout-and-structure/box)

[Display a generic container with consistent spacing and styling.](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/layout-and-structure/box)

[![Divider](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/divider-thumbnail-BQslD_wx.png)![Divider](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/divider-thumbnail-BQslD_wx.png)](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/layout-and-structure/divider)

[Divider](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/layout-and-structure/divider)

[Create visual separation between content sections.](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/layout-and-structure/divider)

[![Empty state](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2026-01/emptystate-thumbnail-DZwcnKze.png)![Empty state](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2026-01/emptystate-thumbnail-DZwcnKze.png)](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/layout-and-structure/empty-state)

[Empty state](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/layout-and-structure/empty-state)

[Display a placeholder view when there's no content to show, guiding users on what to do next.](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/layout-and-structure/empty-state)

[![Heading](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/heading-thumbnail-BSzfWqtO.png)![Heading](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/heading-thumbnail-BSzfWqtO.png)](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/layout-and-structure/heading)

[Heading](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/layout-and-structure/heading)

[Render hierarchical titles to communicate the structure and organization of page content.](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/layout-and-structure/heading)

[![Page](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/page-thumbnail-LF5T5NeY.png)![Page](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/page-thumbnail-LF5T5NeY.png)](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/layout-and-structure/page)

[Page](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/layout-and-structure/page)

[Define full-screen views within modals with navigation titles and back button support.](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/layout-and-structure/page)

[![POS block](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/pos-block-thumbnail-N8RjWvpm.png)![POS block](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/pos-block-thumbnail-N8RjWvpm.png)](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/layout-and-structure/pos-block)

[POS block](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/layout-and-structure/pos-block)

[Create a container to place content with an action button.](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/layout-and-structure/pos-block)

[![Scroll box](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/scrollbox-thumbnail-BI7AErmN.png)![Scroll box](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/scrollbox-thumbnail-BI7AErmN.png)](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/layout-and-structure/scroll-box)

[Scroll box](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/layout-and-structure/scroll-box)

[Create a scrollable area for content that exceeds container bounds.](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/layout-and-structure/scroll-box)

[![Section](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/section-thumbnail-CvU3XDk2.png)![Section](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/section-thumbnail-CvU3XDk2.png)](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/layout-and-structure/section)

[Section](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/layout-and-structure/section)

[Group related content into clearly-defined thematic areas.](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/layout-and-structure/section)

[![Stack](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/stack-thumbnail-kNHnP8Rv.png)![Stack](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/stack-thumbnail-kNHnP8Rv.png)](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/layout-and-structure/stack)

[Stack](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/layout-and-structure/stack)

[Organize elements horizontally or vertically along the block or inline axis.](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/layout-and-structure/stack)

[![Tabs](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2026-01/tab-thumbnail-DW7FlCbb.png)![Tabs](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2026-01/tab-thumbnail-DW7FlCbb.png)](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/layout-and-structure/tabs)

[Tabs](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/layout-and-structure/tabs)

[Organize content into separate views that merchants can switch between without leaving the page.](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/layout-and-structure/tabs)

[![Text](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/text-thumbnail-BhieEYRm.png)![Text](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/text-thumbnail-BhieEYRm.png)](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/layout-and-structure/text)

[Text](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/layout-and-structure/text)

[Display text with specific visual styles or tones.](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/layout-and-structure/text)

### Media and visuals

Media and visuals display product images, icons, and branding elements that help staff identify products and communicate information.

[![Embed](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2026-01/embed-thumbnail-CC-IpLto.png)![Embed](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2026-01/embed-thumbnail-CC-IpLto.png)](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/media-and-visuals/embed)

[Embed](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/media-and-visuals/embed)

[Display a preview of printable content from a specified source URL.](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/media-and-visuals/embed)

[![Icon](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/icon-thumbnail-DjsFlE1e.png)![Icon](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/icon-thumbnail-DjsFlE1e.png)](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/media-and-visuals/icon)

[Icon](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/media-and-visuals/icon)

[Display standardized visual symbols from the POS catalog to represent actions, statuses, or categories consistently.](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/media-and-visuals/icon)

[![Image](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/image-thumbnail-CL0yEi7W.png)![Image](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/image-thumbnail-CL0yEi7W.png)](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/media-and-visuals/image)

[Image](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/media-and-visuals/image)

[Add visual content to the POS interface and customize the presentation of visuals.](https://shopify.dev/docs/api/pos-ui-extensions/latest/web-components/media-and-visuals/image)

***

---



<a id="latest-web-components-actions-button"></a>


## Button

The button component triggers actions or events, such as opening dialogs or navigating to other pages. Use button to let merchants perform specific tasks or to initiate interactions throughout the POS interface.

Buttons support various visual styles, tones, and interaction patterns to communicate intent and hierarchy within the interface.

#### Support Targets (27)

#### Supported targets

* [pos.​cart.​line-item-details.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/cart-details#cart-details-targets)
* [pos.​cart.​line-item-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/cart-details#cart-details-action-modal-)
* [pos.​customer-details.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/customer-details#customer-details-action-menu-item-)
* [pos.​customer-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/customer-details#customer-details-action-modal-)
* [pos.​customer-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/customer-details#customer-details-targets)
* [pos.​draft-order-details.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/draft-order-details#draft-order-details-action-menu-item-)
* [pos.​draft-order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/draft-order-details#draft-order-details-action-modal-)
* [pos.​draft-order-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/draft-order-details#draft-order-details-targets)
* [pos.​exchange.​post.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-exchange#post-exchange-action-menu-item-)
* [pos.​exchange.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-exchange#post-exchange-action-modal-)
* [pos.​exchange.​post.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-exchange#post-exchange-targets)
* [pos.​home.​modal.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/home-screen#home-screen-action-modal-)
* [pos.​order-details.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/order-details#order-details-action-menu-item-)
* [pos.​order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/order-details#order-details-action-modal-)
* [pos.​order-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/order-details#order-details-targets)
* [pos.​product-details.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details#product-details-action-menu-item-)
* [pos.​product-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details#product-details-action-modal-)
* [pos.​product-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details#product-details-targets)
* [pos.​purchase.​post.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-purchase#post-purchase-action-menu-item-)
* [pos.​purchase.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-purchase#post-purchase-action-modal-)
* [pos.​purchase.​post.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-purchase#post-purchase-targets)
* [pos.​register-details.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/register-details#register-details-targets)
* [pos.​register-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/register-details#register-details-action-modal-)
* [pos.​register-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/register-details#register-details-block-)
* [pos.​return.​post.​action.​menu-item.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-return#post-return-action-menu-item-)
* [pos.​return.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-return#post-return-action-modal-)
* [pos.​return.​post.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-return#post-return-targets)

##### Use cases

* **Primary actions:** Create actions like "Save changes," "Add customer," or "Process payment" that complete workflows.
* **Secondary actions:** Provide supporting actions such as "Cancel," "Edit," or "View details."
* **Navigation:** Enable screen transitions or launch modal experiences for complex operations.
* **Loading states:** Display loading indicators during asynchronous operations while preventing duplicate submissions.

***

### Properties

Triggers actions when selected by the merchant.

* **command**

  **'--auto' | '--show' | '--hide' | '--toggle'**

  **Default: '--auto'**

  Sets the action the `commandFor` should take when this clickable is activated.

  See the documentation of particular components for the actions they support.

  * `--auto`: a default action for the target component.
  * `--show`: shows the target component.
  * `--hide`: hides the target component.
  * `--toggle`: toggles the target component.

* **commandFor**

  **string**

  ID of a component that should respond to activations (e.g. clicks) on this component.

  See `command` for how to control the behavior of the target.

* **disabled**

  **boolean**

  **Default: false**

  Disables the button meaning it cannot be clicked or receive focus.

* **id**

  **string**

  A unique identifier for the element.

* **loading**

  **boolean**

  **Default: false**

  Replaces content with a loading indicator while a background action is being performed.

  This also disables the button.

* **tone**

  **'auto' | 'neutral' | 'caution' | 'warning' | 'critical'**

  **Default: 'auto'**

  Sets the tone of the button, based on the intention of the information being conveyed.

* **variant**

  **'primary' | 'secondary'**

  **Default: 'auto' - the variant is automatically determined by the button's context**

  Changes the visual appearance of the button.

#### Events

The button component provides event callbacks for handling user interactions. Learn more about [handling events](https://shopify.dev/docs/api/polaris/using-polaris-web-components#handling-events).

* **click**

  **(event: CallbackEvent<"s-button">) => void**

  Called when the button is activated.

#### CallbackEvent

* bubbles

  ```ts
  boolean
  ```

* cancelable

  ```ts
  boolean
  ```

* composed

  ```ts
  boolean
  ```

* currentTarget

  ```ts
  HTMLElementTagNameMap[T]
  ```

* detail

  ```ts
  any
  ```

* eventPhase

  ```ts
  number
  ```

* target

  ```ts
  HTMLElementTagNameMap[T] | null
  ```

***

### Examples

#### Trigger actions with a button

Trigger actions using a button component with customizable visual styles and tones. This example shows a basic button with text content.

### Trigger actions with a button

![Trigger actions using a button component with customizable visual styles and tones. This example shows a basic button with text content.](https://shopify.dev/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/button-default-DKZbKEDr.png)

### Trigger actions with a button

```html
<s-button variant="primary">Add customer</s-button>
<s-button variant="secondary">Select more items</s-button>
```

***

### Best practices

* **Write action-oriented text:** Use specific, actionable language like "Save customer" or "Process payment" rather than generic terms like "OK" or "Submit."
* **Choose appropriate variants and tones:** Use `primary` for the main action and `secondary` for supporting actions. Use `critical` for destructive actions, `caution` or `warning` for actions requiring attention.
* **Show loading states:** Set `loading` to `true` during async operations to prevent duplicate submissions.
* **Use command system for component control:** Use `commandFor` and `command` to control modals and overlays declaratively.
* **Structure hierarchies clearly:** Group related actions together. Separate destructive actions to prevent accidental activation.

***

---



<a id="latest-web-components-actions-clickable"></a>


## Clickable

The clickable component makes any content interactive. Use it to add click interactions to non-interactive elements while maintaining full control over their visual presentation.

Unlike the [button](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/actions/button) component, clickable doesn't impose visual styling, allowing you to create custom interactive elements. You must implement focus indicators and other visual cues yourself.

#### Support Targets (10)

#### Supported targets

* [pos.​cart.​line-item-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/cart-details#cart-details-action-modal-)
* [pos.​customer-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/customer-details#customer-details-action-modal-)
* [pos.​draft-order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/draft-order-details#draft-order-details-action-modal-)
* [pos.​exchange.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-exchange#post-exchange-action-modal-)
* [pos.​home.​modal.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/home-screen#home-screen-action-modal-)
* [pos.​order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/order-details#order-details-action-modal-)
* [pos.​product-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details#product-details-action-modal-)
* [pos.​purchase.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-purchase#post-purchase-action-modal-)
* [pos.​register-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/register-details#register-details-action-modal-)
* [pos.​return.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-return#post-return-action-modal-)

##### Use cases

* **Interactive cards:** Create custom cards that respond to clicks without button styling.
* **Clickable elements:** Make text, images, or icons clickable while preserving visual appearance.
* **Complex layouts:** Build interactive layouts with multiple clickable regions.
* **Custom interfaces:** Implement selection interfaces, galleries, or navigation with tailored designs.

***

### Properties

Makes contained content interactive and clickable.

* **disabled**

  **boolean**

  Disables the clickable, meaning it cannot be clicked or receive focus.

  In this state, onClick will not fire. If the click event originates from a child element, the event will immediately stop propagating from this element.

  However, items within the clickable can still receive focus and be interacted with.

  This has no impact on the visual state by default, but developers are encouraged to style the clickable accordingly.

* **id**

  **string**

  A unique identifier for the element.

#### Events

The clickable component provides event callbacks for handling user interactions. Learn more about [handling events](https://shopify.dev/docs/api/polaris/using-polaris-web-components#handling-events).

* **click**

  **(event: CallbackEvent<"s-clickable">) => void**

  Callback when the element is activated.

#### CallbackEvent

* bubbles

  ```ts
  boolean
  ```

* cancelable

  ```ts
  boolean
  ```

* composed

  ```ts
  boolean
  ```

* currentTarget

  ```ts
  HTMLElementTagNameMap[T]
  ```

* detail

  ```ts
  any
  ```

* eventPhase

  ```ts
  number
  ```

* target

  ```ts
  HTMLElementTagNameMap[T] | null
  ```

***

### Examples

#### Make content clickable

Make any content interactive using a clickable component wrapper without imposing visual styling. This example shows how to create custom interactive elements while maintaining full control over appearance.

### Make content clickable

![Make any content interactive using a clickable component wrapper without imposing visual styling. This example shows how to create custom interactive elements while maintaining full control over appearance.](https://shopify.dev/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/clickable-default-1lM16C1O.png)

### Make content clickable

```html
<s-clickable onClick={handleShippingSettings}>
  <s-box padding="base">
    <s-text>View shipping settings</s-text>
  </s-box>
</s-clickable>
```

***

### Best practices

* **Implement visual feedback:** Since clickable has no built-in styling, add focus indicators and active states to show interactivity.
* **Wrap non-interactive elements:** Use clickable for text, images, or icons. Avoid wrapping components with built-in interactions.
* **Handle disabled state carefully:** When `disabled`, child elements can still receive focus. Provide visual feedback for the non-interactive state.

***

### Limitations

The component doesn't automatically provide keyboard navigation support beyond basic click functionality.

***

---



<a id="latest-web-components-actions-link"></a>


## Link

The link component makes text interactive, allowing users to trigger actions through tappable text. Use it for lightweight interactions, navigation triggers, or actions embedded within text content.

Links support the command system for controlling other components declaratively. Use `command` and `commandFor` to show, hide, or toggle modals and other targetable elements. For primary actions like submitting forms or triggering operations, use [button](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/actions/button) instead.

#### Support Targets (10)

#### Supported targets

* [pos.​cart.​line-item-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/cart-details#cart-details-action-modal-)
* [pos.​customer-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/customer-details#customer-details-action-modal-)
* [pos.​draft-order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/draft-order-details#draft-order-details-action-modal-)
* [pos.​exchange.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-exchange#post-exchange-action-modal-)
* [pos.​home.​modal.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/home-screen#home-screen-action-modal-)
* [pos.​order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/order-details#order-details-action-modal-)
* [pos.​product-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details#product-details-action-modal-)
* [pos.​purchase.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-purchase#post-purchase-action-modal-)
* [pos.​register-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/register-details#register-details-action-modal-)
* [pos.​return.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-return#post-return-action-modal-)

##### Use cases

* **Inline navigation:** Add tappable text links within content to navigate between related views or open detail screens.
* **Help references:** Link to help documentation, policies, or external resources from within the POS interface.
* **Modal triggers:** Use the command system to show, hide, or toggle modals and other targetable elements through text links.
* **Contextual actions:** Embed lightweight actions within text content, such as "View order" or "Contact customer" links.

***

### Properties

The link component makes text interactive, allowing users to trigger actions through tappable text. Use it for lightweight interactions, navigation triggers, or actions embedded within text content.

Links support the command system for controlling other components declaratively. Use `command` and `commandFor` to show, hide, or toggle modals and other targetable elements. For primary actions like submitting forms or triggering operations, use [button](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/actions/button) instead.

* **accessibilityLabel**

  **string**

  A label that describes the purpose or contents of the link. It will be read to users using assistive technologies such as screen readers.

  Use this when using only an icon or the content of the link is not enough context for users using assistive technologies.

* **command**

  **'--auto' | '--show' | '--hide' | '--toggle' | '--copy'**

  **Default: '--auto'**

  Sets the action the `commandFor` should take when this clickable is activated.

  See the documentation of particular components for the actions they support.

  * `--auto`: a default action for the target component.
  * `--show`: shows the target component.
  * `--hide`: hides the target component.
  * `--toggle`: toggles the target component.
  * `--copy`: copies the target ClipboardItem.

* **commandFor**

  **string**

  ID of a component that should respond to activations (e.g. clicks) on this component.

  See `command` for how to control the behavior of the target.

* **id**

  **string**

  A unique identifier for the element.

#### Events

The link component provides event callbacks for handling user interactions. Learn more about [handling events](https://shopify.dev/docs/api/polaris/using-polaris-web-components#handling-events).

* **click**

  **(event: CallbackEvent<"s-link">) => void**

  Called when the link is activated.

#### CallbackEvent

* bubbles

  ```ts
  boolean
  ```

* cancelable

  ```ts
  boolean
  ```

* composed

  ```ts
  boolean
  ```

* currentTarget

  ```ts
  HTMLElementTagNameMap[T]
  ```

* detail

  ```ts
  any
  ```

* eventPhase

  ```ts
  number
  ```

* target

  ```ts
  HTMLElementTagNameMap[T] | null
  ```

***

### Examples

#### Create an interactive link

Create interactive links using the link component. This example demonstrates basic link usage with onClick handlers for custom actions.

### Create an interactive link

![Create interactive links using the link component. This example demonstrates basic link usage with onClick handlers for custom actions.](https://shopify.dev/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2026-01/link-default-D3sbafMb.png)

### Create an interactive link

```html
<s-link onClick={handleLinkTap}>Tappable link</s-link>
```

***

### Best practices

* **Write clear, descriptive text:** link text should clearly indicate the action or destination, helping users understand what will happen when they tap.
* **Keep text concise:** Use brief, actionable language that doesn't clutter the interface. Links work well embedded within text content.
* **Provide accessibility labels when needed:** Use `accessibilityLabel` when the visible text doesn't fully describe the action, especially for short labels like "Edit" or "View".
* **Use the command system for component control:** Use `command` (`--show`, `--hide`, `--toggle`, `--copy`) with `commandFor` to control modals and other components declaratively.
* **Handle onClick for custom logic:** Implement `onClick` handlers for actions like showing toasts, updating state, or triggering side effects.
* **Reserve buttons for primary actions:** Use button for prominent actions like "Save" or "Submit". Use link for secondary, embedded, or text-based interactions.

***

---



<a id="latest-web-components-actions-tile"></a>


## Tile

The tile component displays interactive buttons for the POS smart grid. Use tiles as customizable shortcuts that allow merchants to quickly access workflows, actions, and information from the smart grid.

Tiles can change their appearance, content, and enabled state based on surrounding context such as cart contents, device conditions, or runtime state. They can display contextual information through headings, subheadings, and badge values.

Each POS UI extension can only render one tile component for each [home screen tile target](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/home-screen#home-screen-tile-).

#### Support Targets (1)

#### Supported targets

* [pos.​home.​tile.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/home-screen#home-screen-targets)

##### Use cases

* **Quick actions:** Create action shortcuts like "Apply 10% discount" or "Add popular item."
* **Contextual info:** Display dynamic subheadings showing cart totals or item counts.
* **Notifications:** Show badges for pending items, alerts, or status indicators.
* **Workflow entry:** Provide entry points to launch detailed modal workflows.

***

### Properties

Displays tappable content in a compact tile layout.

* **disabled**

  **boolean**

  **Default: false**

  Disables the tile meaning it cannot be clicked or receive focus.

* **heading**

  **string**

  **Default: ''**

  A title that describes the content of the tile.

* **id**

  **string**

  A unique identifier for the element.

* **itemCount**

  **number**

  A numeric indicator rendered within the tile (for example, a count or a step number).

  * When provided, the indicator is displayed inside the tile.
  * Intended for small integers. It may clamp, truncate, or abbreviate larger values.

* **subheading**

  **string**

  **Default: ''**

  Supporting text displayed below the heading.

* **tone**

  **'auto' | 'neutral' | 'accent'**

  **Default: 'auto'**

  Sets the tone of the tile, based on the intention of the information being conveyed.

#### Events

The tile component provides event callbacks for handling user interactions. Learn more about [handling events](https://shopify.dev/docs/api/polaris/using-polaris-web-components#handling-events).

* **click**

  **(event: CallbackEvent<"s-tile">) => void**

  Callback when the tile is activated.

#### CallbackEvent

* bubbles

  ```ts
  boolean
  ```

* cancelable

  ```ts
  boolean
  ```

* composed

  ```ts
  boolean
  ```

* currentTarget

  ```ts
  HTMLElementTagNameMap[T]
  ```

* detail

  ```ts
  any
  ```

* eventPhase

  ```ts
  number
  ```

* target

  ```ts
  HTMLElementTagNameMap[T] | null
  ```

***

### Examples

#### Create a smart grid tile

Create interactive smart grid shortcuts using a tile component with customizable heading, subheading, and badge. This example shows a basic tile for the POS smart grid.

### Create a smart grid tile

![Create interactive smart grid shortcuts using a tile component with customizable heading, subheading, and badge. This example shows a basic tile for the POS smart grid.](https://shopify.dev/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2026-01/tile-default-Bh6-qbCa.png)

### Create a smart grid tile

```html
<s-tile heading="Extension title" subheading="Subtitle" />
<s-tile heading="Extension title" subheading="Subtitle" tone="accent" />
```

***

### Best practices

* **Write action-oriented headings:** Use specific language like "Apply loyalty discount" rather than generic terms like "Loyalty app."
* **Provide contextual subheadings:** Show dynamic information like cart totals, eligibility requirements, or current status.
* **Use meaningful item counts:** Display counts for actionable items like pending notifications or items requiring action, not just informational counts.
* **Launch modals for workflows:** Use `onClick` with `shopify.action.presentModal()` rather than performing complex operations directly.

***

### Limitations

The tile component supports click and long press interactions only. Swipe, drag, and other gestures aren't supported.

***

---



<a id="latest-web-components-feedback-and-status-indicators-badge"></a>


## Badge

The badge component uses color and text to communicate status information for orders, products, customers, and other business data. Use badges to create visual hierarchy and help merchants quickly identify important information or status changes.

Badges aren't interactive elements. They display information but don't respond to user interactions like clicks or taps.

#### Support Targets (18)

#### Supported targets

* [pos.​cart.​line-item-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/cart-details#cart-details-action-modal-)
* [pos.​customer-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/customer-details#customer-details-action-modal-)
* [pos.​customer-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/customer-details#customer-details-targets)
* [pos.​draft-order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/draft-order-details#draft-order-details-action-modal-)
* [pos.​draft-order-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/draft-order-details#draft-order-details-targets)
* [pos.​exchange.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-exchange#post-exchange-action-modal-)
* [pos.​exchange.​post.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-exchange#post-exchange-targets)
* [pos.​home.​modal.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/home-screen#home-screen-action-modal-)
* [pos.​order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/order-details#order-details-action-modal-)
* [pos.​order-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/order-details#order-details-targets)
* [pos.​product-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details#product-details-action-modal-)
* [pos.​product-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details#product-details-targets)
* [pos.​purchase.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-purchase#post-purchase-action-modal-)
* [pos.​purchase.​post.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-purchase#post-purchase-targets)
* [pos.​register-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/register-details#register-details-action-modal-)
* [pos.​register-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/register-details#register-details-block-)
* [pos.​return.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-return#post-return-action-modal-)
* [pos.​return.​post.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-return#post-return-targets)

##### Use cases

* **Order status:** Display status indicators like "Paid," "Pending," or "Refunded" for quick visibility.
* **Inventory states:** Show availability like "In Stock," "Low Stock," or "Out of Stock."
* **Customer status:** Indicate account status like "VIP," "New Customer," or "Loyalty Member."
* **Labels:** Categorize items with labels like "Featured," "Sale," or "New."

***

### Properties

Displays compact status text with optional semantic tone.

* **id**

  **string**

  A unique identifier for the element.

* **tone**

  **| 'auto' | 'neutral' | 'info' | 'success' | 'caution' | 'warning' | 'critical'**

  **Default: 'auto'**

  Sets the tone of the badge, based on the intention of the information being conveyed.

***

### Examples

#### Display status information with a badge

Display status information using a badge component with customizable tone and content. This example shows a basic badge with a tone property to indicate status through color.

### Display status information with a badge

![Display status information using a badge component with customizable tone and content. This example shows a basic badge with a tone property to indicate status through color.](https://shopify.dev/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/badge-default-DVziMZIg.png)

### Display status information with a badge

```html
<s-badge tone="neutral">Paid</s-badge>
<s-badge tone="success">Active</s-badge>
<s-badge tone="info">Draft</s-badge>
<s-badge tone="warning">On hold</s-badge>
<s-badge tone="critical">Action required</s-badge>
```

***

### Best practices

* **Apply appropriate tones:** Use `success` for positive states, `critical` for urgent issues, `warning` for attention-needed states, `info` for neutral information.
* **Keep text brief:** Use single words or short phrases. Avoid lengthy descriptions that don't fit the compact design.
* **Position near related content:** Place badges next to the items they describe for clear associations.
* **Use for status, not actions:** Badges display information only. For interactive elements, use buttons or clickable components.

***

### Limitations

Very long text content may be truncated or cause layout issues depending on the container and screen size.

***

---



<a id="latest-web-components-feedback-and-status-indicators-banner"></a>


## Banner

The banner component highlights important information or required actions. Use banners to communicate critical updates, warnings, informational messages, or success notifications that require merchant attention.

Banners provide persistent visibility with support for dismissible and non-dismissible states.

#### Support Targets (10)

#### Supported targets

* [pos.​cart.​line-item-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/cart-details#cart-details-action-modal-)
* [pos.​customer-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/customer-details#customer-details-action-modal-)
* [pos.​draft-order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/draft-order-details#draft-order-details-action-modal-)
* [pos.​exchange.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-exchange#post-exchange-action-modal-)
* [pos.​home.​modal.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/home-screen#home-screen-action-modal-)
* [pos.​order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/order-details#order-details-action-modal-)
* [pos.​product-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details#product-details-action-modal-)
* [pos.​purchase.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-purchase#post-purchase-action-modal-)
* [pos.​register-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/register-details#register-details-action-modal-)
* [pos.​return.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-return#post-return-action-modal-)

##### Use cases

* **System alerts:** Display alerts about maintenance, outages, or important updates.
* **Error messages:** Show critical errors like payment failures or connectivity issues.
* **Success feedback:** Communicate successful completion of actions like order processing or sync.
* **Warnings:** Alert merchants to low inventory, expired payments, or business-critical conditions.

***

### Properties

Shows prominent status and messaging content with optional actions.

* **heading**

  **string**

  **Default: ''**

  The title of the banner.

* **hidden**

  **boolean**

  **Default: false**

  Determines whether the banner is hidden.

* **id**

  **string**

  A unique identifier for the element.

* **tone**

  **'auto' | 'info' | 'success' | 'warning' | 'critical'**

  **Default: 'auto'**

  Sets the tone of the banner, based on the intention of the information being conveyed.

#### Slots

The banner component supports slots for additional content placement within the banner. Learn more about [using slots](https://shopify.dev/docs/api/polaris/using-polaris-web-components#slots).

* **primary-action**

  **HTMLElement**

  The action taken when the banner is pressed.

***

### Examples

#### Display important messages with a banner

Display important messages using a banner component with automatic color coding based on message severity. This example shows a basic banner with a heading and descriptive text.

### Display important messages with a banner

![Display important messages using a banner component with automatic color coding based on message severity. This example shows a basic banner with a heading and descriptive text.](https://shopify.dev/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/banner-default-pHfT_2ZJ.png)

### Display important messages with a banner

```html
<s-banner heading="Marked as delivered" tone="success">
  <s-button slot="primary-action">Dismiss</s-button>
</s-banner>


<s-banner heading="Ready for shipping" tone="info">
  <s-button slot="primary-action">Dismiss</s-button>
</s-banner>


<s-banner heading="Couldn't restock items" tone="warning">
  <s-button slot="primary-action">Dismiss</s-button>
</s-banner>


<s-banner heading="Action failed. Contact developer" tone="critical">
  <s-button slot="primary-action">Dismiss</s-button>
</s-banner>
```

***

### Best practices

* **Apply appropriate tones:** Use `critical` for errors requiring immediate action, `warning` for important notices, `success` for confirmations, `info` for general information.
* **Keep headings concise:** Write brief headings that clearly communicate the message. Use the collapsible feature for additional detail.
* **Show one banner at a time:** Display only one banner to avoid overwhelming the interface. Prioritize by importance.
* **Make non-critical banners dismissible:** Allow dismissal for non-critical information. Keep critical alerts non-dismissible until resolved.
* **Include clear actions:** If action is needed, use the primaryAction slot to provide clear next steps.
* **Use for persistent messages:** Use banners for messages that need to persist. For temporary notifications, consider toast notifications.

***

---



<a id="latest-web-components-feedback-and-status-indicators-modal"></a>


## Modal

The modal component displays content in an overlay that requires merchant attention. Use modals to present critical information, confirmations, or focused tasks while maintaining page context.

Modals block interaction with the underlying interface until the merchant resolves the modal content.

Modals don't automatically handle state management or persistence, so manage visibility and lifecycle programmatically through [events](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/feedback-and-status-indicators/modal#events).

#### Support Targets (18)

#### Supported targets

* [pos.​cart.​line-item-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/cart-details#cart-details-action-modal-)
* [pos.​customer-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/customer-details#customer-details-action-modal-)
* [pos.​customer-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/customer-details#customer-details-targets)
* [pos.​draft-order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/draft-order-details#draft-order-details-action-modal-)
* [pos.​draft-order-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/draft-order-details#draft-order-details-targets)
* [pos.​exchange.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-exchange#post-exchange-action-modal-)
* [pos.​exchange.​post.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-exchange#post-exchange-targets)
* [pos.​home.​modal.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/home-screen#home-screen-action-modal-)
* [pos.​order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/order-details#order-details-action-modal-)
* [pos.​order-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/order-details#order-details-targets)
* [pos.​product-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details#product-details-action-modal-)
* [pos.​product-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details#product-details-targets)
* [pos.​purchase.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-purchase#post-purchase-action-modal-)
* [pos.​purchase.​post.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-purchase#post-purchase-targets)
* [pos.​register-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/register-details#register-details-action-modal-)
* [pos.​register-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/register-details#register-details-block-)
* [pos.​return.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-return#post-return-action-modal-)
* [pos.​return.​post.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-return#post-return-targets)

##### Use cases

* **Confirmations:** Display confirmation dialogs for critical actions like refunds or data deletion.
* **Detailed views:** Present information requiring focused attention, like error details or status.
* **Data collection:** Collect input through forms or settings panels without navigating away.
* **Progress indicators:** Show progress for long-running operations like imports or sync.

***

### Properties

The modal component displays content in an overlay that requires merchant attention. Use modals to present critical information, confirmations, or focused tasks while maintaining page context.

Modals block interaction with the underlying interface until the merchant resolves the modal content.

Modals don't automatically handle state management or persistence, so manage visibility and lifecycle programmatically through [events](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/feedback-and-status-indicators/modal#events).

* **heading**

  **string**

  A title that describes the content of the modal.

* **id**

  **string**

  A unique identifier for the element.

#### Slots

The modal component supports slots for additional content placement within the modal. Learn more about [using slots](https://shopify.dev/docs/api/polaris/using-polaris-web-components#slots).

* **primary-action**

  **HTMLElement**

  The primary action button displayed in the modal.

  The tone of the button is used to define the tone of the modal.

  If omitted, the modal will default to an 'info' tone, and show an 'OK' button, translated according to the user's locale.

* **secondary-actions**

  **HTMLElement**

  The secondary action buttons displayed in the modal.

#### Events

The modal component provides event callbacks for handling user interactions. Learn more about [handling events](https://shopify.dev/docs/api/polaris/using-polaris-web-components#handling-events).

* **hide**

  **(event: CallbackEvent<"s-modal">) => void**

  Callback when the modal is hidden.

* **show**

  **(event: CallbackEvent<"s-modal">) => void**

  Callback when the modal is shown.

#### CallbackEvent

* bubbles

  ```ts
  boolean
  ```

* cancelable

  ```ts
  boolean
  ```

* composed

  ```ts
  boolean
  ```

* currentTarget

  ```ts
  HTMLElementTagNameMap[T]
  ```

* detail

  ```ts
  any
  ```

* eventPhase

  ```ts
  number
  ```

* target

  ```ts
  HTMLElementTagNameMap[T] | null
  ```

***

### Examples

#### Display content in a modal overlay

Display focused content in an overlay using a modal component that requires merchant attention. This example shows a basic modal with header, content area, and action buttons.

### Display content in a modal overlay

![Display focused content in an overlay using a modal component that requires merchant attention. This example shows a basic modal with header, content area, and action buttons.](https://shopify.dev/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/modal-default-YoMcdyhB.png)

### Display content in a modal overlay

```html
<s-button command="--show" commandFor="modal">
  Open modal
</s-button>
<s-modal id="modal" heading="Changes could not be saved">
  Please check your internet connection and try again.
  <s-button slot="primary-action">OK</s-button>
</s-modal>
```

***

### Best practices

* **Use for focused interactions:** Reserve modals for confirmations, critical information, or tasks requiring immediate attention.
* **Write clear headings:** Use concise titles that communicate the purpose or action.
* **Choose appropriate button tones:** The primary-action button's `tone` determines the modal's overall tone. Use `critical` for destructive actions, `success` for confirmations.
* **Include secondary actions:** Provide options like "Cancel" or "Go Back" to give merchants flexibility.
* **Keep content focused:** Limit to essential information and actions. For complex workflows, break into multiple steps.

***

### Limitations

Multiple modals can't be displayed simultaneously—showing a new modal while another is visible may cause unexpected behavior or poor user experience.

***

---



<a id="latest-web-components-feedback-and-status-indicators-spinner"></a>


## Spinner

The spinner component indicates ongoing processes or loading states. Use it to provide visual feedback when content is loading or an operation is in progress, helping users understand that the system is working.

#### Support Targets (10)

#### Supported targets

* [pos.​cart.​line-item-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/cart-details#cart-details-action-modal-)
* [pos.​customer-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/customer-details#customer-details-action-modal-)
* [pos.​draft-order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/draft-order-details#draft-order-details-action-modal-)
* [pos.​exchange.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-exchange#post-exchange-action-modal-)
* [pos.​home.​modal.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/home-screen#home-screen-action-modal-)
* [pos.​order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/order-details#order-details-action-modal-)
* [pos.​product-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details#product-details-action-modal-)
* [pos.​purchase.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-purchase#post-purchase-action-modal-)
* [pos.​register-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/register-details#register-details-action-modal-)
* [pos.​return.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-return#post-return-action-modal-)

##### Use cases

* **Data loading:** Indicate when product catalogs, customer lists, or order histories are being fetched.
* **Processing feedback:** Show that an operation like payment processing, sync, or data submission is in progress.
* **Search results:** Display a loading state while search results are being retrieved from the server.
* **Content transitions:** Provide visual feedback during content transitions or screen loading.

***

### Properties

Displays a loading indicator while content or actions are in progress.

* **accessibilityLabel**

  **string**

  A label that describes the purpose of the progress. When set, it will be announced to users using assistive technologies and will provide them with more context. Providing an `accessibilityLabel` is recommended if there is no accompanying text describing that something is loading.

* **id**

  **string**

  A unique identifier for the element.

***

### Examples

#### Show loading state with a spinner

Display loading states using a spinner component. This example shows a basic spinner that indicates an ongoing process.

### Show loading state with a spinner

![Display loading states using a spinner component. This example shows a basic spinner that indicates an ongoing process.](https://shopify.dev/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2026-01/spinner-default-DBmbHLPC.png)

### Show loading state with a spinner

```html
<s-spinner accessibilityLabel="Loading content" />
<s-spinner accessibilityLabel="Loading content" />
<s-spinner accessibilityLabel="Loading content" />
```

***

### Best practices

* **Use for asynchronous operations:** Display spinners during data fetching, form submission, or any operation that requires waiting time.
* **Provide accessibility labels:** Always use `accessibilityLabel` to describe what is loading, helping screen reader users understand the context.
* **Position strategically:** Place spinners where content will appear, or center them in the loading area to provide clear visual feedback.
* **Don't overuse:** Avoid multiple spinners on the same screen. Use a single spinner to represent the overall loading state when possible.
* **Consider alternatives for long waits:** For operations taking more than a few seconds, consider using status messages instead.

***

---



<a id="latest-web-components-forms-choice-list"></a>


## Choice list

The choice list component presents multiple options for single or multiple selections. Use it when merchants need to choose from a defined set of options, such as filtering results or collecting preferences.

The component supports both single selection (radio button behavior) and multiple selection (checkbox behavior) modes. It offers multiple layout variants including list, inline, block, and grid formats to suit different space constraints and visual requirements.

#### Support Targets (10)

#### Supported targets

* [pos.​cart.​line-item-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/cart-details#cart-details-action-modal-)
* [pos.​customer-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/customer-details#customer-details-action-modal-)
* [pos.​draft-order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/draft-order-details#draft-order-details-action-modal-)
* [pos.​exchange.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-exchange#post-exchange-action-modal-)
* [pos.​home.​modal.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/home-screen#home-screen-action-modal-)
* [pos.​order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/order-details#order-details-action-modal-)
* [pos.​product-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details#product-details-action-modal-)
* [pos.​purchase.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-purchase#post-purchase-action-modal-)
* [pos.​register-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/register-details#register-details-action-modal-)
* [pos.​return.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-return#post-return-action-modal-)

##### Use cases

* **Option selection:** Create fields where users select one or multiple options from a list.
* **Filtering:** Implement filtering where users select categories or attributes to refine content.
* **Settings:** Provide configuration options where users choose preferences.
* **Multi-select:** Enable scenarios like choosing multiple product variants or categories.

***

### Properties

Groups one or more selectable choices.

* **id**

  **string**

  A unique identifier for the element.

* **multiple**

  **boolean**

  **Default: false**

  Whether multiple choices can be selected.

* **values**

  **string\[]**

  An array of the `value`s of the selected options.

  This is a convenience prop for setting the `selected` prop on child options.

#### Events

The choice list component provides event callbacks for handling user interactions. Learn more about [handling events](https://shopify.dev/docs/api/polaris/using-polaris-web-components#handling-events).

* **change**

  **(event: CallbackEvent<"s-choice-list">) => void**

  Callback when the user changes a choice. Fires simultaneously with onInput.

* **input**

  **(event: CallbackEvent<"s-choice-list">) => void**

  Callback when the user changes a choice. Fires simultaneously with onChange.

#### CallbackEvent

* bubbles

  ```ts
  boolean
  ```

* cancelable

  ```ts
  boolean
  ```

* composed

  ```ts
  boolean
  ```

* currentTarget

  ```ts
  HTMLElementTagNameMap[T]
  ```

* detail

  ```ts
  any
  ```

* eventPhase

  ```ts
  number
  ```

* target

  ```ts
  HTMLElementTagNameMap[T] | null
  ```

***

### Choice

Represents a selectable option within a choice list.

* **disabled**

  **boolean**

  **Default: false**

  Disables the control, disallowing any interaction.

* **id**

  **string**

  A unique identifier for the element.

* **selected**

  **boolean**

  **Default: false**

  Whether the control is active.

* **value**

  **string**

  The value used in form data when the control is checked.

***

### Examples

#### Create a choice list for selections

Present options using a choice list component. This example shows a basic choice list for single selection.

### Create a choice list for selections

![Present options using a choice list component. This example shows a basic choice list for single selection.](https://shopify.dev/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/choicelist-default-BdR0OK5p.png)

### Create a choice list for selections

```html
<s-choice-list>
  <s-choice value="s" selected>Small</s-choice>
  <s-choice value="m">Medium</s-choice>
  <s-choice value="l">Large</s-choice>
  <s-choice value="xl">Extra large</s-choice>
</s-choice-list>
```

#### Enable multiple selection mode

Enable multiple selection mode to allow merchants to select multiple options from the list. This example demonstrates using controlled values with the `multiple` property, perfect for filtering interfaces or collecting multiple preferences in forms.

### Enable multiple selection mode

```tsx
<s-choice-list 
  multiple
  values={['small', 'medium']}
  onChange={(event) => console.log('Selected:', event.currentTarget.values)}
>
  <s-choice value="small">Small</s-choice>
  <s-choice value="medium">Medium</s-choice>
  <s-choice value="large">Large</s-choice>
</s-choice-list>
```

#### Handle selection events

Subscribe to `onChange` and `onInput` events to respond when merchants select options. This example shows how to handle selection changes and capture user input in real time, enabling dynamic behavior and form validation based on merchant choices.

### Handle selection events

```tsx
<s-choice-list
  onChange={(event) => console.log('onChange:', event.currentTarget.values)}
  onInput={(event) => console.log('onInput:', event.currentTarget.values)}
>
  <s-choice value="option1">Option 1</s-choice>
  <s-choice value="option2" disabled>Option 2 (disabled)</s-choice>
  <s-choice value="option3">Option 3</s-choice>
</s-choice-list>
```

#### Compose rich choice content

Compose rich choice content by nesting other components within choice elements. This example demonstrates combining images, text, and layout components to create visually enhanced choice options with descriptions and supporting images.

### Compose rich choice content

```tsx
<s-choice-list>
  {/* Composed choice with image and text */}
  <s-choice value="option1">
    <s-stack gap="small-200" alignItems="center" direction="inline">
      <s-box blockSize="40px" inlineSize="40px">
        <s-image src="https://placehold.co/60x60" inlineSize="fill" objectFit="cover" />
      </s-box>
      <s-box>
        <s-text>Option 1</s-text>
        <s-text type="small" color="subdued">
          Additional details for option 1
        </s-text>
      </s-box>
    </s-stack>
  </s-choice>


  {/* Composed choice with nested text */}
  <s-choice value="option2">
    <s-text type="strong">
      Option 2
      <s-text type="small" color="subdued">
        Additional details for option 2
      </s-text>
    </s-text>
  </s-choice>


  {/* Mix of text and composed elements */}
  <s-choice value="option3" disabled>
    Option 3
    <s-text type="small" color="subdued">
      (disabled)
    </s-text>
    <s-text type="strong">Additional details for option 3</s-text>
  </s-choice>
</s-choice-list>
```

***

### Best practices

* **Choose appropriate selection modes:** Use single selection for mutually exclusive options. Enable `multiple` when merchants can select more than one.
* **Write clear, concise choice labels:** Keep labels short but descriptive enough that merchants understand each option without additional explanation.

***

### Limitations

Choice list component types other than choice can't be used as options within the choice list.

***

---



<a id="latest-web-components-forms-date-field"></a>


## Date field

The date field component captures date input with a consistent interface for date selection and proper validation. Use it to collect date information in forms, scheduling interfaces, or data entry workflows.

The component supports manual text entry. For visual calendar-based selection, consider using [date picker](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/date-picker) or [date spinner](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/date-spinner) components.

#### Support Targets (10)

#### Supported targets

* [pos.​cart.​line-item-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/cart-details#cart-details-action-modal-)
* [pos.​customer-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/customer-details#customer-details-action-modal-)
* [pos.​draft-order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/draft-order-details#draft-order-details-action-modal-)
* [pos.​exchange.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-exchange#post-exchange-action-modal-)
* [pos.​home.​modal.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/home-screen#home-screen-action-modal-)
* [pos.​order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/order-details#order-details-action-modal-)
* [pos.​product-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details#product-details-action-modal-)
* [pos.​purchase.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-purchase#post-purchase-action-modal-)
* [pos.​register-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/register-details#register-details-action-modal-)
* [pos.​return.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-return#post-return-action-modal-)

##### Use cases

* **Scheduling:** Collect appointment dates, delivery dates, or scheduling information.
* **Transaction dates:** Capture transaction dates or expiration dates in financial interfaces.
* **Filtering:** Provide date-based filtering controls for reports or transaction histories.
* **Validation:** Support form submissions with proper date validation.

***

### Properties

Collects date input as text.

* **details**

  **string**

  Additional text to provide context or guidance for the field. This text is displayed along with the field and its label to offer more information or instructions to the user.

  This will also be exposed to screen reader users.

* **disabled**

  **boolean**

  **Default: false**

  Disables the field, disallowing any interaction.

* **error**

  **string**

  Indicate an error to the user. The field will be given a specific stylistic treatment to communicate problems that have to be resolved immediately.

* **id**

  **string**

  A unique identifier for the element.

* **label**

  **string**

  Content to use as the field label.

* **required**

  **boolean**

  **Default: false**

  Whether the field needs a value. This requirement adds semantic value to the field, but it will not cause an error to appear automatically. If you want to present an error when this field is empty, you can do so with the `error` property.

* **value**

  **string**

  The current value for the field. If omitted, the field will be empty.

#### Events

The date field component provides event callbacks for handling user interactions. Learn more about [handling events](https://shopify.dev/docs/api/polaris/using-polaris-web-components#handling-events).

* **blur**

  **(event: CallbackEvent<"s-date-field">) => void**

  Callback when the element loses focus.

* **change**

  **(event: CallbackEvent<"s-date-field">) => void**

  Callback after editing completes (typically on blur).

* **focus**

  **(event: CallbackEvent<"s-date-field">) => void**

  Callback when the element receives focus.

* **input**

  **(event: CallbackEvent<"s-date-field">) => void**

  Callback when the user makes any changes in the field.

#### CallbackEvent

* bubbles

  ```ts
  boolean
  ```

* cancelable

  ```ts
  boolean
  ```

* composed

  ```ts
  boolean
  ```

* currentTarget

  ```ts
  HTMLElementTagNameMap[T]
  ```

* detail

  ```ts
  any
  ```

* eventPhase

  ```ts
  number
  ```

* target

  ```ts
  HTMLElementTagNameMap[T] | null
  ```

***

### Examples

#### Capture date input with a date field

Capture date input using a date field component with built-in validation and picker integration. This example shows a basic date field with label and placeholder text.

### Capture date input with a date field

![Capture date input using a date field component with built-in validation and picker integration. This example shows a basic date field with label and placeholder text.](https://shopify.dev/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/date-field-default-C-zMSYMx.png)

### Capture date input with a date field

```html
<s-date-field 
  label="Date" 
  value="2025-10-08"
/>
```

#### Handle date selection events

Subscribe to date input events to respond when merchants select or enter dates. This example shows how to handle `onChange` events to capture date selections, enabling real-time validation, date range checks, or dynamic scheduling behavior based on merchant input.

### Handle date selection events

```tsx
<s-date-field 
  label="Order date"
  value="2024-10-26"
  onInput={(event) => console.log('Input:', event.currentTarget.value)}
  onChange={(event) => console.log('Change:', event.currentTarget.value)}
  onFocus={(event) => console.log('Focused with:', event.currentTarget.value)}
  onBlur={(event) => console.log('Blurred with:', event.currentTarget.value)}
/>
```

***

### Best practices

* **Choose for direct text input:** Use date field when users know the exact date and can type it efficiently. Use [date picker](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/date-picker) for calendar selection or [date spinner](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/date-spinner) for space-constrained layouts.
* **Explain date constraints:** Use `details` to clarify requirements like "Select a date within the next 30 days" or "Must be a future date."
* **Write actionable error messages:** Provide clear validation messages for invalid dates that help users correct their input.

***

---



<a id="latest-web-components-forms-date-picker"></a>


## Date picker

The date picker component allows merchants to select dates using a calendar interface. Use it when merchants benefit from seeing dates in context of the full month, such as selecting dates relative to today or needing weekday context.

The component supports single dates, multiple dates, and date ranges. For tight spaces, consider using [date spinner](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/date-spinner) instead. For text date entry, use [date field](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/date-field).

#### Support Targets (18)

#### Supported targets

* [pos.​cart.​line-item-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/cart-details#cart-details-action-modal-)
* [pos.​customer-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/customer-details#customer-details-action-modal-)
* [pos.​customer-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/customer-details#customer-details-targets)
* [pos.​draft-order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/draft-order-details#draft-order-details-action-modal-)
* [pos.​draft-order-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/draft-order-details#draft-order-details-targets)
* [pos.​exchange.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-exchange#post-exchange-action-modal-)
* [pos.​exchange.​post.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-exchange#post-exchange-targets)
* [pos.​home.​modal.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/home-screen#home-screen-action-modal-)
* [pos.​order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/order-details#order-details-action-modal-)
* [pos.​order-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/order-details#order-details-targets)
* [pos.​product-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details#product-details-action-modal-)
* [pos.​product-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details#product-details-targets)
* [pos.​purchase.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-purchase#post-purchase-action-modal-)
* [pos.​purchase.​post.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-purchase#post-purchase-targets)
* [pos.​register-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/register-details#register-details-action-modal-)
* [pos.​register-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/register-details#register-details-block-)
* [pos.​return.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-return#post-return-action-modal-)
* [pos.​return.​post.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-return#post-return-targets)

##### Use cases

* **Visual selection:** Provide visual date selection for appointments or scheduling workflows.
* **Report filtering:** Enable quick date selection for filtering reports or analytics.
* **Touch optimization:** Support touch-optimized date input on POS devices.
* **Calendar context:** Allow users to see calendar context like day of week when selecting dates.

***

### Properties

Lets merchants select one or more dates from a calendar.

* **id**

  **string**

  A unique identifier for the element.

* **value**

  **string**

  **Default: ""**

  Current selected value.

  The default means no date is selected.

  If the provided value is invalid, no date is selected.

  Otherwise:

  * If `type="single"`, this is a date in `YYYY-MM-DD` format.
  * If `type="multiple"`, this is a comma-separated list of dates in `YYYY-MM-DD` format.
  * If `type="range"`, this is a range in `YYYY-MM-DD--YYYY-MM-DD` format. The range is inclusive.

#### Events

The date picker component provides event callbacks for handling user interactions. Learn more about [handling events](https://shopify.dev/docs/api/polaris/using-polaris-web-components#handling-events).

* **blur**

  **(event: CallbackEvent<"s-date-picker">) => void**

  Callback when the date picker is dismissed.

* **change**

  **(event: CallbackEvent<"s-date-picker">) => void**

  Callback when the user selects a date from the picker that is different to the current value.

* **focus**

  **(event: CallbackEvent<"s-date-picker">) => void**

  Callback when the date picker is revealed.

* **input**

  **(event: CallbackEvent<"s-date-picker">) => void**

  Callback when the user selects a date from the picker.

#### CallbackEvent

* bubbles

  ```ts
  boolean
  ```

* cancelable

  ```ts
  boolean
  ```

* composed

  ```ts
  boolean
  ```

* currentTarget

  ```ts
  HTMLElementTagNameMap[T]
  ```

* detail

  ```ts
  any
  ```

* eventPhase

  ```ts
  number
  ```

* target

  ```ts
  HTMLElementTagNameMap[T] | null
  ```

***

### Examples

#### Select dates with a calendar picker

Enable visual date selection using a date picker component with a calendar interface. This example shows a basic date picker with month view and date selection.

### Select dates with a calendar picker

![Enable visual date selection using a date picker component with a calendar interface. This example shows a basic date picker with month view and date selection.](https://shopify.dev/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/date-picker-default-DMMUfQNE.png)

### Select dates with a calendar picker

```html
<s-button command="--show" commandFor="date-picker">
  Show
</s-button>
<s-date-picker 
  id="date-picker" 
  value="2025-10-08"
/>
```

#### Control picker visibility

Control date picker visibility programmatically using the command system with `show` and `hide` methods. This example demonstrates using button commands to display or dismiss the calendar picker, enabling custom trigger patterns for date selection workflows.

### Control picker visibility

```tsx
<>
  <s-button command="--show" commandFor="date-picker">
    Select Date
  </s-button>
  <s-date-picker
    id="date-picker"
    value="2024-10-26"
    onChange={(event) => console.log('Date selected:', event.currentTarget.value)}
  />
</>;
```

#### Handle date selection events

Subscribe to date selection events to respond when merchants pick a date from the calendar. This example shows how to handle `onChange` events to capture selected dates, enabling validation, scheduling logic, or dynamic updates based on the chosen date.

### Handle date selection events

```tsx
<s-date-picker 
  value="2024-10-26"
  onInput={(event) => console.log('Input:', event.currentTarget.value)}
  onChange={(event) => console.log('Change:', event.currentTarget.value)}
  onFocus={(event) => console.log('Focus')}
  onBlur={(event) => console.log('Blur')}
/>
```

***

### Best practices

* **Choose for calendar-based selection:** Use date picker when users benefit from seeing a calendar view, like selecting dates relative to today or needing weekday context. Use [date spinner](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/date-spinner) for tight spaces or [date field](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/date-field) when users know the exact date.
* **Provide adequate space:** Ensure sufficient spacing around the picker to avoid interfering with on-screen keyboards or other interactive elements.

***

---



<a id="latest-web-components-forms-date-spinner"></a>


## Date spinner

The date spinner component enables merchants to select dates using a spinner interface with scrollable columns for month, day, and year. Use it for compact date selection in space-constrained layouts or when selecting dates close to the current date.

For visual calendar context, consider using [date picker](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/date-picker) instead. For text date entry, use [date field](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/date-field).

#### Support Targets (18)

#### Supported targets

* [pos.​cart.​line-item-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/cart-details#cart-details-action-modal-)
* [pos.​customer-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/customer-details#customer-details-action-modal-)
* [pos.​customer-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/customer-details#customer-details-targets)
* [pos.​draft-order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/draft-order-details#draft-order-details-action-modal-)
* [pos.​draft-order-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/draft-order-details#draft-order-details-targets)
* [pos.​exchange.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-exchange#post-exchange-action-modal-)
* [pos.​exchange.​post.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-exchange#post-exchange-targets)
* [pos.​home.​modal.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/home-screen#home-screen-action-modal-)
* [pos.​order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/order-details#order-details-action-modal-)
* [pos.​order-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/order-details#order-details-targets)
* [pos.​product-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details#product-details-action-modal-)
* [pos.​product-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details#product-details-targets)
* [pos.​purchase.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-purchase#post-purchase-action-modal-)
* [pos.​purchase.​post.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-purchase#post-purchase-targets)
* [pos.​register-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/register-details#register-details-action-modal-)
* [pos.​register-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/register-details#register-details-block-)
* [pos.​return.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-return#post-return-action-modal-)
* [pos.​return.​post.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-return#post-return-targets)

##### Use cases

* **Compact selection:** Provide compact date selection in space-constrained interfaces.
* **Quick navigation:** Enable quick date selection by scrolling through nearby dates.
* **Modal dialogs:** Support date input in modal dialogs where a spinner is more appropriate.
* **Touch optimization:** Offer touch-optimized scrolling date selection for POS devices.

***

### Properties

Lets merchants select a date using spinner controls.

* **id**

  **string**

  A unique identifier for the element.

* **value**

  **string**

  **Default: ""**

  Current selected value for the spinner.

  This uses a date in `YYYY-MM-DD` format.

#### Events

The date spinner component provides event callbacks for handling user interactions. Learn more about [handling events](https://shopify.dev/docs/api/polaris/using-polaris-web-components#handling-events).

* **blur**

  **(event: CallbackEvent<"s-date-spinner">) => void**

  Callback when the date spinner is dismissed.

* **change**

  **(event: CallbackEvent<"s-date-spinner">) => void**

  Callback when the value changes. Only called when a different value is selected.

* **focus**

  **(event: CallbackEvent<"s-date-spinner">) => void**

  Callback when the date spinner is revealed.

* **input**

  **(event: CallbackEvent<"s-date-spinner">) => void**

  Callback when the user makes a selection.

#### CallbackEvent

* bubbles

  ```ts
  boolean
  ```

* cancelable

  ```ts
  boolean
  ```

* composed

  ```ts
  boolean
  ```

* currentTarget

  ```ts
  HTMLElementTagNameMap[T]
  ```

* detail

  ```ts
  any
  ```

* eventPhase

  ```ts
  number
  ```

* target

  ```ts
  HTMLElementTagNameMap[T] | null
  ```

***

### Examples

#### Select dates with a spinner

Enable compact date selection using a date spinner component with scrollable columns for month, day, and year. This example shows a basic date spinner for space-constrained layouts.

### Select dates with a spinner

![Enable compact date selection using a date spinner component with scrollable columns for month, day, and year. This example shows a basic date spinner for space-constrained layouts.](https://shopify.dev/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/date-spinner-default-7UJbpmzJ.png)

### Select dates with a spinner

```html
<s-button command="--show" commandFor="date-spinner">
  Show
</s-button>
<s-date-spinner
  id="date-spinner"
  value="2021-09-17" 
/>
```

#### Control spinner visibility

Control date spinner visibility programmatically using the command system with `show` and `hide` methods. This example demonstrates using button commands to display or dismiss the spinner picker, enabling custom trigger patterns for date selection in constrained layouts.

### Control spinner visibility

```tsx
<>
  <s-button command="--show" commandFor="date-spinner">
    Select Date
  </s-button>
  <s-date-spinner
    id="date-spinner"
    value="2024-10-26"
    onChange={(event) => console.log('Date selected:', event.currentTarget.value)}
  />
</>;
```

#### Handle date selection events

Subscribe to date selection events to respond when merchants pick a date from the spinner columns. This example shows how to handle `onChange` events to capture selected dates, enabling validation, scheduling logic, or dynamic updates based on the chosen date.

### Handle date selection events

```tsx
<s-date-spinner 
  value="2024-10-26"
  onInput={(event) => console.log('Input:', event.currentTarget.value)}
  onChange={(event) => console.log('Change:', event.currentTarget.value)}
  onFocus={(event) => console.log('Focus')}
  onBlur={(event) => console.log('Blur')}
/>
```

***

### Best practices

* **Use for space-constrained layouts:** Choose date spinner for narrow layouts or split-screen interfaces where a calendar view would be impractical.
* **Best for nearby dates:** Use when selecting dates close to the current date. For distant dates, [date picker](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/date-picker) provides faster navigation.
* **Provide interaction cues:** Consider labels or instructions to help first-time users understand the scrollable column interface.

***

---



<a id="latest-web-components-forms-email-field"></a>


## Email field

The email field component captures email address input. Use it to collect email information in forms, customer profiles, or contact workflows.

Email field doesn't perform automatic email validation. Implement your own validation logic, and use the `error` property to display validation results.

#### Support Targets (10)

#### Supported targets

* [pos.​cart.​line-item-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/cart-details#cart-details-action-modal-)
* [pos.​customer-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/customer-details#customer-details-action-modal-)
* [pos.​draft-order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/draft-order-details#draft-order-details-action-modal-)
* [pos.​exchange.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-exchange#post-exchange-action-modal-)
* [pos.​home.​modal.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/home-screen#home-screen-action-modal-)
* [pos.​order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/order-details#order-details-action-modal-)
* [pos.​product-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details#product-details-action-modal-)
* [pos.​purchase.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-purchase#post-purchase-action-modal-)
* [pos.​register-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/register-details#register-details-action-modal-)
* [pos.​return.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-return#post-return-action-modal-)

##### Use cases

* **Customer emails:** Collect customer email addresses during account creation or updates.
* **Merchant emails:** Capture merchant emails for notifications or receipts.
* **Email features:** Enable features like sending receipts or order confirmations.
* **Validation:** Support email validation in checkout or customer management interfaces.

***

### Properties

Collects and validates email address input.

* **details**

  **string**

  Additional text to provide context or guidance for the field. This text is displayed along with the field and its label to offer more information or instructions to the user.

  This will also be exposed to screen reader users.

* **disabled**

  **boolean**

  **Default: false**

  Disables the field, disallowing any interaction.

* **error**

  **string**

  Indicate an error to the user. The field will be given a specific stylistic treatment to communicate problems that have to be resolved immediately.

* **id**

  **string**

  A unique identifier for the element.

* **label**

  **string**

  Content to use as the field label.

* **maxLength**

  **number**

  **Default: Infinity**

  Specifies the maximum number of characters allowed.

* **placeholder**

  **string**

  A short hint that describes the expected value of the field.

* **required**

  **boolean**

  **Default: false**

  Whether the field needs a value. This requirement adds semantic value to the field, but it will not cause an error to appear automatically. If you want to present an error when this field is empty, you can do so with the `error` property.

* **value**

  **string**

  The current value for the field. If omitted, the field will be empty.

#### Events

The email field component provides event callbacks for handling user interactions. Learn more about [handling events](https://shopify.dev/docs/api/polaris/using-polaris-web-components#handling-events).

* **blur**

  **(event: CallbackEvent<"s-email-field">) => void**

  Callback when the element loses focus.

* **change**

  **(event: CallbackEvent<"s-email-field">) => void**

  Callback after editing completes (typically on blur).

* **focus**

  **(event: CallbackEvent<"s-email-field">) => void**

  Callback when the element receives focus.

* **input**

  **(event: CallbackEvent<"s-email-field">) => void**

  Callback when the user makes any changes in the field.

#### CallbackEvent

* bubbles

  ```ts
  boolean
  ```

* cancelable

  ```ts
  boolean
  ```

* composed

  ```ts
  boolean
  ```

* currentTarget

  ```ts
  HTMLElementTagNameMap[T]
  ```

* detail

  ```ts
  any
  ```

* eventPhase

  ```ts
  number
  ```

* target

  ```ts
  HTMLElementTagNameMap[T] | null
  ```

***

### Examples

#### Capture email addresses with an email field

Capture email address input using an email field component. This example shows a basic email field with a label for collecting email information.

### Capture email addresses with an email field

![Capture email address input using an email field component. This example shows a basic email field with a label for collecting email information.](https://shopify.dev/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/email-field-default-BzeZBYA3.png)

### Capture email addresses with an email field

```html
<s-email-field 
  label="Email"
  value="snowdevil@shopify.com"
  required
/>
```

#### Handle email input events

Subscribe to email input events to respond when merchants enter email addresses. This example demonstrates handling `onChange`, `onInput`, `onFocus`, and `onBlur` events for real-time email validation, duplicate checking, or autosave functionality.

### Handle email input events

```tsx
<s-email-field
  label="Customer email"
  placeholder="customer@example.com"
  onInput={(event) => console.log('Input:', event.currentTarget.value)}
  onChange={(event) => console.log('Change:', event.currentTarget.value)}
  onFocus={(event) => console.log('Focus')}
  onBlur={(event) => console.log('Blur')}
/>
```

***

### Best practices

* **Write descriptive labels:** Use specific labels like "Customer Email" or "Receipt Email Address" rather than generic "Email."
* **Provide context in details:** Use `details` for additional context like "Required for digital receipts" or "We'll send order updates to this address."
* **Write actionable error messages:** Provide clear validation messages like "Please enter a valid email address" that help users correct their input.

***

---



<a id="latest-web-components-forms-number-field"></a>


## Number field

The number field component captures numeric input with built-in number validation. Use it to collect quantities, prices, or other numeric information.

The component supports optional stepper controls, min/max constraints, and step increments for guided numeric entry.

#### Support Targets (10)

#### Supported targets

* [pos.​cart.​line-item-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/cart-details#cart-details-action-modal-)
* [pos.​customer-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/customer-details#customer-details-action-modal-)
* [pos.​draft-order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/draft-order-details#draft-order-details-action-modal-)
* [pos.​exchange.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-exchange#post-exchange-action-modal-)
* [pos.​home.​modal.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/home-screen#home-screen-action-modal-)
* [pos.​order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/order-details#order-details-action-modal-)
* [pos.​product-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details#product-details-action-modal-)
* [pos.​purchase.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-purchase#post-purchase-action-modal-)
* [pos.​register-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/register-details#register-details-action-modal-)
* [pos.​return.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-return#post-return-action-modal-)

##### Use cases

* **Quantities:** Collect product quantities, inventory counts, or stock levels.
* **Pricing:** Capture pricing information, discounts, or monetary amounts.
* **Stepper controls:** Provide `stepper` controls for intuitive increment/decrement interactions.
* **Validation:** Support form submissions with proper min/max validation.

***

### Properties

Collects numeric input with optional stepper controls.

* **controls**

  **'auto' | 'stepper' | 'none'**

  Sets the type of controls displayed for the field.

  * `stepper`: displays buttons to increase or decrease the value of the field by the stepping interval defined in the `step` property. Note that in POS adding stepper controls simplifies the behaviour of the Number Field itself. The field supports only integer values, is always-populated and automatically validates the value to be within the min and max bounds. Validation, label, details and placeholder are not supported when using Stepper controls.

  * `none`: no controls are displayed and users must input the value manually.

  * `auto`: the presence of the controls depends on the surface and context.

* **details**

  **string**

  Additional text to provide context or guidance for the field. This text is displayed along with the field and its label to offer more information or instructions to the user.

  This will also be exposed to screen reader users.

  Details are not supported when using Stepper controls

* **disabled**

  **boolean**

  **Default: false**

  Disables the field, disallowing any interaction.

* **error**

  **string**

  Indicate an error to the user. The field will be given a specific stylistic treatment to communicate problems that have to be resolved immediately.

  Error is not supported when using Stepper controls

* **id**

  **string**

  A unique identifier for the element.

* **inputMode**

  **'decimal' | 'numeric'**

  **Default: 'decimal'**

  Sets the virtual keyboard.

  Input mode is not supported when using Stepper controls

* **label**

  **string**

  Content to use as the field label.

  Label is not supported when using Stepper controls

* **max**

  **number**

  **Default: Infinity**

  The highest decimal or integer to be accepted for the field. When used with `step` the value will round down to the max number.

  Note: a user will still be able to use the keyboard to input a number higher than the max. It is up to the developer to add appropriate validation.

* **min**

  **number**

  **Default: -Infinity**

  The lowest decimal or integer to be accepted for the field. When used with `step` the value will round up to the min number.

  Note: a user will still be able to use the keyboard to input a number lower than the min. It is up to the developer to add appropriate validation.

* **placeholder**

  **string**

  A short hint that describes the expected value of the field.

  Placeholder text is not supported when using Stepper controls due to constrained space for the number field, especially on phones.

* **required**

  **boolean**

  **Default: false Required is not supported when using Stepper controls**

  Whether the field needs a value. This requirement adds semantic value to the field, but it will not cause an error to appear automatically. If you want to present an error when this field is empty, you can do so with the `error` property.

* **value**

  **string**

  The current value for the field. If omitted, the field will be empty.

#### Slots

The number field component supports slots for additional content placement within the field. Learn more about [using slots](https://shopify.dev/docs/api/polaris/using-polaris-web-components#slots).

* **accessory**

  **HTMLElement**

  Additional content to be displayed in the field. Commonly used to display clickable text.

  **Note:** Accessory is not supported when using Stepper controls

#### Events

The number field component provides event callbacks for handling user interactions. Learn more about [handling events](https://shopify.dev/docs/api/polaris/using-polaris-web-components#handling-events).

* **blur**

  **(event: CallbackEvent<"s-number-field">) => void**

  Callback when the element loses focus.

* **change**

  **(event: CallbackEvent<"s-number-field">) => void**

  Callback after editing completes (typically on blur).

* **focus**

  **(event: CallbackEvent<"s-number-field">) => void**

  Callback when the element receives focus.

* **input**

  **(event: CallbackEvent<"s-number-field">) => void**

  Callback when the user makes any changes in the field.

#### CallbackEvent

* bubbles

  ```ts
  boolean
  ```

* cancelable

  ```ts
  boolean
  ```

* composed

  ```ts
  boolean
  ```

* currentTarget

  ```ts
  HTMLElementTagNameMap[T]
  ```

* detail

  ```ts
  any
  ```

* eventPhase

  ```ts
  number
  ```

* target

  ```ts
  HTMLElementTagNameMap[T] | null
  ```

***

### Examples

#### Capture numeric input with a number field

Capture numeric input using a number field component. This example shows a basic number field with a label for collecting numeric values.

### Capture numeric input with a number field

![Capture numeric input using a number field component. This example shows a basic number field with a label for collecting numeric values.](https://shopify.dev/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/number-field-default-CBWCioTZ.png)

### Capture numeric input with a number field

```html
<s-number-field 
  label="Item count"
  value="976"
  required
/>
```

#### Add stepper controls and constraints

Enable stepper controls with increment and decrement buttons and set min/max constraints to limit valid input ranges. This example demonstrates using the `controls` property with `min` and `max` values to create bounded numeric inputs with visual stepper controls, ideal for quantity selection or limited-range numeric entry.

### Add stepper controls and constraints

```tsx
<s-number-field
  label="Quantity"
  value="5"
  min={1}
  max={100}
  controls="stepper"
  onInput={(event) => console.log('Input:', event.currentTarget.value)}
  onChange={(event) => console.log('Change:', event.currentTarget.value)}
/>;
```

#### Configure keyboard input modes

Configure the keyboard layout by specifying `inputMode` for decimal or numeric entry. This example shows how to use the `inputMode` property to display appropriate mobile keyboards—numeric for integers or decimal for numbers with fractional parts—improving data entry speed and accuracy.

### Configure keyboard input modes

```tsx
<s-stack>
  <s-number-field
    label="Price"
    placeholder="0.00"
    inputMode="decimal"
    onInput={(event) => console.log('Value:', event.currentTarget.value)}
  />


  <s-number-field
    label="Stock count"
    placeholder="0"
    inputMode="numeric"
    onInput={(event) => console.log('Value:', event.currentTarget.value)}
  />
</s-stack>;
```

***

### Best practices

* **Choose appropriate controls:** Use `stepper` for quantities or small adjustments. Use `none` for prices or large values where steppers are impractical.
* **Select the right input mode:** Use `decimal` for prices and measurements. Use `numeric` for quantities and counts.
* **Explain constraints in details:** Use `details` to clarify valid ranges or formatting, like "Enter a quantity between 1 and 999."

***

---



<a id="latest-web-components-forms-search-field"></a>


## Search field

The search field component captures search terms for filtering and search functionality. Use it to enable inline search within specific sections or lists, like filtering products or searching customers.

#### Support Targets (10)

#### Supported targets

* [pos.​cart.​line-item-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/cart-details#cart-details-action-modal-)
* [pos.​customer-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/customer-details#customer-details-action-modal-)
* [pos.​draft-order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/draft-order-details#draft-order-details-action-modal-)
* [pos.​exchange.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-exchange#post-exchange-action-modal-)
* [pos.​home.​modal.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/home-screen#home-screen-action-modal-)
* [pos.​order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/order-details#order-details-action-modal-)
* [pos.​product-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details#product-details-action-modal-)
* [pos.​purchase.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-purchase#post-purchase-action-modal-)
* [pos.​register-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/register-details#register-details-action-modal-)
* [pos.​return.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-return#post-return-action-modal-)

##### Use cases

* **Inline filtering:** Enable filtering of lists, tables, or content sections.
* **Quick search:** Provide search inputs for finding items within catalogs or data sets.
* **Real-time filtering:** Support filtering as users type with automatic clear functionality.
* **Contextual search:** Implement search within product variants, order items, or customer lists.

***

### Properties

Collects search queries for filtering and lookup workflows.

* **disabled**

  **boolean**

  **Default: false**

  Disables the field, disallowing any interaction.

* **id**

  **string**

  A unique identifier for the element.

* **placeholder**

  **string**

  A short hint that describes the expected value of the field.

* **value**

  **string**

  The current value for the field. If omitted, the field will be empty.

#### Events

The search field component provides event callbacks for handling user interactions. Learn more about [handling events](https://shopify.dev/docs/api/polaris/using-polaris-web-components#handling-events).

* **blur**

  **(event: CallbackEvent<"s-search-field">) => void**

  Callback when the field loses focus.

* **change**

  **(event: CallbackEvent<"s-search-field">) => void**

  Callback when the field loses focus after the user changes the value in the field.

* **focus**

  **(event: CallbackEvent<"s-search-field">) => void**

  Callback when the field is focused.

* **input**

  **(event: CallbackEvent<"s-search-field">) => void**

  Callback when the user changes the value in the field.

#### CallbackEvent

* bubbles

  ```ts
  boolean
  ```

* cancelable

  ```ts
  boolean
  ```

* composed

  ```ts
  boolean
  ```

* currentTarget

  ```ts
  HTMLElementTagNameMap[T]
  ```

* detail

  ```ts
  any
  ```

* eventPhase

  ```ts
  number
  ```

* target

  ```ts
  HTMLElementTagNameMap[T] | null
  ```

***

### Examples

#### Enable search with a search field

Enable search functionality using a search field component. This example shows a basic search field with placeholder text.

### Enable search with a search field

![Enable search functionality using a search field component. This example shows a basic search field with placeholder text.](https://shopify.dev/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/search-field-default-37hn9zFB.png)

### Enable search with a search field

```html
<s-search-field placeholder="Search" />
```

#### Handle search input events

Subscribe to search input events to respond when merchants enter search terms. This example demonstrates handling `onChange` and `onInput` events for real-time search functionality, debounced filtering, or triggering search API calls as merchants type their queries.

### Handle search input events

```tsx
<s-search-field
  placeholder="Search products..."
  value=""
  onInput={(event) => console.log('Input:', event.currentTarget.value)}
  onChange={(event) => console.log('Change:', event.currentTarget.value)}
  onFocus={(event) => console.log('Search focused')}
  onBlur={(event) => console.log('Search blurred')}
/>
```

***

### Best practices

* **Use for inline search and filtering:** Choose search field for filtering within specific sections or lists, not for global navigation or complex multi-step searches.
* **Follow placeholder pattern:** Use `"Search {items}"` format like `"Search products"` or `"Search customers"` to clarify scope.
* **Choose the right event:** Use `input` for real-time filtering as users type. Use `change` for expensive operations that should wait until typing completes.
* **Handle empty values:** When the field is cleared, reset filters or show all items appropriately.

***

---



<a id="latest-web-components-forms-switch"></a>


## Switch

The switch component creates a toggle control that allows merchants to turn an option on or off. Use switches for settings that take effect immediately, such as enabling notifications or toggling features.

Switches provide clear visual feedback about the current state and are ideal for binary choices that don't require confirmation.

#### Support Targets (10)

#### Supported targets

* [pos.​cart.​line-item-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/cart-details#cart-details-action-modal-)
* [pos.​customer-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/customer-details#customer-details-action-modal-)
* [pos.​draft-order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/draft-order-details#draft-order-details-action-modal-)
* [pos.​exchange.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-exchange#post-exchange-action-modal-)
* [pos.​home.​modal.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/home-screen#home-screen-action-modal-)
* [pos.​order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/order-details#order-details-action-modal-)
* [pos.​product-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details#product-details-action-modal-)
* [pos.​purchase.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-purchase#post-purchase-action-modal-)
* [pos.​register-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/register-details#register-details-action-modal-)
* [pos.​return.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-return#post-return-action-modal-)

##### Use cases

* **Feature toggles:** Enable or disable features like notifications, auto-print receipts, or display preferences.
* **Settings management:** Control binary settings such as tax-inclusive pricing or email receipt options.
* **Workflow options:** Toggle workflow options like gift wrapping, express shipping, or loyalty point redemption.
* **Quick preferences:** Allow staff to quickly enable or disable options that take effect immediately without confirmation.

***

### Properties

Allows merchants to toggle a setting on or off.

* **accessibilityLabel**

  **string**

  A label used for users using assistive technologies like screen readers. When set, any children or `label` supplied will not be announced. This can also be used to display a control without a visual label, while still providing context to users using screen readers.

* **checked**

  **boolean**

  **Default: false**

  Whether the control is active.

* **defaultChecked**

  **boolean**

  **Default: false**

  Whether the control is active by default.

* **details**

  **string**

  Additional text to provide context or guidance for the field. This text is displayed along with the field and its label to offer more information or instructions to the user.

  This will also be exposed to screen reader users.

* **disabled**

  **boolean**

  **Default: false**

  Disables the control, disallowing any interaction.

* **error**

  **string**

  Indicate an error to the user. The field will be given a specific stylistic treatment to communicate problems that have to be resolved immediately.

* **label**

  **string**

  Visual content to use as the control label.

* **labelAccessibilityVisibility**

  **'visible' | 'exclusive'**

  **Default: 'visible'**

  Changes the visibility of the component's label.

  * `visible`: the label is visible to all users.
  * `exclusive`: the label is visually hidden but remains in the accessibility tree.

* **value**

  **string**

  The value used in form data when the control is checked.

#### Events

The switch component provides event callbacks for handling user interactions. Learn more about [handling events](https://shopify.dev/docs/api/polaris/using-polaris-web-components#handling-events).

* **change**

  **(event: CallbackEvent<"s-switch">) => void**

* **input**

  **(event: CallbackEvent<"s-switch">) => void**

#### CallbackEvent

* bubbles

  ```ts
  boolean
  ```

* cancelable

  ```ts
  boolean
  ```

* composed

  ```ts
  boolean
  ```

* currentTarget

  ```ts
  HTMLElementTagNameMap[T]
  ```

* detail

  ```ts
  any
  ```

* eventPhase

  ```ts
  number
  ```

* target

  ```ts
  HTMLElementTagNameMap[T] | null
  ```

***

### Examples

#### Create a toggle switch

Toggle settings on or off using a switch component.

### Create a toggle switch

![Toggle settings on or off using a switch component.](https://shopify.dev/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2026-01/switch-default-nhadi1dW.png)

### Create a toggle switch

```html
<s-switch />
<s-switch defaultChecked />
```

#### Handle switch change events

Subscribe to the `onChange` event to respond when merchants toggle the switch. This example shows how to handle state changes and capture the checked value in real time, enabling dynamic behavior based on the switch state.

### Handle switch change events

```html
<s-switch
  label="Enable email notifications"
  defaultChecked
  onChange={(event) => console.log('Switch toggled:', event.currentTarget.checked)}
/>
```

***

### Accessibility

* **Provide descriptive labels:** Use the `label` prop to clearly describe what the switch controls.
* **Use accessibility labels when needed:** If the visual label doesn't provide enough context, use the `accessibilityLabel` prop to provide additional information for screen readers.
* **Indicate disabled state:** When a switch is disabled, ensure the reason is communicated to users through surrounding context or helper text.

***

---



<a id="latest-web-components-forms-text-area"></a>


## Text area

The text area component captures multi-line text input. Use it to collect descriptions, notes, comments, or other extended text content.

The component supports configurable height, character limits, and validation. For single-line text input, use [text field](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/text-field).

#### Support Targets (10)

#### Supported targets

* [pos.​cart.​line-item-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/cart-details#cart-details-action-modal-)
* [pos.​customer-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/customer-details#customer-details-action-modal-)
* [pos.​draft-order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/draft-order-details#draft-order-details-action-modal-)
* [pos.​exchange.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-exchange#post-exchange-action-modal-)
* [pos.​home.​modal.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/home-screen#home-screen-action-modal-)
* [pos.​order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/order-details#order-details-action-modal-)
* [pos.​product-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details#product-details-action-modal-)
* [pos.​purchase.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-purchase#post-purchase-action-modal-)
* [pos.​register-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/register-details#register-details-action-modal-)
* [pos.​return.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-return#post-return-action-modal-)

##### Use cases

* **Descriptions:** Collect product descriptions or notes in inventory management workflows.
* **Customer notes:** Capture comments, special instructions, or notes in order processing.
* **Feedback:** Enable feedback collection or issue reporting with detailed explanations.
* **Multi-line entry:** Support multi-line text for addresses, delivery instructions, or requirements.

***

### Properties

Collects multi-line text input from the merchant.

* **details**

  **string**

  Additional text to provide context or guidance for the field. This text is displayed along with the field and its label to offer more information or instructions to the user.

  This will also be exposed to screen reader users.

* **disabled**

  **boolean**

  **Default: false**

  Disables the field, disallowing any interaction.

* **error**

  **string**

  Indicate an error to the user. The field will be given a specific stylistic treatment to communicate problems that have to be resolved immediately.

* **id**

  **string**

  A unique identifier for the element.

* **label**

  **string**

  Content to use as the field label.

* **maxLength**

  **number**

  **Default: Infinity**

  Specifies the maximum number of characters allowed.

* **placeholder**

  **string**

  A short hint that describes the expected value of the field.

* **required**

  **boolean**

  **Default: false**

  Whether the field needs a value. This requirement adds semantic value to the field, but it will not cause an error to appear automatically. If you want to present an error when this field is empty, you can do so with the `error` property.

* **rows**

  **number**

  **Default: 2**

  A number of visible text lines.

* **value**

  **string**

  The current value for the field. If omitted, the field will be empty.

#### Events

The text area component provides event callbacks for handling user interactions. Learn more about [handling events](https://shopify.dev/docs/api/polaris/using-polaris-web-components#handling-events).

* **blur**

  **(event: CallbackEvent<"s-text-area">) => void**

  Callback when the element loses focus.

* **change**

  **(event: CallbackEvent<"s-text-area">) => void**

  Callback after editing completes (typically on blur).

* **focus**

  **(event: CallbackEvent<"s-text-area">) => void**

  Callback when the element receives focus.

* **input**

  **(event: CallbackEvent<"s-text-area">) => void**

  Callback when the user makes any changes in the field.

#### CallbackEvent

* bubbles

  ```ts
  boolean
  ```

* cancelable

  ```ts
  boolean
  ```

* composed

  ```ts
  boolean
  ```

* currentTarget

  ```ts
  HTMLElementTagNameMap[T]
  ```

* detail

  ```ts
  any
  ```

* eventPhase

  ```ts
  number
  ```

* target

  ```ts
  HTMLElementTagNameMap[T] | null
  ```

***

### Examples

#### Capture multi-line text with a text area

Capture multi-line text input using a text area component. This example shows a basic text area with a label for extended content.

### Capture multi-line text with a text area

![Capture multi-line text input using a text area component. This example shows a basic text area with a label for extended content.](https://shopify.dev/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/text-area-default-CdsAND00.png)

### Capture multi-line text with a text area

```html
<s-text-area 
  label="Shipping address" 
  value="1776 Barnes Street, Orlando, FL 32801"
/>
```

#### Configure rows and character limits

Configure the number of visible rows and character limits to control text area size and input length. This example shows how to use the `rows` property to set initial height and `maxlength` to limit content, ensuring appropriate sizing for different types of text input.

### Configure rows and character limits

```tsx
<s-text-area
  label="Order notes"
  placeholder="Add special instructions..."
  rows={5}
  maxLength={500}
  onInput={(event) => console.log('Characters:', event.currentTarget.value.length)}
/>
```

#### Handle text input events

Subscribe to text area events to respond when merchants enter or modify text. This example demonstrates handling `onChange`, `onInput`, `onFocus`, and `onBlur` events for autosave functionality, character counting, or real-time validation of longer text content.

### Handle text input events

```tsx
<s-text-area
  label="Customer feedback"
  placeholder="Enter feedback..."
  onInput={(event) => console.log('Input:', event.currentTarget.value)}
  onChange={(event) => console.log('Change:', event.currentTarget.value)}
  onFocus={(event) => console.log('Focused')}
  onBlur={(event) => console.log('Blurred')}
/>
```

***

### Best practices

* **Set appropriate row count:** Use 2-3 `rows` for brief notes, 4-6 for descriptions, and more for extensive content.
* **Show character limit feedback:** When approaching `maxLength`, display remaining characters in the `details` text.
* **Write descriptive labels:** Use specific labels like "Product Description" or "Special Instructions" rather than generic terms.

***

---



<a id="latest-web-components-forms-text-field"></a>


## Text field

The text field component captures single-line text input. Use it to collect short, free-form information like names, titles, or identifiers.

The component supports various input configurations including placeholders, character limits, and validation. For multi-line text entry, use the [text area](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/text-area) component.

#### Support Targets (10)

#### Supported targets

* [pos.​cart.​line-item-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/cart-details#cart-details-action-modal-)
* [pos.​customer-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/customer-details#customer-details-action-modal-)
* [pos.​draft-order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/draft-order-details#draft-order-details-action-modal-)
* [pos.​exchange.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-exchange#post-exchange-action-modal-)
* [pos.​home.​modal.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/home-screen#home-screen-action-modal-)
* [pos.​order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/order-details#order-details-action-modal-)
* [pos.​product-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details#product-details-action-modal-)
* [pos.​purchase.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-purchase#post-purchase-action-modal-)
* [pos.​register-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/register-details#register-details-action-modal-)
* [pos.​return.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-return#post-return-action-modal-)

##### Use cases

* **Product identifiers:** Collect product names, SKUs, or short identifiers.
* **Customer info:** Capture customer names, reference numbers, or brief labels.
* **Filtering:** Enable text-based filtering or tagging with short text values.
* **Form submissions:** Support single-line text values like names, codes, or identifiers.

***

### Properties

Collects single-line text input.

* **details**

  **string**

  Additional text to provide context or guidance for the field. This text is displayed along with the field and its label to offer more information or instructions to the user.

  This will also be exposed to screen reader users.

* **disabled**

  **boolean**

  **Default: false**

  Disables the field, disallowing any interaction.

* **error**

  **string**

  Indicate an error to the user. The field will be given a specific stylistic treatment to communicate problems that have to be resolved immediately.

* **id**

  **string**

  A unique identifier for the element.

* **label**

  **string**

  Content to use as the field label.

* **maxLength**

  **number**

  **Default: Infinity**

  Specifies the maximum number of characters allowed.

* **placeholder**

  **string**

  A short hint that describes the expected value of the field.

* **required**

  **boolean**

  **Default: false**

  Whether the field needs a value. This requirement adds semantic value to the field, but it will not cause an error to appear automatically. If you want to present an error when this field is empty, you can do so with the `error` property.

* **value**

  **string**

  The current value for the field. If omitted, the field will be empty.

#### Slots

The text field component supports slots for additional content placement within the field. Learn more about [using slots](https://shopify.dev/docs/api/polaris/using-polaris-web-components#slots).

* **accessory**

  **HTMLElement**

  Additional content to be displayed in the field. Commonly used to display clickable text.

#### Events

The text field component provides event callbacks for handling user interactions. Learn more about [handling events](https://shopify.dev/docs/api/polaris/using-polaris-web-components#handling-events).

* **blur**

  **(event: CallbackEvent<"s-text-field">) => void**

  Callback when the element loses focus.

* **change**

  **(event: CallbackEvent<"s-text-field">) => void**

  Callback after editing completes (typically on blur).

* **focus**

  **(event: CallbackEvent<"s-text-field">) => void**

  Callback when the element receives focus.

* **input**

  **(event: CallbackEvent<"s-text-field">) => void**

  Callback when the user makes any changes in the field.

#### CallbackEvent

* bubbles

  ```ts
  boolean
  ```

* cancelable

  ```ts
  boolean
  ```

* composed

  ```ts
  boolean
  ```

* currentTarget

  ```ts
  HTMLElementTagNameMap[T]
  ```

* detail

  ```ts
  any
  ```

* eventPhase

  ```ts
  number
  ```

* target

  ```ts
  HTMLElementTagNameMap[T] | null
  ```

***

### Examples

#### Capture text input with a text field

Capture single-line text input using a text field component with validation support. This example shows a basic text field with label and placeholder text.

### Capture text input with a text field

![Capture single-line text input using a text field component with validation support. This example shows a basic text field with label and placeholder text.](https://shopify.dev/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/text-field-default-BuqzLwYM.png)

### Capture text input with a text field

```html
<s-text-field
  label="Store name" 
  value="Snowdevil" 
  required
/>
```

#### Add accessory buttons

Add action buttons to the text field using the accessory slot for quick actions like clearing text or submitting input. This example shows how to use [`s-button`](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/actions/button) and [`s-clickable`](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/actions/clickable) components with text content in the accessory slot, enabling inline actions without leaving the input context.

### Add accessory buttons

```tsx
<s-text-field label="Discount code" value="SUMMER2024">
  <s-button slot="accessory" onClick={() => console.log('Apply discount')}>
    Apply
  </s-button>
</s-text-field>;
```

#### Configure validation and guidance

Configure common text field properties for validation, character limits, and user guidance. This example demonstrates using props like `maxlength`, `required`, `helperText`, and `error` to create a well-guided input experience with proper validation feedback.

### Configure validation and guidance

```tsx
<s-text-field
  label="Product SKU"
  value={sku}
  placeholder="Enter SKU"
  details="Use format: ABC-123"
  error={hasError ? "SKU already exists" : undefined}
  disabled={isProcessing}
  required
  maxLength={20}
  onChange={(event) => setSku(event.currentTarget.value)}
/>
```

#### Handle input events

Subscribe to text field events including `onInput`, `onFocus`, `onBlur`, and `onChange` to respond to user interactions. This example shows how to handle different input events for real-time validation, autosave functionality, or dynamic form behavior.

### Handle input events

```tsx
<s-text-field
  label="Product SKU"
  placeholder="Enter SKU"
  onInput={(event) => {
    console.log('Input:', event.currentTarget.value);
    console.log('Current error:', event.currentTarget.error);
  }}
  onFocus={(event) => {
    console.log('Focused with value:', event.currentTarget.value);
  }}
  onBlur={(event) => {
    console.log('Blurred with value:', event.currentTarget.value);
  }}
  onChange={(event) => {
    console.log('Changed to:', event.currentTarget.value);
  }}
/>
```

***

### Best practices

* **Use for single-line text input:** Choose text field for short values like names, titles, or identifiers. For multi-line content, use [text area](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/text-area).
* **Show character limit feedback:** When approaching `maxLength`, display remaining characters in the `details` text.
* **Write descriptive labels:** Use specific labels like "Product Name" or "Reference Code" rather than generic terms.

***

### Limitations

The `accessory` slot supports only [button](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/actions/button) and [clickable](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/actions/clickable) components with text content only—other component types or complex layouts can't be used for field accessories.

***

---



<a id="latest-web-components-forms-time-field"></a>


## Time field

The time field component captures time input through direct text entry. Use it when merchants know the exact time they want to enter or for quick time data entry.

For visual time selection with clock or spinner interfaces, use [time picker](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/time-picker).

#### Support Targets (10)

#### Supported targets

* [pos.​cart.​line-item-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/cart-details#cart-details-action-modal-)
* [pos.​customer-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/customer-details#customer-details-action-modal-)
* [pos.​draft-order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/draft-order-details#draft-order-details-action-modal-)
* [pos.​exchange.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-exchange#post-exchange-action-modal-)
* [pos.​home.​modal.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/home-screen#home-screen-action-modal-)
* [pos.​order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/order-details#order-details-action-modal-)
* [pos.​product-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details#product-details-action-modal-)
* [pos.​purchase.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-purchase#post-purchase-action-modal-)
* [pos.​register-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/register-details#register-details-action-modal-)
* [pos.​return.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-return#post-return-action-modal-)

##### Use cases

* **Scheduling:** Collect appointment times or service hours in booking workflows.
* **Business hours:** Capture opening hours or time-based preferences in configuration interfaces.
* **Filtering:** Provide time-based filtering controls for reports or event logs.
* **Shift management:** Enable time entry for shift scheduling or time tracking.

***

### Properties

Collects a time value.

* **details**

  **string**

  Additional text to provide context or guidance for the field. This text is displayed along with the field and its label to offer more information or instructions to the user.

  This will also be exposed to screen reader users.

* **disabled**

  **boolean**

  **Default: false**

  Disables the field, disallowing any interaction.

* **error**

  **string**

  Indicate an error to the user. The field will be given a specific stylistic treatment to communicate problems that have to be resolved immediately.

* **id**

  **string**

  A unique identifier for the element.

* **label**

  **string**

  Content to use as the field label.

* **required**

  **boolean**

  **Default: false**

  Whether the field needs a value. This requirement adds semantic value to the field, but it will not cause an error to appear automatically. If you want to present an error when this field is empty, you can do so with the `error` property.

* **value**

  **string**

  Current selected value.

  The default, `''`, means no time is selected.

  The value must be a 24-hour time in `HH:mm:ss` format, with leading zeros.

  Examples: `"00:00:00"`, `"09:05:00"`, `"23:59:00"`, `"14:03:30"`.

  This follows the HTML time input value format, which is always 24-hour with leading zeros regardless of UI presentation.

  See: <https://developer.mozilla.org/docs/Web/HTML/Element/input/time>

#### Events

The time field component provides event callbacks for handling user interactions. Learn more about [handling events](https://shopify.dev/docs/api/polaris/using-polaris-web-components#handling-events).

* **blur**

  **(event: CallbackEvent<"s-time-field">) => void**

  Callback when the element loses focus.

* **change**

  **(event: CallbackEvent<"s-time-field">) => void**

  Callback after editing completes (typically on blur).

* **focus**

  **(event: CallbackEvent<"s-time-field">) => void**

  Callback when the element receives focus.

* **input**

  **(event: CallbackEvent<"s-time-field">) => void**

  Callback when the user makes any changes in the field.

#### CallbackEvent

* bubbles

  ```ts
  boolean
  ```

* cancelable

  ```ts
  boolean
  ```

* composed

  ```ts
  boolean
  ```

* currentTarget

  ```ts
  HTMLElementTagNameMap[T]
  ```

* detail

  ```ts
  any
  ```

* eventPhase

  ```ts
  number
  ```

* target

  ```ts
  HTMLElementTagNameMap[T] | null
  ```

***

### Examples

#### Capture time input with a time field

Capture time input using a time field component. This example shows a basic time field with a label for time entry.

### Capture time input with a time field

![Capture time input using a time field component. This example shows a basic time field with a label for time entry.](https://shopify.dev/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/time-field-default-Dzm8y6C_.png)

### Capture time input with a time field

```html
<s-time-field
  label="Time"
  value="11:42"
/>
```

#### Handle time selection events

Subscribe to time input events to respond when merchants select or enter times. This example shows how to handle `onChange` events to capture time selections, enabling real-time validation, time range checks, or dynamic scheduling behavior based on merchant input.

### Handle time selection events

```tsx
<s-time-field
  label="Appointment time"
  value="14:30"
  onInput={(event) => console.log('Input:', event.currentTarget.value)}
  onChange={(event) => console.log('Change:', event.currentTarget.value)}
  onFocus={(event) => console.log('Focused')}
  onBlur={(event) => console.log('Blurred')}
/>
```

***

### Best practices

* **Use correct format:** Always use `HH:mm:ss` format with leading zeros (like `"09:05:00"` not `"9:5:0"`).
* **Explain time constraints:** Use `details` to clarify requirements like "Business hours only (09:00-17:00)" or "Must be a future time."

***

---



<a id="latest-web-components-forms-time-picker"></a>


## Time picker

The time picker component allows merchants to select times using an interactive picker interface. Use it when merchants benefit from visual time selection rather than typing exact times.

For direct text entry when merchants know the exact time, use [time field](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/time-field).

#### Support Targets (18)

#### Supported targets

* [pos.​cart.​line-item-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/cart-details#cart-details-action-modal-)
* [pos.​customer-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/customer-details#customer-details-action-modal-)
* [pos.​customer-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/customer-details#customer-details-targets)
* [pos.​draft-order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/draft-order-details#draft-order-details-action-modal-)
* [pos.​draft-order-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/draft-order-details#draft-order-details-targets)
* [pos.​exchange.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-exchange#post-exchange-action-modal-)
* [pos.​exchange.​post.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-exchange#post-exchange-targets)
* [pos.​home.​modal.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/home-screen#home-screen-action-modal-)
* [pos.​order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/order-details#order-details-action-modal-)
* [pos.​order-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/order-details#order-details-targets)
* [pos.​product-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details#product-details-action-modal-)
* [pos.​product-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details#product-details-targets)
* [pos.​purchase.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-purchase#post-purchase-action-modal-)
* [pos.​purchase.​post.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-purchase#post-purchase-targets)
* [pos.​register-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/register-details#register-details-action-modal-)
* [pos.​register-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/register-details#register-details-block-)
* [pos.​return.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-return#post-return-action-modal-)
* [pos.​return.​post.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-return#post-return-targets)

##### Use cases

* **Visual selection:** Provide visual time selection for appointments or scheduling workflows.
* **Quick selection:** Enable quick time selection for business hours or delivery windows.
* **Touch optimization:** Support touch-optimized time input on POS devices.
* **User-friendly:** Allow users to select times without remembering specific formats.

***

### Properties

Lets merchants select a time from a picker.

* **id**

  **string**

  A unique identifier for the element.

* **value**

  **string**

  **Default: ''**

  Current selected value.

  The default, `''`, means no time is selected.

  The value must be a 24-hour time in `HH:mm:ss` format, with leading zeros.

  Examples: `"00:00:00"`, `"09:05:00"`, `"23:59:00"`, `"14:03:30"`.

  This follows the HTML time input value format, which is always 24-hour with leading zeros regardless of UI presentation.

  See: <https://developer.mozilla.org/docs/Web/HTML/Element/input/time>

  If the provided value is invalid, '' is used as the value.

#### Events

The time picker component provides event callbacks for handling user interactions. Learn more about [handling events](https://shopify.dev/docs/api/polaris/using-polaris-web-components#handling-events).

* **blur**

  **(event: CallbackEvent<"s-time-picker">) => void**

  Callback when the time picker is dismissed.

* **change**

  **(event: CallbackEvent<"s-time-picker">) => void**

  Callback when the user selects a time from the picker that is different to the current value.

* **focus**

  **(event: CallbackEvent<"s-time-picker">) => void**

  Callback when the time picker is revealed.

* **input**

  **(event: CallbackEvent<"s-time-picker">) => void**

  Callback when the user selects a time from the picker.

#### CallbackEvent

* bubbles

  ```ts
  boolean
  ```

* cancelable

  ```ts
  boolean
  ```

* composed

  ```ts
  boolean
  ```

* currentTarget

  ```ts
  HTMLElementTagNameMap[T]
  ```

* detail

  ```ts
  any
  ```

* eventPhase

  ```ts
  number
  ```

* target

  ```ts
  HTMLElementTagNameMap[T] | null
  ```

***

### Examples

#### Select times with a time picker

Select times using a time picker component. This example shows a basic time picker for selecting hours and minutes.

### Select times with a time picker

![Select times using a time picker component. This example shows a basic time picker for selecting hours and minutes.](https://shopify.dev/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/time-spinner-default-Bj59miQ-.png)

### Select times with a time picker

```html
<s-button command="--show" commandFor="time-picker">
  Show
</s-button>
<s-time-picker
  value="9:41"
  id="time-picker"
/>
```

#### Control picker visibility

Control time picker visibility programmatically using the command system with `show` and `hide` methods. This example demonstrates using button commands to display or dismiss the time picker, enabling custom trigger patterns for time selection workflows.

### Control picker visibility

```tsx
<>
  <s-button command="--show" commandFor="time-picker">
    Select Time
  </s-button>
  <s-time-picker
    id="time-picker"
    value="14:30"
    onChange={(event) => console.log('Time selected:', event.currentTarget.value)}
  />
</>;
```

#### Handle time selection events

Subscribe to time selection events to respond when merchants pick a time. This example shows how to handle `onChange` events to capture selected times, enabling validation, scheduling logic, or dynamic updates based on the chosen time.

### Handle time selection events

```tsx
<s-time-picker
  value="14:30"
  onInput={(event) => console.log('Input:', event.currentTarget.value)}
  onChange={(event) => console.log('Change:', event.currentTarget.value)}
  onFocus={(event) => console.log('Focused')}
  onBlur={(event) => console.log('Blurred')}
/>
```

***

### Best practices

* **Choose for visual time selection:** Use time picker when users benefit from a visual picker interface. Use [time field](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/forms/time-field) when users know the exact time.
* **Use correct format:** Always use `HH:mm:ss` format with leading zeros. The internal format is always 24-hour regardless of UI presentation.
* **Validate before setting values:** Invalid values reset to empty string. Implement validation to show appropriate error messages.

***

---



<a id="latest-web-components-layout-and-structure-box"></a>


## Box

The box component provides a container for layout and visual styling. Use it to apply padding, borders, and background colors, or to nest and group other components.

For user interaction, use box in combination with interactive components like [button](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/actions/button) or [clickable](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/actions/clickable). For scrollable content, use [scroll box](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/scroll-box).

#### Support Targets (18)

#### Supported targets

* [pos.​cart.​line-item-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/cart-details#cart-details-action-modal-)
* [pos.​customer-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/customer-details#customer-details-action-modal-)
* [pos.​customer-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/customer-details#customer-details-targets)
* [pos.​draft-order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/draft-order-details#draft-order-details-action-modal-)
* [pos.​draft-order-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/draft-order-details#draft-order-details-targets)
* [pos.​exchange.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-exchange#post-exchange-action-modal-)
* [pos.​exchange.​post.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-exchange#post-exchange-targets)
* [pos.​home.​modal.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/home-screen#home-screen-action-modal-)
* [pos.​order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/order-details#order-details-action-modal-)
* [pos.​order-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/order-details#order-details-targets)
* [pos.​product-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details#product-details-action-modal-)
* [pos.​product-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details#product-details-targets)
* [pos.​purchase.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-purchase#post-purchase-action-modal-)
* [pos.​purchase.​post.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-purchase#post-purchase-targets)
* [pos.​register-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/register-details#register-details-action-modal-)
* [pos.​register-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/register-details#register-details-block-)
* [pos.​return.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-return#post-return-action-modal-)
* [pos.​return.​post.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-return#post-return-targets)

##### Use cases

* **Spacing control:** Create consistent spacing and padding around content groups.
* **Structured layouts:** Build layouts by nesting components within Box containers.
* **Responsive sizing:** Apply sizing that adapts to different screen sizes and orientations.
* **Visual grouping:** Group related interface elements with consistent boundaries.

***

### Properties

Provides a generic layout container with sizing and spacing controls.

* **blockSize**

  **SizeUnitsOrAuto**

  **Default: 'auto'**

  Adjust the block size.

* **id**

  **string**

  A unique identifier for the element.

* **inlineSize**

  **SizeUnitsOrAuto**

  **Default: 'auto'**

  Adjust the inline size.

* **maxBlockSize**

  **SizeUnitsOrNone**

  **Default: 'none'**

  Adjust the maximum block size.

* **maxInlineSize**

  **SizeUnitsOrNone**

  **Default: 'none'**

  Adjust the maximum inline size.

* **minBlockSize**

  **SizeUnits**

  **Default: '0'**

  Adjust the minimum block size.

* **minInlineSize**

  **SizeUnits**

  **Default: '0'**

  Adjust the minimum inline size.

* **padding**

  **MaybeAllValuesShorthandProperty\<PaddingKeyword>**

  **Default: 'none'**

  Adjust the padding of all edges.

  [1-to-4-value syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties#edges_of_a_box) is supported. Note that, contrary to the CSS, it uses flow-relative values and the order is:

  * 4 values: `block-start inline-end block-end inline-start`
  * 3 values: `block-start inline block-end`
  * 2 values: `block inline`

  For example:

  * `large` means block-start, inline-end, block-end and inline-start paddings are `large`.
  * `large none` means block-start and block-end paddings are `large`, inline-start and inline-end paddings are `none`.
  * `large none large` means block-start padding is `large`, inline-end padding is `none`, block-end padding is `large` and inline-start padding is `none`.
  * `large none large small` means block-start padding is `large`, inline-end padding is `none`, block-end padding is `large` and inline-start padding is `small`.

  A padding value of `auto` will use the default padding for the closest container that has had its usual padding removed.

* **paddingBlock**

  **'' | MaybeTwoValuesShorthandProperty\<PaddingKeyword>**

  **Default: '' - meaning no override**

  Adjust the block-padding.

  * `large none` means block-start padding is `large`, block-end padding is `none`.

  This overrides the block value of `padding`.

* **paddingBlockEnd**

  **'' | PaddingKeyword**

  **Default: '' - meaning no override**

  Adjust the block-end padding.

  This overrides the block-end value of `paddingBlock`.

* **paddingBlockStart**

  **'' | PaddingKeyword**

  **Default: '' - meaning no override**

  Adjust the block-start padding.

  This overrides the block-start value of `paddingBlock`.

* **paddingInline**

  **'' | MaybeTwoValuesShorthandProperty\<PaddingKeyword>**

  **Default: '' - meaning no override**

  Adjust the inline padding.

  * `large none` means inline-start padding is `large`, inline-end padding is `none`.

  This overrides the inline value of `padding`.

* **paddingInlineEnd**

  **'' | PaddingKeyword**

  **Default: '' - meaning no override**

  Adjust the inline-end padding.

  This overrides the inline-end value of `paddingInline`.

* **paddingInlineStart**

  **'' | PaddingKeyword**

  **Default: '' - meaning no override**

  Adjust the inline-start padding.

  This overrides the inline-start value of `paddingInline`.

#### SizeUnitsOrAuto

```ts
SizeUnits | 'auto'
```

#### SizeUnits

```ts
`${number}px` | `${number}%` | `0`
```

#### SizeUnitsOrNone

```ts
SizeUnits | 'none'
```

#### MaybeAllValuesShorthandProperty

```ts
T | `${T} ${T}` | `${T} ${T} ${T}` | `${T} ${T} ${T} ${T}`
```

#### PaddingKeyword

```ts
SizeKeyword | 'none'
```

#### SizeKeyword

```ts
'small-500' | 'small-400' | 'small-300' | 'small-200' | 'small-100' | 'small' | 'base' | 'large' | 'large-100' | 'large-200' | 'large-300' | 'large-400' | 'large-500'
```

#### MaybeTwoValuesShorthandProperty

```ts
T | `${T} ${T}`
```

***

### Examples

#### Create a container with a box

Create layouts using a box component. This example demonstrates a basic box container with padding and styling.

### Create a container with a box

![Create layouts using a box component. This example demonstrates a basic box container with padding and styling.](https://shopify.dev/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/box-default-DydB6e8N.png)

### Create a container with a box

```html
<s-box padding="base">
  <s-text>View shipping settings</s-text>
</s-box>
```

***

### Best practices

* **Use semantic sizing:** Choose `auto` to adapt to content, percentages for responsive layouts, pixels only for exact dimensions.
* **Use design system padding:** Use predefined padding keywords (`small`, `base`, `large`) for consistency.
* **Use directional padding for asymmetry:** Use `paddingInline` and `paddingBlock` when different spacing is needed on different sides.
* **Understand block vs inline:** `block` refers to content flow direction (usually vertical), `inline` to text direction (usually horizontal).

***

---



<a id="latest-web-components-layout-and-structure-divider"></a>


## Divider

The divider component creates visual separation between content sections by rendering a horizontal or vertical line. Use it to organize information and improve content hierarchy.

#### Support Targets (10)

#### Supported targets

* [pos.​cart.​line-item-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/cart-details#cart-details-action-modal-)
* [pos.​customer-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/customer-details#customer-details-action-modal-)
* [pos.​draft-order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/draft-order-details#draft-order-details-action-modal-)
* [pos.​exchange.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-exchange#post-exchange-action-modal-)
* [pos.​home.​modal.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/home-screen#home-screen-action-modal-)
* [pos.​order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/order-details#order-details-action-modal-)
* [pos.​product-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details#product-details-action-modal-)
* [pos.​purchase.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-purchase#post-purchase-action-modal-)
* [pos.​register-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/register-details#register-details-action-modal-)
* [pos.​return.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-return#post-return-action-modal-)

##### Use cases

* **Content separation:** Separate distinct content sections within forms, lists, or panels.
* **Visual breaks:** Create breaks between groups of related actions or controls.
* **Information boundaries:** Establish clear boundaries between different types of information.
* **Hierarchy:** Improve content hierarchy by dividing complex interfaces into digestible sections.

***

### Properties

Displays a visual separator between content sections.

* **direction**

  **'inline' | 'block'**

  **Default: 'inline'**

  Specify the direction of the divider. This uses [logical properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values).

* **id**

  **string**

  A unique identifier for the element.

***

### Examples

#### Separate content sections with a divider

Separate content sections using a divider component. This example shows a basic horizontal divider.

### Separate content sections with a divider

![Separate content sections using a divider component. This example shows a basic horizontal divider.](https://shopify.dev/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/divider-default-CyGQrUtw.png)

### Separate content sections with a divider

```html
<s-divider />
```

***

### Best practices

* **Choose appropriate direction:** Use `inline` (horizontal) for most content separation. Use `block` (vertical) for columns or sidebar boundaries.
* **Avoid overuse:** Use dividers strategically. In dense interfaces, consider whitespace or typography hierarchy instead.

***

---



<a id="latest-web-components-layout-and-structure-empty-state"></a>


## Empty state

The empty state component displays a placeholder view when there is no content to show. Use it to guide users on what to do next, such as adding new items or performing actions to populate the view.

#### Support Targets (10)

#### Supported targets

* [pos.​cart.​line-item-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/cart-details#cart-details-action-modal-)
* [pos.​customer-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/customer-details#customer-details-action-modal-)
* [pos.​draft-order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/draft-order-details#draft-order-details-action-modal-)
* [pos.​exchange.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-exchange#post-exchange-action-modal-)
* [pos.​home.​modal.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/home-screen#home-screen-action-modal-)
* [pos.​order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/order-details#order-details-action-modal-)
* [pos.​product-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details#product-details-action-modal-)
* [pos.​purchase.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-purchase#post-purchase-action-modal-)
* [pos.​register-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/register-details#register-details-action-modal-)
* [pos.​return.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-return#post-return-action-modal-)

##### Use cases

* **No results:** Display a helpful message when search queries or filters return no matching items.
* **Empty lists:** Guide users to add items when product lists, customer lists, or order histories are empty.
* **First-time setup:** Provide onboarding guidance when a feature is used for the first time.
* **No data available:** Indicate when data is unavailable and suggest actions to populate the view.

***

### Properties

Displays an empty-state message with optional actions and supporting graphics.

* **heading**

  **string**

  The heading of the empty state.

* **subheading**

  **string**

  The subheading of the empty state.

#### Slots

The empty state component supports slots for adding graphics and actions. Learn more about [using slots](https://shopify.dev/docs/api/polaris/using-polaris-web-components#slots).

* **graphic**

  **HTMLElement**

  The graphic to display in the empty state. The only supported components is Icon, with a type of `alert-circle`, `search`, `info`, or `circle-info`.

* **primary-action**

  **HTMLElement**

  The primary action to perform, provided as a button or link type element.

* **secondary-actions**

  **HTMLElement**

  The secondary actions to perform, provided as button or link type elements.

***

### Examples

#### Create a generic empty state

Create layouts using an empty state component. This example demonstrates a basic empty state container.

### Create a generic empty state

![Create layouts using an empty state component. This example demonstrates a basic empty state container.](https://shopify.dev/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2026-01/emptystate-default-Cg0jEImL.png)

### Create a generic empty state

```html
<s-empty-state heading="Empty state title" subheading="Supporting copy">
  <s-icon slot="graphic" type="info" />
  <s-button slot="primary-action">Primary action</s-button>
</s-empty-state>
```

***

---



<a id="latest-web-components-layout-and-structure-heading"></a>


## Heading

The heading component renders hierarchical titles to communicate the structure and organization of page content and help users navigate complex interfaces.

Heading levels adjust automatically based on nesting within parent [section](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/layout-and-structure/section) components, ensuring a meaningful page outline.

#### Support Targets (18)

#### Supported targets

* [pos.​cart.​line-item-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/cart-details#cart-details-action-modal-)
* [pos.​customer-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/customer-details#customer-details-action-modal-)
* [pos.​customer-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/customer-details#customer-details-targets)
* [pos.​draft-order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/draft-order-details#draft-order-details-action-modal-)
* [pos.​draft-order-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/draft-order-details#draft-order-details-targets)
* [pos.​exchange.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-exchange#post-exchange-action-modal-)
* [pos.​exchange.​post.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-exchange#post-exchange-targets)
* [pos.​home.​modal.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/home-screen#home-screen-action-modal-)
* [pos.​order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/order-details#order-details-action-modal-)
* [pos.​order-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/order-details#order-details-targets)
* [pos.​product-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details#product-details-action-modal-)
* [pos.​product-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details#product-details-targets)
* [pos.​purchase.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-purchase#post-purchase-action-modal-)
* [pos.​purchase.​post.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-purchase#post-purchase-targets)
* [pos.​register-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/register-details#register-details-action-modal-)
* [pos.​register-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/register-details#register-details-block-)
* [pos.​return.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-return#post-return-action-modal-)
* [pos.​return.​post.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-return#post-return-targets)

##### Use cases

* **Page titles:** Create clear page and section titles that establish content hierarchy.
* **Content organization:** Organize forms, settings, or information displays with logical heading structures.
* **Contextual titles:** Provide titles for POS workflow sections like transaction details, customer info, or catalogs.

***

### Properties

Displays heading text for grouping and hierarchy.

* **id**

  **string**

  A unique identifier for the element.

***

### Examples

#### Display hierarchical headings

Create hierarchical titles using a heading component that adjusts levels automatically based on nesting. This example shows a basic heading with automatic level management.

### Display hierarchical headings

![Create hierarchical titles using a heading component that adjusts levels automatically based on nesting. This example shows a basic heading with automatic level management.](https://shopify.dev/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/heading-default-DwNMYANt.png)

### Display hierarchical headings

```html
<s-heading>Heading (H2)</s-heading>
<s-section>
  <s-heading>Heading (H3)</s-heading>
  <s-section>
    <s-heading>Heading (H4)</s-heading>
  </s-section>
</s-section>
```

***

### Best practices

* **Create logical hierarchy:** Start with higher-level headings for main sections, nested headings for subsections. Nested sections automatically adjust heading levels.
* **Write specific headings:** Avoid generic terms like "Details." Use specific descriptions like "Customer Contact Information" or "Transaction Summary."
* **Keep text concise:** Headings don't truncate, so keep them brief enough to display across different screen sizes.

***

---



<a id="latest-web-components-layout-and-structure-page"></a>


## Page

The page component serves as the main container for app content with preset layouts and heading controls. Use it to structure full-screen views with consistent navigation and content organization.

Page is designed for full-screen modal interfaces and isn't suitable for inline content or partial page layouts within existing POS screens.

#### Support Targets (10)

#### Supported targets

* [pos.​cart.​line-item-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/cart-details#cart-details-action-modal-)
* [pos.​customer-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/customer-details#customer-details-action-modal-)
* [pos.​draft-order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/draft-order-details#draft-order-details-action-modal-)
* [pos.​exchange.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-exchange#post-exchange-action-modal-)
* [pos.​home.​modal.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/home-screen#home-screen-action-modal-)
* [pos.​order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/order-details#order-details-action-modal-)
* [pos.​product-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details#product-details-action-modal-)
* [pos.​purchase.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-purchase#post-purchase-action-modal-)
* [pos.​register-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/register-details#register-details-action-modal-)
* [pos.​return.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-return#post-return-action-modal-)

##### Use cases

* **Full-screen interfaces:** Create interfaces for complex workflows like customer management or inventory.
* **Header layouts:** Structure content areas with consistent headers, titles, and action buttons.
* **Sidebar support:** Organize content with built-in sidebar for secondary information or tools.
* **Consistent patterns:** Establish consistent page layouts to maintain user familiarity.

***

### Properties

Provides the top-level page layout for extension content.

* **heading**

  **string**

  **Default: : ''**

  The main page heading, displayed in the action bar at the top of the page.

* **id**

  **string**

  A unique identifier for the element.

* **subheading**

  **string**

  A secondary page heading, displayed under the main heading in the action bar.

#### Slots

The page component supports slots for additional content placement within the page. Learn more about [using slots](https://shopify.dev/docs/api/polaris/using-polaris-web-components#slots).

* **aside**

  **HTMLElement**

  Content to display in the page's sidebar.

* **secondary-actions**

  **HTMLElement**

  Button element to display in the action bar. Only a single button is supported.

***

### Examples

#### Structure a page layout

Structure full-screen views using a page component with built-in header and content layouts. This example shows a basic page with title and main content area.

### Structure a page layout

![Structure full-screen views using a page component with built-in header and content layouts. This example shows a basic page with title and main content area.](https://shopify.dev/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/page-default-CZqYcs-O.png)

### Structure a page layout

```html
<s-page heading="Title">
  <s-button slot="secondary-actions">
    Action
  </s-button>
</s-page>
```

***

### Best practices

* **Write descriptive headings:** Use heading and subheading to describe the page's purpose and provide context about the current workflow step.
* **Place one primary action in action bar:** Use the secondary-actions slot for the page's most important action.
* **Use aside for supplementary content:** Reserve the aside slot for navigation, contextual help, or supporting information.

***

### Limitations

The `secondary-actions` slot supports only a single button element. Multiple actions in the action bar aren't supported and should be handled within the main content area.

***

---



<a id="latest-web-components-layout-and-structure-pos-block"></a>


## POS block

The POS block component creates a container to place content with an action button. Use it to display structured content within POS block targets.

The component provides a standardized layout specifically designed for content blocks within POS detail views, with consistent padding, spacing, and optional action buttons.

#### Support Targets (18)

#### Supported targets

* [pos.​cart.​line-item-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/cart-details#cart-details-action-modal-)
* [pos.​customer-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/customer-details#customer-details-action-modal-)
* [pos.​customer-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/customer-details#customer-details-targets)
* [pos.​draft-order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/draft-order-details#draft-order-details-action-modal-)
* [pos.​draft-order-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/draft-order-details#draft-order-details-targets)
* [pos.​exchange.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-exchange#post-exchange-action-modal-)
* [pos.​exchange.​post.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-exchange#post-exchange-targets)
* [pos.​home.​modal.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/home-screen#home-screen-action-modal-)
* [pos.​order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/order-details#order-details-action-modal-)
* [pos.​order-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/order-details#order-details-targets)
* [pos.​product-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details#product-details-action-modal-)
* [pos.​product-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details#product-details-targets)
* [pos.​purchase.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-purchase#post-purchase-action-modal-)
* [pos.​purchase.​post.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-purchase#post-purchase-targets)
* [pos.​register-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/register-details#register-details-action-modal-)
* [pos.​register-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/register-details#register-details-block-)
* [pos.​return.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-return#post-return-action-modal-)
* [pos.​return.​post.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-return#post-return-targets)

##### Use cases

* **Customer information:** Display customer info, loyalty status, or account details.
* **Order summaries:** Show order details, transaction info, or fulfillment status.
* **Product recommendations:** Present recommendations, inventory status, or related items.
* **Contextual content:** Provide actions and information that enhance core POS functionality.

***

### Properties

Displays content in a POS block container with optional heading.

* **heading**

  **string**

  The heading to display within the POSBlock.

  If not provided, the description of the extension will be used when a heading is appropriate.

* **id**

  **string**

  A unique identifier for the element.

***

### QR Code

Renders a QR code from provided content.

* **content**

  **string**

  The content to be encoded in the QR code, which can be any string such as a URL, email address, plain text, etc. Specific string formatting can trigger actions on the user's device when scanned, like opening geolocation coordinates on a map, opening a preferred app or app store entry, preparing an email, text message, and more.

* **id**

  **string**

  A unique identifier for the element.

#### Slots

The POS block component supports slots for additional content placement within the block. Learn more about [using slots](https://shopify.dev/docs/api/polaris/using-polaris-web-components#slots).

* **secondary-actions**

  **HTMLElement**

  The secondary actions to perform, provided as button or link type elements.

***

### Examples

#### Create a content block with an action button

Create structured content blocks using a POS block component with optional action buttons. This example shows a basic block with content and an action button.

### Create a content block with an action button

![Create structured content blocks using a POS block component with optional action buttons. This example shows a basic block with content and an action button.](https://shopify.dev/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/pos-block-default-oPm9hnKz.png)

### Create a content block with an action button

```html
<s-pos-block>
  <s-box paddingBlock="base">
    <s-text>Customer Loyalty</s-text>
  </s-box>
</s-pos-block>
```

***

### Best practices

* **Provide descriptive headings:** If you don't specify a heading, the system uses your extension's description, so ensure it's meaningful and concise.
* **Place important actions in secondary-actions slot:** Include only the most relevant actions directly related to your block's content.
* **Limit secondary actions:** To maintain clean, focused interfaces that don't overwhelm the existing POS workflow, use only one secondary action element in each block.

***

---



<a id="latest-web-components-layout-and-structure-scroll-box"></a>


## Scroll box

The scroll box component creates a scrollable area for content that exceeds container bounds. Use it to display large amounts of content within constrained spaces while maintaining usability.

The component creates a defined scrollable area with customizable dimensions and scroll behavior.

#### Support Targets (10)

#### Supported targets

* [pos.​cart.​line-item-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/cart-details#cart-details-action-modal-)
* [pos.​customer-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/customer-details#customer-details-action-modal-)
* [pos.​draft-order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/draft-order-details#draft-order-details-action-modal-)
* [pos.​exchange.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-exchange#post-exchange-action-modal-)
* [pos.​home.​modal.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/home-screen#home-screen-action-modal-)
* [pos.​order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/order-details#order-details-action-modal-)
* [pos.​product-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details#product-details-action-modal-)
* [pos.​purchase.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-purchase#post-purchase-action-modal-)
* [pos.​register-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/register-details#register-details-action-modal-)
* [pos.​return.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-return#post-return-action-modal-)

##### Use cases

* **Long lists:** Display lists of items or data that exceed available screen space.
* **Constrained layouts:** Create scrollable areas within modals where fixed dimensions are required.
* **Dynamic content:** Handle content that varies in length, like product lists or search results.
* **Overflow handling:** Contain overflow content without disrupting the overall page layout.

***

### Properties

Provides a scrollable container for overflowing content.

* **blockSize**

  **SizeUnitsOrAuto**

  **Default: 'auto'**

  Adjust the block size.

* **id**

  **string**

  A unique identifier for the element.

* **inlineSize**

  **SizeUnitsOrAuto**

  **Default: 'auto'**

  Adjust the inline size.

* **maxBlockSize**

  **SizeUnitsOrNone**

  **Default: 'none'**

  Adjust the maximum block size.

* **maxInlineSize**

  **SizeUnitsOrNone**

  **Default: 'none'**

  Adjust the maximum inline size.

* **minBlockSize**

  **SizeUnits**

  **Default: '0'**

  Adjust the minimum block size.

* **minInlineSize**

  **SizeUnits**

  **Default: '0'**

  Adjust the minimum inline size.

* **padding**

  **MaybeAllValuesShorthandProperty\<PaddingKeyword>**

  **Default: 'none'**

  Adjust the padding of all edges.

  [1-to-4-value syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties#edges_of_a_box) is supported. Note that, contrary to the CSS, it uses flow-relative values and the order is:

  * 4 values: `block-start inline-end block-end inline-start`
  * 3 values: `block-start inline block-end`
  * 2 values: `block inline`

  For example:

  * `large` means block-start, inline-end, block-end and inline-start paddings are `large`.
  * `large none` means block-start and block-end paddings are `large`, inline-start and inline-end paddings are `none`.
  * `large none large` means block-start padding is `large`, inline-end padding is `none`, block-end padding is `large` and inline-start padding is `none`.
  * `large none large small` means block-start padding is `large`, inline-end padding is `none`, block-end padding is `large` and inline-start padding is `small`.

  A padding value of `auto` will use the default padding for the closest container that has had its usual padding removed.

* **paddingBlock**

  **'' | MaybeTwoValuesShorthandProperty\<PaddingKeyword>**

  **Default: '' - meaning no override**

  Adjust the block-padding.

  * `large none` means block-start padding is `large`, block-end padding is `none`.

  This overrides the block value of `padding`.

* **paddingBlockEnd**

  **'' | PaddingKeyword**

  **Default: '' - meaning no override**

  Adjust the block-end padding.

  This overrides the block-end value of `paddingBlock`.

* **paddingBlockStart**

  **'' | PaddingKeyword**

  **Default: '' - meaning no override**

  Adjust the block-start padding.

  This overrides the block-start value of `paddingBlock`.

* **paddingInline**

  **'' | MaybeTwoValuesShorthandProperty\<PaddingKeyword>**

  **Default: '' - meaning no override**

  Adjust the inline padding.

  * `large none` means inline-start padding is `large`, inline-end padding is `none`.

  This overrides the inline value of `padding`.

* **paddingInlineEnd**

  **'' | PaddingKeyword**

  **Default: '' - meaning no override**

  Adjust the inline-end padding.

  This overrides the inline-end value of `paddingInline`.

* **paddingInlineStart**

  **'' | PaddingKeyword**

  **Default: '' - meaning no override**

  Adjust the inline-start padding.

  This overrides the inline-start value of `paddingInline`.

#### SizeUnitsOrAuto

```ts
SizeUnits | 'auto'
```

#### SizeUnits

```ts
`${number}px` | `${number}%` | `0`
```

#### SizeUnitsOrNone

```ts
SizeUnits | 'none'
```

#### MaybeAllValuesShorthandProperty

```ts
T | `${T} ${T}` | `${T} ${T} ${T}` | `${T} ${T} ${T} ${T}`
```

#### PaddingKeyword

```ts
SizeKeyword | 'none'
```

#### SizeKeyword

```ts
'small-500' | 'small-400' | 'small-300' | 'small-200' | 'small-100' | 'small' | 'base' | 'large' | 'large-100' | 'large-200' | 'large-300' | 'large-400' | 'large-500'
```

#### MaybeTwoValuesShorthandProperty

```ts
T | `${T} ${T}`
```

***

### Examples

#### Create a scrollable content area

Create scrollable content areas using a scroll box component for content that exceeds container bounds. This example shows a basic scrollable area with customizable dimensions.

### Create a scrollable content area

![Create scrollable content areas using a scroll box component for content that exceeds container bounds. This example shows a basic scrollable area with customizable dimensions.](https://shopify.dev/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/scrollbox-default-Mw9pDTuZ.png)

### Create a scrollable content area

```html
<s-scroll-box>
  <s-choice-list>
    <s-choice value="true-twin">True Twin board</s-choice>
    <s-choice value="directional">Directional board</s-choice>
    <s-choice value="volume">Volume shifted board</s-choice>
    <s-choice value="asymmetrical">Asymmetrical board</s-choice>
  </s-choice-list>
</s-scroll-box>
```

***

### Best practices

* **Set clear dimensions:** Use percentage values for responsive layouts or pixels for exact dimensions.
* **Use for appropriate content:** Reserve scroll box for long lists or dynamic content that genuinely needs scrolling, not short content that fits within available space.

***

---



<a id="latest-web-components-layout-and-structure-section"></a>


## Section

The section component groups related content into clearly-defined thematic areas. Use it to organize content and provide clear navigation landmarks.

The component manages heading levels automatically, ensuring nested sections maintain proper semantic structure. Only one secondary action button is supported for each section.

#### Support Targets (18)

#### Supported targets

* [pos.​cart.​line-item-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/cart-details#cart-details-action-modal-)
* [pos.​customer-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/customer-details#customer-details-action-modal-)
* [pos.​customer-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/customer-details#customer-details-targets)
* [pos.​draft-order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/draft-order-details#draft-order-details-action-modal-)
* [pos.​draft-order-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/draft-order-details#draft-order-details-targets)
* [pos.​exchange.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-exchange#post-exchange-action-modal-)
* [pos.​exchange.​post.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-exchange#post-exchange-targets)
* [pos.​home.​modal.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/home-screen#home-screen-action-modal-)
* [pos.​order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/order-details#order-details-action-modal-)
* [pos.​order-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/order-details#order-details-targets)
* [pos.​product-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details#product-details-action-modal-)
* [pos.​product-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details#product-details-targets)
* [pos.​purchase.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-purchase#post-purchase-action-modal-)
* [pos.​purchase.​post.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-purchase#post-purchase-targets)
* [pos.​register-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/register-details#register-details-action-modal-)
* [pos.​register-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/register-details#register-details-block-)
* [pos.​return.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-return#post-return-action-modal-)
* [pos.​return.​post.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-return#post-return-targets)

##### Use cases

* **Content grouping:** Organize forms or interfaces into logical groups with clear headings.
* **Navigation support:** Group related settings or information into distinct scannable areas.
* **Contextual actions:** Provide actions through the secondary actions slot, like edit or configure buttons.

***

### Properties

Groups related content into a titled section.

* **heading**

  **string**

  A title that describes the content of the section.

  If omitted, and no secondaryActions are provided, the section will be rendered without a header.

* **id**

  **string**

  A unique identifier for the element.

#### Slots

The section component supports slots for additional content placement within the section. Learn more about [using slots](https://shopify.dev/docs/api/polaris/using-polaris-web-components#slots).

* **secondary-actions**

  **HTMLElement**

  Button element to display in the section heading. A single button is supported.

***

### Examples

#### Group related content into sections

Group related content using a section component. This example shows a basic section with a heading and content area.

### Group related content into sections

![Group related content using a section component. This example shows a basic section with a heading and content area.](https://shopify.dev/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/section-default-CfOcmLim.png)

### Group related content into sections

```html
<s-section heading="Select product category">
  <s-button slot="secondary-actions">Edit</s-button>
  <s-choice-list>
    <s-choice value="snowboards">Snowboards</s-choice>
    <s-choice value="jackets">Jackets</s-choice>
    <s-choice value="label">Label</s-choice>
  </s-choice-list>
</s-section>
```

***

### Best practices

* **Write descriptive headings:** Provide clear heading text that represents the section's content.
* **Let heading levels adjust automatically:** Nested sections automatically adjust heading levels for proper semantic structure.
* **Place relevant secondary actions:** Use the secondary-actions slot for actions that apply to the entire section, like "Edit Settings" or "Add Item."

***

---



<a id="latest-web-components-layout-and-structure-stack"></a>


## Stack

The stack component organizes elements along the block (vertical) or inline (horizontal) axis. Use it to structure layouts and control spacing between elements.

The component automatically manages spacing through gap properties and supports flexible alignment and wrapping behavior. Complex grid-like layouts may require multiple nested stack components or alternative layout approaches.

#### Support Targets (18)

#### Supported targets

* [pos.​cart.​line-item-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/cart-details#cart-details-action-modal-)
* [pos.​customer-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/customer-details#customer-details-action-modal-)
* [pos.​customer-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/customer-details#customer-details-targets)
* [pos.​draft-order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/draft-order-details#draft-order-details-action-modal-)
* [pos.​draft-order-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/draft-order-details#draft-order-details-targets)
* [pos.​exchange.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-exchange#post-exchange-action-modal-)
* [pos.​exchange.​post.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-exchange#post-exchange-targets)
* [pos.​home.​modal.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/home-screen#home-screen-action-modal-)
* [pos.​order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/order-details#order-details-action-modal-)
* [pos.​order-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/order-details#order-details-targets)
* [pos.​product-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details#product-details-action-modal-)
* [pos.​product-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details#product-details-targets)
* [pos.​purchase.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-purchase#post-purchase-action-modal-)
* [pos.​purchase.​post.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-purchase#post-purchase-targets)
* [pos.​register-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/register-details#register-details-action-modal-)
* [pos.​register-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/register-details#register-details-block-)
* [pos.​return.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-return#post-return-action-modal-)
* [pos.​return.​post.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-return#post-return-targets)

##### Use cases

* **Layout arrangement:** Arrange form elements, buttons, or content in vertical or horizontal layouts.
* **Responsive design:** Create layouts that adapt to different screen sizes and orientations.
* **Spacing control:** Control spacing between elements using gap properties for visual hierarchy.
* **Content alignment:** Align content precisely using `justify` and `align` properties.

***

### Properties

Arranges children in a horizontal or vertical stack.

* **alignContent**

  **AlignContentKeyword**

  Aligns the stack along the cross axis.

* **alignItems**

  **AlignItemsKeyword**

  Aligns the stack's children along the cross axis.

* **blockSize**

  **SizeUnitsOrAuto**

  **Default: 'auto'**

  Adjust the block size. **Mobile surfaces:** Avoid using percentage-based sizes. They do not behave as expected when placed within a scrollable container.

* **columnGap**

  **'' | SpacingKeyword**

  **Default: '' - meaning no override**

  Adjust spacing between elements in the inline axis. This overrides the column value of gap.

* **direction**

  **'block' | 'inline'**

  **Default: 'block'**

  Sets how the children are placed within the stack. This uses logical properties.

* **gap**

  **MaybeTwoValuesShorthandProperty\<SpacingKeyword>**

  **Default: 'none'**

  Adjust spacing between elements. A single value applies to both axes. A pair of values (eg large-100 large-500) can be used to set the inline and block axes respectively.

* **id**

  **string**

  A unique identifier for the element.

* **inlineSize**

  **SizeUnitsOrAuto**

  **Default: 'auto'**

  Adjust the inline size.

* **justifyContent**

  **JustifyContentKeyword**

  **Default: 'normal'**

  Aligns the stack along the main axis.

* **maxBlockSize**

  **SizeUnitsOrNone**

  **Default: 'none'**

  Adjust the maximum block size. **Mobile surfaces:** Avoid using percentage-based sizes. They do not behave as expected when placed within a scrollable container.

* **maxInlineSize**

  **SizeUnitsOrNone**

  **Default: 'none'**

  Adjust the maximum inline size. **Mobile surfaces:** Avoid using percentage-based sizes. They do not behave as expected when placed within a scrollable container.

* **minBlockSize**

  **SizeUnits**

  **Default: '0'**

  Adjust the minimum block size. **Mobile surfaces:** Avoid using percentage-based sizes. They do not behave as expected when placed within a scrollable container.

* **minInlineSize**

  **SizeUnits**

  **Default: '0'**

  Adjust the minimum inline size. **Mobile surfaces:** Avoid using percentage-based sizes. They do not behave as expected when placed within a scrollable container.

* **padding**

  **MaybeAllValuesShorthandProperty\<PaddingKeyword>**

  **Default: 'none'**

  Adjust the padding of all edges.

  [1-to-4-value syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties#edges_of_a_box) is supported. Note that, contrary to the CSS, it uses flow-relative values and the order is:

  * 4 values: `block-start inline-end block-end inline-start`
  * 3 values: `block-start inline block-end`
  * 2 values: `block inline`

  For example:

  * `large` means block-start, inline-end, block-end and inline-start paddings are `large`.
  * `large none` means block-start and block-end paddings are `large`, inline-start and inline-end paddings are `none`.
  * `large none large` means block-start padding is `large`, inline-end padding is `none`, block-end padding is `large` and inline-start padding is `none`.
  * `large none large small` means block-start padding is `large`, inline-end padding is `none`, block-end padding is `large` and inline-start padding is `small`.

  A padding value of `auto` will use the default padding for the closest container that has had its usual padding removed.

* **paddingBlock**

  **MaybeTwoValuesShorthandProperty<'' | PaddingKeyword>**

  **Default: '' - meaning no override**

  Adjust the block-padding.

  * `large none` means block-start padding is `large`, block-end padding is `none`.

  This overrides the block value of `padding`.

* **paddingBlockEnd**

  **'' | PaddingKeyword**

  **Default: '' - meaning no override**

  Adjust the block-end padding.

  This overrides the block-end value of `paddingBlock`.

* **paddingBlockStart**

  **'' | PaddingKeyword**

  **Default: '' - meaning no override**

  Adjust the block-start padding.

  This overrides the block-start value of `paddingBlock`.

* **paddingInline**

  **MaybeTwoValuesShorthandProperty<'' | PaddingKeyword>**

  **Default: '' - meaning no override**

  Adjust the inline padding.

  * `large none` means inline-start padding is `large`, inline-end padding is `none`.

  This overrides the inline value of `padding`.

* **paddingInlineEnd**

  **'' | PaddingKeyword**

  **Default: '' - meaning no override**

  Adjust the inline-end padding.

  This overrides the inline-end value of `paddingInline`.

* **paddingInlineStart**

  **'' | PaddingKeyword**

  **Default: '' - meaning no override**

  Adjust the inline-start padding.

  This overrides the inline-start value of `paddingInline`.

* **rowGap**

  **'' | SpacingKeyword**

  **Default: '' - meaning no override**

  Adjust spacing between elements in the block axis. This overrides the row value of gap.

#### AlignContentKeyword

Align content sets the distribution of space between and around content items along a flexbox's cross axis, or a grid or block-level element's block axis.

```ts
'normal' | BaselinePosition | ContentDistribution | OverflowPosition | ContentPosition
```

#### BaselinePosition

```ts
'baseline' | 'first baseline' | 'last baseline'
```

#### ContentDistribution

```ts
'space-between' | 'space-around' | 'space-evenly' | 'stretch'
```

#### OverflowPosition

```ts
`unsafe ${ContentPosition}` | `safe ${ContentPosition}`
```

#### ContentPosition

```ts
'center' | 'start' | 'end'
```

#### AlignItemsKeyword

Align items sets the align-self value on all direct children as a group.

```ts
'normal' | 'stretch' | BaselinePosition | OverflowPosition | ContentPosition
```

#### SizeUnitsOrAuto

```ts
SizeUnits | 'auto'
```

#### SizeUnits

```ts
`${number}px` | `${number}%` | `0`
```

#### SpacingKeyword

```ts
SizeKeyword | 'none'
```

#### SizeKeyword

```ts
'small-500' | 'small-400' | 'small-300' | 'small-200' | 'small-100' | 'small' | 'base' | 'large' | 'large-100' | 'large-200' | 'large-300' | 'large-400' | 'large-500'
```

#### MaybeTwoValuesShorthandProperty

```ts
T | `${T} ${T}`
```

#### JustifyContentKeyword

Justify content defines how the browser distributes space between and around content items along the main-axis of a flex container, and the inline axis of a grid container.

```ts
'normal' | ContentDistribution | OverflowPosition | ContentPosition
```

#### SizeUnitsOrNone

```ts
SizeUnits | 'none'
```

#### MaybeAllValuesShorthandProperty

```ts
T | `${T} ${T}` | `${T} ${T} ${T}` | `${T} ${T} ${T} ${T}`
```

#### PaddingKeyword

```ts
SizeKeyword | 'none'
```

***

### Examples

#### Organize elements with a stack

Organize elements using a stack component. This example shows a basic stack with spacing between child elements.

### Organize elements with a stack

![Organize elements using a stack component. This example shows a basic stack with spacing between child elements.](https://shopify.dev/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/stack-default-B7z12LPO.png)

### Organize elements with a stack

```html
<s-stack gap="small" direction="inline" justifyContent="center">
  <s-badge tone="neutral">Paid</s-badge>
  <s-badge tone="success">Active</s-badge>
</s-stack>
```

***

### Best practices

* **Choose appropriate direction:** Use `block` for vertical arrangements like forms. Use `inline` for horizontal arrangements like button groups. Note that inline wraps while block doesn't.
* **Use design system spacing:** Use `SpacingKeyword` values for consistency. Start with `base` and adjust as needed.
* **Apply alignment properties:** Use `justifyContent` for main axis distribution, `alignItems` for cross axis positioning, `alignContent` for extra space distribution.
* **Avoid percentages on mobile:** Don't use percentage-based sizing within scrollable containers on mobile surfaces.
* **Use gap for spacing control:** Use `gap` for uniform spacing, `rowGap` for block axis, `columnGap` for inline axis.

***

---



<a id="latest-web-components-layout-and-structure-tabs"></a>


## Tabs

The tabs component organizes content into separate views, allowing merchants to switch between related information without leaving the current page. Use tabs when you need to present multiple categories of content in a space-efficient manner.

Tabs consist of a tab list containing clickable tab buttons and corresponding tab panels that display the content. Only one panel is visible at a time, reducing cognitive load and keeping the interface clean.

#### Support Targets (10)

#### Supported targets

* [pos.​cart.​line-item-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/cart-details#cart-details-action-modal-)
* [pos.​customer-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/customer-details#customer-details-action-modal-)
* [pos.​draft-order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/draft-order-details#draft-order-details-action-modal-)
* [pos.​exchange.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-exchange#post-exchange-action-modal-)
* [pos.​home.​modal.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/home-screen#home-screen-action-modal-)
* [pos.​order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/order-details#order-details-action-modal-)
* [pos.​product-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details#product-details-action-modal-)
* [pos.​purchase.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-purchase#post-purchase-action-modal-)
* [pos.​register-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/register-details#register-details-action-modal-)
* [pos.​return.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-return#post-return-action-modal-)

##### Use cases

* **Content categories:** Organize product information, customer details, or order data into categorized views.
* **Workflow sections:** Separate different stages or aspects of a workflow into distinct tabbed panels.
* **Dashboard views:** Present multiple data views like analytics, inventory, and reports in a space-efficient layout.
* **Settings groups:** Group related settings or preferences into tabs for easier navigation and management.

***

### Tabs Properties

Groups related content into selectable tabbed views.

* **defaultValue**

  **string**

  The default value of the selected tab.

  This should match the `id` prop of one of the tab panel components. If not provided, the first tab will be selected by default.

  Reflects to the `value` attribute

* **disabled**

  **boolean**

  Disables all tabs and prevents user interaction.

* **value**

  **string**

  The value of the selected tab.

  This should match the `id` prop of one of the tab panel components. If not provided, the first tab will be selected by default.

#### Tabs Events

The tabs component provides event callbacks for handling user interactions. Learn more about [handling events](https://shopify.dev/docs/api/polaris/using-polaris-web-components#handling-events).

* **change**

  **(event: CallbackEvent<"s-tabs">) => void**

#### CallbackEvent

* bubbles

  ```ts
  boolean
  ```

* cancelable

  ```ts
  boolean
  ```

* composed

  ```ts
  boolean
  ```

* currentTarget

  ```ts
  HTMLElementTagNameMap[T]
  ```

* detail

  ```ts
  any
  ```

* eventPhase

  ```ts
  number
  ```

* target

  ```ts
  HTMLElementTagNameMap[T] | null
  ```

***

### Tab​List

* **children**

  **ComponentChildren**

  Accepts only tabs components.

#### ComponentChildren

TODO: Update \`any\` type here after this is resolved https://github.com/Shopify/ui-api-design/issues/139

```ts
any
```

***

### Tab

Represents an individual tab inside a tabs component.

* **controls**

  **string**

  Corresponds to the `id` property of the tab panel component that will be displayed when selected

* **disabled**

  **boolean**

  **Default: false**

  Disables the control, disallowing any interaction.

***

### Tab​Panel

Represents content associated with a selected tab.

* **id**

  **string**

  The id of the tab panel used for identification in the tabs component. Must match the `controls` prop of the corresponding tab component.

***

### Examples

#### Create a tabbed interface

Organize content into tabs using the tabs component with tab list, tab, and tab panel components. This example shows a basic tabbed interface with two tabs.

### Create a tabbed interface

![Organize content into tabs using the tabs component with tab list, tab, and tab panel components. This example shows a basic tabbed interface with two tabs.](https://shopify.dev/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2026-01/tab-default-CD-8un5V.png)

### Create a tabbed interface

```html
<s-tabs defaultValue="tab1">
  <s-tab-list>
    <s-tab controls="tab1">Tab 1</s-tab>
    <s-tab controls="tab2">Tab 2</s-tab>
  </s-tab-list>


  <s-tab-panel id="tab1">
    <s-text>Content for Tab 1</s-text>
  </s-tab-panel>


  <s-tab-panel id="tab2">
    <s-text>Content for Tab 2</s-text>
  </s-tab-panel>
</s-tabs>
```

#### Handle tab change events

Subscribe to the `onChange` event to respond when merchants select different tabs. This example shows how to handle tab changes and capture the selected tab value in real time, enabling dynamic behavior based on which tab is active.

### Handle tab change events

```html
<s-tabs
  defaultValue="details"
  onChange={(event) => console.log('Tab changed to:', event.currentTarget.value)}
>
  <s-tab-list>
    <s-tab controls="details">Details</s-tab>
    <s-tab controls="history">History</s-tab>
    <s-tab controls="notes">Notes</s-tab>
  </s-tab-list>


  <s-tab-panel id="details">
    <s-text>Customer details and information</s-text>
  </s-tab-panel>


  <s-tab-panel id="history">
    <s-text>Order and purchase history</s-text>
  </s-tab-panel>


  <s-tab-panel id="notes">
    <s-text>Customer notes and comments</s-text>
  </s-tab-panel>
</s-tabs>
```

***

### Accessibility

* **Provide accessibility labels:** Use the `accessibilityLabel` prop on the tabs component to describe the purpose of the tab group.
* **Ensure keyboard navigation:** The component supports arrow key navigation between tabs and Enter/Space to activate tabs.
* **Connect tabs and panels:** Always use matching `controls` (on tab) and `id` (on tab panel) properties to maintain proper semantic relationships.

***

---



<a id="latest-web-components-layout-and-structure-text"></a>


## Text

The text component displays text with specific visual styles or tones. Use it to present content with appropriate emphasis, hierarchy, or tone while maintaining semantic meaning.

Text on mobile surfaces is blockish, rather than inline.

#### Support Targets (20)

#### Supported targets

* [pos.​cart.​line-item-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/cart-details#cart-details-action-modal-)
* [pos.​customer-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/customer-details#customer-details-action-modal-)
* [pos.​customer-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/customer-details#customer-details-targets)
* [pos.​draft-order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/draft-order-details#draft-order-details-action-modal-)
* [pos.​draft-order-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/draft-order-details#draft-order-details-targets)
* [pos.​exchange.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-exchange#post-exchange-action-modal-)
* [pos.​exchange.​post.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-exchange#post-exchange-targets)
* [pos.​home.​modal.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/home-screen#home-screen-action-modal-)
* [pos.​order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/order-details#order-details-action-modal-)
* [pos.​order-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/order-details#order-details-targets)
* [pos.​product-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details#product-details-action-modal-)
* [pos.​product-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details#product-details-targets)
* [pos.​purchase.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-purchase#post-purchase-action-modal-)
* [pos.​purchase.​post.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-purchase#post-purchase-targets)
* [pos.​receipt-footer.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/receipts#receipt-block-footer-)
* [pos.​receipt-header.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/receipts#receipts-targets)
* [pos.​register-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/register-details#register-details-action-modal-)
* [pos.​register-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/register-details#register-details-block-)
* [pos.​return.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-return#post-return-action-modal-)
* [pos.​return.​post.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-return#post-return-targets)

##### Use cases

* **Body content:** Display text, labels, and descriptions with appropriate visual hierarchy.
* **Status information:** Present alerts or notifications using tone to convey urgency or importance.
* **Emphasis:** Create emphasized text elements using type variations like strong or small.
* **Nested content:** Support nested text elements for complex formatting within a single block.

***

### Properties

Renders styled textual content.

* **color**

  **ColorKeyword**

  **Default: 'base'**

  Modify the color to be more or less intense.

* **id**

  **string**

  A unique identifier for the element.

* **tone**

  **| 'auto' | 'neutral' | 'info' | 'success' | 'caution' | 'warning' | 'critical'**

  **Default: 'auto'**

  Sets the tone of the component, based on the intention of the information being conveyed.

* **type**

  **'strong' | 'small' | 'generic'**

  **Default: 'generic'**

  Provide semantic meaning and default styling to the text.

  Other presentation properties on Text override the default styling.

#### ColorKeyword

```ts
'subdued' | 'base' | 'strong'
```

***

### Examples

#### Display text with visual styles

Display text content using a text component with customizable visual styles and tones. This example shows basic text with appropriate emphasis and hierarchy.

### Display text with visual styles

![Display text content using a text component with customizable visual styles and tones. This example shows basic text with appropriate emphasis and hierarchy.](https://shopify.dev/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/text-default-CzKWIT1t.png)

### Display text with visual styles

```html
<s-text>
  <s-text type="strong">Name:</s-text> Jane Doe
</s-text>
```

***

### Best practices

* **Choose semantic types:** Use `strong` for emphasis, `small` for secondary info, `generic` for standard text.
* **Apply appropriate tones:** Use `success` for positive outcomes, `warning` or `critical` for alerts, `info` for helpful context, `auto` for neutral content.
* **Balance color intensity:** Use `strong` for emphasis, `base` for readability, `subdued` for secondary info.
* **Nest for mixed formatting:** Nest text components when you need multiple styles within one text block.
* **Use stack for icons and badges:** When combining text with icons or badges, use stack with direction="inline" instead of nesting components inside text.

***

### Limitations

Complex rich text formatting isn't supported—use multiple text components or nested text elements for varied formatting needs.

Nesting icon or badge components inside text isn't supported due to React Native alignment limitations—use stack with direction="inline" and alignItems="center" instead to properly align icons and badges with text.

***

---



<a id="latest-web-components-media-and-visuals-embed"></a>


## Embed

The embed component displays a preview of printable content from a specified source URL. Use it to show users what will be printed before triggering the actual print operation.

Embed works in conjunction with the Print API to provide complete print functionality from preview to execution.

Supported document types:

* **HTML documents** (`.html`, `.htm`) - Best printing experience with full CSS styling, embedded images, and complex layouts. Use for receipts, invoices, and formatted reports.

* **Text files** (`.txt`, `.csv`) - Plain text with basic content and tabular data support. Use for simple receipts and data exports.

* **PDF files** (`.pdf`) - Behavior varies by platform: prints directly on iOS/desktop, but downloads to external viewer on Android. Use for complex documents and compliance requirements.

[Learn how to build a print extension in POS](https://shopify.dev/docs/apps/build/pos/build-print-extension).

#### Support Targets (10)

#### Supported targets

* [pos.​cart.​line-item-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/cart-details#cart-details-action-modal-)
* [pos.​customer-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/customer-details#customer-details-action-modal-)
* [pos.​draft-order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/draft-order-details#draft-order-details-action-modal-)
* [pos.​exchange.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-exchange#post-exchange-action-modal-)
* [pos.​home.​modal.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/home-screen#home-screen-action-modal-)
* [pos.​order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/order-details#order-details-action-modal-)
* [pos.​product-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details#product-details-action-modal-)
* [pos.​purchase.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-purchase#post-purchase-action-modal-)
* [pos.​register-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/register-details#register-details-action-modal-)
* [pos.​return.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-return#post-return-action-modal-)

##### Use cases

* **Print preview:** Display a preview of receipts, invoices, or labels before triggering the actual print operation.
* **Receipt formatting:** Show formatted HTML receipts with branding, styling, and embedded images for merchant review.
* **Document display:** Present PDF documents like compliance forms or detailed invoices within the POS interface.
* **Data exports:** Preview plain text or CSV exports before printing, such as inventory counts or sales reports.

***

### Properties

* **accessibilityLabel**

  **string**

  A label that describes the purpose or contents of the embed. It will be read to users using assistive technologies such as screen readers.

* **blockSize**

  **MaybeResponsive\<SizeUnitsOrAuto>**

  **Default: 'auto'**

  Adjust the block size.

* **id**

  **string**

  A unique identifier for the element.

* **inlineSize**

  **MaybeResponsive\<SizeUnitsOrAuto>**

  **Default: 'auto'**

  Adjust the inline size.

* **maxBlockSize**

  **MaybeResponsive\<SizeUnitsOrNone>**

  **Default: 'none'**

  Adjust the maximum block size.

* **maxInlineSize**

  **MaybeResponsive\<SizeUnitsOrNone>**

  **Default: 'none'**

  Adjust the maximum inline size.

* **minBlockSize**

  **MaybeResponsive\<SizeUnits>**

  **Default: '0'**

  Adjust the minimum block size.

* **minInlineSize**

  **MaybeResponsive\<SizeUnits>**

  **Default: '0'**

  Adjust the minimum inline size.

* **src**

  **string**

  The source of the file to preview.

  The value must be either:

  * A relative path that will be appended to your app's `application_url`.
  * A full URL to your app's backend that will be used to return the file.

  Supported file types:

  * HTML files
  * Text files
  * PDF files

* **type**

  **'text/html' | 'text/plain' | 'application/pdf'**

  **Default: 'text/html'**

  The content type of the file to display.

#### MaybeResponsive

```ts
T | `@container${string}`
```

#### SizeUnitsOrAuto

```ts
SizeUnits | 'auto'
```

#### SizeUnits

```ts
`${number}px` | `${number}%` | `0`
```

#### SizeUnitsOrNone

```ts
SizeUnits | 'none'
```

***

### Examples

#### Preview printable content

Display a preview of printable content before triggering the print operation. This example shows how to use embed with HTML documents, PDFs, or text files, supporting various document formats with proper rendering for receipts, invoices, and formatted reports.

### Preview printable content

![Display a preview of printable content before triggering the print operation. This example shows how to use embed with HTML documents, PDFs, or text files, supporting various document formats with proper rendering for receipts, invoices, and formatted reports.](https://shopify.dev/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2026-01/embed-default-Dmvcd9hD.png)

### Preview printable content

```html
<s-embed
  inlineSize="400px"
  blockSize="600px"
  type="application/pdf"
  src="print-preview.pdf"
/>
```

***

### Best practices

* **Design print-optimized content:** Structure your printable content with print-specific CSS media queries, appropriate page breaks, and formatting that works well on physical paper. Consider printer capabilities and paper sizes commonly used in POS environments.
* **Implement proper error handling:** Handle cases where the source URL is unavailable, the document format is unsupported, or network issues prevent content loading. Provide clear feedback to users when preview or printing fails.
* **Consider platform-specific limitations:** Be aware that PDF files on Android devices require external applications for printing. Design your workflow to handle this gracefully, potentially offering alternative formats or clear instructions for Android users.
* **Optimize source URL management:** Use relative paths when possible for internal app resources to simplify URL management and improve performance. Reserve full URLs for external resources or when you need complete control over the endpoint.
* **Provide clear print workflows:** Combine Embed with appropriate UI controls like print buttons, allowing users to review content before committing to print. Consider implementing print confirmation dialogs for important or expensive print operations.

***

### Limitations

* Embed must be a direct child of the screen component and can't be nested inside any other component—this structural requirement ensures proper preview rendering and print functionality.
* The component requires network access to fetch content from the specified source URL—offline functionality isn't supported for remote content.
* Content is displayed as-is from the source—real-time content modification or editing within the preview isn't supported.
* PDF printing on Android devices requires external applications—the component can't handle PDF printing natively on all platforms, which may affect user experience consistency across different POS devices.

***

---



<a id="latest-web-components-media-and-visuals-icon"></a>


## Icon

The icon component displays standardized visual symbols from the POS catalog to represent actions, statuses, or categories. Use icons to enhance navigation or provide visual context alongside text.

For interactive icons, wrap them in [button](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/actions/button) or [clickable](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/actions/clickable) components.

#### Support Targets (18)

#### Supported targets

* [pos.​cart.​line-item-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/cart-details#cart-details-action-modal-)
* [pos.​customer-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/customer-details#customer-details-action-modal-)
* [pos.​customer-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/customer-details#customer-details-targets)
* [pos.​draft-order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/draft-order-details#draft-order-details-action-modal-)
* [pos.​draft-order-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/draft-order-details#draft-order-details-targets)
* [pos.​exchange.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-exchange#post-exchange-action-modal-)
* [pos.​exchange.​post.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-exchange#post-exchange-targets)
* [pos.​home.​modal.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/home-screen#home-screen-action-modal-)
* [pos.​order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/order-details#order-details-action-modal-)
* [pos.​order-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/order-details#order-details-targets)
* [pos.​product-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details#product-details-action-modal-)
* [pos.​product-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details#product-details-targets)
* [pos.​purchase.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-purchase#post-purchase-action-modal-)
* [pos.​purchase.​post.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-purchase#post-purchase-targets)
* [pos.​register-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/register-details#register-details-action-modal-)
* [pos.​register-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/register-details#register-details-block-)
* [pos.​return.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-return#post-return-action-modal-)
* [pos.​return.​post.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-return#post-return-targets)

##### Use cases

* **Action clarity:** Enhance buttons with visual indicators for actions like save, delete, or navigate.
* **Visual context:** Provide context in lists and cards to identify item types or statuses.
* **Navigation cues:** Create intuitive elements that help merchants understand destinations.
* **System states:** Indicate states like connectivity, battery levels, or processing status.

***

### Properties

Displays a predefined icon glyph.

* **color**

  **ColorKeyword**

  **Default: 'base'**

  Modify the color to be more or less intense.

* **id**

  **string**

  A unique identifier for the element.

* **size**

  **SizeKeyword**

  **Default: 'base'**

  Adjusts the size of the icon.

* **tone**

  **ToneKeyword**

  **Default: 'auto'**

  Sets the tone of the icon, based on the intention of the information being conveyed.

* **type**

  **SupportedIconNames**

  **Default: ''**

  The type of icon to display.

#### ColorKeyword

```ts
'subdued' | 'base' | 'strong'
```

#### SizeKeyword

```ts
'small-500' | 'small-400' | 'small-300' | 'small-200' | 'small-100' | 'small' | 'base' | 'large' | 'large-100' | 'large-200' | 'large-300' | 'large-400' | 'large-500'
```

#### ToneKeyword

Tone is a property for defining the color treatment of a component. A tone can apply a grouping of colors to a component. For example, critical may have a specific text color and background color. In some cases, like for Banner, the tone may also affect the semantic and accessibility treatment of the component.

```ts
'auto' | 'neutral' | 'info' | 'success' | 'caution' | 'warning' | 'critical' | 'accent' | 'custom'
```

#### SupportedIconNames

```ts
'external' | 'alert-circle' | 'apps' | 'arrow-down' | 'arrow-left' | 'arrow-right' | 'arrow-up' | 'backspace' | 'barcode' | 'battery-low' | 'bolt-filled' | 'bullet' | 'camera-flip' | 'caret-down' | 'caret-up' | 'cart' | 'cart-down' | 'cart-filled' | 'cart-send' | 'cart-up' | 'chart-line' | 'chart-vertical' | 'check' | 'check-circle-filled' | 'chevron-down' | 'chevron-left' | 'chevron-right' | 'chevron-up' | 'circle' | 'clipboard-checklist' | 'clock' | 'collection' | 'credit-card' | 'credit-card-reader' | 'delete' | 'delivery' | 'desktop' | 'disabled' | 'disabled-filled' | 'discount' | 'discount-add' | 'discount-automatic' | 'discount-code' | 'discount-remove' | 'drag-handle' | 'drawer' | 'duplicate' | 'edit' | 'email' | 'exchange' | 'flag' | 'gift-card' | 'graduation-hat' | 'grid' | 'hide-filled' | 'home' | 'home-filled' | 'image' | 'images' | 'info' | 'inventory' | 'inventory-edit' | 'inventory-list' | 'inventory-transfer' | 'keyboard-hide' | 'keypad' | 'link' | 'list-bulleted' | 'list-bulleted-filled' | 'live' | 'live-critical' | 'live-none' | 'location' | 'lock' | 'maximize' | 'menu' | 'menu-filled' | 'menu-horizontal' | 'minimize' | 'minus' | 'mobile' | 'money' | 'money-split' | 'note' | 'order' | 'order-draft' | 'order-filled' | 'package' | 'package-cancel' | 'package-reassign' | 'payment' | 'person' | 'person-add' | 'person-filled' | 'phablet' | 'phone-out' | 'play-circle' | 'plus' | 'point-of-sale' | 'point-of-sale-register' | 'print' | 'product' | 'product-filled' | 'profile' | 'question-circle-filled' | 'receipt' | 'refresh' | 'return' | 'scan-qr-code' | 'search' | 'send' | 'settings' | 'shipping-label-cancel' | 'sort' | 'star-circle' | 'star-filled' | 'store' | 'tablet' | 'transaction-fee-add' | 'unlock' | 'variant' | 'view' | 'wallet' | 'x' | 'x-circle'
```

***

### Examples

#### Display icons from the POS catalog

Display standardized visual symbols using an icon component from the POS icon catalog. This example shows a basic icon with proper sizing and accessibility.

### Display icons from the POS catalog

![Display standardized visual symbols using an icon component from the POS icon catalog. This example shows a basic icon with proper sizing and accessibility.](https://shopify.dev/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/icon-default-oNjH-9QJ.png)

### Display icons from the POS catalog

```html
<s-icon type="arrow-up" />
<s-icon type="arrow-down" />
<s-icon type="arrow-left" />
<s-icon type="arrow-right" />
```

***

### Best practices

* **Choose recognizable icons:** Use universally recognized symbols like `search`, `cart`, or `settings`. Avoid ambiguous icons.
* **Match size to context:** Use smaller sizes for inline text or secondary actions, `base` for standard elements, larger sizes for primary actions.
* **Apply tones for meaning:** Use `critical` for destructive actions, `warning` for cautions, `success` for confirmations, `auto` or `neutral` for general elements.
* **Pair with text for clarity:** Consider adding text labels, especially for complex or uncommon actions.
* **Use color for hierarchy:** Use `subdued` for secondary elements, `base` for standard visibility, `strong` for emphasis.

***

---



<a id="latest-web-components-media-and-visuals-image"></a>


## Image

The image component displays visual content. Use images to showcase products, illustrate concepts, or provide visual context in POS workflows.

Images are display-only components. For interactive functionality, wrap them in [button](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/actions/button) or [clickable](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/web-components/actions/clickable) components.

#### Support Targets (18)

#### Supported targets

* [pos.​cart.​line-item-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/cart-details#cart-details-action-modal-)
* [pos.​customer-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/customer-details#customer-details-action-modal-)
* [pos.​customer-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/customer-details#customer-details-targets)
* [pos.​draft-order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/draft-order-details#draft-order-details-action-modal-)
* [pos.​draft-order-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/draft-order-details#draft-order-details-targets)
* [pos.​exchange.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-exchange#post-exchange-action-modal-)
* [pos.​exchange.​post.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-exchange#post-exchange-targets)
* [pos.​home.​modal.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/home-screen#home-screen-action-modal-)
* [pos.​order-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/order-details#order-details-action-modal-)
* [pos.​order-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/order-details#order-details-targets)
* [pos.​product-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details#product-details-action-modal-)
* [pos.​product-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/product-details#product-details-targets)
* [pos.​purchase.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-purchase#post-purchase-action-modal-)
* [pos.​purchase.​post.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-purchase#post-purchase-targets)
* [pos.​register-details.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/register-details#register-details-action-modal-)
* [pos.​register-details.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/register-details#register-details-block-)
* [pos.​return.​post.​action.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-return#post-return-action-modal-)
* [pos.​return.​post.​block.​render](https://shopify.dev/docs/api/pos-ui-extensions/2026-04/targets/post-return#post-return-targets)

##### Use cases

* **Product images:** Display images in catalogs and order details to help identify items.
* **Marketing content:** Show promotional banners or seasonal content for business information.
* **Visual guidance:** Provide instructions or onboarding content for complex processes.
* **Branding:** Display logos or store imagery to maintain brand consistency.

***

### Properties

Displays an image with sizing and fit controls.

* **alt**

  **string**

  **Default: \`''\`**

  An alternative text description that describe the image for the reader to understand what it is about. It is extremely useful for both users using assistive technology and sighted users. A well written description provides people with visual impairments the ability to participate in consuming non-text content. When a screen readers encounters an `s-image`, the description is read and announced aloud. If an image fails to load, potentially due to a poor connection, the `alt` is displayed on screen instead. This has the benefit of letting a sighted buyer know an image was meant to load here, but as an alternative, they’re still able to consume the text content. Read [considerations when writing alternative text](https://www.shopify.com/ca/blog/image-alt-text#4) to learn more.

* **id**

  **string**

  A unique identifier for the element.

* **inlineSize**

  **'fill' | 'auto'**

  **Default: 'fill'**

  The displayed inline width of the image.

  * `fill`: the image will takes up 100% of the available inline size.
  * `auto`: the image will be displayed at its natural size.

  **Mobile surfaces:** Always wrap your image in a box with a set width and height. ScrollViews on mobile have a dynamic height, which can cause images to appear inconsistently without defined dimensions.

* **objectFit**

  **'contain' | 'cover'**

  **Default: 'contain'**

  Determines how the content of the image is resized to fit its container. The image is positioned in the center of the container.

* **src**

  **string**

  The image source, which should be a remote URL.

  When the image is loading or no `src` is provided, a placeholder will be rendered.

***

### Examples

#### Display an image

Display visual content using an image component with automatic loading optimization and error handling. This example shows a basic image with source URL and alt text for accessibility.

### Display an image

![Display visual content using an image component with automatic loading optimization and error handling. This example shows a basic image with source URL and alt text for accessibility.](https://shopify.dev/assets/assets/images/templated-apis-screenshots/pos-ui-extensions/2025-10/image-default-C9wYXMTU.png)

### Display an image

```html
<s-image src="example.png" inlineSize="auto" />
```

***

### Best practices

* **Choose appropriate sizing:** Use `inlineSize="fill"` for responsive layouts. Use `inlineSize="auto"` to maintain natural dimensions.
* **Select object fit behavior:** Use `objectFit="contain"` to show the complete image. Use `objectFit="cover"` to fill the container, accepting cropping.
* **Implement error handling and loading states:** Image loading and caching behavior depends on the browser and network conditions—implement proper error handling and loading states for better user experience.

***

### Limitations

Large images can impact performance—ensure proper optimization and compression for better loading times.

***

---
