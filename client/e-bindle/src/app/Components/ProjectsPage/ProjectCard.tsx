import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ProjectProps {
  project: {
    images: [string];
    title: string;
    descr: string;
    link: string;
  };
}
const ProjectCard: React.FC<ProjectProps> = ({ project }) => {
  const { images, title, descr, link } = project;
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
    rootMargin: "-50px 0px",
  });

  console.log(images[0]);

  return (
    <div ref={ref}>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="card w-[80vw] lg:w-[25vw]  flex justify-center items-center pb-6 border-gray-300 border-1 ">
          <div className="flex flex-col w-full h-full">
            <div className="imageHolder w-[100%] h-[70%] border-gray-300 border-1 bg-[#ecf1f5] flex justify-center items-center">
              <div className="w-[70%] pb-10 pt-10">
                <Image
                  className="w-full h-full object-cover"
                  src={"https://api.e-bindle.in/" + images[0]}
                  alt="Project Image"
                  width={500}
                  height={500}
                />
              </div>
            </div>
            <div className="textHolder  w-[100%] h-[30%] ">
              <p className="pb-5 mt-4 font-poppins font-extrabold ml-3 letter-spacing-[0.15vmin] text-xl ">
                {title}
              </p>

              <p className="ml-3 text-gray-500 mt-2 text-md pb-2 leading-[4vmin] pl-1">
                {descr}
              </p>
            </div>

            <div>
              <button className="bg-blue-600 text-white p-1 ml-3 mt-3">
                <Link href={`${link}`}>Read More</Link>
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
