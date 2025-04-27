/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import { TestimonialData } from "./TestinmomialsDataInterface";
import Image from "next/image";

interface TestimonialCardProps {
  testimonial: TestimonialData;
  variant?: "card" | "quote";
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  variant = "card",
}) => {
  const { name, role, qoute, rating = 0 } = testimonial;

  if (variant === "quote") {
    return (
      <div className="flex flex-col items-center text-center p-6">
        {/* Large blue quote mark */}
        <div className="text-blue-600 text-7xl mb-4">❝</div>

        <div className="mb-6">
          <Image
            src="/images/avatar.png"
            alt="image"
            width={60}
            height={60}
            className="rounded-full"
          />
        </div>

        <div className="text-center max-w-md">
          <p className="italic text-gray-200 mb-6">{qoute}</p>

          <h3 className="font-bold text-lg">"{name}"</h3>
          <p className="text-gray-300">{role}</p>
        </div>
      </div>
    );
  }

  // Default card variant
  return (
    <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col">
      <div className="flex items-start mb-4">
        <div className="mr-4">
          <Image
            src="/images/avatar.png"
            alt="image"
            width={60}
            height={60}
            className="rounded-full"
          />
        </div>
        <div>
          <h3 className="font-bold text-lg">{name}</h3>
          <p className="text-gray-600 text-sm">{role}</p>
        </div>
      </div>

      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${
              i < rating ? "text-yellow-400" : "text-gray-300"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
        ))}
      </div>

      <p className="italic text-gray-700 flex-grow">"{qoute}"</p>
    </div>
  );
};

export default TestimonialCard;
