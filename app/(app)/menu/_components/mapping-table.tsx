import Link from "next/link";
import { CheckCircle2, AlertCircle, AlertTriangle, Eye, Split } from "lucide-react";
import type { ProductMappingRow, MappingStatus } from "@/lib/queries/menu-mapping";
import { cn } from "@/lib/utils";

const STATUS_CONFIG: Record<
  MappingStatus,
  { label: string; tone: string; icon: React.ReactNode }
> = {
  matched: {
    label: "Matched",
    tone: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400",
    icon: <CheckCircle2 className="h-3 w-3" />,
  },
  auto_split: {
    label: "Auto-split",
    tone: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400",
    icon: <Split className="h-3 w-3" />,
  },
  mismatch: {
    label: "Mismatch",
    tone: "bg-rose-500/10 text-rose-700 dark:text-rose-400",
    icon: <AlertCircle className="h-3 w-3" />,
  },
  shopify_only: {
    label: "Shopify only",
    tone: "bg-amber-500/10 text-amber-700 dark:text-amber-400",
    icon: <AlertTriangle className="h-3 w-3" />,
  },
  ls_only: {
    label: "Lightspeed only",
    tone: "bg-blue-500/10 text-blue-700 dark:text-blue-400",
    icon: <Eye className="h-3 w-3" />,
  },
};

