'use server';

import { createClient } from '@/lib/supabase/server';
import { createServiceClient } from '@/lib/supabase/service';
import { revalidatePath } from 'next/cache';

export async function updateTakeawayPluMapping(
  id: number,
  ls_plu: string,
  ls_product_name: string
) {
  if (!ls_plu) throw new Error('ls_plu is required');

  const supabase = await createClient();

  const { data: mapRow, error: fetchErr } = await supabase
    .from('takeaway_plu_map')
    .select('takeaway_name, location_key')
    .eq('id', id)
    .single();

  if (fetchErr) throw new Error(fetchErr.message);

  const { error } = await supabase
    .from('takeaway_plu_map')
    .update({
      ls_plu,
      ls_product_name,
      confirmed_at: new Date().toISOString(),
      auto_matched: false,
    })
    .eq('id', id);

  if (error) throw new Error(error.message);

  // Backfill: update any existing canonical_orders that contain the UNMAPPED:
  // placeholder for this product. Lets the admin retry stuck orders from /alerts.
  const service = createServiceClient();
  const { error: rpcErr } = await service.rpc('takeaway_backfill_plu', {
    p_location_key: mapRow.location_key as string,
    p_takeaway_name: mapRow.takeaway_name as string,
    p_new_plu: ls_plu,
  });

  if (rpcErr) {
    console.error('takeaway_backfill_plu RPC failed:', rpcErr);
  }

  revalidatePath('/menu');
  revalidatePath('/alerts');
}

export async function confirmTakeawayAutoMatch(id: number) {
  const supabase = await createClient();
  const { error } = await supabase
    .from('takeaway_plu_map')
    .update({ confirmed_at: new Date().toISOString() })
    .eq('id', id);

  if (error) throw new Error(error.message);
  revalidatePath('/menu');
}
