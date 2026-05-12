import Link from "next/link";
import { RefreshCw } from "lucide-react";
import { PageHeader } from "@/components/dashboard/page-header";
import { Button } from "@/components/ui/button";
import { LOCATIONS, type LocationKey } from "@/lib/constants";
import { getMenuMapping, type MappingStatus } from "@/lib/queries/menu-mapping";
import { MappingStats } from "./_components/mapping-stats";
import { MappingTable } from "./_components/mapping-table";
import { cn } from "@/lib/utils";

const VALID_FILTERS: ReadonlyArray<MappingStatus | "all" | "issues"> = [
  "all",
  "issues",
  "matched",
  "shopify_only",
  "ls_only",
  "mismatch",
];

function isValidFilter(v: string | undefined): v is MappingStatus | "all" | "issues" {
  return !!v && (VALID_FILTERS as ReadonlyArray<string>).includes(v);
}

function timeAgo(iso: string | null): string {
  if (!iso) return "never";
  const m = Math.max(0, Math.round((Date.now() - new Date(iso).getTime()) / 60000));
  if (m < 1) return "just now";
  if (m < 60) return `${m}m ago`;
  const h = Math.round(m / 60);
  if (h < 24) return `${h}h ago`;
  return `${Math.round(h / 24)}d ago`;
}

const SHOPIFY_DOMAIN_BY_LOC: Record<LocationKey, string> = {
  LOC_AALST: "tipzakske.myshopify.com",
  LOC_BERLARE: "frietbooster.myshopify.com",
  LOC_DENDER: "de-frietchalet.myshopify.com",
};

export default async function MenuPage({
  searchParams,
}: {
  searchParams: Promise<{ loc?: string; filter?: string }>;
}) {
  const sp = await searchParams;
  const rawLoc = sp.loc as LocationKey | undefined;
  const loc: LocationKey = rawLoc && LOCATIONS.some((l) => l.key === rawLoc)
    ? rawLoc
    : "LOC_AALST";

  const filter = isValidFilter(sp.filter) ? sp.filter : "all";

  const mapping = await getMenuMapping(loc);

  const locInfo = LOCATIONS.find((l) => l.key === loc)!;
  const shopifyDomain = SHOPIFY_DOMAIN_BY_LOC[loc];

  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        eyebrow="Menu sync · Product mapping"
        title="Shopify SKU ↔ Lightspeed PLU"
        description={`Source of truth: Lightspeed POS catalog. Shopify SKU must match Lightspeed PLU exactly so orders push without errors.`}
        actions={
          <Button
            size="sm"
            asChild
            className="h-9 gap-2 rounded-full text-[13px]"
          >
            <Link href={`/menu?loc=${loc}${filter !== "all" ? `&filter=${filter}` : ""}`}>
              <RefreshCw className="h-3.5 w-3.5" />
              Refresh
            </Link>
          </Button>
        }
      />

      <div className="flex flex-wrap items-center gap-2">
        {LOCATIONS.map((l) => {
          const active = l.key === loc;
          return (
            <Link
              key={l.key}
              href={`/menu?loc=${l.key}${filter !== "all" ? `&filter=${filter}` : ""}`}
              className={cn(
                "inline-flex h-9 items-center gap-2 rounded-full px-4 text-[12.5px] font-medium",
                active
                  ? "bg-foreground text-background"
                  : "border border-border bg-card text-muted-foreground hover:text-foreground"
              )}
            >
              {l.name}
              <span className="text-[11px] opacity-70">{l.city}</span>
            </Link>
          );
        })}

        <div className="ml-auto text-[11.5px] text-muted-foreground">
          Last LS sync: <span className="font-medium text-foreground">{timeAgo(mapping.last_ls_sync)}</span>
          <span className="mx-2">·</span>
          Shopify: <span className="font-mono text-[11px]">{shopifyDomain}</span>
        </div>
      </div>

      {!mapping.shopify_configured && mapping.shopify_error && (
        <div className="rounded-2xl border border-rose-500/30 bg-rose-500/5 p-4 text-[12.5px] text-rose-700 dark:text-rose-400">
          <div className="font-semibold">Shopify connection error</div>
          <div className="mt-1 opacity-90">{mapping.shopify_error}</div>
        </div>
      )}

      <MappingStats
        matched={mapping.matched}
        shopify_only={mapping.shopify_only}
        ls_only={mapping.ls_only}
        mismatch={mapping.mismatch}
        total_shopify={mapping.total_shopify_variants}
        total_lightspeed={mapping.total_ls_products}
      />

      {mapping.shopify_no_sku > 0 && (
        <div className="rounded-2xl border border-amber-500/30 bg-amber-500/5 px-4 py-3 text-[12px] text-amber-800 dark:text-amber-300">
          <span className="font-semibold">
            {mapping.shopify_no_sku} Shopify variant(s) without SKU
          </span>{" "}
          — these can&apos;t be matched to Lightspeed PLU. Set SKU in Shopify Admin to enable mapping.
        </div>
      )}

      <MappingTable
        rows={mapping.rows}
        filter={filter}
        basePath={`/menu?loc=${loc}`}
        shopifyDomain={shopifyDomain}
      />

      <div className="rounded-2xl border border-border bg-muted/30 p-4 text-[11.5px] text-muted-foreground leading-relaxed">
        <span className="font-semibold text-foreground">Bagaimana ini bekerja:</span>{" "}
        SKU di Shopify variant harus persis sama (case-sensitive) dengan PLU di
        Lightspeed product. Kalau order masuk dengan SKU yang tidak ada di
        Lightspeed, push ke POS akan gagal (error 11401). Lightspeed catalog
        di-sync ke Supabase setiap hari via n8n workflow{" "}
        <code className="font-mono text-[11px]">sync_lightspeed_products</code>.
        Shopify products diambil live dari Admin REST API setiap halaman ini di-load.
      </div>
    </div>
  );
}
