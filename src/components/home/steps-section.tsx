import { PhoneCall } from 'lucide-react';
import Image from 'next/image';

import { Button } from '@/components/ui/button';

const stepsData = [
  {
    step: 1,
    title: 'Investigación y Análisis de Mercado:',
    description:
      'Identificar tu audiencia objetivo y comprender sus necesidades, preferencias y comportamientos.',
  },
  {
    step: 2,
    title: 'Desarrollo y Pruebas de Producto:',
    description:
      'Desarrollar productos o servicios digitales que aborden las necesidades y preferencias de tu audiencia objetivo.',
  },
  {
    step: 3,
    title: 'Marketing y Promoción:',
    description:
      'Desarrollar una estrategia de marketing integral para promover tus productos o servicios digitales.',
  },
  {
    step: 4,
    title: 'Lanzamiento y Optimización:',
    description:
      'Lanzar tus productos o servicios digitales al mercado, monitoreando de cerca su rendimiento y la retroalimentación de los usuarios.',
  },
];

const sectionData = {
  title: 'Contacta con Nosotros',
  description:
    'Estamos aquí para ayudarte a hacer realidad tu próximo proyecto',
  image: {
    src: '/steps.svg',
    alt: 'Ilustración de desarrollo',
    width: 600,
    height: 600,
  },
  button: {
    text: 'Programar una llamada',
    icon: PhoneCall,
  },
};

export function StepsSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 xl:px-0">
        <div className="md-3 mx-auto max-w-3xl text-center lg:mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {sectionData.title}
          </h2>
          <p className="mt-4 text-lg">{sectionData.description}</p>
        </div>
        <div className="container mx-auto grid gap-2 px-6 lg:grid-cols-2 lg:px-32">
          <div className="flex w-full items-center justify-center">
            <Image
              src={sectionData.image.src}
              alt={sectionData.image.alt}
              width={sectionData.image.width}
              height={sectionData.image.height}
              className="w-full max-w-lg lg:max-w-none"
              priority
            />
          </div>

          <div>
            <div className="mb-4">
              <h3 className="text-xs font-semibold uppercase text-primary">
                Pasos
              </h3>
            </div>

            {stepsData.map(({ step, title, description }) => (
              <div key={step} className="mb-8 flex gap-x-5 last:mb-0">
                <div className="relative">
                  <div className="flex size-8 items-center justify-center rounded-full border-2 border-primary text-xs font-bold uppercase text-primary">
                    {step}
                  </div>
                  {step < stepsData.length && (
                    <div className="absolute left-1/2 top-8 h-full w-0.5 -translate-x-1/2 bg-primary"></div>
                  )}
                </div>
                <div className="grow">
                  <p className="text-sm lg:text-base">
                    <span className="font-semibold">{title}</span> {description}
                  </p>
                </div>
              </div>
            ))}

            <Button className="mt-8 flex items-center gap-2">
              <sectionData.button.icon />
              {sectionData.button.text}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
