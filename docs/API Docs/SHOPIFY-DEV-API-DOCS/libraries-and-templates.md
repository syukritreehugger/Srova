# Shopify Libraries And Templates Reference (Indonesian / English)

> Referensi lengkap **Libraries And Templates** Shopify API yang disusun ulang dari https://shopify.dev/docs/api/libraries-and-templates.
> Dokumen ini dirancang untuk pengembang berbahasa Indonesia, namun seluruh konten teknis (skema, tipe, nama field, contoh kode) dipertahankan dalam bahasa Inggris asli untuk memastikan akurasi.

| Item | Nilai |
|------|-------|
| Sumber | `https://shopify.dev/docs/api/libraries-and-templates` |
| Total halaman | **1** |
| Tanggal kompilasi | 2026-05-01 |
| Bahasa | Indonesia (intro/ToC) + English (konten teknis) |



## Daftar Isi (Table of Contents)

- [Landing](#landing)


---



<a id="landing"></a>


## Libraries and templates

Use an app template to scaffold a working app in minutes with [Shopify CLI](https://shopify.dev/docs/api/shopify-cli), then choose from Shopify's official API libraries or community-maintained options to suit your language and framework.

***

### App templates

App templates give you a fully working Shopify app out of the box, including OAuth, billing, and webhooks. Use [Shopify CLI](https://shopify.dev/docs/apps/build/cli-for-apps) with the `--flavor` flag to scaffold from a template.

Shopify recommends the React Router template for most new apps. It uses the [`@shopify/shopify-app-react-router`](https://shopify.dev/docs/api/shopify-app-react-router) package and is actively maintained.

| Template | Description |
| - | - |
| [React Router template](https://github.com/Shopify/shopify-app-template-react-router) | Recommended for most apps |
| [Extension-only template](https://github.com/Shopify/shopify-app-template-none) | For apps that only need extensions and no App Home |
| [Express template](https://github.com/Shopify/shopify-app-template-node) | Express, Node.js, and React |
| [Ruby template](https://github.com/Shopify/shopify-app-template-ruby) | Ruby on Rails |
| [PHP template](https://github.com/Shopify/shopify-app-template-php) | PHP with Laravel |

***

### Sample apps

Sample apps demonstrate common patterns and integrations. Use them as a reference or starting point for your own project.

| App | Description |
| - | - |
| [Shopify QR Code app](https://github.com/Shopify/shopify-app-examples/tree/main/qr-code/node) | A full-featured example app with QR code generation, built with Node.js and React Router. |

***

### Official API libraries

Shopify's official libraries handle authentication, versioning, and request management so you can focus on building your app's logic.

| Library | Language | Description |
| - | - | - |
| [shopify-api-ruby](https://github.com/Shopify/shopify-api-ruby) | Ruby | Ruby gem for the Admin API. Handles OAuth, webhooks, REST, and GraphQL. |
| [shopify\_app](https://github.com/Shopify/shopify_app) | Ruby / Rails | Rails engine that adds Shopify app scaffolding, session management, and webhooks to a Rails app. |
| [shopify-api](https://github.com/Shopify/shopify-app-js/tree/main/packages/apps/shopify-api) | Node.js | Library for the Storefront and Admin APIs, OAuth, webhooks, and billing. |
| [admin-api-client](https://github.com/Shopify/shopify-app-js/tree/main/packages/api-clients/admin-api-client) | Node.js | Lightweight library for making Admin API requests directly, without the full app framework. |

***

### Third-party API libraries

These community-maintained libraries cover additional languages and frameworks. Shopify doesn't officially maintain them, but they're widely used by the developer community.

| Library | Language | Description |
| - | - | - |
| [Shopify-api-node](https://github.com/MONEI/Shopify-api-node) | Node.js | Node Shopify connector |
| [shopify-node-api](https://github.com/christophergregory/shopify-node-api) | Node.js | OAuth2 module for Shopify API |
| [php-shopify](https://github.com/phpclassic/php-shopify) | PHP | PHP SDK for Shopify API |
| [shopify-php-sdk](https://github.com/robwittman/shopify-php-sdk) | PHP | PHP SDK for development with the Shopify API |
| [Basic-Shopify-API](https://github.com/gnikyt/Basic-Shopify-API) | PHP | PHP API wrapper using Guzzle for GraphQL |
| [go-shopify](https://github.com/bold-commerce/go-shopify) | Go | Go library for Shopify |
| [ShopifySharp](https://github.com/nozzlegear/ShopifySharp) | .NET | .NET library for Shopify |

***

---
