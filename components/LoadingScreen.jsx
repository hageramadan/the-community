'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let interval;
    let timeout;

    const startProgress = () => {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 90) return prev;
          const increment = prev < 50 ? 8 : prev < 75 ? 4 : 1;
          return Math.min(prev + increment, 90);
        });
      }, 120);
    };

    startProgress();

    const finish = () => {
      clearInterval(interval);
      setProgress(100);

      timeout = setTimeout(() => {
        setHidden(true);
        document.body.style.overflow = '';
      }, 500);
    };

    document.body.style.overflow = 'hidden';

    if (document.readyState === 'complete') {
      finish();
    } else {
      window.addEventListener('load', finish);
    }

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
      window.removeEventListener('load', finish);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white transition-opacity duration-500 ${
        hidden ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="relative mb-8 animate-fade-in">
        <Image
          src="/logo.png"
          alt="The Community"
          width={160}
          height={160}
          priority
          className="object-contain w-20 h-20 lg:w-25 lg:h-25"
        />
      </div>

      <div className="w-64 lg:w-80 h-1.5 bg-primary/10 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-300 ease-out"
          style={{
            width: `${progress}%`,
            backgroundImage: 'var(--gradient-btn)',
          }}
        />
      </div>

     
    </div>
  );
}