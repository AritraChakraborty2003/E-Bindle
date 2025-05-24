import React from "react";
import Header from "../Components/MainPage/Header";
import WebDevelopmentPage from "./webdevelopment";
import Footer from "../Components/MainPage/Footer";
import GetQoute from "../Components/MainPage/GetQoute";
import OurWorkflow from "../Components/MainPage/OurWrokflow";
import Testimonials from "../Components/MainPage/Testinomials/Testimonials";
import HeroGeneral from "../Components/General/HeroGeneral";
import Contact from "../Components/Contact/ContactPage";
const page = () => {
  return (
    <div>
      <HeroGeneral
        Title={"Web Development "}
        slogan={`Home /web development`}
        image="/images/wd11.jpg"
      />
      <Header />
      <WebDevelopmentPage />
      <OurWorkflow />
      <GetQoute />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default page;
