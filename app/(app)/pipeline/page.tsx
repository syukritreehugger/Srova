import { RefreshCw } from "lucide-react"
import { PageHeader } from "@/components/dashboard/page-header"
import { PipelineFlow } from "@/components/dashboard/pipeline-flow"
import { Button } from "@/components/ui/button"
import { getDashboardStats } from "@/lib/queries/dashboard"
import type { LocationKey } from "@/lib/constants"

export default async function PipelinePage({
  searchParams,
}: {
  searchParams: Promise<{ loc?: string }>
}) {
  const { loc: rawLoc } = await searchParams
  const loc = (rawLoc as LocationKey | undefined) ?? undefined
  const stats = await getDashboardStats(loc)

  const RETRY_BUCKETS = [
    { label: "Backoff +5s", desc: "retry 1", color: "amber" },
    { label: "Backoff +30s", desc: "retry 2", color: "amber" },
    { label: "Backoff +2m", desc: "retry 3", color: "amber" },
    { label: "Backoff +15m", desc: "retry 4", color: "amber" },
    {
      label: "DLQ + Slack",
      desc: "max 5 attempts → archive",
      color: "rose" as const,
    },
  ]

  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        eyebrow="Subsystem 6"
        title="Order state machine"
        description="Every order is a state machine. Each transition is logged, every retry is tracked, every failure is replayable. This is what Deliverect did silently — now visible."
        actions={
          <Button size="sm" className="h-9 gap-2 rounded-full text-[12.5px]">
            <RefreshCw className="h-3.5 w-3.5" />
            Replay failed
          </Button>
        }
      />

      <PipelineFlow counts={stats.pipelineCounts} />

      <div className="card-elevated rounded-2xl border border-border bg-card p-5">
        <div className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
          Retry ladder · pgmq visibility timeouts
        </div>
        <div className="mt-1 text-[14px] font-medium">
          5 attempts · ±20% jitter
        </div>
        <ul className="mt-4 space-y-2">
          {RETRY_BUCKETS.map((b, i) => (
            <li
              key={i}
              className="flex items-center justify-between rounded-xl border border-border bg-background px-4 py-3"
            >
              <div className="min-w-0">
                <div
                  className={
                    b.color === "rose"
                      ? "text-[12.5px] font-medium text-rose-700 dark:text-rose-400"
                      : "text-[12.5px] font-medium"
                  }
                >
                  {b.label}
                </div>
                <div className="mt-0.5 text-[10.5px] uppercase tracking-wider text-muted-foreground">
                  {b.desc}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
