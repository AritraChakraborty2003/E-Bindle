"use client";
import { useEffect, useState } from "react";
import Header from "../../Components/MainPage/Header";
import Footer from "../../Components/MainPage/Footer";
import Image from "next/image";

// Shimmer Loading Skeleton
const BlogShimmer = () => {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen animate-pulse p-4 gap-4">
      {/* Left shimmer */}
      <div className="flex-1 flex flex-col bg-gray-300 rounded-xl h-96 md:h-auto" />

      {/* Right shimmer */}
      <div className="hidden md:flex flex-col gap-4 w-1/3">
        <div className="bg-gray-300 rounded-md h-24" />
        <div className="bg-gray-300 rounded-md h-24" />
        <div className="bg-gray-300 rounded-md h-24" />
      </div>
    </div>
  );
};

export default function BlogLayout() {
  interface Blog {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
  }

  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [mainBlog, setMainBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // ===== API CALL - Uncomment when ready to use real API =====
        /*
        const res = await fetch(`${process.env.NEXT_APP_API_URL_TEST}/blogs`);
        const data = await res.json();
        if (data && data.length > 0) {
          setBlogs(data);
          setMainBlog(data[0]);
        }
        */

        // ===== HARDCODED BLOGS FOR NOW =====
        const dummyData = [
          {
            id: 1,
            title: "How JWT Authentication works ?",
            description:
              "JWT tokens provide a secured authentication layer for login snd signup system with proper cookie and token managment ",

            imageUrl: "https://source.unsplash.com/800x600/?saree,handmade",
          },
          {
            id: 2,
            title: "How OAuth authentication system works",
            description: "OAuth authentication system ",
            imageUrl: "https://source.unsplash.com/800x600/?fashion,india",
          },
          {
            id: 3,
            title: "The Best SEO tips for your web app",
            description:
              "Learn how to preserve the beauty and fabric of your favorite sarees with these simple care tips.",
            imageUrl: "https://source.unsplash.com/800x600/?fabric,clothing",
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

  if (!mainBlog) {
    return (
      <>
        <div className="flex flex-col md:flex-row w-full min-h-screen p-4 gap-4">
          {/* Placeholder when no blogs */}
          <div className="flex-1 flex flex-col justify-center items-center bg-gray-100 rounded-xl p-8">
            <h1 className="text-3xl font-bold mb-4">No Blogs Found</h1>
            <p className="text-gray-500 text-center">
              Please check back later. New content will be available soon!
            </p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row w-full pt-30 pb-20 lg:min-h-screen pl-1 lg:p-4 gap-2 lg:mt-[15vmin]">
        {/* Left Side - Main Blog */}
        <div className="flex-1 flex flex-col justify-end bg-cover bg-center rounded-xl lg:p-8 text-white">
          <Image src={"/images/JWT.jpeg"} alt="JWT" height={700} width={700} />
          <div className="bg-blue-600 bg-opacity-50 w-[99vw] lg:w-[90%] p-6 rounded-lg mt-5">
            <h1 className="text-lg lg:text-4xl font-bold mb-4">
              {mainBlog.title}
            </h1>
            <p className="text-sm lg:text-lg">{mainBlog.description}</p>
          </div>
          <div className="text-black mt-6 pl-2 text-md text-start lg:leading-[4.45vmin]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste odit
            dicta id pariatur sapiente, voluptatem reprehenderit! Nostrum,
            quibusdam illum. Iusto, corporis molestiae impedit amet in non
            blanditiis hic illo nulla. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Quis similique facilis sint itaque tempore. Quod
            animi nostrum beatae iusto dolore possimus amet cumque, officia quo
            labore, asperiores, minus quam commodi. lorem Lorem ipsum, dolor sit
            amet consectetur adipisicing elit. Vero nesciunt nam temporibus
            aperiam ut voluptatibus, totam excepturi incidunt sed molestiae,
            atque laudantium, error voluptas inventore non aliquam porro debitis
            cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Iste perspiciatis repellat expedita magnam quam, voluptas, dolorum
            omnis, nam a ex eum dicta doloribus pariatur. Odio esse maxime non
            velit assumenda! Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. A, perspiciatis ea nobis corporis doloremque ad delectus velit
            numquam libero qui illum error fuga voluptatum sit magni
            reprehenderit et dicta consequuntur. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Numquam dicta nulla iure, hic, rem
            fuga cum harum quibusdam provident quia dignissimos quasi porro
            pariatur incidunt adipisci natus excepturi! Mollitia, debitis.
          </div>
        </div>

        {/* Right Side - More Reads */}
        <div className="hidden md:flex flex-col gap-4 w-1/3 mt-[20vmin] ml-[-6vmin">
          <h2 className="text-2xl font-semibold mb-2">More Reads</h2>
          {blogs.slice(1).map((blog) => (
            <div
              key={blog.id}
              className="bg-gray-100 p-4 rounded-md shadow hover:shadow-lg transition"
            >
              <h3 className="text-lg font-bold">{blog.title}</h3>
              <p className="text-sm text-gray-600 line-clamp-2">
                {blog.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
