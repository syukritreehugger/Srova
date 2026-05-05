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
        reason="The audit_log table is scheduled for a follow-up migration. For Phase 1, all operator actions on /alerts are written to a temporary console log; full DB-backed audit ships after RFC-009."
      />

      <div className="card-elevated rounded-2xl border border-dashed border-border bg-card p-10 text-center">
        <div className="text-[12.5px] text-muted-foreground">
          Audit log surface not yet active.
        </div>
      </div>
    </div>
  );
}
