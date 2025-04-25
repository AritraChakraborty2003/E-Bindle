// app/cms/page.tsx

import Projectpage from "../CMS/cmsComponent/projectpage";
import Footer from "../Components/MainPage/Footer";
import Header from "../Components/MainPage/Header";

export default function Page() {
  return (
    <>
      <Header />
      <Projectpage />
      <Footer />
    </>
  );
}
