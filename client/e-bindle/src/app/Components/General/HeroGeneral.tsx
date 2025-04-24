import React from "react";

interface HeroGeneralProps {
  image: string;
  Title: string;
  slogan: string;
}
const HeroGeneral: React.FC<HeroGeneralProps> = (props) => {
  const { image, Title, slogan } = props;
  return (
    <div className="relative w-[100vw] h-[90vh] lg:h-[92vh]">
      {/* Background Image */}
      <div
        className=" absolute inset-0 bg-cover bg-right lg:bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      {/* Black Overlay with Proper Transparency */}
      <div className=" absolute inset-0 bg-black/62"></div>

      {/* Text Content (Ensures Readability) */}
      <div className=" absolute inset-0 left-3 mt-16  lg:mt-15 lg:left-10 flex flex-col items-start justify-center gap-y-4  text-white text-center">
        <div className="">
          <p className="leading-[20vmin]  text-[15vmin] lg:text-[10vmin] lg:leading-[8.75vmin]  lg:w-[47vw]  2xl:text-7xl font-medium  text-start ">
          {Title}
          </p>
        </div>
        <div>
          <p className="text-sm lg:text-lg mt-5 ml-2">{slogan}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroGeneral;
