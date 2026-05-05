'use client';

import { useState, useTransition } from 'react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { LOCATIONS } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { toggleSnooze } from '../actions';

export function SnoozeRow({
  locationKey,
  plu,
  itemName,
  available: initialAvailable,
  snoozedUntil,
}: {
  locationKey: string;
  plu: string;
  itemName: string;
  available: boolean;
  snoozedUntil: string | null;
}) {
  const [available, setAvailable] = useState(initialAvailable);
  const [pending, startTransition] = useTransition();

  function toggle(next: boolean) {
    startTransition(async () => {
      const r = await toggleSnooze(
        locationKey,
        plu,
        itemName,
        next,
        next ? null : new Date(Date.now() + 60 * 60 * 1000).toISOString()
      );
      if ('error' in r) setAvailable(initialAvailable);
      else setAvailable(next);
    });
  }

  const locName =
    LOCATIONS.find((l) => l.key === locationKey)?.name ?? locationKey;

  return (
    <tr className="border-b border-border/60 last:border-b-0 hover:bg-muted/30">
      <td className="px-5 py-3 font-mono text-[12px] tabular-nums">{plu}</td>
      <td className="px-3 py-3 font-medium">{itemName}</td>
      <td className="px-3 py-3 text-muted-foreground">{locName}</td>
      <td className="px-3 py-3">
        <span
          className={cn(
            'inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium',
            available
              ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400'
              : 'bg-rose-500/10 text-rose-700 dark:text-rose-400'
          )}
        >
          {available ? 'Available' : 'Snoozed'}
        </span>
      </td>
      <td className="px-3 py-3 tabular-nums text-muted-foreground text-[11.5px]">
        {snoozedUntil ? new Date(snoozedUntil).toLocaleString('nl-BE') : '—'}
      </td>
      <td className="px-5 py-3 text-right">
        <Switch
          checked={available}
          disabled={pending}
          onCheckedChange={(next) => toggle(Boolean(next))}
          aria-label={`Toggle ${plu}`}
        />
      </td>
    </tr>
  );
}
