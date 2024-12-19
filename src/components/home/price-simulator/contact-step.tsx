import { Mail } from 'lucide-react';

import {
  type SimulationPriceFormData,
  type UpdateFormDataFunction,
} from '@/components/home/price-simulator/price-simulation-form';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export function ContactStep({
  formData,
  updateFormData,
  price,
}: {
  formData: SimulationPriceFormData;
  updateFormData: UpdateFormDataFunction;
  price: number;
}) {
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

  const renderSummaryItem = (
    label: string,
    value: string | string[] | boolean,
  ) => (
    <li key={label} className="flex justify-between">
      <span>{label}:</span>
      <span className="text-right font-medium">
        {Array.isArray(value)
          ? value.join(', ') || 'Ninguna'
          : value.toString()}
      </span>
    </li>
  );

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="email">
          Correo Electrónico <span className="text-destructive">*</span>
        </Label>
        <div className="relative">
          <Input
            id="email"
            type="email"
            className="peer pe-9"
            value={formData.email}
            onChange={event => updateFormData('email', event.target.value)}
            placeholder="tu@email.com"
          />
          <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-muted-foreground/80 peer-disabled:opacity-50">
            <Mail size={16} strokeWidth={2} aria-hidden="true" />
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="descripcion">
          Descripción adicional{' '}
          <span className="text-muted-foreground">(Opcional)</span>
        </Label>
        <Textarea
          id="descripcion"
          value={formData.descripcion}
          onChange={event => updateFormData('descripcion', event.target.value)}
          placeholder="Cuéntanos más sobre tu proyecto..."
        />
        <p
          className="mt-2 text-xs text-muted-foreground"
          role="region"
          aria-live="polite"
        >
          Agrega todos los detalles que consideres necesarios
        </p>
      </div>

      <div className="mt-6 space-y-2 rounded-lg bg-accent p-6">
        <h3 className="text-lg font-semibold">Resumen de tu cotización</h3>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-sm">
              Detalles del proyecto
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-2 text-xs">
                {summaryItems.map(item =>
                  renderSummaryItem(item.label, item.value),
                )}
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-sm">
              Servicios adicionales
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-2 text-xs">
                {additionalServices.map(service =>
                  renderSummaryItem(service.label, service.value),
                )}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="pt-4">
          <div className="flex items-center justify-between">
            <span className="text-xl font-semibold">Precio estimado:</span>
            <span className="text-3xl font-bold">${price}</span>
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            Este precio es aproximado y puede variar según tus necesidades.
          </p>
        </div>
      </div>
    </div>
  );
}
