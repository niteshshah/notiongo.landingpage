import React from 'react';
import Hero from '../components/Hero';
import Reviews from '../components/Reviews';
import CtaSection from '../components/CtaSection';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Reviews />
      <CtaSection />
    </>
  );
};

export default HomePage;