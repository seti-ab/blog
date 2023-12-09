import React from 'react';

const Card = (props) => {
    return (

        <div className={`rounded-2xl overflow-hidden w-full h-full bg-white px-2 py-10 ${props.className}`}>
            {props.image && <img className="w-full rounded-md" src={props.image} alt={props.title} />}
            <div>
                <div className="font-bold text-xl mb-2">{props.title}</div>
                <p className="text-gray-700 text-base">
                    {props.content}
                </p>
                {props.children}
            </div>
            <div className="pt-4 pb-2">
                {props.label && <span className="inline-block bg-gray-200 rounded-full py-2 px-5 text-sm font-semibold text-gray-700 mr-2 mb-2">{props.label}</span>}
            </div>
        </div>
    )
}

export default Card