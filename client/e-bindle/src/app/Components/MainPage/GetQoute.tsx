"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const GetQoute = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
    rootMargin: "-50px 0px",
  });

  return (
    <div
      ref={ref}
      className="bg-gradient-to-br  from-blue-800 to-blue-400 text-white pb-[5vmin] pt-[5vmin]"
    >
      <motion.div
        className="flex flex-col items-center justify-center py-20"
        initial={{ x: -1000, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col gap-y-5 justify-center items-center">
          <h1 className="text-white font-bold text-4xl lg:text-5xl">
            Get a Quote Now!!!
          </h1>
          <p className="text-white text-sm">
            (Get the E-solutions at the most afforable price)
          </p>
          <div className="flex">
            <input
              type="text"
              className="w-[70vw] lg:w-[46vw] p-3 bg-white text-black focus:outline-none  mt-4"
              placeholder="Enter your email"
            />
            <div className=" bg-blue-300 p-3 mt-4">
              <i className="ri-send-plane-fill text-lg"></i>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default GetQoute;
