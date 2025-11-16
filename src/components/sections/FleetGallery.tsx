"use client";

import * as React from 'react';
import { useState, createContext, useContext, useEffect } from 'react';
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
  const [selectedVehicle, setSelectedVehicle] = useState<FleetVehicle | null>(null);

  const openGallery = (index: number) => {
    setStartIndex(index);
    setIsOpen(true);
  };

  useEffect(() => {
    if (isOpen && fleetData[startIndex]) {
      setSelectedVehicle(fleetData[startIndex]);
      mainApi?.scrollTo(0, true);
      thumbApi?.scrollTo(0, true);
    }
  }, [isOpen, startIndex, fleetData, mainApi, thumbApi]);

  const onThumbClick = (index: number) => {
    mainApi?.scrollTo(index);
  };
  
  const onSelect = React.useCallback(() => {
    if (!mainApi || !thumbApi) return;
    thumbApi.scrollTo(mainApi.selectedScrollSnap());
  }, [mainApi, thumbApi]);

  useEffect(() => {
    if (!mainApi) return;
    onSelect();
    mainApi.on('select', onSelect);
    mainApi.on('reInit', onSelect);
  }, [mainApi, onSelect]);

  return (
    <FleetGalleryContext.Provider value={{ openGallery }}>
      {children}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl p-0 border-0">
          {selectedVehicle && (
            <div className="grid grid-cols-1">
              <Carousel
                setApi={setMainApi}
                opts={{ startIndex: 0 }}
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
          )}
        </DialogContent>
      </Dialog>
    </FleetGalleryContext.Provider>
  );
}
