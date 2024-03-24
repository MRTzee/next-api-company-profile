"use client";
import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import { FacebookIcon, GithubIcon, InstagramIcon } from "lucide-react";
import Image from "next/image";
import Loading from "@/components/Loading";

const Teams = () => {
  const [teamMembers, setTeamMembers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=20");
        const data = await response.json();
        setTeamMembers(data.results);
      } catch (error) {
        console.error("Error fetching team members:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTeamMembers();
  }, []);

  return (
    <>
      <div className="mx-auto py-4 bg-blue-500 text-white px-4 md:px-32">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="py-10 md:py-40 md:order-none text-center md:text-left">
            <h1 className="text-3xl md:text-6xl font-semibold">OUR TEAMS</h1>
          </div>
          <div className="flex justify-center items-center md:order-1 mb-10">
            <Image
              src="/landing13.svg"
              alt="landing"
              width={450}
              height={450}
            />
          </div>
        </div>
      </div>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-6xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
            Meet the crew
          </h2>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            Creative people
          </p>
          {isLoading ? (
            <div className="flex justify-center mt-10">
              <Loading />
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-14">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="grid items-center gap-y-3 gap-x-4 mt-10"
                >
                  <Image
                    src={member.picture.large}
                    alt={member.name.first}
                    width={200}
                    height={200}
                  />
                  <div className="sm:flex sm:flex-col sm:h-full">
                    <div>
                      <h3 className="font-medium text-gray-800 dark:text-gray-200">
                        {`${member.name.first} ${member.name.last}`}
                      </h3>
                    </div>
                    <div className="flex gap-3 mt-2 justify-center">
                      <FacebookIcon />
                      <InstagramIcon />
                      <GithubIcon />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Teams;
