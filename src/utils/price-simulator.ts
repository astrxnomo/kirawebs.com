import { type SimulationPriceFormData } from "@/components/home/price-simulator/price-simulator-provider"

import { features, services, templates } from "./pricing-config"

export const calculatePrice = (formData: SimulationPriceFormData) => {
  let price = 100_000

  const template = templates.find((t) => t.id === formData.template)
  if (template) {
    price += template.basePrice
  }

  if (formData.sections && Array.isArray(formData.sections)) {
    price += formData.sections.length * 100
  }

  formData.features.forEach((feature) => {
    const foundFeature = features.find((f) => f.id === feature.id)
    if (foundFeature) {
      price += foundFeature.price
    }
  })

  price -= formData.plazo * 800

  services.forEach((service) => {
    if (formData[service.id]) {
      price += service.price
    }
  })

  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)
}
