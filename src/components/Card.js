import React from 'react';
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Card = (props) => {
    return (

        <div className={classNames("rounded-xl overflow-hidden w-full h-full bg-white", props.className)}>
            {props.image && <img className="w-full" src={props.image} alt={props.title} />}
            <div className='px-8 py-2'>
                <div className="font-bold text-xl my-2 min-h-[84px]">{props.title}</div>
                <p className="text-gray-700 text-base h-20 overflow-auto">
                    {props.content}
                </p>
                {props.children}
            </div>
            <div className="pt-4 pb-2 pl-6">
                {props.label && <span className="inline-block bg-gray-200 rounded-full py-2 px-5 text-sm font-semibold text-gray-700 mr-2 mb-2">{props.label}</span>}
            </div>
        </div>
    )
}

export default Card