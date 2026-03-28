import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Добавить на экран | Add to Home Screen | افزودن به صفحه اصلی',
  description:
    'Добавьте MTProxy на главный экран для быстрого доступа к прокси. Add MTProxy to home screen for quick access. افزودن MTProxy به صفحه اصلی برای دسترسی سریع.',
  alternates: {
    canonical: '/pwa',
  },
};

export default function PWALayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
