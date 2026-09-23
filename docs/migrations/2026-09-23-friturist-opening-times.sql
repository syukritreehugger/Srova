-- 2026-09-23 — Friturist opening hours (source: its own Shopify theme, confirmed by Aziz).
-- Needed by push_lightspeed_order: orders pushed while a store is closed now get
-- deliveryDate = opening + 15 min, because the Lightspeed till never auto-prints an order
-- whose deliveryDate was already past when the app is opened (9 Friturist pre-opening
-- orders stuck at NEW in 20 days, e.g. #1123 pushed 15:55 with deliveryDate 16:10).
INSERT INTO opening_times (location_key, day_of_week, open_time, close_time, is_closed)
SELECT 'LOC_FRITURIST', d, '16:30', CASE WHEN d IN (1,2,3,4) THEN '21:00'::time ELSE '22:00'::time END, false
FROM generate_series(0,6) d ON CONFLICT DO NOTHING;
