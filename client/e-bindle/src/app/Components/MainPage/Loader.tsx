"use client"; // Required for client-side hooks

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Loader({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
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
