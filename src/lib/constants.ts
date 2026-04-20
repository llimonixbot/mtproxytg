import { Proxy } from './types';

export const CHANNEL_URL = 'tg://join?invite=Nx-_kBu9X0QyNDBi';

export const DEFAULT_PROXIES: Proxy[] = [];

export function buildProxyLink(proxy: Proxy): string {
  return `tg://proxy?server=${proxy.server}&port=${proxy.port}&secret=${proxy.secret}`;
}

/* ===== CUSTOM HERO BUTTON ===== */
// Set enabled to false to hide the button
export const CUSTOM_HERO_BUTTON = {
  enabled: true,
  url: 'tg://resolve?domain=TriBukvyRoBot&start=mtp4tg_site',
  bgColor: '#e04e4e',
  bgColorHover: '#c93d3d',
  textColor: '#ffffff',
};