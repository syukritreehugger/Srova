# Shopify Liquid – other Reference (Indonesian / English)

> Referensi lengkap **Liquid – other** Shopify API yang disusun ulang dari https://shopify.dev/docs/api/liquid.
> Dokumen ini dirancang untuk pengembang berbahasa Indonesia, namun seluruh konten teknis (skema, tipe, nama field, contoh kode) dipertahankan dalam bahasa Inggris asli untuk memastikan akurasi.

| Item | Nilai |
|------|-------|
| Sumber | `https://shopify.dev/docs/api/liquid` |
| Total halaman | **31** |
| Tanggal kompilasi | 2026-05-01 |
| Bahasa | Indonesia (intro/ToC) + English (konten teknis) |



> **Grup:** `other (small groups)` (split file)


## Daftar Isi (Table of Contents)

- [basics](#basics)
- [tags / assign](#tags-assign)
- [tags / break](#tags-break)
- [tags / capture](#tags-capture)
- [tags / case](#tags-case)
- [tags / comment](#tags-comment)
- [tags / conditional-else](#tags-conditional-else)
- [tags / content_for](#tags-content-for)
- [tags / continue](#tags-continue)
- [tags / cycle](#tags-cycle)
- [tags / decrement](#tags-decrement)
- [tags / doc](#tags-doc)
- [tags / echo](#tags-echo)
- [tags / for](#tags-for)
- [tags / form](#tags-form)
- [tags / if](#tags-if)
- [tags / include](#tags-include)
- [tags / increment](#tags-increment)
- [tags / iteration-else](#tags-iteration-else)
- [tags / javascript](#tags-javascript)
- [tags / layout](#tags-layout)
- [tags / liquid](#tags-liquid)
- [tags / paginate](#tags-paginate)
- [tags / raw](#tags-raw)
- [tags / render](#tags-render)
- [tags / section](#tags-section)
- [tags / sections](#tags-sections)
- [tags / style](#tags-style)
- [tags / stylesheet](#tags-stylesheet)
- [tags / tablerow](#tags-tablerow)
- [tags / unless](#tags-unless)


---



<a id="basics"></a>


## Basics

The following are basic concepts that you need to effectively interact with Liquid tags, filters, and objects.

### Object handles

Objects that represent store resources, such as products, collections, articles, and blogs, have handles for identifying an individual resource. The handle is used to build the URL for the resource, or to return properties for the resource.

Other objects like `linklists`, `links`, and `settings` also have handles.

#### Creating and modifying handles

Handles are automatically generated based on the resource title. They follow a set of rules:

* Handles are always lowercase
* Whitespace and special characters are replaced with a hyphen `-`.
* If there are multiple consecutive whitespace or special characters, then they're replaced with a single hyphen.
* Whitespace or special characters at the beginning are removed.

Handles need to be unique, so if a duplicate title is used, then the handle is auto-incremented by one. For example, if you had two products called `Potion`, then their handles would be `potion` and `potion-1`.

After a resource has been created, changing the resource title doesn't update the handle.

You can modify a resource's handle within the Shopify admin. This can be done either in the Handle or the Edit website SEO sections, depending on the resource. If you reference resources by their handle, then be sure to update those references when modifying handles.

***

**Note:**

Individual links from `linklists` have handles based on their titles. These handles can't be modified directly. Individual settings, from `settings_schema.json`, sections, or blocks, get their handle from their `id` property.

***

###### Code

```liquid
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
```

#### Referencing handles

All objects that have a handle have a `handle` property. For example, you can output a product's handle with `product.handle`. You can reference an object, from within its parent object, by its handle in two ways:

* Square bracket notation `[ ]`: Accepts a handle wrapped in quotes `'`, a Liquid variable, or an object reference.
* Dot notation `.`: Accepts a handle without quotes.

***

**Note:**

Referencing an object by its handle is similar to [referencing array elements by their index](https://shopify.dev/docs/api/liquid/basics#array).

***

###### Code

```liquid
'About us' page URL: {{ pages['about-us'].url }}
Enable product suggestions: {{ settings.predictive_search_enabled }}
```

###### Data

```json
{
  "settings": {
    "predictive_search_enabled": true
  }
}
```

###### Output

```html
'About us' page URL: /pages/about-us
Enable product suggestions: true
```

***

### Logical and comparison operators

Liquid supports basic logical and comparison operators for use with conditional tags: [`case`](https://shopify.dev/docs/api/liquid/tags/case), [`else`](https://shopify.dev/docs/api/liquid/tags/conditional-else), [`if`](https://shopify.dev/docs/api/liquid/tags/if) and [`unless`](https://shopify.dev/docs/api/liquid/tags/unless).

| Operator | Function |
| - | - |
| `==` | equals |
| `!=` | does not equal |
| `>` | greater than |
| `<` | less than |
| `>=` | greater than or equal to |
| `>=` | greater than or equal to |
| `<=` | less than or equal to |
| `or` | Condition A or Condition B |
| `and` | Condition A and Condition B |
| `contains` | Checks for strings in strings or arrays |

##### contains

You can use `contains` to check for the presence of a string within an array, or another string. You can’t use `contains` to check for an object in an array of objects.

###### Code

```liquid
{% if product.tags contains 'healing' %}
  This potion contains restorative properties.
{% endif %}
```

###### Data

```json
{
  "product": {
    "tags": [
      "healing"
    ]
  }
}
```

###### Output

```html
This potion contains restorative properties.
```

#### Order of operations

When using more than one operator in a tag, the operators are evaluated from right to left, and you can’t change this order.

***

**Caution:**

Parentheses `()` aren’t valid characters within Liquid tags. If you try to include them to group operators, then your tag won’t be rendered.

***

###### Code

```liquid
{% unless true and false and false or true %}
  This evaluates to false, since Liquid checks tags like this:

  true and (false and (false or true))
  true and (false and true)
  true and false
  false
{% endunless %}
```

###### Output

```html
This evaluates to false, since Liquid checks tags like this:

  true and (false and (false or true))
  true and (false and true)
  true and false
  false
```

***

### Types

Liquid output can be one of six data types.

#### string

Any series of characters, wrapped in single or double quotes.

***

**Info:**

You can check whether a string is empty with the `blank` object.

***

#### number

Numeric values, including floats and integers.

#### boolean

A binary value, either `true` or `false`.

#### nil

An undefined value.

Tags or outputs that return `nil` don't print anything to the page. They are also treated as `false`.

***

**Note:**

A string with the characters “nil” is not treated the same as `nil`.

***

#### array

A list of variables of any type.

To access all of the items in an array, you can loop through each item in the array using a [`for`](https://shopify.dev/docs/api/liquid/tags/for) or [`tablerow`](https://shopify.dev/docs/api/liquid/tags/tablerow) tag.

You can use square bracket `[ ]` notation to access a specific item in an array. Array indexing starts at zero.

You can’t initialize arrays using only Liquid. You can, however, use the split filter to break a single string into an array of substrings.

#### empty

An `empty` object is returned if you try to access an object that is defined, but has no value. For example a page or product that’s been deleted, or a setting with no value.

You can compare an object with `empty` to check whether an object exists before you access any of its attributes.

###### Code

```liquid
{% unless pages.about-us == empty %}
  <h1>{{ page.title }}</h1>
  <div>
    {{ page.content }}
  </div>
{% endunless %}
```

###### Data

```json
{
  "page": {
    "content": "<p>Polina's Potent Potions was started by Polina in 1654.</p>\n<p>We use all-natural locally sourced ingredients for our potions.</p>",
    "title": "About us"
  }
}
```

###### Output

```html
<h1>About us</h1>
  <div>
    <p>Polina's Potent Potions was started by Polina in 1654.</p>
<p>We use all-natural locally sourced ingredients for our potions.</p>
  </div>
```

***

### Truthy and falsy

All data types must return either `true` or `false`. Those which return `true` by default are called truthy. Those that return `false` by default are called falsy.

| Value | Truthy | Falsy |
| - | - | - |
| `true` | | |
| `false` | | |
| `nil` | | |
| `empty string` | | |
| `0` | | |
| `integer` | | |
| `float` | | |
| `array` | | |
| `empty array` | | |
| `page` | | |
| `empty object` | | |

#### Example

Because `nil` and `false` are the only falsy values, you need to be careful how you check values in Liquid. A value might not be in the format you expect, but still be truthy.

For example, empty strings are truthy, so you need to check whether they’re empty with `blank`. `EmptyDrop` objects are also truthy, so you need to check whether the object you’re referencing is `empty`.

###### Code

```liquid
{% if settings.featured_potions_title != blank -%}
  {{ settings.featured_potions_title }}
{%- else -%}
  No value for this setting has been selected.
{%- endif %}
{% unless pages.recipes == empty -%}
  {{ pages.recipes.content }}
{%- else -%}
  No page with this handle exists.
{%- endunless %}
```

###### Data

```json
{
  "settings": {
    "featured_potions_title": null
  }
}
```

###### Output

```html
No value for this setting has been selected.
No page with this handle exists.
```

***

### Whitespace control

Even if it doesn't output text, any line of Liquid outputs a line in your rendered content. By including hyphens in your Liquid tag, you can strip any whitespace that your Liquid generates when rendered.

If you want to remove whitespace on only one side of the Liquid tag, then you can include the hyphen on either the opening or closing tag.

###### Code

```liquid
{%- if collection.products.size > 0 -%}
The '{{ collection.title }}' collection contains the following types of products:

{% for type in collection.all_types -%}
  {% unless type == blank -%}
    - {{ type }}
  {%- endunless -%}
{%- endfor %}
{%- endif -%}
```

###### Data

```json
{
  "collection": {
    "all_types": [
      "Health",
      "Health & Beauty",
      "Invisibility",
      "Water"
    ],
    "products": [],
    "title": "Sale potions"
  }
}
```

###### Output

```html
The 'Sale potions' collection contains the following types of products:

- Health
- Health & Beauty
- Invisibility
- Water
```

***

---



<a id="tags-assign"></a>


## assign

Creates a new variable.

You can create variables of any [basic type](https://shopify.dev/docs/api/liquid/basics#types), [object](https://shopify.dev/docs/api/liquid/objects), or object property.

***

**Caution:** Predefined Liquid objects can be overridden by variables with the same name. To make sure that you can access all Liquid objects, make sure that your variable name doesn\&#39;t match a predefined object\&#39;s name.

***

### Syntax

```oobleckTag
{% assign variable_name = value %}
```

#### variable\_name

The name of the variable being created.

#### value

The value you want to assign to the variable.

###### Code

```liquid
{%- assign product_title = product.title | upcase -%}

{{ product_title }}
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



<a id="tags-break"></a>


## break

Stops a [`for` loop](https://shopify.dev/docs/api/liquid/tags/for) from iterating.

### Syntax

```oobleckTag
{% break %}
```

###### Code

```liquid
{% for i in (1..5) -%}
  {%- if i == 4 -%}
    {% break %}
  {%- else -%}
    {{ i }}
  {%- endif -%}
{%- endfor %}
```

###### Output

```html
1
2
3
```

---



<a id="tags-capture"></a>


## capture

Creates a new variable with a string value.

You can create complex strings with Liquid logic and variables.

***

**Caution:** Predefined Liquid objects can be overridden by variables with the same name. To make sure that you can access all Liquid objects, make sure that your variable name doesn\&#39;t match a predefined object\&#39;s name.

***

### Syntax

```oobleckTag
{% capture variable %}
  value
{% endcapture %}
```

#### variable

The name of the variable being created.

#### value

The value you want to assign to the variable.

###### Code

```liquid
{%- assign up_title = product.title | upcase -%}
{%- assign down_title = product.title | downcase -%}
{%- assign show_up_title = true -%}

{%- capture title -%}
  {% if show_up_title -%}
    Upcase title: {{ up_title }}
  {%- else -%}
    Downcase title: {{ down_title }}
  {%- endif %}
{%- endcapture %}

{{ title }}
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
Upcase title: HEALTH POTION
```

---



<a id="tags-case"></a>


## case

Renders a specific expression depending on the value of a specific variable.

### Syntax

```oobleckTag
{% case variable %}
  {% when first_value %}
    first_expression
  {% when second_value %}
    second_expression
  {% else %}
    third_expression
{% endcase %}
```

#### variable

The name of the variable you want to base your case statement on.

#### first\_value

A specific value to check for.

#### second\_value

A specific value to check for.

#### first\_expression

An expression to be rendered when the variable's value matches `first_value`.

#### second\_expression

An expression to be rendered when the variable's value matches `second_value`.

#### third\_expression

An expression to be rendered when the variable's value has no match.

###### Code

```liquid
{% case product.type %}
  {% when 'Health' %}
    This is a health potion.
  {% when 'Love' %}
    This is a love potion.
  {% else %}
    This is a potion.
{% endcase %}
```

###### Data

```json
{
  "product": {
    "type": null
  }
}
```

###### Output

```html
This is a health potion.
```

#### Multiple values

### Syntax

```oobleckTag
{% case variable %}
  {% when first_value or second_value or third_value %}
    first_expression
  {% when fourth_value, fifth_value, sixth_value %}
    second_expression
  {% else %}
    third_expression
{% endcase %}
```

A `when` tag can accept multiple values. When multiple values are provided, the expression is returned when the variable matches any of the values inside of the tag. Provide the values as a comma-separated list, or separate them using an `or` operator.

###### Code

```liquid
{% case product.type %}
  {% when 'Love' or 'Luck' %}
    This is a love or luck potion.
  {% when 'Strength','Health' %}
    This is a strength or health potion.
  {% else %}
    This is a potion.
{% endcase %}
```

###### Data

```json
{
  "product": {
    "type": null
  }
}
```

###### Output

```html
This is a strength or health potion.
```

---



<a id="tags-comment"></a>


## comment

Prevents an expression from being rendered or output.

Any text inside `comment` tags won't be output, and any Liquid code will be parsed, but not executed.

### Syntax

```oobleckTag
{% comment %}
  content
{% endcomment %}
```

#### content

The content of the comment.

#### Inline comments

### Syntax

```oobleckTag
{% # content %}
```

Inline comments prevent an expression inside of a tag `{% %}` from being rendered or output.

You can use inline comment tags to annotate your code, or to temporarily prevent logic in your code from executing.

You can create multi-line inline comments. However, each line in the tag must begin with a `#`, or a syntax error will occur.

###### Code

```liquid
{% # this is a comment %}

{% # for i in (1..3) -%}
  {{ i }}
{% # endfor %}

{%
  ###############################
  # This is a comment
  # across multiple lines
  ###############################
%}
```

#### Inline comments inside `liquid` tags

You can use inline comment tags inside [`liquid` tags](https://shopify.dev/docs/api/liquid/tags/liquid). The tag must be used for each line that you want to comment.

###### Code

```liquid
{% liquid
  # this is a comment
  assign topic = 'Learning about comments!'
  echo topic
%}
```

###### Output

```html
Learning about comments!
```

---



<a id="tags-conditional-else"></a>


## else

Allows you to specify a default expression to execute when no other condition is met.

You can use the `else` tag with the following tags:

* [`case`](https://shopify.dev/docs/api/liquid/tags/case)
* [`if`](https://shopify.dev/docs/api/liquid/tags/if)
* [`unless`](https://shopify.dev/docs/api/liquid/tags/unless)

### Syntax

```oobleckTag
{% else %}
  expression
```

#### expression

The expression to render if no other condition is met.

###### Code

```liquid
{% if product.available %}
  This product is available!
{% else %}
  This product is sold out!
{% endif %}
```

###### Data

```json
{
  "product": {
    "available": true
  }
}
```

###### Output

```html
This product is available!
```

---



<a id="tags-content-for"></a>


## content\_​for

Creates a designated area in your [theme](https://shopify.dev/themes/architecture) where blocks can be rendered.

The `content_for` tag requires a type parameter to differentiate between rendering a number of theme blocks (`'blocks'`) and a single static block (`'block'`).

### Syntax

```oobleckTag
{% content_for 'blocks' %}
{% content_for 'block', type: "slide", id: "slide-1" %}
```

#### blocks

### Syntax

```oobleckTag
{% content_for "blocks" %}
```

Creates a designated area that renders theme blocks as configured in the JSON template or section groups, allowing merchants to add, remove, and rearrange blocks using the theme editor. See [theme blocks](https://shopify.dev/docs/storefronts/themes/architecture/blocks/theme-blocks) for more information.

#### block

### Syntax

```oobleckTag
{% content_for "block", type: "button", id: "static-block-1", color: "red" %}
```

Renders a static theme block of the specified type with the provided ID. You can pass additional arbitrary parameters (such as `color`) that will be accessible within the static block using `{{ color }}`. See [static blocks](https://shopify.dev/docs/storefronts/themes/architecture/blocks/theme-blocks/static-blocks) to learn more.

---



<a id="tags-continue"></a>


## continue

Causes a [`for` loop](https://shopify.dev/docs/api/liquid/tags/for) to skip to the next iteration.

### Syntax

```oobleckTag
{% continue %}
```

###### Code

```liquid
{% for i in (1..5) -%}
  {%- if i == 4 -%}
    {% continue %}
  {%- else -%}
    {{ i }}
  {%- endif -%}
{%- endfor %}
```

###### Output

```html
1
2
3
5
```

---



<a id="tags-cycle"></a>


## cycle

Loops through a group of strings and outputs them one at a time for each iteration of a [`for` loop](https://shopify.dev/docs/api/liquid/tags/for).

The `cycle` tag must be used inside a `for` loop.

***

**Tip:** Use the \<code>cycle\</code> tag to output text in a predictable pattern. For example, to apply odd/even classes to rows in a table.

***

### Syntax

```oobleckTag
{% cycle string, string, ... %}
```

###### Code

```liquid
{% for i in (1..4) -%}
  {% cycle 'one', 'two', 'three' %}
{%- endfor %}
```

###### Output

```html
one
two
three
one
```

#### Create unique cycle groups

### Syntax

```oobleckTag
{% cycle string: string, string, ... %}
```

If you include multiple `cycle` tags with the same parameters, in the same template, then each set of tags is treated as the same group. This means that it's possible for a `cycle` tag to output any of the provided strings, instead of always starting at the first string. To account for this, you can specify a group name for each `cycle` tag.

###### Code

```liquid
<!-- Iteration 1 -->
{% for i in (1..4) -%}
  {% cycle 'one', 'two', 'three' %}
{%- endfor %}

<!-- Iteration 2 -->
{% for i in (1..4) -%}
  {% cycle 'one', 'two', 'three' %}
{%- endfor %}

<!-- Iteration 3 -->
{% for i in (1..4) -%}
  {% cycle 'group_1': 'one', 'two', 'three' %}
{%- endfor %}

<!-- Iteration 4 -->
{% for i in (1..4) -%}
  {% cycle 'group_2': 'one', 'two', 'three' %}
{%- endfor %}
```

###### Output

```html
<!-- Iteration 1 -->
one
two
three
one


<!-- Iteration 2 -->
two
three
one
two


<!-- Iteration 3 -->
one
two
three
one


<!-- Iteration 4 -->
one
two
three
one
```

---



<a id="tags-decrement"></a>


## decrement

Creates a new variable, with a default value of -1, that's decreased by 1 with each subsequent call.

***

**Caution:** Predefined Liquid objects can be overridden by variables with the same name. To make sure that you can access all Liquid objects, make sure that your variable name doesn\&#39;t match a predefined object\&#39;s name.

***

Variables that are declared with `decrement` are unique to the [layout](https://shopify.dev/themes/architecture/layouts), [template](https://shopify.dev/themes/architecture/templates), or [section](https://shopify.dev/themes/architecture/sections) file that they're created in. However, the variable is shared across [snippets](https://shopify.dev/themes/architecture/snippets) included in the file.

Similarly, variables that are created with `decrement` are independent from those created with [`assign`](https://shopify.dev/docs/api/liquid/tags/assign) and [`capture`](https://shopify.dev/docs/api/liquid/tags/capture). However, `decrement` and [`increment`](https://shopify.dev/docs/api/liquid/tags/increment) share variables.

### Syntax

```oobleckTag
{% decrement variable_name %}
```

#### variable\_name

The name of the variable being decremented.

###### Code

```liquid
{% decrement variable %}
{% decrement variable %}
{% decrement variable %}
```

###### Output

```html
-1
-2
-3
```

---



<a id="tags-doc"></a>


## doc

Documents template elements with annotations.

The `doc` tag allows developers to include documentation within Liquid templates. Any content inside `doc` tags is not rendered or outputted. Liquid code inside will be parsed but not executed. This facilitates tooling support for features like code completion, linting, and inline documentation.

For detailed documentation syntax and examples, see the [`LiquidDoc` reference](https://shopify.dev/docs/storefronts/themes/tools/liquid-doc).

### Syntax

```oobleckTag
{% doc %}
  Renders a message.


  @param {string} foo - A string value.
  @param {string} [bar] - An optional string value.


  @example
  {% render 'message', foo: 'Hello', bar: 'World' %}
{% enddoc %}
```

---



<a id="tags-echo"></a>


## echo

Outputs an expression.

Using the `echo` tag is the same as wrapping an expression in curly brackets (`{{` and `}}`). However, unlike the curly bracket method, you can use the `echo` tag inside [`liquid` tags](https://shopify.dev/docs/api/liquid/tags/liquid).

***

**Tip:** You can use \<a href="/docs/api/liquid/filters">filters\</a> on expressions inside \<code>echo\</code> tags.

***

### Syntax

```oobleckTag
{% liquid
  echo expression
%}
```

#### expression

The expression to be output.

###### Code

```liquid
{% echo product.title %}

{% liquid
  echo product.price | money
%}
```

###### Data

```json
{
  "product": {
    "price": "10.00",
    "title": "Health potion"
  }
}
```

###### Output

```html
Health potion

$10.00
```

---



<a id="tags-for"></a>


## for

Renders an expression for every item in an array.

You can do a maximum of 50 iterations with a `for` loop. If you need to iterate over more than 50 items, then use the [`paginate` tag](https://shopify.dev/docs/api/liquid/tags/paginate) to split the items over multiple pages.

***

**Tip:** Every \<code>for\</code> loop has an associated \<a href="/docs/api/liquid/objects/forloop">\<code>forloop\</code> object\</a> with information about the loop.

***

### Syntax

```oobleckTag
{% for variable in array %}
  expression
{% endfor %}
```

#### variable

The current item in the array.

#### array

The array to iterate over.

#### expression

The expression to render for each iteration.

###### Code

```liquid
{% for product in collection.products -%}
  {{ product.title }}
{%- endfor %}
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
Draught of Immortality
Glacier ice
Health potion
Invisibility potion
```

### for tag parameters

#### limit

### Syntax

```oobleckTag
{% for variable in array limit: number %}
  expression
{% endfor %}
```

You can limit the number of iterations using the `limit` parameter.

***

**Tip:** Limit the amount of data fetched for arrays that can be paginated with the \<code>paginate\</code> tag instead of using the \<code>limit\</code> parameter. Learn more about \<a href="/docs/api/liquid/tags/paginate#paginate-limit-data-fetching">limiting data fetching\</a> for improved server-side performance.

***

###### Code

```liquid
{% for product in collection.products limit: 2 -%}
  {{ product.title }}
{%- endfor %}
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
Draught of Immortality
Glacier ice
```

#### offset

### Syntax

```oobleckTag
{% for variable in array offset: number %}
  expression
{% endfor %}
```

You can specify a 1-based index to start iterating at using the `offset` parameter.

###### Code

```liquid
{% for product in collection.products offset: 2 -%}
  {{ product.title }}
{%- endfor %}
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
Health potion
Invisibility potion
```

#### range

### Syntax

```oobleckTag
{% for variable in (number..number) %}
  expression
{% endfor %}
```

Instead of iterating over specific items in an array, you can specify a numeric range to iterate over.

***

**Note:** You can define the range using both literal and variable values.

***

###### Code

```liquid
{% for i in (1..3) -%}
  {{ i }}
{%- endfor %}

{%- assign lower_limit = 2 -%}
{%- assign upper_limit = 4 -%}

{% for i in (lower_limit..upper_limit) -%}
  {{ i }}
{%- endfor %}
```

###### Output

```html
1
2
3

2
3
4
```

#### reversed

### Syntax

```oobleckTag
{% for variable in array reversed %}
  expression
{% endfor %}
```

You can iterate in reverse order using the `reversed` parameter.

###### Code

```liquid
{% for product in collection.products reversed -%}
  {{ product.title }}
{%- endfor %}
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
Invisibility potion
Health potion
Glacier ice
Draught of Immortality
```

## forloop**object**

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



<a id="tags-form"></a>


## form

Generates an HTML `<form>` tag, including any required `<input>` tags to submit the form to a specific endpoint.

Because there are many different form types available in Shopify themes, the `form` tag requires a type. Depending on the form type, an additional parameter might be required. You can specify the following form types:

* [`activate_customer_password`](https://shopify.dev/docs/api/liquid/tags/form#form-activate_customer_password)
* [`cart`](https://shopify.dev/docs/api/liquid/tags/form#form-cart)
* [`contact`](https://shopify.dev/docs/api/liquid/tags/form#form-contact)
* [`create_customer`](https://shopify.dev/docs/api/liquid/tags/form#form-create_customer)
* [`currency`](https://shopify.dev/docs/api/liquid/tags/form#form-currency)
* [`customer`](https://shopify.dev/docs/api/liquid/tags/form#form-customer)
* [`customer_address`](https://shopify.dev/docs/api/liquid/tags/form#form-customer_address)
* [`customer_login`](https://shopify.dev/docs/api/liquid/tags/form#form-customer_login)
* [`guest_login`](https://shopify.dev/docs/api/liquid/tags/form#form-guest_login)
* [`localization`](https://shopify.dev/docs/api/liquid/tags/form#form-localization)
* [`new_comment`](https://shopify.dev/docs/api/liquid/tags/form#form-new_comment)
* [`product`](https://shopify.dev/docs/api/liquid/tags/form#form-product)
* [`recover_customer_password`](https://shopify.dev/docs/api/liquid/tags/form#form-recover_customer_password)
* [`reset_customer_password`](https://shopify.dev/docs/api/liquid/tags/form#form-reset_customer_password)
* [`storefront_password`](https://shopify.dev/docs/api/liquid/tags/form#form-storefront_password)

### Syntax

```oobleckTag
{% form 'form_type' %}
  content
{% endform %}
```

#### form\_type

The name of the desired form type

#### content

The form contents

#### activate\_customer\_password

### Syntax

```oobleckTag
{% form 'activate_customer_password', article %}
  form_content
{% endform %}
```

Generates a form for activating a customer account. To learn more about using this form, and its contents, refer to the [`customers/activate_account` template](https://shopify.dev/themes/architecture/templates/customers-activate-account#content).

###### Code

```liquid
{% form 'activate_customer_password' %}
  <!-- form content -->
{% endform %}
```

###### Output

```html
<form method="post" action="/account/activate" accept-charset="UTF-8"><input type="hidden" name="form_type" value="activate_customer_password" /><input type="hidden" name="utf8" value="✓" />
  <!-- form content -->
</form>
```

#### cart

### Syntax

```oobleckTag
{% form 'cart', cart %}
  form_content
{% endform %}
```

Generates a form for creating a checkout based on the items currently in the cart. The `cart` form requires a [`cart` object](https://shopify.dev/docs/api/liquid/objects/cart) as a parameter. To learn more about using the cart form in your theme, refer to the [`cart` template](https://shopify.dev/themes/architecture/templates/cart#proceed-to-checkout).

###### Code

```liquid
{% form 'cart', cart %}
  <!-- form content -->
{% endform %}
```

###### Output

```html
<form method="post" action="/cart" id="cart_form" accept-charset="UTF-8" class="shopify-cart-form" enctype="multipart/form-data"><input type="hidden" name="form_type" value="cart" /><input type="hidden" name="utf8" value="✓" />
  <!-- form content -->
</form>
```

#### contact

### Syntax

```oobleckTag
{% form 'contact' %}
  form_content
{% endform %}
```

Generates a form for submitting an email to the merchant. To learn more about using this form in your theme, refer to [Add a contact form to your theme](https://shopify.dev/themes/customer-engagement/add-contact-form).

***

**Tip:** To learn more about the merchant experience of receiving submissions, refer to \<a href="https://help.shopify.com/manual/online-store/themes/customizing-themes/add-contact-page#view-contact-form-submissions">the Shopify Help Center\</a>.

***

###### Code

```liquid
{% form 'contact' %}
  <!-- form content -->
{% endform %}
```

###### Output

```html
<form method="post" action="/contact#contact_form" id="contact_form" accept-charset="UTF-8" class="contact-form"><input type="hidden" name="form_type" value="contact" /><input type="hidden" name="utf8" value="✓" />
  <!-- form content -->
</form>
```

#### create\_customer

### Syntax

```oobleckTag
{% form 'create_customer' %}
  form_content
{% endform %}
```

Generates a form for creating a new customer account. To learn more about using this form, and its contents, refer to the [`customers/register` template](https://shopify.dev/themes/architecture/templates/customers-register#content).

###### Code

```liquid
{% form 'create_customer' %}
  <!-- form content -->
{% endform %}
```

###### Output

```html
<form method="post" action="/account" id="create_customer" accept-charset="UTF-8" data-login-with-shop-sign-up="true"><input type="hidden" name="form_type" value="create_customer" /><input type="hidden" name="utf8" value="✓" />
  <!-- form content -->
</form>
```

#### currency

### Syntax

```oobleckTag
{% form 'currency' %}
  form_content
{% endform %}
```

***

**Deprecated:** The \<code>currency\</code> form is deprecated and has been replaced by the \<a href="/docs/api/liquid/tags/form#form-localization">\<code>localization\</code> form\</a>.

***

Generates a form for customers to select their preferred currency.

***

**Tip:** Use the \<a href="/docs/api/liquid/filters/currency\_selector">\<code>\<span class="PreventFireFoxApplyingGapToWBR">currency\<wbr/>\_selector\</span>\</code> filter\</a> to include a currency selector inside the form.

***

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

#### customer

### Syntax

```oobleckTag
{% form 'customer' %}
  form_content
{% endform %}
```

Generates a form for creating a new customer without registering a new account. This form is useful for collecting customer information when you don't want customers to log in to your store, such as building a list of emails from a newsletter signup.

***

**Tip:** To generate a form that registers a customer account, use the \<a href="/docs/api/liquid/tags/form#form-create\_customer">\<code>\<span class="PreventFireFoxApplyingGapToWBR">create\<wbr/>\_customer\</span>\</code> form\</a>.

***

To learn more about using this form, and its contents, refer to [Email consent](https://shopify.dev/themes/customer-engagement/email-consent#newsletter-sign-up-form).

###### Code

```liquid
{% form 'customer' %}
  <!-- form content -->
{% endform %}
```

###### Output

```html
<form method="post" action="/contact#contact_form" id="contact_form" accept-charset="UTF-8" class="contact-form"><input type="hidden" name="form_type" value="customer" /><input type="hidden" name="utf8" value="✓" />
  <!-- form content -->
</form>
```

#### customer\_address

### Syntax

```oobleckTag
{% form 'customer_address', address_type %}
  form_content
{% endform %}
```

Generates a form for creating a new address on a customer account, or editing an existing one. The `customer_address` form requires a specific parameter, depending on whether a new address is being created or an existing one is being edited:

| Parameter value | Use-case |
| - | - |
| `customer.new_address` | When a new address is being created. |
| `address` | When an existing address is being edited. |

To learn more about using this form, and its contents, refer to the [`customers/addresses` template](https://shopify.dev/themes/architecture/templates/customers-addresses#content).

###### Code

```liquid
{% form 'customer_address', customer.new_address %}
  <!-- form content -->
{% endform %}
```

###### Data

```json
{
  "customer": {
    "new_address": {}
  }
}
```

###### Output

```html
<form method="post" action="/account/addresses" id="address_form_new" accept-charset="UTF-8"><input type="hidden" name="form_type" value="customer_address" /><input type="hidden" name="utf8" value="✓" />
  <!-- form content -->
</form>
```

#### customer\_login

### Syntax

```oobleckTag
{% form 'customer_login' %}
  form_content
{% endform %}
```

Generates a form for logging into a customer account. To learn more about using this form, and its contents, refer to the [`customers/login` template](https://shopify.dev/themes/architecture/templates/customers-login#the-customer-login-form).

###### Code

```liquid
{% form 'customer_login' %}
  <!-- form content -->
{% endform %}
```

###### Output

```html
<form method="post" action="/account/login" id="customer_login" accept-charset="UTF-8" data-login-with-shop-sign-in="true"><input type="hidden" name="form_type" value="customer_login" /><input type="hidden" name="utf8" value="✓" />
  <!-- form content -->
</form>
```

#### guest\_login

### Syntax

```oobleckTag
{% form 'guest_login' %}
  form_content
{% endform %}
```

Generates a form, for use in the [`customers/login` template](https://shopify.dev/themes/architecture/templates/customers-login), that directs customers back to their checkout session as a guest instead of logging in to an account. To learn more about using this form, and its contents, refer to [Offer guest checkout](https://shopify.dev/themes/architecture/templates/customers-login#offer-guest-checkout).

###### Code

```liquid
{% form 'guest_login' %}
  <!-- form content -->
{% endform %}
```

###### Output

```html
<form method="post" action="/account/login" id="customer_login_guest" accept-charset="UTF-8"><input type="hidden" name="form_type" value="guest_login" /><input type="hidden" name="utf8" value="✓" />
  <!-- form content -->
<input type="hidden" name="guest" value="true" /></form>
```

#### localization

### Syntax

```oobleckTag
{% form 'localization' %}
  form_content
{% endform %}
```

Generates a form for customers to select their preferred country so that they're shown the appropriate language and currency. The `localization` form can contain one of two selectors:

* A country selector
* A language selector

***

**Note:** The \<code>localization\</code> form replaces the deprecated \<a href="/docs/api/liquid/tags/form#form-currency">\<code>currency\</code> form\</a>.

***

To learn more about using this form, and its contents, refer to [Support multiple currencies and languages](https://shopify.dev/themes/internationalization/multiple-currencies-languages).

###### Code

```liquid
{% form 'localization' %}
  <!-- form content -->
{% endform %}
```

###### Output

```html
<form method="post" action="/localization" id="localization_form" accept-charset="UTF-8" class="shopify-localization-form" enctype="multipart/form-data"><input type="hidden" name="form_type" value="localization" /><input type="hidden" name="utf8" value="✓" /><input type="hidden" name="_method" value="put" /><input type="hidden" name="return_to" value="/services/liquid_rendering/resource" />
  <!-- form content -->
</form>
```

#### new\_comment

### Syntax

```oobleckTag
{% form 'new_comment', article %}
  form_content
{% endform %}
```

Generates a form for creating a new comment on an article. The `new_comment` form requires an [`article` object](https://shopify.dev/docs/api/liquid/objects/article) as a parameter. To learn more about using this form, and its contents, refer to the [`article` template](https://shopify.dev/themes/architecture/templates/article#the-comment-form).

###### Code

```liquid
{% form 'new_comment', article %}
  <!-- form content -->
{% endform %}
```

###### Output

```html
<form method="post" action="/blogs/potion-notions/how-to-tell-if-you-have-run-out-of-invisibility-potion/comments#comment_form" id="comment_form" accept-charset="UTF-8" class="comment-form"><input type="hidden" name="form_type" value="new_comment" /><input type="hidden" name="utf8" value="✓" />
  <!-- form content -->
</form>
```

#### product

### Syntax

```oobleckTag
{% form 'product', product %}
  form_content
{% endform %}
```

Generates a form for adding a product variant to the cart. The `product` form requires a [`product` object](https://shopify.dev/docs/api/liquid/objects/product) as a parameter. To learn more about using this form, and its contents, refer to the [`product` template](https://shopify.dev/themes/architecture/templates/product#the-product-form).

###### Code

```liquid
{% form 'product', product %}
  <!-- form content -->
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
  <!-- form content -->
<input type="hidden" name="product-id" value="6786188247105" /></form>
```

#### recover\_customer\_password

### Syntax

```oobleckTag
{% form 'recover_customer_password' %}
  form_content
{% endform %}
```

Generates a form, for use in the [`customers/login` template](https://shopify.dev/themes/architecture/templates/customers-login), for a customer to recover a lost or forgotten password. To learn more about using this form, and its contents, refer to [Provide a "Forgot your password" option](https://shopify.dev/themes/architecture/templates/customers-login#provide-a-forgot-your-password-option).

###### Code

```liquid
{% form 'recover_customer_password' %}
  <!-- form content -->
{% endform %}
```

###### Output

```html
<form method="post" action="/account/recover" accept-charset="UTF-8"><input type="hidden" name="form_type" value="recover_customer_password" /><input type="hidden" name="utf8" value="✓" />
  <!-- form content -->
</form>
```

#### reset\_customer\_password

### Syntax

```oobleckTag
{% form 'reset_customer_password' %}
  form_content
{% endform %}
```

Generates a form for a customer to reset their password. To learn more about using this form, and its contents, refer to the [`customers/reset_password` template](https://shopify.dev/themes/architecture/templates/customers-reset-password#content).

###### Code

```liquid
{% form 'reset_customer_password' %}
  <!-- form content -->
{% endform %}
```

###### Output

```html
<form method="post" action="/account/reset" accept-charset="UTF-8"><input type="hidden" name="form_type" value="reset_customer_password" /><input type="hidden" name="utf8" value="✓" />
  <!-- form content -->
</form>
```

#### storefront\_password

### Syntax

```oobleckTag
{% form 'storefront_password' %}
  form_content
{% endform %}
```

Generates a form for entering a password protected storefront. To learn more about using this form, and its contents, refer to the [`password` template](https://shopify.dev/themes/architecture/templates/password#the-password-form).

###### Code

```liquid
{% form 'storefront_password' %}
  <!-- form content -->
{% endform %}
```

###### Output

```html
<form method="post" action="/password" id="login_form" accept-charset="UTF-8" class="storefront-password-form"><input type="hidden" name="form_type" value="storefront_password" /><input type="hidden" name="utf8" value="✓" />
  <!-- form content -->
</form>
```

### form tag parameters

#### return\_to

### Syntax

```oobleckTag
{% form 'form_type', return_to: string %}
  content
{% endform %}
```

By default, each form type redirects customers to a specific page after the form submits. For example, the `product` form redirects to the cart page.

The `return_to` parameter allows you to specify a URL to redirect to. This can be done with the following values:

| Value | Description |
| - | - |
| `back` | Redirect back to the same page that the customer was on before submitting the form. |
| A relative path | A specific URL path. For example `/collections/all`. |
| A [`routes` attribute](https://shopify.dev/docs/api/liquid/objects/routes) | For example, `routes.root_url` |

###### Code

```liquid
{% form 'customer_login', return_to: routes.root_url %}
  <!-- form content -->
{% endform %}
```

###### Data

```json
{
  "routes": {
    "root_url": "/"
  }
}
```

###### Output

```html
<form method="post" action="/account/login" id="customer_login" accept-charset="UTF-8" data-login-with-shop-sign-in="true"><input type="hidden" name="form_type" value="customer_login" /><input type="hidden" name="utf8" value="✓" /><input type="hidden" name="return_to" value="/" />
  <!-- form content -->
</form>
```

#### HTML attributes

### Syntax

```oobleckTag
{% form 'form_type', attribute: string %}
  content
{% endform %}
```

You can specify [HTML attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#attributes) by adding a parameter that matches the attribute name with `data-` prepended, and the desired value.

###### Code

```liquid
{% form "product", product, id: 'custom-id', class: 'custom-class', data-example: '100' %}
  <!-- form content -->
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
<form method="post" action="/cart/add" id="custom-id" accept-charset="UTF-8" class="custom-class" enctype="multipart/form-data" data-example="100"><input type="hidden" name="form_type" value="product" /><input type="hidden" name="utf8" value="✓" />
  <!-- form content -->
<input type="hidden" name="product-id" value="6786188247105" /></form>
```

---



<a id="tags-if"></a>


## if

Renders an expression if a specific condition is `true`.

### Syntax

```oobleckTag
{% if condition %}
  expression
{% endif %}
```

#### condition

The condition to evaluate.

#### expression

The expression to render if the condition is met.

###### Code

```liquid
{% if product.compare_at_price > product.price %}
  This product is on sale!
{% endif %}
```

###### Data

```json
{
  "product": {
    "compare_at_price": "10.00",
    "price": "0.00"
  }
}
```

###### Output

```html
This product is on sale!
```

#### elsif

You can use the `elsif` tag to check for multiple conditions.

###### Code

```liquid
{% if product.type == 'Love' %}
  This is a love potion!
{% elsif product.type == 'Health' %}
  This is a health potion!
{% endif %}
```

###### Data

```json
{
  "product": {
    "type": null
  }
}
```

###### Output

```html
This is a health potion!
```

---



<a id="tags-include"></a>


## include

Renders a [snippet](https://shopify.dev/themes/architecture/snippets).

Inside the snippet, you can access and alter variables that are [created](https://shopify.dev/docs/api/liquid/tags/variable-tags) outside of the snippet.

**Deprecated:**

Deprecated because the way that variables are handled reduces performance and makes code harder to both read and maintain.

The `include` tag has been replaced by [`render`](https://shopify.dev/docs/api/liquid/tags/render).

### Syntax

```oobleckTag
{% include 'filename' %}
```

#### filename

The name of the snippet to render, without the `.liquid` extension.

---



<a id="tags-increment"></a>


## increment

Creates a new variable, with a default value of 0, that's increased by 1 with each subsequent call.

***

**Caution:** Predefined Liquid objects can be overridden by variables with the same name. To make sure that you can access all Liquid objects, make sure that your variable name doesn\&#39;t match a predefined object\&#39;s name.

***

Variables that are declared with `increment` are unique to the [layout](https://shopify.dev/themes/architecture/layouts), [template](https://shopify.dev/themes/architecture/templates), or [section](https://shopify.dev/themes/architecture/sections) file that they're created in. However, the variable is shared across [snippets](https://shopify.dev/themes/architecture/snippets) included in the file.

Similarly, variables that are created with `increment` are independent from those created with [`assign`](https://shopify.dev/docs/api/liquid/tags/assign) and [`capture`](https://shopify.dev/docs/api/liquid/tags/capture). However, `increment` and [`decrement`](https://shopify.dev/docs/api/liquid/tags/decrement) share variables.

### Syntax

```oobleckTag
{% increment variable_name %}
```

#### variable\_name

The name of the variable being incremented.

###### Code

```liquid
{% increment variable %}
{% increment variable %}
{% increment variable %}
```

###### Output

```html
0
1
2
```

---



<a id="tags-iteration-else"></a>


## else

Allows you to specify a default expression to execute when a [`for` loop](https://shopify.dev/docs/api/liquid/tags/for) has zero length.

### Syntax

```oobleckTag
{% for variable in array %}
  first_expression
{% else %}
  second_expression
{% endfor %}
```

#### variable

The current item in the array.

#### array

The array to iterate over.

#### first\_expression

The expression to render for each iteration.

#### second\_expression

The expression to render if the loop has zero length.

###### Code

```liquid
{% for product in collection.products %}
  {{ product.title }}<br>
{% else %}
  There are no products in this collection.
{% endfor %}
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
There are no products in this collection.
```

---



<a id="tags-javascript"></a>


## javascript

JavaScript code included in [section](https://shopify.dev/storefronts/themes/architecture/sections), [block](https://shopify.dev/storefronts/themes/architecture/blocks) and [snippet](https://shopify.dev/storefronts/themes/architecture/snippets) files.

Each section, block or snippet can have only one `{% javascript %}` tag.

To learn more about how JavaScript that's defined between the `javascript` tags is loaded and run, refer to the documentation for [javascript tags](https://shopify.dev/storefronts/themes/best-practices/javascript-and-stylesheet-tags#javascript).

***

**Caution:** Liquid isn\&#39;t rendered inside of \<code>{% javascript %}\</code> tags. Including Liquid code can cause syntax errors.

***

### Syntax

```oobleckTag
{% javascript %}
  javascript_code
{% endjavascript %}
```

#### javascript\_code

The JavaScript code for the section, block or snippet.

---



<a id="tags-layout"></a>


## layout

Specify which [layout](https://shopify.dev/themes/architecture/layouts) to use.

### Syntax

```oobleckTag
{% layout name %}
```

#### name

The name of the layout file you want to use, wrapped in quotes, or `none` for no layout.

By default, the `theme.liquid` layout is used. The `layout` tag allows you to specify an alternate layout, or use no layout.

```liquid
{% layout 'full-width' %}
{% layout none %}
```

```liquid
{% layout 'full-width' %}
{% layout none %}
```

---



<a id="tags-liquid"></a>


## liquid

Allows you to have a block of Liquid without delimeters on each tag.

Because the tags don't have delimeters, each tag needs to be on its own line.

***

**Tip:** Use the \<a href="/docs/api/liquid/tags/echo">\<code>echo\</code> tag\</a> to output an expression inside \<code>liquid\</code> tags.

***

### Syntax

```oobleckTag
{% liquid
  expression
%}
```

#### expression

The expression to be rendered inside the `liquid` tag.

###### Code

```liquid
{% liquid
  # Show a message that's customized to the product type

  assign product_type = product.type | downcase
  assign message = ''

  case product_type
    when 'health'
      assign message = 'This is a health potion!'
    when 'love'
      assign message = 'This is a love potion!'
    else
      assign message = 'This is a potion!'
  endcase

  echo message
%}
```

###### Data

```json
{
  "product": {
    "type": null
  }
}
```

###### Output

```html
This is a health potion!
```

---



<a id="tags-paginate"></a>


## paginate

Splits an array's items across multiple pages.

Because [`for` loops](https://shopify.dev/docs/api/liquid/tags/for) are limited to 50 iterations per page, you need to use the `paginate` tag to iterate over an array that has more than 50 items. The following arrays can be paginated:

* [`article.comments`](https://shopify.dev/docs/api/liquid/objects/article#article-comments)
* [`blog.articles`](https://shopify.dev/docs/api/liquid/objects/blog#blog-articles)
* [`collections`](https://shopify.dev/docs/api/liquid/objects/collections)
* [`collection.products`](https://shopify.dev/docs/api/liquid/objects/collection#collection-products)
* [`customer.addresses`](https://shopify.dev/docs/api/liquid/objects/customer#customer-addresses)
* [`customer.orders`](https://shopify.dev/docs/api/liquid/objects/customer#customer-orders)
* [`metaobject_definition.values`](https://shopify.dev/docs/api/liquid/objects/metaobject_definition#metaobject_definition-values)
* [`pages`](https://shopify.dev/docs/api/liquid/objects/pages)
* [`product.variants`](https://shopify.dev/docs/api/liquid/objects/product#variants)
* [`search.results`](https://shopify.dev/docs/api/liquid/objects/search#search-results)
* [`article_list` settings](https://shopify.dev/themes/architecture/settings/input-settings#article_list)
* [`collection_list` settings](https://shopify.dev/themes/architecture/settings/input-settings#collection_list)
* [`product_list` settings](https://shopify.dev/themes/architecture/settings/input-settings#product_list)

Within the `paginate` tag, you have access to the [`paginate` object](https://shopify.dev/docs/api/liquid/objects/paginate). You can use this object, or the [`default_pagination` filter](https://shopify.dev/docs/api/liquid/filters/default_pagination), to build page navigation.

***

**Note:** The \<code>paginate\</code> tag allows the user to paginate to the 25,000th item in the array and no further. To reach items further in the array the array should be filtered further before paginating. See \<a href="/themes/best-practices/performance/platform#pagination-limits">Pagination Limits\</a> for more information.

***

### Syntax

```oobleckTag
{% paginate array by page_size %}
  {% for item in array %}
    forloop_content
  {% endfor %}
{% endpaginate %}
```

#### array

The array to be looped over.

#### page\_size

The number of array items to include per page, between 1 and 250.

#### item

An item in the array being looped.

#### forloop\_content

Content for each loop iteration.

###### Code

```liquid
{% paginate collection.products by 5 %}
  {% for product in collection.products -%}
    {{ product.title }}
  {%- endfor %}

  {{- paginate | default_pagination }}
{% endpaginate %}
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
      }
    ],
    "products_count": 19
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

<span class="page current">1</span> <span class="page"><a href="/services/liquid_rendering/resource?page=2" title="">2</a></span> <span class="page"><a href="/services/liquid_rendering/resource?page=3" title="">3</a></span> <span class="page"><a href="/services/liquid_rendering/resource?page=4" title="">4</a></span> <span class="next"><a href="/services/liquid_rendering/resource?page=2" title="">Next &raquo;</a></span>
```

#### Paginating setting arrays

To allow the pagination of `article_list`, `collection_list` and `product_list` settings to operate independently from other paginated lists on a page, these lists use a pagination query parameter with a unique key. The key is automatically assigned by the `paginate` tag, and you don't need to reference the key in your code. However, you can access the key using [`paginate.page_param`](https://shopify.dev/docs/api/liquid/objects/paginate#paginate-page_param).

***

**Tip:** To paginate two arrays independently without refreshing the entire page, you can use the \<a href="/docs/api/ajax/section-rendering">Section Rendering API\</a>.

***

#### Limit data fetching

The [`limit` parameter](https://shopify.dev/docs/api/liquid/tags/for#for-limit) of the `for` tag controls the number of iterations, but not the amount of information fetched. Using the `paginate` tag with a matching `page_size` can reduce the data queried, leading to faster server response times.

For example, referencing `collection.products` will fetch up to 50 products by default, regardless of the forloop's `limit` parameter. Use `paginate` and set a `page_size` to limit the amount of data fetched, and opt not to display any pagination controls.

More data than requested in a specific section may be returned. Because of this, make sure to include both `paginate` and `limit` when using this technique.

###### Code

```liquid
{% paginate collection.products by 4 %}
  {% for product in collection.products limit: 4 -%}
    {{ product.title }}
  {%- endfor %}
{% endpaginate -%}

<!-- Less performant method -->
{% for product in collection.products limit: 4 -%}
  {{ product.title }}
{%- endfor -%}
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
      }
    ],
    "products_count": 19
  }
}
```

###### Output

```html
Blue Mountain Flower
Charcoal
Crocodile tears
Dandelion milk

<!-- Less performant method -->
Blue Mountain Flower
Charcoal
Crocodile tears
Dandelion milk
```

### paginate tag parameters

#### window\_size

### Syntax

```oobleckTag
{% paginate collection.products by 3, window_size: 1 %}
```

Set the window size of the pagination. The window size is the number of pages that should be visible in the pagination navigation.

###### Code

```liquid
{% paginate collection.products by 3, window_size: 1 %}
  {% for product in collection.products -%}
    {{ product.title }}
  {%- endfor %}

  {{- paginate | default_pagination }}
{% endpaginate %}
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
      }
    ],
    "products_count": 19
  }
}
```

###### Output

```html
Blue Mountain Flower
Charcoal
Crocodile tears

<span class="page current">1</span> <span class="deco">&hellip;</span> <span class="page"><a href="/services/liquid_rendering/resource?page=7" title="">7</a></span> <span class="next"><a href="/services/liquid_rendering/resource?page=2" title="">Next &raquo;</a></span>
```

---



<a id="tags-raw"></a>


## raw

Outputs any Liquid code as text instead of rendering it.

### Syntax

```oobleckTag
{% raw %}
  expression
{% endraw %}
```

#### expression

The expression to be output without being rendered.

###### Code

```liquid
{% raw %}
{{ 2 | plus: 2 }} equals 4.
{% endraw %}
```

###### Output

```html
{{ 2 | plus: 2 }} equals 4.
```

---



<a id="tags-render"></a>


## render

Renders a [snippet](https://shopify.dev/themes/architecture/snippets) or [app block](https://shopify.dev/themes/architecture/sections/section-schema#render-app-blocks).

Inside snippets and app blocks, you can't directly access variables that are [created](https://shopify.dev/docs/api/liquid/tags/variable-tags) outside of the snippet or app block. However, you can [specify variables as parameters](https://shopify.dev/docs/api/liquid/tags/render#render-passing-variables-to-a-snippet) to pass outside variables to snippets.

While you can't directly access created variables, you can access global objects, as well as any objects that are directly accessible outside the snippet or app block. For example, a snippet or app block inside the [product template](https://shopify.dev/themes/architecture/templates/product) can access the [`product` object](https://shopify.dev/docs/api/liquid/objects/product), and a snippet or app block inside a [section](https://shopify.dev/themes/architecture/sections) can access the [`section` object](https://shopify.dev/docs/api/liquid/objects/section).

Outside a snippet or app block, you can't access variables created inside the snippet or app block.

***

**Note:** When you render a snippet using the \<code>render\</code> tag, you can\&#39;t use the \<a href="/docs/api/liquid/tags/include">\<code>include\</code> tag\</a> inside the snippet.

***

### Syntax

```oobleckTag
{% render 'filename' %}
```

#### filename

The name of the snippet to render, without the `.liquid` extension.

### render tag parameters

#### for

### Syntax

```oobleckTag
{% render 'filename' for array as item %}
```

You can render a snippet for every item in an array using the `for` parameter. You can also supply an optional `as` parameter to be able to reference the current item in the iteration inside the snippet. Additionally, you can access a [`forloop` object](https://shopify.dev/docs/api/liquid/objects/forloop) for the loop inside the snippet.

#### Passing variables to a snippet

### Syntax

```oobleckTag
{% render 'filename', variable: value %}
```

Variables that have been [created](https://shopify.dev/docs/api/liquid/tags/variable-tags) outside of a snippet can be passed to a snippet as parameters on the `render` tag.

***

**Note:** Any changes that are made to a passed variable apply only within the snippet.

***

#### with

### Syntax

```oobleckTag
{% render 'filename' with object as name %}
```

You can pass a single object to a snippet using the `with` parameter. You can also supply an optional `as` parameter to specify a custom name to reference the object inside the snippet. If you don't use the `as` parameter to specify a custom name, then you can reference the object using the snippet filename.

---



<a id="tags-section"></a>


## section

Renders a [section](https://shopify.dev/themes/architecture/sections).

Rendering a section with the `section` tag renders a section statically. To learn more about sections and how to use them in your theme, refer to [Render a section](https://shopify.dev/themes/architecture/sections#render-a-section).

### Syntax

```oobleckTag
{% section 'name' %}
```

#### name

The name of the section file you want to render.

###### Code

```liquid
{% section 'header' %}
```

###### Data

```json
{
  "cart": {
    "item_count": 2
  },
  "request": {
    "origin": "https://polinas-potent-potions.myshopify.com",
    "page_type": "index"
  },
  "routes": {
    "account_url": "/account",
    "cart_url": "/cart",
    "root_url": "/",
    "search_url": "/search"
  },
  "settings": {
    "accent_icons": "text",
    "cart_type": "notification",
    "inputs_shadow_vertical_offset": 4,
    "predictive_search_enabled": true,
    "social_facebook_link": "",
    "social_instagram_link": "",
    "social_pinterest_link": "",
    "social_snapchat_link": "",
    "social_tiktok_link": "",
    "social_tumblr_link": "",
    "social_twitter_link": "",
    "social_vimeo_link": "",
    "social_youtube_link": ""
  },
  "shop": {
    "customer_accounts_enabled": true,
    "name": "Polina&#39;s Potent Potions"
  }
}
```

###### Output

```html
<div id="shopify-section-header" class="shopify-section section-header"><link rel="stylesheet" href="//polinas-potent-potions.myshopify.com/cdn/shop/t/4/assets/component-list-menu.css?v=151968516119678728991663872413" media="print" onload="this.media='all'">
<link rel="stylesheet" href="//polinas-potent-potions.myshopify.com/cdn/shop/t/4/assets/component-search.css?v=96455689198851321781663872411" media="print" onload="this.media='all'">
<link rel="stylesheet" href="//polinas-potent-potions.myshopify.com/cdn/shop/t/4/assets/component-menu-drawer.css?v=182311192829367774911663872416" media="print" onload="this.media='all'">
<link rel="stylesheet" href="//polinas-potent-potions.myshopify.com/cdn/shop/t/4/assets/component-cart-notification.css?v=183358051719344305851663872409" media="print" onload="this.media='all'">
<link rel="stylesheet" href="//polinas-potent-potions.myshopify.com/cdn/shop/t/4/assets/component-cart-items.css?v=23917223812499722491663872408" media="print" onload="this.media='all'"><link rel="stylesheet" href="//polinas-potent-potions.myshopify.com/cdn/shop/t/4/assets/component-price.css?v=65402837579211014041663872409" media="print" onload="this.media='all'">
  <link rel="stylesheet" href="//polinas-potent-potions.myshopify.com/cdn/shop/t/4/assets/component-loading-overlay.css?v=167310470843593579841663872415" media="print" onload="this.media='all'"><noscript><link href="//polinas-potent-potions.myshopify.com/cdn/shop/t/4/assets/component-list-menu.css?v=151968516119678728991663872413" rel="stylesheet" type="text/css" media="all" /></noscript>
<noscript><link href="//polinas-potent-potions.myshopify.com/cdn/shop/t/4/assets/component-search.css?v=96455689198851321781663872411" rel="stylesheet" type="text/css" media="all" /></noscript>
<noscript><link href="//polinas-potent-potions.myshopify.com/cdn/shop/t/4/assets/component-menu-drawer.css?v=182311192829367774911663872416" rel="stylesheet" type="text/css" media="all" /></noscript>
<noscript><link href="//polinas-potent-potions.myshopify.com/cdn/shop/t/4/assets/component-cart-notification.css?v=183358051719344305851663872409" rel="stylesheet" type="text/css" media="all" /></noscript>
<noscript><link href="//polinas-potent-potions.myshopify.com/cdn/shop/t/4/assets/component-cart-items.css?v=23917223812499722491663872408" rel="stylesheet" type="text/css" media="all" /></noscript>

<style>
  header-drawer {
    justify-self: start;
    margin-left: -1.2rem;
  }

  .header__heading-logo {
    max-width: 90px;
  }

  @media screen and (min-width: 990px) {
    header-drawer {
      display: none;
    }
  }

  .menu-drawer-container {
    display: flex;
  }

  .list-menu {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .list-menu--inline {
    display: inline-flex;
    flex-wrap: wrap;
  }

  summary.list-menu__item {
    padding-right: 2.7rem;
  }

  .list-menu__item {
    display: flex;
    align-items: center;
    line-height: calc(1 + 0.3 / var(--font-body-scale));
  }

  .list-menu__item--link {
    text-decoration: none;
    padding-bottom: 1rem;
    padding-top: 1rem;
    line-height: calc(1 + 0.8 / var(--font-body-scale));
  }

  @media screen and (min-width: 750px) {
    .list-menu__item--link {
      padding-bottom: 0.5rem;
      padding-top: 0.5rem;
    }
  }
</style><style data-shopify>.header {
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .section-header {
    margin-bottom: 0px;
  }

  @media screen and (min-width: 750px) {
    .section-header {
      margin-bottom: 0px;
    }
  }

  @media screen and (min-width: 990px) {
    .header {
      padding-top: 20px;
      padding-bottom: 20px;
    }
  }</style><script src="//polinas-potent-potions.myshopify.com/cdn/shop/t/4/assets/details-disclosure.js?v=153497636716254413831663872415" defer="defer"></script>
<script src="//polinas-potent-potions.myshopify.com/cdn/shop/t/4/assets/details-modal.js?v=4511761896672669691663872416" defer="defer"></script>
<script src="//polinas-potent-potions.myshopify.com/cdn/shop/t/4/assets/cart-notification.js?v=160453272920806432391663872410" defer="defer"></script><svg xmlns="http://www.w3.org/2000/svg" class="hidden">
  <symbol id="icon-search" viewbox="0 0 18 19" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.03 11.68A5.784 5.784 0 112.85 3.5a5.784 5.784 0 018.18 8.18zm.26 1.12a6.78 6.78 0 11.72-.7l5.4 5.4a.5.5 0 11-.71.7l-5.41-5.4z" fill="currentColor"/>
  </symbol>

  <symbol id="icon-close" class="icon icon-close" fill="none" viewBox="0 0 18 17">
    <path d="M.865 15.978a.5.5 0 00.707.707l7.433-7.431 7.579 7.282a.501.501 0 00.846-.37.5.5 0 00-.153-.351L9.712 8.546l7.417-7.416a.5.5 0 10-.707-.708L8.991 7.853 1.413.573a.5.5 0 10-.693.72l7.563 7.268-7.418 7.417z" fill="currentColor">
  </symbol>
</svg>
<sticky-header class="header-wrapper color-background-1 gradient header-wrapper--border-bottom">
  <header class="header header--middle-left header--mobile-center page-width header--has-menu"><header-drawer data-breakpoint="tablet">
        <details id="Details-menu-drawer-container" class="menu-drawer-container">
          <summary class="header__icon header__icon--menu header__icon--summary link focus-inset" aria-label="Menu">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" role="presentation" class="icon icon-hamburger" fill="none" viewBox="0 0 18 16">
  <path d="M1 .5a.5.5 0 100 1h15.71a.5.5 0 000-1H1zM.5 8a.5.5 0 01.5-.5h15.71a.5.5 0 010 1H1A.5.5 0 01.5 8zm0 7a.5.5 0 01.5-.5h15.71a.5.5 0 010 1H1a.5.5 0 01-.5-.5z" fill="currentColor">
</svg>

              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" role="presentation" class="icon icon-close" fill="none" viewBox="0 0 18 17">
  <path d="M.865 15.978a.5.5 0 00.707.707l7.433-7.431 7.579 7.282a.501.501 0 00.846-.37.5.5 0 00-.153-.351L9.712 8.546l7.417-7.416a.5.5 0 10-.707-.708L8.991 7.853 1.413.573a.5.5 0 10-.693.72l7.563 7.268-7.418 7.417z" fill="currentColor">
</svg>

            </span>
          </summary>
          <div id="menu-drawer" class="gradient menu-drawer motion-reduce" tabindex="-1">
            <div class="menu-drawer__inner-container">
              <div class="menu-drawer__navigation-container">
                <nav class="menu-drawer__navigation">
                  <ul class="menu-drawer__menu has-submenu list-menu" role="list"><li><a href="/" class="menu-drawer__menu-item list-menu__item link link--text focus-inset">
                            Home
                          </a></li><li><details id="Details-menu-drawer-menu-item-2">
                            <summary class="menu-drawer__menu-item list-menu__item link link--text focus-inset">
                              Catalog
                              <svg viewBox="0 0 14 10" fill="none" aria-hidden="true" focusable="false" role="presentation" class="icon icon-arrow" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.537.808a.5.5 0 01.817-.162l4 4a.5.5 0 010 .708l-4 4a.5.5 0 11-.708-.708L11.793 5.5H1a.5.5 0 010-1h10.793L8.646 1.354a.5.5 0 01-.109-.546z" fill="currentColor">
</svg>

                              <svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-caret" viewBox="0 0 10 6">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z" fill="currentColor">
</svg>

                            </summary>
                            <div id="link-catalog" class="menu-drawer__submenu has-submenu gradient motion-reduce" tabindex="-1">
                              <div class="menu-drawer__inner-submenu">
                                <button class="menu-drawer__close-button link link--text focus-inset" aria-expanded="true">
                                  <svg viewBox="0 0 14 10" fill="none" aria-hidden="true" focusable="false" role="presentation" class="icon icon-arrow" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.537.808a.5.5 0 01.817-.162l4 4a.5.5 0 010 .708l-4 4a.5.5 0 11-.708-.708L11.793 5.5H1a.5.5 0 010-1h10.793L8.646 1.354a.5.5 0 01-.109-.546z" fill="currentColor">
</svg>

                                  Catalog
                                </button>
                                <ul class="menu-drawer__menu list-menu" role="list" tabindex="-1"><li><a href="/collections/potions" class="menu-drawer__menu-item link link--text list-menu__item focus-inset">
                                          Potions
                                        </a></li><li><a href="/collections/ingredients" class="menu-drawer__menu-item link link--text list-menu__item focus-inset">
                                          Ingredients
                                        </a></li></ul>
                              </div>
                            </div>
                          </details></li><li><a href="/pages/contact" class="menu-drawer__menu-item list-menu__item link link--text focus-inset">
                            Contact
                          </a></li></ul>
                </nav>
                <div class="menu-drawer__utility-links"><a href="/account" class="menu-drawer__account link focus-inset h5">
                      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" role="presentation" class="icon icon-account" fill="none" viewBox="0 0 18 19">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M6 4.5a3 3 0 116 0 3 3 0 01-6 0zm3-4a4 4 0 100 8 4 4 0 000-8zm5.58 12.15c1.12.82 1.83 2.24 1.91 4.85H1.51c.08-2.6.79-4.03 1.9-4.85C4.66 11.75 6.5 11.5 9 11.5s4.35.26 5.58 1.15zM9 10.5c-2.5 0-4.65.24-6.17 1.35C1.27 12.98.5 14.93.5 18v.5h17V18c0-3.07-.77-5.02-2.33-6.15-1.52-1.1-3.67-1.35-6.17-1.35z" fill="currentColor">
</svg>

Account</a><ul class="list list-social list-unstyled" role="list"></ul>
                </div>
              </div>
            </div>
          </div>
        </details>
      </header-drawer><h1 class="header__heading"><a href="/" class="header__heading-link link link--text focus-inset"><span class="h2">Polina&#39;s Potent Potions</span></a></h1><nav class="header__inline-menu">
          <ul class="list-menu list-menu--inline" role="list"><li><a href="/" class="header__menu-item list-menu__item link link--text focus-inset">
                    <span>Home</span>
                  </a></li><li><header-menu>
                    <details id="Details-HeaderMenu-2">
                      <summary class="header__menu-item list-menu__item link focus-inset">
                        <span>Catalog</span>
                        <svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-caret" viewBox="0 0 10 6">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z" fill="currentColor">
</svg>

                      </summary>
                      <ul id="HeaderMenu-MenuList-2" class="header__submenu list-menu list-menu--disclosure gradient caption-large motion-reduce global-settings-popup" role="list" tabindex="-1"><li><a href="/collections/potions" class="header__menu-item list-menu__item link link--text focus-inset caption-large">
                                Potions
                              </a></li><li><a href="/collections/ingredients" class="header__menu-item list-menu__item link link--text focus-inset caption-large">
                                Ingredients
                              </a></li></ul>
                    </details>
                  </header-menu></li><li><a href="/pages/contact" class="header__menu-item list-menu__item link link--text focus-inset">
                    <span>Contact</span>
                  </a></li></ul>
        </nav><div class="header__icons">
      <details-modal class="header__search">
        <details>
          <summary class="header__icon header__icon--search header__icon--summary link focus-inset modal__toggle" aria-haspopup="dialog" aria-label="Search">
            <span>
              <svg class="modal__toggle-open icon icon-search" aria-hidden="true" focusable="false" role="presentation">
                <use href="#icon-search">
              </svg>
              <svg class="modal__toggle-close icon icon-close" aria-hidden="true" focusable="false" role="presentation">
                <use href="#icon-close">
              </svg>
            </span>
          </summary>
          <div class="search-modal modal__content gradient" role="dialog" aria-modal="true" aria-label="Search">
            <div class="modal-overlay"></div>
            <div class="search-modal__content search-modal__content-bottom" tabindex="-1"><predictive-search class="search-modal__form" data-loading-text="Loading..."><form action="/search" method="get" role="search" class="search search-modal__form">
                  <div class="field">
                    <input class="search__input field__input"
                      id="Search-In-Modal"
                      type="search"
                      name="q"
                      value=""
                      placeholder="Search"role="combobox"
                        aria-expanded="false"
                        aria-owns="predictive-search-results-list"
                        aria-controls="predictive-search-results-list"
                        aria-haspopup="listbox"
                        aria-autocomplete="list"
                        autocorrect="off"
                        autocomplete="off"
                        autocapitalize="off"
                        spellcheck="false">
                    <label class="field__label" for="Search-In-Modal">Search</label>
                    <input type="hidden" name="options[prefix]" value="last">
                    <button class="search__button field__button" aria-label="Search">
                      <svg class="icon icon-search" aria-hidden="true" focusable="false" role="presentation">
                        <use href="#icon-search">
                      </svg>
                    </button>
                  </div><div class="predictive-search predictive-search--header" tabindex="-1" data-predictive-search>
                      <div class="predictive-search__loading-state">
                        <svg aria-hidden="true" focusable="false" role="presentation" class="spinner" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                          <circle class="path" fill="none" stroke-width="6" cx="33" cy="33" r="30"></circle>
                        </svg>
                      </div>
                    </div>

                    <span class="predictive-search-status visually-hidden" role="status" aria-hidden="true"></span></form></predictive-search><button type="button" class="search-modal__close-button modal__close-button link link--text focus-inset" aria-label="Close">
                <svg class="icon icon-close" aria-hidden="true" focusable="false" role="presentation">
                  <use href="#icon-close">
                </svg>
              </button>
            </div>
          </div>
        </details>
      </details-modal><a href="/account" class="header__icon header__icon--account link focus-inset small-hide">
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" role="presentation" class="icon icon-account" fill="none" viewBox="0 0 18 19">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M6 4.5a3 3 0 116 0 3 3 0 01-6 0zm3-4a4 4 0 100 8 4 4 0 000-8zm5.58 12.15c1.12.82 1.83 2.24 1.91 4.85H1.51c.08-2.6.79-4.03 1.9-4.85C4.66 11.75 6.5 11.5 9 11.5s4.35.26 5.58 1.15zM9 10.5c-2.5 0-4.65.24-6.17 1.35C1.27 12.98.5 14.93.5 18v.5h17V18c0-3.07-.77-5.02-2.33-6.15-1.52-1.1-3.67-1.35-6.17-1.35z" fill="currentColor">
</svg>

          <span class="visually-hidden">Account</span>
        </a><a href="/cart" class="header__icon header__icon--cart link focus-inset" id="cart-icon-bubble"><svg class="icon icon-cart" aria-hidden="true" focusable="false" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none">
  <path fill="currentColor" fill-rule="evenodd" d="M20.5 6.5a4.75 4.75 0 00-4.75 4.75v.56h-3.16l-.77 11.6a5 5 0 004.99 5.34h7.38a5 5 0 004.99-5.33l-.77-11.6h-3.16v-.57A4.75 4.75 0 0020.5 6.5zm3.75 5.31v-.56a3.75 3.75 0 10-7.5 0v.56h7.5zm-7.5 1h7.5v.56a3.75 3.75 0 11-7.5 0v-.56zm-1 0v.56a4.75 4.75 0 109.5 0v-.56h2.22l.71 10.67a4 4 0 01-3.99 4.27h-7.38a4 4 0 01-4-4.27l.72-10.67h2.22z"/>
</svg>
<span class="visually-hidden">Cart</span><div class="cart-count-bubble"><span aria-hidden="true">2</span><span class="visually-hidden">2 items</span>
          </div></a>
    </div>
  </header>
</sticky-header>

<cart-notification>
  <div class="cart-notification-wrapper page-width">
    <div id="cart-notification" class="cart-notification focus-inset color-background-1 gradient" aria-modal="true" aria-label="Item added to your cart" role="dialog" tabindex="-1">
      <div class="cart-notification__header">
        <h2 class="cart-notification__heading caption-large text-body"><svg class="icon icon-checkmark color-foreground-text" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 9" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.35.643a.5.5 0 01.006.707l-6.77 6.886a.5.5 0 01-.719-.006L.638 4.845a.5.5 0 11.724-.69l2.872 3.011 6.41-6.517a.5.5 0 01.707-.006h-.001z" fill="currentColor"/>
</svg>
Item added to your cart</h2>
        <button type="button" class="cart-notification__close modal__close-button link link--text focus-inset" aria-label="Close">
          <svg class="icon icon-close" aria-hidden="true" focusable="false"><use href="#icon-close"></svg>
        </button>
      </div>
      <div id="cart-notification-product" class="cart-notification-product"></div>
      <div class="cart-notification__links">
        <a href="/cart" id="cart-notification-button" class="button button--secondary button--full-width"></a>
        <form action="/cart" method="post" id="cart-notification-form">
          <button class="button button--primary button--full-width" name="checkout">Check out</button>
        </form>
        <button type="button" class="link button-label">Continue shopping</button>
      </div>
    </div>
  </div>
</cart-notification>
<style data-shopify>
  .cart-notification {
     display: none;
  }
</style>


<script type="application/ld+json">
  {
    "@context": "http://schema.org",
    "@type": "Organization",
    "name": "Polina\u0026#39;s Potent Potions",
    
    "sameAs": [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    ],
    "url": "https:\/\/polinas-potent-potions.myshopify.com"
  }
</script>
  <script type="application/ld+json">
    {
      "@context": "http://schema.org",
      "@type": "WebSite",
      "name": "Polina\u0026#39;s Potent Potions",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https:\/\/polinas-potent-potions.myshopify.com\/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      },
      "url": "https:\/\/polinas-potent-potions.myshopify.com"
    }
  </script>
</div>
```

---



<a id="tags-sections"></a>


## sections

Renders a [section group](https://shopify.dev/themes/architecture/section-groups).

Use this tag to render section groups as part of the theme's [layout](https://shopify.dev/themes/architecture/layouts) content. Place the `sections` tag where you want to render it in the layout.

To learn more about section groups and how to use them in your theme, refer to [Section groups](https://shopify.dev/themes/architecture/section-groups#usage).

### Syntax

```oobleckTag
{% sections 'name' %}
```

#### name

The name of the section group file you want to render.

---



<a id="tags-style"></a>


## style

Generates an HTML `<style>` tag with an attribute of `data-shopify`.

***

**Note:** If you reference \<a href="/themes/architecture/settings/input-settings#color">color settings\</a> inside \<code>style\</code> tags, then the associated CSS rules will update as the setting is changed in the theme editor, without a page refresh.

***

### Syntax

```oobleckTag
{% style %}
  CSS_rules
{% endstyle %}
```

#### CSS\_rules

The desired CSS rules for the `<style>` tag.

###### Code

```liquid
{% style %}
  .h1 {
    color: {{ settings.colors_accent_1 }};
  }
{% endstyle %}
```

###### Data

```json
{
  "settings": {
    "colors_accent_1": "#121212"
  }
}
```

###### Output

```html
<style data-shopify>
  .h1 {
    color: #121212;
  }
</style>
```

---



<a id="tags-stylesheet"></a>


## stylesheet

CSS styles included in [section](https://shopify.dev/storefronts/themes/architecture/sections), [block](https://shopify.dev/storefronts/themes/architecture/blocks), and [snippet](https://shopify.dev/storefronts/themes/architecture/snippets) files.

Each section, block or snippet can have only one `{% stylesheet %}` tag.

To learn more about how CSS that's defined between the `stylesheet` tags is loaded and run, refer to the documentation for [stylesheet tags](https://shopify.dev/storefronts/themes/best-practices/javascript-and-stylesheet-tags#stylesheet).

***

**Caution:** Liquid isn\&#39;t rendered inside of \<code>{% stylesheet %}\</code> tags. Including Liquid code can cause syntax errors.

***

### Syntax

```oobleckTag
{% stylesheet %}
  css_styles
{% endstylesheet %}
```

#### css\_styles

The CSS styles for the section, block or snippet.

---



<a id="tags-tablerow"></a>


## tablerow

Generates HTML table rows for every item in an array.

The `tablerow` tag must be wrapped in HTML `<table>` and `</table>` tags.

***

**Tip:** Every \<code>tablerow\</code> loop has an associated \<a href="/docs/api/liquid/objects/tablerowloop">\<code>tablerowloop\</code> object\</a> with information about the loop.

***

### Syntax

```oobleckTag
{% tablerow variable in array %}
  expression
{% endtablerow %}
```

#### variable

The current item in the array.

#### array

The array to iterate over.

#### expression

The expression to render.

###### Code

```liquid
<table>
  {% tablerow product in collection.products %}
    {{ product.title }}
  {% endtablerow %}
</table>
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
<table>
  <tr class="row1">
<td class="col1">
    Draught of Immortality
  </td><td class="col2">
    Glacier ice
  </td><td class="col3">
    Health potion
  </td><td class="col4">
    Invisibility potion
  </td></tr>

</table>
```

### tablerow tag parameters

#### cols

### Syntax

```oobleckTag
{% tablerow variable in array cols: number %}
  expression
{% endtablerow %}
```

You can define how many columns the table should have using the `cols` parameter.

###### Code

```liquid
<table>
  {% tablerow product in collection.products cols: 2 %}
    {{ product.title }}
  {% endtablerow %}
</table>
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
<table>
  <tr class="row1">
<td class="col1">
    Draught of Immortality
  </td><td class="col2">
    Glacier ice
  </td></tr>
<tr class="row2"><td class="col1">
    Health potion
  </td><td class="col2">
    Invisibility potion
  </td></tr>

</table>
```

#### limit

### Syntax

```oobleckTag
{% tablerow variable in array limit: number %}
  expression
{% endtablerow %}
```

You can limit the number of iterations using the `limit` parameter.

###### Code

```liquid
<table>
  {% tablerow product in collection.products limit: 2 %}
    {{ product.title }}
  {% endtablerow %}
</table>
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
<table>
  <tr class="row1">
<td class="col1">
    Draught of Immortality
  </td><td class="col2">
    Glacier ice
  </td></tr>

</table>
```

#### offset

### Syntax

```oobleckTag
{% tablerow variable in array offset: number %}
  expression
{% endtablerow %}
```

You can specify a 1-based index to start iterating at using the `offset` parameter.

###### Code

```liquid
<table>
  {% tablerow product in collection.products offset: 2 %}
    {{ product.title }}
  {% endtablerow %}
</table>
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
<table>
  <tr class="row1">
<td class="col1">
    Health potion
  </td><td class="col2">
    Invisibility potion
  </td></tr>

</table>
```

#### range

### Syntax

```oobleckTag
{% tablerow variable in (number..number) %}
  expression
{% endtablerow %}
```

Instead of iterating over specific items in an array, you can specify a numeric range to iterate over.

***

**Note:** You can define the range using both literal and variable values.

***

###### Code

```liquid
<table>
  {% tablerow i in (1..3) %}
    {{ i }}
  {% endtablerow %}
</table>

{%- assign lower_limit = 2 -%}
{%- assign upper_limit = 4 -%}

<table>
  {% tablerow i in (lower_limit..upper_limit) %}
    {{ i }}
  {% endtablerow %}
</table>
```

###### Output

```html
<table>
  <tr class="row1">
<td class="col1">
    1
  </td><td class="col2">
    2
  </td><td class="col3">
    3
  </td></tr>

</table><table>
  <tr class="row1">
<td class="col1">
    2
  </td><td class="col2">
    3
  </td><td class="col3">
    4
  </td></tr>

</table>
```

## tablerowloop**object**

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



<a id="tags-unless"></a>


## unless

Renders an expression unless a specific condition is `true`.

***

**Tip:** Similar to the \<a href="/docs/api/liquid/tags/if">\<code>if\</code> tag\</a>, you can use \<code>elsif\</code> to add more conditions to an \<code>unless\</code> tag.

***

### Syntax

```oobleckTag
{% unless condition %}
  expression
{% endunless %}
```

#### condition

The condition to evaluate.

#### expression

The expression to render unless the condition is met.

###### Code

```liquid
{% unless product.has_only_default_variant %}
  // Variant selection functionality
{% endunless %}
```

###### Data

```json
{
  "product": {
    "has_only_default_variant": false
  }
}
```

###### Output

```html
// Variant selection functionality
```

---
