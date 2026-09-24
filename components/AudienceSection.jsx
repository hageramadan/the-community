"use client";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function AudienceSection() {
  const { t, tRaw } = useLanguage();
  const items = tRaw("audienceSection.items");

  if (!items || items.length === 0) return null;

  return (
    <section id="audience" className="py-6 lg:py-12  overflow-hidden">
      <div className="container mx-auto px-6 lg:px-6">
        <h2 className="text-2xl md:text-3xl lg:text-[40px] font-extrabold text-[#070D14] text-center max-w-7xl mx-auto  mb-12 lg:mb-16">
          {t("audienceSection.title")}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-3 lg:gap-10 pt-16">
          {items.map((item, i) => (
            <div
              key={i}
              className="group relative bg-[#EDF5FF] border border-[#EAEAEA] rounded-3xl mb-6 lg:mb-1 pt-4 pb-5 lg:pt-16 lg:pb-8 px-6 lg:px-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-14 h-14 lg:w-18.5 lg:h-18.5">
                <div className="relative w-full h-full  overflow-hidden transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={200}
                    height={200}
                    className="object-cover w-14 h-14 lg:w-18.5 lg:h-18.5"
                  />
                </div>
              </div>

              <h3 className="text-xl lg:text-2xl font-bold text-[#191C1F] text-center mb-3 lg:mb-6 transition-colors duration-300">
                {item.title}
              </h3>

              <ul className="space-y-2">
                {item.points.map((point, j) => (
                  <p key={j} className="text-sm lg:text-[18px] text-[#545454] text-center  transition-colors duration-300  line-clamp-3">
                    {point}
                  </p>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
