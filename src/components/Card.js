import React from 'react'

const Card = ({ image, title, content, className }) => {
    return (
        <div className={`rounded-2xl overflow-hidden shadow-lg w-full h-full bg-white p-10 ${className}`}>
            {image && <img className="w-full" src={image} alt="card" />}
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">
                    {content}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
            </div>
        </div>
    )
}

export default Card