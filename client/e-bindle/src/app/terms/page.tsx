import React from "react";
import Header from "../Components/MainPage/Header";
import Footer from "../Components/MainPage/Footer";
import HeroGeneral from "../Components/General/HeroGeneral";
import TermsAndConditions from "./TermsAndConditions";
import LeftAnimation from "../Animations/LeftAnimation";

const page = () => {
  return (
    <>
      <Header />
      <HeroGeneral
        Title="Terms & Conditions"
        slogan="Home / Terms & Conditions"
        image="/images/Terms.avif"
      />

      <LeftAnimation>
        <div className="p-3">
          <TermsAndConditions />
        </div>
      </LeftAnimation>
      <Footer />
    </>
  );
};

export default page;
