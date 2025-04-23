
import React from 'react'
import CmsLogin from './cmsComponent/cmsLogin'
import Header from '../Components/MainPage/Header'
import Footer from '../Components/MainPage/Footer'


const page = () => {
  return (
    <>
    <div>
      <Header />
      <CmsLogin />
      <Footer />
    </div>
    </>
  )
}

export default page