"use client";
import React from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import VisionSection from "../components/VisionSection";
const About = () => {
  return (
    <>
      <div className="mx-auto py-4 md:py-10 bg-blue-500 text-white px-4 md:px-32">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="py-10 md:py-40 md:order-none text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-3xl md:text-6xl font-semibold">SINCE 2012</h1>
              <p className="text-lg md:text-xl mt-6">
                Strong technology experience
              </p>
            </motion.div>
          </div>
          <div className="flex justify-center items-center md:order-1 mb-10">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <Image
                src="/landing11.svg"
                alt="landing"
                width={400}
                height={400}
              />
            </motion.div>
          </div>
        </div>
      </div>
      <section className=" mx-auto px-4 md:px-8 flex justify-center py-10">
        <div className="max-w-2xl mx-auto">
          <p className="font-light text-md md:text-lg text-justify">
            Welcome to our online learning platform! We are a team which is
            committed to advancing education through technology modern. Here, we
            provide easy and flexible access to a variety of learning materials
            designed to meet needs your learning. We believe that learning knows
            no boundaries. With e-learning, you can learn anytime and anywhere
            according to your schedule.
          </p>
          <p className="text-blue-500 font-semibold mt-5">Read more</p>
        </div>
      </section>
      <VisionSection />
      <div className="mx-auto py-4 md:py-10   px-4 md:px-32">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="py-10 md:py-40 md:order-1 text-center md:text-left">
            <h1 className="text-3xl md:text-6xl font-semibold">OUR CLIENT</h1>
            <p className="text-lg md:text-xl mt-6">
              Trusted by 2000+ Schools in Indonesia
            </p>
          </div>
          <div className="flex justify-center items-center md:order-none mb-10">
            <Image
              src="/landing12.svg"
              alt="landing"
              width={450}
              height={450}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
