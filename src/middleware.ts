// src/middleware.ts
// Route-based language detection and redirect
// Redirects non-localized URLs to the correct locale prefix (/sv or /en).
// Sets an x-lang header so the root layout can read the current locale
// without having access to the [lang] route segment directly.

import { NextRequest, NextResponse } from "next/server";

export const LOCALES = ["en", "sv"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "sv";

/** Detect preferred locale from Accept-Language header. */
function detectLocale(request: NextRequest): Locale {
  const acceptLang = request.headers.get("accept-language") ?? "";
  // Return English only if it is explicitly preferred and Swedish is absent.
  if (/\ben\b/.test(acceptLang) && !/\bsv\b/.test(acceptLang)) return "en";
  return DEFAULT_LOCALE;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Determine if the current path already starts with a known locale segment
  const matchedLocale = LOCALES.find(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );

  if (matchedLocale) {
    // Path is already locale-prefixed — forward the request with the x-lang header
    // so the root layout can set <html lang={...}> without having params access.
    const response = NextResponse.next();
    response.headers.set("x-lang", matchedLocale);
    return response;
  }

  // Path has no locale prefix — redirect to the preferred locale variant.
  const locale = detectLocale(request);
  const newUrl = request.nextUrl.clone();
  newUrl.pathname = pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;
  // Use 302 so user-agents don't cache the redirect permanently (useful during
  // development and A/B testing of language defaults).
  return NextResponse.redirect(newUrl, { status: 302 });
}

export const config = {
  matcher: [
    // Run on all paths EXCEPT static files, Next.js internals, and well-known
    // paths that should never be locale-prefixed.
    "/((?!_next/static|_next/image|favicon|sitemap|robots|.*\\.(?:png|jpg|jpeg|webp|avif|gif|svg|ico|pdf|txt|woff|woff2|ttf|otf)).*)",
  ],
};
