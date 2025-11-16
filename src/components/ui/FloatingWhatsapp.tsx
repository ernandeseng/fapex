import { Button } from '@/components/ui/button';
import WhatsappIcon from '@/components/icons/WhatsappIcon';

const FloatingWhatsapp = () => {
  const phoneNumber = '5515997769467';
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    'Olá! Gostaria de solicitar um serviço.'
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <Button
        size="icon"
        className="h-16 w-16 rounded-full bg-primary hover:bg-accent shadow-lg animate-pulse-orange"
      >
        <WhatsappIcon className="h-8 w-8 text-primary-foreground" />
      </Button>
    </a>
  );
};

export default FloatingWhatsapp;
