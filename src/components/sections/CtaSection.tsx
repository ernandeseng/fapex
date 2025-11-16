import { Button } from '@/components/ui/button';
import { Mail, Phone } from 'lucide-react';

const CtaSection = () => {
  const phoneNumber = '5515997769467';
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Olá! Preciso de uma entrega rápida e confiável.")}`;
  const email = 'contato@fapexexpress.com.br';

  return (
    <section id="contact" className="relative bg-primary text-primary-foreground py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
       <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-accent/30 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-accent/30 rounded-full filter blur-3xl opacity-50 animate-pulse delay-2000"></div>

      <div className="container relative z-10 text-center">
        <h2 className="font-headline text-3xl md:text-5xl font-bold">
          Precisa de Entrega Rápida e Confiável?
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/80">
          Fale com a Fapex Express agora e resolva sua demanda hoje mesmo. Atendimento disponível todos os dias.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button asChild size="lg" className="bg-card text-card-foreground hover:bg-card/90">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              Chamar no WhatsApp Agora
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10">
            <a href={`tel:${phoneNumber}`}>
              <Phone className="mr-2 h-5 w-5" />
              (15) 99776-9467
            </a>
          </Button>
        </div>
         <div className="mt-6">
            <a href={`mailto:${email}`} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors inline-flex items-center gap-2">
                <Mail className="h-4 w-4" /> Ou envie um e-mail
            </a>
         </div>
      </div>
    </section>
  );
};

export default CtaSection;
