import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhySection from "@/components/WhySection";
import PlatformSection from "@/components/PlatformSection";
import LoadingScreen from "@/components/LoadingScreen";
import ServicesSection from "../components/ServicesSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <LoadingScreen />
      <Navbar />
      <Hero />
      <WhySection />
      <PlatformSection />
      <ServicesSection />
    </main>
  );
}
