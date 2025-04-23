/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import FlipCard from "./FlipCard";

const Hero = () => {
  const boxBottomData = [
    {
      icon: "ri-smartphone-line",
      title: "Responsive Design",
      description:
        "We create responsive designs that look great on all devices.",
      backTitle: "Responsive Design",
      backDescription:
        "We create responsive designs that look great on all devices by using mobile first design and light weight css frameworks like TailwindCSS.",
    },

    {
      icon: "ri-global-line",
      title: "SEO Friendly",
      description: "We implement  best SEO practices  for better search ranks",
      backTitle: "SEO Friendly",
      backDescription:
        "We implement best SEO practices to improve your website's visibility on search engines via standard code practices and using frameworks like Next.js",
    },
    {
      icon: "ri-shield-check-line",
      title: "Security Focused",
      description:
        "We prioritize security in all our projects to protect your data.",
      backTitle: "Security Focused",
      backDescription:
        "We prioritize security in all our projects to protect your data by using best practices and api security measures to prevent data leaks.",
    },
  ];
  return (
    <div className="relative w-[100vw] min-h-[100vh] lg:h-[90vh]  2xl:h-[98vh] lg:w-[100vw] 2xl:w-[100vw] ">
      {/* Background Image */}
      <div
        className=" absolute inset-0 bg-cover bg-left lg:bg-center bg-no-repeat"
        style={{ backgroundImage: "url('images/hero-bg-2.jpg')" }}
      ></div>

      {/* Black Overlay with Proper Transparency */}
      <div className=" absolute inset-0 bg-black/62"></div>

      {/* Text Content (Ensures Readability) */}
      <div className=" absolute inset-0 left-3 mt-16  lg:mt-10 lg:left-10 flex flex-col items-start justify-center gap-y-4  text-white text-center">
        <div>
          <p className="text-xs lg:text-sm">
            // Experience Best IT Solution in India
          </p>
        </div>
        <div className="">
          <p className="leading-10 lg:leading-[10vmin]  lg:w-[47vw] text-3xl 2xl:text-5xl font-medium lg:text-[7vmin] text-start ">
            Where Creativity Meets Cutting-Edge Technology
          </p>
        </div>
        <div>
          <p className="text-xs lg:text-sm  lg:w-[36vw] text-start leading-6 lg:leading-8">
            We specialize in delivering cutting-edge IT solutions tailored to
            your business needs and requirements.From custom web and app
            development to all your software needs we do it all
          </p>
        </div>

        <div
          className="flex gap-x-12 justify-center items-center"
          style={{
            marginTop: "2.35vmin",
          }}
        >
          <button
            className="bg-blue-500 text-white"
            style={{
              paddingLeft: "2.5vmin",
              paddingRight: "2.5vmin",
              paddingTop: "1.5vmin",
              paddingBottom: "1.5vmin",
              borderRadius: "5px",
            }}
          >
            Learn More&nbsp;&nbsp;
            <a className="">
              <i className="ri-arrow-right-line  text-white text-md"></i>
            </a>
          </button>
          <p className="text-white border-b-1">View all Services</p>
        </div>
      </div>
      <div className="hidden lg:block p-3">
        <div className="flex justify-evenly items-center absolute top-[85%] w-[98vw] ">
          {boxBottomData.map((item, index) => (
            <FlipCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              backTitle={item.backTitle}
              backDescription={item.backDescription}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
