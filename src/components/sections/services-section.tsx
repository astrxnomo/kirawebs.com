'use client';

import { motion } from 'framer-motion';
import { Code2, ShoppingBag, Smartphone, Wrench } from 'lucide-react';

import { Card } from '@/components/ui/card';

const services = [
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
];

export function ServicesSection() {
  return (
    <section id="servicios" className="bg-muted/50 py-24">
      <div className="container mx-auto px-6 lg:px-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-[900px] text-center"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Nuestros servicios
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Estamos aquí para ayudarte a hacer realidad tu próximo proyecto
          </p>
        </motion.div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full p-6 transition-shadow hover:shadow-lg">
                <div className="mb-4">{service.icon}</div>
                <h3 className="mb-2 text-xl font-bold">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
                <a
                  href="#"
                  className="mt-4 inline-flex items-center text-primary hover:underline"
                >
                  Saber más →
                </a>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
