import React from 'react'
import Featuers from './Featuers'
import Parterns from './Parterns'
import Form from './Form'

const Registration = () => {
  return (
    <div className=" mt-10">
      <div className="container mx-auto px-8   py-12">
        <div className="grid grid-cols-2 md:grid-cols-2 items-start">
          {/*   Left Section   */}
          <div className="items-center">
            <h1 className="text-4xl  font-semibold mb-4 h-24">
              More Than Just Logistics:<br />
              Your Growth Partner
            </h1>
            <p className="text-gray-600 mb-12">
              Our seamless logistics solutions empower brands to grow faster and smarter.<br />
              Let's move your business forward.
            </p>

            <Featuers />  

            <Parterns />
          </div>
          <Form />
        </div>
      </div>
    </div>
  )
}

export default Registration