import { Code, Megaphone, PhoneCall, Rocket, Search } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const stepsData = [
  {
    step: 1,
    title: 'Investigación y Análisis de Mercado',
    description:
      'Identificar tu audiencia objetivo y comprender sus necesidades, preferencias y comportamientos.',
    icon: Search,
  },
  {
    step: 2,
    title: 'Desarrollo y Pruebas de Producto',
    description:
      'Desarrollar productos o servicios digitales que aborden las necesidades y preferencias de tu audiencia objetivo.',
    icon: Code,
  },
  {
    step: 3,
    title: 'Marketing y Promoción',
    description:
      'Desarrollar una estrategia de marketing integral para promover tus productos o servicios digitales.',
    icon: Megaphone,
  },
  {
    step: 4,
    title: 'Lanzamiento y Optimización',
    description:
      'Lanzar tus productos o servicios digitales al mercado, monitoreando de cerca su rendimiento',
    icon: Rocket,
  },
];

const sectionData = {
  title: 'Contacta con Nosotros',
  description:
    'Estamos aquí para ayudarte a hacer realidad tu próximo proyecto',
  button: {
    text: 'Programar una llamada',
    icon: PhoneCall,
  },
};

export function StepsSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6 lg:px-32">
        <div className="mx-auto mb-16 max-w-[900px] text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Nuestro Proceso de Desarrollo
          </h2>
          <p className="text-lg text-muted-foreground">
            Transformamos ideas en soluciones digitales exitosas a través de
            nuestro proceso probado de cuatro pasos
          </p>
        </div>

        <div className="relative">
          <div
            className="absolute left-6 top-12 h-[calc(100%-48px)] w-0.5 bg-primary/30 lg:left-0 lg:top-1/2 lg:h-0.5 lg:w-full"
            aria-hidden="true"
          />
          <div className="relative z-10 flex flex-col space-y-8 lg:flex-row lg:justify-between lg:space-y-0">
            {stepsData.map(({ step, title, description, icon: Icon }) => (
              <div
                key={step}
                className="flex w-full items-start lg:flex-col lg:items-center lg:px-4"
              >
                <div className="mr-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground lg:mb-4">
                  {step}
                </div>
                <Card className="h-full p-6 transition-shadow hover:shadow-lg">
                  <Icon className="mb-4 h-6 w-6 text-primary" />
                  <h3 className="mb-2 text-xl font-bold">{title}</h3>
                  <p className="text-muted-foreground">{description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
