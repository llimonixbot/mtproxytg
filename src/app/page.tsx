'use client';

import Link from 'next/link';
import { useI18n } from '@/i18n';
import { CHANNEL_URL, CUSTOM_HERO_BUTTON } from '@/lib/constants';
import { useProxies } from '@/lib/useProxies';
import ProxyCard from '@/components/ProxyCard';
import PublicProxies from '@/components/PublicProxies';
import FAQ from '@/components/FAQ';
import { IconBolt, IconGlobe, IconQuestion, IconTelegram } from '@/components/Icons';
import InstallButton from '@/components/InstallButton';
import SEOBlock from '@/components/SEOBlock';

export default function HomePage() {
  const { t } = useI18n();
  const { proxies } = useProxies();

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero-badge">
          <IconBolt size={14} />
          {t.hero.badge}
        </div>
        <h1>
          {t.hero.title}
          <span className="accent">{t.hero.titleAccent}</span>
        </h1>
        <p>{t.hero.desc}</p>
        <div className="hero-actions">
          <a href={CHANNEL_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <IconTelegram size={16} />
            {t.hero.btn_channel}
          </a>
          <Link href="/howto" className="btn btn-outline" prefetch={false}>
            {t.hero.btn_howto}
          </Link>
          {CUSTOM_HERO_BUTTON.enabled && (
            <a
              href={CUSTOM_HERO_BUTTON.url}
              className="btn btn-custom-hero"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                '--custom-bg': CUSTOM_HERO_BUTTON.bgColor,
                '--custom-bg-hover': CUSTOM_HERO_BUTTON.bgColorHover,
                '--custom-text': CUSTOM_HERO_BUTTON.textColor,
              } as React.CSSProperties}
            >
              {CUSTOM_HERO_BUTTON.text}
            </a>
          )}
        </div>
      </section>

      {/* Proxies */}
      <section className="section" id="proxies">
        <div className="section-label">
          <IconGlobe size={16} />
          {t.proxies.label}
        </div>
        <h2 className="section-title">{t.proxies.title}</h2>
        <p className="section-desc">{t.proxies.desc}</p>
        <div className="proxy-grid">
          {proxies.map((proxy, i) => (
            <ProxyCard key={`${proxy.geo}-${i}`} proxy={proxy} />
          ))}
        </div>
          
      </section>
      
      <PublicProxies />


      {/* Pin */}
      <section className="pin-section">
        <h3>{t.pin.title}</h3>
        <p>{t.pin.desc}</p>
        <InstallButton />
      </section>

      {/* FAQ with schema.org */}
      <section className="section" id="faq">
        <div className="section-label">
          <IconQuestion size={16} />
          {t.faq.label}
        </div>
        <h2 className="section-title">{t.faq.title}</h2>
        <FAQ items={t.faq.items} />
      </section>

      {/* SEO text block */}
      <SEOBlock />
    </>
  );
}