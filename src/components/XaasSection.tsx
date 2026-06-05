import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Monitor, Cpu, Cloud, LifeBuoy, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const XaasSection = () => {
  return (
    <section className="py-24 bg-zinc-900/30 border-y border-white/5 relative overflow-hidden animate-fade-in">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05)_0%,transparent_100%)]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Visual Presentation Card - Elegant & Simple */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-6 md:p-8 rounded-3xl border-brand-primary/20 relative overflow-hidden bg-zinc-900/40 shadow-2xl space-y-6"
          >
            <div className="absolute -top-12 -left-12 w-32 h-32 bg-brand-primary/5 rounded-full blur-[60px]" />
            <div className="flex justify-between items-center pb-4 border-b border-white/5">
              <span className="text-[10px] font-mono text-brand-primary uppercase tracking-widest flex items-center gap-1.5">
                <ShieldCheck size={12} /> Continuidad Sin Fisuras
              </span>
              <span className="text-[10px] font-mono text-zinc-500">Todo como Servicio</span>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white tracking-tight">Ecosistema Tecnológico Inteligente</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Integramos cómputo, servidores, licenciamiento de productividad y soporte bajo un mismo esquema continuo de servicio mensualizado que se adapta a su ritmo operativo.
              </p>

              <ul className="space-y-3 pt-2">
                <li className="flex items-center gap-3 text-xs text-zinc-300">
                  <div className="w-6 h-6 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0">
                    <CheckCircle2 size={12} />
                  </div>
                  <span>Equipamiento de marcas líderes (HP, Dell, Lenovo) siempre renovado.</span>
                </li>
                <li className="flex items-center gap-3 text-xs text-zinc-300">
                  <div className="w-6 h-6 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0">
                    <CheckCircle2 size={12} />
                  </div>
                  <span>Infraestructura robusta en sistemas de red, servidores y storage.</span>
                </li>
                <li className="flex items-center gap-3 text-xs text-zinc-300">
                  <div className="w-6 h-6 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0">
                    <CheckCircle2 size={12} />
                  </div>
                  <span>Respuesta técnica expedita e ingenieros calificados en sitio.</span>
                </li>
              </ul>
            </div>

            <div className="p-4 bg-brand-primary/10 rounded-2xl text-center border border-brand-primary/20">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
                Un solo proveedor. Una suscripción unificada.
              </span>
            </div>
          </motion.div>

          {/* Synthesized Texts / SEO */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-bold uppercase tracking-widest mb-6">
              <Cloud size={14} />
              Arrendamiento de TI Integral
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-white font-display uppercase tracking-tight leading-none">
              Todo como Servicio
              <span className="block text-gradient">XaaS de Continuidad</span>
            </h2>
            
            <p className="text-zinc-350 text-sm md:text-base leading-relaxed mb-8 max-w-xl italic">
              "No compre computadoras y servidores que se deprecian de inmediato. Administre su infraestructura tecnológica mediante un modelo integral con soporte técnico especializado y equipamiento siempre al día."
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="p-4 bg-white/5 border border-white/5 rounded-2xl text-center">
                <div className="font-mono text-lg md:text-2xl font-bold text-brand-primary">Soporte</div>
                <div className="text-[10px] uppercase font-bold text-zinc-500 tracking-widest mt-1">Garantizado en Sitio</div>
              </div>
              <div className="p-4 bg-white/5 border border-white/5 rounded-2xl text-center">
                <div className="font-mono text-lg md:text-2xl font-bold text-brand-primary">Siempre</div>
                <div className="text-[10px] uppercase font-bold text-zinc-500 tracking-widest mt-1">Tecnología Nueva</div>
              </div>
            </div>

            <Link 
              to="/servicios/xaas" 
              className="btn-primary inline-flex items-center gap-2 text-md px-6 py-4 cursor-pointer w-full sm:w-auto justify-center"
            >
              Explorar Ecosistema XaaS <ArrowRight size={18} />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
