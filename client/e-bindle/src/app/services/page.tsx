import React from "react";
import Footer from "../Components/MainPage/Footer";
import HeroGeneral from "../Components/General/HeroGeneral";
import Header from "../Components/MainPage/Header";
import Services from "../Components/MainPage/Services/Services";
import Testimonials from "../Components/MainPage/Testinomials/Testimonials";
import GetQoute from "../Components/MainPage/GetQoute";
import ContactPage from "../Components/Contact/ContactPage";

const page = () => {
  return (
    <>
      <Header />
      <main>
        <div className="content">
          <HeroGeneral
            Title="Our Services"
            slogan="Home / Services"
            image="/images/bg-service.jpg"
          />
        </div>

        <Services />

        <GetQoute />

        <Testimonials />

        <ContactPage />
      </main>
      <Footer />
    </>
  );
};

export default page;
