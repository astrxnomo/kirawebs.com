import { PricingFeature } from '@/components/home/pricing/pricing-feature';
import { PricingTier } from '@/components/home/pricing/pricing-tier';
import { Card } from '@/components/ui/card';

import Container from './container';

const pricingPlans = [
  {
    title: 'Esencial',
    description:
      'Página web simple y funcional para negocios pequeños y emprendedores.',
    price: '$800k',
    pricePeriod: '/ unico pago',
    buttonText: 'Try it',
  },
  {
    title: 'Pro',
    description:
      'Página web profesional en línea con diseño optimizado y dinámico.',
    price: '$40',
    pricePeriod: '/ month',
    buttonText: 'Try it',
  },
  {
    title: 'Premium',
    description:
      'Paginas web personalizada con soporte técnico y diseño avanzado a medida.',
    price: '',
    pricePeriod: '',
    buttonText: 'Contact us',
  },
];

const pricingFeatures = [
  { feature: 'SSO', plans: ['check', 'check', 'check'] },
  { feature: 'AI Assistant', plans: ['minus', 'check', 'check'] },
  { feature: 'Version Control', plans: ['minus', 'check', 'check'] },
  { feature: 'Members', plans: ['5 members', '25 members', '100+ members'] },
  { feature: 'Multiplayer Mode', plans: ['minus', 'check', 'check'] },
  { feature: 'Orchestration', plans: ['minus', 'check', 'check'] },
];

export function PricingSection() {
  return (
    <Container
      id="pricing"
      title="Precios"
      description="Elige el plan que mejor se adapte a tus necesidades"
    >
      <Card className="grid w-full grid-cols-3 items-center divide-x py-4 lg:grid-cols-4">
        <div className="col-span-3 lg:col-span-1"></div>
        {pricingPlans.map((plan, index) => (
          <PricingTier key={index} {...plan} />
        ))}

        {pricingFeatures.map((feature, index) => (
          <PricingFeature key={index} {...feature} />
        ))}
      </Card>
    </Container>
  );
}
