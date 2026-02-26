/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import PrivacyPolicy from './pages/PrivacyPolicy';
import { 
  Shield, 
  Network, 
  Wifi, 
  Cpu, 
  FileText, 
  Printer, 
  ChevronRight, 
  CheckCircle2, 
  MessageSquare, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight,
  Lock,
  Zap,
  BarChart3,
  Users,
  Headset,
  Code2,
  Cloud,
  ShoppingBag,
  CreditCard,
  LifeBuoy,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Monitor
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const scrollToSection = (id: string) => {
  if (window.location.pathname !== '/') {
    window.location.href = `/#${id}`;
    return;
  }
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (location.pathname !== '/') return null;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-dark/80 backdrop-blur-lg border-b border-white/10 py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => {
          if (window.location.pathname !== '/') {
            window.location.href = '/';
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }}>
          <img src="/Logo_ib-mexico.png" alt="Inside Business Mexico" className="w-14 h-14 object-contain" referrerPolicy="no-referrer" />
          <div className="flex flex-col -gap-1">
            <span className="font-display font-bold text-xl tracking-tighter leading-none">Inside Business</span>
            <span className="font-display font-medium text-[10px] tracking-[0.2em] text-brand-primary uppercase">Mexico</span>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <button onClick={() => scrollToSection('servicios')} className="hover:text-brand-primary transition-colors">Servicios</button>
          <button onClick={() => scrollToSection('ciberseguridad')} className="hover:text-brand-primary transition-colors">Ciberseguridad</button>
          <button onClick={() => scrollToSection('nosotros')} className="hover:text-brand-primary transition-colors">Nosotros</button>
          <button onClick={() => scrollToSection('contacto')} className="hover:text-brand-primary transition-colors">Contacto</button>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://wa.me/5215620013345" target="_blank" rel="noreferrer" className="hidden sm:flex items-center gap-2 text-brand-primary font-semibold text-sm">
            <Phone size={16} />
            <span>Diagnóstico Gratis</span>
          </a>
          <a 
            href="/brochure-ib-mexico.pdf" 
            target="_blank" 
            rel="noreferrer"
            className="btn-primary py-2 px-5 text-sm flex items-center gap-2"
          >
            <FileText size={16} />
            Brochure
          </a>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-[40vh] lg:min-h-screen flex items-center pt-24 lg:pt-20 pb-12 lg:pb-0 overflow-hidden">
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-4 lg:mb-6">
            <Zap size={14} />
            Infraestructura TI de Próxima Generación
          </div>
          <h1 className="text-2xl sm:text-5xl md:text-7xl font-bold leading-[1.1] mb-4 lg:mb-6">
            Blindamos tu <span className="text-gradient">Infraestructura</span>, Impulsamos tu Negocio.
          </h1>
          <p className="text-sm sm:text-lg text-zinc-400 mb-6 lg:mb-8 max-w-xl leading-relaxed">
            Networking, Ciberseguridad y Soluciones de Cómputo Empresarial diseñadas para la era digital. Autoridad técnica y confianza para las empresas líderes en México.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
            <button 
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary text-sm sm:text-lg px-5 sm:px-8 py-2.5 sm:py-4"
            >
              Agendar Diagnóstico Gratuito
              <ChevronRight size={18} className="sm:w-5 sm:h-5" />
            </button>
            <button 
              onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-outline text-sm sm:text-lg px-5 sm:px-8 py-2.5 sm:py-4"
            >
              Nuestros Servicios
            </button>
          </div>
          
          <div className="mt-12 flex items-center gap-6 grayscale opacity-50">
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">Partners Certificados</span>
            <div className="flex gap-8 items-center font-display font-black text-xl italic">
              <span>CISCO</span>
              <span>FORTINET</span>
              <span>DELL</span>
              <span>HP</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 glass-card rounded-3xl p-8 border-white/20 shadow-2xl overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-primary to-brand-secondary" />
            <div className="flex items-center justify-between mb-8">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-brand-primary/50" />
                <div className="w-3 h-3 rounded-full bg-zinc-500/50" />
                <div className="w-3 h-3 rounded-full bg-zinc-500/50" />
              </div>
              <div className="text-[10px] font-mono text-zinc-500">NETWORK_STATUS: SECURE</div>
            </div>
            
            <div className="space-y-6">
              <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-zinc-400">Ciberseguridad Perimetral</span>
                  <span className="text-[10px] text-brand-primary font-mono">ACTIVE</span>
                </div>
                <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '98%' }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
                    className="h-full bg-brand-primary" 
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white/5 rounded-xl border border-white/5 flex flex-col items-center justify-center">
                  <Shield className="text-brand-secondary mb-2" size={24} />
                  <span className="text-xl font-bold">100%</span>
                  <span className="text-[10px] text-zinc-500 uppercase tracking-tighter">Protección</span>
                </div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/5 flex flex-col items-center justify-center">
                  <Network className="text-brand-primary mb-2" size={24} />
                  <span className="text-xl font-bold">99.9%</span>
                  <span className="text-[10px] text-zinc-500 uppercase tracking-tighter">Uptime</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative circles */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-primary/20 rounded-full blur-3xl -z-10" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-secondary/20 rounded-full blur-3xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    { label: 'Proyectos Exitosos', value: '500+', icon: CheckCircle2 },
    { label: 'Años de Experiencia', value: '15+', icon: Zap },
    { label: 'Soporte 24/7', value: '100%', icon: Shield },
    { label: 'Clientes Corporativos', value: '200+', icon: Users },
  ];

  return (
    <section className="py-20 border-y border-white/5 bg-zinc-900/50">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 mb-4 text-brand-primary">
              <stat.icon size={24} />
            </div>
            <div className="text-3xl font-bold mb-1">{stat.value}</div>
            <div className="text-xs text-zinc-500 uppercase tracking-widest font-semibold">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Services = () => {
  const [selectedService, setSelectedService] = useState<any>(null);

  const services = [
    {
      title: 'Networking Empresarial',
      desc: 'Diseño e implementación de redes LAN, switching y cableado estructurado de alto rendimiento.',
      details: 'Nuestras soluciones de networking están diseñadas para soportar las demandas críticas de las empresas modernas. Implementamos infraestructuras escalables, seguras y de alta disponibilidad utilizando tecnología de punta de fabricantes líderes como Cisco y Aruba. Desde el diseño lógico hasta la implementación física de cableado estructurado categoría 6A y fibra óptica.',
      icon: Network,
      color: 'from-red-500/20 to-brand-primary/20'
    },
    {
      title: 'Ciberseguridad Avanzada',
      desc: 'Firewalls de próxima generación (NGFW), protección perimetral y auditorías de seguridad.',
      details: 'Protegemos su perímetro y sus datos contra las amenazas más sofisticadas. Implementamos Firewalls de Próxima Generación (Fortinet, Palo Alto), sistemas de detección de intrusos (IDS/IPS), y soluciones de seguridad en el endpoint. Realizamos auditorías de vulnerabilidades periódicas para asegurar que su infraestructura cumpla con los más altos estándares de seguridad.',
      icon: Shield,
      color: 'from-red-600/20 to-brand-primary/20'
    },
    {
      title: 'Comunicaciones Unificadas',
      desc: 'Sistemas de telefonía IP, videoconferencia y herramientas de colaboración en tiempo real.',
      details: 'Integramos voz, video y mensajería en una sola plataforma. Soluciones de telefonía IP (Avaya, Cisco, Grandstream) y sistemas de videoconferencia profesional para salas de juntas y trabajo híbrido. Mejore la productividad de su equipo con herramientas de colaboración de última generación.',
      icon: Headset,
      color: 'from-red-700/20 to-brand-primary/20'
    },
    {
      title: 'Cómputo y Almacenamiento',
      desc: 'Servidores, almacenamiento empresarial y soluciones de virtualización a medida.',
      details: 'Proveemos infraestructura de cómputo robusta (Dell, HP, Lenovo) y sistemas de almacenamiento SAN/NAS de alto rendimiento. Especialistas en virtualización con VMware y Hyper-V para optimizar sus recursos de hardware y garantizar la continuidad del negocio.',
      icon: Cpu,
      color: 'from-red-800/20 to-brand-primary/20'
    },
    {
      title: 'Help desk y Service desk',
      desc: 'Soporte técnico especializado con metodología ITIL para la continuidad de su operación.',
      details: 'Ofrecemos soporte técnico de primer y segundo nivel bajo el esquema SPOC (Single Point of Contact). Basamos nuestros procesos en ITIL para garantizar una atención eficiente, rápida y organizada, asegurando que su infraestructura tecnológica siempre esté operativa.',
      icon: LifeBuoy,
      color: 'from-red-900/20 to-brand-primary/20'
    },
    {
      title: 'Desarrollo de Software y Cloud',
      desc: 'Aplicaciones a la medida y soluciones en la nube (AWS, Azure, Google Cloud).',
      details: 'Creamos software personalizado que se adapta a los procesos únicos de su negocio utilizando metodologías ágiles (SCRUM). Además, migramos y gestionamos sus cargas de trabajo en las principales nubes públicas para reducir costos y aumentar la escalabilidad.',
      icon: Code2,
      color: 'from-zinc-800/20 to-brand-primary/20'
    },
    {
      title: 'Retail',
      desc: 'Soluciones tecnológicas especializadas para el sector comercio y puntos de venta.',
      details: 'Proveemos hardware y software especializado para el sector retail, desde terminales punto de venta hasta sistemas de gestión de inventarios y conectividad para sucursales, optimizando la experiencia de compra de sus clientes.',
      icon: ShoppingBag,
      color: 'from-red-500/20 to-brand-primary/20'
    },
    {
      title: 'Financiamiento y Arrendamiento',
      desc: 'Opciones flexibles para la adquisición de tecnología sin descapitalizar su empresa.',
      details: 'Facilitamos la actualización tecnológica de su organización mediante esquemas de financiamiento y arrendamiento puro. Plazos flexibles desde 30 hasta 180 días sin intereses y opciones de respaldo financiero a través de HP y Dell Financial Services.',
      icon: CreditCard,
      color: 'from-red-600/20 to-brand-primary/20'
    },
    {
      title: 'Licenciamiento Software',
      desc: 'Gestión integral de licencias empresariales para asegurar el cumplimiento y la operatividad.',
      details: 'Asesoría experta en licenciamiento de Microsoft 365, Azure, Adobe y soluciones de seguridad. Ayudamos a su empresa a optimizar costos de software y a mantenerse en cumplimiento legal con auditorías preventivas.',
      icon: FileText,
      color: 'from-red-700/20 to-brand-primary/20'
    }
  ];

  return (
    <section id="servicios" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Soluciones <span className="text-gradient">Integrales</span> de TI</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Cubrimos todo el espectro tecnológico de tu empresa con autoridad técnica y los más altos estándares de calidad.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedService(service)}
              className="glass-card p-8 rounded-2xl group cursor-pointer relative overflow-hidden border-white/5 hover:border-brand-primary/50 transition-all duration-500"
            >
              <div className={`absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>
                <div className="flex items-center gap-2 text-brand-primary text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  Saber más <ArrowRight size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-brand-dark/90 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl glass-card rounded-3xl p-8 lg:p-12 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-brand-primary" />
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 text-zinc-500 hover:text-white transition-colors"
              >
                <Zap size={24} className="rotate-45" />
              </button>
              
              <div className="w-16 h-16 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-8">
                <selectedService.icon size={32} />
              </div>
              
              <h3 className="text-3xl font-bold mb-6">{selectedService.title}</h3>
              <p className="text-zinc-300 text-lg leading-relaxed mb-8">
                {selectedService.details}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => {
                    setSelectedService(null);
                    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn-primary"
                >
                  Solicitar Cotización
                </button>
                <button 
                  onClick={() => setSelectedService(null)}
                  className="btn-outline"
                >
                  Cerrar
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

const CybersecurityFocus = () => {
  return (
    <section id="ciberseguridad" className="py-24 bg-brand-dark relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05)_0%,transparent_70%)]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="glass-card p-6 rounded-2xl border-brand-primary/20">
                  <Lock className="text-brand-primary mb-4" size={32} />
                  <h4 className="font-bold mb-2">Zero Trust</h4>
                  <p className="text-xs text-zinc-500">Arquitecturas de seguridad donde nunca se confía, siempre se verifica.</p>
                </div>
                <div className="glass-card p-6 rounded-2xl">
                  <Shield className="text-brand-secondary mb-4" size={32} />
                  <h4 className="font-bold mb-2">NGFW</h4>
                  <p className="text-xs text-zinc-500">Firewalls de última generación con inspección profunda de paquetes.</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="glass-card p-6 rounded-2xl">
                  <Zap className="text-yellow-500 mb-4" size={32} />
                  <h4 className="font-bold mb-2">Respuesta Rápida</h4>
                  <p className="text-xs text-zinc-500">Detección y mitigación de amenazas en tiempo real.</p>
                </div>
                <div className="glass-card p-6 rounded-2xl border-brand-secondary/20">
                  <BarChart3 className="text-brand-secondary mb-4" size={32} />
                  <h4 className="font-bold mb-2">Auditoría</h4>
                  <p className="text-xs text-zinc-500">Análisis de vulnerabilidades y cumplimiento normativo.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-bold uppercase tracking-widest mb-6">
              <Shield size={14} />
              Prioridad Máxima
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">No esperes a ser <span className="text-brand-primary">vulnerable</span>.</h2>
            <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
              En IB México entendemos que la ciberseguridad no es un producto, es una estrategia continua. Protegemos el activo más valioso de tu empresa: la información.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                'Protección contra Ransomware y Malware avanzado',
                'Seguridad en la Nube y entornos híbridos',
                'Consultoría experta en cumplimiento (ISO, NIST)',
                'Monitoreo proactivo de amenazas 24/7'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-zinc-300">
                  <CheckCircle2 className="text-brand-primary" size={20} />
                  {item}
                </li>
              ))}
            </ul>
            <button 
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary w-full sm:w-auto"
            >
              Solicitar Auditoría de Seguridad
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutUs = () => {
  return (
    <section id="nosotros" className="py-24 relative overflow-hidden">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Expertos en <span className="text-brand-primary">Transformación</span> Digital</h2>
            <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
              Inside Business Mexico nació con la misión de democratizar el acceso a infraestructura TI de clase mundial para empresas en crecimiento y grandes corporativos en todo el territorio nacional.
            </p>
            <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
              Con más de 15 años de experiencia acumulada, nuestro equipo de ingenieros certificados diseña soluciones que no solo resuelven problemas actuales, sino que preparan a su empresa para los retos del futuro.
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
            <div className="aspect-square rounded-3xl overflow-hidden glass-card p-2">
              <img 
                src="/equipo-ib.png" 
                alt="Equipo Inside Business Mexico" 
                className="w-full h-full object-cover rounded-2xl transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 p-8 glass-card rounded-2xl border-brand-primary/30">
              <div className="text-4xl font-bold text-brand-primary mb-1">15+</div>
              <div className="text-xs uppercase tracking-widest font-bold">Años de Confianza</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  return (
    <section id="contacto" className="py-16 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="glass-card rounded-3xl overflow-hidden border-white/10 shadow-2xl">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 lg:p-16 bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 relative">
              <div className="relative z-10">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">¿Listo para modernizar tu infraestructura?</h2>
                <p className="text-zinc-300 mb-12 text-base lg:text-lg">
                  Déjanos tus datos y un consultor experto se pondrá en contacto contigo para agendar un diagnóstico gratuito.
                </p>
                
                <div className="space-y-6 lg:space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-white/10 flex items-center justify-center text-brand-primary shrink-0">
                      <Mail size={20} className="lg:w-6 lg:h-6" />
                    </div>
                    <div>
                      <div className="font-bold text-sm lg:text-base">Email</div>
                      <div className="text-zinc-400 text-sm lg:text-base">ventas@ib-mexico.com</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-white/10 flex items-center justify-center text-brand-primary shrink-0">
                      <Phone size={20} className="lg:w-6 lg:h-6" />
                    </div>
                    <div>
                      <div className="font-bold text-sm lg:text-base">Teléfono</div>
                      <div className="text-zinc-400 text-sm lg:text-base">993 310 0951</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-white/10 flex items-center justify-center text-brand-primary shrink-0">
                      <MapPin size={20} className="lg:w-6 lg:h-6" />
                    </div>
                    <div>
                      <div className="font-bold text-sm lg:text-base">Ubicación</div>
                      <div className="text-zinc-400 text-sm lg:text-base">2A Cda. de Marcelino Cabieces 407, Col. Pino Suarez, 86168 Villahermosa, Tab.</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative background */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/20 rounded-full blur-[100px] -mr-32 -mt-32" />
            </div>
            
            <div className="p-8 lg:p-16 bg-brand-surface">
              <form className="space-y-4 lg:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] lg:text-xs font-bold uppercase tracking-widest text-zinc-500">Nombre Completo</label>
                    <input 
                      type="text" 
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 lg:py-3 focus:outline-none focus:border-brand-primary transition-colors text-sm lg:text-base"
                      placeholder="Ej. Juan Pérez"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] lg:text-xs font-bold uppercase tracking-widest text-zinc-500">Empresa</label>
                    <input 
                      type="text" 
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 lg:py-3 focus:outline-none focus:border-brand-primary transition-colors text-sm lg:text-base"
                      placeholder="Nombre de tu empresa"
                    />
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] lg:text-xs font-bold uppercase tracking-widest text-zinc-500">Correo Corporativo</label>
                    <input 
                      type="email" 
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 lg:py-3 focus:outline-none focus:border-brand-primary transition-colors text-sm lg:text-base"
                      placeholder="juan@empresa.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] lg:text-xs font-bold uppercase tracking-widest text-zinc-500">Teléfono</label>
                    <input 
                      type="tel" 
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 lg:py-3 focus:outline-none focus:border-brand-primary transition-colors text-sm lg:text-base"
                      placeholder="993 310 0951"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] lg:text-xs font-bold uppercase tracking-widest text-zinc-500">Servicio de Interés</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 lg:py-3 focus:outline-none focus:border-brand-primary transition-colors appearance-none text-sm lg:text-base">
                    <option className="bg-brand-dark">Networking Empresarial</option>
                    <option className="bg-brand-dark">Ciberseguridad Avanzada</option>
                    <option className="bg-brand-dark">Comunicaciones Unificadas</option>
                    <option className="bg-brand-dark">Help desk y Service desk</option>
                    <option className="bg-brand-dark">Desarrollo de Software y Cloud</option>
                    <option className="bg-brand-dark">Retail / Punto de Venta</option>
                    <option className="bg-brand-dark">Financiamiento / Arrendamiento</option>
                    <option className="bg-brand-dark">Licenciamiento Software</option>
                    <option className="bg-brand-dark">Otro</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] lg:text-xs font-bold uppercase tracking-widest text-zinc-500">Mensaje</label>
                  <textarea 
                    rows={3}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 lg:py-3 focus:outline-none focus:border-brand-primary transition-colors resize-none text-sm lg:text-base"
                    placeholder="Cuéntanos sobre tu proyecto..."
                  />
                </div>
                
                <button className="btn-primary w-full py-3.5 lg:py-4 text-base lg:text-lg">
                  Enviar Solicitud
                </button>
                
                <p className="text-[9px] lg:text-[10px] text-zinc-500 text-center">
                  Al enviar este formulario, aceptas nuestra política de privacidad y tratamiento de datos personales.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-dark pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <img src="/Logo_ib-mexico.png" alt="Inside Business Mexico" className="w-12 h-12 object-contain" referrerPolicy="no-referrer" />
              <span className="font-display font-bold text-xl tracking-tighter">Inside Business Mexico</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Líderes en soluciones de infraestructura TI y ciberseguridad para el sector empresarial en México. Innovación y confianza en cada proyecto.
            </p>
            <div className="flex gap-4">
              <a href="https://mx.linkedin.com/company/ib-mexico" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-brand-primary hover:text-brand-dark transition-all">
                <Linkedin size={20} />
              </a>
              <a href="https://www.facebook.com/ibmexico" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-brand-primary hover:text-brand-dark transition-all">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/ibmexico/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-brand-primary hover:text-brand-dark transition-all">
                <Instagram size={20} />
              </a>
              <a href="https://x.com/ibmexico" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-brand-primary hover:text-brand-dark transition-all">
                <Twitter size={20} />
              </a>
              <a href="https://www.tiktok.com/@ibmexico" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-brand-primary hover:text-brand-dark transition-all">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.47-.13-.09-.26-.18-.38-.28v5.44c0 2.1-.46 4.3-2.04 5.76-1.41 1.32-3.4 1.94-5.29 1.82-1.97-.11-3.92-1.11-5.01-2.75-1.1-1.65-1.26-3.75-.45-5.52.8-1.76 2.5-3.05 4.39-3.33 1.06-.15 2.15-.04 3.15.37v4.07c-.43-.21-.9-.33-1.38-.35-1.1-.05-2.23.44-2.85 1.35-.63.92-.61 2.24.06 3.12.66.87 1.81 1.25 2.85 1.01 1.04-.24 1.88-1.17 2.05-2.22.05-.27.06-.55.06-.82V.02z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-zinc-400">Empresa</h4>
            <ul className="space-y-4 text-sm text-zinc-500">
              <li><button onClick={() => scrollToSection('nosotros')} className="hover:text-brand-primary transition-colors">Sobre Nosotros</button></li>
              <li><a href="/brochure-ib-mexico.pdf" target="_blank" rel="noreferrer" className="hover:text-brand-primary transition-colors">Descargar Brochure</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Casos de Éxito</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Partners</a></li>
              <li><button onClick={() => scrollToSection('contacto')} className="hover:text-brand-primary transition-colors">Contacto</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-zinc-400">Soporte Remoto</h4>
            <p className="text-zinc-500 text-sm mb-4">Accede a asistencia técnica inmediata a través de TeamViewer.</p>
            <a 
              href="https://get.teamviewer.com/qs_corpmx" 
              target="_blank" 
              rel="noreferrer"
              className="btn-primary w-full text-sm py-2.5"
            >
              <Monitor size={18} />
              Descargar TeamViewer
            </a>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-600">
          <p>© {new Date().getFullYear()} Inside Business Mexico. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <Link to="/privacidad" className="hover:text-zinc-400 transition-colors">Aviso de Privacidad</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppButton = () => {
  return (
    <motion.a 
      href="https://wa.me/5215620013345"
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 w-12 h-12 md:w-16 md:h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl text-white hover:shadow-[0_0_20px_rgba(37,211,102,0.5)] transition-all"
    >
      <svg viewBox="0 0 24 24" className="w-7 h-7 md:w-10 md:h-10 fill-current">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </motion.a>
  );
};

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <CybersecurityFocus />
      <AboutUs />
      <ContactForm />
    </>
  );
};

export default function App() {
  return (
    <Router>
      <div className="relative">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacidad" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}
