#!/bin/bash
# Srova live pipeline monitor — prints ONLY anomalies (+ a heartbeat every 10 min) to its log.
LOG=/var/log/srova_live_monitor.log; STATE=/tmp/.srova_mon_state; touch "$STATE"
Q(){ docker exec supabase-db psql -U postgres -d postgres -tAF'|' -c "$1" 2>/dev/null; }
N8(){ docker exec n8n-postgres psql -U n8n -d n8n -tAF'|' -c "$1" 2>/dev/null; }
i=0
while true; do
  TS=$(TZ=Europe/Brussels date +%H:%M:%S); i=$((i+1))
  # 1. queues
  Q "SELECT queue_name||' depth='||queue_length||' oldest='||COALESCE(oldest_msg_age_sec::text,'0')||'s' FROM pgmq.metrics_all() WHERE queue_name IN ('q_orders_normalize','q_orders_push_ls','q_orders_push_shipday') AND (queue_length>5 OR COALESCE(oldest_msg_age_sec,0)>120);" | sed "s/^/$TS QUEUE /" | tee -a "$LOG"
  # 2. orders not yet at POS after 3 min
  Q "SELECT replace(location_key,'LOC_','')||' '||replace(replace(external_ref,'Shopify - ',''),'Takeaway - ','')||' '||status||' since '||to_char(created_at AT TIME ZONE 'Europe/Brussels','HH24:MI') FROM canonical_orders WHERE status IN ('received','normalized','pushing_ls','ls_sent') AND created_at BETWEEN now()-interval '2 hours' AND now()-interval '3 minutes';" | sed "s/^/$TS STUCK /" | tee -a "$LOG"
  # 3. receipts the till did not take (new since last tick)
  Q "SELECT w.canonical_id||'|'||replace(c.location_key,'LOC_','')||' '||replace(replace(c.external_ref,'Shopify - ',''),'Takeaway - ','')||' till='||w.status FROM ls_receipt_watch w JOIN canonical_orders c ON c.id=w.canonical_id WHERE w.status NOT IN ('DONE','PAID') AND w.checked_at > now()-interval '90 seconds';" | while IFS='|' read -r id line; do grep -q "R:$id" "$STATE" || { echo "R:$id" >> "$STATE"; echo "$TS TILL $line" | tee -a "$LOG"; }; done
  # 4. new alerts
  Q "SELECT id||'|'||queue_name||' '||COALESCE(replace(location_key,'LOC_',''),'-')||' '||COALESCE(replace(replace(external_ref,'Shopify - ',''),'Takeaway - ',''),'-')||' :: '||left(COALESCE(last_error->>'message',''),90) FROM dlq_alerts WHERE created_at > now()-interval '90 seconds' AND queue_name<>'takeaway_poll_silent';" | while IFS='|' read -r id line; do grep -q "A:$id" "$STATE" || { echo "A:$id" >> "$STATE"; echo "$TS ALERT $line" | tee -a "$LOG"; }; done
  # 5. n8n errors in order workflows
  N8 "SELECT e.id||'|'||w.name||' '||e.\"startedAt\"::time FROM execution_entity e JOIN workflow_entity w ON w.id=e.\"workflowId\" WHERE e.status='error' AND e.\"startedAt\" > now()-interval '90 seconds' AND w.name IN ('push_lightspeed_order','shopify_normalize_to_canonical','poller_q_orders_normalize','resolve_and_push_takeaway_order','push_shipday_order','shopify_webhook_order_create','shopify_webhook_order_updated');" | while IFS='|' read -r id line; do grep -q "E:$id" "$STATE" || { echo "E:$id" >> "$STATE"; echo "$TS N8N-ERROR $line" | tee -a "$LOG"; }; done
  # 6. heartbeat every 10 ticks
  if [ $((i % 10)) -eq 0 ]; then
    HB=$(Q "SELECT 'orders_1h='||count(*)||' at_pos='||count(*) FILTER (WHERE status IN ('ls_accepted','shipday_sent','complete'))||' | '||(SELECT string_agg(queue_name||'='||queue_length,' ') FROM pgmq.metrics_all() WHERE queue_name IN ('q_orders_normalize','q_orders_push_ls'))||' | load='||(SELECT substr(pg_read_file('/proc/loadavg'),1,4)) FROM canonical_orders WHERE created_at > now()-interval '1 hour';")
    echo "$TS HEARTBEAT $HB" | tee -a "$LOG"
  fi
  sleep 60
done
