'use client';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { fleetData } from '@/lib/fleet-data';
import { useFleetGallery } from '@/components/sections/FleetGallery';
import { Button } from '../ui/button';
import { Eye } from 'lucide-react';

const FleetSection = () => {
  const { openGallery } = useFleetGallery();

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
          {fleetData.map((vehicle, index) => {
            const image = vehicle.images[0];
            if (!image) return null;

            return (
              <Card
                key={vehicle.id}
                className="group overflow-hidden relative border-2 border-[#0F172A] hover:border-primary transition-all duration-300 shadow-lg flex flex-col"
              >
                <div className="relative">
                  <Image
                    src={image.url}
                    alt={image.alt}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/50 to-transparent" />
                </div>

                <CardContent className="absolute bottom-0 left-0 p-4 w-full flex flex-col justify-end h-full">
                  <div>
                    <h3 className="font-headline text-xl font-bold text-white">
                      {vehicle.name}
                    </h3>
                    <p className="text-sm text-primary">{vehicle.capacity}</p>
                  </div>
                </CardContent>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button
                    variant="outline"
                    className="bg-white/80 text-primary hover:bg-white"
                    onClick={() => openGallery(index)}
                  >
                    <Eye className="mr-2 h-4 w-4" />
                    Ver Galeria
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FleetSection;
