import { useMemo } from "react";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { format, quality } from "@cloudinary/url-gen/actions/delivery";
import { webp } from "@cloudinary/url-gen/qualifiers/format";
import { ar16X9 } from "@cloudinary/url-gen/qualifiers/aspectRatio";
import { cld } from "@/lib/utils";
import LazyImage from "../LazyImage";

export default function CarouselImage({ id }: { id: string }) {
  const image = useMemo(() => {
    return cld
      .image(id)
      .resize(fill().width(540).aspectRatio(ar16X9()))
      .delivery(format(webp()))
      .delivery(quality(60));
  }, [id]);

  return (
    <div>
      <LazyImage alt="" src={image.toURL()} width={540} height={304} />
    </div>
  );
}
