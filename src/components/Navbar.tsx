"use client";
import React from "react";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
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
            <li onClick={() => router.push("/about")}>About Us</li>
            <li onClick={() => router.push("/services")}>Services</li>
            <li onClick={() => router.push("/teams")}>Teams</li>
          </ul>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger className="block md:hidden" asChild>
            <Button variant="ghost">
              <Menu />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Menu</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Home</DropdownMenuItem>
            <DropdownMenuItem>Profile</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
