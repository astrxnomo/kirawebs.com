export const templates = [
  {
    id: "basico",
    label: "Básico",
    sections: ["Inicio", "Acerca de", "Servicios", "Productos", "Contacto"],
    description:
      "Perfecto para todo tipo de negocios que buscan una presencia en línea simple y efectiva.",
    recommendedFeatures: [
      "Formulario de Contacto",
      "Galería de Imágenes y Videos",
      "Integración con Redes Sociales",
    ],
    basePrice: 100_000,
  },
  {
    id: "emprendedor",
    label: "Emprendedor",
    sections: ["Inicio", "Acerca de", "Servicios", "Contacto"],
    description:
      "Diseñado para pequeños negocios y emprendedores que buscan destacar sus servicios y conectarse con sus clientes.",
    recommendedFeatures: [
      "Formulario de Contacto",
      "Integración con Redes Sociales",
      "Galería de Imágenes y Videos",
    ],
    basePrice: 100_000,
  },
  {
    id: "corporativo",
    label: "Corporativo",
    sections: ["Inicio", "Historia", "Servicios", "Equipo", "Contacto"],
    description:
      "Ideal para empresas que necesitan un sitio web profesional para presentar su historia, servicios y equipo.",
    recommendedFeatures: [
      "Blog Integrado",
      "Galería de Imágenes y Videos",
      "Formulario de Contacto",
      "Optimización SEO Avanzada",
    ],
    basePrice: 150_000,
  },
  {
    id: "blog",
    label: "Blog",
    sections: ["Inicio", "Acerca de", "Blog", "Contacto"],
    description:
      "Especialmente diseñado para bloggers y creadores de contenido que desean compartir sus ideas y conectar con su audiencia.",
    recommendedFeatures: [
      "Blog Integrado",
      "Integración con Redes Sociales",
      "Chat en Vivo",
      "Optimización SEO Avanzada",
    ],
    basePrice: 200_000,
  },
  {
    id: "portafolio",
    label: "Portafolio",
    sections: ["Inicio", "Experiencia", "Proyectos", "Testimonios", "Contacto"],
    description:
      "Perfecto para profesionales creativos que desean mostrar su trabajo y atraer nuevos clientes.",
    recommendedFeatures: [
      "Galería de Imágenes y Videos",
      "Formulario de Contacto",
      "Diseño Personalizado",
      "Integración con Redes Sociales",
    ],
    basePrice: 100_000,
  },
  {
    id: "evento",
    label: "Evento",
    sections: ["Inicio", "Información", "Programa", "Registro", "Contacto"],
    description:
      "Diseñado para eventos y conferencias que necesitan una plataforma para promocionar su evento y gestionar inscripciones.",
    recommendedFeatures: [
      "Formulario de Contacto",
      "Galería de Imágenes y Videos",
      "Integración con Redes Sociales",
      "Optimización SEO Avanzada",
    ],
    basePrice: 150_000,
  },
]

export const services = [
  {
    id: "mantenimiento",
    label: "Mantenimiento y Soporte",
    description:
      "Servicio mensual que incluye actualizaciones, backups y soporte técnico para mantener tu sitio funcionando sin problemas.",
    price: 200_000, // Precio mensual en COP
  },
  {
    id: "seo",
    label: "Optimización SEO Avanzada",
    description:
      "Mejora el posicionamiento de tu sitio en los motores de búsqueda para atraer más tráfico orgánico.",
    price: 50_000, // Precio único en COP
  },
  {
    id: "hosting",
    label: "Hosting Premium",
    description:
      "Alojamiento web de alta velocidad, seguridad mejorada y soporte 24/7 para garantizar el máximo rendimiento.",
    price: 50_000,
  },
  {
    id: "dominio",
    label: "Registro de Dominio",
    description:
      "Registro y configuración de un dominio personalizado para tu sitio web.",
    price: 30_000,
  },
]

export const features = [
  {
    id: "Formulario de Contacto",
    price: 100_000,
  },
  {
    id: "Galería de Imágenes y Videos",
    price: 50_000,
  },
  {
    id: "Blog Integrado",
    price: 100_000,
  },
  {
    id: "Integración con Redes Sociales",
    price: 500_000,
  },
  {
    id: "Soporte para Múltiples Idiomas",
    price: 100_000,
  },
]
