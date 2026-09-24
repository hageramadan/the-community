'use client';
import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';

export default function CtaSection() {
  const { t } = useLanguage();

  return (
    <section id="join" className="py-10 lg:py-28 bg-white">
      <div className="container mx-auto px-6">
        <div
          className="relative overflow-hidden flex flex-col items-center justify-center text-center"
          style={{
            borderRadius: '48px',
            boxShadow: '0 20px 60px -15px #00000040',
            padding: '64px 96px',
            background: 'linear-gradient(135deg, #1A1F50 0%, #0D8597 100%)',
          }}
        >
          {/* دائرة 1 */}
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: '420px',
              height: '420px',
              top: '-120px',
              left: '-140px',
              background:
                'radial-gradient(circle, #0D859729 0%, #0D859708 70%)',
            }}
          />
          {/* دائرة 2 */}
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: '420px',
              height: '420px',
              bottom: '-160px',
              left: '-40px',
              background:
                'radial-gradient(circle, #0D859729 0%, #0D859708 70%)',
            }}
          />

          <div className="relative z-10 flex flex-col items-center">
            <h2
              className="font-extrabold text-xl lg:text-[40px] text-[#F4F1FF] mb-3 lg:mb-6 max-w-5xl"
             
            >
              {t('ctaSection.title')}
            </h2>

            <p className="text-white text-sm lg:text-2xl font-medium mb-4 lg:mb-10 max-w-5xl">
              {t('ctaSection.desc')}
            </p>

            <Link
             href={`https://wa.me/201024848723`} target="_blank"
              className="bg-white text-center flex justify-center items-center   text-base lg:text-[18px] font-semibold text-primary rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{ width: '276px', height: '68px' }}
            >
              {t('ctaSection.btn')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}