import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const fleetVehicles = [
  {
    id: 'motorcycle-courier',
    name: 'Motoboy',
    capacity: 'Documentos e Pequenos Pacotes',
  },
  {
    id: 'box-truck',
    name: 'Utilitário Baú',
    capacity: 'Cargas Médias até 1000kg',
  },
  {
    id: 'pickup-truck',
    name: 'PickUp',
    capacity: 'Cargas Volumosas e Pesadas',
  },
  {
    id: 'executive-sedan',
    name: 'Transfer Executivo',
    capacity: 'Até 4 Passageiros com Conforto',
  },
];

const FleetSection = () => {
  return (
    <section id="fleet" className="py-16 md:py-24 bg-white text-gray-800">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold md:text-4xl text-[#0F172A]">
            Nossa Frota Completa
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Veículos revisados e preparados para qualquer demanda.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {fleetVehicles.map((vehicle) => {
            const image = PlaceHolderImages.find((img) => img.id === vehicle.id);
            if (!image) return null;

            return (
              <Card key={vehicle.id} className="group overflow-hidden relative border-2 border-[#0F172A] hover:border-primary transition-all duration-300 shadow-lg">
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  width={600}
                  height={400}
                  data-ai-hint={image.imageHint}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/50 to-transparent" />
                <CardContent className="absolute bottom-0 left-0 p-4 w-full">
                  <h3 className="font-headline text-xl font-bold text-white">{vehicle.name}</h3>
                  <p className="text-sm text-primary">{vehicle.capacity}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FleetSection;
