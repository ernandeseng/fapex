'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, Phone } from 'lucide-react';
import FapexLogo from '@/components/icons/FapexLogo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navLinks = [
  { href: '#services', label: 'Serviços' },
  { href: '#why-us', label: 'Diferenciais' },
  { href: '#how-it-works', label: 'Como Funciona' },
  { href: '#fleet', label: 'Frota' },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const phoneNumber = '5515997769467';
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  const NavLink = ({
    href,
    label,
    onClick,
    className,
  }: {
    href: string;
    label: string;
    onClick?: () => void;
    className?: string;
  }) => (
    <Link
      href={href}
      onClick={onClick}
      className={`text-sm font-medium text-muted-foreground transition-colors hover:text-primary ${className}`}
    >
      {label}
    </Link>
  );

  return (
    <header className="absolute top-0 z-50 w-full bg-transparent">
      <div className="container flex h-20 items-center justify-between">
        <FapexLogo />
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>
        <div className="hidden items-center gap-4 md:flex">
          <Button asChild>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Phone className="mr-2 h-4 w-4" />
              (15) 99776-9467
            </a>
          </Button>
        </div>
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-card">
              <div className="p-4">
                <FapexLogo />
                <nav className="mt-8 flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.href}
                      {...link}
                      onClick={() => setOpen(false)}
                      className="text-lg"
                    />
                  ))}
                  <Button asChild size="lg" className="mt-4">
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Chamar no WhatsApp
                    </a>
                  </Button>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
