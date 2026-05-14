import React from 'react';
import { HeartPulse, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube, ArrowRight } from 'lucide-react';
import { HOSPITAL_INFO } from '../constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-secondary text-white pt-20 pb-10 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="space-y-6">
             <div className="flex items-center gap-2">
                <div className="bg-brand-primary p-2 rounded-xl text-white">
                   <HeartPulse size={24} />
                </div>
                <div className="flex flex-col">
                   <span className="text-xl font-bold font-display leading-tight tracking-tight">
                      YASKO <span className="text-brand-primary">DENTAL</span>
                   </span>
                   <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-slate-400">
                      Hospital
                   </span>
                </div>
             </div>
             <p className="text-slate-400 text-sm leading-relaxed pr-6">
                Redefining dental care in Sursand and Sitamarhi since {HOSPITAL_INFO.since}. We provide advanced dentistry with a compassionate heart.
             </p>
             <div className="flex items-center gap-4">
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-primary hover:border-brand-primary transition-all">
                   <Facebook size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-primary hover:border-brand-primary transition-all">
                   <Twitter size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-primary hover:border-brand-primary transition-all">
                   <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-primary hover:border-brand-primary transition-all">
                   <Youtube size={18} />
                </a>
             </div>
          </div>

          {/* Quick Links */}
          <div>
             <h4 className="text-lg font-bold mb-8">Quick Links</h4>
             <ul className="space-y-4">
                {['Home', 'About Us', 'Our Services', 'Meet the Doctor', 'Patient Reviews', 'Common FAQs'].map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase().split(' ')[0]}`} className="text-slate-400 text-sm hover:text-brand-accent transition-colors flex items-center gap-2 group">
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      {link}
                    </a>
                  </li>
                ))}
             </ul>
          </div>

          {/* Contact Col */}
          <div>
             <h4 className="text-lg font-bold mb-8">Contact Info</h4>
             <ul className="space-y-5">
                <li className="flex items-start gap-4">
                   <MapPin size={20} className="text-brand-accent mt-1 flex-shrink-0" />
                   <span className="text-slate-400 text-sm leading-relaxed">{HOSPITAL_INFO.address}</span>
                </li>
                <li className="flex items-center gap-4">
                   <Phone size={20} className="text-brand-accent flex-shrink-0" />
                   <span className="text-slate-400 text-sm">{HOSPITAL_INFO.phone}</span>
                </li>
                <li className="flex items-center gap-4">
                   <Mail size={20} className="text-brand-accent flex-shrink-0" />
                   <span className="text-slate-400 text-sm">{HOSPITAL_INFO.email}</span>
                </li>
             </ul>
          </div>

          {/* Appoint Col */}
          <div>
             <h4 className="text-lg font-bold mb-8">Book Visit</h4>
             <p className="text-slate-400 text-sm mb-6">Need expert dental advice? Secure your slot today.</p>
             <a 
              href="#contact" 
              className="block w-full bg-brand-primary text-white text-center py-4 rounded-xl font-bold hover:bg-teal-600 transition-all shadow-lg shadow-black/20"
             >
               Make Appointment
             </a>
             <div className="mt-8 flex items-center gap-3">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center animate-pulse">
                   <Phone size={20} className="text-brand-accent" />
                </div>
                <div>
                   <p className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Emergency Helpline</p>
                   <p className="text-lg font-bold text-white">{HOSPITAL_INFO.altPhone}</p>
                </div>
             </div>
          </div>
        </div>

        <div className="w-full h-[1px] bg-white/5 mb-10" />
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-slate-500 text-xs font-medium">
           <p>© {currentYear} Yasko Dental Hospital. All rights reserved.</p>
           <div className="flex items-center gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
           </div>
           <p>Designed with Care for Sursand & Sitamarhi</p>
        </div>
      </div>
    </footer>
  );
}
