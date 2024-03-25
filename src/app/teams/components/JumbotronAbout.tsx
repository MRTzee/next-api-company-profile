import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const JumbotronAbout = () => {
  return (
    <div className="mx-auto py-4 bg-blue-500 text-white px-4 md:px-32">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="py-10 md:py-40 md:order-none text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-3xl md:text-6xl font-semibold">OUR TEAMS</h1>
          </motion.div>
        </div>
        <div className="flex justify-center items-center md:order-1 mb-10">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/landing13.svg"
              alt="landing"
              width={450}
              height={450}
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default JumbotronAbout;
