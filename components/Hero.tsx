import React from 'react';
import { ArrowRight, Download, Star, Smartphone, Apple } from 'lucide-react';
import Button from './Button';
import { PhoneMockup, PhoneMockupSecondary } from './PhoneMockup';
import { TAGLINE } from '../constants';
import { Analytics } from '../utils/analytics';

const Hero: React.FC = () => {
  const handleAndroidDownload = () => {
    Analytics.trackEvent('Conversion', 'Click Download', 'Hero Android App Store');
    window.open('https://play.google.com/store/apps/details?id=com.zwinnysolutions.notiongo&pli=1', '_blank');
  };
  
  const handleAppleComingSoon = () => {
    Analytics.trackEvent('Conversion', 'Click Download', 'Hero iOS Coming Soon');
    alert("🍎 iOS app is coming soon! We'll notify you when it's available.");
  };

  const handleViewFeatures = () => {
    Analytics.trackEvent('Navigation', 'Click Link', 'Hero View Features');
    window.location.hash = 'features';
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
         <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-purple-200/30 rounded-full blur-3xl mix-blend-multiply"></div>
         <div className="absolute top-40 left-0 w-[400px] h-[400px] bg-indigo-200/30 rounded-full blur-3xl mix-blend-multiply"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold uppercase tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              v1.0 Now Available
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1]">
              Manage <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Notion Databases</span> with Peace
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-600 max-w-xl leading-relaxed">
              {TAGLINE}. Create custom forms, manage multiple databases, and enjoy a distraction-free mobile experience.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto gap-2 group" onClick={handleAndroidDownload}>
                <Smartphone size={18} />
                Download for Android
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto gap-2 group border-slate-300 text-slate-700 hover:bg-slate-50" 
                onClick={handleAppleComingSoon}
              >
                <Apple size={18} />
                iOS Coming Soon
              </Button>
            </div>
            
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <Button 
                variant="secondary" 
                size="lg" 
                className="w-full sm:w-auto gap-2"
                onClick={handleViewFeatures}
              >
                View Features <ArrowRight size={18} />
              </Button>
            </div>

            <div className="flex items-center gap-4 pt-4">
               <div className="flex -space-x-2">
                 {[1,2,3,4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[10px] text-slate-500 font-bold overflow-hidden">
                       <img src={`https://picsum.photos/100/100?random=${i}`} alt="User" className="w-full h-full object-cover" />
                    </div>
                 ))}
               </div>
               <div className="text-sm text-slate-600">
                  <div className="flex items-center text-yellow-400 gap-0.5">
                     <Star size={12} fill="currentColor" />
                     <Star size={12} fill="currentColor" />
                     <Star size={12} fill="currentColor" />
                     <Star size={12} fill="currentColor" />
                     <Star size={12} fill="currentColor" />
                  </div>
                  <span className="font-medium text-slate-900">100+</span> Early Adopters
               </div>
            </div>
          </div>

          {/* Mockup Presentation */}
          <div className="relative flex justify-center lg:justify-end mt-10 lg:mt-0">
             {/* Decorative blob behind phone */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[600px] bg-gradient-to-b from-indigo-500/10 to-purple-500/10 rounded-[3rem] rotate-[-6deg]"></div>
             
             <div className="relative z-10 flex items-end">
               <div className="hidden sm:block absolute -left-20 bottom-10 z-0 opacity-60 scale-90">
                  <PhoneMockupSecondary />
               </div>
               <div className="z-10 relative">
                 <PhoneMockup />
               </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;