"use server";

import AppBar from "@/components/AppBar";
import ImageBar from "@/components/ImageBar";
import Reference from "@/components/Reference";

const r2024 = ["2024/qn5teg53waqbpcq1gygo", "2024/yteps8v03tktnywm69i4"];

const hb = [
  "burkolas/hyuq6g5u7bazu6mbo92a",
  "burkolas/vaa1oifojxn7cbiqpkw7",
  "burkolas/q1wekfzyiita4z3uqwzd",
  "burkolas/eatdwk9qxs7biddi0fc1",
  "burkolas/gqtvy3ddhdhdcnyrv2ys",
  "burkolas/cnlpoxubpmx70a6htfti",
  "burkolas/vhyfssvnxlryhkeonkzf",
  "burkolas/i1d6vvug6mw27akouquc",
  "burkolas/magsrhjdyndgeupzvgzk",
  "burkolas/rjnbjhjjhorzewuxrkcw",
  "burkolas/saahhhwcsw9ju6jonxxd",
];

const r2022 = [
  "2022/be2uxupjtoglsgmzcwby",
  "2022/zyute793g7snhigofiye",
  "2022/zftrw4fwgcs2picunit3",
  "2022/dyu0wsc8zzdddgqeetq8",
  "2022/flq1jxdbmj7paux1zqik",
  "2022/yuhlxur4ocrbhuegedoo",
  "2022/ij7gcyx3v7juskyd9nir",
];

const r2020 = [
  "2020/ebyxy5vmztfugwwmgrie",
  "2020/k0hucyknz5j7wannhys7",
  "2020/phnstqatgq41enocmqen",
  "2020/kewecfvtoxztht6whmfx",
  "2020/g7kodha03l0jpvyqjmz4",
  "2020/mffdsxxl2kyicygobxyf",
];

export default async function Home() {
  return (
    <>
      <AppBar />
      <main>
        <ImageBar />
        <section className="flex justify-center items-center flex-col relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="absolute top-0"
            preserveAspectRatio="xMaxYMin slice"
            height={400}
            width="100%"
          >
            <path
              fill="rgb(85, 78, 60)"
              fill-opacity="1"
              d="M0,96L26.7,101.3C53.3,107,107,117,160,138.7C213.3,160,267,192,320,208C373.3,224,427,224,480,202.7C533.3,181,587,139,640,138.7C693.3,139,747,181,800,197.3C853.3,213,907,203,960,170.7C1013.3,139,1067,85,1120,69.3C1173.3,53,1227,75,1280,106.7C1333.3,139,1387,181,1413,202.7L1440,224L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"
            ></path>
          </svg>
          <h1 className="relative z-10 scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-4xl my-8 text-background">
            Referenciák
          </h1>
          <div className="relative z-10 w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
            <Reference
              images={r2024}
              title="2024"
              description="Új építésű korszerű, A ++ energihatékony  108 nm-es családi ház +40 nm  terasz-  kb. 570 nm telekrészen nov-dec átadással."
            />
            <Reference
              images={r2022}
              title="2022"
              description="Új építésű ikerházak  96,5 nm, önálló telekrészeken társasházi alapítóval A++ energia besorolással (ELADVA) "
            />
            <Reference
              images={r2020}
              title="2020"
              description="Önálló családi ház  108 nm-es  A+ besorolással (Eladva)"
            />
            <Reference
              images={hb}
              title="Hidegburkolás"
              description="Vállalunk - lakások, otthonok, terasz  stb. hidegburkolás munkálatait."
            />
          </div>
        </section>
      </main>
    </>
  );
}
