import React from 'react';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import BenefitsSection from './BenefitsSection';
import Testimonials from './Testimonials';
import ContactSection from './ContactSection';
import HeroTest from './HeroTest';
import ImageCarousel from './ImageCarousel';
import HighlightSection from './HighlightSection';
import AvantagesSection from './AvantagesSection';
import PossibilitiesSection from './PossibilitiesSection';


const LandingPage = () => {
  return (
    <> 
      <HeroSection />
      <HighlightSection/>
      <ImageCarousel/>
      <AvantagesSection/>
      <PossibilitiesSection/>
     {/* <FeaturesSection />
      <BenefitsSection />
      <Testimonials />
      <ContactSection />*/}
    </>
  );
};

export default LandingPage;
