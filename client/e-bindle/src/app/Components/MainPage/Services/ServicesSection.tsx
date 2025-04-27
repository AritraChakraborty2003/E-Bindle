"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const ServiceSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
    rootMargin: "-50px 0px",
  });

  return (
    <div
      ref={ref}
      className="mt-5 flex flex-wrap  pb-10 lg:pt-20 lg:pb-20 w-full items-center justify-center  "
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
          <div className="absolute left-5 lg:left-0 top-0 overflow-hidden h-[320px] w-[340px] lg:h-[320px] lg:w-[420px]">
            <Image
              src="/images/a.png" // Replace with your image
              alt="Business Team"
              width={560}
              height={560}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </div>

          {/* Smaller Ellipse (Bottom Right) */}

          {/* Overlay Card */}
        </div>
      </motion.div>

      {/* Text & Button Container */}
      <div className="w-full md:w-1/2 flex flex-col mt-8  gap-y-1 md:mt-0 ">
        <motion.div
          initial={{ x: 1000, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col mb-8"
        >
          <div className="w-[100%] lg:w-[95%] p-1 pl-3 lg:p-2 mt-0 lg:mt-3">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-blue-500 ml-2">
              - Web Development
            </h2>
            <p className="leading-[9vmin] lg:leading-[5.6vmin] w-[98%] font-sans p-2 text-md ">
              At e-bindle, we are a technology-driven service company and aim to
              provide top quality web developmetn services to our clients to
              manage and monitor high quality web apps
            </p>
          </div>
        </motion.div>

        {/* <motion.div
          initial={{ x: -1000, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex"
        >
          <button className="bg-blue-600 text-white mt-[-1.75vmin] px-8 py-3  ml-5 rounded-lg hover:bg-blue-700 transition-colors">
            Learn More
          </button>
        </motion.div> */}
      </div>
    </div>
  );
};

export default ServiceSection;
