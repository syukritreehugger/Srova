import { AlertsFeed } from "@/components/dashboard/alerts-feed"
import { OnDevBadge } from "@/components/dashboard/on-dev-badge"
import { PageHeader } from "@/components/dashboard/page-header"
import { type LocationKey } from "@/lib/constants"
import { getRecentAlerts } from "@/lib/queries/alerts"

const RULES = [
  {
    name: "DLQ depth > 0",
    channel: "Slack",
    severity: "critical",
    enabled: true,
  },
  {
    name: "Push success rate < 99%",
    channel: "Slack",
    severity: "critical",
    enabled: true,
  },
  {
    name: "Lightspeed webhook ack > 10m",
    channel: "Slack",
    severity: "critical",
    enabled: true,
  },
  {
    name: "No orders received > 30m (open hours)",
    channel: "Slack",
    severity: "critical",
    enabled: true,
  },
  {
    name: "Shopify HMAC validation failure",
    channel: "Slack + Email",
    severity: "critical",
    enabled: true,
  },
  {
    name: "PLU mapping miss",
    channel: "Daily digest",
    severity: "warning",
    enabled: true,
  },
  {
    name: "Menu drift detected",
    channel: "Daily digest",
    severity: "warning",
    enabled: true,
  },
  {
    name: "Response time above p95 baseline",
    channel: "Daily digest",
    severity: "info",
    enabled: false,
  },
]

export default async function AlertsPage({
  searchParams,
}: {
  searchParams: Promise<{ loc?: string }>;
}) {
  const { loc: rawLoc } = await searchParams;
  const loc = (rawLoc as LocationKey | undefined) ?? undefined;
  const alerts = await getRecentAlerts(30, loc)

  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        eyebrow="Subsystem 7 · Monitoring"
        title="Alerts"
        description="Failed pushes, expired sessions, missing PLUs — routed to Slack within seconds."
      />

      <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <AlertsFeed alerts={alerts} showViewAll={false} />
        </div>
        <div className="card-elevated sticky top-24 rounded-2xl border border-border bg-card">
          <div className="border-b border-border px-5 py-4">
            <div className="flex items-center justify-between gap-2">
              <div className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                Active rules
              </div>
              <OnDevBadge variant="inline" />
            </div>
            <div className="mt-0.5 text-[14px] font-medium">
              {RULES.filter((r) => r.enabled).length}{" "}
              <span className="text-muted-foreground">
                of {RULES.length} enabled
              </span>
            </div>
          </div>
          <ul className="divide-y divide-border">
            {RULES.map((r) => (
              <li
                key={r.name}
                className="flex items-center justify-between px-5 py-3"
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span
                      className={
                        r.severity === "critical"
                          ? "h-1.5 w-1.5 shrink-0 rounded-full bg-rose-500"
                          : r.severity === "warning"
                            ? "h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500"
                            : "h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500"
                      }
                    />
                    <span className="truncate text-[12.5px] font-medium">
                      {r.name}
                    </span>
                  </div>
                  <div className="mt-0.5 pl-3.5 text-[10.5px] uppercase tracking-wider text-muted-foreground">
                    {r.channel}
                  </div>
                </div>
                <span
                  className={
                    r.enabled
                      ? "shrink-0 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-700 dark:text-emerald-400"
                      : "shrink-0 rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground"
                  }
                >
                  {r.enabled ? "ON" : "OFF"}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
