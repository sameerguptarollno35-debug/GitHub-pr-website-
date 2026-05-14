import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Phone, ArrowRight, MapPin, CheckCircle, HeartPulse } from 'lucide-react';
import { HOSPITAL_INFO } from '../constants';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-brand-soft rounded-full blur-3xl opacity-60 z-0" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[400px] h-[400px] bg-sky-50 rounded-full blur-3xl opacity-60 z-0" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-brand-soft border border-brand-primary/10 rounded-full text-brand-primary text-xs font-bold uppercase tracking-wider mb-6"
            >
              <CheckCircle size={14} />
              Trusted Since {HOSPITAL_INFO.since} in Sursand
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-[1.1] mb-6"
            >
              Expert Dental Care for a <span className="text-gradient">Confident Smile.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Experience world-class dentistry at Yasko Dental Hospital. From routine checkups to advanced implants and smile transformations, we provide compassionate care with cutting-edge technology.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <a
                href="#contact"
                className="w-full sm:w-auto bg-brand-primary text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-teal-100 hover:shadow-teal-200 hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
              >
                <Calendar size={20} />
                Book Appointment
              </a>
              <a
                href={HOSPITAL_INFO.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto bg-white text-brand-secondary border border-slate-200 px-8 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
              >
                <MapPin size={20} />
                Get Directions
              </a>
            </motion.div>

            {/* Quick Contact Links */}
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.6 }}
               className="mt-8 flex items-center gap-6 justify-center lg:justify-start text-sm text-slate-500 font-medium"
            >
              <a href={`tel:${HOSPITAL_INFO.phone}`} className="flex items-center gap-2 hover:text-brand-primary transition-colors">
                <Phone size={16} className="text-brand-primary" />
                {HOSPITAL_INFO.phone}
              </a>
            </motion.div>
          </div>

          {/* Hero Image / Placeholder Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 relative"
          >
            <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop" 
                alt="Modern Dental Clinic" 
                className="w-full h-auto object-cover aspect-[4/3]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Floating Trust Badges */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-50 flex items-center gap-3 z-20 hidden md:flex">
              <div className="bg-brand-soft p-2 rounded-lg text-brand-primary">
                <CheckCircle size={24} />
              </div>
              <div>
                <div className="font-bold text-slate-900">Modern Hospital</div>
                <div className="text-xs text-slate-500">Advanced Equipment</div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-50 flex items-center gap-3 z-20 hidden md:flex">
              <div className="bg-brand-soft p-2 rounded-lg text-brand-primary">
                <HeartPulse size={24} />
              </div>
              <div>
                <div className="font-bold text-slate-900">Patient Comfort</div>
                <div className="text-xs text-slate-500">Compassionate Care</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
