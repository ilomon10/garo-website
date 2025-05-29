import {
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
} from "@icons-pack/react-simple-icons";
import { ChevronRightIcon, SlashIcon } from "lucide-react";

export const HeroLogosSection = () => {
  return (
    <div className="hero-logos-section px-4">
      <div className="mt-5 flex flex-col md:flex-row justify-center items-center gap-3 sm:gap-3">
        <span className="text-sm text-muted-foreground">
          Simple SDK&apos;s:
        </span>
        <div className="flex gap-x-3">
          <div className="flex gap-x-3">
            <SiTypescript className="text-blue-500" />
            <SiJavascript className="text-yellow-300" />
            <SiNodedotjs className="text-green-500" />
          </div>
          <div className="text-muted-foreground">/</div>
          <a
            className="inline-flex items-center gap-x-1 text-sm decoration-2 hover:underline font-medium"
            href="#"
          >
            Installation Guide
            <ChevronRightIcon className="flex-shrink-0 w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
