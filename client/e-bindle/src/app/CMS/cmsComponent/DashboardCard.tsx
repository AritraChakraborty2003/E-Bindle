"use client";
import React from "react";
import Image from "next/image";

interface DashboardCardProps {
  item: {
    id: number;
    image: string;
    title: string;
    link: string;
  };
}

const DashboardCard: React.FC<DashboardCardProps> = (props) => {
  const { item } = props;
  return (
    <>
      <div className="flex items-center justify-center bg-gradient-to-r lg:ml-5 p-3 ">
        <div className="bg-blue-100 rounded-xl shadow-lg p-8 w-[85vw] lg:w-[20vw] lg:h-[40vmin] 2xl:pb-10 border-2 border-gray-300 transition-transform transform hover:scale-105 duration-400 flex flex-col items-center">
          <h1 className="text-xl font-bold text-center text-gray-800 mb-6">
            {item.title}
          </h1>
          <Image
            src={item.image}
            alt="Project Image"
            width={150}
            height={150}
            className="object-cover mb-5"
          />
          <button
            onClick={() => (window.location.href = item.link)}
            type="button"
            className="w-full bg-indigo-600 text-white py-2 rounded-md text-lg font-semibold hover:bg-green-700 transition-colors duration-300"
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
};

export default DashboardCard;
