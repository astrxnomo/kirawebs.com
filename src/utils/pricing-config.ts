export const templates = [
  {
    id: "basico",
    label: "Básico",
    sections: ["Inicio", "Acerca de", "Servicios", "Productos", "Contacto"],
    description:
      "Perfecto para todo tipo de negocios que buscan una presencia en línea simple y efectiva.",
    features: ["contact_form", "gallery", "social_media_integration"],
    basePrice: 100_000,
  },
  {
    id: "emprendedor",
    label: "Emprendedor",
    sections: ["Inicio", "Acerca de", "Servicios", "Contacto"],
    description:
      "Diseñado para pequeños negocios y emprendedores que buscan destacar sus servicios y conectarse con sus clientes.",
    features: ["contact_form", "social_media_integration", "gallery"],
    basePrice: 100_000,
  },
  {
    id: "corporativo",
    label: "Corporativo",
    sections: ["Inicio", "Historia", "Servicios", "Equipo", "Contacto"],
    description:
      "Ideal para empresas que necesitan un sitio web profesional para presentar su historia, servicios y equipo.",
    features: ["blog", "gallery", "contact_form", "seo_optimization"],
    basePrice: 150_000,
  },
  {
    id: "blog",
    label: "Blog",
    sections: ["Inicio", "Acerca de", "Blog", "Contacto"],
    description:
      "Especialmente diseñado para bloggers y creadores de contenido que desean compartir sus ideas y conectar con su audiencia.",
    features: [
      "blog",
      "social_media_integration",
      "live_chat",
      "seo_optimization",
    ],
    basePrice: 200_000,
  },
  {
    id: "portafolio",
    label: "Portafolio",
    sections: ["Inicio", "Experiencia", "Proyectos", "Testimonios", "Contacto"],
    description:
      "Perfecto para profesionales creativos que desean mostrar su trabajo y atraer nuevos clientes.",
    features: [
      "gallery",
      "contact_form",
      "custom_design",
      "social_media_integration",
    ],
    basePrice: 100_000,
  },
  {
    id: "evento",
    label: "Evento",
    sections: ["Inicio", "Información", "Programa", "Registro", "Contacto"],
    description:
      "Diseñado para eventos y conferencias que necesitan una plataforma para promocionar su evento y gestionar inscripciones.",
    features: [
      "contact_form",
      "gallery",
      "social_media_integration",
      "seo_optimization",
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
    price: 200_000,
  },
  {
    id: "seo",
    label: "Optimización SEO Avanzada",
    description:
      "Mejora el posicionamiento de tu sitio en los motores de búsqueda para atraer más tráfico orgánico.",
    price: 50_000,
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
    id: "contact_form",
    label: "Formulario de Contacto",
    price: 100_000,
  },
  {
    id: "gallery",
    label: "Galería de Imágenes y Videos",
    price: 50_000,
  },
  {
    id: "blog",
    label: "Blog Integrado",
    price: 100_000,
  },
  {
    id: "social_media_integration",
    label: "Integración con Redes Sociales",
    price: 50_000,
  },
  {
    id: "multi_language_support",
    label: "Soporte para Múltiples Idiomas",
    price: 100_000,
  },
]
