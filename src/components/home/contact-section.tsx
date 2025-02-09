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
              Contáctanos
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
                <p>Fácil de usar</p>
                <p className="text-sm text-muted-foreground">
                  Hemos hecho que sea fácil de usar y entender.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6 lg:mx-0">
              <Check className="size-4 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Rápido y confiable</p>
                <p className="text-sm text-muted-foreground">
                  Hemos hecho que sea rápido y confiable.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6 lg:mx-0">
              <Check className="size-4 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Moderno y atractivo</p>
                <p className="text-sm text-muted-foreground">
                  Hemos hecho que sea moderno y atractivo.
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
