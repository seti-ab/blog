import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    const footerItems = [
        { name: "Home", path: "/" },
        { name: "Posts", path: "/posts" },
        { name: "Categories", path: "/categories" },
        { name: "About Me", path: "/about-me" },
    ]
    return (
        <footer className="bg-transparent">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between border-t-2">
                <span className="text-sm text-gray-500 sm:text-center ">© 2024 Setayesh Abouei</span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0">
                    {footerItems.map(item => (
                        <li key={item.name}>
                            <Link className="hover:underline me-4 md:me-6" to={item.path}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>

    )
}

export default Footer