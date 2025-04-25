import React from "react";
import Header from "../Components/MainPage/Header";
import ContactPage from "../Components/Contact/ContactPage";
import Footer from "../Components/MainPage/Footer";
import RightAnimation from "../Animations/RightAnimation";
import HeroGeneral from "../Components/General/HeroGeneral";
const page = () => {
  return (
    <div>
      <Header />
      <HeroGeneral
        Title="Contact Us"
        slogan="Home / Contact Us"
        image="/images/contact1.avif"
      />

      <RightAnimation>
        <ContactPage />
      </RightAnimation>

      <Footer />
    </div>
  );
};

export default page;
