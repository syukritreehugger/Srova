-- 2026-10-16 — Gated reader for q_orders_push_ls.
-- WHY: during the bulk-fulfill flood, shopify_normalize enqueued 2–4 push messages per order
-- (orders/create + orders/updated normalised seconds apart). Check LS Existing missed them and
-- 10 orders were pushed twice to Lightspeed. A CTE-based gate inside the n8n node returned
-- 0 rows under n8n (works in psql) — so the gate lives in this SECURITY DEFINER function and
-- the node is a plain `SELECT msg_id, message FROM public.pgmq_read_push_gated(60, 1);`.
-- Messages whose canonical order is no longer normalized/pushing_ls are deleted, never pushed.
CREATE OR REPLACE FUNCTION public.pgmq_read_push_gated(p_vt_seconds integer, p_qty integer)
 RETURNS TABLE(msg_id bigint, message jsonb)
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public', 'pgmq'
AS $function$
-- 2026-10-16: read q_orders_push_ls but DROP any message whose canonical order is no longer
-- pushable (already ls_accepted etc.). Duplicate push messages re-pushed 10 orders to
-- Lightspeed in one evening; Check LS Existing did not catch them. Dropping here means a
-- duplicate can never reach the POS, and the message does not leak back every 60 s.
DECLARE r RECORD; st text;
BEGIN
  FOR r IN SELECT * FROM public.pgmq_read_order('q_orders_push_ls', p_vt_seconds, p_qty) LOOP
    SELECT co.status::text INTO st FROM public.canonical_orders co WHERE co.id = (r.message->>'canonical_id')::uuid;
    IF st IS NULL OR st IN ('normalized','pushing_ls') THEN
      msg_id := r.msg_id; message := r.message; RETURN NEXT;
    ELSE
      PERFORM public.pgmq_delete_order('q_orders_push_ls', r.msg_id);
    END IF;
  END LOOP;
END $function$

;
GRANT EXECUTE ON FUNCTION public.pgmq_read_push_gated(integer, integer) TO PUBLIC;
