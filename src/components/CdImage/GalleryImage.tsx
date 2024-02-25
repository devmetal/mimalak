import { pad } from "@cloudinary/url-gen/actions/resize";
import { format, quality } from "@cloudinary/url-gen/actions/delivery";
import { webp } from "@cloudinary/url-gen/qualifiers/format";
import { autoEco } from "@cloudinary/url-gen/qualifiers/quality";
import { useMemo } from "react";
import { cld } from "@/lib/utils";
import {
  AdvancedImage,
  lazyload,
  placeholder,
  responsive,
} from "@cloudinary/react";

export default function GalleryImage({ id }: { id: string }) {
  const image = useMemo(() => {
    return cld
      .image(id)
      .resize(pad().width(1280))
      .delivery(format(webp()))
      .delivery(quality(autoEco()));
  }, [id]);

  return <AdvancedImage cldImg={image} plugins={[lazyload(), placeholder()]} />;
}
