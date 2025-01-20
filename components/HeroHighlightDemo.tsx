"use client";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";

export function HeroHighlightDemo() {
  return (
    <HeroHighlight>
      <h3
        // initial={{
        //   opacity: 0,
        //   y: 20,
        // }}
        // animate={{
        //   opacity: 1,
        //   y: [20, -5, 0],
        // }}
        // transition={{
        //   duration: 0.5,
        //   ease: [0.4, 0.0, 0.2, 1],
        // }}
        className=" px-4 bold-32 text-white lg:bold-52 max-w-4xl leading-relaxed lg:leading-snug text-center lg:text-left mx-auto "
      >
        Unavuje ťa rozhodovať, čo jesť? Objav recepty, ktoré urobia
        <Highlight className="text-black dark:text-white">
          chudnutie a rast svalov jednoduché a chutné!
        </Highlight>
      </h3>
    </HeroHighlight>
  );
}
