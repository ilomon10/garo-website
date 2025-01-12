import {
  SiAriakit,
  SiDiscord,
  SiGithub,
  SiX,
} from "@icons-pack/react-simple-icons";
import { CheckIcon, LinkedinIcon, RefreshCwIcon } from "lucide-react";
import moment from "moment";
import React from "react";

type Link = {
  icon?: JSX.Element;
  name: string;
  href: string;
  prefix?: string;
};

const sections: {
  title: string;
  links: Link[];
}[] = [
  {
    title: "Company",
    links: [
      { name: "About", href: "#" },
      { name: "Team", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Help", href: "#" },
      { name: "Sales", href: "#" },
      { name: "Advertise", href: "#" },
      { name: "Privacy", href: "#" },
    ],
  },
  {
    title: "Social",
    links: [
      { icon: <SiGithub />, name: "Github", href: "#" },
      { icon: <SiDiscord />, name: "Discord", href: "#" },
      { icon: <SiX />, name: "X", href: "#" },
      { icon: <LinkedinIcon />, name: "LinkedIn", href: "#" },
    ],
  },
  {
    title: "Compliance",
    links: [
      { icon: <CheckIcon />, name: "CCPA", prefix: "Compliant", href: "#" },
      { icon: <CheckIcon />, name: "GDPR", prefix: "Compliant", href: "#" },
      {
        icon: <CheckIcon />,
        name: "ISO 27001",
        prefix: "Certified",
        href: "#",
      },
      {
        icon: <CheckIcon />,
        name: "ISO 27701",
        prefix: "Certified",
        href: "#",
      },
      { icon: <CheckIcon />, name: "SOC 2", prefix: "Certified", href: "#" },
      {
        icon: <RefreshCwIcon />,
        name: "HIPAA",
        prefix: "In Progress",
        href: "#",
      },
      {
        name: "Trust Center",
        href: "#",
      },
    ],
  },
];

const Footer = () => {
  return (
    <section className="py-32">
      <div className="container max-w-[1024px] mx-auto">
        <footer>
          <div className="flex flex-col justify-between gap-10 text-center lg:flex-row lg:text-left">
            <div className="flex max-w-96 shrink flex-col items-center justify-between gap-6 lg:items-start">
              <div>
                <span className="flex items-center gap-4 ">
                  <SiAriakit size={36} />
                  <p className="text-3xl font-semibold">Garoo</p>
                </span>
              </div>
              <div>
                <a className="flex items-center mb-5" href="#">
                  <span className="bg-green-500 h-[6px] w-[6px] rounded-full mr-2" />
                  <span>All system operational</span>
                </a>
                <div className="text-muted-foreground text-xs">
                  <p>Made in MDC</p>
                  <p>
                    Copyright &#169; 2022 &#8211; 2025 PT. Bingkai Indonesia
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-3 lg:gap-6">
              {sections.map((section, sectionIdx) => (
                <div key={sectionIdx}>
                  <h3 className="mb-6 font-bold">{section.title}</h3>
                  <ul className="space-y-4 text-sm text-muted-foreground">
                    {section.links.map((link, linkIdx) => {
                      return (
                        <li
                          key={linkIdx}
                          className="font-medium hover:text-primary"
                        >
                          <a href={link.href} className="flex items-center">
                            {link.icon && (
                              <span className="mr-2">
                                {React.cloneElement(link.icon, { size: 16 })}
                              </span>
                            )}
                            <span className="mr-2">{link.name}</span>
                            {link.prefix && (
                              <span className="text-xs text-slate-500">
                                {link.prefix}
                              </span>
                            )}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-20 flex flex-col justify-between gap-4 border-t pt-8 text-center text-sm font-medium text-muted-foreground lg:flex-row lg:items-center lg:text-left">
            <p>© {moment().format("YYYY")} Garoo. All rights reserved.</p>
            <ul className="flex justify-center gap-4 lg:justify-start">
              <li className="hover:text-primary">
                <a href="#"> Terms and Conditions</a>
              </li>
              <li className="hover:text-primary">
                <a href="#"> Privacy Policy</a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
