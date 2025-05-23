"use client";

import LeftAnimation from "@/app/Animations/LeftAnimation";
import RightAnimation from "@/app/Animations/RightAnimation";
import Image from "next/image";
import { FaRocket, FaShieldAlt, FaUsers, FaChartLine } from "react-icons/fa";

const features = [
  {
    icon: <FaRocket className="text-2xl text-white" />,
    title: "Innovative Approach",
    description:
      "Creative strategies and modern tech to solve real-world business problems.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: <FaShieldAlt className="text-2xl text-white" />,
    title: "Robust Security",
    description:
      "Enterprise-grade security built into all our solutions to protect your data.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: <FaUsers className="text-2xl text-white" />,
    title: "Client-Centric Focus",
    description:
      "Long-term relationships and tailored solutions that scale with your growth.",
    color: "from-green-500 to-green-600",
  },
  {
    icon: <FaChartLine className="text-2xl text-white" />,
    title: "Proven Results",
    description:
      "Solutions that deliver measurable outcomes and real business value.",
    color: "from-pink-500 to-pink-600",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Image - Smaller & Centered */}
        <LeftAnimation>
          <div className="flex justify-center">
            <div className="w-[300px] sm:w-[420px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/why-choose-us.png"
                alt="Why Choose Us"
                width={320}
                height={320}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </LeftAnimation>

        {/* Right Content */}
        <RightAnimation>
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-gray-600 mb-10 leading-relaxed max-w-xl">
              At E-Bindle, we blend technology, creativity, and strategic
              thinking to empower your digital success.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl shadow hover:shadow-lg transition bg-white"
                >
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-br ${item.color}`}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-md font-semibold text-gray-800">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RightAnimation>
      </div>
    </section>
  );
}
