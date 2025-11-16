import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

const CoverageSection = () => {
  const mapImage = PlaceHolderImages.find((img) => img.id === 'coverage-map');
  const cities = ['Sorocaba', 'Votorantim', 'Araçoiaba da Serra', 'Salto de Pirapora', 'Itu', 'Salto', 'Alumínio', 'Mairinque', 'São Roque', 'Iperó'];

  return (
    <section id="coverage" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">
            Onde Atendemos
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Atendimento em Sorocaba e Região Metropolitana.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-3">
                {mapImage && (
                <Card className="overflow-hidden shadow-lg">
                    <Image
                    src={mapImage.imageUrl}
                    alt={mapImage.description}
                    width={800}
                    height={600}
                    data-ai-hint={mapImage.imageHint}
                    className="w-full h-auto object-cover"
                    />
                </Card>
                )}
            </div>
            <div className="lg:col-span-2">
                <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                    {cities.map((city) => (
                        <li key={city} className="flex items-center gap-2 text-muted-foreground">
                            <CheckCircle2 className="h-5 w-5 text-primary" />
                            <span>{city}</span>
                        </li>
                    ))}
                </ul>
                <p className="mt-6 text-sm text-muted-foreground italic">
                    * Consulte atendimento para outras localidades.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageSection;
