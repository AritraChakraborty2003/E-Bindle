"use client";
import React from "react";
import Footer from "../Components/MainPage/Footer";
import DashboardCard from "../CMS/cmsComponent/DashboardCard";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { checkIsLoggedIn } from "../CMS/cmsComponent/utils/checkIsLoggedIn";
import CMSHeader from "../CMS/cmsComponent/CMSHeader";

const CmsDashboard = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  // const router = useRouter();
  // useEffect(() => {
  //   async function checkAuth() {
  //     const loggedIn = await checkIsLoggedIn();
  //     setIsLoggedIn(loggedIn);
  //     if (!loggedIn) {
  //       router.replace("/CMS");
  //     }
  //   }
  //   checkAuth();
  // }, [router]);

  // if (isLoggedIn === null) return <div>Loading...</div>;
  // if (!isLoggedIn) return null;
  const data = [
    {
      id: 1,
      image: "/images/projects.png",
      title: "Add Projects",
      link: "/projectcms",
    },
    {
      id: 2,
      image: "/images/admin.png",
      title: "Add Admin",
      link: "/admincms",
    },
    {
      id: 3,
      image: "/images/messageicon.webp",
      title: "message CMS",
      link: "/messagecms",
    },
    {
      id: 4,
      image: "/images/qoutes.webp",
      title: "Qoute CMS",
      link: "/qoutecms",
    },
    {
      id: 5,
      image: "/images/testimonial.png",
      title: "Testimonial CMS",
      link: "/testimonialcms",
    },
    {
      id: 5,
      image: "/images/intouch.png",
      title: "In Touch CMS",
      link: "/intouchcms",
    },
    {
      id: 3,
      image: "/images/about_icon.webp",
      title: "Add About",
      link: "/aboutcms",
    },
    {
      id: 4,
      image: "/images/service.png",
      title: "Add Services",
      link: "/servicecms",
    },
    {
      id: 5,
      image: "/images/phone.png",
      title: "Add Contact",
      link: "/contactcms",
    },
    {
      id: 6,
      image: "/images/blogs.png",
      title: "Add Blogs",
      link: "/blogscms",
    },
  ];
  return (
    <>
      <CMSHeader />
      <div className="container flex w-[100vw] lg:gap-[6vmin] justify-center flex-wrap mt-[15vmin] lg:mt-[10vmin] lg:ml-[10vmin] 2xl:ml-2 -ml-[6]">
        {data.map((item, index) => (
          <DashboardCard key={index} item={item} />
        ))}
      </div>

      <Footer />
    </>
  );
};

export default CmsDashboard;
