import React from "react";
import { HomeIcon } from "lucide-react";
import { Button } from "./ui/button";
import { AlignJustify } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="container mx-auto px-4 md:px-32 py-4 ">
      <div className="flex justify-between items-center">
        <Link href="/">
          <h1 className="font-bold text-3xl cursor-pointer">
            MRT<span className="text-blue-500">zee</span>
          </h1>
        </Link>
        <div className="hidden md:block">
          <ul className="flex justify-end gap-5 font-light text-sm cursor-pointer">
            <li className="cursor-pointer hover:font-bold">
              <Link href="/about">About Us</Link>
            </li>
            <li className="cursor-pointer hover:font-bold">
              <Link href="services">Services</Link>
            </li>
            <li className="cursor-pointer hover:font-bold">
              <Link href="/teams">Teams</Link>
            </li>
          </ul>
        </div>
        <div className="block md:hidden">
          <Sheet>
            <SheetTrigger>
              <AlignJustify />
            </SheetTrigger>
            <SheetContent className="flex flex-col gap-5 pt-14">
              <Button variant="ghost">
                <Link href="/">
                  <HomeIcon />
                </Link>
              </Button>
              <Button variant="ghost">
                <Link href="/about">About Us</Link>
              </Button>
              <Button variant="ghost">
                <Link href="/services">Services</Link>
              </Button>
              <Button variant="ghost">
                <Link href="/teams">Teams</Link>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
