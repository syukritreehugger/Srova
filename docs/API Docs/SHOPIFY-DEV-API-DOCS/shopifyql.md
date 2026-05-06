# Shopify Shopifyql Reference (Indonesian / English)

> Referensi lengkap **Shopifyql** Shopify API yang disusun ulang dari https://shopify.dev/docs/api/shopifyql.
> Dokumen ini dirancang untuk pengembang berbahasa Indonesia, namun seluruh konten teknis (skema, tipe, nama field, contoh kode) dipertahankan dalam bahasa Inggris asli untuk memastikan akurasi.

| Item | Nilai |
|------|-------|
| Sumber | `https://shopify.dev/docs/api/shopifyql` |
| Total halaman | **2** |
| Tanggal kompilasi | 2026-05-01 |
| Bahasa | Indonesia (intro/ToC) + English (konten teknis) |



## Daftar Isi (Table of Contents)

- [Landing](#landing)
- [segment-query-language-reference](#segment-query-language-reference)


---



<a id="landing"></a>


## ShopifyQL syntax reference

[ShopifyQL](https://shopify.dev/docs/apps/build/shopifyql) is Shopify's query language built for commerce. This reference documents the ShopifyQL syntax that you can use to query merchant store data and build analytics and reporting tools.

***

### Overview

ShopifyQL's query syntax lets you create custom queries against store data. You can use ShopifyQL queries through the [GraphQL Admin API](https://shopify.dev/docs/apps/build/shopifyql/graphql-admin-api), with [Python scripts](https://shopify.dev/docs/apps/build/shopifyql/python-sdk-and-cli), directly in code editors, or through [Shopify's analytics tools](https://shopify.dev/docs/apps/build/shopifyql/shopify-admin).

***

### Glossary of terms

| Term | Definition |
| - | - |
| Dimension | An attribute that segments data so that it can be sorted and presented more clearly. |
| Keyword | Syntax that defines what query operation to perform. |
| Metric | A quantitative measurement of data, such as sales totals, order counts, or profit. |
| Parameter | Syntax that defines what data to return. |
| Operator | Syntax for performing logical or arithmetic operations on the query data. |

***

### Core syntax rules

Your query must include `FROM` and `SHOW` keywords with parameters. All other keywords are optional, but must follow a specific sequence:

1. `FROM`
2. `SHOW`
3. `WHERE`
4. `SINCE` and `UNTIL`, or `DURING`
5. `GROUP BY`
6. `TIMESERIES`
7. `COMPARE TO`
8. `HAVING`
9. `ORDER BY`
10. `LIMIT`
11. `WITH` (`TOTALS`, `GROUP_TOTALS`, `PERCENT_CHANGE`, `CUMULATIVE_VALUES`, `CURRENCY`, `TIMEZONE`)
12. `VISUALIZE` and `TYPE`

#### Formatting conventions

ShopifyQL uses two-level indentation where `FROM` and `VISUALIZE` are top-level keywords, and all other keywords are indented under `FROM`. The following example shows the formatting pattern:

```shopifyql
FROM sales
  SHOW total_sales
  WHERE billing_country = 'Canada'
  GROUP BY product_title
  SINCE last_month
  ORDER BY total_sales DESC
  LIMIT 10
VISUALIZE total_sales TYPE bar
```

***

### FROM and SHOW

The simplest query requires only these two keywords. `FROM` specifies dataset tables; `SHOW` selects columns to extract.

```shopifyql
FROM sales
  SHOW total_sales
```

***

### WHERE

Filters data by dimensions before aggregation. The `WHERE` keyword only supports dimensions, not metrics. Values must be wrapped in single quotes (`'`), not double quotes.

```shopifyql
FROM sales
  SHOW total_sales, product_title, product_type, product_vendor
  WHERE billing_country = 'Canada'
  GROUP BY product_title, product_type, product_vendor
```

#### Comparison operators

* `=` (equal to)
* `!=` (not equal to)
* `<` (less than)
* `>` (greater than)
* `<=` (less than or equal to)
* `>=` (greater than or equal to)

#### Logical operators

* `AND`
* `OR`
* `NOT`

#### String matching

* `STARTS WITH`
* `ENDS WITH`
* `CONTAINS`

#### MATCHES operator

Use the `MATCHES` to filter for collections of related entities. Use `MATCHES` and `NOT MATCHES` for semi-join expressions with named parameters:

WHERE \<expression> MATCHES (\<parameter\_list>)

WHERE \<expression> NOT MATCHES (\<parameter\_list>)

**Note:**

Each parameter can only be used once per `MATCHES` filter. For example, `WHERE orders_placed MATCHES (date > 2025-01-01, date < 2025-06-01)` isn't valid because `date` is used twice.

###### Filter by order activity

```shopifyql
FROM customers
SHOW customer_email, total_orders
WHERE orders_placed MATCHES (date > 2025-01-01)
```

###### Filter by email engagement

```shopifyql
FROM customers
SHOW customer_email, email_subscription_status
WHERE shopify_email.opened MATCHES (activity_id = 5240029206, date > 2025-01-01)
```

###### Exclude customers

```shopifyql
FROM customers
SHOW customer_email
WHERE products_purchased NOT MATCHES (date > 2025-01-01)
```

##### Available semi-join expressions

| Expression | Parameters | Description |
| - | - | - |
| `products_purchased` | `id`, `tag`, `category`, `date`, `sum_quantity`, `count` | Products purchased by customers. |
| `orders_placed` | `date`, `amount`, `location_id`, `app_id`, `count`, `sum_amount` | Orders placed by customers. |
| `shopify_email.opened` | `activity_id`, `date`, `count` | Email open events. |
| `shopify_email.clicked` | `activity_id`, `date`, `count` | Email click events. |
| `shopify_email.bounced` | `activity_id`, `date`, `count` | Email bounced events. |
| `shopify_email.marked_as_spam` | `activity_id`, `date`, `count` | Email marked as spam events. |
| `shopify_email.unsubscribed` | `activity_id`, `date`, `count` | Email unsubscribed events. |
| `storefront.product_viewed` | `id`, `date`, `count` | Customer events for products viewed. |
| `storefront.collection_viewed` | `id`, `date`, `count` | Customer events for collections viewed. |
| `store_credit_accounts` | `currency`, `balance`, `next_expiry_date`, `last_credit_date` | Customers who have a balance on a store. |
| `customer_within_distance` | `coordinates`, `distance_km` or `distance_mi` | Customer address within distance. |

***

### GROUP BY

Segments metrics by dimensions. If a dimension is used in the `SHOW` keyword, then it must also be included in the `GROUP BY` keyword.

```shopifyql
FROM sales
  SHOW billing_country, billing_region, total_sales
  GROUP BY billing_country, billing_region
```

#### Time dimensions

Available grouping options: `second`, `minute`, `hour`, `day`, `week`, `month`, `quarter`, `year`, `hour_of_day`, `day_of_week`, `week_of_year`, `month_of_year`

***

### TIMESERIES

Distinguishes grouping by time dimensions and backfills dates in a query where data gaps exist.

```shopifyql
FROM sales
  SHOW total_sales
  TIMESERIES month
  SINCE last_year UNTIL today
```

#### Valid options

* `day`
* `day_of_week` — zero-based day of week (0 = Monday, 1 = Tuesday, ..., 6 = Sunday)
* `hour`
* `hour_of_day` — zero-based hour (0–23)
* `minute`
* `month`
* `month_of_year` — month number (1–12)
* `quarter`
* `week`
* `week_of_year` — week number (1–53)
* `year`

***

### HAVING

Filters grouped results by metrics after aggregation. The `HAVING` keyword only supports metrics, not dimensions. Unlike `WHERE`, `HAVING` can reference aliases and aggregate functions. Requires `GROUP BY` or `TIMESERIES`.

```shopifyql
FROM sales
  SHOW total_sales
  GROUP BY product_title
  HAVING total_sales > 1000
    AND total_sales < 5000
```

***

### WITH

You can use `WITH` to change keyword behavior using these modifiers:

* `TOTALS`: Top-level metric summaries before dimensional breakdown.
* `GROUP_TOTALS`: Subtotals for grouped aggregations.
* `PERCENT_CHANGE`: Adds percentage change columns with `COMPARE TO`.
* `CUMULATIVE_VALUES`: Generates running total columns for additive metrics.
* `CURRENCY`: Displays data in specified currency codes (three-letter format).
* `TIMEZONE`: Displays data in specified timezone (IANA format, for example, `America/New_York`).

###### Totals modifier

```shopifyql
FROM sales
  SHOW total_sales
  GROUP BY billing_region WITH TOTALS
```

###### Cumulative values

```shopifyql
FROM sales
  SHOW net_sales
  TIMESERIES day WITH CUMULATIVE_VALUES
  DURING last_month
```

#### CUMULATIVE\_​VALUES

When `WITH CUMULATIVE_VALUES` is specified, ShopifyQL automatically adds cumulative columns for each eligible additive metric using the naming pattern: `{metric_name}__cumulative`.

Cumulative values require `TIMESERIES` or `ORDER BY <time>` to establish time-based ordering:

* Eligible metrics can be ordered by time, such as `net_sales`, `gross_sales`, `orders`, `units_sold`, `customers`, `sessions`, `revenue`, `taxes`, `shipping`, `discounts`, or `sales_reversals`.
* Ineligible metrics are those that can't be ordered by time, such as `average_order_value`, `conversion_rate`, `cart_abandonment_rate`, or `growth_rate`.

In this example, the `net_sales` column tracks sales on each day while the `net_sales_cumulative` column tracks cumulative sales:

| day | net\_sales | net\_sales\_\_cumulative |
| - | - | - |
| 2024-12-01 | $1,200.00 | $1,200.00 |
| 2024-12-02 | $950.00 | $2,150.00 |
| 2024-12-03 | $1,400.00 | $3,550.00 |

***

### SINCE and UNTIL

Filter by time periods. If `SINCE` lacks `UNTIL`, defaults to today.

```shopifyql
FROM sales
  SHOW net_sales
  WHERE billing_country = 'Canada'
  GROUP BY month
  SINCE -12m UNTIL yesterday
```

#### Offset operators

* `-{#}s` (seconds)
* `-{#}min` (minutes)
* `-{#}h` (hours)
* `-{#}d` (days)
* `-{#}w` (weeks)
* `-{#}m` (months)
* `-{#}q` (quarters)
* `-{#}y` (years)
* Specific dates: `yyyy-MM-dd`

#### Date functions

* `startOfDay()`
* `startOfMonth()`
* `startOfWeek()`
* `startOfQuarter()`
* `startOfYear()`

***

### DURING

Simplifies date filtering using named ranges instead of `SINCE`/`UNTIL` combinations.

```shopifyql
FROM sales
  SHOW total_sales
  DURING last_month
```

#### Named ranges

Available named ranges include `today`, `yesterday`, `this_week`, `last_week`, `this_weekend`, `last_weekend`, `this_month`, `last_month`, `this_quarter`, `last_quarter`, `this_year`, `last_year`, and `bfcmYYYY`.

***

### COMPARE TO

Compares data across multiple date ranges. Supports absolute dates, named dates, offset dates, and multiple comparisons.

###### Year-over-year comparison

```shopifyql
FROM sales
  SHOW net_sales, product_title
  GROUP BY product_title
  TIMESERIES day
  SINCE -1m UNTIL 0m
  COMPARE TO previous_year
```

###### Match day of week

```shopifyql
FROM sales
  SHOW total_sales
  TIMESERIES day
  SINCE -7d
  COMPARE TO previous_year_match_day_of_week
```

#### Comparison options

* `previous_period`: The directly preceding period.
* `previous_year`: Same calendar dates one year ago.
* `previous_month`: Same calendar dates one month ago.
* `this_month`: The current month.
* `last_month`: The previous month.
* `previous_year_match_day_of_week`: Same days of the week, shifted back 52 weeks.

The `previous_year_match_day_of_week` option aligns days of the week when making year-over-year comparisons, which is important for retail reporting where weekday patterns are significant.

#### Benchmarks

You can compare your store's data against benchmarks for specific metrics within reports using `COMPARE TO benchmarks`. For more information, see the [benchmarks documentation](https://help.shopify.com/en/manual/reports-and-analytics/shopify-reports/report-types/custom-reports/benchmarks).

```shopifyql
FROM sales
  SHOW total_sales
  TIMESERIES day
  SINCE startOfDay(-30d) UNTIL today
  COMPARE TO benchmarks
VISUALIZE total_sales TYPE line
```

***

### ORDER BY

Specifies sort direction using `ASC` (ascending) or `DESC` (descending).

```shopifyql
FROM sales
  SHOW net_sales
  GROUP BY product_title, product_type
  ORDER BY product_title, product_type DESC
```

***

### LIMIT

Restricts returned rows (defaults to 1000). Optional `OFFSET` parameter skips rows.

```shopifyql
FROM sales
  SHOW gross_sales AS total_gross_sales
  GROUP BY product_title
  ORDER BY total_gross_sales DESC
  LIMIT 10
```

***

### VISUALIZE and TYPE

Renders data graphically. If `TYPE` isn't included in your query, then ShopifyQL automatically selects the most suitable visualization. Use `MAX` to limit the number of data points displayed.

###### Line chart

```shopifyql
FROM sales
  SHOW gross_sales
  TIMESERIES month
VISUALIZE gross_sales TYPE line
```

###### Bar chart with limit

```shopifyql
FROM sales
  SHOW total_sales
  GROUP BY product_title
VISUALIZE total_sales TYPE bar MAX 5
```

#### Supported visualization types

| Type | Description |
| - | - |
| `bar` | Vertical bar chart. |
| `horizontal_bar` | Horizontal bar chart. |
| `grouped_bar` | Grouped vertical bars. |
| `horizontal_grouped_bar` | Grouped horizontal bars. |
| `stacked_bar` | Stacked vertical bars. |
| `stacked_horizontal_bar` | Stacked horizontal bars. |
| `single_stacked_bar` | Single stacked bar. |
| `line` | Line chart. |
| `stacked_area` | Stacked area chart. |
| `histogram` | Histogram distribution. |
| `donut` | Circular chart with center hole. |
| `funnel` | Step by step view through a process. |
| `heatmap` | Two-dimensional grid. |
| `single_metric` | Single metric display. |
| `list` | List display. |
| `list_with_dimension_values` | List with dimension values. |
| `table` | Tabular data. |
| `rfm_grid` | RFM (Recency, Frequency, Monetary) segmentation grid for customer analysis. |
| `target_gauge` | Gauge showing progress towards an analytics target. |

#### Visualization modifiers

* `MAX number`: Limits the number of data points in the visualization.
* `LIMIT number`: Deprecated alias for `MAX`.

***

### AS (aliases)

Renames columns with aliases. Quote aliases containing spaces.

```shopifyql
FROM sales
  SHOW total_sales AS "My Total Sales"
```

***

### TOP N

Displays top items by category, grouping remainder as "Other."

```shopifyql
FROM sales
  SHOW gross_sales
  GROUP BY day, TOP 5 product_title
  TIMESERIES day
  SINCE startOfDay(-30d) UNTIL today
```

#### Options

* `ONLY TOP N`: Hides remainder.
* `TOP N OVERALL`: Ranks across full range.

***

### Mathematical operators

Perform arithmetic on metrics: `+`, `-`, `×`, `÷`

```shopifyql
FROM sales
  SHOW (net_sales + sales_reversals) AS order_value, orders
  GROUP BY billing_region
```

***

### Implicit joins

ShopifyQL automatically joins multiple tables intelligently. Join field must have the same name in all joined schemas and must be in `GROUP BY`.

```shopifyql
FROM sales, sessions
  SHOW day, total_sales, sessions
  GROUP BY day
```

***

### Comments

Add comments to your queries for documentation.

###### Single-line comments

```shopifyql
-- This is a comment
  FROM sales
  SHOW total_sales
```

###### Multi-line comments

```shopifyql
/* This is a
 multi-line comment */FROM sales
  SHOW total_sales
```

***

### Multi-store reporting

Organizations with multiple stores can query across stores.

```shopifyql
FROM ORGANIZATION sales
  SHOW total_sales
  WHERE shop_id IN (12301, 12302, 12303)
  GROUP BY shop_name
```

***

### Rate limiting

When you use ShopifyQL with the GraphQL Admin API, [`shopifyqlQuery`](https://shopify.dev/docs/api/admin-graphql/latest/queries/shopifyqlQuery) uses separate rate limits based on query complexity. Query complexity depends on factors like the following:

* Number of keywords and clauses used
* Number of metrics in the `SHOW` clause
* Number of dimensions in the `GROUP BY` clause

If you reach the rate limit, then the API returns a 429 error. The rate limit uses a 60-second timer, so you'll need to wait until it resets before sending another query.

***

### Segment query language

The segment query language is a different implementation of ShopifyQL that uses a subset of ShopifyQL. The segment query language only uses the `WHERE` clause from ShopifyQL to filter customers by their attributes.

You can use the segment query language to create a collection of customers that are filtered out by specific criteria. Filtered customers in a collection are called "segment members", and the collections of filtered customers are called "segments". Merchants can create segments in the Shopify admin.

For a complete reference of the segment query language, refer to the [segment query language reference](https://shopify.dev/docs/api/shopifyql/segment-query-language-reference).

***

### Metafields

With metafields, you can analyze custom [metafields](https://shopify.dev/docs/apps/build/custom-data/metafields) data stored in your shop alongside standard Shopify metrics. You can use metafields in `WHERE`, `GROUP BY`, and `SHOW` clauses to filter, segment, and display custom attributes.

#### Requirements

To use a metafield in ShopifyQL, it must have a [metafield definition](https://shopify.dev/docs/apps/build/custom-data/metafields/definitions) with `use_in_analytics` enabled.

#### Supported owner types

* `customer`
* `order`
* `product`
* `product_variant`

#### Supported metafield types

**Scalar types:** `single_line_text_field`, `multi_line_text_field`, `number_integer`, `number_decimal`, `date`, `date_time`, `url`, `boolean`, `color`, `id`, `product_reference`, `rating`

**List types:** `list.single_line_text_field`, `list.multi_line_text_field`, `list.number_integer`, `list.number_decimal`

#### Syntax

Reference metafields using the following pattern:

\<owner\_type>.metafields.\<namespace>.\<key>

For example, a customer metafield with namespace `custom` and key `membership_level` would be referenced as:

customer.metafields.custom.membership\_level

#### Examples

###### Filter by metafield

```shopifyql
FROM customers
  SHOW customer_name, total_amount_spent
  WHERE customer.metafields.custom.membership_level = 'gold'
  GROUP BY customer_name
```

###### Group by metafield

```shopifyql
FROM sales
  SHOW total_sales
  GROUP BY product.metafields.custom.category
```

###### Multiple metafields across owner types

```shopifyql
FROM sales
  SHOW total_sales
  WHERE customer.metafields.custom.vip = true
    AND product.metafields.reviews.rating > 4
  GROUP BY product_title
```

***

---



<a id="segment-query-language-reference"></a>


## Segment query language reference

The segment query language is a subset of ShopifyQL that uses only the `WHERE` clause to filter customers by their attributes. It enables merchants to create customer segments—collections of customers filtered by specific criteria—directly in the Shopify admin.

Use the segment query language with the GraphQL Admin API to query segmentation data, which corresponds to saved search queries in the Shopify admin. For example, you can create a segment for customers subscribed to email marketing.

The following guide explains the syntax for forming queries.

**Note:**

Segment queries don't support all ShopifyQL syntax.

***

### Segment queries

Segmentation queries in API requests are precise definitions of segments. The queries indicate the condition or conditions that data must satisfy to be selected. The syntax performs a similar function to `WHERE` statements in SQL. Query syntax acts as a filter to determine the data returned.

For example, a segment query can retrieve segment members that have left a checkout without completing their purchase in the last 30 days.

You can query a maximum of 250 segments. The maximum value that `first` and `last` arguments accept is `250`.

***

### Query syntax

Segment queries are composed of a clause, or multiple clauses, specifying facts about the segment. The clauses specify a segment by applying a condition to an attribute using an operator.

An individual clause consists of the following components:

* `attribute`: The properties that define all items in a specific category.
* `operator`: A reserved character pattern that performs tasks such as comparisons and arithmetic operations.
* `condition`: The state required for data to be either selected or filtered out.

***

### Clause format

The following is the query clause format:

```sql
<clause> ::=  <attribute> <operator> <condition>
```

For example, in the following clause, `email_subscription_status` is the attribute, `=` is the operator, and `SUBSCRIBED` is the condition:

### Segment query example

```sql
email_subscription_status = 'SUBSCRIBED'
```

![An image of a query clause for customers who are subscribed by email](https://shopify.dev/assets/assets/images/apps/segmentation/query-clause-VEmBBA_l.png)

You can also [group clauses](https://shopify.dev/docs/api/shopifyql/segment-query-language-reference#grouped-clauses).

***

### Attributes

An attribute's data type determines the valid operators and conditions for defining segment queries.

The following are supported attributes and their data types:

| Attribute | Data type | Description |
| - | - | - |
| `abandoned_checkout_date` | [Date](https://shopify.dev/docs/api/shopifyql/segment-query-language-reference#date-attributes) | The date of the customer's abandoned checkout. |
| `anniversary()` | [Function](https://shopify.dev/docs/api/shopifyql/segment-query-language-reference#function-attributes) | The customer with a yearly recurring date, such as a birth date. |
| `amount_spent` | [Float](https://shopify.dev/docs/api/shopifyql/segment-query-language-reference#float-attributes) | The total amount spent (all time). |
| `companies` | [Integer](https://shopify.dev/docs/api/shopifyql/segment-query-language-reference#integer-attributes) | The company ID for which the customer is configured as B2B contact. |
| `created_by_app_id` | [Integer](https://shopify.dev/docs/api/shopifyql/segment-query-language-reference#integer-attributes) | The app ID that created the customer. |
| `customer_account_status` | [Enum](https://shopify.dev/docs/api/shopifyql/segment-query-language-reference#enum-attributes) | The customer's account status. |
| `customer_added_date` | [Date](https://shopify.dev/docs/api/shopifyql/segment-query-language-reference#date-attributes) | The date when the customer was added on Shopify. |
| `customer_cities` | [Enum](https://shopify.dev/docs/api/shopifyql/segment-query-language-reference#enum-attributes) | The customer's city. |
| `customer_countries` | [Enum](https://shopify.dev/docs/api/shopifyql/segment-query-language-reference#enum-attributes) | The customer's country or region (shipping/billing). |
| `customer_email_domain` | [String](https://shopify.dev/docs/api/shopifyql/segment-query-language-reference#string-attributes) | The customer's email domains. |
| `customer_language` | [String](https://shopify.dev/docs/api/shopifyql/segment-query-language-reference#string-attributes) | The customer's language. |
| `customer_regions` | [Enum](https://shopify.dev/docs/api/shopifyql/segment-query-language-reference#enum-attributes) | The customer's region. |
| `customer_tags` | [String](https://shopify.dev/docs/api/shopifyql/segment-query-language-reference#string-attributes) | The customer's assigned tags.Tag existence isn't validated. |
| `customer_within_distance` | [Function](https://shopify.dev/docs/api/shopifyql/segment-query-language-reference#function-attributes) | The customer with an address within a specified distance of a particular latitude, longitude. |
| `email_subscription_status` | [Enum](https://shopify.dev/docs/api/shopifyql/segment-query-language-reference#enum-attributes) | The customer's email subscription status. |
| `first_order_date` | [Date](https://shopify.dev/docs/api/shopifyql/segment-query-language-reference#date-attributes) | The date of the customer's first order. |
| `last_order_date` | [Date](https://shopify.dev/docs/api/shopifyql/segment-query-language-reference#date-attributes) | The date of the customer's last order. |
| `number_of_orders` | [Integer](https://shopify.dev/docs/api/shopifyql/segment-query-language-reference#integer-attributes) | The number of orders for the customer (all time). |
| `orders_placed` | [Function](https://shopify.dev/docs/api/shopifyql/segment-query-language-reference#function-attributes) | The orders that the customer placed (all time). |
| `predicted_spend_tier` | [Enum](https://shopify.dev/docs/api/shopifyql/segment-query-language-reference#enum-attributes) | The customer's predicted spend tier. |
| `products_purchased` | [Function](https://shopify.dev/docs/api/shopifyql/segment-query-language-reference#function-attributes) | The products that the customer purchased (all time). |
| `product_subscription_status` | [Enum](https://shopify.dev/docs/api/shopifyql/segment-query-language-reference#enum-attributes) | The customer's status for product subscriptions. |
| `rfm_group` | [Enum](https://shopify.dev/docs/api/shopifyql/segment-query-language-reference#enum-attributes) | The customer's RFM group. |
| `sms_subscription_status` | [Enum](https://shopify.dev/docs/api/shopifyql/segment-query-language-reference#enum-attributes) | The customer's status for SMS subscriptions. |
| `shopify_email.bounced` | [Function](https://shopify.dev/docs/api/shopifyql/segment-query-language-reference#function-attributes) | The customer whose email was returned to the server that sent it. |
| `shopify_email.clicked` | [Function](https://shopify.dev/docs/api/shopifyql/segment-query-language-reference#function-attributes) | The customer who clicked on any link or image in the email. |
| `shopify_email.delivered` | [Function](https://shopify.dev/docs/api/shopifyql/segment-query-language-reference#function-attributes) | The customer for whom the server has accepted an email. |
| `shopify_email.marked_as_spam` | [Function](https://shopify.dev/docs/api/shopifyql/segment-query-language-reference#function-attributes) | The customer who reported an email using its mail client's "Mark as Spam", "Report", or "Junk" feature. |
| `shopify_email.opened` | [Function](https://shopify.dev/docs/api/shopifyql/segment-query-language-reference#function-attributes) | The customer who opened an email on their email client. |
| `shopify_email.unsubscribed` | [Function](https://shopify.dev/docs/api/shopifyql/segment-query-language-reference#function-attributes) | The customer who requested removal from the organization's email address list and can no longer be mailed. |
| `store_credit_accounts` | [Function](https://shopify.dev/docs/api/shopifyql/segment-query-language-reference#function-attributes) | The customer who has store credit accounts. |
| `storefront_event.collection_viewed` | [Function](https://shopify.dev/docs/api/shopifyql/segment-query-language-reference#function-attributes) | The customer who browsed a particular product collection. |
| `storefront_event.product_viewed` | [Function](https://shopify.dev/docs/api/shopifyql/segment-query-language-reference#function-attributes) | The customer who browsed a particular product. |

#### Boolean attributes

Boolean attributes support specific operators and conditions.

**Note:**

The Segmentation API doesn't currently include Boolean-type attributes.

##### Operators

| Operator | Description | Example |
| - | - | - |
| `=` | Is | `boolean_attribute = true` |
| `!=` | Is not | `boolean_attribute != true` |

##### Conditions

| Condition | Description | Example |
| - | - | - |
| `true` | True | `boolean_attribute = true` |
| `false` | False | `boolean_attribute = false` |

#### Date attributes

Date attributes support specific operators and conditions.

##### Operators

Date operators act on complete 24-hour days and default to a shop's time zone.

For example, a New York shop (GMT-4) with the following query would include customers who last ordered between midnight (`T00:00:00`) on May 30th, 2020 to midnight on May 31st, 2020 in the shop's timezone.

```sql
last_order_date = 2020-05-30
```

In SQL, with UTC-based times, this would look like the following:

```sql
last_order_date >= 2020-05-30T04:00:00 AND last_order_date < 2020-05-31T04:00:00
```

The following segment query would include customers who last ordered from midnight on May 31st:

```sql
last_order_date > 2020-05-30
```

The following are supported operators for date-type attributes.

| Operators | Description | Examples |
| - | - | - |
| `=` | Equal-to | `last_order_date = 2020-05-30` |
| `!=` | Not-equal-to | `last_order_date != 2020-05-30` |
| `>` | After | `last_order_date > 2020-05-30` |
| `>=` | On or after | `last_order_date >= 2020-05-30` |
| `<` | Before | `last_order_date < 2020-05-30` |
| `<=` | On or before | `last_order_date <= 2020-05-30` |
| `BETWEEN {condition1} AND {condition2}` | Equivalent to `condition1 <= n <= condition2` | `BETWEEN 2020-02-30 AND 2020-03-30` |

##### Conditions

Date-type attributes accept specific conditions.

###### `{absoluteDate}`

Language-sensitive formatted dates aren't accepted.

| Format | Examples |
| - | - |
| `yyyy-mm-dd` | Represents an absolute date **without time** |

###### `{dateOffset}`

Syntactic sugar for an absolute date without time. For example, if the date is `May 15th 2021`, then `-7d` is syntactic sugar for `2021-05-07`.

The following are examples of `{dateOffset}`:

| Format | Description | Examples |
| - | - | - |
| `{+/-} {#} d` | Number of days | `last_order_date > -7d` |
| `{+/-} {#} w` | Number of weeks | `last_order_date >= -2w` |
| `{+/-} {#} m` | Number of months | `last_order_date = -1m` |
| `{+/-} {#} y` | Number of years | `last_order_date &lt; -1y` |

###### `{namedDate}`

Syntactic sugar for an absolute date without time.

`{namedDate}` supports the following operators:

```sql
=, !=, >, >=, <, <=, BETWEEN
```

When using the `BETWEEN` operator, condition types can be mixed.

```sql
last_order_date BETWEEN 2021-01-01 AND today
```

```sql
last_order_date BETWEEN 2020-01-01 AND -7d
```

| Format | Description | Examples |
| - | - | - |
| `today` | Date when the query is run or segment is queried | `last_order_date = today` |
| `yesterday` | Previous day | `last_order_date = yesterday` |

The `-12m`, `-90d`, `-30d`, and `-7d` standard syntax is preferred to the now-deprecated `12_months_ago`, `90_days_ago`, `30_days_ago`, and `7_days_ago` syntax.

###### `{absoluteDateTime}`

In some cases, users might want finer segment granularity, such as the segment of customers that participated in a timed flash sale. The segmentation query syntax supports an absolute datetime in place of an absolute date.

**Note:**

Assistive features for adding a time component aren't supported. Users are required to type these out manually.

| Format | Description | Examples |
| - | - | - |
| `yyyy-mm-ddTHH:mm:ss` | Represents an absolute date with time in the shop's timezone | `last_order_date > 2020-05-30T16:00:00` |

Times default to a shop's timezone. For example, a New York shop (GMT-4) with the following query would include customers means `last_order_date > 2020-05-30T20:00:00` in UTC.

##### Notes

* Only 24h format is supported. For example, `HH` needs to be be <= 23 (24h = `00:00:00`).

* Leading zeros are required, for example, `23:00:00`.

* Time-only syntax is not supported. For example, the following syntax is invalid:

```sql
last_order_date BETWEEN 1pm AND 3pm
```

* You can't extend `{namedDate}` or `{dateOffset}` with a time-specifier.

#### Enum attributes

`Enum` attributes support specific operators and conditions.

##### Operators

| Operators | Description | Example |
| - | - | - |
| `=` | Equal-to | `customer_account_status = 'DISABLED'` |
| `!=` | Not-equal-to | `customer_account_status != 'DISABLED'` |

##### Conditions

* Conditions accept UTF-8 characters and must be wrapped with single quotes `'`, similar to the [`ENUM` type in MySQL](https://dev.mysql.com/doc/refman/8.0/en/enum.html).

* Conditions only accept a value chosen from a list of permitted values.

* Conditions are case-sensitive and whitespaces are syntactically significant.

* Single quotes within a condition must be escaped (ie. `'\'VIP\''`).

* For Segmentation, we're using multiple clauses with connectors to specify multiple values.

#### Float attributes

`Float` attributes support specific operators and conditions. The underlying data type is a `float64` (double-precision floating-point format).

##### Operators

| Operators | Description | Example |
| - | - | - |
| `=` | Equal-to | `amount_spent = 10.99` |
| `!=` | Not-equal-to | `amount_spent != 10.99` |
| `>` | Greater than | `amount_spent > 10.99` |
| `>=` | Greater than or equal to | `amount_spent >= 10.99` |
| `<` | Less than | `amount_spent &lt; 10.99` |
| `<=` | Less than or equal to | `amount_spent <= 10.99` |
| `BETWEEN {value1} AND {value2}` | Equivalent to `value1 <= n <= value2` | `amount_spent BETWEEN 100 AND 1000.99` |

##### Conditions

* Conditions accept float (`float64`) and integer numbers.

* Integers automatically get converted to floating point (ie. `99` => `99.0`).

* Operators and functions returning a `Float`, for example `COUNT`, `SUM`, `MAX`, and `MEDIAN`, aren't supported for querying segments.

###### Formatting and separators

* A decimal point (`.`) is used as a decimal separator, by default.

* Thousand separators, such as commas and spaces, aren't supported.

* Language-sensitive formatted numbers aren't supported.

#### Function attributes

A `Function` accepts 0 or more parameters, individually supporting specific `<operator>`s and `<condition>`s that you can use to select specific customers. For example, `products_purchased MATCHES (id = 1234, count > 1)` would select all customers who purchased product id 1234 more than once.

##### Syntax

* Function names accept the same characters as regular filters, using lowercase alphanumerical and underscore (`snake_case()`).

* Functions names are follow by either `MATCHES` or `NOT MATCHES` and parentheses enclosing the list of optional parameters.

* Parameters are expressed by name with an appropriate, typed operator and value.

* The previous syntax is now deprecated syntax (for example, \`products\_purchased (id: 1234) = true).

* The `anniversary` expression is a modifier for a date filter, not a function. It determines whether a specified date falls on the annual anniversary of another data. For example, `anniversary ('metafields.facts.birth_date') = today`.

##### Support

The segmentation query syntax has limited support for function-type attributes.

#### `products_purchased`

This function returns a `Boolean`. Supported `<operator>` values are `=` and `!=`.

For example,

```sql
products_purchased NOT MATCHES ()
products_purchased MATCHES (id = 2012162031638)
products_purchased MATCHES (tag = 'Sports wear')
products_purchased MATCHES (id IN (2012162031638, 1012132033639))
```

##### Named parameters

###### `id` (optional)

```sql
products_purchased MATCHES (id = ID | id IN List<ID>)
```

Where `ID` is a single value and `List<ID>` is a set of comma-separated values wrapped in parenthesis. An implicit `OR` between values is applied for lists.

Each ID is a product ID.

####### Notes

* A single value in a list is valid.

* Multiple values must be provided as a list. For example `(1012132033639, 2012162031638, 32421429314657)`.

* A list can contain up to 500 IDs.

For example,

```sql
products_purchased MATCHES (id = 1012132033639)
products_purchased MATCHES (id IN (1012132033639, 2012162031638, 32421429314657))
products_purchased MATCHES (id NOT IN (1012132033639))
```

Omitting the `id` parameter returns results for all products.

###### `tag` (optional)

```sql
products_purchased MATCHES (tag = String)
```

Where `tag` is a product tag.

####### Notes

* A single tag can be provided.

For example,

```sql
products_purchased MATCHES (tag = 'Sports wear')
```

###### `date` (optional)

```sql
products_purchased MATCHES (date = Date?)
```

Where

```sql
-- (inclusive)
Date = {absoluteDate} | {dateOffset} | {namedDate} | BETWEEN {date} AND {date}
```

This parameter is the date when the product was purchased.

For example,

```sql
products_purchased MATCHES (id = 1012132033639, date = 2022-01-01)
products_purchased NOT MATCHES (date > -3m)
products_purchased MATCHES (tag = 'Sports wear', date >= -12m)
products_purchased MATCHES (id = 1012132033639, date BETWEEN -12m AND today)
```

Omitting the `date` parameter returns results from all time.

#### `shopify_email.EVENT()`

Shopify Email functions enable segmenting on Shopify Email events. They are namespaced under the `shopify_email.` prefix. The following events are supported:

* `bounced`
* `clicked`
* `delivered`
* `marked_as_spam`
* `opened`
* `unsubscribed`

All of these functions accept the same named parameters and return a `Boolean`.

For example,

```sql
shopify_email.opened MATCHES ()
shopify_email.opened MATCHES (activity_id = 5240029206)
shopify_email.opened NOT MATCHES (activity_id = 5240029206)
```

##### Named parameters

###### `activity_id` (optional)

```sql
shopify_email.EVENT MATCHES (activity_id = ID | activity_id IN List<ID>)
```

Where `ID` is a single value and `List<ID>` is a set of comma-separated values wrapped in parenthesis. An implicit `OR` between values is applied for lists.

Each ID is a marketing activity ID to filter on.

####### Notes

* A single value in a list is valid.

* Multiple values must be provided as a list. For example `(5240029206, 1932881090, 3250045832)`.

* A list can contain up to 500 IDs.

For example,

```sql
shopify_email.delivered MATCHES (activity_id = 5240029206)
shopify_email.opened MATCHES (activity_id IN (5240029206, 1932881090, 3250045832))
shopify_email.unsubscribed MATCHES (activity_id IN (5240029206))
```

Omitting the `activity_id` parameter returns results for all Shopify Email activities.

###### `date` (optional)

```sql
shopify_email.EVENT(date = Date?)
```

Where

```sql
-- (inclusive)
Date = {absoluteDate} | {dateOffset} | {namedDate} | BETWEEN {date} AND {date}
```

This parameter is the date for the Shopify Email event.

For example,

```sql
shopify_email.delivered MATCHES (activity_id = 5240029206, date = 2022-01-01)
shopify_email.marked_as_spam MATCHES (activity_id = 5240029206, date > -3m)
shopify_email.bounced NOT MATCHES (activity_id = 5240029206, date BETWEEN -12m AND today)
```

Omitting the `date` parameter returns results from all time.

#### Integer attributes

`Integer` attributes are `int64` types that support specific operators and conditions.

##### Operators

| Operators | Description | Example |
| - | - | - |
| `=` | Equal-to | `number_of_orders = 10` |
| `!=` | Not-equal-to | `number_of_orders != 10` |
| `>` | Greater than | `number_of_orders > 10` |
| `>=` | Greater than or equal to | `number_of_orders >= 10` |
| `<` | Less than | `number_of_orders &lt; 10` |
| `<=` | Less than or equal to | `number_of_orders <= 10` |
| `BETWEEN {value1} AND {value2}` | Equivalent to `value1 <= n <= value2` | `number_of_orders BETWEEN 100 AND 1000` |

##### Conditions

* Conditions accept only integer numbers.

* Floats aren't valid.

* Minimum value of `-9,223,372,036,854,775,808`.

* Maximum value of `9,223,372,036,854,775,807`, inclusive.

* Operators and functions returning a `Float`, for example `COUNT`, `SUM`, `MAX`, and `MEDIAN`, aren't supported for querying segments.

###### Formatting and separators

* Thousand separators, such as commas and spaces, aren't supported.

* Language-sensitive formatted numbers aren't supported.

#### List attributes

List attributes represent multi-value attributes. The values in the list have a type.

The arguments the operator admits will depend on the type of the values within the list. An example is `customer_tags`, which is a multi-value list of strings. Its full type is therefore `List<String>`.

Lists support the following operators and conditions.

##### Operators

| Operators | Description | Example |
| - | - | - |
| `CONTAINS` | Allows you to specify a single value ​​in a `WHERE` clause. The clause is `true` if the value matches an entry in the preceding list attribute. | `customer_tags CONTAINS 'vip'` `customer_cities CONTAINS 'US-CA-LosAngeles'` |
| `NOT CONTAINS` | True complement of `CONTAINS`. The clause is `true` if the value does not match an entry in the preceding list attribute. | `customer_tags NOT CONTAINS 'vip'` `customer_cities NOT CONTAINS 'US-CA-LosAngeles'` |

##### Conditions

* The semantics of `CONTAINS` as applied to a `LIST` is that the arguments must be a subset of the preceding list attribute.

* Segmentation queries currently use multiple clauses with connectors to specify multiple values, rather than a multi-argument form.

###### `List<String>` conditions

* `String` conditions accept UTF-8 characters and must be wrapped with single quotes `'`, similar to the [`ENUM` type in MySQL](https://dev.mysql.com/doc/refman/8.0/en/enum.html).

* Conditions are NOT case-sensitive and whitespaces are syntactically significant.

* Single quotes within a condition must be escaped (ie. `'\'VIP\''`).

###### `List<ID>` conditions

* ID is an alias for an unsigned integer. The underlying data type is a `uint64`.

* Conditions don't have to be wrapped in single quotes `'`.

#### String attributes

String attributes support specific operators and conditions.

##### Operators

| Operators | Description | Example |
| - | - | - |
| `=` | Equal-to | `customer_email_domain = 'example.com'` |
| `!=` | Not-equal-to | `customer_email_domain != 'example.com'` |

##### Conditions

* Conditions accept UTF-8 characters and must be wrapped around single quotes `'`.

* Conditions are case-sensitive and whitespaces are syntactically significant.

* Single quotes within a condition must be escaped. For example, `'\'VIP\''`).

* Conditions can be empty strings. The API verifies that the attribute exists and is an empty string.

* All operators/functions returning a `String`, such as `CONCAT`, `SUBSTR`, `LOWER`, `UPPER`, and `TRUNCATE`, are not supported for querying segments.

#### Grouped clauses

The following are syntax examples of grouped clauses.

##### Multiple clauses with same connector(s)

**Two clauses linked with `AND`**

```sql
email_subscription_status = 'SUBSCRIBED' AND customer_countries CONTAINS 'CA'
```

**Two clauses linked with `OR`**

```sql
email_subscription_status = 'SUBSCRIBED' OR customer_countries CONTAINS 'CA'
```

**Invalid query: Too many clauses (>10)**

```sql
customer_countries CONTAINS 'CA' OR customer_countries CONTAINS 'FR' OR customer_countries CONTAINS 'MX' OR customer_countries CONTAINS 'AU' OR customer_countries CONTAINS 'AX' OR customer_countries CONTAINS 'AZ' OR customer_countries CONTAINS 'FI' OR customer_countries CONTAINS 'BE' OR customer_countries CONTAINS 'TH' OR customer_countries CONTAINS 'ES' OR customer_countries CONTAINS 'BR'
```

##### Multiple clauses with different connectors

By default `AND` takes precedence over `OR`. Parenthesis are optional. For example, the following queries are equivalent.

```sql
email_subscription_status = 'SUBSCRIBED' AND customer_countries CONTAINS 'CA' OR amount_spent > 999.99
```

```sql
(email_subscription_status = 'SUBSCRIBED' AND customer_countries CONTAINS 'CA') OR amount_spent > 999.99
```

**Change implicit order of precedence: `OR` now takes precedence over `AND`**

```sql
email_subscription_status = 'SUBSCRIBED' AND (customer_countries CONTAINS 'CA' OR amount_spent > 999.99)
```

***

---
