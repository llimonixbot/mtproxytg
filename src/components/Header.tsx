'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useI18n } from '@/i18n';
import { Lang } from '@/lib/types';

const NAV_ITEMS: { key: keyof ReturnType<typeof useI18n>['t']['nav']; href: string }[] = [
  { key: 'home', href: '/' },
  { key: 'howto', href: '/howto' },
  { key: 'about', href: '/about' },
  { key: 'pwa', href: '/pwa' },
  { key: 'contacts', href: '/contacts' },
];

const LANGS: { code: Lang; label: string }[] = [
  { code: 'ru', label: 'RU' },
  { code: 'en', label: 'EN' },
  { code: 'ir', label: 'IR' },
];

export default function Header() {
  const { lang, t, setLang } = useI18n();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const langSwitch = (
    <div className="lang-switch">
      {LANGS.map((l) => (
        <button
          key={l.code}
          className={`lang-btn${lang === l.code ? ' active' : ''}`}
          onClick={() => setLang(l.code)}
        >
          {l.label}
        </button>
      ))}
    </div>
  );

  return (
    <>
      <header className="header">
        <div className="header-inner">
          <Link href="/" className="logo" onClick={() => setMobileOpen(false)}>
            <img
              src="/icon-512.png"
              alt="MTProxy for Telegram"
              width={32}
              height={32}
              style={{ borderRadius: 8 }}
            />
            <span>MTProxy for Telegram</span>
          </Link>

          <nav className="nav">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link${isActive(item.href) ? ' active' : ''}`}
              >
                {t.nav[item.key]}
              </Link>
            ))}
            {langSwitch}
          </nav>

          <button
            className="burger"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {mobileOpen && (
        <div className="mobile-menu open">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link${isActive(item.href) ? ' active' : ''}`}
              onClick={() => setMobileOpen(false)}
            >
              {t.nav[item.key]}
            </Link>
          ))}
          {langSwitch}
        </div>
      )}
    </>
  );
}