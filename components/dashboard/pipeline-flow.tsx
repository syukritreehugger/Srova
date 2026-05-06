import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { ORDER_STATES, STATE_LABEL, type OrderState } from "@/lib/constants"
import { cn } from "@/lib/utils"

const HEALTHY: OrderState[] = [
  "received",
  "normalized",
  "pushing_ls",
  "ls_sent",
  "ls_accepted",
  "shipday_sent",
  "complete",
]
const FAILED: OrderState[] = ["ls_rejected", "ls_failed", "cancelled"]

export function PipelineFlow({
  counts,
}: {
  counts: Partial<Record<OrderState, number>>
}) {
  const get = (s: OrderState) => counts[s] ?? 0
  const totalActive = ORDER_STATES.filter((s) => s !== "complete").reduce(
    (acc, s) => acc + get(s),
    0,
  )

  return (
    <div className="card-elevated rounded-2xl border border-border bg-card p-5">
      <div className="flex items-start justify-between">
        <div>
          <div className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
            Order pipeline
          </div>
          <div className="mt-1 text-[14px] font-medium">
            <span className="tabular-nums">{totalActive}</span>{" "}
            <span className="text-muted-foreground">orders in flight</span>
          </div>
        </div>
      </div>

      {/* Healthy flow */}
      <div className="mt-5 flex flex-wrap items-stretch gap-2 overflow-x-auto md:flex-nowrap">
        {HEALTHY.map((state, i) => {
          const count = get(state)
          return (
            <div
              key={state}
              className="flex flex-1 items-center gap-2 min-w-[120px]"
            >
              <Link
                href={`/orders?state=${state}`}
                className={cn(
                  "flex flex-1 flex-col rounded-xl border border-border bg-background p-3 transition-colors hover:border-foreground/20",
                  state === "complete" && "border-emerald-500/30 bg-emerald-500/5",
                )}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10.5px] font-medium uppercase tracking-wider text-muted-foreground">
                    {STATE_LABEL[state]}
                  </span>
                  {count > 0 && state !== "complete" && (
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                  )}
                </div>
                <div className="mt-2 text-[22px] font-semibold leading-none tracking-tight tabular-nums">
                  {count}
                </div>
              </Link>
              {i < HEALTHY.length - 1 && (
                <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground" />
              )}
            </div>
          )
        })}
      </div>

      {/* Failure lanes */}
      <div className="mt-3 grid grid-cols-3 gap-2">
        {FAILED.map((state) => {
          const count = get(state)
          return (
            <Link
              key={state}
              href={`/orders?state=${state}`}
              className={cn(
                "flex items-center justify-between rounded-xl border p-3 transition-colors",
                count > 0
                  ? "border-rose-500/20 bg-rose-500/5 hover:border-rose-500/40"
                  : "border-border bg-background hover:border-foreground/20",
              )}
            >
              <div className="flex flex-col">
                <span
                  className={cn(
                    "text-[10.5px] font-medium uppercase tracking-wider",
                    count > 0
                      ? "text-rose-700 dark:text-rose-400"
                      : "text-muted-foreground",
                  )}
                >
                  {STATE_LABEL[state]}
                </span>
                <span className="text-[11px] text-muted-foreground">
                  {count > 0 ? "needs operator review" : "none"}
                </span>
              </div>
              <div
                className={cn(
                  "text-[20px] font-semibold tabular-nums",
                  count > 0
                    ? "text-rose-700 dark:text-rose-400"
                    : "text-muted-foreground",
                )}
              >
                {count}
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
