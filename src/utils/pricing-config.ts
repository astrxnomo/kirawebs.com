export const templates = [
  {
    id: "negocio",
    label: "Para un Negocio",
    sections: ["Inicio", "Servicios", "Testimonios", "Galería", "Contacto"],
    description: "Para empresas y tiendas que buscan atraer clientes.",
    features: ["gallery", "custom_design"],
    basePrice: 120_000,
    suggested: "Empresas, tiendas, restaurantes, emprendedores",
  },
  {
    id: "persona_independiente",
    label: "Para una Persona",
    sections: ["Inicio", "Servicios", "Sobre mí", "Blog", "Contacto"],
    description: "Para profesionales que desean destacar sus servicios.",
    features: ["forms", "blog"],
    basePrice: 130_000,
    suggested: "Creadores de contenido, abogados, ingenieros",
  },
  {
    id: "evento",
    label: "Para un Evento",
    sections: [
      "Inicio",
      "Información",
      "Programa",
      "Registro",
      "Galería",
      "Contacto",
    ],
    description: "Para eventos que necesitan promoción y gestión.",
    features: ["forms", "social_media_integration", "gallery"],
    basePrice: 160_000,
    suggested: "Fiestas, conferencias, seminarios, reuniones",
  },
]

export const features = [
  {
    id: "forms",
    label: "Formularios",
    description:
      "Permite a los visitantes enviar mensajes directamente desde el sitio.",
    price: 100_000,
  },
  {
    id: "gallery",
    label: "Galería de Imágenes y Videos",
    description: "Muestra imágenes y videos de manera atractiva.",
    price: 50_000,
  },
  {
    id: "blog",
    label: "Blog Integrado",
    description: "Publica artículos y noticias para atraer a tu audiencia.",
    price: 100_000,
  },
  {
    id: "social_media_integration",
    label: "Integración con Redes Sociales",
    description: "Conecta tu sitio con tus perfiles de redes sociales.",
    price: 50_000,
  },
  {
    id: "multi_language",
    label: "Soporte para Múltiples Idiomas",
    description: "Permite a los usuarios ver el sitio en diferentes idiomas.",
    price: 100_000,
  },
  {
    id: "custom_design",
    label: "Diseño Personalizado",
    description:
      "Ofrece un diseño único adaptado a las necesidades del cliente.",
    price: 250_000,
  },
]

export const services = [
  {
    id: "mantenimiento",
    label: "Mantenimiento y Soporte",
    description:
      "Servicio mensual que incluye actualizaciones, backups y soporte técnico.",
    price: 200_000,
  },
  {
    id: "seo",
    label: "Optimización SEO Avanzada",
    description:
      "Mejora el posicionamiento de tu sitio en los motores de búsqueda.",
    price: 50_000,
  },
  {
    id: "hosting",
    label: "Hosting Premium",
    description: "Alojamiento web de alta velocidad y seguridad mejorada.",
    price: 50_000,
  },
  {
    id: "dominio",
    label: "Registro de Dominio",
    description: "Registro y configuración de un dominio personalizado.",
    price: 30_000,
  },
  {
    id: "consultoria",
    label: "Consultoría Técnica",
    description:
      "Asesoramiento especializado para optimizar tu presencia en línea.",
    price: 100_000,
  },
]
