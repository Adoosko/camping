import Image from "next/image";
import Button from "./Button";

const Offer = () => {
  return (
    <section
      className="flexCenter w-full flex-col pb-[100px]
  "
    >
      <div className="get-app">
        <div
          className="z-20 flex w-full flex-1  lg:flex-row items-start
      justify-center gap-12 flex-col-reverse"
        >
          <Image
            src={"/ebook0.png"}
            alt="phones with app screen"
            width={550}
            height={870}
          />
          <div className="flex flex-col gap-8">
            <h2 className="bold-40 text-neutral-900 lg:bold-64 xl:max-w-[320px]">
              Čo môžete očakávať?
            </h2>
            <p className="regular-16 text-neutral-900">
              Naučte sa, ako jednoducho a chutne nabrať svalovú hmotu bez
              zbytočného tuku s pomocou praktických receptov a tipov, ktoré
              podporia váš progres na ceste za vysnívanou postavou.
            </p>

            <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
              <p className="text-4xl font-bold text-red-500 line-through text-center ">
                30€
              </p>
              <p className="text-5xl font-bold text-green-500  text-center ">
                19€
              </p>
              <Button
                title="Kúpiť"
                type="button"
                variant="btn_dark_green"
              ></Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
