"use client"

import { Suspense, useEffect, useState } from "react"
import { RefreshCw, Search } from "lucide-react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { LocationSwitcher } from "./location-switcher"
import { SearchBar } from "./search-bar"
import { AlertBell } from "./alert-bell"
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
  alertCount: serverAlertCount,
}: {
  health?: { tone: HealthTone; label: string }
  alertCount?: number
}) {
  const router = useRouter()
  const [email, setEmail] = useState<string | null>(null)
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false)

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
    <TooltipProvider delayDuration={300}>
      <header className="sticky top-0 z-40 flex h-16 items-center gap-4 border-b border-border glass px-6 md:px-10">
        <Suspense fallback={<div className="h-9 w-40 rounded-full border border-border bg-card" />}>
          <LocationSwitcher healthTone={health?.tone} />
        </Suspense>

        {health && <HealthPill tone={health.tone} label={health.label} />}

        {/* Desktop: inline search */}
        <div className="hidden flex-1 md:block">
          <div className="mx-auto max-w-md">
            <SearchBar />
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end gap-2 md:flex-none">
          {/* Mobile: search toggle */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                aria-label="Search"
                onClick={() => setMobileSearchOpen((v) => !v)}
                className="h-9 w-9 rounded-full p-0 md:hidden"
              >
                <Search className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Search orders</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                aria-label="Refresh page"
                onClick={() => router.refresh()}
                className="h-9 w-9 rounded-full p-0"
              >
                <RefreshCw className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Refresh</TooltipContent>
          </Tooltip>

          <AlertBell initialCount={serverAlertCount ?? 0} />

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

      {/* Mobile search bar — expands below header */}
      {mobileSearchOpen && (
        <div className="border-b border-border bg-background px-4 py-3 md:hidden">
          <SearchBar className="w-full" />
        </div>
      )}
    </TooltipProvider>
  )
}
