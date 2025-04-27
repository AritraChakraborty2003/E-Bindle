/* eslint-disable react/no-unescaped-entities */
// components/services/MainService.tsx
"use client";
import React from "react";
import { ServiceData } from "./ServiceData";
import ServiceCard from "./ServiceCard";

const Services: React.FC = () => {
  // Updated service data with equal-length descriptions
  const services: ServiceData[] = [
    {
      id: 1,
      title: "Custom SaaS",
      description:
        "We specialize in developing custom Software as a Service (SaaS) solutions that are secure, scalable, and tailored to your business's unique needs, enabling growth and efficiency.",
      icon: "SaaS.png",
      bgColor: "#b3e3c2", // Green
      delay: 0.3,
    },
    {
      id: 2,
      title: "Web Development",
      description:
        "Our expert web development team builds responsive, high-performance websites designed to enhance user experience and maximize conversions, driving success for your business.",
      icon: "web-dev.png",
      bgColor: "#b8f5ff", // Light pink/white
      delay: 0.4,
    },
    {
      id: 3,
      title: "IoT Solutions",
      description:
        "We provide innovative Internet of Things (IoT) solutions that connect your devices, automate processes, and enable real-time data collection, helping you make smarter decisions.",
      icon: "IOT.png",
      bgColor: "#fff5ef", // Light orange
      delay: 0.5,
    },
    {
      id: 4,
      title: "AI/ML & Analytics",
      description:
        "Our AI and Machine Learning services leverage advanced models and analytics to transform your business data into actionable insights, improving decision-making and operational efficiency.",
      icon: "AI_ML.png",
      bgColor: "#0950d5", // Blue
      delay: 0.4,
    },
    {
      id: 5,
      title: "App Development",
      description:
        "We design and develop mobile applications that provide seamless user experiences across iOS and Android platforms, helping your business engage and retain customers effectively.",
      icon: "app-dev.png",
      bgColor: "#f8f0ff", // Light purple
      delay: 0.3,
    },
  ];

  // Split services for layout (2 in first row, 3 in second row)
  const firstRowServices = services.slice(0, 2);
  const secondRowServices = services.slice(2);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="mb-12">
          <h3 className="text-blue-600 font-bold mb-2 uppercase">
            OUR SERVICES
          </h3>
          <h2 className="text-4xl font-bold mb-4">
            We Understand Your Business
          </h2>
          <p className="text-gray-600 max-w-2xl mb-8 lg:leading-[5.96vmin]">
            Our strategy includes consistently evolving to ensure we're
            producing exceptional SEO to business awesome services.
          </p>
        </div>

        {/* First row - 2 cards */}
        <div className="flex flex-wrap -mx-4 lg:ml-[6vmin] mb-8">
          {firstRowServices.map((service) => (
            <div key={service.id} className="w-full md:w-[45%] p-4">
              <ServiceCard service={service} />
            </div>
          ))}
        </div>

        {/* Second row - 3 cards */}
        <div className="flex flex-wrap -mx-4">
          {secondRowServices.map((service) => (
            <div key={service.id} className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <ServiceCard service={service} />
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-10">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg">
            Discover More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
