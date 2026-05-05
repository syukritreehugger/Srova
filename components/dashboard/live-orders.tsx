import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { LOCATIONS, STATE_LABEL, STATE_TONE } from "@/lib/constants"
import type { LiveOrderRow } from "@/lib/queries/dashboard"
import { cn } from "@/lib/utils"

function locName(key: string): string {
  return LOCATIONS.find((l) => l.key === key)?.name ?? key
}

function timeAgo(iso: string): string {
  const d = new Date(iso)
  const minutes = Math.max(0, Math.round((Date.now() - d.getTime()) / 60000))
  if (minutes < 1) return "just now"
  if (minutes === 1) return "1 min ago"
  if (minutes < 60) return `${minutes} min ago`
  const h = Math.round(minutes / 60)
  if (h < 24) return `${h}h ago`
  const days = Math.round(h / 24)
  return `${days}d ago`
}

function eur(cents: number): string {
  return `€${(cents / 100).toLocaleString("nl-BE", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`
}

export function LiveOrders({
  rows,
  title = "Live orders",
}: {
  rows: LiveOrderRow[]
  title?: string
}) {
  return (
    <div className="card-elevated overflow-hidden rounded-2xl border border-border bg-card">
      <div className="flex items-center justify-between border-b border-border px-5 py-4">
        <div>
          <div className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
            {title}
          </div>
          <div className="mt-0.5 text-[14px] font-medium">
            <span className="tabular-nums">{rows.length}</span>{" "}
            <span className="text-muted-foreground">most recent</span>
          </div>
        </div>
        <Link
          href="/orders"
          className="flex items-center gap-1 text-[12px] font-medium text-foreground transition-opacity hover:opacity-70"
        >
          View all <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-[13px]">
          <thead>
            <tr className="border-b border-border bg-muted/30 text-[10.5px] uppercase tracking-wider text-muted-foreground">
              <th className="px-5 py-2.5 text-left font-medium">Reference</th>
              <th className="px-3 py-2.5 text-left font-medium">Channel</th>
              <th className="px-3 py-2.5 text-left font-medium">Location</th>
              <th className="px-3 py-2.5 text-right font-medium">Total</th>
              <th className="px-3 py-2.5 text-left font-medium">State</th>
              <th className="px-5 py-2.5 text-right font-medium">Received</th>
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 && (
              <tr>
                <td
                  colSpan={6}
                  className="px-5 py-8 text-center text-[12px] text-muted-foreground"
                >
                  No orders yet.
                </td>
              </tr>
            )}
            {rows.map((o) => (
              <tr
                key={`${o.source}:${o.external_ref}`}
                className="group border-b border-border/60 last:border-b-0 hover:bg-muted/30"
              >
                <td className="px-5 py-3 font-mono text-[12px]">
                  <Link
                    href={`/orders/${encodeURIComponent(o.external_ref)}`}
                    className="hover:underline"
                  >
                    {o.external_ref}
                  </Link>
                </td>
                <td className="px-3 py-3">
                  <span
                    className={cn(
                      "inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[11px] font-medium",
                      o.source === "shopify"
                        ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400"
                        : "bg-orange-500/10 text-orange-700 dark:text-orange-400",
                    )}
                  >
                    <span
                      className={cn(
                        "h-1.5 w-1.5 rounded-full",
                        o.source === "shopify"
                          ? "bg-emerald-500"
                          : "bg-orange-500",
                      )}
                    />
                    {o.source === "shopify" ? "Shopify" : "Takeaway"}
                  </span>
                </td>
                <td className="px-3 py-3 text-muted-foreground">
                  {locName(o.location_key)}
                </td>
                <td className="px-3 py-3 text-right tabular-nums font-medium">
                  {eur(o.payment_total_cents)}
                </td>
                <td className="px-3 py-3">
                  <span
                    className={cn(
                      "inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium",
                      STATE_TONE[o.status],
                    )}
                  >
                    {STATE_LABEL[o.status]}
                  </span>
                </td>
                <td className="px-5 py-3 text-right tabular-nums text-muted-foreground">
                  {timeAgo(o.created_at)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
