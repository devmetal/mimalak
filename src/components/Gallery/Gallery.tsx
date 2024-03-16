import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { GalleryImage } from "../CdImage";

export default function Gallery({
  onOpenChange,
  images,
}: {
  onOpenChange: (val: boolean) => void;
  images: string[];
}) {
  return (
    <Dialog defaultOpen onOpenChange={onOpenChange}>
      <DialogContent>
        <Carousel className="my-4">
          <CarouselContent>
            {images.map((image) => (
              <CarouselItem key={image} className="m-0 p-0 flex justify-center">
                <GalleryImage id={image} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </DialogContent>
    </Dialog>
  );
}
