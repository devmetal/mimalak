import Link from "next/link";
import { Button } from "../ui/button";
import { cld } from "@/lib/utils";
import { format, quality } from "@cloudinary/url-gen/actions/delivery";
import { webp } from "@cloudinary/url-gen/qualifiers/format";
import { autoBest } from "@cloudinary/url-gen/qualifiers/quality";
import LazyImage from "../LazyImage";

// logo-bg-rem-cut_irtpkh

const img = cld
  .image("logo-bg-rem-cut_irtpkh")
  .delivery(format(webp()))
  .delivery(quality(autoBest()))
  .toURL();

function AppBar() {
  return (
    <nav className="p-4 flex gap-4 items-center">
      <div className="flex-1 cursor-pointer">
        <Link href="/">
          <img src={img} alt="Mima-Lak" className="h-12" />
        </Link>
      </div>

      <Link href="/contact">
        <Button>Kapcsolat</Button>
      </Link>
    </nav>
  );
}

export default AppBar;
