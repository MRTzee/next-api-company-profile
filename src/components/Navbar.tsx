"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { HomeIcon } from "lucide-react";
import { Button } from "./ui/button";
import { AlignJustify } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar: React.FC = () => {
  const router = useRouter();
  return (
    <nav className="container mx-auto px-4 md:px-32 py-4 ">
      <div className="flex justify-between items-center">
        <h1
          className="font-bold text-3xl cursor-pointer"
          onClick={() => router.push("/")}
        >
          MRT<span className="text-blue-500">zee</span>
        </h1>
        <div className="hidden md:block">
          <ul className="flex justify-end gap-5 font-light text-sm cursor-pointer">
            <li
              onClick={() => router.push("/about")}
              className="cursor-pointer hover:font-bold"
            >
              About Us
            </li>
            <li
              onClick={() => router.push("/services")}
              className="cursor-pointer hover:font-bold"
            >
              Services
            </li>
            <li
              onClick={() => router.push("/teams")}
              className="cursor-pointer hover:font-bold"
            >
              Teams
            </li>
          </ul>
        </div>
        <Sheet>
          <SheetTrigger>
            <AlignJustify />
          </SheetTrigger>
          <SheetContent className="flex flex-col gap-5 pt-14">
            <Button variant="ghost" onClick={() => router.push("/")}>
              <HomeIcon />
            </Button>
            <Button onClick={() => router.push("/about")} variant="ghost">
              About Us
            </Button>
            <Button onClick={() => router.push("/services")} variant="ghost">
              Services
            </Button>
            <Button onClick={() => router.push("/teams")} variant="ghost">
              Teams
            </Button>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
