import { PipelineFlowSkeleton, TableSkeleton } from '@/components/dashboard/skeleton';

export default function Loading() {
  return (
    <div className="flex flex-col gap-5">
      <PipelineFlowSkeleton />
      <TableSkeleton rows={6} />
    </div>
  );
}
