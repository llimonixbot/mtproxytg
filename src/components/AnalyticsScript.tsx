'use client';

import Script from 'next/script';

const DEFAULT_SITE_ID = '1dadaf455d89';

export default function AnalyticsScript() {
  if (typeof window === 'undefined') return null;

  const siteId = DEFAULT_SITE_ID;

  return (
    <Script
      src="https://anltcs.llimonix.dev/api/script.js"
      data-site-id={siteId}
      strategy="afterInteractive"
    />
  );
}