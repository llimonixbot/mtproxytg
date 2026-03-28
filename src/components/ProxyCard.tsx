'use client';

import { Proxy } from '@/lib/types';
import { buildProxyLink } from '@/lib/constants';
import { useI18n } from '@/i18n';
import FlagIcon from './FlagIcon';

interface ProxyCardProps {
  proxy: Proxy;
}

export default function ProxyCard({ proxy }: ProxyCardProps) {
  const { t } = useI18n();

  return (
    <div className="proxy-card">
      <div className="proxy-info">
        <div className="proxy-flag">
          <FlagIcon code={proxy.geo} size={32} />
        </div>
        <div className="proxy-meta">
          <div className="proxy-name">{proxy.name}</div>
          <div className="proxy-details">
            <span className="proxy-tag">{proxy.geo}</span>
            <span className="proxy-tag online">
              <span className="proxy-status" />
              {t.proxies.online}
            </span>
          </div>
        </div>
      </div>
      <a href={buildProxyLink(proxy)} className="btn-connect">
        {t.proxies.connect}
      </a>
    </div>
  );
}
