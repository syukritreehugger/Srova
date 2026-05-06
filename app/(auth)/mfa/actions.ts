'use server';

import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';

export interface MFAState {
  error?: string;
}

const VerifySchema = z.object({
  code: z.string().length(6).regex(/^\d{6}$/),
  factorId: z.string().uuid(),
  next: z.string().optional(),
});

export async function mfaChallengeAction(
  _prev: MFAState | null,
  formData: FormData
): Promise<MFAState> {
  const parsed = VerifySchema.safeParse({
    code: formData.get('code'),
    factorId: formData.get('factorId'),
    next: formData.get('next'),
  });

  if (!parsed.success) {
    return { error: 'Enter the 6-digit code from your authenticator app.' };
  }

  const { code, factorId, next } = parsed.data;
  const supabase = await createClient();

  const { data: challenge, error: challengeErr } =
    await supabase.auth.mfa.challenge({ factorId });

  if (challengeErr || !challenge) {
    return { error: 'MFA challenge failed. Try again.' };
  }

  const { error: verifyErr } = await supabase.auth.mfa.verify({
    factorId,
    challengeId: challenge.id,
    code,
  });

  if (verifyErr) {
    return {
      error: 'Invalid code. Check your authenticator app and try again.',
    };
  }

  revalidatePath('/', 'layout');
  redirect(next || '/');
}
