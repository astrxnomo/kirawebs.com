import { additionalServices, features, templates } from './pricing-config';

interface FormData {
  template: string;
  paginas?: string[];
  recommendedFeatures: string[];
  [key: string]: any;
}

export const calcularPrecio = (formData: FormData) => {
  let precioBase = 100_000;

  // Tipo de sitio
  const template = templates.find(t => t.id === formData.template);
  if (template) {
    precioBase += template.basePrice;
  }

  // Número de páginas
  if (formData.paginas && Array.isArray(formData.paginas)) {
    precioBase += formData.paginas.length * 100;
  }

  // Funcionalidades adicionales
  formData.recommendedFeatures.forEach((function_: string) => {
    const feature = features.find(f => f.id === function_);
    if (feature) {
      precioBase += feature.price;
    }
  });

  // Servicios adicionales
  additionalServices.forEach(service => {
    if (formData[service.id]) {
      precioBase += service.price;
    }
  });

  return precioBase;
};
