import React from "react";

const IntroSection: React.FC = () => {
  return (
    <section className=" mx-auto px-4 md:px-8 flex justify-center py-10 bg-blue-100">
      <div className="max-w-2xl mx-auto">
        <p className="font-light text-md md:text-lg text-justify">
          MRTzee is the answer to challenges in the world of education
          increasingly complex and diverse. With increasing demand for more
          flexible and affordable learning, MRTzee is here as A revolutionary
          platform to meet everyone's learning needs.
        </p>
        <p className="font-semibold mt-5">Read more</p>
      </div>
    </section>
  );
};

export default IntroSection;
