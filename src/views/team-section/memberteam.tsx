"use client";
import { useEffect, useState } from "react";
import { Testimonial } from "@/type/testimonial";

const Team: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=3");
        const data = await response.json();
        const results = data.results;
        const fetchedTestimonials: Testimonial[] = results.map((result: any) => ({
          name: `${result.name.first} ${result.name.last}`,
          picture: result.picture.large,
          testimonial: generateTestimonial(),
        }));
        setTestimonials(fetchedTestimonials);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    const generateTestimonial = () => {
      const testimonials = [
        "The Ironclad watch exceeded my expectations! It's elegant and reliable.",
        "I love my Ironclad watch! It's stylish and fits perfectly with any outfit.",
        "The durability of the Ironclad watch is impressive! It's my go-to accessory every day.",
      ];
      const randomIndex = Math.floor(Math.random() * testimonials.length);
      return testimonials[randomIndex];
    };

    fetchTestimonials();
  }, []);

  return (
    <div className="max-w-full max-h-full mx-auto my-auto py-5 px-4 sm:px-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-black font-BakbakOne">Ironclad Wearers</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="border rounded-lg p-4 flex flex-col items-center">
            <img
              src={testimonial.picture}
              alt={testimonial.name}
              className="rounded-full w-24 h-24 mb-4 object-cover"
            />
            <p className="text-sm text-gray-900 leading-6 text-center mb-2">{testimonial.testimonial}</p>
            <p className="text-sm text-gray-700 font-semibold">{testimonial.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
