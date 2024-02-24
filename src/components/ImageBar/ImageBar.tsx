/* eslint-disable @next/next/no-img-element */
"use client";

import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import AutoPlay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import useImagePreload from "@/lib/hooks/useImagePreload";
import { Skeleton } from "../ui/skeleton";

const images = [
  "/2022_webp/IMG_0647.jpg.webp",
  "/2022_webp/IMG_20230104_115801.jpg.webp",
  "/2022_webp/IMG_20230325_110152.jpg.webp",
  "/2022_webp/IMG_20230526_152740.jpg.webp",
  "/2020_webp/IMG_20210331_094823.jpg.webp",
  "/2022_webp/alaprajz_javitott.jpg.webp",
  "/2020_webp/IMG_20210331_094833.jpg.webp",
  "/2020_webp/IMG_20191011_131645.jpg.webp",
  "/2020_webp/IMG_20200226_122247.jpg.webp",
  "/hidegburkolas_webp/IMG_20200706_065013.jpg.webp",
  "/hidegburkolas_webp/IMG_20200828_080826.jpg.webp",
  "/2022_webp/IMG_20230526_152740.jpg.webp",
  "/2022_webp/IMG_20230526_152746.jpg.webp",
  "/2022_webp/IMG_20230526_152906.jpg.webp",
  "/2022_webp/IMG_20230526_152949.jpg.webp",
  "/2022_webp/IMG_20230526_153215.jpg.webp",
  "/hidegburkolas_webp/IMG_20230203_141127.jpg.webp",
  "/hidegburkolas_webp/IMG_20230210_112904.jpg.webp",
  "/2020_webp/IMG_20191204_152724.jpg.webp",
  "/2020_webp/IMG_20200226_122247.jpg.webp",
  "/2020_webp/IMG_20200606_175038.jpg.webp",
];

export default function ImageBar() {
  const plugin = useRef(
    AutoPlay({
      delay: 2000,
      stopOnInteraction: false,
    })
  );

  const [loading] = useImagePreload(images);

  if (loading) {
    return (
      <Carousel className="w-full">
        <CarouselContent>
          <CarouselItem className="pl-0 md:basis-1/2 lg:basis-1/3">
            <Skeleton className="w-full h-[250px]" />
          </CarouselItem>
          <CarouselItem className="pl-0 md:basis-1/2 lg:basis-1/3">
            <Skeleton className="w-full h-[250px]" />
          </CarouselItem>
          <CarouselItem className="pl-0 md:basis-1/2 lg:basis-1/3">
            <Skeleton className="w-full h-[250px]" />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    );
  }

  return (
    <Carousel
      className="w-full"
      opts={{ dragFree: true }}
      plugins={[plugin.current]}
    >
      <CarouselContent>
        {images.map((img, index) => (
          <CarouselItem key={index} className="pl-0 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-video items-center justify-center p-0">
                  <img
                    alt=""
                    src={img}
                    className="w-full h-full object-cover"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
