import { Suspense } from "react"
import { AlertsFeed } from "@/components/dashboard/alerts-feed"
import { BacklogBanner } from "@/components/dashboard/backlog-banner"
import { IntegrationHealth } from "@/components/dashboard/integration-health"
import { KpiCards } from "@/components/dashboard/kpi-cards"
import { LiveOrders } from "@/components/dashboard/live-orders"
import { LocationsGrid } from "@/components/dashboard/locations-grid"
import { MenuSyncStatus } from "@/components/dashboard/menu-sync-status"
import { OrdersChart } from "@/components/dashboard/orders-chart"
import { PageHeader } from "@/components/dashboard/page-header"
import { PipelineFlow } from "@/components/dashboard/pipeline-flow"
import {
  BannerSkeleton,
  ChartSkeleton,
  KpiCardsSkeleton,
  GridSkeleton,
  PipelineFlowSkeleton,
  TableSkeleton,
} from "@/components/dashboard/skeleton"
import { getDashboardStats, type DashboardStats } from "@/lib/queries/dashboard"
import { getRecentAlerts } from "@/lib/queries/alerts"
import { getIntegrationHealth, getMenuSyncStatus } from "@/lib/queries/health"
import { getPipelineBacklog } from "@/lib/queries/pipeline-health"
import { getWorkflow, POLLER_NORMALIZE_ID } from "@/lib/n8n"
import type { LocationKey } from "@/lib/constants"

export default async function OverviewPage({
  searchParams,
}: {
  searchParams: Promise<{ loc?: string }>
}) {
  const { loc: rawLoc } = await searchParams
  const loc = (rawLoc as LocationKey | undefined) ?? undefined

  const today = new Date().toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Europe/Brussels",
  })

  // Single promise, shared across Suspense boundaries — no duplicate DB calls
  const statsPromise = getDashboardStats(loc)

  return (
    <div className="flex flex-col">
      <PageHeader eyebrow={today} title="Operations overview" />

      <div className="flex flex-col gap-5">
        <Suspense fallback={<BannerSkeleton />}>
          <BacklogSection />
        </Suspense>

        <Suspense fallback={
          <div className="flex flex-col gap-5">
            <KpiCardsSkeleton />
            <PipelineFlowSkeleton />
            <GridSkeleton />
          </div>
        }>
          <Tier1Section statsPromise={statsPromise} />
        </Suspense>
      </div>

      <div className="h-10" />

      <div className="flex flex-col gap-5">
        <Suspense fallback={
          <div className="flex flex-col gap-5">
            <ChartSkeleton />
            <TableSkeleton rows={8} />
          </div>
        }>
          <Tier2Section statsPromise={statsPromise} />
        </Suspense>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <Suspense fallback={<TableSkeleton rows={4} />}>
            <IntegrationSection />
          </Suspense>
          <Suspense fallback={<TableSkeleton rows={4} />}>
            <AlertsSection />
          </Suspense>
        </div>

        <Suspense fallback={<TableSkeleton rows={3} />}>
          <MenuSection />
        </Suspense>
      </div>
    </div>
  )
}

async function BacklogSection() {
  const [backlog, pollerResult] = await Promise.all([
    getPipelineBacklog(),
    getWorkflow(POLLER_NORMALIZE_ID),
  ])
  const pipelinePaused = pollerResult.ok ? !pollerResult.data.active : false
  return <BacklogBanner backlog={backlog} pipelinePaused={pipelinePaused} />
}

async function Tier1Section({ statsPromise }: { statsPromise: Promise<DashboardStats> }) {
  const stats = await statsPromise
  return (
    <div className="flex flex-col gap-5">
      <KpiCards kpis={stats.kpis} />
      <PipelineFlow counts={stats.pipelineCounts} />
      <LocationsGrid data={stats.locationHealth} />
    </div>
  )
}

async function Tier2Section({ statsPromise }: { statsPromise: Promise<DashboardStats> }) {
  const stats = await statsPromise
  return (
    <div className="flex flex-col gap-5">
      <OrdersChart data={stats.hourlyOrders} />
      <LiveOrders rows={stats.liveOrders} />
    </div>
  )
}

async function IntegrationSection() {
  const integrations = await getIntegrationHealth()
  return <IntegrationHealth rows={integrations} />
}

async function AlertsSection() {
  const alerts = await getRecentAlerts(4)
  return <AlertsFeed alerts={alerts} />
}

async function MenuSection() {
  const menuSync = await getMenuSyncStatus()
  return <MenuSyncStatus lastSyncAt={menuSync.lastSyncAt} rows={menuSync.rows} />
}
