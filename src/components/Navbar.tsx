import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, X, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { scrollToSection } from '../utils/scroll';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar menú móvil al cambiar de ruta
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'bg-brand-dark/95 backdrop-blur-lg border-b border-white/10 py-3' : 'bg-transparent py-4 lg:py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 lg:px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 lg:gap-3 cursor-pointer" onClick={() => {
          if (window.location.pathname !== '/') {
            window.location.href = '/';
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }}>
          <img 
            src="/Logo_ib-mexico.webp" 
            alt="IB Mexico" 
            className="w-10 h-10 lg:w-14 lg:h-14 object-contain" 
            referrerPolicy="no-referrer" 
            fetchPriority="high" 
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
          <div className="flex flex-col -gap-1">
            <span className="font-display font-bold text-lg lg:text-xl tracking-tighter leading-none text-white">Inside Business</span>
            <span className="font-display font-medium text-[9px] lg:text-[10px] tracking-[0.2em] text-brand-primary uppercase">Mexico</span>
          </div>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <button onClick={() => scrollToSection('servicios')} className="hover:text-brand-primary transition-colors cursor-pointer">Servicios</button>
          <button onClick={() => scrollToSection('ciberseguridad')} className="hover:text-brand-primary transition-colors cursor-pointer">Ciberseguridad</button>
          <button onClick={() => scrollToSection('nosotros')} className="hover:text-brand-primary transition-colors cursor-pointer">Nosotros</button>
          <button onClick={() => scrollToSection('contacto')} className="hover:text-brand-primary transition-colors cursor-pointer">Contacto</button>
        </div>

        <div className="flex items-center gap-2 lg:gap-4">
          <a 
            href="/brochure-ib-mexico-v6.0.pdf" 
            target="_blank" 
            rel="noreferrer"
            className="hidden lg:flex btn-primary py-2 px-5 text-sm items-center gap-2"
          >
            <FileText size={16} />
            Brochure
          </a>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-white p-2 cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-dark border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6 text-lg font-medium text-zinc-300">
              <button onClick={() => scrollToSection('servicios')} className="text-left hover:text-brand-primary transition-colors cursor-pointer">Servicios</button>
              <button onClick={() => scrollToSection('ciberseguridad')} className="text-left hover:text-brand-primary transition-colors cursor-pointer">Ciberseguridad</button>
              <button onClick={() => scrollToSection('nosotros')} className="text-left hover:text-brand-primary transition-colors cursor-pointer">Nosotros</button>
              <button onClick={() => scrollToSection('contacto')} className="text-left hover:text-brand-primary transition-colors cursor-pointer">Contacto</button>
              <a 
                href="/brochure-ib-mexico-v6.0.pdf" 
                target="_blank" 
                rel="noreferrer"
                className="btn-primary py-3 px-5 text-center flex items-center justify-center gap-2 mt-4"
              >
                <FileText size={20} />
                Descargar Brochure
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
