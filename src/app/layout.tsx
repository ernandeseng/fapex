import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Poppins, Inter } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-poppins',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Fapex Velocity | Serviços Rápidos de Entrega e Transporte',
  description:
    'Fapex Express: Serviços de Motoboy, Fretes com Utilitários e PickUps, e Transporte Executivo. Velocidade e confiança na entrega em Sorocaba e região.',
  keywords:
    'Motoboy, Frete, Entrega Rápida, Transporte Executivo, Utilitário Baú, PickUp Cargas, Sorocaba, Fapex Express',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} ${inter.variable} dark scroll-smooth`}>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
