import { Check, Minus } from 'lucide-react';

interface PricingFeatureProps {
  feature: string;
  plans: ('check' | 'minus' | string)[];
}

export function PricingFeature({ feature, plans }: PricingFeatureProps) {
  return (
    <>
      <div className="col-span-3 p-2 lg:col-span-1">{feature}</div>
      {plans.map((plan, index) => (
        <div
          key={index}
          className="flex justify-center px-3 py-1 md:px-6 md:py-4"
        >
          {plan === 'check' && <Check className="h-4 w-4 text-primary" />}
          {plan === 'minus' && (
            <Minus className="h-4 w-4 text-muted-foreground" />
          )}
        </div>
      ))}
    </>
  );
}
