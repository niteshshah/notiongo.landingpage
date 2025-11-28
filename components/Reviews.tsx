import React from 'react';
import { REVIEWS } from '../constants';
import { Star } from 'lucide-react';

const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">Loved by Productive People</h2>
          <p className="mt-4 text-lg text-slate-600">Join a community of users who value focus and simplicity.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {REVIEWS.map((review, index) => (
            <div key={index} className="p-8 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
               <div className="flex gap-1 text-yellow-400 mb-4">
                 {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
               </div>
               <p className="text-slate-700 mb-6 italic leading-relaxed">"{review.text}"</p>
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-sm">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">{review.name}</div>
                    <div className="text-xs text-slate-500">{review.role}</div>
                  </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Reviews;