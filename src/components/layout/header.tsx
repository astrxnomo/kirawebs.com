"use client"

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
import React, { useState } from "react"

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
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet"

const navItems = [
  { href: "#proyectos", label: "Proyectos", icon: Folders },
  { href: "#testimonios", label: "Testimonios", icon: MessageSquareQuote },
]

const serviceNav = [
  {
    title: "Desarrollo Web",
    href: "#contact",
    description: "Sitios web personalizados adaptados a tus necesidades.",
    icon: AppWindow,
    active: true,
  },
  {
    title: "Asesorías",
    href: "",
    description: "Asesoría para mejorar o crear tus proyectos tecnológicos.",
    icon: Speech,
    active: true,
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
    onItemClick?: () => void
    isMain?: boolean
  }
>(
  (
    {
      className,
      title,
      children,
      icon: Icon,
      active = true,
      onItemClick,
      isMain = false,
      ...props
    },
    ref,
  ) => {
    const mainClassNames =
      "flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
    const defaultClassNames =
      "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
    const inactiveClassNames = "pointer-events-none opacity-50"

    return (
      <li className={isMain ? "row-span-3" : ""}>
        <NavigationMenuLink asChild>
          <Link
            href="#"
            ref={ref}
            className={cn(
              isMain ? mainClassNames : defaultClassNames,
              className,
              !active && inactiveClassNames,
            )}
            onClick={onItemClick}
            {...props}
          >
            <div
              className={
                isMain
                  ? "mb-2 mt-4 text-lg font-medium"
                  : "flex items-center gap-2 text-sm font-medium leading-none"
              }
            >
              {Icon && <Icon className={isMain ? "mb-2 h-6 w-6" : "h-4 w-4"} />}

              {title}
            </div>
            <p
              className={
                isMain
                  ? "text-sm leading-tight text-muted-foreground"
                  : "line-clamp-2 text-sm leading-snug text-muted-foreground"
              }
            >
              {children}
            </p>
          </Link>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const closeSheet = () => setIsOpen(false)

  return (
    <header className="fixed z-50 mx-auto w-full p-2 backdrop-blur-lg">
      <div className="container mx-auto px-6 lg:px-28">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" onClick={closeSheet}>
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
                          href={service.href || "#"}
                          title={service.title}
                          icon={service.icon}
                          active={service.active !== false}
                          onItemClick={closeSheet}
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
                      <ListItem
                        href="#price-simulator"
                        title="Simulador"
                        icon={Calculator}
                        onItemClick={closeSheet}
                        isMain={true}
                      >
                        Obtén una visión clara de tu proyecto web. Completa el
                        formulario según tus necesidades y te daremos un precio
                        aproximado.
                      </ListItem>
                      <ListItem
                        href="#contact"
                        title="Contacto"
                        icon={Mail}
                        onItemClick={closeSheet}
                      >
                        Ponte en contacto con nosotros para más información y
                        consultas.
                      </ListItem>
                      <ListItem
                        href="#faqs"
                        title="Preguntas Frecuentes"
                        icon={Library}
                        onItemClick={closeSheet}
                      >
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
                        onClick={closeSheet}
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
            <Link href="#contact" onClick={closeSheet}>
              <Button
                className="transition-transform duration-300 hover:scale-105"
                size="sm"
              >
                <Mail strokeWidth={2.5} />
                Contactar
              </Button>
            </Link>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button className="md:hidden">
                <Menu className="text-primary" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <SheetTitle className="flex h-16 items-center">
                <Link href="/" onClick={closeSheet}>
                  <div className="flex items-center gap-2 transition-transform duration-300 hover:scale-105">
                    <Image src="/logo.svg" alt="Logo" width={30} height={30} />
                    <span className="text-lg font-extrabold text-primary">
                      Kira
                    </span>
                  </div>
                </Link>
              </SheetTitle>
              <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10">
                <div className="flex flex-col space-y-4">
                  <div>
                    <h4 className="mb-2 text-sm font-semibold">Servicios</h4>
                    {serviceNav.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href || "#"}
                        onClick={closeSheet}
                      >
                        <Button
                          variant="ghost"
                          className={cn(
                            "w-full justify-start",
                            !item.active && "pointer-events-none opacity-50",
                          )}
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
                      <Link
                        key={item.title}
                        href={item.href}
                        onClick={closeSheet}
                      >
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
                  <div>
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={closeSheet}
                      >
                        <Button
                          variant="ghost"
                          className="w-full justify-start"
                        >
                          <item.icon className="mr-2 h-4 w-4" />
                          {item.label}
                        </Button>
                      </Link>
                    ))}
                  </div>
                  <hr />
                  <Link href="#contact" onClick={closeSheet}>
                    <Button className="w-full" size="lg">
                      <Mail strokeWidth={2.5} />
                      Contactar
                    </Button>
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
