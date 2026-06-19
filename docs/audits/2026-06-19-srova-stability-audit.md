# Srova Stability Audit Report — 2026-06-19

## TL;DR
Srova's pilot is functionally serving live AALST orders, but the audit surfaced **seven P0 issues that block any further cutover (Berlare/Dender) and demand same-day remediation**. The single most urgent: 53 paid AALST Shopify orders from 2026-06-17/18 are sitting in `raw_orders` with no `canonical_orders` row, meaning real customer transactions never reached Lightspeed. Compounding that, **RLS is silently disabled on 62 public tables**, including `canonical_orders` (958 rows), `raw_orders` (54k webhooks with PII), `takeaway_tokens` (live OAuth access/refresh tokens), and `dim_customer` (15,291 PII rows) — all with `anon` and `authenticated` roles holding full SELECT/INSERT/UPDATE/DELETE/TRUNCATE via PostgREST. The published anon key in the browser bundle is a full-CRUD master key today. **Not ready to ship to Berlare/Dender; not ready to flip `deliverect_active=true`.**

## P0 — Block ship (real-money risk)

1. **53 paid AALST Shopify orders never normalized into canonical_orders** (webhook_ingestion_reliability)
   - Evidence: `raw_orders` last 7d AALST=56 vs `canonical_orders` AALST=10 (only 3 real, 7 are test rows). Missing #online-5086…5092 are `paid`, `cancelled_at=NULL`, `hmac_valid=true`, exact `Shopify - #online-NNNN` external_ref format. Zero matches in canonical_orders.
   - Fix: one-shot backfill through `shopify_normalize_to_canonical` (workflow `OdYCsotEru63kxN7`); audit n8n executions 2026-06-17/18; add `raw_orders > 5min old without canonical match → DLQ` reconciliation alert.
   - Effort: 2–4h (backfill + investigation), ~1h to add reconciliation cron.

2. **`canonical_orders` has RLS DISABLED** (Supabase / public schema)
   - Evidence: `pg_class.relrowsecurity=false` while `relforcerowsecurity=true`. Both `canonical_orders_default_deny` RESTRICTIVE and `canonical_orders_developer_read_all` policies are inert. Advisor: `policy_exists_rls_disabled ERROR` + `rls_disabled_in_public ERROR`. CLAUDE.md claim is false vs live DB.
   - Fix: `ALTER TABLE public.canonical_orders ENABLE ROW LEVEL SECURITY;` then verify (app) pages still render via service-role path in `lib/supabase/server.ts`.
   - Effort: 15 min SQL + 30 min app verification.

3. **`raw_orders` (54,438 rows of HMAC payloads + PII) has RLS off, zero policies**
   - Evidence: `rowsecurity=false`, `pg_policies` count=0, `anon` holds SELECT/INSERT/UPDATE/DELETE/TRUNCATE.
   - Fix: `ALTER TABLE public.raw_orders ENABLE ROW LEVEL SECURITY; CREATE POLICY raw_orders_deny ON public.raw_orders AS RESTRICTIVE FOR ALL USING (false);` (n8n writers use service-role, safe).
   - Effort: 10 min.

4. **PII surface wide open**: `raw_customer_pii`, `dim_customer` (15,291 rows), `raw_customers`, `raw_ls_customers`, `customer_consent`, `customer_notes`, `fact_pii_access`, `loyalty_card_audit` (card_number column!)
   - Evidence: Advisor `sensitive_columns_exposed ERROR` + `policy_exists_rls_disabled ERROR` on all 8. Policies exist but inert.
   - Fix: explicit `ALTER TABLE … ENABLE ROW LEVEL SECURITY` per table; do **not** use the blanket DO-loop (over-enables across all public tables). Re-run advisor.
   - Effort: 30 min + advisor re-check.

5. **`takeaway_tokens` (3 rows of OAuth access + refresh tokens) has RLS off**
   - Evidence: Advisor flags `access_token, refresh_token` columns exposed. Sibling `ls_tokens` has RLS on; this was missed.
   - Fix: `ALTER TABLE public.takeaway_tokens ENABLE ROW LEVEL SECURITY; CREATE POLICY takeaway_tokens_service_all ON public.takeaway_tokens FOR ALL TO service_role USING (true) WITH CHECK (true);`
   - Effort: 5 min.

