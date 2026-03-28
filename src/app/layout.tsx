import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import './globals.css';
import { I18nProvider } from '@/i18n';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RegisterSW from '@/components/RegisterSW';
import StructuredData from '@/components/StructuredData';

export const metadata: Metadata = {
  title: {
    default: 'MTProxy — бесплатные прокси для Telegram | Free MTProto Proxy',
    template: '%s | MTProxy for Telegram',
  },
  description:
    'Бесплатные MTProto-прокси для Telegram. Быстрое подключение в один клик, высокая скорость, обход блокировок. Free MTProto proxy for Telegram — fast, secure, one-tap connection. پروکسی رایگان MTProto برای تلگرام — اتصال سریع و امن.',

  keywords: [
    // RU
    'mtproxy', 'mtproto proxy', 'прокси телеграм', 'прокси для телеграма',
    'обход блокировки telegram', 'телеграм прокси бесплатно', 'mtproto прокси список',
    'рабочие прокси телеграм', 'быстрые прокси telegram', 'прокси телеграм 2026',
    'telegram proxy россия', 'разблокировать телеграм', 'прокси сервер телеграм',
    'бесплатный прокси для телеграма', 'mtproto proxy list', 'список прокси телеграм',
    'телеграм не работает', 'подключить прокси телеграм', 'настройка прокси telegram',
    'прокси mtproto бесплатно',
    // EN
    'telegram proxy', 'free telegram proxy', 'mtproto proxy free',
    'telegram proxy list', 'telegram unblock', 'proxy telegram free',
    'fast telegram proxy', 'telegram proxy 2026', 'best mtproto proxy',
    'telegram proxy server', 'unblock telegram', 'telegram vpn proxy',
    'secure telegram proxy', 'telegram proxy online', 'working telegram proxy',
    'telegram proxy connect', 'mtproxy list free',
    // IR/FA
    'پروکسی تلگرام', 'پروکسی رایگان تلگرام', 'فیلترشکن تلگرام',
    'پروکسی mtproto', 'رفع فیلتر تلگرام', 'پروکسی تلگرام ۲۰۲۶',
    'پروکسی سریع تلگرام', 'لیست پروکسی تلگرام', 'اتصال پروکسی تلگرام',
    'پروکسی امن تلگرام',
  ],

  authors: [{ name: 'MTProxy for Telegram' }],
  creator: 'MTProxy for Telegram',
  publisher: 'MTProxy for Telegram',

  metadataBase: new URL('https://mtproxy.tg'),

  alternates: {
    canonical: '/',
    languages: {
      'ru': '/?lang=ru',
      'en': '/?lang=en',
      'fa': '/?lang=ir',
    },
  },

  openGraph: {
    title: 'MTProxy — бесплатные прокси для Telegram',
    description:
      'Список рабочих MTProto-прокси для Telegram. Подключение в один клик. Бесплатно, быстро, безопасно. Обход блокировок без VPN.',
    url: 'https://mtproxy.tg',
    siteName: 'MTProxy for Telegram',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'MTProxy — Free MTProto Proxy for Telegram',
      },
    ],
    locale: 'ru_RU',
    alternateLocale: ['en_US', 'fa_IR'],
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'MTProxy — Free MTProto Proxy for Telegram',
    description:
      'Fast and free MTProto proxies for Telegram. Connect with just one click. Bypass blocks securely.',
    images: ['/og-image.png'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },

  manifest: '/manifest.json',

  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'MTProxy for Telegram',
  },

  category: 'technology',

  other: {
    'google-site-verification': '',
    'yandex-verification': '',
  },
};

export const viewport: Viewport = {
  themeColor: '#17212b',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <head>
        <link rel="alternate" hrefLang="ru" href="https://mtproxy.tg/?lang=ru" />
        <link rel="alternate" hrefLang="en" href="https://mtproxy.tg/?lang=en" />
        <link rel="alternate" hrefLang="fa" href="https://mtproxy.tg/?lang=ir" />
        <link rel="alternate" hrefLang="x-default" href="https://mtproxy.tg" />
      </head>
      <body>
        <I18nProvider>
          <StructuredData />
          <RegisterSW />
          <Header />
          <main className="main">
            <div className="page-enter">{children}</div>
          </main>
          <Footer />
        </I18nProvider>
        <Script
          src="https://anltcs.llimonix.dev/api/script.js"
          data-site-id="6084685b56d3"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}