/* eslint-disable react/no-unescaped-entities */
// app/contact/page.js
"use client";

import { useState } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";

import { useInView } from "react-intersection-observer";
import axios from "axios";
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
    rootMargin: "-50px 0px",
  });

  //   interface FormData {
  //     name: string;
  //     email: string;
  //     phone: string;
  //     message: string;
  //   }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Handle form submission logic
    alert("Form submitted successfully!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  async function postMessage() {
    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_API_URL_TEST + "api/v1/intouch",
        formData
      );
      if (response.status === 200 || response.status === 201) alert("done");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <p className="block lg:hidden mt-8 pl-3 text-[12vmin] font-bold">
        Contact <span className="text-blue-500">Us</span>
      </p>
      <p className="block lg:hidden pl-4 text-sm font-normal">
        (We will be happy to hear from you)
      </p>
      <div ref={ref}>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="min-h-screen  p-4 flex items-center justify-center mt-[-8vmin] lg:mt-0 lg:pt-8 lg:pb-8">
            <div className="container mx-auto max-w-6xl bg-white rounded-lg shadow-md flex flex-col md:flex-row overflow-hidden">
              {/* Sidebar - Hidden on mobile */}

              <div className="hidden md:block md:w-1/2 p-10">
                <p className="text-blue-500 mb-2 font-semibold">Contact Us</p>
                <h1 className="text-5xl font-bold mb-6 text-black">
                  Get In Touch
                </h1>
                <p className="text-gray-700 mb-8 leading-9">
                  We'd love to hear from you! Whether you have a question,
                  suggestion, or need support, our team is here to help. Please
                  feel free to reach out to us through any of the following
                  channels
                </p>
                <div className="space-y-8 mt-8">
                  <div className="flex items-start">
                    <div className="w-12 h-12 flex items-center justify-center bg-blue-600 rounded-lg mr-4">
                      <FaMapMarkerAlt className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-black">Location:</h3>
                      <p className="text-gray-700 leading-8">
                        1st Floor,IIMT LBF Incubation Center,Greater
                        Noida,UP,201310
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 flex items-center justify-center bg-blue-600 rounded-lg mr-4">
                      <FaEnvelope className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-black">Email:</h3>
                      <p className="text-gray-700">codemap2024@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 flex items-center justify-center bg-blue-600 rounded-lg mr-4">
                      <FaPhone className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-black">Phone:</h3>
                      <p className="text-gray-700">+91 7585824862</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form - Always visible */}
              <div className="w-full md:w-1/2 bg-blue-400/40 p-2 pt-10 pb-10 lg:p-10 mt-1 lg:mt-0">
                <div className="mb-2 lg:mb-6">
                  <h2 className="text-xl font-semibold text-blue-700 ml-2 lg:mt-5">
                    Please Fill the details...
                  </h2>
                </div>
                <form onSubmit={handleSubmit} className="space-y-9">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name..."
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-4 border border-blue-100 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email..."
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-4 border border-blue-100 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Enter your phone..."
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-4 border border-blue-100 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                      required
                    />
                  </div>
                  <div>
                    <textarea
                      name="message"
                      placeholder="Enter your message..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full p-4 border border-blue-100 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                      required
                    ></textarea>
                  </div>
                  <div className="flex justify-center mt-6">
                    <button
                      type="submit"
                      onClick={() => {
                        postMessage();
                      }}
                      className="bg-blue-600 text-white py-3 px-12 rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
