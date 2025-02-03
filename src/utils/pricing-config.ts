export const templates = [
  {
    id: "sencilla",
    label: "Sencilla",
    sections: [],
    description: "Ideal para sitios web simples y directos",
    recommendedFeatures: [],
    basePrice: 100_000,
  },
  {
    id: "emprendedor",
    label: "Emprendedor",
    sections: ["Acerca de", "Servicios", "Contacto"],
    description: "Ideal para pequeños negocios y emprendimientos",
    recommendedFeatures: [
      "Formulario de contacto",
      "Integración con redes sociales",
    ],
    basePrice: 200_000,
  },
  {
    id: "corporativo",
    label: "Corporativo",
    sections: ["Historia", "Servicios", "Contacto"],
    description: "Ideal para empresas y corporaciones",
    recommendedFeatures: [
      "Formulario de contacto",
      "Galería de imágenes",
      "Blog integrado",
    ],
    basePrice: 250_000,
  },
  {
    id: "blog",
    label: "Blog",
    sections: ["Acerca de", "Contacto"],
    description: "Ideal para bloggers y creadores de contenido",
    recommendedFeatures: [
      "Blog integrado",
      "Sistema de búsqueda avanzado",
      "Integración con redes sociales",
    ],
    basePrice: 300_000,
  },
  {
    id: "personal",
    label: "Personal",
    sections: ["Servicios", "Proyectos", "Acerca de", "Contacto"],
    description: "Ideal para portafolios personales y freelancers",
    recommendedFeatures: ["Galería de imágenes", "Formulario de contacto"],
    basePrice: 150_000,
  },
  // {
  //   id: "tienda",
  //   label: "Tienda",
  //   sections: ["Inicio", "Productos", "Contacto"],
  //   description: "Ideal para tiendas en línea y e-commerce",
  //   recommendedFeatures: [
  //     "Carrito de compras",
  //     "Sistema de búsqueda avanzado",
  //     "Chat en vivo",
  //   ],
  //   basePrice: 500_000,
  // },
]

export const additionalServices = [
  {
    id: "mantenimiento",
    label: "Mantenimiento mensual",
    tooltip: "Incluye actualizaciones y soporte técnico",
    price: 0,
  },
  {
    id: "seo",
    label: "Optimización SEO",
    tooltip: "Mejora la visibilidad de tu sitio en los motores de búsqueda",
    price: 50_000,
  },
  {
    id: "hosting",
    label: "Hosting incluido",
    tooltip: "Alojamiento web de alta velocidad y confiable",
    price: 150,
  },
  {
    id: "dominio",
    label: "Dominio personalizado",
    tooltip: "Registro y configuración de tu dominio propio",
    price: 0,
  },
]

export const features = [
  {
    id: "Formulario de contacto",
    label: "Formulario de contacto",
    price: 50_000,
  },
  { id: "Galería de imágenes", label: "Galería de imágenes", price: 10_000 },
  { id: "Blog integrado", label: "Blog integrado", price: 120_000 },
  {
    id: "Integración con redes sociales",
    label: "Integración con redes sociales",
    price: 50_000,
  },
  { id: "Multiidioma", label: "Multiidioma", price: 450 },
]
