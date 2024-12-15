import { Check, Minus } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/utils/cn';

import Container from './container';

const data = {
  id: 'compare',
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
    <Container id={data.id} title={data.title} description={data.description}>
      <Card>
        <div className="flex">
          <div className="bg-muted/20 p-4 sm:w-1/2 sm:p-6 md:w-2/5 lg:w-1/3">
            <h3 className="mb-4 text-base font-semibold sm:text-lg">
              Características
            </h3>
            {data.features.map((feature, index) => (
              <div
                key={feature}
                className={cn(
                  'py-3 text-xs sm:text-sm lg:text-base',
                  index !== 0 && 'border-t border-border',
                )}
              >
                {feature}
              </div>
            ))}
          </div>
          <div className="flex flex-1 divide-x divide-border">
            {data.comparisons.map(comparison => (
              <div key={comparison.name} className="flex-1 p-4 sm:p-6">
                <h3 className="mb-4 text-center text-base font-semibold sm:text-lg">
                  {comparison.name}
                </h3>
                {comparison.features.map((hasFeature, index) => (
                  <div
                    key={`${comparison.name}-${index}`}
                    className={cn(
                      'flex items-center justify-center py-3 md:py-3.5',
                      index !== 0 && 'border-t border-border',
                    )}
                  >
                    {hasFeature ? (
                      <Check className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
                    ) : (
                      <Minus className="h-4 w-4 text-muted-foreground sm:h-5 sm:w-5" />
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Card>
    </Container>
  );
}
