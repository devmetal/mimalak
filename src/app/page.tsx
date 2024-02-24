import AppBar from "@/components/AppBar";
import ImageBar from "@/components/ImageBar";
import Reference from "@/components/Reference";

const hb = [
  "/hidegburkolas_webp/IMG_20200612_122516.jpg.webp",
  "/hidegburkolas_webp/IMG_20200616_133321.jpg.webp",
  "/hidegburkolas_webp/IMG_20200618_192313.jpg.webp",
  "/hidegburkolas_webp/IMG_20200706_065013.jpg.webp",
  "/hidegburkolas_webp/IMG_20200828_080826.jpg.webp",
  "/hidegburkolas_webp/IMG_20230203_141127.jpg.webp",
  "/hidegburkolas_webp/IMG_20230210_112904.jpg.webp",
  "/hidegburkolas_webp/IMG_20230210_112942.jpg.webp",
  "/hidegburkolas_webp/IMG_20230210_114023.jpg.webp",
  "/hidegburkolas_webp/IMG_20230526_153055.jpg.webp",
  "/hidegburkolas_webp/IMG_20230708_140846.jpg.webp",
];

const r2022 = [
  "/2022_webp/alaprajz_javitott.jpg.webp",
  "/2022_webp/IMG_0647.jpg.webp",
  "/2022_webp/IMG_20230104_115801.jpg.webp",
  "/2022_webp/IMG_20230325_105633.jpg.webp",
  "/2022_webp/IMG_20230325_110152.jpg.webp",
  "/2022_webp/IMG_20230526_152740.jpg.webp",
  "/2022_webp/IMG_20230526_152746.jpg.webp",
  "/2022_webp/IMG_20230526_152906.jpg.webp",
  "/2022_webp/IMG_20230526_152949.jpg.webp",
  "/2022_webp/IMG_20230526_153215.jpg.webp",
  "/2022_webp/IMG_20230708_140257.jpg.webp",
  "/2022_webp/IMG_20230708_140449.jpg.webp",
];

const r2020 = [
  "/2020_webp/IMG_20191011_131645.jpg.webp",
  "/2020_webp/IMG_20191105_130841.jpg.webp",
  "/2020_webp/IMG_20191204_152724.jpg.webp",
  "/2020_webp/IMG_20200226_122247.jpg.webp",
  "/2020_webp/IMG_20200606_175038.jpg.webp",
  "/2020_webp/IMG_20200612_122549.jpg.webp",
  "/2020_webp/IMG_20210331_094823.jpg.webp",
  "/2020_webp/IMG_20210331_094833.jpg.webp",
];

export default function Home() {
  return (
    <>
      <AppBar />
      <main>
        <ImageBar />
        <section className="flex gap-4 m-4 flex-col">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Rerefenciák
          </h1>
          <Reference images={hb} title="Hideg Burkolás" description="" />
          <Reference
            images={r2022}
            title="2022, Üllő családi ház"
            description=""
          />
          <Reference
            images={r2020}
            title="2020, Üllő családi ház"
            description=""
          />
        </section>
      </main>
    </>
  );
}
