import { Check, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { Card, CardContent } from "../ui/card"
import { Textarea } from "../ui/textarea"
import Container from "./container"

export const ContactSection = () => {
  return (
    <Container id="contact">
      <div className="flex flex-col gap-8 lg:flex-row lg:gap-16">
        <div className="flex flex-col gap-5">
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

        <Card className="mx-auto w-full max-w-lg">
          <CardContent className="pt-6">
            <form
              className="w-full space-y-6"
              action="https://send.pageclip.co/FPk2ADT0drpl6kGDfqut3iszADjKfCeP/contact-form"
              method="POST"
              data-pageclip-form="YOUR_FORM_NAME"
            >
              <div className="space-y-2">
                <Label htmlFor="input-10">
                  Email <span className="text-destructive">*</span>
                </Label>
                <div className="relative">
                  <Input
                    id="input-10"
                    className="peer pe-9"
                    placeholder="tu@correo.com"
                    type="email"
                    name="email"
                    required
                  />
                  <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-muted-foreground/80 peer-disabled:opacity-50">
                    <Mail size={16} strokeWidth={2} aria-hidden="true" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="textarea-03">
                  Descripción <span className="text-destructive">*</span>
                </Label>
                <Textarea
                  id="textarea-03"
                  placeholder="Escribe una descripción"
                  name="descripcion"
                  required
                />
                <p
                  className="mt-2 text-xs text-muted-foreground"
                  role="region"
                  aria-live="polite"
                >
                  Agrega todos los detalles que consideres necesarios
                </p>
              </div>

              <Button type="submit" className="w-full">
                Enviar
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </Container>
  )
}
