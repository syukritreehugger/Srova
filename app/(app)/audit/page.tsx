import { PageHeader } from '@/components/dashboard/page-header';
import { createClient } from '@/lib/supabase/server';
import { LOCATIONS } from '@/lib/constants';

function locName(key: string | null): string {
  if (!key) return '—';
  return LOCATIONS.find((l) => l.key === key)?.name ?? key;
}

export default async function AuditPage({
  searchParams,
}: {
  searchParams: Promise<{ action?: string; actor?: string }>;
}) {
  const sp = await searchParams;
  const supabase = await createClient();

  let q = supabase
    .from('audit_log')
    .select(
      'id, actor_email, action, subject_type, subject_id, location_key, before, after, occurred_at'
    )
    .order('occurred_at', { ascending: false })
    .limit(200);

  if (sp.action) q = q.eq('action', sp.action);
  if (sp.actor) q = q.eq('actor_email', sp.actor);

  const { data } = await q;

  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        eyebrow="Compliance"
        title="Audit log"
        description="Append-only log of every operator action: DLQ retries, payload edits, status toggles, opening hours changes, DSAR requests."
      />

      <div className="card-elevated overflow-hidden rounded-2xl border border-border bg-card">
        <div className="border-b border-border px-5 py-4 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
          {(data ?? []).length} entries
          {sp.action && ` · action: ${sp.action}`}
          {sp.actor && ` · actor: ${sp.actor}`}
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-[13px]">
            <thead>
              <tr className="border-b border-border bg-muted/30 text-[10.5px] uppercase tracking-wider text-muted-foreground">
                <th className="px-5 py-2.5 text-left font-medium">When</th>
                <th className="px-3 py-2.5 text-left font-medium">Actor</th>
                <th className="px-3 py-2.5 text-left font-medium">Action</th>
                <th className="px-3 py-2.5 text-left font-medium">Subject</th>
                <th className="px-3 py-2.5 text-left font-medium">Location</th>
                <th className="px-5 py-2.5 text-left font-medium">Diff</th>
              </tr>
            </thead>
            <tbody>
              {(data ?? []).length === 0 && (
                <tr>
                  <td
                    colSpan={6}
                    className="px-5 py-8 text-center text-[12px] text-muted-foreground"
                  >
                    No audit entries.
                  </td>
                </tr>
              )}
              {(data ?? []).map((r) => (
                <tr
                  key={r.id}
                  className="border-b border-border/60 last:border-b-0 hover:bg-muted/30 align-top"
                >
                  <td className="px-5 py-3 tabular-nums text-muted-foreground text-[11.5px] whitespace-nowrap">
                    {new Date(r.occurred_at).toLocaleString('nl-BE')}
                  </td>
                  <td className="px-3 py-3 text-[12px]">{r.actor_email}</td>
                  <td className="px-3 py-3 font-mono text-[11.5px]">
                    {r.action}
                  </td>
                  <td className="px-3 py-3 font-mono text-[11.5px]">
                    {r.subject_type}#{r.subject_id}
                  </td>
                  <td className="px-3 py-3 text-muted-foreground">
                    {locName(r.location_key)}
                  </td>
                  <td className="px-5 py-3">
                    <details className="cursor-pointer text-[11.5px]">
                      <summary className="text-muted-foreground hover:text-foreground">
                        view
                      </summary>
                      <pre className="mt-2 max-w-md overflow-auto rounded-md border border-border bg-background p-2 font-mono text-[11px]">
                        {JSON.stringify(
                          { before: r.before, after: r.after },
                          null,
                          2
                        )}
                      </pre>
                    </details>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
