'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HiMenu, HiX } from 'react-icons/hi';
import LanguageSwitcher from './LanguageSwitcher';
import GradientButton from './GradientButton';
import { useLanguage } from '@/context/LanguageContext';

export default function Navbar() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  const links = [
    { href: '#home', label: t('nav.why') },
    { href: '#features', label: t('nav.features') },
    { href: '#solutions', label: t('nav.solutions') },
    { href: '#services', label: t('nav.services') },
    { href: '#security', label: t('nav.security') },
    { href: '#faq', label: t('nav.faq') },
    { href: '#join', label: t('nav.joinUs') },
  ];

  const [active, setActive] = useState('#home');

  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter(Boolean);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => sections.forEach((s) => observer.unobserve(s));
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      const yOffset = -100;
      const y =
        el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActive(href);
    } else if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActive('#home');
    }
  };

const linkClasses = (href) =>
  `text-primary font-medium pb-0.5 transition-all duration-200 ${
    active === href
      ? 'text-primary font-bold underline decoration-2 underline-offset-7 decoration-primary'
      : 'text-black/75 hover:text-secondary'
  }`;

  return (
    <header className="fixed top-4 left-4 right-4 z-50">
      <nav className="container mx-auto flex items-center justify-between px-6 py-2  rounded-4xl bg-white/95 backdrop-blur-md border border-black/10 shadow-lg">
        <Link href="#home" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="The Community"
            width={800}
            height={800}
            className="object-contain w-13.5 h-14"
          />
        </Link>

        <ul className="hidden lg:flex items-center gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={(e) => handleClick(e, l.href)}
                className={linkClasses(l.href)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <LanguageSwitcher />
          <GradientButton className={`font-semibold rounded-2xl bg-linear-to-l from-secondary to-primary`}>
            {t('nav.demo')}
          </GradientButton>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-primary text-2xl"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden mt-2 container mx-auto bg-white rounded-2xl p-4 border border-black/10 shadow-xl">
          <ul className="flex flex-col gap-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={(e) => {
                    handleClick(e, l.href);
                    setOpen(false);
                  }}
                  className={`block py-2 ${linkClasses(l.href)}`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-3">
            <LanguageSwitcher />
            <GradientButton className="w-full py-3 text-sm rounded-full bg-linear-to-r from-primary to-secondary">
              {t('nav.demo')}
            </GradientButton>
          </div>
        </div>
      )}
    </header>
  );
}