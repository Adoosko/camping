"use client";
import { cn } from "@/lib/utils";
import createGlobe from "cobe";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Chceš nabrať svaly rýchlo a efektívne?",
      description:
        "Vieš, že rast svalov nezačína v posilke, ale v kuchyni? Moje recepty ti presne ukážu, čo jesť, aby si naplno využil svoj potenciál a dosiahol skutočné výsledky.",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 lg:col-span-4 border-b border-t lg:border-r pb-16  ",
    },
    {
      title: "Už ťa nebaví nudné jedlo?",
      description:
        "Povedz zbohom ryži a kuracím prsiam bez chuti! Čakajú ťa skvelé, jednoduché jedlá, ktoré si zamiluješ, a pritom podporia tvoje fitness ciele.",
      skeleton: <SkeletonTwo />,
      className: "border-b col-span-1 lg:col-span-2 ",
    },
    {
      title: " Nemáš čas tráviť hodiny v kuchyni?",
      description:
        "Viem, že tvoj život je nabitý tréningmi a povinnosťami. Preto som vytvoril recepty, ktoré pripravíš rýchlo a bez stresu, no stále budú výživné.",
      skeleton: <SkeletonThree />,
      className: "col-span-1 lg:col-span-3 lg:border-r border-t pb-16  ",
    },
    {
      title: "Chceš výsledky, na ktoré budeš hrdý?",
      description:
        "Ak je tvojím cieľom vyzerať a cítiť sa skvelo, tento eBook je presne to, čo potrebuješ. Pomôže ti získať svaly bez zbytočného tuku a s chuťou, ktorú si zaslúžiš!",
      skeleton: <SkeletonFour />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none border-t",
    },
  ];
  return (
    <div className="relative z-20 py-10 bg-white  max-w-7xl mx-auto">
      <div className="px-8">
        <h4 className="text-4xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-semibold text-black ">
          Prečo tento eBook potrebuješ?
        </h4>

        <p className="text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal ">
          Objav recepty, ktoré sú jednoduché, rýchle a neskutočne chutné! Každý
          z nich je navrhnutý tak, aby ti pomohol nabrať svaly a zároveň
          podporil zdravý životný štýl. Nezáleží na tom, či práve začínaš, alebo
          už makáš roky – tento eBook ti ukáže, že dosiahnuť výsledky nemusí byť
          žiadna veda.
        </p>
      </div>

      <div className="relative ">
        <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md ">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className=" h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className=" max-w-5xl mx-auto text-left tracking-tight text-black font-medium text-xl md:text-2xl md:leading-snug">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base  max-w-4xl text-left mx-auto",
        "text-neutral-500 text-center font-normal ",
        "text-left max-w-sm mx-0 md:text-sm my-2"
      )}
    >
      {children}
    </p>
  );
};

export const SkeletonOne = () => {
  return (
    <div className="relative flex py-8 px-2 gap-10 h-full">
      <div className="w-full  p-5  mx-auto bg-white  shadow-2xl group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2  ">
          {/* TODO */}
          <Image
            src="/features/meme.webp"
            alt="meme gym"
            width={800}
            height={800}
            className="h-full w-full aspect-square object-fit object-top-left filter scale-90  rounded-sm"
          />
        </div>
      </div>
    </div>
  );
};

export const SkeletonThree = () => {
  return (
    <div className="w-full  mx-auto bg-transparent   group h-full">
      <div className="flex flex-1 w-full h-full flex-col space-y-2  relative">
        {/* TODO */}

        <Image
          src="/features/watches.webp"
          alt="header"
          width={700}
          height={700}
          className="h-full w-full aspect-video object-contain object-top rounded-lg "
        />
      </div>
    </div>
  );
};

export const SkeletonTwo = () => {
  const images = [
    "/recipes/meatpasta.webp",
    "/recipes/chpancakes.webp",
    "/recipes/oats.webp",
    "/recipes/pizza.webp",
    "/recipes/sandwich.webp",
  ];
  const images0 = [
    "/recipes/pasta.webp",
    "/recipes/burito.webp",
    "/recipes/frenchtoast.webp",
    "/recipes/meatpasta.webp",
    "/recipes/shakeP.webp",
  ];

  const imageVariants = {
    whileHover: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
    whileTap: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
  };
  return (
    <div className="relative flex flex-col items-start p-8 gap-10 h-full overflow-hidden">
      {/* TODO */}
      <div className="flex flex-row -ml-20">
        {images.map((image, idx) => (
          <motion.div
            variants={imageVariants}
            key={"images-first" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-white  border border-neutral-100 flex-shrink-0 overflow-hidden"
          >
            <Image
              src={image}
              alt="bali images"
              width="500"
              height="500"
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
            />
          </motion.div>
        ))}
      </div>
      <div className="flex flex-row">
        {images0.map((image, idx) => (
          <motion.div
            key={"images-second" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            variants={imageVariants}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-white  border border-neutral-100 flex-shrink-0 overflow-hidden"
          >
            <Image
              src={image}
              alt="bali images"
              width="500"
              height="500"
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
            />
          </motion.div>
        ))}
      </div>

      <div className="absolute left-0 z-[100] inset-y-0 w-20 bg-gradient-to-r from-white  to-transparent  h-full pointer-events-none" />
      <div className="absolute right-0 z-[100] inset-y-0 w-20 bg-gradient-to-l from-white   to-transparent h-full pointer-events-none" />
    </div>
  );
};

export const SkeletonFour = () => {
  return (
    <div className="w-full  mx-auto bg-transparent   group h-full">
      <div className="flex flex-1 w-full h-full flex-col space-y-2  relative">
        {/* TODO */}

        <Image
          src="/features/man.webp"
          alt="header"
          width={700}
          height={700}
          className="h-full w-full aspect-video object-contain object-center rounded-lg  "
        />
      </div>
    </div>
  );
};

export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        // longitude latitude
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  );
};
