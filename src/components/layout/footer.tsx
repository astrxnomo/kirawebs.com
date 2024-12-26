import Image from 'next/image';
import Link from 'next/link';

import { buttonVariants } from '../ui/button';

export function Footer() {
  return (
    <footer className="mt-24 bg-muted/50 p-8">
      <div className="mx-auto w-full max-w-screen-lg">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <Link href="/">
            <div className="flex items-center gap-2 transition-transform duration-300 hover:scale-105">
              <Image src="/logo.svg" alt="Logo" width={30} height={30} />
              <span className="text-lg font-extrabold text-primary">
                KiraWebs
              </span>
            </div>
          </Link>
          <ul className="flex items-center text-sm font-semibold">
            <li>
              <Link
                href="/privacy-policy"
                className={`${buttonVariants({ variant: 'link' })}`}
              >
                Política de Privacidad
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6" />
        <span className="text-sm text-muted-foreground">
          © {new Date().getFullYear()}{' '}
          <a href="https://kirawebs.com/" className="hover:underline">
            Kirawebs
          </a>
          . Todos los derechos reservados.
        </span>
      </div>
    </footer>
  );
}
