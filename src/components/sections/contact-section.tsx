'use client';

import { Building2, Mail, MapPin, Phone } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

export function ContactSection() {
  return (
    <section id="contacto" className="py-24">
      <div className="container mx-auto px-6 lg:px-32">
        <div className="mx-auto mb-16 max-w-[900px] text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Contacta con Nosotros
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Estamos aquí para ayudarte a hacer realidad tu próximo proyecto
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <Card className="p-8">
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre completo</Label>
                  <Input id="name" placeholder="Tu nombre" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email corporativo</Label>
                  <Input id="email" type="email" placeholder="tu@empresa.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Teléfono (opcional)</Label>
                  <Input id="phone" type="tel" placeholder="+34 600 000 000" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="select-26">Select with separator</Label>
                  <Select defaultValue="s1">
                    <SelectTrigger id="select-26">
                      <SelectValue placeholder="Select framework" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Frontend</SelectLabel>
                        <SelectItem value="s1">React</SelectItem>
                        <SelectItem value="s2">Vue</SelectItem>
                        <SelectItem value="s3">Angular</SelectItem>
                      </SelectGroup>
                      <SelectSeparator />
                      <SelectGroup>
                        <SelectLabel>Backend</SelectLabel>
                        <SelectItem value="s4">Node.js</SelectItem>
                        <SelectItem value="s5">Python</SelectItem>
                        <SelectItem value="s6">Java</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Descripción del proyecto</Label>
                  <Textarea
                    id="message"
                    placeholder="Cuéntanos sobre tu proyecto..."
                    className="min-h-[100px]"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="gdpr"
                    className="rounded border-input"
                  />
                  <Label htmlFor="gdpr" className="text-sm">
                    Acepto la política de privacidad y el tratamiento de datos
                  </Label>
                </div>
                <Button type="submit" className="w-full">
                  Enviar Mensaje
                </Button>
              </form>
            </Card>
          </div>
          <div className="space-y-8">
            <div className="grid gap-4">
              <div className="flex items-center gap-4">
                <MapPin className="h-6 w-6 text-primary" />
                <div>
                  <h4 className="font-bold">Dirección</h4>
                  <p className="text-muted-foreground">
                    Calle Innovación, 123
                    <br />
                    28001 Madrid, España
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-primary" />
                <div>
                  <h4 className="font-bold">Email</h4>
                  <p className="text-muted-foreground">info@kirawebs.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-6 w-6 text-primary" />
                <div>
                  <h4 className="font-bold">Teléfono</h4>
                  <p className="text-muted-foreground">+34 900 123 456</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Building2 className="h-6 w-6 text-primary" />
                <div>
                  <h4 className="font-bold">Horario</h4>
                  <p className="text-muted-foreground">
                    Lunes a Viernes
                    <br />
                    9:00 - 18:00
                  </p>
                </div>
              </div>
            </div>
            <Card className="p-8">
              <div className="relative aspect-video">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d78987.54215296617!2d-75.52484262363613!3d5.068696196415094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e476ffa6a42ce3b%3A0xa863cf6423ea141c!2sManizales%2C%20Caldas!5e1!3m2!1ses-419!2sco!4v1733635845952!5m2!1ses-419!2sco"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="rounded-lg"
                ></iframe>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
