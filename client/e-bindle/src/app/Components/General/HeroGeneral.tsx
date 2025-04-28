import React from "react";

interface HeroGeneralProps {
  image: string;
  Title: string;
  slogan: string;
}
const HeroGeneral: React.FC<HeroGeneralProps> = (props) => {
  const { image, Title, slogan } = props;
  return (
    <div className="relative w-[100vw] h-[100vh] lg:h-[99.96vh] 2xl:h-[100vh]">
      {/* Background Image */}
      <div
        className=" absolute inset-0 bg-cover bg-right lg:bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      {/* Black Overlay with Proper Transparency */}
      <div className=" absolute inset-0 bg-black/62"></div>

      {/* Text Content (Ensures Readability) */}
      <div className=" absolute inset-0 left-3 mt-16  border-white    lg:mt-15 lg:left-10 flex flex-col items-start justify-center gap-y-4  text-white text-center">
        <div className="w-[100vw]">
          <p className="leading-[24vmin]  text-[12vmin] lg:text-[12vmin] 2xl:text-[13.75vmin]  lg:leading-[18vmin] 2xl:leading-[16vmin]  lg:w-[47vw]  2xl:text-7xl font-bold  text-start">
            {Title}
          </p>
        </div>
        <div>
          <p className="text-sm lg:text-lg 2xl:mt-2 mt-6 ml-2">{slogan}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroGeneral;
