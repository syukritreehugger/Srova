'use client';

import { useState, useTransition } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { deleteDsar, exportDsar, type DsarExportResult } from '../actions';

export function DsarForm() {
  const [email, setEmail] = useState('');
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const [exportResult, setExportResult] =
    useState<DsarExportResult | null>(null);
  const [deleteMsg, setDeleteMsg] = useState<string | null>(null);

  function runExport() {
    setError(null);
    setExportResult(null);
    setDeleteMsg(null);
    startTransition(async () => {
      const r = await exportDsar(email);
      if (!r.ok) setError(r.error);
      else setExportResult(r.data);
    });
  }

  function runDelete() {
    setError(null);
    setExportResult(null);
    setDeleteMsg(null);
    startTransition(async () => {
      const r = await deleteDsar(email);
      if (!r.ok) setError(r.error);
      else setDeleteMsg(`Redacted ${r.redacted} canonical orders.`);
    });
  }

  function downloadJson() {
    if (!exportResult) return;
    const blob = new Blob([JSON.stringify(exportResult, null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `dsar-${email}-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="card-elevated rounded-2xl border border-border bg-card p-5">
      <div className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
        New DSAR request
      </div>

      <div className="mt-4 flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Customer email</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="customer@example.be"
          />
        </div>

        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        {deleteMsg && (
          <Alert>
            <AlertDescription>{deleteMsg}</AlertDescription>
          </Alert>
        )}

        <div className="flex flex-wrap gap-2">
          <Button disabled={pending || !email} onClick={runExport}>
            {pending ? 'Working…' : 'Export data'}
          </Button>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive" disabled={pending || !email}>
                Delete (redact)
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Confirm DSAR deletion</AlertDialogTitle>
                <AlertDialogDescription>
                  Customer fields (name, email, phone, address) will be replaced
                  with [REDACTED] across all canonical orders for{' '}
                  <span className="font-mono">{email}</span>. This is
                  irreversible. The redaction is audit-logged.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={runDelete}>
                  Redact data
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>

        {exportResult && (
          <div className="mt-3 rounded-xl border border-border bg-background p-4">
            <div className="flex items-center justify-between">
              <div className="text-[12.5px]">
                <div className="font-semibold">Export ready</div>
                <div className="text-muted-foreground">
                  {exportResult.canonical_orders.length} orders ·{' '}
                  {exportResult.order_state_history.length} state events ·{' '}
                  {exportResult.audit_log.length} audit rows
                </div>
              </div>
              <Button size="sm" onClick={downloadJson}>
                Download JSON
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
