import React from 'react'
import service from '../../data/service'

const LogisticsCard = () => {
    return (
        service.map((item) => {
            return (
                <div className="bg-white rounded-lg p-6 shadow-lg">
                    <div className="w-auto h-50 mb-4 mt-10">
                        <div>
                            {item.logo()}
                        </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-8">{item.name}</h3>
                    <p className="text-gray-600 mb-20">{item.description}</p>
                </div>
            )
        })

    )
}

export default LogisticsCard