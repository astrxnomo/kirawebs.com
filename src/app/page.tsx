import { CompareSection } from '@/components/sections/compare-section';
import { ContactSection } from '@/components/sections/contact-section';
import { FAQSection } from '@/components/sections/faq-section';
import { HeroSection } from '@/components/sections/hero-section';
import { ServicesSection } from '@/components/sections/services-section';
import { StepsSection } from '@/components/sections/steps-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <StepsSection />
      <CompareSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
