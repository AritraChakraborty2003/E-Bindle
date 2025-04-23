"use client";

import ProjectCard from "../../ProjectsPage/ProjectCard";

interface ProjectProps {
  title: string;
}
// import { Carousel } from "./ProjectsCarousel";
const Projects: React.FC<ProjectProps> = (props) => {
  const { title } = props;
  const projects = [
    {
      image: "/images/bw-image.png",
      title: "Branding Wokz",
      description: "The Branding Workz website",
      link: "/",
      delay: 0.6,
    },
    {
      image: "/images/bw-image.png",
      title: "Branding Wokz",
      description: "The Branding Workz website",
      link: "/",
      delay: 0.4,
    },
    {
      image: "/images/bw-image.png",
      title: "Branding Wokz",
      description: "The Branding Workz website",
      link: "/",
      delay: 0.3,
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20 pb-20 mt-[-10.75vmin] lg:mt-[-2vmin]">
      <p className="ml-3 text-[7vmin] font-extrabold font-Poppins">
        {title.split(" ")[0]}
        <span className="text-blue-500 font-bold"> {title.split(" ")[1]}</span>
      </p>
      <p className=" ml-3 text-xs lg:text-md text-black letter-spacing-[1rem] mt-1 ">
        ( Some of our recent client projects )
      </p>

      <div className="mt-8 flex  flex-wrap justify-evenly items-center gap-x-3  gap-y-6">
        {projects.map((item, index) => (
          <ProjectCard key={index} project={item} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
