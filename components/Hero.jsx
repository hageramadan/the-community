'use client';
import { useLanguage } from '@/context/LanguageContext';
import GradientButton from './GradientButton';
import Image from 'next/image';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative max-h-206 flex items-center overflow-hidden pt-40 lg:pt-32 pb-20"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero.png')" }}
      />

      <div className="relative container mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-3 lg:gap-12 items-center">
          {/* النص */}
          <div className="order-2 lg:order-1 text-center lg:text-start mb-5 lg:mb-0">
            <h1 className="animate-fade-up delay-200 text-xl md:text-2xl lg:text-[46px] font-bold text-white leading-tight mb-6">
              {t('hero.title')}{' '}
              <span className="text-white">{t('hero.titleHighlight')}</span>
            </h1>

            <p className="animate-fade-up delay-300 text-white text-base md:text-2xl leading-relaxed mb-3 lg:mb-10 max-w-xl mx-auto lg:mx-0">
              {t('hero.subtitle')}
            </p>

            <div className="animate-fade-up delay-400 flex justify-center lg:justify-start">
              <GradientButton className={`font-bold rounded-[8px]  bg-linear-to-r from-secondary to-primary`}>
                {t('hero.cta')}
              </GradientButton>
            </div>
          </div>

          {/* الصورة */}
          <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end">
            <div className="animate-fade-in delay-500 relative w-full max-w-lg hero-image-wrap">
              <Image
                width={400}
                height={500}
                src="/images/mobile.png"
                alt={t('hero.imageAlt')}
                className="relative h-full  w-full animate-float"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}