'use client';
import Image from 'next/image';
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
} from 'react-icons/fa';
import { useLanguage } from '@/context/LanguageContext';
const WHATSAPP_NUMBER = '201024848723';
const socials = [
  {
    Icon: FaLinkedinIn,
    href: 'https://www.linkedin.com/company/tawajood/posts/?feedView=all',
    color: '#0A66C2',
    label: 'LinkedIn',
  },
  {
    Icon: FaInstagram,
    href: 'https://www.instagram.com/tawajoodco?igsh=MWxna2xqazBvZzQyaw%3D%3D',
    color: '#E4405F',
    label: 'Instagram',
  },
  {
    Icon: FaFacebookF,
    href: 'https://www.facebook.com/tawajood?mibextid=LQQJ4d',
    color: '#1877F2',
    label: 'Facebook',
  },
  {
    Icon: FaWhatsapp,
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
    color: '#25D366',
    label: 'WhatsApp',
  },
];

export default function Footer() {
  const { t, tRaw } = useLanguage();
  const columns = tRaw('footer.columns');

  return (
    <footer id="contact" className="bg-black pt-16 lg:pt-20 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* ============ العمود الأول: اللوجو + الوصف + السوشيال ============ */}
          <div className='col-span-3 lg:col-span-1'>
            <div className="mb-5">
              <Image
                src="/logo.png"
                alt="The Community"
                width={79}
                height={81}
                className="object-contain"
                style={{ width: '79px', height: '81px' }}
              />
            </div>

            <p className="text-white text-sm lg:text-base leading-relaxed mb-6 max-w-62">
              {t('footer.desc')}
            </p>

            <div className="flex items-center gap-3">
              {socials.map(({ Icon, href, color, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-7 h-7 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:-translate-y-1"
                  style={{ backgroundColor: color }}
                >
                  <Icon className="text-lg" />
                </a>
              ))}
            </div>
          </div>

          {/* ============ الأعمدة 2، 3، 4 ============ */}
          {columns.map((col, i) => (
            <div key={i}>
              <h4 className="text-white text-lg font-bold mb-5">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link, j) => (
                  <li key={j}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-secondary text-sm lg:text-base transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-white/50 text-sm">
          {t('footer.rights')} </p>
        </div>
      </div>
    </footer>
  );
}