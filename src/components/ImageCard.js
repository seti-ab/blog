import React from 'react'

const ImageCard = (props) => {
    return (
        <div
            className={`bg-dark flex flex-col relative items-center rounded-2xl overflow-hidden w-full min-h-[30vh] ${props.className}`}>
            <h2 className='absolute font-bold text-3xl text-white'>{props.title}</h2>
            <img src={props.imageSrc} className="object-cover w-full h-full" alt={props.title} />
        </div>
    )
}

export default ImageCard;