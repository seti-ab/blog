import React from 'react';
import PostCategoryTag from '../features/posts/PostCategoryTag';
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Card = ({ className, image, title, content, children, tag }) => {
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
            <div className="pt-4 pb-5 text-center">
                <PostCategoryTag categoryId={tag}/>
            </div>
        </div>
    )
}

export default Card