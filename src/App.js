import React from 'react'
import Registration from './components/pages/Registration/Registration'
import Nav from './components/pages/Nav'
import Logistics from './components/pages/Logistics'
import Transpoter from './components/pages/Transpoter'
import Testimonials from './components/pages/Testimonials'
import Footer from './components/pages/Footer'

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