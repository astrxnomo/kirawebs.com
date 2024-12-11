import { CompareSection } from '@/components/home/compare-section';
import { ContactSection } from '@/components/home/contact-section';
import { FAQSection } from '@/components/home/faq-section';
import { HeroSection } from '@/components/home/hero-section';
import { ServicesSection } from '@/components/home/services-section';
import { StepsSection } from '@/components/home/steps-section';

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
