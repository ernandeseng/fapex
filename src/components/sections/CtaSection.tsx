import { Button } from '@/components/ui/button';
import { Mail, Phone } from 'lucide-react';

const CtaSection = () => {
  const phoneNumber = '5515997769467';
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Olá! Preciso de uma entrega rápida e confiável.")}`;
  const email = 'contato@fapexexpress.com.br';

  return (
    <section id="contact" className="relative text-white py-20 md:py-28 overflow-hidden bg-gradient-to-r from-[#FF6B35] to-[#E85D04]">
      <div className="absolute inset-0 bg-black/10"></div>
       <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-white/10 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-white/10 rounded-full filter blur-3xl opacity-50 animate-pulse delay-2000"></div>

      <div className="container relative z-10 text-center">
        <h2 className="font-headline text-3xl md:text-5xl font-bold [text-shadow:0_2px_4px_rgba(0,0,0,0.3)]">
          Precisa de Entrega Rápida e Confiável?
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-white/90">
          Fale com a Fapex Express agora e resolva sua demanda hoje mesmo. Atendimento disponível todos os dias.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button asChild size="lg" className="bg-white text-[#0F172A] hover:bg-slate-200 scale-100 hover:scale-105 transition-transform duration-300 shadow-lg">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              CHAMAR NO WHATSAPP
            </a>
          </Button>
          <div className="p-3 bg-black/20 rounded-lg">
            <a href={`tel:${phoneNumber}`} className="text-xl font-bold">
              <Phone className="mr-2 h-5 w-5 inline-block" />
              (15) 99776-9467
            </a>
          </div>
        </div>
         <div className="mt-8 inline-block bg-white text-primary rounded-full px-4 py-1 font-semibold">
           Disponível 24/7
         </div>
      </div>
    </section>
  );
};

export default CtaSection;
