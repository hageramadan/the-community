import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhySection from "@/components/WhySection";
import PlatformSection from "@/components/PlatformSection";
import LoadingScreen from "@/components/LoadingScreen";
import ServicesSection from "../components/ServicesSection";
import AudienceSection from "../components/AudienceSection";
import IntegrationSection from '@/components/IntegrationSection';
import SecuritySection from '@/components/SecuritySection';
import FaqSection from '@/components/FaqSection';
import CtaSection from "../components/CtaSection";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <LoadingScreen />
      {/* <Navbar /> */}
      <Hero />
      <WhySection />
      <PlatformSection />
      <ServicesSection />
      <AudienceSection/>
      <IntegrationSection />
      <SecuritySection />
      <FaqSection />
      <CtaSection />
      {/* <Footer/> */}
    </main>
  );
}
