import { Calendar, Download } from "lucide-react"
import { AlertsFeed } from "@/components/dashboard/alerts-feed"
import { IntegrationHealth } from "@/components/dashboard/integration-health"
import { KpiCards } from "@/components/dashboard/kpi-cards"
import { LiveOrders } from "@/components/dashboard/live-orders"
import { LocationsGrid } from "@/components/dashboard/locations-grid"
import { MenuSyncStatus } from "@/components/dashboard/menu-sync-status"
import { OrdersChart } from "@/components/dashboard/orders-chart"
import { PageHeader } from "@/components/dashboard/page-header"
import { PipelineFlow } from "@/components/dashboard/pipeline-flow"
import { Button } from "@/components/ui/button"
import { getDashboardStats } from "@/lib/queries/dashboard"
import { getRecentAlerts } from "@/lib/queries/alerts"
import { getIntegrationHealth, getMenuSyncStatus } from "@/lib/queries/health"
import type { LocationKey } from "@/lib/constants"

export default async function OverviewPage({
  searchParams,
}: {
  searchParams: Promise<{ loc?: string }>
}) {
  const { loc: rawLoc } = await searchParams
  const loc = (rawLoc as LocationKey | undefined) ?? undefined

  const [stats, alerts, integrations, menuSync] = await Promise.all([
    getDashboardStats(loc),
    getRecentAlerts(8),
    getIntegrationHealth(),
    getMenuSyncStatus(),
  ])

  const today = new Date().toLocaleDateString("nl-BE", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Europe/Brussels",
  })

  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        eyebrow={today}
        title="Operations overview"
        description="Live state of the FRITUUR OS middleware. Orders flowing in from Shopify, pushed to Lightspeed L-Series and Shipday across three locations."
        actions={
          <>
            <Button
              variant="outline"
              size="sm"
              className="h-9 gap-2 rounded-full text-[12.5px] font-medium bg-transparent"
            >
              <Calendar className="h-3.5 w-3.5" />
              Today
            </Button>
            <Button
              size="sm"
              className="h-9 gap-2 rounded-full text-[12.5px] font-medium"
            >
              <Download className="h-3.5 w-3.5" />
              Export
            </Button>
          </>
        }
      />

      <KpiCards kpis={stats.kpis} />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <OrdersChart data={stats.hourlyOrders} />
        </div>
        <div className="lg:col-span-1">
          <PipelineFlow counts={stats.pipelineCounts} />
        </div>
      </div>

      <LocationsGrid data={stats.locationHealth} />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <LiveOrders rows={stats.liveOrders} />
        </div>
        <div className="flex flex-col gap-4">
          <IntegrationHealth rows={integrations} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <MenuSyncStatus
          lastSyncAt={menuSync.lastSyncAt}
          rows={menuSync.rows}
        />
        <AlertsFeed alerts={alerts} limit={4} />
      </div>
    </div>
  )
}
