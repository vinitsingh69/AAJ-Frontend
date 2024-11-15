import React from 'react'
import Registration from './components/pages/Registration/Registration'
import Nav from './components/pages/Nav'
import Logistics from './components/pages/Logistics'
import Transpoter from './components/pages/Transpoter'
import Testimonials from './components/pages/Testimonials'
import Footer from './components/pages/Footer'

// Read README.md for LIVE DEPLOYED LINK   (https://aaj-enterprises.vercel.app/)
// run "npm install" before running the project
const App = () => {
  return (
    <div>
      <Nav/>
      <Registration />
      <Logistics />
      <Transpoter />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App