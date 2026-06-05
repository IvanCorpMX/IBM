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
  Monitor,
  AlertTriangle,
  Coins,
  TrendingUp,
  Scale,
  Clock,
  Percent,
  Briefcase
} from 'lucide-react';

const servicesData: Record<string, any> = {
  'networking-y-conectividad': {
    title: 'Networking y Conectividad Empresarial',
    icon: Network,
    logos: ['ubiquiti.png', 'aruba.png', 'grandstream.png'],
    description: 'Diseño e implementación de redes LAN, switching y cableado estructurado de alto rendimiento en todo México.',
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
      'Soporte técnico especializado en todo México'
    ]
  },
  'ciberseguridad-empresarial': {
    title: 'Ciberseguridad y Auditoría de Redes',
    icon: Shield,
    logos: ['manageengine.png', 'nordpass.png', 'hllstone.png', 'fortinet.png', 'sophos.png', 'eset.png', 'kaspersky.png', 'sangfor.png', 'bitdefender.png'],
    description: 'Protección avanzada contra amenazas digitales, firewalls de próxima generación, SASE y auditorías de seguridad en todo México.',
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
    description: 'Sistemas de colaboración, videoconferencia y telefonía IP con enfoque en omnicanalidad para empresas en todo México.',
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
    description: 'Infraestructura de servidores, almacenamiento SAN/NAS y virtualización para empresas en todo México.',
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
    logos: ['google.png', 'microsoft.png', 'manageengine.png', 'prtg.png', 'teamviewer.png', 'cpanel.png'],
    description: 'Servicios de soporte técnico especializado, mesa de ayuda y mantenimiento preventivo en todo México.',
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
      'Soporte técnico presencial en todo México',
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
      'Soporte especializado en todo México'
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
    description: 'Venta y distribución de equipos de cómputo, impresoras y periféricos de las mejores marcas para empresas en todo México.',
    content: `
      <p>Proveemos hardware de última generación, garantizando calidad, garantía y el mejor costo-beneficio del mercado para su empresa.</p>
      
      <div class="my-8 p-8 bg-gradient-to-br from-blue-900/40 to-blue-600/10 border border-blue-500/30 rounded-3xl text-center relative overflow-hidden flex flex-col items-center justify-center">
        <div class="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-[50px] -mr-10 -mt-10"></div>
        <div class="mb-4 relative z-10">
          <img src="/partners/hp.png" alt="HP Partner Logo" class="h-16 w-auto object-contain brightness-0 invert" />
        </div>
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
      'Entrega y configuración en sitio en todo México'
    ]
  },
  'financiamiento-y-credito-simple': {
    title: 'Financiamiento y Crédito Simple',
    icon: CreditCard,
    logos: ['hpfinancial.png', 'dellfinancial.png'],
    description: 'Soluciones financieras flexibles y trajes a la medida para la adquisición de tecnología crítica y equipamiento de TI sin descapitalizar su empresa.',
    content: `
      <p>En el entorno corporativo actual, mantener un flujo de efectivo saludable y preservar las líneas de crédito bancarias tradicionales es vital para la continuidad y crecimiento del negocio. Nuestras opciones de <strong>Financiamiento Tecnológico y Crédito Simple</strong> le permiten adquirir el hardware, software y servicios de TI de última generación que su empresa requiere de manera inmediata, con plazos fijos sumamente competitivos.</p>
      
      <div class="my-8 p-6 bg-brand-primary/10 border border-brand-primary/20 rounded-2xl">
        <h3 class="text-brand-primary mt-0 mb-2">Una Alternativa Financiera de Vanguardia</h3>
        <p class="mb-0 text-zinc-300">A través de convenios de primer nivel con socios como <strong>HP Financial Services</strong> y <strong>Dell Financial Services</strong>, ofrecemos esquemas de financiamiento diseñados exclusivamente para el sector de tecnología comercial, reduciendo los tiempos de aprobación convencionales a solo 48 o 72 horas con requisitos sumamente ágiles.</p>
      </div>

      <h3>Arrendamiento Puro (Leasing Tecnológico)</h3>
      <p>La alternativa fiscalmente más inteligente para la adquisición de activos que sufren una rápida devaluación. Al estructurarse bajo un esquema de arrendamiento de gasto operativo (OPEX), las rentas mensuales son <strong>100% deducibles de impuestos</strong>, permitiéndole modernizar sus dispositivos de cómputo, servidores y equipamiento de red cada 24, 36 o 48 meses sin acumular activos obsoletos.</p>
      
      <h3>Crédito Simple Corporativo</h3>
      <p>Ideal para aquellos proyectos de infraestructura de TI permanente de los cuales su empresa desea retener la propiedad absoluta a largo plazo. Financie cableado estructurado, adecuación técnica de salas de servidores y equipos robustos de telecomunicaciones, pagando cómodamente a plazos mientras amortiza su activo de forma planificada.</p>
      
      <h3>Proyectos Integrales Llave en Mano</h3>
      <p>No divida su inversión en diferentes contratos. Consolidamos en un único financiamiento todo el hardware multimarca, licenciamiento de software estratégico, servicios profesionales de implementación de ingeniería y pólizas anuales de soporte técnico. Todo bajo una sola cuota regular fija, eliminando costos imprevistos.</p>
    `,
    features: [
      'Arrendamiento puro altamente deducible (OPEX) con deducibilidad al 100%',
      'Crédito simple comercial con esquemas de devaluación cero y propiedad directa',
      'Plazos flexibles sumamente dinámicos de 12, 24, 36 y hasta 48 meses',
      'Financiamiento integral "Llave en Mano" incluyendo hardware, licencias y servicios de soporte',
      'Respuesta y aprobación de viabilidad crediticia ágil en un plazo de 48 a 72 horas',
      'Respaldo institucional de HP Financial Services y Dell Financial Services en México'
    ]
  },
  'xaas': {
    title: 'XAAS (Everything as a Service)',
    icon: Monitor,
    logos: ['hpfinancial.png', 'dll.png'],
    description: 'Todo como Servicio: adquiera hardware, software, servicios e infraestructura crítica bajo un esquema de suscripción mensual flexible hibridando tecnología de punta con salud financiera.',
    content: `
      <p><strong>Everything as a Service (XAAS)</strong> representa el paradigma moderno de consumo tecnológico empresarial. En lugar de realizar fuertes inversiones de capital (CAPEX) que se devalúan con rapidez, las empresas migran a un modelo de gasto operativo mensual (OPEX). Esto permite mantener una absoluta liquidez y canalizar los recursos financieros directamente al crecimiento del negocio, mientras disfrutan de la tecnología más avanzada del mercado.</p>
      
      <h3>Device as a Service (DaaS) y Cómputo Gestionado</h3>
      <p>Nos encargamos del ciclo de vida completo de sus equipos de trabajo. Desde laptops y desktops de alto rendimiento hasta sofisticadas workstations de diseño científico o ingeniería. Nuestra suscripción mensual incluye:</p>
      <ul>
        <li>Aprovisionamiento de equipos nuevos de marcas líderes (HP, Dell, Lenovo) adaptados a cada perfil de usuario.</li>
        <li>Instalación de sistemas operativos, paquetería de productividad y software de seguridad centralizada.</li>
        <li>Soporte técnico preferente en sitio y remoto, con reemplazo inmediato ante cualquier eventualidad de hardware.</li>
        <li>Renovación tecnológica automática cada 24 o 36 meses, eliminando la obsolescencia y el inventario de activos obsoletos.</li>
      </ul>
      
      <h3>Hardware as a Service (HaaS) e Infraestructura de Red</h3>
      <p>Escale su centro de datos y redes empresariales sin descapitalizarse. Le brindamos acceso inmediato a servidores empresariales dedicados, almacenamiento masivo NAS/SAN redundante y switching/enrutamiento industrial, todo gestionado y respaldado proactivamente por nuestro equipo de ingenieros certificados.</p>
      
      <h3>Software as a Service (SaaS) y Ciberseguridad</h3>
      <p>Olvídese de la compleja administración de licenciamiento convencional y el riesgo de multas. Suministramos herramientas corporativas clave como suites de colaboración (Microsoft 365, Google Workspace), gestores seguros de identidades (Nordpass) y plataformas avanzadas de administración (ManageEngine), todo integrado en su cuota de servicio unificada.</p>
      
      <h3>Máxima Eficiencia Fiscal y Alianzas de Élite</h3>
      <p>A través de convenios premium y directos con los principales arrendadores tecnológicos del sector — incluyendo <strong>HP Financial Services</strong> y <strong>DLL Financiera</strong> — estructuramos propuestas altamente competitivas que ofrecen deducibilidad de impuestos del 100%, aprobación de crédito ágil y estructuras de pago personalizadas a los flujos y ciclos de su empresa.</p>
    `,
    features: [
      'Device as a Service (DaaS): Laptops, desktops y workstations de última generación',
      'Hardware as a Service (HaaS): Servidores, almacenamiento y switches corporativos',
      'Software as a Service (SaaS): Microsoft 365, Google Workspace, Nordpass y ManageEngine',
      'Soporte técnico multi-sitio y reemplazo de hardware inmediato en sitio incluido',
      'Estructura financiera OPEX altamente deducible de impuestos (Arrendamiento Puro)',
      'Alianza directa y ágil con HP Financial Services y DLL Financiera'
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

  // Estados interactivos para XAAS
  const [isOpexSelected, setIsOpexSelected] = React.useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return <Navigate to="/" replace />;
  }

  const Icon = service.icon;

  // Redefinición de pilares XAAS para el diagrama
  const xaasPillars: Record<string, { title: string; concept: string; desc: string; bullets: string[]; highlight: string }> = {
    daas: {
      title: "Device as a Service (DaaS)",
      concept: "Arrendamiento de Cómputo",
      desc: "Suministro de computadoras portátiles, desktops y workstations de alto rendimiento de marcas líderes (HP, Dell, Lenovo) configuradas a la medida de sus colaboradores.",
      bullets: [
        "Renovación de equipos planificada cada 24 o 36 meses.",
        "Opciones multimarca (HP, Dell, Lenovo) configuradas a la medida.",
        "Configuración y despliegue rápido por ingeniero asignado."
      ],
      highlight: "Equipos de última generación listos para operar."
    },
    haas: {
      title: "Hardware as a Service (HaaS)",
      concept: "Servidores e Infraestructura",
      desc: "Servidores empresariales redundantes, switches industriales, sistemas de ruteo perimetral y almacenamiento de datos central SAN/NAS bajo esquema de suscripción mensual.",
      bullets: [
        "Seguridad de red, fibra óptica y switches de alto rendimiento.",
        "Infraestructura escalable verticalmente sin inversión de capital inicial.",
        "Garantías y refacciones gestionadas de forma directa con el fabricante."
      ],
      highlight: "Alta disponibilidad y redundancia de datos."
    },
    saas: {
      title: "Software as a Service (SaaS)",
      concept: "Productividad y Licenciamiento",
      desc: "Acceso centralizado a las suites de software empresarial más potentes del mercado como Microsoft 365, Google Workspace, gestor de contraseñas Nordpass y software de gestión ManageEngine.",
      bullets: [
        "Licencias oficiales corporativas sin riesgo de sanciones de software.",
        "Facturación consolidada en una única cuota de servicio.",
        "Aprovisionamiento y control centralizado de identidades y accesos."
      ],
      highlight: "Dile adiós a la administración fragmentada de licencias."
    },
    soporte: {
      title: "Mesa de Ayuda (ITIL Support)",
      concept: "Soporte Técnico y Garantías",
      desc: "Ingeniería de soporte remoto y en sitio certificada bajo estándares internacionales ITIL para resolver problemas de TI al instante, blindando la continuidad de su operación.",
      bullets: [
        "Asistencia remota e inmediata ilimitada y visitas programadas en sitio.",
        "Reemplazo inmediato del hardware ante cualquier falla crítica.",
        "Mantenimientos preventivos coordinados periódicamente."
      ],
      highlight: "Respuesta inmediata para mantener tu negocio en movimiento."
    }
  };



  if (slug === 'xaas') {
    return (
      <div className="min-h-screen bg-brand-dark text-white font-sans selection:bg-brand-primary/30">
        <Helmet>
          <title>Arrendamiento de Laptops, Cómputo y Servidores (XaaS) | IB Mexico</title>
          <meta name="description" content="Device as a Service (DaaS) y Hardware as a Service (HaaS) en México. Suministro de computadoras, servidores y software con soporte de TI integral." />
          <meta name="keywords" content="arrendamiento de laptops, device as a service mexico, haas, daas, computadoras en renta empresas, microsoft 365, soporte ti mexico" />
          <meta name="author" content="Inside Business Mexico" />
          <meta name="category" content="Tecnología e Infraestructura TI" />
          <link rel="canonical" href={`https://www.ib-mexico.com/servicios/${slug}`} />
        </Helmet>

        <main className="pt-32 pb-24 px-6 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-brand-primary/10 rounded-full blur-[120px] -z-10" />
          
          <div className="max-w-6xl mx-auto">
            {/* Hero XAAS */}
            <div className="text-center mb-16 lg:mb-20">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-16 h-16 lg:w-20 lg:h-20 mx-auto rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-6 ring-1 ring-brand-primary/20"
              >
                <Icon size={40} />
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 tracking-tight leading-none text-white uppercase font-display"
              >
                Everything as a Service
                <span className="block text-gradient mt-2">XAAS</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-base lg:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed"
              >
                Simplifique la gestión de TI en su empresa. Adquiera hardware, software, servicios e infraestructura crítica bajo un esquema de suscripción mensual flexible alineado con sus necesidades de operación.
              </motion.p>
            </div>

            {/* DIAGRAMA UNIFICADO DE CONTINUIDAD DE TI (EL TODO XAAS) */}
            <div className="mb-24">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-center mb-2 uppercase tracking-tight">
                El Ecosistema Unificado de Continuidad
              </h2>
              <p className="text-center text-zinc-400 text-sm md:text-base max-w-3xl mx-auto mb-12 lg:mb-16">
                No contrate servicios aislados ni administre múltiples proveedores. Consolidamos todo su ciclo operativo de tecnología bajo un solo flujo mensual continuo, previniendo fallas y garantizando que su operación nunca se detenga.
              </p>

              {/* Loop Core Diagram: 4 connected blocks forming a cycle */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                
                {/* DaaS Card */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="glass-card bg-zinc-900/40 p-6 rounded-2xl border-brand-primary/20 hover:border-brand-primary/40 relative flex flex-col justify-between group h-full transition-all duration-300"
                >
                  <div>
                    {/* Connecting line to the next card (Desktop only) */}
                    <div className="hidden lg:block absolute top-10 -right-3 w-6 h-[2px] bg-gradient-to-r from-brand-primary/60 to-transparent z-20" />
                    
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary group-hover:scale-105 transition-transform">
                        <Monitor size={20} />
                      </div>
                      <div>
                        <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest leading-none block mb-0.5">Fase 1</span>
                        <h3 className="font-extrabold text-sm md:text-base text-white tracking-tight">Dispositivos (DaaS)</h3>
                      </div>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                      Suministro de laptops y desktops HP, Dell y Lenovo configuradas bajo demanda de sus colaboradores.
                    </p>
                    <ul className="space-y-2 mb-4 border-t border-white/5 pt-3">
                      <li className="flex items-start gap-1.5 text-xs text-zinc-350">
                        <span className="text-brand-primary font-bold">✓</span>
                        <span>Renovación cada 24 o 36 meses.</span>
                      </li>
                      <li className="flex items-start gap-1.5 text-xs text-zinc-355">
                        <span className="text-brand-primary font-bold">✓</span>
                        <span>Equipos nuevos listos para operar.</span>
                      </li>
                    </ul>
                  </div>
                  <div className="text-[10px] uppercase font-bold text-brand-primary/85 bg-brand-primary/5 py-1.5 px-3 rounded text-center">
                    Cero Obsolescencia
                  </div>
                </motion.div>

                {/* HaaS Card */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="glass-card bg-zinc-900/40 p-6 rounded-2xl border-brand-primary/20 hover:border-brand-primary/40 relative flex flex-col justify-between group h-full transition-all duration-300"
                >
                  <div>
                    <div className="hidden lg:block absolute top-10 -right-3 w-6 h-[2px] bg-gradient-to-r from-brand-primary/60 to-transparent z-20" />
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary group-hover:scale-105 transition-transform">
                        <Cpu size={20} />
                      </div>
                      <div>
                        <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest leading-none block mb-0.5">Fase 2</span>
                        <h3 className="font-extrabold text-sm md:text-base text-white tracking-tight">Servidores (HaaS)</h3>
                      </div>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                      Infraestructura redundante local y en la nube, switches industriales y almacenamiento local SAN/NAS.
                    </p>
                    <ul className="space-y-2 mb-4 border-t border-white/5 pt-3">
                      <li className="flex items-start gap-1.5 text-xs text-zinc-350">
                        <span className="text-brand-primary font-bold">✓</span>
                        <span>Escalabilidad vertical de recursos.</span>
                      </li>
                      <li className="flex items-start gap-1.5 text-xs text-zinc-355">
                        <span className="text-brand-primary font-bold">✓</span>
                        <span>Alta disponibilidad y redundancia.</span>
                      </li>
                    </ul>
                  </div>
                  <div className="text-[10px] uppercase font-bold text-brand-primary/85 bg-brand-primary/5 py-1.5 px-3 rounded text-center">
                    Infraestructura Segura
                  </div>
                </motion.div>

                {/* SaaS Card */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="glass-card bg-zinc-900/40 p-6 rounded-2xl border-brand-primary/20 hover:border-brand-primary/40 relative flex flex-col justify-between group h-full transition-all duration-300"
                >
                  <div>
                    <div className="hidden lg:block absolute top-10 -right-3 w-6 h-[2px] bg-gradient-to-r from-brand-primary/60 to-transparent z-20" />
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary group-hover:scale-105 transition-transform">
                        <Cloud size={20} />
                      </div>
                      <div>
                        <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest leading-none block mb-0.5">Fase 3</span>
                        <h3 className="font-extrabold text-sm md:text-base text-white tracking-tight">Licencias (SaaS)</h3>
                      </div>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                      Suites de productividad Microsoft 365, Google Workspace, y software de seguridad de identidades.
                    </p>
                    <ul className="space-y-2 mb-4 border-t border-white/5 pt-3">
                      <li className="flex items-start gap-1.5 text-xs text-zinc-350">
                        <span className="text-brand-primary font-bold">✓</span>
                        <span>Cero riesgos de multas por software.</span>
                      </li>
                      <li className="flex items-start gap-1.5 text-xs text-zinc-355">
                        <span className="text-brand-primary font-bold">✓</span>
                        <span>Aprovisionamiento unificado.</span>
                      </li>
                    </ul>
                  </div>
                  <div className="text-[10px] uppercase font-bold text-brand-primary/85 bg-brand-primary/5 py-1.5 px-3 rounded text-center">
                    Productividad Blindada
                  </div>
                </motion.div>

                {/* Soporte Card */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="glass-card bg-zinc-900/40 p-6 rounded-2xl border-brand-primary/20 hover:border-brand-primary/40 relative flex flex-col justify-between group h-full transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary group-hover:scale-105 transition-transform">
                        <LifeBuoy size={20} />
                      </div>
                      <div>
                        <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest leading-none block mb-0.5">Fase 4</span>
                        <h3 className="font-extrabold text-sm md:text-base text-white tracking-tight">Soporte (ITIL Desk)</h3>
                      </div>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                      Mesa de ayuda directa, soporte presencial local en todo México con reemplazo de hardware inmediato.
                    </p>
                    <ul className="space-y-2 mb-4 border-t border-white/5 pt-3">
                      <li className="flex items-start gap-1.5 text-xs text-zinc-350">
                        <span className="text-brand-primary font-bold">✓</span>
                        <span>Mecanizado bajo mejores prácticas ITIL.</span>
                      </li>
                      <li className="flex items-start gap-1.5 text-xs text-zinc-355">
                        <span className="text-brand-primary font-bold">✓</span>
                        <span>Mantenimiento predictivo continuo.</span>
                      </li>
                    </ul>
                  </div>
                  <div className="text-[10px] uppercase font-bold text-brand-primary/85 bg-brand-primary/5 py-1.5 px-3 rounded text-center">
                    SLA Activo en Sitio
                  </div>
                </motion.div>

              </div>

              {/* Central Continuity banner linking everything as a single loop */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="mt-12 p-6 bg-brand-primary/5 border border-brand-primary/20 rounded-3xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/10 rounded-full blur-[40px] -mr-10 -mt-10" />
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0 animate-pulse">
                      <Shield size={24} />
                    </div>
                    <div>
                      <h4 className="text-base font-black text-white uppercase tracking-tight">Garantía de Continuidad de Negocio 360°</h4>
                      <p className="text-xs text-zinc-400 max-w-xl leading-relaxed">
                        A través de este ecosistema integrado, su empresa obtiene hardware renovado, licenciamiento actualizado y soporte técnico especializado sin costos ocultos o imprevistos de capital. Un servicio unificado, blindado contra caídas y obsolescencia tecnológica.
                      </p>
                    </div>
                  </div>
                  <div className="text-center md:text-right shrink-0 bg-brand-primary/10 border border-brand-primary/20 py-2.5 px-6 rounded-2xl font-mono">
                    <span className="block text-[9px] uppercase font-bold text-zinc-400">Modelo Todo en Uno</span>
                    <span className="text-lg font-black text-brand-primary">1 SOLA SUSCRIPCIÓN</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* COMPARATIVO DE FINANZAS DE TI: CAPEX VS OPEX */}
            <div className="glass-card p-6 md:p-8 rounded-3xl border-white/10 relative overflow-hidden bg-zinc-900/20 mb-20">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8 pb-6 border-b border-white/5">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 font-display uppercase tracking-tight">Finanzas Estratégicas de TI</h3>
                  <p className="text-zinc-500 text-sm">Compare cómo el modelo XaaS protege sus líneas de crédito corporativas vs la compra convencional.</p>
                </div>
                <div className="flex bg-zinc-900 border border-white/10 rounded-xl p-1.5 shrink-0">
                  <button 
                    onClick={() => setIsOpexSelected(false)}
                    className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all duration-300 cursor-pointer ${!isOpexSelected ? 'bg-red-500/10 text-red-500 border border-red-500/20 shadow-xl' : 'text-zinc-500 hover:text-zinc-300'}`}
                  >
                    Tradicional (CAPEX)
                  </button>
                  <button 
                    onClick={() => setIsOpexSelected(true)}
                    className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all duration-300 cursor-pointer ${isOpexSelected ? 'bg-brand-primary/10 text-brand-primary border border-brand-primary/20 shadow-xl' : 'text-zinc-500 hover:text-zinc-300'}`}
                  >
                    Modelo XaaS (OPEX)
                  </button>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-stretch">
                {isOpexSelected ? (
                  <>
                    <div className="flex flex-col justify-between p-6 bg-brand-primary/5 border border-brand-primary/20 rounded-2xl">
                      <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-[10px] font-bold uppercase tracking-widest mb-4">
                          <Zap size={10} /> REVOLUCIÓN DE LIQUIDEZ Y RESPALDO
                        </div>
                        <h4 className="text-xl font-black text-white mb-4">La Ventaja de Suscribirse (OPEX)</h4>
                        <ul className="space-y-4 text-zinc-350 text-sm leading-relaxed">
                          <li className="flex items-start gap-2.5">
                            <CheckCircle2 size={16} className="text-brand-primary shrink-0 mt-1" />
                            <span><strong>Previsibilidad total:</strong> Conserve efectivo para campañas de ventas o expansión.</span>
                          </li>
                          <li className="flex items-start gap-2.5">
                            <CheckCircle2 size={16} className="text-brand-primary shrink-0 mt-1" />
                            <span><strong>Soporte ilimitado:</strong> Garantías, piezas, y visitas de ingenieros certificadas en sitio incluidas.</span>
                          </li>
                          <li className="flex items-start gap-2.5">
                            <CheckCircle2 size={16} className="text-brand-primary shrink-0 mt-1" />
                            <span><strong>Cero obsolescencia:</strong> Cambie laptops, routers o firewalls periódicamente de forma programada.</span>
                          </li>
                        </ul>
                      </div>
                      <div className="mt-8 pt-4 border-t border-brand-primary/10 text-xs text-brand-primary/70 font-mono">
                        BALANCE DE TI: ACTIVOS MODERNOS Y ASISTIDOS
                      </div>
                    </div>
                    <div className="flex flex-col justify-center p-8 bg-black/40 border border-white/5 rounded-2xl text-center relative overflow-hidden">
                      <div className="text-4xl md:text-5xl font-display font-black text-gradient mb-2">A la medida</div>
                      <h5 className="text-sm font-bold uppercase tracking-widest text-zinc-300 mb-4">Suscripción Mensualizada Flexible</h5>
                      <p className="text-zinc-400 text-sm leading-relaxed max-w-md mx-auto">
                        Incorpore computadoras portátiles, servidores corporativos de alta velocidad, software de seguridad Nordpass y soporte administrativo local con planes adaptados al flujo y tamaño de su empresa.
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex flex-col justify-between p-6 bg-red-950/10 border border-red-500/20 rounded-2xl">
                      <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-[10px] font-bold uppercase tracking-widest mb-4">
                          ⚠️ COSTOS ADICIONALES Y COMPLICACIÓN DE TI
                        </div>
                        <h4 className="text-xl font-black text-white mb-4">La Compra Tradicional (CAPEX)</h4>
                        <ul className="space-y-4 text-zinc-400 text-sm leading-relaxed">
                          <li className="flex items-start gap-2.5">
                            <span className="text-red-500 font-bold shrink-0 mt-0.5">✕</span>
                            <span><strong>Fuerte salida de efectivo:</strong> Agotamiento inmediato de capital de trabajo y líneas de crédito.</span>
                          </li>
                          <li className="flex items-start gap-2.5">
                            <span className="text-red-500 font-bold shrink-0 mt-0.5">✕</span>
                            <span><strong>Riesgos de fallas técnicas:</strong> Gastos imprevistos de reparación corporativa y reemplazos urgentes.</span>
                          </li>
                          <li className="flex items-start gap-2.5">
                            <span className="text-red-500 font-bold shrink-0 mt-0.5">✕</span>
                            <span><strong>Acumulación de lentitud:</strong> Equipos que quedan rápidamente desfasados con consecuencias en la operación.</span>
                          </li>
                        </ul>
                      </div>
                      <div className="mt-8 pt-4 border-t border-red-500/10 text-xs text-red-400/70 font-mono">
                        CONTABILIDAD TRADICIONAL: ACTIVOS QUE SE DEPRECIAN DIARIO
                      </div>
                    </div>
                    <div className="flex flex-col justify-center p-8 bg-black/40 border border-white/5 rounded-2xl text-center">
                      <AlertTriangle className="mx-auto text-red-500 mb-2 animate-bounce" size={32} />
                      <h5 className="text-sm font-bold uppercase tracking-widest text-zinc-300 mb-2">Riesgo Operativo Elevado</h5>
                      <p className="text-zinc-400 text-sm leading-relaxed max-w-md mx-auto">
                        Comprar equipo amarra su capital en hardware. Oculte cuellos de botella imprevistos en fallas críticas, actualizaciones periódicas de software y licitaciones redundantes que consumen tiempo vital.
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>

            {service.logos && service.logos.length > 0 && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-20"
              >
                <h3 className="text-xl font-bold mb-8 text-center text-zinc-400 uppercase tracking-widest text-xs">Nuestros Respaldo de Alianzas Financieras</h3>
                <div className="glass-card p-6 md:p-8 rounded-3xl border-white/5 overflow-hidden">
                  <div className="flex gap-16 items-center justify-center flex-wrap">
                    {service.logos.map((logo: string, i: number) => (
                      <div key={i} className="flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-350">
                        <img 
                          src={`/partners/${logo}`} 
                          alt={`${service.title} - Partner ${logo.split('.')[0]} - IB-Mexico`} 
                          className="h-10 md:h-14 w-auto object-contain"
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
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white relative z-10 font-display">¿Listo para transformar tu infraestructura?</h2>
              <p className="text-zinc-300 text-base md:text-lg mb-8 max-w-2xl mx-auto relative z-10">
                Contacte a nuestros ingenieros certificados en México y obtenga su propuesta personalizada de arrendamiento de equipo DaaS / HaaS.
              </p>
              <Link 
                to="/#contacto" 
                className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4 relative z-10 cursor-pointer"
                onClick={() => {
                  setTimeout(() => {
                    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
              >
                Solicitar Asesoría XaaS <ArrowLeft className="rotate-180" size={20}/>
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
        <title>{`${service.title} | IB Mexico`}</title>
        <meta name="description" content={`${service.description} Cobertura estratégica en todo México.`} />
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
                <p className="text-xs text-zinc-400 mb-4">Nuestro equipo de expertos en todo México está listo para asesorarte.</p>
                <Link 
                  to="/#contacto" 
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
                    .filter(([key]) => key !== slug && key !== 'xaas')
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
