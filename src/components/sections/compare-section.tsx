'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const features = [
  'Diseño Responsivo',
  'Optimización SEO',
  'Panel de Administración',
  'Soporte 24/7',
  'Análisis de Datos',
  'Seguridad Avanzada',
];

const comparisons = [
  {
    name: 'Otros',
    features: [true, true, false, false, false, false],
  },
  {
    name: 'Kira',
    features: [true, true, true, true, true, true],
  },
];

export function CompareSection() {
  return (
    <section className="bg-muted/50 py-24">
      <div className="container mx-auto px-6 lg:px-32">
        <div className="mb-12 text-center">
          <h2 className="p-1 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Por Qué Elegirnos
          </h2>
          <p className="mt-4 md:text-xl">
            Comparación de características y servicios
          </p>
        </div>
        <div className="mx-auto max-w-4xl overflow-hidden rounded-lg bg-white shadow-lg">
          <div className="grid grid-cols-3 gap-4 p-6">
            <div className="text-lg font-medium text-gray-700">
              Características
            </div>
            {comparisons.map(comparison => (
              <div
                key={comparison.name}
                className="text-center text-lg font-medium text-gray-700"
              >
                {comparison.name}
              </div>
            ))}
            {features.map((feature, featureIndex) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: featureIndex * 0.1 }}
                viewport={{ once: true }}
                className="contents"
              >
                <div className="border-t border-gray-200 py-4">{feature}</div>
                {comparisons.map((comparison, comparisonIndex) => (
                  <div
                    key={`${comparison.name}-${feature}`}
                    className="border-t border-gray-200 py-4 text-center"
                  >
                    {comparison.features[featureIndex] ? (
                      <Check className="mx-auto text-blue-500" />
                    ) : (
                      <span className="text-gray-300">-</span>
                    )}
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
