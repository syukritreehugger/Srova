// Srova shares its auth database with FrituurOS: most accounts there have no Srova role.
// Only an explicit management/admin role may open the console (fix of 05/10/2026).
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { NextRequest } from 'next/server';

let gebruiker: { app_metadata?: Record<string, unknown> } | null = null;
vi.mock('@supabase/ssr', () => ({
  createServerClient: () => ({ auth: { getUser: async () => ({ data: { user: gebruiker } }) } }),
}));

import { middleware } from './middleware';

const vraag = (pad: string) => middleware(new NextRequest(new URL(pad, 'https://srova.test')));
const doel = (r: Response) => r.headers.get('location');

beforeEach(() => {
  process.env['NEXT_PUBLIC_SUPABASE_URL'] = 'https://db.test';
  process.env['NEXT_PUBLIC_SUPABASE_ANON_KEY'] = 'anon';
});

describe('Srova console access', () => {
  it('refuses a signed-in account without a role', async () => {
    gebruiker = { app_metadata: {} };
    expect(doel(await vraag('/menu'))).toBe('https://srova.test/login?error=no_access');
  });

  it('refuses a signed-in account with a role that is not a console role', async () => {
    gebruiker = { app_metadata: { role: 'cashier' } };
    expect(doel(await vraag('/orders'))).toBe('https://srova.test/login?error=no_access');
  });

  it('lets management in', async () => {
    gebruiker = { app_metadata: { role: 'management' } };
    expect(doel(await vraag('/menu'))).toBeNull();
  });

  it('sends a signed-out visitor to the login page', async () => {
    gebruiker = null;
    expect(doel(await vraag('/menu'))).toBe('https://srova.test/login?next=%2Fmenu');
  });

  it('does not bounce a roleless account from /login back to the console', async () => {
    gebruiker = { app_metadata: {} };
    expect(doel(await vraag('/login'))).toBeNull();
  });
});
