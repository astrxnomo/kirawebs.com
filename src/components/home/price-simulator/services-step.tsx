import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { services } from "@/utils/pricing-config"

import { usePriceSimulator } from "./price-simulator-provider"

export function ServicesStep() {
  const { formData, updateFormData } = usePriceSimulator()

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
            onValueChange={(value) => {
              if (value[0] !== undefined) {
                updateFormData("plazo", value[0])
              }
            }}
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
          {services.map((service) => (
            <div
              key={service.id}
              role="button"
              tabIndex={0}
              className={`relative flex w-full items-start gap-2 rounded border border-input p-4 shadow-sm hover:shadow-md has-[[data-state=checked]]:border-primary has-[[data-state=checked]]:bg-primary/5 ${
                formData[service.id] ? "border-primary bg-primary/5" : ""
              }`}
              onClick={() => {
                updateFormData(service.id, !formData[service.id])
              }}
            >
              <div className="flex grow items-center gap-3">
                <div className="grid gap-1">
                  <Label htmlFor={service.id} className="text-sm font-semibold">
                    {service.label}
                  </Label>
                  <p className="text-[10px] text-muted-foreground md:text-xs">
                    {service.description}
                  </p>
                </div>
              </div>
              <Checkbox
                id={service.id}
                checked={!!formData[service.id]}
                onCheckedChange={(checked) => {
                  updateFormData(service.id, checked)
                }}
                className="order-1 after:absolute after:inset-0"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
