'use client';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: '420px',
          height: '420px',
          top: '-100px',
          left: '-120px',
          background: 'radial-gradient(circle, #0D859729 0%, #0D859708 70%)',
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: '420px',
          height: '420px',
          bottom: '-140px',
          right: '-100px',
          background: 'radial-gradient(circle, #0D859729 0%, #0D859708 70%)',
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-2xl">
        <h1
          className="font-extrabold text-[120px] lg:text-[180px] leading-none text-white mb-4"
          style={{ letterSpacing: '-4px' }}
        >
          404
        </h1>

        <h2 className="text-2xl lg:text-4xl font-bold text-white mb-4">
          {t('notFound.title')}
        </h2>

        <p className="text-white/70 text-base lg:text-lg mb-10 max-w-md mx-auto">
          {t('notFound.desc')}
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-primary font-semibold hover:bg-white/90 hover:-translate-y-1 transition-all duration-300 shadow-lg"
        >
          {t('notFound.btn')}
        </Link>
      </div>
    </div>
  );
}