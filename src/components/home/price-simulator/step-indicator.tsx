import { Check } from "lucide-react"

interface Step {
  name: string
  icon: React.ElementType
}

export function StepIndicator({
  steps,
  currentStep,
}: {
  steps: Step[]
  currentStep: number
}) {
  return (
    <ol className="relative flex w-full items-center justify-center">
      {steps.map((step, index) => {
        const Icon = step.icon
        const isCompleted = index < currentStep
        const isCurrent = index === currentStep

        return (
          <li
            key={step.name}
            className="relative flex flex-1 flex-col items-center"
          >
            <div
              className={`z-10 flex size-12 items-center justify-center rounded border-2 bg-background transition-all duration-300 ease-in-out ${
                isCompleted
                  ? "border-primary bg-primary text-primary-foreground"
                  : isCurrent
                    ? "border-primary text-primary"
                    : "border-muted-foreground text-muted-foreground"
              } ${isCurrent ? "scale-110" : ""}`}
            >
              {isCompleted ? (
                <Check className="size-6" />
              ) : (
                <Icon className="size-6" />
              )}
            </div>
            <span
              className={`mt-2 hidden text-center font-medium sm:text-sm md:block ${
                isCurrent ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {step.name}
            </span>
            {index < steps.length - 1 && (
              <div
                className={`absolute left-1/2 top-6 h-[2px] w-full ${
                  isCompleted ? "bg-primary" : "bg-muted-foreground"
                }`}
              />
            )}
          </li>
        )
      })}
    </ol>
  )
}
