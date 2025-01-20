import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote: "Brasko z 55kg na 80kg neviem co by som robil bez tohto ebooku",
      name: " Lukáš",
      designation: "23 rokov",
      src: "https://imgcdn.stablediffusionweb.com/2024/9/30/813607d3-5ef1-4afd-900f-df857fa92abe.jpg",
    },
    {
      quote:
        "Konecne sa mi podarlo nabrat svalovu hmotu bola som strasne skinny a teraz sa citim ovela lepsie",
      name: "Karolina",
      designation: "19 rokov",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG7ZZe5pxEite2n-vBm99lf8CUjYkPPC_Pjw&s",
    },
    {
      quote:
        "Tento e-book mi priniesol jasnú odpoveď. Svaly rastú, tuk sa neukladá, a to všetko vďaka úžasným receptom.",
      name: "Jozef",
      designation: "35 rokov",
      src: "https://plus.unsplash.com/premium_photo-1664298352263-9cf691753fce?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zml0JTIwZ3V5fGVufDB8fDB8fHww",
    },
    {
      quote: "Recepty su fire a plne bielkovin, odporucam",
      name: "Tomáš",
      designation: "28 rokov",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Brutalny ebook, som neskutocne rada za tuto investiciu do seba <3",
      name: " Andrea",
      designation: "25 rokov",
      src: "https://preview.redd.it/who-doesnt-take-a-gym-mirror-selfie-after-they-workout-v0-zqsw854vjq2a1.jpg?width=1080&crop=smart&auto=webp&s=b82b6b698bc3414e14047e6d675c0e18a137c2d7",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
