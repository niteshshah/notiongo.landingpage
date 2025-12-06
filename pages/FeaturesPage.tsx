import React from 'react';
import Features from '../components/Features';
import CtaSection from '../components/CtaSection';

const FeaturesPage: React.FC = () => {
  return (
    <div className="pt-20 animate-in fade-in duration-500">
      <div className="bg-white pt-16 pb-8 px-4 text-center">
        <h1 className="text-4xl font-bold text-slate-900">Features</h1>
        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
          Built for speed, privacy, and peace of mind.
        </p>
      </div>
      <Features />
      {/* <CtaSection /> */}
    </div>
  );
};

export default FeaturesPage;