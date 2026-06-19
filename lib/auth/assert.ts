import 'server-only';
import { headers } from 'next/headers';
import { createClient } from '@/lib/supabase/server';

export type AssertResult = { ok: true } | { ok: false; error: string };

export async function assertManagement(): Promise<AssertResult> {
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
