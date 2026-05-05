import { AlertOctagon, AlertTriangle, ArrowUpRight, Info } from "lucide-react"
import Link from "next/link"
import type { AlertRow, AlertSeverity } from "@/lib/queries/alerts"
import { cn } from "@/lib/utils"

const ICON: Record<AlertSeverity, typeof AlertTriangle> = {
  critical: AlertOctagon,
  warning: AlertTriangle,
  info: Info,
}

const TONE: Record<AlertSeverity, string> = {
  critical: "text-rose-600 bg-rose-500/10",
  warning: "text-amber-600 bg-amber-500/10",
  info: "text-blue-600 bg-blue-500/10",
}

function timeAgo(iso: string): string {
  const d = new Date(iso)
  const m = Math.max(1, Math.round((Date.now() - d.getTime()) / 60000))
  if (m < 60) return `${m}m`
  const h = Math.round(m / 60)
  if (h < 24) return `${h}h`
  return `${Math.round(h / 24)}d`
}

export function AlertsFeed({
  alerts,
  limit,
}: {
  alerts: AlertRow[]
  limit?: number
}) {
  const rows = limit ? alerts.slice(0, limit) : alerts
  const critical = alerts.filter((a) => a.severity === "critical").length
  const warning = alerts.filter((a) => a.severity === "warning").length

  return (
    <div className="card-elevated rounded-2xl border border-border bg-card">
      <div className="flex items-center justify-between border-b border-border px-5 py-4">
        <div>
          <div className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
            Alerts & DLQ
          </div>
          <div className="mt-0.5 text-[14px] font-medium">
            <span
              className={
                critical > 0 ? "text-rose-600" : "text-muted-foreground"
              }
            >
              {critical} critical
            </span>
            <span className="text-muted-foreground"> · </span>
            <span
              className={
                warning > 0 ? "text-amber-600" : "text-muted-foreground"
              }
            >
              {warning} warning
            </span>
          </div>
        </div>
        <Link
          href="/alerts"
          className="flex items-center gap-1 text-[12px] font-medium text-foreground transition-opacity hover:opacity-70"
        >
          View all <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      {rows.length === 0 ? (
        <div className="px-5 py-10 text-center text-[12px] text-muted-foreground">
          No active alerts.
        </div>
      ) : (
        <ul className="divide-y divide-border">
          {rows.map((a) => {
            const Icon = ICON[a.severity]
            return (
              <li
                key={a.id}
                className="flex gap-3 px-5 py-3.5 transition-colors hover:bg-muted/30"
              >
                <div
                  className={cn(
                    "flex h-7 w-7 shrink-0 items-center justify-center rounded-full",
                    TONE[a.severity],
                  )}
                >
                  <Icon className="h-3.5 w-3.5" strokeWidth={2.25} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <Link
                      href={`/alerts/${a.id}`}
                      className={cn(
                        "text-[13px] font-medium hover:underline",
                        a.resolved_at && "text-muted-foreground",
                      )}
                    >
                      {a.title}
                    </Link>
                    <span className="shrink-0 text-[11px] tabular-nums text-muted-foreground">
                      {timeAgo(a.created_at)}
                    </span>
                  </div>
                  <p className="mt-0.5 text-[12px] leading-relaxed text-muted-foreground">
                    {a.body}
                  </p>
                  <div className="mt-1.5 flex items-center gap-2">
                    <span className="text-[10.5px] uppercase tracking-wider text-muted-foreground">
                      {a.source}
                    </span>
                    {a.resolved_at && (
                      <span className="rounded-full bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                        resolved
                      </span>
                    )}
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
