'use client';

import { Code2, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-6 lg:px-32">
        <div className="grid gap-8 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Code2 className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">Kira</span>
            </div>
            <p className="text-muted-foreground">
              Transformamos ideas en experiencias digitales excepcionales.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div>
            <h4 className="mb-4 font-bold">Servicios</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  Desarrollo Web
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  E-commerce
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  Aplicaciones Web
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  Mantenimiento
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-bold">Empresa</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  Casos de Éxito
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  Empleo
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-bold">Newsletter</h4>
            <p className="mb-4 text-muted-foreground">
              Suscríbete para recibir las últimas novedades y recursos.
            </p>
            <div className="space-y-2">
              <input
                type="email"
                placeholder="tu@email.com"
                className="w-full rounded-md border border-input bg-background p-2"
              />
              <Button className="w-full">Suscribirse</Button>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8 text-center text-muted-foreground">
          <p>© 2024 Kira. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
