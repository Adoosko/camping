"use client";
import { HeroHighlight } from "./ui/hero-highlight";

export function HeroHighlightDemo() {
  return (
    <HeroHighlight>
      <h3 className=" px-4 bold-32 text-white lg:bold-52 max-w-4xl leading-relaxed lg:leading-snug text-center lg:text-left mx-auto ">
        Unavuje ťa rozhodovať, čo jesť? Objav recepty, ktoré urobia chudnutie a
        rast svalov jednoduché a chutné!
      </h3>
    </HeroHighlight>
  );
}
