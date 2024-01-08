import React from 'react'

const Page = ({ children, title }) => {
    return (
        <section className="bg-white py-8 px-12 rounded-xl md:px-8 w-full">
            <h1 className='text-center text-3xl font-bold text-violet-950 mb-8'>{title}</h1>
            {children}
        </section>
    )
}

export default Page;