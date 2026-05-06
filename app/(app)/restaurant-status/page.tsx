import { PageHeader } from '@/components/dashboard/page-header';
import { OnDevBadge } from '@/components/dashboard/on-dev-badge';
import { createClient } from '@/lib/supabase/server';
import { LOCATIONS, type LocationKey } from '@/lib/constants';
import { StatusCard } from './_components/status-card';

export default async function RestaurantStatusPage({
  searchParams,
}: {
  searchParams: Promise<{ loc?: string }>;
}) {
  const { loc: rawLoc } = await searchParams;
  const loc = (rawLoc as LocationKey | undefined) ?? undefined;

  const supabase = await createClient();
  let query = supabase
    .from('restaurant_status')
    .select('location_key, online, reason, updated_at');
  if (loc) query = query.eq('location_key', loc);
  const { data } = await query;

  const byKey = new Map<string, { online: boolean; reason: string | null; updated_at: string }>();
  for (const r of data ?? []) byKey.set(r.location_key, r);

  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        eyebrow="Operations"
        title="Restaurant online / offline"
        description="Toggle order intake per location. Offline = new orders rejected at ingestion. Use during kitchen overload, brief closures, or emergencies."
      />

      <OnDevBadge
        variant="banner"
        reason="The online/offline toggle is not connected to order intake yet. To stop receiving Shopify orders, use the pause controls in your Shopify Admin."
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {(loc ? LOCATIONS.filter((l) => l.key === loc) : LOCATIONS).map((loc_item) => {
          const s = byKey.get(loc_item.key) ?? {
            online: true,
            reason: null,
            updated_at: '',
          };
          return (
            <StatusCard
              key={loc_item.key}
              locationKey={loc_item.key}
              locationName={loc_item.name}
              city={loc_item.city}
              online={s.online}
              reason={s.reason}
              updatedAt={s.updated_at}
            />
          );
        })}
      </div>
    </div>
  );
}
