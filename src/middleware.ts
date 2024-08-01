import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['ru', 'uk'],

  // Used when no locale matches
  defaultLocale: 'uk',
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(ru|uk)/:path*'],
};
