import React from 'react';
import { FEATURES } from '../constants';
import { FormInput, Database, ShieldCheck, WifiOff } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  FormInput: <FormInput className="w-6 h-6" />,
  Database: <Database className="w-6 h-6" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6" />,
  WifiOff: <WifiOff className="w-6 h-6" />,
};

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Why NotionGo?</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            A better way to input data on the go
          </p>
          <p className="mt-4 text-lg text-slate-600">
            Native Notion mobile app too slow? We built a lightweight companion that focuses purely on speed and simplicity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {FEATURES.map((feature, index) => (
            <div 
              key={index} 
              className="relative p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="absolute top-8 left-8 p-3 rounded-xl bg-white border border-slate-100 shadow-sm text-indigo-600 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                {iconMap[feature.icon]}
              </div>
              <div className="ml-20">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;