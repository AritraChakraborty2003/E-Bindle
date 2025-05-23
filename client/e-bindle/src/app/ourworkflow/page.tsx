import React from "react";
import Footer from "../Components/MainPage/Footer";
import Projects from "../Components/MainPage/Projects/Projects";
import GetQoute from "../Components/MainPage/GetQoute";

import Contact from "../Components/Contact/ContactPage";
import WhyChooseUs from "../Components/MainPage/WhyChooseUs";
import OurWorkflow from "../Components/MainPage/OurWrokflow";
import Header from "../Components/MainPage/Header";
import HeroGeneral from "../Components/General/HeroGeneral";
const page = () => {
  return (
    <div>
      <Header />
      <HeroGeneral
        Title={"Our Work Flow"}
        slogan={`Home /Work Flow`}
        image="/images/bg2.png"
      />
      <OurWorkflow />
      <WhyChooseUs />
      <GetQoute />
      <Projects title="Our Projects" />

      <Contact />
      <Footer />
    </div>
  );
};

export default page;
