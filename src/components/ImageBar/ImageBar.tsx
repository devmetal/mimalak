"use client";

import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import AutoPlay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const images = [
  "/2022/IMG_0647.jpg",
  "/2022/IMG_20230104_115801.jpg",
  "/2022/IMG_20230325_110152.jpg",
  "/2022/IMG_20230526_152740.jpg",
  "/2020/IMG_20210331_094823.jpg",
  "/2022/alaprajz_javitott.jpg",
  "/2020/IMG_20210331_094833.jpg",
  "/2020/IMG_20191011_131645.jpg",
  "/2020/IMG_20200226_122247.jpg",
];

export default function ImageBar() {
  const plugin = useRef(
    AutoPlay({
      delay: 2000,
      stopOnInteraction: true,
    })
  );
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
