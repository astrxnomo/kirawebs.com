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
      <p className="truncate text-xl font-semibold md:text-2xl">{title}</p>
      <p className="text-xs text-muted-foreground md:text-sm">{description}</p>
      <p className="mt-3 flex flex-col gap-2 text-xl xl:flex-row xl:items-center">
        <span className="text-xl font-medium md:text-4xl">{price}</span>
        <span className="text-xs text-muted-foreground md:text-sm">{pricePeriod}</span>
      </p>
      <div className="grow"></div>
      <Button className="mt-4">{buttonText}</Button>
    </div>
  );
}
