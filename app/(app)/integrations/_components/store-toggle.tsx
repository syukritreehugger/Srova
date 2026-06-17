'use client';

import { useState, useTransition } from 'react';
import { AlertTriangle, CheckCircle2, Loader2, Pause, Play } from 'lucide-react';
import type { LocationKey } from '@/lib/constants';
import { setLocationActive } from '../actions';

export function StoreToggle({
  locationKey,
  locationName,
  initialActive,
}: {
  locationKey: LocationKey;
  locationName: string;
  initialActive: boolean;
}) {
  const [active, setActive] = useState(initialActive);
  const [pending, startTransition] = useTransition();
  const [confirming, setConfirming] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handlePause() {
    setError(null);
    startTransition(async () => {
      const res = await setLocationActive(locationKey, false);
      if (res.ok) setActive(false);
      else setError(res.error);
    });
  }

  function handleActivateConfirmed() {
    setConfirming(false);
    setError(null);
    startTransition(async () => {
      const res = await setLocationActive(locationKey, true);
      if (res.ok) setActive(true);
      else setError(res.error);
    });
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between rounded-xl border border-border bg-background px-4 py-3">
        <div className="flex items-center gap-3">
          <span
            className={
              active
                ? 'flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400'
                : 'flex h-9 w-9 items-center justify-center rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-400'
            }
          >
            {active ? <Play className="h-4 w-4" strokeWidth={2.5} /> : <Pause className="h-4 w-4" strokeWidth={2.5} />}
          </span>
          <div>
            <div className="text-[13px] font-semibold">
              {active ? 'Pipeline active' : 'Pipeline paused'}
            </div>
            <div className="mt-0.5 text-[11px] text-muted-foreground">
              {active
                ? 'Orders push to Lightspeed.'
                : 'Orders stored, not pushed to POS.'}
            </div>
          </div>
        </div>
        <button
          type="button"
          role="switch"
          aria-checked={active}
          disabled={pending}
          onClick={() => {
            if (active) handlePause();
            else setConfirming(true);
          }}
          className={
            active
              ? 'relative h-6 w-11 shrink-0 rounded-full bg-foreground transition-colors disabled:opacity-50'
              : 'relative h-6 w-11 shrink-0 rounded-full bg-muted-foreground/30 transition-colors disabled:opacity-50'
          }
        >
          <span
            className={
              active
                ? 'absolute left-[22px] top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-background shadow-sm'
                : 'absolute left-0.5 top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-background shadow-sm'
            }
          >
            {pending ? <Loader2 className="h-3 w-3 animate-spin" /> : null}
          </span>
        </button>
      </div>

      {error ? (
        <div className="rounded-xl border border-rose-500/30 bg-rose-500/5 px-3 py-2 text-[11px] text-rose-700 dark:text-rose-400">
          <span className="font-semibold">Error:</span> {error}
        </div>
      ) : null}

      {confirming ? (
        <div className="rounded-xl border border-amber-500/40 bg-amber-500/5 p-3 text-[11.5px]">
          <div className="flex items-start gap-2 text-amber-800 dark:text-amber-300">
            <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5" />
            <div className="flex-1">
              <div className="font-semibold">Activate {locationName}?</div>
              <div className="mt-1 text-[11px] opacity-90">
                Activating {locationKey} will start pushing its orders to Lightspeed.
                Make sure Deliverect is OFF for this store.
              </div>
              <div className="mt-2.5 flex gap-2">
                <button
                  type="button"
                  onClick={handleActivateConfirmed}
                  disabled={pending}
                  className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-3 py-1.5 text-[11px] font-medium text-background hover:opacity-90 disabled:opacity-50"
                >
                  {pending ? (
                    <Loader2 className="h-3 w-3 animate-spin" />
                  ) : (
                    <CheckCircle2 className="h-3 w-3" />
                  )}
                  Activate
                </button>
                <button
                  type="button"
                  onClick={() => setConfirming(false)}
                  disabled={pending}
                  className="inline-flex items-center rounded-full border border-border px-3 py-1.5 text-[11px] font-medium hover:bg-muted"
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
