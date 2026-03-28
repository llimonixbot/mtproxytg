'use client';

import { useI18n } from '@/i18n';
import { CHANNEL_URL } from '@/lib/constants';
import { IconTelegram } from '@/components/Icons';

export default function ContactsPage() {
  const { t } = useI18n();
  const c = t.contacts_page;

  return (
    <>
      <div className="page-header">
        <h1>{c.title}</h1>
        <p>{c.desc}</p>
      </div>

      <div className="contact-card">
        <p>{c.text}</p>
        <a href={CHANNEL_URL} target="_blank" rel="noopener noreferrer" className="tg-link">
          <IconTelegram size={20} />
          {c.btn}
        </a>
      </div>
    </>
  );
}
