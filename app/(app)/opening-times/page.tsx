import { PageHeader } from '@/components/dashboard/page-header';
import { OnDevBadge } from '@/components/dashboard/on-dev-badge';
import { createClient } from '@/lib/supabase/server';
import { LOCATIONS, type LocationKey } from '@/lib/constants';
import { HoursForm } from './_components/hours-form';

const DOW_LABEL = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default async function OpeningTimesPage({
  searchParams,
}: {
  searchParams: Promise<{ loc?: string }>;
}) {
  const { loc: rawLoc } = await searchParams;
  const loc = (rawLoc as LocationKey | undefined) ?? undefined;

  const supabase = await createClient();

  let query = supabase
    .from('opening_times')
    .select('location_key, day_of_week, open_time, close_time, is_closed');
  if (loc) query = query.eq('location_key', loc);
  const { data: rows } = await query;

  const byLoc = new Map<string, typeof rows>();
  for (const loc of LOCATIONS) byLoc.set(loc.key, []);
  for (const r of rows ?? []) {
    const arr = byLoc.get(r.location_key);
    if (arr) arr.push(r);
  }

  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        eyebrow="Operations"
        title="Opening times"
        description="Per-location weekly schedule. Orders placed outside these hours are scheduled or rejected at ingestion."
      />

      <OnDevBadge
        variant="banner"
        reason="Opening hours set here are not enforced on orders yet. Shopify orders still follow the hours configured in your Shopify shop settings."
      />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {(loc ? LOCATIONS.filter((l) => l.key === loc) : LOCATIONS).map((loc_item) => {
          const days = (byLoc.get(loc_item.key) ?? []).sort(
            (a, b) => a.day_of_week - b.day_of_week
          );
          const initial = Array.from({ length: 7 }, (_, dow) => {
            const found = days.find((d) => d.day_of_week === dow);
            return {
              day_of_week: dow,
              open_time: found?.open_time ?? '11:00',
              close_time: found?.close_time ?? '22:00',
              is_closed: found?.is_closed ?? false,
            };
          });
          return (
            <div
              key={loc_item.key}
              className="card-elevated rounded-2xl border border-border bg-card p-5"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[14px] font-semibold">{loc_item.name}</div>
                  <div className="text-[11.5px] text-muted-foreground">
                    {loc_item.city} · {loc_item.postcode}
                  </div>
                </div>
              </div>
              <HoursForm
                locationKey={loc_item.key}
                initial={initial}
                dowLabels={DOW_LABEL}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
