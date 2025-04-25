"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import CMSHeader from "../cms/cmsComponent/CMSHeader";
import Footer from "../Components/MainPage/Footer";

const ServiceCMS = () => {
  const [activeTab, setActiveTab] = useState<"add" | "update" | "delete">(
    "add"
  );
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    subservice: "",
    files: [] as File[],
  });

  const onDrop = (acceptedFiles: File[]) => {
    setFormData((prev) => ({
      ...prev,
      files: acceptedFiles,
    }));
  };

  const handleClick = (option: string, data: typeof formData) => {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL_TEST + "api/v1/services";

    if (option === "add" || option === "update") {
      async function submitData() {
        try {
          const newFormData = new FormData();
          newFormData.append("title", data.title);
          if (data.description)
            newFormData.append("description", data.description);
          if (data.subservice)
            newFormData.append(
              "subservice",
              Array.isArray(data.subservice)
                ? JSON.stringify(data.subservice)
                : data.subservice
            );
          data.files.forEach((file) => {
            newFormData.append("files", file);
          });

          const url =
            option === "add" ? baseUrl : `${baseUrl}/title/${data.title}`;

          await axios({
            method: option === "add" ? "POST" : "PATCH",
            url,
            data: newFormData,
            headers: { "Content-Type": "multipart/form-data" },
          });

          alert(option === "add" ? "Service Added" : "Service Updated");
        } catch (err: unknown) {
          if (axios.isAxiosError(err) && err.response?.data?.error) {
            alert(err.response.data.error);
          } else {
            alert("Something went wrong");
          }
        }
      }
      submitData();
    } else if (option === "delete") {
      async function deleteData() {
        try {
          const res = await axios.delete(`${baseUrl}/title/${data.title}`);
          if (res.status === 200) {
            alert("Service Deleted");
          } else {
            alert("Something went wrong");
          }
        } catch (err: unknown) {
          if (axios.isAxiosError(err) && err.response?.data?.error) {
            alert(err.response.data.error);
          } else {
            alert("Something went wrong");
          }
        }
      }
      deleteData();
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: true,
  });

  return (
    <>
      <CMSHeader />
      <div className="min-h-screen bg-gray-50 p-8">
        <nav className="flex justify-center mb-12 space-x-4">
          {["add", "update", "delete"].map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab as "add" | "update" | "delete")}
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
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              handleClick(activeTab, formData);
            }}
          >
            <input
              type="text"
              placeholder="Title (unique)"
              value={formData.title}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  title: e.target.value,
                }))
              }
              className="w-full p-3 border rounded-lg"
              required
            />
            {activeTab !== "delete" && (
              <>
                <input
                  type="text"
                  placeholder="Description"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      description: e.target.value,
                    }))
                  }
                  className="w-full p-3 border rounded-lg"
                />
                <input
                  type="text"
                  placeholder="Subservices (comma separated or JSON array)"
                  value={formData.subservice}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      subservice: e.target.value,
                    }))
                  }
                  className="w-full p-3 border rounded-lg"
                />
                {/* files upload */}
                <div
                  {...getRootProps()}
                  className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
                    isDragActive
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-300"
                  }`}
                >
                  <input {...getInputProps()} />
                  {formData.files.length > 0 ? (
                    <p>{formData.files.map((f) => f.name).join(", ")}</p>
                  ) : (
                    <p>
                      {isDragActive
                        ? "Drop images here"
                        : "Drag images or click to upload (multiple allowed)"}
                    </p>
                  )}
                </div>
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
                ? "Create Service"
                : activeTab === "update"
                ? "Update Service"
                : "Delete Service"}
            </button>
          </form>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default ServiceCMS;
