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
import WhyChooseUs from './WhyChooseUs';
import PricingOffers from './PricingOffers';


const LandingPage = ({mode}) => {
  return (
    <> 
      <HeroSection mode={mode} />
      <HighlightSection mode={mode}/>
      <ImageCarousel mode={mode}/>
      <AvantagesSection mode={mode}/>
      <PossibilitiesSection mode={mode}/>
      <WhyChooseUs mode={mode}/>
      <PricingOffers  mode={mode}/>
     {/* <FeaturesSection />
      <BenefitsSection />
      <Testimonials />
      <ContactSection />*/}
    </>
  );
};

export default LandingPage;
