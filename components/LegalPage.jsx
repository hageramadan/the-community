'use client';
import { FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '@/context/LanguageContext';

const WHATSAPP_NUMBER = '201024848723';

export default function LegalPage({ type = 'privacy' }) {
  const { t, tRaw } = useLanguage();
  const sections = tRaw('legal.sections');

  const title =
    type === 'privacy'
      ? t('legal.privacyTitle')
      : t('legal.termsTitle');

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'مرحبًا، أرغب في الحصول على عرض توضيحي.'
  )}`;

  return (
    <section className="pt-32 lg:pt-40 pb-20 lg:pb-28 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary mb-6 leading-tight">
          {title}
        </h1>

        <p className="text-gray-700 text-base lg:text-lg leading-relaxed mb-12">
          {t('legal.intro')}
        </p>

        <div className="space-y-8">
          {sections.map((section, i) => (
            <div key={i}>
              <h2 className="text-xl lg:text-2xl font-bold text-primary mb-3">
                {section.title}
              </h2>
              <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl p-8 lg:p-12 bg-gradient-to-br from-secondary to-primary text-white text-center">
          <h3 className="text-xl lg:text-2xl font-bold mb-3">
            {t('legal.ctaTitle')}
          </h3>
          <p className="text-white/85 text-base lg:text-lg mb-6">
            {t('legal.ctaDesc')}
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-primary font-semibold hover:bg-white/90 hover:-translate-y-1 transition-all duration-300 shadow-lg"
          >
            <FaWhatsapp className="text-xl text-[#25D366]" />
            {t('legal.ctaBtn')}
          </a>
        </div>
      </div>
    </section>
  );
}