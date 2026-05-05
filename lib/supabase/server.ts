import { createServerClient } from '@supabase/ssr';
import { createClient as createSb } from '@supabase/supabase-js';
import { cookies } from 'next/headers';
import type { Database } from '@/types/supabase';

/**
 * Server-side Supabase client.
 *
 * - Production: SSR client tied to user session cookies. RLS enforced as designed.
 * - Local dev (NEXT_PUBLIC_DEV_SKIP_AUTH=1): falls back to service-role key so
 *   queries bypass RLS — otherwise anon role is denied by the
 *   `canonical_orders_default_deny` RESTRICTIVE policy and the dashboard sees
 *   zero rows. Service role NEVER reaches the client (server-only env).
 */
export async function createClient() {
  const cookieStore = await cookies();

  if (process.env['NEXT_PUBLIC_DEV_SKIP_AUTH'] === '1') {
    const serviceKey = process.env['SUPABASE_SERVICE_ROLE_KEY'];
    if (serviceKey) {
      return createSb<Database>(
        process.env['NEXT_PUBLIC_SUPABASE_URL']!,
        serviceKey,
        { auth: { persistSession: false } }
      ) as unknown as ReturnType<typeof createServerClient<Database>>;
    }
  }

  return createServerClient<Database>(
    process.env['NEXT_PUBLIC_SUPABASE_URL']!,
    process.env['NEXT_PUBLIC_SUPABASE_ANON_KEY']!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {
            // Server Component context — cookie writes are no-ops
          }
        },
      },
    }
  );
}
