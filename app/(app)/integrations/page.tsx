import { ChevronRight, ExternalLink } from "lucide-react"
import { OnDevBadge } from "@/components/dashboard/on-dev-badge"
import { PageHeader } from "@/components/dashboard/page-header"
import { INTEGRATIONS, type IntegrationStatus } from "@/lib/data"
import { cn } from "@/lib/utils"

const TONE: Record<IntegrationStatus, { dot: string; chip: string; label: string }> = {
  operational: { dot: "bg-emerald-500", chip: "bg-emerald-500/10 text-emerald-700", label: "Operational" },
  degraded: { dot: "bg-amber-500", chip: "bg-amber-500/10 text-amber-700", label: "Degraded" },
  down: { dot: "bg-rose-500", chip: "bg-rose-500/10 text-rose-700", label: "Down" },
  investigating: { dot: "bg-blue-500", chip: "bg-blue-500/10 text-blue-700", label: "Investigating" },
}

const CATEGORY_LABEL = {
  ingest: "Ingestion",
  pos: "POS",
  delivery: "Delivery",
  infra: "Infrastructure",
}

export default function IntegrationsPage() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        eyebrow="Subsystem 7"
        title="Integration health"
        description="Six external systems power FRITUUR OS. Real-time status, uptime and latency across order ingestion, POS, delivery and infrastructure."
      />

      <OnDevBadge
        variant="banner"
        reason="These cards show sample data. For real-time integration status, check the Integration Health widget on the home page."
      />

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {INTEGRATIONS.map((i) => {
          const t = TONE[i.status]
          return (
            <div
              key={i.id}
              className="card-elevated group rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-md"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-2.5 w-2.5">
                    {i.status === "operational" && (
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-50" />
                    )}
                    <span className={cn("relative inline-flex h-2.5 w-2.5 rounded-full", t.dot)} />
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[15px] font-semibold tracking-tight">{i.name}</span>
                      <span className={cn("rounded-full px-1.5 py-0.5 text-[10px] font-medium", t.chip)}>
                        {t.label}
                      </span>
                    </div>
                    <div className="mt-0.5 text-[11.5px] text-muted-foreground">
                      {CATEGORY_LABEL[i.category]} · {i.description}
                    </div>
                  </div>
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3">
                {i.metrics.map((m) => (
                  <div key={m.label} className="rounded-xl border border-border bg-background p-3">
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{m.label}</div>
                    <div className="mt-1 text-[15px] font-semibold tabular-nums leading-none">{m.value}</div>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-between text-[11.5px]">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <span>
                    Uptime <span className="font-semibold text-foreground tabular-nums">{i.uptime}%</span>
                  </span>
                  <span>·</span>
                  <span>
                    Last event <span className="font-semibold text-foreground tabular-nums">{i.lastEvent}</span>
                  </span>
                </div>
                <button className="flex items-center gap-0.5 font-medium text-foreground transition-opacity hover:opacity-70">
                  Details <ChevronRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
