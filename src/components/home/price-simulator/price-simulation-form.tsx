'use client';

import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Cog,
  Layout,
  Mail,
  Palette,
} from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { TooltipProvider } from '@/components/ui/tooltip';
import { calcularPrecio } from '@/utils/pricing';

import Container from '../container';
import { ContactStep } from './contact-step';
import { FeaturesStep } from './features-step';
import { SectionsStep } from './sections-steps';
import { StepIndicator } from './step-indicator';
import { TemplatesStep } from './templates-step';
import { TimeStep } from './time-step';

export type SimulationPriceFormData = {
  template: string;
  sections: string[];
  recommendedFeatures: string[];
  plazo: number;
  mantenimiento: boolean;
  seo: boolean;
  hosting: boolean;
  dominio: boolean;
  integracionExterna: boolean;
  email: string;
  descripcion: string;
};

export type UpdateFormDataFunction = <K extends keyof SimulationPriceFormData>(
  field: K,
  value: SimulationPriceFormData[K],
) => void;

const STEPS = [
  {
    name: 'Plantillas',
    icon: Layout,
    description: 'Selecciona una plantilla para tu sitio web',
  },
  {
    name: 'Secciones',
    icon: Palette,
    description: 'Elige las secciones que tendrá tu sitio web',
  },
  {
    name: 'Funcionalidades',
    icon: Cog,
    description: 'Selecciona las funcionalidades que necesitas',
  },
  {
    name: 'Plazos',
    icon: Clock,
    description: 'Indica el plazo de entrega deseado',
  },
  {
    name: 'Contacto',
    icon: Mail,
    description: 'Proporciona tus datos de contacto',
  },
];

export function PriceSimulatorForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<SimulationPriceFormData>({
    template: '',
    sections: [],
    recommendedFeatures: [],
    plazo: 30,
    mantenimiento: false,
    seo: false,
    hosting: false,
    dominio: false,
    integracionExterna: false,
    email: '',
    descripcion: '',
  });

  const updateFormData: UpdateFormDataFunction = (field, value) => {
    setFormData(previous => ({ ...previous, [field]: value }));
  };

  const handleNext = () =>
    setCurrentStep(previous => Math.min(previous + 1, STEPS.length - 1));
  const handlePrevious = () =>
    setCurrentStep(previous => Math.max(previous - 1, 0));

  const price = calcularPrecio(formData);

  const renderStep = () => {
    switch (currentStep) {
      case 0: {
        return (
          <TemplatesStep formData={formData} updateFormData={updateFormData} />
        );
      }
      case 1: {
        return (
          <SectionsStep formData={formData} updateFormData={updateFormData} />
        );
      }
      case 2: {
        return (
          <FeaturesStep formData={formData} updateFormData={updateFormData} />
        );
      }
      case 3: {
        return <TimeStep formData={formData} updateFormData={updateFormData} />;
      }
      case 4: {
        return (
          <ContactStep
            formData={formData}
            updateFormData={updateFormData}
            price={price}
          />
        );
      }
      default: {
        return;
      }
    }
  };

  return (
    <Container
      id="simulador-precio"
      title="Simulador de precios"
      description="Obtén un presupuesto personalizado para tu sitio web"
    >
      <div className="mx-auto w-full max-w-4xl">
        <StepIndicator steps={STEPS} currentStep={currentStep} />
        <Card className="w-full overflow-hidden">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">
              {STEPS[currentStep].name}
            </CardTitle>
            <CardDescription>{STEPS[currentStep].description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div
              key={currentStep}
              className="flex flex-col items-center justify-between gap-6 duration-200 animate-in slide-in-from-bottom-5"
            >
              <TooltipProvider>
                <div className="w-full">{renderStep()}</div>
              </TooltipProvider>
              <div className="flex w-full justify-between gap-4">
                {currentStep > 0 && (
                  <Button
                    variant="outline"
                    onClick={handlePrevious}
                    className="transition-transform duration-300 ease-in-out hover:-translate-x-1"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" /> Anterior
                  </Button>
                )}
                {currentStep < STEPS.length - 1 ? (
                  <Button
                    onClick={handleNext}
                    className="transition-transform duration-300 ease-in-out hover:translate-x-1"
                  >
                    Siguiente <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                ) : (
                  <Button
                    onClick={() => console.log('Enviar cotización', formData)}
                    className="transition-all duration-300 ease-in-out hover:scale-105"
                  >
                    <Mail className="mr-2 h-4 w-4" /> Enviar Cotización
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Container>
  );
}
