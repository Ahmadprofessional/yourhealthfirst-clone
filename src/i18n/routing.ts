import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'ar', 'es', 'fr', 'ru'],

  // Used when no locale matches
  defaultLocale: 'en',

  // The auto-generated Link header names the unprefixed URL (which redirects) as x-default.
  // hreflang is already published in sitemap.xml with x-default pointing at /en.
  alternateLinks: false
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const {Link, redirect, usePathname, useRouter, getPathname} =
  createNavigation(routing);
