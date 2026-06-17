// Static dummy data for Srova dashboard skeleton

export type LocationId = "tipzakske" | "frietbooster" | "frietchalet"

export const LOCATIONS: { id: LocationId; name: string; city: string; postcode: string }[] = [
  { id: "tipzakske", name: "Tipzakske", city: "Gent", postcode: "9000" },
  { id: "frietbooster", name: "Frietbooster", city: "Sint-Niklaas", postcode: "9100" },
  { id: "frietchalet", name: "Frietchalet", city: "Lokeren", postcode: "9160" },
]

export const KPIS = {
  ordersToday: 1284,
  ordersTodayDelta: 8.4,
  revenueToday: 18742.5,
  revenueDelta: 12.1,
  successRate: 99.62,
  successDelta: 0.18,
  avgPushLatency: 412, // ms
  latencyDelta: -34,
  scrapeLag: 22, // sec
  scrapeDelta: -3,
  dlqDepth: 2,
  dlqDelta: 0,
}

export const HOURLY_ORDERS = [
  { hour: "10", shopify: 12, takeaway: 4 },
  { hour: "11", shopify: 28, takeaway: 11 },
  { hour: "12", shopify: 64, takeaway: 38 },
  { hour: "13", shopify: 71, takeaway: 42 },
  { hour: "14", shopify: 39, takeaway: 22 },
  { hour: "15", shopify: 21, takeaway: 14 },
  { hour: "16", shopify: 18, takeaway: 12 },
  { hour: "17", shopify: 44, takeaway: 31 },
  { hour: "18", shopify: 92, takeaway: 68 },
  { hour: "19", shopify: 118, takeaway: 84 },
  { hour: "20", shopify: 96, takeaway: 71 },
  { hour: "21", shopify: 54, takeaway: 38 },
  { hour: "22", shopify: 22, takeaway: 14 },
]

export type OrderState =
  | "received"
  | "normalized"
  | "pushing_lightspeed"
  | "ls_sent"
  | "ls_accepted"
  | "complete"
  | "ls_failed"
  | "ls_rejected"
  | "cancelled"

export type OrderChannel = "shopify" | "takeaway"

export type Order = {
  id: string
  externalRef: string
  channel: OrderChannel
  location: LocationId
  customer: string
  itemsCount: number
  total: number
  state: OrderState
  type: "delivery" | "togo"
  receivedAt: string // ISO
  scheduledFor?: string
  retries: number
  notes?: string
}

export const LIVE_ORDERS: Order[] = [
  {
    id: "ord_01HXM3K2VQ",
    externalRef: "shop-32841",
    channel: "shopify",
    location: "tipzakske",
    customer: "Lieselot D.",
    itemsCount: 4,
    total: 28.4,
    state: "complete",
    type: "delivery",
    receivedAt: "2026-05-05T19:42:11Z",
    retries: 0,
  },
  {
    id: "ord_01HXM3J9W1",
    externalRef: "TKW-2B7RVE",
    channel: "takeaway",
    location: "frietbooster",
    customer: "M. Janssens",
    itemsCount: 6,
    total: 41.2,
    state: "ls_accepted",
    type: "delivery",
    receivedAt: "2026-05-05T19:41:48Z",
    retries: 0,
  },
  {
    id: "ord_01HXM3H4F2",
    externalRef: "shop-32840",
    channel: "shopify",
    location: "tipzakske",
    customer: "K. Vermeulen",
    itemsCount: 2,
    total: 14.5,
    state: "ls_sent",
    type: "togo",
    receivedAt: "2026-05-05T19:41:12Z",
    retries: 0,
  },
  {
    id: "ord_01HXM3G7K8",
    externalRef: "TKW-9PLM3X",
    channel: "takeaway",
    location: "frietchalet",
    customer: "S. De Smet",
    itemsCount: 3,
    total: 22.9,
    state: "pushing_lightspeed",
    type: "delivery",
    receivedAt: "2026-05-05T19:40:55Z",
    retries: 1,
  },
  {
    id: "ord_01HXM3F2P5",
    externalRef: "shop-32839",
    channel: "shopify",
    location: "frietbooster",
    customer: "T. Maes",
    itemsCount: 5,
    total: 36.1,
    state: "ls_accepted",
    type: "delivery",
    receivedAt: "2026-05-05T19:39:41Z",
    retries: 0,
  },
  {
    id: "ord_01HXM3D8N0",
    externalRef: "shop-32838",
    channel: "shopify",
    location: "tipzakske",
    customer: "B. Wouters",
    itemsCount: 1,
    total: 8.5,
    state: "ls_failed",
    type: "togo",
    receivedAt: "2026-05-05T19:37:22Z",
    retries: 4,
    notes: "PLU 4471 not found at location",
  },
  {
    id: "ord_01HXM3C0Q3",
    externalRef: "TKW-7HJK2L",
    channel: "takeaway",
    location: "frietchalet",
    customer: "A. Peeters",
    itemsCount: 4,
    total: 31.0,
    state: "complete",
    type: "delivery",
    receivedAt: "2026-05-05T19:36:08Z",
    retries: 0,
  },
  {
    id: "ord_01HXM3B5R7",
    externalRef: "shop-32837",
    channel: "shopify",
    location: "frietbooster",
    customer: "E. Claes",
    itemsCount: 2,
    total: 17.2,
    state: "complete",
    type: "delivery",
    receivedAt: "2026-05-05T19:34:59Z",
    retries: 0,
  },
  {
    id: "ord_01HXM3A2T9",
    externalRef: "shop-32836",
    channel: "shopify",
    location: "tipzakske",
    customer: "N. Goossens",
    itemsCount: 7,
    total: 52.4,
    state: "ls_rejected",
    type: "delivery",
    receivedAt: "2026-05-05T19:33:14Z",
    retries: 0,
    notes: "Outside opening hours window",
  },
  {
    id: "ord_01HXM3915B",
    externalRef: "TKW-4MNB8Z",
    channel: "takeaway",
    location: "frietbooster",
    customer: "P. Lemmens",
    itemsCount: 3,
    total: 24.6,
    state: "complete",
    type: "togo",
    receivedAt: "2026-05-05T19:31:42Z",
    retries: 0,
  },
  {
    id: "ord_01HXM38XV4",
    externalRef: "shop-32835",
    channel: "shopify",
    location: "frietchalet",
    customer: "L. Van Damme",
    itemsCount: 5,
    total: 38.9,
    state: "complete",
    type: "delivery",
    receivedAt: "2026-05-05T19:29:11Z",
    retries: 0,
  },
  {
    id: "ord_01HXM37PY1",
    externalRef: "TKW-1XCV7B",
    channel: "takeaway",
    location: "tipzakske",
    customer: "F. Dhondt",
    itemsCount: 2,
    total: 15.4,
    state: "complete",
    type: "delivery",
    receivedAt: "2026-05-05T19:27:33Z",
    retries: 0,
  },
]

