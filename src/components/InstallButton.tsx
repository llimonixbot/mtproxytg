'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useI18n } from '@/i18n';
import { IconPlus } from './Icons';

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export default function InstallButton({ variant = 'primary' }: { variant?: 'primary' | 'hero' }) {
  const { t, lang } = useI18n();
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showIOSHint, setShowIOSHint] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const hintRef = useRef<HTMLDivElement>(null);

  const isIOS = typeof navigator !== 'undefined' &&
    /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;

  const isStandalone = typeof window !== 'undefined' &&
    (window.matchMedia('(display-mode: standalone)').matches ||
     (navigator as any).standalone === true);

  useEffect(() => {
    if (isStandalone) {
      setIsInstalled(true);
      return;
    }

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    window.addEventListener('beforeinstallprompt', handler);

    window.addEventListener('appinstalled', () => {
      setIsInstalled(true);
      setDeferredPrompt(null);
    });

    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, [isStandalone]);

  useEffect(() => {
    if (!showIOSHint) return;
    const handleClick = (e: MouseEvent) => {
      if (hintRef.current && !hintRef.current.contains(e.target as Node)) {
        setShowIOSHint(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [showIOSHint]);

  const handleInstall = useCallback(async () => {
    if (deferredPrompt) {
      await deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setIsInstalled(true);
      }
      setDeferredPrompt(null);
    } else if (isIOS) {
      setShowIOSHint(prev => !prev);
    }
  }, [deferredPrompt, isIOS]);

  if (isInstalled) return null;

  // Hide if not iOS and no prompt available (unsupported browser)
  if (!deferredPrompt && !isIOS) return null;

  const labels: Record<string, string> = {
    ru: 'Добавить на экран',
    en: 'Add to Home Screen',
    ir: 'افزودن به صفحه اصلی',
  };

  const iosHints: Record<string, { step1: string; step2: string; step3: string }> = {
    ru: {
      step1: 'Нажмите кнопку «Поделиться»',
      step2: 'внизу экрана в Safari',
      step3: 'Выберите «На экран Домой»',
    },
    en: {
      step1: 'Tap the "Share" button',
      step2: 'at the bottom of Safari',
      step3: 'Select "Add to Home Screen"',
    },
    ir: {
      step1: 'روی دکمه «اشتراک‌گذاری» بزنید',
      step2: 'در پایین Safari',
      step3: '«افزودن به صفحه اصلی» را انتخاب کنید',
    },
  };

  const hint = iosHints[lang] || iosHints.en;

  return (
    <div className="install-wrap">
      <button
        onClick={handleInstall}
        className={variant === 'hero' ? 'btn btn-primary' : 'btn btn-primary btn-sm'}
      >
        <IconPlus size={14} />
        {labels[lang] || labels.en}
      </button>

      {showIOSHint && isIOS && (
        <div className="ios-hint" ref={hintRef}>
          <div className="ios-hint-arrow" />
          <div className="ios-hint-content">
            <p><strong>{hint.step1}</strong></p>
            <p className="ios-hint-sub">{hint.step2}</p>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ margin: '8px auto', display: 'block' }}>
              <rect x="4" y="4" width="16" height="16" rx="2" />
              <polyline points="12 4 12 0" />
              <polyline points="8 3 12 0 16 3" />
            </svg>
            <p><strong>{hint.step3}</strong></p>
          </div>
        </div>
      )}
    </div>
  );
}
