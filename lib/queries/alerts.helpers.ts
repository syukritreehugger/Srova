import type { AlertSeverity } from './alerts';

export const STAGE_LABELS: Record<string, string> = {
  q_orders_normalize: 'Normalize order',
  q_orders_push_ls: 'Push to Lightspeed',
  q_orders_poll_ls: 'Poll Lightspeed',
  q_orders_push_shipday: 'Push to Shipday',
  q_orders_compensate: 'Compensation',
  ls_token_expiry: 'LS token refresh',
};

export interface ErrorJson {
  message?: string;
  stage?: string;
  code?: string;
  runbook?: string;
}

export function humanStage(raw: string): string {
  return STAGE_LABELS[raw.toLowerCase()] ?? raw;
}

export function readError(j: unknown): ErrorJson {
  return j && typeof j === 'object' ? (j as ErrorJson) : {};
}

export function classify(attempt: number, resolved: string | null): AlertSeverity {
  if (resolved) return 'info';
  if (attempt >= 5) return 'critical';
  return 'warning';
}
