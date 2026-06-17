import Link from 'next/link';
import { AlertTriangle, ArrowRight, Pause } from 'lucide-react';
import type { PipelineBacklog } from '@/lib/queries/pipeline-health';
import { cn } from '@/lib/utils';

/**
 * Surface untuk insiden seperti k6 pollution 2026-05-01: 4 hari pipeline diam,
 * dashboard tampak hijau karena hanya melihat canonical_orders. Banner ini baca
 * pgmq queue depth supaya backlog kelihatan tanpa harus klik /pipeline.
 */
export function BacklogBanner({
  backlog,
  pipelinePaused,
}: {
  backlog: PipelineBacklog;
  pipelinePaused?: boolean;
}) {
  if (pipelinePaused) {
    return (
      <div className="flex items-center justify-between gap-3 rounded-2xl border border-amber-500/30 bg-amber-500/5 px-4 py-3 text-amber-800 dark:text-amber-300">
        <div className="flex items-center gap-3">
          <Pause className="h-4 w-4 shrink-0" strokeWidth={2.5} />
          <div>
            <div className="text-[12.5px] font-semibold">Pipeline paused</div>
            <div className="mt-0.5 text-[11.5px] text-amber-700/90 dark:text-amber-400/80">
              Srova is not pushing to Lightspeed. Shopify webhooks are
              still received and stored, but not forwarded to POS until an
              operator re-activates the pipeline.
            </div>
          </div>
        </div>
        <Link
          href="/settings"
          className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-background/40 px-3 py-1.5 text-[11.5px] font-medium hover:bg-background/60"
        >
          Settings
          <ArrowRight className="h-3 w-3" />
        </Link>
      </div>
    );
  }

  if (backlog.level === 'healthy' || !backlog.message) {
    return null;
  }

  const tone =
    backlog.level === 'critical'
      ? 'border-rose-500/40 bg-rose-500/5 text-rose-800 dark:text-rose-300'
      : 'border-amber-500/30 bg-amber-500/5 text-amber-800 dark:text-amber-300';

  return (
    <div
      className={cn(
        'flex items-center justify-between gap-3 rounded-2xl border px-4 py-3',
        tone
      )}
    >
      <div className="flex items-center gap-3">
        <AlertTriangle className="h-4 w-4 shrink-0" strokeWidth={2.5} />
        <div>
          <div className="text-[12.5px] font-semibold">{backlog.message}</div>
          <div className="mt-0.5 flex flex-wrap gap-x-3 gap-y-0.5 text-[11px] opacity-80">
            {backlog.queues.map((q) => (
              <span key={q.queue_name} className="font-mono tabular-nums">
                {q.queue_name}: {q.depth}
              </span>
            ))}
          </div>
        </div>
      </div>
      <Link
        href="/pipeline"
        className="inline-flex items-center gap-1.5 rounded-full border border-current/30 bg-background/40 px-3 py-1.5 text-[11.5px] font-medium hover:bg-background/60"
      >
        Inspect
        <ArrowRight className="h-3 w-3" />
      </Link>
    </div>
  );
}
