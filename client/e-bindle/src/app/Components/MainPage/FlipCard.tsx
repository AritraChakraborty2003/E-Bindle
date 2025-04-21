import React from "react";
interface BoxDataProps {
  icon: string;
  title: string;
  description: string;
  backTitle: string;
  backDescription: string;
}
const RotatingBox: React.FC<BoxDataProps> = (props) => {
  const { icon, title, description, backTitle, backDescription } = props;
  return (
    <div
      className="flip-card lg:h-[32vmin] lg:w-[24vw]"
      style={{
        perspective: "200vmin",
      }}
    >
      <div
        className="flip-card-inner group"
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          transition: "transform 0.6s",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Front Side */}
        <div
          className="flip-card-front"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            backgroundColor: "white",
            borderRadius: "10px",
            padding: "20px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <a className="text-blue-500 text-6xl mt-3 font-normal">
            <i className={icon}></i>
          </a>
          <p className="mt-2 text-[2.35vmin] font-normal text-blue-500 font-sans">
            {title}
          </p>
          <p className="text-[1.85vmin] font-normal text-gray-600 mt-2 text-center w-[88%]">
            {description}
          </p>
        </div>
        {/* Back Side */}
        <div
          className="flip-card-back"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",

            backfaceVisibility: "hidden",
            backgroundColor: "#2b7fff",
            color: "white",
            borderRadius: "10px",
            padding: "20px",
            transform: "rotateX(180deg)",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h2 className="mt-1 text-xl font-extrabold">{backTitle}</h2>
          <p className="mt-3 text-center text-[2.15vmin]">{backDescription}</p>
        </div>
      </div>
      {/* CSS for hover effect */}
      <style>{`
        .flip-card:hover .flip-card-inner {
          transform: rotateX(180deg);
        }
      `}</style>
    </div>
  );
};

export default RotatingBox;
