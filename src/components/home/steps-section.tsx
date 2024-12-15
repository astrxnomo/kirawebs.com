import { Code, Megaphone, PhoneCall, Rocket, Search } from 'lucide-react';

import Container from '@/components/home/container';
import { Card } from '@/components/ui/card';

const data = {
  id: 'steps',
  title: 'Nuestro Proceso de Desarrollo',
  description:
    'Acompañamos tu proyecto desde la idea inicial hasta la entrega final, asegurando calidad en cada etapa.',
  button: {
    text: 'Contáctanos',
    icon: PhoneCall,
  },
};

const stepsData = [
  {
    step: 1,
    title: 'Investigación y Análisis',
    description:
      'Comprendemos tus necesidades y analizamos el mercado para ofrecerte la mejor solución.',
    icon: Search,
  },
  {
    step: 2,
    title: 'Diseño Creativo',
    description:
      'Creamos diseños innovadores y funcionales que se adaptan a tus objetivos y a tu audiencia.',
    icon: Code,
  },
  {
    step: 3,
    title: 'Desarrollo y Pruebas',
    description:
      'Desarrollamos tu producto con las últimas tecnologías y realizamos pruebas exhaustivas para garantizar su calidad.',
    icon: Rocket,
  },
  {
    step: 4,
    title: 'Entrega y Soporte',
    description:
      'Entregamos tu producto final y ofrecemos soporte continuo para asegurar su éxito a largo plazo.',
    icon: Megaphone,
  },
];

export function StepsSection() {
  return (
    <Container id={data.id} title={data.title} description={data.description}>
      <div className="relative">
        <div
          className="absolute left-6 top-12 h-[calc(100%-48px)] w-0.5 bg-primary/30 lg:left-0 lg:top-1/2 lg:h-0.5 lg:w-full"
          aria-hidden="true"
        />
        <div className="relative z-10 flex flex-col space-y-8 lg:flex-row lg:justify-between lg:space-y-0">
          {stepsData.map(step => (
            <div
              key={step.title}
              className="flex w-full items-start lg:flex-col lg:items-center lg:px-4"
            >
              <div className="mr-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground lg:mb-4">
                {step.step}
              </div>
              <Card className="h-full p-6">
                <step.icon className="mb-4 h-6 w-6 text-primary" />
                <h3 className="mb-2 font-bold">{step.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
