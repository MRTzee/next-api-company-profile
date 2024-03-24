import React from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PriceCard from "./components/PriceCard";
const Services = () => {
  return (
    <>
      <div className="mx-auto py-4 bg-blue-500 text-white px-4 md:px-32">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="py-10 md:py-40 md:order-none text-center md:text-left">
            <h1 className="text-3xl md:text-6xl font-semibold">OUR SERVICES</h1>
            <p className="text-lg md:text-xl mt-6">
              Work like a{" "}
              <span className="text-red-500 font-semibold">Tiger</span>, Smile
              like a <span className="text-yellow-500 font-semibold">Baby</span>
            </p>
          </div>
          <div className="flex justify-center items-center md:order-1 mb-10">
            <Image
              src="/landing10.svg"
              alt="landing"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
      <div className="py-20 mx-auto max-w-7xl">
        <PriceCard />
      </div>
      <div className="py-4 md:pt-5 pb-20 px-4 md:px-32">
        <div className="max-w-7xl bg-slate-200 py-10">
          <div className="text-center mb-10">
            <h1 className="font-bold text-4xl">Document</h1>
          </div>
          <div className="max-w-5xl grid md:grid-cols-2 grid-cols-1 px-4 gap-10 mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Getting started</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  New to MRTzee Development? Our quick start guide helps you
                  take your first steps.
                </p>
              </CardContent>
              <CardFooter className="float-end">
                <Button>Getting Started</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Coding standards</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Read our style guidelines, including coding standards and
                  naming conventions.
                </p>
              </CardContent>
              <CardFooter className="float-end">
                <Button>View Standards</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>API guides</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Learn all about Moodle APIs with our deep-dive guides,
                  complete with examples and explanations.
                </p>
              </CardContent>
              <CardFooter className="float-end">
                <Button>Read API Guides</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Developer community</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Join the open source community that makes Moodle.</p>
              </CardContent>
              <CardFooter className="float-end">
                <Button>Discover communities</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Release notes</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Technical specs and new features of Moodle releases, supported
                  versions and more.
                </p>
              </CardContent>
              <CardFooter className="float-end">
                <Button>Check the release notes</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;
