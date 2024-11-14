import React from 'react'


import testimonialdata from '../../data/testimonialdata'
const Testimonial = () => {
    return (
        
            testimonialdata.map( (item) => {
                return (
                    <div className="bg-white backdrop-blur-sm rounded-2xl p-8 relative">
                        <div className="mb-6">
                            <p className="text-white/90 text-lg leading-relaxed">
                                {item.p}
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 rounded-full overflow-hidden">
                                <img src={item.image} alt="Client" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <h4 className="text-white font-semibold">{item.name}</h4>
                                <p className="text-white/60">{item.position}</p>
                            </div>
                        </div>
                        <div className="mt-6">
                        <img src={item.companyImg} alt="Tynor Orthotics Pvt Ltd" className="h-12" />
                            <p className="text-white/60 text-sm">{item.company}</p>
                        </div>
                    </div>
                ) 
        })
        
    )
}

export default Testimonial

