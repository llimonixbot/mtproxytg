'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Lang, Translation } from '@/lib/types';
import ru from './ru';
import en from './en';
import ir from './ir';

const translations: Record<Lang, Translation> = { ru, en, ir };

interface I18nContextType {
  lang: Lang;
  t: Translation;
  setLang: (lang: Lang) => void;
  isRTL: boolean;
}

const I18nContext = createContext<I18nContextType>({
  lang: 'ru',
  t: ru,
  setLang: () => {},
  isRTL: false,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('ru');

  useEffect(() => {
    const saved = localStorage.getItem('mtproxy_lang') as Lang | null;
    if (saved && translations[saved]) {
      setLangState(saved);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === 'ir' ? 'fa' : lang;
    document.documentElement.dir = lang === 'ir' ? 'rtl' : 'ltr';
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem('mtproxy_lang', l);
  };

  return (
    <I18nContext.Provider value={{ lang, t: translations[lang], setLang, isRTL: lang === 'ir' }}>
      {children}
    </I18nContext.Provider>
  );
}

export const useI18n = () => useContext(I18nContext);
