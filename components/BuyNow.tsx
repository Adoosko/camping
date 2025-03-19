import Image from "next/image";
import CheckoutForm from "./CheckoutForm";

const BuyNow = () => {
  return (
    <section
      id="buyNow"
      className="bg-neutral-100 pt-36 flexCenter w-full flex-col pb-[20px]
    "
    >
      <div className="get-app">
        <div
          className="z-20 flex w-full flex-1 flex-col lg:flex-row items-start
        justify-center gap-12"
        >
          <div className="flex flex-col gap-8">
            <h2 className="text-4xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-semibold text-black ">
              Nepremeškaj šancu <br />
              <span className="text-neutral-900 text-2xl font-medium">
                – vezmi si to za výhodnú cenu už dnes!
              </span>
            </h2>
            <p className="regular-16 text-neutral-500">
              Nauč sa, ako jednoducho a chutne nabrať svaly bez zbytočného tuku,
              s praktickými receptami a tipmi, ktoré ti pomôžu dosiahnuť tvoju
              vysnívanú postavu.
            </p>

            <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
              <p className="text-4xl font-bold text-red-500 line-through text-center ">
                30€
              </p>
              <p className="text-5xl font-bold text-green-500  text-center ">
                24€
              </p>
              <CheckoutForm />
            </div>
          </div>

          <Image
            src={"/cutEbook.png"}
            alt="phones with app screen"
            width={550}
            height={870}
          />
        </div>
      </div>
    </section>
  );
};

export default BuyNow;
