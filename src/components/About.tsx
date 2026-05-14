import React from 'react';
import { motion } from 'motion/react';
import { HOSPITAL_INFO } from '../constants';
import { Check } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-brand-soft/30 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
             <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-square max-w-md mx-auto">
               <img 
                src="https://images.unsplash.com/photo-1576091160550-217359f4ecf8?q=80&w=2070&auto=format&fit=crop" 
                alt="About Yasko Dental Hospital" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
               />
             </div>
             {/* Year badge */}
             <div className="absolute bottom-10 -right-4 bg-brand-secondary text-white p-6 rounded-2xl shadow-2xl">
               <div className="text-3xl font-extrabold">12+</div>
               <div className="text-xs font-semibold uppercase tracking-wider opacity-80">Years of Service</div>
             </div>
          </motion.div>

          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-brand-primary font-bold tracking-widest uppercase text-xs mb-3 block">About Our Hospital</span>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight">
                Trusted Dental Care in <span className="text-brand-primary">Sursand & Sitamarhi</span>
              </h2>
              
              <div className="space-y-6 text-slate-600 leading-relaxed mb-10">
                <p>
                  Since {HOSPITAL_INFO.since}, <strong>Yasko Dental Hospital</strong> has been committed to providing elite dental services to the people of Sursand and Sitamarhi. We believe that everyone deserves a healthy, radiant smile, and we aim to deliver that through ethical practice and clinical excellence.
                </p>
                <p>
                  As a modern, patient-focused dental hospital, we prioritize hygiene, patient comfort, and precision. Our facility is equipped with the latest dental technology to provide treatments ranging from general checkups to complex orthodontic and implant procedures.
                </p>
                <p>
                  Our tagline <strong>"{HOSPITAL_INFO.tagline}"</strong> is the core of our philosophy. We take pride in being the first choice for families seeking a trusted dental hospital in Sursand.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Advanced Digital Micro-Dentistry',
                  'Rigorous Sterilization Protocols',
                  'Experienced & Caring Staff',
                  'Affordable Treatment Plans',
                  'Emergency Dental Support',
                  'Personalized Patient Journey'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="bg-brand-primary/10 text-brand-primary p-1 rounded-full">
                      <Check size={14} />
                    </div>
                    <span className="text-sm font-semibold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
