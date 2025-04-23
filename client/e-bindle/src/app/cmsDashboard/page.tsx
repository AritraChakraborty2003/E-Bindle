import React from 'react';
import Header from '../Components/MainPage/Header';
import Footer from '../Components/MainPage/Footer';
  import ProjectCard from '../CMS/cmsComponent/projectCard';

const Page = () => {
  return (
    <>
      <div>
        <Header />
        <ProjectCard />
        <Footer />
      </div>
    </>
  );
};

export default Page;
