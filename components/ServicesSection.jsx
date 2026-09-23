'use client';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function ServicesSection() {
  const { t, tRaw } = useLanguage();
  const items = tRaw('servicesSection.items');

  if (!items || items.length === 0) return null;

  return (
    <section id="services" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl lg:text-[40px] font-extrabold text-[#070D14] text-center max-w-7xl mx-auto  mb-12 lg:mb-16">
          {t('servicesSection.title')}
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="group max-h-55 rounded-xl lg:rounded-2xl py-2 px-4 gap-2 lg:gap-4 lg:py-6 lg:px-11.5 flex flex-col items-center text-center bg-white border border-[#EAEAEA] transition-all duration-500 hover:bg-gradient-to-br hover:from-primary hover:to-secondary hover:border-transparent hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
             
            >
              <div className="shrink-0 w-14 h-14  lg:w-16 lg:h-16 rounded-xl flex items-center justify-center shadow-md bg-white group-hover:bg-white/10 transition-colors duration-300">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={64}
                  height={64}
                  className="w-14 h-14 lg:w-16 lg:h-16 object-contain"
                />
              </div>

              <h3 className="text-base lg:text-[20px] font-bold text-[#191C1F] transition-colors duration-300 group-hover:text-white">
                {item.title}
              </h3>

              <p className="text-xs lg:text-[15px] text-[#545454]  transition-colors duration-300 group-hover:text-white/90 line-clamp-3">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}