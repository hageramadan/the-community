'use client';
import { useState, useRef, useEffect } from 'react';
import { HiChevronDown } from 'react-icons/hi';
import { useLanguage } from '@/context/LanguageContext';

const languages = [
  { code: 'ar', label: 'العربية', flag: '🇪🇬' },
  { code: 'en', label: 'Eng', flag: '🇬🇧' },
];

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const current = languages.find((l) => l.code === locale) || languages[0];

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const handleSelect = (code) => {
    setLocale(code);
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="lang-switcher"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
       
        <span>{current.label}</span>
        <HiChevronDown
          className={`transition-transform duration-200 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute inset-e-0 mt-2 w-40 bg-white rounded-xl   shadow-xl overflow-hidden z-50 "
        >
          {languages.map((lang) => (
            <li key={lang.code}>
              <button
                onClick={() => handleSelect(lang.code)}
                className={`w-full flex items-center cursor-pointer gap-3 px-4  text-primary py-2.5  text-start transition ${
                  locale === lang.code
                    ? 'bg-secondary/10 text-secondary font-semibold'
                    : 'text-primary hover:bg-primary/5'
                }`}
              >
               
                <span className='text-sm lg:text-[14px]'>{lang.label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}