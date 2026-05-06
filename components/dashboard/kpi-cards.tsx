import {
  AlertTriangle,
  CheckCircle2,
  Coins,
  ShoppingBag,
} from "lucide-react"
import type { DashboardKpis } from "@/lib/queries/dashboard"

interface Tile {
  label: string
  value: string
  icon: typeof ShoppingBag
  hint: string
  tone?: "good" | "warn" | "bad"
}

function buildTiles(kpis: DashboardKpis): Tile[] {
  const eur = (cents: number) =>
    `€${(cents / 100).toLocaleString("en-GB", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`
  return [
    {
      label: "Orders 24h",
      value: kpis.ordersToday.toLocaleString("en-GB"),
      icon: ShoppingBag,
      hint: "rolling 24h",
    },
    {
      label: "Revenue 24h",
      value: eur(kpis.revenueTodayCents),
      icon: Coins,
      hint: "gross, incl. VAT",
    },
    {
      label: "Success rate",
      value: `${kpis.successRate24h}%`,
      icon: CheckCircle2,
      hint: "POS accept rate",
      tone:
        kpis.successRate24h >= 99
          ? "good"
          : kpis.successRate24h >= 95
            ? "warn"
            : "bad",
    },
    {
      label: "Orders stuck",
      value: kpis.dlqDepth.toLocaleString("en-GB"),
      icon: AlertTriangle,
      hint: "needs operator review",
      tone: kpis.dlqDepth > 0 ? "warn" : "good",
    },
  ]
}

export function KpiCards({ kpis }: { kpis: DashboardKpis }) {
  const tiles = buildTiles(kpis)
  return (
    <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
      {tiles.map((it) => {
        const Icon = it.icon
        const valueClass =
          it.tone === "good"
            ? "text-emerald-700 dark:text-emerald-400"
            : it.tone === "warn"
              ? "text-amber-700 dark:text-amber-400"
              : it.tone === "bad"
                ? "text-rose-700 dark:text-rose-400"
                : ""
        return (
          <div
            key={it.label}
            className="card-elevated relative flex flex-col gap-3 rounded-2xl border border-border bg-card p-4"
          >
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                {it.label}
              </span>
              <Icon
                className="h-3.5 w-3.5 text-muted-foreground"
                strokeWidth={2}
              />
            </div>
            <div className="flex items-end justify-between gap-2">
              <div
                className={`text-[26px] font-semibold leading-none tracking-tight tabular-nums ${valueClass}`}
              >
                {it.value}
              </div>
            </div>
            <div className="flex items-center text-[11px]">
              <span className="text-muted-foreground">{it.hint}</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}
