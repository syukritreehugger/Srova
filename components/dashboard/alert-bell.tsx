"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { createClient } from "@/lib/supabase/browser"
import { LOCATIONS } from "@/lib/constants"
import { cn } from "@/lib/utils"

interface AlertPreview {
  id: number
  external_ref: string | null
  source: string | null
  location_key: string | null
  attempt_count: number
  last_error: unknown
  created_at: string
  resolved_at: string | null
}

function locName(key: string | null): string {
  if (!key) return "—"
  return LOCATIONS.find((l) => l.key === key)?.name ?? key
}

function errorMsg(err: unknown): string {
  if (!err || typeof err !== "object") return "Unknown error"
  const msg = (err as { message?: string }).message
  return msg ? msg.slice(0, 60) : "Unknown error"
}

function timeAgo(iso: string): string {
  const m = Math.max(0, Math.round((Date.now() - new Date(iso).getTime()) / 60000))
  if (m < 1) return "just now"
  if (m < 60) return `${m}m ago`
  const h = Math.round(m / 60)
  if (h < 24) return `${h}h ago`
  return `${Math.round(h / 24)}d ago`
}

export function AlertBell({
  initialCount,
}: {
  initialCount: number
}) {
  const [count, setCount] = useState(initialCount)
  const [alerts, setAlerts] = useState<AlertPreview[]>([])
  const [loaded, setLoaded] = useState(false)

  function loadAlerts() {
    if (loaded) return
    const supabase = createClient()
    supabase
      .from("dlq_alerts")
      .select(
        "id, external_ref, source, location_key, attempt_count, last_error, created_at, resolved_at"
      )
      .is("resolved_at", null)
      .order("created_at", { ascending: false })
      .limit(5)
      .then(({ data, count: total }) => {
        setAlerts((data as AlertPreview[] | null) ?? [])
        if (typeof total === "number") setCount(total)
        setLoaded(true)
      })
  }

  useEffect(() => {
    setCount(initialCount)
  }, [initialCount])

  return (
    <Popover onOpenChange={(open) => { if (open) loadAlerts() }}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="relative h-9 w-9 rounded-full p-0"
          aria-label={`Alerts${count > 0 ? ` (${count} unresolved)` : ""}`}
        >
          <Bell className="h-4 w-4" />
          {count > 0 && (
            <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-rose-500 px-1 text-[9px] font-bold text-white ring-2 ring-background">
              {count > 99 ? "99+" : count}
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="end"
        sideOffset={8}
        className="w-80 p-0 rounded-xl"
      >
        <div className="flex items-center justify-between border-b border-border px-4 py-3">
          <div>
            <div className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
              Unresolved alerts
            </div>
            <div className="mt-0.5 text-[13px] font-semibold">
              {count > 0 ? (
                <>
                  <span className="text-rose-600 tabular-nums">{count}</span>{" "}
                  <span className="text-muted-foreground font-normal">need attention</span>
                </>
              ) : (
                <span className="text-emerald-600">All clear</span>
              )}
            </div>
          </div>
        </div>

        {!loaded && count > 0 && (
          <div className="px-4 py-6 text-center text-[12px] text-muted-foreground">
            Loading…
          </div>
        )}

        {loaded && alerts.length === 0 && (
          <div className="px-4 py-6 text-center text-[12px] text-muted-foreground">
            No unresolved alerts. Pipeline healthy.
          </div>
        )}

        {loaded && alerts.length > 0 && (
          <ul className="max-h-64 overflow-y-auto divide-y divide-border">
            {alerts.map((a) => (
              <li key={a.id}>
                <Link
                  href={`/alerts/${a.id}`}
                  className="flex gap-3 px-4 py-3 transition-colors hover:bg-muted/50"
                >
                  <span
                    className={cn(
                      "mt-1.5 h-2 w-2 shrink-0 rounded-full",
                      a.attempt_count >= 5 ? "bg-rose-500" : "bg-amber-500"
                    )}
                  />
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-[12px] font-medium">
                      {errorMsg(a.last_error)}
                    </div>
                    <div className="mt-0.5 text-[11px] text-muted-foreground">
                      {a.external_ref ?? "—"} · {locName(a.location_key)} ·{" "}
                      {a.attempt_count} attempts
                    </div>
                    <div className="mt-0.5 text-[10.5px] text-muted-foreground tabular-nums">
                      {timeAgo(a.created_at)}
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}

        <div className="border-t border-border px-4 py-2.5">
          <Link
            href="/alerts"
            className="flex items-center justify-center text-[12px] font-medium text-foreground hover:underline"
          >
            View all alerts →
          </Link>
        </div>
      </PopoverContent>
    </Popover>
  )
}
