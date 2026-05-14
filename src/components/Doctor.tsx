import React from 'react';
import { motion } from 'motion/react';
import { Award, GraduationCap, ThumbsUp, HeartPulse } from 'lucide-react';
import { HOSPITAL_INFO } from '../constants';

export default function Doctor() {
  return (
    <section id="doctor" className="py-20 relative overflow-hidden bg-white px-4 md:px-6">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-brand-primary font-bold tracking-widest uppercase text-xs mb-3 block">Meet Our Director</span>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4">{HOSPITAL_INFO.leadDoctor}</h2>
              <div className="text-brand-primary font-bold text-xl mb-8">Clinical Director & Chief Consultant</div>
              
              <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                Dr. Abhay Kumar Das is the visionary behind Yasko Dental Hospital. With years of clinical expertise and a passion for oral healthcare, he has transformed countless smiles in Sursand and Sitamarhi. His commitment to patient-friendly treatment and precision makes him one of the most trusted dentists in the region.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex gap-4 p-4 rounded-2xl bg-brand-soft/50 border border-brand-primary/5">
                  <div className="bg-white text-brand-primary p-3 rounded-xl shadow-sm h-fit">
                    <Award size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Expertise</h4>
                    <p className="text-sm text-slate-500">Implants & Smile Design</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 rounded-2xl bg-brand-soft/50 border border-brand-primary/5">
                  <div className="bg-white text-brand-primary p-3 rounded-xl shadow-sm h-fit">
                    <HeartPulse size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Philosophy</h4>
                    <p className="text-sm text-slate-500">Painless & Patient-First</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 rounded-2xl bg-brand-soft/50 border border-brand-primary/5">
                  <div className="bg-white text-brand-primary p-3 rounded-xl shadow-sm h-fit">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Education</h4>
                    <p className="text-sm text-slate-500">Advanced Dental Sciences</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 rounded-2xl bg-brand-soft/50 border border-brand-primary/5">
                  <div className="bg-white text-brand-primary p-3 rounded-xl shadow-sm h-fit">
                    <ThumbsUp size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Trust</h4>
                    <p className="text-sm text-slate-500">12+ Years Experience</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 order-1 lg:order-2"
          >
            <div className="relative max-w-sm mx-auto">
              <div className="absolute -top-4 -right-4 w-full h-full border-4 border-brand-primary rounded-[2.5rem] z-0" />
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl z-10 aspect-[3/4] bg-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop" 
                  alt={HOSPITAL_INFO.leadDoctor} 
                  className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Doctor Name Float */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md px-6 py-3 rounded-xl shadow-lg border border-white z-20 w-[90%] text-center">
                <div className="font-bold text-slate-900 leading-tight">{HOSPITAL_INFO.leadDoctor}</div>
                <div className="text-[10px] uppercase tracking-wider font-bold text-brand-primary mt-1">Lead Dental Expert</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
