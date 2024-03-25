"use client";
import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import { FacebookIcon, GithubIcon, InstagramIcon } from "lucide-react";
import Image from "next/image";
import JumbotronAbout from "./components/JumbotronAbout";

const Teams = () => {
  const [teamMembers, setTeamMembers] = useState<User[]>([]);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=8", {
          cache: "no-store",
        });
        const data = await response.json();
        setTeamMembers(data.results);
      } catch (error) {
        console.error("Error fetching team members:", error);
      }
    };

    fetchTeamMembers();
  }, []);

  return (
    <>
      <JumbotronAbout />
      <div className="max-w-6xl mx-auto text-center mb-10 px-4 py-10">
        <h2 className="text-2xl font-bold md:text-4xl ">Meet the crew</h2>
        <p className=" text-gray-600 ">Creative people</p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
          {teamMembers?.map((member, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center gap-4 mt-10"
            >
              <Image
                src={member.picture.large}
                alt={`${member.name.first} ${member.name.last}`}
                width={200}
                height={200}
                loading="lazy"
              />
              <div>
                <div>
                  <h3 className="font-medium text-gray-800 dark:text-gray-200">
                    {`${member.name.first}${member.name.last}`}
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
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Teams;
