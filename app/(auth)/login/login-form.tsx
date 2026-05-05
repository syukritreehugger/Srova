'use client';

import { useActionState } from 'react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { loginAction, type LoginState } from './actions';

export function LoginForm({ next }: { next?: string }) {
  const [state, formAction, pending] = useActionState<
    LoginState | null,
    FormData
  >(loginAction, null);

  return (
    <form
      action={formAction}
      aria-label="Sign in form"
      className="card-elevated flex w-full max-w-sm flex-col gap-4 rounded-2xl border border-border bg-card p-6"
    >
      <div className="flex flex-col gap-1">
        <h1 className="text-[18px] font-semibold tracking-tight">Frituur OS</h1>
        <p className="text-[13px] text-muted-foreground">
          Sign in with your operator account.
        </p>
      </div>

      {state?.error && (
        <Alert variant="destructive" role="alert">
          <AlertDescription>{state.error}</AlertDescription>
        </Alert>
      )}

      <div className="flex flex-col gap-2">
        <Label htmlFor="email">Email address</Label>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          aria-required="true"
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          aria-required="true"
        />
      </div>

      <input type="hidden" name="next" value={next ?? ''} />

      <Button
        type="submit"
        size="lg"
        disabled={pending}
        aria-label="Sign in"
        className="mt-1"
      >
        {pending ? 'Signing in…' : 'Sign in'}
      </Button>
    </form>
  );
}
