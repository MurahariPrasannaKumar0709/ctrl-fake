import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import BenefitsSection from '../components/sections/BenefitsSection';
import ProductsSection from '../components/sections/ProductsSection';
import IntegrationsSection from '../components/sections/IntegrationsSection';
import MobileAppSection from '../components/sections/MobileAppSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import FAQSection from '../components/sections/FAQSection';
import CTASection from '../components/sections/CTASection';


const Home = () => {
  return (
    <main className="min-h-screen bg-black">
      <HeroSection />
      <FeaturesSection />
      <BenefitsSection />
      <ProductsSection />
      {/* <IntegrationsSection /> */}
      {/* <MobileAppSection /> */}
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </main>
  );
};

export default Home;
