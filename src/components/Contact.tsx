import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Phone, MapPin, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { HOSPITAL_INFO } from '../constants';
import { useForm } from 'react-hook-form';

export default function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = (data: any) => {
    console.log(data);
    alert('Thank you! Your request has been received. We will contact you shortly.');
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      details: HOSPITAL_INFO.phone,
      sub: "Mon - Sat (10 AM - 8 PM)",
      link: `tel:${HOSPITAL_INFO.phone}`
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      details: "+91 91554 10410",
      sub: "Fast Instant Reply",
      link: `https://wa.me/${HOSPITAL_INFO.whatsapp}`
    },
    {
      icon: MapPin,
      title: "Locate Us",
      details: "Sursand, Sitamarhi",
      sub: HOSPITAL_INFO.address,
      link: HOSPITAL_INFO.mapsUrl
    },
    {
      icon: Mail,
      title: "Email Support",
      details: HOSPITAL_INFO.email,
      sub: "24h Response Time",
      link: `mailto:${HOSPITAL_INFO.email}`
    }
  ];

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-primary font-bold tracking-widest uppercase text-xs mb-3 block">Get in Touch</span>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
              Start Your Journey to a <span className="text-brand-primary">Brighter Smile</span>
            </h2>
            <p className="text-slate-600 text-lg">
              Book an appointment or send us an enquiry. We are here to help you with the best dental care in Sursand and Sitamarhi.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {contactMethods.map((method, idx) => (
                <motion.a
                  key={idx}
                  href={method.link}
                  target={method.icon === MapPin || method.icon === MessageSquare ? "_blank" : undefined}
                  rel="noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-4 p-5 bg-brand-soft/50 border border-brand-primary/5 rounded-2xl hover:border-brand-primary/20 transition-all group"
                >
                  <div className="bg-white text-brand-primary p-4 rounded-xl shadow-sm group-hover:bg-brand-primary group-hover:text-white transition-all">
                    <method.icon size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">{method.title}</p>
                    <p className="text-lg font-bold text-slate-800">{method.details}</p>
                    <p className="text-[10px] font-medium text-slate-500 uppercase">{method.sub}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Timings Card */}
            <div className="bg-brand-secondary text-white p-8 rounded-3xl relative overflow-hidden">
               <div className="relative z-10">
                 <h4 className="flex items-center gap-2 text-xl font-bold mb-6">
                   <Clock size={24} className="text-brand-accent" />
                   Hospital Timings
                 </h4>
                 <div className="space-y-3">
                   <div className="flex justify-between items-center text-sm">
                     <span className="opacity-70">Monday - Saturday</span>
                     <span className="font-bold">10:00 AM - 08:00 PM</span>
                   </div>
                   <div className="w-full h-[1px] bg-white/10" />
                   <div className="flex justify-between items-center text-sm">
                     <span className="opacity-70">Sunday</span>
                     <span className="font-bold text-brand-accent italic">Emergencies Only (10 AM - 2 PM)</span>
                   </div>
                 </div>
                 <div className="mt-8 flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                   <CheckCircle size={18} className="text-green-400 mt-1 flex-shrink-0" />
                   <p className="text-xs opacity-80 leading-relaxed">
                     Walk-ins are welcome for trauma and emergency cases. For routine visits, please call ahead.
                   </p>
                 </div>
               </div>
               <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            </div>
          </div>

          {/* Appointment Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white border border-slate-100 shadow-2xl rounded-[2.5rem] p-8 md:p-12"
          >
            <h3 className="text-2xl font-bold mb-8">Book an Appointment Online</h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Patient's Name *</label>
                  <input 
                    {...register("name", { required: true })}
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-brand-primary focus:bg-white outline-none transition-all" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number *</label>
                  <input 
                    {...register("phone", { required: true })}
                    type="tel" 
                    placeholder="+91 XXXXX XXXXX" 
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-brand-primary focus:bg-white outline-none transition-all" 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                   <label className="block text-sm font-bold text-slate-700 mb-2">Select Treatment</label>
                   <select 
                    {...register("treatment")}
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-brand-primary focus:bg-white outline-none transition-all appearance-none"
                   >
                     <option value="">General Consultation</option>
                     <option value="RCT">Root Canal (RCT)</option>
                     <option value="Implants">Dental Implants</option>
                     <option value="Cleaning">Teeth Cleaning</option>
                     <option value="Cosmetic">Cosmetic Dentistry</option>
                     <option value="Braces">Orthodontics (Braces)</option>
                   </select>
                </div>
                <div>
                   <label className="block text-sm font-bold text-slate-700 mb-2">Preferred Date</label>
                   <input 
                    {...register("date")}
                    type="date" 
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-brand-primary focus:bg-white outline-none transition-all" 
                   />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Your Message (Optional)</label>
                <textarea 
                  {...register("message")}
                  rows={4} 
                  placeholder="Tell us about your dental concern..." 
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-brand-primary focus:bg-white outline-none transition-all"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-brand-primary text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-xl shadow-teal-100 hover:shadow-teal-200 hover:-translate-y-1 transition-all"
              >
                <Send size={20} />
                Send Appointment Request
              </button>
              
              <p className="text-center text-xs text-slate-400 mt-4 leading-relaxed px-4">
                By submitting this form, you agree to being contacted by Yasko Dental Hospital via phone, SMS, or email regarding your appointment.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
