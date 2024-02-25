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
        <div className="p-4">
          <Carousel className="w-full ">
            <CarouselContent>
              {images.map((image) => (
                <CarouselItem key={image}>
                  <div>
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-0">
                        <GalleryImage id={image} />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </DialogContent>
    </Dialog>
  );
}
