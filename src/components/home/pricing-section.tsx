import { MoveRight, PhoneCall } from 'lucide-react';

import { PricingCard } from '@/components/home/pricing/pricing-card';
import { PricingFeature } from '@/components/home/pricing/pricing-feature';
import { Card } from '@/components/ui/card';

import Container from './container';

const pricingPlans = [
  {
    title: 'Startup',
    description:
      'Our goal is to streamline SMB trade, making it easier and faster than ever for everyone and everywhere.',
    price: '$40',
    pricePeriod: '/ month',
    buttonText: 'Try it',
  },
  {
    title: 'Growth',
    description:
      'Our goal is to streamline SMB trade, making it easier and faster than ever for everyone and everywhere.',
    price: '$40',
    pricePeriod: '/ month',
    buttonText: 'Try it',
  },
  {
    title: 'Enterprise',
    description:
      'Our goal is to streamline SMB trade, making it easier and faster than ever for everyone and everywhere.',
    price: '$40',
    pricePeriod: '/ month',
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
      title="Pricing"
      description="Choose the best plan for your business"
    >
      <div className="grid w-full grid-cols-3 divide-x p-6 text-left lg:grid-cols-4">
        <div className="col-span-3 lg:col-span-1"></div>
        {pricingPlans.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
        {pricingFeatures.map((feature, index) => (
          <PricingFeature key={index} {...feature} />
        ))}
      </div>
    </Container>
  );
}
