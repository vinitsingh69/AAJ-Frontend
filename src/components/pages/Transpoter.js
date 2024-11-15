import React from 'react'
import transport_man from '../images/transport_man.png'

const Transpoter = () => {
    return (
        <div className="bg-white">
            <div className="container mx-auto px-4 py-16">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    {/*  Left Content Section  */}
                    <div className="lg:w-1/2 space-y-6">
                        <h1 className="text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight">
                            Is Your Business Held Hostage by a Single Transporter?
                        </h1>
                        <p className="text-lg text-gray-600">
                            With our wide range of transporter network, you gain the flexibility to switch and save on every shipment.
                        </p>
                        <button className="bg-red-700 text-white px-8 py-3 rounded-md hover:bg-red-700 transition duration-300">
                            Sign Up Now
                        </button>
                    </div>

                    {/* Right Image Section with Floating Logo*/}
                    <div className=" lg:w-1/2 relative">
                        <div className="relative">
                            {/* Central Circle with Delivery Person */}
                            <div className="w-80 h-80 bg-red-600 rounded-full mx-auto overflow-hidden relative">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <img src={transport_man} alt="Delivery Person" className="w-full h-full object-cover" />
                                </div>
                            </div>

                            {/* Floating Logo Circles */}
                          
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Transpoter