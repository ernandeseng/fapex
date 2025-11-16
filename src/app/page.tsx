import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import WhyChooseSection from '@/components/sections/WhyChooseSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import FleetSection from '@/components/sections/FleetSection';
import CoverageSection from '@/components/sections/CoverageSection';
import SocialProofSection from '@/components/sections/SocialProofSection';
import CtaSection from '@/components/sections/CtaSection';
import FloatingWhatsapp from '@/components/ui/FloatingWhatsapp';
import { FleetGallery } from '@/components/sections/FleetGallery';
import { fleetData } from '@/lib/fleet-data';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <main className="flex-1">
        <div className="relative">
          <Header />
          <HeroSection />
        </div>
        <ServicesSection />
        <WhyChooseSection />
        <HowItWorksSection />
        <FleetGallery fleetData={fleetData}>
          <FleetSection />
        </FleetGallery>
        <CoverageSection />
        <SocialProofSection />
        <CtaSection />
      </main>
      <Footer />
      <FloatingWhatsapp />
    </div>
  );
}
