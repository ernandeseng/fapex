import Link from 'next/link';
import { Instagram } from 'lucide-react';
import FapexLogo from '@/components/icons/FapexLogo';
import WhatsappIcon from '@/components/icons/WhatsappIcon';

const Footer = () => {
  const phoneNumber = '5515997769467';
  const whatsappLink = `https://wa.me/${phoneNumber}`;
  const email = 'fabiopereiradesorocaba@gmail.com';
  const instagramLink = 'https://www.instagram.com/fabio.pereira.express';

  return (
    <footer className="bg-[#0F172A] text-gray-300 border-t-3 border-t-transparent" style={{borderImage: 'linear-gradient(to right, #FF6B35, #E85D04) 1'}}>
      <div className="container py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <FapexLogo />
          <p className="text-sm text-muted-foreground max-w-xs">
            Serviços de transporte rápido com agilidade e confiança para empresas e pessoas físicas.
          </p>
          <div className="flex items-center space-x-4">
            <a
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-transform duration-300 hover:scale-110"
              aria-label="Instagram"
            >
              <div className="h-10 w-10 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-full flex items-center justify-center">
                <Instagram className="h-6 w-6 text-white" />
              </div>
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-transform duration-300 hover:scale-110"
              aria-label="WhatsApp"
            >
               <div className="h-10 w-10 bg-[#25D366] rounded-full flex items-center justify-center">
                <WhatsappIcon className="h-6 w-6 text-white" />
              </div>
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-headline text-lg font-semibold text-[#FF6B35]">Serviços</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#services" className="text-sm text-gray-400 hover:text-[#FF6B35] transition-colors">
                Motoboy
              </Link>
            </li>
            <li>
              <Link href="#services" className="text-sm text-gray-400 hover:text-[#FF6B35] transition-colors">
                Utilitários VUC
              </Link>
            </li>
            <li>
              <Link href="#services" className="text-sm text-gray-400 hover:text-[#FF6B35] transition-colors">
                Utilitários compactos
              </Link>
            </li>
            <li>
              <Link href="#services" className="text-sm text-gray-400 hover:text-[#FF6B35] transition-colors">
                Transfer Executivo
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="font-headline text-lg font-semibold text-[#FF6B35]">Contato</h3>
          <ul className="space-y-2">
            <li>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-[#FF6B35] transition-colors flex items-center gap-2">
                <WhatsappIcon className="h-4 w-4" /> (15) 99776-9467
              </a>
            </li>
            <li>
              <a href={`mailto:${email}`} className="text-sm text-gray-400 hover:text-[#FF6B35] transition-colors break-all">
                {email}
              </a>
            </li>
            <li className="text-sm text-gray-400">
                Sorocaba - SP
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-[#020617] py-4">
         <div className="container border-t border-orange-500/30 pt-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} FAPEXpress - Serviços Rápidos. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
