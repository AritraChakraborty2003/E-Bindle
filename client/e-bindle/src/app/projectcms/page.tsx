/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import Footer from "../Components/MainPage/Footer";
import CMSHeader from "../CMS/cmsComponent/CMSHeader";

const ProjectCMS = () => {
  const [activeTab, setActiveTab] = useState("add");
  const [formData, setFormData] = useState<{
    pname: string;
    title: string;
    descr: string;
    techstack: string;
    category: string;
    time: string;
    files: File[];
    link: string;
  }>({
    pname: "",
    title: "",
    descr: "",
    techstack: "",
    category: "",
    time: "",
    files: [],
    link: "",
  });

  const onDrop = (acceptedFiles: File[]) => {
    setFormData((prev) => ({
      ...prev,
      files: acceptedFiles,
    }));
  };

  const handleClick = (option: string, data: typeof formData) => {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL_TEST + "api/v1/projects";

    if (option === "add" || option === "update") {
      async function submitData() {
        try {
          const newFormData = new FormData();
          newFormData.append("pname", data.pname);
          newFormData.append("title", data.title);
          newFormData.append("descr", data.descr);
          newFormData.append("techstack", data.techstack); // can be a comma-separated string or JSON.stringify([...])
          newFormData.append("category", data.category);
          newFormData.append("time", data.time);
          newFormData.append("link", data.link);
          data.files.forEach((file) => {
            newFormData.append("files", file); // 👈 Use "files" for multi-image upload
          });

          const url =
            option === "add" ? baseUrl : `${baseUrl}/title/${data.title}`;

          await axios({
            method: option === "add" ? "POST" : "PATCH",
            url,
            data: newFormData,
            headers: { "Content-Type": "multipart/form-data" },
          });

          alert(option === "add" ? "Project Added" : "Project Updated");
        } catch (err: any) {
          alert(err.response?.data?.error || "Something went wrong");
        }
      }
      submitData();
    } else if (option === "delete") {
      async function deleteData() {
        try {
          const res = await axios.delete(`${baseUrl}/title/${data.title}`);
          if (res.status === 200) {
            alert("Project Deleted");
          } else {
            alert("Something went wrong");
          }
        } catch (err: any) {
          alert(err.response?.data?.error || "Something went wrong");
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
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              handleClick(activeTab, formData);
            }}
          >
            <input
              type="text"
              placeholder="Project Name"
              value={formData.pname}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  pname: e.target.value,
                }))
              }
              className="w-full p-3 border rounded-lg"
              required
            />
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
              disabled={activeTab === "update" || activeTab === "delete"}
            />
            {activeTab !== "delete" && (
              <>
                <input
                  type="text"
                  placeholder="Description"
                  value={formData.descr}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      descr: e.target.value,
                    }))
                  }
                  className="w-full p-3 border rounded-lg"
                />
                <input
                  type="text"
                  placeholder="Techstack (comma separated or JSON array)"
                  value={formData.techstack}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      techstack: e.target.value,
                    }))
                  }
                  className="w-full p-3 border rounded-lg"
                />
                <input
                  type="text"
                  placeholder="Category"
                  value={formData.category}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      category: e.target.value,
                    }))
                  }
                  className="w-full p-3 border rounded-lg"
                />
                <input
                  type="text"
                  placeholder="Time"
                  value={formData.time}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      time: e.target.value,
                    }))
                  }
                  className="w-full p-3 border rounded-lg"
                />
                <input
                  type="text"
                  placeholder="Link"
                  value={formData.link}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      link: e.target.value,
                    }))
                  }
                  className="w-full p-3 border rounded-lg"
                />
                {/* Multi-image upload */}
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
                ? "Create Project"
                : activeTab === "update"
                ? "Update Project"
                : "Delete Project"}
            </button>
          </form>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default ProjectCMS;
