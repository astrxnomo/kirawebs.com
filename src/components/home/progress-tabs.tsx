"use client"

import { Check } from "lucide-react"

import { cn } from "@/utils/cn"

interface ProgressTabsProps {
  steps: string[]
  currentStep: number
  className?: string
}

export function ProgressTabs({
  steps,
  currentStep,
  className,
}: ProgressTabsProps) {
  return (
    <div className={cn("w-full", className)}>
      <div className="relative flex justify-between">
        {steps.map((step, index) => (
          <div key={step} className="flex flex-col items-center">
            <div
              className={cn(
                "z-10 flex h-10 w-10 items-center justify-center rounded border-2 bg-background",
                currentStep > index
                  ? "border-primary bg-primary text-primary-foreground"
                  : currentStep === index
                    ? "border-primary text-primary"
                    : "border-muted-foreground text-muted-foreground",
              )}
            >
              {currentStep > index ? (
                <Check className="size-6" />
              ) : (
                <span>{index + 1}</span>
              )}
            </div>
            <span
              className={cn(
                "mt-2 hidden text-sm lg:block",
                currentStep >= index ? "text-primary" : "text-muted-foreground",
              )}
            >
              {step}
            </span>
          </div>
        ))}
        <div className="absolute left-0 top-5 h-[2px] w-full -translate-y-1/2 bg-muted">
          <div
            className="h-full bg-primary transition-all duration-300"
            style={{
              width: `${(currentStep / (steps.length - 1)) * 100}%`,
            }}
          />
        </div>
      </div>
    </div>
  )
}
