import { Code2, Smartphone, Wrench } from "lucide-react"

import Container from "@/components/home/container"
import { Card } from "@/components/ui/card"

const data = {
  id: "servicios",
  title: "Nuestros servicios",
  description:
    "Estamos aquí para ayudarte a hacer realidad tu próximo proyecto",
  services: [
    {
      icon: <Code2 className="size-8 text-primary" />,
      title: "Desarrollo de Páginas Web",
      description:
        "Sitios web únicos y a medida que reflejan la identidad de tu marca.",
    },
    {
      icon: <Wrench className="size-8 text-primary" />,
      title: "Mantenimiento & Optimización",
      description:
        "Soporte continuo para mantener tu sitio actualizado y seguro.",
    },
    {
      icon: <Smartphone className="size-8 text-primary" />,
      title: "Asesoría Técnica",
      description: "Consultoría para mejorar y optimizar tu presencia online.",
    },
  ],
}

export function ServicesSection() {
  return (
    <Container id={data.id} title={data.title} description={data.description}>
      <div className="grid gap-6 lg:grid-cols-3">
        {data.services.map((service, index) => (
          <Card key={index} className="h-full p-6">
            <div className="mb-4">{service.icon}</div>
            <h3 className="mb-2 font-bold">{service.title}</h3>
            <p className="text-sm text-muted-foreground">
              {service.description}
            </p>
          </Card>
        ))}
      </div>
    </Container>
  )
}
