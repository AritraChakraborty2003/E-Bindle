// app/components/Projects/index.tsx
"use client";

import useGET from "@/app/Utils/useGET";
import ProjectCard from "../../ProjectsPage/ProjectCard";

interface Project {
  images: string[];
  title: string;
  descr: string;
  link: string;
  // Add other fields as per your API response
}

interface ProjectProps {
  title: string;
}

const Projects: React.FC<ProjectProps> = ({ title }) => {
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL_TEST;
  const { data, loading, error } = useGET<Project[]>(
    `${API_BASE_URL}api/v1/projects`
  );
  const delay = [0.6, 0.4, 0.2];

  console.log(data);

  return (
    <div className="relative overflow-hidden w-full h-full py-20 pb-20 mt-[-10.75vmin] lg:mt-[-2vmin]">
      <p className="ml-3 text-[7vmin] font-extrabold font-Poppins">
        {title.split(" ")[0]}
        <span className="text-blue-500 font-bold"> {title.split(" ")[1]}</span>
      </p>
      <p className=" ml-3 text-sm lg:text-md text-black letter-spacing-[1rem] mt-1 ">
        ( Some of our recent client projects )
      </p>

      <div className="mt-8 flex flex-wrap justify-evenly items-center gap-x-3 gap-y-8">
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">Error loading projects.</p>}
        {data &&
          (title === "Latest Projects"
            ? data.map((item, index) => (
                <ProjectCard
                  key={index}
                  project={item}
                  delay={delay[index % 3]}
                />
              ))
            : data
                .slice(0, 3)
                .map((item, index) => (
                  <ProjectCard
                    key={index}
                    project={item}
                    delay={delay[index % 3]}
                  />
                )))}
      </div>
    </div>
  );
};

export default Projects;
