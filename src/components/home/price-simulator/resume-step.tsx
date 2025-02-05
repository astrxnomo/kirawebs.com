import { Info, Mail } from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { calculatePrice } from "@/utils/price-simulator"

import { usePriceSimulator } from "./price-simulator-provider"

export function ResumeStep() {
  const { formData, updateFormData } = usePriceSimulator()

  const summaryItems = [
    {
      label: "Tipo de sitio",
      value:
        formData.template.charAt(0).toLocaleUpperCase() +
          formData.template.slice(1) || "No seleccionado",
    },
    {
      label: "Secciones",
      value: formData.sections.join(", ") || "No seleccionadas",
    },
    {
      label: "Funcionalidades",
      value: Array.isArray(formData.features)
        ? formData.features
            .map((feature: { label: string }) => feature.label)
            .join(", ")
        : "Ninguna",
    },
    { label: "Plazo de entrega", value: `${formData.plazo} días` },
  ]

  const additionalServices = [
    {
      label: "Mantenimiento mensual",
      value: formData.mantenimiento ? "Sí" : "No",
    },
    { label: "Optimización SEO", value: formData.seo ? "Sí" : "No" },
    { label: "Hosting incluido", value: formData.hosting ? "Sí" : "No" },
    { label: "Dominio personalizado", value: formData.dominio ? "Sí" : "No" },
    {
      label: "Integración con sistemas externos",
      value: formData.integracionExterna ? "Sí" : "No",
    },
  ]
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="email">
          Correo Electrónico <span className="text-destructive">*</span>
        </Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(event) => updateFormData("email", event.target.value)}
          placeholder="Ingresa tu correo electrónico"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="descripcion">
          Comentario adicional{" "}
          <span className="text-xs text-muted-foreground">(Opcional)</span>
        </Label>
        <Textarea
          id="descripcion"
          value={formData.descripcion}
          onChange={(event) =>
            updateFormData("descripcion", event.target.value)
          }
          placeholder="Cuéntanos más sobre tu proyecto..."
        />
      </div>

      <Card className="w-full border-2 border-primary bg-accent/50 p-8">
        <h3 className="text-lg font-bold">Resumen del Proyecto</h3>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-sm">
              Detalles del proyecto
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-2 text-xs">
                {summaryItems.map((item) => (
                  <li key={item.label} className="flex justify-between">
                    <span>{item.label}:</span>
                    <span className="text-right font-medium text-muted-foreground">
                      {Array.isArray(item.value)
                        ? item.value.map(String).join(", ")
                        : item.value}
                    </span>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-sm">
              Servicios adicionales
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-2 text-xs">
                {additionalServices.map((service) => (
                  <li key={service.label} className="flex justify-between">
                    <span>{service.label}:</span>
                    <span className="text-right font-medium text-muted-foreground">
                      {Array.isArray(service.value)
                        ? service.value.join(", ") || "Ninguna"
                        : service.value.toString()}
                    </span>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="pt-4">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <span className="text-xl font-semibold">Precio estimado</span>
            <span className="text-3xl font-bold">
              ${calculatePrice(formData)}
            </span>
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            Este precio es aproximado y puede variar según tus necesidades.
          </p>
        </div>
      </Card>

      <Button
        onClick={() => console.log("Enviar cotización", formData)}
        className="w-full transition-all duration-300 ease-in-out hover:scale-105"
        size="lg"
      >
        <Mail /> Enviar Simulación
      </Button>
      <div className="space-y-2 rounded border border-border px-4 py-3">
        <p className="text-xs">
          <Info
            className="-mt-0.5 me-2 inline-flex text-primary"
            size={16}
            strokeWidth={2}
            aria-hidden="true"
          />
          Con esta herramienta, podrás obtener una visión más clara para tu
          proyecto web. Una vez completes y envies el formulario, nos pondremos
          en contacto contigo lo antes posible para afinar los detalles y
          ayudarte a dar el siguiente paso en el crecimiento de tu negocio. Si
          tienes alguna inquietud, estamos aquí para ayudarte.
        </p>
      </div>
    </div>
  )
}
