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
    <section id="solutions" className="py-5 lg:py-16 bg-linear-to-r from-[#F3F4F5] to-[#E4EBEF] overflow-hidden">
      <div className="container mx-auto px-2 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-start order-2 lg:order-1 flex flex-col gap-3 lg:gap-8">
            <h2 className="text-xl md:text-2xl lg:text-[40px] font-extrabold text-[#070D14] leading-tight mb-8">
              {t('platformSection.title')}{' '}
              <span className="text-[#070D14]">
                {t('platformSection.titleHighlight')}
              </span>
            </h2>

            <div className="flex  justify-center w-full  lg:justify-start gap-3 bg-[#E9F5F7] rounded-full lg:w-fit px-3 lg:px-5 py-2.5 ">
              {tabs.map((tab, i) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveIndex(i)}
                  className={`px-2 lg:px-5 py-2.5 rounded-full text-xs lg:text-base  transition-all duration-300 ${
                    activeIndex === i
                      ? 'bg-secondary text-white '
                      : ' text-primary hover:bg-secondary/20'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div key={active.id} className="animate-fade-in">
              <h3 className="text-xl lg:text-[40px] font-bold text-[#011917] mb-3">
                {active.title}
              </h3>
              <p className="text-[#353636] text-base lg:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0">
                {active.desc}
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-6 " />
              <div key={active.id} className="relative animate-fade-in">
                <Image
                  src={active.image}
                  alt={active.title}
                  width={1500}
                  height={1600}
                  className="relative  w-[500px] h-[536px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}