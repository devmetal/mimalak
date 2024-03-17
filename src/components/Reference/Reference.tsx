"use client";

import { useCallback, useState } from "react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
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
        className="transition-all ease-linear delay-150 shadow-lg hover:shadow-md hover:-translate-y-2 cursor-pointer hover:scale-95"
      >
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={toggle}>Galéria</Button>
        </CardContent>
      </Card>
    </>
  );
}
