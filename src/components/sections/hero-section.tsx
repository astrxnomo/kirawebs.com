'use client';

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="pb-8 pt-28 lg:pb-24 lg:pt-36">
      <div className="container mx-auto grid gap-2 px-6 lg:grid-cols-2 lg:px-32">
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h1 className="text-5xl font-bold tracking-tighter lg:text-6xl">
              Páginas web modernas, fáciles de editar
            </h1>
            <p className="max-w-prose text-gray-500 dark:text-gray-400 lg:text-xl">
              Desarrollo web profesional que impulsa resultados. Creamos
              soluciones digitales innovadoras que transforman negocios.
            </p>
          </div>
          <div>
            <Button size="lg">
              Conseguir mi web
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="flex w-full items-center justify-center">
          <Image
            src="/hero.svg"
            alt="Development illustration"
            width={400}
            height={400}
            className="w-full max-w-lg lg:max-w-none"
            priority
          />
        </div>
      </div>
    </section>
  );
}
