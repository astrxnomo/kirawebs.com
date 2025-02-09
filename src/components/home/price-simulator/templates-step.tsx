import {
  LayoutDashboard,
  SquareMousePointer,
  UserRoundSearch,
} from "lucide-react"

import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { features, templates } from "@/utils/pricing-config"

import { usePriceSimulator } from "./price-simulator-provider"

export function TemplatesStep() {
  const { formData, updateFormData } = usePriceSimulator()

  return (
    <div className="space-y-4">
      <RadioGroup
        className="grid gap-4 md:grid-cols-3"
        value={formData.template}
        onValueChange={(value: string) => {
          const template = templates.find((t) => t.id === value)
          updateFormData("template", value)
          updateFormData("sections", template?.sections ?? [])
          updateFormData(
            "features",
            template?.features.map((featureId) => {
              const feature = features.find((f) => f.id === featureId)
              return {
                id: featureId,
                label: feature?.label ?? featureId,
                price: feature?.price ?? 0,
              }
            }) ?? [],
          )
        }}
      >
        {templates.map((template) => (
          <div
            key={template.id}
            className="relative flex w-full items-start gap-2 rounded border border-input p-4 shadow-sm hover:shadow-md has-[[data-state=checked]]:border-primary has-[[data-state=checked]]:bg-primary/5"
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
                <span className="flex items-center gap-1 rounded bg-primary/10 px-2 py-1 text-[10px]">
                  <UserRoundSearch className="m-0.5 size-3.5" />
                  {template.suggested}
                </span>
              </div>
            </div>
          </div>
        ))}
      </RadioGroup>
      {(formData.sections.length > 0 || formData.features.length > 0) && (
        <>
          <hr />
          <h3 className="text-center text-base">
            Recomendaciones de plantilla
          </h3>
          <Card className="grid grid-cols-2 divide-x border-primary bg-primary/5">
            <div>
              <h3 className="flex items-center gap-1 border-b p-3 text-xs font-semibold md:text-sm">
                <LayoutDashboard className="size-3 md:size-4" />
                Secciones
              </h3>
              <ul className="divide-y">
                {formData.sections.map((section, index) => (
                  <li
                    key={index}
                    className="px-3 py-1 text-[10px] md:px-4 md:py-2 md:text-xs"
                  >
                    {section}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="flex items-center gap-1 border-b p-3 text-xs font-semibold md:text-sm">
                <SquareMousePointer className="size-3 md:size-4" />
                Funcionalidades
              </h3>
              <ul className="divide-y">
                {formData.features.map((feature) => (
                  <li
                    key={feature.id}
                    className="px-3 py-1 text-[10px] md:px-4 md:py-2 md:text-xs"
                  >
                    {feature.label}
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </>
      )}
    </div>
  )
}
