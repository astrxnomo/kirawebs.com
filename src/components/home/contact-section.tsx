import { Check } from "lucide-react"

import { ContactForm } from "./contact/contact-form"
import Container from "./container"

export function ContactSection() {
  return (
    <Container id="contact">
      <div className="flex flex-col gap-8 lg:flex-row lg:gap-16">
        <div className="flex flex-col justify-center gap-5">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h2 className="text-4xl font-bold tracking-tighter md:text-5xl">
              ¡Contáctanos!
            </h2>
            <p className="mt-4 text-muted-foreground">
              Estamos aquí para ayudarte. Completa el formulario para ponerte en
              contacto con nosotros.
            </p>
          </div>
          <div className="flex flex-col gap-3 px-10">
            <div className="flex items-center gap-6 lg:mx-0">
              <Check className="size-4 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Diseño Personalizado</p>
                <p className="text-sm text-muted-foreground">
                  Creamos páginas web únicas que reflejan la identidad de tu
                  marca.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6 lg:mx-0">
              <Check className="size-4 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Optimización SEO</p>
                <p className="text-sm text-muted-foreground">
                  Nuestras páginas están optimizadas para mejorar tu visibilidad
                  en motores de búsqueda.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6 lg:mx-0">
              <Check className="size-4 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Soporte Continuo</p>
                <p className="text-sm text-muted-foreground">
                  Ofrecemos soporte constante para asegurar que tu sitio web
                  funcione perfectamente.
                </p>
              </div>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </Container>
  )
}
