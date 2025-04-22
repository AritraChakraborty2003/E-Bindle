"use client";
// import { Carousel } from "./ProjectsCarousel";
import Image from "next/image";
const Projects = () => {
  // const slideData = [
  //   {
  //     title: "Mystic Mountains",
  //     button: "Explore Component",
  //     src: "https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   },
  //   {
  //     title: "Urban Dreams",
  //     button: "Explore Component",
  //     src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   },
  //   {
  //     title: "Neon Nights",
  //     button: "Explore Component",
  //     src: "https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   },
  //   {
  //     title: "Desert Whispers",
  //     button: "Explore Component",
  //     src: "https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   },
  // ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20 pb-20">
      <p className="ml-3 text-[9vmin] font-bold">
        Our
        <span className="text-blue-500 font-bold">&nbsp;Projects</span>
      </p>
      <p className="mt-1 ml-3 text-lg text-black letter-spacing-[1rem]">
        ( Some of our recent client projects )
      </p>
      <div className="mt-8 flex justify-center items-center">
        <div className="card  w-[28%] border-gray-300 border-1 flex justify-center items-center">
          <div className="flex flex-col w-full h-full">
            <div className="imageHolder w-[100%] h-[70%] border-gray-300 border-1 bg-[#ecf1f5] flex justify-center items-center">
              <div className="w-[70%] pb-10 pt-10">
                <Image
                  className="w-full h-full object-cover"
                  src="/images/bg-Image.png"
                  alt="Project Image"
                  width={500}
                  height={500}
                />
              </div>
            </div>
            <div className="textHolder  w-[100%] h-[30%] border-gray-300 border-1">
              <p className="mt-4 font-poppins font-extrabold ml-3 letter-spacing-[0.15vmin] text-xl ">
                Branding Workz
              </p>

              <p className="ml-3 text-gray-500 mt-2 text-md pb-2 leading-[4vmin] pl-1">
                This is a service agency website for a client Branding-Workz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
