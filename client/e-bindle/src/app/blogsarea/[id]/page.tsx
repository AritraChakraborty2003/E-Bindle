"use client";

import { useEffect, useState } from "react";
import Header from "../../Components/MainPage/Header";
import Footer from "../../Components/MainPage/Footer";
import Image from "next/image";

// Loading shimmer
const BlogShimmer = () => (
  <div className="flex flex-col md:flex-row w-full min-h-screen animate-pulse p-4 gap-4">
    <div className="flex-1 bg-gray-300 rounded-xl h-96" />
    <div className="hidden md:flex flex-col gap-4 w-1/3">
      <div className="bg-gray-300 rounded-md h-24" />
      <div className="bg-gray-300 rounded-md h-24" />
      <div className="bg-gray-300 rounded-md h-24" />
    </div>
  </div>
);

export default function BlogLayout() {
  interface Blog {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    author: string;
    authorImage: string;
  }

  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [mainBlog, setMainBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const dummyData: Blog[] = [
          {
            id: 1,
            title: "How JWT Authentication works?",
            description:
              "JWT tokens provide a secure authentication layer for login and signup systems using cookie and token management.",
            imageUrl:
              "https://source.unsplash.com/800x600/?technology,security",
            author: "Ravi Kumar",
            authorImage: "https://randomuser.me/api/portraits/men/32.jpg",
          },
          {
            id: 2,
            title: "How OAuth authentication system works",
            description:
              "OAuth 2.0 enables secure authorization with third-party services.",
            imageUrl: "/images/oauth.avif",
            author: "Aisha Sharma",
            authorImage: "https://randomuser.me/api/portraits/women/45.jpg",
          },
          {
            id: 3,
            title: "The Best SEO tips for your web app",
            description:
              "Learn top SEO practices to rank your web application on search engines.",
            imageUrl: "/images/seo.avif",
            author: "Mohit Verma",
            authorImage: "https://randomuser.me/api/portraits/men/10.jpg",
          },
        ];
        setBlogs(dummyData);
        setMainBlog(dummyData[0]);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return <BlogShimmer />;
  if (!mainBlog)
    return <p className="text-center p-8 text-gray-600">No blogs available.</p>;

  return (
    <>
      <Header />
      <div className="max-w-7xl mt-24 mx-auto px-4 md:px-8 py-16 flex flex-col lg:flex-row gap-10">
        {/* Main Blog Content */}
        <div className="flex-1">
          <div className="w-full h-[300px] md:h-[450px] relative rounded-xl overflow-hidden shadow">
            <Image
              src="/images/blog1.png"
              alt={mainBlog.title}
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover rounded-xl"
              priority
            />
          </div>

          <div className="mt-6 bg-white p-6 rounded-xl shadow">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              {mainBlog.title}
            </h1>
            <p className="text-md text-gray-600 mb-4">{mainBlog.description}</p>

            <div className="flex items-center gap-4 mb-6">
              <Image
                src={mainBlog.authorImage}
                alt={mainBlog.author}
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-sm text-gray-700 font-medium">
                By {mainBlog.author}
              </span>
            </div>

            <div className="text-gray-700 leading-relaxed space-y-4 text-base md:text-[1.05rem]">
              <p>
                JWT (JSON Web Token) is a compact, URL-safe token used to
                represent claims between two parties. It allows for secure
                transmission of information.
              </p>
              <p>
                It&lsquo;s commonly used for authentication. A JWT contains a
                header, payload, and signature, making it tamper-proof if
                properly signed.
              </p>
              <p>
                In web applications, JWTs are used as bearer tokens to authorize
                users once they&lsquo;re logged in—eliminating the need for
                server-side session storage.
              </p>
              <p>
                A major advantage is scalability: because JWTs are stateless,
                authentication servers don’t need to store session data.
              </p>
            </div>
          </div>
        </div>

        {/* More Reads */}
        <aside className="w-full lg:w-1/3">
          <h3 className="text-xl font-semibold mb-4">More Reads</h3>
          <div className="flex flex-col gap-4">
            {blogs.slice(1).map((blog) => (
              <div
                key={blog.id}
                className="bg-gray-50 p-4 rounded-lg shadow hover:shadow-md transition"
              >
                <div className="flex gap-4">
                  <Image
                    src={blog.imageUrl}
                    alt={blog.title}
                    width={80}
                    height={80}
                    className="rounded-md object-cover"
                  />
                  <div className="flex flex-col">
                    <h4 className="font-semibold text-gray-800">
                      {blog.title}
                    </h4>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {blog.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>
      <Footer />
    </>
  );
}
