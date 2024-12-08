'use client';

import { Code2 } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import { Button, buttonVariants } from '@/components/ui/button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
      <div className="container mx-auto px-6 lg:px-32">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <Code2 className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Kira</span>
          </div>
          <nav className="hidden space-x-2 md:flex">
            <Link
              href="#servicios"
              className={`${buttonVariants({ variant: 'link' })} text-foreground hover:text-primary`}
            >
              Servicios
            </Link>
            <Link
              href="#portafolio"
              className={`${buttonVariants({ variant: 'link' })} text-foreground hover:text-primary`}
            >
              Portafolio
            </Link>
            <Link
              href="#testimonios"
              className={`${buttonVariants({ variant: 'link' })} text-foreground hover:text-primary`}
            >
              Testimonios
            </Link>
            <Link
              href="#precios"
              className={`${buttonVariants({ variant: 'link' })} text-foreground hover:text-primary`}
            >
              Precios
            </Link>
            <Link
              href="#contacto"
              className={`${buttonVariants({ variant: 'link' })} text-foreground hover:text-primary`}
            >
              Contacto
            </Link>
          </nav>
          <div className="hidden items-center space-x-4 md:flex">
            <Button size="sm">Contactar</Button>
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
          <div className="border-b py-4 md:hidden">
            <nav className="flex flex-col">
              <div className="flex flex-col items-start">
                <Link
                  href="#servicios"
                  className={`${buttonVariants({ variant: 'link' })} text-black hover:text-primary`}
                >
                  Servicios
                </Link>
                <Link
                  href="#portafolio"
                  className={`${buttonVariants({ variant: 'link' })} text-black hover:text-primary`}
                >
                  Portafolio
                </Link>
                <Link
                  href="#testimonios"
                  className={`${buttonVariants({ variant: 'link' })} text-black hover:text-primary`}
                >
                  Testimonios
                </Link>
                <Link
                  href="#precios"
                  className={`${buttonVariants({ variant: 'link' })} text-black hover:text-primary`}
                >
                  Precios
                </Link>
                <Link
                  href="#contacto"
                  className={`${buttonVariants({ variant: 'link' })} text-black hover:text-primary`}
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
