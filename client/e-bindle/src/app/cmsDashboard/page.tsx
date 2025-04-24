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
      image: "/images/addproject.jpg",
      title: "Add Project",
      link: "",
    },
    {
      id: 2,
      image: "/images/addadmin.jpg",
      title: "Add Admin",
      link: "",
    },
    {
      id: 3,
      image: "/images/addadmin.jpg",
      title: "Add 1234",
      link: "",
    },
    {
      id: 4,
      image: "/images/addadmin.jpg",
      title: "Add xyz",
      link: "",
    },
    {
      id: 5,
      image: "/images/addadmin.jpg",
      title: "Add something",
      link: "",
    },
  ];
  return (
    <>
      <CMSHeader />
      <div className="container flex gap-[4vmin] justify-center flex-wrap mt-[25vmin] lg:mt-[10vmin]">
        {data.map((item, index) => (
          <DashboardCard key={index} item={item} />
        ))}
      </div>

      <Footer />
    </>
  );
};

export default CmsDashboard;
