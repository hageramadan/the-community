'use client';
import { useLanguage } from '@/context/LanguageContext';

export default function Stats() {
  const { t } = useLanguage();

  const stats = [
    { value: '+10K', label: t('stats.members') },
    { value: '+500', label: t('stats.projects') },
    { value: '+25', label: t('stats.countries') },
    { value: '+120', label: t('stats.events') },
  ];

  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <div key={i} className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">
              {s.value}
            </div>
            <div className="text-black/70 text-sm md:text-primary">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}