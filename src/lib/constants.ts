import { Proxy } from './types';

export const CHANNEL_URL = 'tg://join?invite=Nx-_kBu9X0QyNDBi';

export const DEFAULT_PROXIES: Proxy[] = [];

export function buildProxyLink(proxy: Proxy): string {
  return `tg://proxy?server=${proxy.server}&port=${proxy.port}&secret=${proxy.secret}`;
}
