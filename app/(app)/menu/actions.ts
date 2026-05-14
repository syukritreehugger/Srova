'use server';

import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';

export async function updateTakeawayPluMapping(
  id: number,
  ls_plu: string,
  ls_product_name: string
) {
  if (!ls_plu) throw new Error('ls_plu is required');

  const supabase = await createClient();
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
  revalidatePath('/menu');
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
