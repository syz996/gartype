import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { fallbackLng, languages } from './app/i18n/settings';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Check if the pathname already has a language
  const pathnameHasLang = languages.some(
    (locale) => pathname.startsWith(`/${locale.code}/`) || pathname === `/${locale.code}`
  );

  if (pathnameHasLang) return;

  // Redirect if there is no language prefix
  const locale = fallbackLng;
  return NextResponse.redirect(
    new URL(`/${locale}${pathname}`, request.url)
  );
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|api|favicon.ico).*)',
  ],
};