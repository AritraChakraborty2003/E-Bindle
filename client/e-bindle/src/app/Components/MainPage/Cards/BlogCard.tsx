import Image from "next/image";
import React from "react";

const BlogCard = () => {
  return (
    <div className=" pb-5 pt-10 w-[90vw] lg:w-[27vw] border-gray-300 border-[1px] flex flex-col justify-center items-center">
      <div className="imageArea w-full h-[60%] flex justify-center items-center">
        <Image src="/images/JWT.jpeg" alt="JWT icon" height={330} width={330} />
      </div>
      <div className="w-full mt-3">
        <div className="topicBadge w-[60%] p-2 mt-1 bg-blue-500 text-white rounded-md ml-[-1vmin]">
          Web Development
        </div>
      </div>

      <div className="textArea">
        <h1 className="text-2xl mt-3 font-bold pl-2">
          How JWT Authentication works ?
        </h1>
        <div className="descr pl-2 mt-3">
          JWT tokens provide a secured authentication layer for login snd signup
          system ...
        </div>
        <p className="mt-3 text-gray-500  pl-2">read more...</p>
      </div>
    </div>
  );
};

export default BlogCard;
