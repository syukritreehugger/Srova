import { Filter, RefreshCw } from "lucide-react"
import { LiveOrders } from "@/components/dashboard/live-orders"
import { PageHeader } from "@/components/dashboard/page-header"
import { PipelineFlow } from "@/components/dashboard/pipeline-flow"
import { Button } from "@/components/ui/button"
import { getDashboardStats } from "@/lib/queries/dashboard"
import type { LocationKey } from "@/lib/constants"

export default async function OrdersPage({
  searchParams,
}: {
  searchParams: Promise<{ loc?: string; state?: string }>
}) {
  const { loc: rawLoc } = await searchParams
  const loc = (rawLoc as LocationKey | undefined) ?? undefined
  const stats = await getDashboardStats(loc)

  const totalShopify = stats.liveOrders.filter((o) => o.source === "shopify").length
  const totalTakeaway = stats.liveOrders.filter((o) => o.source === "takeaway").length
  const totalFailed = (stats.pipelineCounts.ls_failed ?? 0)
  const totalRejected = (stats.pipelineCounts.ls_rejected ?? 0)
  const inFlight =
    (stats.pipelineCounts.received ?? 0) +
    (stats.pipelineCounts.normalized ?? 0) +
    (stats.pipelineCounts.pushing_ls ?? 0) +
    (stats.pipelineCounts.ls_sent ?? 0)

  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        eyebrow="Orders"
        title="Live order stream"
        description="Every Shopify webhook and Takeaway scrape, normalized and tracked through the state machine. Click any reference to inspect its raw payload and full audit trail."
        actions={
          <>
            <Button
              variant="outline"
              size="sm"
              className="h-9 gap-2 rounded-full text-[12.5px] bg-transparent"
            >
              <Filter className="h-3.5 w-3.5" />
              Filter
            </Button>
            <Button size="sm" className="h-9 gap-2 rounded-full text-[12.5px]">
              <RefreshCw className="h-3.5 w-3.5" />
              Refresh
            </Button>
          </>
        }
      />

      <PipelineFlow counts={stats.pipelineCounts} />

      <div className="flex flex-wrap items-center gap-2">
        {[
          { label: "All", count: stats.kpis.ordersToday, active: true },
          { label: "Shopify", count: totalShopify },
          { label: "Takeaway", count: totalTakeaway },
          { label: "Failed", count: totalFailed, tone: "rose" as const },
          { label: "Rejected", count: totalRejected, tone: "rose" as const },
          { label: "In flight", count: inFlight, tone: "amber" as const },
        ].map((t) => (
          <button
            key={t.label}
            className={
              t.active
                ? "inline-flex h-8 items-center gap-2 rounded-full bg-foreground px-3 text-[12px] font-medium text-background"
                : t.tone === "rose"
                  ? "inline-flex h-8 items-center gap-2 rounded-full border border-rose-500/20 bg-rose-500/5 px-3 text-[12px] font-medium text-rose-700"
                  : t.tone === "amber"
                    ? "inline-flex h-8 items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/5 px-3 text-[12px] font-medium text-amber-700"
                    : "inline-flex h-8 items-center gap-2 rounded-full border border-border bg-card px-3 text-[12px] font-medium text-muted-foreground hover:text-foreground"
            }
          >
            {t.label}
            <span className="rounded-full bg-current/10 px-1.5 py-0.5 text-[10px] tabular-nums opacity-70">
              {t.count.toLocaleString("nl-BE")}
            </span>
          </button>
        ))}
      </div>

      <LiveOrders rows={stats.liveOrders} title="All orders" />
    </div>
  )
}
