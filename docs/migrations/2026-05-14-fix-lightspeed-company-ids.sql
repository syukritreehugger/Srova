-- Migration: 2026-05-14 fix dim_location.lightspeed_company_id for Berlare & Dender
--
-- Background:
-- During controlled LS push test on 2026-05-14, POST /onlineordering/customer/{id}/establishmentorder
-- consistently failed with 404 "No valid company found" for both Berlare and Dender.
-- AALST pushes worked previously without this error.
--
-- Root cause discovered:
-- Existing values 145352 (Berlare) and 145351 (Dender) are Lightspeed's BILLING product IDs
-- (visible on invoices like INVS-2900708 as "Product ID / Username"), not the API company IDs.
-- The correct API company IDs are decodable from each location's ls_tokens.access_token JWT `cid` claim:
--   - Berlare JWT cid = 44982
--   - Dender  JWT cid = 44981
--   - Aalst   JWT cid = 45905 (already matched dim_location.lightspeed_company_id, no change)
--
-- Verification:
-- After applying this fix, manual POST /establishmentorder with companyId=44982 returned 201 Created
-- (LS order 36162845). The workflow takeaway → push_lightspeed_order now successfully pushes
-- Takeaway orders for Berlare. Same fix applies to Dender (same JWT pattern).
--
-- This was already applied in production via direct SQL on 2026-05-14 ~17:45 UTC. This file
-- captures the change for git history.

UPDATE dim_location SET lightspeed_company_id = 44982 WHERE location_key = 'LOC_BERLARE';
UPDATE dim_location SET lightspeed_company_id = 44981 WHERE location_key = 'LOC_DENDER';

-- Aalst already correct (45905 == 45905), no change.

-- Verify:
-- SELECT location_key, lightspeed_company_id FROM dim_location ORDER BY location_key;
-- Expected:
--   LOC_AALST   | 45905
--   LOC_BERLARE | 44982
--   LOC_DENDER  | 44981
