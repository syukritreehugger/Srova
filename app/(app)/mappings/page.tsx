import { AlertTriangle, Plus, Search } from "lucide-react"
import { OnDevBadge } from "@/components/dashboard/on-dev-badge"
import { PageHeader } from "@/components/dashboard/page-header"
import { Button } from "@/components/ui/button"

const MAPPINGS = [
  { plu: "1001", name: "Frietje klein", shopify: "44217981", takeaway: "tw_001", locations: ["T", "FB", "FC"] },
  { plu: "1002", name: "Frietje middel", shopify: "44217982", takeaway: "tw_002", locations: ["T", "FB", "FC"] },
  { plu: "1003", name: "Frietje groot", shopify: "44217983", takeaway: "tw_003", locations: ["T", "FB", "FC"] },
  { plu: "2014", name: "Mexicano", shopify: "44218104", takeaway: "tw_204", locations: ["T", "FB", "FC"] },
  { plu: "2015", name: "Mexicano XL", shopify: "44218105", takeaway: null, locations: ["T", "FB"] },
  { plu: "2018", name: "Frikandel speciaal", shopify: "44218110", takeaway: "tw_210", locations: ["T", "FB", "FC"] },
  { plu: "3001", name: "Bicky burger", shopify: "44218201", takeaway: "tw_301", locations: ["T", "FC"] },
  { plu: "5022", name: "Saus Andalouse", shopify: "44218501", takeaway: "tw_501", locations: ["T", "FB", "FC"] },
]

const MODIFIER_GROUPS = [
  { id: "mg_sauce", name: "Saus", lsId: 1001, count: 12, locations: 3 },
  { id: "mg_size", name: "Maat", lsId: 1002, count: 3, locations: 3 },
  { id: "mg_extras", name: "Extras", lsId: 1003, count: 8, locations: 3 },
  { id: "mg_drink", name: "Drank", lsId: 1004, count: 14, locations: 3 },
]

export default function MappingsPage() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        eyebrow="Mapping engine"
        title="Product & modifier mappings"
        description="The translation layer. Every Shopify variant ID and Takeaway item ID is bound to a Lightspeed PLU. Drift here breaks orders silently — we surface it loudly."
        actions={
          <Button size="sm" disabled className="h-9 gap-2 rounded-full text-[12.5px]">
            <Plus className="h-3.5 w-3.5" />
            New mapping
          </Button>
        }
      />

      <OnDevBadge
        variant="banner"
        reason="The product_mapping + modifier_mapping tables (RFC-007 / F44) are pending migration. Phase 1 Shopify→LS push currently uses inline PLU mapping in the n8n workflow. UI CRUD lands once the tables are migrated and the n8n flow reads them as the source of truth."
      />

      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "Mapped products", value: "142", sub: "across 3 locations" },
          { label: "Unmapped Shopify", value: "1", sub: "needs operator", warn: true },
          { label: "Unmapped Takeaway", value: "3", sub: "needs operator", warn: true },
        ].map((s) => (
          <div key={s.label} className="card-elevated rounded-2xl border border-border bg-card p-4">
            <div className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">{s.label}</div>
            <div className="mt-1 flex items-baseline gap-2">
              <span
                className={
                  s.warn
                    ? "text-[26px] font-semibold tracking-tight tabular-nums text-amber-700"
                    : "text-[26px] font-semibold tracking-tight tabular-nums"
                }
              >
                {s.value}
              </span>
              {s.warn && <AlertTriangle className="h-3.5 w-3.5 text-amber-600" />}
            </div>
            <div className="mt-1 text-[11.5px] text-muted-foreground">{s.sub}</div>
          </div>
        ))}
      </div>

      <div className="card-elevated overflow-hidden rounded-2xl border border-border bg-card">
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
              Product mappings
            </div>
          </div>
          <div className="relative">
            <Search className="pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
            <input
              placeholder="Search PLU or item…"
              className="h-8 w-56 rounded-full border border-border bg-background pl-8 pr-3 text-[12px] outline-none focus:border-foreground/30"
            />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-[13px]">
            <thead>
              <tr className="border-b border-border bg-muted/30 text-[10.5px] uppercase tracking-wider text-muted-foreground">
                <th className="px-5 py-2.5 text-left font-medium">L-Series PLU</th>
                <th className="px-3 py-2.5 text-left font-medium">Item</th>
                <th className="px-3 py-2.5 text-left font-medium">Shopify variant</th>
                <th className="px-3 py-2.5 text-left font-medium">Takeaway item</th>
                <th className="px-5 py-2.5 text-left font-medium">Locations</th>
              </tr>
            </thead>
            <tbody>
              {MAPPINGS.map((m) => (
                <tr key={m.plu} className="border-b border-border/60 last:border-b-0 hover:bg-muted/30">
                  <td className="px-5 py-3 font-mono text-[12px] tabular-nums">{m.plu}</td>
                  <td className="px-3 py-3 font-medium">{m.name}</td>
                  <td className="px-3 py-3 font-mono text-[11.5px] text-muted-foreground">{m.shopify}</td>
                  <td className="px-3 py-3 font-mono text-[11.5px]">
                    {m.takeaway ? (
                      <span className="text-muted-foreground">{m.takeaway}</span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-amber-700">
                        <AlertTriangle className="h-3 w-3" /> unmapped
                      </span>
                    )}
                  </td>
                  <td className="px-5 py-3">
                    <div className="flex gap-1">
                      {m.locations.map((l) => (
                        <span
                          key={l}
                          className="inline-flex h-5 w-7 items-center justify-center rounded-md bg-muted font-mono text-[10px] font-semibold tracking-wider text-muted-foreground"
                        >
                          {l}
                        </span>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="card-elevated overflow-hidden rounded-2xl border border-border bg-card">
        <div className="border-b border-border px-5 py-4">
          <div className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">Modifier groups</div>
          <div className="mt-0.5 text-[14px] font-medium">
            {MODIFIER_GROUPS.length} <span className="text-muted-foreground">groups · 37 modifiers</span>
          </div>
        </div>
        <ul className="divide-y divide-border">
          {MODIFIER_GROUPS.map((g) => (
            <li key={g.id} className="flex items-center justify-between px-5 py-3.5">
              <div>
                <div className="text-[13px] font-medium">{g.name}</div>
                <div className="mt-0.5 text-[11px] text-muted-foreground">
                  L-Series ID <span className="font-mono">{g.lsId}</span> · {g.count} options · {g.locations} locations
                </div>
              </div>
              <Button variant="outline" size="sm" className="h-7 rounded-full text-[11.5px] bg-transparent">
                Edit
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
