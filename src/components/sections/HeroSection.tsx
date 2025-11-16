import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Phone, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

const HeroSection = () => {
  const phoneNumber = '5515997769467';
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    'Olá! Gostaria de solicitar um serviço.'
  )}`;

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden text-white"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#FF6B35] to-[#E85D04]"></div>
      <div className="absolute inset-0 bg-[url(/grid.svg)] bg-center opacity-10 [mask-image:linear-gradient(to_bottom,white_10%,transparent_90%)]"></div>
       <div className="absolute -bottom-1/4 left-0 w-1/2 h-1/2 bg-white/5 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
       <div className="absolute -top-1/4 right-0 w-1/2 h-1/2 bg-white/5 rounded-full filter blur-3xl opacity-50 animate-pulse delay-2000"></div>


      <div className="container relative z-10 flex min-h-screen flex-col items-center justify-center text-center py-20">
        <div className="mb-8 animate-float">
          <Image
            src="https://i.imgur.com/tSdY6Rs.png"
            alt="Fapex Express Logo"
            width={240}
            height={240}
            className="h-48 w-auto sm:h-60"
            priority
          />
        </div>
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl" style={{textShadow: '0 3px 6px rgba(0,0,0,0.3)'}}>
          Velocidade e Confiança na Entrega
        </h1>
        <p className="mx-auto mt-6 max-w-[700px] text-lg text-white/90 md:text-xl">
          Serviços de Motoboy, Fretes e Transporte Executivo com Agilidade
          Profissional.
        </p>
        <div className="mt-8 flex flex-col items-center sm:flex-row gap-4">
          <Button
            asChild
            size="lg"
            className="bg-white text-primary-foreground font-bold hover:bg-gray-200 hover:text-orange-600 transition-all duration-300 scale-100 hover:scale-105 shadow-lg"
            style={{color: '#FF6B35'}}
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Phone className="mr-2 h-5 w-5" />
              Solicite Agora pelo WhatsApp
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary transition-all duration-300">
            <a href="#services">Conheça Nossos Serviços</a>
          </Button>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Badge variant="outline" className="border-green-400 text-green-300 bg-green-900/50 animate-float shadow-lg"> <ShieldCheck className="h-4 w-4 mr-2 text-green-400"/> Disponível 24/7</Badge>
          <Badge variant="outline" className="border-green-400 text-green-300 bg-green-900/50 animate-float shadow-lg" style={{animationDelay: '0.2s'}}> <ShieldCheck className="h-4 w-4 mr-2 text-green-400"/> Entregas Rápidas</Badge>
          <Badge variant="outline" className="border-green-400 text-green-300 bg-green-900/50 animate-float shadow-lg" style={{animationDelay: '0.4s'}}> <ShieldCheck className="h-4 w-4 mr-2 text-green-400"/> Equipe Qualificada</Badge>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
