'use client';

import Link from 'next/link';
import { useI18n } from '@/i18n';

const LINKS: { key: 'home' | 'howto' | 'about' | 'pwa' | 'contacts'; href: string }[] = [
  { key: 'home', href: '/' },
  { key: 'howto', href: '/howto' },
  { key: 'about', href: '/about' },
  { key: 'pwa', href: '/pwa' },
  { key: 'contacts', href: '/contacts' },
];

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-links">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href}>
              {t.nav[l.key]}
            </Link>
          ))}
        </div>
        <div className="footer-copy">{t.footer.copy}</div>
      </div>
    </footer>
  );
}
