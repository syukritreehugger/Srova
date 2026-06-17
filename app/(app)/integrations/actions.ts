'use server';

import { revalidatePath } from 'next/cache';
import { headers } from 'next/headers';
import { createClient } from '@/lib/supabase/server';
import { LOCATIONS, type LocationKey } from '@/lib/constants';

const VALID_KEYS = new Set<string>(LOCATIONS.map((l) => l.key));

async function assertManagement(): Promise<
  { ok: true } | { ok: false; error: string }
> {
  if (
    process.env['NEXT_PUBLIC_DEV_SKIP_AUTH'] === '1' &&
    process.env.NODE_ENV !== 'production'
  ) {
    return { ok: true };
  }
  const sb = await createClient();
  const {
    data: { user },
  } = await sb.auth.getUser();
  if (!user) return { ok: false, error: 'Not authenticated' };

  const role =
    (user.app_metadata?.['role'] as string | undefined) ?? 'management';
  if (role !== 'management' && role !== 'admin') {
    return { ok: false, error: 'Insufficient role' };
  }

  const hdrs = await headers();
  if (hdrs.get('origin') === null) {
    return { ok: false, error: 'Missing Origin header' };
  }
  return { ok: true };
}

export async function setLocationActive(
  locationKey: LocationKey,
  active: boolean
): Promise<{ ok: true } | { ok: false; error: string }> {
  if (!VALID_KEYS.has(locationKey)) {
    return { ok: false, error: 'Invalid location_key' };
  }

  const auth = await assertManagement();
  if (!auth.ok) return auth;

  const sb = await createClient();
  const { error } = await sb
    .from('dim_location')
    .update({ is_active: active })
    .eq('location_key', locationKey);

  if (error) return { ok: false, error: error.message };

  revalidatePath('/integrations');
  revalidatePath('/settings');
  revalidatePath('/');
  return { ok: true };
}

export async function setDeliverectMode(
  locationKey: LocationKey,
  active: boolean
): Promise<{ ok: true } | { ok: false; error: string }> {
  if (!VALID_KEYS.has(locationKey)) {
    return { ok: false, error: 'Invalid location_key' };
  }

  const auth = await assertManagement();
  if (!auth.ok) return auth;

  const sb = await createClient();
  const { error } = await sb
    .from('dim_location')
    .update({ deliverect_active: active })
    .eq('location_key', locationKey);

  if (error) return { ok: false, error: error.message };

  revalidatePath('/integrations');
  revalidatePath('/');
  return { ok: true };
}
