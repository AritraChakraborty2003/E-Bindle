"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface LeftAnimationProps {
  children: React.ReactNode;
  delay?: number;
}

const LeftAnimation: React.FC<LeftAnimationProps> = ({
  children,
  delay = 0.2,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
    rootMargin: "-50px 0px",
  });

  return (
    <div ref={ref}>
      <motion.div
        initial={{ x: -1000, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6, delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default LeftAnimation;
