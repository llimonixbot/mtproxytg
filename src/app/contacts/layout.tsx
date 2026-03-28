import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Контакты | Contacts | تماس',
  description:
    'Свяжитесь с нами через Telegram-канал. Вопросы, предложения, заявки на прокси. Contact us via Telegram channel. تماس با ما از طریق کانال تلگرام.',
  alternates: {
    canonical: '/contacts',
  },
};

export default function ContactsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
