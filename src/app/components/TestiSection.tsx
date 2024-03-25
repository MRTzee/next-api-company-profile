"use client";
import React, { useEffect, useState, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Loading from "@/components/Loading";

const TestiSection: React.FC = () => {
  const [testimonials, setTestimonials] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch(
          "https://randomuser.me/api/?results=5&nat=us,in,cn"
        );
        const data = await response.json();
        setTestimonials(data.results);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <div className="bg-blue-100">
      <h1 className="text-3xl md:text-4xl font-bold text-center pt-8 md:pt-16">
        TESTIMONIAL
      </h1>
      <div className=" mx-auto py-8 md:py-14 flex justify-center">
        {isLoading ? (
          <Loading />
        ) : (
          <Carousel
            opts={{ align: "start" }}
            className="w-full max-w-72 md:max-w-5xl"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex flex-col aspect-square items-center text-center justify-center p-6 gap-6">
                        <Avatar className="w-[80px] h-[80px]">
                          <AvatarImage
                            src={testimonial.picture.large}
                            alt={`${testimonial.name.first} ${testimonial.name.last}`}
                            loading="lazy"
                          />
                          <AvatarFallback>
                            {testimonial.name.first.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p>
                            "I come from {testimonial.location.country} and this
                            platform really helped me"
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        )}
      </div>
    </div>
  );
};

export default TestiSection;
