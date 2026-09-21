'use client';
import { FaCheckCircle } from 'react-icons/fa';
import { useLanguage } from '@/context/LanguageContext';

export default function About() {
  const { t, tRaw } = useLanguage();
  const points = tRaw('about.points');

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="aspect-square rounded-3xl bg-primary relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/40 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/30 rounded-full blur-2xl" />
          </div>
        </div>

        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
            {t('about.title')}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            {t('about.desc')}
          </p>
          <ul className="space-y-3">
            {points.map((p, i) => (
              <li key={i} className="flex items-center gap-3 text-primary">
                <FaCheckCircle className="text-secondary shrink-0" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}