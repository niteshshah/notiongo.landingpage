import React from 'react';
import CtaSection from '../components/CtaSection';
import { ShieldCheck, Lock, Smartphone, Server } from 'lucide-react';

const DataSecurityPage: React.FC = () => {
  return (
    <div className="pt-20 animate-in fade-in duration-500">
      <div className="bg-slate-900 text-white py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
           <div className="absolute top-[-50%] left-[-10%] w-[500px] h-[500px] bg-indigo-600 rounded-full blur-[100px]"></div>
           <div className="absolute bottom-[-50%] right-[-10%] w-[500px] h-[500px] bg-purple-600 rounded-full blur-[100px]"></div>
        </div>
        
        <div className="relative z-10 max-w-3xl mx-auto">
           <ShieldCheck className="w-16 h-16 mx-auto mb-6 text-indigo-400" />
           <h1 className="text-4xl md:text-5xl font-bold mb-6">Data Security</h1>
           <p className="text-xl text-slate-300">
             Security isn't an afterthought—it's the core architectural principle of NotionGo.
           </p>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600">
                <Smartphone size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Device-Centric Architecture</h3>
                <p className="text-slate-600 leading-relaxed">
                  Your data doesn't touch our servers. NotionGo acts as a direct conduit between your device and the Notion API. This eliminates the risk of a "middle-man" data breach on our end.
                </p>
              </div>
            </div>

             <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600">
                <Lock size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Local Key Storage</h3>
                <p className="text-slate-600 leading-relaxed">
                  Your Notion Integration Token is stored in your device's secure local storage. We employ best practices to ensure this token is only accessible by the application instance running on your device.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
             <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600">
                <Server size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Encryption in Transit</h3>
                <p className="text-slate-600 leading-relaxed">
                  All communication between NotionGo and Notion uses TLS 1.2+ (Transport Layer Security). Your data is encrypted from the moment it leaves your device until it reaches Notion's servers.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h4 className="font-semibold text-slate-900 mb-2">Security Checklist</h4>
              <ul className="space-y-3">
                 {[
                   "No database content stored on our servers",
                   "No user tracking or analytics of personal data",
                   "Direct API calls to Notion",
                   "Open source frontend code availability (soon)"
                 ].map((item, i) => (
                   <li key={i} className="flex items-center gap-3 text-sm text-slate-700">
                     <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
                       <ShieldCheck size={12} />
                     </div>
                     {item}
                   </li>
                 ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <CtaSection />
    </div>
  );
};

export default DataSecurityPage;