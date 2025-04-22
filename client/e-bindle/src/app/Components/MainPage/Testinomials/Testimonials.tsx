"use client"; // components/testimonials/Testimonials.tsx

import TestimonialSlider from "./TestimonialSlider";
import { TestimonialData } from "./TestinmomialsDataInterface";

const testimonials: TestimonialData[] = [
  {
    id: 1,
    name: "Al-Aamin",
    role: "Project Manager",
    rating: 5,
    avatar: "https://i.pravatar.cc/100?img=1",
    quote: "Lorem totam rem aperi eaque ipsa business quea ab illo in...",
  },
  {
    id: 2,
    name: "Anil Lama",
    role: "Project Manager",
    rating: 4,
    avatar: "https://i.pravatar.cc/100?img=2",
    quote: "Lorem totam rem aperi eaque ipsa business quea ab illo in...",
  },
  {
    id: 3,
    name: "Akash",
    role: "Project Manager",
    rating: 5,
    avatar: "https://i.pravatar.cc/100?img=3",
    quote: "Lorem totam rem aperi eaque ipsa business quea ab illo in...",
  },
  {
    id: 4,
    name: "Aman Pal",
    role: "Project Manager",
    rating: 4,
    avatar: "https://i.pravatar.cc/100?img=4",
    quote:
      "Lorem totam rem aperi eaque ipsa business quea ab illo in..Lorem totam rem",
  },
  {
    id: 5,
    name: "Al-Aamin Hossain",
    role: "Project Manager",
    rating: 5,
    avatar: "https://i.pravatar.cc/100?img=5",
    quote: "Lorem totam rem aperi eaque ipsa business quea ab illo in...",
  },
  // Add more as needed
];

const Testimonials = () => (
  <section className="bg-gray-50 py-16">
    <div className="max-w-5xl mx-auto text-center mb-10">
      <h4 className="text-blue-600 font-bold mb-2">OUR TESTIMONIAL</h4>
      <h2 className="text-3xl font-bold mb-6">What They Say About Us.</h2>
    </div>
    <TestimonialSlider testimonials={testimonials} />
  </section>
);

export default Testimonials;
