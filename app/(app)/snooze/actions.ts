'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';

export type SnoozeActionResult = { error: string } | { ok: true };

export async function toggleSnooze(
  locationKey: string,
  plu: string,
  itemName: string,
  available: boolean,
  snoozeUntil: string | null
): Promise<SnoozeActionResult> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect('/login');

  const { error } = await supabase.from('snooze_items').upsert(
    {
      location_key: locationKey,
      plu,
      item_name: itemName,
      available,
      snoozed_until: available ? null : snoozeUntil ?? null,
      snoozed_by: user.id,
      updated_at: new Date().toISOString(),
    },
    { onConflict: 'location_key,plu' }
  );

  if (error) return { error: error.message };
  revalidatePath('/snooze');
  return { ok: true };
}
