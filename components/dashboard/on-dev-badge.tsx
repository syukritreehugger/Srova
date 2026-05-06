import { Construction } from "lucide-react"
import { cn } from "@/lib/utils"

export function OnDevBadge({
  variant = "inline",
  reason,
}: {
  variant?: "inline" | "pill" | "banner"
  reason?: string
}) {
  if (variant === "pill") {
    return (
      <span className="inline-flex h-4 items-center gap-1 rounded-full bg-amber-500/15 px-1.5 text-[9px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
        On Dev
      </span>
    )
  }

  if (variant === "banner") {
    return (
      <div
        className={cn(
          "flex items-start gap-3 rounded-2xl border border-amber-500/30 bg-amber-500/5 px-4 py-3"
        )}
      >
        <Construction className="mt-0.5 h-4 w-4 shrink-0 text-amber-700 dark:text-amber-400" />
        <div className="flex-1 text-[12.5px]">
          <div className="font-semibold text-amber-800 dark:text-amber-300">
            Coming soon
          </div>
          <div className="mt-0.5 text-amber-700/80 dark:text-amber-400/80">
            {reason ??
              "This feature is still being built and not ready to use yet. You can look around, but nothing here is connected to real data."}
          </div>
        </div>
      </div>
    )
  }

  return (
    <span className="inline-flex h-5 items-center gap-1 rounded-full bg-amber-500/15 px-2 text-[10px] font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400">
      <Construction className="h-3 w-3" strokeWidth={2.5} />
      On Dev
    </span>
  )
}
