import { AnimatedTestimonialsDemo } from "@/components/AnimatedTestimonialsDemo";
import BuyNow from "@/components/BuyNow";

import Hero from "@/components/Hero";
import Offer from "@/components/Offer";
import Transformation from "@/components/Transformation";

export default function Home() {
  return (
    <>
      <div className="bg-neutral-950">
        <Hero></Hero>
      </div>

      <Transformation />
      {/* <Features></Features> */}
      <BuyNow />
      <Offer />
      <div className="bg-neutral-900">
        <h4 className="text-4xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-semibold text-white pt-16 ">
          Skutočné príbehy, skutočné výsledky
        </h4>
        <AnimatedTestimonialsDemo />
      </div>
    </>
  );
}
