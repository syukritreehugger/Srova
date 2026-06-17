-- Migration: 2026-05-18 takeaway_tokens.is_active flag + Frietchalet account seed
--
-- Background:
-- During the Frietchalet (LOC_DENDER) e2e test on 2026-05-18, two things happened:
--   1. Frietchalet's own Takeaway.com account credentials became available (separate
--      from defrietbooster which serves LOC_BERLARE). We seeded those into
--      takeaway_tokens so the poller can fetch Frietchalet's orders directly.
--   2. To control which accounts the pipeline polls (and avoid accidentally polling
--      stale accounts during transition), we added an is_active flag. Sub-workflow
--      "takeaway_refresh_access_token" filters `WHERE account_name = 'X' AND is_active = true`
--      so a `false` flag prevents the token from ever being loaded/refreshed.
--
-- Verification:
--   - On 2026-05-18 14:31 UTC, real customer Jeoffrey Ghysels placed pickup order
--     XKVTVW (€7.30) at takeaway.com → De Frietchalet. Poller picked it up,
--     normalized, pushed to LS POS Frietchalet (LS receipt 36259312 / 474374422).
--   - Joef confirmed only one receipt appeared — Deliverect did NOT duplicate-push
--     because Lightspeed iPad app was closed (Deliverect requires iPad app running;
--     Srova does not). See docs/plans/2026-05-18-deliverect-vs-srova-architectural-advantage.md
--
-- All operations below were applied via direct SQL on 2026-05-18. This file captures
-- them for git history. Idempotent (safe to re-run).

-- 1. Add is_active column (default true so existing rows remain functional)
ALTER TABLE takeaway_tokens ADD COLUMN IF NOT EXISTS is_active BOOLEAN NOT NULL DEFAULT true;

-- 2. Seed Frietchalet token row (Dender account)
--    Tokens themselves are not committed here — they're populated via the seed
--    procedure documented in docs/plans/takeaway-token-recovery.md.
--    This INSERT is the SHAPE; actual token values were entered live.
--
--    Example shape:
--    INSERT INTO takeaway_tokens (
--      account_name, location_key, refresh_token, access_token,
--      token_expires_at, refresh_expires_at
--    ) VALUES (
--      'frietchalet', 'LOC_DENDER',
--      '<refresh_token_from_browser_DevTools>',
--      '<access_token_from_browser_DevTools>',
--      NOW() + INTERVAL '5 minutes',
--      NOW() + INTERVAL '30 days'
--    )
--    ON CONFLICT (account_name) DO UPDATE SET
--      refresh_token = EXCLUDED.refresh_token,
--      access_token = EXCLUDED.access_token,
--      token_expires_at = EXCLUDED.token_expires_at,
--      refresh_expires_at = EXCLUDED.refresh_expires_at,
--      location_key = EXCLUDED.location_key,
--      updated_at = now();

-- 3. Current activation state (as of session end 2026-05-18 23:50 UTC)
--    Both accounts are paused (workflows inactive, tokens deactivated). Pipeline
--    is fully idle pending production cutover decision.
UPDATE takeaway_tokens SET is_active = false WHERE account_name = 'defrietbooster';
UPDATE takeaway_tokens SET is_active = false WHERE account_name = 'frietchalet';

-- Verify:
-- SELECT account_name, location_key, is_active FROM takeaway_tokens ORDER BY account_name;
-- Expected:
--   defrietbooster | LOC_BERLARE | false
--   frietchalet    | LOC_DENDER  | false

-- To reactivate when ready for production:
--   UPDATE takeaway_tokens SET is_active = true WHERE account_name = 'frietchalet';
--   -- then activate the n8n workflows (push_lightspeed_order, takeaway_poll_orders,
--   --   takeaway_refresh_access_token) via /settings toggle or n8n UI.
