import Image from "next/image";
import Button from "./Button";
import { CompareDemo } from "./CompareDemo";
import { HeroHighlightDemo } from "./HeroHighlightDemo";

const Hero = () => {
  return (
    <section
      className="  bg-neutral-900
      "
    >
      <div
        className="padding-container bg-neutral-900 max-container
     flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row"
      >
        {/* LEFT SIDE */}
        <div className="relative max-container  z-20 flex flex-1 flex-col xl:w-1/2">
          <HeroHighlightDemo />
          {/* <h1 className="bold-40 text-white lg:bold-64 mb-10">
            Unavuje ťa rozhodovať, čo jesť? Objav recepty, ktoré urobia
            chudnutie a rast svalov jednoduché a chutné!
          </h1> */}
          <p className="regular-16 mt-6 text-gray-10 xl:max-w-[520px]">
            „Tvoja cesta k forme začína na tanieri.“
          </p>
          <div className="my-11 flex flex-wrap gap-5">
            <div className="flex items-center gap-2">
              {Array(5)
                .fill(1)
                .map((_, index) => (
                  <Image
                    src={"/star.svg"}
                    key={index}
                    alt="star"
                    width={24}
                    height={24}
                  ></Image>
                ))}
            </div>
            <p className="bold-16 lg:bold-20 text-white">
              Neuveriteľné
              <span className="regular-16 lg:regular-20 ml-1 underline">
                výsledky
              </span>
            </p>
          </div>
          <div className="flex flex-col w-full gap-3 sm:flex-row">
            <Button
              type="button"
              icon="muscle.svg"
              title="Nabrať"
              variant="btn_green"
            />
            <Button type="button" title="Schudnúť" variant="btn_white_text" />
          </div>
        </div>
        <div className="relative flex flex-1  justify-center ">
          <div
            className="relative z-20  flex flex-col gap-8
         rounded-3xl bg-neutral-800 px-7 py-8"
          >
            <div className="flex flex-col">
              <div className="flexBetween">
                <p className="regular-16 text-gray-20">Dĺžka obdobia</p>
              </div>
              <p className="bold-20 text-white">6 mesiacov</p>
            </div>

            <div className="flex flex-col text-center">
              <div className="flex flex-col">
                <p className="regular-16 block text-gray-20">Počiatočná váha</p>
                <p className="bold-20 text-white">70 KG</p>
              </div>
              <CompareDemo />
              <div className="flex flex-col">
                <p className="regular-16 block text-gray-20">Aktuálna váha</p>
                <p className="bold-20 text-white">84.5 KG</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
