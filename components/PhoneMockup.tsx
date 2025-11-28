import React, { useState } from 'react';
import { PRIMARY_GRADIENT, LOGO_SRC } from '../constants';
import { List, Settings, Edit3, CheckCircle2, Menu, Database } from 'lucide-react';

export const PhoneMockup: React.FC = () => {
  const [logoError, setLogoError] = useState(false);

  return (
    <div className="relative mx-auto border-gray-900 dark:border-gray-900 bg-gray-900 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-2xl flex flex-col overflow-hidden">
      {/* Dynamic Island / Notch */}
      <div className="h-[32px] w-[3px] bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
      <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
      <div className="w-[100px] h-[30px] bg-black absolute top-3 left-1/2 -translate-x-1/2 rounded-full z-20"></div>

      {/* Screen Content */}
      <div className="rounded-[2rem] overflow-hidden w-full h-full bg-slate-50 relative flex flex-col">
        {/* Status Bar */}
        <div className="flex justify-between items-center px-6 pt-3 pb-2 text-xs font-semibold text-slate-900 z-10">
          <span>11:41</span>
          <div className="flex gap-1">
            <div className="w-4 h-2.5 bg-slate-900 rounded-sm"></div>
          </div>
        </div>

        {/* App Content */}
        <div className="flex-1 flex flex-col p-6 items-center justify-center space-y-8 animate-fade-in">
          
          {/* Logo Section */}
          <div className="flex items-center justify-center">
            {logoError ? (
              <div className="w-24 h-24 rounded-3xl bg-indigo-600 flex items-center justify-center shadow-xl shadow-indigo-200">
                <Database size={48} className="text-white" />
              </div>
            ) : (
              <img 
                src={LOGO_SRC} 
                alt="NotionGo Logo" 
                className="w-24 h-24 rounded-3xl shadow-xl shadow-indigo-200 object-cover" 
                onError={() => setLogoError(true)}
              />
            )}
          </div>

          {/* Text Section */}
          <div className="text-center space-y-3">
            <h2 className="text-2xl font-bold text-slate-900">Welcome to NotionGo</h2>
            <p className="text-sm text-slate-500 leading-relaxed px-2">
              A calming database frontend that brings peace to your Notion workflow
            </p>
          </div>

          {/* Action Button */}
          <button className={`w-full py-3.5 rounded-xl bg-gradient-to-r ${PRIMARY_GRADIENT} text-white font-medium shadow-lg shadow-indigo-200 flex items-center justify-center gap-2 transform active:scale-95 transition-transform`}>
            <span>Authorize with Notion</span>
          </button>

          {/* Quick Actions Grid (Bottom) */}
          <div className="grid grid-cols-3 gap-4 w-full mt-4">
            <div className="flex flex-col items-center gap-2">
               <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center shadow-md">
                 <List size={20} className="text-white" />
               </div>
               <span className="text-[10px] text-slate-500 text-center font-medium">Databases</span>
            </div>
            <div className="flex flex-col items-center gap-2">
               <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center shadow-md">
                 <Edit3 size={20} className="text-white" />
               </div>
               <span className="text-[10px] text-slate-500 text-center font-medium">Forms</span>
            </div>
            <div className="flex flex-col items-center gap-2">
               <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center shadow-md">
                 <Settings size={20} className="text-white" />
               </div>
               <span className="text-[10px] text-slate-500 text-center font-medium">Config</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export const PhoneMockupSecondary: React.FC = () => {
  return (
    <div className="relative mx-auto border-gray-900 dark:border-gray-900 bg-gray-900 border-[12px] rounded-[2.5rem] h-[550px] w-[280px] shadow-xl flex flex-col overflow-hidden opacity-90 scale-95 origin-bottom-right">
       {/* Notch */}
       <div className="w-[80px] h-[25px] bg-black absolute top-3 left-1/2 -translate-x-1/2 rounded-full z-20"></div>

       {/* Screen Content: Database List */}
       <div className="rounded-[2rem] overflow-hidden w-full h-full bg-slate-50 relative flex flex-col">
          <div className="h-12 flex items-end px-5 pb-2 justify-between">
             <Menu size={20} className="text-slate-800" />
             <div className="w-8 h-8 rounded-full bg-gray-200"></div>
          </div>
          <div className="px-5 mt-4">
             <h3 className="text-xl font-bold text-slate-900">Select Databases</h3>
             <p className="text-xs text-slate-500 mt-1">Choose one or more to manage</p>
          </div>

          <div className="flex-1 overflow-hidden px-4 mt-6 space-y-3">
             {/* Card 1 */}
             <div className="bg-white p-3 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500">
                   <List size={18} />
                </div>
                <div className="flex-1">
                   <div className="h-2 w-24 bg-slate-200 rounded mb-1.5"></div>
                   <div className="h-1.5 w-16 bg-slate-100 rounded"></div>
                </div>
             </div>
             
             {/* Card 2 - Selected */}
             <div className="bg-white p-3 rounded-2xl border-2 border-indigo-500 shadow-md flex items-center gap-3 relative">
                <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600">
                   <List size={18} />
                </div>
                <div className="flex-1">
                   <p className="text-sm font-semibold text-slate-900">Finanza</p>
                   <p className="text-[10px] text-slate-400">Content Calendar</p>
                </div>
                <div className="absolute top-2 right-2 text-indigo-500">
                  <Edit3 size={12} />
                </div>
                <CheckCircle2 size={18} className="text-indigo-500" />
             </div>

              {/* Card 3 - Selected */}
              <div className="bg-white p-3 rounded-2xl border-2 border-indigo-500 shadow-md flex items-center gap-3 relative">
                <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600">
                   <List size={18} />
                </div>
                <div className="flex-1">
                   <p className="text-sm font-semibold text-slate-900">Mindful Videos</p>
                   <p className="text-[10px] text-slate-400">Synced: 1d ago</p>
                </div>
                <div className="absolute top-2 right-2 text-indigo-500">
                  <Edit3 size={12} />
                </div>
                <CheckCircle2 size={18} className="text-indigo-500" />
             </div>
          </div>

          <div className="p-5 bg-white border-t border-slate-100">
             <button className={`w-full py-3 rounded-xl bg-gradient-to-r ${PRIMARY_GRADIENT} text-white font-medium text-sm`}>
               Continue
             </button>
          </div>
       </div>
    </div>
  );
};