import Header from "./Components/MainPage/Header";
import Hero from "./Components/MainPage/Hero";
import Footer from "./Components/MainPage/Footer";
import About from "./Components/MainPage/About";
import Services from "./Components/MainPage/Services";
import Projects from "./Components/MainPage/Projects";
import WebsiteSEO from "./Components/MainPage/WebsiteSEO";
import Testimonials from "./Components/MainPage/Testimonials";
import Faq from "./Components/MainPage/Faq";
import GetQoute from "./Components/MainPage/GetQoute";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />

      <GetQoute />
      <Services />
      <Projects />
      <WebsiteSEO />
      <Testimonials />
      <Faq />
      <Footer />
    </>
  );
}
