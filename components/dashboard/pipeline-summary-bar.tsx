import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { type OrderState } from "@/lib/constants"
import { cn } from "@/lib/utils"

const IN_FLIGHT: OrderState[] = ["received", "normalized", "pushing_ls", "ls_sent"]
const FAILED: OrderState[] = ["ls_failed", "ls_rejected"]

interface Bucket {
  label: string
  count: number
  tone: string
  dotColor: string
  href: string
}

export function PipelineSummaryBar({
  counts,
}: {
  counts: Partial<Record<OrderState, number>>
}) {
  const get = (s: OrderState) => counts[s] ?? 0
  const sum = (arr: OrderState[]) => arr.reduce((a, s) => a + get(s), 0)

  const buckets: Bucket[] = [
    {
      label: "In flight",
      count: sum(IN_FLIGHT),
      tone: "text-amber-700 dark:text-amber-400",
      dotColor: "bg-amber-500",
      href: "/orders?state=in_flight",
    },
    {
      label: "Failed",
      count: sum(FAILED),
      tone: "text-rose-700 dark:text-rose-400",
      dotColor: "bg-rose-500",
      href: "/orders?state=ls_failed",
    },
    {
      label: "Accepted",
      count: get("ls_accepted"),
      tone: "text-blue-700 dark:text-blue-400",
      dotColor: "bg-blue-500",
      href: "/orders?state=ls_accepted",
    },
    {
      label: "Complete",
      count: get("complete"),
      tone: "text-emerald-700 dark:text-emerald-400",
      dotColor: "bg-emerald-500",
      href: "/orders?state=complete",
    },
  ]

  const total = Object.values(counts).reduce((a, n) => a + (n ?? 0), 0)

  return (
    <div className="flex items-center justify-between rounded-xl border border-border bg-card px-4 py-2.5">
      <div className="flex items-center gap-5">
        <span className="text-[12px] font-medium text-muted-foreground">
          Pipeline
        </span>
        <div className="h-4 w-px bg-border" />
        {buckets.map((b) => (
          <Link
            key={b.label}
            href={b.href}
            className="group flex items-center gap-1.5 text-[13px] transition-opacity hover:opacity-80"
          >
            <span
              className={cn("h-1.5 w-1.5 rounded-full", b.dotColor)}
            />
            <span className={cn("font-semibold tabular-nums", b.count > 0 ? b.tone : "text-muted-foreground")}>
              {b.count}
            </span>
            <span className="text-muted-foreground">{b.label}</span>
          </Link>
        ))}
      </div>
      <Link
        href="/pipeline"
        className="flex items-center gap-1 text-[12px] text-muted-foreground transition-colors hover:text-foreground"
      >
        Full pipeline
        <ArrowRight className="h-3 w-3" />
      </Link>
    </div>
  )
}
