# Shopify Shop Minis Reference (Indonesian / English)

> Referensi lengkap **shop-minis** Shopify API yang disusun ulang dari https://shopify.dev/docs/api/shop-minis.
> Dokumen ini dirancang untuk pengembang berbahasa Indonesia, namun seluruh konten teknis (skema, tipe, nama field, contoh kode) dipertahankan dalam bahasa Inggris asli untuk memastikan akurasi.


| Item | Nilai |
|------|-------|
| Sumber | `https://shopify.dev/docs/api/shop-minis` |
| Total halaman | **132** |
| Tanggal kompilasi | 2026-05-02 |
| Bahasa | Indonesia (intro/ToC) + English (konten teknis) |


## Daftar Isi (Table of Contents)

- [Shop Minis](#shop-minis-shop-minis)
- [Guidelines](#guidelines-guidelines)
- [Design](#design-design)
- [Dependencies](#dependencies-dependencies)
- [Coding Assistant Support](#coding-assistant-support-coding-assistant-support)
- [Manifest](#manifest-manifest-file)
- [Network requests](#network-requests-network-requests)
- [Custom backend](#custom-backend-custom-backend)
- [Storing data](#storing-data-storing-data)
- [User-generated content](#user-generated-content-user-generated-content)
- [Deeplinks](#deeplinks-deeplinks)
- [Intents](#intents-intents)
- [Navigation transitions](#navigation-transitions-navigation-transitions)
- [Commands](#commands-commands)
- [api-keys generate](#api-keys-generate-api-keys-generate)
- [api-keys list](#api-keys-list-api-keys-list)
- [api-keys revoke](#api-keys-revoke-api-keys-revoke)
- [build](#build-build)
- [cancel-submission](#cancel-submission-cancel-submission)
- [check-submission](#check-submission-check-submission)
- [create](#create-create)
- [dashboard](#dashboard-dashboard)
- [dev](#dev-dev)
- [disable](#disable-disable)
- [doctor](#doctor-doctor)
- [enable](#enable-enable)
- [features](#features-features)
- [info](#info-info)
- [install](#install-install)
- [reports dates](#reports-dates-reports-dates)
- [reports get](#reports-get-reports-get)
- [reports list](#reports-list-reports-list)
- [setup](#setup-setup)
- [submit](#submit-submit)
- [upgrade](#upgrade-upgrade)
- [Components](#components-components)
- [MinisRouter](#minisrouter-minisrouter)
- [StaticArea](#staticarea-staticarea)
- [TransitionLink](#transitionlink-transitionlink)
- [Accordion](#accordion-accordion)
- [AlertDialog](#alertdialog-alertdialog)
- [Alert](#alert-alert)
- [Avatar](#avatar-avatar)
- [Badge](#badge-badge)
- [Button](#button-button)
- [Card](#card-card)
- [Checkbox](#checkbox-checkbox)
- [ContentWrapper](#contentwrapper-contentwrapper)
- [IconButton](#iconbutton-iconbutton)
- [ImageContentWrapper](#imagecontentwrapper-imagecontentwrapper)
- [Image](#image-image)
- [Input](#input-input)
- [Label](#label-label)
- [List](#list-list)
- [ProductVariantPrice](#productvariantprice-productvariantprice)
- [Progress](#progress-progress)
- [QuantitySelector](#quantityselector-quantityselector)
- [RadioGroup](#radiogroup-radiogroup)
- [SafeArea](#safearea-safearea)
- [Select](#select-select)
- [Skeleton](#skeleton-skeleton)
- [TextInput](#textinput-textinput)
- [Toaster](#toaster-toaster)
- [Touchable](#touchable-touchable)
- [VideoPlayer](#videoplayer-videoplayer)
- [AddToCartButton](#addtocartbutton-addtocartbutton)
- [BuyNowButton](#buynowbutton-buynowbutton)
- [FavoriteButton](#favoritebutton-favoritebutton)
- [MerchantCard](#merchantcard-merchantcard)
- [ProductCard](#productcard-productcard)
- [ProductLink](#productlink-productlink)
- [Search](#search-search)
- [Hooks](#hooks-hooks)
- [useAsyncStorage](#useasyncstorage-useasyncstorage)
- [useImageUpload](#useimageupload-useimageupload)
- [useSecureStorage](#usesecurestorage-usesecurestorage)
- [useBuyerAttributes](#usebuyerattributes-usebuyerattributes)
- [useCurrentUser](#usecurrentuser-usecurrentuser)
- [useFollowedShops](#usefollowedshops-usefollowedshops)
- [useFollowedShopsActions](#usefollowedshopsactions-usefollowedshopsactions)
- [useGenerateUserToken](#usegenerateusertoken-usegenerateusertoken)
- [useOrders](#useorders-useorders)
- [useRecentProducts](#userecentproducts-userecentproducts)
- [useRecentShops](#userecentshops-userecentshops)
- [useSavedProducts](#usesavedproducts-usesavedproducts)
- [useSavedProductsActions](#usesavedproductsactions-usesavedproductsactions)
- [useCloseMini](#useclosemini-useclosemini)
- [useDeeplink](#usedeeplink-usedeeplink)
- [useNavigateWithTransition](#usenavigatewithtransition-usenavigatewithtransition)
- [useShopNavigation](#useshopnavigation-useshopnavigation)
- [useCreateImageContent](#usecreateimagecontent-usecreateimagecontent)
- [useIntent](#useintent-useintent)
- [useErrorScreen](#useerrorscreen-useerrorscreen)
- [useErrorToast](#useerrortoast-useerrortoast)
- [useImagePicker](#useimagepicker-useimagepicker)
- [useKeyboardAvoidingView](#usekeyboardavoidingview-usekeyboardavoidingview)
- [useRequestPermissions](#userequestpermissions-userequestpermissions)
- [useSafeArea](#usesafearea-usesafearea)
- [useShare](#useshare-useshare)
- [usePopularProducts](#usepopularproducts-usepopularproducts)
- [useProduct](#useproduct-useproduct)
- [useProductList](#useproductlist-useproductlist)
- [useProductListActions](#useproductlistactions-useproductlistactions)
- [useProductLists](#useproductlists-useproductlists)
- [useProductMedia](#useproductmedia-useproductmedia)
- [useProductSearch](#useproductsearch-useproductsearch)
- [useProductVariants](#useproductvariants-useproductvariants)
- [useProducts](#useproducts-useproducts)
- [useRecommendedProducts](#userecommendedproducts-userecommendedproducts)
- [useRecommendedShops](#userecommendedshops-userecommendedshops)
- [useShop](#useshop-useshop)
- [Minis Admin API](#minis-admin-api-minis-admin-api)
- [miniToggle](#minitoggle-minitoggle)
- [userTokenVerify](#usertokenverify-usertokenverify)
- [Publishing](#publishing-publishing)
- [Analytics](#analytics-analytics)
- [Troubleshooting](#troubleshooting-troubleshooting)
- [Shop Minis — shop-minis](#shop-minis-shop-minis-117)
- [Analytics — analytics](#analytics-analytics-118)
- [Coding Assistant Support — coding-assistant-support](#coding-assistant-support-coding-assistant-support-119)
- [Custom backend — custom-backend](#custom-backend-custom-backend-120)
- [Deeplinks — deeplinks](#deeplinks-deeplinks-121)
- [Dependencies — dependencies](#dependencies-dependencies-122)
- [Design — design](#design-design-123)
- [Guidelines — guidelines](#guidelines-guidelines-124)
- [Manifest — manifest-file](#manifest-manifest-file-125)
- [Navigation transitions — navigation-transitions](#navigation-transitions-navigation-transitions-126)
- [Network requests — network-requests](#network-requests-network-requests-127)
- [Publishing — publishing](#publishing-publishing-128)
- [Storing data — storing-data](#storing-data-storing-data-129)
- [Troubleshooting — troubleshooting](#troubleshooting-troubleshooting-130)
- [User-generated content — user-generated-content](#user-generated-content-user-generated-content-131)

---

<a id="shop-minis-shop-minis"></a>

## Shop Minis

## Shop Minis

Build fast. Launch faster. Shop Minis enable you to create custom shopping experiences on mobile. With our React SDK, you can build immersive features that reach millions of shoppers instantly in the [Shop app](https://shop.app).

### Introduction

Shop Minis are immersive, full-screen buyer experiences within the Shop app. They are designed to be:

* Fast and responsive
* Easy to develop and maintain
* Secure and reliable

***

### Requirements

* [Node.js](https://nodejs.org/en/download/) version 20 or higher
* [XCode](https://developer.apple.com/xcode/) or [Android Studio](https://developer.android.com/studio)

***

### Setup

Create a new Shop Minis project with your preferred package manager:

### Create a new project

```sh
npm init @shopify/shop-mini@latest
```

***

### Development

Use the [`dev`](https://shopify.dev/docs/api/shop-minis/commands/dev) command to start the development server and run your Shop Mini locally. You can preview your Mini in an Android emulator or iOS simulator, or on a physical device.

* Press `a` to open on an Android device or emulator.
* Press `i` to open on an iOS simulator.
* Press `d` to test deeplink navigation with a custom path. [Learn more →](https://shopify.dev/docs/api/shop-minis/deeplinks)
* Press `q` to scan a QR code to open on a physical iOS device.

[Command - Learn more about the dev command](https://shopify.dev/docs/api/shop-minis/commands/dev)

[Guide - Testing deeplinks](https://shopify.dev/docs/api/shop-minis/deeplinks)

### Start the development server

```sh
npx shop-minis dev
```

***

### Permissions

Developers need explicit app management permissions within their Partner organization to create, manage, or submit Shop Minis.

If you're an organization owner or admin:

1. Go to your Partner Dashboard.
2. Navigate to **Settings** → **Team**.
3. Find the team member who needs access.
4. Click on their profile to edit permissions.
5. Under **Sensitive permissions**, enable **Manage apps**.
6. Save changes.

If you're a team member:

Ask your organization owner or admin to grant you the **Manage apps** permission following the steps above.

***

### Coding Assistant Support

Shop Minis work seamlessly with coding assistants like Claude, Cursor, and Windsurf. Every project includes context files that teach these tools about Shop Mini patterns, helping them provide accurate, SDK-first suggestions tailored to mobile commerce development.

Get better code suggestions from day one - no configuration required.

[Guide - Learn how coding assistants help you build](https://shopify.dev/docs/api/shop-minis/coding-assistant-support)

***

### Debugging (i​OS)

During development in an iOS simulator, you can use Safari Web Inspector to debug your Shop Mini. See [this documentation](https://developer.apple.com/library/archive/documentation/NetworkingInternetWeb/Conceptual/Web_Inspector_Tutorial/EnableWebInspector/EnableWebInspector.html) on how to enable Web Inspector.

After Web Inspector is enabled, you can inspect your running Shop Mini from the "Develop" menu in Safari.

***

### Debugging (Android)

During development in an Android emulator or device, you can use Chrome DevTools to debug your Shop Mini. See [this documentation](https://developer.chrome.com/docs/devtools/remote-debugging) on how to use Chrome DevTools remote debugging.

[Guide - Troubleshooting guide](https://shopify.dev/docs/api/shop-minis/troubleshooting)

***

### Get Support

Join the [Shop Minis forum](https://community.shopify.dev/c/shop-minis/33) in the Shopify Community to:

* Ask questions and get help from the Shop Minis team
* Share feedback and feature requests
* Connect with other Shop Minis developers
* Find solutions to common issues

Our team actively monitors the forum and is ready to help you succeed in building your Mini!

***

---

<a id="guidelines-guidelines"></a>

## Guidelines

## Guidelines

Guidelines and requirements for building and submitting Shop Minis. These guidelines ensure a safe, reliable experience for buyers, merchants, and partners.

***

### Introduction

We're excited you're here and want to help you build the next big commerce experience using the Shop Minis SDK. Our team is readily available to answer questions, provide feedback, and help you succeed building your Mini through the [Shop Minis forum](https://community.shopify.dev/c/shop-minis/33). Our goal for buyers, merchants, and partners is to ensure a safe, reliable experience while using Minis, so we've detailed a set of guidelines we enforce during the submission and review process.

The following requirements are used to review all Shop Minis submitted for approval to be distributed through the Shop app. They are intended to provide the best experience across the entire Shop Mini lifecycle, from branding to installation, onboarding, functionality, and quality. By following these guidelines, you can ensure that the review process is as quick as possible when you submit your own Shop Mini.

These requirements are subject to change. Your Shop Mini will be expected to meet any new requirements that are added here with reasonable notice. Shopify can withhold its approval, reject, or remove a Shop Mini from the Shop app at its sole discretion.

***

### General guidelines

* Shop Minis must be built using our developer platform, the Shop Minis SDK, and other Shop Mini-specific functionality that is made available to developers from time to time.
* The Shop Minis SDK cannot be used to build anything other than a Shop Mini.
* Shopify periodically deprecates and removes functionality from the Shop Minis platform. Your Shop Mini may only use supported functionality. If your Shop Mini relies on deprecated functionality, we will notify you to submit a new version within a reasonable timeframe.
* Shop Minis must only fetch merchant/product data using the SDK.
* If you integrate with a third-party service, you must comply with their terms of use and ensure that they also comply with the Shop Minis Terms, particularly concerning Shop Merchant or Shop User data. You are responsible for making sure everything in your Shop Mini complies with the Shop Minis Terms and these guidelines, so please review and choose them carefully.
* Shopify reserves the right to enable Merchants to restrict or revoke Shop Mini developers' access to their Merchant Materials.
* Shop Minis may only make network calls to approved hosts within the viewer.
* A Mini must function solely within the Shop app; it cannot be a standalone app that operates outside of the Shop.
* Shop Minis that include user-generated images must use the [useCreateImageContent](https://shopify.dev/docs/api/shop-minis/hooks/content/usecreateimagecontent) hook to ensure images are moderated.
* Shop Minis including video, audio, or public commenting, must share detailed, established moderation practices as part of your submission description and will face additional review scrutiny. Developers should ensure the content follows the [Shop Content Policy](https://shop.app/content-policies).

***

### Prohibited practices and functionality

#### Practices

* Minis must not violate the [Shop Minis Terms](https://shop.app/minis/terms), the [Partner Program Agreement](https://www.shopify.com/partners/terms), the [Shopify API License and Terms of Use](https://www.shopify.com/legal/api-terms), or our [Shop Content Policy](https://shop.app/content-policies).
* Minis must not use the words 'Shop' or 'Mini' in their name.
* Minis cannot violate any terms, conditions, or guidelines imposed by relevant third-party platforms (such as Apple App Store Guidelines or Google Play Store Policies) that are applicable to applications distributed or operating within their ecosystems, particularly concerning prohibited content, payments, or user safety.
* Minis cannot introduce any malicious software to the Shopify API or the Service (including the Shop app).
* Shop Minis must not link externally from within the viewer. Prohibited link outs include (but are not limited to) links to websites, other applications, or any stores.
* Minis cannot use dark UX patterns or include any other malicious activities toward users.

#### Functionality

* Shop Minis may not allow users to communicate with each other through direct messaging, or other 1:1 means of communication.
* Shop Minis cannot run advertisements.
* Shop Minis cannot livestream user generated content.
* All user generated images must use the [useCreateImageContent](https://shopify.dev/docs/api/shop-minis/hooks/content/usecreateimagecontent) hook.

***

### Checkout & fees

* Developers cannot charge users fees for their use of their Shop Mini.
* Shop Minis may only use the Minis SDK to navigate to the shopping cart and checkout. Any payment processing (e.g., refunds) must go through Shop Pay.
* Shop Minis must not sell anything other than items made available in Shop's product catalog.

***

### Performance

* Shop Minis should be performant for buyers on the Shop app; please ensure yours has undergone any relevant testing and monitoring to avoid any lag that might be noticeable.
* We require that the loading time of your Shop Mini, from when the user taps on the entry point until the user can start interacting with the content in your Shop Mini viewer, should be no longer than 3 seconds as measured on a 5G connection.
* Minis must not exceed 5 MB in size.

***

### Data privacy

* You should exercise care when handling Shop User Data to ensure you've complied with privacy best practices, applicable laws, and the Shop Minis Terms.
* Shop Minis must include the URL of their privacy policy in the manifest. The privacy policy must clearly and explicitly state what data is collected and how it is used, explain the purposes for which the data is being processed, and how users may request deletion of that data. Your privacy policy must comply with the Shop Minis Terms, applicable laws, and these guidelines.
* Shop Minis should only request access to data relevant to the core functionality of the app and should only collect and use data required to accomplish the relevant task.
* Shop Minis must respect the user's permission settings and not attempt to manipulate, trick, or force people to consent to unnecessary data access.
* Developers can't access any Shop user data outside of what we make available (i.e., approved data fields we will share via the SDK) and what may specifically be permissible to request directly from a user (i.e., access to camera/photos).
* Developers cannot ask users for any other data directly (e.g., email addresses; payment card data; shipping or billing addresses; sensitive or health-related data of a Shop User).

You must not use Shop User Data for:

* Tracking user behavior across different contexts
* Creating targeted advertising
* Monetizing data through third parties
* User profiling beyond your Mini's authorized functionality or
* Selling or licensing user data to others.

***

### Merchant materials

* Only use Merchant Materials for the purpose of the Shop Mini.
* Shop Minis cannot manipulate merchant or product information, such as product names or prices. Minis cannot manipulate other screens on Shop.
* Developers can't use Merchant Materials (i.e., product listings, logos, images) for anything other than their Shop Mini. They can't export, share, or use this data outside of the Mini. See 4b in the Terms of Service for further details.
* Minis must not display merchants' products in a negative light.

***

### Violations and enforcement

* **Immediate rejection** - Security violations, privacy violations, legal non-compliance, prohibited functionality, performance issues, or missing documentation. Fix issues and resubmit.
* **Permanent removal** - Shopify reserves the right to permanently remove any Mini at its sole discretion for repeated violations or severe misconduct.
* **No appeals** - All decisions are final as required by law.

***

### Updating your mini

Every time you update your Mini, the Shopify team will review your code and approve or reject any changes based on the guidelines above.

***

---

<a id="design-design"></a>

## Design

## Design

Minis should be designed and built with the following guiding principles in mind.

***

### UX Principles

#### Unambiguous purpose

Each Mini should possess a singular, well-defined objective. The user interface should reinforce this purpose with a single primary action per screen.

#### Rapid initialization and clear progress indication

Minis should offer quick initialization paths (e.g. pre-filled content from collections). Progress indicators should be implemented for multi-step processes (e.g. avatar creation flows).

#### Engaging functionality

Minis should be both utilitarian and engaging, encouraging user interaction through delightful design elements rather than solely focusing on basic functionality. Gamification techniques, social engagement loops, and visual feedback should be intuitive and non-intrusive.

#### Personalization and shareability

User engagement should be fostered through personalization features, such as avatars, saved looks, and personalized analysis. Clear sharing functionalities should be provided to generate user-generated content (UGC) and links back to the Mini or Shop.

#### Efficient completion and habit formation

Each Mini should be designed to encourage repeat usage through clear options for saving, revisiting, or continuing progress.

#### Accessibility by design

Adherence to established mobile app design guidelines and accessibility best practices is essential, including the implementation of large tap targets, appropriate contrast ratios, and alt text for images. Keyboard navigation and screen reader support should be ensured where applicable.

#### Standardized interaction patterns

Existing Shop Minis SDK components and common interaction patterns should be utilized whenever feasible. Established navigation conventions, including modals, bottom sheets, and swipe gestures, should be adhered to in order to minimize user friction.

#### Preserve integrity

The established character and flow of the user experience, once recognized through approval, should be maintained. Any dynamic modifications post-approval that could notably redefine the user's learned interactions or the Mini's core behavior should be approached with careful consideration for user continuity and confidence.

***

### Design specifications

#### Safe area

Minis should observe the designated safe areas and avoid placing internal navigation buttons or any other pertinent information that is vital to the Mini's necessary function, outside the safe area bounds.

***

### Icons

The Shop Minis SDK uses [Lucide](https://lucide.dev/) as its icon library. Lucide provides a comprehensive set of high-quality, open-source icons that are designed to be consistent, customizable, and accessible.

#### Why Lucide?

* **Consistent Design**: All icons follow the same design principles and visual style
* **Customizable**: Easy to size, color, and style to match your design

#### Prefer Icons Over Emojis

When building Shop Minis, **always prefer icons over emojis** for UI elements because icons render consistently across all platforms and devices.

#### Get started

```bash
npx shop-minis install lucide-react
```

### Icon Usage

```tsx
import {Heart, AmpersandIcon, Pizza} from 'lucide-react'


export default function MyComponent() {
  return (
    <div className="flex m-2 gap-2 justify-center">
      <Pizza />
      <AmpersandIcon />
      <Heart />
    </div>
  )
}
```

***

---

<a id="dependencies-dependencies"></a>

## Dependencies

## Dependencies

Shop Minis must only use approved dependencies. Only the packages listed on this page are allowed. Submissions with unapproved dependencies will be automatically rejected.

***

### Required dependencies

The following dependencies are required for your Mini to work. They will be installed automatically when you create your Mini.

* [`@shopify/shop-minis-react`](https://www.npmjs.com/package/@shopify/shop-minis-react) (\*)
* [`react`](https://www.npmjs.com/package/react) (18.2.0)
* [`react-dom`](https://www.npmjs.com/package/react-dom) (18.2.0)

***

### Optional dependencies

The following dependencies have been approved for use in Minis. Use the [`install`](https://shopify.dev/docs/api/shop-minis/commands/install) command to add them to your Mini.

* [`@fal-ai/client`](https://www.npmjs.com/package/@fal-ai/client) (1.6.0)
* [`@mediapipe/pose`](https://www.npmjs.com/package/@mediapipe/pose) (0.5.1675469404)
* [`@react-three/fiber`](https://www.npmjs.com/package/@react-three/fiber) (8.18.0)
* [`aframe`](https://www.npmjs.com/package/aframe) (1.7.1)
* [`color-convert`](https://www.npmjs.com/package/color-convert) (2.0.1)
* [`mind-ar`](https://www.npmjs.com/package/mind-ar) (1.2.5)
* [`three`](https://www.npmjs.com/package/three) (0.178.0)
* [`@types/three`](https://www.npmjs.com/package/@types/three) (0.178.1)
* [`lodash`](https://www.npmjs.com/package/lodash) (4.17.21)
* [`lucide-react`](https://www.npmjs.com/package/lucide-react) (0.513.0)
* [`motion`](https://www.npmjs.com/package/motion) (12.17.3)
* [`radix-ui`](https://www.npmjs.com/package/radix-ui) (1.4.2)
* [`react-router`](https://www.npmjs.com/package/react-router) (7.7.0)
* [`socket.io-client`](https://www.npmjs.com/package/socket.io-client) (4.8.1)
* [`video.js`](https://www.npmjs.com/package/video.js) (8.23.3)
* [`ulid`](https://www.npmjs.com/package/ulid) (3.0.1)
* [`zustand`](https://www.npmjs.com/package/zustand) (5.0.8)
* [`@tanstack/react-query`](https://www.npmjs.com/package/@tanstack/react-query) (5.86.0)
* [`ai`](https://www.npmjs.com/package/ai) (5.0.29)
* [`@ai-sdk/openai`](https://www.npmjs.com/package/@ai-sdk/openai) (2.0.23)
* [`@ai-sdk/react`](https://www.npmjs.com/package/@ai-sdk/react) (2.0.29)
* [`@tensorflow/tfjs`](https://www.npmjs.com/package/@tensorflow/tfjs) (4.22.0)
* [`@tensorflow-models/posenet`](https://www.npmjs.com/package/@tensorflow-models/posenet) (2.2.2)
* [`embla-carousel-react`](https://www.npmjs.com/package/embla-carousel-react) (8.6.0)
* [`embla-carousel-autoplay`](https://www.npmjs.com/package/embla-carousel-autoplay) (8.6.0)
* [`embla-carousel-auto-scroll`](https://www.npmjs.com/package/embla-carousel-auto-scroll) (8.6.0)
* [`embla-carousel-auto-height`](https://www.npmjs.com/package/embla-carousel-auto-height) (8.6.0)
* [`embla-carousel-class-names`](https://www.npmjs.com/package/embla-carousel-class-names) (8.6.0)
* [`embla-carousel-fade`](https://www.npmjs.com/package/embla-carousel-fade) (8.6.0)
* [`@dnd-kit/core`](https://www.npmjs.com/package/@dnd-kit/core) (6.3.1)
* [`@dnd-kit/modifiers`](https://www.npmjs.com/package/@dnd-kit/modifiers) (9.0.0)
* [`@dnd-kit/sortable`](https://www.npmjs.com/package/@dnd-kit/sortable) (10.0.0)
* [`@emoji-mart/data`](https://www.npmjs.com/package/@emoji-mart/data) (1.2.1)
* [`@emoji-mart/react`](https://www.npmjs.com/package/@emoji-mart/react) (1.1.1)
* [`emoji-mart`](https://www.npmjs.com/package/emoji-mart) (5.6.0)
* [`videojs-mux`](https://www.npmjs.com/package/videojs-mux) (4.21.11)
* [`zod`](https://www.npmjs.com/package/zod) (4.1.11)
* [`@apollo/client`](https://www.npmjs.com/package/@apollo/client) (4.0.7)
* [`graphql-ws`](https://www.npmjs.com/package/graphql-ws) (6.0.6)
* [`@mux/mux-player-react`](https://www.npmjs.com/package/@mux/mux-player-react) (3.8.0)
* [`@mediapipe/tasks-vision`](https://www.npmjs.com/package/@mediapipe/tasks-vision) (0.10.9)
* [`hls.js`](https://www.npmjs.com/package/hls.js) (1.6.14)

Running the [`install --check`](https://shopify.dev/docs/api/shop-minis/commands/install) command will validate that your Mini only uses approved dependencies. You can use [`install --fix`](https://shopify.dev/docs/api/shop-minis/commands/install) to fix any issues automatically.

**Unapproved dependencies will cause automatic rejection:**

Your Mini will be automatically rejected if it includes any dependencies not listed above. This includes private npm packages (which are never allowed), dependencies vendored into your source code, and any modifications to approved dependencies. Only use the exact versions of approved dependencies listed on this page.

[Command - Learn more about the install command](https://shopify.dev/docs/api/shop-minis/commands/install)

***

### Requesting optional dependencies

If you need a dependency that's not on the list, request it as early as possible. **The approval process takes days to weeks**, and there is no guarantee of approval. We can only approve Minis that use allowed dependencies.

To request a new dependency, file an issue in the [Shop Minis GitHub repository](https://github.com/Shopify/shop-minis/issues/new?template=dependency-request.yml).

**Caution:**

Shop Minis should be built specifically for the Shop platform, not ported from existing applications.

#### Why a dependency request might be rejected

Dependency requests could be rejected for:

* **Excessive dependencies**: Requesting many dependencies (10+)
* **Private packages**: Private npm packages are never allowed
* **Security vulnerabilities**: Dependencies with known security issues or poor security track records
* **Large bundle size**: Dependencies that significantly increase the Mini's size without sufficient benefit
* **Maintenance concerns**: Unmaintained or deprecated packages with no active development
* **Functionality overlap**: Dependencies that duplicate functionality already available in approved packages or the Shop Minis SDK
* **Paid dependencies**: Dependencies that require paid subscriptions or are closely tied to paid third-party platforms. We strongly prefer widely-adopted open source alternatives

**Tip:**

Before requesting a dependency, check the [closed issues](https://github.com/Shopify/shop-minis/issues?q=is%3Aissue+is%3Aclosed+label%3Adependency-request) to see if it has been previously rejected and consider whether an approved alternative exists.

***

---

<a id="coding-assistant-support-coding-assistant-support"></a>

## Coding Assistant Support

## Coding Assistant Support

Learn how Shop Minis provide context to coding assistants for better development experience.

***

### Overview

Shop Mini projects include two context files that coding assistants automatically discover:

* **AGENTS.md** - The main context file containing Shop Mini development patterns, SDK guidelines, and best practices
* **CLAUDE.md** - A reference file for compatibility with specific tools

These files are included in every new project created with `npx shop-minis create` and provide coding assistants with the context they need to understand Shop Mini development.

***

### What It Provides

The context files provide coding assistants with key Shop Mini topics:

* **Development workflow** - Setup commands, device testing, debugging techniques
* **SDK-first component selection** - When to use Shop Minis React components vs custom solutions
* **Mobile-only design requirements** - Touch targets, WebView constraints, performance limits
* **Navigation and storage patterns** - Shop app navigation, SDK storage hooks instead of Web APIs
* **Project structure** - Required files, TypeScript patterns, Tailwind CSS configuration
* **Security and submission** - Trusted domains, publishing requirements, common pitfalls to avoid

***

### Customization

You can customize the AGENTS.md file to include:

* Your Shop Mini's specific features and functionality
* Team coding conventions
* Project-specific patterns
* Custom components and hooks you've built

Simply edit the AGENTS.md file in your project root. Coding assistants will use your additions when generating suggestions.

***

---

<a id="manifest-manifest-file"></a>

## Manifest

## Manifest

Learn how to configure your Shop Mini using the manifest.json file. The manifest defines critical properties like description, permissions, scopes, and trusted domains.

***

### Overview

Every Shop Mini requires a `manifest.json` file in the src folder of the project. This file defines the configuration and capabilities of your Mini, including what permissions it needs, what user data it can access, and which external domains it can communicate with.

The manifest is validated during the submission process and must be properly configured for your Mini to function correctly.

***

### Manifest Structure

Here's an example of a complete `manifest.json` file:

### manifest.json

```json
{
  "name": "My Mini",
  "description": "A brief description of your mini that explains its purpose and functionality",
  "handle": "my-mini-handle",
  "permissions": ["CAMERA", "MICROPHONE", "MOTION"],
  "scopes": ["profile", "orders"],
  "trusted_domains": [
    "api.example.com/v1",
    "storage.googleapis.com/my-mini-bucket",
    "cdn.example.com/assets"
  ]
}
```

***

### Permissions

The `permissions` field is an array that specifies which native device capabilities your Mini requires. These permissions are requested from the user when your Mini attempts to use them.

#### Available Permissions

* **`CAMERA`** - Access to the device camera for taking photos or videos
* **`MICROPHONE`** - Access to the device microphone for audio recording
* **`MOTION`** - Access to device motion sensors (accelerometer, gyroscope)

#### Example

```json
{
  "permissions": ["CAMERA", "MICROPHONE"]
}
```

**Caution:**

Only request permissions that are essential to your Mini's core functionality. Requesting unnecessary permissions may delay approval during the review process.

***

### Scopes

The `scopes` field is an array that defines what user data your Mini can access through the Shop Minis SDK. Some hooks in the SDK require specific scopes to be declared in the manifest before they can be used.

#### Available Scopes

##### User Scopes

* **`openid`** - OpenID Connect authentication. Required for generating user tokens.
* **`profile`** - Read access to user's buyer profile.
* **`user_settings:read`** - Read access to the current user.

##### Product Scopes

* **`products:recent:read`** - Read access to the user's recently viewed products.
* **`products:recommendations:read`** - Read access to personalized product recommendations for the user.

##### Shop Scopes

* **`shops:recent:read`** - Read access to the user's recently viewed shops.
* **`shops:follows:read`** - Read access to shops the user follows.
* **`shops:follows:write`** - Write access to follow or unfollow shops.
* **`shops:recommendations:read`** - Read access to personalized shop recommendations for the user.

##### Order Scopes

* **`orders`** - Access to the user's order history and details.

##### Product List Scopes

* **`product_list:read`** - Read access to the user's collections (favorites, wishlists, etc.).
* **`product_list:write`** - Write access to create, update, or delete collections.
* **`product_list_item:write`** - Write access to add or remove items from collections.

#### Example

```json
{
  "scopes": ["profile", "orders"]
}
```

**Note:**

Always follow the principle of least privilege - only request scopes that are necessary for your Mini's functionality. Review the [Guidelines](https://shopify.dev/docs/api/shop-minis/guidelines) for more information on data privacy requirements.

***

### Trusted Domains

The `trusted_domains` field is an array of domains that your Mini is allowed to communicate with. This is a critical security feature that restricts network requests to approved domains only.

#### Usage

Trusted domains are required for:

* **Network requests** - Any `fetch()` calls to external APIs
* **Image sources** - Loading images from external URLs
* **Video sources** - Loading videos from external URLs
* **Other external resources** - Any content loaded from outside your Mini's bundle

#### Domain Format

* Don't include the protocol (for example, `https://`)
* You can include paths to be more specific
* Subdomains must be listed separately
* **Be as specific as possible** - For example, if you're using Google Cloud Storage, include the full path to your specific bucket rather than just the domain

#### Path matching

When you include a path in your trusted domain, the trailing slash determines how URLs are matched:

* **With trailing slash** (for example, `cdn.example.com/images/`) - Matches any URL under that directory.
* **Without trailing slash** (for example, `cdn.example.com/images/photo.png`) - Matches only that exact path.

#### Example

To load an image from `https://cdn.shopify.com/static/sample-images/teapot.jpg`, any of these `trusted_domains` would work:

```json
{
  "trusted_domains": [
    "cdn.shopify.com",
    "cdn.shopify.com/static/",
    "cdn.shopify.com/static/sample-images/"
  ]
}
```

However, these wouldn't work:

```json
{
  "trusted_domains": [
    "cdn.shopify.com/static",
    "cdn.shopify.com/static/sample-images"
  ]
}
```

**Caution:**

Your Mini won't be able to make requests to any domain not listed in this array. Make sure to include all domains you need before submitting your Mini for review.

**Tip:**

Be as specific as possible with your trusted domains. Instead of allowing an entire domain like `storage.googleapis.com`, use `storage.googleapis.com/my-bucket/` to limit access to only your bucket. Remember to include a trailing slash to allow all files under that path.

***

### Handle

The `handle` field is a unique identifier for your Mini. This value is automatically assigned when you create your Mini through the Shop Minis platform.

#### Characteristics

* Automatically generated during Mini creation
* Must be unique across all Shop Minis
* Used internally by Shop to identify your Mini
* Cannot be changed after initial assignment
* Used to deeplink into your Mini (shop.app/mini/my-mini-handle)

#### Example

```json
{
  "handle": "my-awesome-mini"
}
```

**Note:**

You typically don't need to manually set this field. It's automatically populated when you initialize a new Mini project using the Shop Minis CLI.

***

### Description

The `description` field provides a brief summary of your Mini's purpose and functionality. This description is displayed to users in various places within the Shop app to help them understand what your Mini offers.

#### Characteristics

* Should be concise and informative (recommended 30-50 characters)
* Helps users discover and understand your Mini's value proposition
* Used in search results and Mini details

#### Example

```json
{
  "description": "Track your outfits every day"
}
```

#### Best Practices

* **Be specific:** Clearly state what unique value your Mini provides
* **Keep it concise:** Aim for 30-50 characters maximum
* **Use action words:** Start with verbs like "Discover," "Shop," "Track," or "Explore"
* **Highlight key features:** Mention the main benefit or differentiator of your Mini

***

### Best Practices

#### Minimize Permissions and Scopes

Only request the permissions and scopes that are absolutely necessary for your Mini's core functionality. This improves user trust and speeds up the review process.

#### Keep Trusted Domains Updated

As your Mini evolves, make sure to update the `trusted_domains` list if you add new external services or APIs. Missing domains will cause runtime errors.

#### Validation

Test your manifest configuration thoroughly during development to catch any issues before submission. The Shop Minis SDK will validate your manifest and provide warnings for common issues.

***

---

<a id="network-requests-network-requests"></a>

## Network requests

## Network requests

Shop Minis can only make network requests to approved domains. This page describes how to add trusted domains and how to perform fetch requests inside your Mini.

***

### Trusted domains

To allow your Mini to make network requests to external domains, you need to add them to the `trusted_domains` array in your `manifest.json` file. This will be reviewed when your Mini is submitted.

### Adding trusted domains to manifest.json

```json
{
  "name": "My Mini",
  "trusted_domains": ["example.com", "api.example.com"]
}
```

***

### Making requests

Once you have added trusted domains to your manifest, you can use standard fetch requests in your Mini to communicate with your backend services. See [Custom backend](https://shopify.dev/docs/api/shop-minis/custom-backend) for more information on how to verify requests.

Make sure to handle errors appropriately and provide feedback to users when requests fail.

**Authenticating requests:**

Do not include secret tokens or API keys in your Mini code. If you need to make authenticated API requests, you should wrap or proxy the request on your own backend using the verification process for rate limiting.

***

### Handling CORS

Any backend services that your Shop Mini communicates with must be configured to allow [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS) requests from `localhost:*` (all localhost ports).

This applies to both development and production environments, as Shop Minis use this origin to make requests. Ensure your server includes appropriate CORS headers to allow requests from these origins.

***

---

<a id="custom-backend-custom-backend"></a>

## Custom backend

## Custom backend

You can use a custom backend to handle requests from your Mini. This page describes how to connect to your backend and verify requests.

***

### Verifying requests

You can verify a request originates from a user in the Shop app by attaching a temporary token to the request inside the Mini and exchanging it for a user identifier on your backend.

1. Generate a temporary token using the [`useGenerateUserToken`](https://shopify.dev/docs/api/shop-minis/hooks/user/usegenerateusertoken) hook.
2. Attach the token in the headers of your [`network request`](https://shopify.dev/docs/api/shop-minis/network-requests).
3. Verify the token using the [`userTokenVerify`](https://shopify.dev/docs/api/shop-minis/minis-admin-api/mutations/usertokenverify) mutation in the Shop Minis Admin API.

This is useful for identifying the user making the request and for rate limiting requests to your backend.

**Setup your Mini:**

You must run the [`setup`](https://shopify.dev/docs/api/shop-minis/commands/setup) command and include the `openid` scope in your [`manifest.json`](https://shopify.dev/docs/api/shop-minis/manifest-file) before you can use the [`useGenerateUserToken`](https://shopify.dev/docs/api/shop-minis/hooks/user/usegenerateusertoken) hook.

**Caching lookups:**

Ensure you cache the token exchange lookup to avoid unnecessary requests to the Shop Minis Admin API. You can use the `tokenExpiresAt` field in the response to invalidate the cache when the token expires.

***

### Identifying users

If you need access to the user's `publicId`, include the `openid` scope in your [`manifest.json`](https://shopify.dev/docs/api/shop-minis/manifest-file). `publicId` will allow you to identify users across Minis.

***

### Example

This [`reference implementation`](https://github.com/Shopify/shop-minis/blob/main/supabase/README.md) shows how to securely authenticate Shop Mini users and process their requests using Supabase Edge Functions. This guide can be extrapolated to other backend services.

***

---

<a id="storing-data-storing-data"></a>

## Storing data

## Storing data

The Minis platform provides a few different ways to store data associated with a user. This guide will walk you through the different options and when to use each.

***

### Async storage

The `useAsyncStorage` hook provides a way to store data in the device's local storage. It's a simple and easy way to store data that persists across sessions, but it will be deleted if the user uninstalls the Shop app.

[Hook - Learn more about the useAsyncStorage hook](https://shopify.dev/docs/api/shop-minis/hooks/storage/useasyncstorage)

### Using async storage

```tsx
import {useEffect} from 'react'


import {useAsyncStorage} from '@shopify/shop-minis-react'


export default function MyComponent() {
  const {getItem, setItem, removeItem, getAllKeys, clear} = useAsyncStorage()


  useEffect(() => {
    async function handleStorageOperations() {
      // Get an item from storage
      const value = await getItem({key: 'myKey'})
      console.log({value})


      // Set an item in storage
      await setItem({key: 'myKey', value: 'Hello, World!'})


      // Remove an item from storage
      await removeItem({key: 'myKey'})


      // Get all keys in storage
      const keys = await getAllKeys()
      console.log({keys})


      // Clear all items from storage
      await clear()
    }


    handleStorageOperations()
  }, [getItem, removeItem, setItem, getAllKeys, clear])
}
```

***

### Secure storage

The `useSecureStorage` hook provides a way to store credentials and other sensitive data in the device's secure storage. It's a more secure way to store data that persists across sessions, but it will be deleted if the user uninstalls the Shop app.

[Hook - Learn more about the useSecureStorage hook](https://shopify.dev/docs/api/shop-minis/hooks/storage/usesecurestorage)

### Using secure storage

```tsx
import {useEffect} from 'react'


import {useSecureStorage} from '@shopify/shop-minis-react'


export default function MyComponent() {
  const {getSecret, setSecret, removeSecret} = useSecureStorage()


  useEffect(() => {
    async function handleSecureStorageOperations() {
      // Get a secret from secure storage
      const secret = await getSecret()
      console.log({secret})


      // Set a secret in secure storage
      await setSecret({value: 'Sensitive Data'})


      // Remove a secret from secure storage
      await removeSecret()
    }


    handleSecureStorageOperations()
  }, [getSecret, setSecret, removeSecret])
}
```

***

---

<a id="user-generated-content-user-generated-content"></a>

## User-generated content

## User-generated content

Learn how to create, display, and moderate user-generated image content in Shop Minis using the content system.

***

### Introduction

Shop Minis provides a built-in content system for handling user-generated images. This system includes automatic moderation, reporting capabilities, and shareable links. All user-generated images must use this system to ensure content safety and comply with Shop's [Content Policy](https://shop.app/content-policies).

***

### Creating content

Use the `useCreateImageContent` hook to upload images and create content. This hook handles the upload process and returns content metadata including moderation status.

[Hook - Learn more about the useCreateImageContent hook](https://shopify.dev/docs/api/shop-minis/hooks/content/usecreateimagecontent)

### Creating image content

```tsx
import {useCreateImageContent} from '@shopify/shop-minis-react'
import {useImagePicker} from '@shopify/shop-minis-react'


export default function UploadImage() {
  const {createImageContent, loading} = useCreateImageContent()
  const {pickImage} = useImagePicker()


  const handleUpload = async () => {
    // Pick an image from the user's device
    const image = await pickImage()


    if (image) {
      // Upload and create content
      const result = await createImageContent({
        image: image.uri,
        title: 'My uploaded image',
        description: 'A great photo',
        externalId: 'unique-id-123', // Optional: Your own ID for reference
        visibility: ['DISCOVERABLE', 'LINKABLE'],
      })


      if (result.data) {
        console.log('Content created:', result.data.publicId)
        console.log('Status:', result.data.status) // PENDING, READY, or REJECTED
        console.log('Shareable URL:', result.data.shareableUrl)
      }


      if (result.userErrors) {
        console.error('Upload failed:', result.userErrors)
      }
    }
  }


  return (
    <Button onPress={handleUpload} disabled={loading}>
      {loading ? 'Uploading...' : 'Upload Image'}
    </Button>
  )
}
```

#### Content visibility

The `visibility` parameter controls how content can be discovered and shared. It accepts an array of `ContentVisibility` values:

* `DISCOVERABLE`: Content appears in Shop's recommendation surfaces, such as feeds and content discovery areas.
* `LINKABLE`: Content gets a shareable URL, enabling users to share it outside of Shop.

Pass both values to make content fully public, or pass `null` or an empty array to keep content private within your Mini.

***

### Content status

Content goes through moderation and has three possible statuses:

* `PENDING`: Content is being reviewed for moderation.
* `READY`: Content has passed moderation and can be displayed.
* `REJECTED`: Content was rejected during moderation.

Users will always be able to see their own content, but will not be able to see other users' rejected content. In this case, it will be `null`.

### Handling content status

```tsx
import {MinisContentStatus} from '@shopify/shop-minis-react'


function ContentStatusBadge({status}: {status: MinisContentStatus}) {
  switch (status) {
    case MinisContentStatus.PENDING:
      return <Badge>Under review</Badge>
    case MinisContentStatus.READY:
      return <Badge variant="success">Approved</Badge>
    case MinisContentStatus.REJECTED:
      return <Badge variant="error">Rejected</Badge>
  }
}
```

***

### Displaying content

Use the `ContentWrapper` component to display user-generated images. This component provides built-in moderation reporting functionality that allows users to long-press on content to report inappropriate material.

**Caution:**

Always use `ContentWrapper` instead of rendering user-generated content directly. This is required for content moderation.

[Component - Learn more about the ContentWrapper component](https://shopify.dev/docs/api/shop-minis/components/primitives/contentwrapper)

### Displaying content

```tsx
import {ContentWrapper, Image, MinisContentStatus} from '@shopify/shop-minis-react'


export default function DisplayContent({publicId}: {publicId: string}) {
  return (
    <ContentWrapper publicId={publicId}>
      {({content, loading}) => {
        if (loading) return <div>Loading...</div>


        if (!content || content.status !== MinisContentStatus.READY) {
          return null
        }


        return (
          <Image
            src={content.image.url}
            alt={content.title}
          />
        )
      }}
    </ContentWrapper>
  )
}
```

You can also use an `externalId` if you're tracking content with your own identifiers:

### Using external ID

```tsx
import {ContentWrapper, Image} from '@shopify/shop-minis-react'


<ContentWrapper externalId="unique-id-123">
  {({content, loading}) => {
    if (loading) return <div>Loading...</div>


    if (!content) return null


    return (
      <Image
        src={content.image.url}
        alt={content.title}
      />
    )
  }}
</ContentWrapper>
```

***

### Long-press moderation

Content displayed with `ContentWrapper` automatically supports long-press gestures for user reporting. When a user long-presses on the content, they can report it for moderation if it violates Shop's content policies.

This functionality is built into the component and requires no additional configuration. Shop's moderation team will review reported content and take appropriate action.

### Long-press is automatic

```tsx
// No additional setup needed - long-press reporting
// is automatically enabled on ContentWrapper
<ContentWrapper publicId={content.publicId}>
  {({content, loading}) => {
    if (loading || !content) return null


    return (
      <Image
        src={content.image.url}
        alt={content.title}
      />
    )
  }}
</ContentWrapper>
```

***

### Linking to content

Content created with `useCreateImageContent` includes a `shareableUrl` property that you can use to link to the content from outside your Mini or share with other users.

### Using shareable URLs

```tsx
import {useShare} from '@shopify/shop-minis-react'


export default function ShareContent({content}) {
  const {share} = useShare()


  const handleShare = async () => {
    if (content.shareableUrl) {
      await share({
        title: content.title,
        message: content.description,
        url: content.shareableUrl,
      })
    }
  }


  return (
    <Button onPress={handleShare}>
      Share Content
    </Button>
  )
}
```

***

### Deeplinking to content

When a user opens a content link (`shop.app/mc/<public_id>`), the Shop app opens your Mini and passes the `publicId` through the deeplink. Use the `useDeeplink` hook to retrieve the content ID and display the appropriate content.

[Hook - Learn more about the useDeeplink hook](https://shopify.dev/docs/api/shop-minis/hooks/navigation/usedeeplink)

### Handling content deeplinks

```tsx
import {useDeeplink} from '@shopify/shop-minis-react'
import {ContentWrapper, Image, MinisContentStatus} from '@shopify/shop-minis-react'


export default function ContentPage() {
  const {publicId} = useDeeplink()


  if (!publicId) {
    return <div>No content specified</div>
  }


  return (
    <ContentWrapper publicId={publicId}>
      {({content, loading}) => {
        if (loading) return <div>Loading...</div>


        if (!content || content.status !== MinisContentStatus.READY) {
          return <div>Content not available</div>
        }


        return (
          <div>
            <h1>{content.title}</h1>
            {content.description && <p>{content.description}</p>}
            <Image
              src={content.image.url}
              alt={content.title}
            />
          </div>
        )
      }}
    </ContentWrapper>
  )
}
```

***

### Guidelines

When working with user-generated content, follow these guidelines:

* **Required moderation**: All user-generated images must use `useCreateImageContent` and `ContentWrapper`. This is enforced during the Mini review process.
* **Check status**: Always check the content status before displaying. Only show content with `READY` status.
* **Use the wrapper**: Never render user-generated content directly. Always use `ContentWrapper` to enable moderation reporting.
* **Content policy**: Ensure your moderation practices align with Shop's [Content Policy](https://shop.app/content-policies).
* **Additional review**: Minis with user-generated content will face additional review scrutiny during submission.

[Guide - Review submission guidelines](https://shopify.dev/docs/api/shop-minis/guidelines)

***

### Related resources

* [useCreateImageContent hook](https://shopify.dev/docs/api/shop-minis/hooks/content/usecreateimagecontent) - Create and upload image content
* [ContentWrapper component](https://shopify.dev/docs/api/shop-minis/components/primitives/contentwrapper) - Display moderated content
* [useDeeplink hook](https://shopify.dev/docs/api/shop-minis/hooks/navigation/usedeeplink) - Handle content deeplinks
* [useImagePicker hook](https://shopify.dev/docs/api/shop-minis/hooks/util/useimagepicker) - Pick images from device
* [useShare hook](https://shopify.dev/docs/api/shop-minis/hooks/util/useshare) - Share content with others
* [Guidelines](https://shopify.dev/docs/api/shop-minis/guidelines) - Review and submission requirements

***

---

<a id="deeplinks-deeplinks"></a>

## Deeplinks

## Deeplinks

Learn how to implement and test deeplinks in your Shop Mini. This guide covers deeplink structure, testing during development, and best practices for handling different entry points into your Mini.

***

### Overview

Deeplinks enable users to navigate directly to specific content within your Shop Mini. They provide seamless entry points from external sources like push notifications, marketing campaigns, or other apps directly into specific screens or features of your Mini.

Key benefits:

* **Direct navigation**: Users can jump straight to relevant content
* **Enhanced user experience**: Reduces friction by eliminating navigation steps
* **Cross-app integration**: Allow other apps and services to link directly to your Mini's content

***

### Testing Deeplinks During Development

During development, you can test how your Mini handles different deeplink paths to ensure proper navigation and parameter handling. The Shop Minis dev server provides two convenient methods for testing deeplinks.

#### Why Test Deeplinks?

Testing deeplinks during development helps you:

* Verify that navigation to specific screens works correctly
* Test entry points with query parameters
* Debug routing logic and path handling
* Ensure a smooth user experience when users arrive from external sources
* Validate that your Mini properly handles various path formats

#### Method 1: Terminal Shortcut (Press `d`)

The quickest way to test deeplinks is directly from the development terminal:

1. Start your development server with `npm start`
2. Press `d` in the terminal
3. Enter your desired path when prompted (e.g., `/recipe/123` or `/search?q=pasta`)
4. Select your target platform (iOS Simulator or Android Device/Emulator)
5. Your Mini will automatically launch with the specified deeplink path

![Terminal showing deeplink option and path prompt](https://shopify.dev/assets/assets/images/api/shop-minis/deeplink-cli-DxPYbADb.png)

#### Method 2: QR Code with Initial Path

For testing on physical iOS devices:

1. Start your development server with `npm start`
2. Press `q` to open the QR code page in your browser
3. Enter your desired path in the **"Initial Path"** field
4. Scan the QR code with your iOS device
5. Your Mini will open directly to the specified path

![QR code page showing the Initial Path input field](https://shopify.dev/assets/assets/images/api/shop-minis/deeplink-qr-BU_YEELP.png)

***

### Path Format

Paths should follow standard URL path conventions. The development server automatically handles path normalization, so both formats with and without leading slashes work correctly.

#### Basic Path Formats

* **Simple navigation**: `/about`, `/settings`, `/products`
* **Resource with ID**: `/product/123`, `/user/profile/456`
* **Query parameters**: `/search?q=shoes&category=mens`
* **Complex paths**: `/category/electronics/phones?brand=apple&sort=price`
* **Root path**: `/` (navigates to your Mini's home screen)

#### Path Normalization

Leading slashes are handled automatically by the development server:

* `/products` → normalized to `products`
* `products` → remains `products`
* `/` → special case, preserved as root

This ensures consistent behavior regardless of how developers enter paths during testing.

***

---

<a id="intents-intents"></a>

## Intents

## Intents

Intents are a communication mechanism between the Shop app and Shop Minis. One side describes an action and the other handles it and returns a result. For example, when a user wants to virtually try on a product, the Shop app launches a Mini with a try-on feature, passing it the product as context.

Eventually, intents will flow in three directions: the Shop app launching a Mini, your Mini invoking workflows in the Shop app (such as a product picker), and one Mini invoking another. Each Mini will also declare which intents it can handle, so the Shop app knows which one to launch.

Today, only the first direction works: the Shop app passes intent context as query parameters on the launch URL, and your Mini reads them with the `useIntent` hook. The rest of this guide covers that flow.

***

### How intents work

When the Shop app launches your Mini to handle an intent, it appends two query parameters to the launch URL:

* **`intentQuery`**: A string describing the action and its target, using the format `action:type,value`. For example, `try_on:shopify/Product,gid://shopify/Product/123`.
* **`intentData`**: An optional JSON-stringified object carrying additional context for the action, such as a selected variant.

Your Mini reads the intent with the [`useIntent`](https://shopify.dev/docs/api/shop-minis/hooks/intents/useintent) hook. The hook parses `intentQuery` into a `query` object with `action`, `type`, and `value` fields, and parses `intentData` into `data`.

Intent query parameters aren't tied to a specific path. `useIntent` reads them regardless of the URL's path, so intents can travel alongside a [deeplink](https://shopify.dev/docs/api/shop-minis/deeplinks) path on the same URL.

***

### Handling an intent in your Mini

Call `useIntent` to read the intent passed to your Mini. `query` is `null` when your Mini wasn't launched with an intent, so guard for that before acting. Check `query.action` and `query.type` to decide what to do, then read the context from `query.value` and `data`:

### Reading an intent

```tsx
import {useMemo} from 'react'
import {useIntent} from '@shopify/shop-minis-react'


export function useTryOnIntent() {
  const {query, data} = useIntent()


  return useMemo(() => {
    if (!query) return null
    if (query.action !== 'try_on') return null
    if (query.type !== 'shopify/Product') return null


    const productGid = query.value
    const variantGid =
      typeof data?.variantId === 'string' ? data.variantId : null


    return {productGid, variantGid}
  }, [query, data])
}
```

[API Reference - useIntent API](https://shopify.dev/docs/api/shop-minis/hooks/intents/useintent)

***

### Intent URI format

The `intentQuery` parameter uses the URI format `action:type,value`:

* **`action`**: A verb describing what the user wants to do, such as `try_on` or `view_in_room`.
* **`type`**: The kind of resource the action targets, typically a Shopify resource type like `shopify/Product`.
* **`value`**: The identifier of the resource, typically a [GID](https://shopify.dev/docs/api/usage/gids).

#### GID shorthand

When `value` is a Shopify GID, you can omit the explicit `type` and pass the GID directly after the action. `useIntent` derives `query.type` from the GID's type segment. For example, `try_on:gid://shopify/Product/123` parses as:

* `query.action`: `try_on`
* `query.type`: `shopify/Product`
* `query.value`: `gid://shopify/Product/123`

***

### Intents vs.​deeplinks

Intents and [deeplinks](https://shopify.dev/docs/api/shop-minis/deeplinks) are both entry points into your Mini, but they serve different purposes.

* Deeplinks navigate to a specific path inside your Mini, such as `/recipe/123`. Use deeplinks when an external source needs to open a particular screen.
* Intents describe a contextual action the host wants your Mini to handle, with structured data attached. Use intents when the host has context about what the user wants to accomplish.

The two aren't mutually exclusive. Intent query parameters can travel alongside a deeplink path on the same URL, and `useIntent` reads them regardless of the path.

***

### Testing during development

Test an intent by opening your Mini with a URL that includes `intentQuery` and `intentData` as query parameters, then use the [deeplink testing flow](https://shopify.dev/docs/api/shop-minis/deeplinks#testing-deeplinks-during-development): press `d` in the dev terminal, or enter the URL as the **Initial Path** in the QR code page.

Because `intentQuery` uses `:` and `,` as delimiters and GID values contain `/`, URL-encode each query parameter value. `intentData` is a JSON-stringified object, so encode its `{`, `"`, and `:` characters too.

The following URL encodes `view_in_room:gid://shopify/Product/123` as `intentQuery` and `{"variantId":"gid://shopify/ProductVariant/456"}` as `intentData`:

### Encoded intent URL

```txt
https://shop.app/mini/my-mini/?intentQuery=view_in_room%3Agid%3A%2F%2Fshopify%2FProduct%2F123&intentData=%7B%22variantId%22%3A%22gid%3A%2F%2Fshopify%2FProductVariant%2F456%22%7D
```

To avoid hand-encoding, build the URL with the `URL` API:

### Building an intent URL

```tsx
const url = new URL('https://shop.app/mini/my-mini/')
url.searchParams.set('intentQuery', 'view_in_room:gid://shopify/Product/123')
url.searchParams.set(
  'intentData',
  JSON.stringify({variantId: 'gid://shopify/ProductVariant/456'}),
)
```

***

---

<a id="navigation-transitions-navigation-transitions"></a>

## Navigation transitions

## Navigation transitions

Learn how to implement smooth navigation transitions in your Shop Mini. This guide covers MinisRouter setup, TransitionLink usage, and custom navigation patterns for creating fluid, app-like experiences.

***

### Overview

Shop Minis support smooth navigation transitions, providing native app-like page transitions. When enabled, navigations slide smoothly between pages with configurable animations.

Key features:

* **Automatic animations**: Forward navigation slides from right, back navigation slides from left
* **Gesture support**: Detects iOS swipe gestures and Android back button for appropriate animations

***

### Quick Start

To enable navigation transitions in your Shop Mini, wrap your app with MinisRouter and set the `viewTransitions` prop:

### Enable navigation transitions

### App.tsx

```tsx
import {MinisRouter} from '@shopify/shop-minis-react'
import {Routes, Route} from 'react-router'


function App() {
  return (
    <MinisRouter viewTransitions>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:id" element={<ProductPage />} />
      </Routes>
    </MinisRouter>
  )
}
```

***

### Navigation Components

Shop Minis provides two main ways to navigate with transitions:

#### Transition​Link Component

Use TransitionLink for declarative navigation links:

[API Reference - TransitionLink API](https://shopify.dev/docs/api/shop-minis/components/navigation/transitionlink)

### Using TransitionLink

```tsx
import {TransitionLink} from '@shopify/shop-minis-react'


function ProductCard({product}) {
  return (
    <div className="product-card">
      <TransitionLink to={`/products/${product.id}`}>
        <img src={product.image} alt={product.title} />
        <h3>{product.title}</h3>
      </TransitionLink>
    </div>
  )
}
```

***

### Programmatic Navigation

#### use​Navigate​With​Transition Hook

For programmatic navigation with transitions, use the useNavigateWithTransition hook:

[API Reference - useNavigateWithTransition API](https://shopify.dev/docs/api/shop-minis/hooks/navigation/usenavigatewithtransition)

### Using the navigation hook

```tsx
import {useNavigateWithTransition} from '@shopify/shop-minis-react'
import {Button} from '@shopify/shop-minis-react'


function CheckoutButton() {
  const navigateWithTransition = useNavigateWithTransition()


  const handleClick = () => {
    // Perform validation or API calls
    // Navigate with smooth transition
    navigateWithTransition('/checkout')
  }


  return (
    <Button onClick={handleClick}>
      Proceed to Checkout
    </Button>
  )
}
```

***

### Back Navigation

When navigating back (pop/back button), the old page slides right and fades out, and the previous page slides in from the left. This is automatically triggered by iOS swipe gesture or Android back button. You can programmatically navigate back by using the `useNavigateWithTransition` hook with a negative number.

### Back Navigation

```tsx
import {useNavigateWithTransition} from '@shopify/shop-minis-react'


const navigateWithTransition = useNavigateWithTransition()


// Go back one page
navigateWithTransition(-1)
```

***

### Best Practices

* **Use TransitionLink for static navigation**: TransitionLink is optimized for declarative navigation
* **Batch state updates**: Perform state updates before navigation to avoid mid-transition renders
* **Respect prefers-reduced-motion**: The default styles disable animations when users prefer reduced motion

#### Accessibility

* Transitions automatically respect the `prefers-reduced-motion` media query
* Ensure focus management across page transitions
* Provide clear visual feedback during navigation

***

### Navigation Guards

You can prevent navigation by using custom click handlers:

### Conditional navigation

```tsx
import {TransitionLink} from '@shopify/shop-minis-react'


function SecureLink() {
  var canNavigateThere = false


  return (
    <TransitionLink
      to="/account"
      onClick={(e) => {
        if (!canNavigateThere) {
          e.preventDefault()
          // Show error modal instead
          console.error('You are not authorized to navigate there')
        }
      }}
    >
      Protected Page
    </TransitionLink>
  )
}
```

***

### Troubleshooting

#### Transitions Not Working

1. **Check viewTransitions prop**: Ensure MinisRouter has `viewTransitions` enabled
2. **Navigating backwards**: Check if you are using the `useNavigateWithTransition(-1)` hook to navigate backwards
3. **Absolute URLs**: TransitionLink warns about absolute URLs - use relative paths

#### Animation Issues

* **Jumpy transitions**: Ensure consistent layouts between pages
* **Missing animations**: Check CSS isn't overriding transition styles
* **Performance**: Large DOM changes during transition can cause stuttering

***

---

<a id="commands-commands"></a>

## Commands

## Commands

[api-keys generate](https://shopify.dev/docs/api/shop-minis/commands/api-keys-generate)

[Generate a new API key.](https://shopify.dev/docs/api/shop-minis/commands/api-keys-generate)

[api-keys list](https://shopify.dev/docs/api/shop-minis/commands/api-keys-list)

[List all API keys.](https://shopify.dev/docs/api/shop-minis/commands/api-keys-list)

[api-keys revoke](https://shopify.dev/docs/api/shop-minis/commands/api-keys-revoke)

[Revoke an API key.](https://shopify.dev/docs/api/shop-minis/commands/api-keys-revoke)

[build](https://shopify.dev/docs/api/shop-minis/commands/build)

[Build the Mini for production](https://shopify.dev/docs/api/shop-minis/commands/build)

[cancel-submission](https://shopify.dev/docs/api/shop-minis/commands/cancel-submission)

[Cancel a pending or testing submission.](https://shopify.dev/docs/api/shop-minis/commands/cancel-submission)

[check-submission](https://shopify.dev/docs/api/shop-minis/commands/check-submission)

[Check the status of your submissions.](https://shopify.dev/docs/api/shop-minis/commands/check-submission)

[create](https://shopify.dev/docs/api/shop-minis/commands/create)

[Create a new Shop Mini.](https://shopify.dev/docs/api/shop-minis/commands/create)

[dashboard](https://shopify.dev/docs/api/shop-minis/commands/dashboard)

[Launch the Shop Minis dashboard.](https://shopify.dev/docs/api/shop-minis/commands/dashboard)

[dev](https://shopify.dev/docs/api/shop-minis/commands/dev)

[Start a local development server.](https://shopify.dev/docs/api/shop-minis/commands/dev)

[disable](https://shopify.dev/docs/api/shop-minis/commands/disable)

[Disable your Shop Mini.](https://shopify.dev/docs/api/shop-minis/commands/disable)

[doctor](https://shopify.dev/docs/api/shop-minis/commands/doctor)

[Diagnose and fix common Node.js, iOS and Android issues.](https://shopify.dev/docs/api/shop-minis/commands/doctor)

[enable](https://shopify.dev/docs/api/shop-minis/commands/enable)

[Enable your Shop Mini.](https://shopify.dev/docs/api/shop-minis/commands/enable)

[features](https://shopify.dev/docs/api/shop-minis/commands/features)

[Manage enabled features.](https://shopify.dev/docs/api/shop-minis/commands/features)

[info](https://shopify.dev/docs/api/shop-minis/commands/info)

[Get relevant version info about OS, toolchain and libraries](https://shopify.dev/docs/api/shop-minis/commands/info)

[install](https://shopify.dev/docs/api/shop-minis/commands/install)

[Install a dependency, check existing dependencies, or fix dependency issues.](https://shopify.dev/docs/api/shop-minis/commands/install)

[reports dates](https://shopify.dev/docs/api/shop-minis/commands/reports-dates)

[List available dates for a specific report type (all dates are in UTC).](https://shopify.dev/docs/api/shop-minis/commands/reports-dates)

[reports get](https://shopify.dev/docs/api/shop-minis/commands/reports-get)

[Download a report for a specific date.](https://shopify.dev/docs/api/shop-minis/commands/reports-get)

[reports list](https://shopify.dev/docs/api/shop-minis/commands/reports-list)

[List all available report types.](https://shopify.dev/docs/api/shop-minis/commands/reports-list)

[setup](https://shopify.dev/docs/api/shop-minis/commands/setup)

[Set up a new Mini.](https://shopify.dev/docs/api/shop-minis/commands/setup)

[submit](https://shopify.dev/docs/api/shop-minis/commands/submit)

[Submit your Shop Mini for review.](https://shopify.dev/docs/api/shop-minis/commands/submit)

[upgrade](https://shopify.dev/docs/api/shop-minis/commands/upgrade)

[Upgrade your Shop Mini configuration to the latest version.](https://shopify.dev/docs/api/shop-minis/commands/upgrade)

***

---

<a id="api-keys-generate-api-keys-generate"></a>

## api-keys generate

## api-keys generate

Generate a new API key.

**Note:**

Creates a new API key for your Mini to authenticate with Shop APIs. Store the generated key securely - it won't be shown again. Use multiple keys for different environments or rotate keys regularly for security.

##### Options

* **--verbose**

  **boolean**

  Print debugging messages.

Examples

#### Examples

* ####

  ##### zsh

  ```sh
  npx shop-minis api-keys generate [options]
  ```

***

---

<a id="api-keys-list-api-keys-list"></a>

## api-keys list

## api-keys list

List all API keys.

Examples

#### Examples

* ####

  ##### zsh

  ```sh
  npx shop-minis api-keys list
  ```

***

---

<a id="api-keys-revoke-api-keys-revoke"></a>

## api-keys revoke

## api-keys revoke

Revoke an API key.

**Note:**

Permanently disables an API key if it's compromised or no longer needed. This action cannot be undone. Ensure you've generated a replacement key before revoking if your Mini depends on API access.

Examples

#### Examples

* ####

  ##### zsh

  ```sh
  npx shop-minis api-keys revoke
  ```

***

---

<a id="build-build"></a>

## build

## build

Build the Mini for production

**Note:**

Creates an optimized production bundle using Vite. This command is automatically run by `submit`, but you can use it separately to test the production build locally. The build enforces file type restrictions and validates imports for security.

Examples

#### Examples

* ####

***

---

<a id="cancel-submission-cancel-submission"></a>

## cancel-submission

## cancel-submission

Cancel a pending or testing submission.

**Note:**

Use this if you discovered issues after submitting and need to fix them before review. Only works for submissions in "pending" or "testing" status - approved or rejected submissions cannot be cancelled. After cancelling, fix the issues and submit again.

##### Options

* **--verbose**

  **boolean**

  Print debugging messages.

Examples

#### Examples

* ####

  ##### zsh

  ```sh
  npx shop-minis cancel-submission [options]
  ```

***

---

<a id="check-submission-check-submission"></a>

## check-submission

## check-submission

Check the status of your submissions.

**Note:**

Monitor your Mini's review progress after submitting. Shows the latest submission status (pending, testing, approved, rejected) and provides next steps. For rejected submissions, check your email for detailed feedback.

##### Options

* **--verbose**

  **boolean**

  Print debugging messages.

Examples

#### Examples

* ####

  ##### zsh

  ```sh
  npx shop-minis check-submission [options]
  ```

***

---

<a id="create-create"></a>

## create

## create

Create a new Shop Mini.

**Note:**

This scaffolds a new Mini project from the example template, installs dependencies, and sets up the project structure. Use this as your starting point for Mini development - it includes sample code, configuration files, and the required SDK setup.

##### Arguments

* **mini name**

  **string**

  The name of your Shop Mini.

##### Options

* **--output-dir**

  **string**

  Specify an output directory.

* **--verbose**

  **boolean**

  Print debugging messages.

Examples

#### Examples

* ####

  ##### zsh

  ```sh
  npx shop-minis create [options] [mini name]
  ```

***

---

<a id="dashboard-dashboard"></a>

## dashboard

## dashboard

Launch the Shop Minis dashboard.

Examples

#### Examples

* ####

  ##### zsh

  ```sh
  npx shop-minis dashboard
  ```

***

---

<a id="dev-dev"></a>

## dev

## dev

Start a local development server.

**Note:**

Starts a local development server with hot reload. Use this for testing your Mini locally before submission.

##### Options

* **--build-type**

  **'release' | 'nightly' | 'snapshot'**

  The type of build to perform.

* **--host**

  **string**

  The host address for the packager.

* **--snapshot-version**

  **string**

  Specify the snapshot version to use (example: 2.100.0+544).

* **--tunnel**

  **boolean**

  Use ngrok to create a tunnel to the local server.

* **--verbose**

  **boolean**

  Verbose output.

Examples

#### Examples

* ####

  ##### zsh

  ```sh
  npx shop-minis dev [options]
  ```

***

---

<a id="disable-disable"></a>

## disable

## disable

Disable your Shop Mini.

##### Options

* **--verbose**

  **boolean**

  Print debugging messages.

Examples

#### Examples

* ####

  ##### zsh

  ```sh
  npx shop-minis disable [options]
  ```

***

---

<a id="doctor-doctor"></a>

## doctor

## doctor

Diagnose and fix common Node.js, iOS and Android issues.

##### Options

* **--fix**

  **boolean**

  Attempt to fix all diagnosed issues automatically.

* **--verbose**

  **boolean**

  Print debugging messages.

Examples

#### Examples

* ####

  ##### zsh

  ```sh
  npx shop-minis doctor [options]
  ```

***

---

<a id="enable-enable"></a>

## enable

## enable

Enable your Shop Mini.

##### Options

* **--verbose**

  **boolean**

  Print debugging messages.

Examples

#### Examples

* ####

  ##### zsh

  ```sh
  npx shop-minis enable [options]
  ```

***

---

<a id="features-features"></a>

## features

## features

Manage enabled features.

**Note:**

Toggle experimental or beta features in your Mini. These features provide early access to new SDK capabilities but may change before general release. Enable features to test upcoming functionality, disable if you encounter issues.

##### Options

* **--disable**

  **string**

  Disable a specific feature.

* **--enable**

  **string**

  Enable a specific feature.

Examples

#### Examples

* ####

  ##### zsh

  ```sh
  npx shop-minis features [options]
  ```

***

---

<a id="info-info"></a>

## info

## info

Get relevant version info about OS, toolchain and libraries

##### Options

* **--verbose**

  **boolean**

  print debugging messages

Examples

#### Examples

* ####

  ##### zsh

  ```sh
  npx shop-minis info [options]
  ```

***

---

<a id="install-install"></a>

## install

## install

Install a dependency, check existing dependencies, or fix dependency issues.

##### Arguments

* **dependency**

  **string**

  The dependency to install (e.g., react@^18.0.0).

##### Options

* **--check**

  **boolean**

  Check that installed dependencies are valid.

* **--fix**

  **boolean**

  Fix dependency issues by adding, updating, or removing dependencies.

* **--json**

  **boolean**

  Output dependency check results as JSON (only with --check).

Examples

#### Examples

* ####

  ##### zsh

  ```sh
  npx shop-minis install [options] [dependency]
  ```

***

---

<a id="reports-dates-reports-dates"></a>

## reports dates

## reports dates

List available dates for a specific report type (all dates are in UTC).

**Note:**

Check which dates have data available for a specific report type before downloading. Reports are generated daily with a processing delay, so the most recent data may be from 1-2 days ago.

##### Arguments

* **report-type**

  **string**

  **required**

  The report type (CONTENT\_IMPRESSIONS, PRODUCT\_IMPRESSIONS, SALES, USAGE\_STATS)

##### Options

* **--raw**

  **boolean**

  Display only the dates without headers or formatting

Examples

#### Examples

* ####

  ##### zsh

  ```sh
  npx shop-minis reports dates [options] <report-type>
  ```

***

---

<a id="reports-get-reports-get"></a>

## reports get

## reports get

Download a report for a specific date.

**Note:**

Downloads analytics data for a specific report type and date. Reports are typically in CSV format for easy analysis in spreadsheets or data tools. Complete the workflow: list → dates → get to access your Mini's analytics.

##### Arguments

* **date**

  **string**

  **required**

  The date for the report in UTC (YYYY-MM-DD format)

* **report-type**

  **string**

  **required**

  The report type (see `reports list`)

##### Options

* **--output**

  **string**

  Output file path (defaults to report\_

Examples

#### Examples

* ####

  ##### zsh

  ```sh
  npx shop-minis reports get [options] <report-type> <date>
  ```

***

---

<a id="reports-list-reports-list"></a>

## reports list

## reports list

List all available report types.

**Note:**

Discover what analytics reports are available for your Mini. Reports provide insights into user engagement, performance metrics, and business data. Use this to see report types before checking available dates and downloading specific reports.

Examples

#### Examples

* ####

  ##### zsh

  ```sh
  npx shop-minis reports list
  ```

***

---

<a id="setup-setup"></a>

## setup

## setup

Set up a new Mini.

**Note:**

Run this after creating a project with `create` or when joining an existing Mini project. This registers your Mini with Shopify Partners, links it to your organization, generates API keys, and saves them to your .env file. Required before you can submit your Mini for review.

##### Options

* **--regenerate-key**

  **boolean**

  Regenerate the API key for an existing Mini and update the .env file.

Examples

#### Examples

* ####

  ##### zsh

  ```sh
  npx shop-minis setup [options]
  ```

***

---

<a id="submit-submit"></a>

## submit

## submit

Submit your Shop Mini for review.

**Note:**

Runs TypeScript checks, lint checks, and dependency validation before building and uploading your Mini to Shopify's review queue. You must accept the Shop Minis Developer Terms to proceed. Use this after local testing when you're ready to publish or update your Mini.

##### Options

* **--description**

  **boolean**

  A description of the changes in this submission.

* **--verbose**

  **boolean**

  Print debugging messages.

Examples

#### Examples

* ####

  ##### zsh

  ```sh
  npx shop-minis submit [options]
  ```

***

---

<a id="upgrade-upgrade"></a>

## upgrade

## upgrade

Upgrade your Shop Mini configuration to the latest version.

**Note:**

Updates CLI and SDK packages to their latest versions and optionally runs codemods for breaking changes. Run this periodically to get new features, bug fixes, and security updates. The upgrade process preserves your code while updating dependencies.

##### Options

* **--no-codemod**

  **boolean**

  Skip running codemods after upgrading packages.

* **--verbose**

  **boolean**

  Print debugging messages.

* **--yes**

  **boolean**

  Automatically answer prompts with default options.

Examples

#### Examples

* ####

  ##### zsh

  ```sh
  npx shop-minis upgrade [options]
  ```

***

---

<a id="components-components"></a>

## Components

## Components

***

### Commerce

[![AddToCartButton](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/shop-minis/AddToCartButton-DURzwURn.png)![AddToCartButton](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/shop-minis/AddToCartButton-DURzwURn.png)](https://shopify.dev/docs/api/shop-minis/components/commerce/addtocartbutton)

[Add​To​Cart​Button](https://shopify.dev/docs/api/shop-minis/components/commerce/addtocartbutton)

[Adds products to Shop's cart with checkmark animation feedback.](https://shopify.dev/docs/api/shop-minis/components/commerce/addtocartbutton)

[![BuyNowButton](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/shop-minis/BuyNowButton-BfqFltBR.png)![BuyNowButton](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/shop-minis/BuyNowButton-BfqFltBR.png)](https://shopify.dev/docs/api/shop-minis/components/commerce/buynowbutton)

[Buy​Now​Button](https://shopify.dev/docs/api/shop-minis/components/commerce/buynowbutton)

[Navigates directly to Shop's express checkout, bypassing the cart entirely.](https://shopify.dev/docs/api/shop-minis/components/commerce/buynowbutton)

[![FavoriteButton](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/shop-minis/FavoriteButton-D9OAhJlP.png)![FavoriteButton](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/shop-minis/FavoriteButton-D9OAhJlP.png)](https://shopify.dev/docs/api/shop-minis/components/commerce/favoritebutton)

[Favorite​Button](https://shopify.dev/docs/api/shop-minis/components/commerce/favoritebutton)

[A button component for toggling a favorite state, typically used for products.](https://shopify.dev/docs/api/shop-minis/components/commerce/favoritebutton)

[![MerchantCard](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/shop-minis/MerchantCard-BEB5ARky.png)![MerchantCard](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/shop-minis/MerchantCard-BEB5ARky.png)](https://shopify.dev/docs/api/shop-minis/components/commerce/merchantcard)

[Merchant​Card](https://shopify.dev/docs/api/shop-minis/components/commerce/merchantcard)

[Use when showcasing merchants as destinations, not just product sources.](https://shopify.dev/docs/api/shop-minis/components/commerce/merchantcard)

[![ProductCard](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/shop-minis/ProductCard-Bcgva7c6.png)![ProductCard](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/shop-minis/ProductCard-Bcgva7c6.png)](https://shopify.dev/docs/api/shop-minis/components/commerce/productcard)

[Product​Card](https://shopify.dev/docs/api/shop-minis/components/commerce/productcard)

[Optimized for grid layouts with three variants: default, priceOverlay, and compact.](https://shopify.dev/docs/api/shop-minis/components/commerce/productcard)

[![ProductLink](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/shop-minis/ProductLink-DUa0xTsk.png)![ProductLink](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/shop-minis/ProductLink-DUa0xTsk.png)](https://shopify.dev/docs/api/shop-minis/components/commerce/productlink)

[Product​Link](https://shopify.dev/docs/api/shop-minis/components/commerce/productlink)

[A list item component for displaying products in search results, lists, and feeds.](https://shopify.dev/docs/api/shop-minis/components/commerce/productlink)

[![Search](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/shop-minis/Search-LNQULaaC.png)![Search](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/shop-minis/Search-LNQULaaC.png)](https://shopify.dev/docs/api/shop-minis/components/commerce/search)

[Search](https://shopify.dev/docs/api/shop-minis/components/commerce/search)

[Product search with automatic debouncing via useProductSearch hook.](https://shopify.dev/docs/api/shop-minis/components/commerce/search)

***

### Navigation

[Minis​Router](https://shopify.dev/docs/api/shop-minis/components/components-navigation/minisrouter)

[MinisRouter is the main routing component for Shop Minis that wraps React Router's BrowserRouter and provides optional support for smooth navigation transitions using the CSS View Transitions API.](https://shopify.dev/docs/api/shop-minis/components/components-navigation/minisrouter)

[Static​Area](https://shopify.dev/docs/api/shop-minis/components/components-navigation/staticarea)

[A layout wrapper that prevents header and footer content from animating during screen view transitions.](https://shopify.dev/docs/api/shop-minis/components/components-navigation/staticarea)

[Transition​Link](https://shopify.dev/docs/api/shop-minis/components/components-navigation/transitionlink)

[Navigation component that triggers animated page changes based on CSS View Transitions.](https://shopify.dev/docs/api/shop-minis/components/components-navigation/transitionlink)

***

### Primitives

[![Accordion](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/shop-minis/Accordion-CO-d2J-l.png)![Accordion](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/shop-minis/Accordion-CO-d2J-l.png)](https://shopify.dev/docs/api/shop-minis/components/primitives/accordion)

[Accordion](https://shopify.dev/docs/api/shop-minis/components/primitives/accordion)

[A component with multiple configuration options for collapsing and expanding content.](https://shopify.dev/docs/api/shop-minis/components/primitives/accordion)

[![Alert](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/shop-minis/Alert-B8MIwEDy.png)![Alert](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/shop-minis/Alert-B8MIwEDy.png)](https://shopify.dev/docs/api/shop-minis/components/primitives/alert)

[Alert](https://shopify.dev/docs/api/shop-minis/components/primitives/alert)

[A component with a title and description, available in different visual variants.](https://shopify.dev/docs/api/shop-minis/components/primitives/alert)

[![AlertDialog](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/shop-minis/AlertDialog-DQhTgumo.png)![AlertDialog](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/shop-minis/AlertDialog-DQhTgumo.png)](https://shopify.dev/docs/api/shop-minis/components/primitives/alertdialog)

[Alert​Dialog](https://shopify.dev/docs/api/shop-minis/components/primitives/alertdialog)

[A composable component for important confirmations and alerts with customizable actions.](https://shopify.dev/docs/api/shop-minis/components/primitives/alertdialog)

[![Avatar](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/shop-minis/Avatar-DFKULvt_.png)![Avatar](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/shop-minis/Avatar-DFKULvt_.png)](https://shopify.dev/docs/api/shop-minis/components/primitives/avatar)

[Avatar](https://shopify.dev/docs/api/shop-minis/components/primitives/avatar)

[A component used for displaying user avatars, with image support and fallback initials for when the image fails to load.](https://shopify.dev/docs/api/shop-minis/components/primitives/avatar)

[![Badge](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/shop-minis/Badge-CoClgcIr.png)![Badge](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/shop-minis/Badge-CoClgcIr.png)](https://shopify.dev/docs/api/shop-minis/components/primitives/badge)

[Badge](https://shopify.dev/docs/api/shop-minis/components/primitives/badge)

[A component for displaying status, categories, or labels with multiple visual variants.](https://shopify.dev/docs/api/shop-minis/components/primitives/badge)

[![Button](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/shop-minis/Button-CIXtNuGa.png)![Button](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/shop-minis/Button-CIXtNuGa.png)](https://shopify.dev/docs/api/shop-minis/components/primitives/button)

[Button](https://shopify.dev/docs/api/shop-minis/components/primitives/button)

[A versatile button component with multiple variants and sizes for user interactions.](https://shopify.dev/docs/api/shop-minis/components/primitives/button)

[![Card](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/shop-minis/Card-TQz3aNUn.png)![Card](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/shop-minis/Card-TQz3aNUn.png)](https://shopify.dev/docs/api/shop-minis/components/primitives/card)

[Card](https://shopify.dev/docs/api/shop-minis/components/primitives/card)

[A composable component with header, content, and footer sections for displaying grouped information.](https://shopify.dev/docs/api/shop-minis/components/primitives/card)

[![Checkbox](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/shop-minis/Checkbox-DqXhIg9H.png)![Checkbox](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/shop-minis/Checkbox-DqXhIg9H.png)](https://shopify.dev/docs/api/shop-minis/components/primitives/checkbox)

[Checkbox](https://shopify.dev/docs/api/shop-minis/components/primitives/checkbox)

[A component for boolean selections with checked and disabled states.](https://shopify.dev/docs/api/shop-minis/components/primitives/checkbox)

[Content​Wrapper](https://shopify.dev/docs/api/shop-minis/components/primitives/contentwrapper)

[The ContentWrapper component fetches and provides user-generated content data using a render function pattern.](https://shopify.dev/docs/api/shop-minis/components/primitives/contentwrapper)

[![IconButton](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/shop-minis/IconButton-BILarkue.png)![IconButton](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/shop-minis/IconButton-BILarkue.png)](https://shopify.dev/docs/api/shop-minis/components/primitives/iconbutton)

[Icon​Button](https://shopify.dev/docs/api/shop-minis/components/primitives/iconbutton)

[A button component that displays an icon in various sizes.](https://shopify.dev/docs/api/shop-minis/components/primitives/iconbutton)

[![Image](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/shop-minis/Image-C9beFiEF.png)![Image](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/shop-minis/Image-C9beFiEF.png)](https://shopify.dev/docs/api/shop-minis/components/primitives/image)

[Image](https://shopify.dev/docs/api/shop-minis/components/primitives/image)

[An optimized image component that handles File objects, remote URLs, blob URL lifecycle management, and progressive loading with thumbhash placeholders.](https://shopify.dev/docs/api/shop-minis/components/primitives/image)

[![ImageContentWrapper](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/shop-minis/ImageContentWrapper-CCCT-QPA.png)![ImageContentWrapper](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/shop-minis/ImageContentWrapper-CCCT-QPA.png)](https://shopify.dev/docs/api/shop-minis/components/primitives/imagecontentwrapper)

[Image​Content​Wrapper](https://shopify.dev/docs/api/shop-minis/components/primitives/imagecontentwrapper)

[The ImageContentWrapper component renders images uploaded via the useCreateImageContent hook.](https://shopify.dev/docs/api/shop-minis/components/primitives/imagecontentwrapper)

[![Input](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/shop-minis/Input-5RlWEw42.png)![Input](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/shop-minis/Input-5RlWEw42.png)](https://shopify.dev/docs/api/shop-minis/components/primitives/input)

[Input](https://shopify.dev/docs/api/shop-minis/components/primitives/input)

[A simple component for inputting text.](https://shopify.dev/docs/api/shop-minis/components/primitives/input)

[![Label](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/shop-minis/Label-W1qfhO_u.png)![Label](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/shop-minis/Label-W1qfhO_u.png)](https://shopify.dev/docs/api/shop-minis/components/primitives/label)

[Label](https://shopify.dev/docs/api/shop-minis/components/primitives/label)

[A simple component to render accessible text.](https://shopify.dev/docs/api/shop-minis/components/primitives/label)

[![List](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/shop-minis/List-Dzvqt0pR.png)![List](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/shop-minis/List-Dzvqt0pR.png)](https://shopify.dev/docs/api/shop-minis/components/primitives/list)

[List](https://shopify.dev/docs/api/shop-minis/components/primitives/list)

[A virtualized list component for efficiently rendering large datasets with customizable item rendering and built-in pull-to-refresh functionality.](https://shopify.dev/docs/api/shop-minis/components/primitives/list)

[![ProductVariantPrice](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/shop-minis/ProductVariantPrice-DL6-fqjv.png)![ProductVariantPrice](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/shop-minis/ProductVariantPrice-DL6-fqjv.png)](https://shopify.dev/docs/api/shop-minis/components/primitives/productvariantprice)

[Product​Variant​Price](https://shopify.dev/docs/api/shop-minis/components/primitives/productvariantprice)

[A component for displaying product pricing with support for discounts and custom styling.](https://shopify.dev/docs/api/shop-minis/components/primitives/productvariantprice)

[![Progress](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/shop-minis/Progress-BItSq2tT.png)![Progress](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/shop-minis/Progress-BItSq2tT.png)](https://shopify.dev/docs/api/shop-minis/components/primitives/progress)

[Progress](https://shopify.dev/docs/api/shop-minis/components/primitives/progress)

[A component for showing completion status or loading progress.](https://shopify.dev/docs/api/shop-minis/components/primitives/progress)

[![QuantitySelector](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/shop-minis/QuantitySelector-5t-Rijfk.png)![QuantitySelector](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/shop-minis/QuantitySelector-5t-Rijfk.png)](https://shopify.dev/docs/api/shop-minis/components/primitives/quantityselector)

[Quantity​Selector](https://shopify.dev/docs/api/shop-minis/components/primitives/quantityselector)

[A component with increment and decrement buttons for adjusting quantities.](https://shopify.dev/docs/api/shop-minis/components/primitives/quantityselector)

[![RadioGroup](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/shop-minis/RadioGroup--4BW95Eq.png)![RadioGroup](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/shop-minis/RadioGroup--4BW95Eq.png)](https://shopify.dev/docs/api/shop-minis/components/primitives/radiogroup)

[Radio​Group](https://shopify.dev/docs/api/shop-minis/components/primitives/radiogroup)

[A radio group component for single-selection options.](https://shopify.dev/docs/api/shop-minis/components/primitives/radiogroup)

[Safe​Area](https://shopify.dev/docs/api/shop-minis/components/primitives/safearea)

[A container that applies safe area insets as padding or margin, ensuring content is not hidden behind system UI such as the home indicator on iOS or the navigation bar on Android.](https://shopify.dev/docs/api/shop-minis/components/primitives/safearea)

[![Select](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/shop-minis/Select-Dt8p_dBz.png)![Select](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/shop-minis/Select-Dt8p_dBz.png)](https://shopify.dev/docs/api/shop-minis/components/primitives/select)

[Select](https://shopify.dev/docs/api/shop-minis/components/primitives/select)

[A dropdown component with support for grouped options and disabled states.](https://shopify.dev/docs/api/shop-minis/components/primitives/select)

[![Skeleton](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/shop-minis/Skeleton-DgxxHNX5.png)![Skeleton](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/shop-minis/Skeleton-DgxxHNX5.png)](https://shopify.dev/docs/api/shop-minis/components/primitives/skeleton)

[Skeleton](https://shopify.dev/docs/api/shop-minis/components/primitives/skeleton)

[A placeholder component for loading states, with customizable dimensions.](https://shopify.dev/docs/api/shop-minis/components/primitives/skeleton)

[![TextInput](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/shop-minis/TextInput-CXFoQtDo.png)![TextInput](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/shop-minis/TextInput-CXFoQtDo.png)](https://shopify.dev/docs/api/shop-minis/components/primitives/textinput)

[Text​Input](https://shopify.dev/docs/api/shop-minis/components/primitives/textinput)

[A wrapper around the base Input that automatically adjusts the layout to keep the focused field visible when the on-screen keyboard appears.](https://shopify.dev/docs/api/shop-minis/components/primitives/textinput)

[![Toaster](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/shop-minis/Toaster-qCBDq-jv.png)![Toaster](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/shop-minis/Toaster-qCBDq-jv.png)](https://shopify.dev/docs/api/shop-minis/components/primitives/toaster)

[Toaster](https://shopify.dev/docs/api/shop-minis/components/primitives/toaster)

[A notification component that shows up from the bottom, in various states.](https://shopify.dev/docs/api/shop-minis/components/primitives/toaster)

[Touchable](https://shopify.dev/docs/api/shop-minis/components/primitives/touchable)

[Animated wrapper providing native-like tap feedback.](https://shopify.dev/docs/api/shop-minis/components/primitives/touchable)

[![VideoPlayer](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/shop-minis/VideoPlayer-5jH-I4pB.png)![VideoPlayer](https://cdn.shopify.com/shopifycloud/shopify-dev/development/assets/assets/images/templated-apis-screenshots/shop-minis/VideoPlayer-5jH-I4pB.png)](https://shopify.dev/docs/api/shop-minis/components/primitives/videoplayer)

[Video​Player](https://shopify.dev/docs/api/shop-minis/components/primitives/videoplayer)

[Video.js-powered player with automatic format handling.](https://shopify.dev/docs/api/shop-minis/components/primitives/videoplayer)

***

---

<a id="minisrouter-minisrouter"></a>

## MinisRouter

## MinisRouter

MinisRouter is the main routing component for Shop Minis that wraps React Router's BrowserRouter and provides optional support for smooth navigation transitions using the CSS View Transitions API. It should be placed at the root of your application to enable client-side routing.

##### Props

* **basename**

  **string**

* **children**

  **React.ReactNode**

* **viewTransitions**

  **boolean**

* **window**

  **Window**

Examples

#### Examples

* ####

  ##### tsx

  ```tsx
  import React from 'react'
  import {MinisRouter} from '@shopify/shop-minis-react'
  import {Routes, Route} from 'react-router'

  import {HomePage, ProductPage, CartPage} from './pages'

  function App() {
    return (
      <MinisRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </MinisRouter>
    )
  }

  export default App
  ```

* ####

  ##### Description

  Basic routing setup without transitions

  ##### tsx

  ```tsx
  import React from 'react'
  import {MinisRouter} from '@shopify/shop-minis-react'
  import {Routes, Route} from 'react-router'

  import {HomePage, ProductPage, CartPage} from './pages'

  function App() {
    return (
      <MinisRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </MinisRouter>
    )
  }

  export default App
  ```

* ####

  ##### Description

  Enable smooth navigation transitions with CSS View Transitions API

  ##### tsx

  ```tsx
  import React from 'react'
  import {MinisRouter} from '@shopify/shop-minis-react'
  import {Routes, Route} from 'react-router'

  import {HomePage} from './HomePage'
  import {ProductPage} from './ProductPage'
  import {CartPage} from './CartPage'

  function App() {
    return (
      // Enable view transitions for smooth navigation animations
      <MinisRouter viewTransitions>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </MinisRouter>
    )
  }

  export default App
  ```

* ####

  ##### Description

  Complete navigation setup with TransitionLink components

  ##### tsx

  ```tsx
  import React from 'react'
  import {
    MinisRouter,
    TransitionLink,
    useNavigateWithTransition,
  } from '@shopify/shop-minis-react'
  import {Routes, Route} from 'react-router'
  import {Button} from '@shopify/shop-minis-react'

  function HomePage() {
    const navigateWithTransition = useNavigateWithTransition()

    return (
      <div>
        <h1>Home</h1>

        {/* Use TransitionLink for smooth navigation with transitions */}
        <TransitionLink to="/products/123">View Product</TransitionLink>

        {/* Or use the hook for programmatic navigation */}
        <Button onPress={() => navigateWithTransition('/cart')}>
          Go to Cart
        </Button>
      </div>
    )
  }

  function ProductPage() {
    const navigateWithTransition = useNavigateWithTransition()

    return (
      <div>
        <h1>Product Details</h1>

        {/* Navigate back with smooth transition */}
        <Button onPress={() => navigateWithTransition(-1)}>Go Back</Button>
      </div>
    )
  }

  function App() {
    return (
      // Enable view transitions for the entire app
      <MinisRouter viewTransitions>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/cart" element={<div>Cart Page</div>} />
        </Routes>
      </MinisRouter>
    )
  }

  export default App
  ```

***

---

<a id="staticarea-staticarea"></a>

## StaticArea

## StaticArea

A layout wrapper that prevents header and footer content from animating during screen view transitions. Use this to keep navigation bars, headers, footers or bottom tab bars fixed in place while page content animates.

**Caution:**

Only use one StaticArea per position (top or bottom) in your app. Multiple StaticAreas with the same position will have duplicate view transition names, which will cause view transitions to fail.

##### Props

* **position**

  **'top' | 'bottom'**

  **required**

  Position of the fixed area on screen - either pinned to top or bottom

* **children**

  **React.ReactNode**

  Static area content

Examples

#### Examples

* ####

  ##### tsx

  ```tsx
  import {StaticArea} from '@shopify/shop-minis-react'

  function MyHeader() {
    return (
      <StaticArea position="top">
        <header className="p-4 bg-white border-b">
          <h1>My App Header</h1>
        </header>
      </StaticArea>
    )
  }

  export default MyHeader
  ```

* ####

  ##### Description

  Fixed header at the top of the screen

  ##### tsx

  ```tsx
  import {StaticArea} from '@shopify/shop-minis-react'

  function MyHeader() {
    return (
      <StaticArea position="top">
        <header className="p-4 bg-white border-b">
          <h1>My App Header</h1>
        </header>
      </StaticArea>
    )
  }

  export default MyHeader
  ```

* ####

  ##### Description

  Fixed footer at the bottom of the screen

  ##### tsx

  ```tsx
  import {StaticArea} from '@shopify/shop-minis-react'

  function MyFooter() {
    return (
      <StaticArea position="bottom">
        <footer className="p-4 bg-white border-t">
          <nav className="flex justify-around">
            <button>Home</button>
            <button>Search</button>
            <button>Cart</button>
          </nav>
        </footer>
      </StaticArea>
    )
  }

  export default MyFooter
  ```

***

---

<a id="transitionlink-transitionlink"></a>

## TransitionLink

## TransitionLink

Navigation component that triggers animated page changes based on CSS View Transitions. Use instead of React Router's `Link` or `<a>` tags when you want smooth native feeling navigation within your Mini. Should be wrapped within a `MinisRouter`.

**Caution:**

In order for the animation transitions to work, you need to enable view transitions in `MinisRouter`

##### Props

* **to**

  **string**

  **required**

  The target path to navigate to

* **children**

  **React.ReactNode**

  Content to render inside the link

* **onClick**

  **React.MouseEventHandler\<HTMLAnchorElement>**

  Click handler called before navigation

Examples

#### Examples

* ####

  ##### tsx

  ```tsx
  import React from 'react'
  import {MinisRouter, TransitionLink} from '@shopify/shop-minis-react'
  import {Routes, Route} from 'react-router'

  function Navigation() {
    return (
      <nav>
        <TransitionLink to="/">Home</TransitionLink>
        <TransitionLink to="/products">Products</TransitionLink>
        <TransitionLink to="/cart">Cart</TransitionLink>
      </nav>
    )
  }

  function App() {
    return (
      <div>
        <MinisRouter viewTransitions>
          <Routes>
            <Route path="/" element={<Navigation />} />
          </Routes>
        </MinisRouter>
      </div>
    )
  }

  export default App
  ```

* ####

  ##### Description

  Basic navigation link with transitions

  ##### tsx

  ```tsx
  import React from 'react'
  import {MinisRouter, TransitionLink} from '@shopify/shop-minis-react'
  import {Routes, Route} from 'react-router'

  function Navigation() {
    return (
      <nav>
        <TransitionLink to="/">Home</TransitionLink>
        <TransitionLink to="/products">Products</TransitionLink>
        <TransitionLink to="/cart">Cart</TransitionLink>
      </nav>
    )
  }

  function App() {
    return (
      <div>
        <MinisRouter viewTransitions>
          <Routes>
            <Route path="/" element={<Navigation />} />
          </Routes>
        </MinisRouter>
      </div>
    )
  }

  export default App
  ```

* ####

  ##### Description

  Styled navigation link with custom classes

  ##### tsx

  ```tsx
  import React from 'react'
  import {TransitionLink} from '@shopify/shop-minis-react'

  function StyledNavigation() {
    return (
      <nav className="navigation">
        <TransitionLink
          to="/products/123"
          className="product-link"
          style={{ color: '#007AFF', textDecoration: 'none' }}
        >
          View Product Details
        </TransitionLink>

        <TransitionLink
          to="/cart"
          className="cart-link"
          aria-label="Go to shopping cart"
        >
          <span>Shopping Cart</span>
          <span className="cart-count">(3)</span>
        </TransitionLink>
      </nav>
    )
  }

  export default StyledNavigation
  ```

* ####

  ##### Description

  Navigation with custom click handler

  ##### tsx

  ```tsx
  import React from 'react'
  import {TransitionLink} from '@shopify/shop-minis-react'

  function NavigationWithAnalytics() {
    const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
      // Track analytics event
      console.log('Navigation clicked:', event.currentTarget.href)

      // You can prevent navigation by calling event.preventDefault()
      // event.preventDefault()
    }

    return (
      <div>
        <TransitionLink
          to="/products/special-offer"
          onClick={handleLinkClick}
        >
          Special Offer - Click tracking enabled
        </TransitionLink>

        <TransitionLink
          to="/checkout"
          onClick={(e) => {
            // Confirm before navigating
            const confirmed = window.confirm('Proceed to checkout?')
            if (!confirmed) {
              e.preventDefault()
            }
          }}
        >
          Proceed to Checkout
        </TransitionLink>
      </div>
    )
  }

  export default NavigationWithAnalytics
  ```

***

---

<a id="accordion-accordion"></a>

## Accordion

## Accordion

A component with multiple configuration options for collapsing and expanding content. For full props documentation, see [Radix Accordion](https://www.radix-ui.com/primitives/docs/components/accordion).

Examples

### Preview

![accordion](https://shopify.dev/assets/assets/images/templated-apis-screenshots/shop-minis/Accordion-CO-d2J-l.png)

#### Examples

* ####

  ##### tsx

  ```tsx
  import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from '@shopify/shop-minis-react'

  export default function MyComponent() {
    return (
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Can I open multiple items?</AccordionTrigger>
          <AccordionContent>
            Yes, you can open multiple items at the same time with the multiple
            type.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it customizable?</AccordionTrigger>
          <AccordionContent>
            Yes, you can customize the styling and behavior to match your needs.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
  ```

* ####

  ##### Description

  A basic collapsible accordion with single item open

  ##### tsx

  ```tsx
  import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from '@shopify/shop-minis-react'

  export default function MyComponent() {
    return (
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Can I open multiple items?</AccordionTrigger>
          <AccordionContent>
            Yes, you can open multiple items at the same time with the multiple
            type.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it customizable?</AccordionTrigger>
          <AccordionContent>
            Yes, you can customize the styling and behavior to match your needs.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
  ```

* ####

  ##### Description

  An accordion allowing multiple items to be open simultaneously

  ##### tsx

  ```tsx
  import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from '@shopify/shop-minis-react'

  export default function MyComponent() {
    return (
      <Accordion type="multiple">
        <AccordionItem value="item-1">
          <AccordionTrigger>Can I open multiple items?</AccordionTrigger>
          <AccordionContent>
            Yes, you can open multiple items at the same time with the multiple
            type.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it customizable?</AccordionTrigger>
          <AccordionContent>
            Yes, you can customize the styling and behavior to match your needs.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
  ```

* ####

  ##### Description

  An accordion that cannot be collapsed once opened

  ##### tsx

  ```tsx
  import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from '@shopify/shop-minis-react'

  export default function MyComponent() {
    return (
      <Accordion type="single" collapsible={false}>
        <AccordionItem value="item-1">
          <AccordionTrigger>Can I collapse this?</AccordionTrigger>
          <AccordionContent>
            No. When you set the collapsible prop to false, the accordion is not collapsible.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
  ```

***

---

<a id="alertdialog-alertdialog"></a>

## AlertDialog

## AlertDialog

A composable component for important confirmations and alerts with customizable actions.

##### Props

* **children**

  **React.ReactNode**

  **required**

  The trigger element that opens the alert dialog

* **description**

  **string**

  **required**

  The description text shown in the alert dialog body

* **onConfirmationAction**

  **() => void**

  **required**

  Callback fired when the confirmation button is clicked

* **onOpenChange**

  **(open: boolean) => void**

  **required**

  Callback fired when the alert dialog open state changes

* **title**

  **string**

  **required**

  The title text shown in the alert dialog header

* **cancelButtonText**

  **string**

  The text shown in the cancel button

* **confirmationButtonText**

  **string**

  The text shown in the confirmation button

* **open**

  **boolean**

  Whether the alert dialog is open

Examples

### Preview

![alertdialog](https://shopify.dev/assets/assets/images/templated-apis-screenshots/shop-minis/AlertDialog-DQhTgumo.png)

#### Examples

* ####

  ##### tsx

  ```tsx
  import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
    Button,
  } from '@shopify/shop-minis-react'

  export default function MyComponent() {
    const handleConfirm = () => {
      console.log('Confirmed')
    }

    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline">Show Dialog</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleConfirm}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }
  ```

***

---

<a id="alert-alert"></a>

## Alert

## Alert

A component with a title and description, available in different visual variants.

##### Props

* **children**

  **React.ReactNode**

  Content to render inside

* **variant**

  **'default' | 'destructive'**

  Visual style variant

Examples

### Preview

![alert](https://shopify.dev/assets/assets/images/templated-apis-screenshots/shop-minis/Alert-B8MIwEDy.png)

#### Examples

* ####

  ##### tsx

  ```tsx
  import {Alert, AlertTitle, AlertDescription} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    return (
      <Alert variant="default">
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using our SDK.
        </AlertDescription>
      </Alert>
    )
  }
  ```

* ####

  ##### Description

  A default alert for general notifications

  ##### tsx

  ```tsx
  import {Alert, AlertTitle, AlertDescription} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    return (
      <Alert variant="default">
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using our SDK.
        </AlertDescription>
      </Alert>
    )
  }
  ```

* ####

  ##### Description

  A destructive alert for error messages and warnings

  ##### tsx

  ```tsx
  import {Alert, AlertTitle, AlertDescription} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    return (
      <Alert variant="destructive">
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Your session has expired. Please log in again.
        </AlertDescription>
      </Alert>
    )
  }
  ```

***

---

<a id="avatar-avatar"></a>

## Avatar

## Avatar

A component used for displaying user avatars, with image support and fallback initials for when the image fails to load. For full props documentation, see [Radix Avatar](https://www.radix-ui.com/primitives/docs/components/avatar).

Examples

### Preview

![avatar](https://shopify.dev/assets/assets/images/templated-apis-screenshots/shop-minis/Avatar-DFKULvt_.png)

#### Examples

* ####

  ##### tsx

  ```tsx
  import {Avatar, AvatarFallback, AvatarImage} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    return (
      <Avatar>
        <AvatarImage src="https://example.com/avatar.png" alt="my-avatar" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    )
  }
  ```

***

---

<a id="badge-badge"></a>

## Badge

## Badge

A component for displaying status, categories, or labels with multiple visual variants.

##### Props

* **asChild**

  **boolean**

  Render as child element instead of span

* **children**

  **React.ReactNode**

  Content to render inside

* **variant**

  **'primary' | 'secondary' | 'destructive' | 'outline' | 'none'**

  Visual style variant

Examples

### Preview

![badge](https://shopify.dev/assets/assets/images/templated-apis-screenshots/shop-minis/Badge-CoClgcIr.png)

#### Examples

* ####

  ##### tsx

  ```tsx
  import React from 'react'

  import {Badge} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    return (
      <div className="flex flex-wrap gap-2">
        <Badge>Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="outline">Outline</Badge>
      </div>
    )
  }
  ```

* ####

  ##### Description

  A default badge with primary styling

  ##### tsx

  ```tsx
  import React from 'react'

  import {Badge} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    return (
      <div className="flex flex-wrap gap-2">
        <Badge>Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="outline">Outline</Badge>
      </div>
    )
  }
  ```

* ####

  ##### Description

  A secondary badge with muted styling

  ##### tsx

  ```tsx
  import {Badge} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    return <Badge variant="secondary">Secondary</Badge>
  }
  ```

* ####

  ##### Description

  A destructive badge for warnings or errors

  ##### tsx

  ```tsx
  import {Badge} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    return <Badge variant="destructive">Destructive</Badge>
  }
  ```

* ####

  ##### Description

  An outline badge with border styling

  ##### tsx

  ```tsx
  import {Badge} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    return <Badge variant="outline">Outline</Badge>
  }
  ```

***

---

<a id="button-button"></a>

## Button

## Button

A versatile button component with multiple variants and sizes for user interactions.

##### Props

* **children**

  **React.ReactNode**

  Button content

* **disabled**

  **boolean**

  Whether the button is disabled

* **onClick**

  **React.MouseEventHandler\<HTMLButtonElement>**

  Click handler

* **size**

  **'default' | 'sm' | 'lg' | 'icon'**

  Button size

* **stopPropagation**

  **boolean**

  Prevent click from bubbling to parent elements

* **variant**

  **| 'default' | 'secondary' | 'destructive' | 'outline' | 'ghost' | 'link' | 'icon'**

  Visual style variant

Examples

### Preview

![button](https://shopify.dev/assets/assets/images/templated-apis-screenshots/shop-minis/Button-CIXtNuGa.png)

#### Examples

* ####

  ##### tsx

  ```tsx
  import {Button} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    const handleClick = () => {
      console.log('Button pressed')
    }

    return <Button onClick={handleClick}>Continue</Button>
  }
  ```

* ####

  ##### Description

  A button with the Shop brand color background

  ##### tsx

  ```tsx
  import {Button} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    const handleClick = () => {
      console.log('Button pressed')
    }

    return <Button onClick={handleClick}>Continue</Button>
  }
  ```

* ####

  ##### Description

  A button for less prominent actions

  ##### tsx

  ```tsx
  import {Button} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    return <Button variant="secondary">Cancel</Button>
  }
  ```

* ####

  ##### Description

  A button for dangerous actions like delete

  ##### tsx

  ```tsx
  import {Button} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    return <Button variant="destructive">Delete</Button>
  }
  ```

* ####

  ##### Description

  A button in a disabled state

  ##### tsx

  ```tsx
  import {Button} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    return <Button disabled>Continue</Button>
  }
  ```

***

---

<a id="card-card"></a>

## Card

## Card

A composable component with header, content, and footer sections for displaying grouped information. Accepts standard HTML div props.

Examples

### Preview

![card](https://shopify.dev/assets/assets/images/templated-apis-screenshots/shop-minis/Card-TQz3aNUn.png)

#### Examples

* ####

  ##### tsx

  ```tsx
  import {Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card description goes here</CardDescription>
        </CardHeader>
        <CardContent>
          <p>This is the main content of the card.</p>
        </CardContent>
        <CardFooter>
          <p>Card footer content</p>
        </CardFooter>
      </Card>
    )
  }
  ```

* ####

  ##### Description

  A complete card with header, content, and footer sections

  ##### tsx

  ```tsx
  import {Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card description goes here</CardDescription>
        </CardHeader>
        <CardContent>
          <p>This is the main content of the card.</p>
        </CardContent>
        <CardFooter>
          <p>Card footer content</p>
        </CardFooter>
      </Card>
    )
  }
  ```

***

---

<a id="checkbox-checkbox"></a>

## Checkbox

## Checkbox

A component for boolean selections with checked and disabled states. For full props documentation, see [Radix Checkbox](https://www.radix-ui.com/primitives/docs/components/checkbox).

Examples

### Preview

![checkbox](https://shopify.dev/assets/assets/images/templated-apis-screenshots/shop-minis/Checkbox-DqXhIg9H.png)

#### Examples

* ####

  ##### tsx

  ```tsx
  import {Checkbox} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    return <Checkbox checked />
  }
  ```

* ####

  ##### Description

  A checked checkbox

  ##### tsx

  ```tsx
  import {Checkbox} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    return <Checkbox checked />
  }
  ```

* ####

  ##### Description

  A disabled checkbox

  ##### tsx

  ```tsx
  import {Checkbox} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    return <Checkbox disabled />
  }
  ```

***

---

<a id="contentwrapper-contentwrapper"></a>

## ContentWrapper

## ContentWrapper

The `ContentWrapper` component fetches and provides user-generated content data using a render function pattern. It accepts either a `publicId` or `externalId` to identify the content, and passes the resolved content along with loading state to a child render function.

If `content` is not set (and `loading` is `false`), the ID was either not found or the content has been moderated and will not be shown. Users will always be able to see their own content.

Use `ContentWrapper` when you need full control over how content is rendered. For a simpler image-specific wrapper, see `ImageContentWrapper`.

**Note:**

Content rendered through `ContentWrapper` is wrapped in a `ContentMonitor` that allows users to report it for moderation.

##### Props

* **children**

  **({ content, loading, }: { content?: Content; loading: boolean; }) => Element**

  **required**

  A render function that receives the content data and loading state, and returns a React element.

* **externalId**

  **string**

  The external ID of the content item (use this OR publicId).

* **publicId**

  **string**

  The public ID of the content item (use this OR externalId).

#### Content

* description

  ```ts
  string | null
  ```

* externalId

  ```ts
  string | null
  ```

* image

  ```ts
  ContentImage
  ```

* products

  ```ts
  ContentProduct[] | null
  ```

* publicId

  ```ts
  string
  ```

* shareableUrl

  ```ts
  string | null
  ```

* status

  ```ts
  MinisContentStatus | null
  ```

* title

  ```ts
  string
  ```

* visibility

  ```ts
  ContentVisibility[]
  ```

#### ContentImage

* altText

  ```ts
  string | null
  ```

* height

  ```ts
  number | null
  ```

* id

  ```ts
  string | null
  ```

* thumbhash

  ```ts
  string | null
  ```

* url

  ```ts
  string
  ```

* width

  ```ts
  number | null
  ```

#### ContentProduct

* featuredImage

  ```ts
  ContentImage | null
  ```

* id

  ```ts
  string
  ```

* title

  ```ts
  string
  ```

#### MinisContentStatus

* PENDING

  ```ts
  PENDING
  ```

* READY

  ```ts
  READY
  ```

* REJECTED

  ```ts
  REJECTED
  ```

#### ContentVisibility

```ts
'DISCOVERABLE' | 'LINKABLE'
```

Examples

#### Examples

* ####

  ##### tsx

  ```tsx
  import React from 'react'

  import {ContentWrapper} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    return (
      <ContentWrapper publicId="content-123">
        {({content, loading}) => {
          if (loading) return <div>Loading...</div>

          if (!content) return <div>No content found</div>

          return (
            <div>
              <h2>{content.title}</h2>
              {content.description && <p>{content.description}</p>}
              {content.image && (
                <img
                  src={content.image.url}
                  alt={content.title}
                  width={content.image.width || undefined}
                  height={content.image.height || undefined}
                />
              )}
            </div>
          )
        }}
      </ContentWrapper>
    )
  }
  ```

* ####

  ##### Description

  Fetch content using an external ID from your own system instead of the Shop-assigned public ID.

  ##### tsx

  ```tsx
  import React from 'react'

  import {ContentWrapper} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    return (
      <ContentWrapper externalId="external-456">
        {({content, loading}) => {
          if (loading) return <div>Loading...</div>

          if (!content) return <div>No content found</div>

          return (
            <div>
              <h2>{content.title}</h2>
              {content.description && <p>{content.description}</p>}
              {content.image && (
                <img
                  src={content.image.url}
                  alt={content.title}
                  width={content.image.width || undefined}
                  height={content.image.height || undefined}
                />
              )}
            </div>
          )
        }}
      </ContentWrapper>
    )
  }
  ```

* ####

  ##### Description

  Render content alongside its associated products. Products are linked at creation time via the \`productIds\` parameter in \`useCreateImageContent\`.

  ##### tsx

  ```tsx
  import React from 'react'

  import {ContentWrapper} from '@shopify/shop-minis-react'

  /**
   * Renders content with its associated products.
   * Products are linked at creation time via the `productIds` parameter
   * in `useCreateImageContent`.
   */
  export default function ContentWithProducts() {
    return (
      <ContentWrapper publicId="content-123">
        {({content, loading}) => {
          if (loading) return <div>Loading...</div>

          if (!content) return <div>No content found</div>

          return (
            <div>
              <h2>{content.title}</h2>
              {content.description && <p>{content.description}</p>}
              {content.image && (
                <img
                  src={content.image.url}
                  alt={content.title}
                  width={content.image.width || undefined}
                  height={content.image.height || undefined}
                />
              )}

              {content.products && content.products.length > 0 && (
                <div>
                  <h3>Shop the look</h3>
                  <ul>
                    {content.products.map((product) => (
                      <li key={product.id}>
                        {product.featuredImage && (
                          <img
                            src={product.featuredImage.url}
                            alt={product.title}
                            width={64}
                            height={64}
                          />
                        )}
                        <span>{product.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )
        }}
      </ContentWrapper>
    )
  }
  ```

***

### Related

[- ImageContentWrapper](https://shopify.dev/docs/api/shop-minis/components/primitives/imagecontentwrapper)

[- useCreateImageContent](https://shopify.dev/docs/api/shop-minis/hooks/content/usecreateImagecontent)

***

---

<a id="iconbutton-iconbutton"></a>

## IconButton

## IconButton

A button component that displays an icon in various sizes.

##### Props

* **Icon**

  **LucideIcon**

  **required**

  Lucide icon component to render

* **buttonStyles**

  **string**

  Custom CSS classes for the button container

* **filled**

  **boolean**

  Whether the button is in a filled/active state

* **iconStyles**

  **string**

  Custom CSS classes for the icon

* **onClick**

  **() => void**

  Click handler

* **size**

  **'default' | 'sm' | 'lg'**

  Button size variant

Examples

### Preview

![iconbutton](https://shopify.dev/assets/assets/images/templated-apis-screenshots/shop-minis/IconButton-BILarkue.png)

#### Examples

* ####

  ##### tsx

  ```tsx
  import React from 'react'

  import {FavoriteButton} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    return (
      <div className="flex items-center gap-4">
        <FavoriteButton />
        <FavoriteButton filled />
      </div>
    )
  }
  ```

* ####

  ##### Description

  A default icon button

  ##### tsx

  ```tsx
  import React from 'react'

  import {FavoriteButton} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    return (
      <div className="flex items-center gap-4">
        <FavoriteButton />
        <FavoriteButton filled />
      </div>
    )
  }
  ```

* ####

  ##### Description

  An icon button with filled state

  ##### tsx

  ```tsx
  import {IconButton} from '@shopify/shop-minis-react'
  import {Heart} from 'lucide-react'

  export default function MyComponent() {
    const handleClick = () => {
      console.log('Icon button clicked')
    }

    return <IconButton Icon={Heart} filled onClick={handleClick} />
  }
  ```

* ####

  ##### Description

  A small-sized icon button

  ##### tsx

  ```tsx
  import {IconButton} from '@shopify/shop-minis-react'
  import {Star} from 'lucide-react'

  export default function MyComponent() {
    const handleClick = () => {
      console.log('Small icon button clicked')
    }

    return (
      <IconButton
        Icon={Star}
        size="sm"
        onClick={handleClick}
      />
    )
  }
  ```

* ####

  ##### Description

  A large-sized icon button

  ##### tsx

  ```tsx
  import {IconButton} from '@shopify/shop-minis-react'
  import {Settings} from 'lucide-react'

  export default function MyComponent() {
    const handleClick = () => {
      console.log('Large icon button clicked')
    }

    return <IconButton Icon={Settings} size="lg" onClick={handleClick} />
  }
  ```

***

---

<a id="imagecontentwrapper-imagecontentwrapper"></a>

## ImageContentWrapper

## ImageContentWrapper

The `ImageContentWrapper` component renders images uploaded via the `useCreateImageContent` hook. Use it instead of raw Image component when displaying any user-generated content. It accepts either a `publicId` or `externalId`.

**Note:**

Uploaded images are moderated by Shop. Additionally, rendered images can be reported by users for moderation.

##### Props

The `ImageContentWrapper` component renders images uploaded via the `useCreateImageContent` hook. Use it instead of raw Image component when displaying any user-generated content. It accepts either a `publicId` or `externalId`. > Note: Uploaded images are moderated by Shop. Additionally, rendered images can be reported by users for moderation.

* **externalId**

  **string**

  The external ID of the uploaded image (use this OR publicId)

* **height**

  **number**

  Image height

* **Loader**

  **React.ReactNode | string**

  Loading placeholder

* **onLoad**

  **() => void**

  Callback when the image loads

* **publicId**

  **string**

  The public ID of the uploaded image (use this OR externalId)

* **width**

  **number**

  Image width

Examples

### Preview

![imagecontentwrapper](https://shopify.dev/assets/assets/images/templated-apis-screenshots/shop-minis/ImageContentWrapper-CCCT-QPA.png)

#### Examples

* ####

  ##### tsx

  ```tsx
  import React from 'react'

  import {ImageContentWrapper, Skeleton} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    return (
      <ImageContentWrapper
        publicId="xyz123"
        width={300}
        height={200}
        Loader={<Skeleton />}
        onLoad={() => console.log('Image loaded')}
      />
    )
  }
  ```

* ####

  ##### Description

  With a public ID as the source

  ##### tsx

  ```tsx
  import React from 'react'

  import {ImageContentWrapper, Skeleton} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    return (
      <ImageContentWrapper
        publicId="xyz123"
        width={300}
        height={200}
        Loader={<Skeleton />}
        onLoad={() => console.log('Image loaded')}
      />
    )
  }
  ```

* ####

  ##### Description

  With an external ID as the source

  ##### tsx

  ```tsx
  import React from 'react'

  import {ImageContentWrapper, Skeleton} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    return (
      <ImageContentWrapper
        externalId="xyz123"
        width={300}
        height={200}
        Loader={<Skeleton />}
        onLoad={() => console.log('Image loaded')}
      />
    )
  }
  ```

***

### Related

[- useCreateImageContent](https://shopify.dev/docs/api/shop-minis/hooks/content/usecreateImagecontent)

***

---

<a id="image-image"></a>

## Image

## Image

An optimized image component that handles File objects, remote URLs, blob URL lifecycle management, and progressive loading with thumbhash placeholders. Ideal for displaying images from useImagePicker or any remote source.

##### Props

* **alt**

  **string**

  Alt text for accessibility

* **aspectRatio**

  **number | string**

  Aspect ratio (e.g., 16/9, "4/3", or "auto")

* **file**

  **File**

  File object from useImagePicker (auto-manages blob URL lifecycle)

* **objectFit**

  **'cover' | 'contain' | 'fill' | 'scale-down' | 'none'**

  How the image should fit within its container

* **onLoad**

  **() => void**

  Callback when image finishes loading

* **src**

  **string**

  Remote image URL

* **thumbhash**

  **string | null**

  Thumbhash string for progressive loading placeholder

Examples

### Preview

![image](https://shopify.dev/assets/assets/images/templated-apis-screenshots/shop-minis/Image-C9beFiEF.png)

#### Examples

* ####

  ##### tsx

  ```tsx
  import React from 'react'

  import {Image} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    return (
      <Image
        src="https://images.unsplash.com/photo-1551524164-687a55dd1126?w=400&h=400&fit=crop&crop=center"
        alt="The Hero Snowboard"
        thumbhash="NwgGBQD3qIt2+EkWqHqGV4tgd0EH"
        aspectRatio={1}
      />
    )
  }
  ```

* ####

  ##### Description

  Display a remote image with automatic resizing

  ##### tsx

  ```tsx
  import React from 'react'

  import {Image} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    return (
      <Image
        src="https://images.unsplash.com/photo-1551524164-687a55dd1126?w=400&h=400&fit=crop&crop=center"
        alt="The Hero Snowboard"
        thumbhash="NwgGBQD3qIt2+EkWqHqGV4tgd0EH"
        aspectRatio={1}
      />
    )
  }
  ```

* ####

  ##### Description

  Display a File from useImagePicker with automatic blob URL management

  ##### tsx

  ```tsx
  import {useState} from 'react'
  import {Image, useImagePicker, Button} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    const {openGallery} = useImagePicker()
    const [imageFile, setImageFile] = useState<File | null>(null)

    const handleSelectImage = async () => {
      try {
        const file = await openGallery()
        setImageFile(file)
      } catch (error) {
        console.error('Failed to select image:', error)
      }
    }

    return (
      <>
        <Button onClick={handleSelectImage}>Select Image</Button>

        {imageFile && (
          <Image
            file={imageFile}
            alt="Selected image"
            className="w-full mt-4 rounded-lg"
          />
        )}
      </>
    )
  }
  ```

* ####

  ##### Description

  Progressive loading with thumbhash placeholder

  ##### tsx

  ```tsx
  import {Image} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    return (
      <Image
        src="https://cdn.shopify.com/example/large-image.jpg"
        thumbhash="HBkSHYSIeHiPiHh8eJd4eTN0D3"
        alt="Product with placeholder"
        className="w-full rounded-lg"
        onLoad={() => console.log('Image loaded')}
      />
    )
  }
  ```

* ####

  ##### Description

  Custom aspect ratio and styling

  ##### tsx

  ```tsx
  import {Image} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    return (
      <div className="grid grid-cols-2 gap-4">
        {/* Square aspect ratio */}
        <Image
          src="https://cdn.shopify.com/example/product1.jpg"
          alt="Square image"
          aspectRatio={1}
          className="rounded-lg shadow-lg"
        />

        {/* 16:9 aspect ratio */}
        <Image
          src="https://cdn.shopify.com/example/product2.jpg"
          alt="Wide image"
          aspectRatio="16/9"
          className="rounded-lg shadow-lg"
        />

        {/* Portrait aspect ratio */}
        <Image
          src="https://cdn.shopify.com/example/product3.jpg"
          alt="Portrait image"
          aspectRatio="3/4"
          className="rounded-lg shadow-lg"
        />

        {/* Auto aspect ratio (default) */}
        <Image
          src="https://cdn.shopify.com/example/product4.jpg"
          alt="Auto aspect image"
          className="rounded-lg shadow-lg"
        />
      </div>
    )
  }
  ```

***

---

<a id="input-input"></a>

## Input

## Input

A simple component for inputting text.

##### Props

* **disabled**

  **boolean**

  Whether the input is disabled

* **innerRef**

  **React.Ref\<HTMLInputElement>**

  Ref to the input element (use instead of ref)

* **onChange**

  **React.ChangeEventHandler\<HTMLInputElement>**

  Change handler

* **placeholder**

  **string**

  Placeholder text

* **type**

  **string**

  Input type (text, email, password, etc.)

* **value**

  **string**

  Current value

Examples

### Preview

![input](https://shopify.dev/assets/assets/images/templated-apis-screenshots/shop-minis/Input-5RlWEw42.png)

#### Examples

* ####

  ##### tsx

  ```tsx
  import {Input} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    return (
      <Input
        placeholder="Enter text..."
        value="This is an input"
        onChange={e => console.log(e.target.value)}
      />
    )
  }
  ```

* ####

  ##### Description

  An input with placeholder text

  ##### tsx

  ```tsx
  import {Input} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    return (
      <Input
        placeholder="Enter text..."
        value="This is an input"
        onChange={e => console.log(e.target.value)}
      />
    )
  }
  ```

* ####

  ##### Description

  An input with a preset value

  ##### tsx

  ```tsx
  import {Input} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    return <Input value="This is an input" />
  }
  ```

* ####

  ##### Description

  A disabled input field

  ##### tsx

  ```tsx
  import {Input} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    return <Input disabled value="Disabled input" />
  }
  ```

***

---

<a id="label-label"></a>

## Label

## Label

A simple component to render accessible text. For full props documentation, see [Radix Label](https://www.radix-ui.com/primitives/docs/components/label).

Examples

### Preview

![label](https://shopify.dev/assets/assets/images/templated-apis-screenshots/shop-minis/Label-W1qfhO_u.png)

#### Examples

* ####

  ##### tsx

  ```tsx
  import {Label} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    return <Label>This is a text label</Label>
  }
  ```

***

---

<a id="list-list"></a>

## List

## List

A virtualized list component for efficiently rendering large datasets with customizable item rendering and built-in pull-to-refresh functionality.

##### Props

* **items**

  **T\[]**

  **required**

  Array of items to render

* **renderItem**

  **(item: T, index: number) => ReactNode**

  **required**

  Function to render each item

* **enablePullToRefresh**

  **boolean**

  Enable pull-to-refresh gesture (default: true)

* **fetchMore**

  **() => Promise\<void>**

  Callback to fetch more items when scrolled to bottom

* **header**

  **React.ReactNode**

  Header element rendered at the top of the list

* **height**

  **string | number**

  Height of the list container

* **loadingComponent**

  **React.ReactNode**

  Custom loading component shown while fetching more

* **onRefresh**

  **() => Promise\<void>**

  Callback for pull-to-refresh

* **refreshing**

  **boolean**

  Whether the list is currently refreshing

* **showScrollbar**

  **boolean**

  Show scrollbar (default: false)

Examples

### Preview

![list](https://shopify.dev/assets/assets/images/templated-apis-screenshots/shop-minis/List-Dzvqt0pR.png)

#### Examples

* ####

  ##### tsx

  ```tsx
  import {List} from '@shopify/shop-minis-react'

  const sampleItems = [
    {id: '1', title: 'Item 1'},
    {id: '2', title: 'Item 2'},
    {id: '3', title: 'Item 3'},
    {id: '4', title: 'Item 4'},
    {id: '5', title: 'Item 5'},
  ]

  export default function MyComponent() {
    const renderItem = (item: (typeof sampleItems)[number]) => (
      <div className="p-4 border-b">
        <span>{item.title}</span>
      </div>
    )

    return (
      <List
        items={sampleItems}
        height={300}
        showScrollbar
        renderItem={renderItem}
      />
    )
  }
  ```

* ####

  ##### Description

  A basic virtualized list with simple items

  ##### tsx

  ```tsx
  import {List} from '@shopify/shop-minis-react'

  const sampleItems = [
    {id: '1', title: 'Item 1'},
    {id: '2', title: 'Item 2'},
    {id: '3', title: 'Item 3'},
    {id: '4', title: 'Item 4'},
    {id: '5', title: 'Item 5'},
  ]

  export default function MyComponent() {
    const renderItem = (item: (typeof sampleItems)[number]) => (
      <div className="p-4 border-b">
        <span>{item.title}</span>
      </div>
    )

    return (
      <List
        items={sampleItems}
        height={300}
        showScrollbar
        renderItem={renderItem}
      />
    )
  }
  ```

* ####

  ##### Description

  A virtualized list displaying product items

  ##### tsx

  ```tsx
  import {List, ProductLink} from '@shopify/shop-minis-react'

  const sampleProducts = [
    {
      id: '1',
      title: 'Sample Product 1',
      price: {amount: '29.99', currencyCode: 'USD'},
      featuredImage: {url: 'https://picsum.photos/200/200', altText: 'Product 1'},
      shop: {id: 'shop1', name: 'Sample Shop'},
      defaultVariantId: 'variant-1',
      isFavorited: false,
    },
    {
      id: '2',
      title: 'Sample Product 2',
      price: {amount: '39.99', currencyCode: 'USD'},
      featuredImage: {url: 'https://picsum.photos/200/200', altText: 'Product 2'},
      shop: {id: 'shop1', name: 'Sample Shop'},
      defaultVariantId: 'variant-2',
      isFavorited: true,
    },
  ]

  export default function MyComponent() {
    const getItemSize = () => 100

    const renderItem = product => (
      <div className="p-4">
        <ProductLink product={product} />
      </div>
    )

    return (
      <List
        items={sampleProducts}
        height={400}
        itemSizeForRow={getItemSize}
        showScrollbar
        renderItem={renderItem}
      />
    )
  }
  ```

* ####

  ##### Description

  A basic list with pull-to-refresh functionality. Pull down to add fresh content to the top of the list.

  ##### tsx

  ```tsx
  import {useState, useCallback} from 'react'
  import {List} from '@shopify/shop-minis-react'

  const initialItems = [
    {id: '1', title: 'Item 1'},
    {id: '2', title: 'Item 2'},
    {id: '3', title: 'Item 3'},
    {id: '4', title: 'Item 4'},
    {id: '5', title: 'Item 5'},
  ]

  export default function MyComponent() {
    const [items, setItems] = useState(initialItems)
    const [refreshing, setRefreshing] = useState(false)

    const handleRefresh = useCallback(async () => {
      setRefreshing(true)

      await new Promise(resolve => setTimeout(resolve, 2000))

      const freshItems = [
        {id: Date.now().toString(), title: `Fresh Item ${Date.now()}`},
        {id: (Date.now() + 1).toString(), title: `Fresh Item ${Date.now() + 1}`},
      ]

      setItems([...freshItems, ...initialItems])
      setRefreshing(false)
    }, [])

    const getItemSize = () => 60

    const renderItem = item => (
      <div className="p-4 border-b">
        <span>{item.title}</span>
      </div>
    )

    return (
      <List
        items={items}
        height={300}
        itemSizeForRow={getItemSize}
        showScrollbar
        renderItem={renderItem}
        onRefresh={handleRefresh}
        refreshing={refreshing}
        enablePullToRefresh
      />
    )
  }
  ```

***

---

<a id="productvariantprice-productvariantprice"></a>

## ProductVariantPrice

## ProductVariantPrice

A component for displaying product pricing with support for discounts and custom styling.

##### Props

* **amount**

  **number | string**

  **required**

* **className**

  **string**

* **compareAtPriceAmount**

  **number | string**

* **compareAtPriceCurrencyCode**

  **string**

* **currencyCode**

  **string**

* **currentPriceClassName**

  **string**

* **originalPriceClassName**

  **string**

Examples

### Preview

![productvariantprice](https://shopify.dev/assets/assets/images/templated-apis-screenshots/shop-minis/ProductVariantPrice-DL6-fqjv.png)

#### Examples

* ####

  ##### tsx

  ```tsx
  import {ProductVariantPrice} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    return (
      <ProductVariantPrice
        amount="29.99"
        currencyCode="USD"
      />
    )
  }
  ```

* ####

  ##### Description

  A basic product price display

  ##### tsx

  ```tsx
  import {ProductVariantPrice} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    return (
      <ProductVariantPrice
        amount="29.99"
        currencyCode="USD"
      />
    )
  }
  ```

* ####

  ##### Description

  A product price with discount showing compare at price

  ##### tsx

  ```tsx
  import {ProductVariantPrice} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    return (
      <ProductVariantPrice
        amount="24.99"
        currencyCode="USD"
        compareAtPriceAmount="39.99"
      />
    )
  }
  ```

* ####

  ##### Description

  A product price with custom styling classes

  ##### tsx

  ```tsx
  import {ProductVariantPrice} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    return (
      <ProductVariantPrice
        amount="89.99"
        currencyCode="USD"
        compareAtPriceAmount="119.99"
        currentPriceClassName="text-2xl font-bold text-green-600"
        originalPriceClassName="text-lg text-red-500 line-through"
        className="gap-3 p-4 bg-gray-50 rounded-lg"
      />
    )
  }
  ```

***

---

<a id="progress-progress"></a>

## Progress

## Progress

A component for showing completion status or loading progress. For full props documentation, see [Radix Progress](https://www.radix-ui.com/primitives/docs/components/progress).

Examples

### Preview

![progress](https://shopify.dev/assets/assets/images/templated-apis-screenshots/shop-minis/Progress-BItSq2tT.png)

#### Examples

* ####

  ##### tsx

  ```tsx
  import {Progress} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    return <Progress value={50} />
  }
  ```

* ####

  ##### Description

  A progress bar showing 50% completion

  ##### tsx

  ```tsx
  import {Progress} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    return <Progress value={50} />
  }
  ```

* ####

  ##### Description

  A completed progress bar at 100%

  ##### tsx

  ```tsx
  import {Progress} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    return <Progress value={100} />
  }
  ```

***

---

<a id="quantityselector-quantityselector"></a>

## QuantitySelector

## QuantitySelector

A component with increment and decrement buttons for adjusting quantities.

##### Props

* **maxQuantity**

  **number**

  **required**

  Maximum allowed quantity

* **onQuantityChange**

  **(quantity: number) => void**

  **required**

  Callback when quantity changes

* **quantity**

  **number**

  **required**

  Current quantity value

* **disabled**

  **boolean**

  Whether the selector is disabled

* **minQuantity**

  **number**

  Minimum allowed quantity (default: 1)

Examples

### Preview

![quantityselector](https://shopify.dev/assets/assets/images/templated-apis-screenshots/shop-minis/QuantitySelector-5t-Rijfk.png)

#### Examples

* ####

  ##### tsx

  ```tsx
  import {QuantitySelector} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    const handleQuantityChange = newQuantity => {
      console.log('Quantity changed to:', newQuantity)
    }

    return (
      <QuantitySelector
        quantity={1}
        onQuantityChange={handleQuantityChange}
        maxQuantity={10}
      />
    )
  }
  ```

* ####

  ##### Description

  Quantity selector with a max value

  ##### tsx

  ```tsx
  import {QuantitySelector} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    const handleQuantityChange = newQuantity => {
      console.log('Quantity changed to:', newQuantity)
    }

    return (
      <QuantitySelector
        quantity={1}
        onQuantityChange={handleQuantityChange}
        maxQuantity={10}
      />
    )
  }
  ```

* ####

  ##### Description

  Quantity selector with custom min values

  ##### tsx

  ```tsx
  import {QuantitySelector} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    const handleQuantityChange = newQuantity => {
      console.log('Quantity changed to:', newQuantity)
    }

    return (
      <QuantitySelector
        quantity={5}
        onQuantityChange={handleQuantityChange}
        minQuantity={2}
        maxQuantity={50}
      />
    )
  }
  ```

* ####

  ##### Description

  Disabled quantity selector

  ##### tsx

  ```tsx
  import {QuantitySelector} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    const handleQuantityChange = newQuantity => {
      console.log('Quantity changed to:', newQuantity)
    }

    return (
      <QuantitySelector
        quantity={3}
        onQuantityChange={handleQuantityChange}
        maxQuantity={10}
        disabled
      />
    )
  }
  ```

***

---

<a id="radiogroup-radiogroup"></a>

## RadioGroup

## RadioGroup

A radio group component for single-selection options. For full props documentation, see [Radix Radio Group](https://www.radix-ui.com/primitives/docs/components/radio-group).

Examples

### Preview

![radiogroup](https://shopify.dev/assets/assets/images/templated-apis-screenshots/shop-minis/RadioGroup--4BW95Eq.png)

#### Examples

* ####

  ##### tsx

  ```tsx
  import {RadioGroup, RadioGroupItem, Label} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    return (
      <RadioGroup defaultValue="option-1">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-1" id="option-1" />
          <Label>Option 1</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-2" id="option-2" />
          <Label>Option 2</Label>
        </div>
      </RadioGroup>
    )
  }
  ```

* ####

  ##### Description

  A radio group with selectable options

  ##### tsx

  ```tsx
  import {RadioGroup, RadioGroupItem, Label} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    return (
      <RadioGroup defaultValue="option-1">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-1" id="option-1" />
          <Label>Option 1</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-2" id="option-2" />
          <Label>Option 2</Label>
        </div>
      </RadioGroup>
    )
  }
  ```

* ####

  ##### Description

  A disabled radio group

  ##### tsx

  ```tsx
  import {RadioGroup, RadioGroupItem, Label} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    return (
      <RadioGroup defaultValue="option-1" disabled>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-1" id="disabled-option-1" />
          <Label>Option 1</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-2" id="disabled-option-2" />
          <Label>Option 2</Label>
        </div>
      </RadioGroup>
    )
  }
  ```

***

---

<a id="safearea-safearea"></a>

## SafeArea

## SafeArea

A container that applies safe area insets as padding or margin, ensuring content is not hidden behind system UI such as the home indicator on iOS or the navigation bar on Android.

You can pass in custom classes and styles just like a regular `div`, so we recommend using it in place of your usual top-level wrapper.

When no `edges` prop is specified, all four edges are applied. If you only need a specific edge, for example a sticky footer, use `edges={["bottom"]}`.

##### Props

* **children**

  **React.ReactNode**

  Content to render inside the safe area

* **className**

  **string**

  Additional CSS classes

* **edges**

  **Edge\[]**

  Which edges to apply safe area insets to. Defaults to all edges.

* **mode**

  **'padding' | 'margin'**

  Whether to apply insets as padding or margin. Defaults to 'padding'.

* **style**

  **React.CSSProperties**

  Additional inline styles

#### Edge

```ts
'top' | 'right' | 'bottom' | 'left'
```

Examples

#### Examples

* ####

  ##### tsx

  ```tsx
  import {SafeArea} from '@shopify/shop-minis-react'

  function FullScreenPage() {
    return (
      <SafeArea className="min-h-dvh p-4">
        <h1>My Page</h1>
        <p>
          This content is padded away from all safe area edges so it will not be
          hidden behind system UI.
        </p>
      </SafeArea>
    )
  }

  export default FullScreenPage
  ```

* ####

  ##### Description

  Wrap a sticky footer to keep it above the home indicator

  ##### tsx

  ```tsx
  import {SafeArea} from '@shopify/shop-minis-react'

  function StickyFooter() {
    return (
      <div className="min-h-dvh p-4">
        <h1>My Page</h1>
        <p>Some content above the sticky footer.</p>

        <SafeArea
          edges={['bottom']}
          className="fixed bottom-0 inset-x-0 p-4 bg-white text-center"
        >
          <button>Add to Cart — $29.99</button>
        </SafeArea>
      </div>
    )
  }

  export default StickyFooter
  ```

***

---

<a id="select-select"></a>

## Select

## Select

A dropdown component with support for grouped options and disabled states. For full props documentation, see [Radix Select](https://www.radix-ui.com/primitives/docs/components/select).

Examples

### Preview

![select](https://shopify.dev/assets/assets/images/templated-apis-screenshots/shop-minis/Select-Dt8p_dBz.png)

#### Examples

* ####

  ##### tsx

  ```tsx
  import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    return (
      <Select defaultValue="option-1">
        <SelectTrigger>
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option-1">Option 1</SelectItem>
          <SelectItem value="option-2">Option 2</SelectItem>
          <SelectItem value="option-3">Option 3</SelectItem>
        </SelectContent>
      </Select>
    )
  }
  ```

* ####

  ##### Description

  Basic dropdown with options

  ##### tsx

  ```tsx
  import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    return (
      <Select defaultValue="option-1">
        <SelectTrigger>
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option-1">Option 1</SelectItem>
          <SelectItem value="option-2">Option 2</SelectItem>
          <SelectItem value="option-3">Option 3</SelectItem>
        </SelectContent>
      </Select>
    )
  }
  ```

* ####

  ##### Description

  Dropdown with grouped options

  ##### tsx

  ```tsx
  import {Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    return (
      <Select defaultValue="option-1">
        <SelectTrigger>
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Group 1</SelectLabel>
            <SelectItem value="option-1">Option 1</SelectItem>
            <SelectItem value="option-2">Option 2</SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>Group 2</SelectLabel>
            <SelectItem value="option-3">Option 3</SelectItem>
            <SelectItem value="option-4">Option 4</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    )
  }
  ```

* ####

  ##### Description

  A disabled select dropdown

  ##### tsx

  ```tsx
  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from '@shopify/shop-minis-react'

  export default function MyComponent() {
    return (
      <Select defaultValue="option-1" disabled>
        <SelectTrigger>
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option-1">Option 1</SelectItem>
          <SelectItem value="option-2">Option 2</SelectItem>
          <SelectItem value="option-3">Option 3</SelectItem>
        </SelectContent>
      </Select>
    )
  }
  ```

***

---

<a id="skeleton-skeleton"></a>

## Skeleton

## Skeleton

A placeholder component for loading states, with customizable dimensions. Accepts standard HTML div props including `className` for sizing.

Examples

### Preview

![skeleton](https://shopify.dev/assets/assets/images/templated-apis-screenshots/shop-minis/Skeleton-DgxxHNX5.png)

#### Examples

* ####

  ##### tsx

  ```tsx
  import React from 'react'

  import {Skeleton} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    return (
      <div className="space-y-3">
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </div>
    )
  }
  ```

***

---

<a id="textinput-textinput"></a>

## TextInput

## TextInput

A wrapper around the base Input that automatically adjusts the layout to keep the focused field visible when the on-screen keyboard appears. Accepts standard HTML input props (`value`, `onChange`, `placeholder`, `type`, etc.).

Examples

### Preview

![textinput](https://shopify.dev/assets/assets/images/templated-apis-screenshots/shop-minis/TextInput-CXFoQtDo.png)

#### Examples

* ####

  ##### tsx

  ```tsx
  import {TextInput} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    return <TextInput placeholder="Enter your name" />
  }
  ```

***

---

<a id="toaster-toaster"></a>

## Toaster

## Toaster

A notification component that shows up from the bottom, in various states. For full props documentation, see [Sonner](https://sonner.emilkowal.ski/).

Examples

### Preview

![toaster](https://shopify.dev/assets/assets/images/templated-apis-screenshots/shop-minis/Toaster-qCBDq-jv.png)

#### Examples

* ####

  ##### tsx

  ```tsx
  import {Toaster, Button, toast} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    const handleClick = () => {
      toast.success('Success toast!')
    }

    return (
      <>
        <Button onClick={handleClick}>
          Show success Toast
        </Button>
        <Toaster />
      </>
    )
  }
  ```

* ####

  ##### Description

  A success toast notification

  ##### tsx

  ```tsx
  import {Toaster, Button, toast} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    const handleClick = () => {
      toast.success('Success toast!')
    }

    return (
      <>
        <Button onClick={handleClick}>
          Show success Toast
        </Button>
        <Toaster />
      </>
    )
  }
  ```

* ####

  ##### Description

  An error toast notification

  ##### tsx

  ```tsx
  import {Toaster, Button, toast} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    const handleClick = () => {
      toast.error('Error toast!')
    }

    return (
      <>
        <Button onClick={handleClick}>
          Show error Toast
        </Button>
        <Toaster />
      </>
    )
  }
  ```

***

---

<a id="touchable-touchable"></a>

## Touchable

## Touchable

Animated wrapper providing native-like tap feedback. You can use it instead of raw div + onClick.

##### Props

* **children**

  **React.ReactNode**

  Content to render inside the touchable area

* **onClick**

  **React.MouseEventHandler\<HTMLDivElement>**

  Click handler

* **stopPropagation**

  **boolean**

  Prevent click event from bubbling to parent elements

Examples

#### Examples

* ####

  ##### tsx

  ```tsx
  import {Touchable} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    const handleClick = () => {
      console.log('Touchable clicked')
    }

    return (
      <Touchable onClick={handleClick}>
        <div>Continue</div>
      </Touchable>
    )
  }
  ```

***

---

<a id="videoplayer-videoplayer"></a>

## VideoPlayer

## VideoPlayer

Video.js-powered player with automatic format handling. Includes custom play/pause overlay and imperative controls via ref (for advanced scenarios like synchronized playback). Video.js handles codec support, adaptive streaming, and disposal lifecycle automatically.

##### Props

* **src**

  **string**

  **required**

  The video source URL

* **autoplay**

  **boolean**

  Whether the video should autoplay

* **format**

  **string**

  The format/MIME type of the video (default: 'video/mp4')

* **height**

  **number**

  Video height in pixels

* **loop**

  **boolean**

  Whether the video should loop

* **muted**

  **boolean**

  Whether the video should be muted

* **onEnded**

  **() => void**

  Callback when video ends

* **onPause**

  **() => void**

  Callback when video is paused

* **onPlay**

  **() => void**

  Callback when video starts playing

* **onReady**

  **() => void**

  Callback when video player is ready

* **playButtonComponent**

  **React.ReactNode**

  Custom play button component

* **poster**

  **string**

  URL for the poster image shown before playback

* **preload**

  **'none' | 'metadata' | 'auto'**

  Preload behavior: 'none', 'metadata', or 'auto'

* **width**

  **number**

  Video width in pixels

Examples

### Preview

![videoplayer](https://shopify.dev/assets/assets/images/templated-apis-screenshots/shop-minis/VideoPlayer-5jH-I4pB.png)

#### Examples

* ####

  ##### tsx

  ```tsx
  import React from 'react'

  import {VideoPlayer} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    return (
      <VideoPlayer
        src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        poster="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
        width={320}
        muted
      />
    )
  }
  ```

* ####

  ##### Description

  A basic video player with a fixed height and poster image

  ##### tsx

  ```tsx
  import React from 'react'

  import {VideoPlayer} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    return (
      <VideoPlayer
        src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        poster="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
        width={320}
        muted
      />
    )
  }
  ```

* ####

  ##### Description

  Video player with imperative controls

  ##### tsx

  ```tsx
  import {useRef} from 'react'
  import {VideoPlayer, Button, VideoPlayerRef} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    const handlePlay = () => {
      ref.current?.play()
    }

    const handlePause = () => {
      ref.current?.pause()
    }

    const ref = useRef<VideoPlayerRef>(null)

    return (
      <div>
        <VideoPlayer
          ref={ref}
          src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          width={400}
          height={225}
        />
        <div style={{marginTop: '10px', display: 'flex', gap: '10px'}}>
          <Button onClick={handlePlay}>Play</Button>
          <Button onClick={handlePause} variant="secondary">
            Pause
          </Button>
        </div>
      </div>
    )
  }
  ```

***

---

<a id="addtocartbutton-addtocartbutton"></a>

## AddToCartButton

## AddToCartButton

Adds products to Shop's cart with checkmark animation feedback. Users can continue shopping and add more items before checkout. Use this for browsing experiences where customers might want multiple products. For immediate single-product purchases, use `BuyNowButton` instead.

##### Props

* **productVariantId**

  **string**

  **required**

  The GID of the product variant. E.g. `gid://shopify/ProductVariant/456`

* **className**

  **string**

  CSS class name

* **disabled**

  **boolean**

  Whether the button is disabled

* **discountCodes**

  **string\[]**

  The discount codes to apply to the cart

* **product**

  **Product**

  The product to add to the cart

* **size**

  **'default' | 'sm' | 'lg'**

  Button size variant

#### Product

* compareAtPrice

  ```ts
  Money | null
  ```

* defaultVariantId

  ```ts
  string
  ```

* featuredImage

  ```ts
  ProductImage | null
  ```

* id

  ```ts
  string
  ```

* isFavorited

  ```ts
  boolean
  ```

* price

  ```ts
  Money
  ```

* referral

  ```ts
  boolean
  ```

* reviewAnalytics

  ```ts
  { averageRating?: number; reviewCount?: number; }
  ```

* selectedVariant

  ```ts
  ProductVariant
  ```

* shop

  ```ts
  ProductShop
  ```

* title

  ```ts
  string
  ```

* variants

  ```ts
  ProductVariant[]
  ```

#### Money

* amount

  ```ts
  Decimal
  ```

* currencyCode

  ```ts
  CurrencyCode
  ```

#### Decimal

```ts
string
```

#### CurrencyCode

```ts
'AED' | 'AFN' | 'ALL' | 'AMD' | 'ANG' | 'AOA' | 'ARS' | 'AUD' | 'AWG' | 'AZN' | 'BAM' | 'BBD' | 'BDT' | 'BGN' | 'BHD' | 'BIF' | 'BMD' | 'BND' | 'BOB' | 'BRL' | 'BSD' | 'BTN' | 'BWP' | 'BYN' | 'BYR' | 'BZD' | 'CAD' | 'CDF' | 'CHF' | 'CLP' | 'CNY' | 'COP' | 'CRC' | 'CVE' | 'CZK' | 'DJF' | 'DKK' | 'DOP' | 'DZD' | 'EGP' | 'ERN' | 'ETB' | 'EUR' | 'FJD' | 'FKP' | 'GBP' | 'GEL' | 'GHS' | 'GIP' | 'GMD' | 'GNF' | 'GTQ' | 'GYD' | 'HKD' | 'HNL' | 'HRK' | 'HTG' | 'HUF' | 'IDR' | 'ILS' | 'INR' | 'IQD' | 'IRR' | 'ISK' | 'JEP' | 'JMD' | 'JOD' | 'JPY' | 'KES' | 'KGS' | 'KHR' | 'KID' | 'KMF' | 'KRW' | 'KWD' | 'KYD' | 'KZT' | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'LSL' | 'LTL' | 'LVL' | 'LYD' | 'MAD' | 'MDL' | 'MGA' | 'MKD' | 'MMK' | 'MNT' | 'MOP' | 'MRU' | 'MUR' | 'MVR' | 'MWK' | 'MXN' | 'MYR' | 'MZN' | 'NAD' | 'NGN' | 'NIO' | 'NOK' | 'NPR' | 'NZD' | 'OMR' | 'PAB' | 'PEN' | 'PGK' | 'PHP' | 'PKR' | 'PLN' | 'PYG' | 'QAR' | 'RON' | 'RSD' | 'RUB' | 'RWF' | 'SAR' | 'SBD' | 'SCR' | 'SDG' | 'SEK' | 'SGD' | 'SHP' | 'SLL' | 'SOS' | 'SRD' | 'SSP' | 'STD' | 'STN' | 'SYP' | 'SZL' | 'THB' | 'TJS' | 'TMT' | 'TND' | 'TOP' | 'TRY' | 'TTD' | 'TWD' | 'TZS' | 'UAH' | 'UGX' | 'USD' | 'UYU' | 'UZS' | 'VED' | 'VEF' | 'VES' | 'VND' | 'VUV' | 'WST' | 'XAF' | 'XCD' | 'XOF' | 'XPF' | 'XXX' | 'YER' | 'ZAR' | 'ZMW'
```

#### ProductImage

* altText

  ```ts
  string | null
  ```

* height

  ```ts
  number | null
  ```

* id

  ```ts
  string | null
  ```

* sensitive

  ```ts
  boolean | null
  ```

* thumbhash

  ```ts
  string | null
  ```

* url

  ```ts
  string
  ```

* width

  ```ts
  number | null
  ```

#### ProductVariant

* compareAtPrice

  ```ts
  Money | null
  ```

* id

  ```ts
  string
  ```

* image

  ```ts
  ProductImage | null
  ```

* isFavorited

  ```ts
  boolean
  ```

* price

  ```ts
  Money
  ```

* title

  ```ts
  string
  ```

#### ProductShop

* id

  ```ts
  string
  ```

* name

  ```ts
  string
  ```

Examples

### Preview

![addtocartbutton](https://shopify.dev/assets/assets/images/templated-apis-screenshots/shop-minis/AddToCartButton-DURzwURn.png)

#### Examples

* #### AddToCartButton

  ##### tsx

  ```tsx
  import * as React from 'react'
  import {AddToCartButton, useProduct} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    const {product, loading} = useProduct({
      id: 'gid://shopify/Product/7234590834753',
    })

    if (loading || !product) {
      return null
    }

    return (
      <AddToCartButton
        product={product}
        productVariantId={product.defaultVariantId}
      />
    )
  }
  ```

  ##### With Discount Codes

  ```tsx
  import * as React from 'react'
  import {AddToCartButton, useProduct} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    const {product, loading} = useProduct({
      id: 'gid://shopify/Product/7234590834753',
    })

    if (loading || !product) {
      return null
    }

    return (
      <AddToCartButton
        product={product}
        productVariantId={product.defaultVariantId}
        discountCodes={['SUMMER20', 'FREESHIP']}
      />
    )
  }
  ```

***

---

<a id="buynowbutton-buynowbutton"></a>

## BuyNowButton

## BuyNowButton

Navigates directly to Shop's express checkout, bypassing the cart entirely. Use for single-item purchases, limited-time offers, or when reducing friction is critical. Best for impulse buys and focused conversion flows.

##### Props

* **productVariantId**

  **string**

  **required**

  The GID of the product variant. E.g. `gid://shopify/ProductVariant/456`

* **className**

  **string**

  CSS class name

* **disabled**

  **boolean**

  Whether the button is disabled

* **discountCode**

  **string**

  The discount code to apply to the purchase

* **product**

  **Product**

  The product to buy now

* **size**

  **'default' | 'sm' | 'lg'**

  Button size variant

#### Product

* compareAtPrice

  ```ts
  Money | null
  ```

* defaultVariantId

  ```ts
  string
  ```

* featuredImage

  ```ts
  ProductImage | null
  ```

* id

  ```ts
  string
  ```

* isFavorited

  ```ts
  boolean
  ```

* price

  ```ts
  Money
  ```

* referral

  ```ts
  boolean
  ```

* reviewAnalytics

  ```ts
  { averageRating?: number; reviewCount?: number; }
  ```

* selectedVariant

  ```ts
  ProductVariant
  ```

* shop

  ```ts
  ProductShop
  ```

* title

  ```ts
  string
  ```

* variants

  ```ts
  ProductVariant[]
  ```

#### Money

* amount

  ```ts
  Decimal
  ```

* currencyCode

  ```ts
  CurrencyCode
  ```

#### Decimal

```ts
string
```

#### CurrencyCode

```ts
'AED' | 'AFN' | 'ALL' | 'AMD' | 'ANG' | 'AOA' | 'ARS' | 'AUD' | 'AWG' | 'AZN' | 'BAM' | 'BBD' | 'BDT' | 'BGN' | 'BHD' | 'BIF' | 'BMD' | 'BND' | 'BOB' | 'BRL' | 'BSD' | 'BTN' | 'BWP' | 'BYN' | 'BYR' | 'BZD' | 'CAD' | 'CDF' | 'CHF' | 'CLP' | 'CNY' | 'COP' | 'CRC' | 'CVE' | 'CZK' | 'DJF' | 'DKK' | 'DOP' | 'DZD' | 'EGP' | 'ERN' | 'ETB' | 'EUR' | 'FJD' | 'FKP' | 'GBP' | 'GEL' | 'GHS' | 'GIP' | 'GMD' | 'GNF' | 'GTQ' | 'GYD' | 'HKD' | 'HNL' | 'HRK' | 'HTG' | 'HUF' | 'IDR' | 'ILS' | 'INR' | 'IQD' | 'IRR' | 'ISK' | 'JEP' | 'JMD' | 'JOD' | 'JPY' | 'KES' | 'KGS' | 'KHR' | 'KID' | 'KMF' | 'KRW' | 'KWD' | 'KYD' | 'KZT' | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'LSL' | 'LTL' | 'LVL' | 'LYD' | 'MAD' | 'MDL' | 'MGA' | 'MKD' | 'MMK' | 'MNT' | 'MOP' | 'MRU' | 'MUR' | 'MVR' | 'MWK' | 'MXN' | 'MYR' | 'MZN' | 'NAD' | 'NGN' | 'NIO' | 'NOK' | 'NPR' | 'NZD' | 'OMR' | 'PAB' | 'PEN' | 'PGK' | 'PHP' | 'PKR' | 'PLN' | 'PYG' | 'QAR' | 'RON' | 'RSD' | 'RUB' | 'RWF' | 'SAR' | 'SBD' | 'SCR' | 'SDG' | 'SEK' | 'SGD' | 'SHP' | 'SLL' | 'SOS' | 'SRD' | 'SSP' | 'STD' | 'STN' | 'SYP' | 'SZL' | 'THB' | 'TJS' | 'TMT' | 'TND' | 'TOP' | 'TRY' | 'TTD' | 'TWD' | 'TZS' | 'UAH' | 'UGX' | 'USD' | 'UYU' | 'UZS' | 'VED' | 'VEF' | 'VES' | 'VND' | 'VUV' | 'WST' | 'XAF' | 'XCD' | 'XOF' | 'XPF' | 'XXX' | 'YER' | 'ZAR' | 'ZMW'
```

#### ProductImage

* altText

  ```ts
  string | null
  ```

* height

  ```ts
  number | null
  ```

* id

  ```ts
  string | null
  ```

* sensitive

  ```ts
  boolean | null
  ```

* thumbhash

  ```ts
  string | null
  ```

* url

  ```ts
  string
  ```

* width

  ```ts
  number | null
  ```

#### ProductVariant

* compareAtPrice

  ```ts
  Money | null
  ```

* id

  ```ts
  string
  ```

* image

  ```ts
  ProductImage | null
  ```

* isFavorited

  ```ts
  boolean
  ```

* price

  ```ts
  Money
  ```

* title

  ```ts
  string
  ```

#### ProductShop

* id

  ```ts
  string
  ```

* name

  ```ts
  string
  ```

Examples

### Preview

![buynowbutton](https://shopify.dev/assets/assets/images/templated-apis-screenshots/shop-minis/BuyNowButton-BfqFltBR.png)

#### Examples

* #### BuyNowButton

  ##### tsx

  ```tsx
  import * as React from 'react'
  import {BuyNowButton, useProduct} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    const {product, loading} = useProduct({
      id: 'gid://shopify/Product/7234590834753',
    })

    if (loading || !product) {
      return null
    }

    return (
      <BuyNowButton
        product={product}
        productVariantId={product.defaultVariantId}
      />
    )
  }
  ```

  ##### With Discount Code

  ```tsx
  import * as React from 'react'
  import {BuyNowButton, useProduct} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    const {product, loading} = useProduct({
      id: 'gid://shopify/Product/7234590834753',
    })

    if (loading || !product) {
      return null
    }

    return (
      <BuyNowButton
        product={product}
        productVariantId={product.defaultVariantId}
        discountCode="FLASH50"
      />
    )
  }
  ```

***

---

<a id="favoritebutton-favoritebutton"></a>

## FavoriteButton

## FavoriteButton

A button component for toggling a favorite state, typically used for products.

##### Props

* **filled**

  **boolean**

  Whether the product is currently favorited

* **onClick**

  **() => void**

  Click handler for toggling favorite state

Examples

### Preview

![favoritebutton](https://shopify.dev/assets/assets/images/templated-apis-screenshots/shop-minis/FavoriteButton-D9OAhJlP.png)

#### Examples

* ####

  ##### tsx

  ```tsx
  import React from 'react'

  import {FavoriteButton} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    return (
      <div className="flex items-center gap-4">
        <FavoriteButton />
        <FavoriteButton filled />
      </div>
    )
  }
  ```

***

---

<a id="merchantcard-merchantcard"></a>

## MerchantCard

## MerchantCard

Use when showcasing merchants as destinations, not just product sources. Automatically adapts to merchant's brand colors, logo placement, and featured product images. Respects merchant brand guidelines while maintaining consistent Shop UI patterns.

##### Props

* **shop**

  **Shop**

  **required**

  The shop/merchant to display

* **children**

  **React.ReactNode**

  Custom content to render inside the card

* **featuredImagesLimit**

  **number**

  Maximum number of featured product images to show (default: 4)

* **touchable**

  **boolean**

  Whether the card is tappable to navigate to shop (default: true)

#### Shop

* id

  ```ts
  string
  ```

* isFollowing

  ```ts
  boolean | null
  ```

* logoImage

  ```ts
  ProductImage | null
  ```

* name

  ```ts
  string
  ```

* primaryDomain

  ```ts
  { url: string; }
  ```

* reviewAnalytics

  ```ts
  { averageRating?: number; reviewCount: number; }
  ```

* shareUrl

  ```ts
  string | null
  ```

* visualTheme

  ```ts
  VisualTheme | null
  ```

#### ProductImage

* altText

  ```ts
  string | null
  ```

* height

  ```ts
  number | null
  ```

* id

  ```ts
  string | null
  ```

* sensitive

  ```ts
  boolean | null
  ```

* thumbhash

  ```ts
  string | null
  ```

* url

  ```ts
  string
  ```

* width

  ```ts
  number | null
  ```

#### VisualTheme

* brandSettings

  ```ts
  BrandSettings | null
  ```

* description

  ```ts
  string | null
  ```

* featuredImages

  ```ts
  ImageType[]
  ```

* id

  ```ts
  string
  ```

* logoImage

  ```ts
  ImageType | null
  ```

#### BrandSettings

* colors

  ```ts
  ColorTheme | null
  ```

* headerTheme

  ```ts
  HeaderTheme | null
  ```

* id

  ```ts
  string
  ```

* logos

  ```ts
  LogoTheme | null
  ```

#### ColorTheme

* coverDominant

  ```ts
  string | null
  ```

* id

  ```ts
  string
  ```

* logoAverage

  ```ts
  string | null
  ```

* logoDominant

  ```ts
  string | null
  ```

* primary

  ```ts
  string | null
  ```

* secondary

  ```ts
  string | null
  ```

* secondaryText

  ```ts
  string | null
  ```

* statusBarStyle

  ```ts
  string | null
  ```

#### HeaderTheme

* coverImage

  ```ts
  ImageType | null
  ```

* endingScrimColor

  ```ts
  string | null
  ```

* id

  ```ts
  string
  ```

* startingScrimColor

  ```ts
  string | null
  ```

* thumbnailImage

  ```ts
  ImageType | null
  ```

* videoUrl

  ```ts
  string | null
  ```

* wordmark

  ```ts
  ImageType | null
  ```

#### ImageType

* altText

  ```ts
  string | null
  ```

* height

  ```ts
  number | null
  ```

* sensitive

  ```ts
  boolean
  ```

* thumbhash

  ```ts
  string | null
  ```

* url

  ```ts
  string
  ```

* width

  ```ts
  number | null
  ```

#### LogoTheme

* id

  ```ts
  string
  ```

* logoImage

  ```ts
  ImageType | null
  ```

Examples

### Preview

![merchantcard](https://shopify.dev/assets/assets/images/templated-apis-screenshots/shop-minis/MerchantCard-BEB5ARky.png)

#### Examples

* ####

  ##### tsx

  ```tsx
  import {MerchantCard, useShop} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    const {shop} = useShop({id: 'shop1'})
    if (!shop) return null

    return <MerchantCard shop={shop} />
  }
  ```

***

---

<a id="productcard-productcard"></a>

## ProductCard

## ProductCard

Optimized for grid layouts with three variants: `default`, `priceOverlay`, and `compact`. Use default for product grids where details matter, priceOverlay for visual-first feeds, compact when dealing with limited space. For some list views where space is limited, `ProductLink` may work better. Exposes composable subcomponents for custom layouts.

##### Props

* **product**

  **Product**

  **required**

  The product to display in the card

* **badgeText**

  **string**

  Optional text to display in a badge on the card

* **badgeVariant**

  **'primary' | 'secondary' | 'destructive' | 'outline' | 'none'**

  Visual style variant for the badge

* **children**

  **React.ReactNode**

  Custom layout via children

* **favoriteButtonDisabled**

  **boolean**

  Whether the favorite button is disabled

* **impressionTrackingDisabled**

  **boolean**

  Whether to disable impression tracking

* **onFavoriteToggled**

  **(isFavorited: boolean) => void**

  Callback fired when the favorite button is toggled

* **onProductClick**

  **() => void**

  Callback fired when the product is clicked

* **reviewsDisabled**

  **boolean**

  Whether review stars are disabled

* **selectedProductVariant**

  **ProductVariant**

  Optional selected variant of the product to show specific variant data

* **touchable**

  **boolean**

  Whether the card can be clicked/tapped to navigate to product details

* **variant**

  **'default' | 'priceOverlay' | 'compact'**

  Visual style variant of the card

#### Product

* compareAtPrice

  ```ts
  Money | null
  ```

* defaultVariantId

  ```ts
  string
  ```

* featuredImage

  ```ts
  ProductImage | null
  ```

* id

  ```ts
  string
  ```

* isFavorited

  ```ts
  boolean
  ```

* price

  ```ts
  Money
  ```

* referral

  ```ts
  boolean
  ```

* reviewAnalytics

  ```ts
  { averageRating?: number; reviewCount?: number; }
  ```

* selectedVariant

  ```ts
  ProductVariant
  ```

* shop

  ```ts
  ProductShop
  ```

* title

  ```ts
  string
  ```

* variants

  ```ts
  ProductVariant[]
  ```

#### Money

* amount

  ```ts
  Decimal
  ```

* currencyCode

  ```ts
  CurrencyCode
  ```

#### Decimal

```ts
string
```

#### CurrencyCode

```ts
'AED' | 'AFN' | 'ALL' | 'AMD' | 'ANG' | 'AOA' | 'ARS' | 'AUD' | 'AWG' | 'AZN' | 'BAM' | 'BBD' | 'BDT' | 'BGN' | 'BHD' | 'BIF' | 'BMD' | 'BND' | 'BOB' | 'BRL' | 'BSD' | 'BTN' | 'BWP' | 'BYN' | 'BYR' | 'BZD' | 'CAD' | 'CDF' | 'CHF' | 'CLP' | 'CNY' | 'COP' | 'CRC' | 'CVE' | 'CZK' | 'DJF' | 'DKK' | 'DOP' | 'DZD' | 'EGP' | 'ERN' | 'ETB' | 'EUR' | 'FJD' | 'FKP' | 'GBP' | 'GEL' | 'GHS' | 'GIP' | 'GMD' | 'GNF' | 'GTQ' | 'GYD' | 'HKD' | 'HNL' | 'HRK' | 'HTG' | 'HUF' | 'IDR' | 'ILS' | 'INR' | 'IQD' | 'IRR' | 'ISK' | 'JEP' | 'JMD' | 'JOD' | 'JPY' | 'KES' | 'KGS' | 'KHR' | 'KID' | 'KMF' | 'KRW' | 'KWD' | 'KYD' | 'KZT' | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'LSL' | 'LTL' | 'LVL' | 'LYD' | 'MAD' | 'MDL' | 'MGA' | 'MKD' | 'MMK' | 'MNT' | 'MOP' | 'MRU' | 'MUR' | 'MVR' | 'MWK' | 'MXN' | 'MYR' | 'MZN' | 'NAD' | 'NGN' | 'NIO' | 'NOK' | 'NPR' | 'NZD' | 'OMR' | 'PAB' | 'PEN' | 'PGK' | 'PHP' | 'PKR' | 'PLN' | 'PYG' | 'QAR' | 'RON' | 'RSD' | 'RUB' | 'RWF' | 'SAR' | 'SBD' | 'SCR' | 'SDG' | 'SEK' | 'SGD' | 'SHP' | 'SLL' | 'SOS' | 'SRD' | 'SSP' | 'STD' | 'STN' | 'SYP' | 'SZL' | 'THB' | 'TJS' | 'TMT' | 'TND' | 'TOP' | 'TRY' | 'TTD' | 'TWD' | 'TZS' | 'UAH' | 'UGX' | 'USD' | 'UYU' | 'UZS' | 'VED' | 'VEF' | 'VES' | 'VND' | 'VUV' | 'WST' | 'XAF' | 'XCD' | 'XOF' | 'XPF' | 'XXX' | 'YER' | 'ZAR' | 'ZMW'
```

#### ProductImage

* altText

  ```ts
  string | null
  ```

* height

  ```ts
  number | null
  ```

* id

  ```ts
  string | null
  ```

* sensitive

  ```ts
  boolean | null
  ```

* thumbhash

  ```ts
  string | null
  ```

* url

  ```ts
  string
  ```

* width

  ```ts
  number | null
  ```

#### ProductVariant

* compareAtPrice

  ```ts
  Money | null
  ```

* id

  ```ts
  string
  ```

* image

  ```ts
  ProductImage | null
  ```

* isFavorited

  ```ts
  boolean
  ```

* price

  ```ts
  Money
  ```

* title

  ```ts
  string
  ```

#### ProductShop

* id

  ```ts
  string
  ```

* name

  ```ts
  string
  ```

Examples

### Preview

![productcard](https://shopify.dev/assets/assets/images/templated-apis-screenshots/shop-minis/ProductCard-Bcgva7c6.png)

#### Examples

* ####

  ##### tsx

  ```tsx
  import {ProductCard} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    const handleFavoriteToggled = (productId: string, isFavorited: boolean) => {
      console.log('Favorite toggled:', productId, isFavorited)
    }

    const product = {
      id: '1',
      title: 'The Hero Snowboard',
      price: {amount: '702.95', currencyCode: 'USD'},
      featuredImage: {
        url: 'https://images.unsplash.com/photo-1551524164-687a55dd1126?w=400&h=400&fit=crop&crop=center',
        altText: 'The Hero Snowboard',
        sensitive: false,
      },
      shop: {id: 'shop1', name: 'Snow Sports Co.'},
      defaultVariantId: 'variant1',
      isFavorited: false,
      reviewAnalytics: {averageRating: 4.5, reviewCount: 123},
    }

    return (
      <ProductCard product={product} onFavoriteToggled={handleFavoriteToggled} />
    )
  }
  ```

* ####

  ##### Description

  A default product card with product information

  ##### tsx

  ```tsx
  import {ProductCard} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    const handleFavoriteToggled = (productId: string, isFavorited: boolean) => {
      console.log('Favorite toggled:', productId, isFavorited)
    }

    const product = {
      id: '1',
      title: 'The Hero Snowboard',
      price: {amount: '702.95', currencyCode: 'USD'},
      featuredImage: {
        url: 'https://images.unsplash.com/photo-1551524164-687a55dd1126?w=400&h=400&fit=crop&crop=center',
        altText: 'The Hero Snowboard',
        sensitive: false,
      },
      shop: {id: 'shop1', name: 'Snow Sports Co.'},
      defaultVariantId: 'variant1',
      isFavorited: false,
      reviewAnalytics: {averageRating: 4.5, reviewCount: 123},
    }

    return (
      <ProductCard product={product} onFavoriteToggled={handleFavoriteToggled} />
    )
  }
  ```

* ####

  ##### Description

  A compact product card with minimal information

  ##### tsx

  ```tsx
  import {ProductCard} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    const product = {
      id: '1',
      title: 'The Hero Snowboard',
      price: {amount: '702.95', currencyCode: 'USD'},
      featuredImage: {
        url: 'https://images.unsplash.com/photo-1551524164-687a55dd1126?w=400&h=400&fit=crop&crop=center',
        altText: 'The Hero Snowboard',
        sensitive: false,
      },
      shop: {id: 'shop1', name: 'Snow Sports Co.'},
      defaultVariantId: 'variant1',
      isFavorited: false,
      reviewAnalytics: {averageRating: 4.5, reviewCount: 123},
    }

    return <ProductCard product={product} variant="compact" />
  }
  ```

***

---

<a id="productlink-productlink"></a>

## ProductLink

## ProductLink

A list item component for displaying products in search results, lists, and feeds. `ProductLink` works well for list views and search results where vertical space is limited. For grid layouts with larger images, you can use `ProductCard` instead. Supports custom actions (e.g., "Add to Cart") in place of the favorite button.

##### Props

* **product**

  **Product**

  **required**

  The product to display

* **customAction**

  **React.ReactNode**

  Custom action element to replace the favorite button. Must be provided with `onCustomActionClick`.

* **hideFavoriteAction**

  **boolean**

  Hide the favorite/save button

* **impressionTrackingDisabled**

  **boolean**

  Whether to disable impression tracking

* **onClick**

  **(product: Product) => void**

  Callback when the product link is clicked

* **onCustomActionClick**

  **() => void**

  Callback when the custom action is clicked. Must be provided with `customAction`.

* **reviewsDisabled**

  **boolean**

  Hide the review stars

#### Product

* compareAtPrice

  ```ts
  Money | null
  ```

* defaultVariantId

  ```ts
  string
  ```

* featuredImage

  ```ts
  ProductImage | null
  ```

* id

  ```ts
  string
  ```

* isFavorited

  ```ts
  boolean
  ```

* price

  ```ts
  Money
  ```

* referral

  ```ts
  boolean
  ```

* reviewAnalytics

  ```ts
  { averageRating?: number; reviewCount?: number; }
  ```

* selectedVariant

  ```ts
  ProductVariant
  ```

* shop

  ```ts
  ProductShop
  ```

* title

  ```ts
  string
  ```

* variants

  ```ts
  ProductVariant[]
  ```

#### Money

* amount

  ```ts
  Decimal
  ```

* currencyCode

  ```ts
  CurrencyCode
  ```

#### Decimal

```ts
string
```

#### CurrencyCode

```ts
'AED' | 'AFN' | 'ALL' | 'AMD' | 'ANG' | 'AOA' | 'ARS' | 'AUD' | 'AWG' | 'AZN' | 'BAM' | 'BBD' | 'BDT' | 'BGN' | 'BHD' | 'BIF' | 'BMD' | 'BND' | 'BOB' | 'BRL' | 'BSD' | 'BTN' | 'BWP' | 'BYN' | 'BYR' | 'BZD' | 'CAD' | 'CDF' | 'CHF' | 'CLP' | 'CNY' | 'COP' | 'CRC' | 'CVE' | 'CZK' | 'DJF' | 'DKK' | 'DOP' | 'DZD' | 'EGP' | 'ERN' | 'ETB' | 'EUR' | 'FJD' | 'FKP' | 'GBP' | 'GEL' | 'GHS' | 'GIP' | 'GMD' | 'GNF' | 'GTQ' | 'GYD' | 'HKD' | 'HNL' | 'HRK' | 'HTG' | 'HUF' | 'IDR' | 'ILS' | 'INR' | 'IQD' | 'IRR' | 'ISK' | 'JEP' | 'JMD' | 'JOD' | 'JPY' | 'KES' | 'KGS' | 'KHR' | 'KID' | 'KMF' | 'KRW' | 'KWD' | 'KYD' | 'KZT' | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'LSL' | 'LTL' | 'LVL' | 'LYD' | 'MAD' | 'MDL' | 'MGA' | 'MKD' | 'MMK' | 'MNT' | 'MOP' | 'MRU' | 'MUR' | 'MVR' | 'MWK' | 'MXN' | 'MYR' | 'MZN' | 'NAD' | 'NGN' | 'NIO' | 'NOK' | 'NPR' | 'NZD' | 'OMR' | 'PAB' | 'PEN' | 'PGK' | 'PHP' | 'PKR' | 'PLN' | 'PYG' | 'QAR' | 'RON' | 'RSD' | 'RUB' | 'RWF' | 'SAR' | 'SBD' | 'SCR' | 'SDG' | 'SEK' | 'SGD' | 'SHP' | 'SLL' | 'SOS' | 'SRD' | 'SSP' | 'STD' | 'STN' | 'SYP' | 'SZL' | 'THB' | 'TJS' | 'TMT' | 'TND' | 'TOP' | 'TRY' | 'TTD' | 'TWD' | 'TZS' | 'UAH' | 'UGX' | 'USD' | 'UYU' | 'UZS' | 'VED' | 'VEF' | 'VES' | 'VND' | 'VUV' | 'WST' | 'XAF' | 'XCD' | 'XOF' | 'XPF' | 'XXX' | 'YER' | 'ZAR' | 'ZMW'
```

#### ProductImage

* altText

  ```ts
  string | null
  ```

* height

  ```ts
  number | null
  ```

* id

  ```ts
  string | null
  ```

* sensitive

  ```ts
  boolean | null
  ```

* thumbhash

  ```ts
  string | null
  ```

* url

  ```ts
  string
  ```

* width

  ```ts
  number | null
  ```

#### ProductVariant

* compareAtPrice

  ```ts
  Money | null
  ```

* id

  ```ts
  string
  ```

* image

  ```ts
  ProductImage | null
  ```

* isFavorited

  ```ts
  boolean
  ```

* price

  ```ts
  Money
  ```

* title

  ```ts
  string
  ```

#### ProductShop

* id

  ```ts
  string
  ```

* name

  ```ts
  string
  ```

Examples

### Preview

![productlink](https://shopify.dev/assets/assets/images/templated-apis-screenshots/shop-minis/ProductLink-DUa0xTsk.png)

#### Examples

* ####

  ##### tsx

  ```tsx
  import {ProductLink} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    const product = {
      id: '1',
      title: 'The Hero Snowboard',
      price: {amount: '702.95', currencyCode: 'USD'},
      featuredImage: {
        url: 'https://images.unsplash.com/photo-1551524164-687a55dd1126?w=400&h=400&fit=crop&crop=center',
        altText: 'The Hero Snowboard',
        sensitive: false,
      },
      shop: {id: 'shop1', name: 'Snow Sports Co.'},
      defaultVariantId: 'variant1',
      isFavorited: false,
      reviewAnalytics: {averageRating: 4.5, reviewCount: 123},
    }

    return <ProductLink product={product} />
  }
  ```

* ####

  ##### tsx

  ```tsx
  import {ProductLink} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    const product = {
      id: '1',
      title: 'The Hero Snowboard',
      price: {amount: '702.95', currencyCode: 'USD'},
      featuredImage: {
        url: 'https://images.unsplash.com/photo-1551524164-687a55dd1126?w=400&h=400&fit=crop&crop=center',
        altText: 'The Hero Snowboard',
        sensitive: false,
      },
      shop: {id: 'shop1', name: 'Snow Sports Co.'},
      defaultVariantId: 'variant1',
      isFavorited: false,
      reviewAnalytics: {averageRating: 4.5, reviewCount: 123},
    }

    return <ProductLink product={product} />
  }
  ```

* ####

  ##### tsx

  ```tsx
  import {ProductLink} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    const product = {
      id: '1',
      title: 'The Hero Snowboard',
      price: {amount: '702.95', currencyCode: 'USD'},
      featuredImage: {
        url: 'https://images.unsplash.com/photo-1551524164-687a55dd1126?w=400&h=400&fit=crop&crop=center',
        altText: 'The Hero Snowboard',
        sensitive: false,
      },
      shop: {id: 'shop1', name: 'Snow Sports Co.'},
      defaultVariantId: 'variant1',
      isFavorited: false,
      reviewAnalytics: {averageRating: 4.5, reviewCount: 123},
    }

    return <ProductLink product={product} hideFavoriteAction />
  }
  ```

***

---

<a id="search-search"></a>

## Search

## Search

Product search with automatic debouncing via `useProductSearch` hook. Two usage patterns: all-in-one `Search` component (fastest setup, fixed layout) or composable `SearchProvider` + `SearchInput` + `SearchResultsList` (custom layouts, shared search state). The all-in-one component handles input, loading skeletons, empty states, and infinite scroll. Use composable approach when you need custom result rendering or multiple search-dependent sections.

##### Props

* **children**

  **React.ReactNode**

  **required**

* **initialQuery**

  **string**

Examples

### Preview

![search](https://shopify.dev/assets/assets/images/templated-apis-screenshots/shop-minis/Search-LNQULaaC.png)

#### Examples

* ####

  ##### tsx

  ```tsx
  import React from 'react'
  import {Search} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    return (
      <div className="w-full h-[600px]">
        <Search initialQuery="shirt" />
      </div>
    )
  }
  ```

* ####

  ##### Description

  A component that has all the features of a product search

  ##### tsx

  ```tsx
  import React from 'react'
  import {Search} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    return (
      <div className="w-full h-[600px]">
        <Search initialQuery="shirt" />
      </div>
    )
  }
  ```

* ####

  ##### Description

  A composable way to build a search screen

  ##### tsx

  ```tsx
  import {
    SearchProvider,
    SearchInput,
    SearchResultsList,
  } from '@shopify/shop-minis-react'

  export default function MyComponent() {
    return (
      <SearchProvider>
        <SearchInput placeholder="Search products..." />
        <SearchResultsList />
      </SearchProvider>
    )
  }
  ```

***

---

<a id="hooks-hooks"></a>

## Hooks

## Hooks

***

### Content

[use​Create​Image​Content](https://shopify.dev/docs/api/shop-minis/hooks/content/usecreateimagecontent)

[The useCreateImageContent hook combines image upload with content creation to generate user-generated content entries.](https://shopify.dev/docs/api/shop-minis/hooks/content/usecreateimagecontent)

***

### Intents

[use​Intent](https://shopify.dev/docs/api/shop-minis/hooks/intents/useintent)

[Parses an intent passed to the Mini via deeplink, following the Shopify Intents API URI format (action:type,value).](https://shopify.dev/docs/api/shop-minis/hooks/intents/useintent)

***

### Navigation

[use​Close​Mini](https://shopify.dev/docs/api/shop-minis/hooks/hooks-navigation/useclosemini)

[Closes the Mini and returns the user to the Shop app.](https://shopify.dev/docs/api/shop-minis/hooks/hooks-navigation/useclosemini)

[use​Deeplink](https://shopify.dev/docs/api/shop-minis/hooks/hooks-navigation/usedeeplink)

[Retrieves the deeplink URL that launched the Mini, enabling external links to open specific screens with context.](https://shopify.dev/docs/api/shop-minis/hooks/hooks-navigation/usedeeplink)

[use​Navigate​With​Transition](https://shopify.dev/docs/api/shop-minis/hooks/hooks-navigation/usenavigatewithtransition)

[The useNavigateWithTransition hook provides programmatic navigation with smooth view transitions support.](https://shopify.dev/docs/api/shop-minis/hooks/hooks-navigation/usenavigatewithtransition)

[use​Shop​Navigation](https://shopify.dev/docs/api/shop-minis/hooks/hooks-navigation/useshopnavigation)

[Navigates to native Shop app screens (product details, shop profiles, orders, checkout, cart) while maintaining the Mini in the navigation stack.](https://shopify.dev/docs/api/shop-minis/hooks/hooks-navigation/useshopnavigation)

***

### Product

[use​Popular​Products](https://shopify.dev/docs/api/shop-minis/hooks/product/usepopularproducts)

[The usePopularProducts hook fetches popular products from the catalog.](https://shopify.dev/docs/api/shop-minis/hooks/product/usepopularproducts)

[use​Product](https://shopify.dev/docs/api/shop-minis/hooks/product/useproduct)

[The useProduct hook fetches a single product by its ID.](https://shopify.dev/docs/api/shop-minis/hooks/product/useproduct)

[use​Product​List](https://shopify.dev/docs/api/shop-minis/hooks/product/useproductlist)

[The useProductList hook fetches a single product collection by its ID.](https://shopify.dev/docs/api/shop-minis/hooks/product/useproductlist)

[use​Product​List​Actions](https://shopify.dev/docs/api/shop-minis/hooks/product/useproductlistactions)

[The useProductListActions hook provides mutation functions for managing product collections.](https://shopify.dev/docs/api/shop-minis/hooks/product/useproductlistactions)

[use​Product​Lists](https://shopify.dev/docs/api/shop-minis/hooks/product/useproductlists)

[The useProductLists hook fetches all product collections that the user has created.](https://shopify.dev/docs/api/shop-minis/hooks/product/useproductlists)

[use​Product​Media](https://shopify.dev/docs/api/shop-minis/hooks/product/useproductmedia)

[The useProductMedia hook fetches media items (images, videos, etc.) for a specific product.](https://shopify.dev/docs/api/shop-minis/hooks/product/useproductmedia)

[use​Products](https://shopify.dev/docs/api/shop-minis/hooks/product/useproducts)

[The useProducts hook efficiently fetches multiple products in a single batched request.](https://shopify.dev/docs/api/shop-minis/hooks/product/useproducts)

[use​Product​Search](https://shopify.dev/docs/api/shop-minis/hooks/product/useproductsearch)

[The useProductSearch hook fetches products based on a search query.](https://shopify.dev/docs/api/shop-minis/hooks/product/useproductsearch)

[use​Product​Variants](https://shopify.dev/docs/api/shop-minis/hooks/product/useproductvariants)

[The useProductVariants hook fetches product variants for a specific product.](https://shopify.dev/docs/api/shop-minis/hooks/product/useproductvariants)

[use​Recommended​Products](https://shopify.dev/docs/api/shop-minis/hooks/product/userecommendedproducts)

[The useRecommendedProducts hook fetches personalized product recommendations based on the user's shopping behavior, purchase history, and preferences in the Shop app.](https://shopify.dev/docs/api/shop-minis/hooks/product/userecommendedproducts)

***

### Shop

[use​Recommended​Shops](https://shopify.dev/docs/api/shop-minis/hooks/shop/userecommendedshops)

[The useRecommendedShops hook fetches personalized shop recommendations based on the user's purchase patterns, followed shops, and product interests in the Shop app.](https://shopify.dev/docs/api/shop-minis/hooks/shop/userecommendedshops)

[use​Shop](https://shopify.dev/docs/api/shop-minis/hooks/shop/useshop)

[The useShop hook enables fetching a shop by its ID.](https://shopify.dev/docs/api/shop-minis/hooks/shop/useshop)

***

### Storage

[use​Async​Storage](https://shopify.dev/docs/api/shop-minis/hooks/storage/useasyncstorage)

[The useAsyncStorage hook provides functions to interact with persistent storage for non-sensitive data.](https://shopify.dev/docs/api/shop-minis/hooks/storage/useasyncstorage)

[use​Image​Upload](https://shopify.dev/docs/api/shop-minis/hooks/storage/useimageupload)

[The useImageUpload hook provides image upload functionality, handling the complete upload pipeline.](https://shopify.dev/docs/api/shop-minis/hooks/storage/useimageupload)

[use​Secure​Storage](https://shopify.dev/docs/api/shop-minis/hooks/storage/usesecurestorage)

[The useSecureStorage hook provides functions to interact with secure storage for sensitive data.](https://shopify.dev/docs/api/shop-minis/hooks/storage/usesecurestorage)

***

### User

[use​Buyer​Attributes](https://shopify.dev/docs/api/shop-minis/hooks/user/usebuyerattributes)

[The useBuyerAttributes hook fetches shopping preference signals for personalization.](https://shopify.dev/docs/api/shop-minis/hooks/user/usebuyerattributes)

[use​Current​User](https://shopify.dev/docs/api/shop-minis/hooks/user/usecurrentuser)

[The useCurrentUser hook fetches the Shop app user's profile information including display name and avatar image URL.](https://shopify.dev/docs/api/shop-minis/hooks/user/usecurrentuser)

[use​Followed​Shops](https://shopify.dev/docs/api/shop-minis/hooks/user/usefollowedshops)

[The useFollowedShops hook fetches the collection of shops the user follows in the Shop app.](https://shopify.dev/docs/api/shop-minis/hooks/user/usefollowedshops)

[use​Followed​Shops​Actions](https://shopify.dev/docs/api/shop-minis/hooks/user/usefollowedshopsactions)

[The useFollowedShopsActions hook provides mutation functions to follow and unfollow shops.](https://shopify.dev/docs/api/shop-minis/hooks/user/usefollowedshopsactions)

[use​Generate​User​Token](https://shopify.dev/docs/api/shop-minis/hooks/user/usegenerateusertoken)

[The useGenerateUserToken hook generates a temporary token for authenticating the current user with your backend.](https://shopify.dev/docs/api/shop-minis/hooks/user/usegenerateusertoken)

[use​Orders](https://shopify.dev/docs/api/shop-minis/hooks/user/useorders)

[The useOrders hook fetches the user's recent order history from all Shop stores, sorted by most recent first.](https://shopify.dev/docs/api/shop-minis/hooks/user/useorders)

[use​Recent​Products](https://shopify.dev/docs/api/shop-minis/hooks/user/userecentproducts)

[The useRecentProducts hook fetches products the user recently viewed in the Shop app, ordered by recency.](https://shopify.dev/docs/api/shop-minis/hooks/user/userecentproducts)

[use​Recent​Shops](https://shopify.dev/docs/api/shop-minis/hooks/user/userecentshops)

[The useRecentShops hook fetches shops the user recently interacted with in the Shop app, ordered by recency.](https://shopify.dev/docs/api/shop-minis/hooks/user/userecentshops)

[use​Saved​Products](https://shopify.dev/docs/api/shop-minis/hooks/user/usesavedproducts)

[The useSavedProducts hook fetches the current user's saved products.](https://shopify.dev/docs/api/shop-minis/hooks/user/usesavedproducts)

[use​Saved​Products​Actions](https://shopify.dev/docs/api/shop-minis/hooks/user/usesavedproductsactions)

[The useSavedProductsActions hook provides mutation functions to save and unsave products (favorites).](https://shopify.dev/docs/api/shop-minis/hooks/user/usesavedproductsactions)

***

### Util

[use​Error​Screen](https://shopify.dev/docs/api/shop-minis/hooks/util/useerrorscreen)

[The useErrorScreen hook displays a full-screen blocking error UI.](https://shopify.dev/docs/api/shop-minis/hooks/util/useerrorscreen)

[use​Error​Toast](https://shopify.dev/docs/api/shop-minis/hooks/util/useerrortoast)

[The useErrorToast hook displays a non-blocking error notification.](https://shopify.dev/docs/api/shop-minis/hooks/util/useerrortoast)

[use​Image​Picker](https://shopify.dev/docs/api/shop-minis/hooks/util/useimagepicker)

[The useImagePicker hook provides access to camera and gallery functionality for selecting images.](https://shopify.dev/docs/api/shop-minis/hooks/util/useimagepicker)

[use​Keyboard​Avoiding​View](https://shopify.dev/docs/api/shop-minis/hooks/util/usekeyboardavoidingview)

[The useKeyboardAvoidingView hook automatically adjusts your layout when the on-screen keyboard appears, ensuring focused input fields remain visible.](https://shopify.dev/docs/api/shop-minis/hooks/util/usekeyboardavoidingview)

[use​Request​Permissions](https://shopify.dev/docs/api/shop-minis/hooks/util/userequestpermissions)

[The useRequestPermissions hook provides a function to request native device permissions from the user.](https://shopify.dev/docs/api/shop-minis/hooks/util/userequestpermissions)

[use​Safe​Area](https://shopify.dev/docs/api/shop-minis/hooks/util/usesafearea)

[Returns the safe area insets for the current device in pixels.](https://shopify.dev/docs/api/shop-minis/hooks/util/usesafearea)

[use​Share](https://shopify.dev/docs/api/shop-minis/hooks/util/useshare)

[The useShare hook provides native sharing functionality through the Shop app's share sheet.](https://shopify.dev/docs/api/shop-minis/hooks/util/useshare)

***

---

<a id="useasyncstorage-useasyncstorage"></a>

## useAsyncStorage

## useAsyncStorage

The `useAsyncStorage` hook provides functions to interact with persistent storage for non-sensitive data. Use this for user preferences, UI state, cached content, or any data where performance matters and encryption is not required. Data is stored in plaintext and persists between app sessions.

**Note:**

Use `useAsyncStorage` for non-sensitive data like themes, preferences, cached content, or application state. It supports multiple key-value pairs. Use `useSecureStorage` for sensitive data like authentication tokens. It provides hardware-backed encryption but only stores one secret per Mini and has slower performance.

**Caution:**

Do not store images, base64-encoded images, blobs, or any other binary data in async storage. This is against Shop Minis guidelines and will cause your Mini to be rejected during review. Async storage is designed for small, serializable key-value pairs only. For image handling, use the `useImageUpload` or `useCreateImageContent` hooks instead.

### use​Async​Storage()

#### Returns

* **UseAsyncStorageReturns**

#### UseAsyncStorageReturns

* clear

  Clear all items from the async storage.

  ```ts
  () => Promise<void>
  ```

* getAllKeys

  Get all keys in the async storage.

  ```ts
  () => Promise<string[]>
  ```

* getItem

  Get an item from the async storage.

  ```ts
  (params: GetAsyncStorageItemParams) => Promise<string>
  ```

* removeItem

  Remove an item from the async storage.

  ```ts
  (params: RemoveAsyncStorageItemParams) => Promise<void>
  ```

* setItem

  Set an item in the async storage.

  ```ts
  (params: SetAsyncStorageItemParams) => Promise<void>
  ```

#### GetAsyncStorageItemParams

* key

  ```ts
  string
  ```

#### RemoveAsyncStorageItemParams

* key

  ```ts
  string
  ```

#### SetAsyncStorageItemParams

* key

  ```ts
  string
  ```

* value

  ```ts
  string
  ```

Examples

#### Examples

* ####

  ##### tsx

  ```tsx
  import {useEffect} from 'react'

  import {useAsyncStorage} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    const {getItem, setItem, removeItem, getAllKeys, clear} = useAsyncStorage()

    useEffect(() => {
      async function handleStorageOperations() {
        // Get an item from storage
        const value = await getItem({key: 'myKey'})
        console.log({value})

        // Set an item in storage
        await setItem({key: 'myKey', value: 'Hello, World!'})

        // Remove an item from storage
        await removeItem({key: 'myKey'})

        // Get all keys in storage
        const keys = await getAllKeys()
        console.log({keys})

        // Clear all items from storage
        await clear()
      }

      handleStorageOperations()
    }, [getItem, removeItem, setItem, getAllKeys, clear])
  }
  ```

***

---

<a id="useimageupload-useimageupload"></a>

## useImageUpload

## useImageUpload

The `useImageUpload` hook provides image upload functionality, handling the complete upload pipeline. It returns basic image metadata (ID, URL, resource URL) with uploads automatically attached to the current user. This hook is the foundation for direct image storage scenarios like profile pictures, attachments, or cases where you manage image relationships and metadata yourself. For user-generated content requiring visibility controls, sharing capabilities, or content discovery features, `useCreateImageContent` builds on this hook to provide those higher-level abstractions.

### use​Image​Upload()

#### Returns

* **UseImageUploadReturns**

#### UseImageUploadReturns

* uploadImage

  Upload an image which will be attached to the current user.

  ```ts
  (image: File) => Promise<UploadedImage[]>
  ```

#### UploadedImage

* id

  The ID of the uploaded image.

  ```ts
  string
  ```

* imageUrl

  The URL of the uploaded image.

  ```ts
  string
  ```

* resourceUrl

  The resource URL of the uploaded image.

  ```ts
  string
  ```

Examples

#### Examples

* ####

  ##### tsx

  ```tsx
  import {useCallback} from 'react'

  import {useImageUpload, Button} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    const {uploadImage} = useImageUpload()

    const handleUpload = useCallback(async () => {
      const result = await uploadImage([
        {
          mimeType: 'image/jpeg',
          uri: 'file://path/to/image.jpg',
        },
      ])
      console.log('Uploaded image:', result[0])
    }, [uploadImage])

    return <Button onClick={handleUpload}>Upload image</Button>
  }
  ```

***

---

<a id="usesecurestorage-usesecurestorage"></a>

## useSecureStorage

## useSecureStorage

The `useSecureStorage` hook provides functions to interact with secure storage for sensitive data. You can use this for authentication tokens or any sensitive data that requires hardware-backed encryption.

**Caution:**

You can only store one secret per Mini.

**Note:**

Use `useSecureStorage` for sensitive data like auth tokens, API keys, or PII. It provides hardware-backed encryption on both iOS and Android, ensuring data is protected even if the device is compromised. The tradeoff is slower performance and a limit of one secret per Mini. Use `useAsyncStorage` for non-sensitive data like preferences or cached content. It supports multiple key-value pairs and is \~3x faster, but stores data in plaintext.

### use​Secure​Storage()

#### Returns

* **UseSecureStorageReturns**

#### UseSecureStorageReturns

* getSecret

  Get the secret from the secure storage.

  ```ts
  () => Promise<string>
  ```

* removeSecret

  Remove the secret from the secure storage.

  ```ts
  () => Promise<void>
  ```

* setSecret

  Set a secret in the secure storage.

  ```ts
  (params: SetSecretParams) => Promise<void>
  ```

#### SetSecretParams

* value

  ```ts
  string
  ```

Examples

#### Examples

* ####

  ##### tsx

  ```tsx
  import {useEffect} from 'react'

  import {useSecureStorage} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    const {getSecret, setSecret, removeSecret} = useSecureStorage()

    useEffect(() => {
      async function handleSecureStorageOperations() {
        // Get a secret from secure storage
        const secret = await getSecret()
        console.log({secret})

        // Set a secret in secure storage
        await setSecret({value: 'Sensitive Data'})

        // Remove a secret from secure storage
        await removeSecret()
      }

      handleSecureStorageOperations()
    }, [getSecret, setSecret, removeSecret])
  }
  ```

***

---

<a id="usebuyerattributes-usebuyerattributes"></a>

## useBuyerAttributes

## useBuyerAttributes

The `useBuyerAttributes` hook fetches shopping preference signals for personalization. Returns `genderAffinity` (MALE, FEMALE, or NEUTRAL) and `categoryAffinities` (list of product taxonomy categories the user engages with). Use this data to customize product recommendations, filter content, or tailor messaging. This is privacy-sensitive data derived from the user's Shop activity, always handle respectfully and transparently in your UI.

**Caution:**

This hook requires adding the following scopes to the manifest file:

`profile`

For more details, see [manifest.json](https://shopify.dev/docs/api/shop-minis/manifest-file).

### use​Buyer​Attributes(**[params](#props-propertydetail-params)**​)

#### Parameters

* **params**

  **UseBuyerAttributesParams**

#### Returns

* **UseBuyerAttributesReturns**

#### UseBuyerAttributesParams

* fetchPolicy

  ```ts
  DataHookFetchPolicy
  ```

* skip

  ```ts
  boolean
  ```

#### DataHookFetchPolicy

```ts
'cache-first' | 'network-only'
```

#### UseBuyerAttributesReturns

* buyerAttributes

  ```ts
  BuyerAttributes | null
  ```

* error

  ```ts
  Error | null
  ```

* loading

  ```ts
  boolean
  ```

* refetch

  ```ts
  () => Promise<void>
  ```

#### BuyerAttributes

* categoryAffinities

  ```ts
  TaxonomyCategory[]
  ```

* genderAffinity

  ```ts
  Gender
  ```

#### TaxonomyCategory

* ancestors

  ```ts
  TaxonomyCategory[]
  ```

* id

  ```ts
  string
  ```

* name

  ```ts
  string
  ```

#### Gender

```ts
'MALE' | 'FEMALE' | 'NEUTRAL'
```

Examples

#### Examples

* ####

  ##### tsx

  ```tsx
  import {useEffect} from 'react'

  import {useBuyerAttributes} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    const {buyerAttributes} = useBuyerAttributes()

    useEffect(() => {
      if (buyerAttributes) {
        const {genderAffinity, categoryAffinities} = buyerAttributes
        console.log({genderAffinity, categoryAffinities})
      }
    }, [buyerAttributes])
  }
  ```

***

---

<a id="usecurrentuser-usecurrentuser"></a>

## useCurrentUser

## useCurrentUser

The `useCurrentUser` hook fetches the Shop app user's profile information including display name and avatar image URL. Use this for personalizing the UI, displaying user info in headers/profiles, or conditionally showing features based on authentication status.

**Caution:**

This hook requires adding the following scopes to the manifest file:

`user_settings:read`

For more details, see [manifest.json](https://shopify.dev/docs/api/shop-minis/manifest-file).

### use​Current​User(**[params](#usecurrentusergeneratedtype-propertydetail-params)**​)

#### Parameters

* **params**

  **UseCurrentUserParams**

#### Returns

* **UseCurrentUserReturns**

#### UseCurrentUserParams

* fetchPolicy

  ```ts
  DataHookFetchPolicy
  ```

* skip

  ```ts
  boolean
  ```

#### DataHookFetchPolicy

```ts
'cache-first' | 'network-only'
```

#### UseCurrentUserReturns

* currentUser

  The current user logged into Shop.

  ```ts
  UserProfile | null
  ```

* error

  ```ts
  Error | null
  ```

* loading

  ```ts
  boolean
  ```

* refetch

  ```ts
  () => Promise<void>
  ```

#### UserProfile

* avatarImage

  ```ts
  {
      url: string
    } | null
  ```

* displayName

  ```ts
  string | null
  ```

Examples

#### Examples

* ####

  ##### tsx

  ```tsx
  import {useCurrentUser} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    const {currentUser} = useCurrentUser()

    console.log(currentUser)
  }
  ```

***

---

<a id="usefollowedshops-usefollowedshops"></a>

## useFollowedShops

## useFollowedShops

The `useFollowedShops` hook fetches the collection of shops the user follows in the Shop app. Use this to display followed brands, create quick-access shop lists, show follow status in UI, or build social commerce features. Pair with `useFollowedShopsActions()` to manage follow/unfollow operations.

### use​Followed​Shops(**[params](#usefollowedshopsgeneratedtype-propertydetail-params)**​)

#### Parameters

* **params**

  **UseFollowedShopsParams**

#### Returns

* **UseFollowedShopsReturns**

#### UseFollowedShopsParams

* fetchPolicy

  ```ts
  DataHookFetchPolicy
  ```

* first

  ```ts
  number
  ```

* skip

  ```ts
  boolean
  ```

#### DataHookFetchPolicy

```ts
'cache-first' | 'network-only'
```

#### UseFollowedShopsReturns

* error

  ```ts
  Error | null
  ```

* fetchMore

  ```ts
  () => Promise<void>
  ```

* hasNextPage

  ```ts
  boolean
  ```

* loading

  ```ts
  boolean
  ```

* refetch

  ```ts
  () => Promise<void>
  ```

* shops

  The followed shops returned from the query.

  ```ts
  Shop[] | null
  ```

#### Shop

* id

  ```ts
  string
  ```

* isFollowing

  ```ts
  boolean | null
  ```

* logoImage

  ```ts
  ProductImage | null
  ```

* name

  ```ts
  string
  ```

* primaryDomain

  ```ts
  { url: string; }
  ```

* reviewAnalytics

  ```ts
  { averageRating?: number; reviewCount: number; }
  ```

* shareUrl

  ```ts
  string | null
  ```

* visualTheme

  ```ts
  VisualTheme | null
  ```

#### ProductImage

* altText

  ```ts
  string | null
  ```

* height

  ```ts
  number | null
  ```

* id

  ```ts
  string | null
  ```

* sensitive

  ```ts
  boolean | null
  ```

* thumbhash

  ```ts
  string | null
  ```

* url

  ```ts
  string
  ```

* width

  ```ts
  number | null
  ```

#### VisualTheme

* brandSettings

  ```ts
  BrandSettings | null
  ```

* description

  ```ts
  string | null
  ```

* featuredImages

  ```ts
  ImageType[]
  ```

* id

  ```ts
  string
  ```

* logoImage

  ```ts
  ImageType | null
  ```

#### BrandSettings

* colors

  ```ts
  ColorTheme | null
  ```

* headerTheme

  ```ts
  HeaderTheme | null
  ```

* id

  ```ts
  string
  ```

* logos

  ```ts
  LogoTheme | null
  ```

#### ColorTheme

* coverDominant

  ```ts
  string | null
  ```

* id

  ```ts
  string
  ```

* logoAverage

  ```ts
  string | null
  ```

* logoDominant

  ```ts
  string | null
  ```

* primary

  ```ts
  string | null
  ```

* secondary

  ```ts
  string | null
  ```

* secondaryText

  ```ts
  string | null
  ```

* statusBarStyle

  ```ts
  string | null
  ```

#### HeaderTheme

* coverImage

  ```ts
  ImageType | null
  ```

* endingScrimColor

  ```ts
  string | null
  ```

* id

  ```ts
  string
  ```

* startingScrimColor

  ```ts
  string | null
  ```

* thumbnailImage

  ```ts
  ImageType | null
  ```

* videoUrl

  ```ts
  string | null
  ```

* wordmark

  ```ts
  ImageType | null
  ```

#### ImageType

* altText

  ```ts
  string | null
  ```

* height

  ```ts
  number | null
  ```

* sensitive

  ```ts
  boolean
  ```

* thumbhash

  ```ts
  string | null
  ```

* url

  ```ts
  string
  ```

* width

  ```ts
  number | null
  ```

#### LogoTheme

* id

  ```ts
  string
  ```

* logoImage

  ```ts
  ImageType | null
  ```

Examples

#### Examples

* ####

  ##### tsx

  ```tsx
  import {useFollowedShops, Button} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    const {shops, loading, error, hasNextPage, loadMore} = useFollowedShops({
      first: 10,
    })

    console.log({shops, loading, error})

    return (
      <>
        {/* Render shops here */}
        {hasNextPage && (
          <Button onClick={loadMore} disabled={loading}>
            Load More
          </Button>
        )}
      </>
    )
  }
  ```

***

---

<a id="usefollowedshopsactions-usefollowedshopsactions"></a>

## useFollowedShopsActions

## useFollowedShopsActions

The `useFollowedShopsActions` hook provides mutation functions to follow and unfollow shops. Returns `followShop()` and `unfollowShop()` functions that accept a shop GID. Following a shop adds it to the user's followed shops collection in the Shop app, enabling personalized recommendations. `useFollowedShops()` hook can be used to display current follow status.

**Caution:**

This hook requires adding the following scopes to the manifest file:

`shops:follows:write`

For more details, see [manifest.json](https://shopify.dev/docs/api/shop-minis/manifest-file).

### use​Followed​Shops​Actions()

#### Returns

* **UseFollowedShopsActionsReturns**

#### UseFollowedShopsActionsReturns

* followShop

  Follows a shop.

  ```ts
  (params: FollowShopParams) => Promise<boolean>
  ```

* unfollowShop

  Unfollows a shop.

  ```ts
  (params: UnfollowShopParams) => Promise<boolean>
  ```

#### FollowShopParams

* shopId

  ```ts
  string
  ```

#### UnfollowShopParams

* shopId

  ```ts
  string
  ```

Examples

#### Examples

* ####

  ##### tsx

  ```tsx
  import {useFollowedShopsActions, Button} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    const {followShop, unfollowShop} = useFollowedShopsActions()

    return (
      <>
        <Button onClick={() => followShop({shopId: 'gid://shopify/Shop/123'})}>
          Follow shop
        </Button>
        <Button onClick={() => unfollowShop({shopId: 'gid://shopify/Shop/123'})}>
          Unfollow shop
        </Button>
      </>
    )
  }
  ```

***

---

<a id="usegenerateusertoken-usegenerateusertoken"></a>

## useGenerateUserToken

## useGenerateUserToken

The `useGenerateUserToken` hook generates a temporary token for authenticating the current user with your backend. This token can be verified using the [`userTokenVerify`](https://shopify.dev/docs/api/shop-minis/minis-admin-api/mutations/usertokenverify) mutation to obtain a permanent user identifier. See [Verifying requests](https://shopify.dev/docs/api/shop-minis/network-requests#verifying-requests) for implementation details.

**Note:**

Some common use cases are: authenticating API requests to your backend, identifying users for personalized experiences, securely linking Shop users to your application's user database.

**Note:**

This hook optionally uses the following scope(s) when declared in the manifest: `openid`

For more details, see [manifest.json](https://shopify.dev/docs/api/shop-minis/manifest-file).

### use​Generate​User​Token()

#### Returns

* **UseGenerateUserTokenReturns**

#### UseGenerateUserTokenReturns

* generateUserToken

  Generates a temporary token for the user. Tokens are cached in memory and reused if still valid (with a 5-minute expiry buffer). A new token is automatically generated when the cached token is expired or missing.

  ```ts
  () => Promise<{ data: GeneratedTokenData; userErrors?: UserTokenGenerateUserErrors[]; }>
  ```

#### GeneratedTokenData

* expiresAt

  The expiration time of the token.

  ```ts
  ISO8601DateTime | null
  ```

* token

  A temporary token for the user.

  ```ts
  string | null
  ```

* userState

  Whether the user is verified or a guest.

  ```ts
  UserState | null
  ```

#### ISO8601DateTime

```ts
string
```

#### UserState

* GUEST

  ```ts
  GUEST
  ```

* VERIFIED

  ```ts
  VERIFIED
  ```

#### UserTokenGenerateUserErrors

* code

  ```ts
  UserTokenGenerateUserErrorCode
  ```

* field

  ```ts
  string[] | null
  ```

* message

  ```ts
  string
  ```

#### UserTokenGenerateUserErrorCode

* MINI\_NOT\_FOUND

  ```ts
  MINI_NOT_FOUND
  ```

* USER\_NOT\_FOUND

  ```ts
  USER_NOT_FOUND
  ```

Examples

#### Examples

* ####

  ##### tsx

  ```tsx
  import {useCallback} from 'react'

  import {useGenerateUserToken, Button} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    const {generateUserToken} = useGenerateUserToken()

    const performRequest = useCallback(async () => {
      const {data} = await generateUserToken()
      const {token, expiresAt, userState} = data

      console.log({token, expiresAt, userState})
    }, [generateUserToken])

    return <Button onPress={performRequest} text="Perform request" />
  }
  ```

***

---

<a id="useorders-useorders"></a>

## useOrders

## useOrders

The `useOrders` hook fetches the user's recent order history from all Shop stores, sorted by most recent first. Use this for order history pages, reorder functionality, tracking shipments, or customer support features. Orders are aggregated across all merchants the user has purchased from through Shop.

**Caution:**

This hook requires adding the following scopes to the manifest file:

`orders`

For more details, see [manifest.json](https://shopify.dev/docs/api/shop-minis/manifest-file).

### use​Orders(**[params](#useordersgeneratedtype-propertydetail-params)**​)

#### Parameters

* **params**

  **UseOrdersParams**

#### Returns

* **UseOrdersReturns**

#### UseOrdersParams

* fetchPolicy

  ```ts
  DataHookFetchPolicy
  ```

* first

  ```ts
  number
  ```

* skip

  ```ts
  boolean
  ```

#### DataHookFetchPolicy

```ts
'cache-first' | 'network-only'
```

#### UseOrdersReturns

* error

  ```ts
  Error | null
  ```

* fetchMore

  ```ts
  () => Promise<void>
  ```

* hasNextPage

  ```ts
  boolean
  ```

* loading

  ```ts
  boolean
  ```

* orders

  ```ts
  Order[] | null
  ```

* refetch

  ```ts
  () => Promise<void>
  ```

#### Order

* id

  ```ts
  string
  ```

* lineItems

  ```ts
  { productTitle: string; variantTitle: string; quantity: number; product: Product; }[]
  ```

* name

  ```ts
  string
  ```

* shop

  ```ts
  Shop | null
  ```

#### Product

* compareAtPrice

  ```ts
  Money | null
  ```

* defaultVariantId

  ```ts
  string
  ```

* featuredImage

  ```ts
  ProductImage | null
  ```

* id

  ```ts
  string
  ```

* isFavorited

  ```ts
  boolean
  ```

* price

  ```ts
  Money
  ```

* referral

  ```ts
  boolean
  ```

* reviewAnalytics

  ```ts
  { averageRating?: number; reviewCount?: number; }
  ```

* selectedVariant

  ```ts
  ProductVariant
  ```

* shop

  ```ts
  ProductShop
  ```

* title

  ```ts
  string
  ```

* variants

  ```ts
  ProductVariant[]
  ```

#### Money

* amount

  ```ts
  Decimal
  ```

* currencyCode

  ```ts
  CurrencyCode
  ```

#### Decimal

```ts
string
```

#### CurrencyCode

```ts
'AED' | 'AFN' | 'ALL' | 'AMD' | 'ANG' | 'AOA' | 'ARS' | 'AUD' | 'AWG' | 'AZN' | 'BAM' | 'BBD' | 'BDT' | 'BGN' | 'BHD' | 'BIF' | 'BMD' | 'BND' | 'BOB' | 'BRL' | 'BSD' | 'BTN' | 'BWP' | 'BYN' | 'BYR' | 'BZD' | 'CAD' | 'CDF' | 'CHF' | 'CLP' | 'CNY' | 'COP' | 'CRC' | 'CVE' | 'CZK' | 'DJF' | 'DKK' | 'DOP' | 'DZD' | 'EGP' | 'ERN' | 'ETB' | 'EUR' | 'FJD' | 'FKP' | 'GBP' | 'GEL' | 'GHS' | 'GIP' | 'GMD' | 'GNF' | 'GTQ' | 'GYD' | 'HKD' | 'HNL' | 'HRK' | 'HTG' | 'HUF' | 'IDR' | 'ILS' | 'INR' | 'IQD' | 'IRR' | 'ISK' | 'JEP' | 'JMD' | 'JOD' | 'JPY' | 'KES' | 'KGS' | 'KHR' | 'KID' | 'KMF' | 'KRW' | 'KWD' | 'KYD' | 'KZT' | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'LSL' | 'LTL' | 'LVL' | 'LYD' | 'MAD' | 'MDL' | 'MGA' | 'MKD' | 'MMK' | 'MNT' | 'MOP' | 'MRU' | 'MUR' | 'MVR' | 'MWK' | 'MXN' | 'MYR' | 'MZN' | 'NAD' | 'NGN' | 'NIO' | 'NOK' | 'NPR' | 'NZD' | 'OMR' | 'PAB' | 'PEN' | 'PGK' | 'PHP' | 'PKR' | 'PLN' | 'PYG' | 'QAR' | 'RON' | 'RSD' | 'RUB' | 'RWF' | 'SAR' | 'SBD' | 'SCR' | 'SDG' | 'SEK' | 'SGD' | 'SHP' | 'SLL' | 'SOS' | 'SRD' | 'SSP' | 'STD' | 'STN' | 'SYP' | 'SZL' | 'THB' | 'TJS' | 'TMT' | 'TND' | 'TOP' | 'TRY' | 'TTD' | 'TWD' | 'TZS' | 'UAH' | 'UGX' | 'USD' | 'UYU' | 'UZS' | 'VED' | 'VEF' | 'VES' | 'VND' | 'VUV' | 'WST' | 'XAF' | 'XCD' | 'XOF' | 'XPF' | 'XXX' | 'YER' | 'ZAR' | 'ZMW'
```

#### ProductImage

* altText

  ```ts
  string | null
  ```

* height

  ```ts
  number | null
  ```

* id

  ```ts
  string | null
  ```

* sensitive

  ```ts
  boolean | null
  ```

* thumbhash

  ```ts
  string | null
  ```

* url

  ```ts
  string
  ```

* width

  ```ts
  number | null
  ```

#### ProductVariant

* compareAtPrice

  ```ts
  Money | null
  ```

* id

  ```ts
  string
  ```

* image

  ```ts
  ProductImage | null
  ```

* isFavorited

  ```ts
  boolean
  ```

* price

  ```ts
  Money
  ```

* title

  ```ts
  string
  ```

#### ProductShop

* id

  ```ts
  string
  ```

* name

  ```ts
  string
  ```

#### Shop

* id

  ```ts
  string
  ```

* isFollowing

  ```ts
  boolean | null
  ```

* logoImage

  ```ts
  ProductImage | null
  ```

* name

  ```ts
  string
  ```

* primaryDomain

  ```ts
  { url: string; }
  ```

* reviewAnalytics

  ```ts
  { averageRating?: number; reviewCount: number; }
  ```

* shareUrl

  ```ts
  string | null
  ```

* visualTheme

  ```ts
  VisualTheme | null
  ```

#### VisualTheme

* brandSettings

  ```ts
  BrandSettings | null
  ```

* description

  ```ts
  string | null
  ```

* featuredImages

  ```ts
  ImageType[]
  ```

* id

  ```ts
  string
  ```

* logoImage

  ```ts
  ImageType | null
  ```

#### BrandSettings

* colors

  ```ts
  ColorTheme | null
  ```

* headerTheme

  ```ts
  HeaderTheme | null
  ```

* id

  ```ts
  string
  ```

* logos

  ```ts
  LogoTheme | null
  ```

#### ColorTheme

* coverDominant

  ```ts
  string | null
  ```

* id

  ```ts
  string
  ```

* logoAverage

  ```ts
  string | null
  ```

* logoDominant

  ```ts
  string | null
  ```

* primary

  ```ts
  string | null
  ```

* secondary

  ```ts
  string | null
  ```

* secondaryText

  ```ts
  string | null
  ```

* statusBarStyle

  ```ts
  string | null
  ```

#### HeaderTheme

* coverImage

  ```ts
  ImageType | null
  ```

* endingScrimColor

  ```ts
  string | null
  ```

* id

  ```ts
  string
  ```

* startingScrimColor

  ```ts
  string | null
  ```

* thumbnailImage

  ```ts
  ImageType | null
  ```

* videoUrl

  ```ts
  string | null
  ```

* wordmark

  ```ts
  ImageType | null
  ```

#### ImageType

* altText

  ```ts
  string | null
  ```

* height

  ```ts
  number | null
  ```

* sensitive

  ```ts
  boolean
  ```

* thumbhash

  ```ts
  string | null
  ```

* url

  ```ts
  string
  ```

* width

  ```ts
  number | null
  ```

#### LogoTheme

* id

  ```ts
  string
  ```

* logoImage

  ```ts
  ImageType | null
  ```

Examples

#### Examples

* ####

  ##### tsx

  ```tsx
  import {useOrders} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    const {orders, loading, error} = useOrders()

    console.log({orders, loading, error})
  }
  ```

***

---

<a id="userecentproducts-userecentproducts"></a>

## useRecentProducts

## useRecentProducts

The `useRecentProducts` hook fetches products the user recently viewed in the Shop app, ordered by recency. You can use this to create 'Continue Shopping' sections or personalized product recommendations based on browsing history.

### use​Recent​Products(**[params](#userecentproductsgeneratedtype-propertydetail-params)**​)

#### Parameters

* **params**

  **UseRecentProductsParams**

#### Returns

* **UseRecentProductsReturns**

#### UseRecentProductsParams

* fetchPolicy

  ```ts
  DataHookFetchPolicy
  ```

* first

  ```ts
  number
  ```

* includeSensitive

  ```ts
  boolean
  ```

* skip

  ```ts
  boolean
  ```

#### DataHookFetchPolicy

```ts
'cache-first' | 'network-only'
```

#### UseRecentProductsReturns

* error

  ```ts
  Error | null
  ```

* fetchMore

  ```ts
  () => Promise<void>
  ```

* hasNextPage

  ```ts
  boolean
  ```

* loading

  ```ts
  boolean
  ```

* products

  ```ts
  Product[] | null
  ```

* refetch

  ```ts
  () => Promise<void>
  ```

#### Product

* compareAtPrice

  ```ts
  Money | null
  ```

* defaultVariantId

  ```ts
  string
  ```

* featuredImage

  ```ts
  ProductImage | null
  ```

* id

  ```ts
  string
  ```

* isFavorited

  ```ts
  boolean
  ```

* price

  ```ts
  Money
  ```

* referral

  ```ts
  boolean
  ```

* reviewAnalytics

  ```ts
  { averageRating?: number; reviewCount?: number; }
  ```

* selectedVariant

  ```ts
  ProductVariant
  ```

* shop

  ```ts
  ProductShop
  ```

* title

  ```ts
  string
  ```

* variants

  ```ts
  ProductVariant[]
  ```

#### Money

* amount

  ```ts
  Decimal
  ```

* currencyCode

  ```ts
  CurrencyCode
  ```

#### Decimal

```ts
string
```

#### CurrencyCode

```ts
'AED' | 'AFN' | 'ALL' | 'AMD' | 'ANG' | 'AOA' | 'ARS' | 'AUD' | 'AWG' | 'AZN' | 'BAM' | 'BBD' | 'BDT' | 'BGN' | 'BHD' | 'BIF' | 'BMD' | 'BND' | 'BOB' | 'BRL' | 'BSD' | 'BTN' | 'BWP' | 'BYN' | 'BYR' | 'BZD' | 'CAD' | 'CDF' | 'CHF' | 'CLP' | 'CNY' | 'COP' | 'CRC' | 'CVE' | 'CZK' | 'DJF' | 'DKK' | 'DOP' | 'DZD' | 'EGP' | 'ERN' | 'ETB' | 'EUR' | 'FJD' | 'FKP' | 'GBP' | 'GEL' | 'GHS' | 'GIP' | 'GMD' | 'GNF' | 'GTQ' | 'GYD' | 'HKD' | 'HNL' | 'HRK' | 'HTG' | 'HUF' | 'IDR' | 'ILS' | 'INR' | 'IQD' | 'IRR' | 'ISK' | 'JEP' | 'JMD' | 'JOD' | 'JPY' | 'KES' | 'KGS' | 'KHR' | 'KID' | 'KMF' | 'KRW' | 'KWD' | 'KYD' | 'KZT' | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'LSL' | 'LTL' | 'LVL' | 'LYD' | 'MAD' | 'MDL' | 'MGA' | 'MKD' | 'MMK' | 'MNT' | 'MOP' | 'MRU' | 'MUR' | 'MVR' | 'MWK' | 'MXN' | 'MYR' | 'MZN' | 'NAD' | 'NGN' | 'NIO' | 'NOK' | 'NPR' | 'NZD' | 'OMR' | 'PAB' | 'PEN' | 'PGK' | 'PHP' | 'PKR' | 'PLN' | 'PYG' | 'QAR' | 'RON' | 'RSD' | 'RUB' | 'RWF' | 'SAR' | 'SBD' | 'SCR' | 'SDG' | 'SEK' | 'SGD' | 'SHP' | 'SLL' | 'SOS' | 'SRD' | 'SSP' | 'STD' | 'STN' | 'SYP' | 'SZL' | 'THB' | 'TJS' | 'TMT' | 'TND' | 'TOP' | 'TRY' | 'TTD' | 'TWD' | 'TZS' | 'UAH' | 'UGX' | 'USD' | 'UYU' | 'UZS' | 'VED' | 'VEF' | 'VES' | 'VND' | 'VUV' | 'WST' | 'XAF' | 'XCD' | 'XOF' | 'XPF' | 'XXX' | 'YER' | 'ZAR' | 'ZMW'
```

#### ProductImage

* altText

  ```ts
  string | null
  ```

* height

  ```ts
  number | null
  ```

* id

  ```ts
  string | null
  ```

* sensitive

  ```ts
  boolean | null
  ```

* thumbhash

  ```ts
  string | null
  ```

* url

  ```ts
  string
  ```

* width

  ```ts
  number | null
  ```

#### ProductVariant

* compareAtPrice

  ```ts
  Money | null
  ```

* id

  ```ts
  string
  ```

* image

  ```ts
  ProductImage | null
  ```

* isFavorited

  ```ts
  boolean
  ```

* price

  ```ts
  Money
  ```

* title

  ```ts
  string
  ```

#### ProductShop

* id

  ```ts
  string
  ```

* name

  ```ts
  string
  ```

Examples

#### Examples

* ####

  ##### tsx

  ```tsx
  import {useEffect} from 'react'

  import {useRecentProducts, Button} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    const {products, fetchMore} = useRecentProducts({first: 10})

    useEffect(() => {
      console.log(products)
    }, [products])

    return <Button onClick={fetchMore}>Fetch more</Button>
  }
  ```

***

---

<a id="userecentshops-userecentshops"></a>

## useRecentShops

## useRecentShops

The `useRecentShops` hook fetches shops the user recently interacted with in the Shop app, ordered by recency. You can use this to create quick access to favorite stores or personalized shop recommendations.

### use​Recent​Shops(**[params](#userecentshopsgeneratedtype-propertydetail-params)**​)

#### Parameters

* **params**

  **UseRecentShopsParams**

#### Returns

* **UseRecentShopsReturns**

#### UseRecentShopsParams

* fetchPolicy

  ```ts
  DataHookFetchPolicy
  ```

* first

  ```ts
  number
  ```

* skip

  ```ts
  boolean
  ```

#### DataHookFetchPolicy

```ts
'cache-first' | 'network-only'
```

#### UseRecentShopsReturns

* error

  ```ts
  Error | null
  ```

* fetchMore

  ```ts
  () => Promise<void>
  ```

* hasNextPage

  ```ts
  boolean
  ```

* loading

  ```ts
  boolean
  ```

* refetch

  ```ts
  () => Promise<void>
  ```

* shops

  The recent shops returned from the query.

  ```ts
  Shop[] | null
  ```

#### Shop

* id

  ```ts
  string
  ```

* isFollowing

  ```ts
  boolean | null
  ```

* logoImage

  ```ts
  ProductImage | null
  ```

* name

  ```ts
  string
  ```

* primaryDomain

  ```ts
  { url: string; }
  ```

* reviewAnalytics

  ```ts
  { averageRating?: number; reviewCount: number; }
  ```

* shareUrl

  ```ts
  string | null
  ```

* visualTheme

  ```ts
  VisualTheme | null
  ```

#### ProductImage

* altText

  ```ts
  string | null
  ```

* height

  ```ts
  number | null
  ```

* id

  ```ts
  string | null
  ```

* sensitive

  ```ts
  boolean | null
  ```

* thumbhash

  ```ts
  string | null
  ```

* url

  ```ts
  string
  ```

* width

  ```ts
  number | null
  ```

#### VisualTheme

* brandSettings

  ```ts
  BrandSettings | null
  ```

* description

  ```ts
  string | null
  ```

* featuredImages

  ```ts
  ImageType[]
  ```

* id

  ```ts
  string
  ```

* logoImage

  ```ts
  ImageType | null
  ```

#### BrandSettings

* colors

  ```ts
  ColorTheme | null
  ```

* headerTheme

  ```ts
  HeaderTheme | null
  ```

* id

  ```ts
  string
  ```

* logos

  ```ts
  LogoTheme | null
  ```

#### ColorTheme

* coverDominant

  ```ts
  string | null
  ```

* id

  ```ts
  string
  ```

* logoAverage

  ```ts
  string | null
  ```

* logoDominant

  ```ts
  string | null
  ```

* primary

  ```ts
  string | null
  ```

* secondary

  ```ts
  string | null
  ```

* secondaryText

  ```ts
  string | null
  ```

* statusBarStyle

  ```ts
  string | null
  ```

#### HeaderTheme

* coverImage

  ```ts
  ImageType | null
  ```

* endingScrimColor

  ```ts
  string | null
  ```

* id

  ```ts
  string
  ```

* startingScrimColor

  ```ts
  string | null
  ```

* thumbnailImage

  ```ts
  ImageType | null
  ```

* videoUrl

  ```ts
  string | null
  ```

* wordmark

  ```ts
  ImageType | null
  ```

#### ImageType

* altText

  ```ts
  string | null
  ```

* height

  ```ts
  number | null
  ```

* sensitive

  ```ts
  boolean
  ```

* thumbhash

  ```ts
  string | null
  ```

* url

  ```ts
  string
  ```

* width

  ```ts
  number | null
  ```

#### LogoTheme

* id

  ```ts
  string
  ```

* logoImage

  ```ts
  ImageType | null
  ```

Examples

#### Examples

* ####

  ##### tsx

  ```tsx
  import {useRecentShops, Button} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    const {shops, loading, error, hasNextPage, loadMore} = useRecentShops({
      first: 10,
    })

    console.log({shops, loading, error})

    return (
      <>
        {/* Render shops here */}
        {hasNextPage && (
          <Button onClick={loadMore} disabled={loading}>
            Load More
          </Button>
        )}
      </>
    )
  }
  ```

***

---

<a id="usesavedproducts-usesavedproducts"></a>

## useSavedProducts

## useSavedProducts

The `useSavedProducts` hook fetches the current user's saved products.

### use​Saved​Products(**[params](#usesavedproductsgeneratedtype-propertydetail-params)**​)

#### Parameters

* **params**

  **UseSavedProductsParams**

#### Returns

* **UseSavedProductsReturns**

#### UseSavedProductsParams

* fetchPolicy

  ```ts
  DataHookFetchPolicy
  ```

* first

  ```ts
  number
  ```

* includeSensitive

  ```ts
  boolean
  ```

* skip

  ```ts
  boolean
  ```

#### DataHookFetchPolicy

```ts
'cache-first' | 'network-only'
```

#### UseSavedProductsReturns

* error

  ```ts
  Error | null
  ```

* fetchMore

  ```ts
  () => Promise<void>
  ```

* hasNextPage

  ```ts
  boolean
  ```

* loading

  ```ts
  boolean
  ```

* products

  ```ts
  Product[] | null
  ```

* refetch

  ```ts
  () => Promise<void>
  ```

#### Product

* compareAtPrice

  ```ts
  Money | null
  ```

* defaultVariantId

  ```ts
  string
  ```

* featuredImage

  ```ts
  ProductImage | null
  ```

* id

  ```ts
  string
  ```

* isFavorited

  ```ts
  boolean
  ```

* price

  ```ts
  Money
  ```

* referral

  ```ts
  boolean
  ```

* reviewAnalytics

  ```ts
  { averageRating?: number; reviewCount?: number; }
  ```

* selectedVariant

  ```ts
  ProductVariant
  ```

* shop

  ```ts
  ProductShop
  ```

* title

  ```ts
  string
  ```

* variants

  ```ts
  ProductVariant[]
  ```

#### Money

* amount

  ```ts
  Decimal
  ```

* currencyCode

  ```ts
  CurrencyCode
  ```

#### Decimal

```ts
string
```

#### CurrencyCode

```ts
'AED' | 'AFN' | 'ALL' | 'AMD' | 'ANG' | 'AOA' | 'ARS' | 'AUD' | 'AWG' | 'AZN' | 'BAM' | 'BBD' | 'BDT' | 'BGN' | 'BHD' | 'BIF' | 'BMD' | 'BND' | 'BOB' | 'BRL' | 'BSD' | 'BTN' | 'BWP' | 'BYN' | 'BYR' | 'BZD' | 'CAD' | 'CDF' | 'CHF' | 'CLP' | 'CNY' | 'COP' | 'CRC' | 'CVE' | 'CZK' | 'DJF' | 'DKK' | 'DOP' | 'DZD' | 'EGP' | 'ERN' | 'ETB' | 'EUR' | 'FJD' | 'FKP' | 'GBP' | 'GEL' | 'GHS' | 'GIP' | 'GMD' | 'GNF' | 'GTQ' | 'GYD' | 'HKD' | 'HNL' | 'HRK' | 'HTG' | 'HUF' | 'IDR' | 'ILS' | 'INR' | 'IQD' | 'IRR' | 'ISK' | 'JEP' | 'JMD' | 'JOD' | 'JPY' | 'KES' | 'KGS' | 'KHR' | 'KID' | 'KMF' | 'KRW' | 'KWD' | 'KYD' | 'KZT' | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'LSL' | 'LTL' | 'LVL' | 'LYD' | 'MAD' | 'MDL' | 'MGA' | 'MKD' | 'MMK' | 'MNT' | 'MOP' | 'MRU' | 'MUR' | 'MVR' | 'MWK' | 'MXN' | 'MYR' | 'MZN' | 'NAD' | 'NGN' | 'NIO' | 'NOK' | 'NPR' | 'NZD' | 'OMR' | 'PAB' | 'PEN' | 'PGK' | 'PHP' | 'PKR' | 'PLN' | 'PYG' | 'QAR' | 'RON' | 'RSD' | 'RUB' | 'RWF' | 'SAR' | 'SBD' | 'SCR' | 'SDG' | 'SEK' | 'SGD' | 'SHP' | 'SLL' | 'SOS' | 'SRD' | 'SSP' | 'STD' | 'STN' | 'SYP' | 'SZL' | 'THB' | 'TJS' | 'TMT' | 'TND' | 'TOP' | 'TRY' | 'TTD' | 'TWD' | 'TZS' | 'UAH' | 'UGX' | 'USD' | 'UYU' | 'UZS' | 'VED' | 'VEF' | 'VES' | 'VND' | 'VUV' | 'WST' | 'XAF' | 'XCD' | 'XOF' | 'XPF' | 'XXX' | 'YER' | 'ZAR' | 'ZMW'
```

#### ProductImage

* altText

  ```ts
  string | null
  ```

* height

  ```ts
  number | null
  ```

* id

  ```ts
  string | null
  ```

* sensitive

  ```ts
  boolean | null
  ```

* thumbhash

  ```ts
  string | null
  ```

* url

  ```ts
  string
  ```

* width

  ```ts
  number | null
  ```

#### ProductVariant

* compareAtPrice

  ```ts
  Money | null
  ```

* id

  ```ts
  string
  ```

* image

  ```ts
  ProductImage | null
  ```

* isFavorited

  ```ts
  boolean
  ```

* price

  ```ts
  Money
  ```

* title

  ```ts
  string
  ```

#### ProductShop

* id

  ```ts
  string
  ```

* name

  ```ts
  string
  ```

Examples

#### Examples

* ####

  ##### tsx

  ```tsx
  import {useEffect} from 'react'

  import {useSavedProducts, Button} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    const {products, fetchMore} = useSavedProducts({first: 10})

    useEffect(() => {
      console.log(products)
    }, [products])

    return <Button onClick={fetchMore}>Fetch more</Button>
  }
  ```

***

---

<a id="usesavedproductsactions-usesavedproductsactions"></a>

## useSavedProductsActions

## useSavedProductsActions

The `useSavedProductsActions` hook provides mutation functions to save and unsave products (favorites). Returns `saveProduct()` and `unsaveProduct()` functions that accept product IDs and variant information. Saving a product adds it to the user's products collection in the Shop app. Use with `useSavedProducts()` to display current saved status and implement optimistic UI updates.

**Caution:**

This hook requires adding the following scopes to the manifest file:

`product_list:write`

For more details, see [manifest.json](https://shopify.dev/docs/api/shop-minis/manifest-file).

### use​Saved​Products​Actions()

#### Returns

* **UseSavedProductsActionsReturns**

#### UseSavedProductsActionsReturns

* saveProduct

  Save a product.

  ```ts
  (params: FavoriteParams) => Promise<void>
  ```

* unsaveProduct

  Unsave a product.

  ```ts
  (params: UnfavoriteParams) => Promise<void>
  ```

#### FavoriteParams

* productId

  ```ts
  string
  ```

* productVariantId

  ```ts
  string
  ```

* shopId

  ```ts
  string
  ```

#### UnfavoriteParams

* productId

  ```ts
  string
  ```

* productVariantId

  ```ts
  string
  ```

* shopId

  ```ts
  string
  ```

Examples

#### Examples

* ####

  ##### tsx

  ```tsx
  import {useSavedProductsActions, Button} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    const {saveProduct, unsaveProduct} = useSavedProductsActions()

    return (
      <>
        <Button
          onClick={() =>
            saveProduct({
              productId: 'gid://shopify/Product/123',
              productVariantId: 'gid://shopify/ProductVariant/456',
              shopId: 'gid://shopify/Shop/42',
            })
          }
        >
          Save product
        </Button>
        <Button
          onClick={() =>
            unsaveProduct({
              productId: 'gid://shopify/Product/123',
              productVariantId: 'gid://shopify/ProductVariant/456',
              shopId: 'gid://shopify/Shop/42',
            })
          }
        >
          Unsave product
        </Button>
      </>
    )
  }
  ```

***

---

<a id="useclosemini-useclosemini"></a>

## useCloseMini

## useCloseMini

Closes the Mini and returns the user to the Shop app. The Mini's WebView is destroyed and all state is lost. Use this for explicit exit flows (order completed, user cancellation) or when navigation should leave the Mini context entirely. Unlike `useShopNavigation`, which navigates to other Shop screens while keeping the Mini in the navigation stack, this removes the Mini from the stack.

### use​Close​Mini()

#### Returns

* **UseCloseMiniReturns**

#### UseCloseMiniReturns

* closeMini

  Closes the Mini viewer.

  ```ts
  () => void
  ```

Examples

#### Examples

* ####

  ##### tsx

  ```tsx
  import {useCloseMini, Button} from '@shopify/shop-minis-react'

  export function Example() {
    const {closeMini} = useCloseMini()

    return <Button onClick={closeMini}>Close Mini</Button>
  }
  ```

***

---

<a id="usedeeplink-usedeeplink"></a>

## useDeeplink

## useDeeplink

Retrieves the deeplink URL that launched the Mini, enabling external links to open specific screens with context. Use on mount to route to the correct initial screen based on the returned `path`, `queryParams` or `hash`. Common use: email/notification links opening to specific nested screens.

### use​Deeplink()

#### Returns

* **UseDeeplinkReturnType**

#### UseDeeplinkReturnType

* hash

  The hash of the deeplink.

  ```ts
  string
  ```

* path

  The path of the deeplink.

  ```ts
  string
  ```

* queryParams

  The query parameters of the deeplink.

  ```ts
  { [key: string]: string; }
  ```

Examples

#### Examples

* ####

  ##### tsx

  ```tsx
  import {useDeeplink} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    const {path, queryParams, hash} = useDeeplink()

    console.log({path, queryParams, hash})
  }
  ```

***

---

<a id="usenavigatewithtransition-usenavigatewithtransition"></a>

## useNavigateWithTransition

## useNavigateWithTransition

The `useNavigateWithTransition` hook provides programmatic navigation with smooth view transitions support. It wraps React Router's `useNavigate` hook with CSS View Transitions API integration, enabling app-like page transitions when the browser supports it. Falls back gracefully to standard navigation on unsupported browsers.

Examples

#### Examples

* ####

  ##### tsx

  ```tsx
  import {useNavigateWithTransition, Button} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    const transitionNavigate = useNavigateWithTransition()

    const handleProductClick = () => {
      transitionNavigate('/products/123')
    }

    const handleGoBack = () => {
      transitionNavigate(-1)
    }

    return (
      <>
        <Button onClick={handleProductClick}>View Product</Button>
        <Button onClick={handleGoBack}>Go Back</Button>
      </>
    )
  }
  ```

* ####

  ##### Description

  Navigate to a specific route with smooth transition

  ##### tsx

  ```tsx
  import React from 'react'
  import {useNavigateWithTransition, Button} from '@shopify/shop-minis-react'

  function ProductActions({productId}: {productId: string}) {
    const navigateWithTransition = useNavigateWithTransition()

    const handleViewDetails = () => {
      // Navigate to product details page with smooth transition
      navigateWithTransition(`/products/${productId}`)
    }

    const handleViewCategory = (category: string) => {
      // Navigate to category page
      navigateWithTransition(`/categories/${category}`)
    }

    const handleCheckout = () => {
      // Navigate to checkout with query parameters
      navigateWithTransition('/checkout?step=shipping')
    }

    return (
      <div>
        <Button onPress={handleViewDetails}>
          View Product Details
        </Button>
        <Button onPress={() => handleViewCategory('electronics')}>
          Browse Electronics
        </Button>
        <Button onPress={handleCheckout}>
          Proceed to Checkout
        </Button>
      </div>
    )
  }

  export default ProductActions
  ```

* ####

  ##### Description

  Navigate back and forward in history with transitions

  ##### tsx

  ```tsx
  import React from 'react'
  import {useNavigateWithTransition, Button} from '@shopify/shop-minis-react'

  function NavigationControls() {
    const navigateWithTransition = useNavigateWithTransition()

    const handleGoBack = () => {
      // Navigate back one page in history with smooth transition
      navigateWithTransition(-1)
    }

    const handleGoBackTwo = () => {
      // Navigate back two pages
      navigateWithTransition(-2)
    }

    const handleGoForward = () => {
      // Navigate forward one page in history
      navigateWithTransition(1)
    }

    return (
      <div className="navigation-controls">
        <Button onPress={handleGoBack}>
          Back
        </Button>
        <Button onPress={handleGoBackTwo}>
          Back to Home
        </Button>
        <Button onPress={handleGoForward}>
          Forward
        </Button>
      </div>
    )
  }

  export default NavigationControls
  ```

* ####

  ##### Description

  Navigation with options like replace and state

  ##### tsx

  ```tsx
  import React from 'react'
  import {useNavigateWithTransition, Button} from '@shopify/shop-minis-react'

  function AdvancedNavigation() {
    const navigateWithTransition = useNavigateWithTransition()

    const handleReplaceNavigation = () => {
      // Replace current history entry instead of pushing a new one
      navigateWithTransition('/login', { replace: true })
    }

    const handleNavigationWithState = () => {
      // Pass state data to the next page
      navigateWithTransition('/checkout', {
        state: {
          from: 'product-page',
          cartItems: 3,
          timestamp: Date.now()
        }
      })
    }

    const handleConditionalNavigation = async () => {
      try {
        const isValid = await validateSession()

        if (isValid) {
          // Navigate with both replace and state options
          navigateWithTransition('/dashboard', {
            replace: true,
            state: { authenticated: true }
          })
        } else {
          navigateWithTransition('/login')
        }
      } catch (error) {
        console.error('Navigation failed:', error)
      }
    }

    return (
      <div>
        <Button onPress={handleReplaceNavigation}>
          Login (Replace History)
        </Button>
        <Button onPress={handleNavigationWithState}>
          Checkout with State
        </Button>
        <Button onPress={handleConditionalNavigation}>
          Go to Dashboard
        </Button>
      </div>
    )
  }

  // Mock validation function
  async function validateSession() {
    return new Promise<boolean>((resolve) => {
      setTimeout(() => resolve(true), 100)
    })
  }

  export default AdvancedNavigation
  ```

***

---

<a id="useshopnavigation-useshopnavigation"></a>

## useShopNavigation

## useShopNavigation

Navigates to native Shop app screens (product details, shop profiles, orders, checkout, cart) while maintaining the Mini in the navigation stack. The Mini stays loaded in memory, so back navigation returns to your Mini. Use this when directing users to Shop-managed screens. It preserves native navigation animations, back button behavior, and keeps your Mini's session alive.

### use​Shop​Navigation()

#### Returns

* **UseShopNavigationReturns**

#### UseShopNavigationReturns

* navigateToCart

  Navigates to the cart screen.

  ```ts
  () => Promise<void>
  ```

* navigateToCheckout

  Navigates to a checkout.

  ```ts
  (params: NavigateToCheckoutParams) => Promise<void>
  ```

* navigateToOrder

  Navigates to an order.

  ```ts
  (params: NavigateToOrderParams) => Promise<void>
  ```

* navigateToProduct

  Navigates to a product.

  ```ts
  (params: NavigateToProductParams) => Promise<void>
  ```

* navigateToShop

  Navigates to a shop.

  ```ts
  (params: NavigateToShopParams) => Promise<void>
  ```

#### NavigateToCheckoutParams

* shopId

  The GID of the shop. E.g. \`gid://shopify/Shop/123\`.

  ```ts
  string
  ```

#### NavigateToOrderParams

* orderId

  The GID of the order. E.g. \`gid://shopify/Order/123\`.

  ```ts
  string
  ```

#### NavigateToProductParams

* attribution

  ```ts
  LineItemAttribution
  ```

* discountCode

  The discount code to apply to the product.

  ```ts
  string
  ```

* includedProductVariantGIDs

  ```ts
  string[]
  ```

* includedProductVariantIds

  ```ts
  string[]
  ```

* productId

  The GID of the product. E.g. \`gid://shopify/Product/123\`.

  ```ts
  string
  ```

* productVariantId

  If present, the GID of the variant that should be initially selected

  ```ts
  string
  ```

#### LineItemAttribution

* sourceIdentifier

  ```ts
  string
  ```

* sourceName

  ```ts
  string
  ```

#### NavigateToShopParams

* shopId

  ```ts
  string
  ```

Examples

#### Examples

* ####

  ##### tsx

  ```tsx
  import {useShopNavigation, Button} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    const {navigateToProduct, navigateToShop, navigateToOrder, navigateToCheckout} =
      useShopNavigation()

    return (
      <>
        <Button
          onClick={() =>
            navigateToProduct({productId: 'gid://shopify/Product/123'})
          }
        >
          View Product
        </Button>
        <Button
          onClick={() =>
            navigateToShop({
              shopId: 'gid://shopify/Shop/123',
            })
          }
        >
          Go to Shop
        </Button>
        <Button
          onClick={() => navigateToOrder({orderId: 'gid://shopify/Order/123'})}
        >
          View Order
        </Button>
        <Button
          onClick={() => navigateToCheckout({shopId: 'gid://shopify/Shop/123'})}
        >
          Go to Checkout
        </Button>
      </>
    )
  }
  ```

***

---

<a id="usecreateimagecontent-usecreateimagecontent"></a>

## useCreateImageContent

## useCreateImageContent

The `useCreateImageContent` hook combines image upload with content creation to generate user-generated content entries. Built on top of `useImageUpload`, it extends the basic upload functionality with content management features including titles, descriptions, visibility controls, product associations, and unique IDs for sharing and discovery.

#### Parameters

The `createImageContent` function accepts an object with the following fields:

* **`image`** (required): A `File` object representing the image to upload.
* **`contentTitle`** (required): The title for the content entry.
* **`visibility`** (optional): An array of `ContentVisibility` values (see below).
* **`externalId`** (optional): A unique identifier from your own system that lets you look up content later via `ContentWrapper` using an ID you already know. If not provided, the content can only be retrieved by its `publicId`. Each `externalId` must be unique per Mini — creating content with a duplicate `externalId` returns a `DUPLICATE_EXTERNAL_ID` error.
* **`description`** (optional): A text description for the content. Displayed alongside the content in Shop surfaces such as feeds and content detail views. Use this to provide context about the image, such as a caption or review text.
* **`productIds`** (optional): An array of Shopify product GIDs (e.g. `'gid://shopify/Product/123'`) to associate with the content. Maximum 20 products. Associated products appear alongside the content, enabling shoppable content experiences. If any product IDs are ineligible, the mutation will return an `INELIGIBLE_PRODUCTS` error.

#### Visibility Options

The `visibility` parameter accepts an optional array of `ContentVisibility` values:

* **`DISCOVERABLE`**: Makes content eligible for Shop's recommendation and discovery systems. Your content can appear in feeds and recommendations across the Shop app.
* **`LINKABLE`**: Enables shareable URLs for the content. When set, the created `Content` object includes a `shareableUrl` field containing a URL that can be shared externally. The shareable page renders OpenGraph meta tags (`og:title`, `og:image`, `og:description`) using the content's `contentTitle`, uploaded image, and `description` — so link previews in social media, messaging apps, and other platforms will display a rich card with the content's title, image, and description. Use the `useShare` hook to trigger the native share sheet with this URL.

#### Error Handling

The hook may return `userErrors` in the response with the following codes:

* **`DUPLICATE_EXTERNAL_ID`**: Returned when an `externalId` is provided that already exists for this Mini. Each `externalId` must be unique per content entry.
* **`INELIGIBLE_PRODUCTS`**: Returned when one or more `productIds` refer to products that are not eligible for Shop. The error message includes the specific ineligible product GIDs.

#### Use Cases

* **Shareable content with rich link previews**: Include `LINKABLE` in the `visibility` array and provide a `contentTitle`, `description`, and image. The returned `shareableUrl` points to a page with OpenGraph tags, so when shared via social media or messaging apps the link preview displays the content's title, image, and description as a rich card. Pass the `shareableUrl` to the `useShare` hook to open the native share sheet.
* **User reviews with photos**: Provide `description` for the review text, `productIds` to link the reviewed products, and `['DISCOVERABLE', 'LINKABLE']` visibility for maximum reach.
* **Shoppable lookbooks**: Upload styled images with associated `productIds` so users can shop the look.
* **Content lookup by your own ID**: Set `externalId` to an identifier from your system (e.g. a database row ID or slug) so you can retrieve the content later via `ContentWrapper` without storing the `publicId`.

The hook handles both the image upload pipeline and content entity creation in a single operation, automatically associating content with your Mini and integrating with Shop's content systems.

**Caution:**

You must run the [`setup`](https://shopify.dev/docs/api/shop-minis/commands/setup) CLI command before using this hook so the content can be associated with the Mini.

### use​Create​Image​Content()

#### Returns

* **UseCreateImageContentReturns**

#### UseCreateImageContentReturns

* createImageContent

  Upload an image and create content.

  ```ts
  (params: CreateImageContentParams) => Promise<{ data: Content; userErrors?: ContentCreateUserErrors[]; }>
  ```

* loading

  Whether the content is being created.

  ```ts
  boolean
  ```

#### CreateImageContentParams

* contentTitle

  The title for the content entry.

  ```ts
  string
  ```

* description

  A text description for the content. Displayed alongside the image in Shop surfaces such as feeds and content detail views. Use this to provide context about the image, such as a caption or review text.

  ```ts
  string
  ```

* externalId

  A unique identifier from your own system that lets you look up content later via \`ContentWrapper\` using an ID you already know. If not provided, the content can only be retrieved by its \`publicId\`. Each \`externalId\` must be unique per Mini — creating content with a duplicate returns a \`DUPLICATE\_EXTERNAL\_ID\` error.

  ```ts
  string
  ```

* image

  The image file to upload.

  ```ts
  File
  ```

* productIds

  An array of Shopify product GIDs (e.g. \`'gid://shopify/Product/123'\`) to associate with the content. Maximum 20 products. Associated products appear alongside the content, enabling shoppable content experiences.

  ```ts
  string[]
  ```

* visibility

  Visibility options for the content. Use \`\['DISCOVERABLE']\` to appear in recommendations, \`\['LINKABLE']\` to enable shareable URLs, or both. Pass \`null\` or \`\[]\` to keep content private within your Mini.

  ```ts
  ContentVisibility[] | null
  ```

#### ContentVisibility

```ts
'DISCOVERABLE' | 'LINKABLE'
```

#### Content

* description

  ```ts
  string | null
  ```

* externalId

  ```ts
  string | null
  ```

* image

  ```ts
  ContentImage
  ```

* products

  ```ts
  ContentProduct[] | null
  ```

* publicId

  ```ts
  string
  ```

* shareableUrl

  ```ts
  string | null
  ```

* status

  ```ts
  MinisContentStatus | null
  ```

* title

  ```ts
  string
  ```

* visibility

  ```ts
  ContentVisibility[]
  ```

#### ContentImage

* altText

  ```ts
  string | null
  ```

* height

  ```ts
  number | null
  ```

* id

  ```ts
  string | null
  ```

* thumbhash

  ```ts
  string | null
  ```

* url

  ```ts
  string
  ```

* width

  ```ts
  number | null
  ```

#### ContentProduct

* featuredImage

  ```ts
  ContentImage | null
  ```

* id

  ```ts
  string
  ```

* title

  ```ts
  string
  ```

#### MinisContentStatus

* PENDING

  ```ts
  PENDING
  ```

* READY

  ```ts
  READY
  ```

* REJECTED

  ```ts
  REJECTED
  ```

#### ContentCreateUserErrors

* code

  ```ts
  ContentCreateUserErrorCode
  ```

* message

  ```ts
  string
  ```

#### ContentCreateUserErrorCode

* DUPLICATE\_EXTERNAL\_ID

  ```ts
  DUPLICATE_EXTERNAL_ID
  ```

* INELIGIBLE\_PRODUCTS

  ```ts
  INELIGIBLE_PRODUCTS
  ```

Examples

#### Examples

* ####

  ##### tsx

  ```tsx
  import {
    useCreateImageContent,
    useImagePicker,
    Button,
  } from '@shopify/shop-minis-react'

  export default function MyComponent() {
    const {createImageContent, loading} = useCreateImageContent()
    const {openCamera, openGallery} = useImagePicker()

    const handleCameraCapture = async () => {
      try {
        const file = await openCamera()
        const result = await createImageContent({
          image: file,
          contentTitle: 'Photo from camera',
          visibility: ['DISCOVERABLE', 'LINKABLE'],
          // Optional: set an external ID for deduplication and lookup
          externalId: 'my-unique-id-123',
          // Optional: add a description
          description: 'A photo captured with the camera',
          // Optional: associate up to 20 products (by GID)
          productIds: ['gid://shopify/Product/1'],
        })
        console.log({data: result.data, userErrors: result.userErrors})
      } catch (error) {
        console.error('Failed to capture and upload image:', error)
      }
    }

    const handleGallerySelect = async () => {
      try {
        const file = await openGallery()
        const result = await createImageContent({
          image: file,
          contentTitle: 'Photo from gallery',
          // Visibility options:
          // - ['DISCOVERABLE'] - Appears in Shop recommendations
          // - ['LINKABLE'] - Enables shareable URLs
          // - ['DISCOVERABLE', 'LINKABLE'] - Both features
          // - null or [] - Private within Mini only
          visibility: ['DISCOVERABLE', 'LINKABLE'],
          description: 'A photo selected from the gallery',
        })
        console.log({data: result.data, userErrors: result.userErrors})
      } catch (error) {
        console.error('Failed to select and upload image:', error)
      }
    }

    return (
      <>
        <Button onClick={handleCameraCapture} disabled={loading}>
          Take Photo and Upload
        </Button>
        <Button onClick={handleGallerySelect} disabled={loading}>
          Select from Gallery and Upload
        </Button>
        {loading && <p>Uploading image...</p>}
      </>
    )
  }
  ```

* ####

  ##### Description

  A minimal example that uploads an image with a title and visibility.

  ##### tsx

  ```tsx
  import {
    useCreateImageContent,
    useImagePicker,
    Button,
  } from '@shopify/shop-minis-react'

  export default function BasicUpload() {
    const {createImageContent, loading} = useCreateImageContent()
    const {openGallery} = useImagePicker()

    const handleUpload = async () => {
      try {
        const file = await openGallery()
        const result = await createImageContent({
          image: file,
          contentTitle: 'My photo',
          visibility: ['DISCOVERABLE', 'LINKABLE'],
        })
        console.log('Created content:', result.data.publicId)
      } catch (error) {
        console.error('Upload failed:', error)
      }
    }

    return (
      <Button onClick={handleUpload} disabled={loading}>
        {loading ? 'Uploading...' : 'Upload Photo'}
      </Button>
    )
  }
  ```

* ####

  ##### Description

  Set \`externalId\` to an identifier from your own system so you can look up the content later via \`ContentWrapper\` without needing to store the \`publicId\`.

  ##### tsx

  ```tsx
  import {
    useCreateImageContent,
    useImagePicker,
    ContentWrapper,
    Button,
    Image,
  } from '@shopify/shop-minis-react'

  /**
   * Use `externalId` to look up content later using an ID you already know,
   * without needing to store the `publicId`.
   *
   * For example, if your Mini lets users upload a profile photo, you can set
   * the `externalId` to the user's ID in your system and later retrieve
   * the content with `<ContentWrapper externalId="user-42">`.
   */
  export default function WithExternalId() {
    const {createImageContent, loading} = useCreateImageContent()
    const {openCamera} = useImagePicker()

    // In practice this would come from your own user/session data
    const userId = 'user-42'

    const handleCapture = async () => {
      try {
        const file = await openCamera()
        const result = await createImageContent({
          image: file,
          contentTitle: 'Profile photo',
          visibility: ['DISCOVERABLE'],
          // Set externalId to an identifier from your own system.
          // You can then look up this content later via ContentWrapper
          // using the same ID — no need to persist the publicId.
          // Each externalId must be unique per Mini; duplicates return
          // a DUPLICATE_EXTERNAL_ID error.
          externalId: userId,
        })
        console.log('Created content:', result.data.publicId)
      } catch (error) {
        console.error('Upload failed:', error)
      }
    }

    return (
      <>
        <Button onClick={handleCapture} disabled={loading}>
          {loading ? 'Uploading...' : 'Upload Profile Photo'}
        </Button>

        {/* Later, retrieve the content by the same externalId */}
        <ContentWrapper externalId={userId}>
          {({content, loading: contentLoading}) => {
            if (contentLoading) return <p>Loading...</p>
            if (!content) return null
            return <Image src={content.image.url} alt={content.title} />
          }}
        </ContentWrapper>
      </>
    )
  }
  ```

* ####

  ##### Description

  Add a \`description\` to provide a caption or review text displayed alongside the image in Shop surfaces.

  ##### tsx

  ```tsx
  import {useState} from 'react'

  import {
    useCreateImageContent,
    useImagePicker,
    Button,
  } from '@shopify/shop-minis-react'

  /**
   * Add a description to provide context alongside the image.
   * Descriptions are displayed in Shop feeds and content detail views.
   */
  export default function WithDescription() {
    const {createImageContent, loading} = useCreateImageContent()
    const {openGallery} = useImagePicker()
    const [caption, setCaption] = useState('')

    const handleUpload = async () => {
      try {
        const file = await openGallery()
        const result = await createImageContent({
          image: file,
          contentTitle: 'Product review',
          // The description appears as body text alongside
          // the image in Shop surfaces like feeds and detail views.
          description: caption || 'Check out this product!',
          visibility: ['DISCOVERABLE', 'LINKABLE'],
        })
        console.log('Created content:', result.data.publicId)
      } catch (error) {
        console.error('Upload failed:', error)
      }
    }

    return (
      <>
        <input
          type="text"
          placeholder="Write a caption..."
          value={caption}
          onChange={e => setCaption(e.target.value)}
        />
        <Button onClick={handleUpload} disabled={loading}>
          {loading ? 'Posting...' : 'Post Review'}
        </Button>
      </>
    )
  }
  ```

* ####

  ##### Description

  Associate products with content using \`productIds\` to create shoppable images. Users can browse and purchase products directly from the content.

  ##### tsx

  ```tsx
  import {useState} from 'react'

  import {
    useCreateImageContent,
    useImagePicker,
    Button,
  } from '@shopify/shop-minis-react'

  /**
   * Associate products with content to create shoppable images.
   * Users can browse products directly from the content in Shop.
   */
  export default function WithProducts() {
    const {createImageContent, loading} = useCreateImageContent()
    const {openGallery} = useImagePicker()
    const [error, setError] = useState<string | null>(null)

    // These would typically come from your Mini's product selection UI
    const selectedProductIds = [
      'gid://shopify/Product/111',
      'gid://shopify/Product/222',
    ]

    const handleUpload = async () => {
      setError(null)
      try {
        const file = await openGallery()
        const result = await createImageContent({
          image: file,
          contentTitle: 'Shop the look',
          description: 'Styled outfit featuring our latest collection',
          visibility: ['DISCOVERABLE', 'LINKABLE'],
          // Associate up to 20 products by their Shopify GIDs.
          // If any product is ineligible, userErrors will contain
          // an INELIGIBLE_PRODUCTS error with the specific GIDs.
          productIds: selectedProductIds,
        })

        if (result.userErrors?.length) {
          setError(result.userErrors.map(e => e.message).join(', '))
          return
        }

        console.log('Created shoppable content:', result.data.publicId)
      } catch (err) {
        console.error('Upload failed:', err)
      }
    }

    return (
      <>
        <Button onClick={handleUpload} disabled={loading}>
          {loading ? 'Creating...' : 'Create Shoppable Post'}
        </Button>
        {error && <p style={{color: 'red'}}>{error}</p>}
      </>
    )
  }
  ```

* ####

  ##### Description

  Create content with \`LINKABLE\` visibility to get a \`shareableUrl\`. The URL renders OpenGraph meta tags (\`og:title\`, \`og:image\`, \`og:description\`) from the content's title, image, and description, so link previews in social media and messaging apps display a rich card. Use \`useShare\` to trigger the native share sheet.

  ##### tsx

  ```tsx
  import {useState} from 'react'

  import {
    useCreateImageContent,
    useImagePicker,
    useShare,
    Button,
  } from '@shopify/shop-minis-react'

  /**
   * Create shareable content with rich link previews.
   *
   * When `LINKABLE` is included in the `visibility` array, the created content
   * includes a `shareableUrl`. This URL points to a page that renders OpenGraph
   * meta tags (`og:title`, `og:image`, `og:description`) from the content's
   * title, image, and description — so link previews in social media, messaging
   * apps, and other platforms display a rich card automatically.
   */
  export default function ShareableContent() {
    const {createImageContent, loading} = useCreateImageContent()
    const {openGallery} = useImagePicker()
    const {share} = useShare()
    const [shareableUrl, setShareableUrl] = useState<string | null>(null)

    const handleCreateAndShare = async () => {
      try {
        const file = await openGallery()

        // 1. Create the content with LINKABLE visibility.
        //    The title, image, and description you provide here will appear
        //    in OpenGraph link previews when the shareableUrl is shared.
        const result = await createImageContent({
          image: file,
          contentTitle: 'My favorite outfit this week',
          description:
            'Loving this spring look — the colors are perfect for the season!',
          visibility: ['DISCOVERABLE', 'LINKABLE'],
        })

        const url = result.data.shareableUrl

        if (!url) {
          console.warn('No shareable URL returned — is LINKABLE set?')
          return
        }

        setShareableUrl(url)

        // 2. Open the native share sheet with the shareable URL.
        //    Recipients will see a rich preview card with the content's
        //    title, image, and description rendered via OpenGraph tags.
        await share({
          title: result.data.title,
          url,
        })
      } catch (error) {
        console.error('Failed to create or share content:', error)
      }
    }

    return (
      <>
        <Button onClick={handleCreateAndShare} disabled={loading}>
          {loading ? 'Creating...' : 'Upload & Share'}
        </Button>
        {shareableUrl && (
          <p>
            Shareable link: <a href={shareableUrl}>{shareableUrl}</a>
          </p>
        )}
      </>
    )
  }
  ```

***

### Related

[- ImageContentWrapper](https://shopify.dev/docs/api/shop-minis/components/primitives/imagecontentwrapper)

[- useShare](https://shopify.dev/docs/api/shop-minis/hooks/util/useshare)

***

---

<a id="useintent-useintent"></a>

## useIntent

## useIntent

Parses an intent passed to the Mini via deeplink, following the [Shopify Intents API](https://shopify.dev/docs/api/admin-extensions/latest/target-apis/utility-apis/intents-api) URI format (`action:type,value`). Returns the parsed `query` (`action`, `type`, `value`) and optional `data` payload. Use this hook to receive intents from the host app (Host → Mini direction), for example when the Shop app launches a Mini to handle a virtual try-on for a specific product.

### use​Intent()

#### Returns

* **UseIntentReturn**

#### UseIntentReturn

* data

  Additional JSON data passed with the intent, or null

  ```ts
  {[key: string]: unknown} | null
  ```

* query

  Parsed intent query, or null if no intent was passed

  ```ts
  IntentQuery | null
  ```

#### IntentQuery

Structured description of an intent, following the Shopify Intents API URI format: \`action:type,value\`

* action

  Verb describing the operation (e.g., 'try\_on', 'create', 'edit')

  ```ts
  string
  ```

* type

  Resource type identifier (e.g., 'shopify/Product', 'shop/UserImage')

  ```ts
  string
  ```

* value

  Resource GID (e.g., 'gid://shopify/Product/123') if applicable

  ```ts
  string | null
  ```

Examples

#### Examples

* ####

  ##### tsx

  ```tsx
  import {useEffect} from 'react'
  import {useIntent} from '@shopify/shop-minis-react'

  export default function MyMini() {
    const {query, data} = useIntent()

    const {action, type, value} = query ?? {}

    useEffect(() => {
      if (action === 'try_on' && value) {
        // Navigate to try-on screen with the product GID
        console.log(`Try on ${type}:`, value, data)
      }
    }, [query, data])
  }
  ```

***

### Related

[- Intents](https://shopify.dev/docs/api/shop-minis/intents)

[- useDeeplink](https://shopify.dev/docs/api/shop-minis/hooks/navigation/usedeeplink)

***

---

<a id="useerrorscreen-useerrorscreen"></a>

## useErrorScreen

## useErrorScreen

The `useErrorScreen` hook displays a full-screen blocking error UI. Use this for critical, unrecoverable errors that prevent users from continuing, such as missing required data or fatal API errors. The error screen takes over the entire Mini interface and typically requires user action to dismiss or retry.

**Note:**

Use `useErrorScreen` for critical failures that block the user workflow (e.g., authentication failures, data corruption, network timeouts that prevent the app from functioning). This provides a full-screen error UI that the user must acknowledge. Use `useErrorToast` for recoverable errors or informational warnings (e.g., failed to save preference, temporary network issues). This shows a non-blocking notification that auto-dismisses and allows users to continue their current task.

### use​Error​Screen()

#### Returns

* **UseErrorScreenReturns**

#### UseErrorScreenReturns

* showErrorScreen

  Show an error screen with the given error message.

  ```ts
  ShopActions
  ```

#### ShopActions

```ts
{
  [K in keyof ShopActionEvents as SnakeToCamelCase<K>]: ShopActionEvents[K]
}
```

#### ShopActionEvents

* ADD\_PRODUCT\_LIST

  ```ts
  ShopAction<AddProductListParams, ProductList>
  ```

* ADD\_PRODUCT\_LIST\_ITEM

  ```ts
  ShopAction<AddProductListItemParams, void>
  ```

* ADD\_TO\_CART

  ```ts
  ShopAction<AddToCartParams, void>
  ```

* BUY\_PRODUCT

  ```ts
  ShopAction<BuyProductParams, void>
  ```

* BUY\_PRODUCTS

  ```ts
  ShopAction<BuyProductsParams, void>
  ```

* CLEAR\_INTERNAL\_PERSISTED\_ITEMS

  ```ts
  ShopAction<void, void>
  ```

* CLEAR\_PERSISTED\_ITEMS

  ```ts
  ShopAction<void, void>
  ```

* CLOSE\_MINI

  ```ts
  ShopAction<void, void>
  ```

* COMPLETE\_IMAGE\_UPLOAD

  ```ts
  ShopAction<
      CompleteImageUploadParams,
      CompleteImageUploadResponse
    >
  ```

* CREATE\_CONTENT

  ```ts
  ShopAction<CreateContentParams, CreateContentResponse>
  ```

* CREATE\_IMAGE\_UPLOAD\_LINK

  ```ts
  ShopAction<
      CreateImageUploadLinkParams,
      CreateImageUploadLinkResponse
    >
  ```

* CREATE\_ORDER\_ATTRIBUTION

  ```ts
  ShopAction<CreateOrderAttributionParams, void>
  ```

* FAVORITE

  ```ts
  ShopAction<FavoriteParams, void>
  ```

* FOLLOW\_SHOP

  ```ts
  ShopAction<FollowShopParams, boolean>
  ```

* GENERATE\_USER\_TOKEN

  ```ts
  ShopAction<void, GenerateUserTokenResponse>
  ```

* GET\_ACCOUNT\_INFORMATION

  ```ts
  ShopAction<
      GetAccountInformationParams,
      GetAccountInformationResponse
    >
  ```

* GET\_ALL\_INTERNAL\_PERSISTED\_KEYS

  ```ts
  ShopAction<void, string[]>
  ```

* GET\_ALL\_PERSISTED\_KEYS

  ```ts
  ShopAction<void, string[]>
  ```

* GET\_BUYER\_ATTRIBUTES

  ```ts
  ShopAction<
      GetBuyerAttributesParams,
      GetBuyerAttributesResponse
    >
  ```

* GET\_CONTENT

  ```ts
  ShopAction<GetContentParams, GetContentResponse>
  ```

* GET\_CURRENT\_USER

  ```ts
  ShopAction<GetCurrentUserParams, GetCurrentUserResponse>
  ```

* GET\_DEEPLINK\_PATHS

  ```ts
  ShopAction<void, GetDeeplinkPathsResponse>
  ```

* GET\_FOLLOWED\_SHOPS

  ```ts
  ShopAction<
      GetFollowedShopsParams,
      GetFollowedShopsResponse
    >
  ```

* GET\_INTERNAL\_PERSISTED\_ITEM

  ```ts
  ShopAction<
      GetAsyncStorageItemParams,
      string | null
    >
  ```

* GET\_ORDERS

  ```ts
  ShopAction<GetOrdersParams, GetOrdersResponse>
  ```

* GET\_PERSISTED\_ITEM

  ```ts
  ShopAction<GetAsyncStorageItemParams, string | null>
  ```

* GET\_POPULAR\_PRODUCTS

  ```ts
  ShopAction<
      GetPopularProductsParams,
      GetPopularProductsResponse
    >
  ```

* GET\_PRODUCT

  ```ts
  ShopAction<GetProductParams, GetProductResponse>
  ```

* GET\_PRODUCT\_LIST

  ```ts
  ShopAction<GetProductListParams, GetProductListResponse>
  ```

* GET\_PRODUCT\_LISTS

  ```ts
  ShopAction<GetProductListsParams, GetProductListsResponse>
  ```

* GET\_PRODUCT\_MEDIA

  ```ts
  ShopAction<GetProductMediaParams, GetProductMediaResponse>
  ```

* GET\_PRODUCT\_REVIEWS

  ```ts
  ShopAction<
      GetProductReviewsParams,
      GetProductReviewsResponse
    >
  ```

* GET\_PRODUCT\_SEARCH

  ```ts
  ShopAction<
      GetProductSearchParams,
      GetProductSearchResponse
    >
  ```

* GET\_PRODUCT\_VARIANTS

  ```ts
  ShopAction<
      GetProductVariantsParams,
      GetProductVariantsResponse
    >
  ```

* GET\_PRODUCTS

  ```ts
  ShopAction<GetProductsParams, GetProductsResponse>
  ```

* GET\_RECENT\_PRODUCTS

  ```ts
  ShopAction<
      GetRecentProductsParams,
      GetRecentProductsResponse
    >
  ```

* GET\_RECENT\_SHOPS

  ```ts
  ShopAction<GetRecentShopsParams, GetRecentShopsResponse>
  ```

* GET\_RECOMMENDED\_PRODUCTS

  ```ts
  ShopAction<
      GetRecommendedProductsParams,
      GetRecommendedProductsResponse
    >
  ```

* GET\_RECOMMENDED\_SHOPS

  ```ts
  ShopAction<
      GetRecommendedShopsParams,
      GetRecommendedShopsResponse
    >
  ```

* GET\_SAVED\_PRODUCTS

  ```ts
  ShopAction<
      GetSavedProductsParams,
      GetSavedProductsResponse
    >
  ```

* GET\_SECRET

  ```ts
  ShopAction<void, string | null>
  ```

* GET\_SHOP

  ```ts
  ShopAction<GetShopParams, GetShopResponse>
  ```

* GET\_SHOP\_APP\_INFORMATION

  ```ts
  ShopAction<void, GetShopAppInformationResponse>
  ```

* NAVIGATE\_TO\_CART

  ```ts
  ShopAction<void, void>
  ```

* NAVIGATE\_TO\_CHECKOUT

  ```ts
  ShopAction<NavigateToCheckoutParams, void>
  ```

* NAVIGATE\_TO\_DEEPLINK

  ```ts
  ShopAction<NavigateToDeeplinkParams, void>
  ```

* NAVIGATE\_TO\_ORDER

  ```ts
  ShopAction<NavigateToOrderParams, void>
  ```

* NAVIGATE\_TO\_PRODUCT

  ```ts
  ShopAction<NavigateToProductParams, void>
  ```

* NAVIGATE\_TO\_SHOP

  ```ts
  ShopAction<NavigateToShopParams, void>
  ```

* PREVIEW\_PRODUCT\_IN\_AR

  ```ts
  ShopAction<PreviewProductInARParams, void>
  ```

* PRODUCT\_RECOMMENDATION\_CLICK

  ```ts
  ShopAction<
      ProductRecommendationClickParams,
      void
    >
  ```

* PRODUCT\_RECOMMENDATION\_IMPRESSION

  ```ts
  ShopAction<
      ProductRecommendationImpressionParams,
      void
    >
  ```

* REMOVE\_INTERNAL\_PERSISTED\_ITEM

  ```ts
  ShopAction<RemoveAsyncStorageItemParams, void>
  ```

* REMOVE\_PERSISTED\_ITEM

  ```ts
  ShopAction<RemoveAsyncStorageItemParams, void>
  ```

* REMOVE\_PRODUCT\_LIST

  ```ts
  ShopAction<RemoveProductListParams, void>
  ```

* REMOVE\_PRODUCT\_LIST\_ITEM

  ```ts
  ShopAction<RemoveProductListItemParams, void>
  ```

* REMOVE\_SECRET

  ```ts
  ShopAction<void, void>
  ```

* RENAME\_PRODUCT\_LIST

  ```ts
  ShopAction<RenameProductListParams, ProductList>
  ```

* REPORT\_CONTENT\_IMPRESSION

  ```ts
  ShopAction<ReportContentImpressionParams, void>
  ```

* REPORT\_ERROR

  ```ts
  ShopAction<ReportErrorParams, void>
  ```

* REPORT\_FETCH

  ```ts
  ShopAction<ReportFetchParams, void>
  ```

* REPORT\_IMPRESSION

  ```ts
  ShopAction<ReportImpressionParams, void>
  ```

* REPORT\_INTERACTION

  ```ts
  ShopAction<ReportInteractionParams, void>
  ```

* REQUEST\_PERMISSION

  ```ts
  ShopAction<
      RequestPermissionParams,
      RequestPermissionResponse
    >
  ```

* SEARCH\_PRODUCTS\_BY\_SHOP

  ```ts
  ShopAction<
      SearchProductsByShopParams,
      SearchProductsByShopResponse
    >
  ```

* SET\_INTERNAL\_PERSISTED\_ITEM

  ```ts
  ShopAction<SetAsyncStorageItemParams, void>
  ```

* SET\_PERSISTED\_ITEM

  ```ts
  ShopAction<SetAsyncStorageItemParams, void>
  ```

* SET\_PRODUCT\_LIST\_VISIBILITY

  ```ts
  ShopAction<
      SetProductListVisibilityParams,
      ProductList
    >
  ```

* SET\_SECRET

  ```ts
  ShopAction<SetSecretParams, void>
  ```

* SHARE

  ```ts
  ShopAction<ShareParams, ShareResponse>
  ```

* SHARE\_SINGLE

  ```ts
  ShopAction<ShareSingleParams, ShareSingleResponse>
  ```

* SHOW\_ERROR\_SCREEN

  ```ts
  ShopAction<ShowErrorScreenParams, void>
  ```

* SHOW\_ERROR\_TOAST

  ```ts
  ShopAction<ShowErrorToastParams, void>
  ```

* SHOW\_FEEDBACK\_SHEET

  ```ts
  ShopAction<ShowFeedbackSheetParams, void>
  ```

* TRANSLATE\_CONTENT\_DOWN

  ```ts
  ShopAction<void, void>
  ```

* TRANSLATE\_CONTENT\_UP

  ```ts
  ShopAction<TranslateContentUpParams, void>
  ```

* UNFAVORITE

  ```ts
  ShopAction<UnfavoriteParams, void>
  ```

* UNFOLLOW\_SHOP

  ```ts
  ShopAction<UnfollowShopParams, boolean>
  ```

#### ShopAction

A generic type representing any action in ShopActions. - N: The name of the action (string literal type) - P: The params type for the action - R: The result type for the action

* params

  ```ts
  P
  ```

returns

```ts
Promise<ShopActionResult<R>>
```

#### ShopActionResult

```ts
ShopActionOk<T> | ShopActionError
```

#### ShopActionOk

* data

  ```ts
  T
  ```

* mocked

  ```ts
  boolean
  ```

* ok

  ```ts
  true
  ```

#### ShopActionError

* error

  ```ts
  Error & { code?: string; }
  ```

* mocked

  ```ts
  boolean
  ```

* ok

  ```ts
  false
  ```

#### AddProductListParams

* description

  A description of the product list.

  ```ts
  string
  ```

* name

  The name of the product list.

  ```ts
  string
  ```

* privacyStatus

  The privacy status of the product list. Defaults to 'PRIVATE'.

  ```ts
  ProductListPrivacyStatus
  ```

#### ProductListPrivacyStatus

```ts
'PRIVATE' | 'PUBLIC'
```

#### ProductList

* id

  ```ts
  string
  ```

* name

  ```ts
  string | null
  ```

* privacyStatus

  ```ts
  ProductListPrivacyStatus
  ```

* products

  ```ts
  Product[]
  ```

* publicId

  ```ts
  string | null
  ```

#### Product

* compareAtPrice

  ```ts
  Money | null
  ```

* defaultVariantId

  ```ts
  string
  ```

* featuredImage

  ```ts
  ProductImage | null
  ```

* id

  ```ts
  string
  ```

* isFavorited

  ```ts
  boolean
  ```

* price

  ```ts
  Money
  ```

* referral

  ```ts
  boolean
  ```

* reviewAnalytics

  ```ts
  { averageRating?: number; reviewCount?: number; }
  ```

* selectedVariant

  ```ts
  ProductVariant
  ```

* shop

  ```ts
  ProductShop
  ```

* title

  ```ts
  string
  ```

* variants

  ```ts
  ProductVariant[]
  ```

#### Money

* amount

  ```ts
  Decimal
  ```

* currencyCode

  ```ts
  CurrencyCode
  ```

#### Decimal

```ts
string
```

#### CurrencyCode

```ts
'AED' | 'AFN' | 'ALL' | 'AMD' | 'ANG' | 'AOA' | 'ARS' | 'AUD' | 'AWG' | 'AZN' | 'BAM' | 'BBD' | 'BDT' | 'BGN' | 'BHD' | 'BIF' | 'BMD' | 'BND' | 'BOB' | 'BRL' | 'BSD' | 'BTN' | 'BWP' | 'BYN' | 'BYR' | 'BZD' | 'CAD' | 'CDF' | 'CHF' | 'CLP' | 'CNY' | 'COP' | 'CRC' | 'CVE' | 'CZK' | 'DJF' | 'DKK' | 'DOP' | 'DZD' | 'EGP' | 'ERN' | 'ETB' | 'EUR' | 'FJD' | 'FKP' | 'GBP' | 'GEL' | 'GHS' | 'GIP' | 'GMD' | 'GNF' | 'GTQ' | 'GYD' | 'HKD' | 'HNL' | 'HRK' | 'HTG' | 'HUF' | 'IDR' | 'ILS' | 'INR' | 'IQD' | 'IRR' | 'ISK' | 'JEP' | 'JMD' | 'JOD' | 'JPY' | 'KES' | 'KGS' | 'KHR' | 'KID' | 'KMF' | 'KRW' | 'KWD' | 'KYD' | 'KZT' | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'LSL' | 'LTL' | 'LVL' | 'LYD' | 'MAD' | 'MDL' | 'MGA' | 'MKD' | 'MMK' | 'MNT' | 'MOP' | 'MRU' | 'MUR' | 'MVR' | 'MWK' | 'MXN' | 'MYR' | 'MZN' | 'NAD' | 'NGN' | 'NIO' | 'NOK' | 'NPR' | 'NZD' | 'OMR' | 'PAB' | 'PEN' | 'PGK' | 'PHP' | 'PKR' | 'PLN' | 'PYG' | 'QAR' | 'RON' | 'RSD' | 'RUB' | 'RWF' | 'SAR' | 'SBD' | 'SCR' | 'SDG' | 'SEK' | 'SGD' | 'SHP' | 'SLL' | 'SOS' | 'SRD' | 'SSP' | 'STD' | 'STN' | 'SYP' | 'SZL' | 'THB' | 'TJS' | 'TMT' | 'TND' | 'TOP' | 'TRY' | 'TTD' | 'TWD' | 'TZS' | 'UAH' | 'UGX' | 'USD' | 'UYU' | 'UZS' | 'VED' | 'VEF' | 'VES' | 'VND' | 'VUV' | 'WST' | 'XAF' | 'XCD' | 'XOF' | 'XPF' | 'XXX' | 'YER' | 'ZAR' | 'ZMW'
```

#### ProductImage

* altText

  ```ts
  string | null
  ```

* height

  ```ts
  number | null
  ```

* id

  ```ts
  string | null
  ```

* sensitive

  ```ts
  boolean | null
  ```

* thumbhash

  ```ts
  string | null
  ```

* url

  ```ts
  string
  ```

* width

  ```ts
  number | null
  ```

#### ProductVariant

* compareAtPrice

  ```ts
  Money | null
  ```

* id

  ```ts
  string
  ```

* image

  ```ts
  ProductImage | null
  ```

* isFavorited

  ```ts
  boolean
  ```

* price

  ```ts
  Money
  ```

* title

  ```ts
  string
  ```

#### ProductShop

* id

  ```ts
  string
  ```

* name

  ```ts
  string
  ```

#### AddProductListItemParams

* listId

  The GID of the product list. E.g. \`gid://shopapp/ProductList/123\`. This will soon be deprecated in favor of just \`publicListId\`.

  ```ts
  string
  ```

* productId

  The GID of the product. E.g. \`gid://shopify/Product/123\`.

  ```ts
  string
  ```

* productVariantId

  The GID of the product variant. E.g. \`gid://shopify/ProductVariant/101\`.

  ```ts
  string
  ```

* publicListId

  The public ID of the product list.

  ```ts
  string
  ```

* shopId

  The GID of the shop. E.g. \`gid://shopify/Shop/42\`.

  ```ts
  string
  ```

#### AddToCartParams

* attribution

  Attribution data for the line item.

  ```ts
  LineItemAttribution
  ```

* discountCodes

  The discount codes to apply to the cart.

  ```ts
  string[]
  ```

* productId

  The GID of the product. E.g. \`gid://shopify/Product/123\`.

  ```ts
  string
  ```

* productVariantId

  The GID of the product variant. E.g. \`gid://shopify/ProductVariant/456\`.

  ```ts
  string
  ```

* quantity

  The quantity of the product to add to the cart.

  ```ts
  number
  ```

* variantImageUrl

  The URL of the variant image.

  ```ts
  string
  ```

#### LineItemAttribution

* sourceIdentifier

  ```ts
  string
  ```

* sourceName

  ```ts
  string
  ```

#### BuyProductParams

* attribution

  Attribution data for the line item.

  ```ts
  LineItemAttribution
  ```

* discountCode

  The discount code to apply to the product.

  ```ts
  string
  ```

* productId

  The GID of the product. E.g. \`gid://shopify/Product/123\`.

  ```ts
  string
  ```

* productVariantId

  The GID of the product variant. E.g. \`gid://shopify/ProductVariant/456\`.

  ```ts
  string
  ```

* quantity

  The quantity of the product to add to the cart.

  ```ts
  number
  ```

#### BuyProductsParams

* attribution

  ```ts
  LineItemAttribution
  ```

* discountCode

  ```ts
  string
  ```

* items

  ```ts
  [BuyProductLineItem, ...BuyProductLineItem[]]
  ```

#### BuyProductLineItem

* productId

  The GID of the product. E.g. \`gid://shopify/Product/123\`.

  ```ts
  string
  ```

* productVariantId

  The GID of the product variant. E.g. \`gid://shopify/ProductVariant/456\`.

  ```ts
  string
  ```

* quantity

  The quantity of the product to add to the cart.

  ```ts
  number
  ```

#### CompleteImageUploadParams

* resourceUrls

  ```ts
  string[]
  ```

#### CompleteImageUploadResponse

* error

  ```ts
  string
  ```

* files

  ```ts
  { id: string; fileStatus: "FAILED" | "PENDING" | "PROCESSING" | "READY"; image?: { url: string; }; }[]
  ```

#### CreateContentParams

* description

  ```ts
  string
  ```

* externalId

  ```ts
  string
  ```

* imageUrl

  ```ts
  string
  ```

* productIds

  ```ts
  string[]
  ```

* title

  ```ts
  string
  ```

* visibility

  ```ts
  ContentVisibility[] | null
  ```

#### ContentVisibility

```ts
'DISCOVERABLE' | 'LINKABLE'
```

#### CreateContentResponse

* data

  ```ts
  Content
  ```

* userErrors

  ```ts
  ContentCreateUserErrors[]
  ```

#### Content

* description

  ```ts
  string | null
  ```

* externalId

  ```ts
  string | null
  ```

* image

  ```ts
  ContentImage
  ```

* products

  ```ts
  ContentProduct[] | null
  ```

* publicId

  ```ts
  string
  ```

* shareableUrl

  ```ts
  string | null
  ```

* status

  ```ts
  MinisContentStatus | null
  ```

* title

  ```ts
  string
  ```

* visibility

  ```ts
  ContentVisibility[]
  ```

#### ContentImage

* altText

  ```ts
  string | null
  ```

* height

  ```ts
  number | null
  ```

* id

  ```ts
  string | null
  ```

* thumbhash

  ```ts
  string | null
  ```

* url

  ```ts
  string
  ```

* width

  ```ts
  number | null
  ```

#### ContentProduct

* featuredImage

  ```ts
  ContentImage | null
  ```

* id

  ```ts
  string
  ```

* title

  ```ts
  string
  ```

#### MinisContentStatus

* PENDING

  ```ts
  PENDING
  ```

* READY

  ```ts
  READY
  ```

* REJECTED

  ```ts
  REJECTED
  ```

#### ContentCreateUserErrors

* code

  ```ts
  ContentCreateUserErrorCode
  ```

* message

  ```ts
  string
  ```

#### ContentCreateUserErrorCode

* DUPLICATE\_EXTERNAL\_ID

  ```ts
  DUPLICATE_EXTERNAL_ID
  ```

* INELIGIBLE\_PRODUCTS

  ```ts
  INELIGIBLE_PRODUCTS
  ```

#### CreateImageUploadLinkParams

* input

  ```ts
  { mimeType: string; fileSize: number; }[]
  ```

#### CreateImageUploadLinkResponse

* error

  ```ts
  string
  ```

* targets

  ```ts
  UploadTarget[]
  ```

#### UploadTarget

* parameters

  ```ts
  { name: string; value: string; }[]
  ```

* resourceUrl

  ```ts
  string
  ```

* url

  ```ts
  string
  ```

#### CreateOrderAttributionParams

* attribution

  ```ts
  LineItemAttribution
  ```

* orderId

  ```ts
  string
  ```

* productVariantId

  ```ts
  string
  ```

#### FavoriteParams

* productId

  ```ts
  string
  ```

* productVariantId

  ```ts
  string
  ```

* shopId

  ```ts
  string
  ```

#### FollowShopParams

* shopId

  ```ts
  string
  ```

#### GenerateUserTokenResponse

* data

  ```ts
  GeneratedTokenData
  ```

* userErrors

  ```ts
  UserTokenGenerateUserErrors[]
  ```

#### GeneratedTokenData

* expiresAt

  The expiration time of the token.

  ```ts
  ISO8601DateTime | null
  ```

* token

  A temporary token for the user.

  ```ts
  string | null
  ```

* userState

  Whether the user is verified or a guest.

  ```ts
  UserState | null
  ```

#### ISO8601DateTime

```ts
string
```

#### UserState

* GUEST

  ```ts
  GUEST
  ```

* VERIFIED

  ```ts
  VERIFIED
  ```

#### UserTokenGenerateUserErrors

* code

  ```ts
  UserTokenGenerateUserErrorCode
  ```

* field

  ```ts
  string[] | null
  ```

* message

  ```ts
  string
  ```

#### UserTokenGenerateUserErrorCode

* MINI\_NOT\_FOUND

  ```ts
  MINI_NOT_FOUND
  ```

* USER\_NOT\_FOUND

  ```ts
  USER_NOT_FOUND
  ```

#### GetAccountInformationParams

* shopId

  To use user account information, a shopId must be given to track on which shop's behalf user information is being accessed

  ```ts
  string
  ```

* type

  ```ts
  'email' | 'name' | 'phone'
  ```

#### GetAccountInformationResponse

* status

  ```ts
  'available' | 'not-available'
  ```

* value

  ```ts
  string | AccountInformationPhoneInfo
  ```

#### AccountInformationPhoneInfo

* countryCode

  ```ts
  string
  ```

* phoneNumber

  ```ts
  string
  ```

* prefix

  ```ts
  string
  ```

#### GetBuyerAttributesParams

* fetchPolicy

  ```ts
  DataHookFetchPolicy
  ```

#### DataHookFetchPolicy

```ts
'cache-first' | 'network-only'
```

#### GetBuyerAttributesResponse

* data

  ```ts
  { genderAffinity?: Gender; categoryAffinities: TaxonomyCategory[]; }
  ```

#### Gender

```ts
'MALE' | 'FEMALE' | 'NEUTRAL'
```

#### TaxonomyCategory

* ancestors

  ```ts
  TaxonomyCategory[]
  ```

* id

  ```ts
  string
  ```

* name

  ```ts
  string
  ```

#### GetContentParams

* fetchPolicy

  ```ts
  DataHookFetchPolicy
  ```

* identifiers

  ```ts
  ContentIdentifierInput | ContentIdentifierInput[]
  ```

#### ContentIdentifierInput

* externalId

  ```ts
  string | null
  ```

* publicId

  ```ts
  string | null
  ```

#### GetContentResponse

* data

  ```ts
  Content[]
  ```

#### GetCurrentUserParams

* fetchPolicy

  ```ts
  DataHookFetchPolicy
  ```

#### GetCurrentUserResponse

* data

  ```ts
  UserProfile
  ```

#### UserProfile

* avatarImage

  ```ts
  {
      url: string
    } | null
  ```

* displayName

  ```ts
  string | null
  ```

#### GetDeeplinkPathsResponse

* matchers

  ```ts
  string[]
  ```

#### GetFollowedShopsParams

* after

  ```ts
  string
  ```

* fetchPolicy

  ```ts
  DataHookFetchPolicy
  ```

* first

  ```ts
  number
  ```

#### GetFollowedShopsResponse

* data

  ```ts
  T
  ```

* pageInfo

  ```ts
  PaginationInfo
  ```

#### PaginationInfo

* endCursor

  ```ts
  string | null
  ```

* hasNextPage

  ```ts
  boolean
  ```

#### GetAsyncStorageItemParams

* key

  ```ts
  string
  ```

#### GetOrdersParams

* after

  ```ts
  string
  ```

* fetchPolicy

  ```ts
  DataHookFetchPolicy
  ```

* first

  ```ts
  number
  ```

#### GetOrdersResponse

* data

  ```ts
  T
  ```

* pageInfo

  ```ts
  PaginationInfo
  ```

#### GetPopularProductsParams

* after

  ```ts
  string
  ```

* fetchPolicy

  ```ts
  DataHookFetchPolicy
  ```

* first

  ```ts
  number
  ```

#### GetPopularProductsResponse

* data

  ```ts
  T
  ```

* pageInfo

  ```ts
  PaginationInfo
  ```

#### GetProductParams

* fetchPolicy

  ```ts
  DataHookFetchPolicy
  ```

* id

  ```ts
  string
  ```

#### GetProductResponse

* data

  ```ts
  Product
  ```

#### GetProductListParams

* after

  The cursor to fetch the next page of items.

  ```ts
  string
  ```

* fetchPolicy

  The fetch policy to use.

  ```ts
  DataHookFetchPolicy
  ```

* first

  The number of items to fetch.

  ```ts
  number
  ```

* id

  The GID of the product list. E.g. \`gid://shopapp/ProductList/123\`.

  ```ts
  string
  ```

* publicId

  The public ID of the product list.

  ```ts
  string
  ```

#### GetProductListResponse

* data

  ```ts
  T
  ```

* pageInfo

  ```ts
  PaginationInfo
  ```

#### GetProductListsParams

* after

  The cursor to fetch the next page of lists.

  ```ts
  string
  ```

* fetchPolicy

  The fetch policy to use.

  ```ts
  DataHookFetchPolicy
  ```

* first

  The number of lists to fetch.

  ```ts
  number
  ```

* itemsFirst

  The number of items per list to fetch.

  ```ts
  number
  ```

#### GetProductListsResponse

* data

  ```ts
  T
  ```

* pageInfo

  ```ts
  PaginationInfo
  ```

#### GetProductMediaParams

* after

  ```ts
  string
  ```

* fetchPolicy

  ```ts
  DataHookFetchPolicy
  ```

* first

  ```ts
  number
  ```

* id

  ```ts
  string
  ```

#### GetProductMediaResponse

* data

  ```ts
  T
  ```

* pageInfo

  ```ts
  PaginationInfo
  ```

#### GetProductReviewsParams

* after

  ```ts
  string
  ```

* fetchPolicy

  ```ts
  DataHookFetchPolicy
  ```

* first

  ```ts
  number
  ```

* id

  ```ts
  string
  ```

#### GetProductReviewsResponse

* data

  ```ts
  T
  ```

* pageInfo

  ```ts
  PaginationInfo
  ```

#### GetProductSearchParams

* after

  ```ts
  string
  ```

* fetchPolicy

  ```ts
  DataHookFetchPolicy
  ```

* filters

  ```ts
  ProductFilters
  ```

* first

  ```ts
  number
  ```

* includeSensitive

  ```ts
  boolean
  ```

* query

  ```ts
  string
  ```

* sortBy

  ```ts
  ProductSearchSortBy
  ```

#### ProductFilters

* apparelSize

  ```ts
  ProductApparelSizeFilter[]
  ```

* available

  ```ts
  boolean
  ```

* category

  ```ts
  string[]
  ```

* color

  ```ts
  ProductColorFilter[]
  ```

* gender

  ```ts
  'MALE' | 'FEMALE' | 'NEUTRAL'
  ```

* includeShopIds

  ```ts
  string[]
  ```

* minimumRating

  ```ts
  number
  ```

* price

  ```ts
  { min?: number; max?: number; }
  ```

* shoeSize

  ```ts
  ProductShoeSizeFilter[]
  ```

#### ProductApparelSizeFilter

```ts
'SIZE_3XL' | 'SIZE_4XL' | 'SIZE_5XL' | 'SIZE_L' | 'SIZE_M' | 'SIZE_S' | 'SIZE_XL' | 'SIZE_XS' | 'SIZE_XXL' | 'SIZE_XXS'
```

#### ProductColorFilter

```ts
'BEIGE' | 'BLACK' | 'BLUE' | 'BROWN' | 'GOLD' | 'GREEN' | 'GREY' | 'NAVY' | 'ORANGE' | 'PINK' | 'PURPLE' | 'RED' | 'SILVER' | 'WHITE' | 'YELLOW'
```

#### ProductShoeSizeFilter

```ts
'SIZE_4' | 'SIZE_4_5' | 'SIZE_5' | 'SIZE_5_5' | 'SIZE_6' | 'SIZE_6_5' | 'SIZE_7' | 'SIZE_7_5' | 'SIZE_8' | 'SIZE_8_5' | 'SIZE_9' | 'SIZE_9_5' | 'SIZE_10' | 'SIZE_10_5' | 'SIZE_11' | 'SIZE_11_5' | 'SIZE_12' | 'SIZE_12_5' | 'SIZE_13' | 'SIZE_13_5' | 'SIZE_14' | 'SIZE_14_5' | 'SIZE_15'
```

#### ProductSearchSortBy

```ts
'MOST_RECENT' | 'PRICE_HIGH_TO_LOW' | 'PRICE_LOW_TO_HIGH' | 'RELEVANCE'
```

#### GetProductSearchResponse

* data

  ```ts
  T
  ```

* pageInfo

  ```ts
  PaginationInfo
  ```

#### GetProductVariantsParams

* after

  ```ts
  string
  ```

* fetchPolicy

  ```ts
  DataHookFetchPolicy
  ```

* first

  ```ts
  number
  ```

* id

  ```ts
  string
  ```

#### GetProductVariantsResponse

* data

  ```ts
  T
  ```

* pageInfo

  ```ts
  PaginationInfo
  ```

#### GetProductsParams

* fetchPolicy

  ```ts
  DataHookFetchPolicy
  ```

* ids

  ```ts
  string[]
  ```

#### GetProductsResponse

* data

  ```ts
  Product[]
  ```

#### GetRecentProductsParams

* after

  ```ts
  string
  ```

* fetchPolicy

  ```ts
  DataHookFetchPolicy
  ```

* first

  ```ts
  number
  ```

* includeSensitive

  ```ts
  boolean
  ```

#### GetRecentProductsResponse

* data

  ```ts
  T
  ```

* pageInfo

  ```ts
  PaginationInfo
  ```

#### GetRecentShopsParams

* after

  ```ts
  string
  ```

* fetchPolicy

  ```ts
  DataHookFetchPolicy
  ```

* first

  ```ts
  number
  ```

#### GetRecentShopsResponse

* data

  ```ts
  T
  ```

* pageInfo

  ```ts
  PaginationInfo
  ```

#### GetRecommendedProductsParams

* after

  ```ts
  string
  ```

* fetchPolicy

  ```ts
  DataHookFetchPolicy
  ```

* first

  ```ts
  number
  ```

#### GetRecommendedProductsResponse

* data

  ```ts
  T
  ```

* pageInfo

  ```ts
  PaginationInfo
  ```

#### GetRecommendedShopsParams

* after

  ```ts
  string
  ```

* fetchPolicy

  ```ts
  DataHookFetchPolicy
  ```

* first

  ```ts
  number
  ```

#### GetRecommendedShopsResponse

* data

  ```ts
  T
  ```

* pageInfo

  ```ts
  PaginationInfo
  ```

#### GetSavedProductsParams

* after

  ```ts
  string
  ```

* fetchPolicy

  ```ts
  DataHookFetchPolicy
  ```

* first

  ```ts
  number
  ```

* includeSensitive

  ```ts
  boolean
  ```

#### GetSavedProductsResponse

* data

  ```ts
  T
  ```

* pageInfo

  ```ts
  PaginationInfo
  ```

#### GetShopParams

* fetchPolicy

  ```ts
  DataHookFetchPolicy
  ```

* id

  ```ts
  string
  ```

#### GetShopResponse

* data

  ```ts
  Shop
  ```

#### Shop

* id

  ```ts
  string
  ```

* isFollowing

  ```ts
  boolean | null
  ```

* logoImage

  ```ts
  ProductImage | null
  ```

* name

  ```ts
  string
  ```

* primaryDomain

  ```ts
  { url: string; }
  ```

* reviewAnalytics

  ```ts
  { averageRating?: number; reviewCount: number; }
  ```

* shareUrl

  ```ts
  string | null
  ```

* visualTheme

  ```ts
  VisualTheme | null
  ```

#### VisualTheme

* brandSettings

  ```ts
  BrandSettings | null
  ```

* description

  ```ts
  string | null
  ```

* featuredImages

  ```ts
  ImageType[]
  ```

* id

  ```ts
  string
  ```

* logoImage

  ```ts
  ImageType | null
  ```

#### BrandSettings

* colors

  ```ts
  ColorTheme | null
  ```

* headerTheme

  ```ts
  HeaderTheme | null
  ```

* id

  ```ts
  string
  ```

* logos

  ```ts
  LogoTheme | null
  ```

#### ColorTheme

* coverDominant

  ```ts
  string | null
  ```

* id

  ```ts
  string
  ```

* logoAverage

  ```ts
  string | null
  ```

* logoDominant

  ```ts
  string | null
  ```

* primary

  ```ts
  string | null
  ```

* secondary

  ```ts
  string | null
  ```

* secondaryText

  ```ts
  string | null
  ```

* statusBarStyle

  ```ts
  string | null
  ```

#### HeaderTheme

* coverImage

  ```ts
  ImageType | null
  ```

* endingScrimColor

  ```ts
  string | null
  ```

* id

  ```ts
  string
  ```

* startingScrimColor

  ```ts
  string | null
  ```

* thumbnailImage

  ```ts
  ImageType | null
  ```

* videoUrl

  ```ts
  string | null
  ```

* wordmark

  ```ts
  ImageType | null
  ```

#### ImageType

* altText

  ```ts
  string | null
  ```

* height

  ```ts
  number | null
  ```

* sensitive

  ```ts
  boolean
  ```

* thumbhash

  ```ts
  string | null
  ```

* url

  ```ts
  string
  ```

* width

  ```ts
  number | null
  ```

#### LogoTheme

* id

  ```ts
  string
  ```

* logoImage

  ```ts
  ImageType | null
  ```

#### GetShopAppInformationResponse

* appVersion

  ```ts
  string
  ```

* buildId

  ```ts
  string
  ```

* buildNumber

  ```ts
  string
  ```

#### NavigateToCheckoutParams

* shopId

  The GID of the shop. E.g. \`gid://shopify/Shop/123\`.

  ```ts
  string
  ```

#### NavigateToDeeplinkParams

* deeplink

  ```ts
  string
  ```

#### NavigateToOrderParams

* orderId

  The GID of the order. E.g. \`gid://shopify/Order/123\`.

  ```ts
  string
  ```

#### NavigateToProductParams

* attribution

  ```ts
  LineItemAttribution
  ```

* discountCode

  The discount code to apply to the product.

  ```ts
  string
  ```

* includedProductVariantGIDs

  ```ts
  string[]
  ```

* includedProductVariantIds

  ```ts
  string[]
  ```

* productId

  The GID of the product. E.g. \`gid://shopify/Product/123\`.

  ```ts
  string
  ```

* productVariantId

  If present, the GID of the variant that should be initially selected

  ```ts
  string
  ```

#### NavigateToShopParams

* shopId

  ```ts
  string
  ```

#### PreviewProductInARParams

* fetchPolicy

  ```ts
  DataHookFetchPolicy
  ```

* id

  ```ts
  string
  ```

#### ProductRecommendationClickParams

* attribution

  ```ts
  LineItemAttribution
  ```

* discountCode

  ```ts
  string
  ```

* productId

  ```ts
  string
  ```

* productVariantId

  ```ts
  string
  ```

* sectionId

  ```ts
  string
  ```

* variantGIDs

  ```ts
  string[]
  ```

#### ProductRecommendationImpressionParams

* productId

  ```ts
  string
  ```

* sectionId

  ```ts
  string
  ```

#### RemoveAsyncStorageItemParams

* key

  ```ts
  string
  ```

#### RemoveProductListParams

* id

  The GID of the product list. E.g. \`gid://shopapp/ProductList/123\`.

  ```ts
  string
  ```

#### RemoveProductListItemParams

* listId

  The GID of the product list. E.g. \`gid://shopapp/ProductList/123\`. This will soon be deprecated in favor of just \`publicListId\`.

  ```ts
  string
  ```

* productId

  The GID of the product. E.g. \`gid://shopify/Product/123\`.

  ```ts
  string
  ```

* productVariantId

  The GID of the product variant. E.g. \`gid://shopify/ProductVariant/101\`.

  ```ts
  string
  ```

* publicListId

  The public ID of the product list.

  ```ts
  string
  ```

* shopId

  The GID of the shop. E.g. \`gid://shopify/Shop/42\`.

  ```ts
  string
  ```

#### RenameProductListParams

* id

  The GID of the product list. E.g. \`gid://shopapp/ProductList/123\`.

  ```ts
  string
  ```

* name

  The new name of the product list.

  ```ts
  string
  ```

#### ReportContentImpressionParams

* pageValue

  ```ts
  string
  ```

* publicId

  ```ts
  string
  ```

#### ReportErrorParams

Parameters for reporting JavaScript errors that occur in the webview. This captures detailed error information to help with debugging and monitoring.

* additionalContext

  Additional context about the error (e.g., user actions, state, etc.)

  ```ts
  { [key: string]: any; }
  ```

* message

  The error message

  ```ts
  string
  ```

* stack

  The stack trace of the error

  ```ts
  string
  ```

#### ReportFetchParams

Parameters for reporting fetch calls made in the webview. This captures network request details for observability.

* duration

  Duration of the request in milliseconds

  ```ts
  number
  ```

* error

  Error message if the request failed

  ```ts
  string
  ```

* method

  The HTTP method used (GET, POST, etc.)

  ```ts
  string
  ```

* status

  The HTTP status code of the response (0 for network errors)

  ```ts
  number
  ```

* success

  Whether the request was successful (response.ok)

  ```ts
  boolean
  ```

* timestamp

  Timestamp when the request completed

  ```ts
  number
  ```

* url

  The URL that was fetched

  ```ts
  string
  ```

#### ReportImpressionParams

* pageValue

  ```ts
  string
  ```

* subjectId

  ```ts
  string
  ```

* subjectType

  ```ts
  string
  ```

#### ReportInteractionParams

* interactionType

  ```ts
  string
  ```

* interactionValue

  ```ts
  string
  ```

* pageValue

  ```ts
  string
  ```

#### RequestPermissionParams

* permission

  ```ts
  MiniPermission
  ```

#### MiniPermission

```ts
'CAMERA' | 'MICROPHONE' | 'MOTION'
```

#### RequestPermissionResponse

* errorMessage

  ```ts
  string
  ```

* granted

  ```ts
  boolean
  ```

#### SearchProductsByShopParams

* after

  ```ts
  string
  ```

* fetchPolicy

  ```ts
  DataHookFetchPolicy
  ```

* first

  ```ts
  number
  ```

* query

  ```ts
  string
  ```

* shopId

  ```ts
  string
  ```

#### SearchProductsByShopResponse

* data

  ```ts
  T
  ```

* pageInfo

  ```ts
  PaginationInfo
  ```

#### SetAsyncStorageItemParams

* key

  ```ts
  string
  ```

* value

  ```ts
  string
  ```

#### SetProductListVisibilityParams

* id

  The GID of the product list. E.g. \`gid://shopapp/ProductList/123\`.

  ```ts
  string
  ```

* name

  The name of the product list. Required to preserve the existing name.

  ```ts
  string
  ```

* privacyStatus

  The privacy status to set for the product list.

  ```ts
  ProductListPrivacyStatus
  ```

#### SetSecretParams

* value

  ```ts
  string
  ```

#### ShareParams

* failOnCancel

  ```ts
  boolean
  ```

* message

  ```ts
  string
  ```

* title

  ```ts
  string
  ```

* type

  ```ts
  string
  ```

* url

  ```ts
  string
  ```

* urls

  ```ts
  string[]
  ```

#### ShareResponse

* dismissedAction

  ```ts
  boolean
  ```

* message

  ```ts
  string
  ```

* success

  ```ts
  boolean
  ```

#### ShareSingleParams

```ts
BaseShareSingleOptions | InstagramShareSingleOptions | FacebookShareSingleOptions
```

#### BaseShareSingleOptions

* appId

  ```ts
  string
  ```

* email

  ```ts
  string
  ```

* filename

  ```ts
  string
  ```

* forceDialog

  ```ts
  boolean
  ```

* message

  ```ts
  string
  ```

* recipient

  ```ts
  string
  ```

* social

  ```ts
  Social.Facebook | Social.Pagesmanager | Social.Twitter | Social.Whatsapp | Social.Whatsappbusiness | Social.Instagram | Social.Googleplus | Social.Email | Social.Pinterest | Social.Linkedin | Social.Sms | Social.Telegram | Social.Snapchat | Social.Messenger | Social.Viber | Social.Discord
  ```

* subject

  ```ts
  string
  ```

* title

  ```ts
  string
  ```

* type

  ```ts
  string
  ```

* url

  ```ts
  string
  ```

* urls

  ```ts
  string[]
  ```

#### Social

* Facebook

  ```ts
  facebook
  ```

* FacebookStories

  ```ts
  facebookstories
  ```

* Pagesmanager

  ```ts
  pagesmanager
  ```

* Twitter

  ```ts
  twitter
  ```

* Whatsapp

  ```ts
  whatsapp
  ```

* Whatsappbusiness

  ```ts
  whatsappbusiness
  ```

* Instagram

  ```ts
  instagram
  ```

* InstagramStories

  ```ts
  instagramstories
  ```

* Googleplus

  ```ts
  googleplus
  ```

* Email

  ```ts
  email
  ```

* Pinterest

  ```ts
  pinterest
  ```

* Linkedin

  ```ts
  linkedin
  ```

* Sms

  ```ts
  sms
  ```

* Telegram

  ```ts
  telegram
  ```

* Snapchat

  ```ts
  snapchat
  ```

* Messenger

  ```ts
  messenger
  ```

* Viber

  ```ts
  viber
  ```

* Discord

  ```ts
  discord
  ```

#### InstagramShareSingleOptions

* appId

  ```ts
  string
  ```

* attributionURL

  ```ts
  string
  ```

* backgroundBottomColor

  ```ts
  string
  ```

* backgroundImage

  ```ts
  string
  ```

* backgroundTopColor

  ```ts
  string
  ```

* backgroundVideo

  ```ts
  string
  ```

* email

  ```ts
  string
  ```

* filename

  ```ts
  string
  ```

* forceDialog

  ```ts
  boolean
  ```

* linkText

  ```ts
  string
  ```

* linkUrl

  ```ts
  string
  ```

* message

  ```ts
  string
  ```

* recipient

  ```ts
  string
  ```

* social

  ```ts
  Social.InstagramStories
  ```

* stickerImage

  ```ts
  string
  ```

* subject

  ```ts
  string
  ```

* title

  ```ts
  string
  ```

* type

  ```ts
  string
  ```

* url

  ```ts
  string
  ```

* urls

  ```ts
  string[]
  ```

#### FacebookShareSingleOptions

* appId

  ```ts
  string
  ```

* attributionURL

  ```ts
  string
  ```

* backgroundBottomColor

  ```ts
  string
  ```

* backgroundImage

  ```ts
  string
  ```

* backgroundTopColor

  ```ts
  string
  ```

* backgroundVideo

  ```ts
  string
  ```

* email

  ```ts
  string
  ```

* filename

  ```ts
  string
  ```

* forceDialog

  ```ts
  boolean
  ```

* linkText

  ```ts
  string
  ```

* linkUrl

  ```ts
  string
  ```

* message

  ```ts
  string
  ```

* recipient

  ```ts
  string
  ```

* social

  ```ts
  Social.FacebookStories
  ```

* stickerImage

  ```ts
  string
  ```

* subject

  ```ts
  string
  ```

* title

  ```ts
  string
  ```

* type

  ```ts
  string
  ```

* url

  ```ts
  string
  ```

* urls

  ```ts
  string[]
  ```

#### ShareSingleResponse

* message

  ```ts
  string
  ```

* success

  ```ts
  boolean
  ```

#### ShowErrorScreenParams

* message

  The message to display in the error screen.

  ```ts
  string
  ```

* title

  The title of the error screen.

  ```ts
  string
  ```

#### ShowErrorToastParams

* message

  ```ts
  string
  ```

#### ShowFeedbackSheetParams

* publicId

  ```ts
  string
  ```

#### TranslateContentUpParams

* inputYPosition

  ```ts
  number
  ```

#### UnfavoriteParams

* productId

  ```ts
  string
  ```

* productVariantId

  ```ts
  string
  ```

* shopId

  ```ts
  string
  ```

#### UnfollowShopParams

* shopId

  ```ts
  string
  ```

#### SnakeToCamelCase

```ts
S extends `${infer Head}_${infer Tail}`
    ? `${Lowercase<Head>}${SnakeToCamelCaseTail<Tail>}`
    : Lowercase<S>
```

#### SnakeToCamelCaseTail

```ts
S extends `${infer Head}_${infer Tail}`
    ? `${CapitalizeSegment<Head>}${SnakeToCamelCaseTail<Tail>}`
    : CapitalizeSegment<S>
```

#### CapitalizeSegment

```ts
Uppercase<S> extends 'AR' ? 'AR' : Capitalize<Lowercase<S>>
```

Examples

#### Examples

* ####

  ##### tsx

  ```tsx
  import {useCallback} from 'react'

  import {useErrorScreen, Button} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    const {showErrorScreen} = useErrorScreen()

    const handleError = useCallback(() => {
      showErrorScreen({
        message: 'Something went wrong',
      })
    }, [showErrorScreen])

    return <Button onClick={handleError}>Show error screen</Button>
  }
  ```

***

---

<a id="useerrortoast-useerrortoast"></a>

## useErrorToast

## useErrorToast

The `useErrorToast` hook displays a non-blocking error notification. Use this for recoverable errors, warnings, or informational messages that don't prevent users from continuing their workflow. The toast appears temporarily at the top or bottom of the screen, auto-dismisses, and allows users to keep interacting with the Mini.

**Note:**

Use `useErrorToast` for recoverable errors or warnings (e.g., failed to save preference, item out of stock, temporary network issues, validation errors). This shows a non-blocking notification that auto-dismisses and doesn't interrupt the user's current task. Use `useErrorScreen` for critical failures that block the user workflow (e.g., authentication failures, data corruption, network timeouts that prevent the app from functioning). This provides a full-screen error UI that the user must acknowledge before continuing.

### use​Error​Toast()

#### Returns

* **UseErrorToastReturns**

#### UseErrorToastReturns

* showErrorToast

  Show an error toast with the given error message.

  ```ts
  ShopActions
  ```

#### ShopActions

```ts
{
  [K in keyof ShopActionEvents as SnakeToCamelCase<K>]: ShopActionEvents[K]
}
```

#### ShopActionEvents

* ADD\_PRODUCT\_LIST

  ```ts
  ShopAction<AddProductListParams, ProductList>
  ```

* ADD\_PRODUCT\_LIST\_ITEM

  ```ts
  ShopAction<AddProductListItemParams, void>
  ```

* ADD\_TO\_CART

  ```ts
  ShopAction<AddToCartParams, void>
  ```

* BUY\_PRODUCT

  ```ts
  ShopAction<BuyProductParams, void>
  ```

* BUY\_PRODUCTS

  ```ts
  ShopAction<BuyProductsParams, void>
  ```

* CLEAR\_INTERNAL\_PERSISTED\_ITEMS

  ```ts
  ShopAction<void, void>
  ```

* CLEAR\_PERSISTED\_ITEMS

  ```ts
  ShopAction<void, void>
  ```

* CLOSE\_MINI

  ```ts
  ShopAction<void, void>
  ```

* COMPLETE\_IMAGE\_UPLOAD

  ```ts
  ShopAction<
      CompleteImageUploadParams,
      CompleteImageUploadResponse
    >
  ```

* CREATE\_CONTENT

  ```ts
  ShopAction<CreateContentParams, CreateContentResponse>
  ```

* CREATE\_IMAGE\_UPLOAD\_LINK

  ```ts
  ShopAction<
      CreateImageUploadLinkParams,
      CreateImageUploadLinkResponse
    >
  ```

* CREATE\_ORDER\_ATTRIBUTION

  ```ts
  ShopAction<CreateOrderAttributionParams, void>
  ```

* FAVORITE

  ```ts
  ShopAction<FavoriteParams, void>
  ```

* FOLLOW\_SHOP

  ```ts
  ShopAction<FollowShopParams, boolean>
  ```

* GENERATE\_USER\_TOKEN

  ```ts
  ShopAction<void, GenerateUserTokenResponse>
  ```

* GET\_ACCOUNT\_INFORMATION

  ```ts
  ShopAction<
      GetAccountInformationParams,
      GetAccountInformationResponse
    >
  ```

* GET\_ALL\_INTERNAL\_PERSISTED\_KEYS

  ```ts
  ShopAction<void, string[]>
  ```

* GET\_ALL\_PERSISTED\_KEYS

  ```ts
  ShopAction<void, string[]>
  ```

* GET\_BUYER\_ATTRIBUTES

  ```ts
  ShopAction<
      GetBuyerAttributesParams,
      GetBuyerAttributesResponse
    >
  ```

* GET\_CONTENT

  ```ts
  ShopAction<GetContentParams, GetContentResponse>
  ```

* GET\_CURRENT\_USER

  ```ts
  ShopAction<GetCurrentUserParams, GetCurrentUserResponse>
  ```

* GET\_DEEPLINK\_PATHS

  ```ts
  ShopAction<void, GetDeeplinkPathsResponse>
  ```

* GET\_FOLLOWED\_SHOPS

  ```ts
  ShopAction<
      GetFollowedShopsParams,
      GetFollowedShopsResponse
    >
  ```

* GET\_INTERNAL\_PERSISTED\_ITEM

  ```ts
  ShopAction<
      GetAsyncStorageItemParams,
      string | null
    >
  ```

* GET\_ORDERS

  ```ts
  ShopAction<GetOrdersParams, GetOrdersResponse>
  ```

* GET\_PERSISTED\_ITEM

  ```ts
  ShopAction<GetAsyncStorageItemParams, string | null>
  ```

* GET\_POPULAR\_PRODUCTS

  ```ts
  ShopAction<
      GetPopularProductsParams,
      GetPopularProductsResponse
    >
  ```

* GET\_PRODUCT

  ```ts
  ShopAction<GetProductParams, GetProductResponse>
  ```

* GET\_PRODUCT\_LIST

  ```ts
  ShopAction<GetProductListParams, GetProductListResponse>
  ```

* GET\_PRODUCT\_LISTS

  ```ts
  ShopAction<GetProductListsParams, GetProductListsResponse>
  ```

* GET\_PRODUCT\_MEDIA

  ```ts
  ShopAction<GetProductMediaParams, GetProductMediaResponse>
  ```

* GET\_PRODUCT\_REVIEWS

  ```ts
  ShopAction<
      GetProductReviewsParams,
      GetProductReviewsResponse
    >
  ```

* GET\_PRODUCT\_SEARCH

  ```ts
  ShopAction<
      GetProductSearchParams,
      GetProductSearchResponse
    >
  ```

* GET\_PRODUCT\_VARIANTS

  ```ts
  ShopAction<
      GetProductVariantsParams,
      GetProductVariantsResponse
    >
  ```

* GET\_PRODUCTS

  ```ts
  ShopAction<GetProductsParams, GetProductsResponse>
  ```

* GET\_RECENT\_PRODUCTS

  ```ts
  ShopAction<
      GetRecentProductsParams,
      GetRecentProductsResponse
    >
  ```

* GET\_RECENT\_SHOPS

  ```ts
  ShopAction<GetRecentShopsParams, GetRecentShopsResponse>
  ```

* GET\_RECOMMENDED\_PRODUCTS

  ```ts
  ShopAction<
      GetRecommendedProductsParams,
      GetRecommendedProductsResponse
    >
  ```

* GET\_RECOMMENDED\_SHOPS

  ```ts
  ShopAction<
      GetRecommendedShopsParams,
      GetRecommendedShopsResponse
    >
  ```

* GET\_SAVED\_PRODUCTS

  ```ts
  ShopAction<
      GetSavedProductsParams,
      GetSavedProductsResponse
    >
  ```

* GET\_SECRET

  ```ts
  ShopAction<void, string | null>
  ```

* GET\_SHOP

  ```ts
  ShopAction<GetShopParams, GetShopResponse>
  ```

* GET\_SHOP\_APP\_INFORMATION

  ```ts
  ShopAction<void, GetShopAppInformationResponse>
  ```

* NAVIGATE\_TO\_CART

  ```ts
  ShopAction<void, void>
  ```

* NAVIGATE\_TO\_CHECKOUT

  ```ts
  ShopAction<NavigateToCheckoutParams, void>
  ```

* NAVIGATE\_TO\_DEEPLINK

  ```ts
  ShopAction<NavigateToDeeplinkParams, void>
  ```

* NAVIGATE\_TO\_ORDER

  ```ts
  ShopAction<NavigateToOrderParams, void>
  ```

* NAVIGATE\_TO\_PRODUCT

  ```ts
  ShopAction<NavigateToProductParams, void>
  ```

* NAVIGATE\_TO\_SHOP

  ```ts
  ShopAction<NavigateToShopParams, void>
  ```

* PREVIEW\_PRODUCT\_IN\_AR

  ```ts
  ShopAction<PreviewProductInARParams, void>
  ```

* PRODUCT\_RECOMMENDATION\_CLICK

  ```ts
  ShopAction<
      ProductRecommendationClickParams,
      void
    >
  ```

* PRODUCT\_RECOMMENDATION\_IMPRESSION

  ```ts
  ShopAction<
      ProductRecommendationImpressionParams,
      void
    >
  ```

* REMOVE\_INTERNAL\_PERSISTED\_ITEM

  ```ts
  ShopAction<RemoveAsyncStorageItemParams, void>
  ```

* REMOVE\_PERSISTED\_ITEM

  ```ts
  ShopAction<RemoveAsyncStorageItemParams, void>
  ```

* REMOVE\_PRODUCT\_LIST

  ```ts
  ShopAction<RemoveProductListParams, void>
  ```

* REMOVE\_PRODUCT\_LIST\_ITEM

  ```ts
  ShopAction<RemoveProductListItemParams, void>
  ```

* REMOVE\_SECRET

  ```ts
  ShopAction<void, void>
  ```

* RENAME\_PRODUCT\_LIST

  ```ts
  ShopAction<RenameProductListParams, ProductList>
  ```

* REPORT\_CONTENT\_IMPRESSION

  ```ts
  ShopAction<ReportContentImpressionParams, void>
  ```

* REPORT\_ERROR

  ```ts
  ShopAction<ReportErrorParams, void>
  ```

* REPORT\_FETCH

  ```ts
  ShopAction<ReportFetchParams, void>
  ```

* REPORT\_IMPRESSION

  ```ts
  ShopAction<ReportImpressionParams, void>
  ```

* REPORT\_INTERACTION

  ```ts
  ShopAction<ReportInteractionParams, void>
  ```

* REQUEST\_PERMISSION

  ```ts
  ShopAction<
      RequestPermissionParams,
      RequestPermissionResponse
    >
  ```

* SEARCH\_PRODUCTS\_BY\_SHOP

  ```ts
  ShopAction<
      SearchProductsByShopParams,
      SearchProductsByShopResponse
    >
  ```

* SET\_INTERNAL\_PERSISTED\_ITEM

  ```ts
  ShopAction<SetAsyncStorageItemParams, void>
  ```

* SET\_PERSISTED\_ITEM

  ```ts
  ShopAction<SetAsyncStorageItemParams, void>
  ```

* SET\_PRODUCT\_LIST\_VISIBILITY

  ```ts
  ShopAction<
      SetProductListVisibilityParams,
      ProductList
    >
  ```

* SET\_SECRET

  ```ts
  ShopAction<SetSecretParams, void>
  ```

* SHARE

  ```ts
  ShopAction<ShareParams, ShareResponse>
  ```

* SHARE\_SINGLE

  ```ts
  ShopAction<ShareSingleParams, ShareSingleResponse>
  ```

* SHOW\_ERROR\_SCREEN

  ```ts
  ShopAction<ShowErrorScreenParams, void>
  ```

* SHOW\_ERROR\_TOAST

  ```ts
  ShopAction<ShowErrorToastParams, void>
  ```

* SHOW\_FEEDBACK\_SHEET

  ```ts
  ShopAction<ShowFeedbackSheetParams, void>
  ```

* TRANSLATE\_CONTENT\_DOWN

  ```ts
  ShopAction<void, void>
  ```

* TRANSLATE\_CONTENT\_UP

  ```ts
  ShopAction<TranslateContentUpParams, void>
  ```

* UNFAVORITE

  ```ts
  ShopAction<UnfavoriteParams, void>
  ```

* UNFOLLOW\_SHOP

  ```ts
  ShopAction<UnfollowShopParams, boolean>
  ```

#### ShopAction

A generic type representing any action in ShopActions. - N: The name of the action (string literal type) - P: The params type for the action - R: The result type for the action

* params

  ```ts
  P
  ```

returns

```ts
Promise<ShopActionResult<R>>
```

#### ShopActionResult

```ts
ShopActionOk<T> | ShopActionError
```

#### ShopActionOk

* data

  ```ts
  T
  ```

* mocked

  ```ts
  boolean
  ```

* ok

  ```ts
  true
  ```

#### ShopActionError

* error

  ```ts
  Error & { code?: string; }
  ```

* mocked

  ```ts
  boolean
  ```

* ok

  ```ts
  false
  ```

#### AddProductListParams

* description

  A description of the product list.

  ```ts
  string
  ```

* name

  The name of the product list.

  ```ts
  string
  ```

* privacyStatus

  The privacy status of the product list. Defaults to 'PRIVATE'.

  ```ts
  ProductListPrivacyStatus
  ```

#### ProductListPrivacyStatus

```ts
'PRIVATE' | 'PUBLIC'
```

#### ProductList

* id

  ```ts
  string
  ```

* name

  ```ts
  string | null
  ```

* privacyStatus

  ```ts
  ProductListPrivacyStatus
  ```

* products

  ```ts
  Product[]
  ```

* publicId

  ```ts
  string | null
  ```

#### Product

* compareAtPrice

  ```ts
  Money | null
  ```

* defaultVariantId

  ```ts
  string
  ```

* featuredImage

  ```ts
  ProductImage | null
  ```

* id

  ```ts
  string
  ```

* isFavorited

  ```ts
  boolean
  ```

* price

  ```ts
  Money
  ```

* referral

  ```ts
  boolean
  ```

* reviewAnalytics

  ```ts
  { averageRating?: number; reviewCount?: number; }
  ```

* selectedVariant

  ```ts
  ProductVariant
  ```

* shop

  ```ts
  ProductShop
  ```

* title

  ```ts
  string
  ```

* variants

  ```ts
  ProductVariant[]
  ```

#### Money

* amount

  ```ts
  Decimal
  ```

* currencyCode

  ```ts
  CurrencyCode
  ```

#### Decimal

```ts
string
```

#### CurrencyCode

```ts
'AED' | 'AFN' | 'ALL' | 'AMD' | 'ANG' | 'AOA' | 'ARS' | 'AUD' | 'AWG' | 'AZN' | 'BAM' | 'BBD' | 'BDT' | 'BGN' | 'BHD' | 'BIF' | 'BMD' | 'BND' | 'BOB' | 'BRL' | 'BSD' | 'BTN' | 'BWP' | 'BYN' | 'BYR' | 'BZD' | 'CAD' | 'CDF' | 'CHF' | 'CLP' | 'CNY' | 'COP' | 'CRC' | 'CVE' | 'CZK' | 'DJF' | 'DKK' | 'DOP' | 'DZD' | 'EGP' | 'ERN' | 'ETB' | 'EUR' | 'FJD' | 'FKP' | 'GBP' | 'GEL' | 'GHS' | 'GIP' | 'GMD' | 'GNF' | 'GTQ' | 'GYD' | 'HKD' | 'HNL' | 'HRK' | 'HTG' | 'HUF' | 'IDR' | 'ILS' | 'INR' | 'IQD' | 'IRR' | 'ISK' | 'JEP' | 'JMD' | 'JOD' | 'JPY' | 'KES' | 'KGS' | 'KHR' | 'KID' | 'KMF' | 'KRW' | 'KWD' | 'KYD' | 'KZT' | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'LSL' | 'LTL' | 'LVL' | 'LYD' | 'MAD' | 'MDL' | 'MGA' | 'MKD' | 'MMK' | 'MNT' | 'MOP' | 'MRU' | 'MUR' | 'MVR' | 'MWK' | 'MXN' | 'MYR' | 'MZN' | 'NAD' | 'NGN' | 'NIO' | 'NOK' | 'NPR' | 'NZD' | 'OMR' | 'PAB' | 'PEN' | 'PGK' | 'PHP' | 'PKR' | 'PLN' | 'PYG' | 'QAR' | 'RON' | 'RSD' | 'RUB' | 'RWF' | 'SAR' | 'SBD' | 'SCR' | 'SDG' | 'SEK' | 'SGD' | 'SHP' | 'SLL' | 'SOS' | 'SRD' | 'SSP' | 'STD' | 'STN' | 'SYP' | 'SZL' | 'THB' | 'TJS' | 'TMT' | 'TND' | 'TOP' | 'TRY' | 'TTD' | 'TWD' | 'TZS' | 'UAH' | 'UGX' | 'USD' | 'UYU' | 'UZS' | 'VED' | 'VEF' | 'VES' | 'VND' | 'VUV' | 'WST' | 'XAF' | 'XCD' | 'XOF' | 'XPF' | 'XXX' | 'YER' | 'ZAR' | 'ZMW'
```

#### ProductImage

* altText

  ```ts
  string | null
  ```

* height

  ```ts
  number | null
  ```

* id

  ```ts
  string | null
  ```

* sensitive

  ```ts
  boolean | null
  ```

* thumbhash

  ```ts
  string | null
  ```

* url

  ```ts
  string
  ```

* width

  ```ts
  number | null
  ```

#### ProductVariant

* compareAtPrice

  ```ts
  Money | null
  ```

* id

  ```ts
  string
  ```

* image

  ```ts
  ProductImage | null
  ```

* isFavorited

  ```ts
  boolean
  ```

* price

  ```ts
  Money
  ```

* title

  ```ts
  string
  ```

#### ProductShop

* id

  ```ts
  string
  ```

* name

  ```ts
  string
  ```

#### AddProductListItemParams

* listId

  The GID of the product list. E.g. \`gid://shopapp/ProductList/123\`. This will soon be deprecated in favor of just \`publicListId\`.

  ```ts
  string
  ```

* productId

  The GID of the product. E.g. \`gid://shopify/Product/123\`.

  ```ts
  string
  ```

* productVariantId

  The GID of the product variant. E.g. \`gid://shopify/ProductVariant/101\`.

  ```ts
  string
  ```

* publicListId

  The public ID of the product list.

  ```ts
  string
  ```

* shopId

  The GID of the shop. E.g. \`gid://shopify/Shop/42\`.

  ```ts
  string
  ```

#### AddToCartParams

* attribution

  Attribution data for the line item.

  ```ts
  LineItemAttribution
  ```

* discountCodes

  The discount codes to apply to the cart.

  ```ts
  string[]
  ```

* productId

  The GID of the product. E.g. \`gid://shopify/Product/123\`.

  ```ts
  string
  ```

* productVariantId

  The GID of the product variant. E.g. \`gid://shopify/ProductVariant/456\`.

  ```ts
  string
  ```

* quantity

  The quantity of the product to add to the cart.

  ```ts
  number
  ```

* variantImageUrl

  The URL of the variant image.

  ```ts
  string
  ```

#### LineItemAttribution

* sourceIdentifier

  ```ts
  string
  ```

* sourceName

  ```ts
  string
  ```

#### BuyProductParams

* attribution

  Attribution data for the line item.

  ```ts
  LineItemAttribution
  ```

* discountCode

  The discount code to apply to the product.

  ```ts
  string
  ```

* productId

  The GID of the product. E.g. \`gid://shopify/Product/123\`.

  ```ts
  string
  ```

* productVariantId

  The GID of the product variant. E.g. \`gid://shopify/ProductVariant/456\`.

  ```ts
  string
  ```

* quantity

  The quantity of the product to add to the cart.

  ```ts
  number
  ```

#### BuyProductsParams

* attribution

  ```ts
  LineItemAttribution
  ```

* discountCode

  ```ts
  string
  ```

* items

  ```ts
  [BuyProductLineItem, ...BuyProductLineItem[]]
  ```

#### BuyProductLineItem

* productId

  The GID of the product. E.g. \`gid://shopify/Product/123\`.

  ```ts
  string
  ```

* productVariantId

  The GID of the product variant. E.g. \`gid://shopify/ProductVariant/456\`.

  ```ts
  string
  ```

* quantity

  The quantity of the product to add to the cart.

  ```ts
  number
  ```

#### CompleteImageUploadParams

* resourceUrls

  ```ts
  string[]
  ```

#### CompleteImageUploadResponse

* error

  ```ts
  string
  ```

* files

  ```ts
  { id: string; fileStatus: "FAILED" | "PENDING" | "PROCESSING" | "READY"; image?: { url: string; }; }[]
  ```

#### CreateContentParams

* description

  ```ts
  string
  ```

* externalId

  ```ts
  string
  ```

* imageUrl

  ```ts
  string
  ```

* productIds

  ```ts
  string[]
  ```

* title

  ```ts
  string
  ```

* visibility

  ```ts
  ContentVisibility[] | null
  ```

#### ContentVisibility

```ts
'DISCOVERABLE' | 'LINKABLE'
```

#### CreateContentResponse

* data

  ```ts
  Content
  ```

* userErrors

  ```ts
  ContentCreateUserErrors[]
  ```

#### Content

* description

  ```ts
  string | null
  ```

* externalId

  ```ts
  string | null
  ```

* image

  ```ts
  ContentImage
  ```

* products

  ```ts
  ContentProduct[] | null
  ```

* publicId

  ```ts
  string
  ```

* shareableUrl

  ```ts
  string | null
  ```

* status

  ```ts
  MinisContentStatus | null
  ```

* title

  ```ts
  string
  ```

* visibility

  ```ts
  ContentVisibility[]
  ```

#### ContentImage

* altText

  ```ts
  string | null
  ```

* height

  ```ts
  number | null
  ```

* id

  ```ts
  string | null
  ```

* thumbhash

  ```ts
  string | null
  ```

* url

  ```ts
  string
  ```

* width

  ```ts
  number | null
  ```

#### ContentProduct

* featuredImage

  ```ts
  ContentImage | null
  ```

* id

  ```ts
  string
  ```

* title

  ```ts
  string
  ```

#### MinisContentStatus

* PENDING

  ```ts
  PENDING
  ```

* READY

  ```ts
  READY
  ```

* REJECTED

  ```ts
  REJECTED
  ```

#### ContentCreateUserErrors

* code

  ```ts
  ContentCreateUserErrorCode
  ```

* message

  ```ts
  string
  ```

#### ContentCreateUserErrorCode

* DUPLICATE\_EXTERNAL\_ID

  ```ts
  DUPLICATE_EXTERNAL_ID
  ```

* INELIGIBLE\_PRODUCTS

  ```ts
  INELIGIBLE_PRODUCTS
  ```

#### CreateImageUploadLinkParams

* input

  ```ts
  { mimeType: string; fileSize: number; }[]
  ```

#### CreateImageUploadLinkResponse

* error

  ```ts
  string
  ```

* targets

  ```ts
  UploadTarget[]
  ```

#### UploadTarget

* parameters

  ```ts
  { name: string; value: string; }[]
  ```

* resourceUrl

  ```ts
  string
  ```

* url

  ```ts
  string
  ```

#### CreateOrderAttributionParams

* attribution

  ```ts
  LineItemAttribution
  ```

* orderId

  ```ts
  string
  ```

* productVariantId

  ```ts
  string
  ```

#### FavoriteParams

* productId

  ```ts
  string
  ```

* productVariantId

  ```ts
  string
  ```

* shopId

  ```ts
  string
  ```

#### FollowShopParams

* shopId

  ```ts
  string
  ```

#### GenerateUserTokenResponse

* data

  ```ts
  GeneratedTokenData
  ```

* userErrors

  ```ts
  UserTokenGenerateUserErrors[]
  ```

#### GeneratedTokenData

* expiresAt

  The expiration time of the token.

  ```ts
  ISO8601DateTime | null
  ```

* token

  A temporary token for the user.

  ```ts
  string | null
  ```

* userState

  Whether the user is verified or a guest.

  ```ts
  UserState | null
  ```

#### ISO8601DateTime

```ts
string
```

#### UserState

* GUEST

  ```ts
  GUEST
  ```

* VERIFIED

  ```ts
  VERIFIED
  ```

#### UserTokenGenerateUserErrors

* code

  ```ts
  UserTokenGenerateUserErrorCode
  ```

* field

  ```ts
  string[] | null
  ```

* message

  ```ts
  string
  ```

#### UserTokenGenerateUserErrorCode

* MINI\_NOT\_FOUND

  ```ts
  MINI_NOT_FOUND
  ```

* USER\_NOT\_FOUND

  ```ts
  USER_NOT_FOUND
  ```

#### GetAccountInformationParams

* shopId

  To use user account information, a shopId must be given to track on which shop's behalf user information is being accessed

  ```ts
  string
  ```

* type

  ```ts
  'email' | 'name' | 'phone'
  ```

#### GetAccountInformationResponse

* status

  ```ts
  'available' | 'not-available'
  ```

* value

  ```ts
  string | AccountInformationPhoneInfo
  ```

#### AccountInformationPhoneInfo

* countryCode

  ```ts
  string
  ```

* phoneNumber

  ```ts
  string
  ```

* prefix

  ```ts
  string
  ```

#### GetBuyerAttributesParams

* fetchPolicy

  ```ts
  DataHookFetchPolicy
  ```

#### DataHookFetchPolicy

```ts
'cache-first' | 'network-only'
```

#### GetBuyerAttributesResponse

* data

  ```ts
  { genderAffinity?: Gender; categoryAffinities: TaxonomyCategory[]; }
  ```

#### Gender

```ts
'MALE' | 'FEMALE' | 'NEUTRAL'
```

#### TaxonomyCategory

* ancestors

  ```ts
  TaxonomyCategory[]
  ```

* id

  ```ts
  string
  ```

* name

  ```ts
  string
  ```

#### GetContentParams

* fetchPolicy

  ```ts
  DataHookFetchPolicy
  ```

* identifiers

  ```ts
  ContentIdentifierInput | ContentIdentifierInput[]
  ```

#### ContentIdentifierInput

* externalId

  ```ts
  string | null
  ```

* publicId

  ```ts
  string | null
  ```

#### GetContentResponse

* data

  ```ts
  Content[]
  ```

#### GetCurrentUserParams

* fetchPolicy

  ```ts
  DataHookFetchPolicy
  ```

#### GetCurrentUserResponse

* data

  ```ts
  UserProfile
  ```

#### UserProfile

* avatarImage

  ```ts
  {
      url: string
    } | null
  ```

* displayName

  ```ts
  string | null
  ```

#### GetDeeplinkPathsResponse

* matchers

  ```ts
  string[]
  ```

#### GetFollowedShopsParams

* after

  ```ts
  string
  ```

* fetchPolicy

  ```ts
  DataHookFetchPolicy
  ```

* first

  ```ts
  number
  ```

#### GetFollowedShopsResponse

* data

  ```ts
  T
  ```

* pageInfo

  ```ts
  PaginationInfo
  ```

#### PaginationInfo

* endCursor

  ```ts
  string | null
  ```

* hasNextPage

  ```ts
  boolean
  ```

#### GetAsyncStorageItemParams

* key

  ```ts
  string
  ```

#### GetOrdersParams

* after

  ```ts
  string
  ```

* fetchPolicy

  ```ts
  DataHookFetchPolicy
  ```

* first

  ```ts
  number
  ```

#### GetOrdersResponse

* data

  ```ts
  T
  ```

* pageInfo

  ```ts
  PaginationInfo
  ```

#### GetPopularProductsParams

* after

  ```ts
  string
  ```

* fetchPolicy

  ```ts
  DataHookFetchPolicy
  ```

* first

  ```ts
  number
  ```

#### GetPopularProductsResponse

* data

  ```ts
  T
  ```

* pageInfo

  ```ts
  PaginationInfo
  ```

#### GetProductParams

* fetchPolicy

  ```ts
  DataHookFetchPolicy
  ```

* id

  ```ts
  string
  ```

#### GetProductResponse

* data

  ```ts
  Product
  ```

#### GetProductListParams

* after

  The cursor to fetch the next page of items.

  ```ts
  string
  ```

* fetchPolicy

  The fetch policy to use.

  ```ts
  DataHookFetchPolicy
  ```

* first

  The number of items to fetch.

  ```ts
  number
  ```

* id

  The GID of the product list. E.g. \`gid://shopapp/ProductList/123\`.

  ```ts
  string
  ```

* publicId

  The public ID of the product list.

  ```ts
  string
  ```

#### GetProductListResponse

* data

  ```ts
  T
  ```

* pageInfo

  ```ts
  PaginationInfo
  ```

#### GetProductListsParams

* after

  The cursor to fetch the next page of lists.

  ```ts
  string
  ```

* fetchPolicy

  The fetch policy to use.

  ```ts
  DataHookFetchPolicy
  ```

* first

  The number of lists to fetch.

  ```ts
  number
  ```

* itemsFirst

  The number of items per list to fetch.

  ```ts
  number
  ```

#### GetProductListsResponse

* data

  ```ts
  T
  ```

* pageInfo

  ```ts
  PaginationInfo
  ```

#### GetProductMediaParams

* after

  ```ts
  string
  ```

* fetchPolicy

  ```ts
  DataHookFetchPolicy
  ```

* first

  ```ts
  number
  ```

* id

  ```ts
  string
  ```

#### GetProductMediaResponse

* data

  ```ts
  T
  ```

* pageInfo

  ```ts
  PaginationInfo
  ```

#### GetProductReviewsParams

* after

  ```ts
  string
  ```

* fetchPolicy

  ```ts
  DataHookFetchPolicy
  ```

* first

  ```ts
  number
  ```

* id

  ```ts
  string
  ```

#### GetProductReviewsResponse

* data

  ```ts
  T
  ```

* pageInfo

  ```ts
  PaginationInfo
  ```

#### GetProductSearchParams

* after

  ```ts
  string
  ```

* fetchPolicy

  ```ts
  DataHookFetchPolicy
  ```

* filters

  ```ts
  ProductFilters
  ```

* first

  ```ts
  number
  ```

* includeSensitive

  ```ts
  boolean
  ```

* query

  ```ts
  string
  ```

* sortBy

  ```ts
  ProductSearchSortBy
  ```

#### ProductFilters

* apparelSize

  ```ts
  ProductApparelSizeFilter[]
  ```

* available

  ```ts
  boolean
  ```

* category

  ```ts
  string[]
  ```

* color

  ```ts
  ProductColorFilter[]
  ```

* gender

  ```ts
  'MALE' | 'FEMALE' | 'NEUTRAL'
  ```

* includeShopIds

  ```ts
  string[]
  ```

* minimumRating

  ```ts
  number
  ```

* price

  ```ts
  { min?: number; max?: number; }
  ```

* shoeSize

  ```ts
  ProductShoeSizeFilter[]
  ```

#### ProductApparelSizeFilter

```ts
'SIZE_3XL' | 'SIZE_4XL' | 'SIZE_5XL' | 'SIZE_L' | 'SIZE_M' | 'SIZE_S' | 'SIZE_XL' | 'SIZE_XS' | 'SIZE_XXL' | 'SIZE_XXS'
```

#### ProductColorFilter

```ts
'BEIGE' | 'BLACK' | 'BLUE' | 'BROWN' | 'GOLD' | 'GREEN' | 'GREY' | 'NAVY' | 'ORANGE' | 'PINK' | 'PURPLE' | 'RED' | 'SILVER' | 'WHITE' | 'YELLOW'
```

#### ProductShoeSizeFilter

```ts
'SIZE_4' | 'SIZE_4_5' | 'SIZE_5' | 'SIZE_5_5' | 'SIZE_6' | 'SIZE_6_5' | 'SIZE_7' | 'SIZE_7_5' | 'SIZE_8' | 'SIZE_8_5' | 'SIZE_9' | 'SIZE_9_5' | 'SIZE_10' | 'SIZE_10_5' | 'SIZE_11' | 'SIZE_11_5' | 'SIZE_12' | 'SIZE_12_5' | 'SIZE_13' | 'SIZE_13_5' | 'SIZE_14' | 'SIZE_14_5' | 'SIZE_15'
```

#### ProductSearchSortBy

```ts
'MOST_RECENT' | 'PRICE_HIGH_TO_LOW' | 'PRICE_LOW_TO_HIGH' | 'RELEVANCE'
```

#### GetProductSearchResponse

* data

  ```ts
  T
  ```

* pageInfo

  ```ts
  PaginationInfo
  ```

#### GetProductVariantsParams

* after

  ```ts
  string
  ```

* fetchPolicy

  ```ts
  DataHookFetchPolicy
  ```

* first

  ```ts
  number
  ```

* id

  ```ts
  string
  ```

#### GetProductVariantsResponse

* data

  ```ts
  T
  ```

* pageInfo

  ```ts
  PaginationInfo
  ```

#### GetProductsParams

* fetchPolicy

  ```ts
  DataHookFetchPolicy
  ```

* ids

  ```ts
  string[]
  ```

#### GetProductsResponse

* data

  ```ts
  Product[]
  ```

#### GetRecentProductsParams

* after

  ```ts
  string
  ```

* fetchPolicy

  ```ts
  DataHookFetchPolicy
  ```

* first

  ```ts
  number
  ```

* includeSensitive

  ```ts
  boolean
  ```

#### GetRecentProductsResponse

* data

  ```ts
  T
  ```

* pageInfo

  ```ts
  PaginationInfo
  ```

#### GetRecentShopsParams

* after

  ```ts
  string
  ```

* fetchPolicy

  ```ts
  DataHookFetchPolicy
  ```

* first

  ```ts
  number
  ```

#### GetRecentShopsResponse

* data

  ```ts
  T
  ```

* pageInfo

  ```ts
  PaginationInfo
  ```

#### GetRecommendedProductsParams

* after

  ```ts
  string
  ```

* fetchPolicy

  ```ts
  DataHookFetchPolicy
  ```

* first

  ```ts
  number
  ```

#### GetRecommendedProductsResponse

* data

  ```ts
  T
  ```

* pageInfo

  ```ts
  PaginationInfo
  ```

#### GetRecommendedShopsParams

* after

  ```ts
  string
  ```

* fetchPolicy

  ```ts
  DataHookFetchPolicy
  ```

* first

  ```ts
  number
  ```

#### GetRecommendedShopsResponse

* data

  ```ts
  T
  ```

* pageInfo

  ```ts
  PaginationInfo
  ```

#### GetSavedProductsParams

* after

  ```ts
  string
  ```

* fetchPolicy

  ```ts
  DataHookFetchPolicy
  ```

* first

  ```ts
  number
  ```

* includeSensitive

  ```ts
  boolean
  ```

#### GetSavedProductsResponse

* data

  ```ts
  T
  ```

* pageInfo

  ```ts
  PaginationInfo
  ```

#### GetShopParams

* fetchPolicy

  ```ts
  DataHookFetchPolicy
  ```

* id

  ```ts
  string
  ```

#### GetShopResponse

* data

  ```ts
  Shop
  ```

#### Shop

* id

  ```ts
  string
  ```

* isFollowing

  ```ts
  boolean | null
  ```

* logoImage

  ```ts
  ProductImage | null
  ```

* name

  ```ts
  string
  ```

* primaryDomain

  ```ts
  { url: string; }
  ```

* reviewAnalytics

  ```ts
  { averageRating?: number; reviewCount: number; }
  ```

* shareUrl

  ```ts
  string | null
  ```

* visualTheme

  ```ts
  VisualTheme | null
  ```

#### VisualTheme

* brandSettings

  ```ts
  BrandSettings | null
  ```

* description

  ```ts
  string | null
  ```

* featuredImages

  ```ts
  ImageType[]
  ```

* id

  ```ts
  string
  ```

* logoImage

  ```ts
  ImageType | null
  ```

#### BrandSettings

* colors

  ```ts
  ColorTheme | null
  ```

* headerTheme

  ```ts
  HeaderTheme | null
  ```

* id

  ```ts
  string
  ```

* logos

  ```ts
  LogoTheme | null
  ```

#### ColorTheme

* coverDominant

  ```ts
  string | null
  ```

* id

  ```ts
  string
  ```

* logoAverage

  ```ts
  string | null
  ```

* logoDominant

  ```ts
  string | null
  ```

* primary

  ```ts
  string | null
  ```

* secondary

  ```ts
  string | null
  ```

* secondaryText

  ```ts
  string | null
  ```

* statusBarStyle

  ```ts
  string | null
  ```

#### HeaderTheme

* coverImage

  ```ts
  ImageType | null
  ```

* endingScrimColor

  ```ts
  string | null
  ```

* id

  ```ts
  string
  ```

* startingScrimColor

  ```ts
  string | null
  ```

* thumbnailImage

  ```ts
  ImageType | null
  ```

* videoUrl

  ```ts
  string | null
  ```

* wordmark

  ```ts
  ImageType | null
  ```

#### ImageType

* altText

  ```ts
  string | null
  ```

* height

  ```ts
  number | null
  ```

* sensitive

  ```ts
  boolean
  ```

* thumbhash

  ```ts
  string | null
  ```

* url

  ```ts
  string
  ```

* width

  ```ts
  number | null
  ```

#### LogoTheme

* id

  ```ts
  string
  ```

* logoImage

  ```ts
  ImageType | null
  ```

#### GetShopAppInformationResponse

* appVersion

  ```ts
  string
  ```

* buildId

  ```ts
  string
  ```

* buildNumber

  ```ts
  string
  ```

#### NavigateToCheckoutParams

* shopId

  The GID of the shop. E.g. \`gid://shopify/Shop/123\`.

  ```ts
  string
  ```

#### NavigateToDeeplinkParams

* deeplink

  ```ts
  string
  ```

#### NavigateToOrderParams

* orderId

  The GID of the order. E.g. \`gid://shopify/Order/123\`.

  ```ts
  string
  ```

#### NavigateToProductParams

* attribution

  ```ts
  LineItemAttribution
  ```

* discountCode

  The discount code to apply to the product.

  ```ts
  string
  ```

* includedProductVariantGIDs

  ```ts
  string[]
  ```

* includedProductVariantIds

  ```ts
  string[]
  ```

* productId

  The GID of the product. E.g. \`gid://shopify/Product/123\`.

  ```ts
  string
  ```

* productVariantId

  If present, the GID of the variant that should be initially selected

  ```ts
  string
  ```

#### NavigateToShopParams

* shopId

  ```ts
  string
  ```

#### PreviewProductInARParams

* fetchPolicy

  ```ts
  DataHookFetchPolicy
  ```

* id

  ```ts
  string
  ```

#### ProductRecommendationClickParams

* attribution

  ```ts
  LineItemAttribution
  ```

* discountCode

  ```ts
  string
  ```

* productId

  ```ts
  string
  ```

* productVariantId

  ```ts
  string
  ```

* sectionId

  ```ts
  string
  ```

* variantGIDs

  ```ts
  string[]
  ```

#### ProductRecommendationImpressionParams

* productId

  ```ts
  string
  ```

* sectionId

  ```ts
  string
  ```

#### RemoveAsyncStorageItemParams

* key

  ```ts
  string
  ```

#### RemoveProductListParams

* id

  The GID of the product list. E.g. \`gid://shopapp/ProductList/123\`.

  ```ts
  string
  ```

#### RemoveProductListItemParams

* listId

  The GID of the product list. E.g. \`gid://shopapp/ProductList/123\`. This will soon be deprecated in favor of just \`publicListId\`.

  ```ts
  string
  ```

* productId

  The GID of the product. E.g. \`gid://shopify/Product/123\`.

  ```ts
  string
  ```

* productVariantId

  The GID of the product variant. E.g. \`gid://shopify/ProductVariant/101\`.

  ```ts
  string
  ```

* publicListId

  The public ID of the product list.

  ```ts
  string
  ```

* shopId

  The GID of the shop. E.g. \`gid://shopify/Shop/42\`.

  ```ts
  string
  ```

#### RenameProductListParams

* id

  The GID of the product list. E.g. \`gid://shopapp/ProductList/123\`.

  ```ts
  string
  ```

* name

  The new name of the product list.

  ```ts
  string
  ```

#### ReportContentImpressionParams

* pageValue

  ```ts
  string
  ```

* publicId

  ```ts
  string
  ```

#### ReportErrorParams

Parameters for reporting JavaScript errors that occur in the webview. This captures detailed error information to help with debugging and monitoring.

* additionalContext

  Additional context about the error (e.g., user actions, state, etc.)

  ```ts
  { [key: string]: any; }
  ```

* message

  The error message

  ```ts
  string
  ```

* stack

  The stack trace of the error

  ```ts
  string
  ```

#### ReportFetchParams

Parameters for reporting fetch calls made in the webview. This captures network request details for observability.

* duration

  Duration of the request in milliseconds

  ```ts
  number
  ```

* error

  Error message if the request failed

  ```ts
  string
  ```

* method

  The HTTP method used (GET, POST, etc.)

  ```ts
  string
  ```

* status

  The HTTP status code of the response (0 for network errors)

  ```ts
  number
  ```

* success

  Whether the request was successful (response.ok)

  ```ts
  boolean
  ```

* timestamp

  Timestamp when the request completed

  ```ts
  number
  ```

* url

  The URL that was fetched

  ```ts
  string
  ```

#### ReportImpressionParams

* pageValue

  ```ts
  string
  ```

* subjectId

  ```ts
  string
  ```

* subjectType

  ```ts
  string
  ```

#### ReportInteractionParams

* interactionType

  ```ts
  string
  ```

* interactionValue

  ```ts
  string
  ```

* pageValue

  ```ts
  string
  ```

#### RequestPermissionParams

* permission

  ```ts
  MiniPermission
  ```

#### MiniPermission

```ts
'CAMERA' | 'MICROPHONE' | 'MOTION'
```

#### RequestPermissionResponse

* errorMessage

  ```ts
  string
  ```

* granted

  ```ts
  boolean
  ```

#### SearchProductsByShopParams

* after

  ```ts
  string
  ```

* fetchPolicy

  ```ts
  DataHookFetchPolicy
  ```

* first

  ```ts
  number
  ```

* query

  ```ts
  string
  ```

* shopId

  ```ts
  string
  ```

#### SearchProductsByShopResponse

* data

  ```ts
  T
  ```

* pageInfo

  ```ts
  PaginationInfo
  ```

#### SetAsyncStorageItemParams

* key

  ```ts
  string
  ```

* value

  ```ts
  string
  ```

#### SetProductListVisibilityParams

* id

  The GID of the product list. E.g. \`gid://shopapp/ProductList/123\`.

  ```ts
  string
  ```

* name

  The name of the product list. Required to preserve the existing name.

  ```ts
  string
  ```

* privacyStatus

  The privacy status to set for the product list.

  ```ts
  ProductListPrivacyStatus
  ```

#### SetSecretParams

* value

  ```ts
  string
  ```

#### ShareParams

* failOnCancel

  ```ts
  boolean
  ```

* message

  ```ts
  string
  ```

* title

  ```ts
  string
  ```

* type

  ```ts
  string
  ```

* url

  ```ts
  string
  ```

* urls

  ```ts
  string[]
  ```

#### ShareResponse

* dismissedAction

  ```ts
  boolean
  ```

* message

  ```ts
  string
  ```

* success

  ```ts
  boolean
  ```

#### ShareSingleParams

```ts
BaseShareSingleOptions | InstagramShareSingleOptions | FacebookShareSingleOptions
```

#### BaseShareSingleOptions

* appId

  ```ts
  string
  ```

* email

  ```ts
  string
  ```

* filename

  ```ts
  string
  ```

* forceDialog

  ```ts
  boolean
  ```

* message

  ```ts
  string
  ```

* recipient

  ```ts
  string
  ```

* social

  ```ts
  Social.Facebook | Social.Pagesmanager | Social.Twitter | Social.Whatsapp | Social.Whatsappbusiness | Social.Instagram | Social.Googleplus | Social.Email | Social.Pinterest | Social.Linkedin | Social.Sms | Social.Telegram | Social.Snapchat | Social.Messenger | Social.Viber | Social.Discord
  ```

* subject

  ```ts
  string
  ```

* title

  ```ts
  string
  ```

* type

  ```ts
  string
  ```

* url

  ```ts
  string
  ```

* urls

  ```ts
  string[]
  ```

#### Social

* Facebook

  ```ts
  facebook
  ```

* FacebookStories

  ```ts
  facebookstories
  ```

* Pagesmanager

  ```ts
  pagesmanager
  ```

* Twitter

  ```ts
  twitter
  ```

* Whatsapp

  ```ts
  whatsapp
  ```

* Whatsappbusiness

  ```ts
  whatsappbusiness
  ```

* Instagram

  ```ts
  instagram
  ```

* InstagramStories

  ```ts
  instagramstories
  ```

* Googleplus

  ```ts
  googleplus
  ```

* Email

  ```ts
  email
  ```

* Pinterest

  ```ts
  pinterest
  ```

* Linkedin

  ```ts
  linkedin
  ```

* Sms

  ```ts
  sms
  ```

* Telegram

  ```ts
  telegram
  ```

* Snapchat

  ```ts
  snapchat
  ```

* Messenger

  ```ts
  messenger
  ```

* Viber

  ```ts
  viber
  ```

* Discord

  ```ts
  discord
  ```

#### InstagramShareSingleOptions

* appId

  ```ts
  string
  ```

* attributionURL

  ```ts
  string
  ```

* backgroundBottomColor

  ```ts
  string
  ```

* backgroundImage

  ```ts
  string
  ```

* backgroundTopColor

  ```ts
  string
  ```

* backgroundVideo

  ```ts
  string
  ```

* email

  ```ts
  string
  ```

* filename

  ```ts
  string
  ```

* forceDialog

  ```ts
  boolean
  ```

* linkText

  ```ts
  string
  ```

* linkUrl

  ```ts
  string
  ```

* message

  ```ts
  string
  ```

* recipient

  ```ts
  string
  ```

* social

  ```ts
  Social.InstagramStories
  ```

* stickerImage

  ```ts
  string
  ```

* subject

  ```ts
  string
  ```

* title

  ```ts
  string
  ```

* type

  ```ts
  string
  ```

* url

  ```ts
  string
  ```

* urls

  ```ts
  string[]
  ```

#### FacebookShareSingleOptions

* appId

  ```ts
  string
  ```

* attributionURL

  ```ts
  string
  ```

* backgroundBottomColor

  ```ts
  string
  ```

* backgroundImage

  ```ts
  string
  ```

* backgroundTopColor

  ```ts
  string
  ```

* backgroundVideo

  ```ts
  string
  ```

* email

  ```ts
  string
  ```

* filename

  ```ts
  string
  ```

* forceDialog

  ```ts
  boolean
  ```

* linkText

  ```ts
  string
  ```

* linkUrl

  ```ts
  string
  ```

* message

  ```ts
  string
  ```

* recipient

  ```ts
  string
  ```

* social

  ```ts
  Social.FacebookStories
  ```

* stickerImage

  ```ts
  string
  ```

* subject

  ```ts
  string
  ```

* title

  ```ts
  string
  ```

* type

  ```ts
  string
  ```

* url

  ```ts
  string
  ```

* urls

  ```ts
  string[]
  ```

#### ShareSingleResponse

* message

  ```ts
  string
  ```

* success

  ```ts
  boolean
  ```

#### ShowErrorScreenParams

* message

  The message to display in the error screen.

  ```ts
  string
  ```

* title

  The title of the error screen.

  ```ts
  string
  ```

#### ShowErrorToastParams

* message

  ```ts
  string
  ```

#### ShowFeedbackSheetParams

* publicId

  ```ts
  string
  ```

#### TranslateContentUpParams

* inputYPosition

  ```ts
  number
  ```

#### UnfavoriteParams

* productId

  ```ts
  string
  ```

* productVariantId

  ```ts
  string
  ```

* shopId

  ```ts
  string
  ```

#### UnfollowShopParams

* shopId

  ```ts
  string
  ```

#### SnakeToCamelCase

```ts
S extends `${infer Head}_${infer Tail}`
    ? `${Lowercase<Head>}${SnakeToCamelCaseTail<Tail>}`
    : Lowercase<S>
```

#### SnakeToCamelCaseTail

```ts
S extends `${infer Head}_${infer Tail}`
    ? `${CapitalizeSegment<Head>}${SnakeToCamelCaseTail<Tail>}`
    : CapitalizeSegment<S>
```

#### CapitalizeSegment

```ts
Uppercase<S> extends 'AR' ? 'AR' : Capitalize<Lowercase<S>>
```

Examples

#### Examples

* ####

  ##### tsx

  ```tsx
  import {useCallback} from 'react'

  import {useErrorToast, Button} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    const {showErrorToast} = useErrorToast()

    const handleError = useCallback(() => {
      showErrorToast({
        message: 'Something went wrong',
      })
    }, [showErrorToast])

    return <Button onClick={handleError}>Show error toast</Button>
  }
  ```

***

---

<a id="useimagepicker-useimagepicker"></a>

## useImagePicker

## useImagePicker

The `useImagePicker` hook provides access to camera and gallery functionality for selecting images.

### use​Image​Picker()

#### Returns

* **UseImagePickerReturns**

#### UseImagePickerReturns

* openCamera

  Opens the camera to take a photo.

  ```ts
  (params?: OpenCameraParams) => Promise<File>
  ```

* openGallery

  Opens the gallery to select an image.

  ```ts
  (params?: OpenGalleryParams) => Promise<File>
  ```

#### OpenCameraParams

* cameraFacing

  ```ts
  CameraFacing
  ```

* customQuality

  ```ts
  CustomImageQuality
  ```

* quality

  ```ts
  ImageQuality
  ```

#### CameraFacing

```ts
'front' | 'back'
```

#### CustomImageQuality

* compression

  ```ts
  number
  ```

* size

  ```ts
  number
  ```

#### ImageQuality

```ts
'low' | 'medium' | 'high' | 'original'
```

#### OpenGalleryParams

* customQuality

  ```ts
  CustomImageQuality
  ```

* quality

  ```ts
  ImageQuality
  ```

Examples

#### Examples

* ####

  ##### tsx

  ```tsx
  import {useState} from 'react'

  import {useImagePicker, Button, Image} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    const {openCamera, openGallery} = useImagePicker()
    const [selectedFile, setSelectedFile] = useState<File | null>(null)

    const handleCameraCapture = async () => {
      try {
        const file = await openCamera('front')
        setSelectedFile(file)
        console.log('Captured file:', file.name, file.size)
      } catch (error) {
        console.error('Failed to capture image:', error)
      }
    }

    const handleGallerySelect = async () => {
      try {
        const file = await openGallery()
        setSelectedFile(file)
        console.log('Selected file:', file.name, file.size)
      } catch (error) {
        console.error('Failed to select image:', error)
      }
    }

    const clearImage = () => {
      setSelectedFile(null)
    }

    return (
      <>
        <Button onClick={handleCameraCapture}>Open Camera</Button>
        <Button onClick={handleGallerySelect}>Open Gallery</Button>

        {selectedFile && (
          <>
            {/* Image component handles blob URL creation and cleanup automatically */}
            <Image
              file={selectedFile}
              alt="Selected image"
              className="w-full max-w-md mt-4"
            />
            <div className="mt-2 space-x-2">
              <Button onClick={clearImage} variant="secondary">
                Clear
              </Button>
            </div>
          </>
        )}

        {/* Image component also supports regular src for remote images */}
        <Image
          src="https://example.com/image.jpg"
          alt="Remote image"
          className="w-full max-w-md mt-4"
        />
      </>
    )
  }
  ```

***

---

<a id="usekeyboardavoidingview-usekeyboardavoidingview"></a>

## useKeyboardAvoidingView

## useKeyboardAvoidingView

The `useKeyboardAvoidingView` hook automatically adjusts your layout when the on-screen keyboard appears, ensuring focused input fields remain visible. This hook is primarily designed for Android devices, as iOS handles keyboard avoidance automatically.

Examples

#### Examples

* ####

  ##### tsx

  ```tsx
  import {useRef} from 'react'

  import {useKeyboardAvoidingView, Input} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    const inputRef = useRef<HTMLInputElement>(null)

    const {onFocus, onBlur} = useKeyboardAvoidingView({ref: inputRef})

    return <Input ref={inputRef} onFocus={onFocus} onBlur={onBlur} />
  }
  ```

***

---

<a id="userequestpermissions-userequestpermissions"></a>

## useRequestPermissions

## useRequestPermissions

The `useRequestPermissions` hook provides a function to request native device permissions from the user. It handles both app-level and system-level permission requests, showing appropriate dialogs and managing permission state. Supported permissions include camera, microphone, and device motion access.

**Note:**

Before using this hook, add the required permissions to your Mini's manifest file: `"permissions": ["CAMERA"]`.

### use​Request​Permissions()

#### Returns

* **UseRequestPermissionsReturns**

#### UseRequestPermissionsReturns

* requestPermission

  Request native permissions from the user

  ```ts
  (params: RequestPermissionParams) => Promise<RequestPermissionResponse>
  ```

#### RequestPermissionParams

* permission

  ```ts
  MiniPermission
  ```

#### MiniPermission

```ts
'CAMERA' | 'MICROPHONE' | 'MOTION'
```

#### RequestPermissionResponse

* errorMessage

  ```ts
  string
  ```

* granted

  ```ts
  boolean
  ```

Examples

#### Examples

* ####

  ##### tsx

  ```tsx
  import {useRequestPermissions, Button} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    const {requestPermission} = useRequestPermissions()

    const handleCameraPermission = async () => {
      try {
        const response = await requestPermission({permission: 'CAMERA'})

        if (response.granted) {
          console.log('Camera permission granted')
          // You can now proceed with camera functionality
        } else {
          console.log('Camera permission denied:', response.errorMessage)
          // Handle the denial gracefully
          // For example: show alternative UI or functionality
        }
      } catch (error) {
        console.error('Failed to request camera permission:', error)
        // Handle unexpected errors
      }
    }

    return (
      <div>
        <Button onClick={handleCameraPermission}>
          Request Camera Permission
        </Button>
      </div>
    )
  }
  ```

***

---

<a id="usesafearea-usesafearea"></a>

## useSafeArea

## useSafeArea

Returns the safe area insets for the current device in pixels. These values represent the areas of the screen obscured by system UI such as the home indicator on iOS or the navigation bar on Android. Use these values to ensure your content is not hidden behind system chrome.

The insets are injected by the Shop app and work reliably on both iOS and Android. The equivalent CSS custom properties (`--safe-area-inset-top`, `--safe-area-inset-right`, `--safe-area-inset-bottom`, `--safe-area-inset-left`) are also available for use in stylesheets.

Your Mini should handle all four edges to ensure correct rendering across devices and future layout changes.

### use​Safe​Area()

#### Returns

* **SafeAreaInsets**

#### SafeAreaInsets

* bottom

  ```ts
  number
  ```

* left

  ```ts
  number
  ```

* right

  ```ts
  number
  ```

* top

  ```ts
  number
  ```

Examples

#### Examples

* ####

  ##### tsx

  ```tsx
  import {useSafeArea} from '@shopify/shop-minis-react'

  export default function SafeContent() {
    const {top, right, bottom, left} = useSafeArea()

    return (
      <div
        className="min-h-dvh flex flex-col"
        style={{
          paddingTop: top,
          paddingRight: right,
          paddingBottom: bottom,
          paddingLeft: left,
        }}
      >
        <h1 className="flex-1 px-4">My Page</h1>
        <p className="px-4">Content is safely inset from all edges.</p>
      </div>
    )
  }
  ```

***

---

<a id="useshare-useshare"></a>

## useShare

## useShare

The `useShare` hook provides native sharing functionality through the Shop app's share sheet. Supports sharing text messages, titles, URLs (single or multiple), and custom content types. You can use this for user generated content sharing, product sharing, referral links, wishlists, or any social sharing features.

### use​Share()

#### Returns

* **UseShareReturns**

#### UseShareReturns

* share

  Generic Social Share

  ```ts
  (params: ShareParams) => Promise<ShareResponse>
  ```

* shareSingle

  Social Share for a single social medium

  ```ts
  (params: ShareSingleParams) => Promise<ShareSingleResponse>
  ```

#### ShareParams

* failOnCancel

  ```ts
  boolean
  ```

* message

  ```ts
  string
  ```

* title

  ```ts
  string
  ```

* type

  ```ts
  string
  ```

* url

  ```ts
  string
  ```

* urls

  ```ts
  string[]
  ```

#### ShareResponse

* dismissedAction

  ```ts
  boolean
  ```

* message

  ```ts
  string
  ```

* success

  ```ts
  boolean
  ```

#### ShareSingleParams

```ts
BaseShareSingleOptions | InstagramShareSingleOptions | FacebookShareSingleOptions
```

#### BaseShareSingleOptions

* appId

  ```ts
  string
  ```

* email

  ```ts
  string
  ```

* filename

  ```ts
  string
  ```

* forceDialog

  ```ts
  boolean
  ```

* message

  ```ts
  string
  ```

* recipient

  ```ts
  string
  ```

* social

  ```ts
  Social.Facebook | Social.Pagesmanager | Social.Twitter | Social.Whatsapp | Social.Whatsappbusiness | Social.Instagram | Social.Googleplus | Social.Email | Social.Pinterest | Social.Linkedin | Social.Sms | Social.Telegram | Social.Snapchat | Social.Messenger | Social.Viber | Social.Discord
  ```

* subject

  ```ts
  string
  ```

* title

  ```ts
  string
  ```

* type

  ```ts
  string
  ```

* url

  ```ts
  string
  ```

* urls

  ```ts
  string[]
  ```

#### Social

* Facebook

  ```ts
  facebook
  ```

* FacebookStories

  ```ts
  facebookstories
  ```

* Pagesmanager

  ```ts
  pagesmanager
  ```

* Twitter

  ```ts
  twitter
  ```

* Whatsapp

  ```ts
  whatsapp
  ```

* Whatsappbusiness

  ```ts
  whatsappbusiness
  ```

* Instagram

  ```ts
  instagram
  ```

* InstagramStories

  ```ts
  instagramstories
  ```

* Googleplus

  ```ts
  googleplus
  ```

* Email

  ```ts
  email
  ```

* Pinterest

  ```ts
  pinterest
  ```

* Linkedin

  ```ts
  linkedin
  ```

* Sms

  ```ts
  sms
  ```

* Telegram

  ```ts
  telegram
  ```

* Snapchat

  ```ts
  snapchat
  ```

* Messenger

  ```ts
  messenger
  ```

* Viber

  ```ts
  viber
  ```

* Discord

  ```ts
  discord
  ```

#### InstagramShareSingleOptions

* appId

  ```ts
  string
  ```

* attributionURL

  ```ts
  string
  ```

* backgroundBottomColor

  ```ts
  string
  ```

* backgroundImage

  ```ts
  string
  ```

* backgroundTopColor

  ```ts
  string
  ```

* backgroundVideo

  ```ts
  string
  ```

* email

  ```ts
  string
  ```

* filename

  ```ts
  string
  ```

* forceDialog

  ```ts
  boolean
  ```

* linkText

  ```ts
  string
  ```

* linkUrl

  ```ts
  string
  ```

* message

  ```ts
  string
  ```

* recipient

  ```ts
  string
  ```

* social

  ```ts
  Social.InstagramStories
  ```

* stickerImage

  ```ts
  string
  ```

* subject

  ```ts
  string
  ```

* title

  ```ts
  string
  ```

* type

  ```ts
  string
  ```

* url

  ```ts
  string
  ```

* urls

  ```ts
  string[]
  ```

#### FacebookShareSingleOptions

* appId

  ```ts
  string
  ```

* attributionURL

  ```ts
  string
  ```

* backgroundBottomColor

  ```ts
  string
  ```

* backgroundImage

  ```ts
  string
  ```

* backgroundTopColor

  ```ts
  string
  ```

* backgroundVideo

  ```ts
  string
  ```

* email

  ```ts
  string
  ```

* filename

  ```ts
  string
  ```

* forceDialog

  ```ts
  boolean
  ```

* linkText

  ```ts
  string
  ```

* linkUrl

  ```ts
  string
  ```

* message

  ```ts
  string
  ```

* recipient

  ```ts
  string
  ```

* social

  ```ts
  Social.FacebookStories
  ```

* stickerImage

  ```ts
  string
  ```

* subject

  ```ts
  string
  ```

* title

  ```ts
  string
  ```

* type

  ```ts
  string
  ```

* url

  ```ts
  string
  ```

* urls

  ```ts
  string[]
  ```

#### ShareSingleResponse

* message

  ```ts
  string
  ```

* success

  ```ts
  boolean
  ```

Examples

#### Examples

* ####

  ##### tsx

  ```tsx
  import {useShare, Button} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    const {share} = useShare()

    const handleShare = async () => {
      const result = await share({
        title: 'Check out this product!',
        text: 'I found this amazing product on Shop',
        url: 'https://shop.app/products/123',
      })

      console.log({shareResult: result})
    }

    return <Button onClick={handleShare}>Share</Button>
  }
  ```

***

---

<a id="usepopularproducts-usepopularproducts"></a>

## usePopularProducts

## usePopularProducts

The `usePopularProducts` hook fetches popular products from the catalog.

### use​Popular​Products(**[params](#usepopularproductsgeneratedtype-propertydetail-params)**​)

#### Parameters

* **params**

  **UsePopularProductsParams**

#### Returns

* **UsePopularProductsReturns**

#### UsePopularProductsParams

* fetchPolicy

  ```ts
  DataHookFetchPolicy
  ```

* first

  ```ts
  number
  ```

* skip

  ```ts
  boolean
  ```

#### DataHookFetchPolicy

```ts
'cache-first' | 'network-only'
```

#### UsePopularProductsReturns

* error

  ```ts
  Error | null
  ```

* fetchMore

  ```ts
  () => Promise<void>
  ```

* hasNextPage

  ```ts
  boolean
  ```

* loading

  ```ts
  boolean
  ```

* products

  ```ts
  Product[] | null
  ```

* refetch

  ```ts
  () => Promise<void>
  ```

#### Product

* compareAtPrice

  ```ts
  Money | null
  ```

* defaultVariantId

  ```ts
  string
  ```

* featuredImage

  ```ts
  ProductImage | null
  ```

* id

  ```ts
  string
  ```

* isFavorited

  ```ts
  boolean
  ```

* price

  ```ts
  Money
  ```

* referral

  ```ts
  boolean
  ```

* reviewAnalytics

  ```ts
  { averageRating?: number; reviewCount?: number; }
  ```

* selectedVariant

  ```ts
  ProductVariant
  ```

* shop

  ```ts
  ProductShop
  ```

* title

  ```ts
  string
  ```

* variants

  ```ts
  ProductVariant[]
  ```

#### Money

* amount

  ```ts
  Decimal
  ```

* currencyCode

  ```ts
  CurrencyCode
  ```

#### Decimal

```ts
string
```

#### CurrencyCode

```ts
'AED' | 'AFN' | 'ALL' | 'AMD' | 'ANG' | 'AOA' | 'ARS' | 'AUD' | 'AWG' | 'AZN' | 'BAM' | 'BBD' | 'BDT' | 'BGN' | 'BHD' | 'BIF' | 'BMD' | 'BND' | 'BOB' | 'BRL' | 'BSD' | 'BTN' | 'BWP' | 'BYN' | 'BYR' | 'BZD' | 'CAD' | 'CDF' | 'CHF' | 'CLP' | 'CNY' | 'COP' | 'CRC' | 'CVE' | 'CZK' | 'DJF' | 'DKK' | 'DOP' | 'DZD' | 'EGP' | 'ERN' | 'ETB' | 'EUR' | 'FJD' | 'FKP' | 'GBP' | 'GEL' | 'GHS' | 'GIP' | 'GMD' | 'GNF' | 'GTQ' | 'GYD' | 'HKD' | 'HNL' | 'HRK' | 'HTG' | 'HUF' | 'IDR' | 'ILS' | 'INR' | 'IQD' | 'IRR' | 'ISK' | 'JEP' | 'JMD' | 'JOD' | 'JPY' | 'KES' | 'KGS' | 'KHR' | 'KID' | 'KMF' | 'KRW' | 'KWD' | 'KYD' | 'KZT' | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'LSL' | 'LTL' | 'LVL' | 'LYD' | 'MAD' | 'MDL' | 'MGA' | 'MKD' | 'MMK' | 'MNT' | 'MOP' | 'MRU' | 'MUR' | 'MVR' | 'MWK' | 'MXN' | 'MYR' | 'MZN' | 'NAD' | 'NGN' | 'NIO' | 'NOK' | 'NPR' | 'NZD' | 'OMR' | 'PAB' | 'PEN' | 'PGK' | 'PHP' | 'PKR' | 'PLN' | 'PYG' | 'QAR' | 'RON' | 'RSD' | 'RUB' | 'RWF' | 'SAR' | 'SBD' | 'SCR' | 'SDG' | 'SEK' | 'SGD' | 'SHP' | 'SLL' | 'SOS' | 'SRD' | 'SSP' | 'STD' | 'STN' | 'SYP' | 'SZL' | 'THB' | 'TJS' | 'TMT' | 'TND' | 'TOP' | 'TRY' | 'TTD' | 'TWD' | 'TZS' | 'UAH' | 'UGX' | 'USD' | 'UYU' | 'UZS' | 'VED' | 'VEF' | 'VES' | 'VND' | 'VUV' | 'WST' | 'XAF' | 'XCD' | 'XOF' | 'XPF' | 'XXX' | 'YER' | 'ZAR' | 'ZMW'
```

#### ProductImage

* altText

  ```ts
  string | null
  ```

* height

  ```ts
  number | null
  ```

* id

  ```ts
  string | null
  ```

* sensitive

  ```ts
  boolean | null
  ```

* thumbhash

  ```ts
  string | null
  ```

* url

  ```ts
  string
  ```

* width

  ```ts
  number | null
  ```

#### ProductVariant

* compareAtPrice

  ```ts
  Money | null
  ```

* id

  ```ts
  string
  ```

* image

  ```ts
  ProductImage | null
  ```

* isFavorited

  ```ts
  boolean
  ```

* price

  ```ts
  Money
  ```

* title

  ```ts
  string
  ```

#### ProductShop

* id

  ```ts
  string
  ```

* name

  ```ts
  string
  ```

Examples

#### Examples

* ####

  ##### tsx

  ```tsx
  import {usePopularProducts, Button} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    const {products, loading, error, hasNextPage, loadMore} = usePopularProducts({
      first: 10,
    })

    console.log({products, loading, error})

    return (
      <>
        {/* Render products here */}
        {hasNextPage && (
          <Button onClick={loadMore} disabled={loading}>
            Load More Products
          </Button>
        )}
      </>
    )
  }
  ```

***

---

<a id="useproduct-useproduct"></a>

## useProduct

## useProduct

The `useProduct` hook fetches a single product by its ID. Returns complete product details including variants, media, pricing, and shop information. Use this for product detail pages or when you need full product data for a single item. For fetching multiple products efficiently, use `useProducts()` instead which batches requests.

### use​Product(**[params](#useproductgeneratedtype-propertydetail-params)**​)

#### Parameters

* **params**

  **UseProductParams**

  **required**

#### Returns

* **UseProductReturns**

#### UseProductParams

* fetchPolicy

  ```ts
  DataHookFetchPolicy
  ```

* id

  The product ID to fetch.

  ```ts
  string
  ```

* skip

  ```ts
  boolean
  ```

#### DataHookFetchPolicy

```ts
'cache-first' | 'network-only'
```

#### UseProductReturns

* error

  ```ts
  Error | null
  ```

* loading

  ```ts
  boolean
  ```

* product

  The product returned from the query.

  ```ts
  Product | null
  ```

* refetch

  ```ts
  () => Promise<void>
  ```

#### Product

* compareAtPrice

  ```ts
  Money | null
  ```

* defaultVariantId

  ```ts
  string
  ```

* featuredImage

  ```ts
  ProductImage | null
  ```

* id

  ```ts
  string
  ```

* isFavorited

  ```ts
  boolean
  ```

* price

  ```ts
  Money
  ```

* referral

  ```ts
  boolean
  ```

* reviewAnalytics

  ```ts
  { averageRating?: number; reviewCount?: number; }
  ```

* selectedVariant

  ```ts
  ProductVariant
  ```

* shop

  ```ts
  ProductShop
  ```

* title

  ```ts
  string
  ```

* variants

  ```ts
  ProductVariant[]
  ```

#### Money

* amount

  ```ts
  Decimal
  ```

* currencyCode

  ```ts
  CurrencyCode
  ```

#### Decimal

```ts
string
```

#### CurrencyCode

```ts
'AED' | 'AFN' | 'ALL' | 'AMD' | 'ANG' | 'AOA' | 'ARS' | 'AUD' | 'AWG' | 'AZN' | 'BAM' | 'BBD' | 'BDT' | 'BGN' | 'BHD' | 'BIF' | 'BMD' | 'BND' | 'BOB' | 'BRL' | 'BSD' | 'BTN' | 'BWP' | 'BYN' | 'BYR' | 'BZD' | 'CAD' | 'CDF' | 'CHF' | 'CLP' | 'CNY' | 'COP' | 'CRC' | 'CVE' | 'CZK' | 'DJF' | 'DKK' | 'DOP' | 'DZD' | 'EGP' | 'ERN' | 'ETB' | 'EUR' | 'FJD' | 'FKP' | 'GBP' | 'GEL' | 'GHS' | 'GIP' | 'GMD' | 'GNF' | 'GTQ' | 'GYD' | 'HKD' | 'HNL' | 'HRK' | 'HTG' | 'HUF' | 'IDR' | 'ILS' | 'INR' | 'IQD' | 'IRR' | 'ISK' | 'JEP' | 'JMD' | 'JOD' | 'JPY' | 'KES' | 'KGS' | 'KHR' | 'KID' | 'KMF' | 'KRW' | 'KWD' | 'KYD' | 'KZT' | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'LSL' | 'LTL' | 'LVL' | 'LYD' | 'MAD' | 'MDL' | 'MGA' | 'MKD' | 'MMK' | 'MNT' | 'MOP' | 'MRU' | 'MUR' | 'MVR' | 'MWK' | 'MXN' | 'MYR' | 'MZN' | 'NAD' | 'NGN' | 'NIO' | 'NOK' | 'NPR' | 'NZD' | 'OMR' | 'PAB' | 'PEN' | 'PGK' | 'PHP' | 'PKR' | 'PLN' | 'PYG' | 'QAR' | 'RON' | 'RSD' | 'RUB' | 'RWF' | 'SAR' | 'SBD' | 'SCR' | 'SDG' | 'SEK' | 'SGD' | 'SHP' | 'SLL' | 'SOS' | 'SRD' | 'SSP' | 'STD' | 'STN' | 'SYP' | 'SZL' | 'THB' | 'TJS' | 'TMT' | 'TND' | 'TOP' | 'TRY' | 'TTD' | 'TWD' | 'TZS' | 'UAH' | 'UGX' | 'USD' | 'UYU' | 'UZS' | 'VED' | 'VEF' | 'VES' | 'VND' | 'VUV' | 'WST' | 'XAF' | 'XCD' | 'XOF' | 'XPF' | 'XXX' | 'YER' | 'ZAR' | 'ZMW'
```

#### ProductImage

* altText

  ```ts
  string | null
  ```

* height

  ```ts
  number | null
  ```

* id

  ```ts
  string | null
  ```

* sensitive

  ```ts
  boolean | null
  ```

* thumbhash

  ```ts
  string | null
  ```

* url

  ```ts
  string
  ```

* width

  ```ts
  number | null
  ```

#### ProductVariant

* compareAtPrice

  ```ts
  Money | null
  ```

* id

  ```ts
  string
  ```

* image

  ```ts
  ProductImage | null
  ```

* isFavorited

  ```ts
  boolean
  ```

* price

  ```ts
  Money
  ```

* title

  ```ts
  string
  ```

#### ProductShop

* id

  ```ts
  string
  ```

* name

  ```ts
  string
  ```

Examples

#### Examples

* ####

  ##### tsx

  ```tsx
  import {useProduct} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    const {product, loading, error} = useProduct({
      id: 'gid://shopify/Product/123',
    })

    console.log({product, loading, error})
  }
  ```

***

---

<a id="useproductlist-useproductlist"></a>

## useProductList

## useProductList

The `useProductList` hook fetches a single product collection by its ID. To fetch all of the user's collections at once, use `useProductLists()` instead.

### use​Product​List(**[params](#useproductlistgeneratedtype-propertydetail-params)**​)

#### Parameters

* **params**

  **UseProductListParams**

#### Returns

* **UseProductListResult**

#### UseProductListParams

* fetchPolicy

  ```ts
  DataHookFetchPolicy
  ```

* first

  ```ts
  number
  ```

* id

  The GID of the product list. E.g. \`gid://shopapp/ProductList/123\`.

  ```ts
  string
  ```

* publicId

  The public ID of the product list.

  ```ts
  string
  ```

* skip

  ```ts
  boolean
  ```

#### DataHookFetchPolicy

```ts
'cache-first' | 'network-only'
```

#### UseProductListResult

* error

  ```ts
  Error | null
  ```

* fetchMore

  ```ts
  () => Promise<void>
  ```

* hasNextPage

  ```ts
  boolean
  ```

* loading

  ```ts
  boolean
  ```

* productList

  ```ts
  ProductList | null
  ```

* refetch

  ```ts
  () => Promise<void>
  ```

#### ProductList

* id

  ```ts
  string
  ```

* name

  ```ts
  string | null
  ```

* privacyStatus

  ```ts
  ProductListPrivacyStatus
  ```

* products

  ```ts
  Product[]
  ```

* publicId

  ```ts
  string | null
  ```

#### ProductListPrivacyStatus

```ts
'PRIVATE' | 'PUBLIC'
```

#### Product

* compareAtPrice

  ```ts
  Money | null
  ```

* defaultVariantId

  ```ts
  string
  ```

* featuredImage

  ```ts
  ProductImage | null
  ```

* id

  ```ts
  string
  ```

* isFavorited

  ```ts
  boolean
  ```

* price

  ```ts
  Money
  ```

* referral

  ```ts
  boolean
  ```

* reviewAnalytics

  ```ts
  { averageRating?: number; reviewCount?: number; }
  ```

* selectedVariant

  ```ts
  ProductVariant
  ```

* shop

  ```ts
  ProductShop
  ```

* title

  ```ts
  string
  ```

* variants

  ```ts
  ProductVariant[]
  ```

#### Money

* amount

  ```ts
  Decimal
  ```

* currencyCode

  ```ts
  CurrencyCode
  ```

#### Decimal

```ts
string
```

#### CurrencyCode

```ts
'AED' | 'AFN' | 'ALL' | 'AMD' | 'ANG' | 'AOA' | 'ARS' | 'AUD' | 'AWG' | 'AZN' | 'BAM' | 'BBD' | 'BDT' | 'BGN' | 'BHD' | 'BIF' | 'BMD' | 'BND' | 'BOB' | 'BRL' | 'BSD' | 'BTN' | 'BWP' | 'BYN' | 'BYR' | 'BZD' | 'CAD' | 'CDF' | 'CHF' | 'CLP' | 'CNY' | 'COP' | 'CRC' | 'CVE' | 'CZK' | 'DJF' | 'DKK' | 'DOP' | 'DZD' | 'EGP' | 'ERN' | 'ETB' | 'EUR' | 'FJD' | 'FKP' | 'GBP' | 'GEL' | 'GHS' | 'GIP' | 'GMD' | 'GNF' | 'GTQ' | 'GYD' | 'HKD' | 'HNL' | 'HRK' | 'HTG' | 'HUF' | 'IDR' | 'ILS' | 'INR' | 'IQD' | 'IRR' | 'ISK' | 'JEP' | 'JMD' | 'JOD' | 'JPY' | 'KES' | 'KGS' | 'KHR' | 'KID' | 'KMF' | 'KRW' | 'KWD' | 'KYD' | 'KZT' | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'LSL' | 'LTL' | 'LVL' | 'LYD' | 'MAD' | 'MDL' | 'MGA' | 'MKD' | 'MMK' | 'MNT' | 'MOP' | 'MRU' | 'MUR' | 'MVR' | 'MWK' | 'MXN' | 'MYR' | 'MZN' | 'NAD' | 'NGN' | 'NIO' | 'NOK' | 'NPR' | 'NZD' | 'OMR' | 'PAB' | 'PEN' | 'PGK' | 'PHP' | 'PKR' | 'PLN' | 'PYG' | 'QAR' | 'RON' | 'RSD' | 'RUB' | 'RWF' | 'SAR' | 'SBD' | 'SCR' | 'SDG' | 'SEK' | 'SGD' | 'SHP' | 'SLL' | 'SOS' | 'SRD' | 'SSP' | 'STD' | 'STN' | 'SYP' | 'SZL' | 'THB' | 'TJS' | 'TMT' | 'TND' | 'TOP' | 'TRY' | 'TTD' | 'TWD' | 'TZS' | 'UAH' | 'UGX' | 'USD' | 'UYU' | 'UZS' | 'VED' | 'VEF' | 'VES' | 'VND' | 'VUV' | 'WST' | 'XAF' | 'XCD' | 'XOF' | 'XPF' | 'XXX' | 'YER' | 'ZAR' | 'ZMW'
```

#### ProductImage

* altText

  ```ts
  string | null
  ```

* height

  ```ts
  number | null
  ```

* id

  ```ts
  string | null
  ```

* sensitive

  ```ts
  boolean | null
  ```

* thumbhash

  ```ts
  string | null
  ```

* url

  ```ts
  string
  ```

* width

  ```ts
  number | null
  ```

#### ProductVariant

* compareAtPrice

  ```ts
  Money | null
  ```

* id

  ```ts
  string
  ```

* image

  ```ts
  ProductImage | null
  ```

* isFavorited

  ```ts
  boolean
  ```

* price

  ```ts
  Money
  ```

* title

  ```ts
  string
  ```

#### ProductShop

* id

  ```ts
  string
  ```

* name

  ```ts
  string
  ```

Examples

#### Examples

* ####

  ##### tsx

  ```tsx
  import {useProductList} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    const {productList, loading, error} = useProductList({
      id: 'gid://shopapp/ProductList/123',
    })

    console.log({productList, loading, error})
  }
  ```

***

---

<a id="useproductlistactions-useproductlistactions"></a>

## useProductListActions

## useProductListActions

The `useProductListActions` hook provides mutation functions for managing product collections. Available actions: `addProductList()` creates a new collection, `removeProductList()` deletes a collection, `renameProductList()` updates a collection name, `addProductListItem()` saves a product to a collection, and `removeProductListItem()` removes a product from a collection. All actions automatically handle Shop app integration.

**Caution:**

This hook requires adding the following scopes to the manifest file:

`product_list:write` `product_list_item:write`

For more details, see [manifest.json](https://shopify.dev/docs/api/shop-minis/manifest-file).

### use​Product​List​Actions()

#### Returns

* **UseProductListActionsReturns**

#### UseProductListActionsReturns

* addProductList

  Add a product list

  ```ts
  (params: AddProductListParams) => Promise<ProductList>
  ```

* addProductListItem

  Add a product to a product list

  ```ts
  (params: AddProductListItemParams) => Promise<void>
  ```

* removeProductList

  Remove a product list

  ```ts
  (params: RemoveProductListParams) => Promise<void>
  ```

* removeProductListItem

  Remove a product from a product list

  ```ts
  (params: RemoveProductListItemParams) => Promise<void>
  ```

* renameProductList

  Rename a product list

  ```ts
  (params: RenameProductListParams) => Promise<ProductList>
  ```

* setProductListVisibility

  Set the visibility (privacy status) of a product list

  ```ts
  (params: SetProductListVisibilityParams) => Promise<ProductList>
  ```

#### AddProductListParams

* description

  A description of the product list.

  ```ts
  string
  ```

* name

  The name of the product list.

  ```ts
  string
  ```

* privacyStatus

  The privacy status of the product list. Defaults to 'PRIVATE'.

  ```ts
  ProductListPrivacyStatus
  ```

#### ProductListPrivacyStatus

```ts
'PRIVATE' | 'PUBLIC'
```

#### ProductList

* id

  ```ts
  string
  ```

* name

  ```ts
  string | null
  ```

* privacyStatus

  ```ts
  ProductListPrivacyStatus
  ```

* products

  ```ts
  Product[]
  ```

* publicId

  ```ts
  string | null
  ```

#### Product

* compareAtPrice

  ```ts
  Money | null
  ```

* defaultVariantId

  ```ts
  string
  ```

* featuredImage

  ```ts
  ProductImage | null
  ```

* id

  ```ts
  string
  ```

* isFavorited

  ```ts
  boolean
  ```

* price

  ```ts
  Money
  ```

* referral

  ```ts
  boolean
  ```

* reviewAnalytics

  ```ts
  { averageRating?: number; reviewCount?: number; }
  ```

* selectedVariant

  ```ts
  ProductVariant
  ```

* shop

  ```ts
  ProductShop
  ```

* title

  ```ts
  string
  ```

* variants

  ```ts
  ProductVariant[]
  ```

#### Money

* amount

  ```ts
  Decimal
  ```

* currencyCode

  ```ts
  CurrencyCode
  ```

#### Decimal

```ts
string
```

#### CurrencyCode

```ts
'AED' | 'AFN' | 'ALL' | 'AMD' | 'ANG' | 'AOA' | 'ARS' | 'AUD' | 'AWG' | 'AZN' | 'BAM' | 'BBD' | 'BDT' | 'BGN' | 'BHD' | 'BIF' | 'BMD' | 'BND' | 'BOB' | 'BRL' | 'BSD' | 'BTN' | 'BWP' | 'BYN' | 'BYR' | 'BZD' | 'CAD' | 'CDF' | 'CHF' | 'CLP' | 'CNY' | 'COP' | 'CRC' | 'CVE' | 'CZK' | 'DJF' | 'DKK' | 'DOP' | 'DZD' | 'EGP' | 'ERN' | 'ETB' | 'EUR' | 'FJD' | 'FKP' | 'GBP' | 'GEL' | 'GHS' | 'GIP' | 'GMD' | 'GNF' | 'GTQ' | 'GYD' | 'HKD' | 'HNL' | 'HRK' | 'HTG' | 'HUF' | 'IDR' | 'ILS' | 'INR' | 'IQD' | 'IRR' | 'ISK' | 'JEP' | 'JMD' | 'JOD' | 'JPY' | 'KES' | 'KGS' | 'KHR' | 'KID' | 'KMF' | 'KRW' | 'KWD' | 'KYD' | 'KZT' | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'LSL' | 'LTL' | 'LVL' | 'LYD' | 'MAD' | 'MDL' | 'MGA' | 'MKD' | 'MMK' | 'MNT' | 'MOP' | 'MRU' | 'MUR' | 'MVR' | 'MWK' | 'MXN' | 'MYR' | 'MZN' | 'NAD' | 'NGN' | 'NIO' | 'NOK' | 'NPR' | 'NZD' | 'OMR' | 'PAB' | 'PEN' | 'PGK' | 'PHP' | 'PKR' | 'PLN' | 'PYG' | 'QAR' | 'RON' | 'RSD' | 'RUB' | 'RWF' | 'SAR' | 'SBD' | 'SCR' | 'SDG' | 'SEK' | 'SGD' | 'SHP' | 'SLL' | 'SOS' | 'SRD' | 'SSP' | 'STD' | 'STN' | 'SYP' | 'SZL' | 'THB' | 'TJS' | 'TMT' | 'TND' | 'TOP' | 'TRY' | 'TTD' | 'TWD' | 'TZS' | 'UAH' | 'UGX' | 'USD' | 'UYU' | 'UZS' | 'VED' | 'VEF' | 'VES' | 'VND' | 'VUV' | 'WST' | 'XAF' | 'XCD' | 'XOF' | 'XPF' | 'XXX' | 'YER' | 'ZAR' | 'ZMW'
```

#### ProductImage

* altText

  ```ts
  string | null
  ```

* height

  ```ts
  number | null
  ```

* id

  ```ts
  string | null
  ```

* sensitive

  ```ts
  boolean | null
  ```

* thumbhash

  ```ts
  string | null
  ```

* url

  ```ts
  string
  ```

* width

  ```ts
  number | null
  ```

#### ProductVariant

* compareAtPrice

  ```ts
  Money | null
  ```

* id

  ```ts
  string
  ```

* image

  ```ts
  ProductImage | null
  ```

* isFavorited

  ```ts
  boolean
  ```

* price

  ```ts
  Money
  ```

* title

  ```ts
  string
  ```

#### ProductShop

* id

  ```ts
  string
  ```

* name

  ```ts
  string
  ```

#### AddProductListItemParams

* listId

  The GID of the product list. E.g. \`gid://shopapp/ProductList/123\`. This will soon be deprecated in favor of just \`publicListId\`.

  ```ts
  string
  ```

* productId

  The GID of the product. E.g. \`gid://shopify/Product/123\`.

  ```ts
  string
  ```

* productVariantId

  The GID of the product variant. E.g. \`gid://shopify/ProductVariant/101\`.

  ```ts
  string
  ```

* publicListId

  The public ID of the product list.

  ```ts
  string
  ```

* shopId

  The GID of the shop. E.g. \`gid://shopify/Shop/42\`.

  ```ts
  string
  ```

#### RemoveProductListParams

* id

  The GID of the product list. E.g. \`gid://shopapp/ProductList/123\`.

  ```ts
  string
  ```

#### RemoveProductListItemParams

* listId

  The GID of the product list. E.g. \`gid://shopapp/ProductList/123\`. This will soon be deprecated in favor of just \`publicListId\`.

  ```ts
  string
  ```

* productId

  The GID of the product. E.g. \`gid://shopify/Product/123\`.

  ```ts
  string
  ```

* productVariantId

  The GID of the product variant. E.g. \`gid://shopify/ProductVariant/101\`.

  ```ts
  string
  ```

* publicListId

  The public ID of the product list.

  ```ts
  string
  ```

* shopId

  The GID of the shop. E.g. \`gid://shopify/Shop/42\`.

  ```ts
  string
  ```

#### RenameProductListParams

* id

  The GID of the product list. E.g. \`gid://shopapp/ProductList/123\`.

  ```ts
  string
  ```

* name

  The new name of the product list.

  ```ts
  string
  ```

#### SetProductListVisibilityParams

* id

  The GID of the product list. E.g. \`gid://shopapp/ProductList/123\`.

  ```ts
  string
  ```

* name

  The name of the product list. Required to preserve the existing name.

  ```ts
  string
  ```

* privacyStatus

  The privacy status to set for the product list.

  ```ts
  ProductListPrivacyStatus
  ```

Examples

#### Examples

* ####

  ##### tsx

  ```tsx
  import {useProductListActions, Button} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    const {
      addProductList,
      removeProductList,
      renameProductList,
      addProductListItem,
      removeProductListItem,
    } = useProductListActions()

    return (
      <>
        <Button onClick={() => addProductList({name: 'My collection'})}>
          Add collection
        </Button>
        <Button
          onClick={() => removeProductList({id: 'gid://shopapp/ProductList/123'})}
        >
          Remove collection
        </Button>
        <Button
          onClick={() =>
            renameProductList({
              id: 'gid://shopapp/ProductList/123',
              name: 'My renamed collection',
            })
          }
        >
          Rename collection
        </Button>
        <Button
          onClick={() =>
            addProductListItem({
              shopId: 'gid://shopify/Shop/42',
              productId: 'gid://shopify/Product/123',
              productVariantId: 'gid://shopify/ProductVariant/101',
              listId: 'gid://shopapp/ProductList/99',
              publicListId: 'abc123',
            })
          }
        >
          Add product to list
        </Button>
        <Button
          onClick={() =>
            removeProductListItem({
              shopId: 'gid://shopify/Shop/42',
              productId: 'gid://shopify/Product/123',
              productVariantId: 'gid://shopify/ProductVariant/101',
              listId: 'gid://shopapp/ProductList/99',
              publicListId: 'abc123',
            })
          }
        >
          Remove product from list
        </Button>
      </>
    )
  }
  ```

***

---

<a id="useproductlists-useproductlists"></a>

## useProductLists

## useProductLists

The `useProductLists` hook fetches all product collections that the user has created. Use this for displaying a user's collections overview or collection picker. For fetching a specific collection's full contents, use `useProductList()` instead which provides better pagination for individual lists.

### use​Product​Lists(**[params](#useproductlistsgeneratedtype-propertydetail-params)**​)

#### Parameters

* **params**

  **UseProductListsParams**

#### Returns

* **UseProductListsResult**

#### UseProductListsParams

* fetchPolicy

  ```ts
  DataHookFetchPolicy
  ```

* first

  ```ts
  number
  ```

* itemsFirst

  The number of products to fetch per product list.

  ```ts
  number
  ```

* skip

  ```ts
  boolean
  ```

#### DataHookFetchPolicy

```ts
'cache-first' | 'network-only'
```

#### UseProductListsResult

* error

  ```ts
  Error | null
  ```

* fetchMore

  ```ts
  () => Promise<void>
  ```

* hasNextPage

  ```ts
  boolean
  ```

* loading

  ```ts
  boolean
  ```

* productLists

  ```ts
  ProductList[] | null
  ```

* refetch

  ```ts
  () => Promise<void>
  ```

#### ProductList

* id

  ```ts
  string
  ```

* name

  ```ts
  string | null
  ```

* privacyStatus

  ```ts
  ProductListPrivacyStatus
  ```

* products

  ```ts
  Product[]
  ```

* publicId

  ```ts
  string | null
  ```

#### ProductListPrivacyStatus

```ts
'PRIVATE' | 'PUBLIC'
```

#### Product

* compareAtPrice

  ```ts
  Money | null
  ```

* defaultVariantId

  ```ts
  string
  ```

* featuredImage

  ```ts
  ProductImage | null
  ```

* id

  ```ts
  string
  ```

* isFavorited

  ```ts
  boolean
  ```

* price

  ```ts
  Money
  ```

* referral

  ```ts
  boolean
  ```

* reviewAnalytics

  ```ts
  { averageRating?: number; reviewCount?: number; }
  ```

* selectedVariant

  ```ts
  ProductVariant
  ```

* shop

  ```ts
  ProductShop
  ```

* title

  ```ts
  string
  ```

* variants

  ```ts
  ProductVariant[]
  ```

#### Money

* amount

  ```ts
  Decimal
  ```

* currencyCode

  ```ts
  CurrencyCode
  ```

#### Decimal

```ts
string
```

#### CurrencyCode

```ts
'AED' | 'AFN' | 'ALL' | 'AMD' | 'ANG' | 'AOA' | 'ARS' | 'AUD' | 'AWG' | 'AZN' | 'BAM' | 'BBD' | 'BDT' | 'BGN' | 'BHD' | 'BIF' | 'BMD' | 'BND' | 'BOB' | 'BRL' | 'BSD' | 'BTN' | 'BWP' | 'BYN' | 'BYR' | 'BZD' | 'CAD' | 'CDF' | 'CHF' | 'CLP' | 'CNY' | 'COP' | 'CRC' | 'CVE' | 'CZK' | 'DJF' | 'DKK' | 'DOP' | 'DZD' | 'EGP' | 'ERN' | 'ETB' | 'EUR' | 'FJD' | 'FKP' | 'GBP' | 'GEL' | 'GHS' | 'GIP' | 'GMD' | 'GNF' | 'GTQ' | 'GYD' | 'HKD' | 'HNL' | 'HRK' | 'HTG' | 'HUF' | 'IDR' | 'ILS' | 'INR' | 'IQD' | 'IRR' | 'ISK' | 'JEP' | 'JMD' | 'JOD' | 'JPY' | 'KES' | 'KGS' | 'KHR' | 'KID' | 'KMF' | 'KRW' | 'KWD' | 'KYD' | 'KZT' | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'LSL' | 'LTL' | 'LVL' | 'LYD' | 'MAD' | 'MDL' | 'MGA' | 'MKD' | 'MMK' | 'MNT' | 'MOP' | 'MRU' | 'MUR' | 'MVR' | 'MWK' | 'MXN' | 'MYR' | 'MZN' | 'NAD' | 'NGN' | 'NIO' | 'NOK' | 'NPR' | 'NZD' | 'OMR' | 'PAB' | 'PEN' | 'PGK' | 'PHP' | 'PKR' | 'PLN' | 'PYG' | 'QAR' | 'RON' | 'RSD' | 'RUB' | 'RWF' | 'SAR' | 'SBD' | 'SCR' | 'SDG' | 'SEK' | 'SGD' | 'SHP' | 'SLL' | 'SOS' | 'SRD' | 'SSP' | 'STD' | 'STN' | 'SYP' | 'SZL' | 'THB' | 'TJS' | 'TMT' | 'TND' | 'TOP' | 'TRY' | 'TTD' | 'TWD' | 'TZS' | 'UAH' | 'UGX' | 'USD' | 'UYU' | 'UZS' | 'VED' | 'VEF' | 'VES' | 'VND' | 'VUV' | 'WST' | 'XAF' | 'XCD' | 'XOF' | 'XPF' | 'XXX' | 'YER' | 'ZAR' | 'ZMW'
```

#### ProductImage

* altText

  ```ts
  string | null
  ```

* height

  ```ts
  number | null
  ```

* id

  ```ts
  string | null
  ```

* sensitive

  ```ts
  boolean | null
  ```

* thumbhash

  ```ts
  string | null
  ```

* url

  ```ts
  string
  ```

* width

  ```ts
  number | null
  ```

#### ProductVariant

* compareAtPrice

  ```ts
  Money | null
  ```

* id

  ```ts
  string
  ```

* image

  ```ts
  ProductImage | null
  ```

* isFavorited

  ```ts
  boolean
  ```

* price

  ```ts
  Money
  ```

* title

  ```ts
  string
  ```

#### ProductShop

* id

  ```ts
  string
  ```

* name

  ```ts
  string
  ```

Examples

#### Examples

* ####

  ##### tsx

  ```tsx
  import {useProductLists} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    const {productLists, loading, error} = useProductLists({
      first: 10,
    })

    console.log({productLists, loading, error})
  }
  ```

***

---

<a id="useproductmedia-useproductmedia"></a>

## useProductMedia

## useProductMedia

The `useProductMedia` hook fetches media items (images, videos, etc.) for a specific product.

### use​Product​Media(**[params](#useproductmediageneratedtype-propertydetail-params)**​)

#### Parameters

* **params**

  **UseProductMediaParams**

  **required**

#### Returns

* **UseProductMediaReturns**

#### UseProductMediaParams

* fetchPolicy

  ```ts
  DataHookFetchPolicy
  ```

* first

  ```ts
  number
  ```

* id

  The product ID to fetch media for.

  ```ts
  string
  ```

* skip

  ```ts
  boolean
  ```

#### DataHookFetchPolicy

```ts
'cache-first' | 'network-only'
```

#### UseProductMediaReturns

* error

  ```ts
  Error | null
  ```

* fetchMore

  ```ts
  () => Promise<void>
  ```

* hasNextPage

  ```ts
  boolean
  ```

* loading

  ```ts
  boolean
  ```

* media

  The product media returned from the query.

  ```ts
  ProductMedia[] | null
  ```

* refetch

  ```ts
  () => Promise<void>
  ```

#### ProductMedia

```ts
{
      id: string
      image: ProductImage | null
      mediaContentType: 'IMAGE'
      alt: string | null
    } | {
      id: string
      mediaContentType: 'MODEL_3D'
      previewImage: ProductImage | null
      sources: {
        filesize: number
        format: string
        mimeType: string
        url: string
      }[]
      alt: string | null
    } | {
      id: string
      mediaContentType: 'VIDEO'
      previewImage: ProductImage | null
      sources: {
        format: string
        mimeType: string
        url: string
        width: number
        height: number
      }[]
      alt: string | null
    } | {
      id: string
      mediaContentType: 'EXTERNAL_VIDEO'
      previewImage: ProductImage | null
      embedUrl: string
      alt: string | null
    }
```

#### ProductImage

* altText

  ```ts
  string | null
  ```

* height

  ```ts
  number | null
  ```

* id

  ```ts
  string | null
  ```

* sensitive

  ```ts
  boolean | null
  ```

* thumbhash

  ```ts
  string | null
  ```

* url

  ```ts
  string
  ```

* width

  ```ts
  number | null
  ```

Examples

#### Examples

* ####

  ##### tsx

  ```tsx
  import {useProductMedia, Button} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    const {media, loading, error, hasNextPage, loadMore} = useProductMedia({
      id: 'gid://shopify/Product/123',
      first: 10,
    })

    console.log({media, loading, error})

    return (
      <>
        {/* Render media items here */}
        {hasNextPage && (
          <Button onClick={loadMore} disabled={loading}>
            Load More Media
          </Button>
        )}
      </>
    )
  }
  ```

***

---

<a id="useproductsearch-useproductsearch"></a>

## useProductSearch

## useProductSearch

The `useProductSearch` hook fetches products based on a search query.

**Note:**

In order to filter products by category, you can check [Shopify’s Product Taxonomy](https://shopify.github.io/product-taxonomy/releases/latest/). Then use the GID of the category. For example, to filter products in the Electronics category, you would use: \["gid://shopify/TaxonomyCategory/el"]

### use​Product​Search(**[params](#useproductsearchgeneratedtype-propertydetail-params)**​)

#### Parameters

* **params**

  **UseProductSearchParams**

  **required**

#### Returns

* **UseProductSearchReturns**

#### UseProductSearchParams

* fetchPolicy

  ```ts
  DataHookFetchPolicy
  ```

* filters

  The filters to apply to the search.

  ```ts
  ProductFilters
  ```

* first

  ```ts
  number
  ```

* includeSensitive

  Whether to include sensitive products.

  ```ts
  boolean
  ```

* query

  The search query.

  ```ts
  string
  ```

* skip

  ```ts
  boolean
  ```

* sortBy

  The sort order of the results.

  ```ts
  ProductSearchSortBy
  ```

#### DataHookFetchPolicy

```ts
'cache-first' | 'network-only'
```

#### ProductFilters

* apparelSize

  ```ts
  ProductApparelSizeFilter[]
  ```

* available

  ```ts
  boolean
  ```

* category

  ```ts
  string[]
  ```

* color

  ```ts
  ProductColorFilter[]
  ```

* gender

  ```ts
  'MALE' | 'FEMALE' | 'NEUTRAL'
  ```

* includeShopIds

  ```ts
  string[]
  ```

* minimumRating

  ```ts
  number
  ```

* price

  ```ts
  { min?: number; max?: number; }
  ```

* shoeSize

  ```ts
  ProductShoeSizeFilter[]
  ```

#### ProductApparelSizeFilter

```ts
'SIZE_3XL' | 'SIZE_4XL' | 'SIZE_5XL' | 'SIZE_L' | 'SIZE_M' | 'SIZE_S' | 'SIZE_XL' | 'SIZE_XS' | 'SIZE_XXL' | 'SIZE_XXS'
```

#### ProductColorFilter

```ts
'BEIGE' | 'BLACK' | 'BLUE' | 'BROWN' | 'GOLD' | 'GREEN' | 'GREY' | 'NAVY' | 'ORANGE' | 'PINK' | 'PURPLE' | 'RED' | 'SILVER' | 'WHITE' | 'YELLOW'
```

#### ProductShoeSizeFilter

```ts
'SIZE_4' | 'SIZE_4_5' | 'SIZE_5' | 'SIZE_5_5' | 'SIZE_6' | 'SIZE_6_5' | 'SIZE_7' | 'SIZE_7_5' | 'SIZE_8' | 'SIZE_8_5' | 'SIZE_9' | 'SIZE_9_5' | 'SIZE_10' | 'SIZE_10_5' | 'SIZE_11' | 'SIZE_11_5' | 'SIZE_12' | 'SIZE_12_5' | 'SIZE_13' | 'SIZE_13_5' | 'SIZE_14' | 'SIZE_14_5' | 'SIZE_15'
```

#### ProductSearchSortBy

```ts
'MOST_RECENT' | 'PRICE_HIGH_TO_LOW' | 'PRICE_LOW_TO_HIGH' | 'RELEVANCE'
```

#### UseProductSearchReturns

* error

  ```ts
  Error | null
  ```

* fetchMore

  ```ts
  () => Promise<void>
  ```

* hasNextPage

  ```ts
  boolean
  ```

* isTyping

  Whether the user is typing.

  ```ts
  boolean
  ```

* loading

  ```ts
  boolean
  ```

* products

  The products returned from the query.

  ```ts
  Product[] | null
  ```

* refetch

  ```ts
  () => Promise<void>
  ```

#### Product

* compareAtPrice

  ```ts
  Money | null
  ```

* defaultVariantId

  ```ts
  string
  ```

* featuredImage

  ```ts
  ProductImage | null
  ```

* id

  ```ts
  string
  ```

* isFavorited

  ```ts
  boolean
  ```

* price

  ```ts
  Money
  ```

* referral

  ```ts
  boolean
  ```

* reviewAnalytics

  ```ts
  { averageRating?: number; reviewCount?: number; }
  ```

* selectedVariant

  ```ts
  ProductVariant
  ```

* shop

  ```ts
  ProductShop
  ```

* title

  ```ts
  string
  ```

* variants

  ```ts
  ProductVariant[]
  ```

#### Money

* amount

  ```ts
  Decimal
  ```

* currencyCode

  ```ts
  CurrencyCode
  ```

#### Decimal

```ts
string
```

#### CurrencyCode

```ts
'AED' | 'AFN' | 'ALL' | 'AMD' | 'ANG' | 'AOA' | 'ARS' | 'AUD' | 'AWG' | 'AZN' | 'BAM' | 'BBD' | 'BDT' | 'BGN' | 'BHD' | 'BIF' | 'BMD' | 'BND' | 'BOB' | 'BRL' | 'BSD' | 'BTN' | 'BWP' | 'BYN' | 'BYR' | 'BZD' | 'CAD' | 'CDF' | 'CHF' | 'CLP' | 'CNY' | 'COP' | 'CRC' | 'CVE' | 'CZK' | 'DJF' | 'DKK' | 'DOP' | 'DZD' | 'EGP' | 'ERN' | 'ETB' | 'EUR' | 'FJD' | 'FKP' | 'GBP' | 'GEL' | 'GHS' | 'GIP' | 'GMD' | 'GNF' | 'GTQ' | 'GYD' | 'HKD' | 'HNL' | 'HRK' | 'HTG' | 'HUF' | 'IDR' | 'ILS' | 'INR' | 'IQD' | 'IRR' | 'ISK' | 'JEP' | 'JMD' | 'JOD' | 'JPY' | 'KES' | 'KGS' | 'KHR' | 'KID' | 'KMF' | 'KRW' | 'KWD' | 'KYD' | 'KZT' | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'LSL' | 'LTL' | 'LVL' | 'LYD' | 'MAD' | 'MDL' | 'MGA' | 'MKD' | 'MMK' | 'MNT' | 'MOP' | 'MRU' | 'MUR' | 'MVR' | 'MWK' | 'MXN' | 'MYR' | 'MZN' | 'NAD' | 'NGN' | 'NIO' | 'NOK' | 'NPR' | 'NZD' | 'OMR' | 'PAB' | 'PEN' | 'PGK' | 'PHP' | 'PKR' | 'PLN' | 'PYG' | 'QAR' | 'RON' | 'RSD' | 'RUB' | 'RWF' | 'SAR' | 'SBD' | 'SCR' | 'SDG' | 'SEK' | 'SGD' | 'SHP' | 'SLL' | 'SOS' | 'SRD' | 'SSP' | 'STD' | 'STN' | 'SYP' | 'SZL' | 'THB' | 'TJS' | 'TMT' | 'TND' | 'TOP' | 'TRY' | 'TTD' | 'TWD' | 'TZS' | 'UAH' | 'UGX' | 'USD' | 'UYU' | 'UZS' | 'VED' | 'VEF' | 'VES' | 'VND' | 'VUV' | 'WST' | 'XAF' | 'XCD' | 'XOF' | 'XPF' | 'XXX' | 'YER' | 'ZAR' | 'ZMW'
```

#### ProductImage

* altText

  ```ts
  string | null
  ```

* height

  ```ts
  number | null
  ```

* id

  ```ts
  string | null
  ```

* sensitive

  ```ts
  boolean | null
  ```

* thumbhash

  ```ts
  string | null
  ```

* url

  ```ts
  string
  ```

* width

  ```ts
  number | null
  ```

#### ProductVariant

* compareAtPrice

  ```ts
  Money | null
  ```

* id

  ```ts
  string
  ```

* image

  ```ts
  ProductImage | null
  ```

* isFavorited

  ```ts
  boolean
  ```

* price

  ```ts
  Money
  ```

* title

  ```ts
  string
  ```

#### ProductShop

* id

  ```ts
  string
  ```

* name

  ```ts
  string
  ```

Examples

#### Examples

* ####

  ##### tsx

  ```tsx
  import {useProductSearch} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    const {products, loading} = useProductSearch({
      query: 'shirt',
      first: 10,
      filters: {
        color: ['RED'],
      },
    })

    console.log({products, loading})
  }
  ```

***

---

<a id="useproductvariants-useproductvariants"></a>

## useProductVariants

## useProductVariants

The `useProductVariants` hook fetches product variants for a specific product.

### use​Product​Variants(**[params](#useproductvariantsgeneratedtype-propertydetail-params)**​)

#### Parameters

* **params**

  **UseProductVariantsParams**

  **required**

#### Returns

* **UseProductVariantsReturns**

#### UseProductVariantsParams

* fetchPolicy

  ```ts
  DataHookFetchPolicy
  ```

* first

  ```ts
  number
  ```

* id

  The product ID to fetch variants for.

  ```ts
  string
  ```

* skip

  ```ts
  boolean
  ```

#### DataHookFetchPolicy

```ts
'cache-first' | 'network-only'
```

#### UseProductVariantsReturns

* error

  ```ts
  Error | null
  ```

* fetchMore

  ```ts
  () => Promise<void>
  ```

* hasNextPage

  ```ts
  boolean
  ```

* loading

  ```ts
  boolean
  ```

* refetch

  ```ts
  () => Promise<void>
  ```

* variants

  The product variants returned from the query.

  ```ts
  ProductVariant[] | null
  ```

#### ProductVariant

* compareAtPrice

  ```ts
  Money | null
  ```

* id

  ```ts
  string
  ```

* image

  ```ts
  ProductImage | null
  ```

* isFavorited

  ```ts
  boolean
  ```

* price

  ```ts
  Money
  ```

* title

  ```ts
  string
  ```

#### Money

* amount

  ```ts
  Decimal
  ```

* currencyCode

  ```ts
  CurrencyCode
  ```

#### Decimal

```ts
string
```

#### CurrencyCode

```ts
'AED' | 'AFN' | 'ALL' | 'AMD' | 'ANG' | 'AOA' | 'ARS' | 'AUD' | 'AWG' | 'AZN' | 'BAM' | 'BBD' | 'BDT' | 'BGN' | 'BHD' | 'BIF' | 'BMD' | 'BND' | 'BOB' | 'BRL' | 'BSD' | 'BTN' | 'BWP' | 'BYN' | 'BYR' | 'BZD' | 'CAD' | 'CDF' | 'CHF' | 'CLP' | 'CNY' | 'COP' | 'CRC' | 'CVE' | 'CZK' | 'DJF' | 'DKK' | 'DOP' | 'DZD' | 'EGP' | 'ERN' | 'ETB' | 'EUR' | 'FJD' | 'FKP' | 'GBP' | 'GEL' | 'GHS' | 'GIP' | 'GMD' | 'GNF' | 'GTQ' | 'GYD' | 'HKD' | 'HNL' | 'HRK' | 'HTG' | 'HUF' | 'IDR' | 'ILS' | 'INR' | 'IQD' | 'IRR' | 'ISK' | 'JEP' | 'JMD' | 'JOD' | 'JPY' | 'KES' | 'KGS' | 'KHR' | 'KID' | 'KMF' | 'KRW' | 'KWD' | 'KYD' | 'KZT' | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'LSL' | 'LTL' | 'LVL' | 'LYD' | 'MAD' | 'MDL' | 'MGA' | 'MKD' | 'MMK' | 'MNT' | 'MOP' | 'MRU' | 'MUR' | 'MVR' | 'MWK' | 'MXN' | 'MYR' | 'MZN' | 'NAD' | 'NGN' | 'NIO' | 'NOK' | 'NPR' | 'NZD' | 'OMR' | 'PAB' | 'PEN' | 'PGK' | 'PHP' | 'PKR' | 'PLN' | 'PYG' | 'QAR' | 'RON' | 'RSD' | 'RUB' | 'RWF' | 'SAR' | 'SBD' | 'SCR' | 'SDG' | 'SEK' | 'SGD' | 'SHP' | 'SLL' | 'SOS' | 'SRD' | 'SSP' | 'STD' | 'STN' | 'SYP' | 'SZL' | 'THB' | 'TJS' | 'TMT' | 'TND' | 'TOP' | 'TRY' | 'TTD' | 'TWD' | 'TZS' | 'UAH' | 'UGX' | 'USD' | 'UYU' | 'UZS' | 'VED' | 'VEF' | 'VES' | 'VND' | 'VUV' | 'WST' | 'XAF' | 'XCD' | 'XOF' | 'XPF' | 'XXX' | 'YER' | 'ZAR' | 'ZMW'
```

#### ProductImage

* altText

  ```ts
  string | null
  ```

* height

  ```ts
  number | null
  ```

* id

  ```ts
  string | null
  ```

* sensitive

  ```ts
  boolean | null
  ```

* thumbhash

  ```ts
  string | null
  ```

* url

  ```ts
  string
  ```

* width

  ```ts
  number | null
  ```

Examples

#### Examples

* ####

  ##### tsx

  ```tsx
  import {useProductVariants, Button} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    const {variants, loading, error, hasNextPage, loadMore} = useProductVariants({
      id: 'gid://shopify/Product/123',
      first: 10,
    })

    console.log({variants, loading, error})

    return (
      <>
        {/* Render variants here */}
        {hasNextPage && (
          <Button onClick={loadMore} disabled={loading}>
            Load More Variants
          </Button>
        )}
      </>
    )
  }
  ```

***

---

<a id="useproducts-useproducts"></a>

## useProducts

## useProducts

The `useProducts` hook efficiently fetches multiple products in a single batched request. Takes an array of product IDs and returns complete product data. Ideal for product grids, carousels, or any UI displaying multiple products. All products share a single query cache entry, making this more efficient than multiple `useProduct()` calls. The entire query refetches if any ID in the array changes.

### use​Products(**[params](#useproductsgeneratedtype-propertydetail-params)**​)

#### Parameters

* **params**

  **UseProductsParams**

  **required**

#### Returns

* **UseProductsReturns**

#### UseProductsParams

* fetchPolicy

  ```ts
  DataHookFetchPolicy
  ```

* ids

  The product IDs to fetch.

  ```ts
  string[]
  ```

* skip

  ```ts
  boolean
  ```

#### DataHookFetchPolicy

```ts
'cache-first' | 'network-only'
```

#### UseProductsReturns

* error

  ```ts
  Error | null
  ```

* loading

  ```ts
  boolean
  ```

* products

  The products returned from the query.

  ```ts
  Product[] | null
  ```

* refetch

  ```ts
  () => Promise<void>
  ```

#### Product

* compareAtPrice

  ```ts
  Money | null
  ```

* defaultVariantId

  ```ts
  string
  ```

* featuredImage

  ```ts
  ProductImage | null
  ```

* id

  ```ts
  string
  ```

* isFavorited

  ```ts
  boolean
  ```

* price

  ```ts
  Money
  ```

* referral

  ```ts
  boolean
  ```

* reviewAnalytics

  ```ts
  { averageRating?: number; reviewCount?: number; }
  ```

* selectedVariant

  ```ts
  ProductVariant
  ```

* shop

  ```ts
  ProductShop
  ```

* title

  ```ts
  string
  ```

* variants

  ```ts
  ProductVariant[]
  ```

#### Money

* amount

  ```ts
  Decimal
  ```

* currencyCode

  ```ts
  CurrencyCode
  ```

#### Decimal

```ts
string
```

#### CurrencyCode

```ts
'AED' | 'AFN' | 'ALL' | 'AMD' | 'ANG' | 'AOA' | 'ARS' | 'AUD' | 'AWG' | 'AZN' | 'BAM' | 'BBD' | 'BDT' | 'BGN' | 'BHD' | 'BIF' | 'BMD' | 'BND' | 'BOB' | 'BRL' | 'BSD' | 'BTN' | 'BWP' | 'BYN' | 'BYR' | 'BZD' | 'CAD' | 'CDF' | 'CHF' | 'CLP' | 'CNY' | 'COP' | 'CRC' | 'CVE' | 'CZK' | 'DJF' | 'DKK' | 'DOP' | 'DZD' | 'EGP' | 'ERN' | 'ETB' | 'EUR' | 'FJD' | 'FKP' | 'GBP' | 'GEL' | 'GHS' | 'GIP' | 'GMD' | 'GNF' | 'GTQ' | 'GYD' | 'HKD' | 'HNL' | 'HRK' | 'HTG' | 'HUF' | 'IDR' | 'ILS' | 'INR' | 'IQD' | 'IRR' | 'ISK' | 'JEP' | 'JMD' | 'JOD' | 'JPY' | 'KES' | 'KGS' | 'KHR' | 'KID' | 'KMF' | 'KRW' | 'KWD' | 'KYD' | 'KZT' | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'LSL' | 'LTL' | 'LVL' | 'LYD' | 'MAD' | 'MDL' | 'MGA' | 'MKD' | 'MMK' | 'MNT' | 'MOP' | 'MRU' | 'MUR' | 'MVR' | 'MWK' | 'MXN' | 'MYR' | 'MZN' | 'NAD' | 'NGN' | 'NIO' | 'NOK' | 'NPR' | 'NZD' | 'OMR' | 'PAB' | 'PEN' | 'PGK' | 'PHP' | 'PKR' | 'PLN' | 'PYG' | 'QAR' | 'RON' | 'RSD' | 'RUB' | 'RWF' | 'SAR' | 'SBD' | 'SCR' | 'SDG' | 'SEK' | 'SGD' | 'SHP' | 'SLL' | 'SOS' | 'SRD' | 'SSP' | 'STD' | 'STN' | 'SYP' | 'SZL' | 'THB' | 'TJS' | 'TMT' | 'TND' | 'TOP' | 'TRY' | 'TTD' | 'TWD' | 'TZS' | 'UAH' | 'UGX' | 'USD' | 'UYU' | 'UZS' | 'VED' | 'VEF' | 'VES' | 'VND' | 'VUV' | 'WST' | 'XAF' | 'XCD' | 'XOF' | 'XPF' | 'XXX' | 'YER' | 'ZAR' | 'ZMW'
```

#### ProductImage

* altText

  ```ts
  string | null
  ```

* height

  ```ts
  number | null
  ```

* id

  ```ts
  string | null
  ```

* sensitive

  ```ts
  boolean | null
  ```

* thumbhash

  ```ts
  string | null
  ```

* url

  ```ts
  string
  ```

* width

  ```ts
  number | null
  ```

#### ProductVariant

* compareAtPrice

  ```ts
  Money | null
  ```

* id

  ```ts
  string
  ```

* image

  ```ts
  ProductImage | null
  ```

* isFavorited

  ```ts
  boolean
  ```

* price

  ```ts
  Money
  ```

* title

  ```ts
  string
  ```

#### ProductShop

* id

  ```ts
  string
  ```

* name

  ```ts
  string
  ```

Examples

#### Examples

* ####

  ##### tsx

  ```tsx
  import {useProducts} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    const {products, loading, error} = useProducts({
      ids: [
        'gid://shopify/Product/123',
        'gid://shopify/Product/456',
        'gid://shopify/Product/789',
      ],
    })

    console.log({products, loading, error})
  }
  ```

***

---

<a id="userecommendedproducts-userecommendedproducts"></a>

## useRecommendedProducts

## useRecommendedProducts

The `useRecommendedProducts` hook fetches personalized product recommendations based on the user's shopping behavior, purchase history, and preferences in the Shop app. Recommendations may be empty for new users without sufficient activity. You can use this for personalized discovery sections, "You might like" carousels, or filling empty states with relevant products. Unlike `useRecentProducts` which shows browsing history, this hook provides algorithmic suggestions.

### use​Recommended​Products(**[params](#userecommendedproductsgeneratedtype-propertydetail-params)**​)

#### Parameters

* **params**

  **UseRecommendedProductsParams**

#### Returns

* **UseRecommendedProductsReturns**

#### UseRecommendedProductsParams

* fetchPolicy

  ```ts
  DataHookFetchPolicy
  ```

* first

  ```ts
  number
  ```

* skip

  ```ts
  boolean
  ```

#### DataHookFetchPolicy

```ts
'cache-first' | 'network-only'
```

#### UseRecommendedProductsReturns

* error

  ```ts
  Error | null
  ```

* fetchMore

  ```ts
  () => Promise<void>
  ```

* hasNextPage

  ```ts
  boolean
  ```

* loading

  ```ts
  boolean
  ```

* products

  ```ts
  Product[] | null
  ```

* refetch

  ```ts
  () => Promise<void>
  ```

#### Product

* compareAtPrice

  ```ts
  Money | null
  ```

* defaultVariantId

  ```ts
  string
  ```

* featuredImage

  ```ts
  ProductImage | null
  ```

* id

  ```ts
  string
  ```

* isFavorited

  ```ts
  boolean
  ```

* price

  ```ts
  Money
  ```

* referral

  ```ts
  boolean
  ```

* reviewAnalytics

  ```ts
  { averageRating?: number; reviewCount?: number; }
  ```

* selectedVariant

  ```ts
  ProductVariant
  ```

* shop

  ```ts
  ProductShop
  ```

* title

  ```ts
  string
  ```

* variants

  ```ts
  ProductVariant[]
  ```

#### Money

* amount

  ```ts
  Decimal
  ```

* currencyCode

  ```ts
  CurrencyCode
  ```

#### Decimal

```ts
string
```

#### CurrencyCode

```ts
'AED' | 'AFN' | 'ALL' | 'AMD' | 'ANG' | 'AOA' | 'ARS' | 'AUD' | 'AWG' | 'AZN' | 'BAM' | 'BBD' | 'BDT' | 'BGN' | 'BHD' | 'BIF' | 'BMD' | 'BND' | 'BOB' | 'BRL' | 'BSD' | 'BTN' | 'BWP' | 'BYN' | 'BYR' | 'BZD' | 'CAD' | 'CDF' | 'CHF' | 'CLP' | 'CNY' | 'COP' | 'CRC' | 'CVE' | 'CZK' | 'DJF' | 'DKK' | 'DOP' | 'DZD' | 'EGP' | 'ERN' | 'ETB' | 'EUR' | 'FJD' | 'FKP' | 'GBP' | 'GEL' | 'GHS' | 'GIP' | 'GMD' | 'GNF' | 'GTQ' | 'GYD' | 'HKD' | 'HNL' | 'HRK' | 'HTG' | 'HUF' | 'IDR' | 'ILS' | 'INR' | 'IQD' | 'IRR' | 'ISK' | 'JEP' | 'JMD' | 'JOD' | 'JPY' | 'KES' | 'KGS' | 'KHR' | 'KID' | 'KMF' | 'KRW' | 'KWD' | 'KYD' | 'KZT' | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'LSL' | 'LTL' | 'LVL' | 'LYD' | 'MAD' | 'MDL' | 'MGA' | 'MKD' | 'MMK' | 'MNT' | 'MOP' | 'MRU' | 'MUR' | 'MVR' | 'MWK' | 'MXN' | 'MYR' | 'MZN' | 'NAD' | 'NGN' | 'NIO' | 'NOK' | 'NPR' | 'NZD' | 'OMR' | 'PAB' | 'PEN' | 'PGK' | 'PHP' | 'PKR' | 'PLN' | 'PYG' | 'QAR' | 'RON' | 'RSD' | 'RUB' | 'RWF' | 'SAR' | 'SBD' | 'SCR' | 'SDG' | 'SEK' | 'SGD' | 'SHP' | 'SLL' | 'SOS' | 'SRD' | 'SSP' | 'STD' | 'STN' | 'SYP' | 'SZL' | 'THB' | 'TJS' | 'TMT' | 'TND' | 'TOP' | 'TRY' | 'TTD' | 'TWD' | 'TZS' | 'UAH' | 'UGX' | 'USD' | 'UYU' | 'UZS' | 'VED' | 'VEF' | 'VES' | 'VND' | 'VUV' | 'WST' | 'XAF' | 'XCD' | 'XOF' | 'XPF' | 'XXX' | 'YER' | 'ZAR' | 'ZMW'
```

#### ProductImage

* altText

  ```ts
  string | null
  ```

* height

  ```ts
  number | null
  ```

* id

  ```ts
  string | null
  ```

* sensitive

  ```ts
  boolean | null
  ```

* thumbhash

  ```ts
  string | null
  ```

* url

  ```ts
  string
  ```

* width

  ```ts
  number | null
  ```

#### ProductVariant

* compareAtPrice

  ```ts
  Money | null
  ```

* id

  ```ts
  string
  ```

* image

  ```ts
  ProductImage | null
  ```

* isFavorited

  ```ts
  boolean
  ```

* price

  ```ts
  Money
  ```

* title

  ```ts
  string
  ```

#### ProductShop

* id

  ```ts
  string
  ```

* name

  ```ts
  string
  ```

Examples

#### Examples

* ####

  ##### tsx

  ```tsx
  import {useRecommendedProducts} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    const {products, loading, error} = useRecommendedProducts()

    console.log({products, loading, error})
  }
  ```

***

---

<a id="userecommendedshops-userecommendedshops"></a>

## useRecommendedShops

## useRecommendedShops

The `useRecommendedShops` hook fetches personalized shop recommendations based on the user's purchase patterns, followed shops, and product interests in the Shop app. You can use this for shop discovery sections, "Brands you might like" features, or diversifying merchant exposure. Unlike `useRecentShops` which shows interaction history, this hook provides algorithmic suggestions for new merchant discovery.

### use​Recommended​Shops(**[params](#userecommendedshopsgeneratedtype-propertydetail-params)**​)

#### Parameters

* **params**

  **UseRecommendedShopsParams**

#### Returns

* **UseRecommendedShopsReturns**

#### UseRecommendedShopsParams

* fetchPolicy

  ```ts
  DataHookFetchPolicy
  ```

* first

  ```ts
  number
  ```

* skip

  ```ts
  boolean
  ```

#### DataHookFetchPolicy

```ts
'cache-first' | 'network-only'
```

#### UseRecommendedShopsReturns

* error

  ```ts
  Error | null
  ```

* fetchMore

  ```ts
  () => Promise<void>
  ```

* hasNextPage

  ```ts
  boolean
  ```

* loading

  ```ts
  boolean
  ```

* refetch

  ```ts
  () => Promise<void>
  ```

* shops

  ```ts
  Shop[] | null
  ```

#### Shop

* id

  ```ts
  string
  ```

* isFollowing

  ```ts
  boolean | null
  ```

* logoImage

  ```ts
  ProductImage | null
  ```

* name

  ```ts
  string
  ```

* primaryDomain

  ```ts
  { url: string; }
  ```

* reviewAnalytics

  ```ts
  { averageRating?: number; reviewCount: number; }
  ```

* shareUrl

  ```ts
  string | null
  ```

* visualTheme

  ```ts
  VisualTheme | null
  ```

#### ProductImage

* altText

  ```ts
  string | null
  ```

* height

  ```ts
  number | null
  ```

* id

  ```ts
  string | null
  ```

* sensitive

  ```ts
  boolean | null
  ```

* thumbhash

  ```ts
  string | null
  ```

* url

  ```ts
  string
  ```

* width

  ```ts
  number | null
  ```

#### VisualTheme

* brandSettings

  ```ts
  BrandSettings | null
  ```

* description

  ```ts
  string | null
  ```

* featuredImages

  ```ts
  ImageType[]
  ```

* id

  ```ts
  string
  ```

* logoImage

  ```ts
  ImageType | null
  ```

#### BrandSettings

* colors

  ```ts
  ColorTheme | null
  ```

* headerTheme

  ```ts
  HeaderTheme | null
  ```

* id

  ```ts
  string
  ```

* logos

  ```ts
  LogoTheme | null
  ```

#### ColorTheme

* coverDominant

  ```ts
  string | null
  ```

* id

  ```ts
  string
  ```

* logoAverage

  ```ts
  string | null
  ```

* logoDominant

  ```ts
  string | null
  ```

* primary

  ```ts
  string | null
  ```

* secondary

  ```ts
  string | null
  ```

* secondaryText

  ```ts
  string | null
  ```

* statusBarStyle

  ```ts
  string | null
  ```

#### HeaderTheme

* coverImage

  ```ts
  ImageType | null
  ```

* endingScrimColor

  ```ts
  string | null
  ```

* id

  ```ts
  string
  ```

* startingScrimColor

  ```ts
  string | null
  ```

* thumbnailImage

  ```ts
  ImageType | null
  ```

* videoUrl

  ```ts
  string | null
  ```

* wordmark

  ```ts
  ImageType | null
  ```

#### ImageType

* altText

  ```ts
  string | null
  ```

* height

  ```ts
  number | null
  ```

* sensitive

  ```ts
  boolean
  ```

* thumbhash

  ```ts
  string | null
  ```

* url

  ```ts
  string
  ```

* width

  ```ts
  number | null
  ```

#### LogoTheme

* id

  ```ts
  string
  ```

* logoImage

  ```ts
  ImageType | null
  ```

Examples

#### Examples

* ####

  ##### tsx

  ```tsx
  import {useRecommendedShops} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    const {shops, loading, error} = useRecommendedShops()

    console.log({shops, loading, error})
  }
  ```

***

---

<a id="useshop-useshop"></a>

## useShop

## useShop

The `useShop` hook enables fetching a shop by its ID.

### use​Shop(**[params](#useshopgeneratedtype-propertydetail-params)**​)

#### Parameters

* **params**

  **UseShopParams**

  **required**

#### Returns

* **UseShopReturns**

#### UseShopParams

* fetchPolicy

  ```ts
  DataHookFetchPolicy
  ```

* id

  The shop ID to fetch.

  ```ts
  string
  ```

* skip

  ```ts
  boolean
  ```

#### DataHookFetchPolicy

```ts
'cache-first' | 'network-only'
```

#### UseShopReturns

* error

  ```ts
  Error | null
  ```

* loading

  ```ts
  boolean
  ```

* refetch

  ```ts
  () => Promise<void>
  ```

* shop

  The shop returned from the query.

  ```ts
  Shop | null
  ```

#### Shop

* id

  ```ts
  string
  ```

* isFollowing

  ```ts
  boolean | null
  ```

* logoImage

  ```ts
  ProductImage | null
  ```

* name

  ```ts
  string
  ```

* primaryDomain

  ```ts
  { url: string; }
  ```

* reviewAnalytics

  ```ts
  { averageRating?: number; reviewCount: number; }
  ```

* shareUrl

  ```ts
  string | null
  ```

* visualTheme

  ```ts
  VisualTheme | null
  ```

#### ProductImage

* altText

  ```ts
  string | null
  ```

* height

  ```ts
  number | null
  ```

* id

  ```ts
  string | null
  ```

* sensitive

  ```ts
  boolean | null
  ```

* thumbhash

  ```ts
  string | null
  ```

* url

  ```ts
  string
  ```

* width

  ```ts
  number | null
  ```

#### VisualTheme

* brandSettings

  ```ts
  BrandSettings | null
  ```

* description

  ```ts
  string | null
  ```

* featuredImages

  ```ts
  ImageType[]
  ```

* id

  ```ts
  string
  ```

* logoImage

  ```ts
  ImageType | null
  ```

#### BrandSettings

* colors

  ```ts
  ColorTheme | null
  ```

* headerTheme

  ```ts
  HeaderTheme | null
  ```

* id

  ```ts
  string
  ```

* logos

  ```ts
  LogoTheme | null
  ```

#### ColorTheme

* coverDominant

  ```ts
  string | null
  ```

* id

  ```ts
  string
  ```

* logoAverage

  ```ts
  string | null
  ```

* logoDominant

  ```ts
  string | null
  ```

* primary

  ```ts
  string | null
  ```

* secondary

  ```ts
  string | null
  ```

* secondaryText

  ```ts
  string | null
  ```

* statusBarStyle

  ```ts
  string | null
  ```

#### HeaderTheme

* coverImage

  ```ts
  ImageType | null
  ```

* endingScrimColor

  ```ts
  string | null
  ```

* id

  ```ts
  string
  ```

* startingScrimColor

  ```ts
  string | null
  ```

* thumbnailImage

  ```ts
  ImageType | null
  ```

* videoUrl

  ```ts
  string | null
  ```

* wordmark

  ```ts
  ImageType | null
  ```

#### ImageType

* altText

  ```ts
  string | null
  ```

* height

  ```ts
  number | null
  ```

* sensitive

  ```ts
  boolean
  ```

* thumbhash

  ```ts
  string | null
  ```

* url

  ```ts
  string
  ```

* width

  ```ts
  number | null
  ```

#### LogoTheme

* id

  ```ts
  string
  ```

* logoImage

  ```ts
  ImageType | null
  ```

Examples

#### Examples

* ####

  ##### tsx

  ```tsx
  import {useShop} from '@shopify/shop-minis-react'

  export default function MyComponent() {
    const {shop, loading, error} = useShop({id: 'gid://shopify/Shop/1234567890'})

    console.log({shop, loading, error})
  }
  ```

***

---

<a id="minis-admin-api-minis-admin-api"></a>

## Minis Admin API

## Minis Admin API

The Shop Minis Admin API is a GraphQL API that allows you to manage your Mini from a backend application. It includes mutations for enabling/disabling your Mini, verifying user requests, and more.

***

### Authentication

Shop Minis Admin API requests are authenticated using an API key. Your API key will be generated when you first run the [`setup`](https://shopify.dev/docs/api/shop-minis/commands/setup) command. You can find it in your project's `.env` file.

### Perform a GraphQL request

```sh
curl -X POST \
  https://server.shop.app/minis/admin-api/alpha/graphql.json \
  -H 'Content-Type: application/graphql' \
  -H 'Authorization: Bearer <shop-minis-admin-api-key>' \
  -d '{your_query}'
```

***

### Rate limiting

The Shop Minis Admin API is rate limited. Requests that are subject to throttling will have a response status code of 429 and include a top-level error with the code `TOO_MANY_REQUESTS`.

### Rate limiting response

```json
{
  "data": null,
  "errors": [
    {
      "message": "Slow down there partner.",
      "extensions": {
        "code": "TOO_MANY_REQUESTS"
      }
    }
  ]
}
```

***

### Mutations

[mini​Toggle](https://shopify.dev/docs/api/shop-minis/minis-admin-api/mutations/minitoggle)

[Enables or disables the Mini by partner.](https://shopify.dev/docs/api/shop-minis/minis-admin-api/mutations/minitoggle)

[user​Token​Verify](https://shopify.dev/docs/api/shop-minis/minis-admin-api/mutations/usertokenverify)

[Verifies a user token.](https://shopify.dev/docs/api/shop-minis/minis-admin-api/mutations/usertokenverify)

***

---

<a id="minitoggle-minitoggle"></a>

## miniToggle

## miniToggle

Enables or disables the Mini by partner.

##### Input

Input arguments for the mutation.

* **enable**

  **boolean**

  **required**

  The flag to enable or disable Mini.

##### Return type

This mutation returns a `MiniTogglePayload` object with the following fields:

* **enabled**

  **boolean | null**

  The flag whether the Mini is enabled or disabled.

Examples

#### Examples

* ####

  ##### graphql

  ```graphql
  mutation ToggleMini($enable: Boolean!) {
    miniToggle(enable: $enable) {
      enabled
    }
  }
  ```

***

---

<a id="usertokenverify-usertokenverify"></a>

## userTokenVerify

## userTokenVerify

Verifies a user token. See [Verifying requests](https://shopify.dev/docs/api/shop-minis/network-requests#verifying-requests) for more details.

##### Input

Input arguments for the mutation.

* **token**

  **string**

  **required**

  The temporary user token to verify.

##### Return type

This mutation returns a `UserTokenVerifyPayload` object with the following fields:

* **userErrors**

  **UserTokenVerifyUserError\[]**

  **required**

  List of errors that occured while executing the mutation.

* **publicId**

  **string | null**

  The public ID of the user.

* **tokenExpiresAt**

  **ISO8601DateTime | null**

  The expiration date of the token.

* **userState**

  **'VERIFIED' | 'GUEST' | null**

  The state of the user.

* **userIdentifier**

  **string | null**

  **deprecated**

  A permanent identifier for the user.

  **Deprecated:**

  Use publicId instead.

#### ISO8601DateTime

```ts
string
```

#### UserTokenVerifyUserError

A user or client error that could occur during the execution of the \`userTokenVerify\` mutation.

* code

  Error code associated with the error.

  ```ts
  | 'TOKEN_INVALID'
      | 'TOKEN_EXPIRED'
      | 'INVALID_MINI'
      | 'USER_NOT_FOUND'
  ```

* field

  Which input value this error came from.

  ```ts
  string[]
  ```

* message

  A description of the error.

  ```ts
  string
  ```

Examples

#### Examples

* ####

  ##### graphql

  ```graphql
  mutation VerifyUserToken($token: String!) {
    userTokenVerify(token: $token) {
      tokenExpiresAt
      publicId

      userErrors {
        code
        field
        message
      }
    }
  }
  ```

***

---

<a id="publishing-publishing"></a>

## Publishing

## Publishing

Publishing your Shop Mini to the Shop app includes a manual review process. You can use the [`submit`](https://shopify.dev/docs/api/shop-minis/commands/submit) command to create a submission, which will upload your source code and initiate a review. Once your submission has been approved, your Shop Mini will be made available to users in the Shop app.

***

### Requirements

* You have a [Shopify Partners account](https://www.shopify.com/partners).
* You have set up your Mini using the [`setup`](https://shopify.dev/docs/api/shop-minis/commands/setup) command.

[Command - Learn more about the setup command](https://shopify.dev/docs/api/shop-minis/commands/setup)

***

### Submitting your Mini

Use the [`submit`](https://shopify.dev/docs/api/shop-minis/commands/submit) command to submit your code for review.

You'll need to enter a description to tell us what your Shop Mini does and any changes since your last submission. Please provide a video showing an end-to-end flow of your Shop Mini. This will help provide our team with more clarity during the review process.

Your source code will be uploaded for us to review. Once we've reviewed your submission, we'll either approve it or ask you to make some changes.

If it's approved, your Mini will be made available to users in the Shop app when the Shop Team decides to release it.

If it's rejected, we'll provide detailed actionable feedback to assist with your next submission. If you have questions or concerns about the outcome of a review, please visit the [Shop Minis forum](https://community.shopify.dev/c/shop-minis/33) in the Shopify Community.

**Submission requirements:**

Submissions have a maximum size of 5MB and must include a `src/icon.png` file, which should be 1024x1024px and less than 512KB.

### Submit your Mini

```sh
npx shop-minis submit [options]
```

***

### Keeping your Mini up to date

Your Mini must use a compatible SDK version to work with the Shop app. You should upgrade your Mini to the latest SDK version:

* **Before making a new submission** - Submissions with outdated SDK versions will be rejected
* **When requested by Shop Minis team** - If we ask you to upgrade due to compatibility issues

Use the [`upgrade`](https://shopify.dev/docs/api/shop-minis/commands/upgrade) command to update your Mini to the latest SDK version:

[Command - Learn more about the upgrade command](https://shopify.dev/docs/api/shop-minis/commands/upgrade)

### Upgrade your Mini

```sh
npx shop-minis upgrade [options]
```

***

### Checking the status of a submission

Use the [`check-submission`](https://shopify.dev/docs/api/shop-minis/commands/check-submission) command to see details about your latest submission.

### Check the status of a submission

```sh
npx shop-minis check-submission [options]
```

***

### Cancelling a submission

If you realize there is an issue with the code you have submitted or you change your mind, you can cancel a submission with the [`cancel-submission`](https://shopify.dev/docs/api/shop-minis/commands/cancel-submission) command.

This will only work for pending submissions—if we have already reviewed the submission, you'll need to make a new one. If we have approved a submission that you later realize includes a bug, please contact us through the [Shop Minis forum](https://community.shopify.dev/c/shop-minis/33).

### Cancel a submission

```sh
npx shop-minis cancel-submission [options]
```

***

### Updating a submission

It's not possible to update a pending submission. If you'd like to make changes, you'll need to cancel the pending submission and make a new one.

There can only be one pending submission at a time, you cannot line up multiple submissions. You should either cancel and combine the changes into a single submission or wait for the pending submission to be reviewed first.

***

---

<a id="analytics-analytics"></a>

## Analytics

## Analytics

Access aggregated data about your Mini.

***

### Overview

The Shop Minis CLI provides access to analytics reports that help you understand how your Mini is performing. These reports provide valuable insights into user engagement, conversions, and other key metrics.

The CLI provides several commands to work with analytics reports:

* Use the [`reports list`](https://shopify.dev/docs/api/shop-minis/commands/reports-list) command to view all available report types
* Use the [`reports dates`](https://shopify.dev/docs/api/shop-minis/commands/reports-dates) command to see available dates for a specific report
* Use the [`reports get`](https://shopify.dev/docs/api/shop-minis/commands/reports-get) command to download report data as CSV

[Command - List all available reports](https://shopify.dev/docs/api/shop-minis/commands/reports-list)

[Command - View available dates for a report](https://shopify.dev/docs/api/shop-minis/commands/reports-dates)

[Command - Get report data as CSV](https://shopify.dev/docs/api/shop-minis/commands/reports-get)

***

### Report types

The following report types are available for analytics:

#### CONTENT\_​IMPRESSIONS

Shows how often content associated with your Mini is viewed by users. These are generated by the `ContentWrapper` component.

**Fields:**

* `day`: The date for which data was collected (in UTC)
* `num_users`: Number of distinct users who viewed the content
* `num_views`: Total number of content views
* `impression_type`: Type of impression. This represents where the content was seen e.g. `IN_MINI`
* `content_public_id`: Identifier for the content
* `page_value`: Page where the content was viewed

#### PRODUCT\_​IMPRESSIONS

Shows which products are being viewed in your Mini, how often and by how many users. These are generated by the `ProductCard` and `ProductLink` components inside of Mini.

**Fields:**

* `day`: The date for which data was collected (in UTC)
* `product_id`: Identifier for the product
* `shop_id`: Identifier for the shop
* `impression_type`: Type of impression. This represents where the product was seen e.g. `IN_MINI`
* `num_users`: Number of unique users who viewed the product
* `num_impressions`: Total number of product impressions

#### SALES

Shows sales data for your Mini, including order count and revenue.

**Fields:**

* `day`: The date for which data was collected (in UTC)
* `shop_id`: Identifier for the shop
* `product_id`: Identifier for the product
* `num_orders`: Number of orders
* `total_gmv_usd`: Total gross merchandise value in USD

#### USAGE\_​STATS

Shows how users interact with your Mini, over the course of a day.

**Fields:**

* `day`: The date for which data was collected (in UTC)
* `num_sessions`: Number of user sessions
* `num_users`: Number of unique users
* `num_mini_opens`: Number of times the Mini was opened

**Note:**

All reports are generated daily and the data is available within 24 hours of the date the data is from. Additional report types may be added over time.

***

---

<a id="troubleshooting-troubleshooting"></a>

## Troubleshooting

## Troubleshooting

Common issues and solutions for Mini development.

***

### Connection issues

If you're having connection issues or your Mini isn't loading:

* For WiFi: Verify devices are on the same network segment
* Check firewall settings aren't blocking port 5173
* Try using your computer's IP directly: `npx shop-minis dev --host 192.168.1.100`

***

### Android Port Forwarding

In some cases your Android device might not be able to connect to the Mini's dev server. Port forwarding creates a tunnel between your Android device and development machine, allowing the Shop app to access your Mini.

***

### Setting Up

```bash
## Forward the Vite dev server port
adb reverse tcp:5173 tcp:5173
```

This maps port 5173 on the Android device to port 5173 on your development machine.

***

---

<a id="shop-minis-shop-minis-117"></a>

## Shop Minis — shop-minis

## Shop Minis

Build fast. Launch faster. Shop Minis enable you to create custom shopping experiences on mobile. With our React SDK, you can build immersive features that reach millions of shoppers instantly in the [Shop app](https://shop.app).

### Introduction

Shop Minis are immersive, full-screen buyer experiences within the Shop app. They are designed to be:

* Fast and responsive
* Easy to develop and maintain
* Secure and reliable

***

### Requirements

* [Node.js](https://nodejs.org/en/download/) version 20 or higher
* [XCode](https://developer.apple.com/xcode/) or [Android Studio](https://developer.android.com/studio)

***

### Setup

Create a new Shop Minis project with your preferred package manager:

### Create a new project

```sh
npm init @shopify/shop-mini@latest
```

***

### Development

Use the [`dev`](https://shopify.dev/docs/api/shop-minis/commands/dev) command to start the development server and run your Shop Mini locally. You can preview your Mini in an Android emulator or iOS simulator, or on a physical device.

* Press `a` to open on an Android device or emulator.
* Press `i` to open on an iOS simulator.
* Press `d` to test deeplink navigation with a custom path. [Learn more →](https://shopify.dev/docs/api/shop-minis/deeplinks)
* Press `q` to scan a QR code to open on a physical iOS device.

[Command - Learn more about the dev command](https://shopify.dev/docs/api/shop-minis/commands/dev)

[Guide - Testing deeplinks](https://shopify.dev/docs/api/shop-minis/deeplinks)

### Start the development server

```sh
npx shop-minis dev
```

***

### Permissions

Developers need explicit app management permissions within their Partner organization to create, manage, or submit Shop Minis.

If you're an organization owner or admin:

1. Go to your Partner Dashboard.
2. Navigate to **Settings** → **Team**.
3. Find the team member who needs access.
4. Click on their profile to edit permissions.
5. Under **Sensitive permissions**, enable **Manage apps**.
6. Save changes.

If you're a team member:

Ask your organization owner or admin to grant you the **Manage apps** permission following the steps above.

***

### Coding Assistant Support

Shop Minis work seamlessly with coding assistants like Claude, Cursor, and Windsurf. Every project includes context files that teach these tools about Shop Mini patterns, helping them provide accurate, SDK-first suggestions tailored to mobile commerce development.

Get better code suggestions from day one - no configuration required.

[Guide - Learn how coding assistants help you build](https://shopify.dev/docs/api/shop-minis/coding-assistant-support)

***

### Debugging (i​OS)

During development in an iOS simulator, you can use Safari Web Inspector to debug your Shop Mini. See [this documentation](https://developer.apple.com/library/archive/documentation/NetworkingInternetWeb/Conceptual/Web_Inspector_Tutorial/EnableWebInspector/EnableWebInspector.html) on how to enable Web Inspector.

After Web Inspector is enabled, you can inspect your running Shop Mini from the "Develop" menu in Safari.

***

### Debugging (Android)

During development in an Android emulator or device, you can use Chrome DevTools to debug your Shop Mini. See [this documentation](https://developer.chrome.com/docs/devtools/remote-debugging) on how to use Chrome DevTools remote debugging.

[Guide - Troubleshooting guide](https://shopify.dev/docs/api/shop-minis/troubleshooting)

***

### Get Support

Join the [Shop Minis forum](https://community.shopify.dev/c/shop-minis/33) in the Shopify Community to:

* Ask questions and get help from the Shop Minis team
* Share feedback and feature requests
* Connect with other Shop Minis developers
* Find solutions to common issues

Our team actively monitors the forum and is ready to help you succeed in building your Mini!

***

---

<a id="analytics-analytics-118"></a>

## Analytics — analytics

## Analytics

Access aggregated data about your Mini.

***

### Overview

The Shop Minis CLI provides access to analytics reports that help you understand how your Mini is performing. These reports provide valuable insights into user engagement, conversions, and other key metrics.

The CLI provides several commands to work with analytics reports:

* Use the [`reports list`](https://shopify.dev/docs/api/shop-minis/commands/reports-list) command to view all available report types
* Use the [`reports dates`](https://shopify.dev/docs/api/shop-minis/commands/reports-dates) command to see available dates for a specific report
* Use the [`reports get`](https://shopify.dev/docs/api/shop-minis/commands/reports-get) command to download report data as CSV

[Command - List all available reports](https://shopify.dev/docs/api/shop-minis/commands/reports-list)

[Command - View available dates for a report](https://shopify.dev/docs/api/shop-minis/commands/reports-dates)

[Command - Get report data as CSV](https://shopify.dev/docs/api/shop-minis/commands/reports-get)

***

### Report types

The following report types are available for analytics:

#### CONTENT\_​IMPRESSIONS

Shows how often content associated with your Mini is viewed by users. These are generated by the `ContentWrapper` component.

**Fields:**

* `day`: The date for which data was collected (in UTC)
* `num_users`: Number of distinct users who viewed the content
* `num_views`: Total number of content views
* `impression_type`: Type of impression. This represents where the content was seen e.g. `IN_MINI`
* `content_public_id`: Identifier for the content
* `page_value`: Page where the content was viewed

#### PRODUCT\_​IMPRESSIONS

Shows which products are being viewed in your Mini, how often and by how many users. These are generated by the `ProductCard` and `ProductLink` components inside of Mini.

**Fields:**

* `day`: The date for which data was collected (in UTC)
* `product_id`: Identifier for the product
* `shop_id`: Identifier for the shop
* `impression_type`: Type of impression. This represents where the product was seen e.g. `IN_MINI`
* `num_users`: Number of unique users who viewed the product
* `num_impressions`: Total number of product impressions

#### SALES

Shows sales data for your Mini, including order count and revenue.

**Fields:**

* `day`: The date for which data was collected (in UTC)
* `shop_id`: Identifier for the shop
* `product_id`: Identifier for the product
* `num_orders`: Number of orders
* `total_gmv_usd`: Total gross merchandise value in USD

#### USAGE\_​STATS

Shows how users interact with your Mini, over the course of a day.

**Fields:**

* `day`: The date for which data was collected (in UTC)
* `num_sessions`: Number of user sessions
* `num_users`: Number of unique users
* `num_mini_opens`: Number of times the Mini was opened

**Note:**

All reports are generated daily and the data is available within 24 hours of the date the data is from. Additional report types may be added over time.

***

---

<a id="coding-assistant-support-coding-assistant-support-119"></a>

## Coding Assistant Support — coding-assistant-support

## Coding Assistant Support

Learn how Shop Minis provide context to coding assistants for better development experience.

***

### Overview

Shop Mini projects include two context files that coding assistants automatically discover:

* **AGENTS.md** - The main context file containing Shop Mini development patterns, SDK guidelines, and best practices
* **CLAUDE.md** - A reference file for compatibility with specific tools

These files are included in every new project created with `npx shop-minis create` and provide coding assistants with the context they need to understand Shop Mini development.

***

### What It Provides

The context files provide coding assistants with key Shop Mini topics:

* **Development workflow** - Setup commands, device testing, debugging techniques
* **SDK-first component selection** - When to use Shop Minis React components vs custom solutions
* **Mobile-only design requirements** - Touch targets, WebView constraints, performance limits
* **Navigation and storage patterns** - Shop app navigation, SDK storage hooks instead of Web APIs
* **Project structure** - Required files, TypeScript patterns, Tailwind CSS configuration
* **Security and submission** - Trusted domains, publishing requirements, common pitfalls to avoid

***

### Customization

You can customize the AGENTS.md file to include:

* Your Shop Mini's specific features and functionality
* Team coding conventions
* Project-specific patterns
* Custom components and hooks you've built

Simply edit the AGENTS.md file in your project root. Coding assistants will use your additions when generating suggestions.

***

---

<a id="custom-backend-custom-backend-120"></a>

## Custom backend — custom-backend

## Custom backend

You can use a custom backend to handle requests from your Mini. This page describes how to connect to your backend and verify requests.

***

### Verifying requests

You can verify a request originates from a user in the Shop app by attaching a temporary token to the request inside the Mini and exchanging it for a user identifier on your backend.

1. Generate a temporary token using the [`useGenerateUserToken`](https://shopify.dev/docs/api/shop-minis/hooks/user/usegenerateusertoken) hook.
2. Attach the token in the headers of your [`network request`](https://shopify.dev/docs/api/shop-minis/network-requests).
3. Verify the token using the [`userTokenVerify`](https://shopify.dev/docs/api/shop-minis/minis-admin-api/mutations/usertokenverify) mutation in the Shop Minis Admin API.

This is useful for identifying the user making the request and for rate limiting requests to your backend.

**Setup your Mini:**

You must run the [`setup`](https://shopify.dev/docs/api/shop-minis/commands/setup) command and include the `openid` scope in your [`manifest.json`](https://shopify.dev/docs/api/shop-minis/manifest-file) before you can use the [`useGenerateUserToken`](https://shopify.dev/docs/api/shop-minis/hooks/user/usegenerateusertoken) hook.

**Caching lookups:**

Ensure you cache the token exchange lookup to avoid unnecessary requests to the Shop Minis Admin API. You can use the `tokenExpiresAt` field in the response to invalidate the cache when the token expires.

***

### Identifying users

If you need access to the user's `publicId`, include the `openid` scope in your [`manifest.json`](https://shopify.dev/docs/api/shop-minis/manifest-file). `publicId` will allow you to identify users across Minis.

***

### Example

This [`reference implementation`](https://github.com/Shopify/shop-minis/blob/main/supabase/README.md) shows how to securely authenticate Shop Mini users and process their requests using Supabase Edge Functions. This guide can be extrapolated to other backend services.

***

---

<a id="deeplinks-deeplinks-121"></a>

## Deeplinks — deeplinks

## Deeplinks

Learn how to implement and test deeplinks in your Shop Mini. This guide covers deeplink structure, testing during development, and best practices for handling different entry points into your Mini.

***

### Overview

Deeplinks enable users to navigate directly to specific content within your Shop Mini. They provide seamless entry points from external sources like push notifications, marketing campaigns, or other apps directly into specific screens or features of your Mini.

Key benefits:

* **Direct navigation**: Users can jump straight to relevant content
* **Enhanced user experience**: Reduces friction by eliminating navigation steps
* **Cross-app integration**: Allow other apps and services to link directly to your Mini's content

***

### Testing Deeplinks During Development

During development, you can test how your Mini handles different deeplink paths to ensure proper navigation and parameter handling. The Shop Minis dev server provides two convenient methods for testing deeplinks.

#### Why Test Deeplinks?

Testing deeplinks during development helps you:

* Verify that navigation to specific screens works correctly
* Test entry points with query parameters
* Debug routing logic and path handling
* Ensure a smooth user experience when users arrive from external sources
* Validate that your Mini properly handles various path formats

#### Method 1: Terminal Shortcut (Press `d`)

The quickest way to test deeplinks is directly from the development terminal:

1. Start your development server with `npm start`
2. Press `d` in the terminal
3. Enter your desired path when prompted (e.g., `/recipe/123` or `/search?q=pasta`)
4. Select your target platform (iOS Simulator or Android Device/Emulator)
5. Your Mini will automatically launch with the specified deeplink path

![Terminal showing deeplink option and path prompt](https://shopify.dev/assets/assets/images/api/shop-minis/deeplink-cli-DxPYbADb.png)

#### Method 2: QR Code with Initial Path

For testing on physical iOS devices:

1. Start your development server with `npm start`
2. Press `q` to open the QR code page in your browser
3. Enter your desired path in the **"Initial Path"** field
4. Scan the QR code with your iOS device
5. Your Mini will open directly to the specified path

![QR code page showing the Initial Path input field](https://shopify.dev/assets/assets/images/api/shop-minis/deeplink-qr-BU_YEELP.png)

***

### Path Format

Paths should follow standard URL path conventions. The development server automatically handles path normalization, so both formats with and without leading slashes work correctly.

#### Basic Path Formats

* **Simple navigation**: `/about`, `/settings`, `/products`
* **Resource with ID**: `/product/123`, `/user/profile/456`
* **Query parameters**: `/search?q=shoes&category=mens`
* **Complex paths**: `/category/electronics/phones?brand=apple&sort=price`
* **Root path**: `/` (navigates to your Mini's home screen)

#### Path Normalization

Leading slashes are handled automatically by the development server:

* `/products` → normalized to `products`
* `products` → remains `products`
* `/` → special case, preserved as root

This ensures consistent behavior regardless of how developers enter paths during testing.

***

---

<a id="dependencies-dependencies-122"></a>

## Dependencies — dependencies

## Dependencies

Shop Minis must only use approved dependencies. Only the packages listed on this page are allowed. Submissions with unapproved dependencies will be automatically rejected.

***

### Required dependencies

The following dependencies are required for your Mini to work. They will be installed automatically when you create your Mini.

* [`@shopify/shop-minis-react`](https://www.npmjs.com/package/@shopify/shop-minis-react) (\*)
* [`react`](https://www.npmjs.com/package/react) (18.2.0)
* [`react-dom`](https://www.npmjs.com/package/react-dom) (18.2.0)

***

### Optional dependencies

The following dependencies have been approved for use in Minis. Use the [`install`](https://shopify.dev/docs/api/shop-minis/commands/install) command to add them to your Mini.

* [`@fal-ai/client`](https://www.npmjs.com/package/@fal-ai/client) (1.6.0)
* [`@mediapipe/pose`](https://www.npmjs.com/package/@mediapipe/pose) (0.5.1675469404)
* [`@react-three/fiber`](https://www.npmjs.com/package/@react-three/fiber) (8.18.0)
* [`aframe`](https://www.npmjs.com/package/aframe) (1.7.1)
* [`color-convert`](https://www.npmjs.com/package/color-convert) (2.0.1)
* [`mind-ar`](https://www.npmjs.com/package/mind-ar) (1.2.5)
* [`three`](https://www.npmjs.com/package/three) (0.178.0)
* [`@types/three`](https://www.npmjs.com/package/@types/three) (0.178.1)
* [`lodash`](https://www.npmjs.com/package/lodash) (4.17.21)
* [`lucide-react`](https://www.npmjs.com/package/lucide-react) (0.513.0)
* [`motion`](https://www.npmjs.com/package/motion) (12.17.3)
* [`radix-ui`](https://www.npmjs.com/package/radix-ui) (1.4.2)
* [`react-router`](https://www.npmjs.com/package/react-router) (7.7.0)
* [`socket.io-client`](https://www.npmjs.com/package/socket.io-client) (4.8.1)
* [`video.js`](https://www.npmjs.com/package/video.js) (8.23.3)
* [`ulid`](https://www.npmjs.com/package/ulid) (3.0.1)
* [`zustand`](https://www.npmjs.com/package/zustand) (5.0.8)
* [`@tanstack/react-query`](https://www.npmjs.com/package/@tanstack/react-query) (5.86.0)
* [`ai`](https://www.npmjs.com/package/ai) (5.0.29)
* [`@ai-sdk/openai`](https://www.npmjs.com/package/@ai-sdk/openai) (2.0.23)
* [`@ai-sdk/react`](https://www.npmjs.com/package/@ai-sdk/react) (2.0.29)
* [`@tensorflow/tfjs`](https://www.npmjs.com/package/@tensorflow/tfjs) (4.22.0)
* [`@tensorflow-models/posenet`](https://www.npmjs.com/package/@tensorflow-models/posenet) (2.2.2)
* [`embla-carousel-react`](https://www.npmjs.com/package/embla-carousel-react) (8.6.0)
* [`embla-carousel-autoplay`](https://www.npmjs.com/package/embla-carousel-autoplay) (8.6.0)
* [`embla-carousel-auto-scroll`](https://www.npmjs.com/package/embla-carousel-auto-scroll) (8.6.0)
* [`embla-carousel-auto-height`](https://www.npmjs.com/package/embla-carousel-auto-height) (8.6.0)
* [`embla-carousel-class-names`](https://www.npmjs.com/package/embla-carousel-class-names) (8.6.0)
* [`embla-carousel-fade`](https://www.npmjs.com/package/embla-carousel-fade) (8.6.0)
* [`@dnd-kit/core`](https://www.npmjs.com/package/@dnd-kit/core) (6.3.1)
* [`@dnd-kit/modifiers`](https://www.npmjs.com/package/@dnd-kit/modifiers) (9.0.0)
* [`@dnd-kit/sortable`](https://www.npmjs.com/package/@dnd-kit/sortable) (10.0.0)
* [`@emoji-mart/data`](https://www.npmjs.com/package/@emoji-mart/data) (1.2.1)
* [`@emoji-mart/react`](https://www.npmjs.com/package/@emoji-mart/react) (1.1.1)
* [`emoji-mart`](https://www.npmjs.com/package/emoji-mart) (5.6.0)
* [`videojs-mux`](https://www.npmjs.com/package/videojs-mux) (4.21.11)
* [`zod`](https://www.npmjs.com/package/zod) (4.1.11)
* [`@apollo/client`](https://www.npmjs.com/package/@apollo/client) (4.0.7)
* [`graphql-ws`](https://www.npmjs.com/package/graphql-ws) (6.0.6)
* [`@mux/mux-player-react`](https://www.npmjs.com/package/@mux/mux-player-react) (3.8.0)
* [`@mediapipe/tasks-vision`](https://www.npmjs.com/package/@mediapipe/tasks-vision) (0.10.9)
* [`hls.js`](https://www.npmjs.com/package/hls.js) (1.6.14)

Running the [`install --check`](https://shopify.dev/docs/api/shop-minis/commands/install) command will validate that your Mini only uses approved dependencies. You can use [`install --fix`](https://shopify.dev/docs/api/shop-minis/commands/install) to fix any issues automatically.

**Unapproved dependencies will cause automatic rejection:**

Your Mini will be automatically rejected if it includes any dependencies not listed above. This includes private npm packages (which are never allowed), dependencies vendored into your source code, and any modifications to approved dependencies. Only use the exact versions of approved dependencies listed on this page.

[Command - Learn more about the install command](https://shopify.dev/docs/api/shop-minis/commands/install)

***

### Requesting optional dependencies

If you need a dependency that's not on the list, request it as early as possible. **The approval process takes days to weeks**, and there is no guarantee of approval. We can only approve Minis that use allowed dependencies.

To request a new dependency, file an issue in the [Shop Minis GitHub repository](https://github.com/Shopify/shop-minis/issues/new?template=dependency-request.yml).

**Caution:**

Shop Minis should be built specifically for the Shop platform, not ported from existing applications.

#### Why a dependency request might be rejected

Dependency requests could be rejected for:

* **Excessive dependencies**: Requesting many dependencies (10+)
* **Private packages**: Private npm packages are never allowed
* **Security vulnerabilities**: Dependencies with known security issues or poor security track records
* **Large bundle size**: Dependencies that significantly increase the Mini's size without sufficient benefit
* **Maintenance concerns**: Unmaintained or deprecated packages with no active development
* **Functionality overlap**: Dependencies that duplicate functionality already available in approved packages or the Shop Minis SDK
* **Paid dependencies**: Dependencies that require paid subscriptions or are closely tied to paid third-party platforms. We strongly prefer widely-adopted open source alternatives

**Tip:**

Before requesting a dependency, check the [closed issues](https://github.com/Shopify/shop-minis/issues?q=is%3Aissue+is%3Aclosed+label%3Adependency-request) to see if it has been previously rejected and consider whether an approved alternative exists.

***

---

<a id="design-design-123"></a>

## Design — design

## Design

Minis should be designed and built with the following guiding principles in mind.

***

### UX Principles

#### Unambiguous purpose

Each Mini should possess a singular, well-defined objective. The user interface should reinforce this purpose with a single primary action per screen.

#### Rapid initialization and clear progress indication

Minis should offer quick initialization paths (e.g. pre-filled content from collections). Progress indicators should be implemented for multi-step processes (e.g. avatar creation flows).

#### Engaging functionality

Minis should be both utilitarian and engaging, encouraging user interaction through delightful design elements rather than solely focusing on basic functionality. Gamification techniques, social engagement loops, and visual feedback should be intuitive and non-intrusive.

#### Personalization and shareability

User engagement should be fostered through personalization features, such as avatars, saved looks, and personalized analysis. Clear sharing functionalities should be provided to generate user-generated content (UGC) and links back to the Mini or Shop.

#### Efficient completion and habit formation

Each Mini should be designed to encourage repeat usage through clear options for saving, revisiting, or continuing progress.

#### Accessibility by design

Adherence to established mobile app design guidelines and accessibility best practices is essential, including the implementation of large tap targets, appropriate contrast ratios, and alt text for images. Keyboard navigation and screen reader support should be ensured where applicable.

#### Standardized interaction patterns

Existing Shop Minis SDK components and common interaction patterns should be utilized whenever feasible. Established navigation conventions, including modals, bottom sheets, and swipe gestures, should be adhered to in order to minimize user friction.

#### Preserve integrity

The established character and flow of the user experience, once recognized through approval, should be maintained. Any dynamic modifications post-approval that could notably redefine the user's learned interactions or the Mini's core behavior should be approached with careful consideration for user continuity and confidence.

***

### Design specifications

#### Safe area

Minis should observe the designated safe areas and avoid placing internal navigation buttons or any other pertinent information that is vital to the Mini's necessary function, outside the safe area bounds.

***

### Icons

The Shop Minis SDK uses [Lucide](https://lucide.dev/) as its icon library. Lucide provides a comprehensive set of high-quality, open-source icons that are designed to be consistent, customizable, and accessible.

#### Why Lucide?

* **Consistent Design**: All icons follow the same design principles and visual style
* **Customizable**: Easy to size, color, and style to match your design

#### Prefer Icons Over Emojis

When building Shop Minis, **always prefer icons over emojis** for UI elements because icons render consistently across all platforms and devices.

#### Get started

```bash
npx shop-minis install lucide-react
```

### Icon Usage

```tsx
import {Heart, AmpersandIcon, Pizza} from 'lucide-react'


export default function MyComponent() {
  return (
    <div className="flex m-2 gap-2 justify-center">
      <Pizza />
      <AmpersandIcon />
      <Heart />
    </div>
  )
}
```

***

---

<a id="guidelines-guidelines-124"></a>

## Guidelines — guidelines

## Guidelines

Guidelines and requirements for building and submitting Shop Minis. These guidelines ensure a safe, reliable experience for buyers, merchants, and partners.

***

### Introduction

We're excited you're here and want to help you build the next big commerce experience using the Shop Minis SDK. Our team is readily available to answer questions, provide feedback, and help you succeed building your Mini through the [Shop Minis forum](https://community.shopify.dev/c/shop-minis/33). Our goal for buyers, merchants, and partners is to ensure a safe, reliable experience while using Minis, so we've detailed a set of guidelines we enforce during the submission and review process.

The following requirements are used to review all Shop Minis submitted for approval to be distributed through the Shop app. They are intended to provide the best experience across the entire Shop Mini lifecycle, from branding to installation, onboarding, functionality, and quality. By following these guidelines, you can ensure that the review process is as quick as possible when you submit your own Shop Mini.

These requirements are subject to change. Your Shop Mini will be expected to meet any new requirements that are added here with reasonable notice. Shopify can withhold its approval, reject, or remove a Shop Mini from the Shop app at its sole discretion.

***

### General guidelines

* Shop Minis must be built using our developer platform, the Shop Minis SDK, and other Shop Mini-specific functionality that is made available to developers from time to time.
* The Shop Minis SDK cannot be used to build anything other than a Shop Mini.
* Shopify periodically deprecates and removes functionality from the Shop Minis platform. Your Shop Mini may only use supported functionality. If your Shop Mini relies on deprecated functionality, we will notify you to submit a new version within a reasonable timeframe.
* Shop Minis must only fetch merchant/product data using the SDK.
* If you integrate with a third-party service, you must comply with their terms of use and ensure that they also comply with the Shop Minis Terms, particularly concerning Shop Merchant or Shop User data. You are responsible for making sure everything in your Shop Mini complies with the Shop Minis Terms and these guidelines, so please review and choose them carefully.
* Shopify reserves the right to enable Merchants to restrict or revoke Shop Mini developers' access to their Merchant Materials.
* Shop Minis may only make network calls to approved hosts within the viewer.
* A Mini must function solely within the Shop app; it cannot be a standalone app that operates outside of the Shop.
* Shop Minis that include user-generated images must use the [useCreateImageContent](https://shopify.dev/docs/api/shop-minis/hooks/content/usecreateimagecontent) hook to ensure images are moderated.
* Shop Minis including video, audio, or public commenting, must share detailed, established moderation practices as part of your submission description and will face additional review scrutiny. Developers should ensure the content follows the [Shop Content Policy](https://shop.app/content-policies).

***

### Prohibited practices and functionality

#### Practices

* Minis must not violate the [Shop Minis Terms](https://shop.app/minis/terms), the [Partner Program Agreement](https://www.shopify.com/partners/terms), the [Shopify API License and Terms of Use](https://www.shopify.com/legal/api-terms), or our [Shop Content Policy](https://shop.app/content-policies).
* Minis must not use the words 'Shop' or 'Mini' in their name.
* Minis cannot violate any terms, conditions, or guidelines imposed by relevant third-party platforms (such as Apple App Store Guidelines or Google Play Store Policies) that are applicable to applications distributed or operating within their ecosystems, particularly concerning prohibited content, payments, or user safety.
* Minis cannot introduce any malicious software to the Shopify API or the Service (including the Shop app).
* Shop Minis must not link externally from within the viewer. Prohibited link outs include (but are not limited to) links to websites, other applications, or any stores.
* Minis cannot use dark UX patterns or include any other malicious activities toward users.

#### Functionality

* Shop Minis may not allow users to communicate with each other through direct messaging, or other 1:1 means of communication.
* Shop Minis cannot run advertisements.
* Shop Minis cannot livestream user generated content.
* All user generated images must use the [useCreateImageContent](https://shopify.dev/docs/api/shop-minis/hooks/content/usecreateimagecontent) hook.

***

### Checkout & fees

* Developers cannot charge users fees for their use of their Shop Mini.
* Shop Minis may only use the Minis SDK to navigate to the shopping cart and checkout. Any payment processing (e.g., refunds) must go through Shop Pay.
* Shop Minis must not sell anything other than items made available in Shop's product catalog.

***

### Performance

* Shop Minis should be performant for buyers on the Shop app; please ensure yours has undergone any relevant testing and monitoring to avoid any lag that might be noticeable.
* We require that the loading time of your Shop Mini, from when the user taps on the entry point until the user can start interacting with the content in your Shop Mini viewer, should be no longer than 3 seconds as measured on a 5G connection.
* Minis must not exceed 5 MB in size.

***

### Data privacy

* You should exercise care when handling Shop User Data to ensure you've complied with privacy best practices, applicable laws, and the Shop Minis Terms.
* Shop Minis must include the URL of their privacy policy in the manifest. The privacy policy must clearly and explicitly state what data is collected and how it is used, explain the purposes for which the data is being processed, and how users may request deletion of that data. Your privacy policy must comply with the Shop Minis Terms, applicable laws, and these guidelines.
* Shop Minis should only request access to data relevant to the core functionality of the app and should only collect and use data required to accomplish the relevant task.
* Shop Minis must respect the user's permission settings and not attempt to manipulate, trick, or force people to consent to unnecessary data access.
* Developers can't access any Shop user data outside of what we make available (i.e., approved data fields we will share via the SDK) and what may specifically be permissible to request directly from a user (i.e., access to camera/photos).
* Developers cannot ask users for any other data directly (e.g., email addresses; payment card data; shipping or billing addresses; sensitive or health-related data of a Shop User).

You must not use Shop User Data for:

* Tracking user behavior across different contexts
* Creating targeted advertising
* Monetizing data through third parties
* User profiling beyond your Mini's authorized functionality or
* Selling or licensing user data to others.

***

### Merchant materials

* Only use Merchant Materials for the purpose of the Shop Mini.
* Shop Minis cannot manipulate merchant or product information, such as product names or prices. Minis cannot manipulate other screens on Shop.
* Developers can't use Merchant Materials (i.e., product listings, logos, images) for anything other than their Shop Mini. They can't export, share, or use this data outside of the Mini. See 4b in the Terms of Service for further details.
* Minis must not display merchants' products in a negative light.

***

### Violations and enforcement

* **Immediate rejection** - Security violations, privacy violations, legal non-compliance, prohibited functionality, performance issues, or missing documentation. Fix issues and resubmit.
* **Permanent removal** - Shopify reserves the right to permanently remove any Mini at its sole discretion for repeated violations or severe misconduct.
* **No appeals** - All decisions are final as required by law.

***

### Updating your mini

Every time you update your Mini, the Shopify team will review your code and approve or reject any changes based on the guidelines above.

***

---

<a id="manifest-manifest-file-125"></a>

## Manifest — manifest-file

## Manifest

Learn how to configure your Shop Mini using the manifest.json file. The manifest defines critical properties like description, permissions, scopes, and trusted domains.

***

### Overview

Every Shop Mini requires a `manifest.json` file in the src folder of the project. This file defines the configuration and capabilities of your Mini, including what permissions it needs, what user data it can access, and which external domains it can communicate with.

The manifest is validated during the submission process and must be properly configured for your Mini to function correctly.

***

### Manifest Structure

Here's an example of a complete `manifest.json` file:

### manifest.json

```json
{
  "name": "My Mini",
  "description": "A brief description of your mini that explains its purpose and functionality",
  "handle": "my-mini-handle",
  "permissions": ["CAMERA", "MICROPHONE", "MOTION"],
  "scopes": ["profile", "orders"],
  "trusted_domains": [
    "api.example.com/v1",
    "storage.googleapis.com/my-mini-bucket",
    "cdn.example.com/assets"
  ]
}
```

***

### Permissions

The `permissions` field is an array that specifies which native device capabilities your Mini requires. These permissions are requested from the user when your Mini attempts to use them.

#### Available Permissions

* **`CAMERA`** - Access to the device camera for taking photos or videos
* **`MICROPHONE`** - Access to the device microphone for audio recording
* **`MOTION`** - Access to device motion sensors (accelerometer, gyroscope)

#### Example

```json
{
  "permissions": ["CAMERA", "MICROPHONE"]
}
```

**Caution:**

Only request permissions that are essential to your Mini's core functionality. Requesting unnecessary permissions may delay approval during the review process.

***

### Scopes

The `scopes` field is an array that defines what user data your Mini can access through the Shop Minis SDK. Some hooks in the SDK require specific scopes to be declared in the manifest before they can be used.

#### Available Scopes

##### User Scopes

* **`openid`** - OpenID Connect authentication. Required for generating user tokens.
* **`profile`** - Read access to user's buyer profile.
* **`user_settings:read`** - Read access to the current user.

##### Product Scopes

* **`products:recent:read`** - Read access to the user's recently viewed products.
* **`products:recommendations:read`** - Read access to personalized product recommendations for the user.

##### Shop Scopes

* **`shops:recent:read`** - Read access to the user's recently viewed shops.
* **`shops:follows:read`** - Read access to shops the user follows.
* **`shops:follows:write`** - Write access to follow or unfollow shops.
* **`shops:recommendations:read`** - Read access to personalized shop recommendations for the user.

##### Order Scopes

* **`orders`** - Access to the user's order history and details.

##### Product List Scopes

* **`product_list:read`** - Read access to the user's collections (favorites, wishlists, etc.).
* **`product_list:write`** - Write access to create, update, or delete collections.
* **`product_list_item:write`** - Write access to add or remove items from collections.

#### Example

```json
{
  "scopes": ["profile", "orders"]
}
```

**Note:**

Always follow the principle of least privilege - only request scopes that are necessary for your Mini's functionality. Review the [Guidelines](https://shopify.dev/docs/api/shop-minis/guidelines) for more information on data privacy requirements.

***

### Trusted Domains

The `trusted_domains` field is an array of domains that your Mini is allowed to communicate with. This is a critical security feature that restricts network requests to approved domains only.

#### Usage

Trusted domains are required for:

* **Network requests** - Any `fetch()` calls to external APIs
* **Image sources** - Loading images from external URLs
* **Video sources** - Loading videos from external URLs
* **Other external resources** - Any content loaded from outside your Mini's bundle

#### Domain Format

* Don't include the protocol (for example, `https://`)
* You can include paths to be more specific
* Subdomains must be listed separately
* **Be as specific as possible** - For example, if you're using Google Cloud Storage, include the full path to your specific bucket rather than just the domain

#### Path matching

When you include a path in your trusted domain, the trailing slash determines how URLs are matched:

* **With trailing slash** (for example, `cdn.example.com/images/`) - Matches any URL under that directory.
* **Without trailing slash** (for example, `cdn.example.com/images/photo.png`) - Matches only that exact path.

#### Example

To load an image from `https://cdn.shopify.com/static/sample-images/teapot.jpg`, any of these `trusted_domains` would work:

```json
{
  "trusted_domains": [
    "cdn.shopify.com",
    "cdn.shopify.com/static/",
    "cdn.shopify.com/static/sample-images/"
  ]
}
```

However, these wouldn't work:

```json
{
  "trusted_domains": [
    "cdn.shopify.com/static",
    "cdn.shopify.com/static/sample-images"
  ]
}
```

**Caution:**

Your Mini won't be able to make requests to any domain not listed in this array. Make sure to include all domains you need before submitting your Mini for review.

**Tip:**

Be as specific as possible with your trusted domains. Instead of allowing an entire domain like `storage.googleapis.com`, use `storage.googleapis.com/my-bucket/` to limit access to only your bucket. Remember to include a trailing slash to allow all files under that path.

***

### Handle

The `handle` field is a unique identifier for your Mini. This value is automatically assigned when you create your Mini through the Shop Minis platform.

#### Characteristics

* Automatically generated during Mini creation
* Must be unique across all Shop Minis
* Used internally by Shop to identify your Mini
* Cannot be changed after initial assignment
* Used to deeplink into your Mini (shop.app/mini/my-mini-handle)

#### Example

```json
{
  "handle": "my-awesome-mini"
}
```

**Note:**

You typically don't need to manually set this field. It's automatically populated when you initialize a new Mini project using the Shop Minis CLI.

***

### Description

The `description` field provides a brief summary of your Mini's purpose and functionality. This description is displayed to users in various places within the Shop app to help them understand what your Mini offers.

#### Characteristics

* Should be concise and informative (recommended 30-50 characters)
* Helps users discover and understand your Mini's value proposition
* Used in search results and Mini details

#### Example

```json
{
  "description": "Track your outfits every day"
}
```

#### Best Practices

* **Be specific:** Clearly state what unique value your Mini provides
* **Keep it concise:** Aim for 30-50 characters maximum
* **Use action words:** Start with verbs like "Discover," "Shop," "Track," or "Explore"
* **Highlight key features:** Mention the main benefit or differentiator of your Mini

***

### Best Practices

#### Minimize Permissions and Scopes

Only request the permissions and scopes that are absolutely necessary for your Mini's core functionality. This improves user trust and speeds up the review process.

#### Keep Trusted Domains Updated

As your Mini evolves, make sure to update the `trusted_domains` list if you add new external services or APIs. Missing domains will cause runtime errors.

#### Validation

Test your manifest configuration thoroughly during development to catch any issues before submission. The Shop Minis SDK will validate your manifest and provide warnings for common issues.

***

---

<a id="navigation-transitions-navigation-transitions-126"></a>

## Navigation transitions — navigation-transitions

## Navigation transitions

Learn how to implement smooth navigation transitions in your Shop Mini. This guide covers MinisRouter setup, TransitionLink usage, and custom navigation patterns for creating fluid, app-like experiences.

***

### Overview

Shop Minis support smooth navigation transitions, providing native app-like page transitions. When enabled, navigations slide smoothly between pages with configurable animations.

Key features:

* **Automatic animations**: Forward navigation slides from right, back navigation slides from left
* **Gesture support**: Detects iOS swipe gestures and Android back button for appropriate animations

***

### Quick Start

To enable navigation transitions in your Shop Mini, wrap your app with MinisRouter and set the `viewTransitions` prop:

### Enable navigation transitions

### App.tsx

```tsx
import {MinisRouter} from '@shopify/shop-minis-react'
import {Routes, Route} from 'react-router'


function App() {
  return (
    <MinisRouter viewTransitions>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:id" element={<ProductPage />} />
      </Routes>
    </MinisRouter>
  )
}
```

***

### Navigation Components

Shop Minis provides two main ways to navigate with transitions:

#### Transition​Link Component

Use TransitionLink for declarative navigation links:

[API Reference - TransitionLink API](https://shopify.dev/docs/api/shop-minis/components/navigation/transitionlink)

### Using TransitionLink

```tsx
import {TransitionLink} from '@shopify/shop-minis-react'


function ProductCard({product}) {
  return (
    <div className="product-card">
      <TransitionLink to={`/products/${product.id}`}>
        <img src={product.image} alt={product.title} />
        <h3>{product.title}</h3>
      </TransitionLink>
    </div>
  )
}
```

***

### Programmatic Navigation

#### use​Navigate​With​Transition Hook

For programmatic navigation with transitions, use the useNavigateWithTransition hook:

[API Reference - useNavigateWithTransition API](https://shopify.dev/docs/api/shop-minis/hooks/navigation/usenavigatewithtransition)

### Using the navigation hook

```tsx
import {useNavigateWithTransition} from '@shopify/shop-minis-react'
import {Button} from '@shopify/shop-minis-react'


function CheckoutButton() {
  const navigateWithTransition = useNavigateWithTransition()


  const handleClick = () => {
    // Perform validation or API calls
    // Navigate with smooth transition
    navigateWithTransition('/checkout')
  }


  return (
    <Button onClick={handleClick}>
      Proceed to Checkout
    </Button>
  )
}
```

***

### Back Navigation

When navigating back (pop/back button), the old page slides right and fades out, and the previous page slides in from the left. This is automatically triggered by iOS swipe gesture or Android back button. You can programmatically navigate back by using the `useNavigateWithTransition` hook with a negative number.

### Back Navigation

```tsx
import {useNavigateWithTransition} from '@shopify/shop-minis-react'


const navigateWithTransition = useNavigateWithTransition()


// Go back one page
navigateWithTransition(-1)
```

***

### Best Practices

* **Use TransitionLink for static navigation**: TransitionLink is optimized for declarative navigation
* **Batch state updates**: Perform state updates before navigation to avoid mid-transition renders
* **Respect prefers-reduced-motion**: The default styles disable animations when users prefer reduced motion

#### Accessibility

* Transitions automatically respect the `prefers-reduced-motion` media query
* Ensure focus management across page transitions
* Provide clear visual feedback during navigation

***

### Navigation Guards

You can prevent navigation by using custom click handlers:

### Conditional navigation

```tsx
import {TransitionLink} from '@shopify/shop-minis-react'


function SecureLink() {
  var canNavigateThere = false


  return (
    <TransitionLink
      to="/account"
      onClick={(e) => {
        if (!canNavigateThere) {
          e.preventDefault()
          // Show error modal instead
          console.error('You are not authorized to navigate there')
        }
      }}
    >
      Protected Page
    </TransitionLink>
  )
}
```

***

### Troubleshooting

#### Transitions Not Working

1. **Check viewTransitions prop**: Ensure MinisRouter has `viewTransitions` enabled
2. **Navigating backwards**: Check if you are using the `useNavigateWithTransition(-1)` hook to navigate backwards
3. **Absolute URLs**: TransitionLink warns about absolute URLs - use relative paths

#### Animation Issues

* **Jumpy transitions**: Ensure consistent layouts between pages
* **Missing animations**: Check CSS isn't overriding transition styles
* **Performance**: Large DOM changes during transition can cause stuttering

***

---

<a id="network-requests-network-requests-127"></a>

## Network requests — network-requests

## Network requests

Shop Minis can only make network requests to approved domains. This page describes how to add trusted domains and how to perform fetch requests inside your Mini.

***

### Trusted domains

To allow your Mini to make network requests to external domains, you need to add them to the `trusted_domains` array in your `manifest.json` file. This will be reviewed when your Mini is submitted.

### Adding trusted domains to manifest.json

```json
{
  "name": "My Mini",
  "trusted_domains": ["example.com", "api.example.com"]
}
```

***

### Making requests

Once you have added trusted domains to your manifest, you can use standard fetch requests in your Mini to communicate with your backend services. See [Custom backend](https://shopify.dev/docs/api/shop-minis/custom-backend) for more information on how to verify requests.

Make sure to handle errors appropriately and provide feedback to users when requests fail.

**Authenticating requests:**

Do not include secret tokens or API keys in your Mini code. If you need to make authenticated API requests, you should wrap or proxy the request on your own backend using the verification process for rate limiting.

***

### Handling CORS

Any backend services that your Shop Mini communicates with must be configured to allow [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS) requests from `localhost:*` (all localhost ports).

This applies to both development and production environments, as Shop Minis use this origin to make requests. Ensure your server includes appropriate CORS headers to allow requests from these origins.

***

---

<a id="publishing-publishing-128"></a>

## Publishing — publishing

## Publishing

Publishing your Shop Mini to the Shop app includes a manual review process. You can use the [`submit`](https://shopify.dev/docs/api/shop-minis/commands/submit) command to create a submission, which will upload your source code and initiate a review. Once your submission has been approved, your Shop Mini will be made available to users in the Shop app.

***

### Requirements

* You have a [Shopify Partners account](https://www.shopify.com/partners).
* You have set up your Mini using the [`setup`](https://shopify.dev/docs/api/shop-minis/commands/setup) command.

[Command - Learn more about the setup command](https://shopify.dev/docs/api/shop-minis/commands/setup)

***

### Submitting your Mini

Use the [`submit`](https://shopify.dev/docs/api/shop-minis/commands/submit) command to submit your code for review.

You'll need to enter a description to tell us what your Shop Mini does and any changes since your last submission. Please provide a video showing an end-to-end flow of your Shop Mini. This will help provide our team with more clarity during the review process.

Your source code will be uploaded for us to review. Once we've reviewed your submission, we'll either approve it or ask you to make some changes.

If it's approved, your Mini will be made available to users in the Shop app when the Shop Team decides to release it.

If it's rejected, we'll provide detailed actionable feedback to assist with your next submission. If you have questions or concerns about the outcome of a review, please visit the [Shop Minis forum](https://community.shopify.dev/c/shop-minis/33) in the Shopify Community.

**Submission requirements:**

Submissions have a maximum size of 5MB and must include a `src/icon.png` file, which should be 1024x1024px and less than 512KB.

### Submit your Mini

```sh
npx shop-minis submit [options]
```

***

### Keeping your Mini up to date

Your Mini must use a compatible SDK version to work with the Shop app. You should upgrade your Mini to the latest SDK version:

* **Before making a new submission** - Submissions with outdated SDK versions will be rejected
* **When requested by Shop Minis team** - If we ask you to upgrade due to compatibility issues

Use the [`upgrade`](https://shopify.dev/docs/api/shop-minis/commands/upgrade) command to update your Mini to the latest SDK version:

[Command - Learn more about the upgrade command](https://shopify.dev/docs/api/shop-minis/commands/upgrade)

### Upgrade your Mini

```sh
npx shop-minis upgrade [options]
```

***

### Checking the status of a submission

Use the [`check-submission`](https://shopify.dev/docs/api/shop-minis/commands/check-submission) command to see details about your latest submission.

### Check the status of a submission

```sh
npx shop-minis check-submission [options]
```

***

### Cancelling a submission

If you realize there is an issue with the code you have submitted or you change your mind, you can cancel a submission with the [`cancel-submission`](https://shopify.dev/docs/api/shop-minis/commands/cancel-submission) command.

This will only work for pending submissions—if we have already reviewed the submission, you'll need to make a new one. If we have approved a submission that you later realize includes a bug, please contact us through the [Shop Minis forum](https://community.shopify.dev/c/shop-minis/33).

### Cancel a submission

```sh
npx shop-minis cancel-submission [options]
```

***

### Updating a submission

It's not possible to update a pending submission. If you'd like to make changes, you'll need to cancel the pending submission and make a new one.

There can only be one pending submission at a time, you cannot line up multiple submissions. You should either cancel and combine the changes into a single submission or wait for the pending submission to be reviewed first.

***

---

<a id="storing-data-storing-data-129"></a>

## Storing data — storing-data

## Storing data

The Minis platform provides a few different ways to store data associated with a user. This guide will walk you through the different options and when to use each.

***

### Async storage

The `useAsyncStorage` hook provides a way to store data in the device's local storage. It's a simple and easy way to store data that persists across sessions, but it will be deleted if the user uninstalls the Shop app.

[Hook - Learn more about the useAsyncStorage hook](https://shopify.dev/docs/api/shop-minis/hooks/storage/useasyncstorage)

### Using async storage

```tsx
import {useEffect} from 'react'


import {useAsyncStorage} from '@shopify/shop-minis-react'


export default function MyComponent() {
  const {getItem, setItem, removeItem, getAllKeys, clear} = useAsyncStorage()


  useEffect(() => {
    async function handleStorageOperations() {
      // Get an item from storage
      const value = await getItem({key: 'myKey'})
      console.log({value})


      // Set an item in storage
      await setItem({key: 'myKey', value: 'Hello, World!'})


      // Remove an item from storage
      await removeItem({key: 'myKey'})


      // Get all keys in storage
      const keys = await getAllKeys()
      console.log({keys})


      // Clear all items from storage
      await clear()
    }


    handleStorageOperations()
  }, [getItem, removeItem, setItem, getAllKeys, clear])
}
```

***

### Secure storage

The `useSecureStorage` hook provides a way to store credentials and other sensitive data in the device's secure storage. It's a more secure way to store data that persists across sessions, but it will be deleted if the user uninstalls the Shop app.

[Hook - Learn more about the useSecureStorage hook](https://shopify.dev/docs/api/shop-minis/hooks/storage/usesecurestorage)

### Using secure storage

```tsx
import {useEffect} from 'react'


import {useSecureStorage} from '@shopify/shop-minis-react'


export default function MyComponent() {
  const {getSecret, setSecret, removeSecret} = useSecureStorage()


  useEffect(() => {
    async function handleSecureStorageOperations() {
      // Get a secret from secure storage
      const secret = await getSecret()
      console.log({secret})


      // Set a secret in secure storage
      await setSecret({value: 'Sensitive Data'})


      // Remove a secret from secure storage
      await removeSecret()
    }


    handleSecureStorageOperations()
  }, [getSecret, setSecret, removeSecret])
}
```

***

---

<a id="troubleshooting-troubleshooting-130"></a>

## Troubleshooting — troubleshooting

## Troubleshooting

Common issues and solutions for Mini development.

***

### Connection issues

If you're having connection issues or your Mini isn't loading:

* For WiFi: Verify devices are on the same network segment
* Check firewall settings aren't blocking port 5173
* Try using your computer's IP directly: `npx shop-minis dev --host 192.168.1.100`

***

### Android Port Forwarding

In some cases your Android device might not be able to connect to the Mini's dev server. Port forwarding creates a tunnel between your Android device and development machine, allowing the Shop app to access your Mini.

***

### Setting Up

```bash
## Forward the Vite dev server port
adb reverse tcp:5173 tcp:5173
```

This maps port 5173 on the Android device to port 5173 on your development machine.

***

---

<a id="user-generated-content-user-generated-content-131"></a>

## User-generated content — user-generated-content

## User-generated content

Learn how to create, display, and moderate user-generated image content in Shop Minis using the content system.

***

### Introduction

Shop Minis provides a built-in content system for handling user-generated images. This system includes automatic moderation, reporting capabilities, and shareable links. All user-generated images must use this system to ensure content safety and comply with Shop's [Content Policy](https://shop.app/content-policies).

***

### Creating content

Use the `useCreateImageContent` hook to upload images and create content. This hook handles the upload process and returns content metadata including moderation status.

[Hook - Learn more about the useCreateImageContent hook](https://shopify.dev/docs/api/shop-minis/hooks/content/usecreateimagecontent)

### Creating image content

```tsx
import {useCreateImageContent} from '@shopify/shop-minis-react'
import {useImagePicker} from '@shopify/shop-minis-react'


export default function UploadImage() {
  const {createImageContent, loading} = useCreateImageContent()
  const {pickImage} = useImagePicker()


  const handleUpload = async () => {
    // Pick an image from the user's device
    const image = await pickImage()


    if (image) {
      // Upload and create content
      const result = await createImageContent({
        image: image.uri,
        title: 'My uploaded image',
        description: 'A great photo',
        externalId: 'unique-id-123', // Optional: Your own ID for reference
        visibility: ['DISCOVERABLE', 'LINKABLE'],
      })


      if (result.data) {
        console.log('Content created:', result.data.publicId)
        console.log('Status:', result.data.status) // PENDING, READY, or REJECTED
        console.log('Shareable URL:', result.data.shareableUrl)
      }


      if (result.userErrors) {
        console.error('Upload failed:', result.userErrors)
      }
    }
  }


  return (
    <Button onPress={handleUpload} disabled={loading}>
      {loading ? 'Uploading...' : 'Upload Image'}
    </Button>
  )
}
```

#### Content visibility

The `visibility` parameter controls how content can be discovered and shared. It accepts an array of `ContentVisibility` values:

* `DISCOVERABLE`: Content appears in Shop's recommendation surfaces, such as feeds and content discovery areas.
* `LINKABLE`: Content gets a shareable URL, enabling users to share it outside of Shop.

Pass both values to make content fully public, or pass `null` or an empty array to keep content private within your Mini.

***

### Content status

Content goes through moderation and has three possible statuses:

* `PENDING`: Content is being reviewed for moderation.
* `READY`: Content has passed moderation and can be displayed.
* `REJECTED`: Content was rejected during moderation.

Users will always be able to see their own content, but will not be able to see other users' rejected content. In this case, it will be `null`.

### Handling content status

```tsx
import {MinisContentStatus} from '@shopify/shop-minis-react'


function ContentStatusBadge({status}: {status: MinisContentStatus}) {
  switch (status) {
    case MinisContentStatus.PENDING:
      return <Badge>Under review</Badge>
    case MinisContentStatus.READY:
      return <Badge variant="success">Approved</Badge>
    case MinisContentStatus.REJECTED:
      return <Badge variant="error">Rejected</Badge>
  }
}
```

***

### Displaying content

Use the `ContentWrapper` component to display user-generated images. This component provides built-in moderation reporting functionality that allows users to long-press on content to report inappropriate material.

**Caution:**

Always use `ContentWrapper` instead of rendering user-generated content directly. This is required for content moderation.

[Component - Learn more about the ContentWrapper component](https://shopify.dev/docs/api/shop-minis/components/primitives/contentwrapper)

### Displaying content

```tsx
import {ContentWrapper, Image, MinisContentStatus} from '@shopify/shop-minis-react'


export default function DisplayContent({publicId}: {publicId: string}) {
  return (
    <ContentWrapper publicId={publicId}>
      {({content, loading}) => {
        if (loading) return <div>Loading...</div>


        if (!content || content.status !== MinisContentStatus.READY) {
          return null
        }


        return (
          <Image
            src={content.image.url}
            alt={content.title}
          />
        )
      }}
    </ContentWrapper>
  )
}
```

You can also use an `externalId` if you're tracking content with your own identifiers:

### Using external ID

```tsx
import {ContentWrapper, Image} from '@shopify/shop-minis-react'


<ContentWrapper externalId="unique-id-123">
  {({content, loading}) => {
    if (loading) return <div>Loading...</div>


    if (!content) return null


    return (
      <Image
        src={content.image.url}
        alt={content.title}
      />
    )
  }}
</ContentWrapper>
```

***

### Long-press moderation

Content displayed with `ContentWrapper` automatically supports long-press gestures for user reporting. When a user long-presses on the content, they can report it for moderation if it violates Shop's content policies.

This functionality is built into the component and requires no additional configuration. Shop's moderation team will review reported content and take appropriate action.

### Long-press is automatic

```tsx
// No additional setup needed - long-press reporting
// is automatically enabled on ContentWrapper
<ContentWrapper publicId={content.publicId}>
  {({content, loading}) => {
    if (loading || !content) return null


    return (
      <Image
        src={content.image.url}
        alt={content.title}
      />
    )
  }}
</ContentWrapper>
```

***

### Linking to content

Content created with `useCreateImageContent` includes a `shareableUrl` property that you can use to link to the content from outside your Mini or share with other users.

### Using shareable URLs

```tsx
import {useShare} from '@shopify/shop-minis-react'


export default function ShareContent({content}) {
  const {share} = useShare()


  const handleShare = async () => {
    if (content.shareableUrl) {
      await share({
        title: content.title,
        message: content.description,
        url: content.shareableUrl,
      })
    }
  }


  return (
    <Button onPress={handleShare}>
      Share Content
    </Button>
  )
}
```

***

### Deeplinking to content

When a user opens a content link (`shop.app/mc/<public_id>`), the Shop app opens your Mini and passes the `publicId` through the deeplink. Use the `useDeeplink` hook to retrieve the content ID and display the appropriate content.

[Hook - Learn more about the useDeeplink hook](https://shopify.dev/docs/api/shop-minis/hooks/navigation/usedeeplink)

### Handling content deeplinks

```tsx
import {useDeeplink} from '@shopify/shop-minis-react'
import {ContentWrapper, Image, MinisContentStatus} from '@shopify/shop-minis-react'


export default function ContentPage() {
  const {publicId} = useDeeplink()


  if (!publicId) {
    return <div>No content specified</div>
  }


  return (
    <ContentWrapper publicId={publicId}>
      {({content, loading}) => {
        if (loading) return <div>Loading...</div>


        if (!content || content.status !== MinisContentStatus.READY) {
          return <div>Content not available</div>
        }


        return (
          <div>
            <h1>{content.title}</h1>
            {content.description && <p>{content.description}</p>}
            <Image
              src={content.image.url}
              alt={content.title}
            />
          </div>
        )
      }}
    </ContentWrapper>
  )
}
```

***

### Guidelines

When working with user-generated content, follow these guidelines:

* **Required moderation**: All user-generated images must use `useCreateImageContent` and `ContentWrapper`. This is enforced during the Mini review process.
* **Check status**: Always check the content status before displaying. Only show content with `READY` status.
* **Use the wrapper**: Never render user-generated content directly. Always use `ContentWrapper` to enable moderation reporting.
* **Content policy**: Ensure your moderation practices align with Shop's [Content Policy](https://shop.app/content-policies).
* **Additional review**: Minis with user-generated content will face additional review scrutiny during submission.

[Guide - Review submission guidelines](https://shopify.dev/docs/api/shop-minis/guidelines)

***

### Related resources

* [useCreateImageContent hook](https://shopify.dev/docs/api/shop-minis/hooks/content/usecreateimagecontent) - Create and upload image content
* [ContentWrapper component](https://shopify.dev/docs/api/shop-minis/components/primitives/contentwrapper) - Display moderated content
* [useDeeplink hook](https://shopify.dev/docs/api/shop-minis/hooks/navigation/usedeeplink) - Handle content deeplinks
* [useImagePicker hook](https://shopify.dev/docs/api/shop-minis/hooks/util/useimagepicker) - Pick images from device
* [useShare hook](https://shopify.dev/docs/api/shop-minis/hooks/util/useshare) - Share content with others
* [Guidelines](https://shopify.dev/docs/api/shop-minis/guidelines) - Review and submission requirements

***

---
