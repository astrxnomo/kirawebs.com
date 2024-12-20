import React, { createContext, useContext, useState } from 'react';

export type SimulationPriceFormData = {
  template: string;
  sections: string[];
  recommendedFeatures: string[];
  plazo: number;
  mantenimiento: boolean;
  seo: boolean;
  hosting: boolean;
  dominio: boolean;
  integracionExterna: boolean;
  email: string;
  descripcion: string;
};

type UpdateFormDataFunction = <K extends keyof SimulationPriceFormData>(
  field: K,
  value: SimulationPriceFormData[K],
) => void;

interface PriceSimulatorContextProps {
  formData: SimulationPriceFormData;
  updateFormData: UpdateFormDataFunction;
}

const PriceSimulatorContext = createContext<
  PriceSimulatorContextProps | undefined
>(undefined);

export const PriceSimulatorProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [formData, setFormData] = useState<SimulationPriceFormData>({
    template: '',
    sections: [],
    recommendedFeatures: [],
    plazo: 60,
    mantenimiento: false,
    seo: false,
    hosting: false,
    dominio: false,
    integracionExterna: false,
    email: '',
    descripcion: '',
  });

  const updateFormData: UpdateFormDataFunction = (field, value) => {
    setFormData(previous => ({ ...previous, [field]: value }));
  };

  return (
    <PriceSimulatorContext.Provider value={{ formData, updateFormData }}>
      {children}
    </PriceSimulatorContext.Provider>
  );
};

export const usePriceSimulator = () => {
  const context = useContext(PriceSimulatorContext);
  if (!context) {
    throw new Error(
      'usePriceSimulator must be used within a PriceSimulatorProvider',
    );
  }
  return context;
};
