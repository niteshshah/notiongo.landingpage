import React from 'react';
import Button from './Button';
import { Analytics } from '../utils/analytics';
import { Download, Smartphone, Apple } from 'lucide-react';

const CtaSection: React.FC = () => {
  const handleGetFree = () => {
    Analytics.trackEvent('Conversion', 'Click CTA', 'Bottom CTA Free');
  };
  
  const handleAndroidDownload = () => {
    Analytics.trackEvent('Conversion', 'Click Download', 'Android App Store');
    window.open('https://play.google.com/store/apps/details?id=com.zwinnysolutions.notiongo&pli=1', '_blank');
  };
  
  const handleAppleComingSoon = () => {
    Analytics.trackEvent('Conversion', 'Click Download', 'iOS Coming Soon');
    alert("🍎 iOS app is coming soon! We'll notify you when it's available.");
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
          <Button size="lg" className="w-full sm:w-auto gap-2 group" onClick={handleAndroidDownload}>
            <Smartphone size={18} />
            Download for Android
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="w-full sm:w-auto gap-2 group border-slate-600 text-slate-300 hover:bg-slate-800 hover:border-slate-500" 
            onClick={handleAppleComingSoon}
          >
            <Apple size={18} />
            iOS Coming Soon
          </Button>
        </div>
        <p className="mt-6 text-xs text-slate-500 uppercase tracking-widest">No credit card required</p>
      </div>
    </section>
  );
};

export default CtaSection;