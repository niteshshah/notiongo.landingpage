import React, { useState } from 'react';
import { Mail, Bell, CheckCircle, Zap, Users, Calendar, AlertCircle } from 'lucide-react';
import Button from '../components/Button';
import { APP_NAME, WAITLIST_API_URL } from '../constants';
import { Analytics } from '../utils/analytics';

const ComingSoonPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setError(null);
    Analytics.trackEvent('Conversion', 'Join Waiting List', email);
    
    try {
      // Check if we're in development mode and using mock
      if (process.env.NODE_ENV === 'development' && WAITLIST_API_URL === 'MOCK') {
        // Mock response for development
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log('✅ Development mode: Email would be sent to API:', email);
        console.log('📧 In production, this will send email to support@notiongo.app');
        setIsSubmitted(true);
        setEmail('');
        Analytics.trackEvent('Conversion', 'Waiting List Success (Dev)', email);
        return;
      }

      console.log('📡 Sending request to:', WAITLIST_API_URL);
      console.log('📧 Email:', email);
      
      const response = await fetch(WAITLIST_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      console.log('📊 Response status:', response.status);
      
      const responseText = await response.text();
      console.log('📋 Raw response:', responseText);
      
      let result;
      try {
        result = JSON.parse(responseText);
      } catch (parseError) {
        console.error('❌ JSON Parse Error:', parseError);
        throw new Error('Server returned invalid response. Please try again.');
      }

      if (!response.ok) {
        console.error('❌ API Error:', result);
        throw new Error(result.error || 'Failed to join waiting list');
      }

      console.log('✅ Success:', result);
      setIsSubmitted(true);
      setEmail('');
      Analytics.trackEvent('Conversion', 'Waiting List Success', email);
    } catch (err) {
      console.error('❌ Form submission error:', err);
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
      Analytics.trackEvent('Conversion', 'Waiting List Error', email);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setEmail('');
    setError(null);
  };

  return (
    <div className="pt-20 animate-in fade-in duration-500">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Zap size={16} />
            Something Amazing is Coming
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            {APP_NAME} is <br />
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Almost Ready
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            We're putting the finishing touches on a revolutionary way to interact with your Notion databases. 
            Be the first to experience the future of calm, focused productivity.
          </p>

          {/* Waiting List Form */}
          <div className="max-w-md mx-auto" id="waitlist-form">
            {isSubmitted ? (
              <div className="bg-white rounded-2xl p-8 border border-emerald-200 shadow-sm">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">You're In!</h3>
                <p className="text-slate-600 mb-6">
                  Thank you for joining our waiting list. We'll notify you as soon as {APP_NAME} is ready.
                </p>
                <Button onClick={handleReset} variant="outline">
                  Join Another Email
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Bell className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Join the Waiting List</h3>
                <p className="text-slate-600 mb-6">
                  Be among the first to get early access and exclusive updates.
                </p>
                
                {error && (
                  <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                    <p className="text-red-700 text-sm">{error}</p>
                  </div>
                )}
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={isSubmitting || !email}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Joining...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <Mail size={18} />
                        Notify Me When Ready
                      </span>
                    )}
                  </Button>
                </div>
                
                <p className="text-xs text-slate-500 mt-4">
                  No spam, ever. Unsubscribe at any time.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Launch Timeline */}
      <div className="py-20 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Launch Timeline</h2>
          <p className="text-slate-600 mb-12">
            Stay updated on our progress towards launch
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 border border-slate-200">
              <div className="w-8 h-8 bg-emerald-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Phase 1: Complete</h3>
              <p className="text-slate-600 text-sm">
                Core features developed and tested
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 border border-indigo-200 ring-2 ring-indigo-100">
              <div className="w-8 h-8 bg-indigo-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Phase 2: In Progress</h3>
              <p className="text-slate-600 text-sm">
                Beta testing and final optimizations
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 border border-slate-200 opacity-60">
              <div className="w-8 h-8 bg-slate-300 rounded-full mx-auto mb-4"></div>
              <h3 className="font-semibold text-slate-900 mb-2">Phase 3: Coming Soon</h3>
              <p className="text-slate-600 text-sm">
                Public launch and general availability
              </p>
            </div>
          </div>
          
          <div className="mt-12 bg-indigo-50 rounded-2xl p-6 border border-indigo-100">
            <p className="text-indigo-700 font-medium">
              🚀 Expected Launch: Early 2026
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonPage;