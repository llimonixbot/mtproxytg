'use client';

import { useState, useEffect } from 'react';
import { useI18n } from '@/i18n';
import { CUSTOM_HERO_BUTTON } from '@/lib/constants';

export default function CustomHeroButton() {
  const { t } = useI18n();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !CUSTOM_HERO_BUTTON.enabled) return null;

  return (
    <a
      href={CUSTOM_HERO_BUTTON.url}
      className="btn"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        background: CUSTOM_HERO_BUTTON.bgColor,
        color: CUSTOM_HERO_BUTTON.textColor,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.background = CUSTOM_HERO_BUTTON.bgColorHover;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.background = CUSTOM_HERO_BUTTON.bgColor;
      }}
    >
      {t.hero.btn_custom}
    </a>
  );
}