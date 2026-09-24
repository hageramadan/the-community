'use client';
import { useState } from 'react';
import Image from 'next/image';
import { HiOutlinePlus } from 'react-icons/hi';
import { useLanguage } from '@/context/LanguageContext';
import { MdSupportAgent } from "react-icons/md";


export default function FaqSection() {
  const { t, tRaw } = useLanguage();
  const items = tRaw('faqSection.items');
  const card = tRaw('faqSection.card');
  const [openIndex, setOpenIndex] = useState(0);

  if (!items || items.length === 0) return null;

  const toggle = (i) => {
    setOpenIndex((prev) => (prev === i ? -1 : i));
  };

  return (
    <section id="faq" className="py-10 lg:py-28 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-[60%_35%] lg:justify-between gap-12 lg:gap-0 items-start">
          <div>
            <h2 className="text-2xl md:text-2xl lg:text-[32px] font-extrabold text-[#070D14] mb-5 lg:mb-10 text-center lg:text-start">
              {t('faqSection.title')}
            </h2>

            <div className="space-y-4">
              {items.map((item, i) => {
                const isOpen = openIndex === i;
                return (
                  <div
                    key={i}
                    className={`rounded-2xl overflow-hidden transition-all duration-300 ${
                      isOpen
                        ? 'bg-primary shadow-lg'
                        : 'bg-white border border-[#EAEAEA] hover:border-secondary/40'
                    }`}
                  >
                    <button
                      onClick={() => toggle(i)}
                      className="w-full flex items-center justify-between gap-4 text-start px-4 py-1.5 lg:py-3 lg:px-5"
                      aria-expanded={isOpen}
                    >
                      <span
                        className={`text-sm lg:text-lg font-semibold transition-colors duration-300 ${
                          isOpen ? 'text-white' : 'text-[#070D14]'
                        }`}
                      >
                        {item.q}
                      </span>

                      <span
                        className={`shrink-0 w-8 h-8 lg:w-9 lg:h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                          isOpen
                            ? ' text-white rotate-45'
                            : ' text-primary'
                        }`}
                      >
                        <HiOutlinePlus className="text-lg" />
                      </span>
                    </button>

                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen ? 'bg-white' : ''
                      }`}
                      style={{
                        gridTemplateRows: isOpen ? '1fr' : '0fr',
                      }}
                    >
                      <div className="overflow-hidden">
                        <p
                          className={`px-5 lg:px-6 py-5 lg:py-6 text-sm lg:text-base leading-relaxed transition-colors duration-300 ${
                            isOpen ? 'text-[#585858]' : ''
                          }`}
                        >
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative justify-self-center lg:justify-self-end w-full max-w-113.75">
            <div
              className="relative w-full rounded-3xl overflow-hidden shadow-2xl"
              style={{ height: '500px' }}
            >
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 455px"
              />
            </div>

         <div
  className="absolute -bottom-4 inset-s-4 lg:-inset-s-4 rounded-2xl p-6 bg-linear-to-br from-[#046574bb] via-[#161A43] to-primary text-white shadow-2xl backdrop-blur-md flex flex-col items-center justify-center text-center transition-all duration-300 ease-out hover:-translate-y-3  cursor-pointer"
  style={{ width: '296px', height: '344px' }}
>
                <div className="w-12 h-12 lg:w-15.5 lg:h-14.75 rounded-lg bg-white/15 flex items-center justify-center mb-4 shrink-0">
                    <MdSupportAgent className="w-7.5 h-6.75 lg:w-10 lg:h-9.75 text-white" />
                </div>

                <h3 className="text-lg lg:text-[22px] font-bold mb-3">
                    {card.title}
                </h3>

                <p className=" text-sm lg:text-[16px] leading-relaxed mb-5">
                    {card.desc}
                </p>

                <button className="inline-flex items-center justify-center w-full py-3 rounded-lg bg-white text-primary text-sm font-bold lg:text-base hover:bg-white/90 transition">
                    {card.btn}
                </button>
                </div>
          </div>
        </div>
      </div>
    </section>
  );
}