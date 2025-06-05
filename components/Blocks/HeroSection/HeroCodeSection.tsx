"use client";

import { Button } from "@/components/ui/button";
import { CodeBlock } from "@/components/ui/code-block";
import {
  SiDeno,
  SiExpress,
  SiNextdotjs,
  SiNodedotjs,
} from "@icons-pack/react-simple-icons";
import { ClipboardIcon } from "lucide-react";
import React from "react";

const FRAMEWORK_LIST = [
  { label: "Node.js", icon: SiNodedotjs },
  { label: "Next.js", icon: SiNextdotjs },
  { label: "Express", icon: SiExpress },
  { label: "Deno", icon: SiDeno },
];

export const HeroCodeSection = () => {
  const [selected, setSelected] = React.useState("Node.js");

  return (
    <div className="hero-code-section mt-10 my-32">
      <div className="container max-w-[1024px] mx-auto px-4">
        <div className="rounded-xl overflow-hidden border border-muted">
          <div className="p-2 border-b flex">
            <div className="grow">
              {FRAMEWORK_LIST.map(({ label, icon: Icon }) => (
                <Button
                  key={label}
                  onClick={() => setSelected(label)}
                  className={"border border-transparent"}
                  variant={selected === label ? "outline" : "ghost"}
                >
                  <Icon />
                  {label}
                </Button>
              ))}
            </div>
            <div>
              <Button size={"icon"} variant={"outline"}>
                <ClipboardIcon />
              </Button>
            </div>
          </div>
          <CodeBlock
            className="py-4 px-1 bg-muted/[0.25]"
            value={`import { GarooClient } from '@garoo/sdk';\nconst garoo = new GarooClient({ apiKey: 'YOUR_KEY' });\nawait garoo.signDocument({ documentId: 'abc123', signerEmail: 'user@example.com' });`}
          />
        </div>
      </div>
    </div>
  );
};
