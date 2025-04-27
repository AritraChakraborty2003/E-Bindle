"use client";
import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import CMSHeader from "../CMS/cmsComponent/CMSHeader";

const BlogCMS = () => {
  const [activeTab, setActiveTab] = useState("add");
  const [blogs, setBlogs] = useState([]);
  const [formData, setFormData] = useState<BlogFormData>({
    title: "",
    description: "",
    contentFile: null,
    slug: "",
  });

  // Fetch existing blogs
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL_TEST}api/v1/blogs`
        );
        setBlogs(res.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, []);

  // DOCX file handling
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [
        ".docx",
      ],
    },
    multiple: false,
    onDrop: (acceptedFiles) => {
      setFormData((prev) => ({
        ...prev,
        contentFile: acceptedFiles[0],
        slug: generateSlug(prev.title),
      }));
    },
  });

  const generateSlug = (title: string): string =>
    title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

  interface BlogFormData {
    title: string;
    description: string;
    contentFile: File | null;
    slug: string;
  }

  interface Blog {
    _id: string;
    title: string;
    description: string;
    slug: string;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formPayload = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      if (value) formPayload.append(key, value as string | Blob);
    });

    try {
      const endpoint =
        activeTab === "add" ? "api/v1/blogs" : `api/v1/blogs/${formData.slug}`;

      const method: "post" | "put" | "delete" =
        activeTab === "delete"
          ? "delete"
          : activeTab === "add"
          ? "post"
          : "put";

      await axios({
        method,
        url: `${process.env.NEXT_PUBLIC_API_URL_TEST}${endpoint}`,
        data: method !== "delete" ? formPayload : undefined,
      });

      alert(`Blog ${activeTab}d successfully!`);
    } catch (error) {
      console.error("Error during blog operation:", error);
      alert("Operation failed. Please check console for details.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <CMSHeader />

      <div className="max-w-4xl mx-auto p-6">
        {/* Navigation Tabs */}
        <nav className="flex gap-4 mb-8 border-b border-gray-200">
          {["add", "update", "delete"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 font-medium ${
                activeTab === tab
                  ? "border-b-2 border-blue-500 text-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </nav>

        {/* Blog Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg shadow-sm p-6"
        >
          {activeTab !== "delete" ? (
            <>
              {/* Title Input */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Blog Title
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      title: e.target.value,
                      slug: generateSlug(e.target.value),
                    }))
                  }
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Description Input */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      description: e.target.value,
                    }))
                  }
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  rows={4}
                  required
                />
              </div>

              {/* DOCX File Upload */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Blog Content (DOCX)
                </label>
                <div
                  {...getRootProps()}
                  className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer
                    ${
                      isDragActive
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-300"
                    }`}
                >
                  <input {...getInputProps()} />
                  {formData.contentFile ? (
                    <p className="text-sm text-gray-600">
                      {formData.contentFile.name}
                    </p>
                  ) : (
                    <p className="text-sm text-gray-500">
                      {isDragActive
                        ? "Drop DOCX file here"
                        : "Drag & drop DOCX file or click to select"}
                    </p>
                  )}
                </div>
              </div>
            </>
          ) : (
            /* Delete Section */
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Enter Blog Slug to Delete
              </label>
              <input
                type="text"
                value={formData.slug}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    slug: e.target.value,
                  }))
                }
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full py-3 px-4 rounded-lg font-medium text-white transition-colors
              ${
                activeTab === "delete"
                  ? "bg-red-500 hover:bg-red-600"
                  : "bg-blue-500 hover:bg-blue-600"
              }`}
          >
            {activeTab === "add" && "Create Blog Post"}
            {activeTab === "update" && "Update Blog Post"}
            {activeTab === "delete" && "Delete Blog Post"}
          </button>
        </form>

        {/* Blog List */}
        <div className="mt-8 bg-white rounded-lg shadow-sm overflow-hidden">
          <h3 className="p-4 bg-gray-50 text-lg font-semibold">
            Existing Blog Posts
          </h3>
          <div className="divide-y divide-gray-200">
            {blogs.map((blog: Blog) => (
              <div key={blog._id} className="p-4 hover:bg-gray-50">
                <h4 className="font-medium">{blog.title}</h4>
                <p className="text-sm text-gray-500 mt-1">{blog.description}</p>
                <div className="mt-2 flex gap-2">
                  <button
                    onClick={() =>
                      setFormData({
                        ...(blog as Blog),
                        contentFile: null,
                        slug: blog.slug,
                      })
                    }
                    className="text-sm text-blue-500 hover:text-blue-600"
                  >
                    Edit
                  </button>
                  <span className="text-gray-300">|</span>
                  <button
                    onClick={() => {
                      setActiveTab("delete");
                      setFormData((prev) => ({ ...prev, slug: blog.slug }));
                    }}
                    className="text-sm text-red-500 hover:text-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCMS;
