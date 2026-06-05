import React from 'react';
import { motion } from 'motion/react';
import { Shield } from 'lucide-react';

export const IsoCertification = () => {
  return (
    <section className="py-24 border-y border-white/5 bg-zinc-900/50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05)_0%,transparent_100%)]" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col md:flex-row items-center gap-12 lg:gap-20"
        >
          <div className="w-64 md:w-80 shrink-0 bg-white p-8 rounded-3xl shadow-2xl ring-1 ring-white/20 hover:scale-105 transition-transform duration-500">
            <img 
              src="/iso27001.png" 
              alt="Certificación ISO 27001 - Seguridad de la Información - IB-Mexico" 
              className="w-full h-auto object-contain"
              referrerPolicy="no-referrer"
              fetchPriority="high"
            />
          </div>
          
          <div className="text-center md:text-left flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-bold uppercase tracking-widest mb-6">
              <Shield size={16} />
              Seguridad de la Información
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Certificación ISO 27001</h2>
            <p className="text-zinc-300 text-lg md:text-xl leading-relaxed max-w-3xl">
              Operamos bajo los más estrictos estándares internacionales. Nuestra certificación <strong>ISO 27001</strong> garantiza la confidencialidad, integridad y disponibilidad de su información. Protegemos sus datos empresariales contra ciberamenazas, asegurando el cumplimiento normativo y brindando la tranquilidad que su negocio necesita para crecer de forma segura.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
