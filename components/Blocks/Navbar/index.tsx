import { ChevronDownIcon, MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { nanoid } from "nanoid";
import { SiAriakit } from "@icons-pack/react-simple-icons";

export const Navbar = () => {
  return (
    <section className="py-4">
      <div className="container px-4 mx-auto">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <SiAriakit size={36} />
            <span className="text-xl font-bold">Garoo</span>
          </div>
          <nav
            aria-label="Main"
            data-orientation="horizontal"
            dir="ltr"
            className="relative z-10 max-w-max flex-1 items-center justify-center hidden lg:block"
          >
            <div style={{ position: "relative" }}>
              <ul
                data-orientation="horizontal"
                className="group flex flex-1 list-none items-center justify-center space-x-1"
                dir="ltr"
              >
                <li>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost">
                        Features
                        <ChevronDownIcon />
                      </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent align="start">
                      {landings.map((page) => (
                        <DropdownMenuItem key={page.id}>
                          <Link href={page.route}>{page.title}</Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </li>
                <li>
                  <Button variant={"ghost"}>Products</Button>
                </li>
                <li>
                  <Button variant={"ghost"}>Resources</Button>
                </li>
                <li>
                  <Button variant={"ghost"}>Contact</Button>
                </li>
              </ul>
            </div>
            <div className="absolute left-0 top-full flex justify-center"></div>
          </nav>
          <div className="flex items-center">
            <Button variant="secondary" className="hidden md:block px-2">
              Login
            </Button>
            <Button className="hidden md:block ml-2 mr-2">Get Started</Button>

            <div className="flex md:hidden mr-2 items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <MenuIcon className="h-5 w-5 rotate-0 scale-100" />
                  </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <a href="#home">Home</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="#features">Features</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="#pricing">Pricing</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="#faqs">FAQs</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Button variant="secondary" className="w-full text-sm">
                      Login
                    </Button>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Button className="w-full text-sm">Get Started</Button>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
};

const landings = [
  {
    id: nanoid(),
    title: "Landing 01",
    route: "/project-management",
  },
  {
    id: nanoid(),
    title: "Landing 02",
    route: "/crm-landing",
  },
  {
    id: nanoid(),
    title: "Landing 03",
    route: "/ai-content-landing",
  },
  {
    id: nanoid(),
    title: "Landing 04",
    route: "/new-intro-landing",
  },
  {
    id: nanoid(),
    title: "Landing 05",
    route: "/about-us-landing",
  },
  {
    id: nanoid(),
    title: "Landing 06",
    route: "/contact-us-landing",
  },
  {
    id: nanoid(),
    title: "Landing 07",
    route: "/faqs-landing",
  },
  {
    id: nanoid(),
    title: "Landing 08",
    route: "/pricing-landing",
  },
  {
    id: nanoid(),
    title: "Landing 09",
    route: "/career-landing",
  },
];
