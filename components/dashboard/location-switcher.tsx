"use client"

import { ChevronDown } from "lucide-react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useTransition } from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { LOCATIONS, type LocationKey } from "@/lib/constants"
import { cn } from "@/lib/utils"

const LOC_AWARE_PATHS = ["/", "/orders", "/pipeline", "/alerts", "/locations", "/snooze", "/restaurant-status", "/opening-times"]

function isLocAware(pathname: string): boolean {
  return LOC_AWARE_PATHS.some((p) => p === "/" ? pathname === "/" : pathname === p || pathname.startsWith(`${p}/`))
}

type HealthTone = "healthy" | "degraded" | "critical"

const DOT_STYLE: Record<HealthTone, string> = {
  healthy: "bg-emerald-500",
  degraded: "bg-amber-500",
  critical: "bg-rose-500",
}

export function LocationSwitcher({ healthTone = "healthy" }: { healthTone?: HealthTone }) {
  const router = useRouter()
  const pathname = usePathname()
  const params = useSearchParams()
  const [pending, startTransition] = useTransition()

  const current = params.get("loc") as LocationKey | null
  const currentLoc = LOCATIONS.find((l) => l.key === current) ?? null
  const aware = isLocAware(pathname)

  function pick(key: LocationKey | null) {
    const next = new URLSearchParams(params)
    if (key) next.set("loc", key)
    else next.delete("loc")
    const qs = next.toString()
    startTransition(() => {
      router.push(qs ? `${pathname}?${qs}` : pathname)
    })
  }

  const buttonContent = (
    <Button
      variant="outline"
      size="sm"
      disabled={pending || !aware}
      className={cn(
        "h-9 gap-2 rounded-full border-border bg-card pl-3 pr-2 text-[13px] font-medium shadow-sm",
        !aware && "opacity-50 cursor-not-allowed"
      )}
    >
      <span className="relative flex h-1.5 w-1.5">
        {aware ? (
          <>
            <span className={cn("absolute inline-flex h-full w-full animate-ping rounded-full opacity-60", DOT_STYLE[healthTone])} />
            <span className={cn("relative inline-flex h-1.5 w-1.5 rounded-full", DOT_STYLE[healthTone])} />
          </>
        ) : (
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-muted-foreground/40" />
        )}
      </span>
      {!aware
        ? "No filter available"
        : currentLoc ? currentLoc.name : "All locations"}
      {aware && (
        <>
          <span className="text-muted-foreground">·</span>
          <span className="text-muted-foreground tabular-nums">
            {currentLoc ? "1" : LOCATIONS.length}
          </span>
        </>
      )}
      <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
    </Button>
  )

  if (!aware) {
    return (
      <Tooltip>
        <TooltipTrigger asChild>
          {buttonContent}
        </TooltipTrigger>
        <TooltipContent side="bottom">
          Location filter not available on this page
        </TooltipContent>
      </Tooltip>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {buttonContent}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-64 rounded-xl">
        <DropdownMenuLabel className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
          Filter by location
        </DropdownMenuLabel>
        <DropdownMenuItem
          className="font-medium"
          onSelect={() => pick(null)}
        >
          All locations
          {!current && (
            <span className="ml-auto h-2 w-2 rounded-full bg-emerald-500" />
          )}
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        {LOCATIONS.map((loc) => (
          <DropdownMenuItem
            key={loc.key}
            onSelect={() => pick(loc.key)}
            className="flex items-center justify-between"
          >
            <div className="flex flex-col">
              <span className="font-medium">{loc.name}</span>
              <span className="text-[11px] text-muted-foreground">
                {loc.postcode} · {loc.city}
              </span>
            </div>
            {current === loc.key && (
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
