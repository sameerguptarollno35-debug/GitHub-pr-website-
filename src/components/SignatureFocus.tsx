import React from 'react';
import { motion } from 'motion/react';
import { Star, Sparkles, Smile, ShieldCheck, Zap } from 'lucide-react';

export default function SignatureFocus() {
  const specialized = [
    {
      title: "Dental Implants",
      desc: "Permanent, strong, and natural-looking tooth replacement. Reclaim your bite and confidence with our advanced implant technology.",
      icon: ShieldCheck,
      img: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1974&auto=format&fit=crop"
    },
    {
      title: "Cosmetic Dentistry",
      desc: "Artistry meets science. We refine the color, shape, and alignment of your teeth for a flawless premium aesthetic.",
      icon: Sparkles,
      img: "https://images.unsplash.com/photo-1593022356769-11f09a79a24a?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Smile Transformation",
      desc: "A comprehensive makeover designed specifically for your face. Experience a life-changing boost in your social and professional life.",
      icon: Smile,
      img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-24 bg-brand-secondary relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-accent rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-primary rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-accent font-bold tracking-widest uppercase text-xs mb-3 block">Signature Expertise</span>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-white leading-tight">
              Leading the Way in <span className="text-brand-accent">Advanced Smile Care</span>
            </h2>
            <p className="text-slate-400 text-lg">
              Specialized procedures that combine surgical precision with artistic smile designing.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {specialized.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group h-[450px] rounded-[2rem] overflow-hidden shadow-2xl border border-white/5"
            >
              <img 
                src={item.img} 
                alt={item.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary via-brand-secondary/60 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="bg-brand-accent text-brand-secondary w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-lg rotate-3 group-hover:rotate-0 transition-transform">
                  <item.icon size={26} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {item.desc}
                </p>
                <a href="#contact" className="inline-flex items-center gap-2 text-brand-accent font-bold uppercase tracking-wider text-xs">
                  Discover More
                  <Zap size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
