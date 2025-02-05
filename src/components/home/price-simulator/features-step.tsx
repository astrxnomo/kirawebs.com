import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { features } from "@/utils/pricing-config"

import { usePriceSimulator } from "./price-simulator-provider"

export function FeaturesStep() {
  const { formData, updateFormData } = usePriceSimulator()

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        {features.map((feature) => (
          <div
            key={feature.id}
            role="button"
            tabIndex={0}
            className={`relative flex w-full items-start gap-2 rounded border border-input p-4 shadow-sm hover:shadow-md has-[[data-state=checked]]:border-primary has-[[data-state=checked]]:bg-primary/5 ${
              formData[feature.id] ? "border-primary bg-primary/5" : ""
            }`}
            onClick={() => {
              updateFormData(feature.id, !formData[feature.id])
            }}
          >
            <Checkbox
              id={feature.id}
              checked={!!formData[feature.id]}
              onCheckedChange={(checked) => {
                updateFormData(feature.id, checked)
              }}
              className="order-1 after:absolute after:inset-0"
            />
            <div className="flex grow items-center gap-3">
              <div className="grid gap-1">
                <Label htmlFor={feature.id} className="font-semibold">
                  {feature.id}
                </Label>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
