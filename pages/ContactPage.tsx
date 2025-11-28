import React from 'react';
import { Mail, MessageSquare, MapPin } from 'lucide-react';
import Button from '../components/Button';
import { Analytics } from '../utils/analytics';

// Declare Tawk_API for TypeScript
declare global {
  interface Window {
    Tawk_API?: {
      maximize?: () => void;
      toggle?: () => void;
      showWidget?: () => void;
    };
  }
}

const ContactPage: React.FC = () => {
  
  const openTawkChat = () => {
    Analytics.trackEvent('Conversion', 'Open Live Chat', 'Contact Page');
    
    // Open Tawk.to chat widget
    if (window.Tawk_API && window.Tawk_API.maximize) {
      window.Tawk_API.maximize();
    } else if (window.Tawk_API && window.Tawk_API.toggle) {
      window.Tawk_API.toggle();
    }
  };

  return (
    <div className="pt-20 animate-in fade-in duration-500">
      {/* Header */}
      <div className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 border-b border-slate-200 py-16 px-4 text-center">
        <h1 className="text-4xl font-bold text-slate-900">Contact Us</h1>
        <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
          Have a question, feedback, or just want to say hello? We'd love to hear from you.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Primary Chat Support Section */}
        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-8 md:p-12 border border-purple-200 shadow-sm mb-12">
          <div className="text-center">
            <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <MessageSquare className="w-10 h-10 text-purple-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Chat With Us</h2>
            <p className="text-slate-600 text-lg mb-8 max-w-xl mx-auto">
              Get instant support from our team. We're here to help you with any questions about NotionGo.
            </p>
            <Button 
              onClick={openTawkChat}
              className="text-lg px-8 py-4"
            >
              <span className="flex items-center gap-3">
                <MessageSquare size={22} />
                Start a Conversation
              </span>
            </Button>
            <p className="text-slate-500 text-sm mt-4">
              Available 24/7 • Typical response time: under 5 minutes
            </p>
          </div>
        </div>

        {/* Secondary Contact Options */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">Email Us</h3>
            <p className="text-slate-600 text-sm mb-3">Prefer email? We'll respond within 24 hours</p>
            <a href="mailto:support@notiongo.app" className="text-indigo-600 font-medium hover:text-indigo-700">
              support@notiongo.app
            </a>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">Location</h3>
            <p className="text-slate-600 text-sm">
              Remote-first company<br />
              Serving users worldwide
            </p>
          </div>
        </div>

        {/* FAQ Teaser */}
        <div className="mt-12 bg-gradient-to-r from-slate-50 to-slate-100 rounded-2xl p-6 border border-slate-200 text-center">
          <h3 className="font-semibold text-slate-900 mb-2">Looking for quick answers?</h3>
          <p className="text-slate-600 text-sm">
            Check out our frequently asked questions or browse our documentation for instant help with common topics.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
