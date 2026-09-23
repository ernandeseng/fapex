'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';

const slides = [
  {
    src: '/images/galeria/motoboy.jpg',
    alt: 'Arte sobre entregas rápidas de motoboy em São Paulo e Campinas',
    width: 1220,
    height: 1565,
  },
  {
    src: '/images/galeria/caminhao-vuc.jpg',
    alt: 'Arte sobre transporte de cargas com caminhão VUC da FAP Express',
    width: 1220,
    height: 823,
  },
  {
    src: '/images/galeria/transporte-executivo.jpg',
    alt: 'Arte sobre transporte executivo para aeroportos, hotéis e viagens',
    width: 1185,
    height: 1600,
  },
  {
    src: '/images/galeria/entrega-rapida.jpg',
    alt: 'Arte sobre entregas rápidas e seguras com veículo utilitário',
    width: 1129,
    height: 1599,
  },
];

export default function PromotionalGallery() {
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    if (!api) return;
    const updateSelected = () => setSelected(api.selectedScrollSnap());
    updateSelected();
    api.on('select', updateSelected);
    api.on('reInit', updateSelected);
    return () => {
      api.off('select', updateSelected);
      api.off('reInit', updateSelected);
    };
  }, [api]);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotion = () => setReducedMotion(query.matches);
    updateMotion();
    query.addEventListener('change', updateMotion);
    return () => query.removeEventListener('change', updateMotion);
  }, []);

  useEffect(() => {
    if (!api || paused || reducedMotion) return;
    const timer = window.setInterval(() => {
      if (document.visibilityState === 'visible') api.scrollNext();
    }, 6000);
    return () => window.clearInterval(timer);
  }, [api, paused, reducedMotion]);

  return (
    <section id="galeria" aria-label="Galeria de serviços" className="bg-[#0F172A] py-16 text-white md:py-24">
      <div className="container max-w-6xl">
        <div className="mb-8 text-center">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">Conheça nossos serviços</h2>
        </div>

        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setPaused(false);
          }}
        >
          <Carousel setApi={setApi} opts={{ loop: true }} aria-label="Fotos dos serviços" className="w-full">
            <CarouselContent>
              {slides.map((slide, index) => (
                <CarouselItem key={slide.src}>
                  <div className="flex h-[min(72vh,600px)] min-h-[330px] items-center justify-center overflow-hidden rounded-lg bg-[#101b31] p-2 sm:p-4">
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      width={slide.width}
                      height={slide.height}
                      sizes="(max-width: 768px) 100vw, 1024px"
                      className="h-full w-full object-contain"
                      loading={index === 0 ? 'eager' : 'lazy'}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div className="mt-5 flex items-center justify-center gap-5">
            <button type="button" onClick={() => api?.scrollPrev()} aria-label="Imagem anterior" className="rounded-full border border-white/40 p-2 transition-colors hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400">
              <ChevronLeft aria-hidden="true" className="h-6 w-6" />
            </button>
            <span className="min-w-14 text-center text-sm tabular-nums" aria-live="polite">{selected + 1} / {slides.length}</span>
            <button type="button" onClick={() => api?.scrollNext()} aria-label="Próxima imagem" className="rounded-full border border-white/40 p-2 transition-colors hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400">
              <ChevronRight aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
