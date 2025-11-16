import { Zap, Truck, Navigation, Badge, Clock, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const differentiators = [
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: 'Agilidade Garantida',
    description: 'Comprometimento com prazos e entregas rápidas.',
  },
  {
    icon: <Truck className="h-8 w-8 text-primary" />,
    title: 'Frota Moderna',
    description: 'Veículos novos, revisados e equipados para sua segurança.',
  },
  {
    icon: <Navigation className="h-8 w-8 text-primary" />,
    title: 'Logística Inteligente',
    description: 'Rastreamento e otimização de rotas em tempo real.',
  },
  {
    icon: <Badge className="h-8 w-8 text-primary" />,
    title: 'Credibilidade',
    description: 'Equipe uniformizada, identificada e altamente qualificada.',
  },
  {
    icon: <Clock className="h-8 w-8 text-primary" />,
    title: 'Disponibilidade',
    description: 'Atendimento 7 dias por semana para sua conveniência.',
  },
  {
    icon: <Shield className="h-8 w-8 text-primary" />,
    title: 'Confiança Total',
    description: 'Suas cargas protegidas do início ao fim do transporte.',
  },
];

const WhyChooseSection = () => {
  return (
    <section id="why-us" className="py-16 md:py-24 relative overflow-hidden bg-[#1E293B] text-white" style={{
      backgroundImage: "repeating-radial-gradient(circle at center, rgba(255,107,53,0.05), rgba(255,107,53,0.05) 1px, transparent 1px, transparent 20px)"
    }}>
        <div className="container relative">
            <div className="text-center">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">
                Por Que a FAPEXpress?
            </h2>
            <p className="mt-4 text-lg text-gray-300">
                Oferecemos mais do que transporte, entregamos <b className="text-white">confiança</b> e tranquilidade.
            </p>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((item) => (
                <Card key={item.title} className="bg-white/5 backdrop-blur-sm text-center border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300">
                <CardHeader className="items-center">
                    <div className="bg-primary/10 p-3 rounded-full">{item.icon}</div>
                </CardHeader>
                <CardContent>
                    <CardTitle className="font-headline text-xl">{item.title}</CardTitle>
                    <p className="mt-2 text-gray-400">{item.description}</p>
                </CardContent>
                </Card>
            ))}
            </div>
        </div>
    </section>
  );
};

export default WhyChooseSection;
