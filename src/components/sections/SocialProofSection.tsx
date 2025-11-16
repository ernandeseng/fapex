import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { Instagram, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: 'Entrega super rápida! Recomendo para qualquer um que precise de agilidade.',
    author: 'Cliente E-commerce',
  },
  {
    quote: 'Motorista muito educado e pontual. O serviço de transfer executivo é impecável.',
    author: 'Empresa ABC',
  },
  {
    quote: 'Melhor custo-benefício que encontrei na região de Sorocaba. Virou meu parceiro de fretes.',
    author: 'Farmácia XYZ',
  },
  {
    quote: 'Confiável para nossas entregas diárias. A equipe é profissional e sempre cumpre os prazos.',
    author: 'Loja Parceira',
  },
];

const SocialProofSection = () => {
  const instagramLink = 'https://www.instagram.com/fabio.pereira.express';
  return (
    <section id="social-proof" className="py-16 md:py-24 bg-[#F8FAFC]">
      <div className="container text-gray-800">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold md:text-4xl text-[#0F172A]">
            Confira Nossa Reputação
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            A satisfação dos nossos clientes é a nossa melhor propaganda.
          </p>
        </div>

        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2">
                <div className="p-2 h-full">
                  <Card className="flex flex-col h-full justify-between bg-white shadow-lg border-l-4 border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:rotate-1">
                    <CardContent className="p-6 relative">
                        <Quote className="absolute top-4 right-4 h-10 w-10 text-primary/10" fill="currentColor" />
                        <div className="flex text-yellow-400 mb-4">
                            {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" className="h-5 w-5" />)}
                        </div>
                      <p className="italic text-gray-700">"{testimonial.quote}"</p>
                      <p className="mt-4 font-bold text-right text-primary">
                        - {testimonial.author}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        
        <div className="mt-16 text-center">
            <h3 className="font-headline text-2xl font-bold text-[#0F172A]">Siga-nos no Instagram</h3>
            <Button asChild className="mt-4 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-bold transition-transform hover:scale-105">
                <a href={instagramLink} target="_blank" rel="noopener noreferrer">
                    <Instagram className="mr-2 h-5 w-5" />
                    Ver Perfil
                </a>
            </Button>
        </div>

      </div>
    </section>
  );
};

export default SocialProofSection;
