import { describe, it, expect } from 'vitest';
import { humanStage, classify, readError, STAGE_LABELS } from './alerts.helpers';

describe('humanStage', () => {
  it('maps known queue names to human labels', () => {
    expect(humanStage('q_orders_normalize')).toBe('Normalize order');
    expect(humanStage('q_orders_push_ls')).toBe('Push to Lightspeed');
    expect(humanStage('q_orders_poll_ls')).toBe('Poll Lightspeed');
    expect(humanStage('q_orders_push_shipday')).toBe('Push to Shipday');
    expect(humanStage('q_orders_compensate')).toBe('Compensation');
  });

  it('maps ls_token_expiry to "LS token refresh"', () => {
    expect(humanStage('ls_token_expiry')).toBe('LS token refresh');
  });

  it('maps takeaway stage labels', () => {
    expect(humanStage('takeaway_token_expiry')).toBe('Takeaway token refresh');
    expect(humanStage('takeaway_poll_error')).toBe('Takeaway poll failure');
    expect(humanStage('takeaway_plu_unmapped')).toBe('Takeaway PLU unmapped');
  });

  it('maps new takeaway poll and orphan normalize labels', () => {
    expect(humanStage('takeaway_poll_silent')).toBe('Takeaway silent skip');
    expect(humanStage('takeaway_poll_silent_observed')).toBe('Takeaway race condition (audit)');
    expect(humanStage('normalize_orphan')).toBe('Normalize stuck (orphan)');
  });

  it('is case-insensitive', () => {
    expect(humanStage('Q_ORDERS_PUSH_LS')).toBe('Push to Lightspeed');
    expect(humanStage('LS_TOKEN_EXPIRY')).toBe('LS token refresh');
  });

  it('returns raw string for unknown stage keys', () => {
    expect(humanStage('unknown_stage_xyz')).toBe('unknown_stage_xyz');
    expect(humanStage('')).toBe('');
  });

  it('all STAGE_LABELS entries are reachable via humanStage', () => {
    for (const [key, label] of Object.entries(STAGE_LABELS)) {
      expect(humanStage(key)).toBe(label);
    }
  });
});

describe('classify', () => {
  it('returns info when resolved_at is set', () => {
    expect(classify(10, '2026-05-12T12:00:00Z')).toBe('info');
    expect(classify(0, '2026-05-12T12:00:00Z')).toBe('info');
  });

  it('returns critical when attempt_count >= 5 and not resolved', () => {
    expect(classify(5, null)).toBe('critical');
    expect(classify(10, null)).toBe('critical');
  });

  it('returns warning when attempt_count < 5 and not resolved', () => {
    expect(classify(0, null)).toBe('warning');
    expect(classify(4, null)).toBe('warning');
  });

  it('resolved takes priority over attempt_count', () => {
    expect(classify(99, '2026-05-12T12:00:00Z')).toBe('info');
  });
});

describe('readError', () => {
  it('returns the object when input is a plain object', () => {
    const err = { message: 'PLU not found', code: '11401', stage: 'plu_validation' };
    expect(readError(err)).toEqual(err);
  });

  it('returns empty object for null', () => {
    expect(readError(null)).toEqual({});
  });

  it('returns empty object for primitive values', () => {
    expect(readError('string')).toEqual({});
    expect(readError(42)).toEqual({});
    expect(readError(undefined)).toEqual({});
  });

  it('preserves optional fields message, stage, code, runbook', () => {
    const err = { message: 'test', stage: 'ls_token_expiry', code: 'TOKEN_STALE', runbook: 'fix it' };
    const result = readError(err);
    expect(result.message).toBe('test');
    expect(result.stage).toBe('ls_token_expiry');
    expect(result.code).toBe('TOKEN_STALE');
    expect(result.runbook).toBe('fix it');
  });
});
