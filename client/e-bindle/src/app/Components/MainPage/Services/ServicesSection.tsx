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
        <div className="relative w-[600px] h-[380px] min-w-[300px] flex items-center justify-center ">
          {/* Main Large Ellipse */}
          <div className="lg:ml-10 absolute lg:left-0 top-0 overflow-hidden h-[320px] w-[340px] lg:h-[380px] lg:w-[500px]">
            <Image
              src="/images/webd.jpeg" // Replace with your image
              alt="Business Team"
              width={760}
              height={760}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />

            {/* Black Tint Overlay */}

            <div className="absolute inset-0 bg-black/50 pointer-events-none" />
            <div className="absolute inset-0 flex flex-col items-center justify-end text-center px-6 pb-6 z-10">
              <h2 className="text-white text-2xl font-bold mb-0 drop-shadow-lg">
                Let&lsquo;s Work Together
              </h2>
            </div>
          </div>
          {/* Smaller Ellipse (Bottom Right) */}

          {/* Overlay Card */}
        </div>
      </motion.div>

      {/* Text & Button Container */}
      <div className="w-full md:w-1/2 flex flex-col mt-[-4vmin] lg:mt-8  gap-y-1 md:mt-0 ">
        <motion.div
          initial={{ x: 1000, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col mb-8"
        >
          <div className="w-[100%] lg:w-[95%] p-1 pl-3 lg:p-2 mt-0 lg:mt-3">
            <h2 className="text-xl lg:text-2xl font-bold mb-4 text-blue-500 ml-2">
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
