import { Check, Lock } from "lucide-react"
import { OnDevBadge } from "@/components/dashboard/on-dev-badge"
import { PageHeader } from "@/components/dashboard/page-header"
import { Button } from "@/components/ui/button"

const SECRETS = [
  { key: "SHOPIFY_WEBHOOK_SECRET", set: true, description: "HMAC-SHA256 webhook signature secret" },
  { key: "LIGHTSPEED_OAUTH_CLIENT_ID", set: true, description: "L-Series OAuth client identifier" },
  { key: "LIGHTSPEED_OAUTH_CLIENT_SECRET", set: true, description: "L-Series OAuth client secret" },
  { key: "TAKEAWAY_PORTAL_USERNAME", set: true, description: "Per-location credentials in vault" },
  { key: "TAKEAWAY_PORTAL_PASSWORD", set: true, description: "Per-location credentials in vault" },
  { key: "SHIPDAY_API_KEY", set: true, description: "REST API authentication" },
  { key: "GOOGLE_MAPS_API_KEY", set: true, description: "Geocoding for Takeaway addresses" },
  { key: "SLACK_WEBHOOK_URL", set: true, description: "Critical alert channel" },
  { key: "SENTRY_DSN", set: false, description: "Optional · error tracking" },
]

export default function SettingsPage() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        eyebrow="Configuration"
        title="Settings"
        description="Secrets, scheduled jobs and feature flags. All credentials live in Supabase Vault — never in code."
      />

      <OnDevBadge
        variant="banner"
        reason="Settings UI is a placeholder. Real secret rotation and feature-flag controls land alongside CASL RBAC (T-29) — for now manage via Supabase Studio + n8n credentials."
      />

      <div className="card-elevated overflow-hidden rounded-2xl border border-border bg-card">
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <div className="flex items-center gap-2">
            <Lock className="h-3.5 w-3.5 text-muted-foreground" />
            <div>
              <div className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                Secrets · Supabase Vault
              </div>
              <div className="mt-0.5 text-[14px] font-medium">
                {SECRETS.filter((s) => s.set).length}{" "}
                <span className="text-muted-foreground">of {SECRETS.length} configured</span>
              </div>
            </div>
          </div>
          <Button variant="outline" size="sm" className="h-8 rounded-full text-[12px] bg-transparent">
            Rotate keys
          </Button>
        </div>
        <ul className="divide-y divide-border">
          {SECRETS.map((s) => (
            <li key={s.key} className="flex items-center justify-between px-5 py-3">
              <div>
                <code className="font-mono text-[12.5px] font-medium">{s.key}</code>
                <div className="mt-0.5 text-[11px] text-muted-foreground">{s.description}</div>
              </div>
              {s.set ? (
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10.5px] font-medium text-emerald-700">
                  <Check className="h-3 w-3" /> Set
                </span>
              ) : (
                <span className="inline-flex items-center rounded-full bg-muted px-2 py-0.5 text-[10.5px] font-medium text-muted-foreground">
                  Not set
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="card-elevated rounded-2xl border border-border bg-card p-5">
        <div className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">Feature flags</div>
        <div className="mt-4 grid grid-cols-1 gap-2 md:grid-cols-2">
          {[
            { name: "Takeaway scraper", enabled: true, desc: "Authenticated session polling, 30s interval" },
            { name: "Auto menu sync to Takeaway", enabled: false, desc: "Manual operator workflow recommended" },
            { name: "Compensating Shipday delete", enabled: true, desc: "On Lightspeed failure within 5min" },
            { name: "Aggressive scrape (10s) at peak", enabled: true, desc: "Fri/Sat 17:00–22:00" },
          ].map((f) => (
            <div key={f.name} className="flex items-center justify-between rounded-xl border border-border bg-background px-4 py-3">
              <div>
                <div className="text-[13px] font-medium">{f.name}</div>
                <div className="mt-0.5 text-[11px] text-muted-foreground">{f.desc}</div>
              </div>
              <button
                role="switch"
                aria-checked={f.enabled}
                className={
                  f.enabled
                    ? "relative h-5 w-9 shrink-0 rounded-full bg-foreground transition-colors"
                    : "relative h-5 w-9 shrink-0 rounded-full bg-muted-foreground/30 transition-colors"
                }
              >
                <span
                  className={
                    f.enabled
                      ? "absolute left-[18px] top-0.5 h-4 w-4 rounded-full bg-background shadow-sm"
                      : "absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-background shadow-sm"
                  }
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
