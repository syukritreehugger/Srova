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
      className="flex flex-col gap-6"
    >
      <div className="flex flex-col gap-1.5">
        <h1 className="text-[22px] font-semibold tracking-tight">
          Welcome back
        </h1>
        <p className="text-[13.5px] text-muted-foreground">
          Sign in with your operator account to continue.
        </p>
      </div>

      {state?.error && (
        <Alert variant="destructive" role="alert">
          <AlertDescription>{state.error}</AlertDescription>
        </Alert>
      )}

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="email" className="text-[13px] font-medium">
            Email address
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="you@ghysels-vagenende.be"
            autoComplete="email"
            required
            aria-required="true"
            className="h-11 rounded-lg border-border/80 bg-secondary/40 px-3.5 text-[14px] transition-colors placeholder:text-muted-foreground/50 focus:border-ring focus:bg-background"
          />
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password" className="text-[13px] font-medium">
              Password
            </Label>
          </div>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="••••••••"
            autoComplete="current-password"
            required
            aria-required="true"
            className="h-11 rounded-lg border-border/80 bg-secondary/40 px-3.5 text-[14px] transition-colors placeholder:text-muted-foreground/50 focus:border-ring focus:bg-background"
          />
        </div>
      </div>

      <input type="hidden" name="next" value={next ?? ''} />

      <Button
        type="submit"
        size="lg"
        disabled={pending}
        aria-label="Sign in"
        className="mt-1 h-11 rounded-lg text-[14px] font-medium tracking-wide shadow-sm transition-all hover:shadow-md"
      >
        {pending ? (
          <span className="flex items-center gap-2">
            <svg
              className="h-4 w-4 animate-spin"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="3"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Signing in…
          </span>
        ) : (
          'Sign in'
        )}
      </Button>
    </form>
  );
}
