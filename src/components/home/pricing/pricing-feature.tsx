import { Check, Minus } from 'lucide-react';

interface PricingFeatureProps {
  feature: string;
  plans: ('check' | 'minus' | string)[];
}

export function PricingFeature({ feature, plans }: PricingFeatureProps) {
  return (
    <>
      <div className="col-span-3 px-4 py-3 md:px-6 lg:col-span-1">
        {feature}
      </div>
      {plans.map((plan, index) => (
        <div key={index} className="flex justify-center px-6 py-1 md:py-4">
          {plan === 'check' ? (
            <Check className="h-4 w-4 text-primary" />
          ) : plan === 'minus' ? (
            <Minus className="h-4 w-4 text-muted-foreground" />
          ) : (
            <span className="text-sm text-muted-foreground">{plan}</span>
          )}
        </div>
      ))}
    </>
  );
}
