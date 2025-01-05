export const templates = [
  {
    id: 'sencilla',
    label: 'Sencilla',
    sections: [],
    description: 'Ideal para sitios web simples y directos',
    recommendedFeatures: [],
    basePrice: 100_000,
  },
  {
    id: 'emprendedor',
    label: 'Emprendedor',
    sections: ['Acerca de', 'Servicios', 'Contacto'],
    description: 'Ideal para pequeños negocios y emprendimientos',
    recommendedFeatures: ['Formulario de contacto', 'Integración con redes sociales'],
    basePrice: 300_000,
  },
  {
    id: 'corporativo',
    label: 'Corporativo',
    sections: ['Historia', 'Servicios', 'Contacto'],
    description: 'Ideal para empresas y corporaciones',
    recommendedFeatures: ['Formulario de contacto', 'Galería de imágenes', 'Blog integrado'],
    basePrice: 400_000,
  },
  {
    id: 'blog',
    label: 'Blog',
    sections: ['Acerca de', 'Contacto'],
    description: 'Ideal para bloggers y creadores de contenido',
    recommendedFeatures: [
      'Blog integrado',
      'Sistema de búsqueda avanzado',
      'Integración con redes sociales',
    ],
    basePrice: 200_000,
  },
  {
    id: 'personal',
    label: 'Personal',
    sections: ['Servicios', 'Proyectos', 'Acerca de', 'Contacto'],
    description: 'Ideal para portafolios personales y freelancers',
    recommendedFeatures: ['Galería de imágenes', 'Formulario de contacto'],
    basePrice: 150_000,
  },
  {
    id: 'tienda',
    label: 'Tienda',
    sections: ['Inicio', 'Productos', 'Contacto'],
    description: 'Ideal para tiendas en línea y e-commerce',
    recommendedFeatures: ['Carrito de compras', 'Sistema de búsqueda avanzado', 'Chat en vivo'],
    basePrice: 500_000,
  },
];

export const additionalServices = [
  {
    id: 'mantenimiento',
    label: 'Mantenimiento mensual',
    tooltip: 'Incluye actualizaciones y soporte técnico',
    price: 200,
  },
  {
    id: 'seo',
    label: 'Optimización SEO',
    tooltip: 'Mejora la visibilidad de tu sitio en los motores de búsqueda',
    price: 400,
  },
  {
    id: 'hosting',
    label: 'Hosting incluido',
    tooltip: 'Alojamiento web de alta velocidad y confiable',
    price: 150,
  },
  {
    id: 'dominio',
    label: 'Dominio personalizado',
    tooltip: 'Registro y configuración de tu dominio propio',
    price: 50,
  },
  {
    id: 'integracionExterna',
    label: 'Integración con sistemas externos',
    tooltip: 'Conecta tu sitio con CRM, ERP u otras plataformas',
    price: 600,
  },
];

export const features = [
  { id: 'Formulario de contacto', label: 'Formulario de contacto', price: 150 },
  { id: 'Galería de imágenes', label: 'Galería de imágenes', price: 200 },
  { id: 'Blog integrado', label: 'Blog integrado', price: 350 },
  {
    id: 'Integración con redes sociales',
    label: 'Integración con redes sociales',
    price: 250,
  },
  { id: 'Sistema de reservas', label: 'Sistema de reservas', price: 500 },
  { id: 'Chat en vivo', label: 'Chat en vivo', price: 400 },
  { id: 'Área de clientes', label: 'Área de clientes', price: 600 },
  { id: 'Multiidioma', label: 'Multiidioma', price: 450 },
  { id: 'Carrito de compras', label: 'Carrito de compras', price: 700 },
  {
    id: 'Sistema de búsqueda avanzado',
    label: 'Sistema de búsqueda avanzado',
    price: 350,
  },
];
