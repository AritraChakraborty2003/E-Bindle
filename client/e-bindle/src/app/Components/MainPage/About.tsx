"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const AboutSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
    rootMargin: "-50px 0px",
  });

  return (
    <div
      ref={ref}
      className="mt-[10vmin] lg:mt-[20vmin] flex flex-wrap  pb-10 lg:pt-20 lg:pb-20 w-full items-center justify-center  "
    >
      {/* Image Container */}
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full md:w-1/2 flex justify-center"
      >
        <div className="relative w-[540px] h-[380px] min-w-[300px] flex items-center justify-center">
          {/* Main Large Ellipse */}
          <div
            className="absolute left-0 top-0 overflow-hidden h-[320px] w-[340px] lg:h-[320px] lg:w-[420px]"
            style={{
              clipPath: "ellipse(48% 45% at 50% 50%)",
              boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.08)",
            }}
          >
            <Image
              src="/images/about_ebindle.jpg" // Replace with your image
              alt="Business Team"
              width={540}
              height={340}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </div>

          {/* Smaller Ellipse (Bottom Right) */}
          <div
            className="absolute right-[-1] bottom-0 overflow-hidden"
            style={{
              width: "210px",
              height: "160px",
              clipPath: "ellipse(48% 45% at 50% 50%)",
              boxShadow: "0 4px 16px 0 rgba(31, 38, 135, 0.07)",
            }}
          >
            <Image
              src="/images/about_ebindle.jpg" // Same image for effect
              alt="Business Team"
              width={160}
              height={160}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </div>

          {/* Overlay Card */}
          <div className="absolute left-12 bottom-6 bg-white rounded-xl shadow-lg px-4 py-2 z-10">
            <span className="text-xs font-semibold text-gray-600">
              Experience
            </span>
            <span className="text-lg font-bold text-blue-700 block">
              4+ years
            </span>
            <div className="flex gap-1 mt-1">
              <div className="w-1 h-4 bg-blue-300 rounded"></div>
              <div className="w-1 h-6 bg-blue-400 rounded"></div>
              <div className="w-1 h-8 bg-blue-500 rounded"></div>
              <div className="w-1 h-5 bg-blue-400 rounded"></div>
              {/* <div className="w-1 h-7 bg-blue-600 rounded"></div> */}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Text & Button Container */}
      <div className="w-full md:w-1/2 flex flex-col mt-8  gap-y-1 md:mt-0 md:pl-12">
        <motion.div
          initial={{ x: 1000, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col mb-8"
        >
          <div className="w-[100%] lg:w-[95%] p-1 pl-3 lg:p-2 mt-0 lg:mt-3">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-blue-700 ml-2">
              About Us
            </h2>
            <p className="leading-[9vmin] lg:leading-[5.6vmin] w-[98%] font-sans p-2 text-md ">
              <span className="font-bold">MAKING IDEAS TO REALITY.</span> We are
              the best Software solutions company which brings full options to
              build any software solution product you need.Present your digital
              products, services, and solutions with our software solutions
              company.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: -1000, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex"
        >
          <button className="bg-blue-600 text-white mt-[-1.75vmin] px-8 py-3  ml-5 rounded-lg hover:bg-blue-700 transition-colors">
            Learn More
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;
