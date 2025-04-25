"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import Footer from "../Components/MainPage/Footer";
import CMSHeader from "../CMS/cmsComponent/CMSHeader";

const TestimonialCMS = () => {
  const [activeTab, setActiveTab] = useState("add");
  const [formData, setFormData] = useState<{
    _id?: string;
    name: string;
    rating: number;
    role: string;
    avatar: File | string;
    quote: string;
  }>({
    name: "",
    rating: 5,
    role: "",
    avatar: "",
    quote: "",
  });

  const onDrop = (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    setFormData((prev) => ({
      ...prev,
      avatar: file,
    }));
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const baseUrl =
      process.env.NEXT_PUBLIC_API_URL_TEST + "api/v1/testimonials";
    const formPayload = new FormData();

    // Common fields
    formPayload.append("name", formData.name);
    formPayload.append("role", formData.role);
    formPayload.append("quote", formData.quote);
    formPayload.append("rating", formData.rating.toString());

    // Handle avatar file
    if (formData.avatar && typeof formData.avatar !== "string") {
      formPayload.append("avatar", formData.avatar);
    }

    try {
      let response;
      switch (activeTab) {
        case "add":
          response = await axios.post(baseUrl, formPayload, {
            headers: { "Content-Type": "multipart/form-data" },
          });
          break;

        case "update":
          if (!formData._id) {
            alert("Please enter Testimonial ID");
            return;
          }
          response = await axios.patch(
            `${baseUrl}/${formData._id}`,
            formPayload,
            {
              headers: { "Content-Type": "multipart/form-data" },
            }
          );
          break;

        case "delete":
          if (!formData._id) {
            alert("Please enter Testimonial ID");
            return;
          }
          response = await axios.delete(`${baseUrl}/${formData._id}`);
          break;
      }

      if (response?.status === 200 || response?.status === 201) {
        alert(`${activeTab.toUpperCase()} operation successful!`);
        setFormData({
          name: "",
          rating: 5,
          role: "",
          avatar: "",
          quote: "",
          _id: "",
        });
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        alert(error.response?.data?.error || "Operation failed");
      } else {
        alert("An unexpected error occurred");
      }
    }
  };

  return (
    <>
      <CMSHeader />
      <div className="min-h-screen bg-gray-50 p-8">
        <nav className="flex justify-center mb-12 space-x-4">
          {["add", "update", "delete"].map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full font-medium capitalize ${
                activeTab === tab
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-600 hover:bg-blue-50"
              }`}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {tab}
            </motion.button>
          ))}
        </nav>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            {(activeTab === "update" || activeTab === "delete") && (
              <input
                type="text"
                placeholder="Testimonial ID"
                value={formData._id || ""}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, _id: e.target.value }))
                }
                className="w-full p-3 border rounded-lg"
                required
              />
            )}

            {activeTab !== "delete" && (
              <>
                <div
                  {...getRootProps()}
                  className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
                    isDragActive
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-300"
                  }`}
                >
                  <input {...getInputProps()} />
                  {formData.avatar ? (
                    typeof formData.avatar === "string" ? (
                      <img
                        src={formData.avatar}
                        alt="Avatar preview"
                        className="mx-auto h-32 w-32 object-cover rounded-full"
                      />
                    ) : (
                      <p>{formData.avatar.name}</p>
                    )
                  ) : (
                    <p>
                      {isDragActive
                        ? "Drop avatar here"
                        : "Drag avatar or click to upload"}
                    </p>
                  )}
                </div>

                <input
                  type="text"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, name: e.target.value }))
                  }
                  className="w-full p-3 border rounded-lg"
                  required
                />

                <input
                  type="number"
                  placeholder="Rating (1-5)"
                  min="1"
                  max="5"
                  value={formData.rating}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      rating: Math.max(
                        1,
                        Math.min(5, parseInt(e.target.value))
                      ),
                    }))
                  }
                  className="w-full p-3 border rounded-lg"
                  required
                />

                <input
                  type="text"
                  placeholder="Role/Position"
                  value={formData.role}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, role: e.target.value }))
                  }
                  className="w-full p-3 border rounded-lg"
                  required
                />

                <textarea
                  placeholder="Testimonial Quote"
                  value={formData.quote}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, quote: e.target.value }))
                  }
                  className="w-full p-3 border rounded-lg"
                  rows={4}
                  required
                />
              </>
            )}

            <button
              type="submit"
              className={`w-full py-3 rounded-lg text-white font-medium transition-colors ${
                activeTab === "delete"
                  ? "bg-red-500 hover:bg-red-600"
                  : "bg-blue-500 hover:bg-blue-600"
              }`}
            >
              {activeTab === "add"
                ? "Create Testimonial"
                : activeTab === "update"
                ? "Update Testimonial"
                : "Delete Testimonial"}
            </button>
          </form>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default TestimonialCMS;
