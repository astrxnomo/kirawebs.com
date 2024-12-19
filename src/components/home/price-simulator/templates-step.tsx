import {
  type SimulationPriceFormData,
  type UpdateFormDataFunction,
} from '@/components/home/price-simulator/price-simulation-form';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { templates } from '@/utils/pricing';

export function TemplatesStep({
  formData,
  updateFormData,
}: {
  formData: SimulationPriceFormData;
  updateFormData: UpdateFormDataFunction;
}) {
  return (
    <div className="space-y-6">
      <RadioGroup
        className="grid grid-cols-2 gap-4 md:grid-cols-3"
        value={formData.template}
        onValueChange={(value: keyof typeof templates) => {
          updateFormData('template', value);
          updateFormData('sections', templates[value]?.sections || []);
          updateFormData(
            'recommendedFeatures',
            templates[value]?.recommendedFeatures || [],
          );
        }}
      >
        {(Object.keys(templates) as Array<keyof typeof templates>).map(
          template => (
            <div
              key={template}
              className="relative flex w-full items-start gap-2 rounded-lg border border-input p-4 shadow-sm shadow-black/5 has-[[data-state=checked]]:border-ring"
            >
              <RadioGroupItem
                value={template}
                id={template}
                className="order-1 after:absolute after:inset-0"
              />
              <div className="flex grow items-center gap-3">
                <div className="grid gap-2">
                  <Label htmlFor={template} className="font-semibold">
                    {template.charAt(0).toUpperCase() + template.slice(1)}
                  </Label>
                  <p className="text-xs text-muted-foreground">
                    {templates[template].description}
                  </p>
                </div>
              </div>
            </div>
          ),
        )}
      </RadioGroup>
      {formData.template && formData.template !== 'ninguna' && (
        <div className="space-y-2 rounded-lg bg-muted p-6">
          {/* Template suggestions */}
        </div>
      )}
    </div>
  );
}
