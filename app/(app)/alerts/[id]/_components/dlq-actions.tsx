'use client';

import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { RefreshCw, Trash2, Pencil } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { discardDlq, editAndReplay, retryDlq } from '../../actions';

export function DlqActionBar({
  dlqId,
  rawPayload,
  resolved,
}: {
  dlqId: number;
  rawPayload: unknown;
  resolved: boolean;
}) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const [editJson, setEditJson] = useState<string>(
    JSON.stringify(rawPayload ?? {}, null, 2)
  );
  const [reason, setReason] = useState('');
  const [editOpen, setEditOpen] = useState(false);
  const [discardOpen, setDiscardOpen] = useState(false);

  function withResult(promise: Promise<{ ok: boolean; error?: string }>) {
    setError(null);
    startTransition(async () => {
      const r = await promise;
      if (!r.ok) setError(r.error ?? 'Action failed');
      else router.refresh();
    });
  }

  if (resolved) {
    return (
      <div className="rounded-xl border border-border bg-muted/30 px-4 py-3 text-[12.5px] text-muted-foreground">
        This alert is already resolved. No actions available.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="flex flex-wrap gap-2">
        <Button
          size="sm"
          disabled={pending}
          onClick={() => withResult(retryDlq(dlqId))}
          className="gap-2"
        >
          <RefreshCw className="h-3.5 w-3.5" />
          Retry
        </Button>

        <Dialog open={editOpen} onOpenChange={setEditOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm" disabled={pending} className="gap-2">
              <Pencil className="h-3.5 w-3.5" />
              Edit & replay
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Edit payload & replay</DialogTitle>
              <DialogDescription>
                Edit the canonical order JSON. The pipeline will re-process this
                payload from the failed stage.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-2">
              <Label htmlFor="json">Payload (JSON)</Label>
              <Textarea
                id="json"
                value={editJson}
                onChange={(e) => setEditJson(e.target.value)}
                rows={18}
                className="font-mono text-[12px]"
              />
            </div>
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => setEditOpen(false)}
                disabled={pending}
              >
                Cancel
              </Button>
              <Button
                disabled={pending}
                onClick={() => {
                  let parsed: unknown;
                  try {
                    parsed = JSON.parse(editJson);
                  } catch {
                    setError('Invalid JSON');
                    return;
                  }
                  setEditOpen(false);
                  withResult(editAndReplay(dlqId, parsed));
                }}
              >
                Replay
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <Dialog open={discardOpen} onOpenChange={setDiscardOpen}>
          <DialogTrigger asChild>
            <Button variant="destructive" size="sm" disabled={pending} className="gap-2">
              <Trash2 className="h-3.5 w-3.5" />
              Discard
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Discard DLQ entry</DialogTitle>
              <DialogDescription>
                Mark the linked order as cancelled with a reason. Audit-logged.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-2">
              <Label htmlFor="reason">Reason</Label>
              <Textarea
                id="reason"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                rows={3}
                placeholder="e.g. Customer cancelled by phone — confirmed with kitchen"
              />
            </div>
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => setDiscardOpen(false)}
                disabled={pending}
              >
                Cancel
              </Button>
              <Button
                variant="destructive"
                disabled={pending || !reason.trim()}
                onClick={() => {
                  setDiscardOpen(false);
                  withResult(discardDlq(dlqId, reason));
                }}
              >
                Discard
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
