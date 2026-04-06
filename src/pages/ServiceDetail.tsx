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
      <p>Infraestructuras de networking de alto rendimiento y disponibilidad.</p>
      
      <h3>Red y Cableado</h3>
      <p>Arquitecturas escalables y cableado estructurado bajo estándares internacionales.</p>
      
      <h3>Wireless y Optimización</h3>
      <p>Wi-Fi 6/6E de alta densidad con gestión centralizada y monitoreo proactivo.</p>
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
    logos: ['hllstone.png', 'fortinet.png', 'sophos.png', 'eset.png', 'kaspersky.png', 'sangfor.png', 'bitdefender.png'],
    description: 'Protección avanzada contra amenazas digitales, firewalls de próxima generación, SASE y auditorías de seguridad en el sureste de México.',
    content: `
      <p>Ciberseguridad integral contra ransomware, phishing y malware.</p>
      
      <h3>Protección Perimetral y SASE</h3>
      <p>Firewalls NGFW y arquitecturas SASE para acceso seguro desde cualquier lugar.</p>
      
      <h3>Auditorías y Endpoint (EDR)</h3>
      <p>Escaneos de vulnerabilidades y protección EDR con IA bajo modelo Zero Trust.</p>
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
    logos: ['grandstream.png', 'teams.png', 'zoom.png', 'unite-by-net2phone.png'],
    description: 'Sistemas de colaboración, videoconferencia y telefonía IP con enfoque en omnicanalidad para empresas en el sureste de México.',
    content: `
      <p>Voz, video y mensajería unificados para un trabajo más inteligente.</p>
      
      <h3>Telefonía IP y Omnicanalidad</h3>
      <p>Soluciones VoIP flexibles unificando canales de contacto en una sola interfaz.</p>
      
      <h3>Videoconferencia y Colaboración</h3>
      <p>Salas profesionales integradas con Teams, Zoom y Webex.</p>
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
    logos: ['dell.png', 'synology.png', 'lenovo.png', 'hewlett.png', 'qnap.png'],
    description: 'Infraestructura de servidores, almacenamiento SAN/NAS y virtualización para empresas en el sureste de México.',
    content: `
      <p>Hardware empresarial para garantizar la disponibilidad de su información.</p>
      
      <h3>Servidores y Almacenamiento</h3>
      <p>Servidores, NAS y SAN optimizados con deduplicación de datos.</p>
      
      <h3>Virtualización y Respaldo</h3>
      <p>Entornos virtuales (VMware, Hyper-V) y estrategias de respaldo 3-2-1.</p>
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
    logos: ['hyperv.png', 'proxmox.png', 'sangfor.png'],
    description: 'Infraestructura hiperconvergente para simplificar la gestión y escalar recursos de forma eficiente.',
    content: `
      <p>Plataformas HCI que combinan cómputo, almacenamiento y redes.</p>
      
      <h3>Simplicidad y Rendimiento</h3>
      <p>Gestión unificada y escalabilidad sin interrupciones para aplicaciones críticas.</p>
      
      <h3>Reducción de Costos</h3>
      <p>Consolidación de hardware para reducir costos operativos y de capital.</p>
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
    logos: ['prtg.png', 'teamviewer.png', 'cpanel.png'],
    description: 'Servicios de soporte técnico especializado, mesa de ayuda y mantenimiento preventivo en el sureste de México.',
    content: `
      <p>Ofrecemos servicios de Help Desk y Service Desk diseñados para resolver incidencias de forma rápida y eficiente, asegurando la continuidad operativa de su empresa.</p>
      
      <div class="my-8 p-6 bg-brand-primary/10 border border-brand-primary/20 rounded-2xl">
        <h3 class="text-brand-primary mt-0 mb-2">Soluciones Especializadas para PyMES</h3>
        <p class="mb-0 text-zinc-300">Entendemos que las pequeñas y medianas empresas necesitan soporte ágil y accesible. Ofrecemos paquetes de Service Desk a la medida de su presupuesto, brindando a su PyME el respaldo de un departamento de TI corporativo sin los altos costos de mantener personal interno. Desde la gestión de correos hasta el soporte de usuarios, nosotros nos encargamos.</p>
      </div>

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
      <p>Soluciones de software personalizadas para la eficiencia operativa.</p>
      
      <h3>Aplicaciones a la Medida</h3>
      <p>Desarrollo ágil de aplicaciones web y móviles escalables y seguras.</p>
      
      <h3>Integración y Modernización</h3>
      <p>Desarrollo de APIs y modernización de sistemas legados.</p>
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
    logos: ['gigas.png', 'azure.png', 'aws.png', 'google.png'],
    description: 'Migración y gestión de infraestructura en la nube (AWS, Azure, Google Cloud).',
    content: `
      <p>Estrategias de nube ágiles y escalables para su negocio.</p>
      
      <h3>Estrategia y Migración</h3>
      <p>Migración a AWS, Azure o Google Cloud para reducir costos físicos.</p>
      
      <h3>Nube Híbrida y Optimización</h3>
      <p>Entornos híbridos seguros y optimización de rendimiento y costos cloud.</p>
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
      
      <div class="my-8 p-8 bg-gradient-to-br from-blue-900/40 to-blue-600/10 border border-blue-500/30 rounded-3xl text-center relative overflow-hidden">
        <div class="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-[50px] -mr-10 -mt-10"></div>
        <h2 class="text-3xl font-black text-white mb-2 relative z-10">Partners Oficiales de HP</h2>
        <p class="text-blue-200 text-lg mb-0 relative z-10">Descubra la potencia y confiabilidad de los equipos HP empresariales. Ofrecemos el catálogo completo de laptops, workstations e impresoras HP con precios especiales y garantías extendidas para su negocio.</p>
      </div>

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
      <p>Esquemas de financiamiento para mantener su flujo de caja saludable.</p>
      
      <h3>Crédito Simple y Financiamiento</h3>
      <p>Infraestructura a plazos fijos ajustados a los ciclos de su negocio.</p>
      
      <h3>Proyectos Llave en Mano</h3>
      <p>Hardware, software y servicios en un solo financiamiento con beneficios fiscales.</p>
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
      <p>Suscripción mensual de hardware, software y soporte (OPEX).</p>
      
      <h3>DaaS e IaaS</h3>
      <p>Equipos gestionados (DaaS) e infraestructura bajo demanda (IaaS).</p>
      
      <h3>Software as a Service (SaaS)</h3>
      <p>Aplicaciones líderes en la nube con implementación y soporte.</p>
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
      <p>Infraestructura física para conectividad de alta velocidad.</p>
      
      <h3>Cobre, Fibra y 40G</h3>
      <p>Cableado estructurado, fibra óptica y tecnología de 40 Gigabit.</p>
      
      <h3>Redes Inteligentes y Garantías</h3>
      <p>Arquitecturas resilientes y gestión directa de garantías con fabricantes.</p>
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

  if (slug === 'xaas') {
    return (
      <div className="min-h-screen bg-brand-dark text-white font-sans selection:bg-brand-primary/30">
        <Helmet>
          <title>{`${service.title} en Tabasco y Sureste | IB Mexico`}</title>
          <meta name="description" content={`${service.description} Cobertura industrial en Tabasco y el sureste de México.`} />
          <meta name="author" content="Inside Business Mexico" />
          <meta name="category" content="Tecnología e Infraestructura TI" />
          <link rel="canonical" href={`https://www.ib-mexico.com/servicios/${slug}`} />
        </Helmet>

        <main className="pt-32 pb-24 px-6 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-brand-primary/10 rounded-full blur-[120px] -z-10" />
          
          <div className="max-w-5xl mx-auto">
            {/* Hero XAAS */}
            <div className="text-center mb-16 lg:mb-24">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-20 h-20 lg:w-24 lg:h-24 mx-auto rounded-3xl bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-8 ring-1 ring-brand-primary/20"
              >
                <Icon size={48} />
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight"
              >
                {service.title}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl lg:text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed"
              >
                {service.description}
              </motion.p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="prose prose-lg prose-invert prose-zinc max-w-none text-zinc-400 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: service.content }}
              />
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="glass-card p-8 lg:p-10 rounded-3xl border-white/10 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/10 rounded-full blur-[40px] -mr-10 -mt-10" />
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-white relative z-10">
                  <Zap className="text-brand-primary" size={24} />
                  Beneficios Clave
                </h3>
                <ul className="space-y-6 relative z-10">
                  {service.features.map((feature: string, i: number) => (
                    <li key={i} className="flex items-start gap-4 text-zinc-300">
                      <div className="w-6 h-6 rounded-full bg-brand-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="text-brand-primary" size={14} />
                      </div>
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {service.logos && service.logos.length > 0 && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-20"
              >
                <h3 className="text-xl font-bold mb-8 text-center text-zinc-300">Nuestros Partners Financieros</h3>
                <div className="glass-card p-8 rounded-3xl border-white/5 overflow-hidden">
                  <div className="flex gap-16 items-center justify-center flex-wrap">
                    {service.logos.map((logo: string, i: number) => (
                      <div key={i} className="flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                        <img 
                          src={`/partners/${logo}`} 
                          alt={`${service.title} - Partner ${logo.split('.')[0]} - IB-Mexico`} 
                          className="h-12 md:h-16 w-auto object-contain"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Contact CTA */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="p-10 lg:p-16 bg-brand-primary/10 rounded-3xl border border-brand-primary/20 text-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white relative z-10">¿Listo para transformar tu infraestructura?</h2>
              <p className="text-zinc-300 text-lg mb-8 max-w-2xl mx-auto relative z-10">
                Contacta a nuestros expertos y descubre cómo XAAS puede optimizar los recursos de tu empresa sin descapitalizarte.
              </p>
              <Link 
                to="/#contacto" 
                state={{ selectedService: service.title }}
                className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4 relative z-10"
                onClick={() => {
                  setTimeout(() => {
                    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
              >
                Solicitar Asesoría <ArrowLeft className="rotate-180" size={20}/>
              </Link>
            </motion.div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-dark text-white font-sans selection:bg-brand-primary/30">
      <Helmet>
        <title>{`${service.title} en Tabasco y Sureste | IB Mexico`}</title>
        <meta name="description" content={`${service.description} Cobertura industrial en Tabasco y el sureste de México.`} />
        <meta name="author" content="Inside Business Mexico" />
        <meta name="category" content="Tecnología e Infraestructura TI" />
        <link rel="canonical" href={`https://www.ib-mexico.com/servicios/${slug}`} />
      </Helmet>

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
                    <div key={slug} className="flex gap-12 items-center animate-marquee whitespace-nowrap py-4">
                      {[...service.logos, ...service.logos, ...service.logos].map((logo: string, i: number) => (
                        <div key={i} className="flex items-center gap-2 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 min-w-[100px] justify-center">
                          <img 
                            src={`/partners/${logo}`} 
                            alt={`${service.title} - Tecnología ${logo.split('.')[0]} - IB-Mexico`} 
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
