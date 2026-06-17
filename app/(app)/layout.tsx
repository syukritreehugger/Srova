import type React from "react"
import { Sidebar } from "@/components/dashboard/sidebar"
import { Topbar } from "@/components/dashboard/topbar"
import { getIntegrationHealth, type IntegrationRow } from "@/lib/queries/health"
import { createServiceClient } from "@/lib/supabase/service"

// Topbar surfaces queue + workflow state that change minute-to-minute.
export const dynamic = "force-dynamic"
export const revalidate = 0

async function safeHealth(): Promise<IntegrationRow[]> {
  try {
    return await getIntegrationHealth()
  } catch (err) {
    console.error("[layout] getIntegrationHealth failed:", err)
    return []
  }
}

async function safeAlertCount(): Promise<number> {
  try {
    // dlq_alerts has RLS service-role-only — use service client for unresolved count.
    const sb = createServiceClient()
    const { count } = await sb
      .from("dlq_alerts")
      .select("id", { count: "exact", head: true })
      .is("resolved_at", null)
    return count ?? 0
  } catch (err) {
    console.error("[layout] alertCount query failed:", err)
    return 0
  }
}

export default async function AppLayout({ children }: { children: React.ReactNode }) {
  const [integrations, alertCount] = await Promise.all([
    safeHealth(),
    safeAlertCount(),
  ])

  const worst = integrations.reduce<"operational" | "degraded" | "down" | "investigating">(
    (acc, i) => {
      if (i.status === "down") return "down"
      if (acc === "down") return acc
      if (i.status === "degraded" || i.status === "investigating") return "degraded"
      return acc
    },
    "operational",
  )
  const health =
    worst === "operational"
      ? { tone: "healthy" as const, label: "All systems healthy" }
      : worst === "down"
        ? { tone: "critical" as const, label: "Integration down" }
        : { tone: "degraded" as const, label: "Degraded" }

  return (
    <div className="min-h-svh bg-background">
      <div className="flex min-h-svh">
        <Sidebar />
        <div className="flex min-w-0 flex-1 flex-col">
          <Topbar health={health} alertCount={alertCount} />
          <main className="flex-1 px-6 py-8 md:px-10 md:py-10">
            <div className="mx-auto w-full max-w-[1400px]">{children}</div>
          </main>
        </div>
      </div>
    </div>
  )
}
