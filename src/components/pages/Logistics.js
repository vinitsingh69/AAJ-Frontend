import React from 'react'
import LogisticsCard from './Logistics/LogisticsCard'

const Logistics = () => {
    return (
        <div className='items-center'>
            <div className="ml-10 mr-10 bg-black text-gray-800 w-auto">
            <div className="container mx-auto px-4 py-12">
                {/*  Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl  text-white mb-4">Transforming Logistics. Scaling Businesses</h1>
                    <p className="text-gray-400 text-lg">Simplifying transportation so you can focus on growing your business.</p>
                </div>

                {/* Services Grid  */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <LogisticsCard/>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Logistics