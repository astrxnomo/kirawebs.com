import { Check, Minus } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/utils/cn';

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
      name: 'Kira',
      features: [true, true, true, true, true, true],
    },
    {
      name: 'Otros',
      features: [true, true, false, false, false, false],
    },
  ],
};

export function CompareSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6 lg:px-32">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {data.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-600">
            {data.description}
          </p>
        </div>
        <Card className="mx-auto max-w-4xl overflow-hidden transition-shadow hover:shadow-lg">
          <CardContent className="p-0">
            <div className="grid grid-cols-3 divide-x divide-y-0 divide-gray-200">
              <div className="bg-gray-50 p-4 sm:p-6">
                <h3 className="mb-4 truncate text-lg font-semibold">
                  Características
                </h3>
                {data.features.map((feature, index) => (
                  <div
                    key={feature}
                    className={cn(
                      'py-3 text-xs lg:text-base',
                      index !== 0 && 'border-t border-gray-200',
                    )}
                  >
                    {feature}
                  </div>
                ))}
              </div>
              {data.comparisons.map(comparison => (
                <div key={comparison.name} className="p-4 sm:p-6">
                  <h3 className="mb-4 text-center text-lg font-semibold">
                    {comparison.name}
                  </h3>
                  {comparison.features.map((hasFeature, index) => (
                    <div
                      key={`${comparison.name}-${index}`}
                      className={cn(
                        'flex items-center justify-center py-2.5 lg:py-3.5',
                        index !== 0 && 'border-t border-gray-200',
                      )}
                    >
                      {hasFeature ? (
                        <Check className="h-5 w-5 text-primary" />
                      ) : (
                        <Minus className="h-5 w-5 text-gray-300" />
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
