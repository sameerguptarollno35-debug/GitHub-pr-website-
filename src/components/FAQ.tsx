import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { FAQS } from '../constants';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-brand-soft/20 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-brand-primary font-bold tracking-widest uppercase text-xs mb-3 block">Got Questions?</span>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight">
                Everything You <span className="text-brand-primary">Need to Know</span>
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                We believe in transparency. Here are some of the most common questions our patients ask. If you have more, feel free to contact us.
              </p>
              
              <div className="flex items-center gap-4 p-6 bg-white rounded-3xl border border-brand-primary/5 shadow-xl shadow-brand-primary/5">
                 <div className="bg-brand-primary text-white p-4 rounded-2xl">
                    <HelpCircle size={28} />
                 </div>
                 <div>
                    <h4 className="font-bold text-slate-900">Still Curious?</h4>
                    <a href="#contact" className="text-sm font-bold text-brand-primary hover:underline">Ask Us Anything →</a>
                 </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            {FAQS.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white rounded-2xl border border-slate-100 overflow-hidden"
              >
                <button
                  onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                >
                  <span className="font-bold text-slate-800 pr-8">{faq.question}</span>
                  <div className={`p-2 rounded-lg transition-all ${activeIndex === idx ? 'bg-brand-primary text-white rotate-180' : 'bg-brand-soft text-brand-primary'}`}>
                    {activeIndex === idx ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>
                
                <AnimatePresence>
                  {activeIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-2 text-slate-500 text-sm leading-relaxed border-t border-slate-50 mt-1">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
