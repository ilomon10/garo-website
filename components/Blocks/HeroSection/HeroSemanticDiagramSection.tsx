import { SVGendUser } from "./assets/end-user";
import { SVGlineToEndUser } from "./assets/line-to-end-user";
import { SVGlineToSemantic } from "./assets/line-to-semantic";
import { SVGsemanticLayer } from "./assets/semantic-layer";
import { SVGthirdPartyApps } from "./assets/third-party-apps";

export const HeroSemanticDiagramSection = () => {
  return (
    <div className="container md:max-w-[1024px] mx-auto flex flex-col items-center gap-y-6">
      <div className="w-[85%] flex items-center">
        <div className="flex items-center w-[40%]">
          <div className="mr-2 w-[70%]">
            <SVGthirdPartyApps className="w-full" />
          </div>
          <div className="min-w-[92px] w-[30%]">
            <SVGlineToSemantic className="w-full" />
          </div>
        </div>
        <div className="w-[30%]">
          <SVGsemanticLayer className="w-full" />
        </div>
        <div className="flex items-center w-[27%]">
          <div className="min-w-[92px] w-[35%]">
            <SVGlineToEndUser className="w-full" />
          </div>
          <div className="ml-2 w-[65%]">
            <SVGendUser className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};
