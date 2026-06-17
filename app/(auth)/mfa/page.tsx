import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { MFAForm } from './mfa-form';

export const metadata: Metadata = { title: 'Two-factor auth — Srova' };

export default async function MFAPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string }>;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect('/login');

  const { data: factors } = await supabase.auth.mfa.listFactors();
  const totpFactor = factors?.totp?.[0];
  const next = (await searchParams).next ?? '/';

  return <MFAForm factorId={totpFactor?.id} next={next} />;
}
