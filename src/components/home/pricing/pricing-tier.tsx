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

export function PricingTier({
  title,
  description,
  price,
  pricePeriod,
  buttonText,
}: PricingCardProps) {
  return (
    <div className="flex h-full flex-col gap-2 px-3 py-1 md:px-6 md:py-2">
      <p className="truncate text-2xl font-semibold">{title}</p>
      <p className="text-sm text-muted-foreground">{description}</p>
      <p className="mt-3 flex flex-col gap-2 text-xl xl:flex-row xl:items-center">
        <span className="text-2xl md:text-4xl">{price}</span>
        <span className="text-sm text-muted-foreground">{pricePeriod}</span>
      </p>
      <div className="flex-grow"></div>
      <Button className="mt-4">{buttonText}</Button>
    </div>
  );
}
