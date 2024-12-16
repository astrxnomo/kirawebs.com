'use client';

import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  InfoIcon,
  Mail,
  MinusIcon,
  PlusIcon,
  X,
} from 'lucide-react';
import { useEffect, useState } from 'react';

import { ProgressTabs } from '@/components/home/progress-tabs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { calcularPrecio, templates } from '@/utils/pricing';

import Container from './container';

const STEPS = [
  'Plantillas',
  'Secciónes y Diseño',
  'Funcionalidades',
  'Plazos y Servicios',
  'Contacto y Resumen',
];

export default function CotizacionForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    template: '',
    sections: [] as string[],
    disenoPersonalizado: false,
    recommendedFeatures: [] as string[],
    plazo: 30,
    mantenimiento: false,
    seo: false,
    hosting: false,
    dominio: false,
    integracionExterna: false,
    email: '',
    descripcion: '',
  });
  const [price, setPrice] = useState(0);
  const [newSection, setNewSection] = useState('');

  useEffect(() => {
    setPrice(calcularPrecio(formData));
  }, [formData]);

  const handleNext = () => setStep(step + 1);
  const handlePrevious = () => setStep(step - 1);

  const updateFormData = (key: string, value: any) => {
    setFormData(previous => ({ ...previous, [key]: value }));
  };

  const addSection = () => {
    if (newSection && !formData.sections.includes(newSection)) {
      updateFormData('sections', [...formData.sections, newSection]);
      setNewSection('');
    }
  };

  const removePagina = (pagina: string) => {
    updateFormData(
      'sections',
      formData.sections.filter(p => p !== pagina),
    );
  };

  return (
    <TooltipProvider>
      <Container
        id="cotizacion"
        title="Cotización"
        description="Obtén un presupuesto personalizado para tu sitio web"
      >
        <ProgressTabs steps={STEPS} currentStep={step - 1} className="mb-8" />

        <Card className="mx-auto w-full max-w-2xl">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-bold">
              {STEPS[step - 1]}
            </CardTitle>
            <CardDescription className="text-center">
              {step === 1 &&
                'Selecciona una plantilla que se ajuste a tus necesidades, las plantillas tienen características y funcionalidades sugeridas pero puedes personalizarlas a tu gusto'}
              {step === 2 &&
                'Define las secciónes de tu sitio y elige el tipo de diseño que deseas'}
              {step === 3 &&
                'Selecciona las funcionalidades que harán único tu proyecto'}
              {step === 4 &&
                'Establece plazos y servicios adicionales para tu sitio web'}
              {step === 5 &&
                'Revisa tu cotización y proporciona tus datos de contacto'}
            </CardDescription>
          </CardHeader>

          <CardContent>
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {step === 1 && (
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <RadioGroup
                        className="grid grid-cols-2 gap-4 md:grid-cols-3"
                        defaultValue=""
                        onValueChange={value => {
                          updateFormData('template', value);
                          updateFormData(
                            'sections',
                            templates[value as keyof typeof templates]
                              .sections || [],
                          );
                          updateFormData(
                            'recommendedFeatures',
                            templates[value as keyof typeof templates]
                              .recommendedFeatures || [],
                          );
                        }}
                      >
                        {Object.keys(templates).map(template => (
                          <div
                            key={template}
                            className="relative flex w-full items-start gap-2 rounded-lg border border-input p-4 shadow-sm shadow-black/5 has-[[data-state=checked]]:border-ring"
                          >
                            <RadioGroupItem
                              value={template}
                              id={template}
                              aria-describedby={`radio-${template}-description`}
                              className="order-1 after:absolute after:inset-0"
                            />
                            <div className="flex grow items-center gap-3">
                              <div className="grid gap-2">
                                <Label
                                  htmlFor={template}
                                  className="font-semibold"
                                >
                                  {template.charAt(0).toUpperCase() +
                                    template.slice(1)}
                                </Label>
                                <p
                                  id={`radio-${template}-description`}
                                  className="text-xs text-muted-foreground"
                                >
                                  {
                                    templates[
                                      template as keyof typeof templates
                                    ].description
                                  }
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                    {formData.template && formData.template !== 'ninguna' && (
                      <div className="space-y-2 rounded-lg bg-muted p-6">
                        <div>
                          <h4 className="mb-2 text-sm font-medium">
                            Secciónes sugeridas:
                          </h4>
                          <ul className="list-inside list-disc space-y-1 text-xs">
                            {templates[
                              formData.template as keyof typeof templates
                            ].sections?.map(section => (
                              <li key={section}>{section}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="mb-2 text-sm font-medium">
                            Funcionalidades recomendadas:
                          </h4>
                          <ul className="list-inside list-disc space-y-1 text-xs">
                            {templates[
                              formData.template as keyof typeof templates
                            ].recommendedFeatures?.map(function_ => (
                              <li key={function_}>{function_}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <Label className="text-lg font-medium">
                        Secciónes del sitio
                      </Label>
                      <div className="flex flex-wrap gap-2">
                        {formData.sections.map(section => (
                          <Badge key={section}>
                            {section}
                            <button
                              className="-my-px -me-1.5 -ms-px inline-flex size-5 shrink-0 items-center justify-center rounded-[inherit] p-0 opacity-60 transition-opacity hover:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70"
                              onClick={() => removePagina(section)}
                            >
                              <X size={12} strokeWidth={2} aria-hidden="true" />
                            </button>
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <Input
                          value={newSection}
                          onChange={event => setNewSection(event.target.value)}
                          placeholder="Nueva Sección "
                        />
                        <Button onClick={addSection} type="button">
                          <PlusIcon className="h-4 w-4" /> Añadir
                        </Button>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <Label className="text-lg font-medium">
                        Diseño personalizado
                      </Label>
                      <RadioGroup
                        onValueChange={value =>
                          updateFormData(
                            'disenoPersonalizado',
                            value === 'true',
                          )
                        }
                        className="grid grid-cols-2 gap-4"
                      >
                        <div className="relative flex w-full justify-center gap-2 rounded-lg border border-input p-4 shadow-sm has-[[data-state=checked]]:border-ring">
                          <RadioGroupItem
                            value="true"
                            id="disenoSi"
                            className="order-1 after:absolute after:inset-0"
                          />
                          <Label htmlFor="disenoSi">Sí</Label>
                        </div>
                        <div className="relative flex w-full justify-center gap-2 rounded-lg border border-input p-4 shadow-sm has-[[data-state=checked]]:border-ring">
                          <RadioGroupItem
                            value="false"
                            id="disenoNo"
                            className="order-1 after:absolute after:inset-0"
                          />
                          <Label htmlFor="disenoNo">No</Label>
                        </div>
                      </RadioGroup>
                      <p className="text-sm text-muted-foreground">
                        Un diseño personalizado se adapta perfectamente a tu
                        marca y necesidades específicas.
                      </p>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        {[
                          'Formulario de contacto',
                          'Galería de imágenes',
                          'Blog integrado',
                          'Integración con redes sociales',
                          'Sistema de reservas',
                          'Chat en vivo',
                          'Área de clientes',
                          'Multiidioma',
                          'Carrito de compras',
                          'Sistema de búsqueda avanzado',
                        ].map(function_ => (
                          <Tooltip key={function_}>
                            <TooltipTrigger asChild>
                              <div
                                className={`flex cursor-pointer items-center space-x-2 rounded-lg border p-4 hover:bg-accent ${
                                  formData.recommendedFeatures.includes(
                                    function_,
                                  )
                                    ? 'bg-accent'
                                    : ''
                                }`}
                                onClick={() => {
                                  if (
                                    formData.recommendedFeatures.includes(
                                      function_,
                                    )
                                  ) {
                                    updateFormData(
                                      'recommendedFeatures',
                                      formData.recommendedFeatures.filter(
                                        (f: string) => f !== function_,
                                      ),
                                    );
                                  } else {
                                    updateFormData('recommendedFeatures', [
                                      ...formData.recommendedFeatures,
                                      function_,
                                    ]);
                                  }
                                }}
                              >
                                <Checkbox
                                  checked={formData.recommendedFeatures.includes(
                                    function_,
                                  )}
                                  onCheckedChange={() => {}}
                                />
                                <Label>{function_}</Label>
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>
                                Añade {function_.toLowerCase()} a tu sitio web
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {step === 4 && (
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <Label className="text-lg font-medium">
                        Plazo de entrega
                      </Label>
                      <div className="space-y-4">
                        <Slider
                          min={15}
                          max={90}
                          step={1}
                          value={[formData.plazo]}
                          onValueChange={value =>
                            updateFormData('plazo', value[0])
                          }
                          className="mt-2"
                        />
                        <div className="flex justify-between text-sm text-muted-foreground">
                          <span>15 días</span>
                          <span>{formData.plazo} días</span>
                          <span>90 días</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <Label className="text-lg font-medium">
                        Servicios adicionales
                      </Label>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Label htmlFor="mantenimiento">
                              Mantenimiento mensual
                            </Label>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <InfoIcon className="h-4 w-4 text-muted-foreground" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Incluye actualizaciones y soporte técnico</p>
                              </TooltipContent>
                            </Tooltip>
                          </div>
                          <Switch
                            id="mantenimiento"
                            checked={formData.mantenimiento}
                            onCheckedChange={checked =>
                              updateFormData('mantenimiento', checked)
                            }
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Label htmlFor="seo">Optimización SEO</Label>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <InfoIcon className="h-4 w-4 text-muted-foreground" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>
                                  Mejora la visibilidad de tu sitio en los
                                  motores de búsqueda
                                </p>
                              </TooltipContent>
                            </Tooltip>
                          </div>
                          <Switch
                            id="seo"
                            checked={formData.seo}
                            onCheckedChange={checked =>
                              updateFormData('seo', checked)
                            }
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Label htmlFor="hosting">Hosting incluido</Label>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <InfoIcon className="h-4 w-4 text-muted-foreground" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>
                                  Alojamiento web de alta velocidad y confiable
                                </p>
                              </TooltipContent>
                            </Tooltip>
                          </div>
                          <Switch
                            id="hosting"
                            checked={formData.hosting}
                            onCheckedChange={checked =>
                              updateFormData('hosting', checked)
                            }
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Label htmlFor="dominio">
                              Dominio personalizado
                            </Label>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <InfoIcon className="h-4 w-4 text-muted-foreground" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>
                                  Registro y configuración de tu dominio propio
                                </p>
                              </TooltipContent>
                            </Tooltip>
                          </div>
                          <Switch
                            id="dominio"
                            checked={formData.dominio}
                            onCheckedChange={checked =>
                              updateFormData('dominio', checked)
                            }
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Label htmlFor="integracionExterna">
                              Integración con sistemas externos
                            </Label>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <InfoIcon className="h-4 w-4 text-muted-foreground" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>
                                  Conecta tu sitio con CRM, ERP u otras
                                  plataformas
                                </p>
                              </TooltipContent>
                            </Tooltip>
                          </div>
                          <Switch
                            id="integracionExterna"
                            checked={formData.integracionExterna}
                            onCheckedChange={checked =>
                              updateFormData('integracionExterna', checked)
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {step === 5 && (
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">
                        Correo Electrónico{' '}
                        <span className="text-destructive">*</span>
                      </Label>
                      <div className="relative">
                        <Input
                          id="email"
                          type="email"
                          className="peer pe-9"
                          value={formData.email}
                          onChange={event =>
                            updateFormData('email', event.target.value)
                          }
                          placeholder="tu@email.com"
                        />
                        <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-muted-foreground/80 peer-disabled:opacity-50">
                          <Mail size={16} strokeWidth={2} aria-hidden="true" />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="descripcion">
                        Descripción adicional{' '}
                        <span className="text-muted-foreground">
                          (Opcional)
                        </span>
                      </Label>
                      <Textarea
                        id="descripcion"
                        value={formData.descripcion}
                        onChange={event =>
                          updateFormData('descripcion', event.target.value)
                        }
                        placeholder="Cuéntanos más sobre tu proyecto..."
                      />
                      <p
                        className="mt-2 text-xs text-muted-foreground"
                        role="region"
                        aria-live="polite"
                      >
                        Agrega todos los detalles que consideres necesarios
                      </p>
                    </div>

                    <div className="mt-6 space-y-2 rounded-lg bg-accent p-6">
                      <h3 className="text-lg font-semibold">
                        Resumen de tu cotización
                      </h3>
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                          <AccordionTrigger className="text-sm">
                            Detalles del proyecto
                          </AccordionTrigger>
                          <AccordionContent>
                            <ul className="space-y-2 text-xs">
                              <li className="flex justify-between">
                                <span>Tipo de sitio:</span>
                                <span className="font-medium">
                                  {formData.template || 'No seleccionado'}
                                </span>
                              </li>
                              <li className="flex justify-between">
                                <span>Secciónes:</span>
                                <span className="text-right font-medium">
                                  {formData.sections.join(', ') || 'Ninguna'}
                                </span>
                              </li>
                              <li className="flex justify-between">
                                <span>Diseño personalizado:</span>
                                <span className="font-medium">
                                  {formData.disenoPersonalizado ? 'Sí' : 'No'}
                                </span>
                              </li>
                              <li className="flex justify-between">
                                <span>recommendedFeatures:</span>
                                <span className="text-right font-medium">
                                  {formData.recommendedFeatures.length > 0
                                    ? formData.recommendedFeatures.join(', ')
                                    : 'Ninguna'}
                                </span>
                              </li>
                              <li className="flex justify-between">
                                <span>Plazo de entrega:</span>
                                <span className="font-medium">
                                  {formData.plazo} días
                                </span>
                              </li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                          <AccordionTrigger className="text-sm">
                            Servicios adicionales
                          </AccordionTrigger>
                          <AccordionContent>
                            <ul className="space-y-2 text-xs">
                              <li className="flex justify-between">
                                <span>Mantenimiento mensual:</span>
                                <span className="font-medium">
                                  {formData.mantenimiento ? 'Sí' : 'No'}
                                </span>
                              </li>
                              <li className="flex justify-between">
                                <span>Optimización SEO:</span>
                                <span className="font-medium">
                                  {formData.seo ? 'Sí' : 'No'}
                                </span>
                              </li>
                              <li className="flex justify-between">
                                <span>Hosting incluido:</span>
                                <span className="font-medium">
                                  {formData.hosting ? 'Sí' : 'No'}
                                </span>
                              </li>
                              <li className="flex justify-between">
                                <span>Dominio personalizado:</span>
                                <span className="font-medium">
                                  {formData.dominio ? 'Sí' : 'No'}
                                </span>
                              </li>
                              <li className="flex justify-between">
                                <span>Integración con sistemas externos:</span>
                                <span className="font-medium">
                                  {formData.integracionExterna ? 'Sí' : 'No'}
                                </span>
                              </li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                      <div className="pt-4">
                        <div className="flex items-center justify-between">
                          <span className="text-xl font-semibold">
                            Precio estimado:
                          </span>
                          <span className="text-3xl font-bold">${price}</span>
                        </div>
                        <p className="mt-2 text-xs text-muted-foreground">
                          Este precio es aproximado y puede variar según tus
                          necesidades.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </CardContent>

          <CardFooter className="flex justify-between">
            {step > 1 && (
              <Button
                className="group"
                variant="outline"
                onClick={handlePrevious}
              >
                <ArrowLeft className="opacity-60" aria-hidden="true" />
                Anterior
              </Button>
            )}
            {step < 5 ? (
              <Button className="group" onClick={handleNext}>
                Siguiente
                <ArrowRight className="opacity-60" aria-hidden="true" />
              </Button>
            ) : (
              <Button>
                <Mail
                  className="opacity-60"
                  strokeWidth={2}
                  aria-hidden="true"
                />
                Enviar Cotización
              </Button>
            )}
          </CardFooter>
        </Card>
      </Container>
    </TooltipProvider>
  );
}
