import { Button } from "@/components/ui/button";
import { HeroProductSection } from "./HeroProductSection";
import { HeroLogosSection } from "./HeroLogosSection";
import { HeroCodeSection } from "./HeroCodeSection";
import { ChevronRightIcon } from "lucide-react";
import { HeroSemanticDiagramSection } from "./HeroSemanticDiagramSection";

export default function HeroSectionSimpleCentred() {
  return (
    <>
      <div className="container px-4 py-24 lg:py-32 mx-auto">
        {/* Announcement Banner */}
        <div className="flex justify-center">
          <a
            className="inline-flex items-center gap-x-2 border text-sm p-1 ps-3 rounded-full transition"
            href="#"
          >
            Cloud CE release - Join to waitlist
            <Button className="rounded-full" variant={"secondary"} size={"sm"}>
              <ChevronRightIcon />
            </Button>
          </a>
        </div>
        {/* End Announcement Banner */}
        {/* Title */}
        <div className="mt-5 max-w-2xl text-center mx-auto">
          <h1 className="scroll-m-20 text-3xl md:text-4xl  font-extrabold tracking-tight lg:text-5xl">
            API tanda tangan elektronik terintegrasi untuk infrastruktur
            aplikasi anda.
          </h1>
        </div>
        {/* End Title */}
        <div className="mt-5 max-w-3xl text-center mx-auto">
          <p className="text-lg md:text-xl text-muted-foreground">
            Sekali hit mendapatkan tanda tangan elektronik, signatur gambar,
            stempel waktu dan masih banyak lagi!
          </p>
        </div>
        {/* Buttons */}
        <div className="mt-8 gap-3 flex justify-center">
          <Button size={"lg"}>Coba sekarang</Button>
          <Button size={"lg"} variant={"outline"}>
            Baca selengkapnya
          </Button>
        </div>
        {/* End Buttons */}
      </div>

      <HeroProductSection />

      <div className="mb-24 py-24 bg-foreground/[0.01]">
        {/* Title */}
        <div className="container mx-auto mt-5 text-center">
          <h1 className="scroll-m-20 text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight">
            Bagaimana dokumen Anda diproses?
          </h1>
        </div>
        {/* End Title */}
        <div className="container mx-auto mt-5 text-center ">
          <p className="text-md md:text-lg text-muted-foreground">
            Sekali hit mendapatkan tanda tangan elektronik, signatur gambar,
            stempel waktu dan masih banyak lagi!
          </p>
        </div>
        {/* Buttons */}
        <div className="mt-8 gap-3 flex justify-center">
          <Button size={"lg"} variant={"outline"}>
            Baca selengkapnya
          </Button>
        </div>
        {/* End Buttons */}
        <div className="mt-16">
          <HeroSemanticDiagramSection />
        </div>
      </div>

      <HeroLogosSection />
      <HeroCodeSection />
    </>
  );
}
