'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';

export type OpeningTimesActionResult = { error: string } | { ok: true };

export interface DayEntry {
  day_of_week: number;
  open_time: string | null;
  close_time: string | null;
  is_closed: boolean;
}

export async function upsertOpeningTimes(
  locationKey: string,
  days: DayEntry[]
): Promise<OpeningTimesActionResult> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect('/login');

  const rows = days.map((d) => ({
    location_key: locationKey,
    day_of_week: d.day_of_week,
    open_time: d.is_closed ? null : d.open_time ?? null,
    close_time: d.is_closed ? null : d.close_time ?? null,
    is_closed: d.is_closed,
    changed_by: user.id,
    updated_at: new Date().toISOString(),
  }));

  const { error } = await supabase
    .from('opening_times')
    .upsert(rows, { onConflict: 'location_key,day_of_week' });

  if (error) return { error: error.message };
  revalidatePath('/opening-times');
  return { ok: true };
}
