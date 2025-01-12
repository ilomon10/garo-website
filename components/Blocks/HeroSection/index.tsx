import { Button } from "@/components/ui/button";
import { HeroProductSection } from "./HeroProductSection";
import { HeroLogosSection } from "./HeroLogosSection";

export default function HeroSectionSimpleCentred() {
  return (
    <>
      <div className="container py-24 lg:py-32 mx-auto">
        {/* Announcement Banner */}
        <div className="flex justify-center">
          <a
            className="inline-flex items-center gap-x-2 border text-sm p-1 ps-3 rounded-full transition"
            href="#"
          >
            Cloud CE release - Join to waitlist
            <span className="py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full bg-muted-foreground/15 font-semibold text-sm">
              <svg
                className="flex-shrink-0 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </span>
          </a>
        </div>
        {/* End Announcement Banner */}
        {/* Title */}
        <div className="mt-5 max-w-2xl text-center mx-auto">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Make a trusted signature for digital copies
          </h1>
        </div>
        {/* End Title */}
        <div className="mt-5 max-w-3xl text-center mx-auto">
          <p className="text-xl text-muted-foreground">
            Over 10+ fully responsive, UI blocks you can drop into your Shadcn
            UI projects and customize to your heart&apos;s content.
          </p>
        </div>
        {/* Buttons */}
        <div className="mt-8 gap-3 flex justify-center">
          <Button size={"lg"}>Try free now</Button>
          <Button size={"lg"} variant={"outline"}>
            Learn more
          </Button>
        </div>
        {/* End Buttons */}
      </div>
      <HeroProductSection />
      <HeroLogosSection />
    </>
  );
}
