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
];

export default function ImageBar() {
  const plugin = useRef(
    AutoPlay({
      delay: 2000,
    })
  );

  const [loading] = useImagePreload(images);

  if (loading) {
    return <h1>Loading....</h1>;
  }

  return (
    <Carousel className="w-full" plugins={[plugin.current]}>
      <CarouselContent>
        {images.map((img, index) => (
          <CarouselItem key={index} className="pl-0 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent
                  style={{
                    backgroundImage: `url(${img})`,
                    backgroundSize: "cover",
                  }}
                  className="flex aspect-video items-center justify-center"
                ></CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
