# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

FRITUUR OS — an operations dashboard replacing Deliverect for Ghysels-Vagenende Frituur Group (three Belgian frituur locations). It's a Next.js 16 app that monitors the order pipeline: Shopify/Takeaway.com orders flow through n8n workflows into Lightspeed L-Series POS, with Shipday for delivery dispatch. Supabase is the database (Postgres + RLS + Edge Functions).

## Commands

```bash
pnpm dev          # start dev server (localhost:3000)
pnpm build        # production build
pnpm lint         # ESLint
pnpm test         # vitest (if tests exist — vitest is a devDependency)
```

## Key Environment Variables

Copy `.env.example` to `.env.local`. Critical vars:
- `NEXT_PUBLIC_SUPABASE_URL` / `NEXT_PUBLIC_SUPABASE_ANON_KEY` — Supabase connection
- `SUPABASE_SERVICE_ROLE_KEY` — bypasses RLS; server-only
- `NEXT_PUBLIC_DEV_SKIP_AUTH=1` — skips auth middleware + uses service-role client in dev
- `NEXT_PUBLIC_USE_MOCK_DATA=1` — returns hardcoded mock data from query functions
- `N8N_API_URL` / `N8N_API_KEY` — n8n instance for pipeline control

## Architecture

**Route groups:**
- `(app)/*` — authenticated dashboard pages (orders, alerts, pipeline, menu, settings, etc.). Layout fetches integration health and DLQ alert count for the sidebar/topbar.
- `(auth)/*` — login + MFA flows. MFA enforcement is currently disabled.
- `api/auth/signout` — sign-out API route.

**Data flow:**
- `lib/supabase/server.ts` — creates the per-request Supabase client. In dev with `DEV_SKIP_AUTH=1`, it uses service-role to bypass the `canonical_orders_default_deny` RESTRICTIVE RLS policy.
- `lib/supabase/service.ts` — service-role client for server-only operations.
- `lib/queries/` — server-side data fetching (dashboard KPIs, orders, alerts, health, pipeline). Each function queries Supabase directly and falls back to mock data when `NEXT_PUBLIC_USE_MOCK_DATA=1`.
- `lib/n8n.ts` — REST client to control n8n workflows (activate/deactivate/status). Hardcoded workflow IDs for Shopify webhook handlers, LS pusher, and the poller.
- `lib/constants.ts` — canonical location keys (`LOC_AALST`, `LOC_BERLARE`, `LOC_DENDER`), order state enum, and UI tone mappings. These must match the Postgres ENUMs exactly.
- `lib/data.ts` — static mock/dummy data for the dashboard skeleton (not used in production queries).

**Database schema (hand-maintained types in `types/supabase.ts`):**
- `canonical_orders` — central order table with status state machine
- `raw_orders` — raw webhook payloads with HMAC validation
- `dlq_alerts` — dead-letter queue alerts for failed pipeline stages
- `ls_tokens` — Lightspeed OAuth tokens per location
- `menu_sync_log` — menu sync history
- `v_pipeline_latency` — materialized view for p50/p95/p99 latency metrics

**Order pipeline states:** `received` → `normalized` → `pushing_ls` → `ls_sent` → `ls_accepted` → `shipday_sent` → `complete` (with `ls_failed`, `ls_rejected`, `cancelled` as terminal error states).

**UI layer:**
- shadcn/ui (new-york style) with Radix primitives in `components/ui/`
- Dashboard components in `components/dashboard/`
- Tailwind CSS v4, Geist font family, Lucide icons
- Authorization: CASL (`@casl/ability` + `@casl/react`) for role-based access; user role comes from `app_metadata.role`

## Conventions

- Server Components by default; all data fetching in `lib/queries/` via `async` functions called from page-level components.
- Server Actions in `actions.ts` files colocated with their page.
- The `payment` column is JSONB — always use the `readTotalCents()` helper to safely extract `payment.total_cents`.
- Supabase types are hand-maintained (not auto-generated) — update `types/supabase.ts` when changing the schema.
- n8n workflow IDs are hardcoded constants in `lib/n8n.ts` and `lib/queries/health.ts`.

## n8n Pipeline Modifications (Phase A/B)

**push_lightspeed_order** (`2ENsv7R4I8H5L3cf`) — 29 nodes as of 2026-05-12.

Phase A (idempotency, live since 2026-05-07): After `Load LS Token`, the workflow checks Lightspeed for an existing order with the same `external_ref` via `Check LS Existing → Filter LS Idempotency → IF Idempotency Skip`. If found, it adopts the existing LS order instead of re-pushing.

Phase B (PLU pre-validation, live since 2026-05-12): Inserted between `Load dim_location` and `Load LS Token`:
- `Load LS Catalog SKUs` — fetches all visible SKUs from `raw_ls_products` for the location
- `Validate Order PLUs` — checks every item/modifier PLU against the catalog
- `IF PLU Valid` → TRUE: continue to `Load LS Token` (normal flow) | FALSE: `DLQ: PLU Mismatch`
- `DLQ: PLU Mismatch` — transitions order `normalized → pushing_ls → ls_failed`, inserts `dlq_alerts` with `code: 11401`, deletes queue message (no auto-retry — PLU mismatch requires manual fix at `/menu`)

**Fixing notes for DLQ node SQL:** uses `pgmq_delete_order()` wrapper (not `pgmq.delete()` directly — permission denied). `dlq_alerts.msg_id` is NOT NULL — must be included. `canonical_orders` schema_version must be `"1.1"`, payment needs `status` + `currency: "EUR"`, vat_lines needs ≥1 entry.

## Design Context

### Users
Three overlapping user groups (owner-operators, hired location managers, tech maintainer). Used during high-pressure frituur service where attention is split — must be scannable in seconds.

### Brand Personality
**Clean, Warm, Professional.** Apple-like precision with warmth from amber/honey tones tied to the frituur identity.

### Emotional Goal
**Trust & reliability** — "The system handles it." Reassure operators the pipeline works. Errors visible but not alarming unless action is needed.

### Aesthetic Direction
- References: Vercel, Linear. Anti-references: legacy POS software.
- oklch warm palette. Primary = deep charcoal. Accent = "fry-amber." Semantic: emerald=healthy, amber=warn, rose=critical.
- Geist Sans/Mono. Small labels (10-13px), uppercase tracking, tabular nums. Font features `ss01`, `cv11`.
- Subtle elevated cards, glass topbar, 0.75rem base radius. Restrained motion.
- Custom utilities: `.card-elevated`, `.glass`, `.pulse-dot`, `.grid-pattern`.

### Design Principles
1. **Glanceable over explorable** — Status understood in 2 seconds via color/size hierarchy.
2. **Calm until it matters** — Quiet default; alerts escalate visually only when action is needed.
3. **Warm precision** — Apple craft + amber warmth. Never clinical or cold.
4. **Data-dense, not cluttered** — Meaningful numbers without visual noise.
5. **Consistent semantic color** — Emerald/amber/rose always mean healthy/warning/critical, never decorative.
