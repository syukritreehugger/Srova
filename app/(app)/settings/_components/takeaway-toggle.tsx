'use client';

import { useState, useTransition } from 'react';
import { Loader2 } from 'lucide-react';
import { setTakeawayPollerActive } from '../actions';

export function TakeawayToggle({
  initialActive,
  configured,
}: {
  initialActive: boolean | null;
  configured: boolean;
}) {
  const [active, setActive] = useState<boolean | null>(initialActive);
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  if (!configured) {
    return (
      <span className="inline-flex items-center rounded-full bg-muted px-2 py-0.5 text-[10.5px] font-medium text-muted-foreground">
        Not configured
      </span>
    );
  }

  function handleToggle() {
    if (active === null) return;
    const next = !active;
    setError(null);
    startTransition(async () => {
      const res = await setTakeawayPollerActive(next);
      if (res.ok) setActive(next);
      else setError(res.error);
    });
  }

  if (active === null) {
    return (
      <span className="inline-flex items-center rounded-full bg-muted px-2 py-0.5 text-[10.5px] font-medium text-muted-foreground">
        Unknown
      </span>
    );
  }

  return (
    <div className="flex flex-col items-end gap-1">
      <button
        type="button"
        role="switch"
        aria-checked={active}
        disabled={pending}
        onClick={handleToggle}
        title={active ? 'Click to pause poller' : 'Click to activate poller'}
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
      {error ? (
        <span className="text-[10.5px] text-rose-700 dark:text-rose-400 max-w-[200px] text-right">
          {error}
        </span>
      ) : null}
    </div>
  );
}
