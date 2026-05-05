import { Check, GitBranch, Lock } from "lucide-react"
import { OnDevBadge } from "@/components/dashboard/on-dev-badge"
import { PageHeader } from "@/components/dashboard/page-header"
import { Button } from "@/components/ui/button"
import { getWorkflow, isN8nConfigured, POLLER_NORMALIZE_ID } from "@/lib/n8n"
import { PipelineToggle } from "./_components/pipeline-toggle"

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

export default async function SettingsPage() {
  const configured = isN8nConfigured()
  let pollerActive = false
  let pollerError: string | null = null
  if (configured) {
    const r = await getWorkflow(POLLER_NORMALIZE_ID)
    if (r.ok) pollerActive = r.data.active
    else pollerError = r.error
  }

  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        eyebrow="Configuration"
        title="Settings"
        description="Pipeline control, secrets, dan feature flags. Operator-friendly toggle untuk pause/resume Frituur OS push ke Lightspeed."
      />

      <div className="card-elevated overflow-hidden rounded-2xl border border-border bg-card">
        <div className="flex items-center gap-2 border-b border-border px-5 py-4">
          <GitBranch className="h-3.5 w-3.5 text-muted-foreground" />
          <div>
            <div className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
              Pipeline · Shopify → Frituur OS → Lightspeed
            </div>
            <div className="mt-0.5 text-[14px] font-medium">
              Toggle global push ke POS
            </div>
          </div>
        </div>
        <div className="p-5">
          <PipelineToggle
            initialActive={pollerActive}
            configured={configured}
            configError={pollerError}
          />
          <div className="mt-4 rounded-xl border border-border bg-muted/30 p-3 text-[11.5px] text-muted-foreground leading-relaxed">
            <span className="font-semibold text-foreground">Cara kerja:</span>{' '}
            tombol ini activate/deactivate workflow{' '}
            <code className="font-mono text-[11px]">poller_q_orders_normalize</code> di n8n.
            Webhook Shopify <em>tetap masuk</em> dan tersimpan di{' '}
            <code className="font-mono text-[11px]">raw_orders</code> apa pun statusnya — yang
            di-pause cuma push ke POS Lightspeed.
          </div>
        </div>
      </div>

      <OnDevBadge
        variant="banner"
        reason="Secret rotation, RBAC, dan feature-flag controls penuh land bersama CASL (T-29). Untuk Phase 1 hanya pipeline toggle yang aktif."
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
          <Button variant="outline" size="sm" disabled className="h-8 rounded-full text-[12px] bg-transparent">
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
    </div>
  )
}
