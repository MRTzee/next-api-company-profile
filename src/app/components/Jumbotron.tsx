"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Jumbotron: React.FC = () => {
  return (
    <div className="mx-auto py-4 bg-blue-500 text-white px-4 md:px-32">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="py-10 md:py-40 md:order-none text-center md:text-left"
        >
          <h1 className="text-3xl md:text-6xl font-semibold">
            LEADING <br /> E-LEARNING
          </h1>
          <p className="text-lg md:text-xl mt-6">
            Our platform will help you achieve a deep understanding
          </p>
        </motion.div>
        <div className="flex justify-center items-center md:order-1 mb-10">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Image src="/landing6.svg" alt="landing" width={450} height={450} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
