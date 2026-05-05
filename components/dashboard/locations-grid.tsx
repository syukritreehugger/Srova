import Link from "next/link"
import { MapPin } from "lucide-react"
import { LOCATIONS, type LocationKey } from "@/lib/constants"
import type { LocationHealth } from "@/lib/queries/dashboard"
import { cn } from "@/lib/utils"

export function LocationsGrid({ data }: { data: LocationHealth[] }) {
  const byKey = new Map<LocationKey, LocationHealth>(
    data.map((h) => [h.key, h]),
  )

  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
      {LOCATIONS.map((loc) => {
        const h = byKey.get(loc.key) ?? {
          key: loc.key,
          total: 0,
          failed: 0,
          successRate: 100,
        }
        const tier =
          h.successRate >= 99 ? "good" : h.successRate >= 95 ? "warn" : "bad"
        const borderTier =
          tier === "good"
            ? "border-emerald-500/20"
            : tier === "warn"
              ? "border-amber-500/30"
              : "border-rose-500/40"
        return (
          <Link
            key={loc.key}
            href={`/locations/${loc.key}`}
            className={cn(
              "card-elevated rounded-2xl border bg-card p-5 transition-colors hover:border-foreground/20",
              borderTier,
            )}
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
                  <span className="text-[14px] font-semibold tracking-tight">
                    {loc.name}
                  </span>
                </div>
                <div className="mt-0.5 text-[11px] text-muted-foreground">
                  {loc.postcode} · {loc.city}
                </div>
              </div>
              <span
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[10.5px] font-medium",
                  tier === "good"
                    ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400"
                    : tier === "warn"
                      ? "bg-amber-500/10 text-amber-700 dark:text-amber-400"
                      : "bg-rose-500/10 text-rose-700 dark:text-rose-400",
                )}
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-current opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-current" />
                </span>
                {h.successRate}%
              </span>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2">
              <div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  Total
                </div>
                <div className="text-[18px] font-semibold tabular-nums leading-none mt-1">
                  {h.total}
                </div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  Failed
                </div>
                <div
                  className={cn(
                    "text-[18px] font-semibold tabular-nums leading-none mt-1",
                    h.failed > 0
                      ? "text-rose-700 dark:text-rose-400"
                      : "text-muted-foreground",
                  )}
                >
                  {h.failed}
                </div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  Status
                </div>
                <div
                  className={cn(
                    "text-[14px] font-semibold leading-none mt-2 uppercase tracking-wider",
                    tier === "good"
                      ? "text-emerald-700 dark:text-emerald-400"
                      : tier === "warn"
                        ? "text-amber-700 dark:text-amber-400"
                        : "text-rose-700 dark:text-rose-400",
                  )}
                >
                  {tier}
                </div>
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
