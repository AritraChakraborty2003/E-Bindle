import React from "react";
import Header from "../Components/MainPage/Header";
import ContactPage from "../Components/Contact/ContactPage";
import Footer from "../Components/MainPage/Footer";
import RightAnimation from "../Animations/RightAnimation";
const page = () => {
  return (
    <div>
      <Header />
      <div className="mt-[32vmin] lg:mt-24">
        <RightAnimation>
          <ContactPage />
        </RightAnimation>
      </div>
      <Footer />
    </div>
  );
};

export default page;
