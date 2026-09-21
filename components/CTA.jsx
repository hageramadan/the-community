'use client';
import { useLanguage } from '@/context/LanguageContext';

export default function CTA() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl bg-secondary p-12 md:p-20 text-center">
          <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
              {t('cta.title')}
            </h2>
            <p className="text-black/90 text-lg mb-8">{t('cta.subtitle')}</p>
            <button className="px-10 py-4 rounded-full bg-white text-secondary font-bold hover:bg-gray-100 transition shadow-lg">
              {t('cta.btn')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}