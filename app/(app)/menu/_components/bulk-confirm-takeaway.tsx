'use client';

import { useState, useTransition } from 'react';
import { CheckCheck, Loader2 } from 'lucide-react';
import { confirmAllAutoMatchedTakeaway } from '../actions';
import type { LocationKey } from '@/lib/constants';

export function BulkConfirmTakeaway({
  locationKey,
  autoMatchedCount,
}: {
  locationKey: LocationKey;
  autoMatchedCount: number;
}) {
  const [pending, startTransition] = useTransition();
  const [confirming, setConfirming] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  if (autoMatchedCount === 0) return null;

  function handleConfirm() {
    setResult(null);
    startTransition(async () => {
      const res = await confirmAllAutoMatchedTakeaway(locationKey);
      if (res.ok) {
        setResult(`Confirmed ${res.confirmed} mapping${res.confirmed === 1 ? '' : 's'}`);
        setConfirming(false);
      } else {
        setResult(`Error: ${res.error}`);
      }
    });
  }

  return (
    <div className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-4">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 text-[12.5px] font-semibold text-amber-800 dark:text-amber-300">
            <CheckCheck className="h-3.5 w-3.5" />
            {autoMatchedCount} auto-matched mapping{autoMatchedCount === 1 ? '' : 's'} awaiting confirmation
          </div>
          <p className="mt-1 text-[11.5px] text-amber-800/80 dark:text-amber-300/80 leading-relaxed">
            Srova exact-matched Takeaway product names against the Lightspeed catalog (case-insensitive).
            Review individual rows below, or confirm all at once.
          </p>
        </div>
        {!confirming ? (
          <button
            type="button"
            onClick={() => setConfirming(true)}
            disabled={pending}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-amber-600 px-3 py-1.5 text-[11.5px] font-medium text-white hover:bg-amber-700 disabled:opacity-50"
          >
            Confirm all {autoMatchedCount}
          </button>
        ) : null}
      </div>

      {confirming ? (
        <div className="mt-3 flex items-center gap-2 border-t border-amber-500/20 pt-3 text-[11.5px]">
          <span className="text-amber-800 dark:text-amber-300">
            Confirm all {autoMatchedCount} auto-matched mappings as trusted?
          </span>
          <button
            type="button"
            onClick={handleConfirm}
            disabled={pending}
            className="inline-flex items-center gap-1 rounded-full bg-amber-600 px-2.5 py-1 text-[11px] font-medium text-white hover:bg-amber-700 disabled:opacity-50"
          >
            {pending ? <Loader2 className="h-3 w-3 animate-spin" /> : null}
            Yes, confirm all
          </button>
          <button
            type="button"
            onClick={() => setConfirming(false)}
            disabled={pending}
            className="inline-flex items-center rounded-full border border-border bg-background px-2.5 py-1 text-[11px] font-medium hover:bg-muted"
          >
            Cancel
          </button>
        </div>
      ) : null}

      {result ? (
        <div className="mt-3 border-t border-amber-500/20 pt-3 text-[11.5px] font-medium text-emerald-700 dark:text-emerald-400">
          {result}
        </div>
      ) : null}
    </div>
  );
}
