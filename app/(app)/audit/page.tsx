import { PageHeader } from '@/components/dashboard/page-header';
import { OnDevBadge } from '@/components/dashboard/on-dev-badge';

export default function AuditPage() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        eyebrow="Compliance"
        title="Audit log"
        description="Append-only log of every operator action: DLQ retries, payload edits, status toggles, opening hours changes, DSAR requests."
      />

      <OnDevBadge
        variant="banner"
        reason="The audit log is still being set up. Once ready, every operator action (retries, edits, toggles) will be tracked here automatically."
      />

      <div className="card-elevated rounded-2xl border border-dashed border-border bg-card p-10 text-center">
        <div className="text-[12.5px] text-muted-foreground">
          Audit log surface not yet active.
        </div>
      </div>
    </div>
  );
}
