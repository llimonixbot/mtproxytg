import { useState, useEffect, useRef } from 'react';
import { Proxy } from '@/lib/types';
import { DEFAULT_PROXIES } from '@/lib/constants';

const CACHE_KEY = 'mtproxy_cache';
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

interface CacheEntry {
  data: Proxy[];
  ts: number;
}

// In-memory cache shared across hook instances in same session
let memoryCache: CacheEntry | null = null;

export function useProxies() {
  // Always start with DEFAULT_PROXIES for SSR/hydration consistency
  const [proxies, setProxies] = useState<Proxy[]>(DEFAULT_PROXIES);
  const [loading, setLoading] = useState(true);
  const fetched = useRef(false);

  useEffect(() => {
    // 1. Try memory cache (instant)
    if (memoryCache && Date.now() - memoryCache.ts < CACHE_TTL) {
      setProxies(memoryCache.data);
      setLoading(false);
      return;
    }

    // 2. Try localStorage
    try {
      const raw = localStorage.getItem(CACHE_KEY);
      if (raw) {
        const cached: CacheEntry = JSON.parse(raw);
        if (Date.now() - cached.ts < CACHE_TTL && Array.isArray(cached.data) && cached.data.length > 0) {
          memoryCache = cached;
          setProxies(cached.data);
          setLoading(false);
          return;
        }
      }
    } catch {}

    // 3. Fetch from network
    if (fetched.current) return;
    fetched.current = true;

    fetch('https://raw.githubusercontent.com/llimonixbot/mtproxytg/refs/heads/files/proxies.json')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          const entry: CacheEntry = { data, ts: Date.now() };
          memoryCache = entry;
          try {
            localStorage.setItem(CACHE_KEY, JSON.stringify(entry));
          } catch {}
          setProxies(data);
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return { proxies, loading };
}