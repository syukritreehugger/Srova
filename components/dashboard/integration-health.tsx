import type {
  IntegrationRow,
  IntegrationStatus,
} from "@/lib/queries/health"
import { cn } from "@/lib/utils"

const STATUS_LABEL: Record<IntegrationStatus, string> = {
  operational: "Online",
  degraded: "Issues",
  down: "Offline",
  investigating: "Checking",
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
  const online = rows.filter((r) => r.status === "operational").length
  const issues = rows.filter(
    (r) => r.status === "degraded" || r.status === "down",
  ).length

  return (
    <div className="card-elevated rounded-2xl border border-border bg-card">
      <div className="border-b border-border px-5 py-4">
        <div className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
          Connections
        </div>
        <div className="mt-0.5 text-[14px] font-medium">
          <span
            className={
              online > 0 ? "text-emerald-600" : "text-muted-foreground"
            }
          >
            {online} online
          </span>
          <span className="text-muted-foreground"> · </span>
          <span
            className={issues > 0 ? "text-rose-600" : "text-muted-foreground"}
          >
            {issues} issues
          </span>
        </div>
      </div>

      <ul className="divide-y divide-border">
        {rows.map((i) => (
          <li
            key={i.id}
            className="flex items-center justify-between px-5 py-3.5"
          >
            <div className="flex min-w-0 items-center gap-3">
              <span className="relative flex h-2 w-2">
                {(i.status === "down" || i.status === "degraded") && (
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-current opacity-50" />
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
            <div className="ml-4 shrink-0 text-right">
              <div className="text-[10.5px] uppercase tracking-wider text-muted-foreground">
                Last event
              </div>
              <div className="text-[12px] font-semibold tabular-nums">
                {i.lastEvent}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
