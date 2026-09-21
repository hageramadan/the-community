'use client';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const socials = [FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn];

  return (
    <footer id="contact" className="bg-primary pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-secondary flex items-center justify-center font-bold text-black">
                C
              </div>
              <span className="text-black font-bold text-lg">The Community</span>
            </div>
            <p className="text-black/60 max-w-md">{t('footer.desc')}</p>
          </div>

          <div>
            <h4 className="text-black font-bold mb-4">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-2">
              {['home', 'features', 'about', 'contact'].map((k) => (
                <li key={k}>
                  <a
                    href={`#${k}`}
                    className="text-black/60 hover:text-secondary transition text-sm"
                  >
                    {t(`nav.${k}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-black font-bold mb-4">{t('footer.followUs')}</h4>
            <div className="flex gap-3">
              {socials.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-secondary flex items-center justify-center text-black transition"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-black/50 text-sm">
            © {new Date().getFullYear()} The Community. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}