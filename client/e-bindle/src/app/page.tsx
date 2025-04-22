import Header from "./Components/MainPage/Header";
import Hero from "./Components/MainPage/Hero";
import Footer from "./Components/MainPage/Footer";
import About from "./Components/MainPage/About";
import Services from "./Components/MainPage/Services/Services";
import Projects from "./Components/MainPage/Projects/Projects";

import Testimonials from "./Components/MainPage/Testinomials/Testimonials";
import Faq from "./Components/MainPage/FAQ/Faq";
import GetQoute from "./Components/MainPage/GetQoute";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <GetQoute />
      <Projects />
      <GetQoute />
      <Testimonials />
      <Faq />
      <Footer />
    </>
  );
}
