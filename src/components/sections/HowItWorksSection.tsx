import { FileCheck, Handshake, Map } from 'lucide-react';
import WhatsappIcon from '@/components/icons/WhatsappIcon';

const steps = [
  {
    icon: <WhatsappIcon className="h-8 w-8 text-primary" />,
    title: '1. Entre em Contato',
    description: 'Envie mensagem ou ligue para (15) 99776-9467',
  },
  {
    icon: <FileCheck className="h-8 w-8 text-primary" />,
    title: '2. Receba o Orçamento',
    description: 'Orçamento transparente, rápido e sem taxas ocultas.',
  },
  {
    icon: <Handshake className="h-8 w-8 text-primary" />,
    title: '3. Confirme o Serviço',
    description: 'Agende data, horário e local de coleta com facilidade.',
  },
  {
    icon: <Map className="h-8 w-8 text-primary" />,
    title: '4. Acompanhe a Entrega',
    description: 'Rastreie em tempo real até a conclusão do serviço.',
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-card">
      <div className="container">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">
            Como Funciona? Simples e Rápido
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Contratar nossos serviços é um processo de 4 passos.
          </p>
        </div>
        <div className="relative mt-12">
            <div className="absolute left-1/2 top-4 hidden h-full w-0.5 -translate-x-1/2 bg-border md:block"></div>
            <div className="absolute left-4 top-1/2 h-0.5 w-full -translate-y-1/2 bg-border md:hidden"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.title} className="flex md:flex-col items-center text-center md:text-left">
                <div className="flex-shrink-0 bg-background rounded-full p-4 border-2 border-primary/50 mb-4 relative z-10">
                  {step.icon}
                </div>
                <div className="md:text-center ml-6 md:ml-0">
                  <h3 className="font-headline text-xl font-semibold">{step.title}</h3>
                  <p className="mt-2 text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
