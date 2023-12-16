import React from 'react';
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Card = ({ className, image, title, content, children, label }) => {
    return (

        <div className={classNames("rounded-xl overflow-hidden w-full h-full bg-white", className)}>
            {image && <img className="w-full" src={image} alt={title} />}
            <div className='px-8 py-2'>
                {title && <h3 className="font-bold text-xl my-2 min-h-[84px]">{title}</h3>}
                {content && <p className="text-gray-700 text-base h-20 overflow-auto">
                    {content}
                </p>}
                {children}
            </div>
            <div className="pt-4 pb-2 pl-6">
                {label && <span className="inline-block bg-gray-200 rounded-full py-2 px-5 text-sm font-semibold text-gray-700 mr-2 mb-2">{label}</span>}
            </div>
        </div>
    )
}

export default Card