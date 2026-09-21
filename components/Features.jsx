'use client';
import { FaBookOpen, FaUsers, FaHeadset, FaBriefcase } from 'react-icons/fa';
import { useLanguage } from '@/context/LanguageContext';

const icons = [FaBookOpen, FaUsers, FaHeadset, FaBriefcase];

export default function Features() {
  const { t, tRaw } = useLanguage();
  const items = tRaw('features.items');

  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
            {t('features.title')}
          </h2>
          <p className="text-gray-600 text-lg">{t('features.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i];
            return (
              <div
                key={i}
                className="p-8 bg-white rounded-2xl border border-gray-100 hover:border-secondary hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/5 group-hover:bg-secondary flex items-center justify-center mb-5 transition">
                  <Icon className="text-2xl text-primary group-hover:text-black transition" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}