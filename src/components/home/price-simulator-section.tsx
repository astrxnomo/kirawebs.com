"use client"

import {
  AppWindow,
  ArrowLeft,
  ArrowRight,
  FileCheck,
  LayoutDashboard,
  PackagePlus,
  SquareMousePointer,
} from "lucide-react"
import { useState } from "react"

import Container from "@/components/home/container"
import { FeaturesStep } from "@/components/home/price-simulator/features-step"
import { ResumeStep } from "@/components/home/price-simulator/resume-step"
import { SectionsStep } from "@/components/home/price-simulator/sections-steps"
import { ServicesStep } from "@/components/home/price-simulator/services-step"
import { StepIndicator } from "@/components/home/price-simulator/step-indicator"
import { TemplatesStep } from "@/components/home/price-simulator/templates-step"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { TooltipProvider } from "@/components/ui/tooltip"

import { PriceSimulatorProvider } from "./price-simulator/price-simulator-provider"

const STEPS = [
  {
    name: "Plantillas",
    icon: AppWindow,
    description: "Selecciona una plantilla para tu sitio web",
  },
  {
    name: "Secciones",
    icon: LayoutDashboard,
    description:
      "Selecciona o añade las secciones que deseas para tu sitio web. Cada sección representa una página o área importante de tu sitio.",
  },
  {
    name: "Funcionalidades",
    icon: SquareMousePointer,
    description: "Selecciona las funcionalidades que necesitas",
  },
  {
    name: "Servicios",
    icon: PackagePlus,
    description: "Indica el plazo de entrega deseado",
  },
  {
    name: "Resumen",
    icon: FileCheck,
    description: "Proporciona tus datos de contacto",
  },
]

export function PriceSimulatorForm() {
  const [currentStep, setCurrentStep] = useState(0)

  const handleNext = () =>
    setCurrentStep((previous) => Math.min(previous + 1, STEPS.length - 1))
  const handlePrevious = () =>
    setCurrentStep((previous) => Math.max(previous - 1, 0))

  return (
    <Container
      id="price-simulator"
      title="Simulador de precios"
      description="Obten una visión más clara de lo que necesitas para tu proyecto web"
    >
      <div className="mx-auto w-full max-w-4xl space-y-4">
        <StepIndicator steps={STEPS} currentStep={currentStep} />
        <Card className="w-full overflow-hidden">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">
              {STEPS[currentStep].name}
            </CardTitle>
            <CardDescription>{STEPS[currentStep].description}</CardDescription>
          </CardHeader>
          <CardContent>
            <PriceSimulatorProvider>
              <div
                key={currentStep}
                className="flex flex-col items-center justify-between gap-6 duration-200 animate-in slide-in-from-bottom-5"
              >
                <TooltipProvider>
                  <div className="w-full">
                    {currentStep === 0 && <TemplatesStep />}
                    {currentStep === 1 && <SectionsStep />}
                    {currentStep === 2 && <FeaturesStep />}
                    {currentStep === 3 && <ServicesStep />}
                    {currentStep === 4 && <ResumeStep />}
                  </div>
                </TooltipProvider>
                <div className="flex w-full justify-between">
                  {currentStep > 0 && (
                    <Button
                      variant="outline"
                      onClick={handlePrevious}
                      className="transition-transform duration-300 ease-in-out hover:-translate-x-1"
                    >
                      <ArrowLeft className="mr-2 size-4" /> Anterior
                    </Button>
                  )}
                  {currentStep < STEPS.length - 1 && (
                    <Button
                      onClick={handleNext}
                      className="transition-transform duration-300 ease-in-out hover:translate-x-1"
                    >
                      Siguiente <ArrowRight className="ml-2 size-4" />
                    </Button>
                  )}
                </div>
              </div>
            </PriceSimulatorProvider>
          </CardContent>
        </Card>
      </div>
    </Container>
  )
}
