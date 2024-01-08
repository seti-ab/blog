import React from 'react'

const ImageCard = ({ imageSrc, title, className }) => {
    return (
        <div className={`flex flex-col relative items-center rounded-2xl overflow-hidden shadow-lg w-full h-full ${className}`}>
            <h2 className='absolute font-bold text-3xl text-white'>{title}</h2>
            <img src={imageSrc} className="object-cover w-full h-full" alt="card" />
        </div>
    )
}

export default ImageCard