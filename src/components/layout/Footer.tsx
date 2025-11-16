import Link from 'next/link';
import { Facebook, Instagram } from 'lucide-react';
import FapexLogo from '@/components/icons/FapexLogo';
import WhatsappIcon from '@/components/icons/WhatsappIcon';

const Footer = () => {
  const phoneNumber = '5515997769467';
  const whatsappLink = `https://wa.me/${phoneNumber}`;
  const email = 'contato@fapexexpress.com.br';
  const instagramLink = 'https://www.instagram.com/fabio.pereira.express';

  return (
    <footer className="bg-card text-card-foreground border-t border-border/50">
      <div className="container py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: About */}
        <div className="space-y-4">
          <FapexLogo />
          <p className="text-sm text-muted-foreground max-w-xs">
            Serviços de transporte rápido e confiável para empresas e pessoas físicas.
          </p>
          <div className="flex items-center space-x-4">
            <a
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="WhatsApp"
            >
              <WhatsappIcon className="h-6 w-6" />
            </a>
            {/* Add Facebook link when available */}
          </div>
        </div>

        {/* Column 2: Services */}
        <div className="space-y-4">
          <h3 className="font-headline text-lg font-semibold">Serviços</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Motoboy
              </Link>
            </li>
            <li>
              <Link href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Utilitários
              </Link>
            </li>
            <li>
              <Link href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                PickUp
              </Link>
            </li>
            <li>
              <Link href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Transfer Executivo
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div className="space-y-4">
          <h3 className="font-headline text-lg font-semibold">Contato</h3>
          <ul className="space-y-2">
            <li>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                <WhatsappIcon className="h-4 w-4" /> (15) 99776-9467
              </a>
            </li>
            <li>
              <a href={`mailto:${email}`} className="text-sm text-muted-foreground hover:text-primary transition-colors break-all">
                {email}
              </a>
            </li>
            <li>
              <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                @fabio.pereira.express
              </a>
            </li>
            <li className="text-sm text-muted-foreground">
                Sorocaba - SP
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/50 py-6">
        <div className="container text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Fapex Express - Serviços Rápidos. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
