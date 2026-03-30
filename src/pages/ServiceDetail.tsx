import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Shield, 
  Network, 
  Headset, 
  Cpu, 
  LifeBuoy, 
  Code2, 
  ShoppingBag, 
  CreditCard, 
  FileText,
  Zap,
  Lock,
  BarChart3,
  Cloud,
  Monitor
} from 'lucide-react';

const servicesData: Record<string, any> = {
  'networking-y-conectividad': {
    title: 'Networking y Conectividad Empresarial',
    icon: Network,
    logos: ['ubiquiti.png', 'aruba.png', 'grandstream.png'],
    description: 'Diseño e implementación de redes LAN, switching y cableado estructurado de alto rendimiento en el sureste de México.',
    content: `
      <p>Diseñamos, implementamos y gestionamos infraestructuras de networking que garantizan el máximo rendimiento y disponibilidad para su negocio.</p>
      
      <h3>Infraestructura de Red y Cableado</h3>
      <p>Creamos arquitecturas escalables con equipos de última generación. Realizamos instalaciones de cableado estructurado y fibra óptica bajo estrictos estándares internacionales (TIA/EIA).</p>
      
      <h3>Wireless y Optimización</h3>
      <p>Implementamos soluciones Wi-Fi 6/6E de alta densidad con gestión centralizada. Además, ofrecemos monitoreo proactivo 24/7 para resolver cuellos de botella antes de que afecten su productividad.</p>
    `,
    features: [
      'Certificación de cableado estructurado Cat 6, 6A y 7',
      'Diseño de redes de fibra óptica para campus industriales',
      'Implementación de SD-WAN para sucursales remotas',
      'Configuración de VLANs y segmentación de red para seguridad',
      'Soporte técnico especializado en el sureste de México'
    ]
  },
  'ciberseguridad-empresarial': {
    title: 'Ciberseguridad y Auditoría de Redes',
    icon: Shield,
    logos: ['hllstone.png', 'fortinet.png', 'sophos.png', 'endpoint.png', 'eset.png', 'kaspersky.png', 'sangfor.png', 'bitdefender.png'],
    description: 'Protección avanzada contra amenazas digitales, firewalls de próxima generación, SASE y auditorías de seguridad en el sureste de México.',
    content: `
      <p>Ofrecemos soluciones de ciberseguridad integral para proteger los activos de su organización contra ataques de ransomware, phishing y malware.</p>
      
      <h3>Protección Perimetral y SASE</h3>
      <p>Implementamos Firewalls de Próxima Generación (NGFW) y arquitecturas SASE para unificar red y seguridad en la nube, garantizando un acceso seguro desde cualquier lugar.</p>
      
      <h3>Auditorías y Endpoint (EDR)</h3>
      <p>Realizamos escaneos de vulnerabilidades para identificar puntos débiles. Protegemos los dispositivos de los usuarios con soluciones EDR basadas en inteligencia artificial para bloquear ataques de día cero bajo un modelo Zero Trust.</p>
    `,
    features: [
      'Implementación de Arquitectura SASE',
      'Firewalls Fortinet y Sophos',
      'Análisis de vulnerabilidades y pruebas de penetración',
      'Protección contra Ransomware con respaldo inmutable',
      'Monitoreo de seguridad 24/7 (SOC)'
    ]
  },
  'comunicaciones-unificadas': {
    title: 'Comunicaciones Unificadas y Telefonía IP',
    icon: Headset,
    logos: ['grandstream.png', 'teams.png', 'zoom.png'],
    description: 'Sistemas de colaboración, videoconferencia y telefonía IP con enfoque en omnicanalidad para empresas en el sureste de México.',
    content: `
      <p>Integramos voz, video, mensajería y presencia en una sola plataforma para que su equipo trabaje de manera más inteligente desde cualquier lugar.</p>
      
      <h3>Telefonía IP y Omnicanalidad</h3>
      <p>Migre a soluciones VoIP flexibles y unifique todos sus canales de contacto (voz, chat, redes sociales) en una sola interfaz para mejorar la atención al cliente.</p>
      
      <h3>Videoconferencia y Colaboración</h3>
      <p>Diseñamos salas de videoconferencia profesionales integradas con Teams, Zoom y Webex. Facilitamos la colaboración en tiempo real con soporte técnico preventivo y correctivo.</p>
    `,
    features: [
      'Estrategias de Omnicanalidad integradas',
      'Conmutadores IP físicos y en la nube',
      'Equipamiento para salas de juntas inteligentes',
      'Integración de telefonía con CRMs',
      'Soluciones de Contact Center para atención al cliente'
    ]
  },
  'computo-empresarial': {
    title: 'Cómputo Empresarial',
    icon: Cpu,
    logos: ['dell.png', 'synology.png', 'lenovo.png', 'hewlett.png'],
    description: 'Infraestructura de servidores, almacenamiento SAN/NAS y virtualización para empresas en el sureste de México.',
    content: `
      <p>Proveemos soluciones de hardware empresarial de alto rendimiento que garantizan la integridad, disponibilidad y velocidad de acceso a su información crítica.</p>
      
      <h3>Servidores y Almacenamiento</h3>
      <p>Ofrecemos servidores de rack y torre de marcas líderes, junto con sistemas de almacenamiento NAS y SAN optimizados con deduplicación y compresión de datos.</p>
      
      <h3>Virtualización y Respaldo</h3>
      <p>Implementamos entornos virtuales (VMware, Hyper-V) para reducir costos operativos. Diseñamos estrategias de respaldo 3-2-1 y almacenamiento inmutable contra ransomware.</p>
    `,
    features: [
      'Venta y configuración de servidores Dell y HP',
      'Sistemas de almacenamiento masivo y alta disponibilidad',
      'Migración de servidores físicos a virtuales',
      'Soluciones de respaldo en la nube y local',
      'Mantenimiento preventivo de centros de datos'
    ]
  },
  'hiperconvergencia-hci': {
    title: 'Hiperconvergencia HCI',
    icon: Cloud,
    logos: ['nutanix.png', 'vmware.png', 'hyperv.png'],
    description: 'Infraestructura hiperconvergente para simplificar la gestión y escalar recursos de forma eficiente.',
    content: `
      <p>Implementamos plataformas HCI que combinan cómputo, almacenamiento y redes en un solo sistema definido por software, eliminando la complejidad del centro de datos tradicional.</p>
      
      <h3>Simplicidad y Rendimiento</h3>
      <p>Gestione todo desde una única interfaz y escale añadiendo nodos sin interrupciones. Ideal para bases de datos, VDI y aplicaciones críticas con alta disponibilidad integrada.</p>
      
      <h3>Reducción de Costos</h3>
      <p>Consolide su hardware para reducir significativamente los costos operativos (OPEX) y de capital, optimizando espacio y energía.</p>
    `,
    features: [
      'Implementación de clústeres hiperconvergentes',
      'Gestión unificada de cómputo y almacenamiento',
      'Escalabilidad horizontal sin interrupciones',
      'Alta disponibilidad y recuperación ante desastres integrada',
      'Optimización de costos operativos (OPEX)'
    ]
  },
  'help-desk-y-service-desk': {
    title: 'Help Desk y Service Desk',
    icon: LifeBuoy,
    logos: ['prtg.png', 'teamviewer.png'],
    description: 'Servicios de soporte técnico especializado, mesa de ayuda y mantenimiento preventivo en el sureste de México.',
    content: `
      <p>Ofrecemos servicios de Help Desk y Service Desk diseñados para resolver incidencias de forma rápida y eficiente, asegurando la continuidad operativa de su empresa.</p>
      
      <h3>Mesa de Ayuda ITIL y Soporte</h3>
      <p>Nuestros servicios siguen las mejores prácticas de ITIL. Contamos con ingenieros para soporte presencial en toda la región y asistencia remota inmediata para minimizar tiempos de inactividad.</p>
      
      <h3>Mantenimiento y Gestión</h3>
      <p>Brindamos mantenimiento preventivo programado para extender la vida útil de su inversión tecnológica y gestionamos su inventario de activos de TI y garantías.</p>
    `,
    features: [
      'Soporte técnico presencial en el sureste de México',
      'Asistencia remota inmediata 24/7',
      'Mantenimiento preventivo de hardware y software',
      'Administración de garantías con fabricantes',
      'Consultoría técnica para proyectos especiales'
    ]
  },
  'desarrollo-de-software': {
    title: 'Desarrollo de software',
    icon: Code2,
    logos: ['mysql.png', 'java.png', 'php.png', 'html.png', 'css.png', 'js.png'],
    description: 'Desarrollo de aplicaciones a medida y soluciones de software empresarial.',
    content: `
      <p>Creamos soluciones de software personalizadas que impulsan la innovación y la eficiencia operativa de su empresa.</p>
      
      <h3>Aplicaciones a la Medida</h3>
      <p>Utilizamos metodologías ágiles para construir aplicaciones web y móviles escalables, seguras y fáciles de usar que resuelven los retos específicos de su industria.</p>
      
      <h3>Integración y Modernización</h3>
      <p>Desarrollamos APIs para conectar sus sistemas existentes (ERP, CRM) y modernizamos aplicaciones monolíticas antiguas transformándolas en sistemas ágiles e independientes.</p>
    `,
    features: [
      'Desarrollo web y móvil personalizado',
      'Integración de sistemas y desarrollo de APIs',
      'Modernización de aplicaciones legadas',
      'Automatización de procesos de negocio',
      'Soporte especializado en el sureste de México'
    ]
  },
  'cloud': {
    title: 'Soluciones Cloud',
    icon: Cloud,
    logos: ['gigas.png', 'azure.png'],
    description: 'Migración y gestión de infraestructura en la nube (AWS, Azure, Google Cloud).',
    content: `
      <p>Le ayudamos a diseñar y ejecutar una estrategia de nube ágil, escalable y eficiente que se alinee con sus objetivos de negocio.</p>
      
      <h3>Estrategia y Migración</h3>
      <p>Analizamos sus cargas de trabajo para migrar a AWS, Azure o Google Cloud, reduciendo costos de infraestructura física y aumentando la disponibilidad.</p>
      
      <h3>Nube Híbrida y Optimización</h3>
      <p>Diseñamos entornos híbridos que combinan la seguridad local con la elasticidad de la nube pública. Además, optimizamos el rendimiento y los costos de su entorno cloud.</p>
    `,
    features: [
      'Migración de servidores locales a la nube',
      'Implementación de Microsoft 365 y Google Workspace',
      'Consultoría en arquitectura de nube segura',
      'Gestión de entornos de nube híbrida',
      'Optimización de costos en la nube'
    ]
  },
  'retail': {
    title: 'Retail',
    icon: ShoppingBag,
    logos: ['dell.png', 'lenovo.png', 'hewlett.png', 'brother.png', 'ricoh.png', 'hp.png', 'epson.png'],
    description: 'Venta y distribución de equipos de cómputo, impresoras y periféricos de las mejores marcas para empresas en el sureste de México.',
    content: `
      <p>Proveemos hardware de última generación, garantizando calidad, garantía y el mejor costo-beneficio del mercado para su empresa.</p>
      
      <h3>Cómputo e Impresión</h3>
      <p>Distribuimos laptops, desktops y workstations de uso rudo (Dell, HP, Lenovo), así como impresoras y escáneres de alta velocidad (Epson, Brother).</p>
      
      <h3>Periféricos y Soporte Local</h3>
      <p>Complementamos con monitores, UPS y accesorios. Todo con el respaldo de nuestro equipo técnico local para configuración y gestión de garantías.</p>
    `,
    features: [
      'Venta de laptops y desktops empresariales',
      'Impresoras y multifuncionales de alto volumen',
      'Sistemas de protección eléctrica y UPS',
      'Accesorios y periféricos especializados',
      'Entrega y configuración en sitio en el sureste de México'
    ]
  },
  'financiamiento-y-credito-simple': {
    title: 'Financiamiento y Crédito Simple',
    icon: CreditCard,
    logos: ['hpfinancial.png', 'dellfinancial.png'],
    description: 'Soluciones financieras flexibles para la adquisición de tecnología sin descapitalizar su empresa.',
    content: `
      <p>Facilitamos el acceso a la mejor tecnología a través de esquemas de financiamiento diseñados para mantener su flujo de caja saludable.</p>
      
      <h3>Crédito Simple y Financiamiento</h3>
      <p>Adquiera infraestructura a plazos fijos, siendo dueño desde el primer día. Ofrecemos planes que se ajustan a los ciclos de ingresos de su negocio.</p>
      
      <h3>Proyectos Llave en Mano</h3>
      <p>Incluimos hardware, software y servicios de implementación en un solo financiamiento, permitiéndole arrancar proyectos con inversión inicial mínima y beneficios fiscales.</p>
    `,
    features: [
      'Crédito simple con tasas competitivas',
      'Plazos flexibles de 12 a 48 meses',
      'Aprobación ágil para empresas',
      'Financiamiento de proyectos integrales',
      'Asesoría financiera especializada en TI'
    ]
  },
  'xaas': {
    title: 'XAAS (Everything as a Service)',
    icon: Monitor,
    logos: ['hpfinancial.png', 'dellfinancial.png'],
    description: 'Todo como Servicio: hardware, software e infraestructura bajo un modelo de suscripción.',
    content: `
      <p>Consuma tecnología mediante una suscripción mensual que incluye hardware, software y soporte, transformando sus gastos de capital (CAPEX) en operativos (OPEX).</p>
      
      <h3>DaaS e IaaS</h3>
      <p>Equipe a su personal con equipos de cómputo gestionados (DaaS) y consuma recursos de infraestructura (IaaS) bajo demanda, pagando solo por lo que utiliza.</p>
      
      <h3>Software as a Service (SaaS)</h3>
      <p>Acceda a aplicaciones líderes (Microsoft 365, Google Workspace, CRMs) en la nube con implementación y soporte incluidos.</p>
    `,
    features: [
      'Device as a Service (DaaS) para equipos de cómputo',
      'Infrastructure as a Service (IaaS) escalable',
      'Software as a Service (SaaS) y herramientas de productividad',
      'Soporte técnico y gestión del ciclo de vida incluidos',
      'Facturación mensual predecible y transparente'
    ]
  },
  'infraestructura-y-redes-empresariales': {
    title: 'Infraestructura y Redes Empresariales',
    icon: Network,
    logos: ['leviton.png', 'panduit.png', 'condunet.png'],
    description: 'Soluciones integrales de redes empresariales, cobre, fibra óptica y gestión de garantías.',
    content: `
      <p>Ofrecemos soluciones avanzadas de infraestructura física que garantizan una conectividad ininterrumpida y de alta velocidad.</p>
      
      <h3>Cobre, Fibra y 40G</h3>
      <p>Implementamos cableado estructurado (Cat 6, 6A, 7) y fibra óptica. Para centros de datos modernos, desplegamos tecnología de 40 Gigabit con latencias mínimas.</p>
      
      <h3>Redes Inteligentes y Garantías</h3>
      <p>Diseñamos arquitecturas resilientes y seguras. Además, gestionamos directamente las garantías con los fabricantes para proteger su inversión.</p>
    `,
    features: [
      'Redes empresariales de alto desempeño',
      'Soluciones de cobre y fibra óptica',
      'Tecnología Forty Gigabit (40G)',
      'Gestión integral de garantías con fabricantes',
      'Certificación de nodos de red bajo estándares TIA/EIA'
    ]
  }
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? servicesData[slug] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return <Navigate to="/" replace />;
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-brand-dark text-white font-sans selection:bg-brand-primary/30">
      <Helmet>
        <title>{`${service.title} en el Sureste de México | Expertos en TI`}</title>
        <meta name="description" content={`${service.description} Ofrecemos soporte técnico, redes empresariales y soluciones tecnológicas en el sureste de México.`} />
      </Helmet>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/80 backdrop-blur-lg border-b border-white/10 py-4">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-zinc-400 hover:text-brand-primary transition-colors group">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Volver al inicio</span>
          </Link>
          <div className="flex items-center gap-2">
            <img src="/Logo_ib-mexico.webp" alt="Inside Business Mexico - Expertos en TI en el sureste de México" className="w-8 h-8 object-contain" referrerPolicy="no-referrer" />
            <span className="font-display font-bold text-lg tracking-tighter hidden sm:block">Inside Business Mexico</span>
          </div>
        </div>
      </header>

      <main className="pt-24 lg:pt-32 pb-16 lg:pb-24 px-4 lg:px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-12"
            >
              <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-6 lg:mb-8">
                <Icon size={28} className="lg:hidden" />
                <Icon size={32} className="hidden lg:block" />
              </div>
              <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold mb-4 lg:mb-6 tracking-tight leading-tight">{service.title}</h1>
              <p className="text-base lg:text-xl text-zinc-400 leading-relaxed mb-6 lg:mb-8 font-medium">
                {service.description}
              </p>
              
              <div 
                className="prose prose-sm lg:prose-base prose-invert prose-zinc max-w-none space-y-4 lg:space-y-6 text-zinc-400 leading-relaxed mb-10 lg:mb-12"
                dangerouslySetInnerHTML={{ __html: service.content }}
              />

              {service.logos && service.logos.length > 0 && (
                <div className="mt-12 lg:mt-16">
                  <h3 className="text-lg lg:text-xl font-bold mb-6 lg:mb-8 flex items-center gap-3">
                    <div className="w-6 lg:w-8 h-1 bg-brand-primary rounded-full" />
                    Tecnologías y Marcas
                  </h3>
                  <div className="glass-card p-6 lg:p-8 rounded-2xl lg:rounded-3xl border-white/5 overflow-hidden relative">
                    <div className="flex gap-12 items-center animate-marquee whitespace-nowrap py-4">
                      {[...service.logos, ...service.logos, ...service.logos].map((logo: string, i: number) => (
                        <div key={i} className="flex items-center gap-2 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 min-w-[100px] justify-center">
                          <img 
                            src={`/partners/${logo}`} 
                            alt={`Tecnología ${logo.split('.')[0]} - Inside Business Mexico`} 
                            className="h-10 lg:h-12 w-auto object-contain"
                            loading="lazy"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              if (target.dataset.failed) return;
                              target.dataset.failed = "true";
                              target.style.display = 'none';
                              const span = document.createElement('span');
                              span.className = "font-display font-black text-lg lg:text-xl italic uppercase text-zinc-500/50";
                              span.innerText = logo.split('.')[0];
                              target.parentNode?.appendChild(span);
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6 lg:space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-card p-6 lg:p-8 rounded-2xl lg:rounded-3xl border-white/10 lg:sticky lg:top-32 hover:bg-white/[0.05] transition-colors duration-500"
            >
              <h3 className="text-lg lg:text-xl font-bold mb-4 lg:mb-6 flex items-center gap-2">
                <Zap className="text-brand-primary" size={20} />
                Características Clave
              </h3>
              <ul className="space-y-4 mb-8">
                {service.features.map((feature: string, i: number) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-zinc-300">
                    <CheckCircle2 className="text-brand-primary shrink-0 mt-0.5" size={18} />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="p-6 bg-brand-primary/10 rounded-2xl border border-brand-primary/20 mb-8">
                <h4 className="font-bold text-white mb-2">¿Necesitas una cotización?</h4>
                <p className="text-xs text-zinc-400 mb-4">Nuestro equipo de expertos en el sureste de México está listo para asesorarte.</p>
                <Link 
                  to="/#contacto" 
                  state={{ selectedService: service.title }}
                  className="btn-primary w-full py-3 text-sm"
                  onClick={() => {
                    setTimeout(() => {
                      document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                >
                  Contactar Ahora
                </Link>
              </div>

              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500">Otros Servicios</h4>
                <div className="grid gap-2">
                  {Object.entries(servicesData)
                    .filter(([key]) => key !== slug)
                    .map(([key, data]) => (
                      <Link 
                        key={key} 
                        to={`/servicios/${key}`}
                        className="p-3 rounded-lg bg-white/5 border border-white/5 hover:border-brand-primary/30 hover:bg-white/10 transition-all text-sm flex items-center justify-between group"
                      >
                        <span className="text-zinc-300 group-hover:text-white transition-colors">{data.title}</span>
                        <ChevronRight size={14} className="text-zinc-500 group-hover:text-brand-primary transition-colors" />
                      </Link>
                    ))}
                </div>
              </div>
            </motion.div>
          </aside>
        </div>
      </main>

      <footer className="border-t border-white/5 py-12 bg-brand-dark/50">
        <div className="max-w-7xl mx-auto px-6 text-center text-zinc-500 text-sm">
          <p>© {new Date().getFullYear()} Inside Business Mexico. Atendemos a todo el sureste de México.</p>
        </div>
      </footer>
    </div>
  );
};

const ChevronRight = ({ size, className }: { size: number, className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="m9 18 6-6-6-6"/>
  </svg>
);

export default ServiceDetail;
