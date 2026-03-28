'use client';

import Link from 'next/link';
import { useI18n } from '@/i18n';
import { CHANNEL_URL } from '@/lib/constants';
import { IconBolt, IconShield, IconServer, IconLock, IconRefresh, IconInfo, IconGlobe, IconTelegram, IconPlus } from '@/components/Icons';
import InstallButton from '@/components/InstallButton';

export default function AboutPage() {
  const { t } = useI18n();
  const a = t.about_page;

  const icons = [
    <IconBolt key="bolt" size={20} />,
    <IconLock key="lock" size={20} />,
    <IconGlobe key="globe" size={20} />,
    <IconServer key="server" size={20} />,
  ];

  return (
    <>
      <div className="page-header">
        <h1>{a.title}</h1>
        <p>{a.desc}</p>
      </div>

      {/* Save site */}
      <div className="pin-section" style={{ marginTop: 0, marginBottom: 32 }}>
        <h3>{t.pin.title}</h3>
        <p>{t.pin.desc}</p>
        <InstallButton />
      </div>

      {/* What is MTProto */}
      <div className="content-block">
        <h3>
          <span className="icon-inline"><IconShield size={18} /></span>
          {a.what_title}
        </h3>
        <p>{a.what_text}</p>
      </div>

      {/* How to use */}
      <div className="content-block">
        <h3>
          <span className="icon-inline"><IconInfo size={18} /></span>
          {a.how_title}
        </h3>
        <p>{a.how_text}</p>
      </div>

      {/* Updates */}
      <div className="content-block">
        <h3>
          <span className="icon-inline"><IconRefresh size={18} /></span>
          {a.updates_title}
        </h3>
        <p>{a.updates_text}</p>
        <div style={{ marginTop: 16 }}>
          <a href={CHANNEL_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
            <IconTelegram size={14} />
            {t.hero.btn_channel}
          </a>
        </div>
      </div>

      {/* Responsibility */}
      <div className="content-block">
        <h3>
          <span className="icon-inline"><IconServer size={18} /></span>
          {a.responsibility_title}
        </h3>
        <p>{a.responsibility_text}</p>
      </div>
    </>
  );
}
