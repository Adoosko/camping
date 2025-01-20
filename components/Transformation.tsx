import Image from "next/image";
import { CompareDemo } from "./CompareDemo";

const Transformation = () => {
  return (
    <section className="flexCenter flex-col pt-10">
      <div
        className=" padding-container
      max-container w-full pb-24"
      >
        <Image src={"/food.png"} alt="camp" width={50} height={50}></Image>
        <p className="regular-18 -mt-1 mb-3 text-green-50">SME TU PRE TEBA</p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-60 xl:max-w-[390px]">
            Cítiš, že to zvládneš aj ty?
          </h2>
          <p className="regular-24 text-gray-40 xl:max-w-[520px] mb-16">
            Dosiahnutie vysnívanej váhy nikdy nebolo jednoduchšie. Vyskúšaj
            overené recepty, ktoré už pomohli desiatkam ľudí.
          </p>
        </div>
      </div>
      <div
        className="flexCenter max-container relative 
      w-full"
      >
        <Image
          src={"/table.webp"}
          alt="boat"
          width={1440}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-5xl"
        />
        <div
          className="absolute flex  bg-white py-8 pl-5 pr-7 gap-3
         rounded-3xl border shadow-md"
        >
          <Image
            src={"/meter.svg"}
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flexBetween  flex-col">
            <div className="flex w-full flex-col">
              <div className="flexBetween w-full flex gap-10">
                <p className="regular-16 text-gray-20">Aktuálna váha</p>
                <p className="bold-16 text-green-50">Za 3 mesiace</p>
              </div>
              <p className="bold-20 mt-2">68 KG</p>
            </div>
            <div>
              <CompareDemo />
            </div>
            <div className="flex w-full flex-col">
              <p className="regular-16 text-gray-20">Počiatočná váha</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">59 KG</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transformation;
