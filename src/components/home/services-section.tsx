import { Code2, ShoppingBag, Smartphone, Wrench } from 'lucide-react';

import { Card } from '@/components/ui/card';

const sectionData = {
  id: 'servicios',
  title: 'Nuestros servicios',
  description:
    'Estamos aquí para ayudarte a hacer realidad tu próximo proyecto',
  services: [
    {
      icon: <Code2 className="h-10 w-10 text-primary" />,
      title: 'Desarrollo Web Personalizado',
      description:
        'Sitios web únicos y a medida que reflejan la identidad de tu marca.',
    },
    {
      icon: <ShoppingBag className="h-10 w-10 text-primary" />,
      title: 'E-commerce & Plataformas Online',
      description: 'Tiendas online optimizadas para maximizar tus ventas.',
    },
    {
      icon: <Smartphone className="h-10 w-10 text-primary" />,
      title: 'Aplicaciones Web Progresivas',
      description: 'Apps modernas que funcionan en cualquier dispositivo.',
    },
    {
      icon: <Wrench className="h-10 w-10 text-primary" />,
      title: 'Mantenimiento & Optimización',
      description:
        'Soporte continuo para mantener tu sitio actualizado y seguro.',
    },
  ],
};

export function ServicesSection() {
  return (
    <section id={sectionData.id} className="py-24">
      <div className="container mx-auto px-6 lg:px-32">
        <div className="mx-auto mb-16 max-w-[900px] text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {sectionData.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {sectionData.description}
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {sectionData.services.map((service, index) => (
            <Card
              key={index}
              className="h-full p-6 transition-shadow hover:shadow-lg"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="mb-2 text-xl font-bold">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
