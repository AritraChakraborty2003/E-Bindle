"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Header from "../Components/MainPage/Header";
import Footer from "../Components/MainPage/Footer";

// Dynamically load ReactQuill
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, false] }],
    [{ font: [] }],
    [{ color: [] }, { background: [] }],
    ["bold", "italic", "underline", "strike"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "link",
  "image",
  "color",
  "align",
];

export default function BlogCMS() {
  const [activeTab, setActiveTab] = useState("write");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "First Blog Post",
      description: "A quick intro to our blog system.",
      image: "/images/bg1.avif",
    },
    {
      id: 2,
      title: "React Tips & Tricks",
      description: "Improve your React apps with these pro tips.",
      image: "/images/bg2.avif",
    },
  ]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  interface Blog {
    id: number;
    title: string;
    description: string;
    image: string;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const newBlog: Blog = {
      id: Date.now(),
      title,
      description,
      image: "https://via.placeholder.com/300x200?text=New+Blog",
    };

    setBlogs([...blogs, newBlog]);
    setTitle("");
    setDescription("");
    setContent("");
    alert("Blog post added (mock, no backend yet)!");
  };

  const handleDelete = (id: number): void => {
    setBlogs(blogs.filter((b: Blog) => b.id !== id));
  };

  const dashboardData = [
    { name: "Views", value: 2400 },
    { name: "Likes", value: 1398 },
    { name: "Comments", value: 980 },
    { name: "Shares", value: 390 },
  ];

  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto p-6 mt-24">
        {/* Navbar Switcher */}
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setActiveTab("write")}
            className={`px-4 py-2 rounded ${
              activeTab === "write" ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            Write Blog
          </button>
          <button
            onClick={() => setActiveTab("view")}
            className={`px-4 py-2 rounded ${
              activeTab === "view" ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            View / Remove Blogs
          </button>
          <button
            onClick={() => setActiveTab("dashboard")}
            className={`px-4 py-2 rounded ${
              activeTab === "dashboard"
                ? "bg-blue-600 text-white"
                : "bg-gray-200"
            }`}
          >
            Dashboard
          </button>
        </div>

        {/* Write Blog */}
        {activeTab === "write" && (
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded shadow space-y-4"
          >
            <div>
              <label className="block mb-1 font-medium">Blog Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border rounded p-2"
                placeholder="Enter blog title"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full border rounded p-2"
                placeholder="Enter short description"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Blog Content</label>
              <ReactQuill
                theme="snow"
                value={content}
                onChange={setContent}
                modules={modules}
                formats={formats}
                placeholder="Write your beautiful blog here..."
              />
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Create Blog Post
            </button>
          </form>
        )}

        {/* View / Remove Blogs */}
        {activeTab === "view" && (
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-xl font-bold mb-4">Existing Blog Posts</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {blogs.map((blog) => (
                <div
                  key={blog.id}
                  className="border rounded shadow-sm p-2 relative bg-gray-50"
                >
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-40 object-cover rounded mb-2"
                  />
                  <h3 className="font-bold text-lg mb-1">{blog.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {blog.description}
                  </p>
                  <button
                    onClick={() => handleDelete(blog.id)}
                    className="absolute top-2 right-2 text-red-600 hover:text-red-800 text-lg"
                  >
                    ✖
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Dashboard */}
        {activeTab === "dashboard" && (
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-xl font-bold mb-4">
              User Engagement Dashboard
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={dashboardData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#3182ce" />
              </BarChart>
            </ResponsiveContainer>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="p-4 bg-blue-100 rounded">Total Views: 2400</div>
              <div className="p-4 bg-green-100 rounded">Total Likes: 1398</div>
              <div className="p-4 bg-yellow-100 rounded">
                Total Comments: 980
              </div>
              <div className="p-4 bg-purple-100 rounded">Total Shares: 390</div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
