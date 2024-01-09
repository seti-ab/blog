import React from 'react'
import Lottie from 'react-lottie';
import animationData from '../lotties/404.json';

const NotFound = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        <div className='max-w-[600px] mx-auto px-3'>
            <p className='text-2xl text-center my-10 text-primary'>The page you're looking for isn't here anymore.</p>
            <div className='items-center flex flex-col justify-center'>
                <Lottie
                    options={defaultOptions}
                    height="80%"
                    width="100%"
                />
            </div>
        </div>
    )
}

export default NotFound;