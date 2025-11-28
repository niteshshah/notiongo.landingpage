import React from 'react';
import HowItWorks from '../components/HowItWorks';
import CtaSection from '../components/CtaSection';

const HowItWorksPage: React.FC = () => {
  return (
    <div className="pt-20 animate-in fade-in duration-500">
      <div className="bg-slate-50 pt-16 pb-8 px-4 text-center border-b border-slate-200">
        <h1 className="text-4xl font-bold text-slate-900">How It Works</h1>
        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
          A simple setup process that respects your time and privacy.
        </p>
      </div>
      <HowItWorks />
      <CtaSection />
    </div>
  );
};

export default HowItWorksPage;