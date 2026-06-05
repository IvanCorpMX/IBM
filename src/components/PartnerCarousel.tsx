import React from 'react';

export const PartnerCarousel = () => {
  // Sin backend, debemos definir los nombres de los archivos manualmente aquí.
  // Simplemente añade o quita nombres de esta lista según los archivos .png que subas a /public/partners/
  const partnerLogos = [
    'manageengine.png',
    'nordpass.png'
  ];

  const partners = partnerLogos.map(logo => ({
    name: logo.split('.')[0],
    logo: `/partners/${logo}`
  }));

  return (
    <div className="mt-8 lg:mt-12 overflow-hidden relative">
      <div className="flex items-center gap-6 mb-4">
        <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 whitespace-nowrap">Partners Certificados</span>
        <div className="h-px bg-white/10 w-full" />
      </div>
      <div className="flex gap-12 items-center animate-marquee whitespace-nowrap py-4">
        {[...partners, ...partners, ...partners].map((partner, i) => (
          <div key={i} className="flex items-center gap-2 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 min-w-[100px] justify-center">
            <img 
              src={partner.logo} 
              alt={`Partner certificado ${partner.name} - Inside Business Mexico`} 
              className="h-12 lg:h-16 w-auto object-contain"
              loading="lazy"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                if (target.dataset.failed) return;
                target.dataset.failed = "true";
                target.style.display = 'none';
                const span = document.createElement('span');
                span.className = "font-display font-black text-lg lg:text-xl italic uppercase text-zinc-500/50";
                span.innerText = partner.name;
                target.parentNode?.appendChild(span);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
