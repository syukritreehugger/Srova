import { PageHeader } from '@/components/dashboard/page-header';
import { OnDevBadge } from '@/components/dashboard/on-dev-badge';
import { createClient } from '@/lib/supabase/server';
import { LOCATIONS } from '@/lib/constants';
import { StatusCard } from './_components/status-card';

export default async function RestaurantStatusPage() {
  const supabase = await createClient();
  const { data } = await supabase
    .from('restaurant_status')
    .select('location_key, online, reason, updated_at');

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
        reason="Online/offline toggle (F38) ships with Phase 2 — JET Connect. For Phase 1, Shopify intake is controlled in Shopify Admin directly."
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {LOCATIONS.map((loc) => {
          const s = byKey.get(loc.key) ?? {
            online: true,
            reason: null,
            updated_at: '',
          };
          return (
            <StatusCard
              key={loc.key}
              locationKey={loc.key}
              locationName={loc.name}
              city={loc.city}
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
