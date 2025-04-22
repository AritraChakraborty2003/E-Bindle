import React from "react";
import Header from "../Components/MainPage/Header";
import Footer from "../Components/MainPage/Footer";
import HeroGeneral from "../Components/General/HeroGeneral";
import Projects from "../Components/MainPage/Projects/Projects";
import GetQoute from "../Components/MainPage/GetQoute";
import Testimonials from "../Components/MainPage/Testinomials/Testimonials";
const page = () => {
  return (
    <div>
      <Header />
      <HeroGeneral
        Title="Projects"
        slogan="Home / Projects"
        image="/images/projects-bg-1.jpg"
      />
      <Projects title="Latest Projects" />
      <GetQoute />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default page;
