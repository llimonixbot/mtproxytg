'use client';

import { useI18n } from '@/i18n';
import InstallButton from '@/components/InstallButton';

export default function PWAPage() {
  const { t } = useI18n();
  const p = t.pwa_page;

  return (
    <>
      <div className="page-header">
        <h1>{p.title}</h1>
        <p>{p.desc}</p>

        <div className="install-actions">
          <InstallButton variant="hero" />
        </div>
      </div>

      {p.sections.map((sec, si) => (
        <div key={si} className="content-block">
          <h3>{sec.title}</h3>
          <div className="pwa-steps">
            {sec.steps.map((step, i) => (
              <div key={i} className="pwa-step">
                <div className="pwa-step-num">{i + 1}</div>
                <div>
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
