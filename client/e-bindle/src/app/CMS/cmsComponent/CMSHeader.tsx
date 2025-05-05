"use client";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { checkIsLoggedIn } from "./utils/checkIsLoggedIn";
const CMSHeader = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const router = useRouter();
  useEffect(() => {
    async function fetchStatus() {
      const loggedIn = await checkIsLoggedIn();

      setIsLoggedIn(loggedIn);
    }
    fetchStatus();
  });

  const handleLogout = async () => {
    try {
      await axios.post(
        process.env.NEXT_PUBLIC_API_URL_TEST + "api/v1/admin/logout",
        {},
        { withCredentials: true }
      );

      setIsLoggedIn(false);
      router.push("/cms");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="w-[100vw] flex bg-blue-600 p-3 text-white">
        <div className="w-1/2 flex justify-start">
          <Link href="/">
            <Image
              src={"/images/EBindleBlue.jpg"}
              alt="E-Bindle Logo"
              width={32}
              height={32}
              priority
            />
          </Link>
        </div>
        <div className="w-1/2 flex justify-end mr-2 lg:mr-10">
          {isLoggedIn ? (
            <button onClick={handleLogout} className="bg-white p-2 text-black">
              Logout
            </button>
          ) : (
            <button className="bg-white text-black p-2">
              {" "}
              <Link href="/CMS">Login</Link>
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default CMSHeader;
