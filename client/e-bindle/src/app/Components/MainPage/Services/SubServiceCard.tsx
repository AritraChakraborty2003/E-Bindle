import Image from "next/image";
import React from "react";

const SubServiceCard = () => {
  return (
    <>
      <p className="text-6xl font-bold pl-2">
        Core <span className="text-blue-500"> Services</span>
      </p>
      <div className="flex w-[100vw] flex-wrap gap-y-5 justify-center items-center mt-8">
        <div className=" w-[90vw] lg:w-[25vw] ml-6 border-gray-300 border-1 pt-10 pb-10  flex flex-col justify-center items-center">
          <div className="ImageHolder w-full flex flex-col justify-center items-center mt-5  ">
            <Image src="/images/web/b.png" alt="API" height={100} width={100} />
          </div>
          <p className="font-bold text-2xl mt-5 text-blue-500">
            CMS Development
          </p>
        </div>
        <div className=" w-[90vw] lg:w-[25vw] ml-6 border-gray-300 border-1 pt-10 pb-10  flex flex-col justify-center items-center">
          <div className="ImageHolder w-full flex flex-col justify-center items-center mt-5  ">
            <Image src="/images/web/d.png" alt="API" height={100} width={100} />
          </div>
          <p className="font-bold text-2xl mt-5 text-blue-500">Web Tools</p>
        </div>
        <div className=" w-[90vw] lg:w-[25vw] ml-6 border-gray-300 border-1 pt-10 pb-10  flex flex-col justify-center items-center">
          <div className="ImageHolder w-full flex flex-col justify-center items-center mt-5  ">
            <Image src="/images/web/e.png" alt="API" height={100} width={100} />
          </div>
          <p className="font-bold text-2xl mt-5 text-blue-500">
            Ecommerce Development
          </p>
        </div>
        <div className=" w-[90vw] lg:w-[25vw] ml-6 border-gray-300 border-1 pt-10 pb-10  flex flex-col justify-center items-center">
          <div className="ImageHolder w-full flex flex-col justify-center items-center mt-5  ">
            <Image
              src="/images/web/api.png"
              alt="API"
              height={100}
              width={100}
            />
          </div>
          <p className="font-bold text-2xl mt-5 text-blue-500">
            API Integration
          </p>
        </div>
      </div>
    </>
  );
};

export default SubServiceCard;
