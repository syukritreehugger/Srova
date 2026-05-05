import { PageHeader } from '@/components/dashboard/page-header';
import { OnDevBadge } from '@/components/dashboard/on-dev-badge';
import { DsarForm } from './_components/dsar-form';

export default function GdprPage() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        eyebrow="Compliance"
        title="GDPR / DSAR"
        description="Data Subject Access Requests. Export or redact all personal data tied to a customer email. Required to fulfil within 30 days under GDPR Art. 15/17."
      />

      <OnDevBadge
        variant="banner"
        reason="DSAR form (RFC-011 / F73) is functional but the audit_log table backing the request log is pending migration. Use only for design preview — do not submit real customer requests yet."
      />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <DsarForm />
        </div>

        <div className="card-elevated rounded-2xl border border-border bg-card p-5">
          <div className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
            Retention policy
          </div>
          <ul className="mt-3 space-y-2 text-[12.5px]">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
              <span>
                <span className="font-medium">90 days</span> raw payload PII
                (auto-redacted by pg_cron)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
              <span>
                <span className="font-medium">7 years</span> canonical orders
                (Belgian fiscal requirement, customer block redacted on DSAR)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
              <span>
                <span className="font-medium">Audit log</span> retained
                permanently for compliance evidence
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
