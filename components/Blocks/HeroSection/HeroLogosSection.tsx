import {
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
} from "@icons-pack/react-simple-icons";
import { ChevronRightIcon } from "lucide-react";

export const HeroLogosSection = () => {
  return (
    <div className="hero-logos-section">
      <div className="mt-5 flex justify-center items-center gap-x-1 sm:gap-x-3">
        <span className="text-sm text-muted-foreground">
          Simple SDK&apos;s:
        </span>
        <div className="flex gap-x-3">
          <SiTypescript className="text-blue-500" />
          <SiJavascript className="text-yellow-300" />
          <SiNodedotjs className="text-green-500" />
        </div>
        <svg
          className="h-5 w-5 text-muted-foreground"
          width={16}
          height={16}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M6 13L10 3" stroke="currentColor" strokeLinecap="round" />
        </svg>
        <a
          className="inline-flex items-center gap-x-1 text-sm decoration-2 hover:underline font-medium"
          href="#"
        >
          Installation Guide
          <ChevronRightIcon className="flex-shrink-0 w-4 h-4" />
        </a>
      </div>
    </div>
  );
};
