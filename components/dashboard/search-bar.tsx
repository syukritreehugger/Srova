"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import { Command, Loader2, Search, ShoppingBag } from "lucide-react"
import { createClient } from "@/lib/supabase/browser"
import { LOCATIONS } from "@/lib/constants"
import { cn } from "@/lib/utils"

interface OrderHit {
  external_ref: string
  source: string
  location_key: string
  status: string
}

function locName(key: string): string {
  return LOCATIONS.find((l) => l.key === key)?.name ?? key
}

export function SearchBar({ className }: { className?: string }) {
  const router = useRouter()
  const inputRef = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [query, setQuery] = useState("")
  const [hits, setHits] = useState<OrderHit[]>([])
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(-1)

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        inputRef.current?.focus()
      }
    }
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [])

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", onClickOutside)
    return () => document.removeEventListener("mousedown", onClickOutside)
  }, [])

  const search = useCallback(async (q: string) => {
    if (q.length < 2) {
      setHits([])
      setLoading(false)
      return
    }
    setLoading(true)
    const supabase = createClient()
    const { data } = await supabase
      .from("canonical_orders")
      .select("external_ref, source, location_key, status")
      .ilike("external_ref", `%${q}%`)
      .order("created_at", { ascending: false })
      .limit(6)
    setHits((data as OrderHit[] | null) ?? [])
    setLoading(false)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => search(query), 250)
    return () => clearTimeout(timer)
  }, [query, search])

  function go(href: string) {
    setOpen(false)
    setQuery("")
    setHits([])
    inputRef.current?.blur()
    router.push(href)
  }

  function onInputKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Escape") {
      setOpen(false)
      inputRef.current?.blur()
      return
    }
    if (!open || hits.length === 0) return
    if (e.key === "ArrowDown") {
      e.preventDefault()
      setSelected((s) => (s + 1) % hits.length)
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      setSelected((s) => (s - 1 + hits.length) % hits.length)
    } else if (e.key === "Enter" && selected >= 0 && hits[selected]) {
      e.preventDefault()
      go(`/orders/${encodeURIComponent(hits[selected].external_ref)}`)
    }
  }

  const showDropdown = open && query.length >= 2

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      <Search className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
      <input
        ref={inputRef}
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value)
          setOpen(true)
          setSelected(-1)
        }}
        onFocus={() => { if (query.length >= 2) setOpen(true) }}
        onKeyDown={onInputKeyDown}
        placeholder="Search orders by reference…"
        className="h-9 w-full rounded-full border border-border bg-card pl-9 pr-16 text-[13px] outline-none transition placeholder:text-muted-foreground focus:border-foreground/30 focus:ring-2 focus:ring-foreground/5"
        aria-label="Search orders"
        aria-expanded={showDropdown}
        role="combobox"
        aria-autocomplete="list"
      />
      <kbd className="pointer-events-none absolute right-2 top-1/2 inline-flex h-5 -translate-y-1/2 items-center gap-1 rounded border border-border bg-muted px-1.5 font-mono text-[10px] text-muted-foreground">
        <Command className="h-3 w-3" />K
      </kbd>

      {showDropdown && (
        <div className="absolute left-0 right-0 top-full z-50 mt-1.5 overflow-hidden rounded-xl border border-border bg-popover shadow-lg">
          {loading && (
            <div className="flex items-center gap-2 px-4 py-3 text-[12px] text-muted-foreground">
              <Loader2 className="h-3.5 w-3.5 animate-spin" />
              Searching…
            </div>
          )}

          {!loading && hits.length === 0 && (
            <div className="px-4 py-3 text-[12px] text-muted-foreground">
              No orders matching &ldquo;{query}&rdquo;
            </div>
          )}

          {!loading && hits.length > 0 && (
            <ul role="listbox" className="py-1">
              {hits.map((h, i) => (
                <li
                  key={h.external_ref}
                  role="option"
                  aria-selected={i === selected}
                  className={cn(
                    "flex cursor-pointer items-center gap-3 px-4 py-2.5 text-[13px] transition-colors",
                    i === selected
                      ? "bg-accent text-accent-foreground"
                      : "hover:bg-muted/60"
                  )}
                  onMouseEnter={() => setSelected(i)}
                  onClick={() =>
                    go(`/orders/${encodeURIComponent(h.external_ref)}`)
                  }
                >
                  <ShoppingBag className="h-4 w-4 shrink-0 text-muted-foreground" />
                  <div className="min-w-0 flex-1">
                    <div className="truncate font-mono text-[12px] font-medium">
                      {h.external_ref}
                    </div>
                    <div className="mt-0.5 text-[11px] text-muted-foreground">
                      {h.source} · {locName(h.location_key)} · {h.status}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}

          {!loading && hits.length > 0 && (
            <div className="border-t border-border px-4 py-2 text-[11px] text-muted-foreground">
              <span className="font-medium">{hits.length}</span> results ·{" "}
              <button
                type="button"
                className="font-medium text-foreground hover:underline"
                onClick={() => {
                  setOpen(false)
                  router.push(`/orders?q=${encodeURIComponent(query)}`)
                }}
              >
                View all in Orders →
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
