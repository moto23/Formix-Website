import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyUsSection from "@/components/WhyUsSection";
import WorkSection from "@/components/WorkSection";
import PricingSection from "@/components/PricingSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyUsSection />
      <WorkSection />
      <PricingSection />
      <BenefitsSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
