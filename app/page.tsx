import Footer from "@/components/Blocks/Footer";
import HeroSectionSimpleCentred from "@/components/Blocks/HeroSection";
import { Navbar } from "@/components/Blocks/Navbar";

export default function Home() {
  return (
    <div className="items-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <HeroSectionSimpleCentred />
      <Footer />
    </div>
  );
}
