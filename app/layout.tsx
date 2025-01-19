import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Na Formu",
  description:
    "Dosiahnutie vysnívanej váhy nikdy nebolo jednoduchšie. Vyskúšaj overené recepty, ktoré už pomohli desiatkam ľudí.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar></Navbar>
        <main className="relative overflow-hidden">{children}</main>
        <Footer></Footer>
      </body>
    </html>
  );
}
