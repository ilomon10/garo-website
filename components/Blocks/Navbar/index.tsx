import { ChevronDownIcon, MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { nanoid } from "nanoid";
import { SiAriakit } from "@icons-pack/react-simple-icons";
import { GarooLogo } from "../GarooLogo";
import { GarooLogoWhite } from "../GarooLogoWhite";

export const Navbar = () => {
  return (
    <section className="py-4">
      <div className="container px-4 mx-auto">
        <nav className="flex items-center justify-between">
          <Link href={"/"} className="flex items-center gap-3">
            <GarooLogoWhite className="size-9" />
            <span className="text-xl font-bold">Garoo</span>
          </Link>
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
                {nav_items.map(({ id, title, items, route }) => {
                  return (
                    <li key={id}>
                      {!items && (
                        <Button variant="ghost" asChild>
                          <Link href={route}>{title}</Link>
                        </Button>
                      )}
                      {items && (
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost">
                              {title}
                              <ChevronDownIcon />
                            </Button>
                          </DropdownMenuTrigger>

                          <DropdownMenuContent align="start">
                            {items.map((page) => (
                              <DropdownMenuItem key={page.id}>
                                <Link href={page.route}>{page.title}</Link>
                              </DropdownMenuItem>
                            ))}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="absolute left-0 top-full flex justify-center"></div>
          </nav>
          <div className="flex items-center">
            <Button variant="secondary" className="hidden md:block px-2">
              Masuk
            </Button>
            <Button className="hidden md:block ml-2 mr-2">Coba Sekarang</Button>

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

const nav_items = [
  {
    id: nanoid(),
    title: "Solutions",
    route: "/solutions",
    items: [
      {
        id: nanoid(),
        title: "Digital Signature",
        route: "/solution/digital-signature",
      },
      {
        id: nanoid(),
        title: "Headless Application",
        route: "/headless-application",
      },
    ],
  },
  {
    id: nanoid(),
    title: "Resources",
    route: "/resources",
  },

  {
    id: nanoid(),
    title: "Pricing",
    route: "/pricing",
  },
  {
    id: nanoid(),
    title: "Contacts",
    route: "/",
  },
];
