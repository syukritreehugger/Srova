# Shopify Customer Authentication Reference (Indonesian / English)

> Referensi lengkap **Customer Authentication** Shopify API yang disusun ulang dari https://shopify.dev/docs/api/customer-authentication.
> Dokumen ini dirancang untuk pengembang berbahasa Indonesia, namun seluruh konten teknis (skema, tipe, nama field, contoh kode) dipertahankan dalam bahasa Inggris asli untuk memastikan akurasi.

| Item | Nilai |
|------|-------|
| Sumber | `https://shopify.dev/docs/api/customer-authentication` |
| Total halaman | **7** |
| Tanggal kompilasi | 2026-05-01 |
| Bahasa | Indonesia (intro/ToC) + English (konten teknis) |



## Daftar Isi (Table of Contents)

- [Landing](#landing)
- [claim-import](#claim-import)
- [multipass](#multipass)
- [provider-guides / amazon-cognito](#provider-guides-amazon-cognito)
- [provider-guides / auth0](#provider-guides-auth0)
- [provider-guides / microsoft-entra-id](#provider-guides-microsoft-entra-id)
- [provider-guides / okta](#provider-guides-okta)


---



<a id="landing"></a>


## Customer authentication

***

### How it works

You can connect your own identity provider to Shopify customer accounts using OpenID Connect. Instead of signing in with Shopify's default login, customers authenticate through your identity provider and are redirected back to your store with an active session.

Your identity provider handles authentication and returns an ID token to Shopify. Shopify uses the `email` and `sub` claims from this token to identify the customer and create or resume their session. You can also pass additional claims to populate customer data automatically through [claim import](https://shopify.dev/docs/api/customer-authentication/claim-import).

**Note:**

If you're currently using [Multipass](https://shopify.dev/docs/api/customer-authentication/multipass) or the Storefront API token flow with classic customer accounts, Shopify recommends migrating to a third-party identity provider. These legacy methods don't support claim import or new customer accounts.

***

### Third-party identity providers (IDPs)

To connect your identity provider, configure it through the [Shopify admin](https://help.shopify.com/en/manual/customers/customer-accounts/new-customer-accounts/identity-provider/connect). Your provider must be [OpenID Connect compliant](https://openid.net/specs/openid-connect-core-1_0.html) and support the authorization code flow.

If you're migrating from Multipass, use the following table to find the equivalent claims for the fields you currently use.

| ID token claims | Shopify |
| - | - |
| [`address`](https://shopify.dev/docs/api/customer-authentication/claim-import#address) (for one address) | [`Customer.addressesV2`](https://shopify.dev/docs/api/admin-graphql/latest/objects/customer#field-Customer.fields.addressesV2) |
| [`family_name`](https://shopify.dev/docs/api/customer-authentication/claim-import#name) | [`Customer.lastName`](https://shopify.dev/docs/api/admin-graphql/latest/objects/customer#field-Customer.fields.lastName) |
| [`given_name`](https://shopify.dev/docs/api/customer-authentication/claim-import#name) | [`Customer.firstName`](https://shopify.dev/docs/api/admin-graphql/latest/objects/customer#field-Customer.fields.firstName) |
| [`phone_number`](https://shopify.dev/docs/api/customer-authentication/claim-import#phone-number) | [`Customer.defaultPhoneNumber`](https://shopify.dev/docs/api/admin-graphql/latest/objects/customer#field-Customer.fields.defaultPhoneNumber) |
| [`urn:shopify:customer:tags`](https://shopify.dev/docs/api/customer-authentication/claim-import#tags) | [`Customer.tags`](https://shopify.dev/docs/api/admin-graphql/latest/objects/customer#field-Customer.fields.tags) |
| [`urn:shopify:customer:addresses`](https://shopify.dev/docs/api/customer-authentication/claim-import#addresses) | [`Customer.addressesV2`](https://shopify.dev/docs/api/admin-graphql/latest/objects/customer#field-Customer.fields.addressesV2) |

[ID token claim import\
\
](https://shopify.dev/docs/api/customer-authentication/claim-import)

[Map ID token claims to customer fields so profiles populate on sign in through your custom third-party identity providers](https://shopify.dev/docs/api/customer-authentication/claim-import)

#### Provider guides

For provider-specific instructions on configuring custom claims for customer data enrichment, see the following guides:

[Auth0\
\
](https://shopify.dev/docs/api/customer-authentication/provider-guides/auth0)

[Configure Auth0 Actions to add custom Shopify claims to ID tokens](https://shopify.dev/docs/api/customer-authentication/provider-guides/auth0)

[Okta\
\
](https://shopify.dev/docs/api/customer-authentication/provider-guides/okta)

[Configure Okta custom claims with app-level or authorization server settings](https://shopify.dev/docs/api/customer-authentication/provider-guides/okta)

[Microsoft Entra ID\
\
](https://shopify.dev/docs/api/customer-authentication/provider-guides/microsoft-entra-id)

[Configure Microsoft Entra ID with optional claims and Claims Mapping Policies](https://shopify.dev/docs/api/customer-authentication/provider-guides/microsoft-entra-id)

[Amazon Cognito\
\
](https://shopify.dev/docs/api/customer-authentication/provider-guides/amazon-cognito)

[Configure Amazon Cognito with Pre Token Generation Lambda triggers for custom claims](https://shopify.dev/docs/api/customer-authentication/provider-guides/amazon-cognito)

***

### Legacy authentication with Multipass

You run an online community where members sign in to access exclusive content. Those members can also purchase products from your Shopify store. Without Multipass, they would need to log in twice: once on your site and again on Shopify.

Multipass login is for store owners who have a separate website and a Shopify store. It redirects users from the website to the Shopify store and seamlessly logs them in with the same email address they used to sign up for the original website. If no account with that email address exists yet, one is created. There is no need to synchronize any customer databases.

[Implement Multipass login\
\
](https://shopify.dev/docs/api/customer-authentication/multipass)

[Log in external-site users with a signed token and legacy Customer accounts.](https://shopify.dev/docs/api/customer-authentication/multipass)

***

---



<a id="claim-import"></a>


## ID token claim import

When customers authenticate through a third-party identity provider, you can automatically import their profile data from ID token claims into Shopify customer records. This eliminates the need for separate API calls to populate customer information.

***

### Requirements

* A [Shopify Plus](https://www.shopify.com/plus) plan
* A third-party identity provider [configured through the Shopify admin](https://help.shopify.com/en/manual/customers/customer-accounts/new-customer-accounts/identity-provider/connect)
* The identity provider must verify that the customer owns their email address and return an `email_verified` claim set to `true`

***

### How it works

During the [identity provider login flow](https://shopify.dev/docs/api/customer-authentication#third-party-identity-providers-idps), your identity provider returns an ID token containing claims about the customer. Shopify extracts supported claims from this token and writes them to the customer record. After authentication completes, the customer record is populated with the imported data.

Only `email` and `email_verified` are required for authentication. Validation of all other claims is silent: invalid values are ignored and never block login. HTML content in any field is rejected to prevent cross-site scripting.

***

### Email and email verification

The ID token must include `email` and `email_verified`. Shopify uses the email to find an existing customer record or create a new one.

```json
{
  "email": "jane.doe@example.com",
  "email_verified": true
}
```

If `email_verified` is not `true`, the login is blocked and the customer sees an error page. The identity provider is responsible for verifying that the customer controls the email address before setting this claim to `true`.

***

### Configuration

In the identity provider settings in Shopify admin there are a few options that control how claim data is imported listed in the table below:

| Option | How claim data is imported |
| - | - |
| Sync customer data | Enables or disables claim import. When enabled, Shopify maps data from your identity provider's OIDC claims to customer fields on every sign-in. |
| Overwrite rules | Controls whether existing data is replaced. - **Do not overwrite existing customer data:** Only empty fields are updated.
- **Overwrite existing customer data:** Fields are updated with the latest values from the ID token on each login. |

***

### Supported claims

The following claims can be mapped from your identity provider's ID token to Shopify customer fields.

#### Name

`given_name` and `family_name` map to the customer's first and last name. These are imported together and treated as a group. When overwriting, both values are replaced.

```json
{
  "email": "jane.doe@example.com",
  "email_verified": true,
  "given_name": "Jane",
  "family_name": "Doe"
}
```

#### Phone number

`phone_number` maps to the customer's phone number in [E.164 format](https://en.wikipedia.org/wiki/E.164) (`+16135551234`). Phone numbers that fail validation are silently ignored.

```json
{
  "email": "jane.doe@example.com",
  "email_verified": true,
  "phone_number": "+16135551234"
}
```

#### Address

`address` maps a single address to the customer record using the [OIDC address claim](https://openid.net/specs/openid-connect-core-1_0.html#AddressClaim) field names:

* `street_address` → `address1`
* `locality` → `city`
* `region` → `province_code` (must be an [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2) subdivision code like `ON` or `CA-ON`)
* `postal_code` → `zip`
* `country` → `country_code` (must be an [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code like `CA` or `US`)

**Note:**

Country and province values must be valid ISO codes. Full names like `"Canada"` or `"Ontario"` are silently ignored. Only ISO codes are accepted.

```json
{
  "email": "jane.doe@example.com",
  "email_verified": true,
  "address": {
    "street_address": "789 Queen Street West",
    "locality": "Ottawa",
    "region": "ON",
    "postal_code": "K1A 0B1",
    "country": "CA"
  }
}
```

These claims follow the [OpenID Connect standard claims](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims) specification.

#### Tags

The `urn:shopify:customer:tags` claim is a comma-separated string of tags. Tags are treated as a group. When overwriting, all existing tags are replaced with the values from the claim.

```json
{
  "urn:shopify:customer:tags": "vip, loyalty-gold, newsletter"
}
```

#### Addresses

The `urn:shopify:customer:addresses` claim is an array of address objects that follows the [Admin API customer address](https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddress) format. The `first_name`, `last_name`, and `phone` fields on each address are distinct from the customer-level `given_name`, `family_name`, and `phone_number` claims and can differ from them.

Addresses are treated as a group. When overwriting, all existing addresses are replaced with the values from the claim. Sending an empty array (`[]`) clears all addresses from the customer record.

```json
{
  "urn:shopify:customer:addresses": [
    {
      "address1": "123 Main Street",
      "address2": "Suite 400",
      "city": "Toronto",
      "company": "Acme Inc",
      "first_name": "Jane",
      "last_name": "Doe",
      "phone": "555-123-4567",
      "zip": "M5V 2H1",
      "province_code": "ON",
      "country_code": "CA",
      "default": true
    }
  ]
}
```

#### Default address

When both the OIDC `address` claim and custom `urn:shopify:customer:addresses` are provided, Shopify determines the default shipping address using this priority:

1. If any custom address has `default: true`, that address is used.
2. If no custom address has `default: true`, the OIDC standard address becomes the default.
3. If only custom addresses are provided with no `default` flag, the first address in the array is used.

```json
{
  "address": {
    "street_address": "789 Queen Street West",
    "locality": "Ottawa",
    "region": "ON",
    "country": "CA"
  },
  "urn:shopify:customer:addresses": [
    {
      "address1": "123 Main Street",
      "city": "Toronto",
      "province_code": "ON",
      "country_code": "CA",
      "default": false
    },
    {
      "address1": "456 Oak Avenue",
      "city": "Vancouver",
      "province_code": "BC",
      "country_code": "CA",
      "default": true
    }
  ]
}
```

***

---



<a id="multipass"></a>


## Multipass

**Legacy:**

Multipass login is only available with legacy Customer accounts, which needs to be explicitly chosen from your [Customer Accounts settings in Shopify admin](https://www.shopify.com/admin/settings/customer_accounts/) before you can enable Multipass.

Consider migrating to the new, recommended Customer accounts for better security.

Multipass lets customers signed in on your external site log in to your Shopify store without entering credentials again, instead sending a signed token that redirects them.

This guide walks you through enabling Multipass in Shopify admin, encoding customer data as JSON, generating the token, and redirecting users to your store. When the token is valid, customers are logged in (or a new account is created) using the email you provide.

***

### Requirements

* Your store must be on a [Shopify Plus](https://www.shopify.com/plus) plan.

***

### Step 1: Enable Multipass

You can enable Multipass functionality on a store from the Shopify admin.

1. From your Shopify admin, go to [Settings > Customer accounts](https://www.shopify.com/admin/settings/customer_accounts/).

2. In the **Multipass** section, select **Turn on** to enable Multipass.

   After you enable Multipass, a secret is shared with you. You need the secret to generate tokens to log your customers into your Shopify store.

   **Caution:**

   Make sure you keep your secret private to reduce security risks.

***

### Step 2: Encode your customer information using JSON

The customer information is represented as a hash which must contain at least the email address of the customer and a current timestamp (in ISO8601 encoding). You can also include the customer's first name, last name or several [shipping addresses](https://shopify.dev/docs/api/admin-rest/latest/resources/customer).

A minimal example, containing all required fields, might look like this:

```json
{
  "email": "nicpotts@example.com",
  "created_at": "2013-04-11T15:16:23-04:00",
}
```

An example containing some optional fields might look like this:

```json
{
  "email": "nicpotts@example.com",
  "created_at": "2013-04-11T15:16:23-04:00",


  "first_name": "Nic",
  "last_name": "Potts",
  "tag_string": "canadian, premium",


  "identifier": "nic123",
  "return_to": "http://yourstore.com/some_specific_site",


  "addresses": [{
    "address1": "123 Oak St",
    "city": "Ottawa",
    "country": "Canada",
    "first_name": "Nic",
    "last_name": "Potts",
    "phone": "555-1212",
    "province": "Ontario",
    "zip": "123 ABC",
    "province_code": "ON",
    "country_code": "CA",
    "default": true
  }]
}
```

You can attribute tags to your customer by setting "tag\_string" to a list of comma separated one-word values. These tags will override any tags that you may have already attributed to this customer.

If you want your users to see a specific page of your Shopify store, you can use the `return_to` field for that.

**Note:**

Shopify uses email addresses as unique identifiers for customers of a shop. When registering customers in Shopify, the user must set the unique identifier in the "identifier" field in the following cases:

* The site uses other identifiers (such as usernames)
* Two different users of the site might be registered with the same email address If the email address is always unique, setting the "identifier" field isn't required. Only one Shopify account can use a specific email address. Registering a second customer with the same email address (even with a different "identifier") will result in an error.

***

### Step 3: Encrypt the JSON data using AES

To generate a valid multipass login token, you need the secret given to you in your Shopify admin. The secret is used to derive two cryptographic keys—one for encryption and one for signing. This key derivation is done through the use of the [SHA-256 hash](https://en.wikipedia.org/wiki/SHA-2) function (the first 128 bit are used as encryption key and the last 128 bit are used as signature key).

The encryption provides confidentiality. It makes sure that no one can read the customer data. As encryption cipher, we use the [AES algorithm](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard) (128 bit key length, CBC mode of operation, random initialization vector).

***

### Step 4: Sign the encrypted data using HMAC

The signature (also called message authentication code) provides authenticity. It makes sure that the multipass token is authentic and hasn't been tampered with. We use the [HMAC algorithm](https://en.wikipedia.org/wiki/Hash-based-message-authentication-code) with a SHA-256 hash function and we sign the encrypted JSON data from [step 3](#step-3-encrypt-the-json-data-using-aes) (not the plaintext JSON data from [step 2](#step-2-encode-your-customer-information-using-json)).

***

### Step 5: Base64 encode the binary data

The multipass login token now consists of the 128 bit initialization vector, a variable length ciphertext, and a 256 bit signature (in this order). This data is encoded using base64 (URL-safe variant, RFC 4648).

***

### Step 6: Redirect your customer to your Shopify store

Once you have the token, you should trigger a redirect to your Shopify store.

### Redirect URL

```text
/account/login/multipass/insert_token_here
```

When the redirect is successful (for example, the token is valid and not expired), the customer will be logged in to your Shopify store.

The multipass token is only valid for 15 minutes and each token can only be used once. For those reasons, you shouldn't generate tokens in advance for rendering them into your HTML sites. You should create a redirect URL which generates tokens on-the-fly when needed and then automatically redirects the browser.

***

### Example implementation

The following shows a basic example implementation of the token generation in the Ruby and PHP languages. You can also view a Node.js module for Shopify Multipass, called [Multipassify](https://github.com/beaucoo/multipassify).

### Example

### Example

###### Ruby

```ruby
require "openssl"
  require "base64"
  require "time"
  require "json"

  class ShopifyMultipass
    def initialize(multipass_secret)
      ### Use the Multipass secret to derive two cryptographic keys,
      ### one for encryption, one for signing
      key_material = OpenSSL::Digest.new("sha256").digest(multipass_secret)
      @encryption_key = key_material[ 0,16]
      @signature_key  = key_material[16,16]
    end

    def generate_token(customer_data_hash)
      ### Store the current time in ISO8601 format.
      ### The token will only be valid for a small timeframe around this timestamp.
      customer_data_hash["created_at"] = Time.now.iso8601

      ### Serialize the customer data to JSON and encrypt it
      ciphertext = encrypt(customer_data_hash.to_json)

      ### Create a signature (message authentication code) of the ciphertext
      ### and encode everything using URL-safe Base64 (RFC 4648)
      Base64.urlsafe_encode64(ciphertext + sign(ciphertext))
    end

    private

    def encrypt(plaintext)
      cipher = OpenSSL::Cipher.new("aes-128-cbc")
      cipher.encrypt
      cipher.key = @encryption_key

      ### Use a random IV
      cipher.iv = iv = cipher.random_iv

      ### Use IV as first block of ciphertext
      iv + cipher.update(plaintext) + cipher.final
    end

    def sign(data)
      OpenSSL::HMAC.digest("sha256", @signature_key, data)
    end
  end

  customer_data = {
    email: "nicpotts@example.com"
  }

  token = ShopifyMultipass.new("multipass secret from shop admin").generate_token(customer_data)
```

###### PHP

```php
<?php
date_default_timezone_set("UTC");

class ShopifyMultipass {
    private $encryption_key;
    private $signature_key;

    public function __construct($multipass_secret) {
        // Use the Multipass secret to derive two cryptographic keys,
        // one for encryption, one for signing
        $key_material = hash("sha256", $multipass_secret, true);
        $this->encryption_key = substr($key_material, 0, 16);
        $this->signature_key = substr($key_material, 16, 16);
    }

    public function generate_token($customer_data_hash) {
        // Store the current time in ISO8601 format.
        // The token will only be valid for a small timeframe around this timestamp.
        $customer_data_hash["created_at"] = date("c");

        // Serialize the customer data to JSON and encrypt it
        $ciphertext = $this->encrypt(json_encode($customer_data_hash));

        // Create a signature (message authentication code) of the ciphertext
        // and encode everything using URL-safe Base64 (RFC 4648)
        return strtr(base64_encode($ciphertext . $this->sign($ciphertext)), '+/', '-_');
    }

    private function encrypt($plaintext) {
        // Use a random IV
        $iv = openssl_random_pseudo_bytes(16);

        // Use IV as first block of ciphertext
        return $iv . openssl_encrypt($plaintext, "AES-128-CBC", $this->encryption_key, OPENSSL_RAW_DATA, $iv);
    }

    private function sign($data) {
        return hash_hmac("sha256", $data, $this->signature_key, true);
    }
}

$customer_data = array(
    "email" => "nicpotts@example.com"
);

$multipass = new ShopifyMultipass("multipass secret from shop admin");
$token = $multipass->generate_token($customer_data);
?>
```

***

### Security considerations

It is critical to maintain secure communication when sending tokens to the browser. Always use HTTPS connections to transmit tokens. The HTTPS method prevents potential interception and keeps the transaction secure.

You should make sure that registering new accounts at your main website requires validation of the email address which is used. Otherwise, someone could sign up to your main site using somebody else's email address, thus getting access to his customer account in your Shopify store.

***

### FAQ

**I have a huge customer database. How do I synchronize this with Shopify so that I can use multipass login?**

You don't need to synchronize anything. As soon as you redirect a customer using multipass, we will automatically create a customer account for them in your Shopify store (if one doesn't exist yet).

**Some of my customers have already placed orders on Shopify. How do I update those customers so they can login through multipass?**

You can use the [Customer API](https://shopify.dev/docs/api/admin-rest/2021-10/resources/customer) to set the **multipass\_identifier** for the customer. You will need to use the identifier with all your multipass requests for those customer accounts

**My secret was leaked. What do I do now?**

If your secret ever leaks, it can be revoked in your shop admin and a new one can be generated. This will make all of the old URLs invalid. You should do this as quickly as possible since everybody who knows the secret can potentially access every customer account!

**Can I use Multipass login between multiple Shopify stores?**

No, Multipass cannot be used to log in between multiple Shopify stores without redirection to an external site.

**Does Multipass login work with the wholesale channel?**

No, Multipass cannot be used with the wholesale channel.

**Can I restrict Multipass token usage to a customer's IP address?**

No. As part of improving our infrastructure and support for IPv6, Shopify no longer supports the use of the `remote_ip` field in the customer data hash. This field is now deprecated as it primarily focused on IPv4 addresses and isn't compatible in IPv6 environments. Make sure you continue to use secure methods for managing sessions and authenticating user data.

***

---



<a id="provider-guides-amazon-cognito"></a>


## Amazon Cognito

This guide covers how to configure [Amazon Cognito](https://aws.amazon.com/cognito/) as a third-party identity provider for Shopify customer accounts, including how to add custom claims to your ID tokens for [customer data enrichment](https://shopify.dev/docs/api/customer-authentication/claim-import).

***

### Prerequisites

* A [Shopify Plus](https://www.shopify.com/plus) plan with [new customer accounts](https://help.shopify.com/en/manual/customers/customer-accounts/new-customer-accounts) enabled.
* An AWS account with a [Cognito User Pool](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools.html) created.
* An [App Client](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-client-apps.html) configured in the User Pool with a client secret generated.

***

### Connect Amazon Cognito to Shopify

To connect Amazon Cognito as your store's identity provider, you'll add your Cognito credentials to the Shopify admin and configure your Cognito App Client to accept Shopify's callback URL.

#### Step 1: Add your Cognito credentials in the Shopify admin

To connect Cognito to Shopify, add your Discovery URL, Client ID, and Client Secret in the Shopify admin under **Settings** > **Customer accounts** > **Third-party identity provider**.

You can find these values in the Amazon Cognito console:

* **Discovery URL:** `https://cognito-idp.{region}.amazonaws.com/{user-pool-id}/.well-known/openid-configuration`.
* **Client ID:** Found in your App Client settings.
* **Client Secret:** Found in your App Client settings.

For full setup instructions, refer to [Connect a third-party identity provider](https://help.shopify.com/en/manual/customers/customer-accounts/new-customer-accounts/identity-provider/connect).

#### Step 2: Add your Shopify callback URL

To complete the connection, add your Shopify callback URL to the **Allowed callback URLs** field in your App Client settings under **Hosted UI**. This lets Cognito redirect customers back to your store after they authenticate.

You can find your Shopify callback URL in the Shopify admin on the same Third-party identity provider settings page from Step 1.

For full setup instructions, refer to [Connect a third-party identity provider](https://help.shopify.com/en/manual/customers/customer-accounts/new-customer-accounts/identity-provider/connect).

***

### Standard claims

Cognito includes standard OIDC claims like `email` and `email_verified` by default. To include name and phone claims, make sure the corresponding attributes are configured in your User Pool:

1. In the Cognito console, go to your **User Pool > Sign-up experience > Required attributes**.
2. Ensure `given_name`, `family_name`, and `phone_number` are included as user attributes.
3. In your App Client settings under **Hosted UI**, add `profile` and `phone` to the **OpenID Connect scopes**.

If users were created before these attributes were added, their existing profiles need to be updated with the missing values.

***

### Add custom Shopify claims

To import tags and addresses, you need to add custom claims to the ID token using a [Pre Token Generation Lambda trigger](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-pre-token-generation.html).

#### Create a Pre Token Generation trigger

A Pre Token Generation trigger is a Lambda function that Cognito runs every time it creates an ID token. You can use it to add custom Shopify claims to the token:

1. In the Cognito console, go to your **User Pool > User pool properties > Lambda triggers**.
2. Under **Pre token generation**, select or create a Lambda function.
3. Set the **Trigger event version** to **Basic features + claim and scope customization (v2\_0)**.

**Important:**

You must use the **v2\_0** trigger event version. The v1 trigger event only supports overriding existing claims and suppressing claims — it cannot add new custom claims to the ID token.

You can call DynamoDB, an external API, or any other data source from within the Lambda function. The following example reads from [custom attributes](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-attributes.html#user-pool-settings-custom-attributes) on the Cognito user profile:

```javascript
export const handler = async (event) => {
  const customClaims = {};
  const userAttributes = event.request.userAttributes;


  // Tags: comma-separated string
  if (userAttributes["custom:shopify_tags"]) {
    customClaims["urn:shopify:customer:tags"] = userAttributes["custom:shopify_tags"];
  }


  // Addresses: parse the JSON string into an array
  if (userAttributes["custom:shopify_addresses"]) {
    try {
      customClaims["urn:shopify:customer:addresses"] =
        JSON.parse(userAttributes["custom:shopify_addresses"]);
    } catch (e) {
      // Log the error but don't block sign-in
      console.error("Failed to parse shopify_addresses:", e.message);
    }
  }


  event.response = {
    claimsAndScopeOverrideDetails: {
      idTokenGeneration: {
        claimsToAddOrOverride: customClaims,
      },
    },
  };


  return event;
};
```

For the full list of supported claims and address field formats, refer to the [claim import reference](https://shopify.dev/docs/api/customer-authentication/claim-import).

#### Set up custom user attributes

If you're storing Shopify data in Cognito custom attributes:

1. In the Cognito console, go to your **User Pool > Sign-up experience > Custom attributes**.
2. Add custom attributes such as `custom:shopify_tags` (String) and `custom:shopify_addresses` (String).
3. In your App Client settings, ensure the custom attributes are marked as readable.

**Note:**

Cognito custom attributes have a 2048-character limit. If your address data exceeds this limit, fetch it from an external data source (such as DynamoDB) within the Lambda function instead of storing it as a user attribute.

***

### Enable enrichment in Shopify

After configuring your identity provider to include custom claims, you need to tell Shopify to read and import them. In the Shopify admin under your identity provider settings, enable **Sync customer data** and configure the update trigger and overwrite rules. For details on these options, refer to [claim import configuration](https://shopify.dev/docs/api/customer-authentication/claim-import#configuration).

***

### Verify

After configuring your claims, verify that they're included in the ID token and that Shopify imports them correctly:

1. Use the [Cognito Hosted UI](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-app-integration.html) to sign in as a test user and decode the returned ID token at [jwt.io](https://jwt.io) to confirm your custom claims are present.
2. Authenticate on your store through Cognito.
3. In the Shopify admin, go to **Customers** and open the customer record to confirm the imported data.

***

### Troubleshooting

| Symptom | Cause | Fix |
| - | - | - |
| Custom claims not appearing in ID token | Lambda trigger event version set to v1 | Change the trigger event version to **v2\_0** in the User Pool Lambda trigger configuration |
| Lambda function not invoked | Trigger not assigned to the correct User Pool | Verify the Pre Token Generation trigger is configured under your User Pool's Lambda triggers |
| `custom:` attribute value is null | Attribute not readable by the App Client | In your App Client settings, ensure the custom attribute has read access |
| Address data truncated | Cognito custom attribute 2048-character limit | Fetch address data from an external source (DynamoDB, API) in the Lambda instead of storing it as a user attribute |
| Standard claims (name, phone) not imported | Scopes not configured on App Client | Add `profile` and `phone` to the OpenID Connect scopes in your App Client's Hosted UI settings |

***

### Resources

* [AWS: Pre token generation Lambda trigger](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-pre-token-generation.html)
* [AWS: Use Amazon Cognito to add claims to an identity token](https://aws.amazon.com/blogs/security/use-amazon-cognito-to-add-claims-to-an-identity-token-for-fine-grained-authorization/)
* [AWS: User pool custom attributes](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-attributes.html#user-pool-settings-custom-attributes)
* [AWS: App client settings](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-client-apps.html)
* [Shopify: Claim import reference](https://shopify.dev/docs/api/customer-authentication/claim-import)

***

---



<a id="provider-guides-auth0"></a>


## Auth0

This guide covers how to configure [Auth0](https://auth0.com/) as a third-party identity provider for Shopify customer accounts, including how to add custom Shopify claims to your ID tokens for [customer data enrichment](https://shopify.dev/docs/api/customer-authentication/claim-import).

***

### Prerequisites

* A [Shopify Plus](https://www.shopify.com/plus) plan with [new customer accounts](https://help.shopify.com/en/manual/customers/customer-accounts/new-customer-accounts) enabled.
* An Auth0 tenant with a [Regular Web Application](https://auth0.com/docs/get-started/applications) configured.

***

### Connect Auth0 to Shopify

To connect Auth0 as your store's identity provider, you'll add your Auth0 credentials to the Shopify admin, configure your Auth0 application to accept Shopify's callback URL, and enable refresh tokens.

#### Step 1: Add your Auth0 credentials in the Shopify admin

Add your Discovery URL, Client ID, and Client Secret in the Shopify admin under **Settings** > **Customer accounts** > **Third-party identity provider**.

You can find these values in your Auth0 dashboard:

* **Discovery URL:** `https://{your-domain}.auth0.com/.well-known/openid-configuration` (found in **Applications > your app > Settings > Advanced Settings > Endpoints > OpenID Configuration**). If you use a custom domain, replace with your whitelabeled domain.
* **Client ID:** Found in your application's Settings tab.
* **Client Secret:** Found in your application's Settings tab.

For full setup instructions, refer to [Connect a third-party identity provider](https://help.shopify.com/en/manual/customers/customer-accounts/new-customer-accounts/identity-provider/connect).

#### Step 2: Add your Shopify callback URL to Auth0

To complete the connection, add your Shopify callback URL to the **Allowed Callback URLs** field in your Auth0 application settings.

You can find your Shopify callback URL in the Shopify admin on the same Third-party identity provider settings page from Step 1.

#### Step 3: Add the offline\_​access scope

In the Shopify admin identity provider settings, add `offline_access` to the **Additional scopes** field. Auth0 doesn't include a refresh token by default in the authorization code flow. Without this scope, customer sessions can't be refreshed and expire prematurely.

Also ensure that [refresh token rotation](https://auth0.com/docs/secure/tokens/refresh-tokens) is enabled in your Auth0 application settings.

***

### Standard claims

If your Auth0 user profiles include `given_name`, `family_name`, and `phone_number`, these claims are included in ID tokens automatically. No extra configuration is needed to import names and phone numbers into Shopify customer records.

***

### Add custom Shopify claims

To import tags and addresses, you need to add custom claims to the ID token using an [Auth0 Action](https://auth0.com/docs/customize/actions/triggers/post-login).

#### Create a Post Login Action

A Post Login Action is a function that Auth0 runs after a user authenticates. You can use it to add custom Shopify claims to the ID token:

1. In the Auth0 dashboard, go to **Actions > Library** and click **Build Custom**.
2. Name the action (for example, "Add Shopify claims") and select **Login / Post Login** as the trigger.
3. Add code that reads customer data and sets custom claims on the ID token. The following example reads tags and addresses from `event.user.app_metadata`, but you can also use `event.user.user_metadata` or call an external API within the Action:

```javascript
exports.onExecutePostLogin = async (event, api) => {
  const metadata = event.user.app_metadata;


  // Tags: comma-separated string from app_metadata
  if (metadata.shopify_tags) {
    api.idToken.setCustomClaim(
      "urn:shopify:customer:tags",
      metadata.shopify_tags // e.g. "vip, loyalty-gold"
    );
  }


  // Addresses: array of address objects from app_metadata
  if (metadata.shopify_addresses) {
    api.idToken.setCustomClaim(
      "urn:shopify:customer:addresses",
      metadata.shopify_addresses
      // Expected format: [{ "address1": "123 Main St", "city": "Toronto",
      //   "province_code": "ON", "country_code": "CA", "zip": "M5V 2H1",
      //   "first_name": "Jane", "last_name": "Doe", "default": true }]
    );
  }
};
```

For the full address field format, refer to the [claim import reference](https://shopify.dev/docs/api/customer-authentication/claim-import#addresses).

1. Click **Deploy** to save the Action.
2. Go to **Actions > Flows > Login**, drag your Action into the flow, and click **Apply**.

**Note:**

Auth0 Rules and Hooks are deprecated (EOL November 2026). Use Actions for all new custom claim configurations.

For the full list of supported claims and address field formats, refer to the [claim import reference](https://shopify.dev/docs/api/customer-authentication/claim-import).

***

### Enable enrichment in Shopify

After configuring your identity provider to include custom claims, you need to tell Shopify to read and import them. In the Shopify admin under your identity provider settings, enable **Sync customer data** and configure the update trigger and overwrite rules. For details on these options, refer to [claim import configuration](https://shopify.dev/docs/api/customer-authentication/claim-import#configuration).

***

### Verify

After enabling enrichment, verify that Shopify correctly imports customer data from your Auth0 ID tokens:

1. Authenticate on your store through Auth0.
2. In the Shopify admin, go to **Customers** and open the customer record.
3. Confirm that name, phone, tags, and addresses are populated from the ID token claims.

***

### Troubleshooting

| Symptom | Cause | Fix |
| - | - | - |
| Session expires and customer can't refresh | Missing `offline_access` scope | Add `offline_access` to Additional scopes in the Shopify admin identity provider settings |
| Custom claims not appearing on customer record | Action not deployed or not in the Login flow | In Auth0, verify the Action is deployed and added to the Login flow under Actions > Flows > Login |
| Login fails with "email not verified" error | `email_verified` claim is missing or `false` | Ensure your Auth0 email verification flow is configured and the user has verified their email |
| Standard claims (name, phone) not imported | User profile fields are empty in Auth0 | Populate `given_name`, `family_name`, and `phone_number` in the Auth0 user profile |

***

### Resources

* [Auth0: Adding custom claims to ID tokens with Actions](https://auth0.com/blog/adding-custom-claims-to-id-token-with-auth0-actions/)
* [Auth0: Post-login Action trigger](https://auth0.com/docs/customize/actions/triggers/post-login)
* [Auth0: Applications setup](https://auth0.com/docs/get-started/applications)
* [Auth0: Refresh tokens](https://auth0.com/docs/secure/tokens/refresh-tokens)
* [Shopify: Claim import reference](https://shopify.dev/docs/api/customer-authentication/claim-import)

***

---



<a id="provider-guides-microsoft-entra-id"></a>


## Microsoft Entra ID

This guide covers how to configure [Microsoft Entra ID](https://www.microsoft.com/en-us/security/business/identity-access/microsoft-entra-id) (formerly Azure Active Directory) as a third-party identity provider for Shopify customer accounts, including how to add custom claims to your ID tokens for [customer data enrichment](https://shopify.dev/docs/api/customer-authentication/claim-import).

Shopify includes built-in handling for Entra ID's non-standard OIDC behavior, including email claim mapping and email verification.

***

### Prerequisites

* A [Shopify Plus](https://www.shopify.com/plus) plan with [new customer accounts](https://help.shopify.com/en/manual/customers/customer-accounts/new-customer-accounts) enabled.
* A Microsoft Entra tenant with an [App Registration](https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app) created.
* Token version set to v2.0: in the App Registration manifest, set `accessTokenAcceptedVersion` to `2`.

***

### Connect Entra ID to Shopify

To connect Microsoft Entra ID as your store's identity provider, you'll add your Entra ID credentials to the Shopify admin and configure your App Registration to accept Shopify's callback URL.

#### Step 1: Add your Entra ID credentials in the Shopify admin

Add your Discovery URL, Application (client) ID, and Client Secret in the Shopify admin under **Settings** > **Customer accounts** > **Third-party identity provider**. Select **Microsoft Entra ID** as the provider type.

You can find these values in the Microsoft Entra admin center:

* **Discovery URL:** `https://login.microsoftonline.com/{tenant-id}/v2.0/.well-known/openid-configuration`.
* **Application (client) ID:** Found on the **Overview** page of your App Registration.
* **Client Secret:** Create one under **Certificates & secrets** > **Client secrets**.

**Important:**

Select **Microsoft Entra ID** as the provider type in the Shopify admin. This enables automatic handling of Entra ID's non-standard behavior: Shopify will accept the `mail` or `upn` claim in place of the standard `email` claim, and skip the `email_verified` check that Entra ID doesn't support.

For full setup instructions, refer to [Connect a third-party identity provider](https://help.shopify.com/en/manual/customers/customer-accounts/new-customer-accounts/identity-provider/connect).

#### Step 2: Add your Shopify callback URL to Entra ID

To complete the connection, add your Shopify callback URL as a **Redirect URI** under **Authentication** in your App Registration. This lets Entra ID redirect customers back to your store after they authenticate.

You can find your Shopify callback URL in the Shopify admin on the same **Third-party identity provider** settings page from Step 1.

***

### Standard claims

Entra ID doesn't include profile claims in ID tokens by default. To import names and email, you need to add them as optional claims:

1. In the Entra admin center, go to your **App Registration > Token configuration**.
2. Click **Add optional claim** and select **ID** as the token type.
3. Add the following claims: `given_name`, `family_name`, `email`.
4. When prompted, consent to the required Microsoft Graph permissions.

**Note:**

Entra ID uses the `mail` attribute from the user profile rather than a standard `email` claim. When you select Entra ID as the provider type in Shopify, this mapping is handled automatically.

For more details, refer to [Configure optional claims](https://learn.microsoft.com/en-us/entra/identity-platform/optional-claims).

***

### Add custom Shopify claims

Adding custom claims in Entra ID is more involved than in Auth0 or Okta. The approach depends on the complexity of the claim.

#### Tags (simple claims)

For simple string claims like `urn:shopify:customer:tags`, use a [Claims Mapping Policy](https://learn.microsoft.com/en-us/entra/identity-platform/reference-claims-customization):

1. In the App Registration manifest, set `acceptMappedClaims` to `true`. This is required for Claims Mapping Policies to work.
2. Create a Claims Mapping Policy using [Microsoft Graph](https://learn.microsoft.com/en-us/entra/identity-platform/reference-claims-customization) or PowerShell that maps a user attribute or directory extension to the `urn:shopify:customer:tags` claim in the ID token.

**Important:**

If you don't set `acceptMappedClaims` to `true` in the manifest, you'll get an `AADSTS50146` error during login.

#### Addresses (complex claims)

For structured data like `urn:shopify:customer:addresses`, use a [Custom Authentication Extension](https://learn.microsoft.com/en-us/entra/identity-platform/custom-extension-tokenissuancestart-configuration) with the **TokenIssuanceStart** event type:

1. Create an Azure Function or API endpoint that returns address data in the [Shopify address format](https://shopify.dev/docs/api/customer-authentication/claim-import#addresses).
2. In the Entra admin center, go to **Custom authentication extensions** and create a new extension with the **TokenIssuanceStart** event type.
3. Configure the extension to call your API endpoint and map the response attributes to token claims.
4. Assign the custom attributes as token claims in your App Registration under **Token configuration**.

This approach is more involved than other providers. If you're getting started with customer data enrichment, consider beginning with standard claims (name, email) and tags before implementing address import.

For more details, refer to [Configure a custom claims provider](https://learn.microsoft.com/en-us/entra/identity-platform/custom-extension-tokenissuancestart-configuration).

***

### Enable enrichment in Shopify

After configuring your identity provider to include custom claims, you need to tell Shopify to read and import them.

In the Shopify admin under your identity provider settings, enable **Sync customer data** and configure the update trigger and overwrite rules. For details on these options, refer to [claim import configuration](https://shopify.dev/docs/api/customer-authentication/claim-import#configuration).

***

### Verify

After enabling enrichment, verify that your claims are included in the ID token and that Shopify imports them correctly:

1. Use [jwt.ms](https://jwt.ms) to decode your ID token and verify that custom claims are present before testing on Shopify.
2. Authenticate on your store through Entra ID.
3. In the Shopify admin, go to **Customers** and open the customer record to confirm the imported data.

***

### Troubleshooting

| Symptom | Cause | Fix |
| - | - | - |
| `AADSTS50146` error during login | `acceptMappedClaims` not enabled | In the App Registration manifest, set `acceptMappedClaims` to `true` |
| Claims missing from ID token | Token version set to 1.0 | In the App Registration manifest, set `accessTokenAcceptedVersion` to `2` |
| `email` claim missing | Optional claim not configured, or `mail` attribute empty | Add `email` as an optional claim under Token configuration, and ensure the user's `mail` attribute is populated in Entra |
| `email_verified` error | Provider type not set to Entra ID in Shopify | Select **Microsoft Entra ID** as the provider type in the Shopify admin to bypass the `email_verified` check |
| Custom claims not appearing | Claims Mapping Policy not applied | Verify the policy is assigned to the service principal and that `acceptMappedClaims` is `true` |

***

### Resources

* [Microsoft: Configure optional claims](https://learn.microsoft.com/en-us/entra/identity-platform/optional-claims)
* [Microsoft: Claims customization](https://learn.microsoft.com/en-us/entra/identity-platform/reference-claims-customization)
* [Microsoft: Custom claims provider configuration](https://learn.microsoft.com/en-us/entra/identity-platform/custom-extension-tokenissuancestart-configuration)
* [Microsoft: ID token claims reference](https://learn.microsoft.com/en-us/entra/identity-platform/id-token-claims-reference)
* [Microsoft: Register an application](https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app)
* [Shopify: Claim import reference](https://shopify.dev/docs/api/customer-authentication/claim-import)

***

---



<a id="provider-guides-okta"></a>


## Okta

This guide covers how to configure [Okta](https://www.okta.com/) as a third-party identity provider for Shopify customer accounts, including how to add custom Shopify claims to your ID tokens for [customer data enrichment](https://shopify.dev/docs/api/customer-authentication/claim-import).

***

### Prerequisites

* A [Shopify Plus](https://www.shopify.com/plus) plan with [new customer accounts](https://help.shopify.com/en/manual/customers/customer-accounts/new-customer-accounts) enabled.
* An Okta org with an [OIDC Web Application](https://developer.okta.com/docs/guides/sign-into-web-app-redirect/main/) configured.
* A [Custom Authorization Server](https://developer.okta.com/docs/guides/customize-authz-server/-/main/) (required for custom claims; the default Org Authorization Server doesn't support them).

***

### Connect Okta to Shopify

To connect Okta as your store's identity provider, you'll add your Okta credentials to the Shopify admin, configure your Okta application to accept Shopify's callback URL, and set the correct authentication method.

#### Step 1: Add your Okta credentials in the Shopify admin

Add your Discovery URL, Client ID, and Client Secret in the Shopify admin under **Settings** > **Customer accounts** > **Third-party identity provider**.

You can find these values in your Okta admin dashboard:

* **Discovery URL:** `https://{your-okta-domain}/.well-known/openid-configuration` (or your Custom Authorization Server's discovery URL).
* **Client ID:** Found in your application's **General** tab.
* **Client Secret:** Found in your application's **General** tab.

For full setup instructions, refer to [Connect a third-party identity provider](https://help.shopify.com/en/manual/customers/customer-accounts/new-customer-accounts/identity-provider/connect).

#### Step 2: Add your Shopify callback URL to Okta

To complete the connection, add your Shopify callback URL to the **Sign-in redirect URIs** field in your Okta application settings. This lets Okta redirect customers back to your store after they authenticate.

You can find your Shopify callback URL in the Shopify admin on the same **Third-party identity provider** settings page from Step 1.

#### Step 3: Set the authentication method to client\_​secret\_​post

In your Okta application's **General** tab, under **Client Credentials**, select **Client secret** with `client_secret_post` as the token endpoint authentication method. Okta defaults to `client_secret_basic`, which isn't supported for this flow.

**Important:**

If you skip this step, the token exchange fails during login. Okta must use `client_secret_post` for Shopify's identity provider integration.

***

### Standard claims

Okta may issue "skinny" ID tokens that omit standard profile claims like `given_name`, `family_name`, and `email_verified`. When you select **Okta** as the provider type in the Shopify admin, Shopify automatically makes an additional userinfo call to retrieve these claims. No extra scope or claim configuration is needed for standard profile data to be imported.

***

### Add custom Shopify claims

To import tags and addresses, add custom claims to the ID token. The recommended approach is app-level claims.

#### App-level claims (recommended)

You can add custom claims directly to your Okta application so they're included in every ID token it issues:

1. In the Okta admin, go to **Applications > your application > Sign On**.
2. In the **Token claims (OIDC)** section, click **Add expression**.
3. Add the Shopify custom claims:

| Name | Expression | Include in |
| - | - | - |
| `urn:shopify:customer:tags` | Source attribute or expression | ID Token — Always |
| `urn:shopify:customer:addresses` | Source attribute or expression | ID Token — Always |

The tags claim value must be a comma-separated string (for example, `"vip, loyalty-gold"`). The addresses claim value must be a JSON array matching the [Shopify address format](https://shopify.dev/docs/api/customer-authentication/claim-import#addresses).

#### Authorization Server claims (alternative)

If you prefer server-level claims that apply across applications:

1. Go to **Security > API > Authorization Servers** and select your Custom Authorization Server.
2. On the **Claims** tab, click **Add Claim**.
3. Set **Include in token type** to **ID Token**.
4. Enter the claim name (for example, `urn:shopify:customer:tags`) and the value expression.

For more details, refer to [OAuth 2.0 and OpenID Connect claims](https://developer.okta.com/docs/concepts/oauth-claims/).

***

### Enable enrichment in Shopify

After configuring your identity provider to include custom claims, you need to tell Shopify to read and import them.

In the Shopify admin under your identity provider settings, enable **Sync customer data** and configure the update trigger and overwrite rules. For details on these options, refer to [claim import configuration](https://shopify.dev/docs/api/customer-authentication/claim-import#configuration).

***

### Verify

After enabling enrichment, verify that your claims are included in the ID token and that Shopify imports them correctly:

1. Use Okta's **Token Preview** (under **Security > API > Authorization Servers > your server > Token Preview**) to validate that your custom claims appear in the ID token before testing on Shopify.
2. Authenticate on your store through Okta.
3. In the Shopify admin, go to **Customers** and open the customer record to confirm the imported data.

***

### Troubleshooting

| Symptom | Cause | Fix |
| - | - | - |
| Token exchange fails during login | Authentication method set to `client_secret_basic` | Change to `client_secret_post` in your Okta application's General tab under Client Credentials |
| Standard claims (name, phone) not imported | Provider type not set to Okta in Shopify | Select **Okta** as the provider type in the Shopify admin so Shopify makes the additional userinfo call to retrieve standard claims from skinny ID tokens |
| Custom claims not appearing | Using the Org Authorization Server | Custom claims require a Custom Authorization Server. Create one under Security > API > Authorization Servers |
| Claim expression returns null | Invalid Okta Expression Language syntax | Test the expression in Token Preview before deploying |

***

### Resources

* [Okta: Customize tokens returned from Okta](https://developer.okta.com/docs/guides/customize-tokens-returned-from-okta/main/)
* [Okta: Create an authorization server](https://developer.okta.com/docs/guides/customize-authz-server/-/main/)
* [Okta: OAuth 2.0 and OpenID Connect claims](https://developer.okta.com/docs/concepts/oauth-claims/)
* [Okta: Sign users in to your web app](https://developer.okta.com/docs/guides/sign-into-web-app-redirect/main/)
* [Shopify: Claim import reference](https://shopify.dev/docs/api/customer-authentication/claim-import)

***

---
