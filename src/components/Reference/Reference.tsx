"use client";

import { useCallback, useState } from "react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Gallery from "../Gallery";

export default function Reference({
  title,
  description,
  images,
}: {
  title: string;
  description: string;
  images: string[];
}) {
  const [galleryVisible, setGalleryVisible] = useState(false);

  const toggle: React.MouseEventHandler = useCallback((e) => {
    e.stopPropagation();
    setGalleryVisible((cur) => !cur);
  }, []);

  return (
    <>
      {galleryVisible ? (
        <Gallery
          images={images}
          onOpenChange={(val) => setGalleryVisible(val)}
        />
      ) : null}
      <Card
        onClick={toggle}
        className="transition-all ease-linear delay-150 shadow-lg hover:shadow-md hover:-translate-y-2 cursor-pointer hover:scale-95 overflow-hidden relative"
      >
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription className="pb-16">{description}</CardDescription>
        </CardHeader>
        <Button className="absolute left-4 bottom-4 z-10" onClick={toggle}>
          Galéria
        </Button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute bottom-0 left-0"
          preserveAspectRatio="xMaxYMax slice"
          height={100}
          width="100%"
        >
          <path
            fill="rgb(85, 78, 60)"
            fillOpacity="1"
            d="M0,128L40,149.3C80,171,160,213,240,224C320,235,400,213,480,186.7C560,160,640,128,720,138.7C800,149,880,203,960,218.7C1040,235,1120,213,1200,192C1280,171,1360,149,1400,138.7L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </Card>
    </>
  );
}
