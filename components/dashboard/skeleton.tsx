import { cn } from '@/lib/utils';

export function Skeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'animate-pulse rounded-xl bg-muted/60',
        className
      )}
    />
  );
}

export function CardSkeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'card-elevated rounded-2xl border border-border bg-card p-5',
        className
      )}
    >
      <Skeleton className="mb-3 h-4 w-28" />
      <Skeleton className="mb-2 h-8 w-20" />
      <Skeleton className="h-3 w-40" />
    </div>
  );
}

export function KpiCardsSkeleton() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
      {Array.from({ length: 7 }).map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    </div>
  );
}

export function TableSkeleton({ rows = 5 }: { rows?: number }) {
  return (
    <div className="card-elevated rounded-2xl border border-border bg-card p-5">
      <Skeleton className="mb-4 h-5 w-32" />
      <div className="flex flex-col gap-3">
        {Array.from({ length: rows }).map((_, i) => (
          <div key={i} className="flex items-center gap-3">
            <Skeleton className="h-4 w-4 rounded-full" />
            <Skeleton className="h-4 flex-1" />
            <Skeleton className="h-4 w-16" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function ChartSkeleton() {
  return (
    <div className="card-elevated rounded-2xl border border-border bg-card p-5">
      <Skeleton className="mb-4 h-5 w-40" />
      <Skeleton className="h-[200px] w-full rounded-lg" />
    </div>
  );
}

export function BannerSkeleton() {
  return <Skeleton className="h-12 w-full rounded-2xl" />;
}

export function PipelineFlowSkeleton() {
  return (
    <div className="card-elevated rounded-2xl border border-border bg-card p-5">
      <Skeleton className="mb-4 h-5 w-36" />
      <div className="flex gap-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} className="h-16 flex-1 rounded-lg" />
        ))}
      </div>
    </div>
  );
}

export function GridSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {Array.from({ length: 3 }).map((_, i) => (
        <CardSkeleton key={i} className="h-32" />
      ))}
    </div>
  );
}

export function OverviewSkeleton() {
  return (
    <div className="flex flex-col gap-5">
      <BannerSkeleton />
      <KpiCardsSkeleton />
      <PipelineFlowSkeleton />
      <GridSkeleton />
      <div className="h-10" />
      <ChartSkeleton />
      <TableSkeleton rows={8} />
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <TableSkeleton rows={4} />
        <TableSkeleton rows={4} />
      </div>
    </div>
  );
}

export function PageSkeleton() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-1">
        <Skeleton className="h-7 w-48" />
        <Skeleton className="h-4 w-64" />
      </div>
      <TableSkeleton rows={8} />
    </div>
  );
}
