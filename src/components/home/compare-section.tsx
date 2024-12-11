import { Check } from 'lucide-react';

import { Card, CardContent } from '../ui/card';

const data = {
  title: 'Por Qué Elegirnos',
  description: 'Comparación de características y servicios',
  features: [
    'Diseño Responsivo',
    'Optimización SEO',
    'Panel de Administración',
    'Soporte 24/7',
    'Análisis de Datos',
    'Seguridad Avanzada',
  ],
  comparisons: [
    {
      name: 'Otros',
      features: [true, true, false, false, false, false],
    },
    {
      name: 'Kira',
      features: [true, true, true, true, true, true],
    },
  ],
};

export function CompareSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6 lg:px-32">
        <div className="mb-12 text-center">
          <h2 className="p-1 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {data.title}
          </h2>
          <p className="mt-4 md:text-xl">{data.description}</p>
        </div>
        <Card className="mx-auto max-w-4xl overflow-hidden">
          <CardContent className="pt-6">
            <div className="grid grid-cols-3 gap-4">
              <div className="text-lg font-medium text-gray-700">
                Características
              </div>
              {data.comparisons.map(comparison => (
                <div
                  key={comparison.name}
                  className="text-center text-lg font-medium text-gray-700"
                >
                  {comparison.name}
                </div>
              ))}
              {data.features.map((feature, featureIndex) => (
                <div key={feature} className="contents">
                  <div className="border-t border-gray-200 py-4">{feature}</div>
                  {data.comparisons.map((comparison, comparisonIndex) => (
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
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
