import { Zap, Truck, Navigation, Badge, Clock, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const differentiators = [
  {
    icon: <Zap className="h-8 w-8" />,
    title: 'Rapidez Garantida',
    description: 'Comprometimento com prazos e entregas ágeis.',
  },
  {
    icon: <Truck className="h-8 w-8" />,
    title: 'Frota Moderna',
    description: 'Veículos novos, revisados e equipados para sua segurança.',
  },
  {
    icon: <Navigation className="h-8 w-8" />,
    title: 'Rastreamento',
    description: 'Acompanhe sua entrega em tempo real do início ao fim.',
  },
  {
    icon: <Badge className="h-8 w-8" />,
    title: 'Profissionalismo',
    description: 'Equipe uniformizada, identificada e altamente qualificada.',
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: 'Disponibilidade',
    description: 'Atendimento 7 dias por semana para sua conveniência.',
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: 'Seguro Incluso',
    description: 'Suas cargas protegidas do início ao fim do transporte.',
  },
];

const WhyChooseSection = () => {
  return (
    <section id="why-us" className="py-16 md:py-24 relative overflow-hidden bg-background">
        <div className="absolute inset-0 bg-accent/5 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]"></div>
        <div className="container relative">
            <div className="text-center">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">
                Por Que a Fapex Express?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
                Oferecemos mais do que transporte, entregamos confiança e tranquilidade.
            </p>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((item) => (
                <Card key={item.title} className="bg-card/50 backdrop-blur-sm text-center">
                <CardHeader className="items-center">
                    <div className="text-primary">{item.icon}</div>
                </CardHeader>
                <CardContent>
                    <CardTitle className="font-headline text-xl">{item.title}</CardTitle>
                    <p className="mt-2 text-muted-foreground">{item.description}</p>
                </CardContent>
                </Card>
            ))}
            </div>
        </div>
    </section>
  );
};

export default WhyChooseSection;
