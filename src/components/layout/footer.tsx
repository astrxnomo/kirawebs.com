import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="mt-24 bg-muted/50">
      <div className="mx-auto w-full max-w-screen-lg p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link href="/">
            <div className="flex items-center gap-2 transition-transform duration-300 hover:scale-105">
              <Image src="/logo.svg" alt="Logo" width={30} height={30} />
              <span className="text-lg font-extrabold text-primary">
                KiraWebs
              </span>
            </div>
          </Link>
          <ul className="mb-6 flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mb-0">
            <li>
              <a
                href="/privacy-policy"
                className="me-4 hover:underline md:me-6"
              >
                Política de Privacidad
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-500 dark:text-gray-400 sm:text-center">
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
