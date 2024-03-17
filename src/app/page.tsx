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

export default function Home() {
  return (
    <>
      <AppBar />
      <main>
        <ImageBar />
        <section className="m-4 flex justify-center items-center flex-col">
          <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-4xl my-8">
            Referenciák
          </h1>
          <div className="w-2/3 grid grid-cols-2 gap-8 mt-4">
            <Reference
              images={r2024}
              title="2024"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumendafuga laborum voluptates, iste rerum laudantium."
            />
            <Reference
              images={r2022}
              title="2022"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumendafuga laborum voluptates, iste rerum laudantium."
            />
            <Reference
              images={r2020}
              title="2020"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumendafuga laborum voluptates, iste rerum laudantium."
            />
            <Reference
              images={hb}
              title="Hidegburkolás"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumendafuga laborum voluptates, iste rerum laudantium."
            />
          </div>
        </section>
      </main>
    </>
  );
}
