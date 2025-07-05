import { nanoid } from "nanoid";
import Image from "next/image";
import hero1 from "./assets/hero-v1-flags-v3.webp";
import hero2 from "./assets/hero-v1-entitlements.webp";
import hero3 from "./assets/hero-v1-adoption-feedback.webp";
import "./assets/product-section-style.css";

export const HeroProductSection = () => {
  return (
    <div className="container md:max-w-[1024px] mx-auto flex flex-col items-center gap-y-6">
      <div className="max-w-[77%] grid sm:grid-cols-3 gap-6">
        {[
          {
            id: nanoid(),
            text: "Daftar penandatangan per langganan mulai dari 10 penandatangan",
          },
          {
            id: nanoid(),
            text: "Halaman dokumen tidak terbatas dan multi signature",
          },
          {
            id: nanoid(),
            text: "Gratis backup dokumen tertanda-tangan mulai dari 1 bulan",
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
        {heroImages.map(({ id, image }) => (
          <div key={id} className={"relative -ml-[6%]"} style={{}}>
            <Image
              src={image.src}
              alt="Hero image"
              width={888}
              height={1200}
              priority={true}
            />
            <div className="product-shade" />
          </div>
        ))}
      </div>
    </div>
  );
};

const heroImages = [
  { id: nanoid(), image: hero1 },
  { id: nanoid(), image: hero2 },
  { id: nanoid(), image: hero3 },
];
