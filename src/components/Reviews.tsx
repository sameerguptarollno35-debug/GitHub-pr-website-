import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, MapPin } from 'lucide-react';
import { REVIEWS } from '../constants';

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-white px-4 md:px-6 overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-6">
           <div className="max-w-2xl">
              <span className="text-brand-primary font-bold tracking-widest uppercase text-xs mb-3 block">Patient Stories</span>
              <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
                Smiles We’ve <span className="text-brand-primary">Already Changed</span>
              </h2>
           </div>
           <div className="flex items-center gap-2 bg-brand-soft px-6 py-3 rounded-full border border-brand-primary/10">
              <div className="flex text-yellow-400">
                 {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <span className="font-bold text-slate-800">4.9/5 Rating</span>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {REVIEWS.map((review, idx) => (
             <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 flex flex-col justify-between hover:bg-white hover:shadow-2xl hover:border-transparent transition-all duration-300 relative group"
             >
                <div className="absolute top-8 right-8 text-brand-primary opacity-20 group-hover:opacity-40 transition-opacity">
                   <Quote size={40} />
                </div>
                
                <div>
                   <div className="flex text-yellow-500 mb-6">
                      {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                   </div>
                   <p className="text-slate-600 italic leading-relaxed mb-8">"{review.text}"</p>
                </div>

                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 bg-brand-primary text-white flex items-center justify-center rounded-xl font-bold text-lg">
                      {review.name.charAt(0)}
                   </div>
                   <div>
                      <div className="font-bold text-slate-900">{review.name}</div>
                      <div className="flex items-center gap-1 text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                         <MapPin size={10} />
                         {review.location}
                      </div>
                   </div>
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
