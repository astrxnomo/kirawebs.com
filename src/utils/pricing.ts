export const calcularPrecio = (formData: any) => {
  let precioBase = 500;

  // Tipo de sitio
  switch (formData.webTemplate) {
    case 'landing': {
      precioBase += 300;
      break;
    }
    case 'corporativo': {
      precioBase += 800;
      break;
    }
    case 'blog': {
      precioBase += 600;
      break;
    }
    case 'ecommerce': {
      precioBase += 1500;
      break;
    }
    case 'portfolio': {
      precioBase += 700;
      break;
    }
  }

  // Número de páginas
  if (formData.paginas && Array.isArray(formData.paginas)) {
    precioBase += formData.paginas.length * 100;
  }

  // Diseño personalizado
  if (formData.disenoPersonalizado) precioBase += 800;

  // Funcionalidades adicionales
  formData.recommendedFeatures.forEach((function_: string) => {
    switch (function_) {
      case 'Formulario de contacto': {
        precioBase += 150;
        break;
      }
      case 'Galería de imágenes': {
        precioBase += 200;
        break;
      }
      case 'Blog integrado': {
        precioBase += 350;
        break;
      }
      case 'Integración con redes sociales': {
        precioBase += 250;
        break;
      }
      case 'Sistema de reservas': {
        precioBase += 500;
        break;
      }
      case 'Chat en vivo': {
        precioBase += 400;
        break;
      }
      case 'Área de clientes': {
        precioBase += 600;
        break;
      }
      case 'Multiidioma': {
        precioBase += 450;
        break;
      }
      case 'Carrito de compras': {
        precioBase += 700;
        break;
      }
      case 'Sistema de búsqueda avanzado': {
        precioBase += 350;
        break;
      }
    }
  });

  // Plazo de entrega
  if (formData.plazo < 30) precioBase += 500;
  else if (formData.plazo < 60) precioBase += 300;

  // Mantenimiento
  if (formData.mantenimiento) precioBase += 200;

  // SEO
  if (formData.seo) precioBase += 400;

  // Hosting
  if (formData.hosting) precioBase += 150;

  // Dominio personalizado
  if (formData.dominio) precioBase += 50;

  // Integración con sistemas externos
  if (formData.integracionExterna) precioBase += 600;

  return precioBase;
};

export const templates = {
  sencilla: {
    sections: [],
    description: 'Ideal para sitios web simples y directos',
    recommendedFeatures: [],
  },
  emprendimiento: {
    sections: ['Acerca de', 'Servicios', 'Contacto'],
    description: 'Ideal para pequeños negocios y emprendimientos',
    recommendedFeatures: [
      'Formulario de contacto',
      'Integración con redes sociales',
    ],
  },
  corporativo: {
    sections: ['Historia', 'Servicios', 'Contacto'],
    description: 'Ideal para empresas y corporaciones',
    recommendedFeatures: [
      'Formulario de contacto',
      'Galería de imágenes',
      'Blog integrado',
    ],
  },
  blog: {
    sections: ['Acerca de', 'Contacto'],
    description: 'Ideal para bloggers y creadores de contenido',
    recommendedFeatures: [
      'Blog integrado',
      'Sistema de búsqueda avanzado',
      'Integración con redes sociales',
    ],
  },
  personal: {
    sections: ['Servicios', 'Proyectos', 'Acerca de', 'Contacto'],
    description: 'Ideal para portafolios personales y freelancers',
    recommendedFeatures: ['Galería de imágenes', 'Formulario de contacto'],
  },
  ninguna: {
    sections: [],
    description: 'Ideal si quieres un sitio web completamente personalizado',
    recommendedFeatures: [],
  },
};
