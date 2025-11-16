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
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <Button
        size="icon"
        className="h-16 w-16 rounded-full bg-primary hover:bg-accent shadow-lg transition-transform duration-300 group-hover:scale-110"
        style={{
          animation: 'pulse-orange 2s infinite'
        }}
      >
        <WhatsappIcon className="h-8 w-8 text-white" />
      </Button>
    </a>
  );
};

export default FloatingWhatsapp;
