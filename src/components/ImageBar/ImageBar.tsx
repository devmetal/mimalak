"use client";

import { useRef } from "react";
import AutoPlay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
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

  return (
    <Carousel
      className="w-full shadow-2xl"
      opts={{ dragFree: true }}
      plugins={[plugin.current]}
    >
      <CarouselContent className="m-0 p-0">
        {images.map((img, index) => (
          <CarouselItem
            key={index}
            className="m-0 p-0 basis-1/2 md:basis-1/3 lg:basis-1/4"
          >
            <CarouselImage id={img} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
