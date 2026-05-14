import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ShieldCheck, Users2, Sparkles, Clock, MapPin } from 'lucide-react';
import { HOSPITAL_INFO } from '../constants';

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Patient-First Care",
      desc: "Your comfort and well-being are our highest priorities. We listen, empathize, and care.",
      icon: Users2
    },
    {
      title: "Trusted Expertise",
      desc: "Directed by Dr. Abhay Kumar Das, with a history of successful treatments since 2013.",
      icon: ShieldCheck
    },
    {
      title: "Modern Equipment",
      desc: "We use advanced digital tools for diagnosis and microscopic treatment precision.",
      icon: Sparkles
    },
    {
      title: "Strict Sterilization",
      desc: "International standards of hygiene to ensure 100% infection-free environment.",
      icon: CheckCircle2
    },
    {
      title: "Strong local Reputation",
      desc: "A household name in Sursand and Sitamarhi for dependable dental healthcare.",
      icon: MapPin
    },
    {
       title: "Affordable Support",
       desc: "Premium treatment plans designed to be accessible for every family nearby.",
       icon: Clock
    }
  ];

  return (
    <section className="py-24 bg-white px-4 md:px-6">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/3">
             <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
             >
                <span className="text-brand-primary font-bold tracking-widest uppercase text-xs mb-3 block">Why Yasko?</span>
                <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight">
                  The Gold Standard in <span className="text-brand-primary">Dental Excellence</span>
                </h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Choosing the right dentist is a decision about your long-term health. We combine traditional values of trust with modern medical advancements.
                </p>
                <div className="p-6 bg-brand-soft rounded-3xl border border-brand-primary/10">
                   <div className="text-brand-primary font-bold text-lg mb-2 italic">"{HOSPITAL_INFO_TAGLINE}"</div>
                   <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Our Commitment to You</div>
                </div>
             </motion.div>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
             {reasons.map((reason, idx) => (
               <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-white border border-slate-50 hover:bg-brand-soft/30 hover:border-brand-primary/10 transition-all group"
               >
                 <div className="bg-brand-soft text-brand-primary w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                   <reason.icon size={22} />
                 </div>
                 <h4 className="font-bold text-slate-900 mb-2">{reason.title}</h4>
                 <p className="text-sm text-slate-500 leading-relaxed">{reason.desc}</p>
               </motion.div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const HOSPITAL_INFO_TAGLINE = "Serve the People";
