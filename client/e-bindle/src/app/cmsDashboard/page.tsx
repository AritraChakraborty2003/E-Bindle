import React from 'react';
import Header from '../Components/MainPage/Header';
import Footer from '../Components/MainPage/Footer';
import DashboardCard from '../CMS/cmsComponent/DashboardCard';

const cmsDashboard = () => {
  const data = [
    {
        id:1,
        image: "",
        title: "Add Project",
        link:"",
    },
    {
        id:2,
        image: "",
        title: "Add Admin",
        link:"",
    },
];
  return (
    <>  
    
        <Header />
        
        <div className="container flex gap-7 justify-center ">
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
