'use client';

import { useState, useTransition } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { toggleRestaurantStatus } from '../actions';
import { cn } from '@/lib/utils';

export function StatusCard({
  locationKey,
  locationName,
  city,
  online: initialOnline,
  reason: initialReason,
  updatedAt,
}: {
  locationKey: string;
  locationName: string;
  city: string;
  online: boolean;
  reason: string | null;
  updatedAt: string;
}) {
  const [online, setOnline] = useState(initialOnline);
  const [reason, setReason] = useState(initialReason ?? '');
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  function submit(nextOnline: boolean) {
    setError(null);
    startTransition(async () => {
      const r = await toggleRestaurantStatus(
        locationKey,
        nextOnline,
        nextOnline ? null : reason
      );
      if ('error' in r) {
        setError(r.error);
        setOnline(initialOnline);
      } else {
        setOnline(nextOnline);
      }
    });
  }

  return (
    <div
      className={cn(
        'card-elevated rounded-2xl border bg-card p-5',
        online ? 'border-emerald-500/20' : 'border-rose-500/30'
      )}
    >
      <div className="flex items-start justify-between">
        <div>
          <div className="text-[14px] font-semibold">{locationName}</div>
          <div className="text-[11.5px] text-muted-foreground">{city}</div>
        </div>
        <span
          className={cn(
            'inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider',
            online
              ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400'
              : 'bg-rose-500/10 text-rose-700 dark:text-rose-400'
          )}
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-current opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-current" />
          </span>
          {online ? 'Online' : 'Offline'}
        </span>
      </div>

      {error && (
        <Alert variant="destructive" className="mt-3">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="mt-4 flex items-center justify-between rounded-xl border border-border bg-background px-3 py-2">
        <Label htmlFor={`switch-${locationKey}`} className="text-[12.5px]">
          Accepting orders
        </Label>
        <Switch
          id={`switch-${locationKey}`}
          checked={online}
          disabled={pending}
          onCheckedChange={(checked) => submit(Boolean(checked))}
        />
      </div>

      {!online && (
        <div className="mt-3 flex flex-col gap-2">
          <Label htmlFor={`reason-${locationKey}`} className="text-[11.5px]">
            Reason (optional)
          </Label>
          <Input
            id={`reason-${locationKey}`}
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            placeholder="kitchen overload, brief closure, etc."
          />
          <Button
            size="sm"
            variant="outline"
            disabled={pending}
            onClick={() => submit(false)}
          >
            Update reason
          </Button>
        </div>
      )}

      {updatedAt && (
        <div className="mt-3 text-[10.5px] text-muted-foreground">
          Last change: {new Date(updatedAt).toLocaleString('nl-BE')}
        </div>
      )}
    </div>
  );
}
