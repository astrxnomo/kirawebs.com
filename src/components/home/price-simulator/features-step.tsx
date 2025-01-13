import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { features } from "@/utils/pricing-config"

import { usePriceSimulator } from "./price-simulator-provider"

export function FeaturesStep() {
  const { formData, updateFormData } = usePriceSimulator()

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        {features.map((feature) => (
          <Tooltip key={feature.id}>
            <TooltipTrigger asChild>
              <div
                role="button"
                tabIndex={0}
                className={`relative flex w-full items-start gap-2 rounded border border-input p-4 shadow-sm hover:shadow-md has-[[data-state=checked]]:border-primary has-[[data-state=checked]]:bg-primary/5 ${
                  formData.recommendedFeatures.includes(feature.id)
                    ? "border-primary bg-primary/5"
                    : ""
                }`}
                onClick={() => {
                  const newFeatures = formData.recommendedFeatures.includes(
                    feature.id,
                  )
                    ? formData.recommendedFeatures.filter(
                        (f) => f !== feature.id,
                      )
                    : [...formData.recommendedFeatures, feature.id]
                  updateFormData("recommendedFeatures", newFeatures)
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    const newFeatures = formData.recommendedFeatures.includes(
                      feature.id,
                    )
                      ? formData.recommendedFeatures.filter(
                          (f) => f !== feature.id,
                        )
                      : [...formData.recommendedFeatures, feature.id]
                    updateFormData("recommendedFeatures", newFeatures)
                  }
                }}
              >
                <Checkbox
                  checked={formData.recommendedFeatures.includes(feature.id)}
                  className="order-1 after:absolute after:inset-0"
                />
                <div className="flex grow items-center gap-3">
                  <div className="grid gap-1">
                    <Label htmlFor={feature.id} className="font-semibold">
                      {feature.label}
                    </Label>
                  </div>
                </div>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Añade {feature.label.toLowerCase()} a tu sitio web</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </div>
  )
}