6. **62 tables in public schema have RLS disabled** (advisor: 61, current snapshot 62)
   - Evidence: includes `fact_orders`, `fact_order_items`, all `raw_ls_*` (7), all `raw_ga4_*` (11), `audit_log`, `order_state_history`, `dr_*` backup tables. `anon` + `authenticated` have full DML on all.
   - Fix: explicit ENABLE per table; add `<t>_service_all` FOR ALL TO service_role policies where missing; iterate until advisor `rls_disabled_in_public` count = 0.
   - Effort: 2–3h scripted migration + verification.

7. **`confirmAllAutoMatchedTakeaway` server action runs service-role mutation with NO auth check** (`app/(app)/menu/actions.ts:64-84`)
   - Evidence: calls `createServiceClient()` (RLS bypass), updates `takeaway_plu_map` filtered only by caller-supplied `locationKey`. Comment explicitly defers role check. Sibling actions in `/settings/actions.ts:15` and `/integrations/actions.ts:11` use `assertManagement()` — pattern exists and was skipped here.
   - Fix: replicate `assertManagement()` (getUser → role check → Origin check) at top of function.
   - Effort: 15 min.

## P1 — Fix before scale

- **Scheduled workflows not firing**: `monitor_token_expiry` (PYJ5HqtZErvCR95V) last ran 02:45 UTC; `monitor_stuck_orders` (YIjqWVqCnUg6Az7X), `ls_status_poller`, `sync_lightspeed_products` zero executions in 24h. n8n-main restarted at 06:58 UTC and ScheduleTriggers did not re-register. Fix: deactivate+reactivate each, or `docker restart n8n-main` + UI toggle; add freshness probe on `execution_entity.last_ran`.
- **n8n worker OOMs**: 14 V8 heap-exhaustion FATALs in 24h (worker-1=3, worker-2=5, worker-3=6); 263 crashed executions, top offenders `populate_fact_takeaway_orders=60`, `Shipday Delay Detection=60`. NODE_OPTIONS at `--max-old-space-size=2000`, container limit 2.44GiB. Fix: identify heavy nodes (Code/Set buffering large JSON), bump heap to 2400 + container to 3GiB, batch <1000 items/iter.
- **`updateTakeawayPluMapping` + `confirmTakeawayAutoMatch` lack role gate + ownership re-check** (`app/(app)/menu/actions.ts:7-51, 53`) — service-role RPC `takeaway_backfill_plu` drivable by any authenticated user across locations.
- **GDPR `exportDsar`/`deleteDsar` lack role gate** (`app/(app)/gdpr/actions.ts:20-120`) — any authenticated user can mass-redact PII across all three locations; audit_log insert happens after mutation.
- **11 RLS policies are `USING(true)`** including `audit_logs_auth_write ALL true` (any auth user can write/forge audit rows). Also: `bl_onboarding_*`, `competitor_*`, `mystery_shopping_*`, `product_match_lookup`. Fix: tighten audit_logs to service-role writes + elevated-role reads; scope others to role/location.
- **61 functions with mutable search_path + 14 SECURITY DEFINER views** — `v_orders_with_pii` reachable by anon SELECT, bypasses caller RLS. Fix: `ALTER FUNCTION … SET search_path = pg_catalog, public;` and `ALTER VIEW … SET (security_invoker = on);` (PG15+).
- **No external uptime monitoring on srova.ghysels-vagenende.be** — single-node VPS, no `/api/health`, no UptimeRobot/BetterStack probe. Fix: add `/api/health` + 1-min external probe.
- **supabase-db json.log at 13GB** — `daemon.json` has `max-size:10m,max-file:3` configured but container predates it. Fix: `docker compose down/up supabase-db` to apply, then truncate logs (reclaims ~12GB).

## P2 — Hardening backlog

