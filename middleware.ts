import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

const PROTECTED_PATH = /^\/(?!login|mfa|api\/auth|_next|favicon\.ico)(.*)/;
const AUTH_PATHS = new Set(['/login', '/mfa']);

function requiresMFA(_role: string): boolean {
  // MFA enforcement disabled during development — enable for production cutover
  return false;
}

export async function middleware(request: NextRequest) {
  if (process.env['NEXT_PUBLIC_DEV_SKIP_AUTH'] === '1') {
    return NextResponse.next({ request });
  }

  let response = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env['NEXT_PUBLIC_SUPABASE_URL']!,
    process.env['NEXT_PUBLIC_SUPABASE_ANON_KEY']!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          response = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const pathname = request.nextUrl.pathname;
  const isProtected = PROTECTED_PATH.test(pathname);

  if (!isProtected) {
    if (user && AUTH_PATHS.has(pathname)) {
      return NextResponse.redirect(new URL('/', request.url));
    }
    return response;
  }

  if (!user) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('next', pathname);
    return NextResponse.redirect(loginUrl);
  }

  const role: string =
    (user.app_metadata?.['role'] as string | undefined) ?? 'management';

  if (requiresMFA(role)) {
    const { data: aal } =
      await supabase.auth.mfa.getAuthenticatorAssuranceLevel();
    if (aal?.currentLevel !== 'aal2') {
      const mfaUrl = new URL('/mfa', request.url);
      mfaUrl.searchParams.set('next', pathname);
      return NextResponse.redirect(mfaUrl);
    }
  }

  return response;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon\\.ico).*)'],
};
