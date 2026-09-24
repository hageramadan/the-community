'use client';
import { useLanguage } from '@/context/LanguageContext';

export default function WhySection() {
  const { t, tRaw } = useLanguage();
  const items = tRaw('whySection.items');

  return (
    <section id="features" className="py-10 lg:py-25 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-4xl lg:text-[40px] font-extrabold text-[#070D14] text-center mb-5 lg:mb-11.5">
          {t('whySection.title')}
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="group text-center relative rounded-2xl p-5 lg:p-8  border border-[#EAEAEA] transition-all duration-500 hover:bg-gradient-to-r hover:from-secondary hover:to-primary hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
            >
              <h3 className="text-base lg:text-xl font-bold text-[#191C1F] mb-2 lg:mb-3 transition-colors duration-300 group-hover:text-white">
                {item.title}
              </h3>
              <p className="text-xs lg:text-base text-[#545454] leading-relaxed transition-colors duration-300 group-hover:text-white/90">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}