import { PageHeader } from '@/components/dashboard/page-header';
import { OnDevBadge } from '@/components/dashboard/on-dev-badge';
import { createClient } from '@/lib/supabase/server';
import { LOCATIONS, type LocationKey } from '@/lib/constants';
import { SnoozeRow } from './_components/snooze-row';

export default async function SnoozePage({
  searchParams,
}: {
  searchParams: Promise<{ loc?: string }>;
}) {
  const { loc: rawLoc } = await searchParams;
  const loc = (rawLoc as LocationKey | undefined) ?? undefined;

  const supabase = await createClient();
  let q = supabase
    .from('snooze_items')
    .select('location_key, plu, item_name, available, snoozed_until, updated_at')
    .order('plu');
  if (loc) q = q.eq('location_key', loc);

  const { data } = await q;

  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        eyebrow="Operations"
        title="Item snooze"
        description="Mark menu items as unavailable temporarily. Snoozed items are rejected at order ingestion across all channels."
      />

      <OnDevBadge
        variant="banner"
        reason="Item snoozing is not active yet. Marking items here won't affect incoming orders. Manage item availability directly in Shopify for now."
      />

      <div className="card-elevated overflow-hidden rounded-2xl border border-border bg-card">
        <div className="border-b border-border px-5 py-4 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
          {(data ?? []).length} items
          {loc && ` · ${LOCATIONS.find((l) => l.key === loc)?.name}`}
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-[13px]">
            <thead>
              <tr className="border-b border-border bg-muted/30 text-[10.5px] uppercase tracking-wider text-muted-foreground">
                <th className="px-5 py-2.5 text-left font-medium">PLU</th>
                <th className="px-3 py-2.5 text-left font-medium">Item</th>
                <th className="px-3 py-2.5 text-left font-medium">Location</th>
                <th className="px-3 py-2.5 text-left font-medium">Status</th>
                <th className="px-3 py-2.5 text-left font-medium">Until</th>
                <th className="px-5 py-2.5 text-right font-medium">Action</th>
              </tr>
            </thead>
            <tbody>
              {(data ?? []).length === 0 && (
                <tr>
                  <td
                    colSpan={6}
                    className="px-5 py-8 text-center text-[12px] text-muted-foreground"
                  >
                    No items configured.
                  </td>
                </tr>
              )}
              {(data ?? []).map((r) => (
                <SnoozeRow
                  key={`${r.location_key}:${r.plu}`}
                  locationKey={r.location_key}
                  plu={r.plu}
                  itemName={r.item_name}
                  available={r.available}
                  snoozedUntil={r.snoozed_until}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
