import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Camping App",
  description: "Travel UI/UX for Camping",
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
