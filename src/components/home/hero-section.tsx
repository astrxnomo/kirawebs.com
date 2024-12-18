'use client';

import 'swiper/css';
import 'swiper/css/effect-cards';

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { Autoplay, EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Container from '@/components/home/container';
import { Button } from '@/components/ui/button';

const data = {
  id: 'hero',
  title: 'Tu web, sin complicaciones ni secretos',
  description:
    'Con tecnologías modernas y un enfoque transparente, creamos páginas web fáciles de gestionar, para que tú solo te dediques a lo que más importa: hacer crecer tu negocio.',
  buttonText: 'Conseguir mi web',
  previewImages: [
    {
      src: 'https://img.notionusercontent.com/s3/prod-files-secure%2Fa96fc2d8-c2ff-4207-8f8b-ead87ec386fa%2F1fb2535d-0593-4a7e-b0f7-e7131e12eb0c%2Favatar.webp/size/w=2000?exp=1733883968&sig=ma7QWaJIVNsCwajiTI0o_FkWD4HGU-CMaZq3sbUrWPg',
      alt: 'Project Preview 1',
    },
    {
      src: 'https://img.notionusercontent.com/s3/prod-files-secure%2Fa96fc2d8-c2ff-4207-8f8b-ead87ec386fa%2F1fb2535d-0593-4a7e-b0f7-e7131e12eb0c%2Favatar.webp/size/w=2000?exp=1733883968&sig=ma7QWaJIVNsCwajiTI0o_FkWD4HGU-CMaZq3sbUrWPg',
      alt: 'Project Preview 2',
    },
    {
      src: 'https://img.notionusercontent.com/s3/prod-files-secure%2Fa96fc2d8-c2ff-4207-8f8b-ead87ec386fa%2F1fb2535d-0593-4a7e-b0f7-e7131e12eb0c%2Favatar.webp/size/w=2000?exp=1733883968&sig=ma7QWaJIVNsCwajiTI0o_FkWD4HGU-CMaZq3sbUrWPg',
      alt: 'Project Preview 3',
    },
    {
      src: 'https://img.notionusercontent.com/s3/prod-files-secure%2Fa96fc2d8-c2ff-4207-8f8b-ead87ec386fa%2F1fb2535d-0593-4a7e-b0f7-e7131e12eb0c%2Favatar.webp/size/w=2000?exp=1733883968&sig=ma7QWaJIVNsCwajiTI0o_FkWD4HGU-CMaZq3sbUrWPg',
      alt: 'Project Preview 4',
    },
    {
      src: 'https://img.notionusercontent.com/s3/prod-files-secure%2Fa96fc2d8-c2ff-4207-8f8b-ead87ec386fa%2F1fb2535d-0593-4a7e-b0f7-e7131e12eb0c%2Favatar.webp/size/w=2000?exp=1733883968&sig=ma7QWaJIVNsCwajiTI0o_FkWD4HGU-CMaZq3sbUrWPg',
      alt: 'Project Preview 5',
    },
  ],
};

export function HeroSection() {
  return (
    <Container id={data.id} className="pt-6">
      <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-14">
        <div className="flex-1 space-y-4 text-center lg:text-left">
          <h1 className="text-5xl font-bold tracking-tighter sm:text-5xl lg:text-6xl">
            {data.title}
          </h1>
          <p className="max-w-prose text-muted-foreground">
            {data.description}
          </p>
          <div>
            <Button
              size="lg"
              className="transition-transform duration-300 hover:scale-105"
            >
              {data.buttonText}
              <ArrowRight />
            </Button>
          </div>
        </div>
        <div className="w-full max-w-sm flex-1 p-5 md:max-w-xl">
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards, Autoplay]}
            className="w-full"
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
          >
            {data.previewImages.map((image, index) => (
              <SwiperSlide key={index} className="rounded-lg shadow-xl">
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
    </Container>
  );
}
