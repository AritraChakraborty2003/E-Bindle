"use client";

import { FaLightbulb, FaPencilRuler, FaCode, FaRocket } from "react-icons/fa";

const workflow = [
  {
    icon: <FaLightbulb className="text-white text-2xl" />,
    title: "1. Discovery",
    desc:
      "We begin by understanding your goals, challenges, and vision to shape a solid strategy.",
    color: "from-yellow-400 to-yellow-500",
  },
  {
    icon: <FaPencilRuler className="text-white text-2xl" />,
    title: "2. Planning & Design",
    desc:
      "Our team creates wireframes and prototypes aligned with your brand and goals.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: <FaCode className="text-white text-2xl" />,
    title: "3. Development",
    desc:
      "Using modern tech stacks, we build robust, scalable, and secure solutions.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: <FaRocket className="text-white text-2xl" />,
    title: "4. Launch & Support",
    desc:
      "We deploy, monitor, and support your product with ongoing improvements.",
    color: "from-green-500 to-green-600",
  },
];

export default function OurWorkflow() {
  return (
    <section className="bg-white py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Our Workflow
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          From idea to execution, our process ensures clarity, collaboration,
          and results.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {workflow.map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all"
            >
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br ${step.color} mb-4 mx-auto`}
              >
                {step.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
