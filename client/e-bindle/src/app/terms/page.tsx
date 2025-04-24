import React from 'react'
import Header from '../Components/MainPage/Header'
import Footer from '../Components/MainPage/Footer'
import HeroGeneral from '../Components/General/HeroGeneral'
import TermsAndConditions from './TermsAndConditions'

const page = () => {
  return (
    <>
    <Header />
    <HeroGeneral
     Title="Terms & Conditions"
     slogan="Home / Terms & Conditions"
     image="/images/Terms.avif"/>
     <div className="p-3">
     <TermsAndConditions/>
     </div>
    <Footer />
    </>
  )
}

export default page