import React from 'react';
import { Analytics } from '../utils/analytics';

const CtaSection: React.FC = () => {
  const handleGetFree = () => {
    Analytics.trackEvent('Conversion', 'Click CTA', 'Bottom CTA Free');
  };
  
  const handleAndroidDownload = () => {
    Analytics.trackEvent('Conversion', 'Click Download', 'Android App Store');
    window.open('https://play.google.com/store/apps/details?id=com.zwinnysolutions.notiongo&pli=1', '_blank');
  };
  
  const handleiOSDownload = () => {
    Analytics.trackEvent('Conversion', 'Click Download', 'CTA iOS App Store');
    window.open('https://apps.apple.com/app/notiongo/id6738980498', '_blank');
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
          <button onClick={handleAndroidDownload} className="cursor-pointer">
            <img src="/androiddownload.svg" alt="Download for Android" className="h-[50px] w-auto" />
          </button>
          <button onClick={handleiOSDownload} className="cursor-pointer">
            <img src="/appledownload.svg" alt="Download for iOS" className="h-[50px] w-auto" />
          </button>
        </div>
        <p className="mt-6 text-xs text-slate-500 uppercase tracking-widest">No credit card required</p>
      </div>
    </section>
  );
};

export default CtaSection;