// components/services/ServiceCard.tsx
"use client";
import React from "react";
import Image from "next/image";
import { ServiceData } from "./ServiceData";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

interface ServiceCardProps {
  service: ServiceData;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
    rootMargin: "-50px 0px",
  });
  const { title, description, icon, bgColor, delay } = service;

  // Determine if background is dark enough to need white text
  const isDarkBg = bgColor === "#0950d5" || bgColor === "#1cd6b1";
  const textColor = isDarkBg ? "text-white" : "text-gray-900";
  const descriptionColor = isDarkBg
    ? "text-white text-opacity-80"
    : "text-gray-600";

  return (
    <div ref={ref}>
      <motion.div
        initial={{ x: -500, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: delay }}
      >
        <div
          className="rounded-lg p-8 h-full flex flex-col items-center text-center"
          style={{ backgroundColor: bgColor }}
        >
          <div className="rounded-full bg-white bg-opacity-30 p-6 flex items-center justify-center mb-6 w-24 h-24">
            <Image
              src={`/images/${icon}`}
              alt={title}
              width={48}
              height={48}
              className={isDarkBg ? "text-white" : "text-gray-800"}
            />
          </div>

          <h3 className={`text-xl font-bold mb-4 ${textColor}`}>{title}</h3>

          <p className={descriptionColor}>{description}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default ServiceCard;
