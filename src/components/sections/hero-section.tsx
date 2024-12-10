'use client';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { Autoplay, EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Button } from '@/components/ui/button';

const previewImages = [
  {
    src: 'https://img.notionusercontent.com/s3/prod-files-secure%2Fa96fc2d8-c2ff-4207-8f8b-ead87ec386fa%2F1fb2535d-0593-4a7e-b0f7-e7131e12eb0c%2Favatar.webp/size/w=2000?exp=1733846682&sig=sM1Zgu33YWCSH2Bzo13K_ZvOvt3sE_ckCiphGK5p5yU',
    alt: 'Project Preview 1',
  },
  {
    src: 'https://img.notionusercontent.com/s3/prod-files-secure%2Fa96fc2d8-c2ff-4207-8f8b-ead87ec386fa%2F1fb2535d-0593-4a7e-b0f7-e7131e12eb0c%2Favatar.webp/size/w=2000?exp=1733846682&sig=sM1Zgu33YWCSH2Bzo13K_ZvOvt3sE_ckCiphGK5p5yU',
    alt: 'Project Preview 2',
  },
  {
    src: 'https://img.notionusercontent.com/s3/prod-files-secure%2Fa96fc2d8-c2ff-4207-8f8b-ead87ec386fa%2F1fb2535d-0593-4a7e-b0f7-e7131e12eb0c%2Favatar.webp/size/w=2000?exp=1733846682&sig=sM1Zgu33YWCSH2Bzo13K_ZvOvt3sE_ckCiphGK5p5yU',
    alt: 'Project Preview 3',
  },
  {
    src: 'https://img.notionusercontent.com/s3/prod-files-secure%2Fa96fc2d8-c2ff-4207-8f8b-ead87ec386fa%2F1fb2535d-0593-4a7e-b0f7-e7131e12eb0c%2Favatar.webp/size/w=2000?exp=1733846682&sig=sM1Zgu33YWCSH2Bzo13K_ZvOvt3sE_ckCiphGK5p5yU',
    alt: 'Project Preview 4',
  },
  {
    src: 'https://img.notionusercontent.com/s3/prod-files-secure%2Fa96fc2d8-c2ff-4207-8f8b-ead87ec386fa%2F1fb2535d-0593-4a7e-b0f7-e7131e12eb0c%2Favatar.webp/size/w=2000?exp=1733846682&sig=sM1Zgu33YWCSH2Bzo13K_ZvOvt3sE_ckCiphGK5p5yU',
    alt: 'Project Preview 5',
  },
];

export function HeroSection() {
  return (
    <section className="pb-8 pt-28 lg:pb-24 lg:pt-36">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col items-center gap-8 lg:flex-row">
          <div className="flex-1 space-y-4 text-center lg:text-left">
            <h1 className="text-5xl font-bold tracking-tighter sm:text-5xl lg:text-6xl">
              Páginas web modernas, fáciles de editar
            </h1>
            <p className="max-w-prose text-muted-foreground">
              Desarrollo web profesional que impulsa resultados. Creamos
              soluciones digitales innovadoras que transforman negocios.
            </p>
            <div>
              <Button size="lg">
                Conseguir mi web
                <ArrowRight />
              </Button>
            </div>
          </div>
          <div className="w-full max-w-3xl flex-1 p-5">
            <Swiper
              effect={'cards'}
              grabCursor={true}
              modules={[EffectCards, Autoplay]}
              className="w-full"
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
            >
              {previewImages.map((image, index) => (
                <SwiperSlide
                  key={index}
                  className="overflow-hidden rounded-lg shadow-xl"
                >
                  <div className="aspect-video">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
