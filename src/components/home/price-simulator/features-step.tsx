import {
  type SimulationPriceFormData,
  type UpdateFormDataFunction,
} from '@/components/home/price-simulator/price-simulation-form';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const FEATURES = [
  'Formulario de contacto',
  'Galería de imágenes',
  'Blog integrado',
  'Integración con redes sociales',
  'Sistema de reservas',
  'Chat en vivo',
  'Área de clientes',
  'Multiidioma',
  'Carrito de compras',
  'Sistema de búsqueda avanzado',
];

export function FeaturesStep({
  formData,
  updateFormData,
}: {
  formData: SimulationPriceFormData;
  updateFormData: UpdateFormDataFunction;
}) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        {FEATURES.map(feature => (
          <Tooltip key={feature}>
            <TooltipTrigger asChild>
              <div
                className={`flex cursor-pointer items-center space-x-2 rounded-lg border p-4 hover:bg-accent ${
                  formData.recommendedFeatures.includes(feature)
                    ? 'bg-accent'
                    : ''
                }`}
                onClick={() => {
                  const newFeatures = formData.recommendedFeatures.includes(
                    feature,
                  )
                    ? formData.recommendedFeatures.filter(f => f !== feature)
                    : [...formData.recommendedFeatures, feature];
                  updateFormData('recommendedFeatures', newFeatures);
                }}
              >
                <Checkbox
                  checked={formData.recommendedFeatures.includes(feature)}
                  onCheckedChange={() => {}}
                />
                <Label>{feature}</Label>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Añade {feature.toLowerCase()} a tu sitio web</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </div>
  );
}
