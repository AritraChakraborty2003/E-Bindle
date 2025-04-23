import React from 'react';
import Header from '../Components/MainPage/Header';
import Footer from '../Components/MainPage/Footer';
import DashboardCard from '../CMS/cmsComponent/DashboardCard';

const Dashboard = () => {
  const data = [
      {
          id:1,
          image: "",
          title: "Manage Project",
          link:"",
      },
      {
          id:2,
          image: "/icons/manageadmin.jpg",
          title: "Manage Admin",
          link:"",
      },
  ];

  return (
    <>
      <div>
        <Header />
        {
        data.map((item, index) => (
        <DashboardCard key={index} item={item} />
        ))}
        <Footer />
      </div>
    </>
  );
};

export default Dashboard;
