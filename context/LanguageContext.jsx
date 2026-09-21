'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import ar from '@/messages/ar.json';
import en from '@/messages/en.json';

const messages = { ar, en };

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [locale, setLocale] = useState('ar');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('locale');
    if (saved === 'ar' || saved === 'en') {
      setLocale(saved);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    document.documentElement.lang = locale;
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('locale', locale);

    // لما اللغة تبقى إنجليزي، نستخدم Public Sans / لما عربي نستخدم Cairo
    if (locale === 'en') {
      document.body.style.fontFamily =
        'var(--font-public-sans), sans-serif';
    } else {
      document.body.style.fontFamily = 'var(--font-cairo), sans-serif';
    }
  }, [locale, mounted]);

  const toggleLocale = () => {
    setLocale((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  const t = (key) => {
    const keys = key.split('.');
    let value = messages[locale];
    for (const k of keys) {
      value = value?.[k];
    }
    return value ?? key;
  };

  const tRaw = (key) => {
    const keys = key.split('.');
    let value = messages[locale];
    for (const k of keys) {
      value = value?.[k];
    }
    return value ?? [];
  };

  return (
    <LanguageContext.Provider
      value={{ locale, setLocale, toggleLocale, t, tRaw, mounted }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}