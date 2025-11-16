import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card } from '@/components/ui/card';
import { CheckCircle2, Truck } from 'lucide-react';

const CoverageSection = () => {
  const mapImage = PlaceHolderImages.find((img) => img.id === 'coverage-map');
  const cities = ['São Paulo, grande SP', 'Campinas e região', 'Sorocaba e região'];

  return (
    <section id="coverage" className="py-16 md:py-24 bg-[#0F172A] text-white" style={{
      backgroundImage: "repeating-linear-gradient(45deg, rgba(255,107,53,0.1), rgba(255,107,53,0.1) 1px, transparent 1px, transparent 20px)"
    }}>
      <div className="container">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">
            Onde Atendemos
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Atendimento com frequência diária nas principais regiões.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-3">
                {mapImage && (
                <Card className="overflow-hidden shadow-lg bg-transparent border-primary/50">
                    <Image
                    src={mapImage.imageUrl}
                    alt={mapImage.description}
                    width={800}
                    height={600}
                    data-ai-hint={mapImage.imageHint}
                    className="w-full h-auto object-cover opacity-80"
                    />
                </Card>
                )}
            </div>
            <div className="lg:col-span-2">
                <h3 className="font-headline text-xl font-semibold text-primary mb-4">Atendimento Diário</h3>
                <ul className="space-y-3">
                    {cities.map((city) => (
                        <li key={city} className="flex items-center gap-3 text-gray-200">
                            <CheckCircle2 className="h-5 w-5 text-primary" />
                            <span>{city}</span>
                        </li>
                    ))}
                </ul>
                <div className="mt-8 p-4 bg-primary/10 border border-primary/30 rounded-lg text-primary-foreground">
                  <div className="flex items-center gap-3">
                    <Truck className="h-6 w-6 text-primary" />
                    <p className="text-base font-semibold">
                        Atendemos outros estados também. Consulte-nos!
                    </p>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageSection;
