'use client';

import { useState, useTransition } from 'react';
import { cn } from '@/lib/utils';
import { updateTakeawayPluMapping, confirmTakeawayAutoMatch } from '../actions';
import type { TakeawayMappingRow, LsProductOption } from '@/lib/queries/takeaway-mapping';

interface Props {
  rows: TakeawayMappingRow[];
  lsProducts: LsProductOption[];
}

export function TakeawayMappingTable({ rows, lsProducts }: Props) {
  return (
    <div className="rounded-2xl border border-border bg-card overflow-hidden">
      <table className="w-full text-[12.5px]">
        <thead>
          <tr className="border-b border-border bg-muted/40 text-left text-[11px] uppercase tracking-wider text-muted-foreground">
            <th className="px-4 py-2.5 font-medium">Takeaway product</th>
            <th className="px-4 py-2.5 font-medium">LS PLU</th>
            <th className="px-4 py-2.5 font-medium text-right">Orders</th>
            <th className="px-4 py-2.5 font-medium">Last seen</th>
            <th className="px-4 py-2.5 font-medium">Status</th>
            <th className="px-4 py-2.5 font-medium">Action</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <TakeawayRow key={row.id} row={row} lsProducts={lsProducts} />
          ))}
          {rows.length === 0 && (
            <tr>
              <td colSpan={6} className="px-4 py-12 text-center text-muted-foreground">
                <div className="font-medium text-foreground mb-1">No Takeaway products yet</div>
                <div className="text-[11.5px]">
                  Product names will auto-populate here as Takeaway orders come in.
                  Map each one to a Lightspeed PLU to enable the push pipeline.
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

function TakeawayRow({ row, lsProducts }: { row: TakeawayMappingRow; lsProducts: LsProductOption[] }) {
  const [selectedPlu, setSelectedPlu] = useState(row.ls_plu || '');
  const [isPending, startTransition] = useTransition();

  const handleSave = () => {
    if (!selectedPlu) return;
    const product = lsProducts.find((p) => p.sku === selectedPlu);
    startTransition(async () => {
      await updateTakeawayPluMapping(row.id, selectedPlu, product?.name || selectedPlu);
    });
  };

  const handleConfirm = () => {
    startTransition(async () => {
      await confirmTakeawayAutoMatch(row.id);
    });
  };

  const statusStyles: Record<typeof row.status, string> = {
    unmapped: 'bg-rose-500/10 text-rose-700 dark:text-rose-400',
    auto_matched: 'bg-amber-500/10 text-amber-700 dark:text-amber-400',
    confirmed: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400',
  };

  const statusLabel: Record<typeof row.status, string> = {
    unmapped: 'Unmapped',
    auto_matched: 'Auto-matched',
    confirmed: 'Confirmed',
  };

  const isEditable = row.status === 'unmapped';

  return (
    <tr className="border-b border-border/50 last:border-b-0 hover:bg-muted/20">
      <td className="px-4 py-2.5 font-medium">{row.takeaway_name}</td>
      <td className="px-4 py-2.5">
        {isEditable ? (
          <select
            value={selectedPlu}
            onChange={(e) => setSelectedPlu(e.target.value)}
            className="h-7 w-full max-w-[260px] rounded border border-border bg-background px-2 text-[11px] font-mono tabular-nums"
          >
            <option value="">Select PLU…</option>
            {lsProducts.map((p) => (
              <option key={p.sku} value={p.sku}>
                {p.sku} — {p.name}
              </option>
            ))}
          </select>
        ) : (
          <span className="font-mono text-[11px] tabular-nums">
            {row.ls_plu}
            {row.ls_product_name && <span className="text-muted-foreground ml-2">— {row.ls_product_name}</span>}
          </span>
        )}
      </td>
      <td className="px-4 py-2.5 text-right font-mono tabular-nums">{row.order_count}</td>
      <td className="px-4 py-2.5 text-[11.5px] text-muted-foreground">
        {formatRelative(row.last_seen_at)}
      </td>
      <td className="px-4 py-2.5">
        <span
          className={cn(
            'inline-flex items-center rounded-full px-2 py-0.5 text-[10.5px] font-medium',
            statusStyles[row.status]
          )}
        >
          {statusLabel[row.status]}
        </span>
      </td>
      <td className="px-4 py-2.5">
        {row.status === 'unmapped' && (
          <button
            onClick={handleSave}
            disabled={!selectedPlu || isPending}
            className="rounded-full bg-foreground px-3 py-1 text-[11px] font-medium text-background disabled:opacity-40"
          >
            {isPending ? '…' : 'Save'}
          </button>
        )}
        {row.status === 'auto_matched' && (
          <button
            onClick={handleConfirm}
            disabled={isPending}
            className="rounded-full border border-border bg-background px-3 py-1 text-[11px] font-medium hover:bg-muted disabled:opacity-40"
          >
            {isPending ? '…' : 'Confirm'}
          </button>
        )}
      </td>
    </tr>
  );
}

function formatRelative(iso: string): string {
  const m = Math.max(0, Math.round((Date.now() - new Date(iso).getTime()) / 60000));
  if (m < 1) return 'just now';
  if (m < 60) return `${m}m ago`;
  const h = Math.round(m / 60);
  if (h < 24) return `${h}h ago`;
  return `${Math.round(h / 24)}d ago`;
}
