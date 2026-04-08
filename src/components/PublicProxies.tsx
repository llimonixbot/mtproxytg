'use client';

import { useState, useEffect, useCallback, CSSProperties } from 'react';
import { Proxy } from '@/lib/types';
import { buildProxyLink } from '@/lib/constants';
import { useI18n } from '@/i18n';
import FlagIcon from './FlagIcon';
import { IconChevron, IconGlobe } from './Icons';

const GITHUB_URL =
  'https://raw.githubusercontent.com/hookzof/socks5_list/refs/heads/master/tg/mtproto.json';

interface RawProxy {
  host: string;
  port: number;
  secret: string;
  country: string;
  addTime: number;
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ---- inline styles so nothing depends on external CSS ---- */

const sectionStyle: CSSProperties = {
  marginTop: 16,
  borderRadius: 12,
  border: '1px solid rgba(42,171,238,.18)',
  overflow: 'hidden',
};

const headerBase: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 12,
  padding: '16px 20px',
  cursor: 'pointer',
  fontWeight: 600,
  fontSize: 14,
  color: '#f5f5f5',
  userSelect: 'none',
  background: 'var(--bg-card, #232e3c)',
  transition: 'background .2s',
};

const headerLeft: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 10,
};

const countBadge: CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: 24,
  height: 22,
  padding: '0 7px',
  borderRadius: 11,
  background: 'rgba(42,171,238,.15)',
  color: '#2aabee',
  fontSize: 11,
  fontWeight: 700,
};

const bodyStyle: CSSProperties = {
  padding: 16,
};

const gridScroll: CSSProperties = {
  maxHeight: 600,
  overflowY: 'auto',
};

const truncName: CSSProperties = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  maxWidth: 180,
  fontWeight: 600,
  fontSize: 14,
  marginBottom: 2,
};

const loaderStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 12,
  padding: '32px 0',
  color: '#8b9bab',
  fontSize: 14,
};

const chevronStyle = (isOpen: boolean): CSSProperties => ({
  transition: 'transform .3s, color .2s',
  transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
  flexShrink: 0,
  color: isOpen ? '#2aabee' : '#5b6b7b',
});

/* ---------------------------------------------------------- */

export default function PublicProxies() {
  const { t } = useI18n();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [proxies, setProxies] = useState<Proxy[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const load = useCallback(() => {
    if (proxies.length > 0 || loading) return;
    setLoading(true);
    setError(false);

    fetch(GITHUB_URL)
      .then((r) => r.json())
      .then((data: RawProxy[]) => {
        const mapped: Proxy[] = data.map((p) => ({
          geo: p.country,
          name: p.country,
          server: p.host,
          port: p.port,
          secret: p.secret,
        }));
        setProxies(shuffle(mapped));
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [proxies.length, loading]);

  const handleToggle = () => {
    const next = !open;
    setOpen(next);
    if (next && proxies.length === 0 && !loading) {
      load();
    }
  };

  if (!mounted) return null;

  return (
    <div style={sectionStyle}>
      <div
        className="pub-header"
        style={{
          ...headerBase,
          ...(open ? { borderBottom: '1px solid rgba(255,255,255,.06)' } : {}),
        }}
        onClick={handleToggle}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleToggle();
          }
        }}
      >
        <span style={headerLeft}>
          <IconGlobe size={16} />
          <span>{t.public_proxies.title}</span>
          {proxies.length > 0 && (
            <span style={countBadge}>{proxies.length}</span>
          )}
        </span>
        <span style={chevronStyle(open)}>
          <IconChevron size={18} />
        </span>
      </div>

      {open && (
        <div style={bodyStyle}>
          {loading && (
            <div style={loaderStyle}>
              <span className="spinner" />
              <span>{t.public_proxies.loading}</span>
            </div>
          )}

          {error && !loading && (
            <div style={{ textAlign: 'center', padding: '24px 0', color: '#5b6b7b', fontSize: 14 }}>
              {t.public_proxies.error}
            </div>
          )}

          {!loading && !error && proxies.length > 0 && (
            <div className="proxy-grid pub-grid-scroll" style={gridScroll}>
              {proxies.map((proxy, i) => (
                <div key={`pub-${i}`} className="proxy-card">
                  <div className="proxy-info">
                    <div className="proxy-flag">
                      <FlagIcon code={proxy.geo} size={32} />
                    </div>
                    <div className="proxy-meta">
                      <div style={truncName} title={proxy.server}>
                        {proxy.server}
                      </div>
                      <div className="proxy-details">
                        <span className="proxy-tag">{proxy.geo}</span>
                        <span className="proxy-tag">:{proxy.port}</span>
                      </div>
                    </div>
                  </div>
                  <a href={buildProxyLink(proxy)} className="btn-connect">
                    {t.proxies.connect}
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* spinner + scrollbar + hover */}
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        .spinner {
          display: inline-block;
          width: 20px; height: 20px;
          border: 2px solid rgba(255,255,255,.1);
          border-top-color: #2aabee;
          border-radius: 50%;
          animation: spin .6s linear infinite;
        }
        .pub-grid-scroll::-webkit-scrollbar {
          width: 6px;
        }
        .pub-grid-scroll::-webkit-scrollbar-track {
          background: rgba(255,255,255,.03);
          border-radius: 3px;
        }
        .pub-grid-scroll::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,.08);
          border-radius: 3px;
        }
        .pub-grid-scroll::-webkit-scrollbar-thumb:hover {
          background: rgba(255,255,255,.15);
        }
        .pub-grid-scroll {
          scrollbar-width: thin;
          scrollbar-color: rgba(255,255,255,.08) rgba(255,255,255,.03);
        }
        .pub-header:hover {
          background: var(--bg-surface-hover, #253040) !important;
        }
      `}</style>
    </div>
  );
}