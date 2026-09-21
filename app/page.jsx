import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';

import WhySection from '@/components/WhySection';
import PlatformSection from '@/components/PlatformSection';
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <WhySection/>

     <PlatformSection />
    </main>
  );
}