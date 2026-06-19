import { NextResponse } from 'next/server';
import { createServiceClient } from '@/lib/supabase/service';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function GET() {
  const sb = createServiceClient();

  const orphanCheck = await sb.rpc('check_orphan_raw_orders' as never);
  const orphans =
    Array.isArray(orphanCheck.data) && orphanCheck.data.length > 0
      ? (orphanCheck.data[0] as { alerts_created: number; alerts_found: number })
      : { alerts_created: 0, alerts_found: 0 };

  const dbPing = await sb
    .from('dim_location')
    .select('location_key', { head: true, count: 'exact' });

  const healthy = !orphanCheck.error && !dbPing.error;

  return NextResponse.json(
    {
      status: healthy ? 'ok' : 'degraded',
      ts: new Date().toISOString(),
      db: { reachable: !dbPing.error, error: dbPing.error?.message ?? null },
      reconciliation: {
        orphans_found: orphans.alerts_found,
        alerts_created: orphans.alerts_created,
        error: orphanCheck.error
          ? (orphanCheck.error as { message?: string }).message ?? 'rpc_error'
          : null,
      },
    },
    { status: healthy ? 200 : 503 },
  );
}
