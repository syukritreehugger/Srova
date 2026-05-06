# Shopify Shopify App React Router Reference (Indonesian / English)

> Referensi lengkap **Shopify App React Router** Shopify API yang disusun ulang dari https://shopify.dev/docs/api/shopify-app-react-router.
> Dokumen ini dirancang untuk pengembang berbahasa Indonesia, namun seluruh konten teknis (skema, tipe, nama field, contoh kode) dipertahankan dalam bahasa Inggris asli untuk memastikan akurasi.

| Item | Nilai |
|------|-------|
| Sumber | `https://shopify.dev/docs/api/shopify-app-react-router` |
| Total halaman | **27** |
| Tanggal kompilasi | 2026-05-01 |
| Bahasa | Indonesia (intro/ToC) + English (konten teknis) |



## Daftar Isi (Table of Contents)

- [Landing](#landing)
- [latest](#latest)
- [latest / apis / admin-api](#latest-apis-admin-api)
- [latest / apis / billing](#latest-apis-billing)
- [latest / apis / scopes](#latest-apis-scopes)
- [latest / apis / storefront-api](#latest-apis-storefront-api)
- [latest / app-proxy-components](#latest-app-proxy-components)
- [latest / app-proxy-components / appproxylink](#latest-app-proxy-components-appproxylink)
- [latest / authenticate](#latest-authenticate)
- [latest / authenticate / admin](#latest-authenticate-admin)
- [latest / authenticate / flow](#latest-authenticate-flow)
- [latest / authenticate / fulfillment-service](#latest-authenticate-fulfillment-service)
- [latest / authenticate / public / app-proxy](#latest-authenticate-public-app-proxy)
- [latest / authenticate / public / checkout](#latest-authenticate-public-checkout)
- [latest / authenticate / public / customer-account](#latest-authenticate-public-customer-account)
- [latest / authenticate / webhook](#latest-authenticate-webhook)
- [latest / entrypoints / appprovider](#latest-entrypoints-appprovider)
- [latest / entrypoints / appproxyprovider](#latest-entrypoints-appproxyprovider)
- [latest / entrypoints / shopifyapp](#latest-entrypoints-shopifyapp)
- [latest / guide-admin](#latest-guide-admin)
- [latest / guide-custom-apps](#latest-guide-custom-apps)
- [latest / guide-future-flags](#latest-guide-future-flags)
- [latest / guide-graphql-types](#latest-guide-graphql-types)
- [latest / guide-webhooks](#latest-guide-webhooks)
- [latest / unauthenticated](#latest-unauthenticated)
- [latest / unauthenticated / unauthenticated-admin](#latest-unauthenticated-unauthenticated-admin)
- [latest / unauthenticated / unauthenticated-storefront](#latest-unauthenticated-unauthenticated-storefront)


---



<a id="landing"></a>


## Shopify App package for React Router

The [@shopify/shopify-app-react-router](https://www.npmjs.com/package/@shopify/shopify-app-react-router) package enables [React Router](https://reactrouter.com/home) apps to authenticate with Shopify and make API calls. It uses [App Bridge](https://shopify.dev/docs/api/app-home) to enable apps to embed themselves in the Shopify Admin.

On this page learn the key concepts when building an app with this package.

### Quick start

The quickest way to create a new app is using the Shopify CLI, and the Shopify App Template.

Check out the [getting started guide](https://shopify.dev/docs/apps/build/scaffold-app), or the [app template](https://github.com/Shopify/shopify-app-template-react-router).

### Create an app

### Terminal

```sh
shopify app init --template=https://github.com/Shopify/shopify-app-template-react-router
```

***

### Configure the package

Using the `shopifyApp` function, you can configure the package's functionality for different app distributions types, access tokens, logging levels and future flags.

[- shopifyApp](https://shopify.dev/docs/api/shopify-app-react-router/entrypoints/shopifyapp)

### Configure ShopifyApp

### /app/shopify.server.ts

```ts
import {
  ApiVersion,
  LogSeverity,
  shopifyApp,
} from '@shopify/shopify-app-react-router/server';


const shopify = shopifyApp({
  apiKey: process.env.SHOPIFY_API_KEY!,
  apiSecretKey: process.env.SHOPIFY_API_SECRET!,
  appUrl: process.env.SHOPIFY_APP_URL!,
  apiVersion: ApiVersion.July25,
  logger: {
    level: LogSeverity.Debug, // Set the log level to debug
  },
  future: {
    exampleFlag: true, // Enable a future flag to true
  },
});
export default shopify;
```

***

### Make Admin API Graph​QL requests

Authenticated requests with the Admin API GraphQL client are made by calling the `admin.graphql` function. This function returns a GraphQL client that is authenticated with the Admin API.

[- admin.graphql](https://shopify.dev/docs/api/shopify-app-react-router/v0/guide-admin#graphql-api)

### Make a GraphQL request

### /app/routes/admin/$.tsx

```tsx
export const action = async ({ request }: ActionFunctionArgs) => {
    const { admin } = await authenticate.admin(request);


    const response = await admin.graphql(
      `#graphql
        mutation populateProduct($product: ProductCreateInput!) {
          productCreate(product: $product) {
            product {
              id
              variants(first: 10) {
                  nodes {
                    id
                    createdAt
                  }
                }
              }
            }
          }
        }`,
      {
        variables: {
          product: {
            title: 'Test Product',
          },
        },
      },
    );
    const responseJson = await response.json();
  };
```

***

### Add a new route to your app

Routes embedded in the Shopify Admin must be nested under an Admin layout route for proper authentication and functionality.

The template includes an admin route at `/app/routes/app.tsx` that handles App Bridge initialization, authenticates requests via `authenticate.admin`, provides error boundaries and headers required by the admin.

When creating new routes, place them in the `/app/routes/` directory with the `app.` prefix (e.g., `app.products.tsx`) to ensure they inherit these features. This structure ensures your app behaves correctly within the Shopify Admin and has access to authenticated API clients.

### Add a route

###### /app/routes/app.new\.tsx

```tsx
import { TitleBar } from "@shopify/app-bridge-react";

export default function AdditionalPage() {
  return (
    <s-page>
      <TitleBar title="Additional page"></TitleBar>
      <s-section heading="Multiple pages">
        <s-paragraph>
          The app template comes with an additional page which demonstrates how
          to create multiple pages within app navigation using{" "}
          <s-link
            href="https:shopify.dev/docs/apps/tools/app-bridge"
            target="_blank"
          >
            App Bridge
          </s-link>
        </s-paragraph>
      </s-section>
    </s-page>
  );
}
```

###### /app/routes/app.tsx

```tsx
import type {HeadersFunction, LoaderFunctionArgs} from 'react-router';
import {Link, Outlet, useLoaderData, useRouteError} from 'react-router';
import {boundary} from '@shopify/shopify-app-react-router/server';
import {NavMenu} from '@shopify/app-bridge-react';
import {AppProvider} from '@shopify/shopify-app-react-router/react';

import {authenticate} from '../shopify.server';

export const loader = async ({request}: LoaderFunctionArgs) => {
  await authenticate.admin(request);

  return {apiKey: process.env.SHOPIFY_API_KEY || ''};
};

export default function App() {
  const {apiKey} = useLoaderData<typeof loader>();

  return (
    <AppProvider embedded apiKey={apiKey}>
      <NavMenu>
        <Link to="/app" rel="home">
          Home
        </Link>
        <Link to="/app/additional">Additional page</Link>
      </NavMenu>
      <Outlet />
    </AppProvider>
  );
}

// Shopify needs React Router to catch some thrown responses, so that their headers are included in the response.
export function ErrorBoundary() {
  return boundary.error(useRouteError());
}

export const headers: HeadersFunction = (headersArgs) => {
  return boundary.headers(headersArgs);
};
```

***

### Authenticate Webhook Requests

The package provide functions to authenticate webhook requests. This function returns a webhook client that is authenticated with the Admin API.

**Note:**

Ensure your webhook route is not nested under you app layout route.

[- authenticate.webhook](https://shopify.dev/docs/api/shopify-app-react-router/v0/authenticate/webhook)

### Authenticate Webhook Requests

### /app/routes/webhooks.app.product\_updated.tsx

```tsx
export const action = async ({ request }: ActionFunctionArgs) => {
    const { topic, shop } = await authenticate.webhook(request);
    console.log(`Received ${topic} webhook for ${shop}`);


    return new Response();
};
```

***

### Session Storage

When using this package, installed shops access tokens will be stored in session storage.You can configure the storage mechanism by passing a custom storage object to the `shopifyApp` function.By default, the template will use Prisma and SQLite, but other session storage adapters are available.

**Note:**

The type of session storage you use may impact how your app will be deployed.

[- Session Storage](https://github.com/Shopify/shopify-app-js/tree/main/packages/apps/session-storage)

### Session Storage

### /app/shopify.server.ts

```ts
import { PrismaSessionStorage } from "@shopify/shopify-app-session-storage-prisma";
import prisma from "./db.server";


const shopify = shopifyApp({
  apiKey: process.env.SHOPIFY_API_KEY,
  apiSecretKey: process.env.SHOPIFY_API_SECRET || "",
  apiVersion: ApiVersion.January25,
  appUrl: process.env.SHOPIFY_APP_URL || "",
  // use Prisma session storage
  sessionStorage: new PrismaSessionStorage(prisma),
});


export const sessionStorage = shopify.sessionStorage;
```

***

### Deploy your app

You can deploy your app to your preferred hosting service that is compatible with JavaScript apps. Review our deployment guide to learn about the requirements for deploying your app.

[- Deploy your app](https://shopify.dev/docs/apps/launch/deployment)

***

---



<a id="latest"></a>


## Shopify App package for React Router

The [@shopify/shopify-app-react-router](https://www.npmjs.com/package/@shopify/shopify-app-react-router) package enables [React Router](https://reactrouter.com/home) apps to authenticate with Shopify and make API calls. It uses [App Bridge](https://shopify.dev/docs/api/app-home) to enable apps to embed themselves in the Shopify Admin.

On this page learn the key concepts when building an app with this package.

### Quick start

The quickest way to create a new app is using the Shopify CLI, and the Shopify App Template.

Check out the [getting started guide](https://shopify.dev/docs/apps/build/scaffold-app), or the [app template](https://github.com/Shopify/shopify-app-template-react-router).

### Create an app

### Terminal

```sh
shopify app init --template=https://github.com/Shopify/shopify-app-template-react-router
```

***

### Configure the package

Using the `shopifyApp` function, you can configure the package's functionality for different app distributions types, access tokens, logging levels and future flags.

[- shopifyApp](https://shopify.dev/docs/api/shopify-app-react-router/entrypoints/shopifyapp)

### Configure ShopifyApp

### /app/shopify.server.ts

```ts
import {
  ApiVersion,
  LogSeverity,
  shopifyApp,
} from '@shopify/shopify-app-react-router/server';


const shopify = shopifyApp({
  apiKey: process.env.SHOPIFY_API_KEY!,
  apiSecretKey: process.env.SHOPIFY_API_SECRET!,
  appUrl: process.env.SHOPIFY_APP_URL!,
  apiVersion: ApiVersion.July25,
  logger: {
    level: LogSeverity.Debug, // Set the log level to debug
  },
  future: {
    exampleFlag: true, // Enable a future flag to true
  },
});
export default shopify;
```

***

### Make Admin API Graph​QL requests

Authenticated requests with the Admin API GraphQL client are made by calling the `admin.graphql` function. This function returns a GraphQL client that is authenticated with the Admin API.

[- admin.graphql](https://shopify.dev/docs/api/shopify-app-react-router/v0/guide-admin#graphql-api)

### Make a GraphQL request

### /app/routes/admin/$.tsx

```tsx
export const action = async ({ request }: ActionFunctionArgs) => {
    const { admin } = await authenticate.admin(request);


    const response = await admin.graphql(
      `#graphql
        mutation populateProduct($product: ProductCreateInput!) {
          productCreate(product: $product) {
            product {
              id
              variants(first: 10) {
                  nodes {
                    id
                    createdAt
                  }
                }
              }
            }
          }
        }`,
      {
        variables: {
          product: {
            title: 'Test Product',
          },
        },
      },
    );
    const responseJson = await response.json();
  };
```

***

### Add a new route to your app

Routes embedded in the Shopify Admin must be nested under an Admin layout route for proper authentication and functionality.

The template includes an admin route at `/app/routes/app.tsx` that handles App Bridge initialization, authenticates requests via `authenticate.admin`, provides error boundaries and headers required by the admin.

When creating new routes, place them in the `/app/routes/` directory with the `app.` prefix (e.g., `app.products.tsx`) to ensure they inherit these features. This structure ensures your app behaves correctly within the Shopify Admin and has access to authenticated API clients.

### Add a route

###### /app/routes/app.new\.tsx

```tsx
import { TitleBar } from "@shopify/app-bridge-react";

export default function AdditionalPage() {
  return (
    <s-page>
      <TitleBar title="Additional page"></TitleBar>
      <s-section heading="Multiple pages">
        <s-paragraph>
          The app template comes with an additional page which demonstrates how
          to create multiple pages within app navigation using{" "}
          <s-link
            href="https:shopify.dev/docs/apps/tools/app-bridge"
            target="_blank"
          >
            App Bridge
          </s-link>
        </s-paragraph>
      </s-section>
    </s-page>
  );
}
```

###### /app/routes/app.tsx

```tsx
import type {HeadersFunction, LoaderFunctionArgs} from 'react-router';
import {Link, Outlet, useLoaderData, useRouteError} from 'react-router';
import {boundary} from '@shopify/shopify-app-react-router/server';
import {NavMenu} from '@shopify/app-bridge-react';
import {AppProvider} from '@shopify/shopify-app-react-router/react';

import {authenticate} from '../shopify.server';

export const loader = async ({request}: LoaderFunctionArgs) => {
  await authenticate.admin(request);

  return {apiKey: process.env.SHOPIFY_API_KEY || ''};
};

export default function App() {
  const {apiKey} = useLoaderData<typeof loader>();

  return (
    <AppProvider embedded apiKey={apiKey}>
      <NavMenu>
        <Link to="/app" rel="home">
          Home
        </Link>
        <Link to="/app/additional">Additional page</Link>
      </NavMenu>
      <Outlet />
    </AppProvider>
  );
}

// Shopify needs React Router to catch some thrown responses, so that their headers are included in the response.
export function ErrorBoundary() {
  return boundary.error(useRouteError());
}

export const headers: HeadersFunction = (headersArgs) => {
  return boundary.headers(headersArgs);
};
```

***

### Authenticate Webhook Requests

The package provide functions to authenticate webhook requests. This function returns a webhook client that is authenticated with the Admin API.

**Note:**

Ensure your webhook route is not nested under you app layout route.

[- authenticate.webhook](https://shopify.dev/docs/api/shopify-app-react-router/v0/authenticate/webhook)

### Authenticate Webhook Requests

### /app/routes/webhooks.app.product\_updated.tsx

```tsx
export const action = async ({ request }: ActionFunctionArgs) => {
    const { topic, shop } = await authenticate.webhook(request);
    console.log(`Received ${topic} webhook for ${shop}`);


    return new Response();
};
```

***

### Session Storage

When using this package, installed shops access tokens will be stored in session storage.You can configure the storage mechanism by passing a custom storage object to the `shopifyApp` function.By default, the template will use Prisma and SQLite, but other session storage adapters are available.

**Note:**

The type of session storage you use may impact how your app will be deployed.

[- Session Storage](https://github.com/Shopify/shopify-app-js/tree/main/packages/apps/session-storage)

### Session Storage

### /app/shopify.server.ts

```ts
import { PrismaSessionStorage } from "@shopify/shopify-app-session-storage-prisma";
import prisma from "./db.server";


const shopify = shopifyApp({
  apiKey: process.env.SHOPIFY_API_KEY,
  apiSecretKey: process.env.SHOPIFY_API_SECRET || "",
  apiVersion: ApiVersion.January25,
  appUrl: process.env.SHOPIFY_APP_URL || "",
  // use Prisma session storage
  sessionStorage: new PrismaSessionStorage(prisma),
});


export const sessionStorage = shopify.sessionStorage;
```

***

### Deploy your app

You can deploy your app to your preferred hosting service that is compatible with JavaScript apps. Review our deployment guide to learn about the requirements for deploying your app.

[- Deploy your app](https://shopify.dev/docs/apps/launch/deployment)

***

---



<a id="latest-apis-admin-api"></a>


## Admin API

Contains objects used to interact with the Admin API.

This object is returned as part of different contexts, such as [`admin`](https://shopify.dev/docs/api/shopify-app-react-router/v1/authenticate/admin), [`unauthenticated.admin`](https://shopify.dev/docs/api/shopify-app-react-router/v1/unauthenticated/unauthenticated-admin), and [`webhook`](https://shopify.dev/docs/api/shopify-app-react-router/v1/authenticate/webhook).

##### admin

Provides utilities that apps can use to make requests to the Admin API.

* **graphql**

  **GraphQLClient\<AdminOperations>**

  **required**

  Methods for interacting with the Shopify Admin GraphQL API

#### GraphQLClient

* query

  ```ts
  Operation extends keyof Operations
  ```

* options

  ```ts
  GraphQLQueryOptions<Operation, Operations>
  ```

returns

```ts
interface Promise<T> {
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;

    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
}, interface Promise<T> {}, Promise: PromiseConstructor, interface Promise<T> {
    readonly [Symbol.toStringTag]: string;
}, interface Promise<T> {
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
}
```

#### GraphQLQueryOptions

* apiVersion

  The version of the API to use for the request.

  ```ts
  ApiVersion
  ```

* headers

  Additional headers to include in the request.

  ```ts
  Record<string, any>
  ```

* signal

  An optional AbortSignal to cancel the request.

  ```ts
  AbortSignal
  ```

* tries

  The total number of times to try the request if it fails.

  ```ts
  number
  ```

* variables

  The variables to pass to the operation.

  ```ts
  ApiClientRequestOptions<Operation, Operations>
  ```

#### ApiVersion

* October24

  ```ts
  2024-10
  ```

* January25

  ```ts
  2025-01
  ```

* April25

  ```ts
  2025-04
  ```

* July25

  ```ts
  2025-07
  ```

* October25

  ```ts
  2025-10
  ```

* January26

  ```ts
  2026-01
  ```

* April26

  ```ts
  2026-04
  ```

* Unstable

  ```ts
  unstable
  ```

Examples

#### Examples

* #### Querying the GraphQL API

  ##### Description

  Use \`admin.graphql\` to make query / mutation requests.

  ##### /app/routes/\*\*\\/\*.ts

  ```ts
  import { ActionFunctionArgs } from "react-router";
  import { authenticate } from "../shopify.server";

  export const action = async ({ request }: ActionFunctionArgs) => {
    const { admin } = await authenticate.admin(request);

    const response = await admin.graphql(
      `#graphql
      mutation populateProduct($input: ProductInput!) {
        productCreate(input: $input) {
          product {
            id
          }
        }
      }`,
      {
        variables: {
          input: { title: "Product Name" },
        },
      },
    );

    const productData = await response.json();
    return ({
      productId: productData.data?.productCreate?.product?.id,
    });
  }
  ```

  ##### /app/shopify.server.ts

  ```ts
  import { shopifyApp } from "@shopify/shopify-app-react-router/server";

  const shopify = shopifyApp({
    // ...
  });
  export default shopify;
  export const authenticate = shopify.authenticate;
  ```

* #### Handling GraphQL errors

  ##### Description

  Catch \`GraphqlQueryError\` errors to see error messages from the API.

  ##### /app/routes/\*\*\\/\*.ts

  ```ts
  import { ActionFunctionArgs } from "react-router";
  import { authenticate } from "../shopify.server";

  export const action = async ({ request }: ActionFunctionArgs) => {
    const { admin } = await authenticate.admin(request);

    try {
      const response = await admin.graphql(
        `#graphql
        query incorrectQuery {
          products(first: 10) {
            nodes {
              not_a_field
            }
          }
        }`,
      );

      return ({ data: await response.json() });
    } catch (error) {
      if (error instanceof GraphqlQueryError) {
        // error.body.errors:
        // { graphQLErrors: [
        //   { message: "Field 'not_a_field' doesn't exist on type 'Product'" }
        // ] }
        return ({ errors: error.body?.errors }, { status: 500 });
      }
      return ({ message: "An error occurred" }, { status: 500 });
    }
  }
  ```

  ##### /app/shopify.server.ts

  ```ts
  import { shopifyApp } from "@shopify/shopify-app-react-router/server";

  const shopify = shopifyApp({
    // ...
  });
  export default shopify;
  export const authenticate = shopify.authenticate;
  ```

***

### Related

[Authenticate requests from Shopify Admin. - Authenticated context](https://shopify.dev/docs/api/shopify-app-react-router/v1/authenticate/admin)

[Interact with the Admin API on non-Shopify requests. - Unauthenticated context](https://shopify.dev/docs/api/shopify-app-react-router/v1/unauthenticated/unauthenticated-admin)

***

---



<a id="latest-apis-billing"></a>


## Billing

Contains function used to bill merchants for your app with the Billing API.

This object is returned on authenticated Admin requests.

**Note:**

[Managed App Pricing](https://shopify.dev/docs/apps/launch/billing/managed-pricing) is now available. Define your app’s pricing plans directly in the Shopify Partner Dashboard, without needing to use the Billing API.

##### billing

Provides utilities that apps can use to request billing for the app using the Admin API.

* **cancel**

  **(options: CancelBillingOptions) => Promise\<AppSubscription>**

  **required**

  Cancels an ongoing subscription, given its ID.

* **check**

  **\<Options extends CheckBillingOptions\<Config>>(options?: Options) => Promise\<BillingCheckResponseObject>**

  **required**

  Checks if the shop has an active payment for any plan defined in the `billing` config option.

* **createUsageRecord**

  **(options: CreateUsageRecordOptions) => Promise\<UsageRecord>**

  **required**

  Creates a usage record for an app subscription.

* **request**

  **(options: RequestBillingOptions\<Config>) => Promise\<never>**

  **required**

  Requests payment for the plan.

* **require**

  **(options: RequireBillingOptions\<Config>) => Promise\<BillingCheckResponseObject>**

  **required**

  Checks if the shop has an active payment for any plan defined in the `billing` config option.

* **updateUsageCappedAmount**

  **(options: UpdateUsageCappedAmountOptions) => Promise\<never>**

  **required**

  Updates the capped amount for a usage billing plan.

#### CancelBillingOptions

* isTest

  Whether to use the test mode. This prevents the credit card from being charged.

  ```ts
  boolean
  ```

* prorate

  Whether to issue prorated credits for the unused portion of the app subscription. There will be a corresponding deduction (based on revenue share) to your Partner account. For example, if a $10.00 app subscription (with 0% revenue share) is cancelled and prorated half way through the billing cycle, then the merchant will be credited $5.00 and that amount will be deducted from your Partner account.

  ```ts
  boolean
  ```

* subscriptionId

  The ID of the subscription to cancel.

  ```ts
  string
  ```

#### Options

* layout

  Whether to use the shop's theme layout around the Liquid content.

  ```ts
  boolean
  ```

#### CheckBillingOptions

* isTest

  Whether to include charges that were created on test mode. Test shops and demo shops cannot be charged.

  ```ts
  boolean
  ```

* plans

  The plans to check for. Must be one of the values defined in the \`billing\` config option.

  ```ts
  (keyof Config["billing"])[]
  ```

#### CreateUsageRecordOptions

* description

  The description of the app usage record.

  ```ts
  string
  ```

* idempotencyKey

  ```ts
  string
  ```

* isTest

  Whether to use the test mode. This prevents the credit card from being charged.

  ```ts
  boolean
  ```

* price

  The price of the app usage record.

  ```ts
  { amount: number; currencyCode: string; }
  ```

* subscriptionLineItemId

  ```ts
  string
  ```

#### RequestBillingOptions

* amount

  Amount to charge for this plan.

  ```ts
  number
  ```

* currencyCode

  Currency code for this plan.

  ```ts
  string
  ```

* interval

  Interval for this plan. Must be set to \`OneTime\`.

  ```ts
  BillingInterval.OneTime
  ```

* isTest

  Whether to use the test mode. This prevents the credit card from being charged. Test shops and demo shops cannot be charged.

  ```ts
  boolean
  ```

* lineItems

  The line items for this plan.

  ```ts
  ({ interval?: BillingInterval.Every30Days | BillingInterval.Annual; discount?: { durationLimitInIntervals?: number; value?: { amount?: number; percentage?: never; } | { amount?: never; percentage?: number; }; }; amount?: number; currencyCode?: string; } | { interval?: BillingInterval.Usage; amount?: number; terms?: string; currencyCode?: string; })[]
  ```

* plan

  The plan to request. Must be one of the values defined in the \`billing\` config option.

  ```ts
  keyof Config["billing"]
  ```

* replacementBehavior

  The replacement behavior to use for this plan.

  ```ts
  BillingReplacementBehavior
  ```

* returnUrl

  The URL to return to after the merchant approves the payment.

  ```ts
  string
  ```

* trialDays

  How many trial days to give before charging for this plan.

  ```ts
  number
  ```

#### RequireBillingOptions

* isTest

  Whether to include charges that were created on test mode. Test shops and demo shops cannot be charged.

  ```ts
  boolean
  ```

* onFailure

  How to handle the request if the shop doesn't have an active payment for any plan.

  ```ts
  (error: any) => Promise<Response>
  ```

* plans

  The plans to check for. Must be one of the values defined in the \`billing\` config option.

  ```ts
  (keyof Config["billing"])[]
  ```

#### UpdateUsageCappedAmountOptions

* cappedAmount

  The maximum charge for the usage billing plan.

  ```ts
  { amount: number; currencyCode: string; }
  ```

* subscriptionLineItemId

  The subscription line item ID to update.

  ```ts
  string
  ```

Examples

#### Examples

* #### Cancelling a subscription

  ##### Description

  Use the \`billing.cancel\` function to cancel an active subscription with the id returned from \`billing.require\`.

  ##### /app/routes/cancel-subscription.ts

  ```ts
  import { LoaderFunctionArgs } from "react-router";
  import { authenticate, MONTHLY_PLAN } from "../shopify.server";

  export const loader = async ({ request }: LoaderFunctionArgs) => {
    const { billing } = await authenticate.admin(request);
    const billingCheck = await billing.require({
      plans: [MONTHLY_PLAN],
      onFailure: async () => billing.request({ plan: MONTHLY_PLAN }),
    });

    const subscription = billingCheck.appSubscriptions[0];
    const cancelledSubscription = await billing.cancel({
      subscriptionId: subscription.id,
      isTest: true,
      prorate: true,
     });

    // App logic
  };
  ```

  ##### shopify.server.ts

  ```ts
  import { shopifyApp, BillingInterval } from "@shopify/shopify-app-react-router/server";

  export const MONTHLY_PLAN = 'Monthly subscription';
  export const ANNUAL_PLAN = 'Annual subscription';

  const shopify = shopifyApp({
    // ...etc
    billing: {
      [MONTHLY_PLAN]: {
        lineItems: [
          {
            amount: 5,
            currencyCode: 'USD',
            interval: BillingInterval.Every30Days,
          }
        ],
      },
      [ANNUAL_PLAN]: {
        lineItems: [
          {
            amount: 50,
            currencyCode: 'USD',
            interval: BillingInterval.Annual,
          }
        ],
      },
    }
  });
  export default shopify;
  export const authenticate = shopify.authenticate;
  ```

* #### Check what billing plans a merchant is subscribed to

  ##### Description

  Use billing.check if you want to determine which plans are in use. Unlike \`require\`, \`check\` does notthrow an error if no active billing plans are present.

  ##### /app/routes/\*\*\\/\*.ts

  ```ts
  import { LoaderFunctionArgs } from "react-router";
  import { authenticate, MONTHLY_PLAN } from "../shopify.server";

  export const loader = async ({ request }: LoaderFunctionArgs) => {
    const { billing } = await authenticate.admin(request);
    const { hasActivePayment, appSubscriptions } = await billing.check({
      plans: [MONTHLY_PLAN],
      isTest: false,
    });
    console.log(hasActivePayment);
    console.log(appSubscriptions);
  };
  ```

  ##### shopify.server.ts

  ```ts
  import { shopifyApp, BillingInterval } from "@shopify/shopify-app-react-router/server";

  export const MONTHLY_PLAN = 'Monthly subscription';
  export const ANNUAL_PLAN = 'Annual subscription';

  const shopify = shopifyApp({
    // ...etc
    billing: {
      [MONTHLY_PLAN]: {
        lineItems: [
          {
            amount: 5,
            currencyCode: 'USD',
            interval: BillingInterval.Every30Days,
          }
        ],
      },
      [ANNUAL_PLAN]: {
        lineItems: [
          {
            amount: 50,
            currencyCode: 'USD',
            interval: BillingInterval.Annual,
          }
        ],
      },
    }
  });
  export default shopify;
  export const authenticate = shopify.authenticate;
  ```

* ####

  ##### Description

  Use billing.check to see if any payments exist for the store, regardless of whether it's a test ormatches one or more plans.

  ##### /app/routes/\*\*\\/\*.ts

  ```ts
  import { LoaderFunctionArgs } from "react-router";
  import { authenticate, MONTHLY_PLAN } from "../shopify.server";

  export const loader = async ({ request }: LoaderFunctionArgs) => {
    const { billing } = await authenticate.admin(request);
    const { hasActivePayment, appSubscriptions } = await billing.check();
    // This will be true if any payment is found
    console.log(hasActivePayment);
    console.log(appSubscriptions);
  };
  ```

* #### Creating a usage record

  ##### Description

  Create a usage record for the active usage billing plan

  ##### /app/routes/create-usage-record.ts

  ```ts
  import { ActionFunctionArgs } from "react-router";
  import { authenticate, MONTHLY_PLAN } from "../shopify.server";

  export const action = async ({ request }: ActionFunctionArgs) => {
     const { billing } = await authenticate.admin(request);

    const chargeBilling = await billing.createUsageRecord({
       description: "Usage record for product creation",
       price: {
         amount: 1,
         currencyCode: "USD",
        },
       isTest: true,
     });
   console.log(chargeBilling);

    // App logic
  };
  ```

  ##### shopify.server.ts

  ```ts
  import { shopifyApp, BillingInterval } from "@shopify/shopify-app-react-router/server";

  export const USAGE_PLAN = 'Usage subscription';

  const shopify = shopifyApp({
    // ...etc
    billing: {
      [USAGE_PLAN]: {
        lineItems: [
          {
            amount: 5,
            currencyCode: 'USD',
            interval: BillingInterval.Usage,
          }
        ],
      },
    }
  });
  export default shopify;
  export const authenticate = shopify.authenticate;
  ```

* #### Using a custom return URL

  ##### Description

  Change where the merchant is returned to after approving the purchase using the \`returnUrl\` option.

  ##### /app/routes/\*\*\\/\*.ts

  ```ts
  import { LoaderFunctionArgs } from "react-router";
  import { authenticate, MONTHLY_PLAN } from "../shopify.server";

  export const loader = async ({ request }: LoaderFunctionArgs) => {
    const { billing } = await authenticate.admin(request);
    await billing.require({
      plans: [MONTHLY_PLAN],
      onFailure: async () => billing.request({
        plan: MONTHLY_PLAN,
        isTest: true,
        returnUrl: 'https://admin.shopify.com/store/my-store/apps/my-app/billing-page',
      }),
    });

    // App logic
  };
  ```

  ##### shopify.server.ts

  ```ts
  import { shopifyApp, BillingInterval } from "@shopify/shopify-app-react-router/server";

  export const MONTHLY_PLAN = 'Monthly subscription';
  export const ANNUAL_PLAN = 'Annual subscription';

  const shopify = shopifyApp({
    // ...etc
    billing: {
      [MONTHLY_PLAN]: {
        lineItems: [
          {
            amount: 5,
            currencyCode: 'USD',
            interval: BillingInterval.Every30Days,
          }
        ],
      },
      [ANNUAL_PLAN]: {
        lineItems: [
          {
            amount: 50,
            currencyCode: 'USD',
            interval: BillingInterval.Annual,
          }
        ],
      },
    }
  });
  export default shopify;
  export const authenticate = shopify.authenticate;
  ```

* #### Overriding plan settings

  ##### Description

  Customize the plan for a merchant when requesting billing. Any fields from the plan can be overridden, as long as the billing interval for line items matches the config.

  ##### /app/routes/\*\*\\/\*.ts

  ```ts
  import { LoaderFunctionArgs } from "react-router";
  import { authenticate, MONTHLY_PLAN } from "../shopify.server";

  export const loader = async ({ request }: LoaderFunctionArgs) => {
    const { billing } = await authenticate.admin(request);
    await billing.require({
      plans: [MONTHLY_PLAN],
      onFailure: async () => billing.request({
        plan: MONTHLY_PLAN,
        isTest: true,
        trialDays: 14,
        lineItems: [
          {
            interval: BillingInterval.Every30Days,
            discount: { value: { percentage: 0.1 } },
          },
        ],
      }),
    });

    // App logic
  };
  ```

  ##### shopify.server.ts

  ```ts
  import { shopifyApp, BillingInterval } from "@shopify/shopify-app-react-router/server";

  export const MONTHLY_PLAN = 'Monthly subscription';
  export const ANNUAL_PLAN = 'Annual subscription';

  const shopify = shopifyApp({
    // ...etc
    billing: {
      [MONTHLY_PLAN]: {
        lineItems: [
          {
            amount: 5,
            currencyCode: 'USD',
            interval: BillingInterval.Every30Days,
          }
        ],
      },
      [ANNUAL_PLAN]: {
        lineItems: [
          {
            amount: 50,
            currencyCode: 'USD',
            interval: BillingInterval.Annual,
          }
        ],
      },
    }
  });
  export default shopify;
  export const authenticate = shopify.authenticate;
  ```

* #### Requesting billing right away

  ##### Description

  Call \`billing.request\` in the \`onFailure\` callback to immediately redirect to the Shopify page to request payment.

  ##### /app/routes/\*\*\\/\*.ts

  ```ts
  import { LoaderFunctionArgs } from "react-router";
  import { authenticate, MONTHLY_PLAN } from "../shopify.server";

  export const loader = async ({ request }: LoaderFunctionArgs) => {
    const { billing } = await authenticate.admin(request);
    await billing.require({
      plans: [MONTHLY_PLAN],
      isTest: true,
      onFailure: async () => billing.request({ plan: MONTHLY_PLAN }),
    });

    // App logic
  };
  ```

  ##### shopify.server.ts

  ```ts
  import { shopifyApp, BillingInterval } from "@shopify/shopify-app-react-router/server";

  export const MONTHLY_PLAN = 'Monthly subscription';

  const shopify = shopifyApp({
    // ...etc
    billing: {
      [MONTHLY_PLAN]: {
        lineItems: [
          {
            amount: 5,
            currencyCode: 'USD',
            interval: BillingInterval.Every30Days,
          }
        ],
      },
    }
  });
  export default shopify;
  export const authenticate = shopify.authenticate;
  ```

* #### Redirect to a plan selection page

  ##### Description

  When the app has multiple plans, create a page in your App that allows the merchant to select a plan. If a merchant does not have the required plan you can redirect them to page in your app to select one.

  ##### /app/routes/\*\*\\/\*.ts

  ```ts
  import { LoaderFunctionArgs, redirect } from "react-router";
  import { authenticate, MONTHLY_PLAN, ANNUAL_PLAN } from "../shopify.server";

  export const loader = async ({ request }: LoaderFunctionArgs) => {
    const { billing } = await authenticate.admin(request);
    const billingCheck = await billing.require({
      plans: [MONTHLY_PLAN, ANNUAL_PLAN],
      isTest: true,
      onFailure: () => redirect('/select-plan'),
    });

    const subscription = billingCheck.appSubscriptions[0];
    console.log(`Shop is on ${subscription.name} (id ${subscription.id})`);

    // App logic
  };
  ```

  ##### shopify.server.ts

  ```ts
  import { shopifyApp, BillingInterval } from "@shopify/shopify-app-react-router/server";

  export const MONTHLY_PLAN = 'Monthly subscription';
  export const ANNUAL_PLAN = 'Annual subscription';

  const shopify = shopifyApp({
    // ...etc
    billing: {
      [MONTHLY_PLAN]: {
        lineItems: [
          {
            amount: 5,
            currencyCode: 'USD',
            interval: BillingInterval.Every30Days,
          }
        ],
      },
      [ANNUAL_PLAN]: {
        lineItems: [
          {
            amount: 50,
            currencyCode: 'USD',
            interval: BillingInterval.Annual,
          }
        ],
      },
    }
  });
  export default shopify;
  export const authenticate = shopify.authenticate;
  ```

* #### Updating the capped amount for a usage billing plan

  ##### Description

  Update the capped amount for the usage billing plan specified by \`subscriptionLineItemId\`.

  ##### /app/routes/\*\*\\/\*.ts

  ```ts
  import { ActionFunctionArgs } from "react-router";
  import { authenticate } from "../shopify.server";

  export const action = async ({ request }: ActionFunctionArgs) => {
    const { billing } = await authenticate.admin(request);

    await billing.updateUsageCappedAmount({
      subscriptionLineItemId: "gid://shopify/AppSubscriptionLineItem/12345?v=1&index=1",
      cappedAmount: {
        amount: 10,
        currencyCode: "USD"
      },
    });

    // App logic
  };
  ```

  ##### shopify.server.ts

  ```ts
  import { shopifyApp, BillingInterval } from "@shopify/shopify-app-react-router/server";

  export const USAGE_PLAN = 'Usage subscription';

  const shopify = shopifyApp({
    // ...etc
    billing: {
      [USAGE_PLAN]: {
        lineItems: [
          {
            amount: 5,
            currencyCode: 'USD',
            interval: BillingInterval.Usage,
            terms: "Usage based"
          }
        ],
      },
    }
  });
  export default shopify;
  export const authenticate = shopify.authenticate;
  ```

***

### Related

[Authenticate requests from Shopify Admin. - Admin context](https://shopify.dev/docs/api/shopify-app-react-router/v1/authenticate/admin)

***

---



<a id="latest-apis-scopes"></a>


## Scopes

Contains functions used to manage scopes for your app.

This object is returned on authenticated Admin requests.

##### scopes

Provides utilities that apps can use to [manage scopes](https://shopify.dev/docs/apps/build/authentication-authorization/app-installation/manage-access-scopes) for the app using the Admin API.

* **query**

  **() => Promise\<ScopesDetail>**

  **required**

  Queries Shopify for the scopes for this app on this shop

* **request**

  **(scopes: string\[]) => Promise\<void>**

  **required**

  Requests the merchant to grant the provided scopes for this app on this shop

  Warning: This method performs a server-side redirect.

* **revoke**

  **(scopes: string\[]) => Promise\<ScopesRevokeResponse>**

  **required**

  Revokes the provided scopes from this app on this shop

  Warning: This method throws an [error](https://shopify.dev/docs/api/admin-graphql/unstable/objects/AppRevokeAccessScopesAppRevokeScopeError) if the provided optional scopes contains a required scope.

#### ScopesDetail

* granted

  The scopes that have been granted on the shop for this app

  ```ts
  string[]
  ```

* optional

  The optional scopes that the app has declared in its configuration

  ```ts
  string[]
  ```

* required

  The required scopes that the app has declared in its configuration

  ```ts
  string[]
  ```

#### ScopesRevokeResponse

* revoked

  The scopes that have been revoked on the shop for this app

  ```ts
  string[]
  ```

Examples

#### Examples

* ####

  ##### Description

  Call \`scopes.query\` to get scope details.

  ##### /app.\_index.tsx

  ```ts
  import type { LoaderFunctionArgs } from "react-router";
  import { useLoaderData } from "react-router";
  import { authenticate } from "../shopify.server";
  import { json } from "react-router";

  export const loader = async ({ request }: LoaderFunctionArgs) => {
    const { scopes } = await authenticate.admin(request);

    const scopesDetail =  await scopes.query();

    return ({
      hasWriteProducts: scopesDetail.granted.includes('write_products'),
    });
  };

  export default function Index() {
    const {hasWriteProducts} = useLoaderData<typeof loader>();

    ...
  }
  ```

* ####

  ##### Description

  Call \`scopes.request\` to request optional scopes.

  ##### /app/routes/app.request.tsx

  ```ts
  import type { ActionFunctionArgs } from "react-router";
  import { useFetcher } from "react-router";
  import { authenticate } from "../shopify.server";
  import { json } from "react-router";

  // Example of an action to POST a request to for optional scopes
  export const action = async ({ request }: ActionFunctionArgs) => {
    const { scopes } = await authenticate.admin(request);

    const body = await request.formData();
    const scopesToRequest = body.getAll("scopes") as string[];

    // If the scopes are not already granted, a full page redirect to the request URL occurs
    await scopes.request(scopesToRequest);
    // otherwise return an empty response
    return ({});
  };

  export default function Index() {
    const fetcher = useFetcher<typeof action>();

    const handleRequest = () => {
      fetcher.submit({scopes: ["write_products"]}, {
        method: "POST",
      });
    };

    ...
  }
  ```

* ####

  ##### Description

  Call \`scopes.revoke\` to revoke optional scopes.

  ##### /app.\_index.tsx

  ```ts
  import type { ActionFunctionArgs } from "react-router";
  import { useFetcher } from "react-router";
  import { authenticate } from "../shopify.server";
  import { json } from "react-router";

  // Example of an action to POST optional scopes to revoke
  export const action = async ({ request }: ActionFunctionArgs) => {
    const { scopes } = await authenticate.admin(request);

    const body = await request.formData();
    const scopesToRevoke = body.getAll("scopes") as string[];

    const revokedResponse = await scopes.revoke(scopesToRevoke);

    return (revokedResponse);
  };

  export default function Index() {
    const fetcher = useFetcher<typeof action>();

    const handleRevoke = () => {
      fetcher.submit({scopes: ["write_products"]}, {
        method: "POST",
      });
    };

    ...
  }
  ```

***

### Related

[Authenticate requests from Shopify Admin. - Admin context](https://shopify.dev/docs/api/shopify-app-react-router/v1/authenticate/admin)

***

---



<a id="latest-apis-storefront-api"></a>


## Storefront API

Contains objects used to interact with the Storefront API.

This object is returned as part of different contexts, such as [`appProxy`](https://shopify.dev/docs/api/shopify-app-react-router/v1/authenticate/public/app-proxy), and [`unauthenticated.storefront`](https://shopify.dev/docs/api/shopify-app-react-router/v1/unauthenticated/unauthenticated-storefront).

##### storefront

Provides utilities that apps can use to make requests to the Storefront API.

* **graphql**

  **GraphQLClient\<StorefrontOperations>**

  **required**

  Method for interacting with the Shopify Storefront GraphQL API

  If you're getting incorrect type hints in the Shopify template, follow [these instructions](https://github.com/Shopify/shopify-app-template-react-router/tree/main#incorrect-graphql-hints).

#### GraphQLClient

* query

  ```ts
  Operation extends keyof Operations
  ```

* options

  ```ts
  GraphQLQueryOptions<Operation, Operations>
  ```

returns

```ts
interface Promise<T> {
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;

    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
}, interface Promise<T> {}, Promise: PromiseConstructor, interface Promise<T> {
    readonly [Symbol.toStringTag]: string;
}, interface Promise<T> {
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
}
```

#### GraphQLQueryOptions

* apiVersion

  The version of the API to use for the request.

  ```ts
  ApiVersion
  ```

* headers

  Additional headers to include in the request.

  ```ts
  Record<string, any>
  ```

* signal

  An optional AbortSignal to cancel the request.

  ```ts
  AbortSignal
  ```

* tries

  The total number of times to try the request if it fails.

  ```ts
  number
  ```

* variables

  The variables to pass to the operation.

  ```ts
  ApiClientRequestOptions<Operation, Operations>
  ```

#### ApiVersion

* October24

  ```ts
  2024-10
  ```

* January25

  ```ts
  2025-01
  ```

* April25

  ```ts
  2025-04
  ```

* July25

  ```ts
  2025-07
  ```

* October25

  ```ts
  2025-10
  ```

* January26

  ```ts
  2026-01
  ```

* April26

  ```ts
  2026-04
  ```

* Unstable

  ```ts
  unstable
  ```

Examples

#### Examples

* ####

  ##### Description

  Use \`storefront.graphql\` to make query / mutation requests.

  ##### app/routes/\*\*\\/.ts

  ```ts
  import { json } from "react-router";
  import { authenticate } from "../shopify.server";

  export async function action({ request }: ActionFunctionArgs) {
    const { storefront } = await authenticate.public.appProxy(request);

    const response = await storefront.graphql(`{blogs(first: 10) { edges { node { id } } } }`);

    return (await response.json());
  }
  ```

* #### Handling GraphQL errors

  ##### Description

  Catch \`GraphqlQueryError\` errors to see error messages from the API.

  ##### /app/routes/\*\*\\/\*.ts

  ```ts
  import { ActionFunctionArgs } from "react-router";
  import { authenticate } from "../shopify.server";

  export const action = async ({ request }: ActionFunctionArgs) => {
    const { storefront } = await authenticate.public.appProxy(request);

    try {
      const response = await storefront.graphql(
        `#graphql
        query incorrectQuery {
          products(first: 10) {
            nodes {
              not_a_field
            }
          }
        }`,
      );

      return ({ data: await response.json() });
    } catch (error) {
      if (error instanceof GraphqlQueryError) {
        // { errors: { graphQLErrors: [
        //   { message: "Field 'not_a_field' doesn't exist on type 'Product'" }
        // ] } }
        return ({ errors: error.body?.errors }, { status: 500 });
      }
      return ({ message: "An error occurred" }, { status: 500 });
    }
  }
  ```

  ##### /app/shopify.server.ts

  ```ts
  import { shopifyApp } from "@shopify/shopify-app-react-router/server";

  const shopify = shopifyApp({
    // ...
  });
  export default shopify;
  export const authenticate = shopify.authenticate;
  ```

***

### Related

[Authenticate requests from Shopify app proxies. - App proxy context](https://shopify.dev/docs/api/shopify-app-react-router/v1/authenticate/public/app-proxy)

[Interact with the Storefront API on non-Shopify requests. - Unauthenticated context](https://shopify.dev/docs/api/shopify-app-react-router/v1/unauthenticated/unauthenticated-storefront)

***

---



<a id="latest-app-proxy-components"></a>


## App proxy components

[App​Proxy​Link](https://shopify.dev/docs/api/shopify-app-react-router/latest/app-proxy-components/appproxylink)

[Sets up an \<a /> HTML element that works when rendered behind an app proxy.](https://shopify.dev/docs/api/shopify-app-react-router/latest/app-proxy-components/appproxylink)

***

---



<a id="latest-app-proxy-components-appproxylink"></a>


## AppProxyLink

Sets up an `<a />` HTML element that works when rendered behind an app proxy.

Supports any properties accepted by the `<a />` HTML element.

Examples

#### Examples

* ####

  ##### Description

  Use an \`AppProxyLink\` within an \`AppProxyProvider\` to link to a different proxied route.

  ##### /app/routes/\*\*\\/\*.ts

  ```ts
  import {authenticate} from '~/shopify.server';
  import {AppProxyProvider, AppProxyLink} from '@shopify/shopify-app-react-router/react';

  export async function loader({ request }) {
    await authenticate.public.appProxy(request);

    return json({ appUrl: process.env.SHOPIFY_APP_URL });
  }

  export default function App() {
    const { appUrl } = useLoaderData();

    return (
      <AppProxyProvider appUrl={appUrl}>
        <AppProxyLink href="/other-proxy-route">Link to another route</AppProxyLink>
      </AppProxyProvider>
    );
  }
  ```

***

### Related

[Authenticating app proxy requests. - authenticate.public.appProxy](https://shopify.dev/docs/api/shopify-app-react-router/v1/authenticate/public/app-proxy)

[Enable JavaScript in pages loaded through app proxies. - AppProxyProvider](https://shopify.dev/docs/api/shopify-app-react-router/v1/entrypoints/appproxyprovider)

***

---



<a id="latest-authenticate"></a>


## Authenticate

***

### Public

[App proxy](https://shopify.dev/docs/api/shopify-app-react-router/latest/authenticate/public/app-proxy)

[App proxies take requests to Shopify links, and redirect them to external links.](https://shopify.dev/docs/api/shopify-app-react-router/latest/authenticate/public/app-proxy)

[Checkout](https://shopify.dev/docs/api/shopify-app-react-router/latest/authenticate/public/checkout)

[The authenticate.public.checkout function ensures that checkout extension requests are coming from Shopify, and returns helpers to respond with the correct headers.](https://shopify.dev/docs/api/shopify-app-react-router/latest/authenticate/public/checkout)

[Customer account](https://shopify.dev/docs/api/shopify-app-react-router/latest/authenticate/public/customer-account)

[The authenticate.public.customerAccount function ensures that customer account extension requests are coming from Shopify, and returns helpers to respond with the correct headers.](https://shopify.dev/docs/api/shopify-app-react-router/latest/authenticate/public/customer-account)

***

### Uncategorized

[Admin](https://shopify.dev/docs/api/shopify-app-react-router/latest/authenticate/admin)

[Contains methods for authenticating and interacting with the Admin API.](https://shopify.dev/docs/api/shopify-app-react-router/latest/authenticate/admin)

[Flow](https://shopify.dev/docs/api/shopify-app-react-router/latest/authenticate/flow)

[Contains functions for verifying Shopify Flow extensions.](https://shopify.dev/docs/api/shopify-app-react-router/latest/authenticate/flow)

[Fulfillment Service](https://shopify.dev/docs/api/shopify-app-react-router/latest/authenticate/fulfillment-service)

[Contains functions for verifying fulfillment service requests.](https://shopify.dev/docs/api/shopify-app-react-router/latest/authenticate/fulfillment-service)

[Webhook](https://shopify.dev/docs/api/shopify-app-react-router/latest/authenticate/webhook)

[Contains functions for verifying Shopify webhooks.](https://shopify.dev/docs/api/shopify-app-react-router/latest/authenticate/webhook)

***

---



<a id="latest-authenticate-admin"></a>


## Admin

Contains methods for authenticating and interacting with the Admin API.

This function can handle requests for apps embedded in the Admin, Admin extensions, or non-embedded apps.

### authenticate.​admin(**[request](#authenticateadmin-propertydetail-request)**​)

Authenticates requests coming from the Shopify admin.

**Note:** The shape of the returned object changes depending on the \<code>distribution\</code> config. Merchant custom apps (\<code>\<span class="PreventFireFoxApplyingGapToWBR">App\<wbr/>Distribution.Shopify\<wbr/>Admin\</span>\</code>) are not embedded so do not return session tokens or redirect functionality. All other distributions are embedded and so they return a context with session tokens and redirect functionality.

#### Parameters

* **request**

  **Request**

  **required**

#### Returns

* **Promise\<AdminContext\<Config>>**

#### AdminContext

```ts
EmbeddedTypedAdminContext<Config> & ScopesContext
```

#### EmbeddedTypedAdminContext

```ts
Config['distribution'] extends AppDistribution.ShopifyAdmin
    ? NonEmbeddedAdminContext<Config>
    : EmbeddedAdminContext<Config>
```

#### AppDistribution

* AppStore

  ```ts
  app_store
  ```

* SingleMerchant

  ```ts
  single_merchant
  ```

* ShopifyAdmin

  ```ts
  shopify_admin
  ```

#### NonEmbeddedAdminContext

* admin

  Methods for interacting with the GraphQL / REST Admin APIs for the store that made the request.

  ```ts
  AdminApiContext
  ```

* billing

  Billing methods for this store, based on the plans defined in the \`billing\` config option.

  ```ts
  BillingContext<Config>
  ```

* cors

  A function that ensures the CORS headers are set correctly for the response.

  ```ts
  EnsureCORSFunction
  ```

* session

  The session for the user who made the request. This comes from the session storage which \`shopifyApp\` uses to store sessions in your database of choice. Use this to get shop or user-specific data.

  ```ts
  Session
  ```

#### AdminApiContext

Provides utilities that apps can use to make requests to the Admin API.

* graphql

  Methods for interacting with the Shopify Admin GraphQL API

  ```ts
  GraphQLClient<AdminOperations>
  ```

#### GraphQLClient

* query

  ```ts
  Operation extends keyof Operations
  ```

* options

  ```ts
  GraphQLQueryOptions<Operation, Operations>
  ```

returns

```ts
interface Promise<T> {
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;

    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
}, interface Promise<T> {}, Promise: PromiseConstructor, interface Promise<T> {
    readonly [Symbol.toStringTag]: string;
}, interface Promise<T> {
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
}
```

#### GraphQLQueryOptions

* apiVersion

  The version of the API to use for the request.

  ```ts
  ApiVersion
  ```

* headers

  Additional headers to include in the request.

  ```ts
  Record<string, any>
  ```

* signal

  An optional AbortSignal to cancel the request.

  ```ts
  AbortSignal
  ```

* tries

  The total number of times to try the request if it fails.

  ```ts
  number
  ```

* variables

  The variables to pass to the operation.

  ```ts
  ApiClientRequestOptions<Operation, Operations>
  ```

#### ApiVersion

* October24

  ```ts
  2024-10
  ```

* January25

  ```ts
  2025-01
  ```

* April25

  ```ts
  2025-04
  ```

* July25

  ```ts
  2025-07
  ```

* October25

  ```ts
  2025-10
  ```

* January26

  ```ts
  2026-01
  ```

* April26

  ```ts
  2026-04
  ```

* Unstable

  ```ts
  unstable
  ```

#### BillingContext

Provides utilities that apps can use to request billing for the app using the Admin API.

* cancel

  Cancels an ongoing subscription, given its ID.

  ```ts
  (options: CancelBillingOptions) => Promise<AppSubscription>
  ```

* check

  Checks if the shop has an active payment for any plan defined in the \`billing\` config option.

  ```ts
  <Options extends CheckBillingOptions<Config>>(options?: Options) => Promise<BillingCheckResponseObject>
  ```

* createUsageRecord

  Creates a usage record for an app subscription.

  ```ts
  (options: CreateUsageRecordOptions) => Promise<UsageRecord>
  ```

* request

  Requests payment for the plan.

  ```ts
  (options: RequestBillingOptions<Config>) => Promise<never>
  ```

* require

  Checks if the shop has an active payment for any plan defined in the \`billing\` config option.

  ```ts
  (options: RequireBillingOptions<Config>) => Promise<BillingCheckResponseObject>
  ```

* updateUsageCappedAmount

  Updates the capped amount for a usage billing plan.

  ```ts
  (options: UpdateUsageCappedAmountOptions) => Promise<never>
  ```

#### CancelBillingOptions

* isTest

  Whether to use the test mode. This prevents the credit card from being charged.

  ```ts
  boolean
  ```

* prorate

  Whether to issue prorated credits for the unused portion of the app subscription. There will be a corresponding deduction (based on revenue share) to your Partner account. For example, if a $10.00 app subscription (with 0% revenue share) is cancelled and prorated half way through the billing cycle, then the merchant will be credited $5.00 and that amount will be deducted from your Partner account.

  ```ts
  boolean
  ```

* subscriptionId

  The ID of the subscription to cancel.

  ```ts
  string
  ```

#### Options

* layout

  Whether to use the shop's theme layout around the Liquid content.

  ```ts
  boolean
  ```

#### CheckBillingOptions

* isTest

  Whether to include charges that were created on test mode. Test shops and demo shops cannot be charged.

  ```ts
  boolean
  ```

* plans

  The plans to check for. Must be one of the values defined in the \`billing\` config option.

  ```ts
  (keyof Config["billing"])[]
  ```

#### CreateUsageRecordOptions

* description

  The description of the app usage record.

  ```ts
  string
  ```

* idempotencyKey

  ```ts
  string
  ```

* isTest

  Whether to use the test mode. This prevents the credit card from being charged.

  ```ts
  boolean
  ```

* price

  The price of the app usage record.

  ```ts
  { amount: number; currencyCode: string; }
  ```

* subscriptionLineItemId

  ```ts
  string
  ```

#### RequestBillingOptions

* amount

  Amount to charge for this plan.

  ```ts
  number
  ```

* currencyCode

  Currency code for this plan.

  ```ts
  string
  ```

* interval

  Interval for this plan. Must be set to \`OneTime\`.

  ```ts
  BillingInterval.OneTime
  ```

* isTest

  Whether to use the test mode. This prevents the credit card from being charged. Test shops and demo shops cannot be charged.

  ```ts
  boolean
  ```

* lineItems

  The line items for this plan.

  ```ts
  ({ interval?: BillingInterval.Every30Days | BillingInterval.Annual; discount?: { durationLimitInIntervals?: number; value?: { amount?: number; percentage?: never; } | { amount?: never; percentage?: number; }; }; amount?: number; currencyCode?: string; } | { interval?: BillingInterval.Usage; amount?: number; terms?: string; currencyCode?: string; })[]
  ```

* plan

  The plan to request. Must be one of the values defined in the \`billing\` config option.

  ```ts
  keyof Config["billing"]
  ```

* replacementBehavior

  The replacement behavior to use for this plan.

  ```ts
  BillingReplacementBehavior
  ```

* returnUrl

  The URL to return to after the merchant approves the payment.

  ```ts
  string
  ```

* trialDays

  How many trial days to give before charging for this plan.

  ```ts
  number
  ```

#### RequireBillingOptions

* isTest

  Whether to include charges that were created on test mode. Test shops and demo shops cannot be charged.

  ```ts
  boolean
  ```

* onFailure

  How to handle the request if the shop doesn't have an active payment for any plan.

  ```ts
  (error: any) => Promise<Response>
  ```

* plans

  The plans to check for. Must be one of the values defined in the \`billing\` config option.

  ```ts
  (keyof Config["billing"])[]
  ```

#### UpdateUsageCappedAmountOptions

* cappedAmount

  The maximum charge for the usage billing plan.

  ```ts
  { amount: number; currencyCode: string; }
  ```

* subscriptionLineItemId

  The subscription line item ID to update.

  ```ts
  string
  ```

#### EnsureCORSFunction



#### Session

Stores App information from logged in merchants so they can make authenticated requests to the Admin API.

* id

  The unique identifier for the session.

  ```ts
  string
  ```

* shop

  The Shopify shop domain, such as \`example.myshopify.com\`.

  ```ts
  string
  ```

* state

  The state of the session. Used for the OAuth authentication code flow.

  ```ts
  string
  ```

* isOnline

  Whether the access token in the session is online or offline.

  ```ts
  boolean
  ```

* scope

  The desired scopes for the access token, at the time the session was created.

  ```ts
  string
  ```

* expires

  The date the access token expires.

  ```ts
  Date
  ```

* accessToken

  The access token for the session.

  ```ts
  string
  ```

* refreshToken

  The refresh token for the session.

  ```ts
  string
  ```

* refreshTokenExpires

  The date the refresh token expires.

  ```ts
  Date
  ```

* onlineAccessInfo

  Information on the user for the session. Only present for online sessions.

  ```ts
  OnlineAccessInfo
  ```

* isActive

  Whether the session is active. Active sessions have an access token that is not expired, and has has the given scopes if scopes is equal to a truthy value.

  ```ts
  (scopes: string | string[] | AuthScopes, withinMillisecondsOfExpiry?: number) => boolean
  ```

* isScopeChanged

  Whether the access token includes the given scopes if they are provided.

  ```ts
  (scopes: string | string[] | AuthScopes) => boolean
  ```

* isScopeIncluded

  Whether the access token includes the given scopes.

  ```ts
  (scopes: string | string[] | AuthScopes) => boolean
  ```

* isExpired

  Whether the access token is expired.

  ```ts
  (withinMillisecondsOfExpiry?: number) => boolean
  ```

* toObject

  Converts an object with data into a Session.

  ```ts
  () => SessionParams
  ```

* equals

  Checks whether the given session is equal to this session.

  ```ts
  (other: Session) => boolean
  ```

* toPropertyArray

  Converts the session into an array of key-value pairs.

  ```ts
  (returnUserData?: boolean) => [string, string | number | boolean][]
  ```

#### OnlineAccessInfo

* associated\_user

  The user associated with the access token.

  ```ts
  OnlineAccessUser
  ```

* associated\_user\_scope

  The effective set of scopes for the session.

  ```ts
  string
  ```

* expires\_in

  How long the access token is valid for, in seconds.

  ```ts
  number
  ```

#### OnlineAccessUser

* account\_owner

  Whether the user is the account owner.

  ```ts
  boolean
  ```

* collaborator

  Whether the user is a collaborator.

  ```ts
  boolean
  ```

* email

  The user's email address.

  ```ts
  string
  ```

* email\_verified

  Whether the user has verified their email address.

  ```ts
  boolean
  ```

* first\_name

  The user's first name.

  ```ts
  string
  ```

* id

  The user's ID.

  ```ts
  number
  ```

* last\_name

  The user's last name.

  ```ts
  string
  ```

* locale

  The user's locale.

  ```ts
  string
  ```

#### AuthScopes

A class that represents a set of access token scopes.

* has

  Checks whether the current set of scopes includes the given one.

  ```ts
  (scope: string | string[] | AuthScopes) => boolean
  ```

* equals

  Checks whether the current set of scopes equals the given one.

  ```ts
  (otherScopes: string | string[] | AuthScopes) => boolean
  ```

* toString

  Returns a comma-separated string with the current set of scopes.

  ```ts
  () => string
  ```

* toArray

  Returns an array with the current set of scopes.

  ```ts
  (returnOriginalScopes?: boolean) => any[]
  ```

#### SessionParams

* \[key: string]

  ```ts
  any
  ```

* accessToken

  The access token for the session.

  ```ts
  string
  ```

* expires

  The date the access token expires.

  ```ts
  Date
  ```

* id

  The unique identifier for the session.

  ```ts
  string
  ```

* isOnline

  Whether the access token in the session is online or offline.

  ```ts
  boolean
  ```

* onlineAccessInfo

  Information on the user for the session. Only present for online sessions.

  ```ts
  OnlineAccessInfo | StoredOnlineAccessInfo
  ```

* refreshToken

  The refresh token for the session.

  ```ts
  string
  ```

* refreshTokenExpires

  The date the refresh token expires.

  ```ts
  Date
  ```

* scope

  The scopes for the access token.

  ```ts
  string
  ```

* shop

  The Shopify shop domain.

  ```ts
  string
  ```

* state

  The state of the session. Used for the OAuth authentication code flow.

  ```ts
  string
  ```

#### StoredOnlineAccessInfo

```ts
Omit<OnlineAccessInfo, 'associated_user'> & {
  associated_user: Partial<OnlineAccessUser>;
}
```

#### EmbeddedAdminContext

* admin

  Methods for interacting with the GraphQL / REST Admin APIs for the store that made the request.

  ```ts
  AdminApiContext
  ```

* billing

  Billing methods for this store, based on the plans defined in the \`billing\` config option.

  ```ts
  BillingContext<Config>
  ```

* cors

  A function that ensures the CORS headers are set correctly for the response.

  ```ts
  EnsureCORSFunction
  ```

* redirect

  A function that redirects the user to a new page, ensuring that the appropriate parameters are set for embedded apps. Returned only for embedded apps (all apps except merchant custom apps).

  ```ts
  RedirectFunction
  ```

* session

  The session for the user who made the request. This comes from the session storage which \`shopifyApp\` uses to store sessions in your database of choice. Use this to get shop or user-specific data.

  ```ts
  Session
  ```

* sessionToken

  The decoded and validated session token for the request. Returned only for embedded apps (all distribution types except merchant custom apps)

  ```ts
  JwtPayload
  ```

#### RedirectFunction

* url

  ```ts
  string
  ```

* init

  ```ts
  RedirectInit
  ```

returns

```ts
Response
```

#### RedirectInit

```ts
number | (ResponseInit & {target?: RedirectTarget})
```

#### RedirectTarget

```ts
'_self' | '_parent' | '_top' | '_blank'
```

#### ScopesContext

* scopes

  Methods to manage scopes for the store that made the request.

  ```ts
  ScopesApiContext
  ```

#### ScopesApiContext

Provides utilities that apps can use to \[manage scopes]\(https://shopify.dev/docs/apps/build/authentication-authorization/app-installation/manage-access-scopes) for the app using the Admin API.

* query

  Queries Shopify for the scopes for this app on this shop

  ```ts
  () => Promise<ScopesDetail>
  ```

* request

  Requests the merchant to grant the provided scopes for this app on this shop Warning: This method performs a server-side redirect.

  ```ts
  (scopes: string[]) => Promise<void>
  ```

* revoke

  Revokes the provided scopes from this app on this shop Warning: This method throws an \[error]\(https://shopify.dev/docs/api/admin-graphql/unstable/objects/AppRevokeAccessScopesAppRevokeScopeError) if the provided optional scopes contains a required scope.

  ```ts
  (scopes: string[]) => Promise<ScopesRevokeResponse>
  ```

#### ScopesDetail

* granted

  The scopes that have been granted on the shop for this app

  ```ts
  string[]
  ```

* optional

  The optional scopes that the app has declared in its configuration

  ```ts
  string[]
  ```

* required

  The required scopes that the app has declared in its configuration

  ```ts
  string[]
  ```

#### ScopesRevokeResponse

* revoked

  The scopes that have been revoked on the shop for this app

  ```ts
  string[]
  ```

Examples

#### Examples

* ####

  ##### Description

  Authenticate, run API mutation, and redirect

  ##### /app/routes/\*\*.ts

  ```ts
  import {type ActionFunctionArgs, data} from 'react-router';
  import {GraphqlQueryError} from '@shopify/shopify-api';

  import {authenticate} from '../shopify.server';

  export const action = async ({request}: ActionFunctionArgs) => {
    const {admin, redirect} = await authenticate.admin(request);

    try {
      await admin.graphql(
        `#graphql
        mutation updateProductTitle($input: ProductInput!) {
          productUpdate(input: $input) {
            product {
              id
            }
          }
        }`,
        {
          variables: {
            input: {id: '123', title: 'New title'},
          },
        },
      );

      return redirect('/app/product-updated');
    } catch (error) {
      if (error instanceof GraphqlQueryError) {
        return data({errors: error.body?.errors}, {status: 500});
      }

      return new Response('Failed to update product title', {status: 500});
    }
  };
  ```

* ####

  ##### Description

  Use the \`cors\` helper to ensure your app can respond to requests from admin extensions.

  ##### /app/routes/admin/my-route.ts

  ```ts
  import { LoaderFunctionArgs, json } from "react-router";
  import { authenticate } from "../shopify.server";
  import { getMyAppData } from "~/db/model.server";

  export const loader = async ({ request }: LoaderFunctionArgs) => {
    const { session, cors } = await authenticate.admin(request);
    return cors(await getMyAppData({user: session.onlineAccessInfo!.id})));
  };
  ```

* ####

  ##### Description

  Use the \`redirect\` helper to safely redirect between pages.

  ##### /app/routes/admin/my-route.ts

  ```ts
  import { LoaderFunctionArgs, json } from "react-router";
  import { authenticate } from "../shopify.server";

  export const loader = async ({ request }: LoaderFunctionArgs) => {
    const { session, redirect } = await authenticate.admin(request);
    return redirect("/");
  };
  ```

* ####

  ##### Description

  Redirects to a product page in the Shopify admin. Pass in a \`target\` option of \`\_top\` or \`\_parent\` to navigate in the current window, or \`\_blank\` to open a new tab.

  ##### /app/routes/admin/my-route.ts

  ```ts
  import { LoaderFunctionArgs, json } from "react-router";
  import { authenticate } from "../shopify.server";

  export const loader = async ({ request }: LoaderFunctionArgs) => {
    const { session, redirect } = await authenticate.admin(request);
    return redirect("shopify://admin/products/123456", { target: '_parent' });
  };
  ```

* ####

  ##### Description

  Pass in a \`target\` option of \`\_top\` or \`\_parent\` to navigate in the current window, or \`\_blank\` to open a new tab.

  ##### /app/routes/admin/my-route.ts

  ```ts
  import { LoaderFunctionArgs, json } from "react-router";
  import { authenticate } from "../shopify.server";

  export const loader = async ({ request }: LoaderFunctionArgs) => {
    const { session, redirect } = await authenticate.admin(request);
    return redirect("/", { target: '_parent' });
  };
  ```

* #### Using offline sessions

  ##### Description

  Get your app's shop-specific data using an offline session.

  ##### /app/routes/\*\*\\/\*.ts

  ```ts
  import { LoaderFunctionArgs, json } from "react-router";
  import { authenticate } from "../shopify.server";
  import { getMyAppData } from "~/db/model.server";

  export const loader = async ({ request }: LoaderFunctionArgs) => {
    const { session } = await authenticate.admin(request);
    return (await getMyAppData({shop: session.shop}));
  };
  ```

  ##### shopify.server.ts

  ```ts
  import { shopifyApp } from "@shopify/shopify-app-react-router/server";

  const shopify = shopifyApp({
    // ...etc
  });
  export default shopify;
  export const authenticate = shopify.authenticate;
  ```

* #### Using online sessions

  ##### Description

  Get your app's user-specific data using an online session.

  ##### /app/routes/\*\*\\/\*.ts

  ```ts
  import { LoaderFunctionArgs, json } from "react-router";
  import { authenticate } from "../shopify.server";
  import { getMyAppData } from "~/db/model.server";

  export const loader = async ({ request }: LoaderFunctionArgs) => {
    const { session } = await authenticate.admin(request);
    return (await getMyAppData({user: session.onlineAccessInfo!.id}));
  };
  ```

  ##### shopify.server.ts

  ```ts
  import { shopifyApp } from "@shopify/shopify-app-react-router/server";

  const shopify = shopifyApp({
    // ...etc
    useOnlineTokens: true,
  });
  export default shopify;
  export const authenticate = shopify.authenticate;
  ```

* #### Using the decoded session token

  ##### Description

  Get user-specific data using the \`sessionToken\` object.

  ##### /app/routes/\*\*\\/\*.ts

  ```ts
  import { LoaderFunctionArgs, json } from "react-router";
  import { authenticate } from "../shopify.server";
  import { getMyAppData } from "~/db/model.server";

  export const loader = async ({ request }: LoaderFunctionArgs) => {
    const { sessionToken } = await authenticate.admin(
      request
    );
    return (await getMyAppData({user: sessionToken.sub}));
  };
  ```

  ##### shopify.server.ts

  ```ts
  import { shopifyApp } from "@shopify/shopify-app-react-router/server";

  const shopify = shopifyApp({
    // ...etc
    useOnlineTokens: true,
  });
  export default shopify;
  export const authenticate = shopify.authenticate;
  ```

* #### Querying the GraphQL API

  ##### Description

  Use \`admin.graphql\` to make query / mutation requests.

  ##### /app/routes/\*\*\\/\*.ts

  ```ts
  import { ActionFunctionArgs } from "react-router";
  import { authenticate } from "../shopify.server";

  export const action = async ({ request }: ActionFunctionArgs) => {
    const { admin } = await authenticate.admin(request);

    const response = await admin.graphql(
      `#graphql
      mutation populateProduct($input: ProductInput!) {
        productCreate(input: $input) {
          product {
            id
          }
        }
      }`,
      {
        variables: {
          input: { title: "Product Name" },
        },
      },
    );

    const productData = await response.json();
    return ({
      productId: productData.data?.productCreate?.product?.id,
    });
  }
  ```

  ##### /app/shopify.server.ts

  ```ts
  import { shopifyApp } from "@shopify/shopify-app-react-router/server";

  const shopify = shopifyApp({
    // ...
  });
  export default shopify;
  export const authenticate = shopify.authenticate;
  ```

* #### Handling GraphQL errors

  ##### Description

  Catch \`GraphqlQueryError\` errors to see error messages from the API.

  ##### /app/routes/\*\*\\/\*.ts

  ```ts
  import { ActionFunctionArgs } from "react-router";
  import { authenticate } from "../shopify.server";

  export const action = async ({ request }: ActionFunctionArgs) => {
    const { admin } = await authenticate.admin(request);

    try {
      const response = await admin.graphql(
        `#graphql
        query incorrectQuery {
          products(first: 10) {
            nodes {
              not_a_field
            }
          }
        }`,
      );

      return ({ data: await response.json() });
    } catch (error) {
      if (error instanceof GraphqlQueryError) {
        // error.body.errors:
        // { graphQLErrors: [
        //   { message: "Field 'not_a_field' doesn't exist on type 'Product'" }
        // ] }
        return ({ errors: error.body?.errors }, { status: 500 });
      }
      return ({ message: "An error occurred" }, { status: 500 });
    }
  }
  ```

  ##### /app/shopify.server.ts

  ```ts
  import { shopifyApp } from "@shopify/shopify-app-react-router/server";

  const shopify = shopifyApp({
    // ...
  });
  export default shopify;
  export const authenticate = shopify.authenticate;
  ```

* #### Cancelling a subscription

  ##### Description

  Use the \`billing.cancel\` function to cancel an active subscription with the id returned from \`billing.require\`.

  ##### /app/routes/cancel-subscription.ts

  ```ts
  import { LoaderFunctionArgs } from "react-router";
  import { authenticate, MONTHLY_PLAN } from "../shopify.server";

  export const loader = async ({ request }: LoaderFunctionArgs) => {
    const { billing } = await authenticate.admin(request);
    const billingCheck = await billing.require({
      plans: [MONTHLY_PLAN],
      onFailure: async () => billing.request({ plan: MONTHLY_PLAN }),
    });

    const subscription = billingCheck.appSubscriptions[0];
    const cancelledSubscription = await billing.cancel({
      subscriptionId: subscription.id,
      isTest: true,
      prorate: true,
     });

    // App logic
  };
  ```

  ##### shopify.server.ts

  ```ts
  import { shopifyApp, BillingInterval } from "@shopify/shopify-app-react-router/server";

  export const MONTHLY_PLAN = 'Monthly subscription';
  export const ANNUAL_PLAN = 'Annual subscription';

  const shopify = shopifyApp({
    // ...etc
    billing: {
      [MONTHLY_PLAN]: {
        lineItems: [
          {
            amount: 5,
            currencyCode: 'USD',
            interval: BillingInterval.Every30Days,
          }
        ],
      },
      [ANNUAL_PLAN]: {
        lineItems: [
          {
            amount: 50,
            currencyCode: 'USD',
            interval: BillingInterval.Annual,
          }
        ],
      },
    }
  });
  export default shopify;
  export const authenticate = shopify.authenticate;
  ```

* #### Check what billing plans a merchant is subscribed to

  ##### Description

  Use billing.check if you want to determine which plans are in use. Unlike \`require\`, \`check\` does notthrow an error if no active billing plans are present.

  ##### /app/routes/\*\*\\/\*.ts

  ```ts
  import { LoaderFunctionArgs } from "react-router";
  import { authenticate, MONTHLY_PLAN } from "../shopify.server";

  export const loader = async ({ request }: LoaderFunctionArgs) => {
    const { billing } = await authenticate.admin(request);
    const { hasActivePayment, appSubscriptions } = await billing.check({
      plans: [MONTHLY_PLAN],
      isTest: false,
    });
    console.log(hasActivePayment);
    console.log(appSubscriptions);
  };
  ```

  ##### shopify.server.ts

  ```ts
  import { shopifyApp, BillingInterval } from "@shopify/shopify-app-react-router/server";

  export const MONTHLY_PLAN = 'Monthly subscription';
  export const ANNUAL_PLAN = 'Annual subscription';

  const shopify = shopifyApp({
    // ...etc
    billing: {
      [MONTHLY_PLAN]: {
        lineItems: [
          {
            amount: 5,
            currencyCode: 'USD',
            interval: BillingInterval.Every30Days,
          }
        ],
      },
      [ANNUAL_PLAN]: {
        lineItems: [
          {
            amount: 50,
            currencyCode: 'USD',
            interval: BillingInterval.Annual,
          }
        ],
      },
    }
  });
  export default shopify;
  export const authenticate = shopify.authenticate;
  ```

* ####

  ##### Description

  Use billing.check to see if any payments exist for the store, regardless of whether it's a test ormatches one or more plans.

  ##### /app/routes/\*\*\\/\*.ts

  ```ts
  import { LoaderFunctionArgs } from "react-router";
  import { authenticate, MONTHLY_PLAN } from "../shopify.server";

  export const loader = async ({ request }: LoaderFunctionArgs) => {
    const { billing } = await authenticate.admin(request);
    const { hasActivePayment, appSubscriptions } = await billing.check();
    // This will be true if any payment is found
    console.log(hasActivePayment);
    console.log(appSubscriptions);
  };
  ```

* #### Creating a usage record

  ##### Description

  Create a usage record for the active usage billing plan

  ##### /app/routes/create-usage-record.ts

  ```ts
  import { ActionFunctionArgs } from "react-router";
  import { authenticate, MONTHLY_PLAN } from "../shopify.server";

  export const action = async ({ request }: ActionFunctionArgs) => {
     const { billing } = await authenticate.admin(request);

    const chargeBilling = await billing.createUsageRecord({
       description: "Usage record for product creation",
       price: {
         amount: 1,
         currencyCode: "USD",
        },
       isTest: true,
     });
   console.log(chargeBilling);

    // App logic
  };
  ```

  ##### shopify.server.ts

  ```ts
  import { shopifyApp, BillingInterval } from "@shopify/shopify-app-react-router/server";

  export const USAGE_PLAN = 'Usage subscription';

  const shopify = shopifyApp({
    // ...etc
    billing: {
      [USAGE_PLAN]: {
        lineItems: [
          {
            amount: 5,
            currencyCode: 'USD',
            interval: BillingInterval.Usage,
          }
        ],
      },
    }
  });
  export default shopify;
  export const authenticate = shopify.authenticate;
  ```

* #### Using a custom return URL

  ##### Description

  Change where the merchant is returned to after approving the purchase using the \`returnUrl\` option.

  ##### /app/routes/\*\*\\/\*.ts

  ```ts
  import { LoaderFunctionArgs } from "react-router";
  import { authenticate, MONTHLY_PLAN } from "../shopify.server";

  export const loader = async ({ request }: LoaderFunctionArgs) => {
    const { billing } = await authenticate.admin(request);
    await billing.require({
      plans: [MONTHLY_PLAN],
      onFailure: async () => billing.request({
        plan: MONTHLY_PLAN,
        isTest: true,
        returnUrl: 'https://admin.shopify.com/store/my-store/apps/my-app/billing-page',
      }),
    });

    // App logic
  };
  ```

  ##### shopify.server.ts

  ```ts
  import { shopifyApp, BillingInterval } from "@shopify/shopify-app-react-router/server";

  export const MONTHLY_PLAN = 'Monthly subscription';
  export const ANNUAL_PLAN = 'Annual subscription';

  const shopify = shopifyApp({
    // ...etc
    billing: {
      [MONTHLY_PLAN]: {
        lineItems: [
          {
            amount: 5,
            currencyCode: 'USD',
            interval: BillingInterval.Every30Days,
          }
        ],
      },
      [ANNUAL_PLAN]: {
        lineItems: [
          {
            amount: 50,
            currencyCode: 'USD',
            interval: BillingInterval.Annual,
          }
        ],
      },
    }
  });
  export default shopify;
  export const authenticate = shopify.authenticate;
  ```

* #### Overriding plan settings

  ##### Description

  Customize the plan for a merchant when requesting billing. Any fields from the plan can be overridden, as long as the billing interval for line items matches the config.

  ##### /app/routes/\*\*\\/\*.ts

  ```ts
  import { LoaderFunctionArgs } from "react-router";
  import { authenticate, MONTHLY_PLAN } from "../shopify.server";

  export const loader = async ({ request }: LoaderFunctionArgs) => {
    const { billing } = await authenticate.admin(request);
    await billing.require({
      plans: [MONTHLY_PLAN],
      onFailure: async () => billing.request({
        plan: MONTHLY_PLAN,
        isTest: true,
        trialDays: 14,
        lineItems: [
          {
            interval: BillingInterval.Every30Days,
            discount: { value: { percentage: 0.1 } },
          },
        ],
      }),
    });

    // App logic
  };
  ```

  ##### shopify.server.ts

  ```ts
  import { shopifyApp, BillingInterval } from "@shopify/shopify-app-react-router/server";

  export const MONTHLY_PLAN = 'Monthly subscription';
  export const ANNUAL_PLAN = 'Annual subscription';

  const shopify = shopifyApp({
    // ...etc
    billing: {
      [MONTHLY_PLAN]: {
        lineItems: [
          {
            amount: 5,
            currencyCode: 'USD',
            interval: BillingInterval.Every30Days,
          }
        ],
      },
      [ANNUAL_PLAN]: {
        lineItems: [
          {
            amount: 50,
            currencyCode: 'USD',
            interval: BillingInterval.Annual,
          }
        ],
      },
    }
  });
  export default shopify;
  export const authenticate = shopify.authenticate;
  ```

* #### Requesting billing right away

  ##### Description

  Call \`billing.request\` in the \`onFailure\` callback to immediately redirect to the Shopify page to request payment.

  ##### /app/routes/\*\*\\/\*.ts

  ```ts
  import { LoaderFunctionArgs } from "react-router";
  import { authenticate, MONTHLY_PLAN } from "../shopify.server";

  export const loader = async ({ request }: LoaderFunctionArgs) => {
    const { billing } = await authenticate.admin(request);
    await billing.require({
      plans: [MONTHLY_PLAN],
      isTest: true,
      onFailure: async () => billing.request({ plan: MONTHLY_PLAN }),
    });

    // App logic
  };
  ```

  ##### shopify.server.ts

  ```ts
  import { shopifyApp, BillingInterval } from "@shopify/shopify-app-react-router/server";

  export const MONTHLY_PLAN = 'Monthly subscription';

  const shopify = shopifyApp({
    // ...etc
    billing: {
      [MONTHLY_PLAN]: {
        lineItems: [
          {
            amount: 5,
            currencyCode: 'USD',
            interval: BillingInterval.Every30Days,
          }
        ],
      },
    }
  });
  export default shopify;
  export const authenticate = shopify.authenticate;
  ```

* #### Redirect to a plan selection page

  ##### Description

  When the app has multiple plans, create a page in your App that allows the merchant to select a plan. If a merchant does not have the required plan you can redirect them to page in your app to select one.

  ##### /app/routes/\*\*\\/\*.ts

  ```ts
  import { LoaderFunctionArgs, redirect } from "react-router";
  import { authenticate, MONTHLY_PLAN, ANNUAL_PLAN } from "../shopify.server";

  export const loader = async ({ request }: LoaderFunctionArgs) => {
    const { billing } = await authenticate.admin(request);
    const billingCheck = await billing.require({
      plans: [MONTHLY_PLAN, ANNUAL_PLAN],
      isTest: true,
      onFailure: () => redirect('/select-plan'),
    });

    const subscription = billingCheck.appSubscriptions[0];
    console.log(`Shop is on ${subscription.name} (id ${subscription.id})`);

    // App logic
  };
  ```

  ##### shopify.server.ts

  ```ts
  import { shopifyApp, BillingInterval } from "@shopify/shopify-app-react-router/server";

  export const MONTHLY_PLAN = 'Monthly subscription';
  export const ANNUAL_PLAN = 'Annual subscription';

  const shopify = shopifyApp({
    // ...etc
    billing: {
      [MONTHLY_PLAN]: {
        lineItems: [
          {
            amount: 5,
            currencyCode: 'USD',
            interval: BillingInterval.Every30Days,
          }
        ],
      },
      [ANNUAL_PLAN]: {
        lineItems: [
          {
            amount: 50,
            currencyCode: 'USD',
            interval: BillingInterval.Annual,
          }
        ],
      },
    }
  });
  export default shopify;
  export const authenticate = shopify.authenticate;
  ```

* #### Updating the capped amount for a usage billing plan

  ##### Description

  Update the capped amount for the usage billing plan specified by \`subscriptionLineItemId\`.

  ##### /app/routes/\*\*\\/\*.ts

  ```ts
  import { ActionFunctionArgs } from "react-router";
  import { authenticate } from "../shopify.server";

  export const action = async ({ request }: ActionFunctionArgs) => {
    const { billing } = await authenticate.admin(request);

    await billing.updateUsageCappedAmount({
      subscriptionLineItemId: "gid://shopify/AppSubscriptionLineItem/12345?v=1&index=1",
      cappedAmount: {
        amount: 10,
        currencyCode: "USD"
      },
    });

    // App logic
  };
  ```

  ##### shopify.server.ts

  ```ts
  import { shopifyApp, BillingInterval } from "@shopify/shopify-app-react-router/server";

  export const USAGE_PLAN = 'Usage subscription';

  const shopify = shopifyApp({
    // ...etc
    billing: {
      [USAGE_PLAN]: {
        lineItems: [
          {
            amount: 5,
            currencyCode: 'USD',
            interval: BillingInterval.Usage,
            terms: "Usage based"
          }
        ],
      },
    }
  });
  export default shopify;
  export const authenticate = shopify.authenticate;
  ```

* ####

  ##### Description

  Call \`scopes.query\` to get scope details.

  ##### /app.\_index.tsx

  ```ts
  import type { LoaderFunctionArgs } from "react-router";
  import { useLoaderData } from "react-router";
  import { authenticate } from "../shopify.server";
  import { json } from "react-router";

  export const loader = async ({ request }: LoaderFunctionArgs) => {
    const { scopes } = await authenticate.admin(request);

    const scopesDetail =  await scopes.query();

    return ({
      hasWriteProducts: scopesDetail.granted.includes('write_products'),
    });
  };

  export default function Index() {
    const {hasWriteProducts} = useLoaderData<typeof loader>();

    ...
  }
  ```

* ####

  ##### Description

  Call \`scopes.request\` to request optional scopes.

  ##### /app/routes/app.request.tsx

  ```ts
  import type { ActionFunctionArgs } from "react-router";
  import { useFetcher } from "react-router";
  import { authenticate } from "../shopify.server";
  import { json } from "react-router";

  // Example of an action to POST a request to for optional scopes
  export const action = async ({ request }: ActionFunctionArgs) => {
    const { scopes } = await authenticate.admin(request);

    const body = await request.formData();
    const scopesToRequest = body.getAll("scopes") as string[];

    // If the scopes are not already granted, a full page redirect to the request URL occurs
    await scopes.request(scopesToRequest);
    // otherwise return an empty response
    return ({});
  };

  export default function Index() {
    const fetcher = useFetcher<typeof action>();

    const handleRequest = () => {
      fetcher.submit({scopes: ["write_products"]}, {
        method: "POST",
      });
    };

    ...
  }
  ```

* ####

  ##### Description

  Call \`scopes.revoke\` to revoke optional scopes.

  ##### /app.\_index.tsx

  ```ts
  import type { ActionFunctionArgs } from "react-router";
  import { useFetcher } from "react-router";
  import { authenticate } from "../shopify.server";
  import { json } from "react-router";

  // Example of an action to POST optional scopes to revoke
  export const action = async ({ request }: ActionFunctionArgs) => {
    const { scopes } = await authenticate.admin(request);

    const body = await request.formData();
    const scopesToRevoke = body.getAll("scopes") as string[];

    const revokedResponse = await scopes.revoke(scopesToRevoke);

    return (revokedResponse);
  };

  export default function Index() {
    const fetcher = useFetcher<typeof action>();

    const handleRevoke = () => {
      fetcher.submit({scopes: ["write_products"]}, {
        method: "POST",
      });
    };

    ...
  }
  ```

***

### Related

[Interact with the Admin API. - API context](https://shopify.dev/docs/api/shopify-app-react-router/v1/apis/admin-api)

[Bill merchants for your app using the Admin API. - Billing context](https://shopify.dev/docs/api/shopify-app-react-router/v1/apis/billing)

***

---



<a id="latest-authenticate-flow"></a>


## Flow

Contains functions for verifying Shopify Flow extensions.

See the [Flow documentation](https://shopify.dev/docs/apps/flow/actions/endpoints) for more information.

### authenticate.​flow(**[request](#authenticateflow-propertydetail-request)**​)

Verifies requests coming from Shopify Flow extensions.

#### Parameters

* **request**

  **Request**

  **required**

#### Returns

* **Promise\<FlowContext>**

#### FlowContext

* admin

  An admin context for the Flow request. Returned only if there is a session for the shop.

  ```ts
  AdminApiContext
  ```

* payload

  The payload from the Flow request.

  ```ts
  any
  ```

* session

  A session with an offline token for the shop. Returned only if there is a session for the shop.

  ```ts
  Session
  ```

#### AdminApiContext

Provides utilities that apps can use to make requests to the Admin API.

* graphql

  Methods for interacting with the Shopify Admin GraphQL API

  ```ts
  GraphQLClient<AdminOperations>
  ```

#### GraphQLClient

* query

  ```ts
  Operation extends keyof Operations
  ```

* options

  ```ts
  GraphQLQueryOptions<Operation, Operations>
  ```

returns

```ts
interface Promise<T> {
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;

    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
}, interface Promise<T> {}, Promise: PromiseConstructor, interface Promise<T> {
    readonly [Symbol.toStringTag]: string;
}, interface Promise<T> {
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
}
```

#### GraphQLQueryOptions

* apiVersion

  The version of the API to use for the request.

  ```ts
  ApiVersion
  ```

* headers

  Additional headers to include in the request.

  ```ts
  Record<string, any>
  ```

* signal

  An optional AbortSignal to cancel the request.

  ```ts
  AbortSignal
  ```

* tries

  The total number of times to try the request if it fails.

  ```ts
  number
  ```

* variables

  The variables to pass to the operation.

  ```ts
  ApiClientRequestOptions<Operation, Operations>
  ```

#### ApiVersion

* October24

  ```ts
  2024-10
  ```

* January25

  ```ts
  2025-01
  ```

* April25

  ```ts
  2025-04
  ```

* July25

  ```ts
  2025-07
  ```

* October25

  ```ts
  2025-10
  ```

* January26

  ```ts
  2026-01
  ```

* April26

  ```ts
  2026-04
  ```

* Unstable

  ```ts
  unstable
  ```

#### Session

Stores App information from logged in merchants so they can make authenticated requests to the Admin API.

* id

  The unique identifier for the session.

  ```ts
  string
  ```

* shop

  The Shopify shop domain, such as \`example.myshopify.com\`.

  ```ts
  string
  ```

* state

  The state of the session. Used for the OAuth authentication code flow.

  ```ts
  string
  ```

* isOnline

  Whether the access token in the session is online or offline.

  ```ts
  boolean
  ```

* scope

  The desired scopes for the access token, at the time the session was created.

  ```ts
  string
  ```

* expires

  The date the access token expires.

  ```ts
  Date
  ```

* accessToken

  The access token for the session.

  ```ts
  string
  ```

* refreshToken

  The refresh token for the session.

  ```ts
  string
  ```

* refreshTokenExpires

  The date the refresh token expires.

  ```ts
  Date
  ```

* onlineAccessInfo

  Information on the user for the session. Only present for online sessions.

  ```ts
  OnlineAccessInfo
  ```

* isActive

  Whether the session is active. Active sessions have an access token that is not expired, and has has the given scopes if scopes is equal to a truthy value.

  ```ts
  (scopes: string | string[] | AuthScopes, withinMillisecondsOfExpiry?: number) => boolean
  ```

* isScopeChanged

  Whether the access token includes the given scopes if they are provided.

  ```ts
  (scopes: string | string[] | AuthScopes) => boolean
  ```

* isScopeIncluded

  Whether the access token includes the given scopes.

  ```ts
  (scopes: string | string[] | AuthScopes) => boolean
  ```

* isExpired

  Whether the access token is expired.

  ```ts
  (withinMillisecondsOfExpiry?: number) => boolean
  ```

* toObject

  Converts an object with data into a Session.

  ```ts
  () => SessionParams
  ```

* equals

  Checks whether the given session is equal to this session.

  ```ts
  (other: Session) => boolean
  ```

* toPropertyArray

  Converts the session into an array of key-value pairs.

  ```ts
  (returnUserData?: boolean) => [string, string | number | boolean][]
  ```

#### OnlineAccessInfo

* associated\_user

  The user associated with the access token.

  ```ts
  OnlineAccessUser
  ```

* associated\_user\_scope

  The effective set of scopes for the session.

  ```ts
  string
  ```

* expires\_in

  How long the access token is valid for, in seconds.

  ```ts
  number
  ```

#### OnlineAccessUser

* account\_owner

  Whether the user is the account owner.

  ```ts
  boolean
  ```

* collaborator

  Whether the user is a collaborator.

  ```ts
  boolean
  ```

* email

  The user's email address.

  ```ts
  string
  ```

* email\_verified

  Whether the user has verified their email address.

  ```ts
  boolean
  ```

* first\_name

  The user's first name.

  ```ts
  string
  ```

* id

  The user's ID.

  ```ts
  number
  ```

* last\_name

  The user's last name.

  ```ts
  string
  ```

* locale

  The user's locale.

  ```ts
  string
  ```

#### AuthScopes

A class that represents a set of access token scopes.

* has

  Checks whether the current set of scopes includes the given one.

  ```ts
  (scope: string | string[] | AuthScopes) => boolean
  ```

* equals

  Checks whether the current set of scopes equals the given one.

  ```ts
  (otherScopes: string | string[] | AuthScopes) => boolean
  ```

* toString

  Returns a comma-separated string with the current set of scopes.

  ```ts
  () => string
  ```

* toArray

  Returns an array with the current set of scopes.

  ```ts
  (returnOriginalScopes?: boolean) => any[]
  ```

#### SessionParams

* \[key: string]

  ```ts
  any
  ```

* accessToken

  The access token for the session.

  ```ts
  string
  ```

* expires

  The date the access token expires.

  ```ts
  Date
  ```

* id

  The unique identifier for the session.

  ```ts
  string
  ```

* isOnline

  Whether the access token in the session is online or offline.

  ```ts
  boolean
  ```

* onlineAccessInfo

  Information on the user for the session. Only present for online sessions.

  ```ts
  OnlineAccessInfo | StoredOnlineAccessInfo
  ```

* refreshToken

  The refresh token for the session.

  ```ts
  string
  ```

* refreshTokenExpires

  The date the refresh token expires.

  ```ts
  Date
  ```

* scope

  The scopes for the access token.

  ```ts
  string
  ```

* shop

  The Shopify shop domain.

  ```ts
  string
  ```

* state

  The state of the session. Used for the OAuth authentication code flow.

  ```ts
  string
  ```

#### StoredOnlineAccessInfo

```ts
Omit<OnlineAccessInfo, 'associated_user'> & {
  associated_user: Partial<OnlineAccessUser>;
}
```

Examples

#### Examples

* ####

  ##### Description

  Handle a flow action call

  ##### /app/routes/\*\*.ts

  ```ts
  import {type ActionFunctionArgs} from 'react-router';

  import {authenticate} from '../shopify.server';

  export const action = async ({request}: ActionFunctionArgs) => {
    const {admin, payload} = await authenticate.flow(request);

    const customerId = payload.properties.customer_id;

    const response = await admin.graphql(
      `#graphql
      mutation setMetafield($customerId: ID!, $time: String!) {
        metafieldsSet(metafields: {
          ownerId: $customerId
          namespace: "my-app",
          key: "last_flow_update",
          value: $time,
          type: "string",
        }) {
          metafields {
            key
            value
          }
        }
      }
      `,
      {
        variables: {
          customerId,
          time: new Date().toISOString(),
        },
      },
    );
    const body = await response.json();

    console.log('Updated value', body.data!.metafieldsSet!.metafields![0].value);

    return new Response();
  };
  ```

* ####

  ##### Description

  Use the \`admin\` object in the context to interact with the Admin API.

  ##### /app/routes/flow\.tsx

  ```ts
  import { ActionFunctionArgs } from "react-router";
  import { authenticate } from "../shopify.server";

  export async function action({ request }: ActionFunctionArgs) {
    const { admin } = await authenticate.flow(request);

    const response = await admin?.graphql(
      `#graphql
      mutation populateProduct($input: ProductInput!) {
        productCreate(input: $input) {
          product {
            id
          }
        }
      }`,
      { variables: { input: { title: "Product Name" } } }
    );

    const productData = await response.json();
    return ({ data: productData.data });
  }
  ```

* ####

  ##### Description

  Get the request's POST payload.

  ##### /app/routes/flow\.tsx

  ```ts
  import { ActionFunctionArgs } from "react-router";
  import { authenticate } from "../shopify.server";

  export const action = async ({ request }: ActionFunctionArgs) => {
    const { payload } = await authenticate.flow(request);
    return new Response();
  };
  ```

* ####

  ##### Description

  Use the session associated with this request.

  ##### /app/routes/flow\.tsx

  ```ts
  import { ActionFunctionArgs } from "react-router";
  import { authenticate } from "../shopify.server";

  export const action = async ({ request }: ActionFunctionArgs) => {
    const { session, admin } = await authenticate.flow(request);

    console.log(session.id)

    return new Response();
  };
  ```

***

### Related

[Interact with the Admin API. - Admin API context](https://shopify.dev/docs/api/shopify-app-react-router/v1/apis/admin-api)

[Receive requests from Flow. - Flow action endpoints](https://shopify.dev/docs/apps/flow/actions/endpoints)

***

---



<a id="latest-authenticate-fulfillment-service"></a>


## Fulfillment Service

Contains functions for verifying fulfillment service requests.

See the [fulfillment service documentation](https://shopify.dev/docs/apps/fulfillment/fulfillment-service-apps) for more information.

### authenticate.​fulfillment​Service(**[request](#authenticatefulfillmentservice-propertydetail-request)**​)

Verifies requests coming from Shopify to fulfillment service apps.

#### Parameters

* **request**

  **Request**

  **required**

#### Returns

* **Promise\<FulfillmentServiceContext>**

#### FulfillmentServiceContext

* admin

  An admin context for the fulfillment service request. Returned only if there is a session for the shop.

  ```ts
  AdminApiContext
  ```

* payload

  The payload from the fulfillment service request.

  ```ts
  FulfillmentServicePayload
  ```

* session

  A session with an offline token for the shop. Returned only if there is a session for the shop.

  ```ts
  Session
  ```

#### AdminApiContext

Provides utilities that apps can use to make requests to the Admin API.

* graphql

  Methods for interacting with the Shopify Admin GraphQL API

  ```ts
  GraphQLClient<AdminOperations>
  ```

#### GraphQLClient

* query

  ```ts
  Operation extends keyof Operations
  ```

* options

  ```ts
  GraphQLQueryOptions<Operation, Operations>
  ```

returns

```ts
interface Promise<T> {
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;

    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
}, interface Promise<T> {}, Promise: PromiseConstructor, interface Promise<T> {
    readonly [Symbol.toStringTag]: string;
}, interface Promise<T> {
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
}
```

#### GraphQLQueryOptions

* apiVersion

  The version of the API to use for the request.

  ```ts
  ApiVersion
  ```

* headers

  Additional headers to include in the request.

  ```ts
  Record<string, any>
  ```

* signal

  An optional AbortSignal to cancel the request.

  ```ts
  AbortSignal
  ```

* tries

  The total number of times to try the request if it fails.

  ```ts
  number
  ```

* variables

  The variables to pass to the operation.

  ```ts
  ApiClientRequestOptions<Operation, Operations>
  ```

#### ApiVersion

* October24

  ```ts
  2024-10
  ```

* January25

  ```ts
  2025-01
  ```

* April25

  ```ts
  2025-04
  ```

* July25

  ```ts
  2025-07
  ```

* October25

  ```ts
  2025-10
  ```

* January26

  ```ts
  2026-01
  ```

* April26

  ```ts
  2026-04
  ```

* Unstable

  ```ts
  unstable
  ```

#### FulfillmentServicePayload

```ts
Record<string, any> & {
  kind: string;
}
```

#### Session

Stores App information from logged in merchants so they can make authenticated requests to the Admin API.

* id

  The unique identifier for the session.

  ```ts
  string
  ```

* shop

  The Shopify shop domain, such as \`example.myshopify.com\`.

  ```ts
  string
  ```

* state

  The state of the session. Used for the OAuth authentication code flow.

  ```ts
  string
  ```

* isOnline

  Whether the access token in the session is online or offline.

  ```ts
  boolean
  ```

* scope

  The desired scopes for the access token, at the time the session was created.

  ```ts
  string
  ```

* expires

  The date the access token expires.

  ```ts
  Date
  ```

* accessToken

  The access token for the session.

  ```ts
  string
  ```

* refreshToken

  The refresh token for the session.

  ```ts
  string
  ```

* refreshTokenExpires

  The date the refresh token expires.

  ```ts
  Date
  ```

* onlineAccessInfo

  Information on the user for the session. Only present for online sessions.

  ```ts
  OnlineAccessInfo
  ```

* isActive

  Whether the session is active. Active sessions have an access token that is not expired, and has has the given scopes if scopes is equal to a truthy value.

  ```ts
  (scopes: string | string[] | AuthScopes, withinMillisecondsOfExpiry?: number) => boolean
  ```

* isScopeChanged

  Whether the access token includes the given scopes if they are provided.

  ```ts
  (scopes: string | string[] | AuthScopes) => boolean
  ```

* isScopeIncluded

  Whether the access token includes the given scopes.

  ```ts
  (scopes: string | string[] | AuthScopes) => boolean
  ```

* isExpired

  Whether the access token is expired.

  ```ts
  (withinMillisecondsOfExpiry?: number) => boolean
  ```

* toObject

  Converts an object with data into a Session.

  ```ts
  () => SessionParams
  ```

* equals

  Checks whether the given session is equal to this session.

  ```ts
  (other: Session) => boolean
  ```

* toPropertyArray

  Converts the session into an array of key-value pairs.

  ```ts
  (returnUserData?: boolean) => [string, string | number | boolean][]
  ```

#### OnlineAccessInfo

* associated\_user

  The user associated with the access token.

  ```ts
  OnlineAccessUser
  ```

* associated\_user\_scope

  The effective set of scopes for the session.

  ```ts
  string
  ```

* expires\_in

  How long the access token is valid for, in seconds.

  ```ts
  number
  ```

#### OnlineAccessUser

* account\_owner

  Whether the user is the account owner.

  ```ts
  boolean
  ```

* collaborator

  Whether the user is a collaborator.

  ```ts
  boolean
  ```

* email

  The user's email address.

  ```ts
  string
  ```

* email\_verified

  Whether the user has verified their email address.

  ```ts
  boolean
  ```

* first\_name

  The user's first name.

  ```ts
  string
  ```

* id

  The user's ID.

  ```ts
  number
  ```

* last\_name

  The user's last name.

  ```ts
  string
  ```

* locale

  The user's locale.

  ```ts
  string
  ```

#### AuthScopes

A class that represents a set of access token scopes.

* has

  Checks whether the current set of scopes includes the given one.

  ```ts
  (scope: string | string[] | AuthScopes) => boolean
  ```

* equals

  Checks whether the current set of scopes equals the given one.

  ```ts
  (otherScopes: string | string[] | AuthScopes) => boolean
  ```

* toString

  Returns a comma-separated string with the current set of scopes.

  ```ts
  () => string
  ```

* toArray

  Returns an array with the current set of scopes.

  ```ts
  (returnOriginalScopes?: boolean) => any[]
  ```

#### SessionParams

* \[key: string]

  ```ts
  any
  ```

* accessToken

  The access token for the session.

  ```ts
  string
  ```

* expires

  The date the access token expires.

  ```ts
  Date
  ```

* id

  The unique identifier for the session.

  ```ts
  string
  ```

* isOnline

  Whether the access token in the session is online or offline.

  ```ts
  boolean
  ```

* onlineAccessInfo

  Information on the user for the session. Only present for online sessions.

  ```ts
  OnlineAccessInfo | StoredOnlineAccessInfo
  ```

* refreshToken

  The refresh token for the session.

  ```ts
  string
  ```

* refreshTokenExpires

  The date the refresh token expires.

  ```ts
  Date
  ```

* scope

  The scopes for the access token.

  ```ts
  string
  ```

* shop

  The Shopify shop domain.

  ```ts
  string
  ```

* state

  The state of the session. Used for the OAuth authentication code flow.

  ```ts
  string
  ```

#### StoredOnlineAccessInfo

```ts
Omit<OnlineAccessInfo, 'associated_user'> & {
  associated_user: Partial<OnlineAccessUser>;
}
```

Examples

#### Examples

* ####

  ##### Description

  Handle a fulfillment service notification call

  ##### /app/routes/\*\*.ts

  ```ts
  import {type ActionFunctionArgs} from 'react-router';

  import {authenticate} from '../shopify.server';

  export const action = async ({request}: ActionFunctionArgs) => {
    const {admin, payload} = await authenticate.fulfillmentService(request);

    const kind = payload.kind;

    if (kind === 'FULFILLMENT_REQUEST') {
      const response = await admin?.graphql(
        `#graphql
           query {
             shop {
               assignedFulfillmentOrders(first: 10, assignmentStatus: FULFILLMENT_REQUESTED) {
                 edges {
                   node {
                     id
                     destination {
                     firstName
                     lastName
                   }
                   lineItems(first: 10) {
                     edges {
                       node {
                       id
                       productTitle
                       sku
                       remainingQuantity
                     }
                   }
                 }
                 merchantRequests(first: 10, kind: FULFILLMENT_REQUEST) {
                   edges {
                     node {
                       message
                     }
                   }
                 }
               }
             }
           }
         }
        }`,
      );

      const fulfillments = await response.json();
      console.log(fulfillments);
    }

    return new Response();
  };
  ```

* ####

  ##### Description

  Use the session associated with this request to use the Admin GraphQL API

  ##### /app/routes/fulfillment\_order\_notification.ts

  ```ts
  import { ActionFunctionArgs } from "react-router";
  import { authenticate } from "../shopify.server";

  export async function action({ request }: ActionFunctionArgs) {
    const { admin, session } = await authenticate.fulfillmentService(request);

    console.log(session.id)

    return new Response();
  }
  ```

* ####

  ##### Description

  Get the request's POST payload.

  ##### Example

  ```ts
  /app/routes/fulfillment_order_notification.ts
  import { ActionFunction } from "react-router";
  import { authenticate } from "../shopify.server";

  export const action: ActionFunction = async ({ request }) => {
    const { payload } = await authenticate.fulfillmentService(request);
    if(payload.kind === 'FULFILLMENT_REQUEST') {
     // handle fulfillment request
    } else if (payload.kind === 'CANCELLATION_REQUEST') {
     // handle cancellation request
    };
  return new Response();
  ```

* ####

  ##### Description

  Use the session associated with this request.

  ##### /app/routes/fulfillment\_service\_notification.tsx

  ```ts
  import { ActionFunctionArgs } from "react-router";
  import { authenticate } from "../shopify.server";

  export const action = async ({ request }: ActionFunctionArgs) => {
    const { session, admin } = await authenticate.fulfillmentService(request);

    console.log(session.id)

    return new Response();
  };
  ```

***

### Related

[Interact with the Admin API. - Admin API context](https://shopify.dev/docs/api/shopify-app-react-router/v1/apis/admin-api)

[Receive fulfillment requests and cancellations. - Manage Fulfillments](https://shopify.dev/docs/apps/fulfillment/fulfillment-service-apps/manage-fulfillments)

***

---



<a id="latest-authenticate-public-app-proxy"></a>


## App proxy

[App proxies](https://shopify.dev/docs/apps/online-store/app-proxies) take requests to Shopify links, and redirect them to external links. The `authenticate.public.appProxy` function validates requests made to app proxies, and returns a context to enable querying Shopify APIs.

**Note:**

If the store has not installed the app, store-related properties such as `admin` or `storefront` will be `undefined`

### authenticate.​public.​app​Proxy(**[request](#authenticatepublicappproxy-propertydetail-request)**​)

Authenticates requests coming to the app from Shopify app proxies.

#### Parameters

* **request**

  **Request**

  **required**

#### Returns

* **Promise\<AppProxyContext | AppProxyContextWithSession>**

#### AppProxyContext

* admin

  No session is available for the shop that made this request. Therefore no methods for interacting with the GraphQL / REST Admin APIs are available.

  ```ts
  undefined
  ```

* liquid

  A utility for creating a Liquid Response.

  ```ts
  LiquidResponseFunction
  ```

* session

  No session is available for the shop that made this request. This comes from the session storage which \`shopifyApp\` uses to store sessions in your database of choice.

  ```ts
  undefined
  ```

* storefront

  No session is available for the shop that made this request. Therefore no method for interacting with the Storefront API is available.

  ```ts
  undefined
  ```

#### LiquidResponseFunction

* body

  ```ts
  string
  ```

* initAndOptions

  ```ts
  number | (ResponseInit & Options)
  ```

returns

```ts
Response
```

#### Options

* layout

  Whether to use the shop's theme layout around the Liquid content.

  ```ts
  boolean
  ```

#### AppProxyContextWithSession

* admin

  Methods for interacting with the GraphQL / REST Admin APIs for the store that made the request.

  ```ts
  AdminApiContext
  ```

* liquid

  A utility for creating a Liquid Response.

  ```ts
  LiquidResponseFunction
  ```

* session

  The session for the shop that made the request. This comes from the session storage which \`shopifyApp\` uses to store sessions in your database of choice. Use this to get shop or user-specific data.

  ```ts
  Session
  ```

* storefront

  Method for interacting with the Shopify Storefront Graphql API for the store that made the request.

  ```ts
  StorefrontContext
  ```

#### AdminApiContext

Provides utilities that apps can use to make requests to the Admin API.

* graphql

  Methods for interacting with the Shopify Admin GraphQL API

  ```ts
  GraphQLClient<AdminOperations>
  ```

#### GraphQLClient

* query

  ```ts
  Operation extends keyof Operations
  ```

* options

  ```ts
  GraphQLQueryOptions<Operation, Operations>
  ```

returns

```ts
interface Promise<T> {
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;

    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
}, interface Promise<T> {}, Promise: PromiseConstructor, interface Promise<T> {
    readonly [Symbol.toStringTag]: string;
}, interface Promise<T> {
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
}
```

#### GraphQLQueryOptions

* apiVersion

  The version of the API to use for the request.

  ```ts
  ApiVersion
  ```

* headers

  Additional headers to include in the request.

  ```ts
  Record<string, any>
  ```

* signal

  An optional AbortSignal to cancel the request.

  ```ts
  AbortSignal
  ```

* tries

  The total number of times to try the request if it fails.

  ```ts
  number
  ```

* variables

  The variables to pass to the operation.

  ```ts
  ApiClientRequestOptions<Operation, Operations>
  ```

#### ApiVersion

* October24

  ```ts
  2024-10
  ```

* January25

  ```ts
  2025-01
  ```

* April25

  ```ts
  2025-04
  ```

* July25

  ```ts
  2025-07
  ```

* October25

  ```ts
  2025-10
  ```

* January26

  ```ts
  2026-01
  ```

* April26

  ```ts
  2026-04
  ```

* Unstable

  ```ts
  unstable
  ```

#### Session

Stores App information from logged in merchants so they can make authenticated requests to the Admin API.

* id

  The unique identifier for the session.

  ```ts
  string
  ```

* shop

  The Shopify shop domain, such as \`example.myshopify.com\`.

  ```ts
  string
  ```

* state

  The state of the session. Used for the OAuth authentication code flow.

  ```ts
  string
  ```

* isOnline

  Whether the access token in the session is online or offline.

  ```ts
  boolean
  ```

* scope

  The desired scopes for the access token, at the time the session was created.

  ```ts
  string
  ```

* expires

  The date the access token expires.

  ```ts
  Date
  ```

* accessToken

  The access token for the session.

  ```ts
  string
  ```

* refreshToken

  The refresh token for the session.

  ```ts
  string
  ```

* refreshTokenExpires

  The date the refresh token expires.

  ```ts
  Date
  ```

* onlineAccessInfo

  Information on the user for the session. Only present for online sessions.

  ```ts
  OnlineAccessInfo
  ```

* isActive

  Whether the session is active. Active sessions have an access token that is not expired, and has has the given scopes if scopes is equal to a truthy value.

  ```ts
  (scopes: string | string[] | AuthScopes, withinMillisecondsOfExpiry?: number) => boolean
  ```

* isScopeChanged

  Whether the access token includes the given scopes if they are provided.

  ```ts
  (scopes: string | string[] | AuthScopes) => boolean
  ```

* isScopeIncluded

  Whether the access token includes the given scopes.

  ```ts
  (scopes: string | string[] | AuthScopes) => boolean
  ```

* isExpired

  Whether the access token is expired.

  ```ts
  (withinMillisecondsOfExpiry?: number) => boolean
  ```

* toObject

  Converts an object with data into a Session.

  ```ts
  () => SessionParams
  ```

* equals

  Checks whether the given session is equal to this session.

  ```ts
  (other: Session) => boolean
  ```

* toPropertyArray

  Converts the session into an array of key-value pairs.

  ```ts
  (returnUserData?: boolean) => [string, string | number | boolean][]
  ```

#### OnlineAccessInfo

* associated\_user

  The user associated with the access token.

  ```ts
  OnlineAccessUser
  ```

* associated\_user\_scope

  The effective set of scopes for the session.

  ```ts
  string
  ```

* expires\_in

  How long the access token is valid for, in seconds.

  ```ts
  number
  ```

#### OnlineAccessUser

* account\_owner

  Whether the user is the account owner.

  ```ts
  boolean
  ```

* collaborator

  Whether the user is a collaborator.

  ```ts
  boolean
  ```

* email

  The user's email address.

  ```ts
  string
  ```

* email\_verified

  Whether the user has verified their email address.

  ```ts
  boolean
  ```

* first\_name

  The user's first name.

  ```ts
  string
  ```

* id

  The user's ID.

  ```ts
  number
  ```

* last\_name

  The user's last name.

  ```ts
  string
  ```

* locale

  The user's locale.

  ```ts
  string
  ```

#### AuthScopes

A class that represents a set of access token scopes.

* has

  Checks whether the current set of scopes includes the given one.

  ```ts
  (scope: string | string[] | AuthScopes) => boolean
  ```

* equals

  Checks whether the current set of scopes equals the given one.

  ```ts
  (otherScopes: string | string[] | AuthScopes) => boolean
  ```

* toString

  Returns a comma-separated string with the current set of scopes.

  ```ts
  () => string
  ```

* toArray

  Returns an array with the current set of scopes.

  ```ts
  (returnOriginalScopes?: boolean) => any[]
  ```

#### SessionParams

* \[key: string]

  ```ts
  any
  ```

* accessToken

  The access token for the session.

  ```ts
  string
  ```

* expires

  The date the access token expires.

  ```ts
  Date
  ```

* id

  The unique identifier for the session.

  ```ts
  string
  ```

* isOnline

  Whether the access token in the session is online or offline.

  ```ts
  boolean
  ```

* onlineAccessInfo

  Information on the user for the session. Only present for online sessions.

  ```ts
  OnlineAccessInfo | StoredOnlineAccessInfo
  ```

* refreshToken

  The refresh token for the session.

  ```ts
  string
  ```

* refreshTokenExpires

  The date the refresh token expires.

  ```ts
  Date
  ```

* scope

  The scopes for the access token.

  ```ts
  string
  ```

* shop

  The Shopify shop domain.

  ```ts
  string
  ```

* state

  The state of the session. Used for the OAuth authentication code flow.

  ```ts
  string
  ```

#### StoredOnlineAccessInfo

```ts
Omit<OnlineAccessInfo, 'associated_user'> & {
  associated_user: Partial<OnlineAccessUser>;
}
```

#### StorefrontContext

Provides utilities that apps can use to make requests to the Storefront API.

* graphql

  Method for interacting with the Shopify Storefront GraphQL API If you're getting incorrect type hints in the Shopify template, follow \[these instructions]\(https://github.com/Shopify/shopify-app-template-react-router/tree/main#incorrect-graphql-hints).

  ```ts
  GraphQLClient<StorefrontOperations>
  ```

Examples

#### Examples

* ####

  ##### Description

  Authenticate and fetch product information

  ##### /app/routes/\*\*.ts

  ```ts
  import type {LoaderFunctionArgs} from 'react-router';

  import {authenticate} from '../shopify.server';

  export const loader = async ({request}: LoaderFunctionArgs) => {
    const {storefront, liquid} = await authenticate.public.appProxy(request);

    if (!storefront) {
      return new Response();
    }

    const response = await storefront.graphql(
      `#graphql
      query productTitle {
        products(first: 1) {
          nodes {
            title
          }
        }
      }`,
    );
    const body = await response.json();

    const title = body.data.products.nodes[0].title;

    return liquid(`Found product ${title} from {{shop.name}}`);
  };
  ```

* ####

  ##### Description

  Use the \`admin\` object to interact with the admin GraphQL API.

  ##### app/routes/\*\*\\/.ts

  ```ts
  import { json } from "react-router";
  import { authenticate } from "../shopify.server";

  export async function action({ request }: ActionFunctionArgs) {
    const { admin } = await authenticate.public.appProxy(request);

    const response = await admin.graphql(
      `#graphql
      mutation populateProduct($input: ProductInput!) {
        productCreate(input: $input) {
          product {
            id
          }
        }
      }`,
      {
        variables: {
          input: { title: "Product Name" }
        }
      }
    );

    const productData = await response.json();
    return ({ data: productData.data });
  }
  ```

* ####

  ##### Description

  Use the \`liquid\` helper to render a \`Response\` with Liquid content using the shop's theme. See the \[Liquid reference]\(https://shopify.dev/docs/api/liquid) for all the features it enables.

  ##### /app/routes/\*\*\\/\*.ts

  ```ts
  import {authenticate} from "~/shopify.server"

  export async function loader({ request }) {
    const {liquid} = await authenticate.public.appProxy(request);

    return liquid("Hello {{shop.name}}");
  }
  ```

* ####

  ##### Description

  Set the \`layout\` option to \`false\` to render the Liquid content without a theme.

  ##### /app/routes/\*\*\\/\*.ts

  ```ts
  import {authenticate} from "~/shopify.server"

  export async function loader({ request }) {
    const {liquid} = await authenticate.public.appProxy(request);

    return liquid(
      "Hello {{shop.name}}",
      { layout: false }
    );
  }
  ```

* ####

  ##### Description

  Handle form submissions through an app proxy.

  ##### app/routes/apps.proxy.my-action.tsx

  ```ts
  import { redirect } from "react-router";
  import { authenticate } from "~/shopify.server";

  export async function loader({ request }) {
    const { liquid } = await authenticate.public.appProxy(request);

    return liquid(`
      <form method="post" action="/apps/proxy/my-action">
        <input type="text" name="field" />
        <button type="submit">Submit</button>
      </form>
    `);
  }

  export async function action({ request }) {
    await authenticate.public.appProxy(request);

    const formData = await request.formData();
    const field = formData.get("field")?.toString();

    // Perform actions here
    if (field) {
      console.log("Field:", field);
    }

    // Return to the form page
    return redirect("/apps/proxy/my-action");
  }
  ```

* ####

  ##### Description

  Get the session for the shop that initiated the request to the app proxy.

  ##### app/routes/\*\*\\/.ts

  ```ts
  import { json } from "react-router";
  import { authenticate } from "../shopify.server";
  import { getMyAppModelData } from "~/db/model.server";

  export const loader = async ({ request }) => {
    // Get the session for the shop that initiated the request to the app proxy.
    const { session } =
      await authenticate.public.appProxy(request);

    // Use the session data to make to queries to your database or additional requests.
    return (
      await getMyAppModelData({shop: session.shop})
    );
  };
  ```

* ####

  ##### Description

  Use the \`storefront\` object to interact with the GraphQL API.

  ##### app/routes/\*\*\\/.ts

  ```ts
  import { json } from "react-router";
  import { authenticate } from "../shopify.server";

  export async function action({ request }: ActionFunctionArgs) {
    const { storefront } = await authenticate.public.appProxy(request);

    const response = await storefront.graphql(
      `#graphql
      query blogIds {
        blogs(first: 10) {
          edges {
            node {
              id
            }
          }
        }
      }`
    );

    return (await response.json());
  }
  ```

***

### Related

[Interact with the Admin API. - Admin API context](https://shopify.dev/docs/api/shopify-app-react-router/v1/apis/admin-api)

[Interact with the Storefront API. - Storefront API context](https://shopify.dev/docs/api/shopify-app-react-router/v1/apis/storefront-api)

[Use the shop's theme to render a template. - Liquid reference](https://shopify.dev/docs/api/liquid)

***

---



<a id="latest-authenticate-public-checkout"></a>


## Checkout

The `authenticate.public.checkout` function ensures that checkout extension requests are coming from Shopify, and returns helpers to respond with the correct headers.

### authenticate.​public.​checkout(**[request](#authenticatepubliccheckout-propertydetail-request)**​,**[options](#authenticatepubliccheckout-propertydetail-options)**​)

Authenticates requests coming from Shopify checkout extensions.

#### Parameters

* **request**

  **Request**

  **required**

* **options**

  **AuthenticateCheckoutOptions**

#### Returns

* **Promise\<CheckoutContext>**

#### AuthenticateCheckoutOptions

* corsHeaders

  ```ts
  string[]
  ```

#### CheckoutContext

Authenticated Context for a checkout request

* cors

  A function that ensures the CORS headers are set correctly for the response.

  ```ts
  EnsureCORSFunction
  ```

* sessionToken

  The decoded and validated session token for the request Refer to the OAuth docs for the \[session token payload]\(https://shopify.dev/docs/apps/auth/oauth/session-tokens#payload).

  ```ts
  JwtPayload
  ```

#### EnsureCORSFunction



Examples

#### Examples

* #### Authenticate and return offers for the shop

  ##### Description

  Authenticate and return offers for the shop

  ##### /app/routes/\*\*.ts

  ```ts
  import type {ActionFunctionArgs, LoaderFunctionArgs} from 'react-router';

  import {authenticate} from '../shopify.server';
  import {getOffers} from '../offers.server';

  // The loader responds to preflight requests from Shopify
  export const loader = async ({request}: LoaderFunctionArgs) => {
    await authenticate.public.checkout(request);
  };

  export const action = async ({request}: ActionFunctionArgs) => {
    const {cors, sessionToken} = await authenticate.public.checkout(request);

    const offers = getOffers(sessionToken.dest);
    return cors({offers});
  };
  ```

  ##### /app/offers.server.ts

  ```ts
  // Most apps would load this from their database
  export function getOffers(shop: string) {
    const offers: Record<any, any[]> = {
      'shop.com': [
        {
          id: '1',
          title: '10% off',
          price: 10,
          type: 'percentage',
        },
        {
          id: '2',
          title: 'Free shipping',
          price: 0,
          type: 'shipping',
        },
      ],
    };

    return offers[shop];
  }
  ```

* ####

  ##### Description

  Use the \`cors\` helper to ensure your app can respond to checkout extension requests.

  ##### app/routes/public/my-route.ts

  ```ts
  import { LoaderFunctionArgs, json } from "react-router";
  import { authenticate } from "../shopify.server";
  import { getMyAppData } from "~/db/model.server";

  export const loader = async ({ request }: LoaderFunctionArgs) => {
    const { sessionToken, cors } = await authenticate.public.checkout(
      request,
      { corsHeaders: ["X-My-Custom-Header"] }
    );
    const data = await getMyAppData({shop: sessionToken.dest});
    return cors(data));
  };
  ```

* ####

  ##### Description

  Get store-specific data using the \`sessionToken\` object.

  ##### app/routes/public/my-route.ts

  ```ts
  import { LoaderFunctionArgs, json } from "react-router";
  import { authenticate } from "../shopify.server";
  import { getMyAppData } from "~/db/model.server";

  export const loader = async ({ request }: LoaderFunctionArgs) => {
    const { sessionToken } = await authenticate.public.checkout(
      request
    );
    return (await getMyAppData({shop: sessionToken.dest}));
  };
  ```

***

### Related

[Checkout UI extension API for interacting with session tokens. - Session token API](https://shopify.dev/docs/api/checkout-ui-extensions/latest/target-apis/platform-apis/session-token-api)

***

---



<a id="latest-authenticate-public-customer-account"></a>


## Customer account

The `authenticate.public.customerAccount` function ensures that customer account extension requests are coming from Shopify, and returns helpers to respond with the correct headers.

### authenticate.​public.​customer​Account(**[request](#authenticatepubliccustomeraccount-propertydetail-request)**​,**[options](#authenticatepubliccustomeraccount-propertydetail-options)**​)

Authenticates requests coming from Shopify customer account extensions.

#### Parameters

* **request**

  **Request**

  **required**

* **options**

  **AuthenticateCustomerAccountOptions**

#### Returns

* **Promise\<CustomerAccountContext>**

#### AuthenticateCustomerAccountOptions

* corsHeaders

  ```ts
  string[]
  ```

#### CustomerAccountContext

Authenticated Context for a customer account extension request

* cors

  A function that ensures the CORS headers are set correctly for the response.

  ```ts
  EnsureCORSFunction
  ```

* sessionToken

  The decoded and validated session token for the request Refer to the OAuth docs for the \[session token payload]\(https://shopify.dev/docs/apps/auth/oauth/session-tokens#payload).

  ```ts
  JwtPayload
  ```

#### EnsureCORSFunction



Examples

#### Examples

* #### Authenticate and return offers for the customer

  ##### Description

  Authenticate and return offers for the customer

  ##### /app/routes/\*\*.ts

  ```ts
  import type {ActionFunctionArgs, LoaderFunctionArgs} from 'react-router';

  import {authenticate} from '../shopify.server';
  import {getOffers} from '../offers.server';

  // The loader responds to preflight requests from Shopify
  export const loader = async ({request}: LoaderFunctionArgs) => {
    await authenticate.public.customerAccount(request);
  };

  export const action = async ({request}: ActionFunctionArgs) => {
    const {cors, sessionToken} = await authenticate.public.customerAccount(request);

    // Get offers for the customer
    const offers = getOffers(sessionToken.des, sessionToken.sub);
    return cors({offers});
  };
  ```

  ##### /app/offers.server.ts

  ```ts
  // Most apps would load this from their database
  export function getOffers(shop: string, customerID: string) {
    const offers: Record<string, any[]> = {
      'shop.com': [
        {
          id: '1',
          title: '10% off',
          price: 10,
          type: 'percentage',
          customerId: 'gid://shopify/Customer/1001',
        },
        {
          id: '2',
          title: 'Free shipping',
          price: 0,
          type: 'shipping',
          customerId: 'gid://shopify/Customer/1001',
        },
        {
          id: '3',
          title: '5% off',
          price: 5,
          type: 'percentage',
          customerId: 'gid://shopify/Customer/1001',
        },
      ],
    };

    const allOffers = offers[shop] || [];
    // Filter offers to include only those that match the customerId
    const filteredOffers = allOffers.filter(
      (offer) => offer.customerId === customerID,
    );

    return filteredOffers;
  }
  ```

* ####

  ##### Description

  Use the \`cors\` helper to ensure your app can respond to customer account extension requests.

  ##### app/routes/public/my-route.ts

  ```ts
  import { LoaderFunctionArgs, json } from "react-router";
  import { authenticate } from "../shopify.server";
  import { getMyAppData } from "~/db/model.server";

  export const loader = async ({ request }: LoaderFunctionArgs) => {
    const { sessionToken, cors } = await authenticate.public.customerAccount(
      request,
      { corsHeaders: ["X-My-Custom-Header"] }
    );
    const data = await getMyAppData({shop: sessionToken.dest});
    return cors(data));
  };
  ```

* ####

  ##### Description

  Get store-specific data using the \`sessionToken\` object.

  ##### app/routes/public/my-route.ts

  ```ts
  import { LoaderFunctionArgs, json } from "react-router";
  import { authenticate } from "../shopify.server";
  import { getMyAppData } from "~/db/model.server";

  export const loader = async ({ request }: LoaderFunctionArgs) => {
    const { sessionToken } = await authenticate.public.customerAccount(
      request
    );
    return (await getMyAppData({shop: sessionToken.dest}));
  };
  ```

***

### Related

[Customer account UI extensions API for interacting with session tokens. - Session token API](https://shopify.dev/docs/api/customer-account-ui-extensions/latest/target-apis/platform-apis/session-token-api)

***

---



<a id="latest-authenticate-webhook"></a>


## Webhook

Contains functions for verifying Shopify webhooks.

### authenticate.​webhook(**[request](#authenticatewebhook-propertydetail-request)**​)

Verifies requests coming from Shopify webhooks.

#### Parameters

* **request**

  **Request**

  **required**

#### Returns

* **Promise\<WebhookContext\<Topics>>**

#### WebhookContext

```ts
WebhookContextWithoutSession<Topics> | WebhookContextWithSession<Topics>
```

#### WebhookContextWithoutSession

* action

  The action type: 'create', 'update', or 'delete'. Only available for events webhooks.

  ```ts
  string
  ```

* admin

  ```ts
  undefined
  ```

* apiVersion

  The API version used for the webhook.

  ```ts
  string
  ```

* eventId

  The unique event identifier.

  ```ts
  string
  ```

* handle

  The handle for the webhook subscription. Only available for events webhooks.

  ```ts
  string
  ```

* name

  The name assigned to the webhook subscription. Only available for traditional webhooks.

  ```ts
  string
  ```

* payload

  The payload from the webhook request.

  ```ts
  Record<string, any>
  ```

* resourceId

  The GID of the resource that triggered the webhook. Only available for events webhooks.

  ```ts
  string
  ```

* session

  ```ts
  undefined
  ```

* shop

  The shop where the webhook was triggered.

  ```ts
  string
  ```

* subTopic

  The sub-topic of the webhook. Only available for traditional webhooks.

  ```ts
  string
  ```

* topic

  The topic of the webhook.

  ```ts
  Topics
  ```

* triggeredAt

  The timestamp when the webhook was triggered.

  ```ts
  string
  ```

* webhookId

  A unique ID for the webhook. Useful to keep track of which events your app has already processed. For events webhooks (\`webhookType === 'events'\`), this is set to the \`eventId\` value for backwards compatibility. Prefer using \`eventId\` directly for events webhooks — \`webhookId\` will be removed from events webhooks in the next major version.

  ```ts
  string
  ```

* webhookType

  The type of webhook: 'webhooks' for traditional webhooks or 'events' for events webhooks.

  ```ts
  WebhookTypeValue
  ```

#### WebhookContextWithSession

* action

  The action type: 'create', 'update', or 'delete'. Only available for events webhooks.

  ```ts
  string
  ```

* admin

  An admin context for the webhook. Returned only if there is a session for the shop.

  ```ts
  AdminApiContext
  ```

* apiVersion

  The API version used for the webhook.

  ```ts
  string
  ```

* eventId

  The unique event identifier.

  ```ts
  string
  ```

* handle

  The handle for the webhook subscription. Only available for events webhooks.

  ```ts
  string
  ```

* name

  The name assigned to the webhook subscription. Only available for traditional webhooks.

  ```ts
  string
  ```

* payload

  The payload from the webhook request.

  ```ts
  Record<string, any>
  ```

* resourceId

  The GID of the resource that triggered the webhook. Only available for events webhooks.

  ```ts
  string
  ```

* session

  A session with an offline token for the shop. Returned only if there is a session for the shop. Webhook requests can trigger after an app is uninstalled If the app is already uninstalled, the session may be undefined. Therefore, you should check for the session before using it.

  ```ts
  Session
  ```

* shop

  The shop where the webhook was triggered.

  ```ts
  string
  ```

* subTopic

  The sub-topic of the webhook. Only available for traditional webhooks.

  ```ts
  string
  ```

* topic

  The topic of the webhook.

  ```ts
  Topics
  ```

* triggeredAt

  The timestamp when the webhook was triggered.

  ```ts
  string
  ```

* webhookId

  A unique ID for the webhook. Useful to keep track of which events your app has already processed. For events webhooks (\`webhookType === 'events'\`), this is set to the \`eventId\` value for backwards compatibility. Prefer using \`eventId\` directly for events webhooks — \`webhookId\` will be removed from events webhooks in the next major version.

  ```ts
  string
  ```

* webhookType

  The type of webhook: 'webhooks' for traditional webhooks or 'events' for events webhooks.

  ```ts
  WebhookTypeValue
  ```

#### AdminApiContext

Provides utilities that apps can use to make requests to the Admin API.

* graphql

  Methods for interacting with the Shopify Admin GraphQL API

  ```ts
  GraphQLClient<AdminOperations>
  ```

#### GraphQLClient

* query

  ```ts
  Operation extends keyof Operations
  ```

* options

  ```ts
  GraphQLQueryOptions<Operation, Operations>
  ```

returns

```ts
interface Promise<T> {
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;

    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
}, interface Promise<T> {}, Promise: PromiseConstructor, interface Promise<T> {
    readonly [Symbol.toStringTag]: string;
}, interface Promise<T> {
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
}
```

#### GraphQLQueryOptions

* apiVersion

  The version of the API to use for the request.

  ```ts
  ApiVersion
  ```

* headers

  Additional headers to include in the request.

  ```ts
  Record<string, any>
  ```

* signal

  An optional AbortSignal to cancel the request.

  ```ts
  AbortSignal
  ```

* tries

  The total number of times to try the request if it fails.

  ```ts
  number
  ```

* variables

  The variables to pass to the operation.

  ```ts
  ApiClientRequestOptions<Operation, Operations>
  ```

#### ApiVersion

* October24

  ```ts
  2024-10
  ```

* January25

  ```ts
  2025-01
  ```

* April25

  ```ts
  2025-04
  ```

* July25

  ```ts
  2025-07
  ```

* October25

  ```ts
  2025-10
  ```

* January26

  ```ts
  2026-01
  ```

* April26

  ```ts
  2026-04
  ```

* Unstable

  ```ts
  unstable
  ```

#### Session

Stores App information from logged in merchants so they can make authenticated requests to the Admin API.

* id

  The unique identifier for the session.

  ```ts
  string
  ```

* shop

  The Shopify shop domain, such as \`example.myshopify.com\`.

  ```ts
  string
  ```

* state

  The state of the session. Used for the OAuth authentication code flow.

  ```ts
  string
  ```

* isOnline

  Whether the access token in the session is online or offline.

  ```ts
  boolean
  ```

* scope

  The desired scopes for the access token, at the time the session was created.

  ```ts
  string
  ```

* expires

  The date the access token expires.

  ```ts
  Date
  ```

* accessToken

  The access token for the session.

  ```ts
  string
  ```

* refreshToken

  The refresh token for the session.

  ```ts
  string
  ```

* refreshTokenExpires

  The date the refresh token expires.

  ```ts
  Date
  ```

* onlineAccessInfo

  Information on the user for the session. Only present for online sessions.

  ```ts
  OnlineAccessInfo
  ```

* isActive

  Whether the session is active. Active sessions have an access token that is not expired, and has has the given scopes if scopes is equal to a truthy value.

  ```ts
  (scopes: string | string[] | AuthScopes, withinMillisecondsOfExpiry?: number) => boolean
  ```

* isScopeChanged

  Whether the access token includes the given scopes if they are provided.

  ```ts
  (scopes: string | string[] | AuthScopes) => boolean
  ```

* isScopeIncluded

  Whether the access token includes the given scopes.

  ```ts
  (scopes: string | string[] | AuthScopes) => boolean
  ```

* isExpired

  Whether the access token is expired.

  ```ts
  (withinMillisecondsOfExpiry?: number) => boolean
  ```

* toObject

  Converts an object with data into a Session.

  ```ts
  () => SessionParams
  ```

* equals

  Checks whether the given session is equal to this session.

  ```ts
  (other: Session) => boolean
  ```

* toPropertyArray

  Converts the session into an array of key-value pairs.

  ```ts
  (returnUserData?: boolean) => [string, string | number | boolean][]
  ```

#### OnlineAccessInfo

* associated\_user

  The user associated with the access token.

  ```ts
  OnlineAccessUser
  ```

* associated\_user\_scope

  The effective set of scopes for the session.

  ```ts
  string
  ```

* expires\_in

  How long the access token is valid for, in seconds.

  ```ts
  number
  ```

#### OnlineAccessUser

* account\_owner

  Whether the user is the account owner.

  ```ts
  boolean
  ```

* collaborator

  Whether the user is a collaborator.

  ```ts
  boolean
  ```

* email

  The user's email address.

  ```ts
  string
  ```

* email\_verified

  Whether the user has verified their email address.

  ```ts
  boolean
  ```

* first\_name

  The user's first name.

  ```ts
  string
  ```

* id

  The user's ID.

  ```ts
  number
  ```

* last\_name

  The user's last name.

  ```ts
  string
  ```

* locale

  The user's locale.

  ```ts
  string
  ```

#### AuthScopes

A class that represents a set of access token scopes.

* has

  Checks whether the current set of scopes includes the given one.

  ```ts
  (scope: string | string[] | AuthScopes) => boolean
  ```

* equals

  Checks whether the current set of scopes equals the given one.

  ```ts
  (otherScopes: string | string[] | AuthScopes) => boolean
  ```

* toString

  Returns a comma-separated string with the current set of scopes.

  ```ts
  () => string
  ```

* toArray

  Returns an array with the current set of scopes.

  ```ts
  (returnOriginalScopes?: boolean) => any[]
  ```

#### SessionParams

* \[key: string]

  ```ts
  any
  ```

* accessToken

  The access token for the session.

  ```ts
  string
  ```

* expires

  The date the access token expires.

  ```ts
  Date
  ```

* id

  The unique identifier for the session.

  ```ts
  string
  ```

* isOnline

  Whether the access token in the session is online or offline.

  ```ts
  boolean
  ```

* onlineAccessInfo

  Information on the user for the session. Only present for online sessions.

  ```ts
  OnlineAccessInfo | StoredOnlineAccessInfo
  ```

* refreshToken

  The refresh token for the session.

  ```ts
  string
  ```

* refreshTokenExpires

  The date the refresh token expires.

  ```ts
  Date
  ```

* scope

  The scopes for the access token.

  ```ts
  string
  ```

* shop

  The Shopify shop domain.

  ```ts
  string
  ```

* state

  The state of the session. Used for the OAuth authentication code flow.

  ```ts
  string
  ```

#### StoredOnlineAccessInfo

```ts
Omit<OnlineAccessInfo, 'associated_user'> & {
  associated_user: Partial<OnlineAccessUser>;
}
```

Examples

#### Examples

* ####

  ##### Description

  Update a metafield when a product is updated

  ##### /app/routes/\*\*.ts

  ```ts
  import {type ActionFunctionArgs} from 'react-router';

  import {authenticate} from '../shopify.server';

  export const action = async ({request}: ActionFunctionArgs) => {
    const {topic, admin, payload, session} = await authenticate.webhook(request);

    // Webhook requests can trigger after an app is uninstalled
    // If the app is already uninstalled, the session may be undefined.
    if (!session) {
      throw new Response();
    }

    switch (topic) {
      case 'PRODUCTS_UPDATE':
        await admin.graphql(
          `#graphql
          mutation setMetafield($productId: ID!, $time: String!) {
            metafieldsSet(metafields: {
              ownerId: $productId
              namespace: "my-app",
              key: "webhook_received_at",
              value: $time,
              type: "string",
            }) {
              metafields {
                key
                value
              }
            }
          }
        `,
        {
          variables: {
            productId: payload.admin_graphql_api_id,
            time: new Date().toISOString(),
          },
        },
      );
    }

    return new Response();
  };
  ```

* ####

  ##### Description

  Use the \`admin\` object in the context to interact with the Admin API.

  ##### /app/routes/webhooks.tsx

  ```ts
  import { ActionFunctionArgs } from "react-router";
  import { authenticate } from "../shopify.server";

  export async function action({ request }: ActionFunctionArgs) {
    const { admin } = await authenticate.webhook(request);

    // Webhook requests can trigger after an app is uninstalled
    // If the app is already uninstalled, the session may be undefined.
    if (!session) {
      throw new Response();
    }

    const response = await admin?.graphql(
      `#graphql
      mutation populateProduct($input: ProductInput!) {
        productCreate(input: $input) {
          product {
            id
          }
        }
      }`,
      { variables: { input: { title: "Product Name" } } }
    );

    const productData = await response.json();
    return ({ data: productData.data });
  }
  ```

* ####

  ##### Description

  Get the API version used for webhook request.

  ##### /app/routes/webhooks.tsx

  ```ts
  import { ActionFunctionArgs } from "react-router";
  import { authenticate } from "../shopify.server";

  export const action = async ({ request }: ActionFunctionArgs) => {
    const { apiVersion } = await authenticate.webhook(request);
    return new Response();
  };
  ```

* ####

  ##### Description

  Get the request's POST payload.

  ##### /app/routes/webhooks.tsx

  ```ts
  import { ActionFunctionArgs } from "react-router";
  import { authenticate } from "../shopify.server";

  export const action = async ({ request }: ActionFunctionArgs) => {
    const { payload } = await authenticate.webhook(request);
    return new Response();
  };
  ```

* ####

  ##### /app/routes/webhooks.tsx

  ```ts
  import type { ActionFunctionArgs } from "react-router";
  import { authenticate } from "~/shopify.server";

  export const action = async ({ request }: ActionFunctionArgs) => {
    const { session } = await authenticate.webhook(request);
    
    // Webhook requests can trigger after an app is uninstalled
    // If the app is already uninstalled, the session may be undefined.
    if (!session) {
      throw new Response();
    }

    // Handle webhook request
    console.log("Received webhook webhook");

    return new Response();
  };
  ```

* ####

  ##### Description

  Get the shop that triggered a webhook.

  ##### /app/routes/webhooks.tsx

  ```ts
  import { ActionFunctionArgs } from "react-router";
  import { authenticate } from "../shopify.server";

  export const action = async ({ request }: ActionFunctionArgs) => {
    const { shop } = await authenticate.webhook(request);
    return new Response();
  };
  ```

* ####

  ##### Description

  Get the webhook sub-topic.

  ##### /app/routes/webhooks.tsx

  ```ts
  import { ActionFunctionArgs } from "react-router";
  import { authenticate } from "../shopify.server";

  export const action = async ({ request }: ActionFunctionArgs) => {
    const { subTopic } = await authenticate.webhook(request);
    return new Response();
  };
  ```

* ####

  ##### Description

  Get the event topic for the webhook.

  ##### /app/routes/webhooks.tsx

  ```ts
  import { ActionFunctionArgs } from "react-router";
  import { authenticate } from "../shopify.server";

  export const action = async ({ request }: ActionFunctionArgs) => {
    const { topic } = await authenticate.webhook(request);

    switch (topic) {
      case "APP_UNINSTALLED":
        // Do something when the app is uninstalled.
        break;
    }

    return new Response();
  };
  ```

* ####

  ##### Description

  Get the webhook ID.

  ##### /app/routes/webhooks.tsx

  ```ts
  import { ActionFunctionArgs } from "react-router";
  import { authenticate } from "../shopify.server";

  export const action = async ({ request }: ActionFunctionArgs) => {
    const { webhookId } = await authenticate.webhook(request);
    return new Response();
  };
  ```

***

### Related

[Interact with the Admin API. - Admin API context](https://shopify.dev/docs/api/shopify-app-react-router/v1/apis/admin-api)

***

---



<a id="latest-entrypoints-appprovider"></a>


## AppProvider

Sets up your app to look like the admin

Adds Polaris Web components to the route. If embedded is true and apiKey is provided, then the App Bridge script will be added to the page.

##### AppProviderProps

Props for the `AppProvider` component.

**`NonEmbeddedProps | EmbeddedProps`**

#### EmbeddedProps

* **apiKey**

  **string**

  **required**

  The API key for your Shopify app. This is the `Client ID` from the Partner Dashboard.

  When using the Shopify CLI, this is the `SHOPIFY_API_KEY` environment variable. If you're using the environment variable, then you need to pass it from the loader to the component.

* **children**

  **React.ReactNode**

  **required**

* **embedded**

  **true**

  **required**

  If this route should be rendered inside the Shopify admin.

  Setting this to true will include the App Bridge script on the page. If true and the route is loaded outside the Shopify admin, then the user will be redirected to the Shopify admin.

  Setting this to false will not include the App Bridge script on the page.

#### NonEmbeddedProps

* **children**

  **React.ReactNode**

  **required**

* **embedded**

  **false**

  If this route should be rendered inside the Shopify admin.

  Setting this to false means only Polaris Web components will be added to the route, not App Bridge.

  Setting this to true will include the App Bridge script on the page.

#### NonEmbeddedProps

* children

  ```ts
  React.ReactNode
  ```

* embedded

  If this route should be rendered inside the Shopify admin. Setting this to false means only Polaris Web components will be added to the route, not App Bridge. Setting this to true will include the App Bridge script on the page.

  ```ts
  false
  ```

#### EmbeddedProps

* apiKey

  The API key for your Shopify app. This is the \`Client ID\` from the Partner Dashboard. When using the Shopify CLI, this is the \`SHOPIFY\_API\_KEY\` environment variable. If you're using the environment variable, then you need to pass it from the loader to the component.

  ```ts
  string
  ```

* children

  ```ts
  React.ReactNode
  ```

* embedded

  If this route should be rendered inside the Shopify admin. Setting this to true will include the App Bridge script on the page. If true and the route is loaded outside the Shopify admin, then the user will be redirected to the Shopify admin. Setting this to false will not include the App Bridge script on the page.

  ```ts
  true
  ```

Examples

#### Examples

* ####

  ##### Description

  Wrap your route in the \`AppProvider\` component and pass in your API key.

  ##### /app/routes/\*\*\\/\*.ts

  ```ts
  import {useLoaderData} from 'react-router';
  import {authenticate} from '~/shopify.server';
  import {AppProvider} from '@shopify/shopify-app-react-router/react';

  export async function loader({ request }) {
    await authenticate.admin(request);

    return { apiKey: process.env.SHOPIFY_API_KEY };
  }

  export default function App() {
    const { apiKey } = useLoaderData();

    return (
      <AppProvider embedded apiKey={apiKey}>
        <Outlet />
      </AppProvider>
    );
  }
  ```

* ####

  ##### Description

  Add Polaris web components to the route, without adding the App Bridge script.

  ##### /app/routes/\*\*\\/\*.ts

  ```ts
  import {AppProvider} from '@shopify/shopify-app-react-router/react';

  export default function App() {
    return (
      <AppProvider embedded={false}>
        <Outlet />
      </AppProvider>
    );
  }
  ```

***

### Related

[Learn more about Polaris Web components. - Polaris Web components](https://shopify.dev/docs/api/polaris/using-polaris-web-components)

[Learn more about App Bridge. - App bridge](https://shopify.dev/docs/api/app-bridge-library)

***

---



<a id="latest-entrypoints-appproxyprovider"></a>


## AppProxyProvider

Sets up a page to render behind a Shopify app proxy, enabling JavaScript and CSS to be loaded from the app.

**Caution:**

Because React Router doesn't support URL rewriting, any route using this component should **match the pathname of the proxy URL exactly**, and **end in a trailing slash** (e.g., `https://<shop>/apps/proxy/`).

##### AppProxyProviderProps

Props for the `AppProxyProvider` component.

* **appUrl**

  **string**

  **required**

  The URL where the app is hosted. You can set this from the `SHOPIFY_APP_URL` environment variable.

* **children**

  **React.ReactNode**

  The children to render.

Examples

#### Examples

* ####

  ##### Description

  Wrap your route component in the \`AppProxyProvider\` component and pass in your app URL.

  ##### /app/routes/\*\*\\/\*.ts

  ```ts
  import {authenticate} from '~/shopify.server';
  import {AppProxyProvider} from '@shopify/shopify-app-react-router/react';

  export async function loader({ request }) {
    await authenticate.public.appProxy(request);

    return json({ appUrl: process.env.SHOPIFY_APP_URL });
  }

  export default function App() {
    const { appUrl } = useLoaderData();

    return (
      <AppProxyProvider appUrl={appUrl}>
        Page content
      </AppProxyProvider>
    );
  }
  ```

***

### Related

[Authenticate app proxy requests. - authenticate.public.appProxy](https://shopify.dev/docs/api/shopify-app-react-router/v1/authenticate/public/app-proxy)

[Create links that work within app proxies. - AppProxyLink](https://shopify.dev/docs/api/shopify-app-react-router/v1/app-proxy-components/appproxylink)

***

---



<a id="latest-entrypoints-shopifyapp"></a>


## shopifyApp

Returns a set of functions that can be used by the app's backend to be able to respond to all Shopify requests.

The shape of the returned object changes depending on the value of `distribution`. If it is `AppDistribution.ShopifyAdmin`, then only `ShopifyAppBase` objects are returned, otherwise `ShopifyAppLogin` objects are included.

### shopify​App(**[appConfig](#shopifyapp-propertydetail-appconfig)**​)

Creates an object your app will use to interact with Shopify.

#### Parameters

* **appConfig**

  **Readonly\<Config>**

  **required**

  Configuration options for your Shopify app, such as the scopes your app needs.

#### Returns

* **ShopifyApp\<Config extends AppConfigArg\<Storage, Future>>**

  `ShopifyApp` An object constructed using your appConfig. It has methods for interacting with Shopify.

#### ShopifyApp

An object your app can use to interact with Shopify. By default, the app's distribution is \`AppStore\`.

```ts
Config['distribution'] extends AppDistribution.ShopifyAdmin
    ? AdminApp<Config>
    : Config['distribution'] extends AppDistribution.SingleMerchant
      ? EnforceSessionStorage<Config, SingleMerchantApp<Config>>
      : Config['distribution'] extends AppDistribution.AppStore
        ? EnforceSessionStorage<Config, AppStoreApp<Config>>
        : EnforceSessionStorage<Config, AppStoreApp<Config>>
```

#### AppDistribution

* AppStore

  ```ts
  app_store
  ```

* SingleMerchant

  ```ts
  single_merchant
  ```

* ShopifyAdmin

  ```ts
  shopify_admin
  ```

#### AdminApp

* addDocumentResponseHeaders

  Adds the required Content Security Policy headers for Shopify apps to the given Headers object.

  ```ts
  AddDocumentResponseHeaders
  ```

* authenticate

  Ways to authenticate requests from different surfaces across Shopify.

  ```ts
  Authenticate<Config>
  ```

* registerWebhooks

  Register shop-specific webhook subscriptions using the Admin GraphQL API. In many cases defining app-specific webhooks in the \`shopify.app.toml\` will be sufficient and easier to manage. Please see: You should only use this if you need shop-specific webhooks.

  ```ts
  RegisterWebhooks
  ```

* sessionStorage

  The \`SessionStorage\` instance you passed in as a config option.

  ```ts
  SessionStorageType<Config>
  ```

* unauthenticated

  Ways to get Contexts from requests that do not originate from Shopify.

  ```ts
  Unauthenticated
  ```

#### AddDocumentResponseHeaders

* request

  ```ts
  Request
  ```

* headers

  ```ts
  Headers
  ```

returns

```ts
void
```

#### Authenticate

* admin

  Authenticate an admin Request and get back an authenticated admin context. Use the authenticated admin context to interact with Shopify. Examples of when to use this are requests from your app's UI, or requests from admin extensions. If there is no session for the Request, this will redirect the merchant to correct auth flows.

  ```ts
  AuthenticateAdmin<Config>
  ```

* flow

  Authenticate a Flow extension Request and get back an authenticated context, containing an admin context to access the API, and the payload of the request. If there is no session for the Request, this will return an HTTP 400 error. Note that this will always be a POST request.

  ```ts
  AuthenticateFlow
  ```

* fulfillmentService

  Authenticate a request from a fulfillment service and get back an authenticated context.

  ```ts
  AuthenticateFulfillmentService
  ```

* pos

  Authenticate a request from a POS UI extension

  ```ts
  AuthenticatePOS
  ```

* public

  Authenticate a public request and get back a session token.

  ```ts
  AuthenticatePublic
  ```

* webhook

  Authenticate a Shopify webhook request, get back an authenticated admin context and details on the webhook request

  ```ts
  AuthenticateWebhook<string>
  ```

#### AuthenticateAdmin

Authenticates requests coming from the Shopify admin. > Note: The shape of the returned object changes depending on the \`distribution\` config. Merchant custom apps (\`AppDistribution.ShopifyAdmin\`) are not embedded so do not return session tokens or redirect functionality. All other distributions are embedded and so they return a context with session tokens and redirect functionality.

* request

  ```ts
  Request
  ```

returns

```ts
Promise<AdminContext<Config>>
```

#### AdminContext

```ts
EmbeddedTypedAdminContext<Config> & ScopesContext
```

#### EmbeddedTypedAdminContext

```ts
Config['distribution'] extends AppDistribution.ShopifyAdmin
    ? NonEmbeddedAdminContext<Config>
    : EmbeddedAdminContext<Config>
```

#### NonEmbeddedAdminContext

* admin

  Methods for interacting with the GraphQL / REST Admin APIs for the store that made the request.

  ```ts
  AdminApiContext
  ```

* billing

  Billing methods for this store, based on the plans defined in the \`billing\` config option.

  ```ts
  BillingContext<Config>
  ```

* cors

  A function that ensures the CORS headers are set correctly for the response.

  ```ts
  EnsureCORSFunction
  ```

* session

  The session for the user who made the request. This comes from the session storage which \`shopifyApp\` uses to store sessions in your database of choice. Use this to get shop or user-specific data.

  ```ts
  Session
  ```

#### AdminApiContext

Provides utilities that apps can use to make requests to the Admin API.

* graphql

  Methods for interacting with the Shopify Admin GraphQL API

  ```ts
  GraphQLClient<AdminOperations>
  ```

#### GraphQLClient

* query

  ```ts
  Operation extends keyof Operations
  ```

* options

  ```ts
  GraphQLQueryOptions<Operation, Operations>
  ```

returns

```ts
interface Promise<T> {
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;

    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
}, interface Promise<T> {}, Promise: PromiseConstructor, interface Promise<T> {
    readonly [Symbol.toStringTag]: string;
}, interface Promise<T> {
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
}
```

#### GraphQLQueryOptions

* apiVersion

  The version of the API to use for the request.

  ```ts
  ApiVersion
  ```

* headers

  Additional headers to include in the request.

  ```ts
  Record<string, any>
  ```

* signal

  An optional AbortSignal to cancel the request.

  ```ts
  AbortSignal
  ```

* tries

  The total number of times to try the request if it fails.

  ```ts
  number
  ```

* variables

  The variables to pass to the operation.

  ```ts
  ApiClientRequestOptions<Operation, Operations>
  ```

#### ApiVersion

* October24

  ```ts
  2024-10
  ```

* January25

  ```ts
  2025-01
  ```

* April25

  ```ts
  2025-04
  ```

* July25

  ```ts
  2025-07
  ```

* October25

  ```ts
  2025-10
  ```

* January26

  ```ts
  2026-01
  ```

* April26

  ```ts
  2026-04
  ```

* Unstable

  ```ts
  unstable
  ```

#### BillingContext

Provides utilities that apps can use to request billing for the app using the Admin API.

* cancel

  Cancels an ongoing subscription, given its ID.

  ```ts
  (options: CancelBillingOptions) => Promise<AppSubscription>
  ```

* check

  Checks if the shop has an active payment for any plan defined in the \`billing\` config option.

  ```ts
  <Options extends CheckBillingOptions<Config>>(options?: Options) => Promise<BillingCheckResponseObject>
  ```

* createUsageRecord

  Creates a usage record for an app subscription.

  ```ts
  (options: CreateUsageRecordOptions) => Promise<UsageRecord>
  ```

* request

  Requests payment for the plan.

  ```ts
  (options: RequestBillingOptions<Config>) => Promise<never>
  ```

* require

  Checks if the shop has an active payment for any plan defined in the \`billing\` config option.

  ```ts
  (options: RequireBillingOptions<Config>) => Promise<BillingCheckResponseObject>
  ```

* updateUsageCappedAmount

  Updates the capped amount for a usage billing plan.

  ```ts
  (options: UpdateUsageCappedAmountOptions) => Promise<never>
  ```

#### CancelBillingOptions

* isTest

  Whether to use the test mode. This prevents the credit card from being charged.

  ```ts
  boolean
  ```

* prorate

  Whether to issue prorated credits for the unused portion of the app subscription. There will be a corresponding deduction (based on revenue share) to your Partner account. For example, if a $10.00 app subscription (with 0% revenue share) is cancelled and prorated half way through the billing cycle, then the merchant will be credited $5.00 and that amount will be deducted from your Partner account.

  ```ts
  boolean
  ```

* subscriptionId

  The ID of the subscription to cancel.

  ```ts
  string
  ```

#### Options

* layout

  Whether to use the shop's theme layout around the Liquid content.

  ```ts
  boolean
  ```

#### CheckBillingOptions

* isTest

  Whether to include charges that were created on test mode. Test shops and demo shops cannot be charged.

  ```ts
  boolean
  ```

* plans

  The plans to check for. Must be one of the values defined in the \`billing\` config option.

  ```ts
  (keyof Config["billing"])[]
  ```

#### CreateUsageRecordOptions

* description

  The description of the app usage record.

  ```ts
  string
  ```

* idempotencyKey

  ```ts
  string
  ```

* isTest

  Whether to use the test mode. This prevents the credit card from being charged.

  ```ts
  boolean
  ```

* price

  The price of the app usage record.

  ```ts
  { amount: number; currencyCode: string; }
  ```

* subscriptionLineItemId

  ```ts
  string
  ```

#### RequestBillingOptions

* amount

  Amount to charge for this plan.

  ```ts
  number
  ```

* currencyCode

  Currency code for this plan.

  ```ts
  string
  ```

* interval

  Interval for this plan. Must be set to \`OneTime\`.

  ```ts
  BillingInterval.OneTime
  ```

* isTest

  Whether to use the test mode. This prevents the credit card from being charged. Test shops and demo shops cannot be charged.

  ```ts
  boolean
  ```

* lineItems

  The line items for this plan.

  ```ts
  ({ interval?: BillingInterval.Every30Days | BillingInterval.Annual; discount?: { durationLimitInIntervals?: number; value?: { amount?: number; percentage?: never; } | { amount?: never; percentage?: number; }; }; amount?: number; currencyCode?: string; } | { interval?: BillingInterval.Usage; amount?: number; terms?: string; currencyCode?: string; })[]
  ```

* plan

  The plan to request. Must be one of the values defined in the \`billing\` config option.

  ```ts
  keyof Config["billing"]
  ```

* replacementBehavior

  The replacement behavior to use for this plan.

  ```ts
  BillingReplacementBehavior
  ```

* returnUrl

  The URL to return to after the merchant approves the payment.

  ```ts
  string
  ```

* trialDays

  How many trial days to give before charging for this plan.

  ```ts
  number
  ```

#### RequireBillingOptions

* isTest

  Whether to include charges that were created on test mode. Test shops and demo shops cannot be charged.

  ```ts
  boolean
  ```

* onFailure

  How to handle the request if the shop doesn't have an active payment for any plan.

  ```ts
  (error: any) => Promise<Response>
  ```

* plans

  The plans to check for. Must be one of the values defined in the \`billing\` config option.

  ```ts
  (keyof Config["billing"])[]
  ```

#### UpdateUsageCappedAmountOptions

* cappedAmount

  The maximum charge for the usage billing plan.

  ```ts
  { amount: number; currencyCode: string; }
  ```

* subscriptionLineItemId

  The subscription line item ID to update.

  ```ts
  string
  ```

#### EnsureCORSFunction



#### Session

Stores App information from logged in merchants so they can make authenticated requests to the Admin API.

* id

  The unique identifier for the session.

  ```ts
  string
  ```

* shop

  The Shopify shop domain, such as \`example.myshopify.com\`.

  ```ts
  string
  ```

* state

  The state of the session. Used for the OAuth authentication code flow.

  ```ts
  string
  ```

* isOnline

  Whether the access token in the session is online or offline.

  ```ts
  boolean
  ```

* scope

  The desired scopes for the access token, at the time the session was created.

  ```ts
  string
  ```

* expires

  The date the access token expires.

  ```ts
  Date
  ```

* accessToken

  The access token for the session.

  ```ts
  string
  ```

* refreshToken

  The refresh token for the session.

  ```ts
  string
  ```

* refreshTokenExpires

  The date the refresh token expires.

  ```ts
  Date
  ```

* onlineAccessInfo

  Information on the user for the session. Only present for online sessions.

  ```ts
  OnlineAccessInfo
  ```

* isActive

  Whether the session is active. Active sessions have an access token that is not expired, and has has the given scopes if scopes is equal to a truthy value.

  ```ts
  (scopes: string | string[] | AuthScopes, withinMillisecondsOfExpiry?: number) => boolean
  ```

* isScopeChanged

  Whether the access token includes the given scopes if they are provided.

  ```ts
  (scopes: string | string[] | AuthScopes) => boolean
  ```

* isScopeIncluded

  Whether the access token includes the given scopes.

  ```ts
  (scopes: string | string[] | AuthScopes) => boolean
  ```

* isExpired

  Whether the access token is expired.

  ```ts
  (withinMillisecondsOfExpiry?: number) => boolean
  ```

* toObject

  Converts an object with data into a Session.

  ```ts
  () => SessionParams
  ```

* equals

  Checks whether the given session is equal to this session.

  ```ts
  (other: Session) => boolean
  ```

* toPropertyArray

  Converts the session into an array of key-value pairs.

  ```ts
  (returnUserData?: boolean) => [string, string | number | boolean][]
  ```

#### OnlineAccessInfo

* associated\_user

  The user associated with the access token.

  ```ts
  OnlineAccessUser
  ```

* associated\_user\_scope

  The effective set of scopes for the session.

  ```ts
  string
  ```

* expires\_in

  How long the access token is valid for, in seconds.

  ```ts
  number
  ```

#### OnlineAccessUser

* account\_owner

  Whether the user is the account owner.

  ```ts
  boolean
  ```

* collaborator

  Whether the user is a collaborator.

  ```ts
  boolean
  ```

* email

  The user's email address.

  ```ts
  string
  ```

* email\_verified

  Whether the user has verified their email address.

  ```ts
  boolean
  ```

* first\_name

  The user's first name.

  ```ts
  string
  ```

* id

  The user's ID.

  ```ts
  number
  ```

* last\_name

  The user's last name.

  ```ts
  string
  ```

* locale

  The user's locale.

  ```ts
  string
  ```

#### AuthScopes

A class that represents a set of access token scopes.

* has

  Checks whether the current set of scopes includes the given one.

  ```ts
  (scope: string | string[] | AuthScopes) => boolean
  ```

* equals

  Checks whether the current set of scopes equals the given one.

  ```ts
  (otherScopes: string | string[] | AuthScopes) => boolean
  ```

* toString

  Returns a comma-separated string with the current set of scopes.

  ```ts
  () => string
  ```

* toArray

  Returns an array with the current set of scopes.

  ```ts
  (returnOriginalScopes?: boolean) => any[]
  ```

#### SessionParams

* \[key: string]

  ```ts
  any
  ```

* accessToken

  The access token for the session.

  ```ts
  string
  ```

* expires

  The date the access token expires.

  ```ts
  Date
  ```

* id

  The unique identifier for the session.

  ```ts
  string
  ```

* isOnline

  Whether the access token in the session is online or offline.

  ```ts
  boolean
  ```

* onlineAccessInfo

  Information on the user for the session. Only present for online sessions.

  ```ts
  OnlineAccessInfo | StoredOnlineAccessInfo
  ```

* refreshToken

  The refresh token for the session.

  ```ts
  string
  ```

* refreshTokenExpires

  The date the refresh token expires.

  ```ts
  Date
  ```

* scope

  The scopes for the access token.

  ```ts
  string
  ```

* shop

  The Shopify shop domain.

  ```ts
  string
  ```

* state

  The state of the session. Used for the OAuth authentication code flow.

  ```ts
  string
  ```

#### StoredOnlineAccessInfo

```ts
Omit<OnlineAccessInfo, 'associated_user'> & {
  associated_user: Partial<OnlineAccessUser>;
}
```

#### EmbeddedAdminContext

* admin

  Methods for interacting with the GraphQL / REST Admin APIs for the store that made the request.

  ```ts
  AdminApiContext
  ```

* billing

  Billing methods for this store, based on the plans defined in the \`billing\` config option.

  ```ts
  BillingContext<Config>
  ```

* cors

  A function that ensures the CORS headers are set correctly for the response.

  ```ts
  EnsureCORSFunction
  ```

* redirect

  A function that redirects the user to a new page, ensuring that the appropriate parameters are set for embedded apps. Returned only for embedded apps (all apps except merchant custom apps).

  ```ts
  RedirectFunction
  ```

* session

  The session for the user who made the request. This comes from the session storage which \`shopifyApp\` uses to store sessions in your database of choice. Use this to get shop or user-specific data.

  ```ts
  Session
  ```

* sessionToken

  The decoded and validated session token for the request. Returned only for embedded apps (all distribution types except merchant custom apps)

  ```ts
  JwtPayload
  ```

#### RedirectFunction

* url

  ```ts
  string
  ```

* init

  ```ts
  RedirectInit
  ```

returns

```ts
Response
```

#### RedirectInit

```ts
number | (ResponseInit & {target?: RedirectTarget})
```

#### RedirectTarget

```ts
'_self' | '_parent' | '_top' | '_blank'
```

#### ScopesContext

* scopes

  Methods to manage scopes for the store that made the request.

  ```ts
  ScopesApiContext
  ```

#### ScopesApiContext

Provides utilities that apps can use to \[manage scopes]\(https://shopify.dev/docs/apps/build/authentication-authorization/app-installation/manage-access-scopes) for the app using the Admin API.

* query

  Queries Shopify for the scopes for this app on this shop

  ```ts
  () => Promise<ScopesDetail>
  ```

* request

  Requests the merchant to grant the provided scopes for this app on this shop Warning: This method performs a server-side redirect.

  ```ts
  (scopes: string[]) => Promise<void>
  ```

* revoke

  Revokes the provided scopes from this app on this shop Warning: This method throws an \[error]\(https://shopify.dev/docs/api/admin-graphql/unstable/objects/AppRevokeAccessScopesAppRevokeScopeError) if the provided optional scopes contains a required scope.

  ```ts
  (scopes: string[]) => Promise<ScopesRevokeResponse>
  ```

#### ScopesDetail

* granted

  The scopes that have been granted on the shop for this app

  ```ts
  string[]
  ```

* optional

  The optional scopes that the app has declared in its configuration

  ```ts
  string[]
  ```

* required

  The required scopes that the app has declared in its configuration

  ```ts
  string[]
  ```

#### ScopesRevokeResponse

* revoked

  The scopes that have been revoked on the shop for this app

  ```ts
  string[]
  ```

#### AuthenticateFlow

Verifies requests coming from Shopify Flow extensions.

* request

  ```ts
  Request
  ```

returns

```ts
Promise<FlowContext>
```

#### FlowContext

* admin

  An admin context for the Flow request. Returned only if there is a session for the shop.

  ```ts
  AdminApiContext
  ```

* payload

  The payload from the Flow request.

  ```ts
  any
  ```

* session

  A session with an offline token for the shop. Returned only if there is a session for the shop.

  ```ts
  Session
  ```

#### AuthenticateFulfillmentService

Verifies requests coming from Shopify to fulfillment service apps.

* request

  ```ts
  Request
  ```

returns

```ts
Promise<FulfillmentServiceContext>
```

#### FulfillmentServiceContext

* admin

  An admin context for the fulfillment service request. Returned only if there is a session for the shop.

  ```ts
  AdminApiContext
  ```

* payload

  The payload from the fulfillment service request.

  ```ts
  FulfillmentServicePayload
  ```

* session

  A session with an offline token for the shop. Returned only if there is a session for the shop.

  ```ts
  Session
  ```

#### FulfillmentServicePayload

```ts
Record<string, any> & {
  kind: string;
}
```

#### AuthenticatePublic

* appProxy

  Authenticate a request from an app proxy

  ```ts
  AuthenticateAppProxy
  ```

* checkout

  Authenticate a request from a checkout extension

  ```ts
  AuthenticateCheckout
  ```

* customerAccount

  Authenticate a request from a customer account extension

  ```ts
  AuthenticateCustomerAccount
  ```

#### AuthenticateAppProxy

Authenticates requests coming to the app from Shopify app proxies.

* request

  ```ts
  Request
  ```

returns

```ts
Promise<AppProxyContext | AppProxyContextWithSession>
```

#### AppProxyContext

* admin

  No session is available for the shop that made this request. Therefore no methods for interacting with the GraphQL / REST Admin APIs are available.

  ```ts
  undefined
  ```

* liquid

  A utility for creating a Liquid Response.

  ```ts
  LiquidResponseFunction
  ```

* session

  No session is available for the shop that made this request. This comes from the session storage which \`shopifyApp\` uses to store sessions in your database of choice.

  ```ts
  undefined
  ```

* storefront

  No session is available for the shop that made this request. Therefore no method for interacting with the Storefront API is available.

  ```ts
  undefined
  ```

#### LiquidResponseFunction

* body

  ```ts
  string
  ```

* initAndOptions

  ```ts
  number | (ResponseInit & Options)
  ```

returns

```ts
Response
```

#### AppProxyContextWithSession

* admin

  Methods for interacting with the GraphQL / REST Admin APIs for the store that made the request.

  ```ts
  AdminApiContext
  ```

* liquid

  A utility for creating a Liquid Response.

  ```ts
  LiquidResponseFunction
  ```

* session

  The session for the shop that made the request. This comes from the session storage which \`shopifyApp\` uses to store sessions in your database of choice. Use this to get shop or user-specific data.

  ```ts
  Session
  ```

* storefront

  Method for interacting with the Shopify Storefront Graphql API for the store that made the request.

  ```ts
  StorefrontContext
  ```

#### StorefrontContext

Provides utilities that apps can use to make requests to the Storefront API.

* graphql

  Method for interacting with the Shopify Storefront GraphQL API If you're getting incorrect type hints in the Shopify template, follow \[these instructions]\(https://github.com/Shopify/shopify-app-template-react-router/tree/main#incorrect-graphql-hints).

  ```ts
  GraphQLClient<StorefrontOperations>
  ```

#### AuthenticateCheckout

Authenticates requests coming from Shopify checkout extensions.

* request

  ```ts
  Request
  ```

* options

  ```ts
  AuthenticateCheckoutOptions
  ```

returns

```ts
Promise<CheckoutContext>
```

#### AuthenticateCheckoutOptions

* corsHeaders

  ```ts
  string[]
  ```

#### CheckoutContext

Authenticated Context for a checkout request

* cors

  A function that ensures the CORS headers are set correctly for the response.

  ```ts
  EnsureCORSFunction
  ```

* sessionToken

  The decoded and validated session token for the request Refer to the OAuth docs for the \[session token payload]\(https://shopify.dev/docs/apps/auth/oauth/session-tokens#payload).

  ```ts
  JwtPayload
  ```

#### AuthenticateCustomerAccount

Authenticates requests coming from Shopify customer account extensions.

* request

  ```ts
  Request
  ```

* options

  ```ts
  AuthenticateCustomerAccountOptions
  ```

returns

```ts
Promise<CustomerAccountContext>
```

#### AuthenticateCustomerAccountOptions

* corsHeaders

  ```ts
  string[]
  ```

#### CustomerAccountContext

Authenticated Context for a customer account extension request

* cors

  A function that ensures the CORS headers are set correctly for the response.

  ```ts
  EnsureCORSFunction
  ```

* sessionToken

  The decoded and validated session token for the request Refer to the OAuth docs for the \[session token payload]\(https://shopify.dev/docs/apps/auth/oauth/session-tokens#payload).

  ```ts
  JwtPayload
  ```

#### AuthenticateWebhook

Verifies requests coming from Shopify webhooks.

* request

  ```ts
  Request
  ```

returns

```ts
Promise<WebhookContext<Topics>>
```

#### WebhookContext

```ts
WebhookContextWithoutSession<Topics> | WebhookContextWithSession<Topics>
```

#### WebhookContextWithoutSession

* action

  The action type: 'create', 'update', or 'delete'. Only available for events webhooks.

  ```ts
  string
  ```

* admin

  ```ts
  undefined
  ```

* apiVersion

  The API version used for the webhook.

  ```ts
  string
  ```

* eventId

  The unique event identifier.

  ```ts
  string
  ```

* handle

  The handle for the webhook subscription. Only available for events webhooks.

  ```ts
  string
  ```

* name

  The name assigned to the webhook subscription. Only available for traditional webhooks.

  ```ts
  string
  ```

* payload

  The payload from the webhook request.

  ```ts
  Record<string, any>
  ```

* resourceId

  The GID of the resource that triggered the webhook. Only available for events webhooks.

  ```ts
  string
  ```

* session

  ```ts
  undefined
  ```

* shop

  The shop where the webhook was triggered.

  ```ts
  string
  ```

* subTopic

  The sub-topic of the webhook. Only available for traditional webhooks.

  ```ts
  string
  ```

* topic

  The topic of the webhook.

  ```ts
  Topics
  ```

* triggeredAt

  The timestamp when the webhook was triggered.

  ```ts
  string
  ```

* webhookId

  A unique ID for the webhook. Useful to keep track of which events your app has already processed. For events webhooks (\`webhookType === 'events'\`), this is set to the \`eventId\` value for backwards compatibility. Prefer using \`eventId\` directly for events webhooks — \`webhookId\` will be removed from events webhooks in the next major version.

  ```ts
  string
  ```

* webhookType

  The type of webhook: 'webhooks' for traditional webhooks or 'events' for events webhooks.

  ```ts
  WebhookTypeValue
  ```

#### WebhookContextWithSession

* action

  The action type: 'create', 'update', or 'delete'. Only available for events webhooks.

  ```ts
  string
  ```

* admin

  An admin context for the webhook. Returned only if there is a session for the shop.

  ```ts
  AdminApiContext
  ```

* apiVersion

  The API version used for the webhook.

  ```ts
  string
  ```

* eventId

  The unique event identifier.

  ```ts
  string
  ```

* handle

  The handle for the webhook subscription. Only available for events webhooks.

  ```ts
  string
  ```

* name

  The name assigned to the webhook subscription. Only available for traditional webhooks.

  ```ts
  string
  ```

* payload

  The payload from the webhook request.

  ```ts
  Record<string, any>
  ```

* resourceId

  The GID of the resource that triggered the webhook. Only available for events webhooks.

  ```ts
  string
  ```

* session

  A session with an offline token for the shop. Returned only if there is a session for the shop. Webhook requests can trigger after an app is uninstalled If the app is already uninstalled, the session may be undefined. Therefore, you should check for the session before using it.

  ```ts
  Session
  ```

* shop

  The shop where the webhook was triggered.

  ```ts
  string
  ```

* subTopic

  The sub-topic of the webhook. Only available for traditional webhooks.

  ```ts
  string
  ```

* topic

  The topic of the webhook.

  ```ts
  Topics
  ```

* triggeredAt

  The timestamp when the webhook was triggered.

  ```ts
  string
  ```

* webhookId

  A unique ID for the webhook. Useful to keep track of which events your app has already processed. For events webhooks (\`webhookType === 'events'\`), this is set to the \`eventId\` value for backwards compatibility. Prefer using \`eventId\` directly for events webhooks — \`webhookId\` will be removed from events webhooks in the next major version.

  ```ts
  string
  ```

* webhookType

  The type of webhook: 'webhooks' for traditional webhooks or 'events' for events webhooks.

  ```ts
  WebhookTypeValue
  ```

#### RegisterWebhooks

* options

  ```ts
  RegisterWebhooksOptions
  ```

returns

```ts
Promise<RegisterReturn | void>
```

#### RegisterWebhooksOptions

* session

  The Shopify session used to register webhooks using the Admin API.

  ```ts
  Session
  ```

#### SessionStorageType

```ts
Config['sessionStorage'] extends SessionStorage
    ? Config['sessionStorage']
    : SessionStorage
```

#### Unauthenticated

* admin

  Get an admin context by passing a shop \*\*Warning\*\* This should only be used for Requests that do not originate from Shopify. You must do your own authentication before using this method. This method throws an error if there is no session for the shop.

  ```ts
  GetUnauthenticatedAdminContext
  ```

* storefront

  Get a storefront context by passing a shop \*\*Warning\*\* This should only be used for Requests that do not originate from Shopify. You must do your own authentication before using this method. This method throws an error if there is no session for the shop.

  ```ts
  GetUnauthenticatedStorefrontContext
  ```

#### GetUnauthenticatedAdminContext

Creates an unauthenticated Admin context.

* shop

  ```ts
  string
  ```

returns

```ts
Promise<UnauthenticatedAdminContext>
```

#### UnauthenticatedAdminContext

* admin

  Methods for interacting with the GraphQL Admin API for the given store.

  ```ts
  AdminApiContext
  ```

* session

  The session for the given shop. This comes from the session storage which \`shopifyApp\` uses to store sessions in your database of choice. This will always be an offline session. You can use to get shop-specific data.

  ```ts
  Session
  ```

#### GetUnauthenticatedStorefrontContext

Creates an unauthenticated Storefront context.

* shop

  ```ts
  string
  ```

returns

```ts
Promise<UnauthenticatedStorefrontContext>
```

#### UnauthenticatedStorefrontContext

* session

  The session for the given shop. This comes from the session storage which \`shopifyApp\` uses to store sessions in your database of choice. This will always be an offline session. You can use this to get shop specific data.

  ```ts
  Session
  ```

* storefront

  Method for interacting with the Shopify GraphQL Storefront API for the given store.

  ```ts
  StorefrontContext
  ```

#### EnforceSessionStorage

```ts
Base & {
  sessionStorage: SessionStorageType<Config>;
}
```

#### Base

* \#session

  ```ts
  Session
  ```

* session

  ```ts
  Session
  ```

* save

  ```ts
  ({ update }?: SaveArgs) => Promise<void>
  ```

* saveAndUpdate

  ```ts
  () => Promise<void>
  ```

* delete

  ```ts
  () => Promise<void>
  ```

* serialize

  ```ts
  (saving?: boolean) => Body
  ```

* toJSON

  ```ts
  () => Body
  ```

* request

  ```ts
  <T = unknown>(args: RequestArgs) => Promise<RestRequestReturn<T>>
  ```

#### SaveArgs

* update

  ```ts
  boolean
  ```

#### Body



#### RequestArgs

* body

  ```ts
  Body | null
  ```

* entity

  ```ts
  Base | null
  ```

* http\_method

  ```ts
  string
  ```

* operation

  ```ts
  string
  ```

* params

  ```ts
  ParamSet
  ```

* requireIds

  ```ts
  boolean
  ```

* session

  ```ts
  Session
  ```

* urlIds

  ```ts
  IdSet
  ```

#### ParamSet



#### IdSet



#### RestRequestReturn

* body

  ```ts
  T
  ```

* headers

  ```ts
  Headers
  ```

* pageInfo

  ```ts
  PageInfo
  ```

#### PageInfo

* fields

  ```ts
  string[]
  ```

* limit

  ```ts
  string
  ```

* nextPage

  ```ts
  PageInfoParams
  ```

* nextPageUrl

  ```ts
  string
  ```

* previousPageUrl

  ```ts
  string
  ```

* prevPage

  ```ts
  PageInfoParams
  ```

#### PageInfoParams

* path

  ```ts
  string
  ```

* query

  ```ts
  SearchParams
  ```

#### SingleMerchantApp

```ts
ShopifyAppBase<Config> & ShopifyAppLogin
```

#### ShopifyAppBase

* addDocumentResponseHeaders

  Adds the required Content Security Policy headers for Shopify apps to the given Headers object.

  ```ts
  AddDocumentResponseHeaders
  ```

* authenticate

  Ways to authenticate requests from different surfaces across Shopify.

  ```ts
  Authenticate<Config>
  ```

* registerWebhooks

  Register shop-specific webhook subscriptions using the Admin GraphQL API. In many cases defining app-specific webhooks in the \`shopify.app.toml\` will be sufficient and easier to manage. Please see: You should only use this if you need shop-specific webhooks.

  ```ts
  RegisterWebhooks
  ```

* sessionStorage

  The \`SessionStorage\` instance you passed in as a config option.

  ```ts
  SessionStorageType<Config>
  ```

* unauthenticated

  Ways to get Contexts from requests that do not originate from Shopify.

  ```ts
  Unauthenticated
  ```

#### ShopifyAppLogin

* login

  Log a merchant in, and redirect them to the app root. Will redirect the merchant to authentication if a shop is present in the URL search parameters or form data. This function won't be present when the \`distribution\` config option is set to \`AppDistribution.ShopifyAdmin\`, because Admin apps aren't allowed to show a login page.

  ```ts
  Login
  ```

#### Login

* request

  ```ts
  Request
  ```

returns

```ts
Promise<LoginError | never>
```

#### LoginError

* shop

  ```ts
  LoginErrorType
  ```

#### LoginErrorType

* MissingShop

  ```ts
  MISSING_SHOP
  ```

* InvalidShop

  ```ts
  INVALID_SHOP
  ```

#### AppStoreApp

```ts
ShopifyAppBase<Config> & ShopifyAppLogin
```

#### AppConfigArg

* \_logDisabledFutureFlags

  Whether to log disabled future flags at startup.

  ```ts
  boolean
  ```

* adminApiAccessToken

  An app-wide API access token. Only applies to custom apps.

  ```ts
  string
  ```

* apiKey

  The API key for your app. Also known as Client ID in your Partner Dashboard.

  ```ts
  string
  ```

* apiSecretKey

  The API secret key for your app. Also known as Client Secret in your Partner Dashboard.

  ```ts
  string
  ```

* apiVersion

  What version of Shopify's Admin API's would you like to use.

  ```ts
  ApiVersion
  ```

* appUrl

  The URL your app is running on. The \`@shopify/cli\` provides this URL as \`process.env.SHOPIFY\_APP\_URL\`. For development this is probably a tunnel URL that points to your local machine. If this is a production app, this is your production URL.

  ```ts
  string
  ```

* authPathPrefix

  A path that Shopify can reserve for auth related endpoints. This must match a $ route in your React Router app. That route must export a loader function that calls \`shopify.authenticate.admin(request)\`.

  ```ts
  string
  ```

* billing

  Billing configurations for the app. Uses the new line item billing format that allows for more complex billing structures.

  ```ts
  BillingConfigWithLineItems
  ```

* distribution

  How your app is distributed. Default is \`AppDistribution.AppStore\`. AppStore should be used for public apps that are distributed in the Shopify App Store. SingleMerchant should be used for custom apps managed in the Partner Dashboard. ShopifyAdmin should be used for apps that are managed in the merchant's Shopify Admin.

  ```ts
  AppDistribution
  ```

* domainTransformations

  Custom domain transformations for split-domain architectures. Transformations are applied in order. The first matching transformation is used. If no transformation matches, the domain is validated as-is.

  ```ts
  DomainTransformation[]
  ```

* future

  Features that will be introduced in future releases of this package. You can opt in to these features by setting the corresponding flags. By doing so, you can prepare for future releases in advance and provide feedback on the new features.

  ```ts
  Future
  ```

* hooks

  Functions to call at key places during your apps lifecycle. These functions are called in the context of the request that triggered them. This means you can access the session.

  ```ts
  HooksConfig
  ```

* isTesting

  Whether the app is initialised for local testing.

  ```ts
  boolean
  ```

* logger

  Customization options for Shopify logs.

  ```ts
  { log?: LogFunction; level?: LogSeverity; httpRequests?: boolean; timestamps?: boolean; }
  ```

* privateAppStorefrontAccessToken

  An app-wide API access token for the storefront API. Only applies to custom apps.

  ```ts
  string
  ```

* scopes

  The scopes your app needs to access the API. Not required if using Shopify managed installation.

  ```ts
  string[] | AuthScopes
  ```

* sessionStorage

  An adaptor for storing sessions in your database of choice. Shopify provides multiple session storage adaptors and you can create your own. Optional for apps created in the Shopify Admin.

  ```ts
  Storage
  ```

* useOnlineTokens

  Whether your app use online or offline tokens. If your app uses online tokens, then both online and offline tokens will be saved to your database. This ensures your app can perform background jobs.

  ```ts
  boolean
  ```

* userAgentPrefix

  The user agent prefix to use for API requests.

  ```ts
  string
  ```

* webhooks

  The config for the shop-specific webhooks your app needs. Use this to configure shop-specific webhooks. In many cases defining app-specific webhooks in the \`shopify.app.toml\` will be sufficient and easier to manage. Please see: You should only use this if you need shop-specific webhooks. If you do need shop-specific webhooks this can be in used in conjunction with the afterAuth hook, loaders or processes such as background jobs.

  ```ts
  WebhookConfig
  ```

#### BillingConfigWithLineItems

* \[plan: string]

  ```ts
  | BillingConfigOneTimePlan
      | BillingConfigSubscriptionLineItemPlan
  ```

#### DomainTransformation

Configuration for transforming shop domains in split-domain architectures.

* includeHost

  Whether this transformation should also apply to host validation.

  ```ts
  boolean
  ```

* match

  Pattern to match against shop domains (source domain). Can be a RegExp or string (converted to RegExp internally).

  ```ts
  RegExp | string
  ```

* transform

  Transformation function or template string. - Template string: Uses $1, $2, etc. for capture group substitution - Function: Receives regex match groups and returns transformed domain

  ```ts
  ((matches: RegExpMatchArray) => string | null) | string
  ```

#### HooksConfig

* afterAuth

  A function to call after a merchant installs your app

  ```ts
  (options: AfterAuthOptions) => void | Promise<void>
  ```

#### AfterAuthOptions

* admin

  ```ts
  AdminApiContext
  ```

* session

  ```ts
  Session
  ```

#### LogSeverity

* Error

  ```ts
  0
  ```

* Warning

  ```ts
  1
  ```

* Info

  ```ts
  2
  ```

* Debug

  ```ts
  3
  ```

#### WebhookConfig



#### Future flags

Set future flags using the `future` configuration field to opt in to upcoming breaking changes.

With this feature, you can prepare for major releases ahead of time, as well as try out new features before they are released.

Examples

#### Examples

* ####

  ##### /shopify.server.ts

  ```ts
  import { shopifyApp } from "@shopify/shopify-app-react-router/server";

  const shopify = shopifyApp({
    apiKey: process.env.SHOPIFY_API_KEY!,
    apiSecretKey: process.env.SHOPIFY_API_SECRET!,
    scopes: process.env.SCOPES?.split(",")!,
    appUrl: process.env.SHOPIFY_APP_URL!,
  });
  export default shopify;
  ```

* #### Return headers on all requests

  ##### Description

  Add headers to all HTML requests by calling \`shopify.addDocumentResponseHeaders\` in \`entry.server.tsx\`.

  ##### \~/shopify.server.ts

  ```ts
  import { shopifyApp } from "@shopify/shopify-app-react-router/server";

  const shopify = shopifyApp({
    // ...etc
  });
  export default shopify;
  export const addDocumentResponseheaders = shopify.addDocumentResponseheaders;
  ```

  ##### entry.server.tsx

  ```ts
  import { addDocumentResponseHeaders } from "~/shopify.server";

  export default function handleRequest(
    request: Request,
    responseStatusCode: number,
    responseHeaders: Headers,
    reactRouterContext: EntryContext
  ) {
    const markup = renderToString(
      <ReactRouterServer context={reactRouterContext} url={request.url} />
    );

    responseHeaders.set("Content-Type", "text/html");
    addDocumentResponseHeaders(request, responseHeaders);

    return new Response("<!DOCTYPE html>" + markup, {
      status: responseStatusCode,
      headers: responseHeaders,
    });
  }
  ```

* #### Authenticate Shopify requests

  ##### Description

  Use the functions in \`authenticate\` to validate requests coming from Shopify.

  ##### /app/shopify.server.ts

  ```ts
  import { ApiVersion, shopifyApp } from "@shopify/shopify-app-react-router/server";

  const shopify = shopifyApp({
    // ...etc
  });
  export default shopify;
  ```

  ##### /app/routes/\*\*\\/\*.jsx

  ```ts
  import { LoaderFunctionArgs, json } from "react-router";
  import shopify from "../../shopify.server";

  export async function loader({ request }: LoaderFunctionArgs) {
    const {admin, session, sessionToken, billing} = shopify.authenticate.admin(request);
    const response = admin.graphql(`{ shop { name } }`)

    return (await response.json());
  }
  ```

* ####

  ##### Description

  Trigger the registration to create the shop-specific webhook subscriptions after a merchant installs your app using the \`afterAuth\` hook. Learn more about \[subscribing to webhooks.]\(https://shopify.dev/docs/api/shopify-app-react-router/v3/guide-webhooks)

  ##### app/shopify.server.ts

  ```ts
  import { DeliveryMethod, shopifyApp } from "@shopify/shopify-app-react-router/server";

  const shopify = shopifyApp({
    webhooks: {
      PRODUCTS_CREATE: {
        deliveryMethod: DeliveryMethod.Http,
        callbackUrl: "/webhooks/products/create",
      },
    },
    hooks: {
      afterAuth: async ({ session }) => {
        // Register webhooks for the shop
        // In this example, every shop will have these webhooks
        // You could wrap this in some custom shop specific conditional logic if needed
        shopify.registerWebhooks({ session });
      },
    },
    // ...etc
  });
  ```

* ####

  ##### Description

  Import the \`@shopify/shopify-app-session-storage-prisma\` package to store sessions in your Prisma database.

  ##### /app/shopify.server.ts

  ```ts
  import { shopifyApp } from "@shopify/shopify-app-react-router/server";
  import { PrismaSessionStorage } from "@shopify/shopify-app-session-storage-prisma";
  import prisma from "~/db.server";

  const shopify = shopifyApp({
    sessionStorage: new PrismaSessionStorage(prisma),
    // ...etc
  })

  // shopify.sessionStorage is an instance of PrismaSessionStorage
  ```

* #### Using unauthenticated contexts

  ##### Description

  Create contexts for requests that don't come from Shopify.

  ##### /app/shopify.server.ts

  ```ts
  import { ApiVersion, shopifyApp } from "@shopify/shopify-app-react-router/server";

  const shopify = shopifyApp({
    // ...etc
  });
  export default shopify;
  ```

  ##### /app/routes/\*\*\\/\*.jsx

  ```ts
  import { LoaderFunctionArgs, json } from "react-router";
  import { authenticateExternal } from "~/helpers/authenticate"
  import shopify from "../../shopify.server";

  export async function loader({ request }: LoaderFunctionArgs) {
    const shop = await authenticateExternal(request)
    const {admin} = await shopify.unauthenticated.admin(shop);
    const response = admin.graphql(`{ shop { currencyCode } }`)

    return (await response.json());
  }
  ```

* #### Creating a login page

  ##### Description

  Use \`shopify.login\` to create a login form, in a route that can handle GET and POST requests.

  ##### /app/shopify.server.ts

  ```ts
  import { ApiVersion, shopifyApp } from "@shopify/shopify-app-react-router/server";

  const shopify = shopifyApp({
    // ...etc
  });
  export default shopify;
  ```

  ##### /app/routes/auth/login.tsx

  ```ts
  import shopify from "../../shopify.server";

  export async function loader({ request }: LoaderFunctionArgs) {
    const errors = shopify.login(request);

    return (errors);
  }

  export async function action({ request }: ActionFunctionArgs) {
    const errors = shopify.login(request);

    return (errors);
  }

  export default function Auth() {
    const actionData = useActionData<typeof action>();
    const [shop, setShop] = useState("");

    return (
      <Page>
        <Card>
          <Form method="post">
            <FormLayout>
              <Text variant="headingMd" as="h2">
                Login
              </Text>
              <TextField
                type="text"
                name="shop"
                label="Shop domain"
                helpText="e.g: my-shop-domain.myshopify.com"
                value={shop}
                onChange={setShop}
                autoComplete="on"
                error={actionData?.errors.shop}
              />
              <Button submit primary>
                Submit
              </Button>
            </FormLayout>
          </Form>
        </Card>
      </Page>
    );
  }
  ```

***

### Related

[Authenticate requests coming from Shopify. - Authenticated contexts](https://shopify.dev/docs/api/shopify-app-react-router/v1/authenticate)

[Interact with the API on non-Shopify requests. - Unauthenticated contexts](https://shopify.dev/docs/api/shopify-app-react-router/v1/unauthenticated)

***

---



<a id="latest-guide-admin"></a>


## Interacting with Shopify Admin

Learn how to authenticate and handle requests from Shopify Admin in your React Router app.

The [`authenticate.admin`](https://shopify.dev/docs/api/shopify-app-react-router/v1/authenticate/admin) function handles authentication for embedded apps and merchant custom apps. It verifies app installation and provides context for interacting with the Admin API.

This guide covers authentication patterns, API usage, and request handling for your app.

***

### Authenticating requests

To authenticate admin requests you can call `authenticate.admin(request)` in a loader or an action.

If there's a session for this user, then this loader will return null. If there's no session for the user, then the package will perform [token exchange](https://shopify.dev/docs/apps/build/authentication-authorization/access-tokens/#token-exchange) and create a new session.

**Tip:**

If you are authenticating more than one route, then we recommend using [React router layout routes](https://reactrouter.com/start/framework/routing#layout-routes) to automatically authenticate them.

### Authenticating requests

### /app/routes/\*\*/\*.tsx

```tsx
import {LoaderFunction, ActionFunction} from 'react-router';


import {authenticate} from '~/shopify.server';


export const loader: LoaderFunction = async ({request}) => {
  await authenticate.admin(request);


  // App logic


  return null;
};


export const action: ActionFunction = async ({request}) => {
  await authenticate.admin(request);


  // App logic


  return null;
};
```

***

### Headers

When redirecting outside the app, and in certain error scenarios, the package will throw a response with specific headers.

To ensure the headers are set correctly use the provided `ErrorBoundary` and `headers` exports.

### Configure headers and error boundaries

### /app/routes/\*\*/\*.tsx

```tsx
import {useRouteError} from 'react-router';
import {boundary} from '@shopify/shopify-app-react-router';


export function ErrorBoundary() {
  return boundary.error(useRouteError());
}


export const headers = (headersArgs) => {
  return boundary.headers(headersArgs);
};
```

***

### Using the Graph​QL API

Once a request is authenticated, `authenticate.admin` will return an `admin` object that contains a GraphQL client that can interact with the [GraphQL Admin API](https://shopify.dev/docs/api/admin-graphql).

[API Reference - Typing GraphQL operations](https://shopify.dev/docs/api/shopify-app-react-router/v1/guide-graphql-types)

### Make GraphQL requests

### /app/routes/\*\*/\*.tsx

```tsx
import {ActionFunction} from 'react-router';


import {authenticate} from '../shopify.server';


export const action: ActionFunction = async ({request}) => {
  const {admin} = await authenticate.admin(request);


  const response = await admin.graphql(
    `#graphql
    mutation populateProduct($input: ProductInput!) {
      productCreate(input: $input) {
        product {
          id
        }
      }
    }`,
    {
      variables: {
        input: {
          title: 'New product',
          variants: [{price: 100}],
        },
      },
    },
  );
  const parsedResponse = await response.json();


  return {data: parsedResponse.data};
};
```

***

### Authenticating cross-origin admin requests

If your React Router server is authenticating an admin extension, then a request from the extension to the server will be cross-origin.

Here `authenticate.admin` provides a `cors` function to add the required cross-origin headers.

### Add cross-origin headers

### /app/routes/\*\*/\*.tsx

```tsx
import {LoaderFunction} from 'react-router';


import {authenticate} from '~/shopify.server';


export const loader: LoaderFunction = async ({request}) => {
  const {cors} = await authenticate.admin(request);


  // App logic


  return cors({my: 'data'});
};
```

***

### Using the Graph​QL API in background jobs

You may need to interact with the Admin API when working outside of Shopify requests. To do so use the `unauthenticated.admin` function.

This enables apps to integrate with 3rd party services and perform background tasks.

**Caution:**

This function doesn't perform **any** validation and shouldn't rely on raw user input.

When using this function, consider the following:

##### Background tasks

Apps should ensure that the shop domain is authenticated when enqueueing jobs.

##### 3rd party service requests

Apps must obtain the shop domain from the 3rd party service in a secure way.

[API Reference - Unauthenticated Admin](https://shopify.dev/docs/api/shopify-app-react-router/v1/unauthenticated/unauthenticated-admin)

### Make GraphQL requests in background jobs

### /app/jobs/\*\*/\*.tsx

```tsx
// /background-jobs/**/*.ts
import { unauthenticated } from "../shopify.server";


// Background job set up


const shop = 'mystore.myshopify.com'
const { admin } = await unauthenticated.admin(shop);


const response = await admin.graphql(
  `#graphql
    mutation populateProduct($input: ProductInput!) {
      productCreate(input: $input) {
        product {
          id
        }
      }
    }
  `,
  { variables: { input: { title: "Product Name" } } }
);


const productData = await response.json();


// Background job complete
```

***

### Resources

[authenticate.admin](https://shopify.dev/docs/api/shopify-app-react-router/v1/authenticate/admin)

***

---



<a id="latest-guide-custom-apps"></a>


## Custom apps

You can use this package to build apps that are distributed in the Shopify Admin, also known as merchant custom apps. These apps do not Authorize by OAuth, and instead use a access token that has been generated by the Shopify Admin.

**Note:**

Before creating a new app to be distributed with the shopify admin, you should be familiar with the [limitations](https://shopify.dev/docs/apps/launch/distribution#capabilities-and-requirements) of the different distribution types

***

### Configure your app

After you have [created and configured your app](https://help.shopify.com/en/manual/apps/app-types/custom-apps) in the Shopify Admin update your code with the API Key, API Secret Key, and the access token.

### Configure your app credentials

### shopify.server.ts

```ts
const shopify = shopifyApp({
  apiKey: "your-api-key",
  apiSecretKey: "your-api-secret-key",
  adminApiAccessToken:"shpat_1234567890",
  ...
}
```

***

### Configure your app settings

Configure `shopifyApp` with the following values

1. `distribution` - `AppDistribution.ShopifyAdmin`
2. `appUrl` - `https://localhost:3000` or other configured port

Merchant custom apps use a different authentication strategy than embedded apps and cannot be embedded in the Shopify Admin.

### Configure app settings

### /app/shopify.server.ts

```tsx
const shopify = shopifyApp({
    apiKey: "your-api-key",
    apiSecretKey: "your-api-secret-key",
    adminApiAccessToken:"shpat_1234567890",
    distribution: AppDistribution.ShopifyAdmin,
    appUrl: "https://localhost:3000",
    ...
}
```

***

### Run your app locally

Merchant custom apps are not compatible with the Shopify CLI, so you must start your app directly. After your app is running you can access it at the following URL: `http://localhost:3000/app?shop=my-shop.myshopify.com`

### Run your app

###### npm

```sh
npm exec react-router dev
```

###### yarn

```sh
yarn react-router dev
```

###### pnpm

```sh
pnpm exec react-router dev
```

***

### Resources

[Custom apps\
\
](https://help.shopify.com/en/manual/apps/app-types/custom-apps)

[Create a new custom app](https://help.shopify.com/en/manual/apps/app-types/custom-apps)

[App distribution\
\
](https://shopify.dev/docs/apps/launch/distribution)

[Understand the different distribution types](https://shopify.dev/docs/apps/launch/distribution)

***

---



<a id="latest-guide-future-flags"></a>


## Future flags

Similarly to how [React Router approaches breaking changes](https://reactrouter.com/6.30.0/guides/api-development-strategy#future-flags), the `@shopify/shopify-app-react-router` package also uses future flags.

Bigger features and breaking changes are initially added behind a future flag. This means that they're disabled by default, and must be manually enabled by setting the appropriate flag in the `future` option of the `shopifyApp` function.

This allows apps to gradually adopt new features, and prepare for breaking changes and major releases ahead of time.

***

### Setting future flags

To opt in to a feature, simply enable the appropriate flag in the `future` option of the `shopifyApp` function.

Once a flag is set, the returned `shopify` object will start using the new APIs, including using any new types. That allows apps to rely on TypeScript to use a feature regardless of a flag being enabled or not.

### Enable future flags

### /app/shopify.server.ts

```ts
import {shopifyApp} from '@shopify/shopify-app-react-router/server';


export const shopify = shopifyApp({
  // ...
  future: {
    unstable_newFeature: true,
  },
});
```

***

### Unstable APIs

When introducing new features to the package for which we want to gather feedback, we will add them behind a future flag, starting with the `unstable_` prefix.

That allows early adopters to try them out individually, without having to install a release candidate package.

When the feature is ready for release, the future flag will be removed and it will be available by default.

In this example, `shopify` has a new function called `newFeature`. If the future flag is disabled, TypeScript will be unaware of the new function, and the app will fail to compile if it tries to use it.

### Use unstable APIs

### /app/routes/\*.tsx

```ts
import type {LoaderFunctionArgs} from 'react-router';


import {shopify} from '~/shopify.server';


export const loader = async ({request}: LoaderFunctionArgs) => {
  const result = shopify.newFeature(params);


  return null;
};
```

***

### Breaking changes

Similarly to unstable APIs, breaking changes will be introduced behind a future flag.

This allows apps to prepare for the next major version ahead of time, and to gradually adopt the new APIs.

When the next major version is released, the future flag will be removed, and the old code it changes will be removed. Apps that adopted the flag before then will continue to work the same way with no new changes.

***

### Supported flags

There are currently no future flags in the current version.

***

---



<a id="latest-guide-graphql-types"></a>


## Typing GraphQL operations

The GraphQL clients provided in this package can use [Codegen](https://the-guild.dev/graphql/codegen) to automatically parse and create types for your queries and mutations.

By installing a few packages in your app, you can use the `graphql-codegen` script, which will look for strings with the `#graphql` tag and extract types from them.

If your IDE supports it, you will also get syntax highlighting and auto-complete features when writing your queries.

***

### See it in action

In this example, we use the `graphql-codegen` script to parse a query in the `/app/routes/new.tsx` file.

Note how VSCode shows the types for both the return type of `response.json()`, and the `variables` option in the `graphql` function.

***

### Installing packages

To use the `graphql-codegen` script, you will need to install a few packages in your app.

They will include the scripts to run, and the types that will be overridden by the results of parsing your operations.

### Installing packages

###### npm

```sh
npm add --save-dev @shopify/api-codegen-preset
npm add @shopify/admin-api-client @shopify/storefront-api-client
```

###### yarn

```sh
yarn add --dev @shopify/api-codegen-preset
yarn add @shopify/admin-api-client @shopify/storefront-api-client
```

###### pnpm

```sh
pnpm add --save-dev @shopify/api-codegen-preset
pnpm add @shopify/admin-api-client @shopify/storefront-api-client
```

***

### Setting up .​graphqlrc.​ts

Before you can parse operations, you'll need to create a `.graphqlrc.ts` file in your project, and configure it to use the `@shopify/api-codegen-preset`.

**Caution:**

Parsing will not work on `.graphql` documents, because the preset can only apply types from JavaScript and TypeScript const strings.

[Learn more about the available configurations. - Configuration options](https://github.com/Shopify/shopify-app-js/tree/main/packages/api-clients/api-codegen-preset#configuration)

### Codegen configuration example

### /.graphqlrc.ts

```ts
import {shopifyApiProject, ApiType} from '@shopify/api-codegen-preset';


export default {
  // For syntax highlighting / auto-complete when writing operations
  schema: 'https://shopify.dev/admin-graphql-direct-proxy/2023-10',
  documents: ['./app/**/*.{js,ts,jsx,tsx}'],
  projects: {
    // To produce variable / return types for Admin API operations
    default: shopifyApiProject({
      apiType: ApiType.Admin,
      apiVersion: '2023-10',
      documents: ['./app/**/*.{js,ts,jsx,tsx}'],
      outputDir: './app/types',
    }),
  },
};
```

***

### Setting up the script

To generate types, you'll need to add an entry for `graphql-codegen` in the `"scripts"` section of your `package.json` file.

### Setting up the script

### /package.json

```json
{
  "scripts": {
    "graphql-codegen": "graphql-codegen"
  }
}
```

***

### Generating types

When you run `graphql-codegen`, it will look in all your configured documents for strings marked with a `#graphql` tag.

IDEs that support the `.graphqlrc.ts` file will provide syntax highlighting for your operations, as well as typing.

**Tip:**

You can pass in a `--watch` flag to the script, which will update your types every time you save a file.

### Running graphql-codegen

###### npm

```sh
npm run graphql-codegen
```

###### yarn

```sh
yarn graphql-codegen
```

###### pnpm

```sh
pnpm graphql-codegen
```

***

### Resources

[Admin API\
\
](https://shopify.dev/docs/api/shopify-app-react-router/v1/apis/admin-api)

[Make requests to the Admin API](https://shopify.dev/docs/api/shopify-app-react-router/v1/apis/admin-api)

[Storefront API\
\
](https://shopify.dev/docs/api/shopify-app-react-router/v1/apis/storefront-api)

[Make requests to the Storefront API](https://shopify.dev/docs/api/shopify-app-react-router/v1/apis/storefront-api)

***

---



<a id="latest-guide-webhooks"></a>


## Subscribing to webhooks

Your app must respond to [mandatory webhook topics](https://shopify.dev/docs/apps/webhooks/configuration/mandatory-webhooks). In addition, your app can register [optional webhook topics](https://shopify.dev/docs/api/admin-rest/current/resources/webhook#event-topics).

There are app-specific and shop-specific webhooks. We recommend app-specific webhooks for most apps, but there are reasons to register shop-specific webhooks. For more information, please read [App-specific vs shop-specific webhooks](https://shopify.dev/docs/apps/build/webhooks/subscribe#app-specific-vs-shop-specific-subscriptions).

***

### App-specific webhooks (recommended)

The easiest way to configure webhooks is to use app-specific webhooks in `shopify.app.toml`. You can find more info in the [webhooks documentation](https://shopify.dev/docs/apps/webhooks/getting-started-declarative).

To set up a simple HTTPS webhook subscription, you can follow these steps:

1. Add the topic to subscribe to in `shopify.app.toml`. In this example we subscribe to the `APP_UNINSTALLED` topic.
2. Review the required scopes for the webhook topics, and update your [app scopes](https://shopify.dev/docs/apps/tools/cli/configuration#access_scopes) as necessary.
3. Run `shopify app deploy` from the CLI to save your webhooks configuration.

### Configure app-specific webhooks

### shopify.app.toml

```tsx
[webhooks]
api_version = "2024-04"


  [[webhooks.subscriptions]]
  topics = [ "app/uninstalled" ]
  uri = "/webhooks"
  compliance_topics = [ "customers/data_request", "customers/redact", "shop/redact" ]
```

***

### Shop-specific webhooks

Shop-specific webhooks are useful when you need to subscribe to different webhook topics for different shops, or when a topic is not supported by app-specific webhooks.Configure `shopifyApp` and to setup shop-specific webhook subscriptions with the following steps:

1. The webhooks you want to subscribe to. In this example we subscribe to the `APP_UNINSTALLED` topic.
2. The code to register the `APP_UNINSTALLED` topic after a merchant installs you app. Here `shopifyApp` provides an `afterAuth` hook.
3. Review the required scopes for the webhook topics, and update your [app scopes](https://shopify.dev/docs/apps/tools/cli/configuration#access_scopes) as necessary.

**Note:**

You can't register mandatory topics using this package, you must [configure those in the Partner Dashboard](https://shopify.dev/docs/apps/webhooks/configuration/mandatory-webhooks) instead.

### Configure shop-specific webhooks

### /app/shopify.server.ts

```tsx
import {shopifyApp, DeliveryMethod} from '@shopify/shopify-app-react-router/server';


const shopify = shopifyApp({
  apiKey: 'abcde1234567890',
  // ...etc
  webhooks: {
    APP_UNINSTALLED: {
      deliveryMethod: DeliveryMethod.Http,
      callbackUrl: '/webhooks',
    },
  },
  hooks: {
    afterAuth: async ({session}) => {
      // Register webhooks for the shop
      // In this example, every shop will have these webhooks
      // You could wrap this in some custom shop specific conditional logic if needed
      shopify.registerWebhooks({session});
    },
  },
});


export const authenticate = shopify.authenticate;
```

***

### Set up your endpoints

Create a route in your app to handle incoming webhook requests for each `callbackUrl` you set in your configuration.Legitimate webhook requests are always `POST` requests signed by Shopify, so you must authenticate them before taking any action. To do this you must set up an `action` that uses the `authenticate.webhook` function to authenticate the request.

Please keep in mind that webhook endpoints should respond as quickly as possible. If you need to run a long-running job, then consider using background tasks.

**Caution:**

Webhook endpoints **must** respond with an `HTTP 200` code, or Shopify will retry.

### Receive webhook requests

### /app/routes/webhooks.tsx

```tsx
import {ActionFunctionArgs} from 'react-router';


import db from '../db.server';


import {authenticate} from '~/shopify.server';


export const action = async ({request}: ActionFunctionArgs) => {
  const {topic, shop, session} = await authenticate.webhook(request);


  switch (topic) {
    case 'APP_UNINSTALLED':
      // Webhook requests can trigger after an app is uninstalled
      // If the app is already uninstalled, the session may be undefined.
      if (session) {
        await db.session.deleteMany({where: {shop}});
      }
      break;
    case 'CUSTOMERS_DATA_REQUEST':
    case 'CUSTOMERS_REDACT':
    case 'SHOP_REDACT':
    default:
      throw new Response('Unhandled webhook topic', {status: 404});
  }


  throw new Response();
};
```

***

### Resources

[authenticate.webhook](https://shopify.dev/docs/api/shopify-app-react-router/v1/authenticate/webhook)

***

---



<a id="latest-unauthenticated"></a>


## Unauthenticated

[Unauthenticated admin](https://shopify.dev/docs/api/shopify-app-react-router/latest/unauthenticated/unauthenticated-admin)

[Allows interacting with the Admin API when working outside of Shopify requests.](https://shopify.dev/docs/api/shopify-app-react-router/latest/unauthenticated/unauthenticated-admin)

[Unauthenticated storefront](https://shopify.dev/docs/api/shopify-app-react-router/latest/unauthenticated/unauthenticated-storefront)

[Allows interacting with the Storefront API when working outside of Shopify requests.](https://shopify.dev/docs/api/shopify-app-react-router/latest/unauthenticated/unauthenticated-storefront)

***

---



<a id="latest-unauthenticated-unauthenticated-admin"></a>


## Unauthenticated admin

Allows interacting with the Admin API when working outside of Shopify requests. This enables apps to integrate with 3rd party services and perform background tasks.

**Caution:**

This function doesn't perform **any** validation and shouldn't rely on raw user input.

When using this function, consider the following:

##### Background tasks

Apps should ensure that the shop domain is authenticated when enqueueing jobs.

##### 3rd party service requests

Apps must obtain the shop domain from the 3rd party service in a secure way.

### unauthenticated.​admin(**[shop](#unauthenticatedadmin-propertydetail-shop)**​)

Creates an unauthenticated Admin context.

#### Parameters

* **shop**

  **string**

  **required**

#### Returns

* **Promise\<UnauthenticatedAdminContext>**

#### UnauthenticatedAdminContext

* admin

  Methods for interacting with the GraphQL Admin API for the given store.

  ```ts
  AdminApiContext
  ```

* session

  The session for the given shop. This comes from the session storage which \`shopifyApp\` uses to store sessions in your database of choice. This will always be an offline session. You can use to get shop-specific data.

  ```ts
  Session
  ```

#### AdminApiContext

Provides utilities that apps can use to make requests to the Admin API.

* graphql

  Methods for interacting with the Shopify Admin GraphQL API

  ```ts
  GraphQLClient<AdminOperations>
  ```

#### GraphQLClient

* query

  ```ts
  Operation extends keyof Operations
  ```

* options

  ```ts
  GraphQLQueryOptions<Operation, Operations>
  ```

returns

```ts
interface Promise<T> {
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;

    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
}, interface Promise<T> {}, Promise: PromiseConstructor, interface Promise<T> {
    readonly [Symbol.toStringTag]: string;
}, interface Promise<T> {
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
}
```

#### GraphQLQueryOptions

* apiVersion

  The version of the API to use for the request.

  ```ts
  ApiVersion
  ```

* headers

  Additional headers to include in the request.

  ```ts
  Record<string, any>
  ```

* signal

  An optional AbortSignal to cancel the request.

  ```ts
  AbortSignal
  ```

* tries

  The total number of times to try the request if it fails.

  ```ts
  number
  ```

* variables

  The variables to pass to the operation.

  ```ts
  ApiClientRequestOptions<Operation, Operations>
  ```

#### ApiVersion

* October24

  ```ts
  2024-10
  ```

* January25

  ```ts
  2025-01
  ```

* April25

  ```ts
  2025-04
  ```

* July25

  ```ts
  2025-07
  ```

* October25

  ```ts
  2025-10
  ```

* January26

  ```ts
  2026-01
  ```

* April26

  ```ts
  2026-04
  ```

* Unstable

  ```ts
  unstable
  ```

#### Session

Stores App information from logged in merchants so they can make authenticated requests to the Admin API.

* id

  The unique identifier for the session.

  ```ts
  string
  ```

* shop

  The Shopify shop domain, such as \`example.myshopify.com\`.

  ```ts
  string
  ```

* state

  The state of the session. Used for the OAuth authentication code flow.

  ```ts
  string
  ```

* isOnline

  Whether the access token in the session is online or offline.

  ```ts
  boolean
  ```

* scope

  The desired scopes for the access token, at the time the session was created.

  ```ts
  string
  ```

* expires

  The date the access token expires.

  ```ts
  Date
  ```

* accessToken

  The access token for the session.

  ```ts
  string
  ```

* refreshToken

  The refresh token for the session.

  ```ts
  string
  ```

* refreshTokenExpires

  The date the refresh token expires.

  ```ts
  Date
  ```

* onlineAccessInfo

  Information on the user for the session. Only present for online sessions.

  ```ts
  OnlineAccessInfo
  ```

* isActive

  Whether the session is active. Active sessions have an access token that is not expired, and has has the given scopes if scopes is equal to a truthy value.

  ```ts
  (scopes: string | string[] | AuthScopes, withinMillisecondsOfExpiry?: number) => boolean
  ```

* isScopeChanged

  Whether the access token includes the given scopes if they are provided.

  ```ts
  (scopes: string | string[] | AuthScopes) => boolean
  ```

* isScopeIncluded

  Whether the access token includes the given scopes.

  ```ts
  (scopes: string | string[] | AuthScopes) => boolean
  ```

* isExpired

  Whether the access token is expired.

  ```ts
  (withinMillisecondsOfExpiry?: number) => boolean
  ```

* toObject

  Converts an object with data into a Session.

  ```ts
  () => SessionParams
  ```

* equals

  Checks whether the given session is equal to this session.

  ```ts
  (other: Session) => boolean
  ```

* toPropertyArray

  Converts the session into an array of key-value pairs.

  ```ts
  (returnUserData?: boolean) => [string, string | number | boolean][]
  ```

#### OnlineAccessInfo

* associated\_user

  The user associated with the access token.

  ```ts
  OnlineAccessUser
  ```

* associated\_user\_scope

  The effective set of scopes for the session.

  ```ts
  string
  ```

* expires\_in

  How long the access token is valid for, in seconds.

  ```ts
  number
  ```

#### OnlineAccessUser

* account\_owner

  Whether the user is the account owner.

  ```ts
  boolean
  ```

* collaborator

  Whether the user is a collaborator.

  ```ts
  boolean
  ```

* email

  The user's email address.

  ```ts
  string
  ```

* email\_verified

  Whether the user has verified their email address.

  ```ts
  boolean
  ```

* first\_name

  The user's first name.

  ```ts
  string
  ```

* id

  The user's ID.

  ```ts
  number
  ```

* last\_name

  The user's last name.

  ```ts
  string
  ```

* locale

  The user's locale.

  ```ts
  string
  ```

#### AuthScopes

A class that represents a set of access token scopes.

* has

  Checks whether the current set of scopes includes the given one.

  ```ts
  (scope: string | string[] | AuthScopes) => boolean
  ```

* equals

  Checks whether the current set of scopes equals the given one.

  ```ts
  (otherScopes: string | string[] | AuthScopes) => boolean
  ```

* toString

  Returns a comma-separated string with the current set of scopes.

  ```ts
  () => string
  ```

* toArray

  Returns an array with the current set of scopes.

  ```ts
  (returnOriginalScopes?: boolean) => any[]
  ```

#### SessionParams

* \[key: string]

  ```ts
  any
  ```

* accessToken

  The access token for the session.

  ```ts
  string
  ```

* expires

  The date the access token expires.

  ```ts
  Date
  ```

* id

  The unique identifier for the session.

  ```ts
  string
  ```

* isOnline

  Whether the access token in the session is online or offline.

  ```ts
  boolean
  ```

* onlineAccessInfo

  Information on the user for the session. Only present for online sessions.

  ```ts
  OnlineAccessInfo | StoredOnlineAccessInfo
  ```

* refreshToken

  The refresh token for the session.

  ```ts
  string
  ```

* refreshTokenExpires

  The date the refresh token expires.

  ```ts
  Date
  ```

* scope

  The scopes for the access token.

  ```ts
  string
  ```

* shop

  The Shopify shop domain.

  ```ts
  string
  ```

* state

  The state of the session. Used for the OAuth authentication code flow.

  ```ts
  string
  ```

#### StoredOnlineAccessInfo

```ts
Omit<OnlineAccessInfo, 'associated_user'> & {
  associated_user: Partial<OnlineAccessUser>;
}
```

Examples

#### Examples

* #### Querying the GraphQL API

  ##### Description

  Use \`admin.graphql\` to make query / mutation requests.

  ##### /app/routes/\*\*\\/\*.ts

  ```ts
  import { ActionFunctionArgs } from "react-router";
  import { unauthenticated } from "../shopify.server";

  export async function action({ request }: ActionFunctionArgs) {
   const shop = getShopFromExternalRequest(request);
   const { admin } = await unauthenticated.admin(shop);

   const response = await admin.graphql(
     `#graphql
     mutation populateProduct($input: ProductInput!) {
       productCreate(input: $input) {
         product {
           id
         }
       }
      }`,
      { variables: { input: { title: "Product Name" } } }
    );

   const productData = await response.json();
   return ({ data: productData.data });
  }
  ```

  ##### /app/shopify.server.ts

  ```ts
  import { shopifyApp } from "@shopify/shopify-app-react-router/server";

  const shopify = shopifyApp({
   // ...etc
  });
  export default shopify;
  export const unauthenticated = shopify.unauthenticated;
  ```

* ####

  ##### Description

  Get your app's shop-specific data using the returned offline \`session\` object.

  ##### /app/routes/\*\*\\/\*.ts

  ```ts
  import { LoaderFunctionArgs, json } from "react-router";
  import { unauthenticated } from "../shopify.server";
  import { getMyAppData } from "~/db/model.server";

  export const loader = async ({ request }: LoaderFunctionArgs) => {
    const shop = getShopFromExternalRequest(request);
    const { session } = await unauthenticated.admin(shop);
    return (await getMyAppData({shop: session.shop}));
  };
  ```

***

### Related

[Interact with the Admin API. - API context](https://shopify.dev/docs/api/shopify-app-react-router/v1/apis/admin-api)

***

---



<a id="latest-unauthenticated-unauthenticated-storefront"></a>


## Unauthenticated storefront

Allows interacting with the Storefront API when working outside of Shopify requests. This enables apps to integrate with 3rd party services and perform background tasks.

**Caution:**

This function doesn't perform **any** validation and shouldn't rely on raw user input.

When using this function, consider the following:

##### Background tasks

Apps should ensure that the shop domain is authenticated when enqueueing jobs.

##### 3rd party service requests

Apps must obtain the shop domain from the 3rd party service in a secure way.

### unauthenticated.​storefront(**[shop](#unauthenticatedstorefront-propertydetail-shop)**​)

Creates an unauthenticated Storefront context.

#### Parameters

* **shop**

  **string**

  **required**

#### Returns

* **Promise\<UnauthenticatedStorefrontContext>**

#### UnauthenticatedStorefrontContext

* session

  The session for the given shop. This comes from the session storage which \`shopifyApp\` uses to store sessions in your database of choice. This will always be an offline session. You can use this to get shop specific data.

  ```ts
  Session
  ```

* storefront

  Method for interacting with the Shopify GraphQL Storefront API for the given store.

  ```ts
  StorefrontContext
  ```

#### Session

Stores App information from logged in merchants so they can make authenticated requests to the Admin API.

* id

  The unique identifier for the session.

  ```ts
  string
  ```

* shop

  The Shopify shop domain, such as \`example.myshopify.com\`.

  ```ts
  string
  ```

* state

  The state of the session. Used for the OAuth authentication code flow.

  ```ts
  string
  ```

* isOnline

  Whether the access token in the session is online or offline.

  ```ts
  boolean
  ```

* scope

  The desired scopes for the access token, at the time the session was created.

  ```ts
  string
  ```

* expires

  The date the access token expires.

  ```ts
  Date
  ```

* accessToken

  The access token for the session.

  ```ts
  string
  ```

* refreshToken

  The refresh token for the session.

  ```ts
  string
  ```

* refreshTokenExpires

  The date the refresh token expires.

  ```ts
  Date
  ```

* onlineAccessInfo

  Information on the user for the session. Only present for online sessions.

  ```ts
  OnlineAccessInfo
  ```

* isActive

  Whether the session is active. Active sessions have an access token that is not expired, and has has the given scopes if scopes is equal to a truthy value.

  ```ts
  (scopes: string | string[] | AuthScopes, withinMillisecondsOfExpiry?: number) => boolean
  ```

* isScopeChanged

  Whether the access token includes the given scopes if they are provided.

  ```ts
  (scopes: string | string[] | AuthScopes) => boolean
  ```

* isScopeIncluded

  Whether the access token includes the given scopes.

  ```ts
  (scopes: string | string[] | AuthScopes) => boolean
  ```

* isExpired

  Whether the access token is expired.

  ```ts
  (withinMillisecondsOfExpiry?: number) => boolean
  ```

* toObject

  Converts an object with data into a Session.

  ```ts
  () => SessionParams
  ```

* equals

  Checks whether the given session is equal to this session.

  ```ts
  (other: Session) => boolean
  ```

* toPropertyArray

  Converts the session into an array of key-value pairs.

  ```ts
  (returnUserData?: boolean) => [string, string | number | boolean][]
  ```

#### OnlineAccessInfo

* associated\_user

  The user associated with the access token.

  ```ts
  OnlineAccessUser
  ```

* associated\_user\_scope

  The effective set of scopes for the session.

  ```ts
  string
  ```

* expires\_in

  How long the access token is valid for, in seconds.

  ```ts
  number
  ```

#### OnlineAccessUser

* account\_owner

  Whether the user is the account owner.

  ```ts
  boolean
  ```

* collaborator

  Whether the user is a collaborator.

  ```ts
  boolean
  ```

* email

  The user's email address.

  ```ts
  string
  ```

* email\_verified

  Whether the user has verified their email address.

  ```ts
  boolean
  ```

* first\_name

  The user's first name.

  ```ts
  string
  ```

* id

  The user's ID.

  ```ts
  number
  ```

* last\_name

  The user's last name.

  ```ts
  string
  ```

* locale

  The user's locale.

  ```ts
  string
  ```

#### AuthScopes

A class that represents a set of access token scopes.

* has

  Checks whether the current set of scopes includes the given one.

  ```ts
  (scope: string | string[] | AuthScopes) => boolean
  ```

* equals

  Checks whether the current set of scopes equals the given one.

  ```ts
  (otherScopes: string | string[] | AuthScopes) => boolean
  ```

* toString

  Returns a comma-separated string with the current set of scopes.

  ```ts
  () => string
  ```

* toArray

  Returns an array with the current set of scopes.

  ```ts
  (returnOriginalScopes?: boolean) => any[]
  ```

#### SessionParams

* \[key: string]

  ```ts
  any
  ```

* accessToken

  The access token for the session.

  ```ts
  string
  ```

* expires

  The date the access token expires.

  ```ts
  Date
  ```

* id

  The unique identifier for the session.

  ```ts
  string
  ```

* isOnline

  Whether the access token in the session is online or offline.

  ```ts
  boolean
  ```

* onlineAccessInfo

  Information on the user for the session. Only present for online sessions.

  ```ts
  OnlineAccessInfo | StoredOnlineAccessInfo
  ```

* refreshToken

  The refresh token for the session.

  ```ts
  string
  ```

* refreshTokenExpires

  The date the refresh token expires.

  ```ts
  Date
  ```

* scope

  The scopes for the access token.

  ```ts
  string
  ```

* shop

  The Shopify shop domain.

  ```ts
  string
  ```

* state

  The state of the session. Used for the OAuth authentication code flow.

  ```ts
  string
  ```

#### StoredOnlineAccessInfo

```ts
Omit<OnlineAccessInfo, 'associated_user'> & {
  associated_user: Partial<OnlineAccessUser>;
}
```

#### StorefrontContext

Provides utilities that apps can use to make requests to the Storefront API.

* graphql

  Method for interacting with the Shopify Storefront GraphQL API If you're getting incorrect type hints in the Shopify template, follow \[these instructions]\(https://github.com/Shopify/shopify-app-template-react-router/tree/main#incorrect-graphql-hints).

  ```ts
  GraphQLClient<StorefrontOperations>
  ```

#### GraphQLClient

* query

  ```ts
  Operation extends keyof Operations
  ```

* options

  ```ts
  GraphQLQueryOptions<Operation, Operations>
  ```

returns

```ts
interface Promise<T> {
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;

    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
}, interface Promise<T> {}, Promise: PromiseConstructor, interface Promise<T> {
    readonly [Symbol.toStringTag]: string;
}, interface Promise<T> {
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
}
```

#### GraphQLQueryOptions

* apiVersion

  The version of the API to use for the request.

  ```ts
  ApiVersion
  ```

* headers

  Additional headers to include in the request.

  ```ts
  Record<string, any>
  ```

* signal

  An optional AbortSignal to cancel the request.

  ```ts
  AbortSignal
  ```

* tries

  The total number of times to try the request if it fails.

  ```ts
  number
  ```

* variables

  The variables to pass to the operation.

  ```ts
  ApiClientRequestOptions<Operation, Operations>
  ```

#### ApiVersion

* October24

  ```ts
  2024-10
  ```

* January25

  ```ts
  2025-01
  ```

* April25

  ```ts
  2025-04
  ```

* July25

  ```ts
  2025-07
  ```

* October25

  ```ts
  2025-10
  ```

* January26

  ```ts
  2026-01
  ```

* April26

  ```ts
  2026-04
  ```

* Unstable

  ```ts
  unstable
  ```

Examples

#### Examples

* ####

  ##### Description

  Get your app's shop-specific data using the returned offline \`session\` object.

  ##### app/routes/\*\*\\/.ts

  ```ts
  import { LoaderFunctionArgs, json } from "react-router";
  import { unauthenticated } from "../shopify.server";
  import { getMyAppData } from "~/db/model.server";

  export const loader = async ({ request }: LoaderFunctionArgs) => {
    const shop = getShopFromExternalRequest(request);
    const { session } = await unauthenticated.storefront(shop);
    return (await getMyAppData({shop: session.shop}));
  };
  ```

* ####

  ##### Description

  Use \`storefront.graphql\` to make query / mutation requests.

  ##### app/routes/\*\*\\/.ts

  ```ts
  import { json } from "react-router";
  import { authenticate } from "../shopify.server";

  export async function action({ request }: ActionFunctionArgs) {
    const shop = getShopFromExternalRequest(request);
    const { storefront } = await unauthenticated.storefront(shop);

    const response = await storefront.graphql(`{blogs(first: 10) { edges { node { id } } } }`);

    return (await response.json());
  }
  ```

* #### Handling GraphQL errors

  ##### Description

  Catch \`GraphqlQueryError\` errors to see error messages from the API.

  ##### /app/routes/\*\*\\/\*.ts

  ```ts
  import { ActionFunctionArgs } from "react-router";
  import { authenticate } from "../shopify.server";

  export const action = async ({ request }: ActionFunctionArgs) => {
    const shop = getShopFromExternalRequest(request);
    const { storefront } = await unauthenticated.storefront(shop);

    try {
      const response = await storefront.graphql(
        `#graphql
        query incorrectQuery {
          products(first: 10) {
            nodes {
              not_a_field
            }
          }
        }`,
      );

      return ({ data: await response.json() });
    } catch (error) {
      if (error instanceof GraphqlQueryError) {
        // { errors: { graphQLErrors: [
        //   { message: "Field 'not_a_field' doesn't exist on type 'Product'" }
        // ] } }
        return ({ errors: error.body?.errors }, { status: 500 });
      }
      return ({ message: "An error occurred" }, { status: 500 });
    }
  }
  ```

  ##### /app/shopify.server.ts

  ```ts
  import { shopifyApp } from "@shopify/shopify-app-react-router/server";

  const shopify = shopifyApp({
    // ...
  });
  export default shopify;
  export const unauthenticated = shopify.unauthenticated;
  ```

***

### Related

[Interact with the Storefront API. - API context](https://shopify.dev/docs/api/shopify-app-react-router/v1/apis/storefront-api)

***

---
