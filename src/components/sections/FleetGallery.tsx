"use client";

import { useState, createContext, useContext } from 'react';
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
} from '@/components/ui/dialog';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import type { FleetVehicle } from '@/lib/fleet-data';

type FleetGalleryContextType = {
  openGallery: (startIndex: number) => void;
};

const FleetGalleryContext = createContext<FleetGalleryContextType | null>(
  null
);

export const useFleetGallery = () => {
  const context = useContext(FleetGalleryContext);
  if (!context) {
    throw new Error(
      'useFleetGallery must be used within a FleetGallery provider'
    );
  }
  return context;
};

type FleetGalleryProps = {
  fleetData: FleetVehicle[];
  children: React.ReactNode;
};

export function FleetGallery({
  fleetData,
  children,
}: FleetGalleryProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  const [mainApi, setMainApi] = useState<CarouselApi>();
  const [thumbApi, setThumbApi] = useState<CarouselApi>();
  const [selectedVehicle, setSelectedVehicle] = useState(fleetData[0]);

  const openGallery = (index: number) => {
    setStartIndex(index);
    setSelectedVehicle(fleetData[index]);
    setIsOpen(true);
  };

  const onThumbClick = (index: number) => {
    mainApi?.scrollTo(index);
  };

  const onSelect = () => {
    if (!mainApi || !thumbApi) return;
    thumbApi.scrollTo(mainApi.selectedScrollSnap());
  };

  return (
    <FleetGalleryContext.Provider value={{ openGallery }}>
      {children}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl p-0 border-0">
          <div className="grid grid-cols-1">
            <Carousel
              setApi={setMainApi}
              onSelect={onSelect}
              className="w-full"
            >
              <CarouselContent>
                {selectedVehicle.images.map((img, index) => (
                  <CarouselItem key={index}>
                    <div className="relative aspect-video">
                      <Image
                        src={img.url}
                        alt={img.alt}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-4" />
              <CarouselNext className="absolute right-4" />
            </Carousel>

            <div className="p-4 bg-card">
              <h3 className="text-xl font-headline text-primary mb-2">
                {selectedVehicle.name}
              </h3>
              <Carousel
                setApi={setThumbApi}
                opts={{
                  align: 'start',
                  containScroll: 'keepSnaps',
                  dragFree: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-2">
                  {selectedVehicle.images.map((img, index) => (
                    <CarouselItem
                      key={index}
                      onClick={() => onThumbClick(index)}
                      className="pl-2 basis-1/4 md:basis-1/6"
                    >
                      <div className="relative aspect-square cursor-pointer rounded-md overflow-hidden ring-offset-background ring-ring focus:outline-none focus:ring-2 focus:ring-offset-2">
                        <Image
                          src={img.url}
                          alt={img.alt}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </FleetGalleryContext.Provider>
  );
}
