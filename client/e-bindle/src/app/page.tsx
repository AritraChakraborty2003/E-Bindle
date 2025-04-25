import Header from "./Components/MainPage/Header";
import Hero from "./Components/MainPage/Hero";
import Footer from "./Components/MainPage/Footer";
import About from "./Components/MainPage/About";
import Services from "./Components/MainPage/Services/Services";
import Projects from "./Components/MainPage/Projects/Projects";

import Testimonials from "./Components/MainPage/Testinomials/Testimonials";
import Faq from "./Components/MainPage/FAQ/Faq";
import GetQoute from "./Components/MainPage/GetQoute";
import Contact from "./Components/Contact/ContactPage";
import Loader from "./Components/MainPage/Loader";
import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  return (
    <>
      {loading && <Loader onFinish={() => setLoading(false)} />}
      {!loading && (
        <>
          <Header />
          <Hero />
          <About />
          <Services />
          <GetQoute />
          <Projects title="Our Projects" />
          <GetQoute />
          <Testimonials />
          <Faq />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}