export const ORDER_STATE_COUNTS: { state: OrderState; label: string; count: number }[] = [
  { state: "received", label: "Received", count: 3 },
  { state: "normalized", label: "Normalized", count: 2 },
  { state: "pushing_lightspeed", label: "Pushing → L-Series", count: 4 },
  { state: "ls_sent", label: "LS Sent (awaiting ack)", count: 6 },
  { state: "ls_accepted", label: "LS Accepted", count: 11 },
  { state: "complete", label: "Complete", count: 1248 },
  { state: "ls_failed", label: "Failed (DLQ)", count: 2 },
  { state: "ls_rejected", label: "Rejected", count: 1 },
]

export type IntegrationStatus = "operational" | "degraded" | "down" | "investigating"

export const INTEGRATIONS: {
  id: string
  name: string
  category: "ingest" | "pos" | "delivery" | "infra"
  status: IntegrationStatus
  uptime: number
  latencyMs: number
  lastEvent: string
  description: string
  metrics: { label: string; value: string }[]
}[] = [
  {
    id: "shopify",
    name: "Shopify",
    category: "ingest",
    status: "operational",
    uptime: 99.98,
    latencyMs: 142,
    lastEvent: "12s ago",
    description: "Webhook ingestion · HMAC validated",
    metrics: [
      { label: "Webhooks (24h)", value: "1,842" },
      { label: "HMAC fails", value: "0" },
      { label: "p95 latency", value: "189 ms" },
    ],
  },
  {
    id: "takeaway",
    name: "Takeaway.com",
    category: "ingest",
    status: "degraded",
    uptime: 99.41,
    latencyMs: 22000,
    lastEvent: "24s ago",
    description: "Authenticated session scraper · 30s poll",
    metrics: [
      { label: "Polls (24h)", value: "2,880" },
      { label: "Session age", value: "4h 12m" },
      { label: "Avg lag", value: "22 s" },
    ],
  },
  {
    id: "lightspeed",
    name: "Lightspeed L-Series",
    category: "pos",
    status: "operational",
    uptime: 99.94,
    latencyMs: 412,
    lastEvent: "3s ago",
    description: "Order push + menu read · OAuth2",
    metrics: [
      { label: "Orders pushed", value: "1,261" },
      { label: "Webhook acks", value: "1,259" },
      { label: "p95 latency", value: "684 ms" },
    ],
  },
  {
    id: "shipday",
    name: "Shipday",
    category: "delivery",
    status: "operational",
    uptime: 99.99,
    latencyMs: 198,
    lastEvent: "8s ago",
    description: "Driver dispatch · REST API",
    metrics: [
      { label: "Orders created", value: "874" },
      { label: "Drivers active", value: "12" },
      { label: "p95 latency", value: "241 ms" },
    ],
  },
  {
    id: "supabase",
    name: "Supabase",
    category: "infra",
    status: "operational",
    uptime: 99.99,
    latencyMs: 18,
    lastEvent: "now",
    description: "Edge Functions · Postgres · Vault",
    metrics: [
      { label: "Edge invocations", value: "9,412" },
      { label: "DB connections", value: "14 / 60" },
      { label: "Storage used", value: "342 MB" },
    ],
  },
  {
    id: "google-maps",
    name: "Google Maps",
    category: "infra",
    status: "operational",
    uptime: 100,
    latencyMs: 84,
    lastEvent: "41s ago",
    description: "Geocoding for Takeaway addresses",
    metrics: [
      { label: "Requests (24h)", value: "412" },
      { label: "Cache hit rate", value: "78%" },
      { label: "Quota used", value: "11%" },
    ],
  },
]

