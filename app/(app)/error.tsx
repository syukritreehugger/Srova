'use client';

import { useEffect } from 'react';
import { AlertTriangle, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AppError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('[app/error.tsx]', error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-6 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/10 text-amber-700">
        <AlertTriangle className="h-6 w-6" />
      </div>
      <div>
        <div className="text-[15px] font-semibold tracking-tight">
          Something went wrong loading this page
        </div>
        <div className="mt-1 text-[13px] text-muted-foreground">
          The pipeline keeps running. This is a console-side display issue.
        </div>
        {error.digest && (
          <div className="mt-2 font-mono text-[11px] text-muted-foreground">
            ref: {error.digest}
          </div>
        )}
      </div>
      <Button size="sm" onClick={reset} className="gap-2">
        <RotateCcw className="h-3.5 w-3.5" /> Retry
      </Button>
    </div>
  );
}
