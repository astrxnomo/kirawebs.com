import Image from "next/image"
import Link from "next/link"

import { buttonVariants } from "../ui/button"
import ThemeSwitcher from "../ui/theme-switcher"

export function Footer() {
  return (
    <footer className="mt-24 bg-primary-foreground p-8">
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
                className={`${buttonVariants({ variant: "link" })}`}
              >
                Política de Privacidad
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6" />
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-center text-sm text-muted-foreground">
              © {new Date().getFullYear()}{" "}
              <a href="https://kirawebs.com/" className="hover:underline">
                Kirawebs
              </a>
            </span>
            <ThemeSwitcher />
          </div>
          <div className="text-center text-sm text-muted-foreground">
            Develop by{" "}
            <a
              href="https://felipego.com"
              className="font-semibold text-muted-foreground/90 hover:underline"
            >
              felipego.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
