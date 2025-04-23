import React from 'react';
import Header from '../Components/MainPage/Header';
import Footer from '../Components/MainPage/Footer';
import DashboardCard from '../CMS/cmsComponent/DashboardCard';

const cmsDashboard = () => {
  const data = [
    {
        id:1,
        image: "/images/addproject.jpg",
        title: "Add Project",
        link:"",
    },
    {
        id:2,
        image: "/images/addadmin.jpg",
        title: "Add Admin",
        link:"",
    },
    {
      id:3,
      image: "/images/addadmin.jpg",
      title: "Add 1234",
      link:"",
  },
  {
    id:4,
    image: "/images/addadmin.jpg",
    title: "Add xyz",
    link:"",
  },
  {
    id:5,
    image: "/images/addadmin.jpg",
    title: "Add something",
    link:"",
  },
];
  return (
    <>  
    
        <Header />
        
        <div className="container flex gap-[4vmin] justify-center flex-wrap mt-[25vmin] lg:mt-[20vmin]">
          {
            data.map((item, index) => (
              <DashboardCard key={index} item={item} />
            ))}
       
       </div>
               
          <Footer />
      
    </>
  );
};

export default cmsDashboard;
