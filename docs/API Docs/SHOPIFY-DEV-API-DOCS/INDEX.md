# Shopify Dev API Docs — Index

> Indeks dokumentasi Shopify API yang dikompilasi penuh per-API.
> Setiap file berisi landing page + SEMUA sub-page (queries, mutations, objects, components, commands, dst.) verbatim dari `shopify.dev/docs/api/<slug>.md`.
> Tanggal kompilasi: 2026-05-02.
> Total ukuran: ~44 MB / 28 API.

## Sumber

- HTML: `https://shopify.dev/docs/api/<slug>`
- Markdown (yang dipakai): `https://shopify.dev/docs/api/<slug>.md`
- Daftar URL lengkap: `https://shopify.dev/sitemap_standard.xml.gz`

## Catatan split

Empat API dengan jumlah halaman sangat besar di-split per kategori supaya satu file tidak terlalu masif:

- **admin-graphql** (3.866 halaman) → 9 file
- **storefront** (422 halaman) → 4 file
- **customer** (351 halaman) → 4 file
- **liquid** (321 halaman) → 4 file

## Daftar file

| File | Deskripsi | Halaman | Ukuran |
|------|-----------|---------|--------|
| [admin-extensions.md](admin-extensions.md) | UI extensions for the Shopify Admin | 81 | 3.02 MB |
| [admin-graphql.md](admin-graphql.md) | Admin GraphQL — landing + indeks split | — | 1.3 KB |
| [admin-graphql-objects.md](admin-graphql-objects.md) | GraphQL object types | 1036 | 4.16 MB |
| [admin-graphql-enums.md](admin-graphql-enums.md) | GraphQL enum types | 624 | 1.52 MB |
| [admin-graphql-input-objects.md](admin-graphql-input-objects.md) | GraphQL input object types | 601 | 1.02 MB |
| [admin-graphql-payloads.md](admin-graphql-payloads.md) | Mutation payload types | 510 | 945 KB |
| [admin-graphql-mutations.md](admin-graphql-mutations.md) | All mutations | 510 | 5.61 MB |
| [admin-graphql-queries.md](admin-graphql-queries.md) | All queries | 282 | 3.91 MB |
| [admin-graphql-connections.md](admin-graphql-connections.md) | Connection types (relay pagination) | 182 | 944 KB |
| [admin-graphql-other.md](admin-graphql-other.md) | Unions, interfaces, scalars | 121 | 332 KB |
| [admin-rest.md](admin-rest.md) | Admin REST API reference (legacy) | 78 | 4.12 MB |
| [ajax.md](ajax.md) | Lightweight Ajax API for Shopify themes | 7 | 73 KB |
| [app-home.md](app-home.md) | App Home (embedded admin app shell) | 190 | 2.22 MB |
| [checkout-ui-extensions.md](checkout-ui-extensions.md) | Checkout UI Extensions | 119 | 4.80 MB |
| [commerce-components.md](commerce-components.md) | Commerce Components for enterprise | 13 | 142 KB |
| [customer.md](customer.md) | Customer Account API — landing + indeks | — | 63 KB |
| [customer-objects.md](customer-objects.md) | Customer API object types | — | 402 KB |
| [customer-enums.md](customer-enums.md) | Customer API enum types | — | 117 KB |
| [customer-other.md](customer-other.md) | Customer API mutations/queries/inputs | — | 330 KB |
| [customer-account-ui-extensions.md](customer-account-ui-extensions.md) | Customer Account UI Extensions | 123 | 1.95 MB |
| [customer-authentication.md](customer-authentication.md) | Customer authentication (OAuth) | 7 | 54 KB |
| [customer-privacy.md](customer-privacy.md) | Customer Privacy API (consent) | 1 | 28 KB |
| [functions.md](functions.md) | Shopify Functions (custom backend logic) | 11 | 1.99 MB |
| [hydrogen.md](hydrogen.md) | Hydrogen — React framework for custom storefronts | 89 | 748 KB |
| [hydrogen-react.md](hydrogen-react.md) | Hydrogen React component library | 44 | 175 KB |
| [libraries-and-templates.md](libraries-and-templates.md) | Official libraries and starter templates | 1 | 4 KB |
| [liquid.md](liquid.md) | Liquid template language — landing + indeks | — | 9 KB |
| [liquid-objects.md](liquid-objects.md) | Liquid objects | — | 409 KB |
| [liquid-filters.md](liquid-filters.md) | Liquid filters | — | 251 KB |
| [liquid-other.md](liquid-other.md) | Liquid tags + sisanya | — | 93 KB |
| [partner.md](partner.md) | Partner API (GraphQL) | 79 | 165 KB |
| [payments-apps.md](payments-apps.md) | Payments Apps API | 152 | 241 KB |
| [pixels.md](pixels.md) | Web/Customer Pixels for analytics | 2 | 7 KB |
| [pos-ui-extensions.md](pos-ui-extensions.md) | POS UI Extensions | 69 | 728 KB |
| [shop-minis.md](shop-minis.md) | Shop Minis (in-Shop-app mini apps) | 132 | 487 KB |
| [shopify-app-react-router.md](shopify-app-react-router.md) | Shopify App package for React Router | 26 | 247 KB |
| [shopify-cli.md](shopify-cli.md) | Shopify CLI (94 commands; lihat juga ../SHOPIFY-CLI-REFERENCE.md) | 94 | 147 KB |
| [shopifyql.md](shopifyql.md) | ShopifyQL query language | 2 | 42 KB |
| [storefront.md](storefront.md) | Storefront API — landing + indeks | — | 48 KB |
| [storefront-objects.md](storefront-objects.md) | Storefront API object types | — | 484 KB |
| [storefront-enums.md](storefront-enums.md) | Storefront API enum types | — | 152 KB |
| [storefront-other.md](storefront-other.md) | Storefront mutations/queries/inputs | — | 628 KB |
| [storefront-web-components.md](storefront-web-components.md) | Storefront Web Components | 18 | 128 KB |
| [usage.md](usage.md) | API usage, limits, dan versioning | 25 | 247 KB |
| [webhooks.md](webhooks.md) | Webhooks — landing only (event topic list di-render JS; lihat admin-graphql untuk webhookSubscription) | 0 | 6 KB |

## Audit kelengkapan

Semua sub-page dari `sitemap_standard.xml.gz` sudah diserap (zero failures pada run terakhir). Setiap halaman di-render dengan:

- YAML frontmatter di-strip
- Heading di-demote +1 supaya tiap sub-page jadi H2 di file gabungan
- Anchor unik (digabung dengan path segment terakhir saat ada duplicate title)
- Tabel parameter, flag, contoh kode, dan deskripsi semuanya verbatim dari sumber
