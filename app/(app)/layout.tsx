import type React from "react"
import { Sidebar } from "@/components/dashboard/sidebar"
import { Topbar } from "@/components/dashboard/topbar"
import { getIntegrationHealth } from "@/lib/queries/health"

export default async function AppLayout({ children }: { children: React.ReactNode }) {
  const integrations = await getIntegrationHealth()
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
          <Topbar health={health} />
          <main className="flex-1 px-6 py-8 md:px-10 md:py-10">
            <div className="mx-auto w-full max-w-[1400px]">{children}</div>
          </main>
        </div>
      </div>
    </div>
  )
}
