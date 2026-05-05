'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';

export type StatusActionResult = { error: string } | { ok: true };

export async function toggleRestaurantStatus(
  locationKey: string,
  online: boolean,
  reason: string | null
): Promise<StatusActionResult> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect('/login');

  const { error } = await supabase.from('restaurant_status').upsert(
    {
      location_key: locationKey,
      online,
      reason: online ? null : reason ?? null,
      changed_by: user.id,
      updated_at: new Date().toISOString(),
    },
    { onConflict: 'location_key' }
  );

  if (error) return { error: error.message };
  revalidatePath('/restaurant-status');
  return { ok: true };
}
