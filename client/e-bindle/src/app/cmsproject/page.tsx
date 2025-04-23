import React from 'react'
import Projectform from '../CMS/cmsComponent/Projectform'
import ProjectOptBar from '../CMS/cmsComponent/ProjectOptBar'
import Header from '../Components/MainPage/Header'
import Footer from '../Components/MainPage/Footer'

const page = () => {
  return (
    <>
    <Header/>
    <div>
      <div>
        <ProjectOptBar />
      </div>

      <div>
        <Projectform />
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default page