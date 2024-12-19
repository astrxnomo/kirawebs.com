import { InfoIcon } from 'lucide-react';

import {
  type SimulationPriceFormData,
  type UpdateFormDataFunction,
} from '@/components/home/price-simulator/price-simulation-form';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { additionalServices } from '@/utils/pricing';

export function TimeStep({
  formData,
  updateFormData,
}: {
  formData: SimulationPriceFormData;
  updateFormData: UpdateFormDataFunction;
}) {
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
          {additionalServices.map(({ id, label, tooltip }) => (
            <div key={id} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Label htmlFor={id}>{label}</Label>
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
                checked={Boolean(formData[id as keyof SimulationPriceFormData])}
                onCheckedChange={checked =>
                  updateFormData(id as keyof SimulationPriceFormData, checked)
                }
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
