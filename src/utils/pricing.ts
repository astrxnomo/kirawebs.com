export const calcularPrecio = (formData: any) => {
  let precioBase = 500;

  // Tipo de sitio
  switch (formData.tipoSitio) {
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
  precioBase += formData.paginas.length * 100;

  // Diseño personalizado
  if (formData.disenoPersonalizado) precioBase += 800;

  // Funcionalidades adicionales
  formData.funcionalidades.forEach((function_: string) => {
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

export const paginasRecomendadas = {
  landing: ['Inicio'],
  corporativo: ['Inicio', 'Nosotros', 'Servicios', 'Contacto'],
  blog: ['Inicio', 'Blog', 'Acerca de', 'Contacto'],
  ecommerce: ['Inicio', 'Productos', 'Carrito', 'Cuenta', 'Contacto'],
  portfolio: ['Inicio', 'Proyectos', 'Acerca de', 'Contacto'],
};

export const funcionalidadesRecomendadas = {
  landing: ['Formulario de contacto', 'Integración con redes sociales'],
  corporativo: [
    'Formulario de contacto',
    'Galería de imágenes',
    'Blog integrado',
  ],
  blog: [
    'Blog integrado',
    'Sistema de búsqueda avanzado',
    'Integración con redes sociales',
  ],
  ecommerce: [
    'Carrito de compras',
    'Sistema de búsqueda avanzado',
    'Área de clientes',
  ],
  portfolio: ['Galería de imágenes', 'Formulario de contacto'],
};
