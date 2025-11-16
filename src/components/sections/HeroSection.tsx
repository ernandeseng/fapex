import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Phone } from 'lucide-react';
import Image from 'next/image';

const HeroSection = () => {
  const phoneNumber = '5515997769467';
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    'Olá! Gostaria de solicitar um serviço.'
  )}`;

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden bg-background text-white"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-card to-background opacity-50"></div>
      <div className="absolute inset-0 bg-[url(/grid.svg)] bg-center [mask-image:linear-gradient(to_bottom,white_10%,transparent_90%)]"></div>

      <div className="container relative z-10 flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center text-center py-20">
        <div className="mb-4">
          <Image
            src="https://i.imgur.com/tSdY6Rs.png"
            alt="Fapex Express Logo"
            width={150}
            height={150}
            className="h-24 w-auto sm:h-32"
            priority
          />
        </div>
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Velocidade e Confiança na Entrega
        </h1>
        <p className="mx-auto mt-6 max-w-[700px] text-lg text-muted-foreground md:text-xl">
          Serviços de Motoboy, Fretes e Transporte Executivo com Agilidade
          Profissional.
        </p>
        <div className="mt-8 flex flex-col items-center sm:flex-row gap-4">
          <Button
            asChild
            size="lg"
            className="animate-pulse-orange"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Phone className="mr-2 h-5 w-5" />
              Solicite Agora pelo WhatsApp
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="#services">Conheça Nossos Serviços</a>
          </Button>
        </div>
        <div className="mt-6">
          <a
            href={`tel:${phoneNumber}`}
            className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            (15) 99776-9467
          </a>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Badge variant="secondary">Disponível 24/7</Badge>
          <Badge variant="secondary">Entregas Rápidas</Badge>
          <Badge variant="secondary">Equipe Qualificada</Badge>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 h-20 w-full bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;
