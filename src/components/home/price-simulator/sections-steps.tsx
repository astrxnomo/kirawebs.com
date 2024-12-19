import { PlusIcon, X } from 'lucide-react';
import { useState } from 'react';

import {
  type SimulationPriceFormData,
  type UpdateFormDataFunction,
} from '@/components/home/price-simulator/price-simulation-form';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function SectionsStep({
  formData,
  updateFormData,
}: {
  formData: SimulationPriceFormData;
  updateFormData: UpdateFormDataFunction;
}) {
  const [newSection, setNewSection] = useState('');

  const addSection = () => {
    if (newSection && !formData.sections.includes(newSection)) {
      updateFormData('sections', [...formData.sections, newSection]);
      setNewSection('');
    }
  };

  const removeSection = (section: string) => {
    updateFormData(
      'sections',
      formData.sections.filter(s => s !== section),
    );
  };

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <Label className="text-lg font-medium">Secciónes del sitio</Label>
        <div className="flex flex-wrap gap-2">
          {formData.sections.map(section => (
            <Badge key={section}>
              {section}
              <button
                className="-my-px -me-1.5 -ms-px inline-flex size-5 shrink-0 items-center justify-center rounded-[inherit] p-0 opacity-60 transition-opacity hover:opacity-100"
                onClick={() => removeSection(section)}
              >
                <X size={12} strokeWidth={2} aria-hidden="true" />
              </button>
            </Badge>
          ))}
        </div>
        <div className="flex gap-2">
          <Input
            value={newSection}
            onChange={event => setNewSection(event.target.value)}
            placeholder="Nueva Sección"
          />
          <Button onClick={addSection} type="button">
            <PlusIcon className="h-4 w-4" /> Añadir
          </Button>
        </div>
      </div>
    </div>
  );
}
