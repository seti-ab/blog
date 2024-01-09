import React from 'react'
import Lottie from 'react-lottie';
import animationData from '../lotties/loading.json';

const Loading = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        <div className='mt-12 max-w-[160px] mx-auto px-3'>
            <Lottie
                options={defaultOptions}
                height="100%"
                width="100%"
            />
        </div>
    )
}

export default Loading;