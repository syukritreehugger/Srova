'use client';

import { useActionState, useState } from 'react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp';
import { mfaChallengeAction, type MFAState } from './actions';

interface MFAFormProps {
  factorId: string | undefined;
  next: string;
}

export function MFAForm({ factorId, next }: MFAFormProps) {
  const [code, setCode] = useState('');
  const [state, formAction, pending] = useActionState<MFAState | null, FormData>(
    mfaChallengeAction,
    null
  );

  return (
    <form
      action={formAction}
      aria-label="Two-factor authentication form"
      className="card-elevated flex w-full max-w-sm flex-col gap-4 rounded-2xl border border-border bg-card p-6"
    >
      <div className="flex flex-col gap-1">
        <h1 className="text-[18px] font-semibold tracking-tight">
          Two-factor authentication
        </h1>
        <p className="text-[13px] text-muted-foreground">
          Enter the 6-digit code from your authenticator app.
        </p>
      </div>

      {state?.error && (
        <Alert variant="destructive" role="alert">
          <AlertDescription>{state.error}</AlertDescription>
        </Alert>
      )}

      {factorId && <input type="hidden" name="factorId" value={factorId} />}
      <input type="hidden" name="next" value={next} />
      <input type="hidden" name="code" value={code} />

      <div className="flex flex-col gap-2">
        <InputOTP
          maxLength={6}
          value={code}
          onChange={setCode}
          autoFocus
          aria-label="Authenticator code"
        >
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={pending || !factorId || code.length !== 6}
        aria-label="Verify code"
      >
        {pending ? 'Verifying…' : 'Verify'}
      </Button>

      {!factorId && (
        <p className="text-[12px] text-rose-600 dark:text-rose-400" role="alert">
          No authenticator factor enrolled. Contact your administrator.
        </p>
      )}
    </form>
  );
}
