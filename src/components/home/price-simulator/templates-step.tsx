import {
  Briefcase,
  Building,
  Code,
  Layout,
  Pen,
  Star,
  User,
} from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

import { usePriceSimulator } from './price-simulator-provider';

const templates = {
  sencilla: {
    icon: Layout,
    sections: [],
    description: 'Ideal para sitios web simples y directos',
    recommendedFeatures: [],
  },
  emprendedor: {
    icon: Briefcase,
    sections: ['Acerca de', 'Servicios', 'Contacto'],
    description: 'Ideal para pequeños negocios y emprendimientos',
    recommendedFeatures: [
      'Formulario de contacto',
      'Integración con redes sociales',
    ],
  },
  corporativo: {
    icon: Building,
    sections: ['Historia', 'Servicios', 'Contacto'],
    description: 'Ideal para empresas y corporaciones',
    recommendedFeatures: [
      'Formulario de contacto',
      'Galería de imágenes',
      'Blog integrado',
    ],
  },
  blog: {
    icon: Pen,
    sections: ['Acerca de', 'Contacto'],
    description: 'Ideal para bloggers y creadores de contenido',
    recommendedFeatures: [
      'Blog integrado',
      'Sistema de búsqueda avanzado',
      'Integración con redes sociales',
    ],
  },
  personal: {
    icon: User,
    sections: ['Servicios', 'Proyectos', 'Acerca de', 'Contacto'],
    description: 'Ideal para portafolios personales y freelancers',
    recommendedFeatures: ['Galería de imágenes', 'Formulario de contacto'],
  },
  ninguna: {
    icon: Code,
    sections: [],
    description: 'Ideal si quieres un sitio web completamente personalizado',
    recommendedFeatures: [],
  },
};

export function TemplatesStep() {
  const { formData, updateFormData } = usePriceSimulator();

  return (
    <div className="space-y-6">
      <RadioGroup
        className="grid grid-cols-2 gap-4 md:grid-cols-3"
        value={formData.template}
        onValueChange={(value: keyof typeof templates) => {
          updateFormData('template', value);
          updateFormData('sections', templates[value]?.sections || []);
          updateFormData(
            'recommendedFeatures',
            templates[value]?.recommendedFeatures || [],
          );
        }}
      >
        {(Object.keys(templates) as Array<keyof typeof templates>).map(
          template => (
            <div
              key={template}
              className="relative flex w-full items-start gap-2 rounded-lg border border-input p-4 shadow-sm shadow-black/5 transition-all duration-200 ease-in-out hover:shadow-md has-[[data-state=checked]]:border-primary has-[[data-state=checked]]:bg-primary/5"
            >
              <RadioGroupItem
                value={template}
                id={template}
                className="order-1 after:absolute after:inset-0"
              />
              <div className="flex grow items-center gap-3">
                <div className="grid gap-1">
                  <Label htmlFor={template} className="font-semibold">
                    {template.charAt(0).toUpperCase() + template.slice(1)}
                  </Label>
                  <p className="text-xs text-muted-foreground">
                    {templates[template].description}
                  </p>
                </div>
              </div>
            </div>
          ),
        )}
      </RadioGroup>
      <div className="grid grid-cols-2 gap-6">
        {formData.sections.length > 0 && (
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-foreground/5 p-3">
                <h3 className="flex items-center gap-2 text-xs font-semibold md:text-sm">
                  <Layout className="size-3 md:size-4" />
                  Secciones
                </h3>
              </div>
              <ul className="divide-y divide-border">
                {formData.sections.map((section, index) => (
                  <li
                    key={index}
                    className="px-2 py-1 text-[10px] md:px-4 md:py-2 md:text-xs"
                  >
                    {section}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}

        {formData.recommendedFeatures.length > 0 && (
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-foreground/5 p-3">
                <h3 className="flex items-center gap-2 text-xs font-semibold md:text-sm">
                  <Star className="size-3 md:size-4" />
                  Características
                </h3>
              </div>
              <ul className="divide-y divide-border">
                {formData.recommendedFeatures.map((feature, index) => (
                  <li
                    key={index}
                    className="px-2 py-1 text-[10px] md:px-4 md:py-2 md:text-xs"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
