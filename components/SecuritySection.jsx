'use client';
import {
  HiOutlineShieldCheck,
  HiOutlineKey,
  HiOutlineUsers,
  HiOutlineQrcode,
  HiOutlineServer,
  HiOutlineLockClosed,
} from 'react-icons/hi';
import { useLanguage } from '@/context/LanguageContext';

const icons = {
  shield: HiOutlineShieldCheck,
  key: HiOutlineKey,
  users: HiOutlineUsers,
  qr: HiOutlineQrcode,
  server: HiOutlineServer,
  lock: HiOutlineLockClosed,
};

export default function SecuritySection() {
  const { t, tRaw } = useLanguage();
  const items = tRaw('securitySection.items');

  if (!items || items.length === 0) return null;

  return (
    <section
      id="security"
      className="relative py-20 lg:py-28 overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, #021E3F 0%, #010F22 100%)',
      }}
    >
      <div
        className="hidden lg:block absolute rounded-full pointer-events-none"
        style={{
          width: '420px',
          height: '420px',
          top: '20%',
          left: '-140px',
          transform: 'translateY(-50%)',
          background:
            'radial-gradient(circle, #0D859729 0%, #0D859708 70%)',
        }}
      />
      <div
        className="hidden lg:block absolute rounded-full pointer-events-none"
        style={{
          width: '420px',
          height: '420px',
          top: '45%',
          left: '120px',
          transform: 'translateY(-50%)',
          background:
            'radial-gradient(circle, #0D859729 0%, #0D859708 70%)',
        }}
      />

      <div className="relative container mx-auto px-6">
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-[#0D85971F] border border-white/15 text-secondary text-sm font-medium mb-5 backdrop-blur-sm">
            {t('securitySection.badge')}
          </span>

          <h2 className="text-2xl md:text-4xl lg:text-[44px] font-bold text-white leading-tight max-w-2xl mx-auto">
            {t('securitySection.title')}
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-center lg:text-start lg:gap-6">
          {items.map((item, i) => {
            const Icon = icons[item.icon] || HiOutlineShieldCheck;
            return (
              <div
                key={i}
                className="group relative p-2 px-3 lg:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-secondary/40 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 lg:w-14 lg:h-14 mx-auto lg:mx-1 rounded-xl flex items-center justify-center bg-secondary/15 border border-secondary/30 mb-5 group-hover:bg-secondary group-hover:border-secondary transition-all duration-300">
                  <Icon className="text-2xl lg:text-3xl text-secondary group-hover:text-white transition-colors duration-300" />
                </div>

                <h3 className="text-base lg:text-lg font-semibold text-white mb-3">
                  {item.title}
                </h3>

                <p className="text-[#FFFFFF99] text-xs lg:text-sm leading-relaxed">
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