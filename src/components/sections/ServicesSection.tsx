import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import MotorcycleIcon from '@/components/icons/MotorcycleIcon';
import BoxTruckIcon from '@/components/icons/BoxTruckIcon';
import PickupTruckIcon from '@/components/icons/PickupTruckIcon';
import ExecutiveCarIcon from '@/components/icons/ExecutiveCarIcon';
import { Check } from 'lucide-react';

const phoneNumber = '5515997769467';
const whatsappBaseUrl = `https://wa.me/${phoneNumber}?text=`;

const services = [
  {
    icon: <MotorcycleIcon className="h-8 w-8" />,
    title: 'Motoboy Express',
    description: 'Entregas urgentes e documentos com agilidade em toda região. Ideal para e-commerce, farmácias e empresas.',
    features: ['Rastreamento em tempo real', 'Entrega no mesmo dia', 'Profissionais uniformizados'],
    cta: 'Contratar Motoboy',
    ctaLink: `${whatsappBaseUrl}${encodeURIComponent('Olá, gostaria de contratar um motoboy.')}`
  },
  {
    icon: <BoxTruckIcon className="h-8 w-8" />,
    title: 'Utilitários Baú',
    description: 'Transporte de cargas médias com segurança e proteção total. Veículos equipados com baú fechado.',
    features: ['Até 1000kg', 'Proteção contra chuva', 'Cargas volumosas'],
    cta: 'Solicitar Frete',
    ctaLink: `${whatsappBaseUrl}${encodeURIComponent('Olá, gostaria de solicitar um frete com utilitário baú.')}`
  },
  {
    icon: <PickupTruckIcon className="h-8 w-8" />,
    title: 'PickUp Cargas',
    description: 'Transporte de móveis, materiais de construção e cargas de maior porte com versatilidade.',
    features: ['Caçamba aberta', 'Mudanças pequenas', 'Materiais pesados'],
    cta: 'Pedir Orçamento',
    ctaLink: `${whatsappBaseUrl}${encodeURIComponent('Olá, gostaria de um orçamento para frete com pickup.')}`
  },
  {
    icon: <ExecutiveCarIcon className="h-8 w-8" />,
    title: 'Transfer Executivo',
    description: 'Transporte corporativo e executivo com conforto, pontualidade e discrição profissional.',
    features: ['Motoristas treinados', 'Veículos climatizados', 'Atendimento premium'],
    cta: 'Agendar Transfer',
    ctaLink: `${whatsappBaseUrl}${encodeURIComponent('Olá, gostaria de agendar um transfer executivo.')}`
  },
];

const ServicesSection = () => (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="container">
        <h2 className="text-center font-headline text-3xl font-bold md:text-4xl">
          Nossos Serviços Especializados
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Card key={service.title} className="flex flex-col bg-card transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 border-border hover:border-primary/50">
              <CardHeader className="items-center text-center">
                <div className="rounded-full bg-primary/10 p-4 text-primary">
                  {service.icon}
                </div>
                <CardTitle className="mt-4 font-headline">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col text-center">
                <CardDescription>{service.description}</CardDescription>
                <ul className="mt-6 space-y-2 text-sm text-muted-foreground text-left flex-1">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="mt-8 w-full" asChild>
                  <a href={service.ctaLink} target="_blank" rel="noopener noreferrer">
                    {service.cta}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
);

export default ServicesSection;
