'use client';

import { useI18n } from '@/i18n';

export default function StructuredData() {
  const { lang } = useI18n();

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'MTProxy for Telegram',
    alternateName: ['MTProxy', 'МТПрокси', 'پروکسی تلگرام'],
    url: 'https://mtproxy.tg',
    description: lang === 'ru'
      ? 'Бесплатные MTProto-прокси для Telegram. Подключение в один клик.'
      : lang === 'ir'
        ? 'پروکسی رایگان MTProto برای تلگرام. اتصال با یک کلیک.'
        : 'Free MTProto proxies for Telegram. One-click connection.',
    inLanguage: ['ru', 'en', 'fa'],
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://mtproxy.tg/?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'MTProxy for Telegram',
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Android, iOS, Windows, macOS, Linux',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: 'Free MTProto proxy service for Telegram messenger. Bypass blocks and connect securely.',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '1200',
      bestRating: '5',
    },
  };

  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'MTProxy for Telegram',
    url: 'https://mtproxy.tg',
    logo: 'https://mtproxy.tg/icon-512.png',
    sameAs: [
      'https://t.me/+Nx-_kBu9X0QyNDBi',
    ],
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: lang === 'ru' ? 'Главная' : lang === 'ir' ? 'خانه' : 'Home',
        item: 'https://mtproxy.tg',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
