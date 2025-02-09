import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { features } from "@/utils/pricing-config"

import { usePriceSimulator } from "./price-simulator-provider"

export function FeaturesStep() {
  const { formData, updateFormData } = usePriceSimulator()

  const handleFeatureChange = (featureId: string, isChecked: boolean) => {
    const feature = features.find((f) => f.id === featureId)
    if (!feature) return

    const updatedFeatures = isChecked
      ? [...formData.features, feature]
      : formData.features.filter((f) => f.id !== featureId)

    updateFormData("features", updatedFeatures)
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        {features.map((feature) => (
          <div
            key={feature.id}
            role="button"
            tabIndex={0}
            className={`relative flex w-full items-start gap-2 rounded border border-input p-4 shadow-sm hover:shadow-md ${
              formData.features.some((f) => f.id === feature.id)
                ? "border-primary bg-primary/5"
                : ""
            }`}
            onClick={() => {
              const isChecked = !formData.features.some(
                (f) => f.id === feature.id,
              )
              handleFeatureChange(feature.id, isChecked)
            }}
          >
            <div className="flex grow items-center gap-3">
              <div className="grid gap-1">
                <Label htmlFor={feature.id} className="font-semibold">
                  {feature.label}
                </Label>
                <p className="text-[10px] text-muted-foreground md:text-xs">
                  {feature.description}
                </p>
              </div>
            </div>
            <Checkbox
              id={feature.id}
              checked={formData.features.some((f) => f.id === feature.id)}
              onCheckedChange={(checked) => {
                handleFeatureChange(feature.id, checked as boolean)
              }}
              className="order-1 after:absolute after:inset-0"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
