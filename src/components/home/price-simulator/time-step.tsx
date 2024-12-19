import { InfoIcon } from 'lucide-react';

import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import {
  type SimulationPriceFormData,
  usePriceSimulator,
} from './price-simulator-provider';

const additionalServices: {
  id: keyof SimulationPriceFormData;
  service: string;
  tooltip: string;
}[] = [
  {
    id: 'mantenimiento',
    service: 'Mantenimiento mensual',
    tooltip: 'Servicio de mantenimiento mensual para tu sitio web.',
  },
  {
    id: 'seo',
    service: 'Optimización SEO',
    tooltip: 'Optimización para motores de búsqueda.',
  },
  {
    id: 'hosting',
    service: 'Hosting incluido',
    tooltip: 'Servicio de hosting para tu sitio web.',
  },
  {
    id: 'dominio',
    service: 'Dominio personalizado',
    tooltip: 'Dominio personalizado para tu sitio web.',
  },
  {
    id: 'integracionExterna',
    service: 'Integración con sistemas externos',
    tooltip: 'Integración con sistemas externos.',
  },
];

export function TimeStep() {
  const { formData, updateFormData } = usePriceSimulator();

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <Label className="text-lg font-medium">Plazo de entrega</Label>
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
        <div className="space-y-4">
          {additionalServices.map(({ id, service, tooltip }) => (
            <div key={id} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Label htmlFor={id}>{service}</Label>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <InfoIcon className="h-4 w-4 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{tooltip}</p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <Switch
                id={id}
                checked={!!formData[id]}
                onCheckedChange={checked => updateFormData(id, checked)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
