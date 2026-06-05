import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Shield, Network, Headset, Cpu, Cloud, Code2, ShoppingBag, LifeBuoy, CreditCard } from 'lucide-react';

export const Services = () => {
  const services = [
    {
      title: 'Networking y Conectividad',
      slug: 'networking-y-conectividad',
      desc: 'Diseño e implementación de redes LAN, switching y cableado estructurado de alto rendimiento.',
      icon: Network,
    },
    {
      title: 'Ciberseguridad Empresarial',
      slug: 'ciberseguridad-empresarial',
      desc: 'Firewalls de próxima generación (NGFW), protección perimetral, SASE y auditorías de seguridad.',
      icon: Shield,
    },
    {
      title: 'Comunicaciones Unificadas',
      slug: 'comunicaciones-unificadas',
      desc: 'Sistemas de telefonía IP, videoconferencia y herramientas de colaboración con enfoque en omnicanalidad.',
      icon: Headset,
    },
    {
      title: 'Cómputo Empresarial',
      slug: 'computo-empresarial',
      desc: 'Servidores, almacenamiento empresarial y soluciones de virtualización a medida.',
      icon: Cpu,
    },
    {
      title: 'Hiperconvergencia HCI',
      slug: 'hiperconvergencia-hci',
      desc: 'Infraestructura hiperconvergente para simplificar la gestión y escalar recursos de forma eficiente.',
      icon: Cloud,
    },
    {
      title: 'Desarrollo de software',
      slug: 'desarrollo-de-software',
      desc: 'Desarrollo de aplicaciones a la medida y soluciones de software empresarial.',
      icon: Code2,
    },
    {
      title: 'Cloud',
      slug: 'cloud',
      desc: 'Migración y gestión de infraestructura en la nube (AWS, Azure, Google Cloud).',
      icon: Cloud,
    },
    {
      title: 'Retail',
      slug: 'retail',
      desc: 'Venta de laptops, desktops, impresoras y periféricos de las mejores marcas.',
      icon: ShoppingBag,
    },
    {
      title: 'Help desk y Service desk',
      slug: 'help-desk-y-service-desk',
      desc: 'Soporte técnico especializado con metodología ITIL para la continuidad de su operación.',
      icon: LifeBuoy,
    },
    {
      title: 'Financiamiento y Crédito Simple',
      slug: 'financiamiento-y-credito-simple',
      desc: 'Soluciones financieras flexibles para la adquisición de tecnología sin descapitalizar su empresa.',
      icon: CreditCard,
    },
    {
      title: 'Infraestructura y Redes Empresariales',
      slug: 'infraestructura-y-redes-empresariales',
      desc: 'Soluciones de redes, cobre, fibra óptica y gestión de garantías para su empresa.',
      icon: Network,
    }
  ];

  return (
    <section id="servicios" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Servicios de TI <span className="text-gradient">Especializados</span></h2>
          <p className="text-sm md:text-base text-zinc-400 max-w-2xl mx-auto">
            Cubrimos todo el espectro tecnológico de tu empresa con autoridad técnica y los más altos estándares de calidad en todo México.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-card p-8 rounded-2xl group relative overflow-hidden border-white/5 hover:border-brand-primary/50 hover:bg-white/[0.08] transition-all duration-500"
            >
              <Link to={`/servicios/${service.slug}`} className="absolute inset-0 z-20" />
              <div className={`absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="w-14 h-14 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                    {service.desc}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-brand-primary text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  Ver detalles del servicio <ArrowRight size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
