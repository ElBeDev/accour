export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'ACCOUR Pintura Electrostática',
    image: '/logo.png',
    '@id': process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    telephone: process.env.NEXT_PUBLIC_PHONE || '',
    email: process.env.NEXT_PUBLIC_EMAIL || '',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Morelos Sur No. 81, San Pedro Ahuacatlán',
      addressLocality: 'San Juan del Río',
      addressRegion: 'Querétaro',
      postalCode: '76810',
      addressCountry: 'MX',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 20.3881,
      longitude: -99.9964,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '14:00',
      },
    ],
    priceRange: '$$',
    description: 'Especialistas en pintura electrostática y recubrimientos en polvo industrial. Alta calidad, durabilidad y resistencia.',
  };
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ACCOUR',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/logo.png`,
    description: 'Empresa líder en servicios de pintura electrostática y recubrimientos industriales en polvo.',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: process.env.NEXT_PUBLIC_PHONE || '',
      contactType: 'customer service',
      email: process.env.NEXT_PUBLIC_EMAIL || '',
      availableLanguage: 'Spanish',
    },
    sameAs: [
      // Agregar redes sociales cuando estén disponibles
    ],
  };
}

export function generateServiceSchema(service: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'LocalBusiness',
      name: 'ACCOUR',
    },
    areaServed: {
      '@type': 'Country',
      name: 'México',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios de Pintura Electrostática',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: service.name,
            description: service.description,
          },
        },
      ],
    },
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
