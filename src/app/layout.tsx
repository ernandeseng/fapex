import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

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
    <html lang="pt-BR" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Space+Grotesk:wght@700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
