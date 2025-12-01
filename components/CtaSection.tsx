import React from 'react';
import Button from './Button';
import { Analytics } from '../utils/analytics';
import { Download } from 'lucide-react';

const CtaSection: React.FC = () => {
  const handleGetFree = () => {
    Analytics.trackEvent('Conversion', 'Click CTA', 'Bottom CTA Free');
  };
  const handleDownload = () => {
    Analytics.trackEvent('Conversion', 'Click Download', 'Hero Section');
    // Logic for download usually goes here
    alert("This would open the app store link!");
  };
  const handleReadDocs = () => {
    Analytics.trackEvent('Engagement', 'Click Link', 'Bottom CTA Docs');
  };

  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
       {/* Decorative circles */}
       <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
       <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to simplify your Notion workflow?</h2>
        <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
          Join thousands of users who have switched to a calmer, <br/>faster way of managing their databases on mobile.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">

          <Button size="lg" className="w-full sm:w-auto gap-2 group" onClick={handleDownload}>
            Download App <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
          </Button>
        </div>
        <p className="mt-6 text-xs text-slate-500 uppercase tracking-widest">No credit card required</p>
      </div>
    </section>
  );
};

export default CtaSection;