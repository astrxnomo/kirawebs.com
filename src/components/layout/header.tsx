'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { Button, buttonVariants } from '@/components/ui/button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header-animate fixed top-0 z-50 w-full">
      <div className="container mx-auto px-6 lg:px-28">
        <div className="flex h-16 items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-2 transition-transform duration-300 hover:scale-105">
              <Image src="/logo.svg" alt="Logo" width={30} height={30} />
              <span className="text-lg font-extrabold text-primary">Kira</span>
            </div>
          </Link>
          <nav className="hidden gap-1 md:flex">
            <Link
              href="#servicios"
              className={`${buttonVariants({ variant: 'ghost' })} font-semibold`}
            >
              Servicios
            </Link>
            <Link
              href="#portafolio"
              className={`${buttonVariants({ variant: 'ghost' })} font-semibold`}
            >
              Portafolio
            </Link>
            <Link
              href="#testimonios"
              className={`${buttonVariants({ variant: 'ghost' })} font-semibold`}
            >
              Testimonios
            </Link>
            <Link
              href="#precios"
              className={`${buttonVariants({ variant: 'ghost' })} font-semibold`}
            >
              Precios
            </Link>
            <Link
              href="#contacto"
              className={`${buttonVariants({ variant: 'ghost' })} font-semibold`}
            >
              Contacto
            </Link>
          </nav>
          <div className="hidden items-center space-x-4 md:flex">
            <Button
              className="transition-transform duration-300 hover:scale-105"
              size="sm"
            >
              Contactar
            </Button>
          </div>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <div className="border-b bg-background py-4 md:hidden">
            <nav className="flex flex-col">
              <div className="flex flex-col items-start">
                <Link
                  href="#servicios"
                  className={`${buttonVariants({ variant: 'ghost' })} font-semibold`}
                >
                  Servicios
                </Link>
                <Link
                  href="#portafolio"
                  className={`${buttonVariants({ variant: 'ghost' })} font-semibold`}
                >
                  Portafolio
                </Link>
                <Link
                  href="#testimonios"
                  className={`${buttonVariants({ variant: 'ghost' })} font-semibold`}
                >
                  Testimonios
                </Link>
                <Link
                  href="#precios"
                  className={`${buttonVariants({ variant: 'ghost' })} font-semibold`}
                >
                  Precios
                </Link>
                <Link
                  href="#contacto"
                  className={`${buttonVariants({ variant: 'ghost' })} font-semibold`}
                >
                  Contacto
                </Link>
              </div>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" size="sm">
                  Iniciar Sesión
                </Button>
                <Button size="sm">Contactar</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
