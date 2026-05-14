import React from 'react';
import { motion } from 'motion/react';
import { CalendarCheck, Stethoscope, Search, Sparkles } from 'lucide-react';

export default function PatientJourney() {
  const steps = [
    {
      title: "Book Appointment",
      desc: "Call us or use our online form to schedule a convenient time.",
      icon: CalendarCheck
    },
    {
      title: "Visit Hospital",
      desc: "Get a warm welcome at our modern facility near Sursand Police Station.",
      icon: Stethoscope
    },
    {
      title: "Diagnosis & Planning",
      desc: "Detailed checkup followed by a personalized, clear treatment plan.",
      icon: Search
    },
    {
      title: "Treatment & Care",
      desc: "Superior precision treatment with expert follow-up support.",
      icon: Sparkles
    }
  ];

  return (
    <section className="py-24 bg-brand-soft/20 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20 text-slate-900">
           <span className="text-brand-primary font-bold tracking-widest uppercase text-xs mb-3 block">How it works</span>
           <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
             Your Simple <span className="text-brand-primary">4-Step Journey</span>
           </h2>
           <p className="text-slate-600">Experience a hassle-free and transparent dental care process.</p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-brand-primary/10 -translate-y-1/2 hidden lg:block" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 rounded-full bg-white border-4 border-brand-soft shadow-xl flex items-center justify-center text-brand-primary mb-8 group-hover:bg-brand-primary group-hover:text-white group-hover:scale-110 transition-all duration-300">
                   <step.icon size={32} />
                   <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-secondary text-white rounded-full flex items-center justify-center text-xs font-bold shadow-lg">0{idx + 1}</div>
                </div>
                <h4 className="text-xl font-bold mb-4">{step.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed max-w-[200px]">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
