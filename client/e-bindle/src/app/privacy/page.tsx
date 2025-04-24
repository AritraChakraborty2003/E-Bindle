import React from 'react'
import Header from '../Components/MainPage/Header'
import Footer from '../Components/MainPage/Footer'
import PrivacyPolicy from './PrivacyPolicy'
import HeroGeneral from '../Components/General/HeroGeneral'

const page = () => {
  return (
    <>
    <Header/>


 
    <HeroGeneral
    Title="Privacy Policy"
    slogan="Home / Privacy Policy"
    image="/images/corp.jpg"
    />

    <div className='p-3'>
        <PrivacyPolicy/>
    </div>

    <Footer/>
    </>
  )
}

export default page