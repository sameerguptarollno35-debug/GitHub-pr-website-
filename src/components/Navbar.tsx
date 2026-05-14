import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar, MessageSquare, HeartPulse, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { HOSPITAL_INFO } from '../constants';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Doctor', href: '#doctor' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'glass-nav py-3' : 'bg-transparent py-5'
      )}
      id="main-nav"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="bg-brand-primary p-2 rounded-xl text-white group-hover:rotate-12 transition-transform duration-300">
              <HeartPulse size={24} />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold font-display leading-tight tracking-tight">
                YASKO <span className="text-brand-primary">DENTAL</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-slate-500">
                Hospital
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-brand-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-brand-soft transition-all"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a
              href={`tel:${HOSPITAL_INFO.phone}`}
              className="flex items-center gap-2 text-sm font-bold text-brand-primary hover:text-teal-700 transition-colors"
            >
              <Phone size={18} />
              {HOSPITAL_INFO.phone}
            </a>
            <a
              href="#contact"
              className="bg-brand-primary text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-teal-100 hover:shadow-teal-200 hover:-translate-y-0.5 transition-all"
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-slate-600 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-slate-50 px-4 py-8"
          >
            <div className="flex flex-col gap-6 items-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-semibold text-slate-800 hover:text-brand-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="w-full h-[1px] bg-slate-100" />
              <div className="flex flex-col gap-4 w-full">
                <a
                  href={`tel:${HOSPITAL_INFO.phone}`}
                  className="flex items-center justify-center gap-3 w-full py-4 bg-brand-soft text-brand-primary font-bold rounded-2xl"
                >
                  <Phone size={20} />
                  Call Now
                </a>
                <a
                  href="https://wa.me/919155410410"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-4 bg-green-500 text-white font-bold rounded-2xl"
                >
                  <MessageSquare size={20} />
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
