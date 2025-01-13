"use client"

import "swiper/css"
import "swiper/css/effect-cards"

import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { Autoplay, EffectCards } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import Container from "@/components/home/container"
import { Button } from "@/components/ui/button"

const data = {
  id: "hero",
  title: "Tu web, sin complicaciones ni secretos",
  description:
    "Con tecnologías modernas y un enfoque transparente, creamos páginas web a medida, para que tú solo te dediques a lo que más importa: hacer crecer tu negocio.",
  buttonText: "Conseguir mi web",
  previewImages: [
    {
      src: "https://xsnn3yjlik38vz3y.public.blob.vercel-storage.com/projects/eventify-8RwssdeZe87q6kesjPtLZEIOASfQhz.webp",
      alt: "Project Preview 1",
    },
    {
      src: "https://xsnn3yjlik38vz3y.public.blob.vercel-storage.com/projects/pequenglish-Ny7BFUHfKL431yUoJsQa9iW9rbErjI.webp",
      alt: "Project Preview 2",
    },
    {
      src: "https://xsnn3yjlik38vz3y.public.blob.vercel-storage.com/projects/kirawebs-ReUiZXrVRyZJRaeQxM1GrQz85jQPRI.webp",
      alt: "Project Preview 3",
    },
  ],
}

export function HeroSection() {
  return (
    <Container id={data.id} className="py-8 md:pt-16">
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
              className="relative z-0 transition duration-300 after:absolute after:left-0 after:top-0 after:-z-10 after:size-full after:rounded after:bg-primary hover:scale-105 hover:after:scale-x-125 hover:after:scale-y-150 hover:after:opacity-0 hover:after:transition hover:after:duration-500 active:scale-110"
            >
              {data.buttonText}
              <ArrowRight />
            </Button>
          </div>
        </div>
        <div className="w-full max-w-sm flex-1 p-5 md:max-w-xl">
          <Swiper
            effect={"cards"}
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
              <SwiperSlide key={index} className="rounded shadow-2xl">
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
  )
}
