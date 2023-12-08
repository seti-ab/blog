import React from 'react'

const ImageCard = ({ imageSrc, title }) => {
    return (
        <div className='flex flex-col relative items-center w-full h-full'>
            <h2 className='absolute font-bold text-3xl text-white'>{title}</h2>
            <img src={imageSrc} class="object-cover w-full h-full" alt="card"/>
        </div>
    )
}

export default ImageCard