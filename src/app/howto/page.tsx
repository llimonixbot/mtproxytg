'use client';

import { useI18n } from '@/i18n';

export default function HowtoPage() {
  const { t } = useI18n();
  const h = t.howto_page;

  return (
    <>
      <div className="page-header">
        <h1>{h.title}</h1>
        <p>{h.desc}</p>
      </div>

      {h.steps.map((step, i) => (
        <div key={i} className="content-block">
          <h3>
            <span className="step-num">{i + 1}</span>
            {step.title}
          </h3>
          <p>{step.text}</p>
        </div>
      ))}

      <div className="content-block" style={{ marginTop: 24 }}>
        <h3>{h.manual_title}</h3>
        <p>{h.manual_text}</p>
      </div>
    </>
  );
}
