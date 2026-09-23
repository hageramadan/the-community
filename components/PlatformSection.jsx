'use client';
import { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function PlatformSection() {
  const { t, tRaw } = useLanguage();
  const tabs = tRaw('platformSection.tabs');
  const [activeIndex, setActiveIndex] = useState(0);

  if (!tabs || tabs.length === 0) return null;

  const active = tabs[activeIndex];

  return (
    <section
      id="solutions"
      className="py-8 lg:py-16 bg-linear-to-r from-[#F3F4F5] to-[#E4EBEF] overflow-hidden"
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-16 items-center">
          {/* المحتوى النصي */}
          <div className="text-center lg:text-start order-2 lg:order-1 flex flex-col gap-4 lg:gap-8">
            <h2 className="text-2xl md:text-3xl lg:text-[40px] font-extrabold text-[#070D14] leading-tight">
              {t('platformSection.title')}{' '}
              <span className="text-[#070D14]">
                {t('platformSection.titleHighlight')}
              </span>
            </h2>

            {/* التابس - قابلة للتمرير أفقيًا على الموبايل */}
            <div className="w-full lg:w-fit mx-auto lg:mx-0">
              <div className="flex justify-start lg:justify-center gap-2 bg-[#E9F5F7] rounded-full px-2 lg:px-5 py-2 overflow-x-auto no-scrollbar">
                {tabs.map((tab, i) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveIndex(i)}
                    className={`shrink-0 px-3 lg:px-5 py-2 lg:py-2.5 rounded-full text-xs sm:text-sm lg:text-base whitespace-nowrap transition-all duration-300 ${
                      activeIndex === i
                        ? 'bg-secondary text-white'
                        : 'text-primary hover:bg-secondary/20'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            <div key={active.id} className="animate-fade-in">
              <h3 className="text-lg sm:text-xl lg:text-[40px] font-bold text-[#011917] mb-2 lg:mb-3">
                {active.title}
              </h3>
              <p className="text-sm sm:text-base lg:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0">
                {active.desc}
              </p>
            </div>
          </div>

          {/* الصورة */}
          <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[280px] sm:max-w-md lg:max-w-md">
              <div className="absolute -inset-6" />
              <div key={active.id} className="relative animate-fade-in">
                <Image
                  src={active.image}
                  alt={active.title}
                  width={1500}
                  height={1600}
                  sizes="(max-width: 640px) 280px, (max-width: 1024px) 448px, 500px"
                  className="relative w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}