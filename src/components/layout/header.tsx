'use client';

import {
  Briefcase,
  DollarSign,
  Mail,
  Menu,
  MessageCircle,
  X,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { Button, buttonVariants } from '@/components/ui/button';

const navItems = [
  { href: '#proyectos', label: 'Proyectos', icon: Briefcase },
  { href: '#simulador-precio', label: 'Precios', icon: DollarSign },
  { href: '#testimonios', label: 'Testimonios', icon: MessageCircle },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed z-50 mx-auto w-full p-2 backdrop-blur-lg">
      <div className="container mx-auto px-6 lg:px-28">
        <div className="flex h-16 items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-2 transition-transform duration-300 hover:scale-105">
              <Image src="/logo.svg" alt="Logo" width={30} height={30} />
              <span className="text-lg font-extrabold text-primary">Kira</span>
            </div>
          </Link>
          <nav className="hidden gap-1 md:flex">
            {navItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className={`${buttonVariants({ variant: 'link' })} flex items-center gap-2 font-semibold text-secondary-foreground`}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="hidden items-center md:flex">
            <Link href="#contact">
              <Button
                className="transition-transform duration-300 hover:scale-105"
                size="sm"
              >
                <Mail strokeWidth={2.5} />
                Contactar
              </Button>
            </Link>
          </div>
          <button
            className="text-primary md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="p-4 md:hidden">
            <nav className="flex flex-col">
              <div className="flex flex-col items-start">
                {navItems.map(item => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`${buttonVariants({ variant: 'link' })} flex items-center gap-2 font-semibold text-secondary-foreground`}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col space-y-2 pt-4">
                <Link href="#contact">
                  <Button
                    className="w-full transition-transform duration-300 hover:scale-105"
                    size="sm"
                  >
                    <Mail strokeWidth={2.5} />
                    Contactar
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
