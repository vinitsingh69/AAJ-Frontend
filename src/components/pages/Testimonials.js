import React from 'react'
import Testimonial from './Testimonial/Testimonial'

const Testimonials = () => {
    return (
        <div className=" ml-10 mr-10 bg-black text-gray-800 w-auto">
            <div className="container mx-auto px-4 py-16">
                {/* <!-- Header Section with Navigation --> */}
                <div className="flex justify-between items-center mb-12">
                    <h2 className="text-5xl  text-white">Client Testimonials</h2>
                    <div className="flex gap-4">
                        <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center hover:bg-red-700 transition">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* <!-- Testimonials Grid --> */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Testimonial />
                    </div>
                
            </div>
        </div>
    )
}

export default Testimonials