# Shopify Admin GraphQL API — Payloads

> Bagian dari Shopify Admin GraphQL API reference (split per kategori karena spec sangat besar — 3.866 halaman).
> Semua nama tipe, field, query, mutation, payload, dan contoh kode dipertahankan dalam bahasa Inggris persis dari sumber resmi Shopify.
> Tanggal kompilasi: 2026-05-02.
> Sumber: https://shopify.dev/docs/api/admin-graphql
> Total halaman dalam grup ini: **510**

Lihat juga file split lainnya:

- [admin-graphql.md](admin-graphql.md) — landing + indeks ke semua split
- [admin-graphql-objects.md](admin-graphql-objects.md) — GraphQL object types
- [admin-graphql-enums.md](admin-graphql-enums.md) — enum types
- [admin-graphql-input-objects.md](admin-graphql-input-objects.md) — input object types
- [admin-graphql-payloads.md](admin-graphql-payloads.md) — mutation payload types
- [admin-graphql-mutations.md](admin-graphql-mutations.md) — mutations
- [admin-graphql-queries.md](admin-graphql-queries.md) — queries
- [admin-graphql-connections.md](admin-graphql-connections.md) — connection types
- [admin-graphql-other.md](admin-graphql-other.md) — unions, interfaces, scalars

---

## Daftar Isi (Table of Contents)

- [Abandonment​Email​State​Update​Payload](#abandonment-email-state-update-payload) — `payloads/AbandonmentEmailStateUpdatePayload`
- [Abandonment​Update​Activities​Delivery​Statuses​Payload](#abandonment-update-activities-delivery-statuses-payload) — `payloads/AbandonmentUpdateActivitiesDeliveryStatusesPayload`
- [App​Purchase​One​Time​Create​Payload](#app-purchase-one-time-create-payload) — `payloads/AppPurchaseOneTimeCreatePayload`
- [App​Revoke​Access​Scopes​Payload](#app-revoke-access-scopes-payload) — `payloads/AppRevokeAccessScopesPayload`
- [App​Subscription​Cancel​Payload](#app-subscription-cancel-payload) — `payloads/AppSubscriptionCancelPayload`
- [App​Subscription​Create​Payload](#app-subscription-create-payload) — `payloads/AppSubscriptionCreatePayload`
- [App​Subscription​Line​Item​Update​Payload](#app-subscription-line-item-update-payload) — `payloads/AppSubscriptionLineItemUpdatePayload`
- [App​Subscription​Trial​Extend​Payload](#app-subscription-trial-extend-payload) — `payloads/AppSubscriptionTrialExtendPayload`
- [App​Uninstall​Payload](#app-uninstall-payload) — `payloads/AppUninstallPayload`
- [App​Usage​Record​Create​Payload](#app-usage-record-create-payload) — `payloads/AppUsageRecordCreatePayload`
- [Article​Create​Payload](#article-create-payload) — `payloads/ArticleCreatePayload`
- [Article​Delete​Payload](#article-delete-payload) — `payloads/ArticleDeletePayload`
- [Article​Update​Payload](#article-update-payload) — `payloads/ArticleUpdatePayload`
- [Backup​Region​Update​Payload](#backup-region-update-payload) — `payloads/BackupRegionUpdatePayload`
- [Blog​Create​Payload](#blog-create-payload) — `payloads/BlogCreatePayload`
- [Blog​Delete​Payload](#blog-delete-payload) — `payloads/BlogDeletePayload`
- [Blog​Update​Payload](#blog-update-payload) — `payloads/BlogUpdatePayload`
- [Bulk​Operation​Cancel​Payload](#bulk-operation-cancel-payload) — `payloads/BulkOperationCancelPayload`
- [Bulk​Operation​Run​Mutation​Payload](#bulk-operation-run-mutation-payload) — `payloads/BulkOperationRunMutationPayload`
- [Bulk​Operation​Run​Query​Payload](#bulk-operation-run-query-payload) — `payloads/BulkOperationRunQueryPayload`
- [Bulk​Product​Resource​Feedback​Create​Payload](#bulk-product-resource-feedback-create-payload) — `payloads/BulkProductResourceFeedbackCreatePayload`
- [Carrier​Service​Create​Payload](#carrier-service-create-payload) — `payloads/CarrierServiceCreatePayload`
- [Carrier​Service​Delete​Payload](#carrier-service-delete-payload) — `payloads/CarrierServiceDeletePayload`
- [Carrier​Service​Update​Payload](#carrier-service-update-payload) — `payloads/CarrierServiceUpdatePayload`
- [Cart​Transform​Create​Payload](#cart-transform-create-payload) — `payloads/CartTransformCreatePayload`
- [Cart​Transform​Delete​Payload](#cart-transform-delete-payload) — `payloads/CartTransformDeletePayload`
- [Cash​Drawer​Create​Payload](#cash-drawer-create-payload) — `payloads/CashDrawerCreatePayload`
- [Cash​Drawer​Find​Or​Create​Payload](#cash-drawer-find-or-create-payload) — `payloads/CashDrawerFindOrCreatePayload`
- [Cash​Drawer​Update​Payload](#cash-drawer-update-payload) — `payloads/CashDrawerUpdatePayload`
- [Cash​Management​Reason​Code​Create​Payload](#cash-management-reason-code-create-payload) — `payloads/CashManagementReasonCodeCreatePayload`
- [Cash​Management​Reason​Code​Delete​Payload](#cash-management-reason-code-delete-payload) — `payloads/CashManagementReasonCodeDeletePayload`
- [Catalog​Context​Update​Payload](#catalog-context-update-payload) — `payloads/CatalogContextUpdatePayload`
- [Catalog​Create​Payload](#catalog-create-payload) — `payloads/CatalogCreatePayload`
- [Catalog​Delete​Payload](#catalog-delete-payload) — `payloads/CatalogDeletePayload`
- [Catalog​Update​Payload](#catalog-update-payload) — `payloads/CatalogUpdatePayload`
- [Channel​Create​Payload](#channel-create-payload) — `payloads/ChannelCreatePayload`
- [Channel​Delete​Payload](#channel-delete-payload) — `payloads/ChannelDeletePayload`
- [Channel​Full​Sync​Payload](#channel-full-sync-payload) — `payloads/ChannelFullSyncPayload`
- [Channel​Update​Payload](#channel-update-payload) — `payloads/ChannelUpdatePayload`
- [Checkout​And​Accounts​Configuration​Update​Payload](#checkout-and-accounts-configuration-update-payload) — `payloads/CheckoutAndAccountsConfigurationUpdatePayload`
- [Checkout​Branding​Upsert​Payload](#checkout-branding-upsert-payload) — `payloads/CheckoutBrandingUpsertPayload`
- [Collection​Add​Products​Payload](#collection-add-products-payload) — `payloads/CollectionAddProductsPayload`
- [Collection​Add​Products​V2Payload](#collection-add-products-v2payload) — `payloads/CollectionAddProductsV2Payload`
- [Collection​Create​Payload](#collection-create-payload) — `payloads/CollectionCreatePayload`
- [Collection​Delete​Payload](#collection-delete-payload) — `payloads/CollectionDeletePayload`
- [Collection​Duplicate​Payload](#collection-duplicate-payload) — `payloads/CollectionDuplicatePayload`
- [Collection​Publish​Payload](#collection-publish-payload) — `payloads/CollectionPublishPayload`
- [Collection​Remove​Products​Payload](#collection-remove-products-payload) — `payloads/CollectionRemoveProductsPayload`
- [Collection​Reorder​Products​Payload](#collection-reorder-products-payload) — `payloads/CollectionReorderProductsPayload`
- [Collection​Unpublish​Payload](#collection-unpublish-payload) — `payloads/CollectionUnpublishPayload`
- [Collection​Update​Payload](#collection-update-payload) — `payloads/CollectionUpdatePayload`
- [Combined​Listing​Update​Payload](#combined-listing-update-payload) — `payloads/CombinedListingUpdatePayload`
- [Comment​Approve​Payload](#comment-approve-payload) — `payloads/CommentApprovePayload`
- [Comment​Delete​Payload](#comment-delete-payload) — `payloads/CommentDeletePayload`
- [Comment​Not​Spam​Payload](#comment-not-spam-payload) — `payloads/CommentNotSpamPayload`
- [Comment​Spam​Payload](#comment-spam-payload) — `payloads/CommentSpamPayload`
- [Companies​Delete​Payload](#companies-delete-payload) — `payloads/CompaniesDeletePayload`
- [Company​Address​Delete​Payload](#company-address-delete-payload) — `payloads/CompanyAddressDeletePayload`
- [Company​Assign​Customer​As​Contact​Payload](#company-assign-customer-as-contact-payload) — `payloads/CompanyAssignCustomerAsContactPayload`
- [Company​Assign​Main​Contact​Payload](#company-assign-main-contact-payload) — `payloads/CompanyAssignMainContactPayload`
- [Company​Contacts​Delete​Payload](#company-contacts-delete-payload) — `payloads/CompanyContactsDeletePayload`
- [Company​Contact​Assign​Roles​Payload](#company-contact-assign-roles-payload) — `payloads/CompanyContactAssignRolesPayload`
- [Company​Contact​Assign​Role​Payload](#company-contact-assign-role-payload) — `payloads/CompanyContactAssignRolePayload`
- [Company​Contact​Create​Payload](#company-contact-create-payload) — `payloads/CompanyContactCreatePayload`
- [Company​Contact​Delete​Payload](#company-contact-delete-payload) — `payloads/CompanyContactDeletePayload`
- [Company​Contact​Remove​From​Company​Payload](#company-contact-remove-from-company-payload) — `payloads/CompanyContactRemoveFromCompanyPayload`
- [Company​Contact​Revoke​Roles​Payload](#company-contact-revoke-roles-payload) — `payloads/CompanyContactRevokeRolesPayload`
- [Company​Contact​Revoke​Role​Payload](#company-contact-revoke-role-payload) — `payloads/CompanyContactRevokeRolePayload`
- [Company​Contact​Update​Payload](#company-contact-update-payload) — `payloads/CompanyContactUpdatePayload`
- [Company​Create​Payload](#company-create-payload) — `payloads/CompanyCreatePayload`
- [Company​Delete​Payload](#company-delete-payload) — `payloads/CompanyDeletePayload`
- [Company​Locations​Delete​Payload](#company-locations-delete-payload) — `payloads/CompanyLocationsDeletePayload`
- [Company​Location​Assign​Address​Payload](#company-location-assign-address-payload) — `payloads/CompanyLocationAssignAddressPayload`
- [Company​Location​Assign​Roles​Payload](#company-location-assign-roles-payload) — `payloads/CompanyLocationAssignRolesPayload`
- [Company​Location​Assign​Staff​Members​Payload](#company-location-assign-staff-members-payload) — `payloads/CompanyLocationAssignStaffMembersPayload`
- [Company​Location​Assign​Tax​Exemptions​Payload](#company-location-assign-tax-exemptions-payload) — `payloads/CompanyLocationAssignTaxExemptionsPayload`
- [Company​Location​Create​Payload](#company-location-create-payload) — `payloads/CompanyLocationCreatePayload`
- [Company​Location​Create​Tax​Registration​Payload](#company-location-create-tax-registration-payload) — `payloads/CompanyLocationCreateTaxRegistrationPayload`
- [Company​Location​Delete​Payload](#company-location-delete-payload) — `payloads/CompanyLocationDeletePayload`
- [Company​Location​Remove​Staff​Members​Payload](#company-location-remove-staff-members-payload) — `payloads/CompanyLocationRemoveStaffMembersPayload`
- [Company​Location​Revoke​Roles​Payload](#company-location-revoke-roles-payload) — `payloads/CompanyLocationRevokeRolesPayload`
- [Company​Location​Revoke​Tax​Exemptions​Payload](#company-location-revoke-tax-exemptions-payload) — `payloads/CompanyLocationRevokeTaxExemptionsPayload`
- [Company​Location​Revoke​Tax​Registration​Payload](#company-location-revoke-tax-registration-payload) — `payloads/CompanyLocationRevokeTaxRegistrationPayload`
- [Company​Location​Tax​Settings​Update​Payload](#company-location-tax-settings-update-payload) — `payloads/CompanyLocationTaxSettingsUpdatePayload`
- [Company​Location​Update​Payload](#company-location-update-payload) — `payloads/CompanyLocationUpdatePayload`
- [Company​Revoke​Main​Contact​Payload](#company-revoke-main-contact-payload) — `payloads/CompanyRevokeMainContactPayload`
- [Company​Update​Payload](#company-update-payload) — `payloads/CompanyUpdatePayload`
- [Consent​Policy​Update​Payload](#consent-policy-update-payload) — `payloads/ConsentPolicyUpdatePayload`
- [Customer​Address​Create​Payload](#customer-address-create-payload) — `payloads/CustomerAddressCreatePayload`
- [Customer​Address​Delete​Payload](#customer-address-delete-payload) — `payloads/CustomerAddressDeletePayload`
- [Customer​Address​Update​Payload](#customer-address-update-payload) — `payloads/CustomerAddressUpdatePayload`
- [Customer​Add​Tax​Exemptions​Payload](#customer-add-tax-exemptions-payload) — `payloads/CustomerAddTaxExemptionsPayload`
- [Customer​Cancel​Data​Erasure​Payload](#customer-cancel-data-erasure-payload) — `payloads/CustomerCancelDataErasurePayload`
- [Customer​Create​Payload](#customer-create-payload) — `payloads/CustomerCreatePayload`
- [Customer​Delete​Payload](#customer-delete-payload) — `payloads/CustomerDeletePayload`
- [Customer​Email​Marketing​Consent​Update​Payload](#customer-email-marketing-consent-update-payload) — `payloads/CustomerEmailMarketingConsentUpdatePayload`
- [Customer​Generate​Account​Activation​Url​Payload](#customer-generate-account-activation-url-payload) — `payloads/CustomerGenerateAccountActivationUrlPayload`
- [Customer​Merge​Payload](#customer-merge-payload) — `payloads/CustomerMergePayload`
- [Customer​Payment​Method​Credit​Card​Create​Payload](#customer-payment-method-credit-card-create-payload) — `payloads/CustomerPaymentMethodCreditCardCreatePayload`
- [Customer​Payment​Method​Credit​Card​Update​Payload](#customer-payment-method-credit-card-update-payload) — `payloads/CustomerPaymentMethodCreditCardUpdatePayload`
- [Customer​Payment​Method​Get​Update​Url​Payload](#customer-payment-method-get-update-url-payload) — `payloads/CustomerPaymentMethodGetUpdateUrlPayload`
- [Customer​Payment​Method​Paypal​Billing​Agreement​Create​Payload](#customer-payment-method-paypal-billing-agreement-create-payload) — `payloads/CustomerPaymentMethodPaypalBillingAgreementCreatePayload`
- [Customer​Payment​Method​Paypal​Billing​Agreement​Update​Payload](#customer-payment-method-paypal-billing-agreement-update-payload) — `payloads/CustomerPaymentMethodPaypalBillingAgreementUpdatePayload`
- [Customer​Payment​Method​Remote​Create​Payload](#customer-payment-method-remote-create-payload) — `payloads/CustomerPaymentMethodRemoteCreatePayload`
- [Customer​Payment​Method​Revoke​Payload](#customer-payment-method-revoke-payload) — `payloads/CustomerPaymentMethodRevokePayload`
- [Customer​Payment​Method​Send​Update​Email​Payload](#customer-payment-method-send-update-email-payload) — `payloads/CustomerPaymentMethodSendUpdateEmailPayload`
- [Customer​Remove​Tax​Exemptions​Payload](#customer-remove-tax-exemptions-payload) — `payloads/CustomerRemoveTaxExemptionsPayload`
- [Customer​Replace​Tax​Exemptions​Payload](#customer-replace-tax-exemptions-payload) — `payloads/CustomerReplaceTaxExemptionsPayload`
- [Customer​Request​Data​Erasure​Payload](#customer-request-data-erasure-payload) — `payloads/CustomerRequestDataErasurePayload`
- [Customer​Segment​Members​Query​Create​Payload](#customer-segment-members-query-create-payload) — `payloads/CustomerSegmentMembersQueryCreatePayload`
- [Customer​Send​Account​Invite​Email​Payload](#customer-send-account-invite-email-payload) — `payloads/CustomerSendAccountInviteEmailPayload`
- [Customer​Set​Payload](#customer-set-payload) — `payloads/CustomerSetPayload`
- [Customer​Sms​Marketing​Consent​Update​Payload](#customer-sms-marketing-consent-update-payload) — `payloads/CustomerSmsMarketingConsentUpdatePayload`
- [Customer​Update​Default​Address​Payload](#customer-update-default-address-payload) — `payloads/CustomerUpdateDefaultAddressPayload`
- [Customer​Update​Payload](#customer-update-payload) — `payloads/CustomerUpdatePayload`
- [Data​Sale​Opt​Out​Payload](#data-sale-opt-out-payload) — `payloads/DataSaleOptOutPayload`
- [Delegate​Access​Token​Create​Payload](#delegate-access-token-create-payload) — `payloads/DelegateAccessTokenCreatePayload`
- [Delegate​Access​Token​Destroy​Payload](#delegate-access-token-destroy-payload) — `payloads/DelegateAccessTokenDestroyPayload`
- [Delivery​Customization​Activation​Payload](#delivery-customization-activation-payload) — `payloads/DeliveryCustomizationActivationPayload`
- [Delivery​Customization​Create​Payload](#delivery-customization-create-payload) — `payloads/DeliveryCustomizationCreatePayload`
- [Delivery​Customization​Delete​Payload](#delivery-customization-delete-payload) — `payloads/DeliveryCustomizationDeletePayload`
- [Delivery​Customization​Update​Payload](#delivery-customization-update-payload) — `payloads/DeliveryCustomizationUpdatePayload`
- [Delivery​Profile​Create​Payload](#delivery-profile-create-payload) — `payloads/DeliveryProfileCreatePayload`
- [Delivery​Profile​Remove​Payload](#delivery-profile-remove-payload) — `payloads/DeliveryProfileRemovePayload`
- [Delivery​Profile​Update​Payload](#delivery-profile-update-payload) — `payloads/DeliveryProfileUpdatePayload`
- [Delivery​Promise​Participants​Update​Payload](#delivery-promise-participants-update-payload) — `payloads/DeliveryPromiseParticipantsUpdatePayload`
- [Delivery​Promise​Provider​Upsert​Payload](#delivery-promise-provider-upsert-payload) — `payloads/DeliveryPromiseProviderUpsertPayload`
- [Delivery​Setting​Update​Payload](#delivery-setting-update-payload) — `payloads/DeliverySettingUpdatePayload`
- [Delivery​Shipping​Origin​Assign​Payload](#delivery-shipping-origin-assign-payload) — `payloads/DeliveryShippingOriginAssignPayload`
- [Discount​Automatic​Activate​Payload](#discount-automatic-activate-payload) — `payloads/DiscountAutomaticActivatePayload`
- [Discount​Automatic​App​Create​Payload](#discount-automatic-app-create-payload) — `payloads/DiscountAutomaticAppCreatePayload`
- [Discount​Automatic​App​Update​Payload](#discount-automatic-app-update-payload) — `payloads/DiscountAutomaticAppUpdatePayload`
- [Discount​Automatic​Basic​Create​Payload](#discount-automatic-basic-create-payload) — `payloads/DiscountAutomaticBasicCreatePayload`
- [Discount​Automatic​Basic​Update​Payload](#discount-automatic-basic-update-payload) — `payloads/DiscountAutomaticBasicUpdatePayload`
- [Discount​Automatic​Bulk​Delete​Payload](#discount-automatic-bulk-delete-payload) — `payloads/DiscountAutomaticBulkDeletePayload`
- [Discount​Automatic​Bxgy​Create​Payload](#discount-automatic-bxgy-create-payload) — `payloads/DiscountAutomaticBxgyCreatePayload`
- [Discount​Automatic​Bxgy​Update​Payload](#discount-automatic-bxgy-update-payload) — `payloads/DiscountAutomaticBxgyUpdatePayload`
- [Discount​Automatic​Deactivate​Payload](#discount-automatic-deactivate-payload) — `payloads/DiscountAutomaticDeactivatePayload`
- [Discount​Automatic​Delete​Payload](#discount-automatic-delete-payload) — `payloads/DiscountAutomaticDeletePayload`
- [Discount​Automatic​Free​Shipping​Create​Payload](#discount-automatic-free-shipping-create-payload) — `payloads/DiscountAutomaticFreeShippingCreatePayload`
- [Discount​Automatic​Free​Shipping​Update​Payload](#discount-automatic-free-shipping-update-payload) — `payloads/DiscountAutomaticFreeShippingUpdatePayload`
- [Discount​Bulk​Tags​Add​Payload](#discount-bulk-tags-add-payload) — `payloads/DiscountBulkTagsAddPayload`
- [Discount​Bulk​Tags​Remove​Payload](#discount-bulk-tags-remove-payload) — `payloads/DiscountBulkTagsRemovePayload`
- [Discount​Code​Activate​Payload](#discount-code-activate-payload) — `payloads/DiscountCodeActivatePayload`
- [Discount​Code​App​Create​Payload](#discount-code-app-create-payload) — `payloads/DiscountCodeAppCreatePayload`
- [Discount​Code​App​Update​Payload](#discount-code-app-update-payload) — `payloads/DiscountCodeAppUpdatePayload`
- [Discount​Code​Basic​Create​Payload](#discount-code-basic-create-payload) — `payloads/DiscountCodeBasicCreatePayload`
- [Discount​Code​Basic​Update​Payload](#discount-code-basic-update-payload) — `payloads/DiscountCodeBasicUpdatePayload`
- [Discount​Code​Bulk​Activate​Payload](#discount-code-bulk-activate-payload) — `payloads/DiscountCodeBulkActivatePayload`
- [Discount​Code​Bulk​Deactivate​Payload](#discount-code-bulk-deactivate-payload) — `payloads/DiscountCodeBulkDeactivatePayload`
- [Discount​Code​Bulk​Delete​Payload](#discount-code-bulk-delete-payload) — `payloads/DiscountCodeBulkDeletePayload`
- [Discount​Code​Bxgy​Create​Payload](#discount-code-bxgy-create-payload) — `payloads/DiscountCodeBxgyCreatePayload`
- [Discount​Code​Bxgy​Update​Payload](#discount-code-bxgy-update-payload) — `payloads/DiscountCodeBxgyUpdatePayload`
- [Discount​Code​Deactivate​Payload](#discount-code-deactivate-payload) — `payloads/DiscountCodeDeactivatePayload`
- [Discount​Code​Delete​Payload](#discount-code-delete-payload) — `payloads/DiscountCodeDeletePayload`
- [Discount​Code​Free​Shipping​Create​Payload](#discount-code-free-shipping-create-payload) — `payloads/DiscountCodeFreeShippingCreatePayload`
- [Discount​Code​Free​Shipping​Update​Payload](#discount-code-free-shipping-update-payload) — `payloads/DiscountCodeFreeShippingUpdatePayload`
- [Discount​Code​Redeem​Code​Bulk​Delete​Payload](#discount-code-redeem-code-bulk-delete-payload) — `payloads/DiscountCodeRedeemCodeBulkDeletePayload`
- [Discount​Redeem​Code​Bulk​Add​Payload](#discount-redeem-code-bulk-add-payload) — `payloads/DiscountRedeemCodeBulkAddPayload`
- [Dispute​Evidence​Update​Payload](#dispute-evidence-update-payload) — `payloads/DisputeEvidenceUpdatePayload`
- [Draft​Order​Bulk​Add​Tags​Payload](#draft-order-bulk-add-tags-payload) — `payloads/DraftOrderBulkAddTagsPayload`
- [Draft​Order​Bulk​Delete​Payload](#draft-order-bulk-delete-payload) — `payloads/DraftOrderBulkDeletePayload`
- [Draft​Order​Bulk​Remove​Tags​Payload](#draft-order-bulk-remove-tags-payload) — `payloads/DraftOrderBulkRemoveTagsPayload`
- [Draft​Order​Calculate​Payload](#draft-order-calculate-payload) — `payloads/DraftOrderCalculatePayload`
- [Draft​Order​Complete​Payload](#draft-order-complete-payload) — `payloads/DraftOrderCompletePayload`
- [Draft​Order​Create​From​Order​Payload](#draft-order-create-from-order-payload) — `payloads/DraftOrderCreateFromOrderPayload`
- [Draft​Order​Create​Payload](#draft-order-create-payload) — `payloads/DraftOrderCreatePayload`
- [Draft​Order​Delete​Payload](#draft-order-delete-payload) — `payloads/DraftOrderDeletePayload`
- [Draft​Order​Duplicate​Payload](#draft-order-duplicate-payload) — `payloads/DraftOrderDuplicatePayload`
- [Draft​Order​Invoice​Preview​Payload](#draft-order-invoice-preview-payload) — `payloads/DraftOrderInvoicePreviewPayload`
- [Draft​Order​Invoice​Send​Payload](#draft-order-invoice-send-payload) — `payloads/DraftOrderInvoiceSendPayload`
- [Draft​Order​Update​Payload](#draft-order-update-payload) — `payloads/DraftOrderUpdatePayload`
- [Event​Bridge​Server​Pixel​Update​Payload](#event-bridge-server-pixel-update-payload) — `payloads/EventBridgeServerPixelUpdatePayload`
- [Event​Bridge​Webhook​Subscription​Create​Payload](#event-bridge-webhook-subscription-create-payload) — `payloads/EventBridgeWebhookSubscriptionCreatePayload`
- [Event​Bridge​Webhook​Subscription​Update​Payload](#event-bridge-webhook-subscription-update-payload) — `payloads/EventBridgeWebhookSubscriptionUpdatePayload`
- [File​Acknowledge​Update​Failed​Payload](#file-acknowledge-update-failed-payload) — `payloads/FileAcknowledgeUpdateFailedPayload`
- [File​Create​Payload](#file-create-payload) — `payloads/FileCreatePayload`
- [File​Delete​Payload](#file-delete-payload) — `payloads/FileDeletePayload`
- [File​Update​Payload](#file-update-payload) — `payloads/FileUpdatePayload`
- [Flow​Trigger​Receive​Payload](#flow-trigger-receive-payload) — `payloads/FlowTriggerReceivePayload`
- [Fulfillment​Cancel​Payload](#fulfillment-cancel-payload) — `payloads/FulfillmentCancelPayload`
- [Fulfillment​Constraint​Rule​Create​Payload](#fulfillment-constraint-rule-create-payload) — `payloads/FulfillmentConstraintRuleCreatePayload`
- [Fulfillment​Constraint​Rule​Delete​Payload](#fulfillment-constraint-rule-delete-payload) — `payloads/FulfillmentConstraintRuleDeletePayload`
- [Fulfillment​Constraint​Rule​Update​Payload](#fulfillment-constraint-rule-update-payload) — `payloads/FulfillmentConstraintRuleUpdatePayload`
- [Fulfillment​Create​Payload](#fulfillment-create-payload) — `payloads/FulfillmentCreatePayload`
- [Fulfillment​Create​V2Payload](#fulfillment-create-v2payload) — `payloads/FulfillmentCreateV2Payload`
- [Fulfillment​Event​Create​Payload](#fulfillment-event-create-payload) — `payloads/FulfillmentEventCreatePayload`
- [Fulfillment​Orders​Reroute​Payload](#fulfillment-orders-reroute-payload) — `payloads/FulfillmentOrdersReroutePayload`
- [Fulfillment​Orders​Set​Fulfillment​Deadline​Payload](#fulfillment-orders-set-fulfillment-deadline-payload) — `payloads/FulfillmentOrdersSetFulfillmentDeadlinePayload`
- [Fulfillment​Order​Accept​Cancellation​Request​Payload](#fulfillment-order-accept-cancellation-request-payload) — `payloads/FulfillmentOrderAcceptCancellationRequestPayload`
- [Fulfillment​Order​Accept​Fulfillment​Request​Payload](#fulfillment-order-accept-fulfillment-request-payload) — `payloads/FulfillmentOrderAcceptFulfillmentRequestPayload`
- [Fulfillment​Order​Cancel​Payload](#fulfillment-order-cancel-payload) — `payloads/FulfillmentOrderCancelPayload`
- [Fulfillment​Order​Close​Payload](#fulfillment-order-close-payload) — `payloads/FulfillmentOrderClosePayload`
- [Fulfillment​Order​Hold​Payload](#fulfillment-order-hold-payload) — `payloads/FulfillmentOrderHoldPayload`
- [Fulfillment​Order​Line​Items​Prepared​For​Pickup​Payload](#fulfillment-order-line-items-prepared-for-pickup-payload) — `payloads/FulfillmentOrderLineItemsPreparedForPickupPayload`
- [Fulfillment​Order​Merge​Payload](#fulfillment-order-merge-payload) — `payloads/FulfillmentOrderMergePayload`
- [Fulfillment​Order​Move​Payload](#fulfillment-order-move-payload) — `payloads/FulfillmentOrderMovePayload`
- [Fulfillment​Order​Open​Payload](#fulfillment-order-open-payload) — `payloads/FulfillmentOrderOpenPayload`
- [Fulfillment​Order​Reject​Cancellation​Request​Payload](#fulfillment-order-reject-cancellation-request-payload) — `payloads/FulfillmentOrderRejectCancellationRequestPayload`
- [Fulfillment​Order​Reject​Fulfillment​Request​Payload](#fulfillment-order-reject-fulfillment-request-payload) — `payloads/FulfillmentOrderRejectFulfillmentRequestPayload`
- [Fulfillment​Order​Release​Hold​Payload](#fulfillment-order-release-hold-payload) — `payloads/FulfillmentOrderReleaseHoldPayload`
- [Fulfillment​Order​Report​Progress​Payload](#fulfillment-order-report-progress-payload) — `payloads/FulfillmentOrderReportProgressPayload`
- [Fulfillment​Order​Reschedule​Payload](#fulfillment-order-reschedule-payload) — `payloads/FulfillmentOrderReschedulePayload`
- [Fulfillment​Order​Split​Payload](#fulfillment-order-split-payload) — `payloads/FulfillmentOrderSplitPayload`
- [Fulfillment​Order​Submit​Cancellation​Request​Payload](#fulfillment-order-submit-cancellation-request-payload) — `payloads/FulfillmentOrderSubmitCancellationRequestPayload`
- [Fulfillment​Order​Submit​Fulfillment​Request​Payload](#fulfillment-order-submit-fulfillment-request-payload) — `payloads/FulfillmentOrderSubmitFulfillmentRequestPayload`
- [Fulfillment​Service​Create​Payload](#fulfillment-service-create-payload) — `payloads/FulfillmentServiceCreatePayload`
- [Fulfillment​Service​Delete​Payload](#fulfillment-service-delete-payload) — `payloads/FulfillmentServiceDeletePayload`
- [Fulfillment​Service​Update​Payload](#fulfillment-service-update-payload) — `payloads/FulfillmentServiceUpdatePayload`
- [Fulfillment​Tracking​Info​Update​Payload](#fulfillment-tracking-info-update-payload) — `payloads/FulfillmentTrackingInfoUpdatePayload`
- [Fulfillment​Tracking​Info​Update​V2Payload](#fulfillment-tracking-info-update-v2payload) — `payloads/FulfillmentTrackingInfoUpdateV2Payload`
- [Gift​Card​Create​Payload](#gift-card-create-payload) — `payloads/GiftCardCreatePayload`
- [Gift​Card​Credit​Payload](#gift-card-credit-payload) — `payloads/GiftCardCreditPayload`
- [Gift​Card​Deactivate​Payload](#gift-card-deactivate-payload) — `payloads/GiftCardDeactivatePayload`
- [Gift​Card​Debit​Payload](#gift-card-debit-payload) — `payloads/GiftCardDebitPayload`
- [Gift​Card​Send​Notification​To​Customer​Payload](#gift-card-send-notification-to-customer-payload) — `payloads/GiftCardSendNotificationToCustomerPayload`
- [Gift​Card​Send​Notification​To​Recipient​Payload](#gift-card-send-notification-to-recipient-payload) — `payloads/GiftCardSendNotificationToRecipientPayload`
- [Gift​Card​Update​Payload](#gift-card-update-payload) — `payloads/GiftCardUpdatePayload`
- [Inventory​Activate​Payload](#inventory-activate-payload) — `payloads/InventoryActivatePayload`
- [Inventory​Adjust​Quantities​Payload](#inventory-adjust-quantities-payload) — `payloads/InventoryAdjustQuantitiesPayload`
- [Inventory​Bulk​Toggle​Activation​Payload](#inventory-bulk-toggle-activation-payload) — `payloads/InventoryBulkToggleActivationPayload`
- [Inventory​Deactivate​Payload](#inventory-deactivate-payload) — `payloads/InventoryDeactivatePayload`
- [Inventory​Item​Update​Payload](#inventory-item-update-payload) — `payloads/InventoryItemUpdatePayload`
- [Inventory​Move​Quantities​Payload](#inventory-move-quantities-payload) — `payloads/InventoryMoveQuantitiesPayload`
- [Inventory​Set​On​Hand​Quantities​Payload](#inventory-set-on-hand-quantities-payload) — `payloads/InventorySetOnHandQuantitiesPayload`
- [Inventory​Set​Quantities​Payload](#inventory-set-quantities-payload) — `payloads/InventorySetQuantitiesPayload`
- [Inventory​Set​Scheduled​Changes​Payload](#inventory-set-scheduled-changes-payload) — `payloads/InventorySetScheduledChangesPayload`
- [Inventory​Shipment​Add​Items​Payload](#inventory-shipment-add-items-payload) — `payloads/InventoryShipmentAddItemsPayload`
- [Inventory​Shipment​Create​In​Transit​Payload](#inventory-shipment-create-in-transit-payload) — `payloads/InventoryShipmentCreateInTransitPayload`
- [Inventory​Shipment​Create​Payload](#inventory-shipment-create-payload) — `payloads/InventoryShipmentCreatePayload`
- [Inventory​Shipment​Delete​Payload](#inventory-shipment-delete-payload) — `payloads/InventoryShipmentDeletePayload`
- [Inventory​Shipment​Mark​In​Transit​Payload](#inventory-shipment-mark-in-transit-payload) — `payloads/InventoryShipmentMarkInTransitPayload`
- [Inventory​Shipment​Receive​Payload](#inventory-shipment-receive-payload) — `payloads/InventoryShipmentReceivePayload`
- [Inventory​Shipment​Remove​Items​Payload](#inventory-shipment-remove-items-payload) — `payloads/InventoryShipmentRemoveItemsPayload`
- [Inventory​Shipment​Set​Barcode​Payload](#inventory-shipment-set-barcode-payload) — `payloads/InventoryShipmentSetBarcodePayload`
- [Inventory​Shipment​Set​Tracking​Payload](#inventory-shipment-set-tracking-payload) — `payloads/InventoryShipmentSetTrackingPayload`
- [Inventory​Shipment​Update​Item​Quantities​Payload](#inventory-shipment-update-item-quantities-payload) — `payloads/InventoryShipmentUpdateItemQuantitiesPayload`
- [Inventory​Transfer​Cancel​Payload](#inventory-transfer-cancel-payload) — `payloads/InventoryTransferCancelPayload`
- [Inventory​Transfer​Create​As​Ready​To​Ship​Payload](#inventory-transfer-create-as-ready-to-ship-payload) — `payloads/InventoryTransferCreateAsReadyToShipPayload`
- [Inventory​Transfer​Create​Payload](#inventory-transfer-create-payload) — `payloads/InventoryTransferCreatePayload`
- [Inventory​Transfer​Delete​Payload](#inventory-transfer-delete-payload) — `payloads/InventoryTransferDeletePayload`
- [Inventory​Transfer​Duplicate​Payload](#inventory-transfer-duplicate-payload) — `payloads/InventoryTransferDuplicatePayload`
- [Inventory​Transfer​Edit​Payload](#inventory-transfer-edit-payload) — `payloads/InventoryTransferEditPayload`
- [Inventory​Transfer​Mark​As​Ready​To​Ship​Payload](#inventory-transfer-mark-as-ready-to-ship-payload) — `payloads/InventoryTransferMarkAsReadyToShipPayload`
- [Inventory​Transfer​Remove​Items​Payload](#inventory-transfer-remove-items-payload) — `payloads/InventoryTransferRemoveItemsPayload`
- [Inventory​Transfer​Set​Items​Payload](#inventory-transfer-set-items-payload) — `payloads/InventoryTransferSetItemsPayload`
- [Location​Activate​Payload](#location-activate-payload) — `payloads/LocationActivatePayload`
- [Location​Add​Payload](#location-add-payload) — `payloads/LocationAddPayload`
- [Location​Deactivate​Payload](#location-deactivate-payload) — `payloads/LocationDeactivatePayload`
- [Location​Delete​Payload](#location-delete-payload) — `payloads/LocationDeletePayload`
- [Location​Edit​Payload](#location-edit-payload) — `payloads/LocationEditPayload`
- [Location​Local​Pickup​Disable​Payload](#location-local-pickup-disable-payload) — `payloads/LocationLocalPickupDisablePayload`
- [Location​Local​Pickup​Enable​Payload](#location-local-pickup-enable-payload) — `payloads/LocationLocalPickupEnablePayload`
- [Marketing​Activities​Delete​All​External​Payload](#marketing-activities-delete-all-external-payload) — `payloads/MarketingActivitiesDeleteAllExternalPayload`
- [Marketing​Activity​Create​External​Payload](#marketing-activity-create-external-payload) — `payloads/MarketingActivityCreateExternalPayload`
- [Marketing​Activity​Create​Payload](#marketing-activity-create-payload) — `payloads/MarketingActivityCreatePayload`
- [Marketing​Activity​Delete​External​Payload](#marketing-activity-delete-external-payload) — `payloads/MarketingActivityDeleteExternalPayload`
- [Marketing​Activity​Update​External​Payload](#marketing-activity-update-external-payload) — `payloads/MarketingActivityUpdateExternalPayload`
- [Marketing​Activity​Update​Payload](#marketing-activity-update-payload) — `payloads/MarketingActivityUpdatePayload`
- [Marketing​Activity​Upsert​External​Payload](#marketing-activity-upsert-external-payload) — `payloads/MarketingActivityUpsertExternalPayload`
- [Marketing​Engagements​Delete​Payload](#marketing-engagements-delete-payload) — `payloads/MarketingEngagementsDeletePayload`
- [Marketing​Engagement​Create​Payload](#marketing-engagement-create-payload) — `payloads/MarketingEngagementCreatePayload`
- [Market​Create​Payload](#market-create-payload) — `payloads/MarketCreatePayload`
- [Market​Currency​Settings​Update​Payload](#market-currency-settings-update-payload) — `payloads/MarketCurrencySettingsUpdatePayload`
- [Market​Delete​Payload](#market-delete-payload) — `payloads/MarketDeletePayload`
- [Market​Localizations​Register​Payload](#market-localizations-register-payload) — `payloads/MarketLocalizationsRegisterPayload`
- [Market​Localizations​Remove​Payload](#market-localizations-remove-payload) — `payloads/MarketLocalizationsRemovePayload`
- [Market​Regions​Create​Payload](#market-regions-create-payload) — `payloads/MarketRegionsCreatePayload`
- [Market​Regions​Delete​Payload](#market-regions-delete-payload) — `payloads/MarketRegionsDeletePayload`
- [Market​Region​Delete​Payload](#market-region-delete-payload) — `payloads/MarketRegionDeletePayload`
- [Market​Update​Payload](#market-update-payload) — `payloads/MarketUpdatePayload`
- [Market​Web​Presence​Create​Payload](#market-web-presence-create-payload) — `payloads/MarketWebPresenceCreatePayload`
- [Market​Web​Presence​Delete​Payload](#market-web-presence-delete-payload) — `payloads/MarketWebPresenceDeletePayload`
- [Market​Web​Presence​Update​Payload](#market-web-presence-update-payload) — `payloads/MarketWebPresenceUpdatePayload`
- [Menu​Create​Payload](#menu-create-payload) — `payloads/MenuCreatePayload`
- [Menu​Delete​Payload](#menu-delete-payload) — `payloads/MenuDeletePayload`
- [Menu​Update​Payload](#menu-update-payload) — `payloads/MenuUpdatePayload`
- [Metafields​Delete​Payload](#metafields-delete-payload) — `payloads/MetafieldsDeletePayload`
- [Metafields​Set​Payload](#metafields-set-payload) — `payloads/MetafieldsSetPayload`
- [Metafield​Definition​Create​Payload](#metafield-definition-create-payload) — `payloads/MetafieldDefinitionCreatePayload`
- [Metafield​Definition​Delete​Payload](#metafield-definition-delete-payload) — `payloads/MetafieldDefinitionDeletePayload`
- [Metafield​Definition​Pin​Payload](#metafield-definition-pin-payload) — `payloads/MetafieldDefinitionPinPayload`
- [Metafield​Definition​Unpin​Payload](#metafield-definition-unpin-payload) — `payloads/MetafieldDefinitionUnpinPayload`
- [Metafield​Definition​Update​Payload](#metafield-definition-update-payload) — `payloads/MetafieldDefinitionUpdatePayload`
- [Metaobject​Bulk​Delete​Payload](#metaobject-bulk-delete-payload) — `payloads/MetaobjectBulkDeletePayload`
- [Metaobject​Create​Payload](#metaobject-create-payload) — `payloads/MetaobjectCreatePayload`
- [Metaobject​Definition​Create​Payload](#metaobject-definition-create-payload) — `payloads/MetaobjectDefinitionCreatePayload`
- [Metaobject​Definition​Delete​Payload](#metaobject-definition-delete-payload) — `payloads/MetaobjectDefinitionDeletePayload`
- [Metaobject​Definition​Update​Payload](#metaobject-definition-update-payload) — `payloads/MetaobjectDefinitionUpdatePayload`
- [Metaobject​Delete​Payload](#metaobject-delete-payload) — `payloads/MetaobjectDeletePayload`
- [Metaobject​Update​Payload](#metaobject-update-payload) — `payloads/MetaobjectUpdatePayload`
- [Metaobject​Upsert​Payload](#metaobject-upsert-payload) — `payloads/MetaobjectUpsertPayload`
- [Mobile​Platform​Application​Create​Payload](#mobile-platform-application-create-payload) — `payloads/MobilePlatformApplicationCreatePayload`
- [Mobile​Platform​Application​Delete​Payload](#mobile-platform-application-delete-payload) — `payloads/MobilePlatformApplicationDeletePayload`
- [Mobile​Platform​Application​Update​Payload](#mobile-platform-application-update-payload) — `payloads/MobilePlatformApplicationUpdatePayload`
- [Order​Cancel​Payload](#order-cancel-payload) — `payloads/OrderCancelPayload`
- [Order​Capture​Payload](#order-capture-payload) — `payloads/OrderCapturePayload`
- [Order​Close​Payload](#order-close-payload) — `payloads/OrderClosePayload`
- [Order​Create​Mandate​Payment​Payload](#order-create-mandate-payment-payload) — `payloads/OrderCreateMandatePaymentPayload`
- [Order​Create​Manual​Payment​Payload](#order-create-manual-payment-payload) — `payloads/OrderCreateManualPaymentPayload`
- [Order​Create​Payload](#order-create-payload) — `payloads/OrderCreatePayload`
- [Order​Customer​Remove​Payload](#order-customer-remove-payload) — `payloads/OrderCustomerRemovePayload`
- [Order​Customer​Set​Payload](#order-customer-set-payload) — `payloads/OrderCustomerSetPayload`
- [Order​Delete​Payload](#order-delete-payload) — `payloads/OrderDeletePayload`
- [Order​Edit​Add​Custom​Item​Payload](#order-edit-add-custom-item-payload) — `payloads/OrderEditAddCustomItemPayload`
- [Order​Edit​Add​Line​Item​Discount​Payload](#order-edit-add-line-item-discount-payload) — `payloads/OrderEditAddLineItemDiscountPayload`
- [Order​Edit​Add​Shipping​Line​Payload](#order-edit-add-shipping-line-payload) — `payloads/OrderEditAddShippingLinePayload`
- [Order​Edit​Add​Variant​Payload](#order-edit-add-variant-payload) — `payloads/OrderEditAddVariantPayload`
- [Order​Edit​Begin​Payload](#order-edit-begin-payload) — `payloads/OrderEditBeginPayload`
- [Order​Edit​Commit​Payload](#order-edit-commit-payload) — `payloads/OrderEditCommitPayload`
- [Order​Edit​Remove​Discount​Payload](#order-edit-remove-discount-payload) — `payloads/OrderEditRemoveDiscountPayload`
- [Order​Edit​Remove​Line​Item​Discount​Payload](#order-edit-remove-line-item-discount-payload) — `payloads/OrderEditRemoveLineItemDiscountPayload`
- [Order​Edit​Remove​Shipping​Line​Payload](#order-edit-remove-shipping-line-payload) — `payloads/OrderEditRemoveShippingLinePayload`
- [Order​Edit​Set​Quantity​Payload](#order-edit-set-quantity-payload) — `payloads/OrderEditSetQuantityPayload`
- [Order​Edit​Update​Discount​Payload](#order-edit-update-discount-payload) — `payloads/OrderEditUpdateDiscountPayload`
- [Order​Edit​Update​Shipping​Line​Payload](#order-edit-update-shipping-line-payload) — `payloads/OrderEditUpdateShippingLinePayload`
- [Order​Invoice​Send​Payload](#order-invoice-send-payload) — `payloads/OrderInvoiceSendPayload`
- [Order​Mark​As​Paid​Payload](#order-mark-as-paid-payload) — `payloads/OrderMarkAsPaidPayload`
- [Order​Open​Payload](#order-open-payload) — `payloads/OrderOpenPayload`
- [Order​Risk​Assessment​Create​Payload](#order-risk-assessment-create-payload) — `payloads/OrderRiskAssessmentCreatePayload`
- [Order​Update​Payload](#order-update-payload) — `payloads/OrderUpdatePayload`
- [Page​Create​Payload](#page-create-payload) — `payloads/PageCreatePayload`
- [Page​Delete​Payload](#page-delete-payload) — `payloads/PageDeletePayload`
- [Page​Update​Payload](#page-update-payload) — `payloads/PageUpdatePayload`
- [Payment​Customization​Activation​Payload](#payment-customization-activation-payload) — `payloads/PaymentCustomizationActivationPayload`
- [Payment​Customization​Create​Payload](#payment-customization-create-payload) — `payloads/PaymentCustomizationCreatePayload`
- [Payment​Customization​Delete​Payload](#payment-customization-delete-payload) — `payloads/PaymentCustomizationDeletePayload`
- [Payment​Customization​Update​Payload](#payment-customization-update-payload) — `payloads/PaymentCustomizationUpdatePayload`
- [Payment​Reminder​Send​Payload](#payment-reminder-send-payload) — `payloads/PaymentReminderSendPayload`
- [Payment​Terms​Create​Payload](#payment-terms-create-payload) — `payloads/PaymentTermsCreatePayload`
- [Payment​Terms​Delete​Payload](#payment-terms-delete-payload) — `payloads/PaymentTermsDeletePayload`
- [Payment​Terms​Update​Payload](#payment-terms-update-payload) — `payloads/PaymentTermsUpdatePayload`
- [Point​Of​Sale​Device​Assign​To​Cash​Drawer​Payload](#point-of-sale-device-assign-to-cash-drawer-payload) — `payloads/PointOfSaleDeviceAssignToCashDrawerPayload`
- [Point​Of​Sale​Device​Payment​Session​Adjust​Payload](#point-of-sale-device-payment-session-adjust-payload) — `payloads/PointOfSaleDevicePaymentSessionAdjustPayload`
- [Point​Of​Sale​Device​Payment​Session​Close​Payload](#point-of-sale-device-payment-session-close-payload) — `payloads/PointOfSaleDevicePaymentSessionClosePayload`
- [Point​Of​Sale​Device​Payment​Session​Count​Payload](#point-of-sale-device-payment-session-count-payload) — `payloads/PointOfSaleDevicePaymentSessionCountPayload`
- [Point​Of​Sale​Device​Payment​Session​Open​Payload](#point-of-sale-device-payment-session-open-payload) — `payloads/PointOfSaleDevicePaymentSessionOpenPayload`
- [Price​List​Create​Payload](#price-list-create-payload) — `payloads/PriceListCreatePayload`
- [Price​List​Delete​Payload](#price-list-delete-payload) — `payloads/PriceListDeletePayload`
- [Price​List​Fixed​Prices​Add​Payload](#price-list-fixed-prices-add-payload) — `payloads/PriceListFixedPricesAddPayload`
- [Price​List​Fixed​Prices​By​Product​Update​Payload](#price-list-fixed-prices-by-product-update-payload) — `payloads/PriceListFixedPricesByProductUpdatePayload`
- [Price​List​Fixed​Prices​Delete​Payload](#price-list-fixed-prices-delete-payload) — `payloads/PriceListFixedPricesDeletePayload`
- [Price​List​Fixed​Prices​Update​Payload](#price-list-fixed-prices-update-payload) — `payloads/PriceListFixedPricesUpdatePayload`
- [Price​List​Update​Payload](#price-list-update-payload) — `payloads/PriceListUpdatePayload`
- [Privacy​Features​Disable​Payload](#privacy-features-disable-payload) — `payloads/PrivacyFeaturesDisablePayload`
- [Product​Bundle​Create​Payload](#product-bundle-create-payload) — `payloads/ProductBundleCreatePayload`
- [Product​Bundle​Update​Payload](#product-bundle-update-payload) — `payloads/ProductBundleUpdatePayload`
- [Product​Change​Status​Payload](#product-change-status-payload) — `payloads/ProductChangeStatusPayload`
- [Product​Create​Media​Payload](#product-create-media-payload) — `payloads/ProductCreateMediaPayload`
- [Product​Create​Payload](#product-create-payload) — `payloads/ProductCreatePayload`
- [Product​Delete​Media​Payload](#product-delete-media-payload) — `payloads/ProductDeleteMediaPayload`
- [Product​Delete​Payload](#product-delete-payload) — `payloads/ProductDeletePayload`
- [Product​Duplicate​Payload](#product-duplicate-payload) — `payloads/ProductDuplicatePayload`
- [Product​Feed​Create​Payload](#product-feed-create-payload) — `payloads/ProductFeedCreatePayload`
- [Product​Feed​Delete​Payload](#product-feed-delete-payload) — `payloads/ProductFeedDeletePayload`
- [Product​Full​Sync​Payload](#product-full-sync-payload) — `payloads/ProductFullSyncPayload`
- [Product​Join​Selling​Plan​Groups​Payload](#product-join-selling-plan-groups-payload) — `payloads/ProductJoinSellingPlanGroupsPayload`
- [Product​Leave​Selling​Plan​Groups​Payload](#product-leave-selling-plan-groups-payload) — `payloads/ProductLeaveSellingPlanGroupsPayload`
- [Product​Options​Create​Payload](#product-options-create-payload) — `payloads/ProductOptionsCreatePayload`
- [Product​Options​Delete​Payload](#product-options-delete-payload) — `payloads/ProductOptionsDeletePayload`
- [Product​Options​Reorder​Payload](#product-options-reorder-payload) — `payloads/ProductOptionsReorderPayload`
- [Product​Option​Update​Payload](#product-option-update-payload) — `payloads/ProductOptionUpdatePayload`
- [Product​Publish​Payload](#product-publish-payload) — `payloads/ProductPublishPayload`
- [Product​Reorder​Media​Payload](#product-reorder-media-payload) — `payloads/ProductReorderMediaPayload`
- [Product​Set​Payload](#product-set-payload) — `payloads/ProductSetPayload`
- [Product​Unpublish​Payload](#product-unpublish-payload) — `payloads/ProductUnpublishPayload`
- [Product​Update​Media​Payload](#product-update-media-payload) — `payloads/ProductUpdateMediaPayload`
- [Product​Update​Payload](#product-update-payload) — `payloads/ProductUpdatePayload`
- [Product​Variants​Bulk​Create​Payload](#product-variants-bulk-create-payload) — `payloads/ProductVariantsBulkCreatePayload`
- [Product​Variants​Bulk​Delete​Payload](#product-variants-bulk-delete-payload) — `payloads/ProductVariantsBulkDeletePayload`
- [Product​Variants​Bulk​Reorder​Payload](#product-variants-bulk-reorder-payload) — `payloads/ProductVariantsBulkReorderPayload`
- [Product​Variants​Bulk​Update​Payload](#product-variants-bulk-update-payload) — `payloads/ProductVariantsBulkUpdatePayload`
- [Product​Variant​Append​Media​Payload](#product-variant-append-media-payload) — `payloads/ProductVariantAppendMediaPayload`
- [Product​Variant​Detach​Media​Payload](#product-variant-detach-media-payload) — `payloads/ProductVariantDetachMediaPayload`
- [Product​Variant​Join​Selling​Plan​Groups​Payload](#product-variant-join-selling-plan-groups-payload) — `payloads/ProductVariantJoinSellingPlanGroupsPayload`
- [Product​Variant​Leave​Selling​Plan​Groups​Payload](#product-variant-leave-selling-plan-groups-payload) — `payloads/ProductVariantLeaveSellingPlanGroupsPayload`
- [Product​Variant​Relationship​Bulk​Update​Payload](#product-variant-relationship-bulk-update-payload) — `payloads/ProductVariantRelationshipBulkUpdatePayload`
- [Publication​Create​Payload](#publication-create-payload) — `payloads/PublicationCreatePayload`
- [Publication​Delete​Payload](#publication-delete-payload) — `payloads/PublicationDeletePayload`
- [Publication​Update​Payload](#publication-update-payload) — `payloads/PublicationUpdatePayload`
- [Publishable​Publish​Payload](#publishable-publish-payload) — `payloads/PublishablePublishPayload`
- [Publishable​Publish​To​Current​Channel​Payload](#publishable-publish-to-current-channel-payload) — `payloads/PublishablePublishToCurrentChannelPayload`
- [Publishable​Unpublish​Payload](#publishable-unpublish-payload) — `payloads/PublishableUnpublishPayload`
- [Publishable​Unpublish​To​Current​Channel​Payload](#publishable-unpublish-to-current-channel-payload) — `payloads/PublishableUnpublishToCurrentChannelPayload`
- [Pub​Sub​Server​Pixel​Update​Payload](#pub-sub-server-pixel-update-payload) — `payloads/PubSubServerPixelUpdatePayload`
- [Pub​Sub​Webhook​Subscription​Create​Payload](#pub-sub-webhook-subscription-create-payload) — `payloads/PubSubWebhookSubscriptionCreatePayload`
- [Pub​Sub​Webhook​Subscription​Update​Payload](#pub-sub-webhook-subscription-update-payload) — `payloads/PubSubWebhookSubscriptionUpdatePayload`
- [Quantity​Pricing​By​Variant​Update​Payload](#quantity-pricing-by-variant-update-payload) — `payloads/QuantityPricingByVariantUpdatePayload`
- [Quantity​Rules​Add​Payload](#quantity-rules-add-payload) — `payloads/QuantityRulesAddPayload`
- [Quantity​Rules​Delete​Payload](#quantity-rules-delete-payload) — `payloads/QuantityRulesDeletePayload`
- [Refund​Create​Payload](#refund-create-payload) — `payloads/RefundCreatePayload`
- [Remove​From​Return​Payload](#remove-from-return-payload) — `payloads/RemoveFromReturnPayload`
- [Return​Approve​Request​Payload](#return-approve-request-payload) — `payloads/ReturnApproveRequestPayload`
- [Return​Cancel​Payload](#return-cancel-payload) — `payloads/ReturnCancelPayload`
- [Return​Close​Payload](#return-close-payload) — `payloads/ReturnClosePayload`
- [Return​Create​Payload](#return-create-payload) — `payloads/ReturnCreatePayload`
- [Return​Decline​Request​Payload](#return-decline-request-payload) — `payloads/ReturnDeclineRequestPayload`
- [Return​Line​Item​Remove​From​Return​Payload](#return-line-item-remove-from-return-payload) — `payloads/ReturnLineItemRemoveFromReturnPayload`
- [Return​Process​Payload](#return-process-payload) — `payloads/ReturnProcessPayload`
- [Return​Refund​Payload](#return-refund-payload) — `payloads/ReturnRefundPayload`
- [Return​Reopen​Payload](#return-reopen-payload) — `payloads/ReturnReopenPayload`
- [Return​Request​Payload](#return-request-payload) — `payloads/ReturnRequestPayload`
- [Reverse​Delivery​Create​With​Shipping​Payload](#reverse-delivery-create-with-shipping-payload) — `payloads/ReverseDeliveryCreateWithShippingPayload`
- [Reverse​Delivery​Shipping​Update​Payload](#reverse-delivery-shipping-update-payload) — `payloads/ReverseDeliveryShippingUpdatePayload`
- [Reverse​Fulfillment​Order​Dispose​Payload](#reverse-fulfillment-order-dispose-payload) — `payloads/ReverseFulfillmentOrderDisposePayload`
- [Saved​Search​Create​Payload](#saved-search-create-payload) — `payloads/SavedSearchCreatePayload`
- [Saved​Search​Delete​Payload](#saved-search-delete-payload) — `payloads/SavedSearchDeletePayload`
- [Saved​Search​Update​Payload](#saved-search-update-payload) — `payloads/SavedSearchUpdatePayload`
- [Script​Tag​Create​Payload](#script-tag-create-payload) — `payloads/ScriptTagCreatePayload`
- [Script​Tag​Delete​Payload](#script-tag-delete-payload) — `payloads/ScriptTagDeletePayload`
- [Script​Tag​Update​Payload](#script-tag-update-payload) — `payloads/ScriptTagUpdatePayload`
- [Segment​Create​Payload](#segment-create-payload) — `payloads/SegmentCreatePayload`
- [Segment​Delete​Payload](#segment-delete-payload) — `payloads/SegmentDeletePayload`
- [Segment​Update​Payload](#segment-update-payload) — `payloads/SegmentUpdatePayload`
- [Selling​Plan​Group​Add​Products​Payload](#selling-plan-group-add-products-payload) — `payloads/SellingPlanGroupAddProductsPayload`
- [Selling​Plan​Group​Add​Product​Variants​Payload](#selling-plan-group-add-product-variants-payload) — `payloads/SellingPlanGroupAddProductVariantsPayload`
- [Selling​Plan​Group​Create​Payload](#selling-plan-group-create-payload) — `payloads/SellingPlanGroupCreatePayload`
- [Selling​Plan​Group​Delete​Payload](#selling-plan-group-delete-payload) — `payloads/SellingPlanGroupDeletePayload`
- [Selling​Plan​Group​Remove​Products​Payload](#selling-plan-group-remove-products-payload) — `payloads/SellingPlanGroupRemoveProductsPayload`
- [Selling​Plan​Group​Remove​Product​Variants​Payload](#selling-plan-group-remove-product-variants-payload) — `payloads/SellingPlanGroupRemoveProductVariantsPayload`
- [Selling​Plan​Group​Update​Payload](#selling-plan-group-update-payload) — `payloads/SellingPlanGroupUpdatePayload`
- [Server​Pixel​Create​Payload](#server-pixel-create-payload) — `payloads/ServerPixelCreatePayload`
- [Server​Pixel​Delete​Payload](#server-pixel-delete-payload) — `payloads/ServerPixelDeletePayload`
- [Shipping​Package​Delete​Payload](#shipping-package-delete-payload) — `payloads/ShippingPackageDeletePayload`
- [Shipping​Package​Make​Default​Payload](#shipping-package-make-default-payload) — `payloads/ShippingPackageMakeDefaultPayload`
- [Shipping​Package​Update​Payload](#shipping-package-update-payload) — `payloads/ShippingPackageUpdatePayload`
- [Shopify​Payments​Payout​Alternate​Currency​Create​Payload](#shopify-payments-payout-alternate-currency-create-payload) — `payloads/ShopifyPaymentsPayoutAlternateCurrencyCreatePayload`
- [Shop​Locale​Disable​Payload](#shop-locale-disable-payload) — `payloads/ShopLocaleDisablePayload`
- [Shop​Locale​Enable​Payload](#shop-locale-enable-payload) — `payloads/ShopLocaleEnablePayload`
- [Shop​Locale​Update​Payload](#shop-locale-update-payload) — `payloads/ShopLocaleUpdatePayload`
- [Shop​Policy​Update​Payload](#shop-policy-update-payload) — `payloads/ShopPolicyUpdatePayload`
- [Shop​Resource​Feedback​Create​Payload](#shop-resource-feedback-create-payload) — `payloads/ShopResourceFeedbackCreatePayload`
- [Staged​Uploads​Create​Payload](#staged-uploads-create-payload) — `payloads/StagedUploadsCreatePayload`
- [Staged​Upload​Targets​Generate​Payload](#staged-upload-targets-generate-payload) — `payloads/StagedUploadTargetsGeneratePayload`
- [Staged​Upload​Target​Generate​Payload](#staged-upload-target-generate-payload) — `payloads/StagedUploadTargetGeneratePayload`
- [Standard​Metafield​Definition​Enable​Payload](#standard-metafield-definition-enable-payload) — `payloads/StandardMetafieldDefinitionEnablePayload`
- [Standard​Metaobject​Definition​Enable​Payload](#standard-metaobject-definition-enable-payload) — `payloads/StandardMetaobjectDefinitionEnablePayload`
- [Storefront​Access​Token​Create​Payload](#storefront-access-token-create-payload) — `payloads/StorefrontAccessTokenCreatePayload`
- [Storefront​Access​Token​Delete​Payload](#storefront-access-token-delete-payload) — `payloads/StorefrontAccessTokenDeletePayload`
- [Store​Credit​Account​Credit​Payload](#store-credit-account-credit-payload) — `payloads/StoreCreditAccountCreditPayload`
- [Store​Credit​Account​Debit​Payload](#store-credit-account-debit-payload) — `payloads/StoreCreditAccountDebitPayload`
- [Subscription​Billing​Attempt​Create​Payload](#subscription-billing-attempt-create-payload) — `payloads/SubscriptionBillingAttemptCreatePayload`
- [Subscription​Billing​Cycle​Bulk​Charge​Payload](#subscription-billing-cycle-bulk-charge-payload) — `payloads/SubscriptionBillingCycleBulkChargePayload`
- [Subscription​Billing​Cycle​Bulk​Search​Payload](#subscription-billing-cycle-bulk-search-payload) — `payloads/SubscriptionBillingCycleBulkSearchPayload`
- [Subscription​Billing​Cycle​Charge​Payload](#subscription-billing-cycle-charge-payload) — `payloads/SubscriptionBillingCycleChargePayload`
- [Subscription​Billing​Cycle​Contract​Draft​Commit​Payload](#subscription-billing-cycle-contract-draft-commit-payload) — `payloads/SubscriptionBillingCycleContractDraftCommitPayload`
- [Subscription​Billing​Cycle​Contract​Draft​Concatenate​Payload](#subscription-billing-cycle-contract-draft-concatenate-payload) — `payloads/SubscriptionBillingCycleContractDraftConcatenatePayload`
- [Subscription​Billing​Cycle​Contract​Edit​Payload](#subscription-billing-cycle-contract-edit-payload) — `payloads/SubscriptionBillingCycleContractEditPayload`
- [Subscription​Billing​Cycle​Edits​Delete​Payload](#subscription-billing-cycle-edits-delete-payload) — `payloads/SubscriptionBillingCycleEditsDeletePayload`
- [Subscription​Billing​Cycle​Edit​Delete​Payload](#subscription-billing-cycle-edit-delete-payload) — `payloads/SubscriptionBillingCycleEditDeletePayload`
- [Subscription​Billing​Cycle​Schedule​Edit​Payload](#subscription-billing-cycle-schedule-edit-payload) — `payloads/SubscriptionBillingCycleScheduleEditPayload`
- [Subscription​Billing​Cycle​Skip​Payload](#subscription-billing-cycle-skip-payload) — `payloads/SubscriptionBillingCycleSkipPayload`
- [Subscription​Billing​Cycle​Unskip​Payload](#subscription-billing-cycle-unskip-payload) — `payloads/SubscriptionBillingCycleUnskipPayload`
- [Subscription​Contract​Activate​Payload](#subscription-contract-activate-payload) — `payloads/SubscriptionContractActivatePayload`
- [Subscription​Contract​Atomic​Create​Payload](#subscription-contract-atomic-create-payload) — `payloads/SubscriptionContractAtomicCreatePayload`
- [Subscription​Contract​Cancel​Payload](#subscription-contract-cancel-payload) — `payloads/SubscriptionContractCancelPayload`
- [Subscription​Contract​Create​Payload](#subscription-contract-create-payload) — `payloads/SubscriptionContractCreatePayload`
- [Subscription​Contract​Expire​Payload](#subscription-contract-expire-payload) — `payloads/SubscriptionContractExpirePayload`
- [Subscription​Contract​Fail​Payload](#subscription-contract-fail-payload) — `payloads/SubscriptionContractFailPayload`
- [Subscription​Contract​Pause​Payload](#subscription-contract-pause-payload) — `payloads/SubscriptionContractPausePayload`
- [Subscription​Contract​Product​Change​Payload](#subscription-contract-product-change-payload) — `payloads/SubscriptionContractProductChangePayload`
- [Subscription​Contract​Set​Next​Billing​Date​Payload](#subscription-contract-set-next-billing-date-payload) — `payloads/SubscriptionContractSetNextBillingDatePayload`
- [Subscription​Contract​Update​Payload](#subscription-contract-update-payload) — `payloads/SubscriptionContractUpdatePayload`
- [Subscription​Draft​Commit​Payload](#subscription-draft-commit-payload) — `payloads/SubscriptionDraftCommitPayload`
- [Subscription​Draft​Discount​Add​Payload](#subscription-draft-discount-add-payload) — `payloads/SubscriptionDraftDiscountAddPayload`
- [Subscription​Draft​Discount​Code​Apply​Payload](#subscription-draft-discount-code-apply-payload) — `payloads/SubscriptionDraftDiscountCodeApplyPayload`
- [Subscription​Draft​Discount​Remove​Payload](#subscription-draft-discount-remove-payload) — `payloads/SubscriptionDraftDiscountRemovePayload`
- [Subscription​Draft​Discount​Update​Payload](#subscription-draft-discount-update-payload) — `payloads/SubscriptionDraftDiscountUpdatePayload`
- [Subscription​Draft​Free​Shipping​Discount​Add​Payload](#subscription-draft-free-shipping-discount-add-payload) — `payloads/SubscriptionDraftFreeShippingDiscountAddPayload`
- [Subscription​Draft​Free​Shipping​Discount​Update​Payload](#subscription-draft-free-shipping-discount-update-payload) — `payloads/SubscriptionDraftFreeShippingDiscountUpdatePayload`
- [Subscription​Draft​Line​Add​Payload](#subscription-draft-line-add-payload) — `payloads/SubscriptionDraftLineAddPayload`
- [Subscription​Draft​Line​Remove​Payload](#subscription-draft-line-remove-payload) — `payloads/SubscriptionDraftLineRemovePayload`
- [Subscription​Draft​Line​Update​Payload](#subscription-draft-line-update-payload) — `payloads/SubscriptionDraftLineUpdatePayload`
- [Subscription​Draft​Update​Payload](#subscription-draft-update-payload) — `payloads/SubscriptionDraftUpdatePayload`
- [Tags​Add​Payload](#tags-add-payload) — `payloads/TagsAddPayload`
- [Tags​Remove​Payload](#tags-remove-payload) — `payloads/TagsRemovePayload`
- [Tax​App​Configure​Payload](#tax-app-configure-payload) — `payloads/TaxAppConfigurePayload`
- [Tax​Summary​Create​Payload](#tax-summary-create-payload) — `payloads/TaxSummaryCreatePayload`
- [Theme​Create​Payload](#theme-create-payload) — `payloads/ThemeCreatePayload`
- [Theme​Delete​Payload](#theme-delete-payload) — `payloads/ThemeDeletePayload`
- [Theme​Duplicate​Payload](#theme-duplicate-payload) — `payloads/ThemeDuplicatePayload`
- [Theme​Files​Copy​Payload](#theme-files-copy-payload) — `payloads/ThemeFilesCopyPayload`
- [Theme​Files​Delete​Payload](#theme-files-delete-payload) — `payloads/ThemeFilesDeletePayload`
- [Theme​Files​Upsert​Payload](#theme-files-upsert-payload) — `payloads/ThemeFilesUpsertPayload`
- [Theme​Publish​Payload](#theme-publish-payload) — `payloads/ThemePublishPayload`
- [Theme​Update​Payload](#theme-update-payload) — `payloads/ThemeUpdatePayload`
- [Transaction​Void​Payload](#transaction-void-payload) — `payloads/TransactionVoidPayload`
- [Translations​Register​Payload](#translations-register-payload) — `payloads/TranslationsRegisterPayload`
- [Translations​Remove​Payload](#translations-remove-payload) — `payloads/TranslationsRemovePayload`
- [Url​Redirect​Bulk​Delete​All​Payload](#url-redirect-bulk-delete-all-payload) — `payloads/UrlRedirectBulkDeleteAllPayload`
- [Url​Redirect​Bulk​Delete​By​Ids​Payload](#url-redirect-bulk-delete-by-ids-payload) — `payloads/UrlRedirectBulkDeleteByIdsPayload`
- [Url​Redirect​Bulk​Delete​By​Saved​Search​Payload](#url-redirect-bulk-delete-by-saved-search-payload) — `payloads/UrlRedirectBulkDeleteBySavedSearchPayload`
- [Url​Redirect​Bulk​Delete​By​Search​Payload](#url-redirect-bulk-delete-by-search-payload) — `payloads/UrlRedirectBulkDeleteBySearchPayload`
- [Url​Redirect​Create​Payload](#url-redirect-create-payload) — `payloads/UrlRedirectCreatePayload`
- [Url​Redirect​Delete​Payload](#url-redirect-delete-payload) — `payloads/UrlRedirectDeletePayload`
- [Url​Redirect​Import​Create​Payload](#url-redirect-import-create-payload) — `payloads/UrlRedirectImportCreatePayload`
- [Url​Redirect​Import​Submit​Payload](#url-redirect-import-submit-payload) — `payloads/UrlRedirectImportSubmitPayload`
- [Url​Redirect​Update​Payload](#url-redirect-update-payload) — `payloads/UrlRedirectUpdatePayload`
- [Validation​Create​Payload](#validation-create-payload) — `payloads/ValidationCreatePayload`
- [Validation​Delete​Payload](#validation-delete-payload) — `payloads/ValidationDeletePayload`
- [Validation​Update​Payload](#validation-update-payload) — `payloads/ValidationUpdatePayload`
- [Webhook​Subscription​Create​Payload](#webhook-subscription-create-payload) — `payloads/WebhookSubscriptionCreatePayload`
- [Webhook​Subscription​Delete​Payload](#webhook-subscription-delete-payload) — `payloads/WebhookSubscriptionDeletePayload`
- [Webhook​Subscription​Update​Payload](#webhook-subscription-update-payload) — `payloads/WebhookSubscriptionUpdatePayload`
- [Web​Pixel​Create​Payload](#web-pixel-create-payload) — `payloads/WebPixelCreatePayload`
- [Web​Pixel​Delete​Payload](#web-pixel-delete-payload) — `payloads/WebPixelDeletePayload`
- [Web​Pixel​Update​Payload](#web-pixel-update-payload) — `payloads/WebPixelUpdatePayload`
- [Web​Presence​Create​Payload](#web-presence-create-payload) — `payloads/WebPresenceCreatePayload`
- [Web​Presence​Delete​Payload](#web-presence-delete-payload) — `payloads/WebPresenceDeletePayload`
- [Web​Presence​Update​Payload](#web-presence-update-payload) — `payloads/WebPresenceUpdatePayload`

---

<a id="abandonment-email-state-update-payload"></a>

## Abandonment​Email​State​Update​Payload

payload

Return type for `abandonmentEmailStateUpdate` mutation.

### Fields

* abandonment

  [Abandonment](https://shopify.dev/docs/api/admin-graphql/latest/objects/Abandonment)

  The updated abandonment.

* user​Errors

  [\[Abandonment​Email​State​Update​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonmentEmailStateUpdateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [abandonment​Email​State​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/abandonmentEmailStateUpdate)

  mutation

  Deprecated

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the abandonment that needs to be updated.

  * email​State

    [Abandonment​Email​State!](https://shopify.dev/docs/api/admin-graphql/latest/enums/AbandonmentEmailState)

    required

    The new email state of the abandonment.

  * email​Sent​At

    [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    The date and time for when the email was sent, if that is the case.

  * email​State​Change​Reason

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The reason why the email was or was not sent.

  ***

***

### Map

---
<a id="abandonment-update-activities-delivery-statuses-payload"></a>

## Abandonment​Update​Activities​Delivery​Statuses​Payload

payload

Return type for `abandonmentUpdateActivitiesDeliveryStatuses` mutation.

### Fields

* abandonment

  [Abandonment](https://shopify.dev/docs/api/admin-graphql/latest/objects/Abandonment)

  The updated abandonment.

* user​Errors

  [\[Abandonment​Update​Activities​Delivery​Statuses​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonmentUpdateActivitiesDeliveryStatusesUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [abandonment​Update​Activities​Delivery​Statuses](https://shopify.dev/docs/api/admin-graphql/latest/mutations/abandonmentUpdateActivitiesDeliveryStatuses)

  mutation

  Updates the marketing activities delivery statuses for an abandonment.

  * abandonment​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the abandonment that needs to be updated.

  * marketing​Activity​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the marketing activity that needs to be updated.

  * delivery​Status

    [Abandonment​Delivery​State!](https://shopify.dev/docs/api/admin-graphql/latest/enums/AbandonmentDeliveryState)

    required

    The new delivery status of the marketing activity for this abandonment.

  * delivered​At

    [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    The delivery timestamp if the activity delivered.

  * delivery​Status​Change​Reason

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The reason why the activity was or was not delivered.

  ***

***

### Map

#### Mutations with this payload

* [abandonment​Update​Activities​Delivery​Statuses](https://shopify.dev/docs/api/admin-graphql/latest/mutations/abandonmentUpdateActivitiesDeliveryStatuses)

---
<a id="app-purchase-one-time-create-payload"></a>

## App​Purchase​One​Time​Create​Payload

payload

Return type for `appPurchaseOneTimeCreate` mutation.

### Fields

* app​Purchase​One​Time

  [App​Purchase​One​Time](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppPurchaseOneTime)

  The newly created app one-time purchase.

* confirmation​Url

  [URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

  The URL that the merchant can access to approve or decline the newly created app one-time purchase.

  If the merchant declines, then the merchant is redirected to the app and receives a notification message stating that the charge was declined. If the merchant approves and they're successfully invoiced, then the state of the charge changes from `pending` to `active`.

  You get paid after the charge is activated.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [app​Purchase​One​Time​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appPurchaseOneTimeCreate)

  mutation

  Creates a one-time charge for app features or services that don't require recurring billing. This mutation is ideal for apps that sell individual features, premium content, or services on a per-use basis rather than subscription models.

  For example, a design app might charge merchants once for premium templates, or a marketing app could bill for individual campaign setups without ongoing monthly fees.

  Use the `AppPurchaseOneTimeCreate` mutation to:

  * Charge for premium features or content purchases
  * Bill for professional services or setup fees
  * Generate revenue from one-time digital product sales

  The mutation returns a confirmation URL that merchants must visit to approve the charge. Test and development stores are not charged, allowing safe testing of billing flows.

  Explore one-time billing options on the [app purchases page](https://shopify.dev/docs/apps/launch/billing/support-one-time-purchases).

  * name

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    The name of the one-time purchase from the app.

  * price

    [Money​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MoneyInput)

    required

    The amount to be charged to the store for the app one-time purchase.

  * return​Url

    [URL!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

    required

    The URL where the merchant is redirected after approving the app one-time purchase.

  * test

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Whether the app one-time purchase is a test transaction.

  ***

***

### Map

#### Mutations with this payload

* [app​Purchase​One​Time​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appPurchaseOneTimeCreate)

---
<a id="app-revoke-access-scopes-payload"></a>

## App​Revoke​Access​Scopes​Payload

payload

Return type for `appRevokeAccessScopes` mutation.

### Fields

* revoked

  [\[Access​Scope!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/AccessScope)

  The list of scope handles that have been revoked.

* user​Errors

  [\[App​Revoke​Access​Scopes​App​Revoke​Scope​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppRevokeAccessScopesAppRevokeScopeError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [app​Revoke​Access​Scopes](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appRevokeAccessScopes)

  mutation

  Revokes previously granted access scopes from an app installation, allowing merchants to reduce an app's permissions without completely uninstalling it. This provides granular control over what data and functionality apps can access.

  For example, if a merchant no longer wants an app to access customer information but still wants to use its inventory features, they can revoke the customer-related scopes while keeping inventory permissions active.

  Use the `appRevokeAccessScopes` mutation to:

  * Remove specific permissions from installed apps
  * Maintain app functionality while minimizing data exposure

  The mutation returns details about which scopes were successfully revoked and any errors that prevented certain permissions from being removed.

  Learn more about [managing app permissions](https://shopify.dev/docs/apps/build/authentication-authorization/app-installation/manage-access-scopes#revoke-granted-scopes-dynamically).

  * scopes

    [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    The list of scope handles to revoke.

  ***

***

### Map

#### Mutations with this payload

* [app​Revoke​Access​Scopes](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appRevokeAccessScopes)

---
<a id="app-subscription-cancel-payload"></a>

## App​Subscription​Cancel​Payload

payload

Return type for `appSubscriptionCancel` mutation.

### Fields

* app​Subscription

  [App​Subscription](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscription)

  The cancelled app subscription.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [app​Subscription​Cancel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appSubscriptionCancel)

  mutation

  Cancels an active app subscription, stopping future billing cycles. The cancellation behavior depends on the `replacementBehavior` setting - it can either disable auto-renewal (allowing the subscription to continue until the end of the current billing period) or immediately cancel with prorated refunds.

  When a merchant decides to discontinue using subscription features, this mutation provides a clean cancellation workflow that respects billing periods and merchant expectations.

  Use the `AppSubscriptionCancel` mutation to:

  * Process merchant-initiated subscription cancellations
  * Terminate subscriptions due to policy violations or account issues
  * Handle subscription cancellations during app uninstallation workflows

  The cancellation timing and merchant access depends on the `replacementBehavior` setting and the app's specific implementation of subscription management.

  For subscription lifecycle management and cancellation best practices, consult the [subscription management guide](https://shopify.dev/docs/apps/launch/billing/subscription-billing).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the app subscription to be cancelled.

  * prorate

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Whether to issue prorated credits for the unused portion of the app subscription. There will be a corresponding deduction (based on revenue share) to your Partner account. For example, if a $10.00 app subscription (with 0% revenue share) is cancelled and prorated half way through the billing cycle, then the merchant will be credited $5.00 and that amount will be deducted from your Partner account.

  ***

***

### Map

#### Mutations with this payload

* [app​Subscription​Cancel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appSubscriptionCancel)

---
<a id="app-subscription-create-payload"></a>

## App​Subscription​Create​Payload

payload

Return type for `appSubscriptionCreate` mutation.

### Fields

* app​Subscription

  [App​Subscription](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscription)

  The newly-created app subscription.

* confirmation​Url

  [URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

  The URL pointing to the page where the merchant approves or declines the charges for an app subscription.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [app​Subscription​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appSubscriptionCreate)

  mutation

  Creates a recurring or usage-based [`AppSubscription`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscription) that charges merchants for app features and services. The subscription includes one or more [`AppSubscriptionLineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscriptionLineItem) objects that define the pricing structure, billing intervals, and optional [`AppSubscriptionDiscount`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscriptionDiscount) values.

  Returns a [confirmation URL](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appSubscriptionCreate#returns-confirmationUrl) where the merchant approves or declines the charges. After approval, the subscription becomes active and billing begins after any trial period expires. You can specify [`AppSubscriptionReplacementBehavior`](https://shopify.dev/docs/api/admin-graphql/latest/enums/AppSubscriptionReplacementBehavior) to control how this subscription interacts with existing active subscriptions.

  Learn more about [creating app subscriptions](https://shopify.dev/docs/apps/launch/billing/subscription-billing/create-time-based-subscriptions).

  * name

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    A descriptive name for the app subscription.

  * line​Items

    [\[App​Subscription​Line​Item​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/AppSubscriptionLineItemInput)

    required

    Attaches one or more pricing plans to an app subscription. Only one pricing plan can be defined for each available type.

  * test

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Whether the app subscription is a test transaction.

  * trial​Days

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The number of days of the free trial period, beginning on the day that the merchant approves the app charges.

  * return​Url

    [URL!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

    required

    The URL pointing to the page where the merchant is redirected after approving the app subscription.

  * replacement​Behavior

    [App​Subscription​Replacement​Behavior](https://shopify.dev/docs/api/admin-graphql/latest/enums/AppSubscriptionReplacementBehavior)

    Default:STANDARD

    The replacement behavior when creating an app subscription for a merchant with an already existing app subscription.

  ***

***

### Map

#### Mutations with this payload

* [app​Subscription​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appSubscriptionCreate)

---
<a id="app-subscription-line-item-update-payload"></a>

## App​Subscription​Line​Item​Update​Payload

payload

Return type for `appSubscriptionLineItemUpdate` mutation.

### Fields

* app​Subscription

  [App​Subscription](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscription)

  The updated app subscription.

* confirmation​Url

  [URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

  The URL where the merchant approves or declines the updated app subscription line item.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [app​Subscription​Line​Item​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appSubscriptionLineItemUpdate)

  mutation

  Updates the capped amount on usage-based billing for an [`AppSubscriptionLineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscriptionLineItem). Enables you to modify the maximum charge limit that prevents merchants from exceeding a specified threshold during their billing period.

  The mutation returns a [confirmation URL](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appSubscriptionCreate#returns-confirmationUrl) where the merchant must approve the new pricing limit before it takes effect. Use this when adjusting usage limits based on merchant needs or changing pricing models.

  Learn more about [updating the maximum charge for a subscription](https://shopify.dev/docs/apps/launch/billing/subscription-billing/update-max-charge).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the app subscription line item to be updated.

  * capped​Amount

    [Money​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MoneyInput)

    required

    The new maximum amount of usage charges that can be incurred within a subscription billing interval.

  ***

***

### Map

#### Mutations with this payload

* [app​Subscription​Line​Item​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appSubscriptionLineItemUpdate)

---
<a id="app-subscription-trial-extend-payload"></a>

## App​Subscription​Trial​Extend​Payload

payload

Return type for `appSubscriptionTrialExtend` mutation.

### Fields

* app​Subscription

  [App​Subscription](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscription)

  The app subscription that had its trial extended.

* user​Errors

  [\[App​Subscription​Trial​Extend​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscriptionTrialExtendUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [app​Subscription​Trial​Extend](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appSubscriptionTrialExtend)

  mutation

  Extends the trial period for an existing app subscription. Trial extensions give merchants additional time to use the app before committing to paid billing.

  Requires the subscription ID and the number of days to extend (between one and 1000). The extension modifies the existing trial end date, allowing continued access to subscription features without immediate billing. Returns the updated [`AppSubscription`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscription).

  Learn more about [offering free trials](https://shopify.dev/docs/apps/launch/billing/offer-free-trials).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the app subscription to extend the trial for.

  * days

    [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    required

    The number of days to extend the trial. The value must be greater than 0 and less than or equal to 1000.

  ***

***

### Map

#### Mutations with this payload

* [app​Subscription​Trial​Extend](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appSubscriptionTrialExtend)

---
<a id="app-uninstall-payload"></a>

## App​Uninstall​Payload

payload

Return type for `appUninstall` mutation.

### Fields

* app

  [App](https://shopify.dev/docs/api/admin-graphql/latest/objects/App)

  The uninstalled app.

* user​Errors

  [\[App​Uninstall​App​Uninstall​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppUninstallAppUninstallError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [app​Uninstall](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appUninstall)

  mutation

  Uninstalls an [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App) from a shop. Apps use this mutation to uninstall themselves programmatically, removing their [`AppInstallation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation) from the merchant's store.

  When an app uninstalls, Shopify automatically performs cleanup tasks, such as deleting [`WebhookSubscription`](https://shopify.dev/docs/api/admin-graphql/latest/objects/WebhookSubscription) objects and [admin links](https://shopify.dev/docs/apps/build/admin/admin-links) associated with the app.

  Learn more about [app lifecycle management](https://shopify.dev/docs/apps/build/authentication-authorization/app-installation/uninstall-app-api-request).

  ***

  **Caution:** This action is irreversible. You can\&#39;t restore an uninstalled app\&#39;s configuration or data. Before you uninstall an app, make sure that you no longer need to make API calls for the store in which the app has been installed.

  ***

***

### Map

#### Mutations with this payload

* [app​Uninstall](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appUninstall)

---
<a id="app-usage-record-create-payload"></a>

## App​Usage​Record​Create​Payload

payload

Return type for `appUsageRecordCreate` mutation.

### Fields

* app​Usage​Record

  [App​Usage​Record](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppUsageRecord)

  The newly created app usage record.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [app​Usage​Record​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appUsageRecordCreate)

  mutation

  Creates a usage charge for an app subscription with usage-based pricing. The charge counts toward the capped amount limit set when creating the subscription.

  Usage records track consumption of app features or services on a per-use basis. You provide the charge amount, a description of what you consumed, and the subscription line item ID. The optional [`idempotencyKey`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppUsageRecord#field-idempotencyKey) parameter prevents duplicate charges if you send the same request multiple times.

  If the new charge would cause total usage charges in the current billing interval to exceed the capped amount, then the mutation returns an error.

  Learn more about [creating usage-based subscriptions](https://shopify.dev/docs/apps/launch/billing/subscription-billing/create-usage-based-subscriptions).

  * subscription​Line​Item​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the app subscription line item to create the usage record under. This app subscription line item must have a usage pricing plan.

  * price

    [Money​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MoneyInput)

    required

    The price of the app usage record.

  * description

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    The description of the app usage record.

  * idempotency​Key

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A unique key generated by the client to avoid duplicate charges. Maximum length of 255 characters.

  ***

***

### Map

#### Mutations with this payload

* [app​Usage​Record​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appUsageRecordCreate)

---
<a id="article-create-payload"></a>

## Article​Create​Payload

payload

Return type for `articleCreate` mutation.

### Fields

* article

  [Article](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article)

  The article that was created.

* user​Errors

  [\[Article​Create​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ArticleCreateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [article​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/articleCreate)

  mutation

  Creates an [`Article`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article). Articles are content pieces that include a title, body text, and author information.

  You can publish the article immediately or schedule it with a specific publish date. You can customize the article's URL handle, apply custom templates for rendering, and add optional fields like [tags](https://shopify.dev/docs/api/admin-graphql/latest/mutations/articleCreate#arguments-article.fields.tags), an [image](https://shopify.dev/docs/api/admin-graphql/latest/mutations/articleCreate#arguments-article.fields.image), and [`Metafield`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield) objects.

  The mutation validates article content and ensures proper blog association. Error handling provides specific feedback for content requirements.

  * article

    [Article​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ArticleCreateInput)

    required

    ### Arguments

    The properties of the new article.

  * blog

    [Article​Blog​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ArticleBlogInput)

    The properties of the new blog.

  ***

***

### Map

#### Mutations with this payload

* [article​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/articleCreate)

---
<a id="article-delete-payload"></a>

## Article​Delete​Payload

payload

Return type for `articleDelete` mutation.

### Fields

* deleted​Article​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the deleted article.

* user​Errors

  [\[Article​Delete​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ArticleDeleteUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [article​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/articleDelete)

  mutation

  Permanently deletes a blog article from a shop's blog. This mutation removes the article and all associated metadata.

  For example, when outdated product information or seasonal content needs removal, merchants can use this mutation to clean up their blog.

  Use the `articleDelete` mutation to:

  * Remove outdated or incorrect blog content
  * Clean up seasonal or time-sensitive articles
  * Maintain blog organization

  The deletion is permanent and returns the deleted article's ID for confirmation.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the article to be deleted.

  ***

***

### Map

#### Mutations with this payload

* [article​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/articleDelete)

---
<a id="article-update-payload"></a>

## Article​Update​Payload

payload

Return type for `articleUpdate` mutation.

### Fields

* article

  [Article](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article)

  The article that was updated.

* user​Errors

  [\[Article​Update​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ArticleUpdateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [article​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/articleUpdate)

  mutation

  Updates an existing [`Article`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article). You can modify the article's content, metadata, publication status, and associated properties like author information and tags.

  If you update the [`handle`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/articleUpdate#arguments-article.fields.handle), then you can optionally create a redirect from the old URL to the new one by setting [`redirectNewHandle`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/articleUpdate#arguments-article.fields.redirectNewHandle) to `true`.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the article to be updated.

  * article

    [Article​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ArticleUpdateInput)

    required

    The properties of the article to be updated.

  * blog

    [Article​Blog​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ArticleBlogInput)

    The properties of the blog to be created.

  ***

***

### Map

#### Mutations with this payload

* [article​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/articleUpdate)

---
<a id="backup-region-update-payload"></a>

## Backup​Region​Update​Payload

payload

Return type for `backupRegionUpdate` mutation.

### Fields

* backup​Region

  [Market​Region](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/MarketRegion)

  Returns the updated backup region.

* user​Errors

  [\[Market​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [backup​Region​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/backupRegionUpdate)

  mutation

  Update the backup region that is used when we have no better signal of what region a buyer is in.

  * region

    [Backup​Region​Update​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/BackupRegionUpdateInput)

    ### Arguments

    Optional input representing the region to be updated. If not provided, the existing regions remain unchanged.

  ***

***

### Map

#### Mutations with this payload

* [backup​Region​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/backupRegionUpdate)

---
<a id="blog-create-payload"></a>

## Blog​Create​Payload

payload

Return type for `blogCreate` mutation.

### Fields

* blog

  [Blog](https://shopify.dev/docs/api/admin-graphql/latest/objects/Blog)

  The blog that was created.

* user​Errors

  [\[Blog​Create​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BlogCreateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [blog​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/blogCreate)

  mutation

  Creates a new blog within a shop, establishing a container for organizing articles.

  For example, a fitness equipment retailer launching a wellness blog would use this mutation to create the blog, enabling them to publish workout guides and nutrition tips.

  Use the `blogCreate` mutation to:

  * Launch new content marketing initiatives
  * Create separate blogs for different content themes
  * Establish spaces for article organization

  The mutation validates blog settings and establishes the structure for article publishing.

  * blog

    [Blog​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/BlogCreateInput)

    required

    ### Arguments

    The properties of the new blog.

  ***

***

### Map

#### Mutations with this payload

* [blog​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/blogCreate)

---
<a id="blog-delete-payload"></a>

## Blog​Delete​Payload

payload

Return type for `blogDelete` mutation.

### Fields

* deleted​Blog​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the deleted blog.

* user​Errors

  [\[Blog​Delete​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BlogDeleteUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [blog​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/blogDelete)

  mutation

  Permanently deletes a blog from a shop. This mutation removes the blog container and its organizational structure.

  For example, when consolidating multiple seasonal blogs into a single year-round content strategy, merchants can use this mutation to remove unused blogs.

  Use the `blogDelete` mutation to:

  * Remove unused or outdated blogs
  * Consolidate content organization
  * Clean up blog structure

  The deletion is permanent and returns the deleted blog's ID for confirmation.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the blog to be deleted.

  ***

***

### Map

#### Mutations with this payload

* [blog​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/blogDelete)

---
<a id="blog-update-payload"></a>

## Blog​Update​Payload

payload

Return type for `blogUpdate` mutation.

### Fields

* blog

  [Blog](https://shopify.dev/docs/api/admin-graphql/latest/objects/Blog)

  The blog that was updated.

* user​Errors

  [\[Blog​Update​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BlogUpdateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [blog​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/blogUpdate)

  mutation

  Updates an existing blog's configuration and settings. This mutation allows merchants to modify blog properties to keep their content strategy current.

  For example, a merchant might update their blog's title from "Company News" to "Sustainability Stories" when shifting their content focus, or modify the handle to improve URL structure.

  Use the `blogUpdate` mutation to:

  * Change blog titles for rebranding
  * Modify blog handles for better URLs
  * Adjust comment settings and moderation preferences

  The mutation returns the updated blog with any validation errors.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the blog to be updated.

  * blog

    [Blog​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/BlogUpdateInput)

    required

    The properties of the blog to be updated.

  ***

***

### Map

#### Mutations with this payload

* [blog​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/blogUpdate)

---
<a id="bulk-operation-cancel-payload"></a>

## Bulk​Operation​Cancel​Payload

payload

Return type for `bulkOperationCancel` mutation.

### Fields

* bulk​Operation

  [Bulk​Operation](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkOperation)

  The bulk operation to be canceled.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [bulk​Operation​Cancel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkOperationCancel)

  mutation

  Starts the cancelation process of a running bulk operation.

  There may be a short delay from when a cancelation starts until the operation is actually canceled.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the bulk operation to cancel.

  ***

***

### Map

#### Mutations with this payload

* [bulk​Operation​Cancel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkOperationCancel)

---
<a id="bulk-operation-run-mutation-payload"></a>

## Bulk​Operation​Run​Mutation​Payload

payload

Return type for `bulkOperationRunMutation` mutation.

### Fields

* bulk​Operation

  [Bulk​Operation](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkOperation)

  The newly created bulk operation.

* user​Errors

  [\[Bulk​Mutation​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkMutationUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [bulk​Operation​Run​Mutation](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkOperationRunMutation)

  mutation

  Creates and runs a [bulk operation](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkOperation) to import data asynchronously. This mutation executes a specified GraphQL mutation multiple times using input data from a [JSONL](http://jsonlines.org/) file that you've uploaded to Shopify.

  The operation processes each line in your JSONL file as a separate mutation execution. The operation delivers results in a JSONL file when it completes. You can run one bulk mutation operation at a time per shop, though a [`bulkOperationRunQuery`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkoperationrunquery) operation can run simultaneously.

  Learn more about [bulk importing data](https://shopify.dev/docs/api/usage/bulk-operations/imports).

  * mutation

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    The mutation to be executed in bulk.

  * staged​Upload​Path

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    The staged upload path of the file containing mutation variables.

  * group​Objects

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    DeprecatedDefault:true

  * client​Identifier

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    An optional identifier which may be used for querying.

  ***

***

### Map

#### Mutations with this payload

* [bulk​Operation​Run​Mutation](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkOperationRunMutation)

---
<a id="bulk-operation-run-query-payload"></a>

## Bulk​Operation​Run​Query​Payload

payload

Return type for `bulkOperationRunQuery` mutation.

### Fields

* bulk​Operation

  [Bulk​Operation](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkOperation)

  The newly created bulk operation.

* user​Errors

  [\[Bulk​Operation​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkOperationUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [bulk​Operation​Run​Query](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkOperationRunQuery)

  mutation

  Creates and runs a [bulk operation](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkOperation) to fetch data asynchronously. The operation processes your GraphQL query in the background and returns results in a [JSONL](http://jsonlines.org/) file when complete.

  Apps can run one bulk query operation and one bulk mutation operation at a time per shop. The query must include at least one connection field and supports up to five connections with a maximum nesting depth of two levels.

  ***

  **Note:** Results remain available for seven days after completion.

  ***

  For more information, see the [bulk operations guide](https://shopify.dev/docs/api/usage/bulk-operations/queries).

  * query

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    The query to be executed in bulk.

  * group​Objects

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    requiredDefault:false

    Enables grouping objects directly under their corresponding parent objects in the JSONL output. Enabling grouping slows down bulk operations and increases the likelihood of timeouts. Only enable grouping if you depend on the grouped format.

  ***

***

### Map

#### Mutations with this payload

* [bulk​Operation​Run​Query](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkOperationRunQuery)

---
<a id="bulk-product-resource-feedback-create-payload"></a>

## Bulk​Product​Resource​Feedback​Create​Payload

payload

Return type for `bulkProductResourceFeedbackCreate` mutation.

### Fields

* feedback

  [\[Product​Resource​Feedback!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductResourceFeedback)

  The feedback that's created.

* user​Errors

  [\[Bulk​Product​Resource​Feedback​Create​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkProductResourceFeedbackCreateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [bulk​Product​Resource​Feedback​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkProductResourceFeedbackCreate)

  mutation

  Creates product feedback for multiple products.

  * feedback​Input

    [\[Product​Resource​Feedback​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductResourceFeedbackInput)

    required

    ### Arguments

    An array of inputs to create the feedback. Limited to 50.

  ***

***

### Map

#### Mutations with this payload

* [bulk​Product​Resource​Feedback​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkProductResourceFeedbackCreate)

---
<a id="carrier-service-create-payload"></a>

## Carrier​Service​Create​Payload

payload

Return type for `carrierServiceCreate` mutation.

### Fields

* carrier​Service

  [Delivery​Carrier​Service](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCarrierService)

  The created carrier service.

* user​Errors

  [\[Carrier​Service​Create​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CarrierServiceCreateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [carrier​Service​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/carrierServiceCreate)

  mutation

  Creates a carrier service that provides real-time shipping rates to Shopify. Carrier services provide real-time shipping rates from external providers like FedEx, UPS, or custom shipping solutions. The carrier service connects to your external shipping rate calculation system through a callback URL.

  When customers reach checkout, Shopify sends order details to your callback URL and displays the returned shipping rates. The service must be active to provide rates during checkout.

  * input

    [Delivery​Carrier​Service​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryCarrierServiceCreateInput)

    required

    ### Arguments

    The input fields used to create a carrier service.

  ***

***

### Map

#### Mutations with this payload

* [carrier​Service​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/carrierServiceCreate)

---
<a id="carrier-service-delete-payload"></a>

## Carrier​Service​Delete​Payload

payload

Return type for `carrierServiceDelete` mutation.

### Fields

* deleted​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the deleted carrier service.

* user​Errors

  [\[Carrier​Service​Delete​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CarrierServiceDeleteUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [carrier​Service​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/carrierServiceDelete)

  mutation

  Removes an existing carrier service.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The global ID of the carrier service to delete.

  ***

***

### Map

#### Mutations with this payload

* [carrier​Service​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/carrierServiceDelete)

---
<a id="carrier-service-update-payload"></a>

## Carrier​Service​Update​Payload

payload

Return type for `carrierServiceUpdate` mutation.

### Fields

* carrier​Service

  [Delivery​Carrier​Service](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCarrierService)

  The updated carrier service.

* user​Errors

  [\[Carrier​Service​Update​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CarrierServiceUpdateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [carrier​Service​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/carrierServiceUpdate)

  mutation

  Updates a carrier service. Only the app that creates a carrier service can update it.

  * input

    [Delivery​Carrier​Service​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryCarrierServiceUpdateInput)

    required

    ### Arguments

    The input fields used to update a carrier service.

  ***

***

### Map

#### Mutations with this payload

* [carrier​Service​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/carrierServiceUpdate)

---
<a id="cart-transform-create-payload"></a>

## Cart​Transform​Create​Payload

payload

Return type for `cartTransformCreate` mutation.

### Fields

* cart​Transform

  [Cart​Transform](https://shopify.dev/docs/api/admin-graphql/latest/objects/CartTransform)

  The newly created cart transform function.

* user​Errors

  [\[Cart​Transform​Create​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CartTransformCreateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [cart​Transform​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/cartTransformCreate)

  mutation

  Creates a cart transform function that lets merchants customize how products are bundled and presented during checkout. This gives merchants powerful control over their merchandising strategy by allowing apps to modify cart line items programmatically, supporting advanced approaches like dynamic bundles or personalized product recommendations.

  For example, a bundle app might create a cart transform that automatically groups related products (like a camera, lens, and case) into a single bundle line item when customers add them to their cart, complete with bundle pricing and unified presentation.

  Use `CartTransformCreate` to:

  * Deploy custom bundling logic to merchant stores
  * Enable dynamic product grouping during checkout
  * Implement personalized product recommendations
  * Create conditional offers based on cart contents
  * Support complex pricing strategies for product combinations

  The mutation processes synchronously and returns the created cart transform along with any validation errors. Once created, the cart transform function becomes active for the shop and will process cart modifications according to your defined logic. Cart transforms integrate with [Shopify Functions](https://shopify.dev/docs/api/functions) to provide powerful customization capabilities while maintaining checkout performance.

  Cart Transform functions can be configured to block checkout on failure or allow graceful degradation, giving you control over how errors are handled in the customer experience.

  Learn more about [customized bundles](https://shopify.dev/docs/apps/selling-strategies/bundles/add-a-customized-bundle).

  * function​Id

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    Deprecated

    ### Arguments

  * function​Handle

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The handle of the Function providing the cart transform.

  * block​On​Failure

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Whether a run failure should block cart and checkout operations.

  * metafields

    [\[Metafield​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldInput)

    Default:\[]

    Additional metafields to associate to the cart transform.

  ***

***

### Map

#### Mutations with this payload

* [cart​Transform​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/cartTransformCreate)

---
<a id="cart-transform-delete-payload"></a>

## Cart​Transform​Delete​Payload

payload

Return type for `cartTransformDelete` mutation.

### Fields

* deleted​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The globally-unique ID for the deleted cart transform.

* user​Errors

  [\[Cart​Transform​Delete​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CartTransformDeleteUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [cart​Transform​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/cartTransformDelete)

  mutation

  Removes an existing cart transform function from the merchant's store, disabling any customized bundle or cart modification logic it provided. This mutation persistently deletes the transform configuration and stops all associated cart processing.

  For example, when discontinuing a bundle app or removing specific merchandising features, you would delete the corresponding cart transform to ensure customers no longer see the bundled products or modified cart behavior.

  Use `CartTransformDelete` to:

  * Deactivate customized bundle logic when removing app features
  * Clean up unused transform functions
  * Disable cart modifications during app uninstallation
  * Remove outdated merchandising strategies
  * Restore default cart behavior for merchants

  The deletion processes immediately and returns the ID of the removed cart transform for confirmation. Once deleted, the transform function stops processing new cart operations, though existing cart sessions may retain their current state until refresh. This ensures a clean transition without disrupting active customer sessions.

  Consider the timing of deletions carefully, as removing transforms during peak shopping periods could affect customer experience if they have active carts with transformed items.

  Learn more about [managing cart transforms](https://shopify.dev/docs/apps/selling-strategies/bundles).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    A globally-unique identifier for the cart transform.

  ***

***

### Map

#### Mutations with this payload

* [cart​Transform​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/cartTransformDelete)

---
<a id="cash-drawer-create-payload"></a>

## Cash​Drawer​Create​Payload

payload

Return type for `cashDrawerCreate` mutation.

### Fields

* cash​Drawer

  [Cash​Drawer](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashDrawer)

  The created cash drawer.

* user​Errors

  [\[Cash​Drawer​Create​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashDrawerCreateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [cash​Drawer​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/cashDrawerCreate)

  mutation

  Creates a cash drawer in a provided location.

  * location​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The location the cash drawer is located in.

  * name

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    The name of the cash drawer.

  ***

***

### Map

#### Mutations with this payload

* [cash​Drawer​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/cashDrawerCreate)

---
<a id="cash-drawer-find-or-create-payload"></a>

## Cash​Drawer​Find​Or​Create​Payload

payload

Return type for `cashDrawerFindOrCreate` mutation.

### Fields

* cash​Drawer

  [Cash​Drawer](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashDrawer)

  The cash drawer.

* user​Errors

  [\[Cash​Drawer​Find​Or​Create​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashDrawerFindOrCreateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [cash​Drawer​Find​Or​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/cashDrawerFindOrCreate)

  mutation

  Finds or creates a cash drawer for cash management. Also ensures the provided device is assigned to the drawer.

  * location​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The location the cash drawer is located in.

  * name

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    The name of the cash drawer.

  * point​Of​Sale​Device​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The point of sale device to assign to the cash drawer.

  ***

***

### Map

#### Mutations with this payload

* [cash​Drawer​Find​Or​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/cashDrawerFindOrCreate)

---
<a id="cash-drawer-update-payload"></a>

## Cash​Drawer​Update​Payload

payload

Return type for `cashDrawerUpdate` mutation.

### Fields

* cash​Drawer

  [Cash​Drawer](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashDrawer)

  The updated cash drawer.

* user​Errors

  [\[Cash​Drawer​Update​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashDrawerUpdateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [cash​Drawer​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/cashDrawerUpdate)

  mutation

  Updates a cash drawer.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the cash drawer to update.

  * input

    [Cash​Drawer​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CashDrawerUpdateInput)

    required

    The input fields for updating a cash drawer.

  ***

***

### Map

#### Mutations with this payload

* [cash​Drawer​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/cashDrawerUpdate)

---
<a id="cash-management-reason-code-create-payload"></a>

## Cash​Management​Reason​Code​Create​Payload

payload

Return type for `cashManagementReasonCodeCreate` mutation.

### Fields

* reason​Code

  [Cash​Management​Custom​Reason​Code](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashManagementCustomReasonCode)

  The created cash management reason code.

* user​Errors

  [\[Cash​Management​Reason​Code​Create​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashManagementReasonCodeCreateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [cash​Management​Reason​Code​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/cashManagementReasonCodeCreate)

  mutation

  Create a cash management reason code.

  * code

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    The reason code to create.

  ***

***

### Map

#### Mutations with this payload

* [cash​Management​Reason​Code​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/cashManagementReasonCodeCreate)

---
<a id="cash-management-reason-code-delete-payload"></a>

## Cash​Management​Reason​Code​Delete​Payload

payload

Return type for `cashManagementReasonCodeDelete` mutation.

### Fields

* deleted​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The deleted cash management reason code gid.

* user​Errors

  [\[Cash​Management​Reason​Code​Delete​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashManagementReasonCodeDeleteUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [cash​Management​Reason​Code​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/cashManagementReasonCodeDelete)

  mutation

  Deletes a cash management reason code.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The reason code id to delete.

  ***

***

### Map

#### Mutations with this payload

* [cash​Management​Reason​Code​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/cashManagementReasonCodeDelete)

---
<a id="catalog-context-update-payload"></a>

## Catalog​Context​Update​Payload

payload

Return type for `catalogContextUpdate` mutation.

### Fields

* catalog

  [Catalog](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog)

  The updated catalog.

* user​Errors

  [\[Catalog​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CatalogUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [catalog​Context​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/catalogContextUpdate)

  mutation

  Modifies which contexts, like [markets](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market) or B2B [company locations](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation), can access a [`Catalog`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog). You can add or remove contexts to control where the catalog's products and prices are available.

  Learn more about [managing catalog contexts](https://shopify.dev/docs/apps/build/markets/new-markets/catalogs) and [managing B2B catalogs](https://shopify.dev/docs/apps/build/b2b/manage-catalogs).

  * catalog​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the catalog for which to update the context.

  * contexts​To​Add

    [Catalog​Context​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CatalogContextInput)

    The contexts to add to the catalog.

  * contexts​To​Remove

    [Catalog​Context​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CatalogContextInput)

    The contexts to remove from the catalog.

  ***

***

### Map

#### Mutations with this payload

* [catalog​Context​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/catalogContextUpdate)

---
<a id="catalog-create-payload"></a>

## Catalog​Create​Payload

payload

Return type for `catalogCreate` mutation.

### Fields

* catalog

  [Catalog](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog)

  The newly created catalog.

* user​Errors

  [\[Catalog​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CatalogUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [catalog​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/catalogCreate)

  mutation

  Creates a [`Catalog`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog) that controls product availability and pricing for specific contexts like [markets](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market) or B2B [company locations](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation).

  ### Publications and Price Lists

  * **[`Publication`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication)** objects control which products are visible in a catalog. Publications are **optional**. When a publication isn't associated with a catalog, product availability is determined by the sales channel.
  * **[`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList)** objects define custom pricing for products in a catalog.

  You can optionally associate a publication and price list when creating the catalog, or add them later using separate mutations.

  ### When to use Publications

  **Create a publication only if you need to:**

  * Limit which products are visible in a specific context (e.g., show different products to different company locations or markets)
  * Publish a curated subset of your product catalog

  **Do NOT create a publication if:**

  * You want product availability determined by the sales channel
  * You only need to customize pricing (use a price list without a publication)

  > **Important:** For company location catalogs that only require custom pricing, create the catalog with a price list but without a publication.

  Learn more about [managing catalog contexts](https://shopify.dev/docs/apps/build/markets/new-markets/catalogs) and [using catalogs for different markets](https://shopify.dev/docs/apps/build/markets/catalogs-different-markets).

  * input

    [Catalog​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CatalogCreateInput)

    required

    ### Arguments

    The properties of the new catalog.

  ***

***

### Map

#### Mutations with this payload

* [catalog​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/catalogCreate)

---
<a id="catalog-delete-payload"></a>

## Catalog​Delete​Payload

payload

Return type for `catalogDelete` mutation.

### Fields

* deleted​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the deleted catalog.

* user​Errors

  [\[Catalog​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CatalogUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [catalog​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/catalogDelete)

  mutation

  Delete a catalog.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the catalog to delete.

  * delete​Dependent​Resources

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Whether to also delete the price list and the publication owned by the catalog.

  ***

***

### Map

#### Mutations with this payload

* [catalog​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/catalogDelete)

---
<a id="catalog-update-payload"></a>

## Catalog​Update​Payload

payload

Return type for `catalogUpdate` mutation.

### Fields

* catalog

  [Catalog](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog)

  The updated catalog.

* user​Errors

  [\[Catalog​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CatalogUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [catalog​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/catalogUpdate)

  mutation

  Updates an existing [catalog's](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog) configuration. Catalogs control product publishing and pricing for specific contexts like [markets](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market) or B2B [company locations](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation).

  You can modify the catalog's title, status, and associated context. You can also update the [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList) that determines pricing adjustments or the [`Publication`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication) that controls which products customers see.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the catalog to update.

  * input

    [Catalog​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CatalogUpdateInput)

    required

    The properties of the updated catalog.

  ***

***

### Map

#### Mutations with this payload

* [catalog​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/catalogUpdate)

---
<a id="channel-create-payload"></a>

## Channel​Create​Payload

payload

Return type for `channelCreate` mutation.

### Fields

* channel

  [Channel](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel)

  The channel that was created.

* user​Errors

  [\[Channel​Create​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ChannelCreateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [channel​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/channelCreate)

  mutation

  Creates a [`Channel`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel) representing a connection between the shop and an external selling platform account. Use this mutation after a merchant authenticates with an external platform to establish the publishing destination for product syndication and, for order-generating channels, order import.

  The platform resolves the [channel specification](https://shopify.dev/docs/apps/build/sales-channels/channel-config-extension) identified by `specificationHandle`, determines its country coverage, intersects with the shop's available region markets, and establishes product feeds for all matching regions. Product feeds immediately begin emitting events to the application's webhook or event subscription.

  If the specification sets `expects_online_store_parity` and no matching region markets exist, the mutation returns an error. If the specification doesn't require online store parity and no matching region markets exist, a channel subordinate to shop defaults is created automatically.

  * input

    [Channel​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ChannelCreateInput)

    required

    ### Arguments

    The input fields for creating the channel.

  ***

***

### Map

#### Mutations with this payload

* [channel​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/channelCreate)

---
<a id="channel-delete-payload"></a>

## Channel​Delete​Payload

payload

Return type for `channelDelete` mutation.

### Fields

* deleted​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the deleted channel.

* user​Errors

  [\[Channel​Delete​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ChannelDeleteUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [channel​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/channelDelete)

  mutation

  Deletes a [`Channel`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel) from the shop. All associated product feeds are removed. Existing orders attributed to the channel are preserved. The channel must have been created via [`channelCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/channelCreate).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the channel to delete.

  ***

***

### Map

#### Mutations with this payload

* [channel​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/channelDelete)

---
<a id="channel-full-sync-payload"></a>

## Channel​Full​Sync​Payload

payload

Return type for `channelFullSync` mutation.

### Fields

* full​Sync​Trace​Info

  [\[Full​Sync​Trace​Info!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/FullSyncTraceInfo)

  Trace information for each country-language product feed that was triggered. Returns one entry per feed.

* user​Errors

  [\[Channel​Full​Sync​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ChannelFullSyncUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [channel​Full​Sync](https://shopify.dev/docs/api/admin-graphql/latest/mutations/channelFullSync)

  mutation

  Triggers a full product resync for the specified [`Channel`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel). All published products are added to the channel's product feed attention set, causing the next poll or event-triggered consumption to receive current state for the complete catalog. Use this mutation after initial channel setup, after recovering from a prolonged outage, or when the channel's external catalog has drifted from Shopify's state.

  The sync can be scoped to a specific country and language. When neither is specified, all country-language combinations covered by the channel's specification are triggered.

  * channel​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the channel to trigger a full sync for. Accepts a [`Channel`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel) or [`Publication`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication) global ID.

  * language

    [Language​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/LanguageCode)

    The language to scope the sync to. When omitted, all languages for the targeted countries are synced.

  * country

    [Country​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/CountryCode)

    The country to scope the sync to. When omitted, all countries covered by the channel's specification are synced.

  * before​Updated​At

    [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    Syncs only products that haven't changed since the specified timestamp.

  * updated​At​Since

    [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    Syncs only products that have changed since the specified timestamp.

  ***

***

### Map

#### Mutations with this payload

* [channel​Full​Sync](https://shopify.dev/docs/api/admin-graphql/latest/mutations/channelFullSync)

---
<a id="channel-update-payload"></a>

## Channel​Update​Payload

payload

Return type for `channelUpdate` mutation.

### Fields

* channel

  [Channel](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel)

  The channel that was updated.

* user​Errors

  [\[Channel​Update​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ChannelUpdateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [channel​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/channelUpdate)

  mutation

  Updates the properties of an existing [`Channel`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel). Use this mutation to update account information — such as the display name shown in Shopify Admin — or to bind the channel to a different channel specification.

  Updating the `specificationHandle` triggers re-evaluation of the specification's country coverage against the shop's region markets, reconciling product feeds accordingly. This is also the mechanism for migrating legacy channel records to the multi-channel model by assigning a specification handle.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the [`Channel`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel) to update.

  * input

    [Channel​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ChannelUpdateInput)

    required

    The input fields for updating the channel.

  ***

***

### Map

#### Mutations with this payload

* [channel​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/channelUpdate)

---
<a id="checkout-and-accounts-configuration-update-payload"></a>

## Checkout​And​Accounts​Configuration​Update​Payload

payload

Return type for `checkoutAndAccountsConfigurationUpdate` mutation.

### Fields

* configuration

  [Checkout​And​Accounts​Configuration](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfiguration)

  The updated configuration.

* user​Errors

  [\[Checkout​And​Accounts​Configuration​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [checkout​And​Accounts​Configuration​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/checkoutAndAccountsConfigurationUpdate)

  mutation

  Updates a checkout and accounts configuration.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the configuration to update.

  * configuration

    [Checkout​And​Accounts​Configuration​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutAndAccountsConfigurationInput)

    required

    The intended changes to the configuration.

  ***

***

### Map

#### Mutations with this payload

* [checkout​And​Accounts​Configuration​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/checkoutAndAccountsConfigurationUpdate)

---
<a id="checkout-branding-upsert-payload"></a>

## Checkout​Branding​Upsert​Payload

payload

Return type for `checkoutBrandingUpsert` mutation.

### Fields

* checkout​Branding

  [Checkout​Branding](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBranding)

  Returns the new checkout branding settings.

* user​Errors

  [\[Checkout​Branding​Upsert​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingUpsertUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [checkout​Branding​Upsert](https://shopify.dev/docs/api/admin-graphql/latest/mutations/checkoutBrandingUpsert)

  mutation

  Deprecated

  * checkout​Profile​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    A globally-unique identifier.

  * checkout​Branding​Input

    [Checkout​Branding​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingInput)

    The input fields to use to upsert the checkout branding settings (pass null to reset them to default).

  ***

***

### Map

---
<a id="collection-add-products-payload"></a>

## Collection​Add​Products​Payload

payload

Return type for `collectionAddProducts` mutation.

### Fields

* collection

  [Collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection)

  The updated collection. Returns `null` if an error is raised.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [collection​Add​Products](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionAddProducts)

  mutation

  Adds multiple products to an existing collection in a single operation. This mutation provides an efficient way to bulk-manage collection membership without individual product updates.

  For example, when merchants create seasonal collections, they can add dozens of related products at once rather than updating each product individually. A clothing store might add all winter jackets to a "Winter Collection" in one operation.

  Use `CollectionAddProducts` to:

  * Bulk-add products to collections for efficient catalog management
  * Implement collection building tools in admin interfaces
  * Organize collection membership during bulk product operations
  * Reduce API calls when managing large product sets

  The mutation processes multiple product additions and returns success status along with any errors encountered during the operation. Products are added to the collection while preserving existing collection settings.

  This operation only works with manual collections where merchants explicitly choose which products to include. It will return an error if used with smart collections that automatically include products based on conditions.

  Learn more about [collection management](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the collection that's being updated. This can't be a smart collection.

  * product​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The IDs of the products that are being added to the collection. If any of the products is already present in the input collection, then an error is raised and no products are added.

  ***

***

### Map

#### Mutations with this payload

* [collection​Add​Products](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionAddProducts)

---
<a id="collection-add-products-v2payload"></a>

## Collection​Add​Products​V2Payload

payload

Return type for `collectionAddProductsV2` mutation.

### Fields

* job

  [Job](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job)

  The asynchronous job adding the products.

* user​Errors

  [\[Collection​Add​Products​V2User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionAddProductsV2UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [collection​Add​Products​V2](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionAddProductsV2)

  mutation

  Adds products to a [`Collection`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection) asynchronously and returns a [`Job`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job) to track the operation's progress. This mutation handles large product sets efficiently by processing them in the background.

  You can poll the returned job using the [`job`](https://shopify.dev/docs/api/admin-graphql/latest/queries/job) query to monitor completion status.

  ***

  **Note:** This mutation adds products in the order specified in the \<a href="https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionAddProducts#arguments-productIds">\<code>\<span class="PreventFireFoxApplyingGapToWBR">product\<wbr/>Ids\</span>\</code>\</a> argument.

  ***

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the collection that's being updated.

  * product​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The IDs of the products that are being added to the collection. If the collection's sort order is manual, the products will be added in the order in which they are provided.

  ***

***

### Map

#### Mutations with this payload

* [collection​Add​Products​V2](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionAddProductsV2)

---
<a id="collection-create-payload"></a>

## Collection​Create​Payload

payload

Return type for `collectionCreate` mutation.

### Fields

* collection

  [Collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection)

  The collection that has been created.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [collection​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionCreate)

  mutation

  Creates a [collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection) to group [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) together in the [online store](https://shopify.dev/docs/apps/build/online-store) and other [sales channels](https://shopify.dev/docs/apps/build/sales-channels). For example, an athletics store might create different collections for running attire, shoes, and accessories.

  There are two types of collections:

  * **[Custom (manual) collections](https://help.shopify.com/manual/products/collections/manual-shopify-collection)**: You specify the products to include in a collection.
  * **[Smart (automated) collections](https://help.shopify.com/manual/products/collections/automated-collections)**: You define rules, and products matching those rules are automatically included in the collection.

  Use the `collectionCreate` mutation when you need to:

  * Create a new collection for a product launch or campaign
  * Organize products by category, season, or promotion
  * Automate product grouping using rules (for example, by tag, type, or price)

  ***

  **Note:** The created collection is unpublished by default. To make it available to customers, use the \<a href="https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishablePublish">\<code>\<span class="PreventFireFoxApplyingGapToWBR">publishable\<wbr/>Publish\</span>\</code>\</a> mutation after creation.

  ***

  Learn more about [using metafields with smart collections](https://shopify.dev/docs/apps/build/custom-data/metafields/use-metafield-capabilities).

  * input

    [Collection​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CollectionInput)

    required

    ### Arguments

    The properties to use when creating the collection.

  ***

***

### Map

#### Mutations with this payload

* [collection​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionCreate)

---
<a id="collection-delete-payload"></a>

## Collection​Delete​Payload

payload

Return type for `collectionDelete` mutation.

### Fields

* deleted​Collection​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the collection that was deleted. Returns `null` if the collection doesn't exist.

* shop

  [Shop!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop)

  non-null

  The shop associated with the collection.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [collection​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionDelete)

  mutation

  Deletes a collection and removes it permanently from the store. This operation cannot be undone and will remove the collection from all sales channels where it was published.

  For example, when merchants discontinue seasonal promotions or reorganize their catalog structure, they can delete outdated collections like "Back to School 2023" to keep their store organized.

  Use `CollectionDelete` to:

  * Remove outdated or unused collections from stores
  * Clean up collection structures during catalog reorganization
  * Implement collection management tools with deletion capabilities

  Products within the deleted collection remain in the store but are no longer grouped under that collection.

  Learn more about [collection management](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection).

  * input

    [Collection​Delete​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CollectionDeleteInput)

    required

    ### Arguments

    The collection to delete.

  ***

***

### Map

#### Mutations with this payload

* [collection​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionDelete)

---
<a id="collection-duplicate-payload"></a>

## Collection​Duplicate​Payload

payload

Return type for `collectionDuplicate` mutation.

### Fields

* collection

  [Collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection)

  The newly created duplicate collection. Will contain all data if duplication completed synchronously. If async processing is required, the collection will be created but products will be added in the background and can be tracked via the job field or the collection's active\_operations field.

* job

  [Job](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job)

  The background job copying manually included products onto the target collection. Only returned if async processing is required, otherwise products will be copied synchronously when the collection is created.

* user​Errors

  [\[Collection​Duplicate​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionDuplicateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [collection​Duplicate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionDuplicate)

  mutation

  Duplicates a [collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection).

  An existing collection ID and new title are required.

  ## Publication Duplication

  Publications may be excluded by passing `copyPublications: false` in the input.

  ## Metafields

  Metafield values are not duplicated if the unique values capability is enabled.

  * input

    [Collection​Duplicate​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CollectionDuplicateInput)

    required

    ### Arguments

    The input for duplicating a collection.

  ***

***

### Map

#### Mutations with this payload

* [collection​Duplicate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionDuplicate)

---
<a id="collection-publish-payload"></a>

## Collection​Publish​Payload

payload

Return type for `collectionPublish` mutation.

### Fields

* collection

  [Collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection)

  The published collection.

* collection​Publications

  [\[Collection​Publication!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionPublication)

  The channels where the collection has been published.

* shop

  [Shop!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop)

  non-null

  The shop associated with the collection.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [collection​Publish](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionPublish)

  mutation

  Deprecated

  * input

    [Collection​Publish​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CollectionPublishInput)

    required

    ### Arguments

    Specify a collection to publish and the sales channels to publish it to.

  ***

***

### Map

---
<a id="collection-remove-products-payload"></a>

## Collection​Remove​Products​Payload

payload

Return type for `collectionRemoveProducts` mutation.

### Fields

* job

  [Job](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job)

  The asynchronous job removing the products.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [collection​Remove​Products](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionRemoveProducts)

  mutation

  Removes multiple products from a collection in a single operation. This mutation can process large product sets (up to 250 products) and may take significant time to complete for collections with many products.

  For example, when ending a seasonal promotion, merchants can remove all sale items from a "Summer Clearance" collection at once rather than editing each product individually.

  Use `CollectionRemoveProducts` to:

  * Bulk-remove products from collections efficiently
  * Clean up collection membership during catalog updates
  * Implement automated collection management workflows

  The operation processes asynchronously to avoid timeouts and performance issues, especially for large product sets.

  Learn more about [collection management](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the collection to remove products from. The ID must reference an existing manual collection.

  * product​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The IDs of products to remove from the collection. The mutation doesn't validate that the products belong to the collection or whether the products exist.

  ***

***

### Map

#### Mutations with this payload

* [collection​Remove​Products](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionRemoveProducts)

---
<a id="collection-reorder-products-payload"></a>

## Collection​Reorder​Products​Payload

payload

Return type for `collectionReorderProducts` mutation.

### Fields

* job

  [Job](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job)

  The asynchronous job reordering the products.

* user​Errors

  [\[Collection​Reorder​Products​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionReorderProductsUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [collection​Reorder​Products](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionReorderProducts)

  mutation

  Asynchronously reorders products within a specified collection. Instead of returning an updated collection, this mutation returns a job, which should be [polled](https://shopify.dev/api/admin-graphql/latest/queries/job). The [`Collection.sortOrder`](https://shopify.dev/api/admin-graphql/latest/objects/Collection#field-collection-sortorder) must be `MANUAL`.

  How to use this mutation:

  * Provide only the products that actually moved in the `moves` list; do not send the entire product list. For example: to move the product at index 1 to index N, send a single move for that product with `newPosition: N`.
  * Each move is applied sequentially in the order provided.
  * `newPosition` is a zero-based index within the collection at the moment the move is applied (after any prior moves in the list).
  * Products not included in `moves` keep their relative order, aside from any displacement caused by the moves.
  * If `newPosition` is greater than or equal to the number of products, the product is placed at the end.

  Example:

  * Initial order: \[A, B, C, D, E] (indices 0..4)
  * Moves (applied in order):
  * E -> newPosition: 1
  * C -> newPosition: 4
  * Result: \[A, E, B, D, C]

  Displaced products will have their position altered in a consistent manner with no gaps.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the collection on which to reorder products.

  * moves

    [\[Move​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MoveInput)

    required

    A list of moves to perform, evaluated in order. Provide only products whose positions changed; do not send the full list. `newPosition` is a zero-based index evaluated at the time each move is applied (after any prior moves). `newPosition` values do not need to be unique, and if a value is greater than or equal to the number of products, the product is moved to the end. Up to 250 moves are supported.

  ***

***

### Map

#### Mutations with this payload

* [collection​Reorder​Products](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionReorderProducts)

---
<a id="collection-unpublish-payload"></a>

## Collection​Unpublish​Payload

payload

Return type for `collectionUnpublish` mutation.

### Fields

* collection

  [Collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection)

  The collection that has been unpublished.

* shop

  [Shop!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop)

  non-null

  The shop associated with the collection.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [collection​Unpublish](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionUnpublish)

  mutation

  Deprecated

  * input

    [Collection​Unpublish​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CollectionUnpublishInput)

    required

    ### Arguments

    Specify a collection to unpublish and the sales channels to remove it from.

  ***

***

### Map

---
<a id="collection-update-payload"></a>

## Collection​Update​Payload

payload

Return type for `collectionUpdate` mutation.

### Fields

* collection

  [Collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection)

  The updated collection.

* job

  [Job](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job)

  The asynchronous job updating the products based on the new rule set.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [collection​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionUpdate)

  mutation

  Updates a [collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection), modifying its properties, products, or publication settings. Collections help organize [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) together in the [online store](https://shopify.dev/docs/apps/build/online-store) and other [sales channels](https://shopify.dev/docs/apps/build/sales-channels).

  Use the `collectionUpdate` mutation to programmatically modify collections in scenarios such as:

  * Updating collection details, like title, description, or image
  * Modifying SEO metadata for better search visibility
  * Changing which products are included (using rule updates for smart collections)
  * Publishing or unpublishing collections across different sales channels
  * Updating custom data using [metafields](https://shopify.dev/docs/apps/build/custom-data/metafields)

  There are two types of collections with different update capabilities:

  * **[Custom (manual) collections](https://help.shopify.com/manual/products/collections/manual-shopify-collection)**: You can update collection properties, but rule sets can't be modified since products are manually selected.
  * **[Smart (automated) collections](https://help.shopify.com/manual/products/collections/automated-collections)**: You can update both collection properties and the rules that automatically determine which products are included. When updating [rule sets](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionRuleConditions) for smart collections, the operation might be processed asynchronously. In these cases, the mutation returns a [`job`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job) object that you can use to track the progress of the update.

  To publish or unpublish collections to specific sales channels, use the dedicated [`publishablePublish`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishablePublish) and [`publishableUnpublish`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishableUnpublish) mutations.

  Learn more about [using metafields with smart collections](https://shopify.dev/docs/apps/build/custom-data/metafields/use-metafield-capabilities).

  * input

    [Collection​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CollectionInput)

    required

    ### Arguments

    The updated properties for the collection.

  ***

***

### Map

#### Mutations with this payload

* [collection​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionUpdate)

---
<a id="combined-listing-update-payload"></a>

## Combined​Listing​Update​Payload

payload

Return type for `combinedListingUpdate` mutation.

### Fields

* product

  [Product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

  The parent product.

* user​Errors

  [\[Combined​Listing​Update​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CombinedListingUpdateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [combined​Listing​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/combinedListingUpdate)

  mutation

  Add, remove and update `CombinedListing`s of a given Product.

  `CombinedListing`s are comprised of multiple products to create a single listing. There are two kinds of products used in a `CombinedListing`:

  1. Parent products
  2. Child products

  The parent product is created with a `productCreate` with a `CombinedListingRole` of `PARENT`. Once created, you can associate child products with the parent product using this mutation. Parent products represent the idea of a product (e.g. Shoe).

  Child products represent a particular option value (or combination of option values) of a parent product. For instance, with your Shoe parent product, you may have several child products representing specific colors of the shoe (e.g. Shoe - Blue). You could also have child products representing more than a single option (e.g. Shoe - Blue/Canvas, Shoe - Blue/Leather, etc...).

  The combined listing is the association of parent product to one or more child products.

  Learn more about [Combined Listings](https://shopify.dev/apps/selling-strategies/combined-listings).

  * parent​Product​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the parent product.

  * title

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The updated title for the combined listing.

  * products​Added

    [\[Child​Product​Relation​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ChildProductRelationInput)

    The child products to add and their assigned options and option values.

  * products​Edited

    [\[Child​Product​Relation​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ChildProductRelationInput)

    The child products to edit and their assigned options and option values.

  * products​Removed​Ids

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The IDs of products to be removed from the combined listing.

  * options​And​Values

    [\[Option​And​Value​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OptionAndValueInput)

    The ordered options and values to be used by the combined listing. Options and values will be reordered to match the order specified here.

  ***

***

### Map

#### Mutations with this payload

* [combined​Listing​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/combinedListingUpdate)

---
<a id="comment-approve-payload"></a>

## Comment​Approve​Payload

payload

Return type for `commentApprove` mutation.

### Fields

* comment

  [Comment](https://shopify.dev/docs/api/admin-graphql/latest/objects/Comment)

  The comment that was approved.

* user​Errors

  [\[Comment​Approve​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CommentApproveUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [comment​Approve](https://shopify.dev/docs/api/admin-graphql/latest/mutations/commentApprove)

  mutation

  Approves a pending comment, making it visible to store visitors on the associated blog article.

  For example, when a customer submits a question about a product in a blog post, merchants can approve the comment to make it publicly visible.

  Use the `commentApprove` mutation to:

  * Publish pending comments after review
  * Enable customer discussions on blog articles
  * Maintain quality control over comments

  Once approved, the comment becomes visible to all store visitors.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the comment to be approved.

  ***

***

### Map

#### Mutations with this payload

* [comment​Approve](https://shopify.dev/docs/api/admin-graphql/latest/mutations/commentApprove)

---
<a id="comment-delete-payload"></a>

## Comment​Delete​Payload

payload

Return type for `commentDelete` mutation.

### Fields

* deleted​Comment​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the comment that was deleted.

* user​Errors

  [\[Comment​Delete​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CommentDeleteUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [comment​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/commentDelete)

  mutation

  Permanently removes a comment from a blog article.

  For example, when a comment contains spam links or inappropriate language that violates store policies, merchants can delete it entirely.

  Use the `commentDelete` mutation to:

  * Remove spam or inappropriate comments permanently
  * Clean up irrelevant discussions
  * Maintain content standards on blog articles

  Deletion is permanent and can't be undone.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the comment to be deleted.

  ***

***

### Map

#### Mutations with this payload

* [comment​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/commentDelete)

---
<a id="comment-not-spam-payload"></a>

## Comment​Not​Spam​Payload

payload

Return type for `commentNotSpam` mutation.

### Fields

* comment

  [Comment](https://shopify.dev/docs/api/admin-graphql/latest/objects/Comment)

  The comment that was marked as not spam.

* user​Errors

  [\[Comment​Not​Spam​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CommentNotSpamUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [comment​Not​Spam](https://shopify.dev/docs/api/admin-graphql/latest/mutations/commentNotSpam)

  mutation

  Reverses a spam classification on a comment, restoring it to normal moderation status. This mutation allows merchants to change their decision when a comment has been manually marked as spam.

  For example, when a merchant reviews comments marked as spam and finds a legitimate customer question, they can use this mutation to restore the comment's normal status and make it eligible for approval.

  Use the `commentNotSpam` mutation to:

  * Unmark comments that were marked as spam
  * Restore comments to normal moderation status
  * Move comments back to the approval queue

  This action changes the comment's status from spam back to pending, where it can then be approved or managed according to standard moderation practices.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the comment to be marked as not spam.

  ***

***

### Map

#### Mutations with this payload

* [comment​Not​Spam](https://shopify.dev/docs/api/admin-graphql/latest/mutations/commentNotSpam)

---
<a id="comment-spam-payload"></a>

## Comment​Spam​Payload

payload

Return type for `commentSpam` mutation.

### Fields

* comment

  [Comment](https://shopify.dev/docs/api/admin-graphql/latest/objects/Comment)

  The comment that was marked as spam.

* user​Errors

  [\[Comment​Spam​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CommentSpamUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [comment​Spam](https://shopify.dev/docs/api/admin-graphql/latest/mutations/commentSpam)

  mutation

  Marks a comment as spam, removing it from public view. This mutation enables merchants to quickly handle unwanted promotional content, malicious links, or other spam that appears in blog discussions.

  For example, when a comment contains suspicious links to unrelated products or services, merchants can mark it as spam to immediately hide it from customers.

  Use the `commentSpam` mutation to:

  * Hide promotional or malicious comments from public view
  * Protect customers from potentially harmful links
  * Maintain professional discussion quality on blog articles

  Spam-marked comments can be reviewed later and potentially restored using the `commentNotSpam` mutation if they were incorrectly classified.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the comment to be marked as spam.

  ***

***

### Map

#### Mutations with this payload

* [comment​Spam](https://shopify.dev/docs/api/admin-graphql/latest/mutations/commentSpam)

---
<a id="companies-delete-payload"></a>

## Companies​Delete​Payload

payload

Return type for `companiesDelete` mutation.

### Fields

* deleted​Company​Ids

  [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  A list of IDs of the deleted companies.

* user​Errors

  [\[Business​Customer​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [companies​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companiesDelete)

  mutation

  Deletes a list of companies.

  * company​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    A list of IDs of companies to delete.

  ***

***

### Map

#### Mutations with this payload

* [companies​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companiesDelete)

---
<a id="company-address-delete-payload"></a>

## Company​Address​Delete​Payload

payload

Return type for `companyAddressDelete` mutation.

### Fields

* deleted​Address​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the deleted address.

* user​Errors

  [\[Business​Customer​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [company​Address​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyAddressDelete)

  mutation

  Deletes a company address.

  * address​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the address to delete.

  ***

***

### Map

#### Mutations with this payload

* [company​Address​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyAddressDelete)

---
<a id="company-assign-customer-as-contact-payload"></a>

## Company​Assign​Customer​As​Contact​Payload

payload

Return type for `companyAssignCustomerAsContact` mutation.

### Fields

* company​Contact

  [Company​Contact](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContact)

  The created company contact.

* user​Errors

  [\[Business​Customer​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [company​Assign​Customer​As​Contact](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyAssignCustomerAsContact)

  mutation

  Adds an existing [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) as a contact to a [`Company`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company). Companies are business entities that make purchases from the merchant's store. Use this mutation when you have a customer who needs to be associated with a B2B company to make purchases on behalf of that company.

  The mutation returns the newly created [`CompanyContact`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContact) that links the customer to the company. After assignment, the customer becomes a company contact who can place orders on behalf of the company with access to any catalogs, pricing, and payment terms configured for the company's locations.

  * company​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the company to assign the contact to.

  * customer​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the customer to assign as the contact.

  ***

***

### Map

#### Mutations with this payload

* [company​Assign​Customer​As​Contact](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyAssignCustomerAsContact)

---
<a id="company-assign-main-contact-payload"></a>

## Company​Assign​Main​Contact​Payload

payload

Return type for `companyAssignMainContact` mutation.

### Fields

* company

  [Company](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company)

  The company for which the main contact is assigned.

* user​Errors

  [\[Business​Customer​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [company​Assign​Main​Contact](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyAssignMainContact)

  mutation

  Assigns the main contact for the company.

  * company​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the company to assign the main contact to.

  * company​Contact​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the company contact to be assigned as the main contact.

  ***

***

### Map

#### Mutations with this payload

* [company​Assign​Main​Contact](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyAssignMainContact)

---
<a id="company-contacts-delete-payload"></a>

## Company​Contacts​Delete​Payload

payload

Return type for `companyContactsDelete` mutation.

### Fields

* deleted​Company​Contact​Ids

  [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The list of IDs of the deleted company contacts.

* user​Errors

  [\[Business​Customer​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [company​Contacts​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyContactsDelete)

  mutation

  Deletes one or more company contacts.

  * company​Contact​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The list of IDs of the company contacts to delete.

  ***

***

### Map

#### Mutations with this payload

* [company​Contacts​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyContactsDelete)

---
<a id="company-contact-assign-roles-payload"></a>

## Company​Contact​Assign​Roles​Payload

payload

Return type for `companyContactAssignRoles` mutation.

### Fields

* role​Assignments

  [\[Company​Contact​Role​Assignment!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContactRoleAssignment)

  A list of newly created assignments of company contacts to a company location.

* user​Errors

  [\[Business​Customer​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [company​Contact​Assign​Roles](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyContactAssignRoles)

  mutation

  Assigns roles on a company contact.

  * company​Contact​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The contact whose roles are being assigned.

  * roles​To​Assign

    [\[Company​Contact​Role​Assign!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CompanyContactRoleAssign)

    required

    The new roles to assign.

  ***

***

### Map

#### Mutations with this payload

* [company​Contact​Assign​Roles](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyContactAssignRoles)

---
<a id="company-contact-assign-role-payload"></a>

## Company​Contact​Assign​Role​Payload

payload

Return type for `companyContactAssignRole` mutation.

### Fields

* company​Contact​Role​Assignment

  [Company​Contact​Role​Assignment](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContactRoleAssignment)

  The company contact role assignment.

* user​Errors

  [\[Business​Customer​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [company​Contact​Assign​Role](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyContactAssignRole)

  mutation

  Assigns a role to a contact for a location.

  * company​Contact​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the contact to assign a role to.

  * company​Contact​Role​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the role to assign to a contact.

  * company​Location​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the location to assign a role to a contact.

  ***

***

### Map

#### Mutations with this payload

* [company​Contact​Assign​Role](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyContactAssignRole)

---
<a id="company-contact-create-payload"></a>

## Company​Contact​Create​Payload

payload

Return type for `companyContactCreate` mutation.

### Fields

* company​Contact

  [Company​Contact](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContact)

  The created company contact.

* user​Errors

  [\[Business​Customer​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [company​Contact​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyContactCreate)

  mutation

  Creates a company contact and the associated customer.

  * company​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the company that the company contact belongs to.

  * input

    [Company​Contact​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CompanyContactInput)

    required

    The fields to use to create the company contact.

  ***

***

### Map

#### Mutations with this payload

* [company​Contact​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyContactCreate)

---
<a id="company-contact-delete-payload"></a>

## Company​Contact​Delete​Payload

payload

Return type for `companyContactDelete` mutation.

### Fields

* deleted​Company​Contact​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the deleted company contact.

* user​Errors

  [\[Business​Customer​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [company​Contact​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyContactDelete)

  mutation

  Deletes a company contact.

  * company​Contact​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the company contact to delete.

  ***

***

### Map

#### Mutations with this payload

* [company​Contact​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyContactDelete)

---
<a id="company-contact-remove-from-company-payload"></a>

## Company​Contact​Remove​From​Company​Payload

payload

Return type for `companyContactRemoveFromCompany` mutation.

### Fields

* removed​Company​Contact​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the removed company contact.

* user​Errors

  [\[Business​Customer​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [company​Contact​Remove​From​Company](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyContactRemoveFromCompany)

  mutation

  Removes a company contact from a Company.

  * company​Contact​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the company contact to remove from the Company.

  ***

***

### Map

#### Mutations with this payload

* [company​Contact​Remove​From​Company](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyContactRemoveFromCompany)

---
<a id="company-contact-revoke-roles-payload"></a>

## Company​Contact​Revoke​Roles​Payload

payload

Return type for `companyContactRevokeRoles` mutation.

### Fields

* revoked​Role​Assignment​Ids

  [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  A list of role assignment IDs that were removed from the company contact.

* user​Errors

  [\[Business​Customer​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [company​Contact​Revoke​Roles](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyContactRevokeRoles)

  mutation

  Revokes roles on a company contact.

  * company​Contact​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The contact whose roles are being revoked.

  * role​Assignment​Ids

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The current role assignment IDs to revoke.

  * revoke​All

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Flag to revoke all roles on the contact.

  ***

***

### Map

#### Mutations with this payload

* [company​Contact​Revoke​Roles](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyContactRevokeRoles)

---
<a id="company-contact-revoke-role-payload"></a>

## Company​Contact​Revoke​Role​Payload

payload

Return type for `companyContactRevokeRole` mutation.

### Fields

* revoked​Company​Contact​Role​Assignment​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The role assignment that was revoked.

* user​Errors

  [\[Business​Customer​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [company​Contact​Revoke​Role](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyContactRevokeRole)

  mutation

  Revokes a role on a company contact.

  * company​Contact​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the contact to revoke a role from.

  * company​Contact​Role​Assignment​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the role assignment to revoke from a contact.

  ***

***

### Map

#### Mutations with this payload

* [company​Contact​Revoke​Role](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyContactRevokeRole)

---
<a id="company-contact-update-payload"></a>

## Company​Contact​Update​Payload

payload

Return type for `companyContactUpdate` mutation.

### Fields

* company​Contact

  [Company​Contact](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContact)

  The updated company contact.

* user​Errors

  [\[Business​Customer​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [company​Contact​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyContactUpdate)

  mutation

  Updates a company contact.

  * company​Contact​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the company contact to be updated.

  * input

    [Company​Contact​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CompanyContactInput)

    required

    The fields to use to update the company contact.

  ***

***

### Map

#### Mutations with this payload

* [company​Contact​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyContactUpdate)

---
<a id="company-create-payload"></a>

## Company​Create​Payload

payload

Return type for `companyCreate` mutation.

### Fields

* company

  [Company](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company)

  The created company.

* user​Errors

  [\[Business​Customer​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [company​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyCreate)

  mutation

  Creates a [`Company`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company) for B2B commerce. This mutation creates the company and can optionally create an initial [`CompanyContact`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContact) and [`CompanyLocation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation) in a single operation. Company contacts are people who place orders on behalf of the company. Company locations are branches or offices with their own billing and shipping addresses.

  ***

  **Note:** Creating a company without a \<code>name\</code> \<a href="https://shopify.dev/docs/api/admin-graphql/latest/mutations/companycreate?example=creating-a-company-without-a-name-returns-an-error">returns an error\</a>.

  ***

  Learn more about [creating companies for B2B](https://shopify.dev/docs/apps/build/b2b/start-building#step-1-create-a-company).

  * input

    [Company​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CompanyCreateInput)

    required

    ### Arguments

    The fields to use when creating the company.

  ***

***

### Map

#### Mutations with this payload

* [company​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyCreate)

---
<a id="company-delete-payload"></a>

## Company​Delete​Payload

payload

Return type for `companyDelete` mutation.

### Fields

* deleted​Company​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the deleted company.

* user​Errors

  [\[Business​Customer​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [company​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyDelete)

  mutation

  Deletes a company.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the company to delete.

  ***

***

### Map

#### Mutations with this payload

* [company​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyDelete)

---
<a id="company-locations-delete-payload"></a>

## Company​Locations​Delete​Payload

payload

Return type for `companyLocationsDelete` mutation.

### Fields

* deleted​Company​Location​Ids

  [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  A list of IDs of the deleted company locations.

* user​Errors

  [\[Business​Customer​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [company​Locations​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationsDelete)

  mutation

  Deletes a list of company locations.

  * company​Location​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    A list of IDs of company locations to delete.

  ***

***

### Map

#### Mutations with this payload

* [company​Locations​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationsDelete)

---
<a id="company-location-assign-address-payload"></a>

## Company​Location​Assign​Address​Payload

payload

Return type for `companyLocationAssignAddress` mutation.

### Fields

* addresses

  [\[Company​Address!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyAddress)

  The list of updated addresses on the company location.

* user​Errors

  [\[Business​Customer​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [company​Location​Assign​Address](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationAssignAddress)

  mutation

  Updates an address on a company location.

  * location​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the company location to update addresses on.

  * address

    [Company​Address​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CompanyAddressInput)

    required

    The input fields to use to update the address.

  * address​Types

    [\[Company​Address​Type!\]!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CompanyAddressType)

    required

    The list of address types on the location to update.

  ***

***

### Map

#### Mutations with this payload

* [company​Location​Assign​Address](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationAssignAddress)

---
<a id="company-location-assign-roles-payload"></a>

## Company​Location​Assign​Roles​Payload

payload

Return type for `companyLocationAssignRoles` mutation.

### Fields

* role​Assignments

  [\[Company​Contact​Role​Assignment!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContactRoleAssignment)

  A list of newly created assignments of company contacts to a company location.

* user​Errors

  [\[Business​Customer​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [company​Location​Assign​Roles](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationAssignRoles)

  mutation

  Assigns roles on a company location.

  * company​Location​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The location whose roles are being assigned.

  * roles​To​Assign

    [\[Company​Location​Role​Assign!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CompanyLocationRoleAssign)

    required

    The roles to assign.

  ***

***

### Map

#### Mutations with this payload

* [company​Location​Assign​Roles](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationAssignRoles)

---
<a id="company-location-assign-staff-members-payload"></a>

## Company​Location​Assign​Staff​Members​Payload

payload

Return type for `companyLocationAssignStaffMembers` mutation.

### Fields

* company​Location​Staff​Member​Assignments

  [\[Company​Location​Staff​Member​Assignment!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocationStaffMemberAssignment)

  The list of created staff member assignments.

* user​Errors

  [\[Business​Customer​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [company​Location​Assign​Staff​Members](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationAssignStaffMembers)

  mutation

  Creates one or more mappings between a staff member at a shop and a company location.

  * company​Location​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the company location to assign the staff member to.

  * staff​Member​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The list of IDs of the staff members to assign.

  ***

***

### Map

#### Mutations with this payload

* [company​Location​Assign​Staff​Members](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationAssignStaffMembers)

---
<a id="company-location-assign-tax-exemptions-payload"></a>

## Company​Location​Assign​Tax​Exemptions​Payload

payload

Return type for `companyLocationAssignTaxExemptions` mutation.

### Fields

* company​Location

  [Company​Location](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation)

  The updated company location.

* user​Errors

  [\[Business​Customer​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [company​Location​Assign​Tax​Exemptions](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationAssignTaxExemptions)

  mutation

  Deprecated

  * company​Location​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The location to which the tax exemptions will be assigned.

  * tax​Exemptions

    [\[Tax​Exemption!\]!](https://shopify.dev/docs/api/admin-graphql/latest/enums/TaxExemption)

    required

    The tax exemptions that are being assigned to the location.

  ***

***

### Map

---
<a id="company-location-create-payload"></a>

## Company​Location​Create​Payload

payload

Return type for `companyLocationCreate` mutation.

### Fields

* company​Location

  [Company​Location](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation)

  The created company location.

* user​Errors

  [\[Business​Customer​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [company​Location​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationCreate)

  mutation

  Creates a new location for a [`Company`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company). Company locations are branches or offices where B2B customers can place orders with specific pricing, catalogs, and payment terms.

  Creates a company location. Each location can have its own billing and shipping addresses, tax settings, and [`buyer experience configuration`](https://shopify.dev/docs/api/admin-graphql/latest/objects/BuyerExperienceConfiguration). You can assign [staff members](https://shopify.dev/docs/api/admin-graphql/latest/objects/StaffMember) and [`CompanyContact`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContact) objects to manage the location.

  * company​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the company that the company location belongs to.

  * input

    [Company​Location​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CompanyLocationInput)

    required

    The fields to use to create the company location.

  ***

***

### Map

#### Mutations with this payload

* [company​Location​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationCreate)

---
<a id="company-location-create-tax-registration-payload"></a>

## Company​Location​Create​Tax​Registration​Payload

payload

Return type for `companyLocationCreateTaxRegistration` mutation.

### Fields

* company​Location

  [Company​Location](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation)

  The company location with the created tax registration.

* user​Errors

  [\[Business​Customer​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [company​Location​Create​Tax​Registration](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationCreateTaxRegistration)

  mutation

  Deprecated

  * location​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the company location that the tax registration gets assigned to.

  * tax​Id

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    The unique tax id for the tax registration.

  ***

***

### Map

---
<a id="company-location-delete-payload"></a>

## Company​Location​Delete​Payload

payload

Return type for `companyLocationDelete` mutation.

### Fields

* deleted​Company​Location​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the deleted company location.

* user​Errors

  [\[Business​Customer​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [company​Location​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationDelete)

  mutation

  Deletes a company location.

  * company​Location​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the company location to delete.

  ***

***

### Map

#### Mutations with this payload

* [company​Location​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationDelete)

---
<a id="company-location-remove-staff-members-payload"></a>

## Company​Location​Remove​Staff​Members​Payload

payload

Return type for `companyLocationRemoveStaffMembers` mutation.

### Fields

* deleted​Company​Location​Staff​Member​Assignment​Ids

  [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The list of IDs of the deleted staff member assignment.

* user​Errors

  [\[Business​Customer​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [company​Location​Remove​Staff​Members](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationRemoveStaffMembers)

  mutation

  Deletes one or more existing mappings between a staff member at a shop and a company location.

  * company​Location​Staff​Member​Assignment​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The list of IDs of the company location staff member assignment to delete.

  ***

***

### Map

#### Mutations with this payload

* [company​Location​Remove​Staff​Members](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationRemoveStaffMembers)

---
<a id="company-location-revoke-roles-payload"></a>

## Company​Location​Revoke​Roles​Payload

payload

Return type for `companyLocationRevokeRoles` mutation.

### Fields

* revoked​Role​Assignment​Ids

  [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  A list of role assignment IDs that were removed from the company location.

* user​Errors

  [\[Business​Customer​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [company​Location​Revoke​Roles](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationRevokeRoles)

  mutation

  Revokes roles on a company location.

  * company​Location​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The location whose roles are being revoked.

  * roles​To​Revoke

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The current roles to revoke.

  ***

***

### Map

#### Mutations with this payload

* [company​Location​Revoke​Roles](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationRevokeRoles)

---
<a id="company-location-revoke-tax-exemptions-payload"></a>

## Company​Location​Revoke​Tax​Exemptions​Payload

payload

Return type for `companyLocationRevokeTaxExemptions` mutation.

### Fields

* company​Location

  [Company​Location](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation)

  The updated company location.

* user​Errors

  [\[Business​Customer​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [company​Location​Revoke​Tax​Exemptions](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationRevokeTaxExemptions)

  mutation

  Deprecated

  * company​Location​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The location from which the tax exemptions will be revoked.

  * tax​Exemptions

    [\[Tax​Exemption!\]!](https://shopify.dev/docs/api/admin-graphql/latest/enums/TaxExemption)

    required

    The tax exemptions that are being revoked from the location.

  ***

***

### Map

---
<a id="company-location-revoke-tax-registration-payload"></a>

## Company​Location​Revoke​Tax​Registration​Payload

payload

Return type for `companyLocationRevokeTaxRegistration` mutation.

### Fields

* company​Location

  [Company​Location](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation)

  The updated company location.

* user​Errors

  [\[Business​Customer​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [company​Location​Revoke​Tax​Registration](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationRevokeTaxRegistration)

  mutation

  Deprecated

  * company​Location​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The location whose tax registration is being revoked.

  ***

***

### Map

---
<a id="company-location-tax-settings-update-payload"></a>

## Company​Location​Tax​Settings​Update​Payload

payload

Return type for `companyLocationTaxSettingsUpdate` mutation.

### Fields

* company​Location

  [Company​Location](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation)

  The company location with the updated tax settings.

* user​Errors

  [\[Business​Customer​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [company​Location​Tax​Settings​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationTaxSettingsUpdate)

  mutation

  Sets the tax settings for a company location.

  * company​Location​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the company location that the tax settings get assigned to.

  * tax​Registration​Id

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The unique tax registration ID for the company location.

  * tax​Exempt

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Whether the location is exempt from taxes.

  * exemptions​To​Assign

    [\[Tax​Exemption!\]](https://shopify.dev/docs/api/admin-graphql/latest/enums/TaxExemption)

    The list of tax exemptions to assign to the company location.

  * exemptions​To​Remove

    [\[Tax​Exemption!\]](https://shopify.dev/docs/api/admin-graphql/latest/enums/TaxExemption)

    The list of tax exemptions to remove from the company location.

  ***

***

### Map

#### Mutations with this payload

* [company​Location​Tax​Settings​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationTaxSettingsUpdate)

---
<a id="company-location-update-payload"></a>

## Company​Location​Update​Payload

payload

Return type for `companyLocationUpdate` mutation.

### Fields

* company​Location

  [Company​Location](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation)

  The updated company location.

* user​Errors

  [\[Business​Customer​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [company​Location​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationUpdate)

  mutation

  Updates a company location's information and B2B checkout settings. Company locations are branches or offices where [`CompanyContact`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContact) members place orders on behalf of the company. Contacts must be assigned to a location through `roleAssignments` to place orders.

  The mutation modifies details such as the location's name, contact information, preferred locale, and internal notes. You can also configure the B2B checkout experience through [`BuyerExperienceConfiguration`](https://shopify.dev/docs/api/admin-graphql/latest/objects/BuyerExperienceConfiguration) settings that control whether orders require merchant review, [`PaymentTermsTemplate`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTermsTemplate) settings, shipping address editing permissions, and [`DepositConfiguration`](https://shopify.dev/docs/api/admin-graphql/latest/unions/DepositConfiguration) requirements.

  Learn more about [managing company locations](https://shopify.dev/docs/apps/build/b2b/manage-client-company-locations).

  * company​Location​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the company location to update.

  * input

    [Company​Location​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CompanyLocationUpdateInput)

    required

    The input fields to update in the company location.

  ***

***

### Map

#### Mutations with this payload

* [company​Location​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationUpdate)

---
<a id="company-revoke-main-contact-payload"></a>

## Company​Revoke​Main​Contact​Payload

payload

Return type for `companyRevokeMainContact` mutation.

### Fields

* company

  [Company](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company)

  The company from which the main contact is revoked.

* user​Errors

  [\[Business​Customer​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [company​Revoke​Main​Contact](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyRevokeMainContact)

  mutation

  Revokes the main contact from the company.

  * company​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the company to revoke the main contact from.

  ***

***

### Map

#### Mutations with this payload

* [company​Revoke​Main​Contact](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyRevokeMainContact)

---
<a id="company-update-payload"></a>

## Company​Update​Payload

payload

Return type for `companyUpdate` mutation.

### Fields

* company

  [Company](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company)

  The updated company.

* user​Errors

  [\[Business​Customer​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [company​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyUpdate)

  mutation

  Updates a [`Company`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company) with new information. Companies represent business customers that can have multiple contacts and locations with specific pricing, payment terms, and checkout settings.

  The mutation accepts the company's ID and an input object containing the fields to update. You can modify the company name, add or update internal notes, set an external ID for integration with other systems, or adjust the customer relationship start date.

  Learn more about [building B2B features](https://shopify.dev/docs/apps/build/b2b/start-building).

  * company​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the company to be updated.

  * input

    [Company​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CompanyInput)

    required

    The input fields to update the company.

  ***

***

### Map

#### Mutations with this payload

* [company​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyUpdate)

---
<a id="consent-policy-update-payload"></a>

## Consent​Policy​Update​Payload

payload

Return type for `consentPolicyUpdate` mutation.

### Fields

* updated​Policies

  [\[Consent​Policy!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/ConsentPolicy)

  All updated and created consent policies. The consent policies that haven't been modified as part of the mutation aren't returned.

* user​Errors

  [\[Consent​Policy​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ConsentPolicyError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [consent​Policy​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/consentPolicyUpdate)

  mutation

  Update or create consent policies in bulk.

  * consent​Policies

    [\[Consent​Policy​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ConsentPolicyInput)

    required

    ### Arguments

    The consent policies to update or create. If the country and region matches an existing consent policy, then the consent policy is updated. Otherwise, a new consent policy is created.

  ***

***

### Map

#### Mutations with this payload

* [consent​Policy​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/consentPolicyUpdate)

---
<a id="customer-address-create-payload"></a>

## Customer​Address​Create​Payload

payload

Return type for `customerAddressCreate` mutation.

### Fields

* address

  [Mailing​Address](https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddress)

  The created address.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [customer​Address​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerAddressCreate)

  mutation

  Creates a new [`MailingAddress`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddress) for a [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer). You can optionally set the address as the customer's default address.

  You can only add addresses to existing customers. Each customer can have multiple addresses.

  * customer​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the customer.

  * address

    [Mailing​Address​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MailingAddressInput)

    required

    Specifies the fields to use when creating the address.

  * set​As​Default

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Whether to set the address as the customer's default address.

  ***

***

### Map

#### Mutations with this payload

* [customer​Address​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerAddressCreate)

---
<a id="customer-address-delete-payload"></a>

## Customer​Address​Delete​Payload

payload

Return type for `customerAddressDelete` mutation.

### Fields

* deleted​Address​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the address deleted from the customer.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [customer​Address​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerAddressDelete)

  mutation

  Deletes a customer's address.

  * customer​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the customer whose address is being deleted.

  * address​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the address to be deleted from the customer.

  ***

***

### Map

#### Mutations with this payload

* [customer​Address​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerAddressDelete)

---
<a id="customer-address-update-payload"></a>

## Customer​Address​Update​Payload

payload

Return type for `customerAddressUpdate` mutation.

### Fields

* address

  [Mailing​Address](https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddress)

  The updated address.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [customer​Address​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerAddressUpdate)

  mutation

  Updates a [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)'s [`MailingAddress`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddress). You can modify any field of the address and optionally set it as the customer's default address.

  * customer​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the customer whose address is being updated.

  * address​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the address to update.

  * address

    [Mailing​Address​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MailingAddressInput)

    required

    Specifies the fields to use when updating the address.

  * set​As​Default

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Whether to set the address as the customer's default address.

  ***

***

### Map

#### Mutations with this payload

* [customer​Address​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerAddressUpdate)

---
<a id="customer-add-tax-exemptions-payload"></a>

## Customer​Add​Tax​Exemptions​Payload

payload

Return type for `customerAddTaxExemptions` mutation.

### Fields

* customer

  [Customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)

  The updated customer.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [customer​Add​Tax​Exemptions](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerAddTaxExemptions)

  mutation

  Add tax exemptions for the customer.

  * customer​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the customer to update.

  * tax​Exemptions

    [\[Tax​Exemption!\]!](https://shopify.dev/docs/api/admin-graphql/latest/enums/TaxExemption)

    required

    The list of tax exemptions to add for the customer, in the format of an array or a comma-separated list. Example values: `["CA_BC_RESELLER_EXEMPTION", "CA_STATUS_CARD_EXEMPTION"]`, `"CA_BC_RESELLER_EXEMPTION, CA_STATUS_CARD_EXEMPTION"`.

  ***

***

### Map

#### Mutations with this payload

* [customer​Add​Tax​Exemptions](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerAddTaxExemptions)

---
<a id="customer-cancel-data-erasure-payload"></a>

## Customer​Cancel​Data​Erasure​Payload

payload

Return type for `customerCancelDataErasure` mutation.

### Fields

* customer​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the customer whose pending data erasure has been cancelled.

* user​Errors

  [\[Customer​Cancel​Data​Erasure​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerCancelDataErasureUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [customer​Cancel​Data​Erasure](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerCancelDataErasure)

  mutation

  Cancels a pending erasure of a customer's data. Read more [here](https://help.shopify.com/manual/privacy-and-security/privacy/processing-customer-data-requests#cancel-customer-data-erasure).

  To request an erasure of a customer's data use the [customerRequestDataErasure mutation](https://shopify.dev/api/admin-graphql/unstable/mutations/customerRequestDataErasure).

  * customer​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the customer for whom to cancel a pending data erasure.

  ***

***

### Map

#### Mutations with this payload

* [customer​Cancel​Data​Erasure](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerCancelDataErasure)

---
<a id="customer-create-payload"></a>

## Customer​Create​Payload

payload

Return type for `customerCreate` mutation.

### Fields

* customer

  [Customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)

  The created customer.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [customer​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerCreate)

  mutation

  Creates a new [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) in the store.

  Accepts customer details including contact information, marketing consent preferences, and tax exemptions through the [`CustomerInput`](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerInput) input object. You can also associate [`metafields`](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldInput) and tags to organize and extend customer data.

  Apps using protected customer data must meet Shopify's [protected customer data requirements](https://shopify.dev/docs/apps/launch/protected-customer-data#requirements).

  * input

    [Customer​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerInput)

    required

    ### Arguments

    The input fields to create a customer.

  ***

***

### Map

#### Mutations with this payload

* [customer​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerCreate)

---
<a id="customer-delete-payload"></a>

## Customer​Delete​Payload

payload

Return type for `customerDelete` mutation.

### Fields

* deleted​Customer​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the deleted customer.

* shop

  [Shop!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop)

  non-null

  The shop of the deleted customer.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [customer​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerDelete)

  mutation

  Deletes a [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) from the store. You can only delete customers who haven't placed any [orders](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order).

  Apps using protected customer data must meet Shopify's [protected customer data requirements](https://shopify.dev/docs/apps/launch/protected-customer-data#requirements).

  * input

    [Customer​Delete​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerDeleteInput)

    required

    ### Arguments

    Specifies the customer to delete.

  ***

***

### Map

#### Mutations with this payload

* [customer​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerDelete)

---
<a id="customer-email-marketing-consent-update-payload"></a>

## Customer​Email​Marketing​Consent​Update​Payload

payload

Return type for `customerEmailMarketingConsentUpdate` mutation.

### Fields

* customer

  [Customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)

  The updated customer.

* user​Errors

  [\[Customer​Email​Marketing​Consent​Update​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerEmailMarketingConsentUpdateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [customer​Email​Marketing​Consent​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerEmailMarketingConsentUpdate)

  mutation

  Updates a [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)'s email marketing consent information. The customer must have an email address to update their consent. Records the [marketing state](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerEmailAddress#field-marketingState) (such as subscribed, pending, unsubscribed), [opt-in level](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerEmailAddress#field-marketingOptInLevel), and when and where the customer gave or withdrew consent.

  Only three values are accepted as input: SUBSCRIBED, UNSUBSCRIBED, and PENDING. NOT\_SUBSCRIBED, REDACTED, and INVALID cannot be set via this mutation; they are read-only or internally-set states.

  * input

    [Customer​Email​Marketing​Consent​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerEmailMarketingConsentUpdateInput)

    required

    ### Arguments

    Specifies the input fields to update a customer's email marketing consent information.

  ***

***

### Map

#### Mutations with this payload

* [customer​Email​Marketing​Consent​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerEmailMarketingConsentUpdate)

---
<a id="customer-generate-account-activation-url-payload"></a>

## Customer​Generate​Account​Activation​Url​Payload

payload

Return type for `customerGenerateAccountActivationUrl` mutation.

### Fields

* account​Activation​Url

  [URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

  The generated account activation URL.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [customer​Generate​Account​Activation​Url](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerGenerateAccountActivationUrl)

  mutation

  Generates a one-time activation URL for a [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) whose legacy customer account isn't yet enabled. Use this after importing customers or creating accounts that need activation.

  The generated URL expires after 30 days and becomes invalid if you generate a new one.

  ***

  **Note:** The generated URL only works when legacy customer accounts are enabled on the shop. It only works for customers with disabled or invited \<a href="https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-Customer.fields.state">\<code>account states\</code>\</a>. Attempting to generate a URL for an already-enabled customer returns an error.

  ***

  * customer​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the customer that the URL is generated for.

  ***

***

### Map

#### Mutations with this payload

* [customer​Generate​Account​Activation​Url](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerGenerateAccountActivationUrl)

---
<a id="customer-merge-payload"></a>

## Customer​Merge​Payload

payload

Return type for `customerMerge` mutation.

### Fields

* job

  [Job](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job)

  The asynchronous job for merging the customers.

* resulting​Customer​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the customer resulting from the merge.

* user​Errors

  [\[Customer​Merge​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergeUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [customer​Merge](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerMerge)

  mutation

  Merges two customers.

  * customer​One​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the first customer that will be merged.

  * customer​Two​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the second customer that will be merged.

  * override​Fields

    [Customer​Merge​Override​Fields](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerMergeOverrideFields)

    The fields to override the default customer merge rules.

  ***

***

### Map

#### Mutations with this payload

* [customer​Merge](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerMerge)

---
<a id="customer-payment-method-credit-card-create-payload"></a>

## Customer​Payment​Method​Credit​Card​Create​Payload

payload

Return type for `customerPaymentMethodCreditCardCreate` mutation.

### Fields

* customer​Payment​Method

  [Customer​Payment​Method](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentMethod)

  The customer payment method.

* processing

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  If the card verification result is processing. When this is true, customer\_payment\_method will be null.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [customer​Payment​Method​Credit​Card​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerPaymentMethodCreditCardCreate)

  mutation

  Creates a credit card payment method for a customer using a session id. These values are only obtained through card imports happening from a PCI compliant environment. Please use customerPaymentMethodRemoteCreate if you are not managing credit cards directly.

  * customer​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the customer.

  * billing​Address

    [Mailing​Address​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MailingAddressInput)

    required

    The billing address.

  * session​Id

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    The Cardserver session ID. Obtained by storing card data with Shopify's Cardsink. Exchanging raw card data for a session ID must be done in a PCI complaint environment.

  ***

***

### Map

#### Mutations with this payload

* [customer​Payment​Method​Credit​Card​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerPaymentMethodCreditCardCreate)

---
<a id="customer-payment-method-credit-card-update-payload"></a>

## Customer​Payment​Method​Credit​Card​Update​Payload

payload

Return type for `customerPaymentMethodCreditCardUpdate` mutation.

### Fields

* customer​Payment​Method

  [Customer​Payment​Method](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentMethod)

  The customer payment method.

* processing

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  If the card verification result is processing. When this is true, customer\_payment\_method will be null.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [customer​Payment​Method​Credit​Card​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerPaymentMethodCreditCardUpdate)

  mutation

  Updates an existing vaulted credit card payment method for a customer, including billing address and card details. Requires a valid cardserver session from a PCI-compliant environment. Use this when a customer's card details have changed (e.g., new expiration date or replacement card) and ongoing subscriptions or saved payment methods need to be updated.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the customer payment method.

  * billing​Address

    [Mailing​Address​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MailingAddressInput)

    required

    The billing address.

  * session​Id

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    The Cardserver session ID.

  ***

***

### Map

#### Mutations with this payload

* [customer​Payment​Method​Credit​Card​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerPaymentMethodCreditCardUpdate)

---
<a id="customer-payment-method-get-update-url-payload"></a>

## Customer​Payment​Method​Get​Update​Url​Payload

payload

Return type for `customerPaymentMethodGetUpdateUrl` mutation.

### Fields

* update​Payment​Method​Url

  [URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

  The URL to redirect the customer to update the payment method.

* user​Errors

  [\[Customer​Payment​Method​Get​Update​Url​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentMethodGetUpdateUrlUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [customer​Payment​Method​Get​Update​Url](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerPaymentMethodGetUpdateUrl)

  mutation

  Returns a URL that allows the customer to update a specific payment method.

  Currently, `customerPaymentMethodGetUpdateUrl` only supports Shop Pay.

  * customer​Payment​Method​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The payment method to be updated.

  ***

***

### Map

#### Mutations with this payload

* [customer​Payment​Method​Get​Update​Url](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerPaymentMethodGetUpdateUrl)

---
<a id="customer-payment-method-paypal-billing-agreement-create-payload"></a>

## Customer​Payment​Method​Paypal​Billing​Agreement​Create​Payload

payload

Return type for `customerPaymentMethodPaypalBillingAgreementCreate` mutation.

### Fields

* customer​Payment​Method

  [Customer​Payment​Method](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentMethod)

  The customer payment method.

* user​Errors

  [\[Customer​Payment​Method​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentMethodUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [customer​Payment​Method​Paypal​Billing​Agreement​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerPaymentMethodPaypalBillingAgreementCreate)

  mutation

  Creates a vaulted PayPal billing agreement for a customer, enabling recurring charges through PayPal. The billing agreement ID (starting with 'B-') must be obtained from PayPal. Once created, this payment method can be used for subscription billing or future order payments without requiring the customer to re-authenticate with PayPal.

  * customer​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the customer.

  * billing​Address

    [Mailing​Address​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MailingAddressInput)

    The billing address.

  * billing​Agreement​Id

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    The billing agreement ID from PayPal that starts with 'B-' (for example, `B-1234XXXXX`).

  * inactive

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Whether the PayPal billing agreement is inactive.

  ***

***

### Map

#### Mutations with this payload

* [customer​Payment​Method​Paypal​Billing​Agreement​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerPaymentMethodPaypalBillingAgreementCreate)

---
<a id="customer-payment-method-paypal-billing-agreement-update-payload"></a>

## Customer​Payment​Method​Paypal​Billing​Agreement​Update​Payload

payload

Return type for `customerPaymentMethodPaypalBillingAgreementUpdate` mutation.

### Fields

* customer​Payment​Method

  [Customer​Payment​Method](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentMethod)

  The customer payment method.

* user​Errors

  [\[Customer​Payment​Method​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentMethodUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [customer​Payment​Method​Paypal​Billing​Agreement​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerPaymentMethodPaypalBillingAgreementUpdate)

  mutation

  Updates the billing address associated with a customer's vaulted PayPal billing agreement. Use this when a customer's billing information has changed and their PayPal payment method record in Shopify needs to be updated accordingly.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the customer payment method.

  * billing​Address

    [Mailing​Address​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MailingAddressInput)

    required

    The billing address.

  ***

***

### Map

#### Mutations with this payload

* [customer​Payment​Method​Paypal​Billing​Agreement​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerPaymentMethodPaypalBillingAgreementUpdate)

---
<a id="customer-payment-method-remote-create-payload"></a>

## Customer​Payment​Method​Remote​Create​Payload

payload

Return type for `customerPaymentMethodRemoteCreate` mutation.

### Fields

* customer​Payment​Method

  [Customer​Payment​Method](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentMethod)

  The customer payment method. Note that the returned payment method may initially be in an incomplete state. Developers should poll this payment method using the customerPaymentMethod query until all required payment details have been processed.

* user​Errors

  [\[Customer​Payment​Method​Remote​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentMethodRemoteUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [customer​Payment​Method​Remote​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerPaymentMethodRemoteCreate)

  mutation

  Creates a customer payment method using identifiers from remote payment gateways like Stripe, Authorize.Net, or Braintree. Imports existing payment methods from external gateways and associates them with [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) objects in Shopify.

  The operation processes payment methods asynchronously. The returned [`CustomerPaymentMethod`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentMethod) initially has incomplete details while Shopify validates and processes the remote gateway information. Use the [`customerPaymentMethod`](https://shopify.dev/docs/api/admin-graphql/latest/queries/customerPaymentMethod) query to retrieve the payment method status until all details are available or the payment method is revoked.

  Learn more about [migrating customer payment methods from remote gateways](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/migrate-to-subscriptions-api/migrate-customer-information#step-2-import-payment-methods-for-customers).

  * customer​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the customer.

  * remote​Reference

    [Customer​Payment​Method​Remote​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerPaymentMethodRemoteInput)

    required

    Remote gateway payment method details.

  ***

***

### Map

#### Mutations with this payload

* [customer​Payment​Method​Remote​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerPaymentMethodRemoteCreate)

---
<a id="customer-payment-method-revoke-payload"></a>

## Customer​Payment​Method​Revoke​Payload

payload

Return type for `customerPaymentMethodRevoke` mutation.

### Fields

* revoked​Customer​Payment​Method​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the revoked customer payment method.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [customer​Payment​Method​Revoke](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerPaymentMethodRevoke)

  mutation

  Revokes a customer's vaulted payment method, preventing it from being used for future charges such as subscriptions, draft orders, or other payments. Revocation will fail if the payment method has active subscription contracts. Use this when a customer requests removal of their stored payment information or when a payment method is no longer valid.

  * customer​Payment​Method​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the customer payment method to be revoked.

  ***

***

### Map

#### Mutations with this payload

* [customer​Payment​Method​Revoke](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerPaymentMethodRevoke)

---
<a id="customer-payment-method-send-update-email-payload"></a>

## Customer​Payment​Method​Send​Update​Email​Payload

payload

Return type for `customerPaymentMethodSendUpdateEmail` mutation.

### Fields

* customer

  [Customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)

  The customer to whom an update payment method email was sent.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [customer​Payment​Method​Send​Update​Email](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerPaymentMethodSendUpdateEmail)

  mutation

  Sends an email to a customer containing a secure link to update a specific vaulted payment method. This is commonly used when a customer's credit card is expiring or has been declined, and they need to provide updated payment details for ongoing subscriptions. The email can be customized with sender and BCC fields.

  * customer​Payment​Method​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The payment method to be updated.

  * email

    [Email​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/EmailInput)

    Specifies the payment method update email fields. Only the 'from' and 'bcc' fields are accepted for input.

  ***

***

### Map

#### Mutations with this payload

* [customer​Payment​Method​Send​Update​Email](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerPaymentMethodSendUpdateEmail)

---
<a id="customer-remove-tax-exemptions-payload"></a>

## Customer​Remove​Tax​Exemptions​Payload

payload

Return type for `customerRemoveTaxExemptions` mutation.

### Fields

* customer

  [Customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)

  The updated customer.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [customer​Remove​Tax​Exemptions](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerRemoveTaxExemptions)

  mutation

  Remove tax exemptions from a customer.

  * customer​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the customer to update.

  * tax​Exemptions

    [\[Tax​Exemption!\]!](https://shopify.dev/docs/api/admin-graphql/latest/enums/TaxExemption)

    required

    The list of tax exemptions to remove for the customer, in the format of an array or a comma-separated list. Example values: `["CA_BC_RESELLER_EXEMPTION", "A_STATUS_CARD_EXEMPTION"]`, `"CA_BC_RESELLER_EXEMPTION, CA_STATUS_CARD_EXEMPTION"`.

  ***

***

### Map

#### Mutations with this payload

* [customer​Remove​Tax​Exemptions](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerRemoveTaxExemptions)

---
<a id="customer-replace-tax-exemptions-payload"></a>

## Customer​Replace​Tax​Exemptions​Payload

payload

Return type for `customerReplaceTaxExemptions` mutation.

### Fields

* customer

  [Customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)

  The updated customer.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [customer​Replace​Tax​Exemptions](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerReplaceTaxExemptions)

  mutation

  Replace tax exemptions for a customer.

  * customer​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the customer to update.

  * tax​Exemptions

    [\[Tax​Exemption!\]!](https://shopify.dev/docs/api/admin-graphql/latest/enums/TaxExemption)

    required

    The list of tax exemptions that will replace the current exemptions for a customer. Can be an array or a comma-separated list. Example values: `["CA_BC_RESELLER_EXEMPTION", "A_STATUS_CARD_EXEMPTION"]`, `"CA_BC_RESELLER_EXEMPTION, CA_STATUS_CARD_EXEMPTION"`.

  ***

***

### Map

#### Mutations with this payload

* [customer​Replace​Tax​Exemptions](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerReplaceTaxExemptions)

---
<a id="customer-request-data-erasure-payload"></a>

## Customer​Request​Data​Erasure​Payload

payload

Return type for `customerRequestDataErasure` mutation.

### Fields

* customer​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the customer that will be erased.

* user​Errors

  [\[Customer​Request​Data​Erasure​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerRequestDataErasureUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [customer​Request​Data​Erasure](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerRequestDataErasure)

  mutation

  Enqueues a request to erase customer's data. Read more [here](https://help.shopify.com/manual/privacy-and-security/privacy/processing-customer-data-requests#erase-customer-personal-data).

  To cancel the data erasure request use the [customerCancelDataErasure mutation](https://shopify.dev/api/admin-graphql/unstable/mutations/customerCancelDataErasure).

  * customer​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the customer to erase.

  ***

***

### Map

#### Mutations with this payload

* [customer​Request​Data​Erasure](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerRequestDataErasure)

---
<a id="customer-segment-members-query-create-payload"></a>

## Customer​Segment​Members​Query​Create​Payload

payload

Return type for `customerSegmentMembersQueryCreate` mutation.

### Fields

* customer​Segment​Members​Query

  [Customer​Segment​Members​Query](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerSegmentMembersQuery)

  The newly created customer segment members query.

* user​Errors

  [\[Customer​Segment​Members​Query​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerSegmentMembersQueryUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [customer​Segment​Members​Query​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerSegmentMembersQueryCreate)

  mutation

  Creates a customer segment members query.

  * input

    [Customer​Segment​Members​Query​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerSegmentMembersQueryInput)

    required

    ### Arguments

    The input fields to create a customer segment members query.

  ***

***

### Map

#### Mutations with this payload

* [customer​Segment​Members​Query​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerSegmentMembersQueryCreate)

---
<a id="customer-send-account-invite-email-payload"></a>

## Customer​Send​Account​Invite​Email​Payload

payload

Return type for `customerSendAccountInviteEmail` mutation.

### Fields

* customer

  [Customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)

  The customer to whom an account invite email was sent.

* user​Errors

  [\[Customer​Send​Account​Invite​Email​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerSendAccountInviteEmailUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [customer​Send​Account​Invite​Email](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerSendAccountInviteEmail)

  mutation

  Sends an email invitation for a customer to create a legacy customer account. The invitation lets customers set up their password and activate their account in the online store.

  You can optionally customize the email content including the subject, sender, recipients, and message body. If you don't provide email customization, the store uses its default account invitation template.

  ***

  **Note:** The invite only works when legacy customer accounts are enabled on the shop.

  ***

  * customer​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the customer to whom an account invite email is to be sent.

  * email

    [Email​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/EmailInput)

    Specifies the account invite email fields.

  ***

***

### Map

#### Mutations with this payload

* [customer​Send​Account​Invite​Email](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerSendAccountInviteEmail)

---
<a id="customer-set-payload"></a>

## Customer​Set​Payload

payload

Return type for `customerSet` mutation.

### Fields

* customer

  [Customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)

  The created or updated customer.

* user​Errors

  [\[Customer​Set​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerSetUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [customer​Set](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerSet)

  mutation

  Creates or updates a customer in a single mutation.

  Use this mutation when syncing information from an external data source into Shopify.

  This mutation can be used to create a new customer, update an existing customer by id, or upsert a customer by a unique key (email or phone).

  To create a new customer omit the `identifier` argument. To update an existing customer, include the `identifier` with the id of the customer to update.

  To perform an 'upsert' by unique key (email or phone) use the `identifier` argument to upsert a customer by a unique key (email or phone). If a customer with the specified unique key exists, it will be updated. If not, a new customer will be created with that unique key.

  As of API version 2022-10, apps using protected customer data must meet the protected customer data [requirements](https://shopify.dev/apps/store/data-protection/protected-customer-data)

  Any list field (e.g. [addresses](https://shopify.dev/api/admin-graphql/unstable/input-objects/MailingAddressInput), will be updated so that all included entries are either created or updated, and all existing entries not included will be deleted.

  All other fields will be updated to the value passed. Omitted fields will not be updated.

  * input

    [Customer​Set​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerSetInput)

    required

    ### Arguments

    The properties of the customer.

  * identifier

    [Customer​Set​Identifiers](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerSetIdentifiers)

    Specifies the identifier that will be used to lookup the resource.

  ***

***

### Map

#### Mutations with this payload

* [customer​Set](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerSet)

---
<a id="customer-sms-marketing-consent-update-payload"></a>

## Customer​Sms​Marketing​Consent​Update​Payload

payload

Return type for `customerSmsMarketingConsentUpdate` mutation.

### Fields

* customer

  [Customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)

  The updated customer.

* user​Errors

  [\[Customer​Sms​Marketing​Consent​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerSmsMarketingConsentError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [customer​Sms​Marketing​Consent​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerSmsMarketingConsentUpdate)

  mutation

  Updates a [customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)'s SMS marketing consent information. The customer must have a phone number on their account to receive SMS marketing.

  You can set whether the customer subscribes or unsubscribes to SMS marketing and specify the [opt-in level](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerSmsMarketingConsentUpdate#arguments-input.fields.smsMarketingConsent.marketingOptInLevel). Optionally include when the consent was collected and which [location](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerSmsMarketingConsentUpdate#arguments-input.fields.smsMarketingConsent.sourceLocationId) collected it.

  * input

    [Customer​Sms​Marketing​Consent​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerSmsMarketingConsentUpdateInput)

    required

    ### Arguments

    Specifies the input fields to update a customer's SMS marketing consent information.

  ***

***

### Map

#### Mutations with this payload

* [customer​Sms​Marketing​Consent​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerSmsMarketingConsentUpdate)

---
<a id="customer-update-default-address-payload"></a>

## Customer​Update​Default​Address​Payload

payload

Return type for `customerUpdateDefaultAddress` mutation.

### Fields

* customer

  [Customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)

  The customer whose address was updated.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [customer​Update​Default​Address](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerUpdateDefaultAddress)

  mutation

  Updates a customer's default address.

  * customer​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the customer whose default address is being updated.

  * address​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the customer's new default address.

  ***

***

### Map

#### Mutations with this payload

* [customer​Update​Default​Address](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerUpdateDefaultAddress)

---
<a id="customer-update-payload"></a>

## Customer​Update​Payload

payload

Return type for `customerUpdate` mutation.

### Fields

* customer

  [Customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)

  The updated customer.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [customer​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerUpdate)

  mutation

  Updates a [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)'s attributes including personal information and [`tax exemptions`](https://shopify.dev/docs/api/admin-graphql/latest/enums/TaxExemption).

  Apps using protected customer data must meet Shopify's [protected customer data requirements](https://shopify.dev/docs/apps/launch/protected-customer-data#requirements).

  * input

    [Customer​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerInput)

    required

    ### Arguments

    Provides updated fields for the customer. To set marketing consent, use the `customerEmailMarketingConsentUpdate` or `customerSmsMarketingConsentUpdate` mutations instead.

  ***

***

### Map

#### Mutations with this payload

* [customer​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerUpdate)

---
<a id="data-sale-opt-out-payload"></a>

## Data​Sale​Opt​Out​Payload

payload

Return type for `dataSaleOptOut` mutation.

### Fields

* customer​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the customer whose email address has been opted out of data sale.

* user​Errors

  [\[Data​Sale​Opt​Out​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DataSaleOptOutUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [data​Sale​Opt​Out](https://shopify.dev/docs/api/admin-graphql/latest/mutations/dataSaleOptOut)

  mutation

  Opt out a customer from data sale.

  * email

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    The email address of the customer to opt out of data sale.

  ***

***

### Map

#### Mutations with this payload

* [data​Sale​Opt​Out](https://shopify.dev/docs/api/admin-graphql/latest/mutations/dataSaleOptOut)

---
<a id="delegate-access-token-create-payload"></a>

## Delegate​Access​Token​Create​Payload

payload

Return type for `delegateAccessTokenCreate` mutation.

### Fields

* delegate​Access​Token

  [Delegate​Access​Token](https://shopify.dev/docs/api/admin-graphql/latest/objects/DelegateAccessToken)

  The delegate access token.

* shop

  [Shop!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop)

  non-null

  The user's shop.

* user​Errors

  [\[Delegate​Access​Token​Create​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DelegateAccessTokenCreateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [delegate​Access​Token​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/delegateAccessTokenCreate)

  mutation

  Creates a [`DelegateAccessToken`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DelegateAccessToken) with a subset of the parent token's permissions.

  Delegate access tokens enable secure permission delegation to subsystems or services that need limited access to shop resources. Each token inherits only the scopes you specify, ensuring subsystems operate with minimal required permissions rather than full app access.

  Learn more about [delegating access tokens to subsystems](https://shopify.dev/docs/apps/build/authentication-authorization/access-tokens/use-delegate-tokens).

  * input

    [Delegate​Access​Token​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DelegateAccessTokenInput)

    required

    ### Arguments

    The input fields for creating a delegate access token.

  ***

***

### Map

#### Mutations with this payload

* [delegate​Access​Token​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/delegateAccessTokenCreate)

---
<a id="delegate-access-token-destroy-payload"></a>

## Delegate​Access​Token​Destroy​Payload

payload

Return type for `delegateAccessTokenDestroy` mutation.

### Fields

* shop

  [Shop!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop)

  non-null

  The user's shop.

* status

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  The status of the delegate access token destroy operation. Returns true if successful.

* user​Errors

  [\[Delegate​Access​Token​Destroy​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DelegateAccessTokenDestroyUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [delegate​Access​Token​Destroy](https://shopify.dev/docs/api/admin-graphql/latest/mutations/delegateAccessTokenDestroy)

  mutation

  Destroys a delegate access token.

  * access​Token

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    Provides the delegate access token to destroy.

  ***

***

### Map

#### Mutations with this payload

* [delegate​Access​Token​Destroy](https://shopify.dev/docs/api/admin-graphql/latest/mutations/delegateAccessTokenDestroy)

---
<a id="delivery-customization-activation-payload"></a>

## Delivery​Customization​Activation​Payload

payload

Return type for `deliveryCustomizationActivation` mutation.

### Fields

* ids

  [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The IDs of the updated delivery customizations.

* user​Errors

  [\[Delivery​Customization​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCustomizationError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [delivery​Customization​Activation](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryCustomizationActivation)

  mutation

  Activates and deactivates delivery customizations.

  * ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The global IDs of the delivery customizations.

  * enabled

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    required

    The enabled status of the delivery customizations.

  ***

***

### Map

#### Mutations with this payload

* [delivery​Customization​Activation](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryCustomizationActivation)

---
<a id="delivery-customization-create-payload"></a>

## Delivery​Customization​Create​Payload

payload

Return type for `deliveryCustomizationCreate` mutation.

### Fields

* delivery​Customization

  [Delivery​Customization](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCustomization)

  Returns the created delivery customization.

* user​Errors

  [\[Delivery​Customization​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCustomizationError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [delivery​Customization​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryCustomizationCreate)

  mutation

  Creates a delivery customization.

  * delivery​Customization

    [Delivery​Customization​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryCustomizationInput)

    required

    ### Arguments

    The input data used to create the delivery customization.

  ***

***

### Map

#### Mutations with this payload

* [delivery​Customization​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryCustomizationCreate)

---
<a id="delivery-customization-delete-payload"></a>

## Delivery​Customization​Delete​Payload

payload

Return type for `deliveryCustomizationDelete` mutation.

### Fields

* deleted​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  Returns the deleted delivery customization ID.

* user​Errors

  [\[Delivery​Customization​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCustomizationError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [delivery​Customization​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryCustomizationDelete)

  mutation

  Creates a delivery customization.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The global ID of the delivery customization.

  ***

***

### Map

#### Mutations with this payload

* [delivery​Customization​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryCustomizationDelete)

---
<a id="delivery-customization-update-payload"></a>

## Delivery​Customization​Update​Payload

payload

Return type for `deliveryCustomizationUpdate` mutation.

### Fields

* delivery​Customization

  [Delivery​Customization](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCustomization)

  Returns the updated delivery customization.

* user​Errors

  [\[Delivery​Customization​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCustomizationError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [delivery​Customization​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryCustomizationUpdate)

  mutation

  Updates a delivery customization.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The global ID of the delivery customization.

  * delivery​Customization

    [Delivery​Customization​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryCustomizationInput)

    required

    The input data used to update the delivery customization.

  ***

***

### Map

#### Mutations with this payload

* [delivery​Customization​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryCustomizationUpdate)

---
<a id="delivery-profile-create-payload"></a>

## Delivery​Profile​Create​Payload

payload

Return type for `deliveryProfileCreate` mutation.

### Fields

* profile

  [Delivery​Profile](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfile)

  The delivery profile that was created.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [delivery​Profile​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryProfileCreate)

  mutation

  Creates a [`DeliveryProfile`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfile) that defines shipping rates for specific products and locations.

  A delivery profile groups products with their shipping zones and rates. You can associate profiles with [`SellingPlanGroup`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroup) objects to customize shipping for subscriptions and pre-orders. Each profile contains [`DeliveryProfileLocationGroup`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfileLocationGroup) objects that specify which [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location) objects ship to which [`DeliveryZone`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryZone) objects with specific [`DeliveryMethodDefinition`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryMethodDefinition) objects and rates.

  Learn more about [building delivery profiles](https://shopify.dev/docs/apps/build/purchase-options/deferred/delivery-and-deferment/build-delivery-profiles).

  * profile

    [Delivery​Profile​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryProfileInput)

    required

    ### Arguments

    Specifies the input fields for a delivery profile.

  ***

***

### Map

#### Mutations with this payload

* [delivery​Profile​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryProfileCreate)

---
<a id="delivery-profile-remove-payload"></a>

## Delivery​Profile​Remove​Payload

payload

Return type for `deliveryProfileRemove` mutation.

### Fields

* job

  [Job](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job)

  The delivery profile deletion job triggered by the mutation.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [delivery​Profile​Remove](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryProfileRemove)

  mutation

  Enqueue the removal of a delivery profile.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the delivery profile to remove.

  ***

***

### Map

#### Mutations with this payload

* [delivery​Profile​Remove](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryProfileRemove)

---
<a id="delivery-profile-update-payload"></a>

## Delivery​Profile​Update​Payload

payload

Return type for `deliveryProfileUpdate` mutation.

### Fields

* profile

  [Delivery​Profile](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfile)

  The delivery profile that was updated.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [delivery​Profile​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryProfileUpdate)

  mutation

  Updates a [`DeliveryProfile`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfile)'s configuration, including its shipping zones, rates, and associated products.

  Modify location groups to control which fulfillment [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location) objects serve specific geographic areas. Add or remove shipping zones with custom countries and provinces. Create or update shipping methods with rate definitions and delivery conditions. Associate or dissociate [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) objects and [`SellingPlanGroup`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroup) objects to determine which products use this profile's shipping rules.

  The mutation supports partial updates through dedicated input fields for creating, updating, and deleting specific components without affecting the entire profile structure.

  Learn more about [building delivery profiles](https://shopify.dev/docs/apps/build/purchase-options/deferred/delivery-and-deferment/build-delivery-profiles).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the delivery profile to update.

  * profile

    [Delivery​Profile​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryProfileInput)

    required

    Specifies the input fields for a delivery profile.

  ***

***

### Map

#### Mutations with this payload

* [delivery​Profile​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryProfileUpdate)

---
<a id="delivery-promise-participants-update-payload"></a>

## Delivery​Promise​Participants​Update​Payload

payload

Return type for `deliveryPromiseParticipantsUpdate` mutation.

### Fields

* promise​Participants

  [\[Delivery​Promise​Participant!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryPromiseParticipant)

  The promise participants that were added.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [delivery​Promise​Participants​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryPromiseParticipantsUpdate)

  mutation

  Updates the delivery promise participants by adding or removing owners based on a branded promise handle.

  * branded​Promise​Handle

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    The branded promise handle to update the delivery promise participants for.

  * owners​To​Add

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    Default:\[]

    The owners to add to the delivery promise participants.

  * owners​To​Remove

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    Default:\[]

    The owners to remove from the delivery promise participants.

  ***

***

### Map

#### Mutations with this payload

* [delivery​Promise​Participants​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryPromiseParticipantsUpdate)

---
<a id="delivery-promise-provider-upsert-payload"></a>

## Delivery​Promise​Provider​Upsert​Payload

payload

Return type for `deliveryPromiseProviderUpsert` mutation.

### Fields

* delivery​Promise​Provider

  [Delivery​Promise​Provider](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryPromiseProvider)

  The created or updated delivery promise provider.

* user​Errors

  [\[Delivery​Promise​Provider​Upsert​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryPromiseProviderUpsertUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [delivery​Promise​Provider​Upsert](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryPromiseProviderUpsert)

  mutation

  Creates or updates a delivery promise provider. Currently restricted to select approved delivery promise partners.

  * active

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    ### Arguments

    Whether the delivery promise provider is active. Defaults to `true` when creating a provider.

  * fulfillment​Delay

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The number of seconds to add to the current time as a buffer when looking up delivery promises. Represents how long the shop requires before releasing an order to the fulfillment provider.

  * time​Zone

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The time zone to be used for interpreting day of week and cutoff times in delivery schedules when looking up delivery promises. Defaults to `UTC` when creating a provider.

  * location​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the location that will be associated with the delivery promise provider.

  ***

***

### Map

#### Mutations with this payload

* [delivery​Promise​Provider​Upsert](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryPromiseProviderUpsert)

---
<a id="delivery-setting-update-payload"></a>

## Delivery​Setting​Update​Payload

payload

Return type for `deliverySettingUpdate` mutation.

### Fields

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [delivery​Setting​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliverySettingUpdate)

  mutation

  Set the delivery settings for a shop.

***

### Map

#### Mutations with this payload

* [delivery​Setting​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliverySettingUpdate)

---
<a id="delivery-shipping-origin-assign-payload"></a>

## Delivery​Shipping​Origin​Assign​Payload

payload

Return type for `deliveryShippingOriginAssign` mutation.

### Fields

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [delivery​Shipping​Origin​Assign](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryShippingOriginAssign)

  mutation

  Deprecated

  * location​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the location to assign as the shipping origin.

  ***

***

### Map

---
<a id="discount-automatic-activate-payload"></a>

## Discount​Automatic​Activate​Payload

payload

Return type for `discountAutomaticActivate` mutation.

### Fields

* automatic​Discount​Node

  [Discount​Automatic​Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticNode)

  The activated automatic discount.

* user​Errors

  [\[Discount​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [discount​Automatic​Activate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticActivate)

  mutation

  Activates an automatic discount.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the automatic discount to activate.

  ***

***

### Map

#### Mutations with this payload

* [discount​Automatic​Activate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticActivate)

---
<a id="discount-automatic-app-create-payload"></a>

## Discount​Automatic​App​Create​Payload

payload

Return type for `discountAutomaticAppCreate` mutation.

### Fields

* automatic​App​Discount

  [Discount​Automatic​App](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticApp)

  The automatic discount that the app manages.

* user​Errors

  [\[Discount​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [discount​Automatic​App​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticAppCreate)

  mutation

  Creates an automatic discount that's managed by an app. Use this mutation with [Shopify Functions](https://shopify.dev/docs/apps/build/functions) when you need advanced, custom, or dynamic discount capabilities that aren't supported by [Shopify's native discount types](https://help.shopify.com/manual/discounts/discount-types).

  For example, use this mutation to create an automatic discount using an app's "Volume" discount type that applies a percentage off when customers purchase more than the minimum quantity of a product. For an example implementation, refer to [our tutorial](https://shopify.dev/docs/apps/build/discounts/build-discount-function).

  ***

  **Note:** To create code discounts with custom logic, use the \<a href="https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeAppCreate">\<code>\<span class="PreventFireFoxApplyingGapToWBR">discount\<wbr/>Code\<wbr/>App\<wbr/>Create\</span>\</code>\</a> mutation.

  ***

  * automatic​App​Discount

    [Discount​Automatic​App​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticAppInput)

    required

    ### Arguments

    The input data used to create the automatic discount.

  ***

***

### Map

#### Mutations with this payload

* [discount​Automatic​App​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticAppCreate)

---
<a id="discount-automatic-app-update-payload"></a>

## Discount​Automatic​App​Update​Payload

payload

Return type for `discountAutomaticAppUpdate` mutation.

### Fields

* automatic​App​Discount

  [Discount​Automatic​App](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticApp)

  The updated automatic discount that the app provides.

* user​Errors

  [\[Discount​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [discount​Automatic​App​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticAppUpdate)

  mutation

  Updates an existing automatic discount that's managed by an app using [Shopify Functions](https://shopify.dev/docs/apps/build/functions). Use this mutation when you need advanced, custom, or dynamic discount capabilities that aren't supported by [Shopify's native discount types](https://help.shopify.com/manual/discounts/discount-types).

  For example, use this mutation to update a new "Volume" discount type that applies a percentage off when customers purchase more than the minimum quantity of a product. For an example implementation, refer to [our tutorial](https://shopify.dev/docs/apps/build/discounts/build-discount-function).

  ***

  **Note:** To update code discounts with custom logic, use the \<a href="https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeAppUpdate">\<code>\<span class="PreventFireFoxApplyingGapToWBR">discount\<wbr/>Code\<wbr/>App\<wbr/>Update\</span>\</code>\</a> mutation instead.

  ***

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the automatic discount to update.

  * automatic​App​Discount

    [Discount​Automatic​App​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticAppInput)

    required

    The input fields required to update the automatic discount.

  ***

***

### Map

#### Mutations with this payload

* [discount​Automatic​App​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticAppUpdate)

---
<a id="discount-automatic-basic-create-payload"></a>

## Discount​Automatic​Basic​Create​Payload

payload

Return type for `discountAutomaticBasicCreate` mutation.

### Fields

* automatic​Discount​Node

  [Discount​Automatic​Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticNode)

  The automatic discount that was created.

* user​Errors

  [\[Discount​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [discount​Automatic​Basic​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticBasicCreate)

  mutation

  Creates an [amount off discount](https://help.shopify.com/manual/discounts/discount-types/percentage-fixed-amount) that's automatically applied on a cart and at checkout.

  ***

  **Note:** To create code discounts, use the \<a href="https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBasicCreate">\<code>\<span class="PreventFireFoxApplyingGapToWBR">discount\<wbr/>Code\<wbr/>Basic\<wbr/>Create\</span>\</code>\</a> mutation.

  ***

  * automatic​Basic​Discount

    [Discount​Automatic​Basic​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticBasicInput)

    required

    ### Arguments

    The input data used to create the automatic amount off discount.

  ***

***

### Map

#### Mutations with this payload

* [discount​Automatic​Basic​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticBasicCreate)

---
<a id="discount-automatic-basic-update-payload"></a>

## Discount​Automatic​Basic​Update​Payload

payload

Return type for `discountAutomaticBasicUpdate` mutation.

### Fields

* automatic​Discount​Node

  [Discount​Automatic​Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticNode)

  The automatic discount that was updated.

* user​Errors

  [\[Discount​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [discount​Automatic​Basic​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticBasicUpdate)

  mutation

  Updates an existing [amount off discount](https://help.shopify.com/manual/discounts/discount-types/percentage-fixed-amount) that's automatically applied on a cart and at checkout.

  ***

  **Note:** To update code discounts, use the \<a href="https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBasicUpdate">\<code>\<span class="PreventFireFoxApplyingGapToWBR">discount\<wbr/>Code\<wbr/>Basic\<wbr/>Update\</span>\</code>\</a> mutation instead.

  ***

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the automatic amount off discount to update.

  * automatic​Basic​Discount

    [Discount​Automatic​Basic​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticBasicInput)

    required

    The input data used to update the automatic amount off discount.

  ***

***

### Map

#### Mutations with this payload

* [discount​Automatic​Basic​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticBasicUpdate)

---
<a id="discount-automatic-bulk-delete-payload"></a>

## Discount​Automatic​Bulk​Delete​Payload

payload

Return type for `discountAutomaticBulkDelete` mutation.

### Fields

* job

  [Job](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job)

  The asynchronous job removing the automatic discounts.

* user​Errors

  [\[Discount​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [discount​Automatic​Bulk​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticBulkDelete)

  mutation

  Deletes multiple automatic discounts in a single operation, providing efficient bulk management for stores with extensive discount catalogs. This mutation processes deletions asynchronously to handle large volumes without blocking other operations.

  For example, when cleaning up expired seasonal promotions or removing outdated automatic discounts across product categories, merchants can delete dozens of discounts simultaneously rather than processing each individually.

  Use `DiscountAutomaticBulkDelete` to:

  * Remove multiple automatic discounts efficiently
  * Clean up expired or obsolete promotions
  * Streamline discount management workflows
  * Process large-scale discount removals asynchronously

  The operation returns a job object for tracking deletion progress and any validation errors encountered during processing.

  Learn more about [discount management](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomatic).

  * search

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    The search query for filtering automatic discounts to delete.

    For more information on the list of supported fields and search syntax, refer to the [AutomaticDiscountNodes query section](https://shopify.dev/api/admin-graphql/latest/queries/automaticDiscountNodes#argument-automaticdiscountnodes-query).

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of the saved search to use for filtering automatic discounts to delete.

  * ids

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The IDs of the automatic discounts to delete.

  ***

***

### Map

#### Mutations with this payload

* [discount​Automatic​Bulk​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticBulkDelete)

---
<a id="discount-automatic-bxgy-create-payload"></a>

## Discount​Automatic​Bxgy​Create​Payload

payload

Return type for `discountAutomaticBxgyCreate` mutation.

### Fields

* automatic​Discount​Node

  [Discount​Automatic​Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticNode)

  The automatic discount that was created.

* user​Errors

  [\[Discount​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [discount​Automatic​Bxgy​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticBxgyCreate)

  mutation

  Creates a [buy X get Y discount (BXGY)](https://help.shopify.com/manual/discounts/discount-types/buy-x-get-y) that's automatically applied on a cart and at checkout.

  ***

  **Note:** To create code discounts, use the \<a href="https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBxgyCreate">\<code>\<span class="PreventFireFoxApplyingGapToWBR">discount\<wbr/>Code\<wbr/>Bxgy\<wbr/>Create\</span>\</code>\</a> mutation.

  ***

  * automatic​Bxgy​Discount

    [Discount​Automatic​Bxgy​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticBxgyInput)

    required

    ### Arguments

    The input data used to create the automatic BXGY discount.

  ***

***

### Map

#### Mutations with this payload

* [discount​Automatic​Bxgy​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticBxgyCreate)

---
<a id="discount-automatic-bxgy-update-payload"></a>

## Discount​Automatic​Bxgy​Update​Payload

payload

Return type for `discountAutomaticBxgyUpdate` mutation.

### Fields

* automatic​Discount​Node

  [Discount​Automatic​Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticNode)

  The automatic discount that was updated.

* user​Errors

  [\[Discount​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [discount​Automatic​Bxgy​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticBxgyUpdate)

  mutation

  Updates an existing [buy X get Y discount (BXGY)](https://help.shopify.com/manual/discounts/discount-types/buy-x-get-y) that's automatically applied on a cart and at checkout.

  ***

  **Note:** To update code discounts, use the \<a href="https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBxgyUpdate">\<code>\<span class="PreventFireFoxApplyingGapToWBR">discount\<wbr/>Code\<wbr/>Bxgy\<wbr/>Update\</span>\</code>\</a> mutation instead.

  ***

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the automatic BXGY discount to update.

  * automatic​Bxgy​Discount

    [Discount​Automatic​Bxgy​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticBxgyInput)

    required

    The input data used to update the automatic BXGY discount.

  ***

***

### Map

#### Mutations with this payload

* [discount​Automatic​Bxgy​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticBxgyUpdate)

---
<a id="discount-automatic-deactivate-payload"></a>

## Discount​Automatic​Deactivate​Payload

payload

Return type for `discountAutomaticDeactivate` mutation.

### Fields

* automatic​Discount​Node

  [Discount​Automatic​Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticNode)

  The deactivated automatic discount.

* user​Errors

  [\[Discount​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [discount​Automatic​Deactivate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticDeactivate)

  mutation

  Deactivates an automatic discount.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the automatic discount to deactivate.

  ***

***

### Map

#### Mutations with this payload

* [discount​Automatic​Deactivate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticDeactivate)

---
<a id="discount-automatic-delete-payload"></a>

## Discount​Automatic​Delete​Payload

payload

Return type for `discountAutomaticDelete` mutation.

### Fields

* deleted​Automatic​Discount​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the automatic discount that was deleted.

* user​Errors

  [\[Discount​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [discount​Automatic​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticDelete)

  mutation

  Deletes an existing automatic discount from the store, permanently removing it from all future order calculations. This mutation provides a clean way to remove promotional campaigns that are no longer needed.

  For example, when a seasonal promotion ends or a flash sale concludes, merchants can use this mutation to ensure the discount no longer applies to new orders while preserving historical order data.

  Use `DiscountAutomaticDelete` to:

  * Remove expired promotional campaigns
  * Clean up test discounts during development
  * Delete automatic discounts that conflict with new promotions
  * Maintain a clean discount configuration

  The mutation returns the ID of the deleted discount for confirmation and any validation errors if the deletion cannot be completed. Once deleted, the automatic discount will no longer appear in discount lists or apply to new customer orders.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the automatic discount to delete.

  ***

***

### Map

#### Mutations with this payload

* [discount​Automatic​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticDelete)

---
<a id="discount-automatic-free-shipping-create-payload"></a>

## Discount​Automatic​Free​Shipping​Create​Payload

payload

Return type for `discountAutomaticFreeShippingCreate` mutation.

### Fields

* automatic​Discount​Node

  [Discount​Automatic​Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticNode)

  The automatic free shipping discount that was created.

* user​Errors

  [\[Discount​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [discount​Automatic​Free​Shipping​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticFreeShippingCreate)

  mutation

  Creates automatic free shipping discounts that apply to qualifying orders without requiring discount codes. These promotions automatically activate when customers meet specified criteria, streamlining the checkout experience.

  For example, a store might create an automatic free shipping discount for orders over variable pricing to encourage larger purchases, or offer free shipping to specific customer segments during promotional periods.

  Use `DiscountAutomaticFreeShippingCreate` to:

  * Set up code-free shipping promotions
  * Create order value-based shipping incentives
  * Target specific customer groups with shipping benefits
  * Establish location-based shipping discounts

  The mutation validates discount configuration and returns the created automatic discount node along with any configuration errors that need resolution.

  Learn more about [automatic discounts](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticNode).

  * free​Shipping​Automatic​Discount

    [Discount​Automatic​Free​Shipping​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticFreeShippingInput)

    required

    ### Arguments

    The input data used to create the automatic free shipping discount.

  ***

***

### Map

#### Mutations with this payload

* [discount​Automatic​Free​Shipping​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticFreeShippingCreate)

---
<a id="discount-automatic-free-shipping-update-payload"></a>

## Discount​Automatic​Free​Shipping​Update​Payload

payload

Return type for `discountAutomaticFreeShippingUpdate` mutation.

### Fields

* automatic​Discount​Node

  [Discount​Automatic​Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticNode)

  The automatic discount that was updated.

* user​Errors

  [\[Discount​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [discount​Automatic​Free​Shipping​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticFreeShippingUpdate)

  mutation

  Updates existing automatic free shipping discounts, allowing merchants to modify promotion criteria, shipping destinations, and eligibility requirements without recreating the entire discount structure.

  For example, extending a holiday free shipping promotion to include additional countries, adjusting the minimum order value threshold, or expanding customer eligibility to include new segments.

  Use `DiscountAutomaticFreeShippingUpdate` to:

  * Modify shipping discount thresholds and criteria
  * Expand or restrict geographic availability
  * Update customer targeting and eligibility rules
  * Adjust promotion timing and activation periods

  Changes take effect immediately for new orders, while the mutation validates all modifications and reports any configuration conflicts through user errors.

  Learn more about [managing automatic discounts](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticFreeShipping).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the automatic free shipping discount to update.

  * free​Shipping​Automatic​Discount

    [Discount​Automatic​Free​Shipping​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticFreeShippingInput)

    required

    The input data used to update the automatic free shipping discount.

  ***

***

### Map

#### Mutations with this payload

* [discount​Automatic​Free​Shipping​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticFreeShippingUpdate)

---
<a id="discount-bulk-tags-add-payload"></a>

## Discount​Bulk​Tags​Add​Payload

payload

Return type for `discountBulkTagsAdd` mutation.

### Fields

* job

  [Job](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job)

  The asynchronous job that adds the tags.

* user​Errors

  [\[Discount​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [discount​Bulk​Tags​Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountBulkTagsAdd)

  mutation

  Adds tags to multiple [discounts](https://help.shopify.com/manual/discounts/discount-types) asynchronously using one of the following:

  * A search query
  * A saved search ID
  * A list of discount IDs

  For example, you can add tags to price rules that match a search criteria, or add tags to a predefined set of price rules.

  * search

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    The search query for filtering discounts.\
    \
    For more information on the list of supported fields and search syntax, refer to the [`discountNodes`](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountNodes#query-arguments) query.

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of the saved search for filtering discounts to tag.

  * ids

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The IDs of the discounts to tag.

  * tags

    [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    The tags to add to the discounts.

  ***

***

### Map

#### Mutations with this payload

* [discount​Bulk​Tags​Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountBulkTagsAdd)

---
<a id="discount-bulk-tags-remove-payload"></a>

## Discount​Bulk​Tags​Remove​Payload

payload

Return type for `discountBulkTagsRemove` mutation.

### Fields

* job

  [Job](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job)

  The asynchronous job that removes the tags.

* user​Errors

  [\[Discount​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [discount​Bulk​Tags​Remove](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountBulkTagsRemove)

  mutation

  Removes tags from multiple [discounts](https://help.shopify.com/manual/discounts/discount-types) asynchronously using one of the following:

  * A search query
  * A saved search ID
  * A list of discount IDs

  For example, you can delete tags from price rules that match a search criteria, or delete tags from a predefined set of price rules.

  * search

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    The search query for filtering discounts.\
    \
    For more information on the list of supported fields and search syntax, refer to the [`discountNodes`](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountNodes#query-arguments) query.

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of the saved search for filtering discounts to remove tags from.

  * ids

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The IDs of the discounts to untag.

  * tags

    [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    The tags to remove from the discounts.

  ***

***

### Map

#### Mutations with this payload

* [discount​Bulk​Tags​Remove](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountBulkTagsRemove)

---
<a id="discount-code-activate-payload"></a>

## Discount​Code​Activate​Payload

payload

Return type for `discountCodeActivate` mutation.

### Fields

* code​Discount​Node

  [Discount​Code​Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeNode)

  The activated code discount.

* user​Errors

  [\[Discount​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [discount​Code​Activate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeActivate)

  mutation

  Activates a previously created code discount, making it available for customers to use during checkout. This mutation transitions inactive discount codes into an active state where they can be applied to orders.

  For example, after creating a "SUMMER20" discount code but leaving it inactive during setup, merchants can activate it when ready to launch their summer promotion campaign.

  Use `DiscountCodeActivate` to:

  * Launch scheduled promotional campaigns
  * Reactivate previously paused discount codes
  * Enable discount codes after configuration changes
  * Control the timing of discount availability

  The mutation returns the updated discount code node with its new active status and handles any validation errors that might prevent activation, such as conflicting discount rules or invalid date ranges.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the code discount to activate.

  ***

***

### Map

#### Mutations with this payload

* [discount​Code​Activate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeActivate)

---
<a id="discount-code-app-create-payload"></a>

## Discount​Code​App​Create​Payload

payload

Return type for `discountCodeAppCreate` mutation.

### Fields

* code​App​Discount

  [Discount​Code​App](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeApp)

  The discount that the app provides.

* user​Errors

  [\[Discount​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [discount​Code​App​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeAppCreate)

  mutation

  Creates a code discount. The discount type must be provided by an app extension that uses [Shopify Functions](https://shopify.dev/docs/apps/build/functions). Functions can implement [order](https://shopify.dev/docs/api/functions/reference/order-discounts), [product](https://shopify.dev/docs/api/functions/reference/product-discounts), or [shipping](https://shopify.dev/docs/api/functions/reference/shipping-discounts) discount functions. Use this mutation with Shopify Functions when you need custom logic beyond [Shopify's native discount types](https://help.shopify.com/manual/discounts/discount-types).

  For example, use this mutation to create a code discount using an app's "Volume" discount type that applies a percentage off when customers purchase more than the minimum quantity of a product. For an example implementation, refer to [our tutorial](https://shopify.dev/docs/apps/build/discounts/build-discount-function).

  ***

  **Note:** To create automatic discounts with custom logic, use \<a href="https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticAppCreate">\<code>\<span class="PreventFireFoxApplyingGapToWBR">discount\<wbr/>Automatic\<wbr/>App\<wbr/>Create\</span>\</code>\</a>.

  ***

  * code​App​Discount

    [Discount​Code​App​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeAppInput)

    required

    ### Arguments

    The input data used to create the discount.

  ***

***

### Map

#### Mutations with this payload

* [discount​Code​App​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeAppCreate)

---
<a id="discount-code-app-update-payload"></a>

## Discount​Code​App​Update​Payload

payload

Return type for `discountCodeAppUpdate` mutation.

### Fields

* code​App​Discount

  [Discount​Code​App](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeApp)

  The updated discount that the app provides.

* user​Errors

  [\[Discount​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [discount​Code​App​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeAppUpdate)

  mutation

  Updates a code discount, where the discount type is provided by an app extension that uses [Shopify Functions](https://shopify.dev/docs/apps/build/functions). Use this mutation when you need advanced, custom, or dynamic discount capabilities that aren't supported by [Shopify's native discount types](https://help.shopify.com/manual/discounts/discount-types).

  ***

  **Note:** To update automatic discounts, use \<a href="https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticAppUpdate">\<code>\<span class="PreventFireFoxApplyingGapToWBR">discount\<wbr/>Automatic\<wbr/>App\<wbr/>Update\</span>\</code>\</a>.

  ***

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the discount to update.

  * code​App​Discount

    [Discount​Code​App​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeAppInput)

    required

    The input fields required to update the discount.

  ***

***

### Map

#### Mutations with this payload

* [discount​Code​App​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeAppUpdate)

---
<a id="discount-code-basic-create-payload"></a>

## Discount​Code​Basic​Create​Payload

payload

Return type for `discountCodeBasicCreate` mutation.

### Fields

* code​Discount​Node

  [Discount​Code​Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeNode)

  The discount code that was created.

* user​Errors

  [\[Discount​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [discount​Code​Basic​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBasicCreate)

  mutation

  Creates an [amount off discount](https://help.shopify.com/manual/discounts/discount-types/percentage-fixed-amount) that's applied on a cart and at checkout when a customer enters a code. Amount off discounts can be a percentage off or a fixed amount off.

  ***

  **Note:** To create discounts that are automatically applied on a cart and at checkout, use the \<a href="https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticBasicCreate">\<code>\<span class="PreventFireFoxApplyingGapToWBR">discount\<wbr/>Automatic\<wbr/>Basic\<wbr/>Create\</span>\</code>\</a> mutation.

  ***

  * basic​Code​Discount

    [Discount​Code​Basic​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeBasicInput)

    required

    ### Arguments

    The input data used to create the discount code.

  ***

***

### Map

#### Mutations with this payload

* [discount​Code​Basic​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBasicCreate)

---
<a id="discount-code-basic-update-payload"></a>

## Discount​Code​Basic​Update​Payload

payload

Return type for `discountCodeBasicUpdate` mutation.

### Fields

* code​Discount​Node

  [Discount​Code​Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeNode)

  The discount code that was updated.

* user​Errors

  [\[Discount​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [discount​Code​Basic​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBasicUpdate)

  mutation

  Updates an [amount off discount](https://help.shopify.com/manual/discounts/discount-types/percentage-fixed-amount) that's applied on a cart and at checkout when a customer enters a code. Amount off discounts can be a percentage off or a fixed amount off.

  ***

  **Note:** To update discounts that are automatically applied on a cart and at checkout, use the \<a href="https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticBasicUpdate">\<code>\<span class="PreventFireFoxApplyingGapToWBR">discount\<wbr/>Automatic\<wbr/>Basic\<wbr/>Update\</span>\</code>\</a> mutation.

  ***

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the discount code to update.

  * basic​Code​Discount

    [Discount​Code​Basic​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeBasicInput)

    required

    The input data used to update the discount code.

  ***

***

### Map

#### Mutations with this payload

* [discount​Code​Basic​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBasicUpdate)

---
<a id="discount-code-bulk-activate-payload"></a>

## Discount​Code​Bulk​Activate​Payload

payload

Return type for `discountCodeBulkActivate` mutation.

### Fields

* job

  [Job](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job)

  The asynchronous job that activates the discounts.

* user​Errors

  [\[Discount​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [discount​Code​Bulk​Activate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBulkActivate)

  mutation

  Activates multiple [code discounts](https://help.shopify.com/manual/discounts/discount-types#discount-codes) asynchronously using one of the following:

  * A search query
  * A saved search ID
  * A list of discount code IDs

  For example, you can activate discounts for all codes that match a search criteria, or activate a predefined set of discount codes.

  * search

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    The search query for filtering discounts.\
    \
    For more information on the list of supported fields and search syntax, refer to the [`codeDiscountNodes`](https://shopify.dev/docs/api/admin-graphql/latest/queries/codeDiscountNodes#query-arguments) query.

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of the saved search for filtering discounts to activate. Saved searches represent [customer segments](https://help.shopify.com/manual/customers/customer-segments) that merchants have built in the Shopify admin.

  * ids

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The IDs of the discounts to activate.

  ***

***

### Map

#### Mutations with this payload

* [discount​Code​Bulk​Activate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBulkActivate)

---
<a id="discount-code-bulk-deactivate-payload"></a>

## Discount​Code​Bulk​Deactivate​Payload

payload

Return type for `discountCodeBulkDeactivate` mutation.

### Fields

* job

  [Job](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job)

  The asynchronous job that deactivates the discounts.

* user​Errors

  [\[Discount​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [discount​Code​Bulk​Deactivate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBulkDeactivate)

  mutation

  Deactivates multiple [code-based discounts](https://help.shopify.com/manual/discounts/discount-types#discount-codes) asynchronously using one of the following:

  * A search query
  * A saved search ID
  * A list of discount code IDs

  For example, you can deactivate discounts for all codes that match a search criteria, or deactivate a predefined set of discount codes.

  * search

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    The search query for filtering discounts.\
    \
    For more information on the list of supported fields and search syntax, refer to the [`codeDiscountNodes`](https://shopify.dev/docs/api/admin-graphql/latest/queries/codeDiscountNodes#query-arguments) query.

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of the saved search for filtering discounts to deactivate. Saved searches represent [customer segments](https://help.shopify.com/manual/customers/customer-segments) that merchants have built in the Shopify admin.

  * ids

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The IDs of the discounts to deactivate.

  ***

***

### Map

#### Mutations with this payload

* [discount​Code​Bulk​Deactivate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBulkDeactivate)

---
<a id="discount-code-bulk-delete-payload"></a>

## Discount​Code​Bulk​Delete​Payload

payload

Return type for `discountCodeBulkDelete` mutation.

### Fields

* job

  [Job](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job)

  The asynchronous job that deletes the discounts.

* user​Errors

  [\[Discount​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [discount​Code​Bulk​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBulkDelete)

  mutation

  Deletes multiple [code-based discounts](https://help.shopify.com/manual/discounts/discount-types#discount-codes) asynchronously using one of the following:

  * A search query
  * A saved search ID
  * A list of discount code IDs

  For example, you can delete discounts for all codes that match a search criteria, or delete a predefined set of discount codes.

  * search

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    The search query for filtering discounts.\
    \
    For more information on the list of supported fields and search syntax, refer to the [`codeDiscountNodes`](https://shopify.dev/docs/api/admin-graphql/latest/queries/codeDiscountNodes#query-arguments) query.

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of the saved search for filtering discounts to delete. Saved searches represent [customer segments](https://help.shopify.com/manual/customers/customer-segments) that merchants have built in the Shopify admin.

  * ids

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The IDs of the discounts to delete.

  ***

***

### Map

#### Mutations with this payload

* [discount​Code​Bulk​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBulkDelete)

---
<a id="discount-code-bxgy-create-payload"></a>

## Discount​Code​Bxgy​Create​Payload

payload

Return type for `discountCodeBxgyCreate` mutation.

### Fields

* code​Discount​Node

  [Discount​Code​Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeNode)

  The code discount that was created.

* user​Errors

  [\[Discount​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [discount​Code​Bxgy​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBxgyCreate)

  mutation

  Creates a [buy X get Y discount (BXGY)](https://help.shopify.com/manual/discounts/discount-types/buy-x-get-y) that's applied on a cart and at checkout when a customer enters a code.

  ***

  **Note:** To create discounts that are automatically applied on a cart and at checkout, use the \<a href="https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticBxgyCreate">\<code>\<span class="PreventFireFoxApplyingGapToWBR">discount\<wbr/>Automatic\<wbr/>Bxgy\<wbr/>Create\</span>\</code>\</a> mutation.

  ***

  * bxgy​Code​Discount

    [Discount​Code​Bxgy​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeBxgyInput)

    required

    ### Arguments

    The input data used to create the BXGY code discount.

  ***

***

### Map

#### Mutations with this payload

* [discount​Code​Bxgy​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBxgyCreate)

---
<a id="discount-code-bxgy-update-payload"></a>

## Discount​Code​Bxgy​Update​Payload

payload

Return type for `discountCodeBxgyUpdate` mutation.

### Fields

* code​Discount​Node

  [Discount​Code​Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeNode)

  The code discount that was updated.

* user​Errors

  [\[Discount​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [discount​Code​Bxgy​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBxgyUpdate)

  mutation

  Updates a [buy X get Y discount (BXGY)](https://help.shopify.com/manual/discounts/discount-types/buy-x-get-y) that's applied on a cart and at checkout when a customer enters a code.

  ***

  **Note:** To update discounts that are automatically applied on a cart and at checkout, use the \<a href="https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticBxgyUpdate">\<code>\<span class="PreventFireFoxApplyingGapToWBR">discount\<wbr/>Automatic\<wbr/>Bxgy\<wbr/>Update\</span>\</code>\</a> mutation.

  ***

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the BXGY code discount to update.

  * bxgy​Code​Discount

    [Discount​Code​Bxgy​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeBxgyInput)

    required

    The input data used to update the BXGY code discount.

  ***

***

### Map

#### Mutations with this payload

* [discount​Code​Bxgy​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBxgyUpdate)

---
<a id="discount-code-deactivate-payload"></a>

## Discount​Code​Deactivate​Payload

payload

Return type for `discountCodeDeactivate` mutation.

### Fields

* code​Discount​Node

  [Discount​Code​Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeNode)

  The deactivated code discount.

* user​Errors

  [\[Discount​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [discount​Code​Deactivate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeDeactivate)

  mutation

  Temporarily suspends a code discount without permanently removing it from the store. Deactivation allows merchants to pause promotional campaigns while preserving the discount configuration for potential future use.

  For example, when a flash sale needs to end immediately or a discount code requires temporary suspension due to inventory issues, merchants can deactivate it to stop new redemptions while keeping the discount structure intact.

  Use `DiscountCodeDeactivate` to:

  * Pause active promotional campaigns timely
  * Temporarily suspend problematic discount codes
  * Control discount availability during inventory shortages
  * Maintain discount history while stopping usage

  Deactivated discounts remain in the system and can be reactivated later, unlike deletion which persistently removes the code. Customers attempting to use deactivated codes will receive appropriate error messages.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the code discount to deactivate.

  ***

***

### Map

#### Mutations with this payload

* [discount​Code​Deactivate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeDeactivate)

---
<a id="discount-code-delete-payload"></a>

## Discount​Code​Delete​Payload

payload

Return type for `discountCodeDelete` mutation.

### Fields

* deleted​Code​Discount​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the code discount that was deleted.

* user​Errors

  [\[Discount​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [discount​Code​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeDelete)

  mutation

  Removes a code discount from the store, making it permanently unavailable for customer use. This mutation provides a clean way to eliminate discount codes that are no longer needed or have been replaced.

  For example, when a seasonal promotion ends or a discount code has been compromised, merchants can delete it entirely rather than just deactivating it, ensuring customers cannot attempt to use expired promotional codes.

  Use `DiscountCodeDelete` to:

  * persistently remove outdated promotional codes
  * Clean up discount code lists after campaigns end
  * Eliminate compromised or leaked discount codes
  * Maintain organized discount management

  Once deleted, the discount code cannot be recovered and any customer attempts to use it will fail. This differs from deactivation, which preserves the code for potential future reactivation.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the code discount to delete.

  ***

***

### Map

#### Mutations with this payload

* [discount​Code​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeDelete)

---
<a id="discount-code-free-shipping-create-payload"></a>

## Discount​Code​Free​Shipping​Create​Payload

payload

Return type for `discountCodeFreeShippingCreate` mutation.

### Fields

* code​Discount​Node

  [Discount​Code​Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeNode)

  The discount code that was created.

* user​Errors

  [\[Discount​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [discount​Code​Free​Shipping​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeFreeShippingCreate)

  mutation

  Creates an [free shipping discount](https://help.shopify.com/manual/discounts/discount-types/free-shipping) that's applied on a cart and at checkout when a customer enters a code.

  ***

  **Note:** To create discounts that are automatically applied on a cart and at checkout, use the \<a href="https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticFreeShippingCreate">\<code>\<span class="PreventFireFoxApplyingGapToWBR">discount\<wbr/>Automatic\<wbr/>Free\<wbr/>Shipping\<wbr/>Create\</span>\</code>\</a> mutation.

  ***

  * free​Shipping​Code​Discount

    [Discount​Code​Free​Shipping​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeFreeShippingInput)

    required

    ### Arguments

    The input data used to create the discount code.

  ***

***

### Map

#### Mutations with this payload

* [discount​Code​Free​Shipping​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeFreeShippingCreate)

---
<a id="discount-code-free-shipping-update-payload"></a>

## Discount​Code​Free​Shipping​Update​Payload

payload

Return type for `discountCodeFreeShippingUpdate` mutation.

### Fields

* code​Discount​Node

  [Discount​Code​Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeNode)

  The discount code that was updated.

* user​Errors

  [\[Discount​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [discount​Code​Free​Shipping​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeFreeShippingUpdate)

  mutation

  Updates a [free shipping discount](https://help.shopify.com/manual/discounts/discount-types/free-shipping) that's applied on a cart and at checkout when a customer enters a code.

  ***

  **Note:** To update a free shipping discount that\&#39;s automatically applied on a cart and at checkout, use the \<a href="https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticFreeShippingUpdate">\<code>\<span class="PreventFireFoxApplyingGapToWBR">discount\<wbr/>Automatic\<wbr/>Free\<wbr/>Shipping\<wbr/>Update\</span>\</code>\</a> mutation.

  ***

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the discount code to update.

  * free​Shipping​Code​Discount

    [Discount​Code​Free​Shipping​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeFreeShippingInput)

    required

    The input data used to update the discount code.

  ***

***

### Map

#### Mutations with this payload

* [discount​Code​Free​Shipping​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeFreeShippingUpdate)

---
<a id="discount-code-redeem-code-bulk-delete-payload"></a>

## Discount​Code​Redeem​Code​Bulk​Delete​Payload

payload

Return type for `discountCodeRedeemCodeBulkDelete` mutation.

### Fields

* job

  [Job](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job)

  The asynchronous job that deletes the discount codes.

* user​Errors

  [\[Discount​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [discount​Code​Redeem​Code​Bulk​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeRedeemCodeBulkDelete)

  mutation

  Asynchronously delete [discount codes](https://help.shopify.com/manual/discounts/discount-types#discount-codes) in bulk that customers can use to redeem a discount.

  * discount​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the [`DiscountCodeNode`](https://help.shopify.com/docs/api/admin-graphql/latest/objects/DiscountCodeNode#field-id) object that the codes will be removed from. For example, `gid://shopify/DiscountCodeNode/123`. You can use the [`codeDiscountNodes` query](https://shopify.dev/docs/api/admin-graphql/latest/queries/codeDiscountNodes) to retrieve the ID.

  * search

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators that you can use to search for code discounts. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/docs/api/usage/search-syntax).

    For a list of accepted values for the `search` field, refer to the [`query` argument on the `codeDiscountNodes` query](https://shopify.dev/docs/api/admin-graphql/latest/queries/codeDiscountNodes#argument-query).

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of a [saved search](https://shopify.dev/docs/api/admin-graphql/latest/objects/savedsearch#field-id).

  * ids

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The IDs of the [`DiscountRedeemCode`](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountredeemcode#field-id) objects to delete. For example, `gid://shopify/DiscountRedeemCode/123`. You can use the [`codeDiscountNodes` query](https://shopify.dev/docs/api/admin-graphql/latest/queries/codeDiscountNodes) to retrieve the ID.

  ***

***

### Map

#### Mutations with this payload

* [discount​Code​Redeem​Code​Bulk​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeRedeemCodeBulkDelete)

---
<a id="discount-redeem-code-bulk-add-payload"></a>

## Discount​Redeem​Code​Bulk​Add​Payload

payload

Return type for `discountRedeemCodeBulkAdd` mutation.

### Fields

* bulk​Creation

  [Discount​Redeem​Code​Bulk​Creation](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountRedeemCodeBulkCreation)

  The ID of bulk operation that creates multiple unique discount codes. You can use the [`discountRedeemCodeBulkCreation` query](https://shopify.dev/api/admin-graphql/latest/queries/discountRedeemCodeBulkCreation) to track the status of the bulk operation.

* user​Errors

  [\[Discount​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [discount​Redeem​Code​Bulk​Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountRedeemCodeBulkAdd)

  mutation

  Asynchronously add [discount codes](https://help.shopify.com/manual/discounts/discount-types#discount-codes) in bulk that customers can use to redeem a discount. You can use the `discountRedeemCodeBulkAdd` mutation to automate the distribution of discount codes through emails or other marketing channels.

  * discount​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the [`DiscountCodeNode`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeNode#field-id) object that the codes will be added to. For example, `gid://shopify/DiscountCodeNode/123`. You can use the [`codeDiscountNodes` query](https://shopify.dev/docs/api/admin-graphql/latest/queries/codeDiscountNodes) to retrieve the ID.

  * codes

    [\[Discount​Redeem​Code​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountRedeemCodeInput)

    required

    The list of codes to associate with the [code discount](https://help.shopify.com/manual/discounts/discount-types#discount-codes). Maximum: 250 codes.

  ***

***

### Map

#### Mutations with this payload

* [discount​Redeem​Code​Bulk​Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountRedeemCodeBulkAdd)

---
<a id="dispute-evidence-update-payload"></a>

## Dispute​Evidence​Update​Payload

payload

Return type for `disputeEvidenceUpdate` mutation.

### Fields

* dispute​Evidence

  [Shopify​Payments​Dispute​Evidence](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsDisputeEvidence)

  The updated dispute evidence.

* user​Errors

  [\[Dispute​Evidence​Update​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DisputeEvidenceUpdateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [dispute​Evidence​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/disputeEvidenceUpdate)

  mutation

  Updates the evidence package for a Shopify Payments dispute. Merchants submit evidence — such as shipping confirmations, customer communications, and refund policies — to contest a dispute filed by a cardholder. This mutation updates the evidence fields.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the dispute evidence to be updated.

  * input

    [Shopify​Payments​Dispute​Evidence​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ShopifyPaymentsDisputeEvidenceUpdateInput)

    required

    The updated properties for a dispute evidence.

  ***

***

### Map

#### Mutations with this payload

* [dispute​Evidence​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/disputeEvidenceUpdate)

---
<a id="draft-order-bulk-add-tags-payload"></a>

## Draft​Order​Bulk​Add​Tags​Payload

payload

Return type for `draftOrderBulkAddTags` mutation.

### Fields

* job

  [Job](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job)

  The asynchronous job for adding tags to the draft orders.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [draft​Order​Bulk​Add​Tags](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderBulkAddTags)

  mutation

  Adds tags to multiple draft orders.

  * search

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    The conditions for filtering draft orders on. See the detailed [search syntax](https://shopify.dev/api/usage/search-syntax).

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of the draft order saved search for filtering draft orders on.

  * ids

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The IDs of the draft orders to add tags to.

  * tags

    [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    List of tags to be added.

  ***

***

### Map

#### Mutations with this payload

* [draft​Order​Bulk​Add​Tags](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderBulkAddTags)

---
<a id="draft-order-bulk-delete-payload"></a>

## Draft​Order​Bulk​Delete​Payload

payload

Return type for `draftOrderBulkDelete` mutation.

### Fields

* job

  [Job](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job)

  The asynchronous job for deleting the draft orders.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [draft​Order​Bulk​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderBulkDelete)

  mutation

  Deletes multiple draft orders.

  * search

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    The conditions for filtering draft orders on. See the detailed [search syntax](https://shopify.dev/api/usage/search-syntax).

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of the draft order saved search for filtering draft orders on.

  * ids

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The IDs of the draft orders to delete.

  ***

***

### Map

#### Mutations with this payload

* [draft​Order​Bulk​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderBulkDelete)

---
<a id="draft-order-bulk-remove-tags-payload"></a>

## Draft​Order​Bulk​Remove​Tags​Payload

payload

Return type for `draftOrderBulkRemoveTags` mutation.

### Fields

* job

  [Job](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job)

  The asynchronous job for removing tags from the draft orders.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [draft​Order​Bulk​Remove​Tags](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderBulkRemoveTags)

  mutation

  Removes tags from multiple draft orders.

  * search

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    The conditions for filtering draft orders on. See the detailed [search syntax](https://shopify.dev/api/usage/search-syntax).

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of the draft order saved search for filtering draft orders on.

  * ids

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The IDs of the draft orders to remove tags from.

  * tags

    [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    List of tags to be removed.

  ***

***

### Map

#### Mutations with this payload

* [draft​Order​Bulk​Remove​Tags](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderBulkRemoveTags)

---
<a id="draft-order-calculate-payload"></a>

## Draft​Order​Calculate​Payload

payload

Return type for `draftOrderCalculate` mutation.

### Fields

* calculated​Draft​Order

  [Calculated​Draft​Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedDraftOrder)

  The calculated properties for a draft order.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [draft​Order​Calculate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderCalculate)

  mutation

  Calculates the properties of a [`DraftOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder) without creating it. Returns pricing information including [`CalculatedDraftOrderLineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedDraftOrderLineItem) totals, shipping charges, applicable discounts, and tax calculations based on the provided [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) and [`MailingAddress`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddress) information.

  Use this mutation to preview total taxes and prices before creating a draft order. It's particularly useful when working with B2B [`PurchasingEntity`](https://shopify.dev/docs/api/admin-graphql/latest/unions/PurchasingEntity) or when you need to determine costs without committing to a draft order. Learn more about [calculating draft orders for B2B purchasing entities](https://shopify.dev/docs/apps/build/b2b/draft-orders#step-1-calculate-a-draft-order-for-a-purchasing-entity).

  * input

    [Draft​Order​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DraftOrderInput)

    required

    ### Arguments

    The fields for the draft order.

  ***

***

### Map

#### Mutations with this payload

* [draft​Order​Calculate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderCalculate)

---
<a id="draft-order-complete-payload"></a>

## Draft​Order​Complete​Payload

payload

Return type for `draftOrderComplete` mutation.

### Fields

* draft​Order

  [Draft​Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder)

  The completed draft order.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [draft​Order​Complete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderComplete)

  mutation

  Completes a [draft order](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder) and converts it into a [regular order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order). The order appears in the merchant's orders list, and the customer can be notified about their order.

  Use the `draftOrderComplete` mutation when a merchant is ready to finalize a draft order and create a real order in their store. The `draftOrderComplete` mutation also supports sales channel attribution for tracking order sources using the [`sourceName`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderComplete#arguments-sourceName) argument, [cart validation](https://shopify.dev/docs/apps/build/checkout/cart-checkout-validation) controls for app integrations, and detailed error reporting for failed completions.

  You can complete a draft order with different [payment scenarios](https://help.shopify.com/manual/fulfillment/managing-orders/payments):

  * Mark the order as paid immediately.
  * Set the order as payment pending using [payment terms](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTerms).
  * Specify a custom payment amount.
  * Select a specific payment gateway.

  ***

  **Note:** When completing a draft order, inventory is \<a href="https://shopify.dev/docs/apps/build/orders-fulfillment/inventory-management-apps#inventory-states">reserved\</a> for the items in the order. This means the items will no longer be available for other customers to purchase. Make sure to verify inventory availability before completing the draft order.

  ***

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The draft order to complete.

  * payment​Pending

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    DeprecatedDefault:false

  * payment​Gateway​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The gateway for the completed draft order.

  * source​Name

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A channel definition handle used for sales channel attribution.

  ***

***

### Map

#### Mutations with this payload

* [draft​Order​Complete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderComplete)

---
<a id="draft-order-create-from-order-payload"></a>

## Draft​Order​Create​From​Order​Payload

payload

Return type for `draftOrderCreateFromOrder` mutation.

### Fields

* draft​Order

  [Draft​Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder)

  The created draft order.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [draft​Order​Create​From​Order](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderCreateFromOrder)

  mutation

  Creates a draft order from order.

  * order​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    Specifies the order's id that we create the draft order from.

  ***

***

### Map

#### Mutations with this payload

* [draft​Order​Create​From​Order](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderCreateFromOrder)

---
<a id="draft-order-create-payload"></a>

## Draft​Order​Create​Payload

payload

Return type for `draftOrderCreate` mutation.

### Fields

* draft​Order

  [Draft​Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder)

  The created draft order.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [draft​Order​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderCreate)

  mutation

  Creates a [draft order](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder) with attributes such as customer information, line items, shipping and billing addresses, and payment terms. Draft orders are useful for merchants that need to:

  * Create new orders for sales made by phone, in person, by chat, or elsewhere. When a merchant accepts payment for a draft order, an order is created.
  * Send invoices to customers with a secure checkout link.
  * Use custom items to represent additional costs or products not in inventory.
  * Re-create orders manually from active sales channels.
  * Sell products at discount or wholesale rates.
  * Take pre-orders.

  After creating a draft order, you can:

  * Send an invoice to the customer using the [`draftOrderInvoiceSend`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderInvoiceSend) mutation.
  * Complete the draft order using the [`draftOrderComplete`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderComplete) mutation.
  * Update the draft order using the [`draftOrderUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderUpdate) mutation.
  * Duplicate a draft order using the [`draftOrderDuplicate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderDuplicate) mutation.
  * Delete the draft order using the [`draftOrderDelete`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderDelete) mutation.

  ***

  **Note:** When you create a draft order, you can\&#39;t \<a href="https://shopify.dev/docs/apps/build/orders-fulfillment/inventory-management-apps#inventory-states">reserve or hold inventory\</a> for the items in the order by default. However, you can reserve inventory using the \<a href="https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderCreate#arguments-input.fields.reserveInventoryUntil">\<code>\<span class="PreventFireFoxApplyingGapToWBR">reserve\<wbr/>Inventory\<wbr/>Until\</span>\</code>\</a> input.

  ***

  * input

    [Draft​Order​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DraftOrderInput)

    required

    ### Arguments

    The fields used to create the draft order.

  ***

***

### Map

#### Mutations with this payload

* [draft​Order​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderCreate)

---
<a id="draft-order-delete-payload"></a>

## Draft​Order​Delete​Payload

payload

Return type for `draftOrderDelete` mutation.

### Fields

* deleted​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the deleted draft order.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [draft​Order​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderDelete)

  mutation

  Deletes a draft order.

  * input

    [Draft​Order​Delete​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DraftOrderDeleteInput)

    required

    ### Arguments

    Specify the draft order to delete by its ID.

  ***

***

### Map

#### Mutations with this payload

* [draft​Order​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderDelete)

---
<a id="draft-order-duplicate-payload"></a>

## Draft​Order​Duplicate​Payload

payload

Return type for `draftOrderDuplicate` mutation.

### Fields

* draft​Order

  [Draft​Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder)

  The newly duplicated draft order.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [draft​Order​Duplicate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderDuplicate)

  mutation

  Duplicates a draft order.

  * draft​Order​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    Deprecated

    ### Arguments

  * id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of the draft order to duplicate.

  ***

***

### Map

#### Mutations with this payload

* [draft​Order​Duplicate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderDuplicate)

---
<a id="draft-order-invoice-preview-payload"></a>

## Draft​Order​Invoice​Preview​Payload

payload

Return type for `draftOrderInvoicePreview` mutation.

### Fields

* preview​Html

  [HTML](https://shopify.dev/docs/api/admin-graphql/latest/scalars/HTML)

  The draft order invoice email rendered as HTML to allow previewing.

* preview​Subject

  [HTML](https://shopify.dev/docs/api/admin-graphql/latest/scalars/HTML)

  The subject preview for the draft order invoice email.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [draft​Order​Invoice​Preview](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderInvoicePreview)

  mutation

  Previews a draft order invoice email.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    Specifies the draft order invoice email to preview.

  * email

    [Email​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/EmailInput)

    Specifies the draft order invoice email fields.

  ***

***

### Map

#### Mutations with this payload

* [draft​Order​Invoice​Preview](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderInvoicePreview)

---
<a id="draft-order-invoice-send-payload"></a>

## Draft​Order​Invoice​Send​Payload

payload

Return type for `draftOrderInvoiceSend` mutation.

### Fields

* draft​Order

  [Draft​Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder)

  The draft order an invoice email is sent for.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [draft​Order​Invoice​Send](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderInvoiceSend)

  mutation

  Sends an invoice email for a [`DraftOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder). The invoice includes a secure checkout link for reviewing and paying for the order. Use the [`email`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderInvoiceSend#arguments-email) argument to customize the email, such as the subject and message.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    Specifies the draft order to send the invoice for.

  * email

    [Email​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/EmailInput)

    Specifies the draft order invoice email fields.

  ***

***

### Map

#### Mutations with this payload

* [draft​Order​Invoice​Send](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderInvoiceSend)

---
<a id="draft-order-update-payload"></a>

## Draft​Order​Update​Payload

payload

Return type for `draftOrderUpdate` mutation.

### Fields

* draft​Order

  [Draft​Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder)

  The updated draft order.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [draft​Order​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderUpdate)

  mutation

  Updates a draft order.

  If a checkout has been started for a draft order, any update to the draft will unlink the checkout. Checkouts are created but not immediately completed when opening the merchant credit card modal in the admin, and when a buyer opens the invoice URL. This is usually fine, but there is an edge case where a checkout is in progress and the draft is updated before the checkout completes. This will not interfere with the checkout and order creation, but if the link from draft to checkout is broken the draft will remain open even after the order is created.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    Specifies the draft order to update.

  * input

    [Draft​Order​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DraftOrderInput)

    required

    The draft order properties to update.

  ***

***

### Map

#### Mutations with this payload

* [draft​Order​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderUpdate)

---
<a id="event-bridge-server-pixel-update-payload"></a>

## Event​Bridge​Server​Pixel​Update​Payload

payload

Return type for `eventBridgeServerPixelUpdate` mutation.

### Fields

* server​Pixel

  [Server​Pixel](https://shopify.dev/docs/api/admin-graphql/latest/objects/ServerPixel)

  The server pixel as configured by the mutation.

* user​Errors

  [\[Errors​Server​Pixel​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ErrorsServerPixelUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [event​Bridge​Server​Pixel​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/eventBridgeServerPixelUpdate)

  mutation

  Updates the server pixel to connect to an EventBridge endpoint. Running this mutation deletes any previous subscriptions for the server pixel.

  * arn

    [ARN!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ARN)

    required

    ### Arguments

    The ARN for the EventBridge endpoint to which customer events are to be sent.

  ***

***

### Map

#### Mutations with this payload

* [event​Bridge​Server​Pixel​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/eventBridgeServerPixelUpdate)

---
<a id="event-bridge-webhook-subscription-create-payload"></a>

## Event​Bridge​Webhook​Subscription​Create​Payload

payload

Return type for `eventBridgeWebhookSubscriptionCreate` mutation.

### Fields

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

* webhook​Subscription

  [Webhook​Subscription](https://shopify.dev/docs/api/admin-graphql/latest/objects/WebhookSubscription)

  The webhook subscription that was created.

***

### Mutations with this payload

* [event​Bridge​Webhook​Subscription​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/eventBridgeWebhookSubscriptionCreate)

  mutation

  Deprecated

  * topic

    [Webhook​Subscription​Topic!](https://shopify.dev/docs/api/admin-graphql/latest/enums/WebhookSubscriptionTopic)

    required

    ### Arguments

    The type of event that triggers the webhook.

  * webhook​Subscription

    [Event​Bridge​Webhook​Subscription​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/EventBridgeWebhookSubscriptionInput)

    required

    Specifies the input fields for an EventBridge webhook subscription.

  ***

***

### Map

---
<a id="event-bridge-webhook-subscription-update-payload"></a>

## Event​Bridge​Webhook​Subscription​Update​Payload

payload

Return type for `eventBridgeWebhookSubscriptionUpdate` mutation.

### Fields

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

* webhook​Subscription

  [Webhook​Subscription](https://shopify.dev/docs/api/admin-graphql/latest/objects/WebhookSubscription)

  The webhook subscription that was updated.

***

### Mutations with this payload

* [event​Bridge​Webhook​Subscription​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/eventBridgeWebhookSubscriptionUpdate)

  mutation

  Deprecated

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the webhook subscription to update.

  * webhook​Subscription

    [Event​Bridge​Webhook​Subscription​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/EventBridgeWebhookSubscriptionInput)

    required

    Specifies the input fields for an EventBridge webhook subscription.

  ***

***

### Map

---
<a id="file-acknowledge-update-failed-payload"></a>

## File​Acknowledge​Update​Failed​Payload

payload

Return type for `fileAcknowledgeUpdateFailed` mutation.

### Fields

* files

  [\[File!\]](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/File)

  The updated file(s).

* user​Errors

  [\[Files​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FilesUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [file​Acknowledge​Update​Failed](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fileAcknowledgeUpdateFailed)

  mutation

  Acknowledges file update failure by resetting FAILED status to READY and clearing any media errors.

  * file​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    Specifies the file(s) to acknowledge the failed updates of.

  ***

***

### Map

#### Mutations with this payload

* [file​Acknowledge​Update​Failed](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fileAcknowledgeUpdateFailed)

---
<a id="file-create-payload"></a>

## File​Create​Payload

payload

Return type for `fileCreate` mutation.

### Fields

* files

  [\[File!\]](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/File)

  The newly created files.

* user​Errors

  [\[Files​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FilesUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [file​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fileCreate)

  mutation

  Creates file assets for a store from external URLs or files that were previously uploaded using the [`stagedUploadsCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/stageduploadscreate) mutation.

  Use the `fileCreate` mutation to add various types of media and documents to your store. These files are added to the [**Files** page](https://shopify.com/admin/settings/files) in the Shopify admin and can be referenced by other resources in your store.

  The `fileCreate` mutation supports multiple file types:

  * **Images**: Product photos, variant images, and general store imagery
  * **Videos**: Shopify-hosted videos for product demonstrations and marketing
  * **External videos**: YouTube and Vimeo videos for enhanced product experiences
  * **3D models**: Interactive 3D representations of products
  * **Generic files**: PDFs, documents, and other file types for store resources

  The mutation handles duplicate filenames using configurable resolution modes that automatically append UUIDs, replace existing files, or raise errors when conflicts occur.

  ***

  **Note:** Files are processed asynchronously. Check the \<a href="https://shopify.dev/docs/api/admin-graphql/latest/interfaces/File#fields-fileStatus">\<code>\<span class="PreventFireFoxApplyingGapToWBR">file\<wbr/>Status\</span>\</code>\</a> field to monitor processing completion. The maximum number of files that can be created in a single batch is 250.

  ***

  After creating files, you can make subsequent updates using the following mutations:

  * [`fileUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fileUpdate): Update file properties such as alt text or replace file contents while preserving the same URL.
  * [`fileDelete`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fileDelete): Remove files from your store when they are no longer needed.

  To list all files in your store, use the [`files`](https://shopify.dev/docs/api/admin-graphql/latest/queries/files) query.

  Learn how to manage [product media and file assets](https://shopify.dev/docs/apps/build/online-store/product-media) in your app.

  * files

    [\[File​Create​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FileCreateInput)

    required

    ### Arguments

    List of new files to be created.

  ***

***

### Map

#### Mutations with this payload

* [file​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fileCreate)

---
<a id="file-delete-payload"></a>

## File​Delete​Payload

payload

Return type for `fileDelete` mutation.

### Fields

* deleted​File​Ids

  [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The IDs of the deleted files.

* user​Errors

  [\[Files​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FilesUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [file​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fileDelete)

  mutation

  Deletes file assets that were previously uploaded to your store.

  Use the `fileDelete` mutation to permanently remove media and file assets from your store when they are no longer needed. This mutation handles the complete removal of files from both your store's file library and any associated references to products or other resources.

  The `fileDelete` mutation supports removal of multiple file types:

  * **Images**: Product photos, variant images, and general store imagery
  * **Videos**: Shopify-hosted videos for product demonstrations and marketing content
  * **External Videos**: YouTube and Vimeo videos linked to your products
  * **3D models**: Interactive 3D representations of products
  * **Generic files**: PDFs, documents, and other file types stored in your [**Files** page](https://shopify.com/admin/settings/files)

  When you delete files that are referenced by products, the mutation automatically removes those references and reorders any remaining media to maintain proper positioning. Product file references are database relationships managed through a media reference system, not just links in product descriptions. The Shopify admin provides a UI to manage these relationships, and when files are deleted, the system automatically cleans up all references. Files that are currently being processed by other operations are rejected to prevent conflicts.

  ***

  **Caution:** File deletion is permanent and can\&#39;t be undone. When you delete a file that\&#39;s being used in your store, it will immediately stop appearing wherever it was displayed. For example, if you delete a product image, that product will show a broken image or placeholder on your storefront and in the admin. The same applies to any other files linked from themes, blog posts, or pages. Before deleting files, you can use the \<a href="https://shopify.dev/api/admin-graphql/latest/queries/files">\<code>files\</code> query\</a> to list and review your store\&#39;s file assets.

  ***

  Learn how to manage [product media and file assets](https://shopify.dev/docs/apps/build/online-store/product-media) in your app.

  * file​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The IDs of the files to be deleted.

  ***

***

### Map

#### Mutations with this payload

* [file​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fileDelete)

---
<a id="file-update-payload"></a>

## File​Update​Payload

payload

Return type for `fileUpdate` mutation.

### Fields

* files

  [\[File!\]](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/File)

  The list of updated files.

* user​Errors

  [\[Files​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FilesUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [file​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fileUpdate)

  mutation

  Updates properties, content, and metadata associated with an existing file asset that has already been uploaded to Shopify.

  Use the `fileUpdate` mutation to modify various aspects of files already stored in your store. Files can be updated individually or in batches.

  The `fileUpdate` mutation supports updating multiple file properties:

  * **Alt text**: Update accessibility descriptions for images and other media.
  * **File content**: Replace image or generic file content while maintaining the same URL.
  * **Filename**: Modify file names (extension must match the original).
  * **Product references**: Add or remove associations between files and products. Removing file-product associations deletes the file from the product's media gallery and clears the image from any product variants that were using it.

  The mutation handles different file types with specific capabilities:

  * **Images**: Update preview images, original source, filename, and alt text.
  * **Generic files**: Update original source, filename, and alt text.
  * **Videos and 3D models**: Update alt text and product references.

  ***

  **Note:** Files must be in \<code>ready\</code> state before they can be updated. The mutation includes file locking to prevent conflicts during updates. You can\&#39;t simultaneously update both \<code>\<span class="PreventFireFoxApplyingGapToWBR">original\<wbr/>Source\</span>\</code> and \<code>\<span class="PreventFireFoxApplyingGapToWBR">preview\<wbr/>Image\<wbr/>Source\</span>\</code>.

  ***

  After updating files, you can use related mutations for additional file management:

  * [`fileCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fileCreate): Create new file assets from external URLs or staged uploads.
  * [`fileDelete`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fileDelete): Remove files from your store when they are no longer needed.

  Learn how to manage [product media and file assets](https://shopify.dev/docs/apps/build/online-store/product-media) in your app.

  * files

    [\[File​Update​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FileUpdateInput)

    required

    ### Arguments

    List of files to be updated.

  ***

***

### Map

#### Mutations with this payload

* [file​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fileUpdate)

---
<a id="flow-trigger-receive-payload"></a>

## Flow​Trigger​Receive​Payload

payload

Return type for `flowTriggerReceive` mutation.

### Fields

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [flow​Trigger​Receive](https://shopify.dev/docs/api/admin-graphql/latest/mutations/flowTriggerReceive)

  mutation

  Triggers any workflows that begin with the trigger specified in the request body. To learn more, refer to [*Create Shopify Flow triggers*](https://shopify.dev/apps/flow/triggers).

  * body

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    Deprecated

    ### Arguments

  * handle

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The handle of the trigger.

  * payload

    [JSON](https://shopify.dev/docs/api/admin-graphql/latest/scalars/JSON)

    The payload needed to run the Trigger.

  ***

***

### Map

#### Mutations with this payload

* [flow​Trigger​Receive](https://shopify.dev/docs/api/admin-graphql/latest/mutations/flowTriggerReceive)

---
<a id="fulfillment-cancel-payload"></a>

## Fulfillment​Cancel​Payload

payload

Return type for `fulfillmentCancel` mutation.

### Fields

* fulfillment

  [Fulfillment](https://shopify.dev/docs/api/admin-graphql/latest/objects/Fulfillment)

  The canceled fulfillment.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [fulfillment​Cancel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentCancel)

  mutation

  Cancels an existing [`Fulfillment`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Fulfillment) and reverses its effects on associated [`FulfillmentOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder) objects. When you cancel a fulfillment, the system creates new fulfillment orders for the cancelled items so they can be fulfilled again.

  The cancellation affects fulfillment orders differently based on their fulfillment status. If a fulfillment order was entirely fulfilled, then it automatically closes. If a fulfillment order is partially fulfilled, then the remaining quantities adjust to include the cancelled items. The system creates new fulfillment orders at the original [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location) when items are still stocked there, or at alternative locations based on the store's fulfillment priority settings.

  Learn more about [canceling fulfillments](https://shopify.dev/docs/apps/build/orders-fulfillment/fulfillment-service-apps/build-for-fulfillment-services#step-7-cancel-a-fulfillment).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the fulfillment to be canceled.

  ***

***

### Map

#### Mutations with this payload

* [fulfillment​Cancel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentCancel)

---
<a id="fulfillment-constraint-rule-create-payload"></a>

## Fulfillment​Constraint​Rule​Create​Payload

payload

Return type for `fulfillmentConstraintRuleCreate` mutation.

### Fields

* fulfillment​Constraint​Rule

  [Fulfillment​Constraint​Rule](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentConstraintRule)

  The newly created fulfillment constraint rule.

* user​Errors

  [\[Fulfillment​Constraint​Rule​Create​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentConstraintRuleCreateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [fulfillment​Constraint​Rule​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentConstraintRuleCreate)

  mutation

  Creates a fulfillment constraint rule and its metafield.

  * function​Id

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    Deprecated

    ### Arguments

  * function​Handle

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The handle of the function providing the constraint rule.

  * delivery​Method​Types

    [\[Delivery​Method​Type!\]!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DeliveryMethodType)

    required

    Associate the function with one or multiple delivery method types.

  * metafields

    [\[Metafield​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldInput)

    Default:\[]

    Metafields to associate to the fulfillment constraint rule.

  ***

***

### Map

#### Mutations with this payload

* [fulfillment​Constraint​Rule​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentConstraintRuleCreate)

---
<a id="fulfillment-constraint-rule-delete-payload"></a>

## Fulfillment​Constraint​Rule​Delete​Payload

payload

Return type for `fulfillmentConstraintRuleDelete` mutation.

### Fields

* success

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Whether or not the fulfillment constraint rule was successfully deleted.

* user​Errors

  [\[Fulfillment​Constraint​Rule​Delete​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentConstraintRuleDeleteUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [fulfillment​Constraint​Rule​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentConstraintRuleDelete)

  mutation

  Deletes a fulfillment constraint rule and its metafields.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    A globally-unique identifier for the fulfillment constraint rule.

  ***

***

### Map

#### Mutations with this payload

* [fulfillment​Constraint​Rule​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentConstraintRuleDelete)

---
<a id="fulfillment-constraint-rule-update-payload"></a>

## Fulfillment​Constraint​Rule​Update​Payload

payload

Return type for `fulfillmentConstraintRuleUpdate` mutation.

### Fields

* fulfillment​Constraint​Rule

  [Fulfillment​Constraint​Rule](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentConstraintRule)

  The updated fulfillment constraint rule.

* user​Errors

  [\[Fulfillment​Constraint​Rule​Update​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentConstraintRuleUpdateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [fulfillment​Constraint​Rule​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentConstraintRuleUpdate)

  mutation

  Update a fulfillment constraint rule.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    A globally-unique identifier for the fulfillment constraint rule.

  * delivery​Method​Types

    [\[Delivery​Method​Type!\]!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DeliveryMethodType)

    required

    Specifies the delivery method types to be updated. If not provided or providing an empty list will associate the function with all delivery methods.

  ***

***

### Map

#### Mutations with this payload

* [fulfillment​Constraint​Rule​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentConstraintRuleUpdate)

---
<a id="fulfillment-create-payload"></a>

## Fulfillment​Create​Payload

payload

Return type for `fulfillmentCreate` mutation.

### Fields

* fulfillment

  [Fulfillment](https://shopify.dev/docs/api/admin-graphql/latest/objects/Fulfillment)

  The created fulfillment.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [fulfillment​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentCreate)

  mutation

  Creates a fulfillment for one or more [`FulfillmentOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder) objects. The fulfillment orders are associated with the same [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) and are assigned to the same [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location).

  Use this mutation to mark items as fulfilled when they're ready to ship. You can specify tracking information, customer notification preferences, and which [`FulfillmentOrderLineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorderlineitem) objects to fulfill from each fulfillment order. If you don't specify line items, then the mutation fulfills all items in the fulfillment order.

  Learn more about [building fulfillment solutions](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps/build-fulfillment-solutions#create-a-fulfillment).

  * fulfillment

    [Fulfillment​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentInput)

    required

    ### Arguments

    The input fields used to create a fulfillment from fulfillment orders.

  * message

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    An optional message for the fulfillment request.

  ***

***

### Map

#### Mutations with this payload

* [fulfillment​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentCreate)

---
<a id="fulfillment-create-v2payload"></a>

## Fulfillment​Create​V2Payload

payload

Return type for `fulfillmentCreateV2` mutation.

### Fields

* fulfillment

  [Fulfillment](https://shopify.dev/docs/api/admin-graphql/latest/objects/Fulfillment)

  The created fulfillment.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [fulfillment​Create​V2](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentCreateV2)

  mutation

  Deprecated

  * fulfillment

    [Fulfillment​V2Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentV2Input)

    required

    ### Arguments

    The input fields used to create a fulfillment from fulfillment orders.

  * message

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    An optional message for the fulfillment request.

  ***

***

### Map

---
<a id="fulfillment-event-create-payload"></a>

## Fulfillment​Event​Create​Payload

payload

Return type for `fulfillmentEventCreate` mutation.

### Fields

* fulfillment​Event

  [Fulfillment​Event](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentEvent)

  The created fulfillment event.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [fulfillment​Event​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentEventCreate)

  mutation

  Creates a [`FulfillmentEvent`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentEvent) to track the shipment status and location of items that have shipped. Events capture status updates like carrier pickup, in transit, out for delivery, or delivered.

  Each event records the timestamp and current status of the [`Fulfillment`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Fulfillment). You can include optional details such as the location where the event occurred, estimated arrival time, and messages for tracking purposes.

  * fulfillment​Event

    [Fulfillment​Event​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentEventInput)

    required

    ### Arguments

    The input fields used to create a fulfillment event for a fulfillment.

  ***

***

### Map

#### Mutations with this payload

* [fulfillment​Event​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentEventCreate)

---
<a id="fulfillment-orders-reroute-payload"></a>

## Fulfillment​Orders​Reroute​Payload

payload

Return type for `fulfillmentOrdersReroute` mutation.

### Fields

* moved​Fulfillment​Orders

  [\[Fulfillment​Order!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder)

  The fulfillment orders which contains the moved line items.

* user​Errors

  [\[Fulfillment​Orders​Reroute​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrdersRerouteUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [fulfillment​Orders​Reroute](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrdersReroute)

  mutation

  Route the fulfillment orders to an alternative location, according to the shop's order routing settings. This involves:

  * Finding an alternate location that can fulfill the fulfillment orders.
  * Assigning the fulfillment orders to the new location.

  - fulfillment​Order​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The list of IDs of the fulfillment orders.

  - included​Location​Ids

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The list of IDs of the locations to include for rerouting. By default, all locations are included.

  - excluded​Location​Ids

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The list of IDs of the locations to exclude for rerouting. Excluded locations specified here take precedence over included locations provided through included\_location\_ids.

  ***

***

### Map

#### Mutations with this payload

* [fulfillment​Orders​Reroute](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrdersReroute)

---
<a id="fulfillment-orders-set-fulfillment-deadline-payload"></a>

## Fulfillment​Orders​Set​Fulfillment​Deadline​Payload

payload

Return type for `fulfillmentOrdersSetFulfillmentDeadline` mutation.

### Fields

* success

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Whether the fulfillment deadline was successfully set.

* user​Errors

  [\[Fulfillment​Orders​Set​Fulfillment​Deadline​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrdersSetFulfillmentDeadlineUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [fulfillment​Orders​Set​Fulfillment​Deadline](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrdersSetFulfillmentDeadline)

  mutation

  Sets the latest date and time by which the fulfillment orders need to be fulfilled.

  * fulfillment​Order​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The IDs of the fulfillment orders for which the deadline is being set.

  * fulfillment​Deadline

    [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    required

    The new fulfillment deadline of the fulfillment orders.

  ***

***

### Map

#### Mutations with this payload

* [fulfillment​Orders​Set​Fulfillment​Deadline](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrdersSetFulfillmentDeadline)

---
<a id="fulfillment-order-accept-cancellation-request-payload"></a>

## Fulfillment​Order​Accept​Cancellation​Request​Payload

payload

Return type for `fulfillmentOrderAcceptCancellationRequest` mutation.

### Fields

* fulfillment​Order

  [Fulfillment​Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder)

  The fulfillment order whose cancellation request was accepted.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [fulfillment​Order​Accept​Cancellation​Request](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderAcceptCancellationRequest)

  mutation

  Accept a cancellation request sent to a fulfillment service for a fulfillment order.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the fulfillment order associated with the cancellation request.

  * message

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    An optional reason for accepting the cancellation request.

  ***

***

### Map

#### Mutations with this payload

* [fulfillment​Order​Accept​Cancellation​Request](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderAcceptCancellationRequest)

---
<a id="fulfillment-order-accept-fulfillment-request-payload"></a>

## Fulfillment​Order​Accept​Fulfillment​Request​Payload

payload

Return type for `fulfillmentOrderAcceptFulfillmentRequest` mutation.

### Fields

* fulfillment​Order

  [Fulfillment​Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder)

  The fulfillment order whose fulfillment request was accepted.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [fulfillment​Order​Accept​Fulfillment​Request](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderAcceptFulfillmentRequest)

  mutation

  Accepts a fulfillment request that the fulfillment service has received for a [`FulfillmentOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder) which signals that the fulfillment service will process and fulfill the order. The fulfillment service can optionally provide a message to the merchant and an estimated shipped date when accepting the request.

  Learn more about [accepting fulfillment requests](https://shopify.dev/docs/apps/build/orders-fulfillment/fulfillment-service-apps/build-for-fulfillment-services#accept-a-fulfillment-request).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the fulfillment order associated with the fulfillment request.

  * message

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    An optional reason for accepting the fulfillment request.

  * estimated​Shipped​At

    [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    The estimated date and time when the fulfillment order will be shipped.

  ***

***

### Map

#### Mutations with this payload

* [fulfillment​Order​Accept​Fulfillment​Request](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderAcceptFulfillmentRequest)

---
<a id="fulfillment-order-cancel-payload"></a>

## Fulfillment​Order​Cancel​Payload

payload

Return type for `fulfillmentOrderCancel` mutation.

### Fields

* fulfillment​Order

  [Fulfillment​Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder)

  The fulfillment order that was marked as canceled.

* replacement​Fulfillment​Order

  [Fulfillment​Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder)

  The fulfillment order that was created to replace the canceled fulfillment order.

* user​Errors

  [\[Fulfillment​Order​Cancel​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderCancelError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [fulfillment​Order​Cancel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderCancel)

  mutation

  Cancels a [`FulfillmentOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder) and creates a replacement fulfillment order to represent the work left to be done. The original fulfillment order will be marked as closed.

  This mutation works when the fulfillment order has a `SUBMITTED` or `CANCELLATION_REQUESTED` status. For `SUBMITTED` orders, cancellation happens immediately because the fulfillment service hasn't accepted the request.

  ***

  **Note:** Orders that have had cancellation requested but the cancellation has yet to be accepted by the fulfillment service might still have work completed despite cancellation.

  ***

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the fulfillment order to mark as canceled.

  ***

***

### Map

#### Mutations with this payload

* [fulfillment​Order​Cancel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderCancel)

---
<a id="fulfillment-order-close-payload"></a>

## Fulfillment​Order​Close​Payload

payload

Return type for `fulfillmentOrderClose` mutation.

### Fields

* fulfillment​Order

  [Fulfillment​Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder)

  The fulfillment order that was marked as incomplete.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [fulfillment​Order​Close](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderClose)

  mutation

  Marks an in-progress fulfillment order as incomplete, indicating the fulfillment service is unable to ship any remaining items, and closes the fulfillment request.

  This mutation can only be called for fulfillment orders that meet the following criteria:

  * Assigned to a fulfillment service location,
  * The fulfillment request has been accepted,
  * The fulfillment order status is `IN_PROGRESS`.

  This mutation can only be called by the fulfillment service app that accepted the fulfillment request. Calling this mutation returns the control of the fulfillment order to the merchant, allowing them to move the fulfillment order line items to another location and fulfill from there, remove and refund the line items, or to request fulfillment from the same fulfillment service again.

  Closing a fulfillment order is explained in [the fulfillment service guide](https://shopify.dev/apps/build/orders-fulfillment/fulfillment-service-apps/build-for-fulfillment-services#step-7-optional-close-a-fulfillment-order).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the fulfillment order to mark as incomplete.

  * message

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    An optional reason for marking the fulfillment order as incomplete.

  ***

***

### Map

#### Mutations with this payload

* [fulfillment​Order​Close](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderClose)

---
<a id="fulfillment-order-hold-payload"></a>

## Fulfillment​Order​Hold​Payload

payload

Return type for `fulfillmentOrderHold` mutation.

### Fields

* fulfillment​Hold

  [Fulfillment​Hold](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentHold)

  The fulfillment hold created for the fulfillment order. Null if no hold was created.

* fulfillment​Order

  [Fulfillment​Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder)

  The fulfillment order on which a fulfillment hold was applied.

* remaining​Fulfillment​Order

  [Fulfillment​Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder)

  The remaining fulfillment order containing the line items to which the hold wasn't applied, if specific line items were specified to be placed on hold.

* user​Errors

  [\[Fulfillment​Order​Hold​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderHoldUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [fulfillment​Order​Hold](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderHold)

  mutation

  Applies a fulfillment hold on a fulfillment order.

  As of the [2025-01 API version](https://shopify.dev/changelog/apply-multiple-holds-to-a-single-fulfillment-order), the mutation can be successfully executed on fulfillment orders that are already on hold. To place multiple holds on a fulfillment order, apps need to supply the [handle](https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentHold#field-handle) field. Each app can place up to 10 active holds per fulfillment order. If an app attempts to place more than this, the mutation will return [a user error indicating that the limit has been reached](https://shopify.dev/api/admin-graphql/latest/enums/FulfillmentOrderHoldUserErrorCode#value-fulfillmentorderholdlimitreached). The app would need to release one of its existing holds before being able to apply a new one.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the fulfillment order on which a fulfillment hold is applied.

  * fulfillment​Hold

    [Fulfillment​Order​Hold​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentOrderHoldInput)

    required

    The details of the fulfillment hold applied on the fulfillment order.

  ***

***

### Map

#### Mutations with this payload

* [fulfillment​Order​Hold](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderHold)

---
<a id="fulfillment-order-line-items-prepared-for-pickup-payload"></a>

## Fulfillment​Order​Line​Items​Prepared​For​Pickup​Payload

payload

Return type for `fulfillmentOrderLineItemsPreparedForPickup` mutation.

### Fields

* user​Errors

  [\[Fulfillment​Order​Line​Items​Prepared​For​Pickup​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderLineItemsPreparedForPickupUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [fulfillment​Order​Line​Items​Prepared​For​Pickup](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderLineItemsPreparedForPickup)

  mutation

  Marks [fulfillment order line items](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderLineItem) as ready for customer pickup. When executed, this mutation automatically sends a "Ready For Pickup" notification to the customer.

  Use this mutation for local pickup orders after the items have been prepared and are available for the customer to collect. You can specify one or more [fulfillment order](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder) objects by providing the fulfillment order IDs in the [`lineItemsByFulfillmentOrder`](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PreparedFulfillmentOrderLineItemsInput) field. This allows you to mark fulfillment order line items from different fulfillment orders as ready for pickup.

  * input

    [Fulfillment​Order​Line​Items​Prepared​For​Pickup​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentOrderLineItemsPreparedForPickupInput)

    required

    ### Arguments

    The input for marking fulfillment order line items as ready for pickup.

  ***

***

### Map

#### Mutations with this payload

* [fulfillment​Order​Line​Items​Prepared​For​Pickup](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderLineItemsPreparedForPickup)

---
<a id="fulfillment-order-merge-payload"></a>

## Fulfillment​Order​Merge​Payload

payload

Return type for `fulfillmentOrderMerge` mutation.

### Fields

* fulfillment​Order​Merges

  [\[Fulfillment​Order​Merge​Result!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderMergeResult)

  The result of the fulfillment order merges.

* user​Errors

  [\[Fulfillment​Order​Merge​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderMergeUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [fulfillment​Order​Merge](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderMerge)

  mutation

  Merges a set or multiple sets of fulfillment orders together into one based on line item inputs and quantities.

  * fulfillment​Order​Merge​Inputs

    [\[Fulfillment​Order​Merge​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentOrderMergeInput)

    required

    ### Arguments

    One or more sets of fulfillment orders to be merged.

  ***

***

### Map

#### Mutations with this payload

* [fulfillment​Order​Merge](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderMerge)

---
<a id="fulfillment-order-move-payload"></a>

## Fulfillment​Order​Move​Payload

payload

Return type for `fulfillmentOrderMove` mutation.

### Fields

* moved​Fulfillment​Order

  [Fulfillment​Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder)

  The fulfillment order which now contains the moved line items and is assigned to the destination location.

  If the original fulfillment order doesn't have any line items which are fully or partially fulfilled, the original fulfillment order will be moved to the new location. However if this isn't the case, the moved fulfillment order will differ from the original one.

* original​Fulfillment​Order

  [Fulfillment​Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder)

  The final state of the original fulfillment order.

  As a result of the move operation, the original fulfillment order might be moved to the new location or remain in the original location. The original fulfillment order might have the same status or be closed.

* remaining​Fulfillment​Order

  [Fulfillment​Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder)

  This field is deprecated.

* user​Errors

  [\[Fulfillment​Order​Move​Fulfillment​Order​Move​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderMoveFulfillmentOrderMoveUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [fulfillment​Order​Move](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderMove)

  mutation

  Changes the location which is assigned to fulfill a number of unfulfilled fulfillment order line items.

  Moving a fulfillment order will fail in the following circumstances:

  * The fulfillment order is closed.
  * The fulfillment order has had progress manually reported. To move a fulfillment order that has had progress manually reported, the fulfillment order must first be marked as open resolving the ongoing progress state.
  * The destination location doesn't stock the requested inventory item.
  * The API client doesn't have the correct permissions.

  Line items which have already been fulfilled can't be re-assigned and will always remain assigned to the original location.

  You can't change the assigned location while a fulfillment order has a [request status](https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentOrderRequestStatus) of `SUBMITTED`, `ACCEPTED`, `CANCELLATION_REQUESTED`, or `CANCELLATION_REJECTED`. These request statuses mean that a fulfillment order is awaiting action by a fulfillment service and can't be re-assigned without first having the fulfillment service accept a cancellation request. This behavior is intended to prevent items from being fulfilled by multiple locations or fulfillment services.

  ### How re-assigning line items affects fulfillment orders

  **First scenario:** Re-assign all line items belonging to a fulfillment order to a new location.

  In this case, the [assignedLocation](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorder#field-fulfillmentorder-assignedlocation) of the original fulfillment order will be updated to the new location.

  **Second scenario:** Re-assign a subset of the line items belonging to a fulfillment order to a new location. You can specify a subset of line items using the `fulfillmentOrderLineItems` parameter (available as of the `2023-04` API version), or specify that the original fulfillment order contains line items which have already been fulfilled.

  If the new location is already assigned to another active fulfillment order, on the same order, then a new fulfillment order is created. The existing fulfillment order is closed and line items are recreated in a new fulfillment order.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the fulfillment order to be moved.

  * new​Location​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the location where the fulfillment order will be moved.

  * fulfillment​Order​Line​Items

    [\[Fulfillment​Order​Line​Item​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentOrderLineItemInput)

    The fulfillment order line items to be moved. If left blank, all unfulfilled line items belonging to the fulfillment order are moved.

  ***

***

### Map

#### Mutations with this payload

* [fulfillment​Order​Move](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderMove)

---
<a id="fulfillment-order-open-payload"></a>

## Fulfillment​Order​Open​Payload

payload

Return type for `fulfillmentOrderOpen` mutation.

### Fields

* fulfillment​Order

  [Fulfillment​Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder)

  The fulfillment order that was transitioned to open and is fulfillable.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [fulfillment​Order​Open](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderOpen)

  mutation

  Marks a scheduled fulfillment order as open.

  From API version 2026-01, this will also mark a fulfillment order as open when it is assigned to a merchant managed location and has had progress reported.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the fulfillment order to mark as open.

  ***

***

### Map

#### Mutations with this payload

* [fulfillment​Order​Open](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderOpen)

---
<a id="fulfillment-order-reject-cancellation-request-payload"></a>

## Fulfillment​Order​Reject​Cancellation​Request​Payload

payload

Return type for `fulfillmentOrderRejectCancellationRequest` mutation.

### Fields

* fulfillment​Order

  [Fulfillment​Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder)

  The fulfillment order whose cancellation request was rejected.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [fulfillment​Order​Reject​Cancellation​Request](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderRejectCancellationRequest)

  mutation

  Rejects a cancellation request sent to a fulfillment service for a fulfillment order.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the fulfillment order associated with the cancellation request.

  * message

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    An optional reason for rejecting the cancellation request.

  ***

***

### Map

#### Mutations with this payload

* [fulfillment​Order​Reject​Cancellation​Request](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderRejectCancellationRequest)

---
<a id="fulfillment-order-reject-fulfillment-request-payload"></a>

## Fulfillment​Order​Reject​Fulfillment​Request​Payload

payload

Return type for `fulfillmentOrderRejectFulfillmentRequest` mutation.

### Fields

* fulfillment​Order

  [Fulfillment​Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder)

  The fulfillment order whose fulfillment request was rejected.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [fulfillment​Order​Reject​Fulfillment​Request](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderRejectFulfillmentRequest)

  mutation

  Rejects a fulfillment request sent to a fulfillment service for a fulfillment order.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the fulfillment order associated with the fulfillment request.

  * reason

    [Fulfillment​Order​Rejection​Reason](https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentOrderRejectionReason)

    The reason for the fulfillment order rejection.

  * message

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    An optional reason for rejecting the fulfillment request.

  * line​Items

    [\[Incoming​Request​Line​Item​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/IncomingRequestLineItemInput)

    An optional array of line item rejection details. If none are provided, all line items will be assumed to be unfulfillable.

    **Note**: After the fulfillment request has been rejected, none of the line items will be able to be fulfilled. This field documents which line items specifically were unable to be fulfilled and why.

  ***

***

### Map

#### Mutations with this payload

* [fulfillment​Order​Reject​Fulfillment​Request](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderRejectFulfillmentRequest)

---
<a id="fulfillment-order-release-hold-payload"></a>

## Fulfillment​Order​Release​Hold​Payload

payload

Return type for `fulfillmentOrderReleaseHold` mutation.

### Fields

* fulfillment​Order

  [Fulfillment​Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder)

  The fulfillment order on which the hold was released.

* user​Errors

  [\[Fulfillment​Order​Release​Hold​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderReleaseHoldUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [fulfillment​Order​Release​Hold](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderReleaseHold)

  mutation

  Releases the fulfillment hold on a fulfillment order.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the fulfillment order for which to release the fulfillment hold.

  * hold​Ids

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The IDs of the fulfillment holds to release.\
    \
    Holds will only be released if they belong to the fulfillment order specified by the `id` argument.\
    \
    **NOTE:** If not supplied, all holds for the fulfillment order will be released. It is highly recommended that apps supply the ids of the holds that they intend to release. Releasing all holds on a fulfillment order will result in the fulfillment order being released prematurely and items being incorrectly fulfilled.

  * external​Id

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A configurable ID used to track the automation system releasing this hold.

  ***

***

### Map

#### Mutations with this payload

* [fulfillment​Order​Release​Hold](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderReleaseHold)

---
<a id="fulfillment-order-report-progress-payload"></a>

## Fulfillment​Order​Report​Progress​Payload

payload

Return type for `fulfillmentOrderReportProgress` mutation.

### Fields

* fulfillment​Order

  [Fulfillment​Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder)

  The fulfillment order on which a mark as in progress update has been specified.

* user​Errors

  [\[Fulfillment​Order​Report​Progress​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderReportProgressUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [fulfillment​Order​Report​Progress](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderReportProgress)

  mutation

  Reports the progress of an open or in-progress fulfillment order.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the fulfillment order for which the progress report is targetting.

  * progress​Report

    [Fulfillment​Order​Report​Progress​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentOrderReportProgressInput)

    The details of the progress report for the fulfillment order.

  ***

***

### Map

#### Mutations with this payload

* [fulfillment​Order​Report​Progress](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderReportProgress)

---
<a id="fulfillment-order-reschedule-payload"></a>

## Fulfillment​Order​Reschedule​Payload

payload

Return type for `fulfillmentOrderReschedule` mutation.

### Fields

* fulfillment​Order

  [Fulfillment​Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder)

  A fulfillment order with the rescheduled line items.

  Fulfillment orders may be merged if they have the same `fulfillAt` datetime.

  If the fulfillment order is merged then the resulting fulfillment order will be returned. Otherwise the original fulfillment order will be returned with an updated `fulfillAt` datetime.

* user​Errors

  [\[Fulfillment​Order​Reschedule​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderRescheduleUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [fulfillment​Order​Reschedule](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderReschedule)

  mutation

  Reschedules a scheduled fulfillment order.

  Updates the value of the `fulfillAt` field on a scheduled fulfillment order.

  The fulfillment order will be marked as ready for fulfillment at this date and time.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the fulfillment order to reschedule.

  * fulfill​At

    [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    required

    A future date and time when the fulfillment order will be marked as ready for fulfillment.

  ***

***

### Map

#### Mutations with this payload

* [fulfillment​Order​Reschedule](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderReschedule)

---
<a id="fulfillment-order-split-payload"></a>

## Fulfillment​Order​Split​Payload

payload

Return type for `fulfillmentOrderSplit` mutation.

### Fields

* fulfillment​Order​Splits

  [\[Fulfillment​Order​Split​Result!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderSplitResult)

  The result of the fulfillment order splits.

* user​Errors

  [\[Fulfillment​Order​Split​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderSplitUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [fulfillment​Order​Split](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderSplit)

  mutation

  Splits [`FulfillmentOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder) objects by moving the specified [`LineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem) objects and quantities into a new fulfillment order.

  If the original fulfillment order can't be split due to its current state, then the mutation creates a replacement fulfillment order instead.

  * fulfillment​Order​Splits

    [\[Fulfillment​Order​Split​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentOrderSplitInput)

    required

    ### Arguments

    The fulfillment orders, line items and quantities to be split into new fulfillment orders.

  ***

***

### Map

#### Mutations with this payload

* [fulfillment​Order​Split](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderSplit)

---
<a id="fulfillment-order-submit-cancellation-request-payload"></a>

## Fulfillment​Order​Submit​Cancellation​Request​Payload

payload

Return type for `fulfillmentOrderSubmitCancellationRequest` mutation.

### Fields

* fulfillment​Order

  [Fulfillment​Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder)

  The fulfillment order specified in the cancelation request.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [fulfillment​Order​Submit​Cancellation​Request](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderSubmitCancellationRequest)

  mutation

  Sends a cancellation request to the fulfillment service of a fulfillment order.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the fulfillment order associated with the cancellation request.

  * message

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    An optional reason for the cancellation request.

  ***

***

### Map

#### Mutations with this payload

* [fulfillment​Order​Submit​Cancellation​Request](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderSubmitCancellationRequest)

---
<a id="fulfillment-order-submit-fulfillment-request-payload"></a>

## Fulfillment​Order​Submit​Fulfillment​Request​Payload

payload

Return type for `fulfillmentOrderSubmitFulfillmentRequest` mutation.

### Fields

* original​Fulfillment​Order

  [Fulfillment​Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder)

  The original fulfillment order intended to request fulfillment for.

* submitted​Fulfillment​Order

  [Fulfillment​Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder)

  The fulfillment order that was submitted to the fulfillment service. This will be the same as the original fulfillment order field. The exception to this is partial fulfillment requests or fulfillment request for cancelled or incomplete fulfillment orders.

* unsubmitted​Fulfillment​Order

  [Fulfillment​Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder)

  This field will only be present for partial fulfillment requests. This will represent the new fulfillment order with the remaining line items not submitted to the fulfillment service.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [fulfillment​Order​Submit​Fulfillment​Request](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderSubmitFulfillmentRequest)

  mutation

  Sends a fulfillment request to the fulfillment service assigned to a [`FulfillmentOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder). The fulfillment service must then accept or reject the request before processing can begin.

  You can either request fulfillment for all line items or specify individual items with quantities for partial fulfillment. When requesting partial fulfillment, Shopify splits the original fulfillment order into two: one with the submitted items and another with the remaining unsubmitted items. Include an optional message to communicate special instructions to the fulfillment service, such as gift wrapping or handling requirements.

  Learn more about [managing fulfillment requests as a fulfillment service](https://shopify.dev/docs/apps/build/orders-fulfillment/fulfillment-service-apps/build-for-fulfillment-services#step-4-act-on-fulfillment-requests).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the fulfillment order associated with fulfillment request.

  * message

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    An optional message for the fulfillment request.

  * notify​Customer

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Whether the customer should be notified when fulfillments are created for this fulfillment order.

  * fulfillment​Order​Line​Items

    [\[Fulfillment​Order​Line​Item​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentOrderLineItemInput)

    The fulfillment order line items to be requested for fulfillment. If left blank, all line items of the fulfillment order are requested for fulfillment.

  ***

***

### Map

#### Mutations with this payload

* [fulfillment​Order​Submit​Fulfillment​Request](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderSubmitFulfillmentRequest)

---
<a id="fulfillment-service-create-payload"></a>

## Fulfillment​Service​Create​Payload

payload

Return type for `fulfillmentServiceCreate` mutation.

### Fields

* fulfillment​Service

  [Fulfillment​Service](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentService)

  The created fulfillment service.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [fulfillment​Service​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentServiceCreate)

  mutation

  Creates a fulfillment service.

  ## Fulfillment service location

  When creating a fulfillment service, a new location will be automatically created on the shop and will be associated with this fulfillment service. This location will be named after the fulfillment service and inherit the shop's address.

  If you are using API version `2023-10` or later, and you need to specify custom attributes for the fulfillment service location (for example, to change its address to a country different from the shop's country), use the [LocationEdit](https://shopify.dev/api/admin-graphql/latest/mutations/locationEdit) mutation after creating the fulfillment service.

  * name

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    The name of the fulfillment service.

  * callback​Url

    [URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

    The URL to send requests for the fulfillment service.

    If `callbackUrl` is provided:

    * Shopify queries the `callback_url/fetch_tracking_numbers` endpoint to retrieve tracking numbers for orders, if `trackingSupport` is set to `true`.
    * Shopify queries the `callback_url/fetch_stock` endpoint to retrieve inventory levels, if `inventoryManagement` is set to `true`.
    * Shopify uses the `callback_url/fulfillment_order_notification` endpoint to send [fulfillment and cancellation requests](https://shopify.dev/apps/fulfillment/fulfillment-service-apps/manage-fulfillments#step-2-receive-fulfillment-requests-and-cancellations).

    Otherwise, if no `callbackUrl` is provided you need to submit this information via the api:

    * For submitting tracking info and handling fulfillment requests, see our docs on [building for fulfillment services](https://shopify.dev/apps/build/orders-fulfillment/fulfillment-service-apps/build-for-fulfillment-services).
    * For managing inventory quantities, see our docs on [managing inventory quantities and states](https://shopify.dev/apps/build/orders-fulfillment/inventory-management-apps/manage-quantities-states).

  * tracking​Support

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Whether the fulfillment service provides tracking numbers for packages.

    If `callbackUrl` is provided ([optional as of API version "2026-01"](https://shopify.dev/changelog/fulfillment-service-callback-url-is-now-optional)), Shopify will periodically fetch tracking numbers via the callback endpoint.

    If no `callbackUrl` is provided you need to submit this information via the api, see our docs on [building for fulfillment services](https://shopify.dev/apps/build/orders-fulfillment/fulfillment-service-apps/build-for-fulfillment-services).

  * fulfillment​Orders​Opt​In

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    DeprecatedDefault:true

  * inventory​Management

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Whether the fulfillment service manages product inventory and provides updates to Shopify.

    If `callbackUrl` is provided ([optional as of API version "2026-01"](https://shopify.dev/changelog/fulfillment-service-callback-url-is-now-optional)), Shopify will periodically fetch inventory levels via the callback endpoint.

    If no `callbackUrl` is provided you need to submit this information via the api, see our docs on [managing inventory quantities and states](https://shopify.dev/apps/build/orders-fulfillment/inventory-management-apps/manage-quantities-states).

  * requires​Shipping​Method

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:true

    Whether the fulfillment service requires products to be physically shipped.

  ***

***

### Map

#### Mutations with this payload

* [fulfillment​Service​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentServiceCreate)

---
<a id="fulfillment-service-delete-payload"></a>

## Fulfillment​Service​Delete​Payload

payload

Return type for `fulfillmentServiceDelete` mutation.

### Fields

* deleted​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the deleted fulfillment service.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [fulfillment​Service​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentServiceDelete)

  mutation

  Deletes a fulfillment service.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the fulfillment service to delete.

  * destination​Location​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of an active merchant managed location where inventory and commitments will be relocated after the fulfillment service is deleted.

    Inventory will only be transferred if the [`TRANSFER`](https://shopify.dev/api/admin-graphql/latest/enums/FulfillmentServiceDeleteInventoryAction#value-transfer) inventory action has been chosen.

  * inventory​Action

    [Fulfillment​Service​Delete​Inventory​Action](https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentServiceDeleteInventoryAction)

    Default:TRANSFER

    The action to take with the location after the fulfillment service is deleted.

  ***

***

### Map

#### Mutations with this payload

* [fulfillment​Service​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentServiceDelete)

---
<a id="fulfillment-service-update-payload"></a>

## Fulfillment​Service​Update​Payload

payload

Return type for `fulfillmentServiceUpdate` mutation.

### Fields

* fulfillment​Service

  [Fulfillment​Service](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentService)

  The updated fulfillment service.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [fulfillment​Service​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentServiceUpdate)

  mutation

  Updates the [`FulfillmentService`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentService) configuration, including its name, callback URL, and operational settings.

  The mutation modifies how the fulfillment service handles inventory tracking, shipping requirements, and package tracking support.

  ***

  **Note:** To update the physical address or other location details of the fulfillment service, use the \<a href="https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationEdit">\<code>\<span class="PreventFireFoxApplyingGapToWBR">location\<wbr/>Edit\</span>\</code>\</a> mutation instead.

  ***

  Learn more about [editing fulfillment service locations](https://shopify.dev/docs/apps/build/orders-fulfillment/fulfillment-service-apps/build-for-fulfillment-services#step-2-edit-locations).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The id of the fulfillment service.

  * name

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The name of the fulfillment service.

  * callback​Url

    [URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

    The URL to send requests for the fulfillment service.

    If `callbackUrl` is provided:

    * Shopify queries the `callback_url/fetch_tracking_numbers` endpoint to retrieve tracking numbers for orders, if `trackingSupport` is set to `true`.
    * Shopify queries the `callback_url/fetch_stock` endpoint to retrieve inventory levels, if `inventoryManagement` is set to `true`.
    * Shopify uses the `callback_url/fulfillment_order_notification` endpoint to send [fulfillment and cancellation requests](https://shopify.dev/apps/fulfillment/fulfillment-service-apps/manage-fulfillments#step-2-receive-fulfillment-requests-and-cancellations).

    Otherwise, if no `callbackUrl` is provided you need to submit this information via the api:

    * For submitting tracking info and handling fulfillment requests, see our docs on [building for fulfillment services](https://shopify.dev/apps/build/orders-fulfillment/fulfillment-service-apps/build-for-fulfillment-services).
    * For managing inventory quantities, see our docs on [managing inventory quantities and states](https://shopify.dev/apps/build/orders-fulfillment/inventory-management-apps/manage-quantities-states).

  * tracking​Support

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Whether the fulfillment service provides tracking numbers for packages.

    If `callbackUrl` is provided, Shopify will periodically fetch tracking numbers via the callback endpoint.

    If no `callbackUrl` is provided you need to submit this information via the api, see our docs on [building for fulfillment services](https://shopify.dev/apps/build/orders-fulfillment/fulfillment-service-apps/build-for-fulfillment-services).

  * fulfillment​Orders​Opt​In

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Deprecated

  * inventory​Management

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Whether the fulfillment service manages product inventory and provides updates to Shopify.

    If `callbackUrl` is provided, Shopify will periodically fetch inventory levels via the callback endpoint.

    If no `callbackUrl` is provided you need to submit this information via the api, see our docs on [managing inventory quantities and states](https://shopify.dev/apps/build/orders-fulfillment/inventory-management-apps/manage-quantities-states).

  * requires​Shipping​Method

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:true

    Whether the fulfillment service requires products to be physically shipped.

  ***

***

### Map

#### Mutations with this payload

* [fulfillment​Service​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentServiceUpdate)

---
<a id="fulfillment-tracking-info-update-payload"></a>

## Fulfillment​Tracking​Info​Update​Payload

payload

Return type for `fulfillmentTrackingInfoUpdate` mutation.

### Fields

* fulfillment

  [Fulfillment](https://shopify.dev/docs/api/admin-graphql/latest/objects/Fulfillment)

  The updated fulfillment with tracking information.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [fulfillment​Tracking​Info​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentTrackingInfoUpdate)

  mutation

  Updates tracking information for a fulfillment, including the carrier name, tracking numbers, and tracking URLs. You can provide either single or multiple tracking numbers for shipments with multiple packages.

  The mutation accepts a [`FulfillmentTrackingInput`](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentTrackingInput) that supports both single tracking (using [`number`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentTrackingInfoUpdate#arguments-trackingInfoInput.fields.number) and [`url`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentTrackingInfoUpdate#arguments-trackingInfoInput.fields.url) fields) and multi-package tracking (using [`numbers`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentTrackingInfoUpdate#arguments-trackingInfoInput.fields.numbers) and [`urls`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentTrackingInfoUpdate#arguments-trackingInfoInput.fields.urls) fields). When you specify a [supported carrier name](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentTrackingInfo#supported-tracking-companies), Shopify automatically generates tracking URLs for the provided tracking numbers.

  You can optionally notify customers about tracking updates with the [`notifyCustomer`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentTrackingInfoUpdate#arguments-notifyCustomer) argument. When enabled, customers receive shipping update emails with tracking details and receive notifications about future updates to the fulfillment.

  Learn more about [enabling tracking support](https://shopify.dev/docs/apps/build/orders-fulfillment/fulfillment-service-apps/build-for-fulfillment-services#step-9-optional-enable-tracking-support) for fulfillment services.

  * fulfillment​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the fulfillment.

  * tracking​Info​Input

    [Fulfillment​Tracking​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentTrackingInput)

    required

    The tracking input for the mutation, including tracking URL, number, and company.

  * notify​Customer

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Whether the customer will be notified of this update and future updates for the fulfillment. If this field is left blank, then notifications won't be sent to the customer when the fulfillment is updated.

  ***

***

### Map

#### Mutations with this payload

* [fulfillment​Tracking​Info​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentTrackingInfoUpdate)

---
<a id="fulfillment-tracking-info-update-v2payload"></a>

## Fulfillment​Tracking​Info​Update​V2Payload

payload

Return type for `fulfillmentTrackingInfoUpdateV2` mutation.

### Fields

* fulfillment

  [Fulfillment](https://shopify.dev/docs/api/admin-graphql/latest/objects/Fulfillment)

  The updated fulfillment with tracking information.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [fulfillment​Tracking​Info​Update​V2](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentTrackingInfoUpdateV2)

  mutation

  Deprecated

  * fulfillment​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the fulfillment.

  * tracking​Info​Input

    [Fulfillment​Tracking​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentTrackingInput)

    required

    The tracking input for the mutation, including tracking URL, number, and company.

  * notify​Customer

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Whether the customer will be notified of this update and future updates for the fulfillment. If this field is left blank, then notifications won't be sent to the customer when the fulfillment is updated.

  ***

***

### Map

---
<a id="gift-card-create-payload"></a>

## Gift​Card​Create​Payload

payload

Return type for `giftCardCreate` mutation.

### Fields

* gift​Card

  [Gift​Card](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCard)

  The created gift card.

* gift​Card​Code

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The created gift card's code.

* user​Errors

  [\[Gift​Card​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [gift​Card​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftCardCreate)

  mutation

  Creates a new [`GiftCard`](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCard) with a specified initial value. You can assign the gift card to a [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) or create it without assignment for manual distribution.

  You can customize the gift card with an optional code, expiration date, and internal note. If you don't provide a code, the system generates a random 16 character alphanumeric code. The mutation also supports scheduling gift card notifications to recipients, with a personalized message, through the [`recipientAttributes`](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/GiftCardCreateInput#fields-recipientAttributes) field on the `GiftCardCreateInput` input object.

  * input

    [Gift​Card​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/GiftCardCreateInput)

    required

    ### Arguments

    The input fields to create a gift card.

  ***

***

### Map

#### Mutations with this payload

* [gift​Card​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftCardCreate)

---
<a id="gift-card-credit-payload"></a>

## Gift​Card​Credit​Payload

payload

Return type for `giftCardCredit` mutation.

### Fields

* gift​Card​Credit​Transaction

  [Gift​Card​Credit​Transaction](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardCreditTransaction)

  The gift card credit transaction that was created.

* user​Errors

  [\[Gift​Card​Transaction​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardTransactionUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [gift​Card​Credit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftCardCredit)

  mutation

  Credit a gift card.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the gift card to be credited.

  * credit​Input

    [Gift​Card​Credit​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/GiftCardCreditInput)

    required

    The input fields to credit a gift card.

  ***

***

### Map

#### Mutations with this payload

* [gift​Card​Credit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftCardCredit)

---
<a id="gift-card-deactivate-payload"></a>

## Gift​Card​Deactivate​Payload

payload

Return type for `giftCardDeactivate` mutation.

### Fields

* gift​Card

  [Gift​Card](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCard)

  The deactivated gift card.

* user​Errors

  [\[Gift​Card​Deactivate​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardDeactivateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [gift​Card​Deactivate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftCardDeactivate)

  mutation

  Deactivate a gift card. A deactivated gift card cannot be used by a customer. A deactivated gift card cannot be re-enabled.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the gift card to deactivate.

  ***

***

### Map

#### Mutations with this payload

* [gift​Card​Deactivate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftCardDeactivate)

---
<a id="gift-card-debit-payload"></a>

## Gift​Card​Debit​Payload

payload

Return type for `giftCardDebit` mutation.

### Fields

* gift​Card​Debit​Transaction

  [Gift​Card​Debit​Transaction](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardDebitTransaction)

  The gift card debit transaction that was created.

* user​Errors

  [\[Gift​Card​Transaction​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardTransactionUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [gift​Card​Debit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftCardDebit)

  mutation

  Debit a gift card.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the gift card to be debited.

  * debit​Input

    [Gift​Card​Debit​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/GiftCardDebitInput)

    required

    The input fields to debit a gift card.

  ***

***

### Map

#### Mutations with this payload

* [gift​Card​Debit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftCardDebit)

---
<a id="gift-card-send-notification-to-customer-payload"></a>

## Gift​Card​Send​Notification​To​Customer​Payload

payload

Return type for `giftCardSendNotificationToCustomer` mutation.

### Fields

* gift​Card

  [Gift​Card](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCard)

  The gift card that was sent.

* user​Errors

  [\[Gift​Card​Send​Notification​To​Customer​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardSendNotificationToCustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [gift​Card​Send​Notification​To​Customer](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftCardSendNotificationToCustomer)

  mutation

  Send notification to the customer of a gift card.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the gift card to send.

  ***

***

### Map

#### Mutations with this payload

* [gift​Card​Send​Notification​To​Customer](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftCardSendNotificationToCustomer)

---
<a id="gift-card-send-notification-to-recipient-payload"></a>

## Gift​Card​Send​Notification​To​Recipient​Payload

payload

Return type for `giftCardSendNotificationToRecipient` mutation.

### Fields

* gift​Card

  [Gift​Card](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCard)

  The gift card that was sent.

* user​Errors

  [\[Gift​Card​Send​Notification​To​Recipient​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardSendNotificationToRecipientUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [gift​Card​Send​Notification​To​Recipient](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftCardSendNotificationToRecipient)

  mutation

  Send notification to the recipient of a gift card.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the gift card to send.

  ***

***

### Map

#### Mutations with this payload

* [gift​Card​Send​Notification​To​Recipient](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftCardSendNotificationToRecipient)

---
<a id="gift-card-update-payload"></a>

## Gift​Card​Update​Payload

payload

Return type for `giftCardUpdate` mutation.

### Fields

* gift​Card

  [Gift​Card](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCard)

  The updated gift card.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [gift​Card​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftCardUpdate)

  mutation

  Update a gift card.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the gift card to be updated.

  * input

    [Gift​Card​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/GiftCardUpdateInput)

    required

    The input fields to update the gift card.

  ***

***

### Map

#### Mutations with this payload

* [gift​Card​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftCardUpdate)

---
<a id="inventory-activate-payload"></a>

## Inventory​Activate​Payload

payload

Return type for `inventoryActivate` mutation.

### Fields

* inventory​Level

  [Inventory​Level](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryLevel)

  The inventory level that was activated.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [inventory​Activate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryActivate)

  mutation

  Activates an inventory item at a [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location) by creating an [`InventoryLevel`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryLevel) that tracks stock quantities. This enables you to manage inventory for a [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) at the specified location.

  When you activate an inventory item, you can set its initial quantities. The [`available`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryActivate#arguments-available) argument sets the quantity that's available for sale. [`onHand`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryActivate#arguments-onHand) argument sets the total physical quantity at the location. If you don't specify quantities, then `available` and `onHand` default to zero.

  ***

  **Caution:** As of version \<code>2026-01\</code>, this mutation supports an optional idempotency key using the \<code>@idempotent\</code> directive. As of version \<code>2026-04\</code>, the idempotency key is required and must be provided using the \<code>@idempotent\</code> directive. For more information, see the \<a href="https://shopify.dev/docs/api/usage/idempotent-requests">idempotency documentation\</a>.

  ***

  Learn more about [managing inventory quantities and states](https://shopify.dev/docs/apps/build/orders-fulfillment/inventory-management-apps/manage-quantities-states).

  * inventory​Item​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the inventory item to activate.

  * location​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the location of the inventory item being activated.

  * available

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The initial available quantity of the inventory item being activated at the location.

  * on​Hand

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The initial on\_hand quantity of the inventory item being activated at the location.

  * stock​At​Legacy​Location

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Allow activation at or away from fulfillment service location with sku sharing off. This will deactivate inventory at all other locations.

  ***

***

### Map

#### Mutations with this payload

* [inventory​Activate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryActivate)

---
<a id="inventory-adjust-quantities-payload"></a>

## Inventory​Adjust​Quantities​Payload

payload

Return type for `inventoryAdjustQuantities` mutation.

### Fields

* inventory​Adjustment​Group

  [Inventory​Adjustment​Group](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryAdjustmentGroup)

  The group of changes made by the operation.

* user​Errors

  [\[Inventory​Adjust​Quantities​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryAdjustQuantitiesUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [inventory​Adjust​Quantities](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryAdjustQuantities)

  mutation

  Adjusts quantities for inventory items by applying incremental changes at specific locations. Each adjustment modifies the quantity by a delta value rather than setting an absolute amount.

  The mutation tracks adjustments with a reason code and optional reference URI for audit trails. Returns an [`InventoryAdjustmentGroup`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryAdjustmentGroup) that records all changes made in the operation.

  Learn more about [managing inventory quantities and states](https://shopify.dev/docs/apps/build/orders-fulfillment/inventory-management-apps/manage-quantities-states#adjust-inventory-quantities).

  ***

  **Caution:** As of version \<code>2026-01\</code>, this mutation supports an optional idempotency key using the \<code>@idempotent\</code> directive. As of version \<code>2026-04\</code>, the idempotency key is required and must be provided using the \<code>@idempotent\</code> directive. For more information, see the \<a href="https://shopify.dev/docs/api/usage/idempotent-requests">idempotency documentation\</a>.

  ***

  * input

    [Inventory​Adjust​Quantities​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryAdjustQuantitiesInput)

    required

    ### Arguments

    The information required to adjust inventory quantities.

  ***

***

### Map

#### Mutations with this payload

* [inventory​Adjust​Quantities](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryAdjustQuantities)

---
<a id="inventory-bulk-toggle-activation-payload"></a>

## Inventory​Bulk​Toggle​Activation​Payload

payload

Return type for `inventoryBulkToggleActivation` mutation.

### Fields

* inventory​Item

  [Inventory​Item](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem)

  The inventory item that was updated.

* inventory​Levels

  [\[Inventory​Level!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryLevel)

  The activated inventory levels.

* user​Errors

  [\[Inventory​Bulk​Toggle​Activation​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryBulkToggleActivationUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [inventory​Bulk​Toggle​Activation](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryBulkToggleActivation)

  mutation

  Activates or deactivates an inventory item at multiple locations. When you activate an [`InventoryItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem) at a [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location), that location can stock and track quantities for that item. When you deactivate an inventory item at a location, the inventory item is no longer stocked at that location.

  The mutation accepts an inventory item ID and a list of location-specific activation settings. It returns the updated inventory item and any activated [`InventoryLevel`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryLevel) objects.

  Learn more about [managing inventory quantities and states](https://shopify.dev/docs/apps/build/orders-fulfillment/inventory-management-apps/manage-quantities-states#inventory-object-relationships).

  * inventory​Item​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the inventory item to modify the activation status locations for.

  * inventory​Item​Updates

    [\[Inventory​Bulk​Toggle​Activation​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryBulkToggleActivationInput)

    required

    A list of pairs of locations and activate status to update for the specified inventory item.

  ***

***

### Map

#### Mutations with this payload

* [inventory​Bulk​Toggle​Activation](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryBulkToggleActivation)

---
<a id="inventory-deactivate-payload"></a>

## Inventory​Deactivate​Payload

payload

Return type for `inventoryDeactivate` mutation.

### Fields

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [inventory​Deactivate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryDeactivate)

  mutation

  Removes an inventory item's quantities from a location, and turns off inventory at the location.

  * inventory​Level​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the inventory level to deactivate.

  ***

***

### Map

#### Mutations with this payload

* [inventory​Deactivate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryDeactivate)

---
<a id="inventory-item-update-payload"></a>

## Inventory​Item​Update​Payload

payload

Return type for `inventoryItemUpdate` mutation.

### Fields

* inventory​Item

  [Inventory​Item](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem)

  The inventory item that was updated.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [inventory​Item​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryItemUpdate)

  mutation

  Updates an [`InventoryItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem)'s properties including whether inventory is tracked, cost, SKU, and whether shipping is required. Inventory items represent the goods available to be shipped to customers.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the inventory item to update.

  * input

    [Inventory​Item​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryItemInput)

    required

    The input fields that update an [`inventoryItem`](https://shopify.dev/api/admin-graphql/latest/queries/inventoryitem).

  ***

***

### Map

#### Mutations with this payload

* [inventory​Item​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryItemUpdate)

---
<a id="inventory-move-quantities-payload"></a>

## Inventory​Move​Quantities​Payload

payload

Return type for `inventoryMoveQuantities` mutation.

### Fields

* inventory​Adjustment​Group

  [Inventory​Adjustment​Group](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryAdjustmentGroup)

  The group of changes made by the operation.

* user​Errors

  [\[Inventory​Move​Quantities​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryMoveQuantitiesUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [inventory​Move​Quantities](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryMoveQuantities)

  mutation

  Moves inventory quantities for a single inventory item between different states at a single location. Use this mutation to reallocate inventory across quantity states without moving it between locations.

  Each change specifies the quantity to move, the source state and location, and the destination state and location. The mutation returns an [`InventoryAdjustmentGroup`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryAdjustmentGroup) that tracks all changes made in a single operation, providing an audit trail with the reason and reference document URI.

  ***

  **Caution:** As of version \<code>2026-01\</code>, this mutation supports an optional idempotency key using the \<code>@idempotent\</code> directive. As of version \<code>2026-04\</code>, the idempotency key is required and must be provided using the \<code>@idempotent\</code> directive. For more information, see the \<a href="https://shopify.dev/docs/api/usage/idempotent-requests">idempotency documentation\</a>.

  ***

  * input

    [Inventory​Move​Quantities​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryMoveQuantitiesInput)

    required

    ### Arguments

    The information required to move inventory quantities.

  ***

***

### Map

#### Mutations with this payload

* [inventory​Move​Quantities](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryMoveQuantities)

---
<a id="inventory-set-on-hand-quantities-payload"></a>

## Inventory​Set​On​Hand​Quantities​Payload

payload

Return type for `inventorySetOnHandQuantities` mutation.

### Fields

* inventory​Adjustment​Group

  [Inventory​Adjustment​Group](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryAdjustmentGroup)

  The group of changes made by the operation.

* user​Errors

  [\[Inventory​Set​On​Hand​Quantities​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventorySetOnHandQuantitiesUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [inventory​Set​On​Hand​Quantities](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorySetOnHandQuantities)

  mutation

  Deprecated

  * input

    [Inventory​Set​On​Hand​Quantities​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventorySetOnHandQuantitiesInput)

    required

    ### Arguments

    The information required to set inventory on hand quantities.

  ***

***

### Map

---
<a id="inventory-set-quantities-payload"></a>

## Inventory​Set​Quantities​Payload

payload

Return type for `inventorySetQuantities` mutation.

### Fields

* inventory​Adjustment​Group

  [Inventory​Adjustment​Group](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryAdjustmentGroup)

  The group of changes made by the operation.

* user​Errors

  [\[Inventory​Set​Quantities​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventorySetQuantitiesUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [inventory​Set​Quantities](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorySetQuantities)

  mutation

  Set quantities of specified name using absolute values. This mutation supports compare-and-set functionality to handle concurrent requests properly. If `ignoreCompareQuantity` is not set to true, the mutation will only update the quantity if the persisted quantity matches the `compareQuantity` value. If the `compareQuantity` value does not match the persisted value, the mutation will return an error. In order to opt out of the `compareQuantity` check, the `ignoreCompareQuantity` argument can be set to true.

  ***

  **Note:** Only use this mutation if calling on behalf of a system that acts as the source of truth for inventory quantities, otherwise please consider using the \<a href="https://shopify.dev/api/admin-graphql/latest/mutations/inventoryAdjustQuantities">inventoryAdjustQuantities\</a> mutation.\</p> \<p>Opting out of the \<code>\<span class="PreventFireFoxApplyingGapToWBR">compare\<wbr/>Quantity\</span>\</code> check can lead to inaccurate inventory quantities if multiple requests are made concurrently. It is recommended to always include the \<code>\<span class="PreventFireFoxApplyingGapToWBR">compare\<wbr/>Quantity\</span>\</code> value to ensure the accuracy of the inventory quantities and to opt out of the check using \<code>\<span class="PreventFireFoxApplyingGapToWBR">ignore\<wbr/>Compare\<wbr/>Quantity\</span>\</code> only when necessary.

  ***

  ***

  **Caution:** As of 2026-01, this mutation supports an optional idempotency key using the \<code>@idempotent\</code> directive. As of 2026-04, the idempotency key is required and must be provided using the \<code>@idempotent\</code> directive. For more information, see the \<a href="https://shopify.dev/docs/api/usage/idempotent-requests">idempotency documentation\</a>.

  ***

  * input

    [Inventory​Set​Quantities​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventorySetQuantitiesInput)

    required

    ### Arguments

    The information required to set inventory quantities.

  ***

***

### Map

#### Mutations with this payload

* [inventory​Set​Quantities](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorySetQuantities)

---
<a id="inventory-set-scheduled-changes-payload"></a>

## Inventory​Set​Scheduled​Changes​Payload

payload

Return type for `inventorySetScheduledChanges` mutation.

### Fields

* scheduled​Changes

  [\[Inventory​Scheduled​Change!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryScheduledChange)

  The scheduled changes that were created.

* user​Errors

  [\[Inventory​Set​Scheduled​Changes​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventorySetScheduledChangesUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [inventory​Set​Scheduled​Changes](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorySetScheduledChanges)

  mutation

  Deprecated (removal date set)

  * input

    [Inventory​Set​Scheduled​Changes​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventorySetScheduledChangesInput)

    required

    ### Arguments

    The input fields for setting up scheduled changes of inventory items.

  ***

***

### Map

---
<a id="inventory-shipment-add-items-payload"></a>

## Inventory​Shipment​Add​Items​Payload

payload

Return type for `inventoryShipmentAddItems` mutation.

### Fields

* added​Items

  [\[Inventory​Shipment​Line​Item!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentLineItem)

  The list of added line items.

* inventory​Shipment

  [Inventory​Shipment](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipment)

  The inventory shipment with the added items.

* user​Errors

  [\[Inventory​Shipment​Add​Items​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentAddItemsUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [inventory​Shipment​Add​Items](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentAddItems)

  mutation

  Adds items to an inventory shipment.

  ***

  **Caution:** As of 2026-01, this mutation supports an optional idempotency key using the \<code>@idempotent\</code> directive. As of 2026-04, the idempotency key is required and must be provided using the \<code>@idempotent\</code> directive. For more information, see the \<a href="https://shopify.dev/docs/api/usage/idempotent-requests">idempotency documentation\</a>.

  ***

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the inventory shipment to modify.

  * line​Items

    [\[Inventory​Shipment​Line​Item​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryShipmentLineItemInput)

    required

    The list of line items to add to the inventory shipment.

  ***

***

### Map

#### Mutations with this payload

* [inventory​Shipment​Add​Items](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentAddItems)

---
<a id="inventory-shipment-create-in-transit-payload"></a>

## Inventory​Shipment​Create​In​Transit​Payload

payload

Return type for `inventoryShipmentCreateInTransit` mutation.

### Fields

* inventory​Shipment

  [Inventory​Shipment](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipment)

  The created inventory shipment.

* user​Errors

  [\[Inventory​Shipment​Create​In​Transit​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentCreateInTransitUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [inventory​Shipment​Create​In​Transit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentCreateInTransit)

  mutation

  Adds an in-transit shipment to an inventory transfer.

  ***

  **Caution:** As of 2026-01, this mutation supports an optional idempotency key using the \<code>@idempotent\</code> directive. As of 2026-04, the idempotency key is required and must be provided using the \<code>@idempotent\</code> directive. For more information, see the \<a href="https://shopify.dev/docs/api/usage/idempotent-requests">idempotency documentation\</a>.

  ***

  * input

    [Inventory​Shipment​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryShipmentCreateInput)

    required

    ### Arguments

    The input fields for the inventory shipment.

  ***

***

### Map

#### Mutations with this payload

* [inventory​Shipment​Create​In​Transit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentCreateInTransit)

---
<a id="inventory-shipment-create-payload"></a>

## Inventory​Shipment​Create​Payload

payload

Return type for `inventoryShipmentCreate` mutation.

### Fields

* inventory​Shipment

  [Inventory​Shipment](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipment)

  The created inventory shipment.

* user​Errors

  [\[Inventory​Shipment​Create​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentCreateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [inventory​Shipment​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentCreate)

  mutation

  Adds a draft shipment to an inventory transfer.

  ***

  **Caution:** As of 2026-01, this mutation supports an optional idempotency key using the \<code>@idempotent\</code> directive. As of 2026-04, the idempotency key is required and must be provided using the \<code>@idempotent\</code> directive. For more information, see the \<a href="https://shopify.dev/docs/api/usage/idempotent-requests">idempotency documentation\</a>.

  ***

  * input

    [Inventory​Shipment​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryShipmentCreateInput)

    required

    ### Arguments

    The input fields for the inventory shipment.

  ***

***

### Map

#### Mutations with this payload

* [inventory​Shipment​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentCreate)

---
<a id="inventory-shipment-delete-payload"></a>

## Inventory​Shipment​Delete​Payload

payload

Return type for `inventoryShipmentDelete` mutation.

### Fields

* id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the inventory shipment that was deleted.

* user​Errors

  [\[Inventory​Shipment​Delete​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentDeleteUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [inventory​Shipment​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentDelete)

  mutation

  Deletes an inventory shipment. Only draft shipments can be deleted.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the inventory shipment to be deleted.

  ***

***

### Map

#### Mutations with this payload

* [inventory​Shipment​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentDelete)

---
<a id="inventory-shipment-mark-in-transit-payload"></a>

## Inventory​Shipment​Mark​In​Transit​Payload

payload

Return type for `inventoryShipmentMarkInTransit` mutation.

### Fields

* inventory​Shipment

  [Inventory​Shipment](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipment)

  The marked in transit inventory shipment.

* user​Errors

  [\[Inventory​Shipment​Mark​In​Transit​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentMarkInTransitUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [inventory​Shipment​Mark​In​Transit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentMarkInTransit)

  mutation

  Marks a draft inventory shipment as in transit.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the inventory shipment to mark in transit.

  * date​Shipped

    [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    The date the shipment was shipped.

  ***

***

### Map

#### Mutations with this payload

* [inventory​Shipment​Mark​In​Transit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentMarkInTransit)

---
<a id="inventory-shipment-receive-payload"></a>

## Inventory​Shipment​Receive​Payload

payload

Return type for `inventoryShipmentReceive` mutation.

### Fields

* inventory​Shipment

  [Inventory​Shipment](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipment)

  The inventory shipment with received items.

* user​Errors

  [\[Inventory​Shipment​Receive​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentReceiveUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [inventory​Shipment​Receive](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentReceive)

  mutation

  Receive an inventory shipment.

  ***

  **Caution:** As of 2026-01, this mutation supports an optional idempotency key using the \<code>@idempotent\</code> directive. As of 2026-04, the idempotency key is required and must be provided using the \<code>@idempotent\</code> directive. For more information, see the \<a href="https://shopify.dev/docs/api/usage/idempotent-requests">idempotency documentation\</a>.

  ***

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the inventory shipment to receive.

  * line​Items

    [\[Inventory​Shipment​Receive​Item​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryShipmentReceiveItemInput)

    The list of receive line items for the inventory shipment.

  * date​Received

    [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    The date the inventory shipment was initially received.

  * bulk​Receive​Action

    [Inventory​Shipment​Receive​Line​Item​Reason](https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryShipmentReceiveLineItemReason)

    The bulk receive action for the inventory shipment.

  ***

***

### Map

#### Mutations with this payload

* [inventory​Shipment​Receive](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentReceive)

---
<a id="inventory-shipment-remove-items-payload"></a>

## Inventory​Shipment​Remove​Items​Payload

payload

Return type for `inventoryShipmentRemoveItems` mutation.

### Fields

* inventory​Shipment

  [Inventory​Shipment](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipment)

  The inventory shipment with items removed.

* user​Errors

  [\[Inventory​Shipment​Remove​Items​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentRemoveItemsUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [inventory​Shipment​Remove​Items](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentRemoveItems)

  mutation

  Remove items from an inventory shipment.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the inventory shipment to remove items from.

  * line​Items

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    A list of inventory shipment line item ids representing the items to be removed from the shipment.

  ***

***

### Map

#### Mutations with this payload

* [inventory​Shipment​Remove​Items](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentRemoveItems)

---
<a id="inventory-shipment-set-barcode-payload"></a>

## Inventory​Shipment​Set​Barcode​Payload

payload

Return type for `inventoryShipmentSetBarcode` mutation.

### Fields

* inventory​Shipment

  [Inventory​Shipment](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipment)

  The inventory shipment with the updated barcode.

* user​Errors

  [\[Inventory​Shipment​Set​Barcode​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentSetBarcodeUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [inventory​Shipment​Set​Barcode](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentSetBarcode)

  mutation

  Sets the barcode on an inventory shipment.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the inventory shipment to set the barcode on.

  * barcode

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    A unique barcode for the shipment.

  ***

***

### Map

#### Mutations with this payload

* [inventory​Shipment​Set​Barcode](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentSetBarcode)

---
<a id="inventory-shipment-set-tracking-payload"></a>

## Inventory​Shipment​Set​Tracking​Payload

payload

Return type for `inventoryShipmentSetTracking` mutation.

### Fields

* inventory​Shipment

  [Inventory​Shipment](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipment)

  The inventory shipment with the edited tracking info.

* user​Errors

  [\[Inventory​Shipment​Set​Tracking​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentSetTrackingUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [inventory​Shipment​Set​Tracking](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentSetTracking)

  mutation

  Edits the tracking info on an inventory shipment.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the inventory shipment whose tracking info is being edited.

  * tracking

    [Inventory​Shipment​Tracking​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryShipmentTrackingInput)

    required

    The tracking info to edit on the inventory shipment.

  ***

***

### Map

#### Mutations with this payload

* [inventory​Shipment​Set​Tracking](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentSetTracking)

---
<a id="inventory-shipment-update-item-quantities-payload"></a>

## Inventory​Shipment​Update​Item​Quantities​Payload

payload

Return type for `inventoryShipmentUpdateItemQuantities` mutation.

### Fields

* shipment

  [Inventory​Shipment](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipment)

  The inventory shipment with updated item quantities.

* updated​Line​Items

  [\[Inventory​Shipment​Line​Item!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentLineItem)

  The updated item quantities.

* user​Errors

  [\[Inventory​Shipment​Update​Item​Quantities​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentUpdateItemQuantitiesUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [inventory​Shipment​Update​Item​Quantities](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentUpdateItemQuantities)

  mutation

  Updates items on an inventory shipment.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the inventory shipment to update item quantities.

  * items

    [\[Inventory​Shipment​Update​Item​Quantities​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryShipmentUpdateItemQuantitiesInput)

    Default:\[]

    The list of line items to be updated to the shipment.

  ***

***

### Map

#### Mutations with this payload

* [inventory​Shipment​Update​Item​Quantities](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentUpdateItemQuantities)

---
<a id="inventory-transfer-cancel-payload"></a>

## Inventory​Transfer​Cancel​Payload

payload

Return type for `inventoryTransferCancel` mutation.

### Fields

* inventory​Transfer

  [Inventory​Transfer](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransfer)

  The cancelled inventory transfer.

* user​Errors

  [\[Inventory​Transfer​Cancel​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferCancelUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [inventory​Transfer​Cancel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferCancel)

  mutation

  Cancels an inventory transfer.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the inventory transfer to cancel.

  ***

***

### Map

#### Mutations with this payload

* [inventory​Transfer​Cancel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferCancel)

---
<a id="inventory-transfer-create-as-ready-to-ship-payload"></a>

## Inventory​Transfer​Create​As​Ready​To​Ship​Payload

payload

Return type for `inventoryTransferCreateAsReadyToShip` mutation.

### Fields

* inventory​Transfer

  [Inventory​Transfer](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransfer)

  The created inventory transfer.

* user​Errors

  [\[Inventory​Transfer​Create​As​Ready​To​Ship​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferCreateAsReadyToShipUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [inventory​Transfer​Create​As​Ready​To​Ship](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferCreateAsReadyToShip)

  mutation

  Creates an inventory transfer in ready to ship.

  ***

  **Caution:** As of 2026-01, this mutation supports an optional idempotency key using the \<code>@idempotent\</code> directive. As of 2026-04, the idempotency key is required and must be provided using the \<code>@idempotent\</code> directive. For more information, see the \<a href="https://shopify.dev/docs/api/usage/idempotent-requests">idempotency documentation\</a>.

  ***

  * input

    [Inventory​Transfer​Create​As​Ready​To​Ship​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryTransferCreateAsReadyToShipInput)

    required

    ### Arguments

    The input fields for the inventory transfer.

  ***

***

### Map

#### Mutations with this payload

* [inventory​Transfer​Create​As​Ready​To​Ship](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferCreateAsReadyToShip)

---
<a id="inventory-transfer-create-payload"></a>

## Inventory​Transfer​Create​Payload

payload

Return type for `inventoryTransferCreate` mutation.

### Fields

* inventory​Transfer

  [Inventory​Transfer](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransfer)

  The created inventory transfer.

* user​Errors

  [\[Inventory​Transfer​Create​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferCreateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [inventory​Transfer​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferCreate)

  mutation

  Creates a draft inventory transfer to move inventory items between [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location) objects in your store. The transfer tracks which items to move, their quantities, and the origin and destination locations.

  Use [`inventoryTransferMarkAsReadyToShip`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferMarkAsReadyToShip) to mark the transfer as ready to ship.

  ***

  **Caution:** As of version \<code>2026-01\</code>, this mutation supports an optional idempotency key using the \<code>@idempotent\</code> directive. As of version \<code>2026-04\</code>, the idempotency key is required and must be provided using the \<code>@idempotent\</code> directive. For more information, see the \<a href="https://shopify.dev/docs/api/usage/idempotent-requests">idempotency documentation\</a>.

  ***

  * input

    [Inventory​Transfer​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryTransferCreateInput)

    required

    ### Arguments

    The input fields for the inventory transfer.

  ***

***

### Map

#### Mutations with this payload

* [inventory​Transfer​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferCreate)

---
<a id="inventory-transfer-delete-payload"></a>

## Inventory​Transfer​Delete​Payload

payload

Return type for `inventoryTransferDelete` mutation.

### Fields

* deleted​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the deleted inventory transfer.

* user​Errors

  [\[Inventory​Transfer​Delete​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferDeleteUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [inventory​Transfer​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferDelete)

  mutation

  Deletes an inventory transfer.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the inventory transfer to delete.

  ***

***

### Map

#### Mutations with this payload

* [inventory​Transfer​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferDelete)

---
<a id="inventory-transfer-duplicate-payload"></a>

## Inventory​Transfer​Duplicate​Payload

payload

Return type for `inventoryTransferDuplicate` mutation.

### Fields

* inventory​Transfer

  [Inventory​Transfer](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransfer)

  The duplicated inventory transfer.

* user​Errors

  [\[Inventory​Transfer​Duplicate​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferDuplicateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [inventory​Transfer​Duplicate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferDuplicate)

  mutation

  This mutation allows duplicating an existing inventory transfer. The duplicated transfer will have the same line items and quantities as the original transfer, but will be in a draft state with no shipments.

  ***

  **Caution:** As of 2026-01, this mutation supports an optional idempotency key using the \<code>@idempotent\</code> directive. As of 2026-04, the idempotency key is required and must be provided using the \<code>@idempotent\</code> directive. For more information, see the \<a href="https://shopify.dev/docs/api/usage/idempotent-requests">idempotency documentation\</a>.

  ***

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the inventory transfer to duplicate.

  ***

***

### Map

#### Mutations with this payload

* [inventory​Transfer​Duplicate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferDuplicate)

---
<a id="inventory-transfer-edit-payload"></a>

## Inventory​Transfer​Edit​Payload

payload

Return type for `inventoryTransferEdit` mutation.

### Fields

* inventory​Transfer

  [Inventory​Transfer](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransfer)

  The edited inventory transfer.

* user​Errors

  [\[Inventory​Transfer​Edit​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferEditUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [inventory​Transfer​Edit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferEdit)

  mutation

  Edits an inventory transfer.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the inventory Transfer to be edited.

  * input

    [Inventory​Transfer​Edit​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryTransferEditInput)

    required

    The input fields to edit the inventory transfer.

  ***

***

### Map

#### Mutations with this payload

* [inventory​Transfer​Edit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferEdit)

---
<a id="inventory-transfer-mark-as-ready-to-ship-payload"></a>

## Inventory​Transfer​Mark​As​Ready​To​Ship​Payload

payload

Return type for `inventoryTransferMarkAsReadyToShip` mutation.

### Fields

* inventory​Transfer

  [Inventory​Transfer](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransfer)

  The ready to ship inventory transfer.

* user​Errors

  [\[Inventory​Transfer​Mark​As​Ready​To​Ship​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferMarkAsReadyToShipUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [inventory​Transfer​Mark​As​Ready​To​Ship](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferMarkAsReadyToShip)

  mutation

  Sets an inventory transfer to ready to ship.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the inventory transfer to mark as ready to ship.

  ***

***

### Map

#### Mutations with this payload

* [inventory​Transfer​Mark​As​Ready​To​Ship](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferMarkAsReadyToShip)

---
<a id="inventory-transfer-remove-items-payload"></a>

## Inventory​Transfer​Remove​Items​Payload

payload

Return type for `inventoryTransferRemoveItems` mutation.

### Fields

* inventory​Transfer

  [Inventory​Transfer](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransfer)

  The transfer with line items removed.

* removed​Quantities

  [\[Inventory​Transfer​Line​Item​Update!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferLineItemUpdate)

  The line items that have had their shippable quantity removed.

* user​Errors

  [\[Inventory​Transfer​Remove​Items​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferRemoveItemsUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [inventory​Transfer​Remove​Items](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferRemoveItems)

  mutation

  This mutation allows removing the shippable quantities of line items on a Transfer. It removes all quantities of the item from the transfer that are not associated with shipments.

  * input

    [Inventory​Transfer​Remove​Items​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryTransferRemoveItemsInput)

    required

    ### Arguments

    The input fields for the InventoryTransferRemoveItems mutation.

  ***

***

### Map

#### Mutations with this payload

* [inventory​Transfer​Remove​Items](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferRemoveItems)

---
<a id="inventory-transfer-set-items-payload"></a>

## Inventory​Transfer​Set​Items​Payload

payload

Return type for `inventoryTransferSetItems` mutation.

### Fields

* inventory​Transfer

  [Inventory​Transfer](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransfer)

  The Transfer with its line items updated.

* updated​Line​Items

  [\[Inventory​Transfer​Line​Item​Update!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferLineItemUpdate)

  The updated line items.

* user​Errors

  [\[Inventory​Transfer​Set​Items​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferSetItemsUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [inventory​Transfer​Set​Items](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferSetItems)

  mutation

  This mutation allows for the setting of line items on a Transfer. Will replace the items already set, if any.

  ***

  **Caution:** As of 2026-01, this mutation supports an optional idempotency key using the \<code>@idempotent\</code> directive. As of 2026-04, the idempotency key is required and must be provided using the \<code>@idempotent\</code> directive. For more information, see the \<a href="https://shopify.dev/docs/api/usage/idempotent-requests">idempotency documentation\</a>.

  ***

  * input

    [Inventory​Transfer​Set​Items​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryTransferSetItemsInput)

    required

    ### Arguments

    The input fields for the InventoryTransferSetItems mutation.

  ***

***

### Map

#### Mutations with this payload

* [inventory​Transfer​Set​Items](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferSetItems)

---
<a id="location-activate-payload"></a>

## Location​Activate​Payload

payload

Return type for `locationActivate` mutation.

### Fields

* location

  [Location](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location)

  The location that was activated.

* location​Activate​User​Errors

  [\[Location​Activate​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationActivateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [location​Activate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationActivate)

  mutation

  Activates a location so that you can stock inventory at the location. Refer to the [`isActive`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location#field-isactive) and [`activatable`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location#field-activatable) fields on the `Location` object.

  ***

  **Caution:** As of 2026-01, this mutation supports an optional idempotency key using the \<code>@idempotent\</code> directive. As of 2026-04, the idempotency key is required and must be provided using the \<code>@idempotent\</code> directive. For more information, see the \<a href="https://shopify.dev/docs/api/usage/idempotent-requests">idempotency documentation\</a>.

  ***

  * location​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of a location to activate.

  ***

***

### Map

#### Mutations with this payload

* [location​Activate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationActivate)

---
<a id="location-add-payload"></a>

## Location​Add​Payload

payload

Return type for `locationAdd` mutation.

### Fields

* location

  [Location](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location)

  The location that was added.

* user​Errors

  [\[Location​Add​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationAddUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [location​Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationAdd)

  mutation

  Adds a new [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location) where you can stock inventory and fulfill orders. Locations represent physical places like warehouses, retail stores, or fulfillment centers.

  The location requires a name and address with at least a country code. You can specify whether the location fulfills online orders, which determines if its inventory is available for online sales. You can also attach custom [metafields](https://shopify.dev/docs/apps/build/custom-data) to store additional information about the location.

  * input

    [Location​Add​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/LocationAddInput)

    required

    ### Arguments

    The properties of the location to add.

  ***

***

### Map

#### Mutations with this payload

* [location​Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationAdd)

---
<a id="location-deactivate-payload"></a>

## Location​Deactivate​Payload

payload

Return type for `locationDeactivate` mutation.

### Fields

* location

  [Location](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location)

  The location that was deactivated.

* location​Deactivate​User​Errors

  [\[Location​Deactivate​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationDeactivateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [location​Deactivate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationDeactivate)

  mutation

  Deactivates a location and moves inventory, pending orders, and moving transfers " "to a destination location.

  ***

  **Caution:** As of 2026-01, this mutation supports an optional idempotency key using the \<code>@idempotent\</code> directive. As of 2026-04, the idempotency key is required and must be provided using the \<code>@idempotent\</code> directive. For more information, see the \<a href="https://shopify.dev/docs/api/usage/idempotent-requests">idempotency documentation\</a>.

  ***

  * location​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of a location to deactivate.

  * destination​Location​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of a destination location to which inventory, pending orders and moving transfers will be moved from the location to deactivate.

  ***

***

### Map

#### Mutations with this payload

* [location​Deactivate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationDeactivate)

---
<a id="location-delete-payload"></a>

## Location​Delete​Payload

payload

Return type for `locationDelete` mutation.

### Fields

* deleted​Location​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the location that was deleted.

* location​Delete​User​Errors

  [\[Location​Delete​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationDeleteUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [location​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationDelete)

  mutation

  Deletes a location.

  * location​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of a location to delete.

  ***

***

### Map

#### Mutations with this payload

* [location​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationDelete)

---
<a id="location-edit-payload"></a>

## Location​Edit​Payload

payload

Return type for `locationEdit` mutation.

### Fields

* location

  [Location](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location)

  The location that was edited.

* user​Errors

  [\[Location​Edit​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationEditUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [location​Edit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationEdit)

  mutation

  Updates the properties of an existing [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location). You can modify the location's name, address, whether it fulfills online orders, and custom [`metafields`](https://shopify.dev/docs/apps/build/custom-data).

  Apps that created a [`FulfillmentService`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentService) can edit the associated location to ensure accurate representation of their fulfillment network.

  ***

  **Note:** You can\&#39;t disable the \<a href="https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationEdit#arguments-input.fields.fulfillsOnlineOrders">\<code>\<span class="PreventFireFoxApplyingGapToWBR">fulfills\<wbr/>Online\<wbr/>Orders\</span>\</code>\</a> setting for fulfillment service locations.

  ***

  Learn more about [editing locations for fulfillment services](https://shopify.dev/docs/apps/build/orders-fulfillment/fulfillment-service-apps/build-for-fulfillment-services#step-2-edit-locations).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of a location to edit.

  * input

    [Location​Edit​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/LocationEditInput)

    required

    The updated properties for the location.

  ***

***

### Map

#### Mutations with this payload

* [location​Edit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationEdit)

---
<a id="location-local-pickup-disable-payload"></a>

## Location​Local​Pickup​Disable​Payload

payload

Return type for `locationLocalPickupDisable` mutation.

### Fields

* location​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the location for which local pickup was disabled.

* user​Errors

  [\[Delivery​Location​Local​Pickup​Settings​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryLocationLocalPickupSettingsError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [location​Local​Pickup​Disable](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationLocalPickupDisable)

  mutation

  Disables local pickup for a location.

  * location​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the location to disable local pickup for.

  ***

***

### Map

#### Mutations with this payload

* [location​Local​Pickup​Disable](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationLocalPickupDisable)

---
<a id="location-local-pickup-enable-payload"></a>

## Location​Local​Pickup​Enable​Payload

payload

Return type for `locationLocalPickupEnable` mutation.

### Fields

* local​Pickup​Settings

  [Delivery​Local​Pickup​Settings](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryLocalPickupSettings)

  The local pickup settings that were enabled.

* user​Errors

  [\[Delivery​Location​Local​Pickup​Settings​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryLocationLocalPickupSettingsError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [location​Local​Pickup​Enable](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationLocalPickupEnable)

  mutation

  Enables local pickup for a location so customers can collect their orders in person. Configures the estimated pickup time that customers see at checkout and optional instructions for finding or accessing the pickup location.

  * local​Pickup​Settings

    [Delivery​Location​Local​Pickup​Enable​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryLocationLocalPickupEnableInput)

    required

    ### Arguments

    The settings required to enable local pickup for a location.

  ***

***

### Map

#### Mutations with this payload

* [location​Local​Pickup​Enable](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationLocalPickupEnable)

---
<a id="marketing-activities-delete-all-external-payload"></a>

## Marketing​Activities​Delete​All​External​Payload

payload

Return type for `marketingActivitiesDeleteAllExternal` mutation.

### Fields

* job

  [Job](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job)

  The asynchronous job that performs the deletion. The status of the job may be used to determine when it's safe again to create new activities.

* user​Errors

  [\[Marketing​Activity​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingActivityUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [marketing​Activities​Delete​All​External](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingActivitiesDeleteAllExternal)

  mutation

  Deletes all external marketing activities. Deletion is performed by a background job, as it may take a bit of time to complete if a large number of activities are to be deleted. Attempting to create or modify external activities before the job has completed will result in the create/update/upsert mutation returning an error.

***

### Map

#### Mutations with this payload

* [marketing​Activities​Delete​All​External](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingActivitiesDeleteAllExternal)

---
<a id="marketing-activity-create-external-payload"></a>

## Marketing​Activity​Create​External​Payload

payload

Return type for `marketingActivityCreateExternal` mutation.

### Fields

* marketing​Activity

  [Marketing​Activity](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingActivity)

  The external marketing activity that was created.

* user​Errors

  [\[Marketing​Activity​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingActivityUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [marketing​Activity​Create​External](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingActivityCreateExternal)

  mutation

  Creates a new external marketing activity.

  * input

    [Marketing​Activity​Create​External​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityCreateExternalInput)

    required

    ### Arguments

    The input field for creating an external marketing activity.

  ***

***

### Map

#### Mutations with this payload

* [marketing​Activity​Create​External](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingActivityCreateExternal)

---
<a id="marketing-activity-create-payload"></a>

## Marketing​Activity​Create​Payload

payload

Return type for `marketingActivityCreate` mutation.

### Fields

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

#### Deprecated fields

* marketing​Activity

  [Marketing​Activity](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingActivity)

  Deprecated

* redirect​Path

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Deprecated

***

### Mutations with this payload

* [marketing​Activity​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingActivityCreate)

  mutation

  Create new marketing activity. Marketing activity app extensions are deprecated and will be removed in the near future.

  * input

    [Marketing​Activity​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityCreateInput)

    required

    ### Arguments

    The Input of marketing activity create.

  ***

***

### Map

#### Mutations with this payload

* [marketing​Activity​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingActivityCreate)

---
<a id="marketing-activity-delete-external-payload"></a>

## Marketing​Activity​Delete​External​Payload

payload

Return type for `marketingActivityDeleteExternal` mutation.

### Fields

* deleted​Marketing​Activity​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the marketing activity that was deleted, if one was deleted.

* user​Errors

  [\[Marketing​Activity​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingActivityUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [marketing​Activity​Delete​External](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingActivityDeleteExternal)

  mutation

  Deletes an external marketing activity.

  * marketing​Activity​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    ### Arguments

    The ID of the marketing activity. A marketing activity ID or remote ID must be provided.

  * remote​Id

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A custom unique identifier for the marketing activity, which can be used to manage the activity and send engagement metrics without having to store our marketing activity ID in your systems. A marketing activity ID or remote ID must be provided.

  ***

***

### Map

#### Mutations with this payload

* [marketing​Activity​Delete​External](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingActivityDeleteExternal)

---
<a id="marketing-activity-update-external-payload"></a>

## Marketing​Activity​Update​External​Payload

payload

Return type for `marketingActivityUpdateExternal` mutation.

### Fields

* marketing​Activity

  [Marketing​Activity](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingActivity)

  The updated marketing activity.

* user​Errors

  [\[Marketing​Activity​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingActivityUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [marketing​Activity​Update​External](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingActivityUpdateExternal)

  mutation

  Update an external marketing activity.

  * input

    [Marketing​Activity​Update​External​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityUpdateExternalInput)

    required

    ### Arguments

    The input field for updating an external marketing activity.

  * marketing​Activity​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of the marketing activity. Specify either the marketing activity ID, remote ID, or UTM to update the marketing activity.

  * remote​Id

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A custom unique identifier for the marketing activity, which can be used to manage the activity and send engagement metrics without having to store our marketing activity ID in your systems. Specify either the marketing activity ID, remote ID, or UTM to update the marketing activity.

  * utm

    [UTMInput](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/UTMInput)

    Specifies the [Urchin Traffic Module (UTM) parameters](https://en.wikipedia.org/wiki/UTM_parameters) that are associated with a related marketing campaign. Specify either the marketing activity ID, remote ID, or UTM to update the marketing activity.

  ***

***

### Map

#### Mutations with this payload

* [marketing​Activity​Update​External](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingActivityUpdateExternal)

---
<a id="marketing-activity-update-payload"></a>

## Marketing​Activity​Update​Payload

payload

Return type for `marketingActivityUpdate` mutation.

### Fields

* marketing​Activity

  [Marketing​Activity](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingActivity)

  The updated marketing activity.

* redirect​Path

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The redirect path from the embedded editor to the Shopify admin.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [marketing​Activity​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingActivityUpdate)

  mutation

  Updates a marketing activity with the latest information. Marketing activity app extensions are deprecated and will be removed in the near future.

  * input

    [Marketing​Activity​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityUpdateInput)

    required

    ### Arguments

    The Input of the marketing activity.

  ***

***

### Map

#### Mutations with this payload

* [marketing​Activity​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingActivityUpdate)

---
<a id="marketing-activity-upsert-external-payload"></a>

## Marketing​Activity​Upsert​External​Payload

payload

Return type for `marketingActivityUpsertExternal` mutation.

### Fields

* marketing​Activity

  [Marketing​Activity](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingActivity)

  The external marketing activity that was created or updated.

* user​Errors

  [\[Marketing​Activity​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingActivityUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [marketing​Activity​Upsert​External](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingActivityUpsertExternal)

  mutation

  Creates a new external marketing activity or updates an existing one. When optional fields are absent or null, associated information will be removed from an existing marketing activity.

  * input

    [Marketing​Activity​Upsert​External​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityUpsertExternalInput)

    required

    ### Arguments

    The input field for creating or updating an external marketing activity.

  ***

***

### Map

#### Mutations with this payload

* [marketing​Activity​Upsert​External](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingActivityUpsertExternal)

---
<a id="marketing-engagements-delete-payload"></a>

## Marketing​Engagements​Delete​Payload

payload

Return type for `marketingEngagementsDelete` mutation.

### Fields

* result

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Informational message about the engagement data that has been marked for deletion.

* user​Errors

  [\[Marketing​Activity​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingActivityUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [marketing​Engagements​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingEngagementsDelete)

  mutation

  Marks channel-level engagement data such that it no longer appears in reports. Activity-level data cannot be deleted directly, instead the MarketingActivity itself should be deleted to hide it from reports.

  * channel​Handle

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    The handle of the channel for which engagement data should be deleted.

  * delete​Engagements​For​All​Channels

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    When true, engagements for all channels that belong to the api client will be deleted.

  ***

***

### Map

#### Mutations with this payload

* [marketing​Engagements​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingEngagementsDelete)

---
<a id="marketing-engagement-create-payload"></a>

## Marketing​Engagement​Create​Payload

payload

Return type for `marketingEngagementCreate` mutation.

### Fields

* marketing​Engagement

  [Marketing​Engagement](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingEngagement)

  The marketing engagement that was created. This represents customer activity taken on a marketing activity or a marketing channel.

* user​Errors

  [\[Marketing​Activity​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingActivityUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [marketing​Engagement​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingEngagementCreate)

  mutation

  Creates a new marketing engagement for a marketing activity or a marketing channel.

  * marketing​Activity​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    ### Arguments

    The identifier of the marketing activity for which the engagement metrics are being provided. This or the remoteId should be set when and only when providing activity-level engagements. This should be nil when providing channel-level engagements.

  * remote​Id

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A custom unique identifier for the marketing activity, which can be used to manage the activity and send engagement metrics without having to store our marketing activity ID in your systems. This or the marketingActivityId should be set when and only when providing activity-level engagements. This should be nil when providing channel-level engagements.

  * channel​Handle

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The unique string identifier of the channel to which the engagement metrics are being provided. This should be set when and only when providing channel-level engagements. This should be nil when providing activity-level engagements. For the correct handle for your channel, contact your partner manager.

  * marketing​Engagement

    [Marketing​Engagement​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingEngagementInput)

    required

    The marketing engagement's attributes.

  ***

***

### Map

#### Mutations with this payload

* [marketing​Engagement​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingEngagementCreate)

---
<a id="market-create-payload"></a>

## Market​Create​Payload

payload

Return type for `marketCreate` mutation.

### Fields

* market

  [Market](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market)

  The market object.

* user​Errors

  [\[Market​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [market​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketCreate)

  mutation

  Creates a [`Market`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market) to deliver customized shopping experiences. Markets define various aspects of the buyer experience including pricing, product availability, custom content, inventory and fulfillment priorities, and payment methods.

  Define conditions to match buyers by region, company location, retail location, or other criteria. Configure [`MarketCurrencySettings`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketCurrencySettings) to control currency behavior. Set [`MarketPriceInclusions`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketPriceInclusions) to determine tax and duty display. Assign [`Catalog`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog) objects and [`MarketWebPresence`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketWebPresence) configurations to control product availability and SEO strategy.

  Learn more about [Shopify Markets](https://shopify.dev/docs/apps/build/markets).

  * input

    [Market​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketCreateInput)

    required

    ### Arguments

    The properties of the new market.

  ***

***

### Map

#### Mutations with this payload

* [market​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketCreate)

---
<a id="market-currency-settings-update-payload"></a>

## Market​Currency​Settings​Update​Payload

payload

Return type for `marketCurrencySettingsUpdate` mutation.

### Fields

* user​Errors

  [\[Market​Currency​Settings​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketCurrencySettingsUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* market

  [Market](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market)

  Deprecated

***

### Mutations with this payload

* [market​Currency​Settings​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketCurrencySettingsUpdate)

  mutation

  Deprecated

  * market​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the market definition to target.

  * input

    [Market​Currency​Settings​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketCurrencySettingsUpdateInput)

    required

    Properties to update for the market currency settings.

  ***

***

### Map

---
<a id="market-delete-payload"></a>

## Market​Delete​Payload

payload

Return type for `marketDelete` mutation.

### Fields

* deleted​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the deleted market.

* user​Errors

  [\[Market​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [market​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketDelete)

  mutation

  Deletes a market definition.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the market to delete.

  ***

***

### Map

#### Mutations with this payload

* [market​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketDelete)

---
<a id="market-localizations-register-payload"></a>

## Market​Localizations​Register​Payload

payload

Return type for `marketLocalizationsRegister` mutation.

### Fields

* market​Localizations

  [\[Market​Localization!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketLocalization)

  The market localizations that were created or updated.

* user​Errors

  [\[Translation​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/TranslationUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [market​Localizations​Register](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketLocalizationsRegister)

  mutation

  Creates or updates market localizations.

  * resource​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the resource that is being localized within the context of a market.

  * market​Localizations

    [\[Market​Localization​Register​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketLocalizationRegisterInput)

    required

    The input fields for a market localization.

  ***

***

### Map

#### Mutations with this payload

* [market​Localizations​Register](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketLocalizationsRegister)

---
<a id="market-localizations-remove-payload"></a>

## Market​Localizations​Remove​Payload

payload

Return type for `marketLocalizationsRemove` mutation.

### Fields

* market​Localizations

  [\[Market​Localization!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketLocalization)

  The market localizations that were deleted.

* user​Errors

  [\[Translation​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/TranslationUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [market​Localizations​Remove](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketLocalizationsRemove)

  mutation

  Deletes market localizations.

  * resource​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the resource for which market localizations are being deleted.

  * market​Localization​Keys

    [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    The list of market localization keys.

  * market​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The list of market IDs.

  ***

***

### Map

#### Mutations with this payload

* [market​Localizations​Remove](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketLocalizationsRemove)

---
<a id="market-regions-create-payload"></a>

## Market​Regions​Create​Payload

payload

Return type for `marketRegionsCreate` mutation.

### Fields

* market

  [Market](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market)

  The market object.

* user​Errors

  [\[Market​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [market​Regions​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketRegionsCreate)

  mutation

  Deprecated

  * market​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the market to add the regions to.

  * regions

    [\[Market​Region​Create​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketRegionCreateInput)

    required

    The regions to be created.

  ***

***

### Map

---
<a id="market-regions-delete-payload"></a>

## Market​Regions​Delete​Payload

payload

Return type for `marketRegionsDelete` mutation.

### Fields

* deleted​Ids

  [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the deleted market region.

* user​Errors

  [\[Market​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [market​Regions​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketRegionsDelete)

  mutation

  Deprecated

  * ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    A list of IDs of the market regions to delete.

  ***

***

### Map

---
<a id="market-region-delete-payload"></a>

## Market​Region​Delete​Payload

payload

Return type for `marketRegionDelete` mutation.

### Fields

* deleted​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the deleted market region.

* market

  [Market](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market)

  The parent market object of the deleted region.

* user​Errors

  [\[Market​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [market​Region​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketRegionDelete)

  mutation

  Deprecated

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the market region to delete.

  ***

***

### Map

---
<a id="market-update-payload"></a>

## Market​Update​Payload

payload

Return type for `marketUpdate` mutation.

### Fields

* market

  [Market](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market)

  The market object.

* user​Errors

  [\[Market​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [market​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketUpdate)

  mutation

  Updates the properties of a market.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the market to update.

  * input

    [Market​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketUpdateInput)

    required

    The properties to update.

  ***

***

### Map

#### Mutations with this payload

* [market​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketUpdate)

---
<a id="market-web-presence-create-payload"></a>

## Market​Web​Presence​Create​Payload

payload

Return type for `marketWebPresenceCreate` mutation.

### Fields

* market

  [Market](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market)

  The market object.

* user​Errors

  [\[Market​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [market​Web​Presence​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketWebPresenceCreate)

  mutation

  Deprecated

  * market​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the market for which to create a web presence.

  * web​Presence

    [Market​Web​Presence​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketWebPresenceCreateInput)

    required

    The details of the web presence to be created.

  ***

***

### Map

---
<a id="market-web-presence-delete-payload"></a>

## Market​Web​Presence​Delete​Payload

payload

Return type for `marketWebPresenceDelete` mutation.

### Fields

* deleted​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the deleted web presence.

* market

  [Market](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market)

  The market for which the web presence was deleted.

* user​Errors

  [\[Market​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [market​Web​Presence​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketWebPresenceDelete)

  mutation

  Deprecated

  * web​Presence​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the web presence to delete.

  ***

***

### Map

---
<a id="market-web-presence-update-payload"></a>

## Market​Web​Presence​Update​Payload

payload

Return type for `marketWebPresenceUpdate` mutation.

### Fields

* market

  [Market](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market)

  The market object.

* user​Errors

  [\[Market​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [market​Web​Presence​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketWebPresenceUpdate)

  mutation

  Deprecated

  * web​Presence​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the web presence to update.

  * web​Presence

    [Market​Web​Presence​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketWebPresenceUpdateInput)

    required

    The web\_presence fields used to update the market's web presence.

  ***

***

### Map

---
<a id="menu-create-payload"></a>

## Menu​Create​Payload

payload

Return type for `menuCreate` mutation.

### Fields

* menu

  [Menu](https://shopify.dev/docs/api/admin-graphql/latest/objects/Menu)

  The created menu.

* user​Errors

  [\[Menu​Create​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MenuCreateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [menu​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/menuCreate)

  mutation

  Creates a navigation [`Menu`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Menu) for the online store. Menus organize links that help customers navigate to [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection), [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product), [pages](https://shopify.dev/docs/api/admin-graphql/latest/objects/Page), [blogs](https://shopify.dev/docs/api/admin-graphql/latest/objects/Blog), and custom URLs.

  Each menu requires a unique handle for identification and can contain multiple [`MenuItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MenuItem) objects with nested sub-items up to three levels deep.

  * title

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    The menu's title.

  * handle

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    The menu's handle.

  * items

    [\[Menu​Item​Create​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MenuItemCreateInput)

    required

    List of the menu's items.

  ***

***

### Map

#### Mutations with this payload

* [menu​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/menuCreate)

---
<a id="menu-delete-payload"></a>

## Menu​Delete​Payload

payload

Return type for `menuDelete` mutation.

### Fields

* deleted​Menu​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the deleted menu.

* user​Errors

  [\[Menu​Delete​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MenuDeleteUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [menu​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/menuDelete)

  mutation

  Deletes a menu.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the menu to be deleted.

  ***

***

### Map

#### Mutations with this payload

* [menu​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/menuDelete)

---
<a id="menu-update-payload"></a>

## Menu​Update​Payload

payload

Return type for `menuUpdate` mutation.

### Fields

* menu

  [Menu](https://shopify.dev/docs/api/admin-graphql/latest/objects/Menu)

  The updated menu.

* user​Errors

  [\[Menu​Update​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MenuUpdateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [menu​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/menuUpdate)

  mutation

  Updates a [`Menu`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Menu) for display on the storefront. Modifies the menu's title and navigation structure, including nested [`MenuItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MenuItem) objects. You can update the handle for non-default menus.

  The items argument accepts a list of menu items with their nested structure. Each item can include nested items to create multi-level navigation hierarchies. Default menus have restricted updates—you can't change their handles.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    ID of the menu to be updated.

  * title

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    The menu's title.

  * handle

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The menu's handle.

  * items

    [\[Menu​Item​Update​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MenuItemUpdateInput)

    required

    List of the menu's items.

  ***

***

### Map

#### Mutations with this payload

* [menu​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/menuUpdate)

---
<a id="metafields-delete-payload"></a>

## Metafields​Delete​Payload

payload

Return type for `metafieldsDelete` mutation.

### Fields

* deleted​Metafields

  [\[Metafield​Identifier\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldIdentifier)

  List of metafield identifiers that were deleted, null if the corresponding metafield isn't found.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [metafields​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafieldsDelete)

  mutation

  Deletes [`Metafield`](https://shopify.dev/docs/api/admin-graphql/2026-04/objects/Metafield) objects in bulk by specifying combinations of owner ID, namespace, and key.

  Returns the identifiers of successfully deleted metafields. If a specified metafield doesn't exist, then the mutation still succeeds but returns `null` for that identifier in the response.

  * metafields

    [\[Metafield​Identifier​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldIdentifierInput)

    required

    ### Arguments

    A list of identifiers specifying metafields to delete. At least one identifier must be specified.

  ***

***

### Map

#### Mutations with this payload

* [metafields​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafieldsDelete)

---
<a id="metafields-set-payload"></a>

## Metafields​Set​Payload

payload

Return type for `metafieldsSet` mutation.

### Fields

* metafields

  [\[Metafield!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield)

  The list of metafields that were set.

* user​Errors

  [\[Metafields​Set​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldsSetUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [metafields​Set](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafieldsSet)

  mutation

  Sets metafield values. Metafield values will be set regardless if they were previously created or not.

  Allows a maximum of 25 metafields to be set at a time, with a maximum total request payload size of 10MB.

  This operation is atomic, meaning no changes are persisted if an error is encountered.

  As of `2024-07`, this operation supports compare-and-set functionality to better handle concurrent requests. If `compareDigest` is set for any metafield, the mutation will only set that metafield if the persisted metafield value matches the digest used on `compareDigest`. If the metafield doesn't exist yet, but you want to guarantee that the operation will run in a safe manner, set `compareDigest` to `null`. The `compareDigest` value can be acquired by querying the metafield object and selecting `compareDigest` as a field. If the `compareDigest` value does not match the digest for the persisted value, the mutation will return an error. You can opt out of write guarantees by not sending `compareDigest` in the request.

  * metafields

    [\[Metafields​Set​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldsSetInput)

    required

    ### Arguments

    The list of metafield values to set. Maximum of 25.

  ***

***

### Map

#### Mutations with this payload

* [metafields​Set](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafieldsSet)

---
<a id="metafield-definition-create-payload"></a>

## Metafield​Definition​Create​Payload

payload

Return type for `metafieldDefinitionCreate` mutation.

### Fields

* created​Definition

  [Metafield​Definition](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition)

  The metafield definition that was created.

* user​Errors

  [\[Metafield​Definition​Create​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinitionCreateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [metafield​Definition​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafieldDefinitionCreate)

  mutation

  Creates a [`MetafieldDefinition`](https://shopify.dev/docs/api/admin-graphql/2026-04/objects/MetafieldDefinition) that establishes structure and validation rules for metafields. The definition specifies the data type, validation constraints, and access permissions for metafields with a given namespace and key combination.

  When you create a new definition, the system validates any existing unstructured metafields matching the same owner type, namespace, and key against it. The system updates each valid metafield's type to match the definition. Invalid metafields remain unchanged but must conform to the definition when updated.

  Learn more about [creating metafield definitions](https://shopify.dev/docs/apps/build/custom-data/metafields/definitions).

  * definition

    [Metafield​Definition​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldDefinitionInput)

    required

    ### Arguments

    Specifies the input fields for a metafield definition.

  ***

***

### Map

#### Mutations with this payload

* [metafield​Definition​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafieldDefinitionCreate)

---
<a id="metafield-definition-delete-payload"></a>

## Metafield​Definition​Delete​Payload

payload

Return type for `metafieldDefinitionDelete` mutation.

### Fields

* deleted​Definition

  [Metafield​Definition​Identifier](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinitionIdentifier)

  The metafield definition that was deleted.

* deleted​Definition​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the deleted metafield definition.

* user​Errors

  [\[Metafield​Definition​Delete​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinitionDeleteUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [metafield​Definition​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafieldDefinitionDelete)

  mutation

  Deletes a [`MetafieldDefinition`](https://shopify.dev/docs/api/admin-graphql/2026-04/objects/MetafieldDefinition). You can identify the definition by providing either its owner type, namespace, and key, or its global ID.

  When you set [`deleteAllAssociatedMetafields`](https://shopify.dev/docs/api/admin-graphql/2026-04/mutations/metafieldDefinitionDelete#arguments-deleteAllAssociatedMetafields) to `true`, the mutation asynchronously deletes all [`Metafield`](https://shopify.dev/docs/api/admin-graphql/2026-04/objects/Metafield) objects that use this definition. This option must be `true` when deleting definitions under the `$app` namespace.

  Learn more about [deleting metafield definitions](https://shopify.dev/docs/apps/build/custom-data/metafields/definitions).

  * id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    ### Arguments

    The id of the metafield definition to delete. Using `identifier` is preferred.

  * identifier

    [Metafield​Definition​Identifier​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldDefinitionIdentifierInput)

    The identifier of the metafield definition to delete.

  * delete​All​Associated​Metafields

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Whether to delete all associated metafields.

  ***

***

### Map

#### Mutations with this payload

* [metafield​Definition​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafieldDefinitionDelete)

---
<a id="metafield-definition-pin-payload"></a>

## Metafield​Definition​Pin​Payload

payload

Return type for `metafieldDefinitionPin` mutation.

### Fields

* pinned​Definition

  [Metafield​Definition](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition)

  The metafield definition that was pinned.

* user​Errors

  [\[Metafield​Definition​Pin​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinitionPinUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [metafield​Definition​Pin](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafieldDefinitionPin)

  mutation

  You can organize your metafields in your Shopify admin by pinning/unpinning metafield definitions. The order of your pinned metafield definitions determines the order in which your metafields are displayed on the corresponding pages in your Shopify admin. By default, only pinned metafields are automatically displayed.

  * definition​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    ### Arguments

    The id of the metafield definition to pin. Using `identifier` is preferred.

  * identifier

    [Metafield​Definition​Identifier​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldDefinitionIdentifierInput)

    The identifier of the metafield definition to pin.

  ***

***

### Map

#### Mutations with this payload

* [metafield​Definition​Pin](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafieldDefinitionPin)

---
<a id="metafield-definition-unpin-payload"></a>

## Metafield​Definition​Unpin​Payload

payload

Return type for `metafieldDefinitionUnpin` mutation.

### Fields

* unpinned​Definition

  [Metafield​Definition](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition)

  The metafield definition that was unpinned.

* user​Errors

  [\[Metafield​Definition​Unpin​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinitionUnpinUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [metafield​Definition​Unpin](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafieldDefinitionUnpin)

  mutation

  You can organize your metafields in your Shopify admin by pinning/unpinning metafield definitions. The order of your pinned metafield definitions determines the order in which your metafields are displayed on the corresponding pages in your Shopify admin. By default, only pinned metafields are automatically displayed.

  * definition​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    ### Arguments

    The ID of the metafield definition to unpin. Using `identifier` is preferred.

  * identifier

    [Metafield​Definition​Identifier​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldDefinitionIdentifierInput)

    The identifier of the metafield definition to unpin.

  ***

***

### Map

#### Mutations with this payload

* [metafield​Definition​Unpin](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafieldDefinitionUnpin)

---
<a id="metafield-definition-update-payload"></a>

## Metafield​Definition​Update​Payload

payload

Return type for `metafieldDefinitionUpdate` mutation.

### Fields

* updated​Definition

  [Metafield​Definition](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition)

  The metafield definition that was updated.

* user​Errors

  [\[Metafield​Definition​Update​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinitionUpdateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* validation​Job

  [Job](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job)

  The asynchronous job updating the metafield definition's validation\_status.

***

### Mutations with this payload

* [metafield​Definition​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafieldDefinitionUpdate)

  mutation

  Updates a [`MetafieldDefinition`](https://shopify.dev/docs/api/admin-graphql/2026-04/objects/MetafieldDefinition)'s configuration and settings. You can modify the definition's name, description, validation rules, access settings, capabilities, and constraints.

  The mutation updates access settings that control visibility across different APIs, such as the [GraphQL Admin API](https://shopify.dev/docs/api/admin-graphql), [Storefront API](https://shopify.dev/docs/api/storefront), and [Customer Account API](https://shopify.dev/docs/api/customer). It also enables capabilities like admin filtering or unique value validation, and modifies constraints that determine which resource subtypes the definition applies to.

  ***

  **Note:** The type, namespace, key, and owner type identify the definition and so can\&#39;t be changed.

  ***

  Learn more about [updating metafield definitions](https://shopify.dev/docs/apps/build/custom-data/metafields/definitions).

  * definition

    [Metafield​Definition​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldDefinitionUpdateInput)

    required

    ### Arguments

    The input fields for the metafield definition update.

  ***

***

### Map

#### Mutations with this payload

* [metafield​Definition​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafieldDefinitionUpdate)

---
<a id="metaobject-bulk-delete-payload"></a>

## Metaobject​Bulk​Delete​Payload

payload

Return type for `metaobjectBulkDelete` mutation.

### Fields

* job

  [Job](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job)

  The asynchronous job that deletes the metaobjects.

* user​Errors

  [\[Metaobject​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [metaobject​Bulk​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectBulkDelete)

  mutation

  Asynchronously delete metaobjects and their associated metafields in bulk.

  * where

    [Metaobject​Bulk​Delete​Where​Condition!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetaobjectBulkDeleteWhereCondition)

    required

    ### Arguments

    Specifies the condition by which metaobjects are deleted. Exactly one field of input is required.

  ***

***

### Map

#### Mutations with this payload

* [metaobject​Bulk​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectBulkDelete)

---
<a id="metaobject-create-payload"></a>

## Metaobject​Create​Payload

payload

Return type for `metaobjectCreate` mutation.

### Fields

* metaobject

  [Metaobject](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject)

  The created metaobject.

* user​Errors

  [\[Metaobject​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [metaobject​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectCreate)

  mutation

  Creates a metaobject entry based on an existing [`MetaobjectDefinition`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinition). The type must match a definition that already exists in the shop.

  Specify field values using key-value pairs that correspond to the field definitions. The mutation generates a unique handle automatically if you don't provide one. You can also configure capabilities like publishable status to control the metaobject's visibility across channels.

  Learn more about [managing metaobjects](https://shopify.dev/docs/apps/build/custom-data/metaobjects/manage-metaobjects).

  * metaobject

    [Metaobject​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetaobjectCreateInput)

    required

    ### Arguments

    The parameters for the metaobject to create.

  ***

***

### Map

#### Mutations with this payload

* [metaobject​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectCreate)

---
<a id="metaobject-definition-create-payload"></a>

## Metaobject​Definition​Create​Payload

payload

Return type for `metaobjectDefinitionCreate` mutation.

### Fields

* metaobject​Definition

  [Metaobject​Definition](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinition)

  The created metaobject definition.

* user​Errors

  [\[Metaobject​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [metaobject​Definition​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectDefinitionCreate)

  mutation

  Creates a metaobject definition that establishes the structure for custom data objects in your store. The definition specifies the fields, data types, and access permissions that all [`Metaobject`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject) entries of this type share.

  Use the `type` field to create a unique namespace for your metaobjects. Prefix the type with `$app:` to reserve the definition for your app's exclusive use. The definition can include capabilities like publishable status or translation eligibility, to extend how metaobjects integrate with Shopify's features.

  Learn more about [managing metaobjects](https://shopify.dev/docs/apps/build/custom-data/metaobjects/manage-metaobjects).

  * definition

    [Metaobject​Definition​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetaobjectDefinitionCreateInput)

    required

    ### Arguments

    The input fields for creating a metaobject definition.

  ***

***

### Map

#### Mutations with this payload

* [metaobject​Definition​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectDefinitionCreate)

---
<a id="metaobject-definition-delete-payload"></a>

## Metaobject​Definition​Delete​Payload

payload

Return type for `metaobjectDefinitionDelete` mutation.

### Fields

* deleted​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the deleted metaobjects definition.

* user​Errors

  [\[Metaobject​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [metaobject​Definition​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectDefinitionDelete)

  mutation

  Deletes the specified metaobject definition. Also deletes all related metafield definitions, metaobjects, and metafields asynchronously.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the metaobjects definition to delete.

  ***

***

### Map

#### Mutations with this payload

* [metaobject​Definition​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectDefinitionDelete)

---
<a id="metaobject-definition-update-payload"></a>

## Metaobject​Definition​Update​Payload

payload

Return type for `metaobjectDefinitionUpdate` mutation.

### Fields

* metaobject​Definition

  [Metaobject​Definition](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinition)

  The updated metaobject definition.

* user​Errors

  [\[Metaobject​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [metaobject​Definition​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectDefinitionUpdate)

  mutation

  Updates a [`MetaobjectDefinition`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinition)'s configuration and field structure. You can modify the definition's name, description, display name key, access controls, and capabilities, as well as those of all its fields.

  The mutation supports reordering fields when `resetFieldOrder` is `true`, which arranges submitted fields first followed by alphabetized omitted fields.

  Learn more about [managing metaobjects](https://shopify.dev/docs/apps/build/custom-data/metaobjects/manage-metaobjects).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the metaobject definition to update.

  * definition

    [Metaobject​Definition​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetaobjectDefinitionUpdateInput)

    required

    The input fields for updating a metaobject definition.

  ***

***

### Map

#### Mutations with this payload

* [metaobject​Definition​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectDefinitionUpdate)

---
<a id="metaobject-delete-payload"></a>

## Metaobject​Delete​Payload

payload

Return type for `metaobjectDelete` mutation.

### Fields

* deleted​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the deleted metaobject.

* user​Errors

  [\[Metaobject​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [metaobject​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectDelete)

  mutation

  Deletes the specified metaobject and its associated metafields.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the metaobject to delete.

  ***

***

### Map

#### Mutations with this payload

* [metaobject​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectDelete)

---
<a id="metaobject-update-payload"></a>

## Metaobject​Update​Payload

payload

Return type for `metaobjectUpdate` mutation.

### Fields

* metaobject

  [Metaobject](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject)

  The updated metaobject.

* user​Errors

  [\[Metaobject​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [metaobject​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectUpdate)

  mutation

  Updates a [`Metaobject`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject) with new field values, handle, or capabilities. [Metaobjects](https://shopify.dev/docs/apps/build/custom-data#what-are-metaobjects) are custom data structures that extend Shopify's data model.

  You can modify field values mapped to the metaobject's [`MetaobjectDefinition`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinition), update the handle for a unique identifier, and adjust capabilities like publishing status. When updating the handle, you can optionally create a redirect from the old handle to maintain existing references.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the metaobject to update.

  * metaobject

    [Metaobject​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetaobjectUpdateInput)

    required

    Specifies parameters to update on the metaobject.

  ***

***

### Map

#### Mutations with this payload

* [metaobject​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectUpdate)

---
<a id="metaobject-upsert-payload"></a>

## Metaobject​Upsert​Payload

payload

Return type for `metaobjectUpsert` mutation.

### Fields

* metaobject

  [Metaobject](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject)

  The created or updated metaobject.

* user​Errors

  [\[Metaobject​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [metaobject​Upsert](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectUpsert)

  mutation

  Creates or updates a [`Metaobject`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject) based on its handle. If a metaobject with the specified handle exists, the mutation updates it with the provided field values. If no matching metaobject exists, the mutation creates a new one.

  The handle serves as a unique identifier within a metaobject type. Field values map to the [`MetaobjectDefinition`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinition)'s field keys and overwrite existing values during updates.

  * handle

    [Metaobject​Handle​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetaobjectHandleInput)

    required

    ### Arguments

    The identifier of the metaobject to upsert.

  * metaobject

    [Metaobject​Upsert​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetaobjectUpsertInput)

    required

    The parameters to upsert the metaobject.

  ***

***

### Map

#### Mutations with this payload

* [metaobject​Upsert](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectUpsert)

---
<a id="mobile-platform-application-create-payload"></a>

## Mobile​Platform​Application​Create​Payload

payload

Return type for `mobilePlatformApplicationCreate` mutation.

### Fields

* mobile​Platform​Application

  [Mobile​Platform​Application](https://shopify.dev/docs/api/admin-graphql/latest/unions/MobilePlatformApplication)

  Created mobile platform application.

* user​Errors

  [\[Mobile​Platform​Application​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MobilePlatformApplicationUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [mobile​Platform​Application​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/mobilePlatformApplicationCreate)

  mutation

  Create a mobile platform application.

  * input

    [Mobile​Platform​Application​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MobilePlatformApplicationCreateInput)

    required

    ### Arguments

    The input to create a mobile platform application.

  ***

***

### Map

#### Mutations with this payload

* [mobile​Platform​Application​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/mobilePlatformApplicationCreate)

---
<a id="mobile-platform-application-delete-payload"></a>

## Mobile​Platform​Application​Delete​Payload

payload

Return type for `mobilePlatformApplicationDelete` mutation.

### Fields

* deleted​Mobile​Platform​Application​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the mobile platform application that was just deleted.

* user​Errors

  [\[Mobile​Platform​Application​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MobilePlatformApplicationUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [mobile​Platform​Application​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/mobilePlatformApplicationDelete)

  mutation

  Delete a mobile platform application.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the Mobile Platform Application to be deleted.

  ***

***

### Map

#### Mutations with this payload

* [mobile​Platform​Application​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/mobilePlatformApplicationDelete)

---
<a id="mobile-platform-application-update-payload"></a>

## Mobile​Platform​Application​Update​Payload

payload

Return type for `mobilePlatformApplicationUpdate` mutation.

### Fields

* mobile​Platform​Application

  [Mobile​Platform​Application](https://shopify.dev/docs/api/admin-graphql/latest/unions/MobilePlatformApplication)

  Created mobile platform application.

* user​Errors

  [\[Mobile​Platform​Application​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MobilePlatformApplicationUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [mobile​Platform​Application​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/mobilePlatformApplicationUpdate)

  mutation

  Update a mobile platform application.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the Mobile Platform Application to be updated.

  * input

    [Mobile​Platform​Application​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MobilePlatformApplicationUpdateInput)

    required

    The input to updat a Mobile Platform Application.

  ***

***

### Map

#### Mutations with this payload

* [mobile​Platform​Application​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/mobilePlatformApplicationUpdate)

---
<a id="order-cancel-payload"></a>

## Order​Cancel​Payload

payload

Return type for `orderCancel` mutation.

### Fields

* job

  [Job](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job)

  The job that asynchronously cancels the order.

* order​Cancel​User​Errors

  [\[Order​Cancel​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderCancelUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-nullDeprecated

***

### Mutations with this payload

* [order​Cancel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCancel)

  mutation

  Cancels an order, with options for refunding, restocking inventory, and customer notification.

  ***

  **Caution:** Order cancellation is irreversible. An order that has been cancelled can\&#39;t be restored to its original state.

  ***

  Use the `orderCancel` mutation to programmatically cancel orders in scenarios such as:

  * Customer-requested cancellations due to size, color, or other preference changes
  * Payment processing failures or declined transactions
  * Fraud detection and prevention
  * Insufficient inventory availability
  * Staff errors in order processing
  * Wholesale or B2B order management workflows

  The `orderCancel` mutation provides flexible refund options including refunding to original payment methods or issuing store credit. If a payment was only authorized (temporarily held) but not yet charged, that hold will be automatically released when the order is cancelled, even if you choose not to refund other payments.

  The mutation supports different cancellation reasons: customer requests, payment declines, fraud, inventory issues, staff errors, or other unspecified reasons. Each cancellation can include optional staff notes for internal documentation (notes aren't visible to customers).

  An order can only be cancelled if it meets the following criteria:

  * The order hasn't already been cancelled.
  * The order has no pending payment authorizations.
  * The order has no active returns in progress.
  * The order has no outstanding fulfillments that can't be cancelled.

  Orders might be assigned to locations that become [deactivated](https://help.shopify.com/manual/fulfillment/setup/locations-management#deactivate-and-reactivate-locations) after the order was created. When cancelling such orders, inventory behavior depends on payment status:

  * **Paid orders**: Cancellation will fail with an error if restocking is enabled, since inventory can't be returned to deactivated locations.
  * **Unpaid orders**: Cancellation succeeds but inventory is not restocked anywhere, even when the restock option is enabled. The committed inventory effectively becomes unavailable rather than being returned to stock at the deactivated location.

  After you cancel an order, you can still make limited updates to certain fields (like notes and tags) using the [`orderUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderUpdate).

  For partial refunds or more complex refund scenarios on active orders, such as refunding only specific line items while keeping the rest of the order fulfilled, consider using the [`refundCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/refundCreate) mutation instead of full order cancellation.

  Learn how to build apps that integrate with [order management and fulfillment processes](https://shopify.dev/docs/apps/build/orders-fulfillment).

  * order​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the order to be canceled.

  * refund

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Deprecated

  * refund​Method

    [Order​Cancel​Refund​Method​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCancelRefundMethodInput)

    Indicates how to refund the amount paid by the customer. Authorized payments will be voided regardless of this setting.

  * restock

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    required

    Whether to restock the inventory committed to the order. For unpaid orders fulfilled from locations that have been deactivated, inventory will not be restocked to the deactivated locations even if this argument is set to true.

  * reason

    [Order​Cancel​Reason!](https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderCancelReason)

    required

    The reason for canceling the order.

  * notify​Customer

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Whether to send a notification to the customer about the order cancellation.

  * staff​Note

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    Default:null

    A staff-facing note about the order cancellation. This is not visible to the customer. Maximum length of 255 characters.

  ***

***

### Map

#### Mutations with this payload

* [order​Cancel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCancel)

---
<a id="order-capture-payload"></a>

## Order​Capture​Payload

payload

Return type for `orderCapture` mutation.

### Fields

* transaction

  [Order​Transaction](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderTransaction)

  The created capture transaction.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [order​Capture](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCapture)

  mutation

  Captures payment for an authorized transaction on an order. Use this mutation to claim the money that was previously reserved by an authorization transaction.

  The `orderCapture` mutation can be used in the following scenarios:

  * To capture the full amount of an authorized transaction
  * To capture a partial payment by specifying an amount less than the total order amount
  * To perform multiple captures on the same order, as long as the order transaction is [multi-capturable](https://shopify.dev/docs/api/admin-graphql/latest/objects/ordertransaction#field-OrderTransaction.fields.multiCapturable)

  ***

  **Note:** Multi-capture functionality is only available to stores on a \<a href="https://help.shopify.com/manual/intro-to-shopify/pricing-plans/plans-features/shopify-plus-plan">Shopify Plus plan\</a>. For multi-currency orders, the \<a href="https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCapture#arguments-input.fields.currency">\<code>currency\</code>\</a> field is required and should match the presentment currency from the order.

  ***

  After capturing a payment, you can:

  * View the transaction details including status, amount, and processing information.
  * Track the captured amount in both shop and presentment currencies.
  * Monitor the transaction's settlement status.

  Learn more about [order transactions](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderTransaction).

  * input

    [Order​Capture​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCaptureInput)

    required

    ### Arguments

    The input for the mutation.

  ***

***

### Map

#### Mutations with this payload

* [order​Capture](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCapture)

---
<a id="order-close-payload"></a>

## Order​Close​Payload

payload

Return type for `orderClose` mutation.

### Fields

* order

  [Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order)

  The closed order.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [order​Close](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderClose)

  mutation

  Marks an open [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) as closed. A closed order is one where merchants fulfill or cancel all [`LineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem) objects and complete all financial transactions.

  Once closed, the order indicates that no further work is required. The order's [`closedAt`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-closedAt) timestamp is set when this mutation completes successfully.

  * input

    [Order​Close​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCloseInput)

    required

    ### Arguments

    The input for the mutation.

  ***

***

### Map

#### Mutations with this payload

* [order​Close](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderClose)

---
<a id="order-create-mandate-payment-payload"></a>

## Order​Create​Mandate​Payment​Payload

payload

Return type for `orderCreateMandatePayment` mutation.

### Fields

* job

  [Job](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job)

  The async job used for charging the payment.

* payment​Reference​Id

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The Unique ID for the created payment.

* user​Errors

  [\[Order​Create​Mandate​Payment​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderCreateMandatePaymentUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [order​Create​Mandate​Payment](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCreateMandatePayment)

  mutation

  Creates a payment for an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) using a stored [`PaymentMandate`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentMandate). A payment mandate represents the customer's authorization to charge their payment method for deferred payments, such as pre-orders or try-before-you-buy purchases.

  The mutation processes the payment asynchronously and returns a [`Job`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job) for tracking the payment status. You can specify the payment amount to collect, and use the [`autoCapture`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCreateMandatePayment#arguments-autoCapture) argument to either immediately capture the payment or only authorize it for later capture. Each payment request requires a unique [`idempotencyKey`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCreateMandatePayment#arguments-idempotencyKey) to prevent duplicate charges. Subsequent calls with the same key return the original payment result rather than creating a new payment.

  Learn more about [deferred payments and payment mandates](https://shopify.dev/docs/apps/build/purchase-options/deferred#charging-the-remaining-balance) and [idempotent requests](https://shopify.dev/docs/api/usage/idempotent-requests).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the order to collect the balance for.

  * payment​Schedule​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of the payment schedule to collect the balance for.

  * idempotency​Key

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    A unique key to identify the payment request.

  * mandate​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The mandate ID used for payment.

  * amount

    [Money​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MoneyInput)

    The payment amount to collect.

  * auto​Capture

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:true

    Whether the payment should be authorized or captured. If `false`, then the authorization of the payment is triggered.

  ***

***

### Map

#### Mutations with this payload

* [order​Create​Mandate​Payment](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCreateMandatePayment)

---
<a id="order-create-manual-payment-payload"></a>

## Order​Create​Manual​Payment​Payload

payload

Return type for `orderCreateManualPayment` mutation.

### Fields

* order

  [Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order)

  The order recorded a manual payment.

* user​Errors

  [\[Order​Create​Manual​Payment​Order​Create​Manual​Payment​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderCreateManualPaymentOrderCreateManualPaymentError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [order​Create​Manual​Payment](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCreateManualPayment)

  mutation

  Records a manual payment for an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) that isn't fully paid. Use this mutation to track payments received outside the standard checkout process, such as cash, check, bank transfer, or other offline payment methods.

  You can specify the payment [amount](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCreateManualPayment#arguments-amount), [method name](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCreateManualPayment#arguments-paymentMethodName), and [when it was processed](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCreateManualPayment#arguments-processedAt).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the order to create a manual payment for.

  * amount

    [Money​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MoneyInput)

    The manual payment amount to be created.

  * payment​Method​Name

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The name of the payment method used for creating the payment. If none is provided, then the default manual payment method ('Other') will be used.

  * processed​At

    [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    The date and time ([ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format) when a manual payment was processed. If you're importing transactions from an app or another platform, then you can set processedAt to a date and time in the past to match when the original transaction was created.

  ***

***

### Map

#### Mutations with this payload

* [order​Create​Manual​Payment](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCreateManualPayment)

---
<a id="order-create-payload"></a>

## Order​Create​Payload

payload

Return type for `orderCreate` mutation.

### Fields

* order

  [Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order)

  The order that was created.

* user​Errors

  [\[Order​Create​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderCreateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [order​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCreate)

  mutation

  Creates an order with attributes such as customer information, line items, and shipping and billing addresses.

  Use the `orderCreate` mutation to programmatically generate orders in scenarios where orders aren't created through the standard checkout process, such as when importing orders from an external system or creating orders for wholesale customers.

  The `orderCreate` mutation doesn't support applying multiple discounts, such as discounts on line items. Automatic discounts won't be applied unless you replicate the logic of those discounts in your custom implementation. You can [apply a discount code](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateDiscountCodeInput), but only one discount code can be set for each order.

  ***

  **Note:** If you\&#39;re using the \<code>\<span class="PreventFireFoxApplyingGapToWBR">order\<wbr/>Create\</span>\</code> mutation with a \<a href="https://help.shopify.com/manual/intro-to-shopify/pricing-plans/free-trial">trial\</a> or \<a href="https://shopify.dev/docs/api/development-stores">development store\</a>, then you can create a maximum of five new orders per minute.

  ***

  After you create an order, you can make subsequent edits to the order using one of the following mutations:

  * [`orderUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderUpdate): Used for simple updates to an order, such as changing the order's note, tags, or customer information.
  * [`orderEditBegin`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditBegin): Used when you need to make significant updates to an order, such as adding or removing line items, changing quantities, or modifying discounts. The `orderEditBegin` mutation initiates an order editing session, allowing you to make multiple changes before finalizing them. Learn more about using the `orderEditBegin` mutation to [edit existing orders](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps/edit-orders).

  Learn how to build apps that integrate with [order management and fulfillment processes](https://shopify.dev/docs/apps/build/orders-fulfillment).

  * order

    [Order​Create​Order​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateOrderInput)

    required

    ### Arguments

    The attributes of the new order.

  * options

    [Order​Create​Options​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateOptionsInput)

    The strategies for updating inventory and whether to send shipping and order confirmations to customers.

  ***

***

### Map

#### Mutations with this payload

* [order​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCreate)

---
<a id="order-customer-remove-payload"></a>

## Order​Customer​Remove​Payload

payload

Return type for `orderCustomerRemove` mutation.

### Fields

* order

  [Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order)

  The order that had its customer removed.

* user​Errors

  [\[Order​Customer​Remove​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderCustomerRemoveUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [order​Customer​Remove](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCustomerRemove)

  mutation

  Removes customer from an order.

  * order​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the order having its customer removed.

  ***

***

### Map

#### Mutations with this payload

* [order​Customer​Remove](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCustomerRemove)

---
<a id="order-customer-set-payload"></a>

## Order​Customer​Set​Payload

payload

Return type for `orderCustomerSet` mutation.

### Fields

* order

  [Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order)

  The order that had a customer set.

* user​Errors

  [\[Order​Customer​Set​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderCustomerSetUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [order​Customer​Set](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCustomerSet)

  mutation

  Sets a customer on an order.

  * order​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the order having a customer set.

  * customer​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the customer being set on the order.

  ***

***

### Map

#### Mutations with this payload

* [order​Customer​Set](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCustomerSet)

---
<a id="order-delete-payload"></a>

## Order​Delete​Payload

payload

Return type for `orderDelete` mutation.

### Fields

* deleted​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  Deleted order ID.

* user​Errors

  [\[Order​Delete​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderDeleteUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [order​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderDelete)

  mutation

  Permanently deletes an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) from the store.

  You can only delete [specific order types](https://help.shopify.com/manual/orders/cancel-delete-order#delete-an-order). Other orders you can cancel using the [`orderCancel`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCancel) mutation instead.

  ***

  **Caution:** This action is irreversible. You can\&#39;t recover deleted orders.

  ***

  * order​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the order to be deleted.

  ***

***

### Map

#### Mutations with this payload

* [order​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderDelete)

---
<a id="order-edit-add-custom-item-payload"></a>

## Order​Edit​Add​Custom​Item​Payload

payload

Return type for `orderEditAddCustomItem` mutation.

### Fields

* calculated​Line​Item

  [Calculated​Line​Item](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedLineItem)

  The custom line item that will be added to the order based on the current edits.

* calculated​Order

  [Calculated​Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedOrder)

  An order with the edits applied but not saved.

* order​Edit​Session

  [Order​Edit​Session](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderEditSession)

  The order edit session with the edits applied but not saved.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [order​Edit​Add​Custom​Item](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditAddCustomItem)

  mutation

  Adds a custom line item to an existing [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order). Custom line items represent products or services not in your catalog, such as gift wrapping, installation fees, or one-off charges.

  Creates a [`CalculatedLineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedLineItem) with the specified title, price, and quantity. Changes remain in the edit session until you commit them with the [`orderEditCommit`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditCommit) mutation.

  Learn more about [adding custom line items](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps/edit-orders#add-a-custom-line-item).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the [calculated order](https://shopify.dev/api/admin-graphql/latest/objects/calculatedorder) or the order edit session to edit. This is the edit to which the custom item is added.

  * title

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    The name of the custom item to add.

  * location​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of the retail [location](https://shopify.dev/api/admin-graphql/latest/objects/location) (if applicable) from which the custom item is sold. Used for tax calculations. A default location will be chosen automatically if none is provided.

  * price

    [Money​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MoneyInput)

    required

    The unit price of the custom item. This value can't be negative.

  * quantity

    [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    required

    The quantity of the custom item. This value must be greater than zero.

  * taxable

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Whether the custom item is taxable. Defaults to `true`.

  * requires​Shipping

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Whether the custom item requires shipping. Defaults to `false`.

  ***

***

### Map

#### Mutations with this payload

* [order​Edit​Add​Custom​Item](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditAddCustomItem)

---
<a id="order-edit-add-line-item-discount-payload"></a>

## Order​Edit​Add​Line​Item​Discount​Payload

payload

Return type for `orderEditAddLineItemDiscount` mutation.

### Fields

* added​Discount​Staged​Change

  [Order​Staged​Change​Add​Line​Item​Discount](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderStagedChangeAddLineItemDiscount)

  The discount applied to a line item during this order edit.

* calculated​Line​Item

  [Calculated​Line​Item](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedLineItem)

  The line item with the edits applied but not saved.

* calculated​Order

  [Calculated​Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedOrder)

  An order with the edits applied but not saved.

* order​Edit​Session

  [Order​Edit​Session](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderEditSession)

  The order edit session with the edits applied but not saved.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [order​Edit​Add​Line​Item​Discount](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditAddLineItemDiscount)

  mutation

  Applies a discount to a [`LineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem) during an order edit session. The discount can be either a fixed amount or percentage value.

  To modify pricing on specific line items, use this mutation after starting an order edit with the [`orderEditBegin`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditBegin) mutation. The changes remain staged until you commit them with the [`orderEditCommit`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditCommit) mutation.

  Learn more about [editing existing orders](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps/edit-orders).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the [calculated order](https://shopify.dev/api/admin-graphql/latest/objects/calculatedorder) or the order edit session to edit.

  * line​Item​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the calculated line item to add the discount to.

  * discount

    [Order​Edit​Applied​Discount​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderEditAppliedDiscountInput)

    required

    The discount to add to the line item.

  ***

***

### Map

#### Mutations with this payload

* [order​Edit​Add​Line​Item​Discount](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditAddLineItemDiscount)

---
<a id="order-edit-add-shipping-line-payload"></a>

## Order​Edit​Add​Shipping​Line​Payload

payload

Return type for `orderEditAddShippingLine` mutation.

### Fields

* calculated​Order

  [Calculated​Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedOrder)

  The [calculated order](https://shopify.dev/api/admin-graphql/latest/objects/calculatedorder) with the edits applied but not saved.

* calculated​Shipping​Line

  [Calculated​Shipping​Line](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedShippingLine)

  The [calculated shipping line](https://shopify.dev/api/admin-graphql/latest/objects/calculatedshippingline) that's added during this order edit.

* order​Edit​Session

  [Order​Edit​Session](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderEditSession)

  The order edit session with the edits applied but not saved.

* user​Errors

  [\[Order​Edit​Add​Shipping​Line​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderEditAddShippingLineUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [order​Edit​Add​Shipping​Line](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditAddShippingLine)

  mutation

  Adds a custom shipping line to an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) during an edit session. Specify the shipping title and price to create a new [`ShippingLine`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShippingLine).

  Returns a [`CalculatedOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedOrder) showing the order with edits applied but not yet saved. To save your changes, use the [`orderEditCommit`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditCommit) mutation.

  Learn more about [editing existing orders](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps/edit-orders).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the [calculated order](https://shopify.dev/api/admin-graphql/latest/objects/calculatedorder) or the order edit session to edit. This is the edit to which the shipping line is added.

  * shipping​Line

    [Order​Edit​Add​Shipping​Line​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderEditAddShippingLineInput)

    required

    The shipping line to be added.

  ***

***

### Map

#### Mutations with this payload

* [order​Edit​Add​Shipping​Line](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditAddShippingLine)

---
<a id="order-edit-add-variant-payload"></a>

## Order​Edit​Add​Variant​Payload

payload

Return type for `orderEditAddVariant` mutation.

### Fields

* calculated​Line​Item

  [Calculated​Line​Item](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedLineItem)

  The [calculated line item](https://shopify.dev/api/admin-graphql/latest/objects/calculatedlineitem) that's added during this order edit.

* calculated​Order

  [Calculated​Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedOrder)

  The [calculated order](https://shopify.dev/api/admin-graphql/latest/objects/calculatedorder) with the edits applied but not saved.

* order​Edit​Session

  [Order​Edit​Session](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderEditSession)

  The order edit session with the edits applied but not saved.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [order​Edit​Add​Variant](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditAddVariant)

  mutation

  Adds a [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) as a line item to an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) that's being edited. The mutation respects the variant's contextual pricing.

  You can specify a [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location) to check for inventory availability and control whether duplicate variants are allowed. The [`quantity`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditAddVariant#arguments-quantity) must be a positive value.

  Learn more about [editing existing orders](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps/edit-orders#add-a-new-variant).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the [calculated order](https://shopify.dev/api/admin-graphql/latest/objects/calculatedorder) or the order edit session to edit.

  * variant​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the variant to add.

  * location​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of the [location](https://shopify.dev/api/admin-graphql/latest/objects/location) to check for inventory availability. A default location ID is chosen automatically if none is provided.

  * quantity

    [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    required

    The quantity of the item to add to the order. Must be a positive value.

  * allow​Duplicates

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Whether the mutation can create a line item for a variant that's already on the calculated order.

  ***

***

### Map

#### Mutations with this payload

* [order​Edit​Add​Variant](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditAddVariant)

---
<a id="order-edit-begin-payload"></a>

## Order​Edit​Begin​Payload

payload

Return type for `orderEditBegin` mutation.

### Fields

* calculated​Order

  [Calculated​Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedOrder)

  The order that will be edited.

* order​Edit​Session

  [Order​Edit​Session](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderEditSession)

  The order edit session that was created.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [order​Edit​Begin](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditBegin)

  mutation

  Starts an order editing session that enables you to modify an existing [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order). This mutation creates an [`OrderEditSession`](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderEditSession) and returns a [`CalculatedOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedOrder) showing how the order looks with your changes applied.

  Order editing follows a three-step workflow: Begin the edit with [`orderEditBegin`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditBegin), apply changes using mutations like [`orderEditAddVariant`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditAddVariant) or [`orderEditSetQuantity`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditSetQuantity), and then save the changes with the [`orderEditCommit`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditCommit) mutation. The session tracks all staged changes until you commit or abandon them.

  Learn more about [editing existing orders](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps/edit-orders).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the order to begin editing.

  ***

***

### Map

#### Mutations with this payload

* [order​Edit​Begin](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditBegin)

---
<a id="order-edit-commit-payload"></a>

## Order​Edit​Commit​Payload

payload

Return type for `orderEditCommit` mutation.

### Fields

* order

  [Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order)

  The order with changes applied.

* success​Messages

  [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Messages to display to the user after the staged changes are commmitted.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [order​Edit​Commit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditCommit)

  mutation

  Applies staged changes from an order editing session to the original order. This finalizes all modifications made during the edit session, including changes to line items, quantities, discounts, and shipping lines.

  Order editing follows a three-step workflow: start with [`orderEditBegin`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditBegin) to create an editing session, apply changes using various orderEdit mutations, and then save the changes with the [`orderEditCommit`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditCommit) mutation. The mutation can optionally notify the customer of changes and add staff notes for internal tracking.

  You can only edit unfulfilled line items. If an edit changes the total order value, then the customer might need to pay a balance or receive a refund.

  Learn more about [editing existing orders](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps/edit-orders).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the [calculated order](https://shopify.dev/api/admin-graphql/latest/objects/calculatedorder) or the order edit session that will have its changes applied to the order.

  * notify​Customer

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Whether to notify the customer or not.

  * staff​Note

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    Note for staff members.

  ***

***

### Map

#### Mutations with this payload

* [order​Edit​Commit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditCommit)

---
<a id="order-edit-remove-discount-payload"></a>

## Order​Edit​Remove​Discount​Payload

payload

Return type for `orderEditRemoveDiscount` mutation.

### Fields

* calculated​Order

  [Calculated​Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedOrder)

  An order with the edits applied but not saved.

* order​Edit​Session

  [Order​Edit​Session](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderEditSession)

  The order edit session with the edits applied but not saved.

* user​Errors

  [\[Order​Edit​Remove​Discount​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderEditRemoveDiscountUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [order​Edit​Remove​Discount](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditRemoveDiscount)

  mutation

  Removes a discount on the current order edit. For more information on how to use the GraphQL Admin API to edit an existing order, refer to [Edit existing orders](https://shopify.dev/apps/fulfillment/order-management-apps/order-editing).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the [calculated order](https://shopify.dev/api/admin-graphql/latest/objects/calculatedorder) or the order edit session to edit. This is the edit from which the discount is removed.

  * discount​Application​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the [calculated discount application](https://shopify.dev/api/admin-graphql/latest/interfaces/calculateddiscountapplication) to remove.

  ***

***

### Map

#### Mutations with this payload

* [order​Edit​Remove​Discount](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditRemoveDiscount)

---
<a id="order-edit-remove-line-item-discount-payload"></a>

## Order​Edit​Remove​Line​Item​Discount​Payload

payload

Return type for `orderEditRemoveLineItemDiscount` mutation.

### Fields

* calculated​Line​Item

  [Calculated​Line​Item](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedLineItem)

  The calculated line item after removal of the discount.

* calculated​Order

  [Calculated​Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedOrder)

  An order with the edits applied but not saved.

* order​Edit​Session

  [Order​Edit​Session](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderEditSession)

  The order edit session with the edits applied but not saved.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [order​Edit​Remove​Line​Item​Discount](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditRemoveLineItemDiscount)

  mutation

  Deprecated

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the [calculated order](https://shopify.dev/api/admin-graphql/latest/objects/calculatedorder) or the order edit session to edit. This is the edit from which the line item discount is removed.

  * discount​Application​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the [calculated discount application](https://shopify.dev/api/admin-graphql/latest/interfaces/calculateddiscountapplication) to remove.

  ***

***

### Map

---
<a id="order-edit-remove-shipping-line-payload"></a>

## Order​Edit​Remove​Shipping​Line​Payload

payload

Return type for `orderEditRemoveShippingLine` mutation.

### Fields

* calculated​Order

  [Calculated​Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedOrder)

  The [calculated order](https://shopify.dev/api/admin-graphql/latest/objects/calculatedorder) with the edits applied but not saved.

* order​Edit​Session

  [Order​Edit​Session](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderEditSession)

  The order edit session with the edits applied but not saved.

* user​Errors

  [\[Order​Edit​Remove​Shipping​Line​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderEditRemoveShippingLineUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [order​Edit​Remove​Shipping​Line](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditRemoveShippingLine)

  mutation

  Removes a shipping line from an existing order. For more information on how to use the GraphQL Admin API to edit an existing order, refer to [Edit existing orders](https://shopify.dev/apps/fulfillment/order-management-apps/order-editing).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the [calculated order](https://shopify.dev/api/admin-graphql/latest/objects/calculatedorder) or the order edit session to edit. This is the edit from which the shipping line is removed.

  * shipping​Line​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the calculated shipping line to remove.

  ***

***

### Map

#### Mutations with this payload

* [order​Edit​Remove​Shipping​Line](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditRemoveShippingLine)

---
<a id="order-edit-set-quantity-payload"></a>

## Order​Edit​Set​Quantity​Payload

payload

Return type for `orderEditSetQuantity` mutation.

### Fields

* calculated​Line​Item

  [Calculated​Line​Item](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedLineItem)

  The calculated line item with the edits applied but not saved.

* calculated​Order

  [Calculated​Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedOrder)

  The calculated order with the edits applied but not saved.

* order​Edit​Session

  [Order​Edit​Session](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderEditSession)

  The order edit session with the edits applied but not saved.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [order​Edit​Set​Quantity](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditSetQuantity)

  mutation

  Sets the quantity of a line item on an order that's being edited. Use this mutation to increase, decrease, or remove items by adjusting their quantities.

  Setting the quantity to zero effectively removes the line item from the order. The item still exists as a data structure with zero quantity. When decreasing quantities, you can optionally restock the removed items to inventory by setting the `restock` parameter to `true`.

  Learn more about [editing workflows for existing orders](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps/edit-orders).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the [calculated order](https://shopify.dev/api/admin-graphql/latest/objects/calculatedorder) or the order edit session to edit. The edit changes the quantity on the line item.

  * line​Item​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the calculated line item to edit.

  * quantity

    [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    required

    The new quantity to set for the line item. This value cannot be negative.

  * restock

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Whether or not to restock the line item when the updated quantity is less than the original quantity.

  * location​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    Deprecated

  ***

***

### Map

#### Mutations with this payload

* [order​Edit​Set​Quantity](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditSetQuantity)

---
<a id="order-edit-update-discount-payload"></a>

## Order​Edit​Update​Discount​Payload

payload

Return type for `orderEditUpdateDiscount` mutation.

### Fields

* calculated​Order

  [Calculated​Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedOrder)

  An order with the edits applied but not saved.

* order​Edit​Session

  [Order​Edit​Session](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderEditSession)

  The order edit session with the edits applied but not saved.

* user​Errors

  [\[Order​Edit​Update​Discount​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderEditUpdateDiscountUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [order​Edit​Update​Discount](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditUpdateDiscount)

  mutation

  Updates a manual line level discount on the current order edit. For more information on how to use the GraphQL Admin API to edit an existing order, refer to [Edit existing orders](https://shopify.dev/apps/fulfillment/order-management-apps/order-editing).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the [calculated order](https://shopify.dev/api/admin-graphql/latest/objects/calculatedorder) or the order edit session to edit. This is the edit used to update the discount.

  * discount

    [Order​Edit​Applied​Discount​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderEditAppliedDiscountInput)

    required

    The updated discount.

  * discount​Application​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the [calculated discount application](https://shopify.dev/api/admin-graphql/latest/interfaces/calculateddiscountapplication) to update.

  ***

***

### Map

#### Mutations with this payload

* [order​Edit​Update​Discount](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditUpdateDiscount)

---
<a id="order-edit-update-shipping-line-payload"></a>

## Order​Edit​Update​Shipping​Line​Payload

payload

Return type for `orderEditUpdateShippingLine` mutation.

### Fields

* calculated​Order

  [Calculated​Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedOrder)

  An order with the edits applied but not saved.

* order​Edit​Session

  [Order​Edit​Session](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderEditSession)

  The order edit session with the edits applied but not saved.

* user​Errors

  [\[Order​Edit​Update​Shipping​Line​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderEditUpdateShippingLineUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [order​Edit​Update​Shipping​Line](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditUpdateShippingLine)

  mutation

  Updates a shipping line on the current order edit. For more information on how to use the GraphQL Admin API to edit an existing order, refer to [Edit existing orders](https://shopify.dev/apps/fulfillment/order-management-apps/order-editing).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the [calculated order](https://shopify.dev/api/admin-graphql/latest/objects/calculatedorder) or the order edit session to edit. This is the edit used to update the shipping line.

  * shipping​Line

    [Order​Edit​Update​Shipping​Line​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderEditUpdateShippingLineInput)

    required

    The updated shipping line.

  * shipping​Line​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the calculated shipping line to update.

  ***

***

### Map

#### Mutations with this payload

* [order​Edit​Update​Shipping​Line](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditUpdateShippingLine)

---
<a id="order-invoice-send-payload"></a>

## Order​Invoice​Send​Payload

payload

Return type for `orderInvoiceSend` mutation.

### Fields

* order

  [Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order)

  The order associated with the invoice email.

* user​Errors

  [\[Order​Invoice​Send​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderInvoiceSendUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [order​Invoice​Send](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderInvoiceSend)

  mutation

  Sends an email invoice for an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order).

  You can customize the email recipient, sender, and subject line using the [`email`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderInvoiceSend#arguments-email) argument.

  ***

  **Note:** Use store or staff account email addresses for the \<a href="https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderInvoiceSend#arguments-email.fields.from">\<code>from\</code>\</a> and \<a href="https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderInvoiceSend#arguments-email.fields.bcc">\<code>bcc\</code>\</a> input fields.

  ***

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The order associated with the invoice.

  * email

    [Email​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/EmailInput)

    The email input fields for the order invoice. The `bcc` and `from` fields should be store or staff account emails.

  ***

***

### Map

#### Mutations with this payload

* [order​Invoice​Send](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderInvoiceSend)

---
<a id="order-mark-as-paid-payload"></a>

## Order​Mark​As​Paid​Payload

payload

Return type for `orderMarkAsPaid` mutation.

### Fields

* order

  [Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order)

  The order marked as paid.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [order​Mark​As​Paid](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderMarkAsPaid)

  mutation

  Marks an order as paid by recording a payment transaction for the outstanding amount.

  Use the `orderMarkAsPaid` mutation to record payments received outside the standard checkout process. The `orderMarkAsPaid` mutation is particularly useful in scenarios where:

  * Orders were created with manual payment methods (cash on delivery, bank deposit, money order)
  * Payments were received offline and need to be recorded in the system
  * Previously authorized payments need to be captured manually
  * Orders require manual payment reconciliation due to external payment processing

  The mutation validates that the order can be marked as paid before processing. An order can be marked as paid only if it has a positive outstanding balance and its [financial status](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.displayFinancialStatus) isn't already `PAID`. The mutation will either create a new sale transaction for the full outstanding amount or capture an existing authorized transaction, depending on the order's current payment state.

  After successfully marking an order as paid, the order's financial status is updated to reflect the payment, and payment events are logged for tracking and analytics purposes.

  Learn more about [managing orders](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps) in apps.

  * input

    [Order​Mark​As​Paid​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderMarkAsPaidInput)

    required

    ### Arguments

    The input for the mutation.

  ***

***

### Map

#### Mutations with this payload

* [order​Mark​As​Paid](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderMarkAsPaid)

---
<a id="order-open-payload"></a>

## Order​Open​Payload

payload

Return type for `orderOpen` mutation.

### Fields

* order

  [Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order)

  The opened order.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [order​Open](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderOpen)

  mutation

  Opens a closed order.

  * input

    [Order​Open​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderOpenInput)

    required

    ### Arguments

    The input for the mutation.

  ***

***

### Map

#### Mutations with this payload

* [order​Open](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderOpen)

---
<a id="order-risk-assessment-create-payload"></a>

## Order​Risk​Assessment​Create​Payload

payload

Return type for `orderRiskAssessmentCreate` mutation.

### Fields

* order​Risk​Assessment

  [Order​Risk​Assessment](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderRiskAssessment)

  The order risk assessment created.

* user​Errors

  [\[Order​Risk​Assessment​Create​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderRiskAssessmentCreateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [order​Risk​Assessment​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderRiskAssessmentCreate)

  mutation

  Create a risk assessment for an order.

  * order​Risk​Assessment​Input

    [Order​Risk​Assessment​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderRiskAssessmentCreateInput)

    required

    ### Arguments

    The input fields required to create a risk assessment.

  ***

***

### Map

#### Mutations with this payload

* [order​Risk​Assessment​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderRiskAssessmentCreate)

---
<a id="order-update-payload"></a>

## Order​Update​Payload

payload

Return type for `orderUpdate` mutation.

### Fields

* order

  [Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order)

  The updated order.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [order​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderUpdate)

  mutation

  Updates the attributes of an order, such as the customer's email, the shipping address for the order, tags, and [metafields](https://shopify.dev/docs/apps/build/custom-data) associated with the order.

  If you need to make significant updates to an order, such as adding or removing line items, changing quantities, or modifying discounts, then use the [`orderEditBegin`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditBegin) mutation instead. The `orderEditBegin` mutation initiates an order editing session, allowing you to make multiple changes before finalizing them. Learn more about using the `orderEditBegin` mutation to [edit existing orders](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps/edit-orders).

  If you need to remove a customer from an order, then use the [`orderCustomerRemove`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCustomerRemove) mutation instead.

  Learn how to build apps that integrate with [order management and fulfillment processes](https://shopify.dev/docs/apps/build/orders-fulfillment).

  * input

    [Order​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderInput)

    required

    ### Arguments

    The attributes of the updated order.

  ***

***

### Map

#### Mutations with this payload

* [order​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderUpdate)

---
<a id="page-create-payload"></a>

## Page​Create​Payload

payload

Return type for `pageCreate` mutation.

### Fields

* page

  [Page](https://shopify.dev/docs/api/admin-graphql/latest/objects/Page)

  The page that was created.

* user​Errors

  [\[Page​Create​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageCreateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [page​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pageCreate)

  mutation

  Creates a [`Page`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Page) for the online store.

  Pages contain custom content like "About Us" or "Contact" information that merchants display outside their product catalog. The page requires a [`title`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Page#field-Page.fields.title) and can include HTML content, publishing settings, and custom [template suffixes](https://shopify.dev/docs/api/admin-graphql/latest/objects/Page#field-Page.fields.templateSuffix). You can control visibility through the [`isPublished`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Page#field-Page.fields.isPublished) flag or schedule publication with a specific date.

  The mutation returns the complete page object upon successful creation or validation errors if the input is invalid.

  * page

    [Page​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PageCreateInput)

    required

    ### Arguments

    The properties of the new page.

  ***

***

### Map

#### Mutations with this payload

* [page​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pageCreate)

---
<a id="page-delete-payload"></a>

## Page​Delete​Payload

payload

Return type for `pageDelete` mutation.

### Fields

* deleted​Page​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the deleted page.

* user​Errors

  [\[Page​Delete​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageDeleteUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [page​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pageDelete)

  mutation

  Permanently deletes a page from the online store.

  For example, merchants might delete seasonal landing pages after campaigns end, or remove outdated policy pages when terms change.

  Use the `pageDelete` mutation to:

  * Remove outdated or unnecessary pages
  * Clean up seasonal landing pages
  * Delete duplicate pages

  The deletion is permanent and returns the deleted page's ID for confirmation.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the page to be deleted.

  ***

***

### Map

#### Mutations with this payload

* [page​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pageDelete)

---
<a id="page-update-payload"></a>

## Page​Update​Payload

payload

Return type for `pageUpdate` mutation.

### Fields

* page

  [Page](https://shopify.dev/docs/api/admin-graphql/latest/objects/Page)

  The page that was updated.

* user​Errors

  [\[Page​Update​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageUpdateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [page​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pageUpdate)

  mutation

  Updates an existing page's content and settings.

  For example, merchants can update their "Shipping Policy" page when rates change, or refresh their "About Us" page with new team information.

  Use the `pageUpdate` mutation to:

  * Update page content and titles
  * Modify publication status
  * Change page handles for URL structure
  * Adjust template settings

  The mutation supports partial updates, allowing specific changes while preserving other page properties.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the page to be updated.

  * page

    [Page​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PageUpdateInput)

    required

    The properties of the page to be updated.

  ***

***

### Map

#### Mutations with this payload

* [page​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pageUpdate)

---
<a id="payment-customization-activation-payload"></a>

## Payment​Customization​Activation​Payload

payload

Return type for `paymentCustomizationActivation` mutation.

### Fields

* ids

  [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The IDs of the updated payment customizations.

* user​Errors

  [\[Payment​Customization​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentCustomizationError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [payment​Customization​Activation](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentCustomizationActivation)

  mutation

  Activates and deactivates payment customizations.

  * ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The global IDs of the payment customizations.

  * enabled

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    required

    The enabled status of the payment customizations.

  ***

***

### Map

#### Mutations with this payload

* [payment​Customization​Activation](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentCustomizationActivation)

---
<a id="payment-customization-create-payload"></a>

## Payment​Customization​Create​Payload

payload

Return type for `paymentCustomizationCreate` mutation.

### Fields

* payment​Customization

  [Payment​Customization](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentCustomization)

  Returns the created payment customization.

* user​Errors

  [\[Payment​Customization​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentCustomizationError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [payment​Customization​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentCustomizationCreate)

  mutation

  Creates a payment customization.

  * payment​Customization

    [Payment​Customization​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PaymentCustomizationInput)

    required

    ### Arguments

    The input data used to create the payment customization.

  ***

***

### Map

#### Mutations with this payload

* [payment​Customization​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentCustomizationCreate)

---
<a id="payment-customization-delete-payload"></a>

## Payment​Customization​Delete​Payload

payload

Return type for `paymentCustomizationDelete` mutation.

### Fields

* deleted​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  Returns the deleted payment customization ID.

* user​Errors

  [\[Payment​Customization​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentCustomizationError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [payment​Customization​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentCustomizationDelete)

  mutation

  Deletes a payment customization.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The global ID of the payment customization.

  ***

***

### Map

#### Mutations with this payload

* [payment​Customization​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentCustomizationDelete)

---
<a id="payment-customization-update-payload"></a>

## Payment​Customization​Update​Payload

payload

Return type for `paymentCustomizationUpdate` mutation.

### Fields

* payment​Customization

  [Payment​Customization](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentCustomization)

  Returns the updated payment customization.

* user​Errors

  [\[Payment​Customization​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentCustomizationError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [payment​Customization​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentCustomizationUpdate)

  mutation

  Updates a payment customization.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The global ID of the payment customization.

  * payment​Customization

    [Payment​Customization​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PaymentCustomizationInput)

    required

    The input data used to update the payment customization.

  ***

***

### Map

#### Mutations with this payload

* [payment​Customization​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentCustomizationUpdate)

---
<a id="payment-reminder-send-payload"></a>

## Payment​Reminder​Send​Payload

payload

Return type for `paymentReminderSend` mutation.

### Fields

* success

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Whether the payment reminder email was successfully sent.

* user​Errors

  [\[Payment​Reminder​Send​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentReminderSendUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [payment​Reminder​Send](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentReminderSend)

  mutation

  Sends an email payment reminder for a payment schedule.

  * payment​Schedule​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The payment schedule id associated with the reminder.

  ***

***

### Map

#### Mutations with this payload

* [payment​Reminder​Send](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentReminderSend)

---
<a id="payment-terms-create-payload"></a>

## Payment​Terms​Create​Payload

payload

Return type for `paymentTermsCreate` mutation.

### Fields

* payment​Terms

  [Payment​Terms](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTerms)

  The created payment terms.

* user​Errors

  [\[Payment​Terms​Create​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTermsCreateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [payment​Terms​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentTermsCreate)

  mutation

  Create payment terms on an order. To create payment terms on a draft order, use a draft order mutation and include the request with the `DraftOrderInput`.

  * reference​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    Specifies the reference orderId to add the payment terms for.

  * payment​Terms​Attributes

    [Payment​Terms​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PaymentTermsCreateInput)

    required

    The attributes used to create the payment terms.

  ***

***

### Map

#### Mutations with this payload

* [payment​Terms​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentTermsCreate)

---
<a id="payment-terms-delete-payload"></a>

## Payment​Terms​Delete​Payload

payload

Return type for `paymentTermsDelete` mutation.

### Fields

* deleted​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The deleted payment terms ID.

* user​Errors

  [\[Payment​Terms​Delete​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTermsDeleteUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [payment​Terms​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentTermsDelete)

  mutation

  Delete payment terms for an order. To delete payment terms on a draft order, use a draft order mutation and include the request with the `DraftOrderInput`.

  * input

    [Payment​Terms​Delete​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PaymentTermsDeleteInput)

    required

    ### Arguments

    The input fields used to delete the payment terms.

  ***

***

### Map

#### Mutations with this payload

* [payment​Terms​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentTermsDelete)

---
<a id="payment-terms-update-payload"></a>

## Payment​Terms​Update​Payload

payload

Return type for `paymentTermsUpdate` mutation.

### Fields

* payment​Terms

  [Payment​Terms](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTerms)

  The updated payment terms.

* user​Errors

  [\[Payment​Terms​Update​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTermsUpdateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [payment​Terms​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentTermsUpdate)

  mutation

  Update payment terms on an order. To update payment terms on a draft order, use a draft order mutation and include the request with the `DraftOrderInput`.

  * input

    [Payment​Terms​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PaymentTermsUpdateInput)

    required

    ### Arguments

    The input fields used to update the payment terms.

  ***

***

### Map

#### Mutations with this payload

* [payment​Terms​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentTermsUpdate)

---
<a id="point-of-sale-device-assign-to-cash-drawer-payload"></a>

## Point​Of​Sale​Device​Assign​To​Cash​Drawer​Payload

payload

Return type for `pointOfSaleDeviceAssignToCashDrawer` mutation.

### Fields

* point​Of​Sale​Device

  [Point​Of​Sale​Device](https://shopify.dev/docs/api/admin-graphql/latest/objects/PointOfSaleDevice)

  The point of sale device.

* user​Errors

  [\[Point​Of​Sale​Device​Assign​To​Cash​Drawer​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PointOfSaleDeviceAssignToCashDrawerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [point​Of​Sale​Device​Assign​To​Cash​Drawer](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pointOfSaleDeviceAssignToCashDrawer)

  mutation

  Assigns a point of sale device to a cash drawer, removing any prior assignment.

  * cash​Drawer​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The cash drawer to assign the device to.

  * point​Of​Sale​Device​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The point of sale device to assign.

  ***

***

### Map

#### Mutations with this payload

* [point​Of​Sale​Device​Assign​To​Cash​Drawer](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pointOfSaleDeviceAssignToCashDrawer)

---
<a id="point-of-sale-device-payment-session-adjust-payload"></a>

## Point​Of​Sale​Device​Payment​Session​Adjust​Payload

payload

Return type for `pointOfSaleDevicePaymentSessionAdjust` mutation.

### Fields

* point​Of​Sale​Device​Payment​Session

  [Point​Of​Sale​Device​Payment​Session](https://shopify.dev/docs/api/admin-graphql/latest/objects/PointOfSaleDevicePaymentSession)

  The adjusted point of sale device payment session.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [point​Of​Sale​Device​Payment​Session​Adjust](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pointOfSaleDevicePaymentSessionAdjust)

  mutation

  Adds an adjustment to a point of sale device payment session.

  * point​Of​Sale​Device​Payment​Session​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The point of sale device payment session to be adjusted.

  * cash

    [Money​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MoneyInput)

    required

    The amount of cash being added or removed.

  * staff​Member​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The staff member who made the adjustment.

  * reason​Code​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The reason code for the adjustment.

  * note

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The note entered when the adjustment was made.

  * time

    [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    The time when the adjustment was made. Defaults to the current time.

  ***

***

### Map

#### Mutations with this payload

* [point​Of​Sale​Device​Payment​Session​Adjust](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pointOfSaleDevicePaymentSessionAdjust)

---
<a id="point-of-sale-device-payment-session-close-payload"></a>

## Point​Of​Sale​Device​Payment​Session​Close​Payload

payload

Return type for `pointOfSaleDevicePaymentSessionClose` mutation.

### Fields

* point​Of​Sale​Device​Payment​Session

  [Point​Of​Sale​Device​Payment​Session](https://shopify.dev/docs/api/admin-graphql/latest/objects/PointOfSaleDevicePaymentSession)

  The closed point of sale device payment session.

* user​Errors

  [\[Point​Of​Sale​Device​Payment​Session​Close​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PointOfSaleDevicePaymentSessionCloseUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [point​Of​Sale​Device​Payment​Session​Close](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pointOfSaleDevicePaymentSessionClose)

  mutation

  Closes a point of sale device payment session.

  * point​Of​Sale​Device​Payment​Session​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The point of sale device payment session to be closed.

  * balance

    [Money​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MoneyInput)

    required

    The counted cash drawer balance when the session was closed.

  * staff​Member​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The staff member who closed the session.

  * time

    [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    When the session was closed. Defaults to the current time.

  * reason​Code​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The reason code for closing the session.

  * note

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The note entered when the session was closed.

  ***

***

### Map

#### Mutations with this payload

* [point​Of​Sale​Device​Payment​Session​Close](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pointOfSaleDevicePaymentSessionClose)

---
<a id="point-of-sale-device-payment-session-count-payload"></a>

## Point​Of​Sale​Device​Payment​Session​Count​Payload

payload

Return type for `pointOfSaleDevicePaymentSessionCount` mutation.

### Fields

* point​Of​Sale​Device​Payment​Session

  [Point​Of​Sale​Device​Payment​Session](https://shopify.dev/docs/api/admin-graphql/latest/objects/PointOfSaleDevicePaymentSession)

  The point of sale device payment session after recording the count.

* user​Errors

  [\[Point​Of​Sale​Device​Payment​Session​Count​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PointOfSaleDevicePaymentSessionCountUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [point​Of​Sale​Device​Payment​Session​Count](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pointOfSaleDevicePaymentSessionCount)

  mutation

  Records a mid-session cash count for a point of sale device payment session.

  * point​Of​Sale​Device​Payment​Session​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The point of sale device payment session to record a count for.

  * balance

    [Money​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MoneyInput)

    required

    The counted cash drawer balance.

  * staff​Member​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The staff member who performed the count.

  * time

    [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    When the count was performed. Defaults to the current time.

  * reason​Code​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The reason code for the count.

  * note

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The note entered when the count was performed.

  ***

***

### Map

#### Mutations with this payload

* [point​Of​Sale​Device​Payment​Session​Count](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pointOfSaleDevicePaymentSessionCount)

---
<a id="point-of-sale-device-payment-session-open-payload"></a>

## Point​Of​Sale​Device​Payment​Session​Open​Payload

payload

Return type for `pointOfSaleDevicePaymentSessionOpen` mutation.

### Fields

* point​Of​Sale​Device​Payment​Session

  [Point​Of​Sale​Device​Payment​Session](https://shopify.dev/docs/api/admin-graphql/latest/objects/PointOfSaleDevicePaymentSession)

  The created point of sale device payment session.

* user​Errors

  [\[Point​Of​Sale​Device​Payment​Session​Open​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PointOfSaleDevicePaymentSessionOpenUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [point​Of​Sale​Device​Payment​Session​Open](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pointOfSaleDevicePaymentSessionOpen)

  mutation

  Opens a point of sale device payment session.

  * point​Of​Sale​Device​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The point of sale device to which this session belongs.

  * balance

    [Money​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MoneyInput)

    The counted cash drawer balance when the session was opened.

  * staff​Member​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The staff member who opened the session.

  * time

    [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    The time the session was opened. Defaults to the current time.

  * reason​Code​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The reason code for the session opening.

  * note

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The note entered when the session was opened.

  ***

***

### Map

#### Mutations with this payload

* [point​Of​Sale​Device​Payment​Session​Open](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pointOfSaleDevicePaymentSessionOpen)

---
<a id="price-list-create-payload"></a>

## Price​List​Create​Payload

payload

Return type for `priceListCreate` mutation.

### Fields

* price​List

  [Price​List](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList)

  The newly created price list.

* user​Errors

  [\[Price​List​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceListUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [price​List​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/priceListCreate)

  mutation

  Creates a [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList). Price lists enable contextual pricing by defining fixed prices or percentage-based adjustments.

  The price list requires a unique name, currency for fixed prices, and parent adjustment settings that determine how the system calculates prices relative to base prices. To apply contextual pricing, link the price list to a [`Catalog`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog). When that catalog's context is matched, customers receive the price list's prices.

  Learn more about [building catalogs with price lists](https://shopify.dev/docs/apps/build/markets/build-catalog#step-2-associate-a-price-list-with-the-catalog).

  * input

    [Price​List​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PriceListCreateInput)

    required

    ### Arguments

    The properties of the new price list.

  ***

***

### Map

#### Mutations with this payload

* [price​List​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/priceListCreate)

---
<a id="price-list-delete-payload"></a>

## Price​List​Delete​Payload

payload

Return type for `priceListDelete` mutation.

### Fields

* deleted​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the deleted price list.

* user​Errors

  [\[Price​List​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceListUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [price​List​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/priceListDelete)

  mutation

  Deletes a price list. For example, you can delete a price list so that it no longer applies for products in the associated market.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the price list to be deleted.

  ***

***

### Map

#### Mutations with this payload

* [price​List​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/priceListDelete)

---
<a id="price-list-fixed-prices-add-payload"></a>

## Price​List​Fixed​Prices​Add​Payload

payload

Return type for `priceListFixedPricesAdd` mutation.

### Fields

* prices

  [\[Price​List​Price!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceListPrice)

  The list of fixed prices that were added to or updated in the price list.

* user​Errors

  [\[Price​List​Price​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceListPriceUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [price​List​Fixed​Prices​Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/priceListFixedPricesAdd)

  mutation

  Creates or updates fixed prices on a [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList). Use this mutation to set specific prices for [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) objects that override the price list's default percentage-based adjustments.

  When you add fixed prices, the mutation replaces any existing fixed prices for those variants on the price list.

  * price​List​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the price list to which the fixed prices will be added or updated.

  * prices

    [\[Price​List​Price​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PriceListPriceInput)

    required

    The list of fixed prices to add or update in the price list.

  ***

***

### Map

#### Mutations with this payload

* [price​List​Fixed​Prices​Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/priceListFixedPricesAdd)

---
<a id="price-list-fixed-prices-by-product-update-payload"></a>

## Price​List​Fixed​Prices​By​Product​Update​Payload

payload

Return type for `priceListFixedPricesByProductUpdate` mutation.

### Fields

* price​List

  [Price​List](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList)

  The price list for which the fixed prices were modified.

* prices​To​Add​Products

  [\[Product!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

  The product for which the fixed prices were added.

* prices​To​Delete​Products

  [\[Product!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

  The product for which the fixed prices were deleted.

* user​Errors

  [\[Price​List​Fixed​Prices​By​Product​Bulk​Update​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceListFixedPricesByProductBulkUpdateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [price​List​Fixed​Prices​By​Product​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/priceListFixedPricesByProductUpdate)

  mutation

  Sets or removes fixed prices for all variants of a [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) on a [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList). Simplifies pricing management when all variants of a product should have the same price on a price list, rather than setting individual variant prices.

  When you add a fixed price for a product, all its [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) objects receive the same price on the price list. When you remove a product's fixed prices, all variant prices revert to the price list's adjustment rules.

  * prices​To​Add

    [\[Price​List​Product​Price​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PriceListProductPriceInput)

    ### Arguments

    A list of `PriceListProductPriceInput` that identifies which products to update the fixed prices for.

  * prices​To​Delete​By​Product​Ids

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    A list of product IDs that identifies which products to remove the fixed prices for.

  * price​List​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The price list to update the prices for.

  ***

***

### Map

#### Mutations with this payload

* [price​List​Fixed​Prices​By​Product​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/priceListFixedPricesByProductUpdate)

---
<a id="price-list-fixed-prices-delete-payload"></a>

## Price​List​Fixed​Prices​Delete​Payload

payload

Return type for `priceListFixedPricesDelete` mutation.

### Fields

* deleted​Fixed​Price​Variant​Ids

  [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  A list of product variant IDs whose fixed prices were removed from the price list.

* user​Errors

  [\[Price​List​Price​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceListPriceUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [price​List​Fixed​Prices​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/priceListFixedPricesDelete)

  mutation

  Deletes specific fixed prices from a price list using a product variant ID. You can use the `priceListFixedPricesDelete` mutation to delete a set of fixed prices from a price list. After deleting the set of fixed prices from the price list, the price of each product variant reverts to the original price that was determined by the price list adjustment.

  * price​List​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the price list from which the fixed prices will be removed.

  * variant​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    A list of product variant IDs whose fixed prices will be removed from the price list.

  ***

***

### Map

#### Mutations with this payload

* [price​List​Fixed​Prices​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/priceListFixedPricesDelete)

---
<a id="price-list-fixed-prices-update-payload"></a>

## Price​List​Fixed​Prices​Update​Payload

payload

Return type for `priceListFixedPricesUpdate` mutation.

### Fields

* deleted​Fixed​Price​Variant​Ids

  [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  A list of deleted variant IDs for prices.

* price​List

  [Price​List](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList)

  The price list for which the fixed prices were modified.

* prices​Added

  [\[Price​List​Price!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceListPrice)

  The prices that were added to the price list.

* user​Errors

  [\[Price​List​Price​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceListPriceUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [price​List​Fixed​Prices​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/priceListFixedPricesUpdate)

  mutation

  Updates fixed prices on a [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList). This mutation lets you add new fixed prices for specific [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) objects and remove existing prices in a single operation.

  Use this mutation to modify variant pricing on a price list by providing prices to add and variant IDs to delete.

  Learn more about [setting fixed prices for product variants](https://shopify.dev/docs/apps/build/markets/build-catalog#step-3-set-fixed-prices-for-specific-product-variants).

  * price​List​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The price list that the prices will be updated against.

  * prices​To​Add

    [\[Price​List​Price​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PriceListPriceInput)

    required

    The fixed prices to add.

  * variant​Ids​To​Delete

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    A list of product variant IDs to remove from the price list.

  ***

***

### Map

#### Mutations with this payload

* [price​List​Fixed​Prices​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/priceListFixedPricesUpdate)

---
<a id="price-list-update-payload"></a>

## Price​List​Update​Payload

payload

Return type for `priceListUpdate` mutation.

### Fields

* price​List

  [Price​List](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList)

  The updated price list.

* user​Errors

  [\[Price​List​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceListUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [price​List​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/priceListUpdate)

  mutation

  Updates a [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList)'s configuration, including its name, currency, [`Catalog`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog) association, and pricing adjustments.

  Changing the currency removes all fixed prices from the price list. The affected [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) objects revert to prices calculated from the price list's adjustment settings.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the price list to update.

  * input

    [Price​List​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PriceListUpdateInput)

    required

    The input data used to update the price list.

  ***

***

### Map

#### Mutations with this payload

* [price​List​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/priceListUpdate)

---
<a id="privacy-features-disable-payload"></a>

## Privacy​Features​Disable​Payload

payload

Return type for `privacyFeaturesDisable` mutation.

### Fields

* features​Disabled

  [\[Privacy​Features​Enum!\]](https://shopify.dev/docs/api/admin-graphql/latest/enums/PrivacyFeaturesEnum)

  The privacy features that were disabled.

* user​Errors

  [\[Privacy​Features​Disable​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PrivacyFeaturesDisableUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [privacy​Features​Disable](https://shopify.dev/docs/api/admin-graphql/latest/mutations/privacyFeaturesDisable)

  mutation

  Disable a shop's privacy features.

  * features​To​Disable

    [\[Privacy​Features​Enum!\]!](https://shopify.dev/docs/api/admin-graphql/latest/enums/PrivacyFeaturesEnum)

    required

    ### Arguments

    The list of privacy features to disable.

  ***

***

### Map

#### Mutations with this payload

* [privacy​Features​Disable](https://shopify.dev/docs/api/admin-graphql/latest/mutations/privacyFeaturesDisable)

---
<a id="product-bundle-create-payload"></a>

## Product​Bundle​Create​Payload

payload

Return type for `productBundleCreate` mutation.

### Fields

* product​Bundle​Operation

  [Product​Bundle​Operation](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductBundleOperation)

  The asynchronous ProductBundleOperation creating the product bundle or componentized product.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [product​Bundle​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productBundleCreate)

  mutation

  Creates a product bundle that groups multiple [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) objects together as components. The bundle appears as a single product in the store, with its price determined by the parent product and inventory calculated from the component products.

  The mutation runs asynchronously and returns a [`ProductBundleOperation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductBundleOperation) object to track the creation status. Poll the operation using the [`productOperation`](https://shopify.dev/docs/api/admin-graphql/latest/queries/productOperation) query to determine when the bundle is ready.

  Learn more about [creating product fixed bundles](https://shopify.dev/docs/apps/build/product-merchandising/bundles/add-product-fixed-bundle#step-1-create-a-bundle).

  * input

    [Product​Bundle​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductBundleCreateInput)

    required

    ### Arguments

    Input for creating a product bundle or componentized product.

  ***

***

### Map

#### Mutations with this payload

* [product​Bundle​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productBundleCreate)

---
<a id="product-bundle-update-payload"></a>

## Product​Bundle​Update​Payload

payload

Return type for `productBundleUpdate` mutation.

### Fields

* product​Bundle​Operation

  [Product​Bundle​Operation](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductBundleOperation)

  The asynchronous ProductBundleOperation updating the product bundle or componentized product.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [product​Bundle​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productBundleUpdate)

  mutation

  Updates a product bundle or componentized product.

  * input

    [Product​Bundle​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductBundleUpdateInput)

    required

    ### Arguments

    Input for updating a product bundle or componentized product.

  ***

***

### Map

#### Mutations with this payload

* [product​Bundle​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productBundleUpdate)

---
<a id="product-change-status-payload"></a>

## Product​Change​Status​Payload

payload

Return type for `productChangeStatus` mutation.

### Fields

* product

  [Product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

  The product object.

* user​Errors

  [\[Product​Change​Status​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductChangeStatusUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [product​Change​Status](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productChangeStatus)

  mutation

  Deprecated

  * product​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the product.

  * status

    [Product​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductStatus)

    required

    The status to be assigned to the product.

  ***

***

### Map

---
<a id="product-create-media-payload"></a>

## Product​Create​Media​Payload

payload

Return type for `productCreateMedia` mutation.

### Fields

* media

  [\[Media!\]](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Media)

  The newly created media.

* media​User​Errors

  [\[Media​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MediaUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* product

  [Product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

  The product associated with the media.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-nullDeprecated

***

### Mutations with this payload

* [product​Create​Media](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productCreateMedia)

  mutation

  Deprecated

  * product​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    Specifies the product associated with the media.

  * media

    [\[Create​Media​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CreateMediaInput)

    required

    List of new media to be added to a product.

  ***

***

### Map

---
<a id="product-create-payload"></a>

## Product​Create​Payload

payload

Return type for `productCreate` mutation.

### Fields

* product

  [Product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

  The product object.

* shop

  [Shop!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop)

  non-null

  The shop associated with the product.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [product​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productCreate)

  mutation

  Creates a [product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) with attributes such as title, description, vendor, and media.

  The `productCreate` mutation helps you create many products at once, avoiding the tedious or time-consuming process of adding them one by one in the Shopify admin. Common examples include creating products for a new collection, launching a new product line, or adding seasonal products.

  You can define product [options](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOption) and [values](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOptionValue), allowing you to create products with different variations like sizes or colors. You can also associate media files to your products, including images and videos.

  The `productCreate` mutation only supports creating a product with its initial [product variant](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant). To create multiple product variants for a single product and manage prices, use the [`productVariantsBulkCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkCreate) mutation.

  ***

  **Note:** The \<code>\<span class="PreventFireFoxApplyingGapToWBR">product\<wbr/>Create\</span>\</code> mutation has a \<a href="https://shopify.dev/docs/api/usage/rate-limits#resource-based-rate-limits">throttle\</a> that takes effect when a store has 50,000 product variants. After this threshold is reached, no more than 1,000 new product variants can be created per day.

  ***

  After you create a product, you can make subsequent edits to the product using one of the following mutations:

  * [`publishablePublish`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishablePublish): Used to publish the product and make it available to customers. The `productCreate` mutation creates products in an unpublished state by default, so you must perform a separate operation to publish the product.
  * [`productUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productUpdate): Used to update a single product, such as changing the product's title, description, vendor, or associated media.
  * [`productSet`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productSet): Used to perform multiple operations on products, such as creating or modifying product options and variants.

  Learn more about the [product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model) and [adding product data](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/add-data).

  * input

    [Product​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductInput)

    Deprecated

    ### Arguments

  * product

    [Product​Create​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductCreateInput)

    The attributes of the new product.

  * media

    [\[Create​Media​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CreateMediaInput)

    The media to add to the product.

  ***

***

### Map

#### Mutations with this payload

* [product​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productCreate)

---
<a id="product-delete-media-payload"></a>

## Product​Delete​Media​Payload

payload

Return type for `productDeleteMedia` mutation.

### Fields

* deleted​Media​Ids

  [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  List of media IDs which were deleted.

* deleted​Product​Image​Ids

  [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  List of product image IDs which were deleted.

* media​User​Errors

  [\[Media​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MediaUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* product

  [Product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

  The product associated with the deleted media.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-nullDeprecated

***

### Mutations with this payload

* [product​Delete​Media](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productDeleteMedia)

  mutation

  Deprecated

  * product​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    Specifies the product ID from which the media will be deleted.

  * media​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The media IDs to be deleted.

  ***

***

### Map

---
<a id="product-delete-payload"></a>

## Product​Delete​Payload

payload

Return type for `productDelete` mutation.

### Fields

* deleted​Product​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the deleted product.

* product​Delete​Operation

  [Product​Delete​Operation](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductDeleteOperation)

  The product delete operation, returned when run in asynchronous mode.

* shop

  [Shop!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop)

  non-null

  The shop associated with the product.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [product​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productDelete)

  mutation

  Permanently deletes a product and all its associated data, including variants, media, publications, and inventory items.

  Use the `productDelete` mutation to programmatically remove products from your store when they need to be permanently deleted from your catalog, such as when removing discontinued items, cleaning up test data, or synchronizing with external inventory management systems.

  The `productDelete` mutation removes the product from all associated collections, and removes all associated data for the product, including:

  * All product variants and their inventory items
  * Product media (images, videos) that are not referenced by other products
  * [Product options](https://shopify.dev/api/admin-graphql/latest/objects/ProductOption) and [option values](https://shopify.dev/api/admin-graphql/latest/objects/ProductOptionValue)
  * Product publications across all sales channels
  * Product tags and metadata associations

  The `productDelete` mutation also has the following effects on existing orders and transactions:

  * **Draft orders**: Existing draft orders that reference this product will retain the product information as stored data, but the product reference will be removed. Draft orders can still be completed with the stored product details.
  * **Completed orders and refunds**: Previously completed orders that included this product aren't affected. The product information in completed orders is preserved for record-keeping, and existing refunds for this product remain valid and processable.

  ***

  **Caution:** Product deletion is irreversible. After a product is deleted, it can\&#39;t be recovered. Consider archiving or unpublishing products instead if you might need to restore them later.

  ***

  If you need to delete a large product, such as one that has many [variants](https://shopify.dev/api/admin-graphql/latest/objects/ProductVariant) that are active at several [locations](https://shopify.dev/api/admin-graphql/latest/objects/Location), you might encounter timeout errors. To avoid these timeout errors, you can set the [`synchronous`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productDelete#arguments-synchronous) parameter to `false` to run the deletion asynchronously, which returns a [`ProductDeleteOperation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductDeleteOperation) that you can monitor for completion status.

  If you need more granular control over product cleanup, consider using these alternative mutations:

  * [`productUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productUpdate): Update the product status to archived or unpublished instead of deleting.
  * [`productVariantsBulkDelete`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkDelete): Delete specific variants while keeping the product.
  * [`productOptionsDelete`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsDelete): Delete the choices available for a product, such as size, color, or material.

  Learn more about the [product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model).

  * input

    [Product​Delete​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductDeleteInput)

    required

    ### Arguments

    Specifies the product to delete by its ID.

  * synchronous

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:true

    Specifies whether or not to run the mutation synchronously.

  ***

***

### Map

#### Mutations with this payload

* [product​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productDelete)

---
<a id="product-duplicate-payload"></a>

## Product​Duplicate​Payload

payload

Return type for `productDuplicate` mutation.

### Fields

* image​Job

  [Job](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job)

  The asynchronous job that duplicates the product images.

* new​Product

  [Product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

  The duplicated product.

* product​Duplicate​Operation

  [Product​Duplicate​Operation](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductDuplicateOperation)

  The product duplicate operation, returned when run in asynchronous mode.

* shop

  [Shop!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop)

  non-null

  The user's shop.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [product​Duplicate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productDuplicate)

  mutation

  Duplicates a product.

  If you need to duplicate a large product, such as one that has many [variants](https://shopify.dev/api/admin-graphql/latest/input-objects/ProductVariantInput) that are active at several [locations](https://shopify.dev/api/admin-graphql/latest/input-objects/InventoryLevelInput), you might encounter timeout errors.

  To avoid these timeout errors, you can instead duplicate the product asynchronously.

  In API version 2024-10 and higher, include `synchronous: false` argument in this mutation to perform the duplication asynchronously.

  In API version 2024-07 and lower, use the asynchronous [`ProductDuplicateAsyncV2`](https://shopify.dev/api/admin-graphql/2024-07/mutations/productDuplicateAsyncV2).

  Metafield values are not duplicated if the unique values capability is enabled.

  * product​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the product to be duplicated.

  * new​Title

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    The new title of the product.

  * new​Status

    [Product​Status](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductStatus)

    The new status of the product. If no value is provided the status will be inherited from the original product.

  * include​Images

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Specifies whether or not to duplicate images.

  * include​Translations

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Specifies whether or not to duplicate translations.

  * synchronous

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:true

    Specifies whether or not to run the mutation synchronously.

  ***

***

### Map

#### Mutations with this payload

* [product​Duplicate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productDuplicate)

---
<a id="product-feed-create-payload"></a>

## Product​Feed​Create​Payload

payload

Return type for `productFeedCreate` mutation.

### Fields

* product​Feed

  [Product​Feed](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductFeed)

  The newly created product feed.

* user​Errors

  [\[Product​Feed​Create​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductFeedCreateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [product​Feed​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productFeedCreate)

  mutation

  Creates a product feed for a specific publication.

  * input

    [Product​Feed​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductFeedInput)

    ### Arguments

    The properties of the new product feed.

  ***

***

### Map

#### Mutations with this payload

* [product​Feed​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productFeedCreate)

---
<a id="product-feed-delete-payload"></a>

## Product​Feed​Delete​Payload

payload

Return type for `productFeedDelete` mutation.

### Fields

* deleted​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the product feed that was deleted.

* user​Errors

  [\[Product​Feed​Delete​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductFeedDeleteUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [product​Feed​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productFeedDelete)

  mutation

  Deletes a product feed for a specific publication.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the product feed to be deleted.

  ***

***

### Map

#### Mutations with this payload

* [product​Feed​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productFeedDelete)

---
<a id="product-full-sync-payload"></a>

## Product​Full​Sync​Payload

payload

Return type for `productFullSync` mutation.

### Fields

* id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID for the full sync operation.

* user​Errors

  [\[Product​Full​Sync​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductFullSyncUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [product​Full​Sync](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productFullSync)

  mutation

  Runs the full product sync for a given shop.

  * before​Updated​At

    [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    ### Arguments

    Syncs only products that haven't changed since the specified timestamp.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The product feed which needs syncing.

  * updated​At​Since

    [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    Syncs only products that have changed since the specified timestamp.

  ***

***

### Map

#### Mutations with this payload

* [product​Full​Sync](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productFullSync)

---
<a id="product-join-selling-plan-groups-payload"></a>

## Product​Join​Selling​Plan​Groups​Payload

payload

Return type for `productJoinSellingPlanGroups` mutation.

### Fields

* product

  [Product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

  The product object.

* user​Errors

  [\[Selling​Plan​Group​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroupUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [product​Join​Selling​Plan​Groups](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productJoinSellingPlanGroups)

  mutation

  Adds multiple selling plan groups to a product.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the product.

  * selling​Plan​Group​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The IDs of the selling plan groups to add.

  ***

***

### Map

#### Mutations with this payload

* [product​Join​Selling​Plan​Groups](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productJoinSellingPlanGroups)

---
<a id="product-leave-selling-plan-groups-payload"></a>

## Product​Leave​Selling​Plan​Groups​Payload

payload

Return type for `productLeaveSellingPlanGroups` mutation.

### Fields

* product

  [Product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

  The product object.

* user​Errors

  [\[Selling​Plan​Group​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroupUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [product​Leave​Selling​Plan​Groups](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productLeaveSellingPlanGroups)

  mutation

  Removes multiple groups from a product.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the product.

  * selling​Plan​Group​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The IDs of the selling plan groups to add.

  ***

***

### Map

#### Mutations with this payload

* [product​Leave​Selling​Plan​Groups](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productLeaveSellingPlanGroups)

---
<a id="product-options-create-payload"></a>

## Product​Options​Create​Payload

payload

Return type for `productOptionsCreate` mutation.

### Fields

* product

  [Product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

  The updated product object.

* user​Errors

  [\[Product​Options​Create​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOptionsCreateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [product​Options​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsCreate)

  mutation

  Creates one or more [options](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOption) on a [product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product), such as size, color, or material. Each option includes a name, position, and a list of values. The combination of a product option and value creates a [product variant](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant).

  Use the `productOptionsCreate` mutation for the following use cases:

  * **Add product choices**: Add a new option, like "Size" (Small, Medium, Large) or "Color" (Red, Blue, Green), to an existing product so customers can select their preferred variant.
  * **Enable personalization features**: Add options such as "Engraving text" to let customers customize their purchase.
  * **Offer seasonal or limited edition products**: Add a new value (for example, "Holiday red") to an existing option to support limited-time or seasonal variants.
  * **Integrate with apps that manage product configuration**: Allow third-party apps to add options, like "Bundle size", when customers select or customize [product bundles](https://shopify.dev/docs/apps/build/product-merchandising/bundles).
  * **Link options to metafields**: Associate a product option with a custom [metafield](https://shopify.dev/docs/apps/build/custom-data), like "Fabric code", for richer integrations with other systems or apps.

  ***

  **Note:** The \<code>\<span class="PreventFireFoxApplyingGapToWBR">product\<wbr/>Options\<wbr/>Create\</span>\</code> mutation enforces strict data integrity for product options and variants. All option positions must be sequential, and every option should be used by at least one variant. If you use the \<a href="https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsCreate#arguments-variantStrategy.enums.CREATE">\<code>\<span class="PreventFireFoxApplyingGapToWBR">C\<wbr/>R\<wbr/>E\<wbr/>A\<wbr/>T\<wbr/>E\</span>\</code> variant strategy\</a>, consider the maximum allowed number of variants for each product is 2048.

  ***

  After you create product options, you can further manage a product's configuration using related mutations:

  * [`productOptionUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionUpdate)
  * [`productOptionsReorder`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsReorder)
  * [`productOptionsDelete`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsDelete)
  * [`productVariantsBulkCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkCreate)
  * [`productVariantsBulkUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkUpdate)
  * [`productSet`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productSet)

  Learn more about the [product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model) and [adding product data](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/add-data).

  * product​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the product to update.

  * options

    [\[Option​Create​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OptionCreateInput)

    required

    Options to add to the product.

  * variant​Strategy

    [Product​Option​Create​Variant​Strategy](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductOptionCreateVariantStrategy)

    Default:LEAVE\_AS\_IS

    The strategy defines which behavior the mutation should observe regarding variants. If not provided or set to null, the strategy `LEAVE_AS_IS` will be used.

  ***

***

### Map

#### Mutations with this payload

* [product​Options​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsCreate)

---
<a id="product-options-delete-payload"></a>

## Product​Options​Delete​Payload

payload

Return type for `productOptionsDelete` mutation.

### Fields

* deleted​Options​Ids

  [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  IDs of the options deleted.

* product

  [Product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

  The updated product object.

* user​Errors

  [\[Product​Options​Delete​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOptionsDeleteUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [product​Options​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsDelete)

  mutation

  Deletes one or more [options](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOption) from a [product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product). Product options define the choices available for a product, such as size, color, or material.

  ***

  **Caution:** Removing an option can affect a product\&#39;s \<a href="https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant">variants\</a> and their configuration. Deleting an option might also delete associated option values and, depending on the chosen \<a href="https://shopify.dev/docs/api/admin-graphql/latest/mutations/productoptionsdelete#arguments-strategy">strategy\</a>, might affect variants.

  ***

  Use the `productOptionsDelete` mutation for the following use cases:

  * **Simplify product configuration**: Remove obsolete or unnecessary options (for example, discontinue "Material" if all variants are now the same material).
  * **Clean up after seasonal or limited-time offerings**: Delete options that are no longer relevant (for example, "Holiday edition").
  * **Automate catalog management**: Enable apps or integrations to programmatically remove options as product data changes.

  ***

  **Note:** The \<code>\<span class="PreventFireFoxApplyingGapToWBR">product\<wbr/>Options\<wbr/>Delete\</span>\</code> mutation enforces strict data integrity for product options and variants. All option positions must remain sequential, and every remaining option must be used by at least one variant.

  ***

  After you delete a product option, you can further manage a product's configuration using related mutations:

  * [`productOptionsCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsCreate)
  * [`productOptionUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionUpdate)
  * [`productOptionsReorder`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsReorder)
  * [`productVariantsBulkCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkCreate)
  * [`productVariantsBulkUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkUpdate)
  * [`productSet`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productSet)

  Learn more about the [product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model) and [adding product data](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/add-data).

  * product​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    ID of the product from which to delete the options.

  * options

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    IDs of the options to delete from the product.

  * strategy

    [Product​Option​Delete​Strategy](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductOptionDeleteStrategy)

    Default:DEFAULT

    The strategy defines which behavior the mutation should observe,such as how to handle a situation where deleting an option would result in duplicate variants.

  ***

***

### Map

#### Mutations with this payload

* [product​Options​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsDelete)

---
<a id="product-options-reorder-payload"></a>

## Product​Options​Reorder​Payload

payload

Return type for `productOptionsReorder` mutation.

### Fields

* product

  [Product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

  The updated product object.

* user​Errors

  [\[Product​Options​Reorder​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOptionsReorderUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [product​Options​Reorder](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsReorder)

  mutation

  Reorders the [options](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOption) and [option values](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOptionValue) on a [product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product), updating the order in which [product variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) are presented to customers.

  The `productOptionsReorder` mutation accepts a list of product options, each identified by `id` or `name`, and an optional list of values (also by `id` or `name`) specifying the new order. The order of options in the mutation's input determines their new positions (for example, the first option becomes `option1`). The order of values within each option determines their new positions. The mutation recalculates the order of variants based on the new option and value order.

  Suppose a product has the following variants:

  1. `"Red / Small"`
  2. `"Green / Medium"`
  3. `"Blue / Small"`

  You reorder options and values:

  ```
  options: [
  { name: "Size", values: [{ name: "Small" }, { name: "Medium" }] },
  { name: "Color", values: [{ name: "Green" }, { name: "Red" }, { name: "Blue" }] }
  ]
  ```

  The resulting variant order will be:

  1. `"Small / Green"`
  2. `"Small / Red"`
  3. `"Small / Blue"`
  4. `"Medium / Green"`

  Use the `productOptionsReorder` mutation for the following use cases:

  * **Change the order of product options**: For example, display "Color" before "Size" in a store.
  * **Reorder option values within an option**: For example, show "Red" before "Blue" in a color picker.
  * **Control the order of product variants**: The order of options and their values determines the sequence in which variants are listed and selected.
  * **Highlight best-selling options**: Present the most popular or relevant options and values first.
  * **Promote merchandising strategies**: Highlight seasonal colors, limited editions, or featured sizes.

  ***

  **Note:** The \<code>\<span class="PreventFireFoxApplyingGapToWBR">product\<wbr/>Options\<wbr/>Reorder\</span>\</code> mutation enforces strict data integrity for product options and variants. All option positions must be sequential, and every option should be used by at least one variant.

  ***

  After you reorder product options, you can further manage a product's configuration using related mutations:

  * [`productOptionsCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsCreate)
  * [`productOptionsDelete`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsDelete)
  * [`productVariantsBulkCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkCreate)
  * [`productVariantsBulkUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkUpdate)
  * [`productSet`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productSet)

  Learn more about the [product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model) and [managing product data](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/add-data).

  * product​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the product to update.

  * options

    [\[Option​Reorder​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OptionReorderInput)

    required

    Options to reorder on the product.

  ***

***

### Map

#### Mutations with this payload

* [product​Options​Reorder](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsReorder)

---
<a id="product-option-update-payload"></a>

## Product​Option​Update​Payload

payload

Return type for `productOptionUpdate` mutation.

### Fields

* product

  [Product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

  The product with which the option being updated is associated.

* user​Errors

  [\[Product​Option​Update​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOptionUpdateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [product​Option​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionUpdate)

  mutation

  Updates an [option](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOption) on a [product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product), such as size, color, or material. Each option includes a name, position, and a list of values. The combination of a product option and value creates a [product variant](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant).

  Use the `productOptionUpdate` mutation for the following use cases:

  * **Update product choices**: Modify an existing option, like "Size" (Small, Medium, Large) or "Color" (Red, Blue, Green), so customers can select their preferred variant.
  * **Enable personalization features**: Update an option (for example, "Engraving text") to let customers customize their purchase.
  * **Offer seasonal or limited edition products**: Update a value (for example, "Holiday red") on an existing option to support limited-time or seasonal variants.
  * **Integrate with apps that manage product configuration**: Allow third-party apps to update options, like "Bundle size", when customers select or customize [product bundles](https://shopify.dev/docs/apps/build/product-merchandising/bundles).
  * **Link options to metafields**: Associate a product option with a custom [metafield](https://shopify.dev/docs/apps/build/custom-data), like "Fabric code", for richer integrations with other systems or apps.

  ***

  **Note:** The \<code>\<span class="PreventFireFoxApplyingGapToWBR">product\<wbr/>Option\<wbr/>Update\</span>\</code> mutation enforces strict data integrity for product options and variants. All option positions must be sequential, and every option should be used by at least one variant.

  ***

  After you update a product option, you can further manage a product's configuration using related mutations:

  * [`productOptionsCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsCreate)
  * [`productOptionsDelete`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsDelete)
  * [`productOptionsReorder`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsReorder)
  * [`productVariantsBulkCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkCreate)
  * [`productVariantsBulkUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkUpdate)
  * [`productSet`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productSet)

  Learn more about the [product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model) and [adding product data](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/add-data).

  * option

    [Option​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OptionUpdateInput)

    required

    ### Arguments

    Option to update.

  * product​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the Product the Option belongs to.

  * option​Values​To​Add

    [\[Option​Value​Create​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OptionValueCreateInput)

    New option values to create.

  * option​Values​To​Update

    [\[Option​Value​Update​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OptionValueUpdateInput)

    Existing option values to update.

  * option​Values​To​Delete

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    IDs of the existing option values to delete.

  * variant​Strategy

    [Product​Option​Update​Variant​Strategy](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductOptionUpdateVariantStrategy)

    The strategy defines which behavior the mutation should observe regarding variants, such as creating variants or deleting them in response to option values to add or to delete. If not provided or set to null, the strategy `LEAVE_AS_IS` will be used.

  ***

***

### Map

#### Mutations with this payload

* [product​Option​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionUpdate)

---
<a id="product-publish-payload"></a>

## Product​Publish​Payload

payload

Return type for `productPublish` mutation.

### Fields

* product

  [Product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

  The product that has been published.

* shop

  [Shop!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop)

  non-null

  The user's shop.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

* product​Publications

  [\[Product​Publication!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductPublication)

  Deprecated

***

### Mutations with this payload

* [product​Publish](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productPublish)

  mutation

  Deprecated

  * input

    [Product​Publish​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductPublishInput)

    required

    ### Arguments

    Specifies the product to publish and the channels to publish it to.

  ***

***

### Map

---
<a id="product-reorder-media-payload"></a>

## Product​Reorder​Media​Payload

payload

Return type for `productReorderMedia` mutation.

### Fields

* job

  [Job](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job)

  The asynchronous job which reorders the media.

* media​User​Errors

  [\[Media​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MediaUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-nullDeprecated

***

### Mutations with this payload

* [product​Reorder​Media](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productReorderMedia)

  mutation

  Reorders [media](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Media) attached to a product, changing their sequence in product displays. The operation processes asynchronously to handle [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) with large media collections.

  Specify the [product ID](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productReorderMedia#arguments-id) and an array of [moves](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productReorderMedia#arguments-moves), where each move contains a media ID and its new zero-based position.

  ***

  **Note:** Only include media items that need repositioning. Unchanged items maintain their relative order automatically.

  ***

  The mutation returns a [`Job`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job) to track the reordering progress. Poll the job status to determine when the operation completes and media positions update across all sales channels.

  Learn more about [reordering product media](https://shopify.dev/docs/apps/build/online-store/product-media#step-6-reorder-media-objects).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the product on which to reorder medias.

  * moves

    [\[Move​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MoveInput)

    required

    A list of moves to perform which will be evaluated in order.

  ***

***

### Map

#### Mutations with this payload

* [product​Reorder​Media](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productReorderMedia)

---
<a id="product-set-payload"></a>

## Product​Set​Payload

payload

Return type for `productSet` mutation.

### Fields

* product

  [Product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

  The product object.

* product​Set​Operation

  [Product​Set​Operation](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductSetOperation)

  The product set operation, returned when run in asynchronous mode.

* user​Errors

  [\[Product​Set​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductSetUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [product​Set](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productSet)

  mutation

  Performs multiple operations to create or update products in a single request.

  Use the `productSet` mutation to sync information from an external data source into Shopify, manage large product catalogs, and perform batch updates. The mutation is helpful for bulk product management, including price adjustments, inventory updates, and product lifecycle management.

  The behavior of `productSet` depends on the type of field it's modifying:

  * **For list fields**: Creates new entries, updates existing entries, and deletes existing entries that aren't included in the mutation's input. Common examples of list fields include [`collections`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productSet#arguments-input.fields.collections), [`metafields`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productSet#arguments-input.fields.metafields), and [`variants`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productSet#arguments-input.fields.variants).

  * **For all other field types**: Updates only the included fields. Any omitted fields will remain unchanged.

  ***

  **Note:** By default, stores have a limit of 2048 product variants for each product.

  ***

  You can run `productSet` in one of the following modes:

  * **Synchronously**: Returns the updated product in the response.
  * **Asynchronously**: Returns a [`ProductSetOperation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductSetOperation) object. Use the [`productOperation`](https://shopify.dev/api/admin-graphql/latest/queries/productOperation) query to check the status of the operation and retrieve details of the updated product and its product variants.

  If you need to only manage product variants, then use one of the following mutations:

  * [`productVariantsBulkCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkCreate)
  * [`productVariantsBulkUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkUpdate)
  * [`productVariantsBulkDelete`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkDelete)

  If you need to only manage product options, then use one of the following mutations:

  * [`productOptionsCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsCreate)
  * [`productOptionUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionUpdate)
  * [`productOptionsReorder`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsReorder)
  * [`productOptionsDelete`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsDelete)

  Learn more about [syncing product data from an external source](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/sync-data).

  * input

    [Product​Set​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductSetInput)

    required

    ### Arguments

    The properties of the newly created or updated product.

  * synchronous

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:true

    Whether the mutation should be run synchronously or asynchronously.

    If `true`, the mutation will return the updated `product`.

    If `false`, the mutation will return a `productSetOperation`.

    Defaults to `true`.

    Setting `synchronous: false` may be desirable depending on the input complexity/size, and should be used if you are experiencing timeouts.

    **Note**: When run in the context of a [bulk operation](https://shopify.dev/api/usage/bulk-operations/imports), the mutation will always run synchronously and this argument will be ignored.

  * identifier

    [Product​Set​Identifiers](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductSetIdentifiers)

    Specifies the identifier that will be used to lookup the resource.

  ***

***

### Map

#### Mutations with this payload

* [product​Set](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productSet)

---
<a id="product-unpublish-payload"></a>

## Product​Unpublish​Payload

payload

Return type for `productUnpublish` mutation.

### Fields

* product

  [Product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

  The product that has been unpublished.

* shop

  [Shop!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop)

  non-null

  The user's shop.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [product​Unpublish](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productUnpublish)

  mutation

  Deprecated

  * input

    [Product​Unpublish​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductUnpublishInput)

    required

    ### Arguments

    Specifies the product to unpublish and the channel to unpublish it from.

  ***

***

### Map

---
<a id="product-update-media-payload"></a>

## Product​Update​Media​Payload

payload

Return type for `productUpdateMedia` mutation.

### Fields

* media

  [\[Media!\]](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Media)

  The updated media object.

* media​User​Errors

  [\[Media​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MediaUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* product

  [Product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

  The product on which media was updated.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-nullDeprecated

***

### Mutations with this payload

* [product​Update​Media](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productUpdateMedia)

  mutation

  Deprecated

  * product​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    Specifies the product on which media will be updated.

  * media

    [\[Update​Media​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/UpdateMediaInput)

    required

    A list of media updates.

  ***

***

### Map

---
<a id="product-update-payload"></a>

## Product​Update​Payload

payload

Return type for `productUpdate` mutation.

### Fields

* product

  [Product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

  The updated product object.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [product​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productUpdate)

  mutation

  Updates a [product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) with attributes such as title, description, vendor, and media.

  The `productUpdate` mutation helps you modify many products at once, avoiding the tedious or time-consuming process of updating them one by one in the Shopify admin. Common examples including updating product details like status or tags.

  The `productUpdate` mutation doesn't support updating [product variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant). To update multiple product variants for a single product and manage prices, use the [`productVariantsBulkUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkUpdate) mutation.

  ***

  **Note:** The \<code>\<span class="PreventFireFoxApplyingGapToWBR">product\<wbr/>Update\</span>\</code> mutation has a \<a href="https://shopify.dev/docs/api/usage/rate-limits#resource-based-rate-limits">throttle\</a> that takes effect when a store has 50,000 product variants. After this threshold is reached, no more than 1,000 new product variants can be updated per day.

  ***

  After updating a product, you can make additional changes using one of the following mutations:

  * [`productSet`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productSet): Used to perform multiple operations on products, such as creating or modifying product options and variants.
  * [`publishablePublish`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishablePublish): Used to publish the product and make it available to customers, if the product is currently unpublished.

  Learn more about the [product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model) and [adding product data](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/add-data).

  * input

    [Product​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductInput)

    Deprecated

    ### Arguments

  * product

    [Product​Update​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductUpdateInput)

    The updated properties for a product.

  * media

    [\[Create​Media​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CreateMediaInput)

    List of new media to be added to the product.

  * identifier

    [Product​Update​Identifiers](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductUpdateIdentifiers)

    Specifies the identifier that will be used to lookup the resource.

  ***

***

### Map

#### Mutations with this payload

* [product​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productUpdate)

---
<a id="product-variants-bulk-create-payload"></a>

## Product​Variants​Bulk​Create​Payload

payload

Return type for `productVariantsBulkCreate` mutation.

### Fields

* product

  [Product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

  The updated product object.

* product​Variants

  [\[Product​Variant!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant)

  The newly created variants.

* user​Errors

  [\[Product​Variants​Bulk​Create​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariantsBulkCreateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [product​Variants​Bulk​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkCreate)

  mutation

  Creates multiple [product variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) for a single [product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) in one operation. You can run this mutation directly or as part of a [bulk operation](https://shopify.dev/docs/api/usage/bulk-operations/imports) for large-scale catalog updates.

  Use the `productVariantsBulkCreate` mutation to efficiently add new product variants—such as different sizes, colors, or materials—to an existing product. The mutation is helpful if you need to add product variants in bulk, such as importing from an external system.

  The mutation supports:

  * Creating variants with custom option values
  * Associating media (for example, images, videos, and 3D models) with the product or its variants
  * Handling complex product configurations

  ***

  **Note:** By default, stores have a limit of 2048 product variants for each product.

  ***

  After creating variants, you can make additional changes using one of the following mutations:

  * [`productVariantsBulkUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkUpdate): Updates multiple product variants for a single product in one operation.
  * [`productSet`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productSet): Used to perform multiple operations on products, such as creating or modifying product options and variants.

  You can also specifically manage product options through related mutations:

  * [`productOptionsCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsCreate)
  * [`productOptionUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionUpdate)
  * [`productOptionsReorder`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsReorder)
  * [`productOptionsDelete`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsDelete)

  Learn more about the [product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model) and [adding product data](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/add-data).

  * variants

    [\[Product​Variants​Bulk​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductVariantsBulkInput)

    required

    ### Arguments

    An array of product variants to be created.

  * product​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the product on which to create the variants.

  * media

    [\[Create​Media​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CreateMediaInput)

    List of new media to be added to the product.

  * strategy

    [Product​Variants​Bulk​Create​Strategy](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductVariantsBulkCreateStrategy)

    Default:DEFAULT

    The strategy defines which behavior the mutation should observe, such as whether to keep or delete the standalone variant (when product has only a single or default variant) when creating new variants in bulk.

  ***

***

### Map

#### Mutations with this payload

* [product​Variants​Bulk​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkCreate)

---
<a id="product-variants-bulk-delete-payload"></a>

## Product​Variants​Bulk​Delete​Payload

payload

Return type for `productVariantsBulkDelete` mutation.

### Fields

* product

  [Product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

  The updated product object.

* user​Errors

  [\[Product​Variants​Bulk​Delete​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariantsBulkDeleteUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [product​Variants​Bulk​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkDelete)

  mutation

  Deletes multiple variants in a single [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product). Specify the product ID and an array of variant IDs to remove variants in bulk. You can call this mutation directly or through the [`bulkOperationRunMutation`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkOperationRunMutation) mutation. Returns the updated product and any [`UserError`](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError) objects.

  * variants​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    An array of product variants IDs to delete.

  * product​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the product with the variants to update.

  ***

***

### Map

#### Mutations with this payload

* [product​Variants​Bulk​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkDelete)

---
<a id="product-variants-bulk-reorder-payload"></a>

## Product​Variants​Bulk​Reorder​Payload

payload

Return type for `productVariantsBulkReorder` mutation.

### Fields

* product

  [Product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

  The updated product.

* user​Errors

  [\[Product​Variants​Bulk​Reorder​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariantsBulkReorderUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [product​Variants​Bulk​Reorder](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkReorder)

  mutation

  Reorders multiple variants in a single product. This mutation can be called directly or via the bulkOperation.

  * product​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The product ID of the variants to be reordered.

  * positions

    [\[Product​Variant​Position​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductVariantPositionInput)

    required

    An array of variant positions.

  ***

***

### Map

#### Mutations with this payload

* [product​Variants​Bulk​Reorder](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkReorder)

---
<a id="product-variants-bulk-update-payload"></a>

## Product​Variants​Bulk​Update​Payload

payload

Return type for `productVariantsBulkUpdate` mutation.

### Fields

* product

  [Product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

  The updated product object.

* product​Variants

  [\[Product​Variant!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant)

  The updated variants.

* user​Errors

  [\[Product​Variants​Bulk​Update​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariantsBulkUpdateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [product​Variants​Bulk​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkUpdate)

  mutation

  Updates multiple [product variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) for a single [product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) in one operation. You can run this mutation directly or as part of a [bulk operation](https://shopify.dev/docs/api/usage/bulk-operations/imports) for large-scale catalog updates.

  Use the `productVariantsBulkUpdate` mutation to efficiently modify product variants—such as different sizes, colors, or materials—associated with an existing product. The mutation is helpful if you need to update a product's variants in bulk, such as importing from an external system.

  The mutation supports:

  * Updating variants with custom option values
  * Associating media (for example, images, videos, and 3D models) with the product or its variants
  * Handling complex product configurations

  ***

  **Note:** By default, stores have a limit of 2048 product variants for each product.

  ***

  After creating variants, you can make additional changes using the [`productSet`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productSet) mutation, which is used to perform multiple operations on products, such as creating or modifying product options and variants.

  You can also specifically manage product options through related mutations:

  * [`productOptionsCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsCreate)
  * [`productOptionUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionUpdate)
  * [`productOptionsReorder`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsReorder)
  * [`productOptionsDelete`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsDelete)

  Learn more about the [product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model) and [adding product data](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/add-data).

  * variants

    [\[Product​Variants​Bulk​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductVariantsBulkInput)

    required

    ### Arguments

    An array of product variants to update.

  * product​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the product associated with the variants to update.

  * media

    [\[Create​Media​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CreateMediaInput)

    List of new media to be added to the product.

  * allow​Partial​Updates

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    When partial updates are allowed, valid variant changes may be persisted even if some of the variants updated have invalid data and cannot be persisted. When partial updates are not allowed, any error will prevent all variants from updating.

  ***

***

### Map

#### Mutations with this payload

* [product​Variants​Bulk​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkUpdate)

---
<a id="product-variant-append-media-payload"></a>

## Product​Variant​Append​Media​Payload

payload

Return type for `productVariantAppendMedia` mutation.

### Fields

* product

  [Product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

  The product associated with the variants and media.

* product​Variants

  [\[Product​Variant!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant)

  The product variants that were updated.

* user​Errors

  [\[Media​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MediaUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [product​Variant​Append​Media](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantAppendMedia)

  mutation

  Appends existing media from a product to specific variants of that product, creating associations between media files and particular product options. This allows different variants to showcase relevant images or videos.

  For example, a t-shirt product might have color variants where each color variant displays only the images showing that specific color, helping customers see exactly what they're purchasing.

  Use `ProductVariantAppendMedia` to:

  * Associate specific images with product variants for accurate display
  * Build variant-specific media management in product interfaces
  * Implement automated media assignment based on variant attributes

  The operation links existing product media to variants without duplicating files, maintaining efficient media storage while enabling variant-specific displays.

  Learn more about [product variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant).

  * product​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    Specifies the product associated to the media.

  * variant​Media

    [\[Product​Variant​Append​Media​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductVariantAppendMediaInput)

    required

    A list of pairs of variants and media to be attached to the variants.

  ***

***

### Map

#### Mutations with this payload

* [product​Variant​Append​Media](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantAppendMedia)

---
<a id="product-variant-detach-media-payload"></a>

## Product​Variant​Detach​Media​Payload

payload

Return type for `productVariantDetachMedia` mutation.

### Fields

* product

  [Product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

  The product associated with the variants and media.

* product​Variants

  [\[Product​Variant!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant)

  The product variants that were updated.

* user​Errors

  [\[Media​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MediaUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [product​Variant​Detach​Media](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantDetachMedia)

  mutation

  Detaches media from product variants.

  * product​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    Specifies the product to which the variants and media are associated.

  * variant​Media

    [\[Product​Variant​Detach​Media​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductVariantDetachMediaInput)

    required

    A list of pairs of variants and media to be deleted from the variants.

  ***

***

### Map

#### Mutations with this payload

* [product​Variant​Detach​Media](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantDetachMedia)

---
<a id="product-variant-join-selling-plan-groups-payload"></a>

## Product​Variant​Join​Selling​Plan​Groups​Payload

payload

Return type for `productVariantJoinSellingPlanGroups` mutation.

### Fields

* product​Variant

  [Product​Variant](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant)

  The product variant object.

* user​Errors

  [\[Selling​Plan​Group​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroupUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [product​Variant​Join​Selling​Plan​Groups](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantJoinSellingPlanGroups)

  mutation

  Adds multiple selling plan groups to a product variant.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the product variant.

  * selling​Plan​Group​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The IDs of the selling plan groups to add.

  ***

***

### Map

#### Mutations with this payload

* [product​Variant​Join​Selling​Plan​Groups](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantJoinSellingPlanGroups)

---
<a id="product-variant-leave-selling-plan-groups-payload"></a>

## Product​Variant​Leave​Selling​Plan​Groups​Payload

payload

Return type for `productVariantLeaveSellingPlanGroups` mutation.

### Fields

* product​Variant

  [Product​Variant](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant)

  The product variant object.

* user​Errors

  [\[Selling​Plan​Group​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroupUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [product​Variant​Leave​Selling​Plan​Groups](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantLeaveSellingPlanGroups)

  mutation

  Remove multiple groups from a product variant.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the product variant.

  * selling​Plan​Group​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The IDs of the selling plan groups to leave.

  ***

***

### Map

#### Mutations with this payload

* [product​Variant​Leave​Selling​Plan​Groups](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantLeaveSellingPlanGroups)

---
<a id="product-variant-relationship-bulk-update-payload"></a>

## Product​Variant​Relationship​Bulk​Update​Payload

payload

Return type for `productVariantRelationshipBulkUpdate` mutation.

### Fields

* parent​Product​Variants

  [\[Product​Variant!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant)

  The product variants with successfully updated product variant relationships.

* user​Errors

  [\[Product​Variant​Relationship​Bulk​Update​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariantRelationshipBulkUpdateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [product​Variant​Relationship​Bulk​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantRelationshipBulkUpdate)

  mutation

  Creates new bundles, updates component quantities in existing bundles, and removes bundle components for one or multiple [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) objects.

  Each bundle variant can contain up to 30 component variants with specified quantities. After an app assigns components to a bundle, only that app can manage those components.

  ***

  **Note:** For most use cases, use \<a href="https://shopify.dev/docs/api/admin-graphql/latest/mutations/productBundleCreate">\<code>\<span class="PreventFireFoxApplyingGapToWBR">product\<wbr/>Bundle\<wbr/>Create\</span>\</code>\</a> instead, which creates product fixed bundles. \<code>\<span class="PreventFireFoxApplyingGapToWBR">product\<wbr/>Variant\<wbr/>Relationship\<wbr/>Bulk\<wbr/>Update\</span>\</code> is for \<a href="https://shopify.dev/docs/apps/build/product-merchandising/bundles/add-variant-fixed-bundle">variant fixed bundles\</a>, where each variant has its own component configuration.

  ***

  * input

    [\[Product​Variant​Relationship​Update​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductVariantRelationshipUpdateInput)

    required

    ### Arguments

    The input options for the product variant being updated.

  ***

***

### Map

#### Mutations with this payload

* [product​Variant​Relationship​Bulk​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantRelationshipBulkUpdate)

---
<a id="publication-create-payload"></a>

## Publication​Create​Payload

payload

Return type for `publicationCreate` mutation.

### Fields

* publication

  [Publication](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication)

  The publication that's been created.

* user​Errors

  [\[Publication​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PublicationUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [publication​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publicationCreate)

  mutation

  Creates a [`Publication`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication) that controls which [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) and [`Collection`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection) customers can access through a [`Catalog`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog).

  ### When to create a publication

  Publications are **optional** for catalogs. Only create a publication if you need to control which products are visible in a specific catalog context. When a publication isn't associated with a catalog, product availability is determined by the sales channel.

  **Create a publication if you need to:**

  * Restrict product visibility to a subset of your inventory for a specific market or company location
  * Publish different product selections to different contexts

  **Do NOT create a publication if:**

  * You want product availability determined by the sales channel
  * You only need custom pricing (use a price list on the catalog instead)

  ### Configuration options

  You can create an empty publication and add products later, or prepopulate it with all existing products. The [`autoPublish`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publicationCreate#arguments-input.fields.autoPublish) field determines whether the publication automatically adds newly created products.

  * input

    [Publication​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PublicationCreateInput)

    required

    ### Arguments

    The input fields to use when creating the publication.

  ***

***

### Map

#### Mutations with this payload

* [publication​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publicationCreate)

---
<a id="publication-delete-payload"></a>

## Publication​Delete​Payload

payload

Return type for `publicationDelete` mutation.

### Fields

* deleted​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the publication that was deleted.

* user​Errors

  [\[Publication​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PublicationUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [publication​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publicationDelete)

  mutation

  Deletes a publication.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the publication to delete.

  ***

***

### Map

#### Mutations with this payload

* [publication​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publicationDelete)

---
<a id="publication-update-payload"></a>

## Publication​Update​Payload

payload

Return type for `publicationUpdate` mutation.

### Fields

* publication

  [Publication](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication)

  The publication that's been updated.

* user​Errors

  [\[Publication​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PublicationUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [publication​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publicationUpdate)

  mutation

  Updates a [`Publication`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication).

  You can add or remove [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) from the publication, with a maximum of 50 items per operation. The [`autoPublish`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publicationUpdate#arguments-input.fields.autoPublish) field determines whether new products automatically display in this publication.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the publication to update.

  * input

    [Publication​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PublicationUpdateInput)

    required

    The input fields to use when updating the publication.

  ***

***

### Map

#### Mutations with this payload

* [publication​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publicationUpdate)

---
<a id="publishable-publish-payload"></a>

## Publishable​Publish​Payload

payload

Return type for `publishablePublish` mutation.

### Fields

* publishable

  [Publishable](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Publishable)

  Resource that has been published.

* shop

  [Shop!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop)

  non-null

  The user's shop.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [publishable​Publish](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishablePublish)

  mutation

  Publishes a resource, such as a [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) or [`Collection`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection), to one or more [publications](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication).

  For products to be visible in a channel, they must have an active [`ProductStatus`](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductStatus). Products sold exclusively on subscription (`requiresSellingPlan: true`) can only be published to online stores.

  You can schedule future publication by providing a publish date. Only online store channels support [scheduled publishing](https://shopify.dev/docs/apps/build/sales-channels/scheduled-product-publishing).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The resource to create or update publications for.

  * input

    [\[Publication​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PublicationInput)

    required

    Specifies the input fields required to publish a resource.

  ***

***

### Map

#### Mutations with this payload

* [publishable​Publish](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishablePublish)

---
<a id="publishable-publish-to-current-channel-payload"></a>

## Publishable​Publish​To​Current​Channel​Payload

payload

Return type for `publishablePublishToCurrentChannel` mutation.

### Fields

* publishable

  [Publishable](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Publishable)

  Resource that has been published.

* shop

  [Shop!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop)

  non-null

  The user's shop.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [publishable​Publish​To​Current​Channel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishablePublishToCurrentChannel)

  mutation

  Deprecated

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The resource to create or update publications for.

  ***

***

### Map

---
<a id="publishable-unpublish-payload"></a>

## Publishable​Unpublish​Payload

payload

Return type for `publishableUnpublish` mutation.

### Fields

* publishable

  [Publishable](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Publishable)

  Resource that has been unpublished.

* shop

  [Shop!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop)

  non-null

  The user's shop.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [publishable​Unpublish](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishableUnpublish)

  mutation

  Unpublishes a resource, such as a [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) or [`Collection`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection), from one or more [publications](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication). The resource remains in your store but becomes unavailable to customers.

  For products to be visible in a channel, they must have an active [`ProductStatus`](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductStatus).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The resource to delete or update publications for.

  * input

    [\[Publication​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PublicationInput)

    required

    Specifies the input fields required to unpublish a resource.

  ***

***

### Map

#### Mutations with this payload

* [publishable​Unpublish](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishableUnpublish)

---
<a id="publishable-unpublish-to-current-channel-payload"></a>

## Publishable​Unpublish​To​Current​Channel​Payload

payload

Return type for `publishableUnpublishToCurrentChannel` mutation.

### Fields

* publishable

  [Publishable](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Publishable)

  Resource that has been unpublished.

* shop

  [Shop!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop)

  non-null

  The user's shop.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [publishable​Unpublish​To​Current​Channel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishableUnpublishToCurrentChannel)

  mutation

  Deprecated

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The resource to delete or update publications for.

  ***

***

### Map

---
<a id="pub-sub-server-pixel-update-payload"></a>

## Pub​Sub​Server​Pixel​Update​Payload

payload

Return type for `pubSubServerPixelUpdate` mutation.

### Fields

* server​Pixel

  [Server​Pixel](https://shopify.dev/docs/api/admin-graphql/latest/objects/ServerPixel)

  The server pixel as configured by the mutation.

* user​Errors

  [\[Errors​Server​Pixel​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ErrorsServerPixelUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [pub​Sub​Server​Pixel​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pubSubServerPixelUpdate)

  mutation

  Updates the server pixel to connect to a Google PubSub endpoint. Running this mutation deletes any previous subscriptions for the server pixel.

  * pub​Sub​Project

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    The Google PubSub project ID.

  * pub​Sub​Topic

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    The Google PubSub topic ID.

  ***

***

### Map

#### Mutations with this payload

* [pub​Sub​Server​Pixel​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pubSubServerPixelUpdate)

---
<a id="pub-sub-webhook-subscription-create-payload"></a>

## Pub​Sub​Webhook​Subscription​Create​Payload

payload

Return type for `pubSubWebhookSubscriptionCreate` mutation.

### Fields

* user​Errors

  [\[Pub​Sub​Webhook​Subscription​Create​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PubSubWebhookSubscriptionCreateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* webhook​Subscription

  [Webhook​Subscription](https://shopify.dev/docs/api/admin-graphql/latest/objects/WebhookSubscription)

  The webhook subscription that was created.

***

### Mutations with this payload

* [pub​Sub​Webhook​Subscription​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pubSubWebhookSubscriptionCreate)

  mutation

  Deprecated

  * topic

    [Webhook​Subscription​Topic!](https://shopify.dev/docs/api/admin-graphql/latest/enums/WebhookSubscriptionTopic)

    required

    ### Arguments

    The type of event that triggers the webhook.

  * webhook​Subscription

    [Pub​Sub​Webhook​Subscription​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PubSubWebhookSubscriptionInput)

    required

    Specifies the input fields for a Google Cloud Pub/Sub webhook subscription.

  ***

***

### Map

---
<a id="pub-sub-webhook-subscription-update-payload"></a>

## Pub​Sub​Webhook​Subscription​Update​Payload

payload

Return type for `pubSubWebhookSubscriptionUpdate` mutation.

### Fields

* user​Errors

  [\[Pub​Sub​Webhook​Subscription​Update​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PubSubWebhookSubscriptionUpdateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* webhook​Subscription

  [Webhook​Subscription](https://shopify.dev/docs/api/admin-graphql/latest/objects/WebhookSubscription)

  The webhook subscription that was updated.

***

### Mutations with this payload

* [pub​Sub​Webhook​Subscription​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pubSubWebhookSubscriptionUpdate)

  mutation

  Deprecated

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the webhook subscription to update.

  * webhook​Subscription

    [Pub​Sub​Webhook​Subscription​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PubSubWebhookSubscriptionInput)

    required

    Specifies the input fields for a Google Cloud Pub/Sub webhook subscription.

  ***

***

### Map

---
<a id="quantity-pricing-by-variant-update-payload"></a>

## Quantity​Pricing​By​Variant​Update​Payload

payload

Return type for `quantityPricingByVariantUpdate` mutation.

### Fields

* product​Variants

  [\[Product​Variant!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant)

  The variants for which quantity pricing was created successfully in the price list.

* user​Errors

  [\[Quantity​Pricing​By​Variant​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/QuantityPricingByVariantUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [quantity​Pricing​By​Variant​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/quantityPricingByVariantUpdate)

  mutation

  Updates quantity pricing on a [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList) for specific [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) objects. You can set fixed prices (see [`PriceListPrice`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceListPrice)), quantity rules, and quantity price breaks in a single operation.

  [`QuantityRule`](https://shopify.dev/docs/api/admin-graphql/latest/objects/QuantityRule) objects define minimum, maximum, and increment constraints for ordering. [`QuantityPriceBreak`](https://shopify.dev/docs/api/admin-graphql/latest/objects/QuantityPriceBreak) objects offer tiered pricing based on purchase volume.

  The mutation executes delete operations before create operations and doesn't allow partial updates.

  ***

  **Note:** If any requested change fails, then the mutation doesn\&#39;t apply any of the changes.

  ***

  * price​List​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the price list for which quantity pricing will be updated.

  * input

    [Quantity​Pricing​By​Variant​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/QuantityPricingByVariantUpdateInput)

    required

    The input data used to update the quantity pricing in the price list.

  ***

***

### Map

#### Mutations with this payload

* [quantity​Pricing​By​Variant​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/quantityPricingByVariantUpdate)

---
<a id="quantity-rules-add-payload"></a>

## Quantity​Rules​Add​Payload

payload

Return type for `quantityRulesAdd` mutation.

### Fields

* quantity​Rules

  [\[Quantity​Rule!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/QuantityRule)

  The list of quantity rules that were added to or updated in the price list.

* user​Errors

  [\[Quantity​Rule​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/QuantityRuleUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [quantity​Rules​Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/quantityRulesAdd)

  mutation

  Creates or updates existing quantity rules on a price list. You can use the `quantityRulesAdd` mutation to set order level minimums, maximumums and increments for specific product variants.

  * price​List​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the price list to which the quantity rules will be added or updated.

  * quantity​Rules

    [\[Quantity​Rule​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/QuantityRuleInput)

    required

    The list of quantity rules to add or update in the price list.

  ***

***

### Map

#### Mutations with this payload

* [quantity​Rules​Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/quantityRulesAdd)

---
<a id="quantity-rules-delete-payload"></a>

## Quantity​Rules​Delete​Payload

payload

Return type for `quantityRulesDelete` mutation.

### Fields

* deleted​Quantity​Rules​Variant​Ids

  [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  A list of product variant IDs whose quantity rules were removed from the price list.

* user​Errors

  [\[Quantity​Rule​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/QuantityRuleUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [quantity​Rules​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/quantityRulesDelete)

  mutation

  Deletes specific quantity rules from a price list using a product variant ID. You can use the `quantityRulesDelete` mutation to delete a set of quantity rules from a price list.

  * price​List​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the price list from which the quantity rules will be deleted.

  * variant​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    A list of product variant IDs whose quantity rules will be removed from the price list.

  ***

***

### Map

#### Mutations with this payload

* [quantity​Rules​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/quantityRulesDelete)

---
<a id="refund-create-payload"></a>

## Refund​Create​Payload

payload

Return type for `refundCreate` mutation.

### Fields

* order

  [Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order)

  The order associated with the created refund.

* refund

  [Refund](https://shopify.dev/docs/api/admin-graphql/latest/objects/Refund)

  The created refund.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [refund​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/refundCreate)

  mutation

  Creates a refund for an order, allowing you to process returns and issue payments back to customers.

  Use the `refundCreate` mutation to programmatically process refunds in scenarios where you need to return money to customers, such as when handling returns, processing chargebacks, or correcting order errors.

  The `refundCreate` mutation supports various refund scenarios:

  * Refunding line items with optional restocking
  * Refunding shipping costs
  * Refunding duties and import taxes
  * Refunding additional fees
  * Processing refunds through different payment methods
  * Issuing store credit refunds (when enabled)

  You can create both full and partial refunds, and optionally allow over-refunding in specific cases.

  After creating a refund, you can track its status and details through the order's [`refunds`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.refunds) field. The refund is associated with the order and can be used for reporting and reconciliation purposes.

  Learn more about [managing returns](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/build-return-management) and [refunding duties](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/view-and-refund-duties).

  ***

  **Note:** The refunding behavior of the \<code>\<span class="PreventFireFoxApplyingGapToWBR">refund\<wbr/>Create\</span>\</code> mutation is similar to the \<a href="https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnRefund">\<code>\<span class="PreventFireFoxApplyingGapToWBR">refund\<wbr/>Return\</span>\</code>\</a> mutation. The key difference is that the \<code>\<span class="PreventFireFoxApplyingGapToWBR">refund\<wbr/>Create\</span>\</code> mutation lets you to specify restocking behavior for line items, whereas the \<code>\<span class="PreventFireFoxApplyingGapToWBR">return\<wbr/>Refund\</span>\</code> mutation focuses solely on handling the financial refund without any restocking input.

  ***

  ***

  **Caution:** As of 2026-01, this mutation supports an optional idempotency key using the \<code>@idempotent\</code> directive. As of 2026-04, the idempotency key is required and must be provided using the \<code>@idempotent\</code> directive. For more information, see the \<a href="https://shopify.dev/docs/api/usage/idempotent-requests">idempotency documentation\</a>.

  ***

  * input

    [Refund​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/RefundInput)

    required

    ### Arguments

    The input fields that are used in the mutation for creating a refund.

  ***

***

### Map

#### Mutations with this payload

* [refund​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/refundCreate)

---
<a id="remove-from-return-payload"></a>

## Remove​From​Return​Payload

payload

Return type for `removeFromReturn` mutation.

### Fields

* return

  [Return](https://shopify.dev/docs/api/admin-graphql/latest/objects/Return)

  The modified return.

* user​Errors

  [\[Return​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [remove​From​Return](https://shopify.dev/docs/api/admin-graphql/latest/mutations/removeFromReturn)

  mutation

  Removes return and/or exchange lines from a return.

  * return​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the return for line item removal.

  * return​Line​Items

    [\[Return​Line​Item​Remove​From​Return​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnLineItemRemoveFromReturnInput)

    The return line items to remove from the return.

  * exchange​Line​Items

    [\[Exchange​Line​Item​Remove​From​Return​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ExchangeLineItemRemoveFromReturnInput)

    The exchange line items to remove from the return.

  ***

***

### Map

#### Mutations with this payload

* [remove​From​Return](https://shopify.dev/docs/api/admin-graphql/latest/mutations/removeFromReturn)

---
<a id="return-approve-request-payload"></a>

## Return​Approve​Request​Payload

payload

Return type for `returnApproveRequest` mutation.

### Fields

* return

  [Return](https://shopify.dev/docs/api/admin-graphql/latest/objects/Return)

  The approved return.

* user​Errors

  [\[Return​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [return​Approve​Request](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnApproveRequest)

  mutation

  Approves a customer's return request. If this mutation is successful, then the `Return.status` field of the approved return is set to `OPEN`.

  * input

    [Return​Approve​Request​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnApproveRequestInput)

    required

    ### Arguments

    The input fields to approve a return.

  ***

***

### Map

#### Mutations with this payload

* [return​Approve​Request](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnApproveRequest)

---
<a id="return-cancel-payload"></a>

## Return​Cancel​Payload

payload

Return type for `returnCancel` mutation.

### Fields

* return

  [Return](https://shopify.dev/docs/api/admin-graphql/latest/objects/Return)

  The canceled return.

* user​Errors

  [\[Return​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [return​Cancel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnCancel)

  mutation

  Cancels a return and restores the items back to being fulfilled. Canceling a return is only available before any work has been done on the return (such as an inspection or refund).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the return to cancel.

  * notify​Customer

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    DeprecatedDefault:false

  ***

***

### Map

#### Mutations with this payload

* [return​Cancel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnCancel)

---
<a id="return-close-payload"></a>

## Return​Close​Payload

payload

Return type for `returnClose` mutation.

### Fields

* return

  [Return](https://shopify.dev/docs/api/admin-graphql/latest/objects/Return)

  The closed return.

* user​Errors

  [\[Return​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [return​Close](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnClose)

  mutation

  Indicates a return is complete, either when a refund has been made and items restocked, or simply when it has been marked as returned in the system.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the return to close.

  ***

***

### Map

#### Mutations with this payload

* [return​Close](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnClose)

---
<a id="return-create-payload"></a>

## Return​Create​Payload

payload

Return type for `returnCreate` mutation.

### Fields

* return

  [Return](https://shopify.dev/docs/api/admin-graphql/latest/objects/Return)

  The created return.

* user​Errors

  [\[Return​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [return​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnCreate)

  mutation

  Creates a return from an existing order that has at least one fulfilled [line item](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem) that hasn't yet been refunded. If you create a return on an archived order, then the order is automatically unarchived.

  Use the `returnCreate` mutation when your workflow involves [approving](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnApproveRequest) or [declining](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnDeclineRequest) requested returns outside of the Shopify platform.

  The `returnCreate` mutation performs the following actions:

  * Creates a return in the `OPEN` state, and assumes that the return request from the customer has already been approved
  * Creates a [reverse fulfillment order](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/manage-reverse-fulfillment-orders), and enables you to create a [reverse delivery](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/manage-reverse-deliveries) for the reverse fulfillment order
  * Creates a sales agreement with a `RETURN` reason, which links to all sales created for the return or exchange
  * Generates sales records that reverse the sales records for the items being returned
  * Generates sales records for any exchange line items

  After you've created a return, use the [`return`](https://shopify.dev/docs/api/admin-graphql/latest/queries/return) query to retrieve the return by its ID. Learn more about providing a [return management workflow](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/build-return-management) for merchants.

  * return​Input

    [Return​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnInput)

    required

    ### Arguments

    Specifies the input fields for a return.

  ***

***

### Map

#### Mutations with this payload

* [return​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnCreate)

---
<a id="return-decline-request-payload"></a>

## Return​Decline​Request​Payload

payload

Return type for `returnDeclineRequest` mutation.

### Fields

* return

  [Return](https://shopify.dev/docs/api/admin-graphql/latest/objects/Return)

  The declined return.

* user​Errors

  [\[Return​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [return​Decline​Request](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnDeclineRequest)

  mutation

  Declines a return on an order. When a return is declined, each `ReturnLineItem.fulfillmentLineItem` can be associated to a new return. Use the `ReturnCreate` or `ReturnRequest` mutation to initiate a new return.

  * input

    [Return​Decline​Request​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnDeclineRequestInput)

    required

    ### Arguments

    The input fields for declining a customer's return request.

  ***

***

### Map

#### Mutations with this payload

* [return​Decline​Request](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnDeclineRequest)

---
<a id="return-line-item-remove-from-return-payload"></a>

## Return​Line​Item​Remove​From​Return​Payload

payload

Return type for `returnLineItemRemoveFromReturn` mutation.

### Fields

* return

  [Return](https://shopify.dev/docs/api/admin-graphql/latest/objects/Return)

  The modified return.

* user​Errors

  [\[Return​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [return​Line​Item​Remove​From​Return](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnLineItemRemoveFromReturn)

  mutation

  Deprecated

  * return​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the return for line item removal.

  * return​Line​Items

    [\[Return​Line​Item​Remove​From​Return​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnLineItemRemoveFromReturnInput)

    required

    The return line items to remove from the return.

  ***

***

### Map

---
<a id="return-process-payload"></a>

## Return​Process​Payload

payload

Return type for `returnProcess` mutation.

### Fields

* return

  [Return](https://shopify.dev/docs/api/admin-graphql/latest/objects/Return)

  The processed return.

* user​Errors

  [\[Return​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [return​Process](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnProcess)

  mutation

  Processes a return by confirming which items customers return and exchange, handling their disposition, and optionally issuing refunds. This mutation confirms the quantities for [`ReturnLineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnLineItem) and [`ExchangeLineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ExchangeLineItem) objects previously created on the [`Return`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Return).

  For returned items, you specify how to handle them through dispositions such as restocking or disposal. The mutation creates [`FulfillmentOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder) objects for exchange items and records all transactions in the merchant's financial reports. You can optionally issue refunds through financial transfers, apply refund duties, and refund shipping costs.

  Learn more about [processing returns](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/build-return-management).

  * input

    [Return​Process​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnProcessInput)

    required

    ### Arguments

    Specifies the input fields for processing a return.

  ***

***

### Map

#### Mutations with this payload

* [return​Process](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnProcess)

---
<a id="return-refund-payload"></a>

## Return​Refund​Payload

payload

Return type for `returnRefund` mutation.

### Fields

* refund

  [Refund](https://shopify.dev/docs/api/admin-graphql/latest/objects/Refund)

  The created refund.

* user​Errors

  [\[Return​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [return​Refund](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnRefund)

  mutation

  Deprecated

  * return​Refund​Input

    [Return​Refund​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnRefundInput)

    required

    ### Arguments

    The input fields to refund a return.

  ***

***

### Map

---
<a id="return-reopen-payload"></a>

## Return​Reopen​Payload

payload

Return type for `returnReopen` mutation.

### Fields

* return

  [Return](https://shopify.dev/docs/api/admin-graphql/latest/objects/Return)

  The reopened return.

* user​Errors

  [\[Return​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [return​Reopen](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnReopen)

  mutation

  Reopens a closed return.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the return to reopen.

  ***

***

### Map

#### Mutations with this payload

* [return​Reopen](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnReopen)

---
<a id="return-request-payload"></a>

## Return​Request​Payload

payload

Return type for `returnRequest` mutation.

### Fields

* return

  [Return](https://shopify.dev/docs/api/admin-graphql/latest/objects/Return)

  The requested return.

* user​Errors

  [\[Return​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [return​Request](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnRequest)

  mutation

  Creates a return request that requires merchant approval before processing. The return has its status set to `REQUESTED` and the merchant must approve or decline it.

  Use this mutation when customers initiate returns that need review. After creating a requested return, use [`returnApproveRequest`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnApproveRequest) to approve it or [`returnDeclineRequest`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnDeclineRequest) to decline it.

  For returns that should be immediately open for processing, use the [`returnCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnCreate) mutation instead.

  Learn more about [building return management workflows](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/build-return-management).

  * input

    [Return​Request​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnRequestInput)

    required

    ### Arguments

    The input fields for requesting a return.

  ***

***

### Map

#### Mutations with this payload

* [return​Request](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnRequest)

---
<a id="reverse-delivery-create-with-shipping-payload"></a>

## Reverse​Delivery​Create​With​Shipping​Payload

payload

Return type for `reverseDeliveryCreateWithShipping` mutation.

### Fields

* reverse​Delivery

  [Reverse​Delivery](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseDelivery)

  The created reverse delivery.

* user​Errors

  [\[Return​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [reverse​Delivery​Create​With​Shipping](https://shopify.dev/docs/api/admin-graphql/latest/mutations/reverseDeliveryCreateWithShipping)

  mutation

  Creates a new reverse delivery with associated external shipping information.

  * reverse​Fulfillment​Order​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the reverse fulfillment order that's associated to the reverse delivery.

  * reverse​Delivery​Line​Items

    [\[Reverse​Delivery​Line​Item​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReverseDeliveryLineItemInput)

    required

    The reverse delivery line items to be created. If an empty array is provided, then this mutation will create a reverse delivery line item for each reverse fulfillment order line item, with its quantity equal to the reverse fulfillment order line item total quantity.

  * tracking​Input

    [Reverse​Delivery​Tracking​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReverseDeliveryTrackingInput)

    Default:null

    The tracking information for the reverse delivery.

  * label​Input

    [Reverse​Delivery​Label​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReverseDeliveryLabelInput)

    Default:null

    The return label file information for the reverse delivery.

  * notify​Customer

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:true

    When `true` the customer is notified with delivery instructions if the `ReverseFulfillmentOrder.order.email` is present.

  ***

***

### Map

#### Mutations with this payload

* [reverse​Delivery​Create​With​Shipping](https://shopify.dev/docs/api/admin-graphql/latest/mutations/reverseDeliveryCreateWithShipping)

---
<a id="reverse-delivery-shipping-update-payload"></a>

## Reverse​Delivery​Shipping​Update​Payload

payload

Return type for `reverseDeliveryShippingUpdate` mutation.

### Fields

* reverse​Delivery

  [Reverse​Delivery](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseDelivery)

  The updated reverse delivery.

* user​Errors

  [\[Return​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [reverse​Delivery​Shipping​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/reverseDeliveryShippingUpdate)

  mutation

  Updates a reverse delivery with associated external shipping information.

  * reverse​Delivery​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the reverse delivery to update.

  * tracking​Input

    [Reverse​Delivery​Tracking​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReverseDeliveryTrackingInput)

    Default:null

    The tracking information for the reverse delivery.

  * label​Input

    [Reverse​Delivery​Label​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReverseDeliveryLabelInput)

    Default:null

    The return label file information for the reverse delivery.

  * notify​Customer

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:true

    If `true` and an email address exists on the `ReverseFulfillmentOrder.order`, then the customer is notified with the updated delivery instructions.

  ***

***

### Map

#### Mutations with this payload

* [reverse​Delivery​Shipping​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/reverseDeliveryShippingUpdate)

---
<a id="reverse-fulfillment-order-dispose-payload"></a>

## Reverse​Fulfillment​Order​Dispose​Payload

payload

Return type for `reverseFulfillmentOrderDispose` mutation.

### Fields

* reverse​Fulfillment​Order​Line​Items

  [\[Reverse​Fulfillment​Order​Line​Item!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseFulfillmentOrderLineItem)

  The disposed reverse fulfillment order line items.

* user​Errors

  [\[Return​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [reverse​Fulfillment​Order​Dispose](https://shopify.dev/docs/api/admin-graphql/latest/mutations/reverseFulfillmentOrderDispose)

  mutation

  Disposes reverse fulfillment order line items.

  * disposition​Inputs

    [\[Reverse​Fulfillment​Order​Dispose​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReverseFulfillmentOrderDisposeInput)

    required

    ### Arguments

    The input parameters required to dispose reverse fulfillment order line items.

  ***

***

### Map

#### Mutations with this payload

* [reverse​Fulfillment​Order​Dispose](https://shopify.dev/docs/api/admin-graphql/latest/mutations/reverseFulfillmentOrderDispose)

---
<a id="saved-search-create-payload"></a>

## Saved​Search​Create​Payload

payload

Return type for `savedSearchCreate` mutation.

### Fields

* saved​Search

  [Saved​Search](https://shopify.dev/docs/api/admin-graphql/latest/objects/SavedSearch)

  The saved search that was created.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [saved​Search​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/savedSearchCreate)

  mutation

  Creates a saved search.

  * input

    [Saved​Search​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SavedSearchCreateInput)

    required

    ### Arguments

    Specifies the input fields for a saved search.

  ***

***

### Map

#### Mutations with this payload

* [saved​Search​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/savedSearchCreate)

---
<a id="saved-search-delete-payload"></a>

## Saved​Search​Delete​Payload

payload

Return type for `savedSearchDelete` mutation.

### Fields

* deleted​Saved​Search​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the saved search that was deleted.

* shop

  [Shop!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop)

  non-null

  The shop of the saved search that was deleted.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [saved​Search​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/savedSearchDelete)

  mutation

  Delete a saved search.

  * input

    [Saved​Search​Delete​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SavedSearchDeleteInput)

    required

    ### Arguments

    The input fields to delete a saved search.

  ***

***

### Map

#### Mutations with this payload

* [saved​Search​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/savedSearchDelete)

---
<a id="saved-search-update-payload"></a>

## Saved​Search​Update​Payload

payload

Return type for `savedSearchUpdate` mutation.

### Fields

* saved​Search

  [Saved​Search](https://shopify.dev/docs/api/admin-graphql/latest/objects/SavedSearch)

  The saved search that was updated.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [saved​Search​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/savedSearchUpdate)

  mutation

  Updates a saved search.

  * input

    [Saved​Search​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SavedSearchUpdateInput)

    required

    ### Arguments

    The input fields to update a saved search.

  ***

***

### Map

#### Mutations with this payload

* [saved​Search​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/savedSearchUpdate)

---
<a id="script-tag-create-payload"></a>

## Script​Tag​Create​Payload

payload

Return type for `scriptTagCreate` mutation.

### Fields

* script​Tag

  [Script​Tag](https://shopify.dev/docs/api/admin-graphql/latest/objects/ScriptTag)

  The script tag that was created.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [script​Tag​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/scriptTagCreate)

  mutation

  **Theme app extensions:**

  If your app integrates with a Shopify theme and you plan to submit it to the Shopify App Store, you must use theme app extensions instead of Script tags. Script tags can only be used with vintage themes. [Learn more](https://shopify.dev/apps/online-store#what-integration-method-should-i-use).

  **Script tag deprecation:**

  Script tags will be sunset for the **Order status** page on August 28, 2025. [Upgrade to Checkout Extensibility](https://www.shopify.com/plus/upgrading-to-checkout-extensibility) before this date. [Shopify Scripts](https://shopify.dev/docs/api/liquid/objects#script) will continue to work alongside Checkout Extensibility until August 28, 2025.

  Creates a new script tag.

  * input

    [Script​Tag​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ScriptTagInput)

    required

    ### Arguments

    The input fields for a script tag.

  ***

***

### Map

#### Mutations with this payload

* [script​Tag​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/scriptTagCreate)

---
<a id="script-tag-delete-payload"></a>

## Script​Tag​Delete​Payload

payload

Return type for `scriptTagDelete` mutation.

### Fields

* deleted​Script​Tag​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the deleted script tag.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [script​Tag​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/scriptTagDelete)

  mutation

  **Theme app extensions:**

  If your app integrates with a Shopify theme and you plan to submit it to the Shopify App Store, you must use theme app extensions instead of Script tags. Script tags can only be used with vintage themes. [Learn more](https://shopify.dev/apps/online-store#what-integration-method-should-i-use).

  **Script tag deprecation:**

  Script tags will be sunset for the **Order status** page on August 28, 2025. [Upgrade to Checkout Extensibility](https://www.shopify.com/plus/upgrading-to-checkout-extensibility) before this date. [Shopify Scripts](https://shopify.dev/docs/api/liquid/objects#script) will continue to work alongside Checkout Extensibility until August 28, 2025.

  Deletes a script tag.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the script tag to delete.

  ***

***

### Map

#### Mutations with this payload

* [script​Tag​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/scriptTagDelete)

---
<a id="script-tag-update-payload"></a>

## Script​Tag​Update​Payload

payload

Return type for `scriptTagUpdate` mutation.

### Fields

* script​Tag

  [Script​Tag](https://shopify.dev/docs/api/admin-graphql/latest/objects/ScriptTag)

  The script tag that was updated.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [script​Tag​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/scriptTagUpdate)

  mutation

  **Theme app extensions:**

  If your app integrates with a Shopify theme and you plan to submit it to the Shopify App Store, you must use theme app extensions instead of Script tags. Script tags can only be used with vintage themes. [Learn more](https://shopify.dev/apps/online-store#what-integration-method-should-i-use).

  **Script tag deprecation:**

  Script tags will be sunset for the **Order status** page on August 28, 2025. [Upgrade to Checkout Extensibility](https://www.shopify.com/plus/upgrading-to-checkout-extensibility) before this date. [Shopify Scripts](https://shopify.dev/docs/api/liquid/objects#script) will continue to work alongside Checkout Extensibility until August 28, 2025.

  Updates a script tag.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the script tag to update.

  * input

    [Script​Tag​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ScriptTagInput)

    required

    Specifies the input fields for a script tag.

  ***

***

### Map

#### Mutations with this payload

* [script​Tag​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/scriptTagUpdate)

---
<a id="segment-create-payload"></a>

## Segment​Create​Payload

payload

Return type for `segmentCreate` mutation.

### Fields

* segment

  [Segment](https://shopify.dev/docs/api/admin-graphql/latest/objects/Segment)

  The newly created segment.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [segment​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/segmentCreate)

  mutation

  Creates a segment.

  * name

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    The name of the segment to be created. Segment names must be unique.

  * query

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    A precise definition of the segment. The definition is composed of a combination of conditions on facts about customers such as `email_subscription_status = 'SUBSCRIBED'` with [this syntax](https://shopify.dev/api/shopifyql/segment-query-language-reference).

  ***

***

### Map

#### Mutations with this payload

* [segment​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/segmentCreate)

---
<a id="segment-delete-payload"></a>

## Segment​Delete​Payload

payload

Return type for `segmentDelete` mutation.

### Fields

* deleted​Segment​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  ID of the deleted segment.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [segment​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/segmentDelete)

  mutation

  Deletes a segment.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    Specifies the segment to delete.

  ***

***

### Map

#### Mutations with this payload

* [segment​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/segmentDelete)

---
<a id="segment-update-payload"></a>

## Segment​Update​Payload

payload

Return type for `segmentUpdate` mutation.

### Fields

* segment

  [Segment](https://shopify.dev/docs/api/admin-graphql/latest/objects/Segment)

  The updated segment.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [segment​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/segmentUpdate)

  mutation

  Updates a segment.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    Specifies the segment to be updated.

  * name

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The new name for the segment.

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A precise definition of the segment. The definition is composed of a combination of conditions on facts about customers such as `email_subscription_status = 'SUBSCRIBED'` with [this syntax](https://shopify.dev/api/shopifyql/segment-query-language-reference).

  ***

***

### Map

#### Mutations with this payload

* [segment​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/segmentUpdate)

---
<a id="selling-plan-group-add-products-payload"></a>

## Selling​Plan​Group​Add​Products​Payload

payload

Return type for `sellingPlanGroupAddProducts` mutation.

### Fields

* selling​Plan​Group

  [Selling​Plan​Group](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroup)

  The updated selling plan group.

* user​Errors

  [\[Selling​Plan​Group​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroupUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [selling​Plan​Group​Add​Products](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingPlanGroupAddProducts)

  mutation

  Adds multiple products to a selling plan group.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the selling plan group.

  * product​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The IDs of the products to add.

  ***

***

### Map

#### Mutations with this payload

* [selling​Plan​Group​Add​Products](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingPlanGroupAddProducts)

---
<a id="selling-plan-group-add-product-variants-payload"></a>

## Selling​Plan​Group​Add​Product​Variants​Payload

payload

Return type for `sellingPlanGroupAddProductVariants` mutation.

### Fields

* selling​Plan​Group

  [Selling​Plan​Group](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroup)

  The updated selling plan group.

* user​Errors

  [\[Selling​Plan​Group​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroupUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [selling​Plan​Group​Add​Product​Variants](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingPlanGroupAddProductVariants)

  mutation

  Adds multiple product variants to a selling plan group.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the selling plan group.

  * product​Variant​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The IDs of the product variants to add.

  ***

***

### Map

#### Mutations with this payload

* [selling​Plan​Group​Add​Product​Variants](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingPlanGroupAddProductVariants)

---
<a id="selling-plan-group-create-payload"></a>

## Selling​Plan​Group​Create​Payload

payload

Return type for `sellingPlanGroupCreate` mutation.

### Fields

* selling​Plan​Group

  [Selling​Plan​Group](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroup)

  The created selling plan group object.

* user​Errors

  [\[Selling​Plan​Group​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroupUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [selling​Plan​Group​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingPlanGroupCreate)

  mutation

  Creates a selling plan group that defines how products can be sold and purchased. A selling plan group represents a selling method such as "Subscribe and save", "Pre-order", or "Try before you buy" and contains one or more selling plans with specific billing, delivery, and pricing policies.

  Use the [`resources`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingPlanGroupCreate#arguments-resources) argument to associate products or product variants with the group during creation. You can also add products later using [`sellingPlanGroupAddProducts`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingPlanGroupAddProducts) or [`sellingPlanGroupAddProductVariants`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingPlanGroupAddProductVariants).

  Learn more about [building selling plan groups](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/selling-plans/build-a-selling-plan#step-1-create-a-selling-plan-group) or explore [examples of creating TBYB and other selling plan groups](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingPlanGroupCreate?example=create-a-tbyb-selling-plan-group).

  * input

    [Selling​Plan​Group​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanGroupInput)

    required

    ### Arguments

    The properties of the new Selling Plan Group.

  * resources

    [Selling​Plan​Group​Resource​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanGroupResourceInput)

    The resources this Selling Plan Group should be applied to.

  ***

***

### Map

#### Mutations with this payload

* [selling​Plan​Group​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingPlanGroupCreate)

---
<a id="selling-plan-group-delete-payload"></a>

## Selling​Plan​Group​Delete​Payload

payload

Return type for `sellingPlanGroupDelete` mutation.

### Fields

* deleted​Selling​Plan​Group​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the deleted selling plan group object.

* user​Errors

  [\[Selling​Plan​Group​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroupUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [selling​Plan​Group​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingPlanGroupDelete)

  mutation

  Delete a Selling Plan Group. This does not affect subscription contracts.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The id of the selling plan group to delete.

  ***

***

### Map

#### Mutations with this payload

* [selling​Plan​Group​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingPlanGroupDelete)

---
<a id="selling-plan-group-remove-products-payload"></a>

## Selling​Plan​Group​Remove​Products​Payload

payload

Return type for `sellingPlanGroupRemoveProducts` mutation.

### Fields

* removed​Product​Ids

  [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The removed product ids.

* user​Errors

  [\[Selling​Plan​Group​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroupUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [selling​Plan​Group​Remove​Products](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingPlanGroupRemoveProducts)

  mutation

  Removes multiple products from a selling plan group.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the selling plan group.

  * product​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The IDs of the products to remove.

  ***

***

### Map

#### Mutations with this payload

* [selling​Plan​Group​Remove​Products](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingPlanGroupRemoveProducts)

---
<a id="selling-plan-group-remove-product-variants-payload"></a>

## Selling​Plan​Group​Remove​Product​Variants​Payload

payload

Return type for `sellingPlanGroupRemoveProductVariants` mutation.

### Fields

* removed​Product​Variant​Ids

  [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The removed product variant ids.

* user​Errors

  [\[Selling​Plan​Group​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroupUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [selling​Plan​Group​Remove​Product​Variants](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingPlanGroupRemoveProductVariants)

  mutation

  Removes multiple product variants from a selling plan group.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the selling plan group.

  * product​Variant​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The IDs of the product variants to remove.

  ***

***

### Map

#### Mutations with this payload

* [selling​Plan​Group​Remove​Product​Variants](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingPlanGroupRemoveProductVariants)

---
<a id="selling-plan-group-update-payload"></a>

## Selling​Plan​Group​Update​Payload

payload

Return type for `sellingPlanGroupUpdate` mutation.

### Fields

* deleted​Selling​Plan​Ids

  [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The IDs of the deleted Subscription Plans.

* selling​Plan​Group

  [Selling​Plan​Group](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroup)

  The updated Selling Plan Group.

* user​Errors

  [\[Selling​Plan​Group​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroupUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [selling​Plan​Group​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingPlanGroupUpdate)

  mutation

  Update a Selling Plan Group.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The Selling Plan Group to update.

  * input

    [Selling​Plan​Group​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanGroupInput)

    required

    The properties of the Selling Plan Group to update.

  ***

***

### Map

#### Mutations with this payload

* [selling​Plan​Group​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingPlanGroupUpdate)

---
<a id="server-pixel-create-payload"></a>

## Server​Pixel​Create​Payload

payload

Return type for `serverPixelCreate` mutation.

### Fields

* server​Pixel

  [Server​Pixel](https://shopify.dev/docs/api/admin-graphql/latest/objects/ServerPixel)

  The new server pixel.

* user​Errors

  [\[Errors​Server​Pixel​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ErrorsServerPixelUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [server​Pixel​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/serverPixelCreate)

  mutation

  Creates a new unconfigured server pixel. A single server pixel can exist for an app and shop combination. If you call this mutation when a server pixel already exists, then an error will return.

***

### Map

#### Mutations with this payload

* [server​Pixel​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/serverPixelCreate)

---
<a id="server-pixel-delete-payload"></a>

## Server​Pixel​Delete​Payload

payload

Return type for `serverPixelDelete` mutation.

### Fields

* deleted​Server​Pixel​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the server pixel that was deleted, if one was deleted.

* user​Errors

  [\[Errors​Server​Pixel​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ErrorsServerPixelUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [server​Pixel​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/serverPixelDelete)

  mutation

  Deletes the Server Pixel associated with the current app & shop.

***

### Map

#### Mutations with this payload

* [server​Pixel​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/serverPixelDelete)

---
<a id="shipping-package-delete-payload"></a>

## Shipping​Package​Delete​Payload

payload

Return type for `shippingPackageDelete` mutation.

### Fields

* deleted​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the deleted shipping package.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [shipping​Package​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shippingPackageDelete)

  mutation

  Deletes a shipping package.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the shipping package to remove.

  ***

***

### Map

#### Mutations with this payload

* [shipping​Package​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shippingPackageDelete)

---
<a id="shipping-package-make-default-payload"></a>

## Shipping​Package​Make​Default​Payload

payload

Return type for `shippingPackageMakeDefault` mutation.

### Fields

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [shipping​Package​Make​Default](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shippingPackageMakeDefault)

  mutation

  Set a shipping package as the default. The default shipping package is the one used to calculate shipping costs on checkout.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the shipping package to set as the default.

  ***

***

### Map

#### Mutations with this payload

* [shipping​Package​Make​Default](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shippingPackageMakeDefault)

---
<a id="shipping-package-update-payload"></a>

## Shipping​Package​Update​Payload

payload

Return type for `shippingPackageUpdate` mutation.

### Fields

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [shipping​Package​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shippingPackageUpdate)

  mutation

  Updates a shipping package.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the shipping package to update.

  * shipping​Package

    [Custom​Shipping​Package​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomShippingPackageInput)

    required

    Specifies the input fields for a shipping package.

  ***

***

### Map

#### Mutations with this payload

* [shipping​Package​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shippingPackageUpdate)

---
<a id="shopify-payments-payout-alternate-currency-create-payload"></a>

## Shopify​Payments​Payout​Alternate​Currency​Create​Payload

payload

Return type for `shopifyPaymentsPayoutAlternateCurrencyCreate` mutation.

### Fields

* payout

  [Shopify​Payments​Tooling​Provider​Payout](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsToolingProviderPayout)

  The resulting alternate currency payout created.

* success

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Whether the alternate currency payout was created successfully.

* user​Errors

  [\[Shopify​Payments​Payout​Alternate​Currency​Create​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsPayoutAlternateCurrencyCreateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [shopify​Payments​Payout​Alternate​Currency​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shopifyPaymentsPayoutAlternateCurrencyCreate)

  mutation

  Creates an alternate currency payout for a Shopify Payments account.

  * account​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    ### Arguments

    The ID of the Shopify Payments account on which the mutation is being performed.

  * currency

    [Currency​Code!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CurrencyCode)

    required

    The currency of the balance to payout.

  ***

***

### Map

#### Mutations with this payload

* [shopify​Payments​Payout​Alternate​Currency​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shopifyPaymentsPayoutAlternateCurrencyCreate)

---
<a id="shop-locale-disable-payload"></a>

## Shop​Locale​Disable​Payload

payload

Return type for `shopLocaleDisable` mutation.

### Fields

* locale

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  ISO code of the locale that was deleted.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [shop​Locale​Disable](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shopLocaleDisable)

  mutation

  Deletes a locale for a shop. This also deletes all translations of this locale.

  * locale

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    ISO code of the locale to delete.

  ***

***

### Map

#### Mutations with this payload

* [shop​Locale​Disable](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shopLocaleDisable)

---
<a id="shop-locale-enable-payload"></a>

## Shop​Locale​Enable​Payload

payload

Return type for `shopLocaleEnable` mutation.

### Fields

* shop​Locale

  [Shop​Locale](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopLocale)

  ISO code of the locale that was enabled.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [shop​Locale​Enable](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shopLocaleEnable)

  mutation

  Adds a locale for a shop. The newly added locale is in the unpublished state.

  * locale

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    ISO code of the locale to enable.

  * market​Web​Presence​Ids

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The list of markets web presences to add the locale to.

  ***

***

### Map

#### Mutations with this payload

* [shop​Locale​Enable](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shopLocaleEnable)

---
<a id="shop-locale-update-payload"></a>

## Shop​Locale​Update​Payload

payload

Return type for `shopLocaleUpdate` mutation.

### Fields

* shop​Locale

  [Shop​Locale](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopLocale)

  The locale that was updated.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [shop​Locale​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shopLocaleUpdate)

  mutation

  Updates a locale for a shop.

  * locale

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    ISO code of the locale to update.

  * shop​Locale

    [Shop​Locale​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ShopLocaleInput)

    required

    Specifies the input fields for a shop locale.

  ***

***

### Map

#### Mutations with this payload

* [shop​Locale​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shopLocaleUpdate)

---
<a id="shop-policy-update-payload"></a>

## Shop​Policy​Update​Payload

payload

Return type for `shopPolicyUpdate` mutation.

### Fields

* shop​Policy

  [Shop​Policy](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopPolicy)

  The shop policy that has been updated.

* user​Errors

  [\[Shop​Policy​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopPolicyUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [shop​Policy​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shopPolicyUpdate)

  mutation

  Updates a shop policy.

  * shop​Policy

    [Shop​Policy​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ShopPolicyInput)

    required

    ### Arguments

    The properties to use when updating the shop policy.

  ***

***

### Map

#### Mutations with this payload

* [shop​Policy​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shopPolicyUpdate)

---
<a id="shop-resource-feedback-create-payload"></a>

## Shop​Resource​Feedback​Create​Payload

payload

Return type for `shopResourceFeedbackCreate` mutation.

### Fields

* feedback

  [App​Feedback](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppFeedback)

  The shop feedback that's created. Returns `null` when `state: ACCEPTED` is used, because setting state to `ACCEPTED` clears the active feedback signal. A `null` value here indicates success, not an error.

* user​Errors

  [\[Shop​Resource​Feedback​Create​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopResourceFeedbackCreateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [shop​Resource​Feedback​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shopResourceFeedbackCreate)

  mutation

  The `ResourceFeedback` object lets your app report the status of shops and their resources. For example, if your app is a marketplace channel, then you can use resource feedback to alert merchants that they need to connect their marketplace account by signing in.

  Resource feedback notifications are displayed to the merchant on the home screen of their Shopify admin, and in the product details view for any products that are published to your app.

  This resource should be used only in cases where you're describing steps that a merchant is required to complete. If your app offers optional or promotional set-up steps, or if it makes recommendations, then don't use resource feedback to let merchants know about them.

  ## Sending feedback on a shop

  You can send resource feedback on a shop to let the merchant know what steps they need to take to make sure that your app is set up correctly. Feedback can have one of two states: `REQUIRES_ACTION` or `ACCEPTED`. You need to send a `REQUIRES_ACTION` feedback request for each step that the merchant is required to complete.

  If there are multiple set-up steps that require merchant action, then send feedback with a state of `REQUIRES_ACTION` as merchants complete prior steps. When all required actions are resolved, send an `ACCEPTED` feedback request to clear the active feedback signal.

  ### Clearing feedback with ACCEPTED

  Sending `state: ACCEPTED` removes the active feedback entry. After this mutation succeeds, reading `channel.resourceFeedback`, `app.feedback`, or the `feedback` field on this payload may return `null`—this is expected behavior, not a mutation failure. A `null` result means no outstanding feedback exists for the channel.

  ### Important

  Sending feedback replaces previously sent feedback for the shop. Send a new `shopResourceFeedbackCreate` mutation to push the latest state of a shop or its resources to Shopify.

  * input

    [Resource​Feedback​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ResourceFeedbackCreateInput)

    required

    ### Arguments

    The fields required to create shop feedback.

  ***

***

### Map

#### Mutations with this payload

* [shop​Resource​Feedback​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shopResourceFeedbackCreate)

---
<a id="staged-uploads-create-payload"></a>

## Staged​Uploads​Create​Payload

payload

Return type for `stagedUploadsCreate` mutation.

### Fields

* staged​Targets

  [\[Staged​Media​Upload​Target!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/StagedMediaUploadTarget)

  The staged upload targets that were generated.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [staged​Uploads​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/stagedUploadsCreate)

  mutation

  Creates staged upload targets for file uploads such as images, videos, and 3D models.

  Use the `stagedUploadsCreate` mutation instead of direct file creation mutations when:

  * **Uploading large files**: Files over a few MB benefit from staged uploads for better reliability
  * **Uploading media files**: Videos, 3D models, and high-resolution images
  * **Bulk importing**: CSV files, product catalogs, or other bulk data
  * **Using external file sources**: When files are stored remotely and need to be transferred to Shopify

  The `stagedUploadsCreate` mutation is the first step in Shopify's secure two-step upload process:

  **Step 1: Create staged upload targets** (this mutation)

  * Generate secure, temporary upload URLs for your files.
  * Receive authentication parameters for the upload.

  **Step 2: Upload files and create assets**

  * Upload your files directly to the provided URLs using the authentication parameters.
  * Use the returned `resourceUrl` as the `originalSource` in subsequent mutations like `fileCreate`.

  This approach provides better performance for large files, handles network interruptions gracefully, and ensures secure file transfers to Shopify's storage infrastructure.

  ***

  **Note:** File size is required when uploading \<a href="https://shopify.dev/docs/api/admin-graphql/latest/enums/StagedUploadTargetGenerateUploadResource#enums-VIDEO">\<code>\<span class="PreventFireFoxApplyingGapToWBR">V\<wbr/>I\<wbr/>D\<wbr/>E\<wbr/>O\</span>\</code>\</a> or \<a href="https://shopify.dev/docs/api/admin-graphql/latest/enums/StagedUploadTargetGenerateUploadResource#enums-MODEL\_3D">\<code>\<span class="PreventFireFoxApplyingGapToWBR">M\<wbr/>O\<wbr/>D\<wbr/>E\<wbr/>L\<wbr/>\_3\<wbr/>D\</span>\</code>\</a> resources.

  ***

  After creating staged upload targets, complete the process by:

  1. **Uploading files**: Send your files to the returned [`url`](https://shopify.dev/docs/api/admin-graphql/latest/objects/StagedMediaUploadTarget#field-StagedMediaUploadTarget.fields.url) using the provided [`parameters`](https://shopify.dev/docs/api/admin-graphql/latest/objects/StagedMediaUploadTarget#field-StagedMediaUploadTarget.fields.parameters) for authentication
  2. **Creating file assets**: Use the [`resourceUrl`](https://shopify.dev/docs/api/admin-graphql/latest/objects/StagedMediaUploadTarget#field-StagedMediaUploadTarget.fields.resourceUrl) as the `originalSource` in mutations such as:

  * [`fileCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fileCreate): Creates file assets from staged uploads
  * [`productUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productUpdate): Updates products with new media from staged uploads

  Learn more about [uploading media to Shopify](https://shopify.dev/apps/online-store/media/products).

  * input

    [\[Staged​Upload​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/StagedUploadInput)

    required

    ### Arguments

    The information required to generate staged upload targets.

  ***

***

### Map

#### Mutations with this payload

* [staged​Uploads​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/stagedUploadsCreate)

---
<a id="staged-upload-targets-generate-payload"></a>

## Staged​Upload​Targets​Generate​Payload

payload

Return type for `stagedUploadTargetsGenerate` mutation.

### Fields

* urls

  [\[Staged​Upload​Target!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/StagedUploadTarget)

  The staged upload targets that were generated.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [staged​Upload​Targets​Generate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/stagedUploadTargetsGenerate)

  mutation

  Deprecated

  * input

    [\[Stage​Image​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/StageImageInput)

    required

    ### Arguments

    The input fields for generating staged uploads.

  ***

***

### Map

---
<a id="staged-upload-target-generate-payload"></a>

## Staged​Upload​Target​Generate​Payload

payload

Return type for `stagedUploadTargetGenerate` mutation.

### Fields

* parameters

  [\[Mutations​Staged​Upload​Target​Generate​Upload​Parameter!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MutationsStagedUploadTargetGenerateUploadParameter)

  non-null

  The signed parameters that can be used to upload the asset.

* url

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The signed URL where the asset can be uploaded.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [staged​Upload​Target​Generate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/stagedUploadTargetGenerate)

  mutation

  Deprecated

  * input

    [Staged​Upload​Target​Generate​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/StagedUploadTargetGenerateInput)

    required

    ### Arguments

    The input fields for generating a staged upload.

  ***

***

### Map

---
<a id="standard-metafield-definition-enable-payload"></a>

## Standard​Metafield​Definition​Enable​Payload

payload

Return type for `standardMetafieldDefinitionEnable` mutation.

### Fields

* created​Definition

  [Metafield​Definition](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition)

  The metafield definition that was created.

* user​Errors

  [\[Standard​Metafield​Definition​Enable​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/StandardMetafieldDefinitionEnableUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [standard​Metafield​Definition​Enable](https://shopify.dev/docs/api/admin-graphql/latest/mutations/standardMetafieldDefinitionEnable)

  mutation

  Activates the specified standard metafield definition from its template.

  Refer to the [list of standard metafield definition templates](https://shopify.dev/apps/metafields/definitions/standard-definitions).

  * owner​Type

    [Metafield​Owner​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldOwnerType)

    required

    ### Arguments

    The resource type that the metafield definition is scoped to.

  * id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of the standard metafield definition template to enable.

  * namespace

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The namespace of the standard metafield to enable. Used in combination with `key`.

  * key

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The key of the standard metafield to enable. Used in combination with `namespace`.

  * pin

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:null

    Whether to pin the metafield definition.

  * visible​To​Storefront​Api

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    DeprecatedDefault:null

  * use​As​Collection​Condition

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    DeprecatedDefault:null

  * capabilities

    [Metafield​Capability​Create​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldCapabilityCreateInput)

    The capabilities of the metafield definition.

  * access

    [Standard​Metafield​Definition​Access​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/StandardMetafieldDefinitionAccessInput)

    The access settings that apply to each of the metafields that belong to the metafield definition.

  ***

***

### Map

#### Mutations with this payload

* [standard​Metafield​Definition​Enable](https://shopify.dev/docs/api/admin-graphql/latest/mutations/standardMetafieldDefinitionEnable)

---
<a id="standard-metaobject-definition-enable-payload"></a>

## Standard​Metaobject​Definition​Enable​Payload

payload

Return type for `standardMetaobjectDefinitionEnable` mutation.

### Fields

* metaobject​Definition

  [Metaobject​Definition](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinition)

  The metaobject definition that was enabled using the standard template.

* user​Errors

  [\[Metaobject​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [standard​Metaobject​Definition​Enable](https://shopify.dev/docs/api/admin-graphql/latest/mutations/standardMetaobjectDefinitionEnable)

  mutation

  Enables the specified standard metaobject definition from its template.

  * type

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    The type of the metaobject definition to enable.

  ***

***

### Map

#### Mutations with this payload

* [standard​Metaobject​Definition​Enable](https://shopify.dev/docs/api/admin-graphql/latest/mutations/standardMetaobjectDefinitionEnable)

---
<a id="storefront-access-token-create-payload"></a>

## Storefront​Access​Token​Create​Payload

payload

Return type for `storefrontAccessTokenCreate` mutation.

### Fields

* shop

  [Shop!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop)

  non-null

  The user's shop.

* storefront​Access​Token

  [Storefront​Access​Token](https://shopify.dev/docs/api/admin-graphql/latest/objects/StorefrontAccessToken)

  The storefront access token.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [storefront​Access​Token​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/storefrontAccessTokenCreate)

  mutation

  Creates a storefront access token that delegates unauthenticated access scopes to clients using the [Storefront API](https://shopify.dev/docs/api/storefront). The token provides public access to storefront resources without requiring customer authentication.

  Each shop can have up to 100 active [`StorefrontAccessToken`](https://shopify.dev/docs/api/admin-graphql/latest/objects/StorefrontAccessToken) objects. Headless storefronts, mobile apps, and other client applications typically use these tokens to access public storefront data.

  Learn more about [building with the Storefront API](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/getting-started).

  * input

    [Storefront​Access​Token​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/StorefrontAccessTokenInput)

    required

    ### Arguments

    Provides the input fields for creating a storefront access token.

  ***

***

### Map

#### Mutations with this payload

* [storefront​Access​Token​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/storefrontAccessTokenCreate)

---
<a id="storefront-access-token-delete-payload"></a>

## Storefront​Access​Token​Delete​Payload

payload

Return type for `storefrontAccessTokenDelete` mutation.

### Fields

* deleted​Storefront​Access​Token​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the deleted storefront access token.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [storefront​Access​Token​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/storefrontAccessTokenDelete)

  mutation

  Deletes a storefront access token.

  * input

    [Storefront​Access​Token​Delete​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/StorefrontAccessTokenDeleteInput)

    required

    ### Arguments

    Provides the input fields required to delete a storefront access token.

  ***

***

### Map

#### Mutations with this payload

* [storefront​Access​Token​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/storefrontAccessTokenDelete)

---
<a id="store-credit-account-credit-payload"></a>

## Store​Credit​Account​Credit​Payload

payload

Return type for `storeCreditAccountCredit` mutation.

### Fields

* store​Credit​Account​Transaction

  [Store​Credit​Account​Credit​Transaction](https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccountCreditTransaction)

  The store credit account transaction that was created.

* user​Errors

  [\[Store​Credit​Account​Credit​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccountCreditUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [store​Credit​Account​Credit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/storeCreditAccountCredit)

  mutation

  Adds funds to a [`StoreCreditAccount`](https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccount) by creating a [`StoreCreditAccountCreditTransaction`](https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccountCreditTransaction). The mutation accepts either a store credit account ID, a [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) ID, or a [`CompanyLocation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation) ID. When you provide a customer or company location ID, it automatically creates an account if one doesn't exist for the specified currency.

  Store credit accounts are currency-specific. A single owner can have multiple accounts, each holding a different currency. Use the most appropriate currency for the given store credit account owner.

  Credits can optionally include an expiration date.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the store credit account or the ID of the account owner.

  * credit​Input

    [Store​Credit​Account​Credit​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/StoreCreditAccountCreditInput)

    required

    The input fields for a store credit account credit transaction.

  ***

***

### Map

#### Mutations with this payload

* [store​Credit​Account​Credit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/storeCreditAccountCredit)

---
<a id="store-credit-account-debit-payload"></a>

## Store​Credit​Account​Debit​Payload

payload

Return type for `storeCreditAccountDebit` mutation.

### Fields

* store​Credit​Account​Transaction

  [Store​Credit​Account​Debit​Transaction](https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccountDebitTransaction)

  The store credit account transaction that was created.

* user​Errors

  [\[Store​Credit​Account​Debit​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccountDebitUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [store​Credit​Account​Debit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/storeCreditAccountDebit)

  mutation

  Creates a debit transaction that decreases the store credit account balance by the given amount.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the store credit account or the ID of the account owner.

  * debit​Input

    [Store​Credit​Account​Debit​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/StoreCreditAccountDebitInput)

    required

    The input fields for a store credit account debit transaction.

  ***

***

### Map

#### Mutations with this payload

* [store​Credit​Account​Debit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/storeCreditAccountDebit)

---
<a id="subscription-billing-attempt-create-payload"></a>

## Subscription​Billing​Attempt​Create​Payload

payload

Return type for `subscriptionBillingAttemptCreate` mutation.

### Fields

* subscription​Billing​Attempt

  [Subscription​Billing​Attempt](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttempt)

  The subscription billing attempt.

* user​Errors

  [\[Billing​Attempt​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BillingAttemptUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [subscription​Billing​Attempt​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingAttemptCreate)

  mutation

  Creates a billing attempt to charge for a [`SubscriptionContract`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract). The mutation processes either the payment for the current billing cycle or for a specific cycle, if selected.

  The mutation creates an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) when successful. Failed billing attempts include a [`processingError`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingAttemptCreate#returns-subscriptionBillingAttempt.fields.processingError) field with error details.

  ***

  **Tip:** Use the \<a href="https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingAttemptCreate#arguments-subscriptionBillingAttemptInput.fields.idempotencyKey">\<code>\<span class="PreventFireFoxApplyingGapToWBR">idempotency\<wbr/>Key\</span>\</code>\</a> to ensure the billing attempt executes only once, preventing duplicate charges if the request is retried.

  ***

  You can target a specific billing cycle using the [`billingCycleSelector`](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingCycleSelector) to bill past or future cycles. The [`originTime`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttempt#field-SubscriptionBillingAttempt.fields.originTime) parameter adjusts fulfillment scheduling for attempts completed after the expected billing date.

  Learn more about [creating billing attempts](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/build-a-subscription-contract#step-4-create-a-billing-attempt).

  * subscription​Contract​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the subscription contract.

  * subscription​Billing​Attempt​Input

    [Subscription​Billing​Attempt​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingAttemptInput)

    required

    The information to apply as a billing attempt.

  ***

***

### Map

#### Mutations with this payload

* [subscription​Billing​Attempt​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingAttemptCreate)

---
<a id="subscription-billing-cycle-bulk-charge-payload"></a>

## Subscription​Billing​Cycle​Bulk​Charge​Payload

payload

Return type for `subscriptionBillingCycleBulkCharge` mutation.

### Fields

* job

  [Job](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job)

  The asynchronous job that performs the action on the targeted billing cycles.

* user​Errors

  [\[Subscription​Billing​Cycle​Bulk​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycleBulkUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [subscription​Billing​Cycle​Bulk​Charge](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleBulkCharge)

  mutation

  Asynchronously queries and charges all subscription billing cycles whose [billingAttemptExpectedDate](https://shopify.dev/api/admin-graphql/latest/objects/SubscriptionBillingCycle#field-billingattemptexpecteddate) values fall within a specified date range and meet additional filtering criteria. The results of this action can be retrieved using the [subscriptionBillingCycleBulkResults](https://shopify.dev/api/admin-graphql/latest/queries/subscriptionBillingCycleBulkResults) query.

  * billing​Attempt​Expected​Date​Range

    [Subscription​Billing​Cycles​Date​Range​Selector!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingCyclesDateRangeSelector)

    required

    ### Arguments

    Specifies the date range within which the `billingAttemptExpectedDate` values of the billing cycles should fall.

  * filters

    [Subscription​Billing​Cycle​Bulk​Filters](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingCycleBulkFilters)

    Criteria to filter the billing cycles on which the action is executed.

  * inventory​Policy

    [Subscription​Billing​Attempt​Inventory​Policy](https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionBillingAttemptInventoryPolicy)

    Default:PRODUCT\_VARIANT\_INVENTORY\_POLICY

    The behaviour to use when updating inventory.

  * payment​Processing​Policy

    [Subscription​Billing​Attempt​Payment​Processing​Policy](https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionBillingAttemptPaymentProcessingPolicy)

    Default:FAIL\_UNLESS\_VALID\_PAYMENT\_METHOD

    Selected payment processing policy for the billing attempt. Defaults to FAIL\_UNLESS\_VALID\_PAYMENT\_METHOD.

  ***

***

### Map

#### Mutations with this payload

* [subscription​Billing​Cycle​Bulk​Charge](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleBulkCharge)

---
<a id="subscription-billing-cycle-bulk-search-payload"></a>

## Subscription​Billing​Cycle​Bulk​Search​Payload

payload

Return type for `subscriptionBillingCycleBulkSearch` mutation.

### Fields

* job

  [Job](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job)

  The asynchronous job that performs the action on the targeted billing cycles.

* user​Errors

  [\[Subscription​Billing​Cycle​Bulk​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycleBulkUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [subscription​Billing​Cycle​Bulk​Search](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleBulkSearch)

  mutation

  Asynchronously queries all subscription billing cycles whose [billingAttemptExpectedDate](https://shopify.dev/api/admin-graphql/latest/objects/SubscriptionBillingCycle#field-billingattemptexpecteddate) values fall within a specified date range and meet additional filtering criteria. The results of this action can be retrieved using the [subscriptionBillingCycleBulkResults](https://shopify.dev/api/admin-graphql/latest/queries/subscriptionBillingCycleBulkResults) query.

  * billing​Attempt​Expected​Date​Range

    [Subscription​Billing​Cycles​Date​Range​Selector!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingCyclesDateRangeSelector)

    required

    ### Arguments

    Specifies the date range within which the `billingAttemptExpectedDate` values of the billing cycles should fall.

  * filters

    [Subscription​Billing​Cycle​Bulk​Filters](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingCycleBulkFilters)

    Criteria to filter the billing cycles on which the action is executed.

  ***

***

### Map

#### Mutations with this payload

* [subscription​Billing​Cycle​Bulk​Search](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleBulkSearch)

---
<a id="subscription-billing-cycle-charge-payload"></a>

## Subscription​Billing​Cycle​Charge​Payload

payload

Return type for `subscriptionBillingCycleCharge` mutation.

### Fields

* subscription​Billing​Attempt

  [Subscription​Billing​Attempt](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttempt)

  The subscription billing attempt.

* user​Errors

  [\[Billing​Attempt​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BillingAttemptUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [subscription​Billing​Cycle​Charge](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleCharge)

  mutation

  Creates a new subscription billing attempt for a specified billing cycle. This is the alternative mutation for [subscriptionBillingAttemptCreate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingAttemptCreate). For more information, refer to [Create a subscription contract](https://shopify.dev/docs/apps/selling-strategies/subscriptions/contracts/create#step-4-create-a-billing-attempt).

  * subscription​Contract​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the subscription contract.

  * billing​Cycle​Selector

    [Subscription​Billing​Cycle​Selector!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingCycleSelector)

    required

    Select the specific billing cycle to be billed. If the selected billing cycle's [billingAttemptExpectedDate](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycle#field-subscriptionbillingcycle-billingattemptexpecteddate) is in the past, the [originTime](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttempt#field-subscriptionbillingattempt-origintime) of the billing attempt will be set to this date. However, if the [billingAttemptExpectedDate](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycle#field-subscriptionbillingcycle-billingattemptexpecteddate) is in the future, the originTime will be the current time.

  * inventory​Policy

    [Subscription​Billing​Attempt​Inventory​Policy](https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionBillingAttemptInventoryPolicy)

    Default:PRODUCT\_VARIANT\_INVENTORY\_POLICY

    The behaviour to use when updating inventory.

  * payment​Processing​Policy

    [Subscription​Billing​Attempt​Payment​Processing​Policy](https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionBillingAttemptPaymentProcessingPolicy)

    Select payment processing policy for the billing attempt. Defaults to FAIL\_UNLESS\_VALID\_PAYMENT\_METHOD.

  ***

***

### Map

#### Mutations with this payload

* [subscription​Billing​Cycle​Charge](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleCharge)

---
<a id="subscription-billing-cycle-contract-draft-commit-payload"></a>

## Subscription​Billing​Cycle​Contract​Draft​Commit​Payload

payload

Return type for `subscriptionBillingCycleContractDraftCommit` mutation.

### Fields

* contract

  [Subscription​Billing​Cycle​Edited​Contract](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycleEditedContract)

  The committed Subscription Billing Cycle Edited Contract object.

* user​Errors

  [\[Subscription​Draft​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraftUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [subscription​Billing​Cycle​Contract​Draft​Commit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleContractDraftCommit)

  mutation

  Commits the updates of a Subscription Billing Cycle Contract draft.

  * draft​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The gid of the Subscription Contract draft to commit.

  ***

***

### Map

#### Mutations with this payload

* [subscription​Billing​Cycle​Contract​Draft​Commit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleContractDraftCommit)

---
<a id="subscription-billing-cycle-contract-draft-concatenate-payload"></a>

## Subscription​Billing​Cycle​Contract​Draft​Concatenate​Payload

payload

Return type for `subscriptionBillingCycleContractDraftConcatenate` mutation.

### Fields

* draft

  [Subscription​Draft](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft)

  The Subscription Draft object.

* user​Errors

  [\[Subscription​Draft​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraftUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [subscription​Billing​Cycle​Contract​Draft​Concatenate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleContractDraftConcatenate)

  mutation

  Concatenates a contract to a Subscription Draft.

  * draft​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The gid of the Subscription Contract draft to update.

  * concatenated​Billing​Cycle​Contracts

    [\[Subscription​Billing​Cycle​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingCycleInput)

    required

    An array of Subscription Contracts with their selected billing cycles to concatenate to the subscription draft.

  ***

***

### Map

#### Mutations with this payload

* [subscription​Billing​Cycle​Contract​Draft​Concatenate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleContractDraftConcatenate)

---
<a id="subscription-billing-cycle-contract-edit-payload"></a>

## Subscription​Billing​Cycle​Contract​Edit​Payload

payload

Return type for `subscriptionBillingCycleContractEdit` mutation.

### Fields

* draft

  [Subscription​Draft](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft)

  The draft subscription contract object.

* user​Errors

  [\[Subscription​Draft​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraftUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [subscription​Billing​Cycle​Contract​Edit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleContractEdit)

  mutation

  Edit the contents of a subscription contract for the specified billing cycle.

  * billing​Cycle​Input

    [Subscription​Billing​Cycle​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingCycleInput)

    required

    ### Arguments

    Input object for selecting and using billing cycles.

  ***

***

### Map

#### Mutations with this payload

* [subscription​Billing​Cycle​Contract​Edit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleContractEdit)

---
<a id="subscription-billing-cycle-edits-delete-payload"></a>

## Subscription​Billing​Cycle​Edits​Delete​Payload

payload

Return type for `subscriptionBillingCycleEditsDelete` mutation.

### Fields

* billing​Cycles

  [\[Subscription​Billing​Cycle!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycle)

  The list of updated billing cycles.

* user​Errors

  [\[Subscription​Billing​Cycle​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycleUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [subscription​Billing​Cycle​Edits​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleEditsDelete)

  mutation

  Delete the current and future schedule and contract edits of a list of subscription billing cycles.

  * contract​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The globally-unique identifier of the subscription contract that the billing cycle belongs to.

  * target​Selection

    [Subscription​Billing​Cycles​Target​Selection!](https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionBillingCyclesTargetSelection)

    required

    Select billing cycles to be deleted.

  ***

***

### Map

#### Mutations with this payload

* [subscription​Billing​Cycle​Edits​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleEditsDelete)

---
<a id="subscription-billing-cycle-edit-delete-payload"></a>

## Subscription​Billing​Cycle​Edit​Delete​Payload

payload

Return type for `subscriptionBillingCycleEditDelete` mutation.

### Fields

* billing​Cycles

  [\[Subscription​Billing​Cycle!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycle)

  The list of updated billing cycles.

* user​Errors

  [\[Subscription​Billing​Cycle​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycleUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [subscription​Billing​Cycle​Edit​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleEditDelete)

  mutation

  Delete the schedule and contract edits of the selected subscription billing cycle.

  * billing​Cycle​Input

    [Subscription​Billing​Cycle​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingCycleInput)

    required

    ### Arguments

    Input object used to select and use billing cycles.

  ***

***

### Map

#### Mutations with this payload

* [subscription​Billing​Cycle​Edit​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleEditDelete)

---
<a id="subscription-billing-cycle-schedule-edit-payload"></a>

## Subscription​Billing​Cycle​Schedule​Edit​Payload

payload

Return type for `subscriptionBillingCycleScheduleEdit` mutation.

### Fields

* billing​Cycle

  [Subscription​Billing​Cycle](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycle)

  The updated billing cycle.

* user​Errors

  [\[Subscription​Billing​Cycle​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycleUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [subscription​Billing​Cycle​Schedule​Edit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleScheduleEdit)

  mutation

  Modify the schedule of a specific billing cycle.

  * billing​Cycle​Input

    [Subscription​Billing​Cycle​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingCycleInput)

    required

    ### Arguments

    Input object for selecting and using billing cycles.

  * input

    [Subscription​Billing​Cycle​Schedule​Edit​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingCycleScheduleEditInput)

    required

    Data used to create or modify billing cycle schedule edit.

  ***

***

### Map

#### Mutations with this payload

* [subscription​Billing​Cycle​Schedule​Edit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleScheduleEdit)

---
<a id="subscription-billing-cycle-skip-payload"></a>

## Subscription​Billing​Cycle​Skip​Payload

payload

Return type for `subscriptionBillingCycleSkip` mutation.

### Fields

* billing​Cycle

  [Subscription​Billing​Cycle](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycle)

  The updated billing cycle.

* user​Errors

  [\[Subscription​Billing​Cycle​Skip​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycleSkipUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [subscription​Billing​Cycle​Skip](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleSkip)

  mutation

  Skips a Subscription Billing Cycle.

  * billing​Cycle​Input

    [Subscription​Billing​Cycle​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingCycleInput)

    required

    ### Arguments

    Input object for selecting and using billing cycles.

  ***

***

### Map

#### Mutations with this payload

* [subscription​Billing​Cycle​Skip](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleSkip)

---
<a id="subscription-billing-cycle-unskip-payload"></a>

## Subscription​Billing​Cycle​Unskip​Payload

payload

Return type for `subscriptionBillingCycleUnskip` mutation.

### Fields

* billing​Cycle

  [Subscription​Billing​Cycle](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycle)

  The updated billing cycle.

* user​Errors

  [\[Subscription​Billing​Cycle​Unskip​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycleUnskipUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [subscription​Billing​Cycle​Unskip](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleUnskip)

  mutation

  Unskips a Subscription Billing Cycle.

  * billing​Cycle​Input

    [Subscription​Billing​Cycle​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingCycleInput)

    required

    ### Arguments

    Input object for selecting and using billing cycles.

  ***

***

### Map

#### Mutations with this payload

* [subscription​Billing​Cycle​Unskip](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleUnskip)

---
<a id="subscription-contract-activate-payload"></a>

## Subscription​Contract​Activate​Payload

payload

Return type for `subscriptionContractActivate` mutation.

### Fields

* contract

  [Subscription​Contract](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract)

  The new Subscription Contract object.

* user​Errors

  [\[Subscription​Contract​Status​Update​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContractStatusUpdateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [subscription​Contract​Activate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractActivate)

  mutation

  Activates a Subscription Contract. Contract status must be either active, paused, or failed.

  * subscription​Contract​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the Subscription Contract.

  ***

***

### Map

#### Mutations with this payload

* [subscription​Contract​Activate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractActivate)

---
<a id="subscription-contract-atomic-create-payload"></a>

## Subscription​Contract​Atomic​Create​Payload

payload

Return type for `subscriptionContractAtomicCreate` mutation.

### Fields

* contract

  [Subscription​Contract](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract)

  The new Subscription Contract object.

* user​Errors

  [\[Subscription​Draft​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraftUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [subscription​Contract​Atomic​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractAtomicCreate)

  mutation

  Creates a Subscription Contract.

  * input

    [Subscription​Contract​Atomic​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionContractAtomicCreateInput)

    required

    ### Arguments

    The properties of the new Subscription Contract.

  ***

***

### Map

#### Mutations with this payload

* [subscription​Contract​Atomic​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractAtomicCreate)

---
<a id="subscription-contract-cancel-payload"></a>

## Subscription​Contract​Cancel​Payload

payload

Return type for `subscriptionContractCancel` mutation.

### Fields

* contract

  [Subscription​Contract](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract)

  The new Subscription Contract object.

* user​Errors

  [\[Subscription​Contract​Status​Update​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContractStatusUpdateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [subscription​Contract​Cancel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractCancel)

  mutation

  Cancels a Subscription Contract.

  * subscription​Contract​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the Subscription Contract.

  ***

***

### Map

#### Mutations with this payload

* [subscription​Contract​Cancel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractCancel)

---
<a id="subscription-contract-create-payload"></a>

## Subscription​Contract​Create​Payload

payload

Return type for `subscriptionContractCreate` mutation.

### Fields

* draft

  [Subscription​Draft](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft)

  The Subscription Contract object.

* user​Errors

  [\[Subscription​Draft​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraftUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [subscription​Contract​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractCreate)

  mutation

  Creates a subscription contract draft, which is an intention to create a new subscription. The draft lets you incrementally build and modify subscription details before committing them to create the actual [`SubscriptionContract`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract).

  The mutation requires [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) information, billing details, and contract configuration including the [`SubscriptionBillingPolicy`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingPolicy) and [`SubscriptionDeliveryPolicy`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDeliveryPolicy). You can specify the [`CustomerPaymentMethod`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentMethod), the [`MailingAddress`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddress) for shipping, and subscription intervals.

  After you create the draft, you can either modify it with the [`subscriptionDraftUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftUpdate) mutation or finalize and create the active subscription contract with [`subscriptionDraftCommit`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftCommit).

  Learn more about [building subscription contracts](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/build-a-subscription-contract).

  * input

    [Subscription​Contract​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionContractCreateInput)

    required

    ### Arguments

    The properties of the new Subscription Contract.

  ***

***

### Map

#### Mutations with this payload

* [subscription​Contract​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractCreate)

---
<a id="subscription-contract-expire-payload"></a>

## Subscription​Contract​Expire​Payload

payload

Return type for `subscriptionContractExpire` mutation.

### Fields

* contract

  [Subscription​Contract](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract)

  The new Subscription Contract object.

* user​Errors

  [\[Subscription​Contract​Status​Update​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContractStatusUpdateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [subscription​Contract​Expire](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractExpire)

  mutation

  Expires a Subscription Contract.

  * subscription​Contract​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the Subscription Contract.

  ***

***

### Map

#### Mutations with this payload

* [subscription​Contract​Expire](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractExpire)

---
<a id="subscription-contract-fail-payload"></a>

## Subscription​Contract​Fail​Payload

payload

Return type for `subscriptionContractFail` mutation.

### Fields

* contract

  [Subscription​Contract](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract)

  The new Subscription Contract object.

* user​Errors

  [\[Subscription​Contract​Status​Update​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContractStatusUpdateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [subscription​Contract​Fail](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractFail)

  mutation

  Fails a Subscription Contract.

  * subscription​Contract​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the Subscription Contract.

  ***

***

### Map

#### Mutations with this payload

* [subscription​Contract​Fail](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractFail)

---
<a id="subscription-contract-pause-payload"></a>

## Subscription​Contract​Pause​Payload

payload

Return type for `subscriptionContractPause` mutation.

### Fields

* contract

  [Subscription​Contract](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract)

  The new Subscription Contract object.

* user​Errors

  [\[Subscription​Contract​Status​Update​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContractStatusUpdateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [subscription​Contract​Pause](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractPause)

  mutation

  Pauses a Subscription Contract.

  * subscription​Contract​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the Subscription Contract.

  ***

***

### Map

#### Mutations with this payload

* [subscription​Contract​Pause](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractPause)

---
<a id="subscription-contract-product-change-payload"></a>

## Subscription​Contract​Product​Change​Payload

payload

Return type for `subscriptionContractProductChange` mutation.

### Fields

* contract

  [Subscription​Contract](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract)

  The new Subscription Contract object.

* line​Updated

  [Subscription​Line](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionLine)

  The updated Subscription Line.

* user​Errors

  [\[Subscription​Draft​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraftUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [subscription​Contract​Product​Change](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractProductChange)

  mutation

  Allows for the easy change of a Product in a Contract or a Product price change.

  * subscription​Contract​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the subscription contract.

  * line​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The gid of the Subscription Line to update.

  * input

    [Subscription​Contract​Product​Change​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionContractProductChangeInput)

    required

    The properties of the Product changes.

  ***

***

### Map

#### Mutations with this payload

* [subscription​Contract​Product​Change](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractProductChange)

---
<a id="subscription-contract-set-next-billing-date-payload"></a>

## Subscription​Contract​Set​Next​Billing​Date​Payload

payload

Return type for `subscriptionContractSetNextBillingDate` mutation.

### Fields

* contract

  [Subscription​Contract](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract)

  The updated Subscription Contract object.

* user​Errors

  [\[Subscription​Contract​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContractUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [subscription​Contract​Set​Next​Billing​Date](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractSetNextBillingDate)

  mutation

  Sets the next billing date of a Subscription Contract. This field is managed by the apps. Alternatively you can utilize our [Billing Cycles APIs](https://shopify.dev/docs/apps/selling-strategies/subscriptions/billing-cycles), which provide auto-computed billing dates and additional functionalities.

  * contract​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The gid of the Subscription Contract to set the next billing date for.

  * date

    [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    required

    The next billing date.

  ***

***

### Map

#### Mutations with this payload

* [subscription​Contract​Set​Next​Billing​Date](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractSetNextBillingDate)

---
<a id="subscription-contract-update-payload"></a>

## Subscription​Contract​Update​Payload

payload

Return type for `subscriptionContractUpdate` mutation.

### Fields

* draft

  [Subscription​Draft](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft)

  The Subscription Contract object.

* user​Errors

  [\[Subscription​Draft​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraftUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [subscription​Contract​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractUpdate)

  mutation

  Creates a draft of an existing [`SubscriptionContract`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract). The draft captures the current state of the contract and allows incremental modifications through draft mutations such as [`subscriptionDraftLineAdd`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftLineAdd), [`subscriptionDraftDiscountAdd`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftDiscountAdd), and [`subscriptionDraftUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftUpdate).

  Changes remain in draft state and don't affect the live contract until committed. After you've made all necessary changes to the draft, commit it using [`subscriptionDraftCommit`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftCommit) to apply the updates to the original contract.

  Learn more about [updating subscription contracts](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/update-a-subscription-contract#step-2-create-a-draft-of-an-existing-contract).

  * contract​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The gid of the Subscription Contract to update.

  ***

***

### Map

#### Mutations with this payload

* [subscription​Contract​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractUpdate)

---
<a id="subscription-draft-commit-payload"></a>

## Subscription​Draft​Commit​Payload

payload

Return type for `subscriptionDraftCommit` mutation.

### Fields

* contract

  [Subscription​Contract](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract)

  The updated Subscription Contract object.

* user​Errors

  [\[Subscription​Draft​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraftUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [subscription​Draft​Commit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftCommit)

  mutation

  Commits the updates of a Subscription Contract draft.

  * draft​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The gid of the Subscription Contract draft to commit.

  ***

***

### Map

#### Mutations with this payload

* [subscription​Draft​Commit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftCommit)

---
<a id="subscription-draft-discount-add-payload"></a>

## Subscription​Draft​Discount​Add​Payload

payload

Return type for `subscriptionDraftDiscountAdd` mutation.

### Fields

* discount​Added

  [Subscription​Manual​Discount](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionManualDiscount)

  The added Subscription Discount.

* draft

  [Subscription​Draft](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft)

  The Subscription Contract draft object.

* user​Errors

  [\[Subscription​Draft​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraftUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [subscription​Draft​Discount​Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftDiscountAdd)

  mutation

  Adds a subscription discount to a subscription draft.

  * draft​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the Subscription Contract draft to add a subscription discount to.

  * input

    [Subscription​Manual​Discount​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionManualDiscountInput)

    required

    The properties of the new Subscription Discount.

  ***

***

### Map

#### Mutations with this payload

* [subscription​Draft​Discount​Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftDiscountAdd)

---
<a id="subscription-draft-discount-code-apply-payload"></a>

## Subscription​Draft​Discount​Code​Apply​Payload

payload

Return type for `subscriptionDraftDiscountCodeApply` mutation.

### Fields

* applied​Discount

  [Subscription​Applied​Code​Discount](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionAppliedCodeDiscount)

  The added subscription discount.

* draft

  [Subscription​Draft](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft)

  The subscription contract draft object.

* user​Errors

  [\[Subscription​Draft​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraftUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [subscription​Draft​Discount​Code​Apply](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftDiscountCodeApply)

  mutation

  Applies a code discount on the subscription draft.

  * draft​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The gid of the subscription contract draft to apply a subscription code discount on.

  * redeem​Code

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    Code discount redeem code.

  ***

***

### Map

#### Mutations with this payload

* [subscription​Draft​Discount​Code​Apply](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftDiscountCodeApply)

---
<a id="subscription-draft-discount-remove-payload"></a>

## Subscription​Draft​Discount​Remove​Payload

payload

Return type for `subscriptionDraftDiscountRemove` mutation.

### Fields

* discount​Removed

  [Subscription​Discount](https://shopify.dev/docs/api/admin-graphql/latest/unions/SubscriptionDiscount)

  The removed subscription draft discount.

* draft

  [Subscription​Draft](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft)

  The subscription contract draft object.

* user​Errors

  [\[Subscription​Draft​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraftUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [subscription​Draft​Discount​Remove](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftDiscountRemove)

  mutation

  Removes a subscription discount from a subscription draft.

  * draft​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The gid of the subscription contract draft to remove a subscription discount from.

  * discount​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The gid of the subscription draft discount to remove.

  ***

***

### Map

#### Mutations with this payload

* [subscription​Draft​Discount​Remove](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftDiscountRemove)

---
<a id="subscription-draft-discount-update-payload"></a>

## Subscription​Draft​Discount​Update​Payload

payload

Return type for `subscriptionDraftDiscountUpdate` mutation.

### Fields

* discount​Updated

  [Subscription​Manual​Discount](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionManualDiscount)

  The updated Subscription Discount.

* draft

  [Subscription​Draft](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft)

  The Subscription Contract draft object.

* user​Errors

  [\[Subscription​Draft​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraftUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [subscription​Draft​Discount​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftDiscountUpdate)

  mutation

  Updates a subscription discount on a subscription draft.

  * draft​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the Subscription Contract draft to update a subscription discount on.

  * discount​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The gid of the Subscription Discount to update.

  * input

    [Subscription​Manual​Discount​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionManualDiscountInput)

    required

    The properties to update on the Subscription Discount.

  ***

***

### Map

#### Mutations with this payload

* [subscription​Draft​Discount​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftDiscountUpdate)

---
<a id="subscription-draft-free-shipping-discount-add-payload"></a>

## Subscription​Draft​Free​Shipping​Discount​Add​Payload

payload

Return type for `subscriptionDraftFreeShippingDiscountAdd` mutation.

### Fields

* discount​Added

  [Subscription​Manual​Discount](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionManualDiscount)

  The added subscription free shipping discount.

* draft

  [Subscription​Draft](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft)

  The subscription contract draft object.

* user​Errors

  [\[Subscription​Draft​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraftUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [subscription​Draft​Free​Shipping​Discount​Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftFreeShippingDiscountAdd)

  mutation

  Adds a subscription free shipping discount to a subscription draft.

  * draft​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the subscription contract draft to add a subscription free shipping discount to.

  * input

    [Subscription​Free​Shipping​Discount​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionFreeShippingDiscountInput)

    required

    The properties of the new subscription free shipping discount.

  ***

***

### Map

#### Mutations with this payload

* [subscription​Draft​Free​Shipping​Discount​Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftFreeShippingDiscountAdd)

---
<a id="subscription-draft-free-shipping-discount-update-payload"></a>

## Subscription​Draft​Free​Shipping​Discount​Update​Payload

payload

Return type for `subscriptionDraftFreeShippingDiscountUpdate` mutation.

### Fields

* discount​Updated

  [Subscription​Manual​Discount](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionManualDiscount)

  The updated Subscription Discount.

* draft

  [Subscription​Draft](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft)

  The Subscription Contract draft object.

* user​Errors

  [\[Subscription​Draft​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraftUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [subscription​Draft​Free​Shipping​Discount​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftFreeShippingDiscountUpdate)

  mutation

  Updates a subscription free shipping discount on a subscription draft.

  * draft​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the Subscription Contract draft to update a subscription discount on.

  * discount​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The gid of the Subscription Discount to update.

  * input

    [Subscription​Free​Shipping​Discount​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionFreeShippingDiscountInput)

    required

    The properties to update on the Subscription Free Shipping Discount.

  ***

***

### Map

#### Mutations with this payload

* [subscription​Draft​Free​Shipping​Discount​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftFreeShippingDiscountUpdate)

---
<a id="subscription-draft-line-add-payload"></a>

## Subscription​Draft​Line​Add​Payload

payload

Return type for `subscriptionDraftLineAdd` mutation.

### Fields

* draft

  [Subscription​Draft](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft)

  The Subscription Contract draft object.

* line​Added

  [Subscription​Line](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionLine)

  The added Subscription Line.

* user​Errors

  [\[Subscription​Draft​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraftUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [subscription​Draft​Line​Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftLineAdd)

  mutation

  Adds a subscription line to a subscription draft.

  * draft​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The gid of the Subscription Contract draft to add a subscription line to.

  * input

    [Subscription​Line​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionLineInput)

    required

    The properties of the new Subscription Line.

  ***

***

### Map

#### Mutations with this payload

* [subscription​Draft​Line​Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftLineAdd)

---
<a id="subscription-draft-line-remove-payload"></a>

## Subscription​Draft​Line​Remove​Payload

payload

Return type for `subscriptionDraftLineRemove` mutation.

### Fields

* discounts​Updated

  [\[Subscription​Manual​Discount!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionManualDiscount)

  The list of updated subscription discounts impacted by the removed line.

* draft

  [Subscription​Draft](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft)

  The Subscription Contract draft object.

* line​Removed

  [Subscription​Line](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionLine)

  The removed Subscription Line.

* user​Errors

  [\[Subscription​Draft​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraftUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [subscription​Draft​Line​Remove](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftLineRemove)

  mutation

  Removes a subscription line from a subscription draft.

  * draft​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The gid of the Subscription Contract draft to remove a subscription line from.

  * line​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The gid of the Subscription Line to remove.

  ***

***

### Map

#### Mutations with this payload

* [subscription​Draft​Line​Remove](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftLineRemove)

---
<a id="subscription-draft-line-update-payload"></a>

## Subscription​Draft​Line​Update​Payload

payload

Return type for `subscriptionDraftLineUpdate` mutation.

### Fields

* draft

  [Subscription​Draft](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft)

  The Subscription Contract draft object.

* line​Updated

  [Subscription​Line](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionLine)

  The updated Subscription Line.

* user​Errors

  [\[Subscription​Draft​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraftUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [subscription​Draft​Line​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftLineUpdate)

  mutation

  Updates a subscription line on a subscription draft.

  * draft​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The gid of the Subscription Contract draft to update a subscription line from.

  * line​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The gid of the Subscription Line to update.

  * input

    [Subscription​Line​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionLineUpdateInput)

    required

    The properties of the new Subscription Line.

  ***

***

### Map

#### Mutations with this payload

* [subscription​Draft​Line​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftLineUpdate)

---
<a id="subscription-draft-update-payload"></a>

## Subscription​Draft​Update​Payload

payload

Return type for `subscriptionDraftUpdate` mutation.

### Fields

* draft

  [Subscription​Draft](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft)

  The Subscription Draft object.

* user​Errors

  [\[Subscription​Draft​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraftUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [subscription​Draft​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftUpdate)

  mutation

  Updates a Subscription Draft.

  * draft​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The gid of the Subscription Draft to update.

  * input

    [Subscription​Draft​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionDraftInput)

    required

    The properties of the new Subscription Contract.

  ***

***

### Map

#### Mutations with this payload

* [subscription​Draft​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftUpdate)

---
<a id="tags-add-payload"></a>

## Tags​Add​Payload

payload

Return type for `tagsAdd` mutation.

### Fields

* node

  [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  The object that was updated.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [tags​Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/tagsAdd)

  mutation

  Adds tags to a resource. If the resource type doesn't support tagging, the `id` argument returns a resource-not-found error.

  Tags help merchants organize and filter resources. See the [`tags`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/tagsAdd#arguments-tags) argument for supported input formats.

  Learn more about [using tags to organize subscription orders](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/fulfillments/sync-orders-subscriptions#order-tagging).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of a resource to add tags to. Supported resources: [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order), [`DraftOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder), [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer), [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product), [`Article`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article), and [`DiscountNode`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountNode).

  * tags

    [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    A list of tags to add to the resource. Can be an array of strings or a single string composed of a comma-separated list of values. Example values: `["tag1", "tag2", "tag3"]`, `"tag1, tag2, tag3"`.

  ***

***

### Map

#### Mutations with this payload

* [tags​Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/tagsAdd)

---
<a id="tags-remove-payload"></a>

## Tags​Remove​Payload

payload

Return type for `tagsRemove` mutation.

### Fields

* node

  [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  The object that was updated.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [tags​Remove](https://shopify.dev/docs/api/admin-graphql/latest/mutations/tagsRemove)

  mutation

  Removes tags from a resource. If the resource type doesn't support tagging, the `id` argument returns a resource-not-found error.

  Tags are searchable keywords that help organize and filter these resources.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the resource to remove tags from. Supported resources: [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order), [`DraftOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder), [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer), [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product), [`Article`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article), and [`DiscountNode`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountNode).

  * tags

    [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    A list of tags to remove from the resource in the form of an array of strings. Example value: `["tag1", "tag2", "tag3"]`.

  ***

***

### Map

#### Mutations with this payload

* [tags​Remove](https://shopify.dev/docs/api/admin-graphql/latest/mutations/tagsRemove)

---
<a id="tax-app-configure-payload"></a>

## Tax​App​Configure​Payload

payload

Return type for `taxAppConfigure` mutation.

### Fields

* tax​App​Configuration

  [Tax​App​Configuration](https://shopify.dev/docs/api/admin-graphql/latest/objects/TaxAppConfiguration)

  The updated tax app configuration.

* user​Errors

  [\[Tax​App​Configure​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/TaxAppConfigureUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [tax​App​Configure](https://shopify.dev/docs/api/admin-graphql/latest/mutations/taxAppConfigure)

  mutation

  Allows tax app configurations for tax partners.

  * ready

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    required

    ### Arguments

    Configures whether the tax app is correctly configured and ready to be used.

  ***

***

### Map

#### Mutations with this payload

* [tax​App​Configure](https://shopify.dev/docs/api/admin-graphql/latest/mutations/taxAppConfigure)

---
<a id="tax-summary-create-payload"></a>

## Tax​Summary​Create​Payload

payload

Return type for `taxSummaryCreate` mutation.

### Fields

* enqueued​Orders

  [\[Order!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order)

  A list of orders that were successfully enqueued to create a tax summary.

* user​Errors

  [\[Tax​Summary​Create​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/TaxSummaryCreateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [tax​Summary​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/taxSummaryCreate)

  mutation

  Creates a tax summary for a given order. If both an order ID and a start and end time are provided, the order ID will be used.

  * order​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    ### Arguments

    The ID of the order to create the tax summary for.

  * start​Time

    [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    The start time of the range of orders to create the tax summary for.

  * end​Time

    [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    The end time of the range of orders to create the tax summary for.

  ***

***

### Map

#### Mutations with this payload

* [tax​Summary​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/taxSummaryCreate)

---
<a id="theme-create-payload"></a>

## Theme​Create​Payload

payload

Return type for `themeCreate` mutation.

### Fields

* theme

  [Online​Store​Theme](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreTheme)

  The theme that was created.

* user​Errors

  [\[Theme​Create​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ThemeCreateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [theme​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeCreate)

  mutation

  Creates a theme from an external URL or staged upload. The theme source can either be a ZIP file hosted at a public URL or files previously uploaded using the [`stagedUploadsCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/stageduploadscreate) mutation. The theme displays in the [Themes page](https://admin.shopify.com/themes) in the Shopify admin.

  New themes have an [`UNPUBLISHED`](https://shopify.dev//docs/api/admin-graphql/latest/mutations/themeCreate#arguments-role.enums.UNPUBLISHED) role by default. You can optionally specify a [`DEVELOPMENT`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeCreate#arguments-role.enums.DEVELOPMENT) role for temporary themes used during development.

  * source

    [URL!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

    required

    ### Arguments

    An external URL or a [staged upload URL](https://shopify.dev/api/admin-graphql/latest/mutations/stageduploadscreate) of the theme to import.

  * name

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The name of the theme to be created.

  * role

    [Theme​Role](https://shopify.dev/docs/api/admin-graphql/latest/enums/ThemeRole)

    Default:UNPUBLISHED

    The role of the theme to be created. Only UNPUBLISHED and DEVELOPMENT roles are permitted.

  ***

***

### Map

#### Mutations with this payload

* [theme​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeCreate)

---
<a id="theme-delete-payload"></a>

## Theme​Delete​Payload

payload

Return type for `themeDelete` mutation.

### Fields

* deleted​Theme​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the deleted theme.

* user​Errors

  [\[Theme​Delete​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ThemeDeleteUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [theme​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeDelete)

  mutation

  Deletes a theme.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the theme to be deleted.

  ***

***

### Map

#### Mutations with this payload

* [theme​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeDelete)

---
<a id="theme-duplicate-payload"></a>

## Theme​Duplicate​Payload

payload

Return type for `themeDuplicate` mutation.

### Fields

* new​Theme

  [Online​Store​Theme](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreTheme)

  The newly duplicated theme.

* user​Errors

  [\[Theme​Duplicate​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ThemeDuplicateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [theme​Duplicate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeDuplicate)

  mutation

  Duplicates a theme.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    ID of the theme to be duplicated.

  * name

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    Name of the new theme.

  ***

***

### Map

#### Mutations with this payload

* [theme​Duplicate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeDuplicate)

---
<a id="theme-files-copy-payload"></a>

## Theme​Files​Copy​Payload

payload

Return type for `themeFilesCopy` mutation.

### Fields

* copied​Theme​Files

  [\[Online​Store​Theme​File​Operation​Result!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreThemeFileOperationResult)

  The resulting theme files.

* user​Errors

  [\[Online​Store​Theme​Files​User​Errors!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreThemeFilesUserErrors)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [theme​Files​Copy](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeFilesCopy)

  mutation

  Copy theme files. Copying to existing theme files will overwrite them.

  * theme​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The theme to update.

  * files

    [\[Theme​Files​Copy​File​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ThemeFilesCopyFileInput)

    required

    The files to update.

  ***

***

### Map

#### Mutations with this payload

* [theme​Files​Copy](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeFilesCopy)

---
<a id="theme-files-delete-payload"></a>

## Theme​Files​Delete​Payload

payload

Return type for `themeFilesDelete` mutation.

### Fields

* deleted​Theme​Files

  [\[Online​Store​Theme​File​Operation​Result!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreThemeFileOperationResult)

  The resulting theme files.

* user​Errors

  [\[Online​Store​Theme​Files​User​Errors!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreThemeFilesUserErrors)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [theme​Files​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeFilesDelete)

  mutation

  Deletes a theme's files.

  * theme​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    Specifies the theme to deleted.

  * files

    [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    The files to delete.

  ***

***

### Map

#### Mutations with this payload

* [theme​Files​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeFilesDelete)

---
<a id="theme-files-upsert-payload"></a>

## Theme​Files​Upsert​Payload

payload

Return type for `themeFilesUpsert` mutation.

### Fields

* job

  [Job](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job)

  The theme files write job triggered by the mutation.

* upserted​Theme​Files

  [\[Online​Store​Theme​File​Operation​Result!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreThemeFileOperationResult)

  The resulting theme files.

* user​Errors

  [\[Online​Store​Theme​Files​User​Errors!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreThemeFilesUserErrors)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [theme​Files​Upsert](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeFilesUpsert)

  mutation

  Creates or updates theme files in an online store theme. This mutation allows batch operations on multiple theme files, either creating new files or overwriting existing ones with the same filename.

  ***

  **Note:** You can process a maximum of 50 files in a single request.

  ***

  Each file requires a filename and body content. The body must specify a [`type`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeFilesUpsert#arguments-files.fields.body.type) with the corresponding [`value`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeFilesUpsert#arguments-files.fields.body.value). The mutation returns a [`job`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeFilesUpsert#returns-job) field for tracking asynchronous operations and an [`upsertedThemeFiles`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeFilesUpsert#returns-upsertedThemeFiles) field with details about the processed files.

  * theme​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The theme to update.

  * files

    [\[Online​Store​Theme​Files​Upsert​File​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OnlineStoreThemeFilesUpsertFileInput)

    required

    The files to update.

  ***

***

### Map

#### Mutations with this payload

* [theme​Files​Upsert](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeFilesUpsert)

---
<a id="theme-publish-payload"></a>

## Theme​Publish​Payload

payload

Return type for `themePublish` mutation.

### Fields

* theme

  [Online​Store​Theme](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreTheme)

  The theme that was published.

* user​Errors

  [\[Theme​Publish​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ThemePublishUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [theme​Publish](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themePublish)

  mutation

  Publishes a theme.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    ID of the theme to be published.

  ***

***

### Map

#### Mutations with this payload

* [theme​Publish](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themePublish)

---
<a id="theme-update-payload"></a>

## Theme​Update​Payload

payload

Return type for `themeUpdate` mutation.

### Fields

* theme

  [Online​Store​Theme](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreTheme)

  The theme that was updated.

* user​Errors

  [\[Theme​Update​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ThemeUpdateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [theme​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeUpdate)

  mutation

  Updates a theme.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the theme to be updated.

  * input

    [Online​Store​Theme​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OnlineStoreThemeInput)

    required

    The attributes of the theme to be updated.

  ***

***

### Map

#### Mutations with this payload

* [theme​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeUpdate)

---
<a id="transaction-void-payload"></a>

## Transaction​Void​Payload

payload

Return type for `transactionVoid` mutation.

### Fields

* transaction

  [Order​Transaction](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderTransaction)

  The created void transaction.

* user​Errors

  [\[Transaction​Void​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/TransactionVoidUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [transaction​Void](https://shopify.dev/docs/api/admin-graphql/latest/mutations/transactionVoid)

  mutation

  Trigger the voiding of an uncaptured authorization transaction.

  * parent​Transaction​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    An uncaptured authorization transaction.

  ***

***

### Map

#### Mutations with this payload

* [transaction​Void](https://shopify.dev/docs/api/admin-graphql/latest/mutations/transactionVoid)

---
<a id="translations-register-payload"></a>

## Translations​Register​Payload

payload

Return type for `translationsRegister` mutation.

### Fields

* translations

  [\[Translation!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/Translation)

  The translations that were created or updated.

* user​Errors

  [\[Translation​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/TranslationUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [translations​Register](https://shopify.dev/docs/api/admin-graphql/latest/mutations/translationsRegister)

  mutation

  Creates or updates translations for a resource's [translatable content](https://shopify.dev/docs/api/admin-graphql/latest/objects/TranslatableContent).

  Each translation requires a digest value from the resource's translatable content. Use the [`translatableResource`](https://shopify.dev/docs/api/admin-graphql/latest/queries/translatableResource) query to get a resource's translatable content and digest values before creating translations. You can optionally scope translations to specific markets using the `marketId` field in each translation input.

  Learn more about [managing translations](https://shopify.dev/docs/apps/build/markets/manage-translated-content).

  * resource​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    ID of the resource that is being translated.

  * translations

    [\[Translation​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/TranslationInput)

    required

    Specifies the input fields for a translation.

  ***

***

### Map

#### Mutations with this payload

* [translations​Register](https://shopify.dev/docs/api/admin-graphql/latest/mutations/translationsRegister)

---
<a id="translations-remove-payload"></a>

## Translations​Remove​Payload

payload

Return type for `translationsRemove` mutation.

### Fields

* translations

  [\[Translation!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/Translation)

  The translations that were deleted.

* user​Errors

  [\[Translation​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/TranslationUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [translations​Remove](https://shopify.dev/docs/api/admin-graphql/latest/mutations/translationsRemove)

  mutation

  Deletes translations.

  * resource​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    ID of the translatable resource for which translations are being deleted.

  * translation​Keys

    [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    The list of translation keys.

  * locales

    [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    The list of translation locales. Only locales returned in `shopLocales` are valid.

  * market​Ids

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The list of market IDs.

  ***

***

### Map

#### Mutations with this payload

* [translations​Remove](https://shopify.dev/docs/api/admin-graphql/latest/mutations/translationsRemove)

---
<a id="url-redirect-bulk-delete-all-payload"></a>

## Url​Redirect​Bulk​Delete​All​Payload

payload

Return type for `urlRedirectBulkDeleteAll` mutation.

### Fields

* job

  [Job](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job)

  The asynchronous job removing the redirects.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [url​Redirect​Bulk​Delete​All](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlRedirectBulkDeleteAll)

  mutation

  Asynchronously delete [URL redirects](https://shopify.dev/api/admin-graphql/latest/objects/UrlRedirect) in bulk.

***

### Map

#### Mutations with this payload

* [url​Redirect​Bulk​Delete​All](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlRedirectBulkDeleteAll)

---
<a id="url-redirect-bulk-delete-by-ids-payload"></a>

## Url​Redirect​Bulk​Delete​By​Ids​Payload

payload

Return type for `urlRedirectBulkDeleteByIds` mutation.

### Fields

* job

  [Job](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job)

  The asynchronous job removing the redirects.

* user​Errors

  [\[Url​Redirect​Bulk​Delete​By​Ids​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UrlRedirectBulkDeleteByIdsUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [url​Redirect​Bulk​Delete​By​Ids](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlRedirectBulkDeleteByIds)

  mutation

  Asynchronously delete [URLRedirect](https://shopify.dev/api/admin-graphql/latest/objects/UrlRedirect) objects in bulk by IDs. Learn more about [URLRedirect](https://help.shopify.com/en/manual/online-store/menus-and-links/url-redirect) objects.

  * ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    A list of [`URLRedirect`](https://help.shopify.com/en/manual/online-store/menus-and-links/url-redirect) object IDs to delete.

  ***

***

### Map

#### Mutations with this payload

* [url​Redirect​Bulk​Delete​By​Ids](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlRedirectBulkDeleteByIds)

---
<a id="url-redirect-bulk-delete-by-saved-search-payload"></a>

## Url​Redirect​Bulk​Delete​By​Saved​Search​Payload

payload

Return type for `urlRedirectBulkDeleteBySavedSearch` mutation.

### Fields

* job

  [Job](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job)

  The asynchronous job removing the redirects.

* user​Errors

  [\[Url​Redirect​Bulk​Delete​By​Saved​Search​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UrlRedirectBulkDeleteBySavedSearchUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [url​Redirect​Bulk​Delete​By​Saved​Search](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlRedirectBulkDeleteBySavedSearch)

  mutation

  Asynchronously delete redirects in bulk.

  * saved​Search​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the URL redirect saved search for filtering.

  ***

***

### Map

#### Mutations with this payload

* [url​Redirect​Bulk​Delete​By​Saved​Search](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlRedirectBulkDeleteBySavedSearch)

---
<a id="url-redirect-bulk-delete-by-search-payload"></a>

## Url​Redirect​Bulk​Delete​By​Search​Payload

payload

Return type for `urlRedirectBulkDeleteBySearch` mutation.

### Fields

* job

  [Job](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job)

  The asynchronous job removing the redirects.

* user​Errors

  [\[Url​Redirect​Bulk​Delete​By​Search​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UrlRedirectBulkDeleteBySearchUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [url​Redirect​Bulk​Delete​By​Search](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlRedirectBulkDeleteBySearch)

  mutation

  Asynchronously delete redirects in bulk.

  * search

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    Search query for filtering redirects on (both Redirect from and Redirect to fields).

  ***

***

### Map

#### Mutations with this payload

* [url​Redirect​Bulk​Delete​By​Search](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlRedirectBulkDeleteBySearch)

---
<a id="url-redirect-create-payload"></a>

## Url​Redirect​Create​Payload

payload

Return type for `urlRedirectCreate` mutation.

### Fields

* url​Redirect

  [Url​Redirect](https://shopify.dev/docs/api/admin-graphql/latest/objects/UrlRedirect)

  The created redirect.

* user​Errors

  [\[Url​Redirect​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UrlRedirectUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [url​Redirect​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlRedirectCreate)

  mutation

  Creates a [`UrlRedirect`](https://shopify.dev/api/admin-graphql/latest/objects/UrlRedirect) object.

  * url​Redirect

    [Url​Redirect​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/UrlRedirectInput)

    required

    ### Arguments

    The fields to use when creating the redirect.

  ***

***

### Map

#### Mutations with this payload

* [url​Redirect​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlRedirectCreate)

---
<a id="url-redirect-delete-payload"></a>

## Url​Redirect​Delete​Payload

payload

Return type for `urlRedirectDelete` mutation.

### Fields

* deleted​Url​Redirect​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the deleted redirect.

* user​Errors

  [\[Url​Redirect​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UrlRedirectUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [url​Redirect​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlRedirectDelete)

  mutation

  Deletes a [`UrlRedirect`](https://shopify.dev/api/admin-graphql/latest/objects/UrlRedirect) object.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the redirect to delete.

  ***

***

### Map

#### Mutations with this payload

* [url​Redirect​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlRedirectDelete)

---
<a id="url-redirect-import-create-payload"></a>

## Url​Redirect​Import​Create​Payload

payload

Return type for `urlRedirectImportCreate` mutation.

### Fields

* url​Redirect​Import

  [Url​Redirect​Import](https://shopify.dev/docs/api/admin-graphql/latest/objects/UrlRedirectImport)

  The created `URLRedirectImport` object.

* user​Errors

  [\[Url​Redirect​Import​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UrlRedirectImportUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [url​Redirect​Import​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlRedirectImportCreate)

  mutation

  Creates a [`UrlRedirectImport`](https://shopify.dev/api/admin-graphql/latest/objects/UrlRedirectImport) object.

  After creating the `UrlRedirectImport` object, the `UrlRedirectImport` request can be performed using the [`urlRedirectImportSubmit`](https://shopify.dev/api/admin-graphql/latest/mutations/urlRedirectImportSubmit) mutation.

  * url

    [URL!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

    required

    ### Arguments

    The staged upload URL of the CSV file. You can download [a sample URL redirect CSV file](https://help.shopify.com/csv/sample-redirect-template.csv).

  ***

***

### Map

#### Mutations with this payload

* [url​Redirect​Import​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlRedirectImportCreate)

---
<a id="url-redirect-import-submit-payload"></a>

## Url​Redirect​Import​Submit​Payload

payload

Return type for `urlRedirectImportSubmit` mutation.

### Fields

* job

  [Job](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job)

  The asynchronous job importing the redirects.

* user​Errors

  [\[Url​Redirect​Import​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UrlRedirectImportUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [url​Redirect​Import​Submit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlRedirectImportSubmit)

  mutation

  Submits a `UrlRedirectImport` request to be processed.

  The `UrlRedirectImport` request is first created with the [`urlRedirectImportCreate`](https://shopify.dev/api/admin-graphql/latest/mutations/urlRedirectImportCreate) mutation.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the [`UrlRedirectImport`](https://shopify.dev/api/admin-graphql/latest/objects/UrlRedirectImport) object.

  ***

***

### Map

#### Mutations with this payload

* [url​Redirect​Import​Submit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlRedirectImportSubmit)

---
<a id="url-redirect-update-payload"></a>

## Url​Redirect​Update​Payload

payload

Return type for `urlRedirectUpdate` mutation.

### Fields

* url​Redirect

  [Url​Redirect](https://shopify.dev/docs/api/admin-graphql/latest/objects/UrlRedirect)

  Returns the updated URL redirect.

* user​Errors

  [\[Url​Redirect​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UrlRedirectUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [url​Redirect​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlRedirectUpdate)

  mutation

  Updates a URL redirect.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the URL redirect to update.

  * url​Redirect

    [Url​Redirect​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/UrlRedirectInput)

    required

    The input fields required to update the URL redirect.

  ***

***

### Map

#### Mutations with this payload

* [url​Redirect​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlRedirectUpdate)

---
<a id="validation-create-payload"></a>

## Validation​Create​Payload

payload

Return type for `validationCreate` mutation.

### Fields

* user​Errors

  [\[Validation​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ValidationUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* validation

  [Validation](https://shopify.dev/docs/api/admin-graphql/latest/objects/Validation)

  The created validation.

***

### Mutations with this payload

* [validation​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/validationCreate)

  mutation

  Creates a validation.

  * validation

    [Validation​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ValidationCreateInput)

    required

    ### Arguments

    The input fields for a new validation.

  ***

***

### Map

#### Mutations with this payload

* [validation​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/validationCreate)

---
<a id="validation-delete-payload"></a>

## Validation​Delete​Payload

payload

Return type for `validationDelete` mutation.

### Fields

* deleted​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  Returns the deleted validation ID.

* user​Errors

  [\[Validation​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ValidationUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [validation​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/validationDelete)

  mutation

  Deletes a validation.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID representing the installed validation.

  ***

***

### Map

#### Mutations with this payload

* [validation​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/validationDelete)

---
<a id="validation-update-payload"></a>

## Validation​Update​Payload

payload

Return type for `validationUpdate` mutation.

### Fields

* user​Errors

  [\[Validation​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ValidationUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* validation

  [Validation](https://shopify.dev/docs/api/admin-graphql/latest/objects/Validation)

  The updated validation.

***

### Mutations with this payload

* [validation​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/validationUpdate)

  mutation

  Update a validation.

  * validation

    [Validation​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ValidationUpdateInput)

    required

    ### Arguments

    The input fields to update a validation.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID representing the validation to update.

  ***

***

### Map

#### Mutations with this payload

* [validation​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/validationUpdate)

---
<a id="webhook-subscription-create-payload"></a>

## Webhook​Subscription​Create​Payload

payload

Return type for `webhookSubscriptionCreate` mutation.

### Fields

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

* webhook​Subscription

  [Webhook​Subscription](https://shopify.dev/docs/api/admin-graphql/latest/objects/WebhookSubscription)

  The webhook subscription that was created.

***

### Mutations with this payload

* [webhook​Subscription​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webhookSubscriptionCreate)

  mutation

  Creates a webhook subscription that notifies your [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App) when specific events occur in a shop. Webhooks push event data to your endpoint immediately when changes happen, eliminating the need for polling.

  The subscription configuration supports multiple endpoint types including HTTPS URLs, Google Pub/Sub topics, and AWS EventBridge event sources. You can filter events using [Shopify API search syntax](https://shopify.dev/docs/api/usage/search-syntax) to receive only relevant webhooks, control which data fields are included in webhook payloads, and specify metafield namespaces to include.

  ***

  **Note:** The Webhooks API version \<a href="https://shopify.dev/docs/apps/build/webhooks/subscribe/use-newer-api-version">configured in your app\</a> determines the API version for webhook events. You can\&#39;t specify it per subscription.

  ***

  Building an app? If you only use app-specific webhooks, you won't need this. App-specific webhook subscriptions specified in your `shopify.app.toml` may be easier. They are automatically kept up to date by Shopify & require less maintenance. Please read [About managing webhook subscriptions](https://shopify.dev/docs/apps/build/webhooks/subscribe).

  * topic

    [Webhook​Subscription​Topic!](https://shopify.dev/docs/api/admin-graphql/latest/enums/WebhookSubscriptionTopic)

    required

    ### Arguments

    The type of event that triggers the webhook.

  * webhook​Subscription

    [Webhook​Subscription​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/WebhookSubscriptionInput)

    required

    Specifies the input fields for a webhook subscription.

  ***

***

### Map

#### Mutations with this payload

* [webhook​Subscription​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webhookSubscriptionCreate)

---
<a id="webhook-subscription-delete-payload"></a>

## Webhook​Subscription​Delete​Payload

payload

Return type for `webhookSubscriptionDelete` mutation.

### Fields

* deleted​Webhook​Subscription​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the deleted webhook subscription.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [webhook​Subscription​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webhookSubscriptionDelete)

  mutation

  Deletes a [`WebhookSubscription`](https://shopify.dev/docs/api/admin-graphql/latest/objects/WebhookSubscription) and stops all future webhooks to its endpoint. Returns the deleted subscription's ID for confirmation.

  Building an app? If you only use app-specific webhooks, you won't need this. App-specific webhook subscriptions specified in your `shopify.app.toml` may be easier. They are automatically kept up to date by Shopify & require less maintenance. Please read [About managing webhook subscriptions](https://shopify.dev/docs/apps/build/webhooks/subscribe).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the webhook subscription to delete.

  ***

***

### Map

#### Mutations with this payload

* [webhook​Subscription​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webhookSubscriptionDelete)

---
<a id="webhook-subscription-update-payload"></a>

## Webhook​Subscription​Update​Payload

payload

Return type for `webhookSubscriptionUpdate` mutation.

### Fields

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

* webhook​Subscription

  [Webhook​Subscription](https://shopify.dev/docs/api/admin-graphql/latest/objects/WebhookSubscription)

  The webhook subscription that was updated.

***

### Mutations with this payload

* [webhook​Subscription​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webhookSubscriptionUpdate)

  mutation

  Updates a webhook subscription's configuration. Modify the endpoint URL, event filters, included fields, or metafield namespaces without recreating the subscription.

  The mutation accepts a [`WebhookSubscriptionInput`](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/WebhookSubscriptionInput) that specifies the new configuration. You can switch between endpoint types (HTTP, Pub/Sub, EventBridge) by providing a different URI format. Updates apply atomically without interrupting webhook delivery.

  Building an app? If you only use app-specific webhooks, you won't need this. App-specific webhook subscriptions specified in your `shopify.app.toml` may be easier. They are automatically kept up to date by Shopify & require less maintenance. Please read [About managing webhook subscriptions](https://shopify.dev/docs/apps/build/webhooks/subscribe).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the webhook subscription to update.

  * webhook​Subscription

    [Webhook​Subscription​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/WebhookSubscriptionInput)

    required

    Specifies the input fields for a webhook subscription.

  ***

***

### Map

#### Mutations with this payload

* [webhook​Subscription​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webhookSubscriptionUpdate)

---
<a id="web-pixel-create-payload"></a>

## Web​Pixel​Create​Payload

payload

Return type for `webPixelCreate` mutation.

### Fields

* user​Errors

  [\[Errors​Web​Pixel​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ErrorsWebPixelUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* web​Pixel

  [Web​Pixel](https://shopify.dev/docs/api/admin-graphql/latest/objects/WebPixel)

  The created web pixel settings.

***

### Mutations with this payload

* [web​Pixel​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webPixelCreate)

  mutation

  Activate a [web pixel extension](https://shopify.dev/docs/apps/build/marketing-analytics/build-web-pixels) by creating a web pixel record on the store where you installed your app.

  When you run the `webPixelCreate` mutation, Shopify validates it against the settings definition in `shopify.extension.toml`. If the `settings` input field doesn't match the schema that you defined, then the mutation fails. Learn how to define [web pixel settings](https://shopify.dev/docs/apps/build/marketing-analytics/build-web-pixels#step-2-define-your-web-pixel-settings).

  * web​Pixel

    [Web​Pixel​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/WebPixelInput)

    required

    ### Arguments

    The web pixel settings in JSON format.

  ***

***

### Map

#### Mutations with this payload

* [web​Pixel​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webPixelCreate)

---
<a id="web-pixel-delete-payload"></a>

## Web​Pixel​Delete​Payload

payload

Return type for `webPixelDelete` mutation.

### Fields

* deleted​Web​Pixel​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the web pixel settings that was deleted.

* user​Errors

  [\[Errors​Web​Pixel​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ErrorsWebPixelUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [web​Pixel​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webPixelDelete)

  mutation

  Deletes the web pixel shop settings.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the web pixel to delete.

  ***

***

### Map

#### Mutations with this payload

* [web​Pixel​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webPixelDelete)

---
<a id="web-pixel-update-payload"></a>

## Web​Pixel​Update​Payload

payload

Return type for `webPixelUpdate` mutation.

### Fields

* user​Errors

  [\[Errors​Web​Pixel​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ErrorsWebPixelUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* web​Pixel

  [Web​Pixel](https://shopify.dev/docs/api/admin-graphql/latest/objects/WebPixel)

  The updated web pixel settings.

***

### Mutations with this payload

* [web​Pixel​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webPixelUpdate)

  mutation

  Activate a [web pixel extension](https://shopify.dev/docs/apps/build/marketing-analytics/build-web-pixels) by updating a web pixel record on the store where you installed your app.

  When you run the `webPixelUpdate` mutation, Shopify validates it against the settings definition in `shopify.extension.toml`. If the `settings` input field doesn't match the schema that you defined, then the mutation fails. Learn how to define [web pixel settings](https://shopify.dev/docs/apps/build/marketing-analytics/build-web-pixels#step-2-define-your-web-pixel-settings).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the web pixel to update.

  * web​Pixel

    [Web​Pixel​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/WebPixelInput)

    required

    The web pixel settings in JSON format.

  ***

***

### Map

#### Mutations with this payload

* [web​Pixel​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webPixelUpdate)

---
<a id="web-presence-create-payload"></a>

## Web​Presence​Create​Payload

payload

Return type for `webPresenceCreate` mutation.

### Fields

* user​Errors

  [\[Market​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* web​Presence

  [Market​Web​Presence](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketWebPresence)

  The created web presence object.

***

### Mutations with this payload

* [web​Presence​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webPresenceCreate)

  mutation

  Creates a web presence.

  * input

    [Web​Presence​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/WebPresenceCreateInput)

    required

    ### Arguments

    The details of the web presence to be created.

  ***

***

### Map

#### Mutations with this payload

* [web​Presence​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webPresenceCreate)

---
<a id="web-presence-delete-payload"></a>

## Web​Presence​Delete​Payload

payload

Return type for `webPresenceDelete` mutation.

### Fields

* deleted​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the deleted web presence.

* user​Errors

  [\[Market​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [web​Presence​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webPresenceDelete)

  mutation

  Deletes a web presence.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the web presence to delete.

  ***

***

### Map

#### Mutations with this payload

* [web​Presence​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webPresenceDelete)

---
<a id="web-presence-update-payload"></a>

## Web​Presence​Update​Payload

payload

Return type for `webPresenceUpdate` mutation.

### Fields

* user​Errors

  [\[Market​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* web​Presence

  [Market​Web​Presence](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketWebPresence)

  The web presence object.

***

### Mutations with this payload

* [web​Presence​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webPresenceUpdate)

  mutation

  Updates a web presence.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the web presence to update.

  * input

    [Web​Presence​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/WebPresenceUpdateInput)

    required

    The web presence properties to update.

  ***

***

### Map

#### Mutations with this payload

* [web​Presence​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webPresenceUpdate)

---
