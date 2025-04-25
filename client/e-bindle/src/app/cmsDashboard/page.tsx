"use client";
import React from "react";
import Footer from "../Components/MainPage/Footer";
import DashboardCard from "../CMS/cmsComponent/DashboardCard";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { checkIsLoggedIn } from "../CMS/cmsComponent/utils/checkIsLoggedIn";
import CMSHeader from "../CMS/cmsComponent/CMSHeader";

const CmsDashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const router = useRouter();
  useEffect(() => {
    async function checkAuth() {
      const loggedIn = await checkIsLoggedIn();
      setIsLoggedIn(loggedIn);
      if (!loggedIn) {
        router.replace("/CMS");
      }
    }
    checkAuth();
  }, [router]);

  if (isLoggedIn === null) return <div>Loading...</div>;
  if (!isLoggedIn) return null;
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
      link: "/AdminCMS",
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
      link: "/ServicesCMS",
    },
    {
      id: 5,
      image: "/images/phone.png",
      title: "Add Contact",
      link: "/ContactCMS",
    },
  ];
  return (
    <>
      <CMSHeader />
      <div className="container flex w-[100vw] lg:gap-[6vmin] justify-center flex-wrap mt-[15vmin] lg:mt-[10vmin] lg:ml-[10vmin] -ml-[6]">
        {data.map((item, index) => (
          <DashboardCard key={index} item={item} />
        ))}
      </div>

      <Footer />
    </>
  );
};

export default CmsDashboard;
