import React from "react";
import Header from "../Components/MainPage/Header";
import Footer from "../Components/MainPage/Footer";
import HeroGeneral from "../Components/General/HeroGeneral";
import Projects from "../Components/MainPage/Projects/Projects";
import GetQoute from "../Components/MainPage/GetQoute";
import Testimonials from "../Components/MainPage/Testinomials/Testimonials";
import ContactPage from "../Components/Contact/ContactPage";
const page = () => {
  return (
    <div>
      <Header />
      <HeroGeneral
        Title="Projects"
        slogan="Home / Projects"
        image="/images/projects-bg-1.jpg"
      />

      <div className="lg:mt-[-7vmin]">
        <Projects title="Latest Projects" />
      </div>
      <GetQoute />
      <Testimonials />
      <ContactPage />
      <Footer />
    </div>
  );
};

export default page;
