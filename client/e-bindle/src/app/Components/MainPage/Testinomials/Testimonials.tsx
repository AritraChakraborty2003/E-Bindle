"use client";

import { useState, useEffect } from "react";
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

// Mock data to simulate API response
const mockTestimonials: TestimonialData[] = [
  {
    id: 1,
    name: "Somnath Chakraborty",
    role: "Full Stack Developer",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    qoute:
      "The platform is incredibly smooth and efficient. A perfect blend of modern tech!",
  },
  {
    id: 2,
    name: "Mamta Singh",
    role: "Marketing Specialist",
    rating: 4,
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    qoute:
      "Really impressed with the intuitive UI and the customer support. Highly recommend!",
  },
  {
    id: 3,
    name: "Suryajeet",
    role: "Startup Consultant",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/23.jpg",
    qoute:
      "This solution helped us scale faster with less friction. Amazing experience!",
  },
  {
    id: 4,
    name: "Sulochana Pandey",
    role: "UI/UX Designer",
    rating: 4,
    avatar: "https://randomuser.me/api/portraits/women/41.jpg",
    qoute:
      "Aesthetic, functional, and user-friendly. Loved collaborating with the team.",
  },
];

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<TestimonialData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate async fetch with mock data
    const fetchTestimonials = () => {
      try {
        setTimeout(() => {
          setTestimonials(mockTestimonials);
          setIsLoading(false);
        }, 300); // simulate delay
      } catch {
        setError("Failed to load testimonials");
        setIsLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

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
