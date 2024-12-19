import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { features } from '@/utils/pricing-config';

import { usePriceSimulator } from './price-simulator-provider';

export function FeaturesStep() {
  const { formData, updateFormData } = usePriceSimulator();

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        {features.map(feature => (
          <Tooltip key={feature.id}>
            <TooltipTrigger asChild>
              <div
                className={`flex cursor-pointer items-center space-x-2 rounded-lg border p-4 hover:bg-accent ${
                  formData.recommendedFeatures.includes(feature.id)
                    ? 'bg-accent'
                    : ''
                }`}
                onClick={() => {
                  const newFeatures = formData.recommendedFeatures.includes(
                    feature.id,
                  )
                    ? formData.recommendedFeatures.filter(f => f !== feature.id)
                    : [...formData.recommendedFeatures, feature.id];
                  updateFormData('recommendedFeatures', newFeatures);
                }}
              >
                <Checkbox
                  checked={formData.recommendedFeatures.includes(feature.id)}
                  onCheckedChange={() => {}}
                />
                <Label>{feature.label}</Label>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Añade {feature.id.toLowerCase()} a tu sitio web</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </div>
  );
}
