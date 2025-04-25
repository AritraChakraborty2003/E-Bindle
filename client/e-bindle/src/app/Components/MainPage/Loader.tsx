import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface LoaderProps {
  onFinish?: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onFinish }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      if (onFinish) onFinish();
    }, 2000); // 2 seconds
    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-blue-600 z-50">
      <motion.img
        src="/images/logo-bg-white.png"
        alt="Logo"
        className="w-32 h-32"
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{
          duration: 2,
          times: [0, 0.5, 1],
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default Loader;
