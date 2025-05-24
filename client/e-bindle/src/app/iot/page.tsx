import React from "react";
import Header from "../Components/MainPage/Header";
import IotSolutionsPage from "./IotSolutionsPage";
import Footer from "../Components/MainPage/Footer";
import GetQoute from "../Components/MainPage/GetQoute";
import OurWorkflow from "../Components/MainPage/OurWrokflow";
import Testimonials from "../Components/MainPage/Testinomials/Testimonials";
import HeroGeneral from "../Components/General/HeroGeneral";
import Contact from "../Components/Contact/ContactPage";
import WhyChooseUs from "../Components/MainPage/WhyChooseUs";
const page = () => {
  return (
    <div>
      <HeroGeneral
        Title={"IOT Development "}
        slogan={`Home /IOT development`}
        image="/images/iot11.jpg"
      />
      <Header />
      <IotSolutionsPage />
      <WhyChooseUs />
      <OurWorkflow />
      <GetQoute />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default page;
