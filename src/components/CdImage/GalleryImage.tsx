import { fill } from "@cloudinary/url-gen/actions/resize";
import { format, quality } from "@cloudinary/url-gen/actions/delivery";
import { webp } from "@cloudinary/url-gen/qualifiers/format";
import { autoBest, autoGood } from "@cloudinary/url-gen/qualifiers/quality";
import { useMemo } from "react";
import { cld } from "@/lib/utils";
import LazyImage from "../LazyImage";
import { ar16X9 } from "@cloudinary/url-gen/qualifiers/aspectRatio";

export default function GalleryImage({ id }: { id: string }) {
  const image = useMemo(() => {
    return cld
      .image(id)
      .resize(fill().width(960).aspectRatio(ar16X9()))
      .delivery(format(webp()))
      .delivery(quality(autoBest()));
  }, [id]);

  return <LazyImage width={960} height={540} src={image.toURL()} alt="" />;
}
