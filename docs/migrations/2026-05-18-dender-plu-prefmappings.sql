-- Migration: 2026-05-18 Pre-map 17 common Frietchalet (Dender) products → LS PLU
--
-- Background:
-- Before Joef's e2e pickup order test on 2026-05-18, we pre-populated takeaway_plu_map
-- for the most common Frietchalet products. Without pre-mappings, the pipeline's
-- Phase B PLU validation rejects every product → all DLQ → test cannot push.
--
-- All 17 product names were verified against LOC_DENDER's raw_ls_products catalog
-- (SELECT sku, name, price FROM raw_ls_products WHERE location_key = 'LOC_DENDER' AND visible = true).
--
-- Verified working: order XKVTVW (Klein friet F2 + Cola F38) pushed via this mapping.
--
-- Already applied via direct SQL on 2026-05-18. This file captures it for git history.
-- Idempotent via ON CONFLICT DO UPDATE.

INSERT INTO takeaway_plu_map (location_key, takeaway_name, ls_plu, ls_product_name, auto_matched, confirmed_at)
VALUES
  ('LOC_DENDER', 'Mini friet',       'F1',   'Mini friet',       false, NOW()),
  ('LOC_DENDER', 'Klein friet',      'F2',   'Klein friet',      false, NOW()),
  ('LOC_DENDER', 'Middel friet',     'F3',   'Middel friet',     false, NOW()),
  ('LOC_DENDER', 'Groot friet',      'F4',   'Groot friet',      false, NOW()),
  ('LOC_DENDER', 'Curryworst',       'SA7',  'Curryworst',       false, NOW()),
  ('LOC_DENDER', 'Cola',             'F38',  'Cola',             false, NOW()),
  ('LOC_DENDER', 'Cola Zero',        'F39',  'Cola Zero',        false, NOW()),
  ('LOC_DENDER', 'Boulet',           'SA31', 'Boulet',           false, NOW()),
  ('LOC_DENDER', 'Kaaskroket',       'SA13', 'Kaaskroket',       false, NOW()),
  ('LOC_DENDER', 'Hamburger',        'B2',   'Hamburger',        false, NOW()),
  ('LOC_DENDER', 'Vleeskroket',      'SN16', 'Vleeskroket',      false, NOW()),
  ('LOC_DENDER', 'Bamischijf',       'SA3',  'Bamischijf',       false, NOW()),
  ('LOC_DENDER', 'Chixfingers',      'SA6',  'Chixfingers',      false, NOW()),
  ('LOC_DENDER', 'Mexicano',         'SA23', 'Mexicano',         false, NOW()),
  ('LOC_DENDER', 'Kipcorn',          'SA16', 'Kipcorn',          false, NOW()),
  ('LOC_DENDER', 'Stoofvlees saus',  'F13',  'Stoofvlees saus',  false, NOW()),
  ('LOC_DENDER', 'Loempia',          'SA20', 'Loempia',          false, NOW())
ON CONFLICT (location_key, takeaway_name) DO UPDATE SET
  ls_plu = EXCLUDED.ls_plu,
  ls_product_name = EXCLUDED.ls_product_name,
  confirmed_at = NOW();

-- Verify:
-- SELECT COUNT(*) FROM takeaway_plu_map
-- WHERE location_key = 'LOC_DENDER' AND ls_plu IS NOT NULL;
-- Expected: 17 (or more, since the poller also auto-discovered ~47 unmapped product
-- names during the test poll cycle which sit alongside as candidates for admin mapping).

-- Note: The pipeline's poller will continue to insert NEW takeaway_plu_map rows for
-- product names it discovers but doesn't yet know (auto_matched=false, ls_plu=NULL).
-- Admin then maps each via the /menu?channel=takeaway&loc=LOC_DENDER dashboard.
