import Footer from "@/components/Blocks/Footer";
import HeroSectionSimpleCentred from "@/components/Blocks/HeroSection";
import { Navbar } from "@/components/Blocks/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Garoo",
  description: "Make a trusted signature for your digital copies.",
};

export default function Home() {
  return (
    <div className="items-center min-h-screen gap-16">
      <Navbar />
      <HeroSectionSimpleCentred />
      <Footer />
    </div>
  );
}
