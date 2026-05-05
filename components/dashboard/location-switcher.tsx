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
import { LOCATIONS, type LocationKey } from "@/lib/constants"

export function LocationSwitcher() {
  const router = useRouter()
  const pathname = usePathname()
  const params = useSearchParams()
  const [pending, startTransition] = useTransition()

  const current = params.get("loc") as LocationKey | null
  const currentLoc = LOCATIONS.find((l) => l.key === current) ?? null

  function pick(key: LocationKey | null) {
    const next = new URLSearchParams(params)
    if (key) next.set("loc", key)
    else next.delete("loc")
    const qs = next.toString()
    startTransition(() => {
      router.push(qs ? `${pathname}?${qs}` : pathname)
    })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          disabled={pending}
          className="h-9 gap-2 rounded-full border-border bg-card pl-3 pr-2 text-[13px] font-medium shadow-sm"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
          </span>
          {currentLoc ? currentLoc.name : "All locations"}
          <span className="text-muted-foreground">·</span>
          <span className="text-muted-foreground tabular-nums">
            {currentLoc ? "1" : LOCATIONS.length}
          </span>
          <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
        </Button>
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
