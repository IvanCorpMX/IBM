import React from 'react';
import { motion } from 'motion/react';
import { Zap, ChevronRight, Shield, Network } from 'lucide-react';
import { PartnerCarousel } from './PartnerCarousel';

export const Hero = () => {
  return (
    <section className="relative min-h-[50vh] lg:min-h-screen flex items-center pt-20 lg:pt-36 pb-12 lg:pb-0 overflow-hidden animate-fade-in">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-secondary/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-2 lg:mb-3">
            <Zap size={14} />
            Infraestructura TI de Próxima Generación
          </div>
          <h1 className="text-2xl sm:text-5xl md:text-7xl font-bold leading-[1.2] sm:leading-[1.1] mb-6 lg:mb-8 break-words max-w-[300px] sm:max-w-none text-white">
            Expertos en <span className="text-gradient">Infraestructura TI</span> y Ciberseguridad
          </h1>
          <p className="text-sm sm:text-lg text-zinc-400 mb-8 lg:mb-10 max-w-[301px] sm:max-w-xl leading-relaxed">
            Networking, Ciberseguridad y Soluciones de Cómputo Empresarial diseñadas para la era digital en todo México.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
            <button 
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary w-[300px] sm:w-auto h-[48px] sm:h-auto text-white text-base sm:text-lg px-6 sm:px-8 py-0 sm:py-4 cursor-pointer"
            >
              Agendar Diagnóstico
              <ChevronRight size={20} className="sm:w-5 sm:h-5" />
            </button>
            <button 
              onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-outline w-[300px] sm:w-auto text-brand-primary text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-4 cursor-pointer"
            >
              Nuestros Servicios
            </button>
          </div>
          
          <PartnerCarousel />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 glass-card rounded-3xl p-5 border-white/20 shadow-2xl overflow-hidden mb-4">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-primary to-brand-secondary" />
            <div className="flex items-center justify-between mb-4">
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-brand-primary/50 animate-bounce" />
                <div className="w-2 h-2 rounded-full bg-zinc-500/50" />
                <div className="w-2 h-2 rounded-full bg-zinc-500/50" />
              </div>
              <div className="text-[10px] font-mono text-zinc-500">NETWORK_STATUS: SECURE</div>
            </div>
            
            <div className="space-y-3">
              <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-semibold text-zinc-400">Ciberseguridad Perimetral</span>
                  <span className="text-[10px] text-brand-primary font-mono">ACTIVE</span>
                </div>
                <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '98%' }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
                    className="h-full bg-brand-primary" 
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-white/5 rounded-xl border border-white/5 flex flex-col items-center justify-center hover:bg-white/10 transition-colors duration-300">
                  <Shield className="text-brand-secondary mb-1" size={18} />
                  <span className="text-lg font-bold text-white">100%</span>
                  <span className="text-[9px] text-zinc-500 uppercase tracking-tighter">Protección</span>
                </div>
                <div className="p-3 bg-white/5 rounded-xl border border-white/5 flex flex-col items-center justify-center hover:bg-white/10 transition-colors duration-300">
                  <Network className="text-brand-primary mb-1" size={18} />
                  <span className="text-lg font-bold text-white">99.9%</span>
                  <span className="text-[9px] text-zinc-500 uppercase tracking-tighter">Uptime</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 glass-card rounded-3xl p-4 border-white/20 shadow-2xl overflow-hidden h-[350px] lg:h-[450px]">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-secondary to-brand-primary" />
            <div className="flex items-center justify-between mb-2">
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-brand-primary/50" />
                <div className="w-2 h-2 rounded-full bg-zinc-500/50" />
                <div className="w-2 h-2 rounded-full bg-zinc-500/50" />
              </div>
              <div className="text-[10px] font-mono text-zinc-500">FORTIGUARD_THREAT_MAP</div>
            </div>
            
            <div className="w-full h-[calc(100%-1.5rem)] rounded-xl overflow-hidden border border-white/5 bg-black">
              <iframe 
                src="https://threatmap.fortiguard.com/" 
                title="FortiGuard Threat Map"
                className="w-full h-full border-0"
                sandbox="allow-scripts allow-same-origin"
              />
            </div>
          </div>
          
          {/* Decorative circles */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-primary/20 rounded-full blur-3xl -z-10 animate-pulse" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-secondary/20 rounded-full blur-3xl -z-10 animate-pulse" />
        </motion.div>
      </div>
    </section>
  );
};
