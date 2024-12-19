import { additionalServices, features, templates } from './pricing-config';

interface FormData {
  template: string;
  paginas?: string[];
  recommendedFeatures: string[];
  [key: string]: any;
}

export const calculatePrice = (formData: FormData) => {
  let price = 1_000_000;

  // Tipo de sitio
  const template = templates.find(t => t.id === formData.template);
  if (template) {
    price += template.basePrice;
  }

  // Número de páginas
  if (formData.paginas && Array.isArray(formData.paginas)) {
    price += formData.paginas.length * 100;
  }

  // Funcionalidades adicionales
  formData.recommendedFeatures.forEach((function_: string) => {
    const feature = features.find(f => f.id === function_);
    if (feature) {
      price += feature.price;
    }
  });

  // Servicios adicionales
  additionalServices.forEach(service => {
    if (formData[service.id]) {
      price += service.price;
    }
  });

  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};
