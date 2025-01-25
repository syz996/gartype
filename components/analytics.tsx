"use client";

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script';
import { GA_TRACKING_ID, pageview, event } from '@/lib/gtag';

export function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname) {
      const url = pathname + searchParams.toString();
      pageview(url);

      // Track specific page views
      if (pathname.includes('/games')) {
        event({
          action: 'page_view',
          category: 'Games',
          label: 'Games Page View',
        });
      } else if (pathname.includes('/blog')) {
        event({
          action: 'page_view',
          category: 'Blog',
          label: 'Blog Page View',
        });
      } else if (pathname.includes('/about')) {
        event({
          action: 'page_view',
          category: 'About',
          label: 'About Page View',
        });
      }
    }
  }, [pathname, searchParams]);

  if (process.env.NODE_ENV !== 'production') {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
              anonymize_ip: true,
              cookie_flags: 'SameSite=None;Secure'
            });
          `,
        }}
      />
    </>
  );
}