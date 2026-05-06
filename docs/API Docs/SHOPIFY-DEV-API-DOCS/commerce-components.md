# Shopify Commerce Components Reference (Indonesian / English)

> Referensi lengkap **Commerce Components** Shopify API yang disusun ulang dari https://shopify.dev/docs/api/commerce-components.
> Dokumen ini dirancang untuk pengembang berbahasa Indonesia, namun seluruh konten teknis (skema, tipe, nama field, contoh kode) dipertahankan dalam bahasa Inggris asli untuk memastikan akurasi.

| Item | Nilai |
|------|-------|
| Sumber | `https://shopify.dev/docs/api/commerce-components` |
| Total halaman | **14** |
| Tanggal kompilasi | 2026-05-01 |
| Bahasa | Indonesia (intro/ToC) + English (konten teknis) |



## Daftar Isi (Table of Contents)

- [Landing](#landing)
- [pay](#pay)
- [pay / design-guidelines](#pay-design-guidelines)
- [pay / development-journey](#pay-development-journey)
- [pay / frontend-api-reference](#pay-frontend-api-reference)
- [pay / graphql-post-payment](#pay-graphql-post-payment)
- [pay / graphql-pre-payment](#pay-graphql-pre-payment)
- [pay / javascript-sdk](#pay-javascript-sdk)
- [pay / localization](#pay-localization)
- [pay / merchant-assigned-ab-testing-guide](#pay-merchant-assigned-ab-testing-guide)
- [pay / monitoring](#pay-monitoring)
- [pay / sessions-and-events](#pay-sessions-and-events)
- [pay / shop-configuration](#pay-shop-configuration)
- [pay / troubleshooting-guide](#pay-troubleshooting-guide)


---



<a id="landing"></a>


## Shop Pay Wallet

[Shop Pay Wallet API](https://shopify.dev/docs/api/commerce-components/pay)

***

---



<a id="pay"></a>


## Shop Pay Wallet API

**Note:**

This API is **only available to select merchants and partners** using third-party checkout solutions. For more information, contact [our enterprise sales team](https://www.shopify.com/solutions/shop-pay/enterprise#contact-sales).

***

### Overview

The Shop Pay Wallet JS API enables your existing ecommerce site to use Shop Pay for checkout. Customers who select a Pay with Shop button or are recognized by email are shown all relevant cart information and can complete the transaction in an experience consistent with other usages of Shop Pay using a popup on your site.

#### Glossary

| **Term** | **Definition** |
| - | - |
| Shop Pay login | Logging in to a Shop Pay account. This occurs directly between a customer and Shopify. |
| Payment request | A payment request includes line items, applied discounts, tax calculations and available shipping methods. |
| Authentication modal | When a Shop Pay user's email is recognized, the customer will see an interface to enter a One Time Password (OTP) for authentication. |
| Shop Pay popup | Most of the interactions in Shop Pay Checkout happen within the context of a Shopify-hosted popup window. |

#### Technical requirements

* A Shopify account with Shopify Payments enabled
* The public domain(s) for the site you will be integrating Shop Pay Wallet into
* A non-Shopify-hosted ecommerce environment to implement against (frontend + backend)
* The content security policy on the frontend must be configured to allow `cdn.shopifycloud.com`, `cdn.shopify.com`, `shop.app`, `pay.shopify.com`, `*.shopifysvc.com`, `*.stripe.com`
* The backend needs to be able to functionally access all applicable resources required to assess and update the state of the payment request, including cart details, tax calculations, shipping methods / pricing, local pickup locations, discounts, inventory availability, etc.
* An understanding of the work necessary to integrate with the Order Management System and other backend systems to perform post-order actions in Shopify such as captures, refunds, and updating fulfillment information.

#### Core Concepts

##### Your system is the main source of truth

This API extends your existing systems, so it treats those systems as canonical for everything that they already handle. This includes:

* Cart contents

* Shipping methods

* Pickup locations

* Tax calculation

* Discounts

* Inventory reservations

  Shopify is the source of truth for the payment transaction and for Shop Pay related fields, including vaulted customer addresses and payment methods.

  Consequently, while this API receives detailed information about the cart in the form of a payment request, any changes to the payment request related to your system's canonical topics must be validated. Whenever the payment request is returned to Shopify, it's used as a replacement for prior data received.

##### Shopify's order ID

Upon payment completion, the order ID is returned from Shopify via a webhook for use in post-order actions such as capturing payments, issuing refunds, and adding order tracking information.

##### Source identifier

Your system is responsible for providing a source identifier that uniquely identifies the order, and is often either an existing cart or order identifier from your system. This value is persisted onto the Shopify order record.

##### Shop Pay popup interactions

Shop Pay customers will authenticate with a Shop Pay login, either through an authentication modal or directly within the Shop Pay popup.

In order for Shopify to receive your system's canonical information during the checkout process, Shopify will dispatch events to your frontend integration when there are relevant customer actions in the Shop Pay popup. Following this, your system will then determine if there are any subsequent updates required to be made to the payment request. Based on its new state, calculate and rebuild an updated payment request to provide in the required response to the event.

Once accepted by a customer through the action of clicking the *Pay now* button, your backend should submit the [final payment request mutation](https://shopify.dev/docs/api/storefront/latest/mutations/shopPayPaymentRequestSessionSubmit), including the `paymentMethod` token provided by Shopify, resulting in processing the payment and order creation.

While the Shop Pay popup is open, an overlay will darken the background, however the cart on your shop may remain visible. It's important that a customer does not see a different total in the cart because it hasn't updated based on selected shipping methods or discounts applied in Shop Pay. To handle this, we recommend updating any cart totals while the user interacts with the Shop Pay Checkout so that values match. A potential fallback is displaying the totals in a pending state through microcopy like `Calculating...` or through skeletons, spinners, or other pending UI elements.

##### Order creation

A payment request must first be validated in your system including verifying that the payment request hasn't been modified unexpectedly, confirming inventory reservation, discount and pricing validation before submitting the final Shop Pay payment request, which will then create the order in Shopify.

Although rare, there can be a delay before an order becomes available via the Shopify API. It's important to ensure that synchronous order creation is not required for functionality of your checkout. Instead, webhooks can be relied upon for order creation confirmation.

***

### Sequence Diagram

This diagram reflects a "happy path" checkout. For simplicity, it bypasses the Shop Pay login flow, assuming a customer is already logged into Shop Pay.

![Shop Pay Wallet flow](https://shopify.dev/assets/assets/images/api/commerce-components/pay/shop-pay-ccs-flow-DNhXgbRN.png)

***

### Reference

[JavaScript SDK\
\
](https://shopify.dev/docs/api/commerce-components/pay/javascript-sdk)

[Load the Shop Pay button and login web components into your site.](https://shopify.dev/docs/api/commerce-components/pay/javascript-sdk)

[Sessions and events\
\
](https://shopify.dev/docs/api/commerce-components/pay/sessions-and-events)

[Create payment request sessions and handle checkout events.](https://shopify.dev/docs/api/commerce-components/pay/sessions-and-events)

[Frontend API reference\
\
](https://shopify.dev/docs/api/commerce-components/pay/frontend-api-reference)

[Types, interfaces, and events for the frontend JavaScript SDK.](https://shopify.dev/docs/api/commerce-components/pay/frontend-api-reference)

[GraphQL pre-payment\
\
](https://shopify.dev/docs/api/commerce-components/pay/graphql-pre-payment)

[Create and submit payment request sessions using the Storefront API.](https://shopify.dev/docs/api/commerce-components/pay/graphql-pre-payment)

[GraphQL post-payment\
\
](https://shopify.dev/docs/api/commerce-components/pay/graphql-post-payment)

[Manage captures, fulfillment, refunds, and cancellations using the GraphQL Admin API.](https://shopify.dev/docs/api/commerce-components/pay/graphql-post-payment)

[Localization\
\
](https://shopify.dev/docs/api/commerce-components/pay/localization)

[Configure locale settings for multiple language support.](https://shopify.dev/docs/api/commerce-components/pay/localization)

[Monitoring and resiliency\
\
](https://shopify.dev/docs/api/commerce-components/pay/monitoring)

[Set up webhooks, handle disputes, and implement reconciliation.](https://shopify.dev/docs/api/commerce-components/pay/monitoring)

***

### Guides

[Development Journey and Key Considerations\
\
](https://shopify.dev/docs/api/commerce-components/pay/development-journey)

[A guide to assist with the development journey and key considerations for Shop Pay Wallet.](https://shopify.dev/docs/api/commerce-components/pay/development-journey)

[UX Guidelines\
\
](https://shopify.dev/docs/api/commerce-components/pay/design-guidelines)

[UX documentation for Shop Pay Wallet.](https://shopify.dev/docs/api/commerce-components/pay/design-guidelines)

[Shop Configuration Guide\
\
](https://shopify.dev/docs/api/commerce-components/pay/shop-configuration)

[New shop configuration guide for Shop Pay Wallet.](https://shopify.dev/docs/api/commerce-components/pay/shop-configuration)

[Troubleshooting Guide\
\
](https://shopify.dev/docs/api/commerce-components/pay/troubleshooting-guide)

[A guide to assist with troubleshooting Shop Pay Wallet implementations.](https://shopify.dev/docs/api/commerce-components/pay/troubleshooting-guide)

[Merchant-Assigned A/B Testing Guide\
\
](https://shopify.dev/docs/api/commerce-components/pay/merchant-assigned-ab-testing-guide)

[A guide to assist with performing A/B testing for Shop Pay Wallet.](https://shopify.dev/docs/api/commerce-components/pay/merchant-assigned-ab-testing-guide)

[Shop Pay Installments activation\
\
](https://help.shopify.com/en/manual/payments/shop-pay-installments/activating-shop-pay-installments)

[A guide to activating Shop Pay Installments.](https://help.shopify.com/en/manual/payments/shop-pay-installments/activating-shop-pay-installments)

***

---



<a id="pay-design-guidelines"></a>


## Shop Pay UX

**Note:**

NOTE: This document is **only applicable to select merchants and partners** using 3rd party checkout solutions. For more information, contact [our enterprise sales team](https://www.shopify.com/solutions/shop-pay/enterprise#contact-sales).

***

### Overview

Shop Pay Wallet introduces a Shop Pay accelerated checkout experience to a merchant's existing ecommerce site. This guide describes the supported customer journeys, information on what can be customized, and usage guidelines for the Shop Pay payment request button.

To learn more about the API, and to start implementing it in your store, refer to the [Shop Pay Wallet API overview](https://shopify.dev/docs/api/commerce-components/pay).

***

### Customer Touch-points

There are three customer touch-points:

* Shop Pay payment request button
* Shop Pay email recognition
* Shop Pay popup checkout

#### Payment Request Button

The payment request button is the Shop Pay button that a user can press to initiate a Shop Pay popup checkout. Place this button on your cart, guest checkout, or product detail page to indicate to Shop Pay account holders that they can use Shop Pay to check out the item or the cart.

This button comes in two varieties:

1. A base version, with only a logo
2. `buy-with`, where the logo is prefixed with "Buy with"

![Shop Pay payment request button](https://shopify.dev/assets/assets/images/api/commerce-components/pay/shop-pay-ccs-buttons-DAboDWz_.png)

[Component documentation\
\
](https://shopify.dev/docs/api/commerce-components/pay/javascript-sdk#shop-pay-button)

[Attributes and CCS properties documentation for the `shop-pay-payment-request-button`.](https://shopify.dev/docs/api/commerce-components/pay/javascript-sdk#shop-pay-button)

#### Email Recognition

Some customers might not be aware that they have a Shop Pay account. The email recognition component recognizes existing Shop Pay emails entered into your guest checkout, and invites the customer to authenticate for an accelerated checkout experience. Customers can opt out of this if they wish.

![Shop Pay CCS email recognition](https://shopify.dev/assets/assets/images/api/commerce-components/pay/shop-pay-ccs-login-DMYOZt3k.png)

[Component documentation\
\
](https://shopify.dev/docs/api/commerce-components/pay/javascript-sdk#shop-pay-login)

[Attributes and events documentation for the `shop-pay-payment-request-login` component.](https://shopify.dev/docs/api/commerce-components/pay/javascript-sdk#shop-pay-login)

#### Shop Pay Checkout Popup

The Shop Pay Checkout is served to your customers in a popup, providing a similar experience to other accelerated checkout options. If a Shop Pay cookie is present, then the customer can check out in one tap after reviewing their information. If a Shop Pay cookie isn't present, then customers can log in to their Shop Pay account.

![Shop Pay CCS popup](https://shopify.dev/assets/assets/images/api/commerce-components/pay/shop-pay-ccs-popup-59_DzK70.png)

![Shop Pay CCS Mobile popup](https://shopify.dev/assets/assets/images/api/commerce-components/pay/shop-pay-ccs-popup-mobile-CgkZEav8.png)

#### Thank-You Page and Order Confirmation E-mail

Your thank-you page and order confirmation e-mail provide continuity to the customer's checkout experience. It's a good opportunity to confirm payment and address information, and to provide a link to the customer's Shop Pay account where a customer can manage their installments payments.

***

### Customer Experience

The customer experience can be broken down into the following stages:

* **Trigger**: How does a customer choose Shop Pay?
* **Checkout**: What happens after a customer chooses Shop Pay? What do they see and do?
* **Post-payment**: What happens after payment?

#### Trigger

The customer experience is triggered in the following ways:

* Using the Shop Pay payment request button
* Through email recognition

##### Shop Pay Payment Request Button

The flow the customer experiences after they click the Shop Pay button depends on whether the browser has an active Shop Pay cookie.

**With an active cookie:**

The popup pops, and contains the customer's vaulted information. The customer can then review or edit their information before proceeding to **Pay now**.

**Without an active cookie:**

The popup pops with a login flow. The customer needs to log in or sign up to Shop Pay and authenticate using a password or passkey.

If the customer logs in and has vaulted information, then the information loads.

If the customer signs up, then the checkout fields load for the user to enter their checkout information.

![Shop Pay CCS popup login experience](https://shopify.dev/assets/assets/images/api/commerce-components/pay/shop-pay-ccs-popup-log-in-YaZWWPZ2.png)

##### Email Recognition

When a customer enters an email address associated with a Shop Pay account into your guest checkout, they experience the following:

A modal pops asking the customer to authenticate using email, SMS, or a passkey. The customer then has three options:

* Complete authentication challenge.
* Close the modal using the close icon.
* Press or click outside of the modal. If the user clicks outside of the modal, then they can re-load the modal using the icon that appears in the email field.

After the customer authenticates, the popup populates the customer's vaulted information.

If the customer closes the modal at any time, then they can re-load it by clicking the "Show Modal" icon.

![Shop Pay CCS email recognition modal icon](https://shopify.dev/assets/assets/images/api/commerce-components/pay/shop-pay-ccs-email-recognition-icon-B7jbQVj9.png)

##### Show Modal

The Show modal icon doesn't come with any inherent styling, so it's up to the merchant to place this button appropriately. It's recommended to place this within the email entry field, aligned to the right side, with appropriate padding.

It's important to test the implementation with both long email addresses and password managers that inject their own icons into the email address field to ensure that neither of these conflicts with your implementation.

#### Checkout

When the customer has an active checkout, they can review their order and complete a few actions:

* Add, update, or delete a vaulted address and payment method
* Choose their preferred shipping method
* Enter discount codes
* Opt out of Shop Pay and return to your guest checkout using the **Checkout as guest** link
* Proceed with payment using the **Pay now** button

Some customers might have incomplete vaulted information. For example, they might be missing a payment method. These customers are able to add any missing information in the checkout popup.

![Shop Pay CCS popup annotated](https://shopify.dev/assets/assets/images/api/commerce-components/pay/shop-pay-ccs-popup-annotated-BvEKyGqW.png)

| # | Section | Description |
| - | - | - |
| 1 | **Checkout logo** | Your brand's logo, which helps to instill trust in the purchase. [Review our logo specs](#checkout-logo). |
| 2 | **Vaulted information** | All the information stored in a customer's Shop Pay account. Each section opens to reveal relevant actions. This section is replaced with the login card if the customer isn't yet authenticated. If the customer doesn't have a complete account, the required input fields will display below any vaulted information. |
| 3 | **Order summary** | Includes the order total, line items, a discount entry field, and anything affecting the total like shipping, taxes, and discounts. |
| 4 | **Pay now button** | Triggers the payment when the customer is comfortable to proceed. |
| 5 | **Checkout as guest** | Allows the customer to cancel the Shop Pay payment, close the popup, and return to your guest checkout. |
| 6 | **Overlay** | A dark background placed on top of your site to draw greater focus to the popup. |

#### Post-Payment

After the user presses **Pay now**, the popup displays a spinner and a **Your order's being processed** message.

![Shop Pay CCS popup processing a payment](https://shopify.dev/assets/assets/images/api/commerce-components/pay/shop-pay-ccs-processing-kFDYn1vW.png)

After the payment is successfully processed, the popup closes. You should show the customer their order confirmation. For example, you might direct the customer to your store's **Thank you** page.

As part of supporting installments purchases, it's recommended that you inform the user they paid with installments, and provide a link to their account URL where they can manage their installments payments. The payment type and account URL are provided in the `paymentComplete` event's `.processingStatus` field for completed receipts. See [ShopPayPaymentRequestReceiptCompleted](https://shopify.dev/docs/api/commerce-components/pay/frontend-api-reference#shoppaypaymentrequestreceiptcompleted). The thank you page and order confirmation e-mail are the best places to include this information.

***

### Specs and Customization

The Shop Pay experience is something that millions of customers are familiar with. Changes to this core UX/UI runs the risk of diminishing trust and creating uncertainty during a checkout. However, there are a few customizations available to you to make the components feel like a part of your customer experience you've designed and built.

#### Button Styles

To better match your existing button styles, you can use the following properties to customize the Shop Pay payment request button:

* Width

* Height

* BorderRadii

* Variant

  For a full list of properties and constraints, refer to the documentation for the `shop-pay-payment-request-button`.

  You can't change the following attributes:

* `fontFamily` – the font used for "Buy with" is part of the Shop Pay branding

* Logo size

* Logo position

* Button color

* Logo color

  If you place the button on a surface that has low contrast with the button background, the button automatically renders a `border: 1px solid rgba(255, 255, 255, 0.50)` to give the button definition.

  ![Shop Pay Button with low contrast](https://shopify.dev/assets/assets/images/api/commerce-components/pay/shop-pay-ccs-contrast-aq_Xjylo.png)

#### Button Placement

Like other accelerated checkout buttons, we recommend that you add the Shop Pay button to the first step of a checkout, and converting pages like the cart or product page.

We recommend that you use the **Buy with** button variant when the button will trigger a checkout for a specific item or collection. For example, you might use this button on product pages. We recommend that you use the logo-only variant on your cart and guest checkout, where Shop Pay acts as a checkout option.

#### Checkout Logo

You can customize the Shop Pay popup checkout's appearance by adding your own logo to the top section of the popup.

The logo will appear centrally in a card with `21px` padding.

![Shop Pay Checkout logo specifications](https://shopify.dev/assets/assets/images/api/commerce-components/pay/shop-pay-ccs-popup-checkout-logo-B1yezOzK.png)

Horizontal logotypes work best as they provide brand recognition without pushing the checkout too far down the popup or mobile screen.

For reference, the logo in this screenshot is `246px` x `45px`.

#### Email Recognition Modal

The email recognition modal is a Shop Pay branded experience and isn't customizable.

***

### Additional Resources

[Shop Pay Wallet API\
\
](https://shopify.dev/docs/api/commerce-components/pay)

[API documentation for Shop Pay Wallet.](https://shopify.dev/docs/api/commerce-components/pay)

[Development Journey and Key Considerations\
\
](https://shopify.dev/docs/api/commerce-components/pay/development-journey)

[A guide to assist with the development journey and key considerations for Shop Pay Wallet.](https://shopify.dev/docs/api/commerce-components/pay/development-journey)

[Shop Configuration Guide\
\
](https://shopify.dev/docs/api/commerce-components/pay/shop-configuration)

[New shop configuration guide for Shop Pay Wallet.](https://shopify.dev/docs/api/commerce-components/pay/shop-configuration)

[Troubleshooting Guide\
\
](https://shopify.dev/docs/api/commerce-components/pay/troubleshooting-guide)

[A guide to assist with troubleshooting Shop Pay Wallet implementations.](https://shopify.dev/docs/api/commerce-components/pay/troubleshooting-guide)

[Merchant-Assigned A/B Testing Guide\
\
](https://shopify.dev/docs/api/commerce-components/pay/merchant-assigned-ab-testing-guide)

[A guide to assist with performing A/B testing for Shop Pay Wallet.](https://shopify.dev/docs/api/commerce-components/pay/merchant-assigned-ab-testing-guide)

[Shop Pay Installments activation\
\
](https://help.shopify.com/en/manual/payments/shop-pay-installments/activating-shop-pay-installments)

[A guide to activating Shop Pay Installments.](https://help.shopify.com/en/manual/payments/shop-pay-installments/activating-shop-pay-installments)

***

---



<a id="pay-development-journey"></a>


## Shop Pay Development Journey and Key Considerations

**Note:**

NOTE: This document is **only applicable to select merchants and partners** using 3rd party checkout solutions. For more information, contact [our enterprise sales team](https://www.shopify.com/solutions/shop-pay/enterprise#contact-sales).

***

### Overview

This document aims to provide developers with guidance on how to approach the implementation of Shop Pay. This document is not intended to replace any of our existing public documentation, but to provide a guide for developers who are interested in understanding the development journey and key considerations for implementing Shop Pay.

***

### Development Journey

1. Review [the Shop Pay Wallet documentation](https://shopify.dev/docs/api/commerce-components/pay) including the [UX guidelines](https://shopify.dev/docs/api/commerce-components/pay/design-guidelines).

2. Complete the [Shop Configuration guide](https://shopify.dev/docs/api/commerce-components/pay/shop-configuration) to configure your Shopify account, and provide your Shopify Launch team with the required information.

3. Shopify will confirm once the shop has been configured. Domain propagation might take up to 24 hours.

4. [Create Shop Pay test user account(s)](https://shop.app/pay/authentication/login), verify email & phone, then provide the email addresses to your Shopify Launch team to enable test mode for the accounts.

5. Develop the integration using the [developer documentation](https://shopify.dev/docs/api/commerce-components/pay):

   1. Add and configure the [JavaScript SDK](https://shopify.dev/docs/api/commerce-components/pay/javascript-sdk).
   2. [Create a session](https://shopify.dev/docs/api/commerce-components/pay/sessions-and-events#create-a-session) and populate the [payment request](https://shopify.dev/docs/api/commerce-components/pay/frontend-api-reference#shoppaypaymentrequest) with mock data.
   3. [Create event listeners](https://shopify.dev/docs/api/commerce-components/pay/sessions-and-events#attach-event-listeners) and ensure they respond with complete calls.
   4. Establish frontend-backend API communication.
   5. Implement the [GraphQL ShopPayPaymentRequestSessionCreate](https://shopify.dev/docs/api/commerce-components/pay/graphql-pre-payment#example-shoppaypaymentrequestsessioncreate) and [GraphQL ShopPayPaymentRequestSessionSubmit](https://shopify.dev/docs/api/commerce-components/pay/graphql-pre-payment#example-shoppaypaymentrequestsessionsubmit) calls.\
      \
      *This is sufficient to establish the session, open the popup and complete an order using a test card with Shopify Payments in test mode. The next section provides additional guidance on how to complete the checkout portion of the implementation.*
   6. Ensure backend access to required services (discounts, shipping, taxes).
   7. Build out frontend event listeners and backend functionality for data passing.
   8. Forward customers to the thank-you page and pass required data after a successful purchase.
   9. Add [error handling](https://shopify.dev/docs/api/commerce-components/pay/frontend-api-reference#shoppayusererror) and logging.
   10. Add analytics and the optional `onAnalyticsEvent` parameter.
   11. Add locale and multi-currency support if needed.\
       \
       *This completes the checkout portion of the implementation. The following additional steps are required to complete all post-order actions.*

6. [Build a reconciliation job](https://shopify.dev/docs/api/commerce-components/pay/monitoring#reconciliation-job) to query orders, transactions, and fulfillmentOrders.

7. Build a webhook service to regularly confirm active [webhook subscriptions](https://shopify.dev/docs/api/admin-graphql/latest/queries/webhookSubscriptions) and [recover when necessary](https://shopify.dev/docs/apps/build/webhooks/best-practices#recover-webhooks).

8. Build a webhook handler to receive and process webhooks.

9. Ensure the system skips the reconciliation job for orders received via webhook.

10. Pass reconciled order data to your Order Management System and mark orders as completed.

11. Build post-order actions ([captures, partial captures](https://shopify.dev/docs/api/commerce-components/pay/graphql-post-payment#payment-capture), [refunds](https://shopify.dev/docs/api/commerce-components/pay/graphql-post-payment#refund-creation), [order cancellations](https://shopify.dev/docs/api/commerce-components/pay/graphql-post-payment#cancelling-and-deleting-orders), [transaction voids and reauthorizations](https://shopify.dev/docs/api/commerce-components/pay/graphql-post-payment#authorizations)).

**Note:**

Warning: If using the Order Authorization API to generate new authorizations, ensure that your system tracks the age of authorizations to void and reissue them as needed. See [Authorizations](https://shopify.dev/docs/api/commerce-components/pay/graphql-post-payment#authorizations) for more information.

1. [Instrument the checkout for A/B testing](https://shopify.dev/docs/api/commerce-components/pay/merchant-assigned-ab-testing-guide).
2. Align with Shopify on data sharing for the A/B test.
3. Perform an [A/A test](https://shopify.dev/docs/api/commerce-components/pay/merchant-assigned-ab-testing-guide#a-a-test) to ensure data accuracy and even assignment distribution.
4. Align with Shopify on A/A test results and schedule the A/B test.
5. Roll out to 100% after successful A/B test results.
6. Confirm A/B test disablement and ensure email listener and button components are functional in production.

***

### Key Considerations

While implementing Shop Pay Wallet, there are many considerations to be made along the way. Specifically, every effort should be taken to reduce friction that a customer may face within the Shop Pay Checkout, such as an error requiring a customer to close the Shop Pay Checkout for any reason before they can complete a purchase.

Below is a list of common considerations your team should explore early in the development journey.

* ### Frontend

  * Does anything in the checkout need to be changed in order to support the implementation of Shop Pay Wallet?

    * Moving the email address field to the top of the guest checkout is important to ensure that the email listener is able to recognize the customer early in the checkout process, avoiding the need to enter any additional information such as shipping or payment details

    * Adding additional space for the Shop Pay button in the cart or checkout may be required to ensure that there is sufficient space for the Shop Pay button to be displayed according to the [UX guidelines](https://shopify.dev/docs/api/commerce-components/pay/design-guidelines)

    * Modifying the guest checkout flow to ensure that both the button and email recognition components are always present in checkout flows, even for recognized or logged-in users

    * Front loading any not supported actions in the checkout so that customers can do them before entering the Shop Pay express checkout flow.

      * Rewards selection
      * Gift card entry
      * Gift wrapping, engraving and other customizations
      * Cart add-ons / upsells
      * Split delivery methods
      * Are there any checkout flows where a customer may not review the options in the cart?
      * Are all express payment entry points being moved to the first page of the checkout to ensure that customers perform required actions before proceeding with express checkout options such as Shop Pay?

  * Do you plan to add the "Buy now" button on the PDP of any high-value products?
    * This may encourage a higher conversion rate for high-value products, but may also reduce Average Order Value

  * Are you including BOPIS / In-store pickup support?
    * This requires additional configuration in the backend to support the pickup location field, and additional logic to ensure that the correct address is being used for the pickup location

  * Are you including multi-language support?
    * This requires additional configuration in the frontend to support the locale parameter, and additional logic to ensure that the correct language is being used for the payment request

  * Are you including multi-currency support?
    * This requires additional configuration in the frontend to support the currency parameter, and additional logic to ensure that the correct currency is being used for the payment request

  * Are you including installments support?
    * This requires additional configuration in the frontend to specify that installments were selected on the thank-you page, and comes with an additional fee

* ### Backend / Integration

  * Are there any systemic constraints which might affect implementation?

    * Certain addresses or address formats not accepted, requiring additional validation and error handling
    * Do you have subscription products which aren't currently supported by Shop Pay Wallet?
    * Is your development environment closed to the public, which might make it difficult for Shopify to test the implementation?
    * Is there an inability to host the required logic, such as a reconciliation job or webhook handler, in your existing systems, which may require additional resources to host the logic in a separate service?

  * Which additional systems / functions will the backend need to access in order to rebuild the payment request?

    * Shipping
    * BOPIS / in-store pickup locations
    * Discounts
    * Automatic or applied rewards
    * Taxes
    * Inventory (to ensure that products are in stock)
    * Gift card handling (to ensure that gift cards applied to the cart are accounted for in the payment request)
    * Gift wrapping, engraving, or any other add-on options selected by the customer on the PDP or during the checkout flow (to ensure that these are accounted for in the payment request)

  * Will your team be leveraging the Order Authorization API to replace expired or voided authorizations, and/or capture beyond the normal 7-30 days?

    * Are you going to use finalCapture on every partial capture, and refresh the authorization as needed, in order to ensure that you can release customer funds quickly for partial refunds?
    * Are you going to leave the extended authorization period (up to 30d on most cards) enabled or have it disabled to reduce time to expiration (down to 7d)?

  * Will you be using webhook subscriptions to smooth out traffic, or using reconciliation jobs only to retrieve information from Shopify, post-order-creation? This affects the complexity of the post-order actions portion of the implementation, specifically steps 6, 7, 8, and 9 in the development journey above.

* ### Post Purchase

  * How much of the Shopify APIs will be adopted for launch vs how much will Customer Service or other teams need to do in the Shopify Admin?

    * If development time is a consideration, almost everything post-order-creation can be done manually in the Shopify admin, except for voiding and reissuing authorizations
    * Are there training considerations for your team to ensure that they're comfortable with the new process and familiar with Shopify's admin?
    * Are there headcount or volume considerations for your team to ensure that they're able to handle any increased workload?
    * What's the forward-looking plan to adopt more APIs and consolidate work in your existing systems (OMS, ERP, etc.)?

  * How will your returns system work with Shop Pay orders for processing returns and refunds?
    * Will you connect your return system/interface, or give your Customer Service teams access to the Shopify admin?

* ### Other considerations

  * Shopify administration

    * Which members of your team should be the Account Owners on your development and production environments, to ensure that someone is always available to configure restricted settings in Shopify?
    * Who will be responsible for using their details for the configuration of Shopify Payments in each of your shops?
    * What permissions within Shopify do your staff require to perform their duties? This will help inform how to configure the various roles and their permissions in the [Organization settings](https://help.shopify.com/en/manual/organization-settings) of the Shopify admin.

  * A/B testing

    * Is your current A/B testing framework going to allow you to measure the effects of Shop Pay Wallet?
    * Are you able to add [Shopify's eventing](https://shopify.dev/docs/api/commerce-components/pay/merchant-assigned-ab-testing-guide) to your existing A/B testing framework?
      * Otherwise, do you have a way to share your A/B test data with Shopify to ensure our data teams are aligned?

***

### Additional Resources

[Shop Pay Wallet API\
\
](https://shopify.dev/docs/api/commerce-components/pay)

[API documentation for Shop Pay Wallet.](https://shopify.dev/docs/api/commerce-components/pay)

[UX Guidelines\
\
](https://shopify.dev/docs/api/commerce-components/pay/design-guidelines)

[UX documentation for Shop Pay Wallet.](https://shopify.dev/docs/api/commerce-components/pay/design-guidelines)

[Shop Configuration Guide\
\
](https://shopify.dev/docs/api/commerce-components/pay/shop-configuration)

[New shop configuration guide for Shop Pay Wallet.](https://shopify.dev/docs/api/commerce-components/pay/shop-configuration)

[Troubleshooting Guide\
\
](https://shopify.dev/docs/api/commerce-components/pay/troubleshooting-guide)

[A guide to assist with troubleshooting Shop Pay Wallet implementations.](https://shopify.dev/docs/api/commerce-components/pay/troubleshooting-guide)

[Merchant-Assigned A/B Testing Guide\
\
](https://shopify.dev/docs/api/commerce-components/pay/merchant-assigned-ab-testing-guide)

[A guide to assist with performing A/B testing for Shop Pay Wallet.](https://shopify.dev/docs/api/commerce-components/pay/merchant-assigned-ab-testing-guide)

[Shop Pay Installments activation\
\
](https://help.shopify.com/en/manual/payments/shop-pay-installments/activating-shop-pay-installments)

[A guide to activating Shop Pay Installments.](https://help.shopify.com/en/manual/payments/shop-pay-installments/activating-shop-pay-installments)

***

---



<a id="pay-frontend-api-reference"></a>


## Frontend API reference

**Note:**

This API is only available to select merchants and Partners that use 3rd party checkout solutions. For more information, contact [our enterprise sales team](https://www.shopify.com/solutions/shop-pay/enterprise#contact-sales).

***

### `ShopPayPaymentRequestSession`

Shopify emits these events as the user interacts with Shop Pay. Listen for the events, and respond accordingly. For examples of attaching event listeners, refer to the [sessions and events](https://shopify.dev/docs/api/commerce-components/pay/sessions-and-events#attach-event-listeners) documentation.

The following interface defines the events and completion methods available on a `ShopPayPaymentRequestSession`:

```javascript
interface ShopPayPaymentRequestSession {
  // Requires a server call
  sessionrequested: EventHandler<ShopPaySessionRequestedEvent>;
  completeSessionRequest(sessionRequestResponse: {token, checkoutUrl, sourceIdentifier} & ShopPayPaymentRequestUpdate): void;


  // Dispatched as the user changes various fields
  deliverymethodtypechanged: EventHandler<DeliveryMethodTypeChangedEvent>;
  completeDeliveryMethodTypeChange(update: ShopPayPaymentRequestUpdate): void;


  pickuplocationchanged: EventHandler<PickupLocationChangedEvent>;
  completePickupLocationChange(update: ShopPayPaymentRequestUpdate);


  pickuplocationfilterchanged: EventHandler<PickupLocationFilterChangedEvent>;
  completePickupLocationFilterChange(update: ShopPayPaymentRequestUpdate);


  shippingaddresschanged: EventHandler<ShopPayShippingAddressChangedEvent>;
  completeShippingAddressChange(update: ShopPayPaymentRequestUpdate): void;


  deliverymethodchanged: EventHandler<ShopPayDeliveryMethodChangedEvent>;
  completeDeliveryMethodChange(update: ShopPayPaymentRequestUpdate): void;


  discountcodechanged: EventHandler<ShopPayDiscountCodeChangedEvent>;
  completeDiscountCodeChange(update: ShopPayPaymentRequestUpdate): void;


  // Dispatched once a customer clicks the Pay button in order to confirm
  // the payment should be processed
  paymentconfirmationrequested: EventHandler<ShopPayPaymentConfirmationRequestedEvent>;
  completePaymentConfirmationRequest(update: ShopPayPaymentRequestUpdate): void;


  // Dispatched after a payment processing attempt
  paymentcomplete: EventHandler<ShopPayPaymentCompleteEvent>;


  // Dispatched when a payment attempt has failed
  paymentattemptfailed: EventHandler<ShopPayPaymentAttemptFailedEvent>;


  // Dispatched after the checkout window is closed
  windowclosed: EventHandler<WindowClosedEvent>;


  // Cancels the session
  close(): void;
}


interface ShopPayPaymentRequestUpdate {
  updatedPaymentRequest?: ShopPayPaymentRequest;
  errors?: ShopPayUserError[];
}
```

| **Field name** | **Type** | **Description** |
| - | - | - |
| `sessionrequested` | Event handler | This event handler is triggered when a new Shop Pay session is requested. The listener must make a server-to-server call from your backend to Shop Pay's servers, and then call `completeSessionRequest()` from your frontend with the response. |
| `completeSessionRequest` | `(args: {token: string, checkoutUrl: string, sourceIdentifier: string} & ShopPayPaymentRequestUpdate) => void` | This function completes the session request. It must be invoked with the `token`, `checkoutUrl`, and `sourceIdentifier` from response of the `ShopPayPaymentRequestSessionCreate` mutation. You can optionally include an updated payment request. |
| `deliverymethodtypechanged` | Event handler | This event handler is triggered when a customer changes their preferred delivery method. When this event is triggered, `completeDeliveryMethodTypeChange()` must be called with the updated payment request. |
| `completeDeliveryMethodTypeChange` | `(args: ShopPayPaymentRequestUpdate) => void` | This function must be called when the delivery method type changes. |
| `pickuplocationchanged` | Event handler | This event handler is triggered when a customer changes the selected pickup location. `completePickupLocationChange()` must be called with the updated payment request. |
| `completePickupLocationChange` | `(args: ShopPayPaymentRequestUpdate) => void)` | This function must be called when the selected pickup location changes. |
| `pickuplocationfilterchanged` | Event handler | This event handler is triggered when the pickup location filter changes. `completePickupLocationFilterChange()` must be called with an updated payment request containing a filtered set of pickup locations. |
| `completePickupLocationFilterChange` | `(args: ShopPayPaymentRequestUpdate) => void` | This function must be called when the pickup location filter changes. |
| `shippingaddresschanged` | Event handler | This event handler is triggered when a customer changes their preferred shipping address. When this event is triggered, `completeShippingAddressChange()` must be called with the updated payment request. |
| `completeShippingAddressChange` | `(args: ShopPayPaymentRequestUpdate) => void` | This function must be called when the shipping address changes. |
| `deliverymethodchanged` | Event handler | This event handler is triggered when a customer changes their preferred delivery method. When this event is triggered, `completeDeliveryMethodChange()` must be called with the updated payment request. |
| `completeDeliveryMethodChange` | `(args: ShopPayPaymentRequestUpdate) => void` | This function must be called with the updated payment request. |
| `discountcodechanged` | Event handler | This event handler is triggered when the discount code changes. When this event is triggered, `completeDiscountCodeChange()` must be called with the updated payment request. |
| `completeDiscountCodeChange` | `(args: ShopPayPaymentRequestUpdate) => void` | This function updates the payment request after discount codes are changed by providing an updated payment request. |
| `paymentconfirmationrequested` | Event handler | This event handler is triggered after a customer clicks the Pay button. The event includes the customer's `billingAddress` as a `ShopPayContactField` object. The `ShopPayPaymentRequestSessionSubmit` mutation must be invoked, then `completePaymentConfirmationRequest()` must be called afterwards. |
| `completePaymentConfirmationRequest` | `(args: ShopPayPaymentRequestUpdate) => void` | This function is used to confirm that Shopify must proceed with payment. If there are any errors, they must be provided in the `errors` field. If `updatedPaymentRequest` is given, `errors` must also be given. |
| `paymentcomplete` | Event handler | This event handler is triggered after Shopify successfully processes a payment. The event payload has a `.processingStatus` field of type `ShopPayPaymentRequestReceiptCompleted`. |
| `paymentattemptfailed` | Event handler | This event handler is triggered when a payment attempt has failed. The event payload has a `.error` field with details about why the payment attempt failed. |
| `close` | `() => void` | This function cancels the session and closes the popup. |
| `windowclosed` | Event handler | This event handler is triggered after the checkout window is closed. |

***

### `ShopPayPaymentRequest`

A payment request is the primary means of communication between your system and Shop Pay.

![Shop Pay Wallet properties](https://shopify.dev/assets/assets/images/api/commerce-components/pay/line-items-DDW_fO23.png)

**Note:**

The frontend `ShopPayPaymentRequest`, used to display the payment request in the Shop Pay popup, is different from the backend `ShopPayPaymentRequestInput`, used in [mutations](https://shopify.dev/docs/api/storefront/latest/input-objects/ShopPayPaymentRequestInput) as part of payment processing. Make sure to use the correct type for each context.

The following interface defines the properties of a `ShopPayPaymentRequest`:

```typescript
interface ShopPayPaymentRequest {
  supportedDeliveryMethodTypes?: ShopPayDeliveryMethodType[];
  selectedDeliveryMethodType?: ShopPayDeliveryMethodType;
  pickupLocations?: ShopPayPickupLocation[];
  paymentMethod?: string;
  discountCodes: string[];
  lineItems: ShopPayLineItem[];
  shippingLines: ShopPayShippingLine[];
  deliveryMethods: ShopPayDeliveryMethod[]
  locale: ShopPayLocale;
  presentmentCurrency: ShopPayCurrencyCode;
  subtotal: ShopPayMoney;
  discounts?: ShopPayDiscountLine[];
  totalShippingPrice?: ShopPayTotalShippingPrice;
  totalTax?: ShopPayMoney;
  total: ShopPayMoney;
}
```

| **Field name** | **Type** | **Description** |
| - | - | - |
| `supportedDeliveryMethodTypes` optional | `ShopPayDeliveryMethodType[]` | The supported delivery method types for this checkout. Defaults to `["SHIPPING"]`. |
| `selectedDeliveryMethodType` optional | `ShopPayDeliveryMethodType` | The selected delivery method type. |
| `pickupLocations` optional | `ShopPayPickupLocation[]` | The available pickup locations when the selected delivery method type is `PICKUP`. |
| `paymentMethod` optional | `string` | The one-time-use payment token, included only in the `paymentconfirmationrequested` event. |
| `discountCodes` required | `string[]` | All applied discount codes, displayed under the discount code field as tags. |
| `lineItems` required | `ShopPayLineItem[]` | The line items to display. |
| `shippingLines` required | `ShopPayShippingLine[]` | The shipping line items to display. |
| `deliveryMethods` required | `ShopPayDeliveryMethod[]` | The available delivery methods. |
| `locale` required | `ShopPayLocale` | An [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) language code, such as `en`, used to inform the display of instructions and amounts. |
| `presentmentCurrency` required | `ShopPayCurrencyCode` | An [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code for the transaction, including legacy and non-standard codes. |
| `subtotal` required | `ShopPayMoney` | The subtotal of the line items, calculated as the sum of the `finalLinePrice` from all lines. |
| `discounts` optional | `ShopPayDiscountLine[]` | All discounts applied to the subtotal. These must be positive values. |
| `totalShippingPrice` optional | `ShopPayTotalShippingPrice` | The total shipping price after all applicable discounts, not including tax. |
| `totalTax` optional | `ShopPayMoney` | The total tax from all line items and shipping charges. |
| `total` required | `ShopPayMoney` | The grand total includes all applicable discounts, shipping charges, and taxes. The customer is charged this amount. |

***

### `ShopPayDeliveryMethodType`

The `ShopPayDeliveryMethodType` can be one of the following values:

* **`PICKUP`**: The customer buys online and picks up the order.
* **`SHIPPING`**: The customer's order is shipped.

***

### `ShopPayLineItem`

Represents line items in a payment request. Includes cart line items, order-level line items such as discounts and taxes, and the grand total.

![Shop Pay Wallet line item properties](https://shopify.dev/assets/assets/images/api/commerce-components/pay/line-item-B0pm43Kj.png)

```typescript
interface ShopPayLineItem {
  label: string;
  quantity: number;
  sku?: string;
  requiresShipping?: boolean;
  image?: ShopPayLineItemImage;
  originalItemPrice: ShopPayMoney;
  itemDiscounts?: ShopPayDiscountLine[];
  finalItemPrice: ShopPayMoney;
  originalLinePrice: ShopPayMoney;
  lineDiscounts?: ShopPayDiscountLine[];
  finalLinePrice: ShopPayMoney;
}
```

| **Field name** | **Type** | **Description** |
| - | - | - |
| `label` required | `string` | The label for the line item. |
| `quantity` required | `number` | The quantity of the line item. |
| `sku` optional | `string` | The merchandise SKU if needed for inventory tracking and reporting. |
| `requiresShipping` optional | `boolean` | Whether the line item requires shipping. Defaults to `true`. |
| `image` optional | `ShopPayLineItemImage` | The image associated with the line item. |
| `originalItemPrice` required | `ShopPayMoney` | The original price of the item before any applicable discounts. |
| `itemDiscounts` optional | `ShopPayDiscountLine[]` | All discounts applied to the item. These must be positive values. |
| `finalItemPrice` required | `ShopPayMoney` | The final price of the item after all applicable discounts. |
| `originalLinePrice` required | `ShopPayMoney` | The original line price before any applicable discounts, calculated as the original item price multiplied by quantity. |
| `lineDiscounts` optional | `ShopPayDiscountLine[]` | All discounts applied to the line item. |
| `finalLinePrice` required | `ShopPayMoney` | The final price of the line item based on quantity \* item price including all applicable discounts. |

***

### `ShopPayLineItemImage`

The image associated with the line item.

```typescript
interface ShopPayLineItemImage {
  url: string;
  alt?: string;
}
```

| **Field name** | **Type** | **Description** |
| - | - | - |
| `url` required | `string` | The URL of the image. Recommended: 128x128px, 1:1 ratio image. |
| `alt` optional | `string` | The alt text associated with the image. |

***

### `ShopPayTotalShippingPrice`

Represents the total shipping price in a payment request.

![Shop Pay Wallet total shipping price](https://shopify.dev/assets/assets/images/api/commerce-components/pay/total-shipping-price-BiIcefda.png)

```typescript
interface ShopPayTotalShippingPrice {
  discounts?: ShopPayDiscountLine[];
  originalTotal?: ShopPayMoney;
  finalTotal: ShopPayMoney;
}
```

| **Field name** | **Type** | **Description** |
| - | - | - |
| `discounts` optional | `ShopPayDiscountLine[]` | All discounts applied to the shipping price. These must be positive values. |
| `originalTotal` optional | `ShopPayMoney` | The original total shipping price. Used to show shipping price before any applicable discounts are applied, and must be included for all non-free shipping methods. |
| `finalTotal` required | `ShopPayMoney` | The final total shipping price. Price after all applicable discounts. |

***

### `ShopPayDiscountLine`

Represents discount lines in a payment request.

```typescript
interface ShopPayDiscountLine {
  label: string;
  amount: ShopPayMoney;
}
```

| **Field name** | **Type** | **Description** |
| - | - | - |
| `label` required | `string` | The label for the discount line. |
| `amount` required | `ShopPayMoney` | The amount of the discount as a positive value. |

***

### `ShopPayShippingLine`

Represents shipping line items in a payment request.

```typescript
interface ShopPayShippingLine {
  label: string;
  amount: ShopPayMoney;
  code: string;
}
```

| **Field name** | **Type** | **Description** |
| - | - | - |
| `label` required | `string` | The label for the shipping line item. |
| `amount` required | `ShopPayMoney` | The amount of the shipping line item. |
| `code` required | `string` | The service code of the shipping rate. Corresponds to `ShopPayDeliveryMethod#code`. |

***

### `ShopPayMoney`

Represents an amount and the associated currency.

| **Field name** | **Type** | **Description** |
| - | - | - |
| `amount` required | `number` | |
| `currencyCode` required | `ShopPayCurrencyCode` | |

***

### `ShopPayContactField`

Represents contact information for shipping or billing addresses. This interface is used to capture customer shipping and contact details during the checkout process.

| **Field name** | **Type** | **Description** |
| - | - | - |
| `countryCode` required | `string` | The country ISO-3166 code of the contact. |
| `postalCode` optional | `string` | The postal code of the contact. |
| `provinceCode` optional | `string` | The province (or state) ISO-3166 code of the contact. |
| `city` required | `string` | The city of the contact. |
| `firstName` optional | `string` | The first name of the contact. |
| `lastName` required | `string` | The last name of the contact. |
| `address1` required | `string` | The address of the contact. |
| `address2` optional | `string` | The address2 of the contact. |
| `phone` optional | `string` | The phone number of the contact. |
| `email` optional | `string` | The email address of the contact. |
| `companyName` optional | `string` | The company name of the contact. |

***

### `ShopPayPickupLocation`

Represents an available order pickup location. Pickup locations are displayed to a customer if they select `PICKUP` as the delivery method type.

```typescript
interface ShopPayPickupLocation {
  label: string;
  detail: string;
  code: string;
  amount: ShopPayMoney;
  readyExpectationLabel?: string;
  proximityLabel?: string;
}
```

| **Field name** | **Type** | **Description** |
| - | - | - |
| `label` required | `string` | The label for the pickup location. |
| `detail` required | `string` | The detail describing the pickup location. |
| `code` required | `string` | The code for the pickup location used to uniquely identify it. |
| `amount` required | `ShopPayMoney` | The amount of the pickup. |
| `readyExpectationLabel` optional | `string` | The description of when the order is ready for pickup. |
| `proximityLabel` optional | `string` | The description for the proximity of the pickup location relative to the customer. |

***

### `ShopPayDeliveryMethod`

![Shop Pay Wallet delivery methods](https://shopify.dev/assets/assets/images/api/commerce-components/pay/shipping-0CIVN95N.png)

```typescript
interface ShopPayDeliveryMethod {
  code: string;
  label: string;
  detail?: string;
  amount: ShopPayMoney;
  minDeliveryDate?: ISO8601Date;
  maxDeliveryDate?: ISO8601Date;
  deliveryExpectationLabel?: string;
}
```

| **Field name** | **Type** | **Description** |
| - | - | - |
| `code` required | `string` | The service code of the shipping rate. |
| `label` required | `string` | The service name of the shipping rate. |
| `detail` optional | `string` | The description of the shipping rate. |
| `amount` required | `ShopPayMoney` | The total price amount of the shipping rate. |
| `minDeliveryDate` optional | `ISO8601Date` | The minimum delivery date. ISO 8601-encoded date string. Required unless `deliveryExpectationLabel` is provided. |
| `maxDeliveryDate` optional | `ISO8601Date` | The maximum delivery date. ISO 8601-encoded date string. Required unless `deliveryExpectationLabel` is provided. |
| `deliveryExpectationLabel` optional | `string` | If provided, is displayed as further detail for expected delivery, replacing the calculated delivery estimate. |

***

### `ShopPayPaymentRequestUpdate`

Represents an updated state of the checkout. At least one of an updated payment request and an array of errors should be provided.

| **Field name** | **Type** | **Description** |
| - | - | - |
| `updatedPaymentRequest` optional | `ShopPayPaymentRequest` | The updated payment request. If not provided, the current payment request continues to be used. |
| `errors` optional | `ShopPayUserError[]` | An array of errors. |

***

### `PickupLocationChangedEvent`

Dispatched when a customer changes their pickup location.

```typescript
interface PickupLocationChangedEvent extends Event {
  pickupLocation: ShopPayPickupLocation;
}
```

| **Field name** | **Type** | **Description** |
| - | - | - |
| `pickupLocation` required | `ShopPayPickupLocation` | The customer's pick up location. |

***

### `PickupLocationFilterChangedEvent`

Dispatched when a customer changes their pickup location filter.

```typescript
interface PickupLocationFilterChangedEvent extends Event {
  buyerLocation: ShopPayBuyerLocation;
}
```

| **Field name** | **Type** | **Description** |
| - | - | - |
| `buyerLocation` required | `ShopPayBuyerLocation` | The customer's location used to filter pickup locations. |

***

### `DeliveryMethodTypeChangedEvent`

Dispatched when a customer changes their delivery method type.

```typescript
interface DeliveryMethodTypeChangedEvent extends Event {
  deliveryMethodType: ShopPayDeliveryMethodType;
}
```

| **Field name** | **Type** | **Description** |
| - | - | - |
| `deliveryMethodType` required | `ShopPayDeliveryMethodType` | The delivery method type selected by the user. |

***

### `ShopPayBuyerLocation`

Represents a customer's location. Use this to set the available pickup locations.

```typescript
interface ShopPayBuyerLocation {
  address1?: string;
  address2?: string;
  city?: string;
  provinceCode?: string;
  countryCode?: string;
  postalCode?: string;
  coordinates?: {
    latitude: number;
    longitude: number;
  };
}
```

| **Field name** | **Type** | **Description** |
| - | - | - |
| `address1` optional | `string` | The address of the contact. |
| `address2` optional | `string` | The address2 of the contact. |
| `city` optional | `string` | The city of the contact. |
| `provinceCode` optional | `string` | The province (or state) ISO-3166 code of the contact. |
| `countryCode` optional | `string` | The country ISO-3166 code of the contact. |
| `postalCode` optional | `string` | The postal code of the contact. |
| `coordinates.latitude` optional | `number` | The latitude of the customer's location. |
| `coordinates.longitude` optional | `number` | The longitude of the customer's location. |

***

### `ShopPayPaymentConfirmationRequestedEvent`

Dispatched when a customer clicks **Pay now** to confirm their payment. This event includes the customer's billing address.

```typescript
interface ShopPayPaymentConfirmationRequestedEvent extends Event {
  billingAddress: ShopPayContactField;
}
```

| **Field name** | **Type** | **Description** |
| - | - | - |
| `billingAddress` required | `ShopPayContactField` | The customer's billing address and contact info. |

***

### `ShopPayPaymentRequestReceiptCompleted`

A successful completed receipt. The status is `completed`. This event only occurs if the payment is successfully processed.

```typescript
interface ShopPayPaymentRequestReceiptCompleted {
  completedAt: ISO8601Date;
  billingAddress?: {
    countryCode: string;
    postalCode?: string;
    provinceCode?: string;
    city: string;
    firstName?: string;
    lastName: string;
    address1: string;
    address2?: string;
    phone?: string;
    email?: string;
    companyName?: string;
  };
  creditCardDetails?: {
    brand?: string;
    lastDigits?: string;
  };
  paymentType: "SHOP_PAY" | "SHOPIFY_INSTALLMENTS";
  accountUrl?: string;
  status: "completed";
}
```

| **Field name** | **Type** | **Description** |
| - | - | - |
| `completedAt` required | `ISO8601Date` | The date the receipt was completed. |
| `billingAddress` optional | `ShopPayContactField` | The billing address of the customer. When present, `countryCode`, `city`, `lastName`, and `address1` are required. |
| `creditCardDetails` optional | `{brand?: string, lastDigits?: string}` | The credit card details of the customer. |
| `paymentType` required | `"SHOP_PAY" or "SHOPIFY_INSTALLMENTS"` | The type of payment used. |
| `accountUrl` optional | `string` | The URL to the customer's account. |
| `status` required | `"completed"` | The status of the receipt. |

***

### `ShopPayPaymentAttemptFailedEvent`

Dispatched when a payment attempt has failed. This can happen due to various reasons such as insufficient funds, invalid payment details, or other payment processing errors.

**Caution:**

Buyers have the option to select a different payment method to retry their checkout after a failure. Don't call `session.close()` so that users can retry with a new payment method without disrupting their session.

```typescript
interface ShopPayPaymentAttemptFailedEvent extends Event {
  error: {
    errorCode: string;
    reason: string;
  };
}
```

| **Field name** | **Type** | **Description** |
| - | - | - |
| `error` required | `{errorCode: string, reason: string}` | The reason why the payment attempt failed. |

***

### `ShopPayUserError`

Represents an error that's surfaced to the user during checkout.

The following images show how each error type appears in the Shop Pay dialog:

**`generalError`**:

![generalError displayed at the top of the Shop Pay checkout](https://shopify.dev/assets/assets/images/api/commerce-components/pay/general-error-iuLcmLqg.png)

**`discountCodeError`**:

![discountCodeError displayed near the discount code field](https://shopify.dev/assets/assets/images/api/commerce-components/pay/discount-code-error-DziLeB4H.png)

**`shippingAddressError`**:

![shippingAddressError displayed near the shipping address selection](https://shopify.dev/assets/assets/images/api/commerce-components/pay/shipping-address-error-D35Tvu4j.png)

| **Field name** | **Type** | **Description** |
| - | - | - |
| `type` required | `'generalError'` or `'discountCodeError'` or `'shippingAddressError'` | The context of the error. |
| `message` optional | `string` | The localized message shown to the user. |

* **`generalError`**: These errors are shown at the top of the checkout. We recommend setting your own message. The default error text is "Something went wrong. Please close Shop Pay and try again".
* **`discountCodeError`**: These errors are shown near discount code entry, for example, to indicate that a discount code is expired. We recommend setting your own message. The default error text is "Enter a valid discount code".
* **`shippingAddressError`**: These errors are shown near shipping address selection, for example, to indicate that the selected shipping address can't be delivered to. We recommend setting your own message. The default error text is "Shipping not available for selected address".

**Note:**

A maximum of two errors can be displayed at any given time. If more than two errors are provided, only the first two are shown. Each error message has a character limit of 500; any message exceeding this limit is truncated. Only plain text is supported for error messages. Any HTML or other formatting is removed.

***

### Confirmation flow

After a customer clicks **Pay**, the `paymentconfirmationrequested` event is triggered on your frontend containing the `paymentMethod` token.

To confirm the payment, run the `ShopPayPaymentRequestSessionSubmit` mutation. After that's complete, call `session.completePaymentConfirmationRequest` on your frontend to continue. A payment complete event is dispatched.

Based on payment capture configuration in the Shopify admin's **Payments** settings, the payment is processed as `authorized` or `capture`. If manual capture is configured, you must call the GraphQL Admin API's [`orderCapture`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCapture) mutation to finalize the payment.

When creating an order in Shopify, it might not be immediately available to query, and the [`orders/create`](https://shopify.dev/docs/api/webhooks) webhook might not fire immediately. It's important to ensure that neither of these is required for real-time functionality of your app. Refer to [Recovering from errors](https://shopify.dev/docs/api/commerce-components/pay/monitoring#recovering-from-errors) for more information on making your app resilient to webhook delivery issues.

***

---



<a id="pay-graphql-post-payment"></a>


## GraphQL post-payment

**Note:**

This API is only available to select merchants and Partners that use 3rd party checkout solutions. For more information, contact [our enterprise sales team](https://www.shopify.com/solutions/shop-pay/enterprise#contact-sales).

The post-payment process may involve capturing payments, adding tracking fulfillments, and issuing refunds. This section provides examples of how to use the GraphQL Admin API for these tasks.

***

### Payment capture

Captures payment for an authorized transaction on an order if the **Payments** setting is configured to manual capture. Using the order ID, you can fetch an [`order`](https://shopify.dev/docs/api/admin-graphql/latest/queries/order) and [`OrderTransaction`](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderTransaction), then call the GraphQL Admin API's [`orderCapture`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCapture) mutation to capture the authorized payment.

The following example captures an authorized payment using the `orderCapture` mutation:

### orderCapture

```graphql
mutation orderCapture($input: OrderCaptureInput!) {
  orderCapture(input: $input) {
    transaction {
      id
      amountSet {
        shopMoney {
          amount
          currencyCode
        }
        presentmentMoney {
          amount
          currencyCode
        }
      }
      kind
      status
    }
    userErrors {
      field
      message
    }
  }
}
```

### Input

```json
{
  "input": {
    "amount": "10.00",
    "currency": "USD",
    "id": "gid://shopify/Order/1",
    "parentTransactionId": "gid://shopify/OrderTransaction/2"
  }
}
```

### Response

```json
{
  "orderCapture": {
    "transaction": {
      "id": "gid://shopify/OrderTransaction/3",
      "amountSet": {
        "shopMoney": {
          "amount": "10.00",
          "currencyCode": "USD"
        },
        "presentmentMoney": {
          "amount": "10.00",
          "currencyCode": "USD"
        }
      },
      "kind": "CAPTURE",
      "status": "SUCCESS"
    },
    "userErrors": []
  }
}
```

Shop Pay Wallet supports multi-capture, enabling you to execute partial captures by providing any amount less than the currently uncaptured amount.

For the first partial capture made against an authorization, you can also void the remaining authorization after capturing an amount by including `"finalCapture": true` in your partial capture input. For more details, refer to the [`orderCapture` documentation](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCapture#argument-input).

**Note:**

After an authorization has been partially captured, it can no longer be voided by any means. It must either be captured, or left to expire after the 7 to 30 day authorization period.

***

### Authorizations

With Extended Authorizations, you may capture payments beyond seven days on most card types for a small fee. For more information, refer to [Credit card authorization periods](https://help.shopify.com/en/manual/payments/payment-authorization#credit-card-authorization-period).

You can also use the Order Authorization API to [void an authorization](https://shopify.dev/docs/api/admin-graphql/latest/mutations/transactionVoid) and then [replace it with a new authorization](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCreateMandatePayment).

By combining partial captures using `"finalCapture": true` with the Order Authorization API to create new authorizations, you can re-issue an authorization for the uncaptured amount, while also minimizing times where authorized amounts are held on a customer's card for items they've canceled before fulfillment.

While you may choose to re-issue authorizations immediately after void or expiration to maintain an active authorization, it isn't necessary. Authorizations can be re-issued on demand, as long as the total amount captured and total amount currently authorized is less than the order total.

***

### Fulfillment tracking

You can fetch an [order](https://shopify.dev/docs/api/admin-graphql/latest/queries/order) and [fulfillment order](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder) using the order ID.

If the order is shipped with a tracking number, then you must run the [`fulfillmentCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentCreate) mutation to update the tracking information and fulfill the order. You can make subsequent updates to the tracking information using the [`fulfillmentTrackingInfoUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentTrackingInfoUpdate) mutation.

If the order is for store pickup, then you should instead run the [`fulfillmentOrderLineItemsPreparedForPickup`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderLineItemsPreparedForPickup) mutation to update the status.

The following example creates a fulfillment with tracking information using the `fulfillmentCreate` mutation:

### fulfillmentCreate

```graphql
mutation fulfillmentCreate($fulfillment: FulfillmentInput!) {
  fulfillmentCreate(fulfillment: $fulfillment) {
    fulfillment {
      id
      status
      trackingInfo(first: 10) {
        company
        number
        url
      }
    }
    userErrors {
      field
      message
    }
  }
}
```

### Input

```json
{
  "fulfillment": {
    "lineItemsByFulfillmentOrder": {
      "fulfillmentOrderId": "gid://shopify/FulfillmentOrder/1"
    },
    "trackingInfo": {
      "company": "UPS",
      "number": "1Z001985YW99744790"
    }
  }
}
```

### Response

```json
{
  "fulfillmentCreate": {
    "fulfillment": {
      "id": "gid://shopify/Fulfillment/1",
      "status": "SUCCESS",
      "trackingInfo": [
        {
          "company": "UPS",
          "number": "1Z001985YW99744790",
          "url": "https://www.ups.com/WebTracking?loc=en_US&requester=ST&trackNums=1Z001985YW99744790"
        }
      ]
    },
    "userErrors": []
  }
}
```

The following example shows how to use the `fulfillmentOrderLineItemsPreparedForPickup` mutation:

### fulfillmentOrderLineItemsPreparedForPickup

```graphql
mutation fulfillmentOrderLineItemsPreparedForPickup($input: FulfillmentOrderLineItemsPreparedForPickupInput!) {
  fulfillmentOrderLineItemsPreparedForPickup(input: $input) {
    userErrors {
      field
      message
    }
  }
}
```

### Input

```json
{
  "input": {
    "lineItemsByFulfillmentOrder": [
      {
        "fulfillmentOrderId": "gid://shopify/FulfillmentOrder/1046000776"
      }
    ]
  }
}
```

### Response

```json
{
  "fulfillmentOrderLineItemsPreparedForPickup": {
    "userErrors": []
  }
}
```

***

### Refund creation

Using the order ID returned from a completed checkout, you can run the [`refundCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/refundCreate) mutation:

### refundCreate

```graphql
mutation refundCreate($input: RefundInput!) {
  refundCreate(input: $input) {
    refund {
      id
      transactions(first: 10) {
        nodes {
          id
          kind
          status
        }
      }
    }
    userErrors {
      field
      message
    }
  }
}
```

### Input

```json
{
  "input": {
    "currency": "USD",
    "note": "Customer returned item",
    "orderId": "gid://shopify/Order/1",
    "transactions": [
      {
        "amount": "10.00",
        "gateway": "shopify_payments",
        "kind": "REFUND",
        "orderId": "gid://shopify/Order/1",
        "parentId": "gid://shopify/OrderTransaction/2"
      }
    ]
  }
}
```

### Response

```json
{
  "refundCreate": {
    "refund": {
      "id": "gid://shopify/Refund/1",
      "transactions": {
        "nodes": [
          {
            "id": "gid://shopify/OrderTransaction/3",
            "kind": "REFUND",
            "status": "SUCCESS"
          }
        ]
      }
    },
    "userErrors": []
  }
}
```

***

### Cancelling and deleting orders

You can cancel orders in Shopify using the asynchronous [`orderCancel`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCancel) mutation, which effectively stops the order from being further processed in Shopify:

### orderCancel

```graphql
mutation OrderCancel($orderId: ID!, $notifyCustomer: Boolean, $refund: Boolean!, $restock: Boolean!, $reason: OrderCancelReason!, $staffNote: String) {
  orderCancel(orderId: $orderId, notifyCustomer: $notifyCustomer, refund: $refund, restock: $restock, reason: $reason, staffNote: $staffNote) {
    job {
      id
      done
    }
    jobResult {
      id
      done
    }
    orderCancelUserErrors {
      field
      message
      code
    }
  }
}
```

### Input

```json
{
  "orderId": "gid://shopify/Order/148977776",
  "notifyCustomer": true,
  "refund": true,
  "restock": true,
  "reason": "CUSTOMER",
  "staffNote": "Wrong size. Customer reached out saying they already re-purchased the correct size."
}
```

### Response

```json
{
  "orderCancel": {
    "job": {
      "id": "gid://shopify/Job/070bcd56-de0e-4985-bae8-c05be6365748",
      "done": false
    },
    "jobResult": {
      "id": "gid://shopify/OrderCancelJobResult/884324524",
      "done": false
    },
    "orderCancelUserErrors": []
  }
}
```

***

---



<a id="pay-graphql-pre-payment"></a>


## GraphQL pre-payment

**Note:**

This API is **only available to select merchants and partners** using third-party checkout solutions. For more information, contact [our enterprise sales team](https://www.shopify.com/solutions/shop-pay/enterprise#contact-sales).

These mutations are used with the Storefront API to affect the Shop Pay payment request session.

***

### Example: Shop​Pay​Payment​Request​Session​Create

Details about the `ShopPayPaymentRequestSessionCreate` mutation can be found on the dedicated Storefront API [ShopPayPaymentRequestSessionCreate](https://shopify.dev/docs/api/storefront/latest/mutations/shopPayPaymentRequestSessionCreate) page.

### Mutation

```graphql
mutation shopPayPaymentRequestSessionCreate($sourceIdentifier: String!, $paymentRequest: ShopPayPaymentRequestInput!) {
  shopPayPaymentRequestSessionCreate(sourceIdentifier: $sourceIdentifier, paymentRequest: $paymentRequest) {
    shopPayPaymentRequestSession {
      token
      sourceIdentifier
      checkoutUrl
      paymentRequest {
        …
      }
    }
    userErrors {
      field
      message
    }
  }
}
```

### Input

```json
{
  "sourceIdentifier": "xyz123",
  "paymentRequest": {
    // …
  }
}
```

### Response

```json
{
  "shopPayPaymentRequestSessionCreate": {
    "shopPayPaymentRequestSession": {
      "sourceIdentifier": "xyz123",
      "token": "db4eede13822684b13a607823b7ba40d",
      "checkoutUrl": "https://shop.app/checkout/1/spe/db4eede13822684b13a607823b7ba40d/shoppay",
      "paymentRequest": {
        // …
      }
    },
    "userErrors": []
  }
}
```

#### Shop​Pay​Payment​Request​Session​Create Arguments

| Argument | Type | Description |
| - | - | - |
| sourceIdentifier | String! | A unique identifier for the source of the order. |
| paymentRequest | ShopPayPaymentRequestInput! | The payment request details. |

##### Source Identifier

The sourceIdentifier must be unique across all orders to ensure accurate tracking and referencing. For instance, it could be a unique ID associated with an order or checkout on your platform.

#### Shop​Pay​Payment​Request​Session

| Field | Type | Description |
| - | - | - |
| token | String | The unique token for the payment request session. |
| sourceIdentifier | String | A unique identifier for the source of the order. |
| checkoutUrl | String | The URL for the checkout associated with the payment request session. |
| paymentRequest | ShopPayPaymentRequest | The payment request associated with the session. |

#### User​Errors

| Field | Type | Description |
| - | - | - |
| field | String | The field that caused the error. |
| message | String | The error message. |

***

### Example: Shop​Pay​Payment​Request​Session​Submit

Details about the `ShopPayPaymentRequestSessionSubmit` mutation can be found on the dedicated Storefront API [ShopPayPaymentRequestSessionSubmit](https://shopify.dev/docs/api/storefront/latest/mutations/shopPayPaymentRequestSessionSubmit) page.

### Mutation

```graphql
mutation shopPayPaymentRequestSessionSubmit($token: String!, $paymentRequest: ShopPayPaymentRequestInput!, $idempotencyKey: String!, $orderName: String) {
  shopPayPaymentRequestSessionSubmit(token: $token, paymentRequest: $paymentRequest, idempotencyKey: $idempotencyKey, orderName: $orderName) {
    paymentRequestReceipt {
      token
      processingStatusType
    }
    userErrors {
      field
      message
    }
  }
}
```

### Input

```json
{
  "token": "db4eede13822684b13a607823b7ba40d",
  "paymentRequest": {
    …
  },
  "idempotencyKey": "REPLACE_ME_WITH_A_UNIQUE_KEY",
}
```

### Response

```json
{
  "shopPayPaymentRequestSessionSubmit": {
    "paymentRequestReceipt": {
      "token": "a607823b7ba40ddb4eede13822684b13",
      "processingStatusType": "ready"
    },
    "userErrors": []
  }
}
```

#### Arguments

| Field | Type | Description |
| - | - | - |
| token | String! | The unique token for the payment request session. |
| paymentRequest | ShopPayPaymentRequestInput! | The payment request details. |
| idempotencyKey | String! | A unique string (typically a UUID or similar identifier) that must be attached to the submit request to ensure that payment transactions occur only once. For more information, see [idempotent requests](https://shopify.dev/docs/api/usage/idempotent-requests). |
| orderName | String | The name to be assigned to the order that is created from the payment request. |

#### Payment​Request​Receipt

| Field | Type | Description |
| - | - | - |
| token | String | The unique token for the payment request receipt. This will be different than session token. |
| processingStatusType | String | The processing status of the payment request. |
| paymentRequest | ShopPayPaymentRequest | The details of the payment request. |

#### User​Errors

| Field | Type | Description |
| - | - | - |
| field | String | The field that caused the error. |
| message | String | The error message. |

***

---



<a id="pay-javascript-sdk"></a>


## JavaScript SDK

**Note:**

This API is **only available to select merchants and partners** using third-party checkout solutions. For more information, contact [our enterprise sales team](https://www.shopify.com/solutions/shop-pay/enterprise#contact-sales).

Shopify provides **Shop Pay button** and **Shop Pay Login** Web Components that you can add to your store.

Use the following code to load the script into your webpage from the CDN and embed the components.

```javascript
// This script must be placed in the <head> of your site on any pages where Shop Pay components exist.
// In most cases this will be in your checkout, however it may also be included on product and/or cart pages where necessary.
<script src="https://cdn.shopify.com/shopifycloud/shop-js/shop-pay-payment-request.js"></script>


<div id="shop-pay-button-container"></div>
<div id="shop-pay-login-container">
  <input type="email" id="email-input"/>
</div>


<script>
window.ShopPay.PaymentRequest.configure({
  shopId: 1,
  clientId: "[REPLACE-ME]",
  debug: true, // Optional parameter. When set to true, it enables debug mode, which can be useful for development and troubleshooting.
  discountCodeField: false, // Optional parameter. When set to false, the discount code input field is hidden on Shop Pay checkout.
})


window.ShopPay.PaymentRequest
  .createButton().render('#shop-pay-button-container');


window.ShopPay.PaymentRequest
  .createLogin({emailInputId: 'email-input'}).render('#shop-pay-login-container');
</script>
```

***

### `configure` parameters

| **Parameter** | **Type** | **Description** |
| - | - | - |
| `shopId` | Number | A required parameter. This is the ID for the shop. The `shopId` (integer) can be retrieved from the `shop` object in the [Admin API](https://shopify.dev/docs/api/admin-graphql/latest/queries/shop). |
| `clientId` | String | A required parameter. This is the unique identifier for the client. The `clientId` is provided by Shopify. |
| `debug` | Boolean | An optional parameter. When set to `true`, it enables debug mode, which will console log additional information that can be useful for development and troubleshooting. This should be omitted in production environments. |
| `onAnalyticsEvent` | Function | An optional parameter. This is a callback function that will be invoked with specific `Event` objects. This can be useful for monitoring user interactions and gathering data. See below for supported events. |
| `locale` | ShopPayLocale | An optional parameter. Specifies the desired locale for the checkout experience. Expects a valid ISO language code, optionally followed by an ISO country code. Defaults to English (`en`). For a list of supported locales, see the [Supported Locales List](https://shopify.dev/docs/api/commerce-components/pay/localization#supported-locales-list) section. |
| `discountCodeField` | Boolean | An optional parameter. When set to `false`, the discount code input field is hidden on Shop Pay checkout. Defaults to `true`. |

#### Analytics

The following events are currently supported:

* `loginpromptdisplayed`: This event is triggered when the Shop Pay login modal prompt is displayed.

* `windowopened`: This event is triggered when the Shop Pay popup checkout window is opened.

* `windowclosed`: This event is triggered when the Shop Pay popup checkout window is closed.

  Here's an example of how you might handle these events in your `onAnalyticsEvent` callback:

```javascript
<script>
window.ShopPay.PaymentRequest.configure({
  shopId: 1,
  clientId: "[REPLACE-ME]",
  onAnalyticsEvent: (event) => {
    switch (event.type) {
      case 'loginpromptdisplayed':
        console.log('Login prompt was displayed.');
        break;
      case 'windowopened':
        console.log('Window was opened.');
        break;
      case 'windowclosed':
        console.log('Window was closed.');
        break;
      default:
        console.log('Unknown event:', event);
    }
  }
})
</script>
```

***

### Shop Pay Login

#### `createLogin` parameters

| **Parameter** | **Type** | **Description** |
| - | - | - |
| `emailInputId` | String | A required parameter. The unique identifier of the email input element to listen to. This is also used to anchor the login modal to an element. |

***

### Shop Pay button

#### `createButton` parameters

| **Parameter** | **Type** | **Description** |
| - | - | - |
| `buyWith` | Boolean | An optional parameter. If true, displays the "Buy with" variant of the button. Defaults to `false`. |

#### CSS Properties

| **Name** | **Description** | **Constraints** |
| - | - | - |
| `--shop-pay-button-width` | The width of the button. | Default: `262px` Minimum: `120px` Minimum (`buy-with`): `193px` |
| `--shop-pay-button-height` | The height of the button. | Default: `42px` Minimum: `40px` |
| `--shop-pay-button-border-radius` | The border radius of the button. | Default: `4px` |

The following example styles the button with the default height of 42 pixels, a width of 200 pixels, and a border radius of 0 pixels:

```javascript
<style>
shop-pay-payment-request-button {
  --shop-pay-button-width: 200px;
  --shop-pay-button-border-radius: 0px;
}
</style>
```

**Note:**

Upon invoking the `.render` method, the button is optimistically rendered while an HTTP request is dispatched to Shopify to check the availability of Shop Pay in the configured shop. If the Shopify Payments setup is incomplete or Shop Pay is deactivated in the payment settings, the button element is removed from the DOM.

#### Enabling and disabling the Shop Pay button

If you need to disable and re-enable the Shop Pay button for specific user interactions or other conditions in your application, you can use the following methods.

```javascript
// Disable the Shop Pay button
window.ShopPay.PaymentRequest.Buttons.disable();


// Re-enable the Shop Pay button
window.ShopPay.PaymentRequest.Buttons.enable();
```

Example: Disable the Shop Pay button until a valid variant is selected

```javascript
// Disable the payment request button to prevent a customer from opening Shop Pay before a variant is selected
window.ShopPay.PaymentRequest.Buttons.disable();


const addProductToCartButton = document.getElementById('addProductToCartButton');
addProductToCartButton.addEventListener('click', function() {
  // Once the selected valid variant has been successfully processed, re-enable the button
  window.ShopPay.PaymentRequest.Buttons.enable();
});
```

***

---



<a id="pay-localization"></a>


## Localization

**Note:**

This API is **only available to select merchants and partners** using third-party checkout solutions. For more information, contact [our enterprise sales team](https://www.shopify.com/solutions/shop-pay/enterprise#contact-sales).

Localization is a crucial aspect of providing a seamless shopping experience for customers around the globe. The Shop Pay Wallet API supports localization to ensure that customers can interact with the checkout process in their preferred language.

***

### Setting the Locale

To set the locale, include the `locale` parameter when configuring the Shop Pay Payment Request. The `locale` parameter expects a valid ISO language code, with some locales followed by an ISO country code. See the [Supported Locales List](#supported-locales-list) section for the full list.

```javascript
window.ShopPay.PaymentRequest.configure({
  shopId: 1,
  clientId: "[REPLACE-ME]",
  locale: 'fr', // Example: Set locale to French
});
```

**Note:**

If no locale is provided or if the provided locale is invalid, the default locale will be set to English (`en`).

***

### Supported Locales List

The following locales are supported by the Shop Pay Wallet API:

| **Locale Code** | **Language** |
| - | - |
| `cs` | Czech |
| `da` | Danish |
| `de` | German |
| `en` | English (Default) |
| `es` | Spanish |
| `fi` | Finnish |
| `fr` | French |
| `hi` | Hindi |
| `it` | Italian |
| `ja` | Japanese |
| `ko` | Korean |
| `ms` | Malay |
| `nb` | Norwegian Bokmål |
| `nl` | Dutch |
| `pl` | Polish |
| `pt-BR` | Portuguese - Brazil |
| `pt-PT` | Portuguese - Portugal |
| `sv` | Swedish |
| `th` | Thai |
| `tr` | Turkish |
| `zh-CN` | Chinese - Simplified |
| `zh-TW` | Chinese - Traditional |

***

---



<a id="pay-merchant-assigned-ab-testing-guide"></a>


## Shop Pay Wallet Merchant-Assigned A/B Testing Guide

**Note:**

NOTE: This document is **only applicable to select merchants and partners** using 3rd party checkout solutions. For more information, contact [our enterprise sales team](https://www.shopify.com/solutions/shop-pay/enterprise#contact-sales).

***

### Overview

In order to measure the impact of Shop Pay, an A/B test will be performed to validate that the integration is having the intended effect on the key metric of conversion lift. This document aims to provide a framework and guidelines for best practices around A/B testing.

***

### Test Scope

The A/B test is intended to measure the change in conversion rate due to Shop Pay compared to control. The conversion rate funnel is scoped from the first opportunity that a customer can choose Shop Pay, through to a converted order.

With the events defined below, we will also be able to measure some other factors such as average order values and assignment distribution. Together, these various data points will help us understand the impact of Shop Pay, and sort out any discrepancies in results.

***

### Test Architecture

Exclusions and group assignment will be performed by your system, and you will need to instrument the required events to share select relevant data with Shopify. Below defines the key concepts that will help us ensure a successful A/B test.

#### A/A Test

Before we initiate the A/B test, we must first validate the implementation, including exclusion and assignment logic. To do this, we will perform what looks like an A/B test, but treatment will result in no change from control.

The main objectives of the A/A test are to make sure that assignment is evenly distributed between test and control and also to make sure that both groups are converting at the same rate. If we see uneven assignment distribution or if we see different conversion rates for the groups we will know there is a bias happening during assignment. Once both teams are confident that the results are accurate we can transition from A/A to A/B testing.

We should budget *at least 1 week* for the A/A test to confirm results and work through any discrepancies that arise.

#### Javascript Inclusion

In order to perform the testing, Shopify’s JavaScript will need to be included for the duration of the user journey. This means that while our script is typically only needed where the button and email recognition components live, during testing it may need to be included in the “Thank You” / order confirmation page as well.

If you're using an existing test suite, and would prefer to use it instead of Shopify's javascript for measurement, please discuss this with your Shopify onboarding team.

#### Subject Identification

For the scope of these tests, each checkout session should correspond to a unique buyer subject ID, and UUID’s representing browsers are recommended as the ideal subject identifiers.

The UUID should be unique to a buyer’s browser on a given device, and the buyer’s UUID should and can span across multiple storefront sessions. If the buyer were to visit your store with the same browser multiple times, or reloads the page, the same subject ID should be used for those sessions as well.

If your team has any concerns about subject identification, please discuss it with your Shopify contact.

#### Eligibility and Exclusion

It is imperative that your system begins by determining any ineligible checkouts, and excluding them from group assignment. To ensure consistency of data between the merchant system and Shopify, events for ineligible checkouts must be included in the events sent to Shopify, and specified as "`excluded`" for the `assignment_group`.

While Shop Pay supports [many currencies](https://help.shopify.com/en/manual/markets/pricing#supported-currencies), for the purpose of A/A and A/B testing, checkouts in any currency other than the currency(ies) scoped to the test must be excluded from assignment, and Shop Pay should not be surfaced as an option for checkouts in other currencies. The merchant’s system must include events for these excluded checkouts as well, specifying them as "`excluded`" for the `assignment_group`.

Aside from currency excluded checkouts, your system should exclude any traffic that would have a bias in assignment. This should include traffic from forcing the Shop Pay on, but may also include test script/bot traffic from your developers, special customer groups like Business to Business or wholesale if they follow a different checkout path, etc.

Subject exclusion should only be used where necessary so as to avoid the exclusion process from creating bias in the results. Please discuss any exclusion logic you have in place with Shopify as soon as possible.

#### Test Cohorts

**Control:**

The control cohort should be the current experience before Shop Pay is implemented. This control cohort measures the baseline conversion of the merchant shop without Shop Pay and is used to level set the results from the second cohort.

**Treatment:** During the A/A test, the treatment will have no effect other than firing the relevant events, the UX will be the same as the control.

During the A/B test, the treatment will expose users to the Shop Pay components, and *the checkout must include both the Shop Pay button and the email recognition whenever possible*.

Please note that when performing the AB test, the treatment group should only introduce the single change of adding Shop Pay. Any additional UX or feature changes added to the treatment group will invalidate the test results.

#### Events

In order to facilitate this test, you are required to implement up to three events during the testing period, each firing a maximum of once per subject:

* Assignment (required)
  * Assignment must be performed, and this assignment event must be triggered before the checkout payment options are presented to a customer. The assignment group specified in this event for a given `subject_id` must be accurate, remain unchanged once set, and determine if Shop Pay will be included as a payment option for the customer during the testing period.
* Checkout Begin
  * This event should be fired as soon as the subject enters the checkout. It is assumed that the currency of the checkout is known.
* Checkout Complete
  * This event should only execute upon completion of a checkout, and should be fired immediately before or after the customer is redirected to the merchant’s confirmation / thank you page, minimizing the chance for the customer closing the window before the event is recorded.

#### Assignment

It’s important to ensure that assignment is done in a non-biased manner.

Other than for select reasons mentioned above in the **Eligibility and exclusion** section above, customers should be randomly assigned and never specified to be in treatment or control.

Please discuss any exclusions or other special cases with the Shopify team to ensure alignment before the testing begins.

#### Payload - Assignment

Include the following parameters in the assignment event:

* `subjectId`: string (required)
  * The unique identifier for the subject, generally a UUID representing the browser session

* `assignmentGroup`: string (required)

  * Whether the customer was assigned to the `control` or `treatment` group, or alternately `excluded` from the experiment.

  * Valid values:

    * "`control`" - Shop Pay disabled
    * "`treatment`" - Shop Pay enabled
    * "`excluded`" - Not qualified, excluded from assignment

* `shopId`: integer (required)
  * A unique identifier for the merchant’s Shopify store, provided by Shopify.

* `experimentId`: string (required)

  * A unique identifier for the test, provided by Shopify.
  * This should be updated after the A/A test has concluded and before the A/B test has begun

* `timestamp`: string (required)
  * Current timestamp from the client, in ISO 8601 format. (ex. "`2023-11-26T07:58:30.996+0200`")

#### Payload - Checkout

Include the following parameters in the assignment event:

* `subjectId`: string (required)
  * The unique identifier for the subject, generally the browser session ID. The `subject_id` must be assigned to an `assignment_group` through an assignment event before being included in any checkout events.

* `shopId`: integer (required)
  * A unique identifier for the merchant’s Shopify store, provided by Shopify.

* `shopPayToken`: string (optional, default: `null`)
  * Required if the checkout is completed using Shop Pay.

* `action`: string (required)

  * Whether the event was initiated from `checkout-begin` or `checkout-complete`

  * Valid values:

    * “`checkout-begin`” - on the first page that the Shop Pay button appears
    * “`checkout-complete`” - on the thank-you / order confirmation page

* `totalPrice`: string (optional, default: `null`)
  * The total amount of the transaction processed, in the currency of the transaction and inclusive of the standard number of digits after decimal places for any given currency. (ex. USD$10.00 should be "`1000`")

* `currencyCode`: string (optional, default: `null`)
  * The ISO 4217, legacy, or non-standard code representing the [supported currency](https://help.shopify.com/en/manual/markets/pricing/supported-currencies) of the transaction. (ex. "**EUR**")

* `timestamp`: string (required)
  * Current timestamp from the client, in ISO 8601 format. (ex. "`2023-11-26T07:58:30.996+0200`")

#### Sample Code

```javascript
// ## JavaScript SDK for A/A and A/B testing


// Use the `assign` method to provide assignment details.
// Use the `track` method to provide checkout metrics.


// Send the assignment event
window.ShopPay.PaymentRequest.assign({
subjectId: 'unique_session_id',
assignmentGroup: 'control', // or 'treatment' or 'excluded'
shopId: 123456789, //replace this with the Shop ID provided by Shopify
experimentId: '<experiment-id-from-shopify>', // Update between tests
timestamp: new Date().toISOString()
});


// Send the checkout events
window.ShopPay.PaymentRequest.track({
subjectId: 'unique_session_id',
shopId: 1234,
shopPayToken: '<shop-pay-payment-request-session-token>',
action: 'checkout-begin', // or 'checkout-complete'
totalPrice: "10000", // The total price of the order in cents
currencyCode: "USD",
timestamp: new Date().toISOString()
});
```

***

### Additional Resources

[Shop Pay Wallet API\
\
](https://shopify.dev/docs/api/commerce-components/pay)

[API documentation for Shop Pay Wallet.](https://shopify.dev/docs/api/commerce-components/pay)

[Development Journey and Key Considerations\
\
](https://shopify.dev/docs/api/commerce-components/pay/development-journey)

[A guide to assist with the development journey and key considerations for Shop Pay Wallet.](https://shopify.dev/docs/api/commerce-components/pay/development-journey)

[UX Guidelines\
\
](https://shopify.dev/docs/api/commerce-components/pay/design-guidelines)

[UX documentation for Shop Pay Wallet.](https://shopify.dev/docs/api/commerce-components/pay/design-guidelines)

[Shop Configuration Guide\
\
](https://shopify.dev/docs/api/commerce-components/pay/shop-configuration)

[New shop configuration guide for Shop Pay Wallet.](https://shopify.dev/docs/api/commerce-components/pay/shop-configuration)

[Troubleshooting Guide\
\
](https://shopify.dev/docs/api/commerce-components/pay/troubleshooting-guide)

[A guide to assist with troubleshooting Shop Pay Wallet implementations.](https://shopify.dev/docs/api/commerce-components/pay/troubleshooting-guide)

[Shop Pay Installments activation\
\
](https://help.shopify.com/en/manual/payments/shop-pay-installments/activating-shop-pay-installments)

[A guide to activating Shop Pay Installments.](https://help.shopify.com/en/manual/payments/shop-pay-installments/activating-shop-pay-installments)

***

---



<a id="pay-monitoring"></a>


## Monitoring and resiliency

**Note:**

This API is **only available to select merchants and partners** using third-party checkout solutions. For more information, contact [our enterprise sales team](https://www.shopify.com/solutions/shop-pay/enterprise#contact-sales).

It's highly recommended to instrument your integration with sufficient logging to gain insights into any errors thrown by your system. At a minimum, failure paths in your event handlers should all be considered, and notifications should alert your team of issues as needed.

Shopify provides webhook subscriptions and APIs enabling multiple ways for you to monitor activity in your shop. The below guidelines are applicable to Shop Pay Wallet.

***

### Webhook Configuration

At a minimum, you should be to setting up the following webhooks:

| Webhook Topic | Description |
| - | - |
| `ORDERS_CREATE` | A webhook is sent every time an order is created. |
| `ORDER_TRANSACTIONS_CREATE` | A webhook is sent every time an order transaction is created. |
| `DISPUTES_CREATE` | A webhook is sent every time a dispute is created. This requires the `read_shopify_payments_disputes` scope on your custom app. |
| `DISPUTES_UPDATE` | A webhook is sent every time a dispute is updated. This requires the `read_shopify_payments_disputes` scope on your custom app. |

It's important to note that webhook delivery may be delayed, and must therefore never be depended on for real-time critical workflows such as completing a customer checkout.

To learn more, see [the webhook best practices guide](https://shopify.dev/docs/apps/webhooks/best-practices), and our webhook topic resources for [GraphQL](https://shopify.dev/docs/api/admin-graphql/latest/enums/WebhookSubscriptionTopic) and [REST](https://shopify.dev/docs/api/admin-rest/latest/resources/webhook#event-topics) APIs.

***

### Creating a Webhook Subscription

Example of creating new webhook subscription for the topic "ORDERS\_CREATE" using the `webhookSubscriptionCreate` mutation:

### Mutation

```graphql
mutation webhookSubscriptionCreate($topic: WebhookSubscriptionTopic!, $webhookSubscription: WebhookSubscriptionInput!) {
  webhookSubscriptionCreate(topic: $topic, webhookSubscription: $webhookSubscription) {
    webhookSubscription {
      id
      topic
      format
      uri
    }
    userErrors {
      field
      message
    }
  }
}
```

### Input

```json
{
  "topic": "ORDERS_CREATE",
  "webhookSubscription": {
    "uri": "https://yoursite.com/webhooks/orders_create",
    "format": "JSON"
  }
}
```

### Response

```json
{
  "webhookSubscriptionCreate": {
    "webhookSubscription": {
      "id": "gid://shopify/WebhookSubscription/1",
      "topic": "ORDERS_CREATE",
      "format": "JSON",
      "uri": "https://yoursite.com/webhooks/orders_create"
    },
    "userErrors": []
  }
}
```

***

### Handling Disputes

A dispute, also known as a chargeback or inquiry, occurs when a customer questions the legitimacy of a charge with their financial institution.

To effectively manage disputes, you must either subscribe to the appropriate webhook topics and [use the Shopify Admin API as necessary](https://shopify.dev/changelog/read-and-write-disputes-and-dispute-evidence-in-the-graphql-and-rest-admin-api), or manage the disputes through the Shopify admin.

When a dispute is filed, you're able to provide additional information to support the legitimacy of the charge before the time limit. In any case, Shopify will ensure that evidence is submitted on your behalf, whether you take action or not.

Orders may also be eligible for [Shopify Protect](https://help.shopify.com/en/manual/payments/shop-pay/shopify-protect), in which case Shopify will reimburse you for the disputed amount and chargeback fee if it is lost.

For more information on dispute management, see the [Shopify Payments Disputes Documentation](https://help.shopify.com/en/manual/payments/shopify-payments/chargebacks).

***

### Order Risks

Orders in Shopify will undergo a risk assessment after order creation. You can either [query the OrderRiskSummary](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderRiskSummary), or you can subscribe to the `ORDERS_RISK_ASSESSMENT_CHANGED` webhook. Orders can trigger automation events using [Shopify Flow](https://apps.shopify.com/flow) – see the [flow reference risk examples](https://help.shopify.com/en/manual/shopify-flow/reference/examples#risk) for details.

***

### Recovering from errors

Although an order created event will be fired client-side when an order is completed, it's possible that a customer may close the window before the event is dispatched. In order to reconcile in such cases it is recommended to have a reconciliation job running on a schedule.

***

### Reconciliation job

While webhook deliveries are recommended as the primary method for Shopify to trigger actions in your system, reconciliation jobs should always be implemented as well, as they serve multiple purposes:

* In case the Shop Pay window is closed before the `paymentcomplete` event is dispatched
* As a backup to webhooks, since webhooks may fail to be processed
* To retrieve data which may not otherwise be available via webhook subscription

#### Retrieving order data using the source identifier

You can find [shopPayPaymentRequestReceipts](https://shopify.dev/docs/api/admin-graphql/latest/queries/shopPayPaymentRequestReceipts) by their `source_identifier` (provided on `ShopPayRequestSessionCreate` mutation), which should correspond to the order in your system. For example, if the source identifier provided by your system for a given order was `your-source-id-1`, then you could issue a GraphQL request like below:

```graphql
{
shopPayPaymentRequestReceipts(first:10, query: "source_identifier:'your-source-id-1'") {
  nodes {
    token
    sourceIdentifier
    processingStatus {
      state
      message
      errorCode
    }
    order {
      id
      sourceIdentifier
      transactions(first: 10) {
        id
        kind
        errorCode
      }
      fulfillmentOrders(first: 10) {
        nodes {
          id
        }
      }
    }
    paymentRequest {
      total {
        amount
        currencyCode
      }
    }
  }
}
}
```

Note that while the above example request could result in multiple matching receipts, there will only be one corresponding order for a successfully completed receipt. The order may have multiple transactions (including failed payment attempts), fulfillmentOrders and lineItems.

Because of this, your system must filter the results received. For example with transactions you would filter by `kind: "authorization"` and `status: "success"` to identify the transaction authorization ID needed when capturing payment.

It's recommended to modify this example query to only retrieve the data required by your system, and introduce [pagination](https://shopify.dev/docs/api/usage/pagination-graphql) where necessary.

#### Retrieving order data using the receipt token

Alternatively, order data can be retrieved using the `shopPayPaymentRequestReceipt` query. The receipt token is returned from the [`ShopPayPaymentRequestSessionSubmit`](https://shopify.dev/docs/api/commerce-components/pay/graphql-pre-payment#example-shoppaypaymentrequestsessionsubmit) mutation. This query can be used to find the status of the payment request receipt. The status can be `processing`, `completed`, `action_required` (for example, if the customer needs to complete a 3DS authentication. This is automatically handled by Shop Pay popup), or `failed`. The `processingStatus` `message` and `errorCode` can be used to provide more information about the status for failed receipts.

```graphql
query {
shopPayPaymentRequestReceipt(token: "<token>") {
  token
  sourceIdentifier
  processingStatus {
    state
    message
    errorCode
  }
  order {
    id
    sourceIdentifier
    transactions(first: 10) {
      id
      kind
      errorCode
    }
    fulfillmentOrders(first: 10) {
      nodes {
        id
      }
    }
  }
  paymentRequest {
    total {
      amount
      currencyCode
    }
  }
}
}
```

***

---



<a id="pay-sessions-and-events"></a>


## Sessions and events

**Note:**

This API is **only available to select merchants and partners** using third-party checkout solutions. For more information, contact [our enterprise sales team](https://www.shopify.com/solutions/shop-pay/enterprise#contact-sales).

Learn how to create payment request sessions, attach event listeners, and handle the payment lifecycle with the Shop Pay Wallet API.

***

### Configure the API

Use the `shopId` and `clientId` from your onboarding email to configure the API. For the full list of options, see [`configure` parameters](https://shopify.dev/docs/api/commerce-components/pay/javascript-sdk#configure-parameters).

```javascript
window.ShopPay.PaymentRequest.configure({
  shopId: 1,
  clientId: "[REPLACE-ME]",
});
```

***

### Create a session

Create a session to make a payment request. `shop_id` (`integer`) can be retrieved from the `shop` object in the [Admin API](https://shopify.dev/docs/api/admin-graphql/latest/queries/shop).

[PaymentRequest fields are defined here.](https://shopify.dev/docs/api/commerce-components/pay/frontend-api-reference#shoppaypaymentrequest)

```javascript
const initialPaymentRequest = window.ShopPay.PaymentRequest.build({
  lineItems: [
    {
      label: "T-Shirt",
      originalItemPrice: {
        amount: 10.00,
        currencyCode: "USD"
      },
      itemDiscounts: [
        {
          label: "10% off",
          amount: {
            amount: 1.00,
            currencyCode: "USD"
          }
        }
      ],
      finalItemPrice: {
        amount: 9.00,
        currencyCode: "USD"
      },
      quantity: 2,
      sku: "t-shirt",
      requiresShipping: true,
      originalLinePrice: {
        amount: 20.00,
        currencyCode: "USD"
      },
      lineDiscounts: [
        {
          label: "10% off",
          amount: {
            amount: 2.00,
            currencyCode: "USD"
          }
        }
      ],
      finalLinePrice: {
        amount: 18.00,
        currencyCode: "USD"
      },
    }
  ],
  discountCodes: [],
  deliveryMethods: [],
  subtotal: {
    amount: 18.00,
    currencyCode: "USD"
  },
  totalTax: {
    amount: 1.25,
    currencyCode: "USD"
  },
  total: {
    amount: 19.25,
    currencyCode: "USD"
  },
  presentmentCurrency: "USD",
  locale: 'en',
});


const session = window.ShopPay.PaymentRequest.createSession({
  paymentRequest: initialPaymentRequest
});
```

***

### Attach event listeners

Use [`ShopPayPaymentRequestSessionCreate`](https://shopify.dev/docs/api/commerce-components/pay/graphql-pre-payment#example-shoppaypaymentrequestsessioncreate) on your server to create a session.

```javascript
session.addEventListener("sessionrequested", (ev) => {
  // Shop Pay Payment Request Session on your server
  const response = fetch('/replace_with_your_endpoint', {
    method: 'POST',
    body: JSON.stringify({
      payment_request: initialPaymentRequest
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(response => response.json()).then(data => {
    const {token, checkoutUrl, sourceIdentifier} = data;
    // optionally update the payment request if it has changed since it was created
    const updatedPaymentRequest = window.ShopPay.PaymentRequest.build({YOUR_UPDATED_PAYMENT_REQUEST});
    session.completeSessionRequest({token, checkoutUrl, sourceIdentifier, updatedPaymentRequest});
  });
});
```

Listen to events that may change calculations such as when a delivery method type, shipping address, delivery method, pickup location, pickup location filter, or discount code changes. Recalculate the payment request and update the session.

```javascript
session.addEventListener("deliverymethodtypechanged", async (ev) => {
  const currentPaymentRequest = session.paymentRequest;
  const deliveryMethodType = ev.deliveryMethodType;


  let pickupLocations = [];
  if (deliveryMethodType === 'PICKUP') {
    pickupLocations = await fetchPickupLocations();
  }


  // Update the payment request based on the delivery method type change
  const updatedPaymentRequest = window.ShopPay.PaymentRequest.build({
    ...currentPaymentRequest,
    pickupLocations,
  });


  session.completeDeliveryMethodTypeChange({ updatedPaymentRequest: updatedPaymentRequest });
});
```

```javascript
session.addEventListener("shippingaddresschanged", async (ev) => {
  const currentPaymentRequest = session.paymentRequest;
  const selectedAddress = ev.shippingAddress;


  // Update the payment request based on the shipping address change
  const updatedPaymentRequest = window.ShopPay.PaymentRequest.build({
    ...currentPaymentRequest,
    deliveryMethods: [
      {
        label: "Standard",
        amount: {
          amount: 10.00,
          currencyCode: "USD"
        },
        code: "STANDARD",
        minDeliveryDate: '2024-01-01',
        maxDeliveryDate: '2027-01-01',
      },
      {
        label: "Express",
        amount: {
          amount: 20.00,
          currencyCode: "USD"
        },
        code: "EXPRESS",
        minDeliveryDate: '2024-01-01',
        maxDeliveryDate: '2026-01-01',
      }
    ]
  });


  session.completeShippingAddressChange({ updatedPaymentRequest: updatedPaymentRequest });
});
```

```javascript
session.addEventListener("deliverymethodchanged", async (ev) => {
  const currentPaymentRequest = session.paymentRequest;
  const selectedDeliveryMethod = ev.deliveryMethod;


  let updatedRequestValues;


  if (selectedDeliveryMethod) {
    updatedRequestValues = {shippingLines: [{
      label: selectedDeliveryMethod.label,
      amount: selectedDeliveryMethod.amount,
      code: selectedDeliveryMethod.code
    }],
    totalShippingPrice: {
      finalTotal: {
        amount: selectedDeliveryMethod.amount.amount,
        currencyCode: "USD",
      },
    },
    total: {
      amount: 20 + selectedDeliveryMethod.amount.amount,
      currencyCode: "USD"
    }}
  } else {
    updatedRequestValues= {total: {
      amount: 20,
      currencyCode: "USD"
    }}
  }


  // Update the payment request based on the delivery method change
  // and update the totals accordingly
  const updatedPaymentRequest = window.ShopPay.PaymentRequest.build({
    ...currentPaymentRequest,
    ...updatedRequestValues,
  });


  session.completeDeliveryMethodChange({ updatedPaymentRequest: updatedPaymentRequest });
});
```

```javascript
session.addEventListener("pickuplocationchanged", async (ev) => {
  const currentPaymentRequest = session.paymentRequest;
  const pickupLocation = ev.pickupLocation;


  // Update the payment request based on the pickup location change
  // and update the totals accordingly
  const updatedPaymentRequest = window.ShopPay.PaymentRequest.build({
    ...currentPaymentRequest,
    totalShippingPrice: {
      finalTotal: {
        amount: pickupLocation.amount.amount,
        currencyCode: "USD",
      },
    },
    total: {
      amount: 20 + pickupLocation.amount.amount,
      currencyCode: "USD"
    },
  });


  session.completePickupLocationChange({ updatedPaymentRequest: updatedPaymentRequest });
});
```

```javascript
session.addEventListener("pickuplocationfilterchanged", async (ev) => {
  const currentPaymentRequest = session.paymentRequest;
  const buyerLocation = ev.buyerLocation;


  // Update the payment request based on the pickup location filter change
  // by filtering the available pickup locations based on a customer's location
  const updatedPaymentRequest = window.ShopPay.PaymentRequest.build({
    ...currentPaymentRequest,
    pickupLocations: [{
      label: "620 King Street West",
      code: "PICK_UP-KING-STREET-WEST",
      detail: "620 King Street West, Toronto, ON",
      amount: {
        amount: 10.00,
        currencyCode: "USD"
      },
      readyExpectationLabel: "Ready in 1 hour",
      proximityLabel: "Less than 1 km away",
    }]
  });


  session.completePickupLocationFilterChange({ updatedPaymentRequest: updatedPaymentRequest });
});
```

```javascript
session.addEventListener("discountcodechanged", async (ev) => {
  const currentPaymentRequest = session.paymentRequest;
  const selectedDiscountCodes = ev.discountCodes; // Array of discount codes ["example-code-1"]


  // Update the payment request based on the discount code change
  // Let's assume the discount code is valid and the discount is 15% off
  const updatedPaymentRequest = window.ShopPay.PaymentRequest.build({
    ...currentPaymentRequest,
    discountCodes: selectedDiscountCodes,
    lineItems: [
      {
        label: "T-Shirt",
        finalItemPrice: {
          amount: 10.00,
          currencyCode: "USD"
        },
        quantity: 2,
        sku: "t-shirt",
        requiresShipping: true,
        finalLinePrice: {
          amount: 20.00,
          currencyCode: "USD"
        },
      }
    ],
    subtotal: {
      amount: 20.00,
      currencyCode: "USD"
    },
    discounts: [
      {
        label: "example-code-1",
        amount: {
          amount: 3.00, // Discounts must be passed to Shopify as a positive value
          currencyCode: "USD"
        }
      }
    ],
    totalTax: {
      amount: 1.06,
      currencyCode: "USD"
    },
    total: {
      amount: 18.06,
      currencyCode: "USD"
    }
  });


  session.completeDiscountCodeChange({ updatedPaymentRequest: updatedPaymentRequest });
});
```

Confirm the payment once the user clicks the *Pay now* button in the Shop Pay popup.

The server confirmation must invoke the `ShopPayPaymentRequestSessionSubmit` mutation to confirm that the payment is to be processed. Use [`ShopPayPaymentRequestSessionSubmit`](https://shopify.dev/docs/api/commerce-components/pay/graphql-pre-payment#example-shoppaypaymentrequestsessionsubmit) on your server to submit the session.

```javascript
session.addEventListener("paymentconfirmationrequested", async (ev) => {
  // The customer's billing address contains relevant contact details such as email & phone number (if available)
  const billingAddress = ev.billingAddress;


  // Before submitting the payment request for processing, a final check should be done on your server
  // to make sure the payment request (total price, inventory available, etc.) is still valid.
  const response = fetch('/replace_with_your_endpoint', {
    method: 'POST',
    body: JSON.stringify({
      token: session.token,
      payment_request: session.paymentRequest
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(response => response.json()).then(data => {
    if (data.errors) {
      // Handle errors here.
      // For example: if an item is no longer in stock, you can send a new paymentRequest without that lineItem by building a new payment request and including it in completePaymentConfirmationRequest along with the errors.
      session.completePaymentConfirmationRequest({
        errors: [
          {
            "type": "generalError",
            "message": "Something went wrong. Please try again."
          }
          // Optionally build an updated paymentRequest and include it here
        ]
      })
    } else {
      // confirm the payment request is processing
      session.completePaymentConfirmationRequest();
    }
  });
});
```

This event is dispatched when the payment is complete. Close the Shop Pay popup and redirect the user to the order confirmation page.

```javascript
session.addEventListener("paymentcomplete", async (ev) => {
  console.log(ev.processingStatus.status);


  session.close(); // close the Shop Pay popup
  window.location.href = "/thank-you";
});
```

This event is dispatched when a payment attempt fails. The event contains information about why the payment failed.

```javascript
session.addEventListener("paymentattemptfailed", async (ev) => {
  const { reason, errorCode } = ev.error;
  console.log(`Payment attempt failed: ${reason}`);
  console.log(`Error code: ${errorCode}`);
});
```

This event is dispatched when the checkout window is closed.

```javascript
session.addEventListener("windowclosed", async () => {
  // handle window closed event
});
```

**Warning:**

Only call the corresponding complete call once for each event.

***

---



<a id="pay-shop-configuration"></a>


## Shop Pay Wallet Shop Configuration Guide

**Note:**

NOTE: This document is **only applicable to select merchants and partners** using 3rd party checkout solutions. For more information, contact [our enterprise sales team](https://www.shopify.com/solutions/shop-pay/enterprise#contact-sales).

***

### Overview

This document details the configuration applicable for use of Shop Pay Wallet.

At a high level, there are a few things to keep in mind when adopting this component:

* A Shopify store is required as a conduit for certain actions, including granting API access keys, configuration and processing of payments through Shopify Payments, and interactions with Shop.

* The modifications to your existing checkout workflows are:

  * Augmenting your checkout email entry with automatic email recognition.
  * The customer completes an order in the Shop Pay Checkout pop-up.
  * Your system validates the order before finalizing the transaction with Shopify.
  * When orders are fulfilled, your system must update fulfillment information in Shopify which enables customers to track their packages in the Shop app.

***

### Getting Started with Shopify

If you don't yet have a Shop Pay Wallet development shop, you can reach out to your Shopify onboarding team for a link to create one.

Once you've logged into your shop, you'll see the Shopify Admin. If you're already familiar with Shopify, you'll notice that this plan has a refined UI, including only the features and settings that are relevant to Shop Pay Wallet. It's recommended to familiarize yourself and your team with the features and settings that are available to you.

***

### Shopify Admin

#### Settings

Refer to the settings area of the Shopify admin to fully configure the following sections marked with 🟢.

Review the information available to you in the sections marked with 🟡.

**Note:**

Note: Some of these settings will require elevated permissions, so it's recommended to have the account owner for your shop available to grant permissions where needed, and to configure those sections available only to the account owner.

Organization settings:

* 🟢 Organization: Configure your organization name and manage the stores in your organization

* 🟢 Users: Delegate permissions to staff through roles and groups, and configure security settings for your organization

* 🟢 Billing: Configure a payment method and billing profile for your organization

  Store settings:

* 🟢 General: Essential configurations that will impact your use of Shopify

* 🟡 Plan: Information about your Shopify plan

* 🟢 Payments: Required configuration for Shopify Payments and payment capture settings

* 🟢 Apps and sales channels: Configure your custom app used to communicate with Shopify

* 🟢 Brand: Upload logos for your shop, which is used in the Shop Pay experience. Details below.

* 🟢 Policies: Configure your store's policies, which are viewable by customers in the Shop Pay Wallet checkout

##### Payments

Shop Pay Wallet processes payments using Shop Pay via Shopify Payments.

You will need to onboard and configure Shopify Payments sufficiently to be enabled in test mode for your development shop(s), and for your production shop, the account owner will need to complete the onboarding process. This will require verification of information about your business to fully activate Shopify Payments and enable payouts. Follow [these instructions](https://help.shopify.com/en/manual/payments/shopify-payments/setting-up-shopify-payments) to complete the setup.

Credit card rates vary by plan, and may require manual configuration by Shopify. Please contact your Shopify onboarding team with any questions about the rates listed in your shop(s).

**Note:**

You're able to test your Shop Pay Wallet integration without completing the Shopify Payments configuration, as long as your Shopify Payments account is in test mode, and the Shop Pay Wallet session is initialized with the `debug` parameter set to `true`. See [the `configure` parameters](https://shopify.dev/docs/api/commerce-components/pay/javascript-sdk#configure-parameters) for details.

##### Apps and Sales Channels

A Custom App is an essential component of the Shop Pay Wallet configuration, acting as a conduit between Shopify and your existing platform. By default, the Shop Pay Wallet plan will have a Custom App pre-configured with the essential Storefront API permissions required for use of Shop Pay Wallet.

Depending on your system architecture, you may need to create one or more additional custom apps to support your Order Management System (OMS) or other systems. Each app should be configured with only the required scopes for the functionality you're implementing.

To create a new custom app, follow these steps:

* Go to Settings ▶️ Apps and sales channels ▶️ Develop apps ▶️ Create an app

* Enter an app name and click Create app

* Click Configure Admin API scopes

* Select the scopes required by this app and click Save

* Click Install app ▶️ Install

* Copy the Admin API access token and store it securely

* Configure your app to use the access token in your implementation

  For details on Shopify custom app scopes, see [access scopes](https://shopify.dev/docs/api/usage/access-scopes).

  For clarity, while most public apps from the [Shopify App Store](https://apps.shopify.com/), have not been validated for use with Shop Pay Wallet, some apps may still function as expected. At your discretion, you may work with a Shopify app developer to validate the functionality of their app on the Shop Pay Wallet plan, for your use.

##### Brand

To enable your branding to appear in the Shop Pay Checkout header, you’ll need to configure it in your shop settings. Navigate to Settings ➡️ General, then click on the `Manage` button in the Brand assets section, and complete the configuration.

To enable your logo and support contact information to appear in the Shop App, you'll need to upload a logo in the Brand in Shop App section of the Shopify admin. Navigate to Shop ➡️ Brand in Shop App, then click Edit details

##### Notifications

Shopify doesn’t send notifications for orders created through Shop Pay Wallet, however based on a customer’s preferences in their Shop account, customers typically expect fulfillment notifications from the Shop app, and these are dependent on your system updating fulfillment information in Shopify as fulfillment actions are performed.

#### The Shop Sales Channel

The Shop channel should be visible in the navigation of your Shopify Admin. If it's not, you can use the store search bar at the top to find it, and it can then be pinned to your navigation.

The homepage of the Shop channel will contain information and configurations that your developers will need to enable Shop Pay Wallet in your checkout:

* Domains allow list

  * Add all domains where the JavaScript SDK will be loaded from

* Your Shopify Shop ID

* Your Shop Pay Client ID

  You should also edit the Shop brand settings, and populate as much as possible to avoid default contact information from being used when customers navigate to your shop in the Shop app.

***

### Support

If you have any questions about the configuration of your shop, contact your Shopify onboarding team, or reach out to Shopify Support. Below are resources you may find helpful:

* [Shopify Help Center](https://help.shopify.com) - Powered by a virtual help center assistant trained on our merchant documentation, you can quickly find information on Shopify features.

* 24/7 Shopify Plus Support - Available to staff members with an account within your Shopify organization:

  * For chat support, click on your shop name in the top right corner of the Shopify Admin
  * Click on `Contact Shopify Plus Support`
  * Follow the prompts for Live Chat or email support.
  * For phone support, generate a pin at [pin.shopify.com](https://pin.shopify.com) and call 1-877-255-1225.

* Shop Support - For customer feedback or technical issues with the Shop app:

  * [Shop.app help documentation](https://help.shop.app)
  * [Shop.app contact information](https://shop.app/help/shop-app-help-contact)

***

### Additional Resources

[Shop Pay Wallet API\
\
](https://shopify.dev/docs/api/commerce-components/pay)

[API documentation for Shop Pay Wallet.](https://shopify.dev/docs/api/commerce-components/pay)

[Development Journey and Key Considerations\
\
](https://shopify.dev/docs/api/commerce-components/pay/development-journey)

[A guide to assist with the development journey and key considerations for Shop Pay Wallet.](https://shopify.dev/docs/api/commerce-components/pay/development-journey)

[UX Guidelines\
\
](https://shopify.dev/docs/api/commerce-components/pay/design-guidelines)

[UX documentation for Shop Pay Wallet.](https://shopify.dev/docs/api/commerce-components/pay/design-guidelines)

[Troubleshooting Guide\
\
](https://shopify.dev/docs/api/commerce-components/pay/troubleshooting-guide)

[A guide to assist with troubleshooting Shop Pay Wallet implementations.](https://shopify.dev/docs/api/commerce-components/pay/troubleshooting-guide)

[Merchant-Assigned A/B Testing Guide\
\
](https://shopify.dev/docs/api/commerce-components/pay/merchant-assigned-ab-testing-guide)

[A guide to assist with performing A/B testing for Shop Pay Wallet.](https://shopify.dev/docs/api/commerce-components/pay/merchant-assigned-ab-testing-guide)

[Shop Pay Installments activation\
\
](https://help.shopify.com/en/manual/payments/shop-pay-installments/activating-shop-pay-installments)

[A guide to activating Shop Pay Installments.](https://help.shopify.com/en/manual/payments/shop-pay-installments/activating-shop-pay-installments)

***

---



<a id="pay-troubleshooting-guide"></a>


## Shop Pay Wallet - Troubleshooting Guide

**Note:**

NOTE: This document is **only applicable to select merchants and partners** using 3rd party checkout solutions. For more information, contact [our enterprise sales team](https://www.shopify.com/solutions/shop-pay/enterprise#contact-sales).

***

### Overview

This guide provides a method for troubleshooting a Shop Pay Wallet implementation.

***

### Understanding Shop Pay Wallet

* During checkout, your system is canonical for:

  * Products & Inventory
  * Shipping methods and rates
  * Pickup locations and rates
  * Discounts, rewards and promotions
  * The cart

* Shopify is canonical for:

  * Customer addresses

  * Payment information

    * Full details never given to merchant
    * Last 4 digits and brand of card returned on successful authorization, during the checkout process

  * Transactions

* Tracking & notifications:

  * Once your system has updated the tracking information within Shopify, the Shop app will send push notifications to customers according to their preferences, and allow them to track their packages within the Shop app
  * Your system is responsible for sending any order-related email notifications to customers
  * Shopify will not send email notifications to customers for orders created through Shop Pay

* Both Shopify and your existing e-commerce system will have records of any orders placed through Shop Pay

  * The Shopify order allows you to manage the transaction (captures, voids, refunds, etc.) and fulfillment (providing tracking details which are essential for the Shop app experience) via Shopify’s APIs and/or the Shopify admin
  * The order created in your e-commerce system is still required for your own purposes, such as inventory reservation, and coordination with your Order Management System (OMS).

***

### Shop Pay Wallet Workflow

The Shop Pay Checkout workflow can be divided into two major sections:

1. Pre-payment (checkout)

* This includes everything from first exposure to Shop Pay, including everything until order creation
* The session is created with the `ShopPayPaymentRequestSessionCreate` mutation via the Shopify Storefront API
* The transaction is completed with the `ShopPayPaymentRequestSessionSubmit` mutation via the Shopify Storefront API
* Information is passed between Shopify and your e-commerce platform via events in the frontend

1. Post-payment

* This includes everything after order creation, and includes order management actions such as captures, refunds, and updates to fulfillment information
* All actions taken after order creation are made through Shopify's Admin API

***

### Checkout Overview

* Customer clicks the Shop Pay button or enters a recognized email
* Customer authenticates with Shop

- Your backend system [builds the initial payment request](https://shopify.dev/docs/api/commerce-components/pay/sessions-and-events#create-a-session) using data [for which it is the canonical source](https://shopify.dev/docs/api/commerce-components/pay#your-system-is-the-main-source-of-truth)

- Your backend system initializes the Shop Pay session via the Shopify Storefront API

- The main Shop Pay user action loop:

  * User takes a supported action within the Shop Pay popup:

    * Shipping address selection
    * Shipping type selection (Shipping vs Pickup)
    * Shipping method or pickup location selection
    * Entering or removing a discount code
    * Paying with a vaulted payment method

  * Shop Pay popup emits the relevant event to your frontend, including the latest payment request details

  * Your frontend makes a call to your backend system with the relevant information

  * Your backend system validates the changes and determines the result of those changes

  * Your backend system returns the details to the frontend in the call response

  * Your frontend rebuilds the payment request as necessary, and passes it back to Shopify via the corresponding event completion call

- Once “Pay now” is clicked, we include the encrypted `payment_method` token with the payment request passed to your frontend

- Your backend system validates the payment request, then reserves inventory and optionally generates an order name, typically by creating an order in your ecommerce system

- Your backend system submits the payment request via the Shopify Storefront API

- If an authorization is not successful, the user can take additional actions within the Shop Pay popup, including attempting payment again

- When the authorization is successful, Shopify creates the order asynchronously and sends the `paymentcomplete` event to your frontend

  * Your system can also query the order by `source_identifier`, or receive the `ORDERS_CREATE` webhook to reconcile the order and confirm a successful authorization

  It is crucial that your system responds to each event *within 15 seconds* by making the corresponding complete call to avoid a timeout. Additionally, ensure your system responds to each event just once. Your system should also be prepared to handle any event in any order until a successful payment is confirmed.

***

### Troubleshooting the Checkout Process

Your system will [configure](https://shopify.dev/docs/api/commerce-components/pay/javascript-sdk#configure-parameters) the Shop Pay session on the frontend, and there you’re able to specify a debug parameter which will enable verbose logging in the browser console.

```javascript
window.ShopPay.PaymentRequest.configure({
shopId: 1,
clientId: "[REPLACE-ME]",
debug: true
})
```

Open the console to see the events being emitted from the Shop Pay Checkout popup, and the responses being returned by your frontend:

```json
[Shop Pay Payment Request] Dispatching sessionrequested event
[Shop Pay Payment Request] Waiting on completeSessionRequest() callback
[Shop Pay Payment Request] Dispatching deliverymethodtypechanged event with: {deliveryMethodType: 'SHIPPING'}
[Shop Pay Payment Request] Waiting on completeDeliveryMethodTypeChange() callback
```

This console logging is useful to troubleshoot the flow of data between your system and the Shop Pay Checkout, as it will show you the payment request data from both the events originating from the Shop Pay Checkout popup, as well as the responses sent back to Shop Pay from your frontend.

Debug logging is intended for use in development environments only; remove it or set it to false in your production environment.

***

### Working with Shopify APIs

Your developers will be integrating with [Shopify’s Storefront API](https://shopify.dev/docs/api/storefront) for the checkout process, as well as the [Shopify Admin API](https://shopify.dev/docs/api/admin-graphql) for post-order actions such as captures, order reconciliation, and updating fulfillment/tracking information in Shopify. For more information on GraphQL, see [About GraphQL](https://shopify.dev/docs/apps/build/graphql).

***

### The Storefront API

During the checkout process, there are two Storefront API calls required to be made: **ShopPayPaymentRequestSessionCreate** when creating a Shop Pay session, and **ShopPayPaymentRequestSessionSubmit** for each attempted transaction. Note that these calls use different API endpoints and keys than those for post-order actions with Shopify’s Admin API.

#### Shop​Pay​Payment​Request​Session​Create

The most common issues with the **ShopPayPaymentRequestSessionCreate** mutation will stem from values not being correctly passed between the frontend and the backend servers, so the above troubleshooting steps for the checkout process are applicable. Assuming this is working as intended, and it’s the API call itself failing, Shopify should return an error message, so ensure that this is logged for any failure scenarios.

The **ShopPayPaymentRequestSessionCreate** can be safely retried, so automatic recovery should be possible if the first attempt fails for some reason.

#### Shop​Pay​Payment​Request​Session​Submit

When processing payment attempts via **ShopPayPaymentRequestSessionSubmit** there are various errors that may surface related to validating the input. A few examples of why it might fail would be:

* Not including any line items in the payment request

* Not including any of the required parameters

* Including negative values where positive values are expected in the payment request

* Including objects within the payment request that aren’t a part of the [ShopPayPaymentRequestInput](https://shopify.dev/docs/api/storefront/latest/input-objects/ShopPayPaymentRequestInput)

  * The [ShopPayPaymentRequestInput](https://shopify.dev/docs/api/storefront/latest/input-objects/ShopPayPaymentRequestInput) looks similar to, but is distinctly different than the [payment request object](https://shopify.dev/docs/api/commerce-components/pay/frontend-api-reference#shoppaypaymentrequest) that’s passed in the frontend

  Similar to the **ShopPayPaymentRequestSessionCreate** mutation, it’s safe to retry the **ShopPayPaymentRequestSessionSubmit** mutation if necessary, however you must ensure that the [payload](https://shopify.dev/docs/api/commerce-components/pay/graphql-pre-payment#arguments), including the idempotency key, is exactly the same for retries stemming from a single payment attempt by the customer. This will ensure that if Shopify did already process the payment, then the resubmission by your system will not result in a duplicate payment.

***

### The Admin API

The Admin API lets you build apps and integrations that extend and enhance the Shopify admin. While the Shop Pay Wallet Storefront API mutations are only applicable to merchants with 3rd party e-commerce platforms, all Shopify merchants utilize the Admin APIs. Because of this, you may be able to find the answers to your questions by searching [our developer forums](https://community.shopify.dev/).

For merchants using Shop Pay Wallet, typically the Admin API functions will be handled by an Order Management System (OMS), however there are some functions which the e-commerce platform may want to leverage, such as webhook subscriptions, and querying orders for reconciliation purposes before handing an order off to the OMS.

Make sure the endpoint and API credentials for the Admin API are correct, as they differ from the Storefront API. Typically, separate Custom Apps are created for OMS systems or other integrations to ensure each uses dedicated credentials with appropriately scoped permissions.

***

### Shopify is Asynchronous

One of the most common challenges that developers face while working with Shopify, is understanding how and why Shopify performs certain tasks asynchronously. For Shop Pay Wallet, this is relevant in a few ways:

* Attempting payment by invoking the `ShopPayPaymentRequestSessionSubmit` mutation
  * While the response returned by the API may indicate an immediate failure, a success indicates the successful enqueuing of the transaction, which is processed asynchronously

* The `paymentcomplete` event will be emitted for successful authorizations (i.e. `status: “SUCCESS”`)
  * As a client-side event, this event may not be received if a customer closes the popup early, or is otherwise disconnected from the session after initiating the payment

* The `ORDER_TRANSACTIONS_CREATE` webhook triggers only when a payment is successfully authorized; however, any failed payment attempts by the customer during the Shop Pay session will also generate transactions and corresponding webhook events, which will be queued and delivered along with the successful payment event.

* Order reconciliation:

  * Once your e-commerce system has successfully reconciled the order and retrieved the Order ID, FulfillmentOrder ID and Transaction ID, then it’s typically ready for handoff to the OMS.
  * Some aspects of an order are dynamic and could be updated after order creation, (ex. OrderRisks can be updated until the order is marked as fulfilled), so it’s important that any system concerned with the state of an order verifies it immediately before taking irrevocable actions, such as captures and fulfillments

* Post-order actions:
  * Transaction-related functions will normally require asynchronous processing, so the transaction status will often return as `status: “PENDING”`, and should get updated when processed

* Webhooks:
  * While normally delivered quickly, webhooks can in some cases be queued for some time before delivery, never depend on a webhook for time-sensitive critical path processes

***

### Inventory Reservation

Because Shop Pay Wallet transactions are finalized through Shopify Payments, it’s important for the inventory to be reserved and the order to be as certain as possible in your system, before submitting the **ShopPayPaymentRequestSessionSubmit** mutation. Once the payment is submitted and successful, the order is imported into Shop App for the buyer. This will trigger any relevant notifications to the Shop buyer (based on their notification preferences).

Your system should be equipped to handle multiple payment attempts during checkout, such as when a card is declined due to insufficient funds and the buyer uses a different card.

If a successful status is received, then the customer can be forwarded to the thank-you page as normal. If instead another action-driven event is received, then the cart should be rebuilt if necessary, before processing the action.

***

### Requesting development assistance from Shopify

While Shopify typically does not provide API troubleshooting assistance, we are happy to investigate issues encountered with the use of Shop Pay Wallet. As a part of this, we provide launch services for merchants developing Shop Pay Wallet integrations, and inquiries with our support are routed to teams equipped to assist.

Whenever requesting Shopify’s assistance on an investigation, it’s important to share the most recent example(s) you’re able to find, as Shopify will have access to the most detailed logging for more recent events.

Further, by providing any relevant API calls, their response and the headers from the responses, this will give Shopify the information needed to identify the relevant logs and help find a solution. Specifically, the `X-Request-Id` header is useful for identifying relevant logs when investigating issues.

If the issue is unrelated to an API call specifically, but rather related to missing orders, please provide the most relevant information about the order(s), such as the [source identifier](https://shopify.dev/docs/api/commerce-components/pay/graphql-pre-payment#shoppaypaymentrequestsessioncreate-arguments).

***

### Additional Resources

[Shop Pay Wallet API\
\
](https://shopify.dev/docs/api/commerce-components/pay)

[API documentation for Shop Pay Wallet.](https://shopify.dev/docs/api/commerce-components/pay)

[Development Journey and Key Considerations\
\
](https://shopify.dev/docs/api/commerce-components/pay/development-journey)

[A guide to assist with the development journey and key considerations for Shop Pay Wallet.](https://shopify.dev/docs/api/commerce-components/pay/development-journey)

[UX Guidelines\
\
](https://shopify.dev/docs/api/commerce-components/pay/design-guidelines)

[UX documentation for Shop Pay Wallet.](https://shopify.dev/docs/api/commerce-components/pay/design-guidelines)

[Shop Configuration Guide\
\
](https://shopify.dev/docs/api/commerce-components/pay/shop-configuration)

[New shop configuration guide for Shop Pay Wallet.](https://shopify.dev/docs/api/commerce-components/pay/shop-configuration)

[Merchant-Assigned A/B Testing Guide\
\
](https://shopify.dev/docs/api/commerce-components/pay/merchant-assigned-ab-testing-guide)

[A guide to assist with performing A/B testing for Shop Pay Wallet.](https://shopify.dev/docs/api/commerce-components/pay/merchant-assigned-ab-testing-guide)

[Shop Pay Installments activation\
\
](https://help.shopify.com/en/manual/payments/shop-pay-installments/activating-shop-pay-installments)

[A guide to activating Shop Pay Installments.](https://help.shopify.com/en/manual/payments/shop-pay-installments/activating-shop-pay-installments)

***

---
