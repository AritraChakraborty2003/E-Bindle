import React from "react";
import CmsLogin from "./cmsComponent/cmsLogin";
import Footer from "../Components/MainPage/Footer";
import CMSHeader from "./cmsComponent/CMSHeader";

const page = () => {
  return (
    <>
      <div>
        <CMSHeader />
        <CmsLogin />
        <Footer />
      </div>
    </>
  );
};

export default page;
