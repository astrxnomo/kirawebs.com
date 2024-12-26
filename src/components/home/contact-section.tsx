'use client';

import { format } from 'date-fns';
import { CalendarIcon, Check, Mail, MoveRight } from 'lucide-react';
import { useState } from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/utils/cn';

import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import Container from './container';

export const ContactSection = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <Container id="contact">
      <div className="grid w-full max-w-5xl lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <h4 className="font-regular text-4xl tracking-tighter">
              Contáctanos
            </h4>
            <p className="mt-4 max-w-md text-muted-foreground">
              Estamos aquí para ayudarte. Completa el formulario para ponerte en
              contacto con nosotros.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="mx-auto flex flex-row items-center gap-6 lg:mx-0">
              <Check className="h-4 w-4 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Fácil de usar</p>
                <p className="text-sm text-muted-foreground">
                  Hemos hecho que sea fácil de usar y entender.
                </p>
              </div>
            </div>
            <div className="mx-auto flex flex-row items-center gap-6 lg:mx-0">
              <Check className="h-4 w-4 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Rápido y confiable</p>
                <p className="text-sm text-muted-foreground">
                  Hemos hecho que sea rápido y confiable.
                </p>
              </div>
            </div>
            <div className="mx-auto flex flex-row items-center gap-6 lg:mx-0">
              <Check className="h-4 w-4 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Moderno y atractivo</p>
                <p className="text-sm text-muted-foreground">
                  Hemos hecho que sea moderno y atractivo.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Card className="mx-auto w-full max-w-3xl">
          <CardContent className="pt-6">
            <form className="w-full space-y-6">
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
                <Textarea
                  id="textarea-03"
                  placeholder="Escribe una descripción"
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
  );
};
