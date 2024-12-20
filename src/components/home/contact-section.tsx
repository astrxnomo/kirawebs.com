'use client';

import { Mail } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { Button } from '../ui/button';
import { Checkbox } from '../ui/checkbox';
import { Textarea } from '../ui/textarea';
import Container from './container';

const data = {
  title: 'Contacto',
  description: 'Ponte en contacto con nosotros para más información.',
  contactMethods: [
    {
      icon: Mail,
      title: 'Email',
      details: 'info@kirawebs.com',
    },
  ],
  mapSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16258048.38473994!2d-85.00482797945533!3d5.820311668188996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e15a43aae1594a3%3A0x9a0d9a04eff2a340!2sColombia!5e0!3m2!1ses-419!2sco!4v1734294789361!5m2!1ses-419!2sco',
};

export function ContactSection() {
  return (
    <Container
      id="contact"
      title={data.title}
      description={data.description}
      className="mb-20"
    >
      <Card className="mx-auto w-full max-w-2xl overflow-x-auto p-6">
        <form className="space-y-6">
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
            <Textarea id="textarea-03" placeholder="Escribe una descripción" />
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
      </Card>
    </Container>
  );
}
