import React from 'react'
import Provide from '../Components/About/Provide'
import Navbar from '../Components/common/Navbar'
import Footer from '../Components/common/Footer'
import Info from '../Components/About/Info'
import Says from '../Components/About/Says'
import Video from '../Components/About/Video'

const About = () => {
  return (
    <>
<Navbar/>
<Provide/>
<Video/>
<Info/>
<Says/> 
<Footer/>

    </>
  )
}

export default About