function eur(price: number): string {
  return `€${price.toLocaleString("nl-BE", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

interface MappingTableProps {
  rows: ProductMappingRow[];
  filter: MappingStatus | "all" | "issues";
  basePath: string;
  shopifyDomain: string | null;
}

function applyFilter(
  rows: ProductMappingRow[],
  filter: MappingStatus | "all" | "issues"
): ProductMappingRow[] {
  if (filter === "all") return rows;
  if (filter === "issues") {
    // auto_split is good (push will succeed); "issues" only flags actual problems.
    return rows.filter((r) => r.status !== "matched" && r.status !== "auto_split");
  }
  return rows.filter((r) => r.status === filter);
}

export function MappingTable({
  rows,
  filter,
  basePath,
  shopifyDomain,
}: MappingTableProps) {
  const filtered = applyFilter(rows, filter);

  const filterChips: Array<{
    key: MappingStatus | "all" | "issues";
    label: string;
    count: number;
    tone?: string;
  }> = [
    { key: "all", label: "All", count: rows.length },
    {
      key: "issues",
      label: "Issues only",
      count: rows.filter((r) => r.status !== "matched" && r.status !== "auto_split").length,
      tone: "rose",
    },
    {
      key: "mismatch",
      label: "Mismatched",
      count: rows.filter((r) => r.status === "mismatch").length,
      tone: "rose",
    },
    {
      key: "shopify_only",
      label: "Shopify only",
      count: rows.filter((r) => r.status === "shopify_only").length,
      tone: "amber",
    },
    {
      key: "ls_only",
      label: "Lightspeed only",
      count: rows.filter((r) => r.status === "ls_only").length,
      tone: "blue",
    },
    {
      key: "auto_split",
      label: "Auto-split",
      count: rows.filter((r) => r.status === "auto_split").length,
      tone: "emerald",
    },
    {
      key: "matched",
      label: "Matched",
      count: rows.filter((r) => r.status === "matched").length,
      tone: "emerald",
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-2">
        {filterChips.map((c) => {
          const active = filter === c.key;
          const toneClass = active
            ? "bg-foreground text-background"
            : c.tone === "rose"
              ? "border border-rose-500/20 bg-rose-500/5 text-rose-700 hover:bg-rose-500/10"
              : c.tone === "amber"
                ? "border border-amber-500/20 bg-amber-500/5 text-amber-700 hover:bg-amber-500/10"
                : c.tone === "blue"
                  ? "border border-blue-500/20 bg-blue-500/5 text-blue-700 hover:bg-blue-500/10"
                  : c.tone === "emerald"
                    ? "border border-emerald-500/20 bg-emerald-500/5 text-emerald-700 hover:bg-emerald-500/10"
                    : "border border-border bg-card text-muted-foreground hover:text-foreground";

          return (
            <Link
              key={c.key}
              href={c.key === "all" ? basePath : `${basePath}?filter=${c.key}`}
              className={cn(
                "inline-flex h-8 items-center gap-2 rounded-full px-3 text-[12px] font-medium",
                toneClass
              )}
            >
              {c.label}
              <span className="rounded-full bg-current/10 px-1.5 py-0.5 text-[11px] tabular-nums opacity-70">
                {c.count.toLocaleString("nl-BE")}
              </span>
            </Link>
          );
        })}
      </div>

      <div className="card-elevated overflow-hidden rounded-2xl border border-border bg-card">
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <div className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
            <span className="tabular-nums">{filtered.length}</span> of{" "}
            <span className="tabular-nums">{rows.length}</span> shown
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-[13px]">
            <thead>
              <tr className="border-b border-border bg-muted/30 text-[10.5px] uppercase tracking-wider text-muted-foreground">
                <th className="px-5 py-2.5 text-left font-medium">SKU / PLU</th>
                <th className="px-3 py-2.5 text-left font-medium">Shopify product</th>
                <th className="px-3 py-2.5 text-right font-medium">Shopify €</th>
                <th className="px-3 py-2.5 text-left font-medium">Lightspeed product</th>
                <th className="px-3 py-2.5 text-right font-medium">LS €</th>
                <th className="px-5 py-2.5 text-left font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-5 py-12 text-center">
                    <div className="text-[13px] font-medium text-foreground">
                      No products match this filter
                    </div>
                    <p className="mt-1 text-[12px] text-muted-foreground">
                      {filter === "matched"
                        ? "No matched products yet."
                        : "Try a different filter."}
                    </p>
                  </td>
                </tr>
              )}
              {filtered.map((row) => {
                const cfg = STATUS_CONFIG[row.status];
                const shopifyAdminUrl =
                  row.shopify && shopifyDomain
                    ? `https://${shopifyDomain}/admin/products/${row.shopify.product_id}`
                    : null;

                return (
                  <tr
                    key={row.sku}
                    className="border-b border-border/60 last:border-b-0 hover:bg-muted/30"
                  >
                    <td className="px-5 py-3 font-mono text-[12px] font-medium">
                      {row.sku ? (
                        <div className="flex flex-col gap-0.5">
                          <span>{row.sku}</span>
                          {row.status === "auto_split" && (
                            <span className="inline-flex items-center gap-1 text-[10.5px] font-normal text-emerald-700 dark:text-emerald-400">
                              <Split className="h-2.5 w-2.5" />
                              → {row.base_plu}
                              {row.modifier_codes.length > 0 && (
                                <span className="opacity-70">
                                  {" "}+ {row.modifier_codes.join(" + ")}
                                </span>
                              )}
                            </span>
                          )}
                        </div>
                      ) : (
                        <span className="text-muted-foreground italic">
                          (no SKU)
                        </span>
                      )}
                    </td>
                    <td className="px-3 py-3">
                      {row.shopify ? (
                        <div className="flex flex-col">
                          {shopifyAdminUrl ? (
                            <a
                              href={shopifyAdminUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-medium hover:underline"
                            >
                              {row.shopify.product_title}
                            </a>
                          ) : (
                            <span className="font-medium">
                              {row.shopify.product_title}
                            </span>
                          )}
                          {row.shopify.variant_title !== "Default Title" && (
                            <span className="text-[11px] text-muted-foreground">
                              {row.shopify.variant_title}
                            </span>
                          )}
                        </div>
                      ) : (
                        <span className="text-muted-foreground">—</span>
                      )}
                    </td>
                    <td className="px-3 py-3 text-right tabular-nums">
                      {row.shopify ? (
                        <span>{eur(row.shopify.price)}</span>
                      ) : (
                        <span className="text-muted-foreground">—</span>
                      )}
                    </td>
                    <td className="px-3 py-3">
                      {row.lightspeed ? (
                        <div className="flex flex-col">
                          <span className="font-medium">{row.lightspeed.name}</span>
                          {row.mismatch_reasons.includes("name_differs") && (
                            <span className="text-[10.5px] text-muted-foreground italic">
                              receipt name differs from Shopify
                            </span>
                          )}
                          {!row.lightspeed.visible && (
                            <span className="text-[10.5px] text-muted-foreground">
                              hidden in POS
                            </span>
                          )}
                        </div>
                      ) : (
                        <span className="text-muted-foreground">—</span>
                      )}
                    </td>
                    <td className="px-3 py-3 text-right tabular-nums">
                      {row.lightspeed ? (
                        <div className="flex flex-col items-end">
                          <span>{eur(row.lightspeed.price)}</span>
                          {row.mismatch_reasons.includes("price_differs") && row.shopify && (
                            <span className="text-[10.5px] text-muted-foreground italic">
                              push uses {eur(Math.max(row.shopify.price, row.lightspeed.price))}
                            </span>
                          )}
                        </div>
                      ) : (
                        <span className="text-muted-foreground">—</span>
                      )}
                    </td>
                    <td className="px-5 py-3">
                      <span
                        className={cn(
                          "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-medium",
                          cfg.tone
                        )}
                      >
                        {cfg.icon}
                        {cfg.label}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
