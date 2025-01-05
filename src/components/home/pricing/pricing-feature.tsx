import { Check, Minus } from 'lucide-react';

interface PricingFeatureProps {
  feature: string;
  plans: ('check' | 'minus' | string)[];
}

export function PricingFeature({ feature, plans }: PricingFeatureProps) {
  return (
    <>
      <div className="col-span-3 px-4 py-1 md:px-6 md:py-3 lg:col-span-1">
        <span className="text-sm">{feature}</span>
      </div>
      {plans.map((plan, index) => (
        <div key={index} className="flex justify-center px-6 py-1 md:py-4">
          {plan === 'check' ? (
            <Check className="size-4 text-primary" />
          ) : plan === 'minus' ? (
            <Minus className="size-4 text-muted-foreground" />
          ) : (
            <span className="text-xs text-muted-foreground md:text-sm">{plan}</span>
          )}
        </div>
      ))}
    </>
  );
}
