import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Как подключить прокси Telegram | How to Connect MTProto Proxy',
  description:
    'Пошаговая инструкция подключения MTProto-прокси в Telegram на Android, iPhone, Windows, macOS. Step-by-step guide to connect MTProto proxy. راهنمای اتصال پروکسی MTProto تلگرام.',
  keywords: [
    'как подключить прокси телеграм', 'настройка mtproto proxy',
    'telegram proxy setup', 'how to connect telegram proxy',
    'نحوه اتصال پروکسی تلگرام',
  ],
  alternates: {
    canonical: '/howto',
  },
  openGraph: {
    title: 'Как подключить MTProto прокси в Telegram',
    description: 'Подробная инструкция по настройке MTProto-прокси на любом устройстве. Подключение за 3 шага.',
    url: 'https://mtproxy.tg/howto',
  },
};

export default function HowtoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
