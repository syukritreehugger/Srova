-- takeaway_poll_silent fired 14x in 7 days for Friturist, which has no Takeaway.com account/poller
-- (0 takeaway orders ever). Only alarm for locations that have received at least one Takeaway order.
-- ponytail: a brand-new JET store will not alarm until its first order lands; acceptable.
CREATE OR REPLACE VIEW public.v_takeaway_poll_health AS
WITH last_ins AS (
  SELECT co.location_key, max(co.created_at) AS last_at
  FROM canonical_orders co WHERE co.source = 'takeaway'::order_source GROUP BY co.location_key
), svc AS (
  SELECT l.location_key, l.name, l.is_active,
         (now() AT TIME ZONE COALESCE(l.timezone,'Europe/Brussels')) AS local_now,
         ot.open_time, ot.close_time, ot.lunch_open_time, ot.lunch_close_time, ot.is_closed
  FROM dim_location l
  LEFT JOIN opening_times ot ON ot.location_key = l.location_key
   AND ot.day_of_week = EXTRACT(dow FROM (now() AT TIME ZONE COALESCE(l.timezone,'Europe/Brussels')))::int
), win AS (
  SELECT s.*,
    CASE WHEN COALESCE(s.is_closed,true) THEN NULL
         WHEN s.lunch_open_time IS NOT NULL AND s.local_now::time >= s.lunch_open_time AND s.local_now::time <= s.lunch_close_time - interval '15 min' THEN s.lunch_open_time
         WHEN s.local_now::time >= s.open_time AND s.local_now::time <= s.close_time - interval '15 min' THEN s.open_time
         ELSE NULL END AS window_open_time
  FROM svc s
)
SELECT w.location_key, w.name AS location_name, w.is_active,
       li.last_at AS last_takeaway_insert_at,
       EXTRACT(epoch FROM (now() - li.last_at))/60.0 AS age_minutes,
       90 AS expected_max_gap_minutes,
       (w.is_active AND w.window_open_time IS NOT NULL
        AND w.local_now::time >= w.window_open_time + interval '01:30'
        AND li.last_at < now() - interval '01:30') AS is_anomaly   -- was: (li.last_at IS NULL OR ...)
FROM win w LEFT JOIN last_ins li ON li.location_key = w.location_key;
