"use client"

import { Suspense, useEffect, useState } from "react"
import { Bell, Command, RefreshCw, Search } from "lucide-react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { LocationSwitcher } from "./location-switcher"
import { createClient } from "@/lib/supabase/browser"

type HealthTone = "healthy" | "degraded" | "critical"

function HealthPill({ tone, label }: { tone: HealthTone; label: string }) {
  const styles =
    tone === "healthy"
      ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400"
      : tone === "degraded"
        ? "border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-400"
        : "border-rose-500/30 bg-rose-500/10 text-rose-700 dark:text-rose-400"
  return (
    <span
      className={`inline-flex h-7 items-center gap-1.5 rounded-full border px-2.5 text-[11px] font-semibold uppercase tracking-wider ${styles}`}
    >
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-current opacity-60" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-current" />
      </span>
      {label}
    </span>
  )
}

export function Topbar({
  health,
}: {
  health?: { tone: HealthTone; label: string }
}) {
  const router = useRouter()
  const [email, setEmail] = useState<string | null>(null)

  useEffect(() => {
    const supabase = createClient()
    supabase.auth.getUser().then(({ data }) => setEmail(data.user?.email ?? null))
  }, [])

  const initials = email
    ? email
        .split("@")[0]!
        .split(/[._-]/)
        .filter(Boolean)
        .slice(0, 2)
        .map((s) => s[0]!.toUpperCase())
        .join("") || email[0]!.toUpperCase()
    : "··"

  return (
    <header className="sticky top-0 z-40 flex h-16 items-center gap-4 border-b border-border glass px-6 md:px-10">
      <Suspense fallback={<div className="h-9 w-40 rounded-full border border-border bg-card" />}>
        <LocationSwitcher />
      </Suspense>

      {health && <HealthPill tone={health.tone} label={health.label} />}

      <div className="hidden flex-1 md:block">
        <div className="relative mx-auto max-w-md">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search orders, PLUs, customers…"
            className="h-9 w-full rounded-full border border-border bg-card pl-9 pr-16 text-[13px] outline-none transition placeholder:text-muted-foreground focus:border-foreground/30 focus:ring-2 focus:ring-foreground/5"
          />
          <kbd className="pointer-events-none absolute right-2 top-1/2 inline-flex h-5 -translate-y-1/2 items-center gap-1 rounded border border-border bg-muted px-1.5 font-mono text-[10px] text-muted-foreground">
            <Command className="h-3 w-3" />K
          </kbd>
        </div>
      </div>

      <div className="flex flex-1 items-center justify-end gap-2 md:flex-none">
        <Button
          variant="ghost"
          size="sm"
          aria-label="Refresh"
          onClick={() => router.refresh()}
          className="h-9 w-9 rounded-full p-0"
        >
          <RefreshCw className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="relative h-9 w-9 rounded-full p-0"
          aria-label="Alerts"
        >
          <Bell className="h-4 w-4" />
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-rose-500 ring-2 ring-background" />
        </Button>
        <div className="ml-1 flex items-center gap-2 rounded-full border border-border bg-card pl-1 pr-3 py-1">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground text-[11px] font-semibold">
            {initials}
          </div>
          <div className="hidden flex-col leading-tight md:flex">
            <span className="text-[12px] font-medium">
              {email ?? "Loading…"}
            </span>
            <span className="text-[10px] text-muted-foreground">Operator</span>
          </div>
        </div>
      </div>
    </header>
  )
}
