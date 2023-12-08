import React from 'react'

const Card = ({image,title,content}) => {
    return (
        <div class="rounded overflow-hidden shadow-lg w-full h-full">
            {image && <img class="w-full" src={image} alt="card"/>}
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{title}</div>
                <p class="text-gray-700 text-base">
                   {content}
                </p>
            </div>
            <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
            </div>
        </div>
    )
}

export default Card