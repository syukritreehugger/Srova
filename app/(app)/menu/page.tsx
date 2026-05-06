import { AlertTriangle, Check, RefreshCw, X } from "lucide-react"
import { MenuSyncStatus } from "@/components/dashboard/menu-sync-status"
import { OnDevBadge } from "@/components/dashboard/on-dev-badge"
import { PageHeader } from "@/components/dashboard/page-header"
import { Button } from "@/components/ui/button"
import { MENU_ITEMS } from "@/lib/data"
import { getMenuSyncStatus } from "@/lib/queries/health"
import { cn } from "@/lib/utils"

export default async function MenuPage() {
  const menuSync = await getMenuSyncStatus()
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        eyebrow="Subsystem 5"
        title="Menu sync engine"
        description="Lightspeed L-Series is the source of truth. Prices, modifiers and availability propagate to Shopify automatically and to Takeaway via supervised scraping."
        actions={
          <Button size="sm" disabled className="h-9 gap-2 rounded-full text-[12.5px]">
            <RefreshCw className="h-3.5 w-3.5" />
            Trigger full sync
          </Button>
        }
      />

      <OnDevBadge
        variant="banner"
        reason="Automatic menu syncing is not active yet. For now, manage your menu directly in Shopify Admin and Lightspeed BackOffice as usual."
      />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <MenuSyncStatus lastSyncAt={menuSync.lastSyncAt} rows={menuSync.rows} />
        </div>
        <div className="card-elevated rounded-2xl border border-border bg-card p-5">
          <div className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">Sync schedule</div>
          <div className="mt-4 space-y-3">
            {[
              { label: "Daily reconcile", time: "04:00 CET", active: true },
              { label: "Hourly delta", time: "every :00", active: true },
              { label: "Manual trigger", time: "operator", active: false },
              { label: "Webhook (L-Series)", time: "tbd · research", active: false },
            ].map((s) => (
              <div key={s.label} className="flex items-center justify-between rounded-xl border border-border bg-background px-3 py-2.5">
                <div>
                  <div className="text-[12.5px] font-medium">{s.label}</div>
                  <div className="text-[11px] text-muted-foreground">{s.time}</div>
                </div>
                <span className={cn("h-2 w-2 rounded-full", s.active ? "bg-emerald-500" : "bg-muted-foreground/40")} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="card-elevated overflow-hidden rounded-2xl border border-border bg-card">
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <div>
            <div className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
              Catalog reconciliation
            </div>
            <div className="mt-0.5 text-[14px] font-medium">
              {MENU_ITEMS.length}{" "}
              <span className="text-muted-foreground">items · </span>
              <span className="text-amber-600">2 with drift</span>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-[13px]">
            <thead>
              <tr className="border-b border-border bg-muted/30 text-[10.5px] uppercase tracking-wider text-muted-foreground">
                <th className="px-5 py-2.5 text-left font-medium">PLU</th>
                <th className="px-3 py-2.5 text-left font-medium">Item</th>
                <th className="px-3 py-2.5 text-right font-medium">Lightspeed</th>
                <th className="px-3 py-2.5 text-right font-medium">Shopify</th>
                <th className="px-3 py-2.5 text-right font-medium">Takeaway</th>
                <th className="px-3 py-2.5 text-center font-medium">Available</th>
                <th className="px-5 py-2.5 text-left font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {MENU_ITEMS.map((m) => (
                <tr key={m.plu} className="border-b border-border/60 last:border-b-0 hover:bg-muted/30">
                  <td className="px-5 py-3 font-mono text-[12px] text-muted-foreground">{m.plu}</td>
                  <td className="px-3 py-3 font-medium">{m.name}</td>
                  <td className="px-3 py-3 text-right tabular-nums">€{m.priceLs.toFixed(2)}</td>
                  <td
                    className={cn(
                      "px-3 py-3 text-right tabular-nums",
                      m.priceShopify !== m.priceLs && "font-semibold text-amber-700",
                    )}
                  >
                    €{m.priceShopify.toFixed(2)}
                  </td>
                  <td className="px-3 py-3 text-right tabular-nums text-muted-foreground">
                    €{m.priceTakeaway.toFixed(2)}
                  </td>
                  <td className="px-3 py-3 text-center">
                    {m.available ? (
                      <Check className="mx-auto h-3.5 w-3.5 text-emerald-600" />
                    ) : (
                      <X className="mx-auto h-3.5 w-3.5 text-rose-600" />
                    )}
                  </td>
                  <td className="px-5 py-3">
                    {m.drift ? (
                      <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 px-2 py-0.5 text-[11px] font-medium text-amber-700">
                        <AlertTriangle className="h-3 w-3" /> Drift
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[11px] font-medium text-emerald-700">
                        <Check className="h-3 w-3" /> Synced
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
