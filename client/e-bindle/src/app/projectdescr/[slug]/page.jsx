"use client";

import React, { useEffect, useState } from "react";
import Header from "../../Components/MainPage/Header";
import Footer from "../../Components/MainPage/Footer";
import Image from "next/image";
import GetQoute from "@/app/Components/MainPage/GetQoute";
import Testimonials from "@/app/Components/MainPage/Testinomials/Testimonials";
import ContactPage from "@/app/Components/Contact/ContactPage";
import axios from "axios";
import Link from "next/link";
const Page = ({ params }) => {
  // Unwrap params Promise as required by Next.js 15+
  const { slug } = React.use(params);
  const title = decodeURIComponent(slug).replaceAll("%20", " ");

  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL_TEST;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}api/v1/projects`);
        setData(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [API_BASE_URL]);

  useEffect(() => {
    if (data.length > 0 && title) {
      // Robust filter: case-insensitive, trimmed
      const filtered = data.filter(
        (item) =>
          item.title &&
          item.title.trim().toLowerCase() === title.trim().toLowerCase()
      );
      setFilterData(filtered);
    } else {
      setFilterData([]);
    }
  }, [data, title]);

  // Sidebar rendering helper for DRY code
  const renderSidebar = (item) => (
    <div className="flex flex-col w-full max-w-xs border-l-2 border-gray-300 pl-4 space-y-6">
      <div className="border-b pb-2">
        <h3 className="text-lg font-semibold text-gray-800">Tech Stack</h3>
        <p className="text-sm text-gray-600">{item.techstack || ""}</p>
      </div>
      <div className="border-b pb-2">
        <h3 className="text-lg font-semibold text-gray-800">Category</h3>
        <p className="text-sm text-gray-600">
          {item.category || "Web Development"}
        </p>
      </div>
      <div className="border-b pb-2">
        <h3 className="text-lg font-semibold text-gray-800">Time</h3>
        <p className="text-sm text-gray-600 mt-3">{item.time || "2-3 days"}</p>
      </div>
      <div className="border-b pb-2">
        <h3 className="text-lg font-semibold text-gray-800">Link</h3>
        <p className="text-sm text-gray-600 mt-3">
          {item.link ? (
            <a href={item.link}>
              <a className="text-blue-500 underline">{item.link}</a>
            </a>
          ) : (
            ""
          )}
        </p>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-800">Features</h3>
        <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mt-2">
          {item.features && Array.isArray(item.features) ? (
            item.features.map((feature, idx) => <li key={idx}>{feature}</li>)
          ) : (
            <>
              <li>SEO Friendly</li>
              <li>Responsive</li>
              <li>Maintenance and Support</li>
            </>
          )}
        </ul>
      </div>
    </div>
  );

  // Shimmer UI for loading
  if (loading) {
    return (
      <div>
        <Header />
        <main className="flex mt-10">
          <div className="bg-holder w-[100vw] lg:w-[70vw]">
            <div className="imageHolder w-full h-[80vmin] flex justify-center items-center mt-[8vmin]">
              <div className="w-full h-[80vmin] bg-gray-300 animate-pulse rounded"></div>
            </div>
            <div className="textHolder w-full p-3">
              <div className="bg-gray-300 animate-pulse h-8 mb-5 rounded"></div>
              <div className="bg-gray-300 animate-pulse h-4 mb-5 rounded"></div>
              <div className="bg-gray-300 animate-pulse h-4 mb-5 rounded"></div>
            </div>
          </div>
          <div className="hidden lg:block bg-holder lg:w-[30vw]">
            <div className="flex justify-center">
              <div className="w-[96%] h-[50vmin] mt-[30vmin] flex flex-col justify-center items-center ml-[-10vmin]">
                <div className="w-full max-w-xs border-l-2 border-gray-300 pl-4 space-y-6">
                  <div className="bg-gray-300 animate-pulse h-4 mb-2 rounded"></div>
                  <div className="bg-gray-300 animate-pulse h-4 mb-2 rounded"></div>
                  <div className="bg-gray-300 animate-pulse h-4 mb-2 rounded"></div>
                  <div className="bg-gray-300 animate-pulse h-4 mb-2 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Not found UI
  if (!loading && filterData.length === 0) {
    return (
      <div>
        <Header />
        <main className="flex mt-10 justify-center items-center h-[60vh]">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
            <p className="text-gray-600">
              We couldn't find a project matching "{title}".
            </p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Main content
  const project = filterData[0];

  return (
    <div>
      <Header />
      <main className="flex mt-10">
        <div className="bg-holder w-[100vw] lg:w-[70vw]">
          {/* Image Section */}
          <div className="imageHolder w-full h-[80vmin] flex justify-center items-center mt-[8vmin]">
            <Image
              src={API_BASE_URL + project.images[0] || "/images/hero-bg-1.jpg"}
              alt={project.title || "image"}
              height={800}
              width={800}
            />
          </div>
          {/* Text Section */}
          <div className="textHolder w-full p-1 pl-2 mt-[-6vmin]">
            <h1 className="font-extrabold text-[9vmin] lg:text-5xl">
              {project.title ? project.title.split(" ")[0] : ""}
              <span className="text-blue-500">
                &nbsp;&nbsp;
                {project.title ? project.title.split(" ")[1] || "" : ""}
              </span>
            </h1>
            {/* Mobile Sidebar */}
            <div className="block w-[100vw] lg:hidden mt-5">
              <div className="flex justify-start">{renderSidebar(project)}</div>
            </div>
            {/* Main Text */}
            <p className="mt-5 leading-[9vmin] lg:leading-[4.65vmin] text-star text-md text-gray-600">
              {project.descr || "No description available for this project."}
            </p>
          </div>
        </div>
        {/* Desktop Sidebar */}
        <div className="hidden lg:block bg-holder lg:w-[30vw]">
          <div className="flex justify-center">
            <div className="w-[96%] h-[50vmin] mt-[30vmin] flex flex-col justify-center items-center ml-[-10vmin]">
              {renderSidebar(project)}
            </div>
          </div>
        </div>
      </main>
      <GetQoute />
      <Testimonials />
      <ContactPage />
      <Footer />
    </div>
  );
};

export default Page;
