/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

// Páginas
import PrivacyPolicy from './pages/PrivacyPolicy';
import ServiceDetail from './pages/ServiceDetail';

// Componentes modulares
import { StructuredData } from './components/StructuredData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IsoCertification } from './components/IsoCertification';
import { Services } from './components/Services';
import { XaasSection } from './components/XaasSection';
import { CybersecurityFocus } from './components/CybersecurityFocus';
import { AboutUs } from './components/AboutUs';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

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
      <Helmet>
        <title>Infraestructura TI y Ciberseguridad Industrial | IB Mexico</title>
        <meta name="description" content="Expertos en infraestructura TI y ciberseguridad industrial. Soluciones tecnológicas de alto rendimiento en todo México." />
        <meta name="geo.region" content="MX-TAB" />
        <meta name="geo.placename" content="Villahermosa" />
        <meta name="geo.position" content="17.9892;-92.9475" />
        <meta name="author" content="Inside Business Mexico" />
        <meta name="category" content="Tecnología e Infraestructura TI" />
        <link rel="canonical" href="https://www.ib-mexico.com/" />
      </Helmet>
      <Hero />
      <IsoCertification />
      <Services />
      <XaasSection />
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
        <StructuredData />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacidad" element={<PrivacyPolicy />} />
          <Route path="/servicios/:slug" element={<ServiceDetail />} />
          <Route path="/contacto" element={<Navigate to="/#contacto" replace />} />
          <Route path="/nosotros" element={<Navigate to="/#nosotros" replace />} />
          <Route path="/servicios" element={<Navigate to="/#servicios" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}
