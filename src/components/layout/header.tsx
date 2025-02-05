import {
  AppWindow,
  Calculator,
  Cloud,
  DollarSign,
  Folders,
  Library,
  Mail,
  Menu,
  MessageSquareQuote,
  Speech,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import React from "react"

import { Button, buttonVariants } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from "@/utils/cn"

import { ScrollArea } from "../ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet"

const navItems = [
  { href: "#proyectos", label: "Proyectos", icon: Folders },
  { href: "#testimonios", label: "Testimonios", icon: MessageSquareQuote },
]

const serviceNav = [
  {
    title: "Desarrollo Web",
    href: "",
    description: "Sitios web personalizados adaptados a tus necesidades.",
    icon: AppWindow,
  },
  {
    title: "Asesorías",
    href: "",
    description: "Asesoría para mejorar o crear tus proyectos tecnológicos.",
    icon: Speech,
  },
  {
    title: "Soluciones Cloud (Pronto)",
    href: "",
    description:
      "Infraestructura y servicios en la nube escalables y seguros con AWS.",
    icon: Cloud,
    active: false,
  },
]

const pricesNav = [
  {
    title: "Simulador",
    href: "#price-simulator",
    description:
      "Obtén una visión clara de tu proyecto web. Completa el formulario según tus necesidades y te daremos un precio aproximado.",
    icon: Calculator,
    isMain: true,
  },
  {
    title: "Contacto",
    href: "#contact",
    description:
      "Ponte en contacto con nosotros para más información y consultas.",
    icon: Mail,
  },
  {
    title: "Preguntas Frecuentes",
    href: "#faqs",
    description:
      "Encuentra respuestas a las preguntas más comunes sobre nuestros servicios.",
    icon: Library,
  },
]

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    icon?: React.ElementType
    active?: boolean
  }
>(
  (
    { className, title, children, icon: Icon, active = true, ...props },
    ref,
  ) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
              !active && "pointer-events-none opacity-50",
            )}
            {...props}
          >
            <div className="flex items-center gap-2 text-sm font-medium leading-none">
              {Icon && <Icon className="size-4" />}
              {title}
            </div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"

export function Header() {
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
          <nav className="hidden md:flex">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent">
                    <span className="flex items-center gap-2">
                      <Library className="size-4" />
                      Servicios
                    </span>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-6">
                      {serviceNav.map((service) => (
                        <ListItem
                          key={service.title}
                          href={service.href}
                          title={service.title}
                          icon={service.icon}
                          active={service.active !== false}
                        >
                          {service.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent">
                    <span className="flex items-center gap-2">
                      <DollarSign className="size-4" />
                      Precios
                    </span>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            className="flex size-full select-none flex-col justify-end rounded bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="#price-simulator"
                          >
                            <Calculator className="size-6" />
                            <div className="mb-2 mt-4 text-lg font-medium">
                              Simulador
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Obtén una visión clara de tu proyecto web.
                              Completa el formulario según tus necesidades y te
                              daremos un precio aproximado.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="#price-simulator" title="Simulador">
                        Obtén una visión clara de tu proyecto web. Completa el
                        formulario según tus necesidades y te daremos un precio
                        aproximado.
                      </ListItem>
                      <ListItem href="#contact" title="Contacto">
                        Ponte en contacto con nosotros para más información y
                        consultas.
                      </ListItem>
                      <ListItem href="#faqs" title="Preguntas Frecuentes">
                        Encuentra respuestas a las preguntas más comunes sobre
                        nuestros servicios.
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {navItems.map((item) => (
                  <NavigationMenuItem className="w-full" key={item.href}>
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={`${buttonVariants({ variant: "ghost" })}`}
                      >
                        <item.icon className="size-4" />
                        {item.label}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
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
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <div className="flex h-16 items-center">
                <Link href="/">
                  <div className="flex items-center gap-2 transition-transform duration-300 hover:scale-105">
                    <Image src="/logo.svg" alt="Logo" width={30} height={30} />
                    <span className="text-lg font-extrabold text-primary">
                      Kira
                    </span>
                  </div>
                </Link>
              </div>
              <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10">
                <div className="flex flex-col space-y-4">
                  <div>
                    <h4 className="mb-2 text-sm font-semibold">Servicios</h4>
                    {serviceNav.map((item) => (
                      <Link key={item.title} href={item.href}>
                        <Button
                          variant="ghost"
                          className="w-full justify-start"
                        >
                          <item.icon className="mr-2 h-4 w-4" />
                          {item.title}
                        </Button>
                      </Link>
                    ))}
                  </div>
                  <hr />
                  <div>
                    <h4 className="mb-2 text-sm font-semibold">Precios</h4>
                    {pricesNav.map((item) => (
                      <Link key={item.title} href={item.href}>
                        <Button
                          variant="ghost"
                          className="w-full justify-start"
                        >
                          {item.icon && <item.icon className="mr-2 h-4 w-4" />}
                          {item.title}
                        </Button>
                      </Link>
                    ))}
                  </div>
                  <hr />
                  {navItems.map((item) => (
                    <Link key={item.href} href={item.href}>
                      <Button variant="ghost" className="w-full justify-start">
                        <item.icon className="mr-2 h-4 w-4" />
                        {item.label}
                      </Button>
                    </Link>
                  ))}
                  <Link href="#contact">
                    <Button className="w-full">Contactar</Button>
                  </Link>
                </div>
              </ScrollArea>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
