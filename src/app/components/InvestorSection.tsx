"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Loading from "@/components/Loading";

const InvestorSection: React.FC = () => {
  const [investors, setInvestors] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchInvestors = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=3");
        const data = await response.json();
        setInvestors(data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchInvestors();
  }, []);
  return (
    <div className="max-w-5xl mx-auto px-4 md:px-8 py-8 md:py-16 ">
      <div className="text-center mb-14">
        <h1 className="text-3xl md:text-4xl font-bold">OUR INVESTOR</h1>
      </div>
      {isLoading ? (
        <div className="flex justify-center">
          <Loading />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
          {investors.map((investor, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center text-center"
            >
              <Image
                src={investor.picture.large}
                alt={`${investor.name.first} ${investor.name.last}`}
                className="border-4 border-blue-500 rounded-full"
                width={300}
                height={300}
              />
              <p className="font-semibold text-xl mt-4">{`${investor.name.first} ${investor.name.last}`}</p>
            </div>
          ))}
        </div>
      )}
      <div className="mt-14 px-4 md:px-8">
        <p className="font-light text-md md:text-lg text-justify">
          Our e-learning investor platform provides exclusive access for
          investors to support and collaborate with developers leading
          educational content around the world. With innovative tools and
          customized features, our platform allows investors to explore,
          evaluate and invest in e-learning projects that fits their vision and
          investment goals. We are committed to provide a transparent, safe and
          profitable environment for investors, while supporting the growth and
          success of developers e-learning content.
        </p>
      </div>
    </div>
  );
};

export default InvestorSection;
