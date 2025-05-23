"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FiSearch } from "react-icons/fi"; // Search icon

const categories = ["All", "Tech", "Business", "SEO", "Consulting"];

interface Blog {
  id: number;
  title: string;
  description: string;
  author: string;
  authorImage: string;
  imageUrl: string;
  category: string;
}

const dummyBlogs: Blog[] = [
  {
    id: 1,
    title: "Understanding JWT Authentication",
    description: "A deep dive into secure auth practices using JWT.",
    author: "Ravi Kumar",
    authorImage: "https://randomuser.me/api/portraits/men/32.jpg",
    imageUrl: "/images/b1.jpg",
    category: "Tech",
  },
  {
    id: 2,
    title: "SEO Audit Checklist 2025",
    description: "Steps to ensure your site is SEO-optimized.",
    author: "Aisha Sharma",
    authorImage: "https://randomuser.me/api/portraits/women/44.jpg",
    imageUrl: "/images/b2.avif",
    category: "SEO",
  },
  {
    id: 3,
    title: "Building Scalable Business Models",
    description: "Fundamentals of creating sustainable revenue.",
    author: "Mohit Verma",
    authorImage: "https://randomuser.me/api/portraits/men/10.jpg",
    imageUrl: "/images/b3.avif",
    category: "Business",
  },
  {
    id: 4,
    title: "Consulting Strategies for Startups",
    description: "How consultants shape early-stage success.",
    author: "Neha Kapoor",
    authorImage: "https://randomuser.me/api/portraits/women/35.jpg",
    imageUrl: "/images/b4.avif",
    category: "Consulting",
  },
];

export default function KnowledgeCenter() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const results = dummyBlogs.filter(
      (blog) =>
        (selectedCategory === "All" || blog.category === selectedCategory) &&
        blog.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredBlogs(results);
  }, [selectedCategory, searchQuery]);

  return (
    <section className="px-4 mt-20 md:px-10 py-10 bg-gray-50 min-h-screen mt-20">
      <h1 className="text-4xl font-bold text-center mb-6 mt-10">
        Knowledge Center
      </h1>

      {/* Search Bar + Tabs */}
      <div className="flex flex-col items-center gap-6 mb-8">
        {/* Search Field Styled Like Google */}
        <div className="w-full md:w-2/3 bg-white border border-gray-300 rounded-full px-4 py-2 shadow flex items-center gap-3">
          <FiSearch className="text-gray-500 text-xl" />
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 outline-none text-gray-700 bg-transparent"
          />
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white"
                  : "bg-white border border-gray-300 text-gray-700"
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Cards */}
      {filteredBlogs.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">
          No matching articles found.
        </p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBlogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white p-4 rounded-xl shadow hover:shadow-md transition"
            >
              <Image
                src={blog.imageUrl}
                alt={blog.title}
                width={500}
                height={300}
                className="w-full h-40 object-cover rounded-lg"
              />
              <h3 className="text-xl font-semibold text-gray-800 mt-4">
                {blog.title}
              </h3>
              <p className="text-sm text-gray-600 mt-1">{blog.description}</p>
              <div className="flex items-center gap-3 mt-4">
                <Image
                  src={blog.authorImage}
                  alt={blog.author}
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <span className="text-sm text-gray-700">{blog.author}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
