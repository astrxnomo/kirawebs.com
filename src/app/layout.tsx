import './globals.css';

import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';

import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';

const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Kira - Agencia de Desarrollo Web Profesional',
  description:
    'Transformamos ideas en experiencias digitales excepcionales. Desarrollo web profesional que impulsa resultados.',
  keywords:
    'desarrollo web, agencia digital, diseño web, e-commerce, aplicaciones web',
  openGraph: {
    title: 'Kira - Agencia de Desarrollo Web Profesional',
    description: 'Transformamos ideas en experiencias digitales excepcionales',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`min-h-full ${inter.className} ${poppins.variable}`}
    >
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
