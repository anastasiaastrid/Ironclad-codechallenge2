import { useEffect, useState } from "react";
import Head from "next/head";
import { Testimonial } from "@/type/testimonial";

const TestimonialsPage: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=5");
        const data = await response.json();
        const results = data.results;
        const fetchedTestimonials: Testimonial[] = results.map((result: any) => ({
          name: `${result.name.first} ${result.name.last}`,
          picture: result.picture.large,
          testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        }));
        setTestimonials(fetchedTestimonials);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <div>
      <Head>
        <title>Testimonials Page</title>
        <meta name="description" content="Testimonials from satisfied customers." />
      </Head>
      <h1>Testimonials</h1>
      <div>
        {testimonials.map((testimonial, index) => (
          <div key={index}>
            <img src={testimonial.picture} alt={testimonial.name} />
            <p>{testimonial.testimonial}</p>
            <p>{testimonial.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsPage;
