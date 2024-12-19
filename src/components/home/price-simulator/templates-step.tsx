import { Layout, Star } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { templates } from '@/utils/pricing-config';

import { usePriceSimulator } from './price-simulator-provider';

export function TemplatesStep() {
  const { formData, updateFormData } = usePriceSimulator();

  return (
    <div className="space-y-6">
      <RadioGroup
        className="grid grid-cols-2 gap-4 md:grid-cols-3"
        value={formData.template}
        onValueChange={(value: string) => {
          const template = templates.find(t => t.id === value);
          updateFormData('template', value);
          updateFormData('sections', template?.sections || []);
          updateFormData(
            'recommendedFeatures',
            template?.recommendedFeatures || [],
          );
        }}
      >
        {templates.map(template => (
          <div
            key={template.id}
            className="relative flex w-full items-start gap-2 rounded-lg border border-input p-4 shadow-sm shadow-black/5 transition-all duration-200 ease-in-out hover:shadow-md has-[[data-state=checked]]:border-primary has-[[data-state=checked]]:bg-primary/5"
          >
            <RadioGroupItem
              value={template.id}
              id={template.id}
              className="order-1 after:absolute after:inset-0"
            />
            <div className="flex grow items-center gap-3">
              <div className="grid gap-1">
                <Label htmlFor={template.id} className="font-semibold">
                  {template.label}
                </Label>
                <p className="text-[10px] text-muted-foreground md:text-xs">
                  {template.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </RadioGroup>
      <div className="grid grid-cols-2 gap-6">
        {formData.sections.length > 0 && (
          <Card className="overflow-hidden border-primary bg-primary/5">
            <CardContent className="p-0">
              <div className="p-3">
                <h3 className="flex items-center gap-2 text-xs font-semibold md:text-sm">
                  <Layout className="size-3 md:size-4" />
                  Secciones
                </h3>
              </div>
              <ul className="divide-y divide-border">
                {formData.sections.map((section, index) => (
                  <li
                    key={index}
                    className="px-3 py-1 text-[10px] md:px-4 md:py-2 md:text-xs"
                  >
                    {section}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}

        {formData.recommendedFeatures.length > 0 && (
          <Card className="overflow-hidden border-primary bg-primary/5">
            <CardContent className="p-0">
              <div className="p-3">
                <h3 className="flex items-center gap-2 text-xs font-semibold md:text-sm">
                  <Star className="size-3 md:size-4" />
                  Características
                </h3>
              </div>
              <ul className="divide-y divide-border">
                {formData.recommendedFeatures.map((feature, index) => (
                  <li
                    key={index}
                    className="px-3 py-1 text-[10px] md:px-4 md:py-2 md:text-xs"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
