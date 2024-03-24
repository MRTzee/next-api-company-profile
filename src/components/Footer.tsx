"use client";
import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  TwitchIcon,
  YoutubeIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const Footer: React.FC = () => {
  const router = useRouter();
  return (
    <footer>
      <div className="mx-auto px-4 md:px-32 pt-5 pb-4 bg-blue-500 text-white">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div>
            <h1
              onClick={() => router.push("/")}
              className="font-bold text-xl md:text-3xl"
            >
              MRT<span className="text-black">zee</span>
            </h1>
          </div>
          <ul className="flex flex-col md:flex-row gap-10 font-light text-md py-10">
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
        <div className="flex flex-col md:flex-row md:justify-between">
          <div>
            <h1 className="font-light text-xs md:text-sm">
              MRTzee Diawasi oleh Kemendikbud
            </h1>
            <h1 className="font-light text-xs md:text-sm">
              MRTzee Diawasi oleh Kemenag
            </h1>
          </div>
          <ul className="flex flex-wrap gap-5 font-light text-xs md:text-sm mt-4">
            <li>
              <FacebookIcon />
            </li>
            <li>
              <InstagramIcon />
            </li>
            <li>
              <GithubIcon />
            </li>
            <li>
              <YoutubeIcon />
            </li>
            <li>
              <TwitchIcon />
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto px-4 md:px-32 text-left bg-blue-800 py-3 text-white">
        <p className="text-xs md:text-sm font-light">
          Terima kasih sudah mampir! Laman ini lebih nyaman dinikmati di ponsel
          pintar. Coba sekarang untuk pengalaman yang lebih maksimal.
        </p>
      </div>
      <div className="mx-auto px-4 md:px-32 text-left bg-blue-950 py-3 text-white">
        <p className="text-xs md:text-sm font-light">@copyright MRTzee</p>
      </div>
    </footer>
  );
};

export default Footer;
