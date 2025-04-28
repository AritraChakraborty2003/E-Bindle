import HeroGeneral from "@/app/Components/General/HeroGeneral";
import GetQoute from "@/app/Components/MainPage/GetQoute";
import Footer from "@/app/Components/MainPage/Footer";
import ContactPage from "@/app/Components/Contact/ContactPage";
import Testimonials from "@/app/Components/MainPage/Testinomials/Testimonials";
import Header from "@/app/Components/MainPage/Header";
import ServiceSection from "@/app/Components/MainPage/Services/ServicesSection";
import SubServiceCard from "@/app/Components/MainPage/Services/SubServiceCard";

export default async function Page({ params }) {
  const text = params.slug.replace("%20", " ");
  return (
    <>
      <Header />
      <HeroGeneral
        Title={text}
        slogan={`Home /${text}`}
        image="/images/projects-bg-1.jpg"
      />
      x
      <main>
        <ServiceSection text={text} />

        <SubServiceCard />
      </main>
      <GetQoute />
      <Testimonials />
      <ContactPage />
      <Footer />
    </>
  );
}
