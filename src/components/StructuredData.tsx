import React from 'react';

export const StructuredData = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Inside Business Mexico",
    "image": "https://ib-mexico.com/Logo_ib-mexico.png",
    "@id": "https://ib-mexico.com",
    "url": "https://ib-mexico.com",
    "telephone": "+529933100951",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2A Cda. de Marcelino Cabieces 407, Col. Pino Suarez",
      "addressLocality": "México",
      "addressRegion": "México",
      "postalCode": "86168",
      "addressCountry": "MX"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 17.9894,
      "longitude": -92.9248
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.facebook.com/ibmexico",
      "https://mx.linkedin.com/company/ib-mexico",
      "https://www.instagram.com/ibmexico/"
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "itemOffered": ["Ciberseguridad", "Redes", "Soporte Técnico"],
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 17.9894,
        "longitude": -92.9248
      },
      "geoRadius": "500000"
    }
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
};
