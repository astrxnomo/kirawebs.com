import { additionalServices, features, templates } from "./pricing-config"

interface FormData {
  template: string
  sections?: string[]
  recommendedFeatures: string[]
  plazo: number
  mantenimiento: boolean
  seo: boolean
  hosting: boolean
  dominio: boolean
  integracionExterna: boolean
  email: string
  descripcion: string
  [key: string]: unknown
}

export const calculatePrice = (formData: FormData) => {
  let price = 1_000_000

  const template = templates.find((t) => t.id === formData.template)
  if (template) {
    price += template.basePrice
  }

  if (formData.sections && Array.isArray(formData.sections)) {
    price += formData.sections.length * 100
  }

  formData.recommendedFeatures.forEach((function_: string) => {
    const feature = features.find((f) => f.id === function_)
    if (feature) {
      price += feature.price
    }
  })

  // Servicios adicionales
  additionalServices.forEach((service) => {
    if (formData[service.id]) {
      price += service.price
    }
  })

  // Considerar el plazo
  price += formData.plazo * 50

  // Considerar servicios adicionales específicos
  if (formData.mantenimiento) {
    price += 200_000
  }
  if (formData.seo) {
    price += 150_000
  }
  if (formData.hosting) {
    price += 100_000
  }
  if (formData.dominio) {
    price += 50_000
  }
  if (formData.integracionExterna) {
    price += 300_000
  }

  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)
}
