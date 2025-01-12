import hero1 from "./hero-v1-flags-v3.webp";
import hero2 from "./hero-v1-entitlements.webp";
import hero3 from "./hero-v1-adoption-feedback.webp";
import { nanoid } from "nanoid";
import Image from "next/image";

export const HeroProductSection = () => {
  return (
    <div className="container md:max-w-[1024px] mx-auto flex flex-col items-center gap-y-6">
      <div className="max-w-[77%] grid grid-cols-3 gap-x-[6rem]">
        {[
          {
            id: nanoid(),
            text: "Release features gradually with simple flags.",
          },
          {
            id: nanoid(),
            text: "Gate features based on customer subscriptions.",
          },
          {
            id: nanoid(),
            text: "Iterate fast with adoption metrics and feedback.",
          },
        ].map(({ id, text }) => (
          <div
            key={id}
            className="flex text-center justify-center items-center"
          >
            {text}
          </div>
        ))}
      </div>
      <div className="max-w-[85%] flex">
        {[
          { id: nanoid(), image: hero1 },
          { id: nanoid(), image: hero2 },
          { id: nanoid(), image: hero3 },
        ].map(({ id, image }) => (
          <div key={id} className="relative -ml-[6%]">
            <Image src={image.src} alt="Hero image" />
            <div
              style={{
                backgroundImage:
                  "linear-gradient(90deg, hsl(var(--background) / 0) 67%, hsl(var(--background)) 99%), radial-gradient(circle at 0 0, hsl(var(--background)/0) 49%, hsl(var(--background)) 70%)",
                position: "absolute",
                inset: "0%",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
