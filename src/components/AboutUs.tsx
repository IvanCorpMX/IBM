import React from 'react';
import { motion } from 'motion/react';
import { Users } from 'lucide-react';

export const AboutUs = () => {
  return (
    <section id="nosotros" className="py-24 relative overflow-hidden animate-fade-in">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-bold uppercase tracking-widest mb-6">
              <Users size={14} />
              Sobre Nosotros
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 lg:mb-8 text-white">Liderando la <span className="text-brand-primary">Innovación Tecnológica</span> en México</h2>
            <p className="text-base lg:text-lg text-zinc-400 mb-4 lg:mb-6 leading-relaxed">
              Inside Business Mexico nació con la misión de acercar infraestructura TI de clase mundial a empresas en crecimiento y grandes corporativos de todo México.
            </p>
            <p className="text-base lg:text-lg text-zinc-400 mb-6 lg:mb-8 leading-relaxed">
              Con más de 20 años de experiencia, nuestro equipo de ingenieros certificados diseña soluciones de networking, ciberseguridad y soporte técnico que no solo resuelven problemas actuales, sino que blindan a su empresa para los retos del futuro. Somos el aliado estratégico en tecnología para negocios en México.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                <h4 className="font-bold text-brand-primary mb-2">Misión</h4>
                <p className="text-sm text-zinc-500">Impulsar la competitividad de nuestros clientes mediante tecnología disruptiva y segura.</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                <h4 className="font-bold text-brand-primary mb-2">Visión</h4>
                <p className="text-sm text-zinc-500">Ser el referente número uno en ciberseguridad e infraestructura TI en México para 2030.</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden glass-card p-2 hover:rotate-1 hover:scale-[1.02] transition-transform duration-500">
              <img 
                src="/equipo-ib.webp" 
                alt="Servicios TI - Corporativo - IB-Mexico" 
                className="w-full h-full object-cover rounded-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 p-8 glass-card rounded-2xl border-brand-primary/30 shadow-2xl">
              <div className="text-4xl font-bold text-brand-primary mb-1">20+</div>
              <div className="text-xs uppercase tracking-widest font-bold text-white">Años de Confianza</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
