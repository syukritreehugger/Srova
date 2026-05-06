'use server';

import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';

const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
  next: z.string().optional(),
});

export interface LoginState {
  error?: string;
}

export async function loginAction(
  _prev: LoginState | null,
  formData: FormData
): Promise<LoginState> {
  const parsed = LoginSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
    next: formData.get('next'),
  });

  if (!parsed.success) {
    return { error: 'Enter a valid email address and password.' };
  }

  const { email, password, next } = parsed.data;
  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) {
    return { error: 'Invalid credentials.' };
  }

  revalidatePath('/', 'layout');
  redirect(next || '/');
}
