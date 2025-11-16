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
  title: 'FAPEXpress | Logística Inteligente, Agilidade e Confiança',
  description:
    'FAPEXpress: Logística inteligente para Motoboy, Fretes com Utilitários e PickUps, e Transporte Executivo. Agilidade e confiança em cada entrega.',
  keywords:
    'Motoboy, Frete, Entrega Rápida, Transporte Executivo, Utilitário Baú, PickUp Cargas, Sorocaba, FAPEXpress, Logística Inteligente, Agilidade, Confiança, Credibilidade',
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
