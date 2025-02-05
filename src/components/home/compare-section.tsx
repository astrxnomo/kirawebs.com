import { Check, Minus } from "lucide-react"

import { Card } from "@/components/ui/card"
import { cn } from "@/utils/cn"

import Container from "./container"

const data = {
  id: "compare",
  title: "Por Qué Elegirnos",
  description: "Comparación de características y servicios",
  features: [
    "Precios Asequibles",
    "Facilidad de Uso",
    "Tecnologías Modernas",
    "Alto Rendimiento",
    "Seguridad",
    "Soporte 24/7",
    "Personalización",
  ],
  comparisons: [
    {
      name: "Kira",
      features: [true, true, true, true, true, true, true],
    },
    {
      name: "WordPress",
      features: [true, true, false, false, false, false, true],
    },
    {
      name: "Agencias",
      features: [false, true, false, true, false, true, false],
    },
  ],
}

export function CompareSection() {
  return (
    <Container id={data.id} title={data.title} description={data.description}>
      <Card className="mx-auto w-full max-w-6xl overflow-x-auto p-3">
        <div className="flex min-w-[800px]">
          <div className="w-1/4 bg-muted/30 p-4">
            <h3 className="mb-4 text-lg font-medium">Características</h3>
            {data.features.map((feature, index) => (
              <div
                key={feature}
                className={cn(
                  "py-3 text-xs lg:text-[15px]",
                  index !== 0 && "border-t border-border",
                )}
              >
                {feature}
              </div>
            ))}
          </div>
          <div className="flex flex-1 divide-x divide-border">
            {data.comparisons.map((comparison) => (
              <div key={comparison.name} className="flex-1 p-4">
                <h3 className="mb-4 text-center font-medium lg:text-lg">
                  {comparison.name}
                </h3>
                {comparison.features.map((hasFeature, index) => (
                  <div
                    key={`${comparison.name}-${index}`}
                    className={cn(
                      "flex items-center justify-center py-3",
                      index !== 0 && "border-t border-border",
                    )}
                  >
                    {hasFeature ? (
                      <Check className="size-4 text-primary" />
                    ) : (
                      <Minus className="size-4 text-muted-foreground" />
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Card>
    </Container>
  )
}
