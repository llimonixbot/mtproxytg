import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'О сервисе MTProxy | About MTProto Proxy Service',
  description:
    'Что такое MTProto прокси, как работает, зачем нужен. Бесплатный сервис прокси-серверов для Telegram. What is MTProto proxy and how it works. درباره سرویس پروکسی MTProto.',
  keywords: [
    'что такое mtproto proxy', 'mtproto прокси что это', 'about mtproto proxy',
    'как работает прокси телеграм', 'mtproto protocol explained',
    'پروکسی MTProto چیست',
  ],
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'О сервисе MTProxy для Telegram',
    description: 'Узнайте, что такое MTProto-прокси, как он работает и почему он безопасен для использования с Telegram.',
    url: 'https://mtproxy.tg/about',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
