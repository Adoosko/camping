import { AnimatedTestimonialsDemo } from "@/components/AnimatedTestimonialsDemo";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import Offer from "@/components/Offer";

export default function Home() {
  return (
    <>
      <Hero></Hero>

      <Guide></Guide>
      <Features></Features>
      <GetApp></GetApp>
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
