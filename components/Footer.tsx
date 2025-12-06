import React, { useState } from 'react';
import { APP_NAME, LOGO_SRC } from '../constants';
import { Twitter, Github, Linkedin, Facebook, Instagram, Database } from 'lucide-react';
import { Analytics } from '../utils/analytics';

const Footer: React.FC = () => {
  const [logoError, setLogoError] = useState(false);

  const handleNav = (hash: string) => {
    Analytics.trackEvent('Navigation', 'Click Footer Link', hash);
    window.location.hash = hash;
    window.scrollTo(0,0);
  };

  const handleSocial = (platform: string) => {
    Analytics.trackEvent('Social', 'Click Social', platform);
  };

  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-center gap-2 mb-4">
                {logoError ? (
                  <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
                    <Database size={18} className="text-white" />
                  </div>
                ) : (
                  <img 
                    src={LOGO_SRC} 
                    alt={`${APP_NAME} Logo`} 
                    className="w-8 h-8 rounded-lg shadow-sm object-cover" 
                    onError={() => setLogoError(true)}
                  />
                )}
                <span className="text-lg font-bold text-slate-900">{APP_NAME}</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Bringing peace and speed to your Notion databases. Built for productivity enthusiasts who value their time.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Product</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><button onClick={() => handleNav('features')} className="hover:text-indigo-600">Features</button></li>
              <li><button onClick={() => handleNav('how-it-works')} className="hover:text-indigo-600">How it Works</button></li>
              {/* <li><a href="#" className="hover:text-indigo-600" onClick={() => Analytics.trackEvent('Navigation', 'Click Footer Link', 'Pricing')}>Pricing</a></li> */}
              <li><a href="#" className="hover:text-indigo-600" onClick={() => Analytics.trackEvent('Navigation', 'Click Footer Link', 'Changelog')}>Changelog</a></li> 
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Legal</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><button onClick={() => handleNav('privacy-policy')} className="hover:text-indigo-600 text-left">Privacy Policy</button></li>
              <li><button onClick={() => handleNav('terms-of-service')} className="hover:text-indigo-600 text-left">Terms of Service</button></li>
              <li><button onClick={() => handleNav('data-security')} className="hover:text-indigo-600 text-left">Data Security</button></li>
              <li><button onClick={() => handleNav('contact')} className="hover:text-indigo-600 text-left">Contact Us</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/profile.php?id=61583809614551" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-600 transition-colors" onClick={() => handleSocial('Facebook')}><Facebook size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors" onClick={() => handleSocial('Instagram')}><Instagram size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors" onClick={() => handleSocial('Twitter')}><Twitter size={20} /></a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 text-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} {APP_NAME} (Zwinny Solutions Pvt. Ltd.). All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;