- `lib/supabase/service.ts` lacks `import 'server-only'` (currently safe — no client importers — but fragile).
- `editAndReplay` (`app/(app)/alerts/actions.ts:86-129`) accepts `unknown` payload, no zod, no role check. No actual replay wired up so impact limited to audit_log pollution.
- `next.config.mjs` missing `experimental.serverActions.allowedOrigins` behind nginx (defense-in-depth).
- `middleware.ts` not migrated to Next 16 `proxy.ts` on Node runtime (deprecated, codemod available).
- `typescript.ignoreBuildErrors: true` masks Supabase type drift (hand-maintained `types/supabase.ts`).
- `opening-times/restaurant-status/snooze/alerts` server actions check `requireUser` only — no role, no per-location scope. Default role is `'management'` (`middleware.ts:64`).
- DLQ actions (`retryDlq`/`editAndReplay`/`discardDlq`) accept `id: number` without zod or ownership check; `discardDlq` cascades to UPDATE `canonical_orders.status='cancelled'`.
- 141 RLS predicates use bare `auth.uid()` — no InitPlan caching. Rewrite to `(select auth.uid())`.
- 127 unused indexes, 80 multiple-permissive-policy overlaps (`alerts` has 5 OR'd SELECT policies), 56 unindexed FKs.
- Conflicting unique indexes on `canonical_orders`: legacy `canonical_orders_source_external_ref_uk` (non-partial) shadows Phase C `canonical_orders_unique_active_idx`.
- Redundant `raw_orders_source_external_ref_idx` on 54k-row 182MB table.
- Missing FK indexes: `canonical_orders.raw_payload_id`, `dlq_alerts.canonical_order_id`, `dlq_alerts.raw_payload_id`, `takeaway_tokens.location_key`.
- n8n-main restarted 06:58 UTC (RestartCount=0, OOMKilled=false — likely compose restart) with multi-hour gap on three monitor workflows.
- LS tokens expire in <60min and DB-side safety net absent — relies entirely on flaky n8n monitors. Add Supabase cron alarm.
- 31 NULL-source `raw_orders` rows from 2026-06-05 backfill artifact; add NOT NULL constraint on `source`/`external_ref`.
- No Sentry / OpenTelemetry on Next app.
- **n8n MCP authentication failing** — `mcp__n8n-mcp__n8n_get_workflow` returns `AUTHENTICATION_ERROR` on PYJ5HqtZErvCR95V and YIjqWVqCnUg6Az7X. Rotate `N8N_API_KEY`.
- Only 4 `console.*` calls across `app/` + `lib/`; no pino/winston. Add structured logger with `request_id`/`location_key`/`order_id`.
- No INSERT-time alert on `dlq_alerts` — pure pull model via `/alerts` page. Add Supabase Database Webhook → Resend/Slack.
- Swap usage 1.8GiB/4GiB on host with 11GiB RAM available — past memory pressure indicator.
- Container memory limits sum ~22GB declared + 5 unlimited (srova, foodtruckaanhuis, jikango, tipkoins-api, tipkoins-redis) vs 15GiB physical RAM.

## P3 — Nice to have

- No `updateTag()` usage (only `revalidatePath`) — irrelevant until `cacheComponents` adopted.
- `.next/static/` confirmed clean of real secrets (only anon JWT, by design). Lock in CI grep.
- `customer_360_ai_nba` + `sync_watermarks` RLS-enabled with zero policies (service-role bypasses, n8n writes succeeding).
- `pg_jsonschema` + `pg_trgm` installed in `public` schema (advisor `extension_in_public WARN x2`).
- `v_pipeline_latency` is a regular VIEW, not materialized — contradicts CLAUDE.md. At 246 qualifying rows, conversion premature; fix docs.
- Redundant `idx_canonical_active_ref` (40kB) covered by unique partial.
- `ls_tokens` missing index on `expires_at` (3 rows, irrelevant unless multi-tenant).
- No standalone `created_at` index on `canonical_orders` — composite leading column is `location_key`. Fine at 958 rows.
- `raw_orders` autovacuum 10 days stale, 7.9% dead tuples — under threshold, will catch up.
- Hot-path EXPLAIN ANALYZE confirms index scans (orders 0.13ms, DLQ 0.13ms, history 2.0ms) — positive baseline.
- DLQ empty + pgmq queues at depth 0 = healthy drain when n8n alive. Note: 263 crashed executions did NOT funnel into dlq_alerts (DLQ insert is part of the crashing workflow).
- `canonical_orders_unique_active_idx` verified working — zero active duplicates.
- Stale Exited containers (`n8n-sqlite-legacy`, `frituuros-staging-*`) — `docker container prune`.
- `n8n-worker-2` + `supabase-auth` each RestartCount=1 (not loops).
- Backups daily 02:00 UTC, today's `auto_2026-06-19_0200.sql.gz` present; no PITR/WAL, no offsite copy.
- Firewall (UFW 22/80/443 only, port 3010 RFC1918-restricted) + TLS (frituur-os cert 46d, srova cert 69d) healthy.

## Recommended sequence for next maintenance window

1. **Backfill the 53 missing AALST orders FIRST** — every hour those sit, the AALST cutover invariant ("pipeline replaces Deliverect") is broken. Investigate `OdYCsotEru63kxN7` executions before re-driving so we don't re-trigger the bug. (P0 #1)
2. **Lock down the data plane** — enable RLS on `canonical_orders`, `raw_orders`, `takeaway_tokens`, then the 8 PII tables, then the remaining 50+ public tables. Do this in one migration with advisor re-check between batches. Verify (app) pages still render against service-role path. (P0 #2–6)
3. **Patch `confirmAllAutoMatchedTakeaway`** — 15-min fix, removes the unauth service-role mutation path. (P0 #7)
4. **Reactivate the scheduled monitors** — `docker restart n8n-main` + UI toggle the four schedule workflows; add freshness probe. Without this, Phase D1/D2 safety nets are dead and stuck orders won't auto-retry. (P1)
5. **Rotate n8n MCP key** so we can verify monitor state programmatically. (P2)
6. **Worker OOM mitigation** — bump heap + container mem, then chase the 60-crash `populate_fact_takeaway_orders` / `Shipday Delay Detection` workflows. (P1)
7. **Add `/api/health` + external uptime probe** before cutting Berlare/Dender. (P1)
8. **GDPR + remaining server-action role gates** — codify `assertManagement()` + per-location scope into `lib/auth/assert.ts`, apply to every action. (P1/P2)
9. **Recreate supabase-db container** to pick up log rotation; reclaim 12GB. (P1)
10. **Performance migration**: collapse multiple-permissive-policies, wrap `auth.uid()` in `(select auth.uid())`, add FK indexes, drop redundant indexes — one migration since they all touch the same RLS surface. (P2)

## Coverage caveats

- **n8n workflow definitions could not be read via MCP** — `AUTHENTICATION_ERROR` on `mcp__n8n-mcp__n8n_get_workflow`. The "monitor schedules not firing" finding is grounded in `execution_entity` SQL evidence, but workflow active-state, node-level definitions, and any recent edits to `shopify_normalize_to_canonical` (relevant to the 53 lost orders) are unverified through MCP. Recommend rotating `N8N_API_KEY` before the maintenance window and re-confirming.
- **RLS UPDATE policy coverage on `canonical_orders` not verified** for the GDPR `deleteDsar` mass-redact path — the user-scoped client should be RLS-blocked, but with RLS currently disabled this is academic until P0 #2 lands. Re-test GDPR flow after RLS migration.
- **Per-location authorization boundary** (which user can mutate which `location_key`) was not exercised end-to-end — current default role `'management'` gives implicit broad access, but no test confirms whether a Berlare manager can actually mutate Aalst rows post-RLS-fix. Add a regression test in `tests/e2e/` once roles are formalized.
- **n8n execution data for `OdYCsotEru63kxN7`** around 2026-06-17/18 (the window when the 53 AALST orders were lost) was not pulled — root cause of the normalize drop is hypothesized (UPSERT conflict on cancelled rows? auth interruption? rate limiting?) but not confirmed. Pull execution logs before backfilling.
- **VPS host-level metrics history** (RAM/swap trend, OOM events in `dmesg`) not collected — current snapshot shows 1.8GiB swap occupied with 11GiB RAM available, suggesting a past event that wasn't traced.
- **Materialized-view conversion of `v_pipeline_latency`** marked P3 based on current row count (246), but if volume scales 10x at Berlare+Dender cutover, re-evaluate.