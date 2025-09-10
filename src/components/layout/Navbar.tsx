import { ArrowUpRight, CircleUser, HouseIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Link } from "react-router";
import { useEffect, useState } from "react";

// Navigation links array to be used in both desktop and mobile menus
const navigationLinks = [
  { href: "/", label: "Home", active: true },
  { href: "#", label: "Listing" },
  { href: "#", label: "Members" },
  { href: "#", label: "Blogs" },
  { href: "#", label: "Pages" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full  px-4 md:px-6 py-2 fixed to-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md text-black border-b-[1px]  border-transparent"
          : "bg-transparent text-white border-b-[1px] border-gray-400 "
      }`}
    >
      <div className="max-w-[1170px] mx-auto flex h-16 items-center justify-between gap-4">
        {/* Left side */}
        <div className="flex  items-center gap-2">
          {/* Mobile menu trigger */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className="group size-8 lg:hidden"
                variant="ghost"
                size="icon"
              >
                <svg
                  className="pointer-events-none"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12L20 12"
                    className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                  />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-36 p-1 lg:hidden">
              <NavigationMenu className="max-w-none *:w-full">
                <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                  {navigationLinks.map((link, index) => {
                    return (
                      <NavigationMenuItem key={index} className="w-full">
                        <NavigationMenuLink
                          href={link.href}
                          className="flex-row items-center gap-2 py-1.5"
                          active={link.active}
                        >
                          <span>{link.label}</span>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    );
                  })}
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>
          {/* Logo */}
          <div className="flex items-center">
            <Link to={"/"} className="">
              <div className="flex gap-2 items-center justify-center">
                <HouseIcon
                  size={36}
                  className=" p-2 bg-[#EB6753] text-white font-bold rounded-lg"
                />
                <span className="font-bold text-lg">Homez</span>
              </div>
            </Link>
          </div>
        </div>
        {/* Middle area */}
        <NavigationMenu className="max-lg:hidden  ">
          <NavigationMenuList className="gap-5">
            {navigationLinks.map((link, index) => {
              return (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink
                    active={link.active}
                    href={link.href}
                    className={`flex-row items-center gap-2 py-1.5 font-medium transition duration-300 ${
                      scrolled
                        ? "hover:border-gray-800 data-[active]:focus:border-b-2 data-[active]:hover:border-b-2 data-[active]:border-black "
                        : "hover:border-white data-[active]:focus:border-b-2 data-[active]:hover:border-b-2 data-[active]:border-white "
                    }`}
                  >
                    <span>{link.label}</span>
                    <span className="text-2xl "> - </span>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>
        {/* Right side */}
        <div className="flex items-center justify-end gap-5">
          <Link
            to={"#"}
            className="flex gap-4 justify-center items-center font-medium bg-transparent"
          >
            <CircleUser />
            <span>Login/Register</span>
          </Link>
          <Button
            className={`hidden md:flex gap-3 justify-center  items-center font-medium duration-300 cursor-pointer ${
              scrolled
                ? "bg-[#EB6753] shadow-md text-white "
                : "bg-white text-black hover:text-white"
            }`}
          >
            <span>Add Property</span>
            <ArrowUpRight />
          </Button>
        </div>
      </div>
    </header>
  );
}
