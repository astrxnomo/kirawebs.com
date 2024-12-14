import { MoveRight, PhoneCall } from 'lucide-react';

import { Button } from '@/components/ui/button';

interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  pricePeriod: string;
  buttonText: string;
  buttonVariant?: 'outline' | 'default';
}

export function PricingCard({
  title,
  description,
  price,
  pricePeriod,
  buttonText,
}: PricingCardProps) {
  return (
    <div className="flex flex-col gap-2 px-3 py-1 md:px-6 md:py-4">
      <p className="text-2xl">{title}</p>
      <p className="text-sm text-muted-foreground">{description}</p>
      <p className="mt-8 flex flex-col gap-2 text-xl lg:flex-row lg:items-center">
        <span className="text-4xl">{price}</span>
        <span className="text-sm text-muted-foreground">{pricePeriod}</span>
      </p>
      <Button className="mt-8">{buttonText}</Button>
    </div>
  );
}
