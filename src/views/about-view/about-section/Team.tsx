"use client";
import { useEffect, useState } from "react";
import Head from "next/head";
import { Testimonial } from "@/type/testimonial";

const TestimonialsPage: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isLoadingTestimonials, setIsLoadingTestimonials] = useState(true);
  const [showTestimonials, setShowTestimonials] = useState(false);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=3");
        if (!response.ok) {
          throw new Error("Failed to fetch testimonials");
        }
        const data = await response.json();
        const results = data.results;
        const jobTitles = ["CEO", "Watch Designer", "Marketing Manager"]; // Define specific job titles
        const fetchedTestimonials: Testimonial[] = results.map((result: any, index: number) => ({
          name: `${result.name.first} ${result.name.last}`,
          picture: result.picture.large,
          testimonial: jobTitles[index % jobTitles.length], // Assign specific job titles based on index
        }));
        setTestimonials(fetchedTestimonials);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      } finally {
        setIsLoadingTestimonials(false);
        setShowTestimonials(true);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <div className="max-w-full mx-auto my-14 py-5 px-4 sm:px-6">
      <Head>
        <title>Ironclad Team</title>
        <link rel="preload" href="/fonts/ZenDots-Regular.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/BakbakOne-Regular.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
      </Head>

      {showTestimonials && (
        <>
          <h1 className="text-base w-auto lg:text-2xl text-center mb-5 text-black font-BakbakOne tracking-widest">
            Our Team
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-9 lg:px-24">
            {isLoadingTestimonials
              ? Array.from({ length: 3 }).map((_, index) => (
                  <div key={index} className="border rounded-lg p-4 flex flex-col items-center">
                    <div className="rounded-full w-24 h-24 mb-4 bg-gray-200"></div>
                    <div className="w-full h-6 bg-gray-200 mb-2"></div>
                    <div className="w-1/2 h-6 bg-gray-200"></div>
                  </div>
                ))
              : testimonials.map((testimonial, index) => (
                  <div key={index} className="border rounded-lg p-4 flex flex-col items-center">
                    <img
                      src={testimonial.picture}
                      alt={testimonial.name}
                      className="rounded-full w-24 h-24 mb-4 object-cover"
                      loading="lazy"
                    />
                    <p className="text-xs lg:text-sm text-gray-900 leading-6 text-center mb-2">
                      {testimonial.testimonial}
                    </p>
                    <p className="text-xs lg:text-sm text-gray-700 font-semibold">{testimonial.name}</p>
                  </div>
                ))}
          </div>
        </>
      )}
    </div>
  );
};

export default TestimonialsPage;
