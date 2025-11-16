import { FileCheck, Handshake, Map } from 'lucide-react';
import WhatsappIcon from '@/components/icons/WhatsappIcon';

const steps = [
  {
    icon: <WhatsappIcon className="h-8 w-8 text-primary-foreground" />,
    title: '1. Entre em Contato',
    description: 'Envie mensagem ou ligue para (15) 99776-9467',
  },
  {
    icon: <FileCheck className="h-8 w-8 text-primary-foreground" />,
    title: '2. Receba o Orçamento',
    description: 'Orçamento transparente, rápido e sem taxas ocultas.',
  },
  {
    icon: <Handshake className="h-8 w-8 text-primary-foreground" />,
    title: '3. Confirme o Serviço',
    description: 'Agende data, horário e local de coleta com facilidade.',
  },
  {
    icon: <Map className="h-8 w-8 text-primary-foreground" />,
    title: '4. Acompanhe a Entrega',
    description: 'Rastreie em tempo real até a conclusão do serviço.',
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-gradient-to-b from-white to-[#FFF7ED]">
      <div className="container text-gray-800">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold md:text-4xl text-[#0F172A]">
            Como Funciona? Simples e Rápido
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Contratar nossos serviços é um processo de 4 passos.
          </p>
        </div>
        <div className="relative mt-12">
            <div className="absolute left-1/2 top-12 hidden h-[calc(100%-6rem)] w-1 -translate-x-1/2 bg-gradient-to-b from-[#FF6B35] to-[#E85D04] md:block"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.title} className="flex flex-col items-center text-center p-4">
                <div className="flex-shrink-0 bg-primary rounded-full p-4 border-4 border-white shadow-lg mb-4 relative z-10">
                  {step.icon}
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h3 className="font-headline text-xl font-semibold text-[#0F172A]">{step.title}</h3>
                  <p className="mt-2 text-gray-600">{step.description}</p>
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
