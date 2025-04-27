"use client"; // components/testimonials/Testimonials.tsx
import { useState, useEffect } from "react";
import axios from "axios";
import TestimonialSlider from "./TestimonialSlider";

// Define TypeScript types for the fetched data
interface TestimonialData {
  id: number;
  name: string;
  role: string;
  rating: number;
  avatar: string;
  qoute: string;
}

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<TestimonialData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL_TEST;

  useEffect(() => {
    // Function to fetch testimonials data
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}api/v1/testimonials`);
        setTestimonials(response.data);
      } catch (err) {
        setError("Failed to load testimonials");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTestimonials();
  }); // Empty dependency array ensures this runs only once

  if (isLoading) {
    return (
      <section className="bg-gray-50 py-16 pb-20">
        <div className="max-w-5xl mx-auto text-center mb-10">
          <h4 className="text-blue-600 font-bold mb-2">Loading...</h4>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-gray-50 py-16 pb-20">
        <div className="max-w-5xl mx-auto text-center mb-10">
          <h4 className="text-red-600 font-bold mb-2">{error}</h4>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gray-50 py-16 pb-20">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h4 className="text-blue-600 font-bold mb-2">OUR TESTIMONIAL</h4>
        <h2 className="text-[7vmin] lg:text-3xl font-bold mb-6">
          What They Say About Us.
        </h2>
      </div>
      <TestimonialSlider testimonials={testimonials} />
    </section>
  );
};

export default Testimonials;
