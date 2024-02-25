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
import { CarouselImage } from "../CdImage";

const images = [
  "2024/qn5teg53waqbpcq1gygo",
  "2024/yteps8v03tktnywm69i4",
  "2022/zyute793g7snhigofiye",
  "2022/glulaln8yol3jcwhudrd",
  "2022/w9f4kfqmeb1fxfnhsmot",
  "2022/jxfi0zbsbxliw9nllrf6",
  "2022/yuhlxur4ocrbhuegedoo",
  "2022/nltoxdijfnvp3l9ev7uy",
  "2020/kewecfvtoxztht6whmfx",
  "2020/k0hucyknz5j7wannhys7",
  "2020/g7kodha03l0jpvyqjmz4",
  "burkolas/gqtvy3ddhdhdcnyrv2ys",
  "burkolas/saahhhwcsw9ju6jonxxd",
  "burkolas/rjnbjhjjhorzewuxrkcw",
];

export default function ImageBar() {
  const plugin = useRef(
    AutoPlay({
      delay: 2000,
      stopOnInteraction: false,
    })
  );

  //const [loading] = useImagePreload(images);

  /*if (loading) {
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
  }*/

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
                  {/*<img
                    alt=""
                    src={img}
                    className="w-full h-full object-cover"
        />*/}
                  <CarouselImage id={img} />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
