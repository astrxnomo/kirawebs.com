import { Info, Mail } from 'lucide-react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import ShineBorder from '@/components/ui/shine-border';
import { Textarea } from '@/components/ui/textarea';
import { calcularPrecio } from '@/utils/price-simulator';

import { usePriceSimulator } from './price-simulator-provider';

export function ContactStep() {
  const { formData, updateFormData } = usePriceSimulator();

  const summaryItems = [
    { label: 'Tipo de sitio', value: formData.template || 'No seleccionado' },
    { label: 'Secciones', value: formData.sections },
    { label: 'Funcionalidades', value: formData.recommendedFeatures },
    { label: 'Plazo de entrega', value: `${formData.plazo} días` },
  ];

  const additionalServices = [
    {
      label: 'Mantenimiento mensual',
      value: formData.mantenimiento ? 'Sí' : 'No',
    },
    { label: 'Optimización SEO', value: formData.seo ? 'Sí' : 'No' },
    { label: 'Hosting incluido', value: formData.hosting ? 'Sí' : 'No' },
    { label: 'Dominio personalizado', value: formData.dominio ? 'Sí' : 'No' },
    {
      label: 'Integración con sistemas externos',
      value: formData.integracionExterna ? 'Sí' : 'No',
    },
  ];

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
          onChange={event => updateFormData('email', event.target.value)}
          placeholder="Ingresa tu correo electrónico"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="descripcion">
          Descripción del Proyecto{' '}
          <span className="text-xs text-muted-foreground">(Opcional)</span>
        </Label>
        <Textarea
          id="descripcion"
          value={formData.descripcion}
          onChange={event => updateFormData('descripcion', event.target.value)}
          placeholder="Cuéntanos más sobre tu proyecto..."
        />
      </div>

      <ShineBorder className="w-full p-0" color="#0058CC" borderWidth={2}>
        <div className="w-full space-y-2 rounded-lg bg-accent/50 p-6">
          <h3 className="text-lg font-bold">Resumen del Proyecto</h3>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-sm">
                Detalles del proyecto
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 text-xs">
                  {summaryItems.map(item => (
                    <li key={item.label} className="flex justify-between">
                      <span>{item.label}:</span>
                      <span className="text-right font-medium">
                        {Array.isArray(item.value)
                          ? item.value.join(', ') || 'Ninguna'
                          : item.value.toString()}
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
                  {additionalServices.map(service => (
                    <li key={service.label} className="flex justify-between">
                      <span>{service.label}:</span>
                      <span className="text-right font-medium">
                        {Array.isArray(service.value)
                          ? service.value.join(', ') || 'Ninguna'
                          : service.value.toString()}
                      </span>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="pt-4">
            <div className="flex items-center justify-between">
              <span className="text-xl font-semibold">Precio estimado:</span>
              <span className="text-3xl font-bold">
                ${calcularPrecio(formData)}
              </span>
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              Este precio es aproximado y puede variar según tus necesidades.
            </p>
          </div>
        </div>
      </ShineBorder>

      <div className="space-y-2 rounded-lg border border-border px-4 py-3">
        <p className="text-sm">
          <Info
            className="-mt-0.5 me-3 inline-flex text-primary"
            size={16}
            strokeWidth={2}
            aria-hidden="true"
          />
          Con esta simulación, estaremos un paso más cerca de entender tus
          necesidades y crear el plan perfecto para tu negocio. Al enviarlo, nos
          pondremos en contacto contigo a la brevedad para discutir los detalles
          de tu proyecto. Si tienes alguna duda, no dudes en contactarnos.
        </p>
      </div>
      <Button
        onClick={() => console.log('Enviar cotización', formData)}
        className="w-full transition-all duration-300 ease-in-out hover:scale-105"
        size="lg"
      >
        <Mail /> Enviar Simulación
      </Button>
    </div>
  );
}
