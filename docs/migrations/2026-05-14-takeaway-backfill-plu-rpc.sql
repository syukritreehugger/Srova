-- Migration: 2026-05-14 takeaway_backfill_plu() RPC
--
-- Background:
-- When the takeaway poller normalizes an order with unmapped products, it stores
-- `plu: 'UNMAPPED:<takeaway_name>'` as a placeholder in canonical_orders.items.
-- These orders fail PLU validation in push_lightspeed_order (correct behavior — they
-- can't push to LS without real PLUs).
--
-- When the admin later maps a takeaway_name → ls_plu via /menu UI, this RPC is called
-- to find all stuck canonical_orders for the same location that have the matching
-- UNMAPPED:<name> placeholder, and replace it with the real PLU. Admin can then retry
-- those orders from /alerts.
--
-- Called by: app/(app)/menu/actions.ts → updateTakeawayPluMapping()
--
-- Already applied in production on 2026-05-14. This file captures it in git.

CREATE OR REPLACE FUNCTION public.takeaway_backfill_plu(
  p_location_key text,
  p_takeaway_name text,
  p_new_plu text
) RETURNS integer
LANGUAGE plpgsql
AS $$
DECLARE
  placeholder text;
  affected integer;
BEGIN
  placeholder := 'UNMAPPED:' || left(p_takeaway_name, 80);

  WITH updated AS (
    UPDATE public.canonical_orders co
    SET items = (
      SELECT jsonb_agg(
        CASE WHEN item->>'plu' = placeholder
          THEN jsonb_set(item, '{plu}', to_jsonb(p_new_plu))
          ELSE item
        END
      )
      FROM jsonb_array_elements(co.items) AS item
    ),
    updated_at = now()
    WHERE co.source = 'takeaway'::public.order_source
      AND co.location_key = p_location_key
      AND co.items::text LIKE '%' || placeholder || '%'
    RETURNING co.id
  )
  SELECT count(*) INTO affected FROM updated;

  RETURN affected;
END;
$$;

GRANT EXECUTE ON FUNCTION public.takeaway_backfill_plu(text, text, text) TO authenticated, service_role;
