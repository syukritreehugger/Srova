# Shopify Shopify Cli Reference (Indonesian / English)

> Referensi lengkap **Shopify Cli** Shopify API yang disusun ulang dari https://shopify.dev/docs/api/shopify-cli.
> Dokumen ini dirancang untuk pengembang berbahasa Indonesia, namun seluruh konten teknis (skema, tipe, nama field, contoh kode) dipertahankan dalam bahasa Inggris asli untuk memastikan akurasi.

| Item | Nilai |
|------|-------|
| Sumber | `https://shopify.dev/docs/api/shopify-cli` |
| Total halaman | **93** |
| Tanggal kompilasi | 2026-05-01 |
| Bahasa | Indonesia (intro/ToC) + English (konten teknis) |



## Daftar Isi (Table of Contents)

- [Landing](#landing)
- [app](#app)
- [app / app-build](#app-app-build)
- [app / app-bulk-cancel](#app-app-bulk-cancel)
- [app / app-bulk-execute](#app-app-bulk-execute)
- [app / app-bulk-status](#app-app-bulk-status)
- [app / app-config-link](#app-app-config-link)
- [app / app-config-pull](#app-app-config-pull)
- [app / app-config-use](#app-app-config-use)
- [app / app-config-validate](#app-app-config-validate)
- [app / app-deploy](#app-app-deploy)
- [app / app-dev](#app-app-dev)
- [app / app-dev-clean](#app-app-dev-clean)
- [app / app-env-pull](#app-app-env-pull)
- [app / app-env-show](#app-app-env-show)
- [app / app-execute](#app-app-execute)
- [app / app-function-build](#app-app-function-build)
- [app / app-function-info](#app-app-function-info)
- [app / app-function-replay](#app-app-function-replay)
- [app / app-function-run](#app-app-function-run)
- [app / app-function-schema](#app-app-function-schema)
- [app / app-function-typegen](#app-app-function-typegen)
- [app / app-generate-extension](#app-app-generate-extension)
- [app / app-import-custom-data-definitions](#app-app-import-custom-data-definitions)
- [app / app-import-extensions](#app-app-import-extensions)
- [app / app-info](#app-app-info)
- [app / app-init](#app-app-init)
- [app / app-logs](#app-app-logs)
- [app / app-logs-sources](#app-app-logs-sources)
- [app / app-release](#app-app-release)
- [app / app-versions-list](#app-app-versions-list)
- [app / app-webhook-trigger](#app-app-webhook-trigger)
- [general-commands](#general-commands)
- [general-commands / auth-login](#general-commands-auth-login)
- [general-commands / auth-logout](#general-commands-auth-logout)
- [general-commands / commands](#general-commands-commands)
- [general-commands / config-autocorrect-off](#general-commands-config-autocorrect-off)
- [general-commands / config-autocorrect-on](#general-commands-config-autocorrect-on)
- [general-commands / config-autocorrect-status](#general-commands-config-autocorrect-status)
- [general-commands / help](#general-commands-help)
- [general-commands / organization-list](#general-commands-organization-list)
- [general-commands / search](#general-commands-search)
- [general-commands / upgrade](#general-commands-upgrade)
- [general-commands / version](#general-commands-version)
- [hydrogen](#hydrogen)
- [hydrogen / hydrogen-build](#hydrogen-hydrogen-build)
- [hydrogen / hydrogen-check](#hydrogen-hydrogen-check)
- [hydrogen / hydrogen-codegen](#hydrogen-hydrogen-codegen)
- [hydrogen / hydrogen-customer-account-push](#hydrogen-hydrogen-customer-account-push)
- [hydrogen / hydrogen-debug-cpu](#hydrogen-hydrogen-debug-cpu)
- [hydrogen / hydrogen-deploy](#hydrogen-hydrogen-deploy)
- [hydrogen / hydrogen-dev](#hydrogen-hydrogen-dev)
- [hydrogen / hydrogen-env-list](#hydrogen-hydrogen-env-list)
- [hydrogen / hydrogen-env-pull](#hydrogen-hydrogen-env-pull)
- [hydrogen / hydrogen-env-push](#hydrogen-hydrogen-env-push)
- [hydrogen / hydrogen-generate-route](#hydrogen-hydrogen-generate-route)
- [hydrogen / hydrogen-generate-routes](#hydrogen-hydrogen-generate-routes)
- [hydrogen / hydrogen-init](#hydrogen-hydrogen-init)
- [hydrogen / hydrogen-link](#hydrogen-hydrogen-link)
- [hydrogen / hydrogen-list](#hydrogen-hydrogen-list)
- [hydrogen / hydrogen-login](#hydrogen-hydrogen-login)
- [hydrogen / hydrogen-logout](#hydrogen-hydrogen-logout)
- [hydrogen / hydrogen-preview](#hydrogen-hydrogen-preview)
- [hydrogen / hydrogen-setup](#hydrogen-hydrogen-setup)
- [hydrogen / hydrogen-setup-css](#hydrogen-hydrogen-setup-css)
- [hydrogen / hydrogen-setup-markets](#hydrogen-hydrogen-setup-markets)
- [hydrogen / hydrogen-setup-vite](#hydrogen-hydrogen-setup-vite)
- [hydrogen / hydrogen-shortcut](#hydrogen-hydrogen-shortcut)
- [hydrogen / hydrogen-unlink](#hydrogen-hydrogen-unlink)
- [hydrogen / hydrogen-upgrade](#hydrogen-hydrogen-upgrade)
- [store](#store)
- [store / store-auth](#store-store-auth)
- [store / store-execute](#store-store-execute)
- [theme](#theme)
- [theme / theme-check](#theme-theme-check)
- [theme / theme-console](#theme-theme-console)
- [theme / theme-delete](#theme-theme-delete)
- [theme / theme-dev](#theme-theme-dev)
- [theme / theme-duplicate](#theme-theme-duplicate)
- [theme / theme-info](#theme-theme-info)
- [theme / theme-init](#theme-theme-init)
- [theme / theme-language-server](#theme-theme-language-server)
- [theme / theme-list](#theme-theme-list)
- [theme / theme-metafields-pull](#theme-theme-metafields-pull)
- [theme / theme-open](#theme-theme-open)
- [theme / theme-package](#theme-theme-package)
- [theme / theme-preview](#theme-theme-preview)
- [theme / theme-profile](#theme-theme-profile)
- [theme / theme-publish](#theme-theme-publish)
- [theme / theme-pull](#theme-theme-pull)
- [theme / theme-push](#theme-theme-push)
- [theme / theme-rename](#theme-theme-rename)
- [theme / theme-share](#theme-theme-share)


---



<a id="landing"></a>


## Shopify CLI

Shopify CLI is a command-line interface tool that helps you generate and work with Shopify apps, themes and custom storefronts. You can also use it to automate many common development tasks.

### Requirements

* [Node.js](https://nodejs.org/en/download/): 20.10 or higher
* A Node.js package manager: [npm](https://www.npmjs.com/get-npm), [Yarn 1.x](https://classic.yarnpkg.com/lang/en/docs/install), or [pnpm](https://pnpm.io/installation).
* [Git](https://git-scm.com/downloads): 2.28.0 or higher

***

### Installation

This installs Shopify CLI globally on your system, so you can run `shopify` commands from any directory. Find out more about the available commands by running `shopify` in your terminal.

### Code

###### npm

```sh
npm install -g @shopify/cli@latest
```

###### yarn

```sh
yarn global add @shopify/cli@latest
```

###### pnpm

```sh
pnpm install -g @shopify/cli@latest
```

###### homebrew

```sh
# Only for macOS
brew tap shopify/shopify
brew install shopify-cli
```

***

### Commands

Shopify CLI groups commands into topics. The command syntax is: `shopify [topic] [command]`. Refer to each topic section in the sidebar for a list of available commands.

Or, run the `help` command to get this information right in your terminal.

### terminal

```sh
shopify help
```

***

### Upgrade Shopify CLI

We recommend that you always use the latest version of Shopify CLI if possible. To upgrade, run `version` to check the current version and determine if there are any updates available. Run the [install](#installation) command to upgrade to the latest CLI version.

### terminal

```sh
shopify version
> Current Shopify CLI version: 3.50.0
> 💡 Version 3.51.0 available!


npm install -g @shopify/cli@latest
```

***

### Network proxy configuration

When working behind a network proxy, you can configure Shopify CLI (version 3.78+) to route connections through it:

1. Set the proxy for HTTP traffic:

   ```bash
   export SHOPIFY_HTTP_PROXY=http://proxy.com:8080
   ```

2. Optionally, set a different proxy for HTTPS traffic:

   ```bash
   export SHOPIFY_HTTPS_PROXY=https://secure-proxy.com:8443
   ```

   If not specified, the HTTP proxy will be used for all traffic.

3. For authenticated proxies, include credentials in the URL:

   ```bash
   export SHOPIFY_HTTP_PROXY=http://username:password@proxy.com:8080
   ```

***

### Usage reporting

Anonymous usage statistics are collected by default. To opt out, you can use the environment variable `SHOPIFY_CLI_NO_ANALYTICS=1`.

***

### Contribute to Shopify CLI

Shopify CLI is open source. [Learn how to contribute](https://github.com/Shopify/cli/wiki/Contributors:-Introduction) to our GitHub repository.

***

### Where to get help

* [Shopify CLI and Libraries](https://community.shopify.dev/c/shopify-cli-libraries/14) - Report any issues with the CLI.
* [Dev Platform](https://community.shopify.dev/c/dev-platform/32) - Ask any questions and learn more about the Dev Platform powering the CLI.

***

### Resources

[Start building a theme\
\
](https://shopify.dev/docs/themes/getting-started/create)

[Learn how to set up your theme development environment and create a new theme](https://shopify.dev/docs/themes/getting-started/create)

[Start building an app\
\
](https://shopify.dev/docs/apps/getting-started/create)

[Learn how to set up your app development environment and start building](https://shopify.dev/docs/apps/getting-started/create)

***

---



<a id="app"></a>


## Shopify CLI App commands

[app build](https://shopify.dev/docs/api/shopify-cli/app/app-build)

[This command executes the build script specified in the element's TOML file.](https://shopify.dev/docs/api/shopify-cli/app/app-build)

[app bulk cancel](https://shopify.dev/docs/api/shopify-cli/app/app-bulk-cancel)

[Cancels a running bulk operation by ID.](https://shopify.dev/docs/api/shopify-cli/app/app-bulk-cancel)

[app bulk execute](https://shopify.dev/docs/api/shopify-cli/app/app-bulk-execute)

[Executes an Admin API GraphQL query or mutation on the specified store, as a bulk operation.](https://shopify.dev/docs/api/shopify-cli/app/app-bulk-execute)

[app bulk status](https://shopify.dev/docs/api/shopify-cli/app/app-bulk-status)

[Check the status of a specific bulk operation by ID, or list all bulk operations belonging to this app on this store in the last 7 days.](https://shopify.dev/docs/api/shopify-cli/app/app-bulk-status)

[app config link](https://shopify.dev/docs/api/shopify-cli/app/app-config-link)

[Pulls app configuration from the Developer Dashboard and creates or overwrites a configuration file.](https://shopify.dev/docs/api/shopify-cli/app/app-config-link)

[app config pull](https://shopify.dev/docs/api/shopify-cli/app/app-config-pull)

[Pulls the latest configuration from the already-linked Shopify app and updates the selected configuration file.](https://shopify.dev/docs/api/shopify-cli/app/app-config-pull)

[app config use](https://shopify.dev/docs/api/shopify-cli/app/app-config-use)

[Sets default configuration when you run app-related CLI commands.](https://shopify.dev/docs/api/shopify-cli/app/app-config-use)

[app config validate](https://shopify.dev/docs/api/shopify-cli/app/app-config-validate)

[Validates the selected app configuration file and all extension configurations against their schemas and reports any errors found.](https://shopify.dev/docs/api/shopify-cli/app/app-config-validate)

[app deploy](https://shopify.dev/docs/api/shopify-cli/app/app-deploy)

[Builds the app, then deploys your app configuration and extensions.](https://shopify.dev/docs/api/shopify-cli/app/app-deploy)

[app dev clean](https://shopify.dev/docs/api/shopify-cli/app/app-dev-clean)

[Stop the dev preview that was started with shopify app dev.](https://shopify.dev/docs/api/shopify-cli/app/app-dev-clean)

[app dev](https://shopify.dev/docs/api/shopify-cli/app/app-dev)

[Builds and previews your app on a dev store, and watches for changes.](https://shopify.dev/docs/api/shopify-cli/app/app-dev)

[app env pull](https://shopify.dev/docs/api/shopify-cli/app/app-env-pull)

[Creates or updates an .env files that contains app and app extension environment variables.](https://shopify.dev/docs/api/shopify-cli/app/app-env-pull)

[app env show](https://shopify.dev/docs/api/shopify-cli/app/app-env-show)

[Displays environment variables that can be used to deploy apps and app extensions.](https://shopify.dev/docs/api/shopify-cli/app/app-env-show)

[app execute](https://shopify.dev/docs/api/shopify-cli/app/app-execute)

[Executes an Admin API GraphQL query or mutation on the specified store.](https://shopify.dev/docs/api/shopify-cli/app/app-execute)

[app function build](https://shopify.dev/docs/api/shopify-cli/app/app-function-build)

[Compiles the function in your current directory to WebAssembly (Wasm) for testing purposes.](https://shopify.dev/docs/api/shopify-cli/app/app-function-build)

[app function info](https://shopify.dev/docs/api/shopify-cli/app/app-function-info)

[The information returned includes the following:](https://shopify.dev/docs/api/shopify-cli/app/app-function-info)

[app function replay](https://shopify.dev/docs/api/shopify-cli/app/app-function-replay)

[Runs the function from your current directory for testing purposes.](https://shopify.dev/docs/api/shopify-cli/app/app-function-replay)

[app function run](https://shopify.dev/docs/api/shopify-cli/app/app-function-run)

[Runs the function from your current directory for testing purposes.](https://shopify.dev/docs/api/shopify-cli/app/app-function-run)

[app function schema](https://shopify.dev/docs/api/shopify-cli/app/app-function-schema)

[Generates the latest GraphQL schema for a function in your app.](https://shopify.dev/docs/api/shopify-cli/app/app-function-schema)

[app function typegen](https://shopify.dev/docs/api/shopify-cli/app/app-function-typegen)

[Creates GraphQL types based on your input query for a function.](https://shopify.dev/docs/api/shopify-cli/app/app-function-typegen)

[app generate extension](https://shopify.dev/docs/api/shopify-cli/app/app-generate-extension)

[Generates a new app extension.](https://shopify.dev/docs/api/shopify-cli/app/app-generate-extension)

[app import-custom-data-definitions](https://shopify.dev/docs/api/shopify-cli/app/app-import-custom-data-definitions)

[Import metafield and metaobject definitions from your development store.](https://shopify.dev/docs/api/shopify-cli/app/app-import-custom-data-definitions)

[app import-extensions](https://shopify.dev/docs/api/shopify-cli/app/app-import-extensions)

[Import dashboard-managed extensions into your app.](https://shopify.dev/docs/api/shopify-cli/app/app-import-extensions)

[app info](https://shopify.dev/docs/api/shopify-cli/app/app-info)

[The information returned includes the following:](https://shopify.dev/docs/api/shopify-cli/app/app-info)

[app init](https://shopify.dev/docs/api/shopify-cli/app/app-init)

[Create a new app project](https://shopify.dev/docs/api/shopify-cli/app/app-init)

[app logs sources](https://shopify.dev/docs/api/shopify-cli/app/app-logs-sources)

[The output source names can be used with the --source argument of shopify app logs to filter log output.](https://shopify.dev/docs/api/shopify-cli/app/app-logs-sources)

[app logs](https://shopify.dev/docs/api/shopify-cli/app/app-logs)

[Opens a real-time stream of detailed app logs from the selected app and store.](https://shopify.dev/docs/api/shopify-cli/app/app-logs)

[app release](https://shopify.dev/docs/api/shopify-cli/app/app-release)

[Releases an existing app version.](https://shopify.dev/docs/api/shopify-cli/app/app-release)

[app versions list](https://shopify.dev/docs/api/shopify-cli/app/app-versions-list)

[Lists the deployed app versions.](https://shopify.dev/docs/api/shopify-cli/app/app-versions-list)

[app webhook trigger](https://shopify.dev/docs/api/shopify-cli/app/app-webhook-trigger)

[Triggers the delivery of a sample Admin API event topic payload to a designated address.](https://shopify.dev/docs/api/shopify-cli/app/app-webhook-trigger)

***

---



<a id="app-app-build"></a>


## app build

This command executes the build script specified in the element's TOML file. You can specify a custom script in the file. To learn about configuration files in Shopify apps, refer to [App configuration](https://shopify.dev/docs/apps/tools/cli/configuration).

If you're building a [theme app extension](https://shopify.dev/docs/apps/online-store/theme-app-extensions), then running the `build` command runs [Theme Check](https://shopify.dev/docs/themes/tools/theme-check) against your extension to ensure that it's valid.

##### Flags

The following flags are available for the `app build` command:

* **--client-id \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_CLIENT\_ID**

  The Client ID of your app.

* **--no-color**

  **env: SHOPIFY\_FLAG\_NO\_COLOR**

  Disable color output.

* **--path \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_PATH**

  The path to your app directory.

* **--reset**

  **env: SHOPIFY\_FLAG\_RESET**

  Reset all your settings.

* **--skip-dependencies-installation**

  **env: SHOPIFY\_FLAG\_SKIP\_DEPENDENCIES\_INSTALLATION**

  Skips the installation of dependencies. Deprecated, use workspaces instead.

* **--verbose**

  **env: SHOPIFY\_FLAG\_VERBOSE**

  Increase the verbosity of the output.

* **-c, --config \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_APP\_CONFIG**

  The name of the app configuration.

Examples

#### Examples

* ####

  ##### app build

  ```sh
  shopify app build [flags]
  ```

***

---



<a id="app-app-bulk-cancel"></a>


## app bulk cancel

Cancels a running bulk operation by ID.

##### Flags

The following flags are available for the `app bulk cancel` command:

* **--id \<value>**

  **string**

  **required**

  **env: SHOPIFY\_FLAG\_ID**

  The bulk operation ID to cancel (numeric ID or full GID).

* **--client-id \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_CLIENT\_ID**

  The Client ID of your app.

* **--no-color**

  **env: SHOPIFY\_FLAG\_NO\_COLOR**

  Disable color output.

* **--path \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_PATH**

  The path to your app directory.

* **--reset**

  **env: SHOPIFY\_FLAG\_RESET**

  Reset all your settings.

* **--verbose**

  **env: SHOPIFY\_FLAG\_VERBOSE**

  Increase the verbosity of the output.

* **-c, --config \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_APP\_CONFIG**

  The name of the app configuration.

* **-s, --store \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_STORE**

  The store domain. Must be an existing dev store.

Examples

#### Examples

* ####

  ##### app bulk cancel

  ```sh
  shopify app bulk cancel [flags]
  ```

***

---



<a id="app-app-bulk-execute"></a>


## app bulk execute

Executes an Admin API GraphQL query or mutation on the specified store, as a bulk operation. Mutations are only allowed on dev stores.

Bulk operations allow you to process large amounts of data asynchronously. Learn more about [bulk query operations](https://shopify.dev/docs/api/usage/bulk-operations/queries) and [bulk mutation operations](https://shopify.dev/docs/api/usage/bulk-operations/imports).

Use [`bulk status`](https://shopify.dev/docs/api/shopify-cli/app/app-bulk-status) to check the status of your bulk operations.

##### Flags

The following flags are available for the `app bulk execute` command:

* **--client-id \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_CLIENT\_ID**

  The Client ID of your app.

* **--no-color**

  **env: SHOPIFY\_FLAG\_NO\_COLOR**

  Disable color output.

* **--output-file \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_OUTPUT\_FILE**

  The file path where results should be written if --watch is specified. If not specified, results will be written to STDOUT.

* **--path \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_PATH**

  The path to your app directory.

* **--query-file \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_QUERY\_FILE**

  Path to a file containing the GraphQL query or mutation. Can't be used with --query.

* **--reset**

  **env: SHOPIFY\_FLAG\_RESET**

  Reset all your settings.

* **--variable-file \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_VARIABLE\_FILE**

  Path to a file containing GraphQL variables in JSONL format (one JSON object per line). Can't be used with --variables.

* **--verbose**

  **env: SHOPIFY\_FLAG\_VERBOSE**

  Increase the verbosity of the output.

* **--version \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_VERSION**

  The API version to use for the bulk operation. If not specified, uses the latest stable version.

* **--watch**

  **env: SHOPIFY\_FLAG\_WATCH**

  Wait for bulk operation results before exiting. Defaults to false.

* **-c, --config \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_APP\_CONFIG**

  The name of the app configuration.

* **-q, --query \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_QUERY**

  The GraphQL query or mutation to run as a bulk operation.

* **-s, --store \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_STORE**

  The store domain. Must be an existing dev store.

* **-v, --variables \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_VARIABLES**

  The values for any GraphQL variables in your mutation, in JSON format. Can be specified multiple times.

Examples

#### Examples

* ####

  ##### app bulk execute

  ```sh
  shopify app bulk execute [flags]
  ```

***

---



<a id="app-app-bulk-status"></a>


## app bulk status

Check the status of a specific bulk operation by ID, or list all bulk operations belonging to this app on this store in the last 7 days.

Bulk operations allow you to process large amounts of data asynchronously. Learn more about [bulk query operations](https://shopify.dev/docs/api/usage/bulk-operations/queries) and [bulk mutation operations](https://shopify.dev/docs/api/usage/bulk-operations/imports).

Use [`bulk execute`](https://shopify.dev/docs/api/shopify-cli/app/app-bulk-execute) to start a new bulk operation.

##### Flags

The following flags are available for the `app bulk status` command:

* **--client-id \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_CLIENT\_ID**

  The Client ID of your app.

* **--id \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_ID**

  The bulk operation ID (numeric ID or full GID). If not provided, lists all bulk operations belonging to this app on this store in the last 7 days.

* **--no-color**

  **env: SHOPIFY\_FLAG\_NO\_COLOR**

  Disable color output.

* **--path \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_PATH**

  The path to your app directory.

* **--reset**

  **env: SHOPIFY\_FLAG\_RESET**

  Reset all your settings.

* **--verbose**

  **env: SHOPIFY\_FLAG\_VERBOSE**

  Increase the verbosity of the output.

* **-c, --config \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_APP\_CONFIG**

  The name of the app configuration.

* **-s, --store \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_STORE**

  The store domain. Must be an existing dev store.

Examples

#### Examples

* ####

  ##### app bulk status

  ```sh
  shopify app bulk status [flags]
  ```

***

---



<a id="app-app-config-link"></a>


## app config link

Pulls app configuration from the Developer Dashboard and creates or overwrites a configuration file. You can create a new app with this command to start with a default configuration file.

For more information on the format of the created TOML configuration file, refer to the [App configuration](https://shopify.dev/docs/apps/tools/cli/configuration) page.

##### Flags

The following flags are available for the `app config link` command:

* **--client-id \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_CLIENT\_ID**

  The Client ID of your app.

* **--no-color**

  **env: SHOPIFY\_FLAG\_NO\_COLOR**

  Disable color output.

* **--path \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_PATH**

  The path to your app directory.

* **--reset**

  **env: SHOPIFY\_FLAG\_RESET**

  Reset all your settings.

* **--verbose**

  **env: SHOPIFY\_FLAG\_VERBOSE**

  Increase the verbosity of the output.

* **-c, --config \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_APP\_CONFIG**

  The name of the app configuration.

Examples

#### Examples

* ####

  ##### app config link

  ```sh
  shopify app config link [flags]
  ```

***

---



<a id="app-app-config-pull"></a>


## app config pull

Pulls the latest configuration from the already-linked Shopify app and updates the selected configuration file.

This command reuses the existing linked app and organization and skips all interactive prompts. Use `--config` to target a specific configuration file, or omit it to use the default one.

##### Flags

The following flags are available for the `app config pull` command:

* **--client-id \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_CLIENT\_ID**

  The Client ID of your app.

* **--no-color**

  **env: SHOPIFY\_FLAG\_NO\_COLOR**

  Disable color output.

* **--path \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_PATH**

  The path to your app directory.

* **--reset**

  **env: SHOPIFY\_FLAG\_RESET**

  Reset all your settings.

* **--verbose**

  **env: SHOPIFY\_FLAG\_VERBOSE**

  Increase the verbosity of the output.

* **-c, --config \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_APP\_CONFIG**

  The name of the app configuration.

Examples

#### Examples

* ####

  ##### app config pull

  ```sh
  shopify app config pull [flags]
  ```

***

---



<a id="app-app-config-use"></a>


## app config use

Sets default configuration when you run app-related CLI commands. If you omit the `config-name` parameter, then you'll be prompted to choose from the configuration files in your project.

##### Flags

The following flags are available for the `app config use` command:

* **--client-id \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_CLIENT\_ID**

  The Client ID of your app.

* **--no-color**

  **env: SHOPIFY\_FLAG\_NO\_COLOR**

  Disable color output.

* **--path \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_PATH**

  The path to your app directory.

* **--reset**

  **env: SHOPIFY\_FLAG\_RESET**

  Reset all your settings.

* **--verbose**

  **env: SHOPIFY\_FLAG\_VERBOSE**

  Increase the verbosity of the output.

Examples

#### Examples

* ####

  ##### app config use

  ```sh
  shopify app config use [config] [flags]
  ```

***

---



<a id="app-app-config-validate"></a>


## app config validate

Validates the selected app configuration file and all extension configurations against their schemas and reports any errors found.

##### Flags

The following flags are available for the `app config validate` command:

* **--client-id \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_CLIENT\_ID**

  The Client ID of your app.

* **--no-color**

  **env: SHOPIFY\_FLAG\_NO\_COLOR**

  Disable color output.

* **--path \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_PATH**

  The path to your app directory.

* **--reset**

  **env: SHOPIFY\_FLAG\_RESET**

  Reset all your settings.

* **--verbose**

  **env: SHOPIFY\_FLAG\_VERBOSE**

  Increase the verbosity of the output.

* **-c, --config \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_APP\_CONFIG**

  The name of the app configuration.

* **-j, --json**

  **env: SHOPIFY\_FLAG\_JSON**

  Output the result as JSON. Automatically disables color output.

Examples

#### Examples

* ####

  ##### app config validate

  ```sh
  shopify app config validate [flags]
  ```

***

---



<a id="app-app-deploy"></a>


## app deploy

[Builds the app](https://shopify.dev/docs/api/shopify-cli/app/app-build), then deploys your app configuration and extensions.

This command creates an app version, which is a snapshot of your app configuration and all extensions. This version is then released to users.

This command doesn't deploy your [web app](https://shopify.dev/docs/apps/tools/cli/structure#web-components). You need to [deploy your web app](https://shopify.dev/docs/apps/deployment/web) to your own hosting solution.

##### Flags

The following flags are available for the `app deploy` command:

* **--allow-deletes**

  **env: SHOPIFY\_FLAG\_ALLOW\_DELETES**

  Allows removing extensions and configuration without requiring user confirmation. For CI/CD environments, the recommended flag is --allow-updates.

* **--allow-updates**

  **env: SHOPIFY\_FLAG\_ALLOW\_UPDATES**

  Allows adding and updating extensions and configuration without requiring user confirmation. Recommended option for CI/CD environments.

* **--client-id \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_CLIENT\_ID**

  The Client ID of your app.

* **--message \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_MESSAGE**

  Optional message that will be associated with this version. This is for internal use only and won't be available externally.

* **--no-build**

  **env: SHOPIFY\_FLAG\_NO\_BUILD**

  Use with caution: Skips building any elements of the app that require building. You should ensure your app has been prepared in advance, such as by running `shopify app build` or by caching build artifacts.

* **--no-color**

  **env: SHOPIFY\_FLAG\_NO\_COLOR**

  Disable color output.

* **--no-release**

  **env: SHOPIFY\_FLAG\_NO\_RELEASE**

  Creates a version but doesn't release it - it's not made available to merchants. With this flag, a user confirmation is not required.

* **--path \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_PATH**

  The path to your app directory.

* **--reset**

  **env: SHOPIFY\_FLAG\_RESET**

  Reset all your settings.

* **--source-control-url \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_SOURCE\_CONTROL\_URL**

  URL associated with the new app version.

* **--verbose**

  **env: SHOPIFY\_FLAG\_VERBOSE**

  Increase the verbosity of the output.

* **--version \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_VERSION**

  Optional version tag that will be associated with this app version. If not provided, an auto-generated identifier will be generated for this app version.

* **-c, --config \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_APP\_CONFIG**

  The name of the app configuration.

* **-f, --force**

  **env: SHOPIFY\_FLAG\_FORCE**

  \[Deprecated] Deploy without asking for confirmation. Equivalent to --allow-updates --allow-deletes. Use --allow-updates for CI/CD environments instead.

Examples

#### Examples

* ####

  ##### app deploy

  ```sh
  shopify app deploy [flags]
  ```

***

---



<a id="app-app-dev"></a>


## app dev

Builds and previews your app on a dev store, and watches for changes. [Read more about testing apps locally](https://shopify.dev/docs/apps/build/cli-for-apps/test-apps-locally).

##### Flags

The following flags are available for the `app dev` command:

* **--checkout-cart-url \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_CHECKOUT\_CART\_URL**

  Resource URL for checkout UI extension. Format: "/cart/{productVariantID}:{productQuantity}"

* **--client-id \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_CLIENT\_ID**

  The Client ID of your app.

* **--localhost-port \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_LOCALHOST\_PORT**

  Port to use for localhost.

* **--no-color**

  **env: SHOPIFY\_FLAG\_NO\_COLOR**

  Disable color output.

* **--no-update**

  **env: SHOPIFY\_FLAG\_NO\_UPDATE**

  Uses the app URL from the toml file instead an autogenerated URL for dev.

* **--notify \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_NOTIFY**

  The file path or URL. The file path is to a file that you want updated on idle. The URL path is where you want a webhook posted to report on file changes.

* **--path \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_PATH**

  The path to your app directory.

* **--reset**

  **env: SHOPIFY\_FLAG\_RESET**

  Reset all your settings.

* **--skip-dependencies-installation**

  **env: SHOPIFY\_FLAG\_SKIP\_DEPENDENCIES\_INSTALLATION**

  Skips the installation of dependencies. Deprecated, use workspaces instead.

* **--subscription-product-url \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_SUBSCRIPTION\_PRODUCT\_URL**

  Resource URL for subscription UI extension. Format: "/products/{productId}"

* **--theme-app-extension-port \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_THEME\_APP\_EXTENSION\_PORT**

  Local port of the theme app extension development server.

* **--tunnel-url \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_TUNNEL\_URL**

  Use a custom tunnel, it must be running before executing dev. Format: "<https://my-tunnel-url:port>".

* **--use-localhost**

  **env: SHOPIFY\_FLAG\_USE\_LOCALHOST**

  Service entry point will listen to localhost. A tunnel won't be used. Will work for testing many app features, but not those that directly invoke your app (E.g: Webhooks)

* **--verbose**

  **env: SHOPIFY\_FLAG\_VERBOSE**

  Increase the verbosity of the output.

* **-c, --config \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_APP\_CONFIG**

  The name of the app configuration.

* **-s, --store \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_STORE**

  Store URL. Must be an existing development or Shopify Plus sandbox store.

* **-t, --theme \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_THEME**

  Theme ID or name of the theme app extension host theme.

Examples

#### Examples

* ####

  ##### app dev

  ```sh
  shopify app dev [flags]
  ```

***

---



<a id="app-app-dev-clean"></a>


## app dev clean

Stop the dev preview that was started with `shopify app dev`.

It restores the app's active version to the selected development store.

##### Flags

The following flags are available for the `app dev clean` command:

* **--client-id \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_CLIENT\_ID**

  The Client ID of your app.

* **--no-color**

  **env: SHOPIFY\_FLAG\_NO\_COLOR**

  Disable color output.

* **--path \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_PATH**

  The path to your app directory.

* **--reset**

  **env: SHOPIFY\_FLAG\_RESET**

  Reset all your settings.

* **--verbose**

  **env: SHOPIFY\_FLAG\_VERBOSE**

  Increase the verbosity of the output.

* **-c, --config \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_APP\_CONFIG**

  The name of the app configuration.

* **-s, --store \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_STORE**

  Store URL. Must be an existing development store.

Examples

#### Examples

* ####

  ##### app dev clean

  ```sh
  shopify app dev clean [flags]
  ```

***

---



<a id="app-app-env-pull"></a>


## app env pull

Creates or updates an `.env` files that contains app and app extension environment variables.

When an existing `.env` file is updated, changes to the variables are displayed in the terminal output. Existing variables and commented variables are preserved.

##### Flags

The following flags are available for the `app env pull` command:

* **--client-id \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_CLIENT\_ID**

  The Client ID of your app.

* **--env-file \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_ENV\_FILE**

  Specify an environment file to update if the update flag is set

* **--no-color**

  **env: SHOPIFY\_FLAG\_NO\_COLOR**

  Disable color output.

* **--path \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_PATH**

  The path to your app directory.

* **--reset**

  **env: SHOPIFY\_FLAG\_RESET**

  Reset all your settings.

* **--verbose**

  **env: SHOPIFY\_FLAG\_VERBOSE**

  Increase the verbosity of the output.

* **-c, --config \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_APP\_CONFIG**

  The name of the app configuration.

Examples

#### Examples

* ####

  ##### app env pull

  ```sh
  shopify app env pull [flags]
  ```

***

---



<a id="app-app-env-show"></a>


## app env show

Displays environment variables that can be used to deploy apps and app extensions.

##### Flags

The following flags are available for the `app env show` command:

* **--client-id \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_CLIENT\_ID**

  The Client ID of your app.

* **--no-color**

  **env: SHOPIFY\_FLAG\_NO\_COLOR**

  Disable color output.

* **--path \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_PATH**

  The path to your app directory.

* **--reset**

  **env: SHOPIFY\_FLAG\_RESET**

  Reset all your settings.

* **--verbose**

  **env: SHOPIFY\_FLAG\_VERBOSE**

  Increase the verbosity of the output.

* **-c, --config \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_APP\_CONFIG**

  The name of the app configuration.

Examples

#### Examples

* ####

  ##### app env show

  ```sh
  shopify app env show [flags]
  ```

***

---



<a id="app-app-execute"></a>


## app execute

Executes an Admin API GraphQL query or mutation on the specified store. Mutations are only allowed on dev stores.

For operations that process large amounts of data, use [`bulk execute`](https://shopify.dev/docs/api/shopify-cli/app/app-bulk-execute) instead.

##### Flags

The following flags are available for the `app execute` command:

* **--client-id \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_CLIENT\_ID**

  The Client ID of your app.

* **--no-color**

  **env: SHOPIFY\_FLAG\_NO\_COLOR**

  Disable color output.

* **--output-file \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_OUTPUT\_FILE**

  The file name where results should be written, instead of STDOUT.

* **--path \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_PATH**

  The path to your app directory.

* **--query-file \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_QUERY\_FILE**

  Path to a file containing the GraphQL query or mutation. Can't be used with --query.

* **--reset**

  **env: SHOPIFY\_FLAG\_RESET**

  Reset all your settings.

* **--variable-file \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_VARIABLE\_FILE**

  Path to a file containing GraphQL variables in JSON format. Can't be used with --variables.

* **--verbose**

  **env: SHOPIFY\_FLAG\_VERBOSE**

  Increase the verbosity of the output.

* **--version \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_VERSION**

  The API version to use for the query or mutation. Defaults to the latest stable version.

* **-c, --config \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_APP\_CONFIG**

  The name of the app configuration.

* **-q, --query \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_QUERY**

  The GraphQL query or mutation, as a string.

* **-s, --store \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_STORE**

  The myshopify.com domain of the store to execute against. The app must be installed on the store. If not specified, you will be prompted to select a store.

* **-v, --variables \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_VARIABLES**

  The values for any GraphQL variables in your query or mutation, in JSON format.

Examples

#### Examples

* ####

  ##### app execute

  ```sh
  shopify app execute [flags]
  ```

***

---



<a id="app-app-function-build"></a>


## app function build

Compiles the function in your current directory to WebAssembly (Wasm) for testing purposes.

##### Flags

The following flags are available for the `app function build` command:

* **--client-id \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_CLIENT\_ID**

  The Client ID of your app.

* **--no-color**

  **env: SHOPIFY\_FLAG\_NO\_COLOR**

  Disable color output.

* **--path \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_PATH**

  The path to your function directory.

* **--reset**

  **env: SHOPIFY\_FLAG\_RESET**

  Reset all your settings.

* **--verbose**

  **env: SHOPIFY\_FLAG\_VERBOSE**

  Increase the verbosity of the output.

* **-c, --config \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_APP\_CONFIG**

  The name of the app configuration.

Examples

#### Examples

* ####

  ##### app function build

  ```sh
  shopify app function build [flags]
  ```

***

---



<a id="app-app-function-info"></a>


## app function info

The information returned includes the following:

* The function handle
* The function name
* The function API version
* The targeting configuration
* The schema path
* The WASM path
* The function runner path

##### Flags

The following flags are available for the `app function info` command:

* **--client-id \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_CLIENT\_ID**

  The Client ID of your app.

* **--no-color**

  **env: SHOPIFY\_FLAG\_NO\_COLOR**

  Disable color output.

* **--path \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_PATH**

  The path to your function directory.

* **--reset**

  **env: SHOPIFY\_FLAG\_RESET**

  Reset all your settings.

* **--verbose**

  **env: SHOPIFY\_FLAG\_VERBOSE**

  Increase the verbosity of the output.

* **-c, --config \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_APP\_CONFIG**

  The name of the app configuration.

* **-j, --json**

  **env: SHOPIFY\_FLAG\_JSON**

  Output the result as JSON. Automatically disables color output.

Examples

#### Examples

* ####

  ##### app function info

  ```sh
  shopify app function info [flags]
  ```

***

---



<a id="app-app-function-replay"></a>


## app function replay

Runs the function from your current directory for [testing purposes](https://shopify.dev/docs/apps/functions/testing-and-debugging). To learn how you can monitor and debug functions when errors occur, refer to [Shopify Functions error handling](https://shopify.dev/docs/api/functions/errors).

##### Flags

The following flags are available for the `app function replay` command:

* **--client-id \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_CLIENT\_ID**

  The Client ID of your app.

* **--no-color**

  **env: SHOPIFY\_FLAG\_NO\_COLOR**

  Disable color output.

* **--path \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_PATH**

  The path to your function directory.

* **--reset**

  **env: SHOPIFY\_FLAG\_RESET**

  Reset all your settings.

* **--verbose**

  **env: SHOPIFY\_FLAG\_VERBOSE**

  Increase the verbosity of the output.

* **-c, --config \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_APP\_CONFIG**

  The name of the app configuration.

* **-j, --json**

  **env: SHOPIFY\_FLAG\_JSON**

  Output the result as JSON. Automatically disables color output.

* **-l, --log \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_LOG**

  Specifies a log identifier to replay instead of selecting from a list. The identifier is provided in the output of `shopify app dev` and is the suffix of the log file name.

* **-w, --watch**

  **env: SHOPIFY\_FLAG\_WATCH**

  Re-run the function when the source code changes.

Examples

#### Examples

* ####

  ##### app function replay

  ```sh
  shopify app function replay [flags]
  ```

***

---



<a id="app-app-function-run"></a>


## app function run

Runs the function from your current directory for [testing purposes](https://shopify.dev/docs/apps/functions/testing-and-debugging). To learn how you can monitor and debug functions when errors occur, refer to [Shopify Functions error handling](https://shopify.dev/docs/api/functions/errors).

##### Flags

The following flags are available for the `app function run` command:

* **--client-id \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_CLIENT\_ID**

  The Client ID of your app.

* **--no-color**

  **env: SHOPIFY\_FLAG\_NO\_COLOR**

  Disable color output.

* **--path \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_PATH**

  The path to your function directory.

* **--reset**

  **env: SHOPIFY\_FLAG\_RESET**

  Reset all your settings.

* **--verbose**

  **env: SHOPIFY\_FLAG\_VERBOSE**

  Increase the verbosity of the output.

* **-c, --config \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_APP\_CONFIG**

  The name of the app configuration.

* **-e, --export \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_EXPORT**

  Name of the WebAssembly export to invoke.

* **-i, --input \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_INPUT**

  The input JSON to pass to the function. If omitted, standard input is used.

* **-j, --json**

  **env: SHOPIFY\_FLAG\_JSON**

  Output the result as JSON. Automatically disables color output.

Examples

#### Examples

* ####

  ##### app function run

  ```sh
  shopify app function run [flags]
  ```

***

---



<a id="app-app-function-schema"></a>


## app function schema

Generates the latest [GraphQL schema](https://shopify.dev/docs/apps/functions/input-output#graphql-schema) for a function in your app. Run this command from the function directory.

This command uses the API type and version of your function, as defined in your extension TOML file, to generate the latest GraphQL schema. The schema is written to the `schema.graphql` file.

##### Flags

The following flags are available for the `app function schema` command:

* **--client-id \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_CLIENT\_ID**

  The Client ID of your app.

* **--no-color**

  **env: SHOPIFY\_FLAG\_NO\_COLOR**

  Disable color output.

* **--path \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_PATH**

  The path to your function directory.

* **--reset**

  **env: SHOPIFY\_FLAG\_RESET**

  Reset all your settings.

* **--stdout**

  **env: SHOPIFY\_FLAG\_STDOUT**

  Output the schema to stdout instead of writing to a file.

* **--verbose**

  **env: SHOPIFY\_FLAG\_VERBOSE**

  Increase the verbosity of the output.

* **-c, --config \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_APP\_CONFIG**

  The name of the app configuration.

Examples

#### Examples

* ####

  ##### app function schema

  ```sh
  shopify app function schema [flags]
  ```

***

---



<a id="app-app-function-typegen"></a>


## app function typegen

Creates GraphQL types based on your [input query](https://shopify.dev/docs/apps/functions/input-output#input) for a function. Supports JavaScript functions out of the box, or any language via the `build.typegen_command` configuration.

##### Flags

The following flags are available for the `app function typegen` command:

* **--client-id \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_CLIENT\_ID**

  The Client ID of your app.

* **--no-color**

  **env: SHOPIFY\_FLAG\_NO\_COLOR**

  Disable color output.

* **--path \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_PATH**

  The path to your function directory.

* **--reset**

  **env: SHOPIFY\_FLAG\_RESET**

  Reset all your settings.

* **--verbose**

  **env: SHOPIFY\_FLAG\_VERBOSE**

  Increase the verbosity of the output.

* **-c, --config \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_APP\_CONFIG**

  The name of the app configuration.

Examples

#### Examples

* ####

  ##### app function typegen

  ```sh
  shopify app function typegen [flags]
  ```

***

---



<a id="app-app-generate-extension"></a>


## app generate extension

Generates a new [app extension](https://shopify.dev/docs/apps/build/app-extensions). For a list of app extensions that you can generate using this command, refer to [Supported extensions](https://shopify.dev/docs/apps/build/app-extensions/list-of-app-extensions).

Each new app extension is created in a folder under `extensions/`. To learn more about the extensions file structure, refer to [App structure](https://shopify.dev/docs/apps/build/cli-for-apps/app-structure) and the documentation for your extension.

##### Flags

The following flags are available for the `app generate extension` command:

* **--client-id \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_CLIENT\_ID**

  The Client ID of your app.

* **--flavor \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_FLAVOR**

  Choose a starting template for your extension, where applicable

* **--no-color**

  **env: SHOPIFY\_FLAG\_NO\_COLOR**

  Disable color output.

* **--path \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_PATH**

  The path to your app directory.

* **--reset**

  **env: SHOPIFY\_FLAG\_RESET**

  Reset all your settings.

* **--verbose**

  **env: SHOPIFY\_FLAG\_VERBOSE**

  Increase the verbosity of the output.

* **-c, --config \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_APP\_CONFIG**

  The name of the app configuration.

* **-n, --name \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_NAME**

  name of your Extension

* **-t, --template \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_EXTENSION\_TEMPLATE**

  Extension template

* **-t, --type \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_EXTENSION\_TYPE**

  Deprecated. Please use --template

Examples

#### Examples

* ####

  ##### app generate extension

  ```sh
  shopify app generate extension [flags]
  ```

***

---



<a id="app-app-import-custom-data-definitions"></a>


## app import-custom-data-definitions

Import metafield and metaobject definitions from your development store. [Read more about declarative custom data definitions](https://shopify.dev/docs/apps/build/custom-data/declarative-custom-data-definitions).

##### Flags

The following flags are available for the `app import-custom-data-definitions` command:

* **--client-id \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_CLIENT\_ID**

  The Client ID of your app.

* **--include-existing**

  **env: SHOPIFY\_FLAG\_INCLUDE\_EXISTING**

  Include existing declared definitions in the output.

* **--no-color**

  **env: SHOPIFY\_FLAG\_NO\_COLOR**

  Disable color output.

* **--path \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_PATH**

  The path to your app directory.

* **--reset**

  **env: SHOPIFY\_FLAG\_RESET**

  Reset all your settings.

* **--verbose**

  **env: SHOPIFY\_FLAG\_VERBOSE**

  Increase the verbosity of the output.

* **-c, --config \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_APP\_CONFIG**

  The name of the app configuration.

* **-s, --store \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_STORE**

  Store URL. Must be an existing development or Shopify Plus sandbox store.

Examples

#### Examples

* ####

  ##### app import-custom-data-definitions

  ```sh
  shopify app import-custom-data-definitions [flags]
  ```

***

---



<a id="app-app-import-extensions"></a>


## app import-extensions

Import dashboard-managed extensions into your app.

##### Flags

The following flags are available for the `app import-extensions` command:

* **--client-id \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_CLIENT\_ID**

  The Client ID of your app.

* **--no-color**

  **env: SHOPIFY\_FLAG\_NO\_COLOR**

  Disable color output.

* **--path \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_PATH**

  The path to your app directory.

* **--reset**

  **env: SHOPIFY\_FLAG\_RESET**

  Reset all your settings.

* **--verbose**

  **env: SHOPIFY\_FLAG\_VERBOSE**

  Increase the verbosity of the output.

* **-c, --config \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_APP\_CONFIG**

  The name of the app configuration.

Examples

#### Examples

* ####

  ##### app import-extensions

  ```sh
  shopify app import-extensions [flags]
  ```

***

---



<a id="app-app-info"></a>


## app info

The information returned includes the following:

* The app and dev store that's used when you run the [dev](https://shopify.dev/docs/api/shopify-cli/app/app-dev) command. You can reset these configurations using [`dev --reset`](https://shopify.dev/docs/api/shopify-cli/app/app-dev#flags-propertydetail-reset).
* The [structure](https://shopify.dev/docs/apps/tools/cli/structure) of your app project.
* The [access scopes](https://shopify.dev/docs/api/usage) your app has requested.
* System information, including the package manager and version of Shopify CLI used in the project.

##### Flags

The following flags are available for the `app info` command:

* **--client-id \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_CLIENT\_ID**

  The Client ID of your app.

* **--no-color**

  **env: SHOPIFY\_FLAG\_NO\_COLOR**

  Disable color output.

* **--path \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_PATH**

  The path to your app directory.

* **--reset**

  **env: SHOPIFY\_FLAG\_RESET**

  Reset all your settings.

* **--verbose**

  **env: SHOPIFY\_FLAG\_VERBOSE**

  Increase the verbosity of the output.

* **--web-env**

  **env: SHOPIFY\_FLAG\_OUTPUT\_WEB\_ENV**

  Outputs environment variables necessary for running and deploying web/.

* **-c, --config \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_APP\_CONFIG**

  The name of the app configuration.

* **-j, --json**

  **env: SHOPIFY\_FLAG\_JSON**

  Output the result as JSON. Automatically disables color output.

Examples

#### Examples

* ####

  ##### app info

  ```sh
  shopify app info [flags]
  ```

***

---



<a id="app-app-init"></a>


## app init

Create a new app project

##### Flags

The following flags are available for the `app init` command:

* **--client-id \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_CLIENT\_ID**

  The Client ID of your app. Use this to automatically link your new project to an existing app. Using this flag avoids the app selection prompt.

* **--flavor \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_TEMPLATE\_FLAVOR**

  Which flavor of the given template to use.

* **--no-color**

  **env: SHOPIFY\_FLAG\_NO\_COLOR**

  Disable color output.

* **--organization-id \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_ORGANIZATION\_ID**

  The organization ID. Your organization ID can be found in your Dev Dashboard URL: <https://dev.shopify.com/dashboard/>

* **--template \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_TEMPLATE**

  The app template. Accepts one of the following: - \<reactRouter|remix|none>

  * Any GitHub repo with optional branch and subpath, e.g., <https://github.com/Shopify/>

* **--verbose**

  **env: SHOPIFY\_FLAG\_VERBOSE**

  Increase the verbosity of the output.

* **-d, --package-manager \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_PACKAGE\_MANAGER**

* **-n, --name \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_NAME**

  The name for the new app. When provided, skips the app selection prompt and creates a new app with this name.

* **-p, --path \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_PATH**

Examples

#### Examples

* ####

  ##### app init

  ```sh
  shopify app init [flags]
  ```

***

---



<a id="app-app-logs"></a>


## app logs

Opens a real-time stream of detailed app logs from the selected app and store. Use the `--source` argument to limit output to a particular log source, such as a specific Shopify Function handle. Use the `shopify app logs sources` command to view a list of sources. Use the `--status` argument to filter on status, either `success` or `failure`. `shopify app logs --status=success --source=extension.discount-function`

##### Flags

The following flags are available for the `app logs` command:

* **--client-id \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_CLIENT\_ID**

  The Client ID of your app.

* **--no-color**

  **env: SHOPIFY\_FLAG\_NO\_COLOR**

  Disable color output.

* **--path \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_PATH**

  The path to your app directory.

* **--reset**

  **env: SHOPIFY\_FLAG\_RESET**

  Reset all your settings.

* **--source \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_SOURCE**

  Filters output to the specified log source.

* **--status \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_STATUS**

  Filters output to the specified status (success or failure).

* **--verbose**

  **env: SHOPIFY\_FLAG\_VERBOSE**

  Increase the verbosity of the output.

* **-c, --config \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_APP\_CONFIG**

  The name of the app configuration.

* **-j, --json**

  **env: SHOPIFY\_FLAG\_JSON**

  Output the result as JSON. Automatically disables color output.

* **-s, --store \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_STORE**

  Store URL. Must be an existing development or Shopify Plus sandbox store.

Examples

#### Examples

* ####

  ##### app logs

  ```sh
  shopify app logs [flags]
  ```

***

---



<a id="app-app-logs-sources"></a>


## app logs sources

The output source names can be used with the `--source` argument of `shopify app logs` to filter log output. Currently only function extensions are supported as sources.

##### Flags

The following flags are available for the `app logs sources` command:

* **--client-id \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_CLIENT\_ID**

  The Client ID of your app.

* **--no-color**

  **env: SHOPIFY\_FLAG\_NO\_COLOR**

  Disable color output.

* **--path \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_PATH**

  The path to your app directory.

* **--reset**

  **env: SHOPIFY\_FLAG\_RESET**

  Reset all your settings.

* **--verbose**

  **env: SHOPIFY\_FLAG\_VERBOSE**

  Increase the verbosity of the output.

* **-c, --config \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_APP\_CONFIG**

  The name of the app configuration.

Examples

#### Examples

* ####

  ##### app logs sources

  ```sh
  shopify app logs sources [flags]
  ```

***

---



<a id="app-app-release"></a>


## app release

Releases an existing app version. Pass the name of the version that you want to release using the `--version` flag.

##### Flags

The following flags are available for the `app release` command:

* **--version \<value>**

  **string**

  **required**

  **env: SHOPIFY\_FLAG\_VERSION**

  The name of the app version to release.

* **--allow-deletes**

  **env: SHOPIFY\_FLAG\_ALLOW\_DELETES**

  Allows removing extensions and configuration without requiring user confirmation. For CI/CD environments, the recommended flag is --allow-updates.

* **--allow-updates**

  **env: SHOPIFY\_FLAG\_ALLOW\_UPDATES**

  Allows adding and updating extensions and configuration without requiring user confirmation. Recommended option for CI/CD environments.

* **--client-id \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_CLIENT\_ID**

  The Client ID of your app.

* **--no-color**

  **env: SHOPIFY\_FLAG\_NO\_COLOR**

  Disable color output.

* **--path \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_PATH**

  The path to your app directory.

* **--reset**

  **env: SHOPIFY\_FLAG\_RESET**

  Reset all your settings.

* **--verbose**

  **env: SHOPIFY\_FLAG\_VERBOSE**

  Increase the verbosity of the output.

* **-c, --config \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_APP\_CONFIG**

  The name of the app configuration.

* **-f, --force**

  **env: SHOPIFY\_FLAG\_FORCE**

  \[Deprecated] Release without asking for confirmation. Equivalent to --allow-updates --allow-deletes. Use --allow-updates for CI/CD environments instead.

Examples

#### Examples

* ####

  ##### app release

  ```sh
  shopify app release --version <version>
  ```

***

---



<a id="app-app-versions-list"></a>


## app versions list

Lists the deployed app versions. An app version is a snapshot of your app extensions.

##### Flags

The following flags are available for the `app versions list` command:

* **--client-id \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_CLIENT\_ID**

  The Client ID of your app.

* **--no-color**

  **env: SHOPIFY\_FLAG\_NO\_COLOR**

  Disable color output.

* **--path \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_PATH**

  The path to your app directory.

* **--reset**

  **env: SHOPIFY\_FLAG\_RESET**

  Reset all your settings.

* **--verbose**

  **env: SHOPIFY\_FLAG\_VERBOSE**

  Increase the verbosity of the output.

* **-c, --config \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_APP\_CONFIG**

  The name of the app configuration.

* **-j, --json**

  **env: SHOPIFY\_FLAG\_JSON**

  Output the result as JSON. Automatically disables color output.

Examples

#### Examples

* ####

  ##### app versions list

  ```sh
  shopify app versions list [flags]
  ```

***

---



<a id="app-app-webhook-trigger"></a>


## app webhook trigger

Triggers the delivery of a sample Admin API event topic payload to a designated address.

You should use this command to experiment with webhooks, to initially test your webhook configuration, or for unit testing. However, to test your webhook configuration from end to end, you should always trigger webhooks by performing the related action in Shopify.

Because most webhook deliveries use remote endpoints, you can trigger the command from any directory where you can use Shopify CLI, and send the webhook to any of the supported endpoint types. For example, you can run the command from your app's local directory, but send the webhook to a staging environment endpoint.

To learn more about using webhooks in a Shopify app, refer to [Webhooks overview](https://shopify.dev/docs/apps/webhooks).

#### Limitations

* Webhooks triggered using this method always have the same payload, so they can't be used to test scenarios that differ based on the payload contents.
* Webhooks triggered using this method aren't retried when they fail.
* Trigger requests are rate-limited using the [Partner API rate limit](https://shopify.dev/docs/api/partner#rate_limits).
* You can't use this method to validate your API webhook subscriptions.

##### Flags

The following flags are available for the `app webhook trigger` command:

* **--address \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_ADDRESS**

  The URL where the webhook payload should be sent. You will need a different address type for each delivery-method: · For remote HTTP testing, use a URL that starts with https:// · For local HTTP testing, use [http://localhost:{port}/{url-path}](http://localhost:%7Bport%7D/%7Burl-path%7D) · For Google Pub/Sub, use pubsub://{project-id}:{topic-id} · For Amazon EventBridge, use an Amazon Resource Name (ARN) starting with arn:aws:events:

* **--api-version \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_API\_VERSION**

  The API Version of the webhook topic.

* **--client-id \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_CLIENT\_ID**

  The Client ID of your app.

* **--client-secret \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_CLIENT\_SECRET**

  Your app's client secret. This secret allows us to return the X-Shopify-Hmac-SHA256 header that lets you validate the origin of the response that you receive.

* **--delivery-method \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_DELIVERY\_METHOD**

  Method chosen to deliver the topic payload. If not passed, it's inferred from the address.

* **--help**

  **env: SHOPIFY\_FLAG\_HELP**

  This help. When you run the trigger command the CLI will prompt you for any information that isn't passed using flags.

* **--path \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_PATH**

  The path to your app directory.

* **--reset**

  **env: SHOPIFY\_FLAG\_RESET**

  Reset all your settings.

* **--shared-secret \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_SHARED\_SECRET**

  Deprecated. Please use client-secret.

* **--topic \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_TOPIC**

  The requested webhook topic.

* **-c, --config \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_APP\_CONFIG**

  The name of the app configuration.

Examples

#### Examples

* ####

  ##### app webhook trigger

  ```sh
  shopify app webhook trigger [flags]
  ```

***

---



<a id="general-commands"></a>


## General commands

[auth login](https://shopify.dev/docs/api/shopify-cli/general-commands/auth-login)

[Logs you in to your Shopify account.](https://shopify.dev/docs/api/shopify-cli/general-commands/auth-login)

[auth logout](https://shopify.dev/docs/api/shopify-cli/general-commands/auth-logout)

[Logs you out of the Shopify account or Partner account and store.](https://shopify.dev/docs/api/shopify-cli/general-commands/auth-logout)

[commands](https://shopify.dev/docs/api/shopify-cli/general-commands/commands)

[List all shopify commands.](https://shopify.dev/docs/api/shopify-cli/general-commands/commands)

[config autocorrect off](https://shopify.dev/docs/api/shopify-cli/general-commands/config-autocorrect-off)

[Disable autocorrect.](https://shopify.dev/docs/api/shopify-cli/general-commands/config-autocorrect-off)

[config autocorrect on](https://shopify.dev/docs/api/shopify-cli/general-commands/config-autocorrect-on)

[Enable autocorrect.](https://shopify.dev/docs/api/shopify-cli/general-commands/config-autocorrect-on)

[config autocorrect status](https://shopify.dev/docs/api/shopify-cli/general-commands/config-autocorrect-status)

[Check whether autocorrect is enabled or disabled.](https://shopify.dev/docs/api/shopify-cli/general-commands/config-autocorrect-status)

[help](https://shopify.dev/docs/api/shopify-cli/general-commands/help)

[Display help for Shopify CLI](https://shopify.dev/docs/api/shopify-cli/general-commands/help)

[organization list](https://shopify.dev/docs/api/shopify-cli/general-commands/organization-list)

[Lists the Shopify organizations that you have access to, along with their organization IDs.](https://shopify.dev/docs/api/shopify-cli/general-commands/organization-list)

[search](https://shopify.dev/docs/api/shopify-cli/general-commands/search)

[Starts a search on shopify.dev.](https://shopify.dev/docs/api/shopify-cli/general-commands/search)

[upgrade](https://shopify.dev/docs/api/shopify-cli/general-commands/upgrade)

[Upgrades Shopify CLI using your package manager.](https://shopify.dev/docs/api/shopify-cli/general-commands/upgrade)

[version](https://shopify.dev/docs/api/shopify-cli/general-commands/version)

[Shopify CLI version currently installed.](https://shopify.dev/docs/api/shopify-cli/general-commands/version)

***

---



<a id="general-commands-auth-login"></a>


## auth login

Logs you in to your Shopify account.

##### Flags

The following flags are available for the `auth login` command:

* **--alias \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_AUTH\_ALIAS**

  Alias of the session you want to login to.

Examples

#### Examples

* ####

  ##### auth login

  ```sh
  shopify auth login [flags]
  ```

***

---



<a id="general-commands-auth-logout"></a>


## auth logout

Logs you out of the Shopify account or Partner account and store.

Examples

#### Examples

* ####

  ##### auth logout

  ```sh
  shopify auth logout
  ```

***

---



<a id="general-commands-commands"></a>


## commands

List all shopify commands.

##### Flags

The following flags are available for the `commands` command:

* **--deprecated**

  Show deprecated commands.

* **--hidden**

  Show hidden commands.

* **--json**

  Format output as json.

* **--no-truncate**

  Do not truncate output.

* **--sort \<value>**

  **string**

  Property to sort by.

* **--tree**

  Show tree of commands.

* **-c, --columns \<value>**

  **string**

  Only show provided columns (comma-separated).

* **-x, --extended**

  Show extra columns.

Examples

#### Examples

* ####

  ##### commands

  ```sh
  shopify commands [flags]
  ```

***

---



<a id="general-commands-config-autocorrect-off"></a>


## config autocorrect off

Disable autocorrect. Off by default.

When autocorrection is enabled, Shopify CLI automatically runs a corrected version of your command if a correction is available.

When autocorrection is disabled, you need to confirm that you want to run corrections for mistyped commands.

Examples

#### Examples

* ####

  ##### config autocorrect off

  ```sh
  shopify config autocorrect off
  ```

***

---



<a id="general-commands-config-autocorrect-on"></a>


## config autocorrect on

Enable autocorrect. Off by default.

When autocorrection is enabled, Shopify CLI automatically runs a corrected version of your command if a correction is available.

When autocorrection is disabled, you need to confirm that you want to run corrections for mistyped commands.

Examples

#### Examples

* ####

  ##### config autocorrect on

  ```sh
  shopify config autocorrect on
  ```

***

---



<a id="general-commands-config-autocorrect-status"></a>


## config autocorrect status

Check whether autocorrect is enabled or disabled. On by default.

When autocorrection is enabled, Shopify CLI automatically runs a corrected version of your command if a correction is available.

When autocorrection is disabled, you need to confirm that you want to run corrections for mistyped commands.

Examples

#### Examples

* ####

  ##### config autocorrect status

  ```sh
  shopify config autocorrect status
  ```

***

---



<a id="general-commands-help"></a>


## help

Display help for Shopify CLI

##### Flags

The following flags are available for the `help` command:

* **-n, --nested-commands**

  **env: SHOPIFY\_FLAG\_CLI\_NESTED\_COMMANDS**

  Include all nested commands in the output.

Examples

#### Examples

* ####

  ##### help

  ```sh
  shopify help [command] [flags]
  ```

***

---



<a id="general-commands-organization-list"></a>


## organization list

Lists the Shopify organizations that you have access to, along with their organization IDs.

##### Flags

The following flags are available for the `organization list` command:

* **--no-color**

  **env: SHOPIFY\_FLAG\_NO\_COLOR**

  Disable color output.

* **--verbose**

  **env: SHOPIFY\_FLAG\_VERBOSE**

  Increase the verbosity of the output.

* **-j, --json**

  **env: SHOPIFY\_FLAG\_JSON**

  Output the result as JSON. Automatically disables color output.

Examples

#### Examples

* ####

  ##### organization list

  ```sh
  shopify organization list [flags]
  ```

***

---



<a id="general-commands-search"></a>


## search

Starts a search on shopify.dev.

Examples

#### Examples

* ####

  ##### search

  ```sh
  shopify search [query]
  ```

***

---



<a id="general-commands-upgrade"></a>


## upgrade

Upgrades Shopify CLI using your package manager.

Examples

#### Examples

* ####

  ##### upgrade

  ```sh
  shopify upgrade
  ```

***

---



<a id="general-commands-version"></a>


## version

Shopify CLI version currently installed.

Examples

#### Examples

* ####

  ##### version

  ```sh
  shopify version
  ```

***

---



<a id="hydrogen"></a>


## Shopify CLI Hydrogen commands

[hydrogen build](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-build)

[Builds a Hydrogen storefront for production.](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-build)

[hydrogen check](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-check)

[Checks whether your Hydrogen app includes a set of standard Shopify routes.](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-check)

[hydrogen codegen](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-codegen)

[Automatically generates GraphQL types for your project’s Storefront API queries.](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-codegen)

[hydrogen customer-account-push](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-customer-account-push)

[Push project configuration to admin](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-customer-account-push)

[hydrogen debug cpu](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-debug-cpu)

[Builds the app and runs the resulting code to profile the server startup time, watching for changes.](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-debug-cpu)

[hydrogen deploy](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-deploy)

[Builds and deploys your Hydrogen storefront to Oxygen.](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-deploy)

[hydrogen dev](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-dev)

[Runs a Hydrogen storefront in a local runtime that emulates an Oxygen worker for development.](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-dev)

[hydrogen env list](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-env-list)

[Lists all environments available on the linked Hydrogen storefront.](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-env-list)

[hydrogen env pull](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-env-pull)

[Pulls environment variables from the linked Hydrogen storefront and writes them to an .env file.](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-env-pull)

[hydrogen env push](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-env-push)

[Push environment variables from the local .env file to your linked Hydrogen storefront.](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-env-push)

[hydrogen generate route](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-generate-route)

[Generates a set of default routes from the starter template.](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-generate-route)

[hydrogen generate routes](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-generate-routes)

[Generates all supported standard shopify routes.](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-generate-routes)

[hydrogen init](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-init)

[Creates a new Hydrogen storefront.](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-init)

[hydrogen link](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-link)

[Links your local development environment to a remote Hydrogen storefront.](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-link)

[hydrogen list](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-list)

[Lists all remote Hydrogen storefronts available to link to your local development environment.](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-list)

[hydrogen login](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-login)

[Logs in to the specified shop and saves the shop domain to the project.](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-login)

[hydrogen logout](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-logout)

[Log out from the current shop.](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-logout)

[hydrogen preview](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-preview)

[Runs a server in your local development environment that serves your Hydrogen app's production build.](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-preview)

[hydrogen setup css](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-setup-css)

[Adds support for certain CSS strategies to your project.](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-setup-css)

[hydrogen setup markets](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-setup-markets)

[Adds support for multiple markets to your project by using the URL structure.](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-setup-markets)

[hydrogen setup vite](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-setup-vite)

[EXPERIMENTAL: Upgrades the project to use Vite.](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-setup-vite)

[hydrogen setup](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-setup)

[Scaffold routes and core functionality.](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-setup)

[hydrogen shortcut](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-shortcut)

[Creates a global h2 shortcut for Shopify CLI using shell aliases.](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-shortcut)

[hydrogen unlink](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-unlink)

[Unlinks your local development environment from a remote Hydrogen storefront.](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-unlink)

[hydrogen upgrade](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-upgrade)

[Upgrade Hydrogen project dependencies, preview features, fixes and breaking changes.](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-upgrade)

***

---



<a id="hydrogen-hydrogen-build"></a>


## hydrogen build

Builds a Hydrogen storefront for production. The client and app worker files are compiled to a `/dist` folder in your Hydrogen project directory.

##### Flags

The following flags are available for the `hydrogen build` command:

* **--bundle-stats**

  Show a bundle size summary after building. Defaults to true, use `--no-bundle-stats` to disable.

* **--codegen**

  Automatically generates GraphQL types for your project’s Storefront API queries.

* **--codegen-config-path \<value>**

  **string**

  Specifies a path to a codegen configuration file. Defaults to `<root>/codegen.ts` if this file exists.

* **--disable-route-warning**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_DISABLE\_ROUTE\_WARNING**

  Disables any warnings about missing standard routes.

* **--entry \<value>**

  **string**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_ENTRY**

  Entry file for the worker. Defaults to `./server`.

* **--force-client-sourcemap**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_FORCE\_CLIENT\_SOURCEMAP**

  Client sourcemapping is avoided by default because it makes backend code visible in the browser. Use this flag to force enabling it.

* **--lockfile-check**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_LOCKFILE\_CHECK**

  Checks that there is exactly one valid lockfile in the project. Defaults to `true`. Deactivate with `--no-lockfile-check`.

* **--path \<value>**

  **string**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_PATH**

  The path to the directory of the Hydrogen storefront. Defaults to the current directory where the command is run.

* **--sourcemap**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_SOURCEMAP**

  Controls whether server sourcemaps are generated. Default to `true`. Deactivate `--no-sourcemaps`.

* **--watch**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_WATCH**

  Watches for changes and rebuilds the project writing output to disk.

Examples

#### Examples

* ####

  ##### hydrogen build

  ```sh
  shopify hydrogen build [flags]
  ```

***

---



<a id="hydrogen-hydrogen-check"></a>


## hydrogen check

Checks whether your Hydrogen app includes a set of standard Shopify routes.

##### Flags

The following flags are available for the `hydrogen check` command:

* **--path \<value>**

  **string**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_PATH**

  The path to the directory of the Hydrogen storefront. Defaults to the current directory where the command is run.

Examples

#### Examples

* ####

  ##### hydrogen check

  ```sh
  shopify hydrogen check [flags]
  ```

***

---



<a id="hydrogen-hydrogen-codegen"></a>


## hydrogen codegen

Automatically generates GraphQL types for your project’s Storefront API queries.

##### Flags

The following flags are available for the `hydrogen codegen` command:

* **--codegen-config-path \<value>**

  **string**

  Specify a path to a codegen configuration file. Defaults to `<root>/codegen.ts` if it exists.

* **--path \<value>**

  **string**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_PATH**

  The path to the directory of the Hydrogen storefront. Defaults to the current directory where the command is run.

* **--watch**

  Watch the project for changes to update types on file save.

Examples

#### Examples

* ####

  ##### hydrogen codegen

  ```sh
  shopify hydrogen codegen [flags]
  ```

***

---



<a id="hydrogen-hydrogen-customer-account-push"></a>


## hydrogen customer-account-push

Push project configuration to admin

##### Flags

The following flags are available for the `hydrogen customer-account-push` command:

* **--dev-origin \<value>**

  **string**

  **required**

  The development domain of your application.

* **--path \<value>**

  **string**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_PATH**

  The path to the directory of the Hydrogen storefront. Defaults to the current directory where the command is run.

* **--relative-logout-uri \<value>**

  **string**

  The relative url of allowed url that will be redirected to post-logout for Customer Account API OAuth flow. Default to nothing.

* **--relative-redirect-uri \<value>**

  **string**

  The relative url of allowed callback url for Customer Account API OAuth flow. Default is '/account/authorize'

* **--storefront-id \<value>**

  **string**

  The id of the storefront the configuration should be pushed to. Must start with 'gid://shopify/HydrogenStorefront/'

Examples

#### Examples

* ####

  ##### hydrogen customer-account-push

  ```sh
  shopify hydrogen customer-account-push [flags]
  ```

***

---



<a id="hydrogen-hydrogen-debug-cpu"></a>


## hydrogen debug cpu

Builds the app and runs the resulting code to profile the server startup time, watching for changes. This command can be used to [debug slow app startup times](https://shopify.dev/docs/custom-storefronts/hydrogen/debugging/cpu-startup) that cause failed deployments in Oxygen.

The profiling results are written to a `.cpuprofile` file that can be viewed with certain tools such as [Flame Chart Visualizer for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-js-profile-flame).

##### Flags

The following flags are available for the `hydrogen debug cpu` command:

* **--entry \<value>**

  **string**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_ENTRY**

  Entry file for the worker. Defaults to `./server`.

* **--output \<value>**

  **string**

  Specify a path to generate the profile file. Defaults to "startup.cpuprofile".

* **--path \<value>**

  **string**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_PATH**

  The path to the directory of the Hydrogen storefront. Defaults to the current directory where the command is run.

Examples

#### Examples

* ####

  ##### hydrogen debug cpu

  ```sh
  shopify hydrogen debug cpu [flags]
  ```

***

---



<a id="hydrogen-hydrogen-deploy"></a>


## hydrogen deploy

Builds and deploys your Hydrogen storefront to Oxygen. Requires an Oxygen deployment token to be set with the `--token` flag or an environment variable (`SHOPIFY_HYDROGEN_DEPLOYMENT_TOKEN`). If the storefront is [linked](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-link) then the Oxygen deployment token for the linked storefront will be used automatically.

##### Flags

The following flags are available for the `hydrogen deploy` command:

* **--auth-bypass-token**

  **env: AUTH\_BYPASS\_TOKEN**

  Generate an authentication bypass token, which can be used to perform end-to-end tests against the deployment.

* **--auth-bypass-token-duration \<value>**

  **string**

  **env: AUTH\_BYPASS\_TOKEN\_DURATION**

  Specify the duration (in hours) up to 12 hours for the authentication bypass token. Defaults to `2`

* **--build-command \<value>**

  **string**

  Specify a build command to run before deploying. If not specified, `shopify hydrogen build` will be used.

* **--entry \<value>**

  **string**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_ENTRY**

  Entry file for the worker. Defaults to `./server`.

* **--env \<value>**

  **string**

  Specifies the environment to perform the operation using its handle. Fetch the handle using the `env list` command.

* **--env-branch \<value>**

  **string**

  **env: SHOPIFY\_HYDROGEN\_ENVIRONMENT\_BRANCH**

  Specifies the environment to perform the operation using its Git branch name.

* **--env-file \<value>**

  **string**

  Path to an environment file to override existing environment variables for the deployment.

* **--force-client-sourcemap**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_FORCE\_CLIENT\_SOURCEMAP**

  Client sourcemapping is avoided by default because it makes backend code visible in the browser. Use this flag to force enabling it.

* **--json-output**

  Create a JSON file containing the deployment details in CI environments. Defaults to true, use `--no-json-output` to disable.

* **--lockfile-check**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_LOCKFILE\_CHECK**

  Checks that there is exactly one valid lockfile in the project. Defaults to `true`. Deactivate with `--no-lockfile-check`.

* **--metadata-description \<value>**

  **string**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_METADATA\_DESCRIPTION**

  Description of the changes in the deployment. Defaults to the commit message of the latest commit if there are no uncommited changes.

* **--metadata-user \<value>**

  **string**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_METADATA\_USER**

  User that initiated the deployment. Will be saved and displayed in the Shopify admin

* **--no-verify**

  Skip the routability verification step after deployment.

* **--path \<value>**

  **string**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_PATH**

  The path to the directory of the Hydrogen storefront. Defaults to the current directory where the command is run.

* **--preview**

  Deploys to the Preview environment.

* **-f, --force**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_FORCE**

  Forces a deployment to proceed if there are uncommited changes in its Git repository.

* **-s, --shop \<value>**

  **string**

  **env: SHOPIFY\_SHOP**

  Shop URL. It can be the shop prefix (janes-apparel) or the full myshopify.com URL (janes-apparel.myshopify.com, <https://janes-apparel.myshopify.com>).

* **-t, --token \<value>**

  **string**

  **env: SHOPIFY\_HYDROGEN\_DEPLOYMENT\_TOKEN**

  Oxygen deployment token. Defaults to the linked storefront's token if available.

Examples

#### Examples

* ####

  ##### hydrogen deploy

  ```sh
  shopify hydrogen deploy [flags]
  ```

***

---



<a id="hydrogen-hydrogen-dev"></a>


## hydrogen dev

Runs a Hydrogen storefront in a local runtime that emulates an Oxygen worker for development.

If your project is [linked](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-link) to a Hydrogen storefront, then its environment variables will be loaded with the runtime.

##### Flags

The following flags are available for the `hydrogen dev` command:

* **--codegen**

  Automatically generates GraphQL types for your project’s Storefront API queries.

* **--codegen-config-path \<value>**

  **string**

  Specifies a path to a codegen configuration file. Defaults to `<root>/codegen.ts` if this file exists.

* **--customer-account-push**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_CUSTOMER\_ACCOUNT\_PUSH**

  Use tunneling for local development and push the tunneling domain to admin. Required to use Customer Account API's OAuth flow

* **--debug**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_DEBUG**

  Enables inspector connections to the server with a debugger such as Visual Studio Code or Chrome DevTools.

* **--disable-deps-optimizer**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_DISABLE\_DEPS\_OPTIMIZER**

  Disable adding dependencies to Vite's `ssr.optimizeDeps.include` automatically

* **--disable-version-check**

  Skip the version check when running `hydrogen dev`

* **--disable-virtual-routes**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_DISABLE\_VIRTUAL\_ROUTES**

  Disable rendering fallback routes when a route file doesn't exist.

* **--entry \<value>**

  **string**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_ENTRY**

  Entry file for the worker. Defaults to `./server`.

* **--env \<value>**

  **string**

  Specifies the environment to perform the operation using its handle. Fetch the handle using the `env list` command.

* **--env-branch \<value>**

  **string**

  **env: SHOPIFY\_HYDROGEN\_ENVIRONMENT\_BRANCH**

  Specifies the environment to perform the operation using its Git branch name.

* **--env-file \<value>**

  **string**

  Path to an environment file to override existing environment variables. Defaults to the '.env' located in your project path `--path`.

* **--host**

  Expose the server to the local network

* **--inspector-port \<value>**

  **string**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_INSPECTOR\_PORT**

  The port where the inspector is available. Defaults to 9229.

* **--path \<value>**

  **string**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_PATH**

  The path to the directory of the Hydrogen storefront. Defaults to the current directory where the command is run.

* **--port \<value>**

  **string**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_PORT**

  The port to run the server on. Defaults to 3000.

* **--verbose**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_VERBOSE**

  Outputs more information about the command's execution.

Examples

#### Examples

* ####

  ##### hydrogen dev

  ```sh
  shopify hydrogen dev [flags]
  ```

***

---



<a id="hydrogen-hydrogen-env-list"></a>


## hydrogen env list

Lists all environments available on the linked Hydrogen storefront.

##### Flags

The following flags are available for the `hydrogen env list` command:

* **--path \<value>**

  **string**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_PATH**

  The path to the directory of the Hydrogen storefront. Defaults to the current directory where the command is run.

Examples

#### Examples

* ####

  ##### hydrogen env list

  ```sh
  shopify hydrogen env list [flags]
  ```

***

---



<a id="hydrogen-hydrogen-env-pull"></a>


## hydrogen env pull

Pulls environment variables from the linked Hydrogen storefront and writes them to an `.env` file.

##### Flags

The following flags are available for the `hydrogen env pull` command:

* **--env \<value>**

  **string**

  Specifies the environment to perform the operation using its handle. Fetch the handle using the `env list` command.

* **--env-branch \<value>**

  **string**

  **env: SHOPIFY\_HYDROGEN\_ENVIRONMENT\_BRANCH**

  Specifies the environment to perform the operation using its Git branch name.

* **--env-file \<value>**

  **string**

  Path to an environment file to override existing environment variables. Defaults to the '.env' located in your project path `--path`.

* **--path \<value>**

  **string**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_PATH**

  The path to the directory of the Hydrogen storefront. Defaults to the current directory where the command is run.

* **-f, --force**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_FORCE**

  Overwrites the destination directory and files if they already exist.

Examples

#### Examples

* ####

  ##### hydrogen env pull

  ```sh
  shopify hydrogen env pull [flags]
  ```

***

---



<a id="hydrogen-hydrogen-env-push"></a>


## hydrogen env push

Push environment variables from the local .env file to your linked Hydrogen storefront.

##### Flags

The following flags are available for the `hydrogen env push` command:

* **--env \<value>**

  **string**

  Specifies the environment to perform the operation using its handle. Fetch the handle using the `env list` command.

* **--env-file \<value>**

  **string**

  Path to an environment file to override existing environment variables. Defaults to the '.env' located in your project path `--path`.

* **--path \<value>**

  **string**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_PATH**

  The path to the directory of the Hydrogen storefront. Defaults to the current directory where the command is run.

Examples

#### Examples

* ####

  ##### hydrogen env push

  ```sh
  shopify hydrogen env push [flags]
  ```

***

---



<a id="hydrogen-hydrogen-generate-route"></a>


## hydrogen generate route

Generates a set of default routes from the starter template.

##### Flags

The following flags are available for the `hydrogen generate route` command:

* **--adapter \<value>**

  **string**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_ADAPTER**

  Remix adapter used in the route. The default is `@shopify/remix-oxygen`.

* **--locale-param \<value>**

  **string**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_ADAPTER**

  The param name in Remix routes for the i18n locale, if any. Example: `locale` becomes ($locale).

* **--path \<value>**

  **string**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_PATH**

  The path to the directory of the Hydrogen storefront. Defaults to the current directory where the command is run.

* **--typescript**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_TYPESCRIPT**

  Generate TypeScript files

* **-f, --force**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_FORCE**

  Overwrites the destination directory and files if they already exist.

Examples

#### Examples

* ####

  ##### hydrogen generate route

  ```sh
  shopify hydrogen generate route [flags]
  ```

***

---



<a id="hydrogen-hydrogen-generate-routes"></a>


## hydrogen generate routes

Generates all supported standard shopify routes.

##### Flags

The following flags are available for the `hydrogen generate routes` command:

* **--adapter \<value>**

  **string**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_ADAPTER**

  Remix adapter used in the route. The default is `@shopify/remix-oxygen`.

* **--locale-param \<value>**

  **string**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_ADAPTER**

  The param name in Remix routes for the i18n locale, if any. Example: `locale` becomes ($locale).

* **--path \<value>**

  **string**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_PATH**

  The path to the directory of the Hydrogen storefront. Defaults to the current directory where the command is run.

* **--typescript**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_TYPESCRIPT**

  Generate TypeScript files

* **-f, --force**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_FORCE**

  Overwrites the destination directory and files if they already exist.

Examples

#### Examples

* ####

  ##### hydrogen generate routes

  ```sh
  shopify hydrogen generate routes [flags]
  ```

***

---



<a id="hydrogen-hydrogen-init"></a>


## hydrogen init

Creates a new Hydrogen storefront.

##### Flags

The following flags are available for the `hydrogen init` command:

* **--git**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_GIT**

  Init Git and create initial commits.

* **--install-deps**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_INSTALL\_DEPS**

  Auto installs dependencies using the active package manager.

* **--language \<value>**

  **string**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_LANGUAGE**

  Sets the template language to use. One of `js` or `ts`.

* **--markets \<value>**

  **string**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_I18N**

  Sets the URL structure to support multiple markets. Must be one of: `subfolders`, `domains`, `subdomains`, `none`. Example: `--markets subfolders`.

* **--mock-shop**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_MOCK\_DATA**

  Use mock.shop as the data source for the storefront.

* **--path \<value>**

  **string**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_PATH**

  The path to the directory of the new Hydrogen storefront.

* **--quickstart**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_QUICKSTART**

  Scaffolds a new Hydrogen project with a set of sensible defaults. Equivalent to `shopify hydrogen init --path hydrogen-quickstart --mock-shop --language js --shortcut --markets none`

* **--shortcut**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_SHORTCUT**

  Creates a global h2 shortcut for Shopify CLI using shell aliases. Deactivate with `--no-shortcut`.

* **--styling \<value>**

  **string**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_STYLING**

  Sets the styling strategy to use. One of `tailwind`, `vanilla-extract`, `css-modules`, `postcss`, `none`.

* **--template \<value>**

  **string**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_TEMPLATE**

  Scaffolds project based on an existing template or example from the Hydrogen repository.

* **-f, --force**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_FORCE**

  Overwrites the destination directory and files if they already exist.

Examples

#### Examples

* ####

  ##### hydrogen init

  ```sh
  shopify hydrogen init [flags]
  ```

***

---



<a id="hydrogen-hydrogen-link"></a>


## hydrogen link

Links your local development environment to a remote Hydrogen storefront. You can link an unlimited number of development environments to a single Hydrogen storefront.

Linking to a Hydrogen storefront enables you to run [dev](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-dev) and automatically inject your linked Hydrogen storefront's environment variables directly into the server runtime.

After you run the `link` command, you can access the [env list](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-env-list), [env pull](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-env-pull), and [unlink](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-unlink) commands.

##### Flags

The following flags are available for the `hydrogen link` command:

* **--path \<value>**

  **string**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_PATH**

  The path to the directory of the Hydrogen storefront. Defaults to the current directory where the command is run.

* **--storefront \<value>**

  **string**

  **env: SHOPIFY\_HYDROGEN\_STOREFRONT**

  The name of a Hydrogen Storefront (e.g. "Jane's Apparel")

* **-f, --force**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_FORCE**

  Overwrites the destination directory and files if they already exist.

Examples

#### Examples

* ####

  ##### hydrogen link

  ```sh
  shopify hydrogen link [flags]
  ```

***

---



<a id="hydrogen-hydrogen-list"></a>


## hydrogen list

Lists all remote Hydrogen storefronts available to link to your local development environment.

##### Flags

The following flags are available for the `hydrogen list` command:

* **--path \<value>**

  **string**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_PATH**

  The path to the directory of the Hydrogen storefront. Defaults to the current directory where the command is run.

Examples

#### Examples

* ####

  ##### hydrogen list

  ```sh
  shopify hydrogen list [flags]
  ```

***

---



<a id="hydrogen-hydrogen-login"></a>


## hydrogen login

Logs in to the specified shop and saves the shop domain to the project.

##### Flags

The following flags are available for the `hydrogen login` command:

* **--path \<value>**

  **string**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_PATH**

  The path to the directory of the Hydrogen storefront. Defaults to the current directory where the command is run.

* **-s, --shop \<value>**

  **string**

  **env: SHOPIFY\_SHOP**

  Shop URL. It can be the shop prefix (janes-apparel) or the full myshopify.com URL (janes-apparel.myshopify.com, <https://janes-apparel.myshopify.com>).

Examples

#### Examples

* ####

  ##### hydrogen login

  ```sh
  shopify hydrogen login [flags]
  ```

***

---



<a id="hydrogen-hydrogen-logout"></a>


## hydrogen logout

Log out from the current shop.

##### Flags

The following flags are available for the `hydrogen logout` command:

* **--path \<value>**

  **string**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_PATH**

  The path to the directory of the Hydrogen storefront. Defaults to the current directory where the command is run.

Examples

#### Examples

* ####

  ##### hydrogen logout

  ```sh
  shopify hydrogen logout [flags]
  ```

***

---



<a id="hydrogen-hydrogen-preview"></a>


## hydrogen preview

Runs a server in your local development environment that serves your Hydrogen app's production build. Requires running the [build](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-build) command first.

##### Flags

The following flags are available for the `hydrogen preview` command:

* **--build**

  Builds the app before starting the preview server.

* **--codegen**

  Automatically generates GraphQL types for your project’s Storefront API queries.

* **--codegen-config-path \<value>**

  **string**

  Specifies a path to a codegen configuration file. Defaults to `<root>/codegen.ts` if this file exists.

* **--debug**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_DEBUG**

  Enables inspector connections to the server with a debugger such as Visual Studio Code or Chrome DevTools.

* **--entry \<value>**

  **string**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_ENTRY**

  Entry file for the worker. Defaults to `./server`.

* **--env \<value>**

  **string**

  Specifies the environment to perform the operation using its handle. Fetch the handle using the `env list` command.

* **--env-branch \<value>**

  **string**

  **env: SHOPIFY\_HYDROGEN\_ENVIRONMENT\_BRANCH**

  Specifies the environment to perform the operation using its Git branch name.

* **--env-file \<value>**

  **string**

  Path to an environment file to override existing environment variables. Defaults to the '.env' located in your project path `--path`.

* **--inspector-port \<value>**

  **string**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_INSPECTOR\_PORT**

  The port where the inspector is available. Defaults to 9229.

* **--path \<value>**

  **string**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_PATH**

  The path to the directory of the Hydrogen storefront. Defaults to the current directory where the command is run.

* **--port \<value>**

  **string**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_PORT**

  The port to run the server on. Defaults to 3000.

* **--verbose**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_VERBOSE**

  Outputs more information about the command's execution.

* **--watch**

  Watches for changes and rebuilds the project.

Examples

#### Examples

* ####

  ##### hydrogen preview

  ```sh
  shopify hydrogen preview [flags]
  ```

***

---



<a id="hydrogen-hydrogen-setup"></a>


## hydrogen setup

Scaffold routes and core functionality.

##### Flags

The following flags are available for the `hydrogen setup` command:

* **--install-deps**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_INSTALL\_DEPS**

  Auto installs dependencies using the active package manager.

* **--markets \<value>**

  **string**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_I18N**

  Sets the URL structure to support multiple markets. Must be one of: `subfolders`, `domains`, `subdomains`, `none`. Example: `--markets subfolders`.

* **--path \<value>**

  **string**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_PATH**

  The path to the directory of the Hydrogen storefront. Defaults to the current directory where the command is run.

* **--shortcut**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_SHORTCUT**

  Creates a global h2 shortcut for Shopify CLI using shell aliases. Deactivate with `--no-shortcut`.

* **-f, --force**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_FORCE**

  Overwrites the destination directory and files if they already exist.

Examples

#### Examples

* ####

  ##### hydrogen setup

  ```sh
  shopify hydrogen setup [flags]
  ```

***

---



<a id="hydrogen-hydrogen-setup-css"></a>


## hydrogen setup css

Adds support for certain CSS strategies to your project.

##### Flags

The following flags are available for the `hydrogen setup css` command:

* **--install-deps**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_INSTALL\_DEPS**

  Auto installs dependencies using the active package manager.

* **--path \<value>**

  **string**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_PATH**

  The path to the directory of the Hydrogen storefront. Defaults to the current directory where the command is run.

* **-f, --force**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_FORCE**

  Overwrites the destination directory and files if they already exist.

Examples

#### Examples

* ####

  ##### hydrogen setup css

  ```sh
  shopify hydrogen setup css [flags]
  ```

***

---



<a id="hydrogen-hydrogen-setup-markets"></a>


## hydrogen setup markets

Adds support for multiple [markets](https://shopify.dev/docs/custom-storefronts/hydrogen/markets) to your project by using the URL structure.

##### Flags

The following flags are available for the `hydrogen setup markets` command:

* **--path \<value>**

  **string**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_PATH**

  The path to the directory of the Hydrogen storefront. Defaults to the current directory where the command is run.

Examples

#### Examples

* ####

  ##### hydrogen setup markets

  ```sh
  shopify hydrogen setup markets [flags]
  ```

***

---



<a id="hydrogen-hydrogen-setup-vite"></a>


## hydrogen setup vite

EXPERIMENTAL: Upgrades the project to use Vite.

##### Flags

The following flags are available for the `hydrogen setup vite` command:

* **--path \<value>**

  **string**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_PATH**

  The path to the directory of the Hydrogen storefront. Defaults to the current directory where the command is run.

Examples

#### Examples

* ####

  ##### hydrogen setup vite

  ```sh
  shopify hydrogen setup vite [flags]
  ```

***

---



<a id="hydrogen-hydrogen-shortcut"></a>


## hydrogen shortcut

Creates a global h2 shortcut for Shopify CLI using shell aliases.

The following shells are supported:

* Bash (using `~/.bashrc`)
* ZSH (using `~/.zshrc`)
* Fish (using `~/.config/fish/functions`)
* PowerShell (added to `$PROFILE`)

After the alias is created, you can call Shopify CLI from anywhere in your project using `h2 <command>`.

Examples

#### Examples

* ####

  ##### hydrogen shortcut

  ```sh
  shopify hydrogen shortcut
  ```

***

---



<a id="hydrogen-hydrogen-unlink"></a>


## hydrogen unlink

Unlinks your local development environment from a remote Hydrogen storefront.

##### Flags

The following flags are available for the `hydrogen unlink` command:

* **--path \<value>**

  **string**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_PATH**

  The path to the directory of the Hydrogen storefront. Defaults to the current directory where the command is run.

Examples

#### Examples

* ####

  ##### hydrogen unlink

  ```sh
  shopify hydrogen unlink [flags]
  ```

***

---



<a id="hydrogen-hydrogen-upgrade"></a>


## hydrogen upgrade

Upgrade Hydrogen project dependencies, preview features, fixes and breaking changes. The command also generates an instruction file for each upgrade.

##### Flags

The following flags are available for the `hydrogen upgrade` command:

* **--path \<value>**

  **string**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_PATH**

  The path to the directory of the Hydrogen storefront. Defaults to the current directory where the command is run.

* **-f, --force**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_FORCE**

  Ignore warnings and force the upgrade to the target version

* **-v, --version \<value>**

  **string**

  A target hydrogen version to update to

Examples

#### Examples

* ####

  ##### hydrogen upgrade

  ```sh
  shopify hydrogen upgrade [flags]
  ```

***

---



<a id="store"></a>


## Shopify CLI Store commands

[store auth](https://shopify.dev/docs/api/shopify-cli/store/store-auth)

[Authenticates the app against the specified store for store commands and stores an online access token for later reuse.](https://shopify.dev/docs/api/shopify-cli/store/store-auth)

[store execute](https://shopify.dev/docs/api/shopify-cli/store/store-execute)

[Executes an Admin API GraphQL query or mutation on the specified store using previously stored app authentication.](https://shopify.dev/docs/api/shopify-cli/store/store-execute)

***

---



<a id="store-store-auth"></a>


## store auth

Authenticates the app against the specified store for store commands and stores an online access token for later reuse.

Re-run this command if the stored token is missing, expires, or no longer has the scopes you need.

##### Flags

The following flags are available for the `store auth` command:

* **--scopes \<value>**

  **string**

  **required**

  **env: SHOPIFY\_FLAG\_SCOPES**

  Comma-separated Admin API scopes to request for the app.

* **-s, --store \<value>**

  **string**

  **required**

  **env: SHOPIFY\_FLAG\_STORE**

  The myshopify.com domain of the store to authenticate against.

* **--no-color**

  **env: SHOPIFY\_FLAG\_NO\_COLOR**

  Disable color output.

* **--verbose**

  **env: SHOPIFY\_FLAG\_VERBOSE**

  Increase the verbosity of the output.

* **-j, --json**

  **env: SHOPIFY\_FLAG\_JSON**

  Output the result as JSON. Automatically disables color output.

Examples

#### Examples

* ####

  ##### store auth

  ```sh
  shopify store auth [flags]
  ```

***

---



<a id="store-store-execute"></a>


## store execute

Executes an Admin API GraphQL query or mutation on the specified store using previously stored app authentication.

Run `shopify store auth` first to create stored auth for the store.

Mutations are disabled by default. Re-run with `--allow-mutations` if you intend to modify store data.

##### Flags

The following flags are available for the `store execute` command:

* **-s, --store \<value>**

  **string**

  **required**

  **env: SHOPIFY\_FLAG\_STORE**

  The myshopify.com domain of the store to execute against.

* **--allow-mutations**

  **env: SHOPIFY\_FLAG\_ALLOW\_MUTATIONS**

  Allow GraphQL mutations to run against the target store.

* **--no-color**

  **env: SHOPIFY\_FLAG\_NO\_COLOR**

  Disable color output.

* **--output-file \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_OUTPUT\_FILE**

  The file name where results should be written, instead of STDOUT.

* **--query-file \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_QUERY\_FILE**

  Path to a file containing the GraphQL query or mutation. Can't be used with --query.

* **--variable-file \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_VARIABLE\_FILE**

  Path to a file containing GraphQL variables in JSON format. Can't be used with --variables.

* **--verbose**

  **env: SHOPIFY\_FLAG\_VERBOSE**

  Increase the verbosity of the output.

* **--version \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_VERSION**

  The API version to use for the query or mutation. Defaults to the latest stable version.

* **-j, --json**

  **env: SHOPIFY\_FLAG\_JSON**

  Output the result as JSON. Automatically disables color output.

* **-q, --query \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_QUERY**

  The GraphQL query or mutation, as a string.

* **-v, --variables \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_VARIABLES**

  The values for any GraphQL variables in your query or mutation, in JSON format.

Examples

#### Examples

* ####

  ##### store execute

  ```sh
  shopify store execute [flags]
  ```

***

---



<a id="theme"></a>


## Shopify CLI Theme commands

[theme check](https://shopify.dev/docs/api/shopify-cli/theme/theme-check)

[Calls and runs Theme Check to analyze your theme code for errors and to ensure that it follows theme and Liquid best practices.](https://shopify.dev/docs/api/shopify-cli/theme/theme-check)

[theme console](https://shopify.dev/docs/api/shopify-cli/theme/theme-console)

[Starts the Shopify Liquid REPL (read-eval-print loop) tool.](https://shopify.dev/docs/api/shopify-cli/theme/theme-console)

[theme delete](https://shopify.dev/docs/api/shopify-cli/theme/theme-delete)

[Deletes a theme from your store.](https://shopify.dev/docs/api/shopify-cli/theme/theme-delete)

[theme dev](https://shopify.dev/docs/api/shopify-cli/theme/theme-dev)

[Uploads the current theme as the specified theme, or a development theme, to a store so you can preview it.](https://shopify.dev/docs/api/shopify-cli/theme/theme-dev)

[theme duplicate](https://shopify.dev/docs/api/shopify-cli/theme/theme-duplicate)

[If you want to duplicate your local theme, you need to run shopify theme push first.](https://shopify.dev/docs/api/shopify-cli/theme/theme-duplicate)

[theme info](https://shopify.dev/docs/api/shopify-cli/theme/theme-info)

[Displays information about your theme environment, including your current store.](https://shopify.dev/docs/api/shopify-cli/theme/theme-info)

[theme init](https://shopify.dev/docs/api/shopify-cli/theme/theme-init)

[Clones a Git repository to your local machine to use as the starting point for building a theme.](https://shopify.dev/docs/api/shopify-cli/theme/theme-init)

[theme language-server](https://shopify.dev/docs/api/shopify-cli/theme/theme-language-server)

[Starts the Language Server.](https://shopify.dev/docs/api/shopify-cli/theme/theme-language-server)

[theme list](https://shopify.dev/docs/api/shopify-cli/theme/theme-list)

[Lists the themes in your store, along with their IDs and statuses.](https://shopify.dev/docs/api/shopify-cli/theme/theme-list)

[theme metafields pull](https://shopify.dev/docs/api/shopify-cli/theme/theme-metafields-pull)

[Retrieves metafields from Shopify Admin.](https://shopify.dev/docs/api/shopify-cli/theme/theme-metafields-pull)

[theme open](https://shopify.dev/docs/api/shopify-cli/theme/theme-open)

[Returns links that let you preview the specified theme.](https://shopify.dev/docs/api/shopify-cli/theme/theme-open)

[theme package](https://shopify.dev/docs/api/shopify-cli/theme/theme-package)

[Packages your local theme files into a ZIP file that can be uploaded to Shopify.](https://shopify.dev/docs/api/shopify-cli/theme/theme-package)

[theme preview](https://shopify.dev/docs/api/shopify-cli/theme/theme-preview)

[Applies a JSON overrides file to a theme and creates or updates a preview.](https://shopify.dev/docs/api/shopify-cli/theme/theme-preview)

[theme profile](https://shopify.dev/docs/api/shopify-cli/theme/theme-profile)

[Profile the Shopify Liquid on a given page.](https://shopify.dev/docs/api/shopify-cli/theme/theme-profile)

[theme publish](https://shopify.dev/docs/api/shopify-cli/theme/theme-publish)

[Publishes an unpublished theme from your theme library.](https://shopify.dev/docs/api/shopify-cli/theme/theme-publish)

[theme pull](https://shopify.dev/docs/api/shopify-cli/theme/theme-pull)

[Retrieves theme files from Shopify.](https://shopify.dev/docs/api/shopify-cli/theme/theme-pull)

[theme push](https://shopify.dev/docs/api/shopify-cli/theme/theme-push)

[Uploads your local theme files to Shopify, overwriting the remote version if specified.](https://shopify.dev/docs/api/shopify-cli/theme/theme-push)

[theme rename](https://shopify.dev/docs/api/shopify-cli/theme/theme-rename)

[Renames a theme in your store.](https://shopify.dev/docs/api/shopify-cli/theme/theme-rename)

[theme share](https://shopify.dev/docs/api/shopify-cli/theme/theme-share)

[Uploads your theme as a new, unpublished theme in your theme library.](https://shopify.dev/docs/api/shopify-cli/theme/theme-share)

***

---



<a id="theme-theme-check"></a>


## theme check

Calls and runs [Theme Check](https://shopify.dev/docs/themes/tools/theme-check) to analyze your theme code for errors and to ensure that it follows theme and Liquid best practices. [Learn more about the checks that Theme Check runs.](https://shopify.dev/docs/themes/tools/theme-check/checks)

##### Flags

The following flags are available for the `theme check` command:

* **--fail-level \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_FAIL\_LEVEL**

  Minimum severity for exit with error code

* **--init**

  **env: SHOPIFY\_FLAG\_INIT**

  Generate a .theme-check.yml file

* **--list**

  **env: SHOPIFY\_FLAG\_LIST**

  List enabled checks

* **--no-color**

  **env: SHOPIFY\_FLAG\_NO\_COLOR**

  Disable color output.

* **--path \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_PATH**

  The path where you want to run the command. Defaults to the current working directory.

* **--print**

  **env: SHOPIFY\_FLAG\_PRINT**

  Output active config to STDOUT

* **--verbose**

  **env: SHOPIFY\_FLAG\_VERBOSE**

  Increase the verbosity of the output.

* **-a, --auto-correct**

  **env: SHOPIFY\_FLAG\_AUTO\_CORRECT**

  Automatically fix offenses

* **-C, --config \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_CONFIG**

  Use the config provided, overriding .theme-check.yml if present Supports all theme-check: config values, e.g., theme-check:theme-app-extension, theme-check:recommended, theme-check:all For backwards compatibility, :theme\_app\_extension is also supported

* **-e, --environment \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_ENVIRONMENT**

  The environment to apply to the current command.

* **-o, --output \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_OUTPUT**

  The output format to use

* **-v, --version**

  **env: SHOPIFY\_FLAG\_VERSION**

  Print Theme Check version

Examples

#### Examples

* ####

  ##### theme check

  ```sh
  shopify theme check [flags]
  ```

***

---



<a id="theme-theme-console"></a>


## theme console

Starts the Shopify Liquid REPL (read-eval-print loop) tool. This tool provides an interactive terminal interface for evaluating Liquid code and exploring Liquid objects, filters, and tags using real store data.

You can also provide context to the console using a URL, as some Liquid objects are context-specific

##### Flags

The following flags are available for the `theme console` command:

* **--no-color**

  **env: SHOPIFY\_FLAG\_NO\_COLOR**

  Disable color output.

* **--password \<value>**

  **string**

  **env: SHOPIFY\_CLI\_THEME\_TOKEN**

  Password generated from the Theme Access app or an Admin API token.

* **--path \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_PATH**

  The path where you want to run the command. Defaults to the current working directory.

* **--store-password \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_STORE\_PASSWORD**

  The password for storefronts with password protection.

* **--url \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_URL**

  The url to be used as context

* **--verbose**

  **env: SHOPIFY\_FLAG\_VERBOSE**

  Increase the verbosity of the output.

* **-e, --environment \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_ENVIRONMENT**

  The environment to apply to the current command.

* **-s, --store \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_STORE**

  Store URL. It can be the store prefix (example) or the full myshopify.com URL (example.myshopify.com, <https://example.myshopify.com>).

Examples

#### Examples

* ####

  ##### theme console

  ```sh
  shopify theme console

  shopify theme console --url /products/classic-leather-jacket
  ```

***

---



<a id="theme-theme-delete"></a>


## theme delete

Deletes a theme from your store.

You can specify multiple themes by ID. If no theme is specified, then you're prompted to select the theme that you want to delete from the list of themes in your store.

You're asked to confirm that you want to delete the specified themes before they are deleted. You can skip this confirmation using the `--force` flag.

##### Flags

The following flags are available for the `theme delete` command:

* **--no-color**

  **env: SHOPIFY\_FLAG\_NO\_COLOR**

  Disable color output.

* **--password \<value>**

  **string**

  **env: SHOPIFY\_CLI\_THEME\_TOKEN**

  Password generated from the Theme Access app or an Admin API token.

* **--path \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_PATH**

  The path where you want to run the command. Defaults to the current working directory.

* **--verbose**

  **env: SHOPIFY\_FLAG\_VERBOSE**

  Increase the verbosity of the output.

* **-a, --show-all**

  **env: SHOPIFY\_FLAG\_SHOW\_ALL**

  Include others development themes in theme list.

* **-d, --development**

  **env: SHOPIFY\_FLAG\_DEVELOPMENT**

  Delete your development theme.

* **-e, --environment \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_ENVIRONMENT**

  The environment to apply to the current command.

* **-f, --force**

  **env: SHOPIFY\_FLAG\_FORCE**

  Skip confirmation.

* **-s, --store \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_STORE**

  Store URL. It can be the store prefix (example) or the full myshopify.com URL (example.myshopify.com, <https://example.myshopify.com>).

* **-t, --theme \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_THEME\_ID**

  Theme ID or name of the remote theme.

Examples

#### Examples

* ####

  ##### theme delete

  ```sh
  shopify theme delete [flags]
  ```

***

---



<a id="theme-theme-dev"></a>


## theme dev

Uploads the current theme as the specified theme, or a [development theme](https://shopify.dev/docs/themes/tools/cli#development-themes), to a store so you can preview it.

This command returns the following information:

* A link to your development theme at <http://127.0.0.1:9292>. This URL can hot reload local changes to CSS and sections, or refresh the entire page when a file changes, enabling you to preview changes in real time using the store's data.

  You can specify a different network interface and port using `--host` and `--port`.

* A link to the [editor](https://shopify.dev/docs/themes/tools/online-editor) for the theme in the Shopify admin.

* A [preview link](https://help.shopify.com/manual/online-store/themes/adding-themes#share-a-theme-preview-with-others) that you can share with other developers.

If you already have a development theme for your current environment, then this command replaces the development theme with your local theme. You can override this using the `--theme-editor-sync` flag.

**Note:**

You can't preview checkout customizations using <http://127.0.0.1:9292>.

Development themes are deleted when you run `shopify auth logout`. If you need a preview link that can be used after you log out, then you should [share](https://shopify.dev/docs/api/shopify-cli/theme/theme-share) your theme or [push](https://shopify.dev/docs/api/shopify-cli/theme/theme-push) to an unpublished theme on your store.

You can run this command only in a directory that matches the [default Shopify theme folder structure](https://shopify.dev/docs/themes/tools/cli#directory-structure).

##### Flags

The following flags are available for the `theme dev` command:

* **--error-overlay \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_ERROR\_OVERLAY**

  Controls the visibility of the error overlay when an theme asset upload fails:

  * silent Prevents the error overlay from appearing.
  * default Displays the error overlay.

* **--host \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_HOST**

  Set which network interface the web server listens on. The default value is 127.0.0.1.

* **--listing \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_LISTING**

  The listing preset to use for multi-preset themes. Applies preset files from listings/\[preset-name] directory.

* **--live-reload \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_LIVE\_RELOAD**

  The live reload mode switches the server behavior when a file is modified:

  * hot-reload Hot reloads local changes to CSS and sections (default)
  * full-page Always refreshes the entire page
  * off Deactivate live reload

* **--no-color**

  **env: SHOPIFY\_FLAG\_NO\_COLOR**

  Disable color output.

* **--notify \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_NOTIFY**

  The file path or URL. The file path is to a file that you want updated on idle. The URL path is where you want a webhook posted to report on file changes.

* **--open**

  **env: SHOPIFY\_FLAG\_OPEN**

  Automatically launch the theme preview in your default web browser.

* **--password \<value>**

  **string**

  **env: SHOPIFY\_CLI\_THEME\_TOKEN**

  Password generated from the Theme Access app or an Admin API token.

* **--path \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_PATH**

  The path where you want to run the command. Defaults to the current working directory.

* **--port \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_PORT**

  Local port to serve theme preview from.

* **--store-password \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_STORE\_PASSWORD**

  The password for storefronts with password protection.

* **--theme-editor-sync**

  **env: SHOPIFY\_FLAG\_THEME\_EDITOR\_SYNC**

  Synchronize Theme Editor updates in the local theme files.

* **--verbose**

  **env: SHOPIFY\_FLAG\_VERBOSE**

  Increase the verbosity of the output.

* **-a, --allow-live**

  **env: SHOPIFY\_FLAG\_ALLOW\_LIVE**

  Allow development on a live theme.

* **-e, --environment \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_ENVIRONMENT**

  The environment to apply to the current command.

* **-n, --nodelete**

  **env: SHOPIFY\_FLAG\_NODELETE**

  Prevents files from being deleted in the remote theme when a file has been deleted locally. This applies to files that are deleted while the command is running, and files that have been deleted locally before the command is run.

* **-o, --only \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_ONLY**

  Hot reload only files that match the specified pattern.

* **-s, --store \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_STORE**

  Store URL. It can be the store prefix (example) or the full myshopify.com URL (example.myshopify.com, <https://example.myshopify.com>).

* **-t, --theme \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_THEME\_ID**

  Theme ID or name of the remote theme.

* **-x, --ignore \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_IGNORE**

  Skip hot reloading any files that match the specified pattern.

Examples

#### Examples

* ####

  ##### theme dev

  ```sh
  shopify theme dev [flags]
  ```

***

---



<a id="theme-theme-duplicate"></a>


## theme duplicate

If you want to duplicate your local theme, you need to run `shopify theme push` first.

If no theme ID is specified, you're prompted to select the theme that you want to duplicate from the list of themes in your store. You're asked to confirm that you want to duplicate the specified theme.

Prompts and confirmations are not shown when duplicate is run in a CI environment or the `--force` flag is used, therefore you must specify a theme ID using the `--theme` flag.

You can optionally name the duplicated theme using the `--name` flag.

If you use the `--json` flag, then theme information is returned in JSON format, which can be used as a machine-readable input for scripts or continuous integration.

Sample JSON output:

```json
{
  "theme": {
    "id": 108267175958,
    "name": "A Duplicated Theme",
    "role": "unpublished",
    "shop": "mystore.myshopify.com"
  }
}
```

```json
{
  "message": "The theme 'Summer Edition' could not be duplicated due to errors",
  "errors": ["Maximum number of themes reached"],
  "requestId": "12345-abcde-67890"
}
```

##### Flags

The following flags are available for the `theme duplicate` command:

* **--no-color**

  **env: SHOPIFY\_FLAG\_NO\_COLOR**

  Disable color output.

* **--password \<value>**

  **string**

  **env: SHOPIFY\_CLI\_THEME\_TOKEN**

  Password generated from the Theme Access app or an Admin API token.

* **--verbose**

  **env: SHOPIFY\_FLAG\_VERBOSE**

  Increase the verbosity of the output.

* **-e, --environment \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_ENVIRONMENT**

  The environment to apply to the current command.

* **-f, --force**

  **env: SHOPIFY\_FLAG\_FORCE**

  Force the duplicate operation to run without prompts or confirmations.

* **-j, --json**

  **env: SHOPIFY\_FLAG\_JSON**

  Output the result as JSON. Automatically disables color output.

* **-n, --name \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_NAME**

  Name of the newly duplicated theme.

* **-s, --store \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_STORE**

  Store URL. It can be the store prefix (example) or the full myshopify.com URL (example.myshopify.com, <https://example.myshopify.com>).

* **-t, --theme \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_THEME\_ID**

  Theme ID or name of the remote theme.

Examples

#### Examples

* ####

  ##### theme duplicate

  ```sh
  shopify theme duplicate

  shopify theme duplicate --theme 10 --name 'New Theme'
  ```

***

---



<a id="theme-theme-info"></a>


## theme info

Displays information about your theme environment, including your current store. Can also retrieve information about a specific theme.

##### Flags

The following flags are available for the `theme info` command:

* **--no-color**

  **env: SHOPIFY\_FLAG\_NO\_COLOR**

  Disable color output.

* **--password \<value>**

  **string**

  **env: SHOPIFY\_CLI\_THEME\_TOKEN**

  Password generated from the Theme Access app or an Admin API token.

* **--path \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_PATH**

  The path where you want to run the command. Defaults to the current working directory.

* **--verbose**

  **env: SHOPIFY\_FLAG\_VERBOSE**

  Increase the verbosity of the output.

* **-d, --development**

  **env: SHOPIFY\_FLAG\_DEVELOPMENT**

  Retrieve info from your development theme.

* **-e, --environment \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_ENVIRONMENT**

  The environment to apply to the current command.

* **-j, --json**

  **env: SHOPIFY\_FLAG\_JSON**

  Output the result as JSON. Automatically disables color output.

* **-s, --store \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_STORE**

  Store URL. It can be the store prefix (example) or the full myshopify.com URL (example.myshopify.com, <https://example.myshopify.com>).

* **-t, --theme \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_THEME\_ID**

  Theme ID or name of the remote theme.

Examples

#### Examples

* ####

  ##### theme info

  ```sh
  shopify theme info [flags]
  ```

***

---



<a id="theme-theme-init"></a>


## theme init

Clones a Git repository to your local machine to use as the starting point for building a theme.

If no Git repository is specified, then this command creates a copy of Shopify's [Skeleton theme](https://github.com/Shopify/skeleton-theme.git), with the specified name in the current folder. If no name is provided, then you're prompted to enter one.

**Caution:**

If you're building a theme for the Shopify Theme Store, then you can use our example theme as a starting point. However, the theme that you submit needs to be [substantively different from existing themes](https://shopify.dev/docs/themes/store/requirements#uniqueness) so that it provides added value for users.

##### Flags

The following flags are available for the `theme init` command:

* **--no-color**

  **env: SHOPIFY\_FLAG\_NO\_COLOR**

  Disable color output.

* **--path \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_PATH**

  The path where you want to run the command. Defaults to the current working directory.

* **--verbose**

  **env: SHOPIFY\_FLAG\_VERBOSE**

  Increase the verbosity of the output.

* **-l, --latest**

  **env: SHOPIFY\_FLAG\_LATEST**

  Downloads the latest release of the `clone-url`

* **-u, --clone-url \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_CLONE\_URL**

  The Git URL to clone from. Defaults to Shopify's Skeleton theme.

Examples

#### Examples

* ####

  ##### theme init

  ```sh
  shopify theme init [name] [flags]
  ```

***

---



<a id="theme-theme-language-server"></a>


## theme language-server

Starts the [Language Server](https://shopify.dev/docs/themes/tools/cli/language-server).

##### Flags

The following flags are available for the `theme language-server` command:

* **--no-color**

  **env: SHOPIFY\_FLAG\_NO\_COLOR**

  Disable color output.

* **--verbose**

  **env: SHOPIFY\_FLAG\_VERBOSE**

  Increase the verbosity of the output.

Examples

#### Examples

* ####

  ##### theme language-server

  ```sh
  shopify theme language-server [flags]
  ```

***

---



<a id="theme-theme-list"></a>


## theme list

Lists the themes in your store, along with their IDs and statuses.

##### Flags

The following flags are available for the `theme list` command:

* **--id \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_ID**

  Only list theme with the given ID.

* **--name \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_NAME**

  Only list themes that contain the given name.

* **--no-color**

  **env: SHOPIFY\_FLAG\_NO\_COLOR**

  Disable color output.

* **--password \<value>**

  **string**

  **env: SHOPIFY\_CLI\_THEME\_TOKEN**

  Password generated from the Theme Access app or an Admin API token.

* **--path \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_PATH**

  The path where you want to run the command. Defaults to the current working directory.

* **--role \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_ROLE**

  Only list themes with the given role.

* **--verbose**

  **env: SHOPIFY\_FLAG\_VERBOSE**

  Increase the verbosity of the output.

* **-e, --environment \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_ENVIRONMENT**

  The environment to apply to the current command.

* **-j, --json**

  **env: SHOPIFY\_FLAG\_JSON**

  Output the result as JSON. Automatically disables color output.

* **-s, --store \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_STORE**

  Store URL. It can be the store prefix (example) or the full myshopify.com URL (example.myshopify.com, <https://example.myshopify.com>).

Examples

#### Examples

* ####

  ##### theme list

  ```sh
  shopify theme list [flags]
  ```

***

---



<a id="theme-theme-metafields-pull"></a>


## theme metafields pull

Retrieves metafields from Shopify Admin.

If the metafields file already exists, it will be overwritten.

##### Flags

The following flags are available for the `theme metafields pull` command:

* **--no-color**

  **env: SHOPIFY\_FLAG\_NO\_COLOR**

  Disable color output.

* **--password \<value>**

  **string**

  **env: SHOPIFY\_CLI\_THEME\_TOKEN**

  Password generated from the Theme Access app or an Admin API token.

* **--path \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_PATH**

  The path where you want to run the command. Defaults to the current working directory.

* **--verbose**

  **env: SHOPIFY\_FLAG\_VERBOSE**

  Increase the verbosity of the output.

* **-e, --environment \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_ENVIRONMENT**

  The environment to apply to the current command.

* **-s, --store \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_STORE**

  Store URL. It can be the store prefix (example) or the full myshopify.com URL (example.myshopify.com, <https://example.myshopify.com>).

Examples

#### Examples

* ####

  ##### theme metafields pull

  ```sh
  shopify theme metafields pull [flags]
  ```

***

---



<a id="theme-theme-open"></a>


## theme open

Returns links that let you preview the specified theme. The following links are returned:

* A link to the [editor](https://shopify.dev/docs/themes/tools/online-editor) for the theme in the Shopify admin.
* A [preview link](https://help.shopify.com/manual/online-store/themes/adding-themes#share-a-theme-preview-with-others) that you can share with other developers.

If you don't specify a theme, then you're prompted to select the theme to open from the list of the themes in your store.

##### Flags

The following flags are available for the `theme open` command:

* **--no-color**

  **env: SHOPIFY\_FLAG\_NO\_COLOR**

  Disable color output.

* **--password \<value>**

  **string**

  **env: SHOPIFY\_CLI\_THEME\_TOKEN**

  Password generated from the Theme Access app or an Admin API token.

* **--path \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_PATH**

  The path where you want to run the command. Defaults to the current working directory.

* **--verbose**

  **env: SHOPIFY\_FLAG\_VERBOSE**

  Increase the verbosity of the output.

* **-d, --development**

  **env: SHOPIFY\_FLAG\_DEVELOPMENT**

  Open your development theme.

* **-E, --editor**

  **env: SHOPIFY\_FLAG\_EDITOR**

  Open the theme editor for the specified theme in the browser.

* **-e, --environment \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_ENVIRONMENT**

  The environment to apply to the current command.

* **-l, --live**

  **env: SHOPIFY\_FLAG\_LIVE**

  Open your live (published) theme.

* **-s, --store \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_STORE**

  Store URL. It can be the store prefix (example) or the full myshopify.com URL (example.myshopify.com, <https://example.myshopify.com>).

* **-t, --theme \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_THEME\_ID**

  Theme ID or name of the remote theme.

Examples

#### Examples

* ####

  ##### theme open

  ```sh
  shopify theme open [flags]
  ```

***

---



<a id="theme-theme-package"></a>


## theme package

Packages your local theme files into a ZIP file that can be uploaded to Shopify.

Only folders that match the [default Shopify theme folder structure](https://shopify.dev/docs/storefronts/themes/tools/cli#directory-structure) are included in the package.

The package includes the `listings` directory if present (required for multi-preset themes per [Theme Store requirements](https://shopify.dev/docs/storefronts/themes/store/requirements#adding-presets-to-your-theme-zip-submission)).

The ZIP file uses the name `theme_name-theme_version.zip`, based on parameters in your [settings\_schema.json](https://shopify.dev/docs/storefronts/themes/architecture/config/settings-schema-json) file.

##### Flags

The following flags are available for the `theme package` command:

* **--no-color**

  **env: SHOPIFY\_FLAG\_NO\_COLOR**

  Disable color output.

* **--path \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_PATH**

  The path where you want to run the command. Defaults to the current working directory.

* **--verbose**

  **env: SHOPIFY\_FLAG\_VERBOSE**

  Increase the verbosity of the output.

Examples

#### Examples

* ####

  ##### theme package

  ```sh
  shopify theme package [flags]
  ```

***

---



<a id="theme-theme-preview"></a>


## theme preview

Applies a JSON overrides file to a theme and creates or updates a preview. This lets you quickly preview changes.

The command returns a preview URL and a preview identifier. You can reuse the preview identifier with `--preview-id` to update an existing preview instead of creating a new one.

##### Flags

The following flags are available for the `theme preview` command:

* **--overrides \<value>**

  **string**

  **required**

  **env: SHOPIFY\_FLAG\_OVERRIDES**

  Path to a JSON overrides file.

* **-t, --theme \<value>**

  **string**

  **required**

  **env: SHOPIFY\_FLAG\_THEME\_ID**

  Theme ID or name of the remote theme.

* **--json**

  **env: SHOPIFY\_FLAG\_JSON**

  Output the preview URL and identifier as JSON.

* **--no-color**

  **env: SHOPIFY\_FLAG\_NO\_COLOR**

  Disable color output.

* **--open**

  **env: SHOPIFY\_FLAG\_OPEN**

  Automatically launch the theme preview in your default web browser.

* **--password \<value>**

  **string**

  **env: SHOPIFY\_CLI\_THEME\_TOKEN**

  Password generated from the Theme Access app or an Admin API token.

* **--path \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_PATH**

  The path where you want to run the command. Defaults to the current working directory.

* **--preview-id \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_PREVIEW\_ID**

  An existing preview identifier to update instead of creating a new preview.

* **--verbose**

  **env: SHOPIFY\_FLAG\_VERBOSE**

  Increase the verbosity of the output.

* **-e, --environment \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_ENVIRONMENT**

  The environment to apply to the current command.

* **-s, --store \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_STORE**

  Store URL. It can be the store prefix (example) or the full myshopify.com URL (example.myshopify.com, <https://example.myshopify.com>).

Examples

#### Examples

* ####

  ##### theme preview

  ```sh
  shopify theme preview [flags]
  ```

***

---



<a id="theme-theme-profile"></a>


## theme profile

Profile the Shopify Liquid on a given page.

This command will open a web page with the Speedscope profiler detailing the time spent executing Liquid on the given page.

##### Flags

The following flags are available for the `theme profile` command:

* **--no-color**

  **env: SHOPIFY\_FLAG\_NO\_COLOR**

  Disable color output.

* **--password \<value>**

  **string**

  **env: SHOPIFY\_CLI\_THEME\_TOKEN**

  Password generated from the Theme Access app or an Admin API token.

* **--path \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_PATH**

  The path where you want to run the command. Defaults to the current working directory.

* **--store-password \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_STORE\_PASSWORD**

  The password for storefronts with password protection.

* **--url \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_URL**

  The url to be used as context

* **--verbose**

  **env: SHOPIFY\_FLAG\_VERBOSE**

  Increase the verbosity of the output.

* **-e, --environment \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_ENVIRONMENT**

  The environment to apply to the current command.

* **-j, --json**

  **env: SHOPIFY\_FLAG\_JSON**

  Output the result as JSON. Automatically disables color output.

* **-s, --store \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_STORE**

  Store URL. It can be the store prefix (example) or the full myshopify.com URL (example.myshopify.com, <https://example.myshopify.com>).

* **-t, --theme \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_THEME\_ID**

  Theme ID or name of the remote theme.

Examples

#### Examples

* ####

  ##### theme profile

  ```sh
  shopify theme profile

  shopify theme profile --url /products/classic-leather-jacket
  ```

***

---



<a id="theme-theme-publish"></a>


## theme publish

Publishes an unpublished theme from your theme library.

If no theme ID is specified, then you're prompted to select the theme that you want to publish from the list of themes in your store.

You can run this command only in a directory that matches the [default Shopify theme folder structure](https://shopify.dev/docs/themes/tools/cli#directory-structure).

If you want to publish your local theme, then you need to run `shopify theme push` first. You're asked to confirm that you want to publish the specified theme. You can skip this confirmation using the `--force` flag.

##### Flags

The following flags are available for the `theme publish` command:

* **--no-color**

  **env: SHOPIFY\_FLAG\_NO\_COLOR**

  Disable color output.

* **--password \<value>**

  **string**

  **env: SHOPIFY\_CLI\_THEME\_TOKEN**

  Password generated from the Theme Access app or an Admin API token.

* **--path \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_PATH**

  The path where you want to run the command. Defaults to the current working directory.

* **--verbose**

  **env: SHOPIFY\_FLAG\_VERBOSE**

  Increase the verbosity of the output.

* **-e, --environment \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_ENVIRONMENT**

  The environment to apply to the current command.

* **-f, --force**

  **env: SHOPIFY\_FLAG\_FORCE**

  Skip confirmation.

* **-s, --store \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_STORE**

  Store URL. It can be the store prefix (example) or the full myshopify.com URL (example.myshopify.com, <https://example.myshopify.com>).

* **-t, --theme \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_THEME\_ID**

  Theme ID or name of the remote theme.

Examples

#### Examples

* ####

  ##### theme publish

  ```sh
  shopify theme publish [flags]
  ```

***

---



<a id="theme-theme-pull"></a>


## theme pull

Retrieves theme files from Shopify.

If no theme is specified, then you're prompted to select the theme to pull from the list of the themes in your store.

##### Flags

The following flags are available for the `theme pull` command:

* **--no-color**

  **env: SHOPIFY\_FLAG\_NO\_COLOR**

  Disable color output.

* **--password \<value>**

  **string**

  **env: SHOPIFY\_CLI\_THEME\_TOKEN**

  Password generated from the Theme Access app or an Admin API token.

* **--path \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_PATH**

  The path where you want to run the command. Defaults to the current working directory.

* **--verbose**

  **env: SHOPIFY\_FLAG\_VERBOSE**

  Increase the verbosity of the output.

* **-d, --development**

  **env: SHOPIFY\_FLAG\_DEVELOPMENT**

  Pull theme files from your remote development theme.

* **-e, --environment \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_ENVIRONMENT**

  The environment to apply to the current command.

* **-l, --live**

  **env: SHOPIFY\_FLAG\_LIVE**

  Pull theme files from your remote live theme.

* **-n, --nodelete**

  **env: SHOPIFY\_FLAG\_NODELETE**

  Prevent deleting local files that don't exist remotely.

* **-o, --only \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_ONLY**

  Download only the specified files (Multiple flags allowed). Wrap the value in double quotes if you're using wildcards.

* **-s, --store \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_STORE**

  Store URL. It can be the store prefix (example) or the full myshopify.com URL (example.myshopify.com, <https://example.myshopify.com>).

* **-t, --theme \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_THEME\_ID**

  Theme ID or name of the remote theme.

* **-x, --ignore \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_IGNORE**

  Skip downloading the specified files (Multiple flags allowed). Wrap the value in double quotes if you're using wildcards.

Examples

#### Examples

* ####

  ##### theme pull

  ```sh
  shopify theme pull [flags]
  ```

***

---



<a id="theme-theme-push"></a>


## theme push

Uploads your local theme files to Shopify, overwriting the remote version if specified.

If no theme is specified, then you're prompted to select the theme to overwrite from the list of the themes in your store.

You can run this command only in a directory that matches the [default Shopify theme folder structure](https://shopify.dev/docs/themes/tools/cli#directory-structure).

This command returns the following information:

* A link to the [editor](https://shopify.dev/docs/themes/tools/online-editor) for the theme in the Shopify admin.
* A [preview link](https://help.shopify.com/manual/online-store/themes/adding-themes#share-a-theme-preview-with-others) that you can share with others.

If you use the `--json` flag, then theme information is returned in JSON format, which can be used as a machine-readable input for scripts or continuous integration.

Sample output:

```json
{
  "theme": {
    "id": 108267175958,
    "name": "MyTheme",
    "role": "unpublished",
    "shop": "mystore.myshopify.com",
    "editor_url": "https://mystore.myshopify.com/admin/themes/108267175958/editor",
    "preview_url": "https://mystore.myshopify.com/?preview_theme_id=108267175958"
  }
}
```

##### Flags

The following flags are available for the `theme push` command:

* **--listing \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_LISTING**

  The listing preset to use for multi-preset themes. Applies preset files from listings/\[preset-name] directory.

* **--no-color**

  **env: SHOPIFY\_FLAG\_NO\_COLOR**

  Disable color output.

* **--password \<value>**

  **string**

  **env: SHOPIFY\_CLI\_THEME\_TOKEN**

  Password generated from the Theme Access app or an Admin API token.

* **--path \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_PATH**

  The path where you want to run the command. Defaults to the current working directory.

* **--strict**

  **env: SHOPIFY\_FLAG\_STRICT\_PUSH**

  Require theme check to pass without errors before pushing. Warnings are allowed.

* **--verbose**

  **env: SHOPIFY\_FLAG\_VERBOSE**

  Increase the verbosity of the output.

* **-a, --allow-live**

  **env: SHOPIFY\_FLAG\_ALLOW\_LIVE**

  Allow push to a live theme.

* **-c, --development-context \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_DEVELOPMENT\_CONTEXT**

  Unique identifier for a development theme context (e.g., PR number, branch name). Reuses an existing development theme with this context name, or creates one if none exists.

* **-d, --development**

  **env: SHOPIFY\_FLAG\_DEVELOPMENT**

  Push theme files from your remote development theme.

* **-e, --environment \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_ENVIRONMENT**

  The environment to apply to the current command.

* **-j, --json**

  **env: SHOPIFY\_FLAG\_JSON**

  Output the result as JSON. Automatically disables color output.

* **-l, --live**

  **env: SHOPIFY\_FLAG\_LIVE**

  Push theme files from your remote live theme.

* **-n, --nodelete**

  **env: SHOPIFY\_FLAG\_NODELETE**

  Prevent deleting remote files that don't exist locally.

* **-o, --only \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_ONLY**

  Upload only the specified files (Multiple flags allowed). Wrap the value in double quotes if you're using wildcards.

* **-p, --publish**

  **env: SHOPIFY\_FLAG\_PUBLISH**

  Publish as the live theme after uploading.

* **-s, --store \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_STORE**

  Store URL. It can be the store prefix (example) or the full myshopify.com URL (example.myshopify.com, <https://example.myshopify.com>).

* **-t, --theme \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_THEME\_ID**

  Theme ID or name of the remote theme.

* **-u, --unpublished**

  **env: SHOPIFY\_FLAG\_UNPUBLISHED**

  Create a new unpublished theme and push to it.

* **-x, --ignore \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_IGNORE**

  Skip uploading the specified files (Multiple flags allowed). Wrap the value in double quotes if you're using wildcards.

Examples

#### Examples

* ####

  ##### theme push

  ```sh
  shopify theme push

  shopify theme push --unpublished --json
  ```

***

---



<a id="theme-theme-rename"></a>


## theme rename

Renames a theme in your store.

If no theme is specified, then you're prompted to select the theme that you want to rename from the list of themes in your store.

##### Flags

The following flags are available for the `theme rename` command:

* **--no-color**

  **env: SHOPIFY\_FLAG\_NO\_COLOR**

  Disable color output.

* **--password \<value>**

  **string**

  **env: SHOPIFY\_CLI\_THEME\_TOKEN**

  Password generated from the Theme Access app or an Admin API token.

* **--path \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_PATH**

  The path where you want to run the command. Defaults to the current working directory.

* **--verbose**

  **env: SHOPIFY\_FLAG\_VERBOSE**

  Increase the verbosity of the output.

* **-d, --development**

  **env: SHOPIFY\_FLAG\_DEVELOPMENT**

  Rename your development theme.

* **-e, --environment \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_ENVIRONMENT**

  The environment to apply to the current command.

* **-l, --live**

  **env: SHOPIFY\_FLAG\_LIVE**

  Rename your remote live theme.

* **-n, --name \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_NEW\_NAME**

  The new name for the theme.

* **-s, --store \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_STORE**

  Store URL. It can be the store prefix (example) or the full myshopify.com URL (example.myshopify.com, <https://example.myshopify.com>).

* **-t, --theme \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_THEME\_ID**

  Theme ID or name of the remote theme.

Examples

#### Examples

* ####

  ##### theme rename

  ```sh
  shopify theme rename [flags]
  ```

***

---



<a id="theme-theme-share"></a>


## theme share

Uploads your theme as a new, unpublished theme in your theme library. The theme is given a randomized name.

This command returns a [preview link](https://help.shopify.com/manual/online-store/themes/adding-themes#share-a-theme-preview-with-others) that you can share with others.

##### Flags

The following flags are available for the `theme share` command:

* **--listing \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_LISTING**

  The listing preset to use for multi-preset themes. Applies preset files from listings/\[preset-name] directory.

* **--no-color**

  **env: SHOPIFY\_FLAG\_NO\_COLOR**

  Disable color output.

* **--password \<value>**

  **string**

  **env: SHOPIFY\_CLI\_THEME\_TOKEN**

  Password generated from the Theme Access app or an Admin API token.

* **--path \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_PATH**

  The path where you want to run the command. Defaults to the current working directory.

* **--verbose**

  **env: SHOPIFY\_FLAG\_VERBOSE**

  Increase the verbosity of the output.

* **-e, --environment \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_ENVIRONMENT**

  The environment to apply to the current command.

* **-s, --store \<value>**

  **string**

  **env: SHOPIFY\_FLAG\_STORE**

  Store URL. It can be the store prefix (example) or the full myshopify.com URL (example.myshopify.com, <https://example.myshopify.com>).

Examples

#### Examples

* ####

  ##### theme share

  ```sh
  shopify theme share [flags]
  ```

***

---
