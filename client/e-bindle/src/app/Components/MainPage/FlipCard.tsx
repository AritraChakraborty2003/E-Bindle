"use client";
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
          transition: "transform 0.6s cubic-bezier(0.68,-0.55,0.27,1.55)",
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
          className="flip-card-back back-content"
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
            justifyContent: "center",
          }}
        >
          <h2 className="mt-1 text-xl font-extrabold">{backTitle}</h2>
          <p className="mt-3 text-center text-[2.15vmin]">{backDescription}</p>
        </div>
      </div>
      {/* CSS for 3D pop-out effect */}
      <style>{`
        .flip-card {
          perspective: 200vmin;
        }
        .flip-card-inner {
          transition: transform 0.6s cubic-bezier(0.68,-0.55,0.27,1.55);
          transform-style: preserve-3d;
        }
        .flip-card:hover .flip-card-inner {
          transform: rotateX(180deg);
        }
        .flip-card-back .back-content {
          transition: transform 0.6s cubic-bezier(0.68,-0.55,0.27,1.55), filter 0.3s;
          will-change: transform;
        }
        .flip-card:hover .flip-card-back {
          /* Pop out effect when flipped */
          filter: drop-shadow(0 8px 24px rgba(43,127,255,0.3));
        }
        .flip-card:hover .flip-card-back {
          /* Make the back content appear to come forward */
          transform: rotateX(180deg) translateZ(40px) scale(1.05);
        }
      `}</style>
    </div>
  );
};

export default RotatingBox;
