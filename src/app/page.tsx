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
            height={320}
            width="100%"
          >
            <path
              fill="rgb(85, 78, 60)"
              fillOpacity="1"
              d="M0,128L40,149.3C80,171,160,213,240,224C320,235,400,213,480,186.7C560,160,640,128,720,138.7C800,149,880,203,960,218.7C1040,235,1120,213,1200,192C1280,171,1360,149,1400,138.7L1440,128L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
            ></path>
          </svg>
          <h1 className="relative z-10 scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-4xl my-8 text-background">
            Referenciák
          </h1>
          <div className="relative z-10 w-2/3 grid grid-cols-1 lg:grid-cols-2 gap-8 mt-4">
            <Reference
              images={r2024}
              title="2024"
              description="Új építésű korszerű, A ++ energihatékony  108 nm-es családi ház +38 nm  terasz-  kb. 540 nm telekrészen nov-dec átadással."
            />
            <Reference
              images={hb}
              title="Hidegburkolás"
              description="Vállalunk - lakások, otthonok, terasz  stb. hidegburkolás munkálatait."
            />
            <Reference
              images={r2022}
              title="2022"
              description="Új építésű ikerházak  96,5 nm, önálló telekrészeken társasházi alapítóval A++ energia besorolással (ELADVA) "
            />
            <Reference
              images={r2020}
              title="2020"
              description="Önálló családi ház  108 nm-es  A+ besorolással (ELADVA)"
            />
          </div>
        </section>
      </main>
    </>
  );
}
