'use client';

import { ChevronDown, Mail, Phone } from 'lucide-react';
import { forwardRef, useState } from 'react';
import * as RPNInput from 'react-phone-number-input';
import flags from 'react-phone-number-input/flags';

import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/utils/cn';

import { Button } from '../ui/button';
import { Checkbox } from '../ui/checkbox';
import { Textarea } from '../ui/textarea';
import Container from './container';

const data = {
  title: 'Contacto',
  description: 'Ponte en contacto con nosotros para más información.',
  contactMethods: [
    {
      icon: Mail,
      title: 'Email',
      details: 'info@kirawebs.com',
    },
  ],
  mapSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16258048.38473994!2d-85.00482797945533!3d5.820311668188996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e15a43aae1594a3%3A0x9a0d9a04eff2a340!2sColombia!5e0!3m2!1ses-419!2sco!4v1734294789361!5m2!1ses-419!2sco',
};

export function ContactSection() {
  const [phoneValue, setPhoneValue] = useState('');

  return (
    <Container
      id="contact"
      title={data.title}
      description={data.description}
      className="mb-20"
    >
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <Card className="p-6">
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="input-10">
                  Email <span className="text-destructive">*</span>
                </Label>
                <div className="relative">
                  <Input
                    id="input-10"
                    className="peer pe-9"
                    placeholder="tu@correo.com"
                    type="email"
                  />
                  <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-muted-foreground/80 peer-disabled:opacity-50">
                    <Mail size={16} strokeWidth={2} aria-hidden="true" />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="input-04" className="leading-6">
                  Telefono
                </Label>
                <RPNInput.default
                  className="flex rounded-lg shadow-sm shadow-black/5"
                  international
                  flagComponent={FlagComponent}
                  countrySelectComponent={CountrySelect}
                  inputComponent={PhoneInput}
                  id="phone"
                  placeholder="Enter phone number"
                  value={phoneValue}
                  onChange={newValue => setPhoneValue(newValue ?? '')}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="textarea-03">
                  Descripción <span className="text-destructive">*</span>
                </Label>
                <Textarea
                  id="textarea-03"
                  placeholder="Escribe una descripción"
                />
                <p
                  className="mt-2 text-xs text-muted-foreground"
                  role="region"
                  aria-live="polite"
                >
                  Agrega todos los detalles que consideres necesarios
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="checkbox-07" />
                <Label htmlFor="checkbox-07">
                  Acepto la{' '}
                  <a
                    className="underline"
                    href="https://originui.com"
                    target="_blank"
                  >
                    politica de privacidad
                  </a>{' '}
                  y el{' '}
                  <a
                    className="underline"
                    href="https://originui.com"
                    target="_blank"
                  >
                    tratamiento de datos
                  </a>{' '}
                  <span className="text-destructive">*</span>
                </Label>
              </div>
              <Button type="submit" className="w-full">
                Enviar
              </Button>
            </form>
          </Card>
        </div>
        <Card className="p-6">
          <div>
            <iframe
              src={data.mapSrc}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </div>
        </Card>
      </div>
    </Container>
  );
}

const PhoneInput = forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
  ({ className, ...props }, ref) => {
    return (
      <Input
        className={cn(
          '-ms-px rounded-s-none shadow-none focus-visible:z-10',
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);

PhoneInput.displayName = 'PhoneInput';

type CountrySelectProps = {
  disabled?: boolean;
  value: RPNInput.Country;
  onChange: (value: RPNInput.Country) => void;
  options: { label: string; value: RPNInput.Country | undefined }[];
};

const CountrySelect = ({
  disabled,
  value,
  onChange,
  options,
}: CountrySelectProps) => {
  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value as RPNInput.Country);
  };

  return (
    <div className="relative inline-flex items-center self-stretch rounded-s-lg border border-input bg-background py-2 pe-2 ps-3 text-muted-foreground transition-shadow focus-within:z-10 focus-within:border-ring focus-within:outline-none focus-within:ring-[3px] focus-within:ring-ring/20 hover:bg-accent hover:text-foreground has-[:disabled]:pointer-events-none has-[:disabled]:opacity-50">
      <div className="inline-flex items-center gap-1" aria-hidden="true">
        <FlagComponent country={value} countryName={value} aria-hidden="true" />
        <span className="text-muted-foreground/80">
          <ChevronDown size={16} strokeWidth={2} aria-hidden="true" />
        </span>
      </div>
      <select
        disabled={disabled}
        value={value}
        onChange={handleSelect}
        className="absolute inset-0 text-sm opacity-0"
        aria-label="Select country"
      >
        <option key="default" value="">
          Select a country
        </option>
        {options
          .filter(x => x.value)
          .map((option, index) => (
            <option key={option.value ?? `empty-${index}`} value={option.value}>
              {option.label}{' '}
              {option.value &&
                `+${RPNInput.getCountryCallingCode(option.value)}`}
            </option>
          ))}
      </select>
    </div>
  );
};

const FlagComponent = ({ country, countryName }: RPNInput.FlagProps) => {
  const Flag = flags[country];

  return (
    <span className="w-5 overflow-hidden rounded-sm">
      {Flag ? (
        <Flag title={countryName} />
      ) : (
        <Phone size={16} aria-hidden="true" />
      )}
    </span>
  );
};
