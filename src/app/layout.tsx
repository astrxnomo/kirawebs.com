import "./globals.css"

import { ThemeProvider } from "next-themes"
import { Inter, Poppins } from "next/font/google"
import Script from "next/script"

import { Footer } from "@/components/layout/footer"
import { Header } from "@/components/layout/header"

import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Kira - Agencia de Desarrollo Web Profesional",
  description:
    "Transformamos ideas en experiencias digitales excepcionales. Desarrollo web profesional que impulsa resultados.",
  keywords:
    "desarrollo web, agencia digital, diseño web, e-commerce, aplicaciones web",
  openGraph: {
    title: "Kira - Agencia de Desarrollo Web Profesional",
    description: "Transformamos ideas en experiencias digitales excepcionales",
    images: ["/og-image.jpg"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="es"
      className={`min-h-full ${inter.className} ${poppins.variable}`}
      suppressHydrationWarning
    >
      <head>
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="xD+P5nM2R6bSyazQv6TWtQ"
          async
        />
      </head>
      <body className="absolute inset-0 -z-10 size-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[radial-gradient(#020808_1px,#00091d_1px)]">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
