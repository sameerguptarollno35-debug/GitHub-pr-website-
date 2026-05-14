import React from 'react';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { SERVICES } from '../constants';

export default function Services() {
  return (
    <section id="services" className="py-24 bg-brand-muted/40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-primary font-bold tracking-widest uppercase text-xs mb-3 block">Expert Dental Services</span>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
              Premium Care for Every <span className="text-gradient">Dental Need</span>
            </h2>
            <p className="text-slate-600 text-lg">
              We offer a wide range of specialized dental treatments in Sursand, utilizing advanced technology and patient-friendly techniques.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => {
            const IconComponent = (Icons as any)[service.icon] || Icons.Minus;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="premium-card group"
              >
                <div className="w-12 h-12 bg-brand-soft text-brand-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                  <IconComponent size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-brand-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-6">
                  {service.description}
                </p>
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-primary group-hover:underline"
                >
                  Enquire Now
                  <Icons.ArrowRight size={14} />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
