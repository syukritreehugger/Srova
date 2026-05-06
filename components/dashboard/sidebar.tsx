"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  AlertTriangle,
  ArrowLeftRight,
  BellOff,
  BookOpen,
  Building2,
  Clock,
  FileSearch,
  GitBranch,
  LayoutDashboard,
  LogOut,
  Plug,
  Power,
  Settings,
  ShieldCheck,
  ShoppingBag,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { OnDevBadge } from "./on-dev-badge"

interface NavItem {
  href: string
  label: string
  icon: typeof LayoutDashboard
  onDev?: boolean
}

const NAV: { label: string; items: NavItem[] }[] = [
  {
    label: "Pipeline",
    items: [
      { href: "/", label: "Overview", icon: LayoutDashboard },
      { href: "/orders", label: "Orders", icon: ShoppingBag },
      { href: "/pipeline", label: "Pipeline", icon: GitBranch },
      { href: "/alerts", label: "Alerts", icon: AlertTriangle },
      { href: "/audit", label: "Audit log", icon: FileSearch, onDev: true },
    ],
  },
  {
    label: "Operations",
    items: [
      { href: "/locations", label: "Locations", icon: Building2 },
      { href: "/mappings", label: "Mappings", icon: ArrowLeftRight, onDev: true },
      { href: "/menu", label: "Menu sync", icon: BookOpen, onDev: true },
      { href: "/integrations", label: "Integrations", icon: Plug, onDev: true },
      { href: "/opening-times", label: "Opening times", icon: Clock, onDev: true },
      { href: "/snooze", label: "Snooze", icon: BellOff, onDev: true },
      { href: "/restaurant-status", label: "Online/Offline", icon: Power, onDev: true },
    ],
  },
  {
    label: "Compliance",
    items: [
      { href: "/gdpr", label: "GDPR / DSAR", icon: ShieldCheck, onDev: true },
      { href: "/settings", label: "Settings", icon: Settings },
    ],
  },
]

function isActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/"
  return pathname === href || pathname.startsWith(`${href}/`)
}

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden w-64 shrink-0 border-r border-sidebar-border bg-sidebar md:flex md:flex-col">
      {/* Brand */}
      <div className="flex h-16 items-center gap-3 border-b border-sidebar-border px-6">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
          <Image
            src="/gv-logo.png"
            alt="GV"
            width={20}
            height={20}
            className="brightness-0 invert"
          />
        </div>
        <div className="flex flex-col leading-tight">
          <span className="text-[13px] font-semibold tracking-tight text-sidebar-foreground">
            FRITUUR OS
          </span>
          <span className="text-[11px] text-muted-foreground">
            Operations Console
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 py-4">
        {NAV.map((group) => (
          <div key={group.label} className="mb-6">
            <div className="px-3 pb-2 text-[10px] font-medium uppercase tracking-[0.08em] text-muted-foreground">
              {group.label}
            </div>
            <ul className="flex flex-col gap-0.5">
              {group.items.map((item) => {
                const active = isActive(pathname, item.href)
                const Icon = item.icon
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "group flex items-center gap-3 rounded-md px-3 py-2 text-[13px] font-medium transition-colors",
                        active
                          ? "bg-sidebar-accent text-sidebar-foreground"
                          : "text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground",
                      )}
                    >
                      <Icon
                        className={cn(
                          "h-4 w-4 shrink-0",
                          active
                            ? "text-foreground"
                            : "text-muted-foreground",
                        )}
                        strokeWidth={2}
                      />
                      <span className="flex-1 truncate">{item.label}</span>
                      {item.onDev && <OnDevBadge variant="pill" />}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="border-t border-sidebar-border px-3 py-4">
        <form action="/api/auth/signout" method="post">
          <button
            type="submit"
            className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-[13px] font-medium text-muted-foreground transition-colors hover:bg-sidebar-accent hover:text-sidebar-foreground"
          >
            <LogOut className="h-4 w-4" strokeWidth={2} />
            Sign out
          </button>
        </form>
      </div>
    </aside>
  )
}
