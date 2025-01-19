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
    </>
  );
}
