import { CompareSection } from "@/components/home/compare-section"
import { ContactSection } from "@/components/home/contact-section"
import { FAQSection } from "@/components/home/faq-section"
import { HeroSection } from "@/components/home/hero-section"
import { PriceSimulatorForm } from "@/components/home/price-simulator-section"
import { StepsSection } from "@/components/home/steps-section"

export default function Home() {
  return (
    <div className="duration-1000 ease-out animate-in fade-in slide-in-from-bottom-10">
      <HeroSection />
      {/* <ServicesSection /> */}
      <StepsSection />
      <CompareSection />
      <PriceSimulatorForm />
      <FAQSection />
      <ContactSection />
    </div>
  )
}
