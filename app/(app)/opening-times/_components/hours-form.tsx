'use client';

import { useState, useTransition } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { upsertOpeningTimes, type DayEntry } from '../actions';

export function HoursForm({
  locationKey,
  initial,
  dowLabels,
}: {
  locationKey: string;
  initial: DayEntry[];
  dowLabels: string[];
}) {
  const [days, setDays] = useState<DayEntry[]>(initial);
  const [pending, startTransition] = useTransition();
  const [msg, setMsg] = useState<{ ok?: true; error?: string } | null>(null);

  function update(i: number, patch: Partial<DayEntry>) {
    setDays((prev) => prev.map((d, idx) => (idx === i ? { ...d, ...patch } : d)));
  }

  function submit() {
    setMsg(null);
    startTransition(async () => {
      const r = await upsertOpeningTimes(locationKey, days);
      setMsg(r);
    });
  }

  return (
    <div className="mt-4 flex flex-col gap-2">
      {msg?.error && (
        <Alert variant="destructive">
          <AlertDescription>{msg.error}</AlertDescription>
        </Alert>
      )}
      {msg?.ok && (
        <Alert>
          <AlertDescription>Saved.</AlertDescription>
        </Alert>
      )}
      <div className="flex flex-col gap-1.5">
        {days.map((d, i) => (
          <div
            key={d.day_of_week}
            className="flex items-center gap-3 rounded-xl border border-border bg-background px-3 py-2"
          >
            <span className="w-10 shrink-0 text-[11.5px] font-medium uppercase tracking-wider text-muted-foreground">
              {dowLabels[d.day_of_week]}
            </span>
            <Input
              type="time"
              value={d.open_time ?? ''}
              disabled={d.is_closed}
              onChange={(e) => update(i, { open_time: e.target.value })}
              className="w-28"
            />
            <span className="text-muted-foreground">–</span>
            <Input
              type="time"
              value={d.close_time ?? ''}
              disabled={d.is_closed}
              onChange={(e) => update(i, { close_time: e.target.value })}
              className="w-28"
            />
            <div className="ml-auto flex items-center gap-2">
              <Switch
                checked={d.is_closed}
                onCheckedChange={(checked) =>
                  update(i, { is_closed: Boolean(checked) })
                }
                aria-label={`${dowLabels[d.day_of_week]} closed`}
              />
              <span className="text-[11.5px] text-muted-foreground">Closed</span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-2">
        <Button size="sm" disabled={pending} onClick={submit}>
          {pending ? 'Saving…' : 'Save'}
        </Button>
      </div>
    </div>
  );
}
