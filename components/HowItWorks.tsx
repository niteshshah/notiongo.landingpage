import React from 'react';

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">Get started in minutes</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-slate-200 -z-10"></div>

          {[
            { step: "01", title: "Connect", desc: "Authorize NotionGo to access your workspace securely." },
            { step: "02", title: "Configure", desc: "Select which databases and fields you want to manage on the go." },
            { step: "03", title: "Create", desc: "Start adding records immediately with a simplified interface." }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center bg-white p-6 rounded-2xl shadow-sm border border-slate-100 relative z-10">
              <div className="w-12 h-12 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center text-lg mb-6 shadow-lg shadow-indigo-200">
                {item.step}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;