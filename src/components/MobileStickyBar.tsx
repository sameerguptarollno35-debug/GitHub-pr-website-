import React from 'react';
import { Phone, Calendar, MapPin, MessageSquare } from 'lucide-react';
import { HOSPITAL_INFO } from '../constants';

export default function MobileStickyBar() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 px-4 pb-6 pt-2 pointer-events-none">
       <div className="max-w-md mx-auto pointer-events-auto bg-brand-secondary/95 backdrop-blur-lg border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex items-stretch">
          <a 
            href={`tel:${HOSPITAL_INFO.phone}`} 
            className="flex-1 flex flex-col items-center justify-center py-3 gap-1 hover:bg-white/10 transition-colors"
          >
             <Phone size={20} className="text-brand-accent" />
             <span className="text-[10px] font-bold text-white uppercase tracking-wider">Call</span>
          </a>
          <div className="w-[1px] bg-white/10" />
          <a 
            href="#contact" 
            className="flex-1 flex flex-col items-center justify-center py-3 gap-1 bg-brand-primary hover:bg-teal-600 transition-colors"
          >
             <Calendar size={20} className="text-white" />
             <span className="text-[10px] font-bold text-white uppercase tracking-wider">Book</span>
          </a>
          <div className="w-[1px] bg-white/10" />
          <a 
            href={HOSPITAL_INFO.mapsUrl} 
            target="_blank" 
            rel="noreferrer"
            className="flex-1 flex flex-col items-center justify-center py-3 gap-1 hover:bg-white/10 transition-colors"
          >
             <MapPin size={20} className="text-brand-accent" />
             <span className="text-[10px] font-bold text-white uppercase tracking-wider">Locate</span>
          </a>
          <div className="w-[1px] bg-white/10" />
          <a 
            href={`https://wa.me/${HOSPITAL_INFO.whatsapp}`} 
            target="_blank" 
            rel="noreferrer"
            className="flex-1 flex flex-col items-center justify-center py-3 gap-1 hover:bg-white/10 transition-colors"
          >
             <MessageSquare size={20} className="text-green-400" />
             <span className="text-[10px] font-bold text-white uppercase tracking-wider">Chat</span>
          </a>
       </div>
    </div>
  );
}
