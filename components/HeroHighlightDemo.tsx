"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";

export function HeroHighlightDemo() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className=" px-4 bold-40 text-white lg:bold-52 max-w-4xl leading-relaxed lg:leading-snug text-center lg:text-left mx-auto "
      >
        Unavuje ťa rozhodovať, čo jesť? Objav recepty, ktoré urobia
        <Highlight className="text-black dark:text-white">
          chudnutie a rast svalov jednoduché a chutné!
        </Highlight>
      </motion.h1>
    </HeroHighlight>
  );
}
