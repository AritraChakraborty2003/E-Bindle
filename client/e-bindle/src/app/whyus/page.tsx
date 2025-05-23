import React from "react";
import Footer from "../Components/MainPage/Footer";
import WhyChooseUs from "../Components/MainPage/WhyChooseUs";
import OurWorkflow from "../Components/MainPage/OurWrokflow";
import Services from "../Components/MainPage/Services/Services";
import GetQoute from "../Components/MainPage/GetQoute";
import ContactPage from "../Components/Contact/ContactPage";
import Header from "../Components/MainPage/Header";
import HeroGeneral from "../Components/General/HeroGeneral";

const page = () => {
  return (
    <div>
      <Header />
      <HeroGeneral
        Title={"Why Us ?"}
        slogan={`Home /why us`}
        image="/images/bg1.png"
      />
      <WhyChooseUs />

      <Services />
      <OurWorkflow />
      <GetQoute />
      <ContactPage />
      <Footer />
    </div>
  );
};

export default page;
