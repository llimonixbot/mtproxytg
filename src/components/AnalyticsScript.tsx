'use client';

import Script from 'next/script';

const SITE_IDS: Record<string, string> = {
  'mtproxy.tg': '6084685b56d3',
  'mtproxytg.vercel.app': '1dadaf455d89',
  'mtproxytg.netlify.app': '9f85901bba87',
  'mtproxytg2.vercel.app':'9ccfb481c564',
};

const DEFAULT_SITE_ID = '6084685b56d3';

export default function AnalyticsScript() {
  if (typeof window === 'undefined') return null;

  const siteId = SITE_IDS[window.location.hostname] ?? DEFAULT_SITE_ID;

  return (
    <Script
      src="https://anltcs.llimonix.dev/api/script.js"
      data-site-id={siteId}
      strategy="afterInteractive"
    />
  );
}