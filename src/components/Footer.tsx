import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Facebook, Instagram, Twitter, Monitor } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-brand-dark pt-20 pb-10 border-t border-white/5 relative z-10 animate-fade-in">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="space-y-6">
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-zinc-400">Síguenos</h4>
            <div className="flex flex-wrap gap-4">
              <a href="https://mx.linkedin.com/company/ib-mexico" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-brand-primary hover:text-brand-dark hover:scale-105 transition-all">
                <Linkedin size={20} />
              </a>
              <a href="https://www.facebook.com/ibmexico" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-brand-primary hover:text-brand-dark hover:scale-105 transition-all">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/ibmexico/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-brand-primary hover:text-brand-dark hover:scale-105 transition-all">
                <Instagram size={20} />
              </a>
              <a href="https://x.com/ibmexico" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-brand-primary hover:text-brand-dark hover:scale-105 transition-all">
                <Twitter size={20} />
              </a>
              <a href="https://www.tiktok.com/@ibmexico" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-brand-primary hover:text-brand-dark hover:scale-105 transition-all">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.47-.13-.09-.26-.18-.38-.28v5.44c0 2.1-.46 4.3-2.04 5.76-1.41 1.32-3.4 1.94-5.29 1.82-1.97-.11-3.92-1.11-5.01-2.75-1.1-1.65-1.26-3.75-.45-5.52.8-1.76 2.5-3.05 4.39-3.33 1.06-.15 2.15-.04 3.15.37v4.07c-.43-.21-.9-.33-1.38-.35-1.1-.05-2.23.44-2.85 1.35-.63.92-.61 2.24.06 3.12.66.87 1.81 1.25 2.85 1.01 1.04-.24 1.88-1.17 2.05-2.22.05-.27.06-.55.06-.82V.02z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-zinc-400">Servicios Principales</h4>
            <ul className="space-y-4 text-sm text-zinc-500">
              <li><Link to="/servicios/networking-y-conectividad" className="hover:text-brand-primary transition-colors cursor-pointer">Networking</Link></li>
              <li><Link to="/servicios/ciberseguridad-empresarial" className="hover:text-brand-primary transition-colors cursor-pointer">Ciberseguridad</Link></li>
              <li><Link to="/servicios/help-desk-y-service-desk" className="hover:text-brand-primary transition-colors cursor-pointer">Help desk y Service desk</Link></li>
              <li><Link to="/servicios/comunicaciones-unificadas" className="hover:text-brand-primary transition-colors cursor-pointer">Comunicaciones unificadas</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-zinc-400">Soporte Remoto</h4>
            <p className="text-zinc-500 text-sm mb-4">Accede a asistencia técnica inmediata a través de TeamViewer.</p>
            <a 
              href="https://get.teamviewer.com/qs_corpmx" 
              target="_blank" 
              rel="noreferrer"
              className="btn-primary w-full text-sm py-2.5 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Monitor size={18} />
              Descargar TeamViewer
            </a>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-600">
          <p>© {new Date().getFullYear()} Inside Business Mexico. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <Link to="/privacidad" className="hover:text-zinc-400 transition-colors cursor-pointer">Aviso de Privacidad</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
