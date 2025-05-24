import React from "react";
import Header from "../Components/MainPage/Header";
import CustomSaasPage from "./CustomSaasPage";
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
        Title={"Custom SaaS"}
        slogan={`Home /Custom SaaS development`}
        image="/images/saas11.jpeg"
      />
      <Header />
      <CustomSaasPage />
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
