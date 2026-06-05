import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, Calendar } from 'lucide-react';

export const ContactForm = () => {
  const [showIframe, setShowIframe] = useState(false);

  return (
    <section id="contacto" className="py-16 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="glass-card rounded-3xl overflow-hidden border-white/10 shadow-2xl hover:bg-white/[0.04] transition-colors duration-700">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 lg:p-16 bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 relative">
              <div className="relative z-10">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white animate-fade-in">¿Listo para modernizar tu infraestructura?</h2>
                <p className="text-zinc-300 mb-12 text-base lg:text-lg">
                  Déjanos tus datos y un consultor experto se pondrá en contacto contigo para agendar un diagnóstico.
                </p>
                
                <div className="space-y-6 lg:space-y-8">
                  <div className="flex items-start gap-4 hover:translate-x-1 transition-transform duration-300">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-white/10 flex items-center justify-center text-brand-primary shrink-0">
                      <Mail size={20} className="lg:w-6 lg:h-6" />
                    </div>
                    <div>
                      <div className="font-bold text-sm lg:text-base text-white">Email</div>
                      <div className="text-zinc-400 text-sm lg:text-base">ventas@ib-mexico.com</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 hover:translate-x-1 transition-transform duration-300">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-white/10 flex items-center justify-center text-brand-primary shrink-0">
                      <Phone size={20} className="lg:w-6 lg:h-6" />
                    </div>
                    <div>
                      <div className="font-bold text-sm lg:text-base text-white">Teléfono</div>
                      <div className="text-zinc-400 text-sm lg:text-base">993 310 0951</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative background */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/20 rounded-full blur-[100px] -mr-32 -mt-32" />
            </div>
            
            <div className="p-6 lg:p-12 bg-brand-surface/80 flex flex-col items-center justify-center relative border-l border-white/5">
              <div className="w-full h-full flex flex-col max-w-2xl mx-auto">
                <div className="mb-8 text-center lg:text-left">
                  <h3 className="text-2xl font-bold text-white mb-3 flex items-center justify-center lg:justify-start gap-3">
                    <Calendar className="text-brand-primary animate-pulse" size={24} />
                    Agenda tu sesión
                  </h3>
                  <p className="text-sm text-zinc-400">Selecciona el día y la hora que mejor se adapte a tu equipo para recibir un diagnóstico personalizado.</p>
                </div>
                
                <motion.div 
                  className="flex-1 w-full bg-white rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 min-h-[650px]"
                  onViewportEnter={() => setShowIframe(true)}
                  viewport={{ once: true, margin: "200px" }}
                >
                  {showIframe ? (
                    /* 
                      ========================================================================
                      PARA CAMBIAR LA URL DE BOOKINGS EN EL FUTURO:
                      Cambia el valor del atributo "src" en la etiqueta <iframe> de abajo.
                      ========================================================================
                    */
                    <iframe 
                      src="https://outlook.office.com/bookwithme/user/3244eb75e06848859b46bcda659e9019@corp-mx.com?anonymous&ismsaljsauthenabled&ep=plink" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0, minHeight: '650px' }} 
                      allowFullScreen
                      loading="lazy"
                      title="Agenda una reunión"
                    ></iframe>
                  ) : (
                    <div className="w-full h-full min-h-[650px] flex flex-col items-center justify-center bg-zinc-50/50">
                      <div className="w-8 h-8 border-4 border-brand-primary border-t-transparent rounded-full animate-spin mb-4"></div>
                      <p className="text-zinc-500 text-sm font-medium">Cargando calendario...</p>
                    </div>
                  )}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