export type AlertSeverity = "critical" | "warning" | "info"

export const ALERTS: {
  id: string
  severity: AlertSeverity
  title: string
  body: string
  source: string
  time: string
  acknowledged: boolean
}[] = [
  {
    id: "alt_01",
    severity: "critical",
    title: "Order moved to DLQ after 4 retries",
    body: "shop-32838 — Lightspeed returned 400: PLU 4471 not found at Tipzakske.",
    source: "Order State Machine",
    time: "4 min ago",
    acknowledged: false,
  },
  {
    id: "alt_02",
    severity: "warning",
    title: "Takeaway scrape lag elevated",
    body: "Average lag 22s (baseline 8s). Possible portal slowdown — monitoring.",
    source: "Subsystem 3 · Scraper",
    time: "11 min ago",
    acknowledged: false,
  },
  {
    id: "alt_03",
    severity: "warning",
    title: "PLU mapping miss",
    body: "Shopify product 'Mexicano XL' has no mapped Lightspeed PLU at Frietchalet.",
    source: "Mapping Engine",
    time: "38 min ago",
    acknowledged: true,
  },
  {
    id: "alt_04",
    severity: "info",
    title: "Menu sync completed",
    body: "12 price changes pushed to Shopify. 0 conflicts.",
    source: "Menu Sync Engine",
    time: "1 h ago",
    acknowledged: true,
  },
  {
    id: "alt_05",
    severity: "info",
    title: "Takeaway session refreshed",
    body: "Auto-relogin successful for Frietbooster account.",
    source: "Subsystem 3 · Scraper",
    time: "4 h ago",
    acknowledged: true,
  },
]

export const MENU_ITEMS = [
  {
    plu: "1001",
    name: "Frietje klein",
    priceLs: 3.5,
    priceShopify: 3.5,
    priceTakeaway: 3.8,
    available: true,
    drift: false,
  },
  {
    plu: "1002",
    name: "Frietje middel",
    priceLs: 4.5,
    priceShopify: 4.5,
    priceTakeaway: 4.8,
    available: true,
    drift: false,
  },
  {
    plu: "1003",
    name: "Frietje groot",
    priceLs: 5.5,
    priceShopify: 5.5,
    priceTakeaway: 5.9,
    available: true,
    drift: false,
  },
  {
    plu: "2014",
    name: "Mexicano",
    priceLs: 3.2,
    priceShopify: 3.2,
    priceTakeaway: 3.5,
    available: true,
    drift: false,
  },
  {
    plu: "2015",
    name: "Mexicano XL",
    priceLs: 4.2,
    priceShopify: 4.5,
    priceTakeaway: 4.5,
    available: true,
    drift: true,
  },
  {
    plu: "2018",
    name: "Frikandel speciaal",
    priceLs: 3.8,
    priceShopify: 3.8,
    priceTakeaway: 4.1,
    available: true,
    drift: false,
  },
  {
    plu: "3001",
    name: "Bicky burger",
    priceLs: 4.5,
    priceShopify: 4.5,
    priceTakeaway: 4.9,
    available: false,
    drift: false,
  },
  {
    plu: "4471",
    name: "Currywurst",
    priceLs: 5.0,
    priceShopify: 5.0,
    priceTakeaway: 5.4,
    available: false,
    drift: true,
  },
  {
    plu: "5022",
    name: "Saus Andalouse",
    priceLs: 0.8,
    priceShopify: 0.8,
    priceTakeaway: 1.0,
    available: true,
    drift: false,
  },
  {
    plu: "5023",
    name: "Saus Mayonaise",
    priceLs: 0.6,
    priceShopify: 0.6,
    priceTakeaway: 0.8,
    available: true,
    drift: false,
  },
  {
    plu: "6001",
    name: "Cola 33cl",
    priceLs: 2.5,
    priceShopify: 2.5,
    priceTakeaway: 2.8,
    available: true,
    drift: false,
  },
  {
    plu: "6002",
    name: "Fanta 33cl",
    priceLs: 2.5,
    priceShopify: 2.5,
    priceTakeaway: 2.8,
    available: true,
    drift: false,
  },
]
