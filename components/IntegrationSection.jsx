'use client';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function IntegrationSection() {
  const { t, tRaw } = useLanguage();
  const items = tRaw('integrationSection.items');

  if (!items || items.length === 0) return null;

  return (
    <section
      id="integration"
      className="py-6 lg:py-12 bg-white overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-start order-2 lg:order-1">
            <h2 className="text-xl md:text-2xl lg:text-[40px] font-bold text-[#011917] leading-tight mb-3 lg:mb-6">
              {t('integrationSection.title')}
            </h2>

            <p className="text-[#353636] text-base lg:text-2xl leading-relaxed mb-3 lg:mb-6 max-w-xl mx-auto lg:mx-0">
              {t('integrationSection.subtitle')}
            </p>

            <div className="flex flex-wrap gap-4">
              {items.map((item, i) => (
                <div
                  key={i}
                  className={`group flex items-center gap-2 bg-[#DEFBFF]  border border-[#E7EBF1] rounded-2xl px-3 py-2 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${
                    i === items.length - 1 ? 'sm:col-span-2 lg:col-span-1' : ''
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-secondary shrink-0" />
                  <span className="text-primary font-bold text-sm lg:text-lg">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-full max-w-122.5">
              <div className="absolute -inset-6 bg-secondary/10 rounded-[40px] blur-3xl" />
              <Image
                src={t('integrationSection.image')}
                alt={t('integrationSection.imageAlt')}
                width={490}
                height={420}
                className="relative w-full h-auto rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}