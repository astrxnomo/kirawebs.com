import { Code, FileText, Handshake, PhoneCall, Rocket } from 'lucide-react';

import Container from '@/components/home/container';
import { Card } from '@/components/ui/card';

const data = {
  id: 'steps',
  title: 'Cómo conseguir tu página web',
  description:
    'Te guiamos a través de un proceso sencillo y efectivo para obtener la página web perfecta para tu negocio.',
  button: {
    text: 'Contáctanos',
    icon: PhoneCall,
  },
};

const stepsData = [
  {
    step: 1,
    title: 'Consulta Inicial',
    description:
      'Rellena el formulario de cotización para que podamos entender tus necesidades y ofrecerte un estimado del costo de tu página web. Solo ingresa tu correo y envíalo.',
    icon: FileText,
  },
  {
    step: 2,
    title: 'Propuesta Detallada',
    description:
      'Te enviaremos una propuesta detallada con el diseño y funcionalidades ideales para tu negocio, adaptada a tus necesidades específicas.',
    icon: Handshake,
  },
  {
    step: 3,
    title: 'Desarrollo y Ajustes',
    description:
      'Desarrollamos tu página web y te mantenemos informado durante todo el proceso. Haremos los ajustes necesarios según tus comentarios y preferencias.',
    icon: Code,
  },
  {
    step: 4,
    title: 'Lanzamiento y Soporte',
    description:
      'Lanzamos tu página web y te ofrecemos soporte constante para asegurarnos de que todo funcione a la perfección, incluso después del lanzamiento.',
    icon: Rocket,
  },
];

export function StepsSection() {
  return (
    <Container id={data.id} title={data.title} description={data.description}>
      <div className="relative">
        <div
          className="absolute left-[23px] h-full w-0.5 bg-primary lg:left-0 lg:top-6 lg:h-0.5 lg:w-full"
          aria-hidden="true"
        />
        <div className="relative z-10 flex flex-col space-y-8 lg:flex-row lg:justify-between lg:space-y-0">
          {stepsData.map(step => (
            <div
              key={step.title}
              className="flex w-full items-center lg:flex-col lg:items-center lg:px-4"
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
