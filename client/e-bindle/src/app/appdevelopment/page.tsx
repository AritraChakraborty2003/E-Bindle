import React from "react";
import Header from "../Components/MainPage/Header";
import Footer from "../Components/MainPage/Footer";
import GetQoute from "../Components/MainPage/GetQoute";
import OurWorkflow from "../Components/MainPage/OurWrokflow";
import Testimonials from "../Components/MainPage/Testinomials/Testimonials";
import HeroGeneral from "../Components/General/HeroGeneral";
import Contact from "../Components/Contact/ContactPage";
import AppDevelopmentPage from "./AppDevelopment";
import WhyChooseUs from "../Components/MainPage/WhyChooseUs";
const page = () => {
  return (
    <div>
      <HeroGeneral
        Title={"App Development "}
        slogan={`Home /app development`}
        image="/images/app11.webp"
      />
      <Header />
      <AppDevelopmentPage />
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
