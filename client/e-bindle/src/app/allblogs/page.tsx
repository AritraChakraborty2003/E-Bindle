import React from "react";
import Header from "../Components/MainPage/Header";
import Footer from "../Components/MainPage/Footer";
import KnowledgeCenter from "./KnowledgeCenter";

const page = () => {
  return (
    <div>
      <Header />
      <KnowledgeCenter />
      <Footer />
    </div>
  );
};

export default page;
