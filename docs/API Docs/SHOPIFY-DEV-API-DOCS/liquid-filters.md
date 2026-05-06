# Shopify Liquid – filters Reference (Indonesian / English)

> Referensi lengkap **Liquid – filters** Shopify API yang disusun ulang dari https://shopify.dev/docs/api/liquid.
> Dokumen ini dirancang untuk pengembang berbahasa Indonesia, namun seluruh konten teknis (skema, tipe, nama field, contoh kode) dipertahankan dalam bahasa Inggris asli untuk memastikan akurasi.

| Item | Nilai |
|------|-------|
| Sumber | `https://shopify.dev/docs/api/liquid` |
| Total halaman | **152** |
| Tanggal kompilasi | 2026-05-01 |
| Bahasa | Indonesia (intro/ToC) + English (konten teknis) |



> **Grup:** `filters` (split file)


## Daftar Isi (Table of Contents)

- [filters / abs](#filters-abs)
- [filters / append](#filters-append)
- [filters / article_img_url](#filters-article-img-url)
- [filters / asset_img_url](#filters-asset-img-url)
- [filters / asset_url](#filters-asset-url)
- [filters / at_least](#filters-at-least)
- [filters / at_most](#filters-at-most)
- [filters / avatar](#filters-avatar)
- [filters / base64_decode](#filters-base64-decode)
- [filters / base64_encode](#filters-base64-encode)
- [filters / base64_url_safe_decode](#filters-base64-url-safe-decode)
- [filters / base64_url_safe_encode](#filters-base64-url-safe-encode)
- [filters / blake3](#filters-blake3)
- [filters / brightness_difference](#filters-brightness-difference)
- [filters / camelize](#filters-camelize)
- [filters / capitalize](#filters-capitalize)
- [filters / ceil](#filters-ceil)
- [filters / collection_img_url](#filters-collection-img-url)
- [filters / color_brightness](#filters-color-brightness)
- [filters / color_contrast](#filters-color-contrast)
- [filters / color_darken](#filters-color-darken)
- [filters / color_desaturate](#filters-color-desaturate)
- [filters / color_difference](#filters-color-difference)
- [filters / color_extract](#filters-color-extract)
- [filters / color_lighten](#filters-color-lighten)
- [filters / color_mix](#filters-color-mix)
- [filters / color_modify](#filters-color-modify)
- [filters / color_saturate](#filters-color-saturate)
- [filters / color_to_hex](#filters-color-to-hex)
- [filters / color_to_hsl](#filters-color-to-hsl)
- [filters / color_to_oklch](#filters-color-to-oklch)
- [filters / color_to_rgb](#filters-color-to-rgb)
- [filters / compact](#filters-compact)
- [filters / concat](#filters-concat)
- [filters / currency_selector](#filters-currency-selector)
- [filters / customer_login_link](#filters-customer-login-link)
- [filters / customer_logout_link](#filters-customer-logout-link)
- [filters / customer_register_link](#filters-customer-register-link)
- [filters / date](#filters-date)
- [filters / default](#filters-default)
- [filters / default_errors](#filters-default-errors)
- [filters / default_pagination](#filters-default-pagination)
- [filters / divided_by](#filters-divided-by)
- [filters / downcase](#filters-downcase)
- [filters / escape](#filters-escape)
- [filters / escape_once](#filters-escape-once)
- [filters / external_video_tag](#filters-external-video-tag)
- [filters / external_video_url](#filters-external-video-url)
- [filters / file_img_url](#filters-file-img-url)
- [filters / file_url](#filters-file-url)
- [filters / find](#filters-find)
- [filters / find_index](#filters-find-index)
- [filters / first](#filters-first)
- [filters / floor](#filters-floor)
- [filters / font_face](#filters-font-face)
- [filters / font_modify](#filters-font-modify)
- [filters / font_url](#filters-font-url)
- [filters / format_address](#filters-format-address)
- [filters / global_asset_url](#filters-global-asset-url)
- [filters / handleize](#filters-handleize)
- [filters / has](#filters-has)
- [filters / hex_to_rgba](#filters-hex-to-rgba)
- [filters / highlight](#filters-highlight)
- [filters / highlight_active_tag](#filters-highlight-active-tag)
- [filters / hmac_sha1](#filters-hmac-sha1)
- [filters / hmac_sha256](#filters-hmac-sha256)
- [filters / image_tag](#filters-image-tag)
- [filters / image_url](#filters-image-url)
- [filters / img_tag](#filters-img-tag)
- [filters / img_url](#filters-img-url)
- [filters / inline_asset_content](#filters-inline-asset-content)
- [filters / item_count_for_variant](#filters-item-count-for-variant)
- [filters / join](#filters-join)
- [filters / json](#filters-json)
- [filters / last](#filters-last)
- [filters / line_items_for](#filters-line-items-for)
- [filters / link_to](#filters-link-to)
- [filters / link_to_add_tag](#filters-link-to-add-tag)
- [filters / link_to_remove_tag](#filters-link-to-remove-tag)
- [filters / link_to_tag](#filters-link-to-tag)
- [filters / link_to_type](#filters-link-to-type)
- [filters / link_to_vendor](#filters-link-to-vendor)
- [filters / login_button](#filters-login-button)
- [filters / lstrip](#filters-lstrip)
- [filters / map](#filters-map)
- [filters / md5](#filters-md5)
- [filters / media_tag](#filters-media-tag)
- [filters / metafield_tag](#filters-metafield-tag)
- [filters / metafield_text](#filters-metafield-text)
- [filters / minus](#filters-minus)
- [filters / model_viewer_tag](#filters-model-viewer-tag)
- [filters / modulo](#filters-modulo)
- [filters / money](#filters-money)
- [filters / money_amount](#filters-money-amount)
- [filters / money_with_currency](#filters-money-with-currency)
- [filters / money_without_currency](#filters-money-without-currency)
- [filters / money_without_trailing_zeros](#filters-money-without-trailing-zeros)
- [filters / newline_to_br](#filters-newline-to-br)
- [filters / payment_button](#filters-payment-button)
- [filters / payment_terms](#filters-payment-terms)
- [filters / payment_type_img_url](#filters-payment-type-img-url)
- [filters / payment_type_svg_tag](#filters-payment-type-svg-tag)
- [filters / placeholder_svg_tag](#filters-placeholder-svg-tag)
- [filters / pluralize](#filters-pluralize)
- [filters / plus](#filters-plus)
- [filters / preload_tag](#filters-preload-tag)
- [filters / prepend](#filters-prepend)
- [filters / product_img_url](#filters-product-img-url)
- [filters / reject](#filters-reject)
- [filters / remove](#filters-remove)
- [filters / remove_first](#filters-remove-first)
- [filters / remove_last](#filters-remove-last)
- [filters / replace](#filters-replace)
- [filters / replace_first](#filters-replace-first)
- [filters / replace_last](#filters-replace-last)
- [filters / reverse](#filters-reverse)
- [filters / round](#filters-round)
- [filters / rstrip](#filters-rstrip)
- [filters / script_tag](#filters-script-tag)
- [filters / sha1](#filters-sha1)
- [filters / sha256](#filters-sha256)
- [filters / shopify_asset_url](#filters-shopify-asset-url)
- [filters / size](#filters-size)
- [filters / slice](#filters-slice)
- [filters / sort](#filters-sort)
- [filters / sort_by](#filters-sort-by)
- [filters / sort_natural](#filters-sort-natural)
- [filters / split](#filters-split)
- [filters / strip](#filters-strip)
- [filters / strip_html](#filters-strip-html)
- [filters / strip_newlines](#filters-strip-newlines)
- [filters / structured_data](#filters-structured-data)
- [filters / stylesheet_tag](#filters-stylesheet-tag)
- [filters / sum](#filters-sum)
- [filters / time_tag](#filters-time-tag)
- [filters / times](#filters-times)
- [filters / translate](#filters-translate)
- [filters / truncate](#filters-truncate)
- [filters / truncatewords](#filters-truncatewords)
- [filters / uniq](#filters-uniq)
- [filters / unit_price_with_measurement](#filters-unit-price-with-measurement)
- [filters / upcase](#filters-upcase)
- [filters / url_decode](#filters-url-decode)
- [filters / url_encode](#filters-url-encode)
- [filters / url_escape](#filters-url-escape)
- [filters / url_for_type](#filters-url-for-type)
- [filters / url_for_vendor](#filters-url-for-vendor)
- [filters / url_param_escape](#filters-url-param-escape)
- [filters / video_tag](#filters-video-tag)
- [filters / weight_with_unit](#filters-weight-with-unit)
- [filters / where](#filters-where)
- [filters / within](#filters-within)


---



<a id="filters-abs"></a>


## abs

```oobleck
number | abs
```

returns [number](https://shopify.dev/docs/api/liquid/basics#number)

Returns the absolute value of a number.

###### Code

```liquid
{{ -3 | abs }}
```

###### Output

```html
3
```

---



<a id="filters-append"></a>


## append

```oobleck
string | append: string
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Adds a given string to the end of a string.

###### Code

```liquid
{%-  assign path = product.url -%}

{{ request.origin | append: path }}
```

###### Data

```json
{
  "product": {
    "url": "/products/health-potion"
  },
  "request": {
    "origin": "https://polinas-potent-potions.myshopify.com"
  }
}
```

###### Output

```html
https://polinas-potent-potions.myshopify.com/products/health-potion
```

---



<a id="filters-article-img-url"></a>


## article\_​img\_​url

```oobleck
variable | article_img_url
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Returns the [CDN URL](https://shopify.dev/themes/best-practices/performance/platform#shopify-cdn) for an [article's image](https://shopify.dev/docs/api/liquid/objects/article#article-image).

**Deprecated:**

The `article_img_url` filter has been replaced by [`image_url`](https://shopify.dev/docs/api/liquid/filters/image_url).

###### Code

```liquid
{{ article.image | article_img_url }}
```

###### Data

```json
{
  "article": {
    "image": "articles/beakers-for-science-with-water.jpg"
  }
}
```

###### Output

```html
//polinas-potent-potions.myshopify.com/cdn/shop/articles/beakers-for-science-with-water_small.jpg?v=1654385193
```

#### size

```oobleck
image | article_img_url: string
```

By default, the `article_img_url` filter returns the `small` version of the image (100 x 100 px). However, you can specify a [size](https://shopify.dev/docs/api/liquid/filters/img_url#img_url-size).

###### Code

```liquid
{{ article.image | article_img_url: 'large' }}
```

###### Data

```json
{
  "article": {
    "image": "articles/beakers-for-science-with-water.jpg"
  }
}
```

###### Output

```html
//polinas-potent-potions.myshopify.com/cdn/shop/articles/beakers-for-science-with-water_large.jpg?v=1654385193
```

---



<a id="filters-asset-img-url"></a>


## asset\_​img\_​url

```oobleck
string | asset_img_url
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Returns the [CDN URL](https://shopify.dev/themes/best-practices/performance/platform#shopify-cdn) for an image in the [`assets` directory](https://shopify.dev/themes/architecture#assets) of a theme.

###### Code

```liquid
{{ 'red-and-black-bramble-berries.jpg' | asset_img_url }}
```

###### Output

```html
//polinas-potent-potions.myshopify.com/cdn/shop/t/4/assets/red-and-black-bramble-berries_small.jpg?v=337
```

#### size

```oobleck
image | asset_img_url: string
```

By default, the `asset_img_url` filter returns the `small` version of the image (100 x 100 px). However, you can specify a [size](https://shopify.dev/docs/api/liquid/filters/img_url#img_url-size).

###### Code

```liquid
{{ 'red-and-black-bramble-berries.jpg' | asset_img_url: 'large' }}
```

###### Output

```html
//polinas-potent-potions.myshopify.com/cdn/shop/t/4/assets/red-and-black-bramble-berries_large.jpg?v=337
```

---



<a id="filters-asset-url"></a>


## asset\_​url

```oobleck
string | asset_url
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Returns the [CDN URL](https://shopify.dev/themes/best-practices/performance/platform#shopify-cdn) for a file in the [`assets` directory](https://shopify.dev/themes/architecture#assets) of a theme.

###### Code

```liquid
{{ 'cart.js' | asset_url }}
```

###### Output

```html
//polinas-potent-potions.myshopify.com/cdn/shop/t/4/assets/cart.js?v=83971781268232213281663872410
```

---



<a id="filters-at-least"></a>


## at\_​least

```oobleck
number | at_least
```

returns [number](https://shopify.dev/docs/api/liquid/basics#number)

Limits a number to a minimum value.

###### Code

```liquid
{{ 4 | at_least: 5 }}
{{ 4 | at_least: 3 }}
```

###### Output

```html
5
4
```

---



<a id="filters-at-most"></a>


## at\_​most

```oobleck
number | at_most
```

returns [number](https://shopify.dev/docs/api/liquid/basics#number)

Limits a number to a maximum value.

###### Code

```liquid
{{ 6 | at_most: 5 }}
{{ 4 | at_most: 5 }}
```

###### Output

```html
5
4
```

---



<a id="filters-avatar"></a>


## avatar

```oobleck
customer | avatar
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Generates HTML to render a customer's avatar, if available.

***

**Tip:** Use with the \<a href="/docs/api/liquid/objects/customer#customer-has\_avatar?">\<code>\<span class="PreventFireFoxApplyingGapToWBR">customer.has\<wbr/>\_avatar?\</span>\</code>\</a> method to determine if the customer has an avatar.

***

```liquid
{{ customer | avatar }}
```

```liquid
{{ customer | avatar }}
```

---



<a id="filters-base64-decode"></a>


## base64\_​decode

```oobleck
string | base64_decode
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Decodes a string in [Base64 format](https://developer.mozilla.org/en-US/docs/Glossary/Base64).

###### Code

```liquid
{{ 'b25lIHR3byB0aHJlZQ==' | base64_decode }}
```

###### Output

```html
one two three
```

---



<a id="filters-base64-encode"></a>


## base64\_​encode

```oobleck
string | base64_encode
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Encodes a string to [Base64 format](https://developer.mozilla.org/en-US/docs/Glossary/Base64).

###### Code

```liquid
{{ 'one two three' | base64_encode }}
```

###### Output

```html
b25lIHR3byB0aHJlZQ==
```

---



<a id="filters-base64-url-safe-decode"></a>


## base64\_​url\_​safe\_​decode

```oobleck
string | base64_url_safe_decode
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Decodes a string in URL-safe [Base64 format](https://developer.mozilla.org/en-US/docs/Glossary/Base64).

###### Code

```liquid
{{ 'b25lIHR3byB0aHJlZQ==' | base64_url_safe_decode }}
```

###### Output

```html
one two three
```

---



<a id="filters-base64-url-safe-encode"></a>


## base64\_​url\_​safe\_​encode

```oobleck
string | base64_url_safe_encode
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Encodes a string to URL-safe [Base64 format](https://developer.mozilla.org/en-US/docs/Glossary/Base64).

To produce URL-safe Base64, this filter uses `-` and `_` in place of `+` and `/`.

###### Code

```liquid
{{ 'one two three' | base64_url_safe_encode }}
```

###### Output

```html
b25lIHR3byB0aHJlZQ==
```

---



<a id="filters-blake3"></a>


## blake3

```oobleck
string | blake3
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Converts a string into a Blake3 hash.

###### Code

```liquid
{{ '' | blake3 }}
```

###### Output

```html
af1349b9f5f9a1a6a0404dea36dcc9499bcb25c9adc112b7cc9a93cae41f3262
```

---



<a id="filters-brightness-difference"></a>


## brightness\_​difference

```oobleck
string | brightness_difference: string
```

returns [number](https://shopify.dev/docs/api/liquid/basics#number)

Calculates the [perceived brightness difference](https://www.w3.org/WAI/ER/WD-AERT/#color-contrast) between two colors.

***

**Tip:** For accessibility best practices, it\&#39;s recommended to have a minimum brightness difference of 125.

***

###### Code

```liquid
{{ '#E800B0' | brightness_difference: '#FECEE9' }}
```

###### Output

```html
134
```

---



<a id="filters-camelize"></a>


## camelize

```oobleck
string | camelize
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Converts a string to CamelCase.

###### Code

```liquid
{{ 'variable-name' | camelize }}
```

###### Output

```html
VariableName
```

---



<a id="filters-capitalize"></a>


## capitalize

```oobleck
string | capitalize
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Capitalizes the first word in a string and downcases the remaining characters.

###### Code

```liquid
{{ 'this sentence should start with a capitalized word.' | capitalize }}
```

###### Output

```html
This sentence should start with a capitalized word.
```

---



<a id="filters-ceil"></a>


## ceil

```oobleck
number | ceil
```

returns [number](https://shopify.dev/docs/api/liquid/basics#number)

Rounds a number up to the nearest integer.

###### Code

```liquid
{{ 1.2 | ceil }}
```

###### Output

```html
2
```

---



<a id="filters-collection-img-url"></a>


## collection\_​img\_​url

```oobleck
variable | collection_img_url
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Returns the [CDN URL](https://shopify.dev/themes/best-practices/performance/platform#shopify-cdn) for a [collection's image](https://shopify.dev/docs/api/liquid/objects/collection#collection-image).

**Deprecated:**

The `collection_img_url` filter has been replaced by [`image_url`](https://shopify.dev/docs/api/liquid/filters/image_url).

###### Code

```liquid
{{ collection.image | collection_img_url }}
```

###### Data

```json
{
  "collection": {
    "image": "collections/sale-written-in-lights.jpg"
  }
}
```

###### Output

```html
//polinas-potent-potions.myshopify.com/cdn/shop/collections/sale-written-in-lights.jpg?v=1657654130
```

#### The size parameter

```oobleck
image | collection_img_url: string
```

By default, the `collection_img_url` filter returns the `small` version of the image (100 x 100 px). However, you can specify a [size](https://shopify.dev/docs/api/liquid/filters/img_url#img_url-size).

###### Code

```liquid
{{ collection.image | collection_img_url: 'large' }}
```

###### Data

```json
{
  "collection": {
    "image": "collections/sale-written-in-lights.jpg"
  }
}
```

###### Output

```html
//polinas-potent-potions.myshopify.com/cdn/shop/collections/sale-written-in-lights_large.jpg?v=1657654130
```

---



<a id="filters-color-brightness"></a>


## color\_​brightness

```oobleck
string | color_brightness
```

returns [number](https://shopify.dev/docs/api/liquid/basics#number)

Calculates the [perceived brightness](https://www.w3.org/WAI/ER/WD-AERT/#color-contrast) of a given color.

###### Code

```liquid
{{ '#EA5AB9' | color_brightness }}
```

###### Output

```html
143.89
```

---



<a id="filters-color-contrast"></a>


## color\_​contrast

```oobleck
string | color_contrast: string
```

returns [number](https://shopify.dev/docs/api/liquid/basics#number)

Calculates the contrast ratio between two colors and returns the ratio's numerator. The ratio's denominator, which isn't returned, is always 1. For example, with a contrast ratio of 3.5:1, this filter returns 3.5.

The order in which you specify the colors doesn't matter.

***

**Tip:** For accessibility best practices, the \<a href="https://www\.w3.org/WAI/WCAG21/quickref/?versions=2.0#qr-visual-audio-contrast-contrast">WCAG 2.0 level AA\</a> requires a minimum contrast ratio of 4.5:1 for normal text, and 3:1 for large text. \<a href="https://www\.w3.org/WAI/WCAG21/quickref/?versions=2.0#qr-visual-audio-contrast7">Level AAA\</a> requires a minimum contrast ratio of 7:1 for normal text, and 4.5:1 for large text.

***

###### Code

```liquid
{{ '#E800B0' | color_contrast: '#D9D8FF' }}
```

###### Output

```html
3.0
```

---



<a id="filters-color-darken"></a>


## color\_​darken

```oobleck
string | color_darken: number
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Darkens a given color by a specific percentage. The percentage must be between 0 and 100.

###### Code

```liquid
{{ '#EA5AB9' | color_darken: 30 }}
```

###### Output

```html
#98136b
```

---



<a id="filters-color-desaturate"></a>


## color\_​desaturate

```oobleck
string | color_desaturate: number
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Desaturates a given color by a specific percentage. The percentage must be between 0 and 100.

###### Code

```liquid
{{ '#EA5AB9' | color_desaturate: 30 }}
```

###### Output

```html
#ce76b0
```

---



<a id="filters-color-difference"></a>


## color\_​difference

```oobleck
string | color_difference: string
```

returns [number](https://shopify.dev/docs/api/liquid/basics#number)

Calculates the [color difference](https://www.w3.org/WAI/ER/WD-AERT/#color-contrast) between two colors.

***

**Tip:** For accessibility best practices, it\&#39;s recommended to have a minimum color difference of 500.

***

###### Code

```liquid
{{ '#720955' | color_difference: '#FFF3F9' }}
```

###### Output

```html
539
```

---



<a id="filters-color-extract"></a>


## color\_​extract

```oobleck
string | color_extract: string
```

returns [number](https://shopify.dev/docs/api/liquid/basics#number)

Extracts a specific color component from a given color.

Accepts the following color components:

* `alpha`
* `red`
* `green`
* `blue`
* `hue`
* `saturation`
* `lightness`

###### Code

```liquid
{{ '#EA5AB9' | color_extract: 'red' }}
```

###### Output

```html
234
```

---



<a id="filters-color-lighten"></a>


## color\_​lighten

```oobleck
string | color_lighten: number
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Lightens a given color by a specific percentage. The percentage must be between 0 and 100.

###### Code

```liquid
{{ '#EA5AB9' | color_lighten: 30 }}
```

###### Output

```html
#fbe2f3
```

---



<a id="filters-color-mix"></a>


## color\_​mix

```oobleck
string | color_mix: string, number
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Blends two colors together by a specific percentage factor. The percentage must be between 0 and 100.

***

**Tip:** A percentage factor of 100 returns the color being filtered. A percentage factor of 0 returns the color supplied to the filter.

***

###### Code

```liquid
{{ '#E800B0' | color_mix: '#00936F', 50 }}
```

###### Output

```html
#744a90
```

If one input has an alpha component, but the other does not, an alpha component of 1.0 will be assumed for the input without an alpha component.

###### Code

```liquid
{{ 'rgba(232, 0, 176, 0.75)' | color_mix: '#00936F', 50 }}
```

###### Output

```html
rgba(116, 74, 144, 0.88)
```

---



<a id="filters-color-modify"></a>


## color\_​modify

```oobleck
string | color_modify: string, number
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Modifies a specific color component of a given color by a specific amount.

The following table outlines valid color components, and the value range for their modifications:

| Component | Value range |
| - | - |
| * `red`
* `green`
* `blue` | An integer between 0 and 255 |
| `alpha` | A decimal between 0 and 1 |
| `hue` | An integer between 0 and 360 |
| - `saturation`
- `lightness` | An integer between 0 and 100 |

###### Code

```liquid
{{ '#EA5AB9' | color_modify: 'red', 255 }}
```

###### Output

```html
#ff5ab9
```

The format of the modified color depends on the component being modified. For example, if you modify the `alpha` component of a color in hexadecimal format, then the modified color will be in `rgba()` format.

###### Code

```liquid
{{ '#EA5AB9' | color_modify: 'alpha', 0.85 }}
```

###### Output

```html
rgba(234, 90, 185, 0.85)
```

---



<a id="filters-color-saturate"></a>


## color\_​saturate

```oobleck
string | color_saturate: number
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Saturates a given color by a specific percentage. The percentage must be between 0 and 100.

###### Code

```liquid
{{ '#EA5AB9' | color_saturate: 30 }}
```

###### Output

```html
#ff45c0
```

---



<a id="filters-color-to-hex"></a>


## color\_​to\_​hex

```oobleck
string | color_to_hex
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Converts a CSS color string to hexadecimal format (`hex6`).

Because colors are converted to `hex6` format, if a color with an alpha component is provided, then the alpha component is excluded from the output.

###### Code

```liquid
{{ 'rgb(234, 90, 185)' | color_to_hex }}
```

###### Output

```html
#ea5ab9
```

---



<a id="filters-color-to-hsl"></a>


## color\_​to\_​hsl

```oobleck
string | color_to_hsl
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Converts a CSS color string to `HSL` format.

If a color with an alpha component is provided, the color is converted to `HSLA` format.

###### Code

```liquid
{{ '#EA5AB9' | color_to_hsl }}
```

###### Output

```html
hsl(320, 77%, 64%)
```

---



<a id="filters-color-to-oklch"></a>


## color\_​to\_​oklch

```oobleck
string | color_to_oklch
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Converts a CSS color string to `OKLCH` format.

###### Code

```liquid
{{ '#EA5AB9' | color_to_oklch }}
```

###### Output

```html
oklch(68% 0.2 343 / 1.0)
```

---



<a id="filters-color-to-rgb"></a>


## color\_​to\_​rgb

```oobleck
string | color_to_rgb
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Converts a CSS color string to `RGB` format.

If a color with an alpha component is provided, then the color is converted to `RGBA` format.

###### Code

```liquid
{{ '#EA5AB9' | color_to_rgb }}
```

###### Output

```html
rgb(234, 90, 185)
```

---



<a id="filters-compact"></a>


## compact

```oobleck
array | compact
```

Removes any `nil` items from an array.

###### Code

```liquid
{%- assign original_prices = collection.products | map: 'compare_at_price' -%}

Original prices:

{% for price in original_prices -%}
  - {{ price }}
{%- endfor %}

{%- assign compacted_original_prices = original_prices | compact -%}

Original prices - compacted:

{% for price in compacted_original_prices -%}
  - {{ price }}
{%- endfor %}
```

###### Data

```json
{
  "collection": {
    "products": [
      {
        "compare_at_price": null
      },
      {
        "compare_at_price": null
      },
      {
        "compare_at_price": null
      },
      {
        "compare_at_price": null
      },
      {
        "compare_at_price": "1000000.59"
      },
      {
        "compare_at_price": null
      },
      {
        "compare_at_price": null
      },
      {
        "compare_at_price": null
      },
      {
        "compare_at_price": "10.00"
      },
      {
        "compare_at_price": null
      },
      {
        "compare_at_price": "25.00"
      },
      {
        "compare_at_price": "400.00"
      },
      {
        "compare_at_price": null
      },
      {
        "compare_at_price": null
      },
      {
        "compare_at_price": null
      },
      {
        "compare_at_price": null
      },
      {
        "compare_at_price": null
      },
      {
        "compare_at_price": null
      },
      {
        "compare_at_price": null
      }
    ]
  }
}
```

###### Output

```html
Original prices:

- 
- 
- 
- 
- 100000059
- 
- 
- 
- 1000
- 
- 2500
- 40000
- 
- 
- 
- 
- 
- 
- 

Original prices - compacted:

- 100000059
- 1000
- 2500
- 40000
```

---



<a id="filters-concat"></a>


## concat

```oobleck
array | concat: array
```

Concatenates (combines) two arrays.

***

**Note:** The \<code>concat\</code> filter won\&#39;t filter out duplicates. If you want to remove duplicates, then you need to use the \<a href="/docs/api/liquid/filters/uniq">\<code>uniq\</code> filter\</a>.

***

###### Code

```liquid
{%- assign types_and_vendors = collection.all_types | concat: collection.all_vendors -%}

Types and vendors:

{% for item in types_and_vendors -%}
  {%- if item != blank -%}
    - {{ item }}
  {%- endif -%}
{%- endfor %}
```

###### Data

```json
{
  "collection": {
    "all_types": [
      "",
      "Animals & Pet Supplies",
      "Baking Flavors & Extracts",
      "Container",
      "Cooking & Baking Ingredients",
      "Dried Flowers",
      "Fruits & Vegetables",
      "Gift Cards",
      "Health",
      "Health & Beauty",
      "Invisibility",
      "Love",
      "Music & Sound Recordings",
      "Seasonings & Spices",
      "Water"
    ],
    "all_vendors": [
      "Clover's Apothecary",
      "Polina's Potent Potions",
      "Ted's Apothecary Supply"
    ]
  }
}
```

###### Output

```html
Types and vendors:

- Animals & Pet Supplies
- Baking Flavors & Extracts
- Container
- Cooking & Baking Ingredients
- Dried Flowers
- Fruits & Vegetables
- Gift Cards
- Health
- Health & Beauty
- Invisibility
- Love
- Music & Sound Recordings
- Seasonings & Spices
- Water
- Clover's Apothecary
- Polina's Potent Potions
- Ted's Apothecary Supply
```

---



<a id="filters-currency-selector"></a>


## currency\_​selector

```oobleck
form | currency_selector
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Generates an HTML `<select>` element with an option for each currency available on the store.

The `currency_selector` filter must be applied to the [`form` object](https://shopify.dev/docs/api/liquid/objects/form) within a [currency form](https://shopify.dev/docs/api/liquid/tags/form#form-currency).

**Deprecated:**

Deprecated without a direct replacement because the [currency form](https://shopify.dev/docs/api/liquid/tags/form#form-currency) has also been deprecated. The currency form was replaced by the [localization form](https://shopify.dev/docs/api/liquid/tags/form#form-localization). Refer to this guide which explains [how to create a country selector](https://shopify.dev/docs/themes/markets/multiple-currencies-languages#implementing-country-and-language-selectors) using the localization form.

###### Code

```liquid
{% form 'currency' %}
  {{ form | currency_selector }}
{% endform %}
```

###### Output

```html
<form method="post" action="/cart/update" id="currency_form" accept-charset="UTF-8" class="shopify-currency-form" enctype="multipart/form-data"><input type="hidden" name="form_type" value="currency" /><input type="hidden" name="utf8" value="✓" /><input type="hidden" name="return_to" value="/services/liquid_rendering/resource" />
  <select name="currency"><option value="AED">AED د.إ</option><option value="AFN">AFN ؋</option><option value="AUD">AUD $</option><option value="CAD" selected="selected">CAD $</option><option value="CHF">CHF CHF</option><option value="CZK">CZK Kč</option><option value="DKK">DKK kr.</option><option value="EUR">EUR €</option><option value="GBP">GBP £</option><option value="HKD">HKD $</option><option value="ILS">ILS ₪</option><option value="JPY">JPY ¥</option><option value="KRW">KRW ₩</option><option value="MYR">MYR RM</option><option value="NZD">NZD $</option><option value="PLN">PLN zł</option><option value="SEK">SEK kr</option><option value="SGD">SGD $</option><option value="USD">USD $</option></select>
</form>
```

#### class

```oobleck
form | currency_selector: class: string
```

Specify the `class` attribute of the `<select>` element.

###### Code

```liquid
{% form 'currency' %}
  {{ form | currency_selector: class: 'custom-class' }}
{% endform %}
```

###### Output

```html
<form method="post" action="/cart/update" id="currency_form" accept-charset="UTF-8" class="shopify-currency-form" enctype="multipart/form-data"><input type="hidden" name="form_type" value="currency" /><input type="hidden" name="utf8" value="✓" /><input type="hidden" name="return_to" value="/services/liquid_rendering/resource" />
  <select class="custom-class" name="currency"><option value="AED">AED د.إ</option><option value="AFN">AFN ؋</option><option value="AUD">AUD $</option><option value="CAD" selected="selected">CAD $</option><option value="CHF">CHF CHF</option><option value="CZK">CZK Kč</option><option value="DKK">DKK kr.</option><option value="EUR">EUR €</option><option value="GBP">GBP £</option><option value="HKD">HKD $</option><option value="ILS">ILS ₪</option><option value="JPY">JPY ¥</option><option value="KRW">KRW ₩</option><option value="MYR">MYR RM</option><option value="NZD">NZD $</option><option value="PLN">PLN zł</option><option value="SEK">SEK kr</option><option value="SGD">SGD $</option><option value="USD">USD $</option></select>
</form>
```

#### id

```oobleck
form | currency_selector: id: string
```

Specify the `id` attribute of the `<select>` element.

###### Code

```liquid
{% form 'currency' %}
  {{ form | currency_selector: id: 'custom-id' }}
{% endform %}
```

###### Output

```html
<form method="post" action="/cart/update" id="currency_form" accept-charset="UTF-8" class="shopify-currency-form" enctype="multipart/form-data"><input type="hidden" name="form_type" value="currency" /><input type="hidden" name="utf8" value="✓" /><input type="hidden" name="return_to" value="/services/liquid_rendering/resource" />
  <select id="custom-id" name="currency"><option value="AED">AED د.إ</option><option value="AFN">AFN ؋</option><option value="AUD">AUD $</option><option value="CAD" selected="selected">CAD $</option><option value="CHF">CHF CHF</option><option value="CZK">CZK Kč</option><option value="DKK">DKK kr.</option><option value="EUR">EUR €</option><option value="GBP">GBP £</option><option value="HKD">HKD $</option><option value="ILS">ILS ₪</option><option value="JPY">JPY ¥</option><option value="KRW">KRW ₩</option><option value="MYR">MYR RM</option><option value="NZD">NZD $</option><option value="PLN">PLN zł</option><option value="SEK">SEK kr</option><option value="SGD">SGD $</option><option value="USD">USD $</option></select>
</form>
```

---



<a id="filters-customer-login-link"></a>


## customer\_​login\_​link

```oobleck
string | customer_login_link
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Generates an HTML link to the customer login page.

###### Code

```liquid
{{ 'Log in' | customer_login_link }}
```

###### Output

```html
<a href="/account/login" id="customer_login_link">Log in</a>
```

---



<a id="filters-customer-logout-link"></a>


## customer\_​logout\_​link

```oobleck
string | customer_logout_link
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Generates an HTML link to log the customer out of their account and redirect to the homepage.

###### Code

```liquid
{{ 'Log out' | customer_logout_link }}
```

###### Output

```html
<a href="/account/logout" id="customer_logout_link">Log out</a>
```

---



<a id="filters-customer-register-link"></a>


## customer\_​register\_​link

```oobleck
string | customer_register_link
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Generates an HTML link to the customer registration page.

###### Code

```liquid
{{ 'Create an account' | customer_register_link }}
```

###### Output

```html
<a href="/account/register" id="customer_register_link">Create an account</a>
```

---



<a id="filters-date"></a>


## date

```oobleck
string | date: string
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Converts a timestamp into another date format.

The `date` filter accepts the same parameters as Ruby's strftime method for formatting the date. For a list of shorthand formats, refer to the [Ruby documentation](https://ruby-doc.org/core-3.1.1/Time.html#method-i-strftime) or [strftime reference and sandbox](http://www.strfti.me/).

###### Code

```liquid
{{ article.created_at | date: '%B %d, %Y' }}
```

###### Data

```json
{
  "article": {
    "created_at": "2022-04-14 16:56:02 -0400"
  }
}
```

###### Output

```html
April 14, 2022
```

#### The current date

You can apply the `date` filter to the keywords `'now'` and `'today'` to output the current timestamp.

***

**Note:** The timestamp will reflect the time that the Liquid was last rendered. Because of this, the timestamp might not be updated for every page view, depending on the context and caching.

***

###### Code

```liquid
{{ 'now' | date: '%B %d, %Y' }}
```

#### format

```oobleck
string | date: format: string
```

Specify a locale-aware date format. You can use the following formats:

* `abbreviated_date`
* `basic`
* `date`
* `date_at_time`
* `default`
* `on_date`
* `short` (deprecated)
* `long` (deprecated)

***

**Note:** You can also \<a href="/docs/api/liquid/filters/date-setting-format-options-in-locale-files">define custom formats\</a> in your theme\&#39;s locale files.

***

###### Code

```liquid
{{ article.created_at | date: format: 'abbreviated_date' }}
```

###### Data

```json
{
  "article": {
    "created_at": "2022-04-14 16:56:02 -0400"
  }
}
```

###### Output

```html
Apr 14, 2022
```

#### Setting format options in locale files

You can define custom date formats in your [theme's storefront locale files](https://shopify.dev/themes/architecture/locales/storefront-locale-files). These custom formats should be included in a `date_formats` category:

```json
"date_formats": {
  "month_day_year": "%B %d, %Y"
}
```

```json
"date_formats": {
  "month_day_year": "%B %d, %Y"
}
```

###### Code

```liquid
{{ article.created_at | date: format: 'month_day_year' }}
```

###### Data

```json
{
  "article": {
    "created_at": "2022-04-14 16:56:02 -0400"
  }
}
```

###### Output

```html
April 14, 2022
```

---



<a id="filters-default"></a>


## default

```oobleck
variable | default: variable
```

Sets a default value for any variable whose value is one of the following:

* [`empty`](https://shopify.dev/docs/api/liquid/basics#empty)
* [`false`](https://shopify.dev/docs/api/liquid/basics#truthy-and-falsy)
* [`nil`](https://shopify.dev/docs/api/liquid/basics#nil)

###### Code

```liquid
{{ product.selected_variant.url | default: product.url }}
```

###### Data

```json
{
  "product": {
    "selected_variant": null,
    "url": "/products/health-potion"
  }
}
```

###### Output

```html
/products/health-potion
```

#### allow\_false

```oobleck
variable | default: variable, allow_false: boolean
```

By default, the `default` filter's value will be used in place of `false` values. You can use the `allow_false` parameter to allow variables to return `false` instead of the default value.

###### Code

```liquid
{%- assign display_price = false -%}

{{ display_price | default: true, allow_false: true }}
```

###### Output

```html
false
```

---



<a id="filters-default-errors"></a>


## default\_​errors

```oobleck
string | default_errors
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Generates default error messages for each possible value of [`form.errors`](https://shopify.dev/docs/themes/liquid/reference/objects/form#form-errors).

---



<a id="filters-default-pagination"></a>


## default\_​pagination

```oobleck
paginate | default_pagination
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Generates HTML for a set of links for paginated results. Must be applied to the [`paginate` object](https://shopify.dev/docs/api/liquid/objects/paginate).

###### Code

```liquid
{% paginate collection.products by 2 %}
  {% for product in collection.products %}
    {{- product.title }}
  {% endfor %}

  {{- paginate | default_pagination -}}
{% endpaginate %}
```

###### Data

```json
{
  "collection": {
    "products": [
      {
        "title": "Draught of Immortality"
      },
      {
        "title": "Glacier ice"
      }
    ],
    "products_count": 4
  }
}
```

###### Output

```html
Draught of Immortality
  
Glacier ice
  
<span class="page current">1</span> <span class="page"><a href="/services/liquid_rendering/resource?page=2" title="">2</a></span> <span class="next"><a href="/services/liquid_rendering/resource?page=2" title="">Next &raquo;</a></span>
```

#### previous

```oobleck
paginate | default_pagination: previous: string
```

Specify the text for the previous page link.

###### Code

```liquid
{% paginate collection.products by 2 %}
  {% for product in collection.products %}
    {{- product.title }}
  {% endfor %}

  {{- paginate | default_pagination: previous: 'Previous' -}}
{% endpaginate %}
```

###### Data

```json
{
  "collection": {
    "products": [
      {
        "title": "Draught of Immortality"
      },
      {
        "title": "Glacier ice"
      }
    ],
    "products_count": 4
  }
}
```

###### Output

```html
Draught of Immortality
  
Glacier ice
  
<span class="page current">1</span> <span class="page"><a href="/services/liquid_rendering/resource?page=2" title="">2</a></span> <span class="next"><a href="/services/liquid_rendering/resource?page=2" title="">Next &raquo;</a></span>
```

#### next

```oobleck
paginate | default_pagination: next: string
```

Specify the text for the next page link.

###### Code

```liquid
{% paginate collection.products by 2 %}
  {% for product in collection.products %}
    {{- product.title }}
  {% endfor %}

  {{- paginate | default_pagination: next: 'Next' -}}
{% endpaginate %}
```

###### Data

```json
{
  "collection": {
    "products": [
      {
        "title": "Draught of Immortality"
      },
      {
        "title": "Glacier ice"
      }
    ],
    "products_count": 4
  }
}
```

###### Output

```html
Draught of Immortality
  
Glacier ice
  
<span class="page current">1</span> <span class="page"><a href="/services/liquid_rendering/resource?page=2" title="">2</a></span> <span class="next"><a href="/services/liquid_rendering/resource?page=2" title="">Next</a></span>
```

#### anchor

```oobleck
paginate | default_pagination: anchor: string
```

Specify the anchor to add to the pagination links.

###### Code

```liquid
{% paginate collection.products by 2 %}
  {% for product in collection.products %}
    {{- product.title }}
  {% endfor %}

  <div id="pagination">
    {{- paginate | default_pagination: anchor: 'pagination' -}}
  </div>
{% endpaginate %}
```

###### Data

```json
{
  "collection": {
    "products": [
      {
        "title": "Draught of Immortality"
      },
      {
        "title": "Glacier ice"
      }
    ],
    "products_count": 4
  }
}
```

###### Output

```html
Draught of Immortality
  
Glacier ice
  

  <div id="pagination"><span class="page current">1</span> <span class="page"><a href="/services/liquid_rendering/resource?page=2#pagination" title="">2</a></span> <span class="next"><a href="/services/liquid_rendering/resource?page=2#pagination" title="">Next &raquo;</a></span></div>
```

---



<a id="filters-divided-by"></a>


## divided\_​by

```oobleck
number | divided_by: number
```

returns [number](https://shopify.dev/docs/api/liquid/basics#number)

Divides a number by a given number. The `divided_by` filter produces a result of the same type as the divisor. This means if you divide by an integer, the result will be an integer, and if you divide by a float, the result will be a float.

###### Code

```liquid
{{ 4 | divided_by: 2 }}

# divisor is an integer
{{ 20 | divided_by: 7 }}

# divisor is a float 
{{ 20 | divided_by: 7.0 }}
```

###### Output

```html
2

# divisor is an integer
2

# divisor is a float 
2.857142857142857
```

---



<a id="filters-downcase"></a>


## downcase

```oobleck
string | downcase
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Converts a string to all lowercase characters.

###### Code

```liquid
{{ product.title | downcase }}
```

###### Data

```json
{
  "product": {
    "title": "Health potion"
  }
}
```

###### Output

```html
health potion
```

---



<a id="filters-escape"></a>


## escape

```oobleck
string | escape
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Escapes special characters in HTML, such as `<>`, `'`, and `&`, and converts characters into escape sequences. The filter doesn't effect characters within the string that don’t have a corresponding escape sequence.".

###### Code

```liquid
{{ '<p>Text to be escaped.</p>' | escape }}
```

###### Output

```html
&lt;p&gt;Text to be escaped.&lt;/p&gt;
```

---



<a id="filters-escape-once"></a>


## escape\_​once

```oobleck
string | escape_once
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Escapes a string without changing characters that have already been escaped.

###### Code

```liquid
# applying the escape filter to already escaped text escapes characters in HTML entities:

{{ "&lt;p&gt;Text to be escaped.&lt;/p&gt;" | escape }}

# applying the escape_once filter to already escaped text skips characters in HTML entities:

{{ "&lt;p&gt;Text to be escaped.&lt;/p&gt;" | escape_once }}

# use escape_once to escape strings where a combination of HTML entities and non-escaped characters might be present:

{{ "&lt;p&gt;Text to be escaped.&lt;/p&gt; & some additional text" | escape_once }}
```

---



<a id="filters-external-video-tag"></a>


## external\_​video\_​tag

```oobleck
variable | external_video_tag
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Generates an HTML `<iframe>` tag containing the player for a given external video. The input for the `external_video_tag` filter can be either a [`media` object](https://shopify.dev/docs/api/liquid/objects/media) or [`external_video_url`](https://shopify.dev/docs/api/liquid/filters/external_video_url).

If [alt text is set on the video](https://help.shopify.com/en/manual/products/product-media/add-alt-text), then it's included in the `title` attribute of the `<iframe>`. If no alt text is set, then the `title` attribute is set to the product title.

###### Code

```liquid
{% for media in product.media %}
  {% if media.media_type == 'external_video' %}
    {% if media.host == 'youtube' %}
      {{ media | external_video_url: color: 'white' | external_video_tag }}
    {% elsif media.host == 'vimeo' %}
      {{ media | external_video_url: loop: '1', muted: '1' | external_video_tag }}
    {% endif %}
  {% endif %}
{% endfor %}
```

###### Data

```json
{
  "product": {
    "media": [
      {
        "host": "youtube",
        "media_type": "external_video"
      },
      {
        "host": null,
        "media_type": "video"
      }
    ]
  }
}
```

###### Output

```html
<iframe frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen" src="https://www.youtube.com/embed/vj01PAffOac?color=white&amp;controls=1&amp;enablejsapi=1&amp;modestbranding=1&amp;origin=https%3A%2F%2Fpolinas-potent-potions.myshopify.com&amp;playsinline=1&amp;rel=0" title="Potion beats"></iframe>
```

#### HTML attributes

```oobleck
variable | external_video_tag: attribute: string
```

You can specify [HTML attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#attributes) by adding a parameter that matches the attribute name, and the desired value.

###### Code

```liquid
{% for media in product.media %}
  {% if media.media_type == 'external_video' %}
    {% if media.host == 'youtube' %}
      {{ media | external_video_url: color: 'white' | external_video_tag: class:'youtube-video' }}
    {% endif %}
  {% endif %}
{% endfor %}
```

###### Data

```json
{
  "product": {
    "media": [
      {
        "host": "youtube",
        "media_type": "external_video"
      },
      {
        "host": null,
        "media_type": "video"
      }
    ]
  }
}
```

###### Output

```html
<iframe frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen" class="youtube-video" src="https://www.youtube.com/embed/vj01PAffOac?color=white&amp;controls=1&amp;enablejsapi=1&amp;modestbranding=1&amp;origin=https%3A%2F%2Fpolinas-potent-potions.myshopify.com&amp;playsinline=1&amp;rel=0" title="Potion beats"></iframe>
```

---



<a id="filters-external-video-url"></a>


## external\_​video\_​url

```oobleck
media | external_video_url: attribute: string
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Returns the URL for a given external video. Use this filter to specify parameters for the external video player generated by the [`external_video_tag` filter](https://shopify.dev/docs/api/liquid/filters/external_video_tag).

You can specify [YouTube](https://developers.google.com/youtube/player_parameters#Parameters) and [Vimeo](https://vimeo.zendesk.com/hc/en-us/articles/360001494447-Using-Player-Parameters) video parameters by adding a parameter that matches the parameter name, and the desired value.

###### Code

```liquid
{% for media in product.media %}
  {% if media.media_type == 'external_video' %}
    {% if media.host == 'youtube' %}
      {{ media | external_video_url: color: 'white' | external_video_tag }}
    {% elsif media.host == 'vimeo' %}
      {{ media | external_video_url: loop: '1', muted: '1' | external_video_tag }}
    {% endif %}
  {% endif %}
{% endfor %}
```

###### Data

```json
{
  "product": {
    "media": [
      {
        "host": "youtube",
        "media_type": "external_video"
      },
      {
        "host": null,
        "media_type": "video"
      }
    ]
  }
}
```

###### Output

```html
<iframe frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen" src="https://www.youtube.com/embed/vj01PAffOac?color=white&amp;controls=1&amp;enablejsapi=1&amp;modestbranding=1&amp;origin=https%3A%2F%2Fpolinas-potent-potions.myshopify.com&amp;playsinline=1&amp;rel=0" title="Potion beats"></iframe>
```

---



<a id="filters-file-img-url"></a>


## file\_​img\_​url

```oobleck
string | file_img_url
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Returns the [CDN URL](https://shopify.dev/themes/best-practices/performance/platform#shopify-cdn) for an image from the [Files](https://www.shopify.com/admin/settings/files) page of the Shopify admin.

###### Code

```liquid
{{ 'potions-header.png' | file_img_url }}
```

###### Output

```html
//polinas-potent-potions.myshopify.com/cdn/shop/files/potions-header_small.png?v=4246568442683817558
```

#### The size parameter

```oobleck
image | file_img_url: string
```

By default, the `file_img_url` filter returns the `small` version of the image (100 x 100 px). However, you can specify a [size](https://shopify.dev/docs/api/liquid/filters/img_url#img_url-size).

###### Code

```liquid
{{ 'potions-header.png' | file_img_url: 'large' }}
```

###### Output

```html
//polinas-potent-potions.myshopify.com/cdn/shop/files/potions-header_large.png?v=4246568442683817558
```

---



<a id="filters-file-url"></a>


## file\_​url

```oobleck
string | file_url
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Returns the [CDN URL](https://shopify.dev/themes/best-practices/performance/platform#shopify-cdn) for a file from the [Files](https://www.shopify.com/admin/settings/files) page of the Shopify admin.

###### Code

```liquid
{{ 'disclaimer.pdf' | file_url }}
```

###### Output

```html
//polinas-potent-potions.myshopify.com/cdn/shop/files/disclaimer.pdf?v=9043651738044769859
```

---



<a id="filters-find"></a>


## find

```oobleck
array | find: string, string
```

Returns the first item in an array with a specific property value.

This requires you to provide both the property name and the associated value.

###### Code

```liquid
{% assign product = collection.products | find: 'vendor', "Polina's Potent Potions" %}

{{ product.title }}
```

###### Data

```json
{
  "collection": {
    "products": [
      {
        "title": "Blue Mountain Flower",
        "vendor": "Polina's Potent Potions"
      },
      {
        "title": "Charcoal",
        "vendor": "Ted's Apothecary Supply"
      },
      {
        "title": "Crocodile tears",
        "vendor": "Polina's Potent Potions"
      },
      {
        "title": "Dandelion milk",
        "vendor": "Clover's Apothecary"
      },
      {
        "title": "Draught of Immortality",
        "vendor": "Polina's Potent Potions"
      },
      {
        "title": "Dried chamomile",
        "vendor": "Clover's Apothecary"
      },
      {
        "title": "Forest mushroom",
        "vendor": "Clover's Apothecary"
      },
      {
        "title": "Gift Card",
        "vendor": "Polina's Potent Potions"
      },
      {
        "title": "Glacier ice",
        "vendor": "Ted's Apothecary Supply"
      },
      {
        "title": "Ground mandrake root",
        "vendor": "Clover's Apothecary"
      },
      {
        "title": "Health potion",
        "vendor": "Polina's Potent Potions"
      },
      {
        "title": "Invisibility potion",
        "vendor": "Polina's Potent Potions"
      },
      {
        "title": "Komodo dragon scale",
        "vendor": "Ted's Apothecary Supply"
      },
      {
        "title": "Love Potion",
        "vendor": "Polina's Potent Potions"
      },
      {
        "title": "Mana potion",
        "vendor": "Polina's Potent Potions"
      },
      {
        "title": "Potion beats",
        "vendor": "Polina's Potent Potions"
      },
      {
        "title": "Potion bottle",
        "vendor": "Polina's Potent Potions"
      },
      {
        "title": "Viper venom",
        "vendor": "Ted's Apothecary Supply"
      },
      {
        "title": "Whole bloodroot",
        "vendor": "Clover's Apothecary"
      }
    ]
  }
}
```

###### Output

```html
Blue Mountain Flower
```

#### Returns `nil` when no items match the specified property value.

###### Code

```liquid
{% assign product = collection.products | find: 'vendor', "Polina's Potions" %}

{{ product.title | default: "No product found" }}
```

###### Data

```json
{
  "collection": {
    "products": [
      {
        "vendor": "Polina's Potent Potions"
      },
      {
        "vendor": "Ted's Apothecary Supply"
      },
      {
        "vendor": "Polina's Potent Potions"
      },
      {
        "vendor": "Clover's Apothecary"
      },
      {
        "vendor": "Polina's Potent Potions"
      },
      {
        "vendor": "Clover's Apothecary"
      },
      {
        "vendor": "Clover's Apothecary"
      },
      {
        "vendor": "Polina's Potent Potions"
      },
      {
        "vendor": "Ted's Apothecary Supply"
      },
      {
        "vendor": "Clover's Apothecary"
      },
      {
        "vendor": "Polina's Potent Potions"
      },
      {
        "vendor": "Polina's Potent Potions"
      },
      {
        "vendor": "Ted's Apothecary Supply"
      },
      {
        "vendor": "Polina's Potent Potions"
      },
      {
        "vendor": "Polina's Potent Potions"
      },
      {
        "vendor": "Polina's Potent Potions"
      },
      {
        "vendor": "Polina's Potent Potions"
      },
      {
        "vendor": "Ted's Apothecary Supply"
      },
      {
        "vendor": "Clover's Apothecary"
      }
    ]
  }
}
```

###### Output

```html
No product found
```

---



<a id="filters-find-index"></a>


## find\_​index

```oobleck
array | find_index: string, string
```

returns [number](https://shopify.dev/docs/api/liquid/basics#number)

Returns the index of the first item in an array with a specific property value.

This requires you to provide both the property name and the associated value.

###### Code

```liquid
{% assign index = collection.products | find_index: 'vendor', "Polina's Potent Potions" %}

{{ index }}
```

###### Data

```json
{
  "collection": {
    "products": [
      {
        "vendor": "Polina's Potent Potions"
      },
      {
        "vendor": "Ted's Apothecary Supply"
      },
      {
        "vendor": "Polina's Potent Potions"
      },
      {
        "vendor": "Clover's Apothecary"
      },
      {
        "vendor": "Polina's Potent Potions"
      },
      {
        "vendor": "Clover's Apothecary"
      },
      {
        "vendor": "Clover's Apothecary"
      },
      {
        "vendor": "Polina's Potent Potions"
      },
      {
        "vendor": "Ted's Apothecary Supply"
      },
      {
        "vendor": "Clover's Apothecary"
      },
      {
        "vendor": "Polina's Potent Potions"
      },
      {
        "vendor": "Polina's Potent Potions"
      },
      {
        "vendor": "Ted's Apothecary Supply"
      },
      {
        "vendor": "Polina's Potent Potions"
      },
      {
        "vendor": "Polina's Potent Potions"
      },
      {
        "vendor": "Polina's Potent Potions"
      },
      {
        "vendor": "Polina's Potent Potions"
      },
      {
        "vendor": "Ted's Apothecary Supply"
      },
      {
        "vendor": "Clover's Apothecary"
      }
    ]
  }
}
```

###### Output

```html
0
```

#### Returns `nil` when no items match the specified property value.

###### Code

```liquid
{% assign index = collection.products | find_index: 'vendor', "Polina's Potions" %}

{{ index | default: "No index found" }}
```

###### Data

```json
{
  "collection": {
    "products": [
      {
        "vendor": "Polina's Potent Potions"
      },
      {
        "vendor": "Ted's Apothecary Supply"
      },
      {
        "vendor": "Polina's Potent Potions"
      },
      {
        "vendor": "Clover's Apothecary"
      },
      {
        "vendor": "Polina's Potent Potions"
      },
      {
        "vendor": "Clover's Apothecary"
      },
      {
        "vendor": "Clover's Apothecary"
      },
      {
        "vendor": "Polina's Potent Potions"
      },
      {
        "vendor": "Ted's Apothecary Supply"
      },
      {
        "vendor": "Clover's Apothecary"
      },
      {
        "vendor": "Polina's Potent Potions"
      },
      {
        "vendor": "Polina's Potent Potions"
      },
      {
        "vendor": "Ted's Apothecary Supply"
      },
      {
        "vendor": "Polina's Potent Potions"
      },
      {
        "vendor": "Polina's Potent Potions"
      },
      {
        "vendor": "Polina's Potent Potions"
      },
      {
        "vendor": "Polina's Potent Potions"
      },
      {
        "vendor": "Ted's Apothecary Supply"
      },
      {
        "vendor": "Clover's Apothecary"
      }
    ]
  }
}
```

###### Output

```html
No index found
```

---



<a id="filters-first"></a>


## first

```oobleck
array | first
```

Returns the first item in an array.

###### Code

```liquid
{%- assign first_product = collection.products | first -%}

{{ first_product.title }}
```

###### Data

```json
{
  "collection": {
    "products": [
      {
        "title": "Blue Mountain Flower"
      },
      {
        "title": "Charcoal"
      },
      {
        "title": "Crocodile tears"
      },
      {
        "title": "Dandelion milk"
      },
      {
        "title": "Draught of Immortality"
      },
      {
        "title": "Dried chamomile"
      },
      {
        "title": "Forest mushroom"
      },
      {
        "title": "Gift Card"
      },
      {
        "title": "Glacier ice"
      },
      {
        "title": "Ground mandrake root"
      },
      {
        "title": "Health potion"
      },
      {
        "title": "Invisibility potion"
      },
      {
        "title": "Komodo dragon scale"
      },
      {
        "title": "Love Potion"
      },
      {
        "title": "Mana potion"
      },
      {
        "title": "Potion beats"
      },
      {
        "title": "Potion bottle"
      },
      {
        "title": "Viper venom"
      },
      {
        "title": "Whole bloodroot"
      }
    ]
  }
}
```

###### Output

```html
Blue Mountain Flower
```

#### Dot notation

You can use the `first` filter with dot notation when you need to use it inside a tag or object output.

###### Code

```liquid
{{ collection.products.first.title }}
```

###### Data

```json
{
  "collection": {
    "products": [
      {
        "title": "Blue Mountain Flower"
      },
      {
        "title": "Charcoal"
      },
      {
        "title": "Crocodile tears"
      },
      {
        "title": "Dandelion milk"
      },
      {
        "title": "Draught of Immortality"
      },
      {
        "title": "Dried chamomile"
      },
      {
        "title": "Forest mushroom"
      },
      {
        "title": "Gift Card"
      },
      {
        "title": "Glacier ice"
      },
      {
        "title": "Ground mandrake root"
      },
      {
        "title": "Health potion"
      },
      {
        "title": "Invisibility potion"
      },
      {
        "title": "Komodo dragon scale"
      },
      {
        "title": "Love Potion"
      },
      {
        "title": "Mana potion"
      },
      {
        "title": "Potion beats"
      },
      {
        "title": "Potion bottle"
      },
      {
        "title": "Viper venom"
      },
      {
        "title": "Whole bloodroot"
      }
    ]
  }
}
```

###### Output

```html
Blue Mountain Flower
```

---



<a id="filters-floor"></a>


## floor

```oobleck
number | floor
```

returns [number](https://shopify.dev/docs/api/liquid/basics#number)

Rounds a number down to the nearest integer.

###### Code

```liquid
{{ 1.2 | floor }}
```

###### Output

```html
1
```

---



<a id="filters-font-face"></a>


## font\_​face

```oobleck
font | font_face
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Generates a CSS [`@font_face` declaration](https://developer.mozilla.org/en-US/docs/Web/CSS/%40font-face) to load the provided font.

###### Code

```liquid
{{ settings.type_header_font | font_face }}
```

###### Data

```json
{
  "settings": {
    "type_header_font": {}
  }
}
```

###### Output

```html
@font-face {
  font-family: Assistant;
  font-weight: 400;
  font-style: normal;
  src: url("//polinas-potent-potions.myshopify.com/cdn/fonts/assistant/assistant_n4.9120912a469cad1cc292572851508ca49d12e768.woff2") format("woff2"),
       url("//polinas-potent-potions.myshopify.com/cdn/fonts/assistant/assistant_n4.6e9875ce64e0fefcd3f4446b7ec9036b3ddd2985.woff") format("woff");
}
```

#### font\_display

```oobleck
font | font_face: font_display: string
```

You can include an optional parameter to specify the [`font_display` property](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display) of the `@font_face` declaration.

###### Code

```liquid
{{ settings.type_header_font | font_face: font_display: 'swap' }}
```

###### Data

```json
{
  "settings": {
    "type_header_font": {}
  }
}
```

###### Output

```html
@font-face {
  font-family: Assistant;
  font-weight: 400;
  font-style: normal;
  font-display: swap;
  src: url("//polinas-potent-potions.myshopify.com/cdn/fonts/assistant/assistant_n4.9120912a469cad1cc292572851508ca49d12e768.woff2") format("woff2"),
       url("//polinas-potent-potions.myshopify.com/cdn/fonts/assistant/assistant_n4.6e9875ce64e0fefcd3f4446b7ec9036b3ddd2985.woff") format("woff");
}
```

---



<a id="filters-font-modify"></a>


## font\_​modify

```oobleck
font | font_modify: string, string
```

returns [font](https://shopify.dev/docs/api/liquid/objects/font)

Modifies a specific property of a given font.

The `font_modify` filter requires two parameters. The first indicates which property should be modified and the second is either the new value, or modification amount, for that property.

***

**Tip:** You can access every variant of the chosen font\&#39;s family by using \<a href="/docs/api/liquid/objects/font#font-variants">\<code>font.variants\</code>\</a>. However, you can more easily access specific styles and weights by using the \<code>\<span class="PreventFireFoxApplyingGapToWBR">font\<wbr/>\_modify\</span>\</code> filter.

***

The following table outlines the valid font properties and modification values:

| Property | Modification value | Output |
| - | - | - |
| `style` | `normal` | Returns the normal variant of the same weight, if it exists. |
| `italic` | Returns the italic variant of the same weight, if it exists. | |
| `oblique` | Returns the oblique variant of the same weight, if it exists.Oblique variants are similar to italic variants in appearance. All Shopify fonts have only oblique or italic variants, not both. | |
| `weight` | `100` → `900` | Returns a variant of the same style with the given weight, if it exists. |
| `normal` | Returns a variant of the same style with a weight of `400`, if it exists. | |
| `bold` | Returns a variant of the same style with a weight of `700`, if it exists. | |
| `+100` → `+900` | Returns a variant of the same style with a weight incremented by the given value, if it exists.For example, if a font has a weight of `400`, then using `+100` would return the font with a weight of `500`. | |
| `-100` → `-900` | Returns a variant of the same style with a weight decremented by the given value, if it exists.For example, if a font has a weight of `400`, then using `-100` would return the font with a weight of `300`. | |
| `lighter` | Returns a lighter variant of the same style by applying the rules used by the [CSS `font-weight` property](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight#Meaning_of_relative_weights) and browser [fallback weights](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight#Fallback_weights), if it exists. | |
| `bolder` | Returns a bolder variant of the same style by applying the rules used by the [CSS `font-weight` property](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight#Meaning_of_relative_weights) and browser [fallback weights](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight#Fallback_weights), if it exists. | |

###### Code

```liquid
{%- assign bold_font = settings.type_body_font | font_modify: 'weight', 'bold' -%}

h2 {
  font-weight: {{ bold_font.weight }};
}
```

###### Data

```json
{
  "settings": {
    "type_body_font": {}
  }
}
```

###### Output

```html
h2 {
  font-weight: 700;
}
```

#### Non-existent font variants

If the `font_modify` filter tries to create a font variant that doesn't exist, then it returns `nil`. To handle this, you can either assign a fallback value with the [`default` filter](https://shopify.dev/docs/api/liquid/filters/default), or check for `nil` before using the variant.

###### Code

```liquid
{%- assign bold_font = settings.type_body_font | font_modify: 'weight', 'bold' -%}
{%- assign italic_font = settings.type_body_font | font_modify: 'style', 'italic' -%}
{%- assign heavy_font = settings.type_body_font | font_modify: 'weight', '900' | default: bold_font -%}
{%- assign oblique_font = settings.type_body_font | font_modify: 'style', 'oblique' | default: italic_font -%}

h2 {
  font-style: {{ heavy_font.weight }};
}

.italic {
  {% if oblique_font -%}
    font-style: {{ oblique_font.style }};
  {%- else -%}
    font-style: {{ italic_font.style }};
  {%- endif %}
}
```

###### Data

```json
{
  "settings": {
    "type_body_font": {}
  }
}
```

###### Output

```html
h2 {
  font-style: 700;
}

.italic {
  font-style: ;
}
```

---



<a id="filters-font-url"></a>


## font\_​url

```oobleck
font | font_url
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Returns the [CDN URL](https://shopify.dev/themes/best-practices/performance/platform#shopify-cdn) for the provided font in `woff2` format.

###### Code

```liquid
{{ settings.type_header_font | font_url }}
```

###### Data

```json
{
  "settings": {
    "type_header_font": {}
  }
}
```

###### Output

```html
//polinas-potent-potions.myshopify.com/cdn/fonts/assistant/assistant_n4.9120912a469cad1cc292572851508ca49d12e768.woff2
```

#### woff format

```oobleck
font | font_url: string
```

By default, the `font_url` filter returns the [CDN URL](https://shopify.dev/themes/best-practices/performance/platform#shopify-cdn) for the font in `woff2` format. However, you can also choose `woff` format.

###### Code

```liquid
{{ settings.type_header_font | font_url: 'woff' }}
```

###### Data

```json
{
  "settings": {
    "type_header_font": {}
  }
}
```

###### Output

```html
//polinas-potent-potions.myshopify.com/cdn/fonts/assistant/assistant_n4.6e9875ce64e0fefcd3f4446b7ec9036b3ddd2985.woff
```

---



<a id="filters-format-address"></a>


## format\_​address

```oobleck
address | format_address
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Generates an HTML address display, with each address component ordered according to the address's locale.

###### Code

```liquid
{{ shop.address | format_address }}
```

###### Data

```json
{
  "shop": {
    "address": {}
  }
}
```

###### Output

```html
<p>Polina&#39;s Potions, LLC<br>150 Elgin Street<br>8th floor<br>Ottawa ON K2P 1L4<br>Canada</p>
```

### Rendered output

###### Code

```liquid
{{ customer.default_address | format_address }}
```

###### Data

```json
{
  "customer": {
    "default_address": {}
  }
}
```

###### Output

```html
<p>Cornelius Potionmaker<br>12 Phoenix Feather Alley<br>1<br>Calgary AB T1X 0L4<br>Canada</p>
```

### Rendered output

---



<a id="filters-global-asset-url"></a>


## global\_​asset\_​url

```oobleck
string | global_asset_url
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Returns the [CDN URL](https://shopify.dev/themes/best-practices/performance/platform#shopify-cdn) for a global asset.

Global assets are kept in a directory on Shopify's server. Using global assets can be faster than loading the resource directly.

Depending on the resource type, you might need to use an additional filter to load the resource. The following table outlines which filter to use for specific resource types.

| Resource type | Additional filter |
| - | - |
| JavaScript (`.js`) | [`script_tag`](https://shopify.dev/docs/api/liquid/filters/script_tag) |
| CSS (`.css`) | [`stylesheet_tag`](https://shopify.dev/docs/api/liquid/filters/stylesheet_tag) |

The following table outlines the available global assets:

| Category | Assets |
| - | - |
| Firebug | - `firebug/firebug.css` - `firebug/firebug.html` - `firebug/firebug.js` - `firebug/firebugx.js` - `firebug/errorIcon.png` - `firebug/infoIcon.png` - `firebug/warningIcon.png` |
| JavaScript libraries | - `controls.js` - `dragdrop.js` - `effects.js` - `ga.js` - `mootools.js` |
| Lightbox | - `lightbox.css` - `lightbox.js` - `lightbox/v1/lightbox.css` - `lightbox/v1/lightbox.js` - `lightbox/v2/lightbox.css` - `lightbox/v2/lightbox.js` - `lightbox/v2/close.gif` - `lightbox/v2/loading.gif` - `lightbox/v2/overlay.png` - `lightbox/v2/zoom-lg.gif` - `lightbox/v204/lightbox.css` - `lightbox/v204/lightbox.js` - `lightbox/v204/bullet.gif` - `lightbox/v204/close.gif` - `lightbox/v204/closelabel.gif` - `lightbox/v204/donatebutton.gif` - `lightbox/v204/downloadicon.gif` - `lightbox/v204/loading.gif` - `lightbox/v204/nextlabel.png` - `lightbox/v204/prevlabel.gif` |
| Prototype | - `prototype.js` - `prototype/1.5/prototype.js` - `prototype/1.6/prototype.js` |
| script.aculo.us | - `scriptaculous/1.8.2/scriptaculous.js` - `scriptaculous/1.8.2/builder.js` - `scriptaculous/1.8.2/controls.js` - `scriptaculous/1.8.2/dragdrop.js` - `scriptaculous/1.8.2/effects.js` - `scriptaculous/1.8.2/slider.js` - `scriptaculous/1.8.2/sound.js` - `scriptaculous/1.8.2/unittest.js` |
| Shopify | - `list-collection.css` - `textile.css` |

###### Code

```liquid
{{ 'lightbox.js' | global_asset_url | script_tag }}

{{ 'lightbox.css' | global_asset_url | stylesheet_tag }}
```

###### Output

```html
<script src="//polinas-potent-potions.myshopify.com/cdn/s/global/lightbox.js" type="text/javascript"></script>

<link href="//polinas-potent-potions.myshopify.com/cdn/s/global/lightbox.css" rel="stylesheet" type="text/css" media="all" />
```

---



<a id="filters-handleize"></a>


## handleize

```oobleck
string | handleize
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Converts a string into a [handle](https://shopify.dev/docs/api/liquid/basics#handles).

***

**Note:** The \<code>handleize\</code> filter has an alias of \<code>handle\</code>.

***

###### Code

```liquid
{{ product.title | handleize }}
{{ product.title | handle }}
```

###### Data

```json
{
  "product": {
    "title": "Health potion"
  }
}
```

###### Output

```html
health-potion
health-potion
```

---



<a id="filters-has"></a>


## has

```oobleck
array | has: string, string
```

returns [boolean](https://shopify.dev/docs/api/liquid/basics#boolean)

Tests if any item in an array has a specific property value.

This requires you to provide both the property name and the associated value.

###### Code

```liquid
{% assign has_potent_potions = collection.products | has: 'vendor', "Polina's Potent Potions" %}

{{ has_potent_potions }}
```

###### Data

```json
{
  "collection": {
    "products": [
      {
        "vendor": "Polina's Potent Potions"
      },
      {
        "vendor": "Ted's Apothecary Supply"
      },
      {
        "vendor": "Polina's Potent Potions"
      },
      {
        "vendor": "Clover's Apothecary"
      },
      {
        "vendor": "Polina's Potent Potions"
      },
      {
        "vendor": "Clover's Apothecary"
      },
      {
        "vendor": "Clover's Apothecary"
      },
      {
        "vendor": "Polina's Potent Potions"
      },
      {
        "vendor": "Ted's Apothecary Supply"
      },
      {
        "vendor": "Clover's Apothecary"
      },
      {
        "vendor": "Polina's Potent Potions"
      },
      {
        "vendor": "Polina's Potent Potions"
      },
      {
        "vendor": "Ted's Apothecary Supply"
      },
      {
        "vendor": "Polina's Potent Potions"
      },
      {
        "vendor": "Polina's Potent Potions"
      },
      {
        "vendor": "Polina's Potent Potions"
      },
      {
        "vendor": "Polina's Potent Potions"
      },
      {
        "vendor": "Ted's Apothecary Supply"
      },
      {
        "vendor": "Clover's Apothecary"
      }
    ]
  }
}
```

###### Output

```html
true
```

#### Returns `false` when no items match the specified property value.

###### Code

```liquid
{% assign has_potent_potions = collection.products | has: 'vendor', "Polina's Potions" %}

{{ has_potent_potions }}
```

###### Data

```json
{
  "collection": {
    "products": [
      {
        "vendor": "Polina's Potent Potions"
      },
      {
        "vendor": "Ted's Apothecary Supply"
      },
      {
        "vendor": "Polina's Potent Potions"
      },
      {
        "vendor": "Clover's Apothecary"
      },
      {
        "vendor": "Polina's Potent Potions"
      },
      {
        "vendor": "Clover's Apothecary"
      },
      {
        "vendor": "Clover's Apothecary"
      },
      {
        "vendor": "Polina's Potent Potions"
      },
      {
        "vendor": "Ted's Apothecary Supply"
      },
      {
        "vendor": "Clover's Apothecary"
      },
      {
        "vendor": "Polina's Potent Potions"
      },
      {
        "vendor": "Polina's Potent Potions"
      },
      {
        "vendor": "Ted's Apothecary Supply"
      },
      {
        "vendor": "Polina's Potent Potions"
      },
      {
        "vendor": "Polina's Potent Potions"
      },
      {
        "vendor": "Polina's Potent Potions"
      },
      {
        "vendor": "Polina's Potent Potions"
      },
      {
        "vendor": "Ted's Apothecary Supply"
      },
      {
        "vendor": "Clover's Apothecary"
      }
    ]
  }
}
```

###### Output

```html
false
```

---



<a id="filters-hex-to-rgba"></a>


## hex\_​to\_​rgba

```oobleck
string | hex_to_rgba
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Converts a CSS color string from hexadecimal format to `RGBA` format. Shorthand hexadecimal formatting (`hex3`) is also accepted.

**Deprecated:**

The `hex_to_rgba` filter has been replaced by [`color_to_rgb`](https://shopify.dev/docs/api/liquid/filters/color_to_rgb) and [`color_modify`](https://shopify.dev/docs/api/liquid/filters/color_modify).

###### Code

```liquid
{{ '#EA5AB9' | hex_to_rgba }}
```

###### Output

```html
rgba(234,90,185,1)
```

#### alpha

```oobleck
string | hex_to_rgba: number
```

The default `alpha` value is 1.0. However, you can specify a decimal value between 0.0 and 1.0.

###### Code

```liquid
{{ '#EA5AB9' | hex_to_rgba: 0.5 }}
```

###### Output

```html
rgba(234,90,185,0.5)
```

---



<a id="filters-highlight"></a>


## highlight

```oobleck
string | highlight: string
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Wraps all instances of a specific string, within a given string, with an HTML `<strong>` tag with a `class` attribute of `highlight`.

###### Code

```liquid
{% for item in search.results %}
  {% if item.object_type == 'product' %}
    {{ item.description | highlight: search.terms }}
  {% else %}
    {{ item.content | highlight: search.terms }}
  {% endif %}
{% endfor %}
```

###### Data

```json
{
  "search": {
    "results": [
      {
        "description": "",
        "object_type": "product"
      },
      {
        "description": "",
        "object_type": "product"
      },
      {
        "description": "",
        "object_type": "product"
      },
      {
        "description": "",
        "object_type": "product"
      },
      {
        "description": "This is a love potion.",
        "object_type": "product"
      },
      {
        "description": "",
        "object_type": "product"
      }
    ],
    "terms": "love"
  }
}
```

###### Output

```html
This is a <strong class="highlight">love</strong> potion.
```

---



<a id="filters-highlight-active-tag"></a>


## highlight\_​active\_​tag

```oobleck
string | highlight_active_tag
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Wraps a given tag within the [`collection` object](https://shopify.dev/docs/api/liquid/objects/collection) in an HTML `<span>` tag, with a `class` attribute of `active`, if the tag is currently active. Only applies to collection tags.

###### Code

```liquid
{% for tag in collection.all_tags %}
  {{- tag | highlight_active_tag | link_to_tag: tag }}
{% endfor %}
```

###### Data

```json
{
  "collection": {
    "all_tags": [
      "extra-potent",
      "fresh",
      "healing",
      "ingredients"
    ]
  },
  "template": "collection"
}
```

###### Output

```html
<a href="/services/liquid_rendering/extra-potent" title="Show products matching tag extra-potent"><span class="active">extra-potent</span></a>

<a href="/services/liquid_rendering/fresh" title="Show products matching tag fresh">fresh</a>

<a href="/services/liquid_rendering/healing" title="Show products matching tag healing">healing</a>

<a href="/services/liquid_rendering/ingredients" title="Show products matching tag ingredients">ingredients</a>
```

---



<a id="filters-hmac-sha1"></a>


## hmac\_​sha1

```oobleck
string | hmac_sha1: string
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Converts a string into an SHA-1 hash using a hash message authentication code (HMAC).

The secret key for the message is supplied as a parameter to the filter.

###### Code

```liquid
{%- assign secret_potion = 'Polyjuice' | hmac_sha1: 'Polina' -%}

My secret potion: {{ secret_potion }}
```

###### Output

```html
My secret potion: 63304203b005ea4bc80546f1c6fdfe252d2062b2
```

---



<a id="filters-hmac-sha256"></a>


## hmac\_​sha256

```oobleck
string | hmac_sha256: string
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Converts a string into an SHA-256 hash using a hash message authentication code (HMAC).

The secret key for the message is supplied as a parameter to the filter.

###### Code

```liquid
{%- assign secret_potion = 'Polyjuice' | hmac_sha256: 'Polina' -%}

My secret potion: {{ secret_potion }}
```

###### Output

```html
My secret potion: 8e0d5d65cff1242a4af66c8f4a32854fd5fb80edcc8aabe9b302b29c7c71dc20
```

---



<a id="filters-image-tag"></a>


## image\_​tag

```oobleck
string | image_tag
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Generates an HTML `<img>` tag for a given [`image_url`](https://shopify.dev/docs/api/liquid/filters/image_url).

By default, `width` and `height` attributes are added to the `<img>` tag based on the dimensions and aspect ratio from the image URL. However, you can override these attributes with the [width](https://shopify.dev/docs/api/liquid/filters/image_tag#image_tag-width) and [height](https://shopify.dev/docs/api/liquid/filters/image_tag#image_tag-height) parameters. If only one parameter is provided, then only that attribute is added.

###### Code

```liquid
{{ product | image_url: width: 200 | image_tag }}
```

###### Output

```html
<img src="//polinas-potent-potions.myshopify.com/cdn/shop/files/science-beakers-blue-light-new.jpg?v=1683744744&amp;width=200" alt="Health potion" srcset="//polinas-potent-potions.myshopify.com/cdn/shop/files/science-beakers-blue-light-new.jpg?v=1683744744&amp;width=200 200w" width="200" height="133">
```

### Rendered output

#### Lazy loading

If you don't apply the `preload` attribute to `image_tag`, then `loading` is automatically set to `lazy` for images in sections further down the page. You shouldn't lazy load images above the fold. If the default value doesn't work for your theme, then consider writing your own logic using the `section.index` and `section.location` properties. For more information, refer to the [`section` object](https://shopify.dev/docs/api/liquid/objects/section).

#### `image_tag` and focal points

This filter automatically applies a focal point to the image using the `object-position` CSS style, if focal point coordinates are available. You can also access an image's focal point coordinates directly through the [`focal_point`](https://shopify.dev/docs/api/liquid/objects/focal_point) object. [Learn how to set a focal point](https://help.shopify.com/manual/online-store/images/theme-images#set-a-focal-point-on-a-theme-image).

###### Code

```liquid
{{ images['potions-header.png'] | image_url: width: 300 | image_tag }}
```

###### Output

```html
<img src="//polinas-potent-potions.myshopify.com/cdn/shop/files/potions-header.png?v=1650325393&amp;width=300" alt="" srcset="//polinas-potent-potions.myshopify.com/cdn/shop/files/potions-header.png?v=1650325393&amp;width=300 300w" width="300" height="173" style="object-position:1.9231% 9.7917%;">
```

### Rendered output

#### width

```oobleck
image_url | image_tag: width: number
```

Specify the `width` attribute of the `<img>` tag. You can set the parameter to `nil` to prevent the attribute from being added.

###### Code

```liquid
<!-- With a width -->
{{ product | image_url: width: 400 | image_tag: width: 300 }}

<!-- With the width set to nil -->
{{ product | image_url: width: 400 | image_tag: width: nil }}
```

###### Output

```html
<!-- With a width -->
<img src="//polinas-potent-potions.myshopify.com/cdn/shop/files/science-beakers-blue-light-new.jpg?v=1683744744&amp;width=400" alt="Health potion" srcset="//polinas-potent-potions.myshopify.com/cdn/shop/files/science-beakers-blue-light-new.jpg?v=1683744744&amp;width=300 300w, //polinas-potent-potions.myshopify.com/cdn/shop/files/science-beakers-blue-light-new.jpg?v=1683744744&amp;width=352 352w" width="300">

<!-- With the width set to nil -->
<img src="//polinas-potent-potions.myshopify.com/cdn/shop/files/science-beakers-blue-light-new.jpg?v=1683744744&amp;width=400" alt="Health potion" srcset="//polinas-potent-potions.myshopify.com/cdn/shop/files/science-beakers-blue-light-new.jpg?v=1683744744&amp;width=352 352w">
```

### Rendered output

#### height

```oobleck
image_url | image_tag: height: number
```

Specify the `height` attribute of the `<img>` tag. You can set the parameter to `nil` to prevent the attribute from being added.

###### Code

```liquid
<!-- With a height -->
{{ product | image_url: width: 400 | image_tag: height: 300 }}

<!-- With the height set to nil -->
{{ product | image_url: width: 400 | image_tag: height: nil }}
```

###### Output

```html
<!-- With a height -->
<img src="//polinas-potent-potions.myshopify.com/cdn/shop/files/science-beakers-blue-light-new.jpg?v=1683744744&amp;width=400" alt="Health potion" srcset="//polinas-potent-potions.myshopify.com/cdn/shop/files/science-beakers-blue-light-new.jpg?v=1683744744&amp;width=352 352w" height="300">

<!-- With the height set to nil -->
<img src="//polinas-potent-potions.myshopify.com/cdn/shop/files/science-beakers-blue-light-new.jpg?v=1683744744&amp;width=400" alt="Health potion" srcset="//polinas-potent-potions.myshopify.com/cdn/shop/files/science-beakers-blue-light-new.jpg?v=1683744744&amp;width=352 352w">
```

### Rendered output

#### sizes

```oobleck
image_url | image_tag: sizes: string
```

Specify source sizes with the [HTML `sizes` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-sizes).

###### Code

```liquid
{{ product | image_url: width: 200 | image_tag: sizes: '(min-width:1600px) 960px, (min-width: 750px) calc((100vw - 11.5rem) / 2), calc(100vw - 4rem)' }}
```

###### Output

```html
<img src="//polinas-potent-potions.myshopify.com/cdn/shop/files/science-beakers-blue-light-new.jpg?v=1683744744&amp;width=200" alt="Health potion" srcset="//polinas-potent-potions.myshopify.com/cdn/shop/files/science-beakers-blue-light-new.jpg?v=1683744744&amp;width=200 200w" width="200" height="133" sizes="(min-width:1600px) 960px, (min-width: 750px) calc((100vw - 11.5rem) / 2), calc(100vw - 4rem)">
```

### Rendered output

#### widths

```oobleck
image_url | image_tag: widths: string
```

By default, Shopify generates a `srcset` with a smart set of default widths up to the maximum defined in the image URL. However, you can create your own set of widths.

###### Code

```liquid
{{ product | image_url: width: 600 | image_tag: widths: '200, 300, 400' }}
```

###### Output

```html
<img src="//polinas-potent-potions.myshopify.com/cdn/shop/files/science-beakers-blue-light-new.jpg?v=1683744744&amp;width=600" alt="Health potion" srcset="//polinas-potent-potions.myshopify.com/cdn/shop/files/science-beakers-blue-light-new.jpg?v=1683744744&amp;width=200 200w, //polinas-potent-potions.myshopify.com/cdn/shop/files/science-beakers-blue-light-new.jpg?v=1683744744&amp;width=300 300w, //polinas-potent-potions.myshopify.com/cdn/shop/files/science-beakers-blue-light-new.jpg?v=1683744744&amp;width=400 400w" width="600" height="400">
```

### Rendered output

#### srcset

```oobleck
image_url | image_tag: srcset: string
```

By default, Shopify generates a `srcset`. However, you can create your own `srcset`. The `srcset` parameter takes precedence over the [`width` parameter](https://shopify.dev/docs/api/liquid/filters/image_tag#image_tag-width). You shouldn't to use the `srcset` parameter unless you want to remove the attribute by setting the parameter to `nil`.

###### Code

```liquid
{{ product | image_url: width: 200 | image_tag: srcset: nil }}
```

###### Output

```html
<img src="//polinas-potent-potions.myshopify.com/cdn/shop/files/science-beakers-blue-light-new.jpg?v=1683744744&amp;width=200" alt="Health potion" width="200" height="133">
```

### Rendered output

#### preload

```oobleck
image_url | image_tag: preload: boolean
```

Specify whether the image should be preloaded.

When `preload` is set to `true`, a resource hint is sent as a [Link HTTP header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Link) with a `rel` value of [`preload`](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types/preload). The Link header also includes `imagesrcset` and `imagesizes` that match the `srcset` and `sizes` attribute of the tag, where present:

```liquid
Link: <IMAGE_URL>; rel=preload; as=image
Link: <IMAGE_URL>; rel=preload; as=image; imagesrcset=ADDITIONAL_IMAGE_URL 352w; imagesizes=40vw
```

```liquid
Link: 
```

This option doesn't affect the HTML img tag directly.

You should use the preload parameter sparingly. For example, consider preloading only above-the-fold images. To learn more about resource hints in Shopify themes, refer to [Performance best practices for Shopify themes](https://shopify.dev/themes/best-practices/performance#preload-key-resources-defer-or-avoid-loading-others).

#### alt

```oobleck
image_url | image_tag: alt: string
```

By default, the `alt` attribute of the `<img>` tag is set to the [media alt text](https://help.shopify.com/manual/products/product-media/add-alt-text), or the resource title for article, collection, line item, product, and variant images. However, you can override this default, or set the value if there's no default.

###### Code

```liquid
{{ product | image_url: width: 200 | image_tag: alt: "My image's alt text" }}
```

###### Output

```html
<img src="//polinas-potent-potions.myshopify.com/cdn/shop/files/science-beakers-blue-light-new.jpg?v=1683744744&amp;width=200" alt="My image&#39;s alt text" srcset="//polinas-potent-potions.myshopify.com/cdn/shop/files/science-beakers-blue-light-new.jpg?v=1683744744&amp;width=200 200w" width="200" height="133">
```

### Rendered output

#### HTML attributes

```oobleck
image_url | image_tag: attribute: string
```

You can specify [HTML attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attributes) by adding a parameter that matches the attribute name, and the desired value.

###### Code

```liquid
{{ product | image_url: width: 200 | image_tag: class: 'custom-class', loading: 'lazy' }}
```

###### Output

```html
<img src="//polinas-potent-potions.myshopify.com/cdn/shop/files/science-beakers-blue-light-new.jpg?v=1683744744&amp;width=200" alt="Health potion" srcset="//polinas-potent-potions.myshopify.com/cdn/shop/files/science-beakers-blue-light-new.jpg?v=1683744744&amp;width=200 200w" width="200" height="133" loading="lazy" class="custom-class">
```

### Rendered output

---



<a id="filters-image-url"></a>


## image\_​url

```oobleck
variable | image_url: width: number, height: number
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Returns the [CDN URL](https://shopify.dev/themes/best-practices/performance/platform#shopify-cdn) for an image.

You can use the `image_url` filter on the following objects, as well as their `src` property:

* [`article`](https://shopify.dev/docs/api/liquid/objects/article)
* [`collection`](https://shopify.dev/docs/api/liquid/objects/collection)
* [`image`](https://shopify.dev/docs/api/liquid/objects/image)
* [`line_item`](https://shopify.dev/docs/api/liquid/objects/line_item)
* [`product`](https://shopify.dev/docs/api/liquid/objects/product)
* [`variant`](https://shopify.dev/docs/api/liquid/objects/variant)
* [`country`](https://shopify.dev/docs/api/liquid/objects/country)

***

**Caution:** You need to specify either a \<a href="/docs/api/liquid/filters/image\_url#image\_url-width">\<code>width\</code>\</a> or \<a href="/docs/api/liquid/filters/image\_url#image\_url-height">\<code>height\</code>\</a> parameter. If neither are specified, then an error is returned.

***

***

**Note:** Regardless of the specified dimensions, an image can never be resized to be larger than its original dimensions.

***

###### Code

```liquid
{{ product | image_url: width: 450 }}
```

###### Output

```html
//polinas-potent-potions.myshopify.com/cdn/shop/files/science-beakers-blue-light-new.jpg?v=1683744744&width=450
```

#### width

```oobleck
variable | image_url: width: number
```

Specify the width of the image up to a maximum of `5760px`. If only the width is specified, then the height is automatically calculated based on the image's dimensions.

###### Code

```liquid
{{ product | image_url: width: 450 }}
```

###### Output

```html
//polinas-potent-potions.myshopify.com/cdn/shop/files/science-beakers-blue-light-new.jpg?v=1683744744&width=450
```

#### height

```oobleck
variable | image_url: height: number
```

Specify the height of the image up to a maximum of `5760px`. If only the height is specified, then the width is automatically calculated based on the image's dimensions.

###### Code

```liquid
{{ product | image_url: height: 450 }}
```

###### Output

```html
//polinas-potent-potions.myshopify.com/cdn/shop/files/science-beakers-blue-light-new.jpg?height=450&v=1683744744
```

#### crop

```oobleck
variable | image_url: crop: string
```

Specify which part of the image to show if the specified dimensions result in an aspect ratio that differs from the original. You can use the following values:

* `top`
* `center`
* `bottom`
* `left`
* `right`
* `region`

The default value is `center`.

When using the `region` crop mode, the starting point for the crop is defined by `crop_left` and `crop_top` and extends to the `crop_width` and `crop_height`. Optionally, to resize the region extracted by the crop, use the `width` and `height` parameters.

***

**Note:** Country flags are SVG images and can only be cropped if a value for \<code>format\</code> is also provided.

***

###### Code

```liquid
{{ product | image_url: width: 400, height: 400, crop: 'bottom' }}

{{ product | image_url: crop: 'region', crop_left: 32, crop_top: 32, crop_width: 512, crop_height: 512 }}

{{ product | image_url: crop: 'region', width: 100, height: 100, crop_left: 32, crop_top: 32, crop_width: 512, crop_height: 512 }}
```

###### Output

```html
//polinas-potent-potions.myshopify.com/cdn/shop/files/science-beakers-blue-light-new.jpg?crop=bottom&height=400&v=1683744744&width=400

//polinas-potent-potions.myshopify.com/cdn/shop/files/science-beakers-blue-light-new.jpg?crop=region&crop_height=512&crop_left=32&crop_top=32&crop_width=512&v=1683744744

//polinas-potent-potions.myshopify.com/cdn/shop/files/science-beakers-blue-light-new.jpg?crop=region&crop_height=512&crop_left=32&crop_top=32&crop_width=512&height=100&v=1683744744&width=100
```

#### format

```oobleck
variable | image_url: format: string
```

Specify which file format to use for the image. The valid formats are `pjpg` and `jpg`.

It's not practical to convert a lossy image format, like `jpg`, to a lossless image format, like `png`, so Shopify can do only the following conversions:

* `png` to `jpg`
* `png` to `pjpg`
* `jpg` to `pjpg`

***

**Note:** Shopify automatically detects which image formats are supported by the client (e.g. \<code>\<span class="PreventFireFoxApplyingGapToWBR">Web\<wbr/>P\</span>\</code>, \<code>\<span class="PreventFireFoxApplyingGapToWBR">A\<wbr/>V\<wbr/>I\<wbr/>F\</span>\</code>, etc.) and selects a file format for optimal quality and file size. When a format is specified, Shopify takes into account the features (e.g. progressive, alpha channel) of the specified file format when making the final automatic format selection. To learn more, visit \<a href="https://cdn.shopify.com/">https://cdn.shopify.com/\</a>.

***

###### Code

```liquid
{{ product | image_url: width: 450, format: 'pjpg' }}
```

###### Output

```html
//polinas-potent-potions.myshopify.com/cdn/shop/files/science-beakers-blue-light-new.jpg?format=pjpg&v=1683744744&width=450
```

#### pad\_color

```oobleck
variable | image_url: pad_color: string
```

Specify a color to pad the image if the specified dimensions result in an aspect ratio that differs from the original. The color must be in hexadecimal format (`hex3` or `hex6`).

###### Code

```liquid
{{ product | image_url: width: 400, height: 400, pad_color: '000' }}
```

###### Output

```html
//polinas-potent-potions.myshopify.com/cdn/shop/files/science-beakers-blue-light-new.jpg?height=400&pad_color=000&v=1683744744&width=400
```

---



<a id="filters-img-tag"></a>


## img\_​tag

```oobleck
string | img_tag
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Generates an HTML `<img>` tag for a given image URL.

You can also use the `img_tag` filter on the following objects:

* [`article`](https://shopify.dev/docs/api/liquid/objects/article)
* [`collection`](https://shopify.dev/docs/api/liquid/objects/collection)
* [`image`](https://shopify.dev/docs/api/liquid/objects/image)
* [`line_item`](https://shopify.dev/docs/api/liquid/objects/line_item)
* [`product`](https://shopify.dev/docs/api/liquid/objects/product)
* [`variant`](https://shopify.dev/docs/api/liquid/objects/variant)

**Deprecated:**

The `img_tag` filter has been replaced by [`image_tag`](https://shopify.dev/docs/api/liquid/filters/image_tag).

###### Code

```liquid
{{ product | img_tag }}
```

###### Output

```html
<img src="//polinas-potent-potions.myshopify.com/cdn/shop/files/science-beakers-blue-light-new_small.jpg?v=1683744744" alt="" />
```

#### Optional parameters

```oobleck
variable | img_tag: string, string, string
```

The `img_tag` filter accepts 3 unnamed parameters, separated by commas, to specify the `alt` and `class` attributes, and the [size](https://shopify.dev/docs/api/liquid/filters/img_url#img_url-size) of the image. Because the parameters are read in that order, you must include a value for each parameter before the last parameter you want to specify. If you don't want to include a parameter that precedes one that you do want to include, then you can set the value to an empty string.

***

**Note:** The \<code>size\</code> attribute of the \<code>\<span class="PreventFireFoxApplyingGapToWBR">img\<wbr/>\_tag\</span>\</code> filter can\&#39;t be used in conjunction with the \<a href="/docs/api/liquid/filters/img\_url">\<code>\<span class="PreventFireFoxApplyingGapToWBR">img\<wbr/>\_url\</span>\</code> filter\</a>. If both are used, then the \<code>\<span class="PreventFireFoxApplyingGapToWBR">img\<wbr/>\_url\</span>\</code> filter will override the \<code>size\</code> parameter of the \<code>\<span class="PreventFireFoxApplyingGapToWBR">img\<wbr/>\_tag\</span>\</code> filter.

***

###### Code

```liquid
{{ product | img_tag: 'image alt text', '', '450x450' }}
```

###### Output

```html
<img src="//polinas-potent-potions.myshopify.com/cdn/shop/files/science-beakers-blue-light-new_450x450.jpg?v=1683744744" alt="image alt text" class="" />
```

---



<a id="filters-img-url"></a>


## img\_​url

```oobleck
variable | img_url
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Returns the [CDN URL](https://shopify.dev/themes/best-practices/performance/platform#shopify-cdn) for an image.

You can use the `img_url` filter on the following objects:

* [`article`](https://shopify.dev/docs/api/liquid/objects/article)
* [`collection`](https://shopify.dev/docs/api/liquid/objects/collection)
* [`image`](https://shopify.dev/docs/api/liquid/objects/image)
* [`line_item`](https://shopify.dev/docs/api/liquid/objects/line_item)
* [`product`](https://shopify.dev/docs/api/liquid/objects/product)
* [`variant`](https://shopify.dev/docs/api/liquid/objects/variant)

**Deprecated:**

The `img_url` filter has been replaced by [`image_url`](https://shopify.dev/docs/api/liquid/filters/image_url).

###### Code

```liquid
{{ product | img_url }}
```

###### Output

```html
//polinas-potent-potions.myshopify.com/cdn/shop/files/science-beakers-blue-light-new_small.jpg?v=1683744744
```

#### size

```oobleck
variable | img_url: string
```

The size parameter allows you to specify the dimensions of the image up to a maximum of 5760 x 5760 px. You can specify only the width, only the height, or both, and you can also use the following named sizes:

| Name | Dimensions |
| - | - |
| `pico` | `16x16 px` |
| `icon` | `32x32 px` |
| `thumb` | `50x50 px` |
| `small` | `100x100 px` |
| `compact` | `160x160 px` |
| `medium` | `240x240 px` |
| `large` | `480x480 px` |
| `grande` | `600x600 px` |
| `original` `master` | `1024x1024 px` |

###### Code

```liquid
{{ product | img_url: '480x' }}

{{ product | img_url: 'x480' }}

{{ product | img_url: '480x480' }}

{{ product | img_url: 'large' }}
```

###### Output

```html
//polinas-potent-potions.myshopify.com/cdn/shop/files/science-beakers-blue-light-new_480x.jpg?v=1683744744

//polinas-potent-potions.myshopify.com/cdn/shop/files/science-beakers-blue-light-new_x480.jpg?v=1683744744

//polinas-potent-potions.myshopify.com/cdn/shop/files/science-beakers-blue-light-new_480x480.jpg?v=1683744744

//polinas-potent-potions.myshopify.com/cdn/shop/files/science-beakers-blue-light-new_large.jpg?v=1683744744
```

#### crop

```oobleck
variable | img_url: crop: string
```

The `crop` parameter allows you to specify which part of the image to show if the specified dimensions result in an aspect ratio that differs from the original. You can use the following values:

* `top`
* `center`
* `bottom`
* `left`
* `right`

The default value is `center`.

###### Code

```liquid
{{ product | img_url: crop: 'bottom' }}
```

###### Output

```html
//polinas-potent-potions.myshopify.com/cdn/shop/files/science-beakers-blue-light-new_small.jpg?v=1683744744
```

#### format

```oobleck
variable | img_url: format: string
```

Specify which file format to use for the image. The valid formats are `pjpg` and `jpg`.

It's not practical to convert a lossy image format, like `jpg`, to a lossless image format, like `png`, so this filter does only the following conversions:

* `png` to `jpg`
* `png` to `pjpg`
* `jpg` to `pjpg`

***

**Note:** Shopify automatically detects which image formats are supported by the client (e.g. \<code>\<span class="PreventFireFoxApplyingGapToWBR">Web\<wbr/>P\</span>\</code>, \<code>\<span class="PreventFireFoxApplyingGapToWBR">A\<wbr/>V\<wbr/>I\<wbr/>F\</span>\</code>, etc.) and selects a file format for optimal quality and file size. When a format is specified, Shopify takes into account the features (e.g. progressive, alpha channel) of the specified file format when making the final automatic format selection. To learn more, visit \<a href="https://cdn.shopify.com/">https://cdn.shopify.com/\</a>.

***

###### Code

```liquid
{{ product | img_url: format: 'pjpg' }}
```

###### Output

```html
//polinas-potent-potions.myshopify.com/cdn/shop/files/science-beakers-blue-light-new_small.jpg?v=1683744744
```

#### scale

```oobleck
variable | img_url: scale: number
```

Specify the pixel density of the image. The valid densities are 2 and 3.

###### Code

```liquid
{{ product | img_url: scale: 2 }}
```

###### Output

```html
//polinas-potent-potions.myshopify.com/cdn/shop/files/science-beakers-blue-light-new_small.jpg?v=1683744744
```

---



<a id="filters-inline-asset-content"></a>


## inline\_​asset\_​content

```oobleck
asset_name | inline_asset_content
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Outputs the content of an asset inline in the template. The asset must be either a SVG, JS, or CSS file.

***

**Note:** The asset size must be less than 15KB to be inlined.

***

###### Code

```liquid
{{ 'icon.svg' | inline_asset_content }}
```

###### Output

```html
'<svg xmlns="http://www.w3.org/2000/svg"/>'
```

---



<a id="filters-item-count-for-variant"></a>


## item\_​count\_​for\_​variant

```oobleck
cart | item_count_for_variant: {variant_id}
```

returns [number](https://shopify.dev/docs/api/liquid/basics#number)

Returns the total item count for a specified variant in the [`cart`](https://shopify.dev/docs/api/liquid/objects/cart) object.

###### Code

```liquid
{{ cart | item_count_for_variant: 39888235757633 }}
```

###### Output

```html
1
```

---



<a id="filters-join"></a>


## join

```oobleck
array | join
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Combines all of the items in an array into a single string, separated by a space.

###### Code

```liquid
{{ collection.all_tags | join }}
```

###### Data

```json
{
  "collection": {
    "all_tags": [
      "extra-potent",
      "fresh",
      "healing",
      "ingredients"
    ]
  }
}
```

###### Output

```html
extra-potent fresh healing ingredients
```

#### Custom separator

```oobleck
array | join: string
```

You can specify a custom separator for the joined items.

###### Code

```liquid
{{ collection.all_tags | join: ', ' }}
```

###### Data

```json
{
  "collection": {
    "all_tags": [
      "extra-potent",
      "fresh",
      "healing",
      "ingredients"
    ]
  }
}
```

###### Output

```html
extra-potent, fresh, healing, ingredients
```

---



<a id="filters-json"></a>


## json

```oobleck
variable | json
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Converts a string, or object, into JSON format.

***

**Tip:** When using the JSON output in JavaScript, you don\&#39;t need to wrap it in quotes because the \<code>json\</code> filter includes them. The \<code>json\</code> filter also escapes any quotes inside the output.

***

##### Product inventory

When applied to a [`product` object](https://shopify.dev/docs/api/liquid/objects/product) on any Shopify store created after December 5, 2017, the `json` filter doesn't output values for the `inventory_quantity` and `inventory_policy` properties of any associated [variants](https://shopify.dev/docs/api/liquid/objects/variant). These properties are excluded to help prevent bots and crawlers from retrieving inventory quantities for stores to which they aren't granted access.

If you need inventory information, you can access it through individual variants.

###### Code

```liquid
{{ product | json }}
```

###### Output

```html
{"id":6792602320961,"title":"Crocodile tears","handle":"crocodile-tears","description":"","published_at":"2022-04-22T11:55:58-04:00","created_at":"2022-04-22T11:55:56-04:00","vendor":"Polina's Potent Potions","type":"","tags":["Salty"],"price":5600,"price_min":5600,"price_max":5600,"available":false,"price_varies":false,"compare_at_price":null,"compare_at_price_min":0,"compare_at_price_max":0,"compare_at_price_varies":false,"variants":[{"id":39888242344001,"title":"Default Title","option1":"Default Title","option2":null,"option3":null,"sku":"","requires_shipping":true,"taxable":true,"featured_image":null,"available":false,"name":"Crocodile tears","public_title":null,"options":["Default Title"],"price":5600,"weight":0,"compare_at_price":null,"inventory_management":"shopify","barcode":"","requires_selling_plan":false,"selling_plan_allocations":[],"quantity_rule":{"min":1,"max":null,"increment":1}}],"images":["\/\/polinas-potent-potions.myshopify.com\/cdn\/shop\/products\/amber-beard-oil-bottle.jpg?v=1650642958"],"featured_image":"\/\/polinas-potent-potions.myshopify.com\/cdn\/shop\/products\/amber-beard-oil-bottle.jpg?v=1650642958","options":["Title"],"media":[{"alt":null,"id":21772501975105,"position":1,"preview_image":{"aspect_ratio":1.5,"height":2974,"width":4460,"src":"\/\/polinas-potent-potions.myshopify.com\/cdn\/shop\/products\/amber-beard-oil-bottle.jpg?v=1650642958"},"aspect_ratio":1.5,"height":2974,"media_type":"image","src":"\/\/polinas-potent-potions.myshopify.com\/cdn\/shop\/products\/amber-beard-oil-bottle.jpg?v=1650642958","width":4460}],"requires_selling_plan":false,"selling_plan_groups":[],"content":""}
```

---



<a id="filters-last"></a>


## last

```oobleck
array | last
```

Returns the last item in an array.

###### Code

```liquid
{%- assign last_product = collection.products | last -%}

{{ last_product.title }}
```

###### Data

```json
{
  "collection": {
    "products": [
      {
        "title": "Blue Mountain Flower"
      },
      {
        "title": "Charcoal"
      },
      {
        "title": "Crocodile tears"
      },
      {
        "title": "Dandelion milk"
      },
      {
        "title": "Draught of Immortality"
      },
      {
        "title": "Dried chamomile"
      },
      {
        "title": "Forest mushroom"
      },
      {
        "title": "Gift Card"
      },
      {
        "title": "Glacier ice"
      },
      {
        "title": "Ground mandrake root"
      },
      {
        "title": "Health potion"
      },
      {
        "title": "Invisibility potion"
      },
      {
        "title": "Komodo dragon scale"
      },
      {
        "title": "Love Potion"
      },
      {
        "title": "Mana potion"
      },
      {
        "title": "Potion beats"
      },
      {
        "title": "Potion bottle"
      },
      {
        "title": "Viper venom"
      },
      {
        "title": "Whole bloodroot"
      }
    ]
  }
}
```

###### Output

```html
Whole bloodroot
```

#### Dot notation

You can use the `last` filter with dot notation when you need to use it inside a tag or object output.

###### Code

```liquid
{{ collection.products.last.title }}
```

###### Data

```json
{
  "collection": {
    "products": [
      {
        "title": "Blue Mountain Flower"
      },
      {
        "title": "Charcoal"
      },
      {
        "title": "Crocodile tears"
      },
      {
        "title": "Dandelion milk"
      },
      {
        "title": "Draught of Immortality"
      },
      {
        "title": "Dried chamomile"
      },
      {
        "title": "Forest mushroom"
      },
      {
        "title": "Gift Card"
      },
      {
        "title": "Glacier ice"
      },
      {
        "title": "Ground mandrake root"
      },
      {
        "title": "Health potion"
      },
      {
        "title": "Invisibility potion"
      },
      {
        "title": "Komodo dragon scale"
      },
      {
        "title": "Love Potion"
      },
      {
        "title": "Mana potion"
      },
      {
        "title": "Potion beats"
      },
      {
        "title": "Potion bottle"
      },
      {
        "title": "Viper venom"
      },
      {
        "title": "Whole bloodroot"
      }
    ]
  }
}
```

###### Output

```html
Whole bloodroot
```

---



<a id="filters-line-items-for"></a>


## line\_​items\_​for

```oobleck
cart | line_items_for: object
```

returns array of [line\_item](https://shopify.dev/docs/api/liquid/objects/line_item)

Returns the subset of [`cart`](https://shopify.dev/docs/api/liquid/objects/cart) line items that include a specified product or variant.

Accepts the following object types:

* `product`
* `variant`

###### Code

```liquid
{% assign product = all_products['bloodroot-whole'] %}
{% assign line_items = cart | line_items_for: product %}

Total cart quantity for product: {{ line_items | sum: 'quantity' }}
```

###### Data

```json
{
  "all_products": {
    "bloodroot-whole": {}
  }
}
```

###### Output

```html
Total cart quantity for product: 1
```

###### Code

```liquid
{% assign product = all_products['bloodroot-whole'] %}
{% assign variant = product.variants.first %}
{% assign line_items = cart | line_items_for: variant %}

Total cart quantity for variant: {{ line_items | sum: 'quantity' }}
```

###### Data

```json
{
  "all_products": {
    "bloodroot-whole": {
      "variants": []
    }
  },
  "product": {
    "variants": []
  }
}
```

###### Output

```html
Total cart quantity for variant: 1
```

---



<a id="filters-link-to"></a>


## link\_​to

```oobleck
string | link_to: string
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Generates an HTML `<a>` tag.

###### Code

```liquid
{{ 'Shopify' | link_to: 'https://www.shopify.com' }}
```

###### Output

```html
<a href="https://www.shopify.com" title="" rel="nofollow">Shopify</a>
```

#### HTML attributes

```oobleck
string | link_to_type: attribute: string
```

You can specify [HTML attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attributes) by including a parameter that matches the attribute name, and the desired value.

###### Code

```liquid
{{ 'Shopify' | link_to: 'https://www.shopify.com', class: 'link-class' }}
```

###### Output

```html
<a class="link-class" href="https://www.shopify.com" rel="nofollow">Shopify</a>
```

---



<a id="filters-link-to-add-tag"></a>


## link\_​to\_​add\_​tag

```oobleck
string | link_to_add_tag
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Generates an HTML `<a>` tag with an `href` attribute linking to the current blog or collection, filtered to show only articles or products that have a given tag, as well as any currently active tags.

***

**Tip:** To learn more about filtering by tag, refer to \<a href="/themes/architecture/templates/blog#filter-articles-by-tag">Filter articles by tag\</a> or \<a href="/themes/navigation-search/filtering/tag-filtering">Filter collections by tag\</a>.

***

###### Code

```liquid
{% for tag in collection.all_tags %}
  {%- if current_tags contains tag -%}
    {{ tag }}
  {%- else -%}
    {{ tag | link_to_add_tag: tag }}
  {%- endif -%}
{% endfor %}
```

###### Data

```json
{
  "collection": {
    "all_tags": [
      "extra-potent",
      "fresh",
      "healing",
      "ingredients"
    ]
  },
  "template": "collection"
}
```

###### Output

```html
<a href="/services/liquid_rendering/extra-potent" title="Narrow selection to products matching tag extra-potent">extra-potent</a>

<a href="/services/liquid_rendering/fresh" title="Narrow selection to products matching tag fresh">fresh</a>

<a href="/services/liquid_rendering/healing" title="Narrow selection to products matching tag healing">healing</a>

<a href="/services/liquid_rendering/ingredients" title="Narrow selection to products matching tag ingredients">ingredients</a>
```

---



<a id="filters-link-to-remove-tag"></a>


## link\_​to\_​remove\_​tag

```oobleck
string | link_to_remove_tag
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Generates an HTML `<a>` tag with an `href` attribute linking to the current blog or collection, filtered to show only articles or products that have any currently active tags, except the provided tag.

***

**Tip:** To learn more about filtering by tag, refer to \<a href="/themes/architecture/templates/blog#filter-articles-by-tag">Filter articles by tag\</a> or \<a href="/themes/navigation-search/filtering/tag-filtering">Filter collections by tag\</a>.

***

###### Code

```liquid
{% for tag in collection.all_tags %}
  {%- if current_tags contains tag -%}
    {{ tag | link_to_remove_tag: tag }}
  {%- else -%}
    {{ tag | link_to_add_tag: tag }}
  {%- endif -%}
{% endfor %}
```

###### Data

```json
{
  "collection": {
    "all_tags": [
      "extra-potent",
      "fresh",
      "healing",
      "ingredients"
    ]
  },
  "template": "collection"
}
```

###### Output

```html
<a href="/services/liquid_rendering/extra-potent" title="Narrow selection to products matching tag extra-potent">extra-potent</a>

<a href="/services/liquid_rendering/fresh" title="Narrow selection to products matching tag fresh">fresh</a>

<a href="/services/liquid_rendering/healing" title="Narrow selection to products matching tag healing">healing</a>

<a href="/services/liquid_rendering/ingredients" title="Narrow selection to products matching tag ingredients">ingredients</a>
```

---



<a id="filters-link-to-tag"></a>


## link\_​to\_​tag

```oobleck
string | link_to_tag
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Generates an HTML `<a>` tag with an `href` attribute linking to the current blog or collection, filtered to show only articles or products that have a given tag.

***

**Tip:** To learn more about filtering by tag, refer to \<a href="/themes/architecture/templates/blog#filter-articles-by-tag">Filter articles by tag\</a> or \<a href="/themes/navigation-search/filtering/tag-filtering">Filter collections by tag\</a>.

***

###### Code

```liquid
{% for tag in collection.all_tags %}
  {{- tag | link_to_tag: tag }}
{% endfor %}
```

###### Data

```json
{
  "collection": {
    "all_tags": [
      "extra-potent",
      "fresh",
      "healing",
      "ingredients"
    ]
  },
  "template": "collection"
}
```

###### Output

```html
<a href="/services/liquid_rendering/extra-potent" title="Show products matching tag extra-potent">extra-potent</a>

<a href="/services/liquid_rendering/fresh" title="Show products matching tag fresh">fresh</a>

<a href="/services/liquid_rendering/healing" title="Show products matching tag healing">healing</a>

<a href="/services/liquid_rendering/ingredients" title="Show products matching tag ingredients">ingredients</a>
```

---



<a id="filters-link-to-type"></a>


## link\_​to\_​type

```oobleck
string | link_to_type
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Generates an HTML `<a>` tag with an `href` attribute linking to a [collection page](https://shopify.dev/docs/storefronts/themes/architecture/templates/collection) that lists all products of the given product type.

###### Code

```liquid
{{ 'Health' | link_to_type }}
```

###### Output

```html
<a href="/collections/types?q=Health" title="Health">Health</a>
```

#### HTML attributes

```oobleck
string | link_to_type: attribute: string
```

You can specify [HTML attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attributes) by including a parameter that matches the attribute name, and the desired value.

###### Code

```liquid
{{ 'Health' | link_to_type: class: 'link-class' }}
```

###### Output

```html
<a class="link-class" href="/collections/types?q=Health" title="Health">Health</a>
```

---



<a id="filters-link-to-vendor"></a>


## link\_​to\_​vendor

```oobleck
string | link_to_vendor
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Generates an HTML `<a>` tag with an `href` attribute linking to a [collection page](https://shopify.dev/docs/storefronts/themes/architecture/templates/collection) that lists all products of a given product vendor.

###### Code

```liquid
{{ "Polina's Potent Potions" | link_to_vendor }}
```

###### Output

```html
<a href="/collections/vendors?q=Polina%27s%20Potent%20Potions" title="Polina&#39;s Potent Potions">Polina's Potent Potions</a>
```

#### HTML attributes

```oobleck
string | link_to_vendor: attribute: string
```

You can specify [HTML attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attributes) by including a parameter that matches the attribute name, and the desired value.

###### Code

```liquid
{{ "Polina's Potent Potions" | link_to_vendor: class: 'link-class' }}
```

###### Output

```html
<a class="link-class" href="/collections/vendors?q=Polina%27s%20Potent%20Potions" title="Polina&#39;s Potent Potions">Polina's Potent Potions</a>
```

---



<a id="filters-login-button"></a>


## login\_​button

```oobleck
shop | login_button
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Generates an HTML Button that enables a customer to either sign in to the storefront using their Shop account or follow the shop in the Shop App.

***

**Note:** The presence of the \<a href="/docs/api/liquid/objects/shop">shop\</a> object is required for validation purposes only.

***

#### action

```oobleck
shop | login_button: action: string
```

Controls the behavior of the button after authentication.

Accepts the following values:

* `default` - Authentication only
* `follow` - Performs a side-effect after authentication which follows the current shop in the Shop app. Requires additional configuration. [Learn more](https://help.shopify.com/manual/online-store/themes/customizing-themes/follow-on-shop)

```liquid
{{ shop | login_button: action: 'follow' }}
```

```liquid
{{ shop | login_button: action: 'follow' }}
```

---



<a id="filters-lstrip"></a>


## lstrip

```oobleck
string | lstrip
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Strips all whitespace from the left of a string.

###### Code

```liquid
{%- assign text = '  Some potions create whitespace.      ' -%}

"{{ text }}"
"{{ text | lstrip }}"
```

###### Output

```html
"  Some potions create whitespace.      "
"Some potions create whitespace.      "
```

---



<a id="filters-map"></a>


## map

```oobleck
array | map: string
```

Creates an array of values from a specific property of the items in an array.

###### Code

```liquid
{%- assign product_titles = collection.products | map: 'title' -%}

{{ product_titles | join: ', ' }}
```

###### Data

```json
{
  "collection": {
    "products": [
      {
        "title": "Draught of Immortality"
      },
      {
        "title": "Glacier ice"
      },
      {
        "title": "Health potion"
      },
      {
        "title": "Invisibility potion"
      }
    ]
  }
}
```

###### Output

```html
Draught of Immortality, Glacier ice, Health potion, Invisibility potion
```

---



<a id="filters-md5"></a>


## md5

```oobleck
string | md5
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Converts a string into an MD5 hash. MD5 is not considered safe anymore. Please use ['blake3'](https://shopify.dev/docs/api/liquid/filters/blake3) instead for better security and performance.

###### Code

```liquid
{{ '' | md5 }}
```

###### Output

```html
d41d8cd98f00b204e9800998ecf8427e
```

---



<a id="filters-media-tag"></a>


## media\_​tag

```oobleck
media | media_tag
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Generates an appropriate HTML tag for a given media object.

###### Code

```liquid
{% for media in product.media %}
  {{- media | media_tag }}
{% endfor %}
```

###### Data

```json
{
  "product": {
    "media": []
  }
}
```

###### Output

```html
<iframe frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen" src="https://www.youtube.com/embed/vj01PAffOac?controls=1&amp;enablejsapi=1&amp;modestbranding=1&amp;origin=https%3A%2F%2Fpolinas-potent-potions.myshopify.com&amp;playsinline=1&amp;rel=0" title="Potion beats"></iframe>

<video playsinline="playsinline" controls="controls" preload="metadata" aria-label="Potion beats" poster="//polinas-potent-potions.myshopify.com/cdn/shop/products/4edc28a708b7405093a927cebe794f1a.thumbnail.0000000_small.jpg?v=1655255324"><source src="//polinas-potent-potions.myshopify.com/cdn/shop/videos/c/vp/4edc28a708b7405093a927cebe794f1a/4edc28a708b7405093a927cebe794f1a.HD-1080p-7.2Mbps.mp4?v=0" type="video/mp4"><img src="//polinas-potent-potions.myshopify.com/cdn/shop/products/4edc28a708b7405093a927cebe794f1a.thumbnail.0000000_small.jpg?v=1655255324"></video>
```

#### image\_size

```oobleck
media | media_tag: image_size: string
```

Specify the dimensions of the media's poster image in pixels.

###### Code

```liquid
{% for media in product.media %}
  {{- media | media_tag: image_size: '400x' }}
{% endfor %}
```

###### Data

```json
{
  "product": {
    "media": []
  }
}
```

###### Output

```html
<iframe frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen" image_size="400x" src="https://www.youtube.com/embed/vj01PAffOac?controls=1&amp;enablejsapi=1&amp;modestbranding=1&amp;origin=https%3A%2F%2Fpolinas-potent-potions.myshopify.com&amp;playsinline=1&amp;rel=0" title="Potion beats"></iframe>

<video playsinline="playsinline" controls="controls" preload="metadata" aria-label="Potion beats" poster="//polinas-potent-potions.myshopify.com/cdn/shop/products/4edc28a708b7405093a927cebe794f1a.thumbnail.0000000_400x.jpg?v=1655255324"><source src="//polinas-potent-potions.myshopify.com/cdn/shop/videos/c/vp/4edc28a708b7405093a927cebe794f1a/4edc28a708b7405093a927cebe794f1a.HD-1080p-7.2Mbps.mp4?v=0" type="video/mp4"><img src="//polinas-potent-potions.myshopify.com/cdn/shop/products/4edc28a708b7405093a927cebe794f1a.thumbnail.0000000_400x.jpg?v=1655255324"></video>
```

---



<a id="filters-metafield-tag"></a>


## metafield\_​tag

```oobleck
metafield | metafield_tag
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Generates an HTML element to host the data from a [`metafield` object](https://shopify.dev/docs/api/liquid/objects/metafield). The type of element that's generated differs depending on the type of metafield.

***

**Note:** The \<code>\<span class="PreventFireFoxApplyingGapToWBR">metafield\<wbr/>\_tag\</span>\</code> filter doesn\&#39;t currently support list metafields other than \<code>\<span class="PreventFireFoxApplyingGapToWBR">list.single\<wbr/>\_line\<wbr/>\_text\<wbr/>\_field\</span>\</code> and \<code>\<span class="PreventFireFoxApplyingGapToWBR">list.metaobject\<wbr/>\_reference\</span>\</code>.

***

#### Basic types

Most metafield types return a simple HTML element:

| Type | Element | Attributes |
| - | - | - |
| `boolean` | `<span>` | `class="metafield-boolean"` |
| `collection_reference` | `<a>` | `class="metafield-collection_reference"` |
| `color` | `<span>` | `class="metafield-color"` |
| `date` | `<time>` | `datetime="&lt;the metafield value&gt;"` `class="metafield-date"` Value is localized to the customer |
| `date_time` | `<time>` | `datetime="&lt;the metafield value&gt;"` `class="metafield-date"` Value is localized to the customer |
| `json` | `<script>` | `type="application/json"`\<br>\<br>`class="metafield-json"` |
| `money` | `<span>` | `class="metafield-money"` Value is formatted using the store's [HTML with currency setting](https://help.shopify.com/manual/payments/currency-formatting) |
| `multi_line_text_field` | `<span>` | `class="metafield-multi_line_text_field"` |
| `number_decimal` | `<span>` | `class="metafield-number_decimal"` |
| `number_integer` | `<span>` | `class="metafield-number_integer"` |
| `page_reference` | `<a>` | `class="metafield-page_reference"` |
| `product_reference` | `<a>` | `class="metafield-page_reference"` |
| `rating` | `<span>` | `class="metafield-rating"` |
| `single_line_text_field` | `<span>` | `class="metafield-single_line_text_field"` |
| `url` | `<a>` | `class="metafield-url"` |
| `variant_reference` | `<a>` | `class="metafield-variant_reference"` |
| `rich_text_field` | `<div>` | `class="metafield-rich_text_field"` |

###### Code

```liquid
<!-- boolean -->
{{ product.metafields.information.seasonal | metafield_tag }}

<!-- collection_reference -->
{{ product.metafields.information.related_collection | metafield_tag }}

<!-- color -->
{{ product.metafields.details.potion_color | metafield_tag }}

<!-- date -->
{{ product.metafields.information.expiry | metafield_tag }}

<!-- date_time -->
{{ product.metafields.information.brew_date | metafield_tag }}

<!-- json -->
{{ product.metafields.information.burn_temperature | metafield_tag }}

<!-- money -->
{{ product.metafields.details.price_per_ml | metafield_tag }}

<!-- multi_line_text_field -->
{{ product.metafields.information.shipping | metafield_tag }}

<!-- number_decimal -->
{{ product.metafields.information.salinity | metafield_tag }}

<!-- number_integer -->
{{ product.metafields.information.doses_per_day | metafield_tag }}

<!-- page_reference -->
{{ product.metafields.information.dosage | metafield_tag }}

<!-- product_reference -->
{{ product.metafields.information.related_product | metafield_tag }}

<!-- rating -->
{{ product.metafields.details.rating | metafield_tag }}

<!-- single_line_text_field -->
{{ product.metafields.information.directions | metafield_tag }}

<!-- url -->
{{ product.metafields.information.health | metafield_tag }}

<!-- variant_reference -->
{{ product.metafields.information.best_seller | metafield_tag }}

<!-- rich_text_field -->
{{ product.metafields.information.rich_description | metafield_tag }}
```

###### Data

```json
{
  "product": {
    "metafields": {}
  }
}
```

###### Output

```html
<!-- boolean -->
<span class="metafield-boolean">false</span>

<!-- collection_reference -->
<a href="/collections/sale-potions" class="metafield-collection_reference">Sale potions</a>

<!-- color -->
<span class="metafield-color">#ff0000</span>

<!-- date -->
<time datetime="2040-01-01" class="metafield-date">January 1, 2040</time>

<!-- date_time -->
<time datetime="2022-06-22T13:00:00Z" class="metafield-date_time">Jun 22, 2022, 1:00 pm</time>

<!-- json -->
<script type="application/json" class="metafield-json">{"temperature":"700","unit":"degrees","scale":"Fahrenheit"}</script>

<!-- money -->
<span class="metafield-money">$0.10 CAD</span>

<!-- multi_line_text_field -->
<span class="metafield-multi_line_text_field">All health potions are made to order, so it might take up to 2 weeks before your order can be shipped.<br />
<br />
Thanks for your patience!</span>

<!-- number_decimal -->
<span class="metafield-number_decimal">8.4</span>

<!-- number_integer -->
<span class="metafield-number_integer">3</span>

<!-- page_reference -->
<a href="/pages/potion-dosages" class="metafield-page_reference">Potion dosages</a>

<!-- product_reference -->
<a href="/products/dried-chamomile" class="metafield-product_reference">Dried chamomile</a>

<!-- rating -->
<span class="metafield-rating">4.5</span>

<!-- single_line_text_field -->
<span class="metafield-single_line_text_field">Take with a meal.</span>

<!-- url -->
<a href="https://www.canada.ca/en/health-canada/services/food-nutrition/legislation-guidelines/acts-regulations/canada-food-drugs.html" class="metafield-url">www.canada.ca/en/health-canada/services/food-nutrition/legislation-guidelines/acts-regulations/canada-food-drugs.html</a>

<!-- variant_reference -->
<a href="/products/health-potion?variant=39897499762753" class="metafield-variant_reference">S / Medium</a>

<!-- rich_text_field -->
<div class="metafield-rich_text_field"><h3>Are you low on health? Well we&#39;ve got the potion just for you!</h3><p>Just need a top up? Almost dead? In between? No need to worry because we have a range of sizes and strengths!</p></div>
```

#### Complex types

The following metafield types return nested elements, or different elements depending on the metafield contents:

* [`dimension`](https://shopify.dev/docs/api/liquid/filters/metafield_tag#metafield_tag-dimension)
* [`file_reference`](https://shopify.dev/docs/api/liquid/filters/metafield_tag#metafield_tag-file_reference)
* [`list.metaobject_reference`](https://shopify.dev/docs/api/liquid/filters/metafield_tag#metafield_tag-list.metaobject_reference)
* [`list.single_line_text_field`](https://shopify.dev/docs/api/liquid/filters/metafield_tag#metafield_tag-list.single_line_text_field)
* [`metaobject_reference`](https://shopify.dev/docs/api/liquid/filters/metafield_tag#metafield_tag-metaobject_reference)
* [`volume`](https://shopify.dev/docs/api/liquid/filters/metafield_tag#metafield_tag-volume)
* [`weight`](https://shopify.dev/docs/api/liquid/filters/metafield_tag#metafield_tag-weight)

#### dimension

Outputs a `<span>` element with the following attribute:

| Attribute | Value |
| - | - |
| `class` | `metafield-dimension` |

The `<span>` element contains the following child elements:

| Child element | HTML element | Attributes |
| - | - | - |
| The dimension value. If it's a decimal with more than two places, then it'll be formatted to have a precision of two with trailing zeros removed. | `<span>` | `class="metafield-dimension_value"` |
| The dimension unit. | `<span>` | `class="metafield-dimension_unit"` |

###### Code

```liquid
{{ product.metafields.details.scale_width | metafield_tag }}
```

###### Data

```json
{
  "product": {
    "metafields": {}
  }
}
```

###### Output

```html
<span class="metafield-dimension"><span class="metafield-dimension_value">3 </span><span class="metafield-dimension_unit">cm</span></span>
```

#### file\_reference

The output varies depending on the type of file. There are the following categories of file type:

| File type | Description |
| - | - |
| Image | Images in the format of `jpg`, `png`, `gif`, `heic`, and `webp`. |
| Video | Videos in the format of `mov`, and `mp4`. |
| Other | Any other file type. |

###### Image

Outputs an `<img>` element with the following attributes:

| Attribute | Value |
| - | - |
| `src` | The image's URL. |
| `alt` | The image's alt text. |
| `class` | `metafield-file_reference` |

###### Video

Outputs a `<video>` element with the following attributes:

| Attribute | Value |
| - | - |
| `src` | The video's URL. |
| `poster` | The video's preview image (poster) URL. |
| `playsinline` | N/A - Indicates the video will be played "inline" within the element's playback area. |
| `preload` | `metadata` - Only metadata is pre-fetched before the video is played. |

The `<video>` element contains the following child elements:

| Child element | HTML element | Attributes |
| - | - | - |
| The video's multimedia playlist source, for [HTTP live streaming (HLS)](https://developer.apple.com/streaming/) | `&lt;source&gt;` | `src="&lt;the video's m3u8 source URL>"`\<br>\<br>`type="application/x-mpegURL"` |
| The video's original source | `&lt;source&gt;` | `src="&lt;the video's source URL&gt;"`\<br>\<br>`type="&lt;the video's original source MIME type>"` |
| The video's preview (poster) image | `&lt;img&gt;` | `src="&lt;the video's preview image URL>"` |

###### Other

Outputs an `<a>` element with a link to the file and the following attribute:

| Attribute | Value |
| - | - |
| `class` | `metafield-file_reference` |

The `<a>` element contains an `<img>` element for the file's [preview image](https://shopify.dev/docs/api/liquid/objects/generic_file#generic_file-preview_image) with the following attributes:

| Attribute | Value |
| - | - |
| `src` | The file's preview image URL. |
| `loading` | `lazy` - The image isn't loaded until it's almost in view. |

###### Code

```liquid
<!-- Image -->
{{ product.metafields.information.promo_image | metafield_tag }}

<!-- Video -->
{{ product.metafields.information.promo_video | metafield_tag }}

<!-- Other -->
{{ product.metafields.information.disclaimers | metafield_tag }}
```

###### Data

```json
{
  "product": {
    "metafields": {}
  }
}
```

###### Output

```html
<!-- Image -->
<img src="//polinas-potent-potions.myshopify.com/cdn/shop/files/potions-header.png?v=1650325393" loading="lazy" class="metafield-file_reference">

<!-- Video -->
<video playsinline="playsinline" preload="metadata" poster="//polinas-potent-potions.myshopify.com/cdn/shop/files/preview_images/4733c31cd9d744f6994f61458fda85e6.thumbnail.0000000_small.jpg?v=1655257099"><source src="//polinas-potent-potions.myshopify.com/cdn/shop/videos/c/vp/4733c31cd9d744f6994f61458fda85e6/4733c31cd9d744f6994f61458fda85e6.HD-1080p-7.2Mbps.mp4?v=0" type="video/mp4"><img src="//polinas-potent-potions.myshopify.com/cdn/shop/files/preview_images/4733c31cd9d744f6994f61458fda85e6.thumbnail.0000000_small.jpg?v=1655257099"></video>

<!-- Other -->
<a href="//polinas-potent-potions.myshopify.com/cdn/shop/files/disclaimer.pdf?v=9043651738044769859" class="metafield-file_reference"><img src="//polinas-potent-potions.myshopify.com/cdn/shop/files/preview_images/document-7f23220eb4be7eeaa6e225738b97d943f22e74367cd2d7544fc3b37fb36acd71.png?v=1653087800" loading="lazy"></a>
```

#### list.metaobject\_reference

```oobleck
metafield | metafield_tag: field: string
```

Outputs a `<ul>` element by default with the following attribute:

| Attribute | Value |
| - | - |
| `class` | `metafield-single_line_text_field-array` |

The `<ul>` element contains an `<li>` element for each metaobject in the list with a `class` of `metafield-single_line_text_field`. The required `field` parameter specifies which field should be rendered for each metaobject. The `field` parameter can reference only metafields of type `single_line_text_field`.

To output an `<ol>` element, pass the `list_format` parameter with a value of `ordered`.

###### Code

```liquid
<!-- <ul> element -->
{{ product.metafields.information.ingredients | metafield_tag: field: 'name' }}

<!-- <ol> element -->
{{ product.metafields.information.ingredients | metafield_tag: field: 'name', list_format: 'ordered' }}
```

###### Data

```json
{
  "product": {
    "metafields": {}
  }
}
```

###### Output

```html
<!-- <ul> element -->
<ul class="metafield-single_line_text_field-array"><li class="metafield-single_line_text_field">Spinach</li><li class="metafield-single_line_text_field">Kale</li><li class="metafield-single_line_text_field">Mushrooms</li></ul>

<!-- <ol> element -->
<ol class="metafield-single_line_text_field-array"><li class="metafield-single_line_text_field">Spinach</li><li class="metafield-single_line_text_field">Kale</li><li class="metafield-single_line_text_field">Mushrooms</li></ol>
```

#### list.single\_line\_text\_field

Outputs a `<ul>` element by default with the following attribute:

| Attribute | Value |
| - | - |
| `class` | `metafield-single_line_text_field-array` |

The `<ul>` element contains an `<li>` element for each item in the list with a `class` of `metafield-single_line_text_field`.

To output an `<ol>` element, pass the `list_format` parameter with a value of `ordered`.

###### Code

```liquid
<!-- <ul> element -->
{{ product.metafields.information.pickup_locations | metafield_tag }}

<!-- <ol> element -->
{{ product.metafields.information.pickup_locations | metafield_tag: list_format: 'ordered' }}
```

###### Data

```json
{
  "product": {
    "metafields": {}
  }
}
```

###### Output

```html
<!-- <ul> element -->
<ul class="metafield-single_line_text_field-array"><li class="metafield-single_line_text_field">Ottawa</li><li class="metafield-single_line_text_field">Toronto</li><li class="metafield-single_line_text_field">Montreal</li><li class="metafield-single_line_text_field">Vancouver</li></ul>

<!-- <ol> element -->
<ol class="metafield-single_line_text_field-array"><li class="metafield-single_line_text_field">Ottawa</li><li class="metafield-single_line_text_field">Toronto</li><li class="metafield-single_line_text_field">Montreal</li><li class="metafield-single_line_text_field">Vancouver</li></ol>
```

#### metaobject\_reference

```oobleck
metafield | metafield_tag: field: string
```

Outputs an HTML element for the metaobject field specified by the required `field` parameter. The `field` parameter can reference only metafields of type `single_line_text_field`.

###### Code

```liquid
{{ product.metafields.information.primary_ingredient | metafield_tag: field: 'name' }}
```

###### Data

```json
{
  "product": {
    "metafields": {}
  }
}
```

###### Output

```html
<span class="metafield-single_line_text_field">Spinach</span>
```

#### volume

Outputs a `<span>` element with the following attribute:

| Attribute | Value |
| - | - |
| `class` | `metafield-volume` |

The `<span>` element contains the following child elements:

| Child element | HTML element | Attributes |
| - | - | - |
| The volume value. If it's a decimal with more than two places, then it'll be formatted to have a precision of two with trailing zeros removed. | `<span>` | `class="metafield-volume_value"` |
| The volume unit. | `<span>` | `class="metafield-volume_unit"` |

###### Code

```liquid
{{ product.metafields.details.milk_container_volume | metafield_tag }}
```

###### Data

```json
{
  "product": {
    "metafields": {}
  }
}
```

###### Output

```html
<span class="metafield-volume"><span class="metafield-volume_value">500 </span><span class="metafield-volume_unit">mL</span></span>
```

#### weight

Outputs a `<span>` element with the following attribute:

| Attribute | Value |
| - | - |
| `class` | `metafield-weight` |

The `<span>` element contains the following child elements:

| Child element | HTML element | Attributes |
| - | - | - |
| The weight value. If it's a decimal with more than two places, then it'll be formatted to have a precision of two with trailing zeros removed. | `<span>` | `class="metafield-weight_value"` |
| The weight unit. | `<span>` | `class="metafield-weight_unit"` |

###### Code

```liquid
{{ product.metafields.details.chamomile_base_weight | metafield_tag }}
```

###### Data

```json
{
  "product": {
    "metafields": {}
  }
}
```

###### Output

```html
<span class="metafield-weight"><span class="metafield-weight_value">50 </span><span class="metafield-weight_unit">g</span></span>
```

---



<a id="filters-metafield-text"></a>


## metafield\_​text

```oobleck
metafield | metafield_text
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Generates a text version of the data from a [`metafield` object](https://shopify.dev/docs/api/liquid/objects/metafield).

***

**Note:** The \<code>\<span class="PreventFireFoxApplyingGapToWBR">metafield\<wbr/>\_text\</span>\</code> filter doesn\&#39;t currently support list metafields other than \<code>\<span class="PreventFireFoxApplyingGapToWBR">list.single\<wbr/>\_line\<wbr/>\_text\<wbr/>\_field\</span>\</code> and \<code>\<span class="PreventFireFoxApplyingGapToWBR">list.metaobject\<wbr/>\_reference\</span>\</code>.

***

#### Basic types

The following outlines the output for each metafield type:

| Metafield type | Output |
| - | - |
| `single_line_text_field` | The metafield text. |
| `multi_line_text_field` | The metafield text. |
| `page_reference` | The page title. |
| `product_reference` | The product title. |
| `collection_reference` | The collection title. |
| `variant_reference` | The variant title. |
| `file_reference` | The file URL. |
| `number_integer` | The number. |
| `number_decimal` | The number. |
| `date` | The date. |
| `date-time` | The date and time. |
| `url` | The URL. |
| `json` | The JSON. |
| `boolean` | The boolean value. |
| `color` | The color value. |
| `weight` | The weight value and unit. If the value is a decimal with more than two places, then it'll be formatted to have a precision of two with trailing zeros removed. |
| `volume` | The volume value and unit. If the value is a decimal with more than two places, then it'll be formatted to have a precision of two with trailing zeros removed. |
| `dimension` | The dimension value and unit. If the value is a decimal with more than two places, then it'll be formatted to have a precision of two with trailing zeros removed. |
| `rating` | The rating value. |
| `list.single_line_text_field` | The metafield values in sentence format. For example, if you had the values `Toronto`, `Ottawa`, and `Vancouver`, then the output would be: `Toronto, Ottawa, and Vancouver` |
| `money` | The money value, formatted using the store's [**HTML with currency** setting](https://help.shopify.com/manual/payments/currency-formatting). |
| `rich_text_field` | The rich text value as simple text. |

###### Code

```liquid
{{ product.metafields.information.dosage | metafield_text }}
```

###### Data

```json
{
  "product": {
    "metafields": {}
  }
}
```

###### Output

```html
Potion dosages
```

#### Complex types

The following metafield types produce different output depending on the provided `field` parameter:

* [`list.metaobject_reference`](https://shopify.dev/docs/api/liquid/filters/metafield_text#metafield_text-list.metaobject_reference)
* [`metaobject_reference`](https://shopify.dev/docs/api/liquid/filters/metafield_text#metafield_text-metaobject_reference)

#### list.metaobject\_reference

```oobleck
metafield | metafield_text: field: string
```

Outputs the list of metaobjects in sentence format. The required `field` parameter specifies which field should be rendered for each metaobject. The `field` parameter can reference only metafields of type `single_line_text_field`.

###### Code

```liquid
{{ product.metafields.information.ingredients | metafield_text: field: 'name' }}
```

###### Data

```json
{
  "product": {
    "metafields": {}
  }
}
```

###### Output

```html
Spinach, Kale, and Mushrooms
```

#### metaobject\_reference

```oobleck
metafield | metafield_text: field: string
```

Outputs the metafield text for the metaobject field specified by the required `field` parameter. The `field` parameter can reference only metafields of type `single_line_text_field`.

###### Code

```liquid
{{ product.metafields.information.primary_ingredient | metafield_tag: field: 'name' }}
```

###### Data

```json
{
  "product": {
    "metafields": {}
  }
}
```

###### Output

```html
<span class="metafield-single_line_text_field">Spinach</span>
```

---



<a id="filters-minus"></a>


## minus

```oobleck
number | minus: number
```

returns [number](https://shopify.dev/docs/api/liquid/basics#number)

Subtracts a given number from another number.

###### Code

```liquid
{{ 4 | minus: 2 }}
```

###### Output

```html
2
```

---



<a id="filters-model-viewer-tag"></a>


## model\_​viewer\_​tag

```oobleck
media | model_viewer_tag
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Generates a [Google model viewer component](https://modelviewer.dev/) for a given 3D model.

###### Code

```liquid
{% for media in product.media %}
  {% if media.media_type == 'model' %}
    {{ media | model_viewer_tag }}
  {% endif %}
{% endfor %}
```

###### Data

```json
{
  "product": {
    "media": [
      {
        "media_type": "model"
      }
    ]
  }
}
```

###### Output

```html
<model-viewer src="//polinas-potent-potions.myshopify.com/cdn/shop/3d/models/o/eb9388299ce0557c/WaterBottle.glb?v=0" camera-controls="true" style="--poster-color: transparent;" data-shopify-feature="1.12" alt="Potion bottle" poster="//polinas-potent-potions.myshopify.com/cdn/shop/products/WaterBottle_small.jpg?v=1655189057"></model-viewer>
```

#### Model viewer attributes

```oobleck
media | model_viewer_tag: attribute: string
```

By default, the model viewer component has the following attributes:

| Attribute | Value |
| - | - |
| `alt` | `[alt-text]` - The media's alt text. |
| `poster` | `[preview-image-url]` - The media's preview image URL. |
| `camera-controls` | N/A - Allows for controls via mouse/touch. |

You can override these attributes, or any [supported model viewer component attributes](https://modelviewer.dev/docs/index.html#stagingandcameras-attributes) by adding a parameter that matches the attribute name, and the desired value.

###### Code

```liquid
{% for media in product.media %}
  {% if media.media_type == 'model' %}
    {{ media | model_viewer_tag: interaction-policy: 'allow-when-focused' }}
  {% endif %}
{% endfor %}
```

###### Data

```json
{
  "product": {
    "media": [
      {
        "media_type": "model"
      }
    ]
  }
}
```

###### Output

```html
<model-viewer interaction-policy="allow-when-focused" src="//polinas-potent-potions.myshopify.com/cdn/shop/3d/models/o/eb9388299ce0557c/WaterBottle.glb?v=0" camera-controls="true" style="--poster-color: transparent;" data-shopify-feature="1.12" alt="Potion bottle" poster="//polinas-potent-potions.myshopify.com/cdn/shop/products/WaterBottle_small.jpg?v=1655189057"></model-viewer>
```

#### image\_size

```oobleck
media | model_viewer_tag: image_size: string
```

Specify the dimensions of the model's poster image in pixels.

###### Code

```liquid
{% for media in product.media %}
  {% if media.media_type == 'model' %}
    {{ media | model_viewer_tag: image_size: '400x' }}
  {% endif %}
{% endfor %}
```

###### Data

```json
{
  "product": {
    "media": [
      {
        "media_type": "model"
      }
    ]
  }
}
```

###### Output

```html
<model-viewer src="//polinas-potent-potions.myshopify.com/cdn/shop/3d/models/o/eb9388299ce0557c/WaterBottle.glb?v=0" camera-controls="true" style="--poster-color: transparent;" data-shopify-feature="1.12" alt="Potion bottle" poster="//polinas-potent-potions.myshopify.com/cdn/shop/products/WaterBottle_400x.jpg?v=1655189057"></model-viewer>
```

---



<a id="filters-modulo"></a>


## modulo

```oobleck
number | modulo: number
```

returns [number](https://shopify.dev/docs/api/liquid/basics#number)

Returns the remainder of dividing a number by a given number.

###### Code

```liquid
{{ 12 | modulo: 5 }}
```

###### Output

```html
2
```

---



<a id="filters-money"></a>


## money

```oobleck
number | money
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Formats a given price based on the store's [**HTML without currency** setting](https://help.shopify.com/manual/payments/currency-formatting).

###### Code

```liquid
{{ product.price | money }}
```

###### Data

```json
{
  "product": {
    "price": "10.00"
  }
}
```

###### Output

```html
$10.00
```

---



<a id="filters-money-amount"></a>


## money\_​amount

```oobleck
number | money_amount
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Formats a given price as a plain decimal string, without currency symbols, thousand separators, or locale formatting.

###### Code

```liquid
{{ product.price | money_amount }}
```

###### Data

```json
{
  "product": {
    "price": "10.00"
  }
}
```

###### Output

```html
10.0
```

---



<a id="filters-money-with-currency"></a>


## money\_​with\_​currency

```oobleck
number | money_with_currency
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Formats a given price based on the store's [**HTML with currency** setting](https://help.shopify.com/manual/payments/currency-formatting).

###### Code

```liquid
{{ product.price | money_with_currency }}
```

###### Data

```json
{
  "product": {
    "price": "10.00"
  }
}
```

###### Output

```html
$10.00 CAD
```

---



<a id="filters-money-without-currency"></a>


## money\_​without\_​currency

```oobleck
number | money_without_currency
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Formats a given price based on the store's [**HTML without currency** setting](https://help.shopify.com/manual/payments/currency-formatting), without the currency symbol.

###### Code

```liquid
{{ product.price | money_without_currency }}
```

###### Data

```json
{
  "product": {
    "price": "10.00"
  }
}
```

###### Output

```html
10.00
```

---



<a id="filters-money-without-trailing-zeros"></a>


## money\_​without\_​trailing\_​zeros

```oobleck
number | money_without_trailing_zeros
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Formats a given price based on the store's [**HTML without currency** setting](https://help.shopify.com/manual/payments/currency-formatting), excluding the decimal separator (either `.` or `,`) and trailing zeros.

If the price has a non-zero decimal value, then the output is the same as the [`money` filter](https://shopify.dev/docs/api/liquid/filters#money).

###### Code

```liquid
{{ product.price | money_without_trailing_zeros }}
```

###### Data

```json
{
  "product": {
    "price": "10.00"
  }
}
```

###### Output

```html
$10
```

---



<a id="filters-newline-to-br"></a>


## newline\_​to\_​br

```oobleck
string | newline_to_br
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Converts newlines (`\n`) in a string to HTML line breaks (`<br>`).

###### Code

```liquid
{{ product.description | newline_to_br }}
```

###### Data

```json
{
  "product": {
    "description": "<h3>Are you low on health? Well we've got the potion just for you!</h3>\n<p>Just need a top up? Almost dead? In between? No need to worry because we have a range of sizes and strengths!</p>"
  }
}
```

###### Output

```html
<h3>Are you low on health? Well we've got the potion just for you!</h3><br />
<p>Just need a top up? Almost dead? In between? No need to worry because we have a range of sizes and strengths!</p>
```

---



<a id="filters-payment-button"></a>


## payment\_​button

```oobleck
form | payment_button
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Generates an HTML container to host [accelerated checkout buttons](https://help.shopify.com/manual/online-store/dynamic-checkout) for a product. The `payment_button` filter must be used on the `form` object within a [product form](https://shopify.dev/docs/api/liquid/tags/form#form-product).

###### Code

```liquid
{% form 'product', product %}
  {{ form | payment_button }}
{% endform %}
```

###### Data

```json
{
  "product": {
    "id": 6786188247105
  }
}
```

###### Output

```html
<form method="post" action="/cart/add" id="product_form_6786188247105" accept-charset="UTF-8" class="shopify-product-form" enctype="multipart/form-data"><input type="hidden" name="form_type" value="product" /><input type="hidden" name="utf8" value="✓" />
  <div data-shopify="payment-button" class="shopify-payment-button"> <shopify-accelerated-checkout recommended="null" fallback="{&quot;supports_subs&quot;:true,&quot;supports_def_opts&quot;:true,&quot;name&quot;:&quot;buy_it_now&quot;,&quot;wallet_params&quot;:{}}" access-token="7be588c245f69602e5db198d53fcfde5" buyer-country="CA" buyer-locale="en" buyer-currency="CAD" variant-params="[{&quot;id&quot;:39897499729985,&quot;requiresShipping&quot;:true},{&quot;id&quot;:39897499762753,&quot;requiresShipping&quot;:true},{&quot;id&quot;:39897499795521,&quot;requiresShipping&quot;:true},{&quot;id&quot;:39897499828289,&quot;requiresShipping&quot;:true},{&quot;id&quot;:39897499861057,&quot;requiresShipping&quot;:true},{&quot;id&quot;:39897499893825,&quot;requiresShipping&quot;:true},{&quot;id&quot;:39897499926593,&quot;requiresShipping&quot;:true},{&quot;id&quot;:39897499959361,&quot;requiresShipping&quot;:true},{&quot;id&quot;:39897499992129,&quot;requiresShipping&quot;:true}]" shop-id="56174706753" enabled-flags="[&quot;ce346acf&quot;]" > <div class="shopify-payment-button__button" role="button" disabled aria-hidden="true" style="background-color: transparent; border: none"> <div class="shopify-payment-button__skeleton">&nbsp;</div> </div> </shopify-accelerated-checkout> <small id="shopify-buyer-consent" class="hidden" aria-hidden="true" data-consent-type="subscription"> This item is a deferred, subscription, or recurring purchase. By continuing, I agree to the <span id="shopify-subscription-policy-button">cancellation policy</span> and authorize you to charge my payment method at the prices, frequency and dates listed on this page until my order is fulfilled or I cancel, if permitted. </small> </div>
<input type="hidden" name="product-id" value="6786188247105" /></form>
```

---



<a id="filters-payment-terms"></a>


## payment\_​terms

```oobleck
form | payment_terms
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Generates the HTML for the [Shop Pay Installments banner](https://shopify.dev/themes/pricing-payments/installments).

The `payment_terms` filter must be used on the `form` object within a [product form](https://shopify.dev/docs/api/liquid/tags/form#form-product) or [cart form](https://shopify.dev/docs/api/liquid/tags/form#form-cart).

```liquid
{% form 'product', product %}
  {{ form | payment_terms }}
{% endform %}
```

```liquid
{% form 'product', product %}
  {{ form | payment_terms }}
{% endform %}
```

```liquid
{% form 'cart', cart %}
  {{ form | payment_terms }}
{% endform %}
```

```liquid
{% form 'cart', cart %}
  {{ form | payment_terms }}
{% endform %}
```

---



<a id="filters-payment-type-img-url"></a>


## payment\_​type\_​img\_​url

```oobleck
string | payment_type_img_url
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Returns the URL for an SVG image of a given [payment type](https://shopify.dev/docs/api/liquid/objects/shop#shop-enabled_payment_types).

###### Code

```liquid
{% for type in shop.enabled_payment_types %}
<img src="{{ type | payment_type_img_url }}" width="50" height="50" />
{% endfor %}
```

###### Data

```json
{
  "shop": {
    "enabled_payment_types": [
      "visa",
      "master",
      "american_express",
      "paypal",
      "diners_club",
      "discover"
    ]
  }
}
```

###### Output

```html
<img src="//polinas-potent-potions.myshopify.com/cdn/shopifycloud/storefront/assets/payment_icons/visa-65d650f7.svg" width="50" height="50" />

<img src="//polinas-potent-potions.myshopify.com/cdn/shopifycloud/storefront/assets/payment_icons/master-54b5a7ce.svg" width="50" height="50" />

<img src="//polinas-potent-potions.myshopify.com/cdn/shopifycloud/storefront/assets/payment_icons/american_express-1efdc6a3.svg" width="50" height="50" />

<img src="//polinas-potent-potions.myshopify.com/cdn/shopifycloud/storefront/assets/payment_icons/paypal-a7c68b85.svg" width="50" height="50" />

<img src="//polinas-potent-potions.myshopify.com/cdn/shopifycloud/storefront/assets/payment_icons/diners_club-678e3046.svg" width="50" height="50" />

<img src="//polinas-potent-potions.myshopify.com/cdn/shopifycloud/storefront/assets/payment_icons/discover-59880595.svg" width="50" height="50" />
```

### Rendered output

---



<a id="filters-payment-type-svg-tag"></a>


## payment\_​type\_​svg\_​tag

```oobleck
string | payment_type_svg_tag
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Generates an HTML `<svg>` tag for a given [payment type](https://shopify.dev/docs/api/liquid/objects/shop#shop-enabled_payment_types).

###### Code

```liquid
{% for type in shop.enabled_payment_types -%}
  {{ type | payment_type_svg_tag }}
{% endfor %}
```

###### Data

```json
{
  "shop": {
    "enabled_payment_types": [
      "visa",
      "master",
      "american_express",
      "paypal",
      "diners_club",
      "discover"
    ]
  }
}
```

###### Output

```html
<svg viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" width="38" height="24" aria-labelledby="pi-visa"><title id="pi-visa">Visa</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"/><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"/><path d="M28.3 10.1H28c-.4 1-.7 1.5-1 3h1.9c-.3-1.5-.3-2.2-.6-3zm2.9 5.9h-1.7c-.1 0-.1 0-.2-.1l-.2-.9-.1-.2h-2.4c-.1 0-.2 0-.2.2l-.3.9c0 .1-.1.1-.1.1h-2.1l.2-.5L27 8.7c0-.5.3-.7.8-.7h1.5c.1 0 .2 0 .2.2l1.4 6.5c.1.4.2.7.2 1.1.1.1.1.1.1.2zm-13.4-.3l.4-1.8c.1 0 .2.1.2.1.7.3 1.4.5 2.1.4.2 0 .5-.1.7-.2.5-.2.5-.7.1-1.1-.2-.2-.5-.3-.8-.5-.4-.2-.8-.4-1.1-.7-1.2-1-.8-2.4-.1-3.1.6-.4.9-.8 1.7-.8 1.2 0 2.5 0 3.1.2h.1c-.1.6-.2 1.1-.4 1.7-.5-.2-1-.4-1.5-.4-.3 0-.6 0-.9.1-.2 0-.3.1-.4.2-.2.2-.2.5 0 .7l.5.4c.4.2.8.4 1.1.6.5.3 1 .8 1.1 1.4.2.9-.1 1.7-.9 2.3-.5.4-.7.6-1.4.6-1.4 0-2.5.1-3.4-.2-.1.2-.1.2-.2.1zm-3.5.3c.1-.7.1-.7.2-1 .5-2.2 1-4.5 1.4-6.7.1-.2.1-.3.3-.3H18c-.2 1.2-.4 2.1-.7 3.2-.3 1.5-.6 3-1 4.5 0 .2-.1.2-.3.2M5 8.2c0-.1.2-.2.3-.2h3.4c.5 0 .9.3 1 .8l.9 4.4c0 .1 0 .1.1.2 0-.1.1-.1.1-.1l2.1-5.1c-.1-.1 0-.2.1-.2h2.1c0 .1 0 .1-.1.2l-3.1 7.3c-.1.2-.1.3-.2.4-.1.1-.3 0-.5 0H9.7c-.1 0-.2 0-.2-.2L7.9 9.5c-.2-.2-.5-.5-.9-.6-.6-.3-1.7-.5-1.9-.5L5 8.2z" fill="#142688"/></svg>
<svg viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" width="38" height="24" aria-labelledby="pi-master"><title id="pi-master">Mastercard</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"/><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"/><circle fill="#EB001B" cx="15" cy="12" r="7"/><circle fill="#F79E1B" cx="23" cy="12" r="7"/><path fill="#FF5F00" d="M22 12c0-2.4-1.2-4.5-3-5.7-1.8 1.3-3 3.4-3 5.7s1.2 4.5 3 5.7c1.8-1.2 3-3.3 3-5.7z"/></svg>
<svg xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="pi-american_express" viewBox="0 0 38 24" width="38" height="24"><title id="pi-american_express">American Express</title><path fill="#000" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3Z" opacity=".07"/><path fill="#006FCF" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32Z"/><path fill="#FFF" d="M22.012 19.936v-8.421L37 11.528v2.326l-1.732 1.852L37 17.573v2.375h-2.766l-1.47-1.622-1.46 1.628-9.292-.02Z"/><path fill="#006FCF" d="M23.013 19.012v-6.57h5.572v1.513h-3.768v1.028h3.678v1.488h-3.678v1.01h3.768v1.531h-5.572Z"/><path fill="#006FCF" d="m28.557 19.012 3.083-3.289-3.083-3.282h2.386l1.884 2.083 1.89-2.082H37v.051l-3.017 3.23L37 18.92v.093h-2.307l-1.917-2.103-1.898 2.104h-2.321Z"/><path fill="#FFF" d="M22.71 4.04h3.614l1.269 2.881V4.04h4.46l.77 2.159.771-2.159H37v8.421H19l3.71-8.421Z"/><path fill="#006FCF" d="m23.395 4.955-2.916 6.566h2l.55-1.315h2.98l.55 1.315h2.05l-2.904-6.566h-2.31Zm.25 3.777.875-2.09.873 2.09h-1.748Z"/><path fill="#006FCF" d="M28.581 11.52V4.953l2.811.01L32.84 9l1.456-4.046H37v6.565l-1.74.016v-4.51l-1.644 4.494h-1.59L30.35 7.01v4.51h-1.768Z"/></svg>

<svg viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" width="38" height="24" role="img" aria-labelledby="pi-paypal"><title id="pi-paypal">PayPal</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"/><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"/><path fill="#003087" d="M23.9 8.3c.2-1 0-1.7-.6-2.3-.6-.7-1.7-1-3.1-1h-4.1c-.3 0-.5.2-.6.5L14 15.6c0 .2.1.4.3.4H17l.4-3.4 1.8-2.2 4.7-2.1z"/><path fill="#3086C8" d="M23.9 8.3l-.2.2c-.5 2.8-2.2 3.8-4.6 3.8H18c-.3 0-.5.2-.6.5l-.6 3.9-.2 1c0 .2.1.4.3.4H19c.3 0 .5-.2.5-.4v-.1l.4-2.4v-.1c0-.2.3-.4.5-.4h.3c2.1 0 3.7-.8 4.1-3.2.2-1 .1-1.8-.4-2.4-.1-.5-.3-.7-.5-.8z"/><path fill="#012169" d="M23.3 8.1c-.1-.1-.2-.1-.3-.1-.1 0-.2 0-.3-.1-.3-.1-.7-.1-1.1-.1h-3c-.1 0-.2 0-.2.1-.2.1-.3.2-.3.4l-.7 4.4v.1c0-.3.3-.5.6-.5h1.3c2.5 0 4.1-1 4.6-3.8v-.2c-.1-.1-.3-.2-.5-.2h-.1z"/></svg>
<svg viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" width="38" height="24" aria-labelledby="pi-diners_club"><title id="pi-diners_club">Diners Club</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"/><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"/><path d="M12 12v3.7c0 .3-.2.3-.5.2-1.9-.8-3-3.3-2.3-5.4.4-1.1 1.2-2 2.3-2.4.4-.2.5-.1.5.2V12zm2 0V8.3c0-.3 0-.3.3-.2 2.1.8 3.2 3.3 2.4 5.4-.4 1.1-1.2 2-2.3 2.4-.4.2-.4.1-.4-.2V12zm7.2-7H13c3.8 0 6.8 3.1 6.8 7s-3 7-6.8 7h8.2c3.8 0 6.8-3.1 6.8-7s-3-7-6.8-7z" fill="#3086C8"/></svg>
<svg viewBox="0 0 38 24" width="38" height="24" role="img" aria-labelledby="pi-discover" fill="none" xmlns="http://www.w3.org/2000/svg"><title id="pi-discover">Discover</title><path fill="#000" opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"/><path d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32z" fill="#fff"/><path d="M3.57 7.16H2v5.5h1.57c.83 0 1.43-.2 1.96-.63.63-.52 1-1.3 1-2.11-.01-1.63-1.22-2.76-2.96-2.76zm1.26 4.14c-.34.3-.77.44-1.47.44h-.29V8.1h.29c.69 0 1.11.12 1.47.44.37.33.59.84.59 1.37 0 .53-.22 1.06-.59 1.39zm2.19-4.14h1.07v5.5H7.02v-5.5zm3.69 2.11c-.64-.24-.83-.4-.83-.69 0-.35.34-.61.8-.61.32 0 .59.13.86.45l.56-.73c-.46-.4-1.01-.61-1.62-.61-.97 0-1.72.68-1.72 1.58 0 .76.35 1.15 1.35 1.51.42.15.63.25.74.31.21.14.32.34.32.57 0 .45-.35.78-.83.78-.51 0-.92-.26-1.17-.73l-.69.67c.49.73 1.09 1.05 1.9 1.05 1.11 0 1.9-.74 1.9-1.81.02-.89-.35-1.29-1.57-1.74zm1.92.65c0 1.62 1.27 2.87 2.9 2.87.46 0 .86-.09 1.34-.32v-1.26c-.43.43-.81.6-1.29.6-1.08 0-1.85-.78-1.85-1.9 0-1.06.79-1.89 1.8-1.89.51 0 .9.18 1.34.62V7.38c-.47-.24-.86-.34-1.32-.34-1.61 0-2.92 1.28-2.92 2.88zm12.76.94l-1.47-3.7h-1.17l2.33 5.64h.58l2.37-5.64h-1.16l-1.48 3.7zm3.13 1.8h3.04v-.93h-1.97v-1.48h1.9v-.93h-1.9V8.1h1.97v-.94h-3.04v5.5zm7.29-3.87c0-1.03-.71-1.62-1.95-1.62h-1.59v5.5h1.07v-2.21h.14l1.48 2.21h1.32l-1.73-2.32c.81-.17 1.26-.72 1.26-1.56zm-2.16.91h-.31V8.03h.33c.67 0 1.03.28 1.03.82 0 .55-.36.85-1.05.85z" fill="#231F20"/><path d="M20.16 12.86a2.931 2.931 0 100-5.862 2.931 2.931 0 000 5.862z" fill="url(#pi-paint0_linear)"/><path opacity=".65" d="M20.16 12.86a2.931 2.931 0 100-5.862 2.931 2.931 0 000 5.862z" fill="url(#pi-paint1_linear)"/><path d="M36.57 7.506c0-.1-.07-.15-.18-.15h-.16v.48h.12v-.19l.14.19h.14l-.16-.2c.06-.01.1-.06.1-.13zm-.2.07h-.02v-.13h.02c.06 0 .09.02.09.06 0 .05-.03.07-.09.07z" fill="#231F20"/><path d="M36.41 7.176c-.23 0-.42.19-.42.42 0 .23.19.42.42.42.23 0 .42-.19.42-.42 0-.23-.19-.42-.42-.42zm0 .77c-.18 0-.34-.15-.34-.35 0-.19.15-.35.34-.35.18 0 .33.16.33.35 0 .19-.15.35-.33.35z" fill="#231F20"/><path d="M37 12.984S27.09 19.873 8.976 23h26.023a2 2 0 002-1.984l.024-3.02L37 12.985z" fill="#F48120"/><defs><linearGradient id="pi-paint0_linear" x1="21.657" y1="12.275" x2="19.632" y2="9.104" gradientUnits="userSpaceOnUse"><stop stop-color="#F89F20"/><stop offset=".25" stop-color="#F79A20"/><stop offset=".533" stop-color="#F68D20"/><stop offset=".62" stop-color="#F58720"/><stop offset=".723" stop-color="#F48120"/><stop offset="1" stop-color="#F37521"/></linearGradient><linearGradient id="pi-paint1_linear" x1="21.338" y1="12.232" x2="18.378" y2="6.446" gradientUnits="userSpaceOnUse"><stop stop-color="#F58720"/><stop offset=".359" stop-color="#E16F27"/><stop offset=".703" stop-color="#D4602C"/><stop offset=".982" stop-color="#D05B2E"/></linearGradient></defs></svg>
```

### Rendered output

#### class

```oobleck
type | payment_type_svg_tag: class: string
```

Specify the `class` attribute of the `<svg>` tag.

###### Code

```liquid
{% for type in shop.enabled_payment_types -%}
  {{ type | payment_type_svg_tag: class: 'custom-class' }}
{% endfor %}
```

###### Data

```json
{
  "shop": {
    "enabled_payment_types": [
      "visa",
      "master",
      "american_express",
      "paypal",
      "diners_club",
      "discover"
    ]
  }
}
```

###### Output

```html
<svg class="custom-class" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" width="38" height="24" aria-labelledby="pi-visa"><title id="pi-visa">Visa</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"/><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"/><path d="M28.3 10.1H28c-.4 1-.7 1.5-1 3h1.9c-.3-1.5-.3-2.2-.6-3zm2.9 5.9h-1.7c-.1 0-.1 0-.2-.1l-.2-.9-.1-.2h-2.4c-.1 0-.2 0-.2.2l-.3.9c0 .1-.1.1-.1.1h-2.1l.2-.5L27 8.7c0-.5.3-.7.8-.7h1.5c.1 0 .2 0 .2.2l1.4 6.5c.1.4.2.7.2 1.1.1.1.1.1.1.2zm-13.4-.3l.4-1.8c.1 0 .2.1.2.1.7.3 1.4.5 2.1.4.2 0 .5-.1.7-.2.5-.2.5-.7.1-1.1-.2-.2-.5-.3-.8-.5-.4-.2-.8-.4-1.1-.7-1.2-1-.8-2.4-.1-3.1.6-.4.9-.8 1.7-.8 1.2 0 2.5 0 3.1.2h.1c-.1.6-.2 1.1-.4 1.7-.5-.2-1-.4-1.5-.4-.3 0-.6 0-.9.1-.2 0-.3.1-.4.2-.2.2-.2.5 0 .7l.5.4c.4.2.8.4 1.1.6.5.3 1 .8 1.1 1.4.2.9-.1 1.7-.9 2.3-.5.4-.7.6-1.4.6-1.4 0-2.5.1-3.4-.2-.1.2-.1.2-.2.1zm-3.5.3c.1-.7.1-.7.2-1 .5-2.2 1-4.5 1.4-6.7.1-.2.1-.3.3-.3H18c-.2 1.2-.4 2.1-.7 3.2-.3 1.5-.6 3-1 4.5 0 .2-.1.2-.3.2M5 8.2c0-.1.2-.2.3-.2h3.4c.5 0 .9.3 1 .8l.9 4.4c0 .1 0 .1.1.2 0-.1.1-.1.1-.1l2.1-5.1c-.1-.1 0-.2.1-.2h2.1c0 .1 0 .1-.1.2l-3.1 7.3c-.1.2-.1.3-.2.4-.1.1-.3 0-.5 0H9.7c-.1 0-.2 0-.2-.2L7.9 9.5c-.2-.2-.5-.5-.9-.6-.6-.3-1.7-.5-1.9-.5L5 8.2z" fill="#142688"/></svg>
<svg class="custom-class" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" width="38" height="24" aria-labelledby="pi-master"><title id="pi-master">Mastercard</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"/><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"/><circle fill="#EB001B" cx="15" cy="12" r="7"/><circle fill="#F79E1B" cx="23" cy="12" r="7"/><path fill="#FF5F00" d="M22 12c0-2.4-1.2-4.5-3-5.7-1.8 1.3-3 3.4-3 5.7s1.2 4.5 3 5.7c1.8-1.2 3-3.3 3-5.7z"/></svg>
<svg class="custom-class" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="pi-american_express" viewBox="0 0 38 24" width="38" height="24"><title id="pi-american_express">American Express</title><path fill="#000" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3Z" opacity=".07"/><path fill="#006FCF" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32Z"/><path fill="#FFF" d="M22.012 19.936v-8.421L37 11.528v2.326l-1.732 1.852L37 17.573v2.375h-2.766l-1.47-1.622-1.46 1.628-9.292-.02Z"/><path fill="#006FCF" d="M23.013 19.012v-6.57h5.572v1.513h-3.768v1.028h3.678v1.488h-3.678v1.01h3.768v1.531h-5.572Z"/><path fill="#006FCF" d="m28.557 19.012 3.083-3.289-3.083-3.282h2.386l1.884 2.083 1.89-2.082H37v.051l-3.017 3.23L37 18.92v.093h-2.307l-1.917-2.103-1.898 2.104h-2.321Z"/><path fill="#FFF" d="M22.71 4.04h3.614l1.269 2.881V4.04h4.46l.77 2.159.771-2.159H37v8.421H19l3.71-8.421Z"/><path fill="#006FCF" d="m23.395 4.955-2.916 6.566h2l.55-1.315h2.98l.55 1.315h2.05l-2.904-6.566h-2.31Zm.25 3.777.875-2.09.873 2.09h-1.748Z"/><path fill="#006FCF" d="M28.581 11.52V4.953l2.811.01L32.84 9l1.456-4.046H37v6.565l-1.74.016v-4.51l-1.644 4.494h-1.59L30.35 7.01v4.51h-1.768Z"/></svg>

<svg class="custom-class" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" width="38" height="24" role="img" aria-labelledby="pi-paypal"><title id="pi-paypal">PayPal</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"/><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"/><path fill="#003087" d="M23.9 8.3c.2-1 0-1.7-.6-2.3-.6-.7-1.7-1-3.1-1h-4.1c-.3 0-.5.2-.6.5L14 15.6c0 .2.1.4.3.4H17l.4-3.4 1.8-2.2 4.7-2.1z"/><path fill="#3086C8" d="M23.9 8.3l-.2.2c-.5 2.8-2.2 3.8-4.6 3.8H18c-.3 0-.5.2-.6.5l-.6 3.9-.2 1c0 .2.1.4.3.4H19c.3 0 .5-.2.5-.4v-.1l.4-2.4v-.1c0-.2.3-.4.5-.4h.3c2.1 0 3.7-.8 4.1-3.2.2-1 .1-1.8-.4-2.4-.1-.5-.3-.7-.5-.8z"/><path fill="#012169" d="M23.3 8.1c-.1-.1-.2-.1-.3-.1-.1 0-.2 0-.3-.1-.3-.1-.7-.1-1.1-.1h-3c-.1 0-.2 0-.2.1-.2.1-.3.2-.3.4l-.7 4.4v.1c0-.3.3-.5.6-.5h1.3c2.5 0 4.1-1 4.6-3.8v-.2c-.1-.1-.3-.2-.5-.2h-.1z"/></svg>
<svg class="custom-class" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" width="38" height="24" aria-labelledby="pi-diners_club"><title id="pi-diners_club">Diners Club</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"/><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"/><path d="M12 12v3.7c0 .3-.2.3-.5.2-1.9-.8-3-3.3-2.3-5.4.4-1.1 1.2-2 2.3-2.4.4-.2.5-.1.5.2V12zm2 0V8.3c0-.3 0-.3.3-.2 2.1.8 3.2 3.3 2.4 5.4-.4 1.1-1.2 2-2.3 2.4-.4.2-.4.1-.4-.2V12zm7.2-7H13c3.8 0 6.8 3.1 6.8 7s-3 7-6.8 7h8.2c3.8 0 6.8-3.1 6.8-7s-3-7-6.8-7z" fill="#3086C8"/></svg>
<svg class="custom-class" viewBox="0 0 38 24" width="38" height="24" role="img" aria-labelledby="pi-discover" fill="none" xmlns="http://www.w3.org/2000/svg"><title id="pi-discover">Discover</title><path fill="#000" opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"/><path d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32z" fill="#fff"/><path d="M3.57 7.16H2v5.5h1.57c.83 0 1.43-.2 1.96-.63.63-.52 1-1.3 1-2.11-.01-1.63-1.22-2.76-2.96-2.76zm1.26 4.14c-.34.3-.77.44-1.47.44h-.29V8.1h.29c.69 0 1.11.12 1.47.44.37.33.59.84.59 1.37 0 .53-.22 1.06-.59 1.39zm2.19-4.14h1.07v5.5H7.02v-5.5zm3.69 2.11c-.64-.24-.83-.4-.83-.69 0-.35.34-.61.8-.61.32 0 .59.13.86.45l.56-.73c-.46-.4-1.01-.61-1.62-.61-.97 0-1.72.68-1.72 1.58 0 .76.35 1.15 1.35 1.51.42.15.63.25.74.31.21.14.32.34.32.57 0 .45-.35.78-.83.78-.51 0-.92-.26-1.17-.73l-.69.67c.49.73 1.09 1.05 1.9 1.05 1.11 0 1.9-.74 1.9-1.81.02-.89-.35-1.29-1.57-1.74zm1.92.65c0 1.62 1.27 2.87 2.9 2.87.46 0 .86-.09 1.34-.32v-1.26c-.43.43-.81.6-1.29.6-1.08 0-1.85-.78-1.85-1.9 0-1.06.79-1.89 1.8-1.89.51 0 .9.18 1.34.62V7.38c-.47-.24-.86-.34-1.32-.34-1.61 0-2.92 1.28-2.92 2.88zm12.76.94l-1.47-3.7h-1.17l2.33 5.64h.58l2.37-5.64h-1.16l-1.48 3.7zm3.13 1.8h3.04v-.93h-1.97v-1.48h1.9v-.93h-1.9V8.1h1.97v-.94h-3.04v5.5zm7.29-3.87c0-1.03-.71-1.62-1.95-1.62h-1.59v5.5h1.07v-2.21h.14l1.48 2.21h1.32l-1.73-2.32c.81-.17 1.26-.72 1.26-1.56zm-2.16.91h-.31V8.03h.33c.67 0 1.03.28 1.03.82 0 .55-.36.85-1.05.85z" fill="#231F20"/><path d="M20.16 12.86a2.931 2.931 0 100-5.862 2.931 2.931 0 000 5.862z" fill="url(#pi-paint0_linear)"/><path opacity=".65" d="M20.16 12.86a2.931 2.931 0 100-5.862 2.931 2.931 0 000 5.862z" fill="url(#pi-paint1_linear)"/><path d="M36.57 7.506c0-.1-.07-.15-.18-.15h-.16v.48h.12v-.19l.14.19h.14l-.16-.2c.06-.01.1-.06.1-.13zm-.2.07h-.02v-.13h.02c.06 0 .09.02.09.06 0 .05-.03.07-.09.07z" fill="#231F20"/><path d="M36.41 7.176c-.23 0-.42.19-.42.42 0 .23.19.42.42.42.23 0 .42-.19.42-.42 0-.23-.19-.42-.42-.42zm0 .77c-.18 0-.34-.15-.34-.35 0-.19.15-.35.34-.35.18 0 .33.16.33.35 0 .19-.15.35-.33.35z" fill="#231F20"/><path d="M37 12.984S27.09 19.873 8.976 23h26.023a2 2 0 002-1.984l.024-3.02L37 12.985z" fill="#F48120"/><defs><linearGradient id="pi-paint0_linear" x1="21.657" y1="12.275" x2="19.632" y2="9.104" gradientUnits="userSpaceOnUse"><stop stop-color="#F89F20"/><stop offset=".25" stop-color="#F79A20"/><stop offset=".533" stop-color="#F68D20"/><stop offset=".62" stop-color="#F58720"/><stop offset=".723" stop-color="#F48120"/><stop offset="1" stop-color="#F37521"/></linearGradient><linearGradient id="pi-paint1_linear" x1="21.338" y1="12.232" x2="18.378" y2="6.446" gradientUnits="userSpaceOnUse"><stop stop-color="#F58720"/><stop offset=".359" stop-color="#E16F27"/><stop offset=".703" stop-color="#D4602C"/><stop offset=".982" stop-color="#D05B2E"/></linearGradient></defs></svg>
```

### Rendered output

---



<a id="filters-placeholder-svg-tag"></a>


## placeholder\_​svg\_​tag

```oobleck
string | placeholder_svg_tag
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Generates an HTML `<svg>` tag for a given placeholder name.

Accepts the following placeholder names:

| Outline illustrations | Color illustrations |
| - | - |
| * `product-1`
* `product-2`
* `product-3`
* `product-4`
* `product-5`
* `product-6`
* `collection-1`
* `collection-2`
* `collection-3`
* `collection-4`
* `collection-5`
* `collection-6`
* `lifestyle-1`
* `lifestyle-2`
* `image` | - `product-apparel-1`
- `product-apparel-2`
- `product-apparel-3`
- `product-apparel-4`
- `collection-apparel-1`
- `collection-apparel-2`
- `collection-apparel-3`
- `collection-apparel-4`
- `hero-apparel-1`
- `hero-apparel-2`
- `hero-apparel-3`
- `blog-apparel-1`
- `blog-apparel-2`
- `blog-apparel-3`
- `detailed-apparel-1` |

###### Code

```liquid
{{ 'collection-1' | placeholder_svg_tag }}
```

###### Output

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 525.5 525.5"><path d="M439.9 310.8c-.2.2-.1.5.1.7l13.2 8.7c.1.1.2.1.3.1.2 0 .3-.1.4-.2.2-.2.1-.5-.1-.7l-13.2-8.7c-.3-.2-.6-.1-.7.1z"/><path d="M463.4 235c1.1-9.4-1-18.6-5.1-21.6-1.7-1.2-3.6-1.3-5.4-.3l-.3.3-6.1-9.8-.1-.1-.8-8.1c-.2-1.9-1.7-3.3-3.6-3.3h-33c-1.6-33-14-75.8-44-75.9h-.1c-7.8 0-14.9 3.1-21.1 9.3-12.5 12.5-21 38.1-22.3 66.5h-20.7v-2.5c0-1.5-1.2-2.7-2.7-2.7h-3.8c-1.5 0-2.7 1.2-2.7 2.7v2.5H288c-1.9 0-3.4 1.4-3.6 3.3l-.8 8.4-5.9 9.5c-.1-.1-.3-.3-.5-.3-.8-.2-2.2-.3-3.6.8-.4.3-.7.6-1.1 1.1-8.5 9.5-6.5 32.6-.8 51.2h-34.5c.1-2.1.2-4.6.4-7.3.6-10.3 1.3-23.1.1-30.3-1.7-10.1-8.9-21.5-13.3-26.6-3.9-4.5-9.3-10.8-11.1-12.9 6.2-4 9.6-9.6 10.1-16.6v-.6c.3-3-.4-7.1-2.8-9.7-1.5-1.7-3.4-2.5-5.7-2.5h-39.6c-.3-11.5-6.3-23-19.3-23-4.3 0-8.2 1.7-11.4 4.5l-.2-.1c0 .1-.1.2-.1.4-4.5 4.2-7.4 10.8-7.6 18.3h-34.9c-2.3 0-4.3.8-5.7 2.5-2.3 2.6-3.1 6.7-2.8 9.7v.6c.5 7 3.9 12.6 10.1 16.6-1.9 2.2-7.3 8.4-11.1 12.9-5.4 6.3-11.9 17.3-13.3 26.6-2 12.9-.8 23 .2 32 .9 7.8 1.7 14.6.3 21.6-.8 1.7-1.7 3.6-2.4 5.6-3.2 8.4-4.4 18.9-3.6 23.5.7 3.9 4.3 6.7 8.9 8.3H62.8c-.6 0-1 .4-1 1V389c0 .6.4 1 1 1h59.7c.2.4.4.8.5 1.2 1.1 2.4 2.2 5 3.5 8.2.1.2.2.5.3.7 2.3 5.2 7.5 8.8 13.5 8.8h171.3c6 0 11.2-3.6 13.5-8.8v-.1l.3-.6c1.3-3.2 2.5-5.9 3.5-8.3.2-.4.4-.8.5-1.2H442c.9 0 1.7-.5 2.1-1.3.4-.8.3-1.7-.2-2.4l-8.4-10.8c-3-3.8-7.4-6-12.3-6h-53v-30.5c0-.3-.1-.5-.3-.7 6.3-.4 13.3-1.6 21-4 7.8-2.4 14.7-5.7 20.9-9.5H452c1.7 0 3.4-.7 4.5-2s1.7-3 1.5-4.7l-4.2-42.4c0-.1-.1-.3-.1-.4 5.8-13.2 9.3-27.2 9.7-40.5.1.4.1.3 0 .3zm-9.4-20.2c1.1-.6 2.2-.6 3.2.2 1.9 1.4 3.5 5 4.2 9.7-1.5-1.6-3.8-2-5.7-2.3l-1.5-.3c-1.4-.3-2.2-1-2.5-2.1-.3-1 0-2.2.7-3.3l1 1.6c.2.3.5.5.8.5.2 0 .4 0 .5-.2.5-.3.6-.9.3-1.4l-1.4-2.2c.2-.1.3-.1.4-.2zm-2.8 0c-1.5 1.7-2 3.8-1.5 5.7.5 1.8 1.9 3 4 3.5.5.1 1.1.2 1.6.3 3.1.6 5.1 1.1 5.5 3.8.1.5.5.8.9.8.1 3-.2 6.4-.9 9.8-1.9 8.8-4.6 17.3-8.2 25.5l-5.7-56.1 4.3 6.7zm-50.1-7.5h8.3l3.1 27.6c.1.5-.1.9-.4 1.2-.3.3-.7.5-1.2.5h-11.4c-.5 0-.9-.2-1.2-.5s-.4-.8-.4-1.2l3.2-27.6zm10.2-.4l-.1-.7c-.1-.5-.5-.9-1-.9h-10.1c-.5 0-.9.4-1 .9l-.1.7v-7.7h2.3v.6c0 1.3 1.1 2.4 2.4 2.4h3.2c1.3 0 2.4-1.1 2.4-2.4v-.6h2v7.7zm-49.2-14.7V140c1 .3 2 .5 3.1.5s2.1-.2 3.1-.5v52.2h-6.2zm-32.6 0c1.2-26.6 8.8-50.1 19.9-61.3 2.6-2.6 5.4-4.5 8.4-5.7-1.3 1.6-2.1 3.6-2.1 5.9 0 3.4 1.8 6.3 4.5 8 0 .1-.1.2-.1.4v52.7h-30.6zm-8.2 15.2h8.3l3.1 27.6c.1.5-.1.9-.4 1.2s-.7.5-1.2.5h-11.4c-.5 0-.9-.2-1.2-.5s-.4-.8-.4-1.2l3.2-27.6zm10.2-.4l-.1-.7c-.1-.5-.5-.9-1-.9h-10.1c-.5 0-.9.4-1 .9l-.1.7v-7.7h2.1v.5c0 1.3 1.1 2.4 2.4 2.4h3c1.3 0 2.4-1.1 2.4-2.4v-.6h2.3v7.8zm33.6-83.2c.6 0 1.2 0 1.7.1 3.3.8 5.8 3.7 5.8 7.2 0 4.1-3.3 7.4-7.4 7.4s-7.4-3.3-7.4-7.4c0-3.5 2.4-6.4 5.7-7.2.5-.1 1-.1 1.6-.1zm5 15.3c2.7-1.7 4.4-4.6 4.4-8 0-2.3-.8-4.3-2.1-6 17.4 6.6 27.3 36.7 28.7 67.1h-31v-52.7c.1-.2.1-.3 0-.4zm-24.8-12c5.8-5.8 12.5-8.8 19.7-8.8h.1c31 .1 42.2 48.8 42.2 81.5 0 .2-.2.4-.4.4h-3.2c-.2 0-.4-.2-.4-.4 0-2.1 0-4.1-.1-6.2.1-.1.1-.3.1-.5s-.1-.4-.2-.5c-1.5-34.5-14-68.8-36.1-70.8-.6-.1-1.3-.2-2-.2s-1.4.1-2 .2c-5.5.5-10.6 3.1-15.2 7.6-12.6 12.5-20.7 40.1-20.7 70.3 0 .2-.2.4-.4.4h-3c-.2 0-.4-.2-.4-.4.1-30.8 8.7-59.3 22-72.6zM299 208h-5.3l1.7-13.5h1.8L299 208zm-5.4-16v-2.3c0-.4.3-.7.7-.7h3.8c.4 0 .7.3.7.7v2.5h-5.4c.2-.1.2-.1.2-.2zm-7.1 3.7c.1-.8.8-1.5 1.6-1.5h5.3l-1.9 14.7c0 .3.1.6.2.8.2.2.5.3.8.3h7.6c.3 0 .6-.1.8-.3.2-.2.3-.5.2-.8l-1.9-14.7h22.3c0 1-.1 2-.1 3.1h-3.1c-.6 0-1 .4-1 1v11.8c0 .6.4 1 1 1 .2 0 .4-.1.6-.2l-2.7 23.9c-.1 1 .2 2 .9 2.8.7.8 1.6 1.2 2.7 1.2h11.4c1 0 2-.4 2.7-1.2.7-.8 1-1.8.9-2.8l-2.7-23.9c.2.1.3.2.6.2.6 0 1-.4 1-1v-11.8c0-.6-.4-1-1-1H329.4c0-1 0-2.1.1-3.1h71.9c0 1 .1 2 .1 3h-3.3c-.6 0-1 .4-1 1V210c0 .6.4 1 1 1 .2 0 .4-.1.6-.2l-2.7 23.9c-.1 1 .2 2 .9 2.8.7.8 1.6 1.2 2.7 1.2h11.4c1 0 2-.4 2.7-1.2.7-.8 1-1.8.9-2.8l-2.7-23.9c.2.1.3.2.6.2.6 0 1-.4 1-1v-11.8c0-.6-.4-1-1-1h-3c0-1 0-2-.1-3.1h32.9c.8 0 1.5.6 1.6 1.5l7.3 72.1c-11.7 24.7-30.6 45-52.5 55.3h-66.3c0-.4-.1-.9-.1-1.3-.5-4.8-.9-9.5-1.3-14.1h81.6c.3 0 .5-.2.5-.5s-.2-.5-.5-.5H331c-.6-7.5-1.1-14.8-1.1-22v-15.1c0-1.8-1.5-3.3-3.3-3.3h-22.2v-5.7c0-.6-.4-1-1-1h-17.2c-.6 0-1 .4-1 1v5.7h-5.5l6.8-70.5zm75.6 134.2V325h6.1v5.1c-2.1.1-4.1 0-6.1-.2zm-18.6-4.9h16.6v4.6c-5.7-.7-11.3-2.2-16.6-4.6zm26.7 0h23.6c-7.9 3.1-15.8 4.8-23.6 5.1V325zm-10.1 44.6h-25.3c.1-1.2.1-2.5.1-3.8v-6.2c1.1-1.1 2.1-2.3 3.1-3.6.2-.2.2-.5.2-.8l-1.8-11.2c-.1-.4-.4-.7-.8-.8-.4-.1-.8.1-1 .5-.1.2-.3.5-.4.7-.4-5-.8-9.9-1.2-14.8 5.8 3.7 14.8 7.8 27.3 8.8 0 .1-.1.2-.1.3v30.9zm-81.5 6.8h.7v9.6h-.7v-9.6zm-2 16.3h-10.9v-16.3h4.5v8.9c0 .6.4 1 1 1s1-.4 1-1v-8.9h4.5v16.3zm-101.2 1h10.9v8.7l-5.5 4.4-5.5-4.4v-8.7zm-2-7.8h-.7v-9.6h.7v9.6zm2 1v-10.6h4.5v8.9c0 .6.4 1 1 1s1-.4 1-1v-8.9h4.5v15.3h-10.9v-4.7zm0-30.7h10.9v18.2h-4.5v-1c0-.6-.4-1-1-1s-1 .4-1 1v1h-4.5v-18.2zm12.9 20.2h.7v9.6h-.7v-9.6zm-.4 27.3c.2-.2.4-.5.4-.8v-9.2h1.3c.6 0 1-.4 1-1s-.4-1-1-1h-1.3v-3.8h1.7c.6 0 1-.4 1-1v-11.6c0-.6-.4-1-1-1h-1.7v-4.1c.2.2.4.3.7.3h74.4c.1 0 .2 0 .3-.1v3.8H262c-.6 0-1 .4-1 1v11.6c0 .6.4 1 1 1h1.7v4.8h-1.3c-.6 0-1 .4-1 1s.4 1 1 1h1.3v8.2c0 .3.1.6.4.8l4.3 3.4h-84.8l4.3-3.3zm75.8-17.8h-.7v-9.6h.7v9.6zm2 16.6v-7.7h10.9v7.7l-5.5 4.4-5.4-4.4zm6.5-28.1v-1c0-.6-.4-1-1-1s-1 .4-1 1v1h-4.5v-18.2h10.9v18.2h-4.4zm6.4-18.2h2.8c.6 0 1-.4 1-1s-.4-1-1-1h-20.6c-.6 0-1 .4-1 1s.4 1 1 1h2.8v12.5c-.1 0-.2-.1-.3-.1H189c-.3 0-.6.1-.7.3v-12.8h2.8c.6 0 1-.4 1-1s-.4-1-1-1h-20.6c-.6 0-1 .4-1 1s.4 1 1 1h2.8v12.6c-.1-.1-.3-.1-.5-.1h-37.2c-6.2 0-11.2-5-11.2-11.2v-88c0-.7.6-1.3 1.3-1.3h51.7c2 3.3 6.8 9.6 17.9 17.6l-1.1 1.4c-.2.2-.2.5-.2.7 0 .3.2.5.4.7l4 3.1-.6.8c-.3.4-.3 1.1.2 1.4.2.1.4.2.6.2.3 0 .6-.1.8-.4l.6-.8 4 3.1c.2.1.4.2.6.2.3 0 .6-.1.8-.4l1.1-1.4 4.7 3.6c-.1.1-.2.1-.3.2-.8 1.1-1.2 2.5-1 3.8.2 1.4.9 2.6 2 3.5l48.7 37.3c.9.7 2 1.1 3.2 1.1h.7c1.4-.2 2.6-.9 3.5-2 .2-.2.2-.5.2-.7 21.9 14.6 38.4 24.9 51.4 24.9 1.5 0 3-.2 4.5-.5-2.1 1.9-4.8 3-7.6 3h-37.7v-12.3zM152.6 197v5h-6.5v-5h6.5zm-6.5 6h6.5v3.2h-6.5V203zm7.5 5.2c.6 0 1-.4 1-1V197h6.2v10.2c0 .6.4 1 1 1h2.9c.2 10.1 1.1 18.1 3 24.4h-18.9c1.7-7.8 2.6-16.3 2.2-24.4h2.6zm9.2-2V203h6.5v3.2h-6.5zm6.6-4.2h-6.5v-5h6.5v5zm-1 32.6c.5 1.6 1.1 3 1.8 4.3.2.3.5.6.9.6.2 0 .3 0 .4-.1.5-.2.7-.8.4-1.3-.5-1-1-2.2-1.4-3.4H208v8.6h-25.4c-.3 0-.5.2-.5.5s.2.5.5.5H208v4h-27.1c-.7-.3-3.4-2.6-4.2-3.5-.4-.4-1-.5-1.4-.1-.4.4-.5 1-.1 1.4.4.4 1.3 1.3 2.4 2.2h-34c.6-1.3 1.2-2.6 1.7-4h19.4c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-19c1-2.7 1.9-5.6 2.6-8.6h20.1zm30.6 25.5h-4.6l1.5-9.5h1.6l1.5 9.5zm-55.4-17h-34.9v-8.6h37.6c-.8 3.1-1.7 6-2.7 8.6zm-34.9 1h34.5c-.6 1.4-1.2 2.8-1.8 4h-32.7v-4zm4.3 6.1h27.3c-.7 1.3-1.5 2.5-2.3 3.6-.3.4-.2 1.1.2 1.4.2.1.4.2.6.2.3 0 .6-.1.8-.4 1-1.4 2-3 2.9-4.8h51.3l-1.7 10.8c0 .3 0 .6.2.8.2.2.5.4.8.4h6.9c.3 0 .6-.1.8-.4.2-.2.3-.5.2-.8l-1.7-10.8h4.8v16h-11.9c-2.5-2.7-3.6-4.5-3.7-4.6-.2-.4-.7-.6-1.1-.4l-10.7 3.1c-.3.1-.5.2-.6.5-.1.2-.2.5-.1.8l.2.6h-8.8v-5.7c0-.6-.4-1-1-1h-17.2c-.6 0-1 .4-1 1v5.7h-22.6c-1.8 0-3.3 1.5-3.3 3.3v15.1c0 5.5-.3 11-.7 16.6h-2.7c-5.4-.4-6.1-2.8-6.1-4.9v-46.1zm207.4 18v85.3c-11.3.5-26.1-9.9-43.2-21.8-.3-.2-.6-.4-.9-.7 1.7-2.3 1.3-5.5-1-7.3l-48.6-37.3c-1.1-.8-2.5-1.2-3.9-1-1.4.2-2.6.9-3.5 2 0 0-.1.1-.1.2l-4.7-3.6 1-1.3c.2-.2.2-.5.2-.7 0-.3-.2-.5-.4-.7l-4-3.1.6-.8c.3-.4.3-1.1-.2-1.4-.4-.3-1.1-.3-1.4.2l-.6.8-4-3.1c-.4-.3-1.1-.3-1.4.2l-1.1 1.4c-3.8-2.5-6.8-5-9-7.2h126.2zm-18.3-2h-15.2v-4.7h15.2v4.7zm25.5 85c-1.4.9-3 1.5-4.6 1.9-.5.1-1 .2-1.6.2v-85.2h4.8c.7 0 1.3.6 1.3 1.3v81.7c0 .1.1.1.1.1zm2.5-29.3c.8 8.1 1.6 16.5 2.2 25.1-.9 1.1-1.8 2-2.7 2.8v-33.2c.1 1.8.3 3.5.5 5.3zm-68.2 15.2c1.7 1.1 3.3 2.2 4.9 3.3-.2.1-.4.2-.5.3-.5.7-1.3 1.1-2.1 1.2-.8.1-1.7-.1-2.4-.6l-2.2-1.7c.2 0 .5-.1.6-.4l1.7-2.1zm-3.3 1c-.2.2-.2.5-.2.7l-7.8-6c.2 0 .5-.1.6-.4l2.4-3.1 6.9-9 2.7-3.5 7.4 5.7-12 15.6zm-80.1-72.2l8.9-2.6c1.3 1.9 5.7 7.7 14.7 13.6l-5.6 7.3c-12.6-9.1-16.8-15.9-18-18.3zm18.4 21.1l3.2 2.5-.5.6-3.2-2.5.5-.6zm4.8 3.7l3.2 2.5-.5.6-3.2-2.5.5-.6zm-3.6-5.3l5.6-7.3 8.1 6.2-5.6 7.3-8.1-6.2zm14.9-2.7l-3.2-2.5.4-.5 3.2 2.5-.4.5zm-4.8-3.7l-3.2-2.5.4-.5 3.2 2.5-.4.5zm5.2 6.5l10.3 7.9-5.7 7.4-10.3-7.9 5.7-7.4zm11.5 6.3l-4.1-3.2.1-.1c.5-.7 1.3-1.1 2.1-1.2.9-.1 1.7.1 2.4.6l1.6 1.2-2.1 2.7zm-12.4 7.7c.1-.1.1-.2.2-.3l4.1 3.2-2.2 2.8-1.5-1.2c-.7-.5-1.1-1.3-1.2-2.1s.1-1.7.6-2.4zm13.4-5.7l2.7-3.5 7.4 5.7-9.6 12.5-2.8 3.6-7.4-5.7 9.7-12.6zm26.7 33.5l-24-18.4 5.7-7.4 24 18.4-5.7 7.4zm6.9-9l-24-18.4 2.1-2.7 24 18.4-2.1 2.7zm-32.1-7.8l24 18.4-1.7 2.3c-.2.2-.2.5-.2.7l-24.2-18.6 2.1-2.8zm44.7 13.3l2 1.5c1.4 1.1 1.7 3.1.6 4.5v.1c-1.5-1.1-3.1-2.2-4.7-3.3l2.1-2.8zm-121.7-57.6v-4.7h15.2v4.7h-15.2zm112.7 69.3l5.7-7.4c2.5 1.7 4.9 3.4 7.3 5.1 19.5 13.7 34.9 24.4 47.3 21.8 4.1-.9 7.6-3.2 10.6-7l.3-.3c.2-.3.4-.5.6-.8l1.3 8.2c-15 19.2-35.7 5.5-73.1-19.6zm15.1-77.8c-5-7.8-7.1-17.4-7.3-25.5.2.4.5.6.9.6.1 0 .2 0 .4-.1.5-.2.8-.8.6-1.3-.8-2 1.6-4.1 4.1-6.4 2.4-2.2 4.8-4.4 4.7-6.9-.1-1.3-.8-2.5-2.2-3.6l3.8-6.1-5 49.3zm-1.5-42.8l-1.4 2.2c-.3.5-.1 1.1.3 1.4.2.1.3.2.5.2.3 0 .7-.2.8-.5l1.3-2.1c.8.7 1.2 1.3 1.2 2 .1 1.6-2 3.5-4.1 5.3-1.8 1.6-3.8 3.4-4.5 5.4.2-5.4 1.3-9.8 2.9-12.2.1-.2.2-.3.3-.5.3-.3.5-.6.8-.8.7-.4 1.3-.5 1.9-.4zm-7.7 17.7c0 1 .1 2 .2 3.1.8 9.6 4 18.5 8.8 25.1l-.5 5.4H274c-3.6-11.1-5.6-23.5-5-33.6zm-46.1-29.3c4.3 5 11.2 15.9 12.8 25.6 1.2 7 .4 20.2-.1 29.9-.2 2.7-.3 5.2-.4 7.3h-29v-16h2.8c.6 0 1-.4 1-1v-15.6c0-.6-.4-1-1-1h-39.2c-1.9-6.1-2.9-14.3-3.1-24.4h3.6c.6 0 1-.4 1-1V197h2.8c16.7 0 29.1-2.3 37.4-6.9 1.7 1.9 7.4 8.5 11.4 13.2zm-10-40.3c1.7 1.8 2.2 4.8 1.9 6.8v.5c-1 12.7-15.2 19.1-42.4 19.1h-28.1c-27.1 0-41.4-6.4-42.4-19.1v-.5c-.2-2.1.3-5 1.9-6.8.5-.6 1.1-1 1.8-1.3H211c.7.3 1.3.7 1.9 1.3zm-39.6-3.3h-6c.7-2.7 2.1-9.2 1.2-15.2 3.3 4.1 4.7 9.8 4.8 15.2zm-7.5-18c2.3 6.5.1 15.6-.6 18h-18.4c-.6-2.3-2.7-10.7-.8-17.2 2.8-2.5 6.2-3.9 10-3.9 4.1-.1 7.3 1.1 9.8 3.1zm-22.4 3.6c-.7 5.8.7 11.8 1.3 14.4h-6c.2-5.7 1.9-10.7 4.7-14.4zm-48.1 27c0-.2 0-.5-.1-.7-.2-2.5.4-6.1 2.3-8.2 1.1-1.2 2.5-1.8 4.3-1.8h2c-.2.2-.5.4-.7.6-1.9 2.1-2.4 5.3-2.2 7.6v.5c1 13.3 15.6 20 43.4 20h28.1c27.7 0 42.3-6.7 43.4-20v-.5c.2-2.3-.3-5.6-2.2-7.6-.2-.2-.4-.4-.7-.6h2c1.7 0 3.2.6 4.3 1.8 1.9 2.1 2.5 5.7 2.3 8.2 0 .2 0 .4-.1.7-1.1 15-17 22.7-47.3 22.7h-31.6c-30.2 0-46.1-7.6-47.2-22.7zm-14.1 88.1c-1-8.8-2.2-18.9-.2-31.5 1.5-9.5 8.5-20.6 12.8-25.6 4-4.7 9.7-11.3 11.4-13.2 8.2 4.6 20.7 6.9 37.4 6.9h1.6v10.2c0 .6.4 1 1 1h3.8c.4 8.1-.5 16.6-2.2 24.4h-39c-.6 0-1 .4-1 1v15.6c0 .6.4 1 1 1h3.3v37H79.5c3-7.4 6.8-12.6 6.9-12.7.3-.4.2-1.1-.2-1.4-.4-.3-1.1-.2-1.4.2-.1.1-1.1 1.6-2.5 3.9.3-5.4-.4-10.8-1.1-16.8zM75.4 311c-.7-4.1.4-14 3.3-21.8H111v7.1c0 4.2 2.7 6.5 8 6.9h2.7c-.4 5.4-.9 10.9-1.5 16.5H94.6c-12.1-.1-18.4-4.6-19.2-8.7zm-11.6 77.1v-66.5H120c-1.4 14.1-2.9 28.7-2.8 44.1 0 10.7 1.8 16 4.5 22.3H63.8zm55.3-22.3c0-15.3 1.4-29.8 2.8-43.9.2-1.8.3-3.5.5-5.2v40.8c0 3.2 1.2 6.2 3.1 8.5v26.2c-.2-.5-.5-1.1-.7-1.6-3.5-8-5.6-12.8-5.7-24.8zm9.5 33.7c-.1-.2-.2-.5-.3-.7-.5-1.4-.8-2.9-.8-4.5v-26.5c2.2 1.8 5.1 2.8 8.1 2.8h37.2c.2 0 .3-.1.5-.1v3.9h-1.7c-.6 0-1 .4-1 1V387c0 .6.4 1 1 1h1.7v3.8H172c-.6 0-1 .4-1 1s.4 1 1 1h1.3v9.2c0 .3.1.6.4.8l4.3 3.4h-37.7c-5.2-.1-9.7-3.2-11.7-7.7zm183 7.6H274l4.3-3.4c.2-.2.4-.5.4-.8v-8.2h1.3c.6 0 1-.4 1-1s-.4-1-1-1h-1.3v-4.8h1.7c.6 0 1-.4 1-1v-11.6c0-.6-.4-1-1-1h-1.7v-3.7h37.7c3 0 5.8-1 8.1-2.8v26.5c0 1.6-.3 3.1-.8 4.5l-.3.6c-2 4.6-6.5 7.7-11.8 7.7zm14.9-15v-26.2c.3-.4.6-.7.8-1.1 0-.1 0-.1.1-.2 1.9-.8 3.7-1.8 5.5-3.2v4.4c0 12-2.2 16.8-5.7 24.8-.3.5-.5 1-.7 1.5zm107.4-15.3l8.4 10.8c.1.1.1.3 0 .3 0 .1-.1.2-.3.2H330.4c2.2-5.1 3.7-9.5 4.2-16.5h88.8c4 0 7.9 1.9 10.5 5.2zm-65.7-37.7v30.5h-6.1V338.5c1.1.1 2.2.1 3.4.1 1 0 2 0 3-.1-.2.2-.3.4-.3.6zm22.1-6.5c-29.7 9.2-48.8.6-57.8-5.5-.1-.7-.1-1.4-.2-2h6.4c9.1 4.8 19 7.2 29.2 7.2h.9c.1 0 .2.1.3.1.1 0 .2 0 .3-.1 9.8-.2 19.9-2.6 29.7-7.3 27.3-12.8 49.4-39.8 59.9-72.2-3 13.8-8.9 27.6-16.9 39.7-9.1 13.8-25.5 32-51.8 40.1zm65.8-14c.1 1.2-.2 2.3-1 3.1-.8.9-1.9 1.3-3 1.3H415c13.4-8.9 22.8-20.2 29-29.5 3.1-4.6 5.8-9.5 8.2-14.5l3.9 39.6z"/><path d="M322.1 233.3h6.5c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-5.9l2.2-21.3c0-.3-.2-.5-.4-.5-.3 0-.5.2-.5.4l-2.2 21.9c0 .1 0 .3.1.4-.1 0 0 .1.2.1zm79.7.8h8.3c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-7.8l2.1-22.1c0-.3-.2-.5-.5-.5s-.5.2-.5.5l-2.2 22.6c0 .1 0 .3.1.4.2 0 .4.1.5.1zm-232.3 8.6c.3.1.7.1 1 .1 1.2 0 2.5-.5 3.3-1.4 1-1 1.4-2.3 1.1-3.6-.1-.5-.7-.9-1.2-.8-.5.1-.9.7-.8 1.2.2.8-.3 1.5-.5 1.8-.6.6-1.6.9-2.5.7-.5-.1-1.1.2-1.2.8-.1.5.3 1.1.8 1.2z"/><path d="M171.4 243.4c-.5 0-1 .4-1 1s.4 1 1 1h.2c2.6 0 5-2 5.5-4.5.1-.5-.2-1.1-.8-1.2-.5-.1-1.1.2-1.2.8-.3 1.7-2 3-3.7 2.9zm-32.3 15.8c.3 0 .7 0 1-.1.5-.1.9-.6.8-1.2-.1-.5-.6-.9-1.2-.8-.9.2-1.8-.1-2.5-.7-.3-.3-.7-.9-.5-1.8.1-.5-.2-1.1-.8-1.2-.5-.1-1.1.2-1.2.8-.3 1.3.1 2.6 1.1 3.6.8.9 2 1.4 3.3 1.4z"/><path d="M138 261.9h.2c.6 0 1-.5 1-1 0-.6-.5-1-1-1-1.7.1-3.4-1.3-3.7-2.9-.1-.5-.6-.9-1.2-.8-.5.1-.9.6-.8 1.2.5 2.5 2.9 4.5 5.5 4.5z"/><path d="M131 264.5c.1 0 .2 0 .4-.1 1.2-.4 2.2-1.1 3-2 .4-.4.3-1-.1-1.4-.4-.4-1-.3-1.4.1-.6.7-1.3 1.2-2.2 1.5-.5.2-.8.8-.6 1.3.1.3.5.6.9.6zm33.7 99.2h-26.1c-4.3 0-7.9-3.5-7.9-7.9v-82c0-.3-.2-.5-.5-.5s-.5.2-.5.5v82c0 4.9 4 8.9 8.9 8.9h26.1c.3 0 .5-.2.5-.5s-.2-.5-.5-.5zm91.6 0h-60.6c-.3 0-.5.2-.5.5s.2.5.5.5h60.6c.3 0 .5-.2.5-.5s-.3-.5-.5-.5z"/></svg>
```

### Rendered output

#### class

```oobleck
string | placeholder_svg_tag: string
```

Specify the `class` attribute for the `<svg>` tag.

###### Code

```liquid
{{ 'collection-1' | placeholder_svg_tag: 'custom-class' }}
```

###### Output

```html
<svg class="custom-class" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 525.5 525.5"><path d="M439.9 310.8c-.2.2-.1.5.1.7l13.2 8.7c.1.1.2.1.3.1.2 0 .3-.1.4-.2.2-.2.1-.5-.1-.7l-13.2-8.7c-.3-.2-.6-.1-.7.1z"/><path d="M463.4 235c1.1-9.4-1-18.6-5.1-21.6-1.7-1.2-3.6-1.3-5.4-.3l-.3.3-6.1-9.8-.1-.1-.8-8.1c-.2-1.9-1.7-3.3-3.6-3.3h-33c-1.6-33-14-75.8-44-75.9h-.1c-7.8 0-14.9 3.1-21.1 9.3-12.5 12.5-21 38.1-22.3 66.5h-20.7v-2.5c0-1.5-1.2-2.7-2.7-2.7h-3.8c-1.5 0-2.7 1.2-2.7 2.7v2.5H288c-1.9 0-3.4 1.4-3.6 3.3l-.8 8.4-5.9 9.5c-.1-.1-.3-.3-.5-.3-.8-.2-2.2-.3-3.6.8-.4.3-.7.6-1.1 1.1-8.5 9.5-6.5 32.6-.8 51.2h-34.5c.1-2.1.2-4.6.4-7.3.6-10.3 1.3-23.1.1-30.3-1.7-10.1-8.9-21.5-13.3-26.6-3.9-4.5-9.3-10.8-11.1-12.9 6.2-4 9.6-9.6 10.1-16.6v-.6c.3-3-.4-7.1-2.8-9.7-1.5-1.7-3.4-2.5-5.7-2.5h-39.6c-.3-11.5-6.3-23-19.3-23-4.3 0-8.2 1.7-11.4 4.5l-.2-.1c0 .1-.1.2-.1.4-4.5 4.2-7.4 10.8-7.6 18.3h-34.9c-2.3 0-4.3.8-5.7 2.5-2.3 2.6-3.1 6.7-2.8 9.7v.6c.5 7 3.9 12.6 10.1 16.6-1.9 2.2-7.3 8.4-11.1 12.9-5.4 6.3-11.9 17.3-13.3 26.6-2 12.9-.8 23 .2 32 .9 7.8 1.7 14.6.3 21.6-.8 1.7-1.7 3.6-2.4 5.6-3.2 8.4-4.4 18.9-3.6 23.5.7 3.9 4.3 6.7 8.9 8.3H62.8c-.6 0-1 .4-1 1V389c0 .6.4 1 1 1h59.7c.2.4.4.8.5 1.2 1.1 2.4 2.2 5 3.5 8.2.1.2.2.5.3.7 2.3 5.2 7.5 8.8 13.5 8.8h171.3c6 0 11.2-3.6 13.5-8.8v-.1l.3-.6c1.3-3.2 2.5-5.9 3.5-8.3.2-.4.4-.8.5-1.2H442c.9 0 1.7-.5 2.1-1.3.4-.8.3-1.7-.2-2.4l-8.4-10.8c-3-3.8-7.4-6-12.3-6h-53v-30.5c0-.3-.1-.5-.3-.7 6.3-.4 13.3-1.6 21-4 7.8-2.4 14.7-5.7 20.9-9.5H452c1.7 0 3.4-.7 4.5-2s1.7-3 1.5-4.7l-4.2-42.4c0-.1-.1-.3-.1-.4 5.8-13.2 9.3-27.2 9.7-40.5.1.4.1.3 0 .3zm-9.4-20.2c1.1-.6 2.2-.6 3.2.2 1.9 1.4 3.5 5 4.2 9.7-1.5-1.6-3.8-2-5.7-2.3l-1.5-.3c-1.4-.3-2.2-1-2.5-2.1-.3-1 0-2.2.7-3.3l1 1.6c.2.3.5.5.8.5.2 0 .4 0 .5-.2.5-.3.6-.9.3-1.4l-1.4-2.2c.2-.1.3-.1.4-.2zm-2.8 0c-1.5 1.7-2 3.8-1.5 5.7.5 1.8 1.9 3 4 3.5.5.1 1.1.2 1.6.3 3.1.6 5.1 1.1 5.5 3.8.1.5.5.8.9.8.1 3-.2 6.4-.9 9.8-1.9 8.8-4.6 17.3-8.2 25.5l-5.7-56.1 4.3 6.7zm-50.1-7.5h8.3l3.1 27.6c.1.5-.1.9-.4 1.2-.3.3-.7.5-1.2.5h-11.4c-.5 0-.9-.2-1.2-.5s-.4-.8-.4-1.2l3.2-27.6zm10.2-.4l-.1-.7c-.1-.5-.5-.9-1-.9h-10.1c-.5 0-.9.4-1 .9l-.1.7v-7.7h2.3v.6c0 1.3 1.1 2.4 2.4 2.4h3.2c1.3 0 2.4-1.1 2.4-2.4v-.6h2v7.7zm-49.2-14.7V140c1 .3 2 .5 3.1.5s2.1-.2 3.1-.5v52.2h-6.2zm-32.6 0c1.2-26.6 8.8-50.1 19.9-61.3 2.6-2.6 5.4-4.5 8.4-5.7-1.3 1.6-2.1 3.6-2.1 5.9 0 3.4 1.8 6.3 4.5 8 0 .1-.1.2-.1.4v52.7h-30.6zm-8.2 15.2h8.3l3.1 27.6c.1.5-.1.9-.4 1.2s-.7.5-1.2.5h-11.4c-.5 0-.9-.2-1.2-.5s-.4-.8-.4-1.2l3.2-27.6zm10.2-.4l-.1-.7c-.1-.5-.5-.9-1-.9h-10.1c-.5 0-.9.4-1 .9l-.1.7v-7.7h2.1v.5c0 1.3 1.1 2.4 2.4 2.4h3c1.3 0 2.4-1.1 2.4-2.4v-.6h2.3v7.8zm33.6-83.2c.6 0 1.2 0 1.7.1 3.3.8 5.8 3.7 5.8 7.2 0 4.1-3.3 7.4-7.4 7.4s-7.4-3.3-7.4-7.4c0-3.5 2.4-6.4 5.7-7.2.5-.1 1-.1 1.6-.1zm5 15.3c2.7-1.7 4.4-4.6 4.4-8 0-2.3-.8-4.3-2.1-6 17.4 6.6 27.3 36.7 28.7 67.1h-31v-52.7c.1-.2.1-.3 0-.4zm-24.8-12c5.8-5.8 12.5-8.8 19.7-8.8h.1c31 .1 42.2 48.8 42.2 81.5 0 .2-.2.4-.4.4h-3.2c-.2 0-.4-.2-.4-.4 0-2.1 0-4.1-.1-6.2.1-.1.1-.3.1-.5s-.1-.4-.2-.5c-1.5-34.5-14-68.8-36.1-70.8-.6-.1-1.3-.2-2-.2s-1.4.1-2 .2c-5.5.5-10.6 3.1-15.2 7.6-12.6 12.5-20.7 40.1-20.7 70.3 0 .2-.2.4-.4.4h-3c-.2 0-.4-.2-.4-.4.1-30.8 8.7-59.3 22-72.6zM299 208h-5.3l1.7-13.5h1.8L299 208zm-5.4-16v-2.3c0-.4.3-.7.7-.7h3.8c.4 0 .7.3.7.7v2.5h-5.4c.2-.1.2-.1.2-.2zm-7.1 3.7c.1-.8.8-1.5 1.6-1.5h5.3l-1.9 14.7c0 .3.1.6.2.8.2.2.5.3.8.3h7.6c.3 0 .6-.1.8-.3.2-.2.3-.5.2-.8l-1.9-14.7h22.3c0 1-.1 2-.1 3.1h-3.1c-.6 0-1 .4-1 1v11.8c0 .6.4 1 1 1 .2 0 .4-.1.6-.2l-2.7 23.9c-.1 1 .2 2 .9 2.8.7.8 1.6 1.2 2.7 1.2h11.4c1 0 2-.4 2.7-1.2.7-.8 1-1.8.9-2.8l-2.7-23.9c.2.1.3.2.6.2.6 0 1-.4 1-1v-11.8c0-.6-.4-1-1-1H329.4c0-1 0-2.1.1-3.1h71.9c0 1 .1 2 .1 3h-3.3c-.6 0-1 .4-1 1V210c0 .6.4 1 1 1 .2 0 .4-.1.6-.2l-2.7 23.9c-.1 1 .2 2 .9 2.8.7.8 1.6 1.2 2.7 1.2h11.4c1 0 2-.4 2.7-1.2.7-.8 1-1.8.9-2.8l-2.7-23.9c.2.1.3.2.6.2.6 0 1-.4 1-1v-11.8c0-.6-.4-1-1-1h-3c0-1 0-2-.1-3.1h32.9c.8 0 1.5.6 1.6 1.5l7.3 72.1c-11.7 24.7-30.6 45-52.5 55.3h-66.3c0-.4-.1-.9-.1-1.3-.5-4.8-.9-9.5-1.3-14.1h81.6c.3 0 .5-.2.5-.5s-.2-.5-.5-.5H331c-.6-7.5-1.1-14.8-1.1-22v-15.1c0-1.8-1.5-3.3-3.3-3.3h-22.2v-5.7c0-.6-.4-1-1-1h-17.2c-.6 0-1 .4-1 1v5.7h-5.5l6.8-70.5zm75.6 134.2V325h6.1v5.1c-2.1.1-4.1 0-6.1-.2zm-18.6-4.9h16.6v4.6c-5.7-.7-11.3-2.2-16.6-4.6zm26.7 0h23.6c-7.9 3.1-15.8 4.8-23.6 5.1V325zm-10.1 44.6h-25.3c.1-1.2.1-2.5.1-3.8v-6.2c1.1-1.1 2.1-2.3 3.1-3.6.2-.2.2-.5.2-.8l-1.8-11.2c-.1-.4-.4-.7-.8-.8-.4-.1-.8.1-1 .5-.1.2-.3.5-.4.7-.4-5-.8-9.9-1.2-14.8 5.8 3.7 14.8 7.8 27.3 8.8 0 .1-.1.2-.1.3v30.9zm-81.5 6.8h.7v9.6h-.7v-9.6zm-2 16.3h-10.9v-16.3h4.5v8.9c0 .6.4 1 1 1s1-.4 1-1v-8.9h4.5v16.3zm-101.2 1h10.9v8.7l-5.5 4.4-5.5-4.4v-8.7zm-2-7.8h-.7v-9.6h.7v9.6zm2 1v-10.6h4.5v8.9c0 .6.4 1 1 1s1-.4 1-1v-8.9h4.5v15.3h-10.9v-4.7zm0-30.7h10.9v18.2h-4.5v-1c0-.6-.4-1-1-1s-1 .4-1 1v1h-4.5v-18.2zm12.9 20.2h.7v9.6h-.7v-9.6zm-.4 27.3c.2-.2.4-.5.4-.8v-9.2h1.3c.6 0 1-.4 1-1s-.4-1-1-1h-1.3v-3.8h1.7c.6 0 1-.4 1-1v-11.6c0-.6-.4-1-1-1h-1.7v-4.1c.2.2.4.3.7.3h74.4c.1 0 .2 0 .3-.1v3.8H262c-.6 0-1 .4-1 1v11.6c0 .6.4 1 1 1h1.7v4.8h-1.3c-.6 0-1 .4-1 1s.4 1 1 1h1.3v8.2c0 .3.1.6.4.8l4.3 3.4h-84.8l4.3-3.3zm75.8-17.8h-.7v-9.6h.7v9.6zm2 16.6v-7.7h10.9v7.7l-5.5 4.4-5.4-4.4zm6.5-28.1v-1c0-.6-.4-1-1-1s-1 .4-1 1v1h-4.5v-18.2h10.9v18.2h-4.4zm6.4-18.2h2.8c.6 0 1-.4 1-1s-.4-1-1-1h-20.6c-.6 0-1 .4-1 1s.4 1 1 1h2.8v12.5c-.1 0-.2-.1-.3-.1H189c-.3 0-.6.1-.7.3v-12.8h2.8c.6 0 1-.4 1-1s-.4-1-1-1h-20.6c-.6 0-1 .4-1 1s.4 1 1 1h2.8v12.6c-.1-.1-.3-.1-.5-.1h-37.2c-6.2 0-11.2-5-11.2-11.2v-88c0-.7.6-1.3 1.3-1.3h51.7c2 3.3 6.8 9.6 17.9 17.6l-1.1 1.4c-.2.2-.2.5-.2.7 0 .3.2.5.4.7l4 3.1-.6.8c-.3.4-.3 1.1.2 1.4.2.1.4.2.6.2.3 0 .6-.1.8-.4l.6-.8 4 3.1c.2.1.4.2.6.2.3 0 .6-.1.8-.4l1.1-1.4 4.7 3.6c-.1.1-.2.1-.3.2-.8 1.1-1.2 2.5-1 3.8.2 1.4.9 2.6 2 3.5l48.7 37.3c.9.7 2 1.1 3.2 1.1h.7c1.4-.2 2.6-.9 3.5-2 .2-.2.2-.5.2-.7 21.9 14.6 38.4 24.9 51.4 24.9 1.5 0 3-.2 4.5-.5-2.1 1.9-4.8 3-7.6 3h-37.7v-12.3zM152.6 197v5h-6.5v-5h6.5zm-6.5 6h6.5v3.2h-6.5V203zm7.5 5.2c.6 0 1-.4 1-1V197h6.2v10.2c0 .6.4 1 1 1h2.9c.2 10.1 1.1 18.1 3 24.4h-18.9c1.7-7.8 2.6-16.3 2.2-24.4h2.6zm9.2-2V203h6.5v3.2h-6.5zm6.6-4.2h-6.5v-5h6.5v5zm-1 32.6c.5 1.6 1.1 3 1.8 4.3.2.3.5.6.9.6.2 0 .3 0 .4-.1.5-.2.7-.8.4-1.3-.5-1-1-2.2-1.4-3.4H208v8.6h-25.4c-.3 0-.5.2-.5.5s.2.5.5.5H208v4h-27.1c-.7-.3-3.4-2.6-4.2-3.5-.4-.4-1-.5-1.4-.1-.4.4-.5 1-.1 1.4.4.4 1.3 1.3 2.4 2.2h-34c.6-1.3 1.2-2.6 1.7-4h19.4c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-19c1-2.7 1.9-5.6 2.6-8.6h20.1zm30.6 25.5h-4.6l1.5-9.5h1.6l1.5 9.5zm-55.4-17h-34.9v-8.6h37.6c-.8 3.1-1.7 6-2.7 8.6zm-34.9 1h34.5c-.6 1.4-1.2 2.8-1.8 4h-32.7v-4zm4.3 6.1h27.3c-.7 1.3-1.5 2.5-2.3 3.6-.3.4-.2 1.1.2 1.4.2.1.4.2.6.2.3 0 .6-.1.8-.4 1-1.4 2-3 2.9-4.8h51.3l-1.7 10.8c0 .3 0 .6.2.8.2.2.5.4.8.4h6.9c.3 0 .6-.1.8-.4.2-.2.3-.5.2-.8l-1.7-10.8h4.8v16h-11.9c-2.5-2.7-3.6-4.5-3.7-4.6-.2-.4-.7-.6-1.1-.4l-10.7 3.1c-.3.1-.5.2-.6.5-.1.2-.2.5-.1.8l.2.6h-8.8v-5.7c0-.6-.4-1-1-1h-17.2c-.6 0-1 .4-1 1v5.7h-22.6c-1.8 0-3.3 1.5-3.3 3.3v15.1c0 5.5-.3 11-.7 16.6h-2.7c-5.4-.4-6.1-2.8-6.1-4.9v-46.1zm207.4 18v85.3c-11.3.5-26.1-9.9-43.2-21.8-.3-.2-.6-.4-.9-.7 1.7-2.3 1.3-5.5-1-7.3l-48.6-37.3c-1.1-.8-2.5-1.2-3.9-1-1.4.2-2.6.9-3.5 2 0 0-.1.1-.1.2l-4.7-3.6 1-1.3c.2-.2.2-.5.2-.7 0-.3-.2-.5-.4-.7l-4-3.1.6-.8c.3-.4.3-1.1-.2-1.4-.4-.3-1.1-.3-1.4.2l-.6.8-4-3.1c-.4-.3-1.1-.3-1.4.2l-1.1 1.4c-3.8-2.5-6.8-5-9-7.2h126.2zm-18.3-2h-15.2v-4.7h15.2v4.7zm25.5 85c-1.4.9-3 1.5-4.6 1.9-.5.1-1 .2-1.6.2v-85.2h4.8c.7 0 1.3.6 1.3 1.3v81.7c0 .1.1.1.1.1zm2.5-29.3c.8 8.1 1.6 16.5 2.2 25.1-.9 1.1-1.8 2-2.7 2.8v-33.2c.1 1.8.3 3.5.5 5.3zm-68.2 15.2c1.7 1.1 3.3 2.2 4.9 3.3-.2.1-.4.2-.5.3-.5.7-1.3 1.1-2.1 1.2-.8.1-1.7-.1-2.4-.6l-2.2-1.7c.2 0 .5-.1.6-.4l1.7-2.1zm-3.3 1c-.2.2-.2.5-.2.7l-7.8-6c.2 0 .5-.1.6-.4l2.4-3.1 6.9-9 2.7-3.5 7.4 5.7-12 15.6zm-80.1-72.2l8.9-2.6c1.3 1.9 5.7 7.7 14.7 13.6l-5.6 7.3c-12.6-9.1-16.8-15.9-18-18.3zm18.4 21.1l3.2 2.5-.5.6-3.2-2.5.5-.6zm4.8 3.7l3.2 2.5-.5.6-3.2-2.5.5-.6zm-3.6-5.3l5.6-7.3 8.1 6.2-5.6 7.3-8.1-6.2zm14.9-2.7l-3.2-2.5.4-.5 3.2 2.5-.4.5zm-4.8-3.7l-3.2-2.5.4-.5 3.2 2.5-.4.5zm5.2 6.5l10.3 7.9-5.7 7.4-10.3-7.9 5.7-7.4zm11.5 6.3l-4.1-3.2.1-.1c.5-.7 1.3-1.1 2.1-1.2.9-.1 1.7.1 2.4.6l1.6 1.2-2.1 2.7zm-12.4 7.7c.1-.1.1-.2.2-.3l4.1 3.2-2.2 2.8-1.5-1.2c-.7-.5-1.1-1.3-1.2-2.1s.1-1.7.6-2.4zm13.4-5.7l2.7-3.5 7.4 5.7-9.6 12.5-2.8 3.6-7.4-5.7 9.7-12.6zm26.7 33.5l-24-18.4 5.7-7.4 24 18.4-5.7 7.4zm6.9-9l-24-18.4 2.1-2.7 24 18.4-2.1 2.7zm-32.1-7.8l24 18.4-1.7 2.3c-.2.2-.2.5-.2.7l-24.2-18.6 2.1-2.8zm44.7 13.3l2 1.5c1.4 1.1 1.7 3.1.6 4.5v.1c-1.5-1.1-3.1-2.2-4.7-3.3l2.1-2.8zm-121.7-57.6v-4.7h15.2v4.7h-15.2zm112.7 69.3l5.7-7.4c2.5 1.7 4.9 3.4 7.3 5.1 19.5 13.7 34.9 24.4 47.3 21.8 4.1-.9 7.6-3.2 10.6-7l.3-.3c.2-.3.4-.5.6-.8l1.3 8.2c-15 19.2-35.7 5.5-73.1-19.6zm15.1-77.8c-5-7.8-7.1-17.4-7.3-25.5.2.4.5.6.9.6.1 0 .2 0 .4-.1.5-.2.8-.8.6-1.3-.8-2 1.6-4.1 4.1-6.4 2.4-2.2 4.8-4.4 4.7-6.9-.1-1.3-.8-2.5-2.2-3.6l3.8-6.1-5 49.3zm-1.5-42.8l-1.4 2.2c-.3.5-.1 1.1.3 1.4.2.1.3.2.5.2.3 0 .7-.2.8-.5l1.3-2.1c.8.7 1.2 1.3 1.2 2 .1 1.6-2 3.5-4.1 5.3-1.8 1.6-3.8 3.4-4.5 5.4.2-5.4 1.3-9.8 2.9-12.2.1-.2.2-.3.3-.5.3-.3.5-.6.8-.8.7-.4 1.3-.5 1.9-.4zm-7.7 17.7c0 1 .1 2 .2 3.1.8 9.6 4 18.5 8.8 25.1l-.5 5.4H274c-3.6-11.1-5.6-23.5-5-33.6zm-46.1-29.3c4.3 5 11.2 15.9 12.8 25.6 1.2 7 .4 20.2-.1 29.9-.2 2.7-.3 5.2-.4 7.3h-29v-16h2.8c.6 0 1-.4 1-1v-15.6c0-.6-.4-1-1-1h-39.2c-1.9-6.1-2.9-14.3-3.1-24.4h3.6c.6 0 1-.4 1-1V197h2.8c16.7 0 29.1-2.3 37.4-6.9 1.7 1.9 7.4 8.5 11.4 13.2zm-10-40.3c1.7 1.8 2.2 4.8 1.9 6.8v.5c-1 12.7-15.2 19.1-42.4 19.1h-28.1c-27.1 0-41.4-6.4-42.4-19.1v-.5c-.2-2.1.3-5 1.9-6.8.5-.6 1.1-1 1.8-1.3H211c.7.3 1.3.7 1.9 1.3zm-39.6-3.3h-6c.7-2.7 2.1-9.2 1.2-15.2 3.3 4.1 4.7 9.8 4.8 15.2zm-7.5-18c2.3 6.5.1 15.6-.6 18h-18.4c-.6-2.3-2.7-10.7-.8-17.2 2.8-2.5 6.2-3.9 10-3.9 4.1-.1 7.3 1.1 9.8 3.1zm-22.4 3.6c-.7 5.8.7 11.8 1.3 14.4h-6c.2-5.7 1.9-10.7 4.7-14.4zm-48.1 27c0-.2 0-.5-.1-.7-.2-2.5.4-6.1 2.3-8.2 1.1-1.2 2.5-1.8 4.3-1.8h2c-.2.2-.5.4-.7.6-1.9 2.1-2.4 5.3-2.2 7.6v.5c1 13.3 15.6 20 43.4 20h28.1c27.7 0 42.3-6.7 43.4-20v-.5c.2-2.3-.3-5.6-2.2-7.6-.2-.2-.4-.4-.7-.6h2c1.7 0 3.2.6 4.3 1.8 1.9 2.1 2.5 5.7 2.3 8.2 0 .2 0 .4-.1.7-1.1 15-17 22.7-47.3 22.7h-31.6c-30.2 0-46.1-7.6-47.2-22.7zm-14.1 88.1c-1-8.8-2.2-18.9-.2-31.5 1.5-9.5 8.5-20.6 12.8-25.6 4-4.7 9.7-11.3 11.4-13.2 8.2 4.6 20.7 6.9 37.4 6.9h1.6v10.2c0 .6.4 1 1 1h3.8c.4 8.1-.5 16.6-2.2 24.4h-39c-.6 0-1 .4-1 1v15.6c0 .6.4 1 1 1h3.3v37H79.5c3-7.4 6.8-12.6 6.9-12.7.3-.4.2-1.1-.2-1.4-.4-.3-1.1-.2-1.4.2-.1.1-1.1 1.6-2.5 3.9.3-5.4-.4-10.8-1.1-16.8zM75.4 311c-.7-4.1.4-14 3.3-21.8H111v7.1c0 4.2 2.7 6.5 8 6.9h2.7c-.4 5.4-.9 10.9-1.5 16.5H94.6c-12.1-.1-18.4-4.6-19.2-8.7zm-11.6 77.1v-66.5H120c-1.4 14.1-2.9 28.7-2.8 44.1 0 10.7 1.8 16 4.5 22.3H63.8zm55.3-22.3c0-15.3 1.4-29.8 2.8-43.9.2-1.8.3-3.5.5-5.2v40.8c0 3.2 1.2 6.2 3.1 8.5v26.2c-.2-.5-.5-1.1-.7-1.6-3.5-8-5.6-12.8-5.7-24.8zm9.5 33.7c-.1-.2-.2-.5-.3-.7-.5-1.4-.8-2.9-.8-4.5v-26.5c2.2 1.8 5.1 2.8 8.1 2.8h37.2c.2 0 .3-.1.5-.1v3.9h-1.7c-.6 0-1 .4-1 1V387c0 .6.4 1 1 1h1.7v3.8H172c-.6 0-1 .4-1 1s.4 1 1 1h1.3v9.2c0 .3.1.6.4.8l4.3 3.4h-37.7c-5.2-.1-9.7-3.2-11.7-7.7zm183 7.6H274l4.3-3.4c.2-.2.4-.5.4-.8v-8.2h1.3c.6 0 1-.4 1-1s-.4-1-1-1h-1.3v-4.8h1.7c.6 0 1-.4 1-1v-11.6c0-.6-.4-1-1-1h-1.7v-3.7h37.7c3 0 5.8-1 8.1-2.8v26.5c0 1.6-.3 3.1-.8 4.5l-.3.6c-2 4.6-6.5 7.7-11.8 7.7zm14.9-15v-26.2c.3-.4.6-.7.8-1.1 0-.1 0-.1.1-.2 1.9-.8 3.7-1.8 5.5-3.2v4.4c0 12-2.2 16.8-5.7 24.8-.3.5-.5 1-.7 1.5zm107.4-15.3l8.4 10.8c.1.1.1.3 0 .3 0 .1-.1.2-.3.2H330.4c2.2-5.1 3.7-9.5 4.2-16.5h88.8c4 0 7.9 1.9 10.5 5.2zm-65.7-37.7v30.5h-6.1V338.5c1.1.1 2.2.1 3.4.1 1 0 2 0 3-.1-.2.2-.3.4-.3.6zm22.1-6.5c-29.7 9.2-48.8.6-57.8-5.5-.1-.7-.1-1.4-.2-2h6.4c9.1 4.8 19 7.2 29.2 7.2h.9c.1 0 .2.1.3.1.1 0 .2 0 .3-.1 9.8-.2 19.9-2.6 29.7-7.3 27.3-12.8 49.4-39.8 59.9-72.2-3 13.8-8.9 27.6-16.9 39.7-9.1 13.8-25.5 32-51.8 40.1zm65.8-14c.1 1.2-.2 2.3-1 3.1-.8.9-1.9 1.3-3 1.3H415c13.4-8.9 22.8-20.2 29-29.5 3.1-4.6 5.8-9.5 8.2-14.5l3.9 39.6z"/><path d="M322.1 233.3h6.5c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-5.9l2.2-21.3c0-.3-.2-.5-.4-.5-.3 0-.5.2-.5.4l-2.2 21.9c0 .1 0 .3.1.4-.1 0 0 .1.2.1zm79.7.8h8.3c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-7.8l2.1-22.1c0-.3-.2-.5-.5-.5s-.5.2-.5.5l-2.2 22.6c0 .1 0 .3.1.4.2 0 .4.1.5.1zm-232.3 8.6c.3.1.7.1 1 .1 1.2 0 2.5-.5 3.3-1.4 1-1 1.4-2.3 1.1-3.6-.1-.5-.7-.9-1.2-.8-.5.1-.9.7-.8 1.2.2.8-.3 1.5-.5 1.8-.6.6-1.6.9-2.5.7-.5-.1-1.1.2-1.2.8-.1.5.3 1.1.8 1.2z"/><path d="M171.4 243.4c-.5 0-1 .4-1 1s.4 1 1 1h.2c2.6 0 5-2 5.5-4.5.1-.5-.2-1.1-.8-1.2-.5-.1-1.1.2-1.2.8-.3 1.7-2 3-3.7 2.9zm-32.3 15.8c.3 0 .7 0 1-.1.5-.1.9-.6.8-1.2-.1-.5-.6-.9-1.2-.8-.9.2-1.8-.1-2.5-.7-.3-.3-.7-.9-.5-1.8.1-.5-.2-1.1-.8-1.2-.5-.1-1.1.2-1.2.8-.3 1.3.1 2.6 1.1 3.6.8.9 2 1.4 3.3 1.4z"/><path d="M138 261.9h.2c.6 0 1-.5 1-1 0-.6-.5-1-1-1-1.7.1-3.4-1.3-3.7-2.9-.1-.5-.6-.9-1.2-.8-.5.1-.9.6-.8 1.2.5 2.5 2.9 4.5 5.5 4.5z"/><path d="M131 264.5c.1 0 .2 0 .4-.1 1.2-.4 2.2-1.1 3-2 .4-.4.3-1-.1-1.4-.4-.4-1-.3-1.4.1-.6.7-1.3 1.2-2.2 1.5-.5.2-.8.8-.6 1.3.1.3.5.6.9.6zm33.7 99.2h-26.1c-4.3 0-7.9-3.5-7.9-7.9v-82c0-.3-.2-.5-.5-.5s-.5.2-.5.5v82c0 4.9 4 8.9 8.9 8.9h26.1c.3 0 .5-.2.5-.5s-.2-.5-.5-.5zm91.6 0h-60.6c-.3 0-.5.2-.5.5s.2.5.5.5h60.6c.3 0 .5-.2.5-.5s-.3-.5-.5-.5z"/></svg>
```

### Rendered output

---



<a id="filters-pluralize"></a>


## pluralize

```oobleck
number | pluralize: string, string
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Outputs the singular or plural version of a string based on a given number.

***

**Caution:** The \<code>pluralize\</code> filter applies English pluralization rules to determine which string to output. You shouldn\&#39;t use this filter on non-English strings because it could lead to incorrect pluralizations.

***

###### Code

```liquid
Cart item count: {{ cart.item_count }} {{ cart.item_count | pluralize: 'item', 'items' }}
```

###### Data

```json
{
  "cart": {
    "item_count": 2
  }
}
```

###### Output

```html
Cart item count: 2 items
```

---



<a id="filters-plus"></a>


## plus

```oobleck
number | plus: number
```

returns [number](https://shopify.dev/docs/api/liquid/basics#number)

Adds two numbers.

###### Code

```liquid
{{ 2 | plus: 2 }}
```

###### Output

```html
4
```

---



<a id="filters-preload-tag"></a>


## preload\_​tag

```oobleck
string | preload_tag: as: string
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Generates an HTML `<link>` tag with a `rel` attribute of `preload` to prioritize loading a given Shopify-hosted asset. The asset URL is also added to the [Link header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Link) with a `rel` attribute of `preload`.

You should use this filter sparingly. For example, consider preloading only resources necessary for rendering above-the-fold content. To learn more about preloading resources, refer to [Performance best practices for Shopify themes](https://shopify.dev/themes/best-practices/performance#preload-key-resources-defer-or-avoid-loading-others).

***

**Tip:** If you want to preload a stylesheet, then use \<a href="/docs/api/liquid/filters/stylesheet\_tag">\<code>\<span class="PreventFireFoxApplyingGapToWBR">stylesheet\<wbr/>\_tag\</span>\</code>\</a>. If you want to preload an image, then use \<a href="/docs/api/liquid/filters/image\_tag">\<code>\<span class="PreventFireFoxApplyingGapToWBR">image\<wbr/>\_tag\</span>\</code>\</a>.

***

The input to this filter must be a URL from one of the following filters:

* [`asset_url`](https://shopify.dev/docs/api/liquid/filters/asset_url)
* [`global_asset_url`](https://shopify.dev/docs/api/liquid/filters/global_asset_url)
* [`shopify_asset_url`](https://shopify.dev/docs/api/liquid/filters/shopify_asset_url)

The `preload_tag` filter also requires an [`as` parameter](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link#attr-as) based on the kind of resource being preloaded.

###### Code

```liquid
{{ 'cart.js' | asset_url | preload_tag: as: 'script' }}
```

###### Output

```html
<link href="//polinas-potent-potions.myshopify.com/cdn/shop/t/4/assets/cart.js?v=83971781268232213281663872410" as="script" rel="preload">
```

#### HTML attributes

```oobleck
string | preload_tag: as: string, attribute: string
```

You can specify [HTML attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link#attributes) by adding a parameter that matches the attribute name, and the desired value.

###### Code

```liquid
{{ 'cart.js' | asset_url | preload_tag: as: 'script', type: 'text/javascript' }}
```

###### Output

```html
<link href="//polinas-potent-potions.myshopify.com/cdn/shop/t/4/assets/cart.js?v=83971781268232213281663872410" as="script" type="text/javascript" rel="preload">
```

---



<a id="filters-prepend"></a>


## prepend

```oobleck
string | prepend: string
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Adds a given string to the beginning of a string.

###### Code

```liquid
{%- assign origin = request.origin -%}

{{ product.url | prepend: origin }}
```

###### Data

```json
{
  "product": {
    "url": "/products/health-potion"
  },
  "request": {
    "origin": "https://polinas-potent-potions.myshopify.com"
  }
}
```

###### Output

```html
https://polinas-potent-potions.myshopify.com/products/health-potion
```

---



<a id="filters-product-img-url"></a>


## product\_​img\_​url

```oobleck
variable | product_img_url
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Returns the [CDN URL](https://shopify.dev/themes/best-practices/performance/platform#shopify-cdn) for a [product image](https://shopify.dev/docs/api/liquid/objects/product).

This can be the product's `featured_image` or any image from the `images` array.

**Deprecated:**

The `product_img_url` filter has been replaced by [`image_url`](https://shopify.dev/docs/api/liquid/filters/image_url).

###### Code

```liquid
{{ product.featured_image | product_img_url }}
```

###### Data

```json
{
  "product": {
    "featured_image": "files/science-beakers-blue-light-new.jpg"
  }
}
```

###### Output

```html
//polinas-potent-potions.myshopify.com/cdn/shop/files/science-beakers-blue-light-new_small.jpg?v=1683744744
```

#### The size parameter

```oobleck
image | product_img_url: string
```

By default, the `product_img_url` filter returns the `small` version of the image (100 x 100 px). However, you can specify a [size](https://shopify.dev/docs/api/liquid/filters/img_url#img_url-size).

###### Code

```liquid
{{ product.images[0] | product_img_url: 'large' }}
```

###### Data

```json
{
  "product": {
    "images": [
      "files/science-beakers-blue-light-new.jpg",
      "products/science-beakers-blue-light.jpg",
      "files/science-beakers-blue-light_9c5badcd-ea54-4ddc-916c-a45c6c67c704.jpg",
      "files/science-beakers-blue-light_40984233-47bf-4b8b-844c-88020e3da712.jpg"
    ]
  }
}
```

###### Output

```html
//polinas-potent-potions.myshopify.com/cdn/shop/files/science-beakers-blue-light-new_large.jpg?v=1683744744
```

---



<a id="filters-reject"></a>


## reject

```oobleck
array | reject: string, string
```

Filters an array to exclude items with a specific property value.

This requires you to provide both the property name and the associated value.

###### Code

```liquid
{% assign polina_products = collection.products | reject: 'vendor', "Polina's Potent Potions" %}

Products from other vendors than Polina's Potent Potions:

{% for product in polina_products -%}
  - {{ product.title }}
{%- endfor %}
```

###### Data

```json
{
  "collection": {
    "products": [
      {
        "title": "Blue Mountain Flower",
        "vendor": "Polina's Potent Potions"
      },
      {
        "title": "Charcoal",
        "vendor": "Ted's Apothecary Supply"
      },
      {
        "title": "Crocodile tears",
        "vendor": "Polina's Potent Potions"
      },
      {
        "title": "Dandelion milk",
        "vendor": "Clover's Apothecary"
      },
      {
        "title": "Draught of Immortality",
        "vendor": "Polina's Potent Potions"
      },
      {
        "title": "Dried chamomile",
        "vendor": "Clover's Apothecary"
      },
      {
        "title": "Forest mushroom",
        "vendor": "Clover's Apothecary"
      },
      {
        "title": "Gift Card",
        "vendor": "Polina's Potent Potions"
      },
      {
        "title": "Glacier ice",
        "vendor": "Ted's Apothecary Supply"
      },
      {
        "title": "Ground mandrake root",
        "vendor": "Clover's Apothecary"
      },
      {
        "title": "Health potion",
        "vendor": "Polina's Potent Potions"
      },
      {
        "title": "Invisibility potion",
        "vendor": "Polina's Potent Potions"
      },
      {
        "title": "Komodo dragon scale",
        "vendor": "Ted's Apothecary Supply"
      },
      {
        "title": "Love Potion",
        "vendor": "Polina's Potent Potions"
      },
      {
        "title": "Mana potion",
        "vendor": "Polina's Potent Potions"
      },
      {
        "title": "Potion beats",
        "vendor": "Polina's Potent Potions"
      },
      {
        "title": "Potion bottle",
        "vendor": "Polina's Potent Potions"
      },
      {
        "title": "Viper venom",
        "vendor": "Ted's Apothecary Supply"
      },
      {
        "title": "Whole bloodroot",
        "vendor": "Clover's Apothecary"
      }
    ]
  }
}
```

###### Output

```html
Products from other vendors than Polina's Potent Potions:

- Charcoal
- Dandelion milk
- Dried chamomile
- Forest mushroom
- Glacier ice
- Ground mandrake root
- Komodo dragon scale
- Viper venom
- Whole bloodroot
```

---



<a id="filters-remove"></a>


## remove

```oobleck
string | remove: string
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Removes any instance of a substring inside a string.

###### Code

```liquid
{{ "I can't do it!" | remove: "'t" }}
```

###### Output

```html
I can do it!
```

---



<a id="filters-remove-first"></a>


## remove\_​first

```oobleck
string | remove_first: string
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Removes the first instance of a substring inside a string.

###### Code

```liquid
{{ "I hate it when I accidentally spill my duplication potion accidentally!" | remove_first: ' accidentally' }}
```

###### Output

```html
I hate it when I spill my duplication potion accidentally!
```

---



<a id="filters-remove-last"></a>


## remove\_​last

```oobleck
string | remove_last: string
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Removes the last instance of a substring inside a string.

###### Code

```liquid
{{ "I hate it when I accidentally spill my duplication potion accidentally!" | remove_last: ' accidentally' }}
```

###### Output

```html
I hate it when I accidentally spill my duplication potion!
```

---



<a id="filters-replace"></a>


## replace

```oobleck
string | replace: string, string
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Replaces any instance of a substring inside a string with a given string.

###### Code

```liquid
{{ product.handle | replace: '-', ' ' }}
```

###### Data

```json
{
  "product": {
    "handle": "komodo-dragon-scale"
  }
}
```

###### Output

```html
komodo dragon scale
```

---



<a id="filters-replace-first"></a>


## replace\_​first

```oobleck
string | replace_first: string, string
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Replaces the first instance of a substring inside a string with a given string.

###### Code

```liquid
{{ product.handle | replace_first: '-', ' ' }}
```

###### Data

```json
{
  "product": {
    "handle": "komodo-dragon-scale"
  }
}
```

###### Output

```html
komodo dragon-scale
```

---



<a id="filters-replace-last"></a>


## replace\_​last

```oobleck
string | replace_last: string, string
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Replaces the last instance of a substring inside a string with a given string.

###### Code

```liquid
{{ product.handle | replace_last: '-', ' ' }}
```

###### Data

```json
{
  "product": {
    "handle": "komodo-dragon-scale"
  }
}
```

###### Output

```html
komodo-dragon scale
```

---



<a id="filters-reverse"></a>


## reverse

```oobleck
array | reverse
```

Reverses the order of the items in an array.

###### Code

```liquid
Original order:
{{ collection.products | map: 'title' | join: ', ' }}

Reverse order:
{{ collection.products | reverse | map: 'title' | join: ', ' }}
```

###### Data

```json
{
  "collection": {
    "products": [
      {
        "title": "Draught of Immortality"
      },
      {
        "title": "Glacier ice"
      },
      {
        "title": "Health potion"
      },
      {
        "title": "Invisibility potion"
      }
    ]
  }
}
```

###### Output

```html
Original order:
Draught of Immortality, Glacier ice, Health potion, Invisibility potion

Reverse order:
Invisibility potion, Health potion, Glacier ice, Draught of Immortality
```

#### Reversing strings

You can't use the `reverse` filter on strings directly. However, you can use the [`split` filter](https://shopify.dev/docs/api/liquid/filters/split) to create an array of characters in the string, reverse that array, and then use the [`join` filter](https://shopify.dev/docs/api/liquid/filters/join) to combine them again.

###### Code

```liquid
{{ collection.title | split: '' | reverse | join: '' }}
```

###### Data

```json
{
  "collection": {
    "title": "Sale potions"
  }
}
```

###### Output

```html
snoitop elaS
```

---



<a id="filters-round"></a>


## round

```oobleck
number | round
```

returns [number](https://shopify.dev/docs/api/liquid/basics#number)

Rounds a number to the nearest integer.

###### Code

```liquid
{{ 2.7 | round }}
{{ 1.3 | round }}
```

###### Output

```html
3
1
```

#### Round to a specific number of decimal places

You can specify a number of decimal places to round to. If you don't specify a number, then the `round` filter rounds to the nearest integer.

###### Code

```liquid
{{ 3.14159 | round: 2 }}
```

###### Output

```html
3.14
```

---



<a id="filters-rstrip"></a>


## rstrip

```oobleck
string | rstrip
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Strips all whitespace from the right of a string.

###### Code

```liquid
{%- assign text = '  Some potions create whitespace.      ' -%}

"{{ text }}"
"{{ text | rstrip }}"
```

###### Output

```html
"  Some potions create whitespace.      "
"  Some potions create whitespace."
```

---



<a id="filters-script-tag"></a>


## script\_​tag

```oobleck
string | script_tag
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Generates an HTML `<script>` tag for a given resource URL. The tag has a `type` attribute of `text/javascript`.

###### Code

```liquid
{{ 'cart.js' | asset_url | script_tag }}
```

###### Output

```html
<script src="//polinas-potent-potions.myshopify.com/cdn/shop/t/4/assets/cart.js?v=83971781268232213281663872410" type="text/javascript"></script>
```

---



<a id="filters-sha1"></a>


## sha1

```oobleck
string | sha1: string
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Converts a string into an SHA-1 hash. SHA-1 is not considered safe anymore. Please use ['blake3'](https://shopify.dev/docs/api/liquid/filters/blake3) instead for better security and performance.

###### Code

```liquid
{%- assign secret_potion = 'Polyjuice' | sha1 -%}

My secret potion: {{ secret_potion }}
```

###### Output

```html
My secret potion: bd0ca3935467e5238d7662ada4df899f09b70d5a
```

---



<a id="filters-sha256"></a>


## sha256

```oobleck
string | sha256: string
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Converts a string into an SHA-256 hash. Please use ['blake3'](https://shopify.dev/docs/api/liquid/filters/blake3) instead for better security and performance.

###### Code

```liquid
{%- assign secret_potion = 'Polyjuice' | sha256 -%}

My secret potion: {{ secret_potion }}
```

###### Output

```html
My secret potion: 44ac1d7a2936e30a5de07082fd65d6fe9b1fb658a1a98bfe65bc5959beac5dd0
```

---



<a id="filters-shopify-asset-url"></a>


## shopify\_​asset\_​url

```oobleck
string | shopify_asset_url
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Returns the [CDN URL](https://shopify.dev/themes/best-practices/performance/platform#shopify-cdn) for a globally accessible Shopify asset.

The following are the globally accessible Shopify assets:

* `option_selection.js`
* `api.jquery.js`
* `shopify_common.js`
* `customer_area.js`
* `currencies.js`
* `customer.css`

###### Code

```liquid
{{ 'option_selection.js' | shopify_asset_url }}
```

###### Output

```html
//polinas-potent-potions.myshopify.com/cdn/shopifycloud/storefront/assets/themes_support/option_selection-b017cd28.js
```

---



<a id="filters-size"></a>


## size

```oobleck
variable | size
```

returns [number](https://shopify.dev/docs/api/liquid/basics#number)

Returns the size of a string or array.

The size of a string is the number of characters that the string includes. The size of an array is the number of items in the array.

###### Code

```liquid
{{ collection.title | size }}
{{ collection.products | size }}
```

###### Data

```json
{
  "collection": {
    "products": [],
    "title": "Sale potions"
  }
}
```

###### Output

```html
12
4
```

#### Dot notation

You can use the `size` filter with dot notation when you need to use it inside a tag or object output.

###### Code

```liquid
{% if collection.products.size >= 10 %}
  There are 10 or more products in this collection.
{% else %}
  There are less than 10 products in this collection.
{% endif %}
```

###### Data

```json
{
  "collection": {
    "products": []
  }
}
```

###### Output

```html
There are less than 10 products in this collection.
```

---



<a id="filters-slice"></a>


## slice

```oobleck
string | slice
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Returns a substring or series of array items, starting at a given 0-based index.

By default, the substring has a length of one character, and the array series has one array item. However, you can provide a second parameter to specify the number of characters or array items.

###### Code

```liquid
{{ collection.title | slice: 0 }}
{{ collection.title | slice: 0, 5 }}

{{ collection.all_tags | slice: 1, 2 | join: ', ' }}
```

###### Data

```json
{
  "collection": {
    "all_tags": [
      "Burning",
      "dried",
      "extra-potent",
      "extracts",
      "fresh",
      "healing",
      "ingredients",
      "music",
      "plant",
      "Salty",
      "supplies"
    ],
    "title": "Products"
  }
}
```

###### Output

```html
P
Produ

dried, extra-potent
```

#### Negative index

You can supply a negative index which will count from the end of the string.

###### Code

```liquid
{{ collection.title | slice: -3, 3 }}
```

###### Data

```json
{
  "collection": {
    "title": "Products"
  }
}
```

###### Output

```html
cts
```

---



<a id="filters-sort"></a>


## sort

```oobleck
array | sort
```

Sorts the items in an array in case-sensitive alphabetical, or numerical, order.

###### Code

```liquid
{% assign tags = collection.all_tags | sort %}

{% for tag in tags -%}
  {{ tag }}
{%- endfor %}
```

###### Data

```json
{
  "collection": {
    "all_tags": [
      "Burning",
      "dried",
      "extra-potent",
      "extracts",
      "fresh",
      "healing",
      "ingredients",
      "music",
      "plant",
      "Salty",
      "supplies"
    ]
  }
}
```

###### Output

```html
Burning
Salty
dried
extra-potent
extracts
fresh
healing
ingredients
music
plant
supplies
```

#### Sort by an array item property

```oobleck
array | sort: string
```

You can specify an array item property to sort the array items by. You can sort by any property of the object that you're sorting.

###### Code

```liquid
{% assign products = collection.products | sort: 'price' %}

{% for product in products -%}
  {{ product.title }}
{%- endfor %}
```

###### Data

```json
{
  "collection": {
    "products": [
      {
        "price": "10.00",
        "title": "Blue Mountain Flower"
      },
      {
        "price": "0.00",
        "title": "Charcoal"
      },
      {
        "price": "56.00",
        "title": "Crocodile tears"
      },
      {
        "price": "0.00",
        "title": "Dandelion milk"
      },
      {
        "price": "1000000.00",
        "title": "Draught of Immortality"
      },
      {
        "price": "8.98",
        "title": "Dried chamomile"
      },
      {
        "price": "0.00",
        "title": "Forest mushroom"
      },
      {
        "price": "10.00",
        "title": "Gift Card"
      },
      {
        "price": "0.00",
        "title": "Glacier ice"
      },
      {
        "price": "0.00",
        "title": "Ground mandrake root"
      },
      {
        "price": "10.00",
        "title": "Health potion"
      },
      {
        "price": "250.00",
        "title": "Invisibility potion"
      },
      {
        "price": "0.00",
        "title": "Komodo dragon scale"
      },
      {
        "price": "0.00",
        "title": "Love Potion"
      },
      {
        "price": "10.00",
        "title": "Mana potion"
      },
      {
        "price": "0.00",
        "title": "Potion beats"
      },
      {
        "price": "0.00",
        "title": "Potion bottle"
      },
      {
        "price": "400.00",
        "title": "Viper venom"
      },
      {
        "price": "24.99",
        "title": "Whole bloodroot"
      }
    ]
  }
}
```

###### Output

```html
Charcoal
Dandelion milk
Forest mushroom
Glacier ice
Ground mandrake root
Komodo dragon scale
Love Potion
Potion beats
Potion bottle
Dried chamomile
Blue Mountain Flower
Gift Card
Health potion
Mana potion
Whole bloodroot
Crocodile tears
Invisibility potion
Viper venom
Draught of Immortality
```

---



<a id="filters-sort-by"></a>


## sort\_​by

```oobleck
string | sort_by: string
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Generates a collection URL with the provided `sort_by` parameter appended. This filter must be applied to the object property [`collection.url`](https://shopify.dev/docs/api/liquid/objects/collection#collection-url).

Accepts the following values:

* `manual` (as defined in the [collection settings](https://help.shopify.com/manual/products/collections/collection-layout#change-the-sort-order-for-the-products-in-a-collection))
* `best-selling`
* `title-ascending`
* `title-descending`
* `price-ascending`
* `price-descending`
* `created-ascending`
* `created-descending`

***

**Tip:** You can append the \<code>\<span class="PreventFireFoxApplyingGapToWBR">sort\<wbr/>\_by\</span>\</code> filter to the \<a href="/docs/api/liquid/filters/url\_for\_type">\<code>\<span class="PreventFireFoxApplyingGapToWBR">url\<wbr/>\_for\<wbr/>\_type\</span>\</code>\</a> and \<a href="/docs/api/liquid/filters/url\_for\_vendor">\<code>\<span class="PreventFireFoxApplyingGapToWBR">url\<wbr/>\_for\<wbr/>\_vendor\</span>\</code>\</a> filters.

***

###### Code

```liquid
{{ collection.url | sort_by: 'best-selling' }}
```

###### Data

```json
{
  "collection": {
    "url": "/collections/sale-potions"
  }
}
```

###### Output

```html
/collections/sale-potions?sort_by=best-selling
```

---



<a id="filters-sort-natural"></a>


## sort\_​natural

```oobleck
array | sort_natural
```

Sorts the items in an array in case-insensitive alphabetical order.

***

**Caution:** You shouldn\&#39;t use the \<code>\<span class="PreventFireFoxApplyingGapToWBR">sort\<wbr/>\_natural\</span>\</code> filter to sort numerical values. When comparing items an array, each item is converted to a string, so sorting on numerical values can lead to unexpected results.

***

###### Code

```liquid
{% assign tags = collection.all_tags | sort_natural %}

{% for tag in tags -%}
  {{ tag }}
{%- endfor %}
```

###### Data

```json
{
  "collection": {
    "all_tags": [
      "Burning",
      "dried",
      "extra-potent",
      "extracts",
      "fresh",
      "healing",
      "ingredients",
      "music",
      "plant",
      "Salty",
      "supplies"
    ]
  }
}
```

###### Output

```html
Burning
dried
extra-potent
extracts
fresh
healing
ingredients
music
plant
Salty
supplies
```

#### Sort by an array item property

```oobleck
array | sort_natural: string
```

You can specify an array item property to sort the array items by.

###### Code

```liquid
{% assign products = collection.products | sort_natural: 'title' %}

{% for product in products -%}
  {{ product.title }}
{%- endfor %}
```

###### Data

```json
{
  "collection": {
    "products": [
      {
        "title": "Blue Mountain Flower"
      },
      {
        "title": "Charcoal"
      },
      {
        "title": "Crocodile tears"
      },
      {
        "title": "Dandelion milk"
      },
      {
        "title": "Draught of Immortality"
      },
      {
        "title": "Dried chamomile"
      },
      {
        "title": "Forest mushroom"
      },
      {
        "title": "Gift Card"
      },
      {
        "title": "Glacier ice"
      },
      {
        "title": "Ground mandrake root"
      },
      {
        "title": "Health potion"
      },
      {
        "title": "Invisibility potion"
      },
      {
        "title": "Komodo dragon scale"
      },
      {
        "title": "Love Potion"
      },
      {
        "title": "Mana potion"
      },
      {
        "title": "Potion beats"
      },
      {
        "title": "Potion bottle"
      },
      {
        "title": "Viper venom"
      },
      {
        "title": "Whole bloodroot"
      }
    ]
  }
}
```

###### Output

```html
Blue Mountain Flower
Charcoal
Crocodile tears
Dandelion milk
Draught of Immortality
Dried chamomile
Forest mushroom
Gift Card
Glacier ice
Ground mandrake root
Health potion
Invisibility potion
Komodo dragon scale
Love Potion
Mana potion
Potion beats
Potion bottle
Viper venom
Whole bloodroot
```

---



<a id="filters-split"></a>


## split

```oobleck
string | split: string
```

returns array of [string](https://shopify.dev/docs/api/liquid/basics#string)

Splits a string into an array of substrings based on a given separator.

###### Code

```liquid
{%- assign title_words = product.handle | split: '-' -%}

{% for word in title_words -%}
  {{ word }}
{%- endfor %}
```

###### Data

```json
{
  "product": {
    "handle": "health-potion"
  }
}
```

###### Output

```html
health
potion
```

---



<a id="filters-strip"></a>


## strip

```oobleck
string | strip
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Strips all whitespace from the left and right of a string.

###### Code

```liquid
{%- assign text = '  Some potions create whitespace.      ' -%}

"{{ text }}"
"{{ text | strip }}"
```

###### Output

```html
"  Some potions create whitespace.      "
"Some potions create whitespace."
```

---



<a id="filters-strip-html"></a>


## strip\_​html

```oobleck
string | strip_html
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Strips all HTML tags from a string.

###### Code

```liquid
<!-- With HTML -->
{{ product.description }}

<!-- HTML stripped -->
{{ product.description | strip_html }}
```

###### Data

```json
{
  "product": {
    "description": "<h3>Are you low on health? Well we've got the potion just for you!</h3>\n<p>Just need a top up? Almost dead? In between? No need to worry because we have a range of sizes and strengths!</p>"
  }
}
```

###### Output

```html
<!-- With HTML -->
<h3>Are you low on health? Well we've got the potion just for you!</h3>
<p>Just need a top up? Almost dead? In between? No need to worry because we have a range of sizes and strengths!</p>

<!-- HTML stripped -->
Are you low on health? Well we've got the potion just for you!
Just need a top up? Almost dead? In between? No need to worry because we have a range of sizes and strengths!
```

---



<a id="filters-strip-newlines"></a>


## strip\_​newlines

```oobleck
string | strip_newlines
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Strips all newline characters (line breaks) from a string.

###### Code

```liquid
<!-- With newlines -->
{{ product.description }}

<!-- Newlines stripped -->
{{ product.description | strip_newlines }}
```

###### Data

```json
{
  "product": {
    "description": "<h3>Are you low on health? Well we've got the potion just for you!</h3>\n<p>Just need a top up? Almost dead? In between? No need to worry because we have a range of sizes and strengths!</p>"
  }
}
```

###### Output

```html
<!-- With newlines -->
<h3>Are you low on health? Well we've got the potion just for you!</h3>
<p>Just need a top up? Almost dead? In between? No need to worry because we have a range of sizes and strengths!</p>

<!-- Newlines stripped -->
<h3>Are you low on health? Well we've got the potion just for you!</h3><p>Just need a top up? Almost dead? In between? No need to worry because we have a range of sizes and strengths!</p>
```

---



<a id="filters-structured-data"></a>


## structured\_​data

```oobleck
variable | structured_data
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Converts an object into a schema.org structured data format.

The `structured_data` filter can be used on the [`product`](https://shopify.dev/docs/api/liquid/objects/product) and [`article`](https://shopify.dev/docs/api/liquid/objects/article) objects.

Product objects are output as a [schema.org `Product`](https://schema.org/Product) if they have no variants, and a [`ProductGroup`](https://schema.org/ProductGroup) if they have one or more variants.

Article objects are output as a [schema.org `Article`.](https://schema.org/Article)

###### Code

```liquid
<script type="application/ld+json">
  {{ product | structured_data }}
</script>
```

###### Output

```html
<script type="application/ld+json">
  {"@context":"http:\/\/schema.org\/","@id":"\/products\/crocodile-tears#product","@type":"Product","brand":{"@type":"Brand","name":"Polina's Potent Potions"},"category":"","description":"","image":"https:\/\/polinas-potent-potions.myshopify.com\/cdn\/shop\/products\/amber-beard-oil-bottle.jpg?v=1650642958\u0026width=1920","name":"Crocodile tears","offers":{"@id":"\/products\/crocodile-tears?variant=39888242344001#offer","@type":"Offer","availability":"http:\/\/schema.org\/OutOfStock","price":"56.00","priceCurrency":"CAD","url":"https:\/\/polinas-potent-potions.myshopify.com\/products\/crocodile-tears?variant=39888242344001"},"url":"https:\/\/polinas-potent-potions.myshopify.com\/products\/crocodile-tears"}
</script>
```

---



<a id="filters-stylesheet-tag"></a>


## stylesheet\_​tag

```oobleck
string | stylesheet_tag
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Generates an HTML `<link>` tag for a given resource URL. The tag has the following parameters:

| Attribute | Value |
| - | - |
| `rel` | `stylesheet` |
| `type` | `text/css` |
| `media` | `all` |

###### Code

```liquid
{{ 'base.css' | asset_url | stylesheet_tag }}
```

###### Output

```html
<link href="//polinas-potent-potions.myshopify.com/cdn/shop/t/4/assets/base.css?v=88290808517547527771663872409" rel="stylesheet" type="text/css" media="all" />
```

#### preload

```oobleck
stylesheet_url | stylesheet_tag: preload: boolean
```

Specify whether the stylesheet should be preloaded.

When `preload` is set to `true`, a resource hint is sent as a [Link header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Link) with a `rel` value of [`preload`](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types/preload).

```liquid
Link: <STYLESHEET_URL>; rel=preload; as=style
```

```liquid
Link: 
```

This option doesn't affect the HTML link tag directly.

You should use the `preload` parameter sparingly. For example, consider preloading only render-blocking stylesheets that are needed for initial functionality of the page, such as above-the-fold content. To learn more about resource hints in Shopify themes, refer to [Performance best practices for Shopify themes](https://shopify.dev/themes/best-practices/performance#preload-key-resources-defer-or-avoid-loading-others).

---



<a id="filters-sum"></a>


## sum

```oobleck
array | sum
```

returns [number](https://shopify.dev/docs/api/liquid/basics#number)

Returns the sum of all elements in an array.

###### Code

```liquid
{% assign fibonacci = '0, 1, 1, 2, 3, 5' | split: ', ' %}

{{ fibonacci | sum }}
```

###### Output

```html
12
```

#### Sum object property values

```oobleck
array | sum: string
```

For an array of Liquid objects, you can specify a property to sum.

###### Code

```liquid
Total quantity of all items in cart:
{{ cart.items | sum: 'quantity' }}

Subtotal price for all items in cart:
{{ cart.items | sum: 'final_line_price' | money }}
```

###### Data

```json
{
  "cart": {
    "items": [
      {
        "final_line_price": "22.49",
        "quantity": 1
      },
      {
        "final_line_price": "400.00",
        "quantity": 1
      }
    ]
  }
}
```

###### Output

```html
Total quantity of all items in cart:
2

Subtotal price for all items in cart:
$422.49
```

---



<a id="filters-time-tag"></a>


## time\_​tag

```oobleck
string | time_tag: string
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Converts a timestamp into an HTML `<time>` tag.

The `time_tag` filter accepts the same parameters as Ruby's strftime method for formatting the date. For a list of shorthand formats, refer to the [Ruby documentation](https://ruby-doc.org/core-3.1.1/Time.html#method-i-strftime) or [strftime reference and sandbox](http://www.strfti.me/).

###### Code

```liquid
{{ article.created_at | time_tag: '%B %d, %Y' }}
```

###### Data

```json
{
  "article": {
    "created_at": "2022-04-14 16:56:02 -0400"
  }
}
```

###### Output

```html
<time datetime="2022-04-14T20:56:02Z">April 14, 2022</time>
```

#### format

```oobleck
string | time_tag: format: string
```

Specify a locale-aware date format. Accepts the following values:

* `abbreviated_date`
* `basic`
* `date`
* `date_at_time`
* `default`
* `on_date`
* `short` (deprecated)
* `long` (deprecated)

***

**Note:** You can also \<a href="/docs/api/liquid/filters/date-setting-format-options-in-locale-files">define custom formats\</a> in your theme\&#39;s locale files.

***

###### Code

```liquid
{{ article.created_at | time_tag: format: 'abbreviated_date' }}
```

###### Data

```json
{
  "article": {
    "created_at": "2022-04-14 16:56:02 -0400"
  }
}
```

###### Output

```html
<time datetime="2022-04-14T20:56:02Z">Apr 14, 2022</time>
```

#### datetime

```oobleck
string | time_tag: datetime: string
```

By default, the value of the `datetime` attribute of the `<time>` tag is formatted as `YYYY-MM-DDThh:mm:ssTZD`. However, you can specify a custom format with [strftime shorthand formats](https://ruby-doc.org/core-3.1.2/Time.html#method-i-strftime).

###### Code

```liquid
{{ article.created_at | time_tag: '%B %d, %Y', datetime: '%Y-%m-%d' }}
```

###### Data

```json
{
  "article": {
    "created_at": "2022-04-14 16:56:02 -0400"
  }
}
```

###### Output

```html
<time datetime="2022-04-14">April 14, 2022</time>
```

#### Setting format options in locale files

You can define custom date formats in your [theme's storefront locale files](https://shopify.dev/themes/architecture/locales/storefront-locale-files). These custom formats should be included in a `date_formats` category:

```json
"date_formats": {
  "month_day_year": "%B %d, %Y"
}
```

```json
"date_formats": {
  "month_day_year": "%B %d, %Y"
}
```

###### Code

```liquid
{{ article.created_at | time_tag: format: 'month_day_year' }}
```

###### Data

```json
{
  "article": {
    "created_at": "2022-04-14 16:56:02 -0400"
  }
}
```

###### Output

```html
<time datetime="2022-04-14T20:56:02Z">April 14, 2022</time>
```

---



<a id="filters-times"></a>


## times

```oobleck
number | times: number
```

returns [number](https://shopify.dev/docs/api/liquid/basics#number)

Multiplies a number by a given number.

###### Code

```liquid
{{ 2 | times: 2 }}
```

###### Output

```html
4
```

---



<a id="filters-translate"></a>


## translate

```oobleck
string | t
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Returns a string of translated text for a given translation key from a [locale file](https://shopify.dev/themes/architecture/locales).

The `translate` filter has an alias of `t`, which is more commonly used.

***

**Tip:** To learn more about using the \<code>t\</code> filter, refer to \<a href="/themes/architecture/locales/storefront-locale-files#usage">storefront locale file usage\</a> or \<a href="/themes/architecture/locales/schema-locale-files#usage">schema locale file usage\</a>.

***

#### Section locales vs. theme locales

The `t` filter can also reference keys defined in the [`locales` object](https://shopify.dev/themes/architecture/sections/section-schema#locales) of section file's `schema` tag. Content that you put in the `schema` under the `locales` object is only accessible to that section. This is useful if you need to make a standalone section that you want to share between themes.

Content that is global to a theme should be placed in the theme's `locales` directory. For example, you could include the expression "See more" in your `locales` directory to create a single translation. You could then use the translation in a blog post and on the product details page.

***

**Note:** Translations in the section\&#39;s \<code>schema\</code> tag that aren\&#39;t part of the \<code>locales\</code> object are used for merchant-facing text shown in the theme editor. These translations don\&#39;t use the \<code>t\</code> filter.

***

---



<a id="filters-truncate"></a>


## truncate

```oobleck
string | truncate: number
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Truncates a string down to a given number of characters.

If the specified number of characters is less than the length of the string, then an ellipsis (`...`) is appended to the truncated string. The ellipsis is included in the character count of the truncated string.

###### Code

```liquid
{{ article.title | truncate: 15 }}
```

###### Data

```json
{
  "article": {
    "title": "How to tell if you're out of invisibility potion"
  }
}
```

###### Output

```html
How to tell ...
```

#### Specify a custom ellipsis

```oobleck
string | truncate: number, string
```

You can provide a second parameter to specify a custom ellipsis. If you don't want an ellipsis, then you can supply an empty string.

###### Code

```liquid
{{ article.title | truncate: 15, '--' }}
{{ article.title | truncate: 15, '' }}
```

###### Data

```json
{
  "article": {
    "title": "How to tell if you're out of invisibility potion"
  }
}
```

###### Output

```html
How to tell i--
How to tell if
```

---



<a id="filters-truncatewords"></a>


## truncatewords

```oobleck
string | truncatewords: number
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Truncates a string down to a given number of words.

If the specified number of words is less than the number of words in the string, then an ellipsis (`...`) is appended to the truncated string.

***

**Caution:** HTML tags are treated as words, so you should strip any HTML from truncated content. If you don\&#39;t strip HTML, then closing HTML tags can be removed, which can result in unexpected behavior.

***

###### Code

```liquid
{{ article.content | strip_html | truncatewords: 15 }}
```

###### Data

```json
{
  "article": {
    "content": "<p>We've all had this problem before: we peek into the potions vault to determine which potions we are running low on, and the invisibility potion bottle looks completely empty.</p>\n<p>...</p>\n<p> </p>"
  }
}
```

###### Output

```html
We've all had this problem before: we peek into the potions vault to determine which...
```

#### Specify a custom ellipsis

```oobleck
string | truncatewords: number, string
```

You can provide a second parameter to specify a custom ellipsis. If you don't want an ellipsis, then you can supply an empty string.

###### Code

```liquid
{{ article.content | strip_html | truncatewords: 15, '--' }}

{{ article.content | strip_html | truncatewords: 15, '' }}
```

###### Data

```json
{
  "article": {
    "content": "<p>We've all had this problem before: we peek into the potions vault to determine which potions we are running low on, and the invisibility potion bottle looks completely empty.</p>\n<p>...</p>\n<p> </p>"
  }
}
```

###### Output

```html
We've all had this problem before: we peek into the potions vault to determine which--

We've all had this problem before: we peek into the potions vault to determine which
```

---



<a id="filters-uniq"></a>


## uniq

```oobleck
array | uniq
```

Removes any duplicate items in an array.

###### Code

```liquid
{% assign potion_array = 'invisibility, health, love, health, invisibility' | split: ', ' %}

{{ potion_array | uniq | join: ', ' }}
```

###### Output

```html
invisibility, health, love
```

---



<a id="filters-unit-price-with-measurement"></a>


## unit\_​price\_​with\_​measurement

```oobleck
number | unit_price_with_measurement: unit_price_measurement
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Formats a given unit price and measurement based on the store's [**HTML without currency** setting](https://help.shopify.com/manual/payments/currency-formatting).

###### Code

```liquid
{%- assign variant = product.variants.first -%}

{{ variant.unit_price | unit_price_with_measurement: variant.unit_price_measurement }}
```

###### Data

```json
{
  "product": {
    "variants": [
      {
        "unit_price": "50.00",
        "unit_price_measurement": "UnitPriceMeasurementDrop"
      },
      {
        "unit_price": "50.00",
        "unit_price_measurement": "UnitPriceMeasurementDrop"
      },
      {
        "unit_price": "25.00",
        "unit_price_measurement": "UnitPriceMeasurementDrop"
      },
      {
        "unit_price": "25.00",
        "unit_price_measurement": "UnitPriceMeasurementDrop"
      }
    ]
  }
}
```

###### Output

```html
$50.00/kg
```

#### Formatted unit price

```oobleck
string | unit_price_with_measurement: unit_price_measurement
```

You can specify a formatted unit price using one of the [money filters](https://shopify.dev/docs/api/liquid/filters/payment_button#money-filters).

###### Code

```liquid
{%- assign variant = product.variants.first -%}

{{ variant.unit_price | money_with_currency | unit_price_with_measurement: variant.unit_price_measurement }}
```

###### Data

```json
{
  "product": {
    "variants": [
      {
        "unit_price": "50.00",
        "unit_price_measurement": "UnitPriceMeasurementDrop"
      },
      {
        "unit_price": "50.00",
        "unit_price_measurement": "UnitPriceMeasurementDrop"
      },
      {
        "unit_price": "25.00",
        "unit_price_measurement": "UnitPriceMeasurementDrop"
      },
      {
        "unit_price": "25.00",
        "unit_price_measurement": "UnitPriceMeasurementDrop"
      }
    ]
  }
}
```

###### Output

```html
$50.00 CAD/kg
```

---



<a id="filters-upcase"></a>


## upcase

```oobleck
string | upcase
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Converts a string to all uppercase characters.

###### Code

```liquid
{{ product.title | upcase }}
```

###### Data

```json
{
  "product": {
    "title": "Health potion"
  }
}
```

###### Output

```html
HEALTH POTION
```

---



<a id="filters-url-decode"></a>


## url\_​decode

```oobleck
string | url_decode
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Decodes any [percent-encoded](https://developer.mozilla.org/en-US/docs/Glossary/percent-encoding) characters in a string.

###### Code

```liquid
{{ 'test%40test.com' | url_decode }}
```

###### Output

```html
test@test.com
```

---



<a id="filters-url-encode"></a>


## url\_​encode

```oobleck
string | url_encode
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Converts any URL-unsafe characters in a string to the [percent-encoded](https://developer.mozilla.org/en-US/docs/Glossary/percent-encoding) equivalent.

***

**Note:** Spaces are converted to a \<code>+\</code> character, instead of a percent-encoded character.

***

###### Code

```liquid
{{ 'test@test.com' | url_encode }}
```

###### Output

```html
test%40test.com
```

---



<a id="filters-url-escape"></a>


## url\_​escape

```oobleck
string | url_escape
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Escapes any URL-unsafe characters in a string.

###### Code

```liquid
{{ '<p>Health & Love potions</p>' | url_escape }}
```

###### Output

```html
%3Cp%3EHealth%20&%20Love%20potions%3C/p%3E
```

---



<a id="filters-url-for-type"></a>


## url\_​for\_​type

```oobleck
string | url_for_type
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Generates a URL for a [collection page](https://shopify.dev/docs/storefronts/themes/architecture/templates/collection) that lists all products of the given product type.

###### Code

```liquid
{{ 'health' | url_for_type }}
```

###### Output

```html
/collections/types?q=health
```

---



<a id="filters-url-for-vendor"></a>


## url\_​for\_​vendor

```oobleck
string | url_for_vendor
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Generates a URL for a [collection page](https://shopify.dev/docs/storefronts/themes/architecture/templates/collection) that lists all products from the given product vendor.

###### Code

```liquid
{{ "Polina's Potent Potions" | url_for_vendor }}
```

###### Output

```html
/collections/vendors?q=Polina%27s%20Potent%20Potions
```

---



<a id="filters-url-param-escape"></a>


## url\_​param\_​escape

```oobleck
string | url_param_escape
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Escapes any characters in a string that are unsafe for URL parameters.

The `url_param_escape` filter escapes the same characters as [`url_escape`](https://shopify.dev/docs/api/liquid/filters/url_escape), with the addition of `&`.

###### Code

```liquid
{{ '<p>Health & Love potions</p>' | url_param_escape }}
```

###### Output

```html
%3Cp%3EHealth%20%26%20Love%20potions%3C/p%3E
```

---



<a id="filters-video-tag"></a>


## video\_​tag

```oobleck
media | video_tag
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Generates an HTML `<video>` tag for a given video.

***

**Note:** When \<code>mp4\</code> videos are uploaded, Shopify generates an \<code>m3u8\</code> file as an additional \<a href="/docs/api/liquid/objects/video\_source">\<code>\<span class="PreventFireFoxApplyingGapToWBR">video\<wbr/>\_source\</span>\</code>\</a>. An \<code>m3u8\</code> file enables video players to leverage \<a href="https://developer.apple.com/streaming/">HTTP live streaming (HLS)\</a>, resulting in an optimized video experience based on the user\&#39;s internet connection. If loop is enabled, the HLS source is not used in order to allow progessive download to cache the video.\</p> \<p>If the \<code>m3u8\</code> source isn\&#39;t supported, then the player falls back to the \<code>mp4\</code> source.

***

###### Code

```liquid
{% for media in product.media %}
  {% if media.media_type == 'video' %}
    {{ media | video_tag }}
  {% endif %}
{% endfor %}
```

###### Data

```json
{
  "product": {
    "media": [
      {
        "media_type": "external_video"
      },
      {
        "media_type": "video"
      }
    ]
  }
}
```

###### Output

```html
<video playsinline="playsinline" preload="metadata" aria-label="Potion beats" poster="//polinas-potent-potions.myshopify.com/cdn/shop/products/4edc28a708b7405093a927cebe794f1a.thumbnail.0000000_small.jpg?v=1655255324"><source src="//polinas-potent-potions.myshopify.com/cdn/shop/videos/c/vp/4edc28a708b7405093a927cebe794f1a/4edc28a708b7405093a927cebe794f1a.HD-1080p-7.2Mbps.mp4?v=0" type="video/mp4"><img src="//polinas-potent-potions.myshopify.com/cdn/shop/products/4edc28a708b7405093a927cebe794f1a.thumbnail.0000000_small.jpg?v=1655255324"></video>
```

### Rendered output

#### image\_size

```oobleck
media | video_tag: image_size: string
```

Specify the dimensions of the video's poster image in pixels.

###### Code

```liquid
{% for media in product.media %}
  {% if media.media_type == 'video' %}
    {{ media | video_tag: image_size: '400x' }}
  {% endif %}
{% endfor %}
```

###### Data

```json
{
  "product": {
    "media": [
      {
        "media_type": "external_video"
      },
      {
        "media_type": "video"
      }
    ]
  }
}
```

###### Output

```html
<video playsinline="playsinline" preload="metadata" aria-label="Potion beats" poster="//polinas-potent-potions.myshopify.com/cdn/shop/products/4edc28a708b7405093a927cebe794f1a.thumbnail.0000000_400x.jpg?v=1655255324"><source src="//polinas-potent-potions.myshopify.com/cdn/shop/videos/c/vp/4edc28a708b7405093a927cebe794f1a/4edc28a708b7405093a927cebe794f1a.HD-1080p-7.2Mbps.mp4?v=0" type="video/mp4"><img src="//polinas-potent-potions.myshopify.com/cdn/shop/products/4edc28a708b7405093a927cebe794f1a.thumbnail.0000000_400x.jpg?v=1655255324"></video>
```

### Rendered output

#### Optional supported HTML5 attributes

```oobleck
media | video_tag: attribute: boolean
```

`video_tag` supports all [HTML5 video attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video#attributes). For example:

| Attribute | Value |
| - | - |
| `autoplay` | Whether to automatically play the video after it’s loaded. Accepted values:`true`,`false` |
| `loop` | Whether to loop the video. Accepted values:`true`,`false` |
| `muted` | Whether to mute the video’s audio. Accepted values:`true`,`false` |
| `controls` | Whether a user can control the video playback. Accepted values:`true`,`false` |

###### Code

```liquid
{% for media in product.media %}
  {% if media.media_type == 'video' %}
    {{ media | video_tag: autoplay: true, loop: true, muted: true, controls: true }}
  {% endif %}
{% endfor %}
```

###### Data

```json
{
  "product": {
    "media": [
      {
        "media_type": "external_video"
      },
      {
        "media_type": "video"
      }
    ]
  }
}
```

###### Output

```html
<video playsinline="playsinline" autoplay="autoplay" loop="loop" muted="muted" controls="controls" preload="metadata" aria-label="Potion beats" poster="//polinas-potent-potions.myshopify.com/cdn/shop/products/4edc28a708b7405093a927cebe794f1a.thumbnail.0000000_small.jpg?v=1655255324"><source src="//polinas-potent-potions.myshopify.com/cdn/shop/videos/c/vp/4edc28a708b7405093a927cebe794f1a/4edc28a708b7405093a927cebe794f1a.HD-1080p-7.2Mbps.mp4?v=0" type="video/mp4"><img src="//polinas-potent-potions.myshopify.com/cdn/shop/products/4edc28a708b7405093a927cebe794f1a.thumbnail.0000000_small.jpg?v=1655255324"></video>
```

### Rendered output

---



<a id="filters-weight-with-unit"></a>


## weight\_​with\_​unit

```oobleck
number | weight_with_unit
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Generates a formatted weight for a [`variant` object](https://shopify.dev/docs/api/liquid/objects/variant#variant-weight). The weight unit is set in the [general settings](https://www.shopify.com/admin/settings/general) in the Shopify admin.

###### Code

```liquid
{%- assign variant = product.variants.first -%}

{{ variant.weight | weight_with_unit }}
```

###### Data

```json
{
  "product": {
    "variants": [
      {
        "weight": 200
      },
      {
        "weight": 200
      },
      {
        "weight": 400
      },
      {
        "weight": 200
      }
    ]
  }
}
```

###### Output

```html
0.2 kg
```

#### Override the default unit

```oobleck
number | weight_with_unit: variable
```

You can specify a unit to override the default from the general settings.

###### Code

```liquid
{%- assign variant = product.variants.first -%}

{{ variant.weight | weight_with_unit: variant.weight_unit }}
```

###### Data

```json
{
  "product": {
    "variants": [
      {
        "weight": 200,
        "weight_unit": "g"
      },
      {
        "weight": 200,
        "weight_unit": "g"
      },
      {
        "weight": 400,
        "weight_unit": "g"
      },
      {
        "weight": 200,
        "weight_unit": "g"
      }
    ]
  }
}
```

###### Output

```html
200 g
```

---



<a id="filters-where"></a>


## where

```oobleck
array | where: string, string
```

Filters an array to include only items with a specific property value.

This requires you to provide both the property name and the associated value.

###### Code

```liquid
{% assign polina_products = collection.products | where: 'vendor', "Polina's Potent Potions" %}

Products from Polina's Potent Potions:

{% for product in polina_products -%}
  - {{ product.title }}
{%- endfor %}
```

###### Data

```json
{
  "collection": {
    "products": [
      {
        "title": "Blue Mountain Flower",
        "vendor": "Polina's Potent Potions"
      },
      {
        "title": "Charcoal",
        "vendor": "Ted's Apothecary Supply"
      },
      {
        "title": "Crocodile tears",
        "vendor": "Polina's Potent Potions"
      },
      {
        "title": "Dandelion milk",
        "vendor": "Clover's Apothecary"
      },
      {
        "title": "Draught of Immortality",
        "vendor": "Polina's Potent Potions"
      },
      {
        "title": "Dried chamomile",
        "vendor": "Clover's Apothecary"
      },
      {
        "title": "Forest mushroom",
        "vendor": "Clover's Apothecary"
      },
      {
        "title": "Gift Card",
        "vendor": "Polina's Potent Potions"
      },
      {
        "title": "Glacier ice",
        "vendor": "Ted's Apothecary Supply"
      },
      {
        "title": "Ground mandrake root",
        "vendor": "Clover's Apothecary"
      },
      {
        "title": "Health potion",
        "vendor": "Polina's Potent Potions"
      },
      {
        "title": "Invisibility potion",
        "vendor": "Polina's Potent Potions"
      },
      {
        "title": "Komodo dragon scale",
        "vendor": "Ted's Apothecary Supply"
      },
      {
        "title": "Love Potion",
        "vendor": "Polina's Potent Potions"
      },
      {
        "title": "Mana potion",
        "vendor": "Polina's Potent Potions"
      },
      {
        "title": "Potion beats",
        "vendor": "Polina's Potent Potions"
      },
      {
        "title": "Potion bottle",
        "vendor": "Polina's Potent Potions"
      },
      {
        "title": "Viper venom",
        "vendor": "Ted's Apothecary Supply"
      },
      {
        "title": "Whole bloodroot",
        "vendor": "Clover's Apothecary"
      }
    ]
  }
}
```

###### Output

```html
Products from Polina's Potent Potions:

- Blue Mountain Flower
- Crocodile tears
- Draught of Immortality
- Gift Card
- Health potion
- Invisibility potion
- Love Potion
- Mana potion
- Potion beats
- Potion bottle
```

#### Filter for boolean properties with a `true` value

You can filter for items that have a `true` value for a boolean property. This requires you to provide only the property name.

###### Code

```liquid
{% assign available_products = collection.products | where: 'available' %}

Available products:

{% for product in available_products -%}
  - {{ product.title }}
{%- endfor %}
```

###### Data

```json
{
  "collection": {
    "products": [
      {
        "available": false,
        "title": "Blue Mountain Flower"
      },
      {
        "available": true,
        "title": "Charcoal"
      },
      {
        "available": false,
        "title": "Crocodile tears"
      },
      {
        "available": false,
        "title": "Dandelion milk"
      },
      {
        "available": true,
        "title": "Draught of Immortality"
      },
      {
        "available": true,
        "title": "Dried chamomile"
      },
      {
        "available": false,
        "title": "Forest mushroom"
      },
      {
        "available": true,
        "title": "Gift Card"
      },
      {
        "available": false,
        "title": "Glacier ice"
      },
      {
        "available": true,
        "title": "Ground mandrake root"
      },
      {
        "available": true,
        "title": "Health potion"
      },
      {
        "available": true,
        "title": "Invisibility potion"
      },
      {
        "available": false,
        "title": "Komodo dragon scale"
      },
      {
        "available": false,
        "title": "Love Potion"
      },
      {
        "available": true,
        "title": "Mana potion"
      },
      {
        "available": true,
        "title": "Potion beats"
      },
      {
        "available": false,
        "title": "Potion bottle"
      },
      {
        "available": true,
        "title": "Viper venom"
      },
      {
        "available": true,
        "title": "Whole bloodroot"
      }
    ]
  }
}
```

###### Output

```html
Available products:

- Charcoal
- Draught of Immortality
- Dried chamomile
- Gift Card
- Ground mandrake root
- Health potion
- Invisibility potion
- Mana potion
- Potion beats
- Viper venom
- Whole bloodroot
```

---



<a id="filters-within"></a>


## within

```oobleck
string | within: collection
```

returns [string](https://shopify.dev/docs/api/liquid/basics#string)

Generates a product URL within the context of the provided collection.

When the collection context is included, you can access the associated [`collection` object](https://shopify.dev/docs/api/liquid/objects/collection) in the [product template](https://shopify.dev/themes/architecture/templates/product).

***

**Caution:** Because a standard product page and a product page in the context of a collection have the same content on separate URLs, you should consider the SEO implications of using the \<code>within\</code> filter.

***

###### Code

```liquid
{%- assign collection_product = collection.products.first -%}

{{ collection_product.url | within: collection }}
```

###### Data

```json
{
  "collection": {
    "products": [
      {
        "url": "/products/draught-of-immortality"
      },
      {
        "url": "/products/glacier-ice"
      },
      {
        "url": "/products/health-potion"
      },
      {
        "url": "/products/invisibility-potion"
      }
    ]
  }
}
```

###### Output

```html
/collections/sale-potions/products/draught-of-immortality
```

---
