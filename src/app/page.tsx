import { CompareSection } from '@/components/home/compare-section';
import { ContactSection } from '@/components/home/contact-section';
import { FAQSection } from '@/components/home/faq-section';
import { HeroSection } from '@/components/home/hero-section';
import { PriceSimulatorForm } from '@/components/home/price-simulation-section';
import { PricingSection } from '@/components/home/pricing-section';
import { ServicesSection } from '@/components/home/services-section';
import { StepsSection } from '@/components/home/steps-section';

export default function Home() {
  return (
    <div className="duration-1000 ease-out animate-in fade-in slide-in-from-bottom-10">
      <HeroSection />
      {/* <ServicesSection /> */}
      <StepsSection />
      <CompareSection />
      {/* <PricingSection /> */}
      <PriceSimulatorForm />
      <FAQSection />
      <ContactSection />
    </div>
  );
}
