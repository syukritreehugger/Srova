import type {
  IntegrationRow,
  IntegrationStatus,
} from "@/lib/queries/health"
import { cn } from "@/lib/utils"

const STATUS_LABEL: Record<IntegrationStatus, string> = {
  operational: "Operational",
  degraded: "Degraded",
  down: "Down",
  investigating: "Investigating",
}

const STATUS_DOT: Record<IntegrationStatus, string> = {
  operational: "bg-emerald-500",
  degraded: "bg-amber-500",
  down: "bg-rose-500",
  investigating: "bg-blue-500",
}

const STATUS_TONE: Record<IntegrationStatus, string> = {
  operational: "text-emerald-700 dark:text-emerald-400",
  degraded: "text-amber-700 dark:text-amber-400",
  down: "text-rose-700 dark:text-rose-400",
  investigating: "text-blue-700 dark:text-blue-400",
}

export function IntegrationHealth({ rows }: { rows: IntegrationRow[] }) {
  const operational = rows.filter((r) => r.status === "operational").length
  const degraded = rows.filter((r) => r.status === "degraded").length

  return (
    <div className="card-elevated rounded-2xl border border-border bg-card p-5">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
            Integration health
          </div>
          <div className="mt-0.5 text-[14px] font-medium">
            <span
              className={
                operational > 0 ? "text-emerald-600" : "text-muted-foreground"
              }
            >
              {operational} operational
            </span>
            <span className="text-muted-foreground"> · </span>
            <span
              className={degraded > 0 ? "text-amber-600" : "text-muted-foreground"}
            >
              {degraded} degraded
            </span>
          </div>
        </div>
      </div>

      {rows.length === 0 ? (
        <div className="mt-4 rounded-xl border border-dashed border-border px-4 py-8 text-center text-[12px] text-muted-foreground">
          No integration data yet.
        </div>
      ) : (
        <ul className="mt-4 grid gap-2 grid-cols-1">
          {rows.map((i) => (
            <li
              key={i.id}
              className="flex items-center justify-between rounded-xl border border-border bg-background px-4 py-3 transition-colors hover:bg-muted/30"
            >
              <div className="flex min-w-0 items-center gap-3">
                <span className="relative flex h-2 w-2">
                  {i.status === "operational" && (
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-50" />
                  )}
                  <span
                    className={cn(
                      "relative inline-flex h-2 w-2 rounded-full",
                      STATUS_DOT[i.status],
                    )}
                  />
                </span>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="truncate text-[13px] font-medium">
                      {i.name}
                    </span>
                    <span
                      className={cn(
                        "text-[10.5px] font-medium uppercase tracking-wider",
                        STATUS_TONE[i.status],
                      )}
                    >
                      {STATUS_LABEL[i.status]}
                    </span>
                  </div>
                  <div className="truncate text-[11.5px] text-muted-foreground">
                    {i.description}
                  </div>
                </div>
              </div>
              <div className="ml-4 flex shrink-0 items-center gap-4 text-right">
                <div>
                  <div className="text-[10.5px] uppercase tracking-wider text-muted-foreground">
                    Uptime
                  </div>
                  <div className="text-[12px] font-semibold tabular-nums">
                    {i.uptime}%
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="text-[10.5px] uppercase tracking-wider text-muted-foreground">
                    Last event
                  </div>
                  <div className="text-[12px] font-semibold tabular-nums">
                    {i.lastEvent}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
