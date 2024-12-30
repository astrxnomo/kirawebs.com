import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';

import {
  type SimulationPriceFormData,
  usePriceSimulator,
} from './price-simulator-provider';

const additionalServices: {
  id: keyof SimulationPriceFormData;
  label: string;
  description: string;
}[] = [
  {
    id: 'mantenimiento',
    label: 'Mantenimiento',
    description:
      'Actualizaciones regulares y soporte técnico para mantener tu sitio web seguro y actualizado.',
  },
  {
    id: 'seo',
    label: 'Optimización SEO',
    description:
      'Mejora la visibilidad de tu sitio en los motores de búsqueda para atraer más tráfico orgánico.',
  },
  {
    id: 'hosting',
    label: 'Hosting incluido',
    description:
      'Alojamiento web de alta velocidad y confiable para garantizar el rendimiento de tu sitio.',
  },
  {
    id: 'dominio',
    label: 'Dominio personalizado',
    description:
      'Registro y configuración de un dominio único que refleje tu marca o negocio.',
  },
  {
    id: 'integracionExterna',
    label: 'Integración con sistemas externos',
    description:
      'Conecta tu sitio web con CRM, sistemas de pago y otras herramientas externas para mejorar la funcionalidad.',
  },
];

export function ServicesStep() {
  const { formData, updateFormData } = usePriceSimulator();

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <Label className="text-lg font-medium">Plazo de entrega</Label>
        <p className="text-sm text-muted-foreground">
          Selecciona el plazo de entrega deseado para tu proyecto.
        </p>
        <div className="space-y-4">
          <Slider
            min={30}
            max={90}
            step={1}
            value={[formData.plazo]}
            onValueChange={value => updateFormData('plazo', value[0])}
            className="mt-2"
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>30 días</span>
            <span>{formData.plazo} días</span>
            <span>90 días</span>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <Label className="text-lg font-medium">Servicios adicionales</Label>
        <p className="text-sm text-muted-foreground">
          Selecciona los servicios adicionales que deseas incluir en tu
          proyecto.
        </p>
        <div className="grid grid-cols-2 gap-4">
          {additionalServices.map(service => (
            <div
              key={service.id}
              className={`relative flex w-full items-start gap-2 rounded border border-input p-4 shadow-sm hover:shadow-md has-[[data-state=checked]]:border-primary has-[[data-state=checked]]:bg-primary/5 ${
                formData[service.id] ? 'border-primary bg-primary/5' : ''
              }`}
              onClick={() => updateFormData(service.id, !formData[service.id])}
            >
              <Checkbox
                id={service.id}
                checked={!!formData[service.id]}
                onCheckedChange={checked => updateFormData(service.id, checked)}
                className="order-1 after:absolute after:inset-0"
              />
              <div className="space-y-1">
                <Label htmlFor={service.id} className="text-sm font-semibold">
                  {service.label}
                </Label>
                <p className="text-[10px] text-muted-foreground md:text-xs">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
