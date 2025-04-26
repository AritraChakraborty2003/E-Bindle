import React from "react";
import BlogCard from "./Cards/BlogCard";
import LeftAnimation from "@/app/Animations/LeftAnimation";
import RightAnimation from "@/app/Animations/RightAnimation";

const Blogs = () => {
  return (
    <>
      <div className="blogs w-[100vw] pb-5 lg:pb-22 p-3 pt-8">
        <header className="flex w-full">
          <div className="text">
            <LeftAnimation>
              <p className="text-[9vmin] lg:text-7xl font-extrabold">
                Our
                <span className="text-blue-500"> Blogs</span>
              </p>
            </LeftAnimation>
          </div>
          <div className="ml-[15vmin] lg:w-[60vw] mt-7 flex justify-end">
            <RightAnimation>
              <button className="bg-blue-500 text-white  h-10 w-30">
                View More
              </button>
            </RightAnimation>
          </div>
        </header>

        <main className="mt-[9vmin] p-2 flex flex-wrap justify-evenly items-center gap-y-10 lg:gap-y-0">
          {[0.6, 0.4, 0.2].map((item, index) => (
            <LeftAnimation key={index} delay={item}>
              <BlogCard />
            </LeftAnimation>
          ))}
        </main>
      </div>
    </>
  );
};

export default Blogs;
