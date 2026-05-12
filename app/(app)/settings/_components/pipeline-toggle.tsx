'use client';

import { useState, useTransition } from 'react';
import { AlertTriangle, CheckCircle2, Loader2, Pause, Play } from 'lucide-react';
import { setPipelineActive } from '../actions';

export function PipelineToggle({
  initialActive,
  configured,
  configError,
}: {
  initialActive: boolean;
  configured: boolean;
  configError?: string | null;
}) {
  const [active, setActive] = useState(initialActive);
  const [pending, startTransition] = useTransition();
  const [confirmingActivate, setConfirmingActivate] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleDeactivate() {
    setError(null);
    startTransition(async () => {
      const res = await setPipelineActive(false);
      if (res.ok) setActive(false);
      else setError(res.error);
    });
  }

  function handleActivateConfirmed() {
    setConfirmingActivate(false);
    setError(null);
    startTransition(async () => {
      const res = await setPipelineActive(true);
      if (res.ok) setActive(true);
      else setError(res.error);
    });
  }

  if (!configured) {
    return (
      <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-4 text-[12px] text-amber-800 dark:text-amber-300">
        <div className="flex items-start gap-2">
          <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5" />
          <div>
            <div className="font-semibold">n8n API belum dikonfigurasi</div>
            <div className="mt-1 text-[11.5px] opacity-90">
              Set <code className="font-mono">N8N_API_URL</code> dan{' '}
              <code className="font-mono">N8N_API_KEY</code> di <code>.env.local</code>{' '}
              supaya operator bisa toggle pipeline dari sini.
              {configError ? (
                <span className="mt-1 block opacity-80">{configError}</span>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between rounded-xl border border-border bg-background px-4 py-4">
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
              {active ? 'Pipeline aktif' : 'Pipeline di-pause'}
            </div>
            <div className="mt-0.5 text-[11.5px] text-muted-foreground">
              {active
                ? 'Frituur OS memproses webhook Shopify (normalize + push) ke Lightspeed.'
                : 'Webhook Shopify tetap masuk dan tersimpan, tapi normalize + push ke Lightspeed di-pause.'}
            </div>
          </div>
        </div>
        <button
          type="button"
          role="switch"
          aria-checked={active}
          disabled={pending}
          onClick={() => {
            if (active) handleDeactivate();
            else setConfirmingActivate(true);
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
        <div className="rounded-xl border border-rose-500/30 bg-rose-500/5 px-4 py-3 text-[11.5px] text-rose-700 dark:text-rose-400">
          <span className="font-semibold">Gagal:</span> {error}
        </div>
      ) : null}

      {confirmingActivate ? (
        <div className="rounded-xl border border-amber-500/40 bg-amber-500/5 p-4 text-[12px]">
          <div className="flex items-start gap-2 text-amber-800 dark:text-amber-300">
            <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5" />
            <div className="flex-1">
              <div className="font-semibold">Aktifkan pipeline ke Lightspeed?</div>
              <div className="mt-1 text-[11.5px] opacity-90">
                Frituur OS akan mulai push order yang masuk ke POS Lightspeed. Pastikan
                Deliverect untuk store ini sudah dimatikan agar tidak ada duplikat. Cek
                status cutover dengan tim sebelum lanjut.
              </div>
              <div className="mt-3 flex gap-2">
                <button
                  type="button"
                  onClick={handleActivateConfirmed}
                  disabled={pending}
                  className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-3 py-1.5 text-[11.5px] font-medium text-background hover:opacity-90 disabled:opacity-50"
                >
                  {pending ? (
                    <Loader2 className="h-3 w-3 animate-spin" />
                  ) : (
                    <CheckCircle2 className="h-3 w-3" />
                  )}
                  Ya, aktifkan
                </button>
                <button
                  type="button"
                  onClick={() => setConfirmingActivate(false)}
                  disabled={pending}
                  className="inline-flex items-center rounded-full border border-border px-3 py-1.5 text-[11.5px] font-medium hover:bg-muted"
                >
                  Batal
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
