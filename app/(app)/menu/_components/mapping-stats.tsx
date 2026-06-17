import { CheckCircle2, AlertTriangle, AlertCircle, Eye, Split } from "lucide-react";
import { cn } from "@/lib/utils";

interface MappingStatsProps {
  matched: number;
  auto_split: number;
  shopify_only: number;
  ls_only: number;
  mismatch: number;
  total_shopify: number;
  total_lightspeed: number;
}

export function MappingStats({
  matched,
  auto_split,
  shopify_only,
  ls_only,
  mismatch,
  total_shopify,
  total_lightspeed,
}: MappingStatsProps) {
  void total_lightspeed;
  const ready = matched + auto_split;
  const allClean = shopify_only === 0 && mismatch === 0;

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
      <Stat
        label="Ready to push"
        value={ready}
        sub={`of ${total_shopify} Shopify variants`}
        tone={allClean ? "emerald" : "default"}
        icon={<CheckCircle2 className="h-4 w-4" />}
      />
      <Stat
        label="Auto-split"
        value={auto_split}
        sub="compound SKU → base PLU"
        tone={auto_split > 0 ? "emerald" : "default"}
        icon={<Split className="h-4 w-4" />}
      />
      <Stat
        label="Mismatched"
        value={mismatch}
        sub="same SKU, name/price differs"
        tone={mismatch > 0 ? "rose" : "default"}
        icon={<AlertCircle className="h-4 w-4" />}
      />
      <Stat
        label="Shopify only"
        value={shopify_only}
        sub="base PLU not in LS"
        tone={shopify_only > 0 ? "amber" : "default"}
        icon={<AlertTriangle className="h-4 w-4" />}
      />
      <Stat
        label="Lightspeed only"
        value={ls_only}
        sub="not exposed in Shopify"
        tone={ls_only > 0 ? "blue" : "default"}
        icon={<Eye className="h-4 w-4" />}
      />
    </div>
  );
}

function Stat({
  label,
  value,
  sub,
  tone,
  icon,
}: {
  label: string;
  value: number;
  sub: string;
  tone: "default" | "emerald" | "amber" | "rose" | "blue";
  icon: React.ReactNode;
}) {
  const toneClass = {
    default: "border-border bg-card text-foreground",
    emerald: "border-emerald-500/30 bg-emerald-500/5 text-emerald-700 dark:text-emerald-400",
    amber: "border-amber-500/30 bg-amber-500/5 text-amber-700 dark:text-amber-400",
    rose: "border-rose-500/30 bg-rose-500/5 text-rose-700 dark:text-rose-400",
    blue: "border-blue-500/30 bg-blue-500/5 text-blue-700 dark:text-blue-400",
  }[tone];

  return (
    <div className={cn("card-elevated rounded-2xl border p-4", toneClass)}>
      <div className="flex items-center justify-between">
        <span className="text-[10.5px] font-medium uppercase tracking-wider opacity-80">
          {label}
        </span>
        <span className="opacity-60">{icon}</span>
      </div>
      <div className="mt-2 text-[26px] font-semibold leading-none tabular-nums">
        {value.toLocaleString("nl-BE")}
      </div>
      <div className="mt-1 text-[11px] opacity-70">{sub}</div>
    </div>
  );
}
