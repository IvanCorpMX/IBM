import React from 'react';
import { Shield, Lock, Cloud, BarChart3, CheckCircle2 } from 'lucide-react';

export const CybersecurityFocus = () => {
  return (
    <section id="ciberseguridad" className="py-24 bg-brand-dark relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05)_0%,transparent_70%)]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="glass-card p-6 rounded-2xl border-brand-primary/20 hover:border-brand-primary/40 transition-colors duration-300">
                  <Lock className="text-brand-primary mb-4" size={32} />
                  <h4 className="font-bold mb-2 text-white">Protección PyME</h4>
                  <p className="text-xs text-zinc-500">Seguridad de nivel corporativo adaptada al presupuesto y tamaño de tu negocio.</p>
                </div>
                <div className="glass-card p-6 rounded-2xl hover:border-white/10 transition-colors duration-300">
                  <Shield className="text-brand-secondary mb-4" size={32} />
                  <h4 className="font-bold mb-2 text-white">Continuidad</h4>
                  <p className="text-xs text-zinc-500">Aseguramos que tu operación no se detenga ante ataques o fallos.</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="glass-card p-6 rounded-2xl hover:border-white/10 transition-colors duration-300">
                  <Cloud className="text-brand-primary mb-4" size={32} />
                  <h4 className="font-bold mb-2 text-white">Respaldo Seguro</h4>
                  <p className="text-xs text-zinc-500">Copias de seguridad automatizadas para proteger tu información vital.</p>
                </div>
                <div className="glass-card p-6 rounded-2xl border-brand-secondary/20 hover:border-brand-secondary/40 transition-colors duration-300">
                  <BarChart3 className="text-brand-secondary mb-4" size={32} />
                  <h4 className="font-bold mb-2 text-white">Diagnóstico</h4>
                  <p className="text-xs text-zinc-500">Evaluamos tus riesgos actuales y te damos un plan de acción claro.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-bold uppercase tracking-widest mb-6">
              <Shield size={14} />
              Seguridad para PyMEs
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Protege el crecimiento de tu <span className="text-brand-primary">empresa</span>.</h2>
            <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
              Las pequeñas y medianas empresas son el principal objetivo de los ciberataques hoy en día. En IB México democratizamos la ciberseguridad, ofreciendo soluciones robustas y accesibles para proteger tu patrimonio y la confianza de tus clientes.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                'Soluciones de seguridad a la medida de tu presupuesto',
                'Protección contra secuestro de datos (Ransomware)',
                'Capacitación básica en seguridad para tu equipo',
                'Soporte técnico ágil y cercano'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-zinc-300">
                  <CheckCircle2 className="text-brand-primary" size={20} />
                  {item}
                </li>
              ))}
            </ul>
            <button 
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary w-full sm:w-auto cursor-pointer"
            >
              Solicitar Diagnóstico Gratuito
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
