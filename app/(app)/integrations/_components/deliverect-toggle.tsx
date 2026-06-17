'use client';

import { useState, useTransition } from 'react';
import { Loader2, AlertTriangle } from 'lucide-react';
import { setDeliverectMode } from '../actions';
import type { LocationKey } from '@/lib/constants';

export function DeliverectToggle({
  locationKey,
  initialActive,
}: {
  locationKey: LocationKey;
  initialActive: boolean;
}) {
  const [active, setActive] = useState(initialActive);
  const [pending, startTransition] = useTransition();
  const [confirming, setConfirming] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleToggle() {
    setError(null);
    if (!active) {
      // Activating Deliverect mode = yielding Srova push — confirm first.
      setConfirming(true);
      return;
    }
    // Deactivating = back to Srova push, instant.
    startTransition(async () => {
      const res = await setDeliverectMode(locationKey, false);
      if (res.ok) setActive(false);
      else setError(res.error);
    });
  }

  function handleConfirmActivate() {
    setConfirming(false);
    setError(null);
    startTransition(async () => {
      const res = await setDeliverectMode(locationKey, true);
      if (res.ok) setActive(true);
      else setError(res.error);
    });
  }

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between rounded-lg border border-border bg-background/50 px-3 py-2">
        <div className="flex items-center gap-2 text-[11.5px]">
          <span
            className={
              active
                ? 'inline-block h-1.5 w-1.5 rounded-full bg-amber-500'
                : 'inline-block h-1.5 w-1.5 rounded-full bg-zinc-400'
            }
          />
          <span className="font-medium">Deliverect mode</span>
          <span className="text-muted-foreground">
            {active ? '· Srova yielding' : '· Srova primary'}
          </span>
        </div>
        <button
          type="button"
          role="switch"
          aria-checked={active}
          disabled={pending}
          onClick={handleToggle}
          className={
            active
              ? 'relative h-5 w-9 shrink-0 rounded-full bg-amber-500 transition-colors disabled:opacity-50'
              : 'relative h-5 w-9 shrink-0 rounded-full bg-muted-foreground/30 transition-colors disabled:opacity-50'
          }
        >
          <span
            className={
              active
                ? 'absolute left-[18px] top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-background shadow-sm'
                : 'absolute left-0.5 top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-background shadow-sm'
            }
          >
            {pending ? <Loader2 className="h-2.5 w-2.5 animate-spin" /> : null}
          </span>
        </button>
      </div>

      {error ? (
        <div className="rounded-lg border border-rose-500/30 bg-rose-500/5 px-3 py-1.5 text-[11px] text-rose-700 dark:text-rose-400">
          {error}
        </div>
      ) : null}

      {confirming ? (
        <div className="rounded-lg border border-amber-500/40 bg-amber-500/5 p-3 text-[11.5px]">
          <div className="flex items-start gap-2 text-amber-800 dark:text-amber-300">
            <AlertTriangle className="h-3.5 w-3.5 shrink-0 mt-0.5" />
            <div className="flex-1">
              <div className="font-semibold">Yield to Deliverect for {locationKey}?</div>
              <div className="mt-1 text-[11px] opacity-90">
                Srova will <strong>skip pushing</strong> orders to Lightspeed POS and
                Shipday for this store — Deliverect handles dispatch instead. Audit log
                still captures every yielded order. Toggle back when ready to cut over.
              </div>
              <div className="mt-2 flex gap-2">
                <button
                  type="button"
                  onClick={handleConfirmActivate}
                  disabled={pending}
                  className="inline-flex items-center gap-1 rounded-full bg-amber-600 px-2.5 py-1 text-[11px] font-medium text-white hover:bg-amber-700 disabled:opacity-50"
                >
                  Yes, yield
                </button>
                <button
                  type="button"
                  onClick={() => setConfirming(false)}
                  disabled={pending}
                  className="inline-flex items-center rounded-full border border-border px-2.5 py-1 text-[11px] font-medium hover:bg-muted"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
