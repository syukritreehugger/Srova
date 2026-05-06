# Shopify Storefront Web Components Reference (Indonesian / English)

> Referensi lengkap **storefront-web-components** Shopify API yang disusun ulang dari https://shopify.dev/docs/api/storefront-web-components.
> Dokumen ini dirancang untuk pengembang berbahasa Indonesia, namun seluruh konten teknis (skema, tipe, nama field, contoh kode) dipertahankan dalam bahasa Inggris asli untuk memastikan akurasi.


| Item | Nilai |
|------|-------|
| Sumber | `https://shopify.dev/docs/api/storefront-web-components` |
| Total halaman | **18** |
| Tanggal kompilasi | 2026-05-02 |
| Bahasa | Indonesia (intro/ToC) + English (konten teknis) |


## Daftar Isi (Table of Contents)

- [Storefront Web Components](#storefront-web-components-storefront-web-components)
- [Getting started](#getting-started-getting-started)
- [Common patterns](#common-patterns-common-patterns)
- [Custom data](#custom-data-custom-data)
- [shopify-attr](#shopify-attr-shopify-attr)
- [shopify-account](#shopify-account-shopify-account)
- [shopify-cart](#shopify-cart-shopify-cart)
- [shopify-context](#shopify-context-shopify-context)
- [shopify-list-context](#shopify-list-context-shopify-list-context)
- [shopify-data](#shopify-data-shopify-data)
- [shopify-media](#shopify-media-shopify-media)
- [shopify-money](#shopify-money-shopify-money)
- [shopify-store](#shopify-store-shopify-store)
- [shopify-variant-selector](#shopify-variant-selector-shopify-variant-selector)
- [Storefront Web Components — storefront-web-components](#storefront-web-components-storefront-web-components-14)
- [Common patterns — common-patterns](#common-patterns-common-patterns-15)
- [Custom data — custom-data](#custom-data-custom-data-16)
- [Getting started — getting-started](#getting-started-getting-started-17)

---

<a id="storefront-web-components-storefront-web-components"></a>

## Storefront Web Components

## Storefront Web Components

Storefront Web Components let you bring Shopify-powered commerce capabilities to any website. Display products, showcase collections, and offer a checkout, all with a few lines of embedded HTML.

### How Storefront Web Components work

Storefront Web Components are a set of HTML components that handle the complexity of querying Shopify's Storefront API, letting you display products, collections, and shopping cart functionality on your website without having to write complex JavaScript code.

After you add the `<shopify-store>` and `<shopify-context>` components to your markup and configure their attributes, you can access your store's data and then style it using CSS or HTML to create tailored shopping experiences.

Storefront Web Components are built for a wide range of use cases, from embedding your products and collections within existing content to building new pages for your site.

[Full page - Collection page](https://webcomponents.shopify.dev/playground?view=editor\&preset=product-cards-discover)

[Full page - Blog post](https://webcomponents.shopify.dev/playground?view=editor\&preset=blog-post)

[Embedded - Product card](https://webcomponents.shopify.dev/playground?view=editor\&preset=ready-product-card-first)

![How Storefront Web Components work](https://shopify.dev/assets/assets/images/api/storefront-web-components/storefront-web-components-example-o7UgYKdg.png)

***

### Resources

Follow the step-by-step guide to add Storefront Web Components to your project or browse sample code with live previews in the playground.

[Learn more - Getting started guide](https://shopify.dev/docs/api/storefront-web-components/getting-started/)

[Explore - Storefront Web Components playground](https://webcomponents.shopify.dev/playground)

***

---

<a id="getting-started-getting-started"></a>

## Getting started

## Getting started

This guide provides step-by-step instructions for adding Storefront Web Components to your website. If you want to use an LLM to generate code, include the [LLMs.txt](https://webcomponents.shopify.dev/llms.txt) file with your prompt to guide the model's output.

***

### Step 1: Connect your store

Open the HTML file in the project where you want to use Storefront Web Components, and add the script tag shown here. Beneath it, add a [`<shopify-store>` component](https://shopify.dev/docs/api/storefront-web-components/components/shopify-store), with the domain of your store (for example, `https://demostore.mock.shop/`).

The `<shopify-store>` component supports optional country and language attributes that let you display pricing and content for a specific market.

You don't need an access token to use Storefront Web Components. However, if you want to display the inventory count or any custom data about a product, then you need to add an access token to the `<shopify-store>` component as well. To get an access token:

1. Install the [Headless channel](https://apps.shopify.com/headless) from the Shopify App Store.
2. To generate an access token, navigate to the Headless channel in your Shopify admin and click **Create storefront**.
3. In the **Manage API access** section, click **Manage** for the Storefront API, and then copy the public access token.
4. In your project, add a `public-access-token` attribute with your token to the `<shopify-store>` component (for example, `public-access-token="your-access-token"`).

**Using LLMs with Storefront Web Components:**

If you want to use an LLM to generate code, include the [LLMs.txt](https://webcomponents.shopify.dev/llms.txt) file with your prompt to guide the model's output.

### Storefront Web Components setup

```html
<script src="https://cdn.shopify.com/storefront/web-components.js">
</script>


<shopify-store
  store-domain="https://your-store.myshopify.com"
  country="US"
  language="en"
>
</shopify-store>
```

***

### Step 2: Set the context

After adding the script tag and `<shopify-store>` component, add a [`<shopify-context>` component](https://shopify.dev/docs/api/storefront-web-components/components/shopify-context). This defines which Shopify data will be available.

Each `<shopify-context>` component requires two attributes:

* `type`: Specifies what kind of data you want (for example, `product`).
* `handle`: Identifies the specific item. For example, the handle for the URL [`demostore.mock.shop/products/men-t-shirt`](https://demostore.mock.shop/products/men-t-shirt) is `men-t-shirt`.

If you're working with a single storefront, then you can add the `<shopify-context>` component anywhere on your page (it doesn't need to be inside the `<shopify-store>` component). If you're working with multiple storefronts, then nest the context inside its corresponding store component.

Every `<shopify-context>` component also requires a template component, which contains the data you want to display. That template won't render until the context loads. You'll populate this component in the next step.

### Setup context

```html
<script src="https://cdn.shopify.com/storefront/web-components.js">
</script>


<shopify-store
  store-domain="https://your-store.myshopify.com"
>
</shopify-store>


<shopify-context
  type="product"
  handle="your-product-handle"
>
  <template>
    <!-- This template won't be rendered until the context is loaded -->
  </template>
</shopify-context>
```

***

### Step 3: Load Shopify data

Inside a context template, you can use any standard HTML markup along with Shopify's data components.

The [`shopify-data`](https://shopify.dev/docs/api/storefront-web-components/components/shopify-data) component is used to display Shopify data on your page. Here's how it works:

* It requires a `query` attribute that specifies which data to display.
* The query uses dot notation to access data fields (for example, `query="product.title"`).
* It looks for the nearest matching `<shopify-context>` component to find the data.
* It outputs plain text that you can style with your own HTML elements.

In this example, `<shopify-data query="product.title">` finds the nearest product context (based on its `handle` attribute), accesses its `title` property, and displays it as text.

Since the component outputs a text node, to match your site's design you can wrap it in any necessary HTML elements. The component also supports rich text fields like `product.descriptionHtml`.

### Data loading

```html
<script src="https://cdn.shopify.com/storefront/web-components.js"></script>


<shopify-store
  store-domain="https://your-store.myshopify.com"
>
</shopify-store>


<shopify-context
  type="product"
  handle="your-product-handle"
>
  <template>
    <!-- shopify-data renders a text node -->
    <h1 class="your-style">
      <shopify-data query="product.title">
      </shopify-data>
    </h1>


    <p>
      <!-- This renders a rich text description -->
      <shopify-data query="product.descriptionHtml">
      </shopify-data>
    </p>
  </template>
</shopify-context>
```

***

### Step 4: Format components

Some types of data , like `currency` and `media`, require extra formatting to display properly. For these types of data, you can use the following components:

* [`shopify-money`](https://shopify.dev/docs/api/storefront-web-components/components/shopify-money): Accepts a query reference to a money object, and uses the store's country and language market to format it correctly.
* [`shopify-media`](https://shopify.dev/docs/api/storefront-web-components/components/shopify-media): Accepts an image reference and generates an image element with `srcset` and `sizes` attributes.

### Formatting components

```html
<script src="https://cdn.shopify.com/storefront/web-components.js">
</script>


<shopify-store
  store-domain="https://your-store.myshopify.com"
>
</shopify-store>


<shopify-context
  type="product"
  handle="your-product-handle"
>
  <template>
    <!-- Display the product price -->
    <shopify-money
      query="product.selectedOrFirstAvailableVariant.price"
      format="money_with_currency">
    </shopify-money>


    <!-- Display the product image -->
    <shopify-media
      query="product.selectedOrFirstAvailableVariant.image"
      width="400"
      height="400"
    >
    </shopify-media>
  </template>
</shopify-context>
```

***

### Step 5: Connect to checkout

You can add buttons to your components that let customers buy products, view product details, or [add products to their cart](https://shopify.dev/docs/api/storefront-web-components/components/shopify-cart).

To add a "Buy now" button that redirects the customer to the checkout page:

1. Add a `button` component inside a [shopify-context component](https://shopify.dev/docs/api/storefront-web-components/components/shopify-context) that's associated with a product.

2. Call the `buyNow()` method in the `button` component's `onclick` attribute, and make sure it includes an event object whose target is inside a `shopify-context` component.

When the customer clicks the button, the component will redirect them to the checkout page with the selected product.

To learn more about different button actions, see [Common patterns](https://shopify.dev/docs/api/storefront-web-components/common-patterns).

### Buy now button example

```html
<shopify-store
  id="store"
  store-domain="https://your-store.myshopify.com"
>
</shopify-store>


<!-- The context is bound to the store -->
<shopify-context
  type="product"
  handle="handle-of-product"
>
<template>
  <shopify-variant-selector></shopify-variant-selector>
  <!-- The product added will be whatever
  variant is selected for the context product handle.
  The disabled attribute is added if the variant is not available for sale.
  -->
  <button
    onclick="getElementById('store').buyNow(event);"
    shopify-attr--disabled="!product.selectedOrFirstAvailableVariant.availableForSale"
  >
    Buy now
  </button>
</template>
</shopify-context>
```

***

### Next steps

Now that you've set up the basic Storefront Web Components, you can use others to add new types of data or functionality to your website. Components are available for common commerce features and design patterns, including:

* [`shopify-list-context`](https://shopify.dev/docs/api/storefront-web-components/components/shopify-list-context): Displays multiple items in a repeating format, like a list of products or collections.
* [`shopify-cart`](https://shopify.dev/docs/api/storefront-web-components/components/shopify-cart): Provides simple shopping cart using a native [HTML `<dialog>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog).
* [`shopify-variant-selector`](https://shopify.dev/docs/api/storefront-web-components/components/shopify-variant-selector): Creates a form that lets customers choose between different product options (like sizes, colors, or materials).

[Explore - Storefront Web Components playground](https://webcomponents.shopify.dev/playground)

[Learn more - Storefront Web Components reference](https://shopify.dev/docs/api/storefront-web-components/components/shopify-cart)

***

---

<a id="common-patterns-common-patterns"></a>

## Common patterns

## Common patterns

Storefront Web Components can be customized for many different applications. This guide covers some of the most common ways they can be used to sell online, and includes ready-to-use examples that you can adapt to your own storefront. To learn more, see the [component documentation](https://shopify.dev/docs/api/storefront-web-components/components/shopify-cart).

***

### Buy now button

Add a button that redirects the customer to a Shopify-hosted checkout page. This is useful when you want to sell a single product.

To create a "Buy now" button:

1. Add a `button` component inside a [shopify-context component](https://shopify.dev/docs/api/storefront-web-components/components/shopify-context) that's associated with a product.

2. Call the `buyNow()` method in the `button` component's `onclick` attribute.

   * The method needs an event object where the event target must be inside a product [context component](https://shopify.dev/docs/api/storefront-web-components/components/shopify-context).
   * The component will redirect the customer to the checkout page with the selected product.

3. Customize the state and location of the checkout page:

   * Add discount codes by passing them in the options parameter: `{discountCodes: ['CODE1', 'CODE2']}`
   * Set the target window or tab for the checkout page: `{target: '_blank'}`
   * Combine both: `{discountCodes: ['SAVE10'], target: '_blank'}`

4. Configure the button state with the `shopify-attr--disabled` attribute. You can use this to automatically disable the button when the product variant is not available for sale.

**Note:**

You can mix "Buy now" buttons from different stores on the same page. Each button will open the checkout page of its own store.

###### 'Buy now' button example

Add a button that redirects the customer to a Shopify-hosted checkout page.

###### Include discount codes

Add discount codes to the checkout. This applies the discount codes automatically when the customer reaches checkout.

###### Sell from multiple stores

Use "Buy now" buttons from multiple stores on the same page. Each button will open the checkout page of its own store.

###### Set a custom target window

Choose where the checkout page opens by setting the target as a new tab or the same tab. You can also specify discount codes that will be applied to the cart.

### Buy now button example

```html
<shopify-store
    id="store"
    store-domain="https://your-store.myshopify.com"
  >
  </shopify-store>
  
  <!-- The context is bound to the store -->
  <shopify-context
    type="product"
    handle="handle-of-product"
  >
  <template>
    <shopify-variant-selector></shopify-variant-selector>
    <!-- The product added will be whatever
    variant is selected for the context product handle.
    The disabled attribute is added if the variant is not available for sale.
    -->
    <button
      onclick="getElementById('store').buyNow(event);"
      shopify-attr--disabled="!product.selectedOrFirstAvailableVariant.availableForSale"
    >
      Buy now
    </button>
  </template>
  </shopify-context>
```

### Use discount codes with 'Buy now' buttons

```html
<shopify-store
    store-domain="https://your-store.myshopify.com"
  >
  </shopify-store>
  
  <shopify-context
    type="product"
    handle="handle-of-product"
  >
  <template>
    <shopify-variant-selector></shopify-variant-selector>
    <!-- Checkout opens with discount codes applied automatically -->
    <button
      onclick="buyNowWithDiscount(event)"
      shopify-attr--disabled="!product.selectedOrFirstAvailableVariant.availableForSale"
    >
      Buy now with discount
    </button>
    
    <script>
      function buyNowWithDiscount(event) {
        document.querySelector('shopify-store').buyNow(event, {
          discountCodes: ['SAVE10', 'FREESHIP']
        });
      }
    </script>
  </template>
  </shopify-context>
```

### Sell from multiple stores

```html
<!-- First store -->
  <shopify-store
    store-domain="https://your-first-store.myshopify.com"
  >
    <shopify-context
      type="product"
      handle="snowboard"
    >
    <template>
      <h2>Product from Store 1</h2>
      <h3><shopify-data query="product.title"></shopify-data></h3>
      <shopify-variant-selector></shopify-variant-selector>
      <button
        onclick="document.querySelector('shopify-store').buyNow(event);"
        shopify-attr--disabled="!product.selectedOrFirstAvailableVariant.availableForSale"
      >
        Buy now from Store 1
      </button>
    </template>
    </shopify-context>
  </shopify-store>
  
  <!-- Second store -->
  <shopify-store
    store-domain="https://your-second-store.myshopify.com"
  >
    <shopify-context
      type="product"
      handle="t-shirt"
    >
    <template>
      <h2>Product from Store 2</h2>
      <h3><shopify-data query="product.title"></shopify-data></h3>
      <shopify-variant-selector></shopify-variant-selector>
      <button
        onclick="document.querySelector('shopify-store').buyNow(event);"
        shopify-attr--disabled="!product.selectedOrFirstAvailableVariant.availableForSale"
      >
        Buy now from Store 2
      </button>
    </template>
    </shopify-context>
  </shopify-store>
```

### Custom target window

```html
<shopify-store
    store-domain="https://your-store.myshopify.com"
  >
  </shopify-store>
  
  <shopify-context
    type="product"
    handle="handle-of-product"
  >
  <template>
    <shopify-variant-selector></shopify-variant-selector>
    
    <!-- Buy now opening in the same tab -->
    <button
      onclick="document.querySelector('shopify-store').buyNow(event, {target: '_self'});"
      shopify-attr--disabled="!product.selectedOrFirstAvailableVariant.availableForSale"
    >
      Buy now (same tab)
    </button>
    
    <!-- Buy now opening in a new tab -->
    <button
      onclick="document.querySelector('shopify-store').buyNow(event, {target: '_blank'});"
      shopify-attr--disabled="!product.selectedOrFirstAvailableVariant.availableForSale"
    >
      Buy now (new tab)
    </button>
    
    <!-- Buy now with discount codes and custom target -->
    <button
      onclick="document.querySelector('shopify-store').buyNow(event, {target: '_blank', discountCodes: ['SAVE10']});"
      shopify-attr--disabled="!product.selectedOrFirstAvailableVariant.availableForSale"
    >
      Buy now with discount (new tab)
    </button>
  </template>
  </shopify-context>
```

***

### Add to cart button

Add a button that lets customers add your products to their cart. This is useful when you want to sell multiple products, because it lets customers add products to their cart without being redirected from your site to the checkout page.

To create an "Add to cart" button:

1. Add a `button` component inside a [shopify-context component](https://shopify.dev/docs/api/storefront-web-components/components/shopify-context) that's associated with a product.

2. Call the `addLine()` method in the `button` component's `onclick` attribute to add the product to the customer's cart.

   * This method requires an event object or a product data object.
   * If using an event, the event target must be inside a product [context component](https://shopify.dev/docs/api/storefront-web-components/components/shopify-context).

3. Display the cart using a native [HTML `<dialog>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog).

   * To show it as a popup modal, call the `showModal()` method.

4. Customize the cart's styling and content with CSS parts and slots. [View examples](https://shopify.dev/docs/api/storefront-web-components/components/shopify-cart#examples)

**Note:**

The cart component doesn't support mixing products from multiple stores.

[API docs - shopify-cart component](https://shopify.dev/docs/api/storefront-web-components/components/shopify-cart)

### Add to cart example

```html
<shopify-store
  store-domain="https://your-store.myshopify.com"
>
</shopify-store>


<!-- The context is bound to the store -->
<shopify-context
  type="product"
  handle="handle-of-product"
>
<template>
  <shopify-variant-selector></shopify-variant-selector>
  <!-- The product added will be whatever
  variant is selected for the context product handle.
  The disabled attribute is added if the variant is not available for sale.
  -->
  <button
    onclick="getElementById('cart').addLine(event).showModal();"
    shopify-attr--disabled="!product.selectedOrFirstAvailableVariant.availableForSale"
  >
    Add to cart
  </button>
</template>
</shopify-context>


<shopify-cart id="cart"></shopify-cart>
```

***

### Product details dialog

Add a button that lets customers view details about a product on a separate dialog. This is useful if you have limited space on your page, but still want to provide a way for customers to view product details.

To create a "View details" button":

1. Add an HTML `<dialog>` element to your page. Inside the dialog, place a product [shopify-context component](https://shopify.dev/docs/api/storefront-web-components/components/shopify-context) with a `wait-for-update` attribute. The `wait-for-update` attribute prevents the dialog from loading product details until a specific product is selected. Include a template and components within the product context to display the product information.

2. Add a `button` element inside another [shopify-context component](https://shopify.dev/docs/api/storefront-web-components/components/shopify-context) that's associated with a product.

3. Add a click event listener to the button that calls the [update method](https://shopify.dev/docs/api/storefront-web-components/components/shopify-context#attributes-propertydetail-update) on the product context inside the dialog. This links the dialog's product context (destination) with the product context nearest to the button (source), allowing the dialog to display details for the selected product.

4. Display the dialog by calling the native [`showModal`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/showModal) method.

### Product details example

```html
<shopify-store
  store-domain="https://your-store.myshopify.com"
  country="CA"
  language="FR"
>
</shopify-store>


<script>
  function showProductDetails(event) {
    // Update a dialog context with a selected product
    document.getElementById('dialog-context')
      .update(event);


    // Show the dialog
    document.getElementById('dialog')
      .showModal();
  }
</script>


<!-- A list of products -->
<shopify-list-context
  type="product"
  query="products"
  first="10"
>
  <!-- This template is repeated for each product-->
  <template>
    <!-- A button that shows the product details -->
    <button
      onclick="showProductDetails(event)"
    >
      <shopify-data
        query="product.title"
      ></shopify-data>
    </button>
  </template>
</shopify-list-context>


<dialog id="dialog">
  <!-- A product context that waits for an update to render -->
  <shopify-context
    id="dialog-context"
    type="product"
    wait-for-update
  >
    <template>
      <div>
        <shopify-data
          query="product.description"
        ></shopify-data>
      </div>
    </template>
    <div
      shopify-loading-placeholder
    >
      Loading...
    </div>
  </shopify-context>
</dialog>
```

***

---

<a id="custom-data-custom-data"></a>

## Custom data

## Custom data

Storefront Web Components can be used to display custom data stored in metafields and metaobjects from your Shopify store. This guide covers some of the most common ways to use custom data, and includes ready-to-use examples that you can adapt to your own storefront.

***

### Setup

Although Storefront Web Components don't require an access token for most use cases, you need to provide a Storefront API access token to fetch metafields and metaobjects.

To set up a Storefront API access token:

1. Install either the [Hydrogen](https://apps.shopify.com/hydrogen) or [Headless](https://apps.shopify.com/headless) sales channel in your Shopify admin.

2. Create a new storefront within the sales channel.

3. Copy your public access token from your storefront settings:

   * **Hydrogen**: Navigate to **Storefront settings** and find the public access token in the **Storefront API** section.
   * **Headless**: Inside the **Manage API access** section of your storefront, click on the **Manage** button for the Storefront API to find the public access token.

4. Make sure that access is enabled for metaobjects in the **Permissions** section.

5. In your Storefront Web Components code, add the public access token to the `public-access-token` attribute of your [`shopify-store` component](https://shopify.dev/docs/api/storefront-web-components/components/shopify-store).

[API docs - shopify-store component](https://shopify.dev/docs/api/storefront-web-components/components/shopify-store)

### Add a store component

```html
<!-- The public-access-token is required
 for access to metafields and metaobjects -->
<shopify-store
  public-access-token="your-access-token"
  store-domain="your-store-domain"
></shopify-store>
```

***

### Render a metafield

To display a product's metafield data on your storefront:

1. Create a [`shopify-context` component](https://shopify.dev/docs/api/storefront-web-components/components/shopify-context) that targets your specific product.
2. Inside the product context, add another `shopify-context` component that targets the metafield. Specify the metafield's namespace and key as attributes. You can find the namespace and key in the [**Metafields and metaobjects**](https://www.shopify.com/admin/settings/custom_data) settings in your Shopify admin.
3. Within the metafield context, use a [`shopify-data` component](https://shopify.dev/docs/api/storefront-web-components/components/shopify-data) to display the metafield's value on the page.

###### Render a product metafield

This example shows how to render a product's metafield data on your storefront.

###### Render a currency metafield

This example shows how to render a currency metafield.

### Render a product metafield

```html
<!-- The public-access-token is required
   for access to metafields and metaobjects -->
   <shopify-store
   public-access-token="your-access-token"
   store-domain="your-store-domain"
  ></shopify-store>
  
  <shopify-context
   type="product"
   handle="your-product-handle"
  >
   <template>
     <shopify-context
       type="metafield"
       query="product.metafield"
       key="your-metafield-key"
       namespace="your-metafield-namespace"
     >
       <template>
         <shopify-data
           query="metafield.value"
         ></shopify-data>
       </template>
     </shopify-context>
   </template>
  </shopify-context>
```

### Render a currency metafield

```html
<!-- The public-access-token is required
   for access to metafields and metaobjects -->
   <shopify-store
   public-access-token="your-access-token"
   store-domain="your-store-domain"
  ></shopify-store>
  
  <shopify-context
   type="product"
   handle="your-product-handle"
  >
   <template>
     <shopify-context
       type="metafield"
       query="product.metafield"
       key="your-metafield-key"
       namespace="your-metafield-namespace"
     >
       <template>
         <shopify-money
           query="metafield"
         ></shopify-money>
       </template>
     </shopify-context>
   </template>
  </shopify-context>
```

***

### Metafield references

You can use a metafield to reference other objects in your store. For example, you can use a metafield on a product to reference another product. To render a metafield reference:

1. Create a [`shopify-context` component](https://shopify.dev/docs/api/storefront-web-components/components/shopify-context) that targets your specific product.
2. Inside the product context, add another `shopify-context` component that targets the metafield. Specify the metafield's namespace and key as attributes. You can find the namespace and key in the [**Metafields and metaobjects**](https://www.shopify.com/admin/settings/custom_data) settings in your Shopify admin.
3. Within the metafield context, add another `shopify-context` component that targets the reference.
4. Within the reference context, use a [`shopify-data` component](https://shopify.dev/docs/api/storefront-web-components/components/shopify-data) to display the reference's value on the page.

###### Render a metafield reference

This example shows how to render a metafield that references another product.

###### Render a list of metafield references

This example shows how to render a metafield that references a list of products.

###### Render an image from a metafield reference

This example shows how to render an image from a metafield reference.

### Render a metafield reference

```html
<!-- The public-access-token is required
   for access to metafields and metaobjects -->
   <shopify-store
   public-access-token="your-access-token"
   store-domain="your-store-domain"
  ></shopify-store>
  
  <!-- A context for the product -->
  <shopify-context
   type="product"
   handle="your-product-handle"
  >
   <template>
     <!-- A context for the metafield -->
     <shopify-context
       type="metafield"
       query="product.metafield"
       key="your-metafield-key"
       namespace="your-metafield-namespace"
     >
       <template>
         <!-- A context for the product
          that the metafield references -->
         <shopify-context
           type="product"
           query="metafield.reference"
         >
           <template>
             <div>
               <shopify-data
                 query="product.title"
               ></shopify-data>
             </div>
           </template>
         </shopify-context>
       </template>
     </shopify-context>
   </template>
  </shopify-context>
```

### Render a list of metafield references

```html
<!-- The public-access-token is required
   for access to metafields and metaobjects -->
   <shopify-store
   public-access-token="your-access-token"
   store-domain="your-store-domain"
  ></shopify-store>
  
  <!-- A context for the product -->
  <shopify-context
   type="product"
   handle="your-product-handle"
  >
   <template>
     <!-- A context for the metafield -->
     <shopify-context
       type="metafield"
       query="product.metafield"
       key="your-metafield-key"
       namespace="your-metafield-namespace"
     >
       <template>
         <!-- A context for the product list
         that the metafield references -->
         <shopify-list-context
           type="product"
           query="metafield.references"
           first="5"
         >
           <template>
             <div>
               <shopify-data
                 query="product.title"
               ></shopify-data>
             </div>
           </template>
         </shopify-list-context>
       </template>
     </shopify-context>
   </template>
  </shopify-context>
```

### Render an image from a metafield reference

```html
<!-- The public-access-token is required
   for access to metafields and metaobjects -->
   <shopify-store
   public-access-token="your-access-token"
   store-domain="your-store-domain"
  ></shopify-store>
  
  <!-- A context for the product -->
  <shopify-context
   type="product"
   handle="your-product-handle"
  >
   <template>
     <!-- A context for the metafield -->
     <shopify-context
       type="metafield"
       query="product.metafield"
       key="your-metafield-key"
       namespace="your-metafield-namespace"
     >
       <template>
         <!-- A context for the product
         that the metafield references -->
         <shopify-context
           type="media"
           query="metafield.reference"
         >
           <template>
             <div>
               <shopify-media
                 query="media"
                 width="100"
                 height="100"
               ></shopify-media>
             </div>
           </template>
         </shopify-context>
       </template>
     </shopify-context>
   </template>
  </shopify-context>
```

***

### Render a metaobject

Metaobjects are dynamic objects that store custom data in your Shopify store. You can render metaobjects using Storefront Web Components with a [shopify-context component](https://shopify.dev/docs/api/storefront-web-components/components/shopify-context):

1. Create a `shopify-context` component with `type="metaobject"` and `handle` attributes. The `handle` attribute specifies which metaobject to render. You can find the handle values for each metaobject on the [**Entries**](https://www.shopify.com/admin/content/metaobjects/entries) page in your Shopify admin.
2. Add a `metaobject-definition-type` attribute to the same `shopify-context` component to specify the metaobject definition type.
3. To access metafields within the metaobject, add a nested [`shopify-context` component](https://shopify.dev/docs/api/storefront-web-components/components/shopify-context) with `type="field"` and `key` attributes. The `key` attribute identifies which metafield to target. You can find the key values for each metafield in the [**Metafields and metaobjects**](https://www.shopify.com/admin/settings/custom_data) settings in your Shopify admin.
4. Inside the metafield context, add your template and components to display the metafield data.

###### Render a metaobject

This example shows how to render metafields within a metaobject.

###### Render a list of metaobjects

This example shows how to render a list of metaobjects with a [shopify-list-context component](https://shopify.dev/docs/api/storefront-web-components/components/shopify-list-context).

###### Render a metaobject reference

This example shows how to render a product and image reference from a metaobject.

### Render a metaobject

```html
<!-- The public-access-token is required
   for access to metafields and metaobjects -->
   <shopify-store
   public-access-token="your-access-token"
   store-domain="your-store-domain"
  ></shopify-store>
  
  <!-- A context for the metaobject. It must contain
   a metaobject attribute with the metaobject name -->
  <shopify-context
   type="metaobject"
   handle="your-metaobject-handle"
   metaobject-definition-type="your-metaobject-definition-type"
  >
   <template>
     <!-- A context for the metafield.
      It must contain the metafield key -->
     <shopify-context
       type="field"
       query="metaobject.field"
       key="your-metafield-key"
     >
       <template>
         <div>
           <shopify-data
             query="field.value"
           ></shopify-data>
         </div>
       </template>
     </shopify-context>
   </template>
  </shopify-context>
```

### Render a list of metaobjects

```html
<!-- The public-access-token is required
   for access to metafields and metaobjects -->
   <shopify-store
   public-access-token="your-access-token"
   store-domain="your-store-domain"
  ></shopify-store>
  
  <!-- A context for the metaobject. It must contain
  a metaobject attribute with the metaobject name -->
  <shopify-list-context
   type="metaobject"
   query="metaobjects"
   metaobject-definition-type="stores"
   first="10"
  >
   <!-- The template is repeated for each metaobject in the list -->
   <template>
      <!-- A context for the metafield.
      It must contain the metafield key -->
     <shopify-context
       type="field"
       query="metaobject.field"
       key="title"
     >
       <template>
         <div>
           <shopify-data
             query="field.value"
           ></shopify-data>
         </div>
       </template>
     </shopify-context>
   </template>
  </shopify-list-context>
```

### Render a metaobject reference

```html
<!-- The public-access-token is required
   for access to metafields and metaobjects -->
   <shopify-store
   public-access-token="your-access-token"
   store-domain="your-store-domain"
  ></shopify-store>
  
  <!-- A context for the metaobject. It must contain
   a metaobject attribute with the metaobject name -->
  <shopify-context
   type="metaobject"
   handle="your-metaobject-handle"
   metaobject-definition-type="your-metaobject-definition-type"
  >
   <template>
     <!-- A context for the product metafield.
      It must contain the metafield key -->
     <shopify-context
       type="field"
       query="metaobject.field"
       key="your-product-metafield-key"
     >
       <template>
        <!-- A context for the product reference -->
        <shopify-context type="product" query="field.reference">
          <template>
            <div>
              <shopify-data query="product.title"></shopify-data>
            </div>
          </template>
        </shopify-context>
       </template>
     </shopify-context>
  
     <!-- A context for the image metafield.
      It must contain the metafield key -->
     <shopify-context
       type="field"
       query="metaobject.field"
       key="your-image-metafield-key"
     >
       <template>
        <!-- A context for the image reference.
         The type must match the Storefront API
         object type of the metafield reference -->
        <shopify-context type="media" query="field.reference">
          <template>
            <div>
              <shopify-media query="media"></shopify-media>
            </div>
          </template>
        </shopify-context>
       </template>
     </shopify-context>
   </template>
  </shopify-context>
```

***

### Custom components

Metafields support various data types, including rich text, links, numbers, dates, JSON, and file references. The [`shopify-data` component](https://shopify.dev/docs/api/storefront-web-components/components/shopify-data) displays the raw metafield value as-is. For more sophisticated presentations of complex data types like JSON objects or structured content, you can build custom components that receive the metafield value as an attribute with the [`shopify-attr` attribute](https://shopify.dev/docs/api/storefront-web-components/attributes/shopify-attr).

[API docs - shopify-attr attribute](https://shopify.dev/docs/api/storefront-web-components/attributes/shopify-attr)

### Add a custom component

```html
<script>
  // Define a custom component that renders a JSON object
  class CustomComponent extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      const value = JSON.parse(
        this.getAttribute("value"),
      );
      this.innerHTML = `
        <div>
          <h1>${value.title}</h1>
          <p>${value.description}</p>
        </div>
      `;
    }
  }


  // Register the custom component
  customElements.define(
    "custom-component",
    CustomComponent,
  );
</script>


<!-- The public-access-token is required
  for access to metafields and metaobjects -->
<shopify-store
  public-access-token="your-access-token"
  store-domain="your-store-domain"
></shopify-store>


<shopify-context
  type="product"
  handle="your-product-handle"
>
  <template>
    <shopify-context
      type="metafield"
      query="product.metafield"
      key="your-metafield-key"
      namespace="your-metafield-namespace"
    >
      <template>
        <!-- Bind the metafield value to the
        value attribute of the custom component -->
        <custom-component
          shopify-attr--value="metafield.value"
        ></custom-component>
      </template>
    </shopify-context>
  </template>
</shopify-context>
```

***

---

<a id="shopify-attr-shopify-attr"></a>

## shopify-attr

## shopify-attr

Use the `shopify-attr` attribute to bind an attribute to data from Shopify. Anywhere within the template of a [shopify-context component](https://shopify.dev/docs/api/storefront-web-components/components/shopify-context), you can use the `shopify-attr--attribute-name` attribute to bind an attribute to data from Shopify. For example, `shopify-attr--href="product.onlineStoreUrl"` can be used to bind the `href` attribute to the `onlineStoreUrl` field on a product context.

See the [playground](https://webcomponents.shopify.dev/playground) for more complete examples.

Examples

#### Examples

* ####

  ##### Description

  This is the default example

  ##### HTML

  ```html
  <shopify-store
    store-domain="https://your-store.myshopify.com"
    country="CA"
    language="FR"
  >
  </shopify-store>
  <shopify-context
    type="product"
    handle="your-product-handle"
  >
    <template>
      <!-- the href attribute is bound to the
        product.onlineStoreUrl field -->
      <a shopify-attr--href="product.onlineStoreUrl">
        View product
      </a>
    </template>
  </shopify-context>
  ```

***

---

<a id="shopify-account-shopify-account"></a>

## shopify-account

## shopify-account

The `<shopify-account>` component displays an avatar on your website. When customers click the avatar, an account sheet opens with menu links. For signed-out customers, sign-in options appear above the menu.

The account component is designed to drive customer sign-ins to accelerate checkout and unlock storefront personalization. It supports the following sign-in methods: passwordless sign-in, automatic sign-in with Shop recognition, and social sign-in providers.

**In a theme**

Refer to this [theme documentation](https://shopify.dev/docs/storefronts/themes/customer-engagement/account-component) on how to add the component to your theme.

**Outside a theme**

Refer to this [Hydrogen with account component documentation](https://shopify.dev/docs/storefronts/headless/bring-your-own-stack/hydrogen-with-account-component) on how to add the component to your Hydrogen store.

##### Attributes and properties

* **menu**

  **string**

  A menu in a store. The component should use "customer-account-main-menu" to refer to the same menu used in customer accounts. Default links include the Orders and Profile pages. To learn more about menus, refer to [Menus and links](https://help.shopify.com/en/manual/online-store/menus-and-links).

* **sign-in-url**

  **string**

  **Default: "/customer\_authentication/login"**

  When attempting to sign in, the user will be redirected to this URL with query parameters that must be passed in the authorization request to Shopify's customer authentication.

##### CSS variables

CSS variables allow you to target and override the default styling within the account component.

![CSS variables](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/storefront-elements/css-variables-BSIUnl07.png)

* **--shopify-account-color-accent**

  **string**

  The accent color used for interactive elements.

* **--shopify-account-color-background**

  **string**

  The background color of the account sheet.

* **--shopify-account-color-text**

  **string**

  The color of the text used throughout the account sheet.

* **--shopify-account-dialog-position-top**

  **string**

  The offset from the top of the dialog.

* **--shopify-account-font-body**

  **string**

  The font family used for body text in the account sheet. For online store, follow best practices for [fonts](https://shopify.dev/docs/storefronts/themes/architecture/settings/fonts).

* **--shopify-account-font-heading**

  **string**

  The font family used for headings in the account sheet. For online store, follow best practices for [fonts](https://shopify.dev/docs/storefronts/themes/architecture/settings/fonts).

* **--shopify-account-radius-base**

  **string**

  The base corner radius applied to elements within the sheet.

##### Derived CSS variables

These variables are automatically derived from the CSS variables above. Override them individually if you need finer control.

* **--shopify-account-avatar-size**

  **string**

  The width and height of the account button. Overrides the default size derived from the avatar.

* **--shopify-account-color-accent-hover**

  **string**

  The accent color on hover state.

* **--shopify-account-color-accent-text**

  **string**

  The accent contrast color used for interactive elements.

* **--shopify-account-color-background-subdued**

  **string**

  Subdued background color for secondary elements.

* **--shopify-account-color-border**

  **string**

  The border color used in the sheet.

* **--shopify-account-color-card-background**

  **string**

  Background color for card elements.

* **--shopify-account-color-card-text**

  **string**

  Text color for card elements.

* **--shopify-account-color-control-background**

  **string**

  Background color for form controls.

* **--shopify-account-color-control-text**

  **string**

  Text color for form controls.

* **--shopify-account-color-shadow**

  **string**

  Shadow color used for depth.

* **--shopify-account-color-text-subdued**

  **string**

  Subdued text color for secondary text.

* **--shopify-account-font-body-transform**

  **string**

  The text transform for text elements.

* **--shopify-account-font-body-weight**

  **string**

  The font weight for text elements.

* **--shopify-account-font-heading-transform**

  **string**

  The text transform for headings.

* **--shopify-account-font-heading-weight**

  **string**

  The font weight for headings.

* **--shopify-account-radius-button**

  **string**

  Corner radius for buttons.

* **--shopify-account-radius-button-small**

  **string**

  Small corner radius for minor elements.

* **--shopify-account-radius-dialog**

  **string**

  Corner radius for the dialog container.

* **--shopify-account-radius-input**

  **string**

  Corner radius for input fields.

* **--shopify-account-signed-in-avatar-color-background**

  **string**

  The background color of the signed-in avatar.

* **--shopify-account-signed-in-avatar-color-text**

  **string**

  The text color of the initial in the signed-in avatar.

* **--shopify-account-signed-in-avatar-size**

  **string**

  The width and height of the signed-in avatar.

##### CSS parts

CSS parts allow you to override the default styling of the account component.

* **signed-out-avatar**

  **CSSPart**

  The button element for the signed-out avatar.

#### CSSPart

A \[\`::part\` CSS pseudo-element]\(https://developer.mozilla.org/en-US/docs/Web/CSS/::part) allowing you to target and override the default styling within the component.

```ts
string
```

##### Slots

Slots enable you to override the default content of the account component.

* **signed-out-avatar**

  **SlotElement**

  The avatar to display when the user is signed out.

#### SlotElement

A slot element allows you to override the default content of the component. Read more on the \[MDN Documentation]\(https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot).

```ts
string
```

##### Events

Events let you listen and respond to changes in the account component's state.

* **close**

  **CustomEvent**

  Fired when the account sheet is closed.

* **open**

  **CustomEvent**

  Fired when the account sheet is opened.

Examples

#### Examples

* ####

  ##### Description

  Basic usage

  ##### HTML

  ```html
  <shopify-store
    store-domain="https://your-store.myshopify.com"
    public-access-token="-access-token"
    <!-- when user is signed in -->
     customer-access-token="customer-access-token"
  >
  </shopify-store>

  <shopify-account menu="customer-account-main-menu">
  </shopify-account>
  ```

* ####

  ##### Description

  Add component to a theme.

  ##### Liquid

  ```liquid
  {% if shop.customer_accounts_enabled %}
    <shopify-account menu="customer-account-main-menu">
    </shopify-account>
  {% endif %}
  ```

* ####

  ##### Description

  Use custom styles to customize the signed-in avatar.

  ##### HTML

  ```html
  <shopify-store
    store-domain="https://your-store.myshopify.com"
    public-access-token="public-access-token"
    customer-access-token="access-token"
  >
  </shopify-store>

  <style>
    shopify-account {
      --shopify-account-signed-in-avatar-size: 36px;
      --shopify-account-signed-in-avatar-color-background: fuchsia;
      --shopify-account-signed-in-avatar-color-text: black;
    }
  </style>

  <shopify-account menu="customer-account-main-menu"></shopify-account>
  ```

* ####

  ##### Description

  Use custom HTML for the signed-out avatar.

  ##### HTML

  ```html
  <shopify-store
    store-domain="https://your-store.myshopify.com"
    public-access-token="public-access-token"
    customer-access-token="access-token"
  >
  </shopify-store>

  <shopify-account menu="customer-account-main-menu">
    <div slot="signed-out-avatar">
      <img src="https://cdn.your-store.com/user-icon.svg" alt="Account" />
    </div>
  </shopify-account>
  ```

* ####

  ##### Description

  Use custom styles for the account sheet

  ##### HTML

  ```html
  <shopify-store
    store-domain="https://your-store.myshopify.com"
    public-access-token="public-access-token"
    customer-access-token="access-token"
  >
  </shopify-store>

  <style>
    shopify-account {
      --shopify-account-radius-base: 0;
      --shopify-account-color-accent: fuchsia;
    }
  </style>

  <shopify-account menu="customer-account-main-menu"></shopify-account>
  ```

***

### Related

[- shopify-store](https://shopify.dev/docs/api/storefront-web-components/components/shopify-store)

[- Add to your theme](https://shopify.dev/docs/storefronts/themes/customer-engagement/account-component)

[- Add to your Hydrogen storefront](https://shopify.dev/docs/storefronts/headless/bring-your-own-stack/hydrogen-with-account-component)

***

---

<a id="shopify-cart-shopify-cart"></a>

## shopify-cart

## shopify-cart

The cart component provides a mini shopping cart functionality for your website. Here's how it works:

1. Add a `button` component inside a [shopify-context component](https://shopify.dev/docs/api/storefront-web-components/components/shopify-context) that's associated with a product.

2. Call the `addLine()` method in the `button` component's `onclick` attribute to add the product to the customer's cart.

   * This method requires an event object or a product data object.
   * If using an event, the event target must be inside a product [context component](https://shopify.dev/docs/api/storefront-web-components/components/shopify-context).

3. Display the cart using a native [HTML `<dialog>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog).

   * To show it as a popup modal, call the `showModal()` method.

4. Apply discount codes automatically using the `discountCodes` attribute.

   * Pass a comma-separated list of discount codes that will be automatically applied to the cart.

5. Customize the cart's styling and content with CSS parts and slots. [View examples](https://shopify.dev/docs/api/storefront-web-components/components/shopify-cart#examples)

**Note:**

The cart component doesn't support mixing products from multiple stores.

##### Attributes and properties

* **addLine**

  **(source: CartLineSource) => CartAttributes**

  A method to add an item to the cart. The source can either be an event triggered from an element within a product context or a product object with a variant id.

* **close**

  **() => CartAttributes**

  A method to close the cart dialog.

* **open**

  **boolean**

  A property to get the open state of the cart.

  Example: `getElementById('cart').open`

* **show**

  **() => CartAttributes**

  A method to display the cart as a modal in a [`dialog` element modelessly](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/show).

* **showModal**

  **() => CartAttributes**

  A method to display the underlying [cart as a modal](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/showModal) in a `dialog` element.

* **target**

  **string**

  The [target attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#target) for the checkout link. Defaults to "\_top".

#### CartLineSource

Either an event triggered from an element within a product context or a product to add to the cart.

```ts
EventWithinProductContext | ProductToAddToCart
```

#### EventWithinProductContext

An event triggered from an element within a product context. The selected product is calculated from the event target by looking for the closest product context upward in the DOM. It automatically uses whatever variant is selected by any \`\<shopify-variant-selector>\` in the product context.

* target

  ```ts
  HTMLElement
  ```

#### ProductToAddToCart

A product to add to the cart.

* quantity

  The quantity of the product to add to the cart.

  ```ts
  number
  ```

* sellingPlanId

  The selling plan ID of the product to add to the cart. Only use for selling subscriptions.

  ```ts
  string
  ```

* variantId

  The variant ID of the product to add to the cart.

  ```ts
  string
  ```

##### CSS parts

CSS parts allow you to target and override the default styling within the cart component.

* **dialog**

  **CSSPart**

  The dialog element.

* **discount-code**

  **CSSPart**

  Discount code label.

* **discount-error**

  **CSSPart**

  Discount error message.

* **input-field**

  **CSSPart**

  Input field. Used to style the input field that applies a discount code.

* **line-heading**

  **CSSPart**

  The cart line-item title element.

* **line-image**

  **CSSPart**

  The cart line-item image element.

* **line-options**

  **CSSPart**

  The cart line-item options element.

* **line-price**

  **CSSPart**

  The cart line-item quantity element.

* **primary-button**

  **CSSPart**

  The primary button element. Used to style the checkout link.

* **secondary-button**

  **CSSPart**

  The secondary button element. Used to style the buttons that modify a cart-line item.

* **tertiary-button**

  **CSSPart**

  The tertiary button element. Used to style the button that applies a discount code.

#### CSSPart

A \[\`::part\` CSS pseudo-element]\(https://developer.mozilla.org/en-US/docs/Web/CSS/::part) allowing you to target and override the default styling within the component.

```ts
string
```

##### Slots

Slots allow you to override the default content of the cart component.

* **apply-discount-button**

  **SlotElement**

  The content to display in the apply discount button. Useful to add a custom apply discount button text.

* **checkout-button**

  **SlotElement**

  The content to display in the checkout button. Useful to add a custom checkout button text.

* **discount-apply-error**

  **SlotElement**

  The content to display when a discount code cannot be applied. Useful to add a custom error message for internationalization

* **discounts-title**

  **SlotElement**

  The title of the discount section. Useful to add a custom discount section title for internationalization

* **empty**

  **SlotElement**

  The content to display when the cart is empty.

* **extension**

  **SlotElement**

  Extend the cart with additional content below the checkout button. Useful to add upsell products or other content.

#### SlotElement

A slot element allows you to override the default content of the component. Read more on the \[MDN Documentation]\(https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot).

```ts
string
```

Examples

#### Examples

* ####

  ##### Description

  This is the default example

  ##### HTML

  ```html
  <shopify-store
    store-domain="https://your-store.myshopify.com"
  >
  </shopify-store>

  <!-- The context is bound to the store -->
  <shopify-context
    type="product"
    handle="handle-of-product"
  >
  <template>
    <shopify-variant-selector></shopify-variant-selector>
    <!-- The product added will be whatever
    variant is selected for the context product handle -->
    <button
      onclick="getElementById('cart').addLine(event).showModal();"
    >
      Add to cart
    </button>
  </template>
  </shopify-context>

  <shopify-cart id="cart"></shopify-cart>
  ```

* ####

  ##### Description

  Add \`\<div>\` tags with \`slot\` attributes to show custom content on the empty state and checkout button. Add a \`\<style>\` tag to include CSS parts that change the default styling of the cart's dialog, primary buttons, and secondary buttons.

  ##### HTML

  ```html
  <shopify-cart>
    <!-- Override the empty state with translated text -->
    <div slot="empty">
      Ihr Warenkorb ist leer
    </div>
    <!-- Override the checkout button with translated text -->
    <div slot="checkout-button">
      Zur Kasse
    </div>
    <!-- Override the apply discount button with translated text -->
    <div slot="apply-discount-button">
      Anwenden
    </div>
    <!-- Override the discounts section title with translated text -->
    <div slot="discounts-title">
      Rabatte
    </div>

    <!-- Override the discount apply error message with translated text -->
    <div slot="discount-apply-error">
      Dieser Rabattcode kann nicht angewendet werden.
    </div>
  </shopify-cart>

  <style>
    shopify-cart::part(dialog) {
      border-radius: 0.5rem;
    }
    shopify-cart::part(primary-button) {
      background-color: #627059;
      border: 0;
      border-radius: 0;
      color: #ffffff;
      font-size: 0.875rem;
      font-weight: 500;
    }
    shopify-cart::part(secondary-button) {
      background-color: #ffffff;
      color: #000;
      fill: #000; 
      border: 2px solid #000;
      border-radius: 0;
    }
    shopify-cart::part(tertiary-button) {
      background-color: #ffffff;
      color: #000;
      fill: #000; 
      border: 2px solid #000;
      border-radius: 0;
    }
    shopify-cart::part(discount-code) {
      background-color: #ffffff;
      color: #000;
      fill: #000; 
      border: 2px solid #000;
      border-radius: 0;
    }
  </style>
  ```

* ####

  ##### Description

  Add a product to the cart without a product context. This is useful if you already have a product GID.

  ##### HTML

  ```html
  <shopify-store
    store-domain="hydrogen-preview.myshopify.com"
  >
  </shopify-store>

  <shopify-cart id="cart"></shopify-cart>

  <button onclick="addToCart()">Add to cart</button>

  <script>
    function addToCart() {
      const product = {
        variantId:
          "gid://shopify/ProductVariant/46565423349816",
        quantity: 1,
        // Optionally pass a sellingPlanId for subscriptions
        sellingPlanId:
          "gid://shopify/SellingPlan/8448376888",
      };

      document
        .getElementById("cart")
        // Manually add any product variant to the cart
        .addLine(product)
        .showModal();
    }
  </script>
  ```

* ####

  ##### Description

  Automatically apply discount codes to the cart by setting the \`discount-codes\` attribute. The discount codes will be applied whenever items are added, removed, or updated in the cart.

  ##### HTML

  ```html
  <shopify-store
    store-domain="https://your-store.myshopify.com"
  >
  </shopify-store>

  <!-- Product context for adding items to cart -->
  <shopify-context type="product" handle="handle-of-product">
    <template>
      <h3><shopify-data query="product.title"></shopify-data></h3>
      <p>Price: <shopify-money query="product.selectedOrFirstAvailableVariant.price"></shopify-money></p>
      
      <button 
        onclick="getElementById('cart').addLine(event); getElementById('cart').show();"
        shopify-attr--disabled="!product.selectedOrFirstAvailableVariant.availableForSale"
      >
        Add to cart
      </button>
    </template>
  </shopify-context>

  <!-- Cart with automatic discount codes -->
  <shopify-cart 
    id="cart" 
    discount-codes="SAVE20,FREE-SHIPPING,WELCOME10">
  </shopify-cart>
  ```

***

---

<a id="shopify-context-shopify-context"></a>

## shopify-context

## shopify-context

The context component defines which Shopify data should be available in different parts of your page.

Each `<shopify-context>` component requires two attributes:

* `type`: Specifies what kind of data you want (for example, `product`).
* `handle` or `gid`: Identifies the specific item. For example, the handle for the URL [`demostore.mock.shop/products/men-t-shirt`](https://demostore.mock.shop/products/men-t-shirt) is `men-t-shirt`. The `gid` attribute can be used to identify the item by its unique id, e.g. `gid://shopify/Product/7982853619734`.

If you're working with a single storefront, then you can add the `<shopify-context>` component anywhere on your page (it doesn't need to be inside the `<shopify-store>` component). If you're working with multiple storefronts, then nest the context inside its corresponding store component.

Every `<shopify-context>` component also requires a `<template>` component, which contains the data you want to display. That template won't be rendered until the context is loaded. Render placeholder content outside the template with an attribute `shopify-loading-placeholder`. This content will be displayed until the context is loaded.

See the [playground](https://webcomponents.shopify.dev/playground) for complete examples.

##### Attributes

* **type**

  **string**

  **required**

  The type of the context. This needs to match the [GraphQL Storefront API](https://shopify.dev/docs/api/storefront) type you are querying. For example, if you are querying a product, the type should be `type="product"`.

* **gid**

  **string**

  The unique id for the context. Required on some objects, like products, collections, and blogs, if the `handle` attribute isn't used.

* **handle**

  **string**

  The handle for the context. Required on some objects, like products, collections, and blogs. The handle is required unless the `wait-for-update` attribute is included or the `gid` attribute is used instead.

* **key**

  **string**

  The key for the metafield. Required when the context type is `metafield`.

* **metaobject-definition-type**

  **string**

  The metaobject definition type for the context. Required when the context type is `metaobject`.

* **namespace**

  **string**

  The namespace for the metafield. Required when the context type is `metafield`.

* **query**

  **string**

  The query path for accessing nested data within a parent context.

  Required when this context is nested inside another context. The query should specify the path to access the desired data from the parent.

  Example: If the parent context is a product, and you want to access its first available variant: query="product.selectedOrFirstAvailableVariant"

* **update**

  **(e: Event) => void**

  Updates this context to match the data from another context of the same type.

  Common use case: When displaying a list of products, you might want to show a detailed view of a single product in a modal. This method allows you to update the modal's context to display the selected product's data.

  How it works:

  1. The event target must be inside the source context you want to copy from

  2. This context will update its handle to match the source context

  3. The data will be automatically refreshed to show the new content

* **wait-for-update**

  **boolean**

  Wait to render the context until the update method is called. This is useful for dynamically rendering a context.

Examples

#### Examples

* ####

  ##### Description

  This is the default example

  ##### HTML

  ```html
  <shopify-store
    store-domain="https://your-store.myshopify.com"
  >
  </shopify-store>

  <!-- The context is bound to the store -->
  <shopify-context
    type="product"
    handle="handle-of-product"
  >
    <template>
      <!-- The data component is bound to the product
       context and queries the title field -->
      <h1>
        <shopify-data
          query="product.title"
        ></shopify-data>
      </h1>
    </template>
    <!-- Render placeholder content
     until the context is loaded -->
    <div shopify-loading-placeholder>Loading...</div>
  </shopify-context>
  ```

* ####

  ##### Description

  Show a list of products, and clicking each product opens a dialog with product details

  ##### HTML

  ```html
  <shopify-store
    store-domain="https://your-store.myshopify.com"
    country="CA"
    language="FR"
  >
  </shopify-store>

  <script>
    function showProductDetails(event) {
      // Update a dialog context with a selected product
      document.getElementById('dialog-context')
        .update(event);

      // Show the dialog
      document.getElementById('dialog')
        .showModal();
    }
  </script>

  <shopify-list-context
    type="product"
    query="products"
    first="10"
  >
    <!-- This template is repeated for each product-->
    <template>
      <button
        onclick="showProductDetails(event)"
      >
        <shopify-data
          query="product.title"
        ></shopify-data>
      </button>
    </template>
  </shopify-list-context>

  <dialog id="dialog">
    <shopify-context
      id="dialog-context"
      type="product"
      wait-for-update
    >
      <template>
        <div>
          <shopify-data
            query="product.description"
          ></shopify-data>
        </div>
      </template>
      <div
        shopify-loading-placeholder
      >
        Loading...
      </div>
    </shopify-context>
  </dialog>
  ```

* ####

  ##### Description

  Show a list of products, and clicking the next and previous buttons loads the next and previous pages of products

  ##### HTML

  ```html
  <shopify-store
    store-domain="https://your-store.myshopify.com"
    country="CA"
    language="FR"
  >
  </shopify-store>

  <shopify-list-context
    type="product"
    query="products"
    first="10"
  >
    <!-- This template is repeated for each product-->
    <template>
      <shopify-data
        query="product.title"
      ></shopify-data>
    </template>
  </shopify-list-context>
  <button
    id="previous"
    onclick="getElementById('list-context').previousPage();"
  >
    Previous
  </button>
  <button
    id="next"
    onclick="getElementById('list-context').nextPage();"
  >
    Next
  </button>

  <script>
    // Listen for the list context to update
    // and disable the next and previous buttons when 
    // the list is at the end or beginning
    document
      .querySelector("shopify-context")
      .addEventListener(
        "shopify-list-context-update",
        (event) => {
          const {
            hasNextPage,
            hasPreviousPage,
          } = event.detail;
          if (!hasNextPage) {
            document
              .getElementById("next")
              .setAttribute(
                "disabled",
                "true",
              );
          } else {
            document
              .getElementById("next")
              .removeAttribute("disabled");
          }
          if (!hasPreviousPage) {
            document
              .getElementById("previous")
              ?.setAttribute(
                "disabled",
                "true",
              );
          } else {
            document
              .getElementById("previous")
              .removeAttribute("disabled");
          }
        },
      );
  </script>
  ```

* ####

  ##### Description

  Show a metafield value

  ##### HTML

  ```html
  <shopify-store
    store-domain="https://your-store.myshopify.com"
  >
  </shopify-store>

  <shopify-context
    type="product"
    handle="your-product-handle"
  >
    <template>
      <shopify-context
        type="metafield"
        query="product.metafield"
        key="your_metafield_key"
        namespace="your_metafield_namespace"
      >
        <template>
          <div>
            <shopify-data
              query="metafield.value"
            ></shopify-data>
          </div>
        </template>
      </shopify-context>
    </template>
  </shopify-context>
  ```

* ####

  ##### Description

  Use a metafield to reference a single product

  ##### HTML

  ```html
  <shopify-store
    store-domain="https://your-store.com"
  >
  </shopify-store>

  <shopify-context
    type="product"
    handle="your-product-handle"
  >
    <template>
      <!-- Setup a context for the metafield -->
      <shopify-context
        type="metafield"
        key="related_products"
        key="your_metafield_key"
        namespace="your_metafield_namespace"
      >
        <template>
          <!-- Setup a new context for the metafield reference -->
          <shopify-context
            type="product"
            query="metafield.reference"
          >
            <template>
              <div>
                <!-- Render the title of the metafield reference -->
                <shopify-data
                  query="product.title"
                ></shopify-data>
              </div>
            </template>
          </shopify-context>
        </template>
      </shopify-context>
    </template>
  </shopify-context>
  ```

* ####

  ##### Description

  Use a metafield to references a list of products

  ##### HTML

  ```html
  <shopify-store
    store-domain="https://your-store.com"
  >
  </shopify-store>

  <shopify-context
    type="product"
    handle="your-product-handle"
  >
    <template>
      <!-- Setup a context for the metafield -->
      <shopify-context
        type="metafield"
        key="related_products"
        key="your_metafield_key"
        namespace="your_metafield_namespace"
      >
        <template>
          <!-- Setup a list context for the metafield references -->
          <shopify-list-context
            type="product"
            query="metafield.references"
            first="5"
          >
            <template>
              <div>
                <shopify-data
                  query="product.title"
                ></shopify-data>
              </div>
            </template>
          </shopify-list-context>
        </template>
      </shopify-context>
    </template>
  </shopify-context>
  ```

* ####

  ##### Description

  Render a metaobject context with a text field and a reference media field

  ##### HTML

  ```html
  <!-- pass the name of the metaobject as an attribute -->
  <shopify-context
    type="metaobject"
    handle="toronto"
    metaobject-definition-type="stores"
  >
    <template>
      <!-- render a field on the metaobject -->
      <h1>
        <shopify-context
          type="field"
          query="metaobject.field"
          key="title"
        >
          <template>
            <shopify-data
              query="field.value"
            ></shopify-data>
          </template>
        </shopify-context>
      </h1>

      <!-- render a reference field on the metaobject -->
      <p>
        <shopify-context
          type="field"
          query="metaobject.field"
          key="featured_image"
        >
          <template>
            <shopify-context
              type="media"
              query="field.reference"
            >
              <template>
                <shopify-media
                  query="media"
                  width="100"
                  height="100"
                ></shopify-media>
              </template>
            </shopify-context>
          </template>
        </shopify-context>
      </p>
    </template>
  </shopify-context>
  ```

***

### Related

[- shopify-list-context](https://shopify.dev/docs/api/storefront-web-components/components/shopify-list-context)

***

---

<a id="shopify-list-context-shopify-list-context"></a>

## shopify-list-context

## shopify-list-context

The [list context component](https://shopify.dev/docs/api/storefront-web-components/components/shopify-list-context) allows you to display multiple items in a repeating format. To use it, you need several key attributes:

1. `type`: Defines what you're listing (such as 'product' or 'collection')
2. `query`: Specifies which data fields you want to display
3. `first`: Sets the number of items to show in the list
4. `sort-key` (optional): Sets the key to sort the items by (e.g., 'TITLE', 'PRICE', etc.). Available sort keys depend on the context type and can be found in the Storefront API documentation (e.g. for product contexts, see [ProductSortKeys](https://shopify.dev/docs/api/storefront/latest/enums/productsortkeys)).
5. `reverse-order` (optional): If present, reverses the sort order (descending instead of ascending)

Inside the list context, a template component defines how each item should appear. This template will automatically repeat for each item in your list. When you reference data within the template (using shopify-data or other components), it will automatically pull from the current item being displayed.

**Sorting**

* Use the `sort-key` attribute to specify the field to sort by. For example, `sort-key="TITLE"` will sort products alphabetically by title.
* Add the `reverse-order` boolean attribute to reverse the sort order (e.g., from ascending to descending).

**Note:**

The list context can be nested inside a context component or other list context components.

See the [playground](https://webcomponents.shopify.dev/playground) for examples.

##### Attributes

* **first**

  **number**

  **required**

  The number of items to return.

* **query**

  **string**

  **required**

  Defines where the list exists, either at the root or relative to a parent context. For example:

  1. At the root, query a list of all products, `query="products"`

  2. Within a parent collection context, query the products on that collection, `query="collection.products"`

* **type**

  **string**

  **required**

  The type of the context. This needs to match the [GraphQL Storefront API](https://shopify.dev/docs/api/storefront) type you are querying. For example, if you are querying a product, the type should be `type="product"`.

* **metaobject-definition-type**

  **string**

  The metaobject definition type for the context. Required when the context type is `metaobject`.

* **nextPage**

  **() => void**

  Load the next page of items in the list.

* **previousPage**

  **() => void**

  Load the previous page of items in the list.

* **reverse**

  **() => void**

  Reverse the order of the items in the list.

* **reverseOrder**

  **boolean**

  If present, reverses the sort order (descending instead of ascending)

* **sortKey**

  **string**

  Sets the key to sort the items by (e.g., 'TITLE', 'PRICE', etc.).

  Available sort keys depend on the context type and can be found in the Storefront API documentation (e.g. for product contexts, see [ProductSortKeys](https://shopify.dev/docs/api/storefront/latest/enums/productsortkeys)).

Examples

#### Examples

* ####

  ##### Description

  List context example

  ##### HTML

  ```html
  <shopify-store
    store-domain="https://your-store.myshopify.com"
  >
  </shopify-store>

  <!-- The context is bound to the store -->
  <shopify-list-context
    type="product"
    query="products"
    first="10"
  >
    <!-- The template is repeated for each item
      in the array -->
    <template>
      <h2>
        <shopify-data
          query="product.title"
        ></shopify-data>
      </h2>
    </template>
  </shopify-list-context>
  ```

* ####

  ##### Description

  Sorting products by title ascending and descending using sort-key and reverse-order.

  ##### HTML

  ```html
  <shopify-store store-domain="https://your-store.myshopify.com"></shopify-store>

  <!-- Sort by title ascending -->
  <shopify-list-context type="product" query="products" first="3" sort-key="TITLE">
    <template>
      <h2><shopify-data query="product.title"></shopify-data></h2>
    </template>
  </shopify-list-context>

  <!-- Sort by title descending -->
  <shopify-list-context type="product" query="products" first="3" sort-key="TITLE" reverse-order>
    <template>
      <h2><shopify-data query="product.title"></shopify-data></h2>
    </template>
  </shopify-list-context>
  ```

***

### Related

[- shopify-context](https://shopify.dev/docs/api/storefront-web-components/components/shopify-context)

***

---

<a id="shopify-data-shopify-data"></a>

## shopify-data

## shopify-data

The shopify-data component is used to display Shopify data on your page. Here's how it works:

* It requires a `query` attribute that specifies which data to display.
* The query uses dot notation to access data fields (for example, `query="product.title"`).
* It looks for the nearest matching context to find the data.
* It outputs plain text that you can style with your own HTML elements.

For example: `<shopify-data query="product.title">` will:

1. Find the nearest product context.
2. Access its title property.
3. Display the result as text.

Since the component outputs a text node, you can wrap it in any HTML elements to match your site's design. The component also supports rich text fields like `product.descriptionHtml`.

See the [playground](https://webcomponents.shopify.dev/playground) for more complete examples.

##### Attributes

* **query**

  **string**

  **required**

  Defines the context to reference and field to query. For example `query="product.title"` would query the title of the product context.

Examples

#### Examples

* ####

  ##### Description

  This is the default example

  ##### HTML

  ```html
  <shopify-store
    store-domain="https://your-store.myshopify.com"
  >
  </shopify-store>

  <!-- The context is bound to the store -->
  <shopify-context
    type="product"
    handle="handle-of-product"
  >
    <template>
      <h1>
        <!-- Query the title of the product.
          Renders a text node with display: contents  -->
        <shopify-data
          query="product.title"
        ></shopify-data>
      </h1>
    </template>
  </shopify-context>
  ```

***

---

<a id="shopify-media-shopify-media"></a>

## shopify-media

## shopify-media

Accepts a reference to an [Image](https://shopify.dev/docs/api/storefront/latest/objects/Image) or [Media](https://shopify.dev/docs/api/storefront/latest/interfaces/Media) reference and generates an image or video element with `srcset` and `sizes` attributes. This component must be a child of a `shopify-context` component. It takes a query attribute that defines the context it's a part of, and the field to query.

If you want the media to automatically change based on which variant is selected on the [variant-selector component](https://shopify.dev/docs/api/storefront-web-components/components/shopify-variant-selector), make sure to reference the product image on the `product.selectedOrFirstAvailableVariant.image` field.

See the [playground](https://webcomponents.shopify.dev/playground) for more complete examples.

**Note:**

When rendering an image, the media component uses the [`unpic-img`](https://unpic.pics/img/lit/) element internally, so you can also pass `height`, `width`, `layout`, `aspect-ratio`, `priority`, `breakpoints`, and `sizes` attributes to control the scale and size of the image. Learn more about image props in the [Unpic documentation](https://unpic.pics/img/lit/#image-props).

##### Attributes

* **aspectRatio**

  **number**

  **required**

  Instead of providing a width and height, you can provide an aspect ratio. This is passed to the [\`aspectRatio\`](https://unpic.pics/img/webc/#aspect-ratio) attribute of an underlying \`unpic-img\` element.

* **height**

  **number**

  **required**

  The height of the image. Required, unless width is provided with an aspectRatio.

* **query**

  **string**

  **required**

  Defines the context to reference and field to query. For example, `query="product.featuredImage"` queries the title of the product featured image, and `query="product.selectedOrFirstAvailableVariant.image"` queries the image of a specific product variant based on the `shopify-variant-selector` component.

* **width**

  **number**

  **required**

  The width of the image. Required, unless height is provided with an aspectRatio.

* **breakpoints**

  **string**

  The breakpoints of the image. This is passed to the [breakpoints](https://unpic.pics/img/webc/#breakpoints) attribute of an underlying \`unpic-img\` element.

* **layout**

  **'fixed' | 'constrained' | 'fullWidth'**

  The resizing behavior of the image. This is passed to the [layout](https://unpic.pics/img/webc/#layout) attribute of an underlying \`unpic-img\` element.

* **priority**

  **boolean**

  Whether to prioritize the image. This is passed to the [priority](https://unpic.pics/img/webc/#priority) attribute of an underlying \`unpic-img\` element.

* **role**

  **string | null**

  The accessibility role of the image. This is set automatically by the media component, but you can override it if needed.

* **sizes**

  **string**

  The sizes of the image. This is set automatically by the media component, but you can override it if needed.

* **video-autoplay**

  **boolean**

  Used for video media. By default, videos [autoplay](https://developer.mozilla.org/docs/Web/HTML/Element/video#autoplay). To disable autoplay, set to `video-autoplay="false"`.

* **video-controls**

  **boolean**

  Used for video media. By default, [video controls](https://developer.mozilla.org/docs/Web/HTML/Element/video#controls) are shown. To disable them, set to `video-controls="false"`.

* **video-loop**

  **boolean**

  Used for video media. By default, videos [loop](https://developer.mozilla.org//docs/Web/HTML/Element/video#loop). To disable looping, set to `video-loop="false"`.

* **video-muted**

  **boolean**

  Used for video media. By default, videos are [muted](https://developer.mozilla.org/docs/Web/HTML/Element/video#muted). To enable audio, set to `video-muted="false"`.

* **video-playsinline**

  **boolean**

  Used for video media. By default, videos [play inline](https://developer.mozilla.org/docs/Web/HTML/Element/video#playsinline). To disable inline playback, set to `video-playsinline="false"`.

Examples

#### Examples

* ####

  ##### Description

  This is the default example

  ##### HTML

  ```html
  <shopify-store
    store-domain="https://your-store.myshopify.com"
  >
  </shopify-store>

  <!-- The context is bound to the store -->
  <shopify-context
    type="product"
    handle="handle-of-product"
  >
    <template>
      <h1>
        <!-- Query the featured image of the product.
          Renders an image element  -->
        <shopify-media
          width="200"
          height="300"
          query="product.featuredImage"
        ></shopify-media>
      </h1>
    </template>
  </shopify-context>
  ```

***

---

<a id="shopify-money-shopify-money"></a>

## shopify-money

## shopify-money

Accepts query a reference to a [Money object](https://shopify.dev/docs/api/storefront/2024-04/objects/MoneyV2), and uses the store's country and language market to format it correctly. This component must be a child of a [`shopify-context`](https://shopify.dev/docs/api/storefront-web-components/components/shopify-context) component. The component takes a query attribute that defines the context it's a part of, and the field to query. This component produces a text node with the formatted price.

Usually you want a product price to update based on the selected variant, so make sure to reference the `product.selectedOrFirstAvailableVariant.price` field if you are using the [shopify-variant-selector](https://shopify.dev/docs/api/storefront-web-components/components/shopify-variant-selector) component.

See the [playground](https://webcomponents.shopify.dev/playground) for more complete examples.

##### Attributes

* **query**

  **string**

  **required**

  Defines the context to reference and field to query. For example `query="product.title"` would query the title of the product context.

* **format**

  **Format**

  The format of the price. Defaults to `money`.

#### Format

The currency format format. - \`money\` - Display the price in the store's currency. eg. \`$100.00\` - \`money\_without\_currency\` - Display the price in the store's currency, without the currency symbol. eg. \`100.00\` - \`money\_with\_currency\` - Display the price in the store's currency, including the currency symbol. eg. \`$100.00 USD\`

```ts
"money" | "money_without_currency" | "money_with_currency"
```

Examples

#### Examples

* ####

  ##### Description

  This is the default example

  ##### HTML

  ```html
  <shopify-store
    store-domain="https://your-store.myshopify.com"
  >
  </shopify-store>

  <!-- The context is bound to the store -->
  <shopify-context
    type="product"
    handle="handle-of-product"
  >
    <template>
      <h1>
  <!-- Query the selected or first available variant's
  price. Renders a text node with the formatted price. -->
        <shopify-money
          format="money_with_currency"
          query="product.selectedOrFirstAvailableVariant.price"
        ></shopify-money>
      </h1>
    </template>
  </shopify-context>
  ```

***

---

<a id="shopify-store-shopify-store"></a>

## shopify-store

## shopify-store

Use the `<shopify-store>` component to set up your credentials and market configuration for a storefront. You can optionally add a public access token, which gives you access to your store's inventory, metafields, and metaobjects. Use [the Headless channel](https://apps.shopify.com/headless) to manage API access for your storefront and get a public access token.

See the [playground](https://webcomponents.shopify.dev/playground) for more complete examples.

##### Attributes

* **store-domain**

  **string**

  **required**

  The myshopify.com domain of the store.

* **buyNow**

  **(e: Event, options?: BuyNowOptions) => void**

  A method to open the checkout page with a selected product.

* **country**

  **CountryCode**

  The country of the store.

* **customer-access-token**

  **string**

  The customer access token for the current customer. See how to obtain one for [Hydrogen](https://shopify.dev/docs/storefronts/headless/building-with-the-customer-account-api/hydrogen) or [Headless](https://shopify.dev/docs/storefronts/headless/building-with-the-customer-account-api/authenticate-customers). Not needed in a theme.

* **language**

  **LanguageCode**

  The language of the store.

* **public-access-token**

  **string**

  The public access token from the [Headless channel](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/manage-headless-channels) for the store. This attribute is required if you want to access product inventory count, metafields, metaobjects, or customer accounts.

#### BuyNowOptions

* discountCodes

  ```ts
  string[]
  ```

* target

  ```ts
  Target
  ```

#### Target

The anchor target attribute for a link.

```ts
"_blank" | "_self" | "_parent" | "_top" | "_unfencedTop"
```

Examples

#### Examples

* ####

  ##### Description

  This is the default example

  ##### HTML

  ```html
  <!-- Optionally define market configuration, which defaults
   to US/EN. The public-access-token attribute is optional,
   and only necessary to access product inventory count, metafields,
   metaobjects, or customer accounts.
  -->
  <shopify-store
    store-domain="https://your-store.myshopify.com"
    public-access-token="optional-access-token"
    country="CA"
    language="FR"
  >
  </shopify-store>

  <!-- The context is bound to the store -->
  <shopify-context
    type="product"
    handle="handle-of-product"
  >
    <template> ... </template>
  </shopify-context>

  <!-- If you want to display products from multiple
    storefronts on the same page, nest contexts inside
    multiple store components-->
  <shopify-store
    store-domain="https://your-other-store.myshopify.com"
    country="CA"
    language="FR"
  >
    <shopify-context
      type="product"
      handle="handle-of-product"
    >
      <template> ... </template>
    </shopify-context>
  </shopify-store>
  ```

***

---

<a id="shopify-variant-selector-shopify-variant-selector"></a>

## shopify-variant-selector

## shopify-variant-selector

Use the `<shopify-variant-selector>` component to display a form for selecting product options. The variant selector must be a child of a product context. Any data, money, or media component that references `selectedOrFirstAvailableVariant` will automatically update when a variant is selected.

See the [playground](https://webcomponents.shopify.dev/playground) for more complete examples.

##### Attributes

* **visible-option**

  **string**

  Only show a single option. Default all options are visible. This allows you to have multiple variant selectors, each rendering a single option, and arrange them as you like.

  Additionally, when calling `context.update(event)`, the selected options in the current context will be applied to the variant selector in the destination context. This allows you to have a card with only one option visible, and a modal where all options are visible, and the selected options in the card will be applied to the modal.

##### CSS Parts

* **color-swatch**

  **CSSPart**

  The color swatch element.

* **color-swatch-disabled**

  **CSSPart**

  A part for the color swatch it is unavailable for sale.

* **color-swatch-label**

  **CSSPart**

  The color swatch label element.

* **color-swatch-selected**

  **CSSPart**

  A part for the color swatch when it is selected.

* **form**

  **CSSPart**

  The form element. This element has a flex layout, so targeting the form element allows you to control the layout of the variant selector.

* **label**

  **CSSPart**

  The label element for each option group.

* **radio**

  **CSSPart**

  The radio option element.

* **radio-disabled**

  **CSSPart**

  A part for the radio option when it is unavailable for sale.

* **radio-selected**

  **CSSPart**

  The radio selected element.

* **select**

  **CSSPart**

  The select element.

#### CSSPart

A \[\`::part\` CSS pseudo-element]\(https://developer.mozilla.org/en-US/docs/Web/CSS/::part) allowing you to target and override the default styling within the component.

```ts
string
```

Examples

#### Examples

* ####

  ##### Description

  This is the default example

  ##### HTML

  ```html
  <shopify-store
    store-domain="https://your-store.myshopify.com"
  >
  </shopify-store>

  <!-- The context is bound to the store -->
  <shopify-context
    type="product"
    handle="handle-of-product"
  >
    <template>
      <shopify-variant-selector></shopify-variant-selector>

      <!-- Fields on `selectedOrFirstAvailableVariant`
       automatically update when a variant is selected -->
      <shopify-money
        query="product.selectedOrFirstAvailableVariant.price"
      ></shopify-money>

      <shopify-media
        query="product.selectedOrFirstAvailableVariant.image"
        width="200"
        height="200"
      ></shopify-media>
    </template>
  </shopify-context>
  ```

* ####

  ##### HTML

  ```html
  <shopify-store
    store-domain="https://your-store.myshopify.com"
  >
  </shopify-store>

  <!-- The context is bound to the store -->
  <shopify-context
    type="product"
    handle="handle-of-product"
  >
    <template>
      <shopify-variant-selector>
      </shopify-variant-selector>
    </template>
  </shopify-context>

  <style>
    shopify-variant-selector::part(form) {
      /** Change the layout of the variant selector */
      flex-direction: row;
      gap: 10px;
    }

    shopify-variant-selector::part(label) {
      /** Change the label of the variant selector */
      font-weight: bold;
    }
  </style>
  ```

***

---

<a id="storefront-web-components-storefront-web-components-14"></a>

## Storefront Web Components — storefront-web-components

## Storefront Web Components

Storefront Web Components let you bring Shopify-powered commerce capabilities to any website. Display products, showcase collections, and offer a checkout, all with a few lines of embedded HTML.

### How Storefront Web Components work

Storefront Web Components are a set of HTML components that handle the complexity of querying Shopify's Storefront API, letting you display products, collections, and shopping cart functionality on your website without having to write complex JavaScript code.

After you add the `<shopify-store>` and `<shopify-context>` components to your markup and configure their attributes, you can access your store's data and then style it using CSS or HTML to create tailored shopping experiences.

Storefront Web Components are built for a wide range of use cases, from embedding your products and collections within existing content to building new pages for your site.

[Full page - Collection page](https://webcomponents.shopify.dev/playground?view=editor\&preset=product-cards-discover)

[Full page - Blog post](https://webcomponents.shopify.dev/playground?view=editor\&preset=blog-post)

[Embedded - Product card](https://webcomponents.shopify.dev/playground?view=editor\&preset=ready-product-card-first)

![How Storefront Web Components work](https://shopify.dev/assets/assets/images/api/storefront-web-components/storefront-web-components-example-o7UgYKdg.png)

***

### Resources

Follow the step-by-step guide to add Storefront Web Components to your project or browse sample code with live previews in the playground.

[Learn more - Getting started guide](https://shopify.dev/docs/api/storefront-web-components/getting-started/)

[Explore - Storefront Web Components playground](https://webcomponents.shopify.dev/playground)

***

---

<a id="common-patterns-common-patterns-15"></a>

## Common patterns — common-patterns

## Common patterns

Storefront Web Components can be customized for many different applications. This guide covers some of the most common ways they can be used to sell online, and includes ready-to-use examples that you can adapt to your own storefront. To learn more, see the [component documentation](https://shopify.dev/docs/api/storefront-web-components/components/shopify-cart).

***

### Buy now button

Add a button that redirects the customer to a Shopify-hosted checkout page. This is useful when you want to sell a single product.

To create a "Buy now" button:

1. Add a `button` component inside a [shopify-context component](https://shopify.dev/docs/api/storefront-web-components/components/shopify-context) that's associated with a product.

2. Call the `buyNow()` method in the `button` component's `onclick` attribute.

   * The method needs an event object where the event target must be inside a product [context component](https://shopify.dev/docs/api/storefront-web-components/components/shopify-context).
   * The component will redirect the customer to the checkout page with the selected product.

3. Customize the state and location of the checkout page:

   * Add discount codes by passing them in the options parameter: `{discountCodes: ['CODE1', 'CODE2']}`
   * Set the target window or tab for the checkout page: `{target: '_blank'}`
   * Combine both: `{discountCodes: ['SAVE10'], target: '_blank'}`

4. Configure the button state with the `shopify-attr--disabled` attribute. You can use this to automatically disable the button when the product variant is not available for sale.

**Note:**

You can mix "Buy now" buttons from different stores on the same page. Each button will open the checkout page of its own store.

###### 'Buy now' button example

Add a button that redirects the customer to a Shopify-hosted checkout page.

###### Include discount codes

Add discount codes to the checkout. This applies the discount codes automatically when the customer reaches checkout.

###### Sell from multiple stores

Use "Buy now" buttons from multiple stores on the same page. Each button will open the checkout page of its own store.

###### Set a custom target window

Choose where the checkout page opens by setting the target as a new tab or the same tab. You can also specify discount codes that will be applied to the cart.

### Buy now button example

```html
<shopify-store
    id="store"
    store-domain="https://your-store.myshopify.com"
  >
  </shopify-store>
  
  <!-- The context is bound to the store -->
  <shopify-context
    type="product"
    handle="handle-of-product"
  >
  <template>
    <shopify-variant-selector></shopify-variant-selector>
    <!-- The product added will be whatever
    variant is selected for the context product handle.
    The disabled attribute is added if the variant is not available for sale.
    -->
    <button
      onclick="getElementById('store').buyNow(event);"
      shopify-attr--disabled="!product.selectedOrFirstAvailableVariant.availableForSale"
    >
      Buy now
    </button>
  </template>
  </shopify-context>
```

### Use discount codes with 'Buy now' buttons

```html
<shopify-store
    store-domain="https://your-store.myshopify.com"
  >
  </shopify-store>
  
  <shopify-context
    type="product"
    handle="handle-of-product"
  >
  <template>
    <shopify-variant-selector></shopify-variant-selector>
    <!-- Checkout opens with discount codes applied automatically -->
    <button
      onclick="buyNowWithDiscount(event)"
      shopify-attr--disabled="!product.selectedOrFirstAvailableVariant.availableForSale"
    >
      Buy now with discount
    </button>
    
    <script>
      function buyNowWithDiscount(event) {
        document.querySelector('shopify-store').buyNow(event, {
          discountCodes: ['SAVE10', 'FREESHIP']
        });
      }
    </script>
  </template>
  </shopify-context>
```

### Sell from multiple stores

```html
<!-- First store -->
  <shopify-store
    store-domain="https://your-first-store.myshopify.com"
  >
    <shopify-context
      type="product"
      handle="snowboard"
    >
    <template>
      <h2>Product from Store 1</h2>
      <h3><shopify-data query="product.title"></shopify-data></h3>
      <shopify-variant-selector></shopify-variant-selector>
      <button
        onclick="document.querySelector('shopify-store').buyNow(event);"
        shopify-attr--disabled="!product.selectedOrFirstAvailableVariant.availableForSale"
      >
        Buy now from Store 1
      </button>
    </template>
    </shopify-context>
  </shopify-store>
  
  <!-- Second store -->
  <shopify-store
    store-domain="https://your-second-store.myshopify.com"
  >
    <shopify-context
      type="product"
      handle="t-shirt"
    >
    <template>
      <h2>Product from Store 2</h2>
      <h3><shopify-data query="product.title"></shopify-data></h3>
      <shopify-variant-selector></shopify-variant-selector>
      <button
        onclick="document.querySelector('shopify-store').buyNow(event);"
        shopify-attr--disabled="!product.selectedOrFirstAvailableVariant.availableForSale"
      >
        Buy now from Store 2
      </button>
    </template>
    </shopify-context>
  </shopify-store>
```

### Custom target window

```html
<shopify-store
    store-domain="https://your-store.myshopify.com"
  >
  </shopify-store>
  
  <shopify-context
    type="product"
    handle="handle-of-product"
  >
  <template>
    <shopify-variant-selector></shopify-variant-selector>
    
    <!-- Buy now opening in the same tab -->
    <button
      onclick="document.querySelector('shopify-store').buyNow(event, {target: '_self'});"
      shopify-attr--disabled="!product.selectedOrFirstAvailableVariant.availableForSale"
    >
      Buy now (same tab)
    </button>
    
    <!-- Buy now opening in a new tab -->
    <button
      onclick="document.querySelector('shopify-store').buyNow(event, {target: '_blank'});"
      shopify-attr--disabled="!product.selectedOrFirstAvailableVariant.availableForSale"
    >
      Buy now (new tab)
    </button>
    
    <!-- Buy now with discount codes and custom target -->
    <button
      onclick="document.querySelector('shopify-store').buyNow(event, {target: '_blank', discountCodes: ['SAVE10']});"
      shopify-attr--disabled="!product.selectedOrFirstAvailableVariant.availableForSale"
    >
      Buy now with discount (new tab)
    </button>
  </template>
  </shopify-context>
```

***

### Add to cart button

Add a button that lets customers add your products to their cart. This is useful when you want to sell multiple products, because it lets customers add products to their cart without being redirected from your site to the checkout page.

To create an "Add to cart" button:

1. Add a `button` component inside a [shopify-context component](https://shopify.dev/docs/api/storefront-web-components/components/shopify-context) that's associated with a product.

2. Call the `addLine()` method in the `button` component's `onclick` attribute to add the product to the customer's cart.

   * This method requires an event object or a product data object.
   * If using an event, the event target must be inside a product [context component](https://shopify.dev/docs/api/storefront-web-components/components/shopify-context).

3. Display the cart using a native [HTML `<dialog>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog).

   * To show it as a popup modal, call the `showModal()` method.

4. Customize the cart's styling and content with CSS parts and slots. [View examples](https://shopify.dev/docs/api/storefront-web-components/components/shopify-cart#examples)

**Note:**

The cart component doesn't support mixing products from multiple stores.

[API docs - shopify-cart component](https://shopify.dev/docs/api/storefront-web-components/components/shopify-cart)

### Add to cart example

```html
<shopify-store
  store-domain="https://your-store.myshopify.com"
>
</shopify-store>


<!-- The context is bound to the store -->
<shopify-context
  type="product"
  handle="handle-of-product"
>
<template>
  <shopify-variant-selector></shopify-variant-selector>
  <!-- The product added will be whatever
  variant is selected for the context product handle.
  The disabled attribute is added if the variant is not available for sale.
  -->
  <button
    onclick="getElementById('cart').addLine(event).showModal();"
    shopify-attr--disabled="!product.selectedOrFirstAvailableVariant.availableForSale"
  >
    Add to cart
  </button>
</template>
</shopify-context>


<shopify-cart id="cart"></shopify-cart>
```

***

### Product details dialog

Add a button that lets customers view details about a product on a separate dialog. This is useful if you have limited space on your page, but still want to provide a way for customers to view product details.

To create a "View details" button":

1. Add an HTML `<dialog>` element to your page. Inside the dialog, place a product [shopify-context component](https://shopify.dev/docs/api/storefront-web-components/components/shopify-context) with a `wait-for-update` attribute. The `wait-for-update` attribute prevents the dialog from loading product details until a specific product is selected. Include a template and components within the product context to display the product information.

2. Add a `button` element inside another [shopify-context component](https://shopify.dev/docs/api/storefront-web-components/components/shopify-context) that's associated with a product.

3. Add a click event listener to the button that calls the [update method](https://shopify.dev/docs/api/storefront-web-components/components/shopify-context#attributes-propertydetail-update) on the product context inside the dialog. This links the dialog's product context (destination) with the product context nearest to the button (source), allowing the dialog to display details for the selected product.

4. Display the dialog by calling the native [`showModal`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/showModal) method.

### Product details example

```html
<shopify-store
  store-domain="https://your-store.myshopify.com"
  country="CA"
  language="FR"
>
</shopify-store>


<script>
  function showProductDetails(event) {
    // Update a dialog context with a selected product
    document.getElementById('dialog-context')
      .update(event);


    // Show the dialog
    document.getElementById('dialog')
      .showModal();
  }
</script>


<!-- A list of products -->
<shopify-list-context
  type="product"
  query="products"
  first="10"
>
  <!-- This template is repeated for each product-->
  <template>
    <!-- A button that shows the product details -->
    <button
      onclick="showProductDetails(event)"
    >
      <shopify-data
        query="product.title"
      ></shopify-data>
    </button>
  </template>
</shopify-list-context>


<dialog id="dialog">
  <!-- A product context that waits for an update to render -->
  <shopify-context
    id="dialog-context"
    type="product"
    wait-for-update
  >
    <template>
      <div>
        <shopify-data
          query="product.description"
        ></shopify-data>
      </div>
    </template>
    <div
      shopify-loading-placeholder
    >
      Loading...
    </div>
  </shopify-context>
</dialog>
```

***

---

<a id="custom-data-custom-data-16"></a>

## Custom data — custom-data

## Custom data

Storefront Web Components can be used to display custom data stored in metafields and metaobjects from your Shopify store. This guide covers some of the most common ways to use custom data, and includes ready-to-use examples that you can adapt to your own storefront.

***

### Setup

Although Storefront Web Components don't require an access token for most use cases, you need to provide a Storefront API access token to fetch metafields and metaobjects.

To set up a Storefront API access token:

1. Install either the [Hydrogen](https://apps.shopify.com/hydrogen) or [Headless](https://apps.shopify.com/headless) sales channel in your Shopify admin.

2. Create a new storefront within the sales channel.

3. Copy your public access token from your storefront settings:

   * **Hydrogen**: Navigate to **Storefront settings** and find the public access token in the **Storefront API** section.
   * **Headless**: Inside the **Manage API access** section of your storefront, click on the **Manage** button for the Storefront API to find the public access token.

4. Make sure that access is enabled for metaobjects in the **Permissions** section.

5. In your Storefront Web Components code, add the public access token to the `public-access-token` attribute of your [`shopify-store` component](https://shopify.dev/docs/api/storefront-web-components/components/shopify-store).

[API docs - shopify-store component](https://shopify.dev/docs/api/storefront-web-components/components/shopify-store)

### Add a store component

```html
<!-- The public-access-token is required
 for access to metafields and metaobjects -->
<shopify-store
  public-access-token="your-access-token"
  store-domain="your-store-domain"
></shopify-store>
```

***

### Render a metafield

To display a product's metafield data on your storefront:

1. Create a [`shopify-context` component](https://shopify.dev/docs/api/storefront-web-components/components/shopify-context) that targets your specific product.
2. Inside the product context, add another `shopify-context` component that targets the metafield. Specify the metafield's namespace and key as attributes. You can find the namespace and key in the [**Metafields and metaobjects**](https://www.shopify.com/admin/settings/custom_data) settings in your Shopify admin.
3. Within the metafield context, use a [`shopify-data` component](https://shopify.dev/docs/api/storefront-web-components/components/shopify-data) to display the metafield's value on the page.

###### Render a product metafield

This example shows how to render a product's metafield data on your storefront.

###### Render a currency metafield

This example shows how to render a currency metafield.

### Render a product metafield

```html
<!-- The public-access-token is required
   for access to metafields and metaobjects -->
   <shopify-store
   public-access-token="your-access-token"
   store-domain="your-store-domain"
  ></shopify-store>
  
  <shopify-context
   type="product"
   handle="your-product-handle"
  >
   <template>
     <shopify-context
       type="metafield"
       query="product.metafield"
       key="your-metafield-key"
       namespace="your-metafield-namespace"
     >
       <template>
         <shopify-data
           query="metafield.value"
         ></shopify-data>
       </template>
     </shopify-context>
   </template>
  </shopify-context>
```

### Render a currency metafield

```html
<!-- The public-access-token is required
   for access to metafields and metaobjects -->
   <shopify-store
   public-access-token="your-access-token"
   store-domain="your-store-domain"
  ></shopify-store>
  
  <shopify-context
   type="product"
   handle="your-product-handle"
  >
   <template>
     <shopify-context
       type="metafield"
       query="product.metafield"
       key="your-metafield-key"
       namespace="your-metafield-namespace"
     >
       <template>
         <shopify-money
           query="metafield"
         ></shopify-money>
       </template>
     </shopify-context>
   </template>
  </shopify-context>
```

***

### Metafield references

You can use a metafield to reference other objects in your store. For example, you can use a metafield on a product to reference another product. To render a metafield reference:

1. Create a [`shopify-context` component](https://shopify.dev/docs/api/storefront-web-components/components/shopify-context) that targets your specific product.
2. Inside the product context, add another `shopify-context` component that targets the metafield. Specify the metafield's namespace and key as attributes. You can find the namespace and key in the [**Metafields and metaobjects**](https://www.shopify.com/admin/settings/custom_data) settings in your Shopify admin.
3. Within the metafield context, add another `shopify-context` component that targets the reference.
4. Within the reference context, use a [`shopify-data` component](https://shopify.dev/docs/api/storefront-web-components/components/shopify-data) to display the reference's value on the page.

###### Render a metafield reference

This example shows how to render a metafield that references another product.

###### Render a list of metafield references

This example shows how to render a metafield that references a list of products.

###### Render an image from a metafield reference

This example shows how to render an image from a metafield reference.

### Render a metafield reference

```html
<!-- The public-access-token is required
   for access to metafields and metaobjects -->
   <shopify-store
   public-access-token="your-access-token"
   store-domain="your-store-domain"
  ></shopify-store>
  
  <!-- A context for the product -->
  <shopify-context
   type="product"
   handle="your-product-handle"
  >
   <template>
     <!-- A context for the metafield -->
     <shopify-context
       type="metafield"
       query="product.metafield"
       key="your-metafield-key"
       namespace="your-metafield-namespace"
     >
       <template>
         <!-- A context for the product
          that the metafield references -->
         <shopify-context
           type="product"
           query="metafield.reference"
         >
           <template>
             <div>
               <shopify-data
                 query="product.title"
               ></shopify-data>
             </div>
           </template>
         </shopify-context>
       </template>
     </shopify-context>
   </template>
  </shopify-context>
```

### Render a list of metafield references

```html
<!-- The public-access-token is required
   for access to metafields and metaobjects -->
   <shopify-store
   public-access-token="your-access-token"
   store-domain="your-store-domain"
  ></shopify-store>
  
  <!-- A context for the product -->
  <shopify-context
   type="product"
   handle="your-product-handle"
  >
   <template>
     <!-- A context for the metafield -->
     <shopify-context
       type="metafield"
       query="product.metafield"
       key="your-metafield-key"
       namespace="your-metafield-namespace"
     >
       <template>
         <!-- A context for the product list
         that the metafield references -->
         <shopify-list-context
           type="product"
           query="metafield.references"
           first="5"
         >
           <template>
             <div>
               <shopify-data
                 query="product.title"
               ></shopify-data>
             </div>
           </template>
         </shopify-list-context>
       </template>
     </shopify-context>
   </template>
  </shopify-context>
```

### Render an image from a metafield reference

```html
<!-- The public-access-token is required
   for access to metafields and metaobjects -->
   <shopify-store
   public-access-token="your-access-token"
   store-domain="your-store-domain"
  ></shopify-store>
  
  <!-- A context for the product -->
  <shopify-context
   type="product"
   handle="your-product-handle"
  >
   <template>
     <!-- A context for the metafield -->
     <shopify-context
       type="metafield"
       query="product.metafield"
       key="your-metafield-key"
       namespace="your-metafield-namespace"
     >
       <template>
         <!-- A context for the product
         that the metafield references -->
         <shopify-context
           type="media"
           query="metafield.reference"
         >
           <template>
             <div>
               <shopify-media
                 query="media"
                 width="100"
                 height="100"
               ></shopify-media>
             </div>
           </template>
         </shopify-context>
       </template>
     </shopify-context>
   </template>
  </shopify-context>
```

***

### Render a metaobject

Metaobjects are dynamic objects that store custom data in your Shopify store. You can render metaobjects using Storefront Web Components with a [shopify-context component](https://shopify.dev/docs/api/storefront-web-components/components/shopify-context):

1. Create a `shopify-context` component with `type="metaobject"` and `handle` attributes. The `handle` attribute specifies which metaobject to render. You can find the handle values for each metaobject on the [**Entries**](https://www.shopify.com/admin/content/metaobjects/entries) page in your Shopify admin.
2. Add a `metaobject-definition-type` attribute to the same `shopify-context` component to specify the metaobject definition type.
3. To access metafields within the metaobject, add a nested [`shopify-context` component](https://shopify.dev/docs/api/storefront-web-components/components/shopify-context) with `type="field"` and `key` attributes. The `key` attribute identifies which metafield to target. You can find the key values for each metafield in the [**Metafields and metaobjects**](https://www.shopify.com/admin/settings/custom_data) settings in your Shopify admin.
4. Inside the metafield context, add your template and components to display the metafield data.

###### Render a metaobject

This example shows how to render metafields within a metaobject.

###### Render a list of metaobjects

This example shows how to render a list of metaobjects with a [shopify-list-context component](https://shopify.dev/docs/api/storefront-web-components/components/shopify-list-context).

###### Render a metaobject reference

This example shows how to render a product and image reference from a metaobject.

### Render a metaobject

```html
<!-- The public-access-token is required
   for access to metafields and metaobjects -->
   <shopify-store
   public-access-token="your-access-token"
   store-domain="your-store-domain"
  ></shopify-store>
  
  <!-- A context for the metaobject. It must contain
   a metaobject attribute with the metaobject name -->
  <shopify-context
   type="metaobject"
   handle="your-metaobject-handle"
   metaobject-definition-type="your-metaobject-definition-type"
  >
   <template>
     <!-- A context for the metafield.
      It must contain the metafield key -->
     <shopify-context
       type="field"
       query="metaobject.field"
       key="your-metafield-key"
     >
       <template>
         <div>
           <shopify-data
             query="field.value"
           ></shopify-data>
         </div>
       </template>
     </shopify-context>
   </template>
  </shopify-context>
```

### Render a list of metaobjects

```html
<!-- The public-access-token is required
   for access to metafields and metaobjects -->
   <shopify-store
   public-access-token="your-access-token"
   store-domain="your-store-domain"
  ></shopify-store>
  
  <!-- A context for the metaobject. It must contain
  a metaobject attribute with the metaobject name -->
  <shopify-list-context
   type="metaobject"
   query="metaobjects"
   metaobject-definition-type="stores"
   first="10"
  >
   <!-- The template is repeated for each metaobject in the list -->
   <template>
      <!-- A context for the metafield.
      It must contain the metafield key -->
     <shopify-context
       type="field"
       query="metaobject.field"
       key="title"
     >
       <template>
         <div>
           <shopify-data
             query="field.value"
           ></shopify-data>
         </div>
       </template>
     </shopify-context>
   </template>
  </shopify-list-context>
```

### Render a metaobject reference

```html
<!-- The public-access-token is required
   for access to metafields and metaobjects -->
   <shopify-store
   public-access-token="your-access-token"
   store-domain="your-store-domain"
  ></shopify-store>
  
  <!-- A context for the metaobject. It must contain
   a metaobject attribute with the metaobject name -->
  <shopify-context
   type="metaobject"
   handle="your-metaobject-handle"
   metaobject-definition-type="your-metaobject-definition-type"
  >
   <template>
     <!-- A context for the product metafield.
      It must contain the metafield key -->
     <shopify-context
       type="field"
       query="metaobject.field"
       key="your-product-metafield-key"
     >
       <template>
        <!-- A context for the product reference -->
        <shopify-context type="product" query="field.reference">
          <template>
            <div>
              <shopify-data query="product.title"></shopify-data>
            </div>
          </template>
        </shopify-context>
       </template>
     </shopify-context>
  
     <!-- A context for the image metafield.
      It must contain the metafield key -->
     <shopify-context
       type="field"
       query="metaobject.field"
       key="your-image-metafield-key"
     >
       <template>
        <!-- A context for the image reference.
         The type must match the Storefront API
         object type of the metafield reference -->
        <shopify-context type="media" query="field.reference">
          <template>
            <div>
              <shopify-media query="media"></shopify-media>
            </div>
          </template>
        </shopify-context>
       </template>
     </shopify-context>
   </template>
  </shopify-context>
```

***

### Custom components

Metafields support various data types, including rich text, links, numbers, dates, JSON, and file references. The [`shopify-data` component](https://shopify.dev/docs/api/storefront-web-components/components/shopify-data) displays the raw metafield value as-is. For more sophisticated presentations of complex data types like JSON objects or structured content, you can build custom components that receive the metafield value as an attribute with the [`shopify-attr` attribute](https://shopify.dev/docs/api/storefront-web-components/attributes/shopify-attr).

[API docs - shopify-attr attribute](https://shopify.dev/docs/api/storefront-web-components/attributes/shopify-attr)

### Add a custom component

```html
<script>
  // Define a custom component that renders a JSON object
  class CustomComponent extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      const value = JSON.parse(
        this.getAttribute("value"),
      );
      this.innerHTML = `
        <div>
          <h1>${value.title}</h1>
          <p>${value.description}</p>
        </div>
      `;
    }
  }


  // Register the custom component
  customElements.define(
    "custom-component",
    CustomComponent,
  );
</script>


<!-- The public-access-token is required
  for access to metafields and metaobjects -->
<shopify-store
  public-access-token="your-access-token"
  store-domain="your-store-domain"
></shopify-store>


<shopify-context
  type="product"
  handle="your-product-handle"
>
  <template>
    <shopify-context
      type="metafield"
      query="product.metafield"
      key="your-metafield-key"
      namespace="your-metafield-namespace"
    >
      <template>
        <!-- Bind the metafield value to the
        value attribute of the custom component -->
        <custom-component
          shopify-attr--value="metafield.value"
        ></custom-component>
      </template>
    </shopify-context>
  </template>
</shopify-context>
```

***

---

<a id="getting-started-getting-started-17"></a>

## Getting started — getting-started

## Getting started

This guide provides step-by-step instructions for adding Storefront Web Components to your website. If you want to use an LLM to generate code, include the [LLMs.txt](https://webcomponents.shopify.dev/llms.txt) file with your prompt to guide the model's output.

***

### Step 1: Connect your store

Open the HTML file in the project where you want to use Storefront Web Components, and add the script tag shown here. Beneath it, add a [`<shopify-store>` component](https://shopify.dev/docs/api/storefront-web-components/components/shopify-store), with the domain of your store (for example, `https://demostore.mock.shop/`).

The `<shopify-store>` component supports optional country and language attributes that let you display pricing and content for a specific market.

You don't need an access token to use Storefront Web Components. However, if you want to display the inventory count or any custom data about a product, then you need to add an access token to the `<shopify-store>` component as well. To get an access token:

1. Install the [Headless channel](https://apps.shopify.com/headless) from the Shopify App Store.
2. To generate an access token, navigate to the Headless channel in your Shopify admin and click **Create storefront**.
3. In the **Manage API access** section, click **Manage** for the Storefront API, and then copy the public access token.
4. In your project, add a `public-access-token` attribute with your token to the `<shopify-store>` component (for example, `public-access-token="your-access-token"`).

**Using LLMs with Storefront Web Components:**

If you want to use an LLM to generate code, include the [LLMs.txt](https://webcomponents.shopify.dev/llms.txt) file with your prompt to guide the model's output.

### Storefront Web Components setup

```html
<script src="https://cdn.shopify.com/storefront/web-components.js">
</script>


<shopify-store
  store-domain="https://your-store.myshopify.com"
  country="US"
  language="en"
>
</shopify-store>
```

***

### Step 2: Set the context

After adding the script tag and `<shopify-store>` component, add a [`<shopify-context>` component](https://shopify.dev/docs/api/storefront-web-components/components/shopify-context). This defines which Shopify data will be available.

Each `<shopify-context>` component requires two attributes:

* `type`: Specifies what kind of data you want (for example, `product`).
* `handle`: Identifies the specific item. For example, the handle for the URL [`demostore.mock.shop/products/men-t-shirt`](https://demostore.mock.shop/products/men-t-shirt) is `men-t-shirt`.

If you're working with a single storefront, then you can add the `<shopify-context>` component anywhere on your page (it doesn't need to be inside the `<shopify-store>` component). If you're working with multiple storefronts, then nest the context inside its corresponding store component.

Every `<shopify-context>` component also requires a template component, which contains the data you want to display. That template won't render until the context loads. You'll populate this component in the next step.

### Setup context

```html
<script src="https://cdn.shopify.com/storefront/web-components.js">
</script>


<shopify-store
  store-domain="https://your-store.myshopify.com"
>
</shopify-store>


<shopify-context
  type="product"
  handle="your-product-handle"
>
  <template>
    <!-- This template won't be rendered until the context is loaded -->
  </template>
</shopify-context>
```

***

### Step 3: Load Shopify data

Inside a context template, you can use any standard HTML markup along with Shopify's data components.

The [`shopify-data`](https://shopify.dev/docs/api/storefront-web-components/components/shopify-data) component is used to display Shopify data on your page. Here's how it works:

* It requires a `query` attribute that specifies which data to display.
* The query uses dot notation to access data fields (for example, `query="product.title"`).
* It looks for the nearest matching `<shopify-context>` component to find the data.
* It outputs plain text that you can style with your own HTML elements.

In this example, `<shopify-data query="product.title">` finds the nearest product context (based on its `handle` attribute), accesses its `title` property, and displays it as text.

Since the component outputs a text node, to match your site's design you can wrap it in any necessary HTML elements. The component also supports rich text fields like `product.descriptionHtml`.

### Data loading

```html
<script src="https://cdn.shopify.com/storefront/web-components.js"></script>


<shopify-store
  store-domain="https://your-store.myshopify.com"
>
</shopify-store>


<shopify-context
  type="product"
  handle="your-product-handle"
>
  <template>
    <!-- shopify-data renders a text node -->
    <h1 class="your-style">
      <shopify-data query="product.title">
      </shopify-data>
    </h1>


    <p>
      <!-- This renders a rich text description -->
      <shopify-data query="product.descriptionHtml">
      </shopify-data>
    </p>
  </template>
</shopify-context>
```

***

### Step 4: Format components

Some types of data , like `currency` and `media`, require extra formatting to display properly. For these types of data, you can use the following components:

* [`shopify-money`](https://shopify.dev/docs/api/storefront-web-components/components/shopify-money): Accepts a query reference to a money object, and uses the store's country and language market to format it correctly.
* [`shopify-media`](https://shopify.dev/docs/api/storefront-web-components/components/shopify-media): Accepts an image reference and generates an image element with `srcset` and `sizes` attributes.

### Formatting components

```html
<script src="https://cdn.shopify.com/storefront/web-components.js">
</script>


<shopify-store
  store-domain="https://your-store.myshopify.com"
>
</shopify-store>


<shopify-context
  type="product"
  handle="your-product-handle"
>
  <template>
    <!-- Display the product price -->
    <shopify-money
      query="product.selectedOrFirstAvailableVariant.price"
      format="money_with_currency">
    </shopify-money>


    <!-- Display the product image -->
    <shopify-media
      query="product.selectedOrFirstAvailableVariant.image"
      width="400"
      height="400"
    >
    </shopify-media>
  </template>
</shopify-context>
```

***

### Step 5: Connect to checkout

You can add buttons to your components that let customers buy products, view product details, or [add products to their cart](https://shopify.dev/docs/api/storefront-web-components/components/shopify-cart).

To add a "Buy now" button that redirects the customer to the checkout page:

1. Add a `button` component inside a [shopify-context component](https://shopify.dev/docs/api/storefront-web-components/components/shopify-context) that's associated with a product.

2. Call the `buyNow()` method in the `button` component's `onclick` attribute, and make sure it includes an event object whose target is inside a `shopify-context` component.

When the customer clicks the button, the component will redirect them to the checkout page with the selected product.

To learn more about different button actions, see [Common patterns](https://shopify.dev/docs/api/storefront-web-components/common-patterns).

### Buy now button example

```html
<shopify-store
  id="store"
  store-domain="https://your-store.myshopify.com"
>
</shopify-store>


<!-- The context is bound to the store -->
<shopify-context
  type="product"
  handle="handle-of-product"
>
<template>
  <shopify-variant-selector></shopify-variant-selector>
  <!-- The product added will be whatever
  variant is selected for the context product handle.
  The disabled attribute is added if the variant is not available for sale.
  -->
  <button
    onclick="getElementById('store').buyNow(event);"
    shopify-attr--disabled="!product.selectedOrFirstAvailableVariant.availableForSale"
  >
    Buy now
  </button>
</template>
</shopify-context>
```

***

### Next steps

Now that you've set up the basic Storefront Web Components, you can use others to add new types of data or functionality to your website. Components are available for common commerce features and design patterns, including:

* [`shopify-list-context`](https://shopify.dev/docs/api/storefront-web-components/components/shopify-list-context): Displays multiple items in a repeating format, like a list of products or collections.
* [`shopify-cart`](https://shopify.dev/docs/api/storefront-web-components/components/shopify-cart): Provides simple shopping cart using a native [HTML `<dialog>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog).
* [`shopify-variant-selector`](https://shopify.dev/docs/api/storefront-web-components/components/shopify-variant-selector): Creates a form that lets customers choose between different product options (like sizes, colors, or materials).

[Explore - Storefront Web Components playground](https://webcomponents.shopify.dev/playground)

[Learn more - Storefront Web Components reference](https://shopify.dev/docs/api/storefront-web-components/components/shopify-cart)

***

---
