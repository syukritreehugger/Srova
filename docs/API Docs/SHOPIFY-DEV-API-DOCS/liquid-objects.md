# Shopify Liquid – objects Reference (Indonesian / English)

> Referensi lengkap **Liquid – objects** Shopify API yang disusun ulang dari https://shopify.dev/docs/api/liquid.
> Dokumen ini dirancang untuk pengembang berbahasa Indonesia, namun seluruh konten teknis (skema, tipe, nama field, contoh kode) dipertahankan dalam bahasa Inggris asli untuk memastikan akurasi.

| Item | Nilai |
|------|-------|
| Sumber | `https://shopify.dev/docs/api/liquid` |
| Total halaman | **137** |
| Tanggal kompilasi | 2026-05-01 |
| Bahasa | Indonesia (intro/ToC) + English (konten teknis) |



> **Grup:** `objects` (split file)


## Daftar Isi (Table of Contents)

- [objects / additional_checkout_buttons](#objects-additional-checkout-buttons)
- [objects / address](#objects-address)
- [objects / all_country_option_tags](#objects-all-country-option-tags)
- [objects / all_products](#objects-all-products)
- [objects / app](#objects-app)
- [objects / article](#objects-article)
- [objects / articles](#objects-articles)
- [objects / block](#objects-block)
- [objects / blog](#objects-blog)
- [objects / blogs](#objects-blogs)
- [objects / brand](#objects-brand)
- [objects / brand_color](#objects-brand-color)
- [objects / canonical_url](#objects-canonical-url)
- [objects / cart](#objects-cart)
- [objects / checkout](#objects-checkout)
- [objects / closest](#objects-closest)
- [objects / collection](#objects-collection)
- [objects / collections](#objects-collections)
- [objects / color](#objects-color)
- [objects / color_scheme](#objects-color-scheme)
- [objects / color_scheme_group](#objects-color-scheme-group)
- [objects / comment](#objects-comment)
- [objects / company](#objects-company)
- [objects / company_address](#objects-company-address)
- [objects / company_location](#objects-company-location)
- [objects / content_for_additional_checkout_buttons](#objects-content-for-additional-checkout-buttons)
- [objects / content_for_header](#objects-content-for-header)
- [objects / content_for_index](#objects-content-for-index)
- [objects / content_for_layout](#objects-content-for-layout)
- [objects / country](#objects-country)
- [objects / country_option_tags](#objects-country-option-tags)
- [objects / currency](#objects-currency)
- [objects / current_page](#objects-current-page)
- [objects / current_tags](#objects-current-tags)
- [objects / customer](#objects-customer)
- [objects / customer_payment_method](#objects-customer-payment-method)
- [objects / discount](#objects-discount)
- [objects / discount_allocation](#objects-discount-allocation)
- [objects / discount_application](#objects-discount-application)
- [objects / external_video](#objects-external-video)
- [objects / filter](#objects-filter)
- [objects / filter_value](#objects-filter-value)
- [objects / filter_value_display](#objects-filter-value-display)
- [objects / focal_point](#objects-focal-point)
- [objects / font](#objects-font)
- [objects / forloop](#objects-forloop)
- [objects / form](#objects-form)
- [objects / form_errors](#objects-form-errors)
- [objects / fulfillment](#objects-fulfillment)
- [objects / generic_file](#objects-generic-file)
- [objects / gift_card](#objects-gift-card)
- [objects / group](#objects-group)
- [objects / handle](#objects-handle)
- [objects / image](#objects-image)
- [objects / image_presentation](#objects-image-presentation)
- [objects / images](#objects-images)
- [objects / instructions](#objects-instructions)
- [objects / line_item](#objects-line-item)
- [objects / link](#objects-link)
- [objects / linklist](#objects-linklist)
- [objects / linklists](#objects-linklists)
- [objects / localization](#objects-localization)
- [objects / location](#objects-location)
- [objects / market](#objects-market)
- [objects / measurement](#objects-measurement)
- [objects / media](#objects-media)
- [objects / metafield](#objects-metafield)
- [objects / metaobject](#objects-metaobject)
- [objects / metaobject_definition](#objects-metaobject-definition)
- [objects / metaobject_system](#objects-metaobject-system)
- [objects / metaobjects](#objects-metaobjects)
- [objects / model](#objects-model)
- [objects / model_source](#objects-model-source)
- [objects / money](#objects-money)
- [objects / order](#objects-order)
- [objects / page](#objects-page)
- [objects / page_description](#objects-page-description)
- [objects / page_image](#objects-page-image)
- [objects / page_title](#objects-page-title)
- [objects / pages](#objects-pages)
- [objects / paginate](#objects-paginate)
- [objects / parent_relationship](#objects-parent-relationship)
- [objects / part](#objects-part)
- [objects / pending_payment_instruction_input](#objects-pending-payment-instruction-input)
- [objects / policy](#objects-policy)
- [objects / powered_by_link](#objects-powered-by-link)
- [objects / predictive_search](#objects-predictive-search)
- [objects / predictive_search_resources](#objects-predictive-search-resources)
- [objects / product](#objects-product)
- [objects / product_option](#objects-product-option)
- [objects / product_option_value](#objects-product-option-value)
- [objects / quantity_price_break](#objects-quantity-price-break)
- [objects / quantity_rule](#objects-quantity-rule)
- [objects / rating](#objects-rating)
- [objects / recipient](#objects-recipient)
- [objects / recommendations](#objects-recommendations)
- [objects / remote_details](#objects-remote-details)
- [objects / remote_product](#objects-remote-product)
- [objects / remote_shop](#objects-remote-shop)
- [objects / request](#objects-request)
- [objects / robots](#objects-robots)
- [objects / routes](#objects-routes)
- [objects / rule](#objects-rule)
- [objects / script](#objects-script)
- [objects / scripts](#objects-scripts)
- [objects / search](#objects-search)
- [objects / section](#objects-section)
- [objects / selling_plan](#objects-selling-plan)
- [objects / selling_plan_allocation](#objects-selling-plan-allocation)
- [objects / selling_plan_allocation_price_adjustment](#objects-selling-plan-allocation-price-adjustment)
- [objects / selling_plan_checkout_charge](#objects-selling-plan-checkout-charge)
- [objects / selling_plan_group](#objects-selling-plan-group)
- [objects / selling_plan_group_option](#objects-selling-plan-group-option)
- [objects / selling_plan_option](#objects-selling-plan-option)
- [objects / selling_plan_price_adjustment](#objects-selling-plan-price-adjustment)
- [objects / settings](#objects-settings)
- [objects / shipping_method](#objects-shipping-method)
- [objects / shop](#objects-shop)
- [objects / shop_locale](#objects-shop-locale)
- [objects / sitemap](#objects-sitemap)
- [objects / sort_option](#objects-sort-option)
- [objects / store_availability](#objects-store-availability)
- [objects / store_credit_account](#objects-store-credit-account)
- [objects / swatch](#objects-swatch)
- [objects / tablerowloop](#objects-tablerowloop)
- [objects / tax_line](#objects-tax-line)
- [objects / taxonomy_category](#objects-taxonomy-category)
- [objects / template](#objects-template)
- [objects / theme](#objects-theme)
- [objects / transaction](#objects-transaction)
- [objects / transaction_payment_details](#objects-transaction-payment-details)
- [objects / unit_price_measurement](#objects-unit-price-measurement)
- [objects / user](#objects-user)
- [objects / user_agent](#objects-user-agent)
- [objects / variant](#objects-variant)
- [objects / video](#objects-video)
- [objects / video_source](#objects-video-source)


---



<a id="objects-additional-checkout-buttons"></a>


## additional\_​checkout\_​buttons

Returns `true` if a store has any payment providers with offsite checkouts, such as PayPal Express Checkout.

Use `additional_checkout_buttons` to check whether these payment providers exist, and [`content_for_additional_checkout_buttons`](https://shopify.dev/docs/api/liquid/objects/content_for_additional_checkout_buttons) to show the associated checkout buttons. To learn more about how to use these objects, refer to [Accelerated checkout](https://shopify.dev/themes/pricing-payments/accelerated-checkout).

```liquid
{% if additional_checkout_buttons %}
  {{ content_for_additional_checkout_buttons }}
{% endif %}
```

```liquid
{% if additional_checkout_buttons %}
  {{ content_for_additional_checkout_buttons }}
{% endif %}
```

#### Directly accessible in

* Global

---



<a id="objects-address"></a>


## address

An address, such as a customer address or order shipping address.

***

**Tip:** Use the \<a href="/docs/api/liquid/filters/format\_address">\<code>\<span class="PreventFireFoxApplyingGapToWBR">format\<wbr/>\_address\</span>\</code> filter\</a> to output an address according to its locale.

***

### Properties

* * **address1**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The first line of the address.

  * **address2**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The second line of the address.

    If no second line is specified, then `nil` is returned.

  * **city**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The city of the address.

  * **company**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The company of the address.

    If no company is specified, then `nil` is returned.

  * **country**

    [country](https://shopify.dev/docs/api/liquid/objects/country)

  * The country of the address.

  * **country\_​code**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The country of the address in [ISO 3166-1 (alpha 2) format](https://www.iso.org/glossary-for-iso-3166.html).

  * **first\_​name**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The first name of the address.

  * **id**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The ID of the address.

  * **last\_​name**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The last name of the address.

  * **name**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * A combination of the first and last names of the address.

  * **phone**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The phone number of the address.

    If no phone number is specified, then `nil` is returned.

  * **province**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The province of the address.

  * **province\_​code**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The province of the address in [ISO 3166-2 (alpha 2) format](https://www.iso.org/glossary-for-iso-3166.html).

    **Note:** The value doesn\&#39;t include the preceding \<a href="https://www\.iso.org/glossary-for-iso-3166.html">ISO 3166-1\</a> country code.

  * **street**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * A combination of the first and second lines of the address.

  * **summary**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * A summary of the address, including the following properties:

    * First and last name
    * First and second lines
    * City
    * Province
    * Country

  * **url**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The relative URL for the address.

    **Note:** This only applies to customer addresses.

  * **zip**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The zip or postal code of the address.

###### Example

```json
{
  "address1": "150 Elgin Street",
  "address2": "8th floor",
  "city": "Ottawa",
  "company": "Polina&#39;s Potions, LLC",
  "country": {},
  "country_code": "CA",
  "first_name": null,
  "id": 56174706753,
  "last_name": null,
  "name": "",
  "phone": "416-123-1234",
  "province": "Ontario",
  "province_code": "ON",
  "street": "150 Elgin Street, 8th floor",
  "summary": "150 Elgin Street, 8th floor, Ottawa, Ontario, Canada",
  "url": "/account/addresses/56174706753",
  "zip": "K2P 1L4"
}
```

---



<a id="objects-all-country-option-tags"></a>


## all\_​country\_​option\_​tags

Creates an `<option>` tag for each country.

An attribute called `data-provinces` is set for each `<option>`, and contains a JSON-encoded array of the country or region's subregions. If a country doesn't have any subregions, then an empty array is set for its `data-provinces` attribute.

***

**Tip:** To return only the countries and regions included in the store\&#39;s shipping zones, use the \<a href="/docs/api/liquid/objects/country\_option\_tags">\<code>\<span class="PreventFireFoxApplyingGapToWBR">country\<wbr/>\_option\<wbr/>\_tags\</span>\</code> object\</a>.

***

#### Directly accessible in

* Global

You can wrap the `all_country_option_tags` object in `<select>` tags to build a country option selector.

```liquid
<select name="country">
  {{ all_country_option_tags }}
</select>
```

```liquid
```

---



<a id="objects-all-products"></a>


## all\_​products

All of the products on a store.

***

**Note:** The \<code>\<span class="PreventFireFoxApplyingGapToWBR">all\<wbr/>\_products\</span>\</code> object has a limit of 20 unique handles per page. If you want more than 20 products, then consider using a collection instead.

***

#### Directly accessible in

* Global

You can use `all_products` to access a product by its [handle](https://shopify.dev/docs/api/liquid/basics#handles). This returns the [`product`](https://shopify.dev/docs/api/liquid/objects/product) object for the specified product. If the product isn't found, then `empty` is returned.

###### Code

```liquid
{{ all_products['love-potion'].title }}
```

###### Data

```json
{
  "all_products": {
    "love-potion": {
      "title": "Love Potion"
    }
  }
}
```

###### Output

```html
Love Potion
```

---



<a id="objects-app"></a>


## app

An app. This object is usually used to access app-specific information for use with [theme app extensions](https://shopify.dev/apps/online-store/theme-app-extensions).

### Properties

* * **metafields**

  * The [metafields](https://shopify.dev/docs/api/liquid/objects/metafield) that are [owned by the app](https://shopify.dev/apps/metafields/app-owned).

---



<a id="objects-article"></a>


## article

An article, or [blog post](https://help.shopify.com/manual/online-store/blogs/writing-blogs), in a blog.

### Properties

* * **author**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The full name of the author of the article.

  * **comment\_​post\_​url**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The relative URL where POST requests are sent when creating new comments.

  * **comments**

    array of [comment](https://shopify.dev/docs/api/liquid/objects/comment)

  * The published comments for the article.

    Returns an empty array if comments are disabled.

    **Tip:** Use the \<a href="/docs/api/liquid/tags/paginate">paginate\</a> tag to choose how many comments to show at once, up to a limit of 50.

  * **comments\_​count**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The number of published comments for the article.

  * **comments\_​enabled?**

    [boolean](https://shopify.dev/docs/api/liquid/basics#boolean)

  * Returns `true` if comments are enabled. Returns `false` if not.

  * **content**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The content of the article.

  * **created\_​at**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * A timestamp for when the article was created.

    **Tip:** Use the \<a href="/docs/api/liquid/filters/date">\<code>date\</code> filter\</a> to format the timestamp.

  * **excerpt**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The excerpt of the article.

  * **excerpt\_​or\_​content**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * Returns the article [excerpt](https://shopify.dev/docs/api/liquid/objects/article#article-excerpt) if it exists. Returns the article [content](https://shopify.dev/docs/api/liquid/objects/article#article-content) if no excerpt exists.

  * **handle**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The [handle](https://shopify.dev/docs/api/liquid/basics#handles) of the article.

  * **id**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The ID of the article.

  * **image**

    [image](https://shopify.dev/docs/api/liquid/objects/image)

  * The featured image for the article.

  * **metafields**

  * The [metafields](https://shopify.dev/docs/api/liquid/objects/metafield) applied to the article.

    **Tip:** To learn about how to create metafields, refer to \<a href="/apps/metafields/manage">Create and manage metafields\</a> or visit the \<a href="https://help.shopify.com/manual/metafields">Shopify Help Center\</a>.

  * **moderated?**

    [boolean](https://shopify.dev/docs/api/liquid/basics#boolean)

  * Returns `true` if the blog that the article belongs to is set to [moderate comments](https://help.shopify.com/manual/online-store/blogs/managing-comments). Returns `false` if not.

  * **published\_​at**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * A timestamp for when the article was published.

    **Tip:** Use the \<a href="/docs/api/liquid/filters/date">\<code>date\</code> filter\</a> to format the timestamp.

  * **tags**

    array of [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The tags applied to the article.

    ExampleShow the total tag count

    When looping through `article.tags`, you can print how many times a tag is used with `tag.total_count`. This number shows visitors how many blog posts have been tagged with a particular tag.

    ##### Code

    ```liquid
    {% for tag in article.tags -%}
      {{ tag }} ({{ tag.total_count }})
    {%- endfor %}
    ```

    ##### Data

    ```json
    {
      "article": {
        "tags": [
          "clear potions",
          "potion troubleshooting",
          "tips"
        ]
      }
    }
    ```

    ##### Output

    ```html
    clear potions (1)potion troubleshooting (2)tips (2)
    ```

  * **template\_​suffix**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The name of the [custom template](https://shopify.dev/themes/architecture/templates#alternate-templates) assigned to the article.

    The name doesn't include the `article.` prefix, or the file extension (`.json` or `.liquid`).

    If a custom template isn't assigned to the article, then `nil` is returned.

  * **title**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The title of the article.

  * **updated\_​at**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * A timestamp for when the article was updated.

    **Tip:** Use the \<a href="/docs/api/liquid/filters/date">\<code>date\</code> filter\</a> to format the timestamp.

  * **url**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The relative URL of the article.

  * **user**

    [user](https://shopify.dev/docs/api/liquid/objects/user)

  * The user associated with the author of the article.

###### Example

```json
{
  "author": "Polina Waters",
  "comment_post_url": "/blogs/potion-notions/how-to-tell-if-you-have-run-out-of-invisibility-potion/comments",
  "comments": [],
  "comments_count": 1,
  "comments_enabled?": true,
  "content": "<p>We've all had this problem before: we peek into the potions vault to determine which potions we are running low on, and the invisibility potion bottle looks completely empty.</p>\n<p>...</p>\n<p> </p>",
  "created_at": "2022-04-14 16:56:02 -0400",
  "excerpt": "And where to buy <strong>more</strong>!",
  "excerpt_or_content": "And where to buy <strong>more</strong>!",
  "handle": "potion-notions/how-to-tell-if-you-have-run-out-of-invisibility-potion",
  "id": 556510085185,
  "image": {},
  "metafields": {},
  "moderated?": true,
  "published_at": "2022-04-14 16:56:02 -0400",
  "tags": [],
  "template_suffix": "",
  "title": "How to tell if you're out of invisibility potion",
  "updated_at": "2022-06-04 19:27:33 -0400",
  "url": {},
  "user": {}
}
```

### Templates using article

[Theme architecture](https://shopify.dev/themes/architecture/templates/article)

[article template](https://shopify.dev/themes/architecture/templates/article)

---



<a id="objects-articles"></a>


## articles

All of the articles across the blogs in the store.

#### Directly accessible in

* Global

You can use `articles` to access an article by its [handle](https://shopify.dev/docs/api/liquid/basics#handles).

###### Code

```liquid
{% assign article = articles['potion-notions/new-potions-for-spring'] %}
{{ article.title | link_to: article.url }}
```

###### Output

```html
<a href="/blogs/potion-notions/new-potions-for-spring" title="">New potions for spring</a>
```

---



<a id="objects-block"></a>


## block

The content and settings of a [section block](https://shopify.dev/themes/architecture/sections/section-schema#blocks).

Sections and blocks are reusable modules of content that make up [templates](https://shopify.dev/themes/architecture/templates).

You can include a maxiumum of 50 blocks in a section. To learn more about using blocks, refer to the [Building with sections and blocks](https://shopify.dev/docs/themes/best-practices/templates-sections-blocks).

### Properties

* * **id**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The ID of the block.

    The ID is dynamically generated by Shopify and is subject to change. You should avoid relying on a literal value of this ID.

  * **settings**

  * The [settings](https://shopify.dev/themes/architecture/sections/section-schema#blocks) of the block.

    To learn about how to access settings, refer to [Access settings](https://shopify.dev/themes/architecture/settings#access-settings). To learn which input settings can be applied to the `type` property within settings, refer to [Input settings](https://shopify.dev/themes/architecture/settings/input-settings).

  * **shopify\_​attributes**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The data attributes for the block for use in the theme editor.

    The theme editor's [JavaScript API](https://shopify.dev/themes/best-practices/editor/integrate-sections-and-blocks#section-and-block-javascript-events) uses the data attributes to identify blocks and listen for events. No value for `block.shopify_attributes` is returned outside the theme editor.

  * **type**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The type of the block.

    The type is a free-form string that's defined in the [block's schema](https://shopify.dev/themes/architecture/sections/section-schema#blocks). You can use the type as an identifier. For example, you might display different markup based on the block type.

###### Example

```json
{
  "id": "column1",
  "settings": "array",
  "shopify_attributes": "data-shopify-editor-block=\"{\"id\":\"column1\",\"type\":\"column\"}\"",
  "type": "column"
}
```

---



<a id="objects-blog"></a>


## blog

Information about a specific [blog](https://help.shopify.com/manual/online-store/blogs/adding-a-blog) in the store.

### Properties

* * **all\_​tags**

    array of [string](https://shopify.dev/docs/api/liquid/basics#string)

  * All of the tags on the articles in the blog.

    This includes tags of articles that aren't in the current pagination view.

  * **articles**

    array of [article](https://shopify.dev/docs/api/liquid/objects/article)

  * The articles in the blog.

    **Tip:** Use the \<a href="/docs/api/liquid/tags/paginate">paginate\</a> tag to choose how many articles to show per page, up to a limit of 50.

  * **articles\_​count**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The total number of articles in the blog. This total doesn't include hidden articles.

  * **comments\_​enabled?**

    [boolean](https://shopify.dev/docs/api/liquid/basics#boolean)

  * Returns `true` if comments are enabled for the blog. Returns `false` if not.

  * **handle**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The [handle](https://shopify.dev/docs/api/liquid/basics#handles) of the blog.

  * **id**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The ID of the blog.

  * **metafields**

    array of [metafield](https://shopify.dev/docs/api/liquid/objects/metafield)

  * The [metafields](https://shopify.dev/docs/api/liquid/objects/metafield) applied to the blog.

    **Tip:** To learn about how to create metafields, refer to \<a href="/apps/metafields/manage">Create and manage metafields\</a> or visit the \<a href="https://help.shopify.com/manual/metafields">Shopify Help Center\</a>.

  * **moderated?**

    [boolean](https://shopify.dev/docs/api/liquid/basics#boolean)

  * Returns `true` if the blog is set to [moderate comments](https://help.shopify.com/manual/online-store/blogs/managing-comments). Returns `false` if not.

  * **next\_​article**

    [article](https://shopify.dev/docs/api/liquid/objects/article)

  * The next (older) article in the blog.

    Returns `nil` if there is no next article.

    This property can be used on the [article page](https://shopify.dev/themes/architecture/templates/article) to output `next` links.

  * **previous\_​article**

    [article](https://shopify.dev/docs/api/liquid/objects/article)

  * The previous (newer) article in the blog.

    Returns `nil` if there is no previous article.

    This property can be used on the [article page](https://shopify.dev/themes/architecture/templates/article) to output `previous` links.

  * **tags**

    array of [string](https://shopify.dev/docs/api/liquid/basics#string)

  * A list of all of the tags on all of the articles in the blog.

    Unlike [`blog.all_tags`](https://shopify.dev/docs/api/liquid/objects/blog#blog-all_tags), this property only returns tags of articles that are in the filtered view.

  * **template\_​suffix**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The name of the [custom template](https://shopify.dev/themes/architecture/templates#alternate-templates) assigned to the blog.

    The name doesn't include the `blog.` prefix, or the file extension (`.json` or `.liquid`).

    If a custom template isn't assigned to the blog, then `nil` is returned.

  * **title**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The title of the blog.

  * **url**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The relative URL of the blog.

###### Example

```json
{
  "all_tags": [],
  "articles": [],
  "articles_count": 3,
  "comments_enabled?": true,
  "handle": "potion-notions",
  "id": 78580613185,
  "metafields": {},
  "moderated?": true,
  "next_article": {},
  "previous_article": {},
  "tags": [],
  "template_suffix": "",
  "title": "Potion Notions",
  "url": "/blogs/potion-notions"
}
```

### Templates using blog

[Theme architecture](https://shopify.dev/themes/architecture/templates/blog)

[blog template](https://shopify.dev/themes/architecture/templates/blog)

[Theme architecture](https://shopify.dev/themes/architecture/templates/article)

[article template](https://shopify.dev/themes/architecture/templates/article)

---



<a id="objects-blogs"></a>


## blogs

All of the blogs in the store.

#### Directly accessible in

* Global

You can use `blogs` to access a blog by its [handle](https://shopify.dev/docs/api/liquid/basics#handles).

###### Code

```liquid
{% for article in blogs.potion-notions.articles %}
  {{- article.title | link_to: article.url }}
{% endfor %}
```

###### Output

```html
<a href="/blogs/potion-notions/homebrew-start-making-potions-at-home" title="">Homebrew: start making potions at home</a>

<a href="/blogs/potion-notions/new-potions-for-spring" title="">New potions for spring</a>

<a href="/blogs/potion-notions/how-to-tell-if-you-have-run-out-of-invisibility-potion" title="">How to tell if you're out of invisibility potion</a>
```

---



<a id="objects-brand"></a>


## brand

The [brand assets](https://help.shopify.com/manual/promoting-marketing/managing-brand-assets) for the store.

### Properties

* * **colors**

  * The brand's colors.

    To learn about how to access brand colors, refer to [`brand_color`](https://shopify.dev/docs/api/liquid/objects/brand_color).

  * **cover\_​image**

    [image](https://shopify.dev/docs/api/liquid/objects/image)

  * The square logo for the brand, resized to 32x32 px.

  * **favicon\_​url**

    [image](https://shopify.dev/docs/api/liquid/objects/image)

  * The square logo for the brand, resized to 32x32 px.

  * **logo**

    [image](https://shopify.dev/docs/api/liquid/objects/image)

  * The default logo for the brand.

  * **metafields**

  * The social links for the brand.

    Social links are stored in [metafields](https://shopify.dev/docs/api/liquid/objects/metafield), and can be accessed using the syntax `shop.brand.metafields.social_links.<platform>.value`.

    | Platforms |
    | - |
    | `facebook` |
    | `pinterest` |
    | `instagram` |
    | `tiktok` |
    | `tumblr` |
    | `snapchat` |
    | `vimeo` |

    ExampleAccess social links

    ##### Code

    ```liquid
    {{ shop.brand.metafields.social_links.twitter.value }}
    {{ shop.brand.metafields.social_links.youtube.value }}
    ```

    ##### Data

    ```json
    {
      "shop": {
        "brand": {
          "metafields": {}
        }
      }
    }
    ```

    ##### Output

    ```html
    https://twitter.com/ShopifyDevs
    https://www.youtube.com/c/shopifydevs
    ```

  * **short\_​description**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * A short description of the brand.

  * **slogan**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The slogan for the brand.

  * **square\_​logo**

    [image](https://shopify.dev/docs/api/liquid/objects/image)

  * The square logo for the brand.

###### Example

```json
{
  "colors": {},
  "cover_image": {},
  "favicon_url": {},
  "logo": {},
  "metafields": {},
  "short_description": "Canada's foremost retailer for potions and potion accessories. Try one of our award-winning artisanal potions, or find the supplies to make your own!",
  "slogan": "Save the toil and trouble!",
  "square_logo": {}
}
```

---



<a id="objects-brand-color"></a>


## brand\_​color

The colors defined as part of a store's [brand assets](https://help.shopify.com/manual/promoting-marketing/managing-brand-assets).

#### Returned by

* [brand.colors](https://shopify.dev/docs/api/liquid/objects/brand#brand-colors)

To access a brand color, specify the following:

* The brand color group: either `primary` or `secondary`
* The color role: Whether the color is a `background` or `foreground` (contrasting) color
* The 0-based index of the color within the group and role

###### Code

```liquid
{{ shop.brand.colors.primary[0].background }}
{{ shop.brand.colors.primary[0].foreground }}
{{ shop.brand.colors.secondary[0].background }}
{{ shop.brand.colors.secondary[1].background }}
{{ shop.brand.colors.secondary[0].foreground }}
```

###### Data

```json
{
  "shop": {
    "brand": {
      "colors": "BrandDrop::BrandColorsDrop"
    }
  }
}
```

###### Output

```html
#0b101f
#DDE2F1
#101B2E
#95A7D5
#A3DFFD
```

---



<a id="objects-canonical-url"></a>


## canonical\_​url

The canonical URL for the current page.

To learn about canonical URLs, refer to [Google's documentation](https://support.google.com/webmasters/answer/139066?hl=en).

#### Directly accessible in

* Global

---



<a id="objects-cart"></a>


## cart

A customer’s cart.

### Properties

* * **attributes**

  * Additional attributes entered by the customer with the cart.

    To learn more about capturing cart attributes, refer to the [`cart` template](https://shopify.dev/themes/architecture/templates/cart#support-cart-notes-and-attributes).

    ExampleCapture cart attributes

    To capture a cart attribute, include an HTML input with an attribute of `name="attributes[attribute-name]"` within the cart `<form>`.

    ```liquid
    <label>What do you want engraved on your cauldron?</label>
    <input type="text" name="attributes[cauldron-engraving]" value="{{ cart.attributes.cauldron-engraving }}" />
    ```

    ```liquid
    ```

    ***

    **Tip:** You can add a double underscore \<code>\_\_\</code> prefix to an attribute name to make it private. Private attributes behave like other cart attributes, except that they can\&#39;t be read from Liquid or the Ajax API. You can use them for data that doesn\&#39;t affect the page rendering, which allows for more effective page caching.

    ***

  * **cart\_​level\_​discount\_​applications**

    array of [discount\_application](https://shopify.dev/docs/api/liquid/objects/discount_application)

  * The cart-specific discount applications for the cart.

    ExampleDisplay cart-level discount applications

    ##### Code

    ```liquid
    {% for discount_application in cart.cart_level_discount_applications %}
      Discount name: {{ discount_application.title }}
      Savings: -{{ discount_application.total_allocated_amount | money }}
    {% endfor %}
    ```

    ##### Data

    ```json
    {
      "cart": {
        "cart_level_discount_applications": [
          {
            "title": "Ingredient Sale",
            "total_allocated_amount": "42.24"
          }
        ]
      }
    }
    ```

    ##### Output

    ```html
    Discount name: Ingredient Sale
      Savings: -$42.24
    ```

  * **checkout\_​charge\_​amount**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The amount that the customer will be charged at checkout in the currency's subunit.

    The value is output in the customer's local (presentment) currency.

    For currencies without subunits, such as JPY and KRW, tenths and hundredths of a unit are appended. For example, 1000 Japanese yen is output as 100000.

    **Tip:** Use \<a href="/docs/api/liquid/filters/money-filters">money filters\</a> to output a formatted price.

  * **currency**

  * The currency of the cart.

    If the store uses multi-currency, then this is the same as the customer's local (presentment) currency. Otherwise, it's the same as the store currency.

    **Tip:** You can output the store\&#39;s available currencies using \<a href="/docs/api/liquid/objects/shop#shop-enabled\_currencies">\<code>\<span class="PreventFireFoxApplyingGapToWBR">shop.enabled\<wbr/>\_currencies\</span>\</code>\</a>.

  * **discount\_​applications**

    array of [discount\_application](https://shopify.dev/docs/api/liquid/objects/discount_application)

  * The discount applications for the cart.

    ExampleDisplay discount applications

    ##### Code

    ```liquid
    {% for discount_application in cart.discount_applications %}
      Discount name: {{ discount_application.title }}
      Savings: -{{ discount_application.total_allocated_amount | money }}
    {% endfor %}
    ```

    ##### Data

    ```json
    {
      "cart": {
        "discount_applications": [
          {
            "title": "Bloodroot discount!",
            "total_allocated_amount": "2.50"
          },
          {
            "title": "Ingredient Sale",
            "total_allocated_amount": "42.24"
          }
        ]
      }
    }
    ```

    ##### Output

    ```html
    Discount name: Bloodroot discount!
      Savings: -$2.50

      Discount name: Ingredient Sale
      Savings: -$42.24
    ```

  * **duties\_​included**

    [boolean](https://shopify.dev/docs/api/liquid/basics#boolean)

  * Returns `true` if duties are included in the prices of products in the cart. Returns `false` if not.

  * **empty?**

    [boolean](https://shopify.dev/docs/api/liquid/basics#boolean)

  * Returns `true` if there are no items in the cart. Return's `false` if there are.

  * **item\_​count**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The number of items in the cart.

  * **items**

    array of [line\_item](https://shopify.dev/docs/api/liquid/objects/line_item)

  * The line items in the cart.

  * **items\_​subtotal\_​price**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The total price of all of the items in the cart in the currency's subunit, after any line item discounts. This doesn't include taxes (unless taxes are included in the prices), cart discounts, or shipping costs.

    The value is output in the customer's local (presentment) currency.

    For currencies without subunits, such as JPY and KRW, tenths and hundredths of a unit are appended. For example, 1000 Japanese yen is output as 100000.

    **Tip:** Use \<a href="/docs/api/liquid/filters/money-filters">money filters\</a> to output a formatted amount.

  * **note**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * Additional information captured with the cart.

    To learn more about capturing cart notes, refer to the [`cart` template](https://shopify.dev/themes/architecture/templates/cart#support-cart-notes-and-attributes).

    ExampleCapture cart notes

    To capture a cart note, include an HTML input such as a `<textarea>` with an attribute of `name="note"` within the cart `<form>`.

    ```liquid
    <label>Gift note:</label>
    <textarea name="note"></textarea>
    ```

    ```liquid
    ```

    ***

    **Note:** There can only be one instance of \<code>{{ cart.note }}\</code> on the cart page. If there are multiple instances, then the one that comes latest in the Document Object Model (DOM) will be submitted with the form.

    ***

  * **original\_​total\_​price**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The total price of all of the items in the cart in the currency's subunit, before discounts have been applied.

    The value is output in the customer's local (presentment) currency.

    For currencies without subunits, such as JPY and KRW, tenths and hundredths of a unit are appended. For example, 1000 Japanese yen is output as 100000.

    **Tip:** Use \<a href="/docs/api/liquid/filters/money-filters">money filters\</a> to output a formatted amount.

  * **requires\_​shipping**

    [boolean](https://shopify.dev/docs/api/liquid/basics#boolean)

  * Returns `true` if any of the products in the cart require shipping. Returns `false` if not.

  * **taxes\_​included**

    [boolean](https://shopify.dev/docs/api/liquid/basics#boolean)

  * Returns `true` if taxes are included in the prices of products in the cart. Returns `false` if not.

    This can be set in a store’s [tax settings](https://www.shopify.com/admin/settings/taxes).

    If the store includes or exclude tax [based on the customer’s country](https://help.shopify.com/manual/taxes/location#include-or-exclude-tax-based-on-your-customers-country), then the value reflects the tax requirements of the customer’s country.

  * **total\_​discount**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The total amount of all discounts (the amount saved) for the cart in the currency's subunit.

    The value is output in the customer's local (presentment) currency.

    For currencies without subunits, such as JPY and KRW, tenths and hundredths of a unit are appended. For example, 1000 Japanese yen is output as 100000.

    **Tip:** Use \<a href="/docs/api/liquid/filters/money-filters">money filters\</a> to output a formatted amount.

  * **total\_​price**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The total price of all of the items in the cart in the currency's subunit, after discounts have been applied.

    The value is output in the customer's local (presentment) currency.

    For currencies without subunits, such as JPY and KRW, tenths and hundredths of a unit are appended. For example, 1000 Japanese yen is output as 100000.

    **Tip:** Use \<a href="/docs/api/liquid/filters/money-filters">money filters\</a> to output a formatted amount.

  * **total\_​weight**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The total weight of all of the items in the cart in grams.

    **Tip:** Use the \<a href="/docs/api/liquid/filters/weight\_with\_unit">\<code>\<span class="PreventFireFoxApplyingGapToWBR">weight\<wbr/>\_with\<wbr/>\_unit\</span>\</code>\</a> filter to format the weight in \<a href="https://www\.shopify.com/admin/settings/general">the store\&#39;s format\</a>, or override the default unit.

### Deprecated Properties

* * **discounts**

    array of [discount](https://shopify.dev/docs/api/liquid/objects/discount)

    Deprecated

  * The discounts applied to the cart.

    **Deprecated:**

    Deprecated because not all discount types and details are available.

    The `cart.discounts` property has been replaced by [`cart.discount_applications`](https://shopify.dev/docs/api/liquid/objects/cart#cart-discount_applications).

###### Example

```json
{
  "attributes": {},
  "cart_level_discount_applications": [],
  "checkout_charge_amount": "380.25",
  "currency": {},
  "discount_applications": [],
  "discounts": [],
  "duties_included": false,
  "empty?": false,
  "item_count": 2,
  "items": [],
  "items_subtotal_price": "422.49",
  "note": "Hello this is a note",
  "original_total_price": "424.99",
  "requires_shipping": true,
  "taxes_included": false,
  "total_discount": "44.74",
  "total_price": "380.25",
  "total_weight": 0
}
```

### Templates using cart

[Theme architecture](https://shopify.dev/themes/architecture/templates/cart)

[cart template](https://shopify.dev/themes/architecture/templates/cart)

---



<a id="objects-checkout"></a>


## checkout

A customer's checkout.

***

**Deprecated:** \</p> \<p>The \<code>checkout\</code> object will be deprecated for the Information, Shipping, and Payment pages on August 13, 2024. Merchants who have customized these pages using \<code>checkout.liquid\</code> need to \<a href="https://help.shopify.com/manual/online-store/themes/theme-structure/extend/checkout-migration#migrate-to-checkout-extensibility">upgrade to Checkout Extensibility\</a> before August 13, 2024.\</p> \<p>Learn \<a href="/apps/checkout">how to build checkout extensions\</a> that extend the functionality of Shopify checkout.

***

You can access the `checkout` object on the [**Order status** page](https://help.shopify.com/manual/orders/status-tracking/customize-order-status).

Shopify Plus merchants can access the `checkout` object in the [`checkout.liquid` layout](https://shopify.dev/themes/architecture/layouts/checkout-liquid).

### Properties

* * **applied\_​gift\_​cards**

    array of [gift\_card](https://shopify.dev/docs/api/liquid/objects/gift_card)

  * The gift cards applied to the checkout.

  * **attributes**

  * Additional attributes entered by the customer with the [cart](https://shopify.dev/docs/api/liquid/objects/cart#cart-attributes).

    Shopify Plus merchants that have access to `checkout.liquid` can [capture attributes at checkout](https://shopify.dev/themes/architecture/layouts/checkout-liquid#capture-checkout-attributes).

  * **billing\_​address**

    [address](https://shopify.dev/docs/api/liquid/objects/address)

  * The billing address entered at checkout.

  * **buyer\_​accepts\_​marketing**

    [boolean](https://shopify.dev/docs/api/liquid/basics#boolean)

  * Returns `true` if the customer checks the email marketing subscription checkbox. Returns `false` if not.

  * **cart\_​level\_​discount\_​applications**

    array of [discount\_application](https://shopify.dev/docs/api/liquid/objects/discount_application)

  * The cart-specific discount applications for the checkout.

  * **currency**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The [ISO code](https://www.iso.org/iso-4217-currency-codes.html) of the currency of the checkout.

  * **customer**

    [customer](https://shopify.dev/docs/api/liquid/objects/customer)

  * The customer associated with the checkout.

    **Note:** The \<a href="/docs/api/liquid/objects/customer">\<code>customer\</code> object\</a> is directly accessible globally when a customer is logged in to their account.

  * **discount\_​applications**

    array of [discount\_application](https://shopify.dev/docs/api/liquid/objects/discount_application)

  * The discount applications for the checkout.

  * **discounts\_​amount**

    array of [discount\_application](https://shopify.dev/docs/api/liquid/objects/discount_application)

  * The total amount of the discounts applied to the checkout in the currency's subunit.

    The value is output in the customer's local (presentment) currency.

    For currencies without subunits, such as JPY and KRW, tenths and hundredths of a unit are appended. For example, 1000 Japanese yen is output as 100000.

    **Tip:** Use \<a href="/docs/api/liquid/filters/money-filters">money filters\</a> to output a formatted amount.

  * **discounts\_​savings**

    array of [discount\_application](https://shopify.dev/docs/api/liquid/objects/discount_application)

  * The total amount of the discounts applied to the checkout in the currency's subunit, as a negative value.

    The value is output in the customer's local (presentment) currency.

    For currencies without subunits, such as JPY and KRW, tenths and hundredths of a unit are appended. For example, 1000 Japanese yen is output as 100000.

    **Tip:** Use \<a href="/docs/api/liquid/filters/money-filters">money filters\</a> to output a formatted amount.

  * **email**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The email associated with the checkout.

  * **gift\_​cards\_​amount**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The amount of the checkout price paid in gift cards.

    The value is output in the customer's local (presentment) currency.

    **Tip:** Use \<a href="/docs/api/liquid/filters/money-filters">money filters\</a> to output a formatted amount.

  * **id**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The ID of the checkout.

  * **item\_​count**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The number of items in the checkout.

  * **line\_​items**

    array of [line\_item](https://shopify.dev/docs/api/liquid/objects/line_item)

  * The line items of the checkout.

  * **line\_​items\_​subtotal\_​price**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The sum of the prices of all of the line items of the checkout in the currency's subunit, after any line item discounts. have been applied.

    The value is output in the customer's local (presentment) currency.

    For currencies without subunits, such as JPY and KRW, tenths and hundredths of a unit are appended. For example, 1000 Japanese yen is output as 100000.

    **Tip:** Use \<a href="/docs/api/liquid/filters/money-filters">money filters\</a> to output a formatted amount.

  * **name**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The name of the checkout.

    This value is the same as [`checkout.id`](https://shopify.dev/docs/api/liquid/objects/checkout#checkout-id) with a `#` prepended to it.

  * **note**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * Additional information entered by the customer with the [cart](https://shopify.dev/docs/api/liquid/objects/cart#cart-note).

  * **order**

    [order](https://shopify.dev/docs/api/liquid/objects/order)

  * The order created by the checkout.

    Depending on the payment provider, the order might not have been created when the [**Thank you** page](https://help.shopify.com/en/manual/orders/status-tracking) is first viewed. In this case, `nil` is returned.

    **Note:** The \<code>order\</code> object isn\&#39;t available on the \<strong>Thank you\</strong> page.

  * **order\_​id**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The ID of the order created by the checkout.

    The value is the same as [`order.id`](https://shopify.dev/docs/api/liquid/objects/order#order-id).

    Depending on the payment provider, the order might not have been created when the [**Order status** page](https://help.shopify.com/en/manual/orders/status-tracking) is first viewed. In this case, `nil` is returned.

  * **order\_​name**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The name of the order created by the checkout.

    The value is the same as [`order.name`](https://shopify.dev/docs/api/liquid/objects/order#order-name).

    Depending on the payment provider, the order might not have been created when the [**Order status** page](https://help.shopify.com/en/manual/orders/status-tracking) is first viewed. In this case, `nil` is returned.

  * **order\_​number**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * An integer representation of the name of the order created by the checkout.

    The value is the same as [`order.order_number`](https://shopify.dev/docs/api/liquid/objects/order#order-order_number).

    Depending on the payment provider, the order might not have been created when the [**Order status** page](https://help.shopify.com/en/manual/orders/status-tracking) is first viewed. In this case, `nil` is returned.

  * **requires\_​shipping**

    [boolean](https://shopify.dev/docs/api/liquid/basics#boolean)

  * Returns `true` if any of the line items of the checkout require shipping. Returns `false` if not.

  * **shipping\_​address**

    [address](https://shopify.dev/docs/api/liquid/objects/address)

  * The shipping address of the checkout.

  * **shipping\_​method**

    [shipping\_method](https://shopify.dev/docs/api/liquid/objects/shipping_method)

  * The shipping method of the checkout.

  * **shipping\_​price**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The shipping price of the checkout in the currency's subunit.

    The value is output in the customer's local (presentment) currency.

    For currencies without subunits, such as JPY and KRW, tenths and hundredths of a unit are appended. For example, 1000 Japanese yen is output as 100000.

    **Tip:** Use \<a href="/docs/api/liquid/filters/money-filters">money filters\</a> to output a formatted amount.

  * **tax\_​lines**

    array of [tax\_line](https://shopify.dev/docs/api/liquid/objects/tax_line)

  * The tax lines for the checkout.

  * **tax\_​price**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The total tax amount of the checkout in the currency's subunit.

    The value is output in the customer's local (presentment) currency.

    For currencies without subunits, such as JPY and KRW, tenths and hundredths of a unit are appended. For example, 1000 Japanese yen is output as 100000.

    **Tip:** Use \<a href="/docs/api/liquid/filters/money-filters">money filters\</a> to output a formatted amount.

  * **total\_​price**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The total price of the checkout in the currency's subunit.

    The value is output in the customer's local (presentment) currency.

    For currencies without subunits, such as JPY and KRW, tenths and hundredths of a unit are appended. For example, 1000 Japanese yen is output as 100000.

    **Tip:** Use \<a href="/docs/api/liquid/filters/money-filters">money filters\</a> to output a formatted amount.

  * **transactions**

    array of [transaction](https://shopify.dev/docs/api/liquid/objects/transaction)

  * The transactions of the checkout.

### Deprecated Properties

* * **cancelled**

    [boolean](https://shopify.dev/docs/api/liquid/basics#boolean)

    Deprecated

  * Returns `true` if the checkout has been cancelled. Returns `false` if not.

    **Deprecated:**

    Deprecated because `false` is always returned.

  * **discount**

    [discount](https://shopify.dev/docs/api/liquid/objects/discount)

    Deprecated

  * A discount applied to the checkout without being saved.

    **Deprecated:**

    Deprecated because an unsaved discount doesn't exist on the [**Order status** page](https://help.shopify.com/manual/orders/status-tracking).

  * **discounts**

    array of [discount](https://shopify.dev/docs/api/liquid/objects/discount)

    Deprecated

  * The discounts applied to the checkout.

    **Deprecated:**

    Deprecated because not all discount types and details are captured.

    The `checkout.discounts` property has been replaced by [`checkout.discount_applications`](https://shopify.dev/docs/api/liquid/objects/checkout#checkout-discount_applications).

  * **financial\_​status**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

    Deprecated

  * The financial status of the checkout.

    **Deprecated:**

    Deprecated because `nil` is always returned.

  * **fulfilled\_​at**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

    Deprecated

  * A timestamp for the fulfullment of the checkout.

    **Deprecated:**

    Deprecated because `nil` is always returned.

  * **fulfilled\_​line\_​items**

    array of [line\_item](https://shopify.dev/docs/api/liquid/objects/line_item)

    Deprecated

  * The fulfilled line items from the checkout.

    **Deprecated:**

    Deprecated because the array is always empty.

  * **fulfillment\_​status**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

    Deprecated

  * The fulfillment status of the checkout.

    **Deprecated:**

    Deprecated because `unfulfilled` is always returned.

  * **unavailable\_​line\_​items**

    array of [line\_item](https://shopify.dev/docs/api/liquid/objects/line_item)

    Deprecated

  * The unavailable line items of the checkout.

    **Deprecated:**

    Deprecated because the array is always empty.

  * **unfulfilled\_​line\_​items**

    array of [line\_item](https://shopify.dev/docs/api/liquid/objects/line_item)

    Deprecated

  * The unfulfilled line items of the checkout.

    **Deprecated:**

    Deprecated because the array is always the same as [`checkout.line_items`](https://shopify.dev/docs/api/liquid/objects/checkout#checkout-line_items).

###### Example

```json
{
  "applied_gift_cards": [],
  "attributes": {},
  "billing_address": {},
  "buyer_accepts_marketing": false,
  "cart_level_discount_applications": [],
  "currency": "CAD",
  "customer": {},
  "discount_applications": [],
  "discounts_amount": 4224,
  "discounts_savings": -4224,
  "email": "cornelius.potionmaker@gmail.com",
  "gift_cards_amount": 0,
  "id": 29944051400769,
  "line_items": [],
  "line_items_subtotal_price": 42249,
  "name": "#29944051400769",
  "note": null,
  "order": null,
  "order_id": null,
  "order_name": "#29944051400769",
  "order_number": "#29944051400769",
  "requires_shipping": true,
  "shipping_address": {},
  "shipping_method": {},
  "shipping_price": 0,
  "tax_lines": [],
  "tax_price": 0,
  "total_price": 38025,
  "transactions": []
}
```

### Templates using checkout

[Theme architecture](https://shopify.dev/themes/architecture/layouts/checkout-liquid)

[checkout template](https://shopify.dev/themes/architecture/layouts/checkout-liquid)

---



<a id="objects-closest"></a>


## closest

A drop that holds resources of different types that are the closest to the current context

This drop is used to hold resources of different types that are the closest to the current context. These resources can be of type `product`, `collection`, `article`, `blog`, `page`, or `metaobject`. The resources of different types within the closest drop can be:

* The currently rendered section or theme block resource setting of the same type
* The currently rendered theme block's ancestor resource setting of the same type
* The currently rendered template resource of the same type
* Assigned via {% content\_for %} tag

***

**Tip:** To learn about how closest drop in theme settings can be used, refer to \<a href="/storefronts/themes/architecture/blocks/theme-blocks/dynamic-sources#accessing-the-closest-resource">Dynamic sources\</a>.

***

### Properties

* * **article**

    [article](https://shopify.dev/docs/api/liquid/objects/article)

  * Closest article resource

    The article resource that is the closest to the current context.

  * **blog**

    [blog](https://shopify.dev/docs/api/liquid/objects/blog)

  * Closest blog resource

    The blog resource that is the closest to the current context.

  * **collection**

    [collection](https://shopify.dev/docs/api/liquid/objects/collection)

  * Closest collection resource

    The collection resource that is the closest to the current context.

  * **metaobject**

    [metaobject](https://shopify.dev/docs/api/liquid/objects/metaobject)

  * Closest metaobject resources

    The metaobject resources that are the closest to the current context.

  * **page**

    [page](https://shopify.dev/docs/api/liquid/objects/page)

  * Closest page resource

    The page resource that is the closest to the current context.

  * **product**

    [product](https://shopify.dev/docs/api/liquid/objects/product)

  * Closest product resource

    The product resource that is the closest to the current context.

#### Directly accessible in

* Global

---



<a id="objects-collection"></a>


## collection

A [collection](https://help.shopify.com/manual/products/collections) in a store.

### Properties

* * **all\_​products\_​count**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The total number of products in a collection.

    This includes products that have been filtered out of the current view.

    **Tip:** To display the number of products in a filtered collection, use \<a href="/docs/api/liquid/objects/collection#collection-products\_count">\<code>\<span class="PreventFireFoxApplyingGapToWBR">collection.products\<wbr/>\_count\</span>\</code>\</a>.

  * **all\_​tags**

    array of [string](https://shopify.dev/docs/api/liquid/basics#string)

  * All of the tags applied to the products in the collection.

    This includes tags for products that have been filtered out of the current view. A maximum of 1,000 tags can be returned.

    **Tip:** To display the tags that are currently applied, use \<a href="/docs/api/liquid/objects/collection#collection-tags">\<code>collection.tags\</code>\</a>.

  * **all\_​types**

    array of [string](https://shopify.dev/docs/api/liquid/basics#string)

  * All of the product types in a collection.

    ExampleCreate links to product types

    Use the [`link_to_type`](https://shopify.dev/docs/api/liquid/filters/link_to_type) filter to create links to the product types in a collection.

    ##### Code

    ```liquid
    {% for product_type in collection.all_types -%}
      {{- product_type | link_to_type }}
    {%- endfor %}
    ```

    ##### Data

    ```json
    {
      "collection": {
        "all_types": [
          "Animals & Pet Supplies",
          "Baking Flavors & Extracts",
          "Cooking & Baking Ingredients",
          "Dried Flowers",
          "Fruits & Vegetables",
          "Seasonings & Spices",
          "Water"
        ]
      }
    }
    ```

    ##### Output

    ```html
    <a href="/collections/types?q=Animals%20%26%20Pet%20Supplies" title="Animals &amp; Pet Supplies">Animals & Pet Supplies</a>
    <a href="/collections/types?q=Baking%20Flavors%20%26%20Extracts" title="Baking Flavors &amp; Extracts">Baking Flavors & Extracts</a>
    <a href="/collections/types?q=Cooking%20%26%20Baking%20Ingredients" title="Cooking &amp; Baking Ingredients">Cooking & Baking Ingredients</a>
    <a href="/collections/types?q=Dried%20Flowers" title="Dried Flowers">Dried Flowers</a>
    <a href="/collections/types?q=Fruits%20%26%20Vegetables" title="Fruits &amp; Vegetables">Fruits & Vegetables</a>
    <a href="/collections/types?q=Seasonings%20%26%20Spices" title="Seasonings &amp; Spices">Seasonings & Spices</a>
    <a href="/collections/types?q=Water" title="Water">Water</a>
    ```

  * **all\_​vendors**

    array of [string](https://shopify.dev/docs/api/liquid/basics#string)

  * All of the product vendors in a collection.

    ExampleCreate links to vendors

    Use the [`link_to_vendor`](https://shopify.dev/docs/api/liquid/filters/link_to_vendor) filter to create links to the vendors in a collection.

    ##### Code

    ```liquid
    {% for product_vendor in collection.all_vendors %}
      {{- product_vendor | link_to_vendor }}
    {% endfor %}
    ```

    ##### Data

    ```json
    {
      "collection": {
        "all_vendors": [
          "Clover's Apothecary",
          "Polina's Potent Potions",
          "Ted's Apothecary Supply"
        ]
      }
    }
    ```

    ##### Output

    ```html
    <a href="/collections/vendors?q=Clover%27s%20Apothecary" title="Clover&#39;s Apothecary">Clover's Apothecary</a>

    <a href="/collections/vendors?q=Polina%27s%20Potent%20Potions" title="Polina&#39;s Potent Potions">Polina's Potent Potions</a>

    <a href="/collections/vendors?q=Ted%27s%20Apothecary%20Supply" title="Ted&#39;s Apothecary Supply">Ted's Apothecary Supply</a>
    ```

  * **current\_​type**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The product type on a product type collection page.

    You can query for products of a certain type at the `/collections/types` URL with a query parameter in the format of `?q=[type]`, where `[type]` is your desired product type.

    **Tip:** The query value is case-insensitive, so \<code>shirts\</code> is equivalent to \<code>Shirts\</code> or \<code>\<span class="PreventFireFoxApplyingGapToWBR">S\<wbr/>H\<wbr/>I\<wbr/>R\<wbr/>T\<wbr/>S\</span>\</code>.

  * **current\_​vendor**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The vendor name on a vendor collection page.

    You can query for products from a certain vendor at the `/collections/vendors` URL with a query parameter in the format of `?q=[vendor]`, where `[vendor]` is your desired product vendor.

    **Tip:** The query value is case-insensitive, so \<code>apparelco\</code> is equivalent to \<code>\<span class="PreventFireFoxApplyingGapToWBR">Apparel\<wbr/>Co\</span>\</code> or \<code>\<span class="PreventFireFoxApplyingGapToWBR">A\<wbr/>P\<wbr/>P\<wbr/>A\<wbr/>R\<wbr/>E\<wbr/>L\<wbr/>C\<wbr/>O\</span>\</code>.

  * **default\_​sort\_​by**

    [string](https://shopify.dev/docs/api/liquid/basics#string) from a set of values

  * The default sort order of the collection.

    This is set on the collection's page in the Shopify admin.

    | Possible values |
    | - |
    | manual |
    | best-selling |
    | title-ascending |
    | price-ascending |
    | price-descending |
    | created-ascending |
    | created-descending |

  * **description**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The description of the collection.

  * **featured\_​image**

    [image](https://shopify.dev/docs/api/liquid/objects/image)

  * The featured image for the collection.

    The default is the [collection image](https://shopify.dev/docs/api/liquid/objects/collection#collection-image). If this image isn't available, then Shopify falls back to the featured image of the first product in the collection. If the first product in the collection doesn't have a featured image, then `nil` is returned.

  * **filters**

    array of [filter](https://shopify.dev/docs/api/liquid/objects/filter)

  * The [storefront filters](https://help.shopify.com/manual/online-store/themes/customizing-themes/storefront-filters) that have been set up on the collection.

    Only filters relevant to the current collection are returned. Filters will be empty for collections that contain over 5000 products.

    To learn about supporting filters in your theme, refer to [Support storefront filtering](https://shopify.dev/themes/navigation-search/filtering/storefront-filtering/support-storefront-filtering).

  * **handle**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The [handle](https://shopify.dev/docs/api/liquid/basics#handles) of the collection.

  * **id**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The ID of the collection.

  * **image**

    [image](https://shopify.dev/docs/api/liquid/objects/image)

  * The image for the collection.

    This image is added on the collection's page in the Shopify admin.

  * **metafields**

    array of [metafield](https://shopify.dev/docs/api/liquid/objects/metafield)

  * The [metafields](https://shopify.dev/docs/api/liquid/objects/metafield) applied to the collection.

    **Tip:** To learn about how to create metafields, refer to \<a href="/apps/metafields/manage">Create and manage metafields\</a> or visit the \<a href="https://help.shopify.com/manual/metafields">Shopify Help Center\</a>.

  * **next\_​product**

    [product](https://shopify.dev/docs/api/liquid/objects/product)

  * The next product in the collection. Returns `nil` if there's no next product.

    This property can be used on the [product page](https://shopify.dev/themes/architecture/templates/product) to output `next` links.

  * **previous\_​product**

    [product](https://shopify.dev/docs/api/liquid/objects/product)

  * The previous product in the collection. Returns `nil` if there's no previous product.

    This property can be used on the [product page](https://shopify.dev/themes/architecture/templates/product) to output `previous` links.

  * **products**

    array of [product](https://shopify.dev/docs/api/liquid/objects/product)

  * All of the products in the collection.

    **Tip:** Use the \<a href="/docs/api/liquid/tags/paginate">paginate\</a> tag to choose how many products to show per page, up to a limit of 50.

  * **products\_​count**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The total number of products in the current view of the collection.

  * **published\_​at**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * A timestamp for when the collection was published.

    **Tip:** Use the \<a href="/docs/api/liquid/filters/date">\<code>date\</code> filter\</a> to format the timestamp.

  * **sort\_​by**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The sort order applied to the collection by the `sort_by` URL parameter.

    If there's no `sort_by` URL parameter, then the value is `nil`.

  * **sort\_​options**

    array of [sort\_option](https://shopify.dev/docs/api/liquid/objects/sort_option)

  * The available sorting options for the collection.

    ExampleOutput the sort options

    ##### Code

    ```liquid
    {%- assign sort_by = collection.sort_by | default: collection.default_sort_by -%}

    <select>
    {%- for option in collection.sort_options %}
      <option
        value="{{ option.value }}"
        {%- if option.value == sort_by %}
          selected="selected"
        {%- endif %}
      >
        {{ option.name }}
      </option>
    {% endfor -%}
    </select>
    ```

    ##### Data

    ```json
    {
      "collection": {
        "default_sort_by": "title-ascending",
        "sort_by": "",
        "sort_options": [
          "CollectionDrop::SortOptionDrop",
          "CollectionDrop::SortOptionDrop",
          "CollectionDrop::SortOptionDrop",
          "CollectionDrop::SortOptionDrop",
          "CollectionDrop::SortOptionDrop",
          "CollectionDrop::SortOptionDrop",
          "CollectionDrop::SortOptionDrop",
          "CollectionDrop::SortOptionDrop",
          "CollectionDrop::SortOptionDrop"
        ]
      }
    }
    ```

    ##### Output

    ```html
    <select>
      <option
        value="manual"
      >
        Featured
      </option>

      <option
        value="most-relevant"
      >
        Most relevant
      </option>

      <option
        value="best-selling"
      >
        Best selling
      </option>

      <option
        value="title-ascending"
          selected="selected"
      >
        Alphabetically, A-Z
      </option>

      <option
        value="title-descending"
      >
        Alphabetically, Z-A
      </option>

      <option
        value="price-ascending"
      >
        Price, low to high
      </option>

      <option
        value="price-descending"
      >
        Price, high to low
      </option>

      <option
        value="created-ascending"
      >
        Date, old to new
      </option>

      <option
        value="created-descending"
      >
        Date, new to old
      </option>
    </select>
    ```

  * **tags**

    array of [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The tags that are currently applied to the collection.

    This doesn't include tags for products that have been filtered out of the current view. Returns `nil` if no tags have been applied, or all products with tags have been filtered out of the current view.

  * **template\_​suffix**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The name of the [custom template](https://shopify.dev/themes/architecture/templates#alternate-templates) assigned to the collection.

    The name doesn't include the `collection.` prefix, or the file extension (`.json` or `.liquid`).

    If a custom template isn't assigned to the collection, then `nil` is returned.

  * **title**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The title of the collection.

  * **url**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The relative URL of the collection.

###### Example

```json
{
  "all_products_count": 10,
  "all_tags": [
    "Burning",
    "dried",
    "extracts",
    "fresh",
    "ingredients",
    "plant",
    "supplies"
  ],
  "all_types": [
    "Animals & Pet Supplies",
    "Baking Flavors & Extracts",
    "Cooking & Baking Ingredients",
    "Dried Flowers",
    "Fruits & Vegetables",
    "Seasonings & Spices",
    "Water"
  ],
  "all_vendors": [
    "Clover's Apothecary",
    "Polina's Potent Potions",
    "Ted's Apothecary Supply"
  ],
  "current_type": null,
  "current_vendor": null,
  "default_sort_by": "created-ascending",
  "description": "Brew your own potions at home using our fresh, ethically-sourced ingredients.",
  "featured_image": {},
  "filters": {},
  "handle": "ingredients",
  "id": 266168401985,
  "image": {},
  "metafields": {},
  "next_product": null,
  "previous_product": null,
  "products": {},
  "products_count": 1,
  "published_at": "2022-04-19 09:52:18 -0400",
  "sort_by": "",
  "sort_options": [],
  "tags": [
    "Burning"
  ],
  "template_suffix": "eight-products-per-page",
  "title": "Ingredients",
  "url": {}
}
```

### Templates using collection

[Theme architecture](https://shopify.dev/themes/architecture/templates/collection)

[collection template](https://shopify.dev/themes/architecture/templates/collection)

---



<a id="objects-collections"></a>


## collections

All of the [collections](https://shopify.dev/docs/api/liquid/objects/collection) on a store.

#### Directly accessible in

* Global

#### Iterate over the collections

You can iterate over `collections` to build a collection list.

###### Code

```liquid
{% for collection in collections %}
  {{- collection.title | link_to: collection.url }}
{% endfor %}
```

###### Output

```html
<a href="/collections/empty" title="">Empty</a>

<a href="/collections/featured-potions" title="">Featured potions</a>

<a href="/collections/freebies" title="">Freebies</a>

<a href="/collections/frontpage" title="">Home page</a>

<a href="/collections/ingredients" title="">Ingredients</a>

<a href="/collections/potions" title="">Potions</a>

<a href="/collections/sale-potions" title="">Sale potions</a>
```

#### Access a specific collection

You can use `collections` to access a collection by its [handle](https://shopify.dev/docs/api/liquid/basics#handles).

###### Code

```liquid
{% for product in collections['sale-potions'].products %}
  {{- product.title | link_to: product.url }}
{% endfor %}
```

###### Output

```html
<a href="/products/draught-of-immortality" title="">Draught of Immortality</a>

<a href="/products/glacier-ice" title="">Glacier ice</a>

<a href="/products/health-potion" title="">Health potion</a>

<a href="/products/invisibility-potion" title="">Invisibility potion</a>
```

---



<a id="objects-color"></a>


## color

A color from a [`color` setting](https://shopify.dev/themes/architecture/settings/input-settings#color).

***

**Tip:** Use \<a href="/docs/api/liquid/filters/color-filters">color filters\</a> to modify or extract properties of a \<code>color\</code> object.

***

### Properties

* * **alpha**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The alpha component of the color, which is a decimal number between 0.0 and 1.0.

  * **blue**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The blue component of the color, which is a number between 0 and 255.

  * **chroma**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The chroma component of the color, which is a decimal number between 0.0 and 0.5.

  * **color\_​space**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The color space of the color. Returns 'srgb' or 'oklch'

  * **green**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The green component of the color, which is a number between 0 and 255.

  * **hue**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The hue component of the color, which is a number between 0 and 360.

  * **lightness**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The lightness component of the color, which is a number between 0 and 100.

  * **oklch**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The lightness, chroma, and hue values of the color, represented as a space-separated string.

  * **oklcha**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The lightness, chroma, hue and alpha values of the color, represented as a space-separated string, with a slash before the alpha channel.

  * **red**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The red component of the color, which is a number between 0 and 255.

  * **rgb**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The red, green, and blue values of the color, represented as a space-separated string.

  * **rgba**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The red, green, blue, and alpha values of the color, represented as a space-separated string, with a slash before the alpha channel.

  * **saturation**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The saturation component of the color, which is a number between 0 and 100.

###### Example

```json
{
  "alpha": 1,
  "blue": 180,
  "chroma": 0.16,
  "color_space": "srgb",
  "green": 79,
  "hue": 227,
  "lightness": 45,
  "oklch": "47% 0.16 268",
  "oklcha": "47% 0.16 268 / 1.0",
  "red": 51,
  "rgb": "51 79 180",
  "rgba": "51 79 180 / 1.0",
  "saturation": 56
}
```

#### Referencing color settings directly

When a color setting is referenced directly, the hexidecimal color code is returned.

###### Code

```liquid
{{ settings.colors_accent_2 }}
```

###### Data

```json
{
  "settings": {
    "colors_accent_2": "#334fb4"
  }
}
```

###### Output

```html
#334fb4
```

---



<a id="objects-color-scheme"></a>


## color\_​scheme

A color\_scheme from a [`color_scheme` setting](https://shopify.dev/themes/architecture/settings/input-settings#color_scheme).

***

**Tip:** To learn about color scheme groups in themes, refer to \<a href="/themes/architecture/settings/input-settings#color\_scheme\_group">\<code>\<span class="PreventFireFoxApplyingGapToWBR">color\<wbr/>\_scheme\<wbr/>\_group\</span>\</code> setting\</a>.

***

### Properties

* * **id**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The ID of the color\_scheme

  * **settings**

  * The [settings](https://shopify.dev/docs/themes/architecture/settings/input-settings#color_scheme_group) of the color\_scheme.

###### Example

```json
{
  "id": "background-2",
  "settings": {}
}
```

#### Referencing color\_scheme settings directly

When a color\_scheme setting is referenced directly, the color scheme ID is returned.

###### Code

```liquid
{{ settings.card_color_scheme }}
```

###### Data

```json
{
  "settings": {
    "card_color_scheme": {}
  }
}
```

###### Output

```html
background-2
```

---



<a id="objects-color-scheme-group"></a>


## color\_​scheme\_​group

A color\_scheme\_group from a [`color_scheme_group` setting](https://shopify.dev/themes/architecture/settings/input-settings#color_scheme_group).

***

**Tip:** To learn about color schemes in themes, refer to \<a href="/themes/architecture/settings/input-settings#color\_scheme">\<code>\<span class="PreventFireFoxApplyingGapToWBR">color\<wbr/>\_scheme\</span>\</code> setting\</a>.

***

###### Example

```json
{}
```

#### Referencing color\_scheme\_group settings directly

###### Code

```liquid
{% for scheme in settings.color_schemes %}
  .color-{{ scheme.id }} {
    --color-background: {{ scheme.settings.background }};
    --color-text: {{ scheme.settings.text }};
  }
{% endfor %}
```

###### Data

```json
{
  "settings": {
    "color_schemes": {}
  }
}
```

###### Output

```html
.color-background-1 {
    --color-background: #FFFFFF;
    --color-text: #121212;
  }

  .color-background-2 {
    --color-background: #F3F3F3;
    --color-text: #121212;
  }

  .color-inverse {
    --color-background: #121212;
    --color-text: #FFFFFF;
  }

  .color-accent-1 {
    --color-background: #121212;
    --color-text: #FFFFFF;
  }

  .color-accent-2 {
    --color-background: #334FB4;
    --color-text: #FFFFFF;
  }
```

---



<a id="objects-comment"></a>


## comment

An article comment.

### Properties

* * **author**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The full name of the author of the comment.

  * **content**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The content of the comment.

  * **created\_​at**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * A timestamp for when the comment was created.

    **Tip:** Use the \<a href="/docs/api/liquid/filters/date">\<code>date\</code> filter\</a> to format the timestamp.

  * **email**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The email of he author of the comment.

  * **id**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The ID of the comment.

  * **status**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The status of the comment. Always returns `published`.

    Outside of the Liquid context, the status of a comment can vary based on spam detection and whether blog comments are moderated. However, only comments with a status of `published` are included in the [`article.comments` array](https://shopify.dev/docs/api/liquid/objects/article#article-comments).

    **Tip:** To learn more about blog comments, visit the \<a href="https://help.shopify.com/manual/online-store/blogs/managing-comments">Shopify Help Center\</a>.

  * **updated\_​at**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * A timestamp for when the status of the comment was last updated.

    **Tip:** Use the \<a href="/docs/api/liquid/filters/date">\<code>date\</code> filter\</a> to format the timestamp.

  * **url**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The relative URL of the article that the comment is associated with, with [`comment.id`](https://shopify.dev/docs/api/liquid/objects/comment#comment-id) appended.

###### Example

```json
{
  "author": "Cornelius",
  "content": "Wow, this is going to save me a fortune in invisibility potion!",
  "created_at": "2022-06-05 19:33:57 -0400",
  "email": "cornelius.potionmaker@gmail.com",
  "id": 129089273921,
  "status": "published",
  "updated_at": "2022-06-05 19:33:57 -0400",
  "url": "/blogs/potion-notions/how-to-tell-if-you-have-run-out-of-invisibility-potion#129089273921"
}
```

---



<a id="objects-company"></a>


## company

A company that a [customer](https://shopify.dev/docs/api/liquid/objects/customer) is purchasing for.

To learn about B2B in themes, refer to [Support B2B customers in your theme](https://shopify.dev/themes/pricing-payments/b2b).

### Properties

* * **available\_​locations**

    array of [company\_location](https://shopify.dev/docs/api/liquid/objects/company_location)

  * The company locations that the current customer has access to, or can interact with.

  * **available\_​locations\_​count**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The number of company locations associated with the customer's company.

  * **external\_​id**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The external ID of the company.

  * **id**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The ID of the company.

  * **metafields**

    array of [metafield](https://shopify.dev/docs/api/liquid/objects/metafield)

  * The [metafields](https://shopify.dev/docs/api/liquid/objects/metafield) applied to the company.

    **Tip:** To learn about how to create metafields, refer to \<a href="/apps/metafields/manage">Create and manage metafields\</a> or visit the \<a href="https://help.shopify.com/manual/metafields">Shopify Help Center\</a>.

  * **name**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The name of the company.

###### Example

```json
{
  "available_locations": [],
  "available_locations_count": 1,
  "external_id": null,
  "id": 98369,
  "metafields": {},
  "name": "Cornelius&#39; Custom Concoctions"
}
```

---



<a id="objects-company-address"></a>


## company\_​address

The address of a company location.

To learn about B2B in themes, refer to [Support B2B customers in your theme](https://shopify.dev/themes/pricing-payments/b2b).

### Properties

* * **address1**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The first line of the address.

  * **address2**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The second line of the address.

    If no second line is specified, then `nil` is returned.

  * **attention**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The attention line of the address.

  * **city**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The city of the address.

  * **country**

    [country](https://shopify.dev/docs/api/liquid/objects/country)

  * The country of the address.

  * **country\_​code**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The country of the address in [ISO 3166-1 (alpha 2) format](https://www.iso.org/glossary-for-iso-3166.html).

  * **first\_​name**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The first name of the address.

  * **id**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The ID of the address.

  * **last\_​name**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The last name of the address.

  * **province**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The province of the address.

  * **province\_​code**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The province of the address in [ISO 3166-2 (alpha 2) format](https://www.iso.org/glossary-for-iso-3166.html).

    **Note:** The value doesn\&#39;t include the preceding \<a href="https://www\.iso.org/glossary-for-iso-3166.html">ISO 3166-1\</a> country code.

  * **street**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * A combination of the first and second lines of the address.

  * **zip**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The zip or postal code of the address.

###### Example

```json
{
  "address1": "99 Cauldron Lane",
  "address2": "Unit 4B",
  "attention": "Cornelius&#39; Custom Concoctions",
  "city": "Edinburgh",
  "country": {},
  "country_code": "GB",
  "first_name": "Cornelius",
  "id": 65,
  "last_name": "Potionmaker",
  "province": null,
  "province_code": null,
  "street": "99 Cauldron Lane, Unit 4B",
  "zip": "EH95 1AF"
}
```

---



<a id="objects-company-location"></a>


## company\_​location

A location of the [company](https://shopify.dev/docs/api/liquid/objects/company) that a [customer](https://shopify.dev/docs/api/liquid/objects/customer) is purchasing for.

To learn about B2B in themes, refer to [Support B2B customers in your theme](https://shopify.dev/themes/pricing-payments/b2b).

### Properties

* * **company**

    [company](https://shopify.dev/docs/api/liquid/objects/company)

  * The company that the location is associated with.

  * **current?**

    [boolean](https://shopify.dev/docs/api/liquid/basics#boolean)

  * Returns `true` if the location is currently selected. Returns `false` if not.

  * **external\_​id**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The external ID of the location.

  * **id**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The ID of the location.

  * **metafields**

    array of [metafield](https://shopify.dev/docs/api/liquid/objects/metafield)

  * The [metafields](https://shopify.dev/docs/api/liquid/objects/metafield) applied to the company location.

    **Tip:** To learn about how to create metafields, refer to \<a href="/apps/metafields/manage">Create and manage metafields\</a> or visit the \<a href="https://help.shopify.com/manual/metafields">Shopify Help Center\</a>.

  * **name**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The name of the location.

  * **shipping\_​address**

    [company\_address](https://shopify.dev/docs/api/liquid/objects/company_address)

  * The address of the location.

  * **store\_​credit\_​account**

    [store\_credit\_account](https://shopify.dev/docs/api/liquid/objects/store_credit_account)

  * The store credit account associated with the company location.

    The account shown will be in the currency associated with the company location’s current context. For example, when browsing a storefront for a company location in the US market, the company location's USD store credit account will be returned. If the company location does not have a USD store credit account `nil` will be returned.

  * **tax\_​registration\_​id**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The tax ID of the location.

  * **url\_​to\_​set\_​as\_​current**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The URL to set the location as the current location for the customer.

###### Example

```json
{
  "company": {},
  "current?": false,
  "external_id": null,
  "id": 98369,
  "metafields": {},
  "name": "99 Cauldron Lane",
  "shipping_address": {},
  "store_credit_account": null,
  "tax_registration_id": null,
  "url_to_set_as_current": "https://polinas-potent-potions.myshopify.com/company_location/update?location_id=98369&return_to=/resource"
}
```

---



<a id="objects-content-for-additional-checkout-buttons"></a>


## content\_​for\_​additional\_​checkout\_​buttons

Returns checkout buttons for any active payment providers with offsite checkouts.

Use [`additional_checkout_buttons`](https://shopify.dev/docs/api/liquid/objects/additional_checkout_buttons) to check whether these payment providers exist, and `content_for_additional_checkout_buttons` to show the associated checkout buttons. To learn more about how to use these objects, refer to [Accelerated checkout](https://shopify.dev/themes/pricing-payments/accelerated-checkout).

```liquid
{% if additional_checkout_buttons %}
  {{ content_for_additional_checkout_buttons }}
{% endif %}
```

```liquid
{% if additional_checkout_buttons %}
  {{ content_for_additional_checkout_buttons }}
{% endif %}
```

#### Directly accessible in

* Global

---



<a id="objects-content-for-header"></a>


## content\_​for\_​header

Dynamically returns all scripts required by Shopify.

Include the `content_for_header` object in your [layout files](https://shopify.dev/themes/architecture/layouts) between the `<head>` and `</head>` HTML tags.

You shouldn't try to modify or parse the `content_for_header` object because the contents are subject to change, which can change the behaviour of your code.

***

**Note:** The \<code>\<span class="PreventFireFoxApplyingGapToWBR">content\<wbr/>\_for\<wbr/>\_header\</span>\</code> object is required in \<code>theme.liquid\</code>.

***

#### Directly accessible in

* Global

---



<a id="objects-content-for-index"></a>


## content\_​for\_​index

Dynamically returns the content of [sections](https://shopify.dev/themes/architecture/sections) to be rendered on the home page.

If you use a [Liquid index template](https://shopify.dev/themes/architecture/templates/index-template) (`templates/index.liquid`), then you must include `{{ content_for_index }}` in the template. This object can't be used in JSON index templates.

#### Directly accessible in

* Global

---



<a id="objects-content-for-layout"></a>


## content\_​for\_​layout

Dynamically returns content based on the current [template](https://shopify.dev/themes/architecture/templates).

Include the `content_for_layout` object in your [layout files](https://shopify.dev/themes/architecture/layouts) between the `<body>` and `</body>` HTML tags.

***

**Note:** The \<code>\<span class="PreventFireFoxApplyingGapToWBR">content\<wbr/>\_for\<wbr/>\_layout\</span>\</code> object is required in \<code>theme.liquid\</code>.

***

#### Directly accessible in

* Global

---



<a id="objects-country"></a>


## country

A country supported by the store's localization options.

To learn how to use the `country` object to offer localization options in your theme, refer to [Support multiple currencies and languages](https://shopify.dev/themes/internationalization/multiple-currencies-languages).

### Properties

* * **available\_​languages**

    array of [shop\_locale](https://shopify.dev/docs/api/liquid/objects/shop_locale)

  * The languages that have been added to the market that this country belongs to.

  * **continent**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The continent that the country is in.

    Possible values are `Africa`, `Asia`, `Central America`, `Europe`, `North America`, `Oceania`, and `South America`.

  * **currency**

    [currency](https://shopify.dev/docs/api/liquid/objects/currency)

  * The currency used in the country.

  * **iso\_​code**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The ISO code of the country in [ISO 3166-1 (alpha 2) format](https://www.iso.org/glossary-for-iso-3166.html).

  * **market**

    [market](https://shopify.dev/docs/api/liquid/objects/market)

  * The market that includes this country.

  * **name**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The name of the country.

  * **popular?**

    [boolean](https://shopify.dev/docs/api/liquid/basics#boolean)

  * Returns `true` if the country is popular for this shop. Otherwise, returns `false`. This can be useful for sorting countries in a country selector.

  * **unit\_​system**

    [string](https://shopify.dev/docs/api/liquid/basics#string) from a set of values

  * The unit system of the country.

    | Possible values |
    | - |
    | imperial |
    | metric |

###### Example

```json
{
  "available_languages": [],
  "continent": "North America",
  "currency": {},
  "iso_code": "CA",
  "market": {},
  "name": "Canada",
  "popular?": false,
  "unit_system": "metric"
}
```

#### Referencing the `country` object directly

When the country object is referenced directly, `country.name` is returned.

###### Code

```liquid
{% for country in localization.available_countries -%}
  {{ country }}
{%- endfor %}
```

###### Data

```json
{
  "localization": {
    "available_countries": [
      "Afghanistan",
      "Australia",
      "Austria",
      "Belgium",
      "Canada",
      "Czechia",
      "Denmark",
      "Finland",
      "France",
      "Germany",
      "Hong Kong SAR",
      "Ireland",
      "Israel",
      "Italy",
      "Japan",
      "Malaysia",
      "Netherlands",
      "New Zealand",
      "Norway",
      "Poland",
      "Portugal",
      "Singapore",
      "South Korea",
      "Spain",
      "Sweden",
      "Switzerland",
      "United Arab Emirates",
      "United Kingdom",
      "United States"
    ]
  }
}
```

###### Output

```html
Afghanistan
Australia
Austria
Belgium
Canada
Czechia
Denmark
Finland
France
Germany
Hong Kong SAR
Ireland
Israel
Italy
Japan
Malaysia
Netherlands
New Zealand
Norway
Poland
Portugal
Singapore
South Korea
Spain
Sweden
Switzerland
United Arab Emirates
United Kingdom
United States
```

#### Rendering a flag image

When the country object is passed to the [`image_url`](https://shopify.dev/docs/api/liquid/filters#image_url) filter, a [CDN URL](https://shopify.dev/themes/best-practices/performance/platform#shopify-cdn) for that country’s flag is returned. All country’s flags are SVGs, normalized to an aspect ratio of 4:3.

###### Code

```liquid
{{ localization.country | image_url: width: 32 | image_tag }}
```

###### Data

```json
{
  "localization": {
    "country": "Canada"
  }
}
```

###### Output

```html
<img src="//cdn.shopify.com/static/images/flags/ca.svg?width=32" alt="Canada" srcset="//cdn.shopify.com/static/images/flags/ca.svg?width=32 32w" width="32" height="24">
```

---



<a id="objects-country-option-tags"></a>


## country\_​option\_​tags

Creates an `<option>` tag for each country and region that's included in a shipping zone on the [Shipping](https://www.shopify.com/admin/settings/shipping) page of the Shopify admin.

An attribute called `data-provinces` is set for each `<option>`, and contains a JSON-encoded array of the country or region's subregions. If a country doesn't have any subregions, then an empty array is set for its `data-provinces` attribute.

***

**Tip:** To return all countries and regions included in the store\&#39;s shipping zones, use \<a href="/docs/api/liquid/objects/all\_country\_option\_tags">\<code>\<span class="PreventFireFoxApplyingGapToWBR">all\<wbr/>\_country\<wbr/>\_option\<wbr/>\_tags\</span>\</code>\</a>.

***

#### Directly accessible in

* Global

You can wrap the `country_option_tags` object in `<select>` tags to build a country option selector.

###### Code

```liquid
<select name="country">
  {{ country_option_tags }}
</select>
```

###### Output

```html
<select name="country">
  <option value="---" data-provinces="[]">---</option>
<option value="Afghanistan" data-provinces="[]">Afghanistan</option>
<option value="Canada" data-provinces="[[&quot;Alberta&quot;,&quot;Alberta&quot;],[&quot;British Columbia&quot;,&quot;British Columbia&quot;],[&quot;Manitoba&quot;,&quot;Manitoba&quot;],[&quot;New Brunswick&quot;,&quot;New Brunswick&quot;],[&quot;Newfoundland and Labrador&quot;,&quot;Newfoundland and Labrador&quot;],[&quot;Northwest Territories&quot;,&quot;Northwest Territories&quot;],[&quot;Nova Scotia&quot;,&quot;Nova Scotia&quot;],[&quot;Nunavut&quot;,&quot;Nunavut&quot;],[&quot;Ontario&quot;,&quot;Ontario&quot;],[&quot;Prince Edward Island&quot;,&quot;Prince Edward Island&quot;],[&quot;Quebec&quot;,&quot;Quebec&quot;],[&quot;Saskatchewan&quot;,&quot;Saskatchewan&quot;],[&quot;Yukon&quot;,&quot;Yukon&quot;]]">Canada</option>
<option value="United States" data-provinces="[[&quot;Alabama&quot;,&quot;Alabama&quot;],[&quot;Alaska&quot;,&quot;Alaska&quot;],[&quot;American Samoa&quot;,&quot;American Samoa&quot;],[&quot;Arizona&quot;,&quot;Arizona&quot;],[&quot;Arkansas&quot;,&quot;Arkansas&quot;],[&quot;Armed Forces Americas&quot;,&quot;Armed Forces Americas&quot;],[&quot;Armed Forces Europe&quot;,&quot;Armed Forces Europe&quot;],[&quot;Armed Forces Pacific&quot;,&quot;Armed Forces Pacific&quot;],[&quot;California&quot;,&quot;California&quot;],[&quot;Colorado&quot;,&quot;Colorado&quot;],[&quot;Connecticut&quot;,&quot;Connecticut&quot;],[&quot;Delaware&quot;,&quot;Delaware&quot;],[&quot;District of Columbia&quot;,&quot;Washington DC&quot;],[&quot;Federated States of Micronesia&quot;,&quot;Micronesia&quot;],[&quot;Florida&quot;,&quot;Florida&quot;],[&quot;Georgia&quot;,&quot;Georgia&quot;],[&quot;Guam&quot;,&quot;Guam&quot;],[&quot;Hawaii&quot;,&quot;Hawaii&quot;],[&quot;Idaho&quot;,&quot;Idaho&quot;],[&quot;Illinois&quot;,&quot;Illinois&quot;],[&quot;Indiana&quot;,&quot;Indiana&quot;],[&quot;Iowa&quot;,&quot;Iowa&quot;],[&quot;Kansas&quot;,&quot;Kansas&quot;],[&quot;Kentucky&quot;,&quot;Kentucky&quot;],[&quot;Louisiana&quot;,&quot;Louisiana&quot;],[&quot;Maine&quot;,&quot;Maine&quot;],[&quot;Marshall Islands&quot;,&quot;Marshall Islands&quot;],[&quot;Maryland&quot;,&quot;Maryland&quot;],[&quot;Massachusetts&quot;,&quot;Massachusetts&quot;],[&quot;Michigan&quot;,&quot;Michigan&quot;],[&quot;Minnesota&quot;,&quot;Minnesota&quot;],[&quot;Mississippi&quot;,&quot;Mississippi&quot;],[&quot;Missouri&quot;,&quot;Missouri&quot;],[&quot;Montana&quot;,&quot;Montana&quot;],[&quot;Nebraska&quot;,&quot;Nebraska&quot;],[&quot;Nevada&quot;,&quot;Nevada&quot;],[&quot;New Hampshire&quot;,&quot;New Hampshire&quot;],[&quot;New Jersey&quot;,&quot;New Jersey&quot;],[&quot;New Mexico&quot;,&quot;New Mexico&quot;],[&quot;New York&quot;,&quot;New York&quot;],[&quot;North Carolina&quot;,&quot;North Carolina&quot;],[&quot;North Dakota&quot;,&quot;North Dakota&quot;],[&quot;Northern Mariana Islands&quot;,&quot;Northern Mariana Islands&quot;],[&quot;Ohio&quot;,&quot;Ohio&quot;],[&quot;Oklahoma&quot;,&quot;Oklahoma&quot;],[&quot;Oregon&quot;,&quot;Oregon&quot;],[&quot;Palau&quot;,&quot;Palau&quot;],[&quot;Pennsylvania&quot;,&quot;Pennsylvania&quot;],[&quot;Puerto Rico&quot;,&quot;Puerto Rico&quot;],[&quot;Rhode Island&quot;,&quot;Rhode Island&quot;],[&quot;South Carolina&quot;,&quot;South Carolina&quot;],[&quot;South Dakota&quot;,&quot;South Dakota&quot;],[&quot;Tennessee&quot;,&quot;Tennessee&quot;],[&quot;Texas&quot;,&quot;Texas&quot;],[&quot;Utah&quot;,&quot;Utah&quot;],[&quot;Vermont&quot;,&quot;Vermont&quot;],[&quot;Virgin Islands&quot;,&quot;U.S. Virgin Islands&quot;],[&quot;Virginia&quot;,&quot;Virginia&quot;],[&quot;Washington&quot;,&quot;Washington&quot;],[&quot;West Virginia&quot;,&quot;West Virginia&quot;],[&quot;Wisconsin&quot;,&quot;Wisconsin&quot;],[&quot;Wyoming&quot;,&quot;Wyoming&quot;]]">United States</option>
</select>
```

---



<a id="objects-currency"></a>


## currency

Information about a currency, like the ISO code and symbol.

### Properties

* * **iso\_​code**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The [ISO code](https://www.iso.org/iso-4217-currency-codes.html) of the currency.

  * **name**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The name of the currency.

  * **symbol**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The symbol of the currency.

###### Example

```json
{
  "iso_code": "CAD",
  "name": "Canadian Dollar",
  "symbol": "$"
}
```

---



<a id="objects-current-page"></a>


## current\_​page

The current page number.

The `current_page` object has a value of 1 for non-paginated resources.

#### Directly accessible in

* Global

###### Code

```liquid
{{ page_title }}{% unless current_page == 1 %} - Page {{ current_page }}{% endunless %}
```

###### Output

```html
Ingredients - Page 2
```

---



<a id="objects-current-tags"></a>


## current\_​tags

The currently applied tags.

You can [add tags](https://help.shopify.com/en/manual/shopify-admin/productivity-tools/using-tags) to articles and products. Article tags can be used to [filter a blog page](https://shopify.dev/themes/architecture/templates/blog#filter-articles-by-tag) to show only articles with specific tags. Similarly, product tags can be used to [filter a collection page](https://shopify.dev/themes/navigation-search/filtering/tag-filtering) to show only products with specific tags.

#### Directly accessible in

* [blog](https://shopify.dev/themes/architecture/templates/blog)
* [collection](https://shopify.dev/themes/architecture/templates/collection)

### Templates using current\_tags

[Theme architecture](https://shopify.dev/themes/architecture/templates/blog)

[blog template](https://shopify.dev/themes/architecture/templates/blog)

[Theme architecture](https://shopify.dev/themes/architecture/templates/collection)

[collection template](https://shopify.dev/themes/architecture/templates/collection)

---



<a id="objects-customer"></a>


## customer

A [customer](https://help.shopify.com/manual/customers) of the store.

The `customer` object is directly accessible globally when a customer is logged in to their account. It's also defined in the following contexts:

* The [`customers/account` template](https://shopify.dev/themes/architecture/templates/customers-account)
* The [`customers/addresses` template](https://shopify.dev/themes/architecture/templates/customers-addresses)
* The [`customers/order` template](https://shopify.dev/themes/architecture/templates/customers-order)
* When accessing [`checkout.customer`](https://shopify.dev/docs/api/liquid/objects/checkout#checkout-customer)
* When accessing [`gift_card.customer`](https://shopify.dev/docs/api/liquid/objects/gift_card#gift_card-customer)
* When accessing [`order.customer`](https://shopify.dev/docs/api/liquid/objects/order#order-customer)

Outside of the above contexts, if the customer isn't logged into their account, the `customer` object returns `nil`.

### Properties

* * **accepts\_​marketing**

    [boolean](https://shopify.dev/docs/api/liquid/basics#boolean)

  * Returns `true` if the customer accepts marketing. Returns `false` if not.

  * **addresses**

    array of [address](https://shopify.dev/docs/api/liquid/objects/address)

  * All of the addresses associated with the customer.

    **Tip:** Use the \<a href="/docs/api/liquid/tags/paginate">paginate\</a> tag to choose how many addresses to show at once, up to a limit of 20.

  * **addresses\_​count**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The number of addresses associated with the customer.

  * **b2b?**

    [boolean](https://shopify.dev/docs/api/liquid/basics#boolean)

  * Returns `true` if the customer is a B2B customer. Returns `false` if not.

    To learn about B2B in themes, refer to [Support B2B customers in your theme](https://shopify.dev/themes/pricing-payments/b2b).

  * **company\_​available\_​locations**

    array of [company\_location](https://shopify.dev/docs/api/liquid/objects/company_location)

  * The company locations that the customer has access to, or can interact with.

    To learn about B2B in themes, refer to [Support B2B customers in your theme](https://shopify.dev/themes/pricing-payments/b2b).

    **Tip:** Use the \<a href="/docs/api/liquid/tags/paginate">paginate\</a> tag to choose how many company locations to show at once, up to a limit of 100.

  * **company\_​available\_​locations\_​count**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The number of company locations associated with the customer.

  * **current\_​company**

    [company](https://shopify.dev/docs/api/liquid/objects/company)

  * The company that the customer is purchasing for.

    To learn about B2B in themes, refer to [Support B2B customers in your theme](https://shopify.dev/themes/pricing-payments/b2b).

  * **current\_​location**

    [company\_location](https://shopify.dev/docs/api/liquid/objects/company_location)

  * The currently selected company location.

    To learn about B2B in themes, refer to [Support B2B customers in your theme](https://shopify.dev/themes/pricing-payments/b2b).

  * **default\_​address**

    [address](https://shopify.dev/docs/api/liquid/objects/address)

  * The default address of the customer.

  * **email**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The email of the customer.

  * **first\_​name**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The first name of the customer.

  * **has\_​account**

    [boolean](https://shopify.dev/docs/api/liquid/basics#boolean)

  * Returns `true` if the email associated with the customer is tied to a [customer account](https://help.shopify.com/manual/customers/customer-accounts). Returns `false` if not.

    A customer can complete a checkout without making an account with the store. If the customer doesn't have an account with the store, then `customer.has_account` is `false` at checkout.

    During the checkout process, if the customer has an account with the store and enters an email associated with an account, then `customer.has_account` is `true`. The email is associated with the account regardless of whether the customer has logged into their account.

  * **has\_​avatar?**

    [boolean](https://shopify.dev/docs/api/liquid/basics#boolean)

  * Returns `true` if an avatar is associated with a customer. Returns `false` if not.

    A customer may have an avatar associated with their account, which can be displayed in the storefront.

    **Tip:** Use with the \<a href="/docs/api/liquid/filters/avatar">\<code>avatar\</code>\</a> filter to render the customer\&#39;s avatar.

  * **id**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The ID of the customer.

  * **last\_​name**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The last name of the customer.

  * **last\_​order**

    [order](https://shopify.dev/docs/api/liquid/objects/order)

  * The last order placed by the customer, not including test orders.

  * **name**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The full name of the customer.

  * **orders**

    array of [order](https://shopify.dev/docs/api/liquid/objects/order)

  * All of the orders placed by the customer.

    **Tip:** Use the \<a href="/docs/api/liquid/tags/paginate">paginate\</a> tag to choose how many orders to show at once, up to a limit of 20.

  * **orders\_​count**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The total number of orders that the customer has placed.

  * **payment\_​methods**

    array of [customer\_payment\_method](https://shopify.dev/docs/api/liquid/objects/customer_payment_method)

  * The customer's saved payment methods.

  * **phone**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The phone number of the customer.

    This phone number is only populated if the customer checks out using a phone number during checkout, opts in to SMS notifications, or if the merchant has manually entered it.

  * **store\_​credit\_​account**

    [store\_credit\_account](https://shopify.dev/docs/api/liquid/objects/store_credit_account)

  * The store credit account associated with the customer.

    The account shown will be in the currency associated with the customer’s current context. For example, if a customer is browsing the storefront in the US market, their USD store credit account will be returned. If they do not have a USD store credit account `nil` will be returned.

  * **tags**

    array of [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The tags associated with the customer.

  * **tax\_​exempt**

    [boolean](https://shopify.dev/docs/api/liquid/basics#boolean)

  * Returns `true` if the customer is exempt from taxes. Returns `false` if not.

  * **total\_​spent**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The total amount that the customer has spent on all orders in the currency's subunit.

    The value is output in the customer's local (presentment) currency.

    For currencies without subunits, such as JPY and KRW, tenths and hundredths of a unit are appended. For example, 1000 Japanese yen is output as 100000.

    **Tip:** Use \<a href="/docs/api/liquid/filters/money-filters">money filters\</a> to output a formatted amount.

###### Example

```json
{
  "accepts_marketing": true,
  "addresses": [],
  "addresses_count": 5,
  "b2b?": false,
  "company_available_locations": [],
  "company_available_locations_count": 1,
  "current_company": {},
  "current_location": null,
  "default_address": {},
  "email": "cornelius.potionmaker@gmail.com",
  "first_name": "Cornelius",
  "has_account": true,
  "has_avatar?": false,
  "id": 5625411010625,
  "last_name": "Potionmaker",
  "last_order": {},
  "name": "Cornelius Potionmaker",
  "orders": [],
  "orders_count": 1,
  "payment_methods": [],
  "phone": "+441314960905",
  "store_credit_account": {},
  "tags": [
    "newsletter"
  ],
  "tax_exempt": false,
  "total_spent": "56.00"
}
```

#### Check whether the `customer` object is defined

When using the `customer` object outside of customer-specific templates or objects that specifically return a customer, you should check whether the `customer` object is defined.

###### Code

```liquid
{% if customer %}
  Hello, {{ customer.first_name }}!
{% endif %}
```

###### Data

```json
{
  "customer": {
    "first_name": "Cornelius"
  }
}
```

###### Output

```html
Hello, Cornelius!
```

### Templates using customer

[Theme architecture](https://shopify.dev/themes/architecture/templates/customers-account)

[customers/account template](https://shopify.dev/themes/architecture/templates/customers-account)

[Theme architecture](https://shopify.dev/themes/architecture/templates/customers-addresses)

[customers/addresses template](https://shopify.dev/themes/architecture/templates/customers-addresses)

[Theme architecture](https://shopify.dev/themes/architecture/templates/customers-order)

[customers/order template](https://shopify.dev/themes/architecture/templates/customers-order)

---



<a id="objects-customer-payment-method"></a>


## customer\_​payment\_​method

A customer's saved payment method.

A payment method that a customer has saved to their account for reuse (e.g. a credit card).

### Properties

* * **payment\_​instrument\_​type**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The instrument type of the payment method (e.g credit\_card).

  * **token**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The identifier for the payment method.

#### Returned by

* [customer.payment\_​methods](https://shopify.dev/docs/api/liquid/objects/customer#customer-payment_methods)

---



<a id="objects-discount"></a>


## discount

A discount applied to a cart, line item, or order.

**deprecated:**

Deprecated because not all discount types and details are captured.

The `discount` object has been replaced by the [`discount_allocation`](https://shopify.dev/docs/api/liquid/objects/discount_allocation) and [`discount_application`](https://shopify.dev/docs/api/liquid/objects/discount_application) objects.

### Properties

* * **amount**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The amount of the discount in the currency's subunit.

    **Note:** This is the same value as \<a href="/docs/api/liquid/objects/discount#discount-total\_amount">\<code>\<span class="PreventFireFoxApplyingGapToWBR">discount.total\<wbr/>\_amount\</span>\</code>\</a>.

    The value is output in the customer's local (presentment) currency.

    For currencies without subunits, such as JPY and KRW, tenths and hundredths of a unit are appended. For example, 1000 Japanese yen is output as 100000.

    **Tip:** Use \<a href="/docs/api/liquid/filters/money-filters">money filters\</a> to output a formatted amount.

  * **code**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The customer-facing name of the discount.

    **Note:** This is the same value as \<a href="/docs/api/liquid/objects/discount#discount-title">\<code>discount.title\</code>\</a>.

  * **savings**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The amount of the discount as a negative value, in the currency's subunit.

    **Note:** This is the same value as \<a href="/docs/api/liquid/objects/discount#discount-total\_savings">\<code>\<span class="PreventFireFoxApplyingGapToWBR">discount.total\<wbr/>\_savings\</span>\</code>\</a>. The value is output in the customer\&#39;s local (presentment) currency.

    For currencies without subunits, such as JPY and KRW, tenths and hundredths of a unit are appended. For example, 1000 Japanese yen is output as 100000.

    **Tip:** Use \<a href="/docs/api/liquid/filters/money-filters">money filters\</a> to output a formatted amount.

  * **title**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The customer-facing name of the discount.

    **Note:** This is the same value as \<a href="/docs/api/liquid/objects/discount#discount-code">\<code>discount.code\</code>\</a>.

  * **total\_​amount**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The amount of the discount in the currency's subunit.

    **Note:** This is the same value as \<a href="/docs/api/liquid/objects/discount#discount-amount">\<code>discount.amount\</code>\</a>.

    The value is output in the customer's local (presentment) currency.

    For currencies without subunits, such as JPY and KRW, tenths and hundredths of a unit are appended. For example, 1000 Japanese yen is output as 100000.

    **Tip:** Use \<a href="/docs/api/liquid/filters/money-filters">money filters\</a> to output a formatted amount.

  * **total\_​savings**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The amount of the discount as a negative value, in the currency's subunit.

    **Note:** This is the same value as \<a href="/docs/api/liquid/objects/discount#discount-savings">\<code>discount.savings\</code>\</a>. The value is output in the customer\&#39;s local (presentment) currency.

    For currencies without subunits, such as JPY and KRW, tenths and hundredths of a unit are appended. For example, 1000 Japanese yen is output as 100000.

    **Tip:** Use \<a href="/docs/api/liquid/filters/money-filters">money filters\</a> to output a formatted amount.

  * **type**

    [string](https://shopify.dev/docs/api/liquid/basics#string) from a set of values

  * The type of the discount.

    | Possible values |
    | - |
    | FixedAmountDiscount |
    | PercentageDiscount |
    | ShippingDiscount |

###### Example

```json
{
  "amount": "40.00",
  "code": "DIY",
  "savings": "-40.00",
  "title": "DIY",
  "total_amount": "40.00",
  "total_savings": "-40.00",
  "type": "PercentageDiscount"
}
```

---



<a id="objects-discount-allocation"></a>


## discount\_​allocation

Information about how a discount affects an item.

To learn about how to display discounts in your theme, refer to [Discounts](https://shopify.dev/themes/pricing-payments/discounts).

### Properties

* * **amount**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The amount that the item is discounted by in the currency's subunit.

    The value is output in the customer's local (presentment) currency.

    For currencies without subunits, such as JPY and KRW, tenths and hundredths of a unit are appended. For example, 1000 Japanese yen is output as 100000.

    **Tip:** Use \<a href="/docs/api/liquid/filters/money-filters">money filters\</a> to output a formatted amount.

  * **discount\_​application**

    [discount\_application](https://shopify.dev/docs/api/liquid/objects/discount_application)

  * The discount application that applies the discount to the item.

###### Example

```json
{
  "amount": "40.00",
  "discount_application": "DiscountApplicationDrop"
}
```

---



<a id="objects-discount-application"></a>


## discount\_​application

Information about the intent of a discount.

To learn about how to display discounts in your theme, refer to [Discounts](https://shopify.dev/themes/pricing-payments/discounts).

### Properties

* * **target\_​selection**

    [string](https://shopify.dev/docs/api/liquid/basics#string) from a set of values

  * The selection method for line items or shipping lines to be discounted.

    **Note:** Whether the selection method applies to line items or shipping lines depends on the discount\&#39;s \<a href="/docs/api/liquid/objects/discount\_application#discount\_application-target\_type">target type\</a>.

    | Possible values | Description |
    | - | - |
    | all | The discount applies to all line items or shipping lines. |
    | entitled | The discount applies to a specific set of line items or shipping lines based on some criteria. |
    | explicit | The discount applies to a specific line item or shipping line. |

  * **target\_​type**

    [string](https://shopify.dev/docs/api/liquid/basics#string) from a set of values

  * The type of item that the discount applies to.

    | Possible values |
    | - |
    | line\_item |
    | shipping\_line |

  * **title**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The customer-facing name of the discount.

  * **total\_​allocated\_​amount**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The total amount of the discount in the currency's subunit.

    The value is output in the customer's local (presentment) currency.

    For currencies without subunits, such as JPY and KRW, tenths and hundredths of a unit are appended. For example, 1000 Japanese yen is output as 100000.

    **Tip:** Use \<a href="/docs/api/liquid/filters/money-filters">money filters\</a> to output a formatted amount.

  * **type**

    [string](https://shopify.dev/docs/api/liquid/basics#string) from a set of values

  * The type of the discount.

    | Possible values |
    | - |
    | automatic |
    | discount\_code |
    | manual |
    | script |

  * **value**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The value of the discount.

    How this value is interpreted depends on the [value type](https://shopify.dev/docs/api/liquid/objects/discount_application#discount_application-value_type) of the discount. The following table outlines what the value represents for each value type:

    | Value type | Value |
    | - | - |
    | `fixed_amount` | The amount of the discount in the currency's subunit. |
    | `percentage` | The percent amount of the discount. |

    For currencies without subunits, such as JPY and KRW, tenths and hundredths of a unit are appended. For example, 1000 Japanese yen is output as 100000.

    **Tip:** Use \<a href="/docs/api/liquid/filters/money-filters">money filters\</a> to output a formatted price.

  * **value\_​type**

    [string](https://shopify.dev/docs/api/liquid/basics#string) from a set of values

  * The value type of the discount.

    | Possible values |
    | - |
    | fixed\_amount |
    | percentage |

###### Example

```json
{
  "target_selection": "explicit",
  "target_type": "line_item",
  "title": "Bloodroot discount!",
  "total_allocated_amount": "2.50",
  "type": "script",
  "value": "2.5",
  "value_type": "fixed_amount"
}
```

---



<a id="objects-external-video"></a>


## external\_​video

Information about an external video from YouTube or Vimeo.

***

**Tip:** Use the \<a href="/docs/api/liquid/filters/external\_video\_tag">\<code>\<span class="PreventFireFoxApplyingGapToWBR">external\<wbr/>\_video\<wbr/>\_tag\</span>\</code> filter\</a> to output the video in an HTML \<code>\&lt;iframe\&gt;\</code> tag. Use the \<a href="/docs/api/liquid/filters/external\_video\_url">\<code>\<span class="PreventFireFoxApplyingGapToWBR">external\<wbr/>\_video\<wbr/>\_url\</span>\</code> filter\</a> to specify parameters for the external video player.

***

### Properties

* * **alt**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The alt text of the external video.

  * **aspect\_​ratio**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The aspect ratio of the video as a decimal.

  * **external\_​id**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The ID of the video from its external source.

  * **host**

    [string](https://shopify.dev/docs/api/liquid/basics#string) from a set of values

  * The service that hosts the video.

    | Possible values |
    | - |
    | youtube |
    | vimeo |

  * **id**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The ID of the external video.

  * **media\_​type**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The media type of the external video. Always returns `external_video`.

    ExampleFilter for media of a specific type

    You can use the `media_type` property with the [`where` filter](https://shopify.dev/docs/api/liquid/filters/where) to filter the [`product.media` array](https://shopify.dev/docs/api/liquid/objects/product#product-media) for all media of a desired type.

    ##### Code

    ```liquid
    {% assign external_videos = product.media | where: 'media_type', 'external_video' %}

    {% for external_video in external_videos %}
      {{- external_video | external_video_tag }}
    {% endfor %}
    ```

    ##### Data

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

    ##### Output

    ```html
    <iframe frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen" src="https://www.youtube.com/embed/vj01PAffOac?controls=1&amp;enablejsapi=1&amp;modestbranding=1&amp;origin=https%3A%2F%2Fpolinas-potent-potions.myshopify.com&amp;playsinline=1&amp;rel=0" title="Potion beats"></iframe>
    ```

  * **position**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The position of the external video in the [`product.media`](https://shopify.dev/docs/api/liquid/objects/product#product-media) array.

  * **preview\_​image**

    [image](https://shopify.dev/docs/api/liquid/objects/image)

  * A preview image of the media.

    **Note:** Preview images don\&#39;t have an ID attribute.

###### Example

```json
{
  "alt": "Potion beats",
  "aspect_ratio": "1.77",
  "external_id": "vj01PAffOac",
  "host": "youtube",
  "id": 22015756402753,
  "media_type": "external_video",
  "position": 1,
  "preview_image": {}
}
```

---



<a id="objects-filter"></a>


## filter

A [storefront filter](https://help.shopify.com/manual/online-store/themes/customizing-themes/storefront-filters).

To learn about supporting filters in your theme, refer to [Support storefront filtering](https://shopify.dev/themes/navigation-search/filtering/storefront-filtering/support-storefront-filtering).

### Properties

* * **active\_​values**

    array of [filter\_value](https://shopify.dev/docs/api/liquid/objects/filter_value)

  * The values of the filter that are currently active.

    The array can have values only for `boolean` and `list` type filters.

  * **false\_​value**

    [filter\_value](https://shopify.dev/docs/api/liquid/objects/filter_value)

  * The `false` filter value.

    Returns a value for `boolean` type filters if the unfiltered view has at least one result with the `false` filter value. Otherwise, it returns `nil`.

  * **inactive\_​values**

    array of [filter\_value](https://shopify.dev/docs/api/liquid/objects/filter_value)

  * The values of the filter that are currently inactive.

    The array can have values only for `boolean` and `list` type filters.

  * **label**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The customer-facing label for the filter.

  * **max\_​value**

    [filter\_value](https://shopify.dev/docs/api/liquid/objects/filter_value)

  * The highest filter value.

    Returns a value only for `price_range` type filters. Returns `nil` for other types.

  * **min\_​value**

    [filter\_value](https://shopify.dev/docs/api/liquid/objects/filter_value)

  * The lowest filter value.

    Returns a value only for `price_range` type filters. Returns `nil` for other types.

  * **operator**

    [string](https://shopify.dev/docs/api/liquid/basics#string) from a set of values

  * The logical operator used by the filter. Returns a value only for `boolean` and `list` type filters. Returns `nil` for other types.

    Example: For a filter named `color` with values `red` and `blue`:

    * If the operator is `AND`, it will filter items that are both red and blue.
    * If the operator is `OR`, it will filter items that are either red or blue or both.

    Filters that support the `AND` operator:

    * Product tags
    * Metafields of type `list.single_line_text_field` and `list.metaobject_reference`

    | Possible values | Description |
    | - | - |
    | AND | Includes products that match all buyer selections. |
    | OR | Includes products that match at least one buyer selection. |

  * **param\_​name**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The URL parameter for the filter. For example, `filter.v.option.color`.

  * **presentation**

    [string](https://shopify.dev/docs/api/liquid/basics#string) from a set of values

  * Describes how to present the filter values.

    Returns a value only for `list` type filters. Returns `nil` for other types.

    | Possible values |
    | - |
    | image |
    | swatch |
    | text |

  * **range\_​max**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The highest product price within the collection or search results.

    Returns a value only for `price_range` type filters. Returns `nil` for other types.

  * **true\_​value**

    [filter\_value](https://shopify.dev/docs/api/liquid/objects/filter_value)

  * The `true` filter value.

    Returns a value for `boolean` type filters if the unfiltered view has at least one result with the `true` filter value. Otherwise, it returns `nil`.

  * **type**

    [string](https://shopify.dev/docs/api/liquid/basics#string) from a set of values

  * The type of the filter.

    | Possible values |
    | - |
    | boolean |
    | list |
    | price\_range |

  * **url\_​to\_​remove**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The current page URL with the URL parameter related to the filter removed.

  * **values**

    array of [filter\_value](https://shopify.dev/docs/api/liquid/objects/filter_value)

  * The values of the filter.

    The array can have values only for `boolean` and `list` type filters.

#### Returned by

* [collection.filters](https://shopify.dev/docs/api/liquid/objects/collection#collection-filters)
* [search.filters](https://shopify.dev/docs/api/liquid/objects/search#search-filters)

---



<a id="objects-filter-value"></a>


## filter\_​value

A specific value of a filter.

To learn about supporting filters in your theme, refer to [Support storefront filtering](https://shopify.dev/themes/navigation-search/filtering/storefront-filtering/support-storefront-filtering).

### Properties

* * **active**

    [boolean](https://shopify.dev/docs/api/liquid/basics#boolean)

  * Returns `true` if the value is currently active. Returns `false` if not.

    Can only return `true` for filters of type `boolean` or `list`.

  * **count**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The number of results related to the filter value.

    Returns a value only for `boolean` and `list` type filters. Returns `nil` for `price_range` type filters.

  * **image**

    [image](https://shopify.dev/docs/api/liquid/objects/image)

  * The visual representation of the filter value when an image is used.

    Returns an [image](https://shopify.dev/docs/api/liquid/objects/image) drop for the filter value. Requires the [filter presentation](https://shopify.dev/docs/api/liquid/objects/filter#filter-presentation) to be `image` and for an image to be available. Otherwise, returns `nil`.

  * **label**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The customer-facing label for the filter value. For example, `Red` or `Rouge`.

    Returns a value only for `boolean` and `list` type filters. Returns `nil` for `price_range` type filters.

  * **param\_​name**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The URL parameter for the parent filter of the filter value.

    For example, `filter.v.option.color`.

    Filters of type `price_range` include an extra component depending on whether the filter value is for the filter's `min_value` or `max_value`. The following table outlines the URL parameter for each:

    | Value type | URL parameter |
    | - | - |
    | `min_value` | `filter.v.price.gte` |
    | `max_value` | `filter.v.price.lte` |

  * **swatch**

    [swatch](https://shopify.dev/docs/api/liquid/objects/swatch)

  * The visual representation of the filter value when a swatch is used.

    Returns a [swatch](https://shopify.dev/docs/api/liquid/objects/swatch) drop for the filter value. Requires the [filter presentation](https://shopify.dev/docs/api/liquid/objects/filter#filter-presentation) to be `swatch` and saved color or image content for the swatch. Otherwise, returns `nil`.

  * **url\_​to\_​add**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The current page URL with the filter value parameter added.

    **Note:** Any \<a href="/docs/api/liquid/tags/paginate">pagination\</a> URL parameters are removed.

  * **url\_​to\_​remove**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The current page URL with the filter value parameter removed.

    **Note:** Any \<a href="/docs/api/liquid/tags/paginate">pagination\</a> URL parameters are also removed.

  * **value**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The value for the URL parameter. The `value` is paired with the [`param_name`](#filter_value-param_name) property.

    For example, `High` will be used in the URL as `filter.v.option.strength=High`.

### Deprecated Properties

* * **display**

    [filter\_value\_display](https://shopify.dev/docs/api/liquid/objects/filter_value_display)

    Deprecated

  * The visual representation of the filter value.

    Returns a visual representation for the filter value. If no visual representation is available, then `nil` is returned.

    **Deprecated:**

    Deprecated in favor of the [swatch](#swatch) attribute.

#### Returned by

* [filter](https://shopify.dev/docs/api/liquid/objects/filter)
* [filter.false\_​value](https://shopify.dev/docs/api/liquid/objects/filter#filter-false_value)
* [filter.true\_​value](https://shopify.dev/docs/api/liquid/objects/filter#filter-true_value)
* [filter.max\_​value](https://shopify.dev/docs/api/liquid/objects/filter#filter-max_value)
* [filter.min\_​value](https://shopify.dev/docs/api/liquid/objects/filter#filter-min_value)

---



<a id="objects-filter-value-display"></a>


## filter\_​value\_​display

The visual representation of a filter value.

**deprecated:**

Deprecated in favor of the [swatch](https://shopify.dev/docs/api/liquid/objects/swatch) drop.

### Properties

* * **type**

    [string](https://shopify.dev/docs/api/liquid/basics#string) from a set of values

  * The type of visual representation.

    | Possible values |
    | - |
    | colors |
    | image |

  * **value**

  * The visual representation.

    Can be a list of [`colors`](https://shopify.dev/docs/api/liquid/objects/color) or an [`image`](https://shopify.dev/docs/api/liquid/objects/image). Refer to the [`type`](#filter_value_display-type) property to determine the type of visual representation.

#### Returned by

* [filter\_​value.display](https://shopify.dev/docs/api/liquid/objects/filter_value#filter_value-display)

---



<a id="objects-focal-point"></a>


## focal\_​point

The focal point for an image.

The focal point will remain visible when the image is cropped by the theme. [Learn more about supporting focal points in your theme](https://shopify.dev/themes/architecture/settings/input-settings#image-focal-points).

***

**Tip:** Use the \<a href="/docs/api/liquid/filters/image\_tag">\<code>\<span class="PreventFireFoxApplyingGapToWBR">image\<wbr/>\_tag\</span>\</code>\</a> filter to automatically apply focal point settings to an image on the storefront. This applies the focal point using the \<code>object-position\</code> CSS property.

***

### Properties

* * **x**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The horizontal position of the focal point, as a percent of the image width. Returns `50` if no focal point is set.

  * **y**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The vertical position of the focal point, as a percent of the image height. Returns `50` if no focal point is set.

#### Returned by

* [image\_​presentation.focal\_​point](https://shopify.dev/docs/api/liquid/objects/image_presentation#image_presentation-focal_point)

#### Referencing the `focal_point` object directly

When a `focal_point` object is referenced directly, the coordinates are returned as a string, in the format `X% Y%`.

###### Code

```liquid
{{ images['potions-header.png'].presentation.focal_point }}
```

###### Output

```html
1.9231% 9.7917%
```

---



<a id="objects-font"></a>


## font

A font from a [`font_picker` setting](https://shopify.dev/themes/architecture/settings/input-settings#font_picker).

You can use the `font` object in Liquid [assets](https://shopify.dev/themes/architecture#assets) or inside a [`style` tag](https://shopify.dev/docs/api/liquid/tags/style) to apply font setting values to theme CSS.

***

**Tip:** Use \<a href="/docs/api/liquid/filters/font-filters">font filters\</a> to modify properties of the \<code>font\</code> object, load the font, or obtain font variants.

***

### Properties

* * **baseline\_​ratio**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The baseline ratio of the font as a decimal.

  * **fallback\_​families**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The fallback families of the font.

  * **family**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The family name of the font.

    **Tip:** If the family name contains non-alphanumeric characters (A-Z, a-z, 0-9, or \&#39;-\&#39;), then it will be wrapped in double quotes.

  * **style**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The style of the font.

  * **system?**

    [boolean](https://shopify.dev/docs/api/liquid/basics#boolean)

  * Returns `true` if the font is a system font. Returns `false` if not.

    **Tip:** You can use this property to determine whether you need to include a corresponding \<a href="/docs/api/liquid/filters/font\_face">font-face\</a> declaration for the font.

  * **variants**

    array of [font](https://shopify.dev/docs/api/liquid/objects/font)

  * The variants in the family of the font.

  * **weight**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The weight of the font.

###### Example

```json
{
  "baseline_ratio": 0.133,
  "fallback_families": "sans-serif",
  "family": "Assistant",
  "style": "normal",
  "system?": false,
  "variants": {},
  "weight": "400"
}
```

---



<a id="objects-forloop"></a>


## forloop

Information about a parent [`for` loop](https://shopify.dev/docs/api/liquid/tags/for).

### Properties

* * **first**

    [boolean](https://shopify.dev/docs/api/liquid/basics#boolean)

  * Returns `true` if the current iteration is the first. Returns `false` if not.

  * **index**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The 1-based index of the current iteration.

  * **index0**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The 0-based index of the current iteration.

  * **last**

    [boolean](https://shopify.dev/docs/api/liquid/basics#boolean)

  * Returns `true` if the current iteration is the last. Returns `false` if not.

  * **length**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The total number of iterations in the loop.

  * **parentloop**

    [forloop](https://shopify.dev/docs/api/liquid/objects/forloop)

  * The parent `forloop` object.

    If the current `for` loop isn't nested inside another `for` loop, then `nil` is returned.

    ExampleUse the `parentloop` property

    ##### Code

    ```liquid
    {% for i in (1..3) -%}
      {% for j in (1..3) -%}
        {{ forloop.parentloop.index }} - {{ forloop.index }}
      {%- endfor %}
    {%- endfor %}
    ```

    ##### Output

    ```html
    1 - 1
    1 - 2
    1 - 3

    2 - 1
    2 - 2
    2 - 3

    3 - 1
    3 - 2
    3 - 3
    ```

  * **rindex**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The 1-based index of the current iteration, in reverse order.

  * **rindex0**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The 0-based index of the current iteration, in reverse order.

###### Example

```json
{
  "first": true,
  "index": 1,
  "index0": 0,
  "last": false,
  "length": 4,
  "rindex": 3
}
```

#### Use the `forloop` object

###### Code

```liquid
{% for page in pages -%}
  {%- if forloop.length > 0 -%}
    {{ page.title }}{% unless forloop.last %}, {% endunless -%}
  {%- endif -%}
{% endfor %}
```

###### Output

```html
About us, Contact, Potion dosages
```

---



<a id="objects-form"></a>


## form

Information about a form created by a [`form` tag](https://shopify.dev/docs/api/liquid/tags/form).

### Properties

* * **address1**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The first address line associated with the address.

    This property is exclusive to the [`customer_address` form](https://shopify.dev/docs/api/liquid/tags/form#form-customer_address).

  * **address2**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The second address line associated with the address.

    This property is exclusive to the [`customer_address` form](https://shopify.dev/docs/api/liquid/tags/form#form-customer_address).

  * **author**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The name of the author of the article comment.

    This property is exclusive to the [`new_comment` form](https://shopify.dev/docs/api/liquid/tags/form#form-new_comment).

  * **body**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The content of the contact submission or article comment.

    This property is exclusive to the [`contact`](https://shopify.dev/docs/api/liquid/tags/form#form-contact) and [`new_comment`](https://shopify.dev/docs/api/liquid/tags/form#form-new_comment) forms.

  * **city**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The city associated with the address.

    This property is exclusive to the [`customer_address` form](https://shopify.dev/docs/api/liquid/tags/form#form-customer_address).

  * **company**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The company associated with the address.

    This property is exclusive to the [`customer_address` form](https://shopify.dev/docs/api/liquid/tags/form#form-customer_address).

  * **country**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The country associated with the address.

    This property is exclusive to the [`customer_address` form](https://shopify.dev/docs/api/liquid/tags/form#form-customer_address).

  * **email**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The email associated with the form.

    This property is exclusive to the following forms:

    * [`contact`](https://shopify.dev/docs/api/liquid/tags/form#form-contact)
    * [`create_customer`](https://shopify.dev/docs/api/liquid/tags/form#form-create_customer)
    * [`customer`](https://shopify.dev/docs/api/liquid/tags/form#form-customer)
    * [`customer_login`](https://shopify.dev/docs/api/liquid/tags/form#form-customer_login)
    * [`new_comment`](https://shopify.dev/docs/api/liquid/tags/form#form-new_comment)
    * [`recover_customer_password`](https://shopify.dev/docs/api/liquid/tags/form#form-recover_customer_password)
    * [`product`](https://shopify.dev/docs/api/liquid/tags/form#form-product)

  * **errors**

    [form\_errors](https://shopify.dev/docs/api/liquid/objects/form_errors)

  * Any errors from the form.

    If there are no errors, then `nil` is returned.

    **Tip:** You can apply the \<a href="/docs/api/liquid/filters/default\_errors">\<code>\<span class="PreventFireFoxApplyingGapToWBR">default\<wbr/>\_errors\</span>\</code> filter\</a> to \<code>form.errors\</code> to output default error messages without having to loop through the array.

  * **first\_​name**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The first name associated with the customer or address.

    This property is exclusive to the [`create_customer`](https://shopify.dev/docs/api/liquid/tags/form#form-create_customer) and [`customer_address`](https://shopify.dev/docs/api/liquid/tags/form#form-customer_address) forms.

  * **id**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The ID of the form.

  * **last\_​name**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The last name associated with the customer or address.

    This property is exclusive to the [`create_customer`](https://shopify.dev/docs/api/liquid/tags/form#form-create_customer) and [`customer_address`](https://shopify.dev/docs/api/liquid/tags/form#form-customer_address) forms.

  * **message**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The personalized message intended for the recipient.

    This property is exclusive to the [`product` form](https://shopify.dev/docs/api/liquid/tags/form#form-product).

  * **name**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The nickname of the gift card recipient.

    This property is exclusive to the [`product` form](https://shopify.dev/docs/api/liquid/tags/form#form-product).

  * **password\_​needed**

    [boolean](https://shopify.dev/docs/api/liquid/basics#boolean)

  * Returns `true`.

    This property is exclusive to the [`customer_login` form](https://shopify.dev/docs/api/liquid/tags/form#form-customer_login).

  * **phone**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The phone number associated with the address.

    This property is exclusive to the [`customer_address` form](https://shopify.dev/docs/api/liquid/tags/form#form-customer_address).

  * **posted\_​successfully?**

    [boolean](https://shopify.dev/docs/api/liquid/basics#boolean)

  * Returns `true` if the form was submitted successfully. Returns `false` if there were errors.

    **Note:** The \<a href="/docs/api/liquid/tags/form#form-customer\_address">\<code>\<span class="PreventFireFoxApplyingGapToWBR">customer\<wbr/>\_address\</span>\</code> form\</a> always returns \<code>true\</code>.

  * **province**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The province associated with the address.

    This property is exclusive to the [`customer_address` form](https://shopify.dev/docs/api/liquid/tags/form#form-customer_address).

  * **set\_​as\_​default\_​checkbox**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * Renders an HTML checkbox that can submit the address as the customer's default address.

    This property is exclusive to the [`customer_address` form](https://shopify.dev/docs/api/liquid/tags/form#form-customer_address).

  * **zip**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The zip or postal code associated with the address.

    This property is exclusive to the [`customer_address` form](https://shopify.dev/docs/api/liquid/tags/form#form-customer_address).

###### Example

```json
{
  "address1": "12 Phoenix Feather Alley",
  "address2": "1",
  "author": null,
  "body": null,
  "city": "Calgary",
  "company": null,
  "country": "Canada",
  "email": null,
  "errors": null,
  "first_name": "Cornelius",
  "id": "new",
  "last_name": "Potionmaker",
  "password_needed?": false,
  "phone": "44 131 496 0905",
  "posted_successfully?": true,
  "province": "Alberta",
  "set_as_default_checkbox": "<input type='checkbox' id='address_default_address_new' name='address[default]' value='1'>",
  "zip": "T1X 0L4"
}
```

---



<a id="objects-form-errors"></a>


## form\_​errors

The error category strings for errors from a form created by a [`form` tag](https://shopify.dev/docs/api/liquid/tags/form).

The following table outlines the strings that can be returned and the reason that they would be:

| Form property name | Return reason |
| - | - |
| `author` | There were issues with required name fields. |
| `body` | There were issues with required text content fields. |
| `email` | There were issues with required email fields. |
| `form` | There were general issues with the form. |
| `password` | There were issues with required password fields. |

### Properties

* * **messages**

    array of [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The translated error messages for each value in the `form_errors` array.

    You can access a specific message in the array by using a specific error from the `form_errors` array as a key.

  * **translated\_​fields**

    array of [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The translated names for each value in the `form_errors` array.

    You can access a specific field in the array by using a specific error from the `form_errors` array as a key.

###### Example

```json
{
  "messages": {},
  "translated_fields": {}
}
```

#### Output form errors

You can output the name of the field related to the error, and the error message, by using the error as a key to access the `translated_fields` and `messages` properties.

```liquid
<ul>
  {% for error in form.errors %}
    <li>
      {% if error == 'form' %}
        {{ form.errors.messages[error] }}
      {% else %}
        {{ form.errors.translated_fields[error] }} - {{ form.errors.messages[error] }}
      {% endif %}
    </li>
  {% endfor %}
</ul>
```

```liquid

  {% for error in form.errors %}
    

      {% if error == 'form' %}
        {{ form.errors.messages[error] }}
      {% else %}
        {{ form.errors.translated_fields[error] }} - {{ form.errors.messages[error] }}
      {% endif %}
    

  {% endfor %}
```

---



<a id="objects-fulfillment"></a>


## fulfillment

An order [fulfillment](https://help.shopify.com/manual/orders/fulfillment), which includes information like the line items being fulfilled and shipment tracking.

### Properties

* * **created\_​at**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * A timestamp for when the fulfillment was created.

    **Tip:** Use the \<a href="/docs/api/liquid/filters/date">\<code>date\</code> filter\</a> to format the timestamp.

  * **fulfillment\_​line\_​items**

    array of [line\_item](https://shopify.dev/docs/api/liquid/objects/line_item)

  * The line items in the fulfillment.

  * **item\_​count**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The number of items in the fulfillment.

  * **tracking\_​company**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The name of the fulfillment service.

  * **tracking\_​number**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The fulfillment's tracking number.

    If there's no tracking number, then `nil` is returned.

  * **tracking\_​numbers**

    array of [string](https://shopify.dev/docs/api/liquid/basics#string)

  * An array of the fulfillment's tracking numbers.

  * **tracking\_​url**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The URL for the fulfillment's tracking number.

    If there's no tracking number, then `nil` is returned.

###### Example

```json
{
  "created_at": "2022-06-15 17:08:30 -0400",
  "fulfillment_line_items": [
    {
      "quantity": 2,
      "line_item": "LineItemDrop"
    },
    {
      "quantity": 1,
      "line_item": "LineItemDrop"
    }
  ],
  "item_count": 3,
  "tracking_company": "Canada Post",
  "tracking_number": "01189998819991197253",
  "tracking_numbers": [
    "01189998819991197253"
  ],
  "tracking_url": "https://www.canadapost-postescanada.ca/track-reperage/en#/search?searchFor=01189998819991197253"
}
```

---



<a id="objects-generic-file"></a>


## generic\_​file

A file from a `file_reference` type [metafield](https://shopify.dev/docs/api/liquid/objects/metafield) that is neither an image or video.

***

**Tip:** To learn about metafield types, refer to \<a href="/apps/metafields/types">Metafield types\</a>.

***

### Properties

* * **alt**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The alt text of the media.

  * **id**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The ID of the file.

  * **media\_​type**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The media type of the model. Always returns `generic_file`.

  * **position**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The position of the media in the [`product.media` array](https://shopify.dev/docs/api/liquid/objects/product#product-media).

    If the source is a [`file_reference` metafield](https://shopify.dev/apps/metafields/types), then `nil` is returned.

  * **preview\_​image**

    [image](https://shopify.dev/docs/api/liquid/objects/image)

  * A preview image for the file.

  * **url**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The [CDN URL](https://shopify.dev/themes/best-practices/performance/platform#shopify-cdn) for the file.

###### Example

```json
{
  "alt": null,
  "id": 21918386454593,
  "media_type": "generic_file",
  "position": null,
  "preview_image": {},
  "url": "//polinas-potent-potions.myshopify.com/cdn/shop/files/disclaimer.pdf?v=9043651738044769859"
}
```

---



<a id="objects-gift-card"></a>


## gift\_​card

A [gift card](https://help.shopify.com/manual/products/gift-card-products) that's been issued to a customer or a recipient.

### Properties

* * **balance**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The remaining balance of the gift card in the currency's subunit.

    The value is output in the customer's local (presentment) currency.

    For currencies without subunits, such as JPY and KRW, tenths and hundredths of a unit are appended. For example, 1000 Japanese yen is output as 100000.

    **Tip:** Use \<a href="/docs/api/liquid/filters/money-filters">money filters\</a> to output a formatted amount.

  * **code**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The code used to redeem the gift card.

  * **currency**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The [ISO code](https://www.iso.org/iso-4217-currency-codes.html) of the currency that the gift card was issued in.

  * **customer**

    [customer](https://shopify.dev/docs/api/liquid/objects/customer)

  * The customer associated with the gift card.

  * **enabled**

    [boolean](https://shopify.dev/docs/api/liquid/basics#boolean)

  * Returns `true` if the gift card is enabled. Returns `false` if not.

  * **expired**

    [boolean](https://shopify.dev/docs/api/liquid/basics#boolean)

  * Returns `true` if the gift card is expired. Returns `false` if not.

  * **expires\_​on**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * A timestamp for when the gift card expires.

    If the gift card never expires, then `nil` is returned.

    **Tip:** Use the \<a href="/docs/api/liquid/filters/date">\<code>date\</code> filter\</a> to format the timestamp.

  * **initial\_​value**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The initial balance of the gift card in the currency's subunit.

    The value is output in the customer's local (presentment) currency.

    For currencies without subunits, such as JPY and KRW, tenths and hundredths of a unit are appended. For example, 1000 Japanese yen is output as 100000.

    **Tip:** Use \<a href="/docs/api/liquid/filters/money-filters">money filters\</a> to output a formatted amount.

  * **last\_​four\_​characters**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The last 4 characters of the code used to redeem the gift card.

  * **message**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The personalized message intended for the recipient.

    If there is no message intended for the recipient, then `nil` is returned.

  * **pass\_​url**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The URL to download the gift card as an Apple Wallet Pass.

  * **product**

    [product](https://shopify.dev/docs/api/liquid/objects/product)

  * The product associated with the gift card.

  * **properties**

  * The [line item properties](https://shopify.dev/docs/api/liquid/objects/line_item#line_item-properties) assigned to the gift card.

    If there aren't any line item properties, then an [`EmptyDrop`](https://shopify.dev/docs/api/liquid/basics#emptydrop) is returned.

  * **qr\_​identifier**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * A string used to generate a QR code for the gift card.

  * **recipient**

    [recipient](https://shopify.dev/docs/api/liquid/objects/recipient)

  * The recipient associated with the gift card.

    If there is no recipient associated with the gift card, then `nil` is returned.

  * **send\_​on**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The scheduled date on which the gift card will be sent to the recipient.

    If the gift card does not have a scheduled date, then `nil` is returned.

    **Tip:** Use the \<a href="/docs/api/liquid/filters/date">\<code>date\</code> filter\</a> to format the date.

  * **template\_​suffix**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The name of the [custom template](https://shopify.dev/themes/architecture/templates#alternate-templates) assigned to the gift card.

    The name doesn't include the `gift_card.` prefix, or the `.liquid` file extension.

    If a custom template isn't assigned to the gift card, then `nil` is returned.

  * **url**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The URL to view the gift card. This URL is on the `checkout.shopify.com` domain.

    **Tip:** The page at this URL is rendered through the \<a href="/themes/architecture/templates/gift-card-liquid">\<code>\<span class="PreventFireFoxApplyingGapToWBR">gift\<wbr/>\_card.liquid\</span>\</code> template\</a> of the theme.

  * **variant**

    [variant](https://shopify.dev/docs/api/liquid/objects/variant)

  * The variant associated with the gift card.

    If there is no variant associated with the gift card, then `nil` is returned.

###### Example

```json
{
  "balance": 5000,
  "code": "WCGX 7X97 K9HJ DFR8",
  "currency": "CAD",
  "customer": {},
  "enabled": true,
  "expired": false,
  "expires_on": null,
  "initial_value": 5000,
  "last_four_characters": "DFR8",
  "message": null,
  "send_on": null,
  "pass_url": "https://polinas-potent-potions.myshopify.com/v1/passes/pass.com.shopify.giftcardnext/94af7fbe55d010130df8d8bc4a338d36/",
  "product": {},
  "variant": {},
  "properties": {},
  "qr_identifier": "shopify-giftcard-v1-3TKWJKJBM3X7PBRK",
  "recipient": null,
  "template_suffix": null,
  "url": "https://checkout.shopify.com/gift_cards/56174706753/0011c591fc720d0a51b80cdb694f969e"
}
```

### Templates using gift\_card

[Theme architecture](https://shopify.dev/themes/architecture/templates/gift-card-liquid)

[gift\_card.liquid template](https://shopify.dev/themes/architecture/templates/gift-card-liquid)

---



<a id="objects-group"></a>


## group

A group of rules for the `robots.txt` file.

***

**Tip:** You can \<a href="/themes/seo/robots-txt">customize the \<code>robots.txt\</code> file\</a> with the \<a href="/themes/architecture/templates/robots-txt-liquid">\<code>robots.txt.liquid\</code> template\</a>.

***

### Properties

* * **rules**

    array of [rule](https://shopify.dev/docs/api/liquid/objects/rule)

  * The rules in the group.

  * **sitemap**

    [sitemap](https://shopify.dev/docs/api/liquid/objects/sitemap)

  * The sitemap for the group.

    If the group doesn't require a sitemap, then `blank` is returned.

    The sitemap can be accessed at `/sitemap.xml`.

  * **user\_​agent**

    [user\_agent](https://shopify.dev/docs/api/liquid/objects/user_agent)

  * The user agent for the group.

###### Example

```json
{
  "rules": [],
  "sitemap": {},
  "user_agent": {}
}
```

---



<a id="objects-handle"></a>


## handle

The [handle](https://shopify.dev/docs/api/liquid/basics#handles) of the resource associated with the current template.

The `handle` object will return a value only when the following templates are being viewed:

* [article](https://shopify.dev/themes/architecture/templates/article)
* [blog](https://shopify.dev/themes/architecture/templates/blog)
* [collection](https://shopify.dev/themes/architecture/templates/collection)
* [page](https://shopify.dev/themes/architecture/templates/page)
* [product](https://shopify.dev/themes/architecture/templates/product)

If none of the above templates are being viewed, then `nil` is returned.

#### Directly accessible in

* Global

---



<a id="objects-image"></a>


## image

An image, such as a product or collection image.

To learn about the image formats that Shopify supports, visit the [Shopify Help Center](https://help.shopify.com/manual/online-store/images/theme-images#image-formats).

***

**Tip:** Use the \<a href="/docs/api/liquid/filters/image\_url">\<code>\<span class="PreventFireFoxApplyingGapToWBR">image\<wbr/>\_url\</span>\</code>\</a> and \<a href="/docs/api/liquid/filters/image\_tag">\<code>\<span class="PreventFireFoxApplyingGapToWBR">image\<wbr/>\_tag\</span>\</code>\</a> filters to display images on the storefront.

***

### Properties

* * **alt**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The alt text of the image.

  * **aspect\_​ratio**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The aspect ratio of the image as a decimal.

  * **attached\_​to\_​variant?**

    [boolean](https://shopify.dev/docs/api/liquid/basics#boolean)

  * Returns `true` if the image is associated with a variant. Returns `false` if not.

    The `attached_to_variant?` property is only available for images accessed through the following sources:

    * [`product.featured_image`](https://shopify.dev/docs/api/liquid/objects/product#product-featured_image)
    * [`product.images`](https://shopify.dev/docs/api/liquid/objects/product#product-images)

    If you reference this property on an image from another source, then `nil` is returned.

  * **height**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The height of the image in pixels.

  * **id**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The ID of the image.

    If you reference the `id` property for preview images of [`generic_file`](https://shopify.dev/docs/api/liquid/objects/generic_file) or [`media`](https://shopify.dev/docs/api/liquid/objects/media) objects, then `nil` is returned.

  * **media\_​type**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The media type of the image. Always returns `image`.

    The `media_type` property is only available for images accessed through the following sources:

    * [`product.media`](https://shopify.dev/docs/api/liquid/objects/product#product-media)
    * [`file_reference` type metafields](https://shopify.dev/apps/metafields/types#supported-types)

    If you reference this property on an image from another source, then `nil` is returned.

    ExampleFilter for media of a specific type

    You can use the `media_type` property with the [`where` filter](https://shopify.dev/docs/api/liquid/filters/where) to filter the [`product.media` array](https://shopify.dev/docs/api/liquid/objects/product#product-media) for all media of a desired type.

    ##### Code

    ```liquid
    {% assign images = product.media | where: 'media_type', 'image' %}

    {% for image in images %}
      {{- image | image_url: width: 300 | image_tag }}
    {% endfor %}
    ```

    ##### Data

    ```json
    {
      "product": {
        "media": [
          "products/oil-dripping-into-jar.jpg"
        ]
      }
    }
    ```

    ##### Output

    ```html
    <img src="//polinas-potent-potions.myshopify.com/cdn/shop/products/oil-dripping-into-jar.jpg?v=1650399519&amp;width=300" alt="Viper venom" srcset="//polinas-potent-potions.myshopify.com/cdn/shop/products/oil-dripping-into-jar.jpg?v=1650399519&amp;width=300 300w" width="300" height="200">
    ```

  * **position**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The position of the image in the [`product.images`](https://shopify.dev/docs/api/liquid/objects/product#product-images) or [`product.media`](https://shopify.dev/docs/api/liquid/objects/product#product-media) array.

    The `position` property is only available for images that are associated with a product. If you reference this property on an image from another source, then `nil` is returned.

  * **presentation**

    [image\_presentation](https://shopify.dev/docs/api/liquid/objects/image_presentation)

  * The presentation settings for the image.

  * **preview\_​image**

    [image](https://shopify.dev/docs/api/liquid/objects/image)

  * A preview image for the image.

    The `preview_image` property is only available for images accessed through the following sources:

    * [`product.featured_media`](https://shopify.dev/docs/api/liquid/objects/product#product-featured_media)
    * [`product.media`](https://shopify.dev/docs/api/liquid/objects/product#product-media)
    * [`file_reference` type metafields](https://shopify.dev/apps/metafields/types#supported-types)

    If you reference this property on an image from another source, then `nil` is returned.

  * **product\_​id**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The ID of the product that the image is associated with.

    The `product_id` property is only available for images associated with a product. If you reference this property on an image from another source, then `nil` is returned.

  * **src**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The relative URL of the image.

  * **variants**

    array of [variant](https://shopify.dev/docs/api/liquid/objects/variant)

  * The product variants that the image is associated with.

    The `variants` property is only available for images accessed through the following sources:

    * [`product.featured_image`](https://shopify.dev/docs/api/liquid/objects#product-featured_image)
    * [`product.images`](https://shopify.dev/docs/api/liquid/objects/product#product-images)

    If you reference this property on an image from another source, then `nil` is returned.

  * **width**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The width of the image in pixels.

###### Example

```json
{
  "alt": "Charcoal",
  "aspect_ratio": 1.5001681802892701,
  "attached_to_variant?": false,
  "height": 2973,
  "id": 29355706875969,
  "position": 1,
  "product_id": 6790277595201,
  "src": {},
  "variants": [],
  "width": 4460
}
```

#### Referencing the `image` object directly

When an `image` object is referenced directly, the image's relative URL path is returned.

###### Code

```liquid
{{ product.featured_image }}
```

###### Data

```json
{
  "product": {
    "featured_image": "products/mushrooms-on-a-table.jpg"
  }
}
```

###### Output

```html
products/mushrooms-on-a-table.jpg
```

---



<a id="objects-image-presentation"></a>


## image\_​presentation

The presentation settings for an image.

### Properties

* * **focal\_​point**

    [focal\_point](https://shopify.dev/docs/api/liquid/objects/focal_point)

  * The focal point for the image.

#### Returned by

* [image.presentation](https://shopify.dev/docs/api/liquid/objects/image#image-presentation)

---



<a id="objects-images"></a>


## images

All of the [images](https://shopify.dev/docs/api/liquid/objects/image) that have been [uploaded](https://help.shopify.com/manual/online-store/images/theme-images#upload-images) to a store.

#### Directly accessible in

* Global

You can access images from the `images` array by their filename.

###### Code

```liquid
{{ images['potions-header.png'] | image_url: width: 300 | image_tag }}
```

###### Output

```html
<img src="//polinas-potent-potions.myshopify.com/cdn/shop/files/potions-header.png?v=1650325393&amp;width=300" alt="" srcset="//polinas-potent-potions.myshopify.com/cdn/shop/files/potions-header.png?v=1650325393&amp;width=300 300w" width="300" height="173" style="object-position:1.9231% 9.7917%;">
```

---



<a id="objects-instructions"></a>


## instructions

The instructions for a nested cart line item.

### Properties

* * **can\_​remove**

    [boolean](https://shopify.dev/docs/api/liquid/basics#boolean)

  * Whether the nested cart line item can be removed.

  * **can\_​update\_​quantity**

    [boolean](https://shopify.dev/docs/api/liquid/basics#boolean)

  * Whether the nested cart line item quantity can be updated.

#### Returned by

* [line\_​item.instructions](https://shopify.dev/docs/api/liquid/objects/line_item#line_item-instructions)

---



<a id="objects-line-item"></a>


## line\_​item

A line in a cart, checkout, or order. Each line item represents a product variant.

### Properties

* * **discount\_​allocations**

    array of [discount\_allocation](https://shopify.dev/docs/api/liquid/objects/discount_allocation)

  * The discount allocations that apply to the line item.

    **Caution:** Not applicable for item component as discounts are applied to the parent line item.

  * **error\_​message**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * An informational error message about the status of the line item in the buyer's chosen language.

    **Note:** This field is applicable for cart line item only and currently available for shops using Checkout Extensibility.

  * **final\_​line\_​price**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The combined price, in the currency's subunit, of all of the items in the line item. This includes any line-level discounts.

    The value is equal to `line_item.final_price` multiplied by `line_item.quantity`. It's output in the customer's local (presentment) currency.

    For currencies without subunits, such as JPY and KRW, tenths and hundredths of a unit are appended. For example, 1000 Japanese yen is output as 100000.

    **Tip:** Use \<a href="/docs/api/liquid/filters/money-filters">money filters\</a> to output a formatted price.

  * **final\_​price**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The price of the line item in the currency's subunit. This includes any line-level discounts.

    The value is output in the customer's local (presentment) currency.

    For currencies without subunits, such as JPY and KRW, tenths and hundredths of a unit are appended. For example, 1000 Japanese yen is output as 100000.

    **Tip:** Use \<a href="/docs/api/liquid/filters/money-filters">money filters\</a> to output a formatted price.

  * **fulfillment**

    [fulfillment](https://shopify.dev/docs/api/liquid/objects/fulfillment)

  * The fulfillment of the line item.

  * **fulfillment\_​service**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The [fulfillment service](https://help.shopify.com/manual/shipping/understanding-shipping/dropshipping-and-fulfillment-services) for the vartiant associated with the line item. If there's no fulfillment service, then `manual` is returned.

  * **gift\_​card**

    [boolean](https://shopify.dev/docs/api/liquid/basics#boolean)

  * Returns `true` if the product associated with the line item is a gift card. Returns `false` if not.

  * **grams**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The weight of the line item in the store's [default weight unit](https://help.shopify.com/manual/intro-to-shopify/initial-setup/setup-business-settings#set-or-change-your-stores-default-weight-unit).

    **Tip:** Use this property with the \<a href="/docs/api/liquid/filters/weight\_with\_unit">\<code>\<span class="PreventFireFoxApplyingGapToWBR">weight\<wbr/>\_with\<wbr/>\_unit\</span>\</code> filter\</a> to format the weight.

  * **id**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The ID of the line item.

    The ID differs depending on the context. The following table outlines the possible contexts and their associated values:

    | Context | Value |
    | - | - |
    | [`cart.items`](https://shopify.dev/docs/api/liquid/objects/cart#cart-items) | The ID of the line item's variant.\<br>\<br>This ID isn't unique, and can be shared by multiple items with the same variant. |
    | [`checkout.line_items`](https://shopify.dev/docs/api/liquid/objects/checkout#checkout-line_items) | A temporary unique hash generated for the checkout. |
    | [`order.line_items`](https://shopify.dev/docs/api/liquid/objects/order#order-line_items) | A unique integer ID. |

  * **image**

    [image](https://shopify.dev/docs/api/liquid/objects/image)

  * The image of the line item.

    The image can come from one of the following sources:

    * The image of the variant associated with the line item
    * The featured image of the product associated with the line item, if there's no variant image

  * **instructions**

    [instructions](https://shopify.dev/docs/api/liquid/objects/instructions)

  * Instructions define behaviours and operations that can be performed on the nested cart line.

    **Note:** This field is applicable for cart line item only.

  * **item\_​components**

    array of [line\_item](https://shopify.dev/docs/api/liquid/objects/line_item)

  * The components of a line item.

    **Note:** This field is applicable for cart line item only.

  * **key**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The key of the line item.

    Line item keys are unique identifiers that consist of the following components separated by a colon:

    * The ID of the variant associated with the line item
    * A hash of unique characteristics of the line item.

    Note: Line item keys are not stable identifiers. The line item key will change as characteristics of the line item change. This includes, but is not limited to, properties and discount applications.

  * **line\_​level\_​discount\_​allocations**

    array of [discount\_allocation](https://shopify.dev/docs/api/liquid/objects/discount_allocation)

  * The discount allocations that apply directly to the line item.

    **Caution:** Not applicable for item component as discounts are applied to the parent line item.

  * **line\_​level\_​total\_​discount**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The total amount of any discounts applied to the line item in the currency's subunit.

    The value is output in the customer's local (presentment) currency.

    For currencies without subunits, such as JPY and KRW, tenths and hundredths of a unit are appended. For example, 1000 Japanese yen is output as 100000.

    **Tip:** Use \<a href="/docs/api/liquid/filters/money-filters">money filters\</a> to output a formatted amount.

  * **message**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * Information about the discounts that have affected the line item.

    The following table outlines what's returned depending on the number of discounts affecting the line item:

    | Number of discounts | Value |
    | - | - |
    | 0 | `nil` |
    | 1 | The [title](https://shopify.dev/docs/api/liquid/objects/discount_application#discount_application-title) of the discount. |
    | More than 1 | A Shopify generated string noting how many discounts have been applied. |

  * **options\_​with\_​values**

  * The name and value pairs for each option of the variant associated with the line item.

    **Note:** The array is never empty because variants with no options still have a default option. Because of this, you should use \<code>\<span class="PreventFireFoxApplyingGapToWBR">line\<wbr/>\_item.product.has\<wbr/>\_only\<wbr/>\_default\<wbr/>\_variant\</span>\</code> to check whether there\&#39;s any information to output.

    ExampleOutput the option values

    ##### Code

    ```liquid
    {% for item in cart.items %}
    <div class="cart__item">
      <p class="cart__item-title">
        {{ item.title }}
      </p>

      {%- unless item.product.has_only_default_variant %}
      <ul>
        {% for option in item.options_with_values -%}
        <li>{{ option.name }}: {{ option.value }}</li>
        {%- endfor %}
      </ul>
      {% endunless %}
    </div>
    {% endfor %}
    ```

    ##### Data

    ```json
    {
      "cart": {
        "items": [
          {
            "product": {
              "has_only_default_variant": true
            },
            "title": "Whole bloodroot"
          },
          {
            "product": {
              "has_only_default_variant": true
            },
            "title": "Viper venom"
          }
        ]
      }
    }
    ```

    ##### Output

    ```html
    <div class="cart__item">
      <p class="cart__item-title">
        Whole bloodroot
      </p>
    </div>

    <div class="cart__item">
      <p class="cart__item-title">
        Viper venom
      </p>
    </div>
    ```

  * **original\_​line\_​price**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The combined price of all of the items in a line item in the currency's subunit, before any discounts have been applied.

    The value is equal to `line_item.original_price` multiplied by `line_item.quantity`. It's output in the customer's local (presentment) currency.

    For currencies without subunits, such as JPY and KRW, tenths and hundredths of a unit are appended. For example, 1000 Japanese yen is output as 100000.

    **Tip:** Use \<a href="/docs/api/liquid/filters/money-filters">money filters\</a> to output a formatted price.

  * **original\_​price**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The price of the line item in the currency's subunit, before discounts have been applied.

    The value is output in the customer's local (presentment) currency.

    For currencies without subunits, such as JPY and KRW, tenths and hundredths of a unit are appended. For example, 1000 Japanese yen is output as 100000.

    **Tip:** Use \<a href="/docs/api/liquid/filters/money-filters">money filters\</a> to output a formatted price.

  * **parent\_​relationship**

    [parent\_relationship](https://shopify.dev/docs/api/liquid/objects/parent_relationship)

  * The parent relationship for a nested line item.

    **Note:** This field is applicable for cart line item only.

  * **product**

    [product](https://shopify.dev/docs/api/liquid/objects/product)

  * The product associated with the line item. May be a regular [product](https://shopify.dev/docs/api/liquid/objects/product) or a [remote product](https://shopify.dev/docs/api/liquid/objects/remote_product).

  * **product\_​id**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The [ID](https://shopify.dev/docs/api/liquid/objects/product#product-id) of the line item's product.

  * **properties**

  * The properties of the line item.

    You can add, or allow customers to add, custom information to a line item with line item properties.

    Line item properties consist of a name and value pair. They can be captured with the following methods:

    * [A custom input inside a product form](https://shopify.dev/themes/architecture/templates/product#line-item-properties)
    * [The AJAX Cart API](https://shopify.dev/api/ajax/reference/cart#add-line-item-properties)

    **Tip:** To learn about how to display captured properties, refer to \<a href="/themes/architecture/templates/cart#display-line-item-properties">Display line item properties\</a>.

    ExampleCapture line item properties in the product form

    To capture line item properties inside the [product form](https://shopify.dev/docs/api/liquid/tags/form#form-product), you need to include an input, for each property. Each input needs a unique `name` attribute. Use the following format:

    ```
    name="properties[property-name]"
    ```

    The value of the input is captured as the value of the property.

    For example, you can use the following code to capture custom engraving text for a product:

    ```liquid
    {% form 'product', product %}
      ...
      <label for="engravingText">Engraving<label>
      <input type="text" id="engravingText" name="properties[Engraving]">
      ...
    {% endform %}
    ```

    ```liquid
    {% form 'product', product %}
      ...
      
    ```

    ***

    **Tip:** You can add an underscore to the beginning of a property name to hide it from customers at checkout. For example, \<code>\<span class="PreventFireFoxApplyingGapToWBR">properties\[\_hidden\<wbr/>Property\<wbr/>Name]\</span>\</code>.

    ***

  * **quantity**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The quantity of the line item.

  * **requires\_​shipping**

    [boolean](https://shopify.dev/docs/api/liquid/basics#boolean)

  * Returns `true` if the variant associated with the line item requires shipping. Returns `false` if not.

  * **selling\_​plan\_​allocation**

    [selling\_plan\_allocation](https://shopify.dev/docs/api/liquid/objects/selling_plan_allocation)

  * The selling plan allocation of the line item. If the line item doesn't have a selling plan allocation, then `nil` is returned.

    #### Availability of selling plan information

    The following properties aren't available when referencing selling plan information through an [order's line items](https://shopify.dev/docs/api/liquid/objects/order#order-line_items):

    * [`selling_plan_allocation.compare_at_price`](https://shopify.dev/docs/api/liquid/objects/selling_plan_allocation#selling_plan_allocation-compare_at_price)
    * [`selling_plan_allocation.price_adjustments`](https://shopify.dev/docs/api/liquid/objects/selling_plan_allocation#selling_plan_allocation-price_adjustments)
    * [`selling_plan_allocation.selling_plan.group_id`](https://shopify.dev/docs/api/liquid/objects/selling_plan#selling_plan-group_id)
    * [`selling_plan_allocation.selling_plan.options`](https://shopify.dev/docs/api/liquid/objects/selling_plan#selling_plan-options)
    * [`selling_plan_allocation.selling_plan.price_adjustments`](https://shopify.dev/docs/api/liquid/objects/selling_plan#selling_plan-price_adjustments)
    * [`selling_plan_allocation.selling_plan_group_id`](https://shopify.dev/docs/api/liquid/objects/selling_plan_allocation#selling_plan_allocation-selling_plan_group_id)

    **Tip:** If you need to show selling plan information post-purchase, then you should use \<a href="/docs/api/liquid/objects/selling\_plan#selling\_plan-name">\<code>\<span class="PreventFireFoxApplyingGapToWBR">selling\<wbr/>\_plan.name\</span>\</code>\</a>.

  * **sku**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The [sku](https://shopify.dev/docs/api/liquid/objects/variant#variant-sku) of the variant associated with the line item.

  * **successfully\_​fulfilled\_​quantity**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The number of items from the line item that have been successfully fulfilled.

  * **tax\_​lines**

    array of [tax\_line](https://shopify.dev/docs/api/liquid/objects/tax_line)

  * The tax lines for the line item.

  * **taxable**

    [boolean](https://shopify.dev/docs/api/liquid/basics#boolean)

  * Returns `true` if taxes should be charged on the line item. Returns `false` if not.

  * **title**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The title of the line item. The title is a combination of `line_item.product.title` and `line_item.variant.title`, separated by a hyphen.

    In most contexts, the line item title appears in the customer's preferred language. However, in the context of an [order](https://shopify.dev/docs/api/liquid/objects/order), the line item title appears in the language that the customer checked out in. The title can receive an override value from the [Cart Transform API](https://shopify.dev/docs/api/functions/reference/cart-transform#showing-overrides). Overrides take precedence over translations.

    #### Line item title history

    When referencing line item, product, and variant titles in the context of an order, the following changes might result in a different output than you expect:

    * A product or variant being deleted
    * A product or variant title being edited

    When `line_item.title` is referenced for an order, the line item title at the time of the order is returned. However, when `line_item.product.title` and `line_item.variant.title` are referenced, the current value for each title is returned.

  * **unit\_​price**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The [unit price](https://help.shopify.com/manual/products/details/product-pricing/unit-pricing#add-unit-prices-to-your-product) of the line item in the currency's subunit.

    The price reflects any discounts that are applied to the line item. The value is output in the customer's local (presentment) currency.

    For currencies without subunits, such as JPY and KRW, tenths and hundredths of a unit are appended. For example, 1000 Japanese yen is output as 100000.

    **Tip:** Use the \<a href="/docs/api/liquid/filters/unit\_price\_with\_measurement">\<code>\<span class="PreventFireFoxApplyingGapToWBR">unit\<wbr/>\_price\<wbr/>\_with\<wbr/>\_measurement\</span>\</code> filter\</a> with this property and the \<code>\<span class="PreventFireFoxApplyingGapToWBR">line\<wbr/>\_item.unit\<wbr/>\_price\<wbr/>\_measurement\</span>\</code> property to output a formatted unit price with measurement.

    To learn about how to display unit prices in your theme, refer to [Unit pricing](https://shopify.dev/themes/pricing-payments/unit-pricing).

  * **unit\_​price\_​measurement**

    [unit\_price\_measurement](https://shopify.dev/docs/api/liquid/objects/unit_price_measurement)

  * The unit price measurement of the line item.

    To learn about how to display unit prices in your theme, refer to [Unit pricing](https://shopify.dev/themes/pricing-payments/unit-pricing).

    **Tip:** Use the \<a href="/docs/api/liquid/filters/unit\_price\_with\_measurement">\<code>\<span class="PreventFireFoxApplyingGapToWBR">unit\<wbr/>\_price\<wbr/>\_with\<wbr/>\_measurement\</span>\</code> filter\</a> with the \<code>\<span class="PreventFireFoxApplyingGapToWBR">line\<wbr/>\_item.unit\<wbr/>\_price\</span>\</code> property and this property to output a formatted unit price with measurement.

  * **url**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The relative URL of the variant associated with the line item.

  * **url\_​to\_​remove**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * A URL to remove the line item from the cart.

    **Tip:** To learn more about how to use this property in your theme, refer to \<a href="/themes/architecture/templates/cart#remove-line-items-from-the-cart">Remove line items from the cart\</a>.

  * **variant**

    [variant](https://shopify.dev/docs/api/liquid/objects/variant)

  * The variant associated with the line item.

  * **variant\_​id**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The [ID](https://shopify.dev/docs/api/liquid/objects/variant#variant-id) of the line item's variant.

  * **vendor**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The vendor of the variant associated with the line item.

### Deprecated Properties

* * **discounts**

    array of [discount](https://shopify.dev/docs/api/liquid/objects/discount)

    Deprecated

  * The discounts applied to the line item.

    **Deprecated:**

    Deprecated because not all discount types and details are available.

    The `line_item.discounts` property has been replaced by [`line_item.discount_allocations`](https://shopify.dev/docs/api/liquid/objects/line_item#line_item-discount_allocations).

  * **line\_​price**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

    Deprecated

  * The combined price, in the currency's subunit, of all of the items in a line item. This includes any discounts from [Shopify Scripts](https://help.shopify.com/manual/checkout-settings/script-editor).

    The value is equal to `line_item.price` multiplied by `line_item.quantity`. It's output in the customer's local (presentment) currency.

    For currencies without subunits, such as JPY and KRW, tenths and hundredths of a unit are appended. For example, 1000 Japanese yen is output as 100000.

    **Tip:** Use \<a href="/docs/api/liquid/filters/money-filters">money filters\</a> to output a formatted price.

    **Deprecated:**

    Deprecated because discounts from automatic discounts and discount codes aren't included.

    The `line_item.line_price` property has been replaced by [`line_item.final_line_price`](https://shopify.dev/docs/api/liquid/objects/line_item#line_item-final_line_price).

  * **price**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

    Deprecated

  * The price of the line item in the currency's subunit. This includes any discounts from [Shopify Scripts](https://help.shopify.com/manual/checkout-settings/script-editor).

    The value is output in the customer's local (presentment) currency.

    For currencies without subunits, such as JPY and KRW, tenths and hundredths of a unit are appended. For example, 1000 Japanese yen is output as 100000.

    **Tip:** Use \<a href="/docs/api/liquid/filters/money-filters">money filters\</a> to output a formatted price.

    **Deprecated:**

    Deprecated because discounts from automatic discounts and discount codes aren't included.

    The `line_item.price` property has been replaced by [`line_item.final_price`](https://shopify.dev/docs/api/liquid/objects/line_item#line_item-final_price).

  * **total\_​discount**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

    Deprecated

  * The total amount, in the currency's subunit, of any discounts applied to the line item by [Shopify Scripts](https://help.shopify.com/manual/checkout-settings/script-editor).

    The value is output in the customer's local (presentment) currency.

    For currencies without subunits, such as JPY and KRW, tenths and hundredths of a unit are appended. For example, 1000 Japanese yen is output as 100000.

    **Tip:** Use \<a href="/docs/api/liquid/filters/money-filters">money filters\</a> to output a formatted amount.

    **Deprecated:**

    Deprecated because discounts from automatic discounts and discount codes aren't included.

    The `line_item.total_discount` property has been replaced by [`line_item.line_level_total_discount`](https://shopify.dev/docs/api/liquid/objects/line_item#line_item-line_level_total_discount).

###### Example

```json
{
  "discount_allocations": [],
  "discounts": [],
  "error_message": "",
  "final_line_price": "74.97",
  "final_price": "24.99",
  "fulfillment": {},
  "fulfillment_service": "manual",
  "gift_card": false,
  "grams": 0,
  "id": 10974183882817,
  "image": {},
  "instructions": null,
  "item_components": null,
  "key": 10974183882817,
  "line_level_discount_allocations": [],
  "line_level_total_discount": "0.00",
  "line_price": "74.97",
  "message": "",
  "options_with_values": [
    {
      "name": "Title",
      "value": "Default Title"
    }
  ],
  "original_line_price": "74.97",
  "original_price": "24.99",
  "parent_relationship": null,
  "price": "24.99",
  "product": {},
  "product_id": 6792596455489,
  "properties": {},
  "quantity": 3,
  "requires_shipping": true,
  "selling_plan_allocation": null,
  "sku": "",
  "successfully_fulfilled_quantity": 2,
  "tax_lines": [],
  "taxable": true,
  "title": "Bloodroot (whole)",
  "total_discount": "0.00",
  "unit_price": "49.98",
  "unit_price_measurement": {
    "measured_type": "weight",
    "quantity_value": "500.0",
    "quantity_unit": "g",
    "reference_value": 1,
    "reference_unit": "kg"
  },
  "url": {},
  "url_to_remove": null,
  "variant": {},
  "variant_id": 39888235757633,
  "vendor": "Clover's Apothecary"
}
```

---



<a id="objects-link"></a>


## link

A link in a [menu](https://help.shopify.com/manual/online-store/menus-and-links/drop-down-menus).

To learn about how to implement navigation in a theme, refer to [Add navigation to your theme](https://shopify.dev/themes/navigation-search/navigation).

### Properties

* * **active**

    [boolean](https://shopify.dev/docs/api/liquid/basics#boolean)

  * Returns `true` if the link is active. Returns `false` if not.

    A link is considered to be active if the current URL path matches, or contains, the link's [url](https://shopify.dev/docs/api/liquid/objects/link#link-url). For example, if the current URL path is `/blog/potion-notions/new-potions-for-spring`, then the following link URLs would be considered active:

    * `/blog/potion-notions/new-potions-for-spring`
    * `/blog/potion-notions`

    **Tip:** The \<code>link.active\</code> property is useful for menu designs that highlight when top-level navigation categories are being viewed. For example, if a customer is viewing an article from the \&quot;Potion notions\&quot; blog, then the \&quot;Potion notions\&quot; link is highlighted in the menu.

  * **child\_​active**

    [boolean](https://shopify.dev/docs/api/liquid/basics#boolean)

  * Returns `true` if a link's child link is active. Returns `false` if not.

    A link is considered to be active if the current URL path matches, or contains, the [URL](https://shopify.dev/docs/api/liquid/objects/link#link-url) of the link.

    For example, if the current URL path is `/blog/potion-notions/new-potions-for-spring`, then the following link URLs would be considered active:

    * `/blog/potion-notions/new-potions-for-spring`
    * `/blog/potion-notions`

  * **child\_​current**

    [boolean](https://shopify.dev/docs/api/liquid/basics#boolean)

  * Returns `true` if current URL path matches a link's child link [URL](https://shopify.dev/docs/api/liquid/objects/link#link-url). Returns `false` if not.

    **Note:** URL parameters are ignored when determining a match.\</p> \<p>Product URLs \<a href="/docs/api/liquid/filters/within">within the context of a collection\</a> and standard product URLs are treated the same.

  * **current**

    [boolean](https://shopify.dev/docs/api/liquid/basics#boolean)

  * Returns `true` if the current URL path matches the [URL](https://shopify.dev/docs/api/liquid/objects/link#link-url) of the link. Returns `false` if not.

    **Note:** URL parameters are ignored when determining a match.\</p> \<p>Product URLs \<a href="/docs/api/liquid/filters/within">within the context of a collection\</a> are treated as equal to a standard product URL for the same product.

  * **handle**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The [handle](https://shopify.dev/docs/api/liquid/basics#handles) of the link.

  * **levels**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The number of nested levels under the link.

  * **links**

    array of [link](https://shopify.dev/docs/api/liquid/objects/link)

  * The child links of the link.

    ExampleCheck the number of links

    ##### Code

    ```liquid
    {% for link in linklists.main-menu.links -%}
      {% if link.links.size > 0 -%}
        - {{ link.title }} ({{ link.links.size }} children)<br>
      {%- else -%}
        - {{ link.title }}<br>
      {%- endif %}
    {%- endfor %}
    ```

    ##### Data

    ```json
    {
      "linklists": {
        "main-menu": {
          "links": [
            "LinkDrop",
            "LinkDrop",
            "LinkDrop"
          ]
        }
      }
    }
    ```

    ##### Output

    ```html
    - Home<br>
    - Catalog (2 children)<br>
    - Contact<br>
    ```

  * **object**

  * The object associated with the link.

    The object can be one of the following:

    * [`article`](https://shopify.dev/docs/api/liquid/objects/article)
    * [`blog`](https://shopify.dev/docs/api/liquid/objects/blog)
    * [`collection`](https://shopify.dev/docs/api/liquid/objects/collection)
    * [`metaobject`](docs/api/liquid/objects/metaobject)
    * [`page`](https://shopify.dev/docs/api/liquid/objects/page)
    * [`policy`](https://shopify.dev/docs/api/liquid/objects/policy)
    * [`product`](https://shopify.dev/docs/api/liquid/objects/product)

  * **title**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The title of the link.

  * **type**

    [string](https://shopify.dev/docs/api/liquid/basics#string) from a set of values

  * The type of the link.

    | Possible values | Description |
    | - | - |
    | article\_link | The link points to an article. |
    | blog\_link | The link points to an blog. |
    | catalog\_link | The link points to the [catalog page](https://help.shopify.com/manual/online-store/themes/customizing-themes/change-catalog-page). |
    | collection\_link | The link points to a collection. |
    | collections\_link | The link points to the [collection list page](https://shopify.dev/themes/architecture/templates/list-collections). |
    | customer\_account\_page\_link | The link points to a [customer account page](https://shopify.dev/docs/apps/build/customer-accounts/full-page-extensions). |
    | frontpage\_link | The link points to the home page. |
    | http\_link | The link points to an external web page, or a product type or vendor collection. |
    | metaobject\_link | The link points to a metaobject page. |
    | page\_link | The link points to a [page](https://help.shopify.com/manual/online-store/themes/theme-structure/pages). |
    | policy\_link | The link points to a [policy page](https://help.shopify.com/manual/checkout-settings/refund-privacy-tos#add-links-to-your-policies-within-pages-or-on-social-media). |
    | product\_link | The link points to a product page. |
    | search\_link | The link points to the search page. |

  * **url**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The URL of the link.

###### Example

```json
{
  "active": false,
  "child_active": false,
  "child_current": false,
  "current": false,
  "handle": {},
  "levels": 0,
  "links": [],
  "object": {},
  "title": {},
  "type": "page_link",
  "url": "/pages/contact"
}
```

---



<a id="objects-linklist"></a>


## linklist

A [menu](https://help.shopify.com/manual/online-store/menus-and-links/drop-down-menus) in a store.

To learn about how to implement navigation in a theme, refer to [Add navigation to your theme](https://shopify.dev/themes/navigation-search/navigation).

### Properties

* * **handle**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The [handle](https://shopify.dev/docs/api/liquid/basics#handles) of the menu.

  * **levels**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The number of nested levels in the menu.

    **Note:** There\&#39;s a maximum of 3 levels.

  * **links**

    array of [link](https://shopify.dev/docs/api/liquid/objects/link)

  * The links in the menu.

  * **title**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The title of the menu.

###### Example

```json
{
  "handle": "main-menu",
  "levels": 2,
  "links": [],
  "title": "Main menu"
}
```

---



<a id="objects-linklists"></a>


## linklists

All of the [menus](https://help.shopify.com/manual/online-store/menus-and-links/drop-down-menus) in a store.

#### Directly accessible in

* Global

You can access a specific menu through the `linklists` object using the menu's [handle](https://shopify.dev/docs/api/liquid/basics#handles).

###### Code

```liquid
<!-- Main menu -->
{% for link in linklists.main-menu.links -%}
  {{ link.title | link_to: link.url }}
{%- endfor %}

<!-- Footer menu -->
{% for link in linklists['footer'].links -%}
  {{ link.title | link_to: link.url }}
{%- endfor %}
```

###### Data

```json
{
  "linklists": {
    "footer": {
      "links": [
        "LinkDrop"
      ]
    },
    "main-menu": {
      "links": [
        "LinkDrop",
        "LinkDrop",
        "LinkDrop"
      ]
    }
  }
}
```

###### Output

```html
<!-- Main menu -->
<a href="/" title="">Home</a>
<a href="/collections/all" title="">Catalog</a>
<a href="/pages/contact" title="">Contact</a>


<!-- Footer menu -->
<a href="/search" title="">Search</a>
```

---



<a id="objects-localization"></a>


## localization

Information about the countries and languages that are available on a store.

The `localization` object can be used in a [localization form](https://shopify.dev/docs/api/liquid/tags/form#form-localization).

To learn about how to offer localization options in your theme, refer to [Support multiple currencies and languages](https://shopify.dev/themes/internationalization/multiple-currencies-languages).

### Properties

* * **available\_​countries**

    array of [country](https://shopify.dev/docs/api/liquid/objects/country)

  * The countries that are available on the store.

  * **available\_​languages**

    array of [shop\_locale](https://shopify.dev/docs/api/liquid/objects/shop_locale)

  * The languages that are available on the store.

  * **country**

    [country](https://shopify.dev/docs/api/liquid/objects/country)

  * The currently selected country on the storefront.

  * **language**

    [shop\_locale](https://shopify.dev/docs/api/liquid/objects/shop_locale)

  * The currently selected language on the storefront.

  * **market**

    [market](https://shopify.dev/docs/api/liquid/objects/market)

  * The currently selected market on the storefront.

###### Example

```json
{
  "available_countries": [],
  "available_languages": [],
  "country": {},
  "language": {},
  "market": {}
}
```

---



<a id="objects-location"></a>


## location

A store [location](https://help.shopify.com/manual/locations).

***

**Tip:** The \<code>location\</code> object is defined only if one or more locations has \<a href="https://help.shopify.com/manual/shipping/setting-up-and-managing-your-shipping/local-methods/local-pickup">local pickup\</a> enabled.

***

### Properties

* * **address**

    [address](https://shopify.dev/docs/api/liquid/objects/address)

  * The location's address.

  * **id**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The location's ID.

  * **latitude**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The latitude of the location's address.

    If the location's address isn't verified, then `nil` is returned.

  * **longitude**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The longitude of the location's address.

    If the location's address isn't verified, then `nil` is returned.

  * **metafields**

  * The [metafields](https://shopify.dev/docs/api/liquid/objects/metafield) applied to the location.

    **Tip:** To learn about how to create metafields, refer to \<a href="/apps/metafields/manage">Create and manage metafields\</a> or visit the \<a href="https://help.shopify.com/manual/metafields">Shopify Help Center\</a>.

  * **name**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The location's name.

###### Example

```json
{
  "address": {},
  "id": 62002462785,
  "latitude": 43.6556377,
  "longitude": -79.38681079999999,
  "metafields": {},
  "name": "123 Edward Street"
}
```

---



<a id="objects-market"></a>


## market

A group of one or more regions of the world that a merchant is targeting for sales.

To learn more about markets, refer to [Shopify Markets](https://shopify.dev/docs/apps/markets). To make sure that visitors interact with the optimal version of a store using Shopify Markets, refer to [Detect and set a visitor's optimal localization](https://shopify.dev/docs/themes/markets/localization-discovery).

### Properties

* * **handle**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The [handle](https://shopify.dev/docs/api/liquid/basics#handles) of the market.

  * **id**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The ID of the market.

  * **metafields**

    array of [metafield](https://shopify.dev/docs/api/liquid/objects/metafield)

  * The [metafields](https://shopify.dev/docs/api/liquid/objects/metafield) applied to the market.

    **Tip:** To learn about how to create metafields, refer to \<a href="/apps/metafields/manage">Create and manage metafields\</a> or visit the \<a href="https://help.shopify.com/manual/metafields">Shopify Help Center\</a>.

###### Example

```json
{
  "handle": "ca",
  "id": 6157828161,
  "metafields": {}
}
```

---



<a id="objects-measurement"></a>


## measurement

A measurement from one of the following metafield types:

* `dimension`
* `volume`
* `weight`

***

**Tip:** To learn about metafield types, refer to \<a href="/apps/metafields/types">Metafield types\</a>.

***

### Properties

* * **type**

    [string](https://shopify.dev/docs/api/liquid/basics#string) from a set of values

  * The measurement type.

    | Possible values |
    | - |
    | dimension |
    | volume |
    | weight |

  * **unit**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The measurement unit.

  * **value**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The measurement value.

###### Example

```json
{
  "type": "volume",
  "unit": "mL",
  "value": "500.0"
}
```

---



<a id="objects-media"></a>


## media

An abstract media object that can represent the following object types:

* [`image`](https://shopify.dev/docs/api/liquid/objects/image)
* [`model`](https://shopify.dev/docs/api/liquid/objects/model)
* [`video`](https://shopify.dev/docs/api/liquid/objects/video)
* [`external_video`](https://shopify.dev/docs/api/liquid/objects/external_video)

The `media` object can be returned by the [`product.media` array](https://shopify.dev/docs/api/liquid/objects/product#product-media) or a [`file_reference` metafield](https://shopify.dev/apps/metafields/types).

You can use [media filters](https://shopify.dev/docs/api/liquid/filters/media-filters) to generate URLs and media displays. To learn about how to use media in your theme, refer to [Support product media](https://shopify.dev/themes/product-merchandising/media/support-media).

***

**Note:** Each media type has unique properties in addition to the general \<code>media\</code> properties. To learn about these additional properties, refer to the reference for each type.

***

### Properties

* * **alt**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The alt text of the media.

  * **id**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The ID of the media.

  * **media\_​type**

    [string](https://shopify.dev/docs/api/liquid/basics#string) from a set of values

  * The media type.

    | Possible values |
    | - |
    | image |
    | model |
    | video |
    | external\_video |

    ExampleFilter for media of a specific type

    You can use the `media_type` property with the [`where` filter](https://shopify.dev/docs/api/liquid/filters/where) to filter the [`product.media` array](https://shopify.dev/docs/api/liquid/objects/product#product-media) for all media of a desired type.

    ##### Code

    ```liquid
    {% assign images = product.media | where: 'media_type', 'image' %}

    {% for image in images %}
      {{- image | image_url: width: 300 | image_tag }}
    {% endfor %}
    ```

    ##### Data

    ```json
    {
      "product": {
        "media": [
          "products/oil-dripping-into-jar.jpg"
        ]
      }
    }
    ```

    ##### Output

    ```html
    <img src="//polinas-potent-potions.myshopify.com/cdn/shop/products/oil-dripping-into-jar.jpg?v=1650399519&amp;width=300" alt="Viper venom" srcset="//polinas-potent-potions.myshopify.com/cdn/shop/products/oil-dripping-into-jar.jpg?v=1650399519&amp;width=300 300w" width="300" height="200">
    ```

  * **position**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The position of the media in the [`product.media` array](https://shopify.dev/docs/api/liquid/objects/product#product-media).

    If the source is a [`file_reference` metafield](https://shopify.dev/apps/metafields/types), then `nil` is returned.

  * **preview\_​image**

    [image](https://shopify.dev/docs/api/liquid/objects/image)

  * A preview image of the media.

    **Note:** Preview images don\&#39;t have an ID attribute.

###### Example

```json
{
  "alt": "Dandelion milk",
  "id": 21772527435841,
  "media_type": "image",
  "position": 1,
  "preview_image": {}
}
```

---



<a id="objects-metafield"></a>


## metafield

A [metafield](https://shopify.dev/apps/metafields) attached to a parent object.

To learn about how to access a metafield on a specific object, refer to [Access metafields](https://shopify.dev/docs/api/liquid/objects/metafield#metafield-access-metafields).

Metafields support [multiple data types](https://shopify.dev/apps/metafields/types), which determine the kind of information that's stored in the metafield. You can also output the metafield content in a type-specific format using [metafield filters](https://shopify.dev/docs/api/liquid/filters/metafield-filters).

***

**Note:** You can\&#39;t create metafields in Liquid. Metafields can be created in only the following ways:\</p> \<ul> \<li>\<a href="https://help.shopify.com/manual/metafields">In the Shopify admin\</a>\</li> \<li>\<a href="https://shopify.dev/apps/metafields">Through an app\</a>\</li> \</ul>

***

***

**Note:** Metafields of type \<code>integer\</code>, \<code>\<span class="PreventFireFoxApplyingGapToWBR">json\<wbr/>\_string\</span>\</code>, and \<code>string\</code> are older implementations that don\&#39;t have the properties noted on this page, and aren\&#39;t compatible with metafield filters. To learn more, refer to \<a href="/docs/api/liquid/objects/metafield#metafield-deprecated-metafields">Deprecated metafields\</a>.

***

### Properties

* * **list?**

    [boolean](https://shopify.dev/docs/api/liquid/basics#boolean)

  * Returns `true` if the metafield is a list type. Returns `false` if not.

    **Tip:** To learn about metafield types, refer to \<a href="/apps/metafields/types">Metafield types\</a>.

  * **type**

    [string](https://shopify.dev/docs/api/liquid/basics#string) from a set of values

  * The [type](https://shopify.dev/apps/metafields/types) of the metafield.

    | Possible values |
    | - |
    | single\_line\_text\_field |
    | multi\_line\_text\_field |
    | rich\_text\_field |
    | product\_reference |
    | collection\_reference |
    | variant\_reference |
    | page\_reference |
    | file\_reference |
    | number\_integer |
    | number\_decimal |
    | date |
    | date\_time |
    | url\_reference |
    | json |
    | boolean |
    | color |
    | weight |
    | volume |
    | dimension |
    | rating |
    | money |

  * **value**

  * The value of the metafield.

    The following table outlines the value format for each metafield type:

    | Type | Returned format |
    | - | - |
    | `single_line_text_field` `multi_line_text_field` | [A string](https://shopify.dev/docs/api/liquid/basics#string) |
    | `rich_text_field` | A field that supports headings, lists, links, bold, and italics |
    | `product_reference` | [A product object](https://shopify.dev/docs/api/liquid/objects/product) |
    | `collection_reference` | [A collection object](https://shopify.dev/docs/api/liquid/objects/collection) |
    | `variant_reference` | [A variant object](https://shopify.dev/docs/api/liquid/objects/variant) |
    | `page_reference` | [A page object](https://shopify.dev/docs/api/liquid/objects/page) |
    | `file_reference` | [A generic\_file object](https://shopify.dev/docs/api/liquid/objects/generic-file) [A media object (images and videos only)](https://shopify.dev/docs/api/liquid/objects/media) |
    | `number_integer` `number_decimal` | [A number](https://shopify.dev/docs/api/liquid/basics#number) |
    | `date` `date_time` | A date string. To format the string, use the [date](https://shopify.dev/docs/api/liquid/filters/date) filter. |
    | `url_reference` | [A url string](https://shopify.dev/docs/api/liquid/basics#string) |
    | `json` | [A JSON object](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON) |
    | `boolean` | [A boolean](https://shopify.dev/docs/api/liquid/basics#boolean) |
    | `color` | [A color object](https://shopify.dev/docs/api/liquid/objects/color) |
    | `weight` `volume` `dimension` | [A measurement object](https://shopify.dev/docs/api/liquid/objects/measurement) |
    | `rating` | [A rating object](https://shopify.dev/docs/api/liquid/objects/rating) |
    | `money` | [A money object, displayed in the customer's local (presentment) currency.](https://shopify.dev/docs/api/liquid/objects/money) |

###### Example

```json
{
  "list?": false,
  "type": "single_line_text_field",
  "value": "Take with a meal."
}
```

#### Access metafields

The access path for metafields consists of two layers:

* namespace - A grouping of metafields to prevent conflicts.
* key - The metafield name.

Given this, you can access the metafield object with the following syntax:

```liquid
{{ resource.metafields.namespace.key }}
```

```liquid
{{ resource.metafields.namespace.key }}
```

###### Code

```liquid
Type: {{ product.metafields.information.directions.type }}
Value: {{ product.metafields.information.directions.value }}
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
Type: single_line_text_field
Value: Take with a meal.
```

#### Accessing metafields of type `json`

The `value` property of metafields of type `json` returns a [JSON object](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON). You can access the properties of this object directly in Liquid, either by name or 0-based index. You can also iterate through the properties.

###### Code

```liquid
Temperature: {{ product.metafields.information.burn_temperature.value.temperature }}
Unit: {{ product.metafields.information.burn_temperature.value['unit'] }}

{% for property in product.metafields.information.burn_temperature.value -%}
  {{ property.first | capitalize }}: {{ property.last }}
{%- endfor %}
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
Temperature: 700
Unit: degrees

Temperature: 700
Unit: degrees
Scale: Fahrenheit
```

#### Accessing metafields of type `list`

The `value` property of metafields of type `list` returns an array. You can iterate through the array to access the values.

###### Code

```liquid
{% for item in product.metafields.information.combine_with.value -%}
  {{ item.product.title }}
{%- endfor %}
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
Blue Mountain Flower
Charcoal
```

If the list is of type `single_line_text_field`, then you can access the items in the array directly in Liquid using a 0-based index.

###### Code

```liquid
First item in list: {{ product.metafields.information.pickup_locations.value[0] }}
Last item in list: {{ product.metafields.information.pickup_locations.value.last }}
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
First item in list: Ottawa
Last item in list: Vancouver
```

#### Determining the length of a list metafield

The way that you determine the length of a list metafield depends on its type:

* **[Reference types](https://shopify.dev/docs/apps/custom-data/metafields/types#reference-types)**: Use the `count` property to determine the list length.
* **Non-reference types**: These lists are rendered as arrays. Use the [`size`](https://shopify.dev/docs/api/liquid/filters/size) filter to determine the number of items in the array.

###### Code

```liquid
# list.product_reference
Number of similar products: {{ product.metafields.information.similar_products.value.count }}

# list.single_line_text_field
Number of pickup locations: {{ product.metafields.information.pickup_locations.value.size }}
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
# list.product_reference
Number of similar products: 2

# list.single_line_text_field
Number of pickup locations: 4
```

#### Deprecated metafields

Deprecated metafields are older metafield types with limited functionality. The following metafield types are deprecated:

* `integer`
* `json_string`
* `string`

These metafield types don't have the same metafield object properties mentioned in the previous sections. Instead, they return the metafield value directly.

The following table outlines the value type for each deprecated metafield type:

| Metafield type | Value type |
| - | - |
| `integer` | [An integer](https://shopify.dev/docs/api/liquid/basics#number) |
| `json_string` | [A JSON object](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON) |
| `string` | [A string](https://shopify.dev/docs/api/liquid/basics#string) |

---



<a id="objects-metaobject"></a>


## metaobject

A metaobject entry, which includes the values for a set of [fields](https://shopify.dev/docs/api/liquid/objects#metafield). The set is defined by the parent [`metaobject_definition`](https://shopify.dev/docs/api/liquid/objects#metaobject_definition).

### Properties

* * **system**

    [metaobject\_system](https://shopify.dev/docs/api/liquid/objects/metaobject_system)

  * Basic information about the metaobject. These properties are grouped under the `system` object to avoid collisions between system property names and user-defined metaobject fields.

#### Directly accessible in

* [metaobject](https://shopify.dev/themes/architecture/templates/metaobject)

#### Returned by

* [metaobjects](https://shopify.dev/docs/api/liquid/objects/metaobjects)

#### Access metaobjects individually

The access path for a metaobject consists of two layers:

* type - The type of the parent metaobject definition.
* handle - The unique [handle](https://shopify.dev/docs/api/liquid/basics#handles) of the metaobject.

Given this, you can access a metaobject with the following syntax:

```liquid
{{ metaobjects.type.handle }}
```

```liquid
{{ metaobjects.type.handle }}
```

You can also use square bracket notation:

```liquid
{{ metaobjects['type']['handle'] }}
```

```liquid
{{ metaobjects['type']['handle'] }}
```

A metaobjects's field values can be accessed using the key of the desired field:

```liquid
{{ metaobjects.testimonials.homepage.title }}
{{ metaobjects['highlights']['washable'].image.value }}
```

```liquid
{{ metaobjects.testimonials.homepage.title }}
{{ metaobjects['highlights']['washable'].image.value }}
```

***

**Note:** When the \<a href="/apps/data-extensions/metaobjects/capabilities">\<code>publishable\</code> capability\</a> is enabled, a metaobject can only be accessed if its status is \<code>active\</code>. If its status is \<code>draft\</code>, then the return value is \<code>nil\</code>.

***

#### Usage in metaobject templates

Within a metaobject template, the `metaobject` Liquid object represents the metaobject drop being rendered by the template. You can access it directly as `{{ metaobject }}`.

Here's a basic example of accessing a field within the associated metaobject template:

```liquid
{{ metaobject.title.value }}
```

```liquid
{{ metaobject.title.value }}
```

In this example, replace `title` with the key of the field you want to access. This will output the value of that field for the current metaobject.

### Templates using metaobject

[Theme architecture](https://shopify.dev/themes/architecture/templates/metaobject)

[metaobject template](https://shopify.dev/themes/architecture/templates/metaobject)

---



<a id="objects-metaobject-definition"></a>


## metaobject\_​definition

A `metaobject_definition` defines the structure of a metaobject type for the store, which consists of a merchant-defined set of [field definitions](https://help.shopify.com/en/manual/metafields/metafield-definitions).

One or more corresponding [`metaobject`](https://shopify.dev/docs/api/liquid/objects#metaobject) objects contain values for the fields specified in the metaobject definition.

***

**Note:** When looping through metaobjects by accessing them using individual handles (e.g., \<code>\<span class="PreventFireFoxApplyingGapToWBR">metaobjects.T\<wbr/>Y\<wbr/>P\<wbr/>E\[handle]\</span>\</code>), you\&#39;re limited to 20 unique handles per page and can\&#39;t use \<a href="/docs/api/liquid/tags/paginate">pagination\</a>. To iterate over more metaobjects, instead use the \<code>values\</code> property, which supports pagination up to 250 entries per page.

***

### Properties

* * **values**

    array of [metaobject](https://shopify.dev/docs/api/liquid/objects/metaobject)

  * The [metaobjects](https://shopify.dev/docs/api/liquid/objects#metaobject) that follow the definition.

  * **values\_​count**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The total number of entries for the metaobject definition.

#### Loop over entries of a metaobject definition

If a metaobject definition has multiple metaobject entries, then you can loop over them using the `values` property. You can loop over a maximum of 50 entries in a metaobject definition. For example, you can display the field `author` for each metaobject using the following `forloop`:

```liquid
{% for testimonial in metaobjects.testimonials.values %}
  {{ testimonial.author.value }}
{% endfor %}
```

```liquid
{% for testimonial in metaobjects.testimonials.values %}
  {{ testimonial.author.value }}
{% endfor %}
```

***

**Note:** When the \<a href="/apps/data-extensions/metaobjects/capabilities">\<code>publishable\</code> capability\</a> is enabled, loops return only metaobjects with a status of \<code>active\</code>. Metaobjects with a status of \<code>draft\</code> are skipped.

***

---



<a id="objects-metaobject-system"></a>


## metaobject\_​system

Basic information about a [`metaobject`](https://shopify.dev/api/liquid/objects#metaobject). These properties are grouped under the `system` object to avoid collisions between system property names and user-defined metaobject fields.

### Properties

* * **handle**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The unique [handle](https://shopify.dev/api/liquid/basics#handles) of the metaobject.

  * **id**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The ID of the metaobject.

  * **type**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The type of the metaobject definition.

    This is a free-form string that's defined when the metaobject definition is created.

  * **url**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The relative URL of the metaobject.

    Only set for metaobjects that have the `online_store` capability.

#### Returned by

* [metaobject.system](https://shopify.dev/docs/api/liquid/objects/metaobject#metaobject-system)

#### Using the `metaobject_system` object

You can access the `metaobject_system` object and its properties through the metaobject's `system` property. You can use the following syntax:

```liquid
{{ metaobjects.testimonials["home_page"].system.id }}
```

```liquid
{{ metaobjects.testimonials["home_page"].system.id }}
```

You can also access `metaobject_system` properties when iterating over a list of metaobjects:

```liquid
{% for metaobject in product.metafields.custom.mixed_metaobject_list.value %}
  {% if metaobject.system.type == "testimonial" %}
    {% render 'testimonial' with metaobject as testimonial  %}
  {% else %}
    {{ metaobject.system.handle }}
  {% endif %}
{% endfor %}
```

```liquid
{% for metaobject in product.metafields.custom.mixed_metaobject_list.value %}
  {% if metaobject.system.type == "testimonial" %}
    {% render 'testimonial' with metaobject as testimonial  %}
  {% else %}
    {{ metaobject.system.handle }}
  {% endif %}
{% endfor %}
```

---



<a id="objects-metaobjects"></a>


## metaobjects

All of the [metaobjects](https://shopify.dev/docs/api/liquid/objects/metaobject) of the store.

Individual metaobjects can be accessed by specifying their type and handle. For more information, refer to [Access metaobjects individually](https://shopify.dev/docs/api/liquid/objects#metaobject-access-metaobjects-individually).

Additionally, it is possible to iterate over entries from a metaobject definition. For more information, refer to [Loop over entries of a metaobject definition](https://shopify.dev/docs/api/liquid/objects/metaobject_definition#metaobject_definition-loop-over-entries-of-a-metaobject-definition).

Metaobjects are created in the [Content](https://www.shopify.com/admin/content) page of the Shopify admin.

#### Directly accessible in

* Global

---



<a id="objects-model"></a>


## model

A 3D model uploaded as product media.

***

**Tip:** Use the \<a href="/docs/api/liquid/filters/model\_viewer\_tag">\<code>\<span class="PreventFireFoxApplyingGapToWBR">model\<wbr/>\_viewer\<wbr/>\_tag\</span>\</code> filter\</a> to output a \<a href="https://modelviewer.dev">Google model viewer component\</a> for the model.

***

### Properties

* * **alt**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The alt text of the model.

  * **id**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The ID of the model.

  * **media\_​type**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The media type of the model. Always returns `model`.

    ExampleFilter for media of a specific type

    You can use the `media_type` property with the [`where` filter](https://shopify.dev/docs/api/liquid/filters/where) to filter the [`product.media` array](https://shopify.dev/docs/api/liquid/objects/product#product-media) for all media of a desired type.

    ##### Code

    ```liquid
    {% assign models = product.media | where: 'media_type', 'model' %}

    {% for model in models %}
      {{- model | model_viewer_tag }}
    {% endfor %}
    ```

    ##### Data

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

    ##### Output

    ```html
    <model-viewer src="//polinas-potent-potions.myshopify.com/cdn/shop/3d/models/o/eb9388299ce0557c/WaterBottle.glb?v=0" camera-controls="true" style="--poster-color: transparent;" data-shopify-feature="1.12" alt="Potion bottle" poster="//polinas-potent-potions.myshopify.com/cdn/shop/products/WaterBottle_small.jpg?v=1655189057"></model-viewer>
    ```

  * **position**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The position of the model in the [`product.media`](https://shopify.dev/docs/api/liquid/objects/product#product-media) array.

  * **preview\_​image**

    [image](https://shopify.dev/docs/api/liquid/objects/image)

  * A preview image for the model.

  * **sources**

    array of [model\_source](https://shopify.dev/docs/api/liquid/objects/model_source)

  * The source files for the model.

###### Example

```json
{
  "alt": "Potion bottle",
  "id": 22064203137089,
  "media_type": "model",
  "position": 1,
  "preview_image": {},
  "sources": []
}
```

---



<a id="objects-model-source"></a>


## model\_​source

A model source file.

### Properties

* * **format**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The format of the model source file.

  * **mime\_​type**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the model source file.

  * **url**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The [CDN URL](https://shopify.dev/themes/best-practices/performance/platform#shopify-cdn) of the model source file.

###### Example

```json
{
  "format": "glb",
  "mime_type": "model/gltf-binary",
  "url": "//polinas-potent-potions.myshopify.com/cdn/shop/3d/models/o/eb9388299ce0557c/WaterBottle.glb?v=0"
}
```

---



<a id="objects-money"></a>


## money

A money value, in the the customer's local (presentment) currency.

***

**Tip:** Use \<a href="/docs/api/liquid/filters/money-filters">money filters\</a> to output a formatted price.

***

### Properties

* * **currency**

    [currency](https://shopify.dev/docs/api/liquid/objects/currency)

  * The customer's local (presentment) currency.

###### Example

```json
{
  "currency": {}
}
```

#### Referencing money objects directly

When a money object is referenced directly, the money value in cents is returned.

###### Code

```liquid
{{ product.metafields.details.price_per_100g.value }}
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
1796
```

---



<a id="objects-order"></a>


## order

An [order](https://help.shopify.com/manual/orders).

### Properties

* * **attributes**

  * The attributes on the order.

    If there are no attributes on the order, then `nil` is returned.

    **Tip:** Attributes are \<a href="https://shopify.dev/themes/architecture/templates/cart#support-cart-notes-and-attributes">collected with the cart\</a>.

    ExampleOutput the attributes

    ```liquid
    <ul>
      {% for attribute in order.attributes -%}
        <li><strong>{{ attribute.first }}:</strong> {{ attribute.last }}</li>
      {%- endfor %}
    </ul>
    ```

    ```liquid

      {% for attribute in order.attributes -%}
        
    {{ attribute.first }}: {{ attribute.last }}

      {%- endfor %}
    ```

  * **billing\_​address**

    [address](https://shopify.dev/docs/api/liquid/objects/address)

  * The billing address of the order.

  * **cancel\_​reason**

    [string](https://shopify.dev/docs/api/liquid/basics#string) from a set of values

  * The reason that the order was cancelled.

    | Possible values | Description |
    | - | - |
    | customer | Customer changed/cancelled order |
    | declined | Payment declined |
    | fraud | Fraudulent order |
    | inventory | Items unavailable |
    | staff | Staff error |
    | other | Other |

  * **cancel\_​reason\_​label**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The localized version of the [cancellation reason](https://shopify.dev/docs/api/liquid/objects/order#order-cancel_reason) for the order.

    **Tip:** Use this property to output the cancellation reason on the storefront.

  * **cancelled**

    [boolean](https://shopify.dev/docs/api/liquid/basics#boolean)

  * Returns `true` if the order was cancelled. Returns `false` if not.

  * **cancelled\_​at**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * A timestamp for when the order was cancelled.

    **Tip:** Use the \<a href="/docs/api/liquid/filters/date">\<code>date\</code> filter\</a> to format the timestamp.

  * **cart\_​level\_​discount\_​applications**

    array of [discount\_application](https://shopify.dev/docs/api/liquid/objects/discount_application)

  * The discount applications that apply at the order level.

  * **confirmation\_​number**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * A randomly generated alpha-numeric identifier for the order that may be shown to the customer instead of the sequential order name. For example, "XPAV284CT", "R50KELTJP" or "35PKUN0UJ". This value isn't guaranteed to be unique.

  * **created\_​at**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * A timestamp for when the order was created.

    **Tip:** Use the \<a href="/docs/api/liquid/filters/date">\<code>date\</code> filter\</a> to format the timestamp.

  * **customer**

    [customer](https://shopify.dev/docs/api/liquid/objects/customer)

  * The customer that placed the order.

  * **customer\_​order\_​url**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The URL for the new order details page.

    Customer accounts includes a list of Buyers Orders and an Order Details View. This liquid function exposes a URL to a specific Orders Details in customer accounts. [Setup process for the new order details page](https://help.shopify.com/en/manual/customers/customer-accounts/new-customer-accounts) can be found in the help center.

  * **customer\_​url**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The URL for the customer to view the order in their account.

  * **discount\_​applications**

    array of [discount\_application](https://shopify.dev/docs/api/liquid/objects/discount_application)

  * All of the discount applications for the order and its line items.

  * **email**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The email that's associated with the order.

    If no email is associated with the order, then `nil` is returned.

  * **financial\_​status**

    [string](https://shopify.dev/docs/api/liquid/basics#string) from a set of values

  * The order's financial status.

    | Possible values |
    | - |
    | authorized |
    | expired |
    | paid |
    | partially\_paid |
    | partially\_refunded |
    | pending |
    | refunded |
    | unpaid |
    | voided |

  * **financial\_​status\_​label**

  * The localized version of the [financial status](https://shopify.dev/docs/api/liquid/objects/order#order-financial_status) of the order.

    **Tip:** Use this property to output the financial status on the storefront.

  * **fulfillment\_​status**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The fulfillment status of the order.

  * **fulfillment\_​status\_​label**

    [string](https://shopify.dev/docs/api/liquid/basics#string) from a set of values

  * The localized version of the [fulfillment status](https://shopify.dev/docs/api/liquid/objects/order#order-fulfillment_status) of the order.

    **Tip:** Use this property to output the fulfillment status on the storefront.

    | Possible values |
    | - |
    | complete |
    | fulfilled |
    | partial |
    | restocked |
    | unfulfilled |

  * **id**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The ID of the order.

  * **item\_​count**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The number of items in the order.

  * **line\_​items**

    array of [line\_item](https://shopify.dev/docs/api/liquid/objects/line_item)

  * The line items in the order.

  * **line\_​items\_​subtotal\_​price**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The sum of the prices of all of the line items in the order in the currency's subunit, after any line item discounts have been applied.

    The value is output in the customer's local (presentment) currency.

    For currencies without subunits, such as JPY and KRW, tenths and hundredths of a unit are appended. For example, 1000 Japanese yen is output as 100000.

    **Tip:** Use \<a href="/docs/api/liquid/filters/money-filters">money filters\</a> to output a formatted amount.

  * **metafields**

  * The [metafields](https://shopify.dev/docs/api/liquid/objects/metafield) applied to the order.

    **Tip:** To learn about how to create metafields, refer to \<a href="/apps/metafields/manage">Create and manage metafields\</a> or visit the \<a href="https://help.shopify.com/manual/metafields">Shopify Help Center\</a>.

  * **name**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The name of the order.

  * **note**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The note on the order.

    If there's no note on the order, then `nil` is returned.

    **Tip:** Notes are \<a href="https://shopify.dev/themes/architecture/templates/cart#support-cart-notes-and-attributes">collected with the cart\</a>.

  * **order\_​number**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The integer representation of the order [name](https://shopify.dev/docs/api/liquid/objects/order#order-name).

  * **order\_​status\_​url**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The URL for the [**Order status** page](https://help.shopify.com/manual/orders/status-tracking) for the order.

  * **phone**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The phone number associated with the order.

  * **pickup\_​in\_​store?**

    [boolean](https://shopify.dev/docs/api/liquid/basics#boolean)

  * Returns `true` if the order is a store pickup order.

  * **shipping\_​address**

    [address](https://shopify.dev/docs/api/liquid/objects/address)

  * The shipping address of the order.

  * **shipping\_​methods**

    array of [shipping\_method](https://shopify.dev/docs/api/liquid/objects/shipping_method)

  * The shipping methods for the order.

  * **shipping\_​price**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The shipping price of the order in the currency's subunit.

    The value is output in the customer's local (presentment) currency.

    For currencies without subunits, such as JPY and KRW, tenths and hundredths of a unit are appended. For example, 1000 Japanese yen is output as 100000.

    **Tip:** Use \<a href="/docs/api/liquid/filters/money-filters">money filters\</a> to output a formatted amount.

  * **subtotal\_​line\_​items**

    array of [line\_item](https://shopify.dev/docs/api/liquid/objects/line_item)

  * The non-tip line items in the order.

    **Note:** These line items are used to calculate the the \<a href="/docs/api/liquid/objects/order#order-subtotal\_price">subtotal price\</a>.

  * **subtotal\_​price**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The sum of the prices of the [subtotal line items](https://shopify.dev/docs/api/liquid/objects/order#order-subtotal_line_items) in the currency's subunit, after any line item or cart discounts have been applied.

    The value is output in the customer's local (presentment) currency.

    For currencies without subunits, such as JPY and KRW, tenths and hundredths of a unit are appended. For example, 1000 Japanese yen is output as 100000.

    **Tip:** Use \<a href="/docs/api/liquid/filters/money-filters">money filters\</a> to output a formatted amount.

  * **tags**

    array of [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The [tags](https://help.shopify.com/manual/shopify-admin/productivity-tools/using-tags) on the order.

    The tags are returned in alphabetical order.

  * **tax\_​lines**

    array of [tax\_line](https://shopify.dev/docs/api/liquid/objects/tax_line)

  * The tax lines on the order.

  * **tax\_​price**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The total amount of taxes applied to the order in the currency's subunit.

    The value is output in the customer's local (presentment) currency.

    For currencies without subunits, such as JPY and KRW, tenths and hundredths of a unit are appended. For example, 1000 Japanese yen is output as 100000.

    **Tip:** Use \<a href="/docs/api/liquid/filters/money-filters">money filters\</a> to output a formatted amount.

  * **total\_​discounts**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The total amount of all discounts applied to the order in the currency's subunit.

    The value is output in the customer's local (presentment) currency.

    For currencies without subunits, such as JPY and KRW, tenths and hundredths of a unit are appended. For example, 1000 Japanese yen is output as 100000.

    **Tip:** Use \<a href="/docs/api/liquid/filters/money-filters">money filters\</a> to output a formatted amount.

  * **total\_​duties**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The sum of all duties applied to the line items in the order in the currency's subunit.

    If there are no duties, then `nil` is returned. The value is output in the customer's local (presentment) currency.

    For currencies without subunits, such as JPY and KRW, tenths and hundredths of a unit are appended. For example, 1000 Japanese yen is output as 100000.

    **Tip:** Use \<a href="/docs/api/liquid/filters/money-filters">money filters\</a> to output a formatted amount.

  * **total\_​net\_​amount**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The net amount of the order in the currency's subunit.

    The amount is calculated after refunds are applied, so is equal to `order.total_price` minus `order.total_refunded_amount`.

    The value is output in the customer's local (presentment) currency.

    For currencies without subunits, such as JPY and KRW, tenths and hundredths of a unit are appended. For example, 1000 Japanese yen is output as 100000.

    **Tip:** Use \<a href="/docs/api/liquid/filters/money-filters">money filters\</a> to output a formatted amount.

  * **total\_​price**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The total price of the order in the currency's subunit.

    **Note:** The total price is calculated before refunds are applied. Use \<a href="/docs/api/liquid/objects/order#order-total\_net\_amount">\<code>\<span class="PreventFireFoxApplyingGapToWBR">order.total\<wbr/>\_net\<wbr/>\_amount\</span>\</code>\</a> to output the total minus any refunds.

    The value is output in the customer's local (presentment) currency.

    For currencies without subunits, such as JPY and KRW, tenths and hundredths of a unit are appended. For example, 1000 Japanese yen is output as 100000.

    **Tip:** Use \<a href="/docs/api/liquid/filters/money-filters">money filters\</a> to output a formatted amount.

  * **total\_​refunded\_​amount**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The total amount that's been refunded from the order in the currency's subunit.

    The value is output in the customer's local (presentment) currency.

    For currencies without subunits, such as JPY and KRW, tenths and hundredths of a unit are appended. For example, 1000 Japanese yen is output as 100000.

    **Tip:** Use \<a href="/docs/api/liquid/filters/money-filters">money filters\</a> to output a formatted amount.

  * **transactions**

    array of [transaction](https://shopify.dev/docs/api/liquid/objects/transaction)

  * The transactions of the order.

### Deprecated Properties

* * **discounts**

    [discount](https://shopify.dev/docs/api/liquid/objects/discount)

    Deprecated

  * The discounts on the order.

    **Deprecated:**

    Deprecated because not all discount types and details are captured.

    The `order.discounts` property has been replaced by [`order.discount_applications`](https://shopify.dev/docs/api/liquid/objects/order#order-discount_applications).

###### Example

```json
{
  "attributes": {},
  "billing_address": {},
  "cancel_reason": null,
  "cancel_reason_label": null,
  "cancelled": false,
  "cancelled_at": null,
  "cart_level_discount_applications": [],
  "confirmation_number": "0YMJHPM8U",
  "created_at": "2022-04-29 11:15:46 -0400",
  "customer": {},
  "customer_order_url": "https://shopify.com/56174706753/account/orders/4295688749121?locale=en&region_country=CA&buyer_flags=eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJwb2xpbmFzLXBvdGVudC1wb3Rpb25zLm15c2hvcGlmeS5jb20iLCJmbGFncyI6W10sImV4cCI6MTc3ODEyNzQ4NSwibmJmIjoxNzc3NTIyNjg1fQ.RTzuPnzQQyhom-iGDqOnR8HBDNz1nP31hEpsxrCBzIk",
  "customer_url": "https://polinas-potent-potions.myshopify.com/account/orders/8be02e56c658bcd1f034d28c496fddd9",
  "discount_applications": [],
  "discounts": null,
  "email": "cornelius.potionmaker@gmail.com",
  "financial_status": "paid",
  "financial_status_label": "Paid",
  "fulfillment_status": "partial",
  "fulfillment_status_label": "Partial",
  "id": 4295688749121,
  "item_count": 6,
  "line_items": [],
  "line_items_subtotal_price": "492.93",
  "metafields": {},
  "name": "#1001",
  "note": null,
  "order_number": 1001,
  "order_status_url": "https://polinas-potent-potions.myshopify.com/56174706753/orders/8be02e56c658bcd1f034d28c496fddd9/authenticate?key=4f9baf2b8ebd0f75ec73eb9bac6e4519",
  "phone": null,
  "pickup_in_store?": false,
  "shipping_address": {},
  "shipping_methods": [],
  "shipping_price": "0.00",
  "subtotal_line_items": [],
  "subtotal_price": "492.93",
  "tags": [],
  "tax_lines": [],
  "tax_price": "0.00",
  "total_discounts": "0.00",
  "total_duties": null,
  "total_net_amount": "492.93",
  "total_price": "492.93",
  "total_refunded_amount": "0.00",
  "transactions": []
}
```

### Templates using order

[Theme architecture](https://shopify.dev/themes/architecture/templates/customers-order)

[customers/order template](https://shopify.dev/themes/architecture/templates/customers-order)

---



<a id="objects-page"></a>


## page

A [page](https://help.shopify.com/manual/online-store/themes/theme-structure/pages) on a store.

### Properties

* * **author**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The author of the page.

  * **content**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The content of the page.

  * **handle**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The [handle](https://shopify.dev/docs/api/liquid/basics#handles) of the page.

  * **id**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The ID of the page.

  * **metafields**

  * The [metafields](https://shopify.dev/docs/api/liquid/objects/metafield) applied to the page.

    **Tip:** To learn about how to create metafields, refer to \<a href="/apps/metafields/manage">Create and manage metafields\</a> or visit the \<a href="https://help.shopify.com/manual/metafields">Shopify Help Center\</a>.

  * **published\_​at**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * A timestamp for when the page was published.

    **Tip:** Use the \<a href="/docs/api/liquid/filters/date">\<code>date\</code> filter\</a> to format the timestamp.

  * **template\_​suffix**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The name of the [custom template](https://shopify.dev/themes/architecture/templates#alternate-templates) assigned to the page.

    The name doesn't include the `page.` prefix, or the file extension (`.json` or `.liquid`).

    If a custom template isn't assigned to the page, then `nil` is returned.

  * **title**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The title of the page.

  * **url**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The relative URL of the page.

###### Example

```json
{
  "author": null,
  "content": "<p>Polina's Potent Potions was started by Polina in 1654.</p>\n<p>We use all-natural locally sourced ingredients for our potions.</p>",
  "handle": "about-us",
  "id": 83536642113,
  "metafields": {},
  "published_at": "2022-05-04 17:47:03 -0400",
  "template_suffix": "",
  "title": "About us",
  "url": {}
}
```

### Templates using page

[Theme architecture](https://shopify.dev/themes/architecture/templates/page)

[page template](https://shopify.dev/themes/architecture/templates/page)

---



<a id="objects-page-description"></a>


## page\_​description

The meta description of the current page.

The `page_description` object can be used to provide a brief description of a page for search engine listings and social media previews.

To learn about where to edit the meta description for a page, visit the [Shopify Help Center](https://help.shopify.com/manual/promoting-marketing/seo/adding-keywords#edit-the-title-and-meta-description-for-a-page).

#### Directly accessible in

* Global

---



<a id="objects-page-image"></a>


## page\_​image

An image to be shown in search engine listings and social media previews for the current page.

The resource's featured image for product and collection pages, and blog posts, is used. For all other pages, or pages where there's no featured image, the [social sharing image](https://help.shopify.com/manual/online-store/images/showing-social-media-thumbnail-images?#setting-the-social-sharing-image-in-your-admin) is used.

#### Open Graph fallback tags

The `page_image` object can be used for creating [Open Graph](https://ogp.me/) `og:image` meta tags.

If a theme doesn't include `og:image` tags for a page, then Shopify automatically generates the following tags using the `page_image` object:

* `og:image`
* `og:image:secure_url`
* `og:image:width`
* `og:image:height`

#### Directly accessible in

* Global

---



<a id="objects-page-title"></a>


## page\_​title

The page title of the current page.

The `page_title` object can be used to specify the title of page for search engine listings and social media previews.

To learn about where to edit the title for a page, visit the [Shopify Help Center](https://help.shopify.com/manual/promoting-marketing/seo/adding-keywords#edit-the-title-and-meta-description-for-a-page).

#### Directly accessible in

* Global

---



<a id="objects-pages"></a>


## pages

All of the [pages](https://shopify.dev/docs/api/liquid/objects/page) on a store.

#### Directly accessible in

* Global

You can access a specific page through the `pages` object using the page's [handle](https://shopify.dev/docs/api/liquid/basics#handles).

###### Code

```liquid
{{ pages.contact.title }}
{{ pages['about-us'].title }}
```

###### Output

```html
Contact
About us
```

#### Paginate the `pages` object

You can [paginate](https://shopify.dev/docs/api/liquid/tags/paginate) the `pages` object, allowing you to iterate over up to 50 pages at a time.

###### Code

```liquid
{% paginate pages by 2 -%}
  {% for page in pages -%}
    {{ page.title | link_to: page.url }}
  {%- endfor %}

  {{- paginate | default_pagination }}
{%- endpaginate %}
```

###### Output

```html
<a href="/pages/about-us" title="">About us</a>
<a href="/pages/contact" title="">Contact</a>

<span class="page current">1</span> <span class="page"><a href="/services/liquid_rendering/resource?page=2" title="">2</a></span> <span class="next"><a href="/services/liquid_rendering/resource?page=2" title="">Next &raquo;</a></span>
```

---



<a id="objects-paginate"></a>


## paginate

Information about the pagination inside a set of [`paginate` tags](https://shopify.dev/docs/api/liquid/tags/paginate).

***

**Tip:** Use the \<a href="/docs/api/liquid/filters/default\_pagination">\<code>\<span class="PreventFireFoxApplyingGapToWBR">default\<wbr/>\_pagination\</span>\</code> filter\</a> to output pagination links.

***

### Properties

* * **current\_​offset**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The total number of items on pages previous to the current page.

    For example, if you show 5 items per page and are on page 3, then the value of `paginate.current_offset` is 10.

    Limited to 24,999 see [Pagination Limits](https://shopify.dev/themes/best-practices/performance/platform#pagination-limits) for more information.

  * **current\_​page**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The page number of the current page.

    Limited to 25,000 see [Pagination Limits](https://shopify.dev/themes/best-practices/performance/platform#pagination-limits) for more information.

  * **items**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The total number of items to be paginated.

    For example, if you paginate a collection of 120 products, then the value of `paginate.items` is 120.

    Limited to 25,000 see [Pagination Limits](https://shopify.dev/themes/best-practices/performance/platform#pagination-limits) for more information.

  * **next**

    [part](https://shopify.dev/docs/api/liquid/objects/part)

  * The pagination part to go to the next page.

  * **page\_​param**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The URL parameter denoting the pagination.

    The default value is `page`.

    If you paginate over an array defined in a setting or a metafield list type, then a unique key is appended to page to allow the paginated list to operate independently from other lists on the page. For example, a paginated list defined in a setting might use the key `page_a9e329dc`.

  * **page\_​size**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The number of items displayed per page.

    Limited to 250.

  * **pages**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The total number of pages.

    Limited to 25,000 see [Pagination Limits](https://shopify.dev/themes/best-practices/performance/platform#pagination-limits) for more information.

  * **parts**

    array of [part](https://shopify.dev/docs/api/liquid/objects/part)

  * The pagination parts.

    Pagination parts are used to build pagination navigation.

  * **previous**

    [part](https://shopify.dev/docs/api/liquid/objects/part)

  * The pagination part to go to the previous page.

###### Example

```json
{
  "current_offset": 10,
  "current_page": 3,
  "items": 17,
  "next": {},
  "page_param": "page",
  "page_size": 5,
  "pages": 4,
  "parts": [],
  "previous": {}
}
```

---



<a id="objects-parent-relationship"></a>


## parent\_​relationship

Information about the parent relationship for a nested cart line item.

### Properties

* * **parent**

    [line\_item](https://shopify.dev/docs/api/liquid/objects/line_item)

  * The parent line item for the nested cart line item.

#### Returned by

* [line\_​item.parent\_​relationship](https://shopify.dev/docs/api/liquid/objects/line_item#line_item-parent_relationship)

---



<a id="objects-part"></a>


## part

A part in the navigation for pagination.

### Properties

* * **is\_​link**

    [boolean](https://shopify.dev/docs/api/liquid/basics#boolean)

  * Returns `true` if the part is a link. Returns `false` if not.

  * **title**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The page number associated with the part.

  * **url**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The URL of the part.

    It consists of the current page URL path with the pagination parameter for the current part appended.

###### Example

```json
{
  "is_link": true,
  "title": "2",
  "url": "/collections/all?page=2"
}
```

#### Create pagination navigation with `part`

You can create a pagination navigation by iterating over each `part` of a [`paginate` object](https://shopify.dev/docs/api/liquid/objects/paginate).

###### Code

```liquid
{% paginate collection.products by 5 -%}
  {% for part in paginate.parts -%}
    {% if part.is_link -%}
      {{ part.title | link_to: part.url}}
    {%- else -%}
      <span>{{ part.title }}</span>
    {% endif %}
  {%- endfor %}
{%- endpaginate %}
```

###### Data

```json
{
  "collection": {
    "products_count": 19
  }
}
```

###### Output

```html
<span>1</span>
    
<a href="/services/liquid_rendering/resource?page=2" title="">2</a>

<a href="/services/liquid_rendering/resource?page=3" title="">3</a>

<a href="/services/liquid_rendering/resource?page=4" title="">4</a>
```

---



<a id="objects-pending-payment-instruction-input"></a>


## pending\_​payment\_​instruction\_​input

Header-value pairs that make up the list of payment information specific to the payment method. This information can be be used by the customer to complete the transaction offline.

### Properties

* * **header**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The header of the payment instruction. These are payment method-specific. Example: "Entity" and "Reference" for Multibanco

  * **value**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * Contains the corresponding values to the headers of the payment instruction.

#### Returned by

* [transaction.buyer\_​pending\_​payment\_​instructions](https://shopify.dev/docs/api/liquid/objects/transaction#transaction-buyer_pending_payment_instructions)

---



<a id="objects-policy"></a>


## policy

A [store policy](https://help.shopify.com/manual/checkout-settings/refund-privacy-tos), such as a privacy or return policy.

### Properties

* * **body**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The content of the policy.

  * **id**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The ID of the policy.

  * **title**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The title of the policy.

  * **url**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The relative URL of the policy.

###### Example

```json
{
  "body": "<p>We have a 30-day return policy, which means you have 30 days after receiving your item to request a return. ...</p>",
  "id": 23805034561,
  "title": "Refund policy",
  "url": "/policies/refund-policy"
}
```

---



<a id="objects-powered-by-link"></a>


## powered\_​by\_​link

Creates an HTML link element that links to a localized version of `shopify.com`, based on the locale of the store.

#### Directly accessible in

* Global

###### Code

```liquid
{{ powered_by_link }}
```

###### Output

```html
<a target="_blank" rel="nofollow" href="https://www.shopify.com?utm_campaign=poweredby&amp;utm_medium=shopify&amp;utm_source=onlinestore">Powered by Shopify</a>
```

---



<a id="objects-predictive-search"></a>


## predictive\_​search

Information about the results from a predictive search query through the [Predictive Search API](https://shopify.dev/api/ajax/reference/predictive-search#get-locale-search-suggest).

***

**Note:** The \<code>\<span class="PreventFireFoxApplyingGapToWBR">predictive\<wbr/>\_search\</span>\</code> object returns results only when rendered in a section using the Predictive Search API and the \<a href="/api/section-rendering">Section Rendering API\</a>. To learn about how to include predictive search in your theme, refer to \<a href="/themes/navigation-search/search/predictive-search">Add predictive search to your theme\</a>.

***

### Properties

* * **performed**

    [boolean](https://shopify.dev/docs/api/liquid/basics#boolean)

  * Returns `true` when being referenced inside a section that's been rendered using the Predictive Search API and the Section Rendering API. Returns `false` if not.

  * **resources**

    [predictive\_search\_resources](https://shopify.dev/docs/api/liquid/objects/predictive_search_resources)

  * The resources associated with the query.

    You can check whether any resources of a specific type were returned using the [`size` filter](https://shopify.dev/docs/api/liquid/filters/size).

    ```liquid
    {% if predictive_search.resources.articles.size > 0 %}
      {% for article in predictive_search.resources.articles %}
        {{ article.title }}
      {% endfor %}
    {% endif %}
    ```

    ```liquid
    {% if predictive_search.resources.articles.size > 0 %}
      {% for article in predictive_search.resources.articles %}
        {{ article.title }}
      {% endfor %}
    {% endif %}
    ```

  * **terms**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The entered search terms.

    **Tip:** Use the \<a href="/docs/api/liquid/filters/highlight">\<code>highlight\</code> filter\</a> to highlight the search terms in search results content.

  * **types**

    array of [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The object types that the search was performed on.

    Searches can be performed on the following object types:

    * [`article`](https://shopify.dev/docs/api/liquid/objects/article)
    * [`collection`](https://shopify.dev/docs/api/liquid/objects/collection)
    * [`page`](https://shopify.dev/docs/api/liquid/objects/page)
    * [`product`](https://shopify.dev/docs/api/liquid/objects/product)

    **Note:** The types are determined by the \<a href="/api/ajax/reference/predictive-search#query-parameters">\<code>type\</code> query parameter\</a>.

###### Example

```json
{
  "performed": true,
  "resources": {},
  "terms": "potion",
  "types": []
}
```

---



<a id="objects-predictive-search-resources"></a>


## predictive\_​search\_​resources

Contains arrays of objects for each resource type that can be returned by a [predictive search query](https://shopify.dev/api/ajax/reference/predictive-search#get-locale-search-suggest).

You can check whether any resources of a specific type were returned using the [`size` filter](https://shopify.dev/docs/api/liquid/filters/size).

```liquid
{% if predictive_search.resources.articles.size > 0 %}
  {% for article in predictive_search.resources.articles %}
    {{ article.title }}
  {% endfor %}
{% endif %}
```

```liquid
{% if predictive_search.resources.articles.size > 0 %}
  {% for article in predictive_search.resources.articles %}
    {{ article.title }}
  {% endfor %}
{% endif %}
```

### Properties

* * **articles**

    array of [article](https://shopify.dev/docs/api/liquid/objects/article)

  * The articles associated with the query.

  * **collections**

    array of [collection](https://shopify.dev/docs/api/liquid/objects/collection)

  * The collections associated with the query.

  * **pages**

    array of [page](https://shopify.dev/docs/api/liquid/objects/page)

  * The pages associated with the query.

  * **products**

    array of [product](https://shopify.dev/docs/api/liquid/objects/product)

  * The products associated with the query.

###### Example

```json
{
  "articles": [],
  "collections": [],
  "pages": [],
  "products": []
}
```

---



<a id="objects-product"></a>


## product

A [product](https://help.shopify.com/manual/products) in the store.

### Properties

* * **available**

    [boolean](https://shopify.dev/docs/api/liquid/basics#boolean)

  * Returns `true` if at least one of the variants of the product is available. Returns `false` if not.

    For a variant to be available, it needs to meet one of the following criteria:

    * The `variant.inventory_quantity` is greater than 0.
    * The `variant.inventory_policy` is set to `continue`.
    * The `variant.inventory_management` is `nil`.
    * The variant has an associated [delivery profile](https://shopify.dev/docs/apps/selling-strategies/purchase-options/deferred/shipping-delivery/delivery-profiles) with a valid shipping rate.

  * **category**

    [taxonomy\_category](https://shopify.dev/docs/api/liquid/objects/taxonomy_category)

  * The taxonomy category for the product

  * **collections**

    array of [collection](https://shopify.dev/docs/api/liquid/objects/collection)

  * The collections that the product belongs to.

    **Note:** Collections that aren\&#39;t \<a href="https://help.shopify.com/manual/products/collections/make-collections-available">available\</a> on the Online Store sales channel aren\&#39;t included.

  * **compare\_​at\_​price**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The lowest **compare at** price of any variants of the product in the currency's subunit.

    The value is output in the customer's local (presentment) currency.

    For currencies without subunits, such as JPY and KRW, tenths and hundredths of a unit are appended. For example, 1000 Japanese yen is output as 100000.

    **Tip:** Use \<a href="/docs/api/liquid/filters/money-filters">money filters\</a> to output a formatted price.

  * **compare\_​at\_​price\_​max**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The highest **compare at** price of any variants of the product in the currency's subunit.

    The value is output in the customer's local (presentment) currency.

    For currencies without subunits, such as JPY and KRW, tenths and hundredths of a unit are appended. For example, 1000 Japanese yen is output as 100000.

    **Tip:** Use \<a href="/docs/api/liquid/filters/money-filters">money filters\</a> to output a formatted price.

  * **compare\_​at\_​price\_​min**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The lowest **compare at** price of any variants of the product in the currency's subunit. This is the same as `product.compare_at_price`.

    The value is output in the customer's local (presentment) currency.

    For currencies without subunits, such as JPY and KRW, tenths and hundredths of a unit are appended. For example, 1000 Japanese yen is output as 100000.

    **Tip:** Use \<a href="/docs/api/liquid/filters/money-filters">money filters\</a> to output a formatted price.

  * **compare\_​at\_​price\_​varies**

    [boolean](https://shopify.dev/docs/api/liquid/basics#boolean)

  * Returns `true` if the variant **compare at** prices of the product vary. Returns `false` if not.

  * **content**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The description of the product.

    **Note:** This is the same value as \<a href="/docs/api/liquid/objects/product#product-description">\<code>product.description\</code>\</a>.

  * **created\_​at**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * A timestamp for when the product was created.

    **Tip:** Use the \<a href="/docs/api/liquid/filters/date">\<code>date\</code> filter\</a> to format the timestamp.

  * **description**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The description of the product.

    **Note:** This is the same value as \<a href="/docs/api/liquid/objects/product#product-content">\<code>product.content\</code>\</a>.

  * **featured\_​image**

    [image](https://shopify.dev/docs/api/liquid/objects/image)

  * The first (featured) image attached to the product.

  * **featured\_​media**

    [media](https://shopify.dev/docs/api/liquid/objects/media)

  * The first (featured) media attached to the product.

    **Note:** In search results or a filtered collection, the \<a href="/docs/api/liquid/objects/media">media\</a> of the most relevant variant is returned. Relevancy is based on search terms and applied filters.

    **Tip:** You can use \<a href="/docs/api/liquid/filters/media-filters">media filters\</a> to output media URLs and displays. To learn about how to include media in your theme, refer to \<a href="/themes/product-merchandising/media/support-media">Support product media\</a>.

  * **first\_​available\_​variant**

    [variant](https://shopify.dev/docs/api/liquid/objects/variant)

  * The first available variant of the product.

    For a variant to be available, it needs to meet one of the following criteria:

    * The `variant.inventory_quantity` is greater than 0.
    * The `variant.inventory_policy` is set to `continue`.
    * The `variant.inventory_management` is `nil`.

  * **gift\_​card?**

    [boolean](https://shopify.dev/docs/api/liquid/basics#boolean)

  * Returns `true` if the product is a gift card. Returns `false` if not.

  * **handle**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The [handle](https://shopify.dev/docs/api/liquid/basics#handles) of the product.

  * **has\_​only\_​default\_​variant**

    [boolean](https://shopify.dev/docs/api/liquid/basics#boolean)

  * Returns `true` if the product doesn't have any options. Returns `false` if not.

  * **id**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The ID of the product.

  * **images**

    array of [image](https://shopify.dev/docs/api/liquid/objects/image)

  * The images attached to the product.

  * **media**

    array of [media](https://shopify.dev/docs/api/liquid/objects/media)

  * The media attached to the product, sorted by the date it was added to the product.

    **Tip:** You can use \<a href="/docs/api/liquid/filters/media-filters">media filters\</a> to output media URLs and displays. To learn about how to include media in your theme, refer to \<a href="/themes/product-merchandising/media/support-media">Support product media\</a>.

  * **metafields**

  * The [metafields](https://shopify.dev/docs/api/liquid/objects/metafield) applied to the product.

    **Tip:** To learn about how to create metafields, refer to \<a href="/apps/metafields/manage">Create and manage metafields\</a> or visit the \<a href="https://help.shopify.com/manual/metafields">Shopify Help Center\</a>.

  * **options**

    array of [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The option names of the product.

    ExampleOutput the options

    You can use the [`size` filter](https://shopify.dev/docs/api/liquid/filters/size) with dot notation to determine how many options a product has.

    ##### Code

    ```liquid
    {% if product.options.size > 0 -%}
      {% for option in product.options -%}
        - {{ option }}
      {%- endfor %}
    {%- endif %}
    ```

    ##### Data

    ```json
    {
      "product": {
        "options": [
          "Size",
          "Strength"
        ]
      }
    }
    ```

    ##### Output

    ```html
    - Size
    - Strength
    ```

  * **options\_​by\_​name**

  * Allows you to access a specific [product option](https://shopify.dev/docs/api/liquid/objects/product_option) by its name.

    ExampleOutput the values for a specific option

    When accessing a specific option, the name is case-insensitive.

    ##### Code

    ```liquid
    <label>
      Strength
      <select>
        {%- for value in product.options_by_name['strength'].values %}
        <option>{{ value }}</option>
        {%- endfor %}
      </select>
    </label>
    ```

    ##### Data

    ```json
    {
      "product": {
        "options_by_name": {}
      }
    }
    ```

    ##### Output

    ```html
    <label>
      Strength
      <select>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
    </label>
    ```

  * **options\_​with\_​values**

    array of [product\_option](https://shopify.dev/docs/api/liquid/objects/product_option)

  * The options on the product.

  * **price**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The lowest price of any variants of the product in the currency's subunit.

    **Note:** This is the same value as \<a href="/docs/api/liquid/objects/product#product-price\_min">\<code>\<span class="PreventFireFoxApplyingGapToWBR">product.price\<wbr/>\_min\</span>\</code>\</a>.

    The value is output in the customer's local (presentment) currency.

    For currencies without subunits, such as JPY and KRW, tenths and hundredths of a unit are appended. For example, 1000 Japanese yen is output as 100000.

    **Tip:** Use \<a href="/docs/api/liquid/filters/money-filters">money filters\</a> to output a formatted price.

  * **price\_​max**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The highest price of any variants of the product in the currency's subunit.

    The value is output in the customer's local (presentment) currency.

    For currencies without subunits, such as JPY and KRW, tenths and hundredths of a unit are appended. For example, 1000 Japanese yen is output as 100000.

    **Tip:** Use \<a href="/docs/api/liquid/filters/money-filters">money filters\</a> to output a formatted price.

  * **price\_​min**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The lowest price of any variants of the product in the currency's subunit.

    **Note:** This is the same value as \<a href="/docs/api/liquid/objects/product#product-price">\<code>product.price\</code>\</a>.

    The value is output in the customer's local (presentment) currency.

    For currencies without subunits, such as JPY and KRW, tenths and hundredths of a unit are appended. For example, 1000 Japanese yen is output as 100000.

    **Tip:** Use \<a href="/docs/api/liquid/filters/money-filters">money filters\</a> to output a formatted price.

  * **price\_​varies**

    [boolean](https://shopify.dev/docs/api/liquid/basics#boolean)

  * Returns `true` if the product's variant prices vary. Returns `false` if not.

  * **published\_​at**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * A timestamp for when the product was published.

    **Tip:** Use the \<a href="/docs/api/liquid/filters/date">\<code>date\</code> filter\</a> to format the timestamp.

  * **quantity\_​price\_​breaks\_​configured?**

    [boolean](https://shopify.dev/docs/api/liquid/basics#boolean)

  * Returns `true` if the product has at least one variant with quantity price breaks in the current customer context. Returns `false` if not.

  * **requires\_​selling\_​plan**

    [boolean](https://shopify.dev/docs/api/liquid/basics#boolean)

  * Returns `true` if all of the variants of the product require a selling plan. Returns `false` if not.

    **Note:** A variant requires a selling plan if \<a href="/docs/api/liquid/objects/variant#variant-requires\_selling\_plan">\<code>\<span class="PreventFireFoxApplyingGapToWBR">variant.requires\<wbr/>\_selling\<wbr/>\_plan\</span>\</code>\</a> is \<code>true\</code>.

  * **selected\_​or\_​first\_​available\_​selling\_​plan\_​allocation**

    [selling\_plan\_allocation](https://shopify.dev/docs/api/liquid/objects/selling_plan_allocation)

  * The currently selected, or first available, selling plan allocation.

    The following logic is used to determine which selling plan allocation is returned:

    | Selling plan allocation | Return criteria |
    | - | - |
    | The currently selected allocation | Returned if a variant and selling plan are selected. The selected variant is determined by the `variant` URL parameter, and the selected selling plan is determined by the `selling_plan` URL parameter. |
    | The first allocation on the first available variant | Returned if no allocation is currently selected. |
    | The first allocation on the first variant | Returned if no allocation is currently selected, and there are no available variants. |

    If the product doesn't have any selling plans, then `nil` is returned.

  * **selected\_​or\_​first\_​available\_​variant**

    [variant](https://shopify.dev/docs/api/liquid/objects/variant)

  * The currently selected or first available variant of the product.

    If a variant is selected, it will be returned, regardless of its availability. Otherwise, the first available variant is returned. If no available variant exists, the first variant is returned.

    A selected variant is determined by the following criteria:

    * On product pages, it is based on the variant ID set in the `variant` URL parameter.
    * In search results and filtered collections, it is the most relevant variant based on search terms and applied filters.

    For a variant to be available, it needs to meet one of the following criteria:

    * The `variant.inventory_quantity` is greater than 0.
    * The `variant.inventory_policy` is set to `continue`.
    * The `variant.inventory_management` is `nil`.

  * **selected\_​selling\_​plan**

    [selling\_plan](https://shopify.dev/docs/api/liquid/objects/selling_plan)

  * The currently selected selling plan.

    If no selling plan is selected, then `nil` is returned.

    **Note:** The selected selling plan is determined by the \<code>\<span class="PreventFireFoxApplyingGapToWBR">selling\<wbr/>\_plan\</span>\</code> URL parameter.

  * **selected\_​selling\_​plan\_​allocation**

    [selling\_plan\_allocation](https://shopify.dev/docs/api/liquid/objects/selling_plan_allocation)

  * The currently selected selling plan allocation for the currently selected variant.

    If no variant and selling plan are selected, then `nil` is returned.

    **Note:** The selected variant is determined by the \<code>variant\</code> URL parameter, and the selected selling plan is determined by the \<code>\<span class="PreventFireFoxApplyingGapToWBR">selling\<wbr/>\_plan\</span>\</code> URL parameter.

  * **selected\_​variant**

    [variant](https://shopify.dev/docs/api/liquid/objects/variant)

  * The currently selected variant of the product.

    If no variant is currently selected, then `nil` is returned.

    **Note:** On product pages, it is based on the variant ID set in the \<code>variant\</code> URL parameter. In search results and filtered collections, it is the most relevant variant based on search terms and applied filters.

  * **selling\_​plan\_​groups**

    array of [selling\_plan\_group](https://shopify.dev/docs/api/liquid/objects/selling_plan_group)

  * The selling plan groups that the variants of the product are included in.

  * **tags**

    array of [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The [tags](https://help.shopify.com/manual/shopify-admin/productivity-tools/using-tags) of the product.

    **Note:** The tags are returned in alphabetical order.

  * **template\_​suffix**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The name of the [custom template](https://shopify.dev/themes/architecture/templates#alternate-templates) of the product.

    The name doesn't include the `product.` prefix, or the file extension (`.json` or `.liquid`).

    If a custom template isn't assigned to the product, then `nil` is returned.

  * **title**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The title of the product.

  * **type**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The type of the product.

  * **url**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The relative URL of the product.

    If a product is rendered in search results or a filtered collection, then the URL contains the `variant` parameter of the most relevant variant.

    ```liquid
    /products/gorgeous-wooden-computer?variant=1234567890
    ```

    ```liquid
    /products/gorgeous-wooden-computer?variant=1234567890
    ```

    If a product is rendered as a [product recommendation](https://shopify.dev/docs/themes/product-merchandising/recommendations), then the URL contains tracking parameters:

    ```liquid
    /products/gorgeous-wooden-computer?pr_choice=default&pr_prod_strat=description&pr_rec_pid=13&pr_ref_pid=17&pr_seq=alternating
    ```

    ```liquid
    /products/gorgeous-wooden-computer?pr_choice=default&pr_prod_strat=description&pr_rec_pid=13&pr_ref_pid=17&pr_seq=alternating
    ```

  * **variants**

    array of [variant](https://shopify.dev/docs/api/liquid/objects/variant)

  * The variants of the product.

    **Note:** Returns a maximum of 250 variants when unpaginated. Tip: Use the \<a href="/docs/api/liquid/tags/paginate">paginate\</a> tag to choose how many variants to show per page, up to a limit of 50.

  * **variants\_​count**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The total number of variants for the product.

  * **vendor**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The vendor of the product.

###### Example

```json
{
  "available": true,
  "category": {},
  "collections": [],
  "compare_at_price": "25.00",
  "compare_at_price_max": "25.00",
  "compare_at_price_min": "25.00",
  "compare_at_price_varies": false,
  "content": "<h3>Are you low on health? Well we've got the potion just for you!</h3>\n<p>Just need a top up? Almost dead? In between? No need to worry because we have a range of sizes and strengths!</p>",
  "created_at": "2022-04-13 14:46:16 -0400",
  "description": "<h3>Are you low on health? Well we've got the potion just for you!</h3>\n<p>Just need a top up? Almost dead? In between? No need to worry because we have a range of sizes and strengths!</p>",
  "featured_image": {},
  "featured_media": {},
  "first_available_variant": {},
  "gift_card?": false,
  "handle": "health-potion",
  "has_only_default_variant": false,
  "id": 6786188247105,
  "images": [],
  "media": [],
  "metafields": {},
  "options": [
    "Size",
    "Strength"
  ],
  "options_by_name": {},
  "options_with_values": [],
  "price": "10.00",
  "price_max": "22.00",
  "price_min": "10.00",
  "price_varies": true,
  "published_at": "2022-04-13 14:53:34 -0400",
  "quantity_price_breaks_configured?": false,
  "requires_selling_plan": false,
  "selected_or_first_available_selling_plan_allocation": {},
  "selected_or_first_available_variant": {},
  "selected_selling_plan": null,
  "selected_selling_plan_allocation": null,
  "selected_variant": null,
  "selling_plan_groups": [],
  "tags": [
    "healing"
  ],
  "template_suffix": "",
  "title": "Health potion",
  "type": {},
  "url": {},
  "variants": [],
  "variants_count": 9,
  "vendor": "Polina's Potent Potions"
}
```

### Templates using product

[Theme architecture](https://shopify.dev/themes/architecture/templates/product)

[product template](https://shopify.dev/themes/architecture/templates/product)

---



<a id="objects-product-option"></a>


## product\_​option

A product option, such as size or color.

### Properties

* * **name**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The name of the product option.

  * **position**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The 1-based index of the product option in the [`product.options_with_values` array](https://shopify.dev/docs/api/liquid/objects/product#product-options_with_values).

  * **selected\_​value**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The currently selected product option value.

    If no value is currently selected, then the first available variant is returned.

  * **values**

    array of [product\_option\_value](https://shopify.dev/docs/api/liquid/objects/product_option_value)

  * The possible values for the product option.

###### Example

```json
{
  "name": "Size",
  "position": 1,
  "selected_value": {},
  "values": []
}
```

---



<a id="objects-product-option-value"></a>


## product\_​option\_​value

A product option value, such as "red" for the option "color".

### Properties

* * **available**

    [boolean](https://shopify.dev/docs/api/liquid/basics#boolean)

  * Whether or not the option value is available.

    In the context of the selected values for previous options, indicates whether the current option value has any purchaseable combinations in any subsequent options, or whether the current option value is purchaseable if there are no subsequent options. For example, if a product comes in Color/Size/Material and Red/Small/Cotton is selected, `available` will indicate:

    * Color: Whether any variants for the Color option value are available for purchase.
    * Size: Whether any variants for Color:Red and the Size option value are available for purchase.
    * Material: Whether any variants for Color:Red, Size:Small, and the Material option value are available for purchase.

  * **id**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The ID of the product option value.

  * **name**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The name of the product option value.

  * **product\_​url**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * Returns a URL if the option value may be associated with another product, nil otherwise.

    ```liquid
    /products/gorgeous-wooden-computer
    ```

    ```liquid
    /products/gorgeous-wooden-computer
    ```

  * **selected**

    [boolean](https://shopify.dev/docs/api/liquid/basics#boolean)

  * Whether or not the option value is selected.

  * **swatch**

    [swatch](https://shopify.dev/docs/api/liquid/objects/swatch)

  * Returns a [swatch](https://shopify.dev/docs/api/liquid/objects/swatch) drop for the product option value. If there is no saved `color` or `image` content for the swatch, then the return value is `nil`.

  * **variant**

    [variant](https://shopify.dev/docs/api/liquid/objects/variant)

  * The variant associated with this option value combined with the other currently selected option values, if one exists.

    If this option value is selected (`selected == true`), this returns the `selected_or_first_available_variant`.

    If this option value is not selected (`selected == false`), this returns the variant that is associated with the current option value and the other currently selected option values.

    Using optionValue.variant is the recommended way to render product option values availability. For more information, refer to [rendering option value availability.](https://shopify.dev/docs/storefronts/themes/product-merchandising/variants/support-high-variant-products#option-value-availability)

###### Example

```json
{
  "available": true,
  "id": 2070385033281,
  "name": "Bronze",
  "product_url": null,
  "selected": true,
  "swatch": {},
  "variant": {}
}
```

---



<a id="objects-quantity-price-break"></a>


## quantity\_​price\_​break

The per-unit price of a variant when purchasing the minimum quantity or more.

### Properties

* * **minimum\_​quantity**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The minimum quantity required to qualify for the price break.

  * **price**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The price for the quantity price break once the minimum quantity is met.

    The value is the price in the customer's local (presentment) currency.

    **Tip:** Use \<a href="/docs/api/liquid/filters/money-filters">money filters\</a> to output a formatted price.

###### Example

```json
{
  "minimum_quantity": "10",
  "price": "20.00"
}
```

---



<a id="objects-quantity-rule"></a>


## quantity\_​rule

A variant order quantity rule.

If no rule exists, then a default value is returned.

This rule can be set as part of a [B2B catalog](https://help.shopify.com/manual/b2b/catalogs/quantity-pricing).

***

**Note:** The default quantity rule is \<code>min=1,max=null,increment=1\</code>.

***

### Properties

* * **increment**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The number the order quantity can be incremented by. The default value is `1`.

  * **max**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The maximum order quantity.

    If there is no maximum quantity, then `nil` is returned.

  * **min**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The minimum order quantity. The default value is `1`.

###### Example

```json
{
  "min": 5,
  "max": 100,
  "increment": 5
}
```

#### The variant order quantity rule

###### Code

```liquid
{{ product.variants.first.quantity_rule }}
```

###### Data

```json
{
  "product": {
    "variants": [
      {
        "quantity_rule": {
          "min": 1,
          "max": null,
          "increment": 1
        }
      },
      {
        "quantity_rule": {
          "min": 1,
          "max": null,
          "increment": 1
        }
      },
      {
        "quantity_rule": {
          "min": 1,
          "max": null,
          "increment": 1
        }
      },
      {
        "quantity_rule": {
          "min": 1,
          "max": null,
          "increment": 1
        }
      },
      {
        "quantity_rule": {
          "min": 1,
          "max": null,
          "increment": 1
        }
      },
      {
        "quantity_rule": {
          "min": 1,
          "max": null,
          "increment": 1
        }
      },
      {
        "quantity_rule": {
          "min": 1,
          "max": null,
          "increment": 1
        }
      },
      {
        "quantity_rule": {
          "min": 1,
          "max": null,
          "increment": 1
        }
      },
      {
        "quantity_rule": {
          "min": 1,
          "max": null,
          "increment": 1
        }
      }
    ]
  }
}
```

###### Output

```html
{"min"=>1, "max"=>nil, "increment"=>1}
```

---



<a id="objects-rating"></a>


## rating

Information for a [`rating` type](https://shopify.dev/apps/metafields/types) metafield.

***

**Tip:** To learn about metafield types, refer to \<a href="/apps/metafields/types">Metafield types\</a>.

***

### Properties

* * **rating**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The rating value.

  * **scale\_​max**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The maximum value of the rating scale.

  * **scale\_​min**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The minimum value of the rating scale.

###### Example

```json
{
  "rating": "4.5",
  "scale_max": "5.0",
  "scale_min": "0.0"
}
```

---



<a id="objects-recipient"></a>


## recipient

A recipient that is associated with a [gift card](https://help.shopify.com/manual/products/gift-card-products).

### Properties

* * **email**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The email of the recipient.

  * **name**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The full name of the recipient.

  * **nickname**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The nickname of the recipient.

###### Example

```json
{
  "email": "cornelius.potionmaker@gmail.com",
  "name": "Cornelius Potionmaker",
  "nickname": "Cornelius"
}
```

### Templates using recipient

[Theme architecture](https://shopify.dev/themes/architecture/templates/gift-card-liquid)

[gift\_card.liquid template](https://shopify.dev/themes/architecture/templates/gift-card-liquid)

---



<a id="objects-recommendations"></a>


## recommendations

Product recommendations for a specific product based on sales data, product descriptions, and collection relationships.

Product recommendations become more accurate over time as new orders and product data become available. To learn more about how product recommendations are generated, refer to [Product recommendations](https://shopify.dev/themes/product-merchandising/recommendations).

***

**Note:** The \<code>recommendations\</code> object returns products only when rendered in a section using the \<a href="/api/ajax/reference/product-recommendations">Product Recommendations API\</a> and the \<a href="/api/section-rendering">Section Rendering API\</a>. To learn about how to include product recommendations in your theme, refer to \<a href="/themes/product-merchandising/recommendations/show-product-recommendations">Show product recommendations\</a>.

***

### Properties

* * **intent**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The recommendation intent.

    If `performed?` is `false`, then `nil` is returned.

  * **performed?**

    [boolean](https://shopify.dev/docs/api/liquid/basics#boolean)

  * Returns `true` when being referenced inside a section that's been rendered using the Product Recommendations API and the Section Rendering API. Returns `false` if not.

  * **products**

    array of [product](https://shopify.dev/docs/api/liquid/objects/product)

  * The recommended products.

    If `performed?` is `false`, then an [EmptyDrop](https://shopify.dev/docs/api/liquid/basics#emptydrop) is returned.

  * **products\_​count**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The number of recommended products.

    If `performed?` is `false`, then 0 is returned.

###### Example

```json
{
  "products": [],
  "products_count": 4,
  "performed?": true
}
```

---



<a id="objects-remote-details"></a>


## remote\_​details

Information about the remote source from which the object came from.

Remote details can only be accessed on an object that comes from a remote source, such as a product from another store.

### Properties

* * **shop**

    [remote\_shop](https://shopify.dev/docs/api/liquid/objects/remote_shop)

  * Information about the store that the remote object came from.

  * **type**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * Provides context on how the remote object was surfaced. Currently the only supported value is "seller", but this may be expanded in the future.

#### Returned by

* [remote\_​product](https://shopify.dev/docs/api/liquid/objects/remote_product)
* [remote\_​product.remote\_​details](https://shopify.dev/docs/api/liquid/objects/remote_product#remote_product-remote_details)

---



<a id="objects-remote-product"></a>


## remote\_​product

A product that comes from a remote source, inheriting all [product](https://shopify.dev/docs/api/liquid/objects/product) functionality and also providing additional context about the remote source.

### Properties

* * **available**

    [boolean](https://shopify.dev/docs/api/liquid/basics#boolean)

  * Returns `true` if at least one of the variants of the product is available. Returns `false` if not.

    For a variant to be available, it needs to meet one of the following criteria:

    * The `variant.inventory_quantity` is greater than 0.
    * The `variant.inventory_policy` is set to `continue`.
    * The `variant.inventory_management` is `nil`.
    * The variant has an associated [delivery profile](https://shopify.dev/docs/apps/selling-strategies/purchase-options/deferred/shipping-delivery/delivery-profiles) with a valid shipping rate.

  * **category**

    [taxonomy\_category](https://shopify.dev/docs/api/liquid/objects/taxonomy_category)

  * The taxonomy category for the product

  * **compare\_​at\_​price**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The lowest **compare at** price of any variants of the product in the currency's subunit.

    The value is output in the customer's local (presentment) currency.

    For currencies without subunits, such as JPY and KRW, tenths and hundredths of a unit are appended. For example, 1000 Japanese yen is output as 100000.

    **Tip:** Use \<a href="/docs/api/liquid/filters/money-filters">money filters\</a> to output a formatted price.

  * **compare\_​at\_​price\_​max**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The highest **compare at** price of any variants of the product in the currency's subunit.

    The value is output in the customer's local (presentment) currency.

    For currencies without subunits, such as JPY and KRW, tenths and hundredths of a unit are appended. For example, 1000 Japanese yen is output as 100000.

    **Tip:** Use \<a href="/docs/api/liquid/filters/money-filters">money filters\</a> to output a formatted price.

  * **compare\_​at\_​price\_​min**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The lowest **compare at** price of any variants of the product in the currency's subunit. This is the same as `product.compare_at_price`.

    The value is output in the customer's local (presentment) currency.

    For currencies without subunits, such as JPY and KRW, tenths and hundredths of a unit are appended. For example, 1000 Japanese yen is output as 100000.

    **Tip:** Use \<a href="/docs/api/liquid/filters/money-filters">money filters\</a> to output a formatted price.

  * **compare\_​at\_​price\_​varies**

    [boolean](https://shopify.dev/docs/api/liquid/basics#boolean)

  * Returns `true` if the variant **compare at** prices of the product vary. Returns `false` if not.

  * **content**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The description of the product.

    **Note:** This is the same value as \<a href="/docs/api/liquid/objects/product#product-description">\<code>product.description\</code>\</a>.

  * **created\_​at**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * A timestamp for when the product was created.

    **Tip:** Use the \<a href="/docs/api/liquid/filters/date">\<code>date\</code> filter\</a> to format the timestamp.

  * **description**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The description of the product.

    **Note:** This is the same value as \<a href="/docs/api/liquid/objects/product#product-content">\<code>product.content\</code>\</a>. The description of remote products is modified to include a link to the remote store\&#39;s shipping and refund policies, if the shop has defined them.

  * **featured\_​image**

    [image](https://shopify.dev/docs/api/liquid/objects/image)

  * The first (featured) image attached to the product.

  * **featured\_​media**

    [media](https://shopify.dev/docs/api/liquid/objects/media)

  * The first (featured) media attached to the product.

    **Note:** Depending on rendering context, the featured media of remote products may be modified to include a badge highlighting the remote source.

    **Tip:** You can use \<a href="/docs/api/liquid/filters/media-filters">media filters\</a> to output media URLs and displays. To learn about how to include media in your theme, refer to \<a href="/themes/product-merchandising/media/support-media">Support product media\</a>.

  * **first\_​available\_​variant**

    [variant](https://shopify.dev/docs/api/liquid/objects/variant)

  * The first available variant of the product.

    For a variant to be available, it needs to meet one of the following criteria:

    * The `variant.inventory_quantity` is greater than 0.
    * The `variant.inventory_policy` is set to `continue`.
    * The `variant.inventory_management` is `nil`.

  * **gift\_​card?**

    [boolean](https://shopify.dev/docs/api/liquid/basics#boolean)

  * Returns `true` if the product is a gift card. Returns `false` if not.

  * **has\_​only\_​default\_​variant**

    [boolean](https://shopify.dev/docs/api/liquid/basics#boolean)

  * Returns `true` if the product doesn't have any options. Returns `false` if not.

  * **id**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The ID of the product.

  * **images**

    array of [image](https://shopify.dev/docs/api/liquid/objects/image)

  * The images attached to the product.

  * **media**

    array of [media](https://shopify.dev/docs/api/liquid/objects/media)

  * The media attached to the product, sorted by the date it was added to the product.

    **Note:** Depending on rendering context, the media of remote products may be modified to include a badge highlighting the remote source.

    **Tip:** You can use \<a href="/docs/api/liquid/filters/media-filters">media filters\</a> to output media URLs and displays. To learn about how to include media in your theme, refer to \<a href="/themes/product-merchandising/media/support-media">Support product media\</a>.

  * **metafields**

  * The metafields applied to the product.

    **Note:** Only standard metafields set by the remote store are included. Custom metafields are not.

  * **options**

    array of [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The option names of the product.

    ExampleOutput the options

    You can use the [`size` filter](https://shopify.dev/docs/api/liquid/filters/size) with dot notation to determine how many options a product has.

    ##### Code

    ```liquid
    {% if product.options.size > 0 -%}
      {% for option in product.options -%}
        - {{ option }}
      {%- endfor %}
    {%- endif %}
    ```

    ##### Data

    ```json
    {
      "product": {
        "options": [
          "Size",
          "Strength"
        ]
      }
    }
    ```

    ##### Output

    ```html
    - Size
    - Strength
    ```

  * **options\_​by\_​name**

  * Allows you to access a specific [product option](https://shopify.dev/docs/api/liquid/objects/product_option) by its name.

    ExampleOutput the values for a specific option

    When accessing a specific option, the name is case-insensitive.

    ##### Code

    ```liquid
    <label>
      Strength
      <select>
        {%- for value in product.options_by_name['strength'].values %}
        <option>{{ value }}</option>
        {%- endfor %}
      </select>
    </label>
    ```

    ##### Data

    ```json
    {
      "product": {
        "options_by_name": {}
      }
    }
    ```

    ##### Output

    ```html
    <label>
      Strength
      <select>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
    </label>
    ```

  * **options\_​with\_​values**

    array of [product\_option](https://shopify.dev/docs/api/liquid/objects/product_option)

  * The options on the product.

  * **price**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The lowest price of any variants of the product in the currency's subunit.

    **Note:** This is the same value as \<a href="/docs/api/liquid/objects/product#product-price\_min">\<code>\<span class="PreventFireFoxApplyingGapToWBR">product.price\<wbr/>\_min\</span>\</code>\</a>.

    The value is output in the customer's local (presentment) currency.

    For currencies without subunits, such as JPY and KRW, tenths and hundredths of a unit are appended. For example, 1000 Japanese yen is output as 100000.

    **Tip:** Use \<a href="/docs/api/liquid/filters/money-filters">money filters\</a> to output a formatted price.

  * **price\_​max**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The highest price of any variants of the product in the currency's subunit.

    The value is output in the customer's local (presentment) currency.

    For currencies without subunits, such as JPY and KRW, tenths and hundredths of a unit are appended. For example, 1000 Japanese yen is output as 100000.

    **Tip:** Use \<a href="/docs/api/liquid/filters/money-filters">money filters\</a> to output a formatted price.

  * **price\_​min**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The lowest price of any variants of the product in the currency's subunit.

    **Note:** This is the same value as \<a href="/docs/api/liquid/objects/product#product-price">\<code>product.price\</code>\</a>.

    The value is output in the customer's local (presentment) currency.

    For currencies without subunits, such as JPY and KRW, tenths and hundredths of a unit are appended. For example, 1000 Japanese yen is output as 100000.

    **Tip:** Use \<a href="/docs/api/liquid/filters/money-filters">money filters\</a> to output a formatted price.

  * **price\_​varies**

    [boolean](https://shopify.dev/docs/api/liquid/basics#boolean)

  * Returns `true` if the product's variant prices vary. Returns `false` if not.

  * **published\_​at**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * A timestamp for when the product was published.

    **Tip:** Use the \<a href="/docs/api/liquid/filters/date">\<code>date\</code> filter\</a> to format the timestamp.

  * **quantity\_​price\_​breaks\_​configured?**

    [boolean](https://shopify.dev/docs/api/liquid/basics#boolean)

  * Returns `true` if the product has at least one variant with quantity price breaks in the current customer context. Returns `false` if not.

  * **remote\_​details**

    [remote\_details](https://shopify.dev/docs/api/liquid/objects/remote_details)

  * Information about the remote source from which the remote product came from.

  * **requires\_​selling\_​plan**

    [boolean](https://shopify.dev/docs/api/liquid/basics#boolean)

  * Returns `true` if all of the variants of the product require a selling plan. Returns `false` if not.

    **Note:** A variant requires a selling plan if \<a href="/docs/api/liquid/objects/variant#variant-requires\_selling\_plan">\<code>\<span class="PreventFireFoxApplyingGapToWBR">variant.requires\<wbr/>\_selling\<wbr/>\_plan\</span>\</code>\</a> is \<code>true\</code>.

  * **selected\_​or\_​first\_​available\_​selling\_​plan\_​allocation**

    [selling\_plan\_allocation](https://shopify.dev/docs/api/liquid/objects/selling_plan_allocation)

  * The currently selected, or first available, selling plan allocation.

    The following logic is used to determine which selling plan allocation is returned:

    | Selling plan allocation | Return criteria |
    | - | - |
    | The currently selected allocation | Returned if a variant and selling plan are selected. The selected variant is determined by the `variant` URL parameter, and the selected selling plan is determined by the `selling_plan` URL parameter. |
    | The first allocation on the first available variant | Returned if no allocation is currently selected. |
    | The first allocation on the first variant | Returned if no allocation is currently selected, and there are no available variants. |

    If the product doesn't have any selling plans, then `nil` is returned.

  * **selected\_​or\_​first\_​available\_​variant**

    [variant](https://shopify.dev/docs/api/liquid/objects/variant)

  * The currently selected or first available variant of the product.

    If a variant is selected, it will be returned, regardless of its availability. Otherwise, the first available variant is returned. If no available variant exists, the first variant is returned.

    A selected variant is determined by the following criteria:

    * On product pages, it is based on the variant ID set in the `variant` URL parameter.
    * In search results and filtered collections, it is the most relevant variant based on search terms and applied filters.

    For a variant to be available, it needs to meet one of the following criteria:

    * The `variant.inventory_quantity` is greater than 0.
    * The `variant.inventory_policy` is set to `continue`.
    * The `variant.inventory_management` is `nil`.

  * **selected\_​selling\_​plan**

    [selling\_plan](https://shopify.dev/docs/api/liquid/objects/selling_plan)

  * The currently selected selling plan.

    If no selling plan is selected, then `nil` is returned.

    **Note:** The selected selling plan is determined by the \<code>\<span class="PreventFireFoxApplyingGapToWBR">selling\<wbr/>\_plan\</span>\</code> URL parameter.

  * **selected\_​selling\_​plan\_​allocation**

    [selling\_plan\_allocation](https://shopify.dev/docs/api/liquid/objects/selling_plan_allocation)

  * The currently selected selling plan allocation for the currently selected variant.

    If no variant and selling plan are selected, then `nil` is returned.

    **Note:** The selected variant is determined by the \<code>variant\</code> URL parameter, and the selected selling plan is determined by the \<code>\<span class="PreventFireFoxApplyingGapToWBR">selling\<wbr/>\_plan\</span>\</code> URL parameter.

  * **selected\_​variant**

    [variant](https://shopify.dev/docs/api/liquid/objects/variant)

  * The currently selected variant of the product.

    If no variant is currently selected, then `nil` is returned.

    **Note:** On product pages, it is based on the variant ID set in the \<code>variant\</code> URL parameter. In search results and filtered collections, it is the most relevant variant based on search terms and applied filters.

  * **selling\_​plan\_​groups**

    array of [selling\_plan\_group](https://shopify.dev/docs/api/liquid/objects/selling_plan_group)

  * The selling plan groups that the variants of the product are included in.

  * **template\_​suffix**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The name of the custom template assigned to the product.

    **Note:** Remote products have pre-determined dedicated template names, always prefixed with \&quot;remote.\&quot; This allows them to be managed independently of regular product templates. E.g. \&quot;remote.seller\&quot;

  * **title**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The title of the product.

    **Note:** In a cart or search suggestions context, the title of a remote product is appended with \&quot;Sold by {store name}\&quot;.

  * **type**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The type of the product.

  * **url**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The relative URL of the product.

    If a product is rendered in search results or a filtered collection, then the URL contains the `variant` parameter of the most relevant variant.

    ```liquid
    /products/gorgeous-wooden-computer?variant=1234567890
    ```

    ```liquid
    /products/gorgeous-wooden-computer?variant=1234567890
    ```

    If a product is rendered as a [product recommendation](https://shopify.dev/docs/themes/product-merchandising/recommendations), then the URL contains tracking parameters:

    ```liquid
    /products/gorgeous-wooden-computer?pr_choice=default&pr_prod_strat=description&pr_rec_pid=13&pr_ref_pid=17&pr_seq=alternating
    ```

    ```liquid
    /products/gorgeous-wooden-computer?pr_choice=default&pr_prod_strat=description&pr_rec_pid=13&pr_ref_pid=17&pr_seq=alternating
    ```

  * **variants**

    array of [variant](https://shopify.dev/docs/api/liquid/objects/variant)

  * The variants of the product.

    **Note:** Returns a maximum of 250 variants when unpaginated. Tip: Use the \<a href="/docs/api/liquid/tags/paginate">paginate\</a> tag to choose how many variants to show per page, up to a limit of 50.

  * **variants\_​count**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The total number of variants for the product.

  * **vendor**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The vendor of the product.

#### Directly accessible in

* [product](https://shopify.dev/themes/architecture/templates/product)

#### Returned by

* [collection.products](https://shopify.dev/docs/api/liquid/objects/collection#collection-products)
* [line\_​item.product](https://shopify.dev/docs/api/liquid/objects/line_item#line_item-product)
* [search.results](https://shopify.dev/docs/api/liquid/objects/search#search-results)
* [variant.product](https://shopify.dev/docs/api/liquid/objects/variant#variant-product)

### Templates using remote\_product

[Theme architecture](https://shopify.dev/themes/architecture/templates/product)

[product template](https://shopify.dev/themes/architecture/templates/product)

---



<a id="objects-remote-shop"></a>


## remote\_​shop

Information about a remote store.

Remote store information is only present via remote details, if the product comes from a remote source (i.e. a product from another store).

### Properties

* * **brand**

    [brand](https://shopify.dev/docs/api/liquid/objects/brand)

  * The [brand assets](https://help.shopify.com/manual/promoting-marketing/managing-brand-assets) for the remote store.

  * **name**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The name of the remote store.

  * **policies**

    array of [policy](https://shopify.dev/docs/api/liquid/objects/policy)

  * The shipping and refund policies for the remote store.

    The policies are set in the remote store's [Policies settings](https://www.shopify.com/admin/settings/legal).

  * **refund\_​policy**

    [policy](https://shopify.dev/docs/api/liquid/objects/policy)

  * The refund policy for the remote store.

  * **shipping\_​policy**

    [policy](https://shopify.dev/docs/api/liquid/objects/policy)

  * The shipping policy for the remote store.

#### Returned by

* [remote\_​product.remote\_​details](https://shopify.dev/docs/api/liquid/objects/remote_product#remote_product-remote_details)
* [remote\_​details.shop](https://shopify.dev/docs/api/liquid/objects/remote_details#remote_details-shop)

---



<a id="objects-request"></a>


## request

Information about the current URL and the associated page.

### Properties

* * **design\_​mode**

    [boolean](https://shopify.dev/docs/api/liquid/basics#boolean)

  * Returns `true` if the request is being made from within the theme editor. Returns `false` if not.

    You can use `request.design_mode` to control theme behavior depending on whether the theme is being viewed in the editor. For example, you can prevent session data from being tracked by tracking scripts in the theme editor.

    **Caution:** You shouldn\&#39;t use \<code>\<span class="PreventFireFoxApplyingGapToWBR">request.design\<wbr/>\_mode\</span>\</code> to change customer-facing functionality. The theme editor preview should match what the merchant\&#39;s customers see on the live store.

  * **host**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The domain that the request is hosted on.

  * **locale**

    [shop\_locale](https://shopify.dev/docs/api/liquid/objects/shop_locale)

  * The locale of the request.

  * **origin**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The protocol and host of the request.

    ExampleCreate a context-aware absolute URL

    You can use `request.origin` with any object, object property, or filter that returns a relative URL to build a context-aware absolute URL.

    ##### Code

    ```liquid
    {{ product.selected_variant.url | default: product.url | prepend: request.origin }}
    ```

    ##### Data

    ```json
    {
      "product": {
        "selected_variant": null,
        "url": "/products/health-potion"
      },
      "request": {
        "origin": "https://polinas-potent-potions.myshopify.com"
      }
    }
    ```

    ##### Output

    ```html
    https://polinas-potent-potions.myshopify.com/products/health-potion
    ```

  * **page\_​type**

    [string](https://shopify.dev/docs/api/liquid/basics#string) from a set of values

  * The type of page being requested.

    | Possible values |
    | - |
    | 404 |
    | article |
    | blog |
    | captcha |
    | cart |
    | collection |
    | list-collections |
    | customers/account |
    | customers/activate\_account |
    | customers/addresses |
    | customers/login |
    | customers/order |
    | customers/register |
    | customers/reset\_password |
    | gift\_card |
    | index |
    | metaobject |
    | page |
    | password |
    | policy |
    | product |
    | search |

  * **path**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The path of the request.

    **Note:** If the current path is for a page that doesn\&#39;t exist, then \<code>nil\</code> is returned.

  * **visual\_​preview\_​mode**

    [boolean](https://shopify.dev/docs/api/liquid/basics#boolean)

  * Returns `true` if the request is being made from within the theme editor's visual section preview. Returns `false` if not.

    You can use `request.visual_preview_mode` to control theme behavior depending on whether the theme is being viewed in the editor's visual section preview. For example, you can remove any scripts that interefere with how the section is displayed.

###### Example

```json
{
  "design_mode": false,
  "host": "polinas-potent-potions.myshopify.com",
  "locale": {},
  "origin": "https://polinas-potent-potions.myshopify.com",
  "page_type": "index",
  "path": "/",
  "visual_preview_mode": false
}
```

---



<a id="objects-robots"></a>


## robots

The default rule groups for the `robots.txt` file.

***

**Tip:** You can \<a href="/themes/seo/robots-txt">customize the \<code>robots.txt\</code> file\</a> with the \<a href="/themes/architecture/templates/robots-txt-liquid">\<code>robots.txt.liquid\</code> template\</a>.

***

### Properties

* * **default\_​groups**

    array of [group](https://shopify.dev/docs/api/liquid/objects/group)

  * The rule groups.

###### Example

```json
{
  "default_groups": []
}
```

### Templates using robots

[Theme architecture](https://shopify.dev/themes/architecture/templates/robots-txt-liquid)

[robots.txt.liquid template](https://shopify.dev/themes/architecture/templates/robots-txt-liquid)

---



<a id="objects-routes"></a>


## routes

Allows you to generate standard URLs for the storefront.

Using the `routes` object instead of hardcoding URLs helps ensure that your theme supports [multiple languages](https://shopify.dev/themes/internationalization/multiple-currencies-languages), as well as any possible changes in URL format.

### Properties

* * **account\_​addresses\_​url**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The [account addresses page](https://shopify.dev/themes/architecture/templates/customers-addresses) URL. Redirects to [customer accounts](https://help.shopify.com/en/manual/customers/customer-accounts/new-customer-accounts) when enabled.

  * **account\_​login\_​url**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The [account login page](https://shopify.dev/themes/architecture/templates/customers-login) URL. Redirects to [customer accounts](https://help.shopify.com/en/manual/customers/customer-accounts/new-customer-accounts) when enabled.

  * **account\_​logout\_​url**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The URL to log a customer out of their account. Redirects to [customer accounts](https://help.shopify.com/en/manual/customers/customer-accounts/new-customer-accounts) when enabled.

  * **account\_​profile\_​url**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The URL for the [customer accounts](https://help.shopify.com/en/manual/customers/customer-accounts/new-customer-accounts) profile page.

  * **account\_​recover\_​url**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The [password recovery page](https://shopify.dev/themes/architecture/templates/customers-reset-password) URL. Redirects to [customer accounts](https://help.shopify.com/en/manual/customers/customer-accounts/new-customer-accounts) when enabled.

  * **account\_​register\_​url**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The [account registration page](https://shopify.dev/themes/architecture/templates/customers-register) URL.

  * **account\_​url**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The [account page](https://help.shopify.com/manual/customers/customer-accounts) URL. Redirects to [customer accounts](https://help.shopify.com/en/manual/customers/customer-accounts/new-customer-accounts) when enabled.

  * **all\_​products\_​collection\_​url**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The all-products collection page URL.

    The all-products collection is automatically generated by Shopify and contains all products in the store.

  * **cart\_​add\_​url**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The URL for the [`/cart/add` Cart API endpoint](https://shopify.dev/api/ajax/reference/cart#post-locale-cart-add-js).

  * **cart\_​change\_​url**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The URL for the [`/cart/change` Cart API endpoint](https://shopify.dev/api/ajax/reference/cart#post-locale-cart-change-js).

  * **cart\_​clear\_​url**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The URL for the [`/cart/clear` Cart API endpoint](https://shopify.dev/api/ajax/reference/cart#post-locale-cart-clear-js).

  * **cart\_​update\_​url**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The URL for the [`/cart/update` Cart API endpoint](https://shopify.dev/api/ajax/reference/cart#post-locale-cart-update-js).

  * **cart\_​url**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The [cart page](https://shopify.dev/themes/architecture/templates/cart) URL.

  * **collections\_​url**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The [collection list page](https://shopify.dev/themes/architecture/templates/list-collections) URL.

  * **predictive\_​search\_​url**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The [Predictive Search API](https://shopify.dev/api/ajax/reference/predictive-search) URL.

    **Tip:** To learn about how to support predictive search in your theme, refer to \<a href="/themes/navigation-search/search/predictive-search">Add predictive search to your theme\</a>.

  * **product\_​recommendations\_​url**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The [Product Recommendations API](https://shopify.dev/api/ajax/reference/product-recommendations) URL.

  * **root\_​url**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The index (home page) URL.

  * **search\_​url**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The [search page](https://shopify.dev/themes/architecture/templates/search) URL.

  * **storefront\_​login\_​url**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * [Customer accounts](https://help.shopify.com/en/manual/customers/customer-accounts/new-customer-accounts) login page. Redirects to the storefront page the customer was on before visiting the login page.

###### Example

```json
{
  "account_addresses_url": "/account/addresses",
  "account_login_url": "/account/login",
  "account_logout_url": "/account/logout",
  "account_profile_url": "https://shopify.com/56174706753/account/profile?locale=en&region_country=CA&buyer_flags=eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJwb2xpbmFzLXBvdGVudC1wb3Rpb25zLm15c2hvcGlmeS5jb20iLCJmbGFncyI6W10sImV4cCI6MTc3ODEyNzQ4NSwibmJmIjoxNzc3NTIyNjg1fQ.RTzuPnzQQyhom-iGDqOnR8HBDNz1nP31hEpsxrCBzIk",
  "account_recover_url": "/account/recover",
  "account_register_url": "/account/register",
  "account_url": "/account",
  "all_products_collection_url": "/collections/all",
  "cart_add_url": "/cart/add",
  "cart_change_url": "/cart/change",
  "cart_clear_url": "/cart/clear",
  "cart_update_url": "/cart/update",
  "cart_url": "/cart",
  "collections_url": "/collections",
  "predictive_search_url": "/search/suggest",
  "product_recommendations_url": "/recommendations/products",
  "root_url": "/",
  "search_url": "/search",
  "storefront_login_url": "/customer_authentication/login?return_to=%2Fservices%2Fliquid_rendering%2Fresource%3Ffast_storefront_renderer%3D1&locale=en&ui_hint=full"
}
```

---



<a id="objects-rule"></a>


## rule

A rule for the `robots.txt` file, which tells crawlers which pages can, or can't, be accessed.

A rule consists of a directive, which can be either `Allow` or `Disallow`, and a value of the associated URL path.

For example:

```
Disallow: /policies/
```

You can output a rule directly, instead of referencing each of its properties.

***

**Tip:** You can \<a href="/themes/seo/robots-txt">customize the \<code>robots.txt\</code> file\</a> with the \<a href="/themes/architecture/templates/robots-txt-liquid">\<code>robots.txt.liquid\</code> template\</a>.

***

### Properties

* * **directive**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The directive of the rule.

  * **value**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The value of the rule.

###### Example

```json
{
  "directive": "Disallow",
  "value": "/*preview_script_id*"
}
```

---



<a id="objects-script"></a>


## script

Information about a Shopify Script.

***

**Caution:** Shopify Scripts will be sunset on August 28, 2025. Migrate your existing scripts to \<a href="/docs/api/functions">Shopify Functions\</a> before this date.

***

***

**Tip:** To learn more about Shopify Scripts and the Script Editor, visit the \<a href="https://help.shopify.com/manual/checkout-settings/script-editor">Shopify Help Center\</a>.

***

### Properties

* * **id**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The ID of the script.

  * **name**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The name of the script.

###### Example

```json
{
  "id": 209584193,
  "name": "10% off Whole bloodroot"
}
```

---



<a id="objects-scripts"></a>


## scripts

The active scripts, of each script type, on the store.

***

**Caution:** Shopify Scripts will be sunset on August 28, 2025. Migrate your existing scripts to \<a href="/docs/api/functions">Shopify Functions\</a> before this date.

***

There can be only one active script of each type. Currently, the only type accessible in Liquid is `cart_calculate_line_items`.

***

**Tip:** To learn more about Shopify Scripts and the Script Editor, visit the \<a href="https://help.shopify.com/manual/checkout-settings/script-editor">Shopify Help Center\</a>.

***

### Properties

* * **cart\_​calculate\_​line\_​items**

    [script](https://shopify.dev/docs/api/liquid/objects/script)

  * The active line item script.

    If no line item script is currently active, then `nil` is returned.

    ExampleAdvertise the currently active line item script

    ##### Code

    ```liquid
    {% if scripts.cart_calculate_line_items %}
      <p>Don't miss our current sale: <strong>{{ scripts.cart_calculate_line_items.name }}</strong></p>
    {% endif %}
    ```

    ##### Data

    ```json
    {
      "scripts": {
        "cart_calculate_line_items": {
          "name": "10% off Whole bloodroot"
        }
      }
    }
    ```

    ##### Output

    ```html
    <p>Don't miss our current sale: <strong>10% off Whole bloodroot</strong></p>
    ```

###### Example

```json
{
  "cart_calculate_line_items": {}
}
```

---



<a id="objects-search"></a>


## search

Information about a storefront search query.

To learn about storefront search and how to include it in your theme, refer to [Storefront search](https://shopify.dev/themes/navigation-search/search).

### Properties

* * **default\_​sort\_​by**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The default sort order of the search results, which is `relevance`.

  * **filters**

    array of [filter](https://shopify.dev/docs/api/liquid/objects/filter)

  * The filters that have been set up on the search page.

    Only filters that are relevant to the current search results are returned. If the search results contain more than 1000 products, then the array will be empty.

    **Tip:** To learn about how to set up filters in the admin, visit the \<a href="https://help.shopify.com/manual/online-store/themes/customizing-themes/storefront-filters">Shopify Help Center\</a>.

  * **performed**

    [boolean](https://shopify.dev/docs/api/liquid/basics#boolean)

  * Returns `true` if a search was successfully performed. Returns `false` if not.

  * **results**

  * The search result items.

    An item can be an [`article`](https://shopify.dev/docs/api/liquid/objects/article), a [`page`](https://shopify.dev/docs/api/liquid/objects/page), or a [`product`](https://shopify.dev/docs/api/liquid/objects/product).

    **Tip:** Use the \<a href="/docs/api/liquid/tags/paginate">paginate\</a> tag to choose how many results to show per page, up to a limit of 50.

    ExampleSearch result `object_type`

    Search results have an additional `object_type` property that returns the object type of the result.

    ##### Code

    ```liquid
    {% for item in search.results %}
    <!-- Result {{ forloop.index }}-->
    <h3>
      {{ item.title | link_to: item.url }}
    </h3>

    {% if item.object_type == 'article' -%}
      {%- comment -%}
         'item' is an article
         All article object properties can be accessed.
      {%- endcomment -%}

      {% if item.image -%}
        <div class="result-image">
          <a href="{{ item.url }}" title="{{ item.title | escape }}">
            {{ item | image_url: width: 100 | image_tag }}
           </a>
        </div>
       {% endif %}
    {%- elsif item.object_type == 'page' -%}
      {%- comment -%}
        'item' is a page.
         All page object properties can be accessed.
      {%- endcomment -%}
    {%- else -%}
      {%- comment -%}
         'item' is a product.
         All product object properties can be accessed.
      {%- endcomment -%}

      {%- if item.featured_image -%}
        <div class="result-image">
           <a href="{{ item.url }}" title="{{ item.title | escape }}">
             {{ item.featured_image | image_url: width: 100 | image_tag }}
          </a>
        </div>
      {% endif %}
    {%- endif -%}

    <span>{{ item.content | strip_html | truncatewords: 40 | highlight: search.terms }}</span>
    {% endfor %}
    ```

  * **results\_​count**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The number of results.

  * **sort\_​by**

  * The sort order of the search results. This is determined by the `sort_by` URL parameter.

    If there's no `sort_by` URL parameter, then the value is `nil`.

  * **sort\_​options**

    array of [sort\_option](https://shopify.dev/docs/api/liquid/objects/sort_option)

  * The available sorting options for the search results.

    ExampleOutput the sort options

    ##### Code

    ```liquid
    {%- assign sort_by = search.sort_by | default: search.default_sort_by -%}

    <select>
    {%- for option in search.sort_options %}
      <option
        value="{{ option.value }}"
        {%- if option.value == sort_by %}
          selected="selected"
        {%- endif %}
      >
        {{ option.name }}
      </option>
    {% endfor -%}
    </select>
    ```

  * **terms**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The entered search terms.

    **Tip:** Use the \<a href="/docs/api/liquid/filters/highlight">\<code>highlight\</code> filter\</a> to highlight the search terms in search result content.

  * **types**

    array of [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The object types that the search was performed on.

    A search can be performed on the following object types:

    * [`article`](https://shopify.dev/docs/api/liquid/objects/article)
    * [`page`](https://shopify.dev/docs/api/liquid/objects/page)
    * [`product`](https://shopify.dev/docs/api/liquid/objects/product)

    **Note:** The types are determined by the \<a href="/api/ajax/reference/predictive-search#query-parameters">\<code>type\</code> query parameter\</a>.

###### Example

```json
{
  "default_sort_by": "relevance",
  "filters": {},
  "performed": true,
  "results": [],
  "results_count": 16,
  "sort_by": "relevance",
  "sort_options": [],
  "terms": "potion",
  "types": [
    "article",
    "page",
    "product"
  ]
}
```

### Templates using search

[Theme architecture](https://shopify.dev/themes/architecture/templates/search)

[search template](https://shopify.dev/themes/architecture/templates/search)

---



<a id="objects-section"></a>


## section

The properties and settings of a section.

***

**Tip:** To learn about sections and using them in a theme, refer to \<a href="/themes/architecture/sections">Sections\</a>.

***

### Properties

* * **blocks**

    array of [block](https://shopify.dev/docs/api/liquid/objects/block)

  * The blocks of the section.

  * **id**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The ID of the section.

    The ID for sections included through [JSON templates](https://shopify.dev/themes/architecture/templates/json-templates) are dynamically generated by Shopify.

    The ID for static sections is the section file name without the `.liquid` extension. For example, a `header.liquid` section has an ID of `header`.

  * **index**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The 1-based index of the current section within its location.

    Use this property to adjust section behavior based on its position within its location ([template](https://shopify.dev/docs/themes/architecture/templates), [section group](https://shopify.dev/docs/themes/architecture/section-groups)) and on the page. The `index` starts at 1 within each location.

    An example use case is for programmatically setting `loading="lazy"` for images below the fold based on an index higher than, for example, 3. Note that this is now the default behavior for the [`image_tag` filter](https://shopify.dev/docs/api/liquid/filters#image_tag).

    Only use this for non-display use cases like web performance. Because of various limitations, the `index` property returns `nil` in the following contexts:

    * When rendered as a [static section](https://shopify.dev/docs/themes/architecture/sections#statically-render-a-section)
    * While rendering in the online store editor
    * When using the [Section Rendering API](https://shopify.dev/docs/api/section-rendering)

  * **index0**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The 0-based index of the current section within its location.

    This is the same as the `index` property except that the index starts at 0 instead of 1.

  * **location**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The scope or context of the section (template, section group, or global).

    Sections can have one of four different location types. For sections rendered within a [template](https://shopify.dev/docs/themes/architecture/templates), the location will be `template`. For sections rendered within a [section group](https://shopify.dev/docs/themes/architecture/section-groups), the location will be the section group type, e.g., `header`, `footer`, `custom.<type>`. Sections [rendered statically](https://shopify.dev/docs/themes/architecture/sections#statically-render-a-section) will be `static`. Finally, if you're still using `content_for_index`, then the value will be `content_for_index`.

  * **settings**

  * The [settings](https://shopify.dev/themes/architecture/sections/section-schema#settings) of the section.

    To learn about how to access settings, refer to [Access settings](https://shopify.dev/themes/architecture/settings#access-settings).

###### Example

```json
{
  "blocks": [],
  "id": "template--14453298921537__cart-items",
  "settings": {}
}
```

---



<a id="objects-selling-plan"></a>


## selling\_​plan

Information about the intent of how a specific [selling plan](https://shopify.dev/apps/subscriptions/selling-plans) affects a line item.

To learn about how to support selling plans in your theme, refer to [Purchase options](https://shopify.dev/themes/pricing-payments/purchase-options).

### Properties

* * **checkout\_​charge**

    [selling\_plan\_checkout\_charge](https://shopify.dev/docs/api/liquid/objects/selling_plan_checkout_charge)

  * The checkout charge of the selling plan.

  * **description**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The description of the selling plan.

  * **group\_​id**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The ID of the [`selling_plan_group`](https://shopify.dev/docs/api/liquid/objects/selling_plan_group) that the selling plan belongs to.

    **Note:** The name is shown at checkout with the line item summary.

  * **id**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The ID of the selling plan.

  * **name**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The name of the selling plan.

    **Note:** The name is shown at checkout with the line item summary.

  * **options**

    array of [selling\_plan\_option](https://shopify.dev/docs/api/liquid/objects/selling_plan_option)

  * The selling plan options.

  * **price\_​adjustments**

    array of [selling\_plan\_price\_adjustment](https://shopify.dev/docs/api/liquid/objects/selling_plan_price_adjustment)

  * The selling plan price adjustments.

    The maximum length of the array is two. If the selling plan doesn't create any price adjustments, then the array is empty.

    Each `selling_plan_price_adjustment` maps to a [`selling_plan_allocation_price_adjustment`](https://shopify.dev/docs/api/liquid/objects/selling_plan_allocation_price_adjustment) in the [`selling_plan_allocation.price_adjustments` array](https://shopify.dev/docs/api/liquid/objects/selling_plan_allocation#selling_plan_allocation-price_adjustments). The `selling_plan.price_adjustments` array contains the intent of the selling plan, and the `selling_plan_allocation.price_adjustments` contains the resulting money amounts.

  * **recurring\_​deliveries**

    [boolean](https://shopify.dev/docs/api/liquid/basics#boolean)

  * Returns `true` if the selling plan includes multiple deliveries. Returns `false` if not.

  * **selected**

    [boolean](https://shopify.dev/docs/api/liquid/basics#boolean)

  * Returns `true` if the selling plan is currently selected. Returns `false` if not.

    **Note:** The selected selling plan is determined by the \<code>\<span class="PreventFireFoxApplyingGapToWBR">selling\<wbr/>\_plan\</span>\</code> URL parameter.

###### Example

```json
{
  "checkout_charge": {},
  "description": null,
  "group_id": "e88ff8fdb3c39c89b564859e34542e0b982076d6",
  "id": 2595487809,
  "name": "Deliver every week, 10% off",
  "options": [],
  "price_adjustments": [],
  "recurring_deliveries": true,
  "selected": true
}
```

---



<a id="objects-selling-plan-allocation"></a>


## selling\_​plan\_​allocation

Information about how a specific [selling plan](https://shopify.dev/apps/subscriptions/selling-plans) affects a line item.

To learn about how to support selling plans in your theme, refer to [Purchase options](https://shopify.dev/themes/pricing-payments/purchase-options).

### Properties

* * **checkout\_​charge\_​amount**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The amount that the customer will be charged at checkout in the currency's subunit.

    The value is output in the customer's local (presentment) currency.

    **Tip:** Use \<a href="/docs/api/liquid/filters/money-filters">money filters\</a> to output a formatted price.

  * **compare\_​at\_​price**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The **compare at** price of the selling plan allocation in the currency's subunit.

    The value of the **compare at** price is the line item's price without the selling plan applied.

    The value is output in the customer's local (presentment) currency.

    For currencies without subunits, such as JPY and KRW, tenths and hundredths of a unit are appended. For example, 1000 Japanese yen is output as 100000.

    **Tip:** Use \<a href="/docs/api/liquid/filters/money-filters">money filters\</a> to output a formatted price.

  * **per\_​delivery\_​price**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The price for each delivery in the selling plan in the currency's subunit.

    If a selling plan includes multiple deliveries, then the `per_delivery_price` is the `price` divided by the number of deliveries.

    The value is output in the customer's local (presentment) currency.

    For currencies without subunits, such as JPY and KRW, tenths and hundredths of a unit are appended. For example, 1000 Japanese yen is output as 100000.

    **Tip:** Use \<a href="/docs/api/liquid/filters/money-filters">money filters\</a> to output a formatted price.

  * **price**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The price of the selling plan allocation in the currency's subunit.

    The value is output in the customer's local (presentment) currency.

    **Tip:** Use \<a href="/docs/api/liquid/filters/money-filters">money filters\</a> to output a formatted price.

  * **price\_​adjustments**

    array of [selling\_plan\_allocation\_price\_adjustment](https://shopify.dev/docs/api/liquid/objects/selling_plan_allocation_price_adjustment)

  * The selling plan allocation price adjustments.

    The maximum length of the array is two. If the associated selling plan doesn't create any price adjustments, then the array is empty.

    Each `selling_plan_allocation_price_adjustment` maps to a [`selling_plan_price_adjustment`](https://shopify.dev/docs/api/liquid/objects/selling_plan_price_adjustment) in the [`selling_plan.price_adjustments` array](https://shopify.dev/docs/api/liquid/objects/selling_plan#selling_plan-price_adjustments). The `selling_plan.price_adjustments` array contains the intent of the selling plan, and the `selling_plan_allocation.price_adjustments` array contains the resulting money amounts.

  * **remaining\_​balance\_​charge\_​amount**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The remaining amount for the customer to pay, in the currency's subunit.

    The value is output in the customer's local (presentment) currency.

    For currencies without subunits, such as JPY and KRW, tenths and hundredths of a unit are appended. For example, 1000 Japanese yen is output as 100000.

    **Tip:** Use \<a href="/docs/api/liquid/filters/money-filters">money filters\</a> to output a formatted price.

  * **selling\_​plan**

    [selling\_plan](https://shopify.dev/docs/api/liquid/objects/selling_plan)

  * The selling plan that created the allocation.

  * **selling\_​plan\_​group\_​id**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The ID of the [`selling_plan_group`](https://shopify.dev/docs/api/liquid/objects/selling_plan_group) that the selling plan of the allocation belongs to.

  * **unit\_​price**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The [unit price](https://shopify.dev/docs/api/liquid/objects/variant#variant-unit_price) of the variant associated with the selling plan, in the currency's subunit.

    If the variant doesn't have a unit price, then `nil` is returned.

    The value is output in the customer's local (presentment) currency.

    For currencies without subunits, such as JPY and KRW, tenths and hundredths of a unit are appended. For example, 1000 Japanese yen is output as 100000.

    **Tip:** Use \<a href="/docs/api/liquid/filters/money-filters">money filters\</a> to output a formatted price.

#### Returned by

* [line\_​item.selling\_​plan\_​allocation](https://shopify.dev/docs/api/liquid/objects/line_item#line_item-selling_plan_allocation)
* [variant.selling\_​plan\_​allocations](https://shopify.dev/docs/api/liquid/objects/variant#variant-selling_plan_allocations)
* [product.selected\_​selling\_​plan\_​allocation](https://shopify.dev/docs/api/liquid/objects/product#product-selected_selling_plan_allocation)
* [product.selected\_​or\_​first\_​available\_​selling\_​plan\_​allocation](https://shopify.dev/docs/api/liquid/objects/product#product-selected_or_first_available_selling_plan_allocation)
* [variant.selected\_​selling\_​plan\_​allocation](https://shopify.dev/docs/api/liquid/objects/variant#variant-selected_selling_plan_allocation)
* [remote\_​product.selected\_​selling\_​plan\_​allocation](https://shopify.dev/docs/api/liquid/objects/remote_product#remote_product-selected_selling_plan_allocation)
* [remote\_​product.selected\_​or\_​first\_​available\_​selling\_​plan\_​allocation](https://shopify.dev/docs/api/liquid/objects/remote_product#remote_product-selected_or_first_available_selling_plan_allocation)

---



<a id="objects-selling-plan-allocation-price-adjustment"></a>


## selling\_​plan\_​allocation\_​price\_​adjustment

The resulting price from the intent of the associated [`selling_plan_price_adjustment`](https://shopify.dev/docs/api/liquid/objects/selling_plan_price_adjustment).

To learn about how to support selling plans in your theme, refer to [Purchase options](https://shopify.dev/themes/pricing-payments/purchase-options).

### Properties

* * **position**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The 1-based index of the price adjustment in the [`selling_plan_allocation.price_adjustments` array](https://shopify.dev/docs/api/liquid/objects/selling_plan_allocation#selling_plan_allocation-price_adjustments).

  * **price**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The price that will be charged for the price adjustment's lifetime, in the currency's subunit.

    The value is output in the customer's local (presentment) currency.

    For currencies without subunits, such as JPY and KRW, tenths and hundredths of a unit are appended. For example, 1000 Japanese yen is output as 100000.

    **Tip:** Use \<a href="/docs/api/liquid/filters/money-filters">money filters\</a> to output a formatted price.

#### Returned by

* [selling\_​plan\_​allocation.price\_​adjustments](https://shopify.dev/docs/api/liquid/objects/selling_plan_allocation#selling_plan_allocation-price_adjustments)

---



<a id="objects-selling-plan-checkout-charge"></a>


## selling\_​plan\_​checkout\_​charge

Information about how a specific [selling plan](https://shopify.dev/apps/subscriptions/selling-plans) affects the amount that a customer needs to pay for a line item at checkout.

To learn about how to support selling plans in your theme, refer to [Purchase options](https://shopify.dev/themes/pricing-payments/purchase-options).

### Properties

* * **value**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The value of the checkout charge.

    How this value is interpreted depends on the [value type](https://shopify.dev/docs/api/liquid/objects/selling_plan_checkout_charge#selling_plan_checkout_charge-value_type) of the checkout charge. The following table outlines what the value represents for each value type:

    | Value type | Value |
    | - | - |
    | `percentage` | The percent amount of the original price that the customer needs to pay. For example, if the value is 50, then the customer needs to pay 50% of the original price. |
    | `price` | The amount that the customer needs to pay in the currency's subunit. |

    For currencies without subunits, such as JPY and KRW, tenths and hundredths of a unit are appended. For example, 1000 Japanese yen is output as 100000.

    **Tip:** Use \<a href="/docs/api/liquid/filters/money-filters">money filters\</a> to output a formatted price.

  * **value\_​type**

    [string](https://shopify.dev/docs/api/liquid/basics#string) from a set of values

  * The value type of the checkout charge.

    | Possible values |
    | - |
    | percentage |
    | price |

###### Example

```json
{
  "value": 100,
  "value_type": "percentage"
}
```

---



<a id="objects-selling-plan-group"></a>


## selling\_​plan\_​group

Information about a specific group of [selling plans](https://shopify.dev/apps/subscriptions/selling-plans) that include any of a product's variants.

Selling plans are grouped based on shared [selling plan option names](https://shopify.dev/docs/api/liquid/objects/selling_plan_option#selling_plan_option-name).

To learn about how to support selling plans in your theme, refer to [Purchase options](https://shopify.dev/themes/pricing-payments/purchase-options).

### Properties

* * **app\_​id**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * An optional string provided by an app to identify selling plan groups created by that app.

    If the app doesn't provide a value, then `nil` is returned.

    **Tip:** You can use this property, with the \<a href="/docs/api/liquid/filters/where">\<code>where\</code> filter\</a>, to filter the \<a href="/docs/api/liquid/objects/product#product-selling\_plan\_groups">\<code>\<span class="PreventFireFoxApplyingGapToWBR">product.selling\<wbr/>\_plan\<wbr/>\_groups\</span>\</code> array\</a> for all selling plan groups from a specific app.

  * **id**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The ID of the selling plan group.

  * **name**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The name of the selling plan group.

  * **options**

    array of [selling\_plan\_group\_option](https://shopify.dev/docs/api/liquid/objects/selling_plan_group_option)

  * The selling plan group options.

  * **selling\_​plan\_​selected**

    [boolean](https://shopify.dev/docs/api/liquid/basics#boolean)

  * Returns `true` if the currently selected selling plan is part of the selling plan group. Returns `false` if not.

    **Note:** The selected selling plan is determined by the \<code>\<span class="PreventFireFoxApplyingGapToWBR">selling\<wbr/>\_plan\</span>\</code> URL parameter.

  * **selling\_​plans**

    array of [selling\_plan](https://shopify.dev/docs/api/liquid/objects/selling_plan)

  * The selling plans in the group.

###### Example

```json
{
  "app_id": "gid://shopify/App/66228322305",
  "id": "e88ff8fdb3c39c89b564859e34542e0b982076d6",
  "name": "1 Week(s), 4 Week(s)",
  "options": [],
  "selling_plan_selected": false,
  "selling_plans": []
}
```

---



<a id="objects-selling-plan-group-option"></a>


## selling\_​plan\_​group\_​option

Information about a specific option in a [selling plan group](https://shopify.dev/docs/api/liquid/objects/selling_plan_group).

### Properties

* * **name**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The name of the option.

  * **position**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The 1-based index of the option in the [`selling_plan_group.options` array](https://shopify.dev/docs/api/liquid/objects/selling_plan_group#selling_plan_group-options).

  * **selected\_​value**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The option value of the currently selected selling plan.

    If no selling plan is currently selected, then `nil` is returned.

    **Note:** The selected selling plan is determined by the \<code>\<span class="PreventFireFoxApplyingGapToWBR">selling\<wbr/>\_plan\</span>\</code> URL parameter.

  * **values**

    array of [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The values of the option.

###### Example

```json
{
  "name": "Delivery frequency",
  "position": 1,
  "selected_value": null,
  "values": [
    "Deliver every week",
    "Deliver every 4 weeks"
  ]
}
```

---



<a id="objects-selling-plan-option"></a>


## selling\_​plan\_​option

Information about a selling plan's value for a specific [`selling_plan_group_option`](https://shopify.dev/docs/api/liquid/objects/selling_plan_group_option).

To learn about how to support selling plans in your theme, refer to [Purchase options](https://shopify.dev/themes/pricing-payments/purchase-options).

### Properties

* * **name**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The name of the associated `selling_plan_group_option`.

  * **position**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The 1-based index of the selling plan option in the associated [`selling_plan_group.options` array](https://shopify.dev/docs/api/liquid/objects/selling_plan_group#selling_plan_group-options).

  * **value**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The value of the selling plan option.

    The value is one of the [`selling_plan_group_option.values`](https://shopify.dev/docs/api/liquid/objects/selling_plan_group_option#selling_plan_group_option-values).

###### Example

```json
{
  "name": "Delivery frequency",
  "position": 1,
  "value": "Deliver every week"
}
```

---



<a id="objects-selling-plan-price-adjustment"></a>


## selling\_​plan\_​price\_​adjustment

Information about how a selling plan changes the price of a variant for a given period of time.

To learn about how to support selling plans in your theme, refer to [Purchase options](https://shopify.dev/themes/pricing-payments/purchase-options).

### Properties

* * **order\_​count**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The number of orders that the price adjustment applies to.

  * **position**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The 1-based index of the price adjustment in the [`selling_plan.price_adjustments` array](https://shopify.dev/docs/api/liquid/objects/selling_plan#selling_plan-price_adjustments).

  * **value**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The value of the price adjustment as a decimal.

    How this value is interpreted depends on the [value type](https://shopify.dev/docs/api/liquid/objects/selling_plan_price_adjustment#selling_plan_price_adjustment-value_type) of the price adjustment. The following table outlines what the value represents for each value type:

    | Value type | Value |
    | - | - |
    | `fixed_amount` | The amount that the original price is being adjusted by, in the currency's subunit. |
    | `percentage` | The percent amount that the original price is being adjusted by. |
    | `price` | The adjusted amount in the currency's subunit. |

    For currencies without subunits, such as JPY and KRW, tenths and hundredths of a unit are appended. For example, 1000 Japanese yen is output as 100000.

    **Tip:** Use \<a href="/docs/api/liquid/filters/money-filters">money filters\</a> to output a formatted price.

  * **value\_​type**

    [string](https://shopify.dev/docs/api/liquid/basics#string) from a set of values

  * The type of price adjustment.

    | Possible values |
    | - |
    | percentage |
    | fixed\_amount |
    | price |

###### Example

```json
{
  "order_count": null,
  "position": 1,
  "value": 10,
  "value_type": "percentage"
}
```

---



<a id="objects-settings"></a>


## settings

Allows you to access all of the theme's settings from the [`settings_schema.json` file](https://shopify.dev/themes/architecture/config/settings-schema-json).

***

**Tip:** To learn about the available setting types, refer to \<a href="/themes/architecture/settings/input-settings">Input settings\</a>.

***

#### Directly accessible in

* Global

#### Reference a setting value

###### Code

```liquid
{% if settings.favicon != blank %}
  <link rel="icon" type="image/png" href="{{ settings.favicon | image_url: width: 32, height: 32 }}">
{% endif %}
```

###### Data

```json
{
  "settings": {
    "favicon": null
  }
}
```

---



<a id="objects-shipping-method"></a>


## shipping\_​method

Information about the shipping method for an order.

### Properties

* * **discount\_​allocations**

    array of [discount\_allocation](https://shopify.dev/docs/api/liquid/objects/discount_allocation)

  * The discount allocations that apply to the shipping method.

  * **handle**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The [handle](https://shopify.dev/docs/api/liquid/basics#handles) of the shipping method.

    **Note:** The price of the shipping method is appended to handle.

  * **id**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The ID of the shipping method.

  * **original\_​price**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The price of the shipping method in the currency's subunit, before discounts have been applied.

    The value is output in the customer's local (presentment) currency.

    For currencies without subunits, such as JPY and KRW, tenths and hundredths of a unit are appended. For example, 1000 Japanese yen is output as 100000.

    **Tip:** Use \<a href="/docs/api/liquid/filters/money-filters">money filters\</a> to output a formatted price.

  * **price\_​with\_​discounts**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The price of the shipping method in the currency's subunit, after discounts have been applied, including order level discounts.

    The value is output in the customer's local (presentment) currency.

    For currencies without subunits, such as JPY and KRW, tenths and hundredths of a unit are appended. For example, 1000 Japanese yen is output as 100000.

    **Tip:** Use \<a href="/docs/api/liquid/filters/money-filters">money filters\</a> to output a formatted price.

  * **tax\_​lines**

    array of [tax\_line](https://shopify.dev/docs/api/liquid/objects/tax_line)

  * The tax lines for the shipping method.

  * **title**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The title of the shipping method.

    In most contexts, the shipping method title appears in the customer's preferred language. However, in the context of an [order](https://shopify.dev/docs/api/liquid/objects/order), the shipping method title appears in the language that the customer checked out in.

### Deprecated Properties

* * **price**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

    Deprecated

  * The price of the shipping method in the currency's subunit, after discounts have been applied.

    The value is output in the customer's local (presentment) currency.

    For currencies without subunits, such as JPY and KRW, tenths and hundredths of a unit are appended. For example, 1000 Japanese yen is output as 100000.

    **Tip:** Use \<a href="/docs/api/liquid/filters/money-filters">money filters\</a> to output a formatted price.

    **Deprecated:**

    Deprecated because the price did not include order level discounts.

    The `shipping_line.price` property has been replaced by [`shipping_line.price_with_discounts`](https://shopify.dev/docs/api/liquid/objects/shipping_method#shipping_method-price_with_discounts).

###### Example

```json
{
  "handle": "shopify-Standard-0.00",
  "id": "shopify-Standard-0.00",
  "original_price": "0.00",
  "price": "0.00",
  "price_with_discounts": "0.00",
  "tax_lines": [],
  "title": "Standard"
}
```

---



<a id="objects-shop"></a>


## shop

Information about the store, such as the store address, the total number of products, and various settings.

### Properties

* * **accepts\_​gift\_​cards**

    [boolean](https://shopify.dev/docs/api/liquid/basics#boolean)

  * Returns `true` if the store accepts gift cards. Returns `false` if not.

  * **address**

    [address](https://shopify.dev/docs/api/liquid/objects/address)

  * The address of the store.

  * **brand**

    [brand](https://shopify.dev/docs/api/liquid/objects/brand)

  * The [brand assets](https://help.shopify.com/manual/promoting-marketing/managing-brand-assets) for the store.

  * **collections\_​count**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The number of collections in the store.

  * **currency**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The currency of the store.

  * **customer\_​accounts\_​enabled**

    [boolean](https://shopify.dev/docs/api/liquid/basics#boolean)

  * Returns `true` if the store shows a login link. Returns `false` if not.

  * **customer\_​accounts\_​optional**

    [boolean](https://shopify.dev/docs/api/liquid/basics#boolean)

  * Returns `true` if customer accounts are optional to complete checkout. Returns `false` if not.

  * **description**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The [description](https://help.shopify.com/manual/online-store/setting-up/preferences#edit-the-title-and-meta-description) of the store.

  * **domain**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The primary domain of the store.

  * **email**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The [sender email](https://help.shopify.com/manual/intro-to-shopify/initial-setup/setup-your-email#change-your-sender-email-address) of the store.

  * **enabled\_​currencies**

    array of [currency](https://shopify.dev/docs/api/liquid/objects/currency)

  * The currencies that the store accepts.

    **Tip:** You can get the store\&#39;s currency with \<a href="/docs/api/liquid/objects/shop#shop-currency">\<code>shop.currency\</code>\</a>.

  * **enabled\_​payment\_​types**

    array of [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The accepted payment types on the store.

    The payment types are based on the store's enabled [payment providers](https://help.shopify.com/manual/payments) and the customer's current region and currency.

    **Tip:** You can output an \<code>svg\</code> logo for each payment type with the \<a href="/docs/api/liquid/filters/payment\_type\_svg\_tag">\<code>\<span class="PreventFireFoxApplyingGapToWBR">payment\<wbr/>\_type\<wbr/>\_svg\<wbr/>\_tag\</span>\</code> filter\</a>. Alternatively, you can get the source URL for each \<code>svg\</code> with the \<a href="/docs/api/liquid/filters/payment\_type\_img\_url">\<code>\<span class="PreventFireFoxApplyingGapToWBR">payment\<wbr/>\_type\<wbr/>\_img\<wbr/>\_url\</span>\</code> filter\</a>.

  * **id**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The ID of the store.

  * **metafields**

  * The [metafields](https://shopify.dev/docs/api/liquid/objects/metafield) applied to the store.

    **Tip:** To learn about how to create metafields, refer to \<a href="/apps/metafields/manage">Create and manage metafields\</a> or visit the \<a href="https://help.shopify.com/manual/metafields">Shopify Help Center\</a>.

  * **money\_​format**

    [currency](https://shopify.dev/docs/api/liquid/objects/currency)

  * The money format of the store.

  * **money\_​with\_​currency\_​format**

    [currency](https://shopify.dev/docs/api/liquid/objects/currency)

  * The money format of the store with the currency included.

  * **name**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The name of the store.

  * **password\_​message**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The password page message of the store.

  * **permanent\_​domain**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The `.myshopify.com` domain of the store.

  * **phone**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The phone number of the store.

  * **policies**

    array of [policy](https://shopify.dev/docs/api/liquid/objects/policy)

  * The policies for the store.

    The policies are set in the store's [Policies settings](https://www.shopify.com/admin/settings/legal).

    ExampleOutput the policies

    ##### Code

    ```liquid
    <ul>
    {%- for policy in shop.policies %}
      <li>{{ policy.title }}</li>
    {%- endfor %}
    </ul>
    ```

    ##### Data

    ```json
    {
      "shop": {
        "policies": [
          "<p>We have a 30-day return policy, which means you have 30 days after receiving your item to request a return. ...</p>",
          "<p>This Privacy Policy describes how polinas-potent-potions.myshopify.com (the “Site” or “we”) collects, uses, and discloses your Personal Information when you visit or make a purchase from the Site. ...</p>",
          "<strong>OVERVIEW</strong> <br> This website is operated by Polina's Potent Potions. Throughout the site, the terms “we”, “us” and “our” refer to Polina's Potent Potions. ...",
          "<meta charset=\"utf-8\">\n<p data-mce-fragment=\"1\">All orders are processed within X to X business days (excluding weekends and holidays) after receiving your order confirmation email. You will receive another notification when your order has shipped. ...&nbsp;</p>\n<h3 data-mce-fragment=\"1\"></h3>"
        ]
      }
    }
    ```

    ##### Output

    ```html
    <ul>
      <li>Refund policy</li>
      <li>Privacy policy</li>
      <li>Terms of service</li>
      <li>Shipping policy</li>
    </ul>
    ```

  * **privacy\_​policy**

    [policy](https://shopify.dev/docs/api/liquid/objects/policy)

  * The privacy policy for the store.

  * **products\_​count**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The number of products in the store.

  * **published\_​locales**

    array of [shop\_locale](https://shopify.dev/docs/api/liquid/objects/shop_locale)

  * The locales (languages) that are published on the store.

  * **refund\_​policy**

    [policy](https://shopify.dev/docs/api/liquid/objects/policy)

  * The refund policy for the store.

  * **search\_​types**

    array of [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The resource types searched for by default when no `type` parameter is specified.

    Search types are `["article", "page", "product"]` by default, and can be configured in the Search & Discovery app. These search types are used when a search query is performed without a `?type=` parameter.

    **Tip:** A search with a \<code>?type=\</code> parameter value not in the \<code>\<span class="PreventFireFoxApplyingGapToWBR">shop.search\<wbr/>\_types\</span>\</code> list will still return results for the specified type, if they exist.

  * **secure\_​url**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The full URL of the store, with an `https` protocol.

  * **shipping\_​policy**

    [policy](https://shopify.dev/docs/api/liquid/objects/policy)

  * The shipping policy for the store.

  * **subscription\_​policy**

    [policy](https://shopify.dev/docs/api/liquid/objects/policy)

  * The subscription policy for the store.

  * **terms\_​of\_​service**

    [policy](https://shopify.dev/docs/api/liquid/objects/policy)

  * The terms of service for the store.

  * **types**

    array of [string](https://shopify.dev/docs/api/liquid/basics#string)

  * All of the product types in the store.

    ExampleOutput the product types

    ##### Code

    ```liquid
    {% for type in shop.types %}
      {{- type | link_to_type }}
    {% endfor %}
    ```

    ##### Data

    ```json
    {
      "shop": {
        "types": [
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
        ]
      }
    }
    ```

    ##### Output

    ```html
    Unknown Type

    <a href="/collections/types?q=Animals%20%26%20Pet%20Supplies" title="Animals &amp; Pet Supplies">Animals & Pet Supplies</a>

    <a href="/collections/types?q=Baking%20Flavors%20%26%20Extracts" title="Baking Flavors &amp; Extracts">Baking Flavors & Extracts</a>

    <a href="/collections/types?q=Container" title="Container">Container</a>

    <a href="/collections/types?q=Cooking%20%26%20Baking%20Ingredients" title="Cooking &amp; Baking Ingredients">Cooking & Baking Ingredients</a>

    <a href="/collections/types?q=Dried%20Flowers" title="Dried Flowers">Dried Flowers</a>

    <a href="/collections/types?q=Fruits%20%26%20Vegetables" title="Fruits &amp; Vegetables">Fruits & Vegetables</a>

    <a href="/collections/types?q=Gift%20Cards" title="Gift Cards">Gift Cards</a>

    <a href="/collections/types?q=Health" title="Health">Health</a>

    <a href="/collections/types?q=Health%20%26%20Beauty" title="Health &amp; Beauty">Health & Beauty</a>

    <a href="/collections/types?q=Invisibility" title="Invisibility">Invisibility</a>

    <a href="/collections/types?q=Love" title="Love">Love</a>

    <a href="/collections/types?q=Music%20%26%20Sound%20Recordings" title="Music &amp; Sound Recordings">Music & Sound Recordings</a>

    <a href="/collections/types?q=Seasonings%20%26%20Spices" title="Seasonings &amp; Spices">Seasonings & Spices</a>

    <a href="/collections/types?q=Water" title="Water">Water</a>
    ```

  * **url**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The full URL of the store.

  * **vendors**

    array of [string](https://shopify.dev/docs/api/liquid/basics#string)

  * All of the product vendors for the store.

    ExampleOutput the vendors

    ##### Code

    ```liquid
    {% for vendor in shop.vendors %}
      {{- vendor | link_to_vendor }}
    {% endfor %}
    ```

    ##### Data

    ```json
    {
      "shop": {
        "vendors": [
          "Clover's Apothecary",
          "Polina's Potent Potions",
          "Ted's Apothecary Supply"
        ]
      }
    }
    ```

    ##### Output

    ```html
    <a href="/collections/vendors?q=Clover%27s%20Apothecary" title="Clover&#39;s Apothecary">Clover's Apothecary</a>

    <a href="/collections/vendors?q=Polina%27s%20Potent%20Potions" title="Polina&#39;s Potent Potions">Polina's Potent Potions</a>

    <a href="/collections/vendors?q=Ted%27s%20Apothecary%20Supply" title="Ted&#39;s Apothecary Supply">Ted's Apothecary Supply</a>
    ```

### Deprecated Properties

* * **enabled\_​locales**

    array of [shop\_locale](https://shopify.dev/docs/api/liquid/objects/shop_locale)

    Deprecated

  * The locales (languages) that are published on the store.

    **Deprecated:**

    Deprecated because the name didn't make it clear that the returned locales were published.

    The `shop.enabled_locales` property has been replaced by [`shop.published_locales`](https://shopify.dev/docs/api/liquid/objects/shop#shop-published_locales).

  * **locale**

    [shop\_locale](https://shopify.dev/docs/api/liquid/objects/shop_locale)

    Deprecated

  * The currently active locale (language).

    **Deprecated:**

    Deprecated because this value is contextual to the request and not a property of the shop resource.

    The `shop.locale` property has been replaced by [request.locale](https://shopify.dev/docs/api/liquid/objects/request#request-locale).

  * **metaobjects**

    Deprecated

  * All of the [metaobjects](https://shopify.dev/docs/api/liquid/objects/metaobject) of the store.

    **Deprecated:**

    The `shop.metaobjects` property has been replaced by [`metaobjects`](https://shopify.dev/docs/api/liquid/objects/metaobjects).

  * **taxes\_​included**

    [boolean](https://shopify.dev/docs/api/liquid/basics#boolean)

    Deprecated

  * Returns `true` if prices include taxes. Returns `false` if not.

    **Deprecated:**

    Deprecated because whether or not prices have taxes included is dependent on the customer's country.

    The `shop.taxes_included` property has been replaced by [cart.taxes\_included](https://shopify.dev/docs/api/liquid/objects/cart#cart-taxes_included).

###### Example

```json
{
  "accepts_gift_cards": true,
  "address": {},
  "brand": {},
  "collections_count": 7,
  "currency": "CAD",
  "customer_accounts_enabled": true,
  "customer_accounts_optional": true,
  "description": "Canada's foremost retailer for potions and potion accessories. Try one of our award-winning artisanal potions, or find the supplies to make your own!",
  "domain": "polinas-potent-potions.myshopify.com",
  "email": "polinas.potent.potions@gmail.com",
  "enabled_currencies": [],
  "enabled_locales": [],
  "enabled_payment_types": [
    "visa",
    "master",
    "american_express",
    "paypal",
    "diners_club",
    "discover"
  ],
  "id": 56174706753,
  "locale": "en",
  "metafields": {},
  "metaobjects": {},
  "money_format": "${{amount}}",
  "money_with_currency_format": "${{amount}} CAD",
  "name": "Polina&#39;s Potent Potions",
  "password_message": "Our store will be opening when the moon is in the seventh house!!",
  "permanent_domain": "polinas-potent-potions.myshopify.com",
  "phone": "416-123-1234",
  "policies": [],
  "privacy_policy": {},
  "products_count": 19,
  "published_locales": [],
  "refund_policy": {},
  "search_types": [
    "article",
    "page",
    "product"
  ],
  "secure_url": "https://polinas-potent-potions.myshopify.com",
  "shipping_policy": {},
  "subscription_policy": null,
  "taxes_included": false,
  "terms_of_service": {},
  "types": [
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
  "url": "https://polinas-potent-potions.myshopify.com",
  "vendors": [
    "Clover's Apothecary",
    "Polina's Potent Potions",
    "Ted's Apothecary Supply"
  ]
}
```

---



<a id="objects-shop-locale"></a>


## shop\_​locale

A language in a store.

To learn how to offer localization options in your theme, refer to [Support multiple currencies and languages](https://shopify.dev/themes/internationalization/multiple-currencies-languages).

### Properties

* * **endonym\_​name**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The name of the locale in the locale itself.

  * **iso\_​code**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The ISO code of the locale in [IETF language tag format](https://en.wikipedia.org/wiki/IETF_language_tag).

  * **name**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The name of the locale in the store's primary locale.

  * **primary**

    [boolean](https://shopify.dev/docs/api/liquid/basics#boolean)

  * Returns `true` if the locale is the store's primary locale. Returns `false` if not.

  * **root\_​url**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The relative root URL of the locale.

###### Example

```json
{
  "endonym_name": "English",
  "iso_code": "en",
  "name": "English",
  "primary": true,
  "root_url": "/"
}
```

---



<a id="objects-sitemap"></a>


## sitemap

The sitemap for a specific group in the [`robots.txt` file](https://shopify.dev/themes/architecture/templates/robots-txt-liquid).

The sitemap provides information about the pages and content on a site, and the relationships between them, which helps crawlers crawl a site more efficiently.

***

**Tip:** To learn more about sitemaps, refer to \<a href="https://developers.google.com/search/docs/advanced/sitemaps/overview">Google\&#39;s documentation\</a>.

***

The `sitemap` object consists of a `Sitemap` directive, and a value of the URL that the sitemap is hosted at. For example:

```
Sitemap: https://your-store.myshopify.com/sitemap.xml
```

***

**Tip:** You can \<a href="/themes/seo/robots-txt">customize the \<code>robots.txt\</code> file\</a> with the \<a href="/themes/architecture/templates/robots-txt-liquid">\<code>robots.txt.liquid\</code> template\</a>.

***

### Properties

* * **directive**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * Returns `Sitemap`.

  * **value**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The URL that the sitemap is hosted at.

###### Example

```json
{
  "directive": "Sitemap",
  "value": "https://polinas-potent-potions.myshopify.com/sitemap.xml"
}
```

---



<a id="objects-sort-option"></a>


## sort\_​option

A sort option for a collection or search results page.

### Properties

* * **name**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The customer-facing name of the sort option.

    The name can be edited by merchants in the [language editor](https://help.shopify.com/manual/online-store/themes/customizing-themes/language/change-wording).

  * **value**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The value of the sort option.

    This value is used when assigning the [`collection.sort_by`](https://shopify.dev/docs/api/liquid/objects/collection#collection-sort_by) and [`search.sort_by`](https://shopify.dev/docs/api/liquid/objects/search#search-sort_by) parameters.

###### Example

```json
{
  "name": "Alphabetically, A-Z",
  "value": "title-ascending"
}
```

---



<a id="objects-store-availability"></a>


## store\_​availability

A variant's inventory information for a physical store location.

If a location doesn't stock a variant, then there won't be a `store_availability` for that variant and location.

***

**Note:** The \<code>\<span class="PreventFireFoxApplyingGapToWBR">store\<wbr/>\_availability\</span>\</code> object is defined only if one or more locations has \<a href="https://help.shopify.com/manual/shipping/setting-up-and-managing-your-shipping/local-methods/local-pickup">local pickup\</a> enabled.

***

### Properties

* * **available**

    [boolean](https://shopify.dev/docs/api/liquid/basics#boolean)

  * Returns `true` if the variant has available inventory at the location. Returns `false` if not.

  * **location**

    [location](https://shopify.dev/docs/api/liquid/objects/location)

  * The location that the variant is stocked at.

  * **pick\_​up\_​enabled**

    [boolean](https://shopify.dev/docs/api/liquid/basics#boolean)

  * Returns `true` if the location has pickup enabled. Returns `false` if not.

  * **pick\_​up\_​time**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The amount of time that it takes for pickup orders to be ready at the location.

    **Tip:** This value can be configured in the Shopify admin. To learn more, visit the \<a href="https://help.shopify.com/en/manual/sell-in-person/shopify-pos/order-management/local-pickup-for-online-orders#manage-preferences-for-a-local-pickup-location">Shopify Help Center\</a>.

###### Example

```json
{
  "available": true,
  "location": {},
  "pick_up_enabled": true,
  "pick_up_time": "Usually ready in 24 hours"
}
```

---



<a id="objects-store-credit-account"></a>


## store\_​credit\_​account

A [store credit account](https://help.shopify.com/en/manual/customers/store-credit) owned by a [customer](https://shopify.dev/docs/api/liquid/objects/customer).

### Properties

* * **balance**

    [money](https://shopify.dev/docs/api/liquid/objects/money)

  * The balance of the store credit account in the currency's subunit.

    The value is output in the customer's local (presentment) currency.

    For currencies without subunits, such as JPY and KRW, tenths and hundredths of a unit are appended. For example, 1000 Japanese yen is output as 100000.

    **Tip:** Use \<a href="/docs/api/liquid/filters/money-filters">money filters\</a> to output a formatted amount.

###### Example

```json
{
  "balance": {}
}
```

---



<a id="objects-swatch"></a>


## swatch

Color and image for visual representation. Available for [product option values](https://shopify.dev/docs/api/liquid/objects/product_option_value) and [filter values](https://shopify.dev/docs/api/liquid/objects/filter_value).

### Properties

* * **color**

    [color](https://shopify.dev/docs/api/liquid/objects/color)

  * The swatch color.

  * **image**

    [image](https://shopify.dev/docs/api/liquid/objects/image)

  * The swatch image.

###### Example

```json
{
  "color": {},
  "image": {}
}
```

---



<a id="objects-tablerowloop"></a>


## tablerowloop

Information about a parent [`tablerow` loop](https://shopify.dev/docs/api/liquid/tags/tablerow).

### Properties

* * **col**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The 1-based index of the current column.

  * **col\_​first**

    [boolean](https://shopify.dev/docs/api/liquid/basics#boolean)

  * Returns `true` if the current column is the first in the row. Returns `false` if not.

  * **col\_​last**

    [boolean](https://shopify.dev/docs/api/liquid/basics#boolean)

  * Returns `true` if the current column is the last in the row. Returns `false` if not.

  * **col0**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The 0-based index of the current column.

  * **first**

    [boolean](https://shopify.dev/docs/api/liquid/basics#boolean)

  * Returns `true` if the current iteration is the first. Returns `false` if not.

  * **index**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The 1-based index of the current iteration.

  * **index0**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The 0-based index of the current iteration.

  * **last**

    [boolean](https://shopify.dev/docs/api/liquid/basics#boolean)

  * Returns `true` if the current iteration is the last. Returns `false` if not.

  * **length**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The total number of iterations in the loop.

  * **rindex**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The 1-based index of the current iteration, in reverse order.

  * **rindex0**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The 0-based index of the current iteration, in reverse order.

  * **row**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The 1-based index of current row.

###### Example

```json
{
  "col": 1,
  "col0": 0,
  "col_first": true,
  "col_last": false,
  "first": true,
  "index": 1,
  "index0": 0,
  "last": false,
  "length": 5,
  "rindex": 5,
  "rindex0": 4,
  "row": 1
}
```

---



<a id="objects-tax-line"></a>


## tax\_​line

Information about a tax line of a checkout or order.

### Properties

* * **price**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The tax amount in the currency's subunit.

    The value is output in the customer's local (presentment) currency.

    For currencies without subunits, such as JPY and KRW, tenths and hundredths of a unit are appended. For example, 1000 Japanese yen is output as 100000.

    **Tip:** Use \<a href="/docs/api/liquid/filters/money-filters">money filters\</a> to output a formatted price.

  * **rate**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The decimal value of the tax rate.

  * **rate\_​percentage**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The decimal value of the tax rate, as a percentage.

  * **title**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The title of the tax.

###### Example

```json
{
  "price": 1901,
  "rate": 0.05,
  "rate_percentage": 5,
  "title": "GST"
}
```

---



<a id="objects-taxonomy-category"></a>


## taxonomy\_​category

The taxonomy category for a product

### Properties

* * **ancestors**

    array of [taxonomy\_category](https://shopify.dev/docs/api/liquid/objects/taxonomy_category)

  * All parent nodes of the current taxonomy category.

  * **gid**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The public node ID for the category, formatted as a Shopify GID.

  * **id**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The public node ID for the category

  * **name**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The localized category name

###### Example

```json
{
  "ancestors": [],
  "gid": "gid://shopify/TaxonomyCategory/hb-1-9-6",
  "id": "hb-1-9-6",
  "name": "Vitamins & Supplements"
}
```

---



<a id="objects-template"></a>


## template

Information about the current [template](https://shopify.dev/docs/themes/architecture/templates).

### Properties

* * **directory**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The name of the template's parent directory.

    Returns `nil` if the template's parent directory is `/templates`.

  * **name**

    [string](https://shopify.dev/docs/api/liquid/basics#string) from a set of values

  * The name of the template's [type](https://shopify.dev/docs/themes/architecture/templates#template-types).

    | Possible values |
    | - |
    | 404 |
    | article |
    | blog |
    | cart |
    | collection |
    | list-collections |
    | customers/account |
    | customers/activate\_account |
    | customers/addresses |
    | customers/login |
    | customers/order |
    | customers/register |
    | customers/reset\_password |
    | gift\_card |
    | index |
    | page |
    | password |
    | product |
    | search |

  * **suffix**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The custom name of an [alternate template](https://shopify.dev/themes/architecture/templates#alternate-templates).

    Returns `nil` if the default template is being used.

###### Example

```json
{
  "directory": null,
  "name": "product",
  "suffix": null
}
```

---



<a id="objects-theme"></a>


## theme

Information about the current theme.

**deprecated:**

Deprecated because the values of this object's properties are subject to change, so can't be relied on within the theme.

If you want to link to the theme editor for the published theme, then you can use the URL path `/admin/themes/current/editor`.

While this object is deprecated in Liquid and shouldn't be used, you can still access it through the [REST Admin API](https://shopify.dev/api/admin-rest/current/resources/theme).

### Properties

* * **id**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The ID of the theme.

  * **name**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The name of the theme.

  * **role**

    [string](https://shopify.dev/docs/api/liquid/basics#string) from a set of values

  * The role of the theme.

    | Possible values | Description |
    | - | - |
    | main | The theme is published. Customers see it when they visit the online store. |
    | unpublished | The theme is unpublished. Customers can't see it. |
    | demo | The theme is installed on the store as a demo. The theme can't be published until the merchant buys the full version. |
    | development | The theme is used for development. The theme can't be published, and is temporary. |

###### Example

```json
{
  "id": 124051750977,
  "name": "Dawn",
  "role": "main"
}
```

---



<a id="objects-transaction"></a>


## transaction

A transaction associated with a checkout or order.

### Properties

* * **amount**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The amount of the transaction in the currency's subunit.

    The amount is in the customer's local (presentment) currency.

    For currencies without subunits, such as JPY and KRW, tenths and hundredths of a unit are appended. For example, 1000 Japanese yen is output as 100000.

    **Tip:** Use \<a href="/docs/api/liquid/filters/money-filters">money filters\</a> to output a formatted amount.

  * **buyer\_​pending\_​payment\_​instructions**

    array of [pending\_payment\_instruction\_input](https://shopify.dev/docs/api/liquid/objects/pending_payment_instruction_input)

  * A list of `pending_payment_instruction_input` header-value pairs, with payment method-specific details. The customer can use these details to complete their purchase offline.

    If the payment method doesn’t support pending payment instructions, then an empty array is returned.

    | Supported payment method | Expected Values |
    | - | - |
    | ShopifyPayments - Multibanco | \[{header="Entity", value="12345"}, {header="Reference", value="999999999"}] |

  * **buyer\_​pending\_​payment\_​notice**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * A notice that contains instructions for the customer on how to complete their payment. The messages are specific to the payment method used.

  * **created\_​at**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * A timestamp of when the transaction was created.

    **Tip:** Use the \<a href="/docs/api/liquid/filters/date">\<code>date\</code> filter\</a> to format the timestamp.

  * **gateway**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The [handleized](https://shopify.dev/docs/api/liquid/basics#modifying-handles) name of the payment provider used for the transaction.

  * **gateway\_​display\_​name**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The name of the payment provider used for the transaction.

  * **id**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The ID of the transaction.

  * **kind**

    [string](https://shopify.dev/docs/api/liquid/basics#string) from a set of values

  * The type of transaction.

    | Possible values | Description |
    | - | - |
    | authorization | The reserving of money that the customer has agreed to pay. |
    | capture | The transfer of the money that was reserved during the `authorization` step. |
    | sale | A combination of `authorization` and `capture` in one step. |
    | void | The cancellation of a pending `authorization` or `capture`. |
    | refund | The partial, or full, refund of captured funds. |

  * **name**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The name of the transaction.

  * **payment\_​details**

    [transaction\_payment\_details](https://shopify.dev/docs/api/liquid/objects/transaction_payment_details)

  * The transaction payment details.

  * **receipt**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * Information from the payment provider about the payment receipt.

    This includes things like whether the payment was a test, or an authorization code if there was one.

  * **show\_​buyer\_​pending\_​payment\_​instructions?**

    [boolean](https://shopify.dev/docs/api/liquid/basics#boolean)

  * Whether the transaction is pending, and whether additional customer info is required to process the payment.

  * **status**

    [string](https://shopify.dev/docs/api/liquid/basics#string) from a set of values

  * The status of the transaction.

    | Possible values |
    | - |
    | success |
    | pending |
    | failure |
    | error |

  * **status\_​label**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The status of the transaction, translated based on the current locale.

###### Example

```json
{
  "amount": "380.25",
  "created_at": "2022-06-15 19:13:14 -0400",
  "gateway": "shopify_payments",
  "gateway_display_name": "Shopify payments",
  "id": 5432242176065,
  "kind": "sale",
  "name": "c29944051400769.",
  "payment_details": {
    "credit_card_number": "•••• •••• •••• 4242",
    "credit_card_company": "Visa",
    "credit_card_last_four_digits": "4242",
    "receiver_info": null
  },
  "receipt": "#☠1☢\n---\nid: pi_3LB5Oh2m9fH5ulsO18aKrXyL\nobject: payment_intent\namount: 38025\namount_capturable: 0\namount_received: 38025\ncanceled_at: \ncancellation_reason: \ncapture_method: automatic\ncharges:\n  object: list\n  data:\n  - id: ch_3LB5Oh2m9fH5ulsO1KncBePo\n    object: charge\n    amount: 38025\n    application_fee: fee_1LB5Oi2m9fH5ulsOrVcBjr4k\n    balance_transaction:\n      id: txn_3LB5Oh2m9fH5ulsO1JtjGSxy\n      object: balance_transaction\n      exchange_rate: \n    captured: true\n    created: 1655334796\n    currency: cad\n    failure_code: \n    failure_message: \n    fraud_details: {}\n    livemode: false\n    metadata:\n      shop_id: '56174706753'\n      shop_name: Polina's Potent Potions\n      transaction_fee_total_amount: '791'\n      transaction_fee_tax_amount: '0'\n      payments_charge_id: '2076986474561'\n      order_transaction_id: '5432242176065'\n      manual_entry: 'false'\n      order_id: c29944051400769.1\n      email: cornelius.potionmaker@gmail.com\n    outcome:\n      network_status: approved_by_network\n      reason: \n      risk_level: normal\n      risk_score: 15\n      seller_message: Payment complete.\n      type: authorized\n    paid: true\n    payment_intent: pi_3LB5Oh2m9fH5ulsO18aKrXyL\n    payment_method: pm_1LB5Oh2m9fH5ulsOk67EqrsK\n    payment_method_details:\n      card:\n        brand: visa\n        checks:\n          address_line1_check: pass\n          address_postal_code_check: pass\n          cvc_check: pass\n        country: US\n        description: Visa Classic\n        ds_transaction_id: \n        exp_month: 1\n        exp_year: 2029\n        fingerprint: KE6OIQsc8EspGDeW\n        funding: credit\n        iin: '424242'\n        installments: \n        issuer: Stripe Payments UK Limited\n        last4: '4242'\n        mandate: \n        moto: \n        network: visa\n        network_token: \n        network_transaction_id: '541168454791087'\n        three_d_secure: \n        wallet: \n      type: card\n    refunded: false\n    source: \n    status: succeeded\n    mit_params:\n      network_transaction_id: '541168454791087'\n  has_more: false\n  total_count: 1\n  url: \"/v1/charges?payment_intent=pi_3LB5Oh2m9fH5ulsO18aKrXyL\"\nconfirmation_method: manual\ncreated: 1655334795\ncurrency: cad\nlast_payment_error: \nlivemode: false\nmetadata:\n  shop_id: '56174706753'\n  shop_name: Polina's Potent Potions\n  transaction_fee_total_amount: '791'\n  transaction_fee_tax_amount: '0'\n  payments_charge_id: '2076986474561'\n  order_transaction_id: '5432242176065'\n  manual_entry: 'false'\n  order_id: c29944051400769.1\n  email: cornelius.potionmaker@gmail.com\nnext_action: \npayment_method: pm_1LB5Oh2m9fH5ulsOk67EqrsK\npayment_method_types:\n- card\nsource: \nstatus: succeeded\n",
  "show_buyer_pending_payment_instructions?": null,
  "status": "success",
  "status_label": "Success"
}
```

---



<a id="objects-transaction-payment-details"></a>


## transaction\_​payment\_​details

Information about the payment methods used for a transaction.

### Properties

* * **credit\_​card\_​company**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The name of the company that issued the credit card used for the transaction.

  * **credit\_​card\_​last\_​four\_​digits**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The last four digits of the credit card number of the credit card used for the transaction.

  * **credit\_​card\_​number**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The credit card number of the credit card used for the transaction.

    All but the last four digits are redacted.

  * **gift\_​card**

    [gift\_card](https://shopify.dev/docs/api/liquid/objects/gift_card)

  * The gift card used for the transaction.

    If no gift card was used, then `nil` is returned.

###### Example

```json
{
  "credit_card_number": "•••• •••• •••• 4242",
  "credit_card_company": "Visa",
  "credit_card_last_four_digits": "4242"
}
```

---



<a id="objects-unit-price-measurement"></a>


## unit\_​price\_​measurement

Information about how units of a product variant are measured. It's used to calculate [unit prices](https://help.shopify.com/manual/products/details/product-pricing/unit-pricing#add-unit-prices-to-your-product).

### Properties

* * **measured\_​type**

    [string](https://shopify.dev/docs/api/liquid/basics#string) from a set of values

  * The type of unit measurement.

    | Possible values |
    | - |
    | volume |
    | weight |
    | length |
    | area |
    | count |

  * **quantity\_​unit**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The unit of measurement used to measure the [`quantity_value`](https://shopify.dev/docs/api/liquid/objects/unit_price_measurement#unit_price_measurement-quantity_value).

  * **quantity\_​value**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The quantity of the unit.

  * **reference\_​unit**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The unit of measurement used to measure the [`reference_value`](https://shopify.dev/docs/api/liquid/objects/unit_price_measurement#unit_price_measurement-reference_value).

  * **reference\_​value**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The quantity of the unit for the base unit price.

###### Example

```json
{
  "measured_type": "weight",
  "quantity_value": "500.0",
  "quantity_unit": "g",
  "reference_value": 1,
  "reference_unit": "kg"
}
```

---



<a id="objects-user"></a>


## user

The author of a blog article.

***

**Tip:** The information returned by the \<code>user\</code> object can be edited on the \<a href="https://www\.shopify.com/admin/settings/account">\<strong>Account\</strong> page\</a> of the Shopify admin.

***

### Properties

* * **account\_​owner**

    [boolean](https://shopify.dev/docs/api/liquid/basics#boolean)

  * Returns `true` if the author is the account owner of the store. Returns `false` if not.

  * **bio**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The bio associated with the author's account.

    If no bio is specified, then `nil` is returned.

  * **email**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The email associated with the author's account.

  * **first\_​name**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The first name associated with the author's account.

  * **homepage**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The URL for the personal website associated with the author's account.

    If no personal website is specified, then `nil` is returned.

  * **image**

    [image](https://shopify.dev/docs/api/liquid/objects/image)

  * The image associated with the author's account.

    If no image is specified, then `nil` is returned.

  * **last\_​name**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The last name associated with the author's account.

  * **name**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The first and last name associated with the author's account.

###### Example

```json
{
  "account_owner": false,
  "bio": "Polina got her first cauldron at the tender age of six, and she has been passionate about potions ever since!!",
  "email": "polinas.potent.potions@gmail.com",
  "first_name": "Polina",
  "homepage": null,
  "image": {},
  "last_name": "Waters",
  "name": "Polina Waters"
}
```

---



<a id="objects-user-agent"></a>


## user\_​agent

The user-agent, which is the name of the crawler, for a specific group in the [`robots.txt` file](https://shopify.dev/themes/architecture/templates/robots-txt-liquid).

The `user_agent` object consists of a `User-agent` directive, and a value of the name of the user-agent. For example:

```
User-agent: *
```

***

**Tip:** You can \<a href="/themes/seo/robots-txt">customize the \<code>robots.txt\</code> file\</a> with the \<a href="/themes/architecture/templates/robots-txt-liquid">\<code>robots.txt.liquid\</code> template\</a>.

***

### Properties

* * **directive**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * Returns `User-agent`.

  * **value**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The name of the user-agent.

###### Example

```json
{
  "directive": "User-agent",
  "value": "*"
}
```

---



<a id="objects-variant"></a>


## variant

A [product variant](https://help.shopify.com/manual/products/variants).

### Properties

* * **available**

    [boolean](https://shopify.dev/docs/api/liquid/basics#boolean)

  * Returns `true` if the variant is available. Returns `false` if not.

  * **barcode**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The barcode of the variant.

  * **compare\_​at\_​price**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The **compare at** price of the variant in the currency's subunit.

    The value is output in the customer's local (presentment) currency.

    For currencies without subunits, such as JPY and KRW, tenths and hundredths of a unit are appended. For example, 1000 Japanese yen is output as 100000.

    **Tip:** Use \<a href="/docs/api/liquid/filters/money-filters">money filters\</a> to output a formatted price.

  * **featured\_​image**

    [image](https://shopify.dev/docs/api/liquid/objects/image)

  * The image attached to the variant.

    **Note:** This is the same value as \<a href="/docs/api/liquid/objects/variant#variant-image">\<code>variant.image\</code>\</a>.

  * **featured\_​media**

    [media](https://shopify.dev/docs/api/liquid/objects/media)

  * The first media object attached to the variant.

  * **id**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The ID of the variant.

  * **image**

    [image](https://shopify.dev/docs/api/liquid/objects/image)

  * The image attached to the variant.

    **Note:** This is the same value as \<a href="/docs/api/liquid/objects/variant#variant-featured\_image">\<code>\<span class="PreventFireFoxApplyingGapToWBR">variant.featured\<wbr/>\_image\</span>\</code>\</a>.

  * **incoming**

    [boolean](https://shopify.dev/docs/api/liquid/basics#boolean)

  * Returns `true` if the variant has incoming inventory. Returns `false` if not.

    Incoming inventory information is populated by [inventory transfers](https://help.shopify.com/manual/products/inventory/transfers), [purchase orders](https://help.shopify.com/manual/products/inventory/purchase-orders), and [third-party apps](https://shopify.dev/docs/apps/fulfillment/inventory-management-apps).

  * **inventory\_​management**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The inventory management service of the variant.

    If inventory isn't tracked, then `nil` is returned.

  * **inventory\_​policy**

    [string](https://shopify.dev/docs/api/liquid/basics#string) from a set of values

  * Whether the variant should continue to be sold when it's out of stock.

    **Tip:** To learn about why merchants might want to continue selling products when they\&#39;re out of stock, visit the \<a href="https://help.shopify.com/manual/products/inventory/getting-started-with-inventory/selling-when-out-of-stock">Shopify Help Center\</a>.

    | Possible values | Description |
    | - | - |
    | continue | Continue selling when the variant is out of stock. |
    | deny | Stop selling when the variant is out of stock. |

  * **inventory\_​quantity**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The inventory quantity of the variant.

    If inventory isn't tracked, then the number of items sold is returned.

  * **matched**

    [boolean](https://shopify.dev/docs/api/liquid/basics#boolean)

  * Returns `true` if the variant has been matched by a [storefront filter](https://shopify.dev/themes/navigation-search/filtering/storefront-filtering) or no filters are applied. Returns `false` if it hasn't.

  * **metafields**

  * The [metafields](https://shopify.dev/docs/api/liquid/objects/metafield) applied to the variant.

    **Tip:** To learn about how to create metafields, refer to \<a href="/apps/metafields/manage">Create and manage metafields\</a> or visit the \<a href="https://help.shopify.com/manual/metafields">Shopify Help Center\</a>.

  * **next\_​incoming\_​date**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The arrival date for the next incoming inventory of the variant.

    Incoming inventory information is populated by [inventory transfers](https://help.shopify.com/manual/products/inventory/transfers), [purchase orders](https://help.shopify.com/manual/products/inventory/purchase-orders), and [third-party apps](https://shopify.dev/docs/apps/fulfillment/inventory-management-apps).

    **Tip:** Use the \<a href="/docs/api/liquid/filters/date">\<code>date\</code> filter\</a> to format the date.

  * **options**

    [product\_option\_value](https://shopify.dev/docs/api/liquid/objects/product_option_value)

  * The values of the variant for each [product option](https://shopify.dev/docs/api/liquid/objects/product_option).

    ExampleOutput the options of each variant

    ##### Code

    ```liquid
    {% for variant in product.variants -%}
      {%- capture options -%}
        {% for option in variant.options -%}
          {{ option }}{%- unless forloop.last -%}/{%- endunless -%}
        {%- endfor %}
      {%- endcapture -%}
      
      {{ variant.id }}: {{ options }}
    {%- endfor %}
    ```

    ##### Data

    ```json
    {
      "product": {
        "variants": [
          {
            "id": 39897499729985,
            "options": [
              "S",
              "Low"
            ]
          },
          {
            "id": 39897499762753,
            "options": [
              "S",
              "Medium"
            ]
          },
          {
            "id": 39897499795521,
            "options": [
              "S",
              "High"
            ]
          },
          {
            "id": 39897499828289,
            "options": [
              "M",
              "Low"
            ]
          },
          {
            "id": 39897499861057,
            "options": [
              "M",
              "Medium"
            ]
          },
          {
            "id": 39897499893825,
            "options": [
              "M",
              "High"
            ]
          },
          {
            "id": 39897499926593,
            "options": [
              "L",
              "Low"
            ]
          },
          {
            "id": 39897499959361,
            "options": [
              "L",
              "Medium"
            ]
          },
          {
            "id": 39897499992129,
            "options": [
              "L",
              "High"
            ]
          }
        ]
      }
    }
    ```

    ##### Output

    ```html
    39897499729985: S/Low

    39897499762753: S/Medium

    39897499795521: S/High

    39897499828289: M/Low

    39897499861057: M/Medium

    39897499893825: M/High

    39897499926593: L/Low

    39897499959361: L/Medium

    39897499992129: L/High
    ```

  * **price**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The price of the variant in the currency's subunit.

    The value is output in the customer's local (presentment) currency.

    For currencies without subunits, such as JPY and KRW, tenths and hundredths of a unit are appended. For example, 1000 Japanese yen is output as 100000.

    **Tip:** Use \<a href="/docs/api/liquid/filters/money-filters">money filters\</a> to output a formatted price.

  * **product**

    [product](https://shopify.dev/docs/api/liquid/objects/product)

  * The parent product of the variant.

  * **quantity\_​price\_​breaks**

    array of [quantity\_price\_break](https://shopify.dev/docs/api/liquid/objects/quantity_price_break)

  * Returns `quantity_price_break` objects for the variant in the current customer context.

  * **quantity\_​price\_​breaks\_​configured?**

    [boolean](https://shopify.dev/docs/api/liquid/basics#boolean)

  * Returns `true` if the variant has any quantity price breaks available in the current customer context. Returns `false` if it doesn't.

  * **quantity\_​rule**

    [quantity\_rule](https://shopify.dev/docs/api/liquid/objects/quantity_rule)

  * The quantity rule for the variant.

    If no rule exists, then a default value is returned.

    This rule can be set as part of a [B2B catalog](https://help.shopify.com/manual/b2b/catalogs/quantity-pricing).

    **Note:** The default quantity rule is \<code>min=1,max=null,increment=1\</code>.

  * **requires\_​selling\_​plan**

    [boolean](https://shopify.dev/docs/api/liquid/basics#boolean)

  * Returns `true` if the variant's product is set to require a `selling_plan` when being added to the cart. Returns `false` if not.

  * **requires\_​shipping**

    [boolean](https://shopify.dev/docs/api/liquid/basics#boolean)

  * Returns `true` if the variant requires shipping. Returns `false` if it doesn't.

  * **selected**

    [boolean](https://shopify.dev/docs/api/liquid/basics#boolean)

  * Returns `true` if the variant is currently selected. Returns `false` if it's not.

    **Note:** The selected variant is determined by the \<code>variant\</code> URL parameter. This URL parameter is available on product pages URLs only.

  * **selected\_​selling\_​plan\_​allocation**

    [selling\_plan\_allocation](https://shopify.dev/docs/api/liquid/objects/selling_plan_allocation)

  * The selected `selling_plan_allocation`.

    If no selling plan is selected, then `nil` is returned.

    **Note:** The selected selling plan is determined by the \<code>\<span class="PreventFireFoxApplyingGapToWBR">selling\<wbr/>\_plan\</span>\</code> URL parameter.

  * **selling\_​plan\_​allocations**

    array of [selling\_plan\_allocation](https://shopify.dev/docs/api/liquid/objects/selling_plan_allocation)

  * The `selling_plan_allocation` objects for the variant.

  * **sku**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The SKU of the variant.

  * **store\_​availabilities**

    array of [store\_availability](https://shopify.dev/docs/api/liquid/objects/store_availability)

  * The store availabilities for the variant.

    The array is defined in only the following cases:

    * `variant.selected` is `true`
    * The variant is the product's first available variant. For example, `product.first_available_variant` or `product.selected_or_first_available_variant`.

  * **taxable**

    [boolean](https://shopify.dev/docs/api/liquid/basics#boolean)

  * Returns `true` if taxes should be charged on the variant. Returns `false` if not.

  * **title**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * A concatenation of each variant option, separated by a `/`.

    ExampleThe variant title

    ##### Code

    ```liquid
    {{ product.variants.first.title }}
    ```

    ##### Data

    ```json
    {
      "product": {
        "variants": [
          {
            "title": "S / Low"
          },
          {
            "title": "S / Medium"
          },
          {
            "title": "S / High"
          },
          {
            "title": "M / Low"
          },
          {
            "title": "M / Medium"
          },
          {
            "title": "M / High"
          },
          {
            "title": "L / Low"
          },
          {
            "title": "L / Medium"
          },
          {
            "title": "L / High"
          }
        ]
      }
    }
    ```

    ##### Output

    ```html
    S / Low
    ```

  * **unit\_​price**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The [unit price](https://help.shopify.com/manual/products/details/product-pricing/unit-pricing#add-unit-prices-to-your-product) of the variant in the currency's subunit.

    The price reflects any discounts that are applied to the line item. The value is output in the customer's local (presentment) currency.

    For currencies without subunits, such as JPY and KRW, tenths and hundredths of a unit are appended. For example, 1000 Japanese yen is output as 100000.

    **Tip:** Use the \<a href="/docs/api/liquid/filters/unit\_price\_with\_measurement">\<code>\<span class="PreventFireFoxApplyingGapToWBR">unit\<wbr/>\_price\<wbr/>\_with\<wbr/>\_measurement\</span>\</code> filter\</a> with this property and the \<code>\<span class="PreventFireFoxApplyingGapToWBR">variant.unit\<wbr/>\_price\<wbr/>\_measurement\</span>\</code> property to output a formatted unit price with measurement.

    To learn about how to display unit prices in your theme, refer to [Unit pricing](https://shopify.dev/themes/pricing-payments/unit-pricing).

  * **unit\_​price\_​measurement**

    [unit\_price\_measurement](https://shopify.dev/docs/api/liquid/objects/unit_price_measurement)

  * The unit price measurement of the variant.

    To learn about how to display unit prices in your theme, refer to [Unit pricing](https://shopify.dev/themes/pricing-payments/unit-pricing).

    **Tip:** Use the \<a href="/docs/api/liquid/filters/unit\_price\_with\_measurement">\<code>\<span class="PreventFireFoxApplyingGapToWBR">unit\<wbr/>\_price\<wbr/>\_with\<wbr/>\_measurement\</span>\</code> filter\</a> with the \<code>\<span class="PreventFireFoxApplyingGapToWBR">variant.unit\<wbr/>\_price\</span>\</code> property and this property to output a formatted unit price with measurement.

  * **url**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The URL of the variant.

    Variant URLs use the following structure:

    ```
    /products/[product-handle]?variant=[variant-id]
    ```

  * **weight**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The weight of the variant in grams.

    **Tip:** Use the \<a href="/docs/api/liquid/filters/weight\_with\_unit">\<code>\<span class="PreventFireFoxApplyingGapToWBR">weight\<wbr/>\_with\<wbr/>\_unit\</span>\</code>\</a> filter to format the weight in \<a href="https://www\.shopify.com/admin/settings/general">the store\&#39;s format\</a>.\</p> \<p>Use \<code>\<span class="PreventFireFoxApplyingGapToWBR">variant.weight\<wbr/>\_in\<wbr/>\_unit\</span>\</code> to output the weight in the unit configured on the variant.

  * **weight\_​in\_​unit**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The weight of the variant in the unit specified by `variant.weight_unit`.

    **Tip:** To output this weight, use this property, and the \<code>\<span class="PreventFireFoxApplyingGapToWBR">variant.weight\<wbr/>\_unit\</span>\</code> property, with the \<a href="/docs/api/liquid/filters/weight\_with\_unit">\<code>\<span class="PreventFireFoxApplyingGapToWBR">weight\<wbr/>\_with\<wbr/>\_unit\</span>\</code> filter\</a>.

  * **weight\_​unit**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The unit for the weight of the variant.

    **Tip:** To output the weight of a variant in this unit, use this property, and the \<code>\<span class="PreventFireFoxApplyingGapToWBR">variant.weight\<wbr/>\_in\<wbr/>\_unit\</span>\</code> property, with the \<a href="/docs/api/liquid/filters/weight\_with\_unit">\<code>\<span class="PreventFireFoxApplyingGapToWBR">weight\<wbr/>\_with\<wbr/>\_unit\</span>\</code> filter\</a>.

### Deprecated Properties

* * **option1**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

    Deprecated

  * The value of the variant for the first product option.

    If there's no first product option, then `nil` is returned.

    **Deprecated:**

    Deprecated. Prefer to use [`variant.options`](https://shopify.dev/docs/api/liquid/objects/variant#variant-options) instead.

  * **option2**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

    Deprecated

  * The value of the variant for the second product option.

    If there's no second product option, then `nil` is returned.

    **Deprecated:**

    Deprecated. Prefer to use [`variant.options`](https://shopify.dev/docs/api/liquid/objects/variant#variant-options) instead.

  * **option3**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

    Deprecated

  * The value of the variant for the third product option.

    If there's no third product option, then `nil` is returned.

    **Deprecated:**

    Deprecated. Prefer to use [`variant.options`](https://shopify.dev/docs/api/liquid/objects/variant#variant-options) instead.

###### Example

```json
{
  "available": true,
  "barcode": "",
  "compare_at_price": null,
  "featured_image": null,
  "featured_media": null,
  "id": 39897499729985,
  "image": null,
  "incoming": false,
  "inventory_management": "shopify",
  "inventory_policy": "deny",
  "inventory_quantity": 5,
  "matched": true,
  "metafields": {},
  "next_incoming_date": null,
  "option1": "S",
  "option2": "Low",
  "option3": null,
  "options": [],
  "price": "10.00",
  "product": {},
  "quantity_price_breaks": [],
  "quantity_rule": {},
  "requires_selling_plan": false,
  "requires_shipping": true,
  "selected": false,
  "selected_selling_plan_allocation": null,
  "selling_plan_allocations": [],
  "sku": "",
  "store_availabilities": [],
  "taxable": true,
  "title": "S / Low",
  "unit_price": null,
  "unit_price_measurement": null,
  "url": {},
  "weight": 500,
  "weight_in_unit": 500,
  "weight_unit": "g"
}
```

---



<a id="objects-video"></a>


## video

Information about a video uploaded as [product media](https://shopify.dev/docs/api/liquid/objects/product-media) or a [`file_reference` metafield](https://shopify.dev/apps/metafields/types).

***

**Tip:** Use the \<a href="/docs/api/liquid/filters/video\_tag">\<code>\<span class="PreventFireFoxApplyingGapToWBR">video\<wbr/>\_tag\</span>\</code> filter\</a> to output the video in an HTML \<code>\&lt;video\&gt;\</code> tag.

***

### Properties

* * **alt**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The alt text of the video.

  * **aspect\_​ratio**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The aspect ratio of the video as a decimal.

  * **duration**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The duration of the video in milliseconds.

  * **id**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The ID of the video.

  * **media\_​type**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The media type of the model. Always returns `video`.

    ExampleFilter for media of a specific type

    You can use the `media_type` property with the [`where` filter](https://shopify.dev/docs/api/liquid/filters/where) to filter the [`product.media` array](https://shopify.dev/docs/api/liquid/objects/product#product-media) for all media of a desired type.

    ##### Code

    ```liquid
    {% assign videos = product.media | where: 'media_type', 'video' %}

    {% for video in videos %}
      {{- video | video_tag }}
    {% endfor %}
    ```

    ##### Data

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

    ##### Output

    ```html
    <video playsinline="playsinline" preload="metadata" aria-label="Potion beats" poster="//polinas-potent-potions.myshopify.com/cdn/shop/products/4edc28a708b7405093a927cebe794f1a.thumbnail.0000000_small.jpg?v=1655255324"><source src="//polinas-potent-potions.myshopify.com/cdn/shop/videos/c/vp/4edc28a708b7405093a927cebe794f1a/4edc28a708b7405093a927cebe794f1a.HD-1080p-7.2Mbps.mp4?v=0" type="video/mp4"><img src="//polinas-potent-potions.myshopify.com/cdn/shop/products/4edc28a708b7405093a927cebe794f1a.thumbnail.0000000_small.jpg?v=1655255324"></video>
    ```

  * **position**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The position of the video in the [`product.media`](https://shopify.dev/docs/api/liquid/objects/product#product-media) array.

  * **preview\_​image**

    [image](https://shopify.dev/docs/api/liquid/objects/image)

  * A preview image for the video.

  * **sources**

    array of [video\_source](https://shopify.dev/docs/api/liquid/objects/video_source)

  * The source files for the video.

###### Example

```json
{
  "alt": "Potion beats",
  "aspect_ratio": 1.779,
  "duration": 34801,
  "id": 22070396551233,
  "media_type": "video",
  "position": 2,
  "preview_image": {},
  "sources": []
}
```

---



<a id="objects-video-source"></a>


## video\_​source

Information about the source files for a video.

### Properties

* * **format**

    [string](https://shopify.dev/docs/api/liquid/basics#string) from a set of values

  * The format of the video source file.

    **Note:** When mp4 videos are uploaded, Shopify generates an m3u8 file as an additional video source. An m3u8 file enables video players to leverage HTTP live streaming (HLS), resulting in an optimized video experience based on the user\&#39;s internet connection.

    | Possible values |
    | - |
    | mov |
    | mp4 |
    | m3u8 |

  * **height**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The height of the video source file.

  * **mime\_​type**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the video source file.

  * **url**

    [string](https://shopify.dev/docs/api/liquid/basics#string)

  * The [CDN URL](https://shopify.dev/themes/best-practices/performance/platform#shopify-cdn) of the video source file.

  * **width**

    [number](https://shopify.dev/docs/api/liquid/basics#number)

  * The width of the video source file.

###### Example

```json
{
  "format": "mp4",
  "height": 1080,
  "mime_type": "video/mp4",
  "url": "//polinas-potent-potions.myshopify.com/cdn/shop/videos/c/vp/4edc28a708b7405093a927cebe794f1a/4edc28a708b7405093a927cebe794f1a.HD-1080p-7.2Mbps.mp4?v=0",
  "width": 1920
}
```

---
