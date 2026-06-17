-- Migration: 2026-06-17 reconcile_missing_canonical filter paused locations
--
-- Background:
-- During the per-store activation rollout (Integration Store at /integrations),
-- we discovered that even though normalize/push workflows respect
-- dim_location.is_active, the reconciler `reconcile_missing_canonical`
-- still enqueued msgs to q_orders_normalize for paused locations. The normalize
-- workflow then picked them up and acked them via the IF gate — correct end
-- state, but with brief queue activity and wasted workflow runs.
--
-- This patch adds `AND COALESCE(dl.is_active, true) = true` to the reconciler's
-- candidate selection so paused locations have ZERO queue activity. Achieves
-- the "calendar-real" semantics requested by Aziz:
--
--   "Off 3-6 Juni → not in. Activate 7 Juni → only orders from 7 Juni count
--    seterusnya gitu."
--
-- Net effect:
--   - raw_orders: still inserted for every webhook (audit log preserved)
--   - q_orders_normalize: zero msgs for paused locations
--   - canonical_orders: zero rows for paused periods
--   - LS POS push: zero attempts for paused
--
-- Defense-in-depth: the IF Location Active? node inside
-- shopify_normalize_to_canonical is KEPT so any msg that does get enqueued
-- (manual reconcile, edge case) still gets gated.
--
-- Applied via apply_migration on 2026-06-17. Idempotent (CREATE OR REPLACE).

CREATE OR REPLACE FUNCTION public.reconcile_missing_canonical(
  p_lookback_minutes integer DEFAULT 60,
  p_batch_size integer DEFAULT 100
)
RETURNS integer
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $function$
DECLARE
  enqueued integer := 0;
BEGIN
  WITH missing AS (
    SELECT r.id, r.external_ref, r.location_key
    FROM public.raw_orders r
    LEFT JOIN public.canonical_orders c
      ON c.source = r.source
     AND c.external_ref = r.external_ref
    JOIN public.dim_location dl
      ON dl.location_key = r.location_key
    WHERE r.source = 'shopify'::public.order_source
      AND r.external_ref IS NOT NULL
      AND r.external_ref LIKE 'Shopify - %'
      AND r.location_key IS NOT NULL
      AND r.received_at > now() - make_interval(mins => p_lookback_minutes)
      AND c.id IS NULL
      AND COALESCE(dl.is_active, true) = true
    ORDER BY r.received_at DESC
    LIMIT p_batch_size
  ),
  enqueues AS (
    SELECT public.pgmq_send_order(
      'q_orders_normalize',
      jsonb_build_object(
        'raw_id',       m.id,
        'source',       'shopify',
        'external_ref', m.external_ref,
        'location_key', m.location_key,
        'webhook_id',   NULL,
        'origin',       'reconciler'
      )
    ) AS msg_id
    FROM missing m
  )
  SELECT count(*) INTO enqueued FROM enqueues;
  RETURN enqueued;
END$function$;

COMMENT ON FUNCTION public.reconcile_missing_canonical(integer, integer) IS
  'Periodic Shopify reconciler. Finds raw_orders without matching canonical_orders and enqueues them to q_orders_normalize. Skips locations where dim_location.is_active=false so paused locations have ZERO queue activity (calendar-real semantics).';

-- Rollback:
--   Remove the `JOIN dim_location dl ON dl.location_key = r.location_key` and
--   the `AND COALESCE(dl.is_active, true) = true` line from the missing CTE.
