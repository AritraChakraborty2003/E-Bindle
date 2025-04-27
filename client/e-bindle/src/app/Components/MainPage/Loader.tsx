"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL_TEST;

export default function Loader({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [projectsRes, testimonialsRes, serviceRes] = await Promise.all([
          fetch(`${API_BASE_URL}api/v1/projects`),
          fetch(`${API_BASE_URL}api/v1/testimonials`),
          fetch(`${API_BASE_URL}api/v1/services`),
        ]);

        // Optional: you can parse the JSON here if you want
        const projectsData = await projectsRes.json();
        const testimonialsData = await testimonialsRes.json();
        const serviceData = await serviceRes.json();

        console.log("Projects:", projectsData);
        console.log("Testimonials:", testimonialsData);
        console.log("Services:", serviceData);

        // Simulate loader duration
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-blue-600 z-50">
        <motion.img
          src="/images/EBindleBlue.jpg"
          alt="Loading..."
          className="w-32 h-32"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    );
  }

  return <>{children}</>;
}
