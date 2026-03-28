import { Proxy } from './types';

export const CHANNEL_URL = 'https://t.me/+Nx-_kBu9X0QyNDBi';

export const DEFAULT_PROXIES: Proxy[] = [];

export function buildProxyLink(proxy: Proxy): string {
  return `tg://proxy?server=${proxy.server}&port=${proxy.port}&secret=${proxy.secret}`;
}
