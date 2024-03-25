import React from "react";
import Image from "next/image";

const VisionSection: React.FC = () => {
  return (
    <section className=" mx-auto px-4 md:px-8 py-8 md:py-16 bg-blue-100 text-white">
      <div className="max-w-7xl mx-auto bg-blue-500 p-4">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex justify-center items-center">
            <Image
              src="/landing7.svg"
              alt="landing2"
              width={500}
              height={450}
              loading="lazy"
            />
          </div>
          <div className="flex flex-col gap-5 md:text-left text-center md:mt-10 mt-0">
            <h1 className="font-bold text-2xl md:text-3xl">VISION</h1>
            <p className="text-sm md:text-lg font-light">
              To become a pioneer in the global education revolution through
              advanced technology, creating equal access to quality learning for
              all.
            </p>
            <h1 className="font-bold text-2xl md:text-3xl">MISSION</h1>
            <p className="text-sm md:text-lg font-light">
              Understanding diverse learning needs and providing effective
              educational services to ensure optimal user satisfaction,
              leveraging innovative technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
